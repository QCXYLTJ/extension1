import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //替换完成
    return {
        name: '综漫季刊壹',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_08shadidala = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_01jianpaxiwaer = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04doujiekeo = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_06faxiaorang = `<img src=extension/综漫季刊壹/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_04doudaizong = `<img src=extension/综漫季刊壹/image/二星.png width="47" height="20">`;
            lib.characterTitle.zm_03qiangzeta = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_06fajiershitaliya = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_06famogenlefei = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_06faaertuoliya = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linlalaiye = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07keyanxiaoluo = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_05qikaesi = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_03qiangbeilier = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_08shaluoji = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_09hufutaoping = `<img src=extension/综漫季刊壹/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_08shayouaier = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongwangda = `<img src=extension/综漫季刊壹/image/二星.png width="47" height="20">`;
            lib.characterTitle.zm_10kuanglamuleisaer = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jiannaermeiya = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09hucheerni = `<img src=extension/综漫季刊壹/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_09hubailang = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruzuoyi = `<img src=extension/综漫季刊壹/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_04doupulao = `<img src=extension/综漫季刊壹/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_03qiangkalienina = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shaguixiaotailang = `<img src=extension/综漫季刊壹/image/二星.png width="47" height="20">`;
            lib.characterTitle.zm_20shenjiamo = `<img src=extension/综漫季刊壹/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_09hulumuyuan = `<img src=extension/综漫季刊壹/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_01jianwagena = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_02gongkarong = `<img src=extension/综漫季刊壹/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_13lingshengzhu = `<img src=extension/综漫季刊壹/image/四星.png width="77" height="20">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy1 = {
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
                    for (var i in lib.characterPack.综漫季刊壹) {
                        if (i == player.name) {
                            num0++;
                        }
                    }
                    if (num0 == 0) return false;
                    return player.storage.zmt_np == undefined || player.storage.zmt_np == NaN;
                },
                content() {
                    'step 0';
                    if (!player.hasSkill('subplayer')) {
                        player.storage.zmt_np = 0;
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
                                    np1.setBackgroundImage('extension/综漫季刊壹/image/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊壹/image/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊壹/image/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊壹/image/np000.png');
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
            lib.skill._zmtnlcz1 = {
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
                    for (var i in lib.characterPack.综漫季刊壹) {
                        if (i == player.name) {
                            num0++;
                        }
                    }
                    if (num0 == 0) return false;
                    if (name == 'phaseDrawEnd') {
                        return player.storage.zmt_np < 120;
                    } else {
                        //if(event.parent.parent.name=='phaseDraw') return false;
                        return _status.currentPhase != player && event.cards && event.cards.length;
                    }
                },
                content() {
                    if (player.storage.zmt_np == NaN) {
                        player.storage.zmt_np = 0;
                    }
                    if (event.triggername == 'phaseDrawEnd') {
                        var num1 = trigger.num;
                        player.storage.zmt_np += num1 * 5;
                        if (get.mode() == 'guozhan') {
                            var num1 = trigger.num;
                            player.storage.zmt_np += num1 * 5;
                        }
                    }
                    if (_status.currentPhase != player) {
                        player.storage.zmt_np += 5;
                        if (get.mode() == 'guozhan') {
                            player.storage.zmt_np += 5;
                        }
                    }
                },
            };
            //------------------------------------------------------卡面查看--------------------------------------------------------//
            game.say2 = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add(`<div class="text" style="word-break:break-all;display:inline">${str}</div>`);
                dialog.classList.add('popped');
                ui.window.appendChild(dialog);
                var width = dialog.content.firstChild.firstChild.offsetWidth;
                if (width < 190) {
                    dialog._mod_height = -16;
                } else {
                    dialog.content.firstChild.style.textAlign = 'left';
                }
                dialog.style.width = width + 16 + 'px';
                lib.placePoppedDialog(dialog, {
                    clientX: (this.offsetLeft + this.offsetWidth / 2) * game.documentZoom,
                    clientY: (this.offsetTop + this.offsetHeight / 4) * game.documentZoom,
                });
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                dialog.style.left = 'calc(45%)';
                dialog.style.top = 'calc(10%)';
                setTimeout(function () {
                    dialog.delete();
                }, 3500);
            };
            //------------------------------------------------势力--------------------------------------------------//
            lib.translate.zm1ru = '裁';
            lib.translate.zm1ruColor = '#FFFF00';
            lib.group.push('zm1ru');
            lib.translate.zm1ti = '异';
            lib.translate.zm1tiColor = '#FFFF00';
            lib.group.push('zm1ti');
            lib.translate.zm1yan = '衍';
            lib.translate.zm1yanColor = '#FFFF00';
            lib.group.push('zm1yan');
            lib.translate.zm1do = '斗';
            lib.translate.zm1doColor = '#FFFF00';
            lib.group.push('zm1do');
            lib.translate.zm1ke = '械';
            lib.translate.zm1keColor = '#FFFF00';
            lib.group.push('zm1ke');
            lib.translate.zm1qiang = '枪';
            lib.translate.zm1qiangColor = '#FFFF00';
            lib.group.push('zm1qiang');
            lib.translate.zm1kuang = '狂';
            lib.translate.zm1kuangColor = '#FFFF00';
            lib.group.push('zm1kuang');
            lib.translate.zm1gong = '弓';
            lib.translate.zm1gongColor = '#FFFF00';
            lib.group.push('zm1gong');
            lib.translate.zm1fa = '法';
            lib.translate.zm1faColor = '#FFFF00';
            lib.group.push('zm1fa');
            lib.translate.zm1shen = '神';
            lib.translate.zm1shenColor = '#FFFF00';
            lib.group.push('zm1shen');
            lib.translate.zm1jian = '剑';
            lib.translate.zm1jianColor = '#FFFF00';
            lib.group.push('zm1jian');
            lib.translate.zm1ling = '灵';
            lib.translate.zm1lingColor = '#FFFF00';
            lib.group.push('zm1ling');
            lib.translate.zm1qi = '骑';
            lib.translate.zm1qiColor = '#FFFF00';
            lib.group.push('zm1qi');
            lib.translate.zm1hu = '守';
            lib.translate.zm1qiColor = '#FFFF00';
            lib.group.push('zm1hu');
            lib.translate.zm1sha = '杀';
            lib.translate.zm1shaColor = '#FFFF00';
            lib.group.push('zm1sha');
            lib.translate.zm1lin = '临';
            lib.translate.zm1linColor = '#FFFF00';
            lib.group.push('zm1lin');
            if (config.ZMSLTB1) {
                lib.translate.zm1ru = `<img src=extension/综漫季刊壹/image/zm1ru.png width="28" height="28">`;
                lib.translate.zm1chan = `<img src=extension/综漫季刊壹/image/zm1chan.png width="28" height="28">`;
                lib.translate.zm1lin = `<img src=extension/综漫季刊壹/image/zm1lin.png width="28" height="28">`;
                lib.translate.zm1hu = `<img src=extension/综漫季刊壹/image/zm1hu.png width="28" height="28">`;
                lib.translate.zm1dao = `<img src=extension/综漫季刊壹/image/zm1dao.png width="28" height="28">`;
                lib.translate.zm1ti = `<img src=extension/综漫季刊壹/image/zm1ti.png width="28" height="28">`;
                lib.translate.zm1yan = `<img src=extension/综漫季刊壹/image/zm1yan.png width="28" height="28">`;
                lib.translate.zm1do = `<img src=extension/综漫季刊壹/image/zm1do.png width="28" height="28">`;
                lib.translate.zm1ke = `<img src=extension/综漫季刊壹/image/zm1ke.png width="28" height="28">`;
                lib.translate.zm1sha = `<img src=extension/综漫季刊壹/image/zm1sha.png width="28" height="28">`;
                lib.translate.zm1gong = `<img src=extension/综漫季刊壹/image/zm1gong.png width="28" height="28">`;
                lib.translate.zm1fa = `<img src=extension/综漫季刊壹/image/zm1fa.png width="28" height="28">`;
                lib.translate.zm1qiang = `<img src=extension/综漫季刊壹/image/zm1qiang.png width="28" height="28">`;
                lib.translate.zm1qi = `<img src=extension/综漫季刊壹/image/zm1qi.png width="28" height="28">`;
                lib.translate.zm1xie = `<img src=extension/综漫季刊壹/image/zm1xie.png width="28" height="28">`;
                lib.translate.zm1shen = `<img src=extension/综漫季刊壹/image/zm1shen.png width="28" height="28">`;
                lib.translate.zm1ling = `<img src=extension/综漫季刊壹/image/zm1ling.png width="28" height="28">`;
                lib.translate.zm1kuang = `<img src=extension/综漫季刊壹/image/zm1kuang.png width="28" height="28">`;
                lib.translate.zm1jian = `<img src=extension/综漫季刊壹/image/zm1jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp421 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊壹/mp4/${Q}.mp4`;
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
            lib.skill._dieAudiozmjk1 = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊壹/audio', trigger.player.name);
                },
            };
            game.playzm1 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio(`../extension/综漫季刊壹/audio/${fn}`);
                } //QQQ
            };
            HTMLDivElement.prototype.zm1t = function (bg, pos, time, func) {
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
            //------------------------------------------------武将--------------------------------------------------//
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊壹',
                    connect: true,
                    character: {
                        zm_08shadidala: ['male', 'zm1sha', 4, ['zmqibaoniantu', 'zmc0zibao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】起爆黏土<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】使用特殊的爆遁战斗,狂热地追求爆炸的瞬间升华并将之称为艺术;<br>\n少年时期迪达拉为了证明自己的艺术而接受了众多恐怖袭击任务,最终因败于宇智波鼬加入晓组织.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_01jianpaxiwaer: ['male', 'zm1jian', 4, ['zmlingxiuqizhipx', 'zmyandizhijian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】炎帝之剑<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】将时刻保持形象风度刻入生活的王储,看起来有些贵族的架子但与有才能的人交流时相当平宜近人.<br>\n帕西瓦尔曾与兰斯洛特隶属于同一个骑士团,共同担任副团长.且两人拥有共同的老师.武器为一把波浪剑身的长剑和红莲之火,因其勇猛高贵的英姿而被称作炎帝.<br>\n离开骑士团后帕西瓦尔为了建设和平理想的国家奔走诸国,寻找志同道合的改革者.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_04doujiekeo: ['female', 'zm1do', 4, ['zmgouzhuangbushu', 'zmleyuanqudong'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性完全中立.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】乐园驱动<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】瓦伦泰系列最终型,同时也是索尔的爱人,阿莉亚的半身.<br>\n杰克O的状态确切地说,是阿莉亚碎片记忆的合成,旨在覆盖Justice的个人信息部门,就像一个物理补丁.<br>\n由于提取自Justice的灵魂不完整,故而项目杰克O分裂出了两个人格,一个是成熟的类似本体的人格,一个是青春的孩子气的人格.<br>\n在战斗能力上,杰克O作为Justice的改造品拥有极强的性能、庞大的魔力与检索实体物质概念的能力,认真起来甚至还要凌驾于拉姆蕾萨尔•瓦伦泰之上.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_06faxiaorang: ['male', 'zm1fa', 3, ['zmshengshoushusheng', 'zmyizidangxian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】义字当先<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】梁山泊好汉第四十六位,地文星<圣手书生>萧让.<br>\n萧让原是济州文士,擅临摹各家字体,以假乱真.宋江浔阳楼提反诗事发后,吴用的营救计划中需要这么一位可以模仿蔡京手书的人才,自然便想到了旧识萧让.于是萧让与金大坚完美伪造了蔡京的书信与官印,进而使得宋江脱险,二人也自此加入梁山.<br>\n梁山大聚义后,萧让为山寨掌管监造诸事十六头领之一,专管行文走檄调兵遣将.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_04doudaizong: ['male', 'zm1do', 4, ['zmshenxingtaibao', 'zmqianlichuanxun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】千里传讯<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】梁山泊好汉第二十位,天速星<神行太保>戴宗.<br>\n戴宗原是江州两院押牢节级,有道术神行法,将四片神行甲马拴在腿上后可日行八百里夜行六百里.戴宗初时与梁山好汉合谋伪造蔡京书信以营救宋江,却被识破,判处斩刑,被梁山好汉救出,因此上梁山入伙.梁山大聚义后其职司为总探声息头领.<br>\n梁山受招安后,戴宗随宋江南征北战,先后征讨辽国、河北田虎、淮西王庆、江南方腊.他虽从未斩将夺城,但却有传递军情、军令之功.江南平定后,戴宗作为幸存正将,被授为武节将军、兖州府都统制.他在受封众将中第一个纳还官诰,到泰安州岳庙陪堂出家,殷勤奉祀圣帝香火,数月后<大笑而终>.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_03qiangzeta: ['female', 'zm1qiang', 4, ['zmzhenhongchuanguang', 'zmaerbeisizhiqiang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】封印兵装:阿尔贝斯<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】组织的顶尖战力之一,狩猎星晶兽的战场先锋.<br>\n容易冲动的女战士,自尊心强,态度高傲且毒舌.<br>\n不过这些其实都源于她死板认真的性格,对待性格比较软弱和年龄比自己小的人时也有温柔的一面.<br>\n使用破坏力卓著的阿尔贝斯之枪贯穿敌人,任务中多是由她给予敌人最后一击.<br>\n与性格稳重的巴萨拉卡是搭档,兴趣是拌嘴与在生活中寻找巴萨拉卡的弱点.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_06fajiershitaliya: ['male', 'zm1fa', 3, ['zmzhanxingshu', 'zmtiantimoshu', 'zmguanweizhiding'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】冠位指定•人理保障天球<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】时钟塔十二学科之一天体科的主席,名门之中的名门沃戴姆家的年轻家主,家世和魔术回路都有着以千年为单位的历史;<br>\n基尔什塔利亚·沃戴姆在魔术方面有着被称为至宝的才能,在时钟塔时因为其资质而被许多人崇拜,但也遭到了嫉妒,甚至遭到了自己亲生父亲的刺杀.据说如果没去迦勒底的话其能力足以在时钟塔建立第十三门学科.<br>\n可惜他的天体魔术在低魔的现代根本无法实现,连带他也被评价为虽说是天才但也不过是纸上谈兵,毫无实际利益.<br>\n地球白纸化后其与异星神同盟,于希腊异闻带将占星术变为现实:将宇宙的魔力化为自身力量实现了占星术原本的形态——可以对银河系内天体进行干涉的最大魔术回路并碾压了迦勒底一行.<br>\n之后在关键时刻基尔什塔利亚背叛异星神,确认迦勒底一行安全离开并将异星神放逐后力竭身亡.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_06famogenlefei: [
                            'female',
                            'zm1fa',
                            4,
                            ['zmbihudeyazheng', 'zmlaizizhijing', 'zmwukechujidelixiangxiang'],
                            [
                                'zhu',
                                'des: ' +
                                '【属性】' +
                                `<img src=extension/综漫季刊壹/image/属性人形.png 
                                    width="34" height="22">
                                    <img src=extension/综漫季刊壹/image/属性高等力量.png 
                                    width="56" height="22">` +
                                ' <br>\n' +
                                '【阵营】' +
                                `<img src=extension/综漫季刊壹/image/属性守序邪恶.png width="57" height="19">` +
                                ' <br>\n' +
                                '【职阶】施法者<br>\n' +
                                '【宝具】无可触及的理想乡<br>\n' +
                                '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' +
                                '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' +
                                '【爆发】★★★★★★☆☆☆☆<br>\n' +
                                '【控制】★★★☆☆☆☆☆☆☆<br>\n' +
                                '【生存】★★★★★☆☆☆☆☆<br>\n' +
                                '【成长】★★★★★★★☆☆☆<br>\n' +
                                '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' +
                                '【治疗】★★★★☆☆☆☆☆☆<br>\n' +
                                '【特质】支配异闻带·妖精国不列颠的女王.<br>\n在亚瑟王没有出现的异闻带不列颠,摩根建立了绝对王政,用长达2000年的暴政不断折磨着妖精们.<br>\n同时她也是最高位的妖精,将止境之枪·伦戈米尼亚德作为魔术习得,达到神域级别的魔术师.<br>\n据说泛人类史的摩根淫荡、残忍、任性,是典型的恶女性格,但经历了漫长的旅途后,这位摩根已经将那些要素一一扼杀,现在只是个深藏不露的才女.不过,她只是在深藏不露,所以如果处于被逼得走投无路的事态下,她也会考虑重新拾起曾经的残忍与下流嗜好.<br>\n' +
                                '【评级】<b><font color=Gold>A</font></b>\n',
                            ],
                        ],
                        zm_06faaertuoliya: ['female', 'zm1fa', 4, ['zmjianzhimoshu', 'zmhuzhijiahu', 'zmzhenyuanjijie'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】真圆集结的誓约之星<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】异闻带世界中,还未成为王的阿尔托莉雅.<br>\n身在妖精国度的阿尔托莉雅拔起了选定之杖,跟随<梅林>学习着种种魔术,因而性格比泛人类史的亚瑟更加轻快懒散.<br>\n然而比泛人类史更残酷的是,在选定之杖所指引的命运前方等待她的将是为王千年的妖精摩根和她麾下的妖精圆桌骑士们,以及整个世界的残酷真相...<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_14linlalaiye: ['female', 'zm1lin', 4, ['zmweidayurumengzhishi', 'zmzhipeiyufengkuangzhishi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】支配于疯狂之时<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】由<拉莱耶文本>所诞生的幻灵,并非真正的旧日支配者,但也有祂们的少部分特质.<br>\n作为传说中描述克苏鲁和克苏鲁崇拜的典籍,原始的<拉莱耶文本>记载了关于深潜者、海德拉、达贡、克苏鲁的隐秘知识.由这份知识引出的人类,或其它什么智慧生命的深邃幻想构成了这位幻灵拉莱耶.<br>\n浮现者或会沉没,而沉没者或会浮现.祂们所代表的概念,在人类存在以前便已存在.那是远超人类历史之物,那是凌驾人类理解之物.当群星正位之刻来临,祂们将从星空与地底苏醒,展现时间的奇点,旧日的奥秘.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_13lingshengzhu: ['male', 'zm1ling', 6, ['zmzhengqifengyin'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性龙族.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性元素.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性巨大.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】十二符咒<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★★★★★★★☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】曾经统治亚洲的火之恶魔,力量被剥离后变成了石像的样子.<br>\n圣主是上古八大恶魔中的最强者,代表离卦的火之恶魔,同时也是强大的巫师,掌握无数的魔法奥秘.<br>\n在上古恶魔们被神明封印后曾蛊惑其它恶魔帮助它脱困,之后狡猾的圣主并没有兑现承诺放出其它恶魔,反而还私底下重建自己的王国独自称霸人间,再次统治了整个亚洲.<br>\n最终圣主还是因残暴的统治被人类推翻,体内的神力被分解成十二符咒分散在世界各地.只有集齐所有符咒它才可以重新从石像中复活取回真正的力量.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_07keyanxiaoluo: ['female', 'zm1ke', 4, ['zmlinghuawuzhuang', 'zmyanwangjiadao'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性神性.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性龙族.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】阎王驾到<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】某世界新上任的地府之主,开启了科魔融合新浪潮.<br>\因老阎王得病退休,胆小、怕鬼的女儿阎小罗不得不接过阎王的担子,统领千万阴兵,管理无数鬼怪,还得挫败各方势力的阴谋.<br>\阎小罗一向喜爱凡间科技,上任后得到太上老君的灵化技术支持可以将各种现代武器魔改使之威力几何倍数的增加.<br>\配有装甲车战鬼号,战斗时会怂后方使用加特林机枪扫射敌人.<br>\n随着历练察觉到自己与上古大神烛九阴有极大关系,其身世至今仍是谜团...<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_05qikaesi: ['male', 'zm1qi', 4, ['zmgerenjifen', 'zmqunmengdexuanxiao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】群氓的喧嚣<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】自<乌合之众:大众心理研究>中诞生的幻灵,其[个人思想将会被群体淹没]这一特质连自己也无法豁免.<br>\n<乌合之众>是古斯塔夫·勒庞创作的社会心理学著作,其中细致描述了群体心理的一般特征,分析了人们在群聚状态下的心理、道德、行为特征.解释了为何群体往往呈现出<盲目>、<冲动>、<狂热>、<轻信>的特点,而统治者又是如何利用群体的这些特点建立和巩固自身统治的.<br>\n简单来说,这是一门关于煽动和控制思想的学问,毕竟乌合之众们最喜欢那些响亮的声音,尖锐的观点,非黑即白的判断……<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_03qiangbeilier: ['male', 'zm1qiang', 4, ['zmjiaozhisizhang', 'zmzhimingyouxi'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性魔性.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】致命游戏<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】原初星晶兽,所有堕天司的首领,掌管智慧进化的一环——狡知.<br>\n贝利尔是作为方便管理统御世界概念而被创造的众多原初星晶兽之一,实力地位与天司长路西菲尔相近.其人性格恶劣满口谎言,以最差劲的混蛋而闻名,但唯独对创造了自己的路西法忠心耿耿.<br>\n通过在幕后引导布局,俯视被因果愚弄的众生是贝利尔最大的乐趣,据说他现在也仍为解放受困于次元缝隙中的路西法而谋划着.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_08shayouaier: ['female', 'zm1sha', 4, ['zmyetianguang', 'zmrongyuefeiren'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】融月绯刃<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】濒临灭绝的的王室艾伦族,那只大尾巴就是身份的象征.<br>\n没落王家的后代,曾经与姐妹为了寻回神器进行了艰难的冒险,最终切断了与九尾的因缘.<br>\n尤艾尔施展的剑舞既是王家的标志也是力量的体现,动作优美华丽,必要时也绝不失危险凌厉.<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_02gongkarong: ['male', 'zm1gong', 4, ['zmxianzhederuizhi', 'zmyingxiongzhizaok', 'zmtianxieyishe'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】天蝎一射<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】希腊神话中的半人马大贤者,后来升上天空成为射手座.<br>\n喀戎精通各种知识,由于他那沉稳的性格与巧妙的教授方法,希腊受他教育的英雄不计其数.<br>\n赫拉克勒斯、阿喀琉斯、伊阿宋、阿斯克勒庇俄斯、卡斯托耳……尽管年代千差万别,但大家都是喀戎的门下弟子.<br>\n其宝具是化为射手座的喀戎始终瞄准着天蝎这个故事的具现化,不是由弓,而是由星辰射出的神速一击——【天蝎一射】启动之时就连以神速著称的阿喀琉斯也无法回避.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongwangda: ['female', 'zm1gong', 4, ['zmwannengjiejueshi', 'zmyijianyisha'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】一箭一杀<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】从什么都会做转职什么都做的全能弓兵.<br>\n莱茵卡勒人,拥有三分钟热度的性格和不错的天赋.学生、修女、雇佣兵和宝藏猎人都做过并很快改行,最终成为了光荣的投机自由职业者.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_10kuanglamuleisaer: ['female', 'zm1kuang', 5, ['zmshengtigouzhuang', 'zmgouzhuangjiefang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性完全中立.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】生体构装<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】Backyard创造的生体兵器,虽有人的外表但并非人类.<br>\n曾经孤身一人向全世界发出宣战布告的少女,没有是非观和感情,战力强大.<br>\n被阻止后随着与其他智慧生物的接触开始拥有更多自我,寻找生命的意义.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jianwagena: ['female', 'zm1jian', 4, ['zmyanjianzhidun', 'zmmijiduotianyan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】米吉多天炎<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】[光轮]组织的最强执行官,能力为爆炎之EXS【Efreet】.<br>\n有<红骑士>之名的强大战士,嫉恶如仇.<br>\n过于强大的红骑士很少服从命令,即使是光轮总部也难以约束她;因此艾丽卡•瓦格娜总是独自行动,以自己的标准去狩猎那些虚无怪物和虚无化的人.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jiannaermeiya: ['female', 'zm1jian', 4, ['zmwanliyikong', 'zmhudieren'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】蝴蝶刃•天钿女命舞<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】娇小的多拉夫族女剑士,刀剑挥舞时会有蝴蝶般的幻影.<br>\n一心一意修行到有些疯狂,泰然自若积攒着异常锻炼的剑豪,特技是同步进行冥想和睡眠.<br>\n即便如此努力,技艺业已高绝,但曾经的老师十天众•奥克托的影子仍压迫着她,迫她继续向前.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_08shaluoji: ['male', 'zm1sha', 4, ['zmguijizhishen', 'zmqizhahuanjing'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】诡计之神<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】危险的恶作剧之神,为了找乐子什么都做得出来.<br>\n洛基出身于诸神之敌的巨人族,又因与神王奥丁是义兄弟的缘故成为阿萨神族中的谎言与诡计之神——亦可被视作智慧之神.他肆意地愚弄众神,最后又运用聪明的头脑为诸神带来许多好处.比如他剪断希芙的金发后又使其复原,而且让金发更加靓丽;协助巨人夏基虏走伊登又将其救回,顺便帮助诸神除掉了夏基.许多诸神的宝物都是洛基恶作剧后的<赔偿>.<br>\n然而这一切直到洛基过火的害死光明神巴德尔为止.众神再也无法容忍洛基的行为,将他封印并处刑直到世界的尽头.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09hufutaoping: ['female', 'zm1hu', 4, ['zmchuntaoshisheng', 'zmfushoushuangquan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性造物.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】福寿双全<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】自<粉彩蝠桃纹瓶>所诞生的幻灵,作为出色的花瓶爱好是网购柜子也很合理吧.<br>\n粉彩蝠桃纹瓶制作于清雍正时期,器壁绘粉彩桃树蝙蝠纹,有<福寿>之吉意.此类图案于橄榄瓶上极为罕见,传世稀少,目前仅见此一件.其于海外漂泊多年,数百年间环游大半个世界最终回到故土,收藏于上海博物馆.<br>\n' + '【评级】<b><font color=DarkKhaki>C-</font></b>\n']],
                        zm_09hucheerni: ['male', 'zm1hu', 4, ['zmguangyingpengpai', 'zmhongming'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】光影澎湃<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】莱塔尼亚德高望重的音乐家,直来直去的性格和对音乐的严格令人印象深刻.<br>\n威廉·菲赫特·车尔尼,只是提到他的名字,便能让他故乡的每个人心中充满自豪与崇敬.在维谢海姆事件中,车尔尼的生命一度垂危,但正是这一次危险的经历让他转变想法加入罗德岛.作为一名感染者音乐家,即使他消费了前半生的所有积蓄与版权也难易拯救小小的夕照区.不管是为了新的人生还是为了启发新的创作,他都决意从战场上开始新的生活.<br>\n从此之后,一片远比夕照区、远比莱塔尼亚更为广阔的大地,将在他眼前徐徐展开.于是,那方窄窄的小桌,再也装不下车尔尼胸中时刻汹涌咆哮的,对远方的渴望与向往.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_09hubailang: ['male', 'zm1hu', 4, ['zmsharenyishi', 'zmfangxueliaofa'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】放血疗法<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】传火乐园员工,驰名战场的老军医父女.<br>\n作为一名医者,白浪最鄙视的就是那种只会用超凡力量糊治愈术的外行医生.尽管当初他靠的是巫医技能和木匠裁缝手法入门,但医死了大量魔物又在战场上进行过海量粗暴手术,他倒是也构建出了一套极粗暴但行之有效的治疗手段.<br>\n因为技能效果原因,他诸如赤手硬抠子弹、将药草烟烟头弹进患者胸腔、将速溶咖啡混合血浆泵入患者心脏及用扳手敲击断腿正骨的手段并不会导致灾难性后果,但知道内幕的人还是不愿意上他的手术台.索性白浪不做医生也特别能打,又有高颜值的女儿莎尔芙做护士,总是可以捕获需要的患者.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_09hulumuyuan: ['female', 'zm1hu', 4, ['zmjiyuxiwang', 'zmjiyujiuji', 'zmjiyuchengjie', 'zmyuanhuanzhili'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】圆环之理<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】高维生命,独属于魔法少女们的概念[圆环之理]的化身.<br>\n很久前,宇宙中其他文明发现人类的精神性与因果是宇宙中唯一的逆熵能源.为了尽可能利用这种资源,被称为孵化者的终端诱骗转化率最高的少女签订契约,借由希望到绝望堕落的落差将她们燃尽.<br>\n因果的变化玄奇无比,即使孵化者也没想到有一名少女获得了时间旅行的能力,并纠集非线性时间中不同平行世界的因果于令一名少女鹿目圆身上.几何倍数增长的因果令鹿目圆一旦再次成为魔法少女就会获得奇迹般的能量,甚至足以凭此改变宇宙常数.于是鹿目圆许下了扭转因果的愿望,在高维层面改变了魔法少女相关的规则;虽然再难干涉其它现实事物,但自此她也成为了守护魔法少女们的神.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_20shenjiamo: ['female', 'zm1shen', 5, ['zmleyuquanneng', 'zmwanyuyingti', 'zmaideshijie'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性魔性.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】上位者<br>\n' + '【宝具】持爱却枯,无恋也<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★★★<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】爱神伽摩的残魂与魔罗融合的产物.曾为显现的人类恶之一:爱欲之兽.<br>\n身为注定要陪伴他人之爱,受他人之爱牵连导致死亡,最终获得了无限的爱神来说,自然是厌倦爱的.因此她打算用自己无限的爱填满一切,令一切生命永久沉寂堕落.<br>\n只要宇宙被自己的爱填满,就不会再有令人不快而烦人的他人之爱了.这即是自己将爱给予所有存在——也将夺走所有原本之爱的概念.<br>\n' + '【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_11ruzuoyi: ['female', 'zm1ru', 5, ['zmweidatiaotingzhe', 'zmtiaotingzhiyi'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性龙族.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】至高秩序<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】响应长久战乱中生灵的祈愿而诞生的星晶兽,碧蓝的调停者、抑制力的化身、世界意志的组成部分.<br>\n每当出现可能动摇世界平衡的危机时就会显现的迷之少女,其真身是栖身于世界边缘抵御入侵者的,被称为调停之翼的星晶兽<至高秩序>.<br>\n通常状态下相对同档的顶级英灵她的表现并不突出,但面对外宇宙混沌爪牙时佐伊可不受规则限制,全力作战.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_03qiangkalienina: ['female', 'zm1qiang', 5, ['zmzhendijianxiu', 'zmxingsuidiping'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】星碎地平<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】装载自设机体[辉晓]的暴力机师,对于这套极端又奢侈的机体能够被批准生产这件事她自己也很惊讶.<br>\n卡列尼娜是空中花园工程部队队长,出身自寰宇技师工会,目前长期作为清理部队的外援行动.其人脾气火爆单纯,在战斗中比起动脑筋更倾向于用高火力解决问题.由于容易被捉弄,所以对初次见面的人比较有戒心,对爆炸好像有一点难以启齿的怪癖.<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_04doupulao: ['female', 'zm1do', 4, ['zmfajin', 'zmtaxueyoulong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊壹/image/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】踏雪游龙<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】九龙商会下辖九龙众之一,代号蒲牢的构造体少女.<br>\n帕弥什病毒爆发后,旧世代的大势力九龙商会放弃了大部分根据地,启动巨舰九龙夜航船带领成员前往海上.<br>\n蒲牢不记得关于登上夜航船之前的人生,留下的只有刻在记忆海中的武艺;但她知道那必定是如同珍宝一般的回忆,同时她也知道,自己选择用那无价之宝交换了更为宝贵的东西.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_08shaguixiaotailang: ['male', 'zm1sha', 4, ['zmlingxiuqizhig', 'zmkuangluandeguigongzi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊壹/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊壹/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】狂乱的贵公子<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【破坏】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】有<狂乱的贵公子>逸名,稳健派攘夷志士首领.擅长剑术、潜入、变装、设置炸弹等.<br>\n桂小太郎出生于没落的武士家庭,从小父母双亡,因为天资聪慧就读于讲武馆.结识吉田松阳之后成为了他的弟子之一,在老师吉田松阳被幕府逮捕之后和同门师兄弟一起参加了攘夷战争.<br>\n战后桂为了反抗政府成为了站在幕府对立面的攘夷志士领袖 ,带着迷之宠物伊丽莎白一起进行攘夷活动并寻找志同道合的伙伴.<br>\n' + '【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                    },
                    skill: {
                        zmqibaoniantu: {
                            group: ['zmqibaoniantu3', 'zmtrenxing'],
                            audio: 'ext:综漫季刊壹/audio:6',
                            nobracket: true,
                            enable: 'phaseUse',
                            name: '设置黏土',
                            filter(event, player) {
                                if (!player.countCards('h', { color: 'red' })) return false;
                                return player.storage.zmt_np >= 10;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            discard: false,
                            filterTarget(card, player, target) {
                                return !target.hasSkill('zmqibaoniantu2');
                            },
                            content() {
                                player.storage.zmt_np -= 10;
                                target.storage.zmqibaoniantu = cards[0];
                                target.addSkill('zmqibaoniantu2');
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        if (target.hp == 1) return 5;
                                        return 2;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        zmqibaoniantu2: {
                            mark: true,
                            marktext: '爆',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            filter(event, player) {
                                return event.player != player && !event.player.hasSkill('zmqibaoniantu') && event.card.suit == player.storage.zmqibaoniantu.suit;
                            },
                            prompt(event, player) {
                                return `是否引爆黏土对${get.translation(event.player)}造成一点火焰伤害？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player.showCards([player.storage.zmqibaoniantu], get.translation(player) + '发动了【起爆粘土】');
                                ('step 1');
                                player.storage.zmqibaoniantu.discard();
                                delete player.storage.zmqibaoniantu;
                                player.removeSkill('zmqibaoniantu2');
                                game.addVideo('storage', player, ['zmqibaoniantu', null]);
                                game.playzm1(['zmqibaoniantu21', 'zmqibaoniantu22', 'zmqibaoniantu23', 'zmqibaoniantu24'].randomGet());
                                game.mp421('zmdidala');
                                trigger.player.damage(1, 'fire', 'nosource');
                            },
                            intro: {
                                mark(dialog, content, player) {
                                    if (player == game.me || player.isUnderControl()) {
                                        dialog.add([player.storage.zmqibaoniantu]);
                                    } else {
                                        return '已设置起爆粘土';
                                    }
                                },
                                content(content, player) {
                                    if (player == game.me || player.isUnderControl()) {
                                        return get.translation(player.storage.zmqibaoniantu);
                                    }
                                    return '已设置起爆粘土';
                                },
                            },
                        },
                        zmqibaoniantu3: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            name: '转化【火杀】',
                            filterCard(card) {
                                return get.type(card) == 'trick' || get.type(card) == 'delay';
                            },
                            viewAsFilter(player) {
                                return player.countCards('h', { type: 'trick' }) > 0 || player.countCards('h', { type: 'delay' }) > 0;
                            },
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                                suit: 'spade',
                                number: 11,
                                cards: [{ node: { image: {}, info: {}, name: {}, name2: {}, background: {}, intro: {}, range: {} }, storage: {}, vanishtag: [], _uncheck: [], suit: 'spade', number: 11, name: 'wuxie', cardid: '3217019306', clone: { name: 'wuxie', suit: 'spade', number: 11, node: { name: {}, info: {}, intro: {}, background: {}, image: {} }, _transitionEnded: true, timeout: 1426 }, timeout: 1387, original: 'h' }],
                            },
                            prompt: '将一张锦囊牌当火杀使用',
                            check(card) {
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
                                expose: 0.2,
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
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
                        zmc0zibao: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && get.distance(player, event.source) <= 1 && player.hasSkill('zmqibaoniantu2');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            content() {
                                'step 0';
                                game.playzm1('zmc0zibao1');
                                game.mp421('zmdidala2');
                                var num = Math.round(player.maxHp / 2);
                                trigger.source.damage(num, 'fire');
                                ('step 1');
                                event.targets = game
                                    .filterPlayer(function (current) {
                                        return get.distance(player, current) <= 2 && current != trigger.source && current != player;
                                    })
                                    .sortBySeat(target);
                                ('step 2');
                                if (event.targets.length) {
                                    event.targets.shift().damage('fire');
                                    event.redo();
                                }
                            },
                            logTarget: 'source',
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 0.2;
                                    return 1.5;
                                },
                                effect: {
                                    target(card, player, target, current) {
                                        if (!target.hasFriend()) return;
                                        if (target.hp <= 1 && get.tag(card, 'damage')) return [1, 0, 0, -2];
                                    },
                                },
                            },
                        },
                        zmlingxiuqizhipx: {
                            init(player, skill) {
                                player.storage.zmlingxiuqizhipx = {};
                            },
                            group: ['zmlingxiuqizhipx_clear', 'zmlingxiuqizhipx_use'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: ['phaseUseBegin', 'phaseJieshuBegin'],
                                    },
                                    _priority: 20,
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    content() {
                                        player.storage.zmlingxiuqizhipx = {};
                                    },
                                },
                                use: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (_status.currentPhase != event.player) return false;
                                        return _status.event.name == 'phaseUse' || _status.event.getParent('phaseUse').name == 'phaseUse';
                                    },
                                    _priority: 20,
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    content() {
                                        var map = get.type(trigger.card, 'trick');
                                        if (player.storage.zmlingxiuqizhipx[map] == undefined) {
                                            player.storage.zmlingxiuqizhipx[map] = 1;
                                        } else {
                                            player.storage.zmlingxiuqizhipx[map]++;
                                        }
                                    },
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:5',
                            trigger: {
                                global: 'phaseUseAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                var number = 0;
                                var filter = player.storage.zmlingxiuqizhipx;
                                for (var e in filter) {
                                    if (filter[e] >= 3) return true;
                                    number++;
                                }
                                if (number >= 3) return true;
                                return false;
                            },
                            content() {
                                player.storage.zmt_np += 5;
                                trigger.player.storage.zmt_np += 5;
                                trigger.player.getStat().card = {};
                                trigger.player.getStat().skill = {};
                            },
                        },
                        zmyandizhijian: {
                            group: ['zmyandizhijian_damage', 'zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (!event.source) return false;
                                if (!event.player.isAlive() || !event.source.isAlive()) return false;
                                if (
                                    !player.countCards('he', function (cardx) {
                                        return get.type(cardx) == 'basic' || (player.storage.zmt_np >= 60 && get.color(cardx) == 'red');
                                    })
                                )
                                    return false;
                                if (!event.source || event.source == player) return false;
                                if (!lib.filter.targetEnabled({ name: 'sha', nature: 'fire' }, player, event.source)) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToUse();
                                if (player.storage.zmt_np >= 60) {
                                    next.set('openskilldialog', `是否选择一张基本牌或红色牌当做【火杀】对${get.translation(trigger.source)}使用？`);
                                } else {
                                    next.set('openskilldialog', `是否选择一张基本牌当做【火杀】对${get.translation(trigger.source)}使用？`);
                                }
                                next.set('norestore', true);
                                next.set('sourcex', trigger.source);
                                next.set('sourcex2', trigger.player);
                                next.set('_backupevent', 'zmyandizhijian_use');
                                next.backup('zmyandizhijian_use');
                                ('step 1');
                                if (result.bool) {
                                    if (event.recover && trigger.player.isDamaged()) {
                                        trigger.player.recover();
                                    }
                                }
                            },
                            subSkill: {
                                use: {
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'fire',
                                    },
                                    check(card) {
                                        var att1 = get.attitude(player, _status.event.sourcex2);
                                        var att2 = get.attitude(player, _status.event.sourcex);
                                        if (att2 <= 0 && att1 > 0) {
                                            return 1;
                                        }
                                        return -1;
                                    },
                                    filterCard(card, player, event) {
                                        if (get.type(card) == 'basic' || (player.storage.zmt_np >= 50 && get.color(card) == 'red')) return true;
                                        return false;
                                    },
                                    filterTarget(card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    },
                                    precontent() {
                                        game.playzm1(['zmyandizhijian1', 'zmyandizhijian2', 'zmyandizhijian3', 'zmyandizhijian4', 'zmyandizhijian5', 'zmyandizhijian6', 'zmyandizhijian7', 'zmyandizhijian8', 'zmyandizhijian9', 'zmyandizhijian10'].randomGet());
                                        if (player.storage.zmt_np >= 60) {
                                            game.playzm1('zmyandi');
                                            game.mp421('zmyandizhijian');
                                        }
                                    },
                                    log: false,
                                    ai: {
                                        basic: {
                                            useful: [5, 1],
                                            value: [5, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.includes(get.nature(item))) return player.getCardUsable('sha') > 1 ? 3 : 3.1;
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
                                damage: {
                                    trigger: {
                                        player: 'shaDamage',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmyandizhijian' && event.getParent(2).sourcex && event.getParent(2).sourcex == event.target;
                                    },
                                    content() {
                                        if (player.storage.zmt_np >= 60 && trigger.target.isAlive()) {
                                            trigger.cancel();
                                            player.storage.zmt_np = 0;
                                            game.playzm1('zmyandizhijian');
                                            game.mp421('zmpaxi');
                                            trigger.target.damage(2, 'fire');
                                        }
                                        trigger.getParent(3).recover = true;
                                    },
                                },
                            },
                        },
                        zmgouzhuangbushu: {
                            mark: true,
                            marktext: '署',
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
                                player: 'discardAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                //    if(event.parent.parent.name=='phaseDiscard') return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i) == 'd') {
                                            return true;
                                        }
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.position(i) == 'd') {
                                            cards.push(i);
                                            ui.special.appendChild(i);
                                        }
                                    }
                                if (cards.length) {
                                    player.addToExpansion(cards, player, 'give').gaintag.add('zmgouzhuangbushu');
                                    game.log(player, '将', cards, '置于武将牌上作为[构装]存储');
                                }
                            },
                            group: ['zmgouzhuangbushu_1', 'zmgouzhuangbushu_2', 'zmgouzhuangbushu_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['chooseToRespondBegin'],
                                    },
                                    filter(event, player) {
                                        if (player.maxHp <= player.countCards('h')) return false;
                                        if (player.getExpansions('zmgouzhuangbushu').length == 0) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
                                        if (!lib.filter.cardRespondable({ name: 'juedou' }, player, event) && !lib.filter.cardRespondable({ name: 'nanman' }, player, event)) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('zmgouzhuangbushu').length >= 1) {
                                            var num = player.maxHp - player.countCards('h');
                                            if (player.getExpansions('zmgouzhuangbushu').length <= num) {
                                                var cards = player.getExpansions('zmgouzhuangbushu');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton(`选择获得${num}张[署]`, num, player.getExpansions('zmgouzhuangbushu'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'sha' || card.name == 'wanjian') return 0.5;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('zmgouzhuangbushu').length == 0) return false;
                                                var num = player.maxHp - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊壹/audio:14',
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        if (!event.cards) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (
                                                    player.countCards('h', function (card) {
                                                        return card == i;
                                                    }) &&
                                                    player.hasUseTarget(i)
                                                )
                                                    return true;
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        var list = [];
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (
                                                    player.countCards('h', function (card) {
                                                        return card == i;
                                                    }) &&
                                                    player.hasUseTarget(i)
                                                )
                                                    list.push(i);
                                            }
                                        if (list.length) player.chooseCardButton('可选择其中一张立即使用', list, false);
                                        else event.finish();
                                        ('step 1');
                                        if (result.bool) {
                                            player.chooseUseTarget(result.links[0], false);
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    filter(event, player) {
                                        if (player.maxHp <= player.countCards('h')) return false;
                                        if (player.getExpansions('zmgouzhuangbushu').length == 0) return false;
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('zmgouzhuangbushu').length >= 1) {
                                            var num = player.maxHp - player.countCards('h');
                                            if (player.getExpansions('zmgouzhuangbushu').length <= num) {
                                                var cards = player.getExpansions('zmgouzhuangbushu');
                                                player.gain(cards, 'draw');
                                                event.finish();
                                            } else {
                                                player.chooseCardButton(`选择获得${num}张[署]`, num, player.getExpansions('zmgouzhuangbushu'), false).set('ai', get.buttonValue);
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var links = result.links;
                                            player.gain(links, 'draw');
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        effect: {
                                            target(card) {
                                                if (card.name == 'sha' || card.name == 'wanjian') return 0.5;
                                            },
                                        },
                                        noh: true,
                                        skillTagFilter(player, tag) {
                                            if (tag == 'noh') {
                                                if (player.getExpansions('zmgouzhuangbushu').length == 0) return false;
                                                var num = player.maxHp - player.countCards('h');
                                                if (num != 0) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmleyuanqudong: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:5',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.isTurnedOver()) return false;
                                if (player.countCards('h') < 2) return false;
                                return event.player != player && event.card && event.card.name == 'sha' && event.notLink();
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmt_np >= 70) {
                                    game.playzm1(['zmjko1', 'zmjko2', 'zmjko3'].randomGet());
                                    game.mp421('zmjko2');
                                    player.storage.zmt_np = 0;
                                    trigger.num++;
                                    event.finish();
                                } else {
                                    player.chooseToDiscard('是否弃置2张手牌令对方翻面？', 2, 'h').ai = function (card) {
                                        if (get.attitude(player, trigger.player) < 0) {
                                            return 10 - get.value(card);
                                        }
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.turnOver();
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        zmshengshoushusheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:5',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h', { color: get.color(event.card) })) return false;
                                if (event.player == player) return false;
                                if (get.type(event.card) != 'trick') return false;
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
                                    position: 'h',
                                    filterCard(card, player) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                var cardax = game.createCard(trigger.card.name, card.suit, card.number, trigger.card.nature);
                                                return player.canUse(cardax, current, false) && get.color(card) == get.color(trigger.card);
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
                                        return player.canUse(cardax, target, false); //lib.filter.filterTarget(cardax,player,target);
                                    },
                                    ai1(card) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) > 0 && trigger.card.name == 'tiesuo') return -1;
                                        if (trigger.card.name == 'jiedao') return -1;
                                        if (trigger.card.name == 'huogong' && player.countCards('h') <= 2) return -1;
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    },
                                    prompt: `是否选择一张${get.translation(get.color(trigger.card))}牌当${get.translation(trigger.card)}使用？`,
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.flashAvatar(trigger.player);
                                    event.cardssss = result.cards;
                                    event.targets = result.targets;
                                    if (result.cards[0].number > trigger.card.number) {
                                        player
                                            .chooseControl('是', '否', true, function () {
                                                if (get.attitude(trigger.player, player) <= 0) return '是';
                                                return '否';
                                            })
                                            .set('prompt', `是否取消${get.translation(trigger.player)}使用的${get.translation(trigger.card)}？`);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '是') {
                                    game.log(player, '令,', trigger.player, '使用的', trigger.card, '失效');
                                    player.line(trigger.player);
                                    trigger.cancel();
                                }
                                if (event.targets) {
                                    var cardss = { name: trigger.card.name, nature: trigger.card.nature };
                                    player.useCard(cardss, event.targets, event.cardssss);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1,
                            },
                        },
                        zmyizidangxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:2',
                            trigger: {
                                global: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.result.length) return false;
                                return player.storage.zmt_np >= 25 && get.distance(player, event.player, 'attack') <= 1;
                            },
                            content() {
                                'step 0';
                                event.num = trigger.result.length;
                                player
                                    .chooseTarget(`令一名角色摸${get.translation(event.num)}张牌？`, function (card, player, target) {
                                        return target != trigger.player;
                                    })
                                    .set('ai', function (target) {
                                        if (event.num <= 1) return 0;
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np = 0;
                                    player.line(result.targets);
                                    game.mp421('zmxiaorang');
                                    result.targets[0].draw(event.num);
                                }
                            },
                            group: ['zmyizidangxian_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'recoverAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.num <= 0) return false;
                                        return player.storage.zmt_np >= 25 && get.distance(player, event.player, 'attack') <= 1;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = Math.min(trigger.num, 9);
                                        player
                                            .chooseTarget(`令一名角色回复${get.translation(event.num)}点体力？`, function (card, player, target) {
                                                return target != trigger.player && trigger.player.maxHp >= trigger.player.hp + 1;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target.hp <= 2) att *= 3;
                                                return att;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmt_np -= 25;
                                            player.line(result.targets);
                                            game.mp421('zmxiaorang');
                                            result.targets[0].recover(event.num);
                                        }
                                    },
                                },
                            },
                        },
                        zmshenxingtaibao: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                return event.card && event.card.name == 'sha' && !player.hasSkill('zmshenxingtaibao_1');
                            },
                            prompt(event, player) {
                                var str = '';
                                var num = player.getAttackRange();
                                if (get.distance(event.player, player, 'attack') + num <= 1) {
                                    str += `不可脱离${get.translation(event.player)}的攻击范围,是否发动【神行太保】？`;
                                } else {
                                    str += `可脱离${get.translation(event.player)}的攻击范围,是否发动【神行太保】？`;
                                }
                                return str;
                            },
                            check(event, player) {
                                if (player.countCards('h', { name: 'shan' }) >= 2 || player.countCards('h', { name: 'jinchan' }) == player.countCards('h')) return false;
                                if (get.attitude(player, event.player) > 1) return false;
                                var num = player.getAttackRange();
                                if (get.distance(event.player, player, 'attack') + num <= 1 && player.storage.zmt_np <= 30) return false;
                                return !player.hasSkill('zmshenxingtaibao_1');
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 15;
                                player.addTempSkill('zmshenxingtaibao_1', { player: 'phaseEnd' });
                                ('step 1');
                                if (get.distance(trigger.player, player, 'attack') > 1) {
                                    trigger.cancel();
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '行',
                                    intro: {
                                        content(storage, player) {
                                            var num = player.getAttackRange();
                                            return '其他角色与你计算距离时+' + num;
                                        },
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            var num = from.getAttackRange();
                                            return distance + num;
                                        },
                                    },
                                },
                            },
                        },
                        zmqianlichuanxun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                global: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                var history = event.player.getHistory('useCard');
                                for (var i = 0; i < history.length; i++) {
                                    if (!history[i].targets) continue;
                                    for (var j = 0; j < history[i].targets.length; j++) {
                                        if (history[i].targets[j] != event.player) return false;
                                    }
                                }
                                return event.player.isAlive();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                if (player.hasSkill('zmshenxingtaibao_1')) {
                                    trigger.player.draw(2);
                                } else {
                                    trigger.player.draw();
                                }
                                ('step 1');
                                trigger.player.phaseUse();
                            },
                        },
                        zmzhenhongchuanguang: {
                            group: ['zmzhenhongchuanguang_1', 'zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                return event.target && event.target != player && event.target.countCards('he') && get.color(event.card) == 'red';
                            },
                            init(player) {
                                player.storage.zmzhenhongchuanguang = 0;
                            },
                            content() {
                                trigger.target.randomDiscard();
                                player.storage.zmzhenhongchuanguang++;
                                if (player.storage.zmzhenhongchuanguang % 4 == 0) {
                                    game.playzm1(['zmzhenhongchuanguang1', 'zmzhenhongchuanguang2', 'zmzhenhongchuanguang3'].randomGet());
                                    player.draw(4);
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm1(['zmzhenhongchuanguang11', 'zmzhenhongchuanguang12', 'zmzhenhongchuanguang13', 'zmzhenhongchuanguang14', 'zmzhenhongchuanguang15', 'zmzhenhongchuanguang16', 'zmzhenhongchuanguang17', 'zmzhenhongchuanguang18', 'zmzhenhongchuanguang19', 'zmzhenhongchuanguang20'].randomGet());
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmaerbeisizhiqiang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 5) return false;
                                if (event.cards == undefined) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') return true;
                                    }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num1 = 0;
                                event.num2 = 0;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.color(i) == 'red') event.num1++;
                                    }
                                if (player.storage.zmt_np >= 20 && player.getEquip(1)) {
                                    game.playzm1('zmzt3');
                                    game.mp421('zmzeta2');
                                } else {
                                    if (event.num1 > 1) {
                                        game.playzm1(['zmzt0', 'zmzt2'].randomGet());
                                        game.mp421('zmzeta3');
                                    }
                                    if (event.num1 == 1) {
                                        game.playzm1(['zmzt1', 'zmzt11', 'zmzt111'].randomGet());
                                        game.mp421('zmzeta1');
                                    }
                                }
                                ('step 1');
                                if (player.storage.zmt_np >= 20) {
                                    event.goto(4);
                                } else {
                                    event.goto(2);
                                }
                                ('step 2');
                                player.chooseTarget('请选择【杀】的目标', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 3');
                                if (result.bool) {
                                    event.num2++;
                                    player.storage.zmt_np -= 5;
                                    player.line(result.targets);
                                    player.useCard({ name: 'sha' }, result.targets[0]);
                                    if (event.num2 < event.num1 && player.storage.zmt_np >= 5) {
                                        if (event.num2 < event.num1 && player.storage.zmt_np >= 20) {
                                            event.goto(4);
                                        } else {
                                            event.goto(2);
                                        }
                                    } else {
                                        event.goto(6);
                                    }
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                player.chooseTarget('是否对一名角色使用【杀】且额外消耗20点能量使此杀伤害+1？', function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 5');
                                if (result.bool) {
                                    event.num2++;
                                    player.storage.zmt_np -= 20;
                                    player.line(result.targets);
                                    if (player.getEquip(1)) {
                                        game.playzm1('zmzt4');
                                        game.mp421('zmzeta4');
                                        result.targets[0].damage(2, player);
                                        player.discard(player.getCards('e', { subtype: 'equip1' }));
                                    } else {
                                        player.addTempSkill('zmaerbeisizhiqiang_1', { player: 'shaAfter' });
                                        player.useCard({ name: 'sha' }, result.targets[0]);
                                    }
                                    if (event.num2 < event.num1 && player.storage.zmt_np >= 5) {
                                        if (event.num2 < event.num1 && player.storage.zmt_np >= 20) {
                                            event.goto(4);
                                        } else {
                                            event.goto(2);
                                        }
                                    } else {
                                        event.goto(6);
                                    }
                                } else {
                                    event.goto(2);
                                }
                                ('step 6');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmaerbeisizhiqiang_1';
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        zmzhanxingshu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmt_np < 150 && game.roundNumber % 2 == player.hp % 2;
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 5 };
                                }, player);
                                player.addSkill('zmzhanxingshu4');
                                player.markSkill('zmzhanxingshu4');
                                player.addSkill('zmzhanxingshu_use');
                                player.addSkill('zmzhanxingshu_cancel');
                            },
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!player.forceCountChoose) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.zmzhanxingshu4 += 1;
                                        if (player.storage.zmzhanxingshu4 >= 4) {
                                            var evt = _status.event.getParent('phaseUse');
                                            if (evt && evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                                player.storage.zmzhanxingshu4 = 0;
                                                player.addTempSkill('zmzhanxingshu2');
                                            }
                                            event.finish();
                                        }
                                    },
                                    ai: {
                                        presha: true,
                                        pretao: true,
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 0';
                                        game.broadcastAll(function (player) {
                                            delete player.forceCountChoose;
                                        }, player);
                                        player.removeSkill('zmzhanxingshu_use');
                                        player.removeSkill('zmzhanxingshu_cancel');
                                        ('step 1');
                                        if (player.storage.zmzhanxingshu4 <= 4 && player.storage.zmzhanxingshu4 >= 0) var zx = player.storage.zmzhanxingshu4;
                                        player.storage.zmzhanxingshu4 -= zx;
                                        player.unmarkSkill('zmzhanxingshu4');
                                        player.removeSkill('zmzhanxingshu4');
                                        ('step 2');
                                        delete player.getStat('triggerSkill').zmzhanxingshu_use;
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmzhanxingshu2: {
                            audio: 'ext:综漫季刊壹/audio:2',
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('令自己本回合手牌上限+3', '回复1点体力', '额外充能10点').ai = function () {
                                    if (player.countCards('h') > 6 && !player.hasSkill('zmtiantimoshu2') && player.storage.zmt_np < 120) return 0;
                                    if (player.hp < player.maxHp) return 1;
                                    return 2;
                                };
                                ('step 1');
                                if (result.control == '令自己本回合手牌上限+3') {
                                    player.addTempSkill('zmzhanxingshu3');
                                }
                                if (result.control == '回复1点体力') {
                                    player.recover();
                                }
                                if (result.control == '额外充能10点') {
                                    player.storage.zmt_np += 10;
                                }
                            },
                        },
                        zmzhanxingshu3: {
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += 3);
                                },
                            },
                        },
                        zmzhanxingshu_choose1: {},
                        zmzhanxingshu_choose2: {},
                        zmzhanxingshu4: {
                            silent: true,
                            init(player) {
                                if (!player.storage.zmzhanxingshu4) player.storage.zmzhanxingshu4 = 0;
                            },
                            marktext: '星',
                            intro: {
                                content: '本回合已因此技能获得#张牌',
                            },
                            forced: true,
                            popup: false,
                        },
                        zmtiantimoshu: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            selectTarget: 1,
                            forced: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var tt = player.storage.zmtiantimoshu ? '【天不巡】:你可以令一名其他角色跳过判定阶段且使用的【杀】需要两张闪响应.' : '【地不动】:你可以令一名角色跳过弃牌阶段且免疫首次受到的伤害.';
                                    return tt;
                                },
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmtiantimoshu == true) {
                                    player
                                        .chooseTarget('###请选择[天不巡]的目标###你可以令一名角色跳过判定阶段且本轮内使用的【杀】需要两张闪响应.', function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) {
                                                return get.attitude(_status.event.player, target) * target.countCards('h');
                                            }
                                            return 0;
                                        });
                                } else {
                                    player
                                        .chooseTarget('###请选择[地不动]的目标###你可以令一名角色跳过弃牌阶段且本轮内首次受到的伤害-1.', function (card, player, target) {
                                            return target.isAlive();
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) > 0) {
                                                return get.recoverEffect(target, player, player) + 1;
                                            }
                                            return 0;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (player.storage.zmtiantimoshu == true) {
                                        game.playzm1('zmtianbuxun');
                                        player.storage.zmtiantimoshu = false;
                                        var target = result.targets[0];
                                        target.skip('phaseJudge');
                                        target.addTempSkill('zmtiantimoshu1', 'roundStart');
                                    } else {
                                        game.playzm1('zmdibudong');
                                        player.storage.zmtiantimoshu = true;
                                        var target = result.targets[0];
                                        target.skip('phaseDiscard');
                                        target.addTempSkill('zmtiantimoshu2', 'roundStart');
                                    }
                                }
                            },
                        },
                        zmtiantimoshu1: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return !event.directHit;
                            },
                            _priority: -1,
                            content() {
                                game.playzm1(['zmtiantimoshu11', 'zmzhanxingshu2', 'zmzhanxingshu3'].randomGet());
                                if (typeof trigger.shanRequired == 'number') {
                                    trigger.shanRequired++;
                                } else {
                                    trigger.shanRequired = 2;
                                }
                            },
                        },
                        zmtiantimoshu2: {
                            audio: 'ext:综漫季刊壹/audio:1',
                            trigger: {
                                player: ['damageBegin'],
                            },
                            forced: true,
                            nobracket: true,
                            _priority: 100,
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            content() {
                                player.removeSkill('zmtiantimoshu2');
                                trigger.num -= 1;
                            },
                        },
                        zmguanweizhiding: {
                            nobracket: true,
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.storage.zmt_np >= 150;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                player.storage.zmguanweizhiding = true;
                                player.awakenSkill('zmguanweizhiding');
                                game.playzm1('zmrenlibaozhangtianqiu');
                                ui.backgroundMusic.src = 'extension/综漫季刊壹/audio/背景音乐人理保障天球.mp3';
                                ('step 1');
                                ('step 2');
                                game.mp421('zmrenlibaozhangtianqiu');
                                event.list = player.getFriends().sortBySeat();
                                ('step 3');
                                for (var i of game.players) {
                                    if (player.getEnemies().includes(i)) {
                                        i.damage(4);
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 2,
                                },
                                threaten: 1.5,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        zmhuzhijiahu: {
                            group: ['zmhuzhijiahu_1', 'zmtrenxing', 'zmtsuzheng'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            trigger: {
                                player: 'useCardEnd',
                            },
                            checkx(event, player) {
                                var du = false;
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i) == 'd' && i.name == 'du') {
                                            du = true;
                                            num++;
                                        }
                                    }
                            },
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return event.card && get.type(event.card) == 'basic';
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == trigger.card.suit) return 2;
                                    return 0;
                                });
                                ('step 1');
                                if (result.card.suit == trigger.card.suit) {
                                    game.log(player, '收回了', trigger.cards);
                                    player.gain(trigger.cards, 'gain2');
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:8',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    discard: false,
                                    filterCard(card) {
                                        return get.type(card) == 'basic';
                                    },
                                    check(card) {
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                        if (!ui.selected.cards.length && card.name == 'du') return 20;
                                        var player = get.owner(card);
                                        var num = 0;
                                        var evt2 = _status.event.parent;
                                        var num = 0;
                                        player.getHistory('lose', function (evt) {
                                            if (evt.parent.skill == 'rende' && evt.getParent(3) == evt2) num += evt.cards.length;
                                        });
                                        if (player.hp == player.maxHp || num > 1 || player.countCards('h') <= 1) {
                                            if (ui.selected.cards.length) {
                                                return -1;
                                            }
                                            var players = game.filterPlayer();
                                            for (var i of players) {
                                                if (i.hasSkill('haoshi') && !i.isTurnedOver() && !i.hasJudge('lebu') && get.attitude(player, i) >= 3 && get.attitude(i, player) >= 3) {
                                                    return 11 - get.value(card);
                                                }
                                            }
                                            if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                            if (player.countCards('h') > 2) return 6 - get.value(card);
                                            return -1;
                                        }
                                        return 10 - get.value(card);
                                    },
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    filter(event, player) {
                                        return player.getCards('h', { type: 'basic' });
                                    },
                                    content() {
                                        target.gain(cards[0], 'gain2');
                                        player.draw(1);
                                    },
                                    ai: {
                                        order: 3,
                                        result: {
                                            target(player, target) {
                                                if (target.hasSkillTag('nogain')) return 0;
                                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                    if (target.hasSkillTag('nodu')) return 0;
                                                    return -10;
                                                }
                                                var nh = target.countCards('h');
                                                var np = player.countCards('h');
                                                if (player.hp == player.maxHp || player.storage.rende < 0 || player.countCards('h') <= 1) {
                                                    if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                                }
                                                return Math.max(1, 5 - nh);
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmzhenyuanjijie: {
                            init(player) {
                                player.storage.zmzhenyuanjijie = 0;
                            },
                            nobracket: true,
                            trigger: {
                                global: 'damageBefore',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (player.storage.zmt_np < 40 + player.storage.zmzhenyuanjijie) return false;
                                return event.num >= event.player.hp;
                            },
                            check(event, player) {
                                if (player.hp > 0) return get.attitude(player, event.player) > 1;
                                return 0;
                            },
                            content() {
                                'step 0';
                                var num0 = player.storage.zmzhenyuanjijie;
                                player.storage.zmt_np -= 40 + num0;
                                player.storage.zmzhenyuanjijie += 20;
                                trigger.untrigger();
                                trigger.finish();
                                ('step 1');
                                player.addTempSkill('zmzhenyuanjijie_1', { player: 'damageBefore' });
                                player
                                    .chooseTarget([1, Infinity], '选择任意名角色获得增益效果', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    ui.backgroundMusic.src = 'extension/综漫季刊壹/audio/背景音乐术呆.mp3';
                                    game.mp421('zmshudai');
                                    setTimeout(function () {
                                        game.playzm1('zmshudai');
                                    }, 12000);
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                }
                                ('step 3');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].recover(1);
                                        targets[i].draw(targets[i].hp - targets[i].num('h'));
                                    }
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:1',
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += `是否防止${get.translation(event.player)}受到的伤害？`;
                                        return str;
                                    },
                                    check(event, player) {
                                        if (player.hp > 0) return get.attitude(player, event.player) > 1;
                                        return 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                    ai: {
                                        threaten: 4,
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        zmjianzhimoshu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:8',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.getEquip(1)) return false;
                                return event.card && event.card.name == 'sha' && event.player.countCards('he') >= 1;
                            },
                            content() {
                                'step 0';
                                var info = get.info(player.getEquip(1));
                                var num0 = 1;
                                if (info && info.distance && info.distance.attackFrom) {
                                    num0 -= info.distance.attackFrom;
                                }
                                player
                                    .discardPlayerCard(trigger.player, get.prompt('zmjianzhimoshu'), 'he', [1, num0], function (button) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        var eff = get.damageEffect(trigger.player, player, player);
                                        if (get.attitude(player, trigger.player) > 0) {
                                            if (eff >= 0) return false;
                                            return 10 - get.buttonValue(button);
                                        }
                                        if (eff <= 0) return get.buttonValue(button);
                                        if (trigger.player.hp == 1 || trigger.num > 1) return false;
                                        if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return -1;
                                        if (_status.event.dialog.buttons.length < 2) return -1;
                                        var num = 0;
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            if (get.buttonValue(_status.event.dialog.buttons[i]) > 1.5) num++;
                                        }
                                        if (num >= 2) return get.buttonValue(button) - 1.5;
                                    })
                                    ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                        },
                        zmweidayurumengzhishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:7',
                            trigger: {
                                global: 'useCardEnd',
                            },
                            usable: 1,
                            forced: true,
                            filter(event, player) {
                                //if(player.countCards('h',{type:'delay'})==0&&player.countCards('h',{type:'trick'})==0&&player.countCards('h',{type:'equip'})==0) return false;
                                if (get.type(event.card) != 'basic') return false;
                                if (!player.countCards('h')) return false;
                                if (event.player == player || player.hasSkill('zmweidayurumengzhishi_temp')) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            var name = i.name;
                                            if (get.position(i) == 'd' && player.countCards('h', { name: name }) == 0) return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.cards = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        var name = i.name;
                                        if (get.position(i) == 'd' && player.countCards('h', { name: name }) == 0) {
                                            if (i.name == 'du') {
                                                event.num++;
                                            }
                                            event.cards.push(i);
                                        }
                                    }
                                ('step 1');
                                var next = player.chooseCard(1, 'h', `是否将一张手牌交给${get.translation(trigger.player)}？你获得` + get.translation(event.cards), function (card, player) {
                                    //return get.type(card)!='basic';
                                    return true;
                                });
                                var att1 = get.attitude(player, trigger.player);
                                next.ai = function (card) {
                                    if (att1 > 0 && event.num == 0) {
                                        return 1;
                                    }
                                    return -1;
                                };
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.gain(result.cards[0], player);
                                    player.$give(result.cards.length, trigger.player);
                                    player.gain(event.cards, 'gain2');
                                    if (!player.hasSkill('zmweidayurumengzhishi_temp')) {
                                        player.addTempSkill('zmweidayurumengzhishi_temp', 'roundStart');
                                    }
                                }
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmzhipeiyufengkuangzhishi: {
                            group: ['zmthundun', 'zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return player.countCards('he') > 0;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                if (Array.isArray(ui.selected.cards))
                                    for (var i of ui.selected.cards) {
                                        if (i.suit == suit) return false;
                                    }
                                return true;
                            },
                            complexCard: true,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            check(card) {
                                if (ui.selected.cards.length > 1) return 0;
                                return 7 - get.value(card);
                            },
                            selectCard: [1, 4],
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm1('zmlalaiye');
                                game.mp421('zmlalaiye');
                                ('step 1');
                                var suits = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        suits.push(i.suit);
                                    }
                                var success = false;
                                for (var i = 0; i < suits.length; i++) {
                                    if (target.countCards('h', { suit: suits[i] })) {
                                        success = true;
                                        break;
                                    }
                                }
                                if (!success) {
                                    target.popup('未生效');
                                } else {
                                    target.turnOver();
                                    target.goMad({ player: 'phaseEnd' });
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (target.countCards('h') == 1 && player.hp > 1) return 0;
                                        return -num;
                                    },
                                },
                            },
                        },
                        zmshufu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:2',
                            trigger: {
                                player: 'turnOverAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') >= 1;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt('zmshufu'), 1, 'he').set('ai', function (card) {
                                    if (player.isTurnedOver()) return 6 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    setTimeout(function () {
                                        player.node.avatar.zm1t(
                                            'extension/综漫季刊壹/image/武将牌特效符咒鼠.png',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            1000
                                        );
                                    }, 1200);
                                    game.playzm1('zmfuzhou');
                                    player.discard(result.cards);
                                    player.turnOver();
                                }
                            },
                        },
                        zmniufu: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && !event.card.nature && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒牛.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszniu');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                                trigger.num += 1;
                            },
                            popup: false,
                        },
                        zmhufu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var red = player.countCards('h', { color: 'red' });
                                var black = player.countCards('h', { color: 'black' });
                                return (player.countCards('h') > 0 && red == 0) || (player.countCards('h') > 0 && black == 0);
                            },
                            content() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒虎.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszhu');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                                if (player.countCards('h', { color: 'red' }) == 0) {
                                    var card = get.cardPile(function (card) {
                                        return get.color(card) == 'red';
                                    });
                                    if (card) {
                                        trigger.player.gain(card, 'gain2');
                                    }
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return get.color(card) == 'black';
                                    });
                                    if (card) {
                                        trigger.player.gain(card, 'gain2');
                                    }
                                }
                            },
                        },
                        zmtufu: {
                            nobracket: true,
                            enable: 'chooseToUse',
                            filterCard: true,
                            selectCard: 2,
                            position: 'h',
                            viewAs: {
                                name: 'shan',
                            },
                            viewAsFilter(player) {
                                if (player.countCards('h', { name: 'shan' }) || player.countCards('h') < 2) return false;
                            },
                            prompt: '将两张手牌当【闪】打出',
                            precontent() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒兔.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmsztu');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countCards('h') < 2) return false;
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
                        zmlongfu: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('he', { suit: 'diamond' })) return false;
                                return event.card && get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', `是否弃置一张♦️️牌令${get.translation(trigger.player)}受到的伤害改为火属性且伤害+1？`, function (card, player) {
                                    return card.suit == 'diamond';
                                });
                                var att = get.attitude(_status.event.player, trigger.player);
                                next.ai = function (card) {
                                    if (att < 0) {
                                        return 9 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (player.name == 'zm_13lingshengzhu') {
                                        game.playzm1(['zmszlong', 'zmszlong2'].randomGet());
                                    } else {
                                        game.playzm1('zmfuzhou');
                                    }
                                    setTimeout(function () {
                                        player.node.avatar.zm1t(
                                            'extension/综漫季刊壹/image/武将牌特效符咒龙.png',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            1000
                                        );
                                    }, 1200);
                                    trigger.nature = 'fire';
                                    trigger.num++;
                                }
                            },
                        },
                        zmshefu: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'h') return true;
                                    }
                                return false;
                            },
                            content() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒蛇.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu' && !player.hasSkill('zmzhengqifengyin')) {
                                    game.playzm1('zmszshe');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                                player.tempHide();
                            },
                            ai: {
                                noh: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'noh') {
                                        if (player.countCards('h') != 1) return false;
                                    }
                                },
                            },
                        },
                        zmmafu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('j') > 0 || player.maxHp > player.hp;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszma');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.judge > 0) {
                                    setTimeout(function () {
                                        player.node.avatar.zm1t(
                                            'extension/综漫季刊壹/image/武将牌特效符咒马.png',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            1000
                                        );
                                    }, 1200);
                                    player.discard(player.getCards('j'));
                                    if (result.card.suit == 'heart') {
                                        player.recover(2);
                                    }
                                }
                            },
                        },
                        zmyangfu: {
                            nobracket: true,
                            trigger: {
                                global: 'turnOverBefore',
                            },
                            filter(event, player) {
                                return !event.player.isTurnedOver();
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒羊.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszyang');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    var type = get.type(card);
                                    if (type == 'trick' || type == 'delay') return true;
                                },
                            },
                        },
                        zmhoufu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            group: 'zmhoufu_1',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('e', { type: 'equip' }) && current != player;
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.num('e') >= 1;
                            },
                            intro: {
                                content: 'card',
                            },
                            content() {
                                'step 0';
                                player.chooseCardButton(target, target.getCards('e')).set('filterButton', function (button) {
                                    return button.link.name != 'muniu';
                                });
                                ('step 1');
                                if (result.bool) {
                                    setTimeout(function () {
                                        player.node.avatar.zm1t(
                                            'extension/综漫季刊壹/image/武将牌特效符咒猴.png',
                                            {
                                                width: '100%',
                                                height: '100%',
                                            },
                                            1000
                                        );
                                    }, 1200);
                                    if (player.name == 'zm_13lingshengzhu' && !player.hasSkill('zmzhengqifengyin')) {
                                        game.playzm1('zmszhou');
                                    } else {
                                        game.playzm1('zmfuzhou');
                                    }
                                    var card;
                                    card = result.links[0];
                                    if (card) {
                                        player.markSkill('zmhoufu');
                                        player.storage.zmhoufu = card;
                                        var info = get.info(card);
                                        if (info.skills) {
                                            for (var i = 0; i < info.skills.length; i++) {
                                                player.addTempSkill(info.skills[i], { player: 'phaseAfter' });
                                            }
                                        }
                                    }
                                }
                            },
                            mod: {
                                attackFrom(from, to, distance) {
                                    if (from.storage.zmhoufu) {
                                        var info = get.info(from.storage.zmhoufu);
                                        var attackRange = 1;
                                        if (info.distance) attackRange = -info.distance.attackFrom + 1;
                                        return distance - attackRange;
                                    }
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        return 1;
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.subtype(card) == 'equip1') return [1, -1];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.unmarkSkill('zmhoufu');
                                        delete player.storage.zmhoufu;
                                    },
                                },
                            },
                        },
                        zmjifu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:2',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('zmjifu_1');
                            },
                            check(event, player) {
                                if (player.countCards('h', 'wuxie') > 0 || player.countCards('h', 'shan') > 0) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                'step 0';
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒鸡.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                player.addTempSkill('zmjifu_1', { player: 'phaseBefore' });
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszji');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                },
                            },
                        },
                        zmgoufu: {
                            nobracket: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' }) > 1 || (player.name == 'zm_13lingshengzhu' && player.storage.zmt_np >= 40);
                            },
                            check(event, player) {
                                if ((player.countCards('h', { name: 'tao' }) >= 1 && player.hp == 0) || (player.countCards('h', { name: 'jiu' }) >= 1 && player.hp == 0)) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒狗.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszgou');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                                ('step 1');
                                if (player.name == 'zm_13lingshengzhu' && player.storage.zmt_np >= 40) {
                                    player.storage.zmt_np -= 40;
                                    player.recover(1 - player.hp);
                                } else {
                                    var cards = player.getCards('he', { color: 'red' });
                                    if (cards.length) {
                                        player.discard(cards);
                                        game.log(player, `弃置了${cards.length}张牌`);
                                        player.recover(1 - player.hp);
                                    }
                                }
                            },
                        },
                        zmzhufu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                                colcr: 'red',
                            },
                            usable: 1,
                            position: 'h',
                            viewAsFilter(player) {
                                if (!player.countCards('h', { color: 'red' })) return false;
                            },
                            filterCard: {
                                color: 'red',
                            },
                            check(card) {
                                if (card.suit == 'heart') return 5 - get.value(card);
                                return 2 - get.value(card);
                            },
                            precontent() {
                                setTimeout(function () {
                                    player.node.avatar.zm1t(
                                        'extension/综漫季刊壹/image/武将牌特效符咒猪.png',
                                        {
                                            width: '100%',
                                            height: '100%',
                                        },
                                        1000
                                    );
                                }, 1200);
                                if (player.name == 'zm_13lingshengzhu') {
                                    game.playzm1('zmszzhu');
                                } else {
                                    game.playzm1('zmfuzhou');
                                }
                            },
                            ai: {
                                basic: {
                                    useful: [6, 4],
                                    value: [6, 4],
                                },
                                result: {
                                    player: 1,
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
                                expose: 0.2,
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
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
                        zmzhengqifengyin: {
                            nobracket: true,
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card, 'trick') != 'trick') return false;
                                },
                                cardUsable(card, player) {
                                    if (get.type(card, 'trick') != 'trick') return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card, 'trick') != 'trick') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.type(card, 'trick') != 'trick') return false;
                                },
                            },
                            group: ['zmzhengqifengyin_4', 'zmzhengqifengyin_1', 'zmzhengqifengyin_2', 'zmzhengqifengyin_3', 'zmzhengqifengyin_ji', 'zmzhengqifengyin_gou', 'zmzhengqifengyin_niu', 'zmzhengqifengyin_shu', 'zmzhengqifengyin_hu', 'zmzhengqifengyin_tu', 'zmzhengqifengyin_long', 'zmzhengqifengyin_she', 'zmzhengqifengyin_ma', 'zmzhengqifengyin_yang', 'zmzhengqifengyin_hou', 'zmzhengqifengyin_zhu', 'zmtyuansu', 'zmtjuda', 'zmtlongzu'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var card = trigger.cards;
                                        for (var i = 0; i < card.length; i++) {
                                            if (card[i].number == 1 && !player.hasSkill('zmzhengqifengyin_01')) {
                                                player.addSkill('zmzhengqifengyin_01');
                                                player.addSkill('zmshufu');
                                                player.popup('鼠', 'fire');
                                            }
                                            if (card[i].number == 2 && !player.hasSkill('zmzhengqifengyin_02')) {
                                                player.addSkill('zmniufu');
                                                player.addSkill('zmzhengqifengyin_02');
                                                player.popup('牛', 'fire');
                                            }
                                            if (card[i].number == 3 && !player.hasSkill('zmzhengqifengyin_03')) {
                                                player.addSkill('zmhufu');
                                                player.addSkill('zmzhengqifengyin_03');
                                                player.popup('虎', 'fire');
                                            }
                                            if (card[i].number == 4 && !player.hasSkill('zmzhengqifengyin_04')) {
                                                player.addSkill('zmtufu');
                                                player.addSkill('zmzhengqifengyin_04');
                                                player.popup('兔', 'fire');
                                            }
                                            if (card[i].number == 5 && !player.hasSkill('zmzhengqifengyin_05')) {
                                                player.addSkill('zmlongfu');
                                                player.addSkill('zmzhengqifengyin_05');
                                                player.popup('龙', 'fire');
                                            }
                                            if (card[i].number == 6 && !player.hasSkill('zmzhengqifengyin_06')) {
                                                player.addSkill('zmshefu');
                                                player.addSkill('zmzhengqifengyin_06');
                                                player.popup('蛇', 'fire');
                                            }
                                            if (card[i].number == 7 && !player.hasSkill('zmzhengqifengyin_07')) {
                                                player.addSkill('zmmafu');
                                                player.addSkill('zmzhengqifengyin_07');
                                                player.popup('马', 'fire');
                                            }
                                            if (card[i].number == 8 && !player.hasSkill('zmzhengqifengyin_08')) {
                                                player.addSkill('zmyangfu');
                                                player.addSkill('zmzhengqifengyin_08');
                                                player.popup('羊', 'fire');
                                            }
                                            if (card[i].number == 9 && !player.hasSkill('zmzhengqifengyin_09')) {
                                                player.addSkill('zmhoufu');
                                                player.addSkill('zmzhengqifengyin_09');
                                                player.popup('猴', 'fire');
                                            }
                                            if (card[i].number == 10 && !player.hasSkill('zmzhengqifengyin_010')) {
                                                player.addSkill('zmjifu');
                                                player.addSkill('zmzhengqifengyin_010');
                                                player.popup('鸡', 'fire');
                                            }
                                            if (card[i].number == 11 && !player.hasSkill('zmzhengqifengyin_011')) {
                                                player.addSkill('zmgoufu');
                                                player.addSkill('zmzhengqifengyin_011');
                                                player.popup('狗', 'fire');
                                            }
                                            if (card[i].number == 12 && !player.hasSkill('zmzhengqifengyin_012')) {
                                                player.addSkill('zmzhufu');
                                                player.addSkill('zmzhengqifengyin_012');
                                                player.popup('猪', 'fire');
                                            }
                                        }
                                        ('step 1');
                                        if (player.hasSkill('zmshufu') && player.hasSkill('zmniufu') && player.hasSkill('zmhufu') && player.hasSkill('zmtufu') && player.hasSkill('zmlongfu') && player.hasSkill('zmshefu') && player.hasSkill('zmmafu') && player.hasSkill('zmyangfu') && player.hasSkill('zmhoufu') && player.hasSkill('zmjifu') && player.hasSkill('zmgoufu') && player.hasSkill('zmzhufu')) {
                                            player.addSkill('zmszsx');
                                            var t = Math.random();
                                            if (t <= 0.5) {
                                                game.playzm1('zmshengzhu');
                                                game.mp421('zmshengzhu');
                                            } else {
                                                game.playzm1('zmshengzhu2');
                                                game.mp421('zmshengzhu2');
                                            }
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/圣主二阶段.png');
                                            if (player.hp < player.maxHp) {
                                                player.recover(player.maxHp);
                                            }
                                            player.removeSkill('zmzhengqifengyin');
                                        }
                                    },
                                },
                                2: {
                                    name: '符咒回收',
                                    trigger: {
                                        global: 'die',
                                    },
                                    filter(event, player) {
                                        return event.player.hasSkill('zmshufu') || event.player.hasSkill('zmniufu') || event.player.hasSkill('zmhufu') || event.player.hasSkill('zmtufu') || event.player.hasSkill('zmlongfu') || event.player.hasSkill('zmshefu') || event.player.hasSkill('zmmafu') || event.player.hasSkill('zmyangfu') || event.player.hasSkill('zmhoufu') || event.player.hasSkill('zmjifu') || event.player.hasSkill('zmgoufu') || event.player.hasSkill('zmzhufu');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (trigger.player.hasSkill('zmshufu')) {
                                            trigger.player.removeSkill('zmshufu');
                                            player.addSkill('zmshufu');
                                        }
                                        if (trigger.player.hasSkill('zmniufu')) {
                                            trigger.player.removeSkill('zmniufu');
                                            player.addSkill('zmniufu');
                                        }
                                        if (trigger.player.hasSkill('zmhufu')) {
                                            trigger.player.removeSkill('zmhufu');
                                            player.addSkill('zmhufu');
                                        }
                                        if (trigger.player.hasSkill('zmtufu')) {
                                            trigger.player.removeSkill('zmtufu');
                                            player.addSkill('zmtufu');
                                        }
                                        if (trigger.player.hasSkill('zmlongfu')) {
                                            trigger.player.removeSkill('zmlongfu');
                                            player.addSkill('zmlongfu');
                                        }
                                        if (trigger.player.hasSkill('zmshefu')) {
                                            trigger.player.removeSkill('zmshefu');
                                            player.addSkill('zmshefu');
                                        }
                                        if (trigger.player.hasSkill('zmmafu')) {
                                            trigger.player.removeSkill('zmmafu');
                                            player.addSkill('zmmafu');
                                        }
                                        if (trigger.player.hasSkill('zmyangfu')) {
                                            trigger.player.removeSkill('zmyangfu');
                                            player.addSkill('zmyangfu');
                                        }
                                        if (trigger.player.hasSkill('zmhoufu')) {
                                            trigger.player.removeSkill('zmhoufu');
                                            player.addSkill('zmhoufu');
                                        }
                                        if (trigger.player.hasSkill('zmjifu')) {
                                            trigger.player.removeSkill('zmjifu');
                                            player.addSkill('zmjifu');
                                        }
                                        if (trigger.player.hasSkill('zmgoufu')) {
                                            trigger.player.removeSkill('zmgoufu');
                                            player.addSkill('zmgoufu');
                                        }
                                        if (trigger.player.hasSkill('zmzhufu')) {
                                            trigger.player.removeSkill('zmzhufu');
                                            player.addSkill('zmzhufu');
                                        }
                                        ('step 1');
                                        if (player.hasSkill('zmshufu') && player.hasSkill('zmniufu') && player.hasSkill('zmhufu') && player.hasSkill('zmtufu') && player.hasSkill('zmlongfu') && player.hasSkill('zmshefu') && player.hasSkill('zmmafu') && player.hasSkill('zmyangfu') && player.hasSkill('zmhoufu') && player.hasSkill('zmjifu') && player.hasSkill('zmgoufu') && player.hasSkill('zmzhufu')) {
                                            player.addSkill('zmszsx');
                                            var t = Math.random();
                                            if (t <= 0.5) {
                                                game.playzm1('zmshengzhu');
                                                game.mp421('zmshengzhu');
                                            } else {
                                                game.playzm1('zmshengzhu2');
                                                game.mp421('zmshengzhu2');
                                            }
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/圣主二阶段.png');
                                            if (player.hp < player.maxHp) {
                                                player.recover(player.maxHp);
                                            }
                                            player.removeSkill('zmzhengqifengyin');
                                        }
                                    },
                                },
                                3: {
                                    name: '符咒回收',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    check(event, player) {
                                        if (player.hasSkill('zmzhengqifengyin_01') && player.hasSkill('zmzhengqifengyin_02') && player.hasSkill('zmzhengqifengyin_03') && player.hasSkill('zmzhengqifengyin_04') && player.hasSkill('zmzhengqifengyin_05') && player.hasSkill('zmzhengqifengyin_06') && player.hasSkill('zmzhengqifengyin_07') && player.hasSkill('zmzhengqifengyin_08') && player.hasSkill('zmzhengqifengyin_09') && player.hasSkill('zmzhengqifengyin_010') && player.hasSkill('zmzhengqifengyin_011') && player.hasSkill('zmzhengqifengyin_012')) true;
                                        if (player.hp <= 3 || Math.random() < 0.25) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return (current != player && current.hasSkill('zmshufu')) || (current != player && current.hasSkill('zmniufu')) || (current != player && current.hasSkill('zmhufu')) || (current != player && current.hasSkill('zmtufu')) || (current != player && current.hasSkill('zmlongfu')) || (current != player && current.hasSkill('zmshefu')) || (current != player && current.hasSkill('zmmafu')) || (current != player && current.hasSkill('zmyangfu')) || (current != player && current.hasSkill('zmhoufu')) || (current != player && current.hasSkill('zmjifu')) || (current != player && current.hasSkill('zmgoufu')) || (current != player && current.hasSkill('zmzhufu'));
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        event.players = event.players.filter((i) => {
                                            if (!i.hasSkill('zmshufu') && !i.hasSkill('zmniufu') && !i.hasSkill('zmhufu') && !i.hasSkill('zmtufu') && !i.hasSkill('zmlongfu') && !i.hasSkill('zmshefu') && !i.hasSkill('zmmafu') && !i.hasSkill('zmyangfu') && !i.hasSkill('zmhoufu') && !i.hasSkill('zmjifu') && !i.hasSkill('zmgoufu') && !i.hasSkill('zmzhufu')) {
                                                return false;
                                            }
                                            return true;
                                        });
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            if (current.hasSkill('zmshufu')) {
                                                current.removeSkill('zmshufu');
                                                player.addSkill('zmshufu');
                                            }
                                            if (current.hasSkill('zmniufu')) {
                                                current.removeSkill('zmniufu');
                                                player.addSkill('zmniufu');
                                            }
                                            if (current.hasSkill('zmhufu')) {
                                                current.removeSkill('zmhufu');
                                                player.addSkill('zmhufu');
                                            }
                                            if (current.hasSkill('zmtufu')) {
                                                current.removeSkill('zmtufu');
                                                player.addSkill('zmtufu');
                                            }
                                            if (current.hasSkill('zmlongfu')) {
                                                current.removeSkill('zmlongfu');
                                                player.addSkill('zmlongfu');
                                            }
                                            if (current.hasSkill('zmshefu')) {
                                                current.removeSkill('zmshefu');
                                                player.addSkill('zmshefu');
                                            }
                                            if (current.hasSkill('zmmafu')) {
                                                current.removeSkill('zmmafu');
                                                player.addSkill('zmmafu');
                                            }
                                            if (current.hasSkill('zmyangfu')) {
                                                current.removeSkill('zmyangfu');
                                                player.addSkill('zmyangfu');
                                            }
                                            if (current.hasSkill('zmhoufu')) {
                                                current.removeSkill('zmhoufu');
                                                player.addSkill('zmhoufu');
                                            }
                                            if (current.hasSkill('zmjifu')) {
                                                current.removeSkill('zmjifu');
                                                player.addSkill('zmjifu');
                                            }
                                            if (current.hasSkill('zmgoufu')) {
                                                current.removeSkill('zmgoufu');
                                                player.addSkill('zmgoufu');
                                            }
                                            if (current.hasSkill('zmzhufu')) {
                                                current.removeSkill('zmzhufu');
                                                player.addSkill('zmzhufu');
                                            }
                                            event.redo();
                                        }
                                        ('step 2');
                                        if (player.hasSkill('zmshufu') && player.hasSkill('zmniufu') && player.hasSkill('zmhufu') && player.hasSkill('zmtufu') && player.hasSkill('zmlongfu') && player.hasSkill('zmshefu') && player.hasSkill('zmmafu') && player.hasSkill('zmyangfu') && player.hasSkill('zmhoufu') && player.hasSkill('zmjifu') && player.hasSkill('zmgoufu') && player.hasSkill('zmzhufu')) {
                                            player.addSkill('zmszsx');
                                            var t = Math.random();
                                            if (t <= 0.5) {
                                                game.playzm1('zmshengzhu');
                                                game.mp421('zmshengzhu');
                                            } else {
                                                game.playzm1('zmshengzhu2');
                                                game.mp421('zmshengzhu2');
                                            }
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/圣主二阶段.png');
                                            if (player.hp < player.maxHp) {
                                                player.recover(player.maxHp);
                                            }
                                            player.removeSkill('zmzhengqifengyin');
                                        }
                                    },
                                },
                                4: {
                                    name: '代行',
                                    audio: 'ext:综漫季刊壹/audio:5',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    prompt: '是否将全部手牌交给一名其他角色,并令其开始一个额外的出牌阶段？',
                                    filter(event, player) {
                                        if (!player.countCards('h')) return false;
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt2('zmzhengqifengyin_4'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                if (get.attitude(player, target) > 3) {
                                                    return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1) + 1;
                                                    return get.threaten(target) / Math.sqrt(target.hp + 1) / Math.sqrt(target.countCards('h') + 1);
                                                }
                                                return 0;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.target1 = result.targets[0];
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            event.target1.gainPlayerCard(player, 'h', Infinity, true);
                                            event.target1.addTempSkill('zmzhengqifengyin_5', { player: 'phaseUseEnd' });
                                            event.target1.phaseUse();
                                        }
                                    },
                                    ai: {
                                        expose: 0.4,
                                    },
                                },
                                5: {
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('zmzhengqifengyin_5');
                                        var sz = game.findPlayer(function (current) {
                                            return current.hasSkill('zmzhengqifengyin');
                                        }); //QQQ
                                        if (sz && sz.hp <= sz.maxHp) {
                                            sz.draw(1);
                                        }
                                    },
                                },
                                '01': {},
                                '02': {},
                                '03': {},
                                '04': {},
                                '05': {},
                                '06': {},
                                '07': {},
                                '08': {},
                                '09': {},
                                '010': {},
                                '011': {},
                                '012': {},
                                niu: {
                                    name: '牛',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将牛符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmniufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmniufu');
                                        ('step 1');
                                        target.addSkill('zmniufu');
                                    },
                                    ai: {
                                        order: 8,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') > 2) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.1,
                                    },
                                },
                                ma: {
                                    name: '马',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将马符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmmafu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmmafu');
                                        ('step 1');
                                        target.addSkill('zmmafu');
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            target(player, target) {
                                                if (player.hp >= 4 && target.hp <= 2) return 8;
                                                return 0;
                                            },
                                        },
                                        threaten: 1,
                                    },
                                },
                                she: {
                                    name: '蛇',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将蛇符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmshefu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshefu');
                                        ('step 1');
                                        target.addSkill('zmshefu');
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') == 1 && target.hp <= 3 && player.hp > 3) return 5;
                                                return 0;
                                            },
                                        },
                                        threaten: 2,
                                    },
                                },
                                long: {
                                    name: '龙',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将龙符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmlongfu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmlongfu');
                                        ('step 1');
                                        target.addSkill('zmlongfu');
                                    },
                                    ai: {
                                        order: 3,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') >= 4) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0,
                                    },
                                },
                                hou: {
                                    name: '猴',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将猴符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmhoufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmhoufu');
                                        ('step 1');
                                        target.addSkill('zmhoufu');
                                    },
                                    ai: {
                                        order: 6,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') >= 2) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.1,
                                    },
                                },
                                yang: {
                                    name: '羊',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将羊符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmyangfu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmyangfu');
                                        ('step 1');
                                        target.addSkill('zmyangfu');
                                    },
                                    ai: {
                                        order: 5,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') >= 4) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.1,
                                    },
                                },
                                zhu: {
                                    name: '猪',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将猪符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmzhufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmzhufu');
                                        ('step 1');
                                        target.addSkill('zmzhufu');
                                    },
                                    ai: {
                                        order: 7,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') >= 3) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.2,
                                    },
                                },
                                tu: {
                                    name: '兔',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将兔符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmtufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmtufu');
                                        ('step 1');
                                        target.addSkill('zmtufu');
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 3 && target.countCards('h') >= 2) return 5;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.2,
                                    },
                                },
                                shu: {
                                    name: '鼠',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将鼠符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmshufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshufu');
                                        ('step 1');
                                        target.addSkill('zmshufu');
                                    },
                                    ai: {
                                        order: 2,
                                        result: {
                                            target(player, target) {
                                                if (target.hp == 1) return 4;
                                                return 1;
                                            },
                                        },
                                        threaten: 0.1,
                                    },
                                },
                                hu: {
                                    name: '虎',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将虎符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmhufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmhufu');
                                        ('step 1');
                                        target.addSkill('zmhufu');
                                    },
                                    ai: {
                                        order: 6,
                                        result: {
                                            target(player, target) {
                                                if (target.countCards('h') == 1) return 6;
                                                return 0;
                                            },
                                        },
                                        threaten: 0.3,
                                    },
                                },
                                gou: {
                                    name: '狗',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将狗符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmgoufu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmgoufu');
                                        ('step 1');
                                        target.addSkill('zmgoufu');
                                    },
                                    ai: {
                                        order: 12,
                                        result: {
                                            target(player, target) {
                                                if (target.hp == 1) return 5;
                                                return 2;
                                            },
                                        },
                                        threaten: 0.3,
                                    },
                                },
                                ji: {
                                    name: '鸡',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '将鸡符咒交给一名其他角色',
                                    filterTarget(card, player, target) {
                                        if (player == target) return false;
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmjifu');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmjifu');
                                        ('step 1');
                                        target.addSkill('zmjifu');
                                    },
                                    ai: {
                                        order: 11,
                                        result: {
                                            target(player, target) {
                                                if (target.hp <= 2) return 5;
                                                return 2;
                                            },
                                        },
                                        threaten: 0.1,
                                    },
                                },
                            },
                        },
                        zmszsx: {
                            group: ['zmtyuansu', 'zmtjuda', 'zmtlongzu'],
                        },
                        zmlinghuawuzhuang: {
                            mod: {
                                globalFrom(from, to, current) {
                                    if (game.dead.length == 0) return current - 1;
                                    return current;
                                },
                                globalTo(from, to, current) {
                                    if (game.dead.length) return current + 1;
                                    return current;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            trigger: {
                                player: 'damageBefore',
                            },
                            filter(event, player) {
                                return player.num('e') > 0;
                            },
                            content() {
                                player.chooseToDiscard(1, 'e', true);
                                trigger.num--;
                            },
                            group: ['zmlinghuawuzhuang_1', 'zmlinghuawuzhuang_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (i.original == 'e' && lib.card[i.name].skills && i.name != 'muniu') return true;
                                            }
                                        return false;
                                    },
                                    content() {
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (i.original == 'e') {
                                                    var skills = lib.card[i.name].skills;
                                                    if (skills != undefined) {
                                                        game.playzm1('zmlinghuawuzhuang_11');
                                                        for (var j = 0; j < skills.length; j++) {
                                                            player.addTempSkill(skills[j], { player: 'equipBefore' });
                                                        }
                                                    }
                                                }
                                            }
                                    },
                                    popup: false,
                                },
                                2: {
                                    audio: 'ext:综漫季刊壹/audio:4',
                                    trigger: {
                                        player: 'equipAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            game.countPlayer(function (current) {
                                                return current.countCards('h') > player.countCards('h');
                                            }) > 0
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('zmlinghuawuzhuang_2'), function (card, player, target) {
                                            return target.countCards('h') > player.countCards('h');
                                        }).ai = function (target) {
                                            return -get.attitude(player, target);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            event.target = result.targets[0];
                                            player.line(event.target);
                                            player.discardPlayerCard(1, 'he', event.target);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.cards != undefined) {
                                            if (get.color(result.cards[0]) == 'black') player.useCard({ name: 'sha' }, event.target);
                                        }
                                    },
                                },
                            },
                        },
                        zmyanwangjiadao: {
                            nobracket: true,
                            group: ['zmyanwangjiadao_use', 'zmtshenxing', 'zmtrenxing'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    silent: true,
                                    content() {
                                        game.playzm1(['zmyanwangjiadao_21', 'zmyanwangjiadao_22'].randomGet());
                                        player.removeSkill('zmyanwangjiadao_2');
                                    },
                                    ai: {
                                        threaten: 1.3,
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                use: {
                                    ai: {
                                        expose: 0.2,
                                    },
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 60) return false;
                                        return !player.hasSkill('zmyanwangjiadao_temp');
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 60;
                                        player
                                            .chooseTarget([1, 2], '令至多2名其他角色获得1个额外的回合', function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('zmyanwangjiadao_temp');
                                            var len = result.targets.length;
                                            for (var i = 0; i < len; i++) {
                                                result.targets[i].stat.push({ card: {}, skill: {} });
                                                result.targets[i].addSkill('zmyanwangjiadao_2');
                                                result.targets[i].phase('nodelay');
                                            }
                                        }
                                        game.playzm1('zmyanxiaoluo');
                                        game.mp421('zmyanxiaoluo');
                                        ('step 2');
                                        event.num = 0;
                                        event.targets = game.filterPlayer(function (current) {
                                            return current != player && !current.hasSkill('zmyanwangjiadao_2');
                                        });
                                        event.targets.remove(player);
                                        event.targets.sort(lib.sort.seat);
                                        ('step 3');
                                        if (event.num < event.targets.length) {
                                            if (event.targets[event.num].get('he').length < 4) {
                                                event.targets[event.num].damage(1);
                                            } else {
                                                event.targets[event.num].randomDiscard(4, 'he', true);
                                            }
                                            event.num++;
                                            event.goto(3);
                                        }
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmgerenjifen: {
                            trigger: {
                                global: 'useCard',
                            },
                            nobracket: true,
                            usable: 1,
                            audio: 'ext:综漫季刊壹/audio:5',
                            filter(event, player) {
                                if (player.hasSkill('zmgerenjifen_temp')) return false;
                                if (_status.currentPhase != event.player) return false;
                                return event.player.countUsed(null, true) == 1;
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return event.player.getEnemies().includes(current) && event.player.canUse('sha', current) && get.effect(current, { name: 'sha' }, event.player) > 0;
                                });
                                if (event.card.name == 'sha' && get.attitude(player, event.player) > 0) return false;
                                if (event.card.name == 'jiu') return false;
                                if ((get.attitude(player, event.player) <= 0 && event.player.countCards('h') <= 2) || (get.attitude(player, event.player) <= 0 && num4 == 0) || (get.attitude(player, event.player) <= 0 && event.card.name == 'sha' && num4 == 0) || (event.card.name == 'tao' && get.attitude(player, event.player) <= 0)) {
                                    return true;
                                }
                                if ((get.attitude(player, event.player) > 0 && num4 >= 1 && event.player.countCards('h') >= 2 && event.card.name != 'sha' && get.type(event.card) != 'equip' && event.player != player) || (num4 >= 1 && player.countCards('h', { name: 'sha' }) >= 1 && event.card.name != 'sha' && event.player != player && event.card.name != 'tao')) {
                                    return true;
                                }
                            },
                            prompt(event, player) {
                                return `是否将${get.translation(event.player)}使用的${get.translation(event.card)}改为【酒】？`;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player);
                                /* event.card=get.copy(trigger.card);
                                 event.card.name='jiu'; 
                                 trigger.parent.card=event.card;    */
                                trigger.cancel();
                                trigger.player.useCard({ name: 'jiu' }, trigger.player, false);
                                if (!player.hasSkill('zmgerenjifen_temp')) {
                                    player.addTempSkill('zmgerenjifen_temp', 'roundStart');
                                }
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmqunmengdexuanxiao: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('h') >= 1;
                                });
                                return num4 >= 1 && player.storage.zmt_np >= num4 * 10;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num0 = 0;
                                event.num1 = 0;
                                event.num00 = 0;
                                event.num11 = 0;
                                player
                                    .chooseControl('使用【杀】', '使用【桃】', true, function () {
                                        if (get.attitude(target, player) > 0) return '使用【桃】';
                                        return '使用【杀】';
                                    })
                                    .set('prompt', '选择一项效果发动');
                                ('step 1');
                                if (result.control == '使用【杀】') {
                                    game.playzm1(['zmqunmengdexuanxiao11', 'zmqunmengdexuanxiao12'].randomGet());
                                    event.num0 += 1;
                                    player.line(target, 'fire');
                                } else {
                                    game.playzm1(['zmqunmengdexuanxiao21', 'zmqunmengdexuanxiao22'].randomGet());
                                    event.num1 += 1;
                                    player.line(target);
                                }
                                ('step 2');
                                event.num = 0;
                                if (player.countCards('h') >= 1 && event.num0 == 1) {
                                    player.storage.zmt_np -= 10;
                                    var red = player.countCards('h', { color: 'red' });
                                    var black = player.countCards('h', { color: 'black' });
                                    if (black >= 1) {
                                        if (black >= 1 && red >= black + 1) {
                                            event.num00 = 1;
                                            player
                                                .chooseControl('确定', '取消', true, function () {
                                                    if (get.attitude(target, player) > 0 && player.countCards('h', { name: 'tao' }) == 0) return '确定';
                                                    return '取消';
                                                })
                                                .set('prompt', `是否弃置手牌中的红色牌并拒绝对${get.translation(target)}使用【杀】？`);
                                        } else {
                                            var card = player.getCards('h', { color: 'black' });
                                            if (card.length) {
                                                //  palyer.lose(card,ui.ordering);
                                                player.useCard({ name: 'sha' }, card, target);
                                            }
                                        }
                                    }
                                } else {
                                    if (player.countCards('h') >= 1 && event.num1 == 1) {
                                        var red = player.countCards('h', { color: 'red' });
                                        var black = player.countCards('h', { color: 'black' });
                                        if (red >= 1) {
                                            if (red >= 1 && black >= red + 1) {
                                                event.num11 = 1;
                                                player
                                                    .chooseControl('确定', '取消', true, function () {
                                                        if (get.attitude(target, player) <= 0) return '确定';
                                                        return '取消';
                                                    })
                                                    .set('prompt', `是否弃置手牌中的黑色牌并拒绝对${get.translation(target)}使用【桃】？`);
                                            } else {
                                                var card = player.getCards('h', { color: 'red' });
                                                if (card.length) {
                                                    //  palyer.lose(card,ui.ordering);
                                                    player.useCard({ name: 'tao' }, card, target);
                                                }
                                            }
                                        }
                                    }
                                }
                                ('step 3');
                                event.num3 = 0;
                                if (event.num00 == 1 && result.control == '确定') {
                                    var cards = player.getCards('h', { color: 'red' });
                                    if (cards.length) {
                                        player.discard(cards);
                                        game.log(player, `弃置了${cards.length}张牌`);
                                    }
                                }
                                if (event.num00 == 1 && result.control == '取消') {
                                    var card = player.getCards('h', { color: 'black' });
                                    if (card.length) {
                                        player.useCard({ name: 'sha' }, card, target);
                                    }
                                }
                                if (event.num11 == 1 && result.control == '确定') {
                                    var cards = player.getCards('h', { color: 'black' });
                                    if (cards.length) {
                                        player.discard(cards);
                                        game.log(player, `弃置了${cards.length}张牌`);
                                    }
                                }
                                if (event.num11 == 1 && result.control == '取消') {
                                    var card = player.getCards('h', { color: 'red' });
                                    if (card.length) {
                                        player.useCard({ name: 'tao' }, card, target);
                                    }
                                }
                                event.num11 = 0;
                                event.num00 = 0;
                                event.current = player.next;
                                ('step 4');
                                if (event.current.countCards('h') >= 1 && event.num3 == 0) {
                                    event.num3 = 1;
                                    player.storage.zmt_np -= 10;
                                    if (event.current.countCards('h') >= 1 && event.num0 == 1) {
                                        var red = event.current.countCards('h', { color: 'red' });
                                        var black = event.current.countCards('h', { color: 'black' });
                                        if (black >= 1) {
                                            if (black >= 1 && red >= black + 1) {
                                                event.num00 = 1;
                                                event.current
                                                    .chooseControl('确定', '取消', true, function () {
                                                        if (get.attitude(target, event.current) > 0 && event.current.countCards('h', { name: 'tao' }) == 0) return '确定';
                                                        return '取消';
                                                    })
                                                    .set('prompt', `是否弃置手牌中的红色牌并拒绝对${get.translation(target)}使用【杀】？`);
                                            } else {
                                                var card = event.current.getCards('h', { color: 'black' });
                                                if (card.length) {
                                                    event.current.useCard({ name: 'sha' }, card, target);
                                                }
                                            }
                                        }
                                    } else {
                                        if (event.current.countCards('h') >= 1 && event.num1 == 1) {
                                            var red = event.current.countCards('h', { color: 'red' });
                                            var black = event.current.countCards('h', { color: 'black' });
                                            if (red >= 1) {
                                                if (red >= 1 && black >= red + 1) {
                                                    event.num11 = 1;
                                                    event.current
                                                        .chooseControl('确定', '取消', true, function () {
                                                            if (get.attitude(target, event.current) <= 0) return '确定';
                                                            return '取消';
                                                        })
                                                        .set('prompt', `是否弃置手牌中的黑色牌并拒绝对${get.translation(target)}使用【桃】？`);
                                                } else {
                                                    var card = event.current.getCards('h', { color: 'red' });
                                                    if (card.length) {
                                                        event.current.useCard({ name: 'tao' }, card, target);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                ('step 5');
                                if (event.num0 == 1 && event.num00 == 1 && result.control == '确定') {
                                    var cards = event.current.getCards('h', { color: 'red' });
                                    if (cards.length) {
                                        event.current.discard(cards);
                                        game.log(event.current, `弃置了${cards.length}张牌`);
                                    }
                                }
                                if (event.num0 == 1 && event.num00 == 1 && result.control == '取消') {
                                    var card = event.current.getCards('h', { color: 'black' });
                                    if (card.length) {
                                        event.current.useCard({ name: 'sha' }, card, target);
                                    }
                                }
                                if (event.num1 == 1 && event.num11 == 1 && result.control == '确定') {
                                    var cards = event.current.getCards('h', { color: 'black' });
                                    if (cards.length) {
                                        event.current.discard(cards);
                                        game.log(event.current, `弃置了${cards.length}张牌`);
                                    }
                                }
                                if (event.num1 == 1 && event.num11 == 1 && result.control == '取消') {
                                    var card = event.current.getCards('h', { color: 'red' });
                                    if (card.length) {
                                        event.current.useCard({ name: 'tao' }, card, target);
                                    }
                                }
                                event.num11 = 0;
                                event.num00 = 0;
                                event.num3 = 0;
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(4);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged() && current.getDamagedHp() >= 2;
                                        });
                                        var num = game.players.length;
                                        if (player.hasSkill('zmzhuyouyaoguang_1')) return 0;
                                        if ((num3 == 0 && num4 == 0) || num == 0) return 0;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged() && current.getDamagedHp() >= 2;
                                        });
                                        var num = game.players.length;
                                        var num0 = target.hp;
                                        var num1 = target.maxHp - target.hp;
                                        if ((num3 == 0 && num4 == 0) || num == 0) return 0;
                                        if ((get.attitude(player, target) > 0 && target.isDamaged() && target.getDamagedHp() <= 1 && num3 >= 2) || (get.attitude(player, target) > 0 && !target.isDamaged())) return 0;
                                        if (num < 3 && get.attitude(player, target) < 0 && get.effect(target, { name: 'sha' }, player) > 0 && player.countCards('h', { color: 'black' })) return -2;
                                        if (num >= 3 && get.attitude(player, target) < 0 && get.effect(target, { name: 'sha' }, player) > 0 && player.countCards('h', { color: 'black' })) return -num;
                                        if (num >= 3 && get.attitude(player, target) > 0 && target.isDamaged() && target.getDamagedHp() >= 3 && player.countCards('h', { color: 'red' })) return num1;
                                        if (num < 3 && get.attitude(player, target) > 0 && target.isDamaged() && player.countCards('h', { color: 'red' })) return 2;
                                        return 0;
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        zmjiaozhisizhang: {
                            nobracket: true,
                            init(player) {
                                player.countCards = function (arg1, arg2) {
                                    if (!arg2) {
                                        if (arg1 == 'h') {
                                            return 0;
                                        } else arg1 = arg1.replace(/h/, '');
                                    }
                                    return this.getCards(arg1, arg2).length;
                                };
                                player.countDiscardableCards = function (player, arg1, arg2) {
                                    if (arg1 == 'h') {
                                        return 0;
                                    } else arg1 = arg1.replace(/h/, '');
                                    return this.getDiscardableCards(player, arg1, arg2).length;
                                };
                                player.countGainableCards = function (player, arg1, arg2) {
                                    if (arg1 == 'h') {
                                        return 0;
                                    } else arg1 = arg1.replace(/h/, '');
                                    return this.getGainableCards(player, arg1, arg2).length;
                                };
                            },
                            group: ['zmjiaozhi_control', 'zmtgaodengliliang', 'zmjiaozhi', 'zmtmoxing', 'zmtrenxing'],
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (get.type(card) == 'delay' || get.type(card) == 'trick') {
                                        return true;
                                    }
                                },
                                targetEnabled(card, player, target) {
                                    if ((get.type(card) == 'delay' && player != target) || (get.type(card) == 'trick' && player != target)) {
                                        return false;
                                    }
                                },
                            },
                        },
                        zmjiaozhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:9',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (game.countPlayer() < 3) return false;
                                for (var i of lib.suit) {
                                    if (player.countCards('hej', { suit: i }) > 1) return true;
                                }
                                return false;
                            },
                            complexCard: true,
                            position: 'hej',
                            filterCard(card, player) {
                                if (!ui.selected.cards.length) {
                                    var suit = card.suit;
                                    return (
                                        player.countCards('hej', function (card2) {
                                            return card != card2 && card2.suit == suit;
                                        }) > 0
                                    );
                                }
                                return card.suit == ui.selected.cards[0].suit;
                            },
                            selectCard: 2,
                            selectTarget: 2,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            multitarget: true,
                            multiline: true,
                            delay: false,
                            check(card) {
                                if (['tao', 'sha', 'shan'].includes(card.name)) return -1;
                                return 1;
                            },
                            targetprompt: ['拼点发起人', '拼点目标'],
                            content() {
                                'step 0';
                                player.draw(2);
                                player.showCards(cards);
                                ('step 1');
                                var target = targets[0];
                                targets.sortBySeat();
                                if (target != targets[0]) cards.reverse();
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].gain(i, 'giveAuto');
                                    player.$give(1, targets[i]);
                                }
                                ('step 2');
                                if (targets[0].canCompare(targets[1])) {
                                    targets[0].chooseToCompare(targets[1]);
                                } else event.finish();
                                ('step 3');
                                if (result.winner !== targets[0] && result.winner !== targets[1]) {
                                    game.playzm1('zmjiaozhi01');
                                } else {
                                    game.playzm1('zmjiaozhi0');
                                }
                                if (result.winner !== targets[0]) targets[0].addMark('zmjiaozhi', 1);
                                if (result.winner !== targets[1]) targets[1].addMark('zmjiaozhi', 1);
                            },
                            marktext: '因',
                            intro: {
                                name: '因果',
                                name2: '因果',
                                content: 'mark',
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return player.getEnemies().includes(current);
                                        });
                                        if (target.hasMark('zmjiaozhi')) return -2;
                                        if (num4 <= 1) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmjiaozhi_control: {
                            forced: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                global: 'phaseBeginStart',
                            },
                            filter(event, player) {
                                return player != event.player && !event.player._trueMe && event.player.countMark('zmjiaozhi') > 1;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                game.mp421('zmbeilier3');
                                trigger.player.removeMark('zmjiaozhi', trigger.player.countMark('zmjiaozhi'));
                                ('step 1');
                                game.playzm1(['zmbkz1', 'zmbkz2', 'zmbkz3', 'zmbkz4', 'zmbkz5', 'zmbkz6'].randomGet());
                                game.mp421('zmbeilier4');
                                player.recover();
                            },
                        },
                        zmzhimingyouxi: {
                            _priority: 15,
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:22',
                            trigger: {
                                global: ['shaBefore'],
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0 && player.isAlive() && event.player != player && event.targets.includes(player) == false;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.targets[0]) > 0) {
                                    if (player.countCards('h', 'shan') > 0 || player.countCards('h', 'sha') > 0) return true;
                                    if (player.hp > 1) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.player
                                    .chooseToDiscard('弃置一张【闪】,否则此杀目标将转移为' + get.translation(player), function (card) {
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
                                    trigger.player.draw();
                                }
                            },
                            ai: {
                                expose: 0.4,
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'sha' && player.countCards('h', { name: 'sha' }) <= 1) return [0, 0];
                                    },
                                },
                            },
                            group: ['zmzhimingyouxi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'shaBegin',
                                    },
                                    prompt: '是否弃置1张杀,将此【杀】目标改为其使用者？',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.target && event.target == player && player.countCards('h', { name: 'sha' }) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(1, 'h', '选择手牌中的一张杀弃置', { name: 'sha' }, true);
                                        ('step 1');
                                        trigger.target = trigger.player;
                                        game.log(trigger.player, '的', trigger.card, '目标改为', trigger.target);
                                        if (player.storage.zmt_np >= 60) {
                                            player.storage.zmt_np = 0;
                                            var t = Math.random();
                                            if (t <= 0.3) {
                                                game.playzm1('zmjzdz1');
                                                game.mp421('zmbeilier');
                                            }
                                            if (t > 0.3) {
                                                game.playzm1(['zmjzdz2', 'zmjzdz22', 'zmjzdz222'].randomGet());
                                                game.mp421('zmbeilier2');
                                            }
                                            trigger.player.damage(2, player);
                                        } else {
                                            game.playzm1(['zmzhimingyouxi_11', 'zmzhimingyouxi_12', 'zmzhimingyouxi_13', 'zmzhimingyouxi_14', 'zmzhimingyouxi_15', 'zmzhimingyouxi_16', 'zmzhimingyouxi_17', 'zmzhimingyouxi_18', 'zmzhimingyouxi_19', 'zmzhimingyouxi_110', 'zmzhimingyouxi_111', 'zmzhimingyouxi_112', 'zmzhimingyouxi_113', 'zmzhimingyouxi_114', 'zmzhimingyouxi_115', 'zmzhimingyouxi_116', 'zmzhimingyouxi_117', 'zmzhimingyouxi_118'].randomGet());
                                        }
                                    },
                                },
                            },
                        },
                        zmrongyuefeiren: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                return (_status.currentPhase == player && player.countCards('he', { color: 'red' })) || (_status.currentPhase != player && event.target.countCards('he', { color: 'red' }));
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (_status.currentPhase == player) {
                                    var next = player.chooseToDiscard(1, 'he', `是否弃置一张红色牌对${get.translation(trigger.target)}使用的【杀】附加伤害？`, function (card) {
                                        return get.color(card) == 'red';
                                    });
                                    next.ai = function (card) {
                                        var player = _status.event.player;
                                        if (get.damageEffect(trigger.targets[0], player, player, 'fire') <= 0 || get.attitude(player, trigger.target) > 0) return 0;
                                        if (trigger.target.countCards('h') == 1) return 7 - get.value(card);
                                        if (trigger.target.countCards('h') == 0) return 9 - get.value(card);
                                        return 6 - get.value(card);
                                    };
                                } else {
                                    player
                                        .chooseCardButton(trigger.target, trigger.target.getCards('he'), `是否弃置一张红色牌对${get.translation(trigger.target)}使用的【杀】附加伤害？`)
                                        .set('filterButton', function (button) {
                                            return get.color(button.link) == 'red';
                                        })
                                        .set('ai', function (button) {
                                            var player = _status.event.player;
                                            if (get.damageEffect(trigger.targets[0], player, player, 'fire') <= 0 || get.attitude(player, trigger.target) > 0) return 0;
                                            if (button.link.name == 'shan' && trigger.targets[0].countCards('h', { name: 'shan' }) == 1) return 18 - get.value(button.link);
                                            return 12 - get.value(button.link);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (_status.currentPhase != player) {
                                        event.card = result.links[0];
                                        trigger.target.discard(event.card);
                                    }
                                    if (_status.currentPhase == player) {
                                        var t = Math.random();
                                        if (t <= 0.5) {
                                            game.playzm1('zmyouaier1');
                                            game.mp421('zmyouaier1');
                                        }
                                        if (t > 0.5) {
                                            game.playzm1('zmyouaier2');
                                            game.mp421('zmyouaier2');
                                        }
                                    }
                                    player.addTempSkill('zmrongyuefeiren_1', { player: 'shaAfter' });
                                }
                            },
                            group: ['zmrongyuefeiren_2', 'zmtleiren'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:3',
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.line(trigger.player, 'fire');
                                        trigger.player.damage('fire');
                                        //trigger.player.randomDiscard(1,'he',true);
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        target: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h', { name: 'sha' }) >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.target.chooseToUse(`是否对${get.translation(trigger.player)}使用一张【杀】？`, { name: 'sha' }, -1, trigger.player);
                                        ('step 1');
                                    },
                                },
                            },
                        },
                        zmyetianguang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            check(event, player) {
                                return player.countCards('h') < player.maxHp;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                if (player.countCards('h') <= 0) event.goto(3);
                                ('step 1');
                                player.chooseCard('h', [0, 2], true, '可保留至多两张手牌').ai = get.value;
                                ('step 2');
                                var cards = player.getCards('h');
                                if (result.cards[0]) cards.remove(result.cards[0]);
                                if (result.cards[1]) cards.remove(result.cards[1]);
                                player.discard(cards);
                                ('step 3');
                                player.draw(player.maxHp - player.getCards('h').length);
                            },
                        },
                        zmyingxiongzhizaok: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:5',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') <= player.hp && player.countCards('h', { color: 'red' });
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'h',
                                    selectTarget: [1, 3],
                                    filterCard(card, player) {
                                        return lib.filter.cardDiscardable(card, player) && get.color(card) == 'red';
                                    },
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target);
                                    },
                                    prompt: get.prompt('zmyingxiongzhizaok'),
                                    prompt2: '展示一张红色手牌,令至多三名角色分别展示堆顶的一张牌,若为红色则其获得此牌.',
                                    source: trigger.player,
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.showCards(result.cards);
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (result.bool && targets && targets.length) {
                                    for (var i = 0; i < targets.length; i++) {
                                        event.card = get.cards()[0];
                                        targets[i].showCards(event.card);
                                        //ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
                                        if (get.color(event.card) == 'red') {
                                            targets[i].draw();
                                        } else {
                                            game.cardsDiscard(get.cards()[0]);
                                        }
                                    }
                                }
                            },
                        },
                        zmxianzhederuizhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player.countUsed() == 1;
                            },
                            content() {
                                var type = get.type(trigger.card);
                                var card = get.cardPile2(function (card) {
                                    return get.type(card) == type;
                                });
                                if (card) {
                                    player.gain(card, 'gain2', 'log');
                                }
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        zmtianxieyishe: {
                            group: ['zmtleiren', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:1',
                            enable: 'phaseUse',
                            selectTarget: 1,
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 50;
                            },
                            filterTarget(card, player, target) {
                                return !target.hasSkill('zmtianxieyishe1') && target != player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                ('step 1');
                                target.addSkill('zmtianxieyishe1');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        return -get.damageEffect(target, player, player);
                                    },
                                },
                            },
                        },
                        zmtianxieyishe1: {
                            mark: true,
                            marktext: '射',
                            intro: {
                                content: '已累计伤害#/2点,将在下次回复体力时全部结算',
                            },
                            init(player) {
                                player.storage.zmtianxieyishe1 = 0;
                                player.markSkill('zmtianxieyishe1');
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            usable: 1,
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                player.storage.zmtianxieyishe1 += 1;
                            },
                            group: ['zmtianxieyishe1_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['recoverBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        var num = Math.ceil(player.storage.zmtianxieyishe1 / 2);
                                        if (num >= 1) {
                                            game.playzm1('zmtianxieyishe0');
                                            game.mp421('zmkarong');
                                        }
                                        player.removeSkill('zmtianxieyishe1');
                                        player.damage(num, 'nosource');
                                    },
                                },
                            },
                        },
                        zmwannengjiejueshi: {
                            nobracket: true,
                            group: ['zmwannengjiejueshi_1', 'zmwannengjiejueshi_2', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:4',
                                    trigger: {
                                        global: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (player.hasSkill('zmwannengjiejueshi_temp')) return false;
                                        return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                                    },
                                    content() {
                                        'step 0';
                                        event.player = player;
                                        trigger.player.chooseBool(get.prompt('zmwannengjiejueshi'), `是否令${get.translation(player)}获得${get.translation(trigger.cards)}？`).set('ai', function () {
                                            var trigger = _status.event.getTrigger();
                                            return get.attitude(trigger.player, event.player) > 0;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.gain(trigger.cards, 'gain2');
                                            player.addTempSkill('zmwannengjiejueshi_temp');
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hasSkill('zmwannengjiejueshi_temp')) return false;
                                        if (!event.card || event.card.name != 'sha' || !event.notLink()) return false;
                                        return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('zmwannengjiejueshi'), '可选择一名其他角色获得' + get.translation(trigger.cards), function (card, player, target) {
                                            return player != target;
                                        }).ai = function (target) {
                                            var att = get.attitude(player, target);
                                            return att;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].gain(trigger.cards, 'gain2');
                                            player.addTempSkill('zmwannengjiejueshi_temp');
                                        }
                                    },
                                },
                                temp: {
                                    charlotte: true,
                                },
                            },
                        },
                        zmyijianyisha: {
                            mod: {
                                globalFrom(player, from, to) {
                                    if (to.hp == 1) {
                                        return -Infinity;
                                    }
                                },
                            },
                            nobracket: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.storage.zmt_np >= 20 && !event.player.hasSkill('zmyijianyisha_1') && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                trigger.player.addSkill('zmyijianyisha_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('zmyijianyisha');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm1(['zmwangda1', 'zmwangda2'].randomGet());
                                        game.mp421('zmwangda');
                                        player.removeSkill('zmyijianyisha_1');
                                        trigger.directHit = true;
                                    },
                                },
                            },
                        },
                        zmshengtigouzhuang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:12',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                var list = [];
                                for (var i = 1; i <= 5; i++) {
                                    if (!player.getEquip(i)) {
                                        var name = get.inpile('equip' + i).randomGet();
                                        if (name) {
                                            var card = game.createCard(name);
                                            list.push(card);
                                            player.equip(card);
                                        }
                                        break;
                                    }
                                    if (list.length) {
                                        player.$draw(list);
                                    }
                                }
                            },
                            group: ['zmshengtigouzhuang_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:5',
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.countCards('e') < 1) return false;
                                        var cards1 = player.getEquip(1);
                                        var cards2 = player.getEquip(2);
                                        var cards3 = player.getEquip(3);
                                        var cards4 = player.getEquip(4);
                                        var cards5 = player.getEquip(5);
                                        return (player.getEquip(1) && event.card.suit == cards1.suit) || (player.getEquip(2) && event.card.suit == cards2.suit) || (player.getEquip(3) && event.card.suit == cards3.suit) || (player.getEquip(4) && event.card.suit == cards4.suit) || (player.getEquip(5) && event.card.suit == cards5.suit);
                                    },
                                    _priority: -1,
                                    content() {
                                        player.getStat().card.sha--;
                                    },
                                },
                            },
                        },
                        zmgouzhuangjiefang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                player: 'shaMiss',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return event.target.num('h') > 0 || (event.target.num('h') == 0 && player.num('e') > 0);
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) < 0 && player.num('h') > 1;
                            },
                            _priority: 5,
                            content() {
                                'step 0';
                                if (trigger.target.num('h') > 0 && player.num('h') > 0) {
                                    player.storage.zmt_np -= 30;
                                    player.chooseToCompare(trigger.target);
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np = 0;
                                    game.playzm1('zmlamuleisaer');
                                    game.mp421('zmlamuleisaer');
                                    trigger.target.damage(2);
                                    event.finish();
                                } else if (!result.bool && player.num('e') > 0) {
                                    game.playzm1('zmgzjfb');
                                    player.chooseToDiscard(Infinity, 'e', '弃置所有装备牌', true);
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseToDiscard('是否弃置一张装备区的牌对目标造成2点伤害？', 'e', 1).ai = function (card) {
                                    if (get.attitude(player, trigger.target) < 0) {
                                        return 9 - get.value(card);
                                    }
                                };
                                ('step 3');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    game.playzm1('zmlamuleisaer');
                                    game.mp421('zmlamuleisaer');
                                    trigger.target.damage(2);
                                }
                            },
                            group: ['zmgouzhuangjiefang_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:7',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    position: 'e',
                                    filter(event, player) {
                                        return player.countCards('e');
                                    },
                                    filterCard(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    selectCard: [1, Infinity],
                                    check(card) {
                                        switch (ui.selected.cards.length) {
                                            case 0:
                                                return 7 - get.value(card);
                                            case 1:
                                                return 6 - get.value(card);
                                            case 2:
                                                return 3 - get.value(card);
                                            default:
                                                return 0;
                                        }
                                    },
                                    content() {
                                        player.draw(cards.length);
                                    },
                                    ai: {
                                        order: 2.2,
                                        result: {
                                            player: 1.8,
                                        },
                                        threaten: 1.6,
                                    },
                                },
                            },
                        },
                        zmyanjianzhidun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:9',
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: 100,
                            forced: true,
                            filter(event, player) {
                                return event.target.countCards('he') && event.target != player;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton(trigger.target, trigger.target.getCards('he'))
                                    .set('filterButton', function (button) {
                                        return get.color(button.link) == 'red';
                                    })
                                    .set('ai', function (button) {
                                        return 10 - get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links[0], trigger.target, 'giveAuto');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                            group: ['zmyanjianzhidun_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:5',
                                    trigger: {
                                        target: 'shaBegin',
                                    },
                                    _priority: 100,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCardButton(trigger.player, trigger.player.getCards('he'))
                                            .set('filterButton', function (button) {
                                                return get.color(button.link) == 'red';
                                            })
                                            .set('ai', function (button) {
                                                return 10 - get.value(button.link);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.card = result.links[0];
                                            trigger.player.discard(event.card);
                                        }
                                    },
                                },
                            },
                        },
                        zmmijiduotianyan: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                if (event.player.hasSkillTag('nofire')) return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.card && get.color(event.card) == 'red';
                            },
                            _priority: 10,
                            content() {
                                if (player.storage.zmt_np < 50) {
                                    game.playzm1(['zmmigenatianyan1', 'zmmigenatianyan2', 'zmmigenatianyan3'].randomGet());
                                    if (player.getStat().card.sha == 1) {
                                        game.mp421('zmwagena2');
                                    }
                                    trigger.player.damage('fire');
                                } else {
                                    player.storage.zmt_np = 0;
                                    game.playzm1('zmwagena');
                                    game.mp421('zmwagena');
                                    trigger.player.damage(2, 'fire');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                            },
                        },
                        zmhudieren: {
                            group: ['zmhudieren_1', 'zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.num('h') > 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return player.num('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    event.num = result.num1 - result.num2;
                                    if (event.num == 1) {
                                        game.playzm1(['zmhdr11', 'zmhdr12'].randomGet());
                                        game.mp421('zmnaermeiya1');
                                        player.useCard({ name: 'sha' }, target, false);
                                    }
                                    if (event.num == 2) {
                                        game.playzm1(['zmhdr11', 'zmhdr12'].randomGet());
                                        game.mp421('zmnaermeiya1');
                                        player.useCard({ name: 'sha' }, target, false);
                                        player.useCard({ name: 'sha' }, target, false);
                                    }
                                    if (event.num >= 3) {
                                        game.playzm1(['zmhdr15', 'zmhdr16', 'zmhdr13', 'zmhdr14'].randomGet());
                                        game.mp421('zmnaermeiya2');
                                        player.useCard({ name: 'sha' }, target, false);
                                        player.useCard({ name: 'sha' }, target, false);
                                        player.useCard({ name: 'sha' }, target, false);
                                    }
                                } else target.draw();
                            },
                            ai: {
                                order(name, player) {
                                    return 9;
                                },
                                result: {
                                    player(player) {
                                        var cards = player.getCards('h');
                                        var num0 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number >= 7) {
                                                    num0++;
                                                }
                                            }
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        if (num5 == 0 || num0 == 0) return 0;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 || get.effect(target, { name: 'sha' }, player) <= 0) return 0;
                                        var num = target.num('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.3,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm1(['zmhdr1', 'zmhdr2', 'zmhdr3', 'zmhdr4', 'zmhdr5', 'zmhdr6'].randomGet());
                                        ('step 1');
                                        game.playzm1(['zmhdr_11', 'zmhdr_12'].randomGet());
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmwanliyikong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            enable: 'phaseUse',
                            prompt: '是否流失一点体力后摸两张牌并获得一点护甲？',
                            content() {
                                'step 0';
                                player.loseHp(1);
                                ('step 1');
                                player.draw(2);
                                player.changeHujia(1);
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp - 1 && player.maxHp > player.hp) return -1;
                                        if (player.hp < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmguijizhishen: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:7',
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            check(event, player) {
                                if (get.effect(event.player, event.card, event.player, event.player) <= 0) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                if (event.getParent(3).name == 'zmguijizhishen') return false;
                                if (event.getParent(2).name == 'zmguijizhishen') return false;
                                if (event.parent.name == 'zmguijizhishen') return false;
                                if (event.player == player) return false;
                                return event.targets && event.targets.length == 1 && event.target == event.player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 10;
                                event.cards = get.cards(3);
                                player.showCards(event.cards);
                                ('step 1');
                                var next = player.chooseCardButton(`可以其中一张牌替换${get.translation(trigger.player)}对自己使用的` + get.translation(trigger.card), event.cards, 1);
                                next.set('ai', function (button) {
                                    var num = get.effect(trigger.player, button.link, trigger.player, trigger.player) - 1;
                                    if (get.effect(trigger.player, button.link, trigger.player, trigger.player) > 0) return 0;
                                    if (button.link.name == 'shunshou') num = -1;
                                    return -num;
                                });
                                next.filterButton = function (button) {
                                    return true;
                                    // return trigger.player.canUse(button.link,trigger.player);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    //  player.storage.zmguijizhishen=result.links[0];
                                    player.addTempSkill('zmguijizhishen_1');
                                    trigger.parent.excluded.add(trigger.target);
                                    trigger.player.useCard(result.links[0], trigger.target);
                                } else event.finish();
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmguijizhishen';
                                    },
                                    content() {
                                        trigger.player.chooseToUse(`是否对${get.translation(player)}使用一张【杀】？`, { name: 'sha' }, -1, player);
                                    },
                                },
                            },
                        },
                        zmqizhahuanjing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.target = target;
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.gain([result.player, result.target]);
                                    player.$gain2([result.player, result.target]);
                                    if (target.countCards('h') > 0) {
                                        event.num++;
                                        player
                                            .chooseTarget(`令一名角色与${get.translation(event.target)}拼点？`, function (card, player, target) {
                                                return target != event.target && target.countCards('h') > 0;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(player, target);
                                            });
                                    }
                                }
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length && event.num == 1) {
                                    result.targets[0].chooseToCompare(event.target);
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var cards = player.getCards('h');
                                        var num = target.countCards('h');
                                        if (num > cards.length + 3 && player.hp > 1) return -2;
                                        if (num > cards.length + 1 && player.hp > 1) return -1;
                                        if (num == cards.length - 1 && player.hp > 1 && !get.is.altered('pozhen')) return -1;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number > 8) return num == 1 ? -1 : -0.5;
                                            }
                                        return 0;
                                    },
                                },
                                order: 10,
                            },
                        },
                        zmfushoushuangquan: {
                            group: ['zmtrenxing', 'zmtzaowu'],
                            nobracket: true,
                            trigger: {
                                global: ['damageAfter'],
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0 && event.player.countCards('h') >= 3 && player.countCards('h', { color: 'red' }) == 0) return true;
                                if (player.countCards('h', { name: 'tao' }) == 0 && get.attitude(player, event.player) > 0 && event.player == player && player.hp == 1 && player.countCards('h', { color: 'red' }) >= 1) return true;
                                if (event.player.countCards('h') <= 4 && player.countCards('h', { name: 'tao' }) == 0 && get.attitude(player, event.player) > 0 && event.player != player && player.countCards('h', { color: 'red' }) >= 1 && event.player.isDamaged() && player.isDamaged() && event.player.countCards('h') >= 1 && event.player.hp >= 2) return true;
                                if (player.countCards('h', { name: 'tao' }) == 0 && get.attitude(player, event.player) > 0 && event.player.hp == 1 && player.countCards('h', { color: 'red' }) >= 1 && event.player.isDamaged()) return true;
                                if (player.countCards('h', { name: 'tao' }) == 0 && get.attitude(player, event.player) > 0 && player.countCards('h', { color: 'red' }) >= 1 && player.storage.zmt_np >= 50) return true;
                                return false;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                if (get.attitude(player, trigger.player) <= 0) {
                                    game.playzm1(['zmfushoushuangquan21', 'zmfushoushuangquan21'].randomGet());
                                } else {
                                    game.playzm1(['zmfushoushuangquan1', 'zmfushoushuangquan2', 'zmfushoushuangquan1', 'zmfushoushuangquan4', 'zmfushoushuangquan3'].randomGet());
                                }
                                var cards = player.getCards('h', { color: 'red' });
                                var cards1 = trigger.player.getCards('h', { color: 'red' });
                                ('step 1');
                                var cards = player.getCards('h', { color: 'red' });
                                if (cards.length) {
                                    player.useCard({ name: 'tao' }, cards, trigger.player);
                                }
                                var cards1 = trigger.player.getCards('h', { color: 'red' });
                                if (cards1.length && trigger.player != player) {
                                    trigger.player.useCard({ name: 'tao' }, cards1, player);
                                }
                            },
                        },
                        zmchuntaoshisheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:5',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                var cards = [];
                                var num0 = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == event.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (get.color(i) == 'red') {
                                                num0++;
                                            }
                                        }
                                }
                                return num0 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var cards = [];
                                var cards1 = [];
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == trigger.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (get.color(i) == 'red') {
                                                cards1.push(i);
                                            }
                                        }
                                }
                                event.cards = cards1;
                                ('step 1');
                                if (event.cards.length) {
                                    player
                                        .chooseCardButton(event.cards, 1, get.prompt2(event.name))
                                        .set('filterButton', function (button) {
                                            return get.position(button.link) == 'd';
                                        })
                                        .set('ai', function (button) {
                                            if (get.attitude(player, trigger.player.next) <= 0) {
                                                return get.value(button.link) < 0;
                                            } else {
                                                return get.value(button.link) >= 5;
                                            }
                                            return 0;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(trigger.player, 'green');
                                    ui.cardPile.insertBefore(result.links[0], ui.cardPile.firstChild);
                                }
                            },
                            ai: {
                                threaten: 1.3,
                                expose: 0.2,
                            },
                        },
                        zmguangyingpengpai: {
                            mark: true,
                            marktext: '奏',
                            init(player) {
                                player.storage.zmguangyingpengpai = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                var list = ['heart', 'diamond', 'club', 'spade'];
                                if (player.storage.zmguangyingpengpai.length >= 1) {
                                    for (var i = 0; i < player.storage.zmguangyingpengpai.length; i++) {
                                        if (player.storage.zmguangyingpengpai[i].suit == 'heart') {
                                            list.remove('heart');
                                        }
                                        if (player.storage.zmguangyingpengpai[i].suit == 'diamond') {
                                            list.remove('diamond');
                                        }
                                        if (player.storage.zmguangyingpengpai[i].suit == 'club') {
                                            list.remove('club');
                                        }
                                        if (player.storage.zmguangyingpengpai[i].suit == 'spade') {
                                            list.remove('spade');
                                        }
                                    }
                                }
                                event.suit = list.randomGet();
                                game.log(player, '声明了' + get.translation(event.suit));
                                player.chooseCard(`是否展示并记录一张${get.translation(event.suit)}牌？若如此做则你可令一名角色摸一张牌`, 'he', 1, function (card) {
                                    return card.suit == event.suit;
                                }).ai = function (card) {
                                    var num = 18 - get.value(card);
                                    if (get.tag(card, 'damage') || get.tag(card, 'loseCard')) num += 100;
                                    return num;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.num += 1;
                                    if (player.storage.zmguangyingpengpai.length == 3) {
                                        game.mp421('zmcheerni');
                                    }
                                    player.showCards(result.cards[0], '光影澎湃');
                                    player.storage.zmguangyingpengpai.push(result.cards[0]);
                                    player.markSkill('zmguangyingpengpai');
                                    player
                                        .chooseTarget('是否令一名角色摸一张牌？', function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            if (target == player) att += 2;
                                            if (target.hp == 1 || target.countCards('h') <= 2) att *= 3;
                                            return att;
                                        });
                                } else {
                                    game.playzm1(['zmguangyingpengpai21', 'zmguangyingpengpai22', 'zmguangyingpengpai23', 'zmguangyingpengpai24'].randomGet());
                                    player.storage.zmguangyingpengpai = [];
                                    player.markSkill('zmguangyingpengpai');
                                }
                                ('step 2');
                                if (player.storage.zmguangyingpengpai.length >= 4) {
                                    player.storage.zmguangyingpengpai = [];
                                    player.markSkill('zmguangyingpengpai');
                                    event.num += 1;
                                }
                                if (event.num >= 1) {
                                    if (result.bool) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].draw();
                                    }
                                }
                                ('step 3');
                                if (event.num == 2) {
                                    player
                                        .chooseTarget('是否令一名受伤角色回复一点体力？', function (card, player, target) {
                                            return target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            var att = get.recoverEffect(target, player, player);
                                            if (target == player) att += 1;
                                            if (target.hp <= 2) att *= 2;
                                            return att;
                                        });
                                } else event.finish();
                                ('step 4');
                                if (event.num == 2) {
                                    if (result.bool) {
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].recover();
                                    }
                                }
                            },
                        },
                        zmhongming: {
                            group: ['zmtleiren'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            check(event, player) {
                                if (get.effect(player, event.card, player, player) > 0) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return event.player != player && player.storage.zmguangyingpengpai.length >= 1;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                trigger.parent.excluded.add(player);
                                trigger.player.line(trigger.player);
                                ('step 1');
                                player.chooseButton([`可视为对${get.translation(trigger.player)}使用其中一张牌的同名牌`, player.storage.zmguangyingpengpai]).set('ai', function (button) {
                                    var num = get.effect(trigger.player, { name: button.link.name }, player, player);
                                    return num && num > 0;
                                });
                                ('step 2');
                                if (result.bool) {
                                    var name = result.links[0].name;
                                    player.useCard({ name: name }, trigger.player, false);
                                } else event.finish();
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        zmsharenyishi: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard: true,
                            position: 'he',
                            check(card, player) {
                                var player = _status.currentPhase;
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isDamaged() && current.hp <= 2;
                                });
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isDamaged();
                                });
                                var cards = player.getCards('he');
                                var num0 = 0;
                                var num1 = 0;
                                var num2 = 0;
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.number >= 7 && i.name != 'tao') {
                                            num2++;
                                        }
                                    }
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.number <= 4 && get.value(i) < 9) {
                                            num0++;
                                        }
                                    }
                                if (num2 > 0 && num5 > 0) {
                                    if (card.number < 7) return 0;
                                    if (card.name == 'tao') return 0;
                                    return card.number;
                                } else {
                                    if (num0 > 0) {
                                        if (card.number > 4) return 0;
                                        return 5 - card.number;
                                    }
                                }
                                return 0;
                            },
                            content() {
                                'step 0';
                                if (target == player) {
                                    game.playzm1(['zmsharenyishi01', 'zmsharenyishi02', 'zmsharenyishi03', 'zmsharenyishi04', 'zmsharenyishi05', 'zmsharenyishi06'].randomGet());
                                } else {
                                    if (get.attitude(player, target) <= 0) {
                                        game.playzm1(['zmsharenyishi21', 'zmsharenyishi22', 'zmsharenyishi23', 'zmsharenyishi24', 'zmsharenyishi25', 'zmsharenyishi26', 'zmsharenyishi27'].randomGet());
                                    } else {
                                        game.playzm1(['zmsharenyishi11', 'zmsharenyishi12', 'zmsharenyishi13', 'zmsharenyishi14', 'zmsharenyishi15', 'zmsharenyishi16', 'zmsharenyishi17'].randomGet());
                                    }
                                }
                                event.num1 = 0;
                                event.num = cards[0].number;
                                player.showCards(cards[0]);
                                ('step 1');
                                if (target != player) {
                                    var num0 = event.num * 10;
                                    var next = target.chooseCard('he', [1, Infinity], `是否交给${get.translation(player)}任意张牌提升手术成功概率？当前成功率为${num0}%,每交一张提高10%`, function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        /* var player=_status.currentPhase;
                           if(target!=player&&event.num>=9) return 0;
                          if(target==player&&event.num<10) return 99-get.value(card);*/
                                        if (event.num <= 2) return 2 - get.value(card);
                                        if (card.name == 'du') return 10;
                                        return 4 - get.value(card);
                                    };
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    event.num1 = result.cards.length;
                                    player.gain(result.cards, 'gain2');
                                }
                                ('step 3');
                                if (Math.random() <= (event.num + event.num1) / 10) {
                                    target.recover();
                                } else {
                                    target.loseHp();
                                }
                            },
                            ai: {
                                order: 9.2,
                                result: {
                                    player(player) {
                                        var cards = player.getCards('he');
                                        var num0 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number <= 4 && get.value(i) < 9) {
                                                    num0++;
                                                }
                                            }
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged() && current.hp <= 2;
                                        });
                                        if (num5 == 0 && num0 == 0) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        /*         var num5=game.countPlayer(function(current){
                         return get.attitude(player,current)>0&&current.isDamaged()&&current.hp<=2;
                         });  
                                               var num4=game.countPlayer(function(current){
                         return get.attitude(player,current)>0&&current.isDamaged();
                         });  
                                          var cards=player.getCards('he');
                                var num0=0;
                                                 var num1=0;
                                                 var num2=0;
                                                  for(var i=0;i<cards.length;i++){
                                     if(i.number>=7&&i.name!='tao'){
                                      num2++;
                                     }
                                 }     
                                 for(var i=0;i<cards.length;i++){
                                     if(i.number<=4&&get.value(i)<=10){
                                      num0++;
                                     }
                                 }         
                                  if(num2>0&&num5>0){
                                      return get.recoverEffect(target,player,player)+1;
                                  }else{               
                                    if(num0>0){             
                                   return get.damageEffect(target,player,target);}else{
                                       if(num4>0){
                                      if(get.attitude(player,target)>0&&target.isDamaged()){
                                          if(target.hp<=3&&target!=player){num1=4-target.hp;};
                                           if(target.hp<=3&&target==player){num1=6-target.hp;};
                                          return get.recoverEffect(target,player,player)+1;
                                      }; };
                                       return num1;
                                   };};*/
                                        if (ui.selected.cards.length && ui.selected.cards[0].number >= 7) {
                                            return get.recoverEffect(target, player, target);
                                        }
                                        if (ui.selected.cards.length && ui.selected.cards[0].number <= 4) {
                                            return get.damageEffect(target, player, target);
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmfangxueliaofa: {
                            group: ['zmtrenxing', 'zmtleiren', 'zmfangxueliaofa_1'],
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return player.storage.zmt_np >= 40 && event.player.maxHp > 0 && event.player.isAlive();
                            },
                            check(event, player) {
                                if (event.reason && event.reason.parent.name == 'zmfangxueliaofa') return false;
                                return (get.attitude(player, event.player) > 0 && event.player.hp - 1 == 0) || (get.attitude(player, event.player) < 0 && event.player.hp <= 0 && player.hp > 1);
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                if (trigger.player == player) {
                                    game.playzm1(['zmfangxueliaofa12', 'zmfangxueliaofa11'].randomGet());
                                } else {
                                    if (get.attitude(player, trigger.player) <= 0) {
                                        game.playzm1('zmfangxueliaofa24');
                                    } else {
                                        game.playzm1(['zmfangxueliaofa21', 'zmfangxueliaofa22', 'zmfangxueliaofa23', 'zmfangxueliaofa24'].randomGet());
                                    }
                                }
                                game.mp421('zmbailang');
                                ('step 1');
                                player.line(trigger.player, 'green');
                                trigger.player.damage(1);
                                ('step 2');
                                trigger.player.recover(1);
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.reason && event.reason.parent.name == 'zmfangxueliaofa';
                                    },
                                    content() {
                                        trigger.player.recover(2 - trigger.player.hp);
                                    },
                                },
                            },
                        },
                        zmjiyuxiwang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                global: 'drawAfter',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (num8 + num7 + num6 < 2 && player.storage.zmt_np > 30) {
                                } else {
                                    if (event.player.hp > 1 && event.result.length == 1) return false;
                                    if (event.player == player) {
                                        var num = 0;
                                        var num1 = 0;
                                        for (var i = 0; i < event.result.length; i++) {
                                            num += get.value(event.result[i]);
                                        }
                                        var num1 = num / event.result.length;
                                        for (var i = 0; i < event.result.length; i++) {
                                            if ((get.value(event.result[i]) >= 8 + num1 && num1 >= 5 + num1) || (get.tag(event.result[i], 'recover') >= 1 && num >= 5 + num1) || num >= 7 + num1) return false;
                                        }
                                    } else {
                                        if (event.player.countCards('h') + 1 <= event.result.length) return false;
                                    }
                                }
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                if (event.getParent(1).name == 'zmyuanhuanzhili') return false;
                                if (event.getParent(1).name == 'zmjiyuchengjie') return false;
                                if (event.getParent(1).name == 'zmjiyuchengjie_1') return false;
                                if (event.getParent(1).name == 'zmjiyuxiwang') return false;
                                if (event.getParent(1).name == 'zmjiyuxiwang_1') return false;
                                if (event.getParent(1).name == 'zmjiyujiuji') return false;
                                if (event.getParent(1).name == 'zmjiyujiuji_1') return false;
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                if (num4 > 0) return false;
                                return event.result.length >= 1;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, { color: [255, 221, 238] });
                                trigger.player.storage.zmjiyuxiwang = 0;
                                event.num = trigger.result.length * 2;
                                var cards = trigger.result;
                                trigger.player.discard(cards);
                                ('step 1');
                                trigger.player.addSkill('zmjiyuxiwang_1');
                                trigger.player.storage.zmjiyuxiwang_1 = 2;
                                trigger.player.storage.zmjiyuxiwang = event.num;
                                ('step 2');
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (player.hasSkill('zmyuanhuanzhili') && player.storage.zmt_np > 30 && num6 > 0 && num7 > 0 && num8 > 0) {
                                    event.players = get.players(player);
                                    event.players = event.players.filter((i) => {
                                        if (!i.hasSkill('zmjiyujiuji_1') && !i.hasSkill('zmjiyuchengjie_1') && !i.hasSkill('zmjiyuxiwang_1')) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    event.num0 = 0;
                                    player.chooseBool('是否立即结算三种【寄予】效果？').set('ai', function () {
                                        return true;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.num0 = 1;
                                    player.storage.zmt_np = 0;
                                    if (!player.hasSkill('zmyuanhuanzhili_1')) {
                                        game.playzm1('zmlumuyuan1');
                                        game.mp421('zmlumuyuan1');
                                        player.addSkill('zmyuanhuanzhili_1');
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/鹿目圆二阶段.jpg');
                                    }
                                } else event.finish();
                                ('step 4');
                                if (event.num0 == 1) {
                                    if (player.hasSkill('zmjiyuxiwang_1')) {
                                        var num = player.storage.zmjiyuxiwang;
                                        player.draw(num);
                                        player.storage.zmjiyuxiwang_1 = 0;
                                        player.storage.zmjiyuxiwang = 0;
                                        player.removeSkill('zmjiyuxiwang_1');
                                    }
                                    if (player.hasSkill('zmjiyuchengjie_1')) {
                                        var num = player.storage.zmjiyuchengjie;
                                        player.damage(num, 'nosource');
                                        player.storage.zmjiyuchengjie_1 = 0;
                                        player.storage.zmjiyuchengjie = 0;
                                        player.removeSkill('zmjiyuchengjie_1');
                                    }
                                    if (player.hasSkill('zmjiyujiuji_1')) {
                                        var num = player.storage.zmjiyujiuji;
                                        player.recover(num);
                                        player.storage.zmjiyujiuji_1 = 0;
                                        player.storage.zmjiyujiuji = 0;
                                        player.removeSkill('zmjiyujiuji_1');
                                    }
                                    event.current = player.next;
                                } else event.finish();
                                ('step 5');
                                if (event.current.hasSkill('zmjiyuxiwang_1')) {
                                    var num = event.current.storage.zmjiyuxiwang;
                                    event.current.draw(num);
                                    event.current.storage.zmjiyuxiwang_1 = 0;
                                    event.current.storage.zmjiyuxiwang = 0;
                                    event.current.removeSkill('zmjiyuxiwang_1');
                                }
                                if (event.current.hasSkill('zmjiyuchengjie_1')) {
                                    var num = event.current.storage.zmjiyuchengjie;
                                    event.current.damage(num, 'nosource');
                                    event.current.storage.zmjiyuchengjie_1 = 0;
                                    event.current.storage.zmjiyuchengjie = 0;
                                    event.current.removeSkill('zmjiyuchengjie_1');
                                }
                                if (event.current.hasSkill('zmjiyujiuji_1')) {
                                    var num = event.current.storage.zmjiyujiuji;
                                    event.current.recover(num);
                                    event.current.storage.zmjiyujiuji_1 = 0;
                                    event.current.storage.zmjiyujiuji = 0;
                                    event.current.removeSkill('zmjiyujiuji_1');
                                }
                                ('step 6');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(5);
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '希',
                                    intro: {
                                        content(storage, player) {
                                            var num = player.storage.zmjiyuxiwang;
                                            return `当${storage}轮后你摸${num}张牌`;
                                        },
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjiyuxiwang_1 -= 1;
                                        ('step 1');
                                        if (player.storage.zmjiyuxiwang_1 <= 0) {
                                            var num = player.storage.zmjiyuxiwang;
                                            player.draw(num);
                                            player.storage.zmjiyuxiwang_1 = 0;
                                            player.storage.zmjiyuxiwang = 0;
                                            player.removeSkill('zmjiyuxiwang_1');
                                        }
                                    },
                                },
                            },
                        },
                        zmjiyuchengjie: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                global: 'damageBegin',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (num8 + num7 + num6 < 2 && player.storage.zmt_np >= 30) {
                                } else {
                                    if (event.player.hp <= event.num) return false;
                                    if (event.player.isLinked() && event.nature) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.isLinked();
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isLinked();
                                        });
                                        if (num4 <= num5 && num4 > 1) return false;
                                    }
                                    if (event.player.get('e', '2') && event.player.get('e', '2').name == 'tengjia') return false;
                                }
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmyuanhuanzhili') return false;
                                if (event.parent.name == 'zmjiyuchengjie') return false;
                                if (event.parent.name == 'zmjiyuchengjie_1') return false;
                                if (event.parent.name == 'zmjiyuxiwang') return false;
                                if (event.parent.name == 'zmjiyuxiwang_1') return false;
                                if (event.parent.name == 'zmjiyujiuji') return false;
                                if (event.parent.name == 'zmjiyujiuji_1') return false;
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                if (num4 > 0) return false;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, { color: [255, 221, 238] });
                                trigger.player.storage.zmjiyuchengjie = 0;
                                event.num = trigger.num * 2;
                                trigger.cancel();
                                ('step 1');
                                trigger.player.addSkill('zmjiyuchengjie_1');
                                trigger.player.storage.zmjiyuchengjie_1 = 2;
                                trigger.player.storage.zmjiyuchengjie = event.num;
                                ('step 2');
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (player.hasSkill('zmyuanhuanzhili') && player.storage.zmt_np > 30 && num6 > 0 && num7 > 0 && num8 > 0) {
                                    event.players = get.players(player);
                                    event.players = event.players.filter((i) => {
                                        if (!i.hasSkill('zmjiyujiuji_1') && !i.hasSkill('zmjiyuchengjie_1') && !i.hasSkill('zmjiyuxiwang_1')) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    event.num0 = 0;
                                    player.chooseBool('是否立即结算三种【寄予】效果？').set('ai', function () {
                                        return true;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.num0 = 1;
                                    player.storage.zmt_np = 0;
                                    if (!player.hasSkill('zmyuanhuanzhili_1')) {
                                        game.playzm1('zmlumuyuan1');
                                        game.mp421('zmlumuyuan1');
                                        player.addSkill('zmyuanhuanzhili_1');
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/鹿目圆二阶段.jpg');
                                    }
                                } else event.finish();
                                ('step 4');
                                if (event.num0 == 1) {
                                    if (player.hasSkill('zmjiyuxiwang_1')) {
                                        var num = player.storage.zmjiyuxiwang;
                                        player.draw(num);
                                        player.storage.zmjiyuxiwang_1 = 0;
                                        player.storage.zmjiyuxiwang = 0;
                                        player.removeSkill('zmjiyuxiwang_1');
                                    }
                                    if (player.hasSkill('zmjiyuchengjie_1')) {
                                        var num = player.storage.zmjiyuchengjie;
                                        player.damage(num, 'nosource');
                                        player.storage.zmjiyuchengjie_1 = 0;
                                        player.storage.zmjiyuchengjie = 0;
                                        player.removeSkill('zmjiyuchengjie_1');
                                    }
                                    if (player.hasSkill('zmjiyujiuji_1')) {
                                        var num = player.storage.zmjiyujiuji;
                                        player.recover(num);
                                        player.storage.zmjiyujiuji_1 = 0;
                                        player.storage.zmjiyujiuji = 0;
                                        player.removeSkill('zmjiyujiuji_1');
                                    }
                                    event.current = player.next;
                                } else event.finish();
                                ('step 5');
                                if (event.current.hasSkill('zmjiyuxiwang_1')) {
                                    var num = event.current.storage.zmjiyuxiwang;
                                    event.current.draw(num);
                                    event.current.storage.zmjiyuxiwang_1 = 0;
                                    event.current.storage.zmjiyuxiwang = 0;
                                    event.current.removeSkill('zmjiyuxiwang_1');
                                }
                                if (event.current.hasSkill('zmjiyuchengjie_1')) {
                                    var num = event.current.storage.zmjiyuchengjie;
                                    event.current.damage(num, 'nosource');
                                    event.current.storage.zmjiyuchengjie_1 = 0;
                                    event.current.storage.zmjiyuchengjie = 0;
                                    event.current.removeSkill('zmjiyuchengjie_1');
                                }
                                if (event.current.hasSkill('zmjiyujiuji_1')) {
                                    var num = event.current.storage.zmjiyujiuji;
                                    event.current.recover(num);
                                    event.current.storage.zmjiyujiuji_1 = 0;
                                    event.current.storage.zmjiyujiuji = 0;
                                    event.current.removeSkill('zmjiyujiuji_1');
                                }
                                ('step 6');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(5);
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '惩',
                                    intro: {
                                        content(storage, player) {
                                            var num = player.storage.zmjiyuchengjie;
                                            return `当${storage}轮后你受到${num}点伤害`;
                                        },
                                    },
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjiyuchengjie_1 -= 1;
                                        ('step 1');
                                        if (player.storage.zmjiyuchengjie_1 <= 0) {
                                            var num = player.storage.zmjiyuchengjie;
                                            player.damage(num, 'nosource');
                                            player.storage.zmjiyuchengjie_1 = 0;
                                            player.storage.zmjiyuchengjie = 0;
                                            player.removeSkill('zmjiyuchengjie_1');
                                        }
                                    },
                                },
                            },
                        },
                        zmyuanhuanzhili: {
                            group: ['zmtrenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                global: 'dieBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('zmyuanhuanzhili_1') && (event.player == player || player.getFriends().includes(event.player));
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, { color: [255, 221, 238] });
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (get.color(result.card) == 'red') {
                                    game.playzm1('0通用奥义');
                                    game.mp421('zmlumuyuan2');
                                    trigger.untrigger();
                                    trigger.finish();
                                    trigger.player.recover(1 - trigger.player.hp);
                                } else event.finish();
                                ('step 2');
                                event.num0 = 1;
                                ('step 3');
                                ('step 4');
                                if (event.num0 == 1) {
                                    if (player.hasSkill('zmjiyuxiwang_1')) {
                                        var num = player.storage.zmjiyuxiwang;
                                        player.draw(num);
                                        player.storage.zmjiyuxiwang_1 = 0;
                                        player.storage.zmjiyuxiwang = 0;
                                        player.removeSkill('zmjiyuxiwang_1');
                                    }
                                    if (player.hasSkill('zmjiyuchengjie_1')) {
                                        var num = player.storage.zmjiyuchengjie;
                                        player.damage(num, 'nosource');
                                        player.storage.zmjiyuchengjie_1 = 0;
                                        player.storage.zmjiyuchengjie = 0;
                                        player.removeSkill('zmjiyuchengjie_1');
                                    }
                                    if (player.hasSkill('zmjiyujiuji_1')) {
                                        var num = player.storage.zmjiyujiuji;
                                        player.recover(num);
                                        player.storage.zmjiyujiuji_1 = 0;
                                        player.storage.zmjiyujiuji = 0;
                                        player.removeSkill('zmjiyujiuji_1');
                                    }
                                    event.current = player.next;
                                } else event.finish();
                                ('step 5');
                                if (event.current.hasSkill('zmjiyuxiwang_1')) {
                                    var num = event.current.storage.zmjiyuxiwang;
                                    event.current.draw(num);
                                    event.current.storage.zmjiyuxiwang_1 = 0;
                                    event.current.storage.zmjiyuxiwang = 0;
                                    event.current.removeSkill('zmjiyuxiwang_1');
                                }
                                if (event.current.hasSkill('zmjiyuchengjie_1')) {
                                    var num = event.current.storage.zmjiyuchengjie;
                                    event.current.damage(num, 'nosource');
                                    event.current.storage.zmjiyuchengjie_1 = 0;
                                    event.current.storage.zmjiyuchengjie = 0;
                                    event.current.removeSkill('zmjiyuchengjie_1');
                                }
                                if (event.current.hasSkill('zmjiyujiuji_1')) {
                                    var num = event.current.storage.zmjiyujiuji;
                                    event.current.recover(num);
                                    event.current.storage.zmjiyujiuji_1 = 0;
                                    event.current.storage.zmjiyujiuji = 0;
                                    event.current.removeSkill('zmjiyujiuji_1');
                                }
                                ('step 6');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(5);
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmjiyujiuji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                global: 'recoverBegin',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (num8 + num7 + num6 < 2 && player.storage.zmt_np >= 30) {
                                    if (event.player.hp <= 0) return false;
                                    return get.attitude(player, event.player) > 0;
                                } else {
                                    if (event.player.hp <= 0) return false;
                                    if (!player.hasSkill('zmyuanhuanzhili_1') && event.player.hp == 1) return false;
                                }
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                if (event.parent.name == 'zmyuanhuanzhili') return false;
                                if (event.parent.name == 'zmjiyuchengjie') return false;
                                if (event.parent.name == 'zmjiyuchengjie_1') return false;
                                if (event.parent.name == 'zmjiyuxiwang') return false;
                                if (event.parent.name == 'zmjiyuxiwang_1') return false;
                                if (event.parent.name == 'zmjiyujiuji') return false;
                                if (event.parent.name == 'zmjiyujiuji_1') return false;
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (num4 > 0) return false;
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, { color: [255, 221, 238] });
                                trigger.player.storage.zmjiyujiuji = 0;
                                event.num = trigger.num * 2;
                                trigger.cancel();
                                ('step 1');
                                trigger.player.addSkill('zmjiyujiuji_1');
                                trigger.player.storage.zmjiyujiuji_1 = 2;
                                trigger.player.storage.zmjiyujiuji = event.num;
                                ('step 2');
                                var num8 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuxiwang_1');
                                });
                                var num7 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyuchengjie_1');
                                });
                                var num6 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmjiyujiuji_1');
                                });
                                if (player.hasSkill('zmyuanhuanzhili') && player.storage.zmt_np > 30 && num6 > 0 && num7 > 0 && num8 > 0) {
                                    event.players = get.players(player);
                                    event.players = event.players.filter((i) => {
                                        if (!i.hasSkill('zmjiyujiuji_1') && !i.hasSkill('zmjiyuchengjie_1') && !i.hasSkill('zmjiyuxiwang_1')) {
                                            return false;
                                        }
                                        return true;
                                    });
                                    event.num0 = 0;
                                    player.chooseBool('是否立即结算三种【寄予】效果？').set('ai', function () {
                                        return true;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    event.num0 = 1;
                                    player.storage.zmt_np = 0;
                                    if (!player.hasSkill('zmyuanhuanzhili_1')) {
                                        game.playzm1('zmlumuyuan1');
                                        game.mp421('zmlumuyuan1');
                                        player.addSkill('zmyuanhuanzhili_1');
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊壹/image/鹿目圆二阶段.jpg');
                                    }
                                } else event.finish();
                                ('step 4');
                                if (event.num0 == 1) {
                                    if (player.hasSkill('zmjiyuxiwang_1')) {
                                        var num = player.storage.zmjiyuxiwang;
                                        player.draw(num);
                                        player.storage.zmjiyuxiwang_1 = 0;
                                        player.storage.zmjiyuxiwang = 0;
                                        player.removeSkill('zmjiyuxiwang_1');
                                    }
                                    if (player.hasSkill('zmjiyuchengjie_1')) {
                                        var num = player.storage.zmjiyuchengjie;
                                        player.damage(num, 'nosource');
                                        player.storage.zmjiyuchengjie_1 = 0;
                                        player.storage.zmjiyuchengjie = 0;
                                        player.removeSkill('zmjiyuchengjie_1');
                                    }
                                    if (player.hasSkill('zmjiyujiuji_1')) {
                                        var num = player.storage.zmjiyujiuji;
                                        player.recover(num);
                                        player.storage.zmjiyujiuji_1 = 0;
                                        player.storage.zmjiyujiuji = 0;
                                        player.removeSkill('zmjiyujiuji_1');
                                    }
                                    event.current = player.next;
                                } else event.finish();
                                ('step 5');
                                if (event.current.hasSkill('zmjiyuxiwang_1')) {
                                    var num = event.current.storage.zmjiyuxiwang;
                                    event.current.draw(num);
                                    event.current.storage.zmjiyuxiwang_1 = 0;
                                    event.current.storage.zmjiyuxiwang = 0;
                                    event.current.removeSkill('zmjiyuxiwang_1');
                                }
                                if (event.current.hasSkill('zmjiyuchengjie_1')) {
                                    var num = event.current.storage.zmjiyuchengjie;
                                    event.current.damage(num, 'nosource');
                                    event.current.storage.zmjiyuchengjie_1 = 0;
                                    event.current.storage.zmjiyuchengjie = 0;
                                    event.current.removeSkill('zmjiyuchengjie_1');
                                }
                                if (event.current.hasSkill('zmjiyujiuji_1')) {
                                    var num = event.current.storage.zmjiyujiuji;
                                    event.current.recover(num);
                                    event.current.storage.zmjiyujiuji_1 = 0;
                                    event.current.storage.zmjiyujiuji = 0;
                                    event.current.removeSkill('zmjiyujiuji_1');
                                }
                                ('step 6');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(5);
                                }
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '救',
                                    intro: {
                                        content(storage, player) {
                                            var num = player.storage.zmjiyujiuji;
                                            return `当${storage}轮后你回复${num}点体力`;
                                        },
                                    },
                                    audio: 'ext:综漫季刊壹/audio:2',
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjiyujiuji_1 -= 1;
                                        ('step 1');
                                        if (player.storage.zmjiyujiuji_1 <= 0) {
                                            var num = player.storage.zmjiyujiuji;
                                            player.recover(num);
                                            player.storage.zmjiyujiuji_1 = 0;
                                            player.storage.zmjiyujiuji = 0;
                                            player.removeSkill('zmjiyujiuji_1');
                                        }
                                    },
                                },
                            },
                        },
                        zmleyuquanneng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:12',
                            enable: 'phaseUse',
                            discard: false,
                            filter(event, player) {
                                return player.countCards('hej') > 0 && player.storage.zmt_np >= 20;
                            },
                            prepare: 'throw',
                            position: 'hej',
                            filterCard: true,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (target.hasJudge('lebu')) return true;
                                return lib.filter.targetEnabled({ name: 'lebu' }, player, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                player.storage.zmt_np -= 20;
                                var card = game.createCard('lebu');
                                target.addJudge(card);
                                target.$draw(card);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return -get.effect(target, { name: 'lebu' }, player, target);
                                        return get.effect(target, { name: 'lebu' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                            group: ['zmleyuquanneng_1'],
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return event.targets && event.targets.length && event.card && get.type(event.card) == 'delay';
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        event.card = ui.create.card();
                                        event.card.init([trigger.card.suit, trigger.card.number, trigger.card.name]);
                                        trigger.targets[0].popup(event.card.viewAs || event.card.name, 'thunder');
                                        ('step 2');
                                        if (!trigger.cancelled) trigger.targets[0].judge(event.card);
                                        ('step 3');
                                        event.card.expired = true;
                                        var name = event.card.viewAs || event.card.name;
                                        if (trigger.cancelled && !trigger.direct) {
                                            if (lib.card[name].cancel) {
                                                var next = game.createEvent(name + 'Cancelled');
                                                next.setContent(lib.card[name].cancel);
                                                next.card = event.card;
                                                next.player = trigger.targets[0];
                                            }
                                        } else {
                                            var next = game.createEvent(name);
                                            next.setContent(lib.card[name].effect);
                                            next._result = result;
                                            next.card = event.card;
                                            next.player = trigger.targets[0];
                                        }
                                        ui.clear();
                                        ('step 4');
                                        if (event.card) event.card.delete();
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.type(card) == 'delay') return 0.5;
                                            },
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        zmwanyuyingti: {
                            trigger: {
                                global: ['judgeEnd'],
                            },
                            nobracket: true,
                            filter(event, player) {
                                if (event.name == 'judge') {
                                    return event.result && event.result.bool != false && event.player != player;
                                }
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            content() {
                                var target = trigger.player;
                                if (trigger.player != player) {
                                    player.useCard({ name: 'lebu' }, target, false);
                                }
                            },
                            group: ['zmwanyuyingti_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:7',
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.source) <= 0;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        var card = game.createCard('lebu');
                                        trigger.source.addJudge(card);
                                        trigger.source.$draw(card);
                                    },
                                    ai: {
                                        threaten: 4,
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + Infinity;
                                },
                            },
                        },
                        zmaideshijie: {
                            group: ['zmtgaodengliliang', 'zmtgaodengshengming', 'zmtrenxing', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                target: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target && event.target == player && player.countCards('he', { suit: 'heart' }) > 1;
                            },
                            content() {
                                'step 0';
                                trigger.untrigger();
                                trigger.finish();
                                ui.backgroundMusic.src = 'extension/综漫季刊壹/audio/背景音乐迦摩.mp3';
                                game.mp421('zmjiamo1');
                                ui.background.setBackgroundImage('extension/综漫季刊壹/image/壁纸迦摩.jpg');
                                ('step 1');
                                var cards = player.getCards('he', { suit: 'heart' });
                                if (cards.length) {
                                    player.discard(cards);
                                    game.log(player, `弃置了${cards.length}张牌`);
                                }
                                player.recover();
                                ('step 2');
                                var num5 = player.hp;
                                player
                                    .chooseTarget([1, num5], '选择至多相当于你当前体力数量的目标', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    game.mp421('zmjiamo2');
                                    game.playzm1('zmjiamo');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.num2 = 0;
                                    game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                } else {
                                    game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                }
                                ('step 4');
                                if (result.bool && event.num2 < event.targets.length) {
                                    var card = game.createCard('lebu');
                                    event.targets[event.num2].addJudge(card);
                                    event.targets[event.num2].$draw(card);
                                    event.num2++;
                                    event.redo();
                                }
                            },
                        },
                        zmweidatiaotingzhe: {
                            nobracket: true,
                            trigger: {
                                player: 'gainBefore',
                            },
                            filter(event, player) {
                                if (event.parent.parent.name != 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            forced: true,
                            audio: 'ext:综漫季刊壹/audio:13',
                            content() {
                                'step 0';
                                event.num9 = trigger.cards.length;
                                event.cards = get.cards(4);
                                game.cardsGotoOrdering(event.cards);
                                ('step 1');
                                player.chooseCardButton('选择任意张点数同为奇数或同为偶数的牌获得', event.cards, [1, 4], true).set('filterButton', function (button) {
                                    if (!ui.selected.buttons.length) return true;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.number % 2 == 0) {
                                            return button.link.number % 2 == 0;
                                        } else {
                                            return button.link.number % 2 == 1;
                                        }
                                    }
                                });
                                ('step 2');
                                if (result.bool) {
                                    var num0 = (result.links.length - event.num9) * 5;
                                    player.storage.zmt_np += num0;
                                    event.cards.remove(result.links);
                                    trigger.cards = result.links;
                                    //    player.gain(result.links,'gain2');
                                    //   game.log(player,'获得了',result.links);
                                } else {
                                    event.goto(3);
                                }
                                ('step 3');
                                if (event.cards.length) {
                                    player.chooseCardButton('先后选择放回牌堆顶的牌', event.cards.length, event.cards, true);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.links && result.links[0]) {
                                    for (var i of result.links) {
                                        event.cards.remove(i);
                                        ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                    }
                                } //QQQ
                            },
                            ai: {
                                order: 8,
                            },
                            group: ['zmtsuzheng', 'zmtlongzu', 'zmweidatiaotingzhe_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:12',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        var cards = [];
                                        game.countPlayer2(function (current) {
                                            current.getHistory('useCard', function (evt) {
                                                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                            });
                                        });
                                        return cards.length;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        game.countPlayer2(function (current) {
                                            current.getHistory('useCard', function (evt) {
                                                if (evt.getParent('phaseUse').player == player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                            });
                                        });
                                        event.cards = cards;
                                        ('step 1');
                                        if (event.cards.length > 1) {
                                            var goon = false;
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (i.name == 'du') {
                                                        goon = true;
                                                        break;
                                                    }
                                                }
                                            if (!goon) {
                                                goon = game.hasPlayer(function (current) {
                                                    return player != current && get.attitude(player, current) > 1;
                                                });
                                            }
                                            player
                                                .chooseCardButton(event.cards, 1, get.prompt2(event.name))
                                                .set('ai', function (button) {
                                                    if (!_status.event.goon || ui.selected.buttons.length) return 0;
                                                    if (button.link.name == 'du') return 2;
                                                    return 1;
                                                })
                                                .set('goon', goon);
                                        } else if (event.cards.length == 1) {
                                            event._result = { links: event.cards.slice(0), bool: true };
                                            event.fored = true;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            event.fored = !event.fored;
                                            event.togive = result.links.slice(0);
                                            var str = `将${get.translation(result.links)}交给一名其他角色`;
                                            str = (event.fored ? '' : get.prompt(event.name) + '<br>') + str;
                                            player
                                                .chooseTarget(str, function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    if (_status.event.enemy) {
                                                        return -att;
                                                    } else if (att > 0) {
                                                        return att / (1 + target.countCards('h'));
                                                    } else {
                                                        return att / 100;
                                                    }
                                                })
                                                .set('enemy', get.value(event.togive[0], player, 'raw') < 0)
                                                .set(event.fored);
                                        }
                                        ('step 3');
                                        if (result.bool && result.targets.length) {
                                            result.targets[0].gain(event.togive, 'draw');
                                            game.log(result.targets[0], `获得了${get.cnNumber(event.togive.length)}张牌`);
                                        }
                                    },
                                    ai: {
                                        threaten: 1.3,
                                        expose: 0.2,
                                    },
                                },
                            },
                        },
                        zmtiaotingzhiyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:1',
                            trigger: {
                                global: ['damageEnd'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return event.source && event.source != player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                if (!player.hasSkill('zmtiaotingzhiyi_2')) {
                                    player.addTempSkill('zmtiaotingzhiyi_2', 'roundStart');
                                    game.mp421('zmzuoyi5');
                                }
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') {
                                    var num2 = game.countPlayer(function (current) {
                                        return current.hasSkill('zmthundun');
                                    });
                                    if (num2 > 0 || player.hp < trigger.source.hp) {
                                    } else {
                                        player.turnOver();
                                    }
                                    player.gainPlayerCard('he', trigger.source, true);
                                    event.finish();
                                }
                                if (result.color == 'black') {
                                    var num = [1, 2].randomGet();
                                    if (num > 1) {
                                        game.playzm1(['zmtiaoting1', 'zmtiaoting4', 'zmtiaoting5', 'zmtiaoting5'].randomGet());
                                        game.mp421('zmzuoyi2');
                                    } else {
                                        game.playzm1(['zmtiaoting2', 'zmtiaoting3', 'zmtiaoting6'].randomGet());
                                        game.mp421('zmzuoyi1');
                                    }
                                    trigger.source.damage(num);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                        // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                    },
                                },
                            },
                            group: ['zmtiaotingzhiyi_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:5',
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.hasSkill('zmthundun');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                    },
                                },
                                2: {},
                            },
                        },
                        zmfajin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:6',
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (!event.cards || event.cards.length != 1) return false;
                                return event.card.suit != undefined && player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(1, 'he', `是否弃置一张牌令对${get.translation(trigger.target)}结算的【杀】附加效果？`, function (card, player) {
                                    return card.suit != undefined;
                                });
                                var att = get.attitude(_status.event.player, trigger.target);
                                next.ai = function (card) {
                                    if (att < 0) {
                                        if (!player.hasSkill('zmtaxueyoulong_2')) {
                                            if (trigger.target.getEquip('bagua') && card.suit != trigger.card.suit) return -1;
                                            if (trigger.target.getEquip('baiyin') && card.suit == trigger.card.suit) return -1;
                                            if (trigger.target.countCards('h') == 0 && card.suit != trigger.card.suit) return -1;
                                            if (trigger.target.hasSkill('zmfajin_5') && card.suit != trigger.card.suit) return -1;
                                            if (trigger.target.hp <= 2) return 7 - get.value(card);
                                            return 5 - get.value(card);
                                        } else {
                                            if (trigger.target.countCards('h') == 0 && card.suit != trigger.card.suit) return -1;
                                            if (trigger.target.hasSkill('zmfajin_5') && card.suit != trigger.card.suit) return -1;
                                            if (trigger.target.getEquip('baiyin') && card.suit == trigger.card.suit) return -1;
                                            if (card.name == 'sha') return 12 - get.value(card);
                                            if (player.countCards('h', { name: 'sha' }) == 0 && card.name == 'shan') return 12 - get.value(card);
                                            return 5 - get.value(card);
                                        }
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (result.cards[0].suit == trigger.card.suit) {
                                        trigger.baseDamage++;
                                    } else {
                                        if (result.cards[0].suit == 'diamond') {
                                            trigger.target.addTempSkill('zmfajin_1', 'shaAfter');
                                        }
                                        if (result.cards[0].suit == 'heart') {
                                            trigger.target.addTempSkill('zmfajin_2', 'shaAfter');
                                        }
                                        if (result.cards[0].suit == 'spade') {
                                            trigger.target.addTempSkill('zmfajin_3', 'shaAfter');
                                        }
                                        if (result.cards[0].suit == 'club') {
                                            trigger.target.addTempSkill('zmfajin_4', 'shaAfter');
                                        }
                                        if (trigger.card.suit == 'diamond') {
                                            trigger.target.addTempSkill('zmfajin_1', 'shaAfter');
                                        }
                                        if (trigger.card.suit == 'heart') {
                                            trigger.target.addTempSkill('zmfajin_2', 'shaAfter');
                                        }
                                        if (trigger.card.suit == 'spade') {
                                            trigger.target.addTempSkill('zmfajin_3', 'shaAfter');
                                        }
                                        if (trigger.card.suit == 'club') {
                                            trigger.target.addTempSkill('zmfajin_4', 'shaAfter');
                                        }
                                    }
                                }
                            },
                            group: ['zmfajin_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && (event.card.name == 'sha' || event.card.name == 'wanjian') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        trigger.player.addTempSkill('zmfajin_5');
                                    },
                                },
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                    },
                                },
                                3: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                    },
                                },
                                4: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                    },
                                },
                                5: {},
                            },
                        },
                        zmtaxueyoulong: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 20 && !player.hasSkill('zmtaxueyoulong_1');
                            },
                            check(event, player) {
                                var num2 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player) > 0 && player.countCards('h', { name: 'sha' }) >= 1;
                                });
                                if (num2 == 0 && player.hp > 2 && player.countCards('h', { name: 'shan' }) > 0) return false;
                                if (player.countCards('h', { name: 'sha' }) > 0 && player.countCards('h', { name: 'shan' }) > 0 && player.hp > 2) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                game.playzm1(['zmpulao', 'zmpulao2'].randomGet());
                                game.mp421('zmpulao');
                                player.addSkill('zmtaxueyoulong_1');
                                player.addSkill('zmtaxueyoulong_2');
                                player.storage.zmtaxueyoulong_1 = 3;
                                ('step 1');
                                if (player.countCards('h', { name: 'sha' }) == 0 && player.countCards('h', { name: 'shan' }) == 0) {
                                    if (!player.hasSkill('zmtaxueyoulong_temp')) {
                                        player.addTempSkill('zmtaxueyoulong_temp', 'roundStart');
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        player
                                            .chooseControl('获得杀', '获得闪', function () {
                                                if (_status.currentPhase == player && _status.event.getParent('phaseUse').name == 'phaseUse' && player.getCardUsable('sha') > 0 && num4 > 1) return '获得杀';
                                                return '获得闪';
                                            })
                                            .set('prompt', '选择其中一项获得一张对应牌');
                                    } else {
                                        var list = ['sha', 'shan'];
                                        player.gain(game.createCard(list.randomGet()));
                                        player.$draw();
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.control == '获得杀') {
                                    var list = ['sha'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                                if (result.control == '获得闪') {
                                    var list = ['shan'];
                                    player.gain(game.createCard(list.randomGet()));
                                    player.$draw();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged() && player.storage.zmtaxueyoulong_1 && player.storage.zmtaxueyoulong_1 <= 1) return [1, 1];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmtaxueyoulong_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '游',
                                    intro: {
                                        content(storage) {
                                            return `你于${storage}回合内手牌中至少保有【杀】【闪】中的一张,不足则自动补齐.<br>&nbsp效果结束时,你弃置所有手牌.`;
                                        },
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtaxueyoulong_1 -= 1;
                                        player.markSkill('zmtaxueyoulong_1');
                                        ('step 1');
                                        if (player.storage.zmtaxueyoulong_1 <= 0) {
                                            player.storage.zmtaxueyoulong_1 = 0;
                                            player.removeSkill('zmtaxueyoulong_1');
                                            player.removeSkill('zmtaxueyoulong_2');
                                            player.discard(player.getCards('h'));
                                            player.storage.zmt_np = 0;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h', { name: 'sha' }) == 0 && player.countCards('h', { name: 'shan' }) == 0;
                                    },
                                    content() {
                                        'step 0';
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        if (_status.currentPhase != player) {
                                            game.playzm1(['zmtaxueyoulong_21', 'zmtaxueyoulong_22', 'zmtaxueyoulong_23', 'zmtaxueyoulong_24'].randomGet());
                                        }
                                        if (!player.hasSkill('zmtaxueyoulong_temp')) {
                                            player.addTempSkill('zmtaxueyoulong_temp', 'roundStart');
                                            var num4 = game.countPlayer(function (current) {
                                                return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player) > 0;
                                            });
                                            player
                                                .chooseControl('获得杀', '获得闪', function () {
                                                    if (_status.currentPhase == player && _status.event.getParent('phaseUse').name == 'phaseUse' && player.getCardUsable('sha') > 0 && num4 > 1) return '获得杀';
                                                    return '获得闪';
                                                })
                                                .set('prompt', '选择其中一项获得一张对应牌');
                                        } else {
                                            var list = ['sha', 'shan'];
                                            player.gain(game.createCard(list.randomGet()));
                                            player.$draw();
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.control == '获得杀') {
                                            var list = ['sha'];
                                            player.gain(game.createCard(list.randomGet()));
                                            player.$draw();
                                        }
                                        if (result.control == '获得闪') {
                                            var list = ['shan'];
                                            player.gain(game.createCard(list.randomGet()));
                                            player.$draw();
                                        }
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmxingsuidiping: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:8',
                            trigger: {
                                player: 'damageAfter',
                            },
                            mark: true,
                            marktext: '碎',
                            intro: {
                                content(storage) {
                                    return `已累计${storage}点`;
                                },
                            },
                            init(player) {
                                player.storage.zmxingsuidiping = 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.number != undefined;
                            },
                            forced: true,
                            content() {
                                var num = trigger.card.number;
                                player.storage.zmxingsuidiping += num;
                                player.markSkill('zmxingsuidiping');
                            },
                            group: ['zmxingsuidiping_1', 'zmxingsuidiping_2', 'zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0 && get.effect(event.player, { name: 'sha' }, player) > 0;
                                    },
                                    filter(event, player) {
                                        if (event.card && event.card.number != undefined && get.tag(event.card, 'damage')) {
                                            return player.storage.zmt_np * player.storage.zmxingsuidiping >= event.card.number * 100;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np = 0;
                                        player.storage.zmxingsuidiping = 0;
                                        player.markSkill('zmxingsuidiping');
                                        trigger.cancel();
                                        ('step 1');
                                        game.playzm1(['zmkalienina2', 'zmkalienina1'].randomGet());
                                        game.mp421('zmkalienina');
                                        player.useCard({ name: 'sha' }, trigger.player, false).animate = false;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmxingsuidiping_1';
                                    },
                                    content() {
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        zmzhendijianxiu: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number / player.hp == Math.floor(hs[i].number / player.hp) && Math.ceil(hs[i].number / player.hp) && hs[i].number >= player.hp) {
                                        return true;
                                    }
                                }
                            },
                            usable: 1,
                            check(card, player) {
                                // var card1={name:'zengbing'};
                                //  return get.value(card)-get.value(card1);
                                return 12 - get.value(card);
                            },
                            position: 'he',
                            selectTarget() {
                                return [1, 1];
                            },
                            selectCard() {
                                return [1, 1];
                            },
                            filterCard(card, player) {
                                return card.number / player.hp == Math.floor(card.number / player.hp) && Math.ceil(card.number / player.hp) && card.number >= player.hp;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (target == player) {
                                    game.playzm1(['zmzhendijianxiu1', 'zmzhendijianxiu2', 'zmzhendijianxiu3', 'zmzhendijianxiu4'].randomGet());
                                } else {
                                    game.playzm1(['zmzhendijianxiu1', 'zmzhendijianxiu2', 'zmzhendijianxiu3', 'zmzhendijianxiu4', 'zmzhendijianxiu5'].randomGet());
                                }
                                if (target != player) {
                                    target.chooseDrawRecover(2, true);
                                    target.addSkill('zmzhendijianxiu_1');
                                    target.storage.zmzhendijianxiu_1 = player;
                                    event.finish();
                                } else {
                                    target.addSkill('zmzhendijianxiu_1');
                                    target.storage.zmzhendijianxiu_1 = player;
                                    player.chooseControl('摸牌', '回复').set('prompt', '选择回复体力或摸两张牌').ai = function (event, player) {
                                        if (player.hp == player.maxHp) return '摸牌';
                                        return '回复';
                                    };
                                }
                                ('step 1');
                                if (result.control == '摸牌') {
                                    player.draw(2);
                                }
                                if (result.control == '回复') {
                                    player.recover();
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmzhendijianxiu_1 = 0;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.zmzhendijianxiu_1 || player.storage.zmzhendijianxiu_1 == 0) return false;
                                        if (!player.storage.zmzhendijianxiu_1.isAlive()) return false;
                                        return event.card && event.source;
                                    },
                                    usable: 1,
                                    content() {
                                        player.removeSkill('zmzhendijianxiu_1');
                                        trigger.source.useCard(trigger.card, trigger.cards, player.storage.zmzhendijianxiu_1, false);
                                    },
                                },
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var num;
                                        num = target.countCards('h');
                                        if (target.hp > 2) num += 5;
                                        if (player.hp <= 3) {
                                            if (target != player) return 0;
                                            return 1;
                                        }
                                        if (target.hp == target.maxHp && target != player) return 0;
                                        return 100 - num;
                                    },
                                },
                            },
                        },
                        zmlingxiuqizhig: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && player.hp > event.player.hp && event.player.isDamaged();
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否令${get.translation(event.player)}回复一点体力？之后你流失一点体力并摸一张牌`;
                                return str;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0 && player.hp > 1 && event.player.isDamaged();
                            },
                            content() {
                                player.line(trigger.player);
                                trigger.player.recover();
                                player.loseHp();
                                player.draw();
                            },
                            global: ['zmlingxiuqizhig_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += `是否令${get.translation(event.player)}回复一点体力？之后你流失一点体力并摸一张牌`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (!event.player.hasSkill('zmlingxiuqizhig')) return false;
                                        if (player.hasSkill('zmlingxiuqizhig')) return false;
                                        return event.player != player && player.hp > event.player.hp && event.player.isDamaged();
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 1 && player.hp > 1 && event.player.isDamaged();
                                    },
                                    content() {
                                        game.playzm1(['zmlingxiuqizhig_13', 'zmlingxiuqizhig_12', 'zmlingxiuqizhig_11'].randomGet());
                                        player.line(trigger.player);
                                        trigger.player.recover();
                                        player.loseHp();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        zmkuangluandeguigongzi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:3',
                            trigger: {
                                player: ['discardPlayerCardBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.parent.card) return false;
                                if (event.parent.card.name != 'guohe') return false;
                                return !event.visible;
                            },
                            content() {
                                'step 0';
                                trigger.set('visible', true);
                                ('step 1');
                            },
                            group: ['zmkuangluandeguigongzi_1', 'zmkuangluandeguigongzi_2', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:3',
                                    trigger: {
                                        player: 'rewriteDiscardResult',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.parent.card) return false;
                                        if (event.parent.card.name != 'guohe') return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.color(i) == 'red') {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        trigger.target.damage('fire');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseUseAfter',
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 30) return false;
                                        return player.countUsed(null, true) <= player.hp && player.countUsed(null, true) > 0;
                                    },
                                    content() {
                                        player.storage.zmt_np -= 30;
                                        player.draw(player.countUsed(null, true));
                                        player.chooseUseTarget('###视为使用一张【过河拆桥】', { name: 'guohe' }, false);
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
                        zmtshensheng: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            popup: false,
                            forced: true,
                            filter(event, player) {
                                return event.num >= event.player.hp;
                            },
                            content() {
                                if (trigger.player.hasSkill('zmtmoxing') || trigger.player.hasSkill('zmtsiling')) {
                                    trigger.num += 1;
                                }
                            },
                        },
                        zmbihudeyazheng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:4',
                            trigger: {
                                global: ['damageEnd'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                return event.source && event.player != player && event.source != player && event.num > 1 && event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var card = trigger.player.getCards('h').randomGet();
                                trigger.player.showCards(card);
                                event.card = card;
                                if (get.type(card) != 'basic') {
                                    trigger.player.discard(card);
                                    trigger.player.recover();
                                } else {
                                    player.gain(card, 'gain2');
                                    player.chooseToUse(`是否对${get.translation(trigger.source)}使用一张【杀】？`, { name: 'sha' }, -1, trigger.source);
                                }
                            },
                            ai: {
                                save: true,
                                threaten: 1.4,
                                order: 9,
                                result: {
                                    player(player) {
                                        if (player.hp < 1) return 10;
                                    },
                                },
                            },
                        },
                        zmlaizizhijing: {
                            nobracket: true,
                            trigger: {
                                player: ['respondAfter', 'useCardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.suit == 'spade';
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmwukechujidelixiangxiang == 1) {
                                    player.storage.zmzj1 += 1;
                                }
                                if (player.storage.zmwukechujidelixiangxiang == 2) {
                                    player.storage.zmzj2 += 1;
                                }
                                if (player.storage.zmwukechujidelixiangxiang == 3) {
                                    player.storage.zmzj3 += 1;
                                }
                                player.draw();
                            },
                            group: ['zmlaizizhijing_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊壹/audio:8',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && !player.hasSkill('zmzhijing0');
                                    },
                                    content() {
                                        player.addTempSkill('zmzhijing0', { player: 'phaseBefore' });
                                    },
                                },
                            },
                        },
                        zmzhijing0: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (get.color(card) == 'black') return Infinity;
                                },
                                suit(card, suit) {
                                    if (suit == 'club') {
                                        return 'spade';
                                    }
                                },
                            },
                        },
                        zmzj1: {
                            init(player) {
                                player.storage.zmzj1 = 0;
                            },
                        },
                        zmzj2: {
                            init(player) {
                                player.storage.zmzj2 = 0;
                            },
                        },
                        zmzj3: {
                            init(player) {
                                player.storage.zmzj3 = 0;
                            },
                        },
                        zmwukechujidelixiangxiang: {
                            init(player) {
                                player.storage.zmwukechujidelixiangxiang = 0;
                                player.markSkill('zmwukechujidelixiangxiang');
                            },
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmwukechujidelixiangxiang_1', 'zmzj1', 'zmzj2', 'zmzj3'],
                            nobracket: true,
                            audio: 'ext:综漫季刊壹/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            filterTarget: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, player.storage.zmzj1 + player.storage.zmzj2 + player.storage.zmzj3];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'thunder',
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 60;
                                game.playzm1(['zmmogen1', 'zmmogen1', 'zmmogen2', 'zmmogen3', 'zmmogen4'].randomGet());
                                game.mp421('zmmogen');
                                ('step 1');
                                var num0 = player.storage.zmzj1 + player.storage.zmzj2 + player.storage.zmzj3;
                                for (var i = 0; i < targets.length; i++) {
                                    if (targets.length < num0) {
                                        var num = num0 - targets.length;
                                        var t = Math.random();
                                        if (t <= (num / 10) * 2) {
                                            targets[i].damage();
                                        }
                                    }
                                    targets[i].damage();
                                }
                            },
                            ai: {
                                expose: 0.2,
                                damage: true,
                                threaten: 1.5,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        player.storage.zmwukechujidelixiangxiang += 1;
                                        player.markSkill('zmwukechujidelixiangxiang');
                                        ('step 1');
                                        if (player.storage.zmwukechujidelixiangxiang > 3) {
                                            player.storage.zmwukechujidelixiangxiang = 1;
                                        }
                                        ('step 2');
                                        if (player.storage.zmwukechujidelixiangxiang == 1) {
                                            player.storage.zmzj1 = 0;
                                        }
                                        if (player.storage.zmwukechujidelixiangxiang == 2) {
                                            player.storage.zmzj2 = 0;
                                        }
                                        if (player.storage.zmwukechujidelixiangxiang == 3) {
                                            player.storage.zmzj3 = 0;
                                        }
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        zm_08shadidala: '迪达拉',
                        zm_01jianpaxiwaer: '帕西瓦尔',
                        zm_04doujiekeo: '杰克O',
                        zm_06fajiershitaliya: '基尔什塔利亚',
                        zm_02gongwangda: '旺达',
                        zm_01jiannaermeiya: '娜尔梅亚',
                        zm_08shaluoji: '洛基',
                        zm_09hufutaoping: '蝠桃瓶',
                        zm_09hucheerni: '车尔尼',
                        zm_09hubailang: '白浪',
                        zm_09hulumuyuan: '鹿目圆',
                        zm_20shenjiamo: '迦摩',
                        zm_11ruzuoyi: '佐伊',
                        zm_08shaguixiaotailang: '桂小太郎',
                        zm_04doupulao: '蒲牢',
                        zm_03qiangkalienina: '卡列尼娜',
                        zm_01jianwagena: '瓦格娜',
                        zm_10kuanglamuleisaer: '拉姆蕾萨尔',
                        zm_02gongkarong: '喀戎',
                        zm_08shayouaier: '尤艾尔',
                        zm_03qiangbeilier: '贝利尔',
                        zm_05qikaesi: '卡俄斯',
                        zm_06faaertuoliya: '阿尔托莉雅',
                        zm_07keyanxiaoluo: '阎小罗',
                        zm_13lingshengzhu: '圣主',
                        zm_06famogenlefei: '摩根勒菲',
                        zm_14linlalaiye: '拉莱耶',
                        zm_03qiangzeta: '泽塔',
                        zm_04doudaizong: '戴宗',
                        zm_06faxiaorang: '萧让',
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
                        zmtjuda_info: '',
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
                        zmtchaojuda_info: '',
                        zmjingu: '禁锢',
                        zmjingu_info: '无法使用/打出/基本牌',
                        zmzhongji: '重击',
                        zmzhongji_info: '【杀】的基础伤害加1.',
                        zzhongji: '伤害增幅',
                        zzhongji_info: '',
                        zmchusha1: '出杀+1',
                        zmchusha1_info: '',
                        zmchusha0: '出杀次数无限',
                        zmchusha0_info: '',
                        zmjiyuxiwang: '寄予希望',
                        zmjiyuxiwang_info: '当有角色不因此法摸牌后,若此技能未生效,你可令该角色弃置这些牌并令该角色于2轮后摸双倍的牌.',
                        zmjiyuchengjie: '寄予惩戒',
                        zmjiyuchengjie_info: '当有角色不因此法受到伤害时,若此技能未生效,你可取消此伤害并令该角色于2轮后受到双倍的伤害.',
                        zmyuanhuanzhili: '圆环之理',
                        zmyuanhuanzhili_info: '当【寄予希望】【寄予救济】【寄予惩戒】同时生效时,你可消耗至少30点能量令这些效果立即结算.<li>本局内发动过此技能后,己方角色死亡时需进行判定:<br>&nbsp若判定结果为红色则其将体力值回复至1并立即结算场上的【寄予希望】【寄予救济】【寄予惩戒】之效果.',
                        zmjiyujiuji: '寄予救济',
                        zmjiyujiuji_info: '当有角色不因此法回复体力时,若此技能未生效,你可取消此回复并令该角色于2轮后回复双倍的体力.',
                        zmfajin: '发劲',
                        zmfajin_info: '你使用【杀】指定目标时可弃置1张牌;<br>&nbsp若以此法弃置的牌与此杀花色不同,则此杀不可被花色与之任一相同的牌响应,反之此杀伤害基数+1.',
                        zmtaxueyoulong: '踏雪游龙',
                        zmtaxueyoulong_info: '出牌阶段开始时 你可消耗20点能量令此技能生效至你的3个回合结束后,且于失效时你清空能量并弃置所有手牌.<br>&nbsp此技能生效期间你的手牌中至少包含1张【杀】或【闪】,若不足则可选择其一获得,之后本轮触发该效果时改为随机获得.',
                        zmxingsuidiping: '星碎地平',
                        zmxingsuidiping_info: '锁定技 <br>当你受到牌造成的伤害后,累计记录对应牌的点数.<br>&nbsp当你被带有伤害标签的牌指定为目标时,若以此法累计的点数乘你的能量数至少为此牌点数的100倍,则你可清空能量与计数令此牌对你无效并视为对此牌来源使用了1张伤害基数为2的【杀】.',
                        zmzhendijianxiu: '阵地检修',
                        zmzhendijianxiu_info: '出牌阶段限一次 <br>你可弃置1张点数为你体力值倍数的牌令一名角色选择摸2张牌或回复1点体力.<br>&nbsp若如此做,该角色下次受到牌造成的伤害时该牌对你额外结算1次.',
                        zmweidatiaotingzhe: '伟大调停者',
                        zmweidatiaotingzhe_info: '<li>你因摸牌阶段获得牌时,改为查看牌堆顶的4张牌后选择其中任意张点数同为奇数或同为偶数的牌获得,之后将剩下的牌以任意顺序放回牌堆顶.<li>回合结束时,你可将1张本回合因使用而进入弃牌堆的牌交给一名其他角色.',
                        zmtiaotingzhiyi: '至高秩序',
                        zmtiaotingzhiyi_info: '当其他角色造成伤害后你可消耗25点能量进行判定:<br>&nbsp若为红色你获得其1张牌并翻面;<br>&nbsp若为黑色你对其造成1~2点伤害.<li>若场上有[混沌]属性的角色或你的体力值小于伤害来源,则你取消因此法进行的翻面.',
                        zmleyuquanneng: '爱欲权能',
                        zmleyuquanneng_info: '<li>你使用延时锦囊牌时将对目标立即结算.<li>出牌阶段 你可以消耗20点能量将你区域内的1张牌当做【乐不思蜀】置入其他角色判定区.',
                        zmwanyuyingti: '万欲应体',
                        zmwanyuyingti_info: '<li>你的手牌无数量上限.<li>当其他角色判定失败后,你可以视为对其使用1张【乐不思蜀】.<li>当你受到伤害时可令伤害来源判定区内置入1张【乐不思蜀】.',
                        zmaideshijie: '持爱却枯 无恋也',
                        zmaideshijie_info: '当你成为【杀】的目标时,你可弃置至少2张♥️️牌取消此杀并回复1点体力,之后你可指定至多相当于你当前体力值数量的角色令他们的判定区内置入1张【乐不思蜀】.',
                        zmsharenyishi: '暴力医师',
                        zmsharenyishi_info: '出牌阶段限一次 <br>你可展示并弃置1张牌后指定一名角色:<li>若如此做,该角色有展示牌点数*10%的概率回复1点体力,否则流失1点体力.<li>结算开始前,以此法指定的其他角色可交给你任意张牌,每交给你1张牌则回复体力的概率增加10%.',
                        zmfangxueliaofa: '放血疗法',
                        zmfangxueliaofa_info: '当有角色受到伤害后,你可消耗至少40点能量对其造成1点伤害后令其回复1点体力.<br>&nbsp因此法进入濒死状态的角色将体力值回复至2.',
                        zmfushoushuangquan: '富寿双全',
                        zmfushoushuangquan_info: '当有角色受到伤害后,你可消耗25点能量与该角色将手牌中的红色牌当做【桃】向对方使用.',
                        zmchuntaoshisheng: '春桃始盛',
                        zmchuntaoshisheng_info: '一名角色的回合结束时,你可将1张本回合因使用而进入弃牌堆的红色牌置于牌堆顶.',
                        zmguangyingpengpai: '光影澎湃',
                        zmguangyingpengpai_info: '出牌阶段开始时 你随机声明1个未以此法记录的花色,之后你可展示并记录1张同花色的牌;<li>若你以此法展示了牌,则你可令一名角色摸1张牌;若你以此法记录了所有花色,则你清空记录并可令一名角色回复1点体力.<li>若你未能以此法展示牌,则清空已有的记录.',
                        zmhongming: '轰鸣',
                        zmhongming_info: '当你被其他角色使用牌指定为目标时,若你以【光影澎湃】记录了牌,则你可消耗至少20点能量取消之并视为对此牌来源使用了1张以【光影澎湃】记录的牌.',
                        zmguijizhishen: '诡计之神',
                        zmguijizhishen_info: '当其他角色使用牌指定自己为唯一目标时,你可消耗10点能量展示牌堆顶3张牌,且之后你可用其中1张牌替换该牌.<br>&nbsp若因此法替换的牌对该角色造成了伤害,则其可对你使用1张【杀】.',
                        zmqizhahuanjing: '欺诈幻景',
                        zmqizhahuanjing_info: '出牌阶段限一次 <br>你可与一名其他角色拼点;<br>&nbsp若你拼点胜利,则你获得双方的拼点牌并可指定另一名角色与对方拼点.',
                        zmhudieren: '蝴蝶刃•天钿女命舞',
                        zmhudieren_info: '出牌阶段限一次 <br>你可以消耗30点能量与一名其他角色拼点:<li>若你赢,则视为对其连续使用相当于拼点牌点数之差数量的【杀】<b><font color=DarkGray>(不超过3)</font></b><li>若你未赢,目标摸1张牌.',
                        zmwanliyikong: '万里一空',
                        zmwanliyikong_info: '出牌阶段 你可流失1点体力后摸2张牌并获得1点护甲.',
                        zmyanjianzhidun: '炎剑制盾',
                        zmyanjianzhidun_info: '<li>当你使用【杀】指定目标时,你可以查看并获得其1张红色牌.<li>当你被其他角色的【杀】指定为目标时,你可以查看并弃置其1张红色牌.',
                        zmmijiduotianyan: '米吉多天炎',
                        zmmijiduotianyan_info: ' <li>当你使用红色牌对其他角色造成伤害时可对该角色追加1点火焰伤害;<br>&nbsp若此时能量达到50点,则清空能量改为追加2点火焰伤害.',
                        zmshengtigouzhuang: '生体构装',
                        zmshengtigouzhuang_info: '锁定技 <li>每当你的回合开始时将1张随机装备牌随机置入1个空装备栏.<li>当你使用【杀】指定目标时,若你装备了与此杀同花色的装备牌则此杀不计入出杀次数.',
                        zmgouzhuangjiefang: '构装解放',
                        zmgouzhuangjiefang_info: '出牌阶段限一次 <li>你可以弃置任意张装备区内的牌并摸等量的牌.<li>每当你的【杀】被【闪】响应时,你可消耗30点能量与该角色拼点:<br>&nbsp若该角色拼点成功则你弃置所有装备区的牌;<li>若你拼点成功清空能量对其造成2点伤害.<br>&nbsp若该角色无法拼点,你可消耗30点能量并弃置1张装备牌对该角色造成2点伤害.',
                        zmwannengjiejueshi: '万能解决士',
                        zmwannengjiejueshi_info: '每回合限一次 <br>&nbsp其他角色使用的【杀】被抵消时可将此杀交给你;<br>&nbsp当你使用的【杀】造成伤害时可将此杀交给一名其他角色.',
                        zmyijianyisha: '一箭一杀',
                        zmyijianyisha_info: '<li>你与体力值为1的角色计算距离始终为1.<li>当你使用【杀】对其他角色造成伤害后,你可消耗20点能量令其无法响应你对其使用的下1张【杀】.',
                        zmyingxiongzhizaok: '英雄塑造',
                        zmyingxiongzhizaok_info: '<li>弃牌阶段若你无需弃置手牌, 则你可展示1张红色手牌并令至多3名其他角色依次展示牌堆顶的1张牌:<li>若展示牌颜色与你展示的牌相同则其获得此牌;<li>若展示牌颜色不同则其将此牌置入弃牌堆.',
                        zmxianzhederuizhi: '贤者的睿智',
                        zmxianzhederuizhi_info: '当你于回合内使用第1张牌时,你可以从牌堆中随机获得1张与之类型相同的牌.',
                        zmtianxieyishe: '天蝎一射',
                        zmtianxieyishe_info: '出牌阶段限一次 <br>你可消耗50点能量指定一名其他角色;该角色直到下次回复体力前每回合开始时累计0.5点伤害,于回复体力时一并结算,向上取整.',
                        zmtianxieyishe1: '天蝎一射',
                        zmtianxieyishe1_info: '每当回合开始时累计0.5点伤害,在下次进行回复时全部结算.',
                        zmrongyuefeiren: '融月绯刃',
                        zmrongyuefeiren_info: '<li>当你使用【闪】抵消【杀】时,你可对此杀来源使用1张【杀】.<li>你于回合内/回合外使用【杀】指定目标时可弃置自己/目标的1张红色牌;<br>&nbsp若如此做,该【杀】造成伤害时追加1点火焰伤害.',
                        zmyetianguang: '夜天光',
                        zmyetianguang_info: '结束阶段,你可消耗20点能量保留至多2张手牌,弃置其余手牌后将手牌补至体力上限.',
                        zmjiaozhisizhang: '狡知司掌',
                        zmjiaozhisizhang_info: '<li>你的手牌数在显示与计算中视为0.<li>你的锦囊牌不计入手牌上限,你不能成为其他角色使用锦囊牌的目标.<li>出牌阶段限一次 你可以展示2张花色相同的牌并分别交给两名其他角色,你摸2张牌并令这两名角色拼点:<br>&nbsp拼点失败的角色获得1个[因]标记;<br>&nbsp拥有至少2个[因]的角色回合开始时移去所有[因],之后若其体力值大于你则你回复1点体力,否则其本回合由你操控.',
                        zmjiaozhi: '狡知',
                        zmjiaozhi_info: '出牌阶段限一次<li>你可以展示2张花色相同的牌并分别交给两名其他角色,你摸2张牌并令这两名角色拼点:<br>拼点失败的角色获得1个[因]标记.<br>&nbsp拥有至少2个[因]的角色回合开始时移去所有[因],之后若其体力值大于你则你回复1点体力,否则其本回合由你操控.',
                        zmjiaozhi_control: '掌控',
                        zmjiaozhi_control_info: '',
                        zmzhimingyouxi: '致命游戏',
                        zmzhimingyouxi_info: '<li>当其他角色使用【杀】时,若目标不为你且你手牌中有杀,则你可令伤害来源选择是否重铸1张【闪】,否则此杀目标变为你.<li>当你成为【杀】的目标时,你可弃置1张杀并将此【杀】的目标改为其来源;且此时若你的能量达到60点,则你清空能量对此杀来源造成2点伤害.',
                        zmgerenjifen: '个人激愤',
                        zmgerenjifen_info: '每轮限一次 <br>当有角色于其回合内首次使用牌时,你可取消之改为该角色对自己使用了1张【酒】.',
                        zmqunmengdexuanxiao: '群氓的喧嚣',
                        zmqunmengdexuanxiao_info: '出牌阶段限一次 <br>若你的能量至少为场上有手牌角色之数量的10倍,则你可消耗对应的能量指定一名角色并选择:<br>&nbsp令场上有手牌的角色依次将手牌中的黑/红色牌当做【杀/桃】对该角色使用.<br>&nbsp且若这些角色手牌中红/黑色牌的数量大于黑/红色牌的数量则可选择弃置所有红/黑色手牌并拒绝执行.',
                        zmlinghuawuzhuang: '灵化武装',
                        zmlinghuawuzhuang_info: '锁定技<li>若场上没有阵亡的角色,你的攻击距离+1,否则防御距离+1.<li>当你即将受到伤害时,你可弃置1张装备区内的牌令该伤害-1.<li>当你失去装备区内的牌时,你保留此牌的技能直到你装备新的装备牌为止.<li>当你的装备区内置入牌时,你可选择一名手牌数大于你的其他角色弃置其1张牌;若此牌为黑色,则视为你对其使用了1张【杀】.',
                        zmyanwangjiadao: '阎王驾到',
                        zmyanwangjiadao_info: '每回合限一次 <br>出牌阶段你可消耗60点能量指定至多2名其他角色在当前回合结束后进行1个额外的回合;<br>&nbsp如此做后,除指定角色外的其他角色须随机弃置4张牌,否则你对其造成1点伤害.',
                        zmshufu: '鼠符咒',
                        zmshufu_info: '当你进行翻面时,你可弃置1张牌将武将牌翻回.',
                        zmniufu: '牛符咒',
                        zmniufu_info: '你使用的普通【杀】伤害基数+1.',
                        zmhufu: '虎符咒',
                        zmhufu_info: '锁定技 准备阶段开始前,若你手牌中全部为同色牌,则你摸1张与手牌颜色相反的牌.',
                        zmtufu: '兔符咒',
                        zmtufu_info: '当你需要打出【闪】时,若你手牌中没有闪,则你可将两张手牌当闪打出.',
                        zmlongfu: '龙符咒',
                        zmlongfu_info: '当你使用锦囊牌造成伤害时,你可弃置1张♦️️牌使此伤害变为火属性且伤害基数+1.',
                        zmshefu: '蛇符咒',
                        zmshefu_info: '当你失去最后1张手牌时,你可进入潜伏状态直到你的回合开始.',
                        zmmafu: '马符咒',
                        zmmafu_info: '锁定技 <li>开始阶段若你已受伤或判定区内有牌,则你进行一次判定:<li>若判定结果为红色,则你弃置判定区内的牌;<li>若同时花色为♥️️,则你回复2点体力.',
                        zmyangfu: '羊符咒',
                        zmyangfu_info: '<li>你使用的锦囊牌无距离限制.<li>当有角色的武将牌从正面翻至背面时,你可使其进行的下一个回合由你操控.',
                        zmhoufu: '猴符咒',
                        zmhoufu_info: '出牌阶段限一次 <li>你可选择一名装备区内有牌的的其他角色,之后可选择复制其中1张装备牌的效果持有直到出牌阶段结束.',
                        zmjifu: '鸡符咒',
                        zmjifu_info: '每轮限一次 <li>当其他角色回合开始时你可令自己与其他角色计算距离+1直到你的回合开始.',
                        zmgoufu: '狗符咒',
                        zmgoufu_info: '当你进入濒死状态时,你可以弃置手牌与装备区中全部红色牌(至少两张)将体力回复至1.当发动此技能时若你为圣主且充能达到40点,则优先消耗40点能量将体力回复至1.',
                        zmzhufu: '猪符咒',
                        zmzhufu_info: '出牌阶段限一次 <li>你可以将1张红色牌手牌视为【火杀】使用.',
                        zmzhengqifengyin: '正气封印',
                        zmzhengqifengyin_info: '<li>你不能使用或打出除锦囊牌以外的牌.<li>结束阶段你可将手牌交给一名其他角色并令其进行1个额外的出牌阶段;若该角色于此阶段内造成了伤害,则你摸1张牌.<li>你获得牌时根据点数获得12种对应的符咒技能,每种符咒只获得1次.<li>出牌阶段你可将持有的符咒分别转移给其它角色,若这些角色死亡则收回他们的符咒.<li>出牌阶段开始前,你可选择收回场上的全部符咒.<li>当你同时持有12个符咒时你移除此技能并将体力回复至体力上限.',
                        zmszsx: '圣主属性',
                        zmszsx_info: '',
                        zmweidayurumengzhishi: '伟大于入梦之时',
                        zmweidayurumengzhishi_info: '每轮限一次 <br>其他角色使用的基本牌置入弃牌堆时,若你手牌中没有同名牌,则你可以交给其1张手牌后获得此牌.',
                        zmzhipeiyufengkuangzhishi: '支配于疯狂之时',
                        zmzhipeiyufengkuangzhishi_info: '出牌阶段限一次 <br>你可消耗至少30点能量并弃置任意张花色不同的牌后指定一名有手牌的其他角色;<br>&nbsp若该角色的手牌中含有与你弃置的牌花色相同的牌,则其翻面并进入混乱状态直到其回合结束.',
                        zmqibaoniantu: '起爆粘土',
                        zmqibaoniantu_info: '<li>你可以将一张锦囊牌当做【火杀】使用或打出.<li>出牌阶段你可消耗15点能量将1张红色牌扣置于一名未以此法放置牌的角色之武将牌上;<br>&nbsp有角色使用与以此法扣置的牌之花色相同的牌指定对应目标时,目标可展示并移去扣置的牌令此牌来源受到1点无来源的火焰伤害.',
                        zmqibaoniantu2: '引爆',
                        zmqibaoniantu2_info: '',
                        zmqibaoniantu3: '转化粘土',
                        zmqibaoniantu3_info: '你可以将你的任意1张锦囊牌当【火杀】使用或打出.',
                        zmc0zibao: 'CO·自爆',
                        zmc0zibao_info: '当你死亡时,若伤害来源与你距离为1且你的武将牌上设置了【起爆黏土】,则你对其造成相当于你体力上限一半数量的火焰伤害并对你距离2以内的其他角色造成1点火焰伤害.',
                        zmhuzhijiahu: '湖之加护',
                        zmhuzhijiahu_info: '<li>当你使用基本牌后进行判定:若判定结果的花色与该牌的相同,则你收回该牌.<li>出牌阶段限一次 你可以将1张基本牌交给一名其他角色,之后你摸1张牌.',
                        zmzhenyuanjijie: '真圆集结的誓约之星',
                        zmzhenyuanjijie_info: '当有角色受到致命伤害时你可消耗40点能量取消此伤害,之后你可指定任意名角色令他们回复1点体力并将手牌补至各自的体力值数量;<br>&nbsp发动此技能后直到你再次受到伤害前,场上角色受到大于1点的伤害时你可取消之.<li>此技能每发动一次,下次发动此技能时能量消耗+20.',
                        zmjianzhimoshu: '剑之魔术',
                        zmjianzhimoshu_info: '当你使用【杀】对目标角色即将造成伤害时,若你装备了武器牌,则你可以取消此伤害改为弃置目标至多相当于此武器牌攻击距离数量的牌.',
                        zmwukechujidelixiangxiang: '无可触及的理想乡',
                        zmwukechujidelixiangxiang_info: '出牌阶段限一次 <br>你可消耗60点能量指定至多X名其他角色并对他们各自造成1点伤害.<li>若你指定的角色数不足X,则以此法对目标造成伤害时,X每多余1点即有20%几率追加1点伤害.<li>X为近3轮内你使用或打出的♠️️牌的总数.',
                        zmbihudeyazheng: '压政的庇护',
                        zmbihudeyazheng_info: ' <li>当其他角色受到大于1点的伤害后,若伤害来源不为你且该角色有手牌,则你可随机展示该角色的1张手牌: <br>&nbsp若此牌非基本牌,则该角色弃置此牌并回复1点体力,否则你获得此牌并可对伤害来源使用1张【杀】.',
                        zmlaizizhijing: '来自止境',
                        zmlaizizhijing_info: '锁定技 <li>当你使用或打出花色为♠️️的牌后,你摸1张牌.<li>当你使用牌造成伤害后,直到你下个回合开始前你手牌中的黑色牌花色均视为♠️️,且使用时无数量限制.',
                        zmzhijing0: '止境',
                        zmzhijing0_info: '',
                        zmzj1: '止境',
                        zmzj1_info: '',
                        zmzj2: '止境',
                        zmzj2_info: '',
                        zmzj3: '止境',
                        zmzj3_info: '',
                        zmzhanxingshu: '占星术',
                        zmzhanxingshu_info: '<li>出牌阶段开始时,若你的体力值与游戏轮数同为奇数/偶数,则你此阶段内的主动出牌时间变为5秒;<br>&nbsp若如此做,当你于此阶段内使用牌时你摸1张牌.<li>若你回合内以此法获得了至少4张牌,则你结束出牌阶段并选择:<br>①本回合手牌上限+3;<br>②回复1点体力;<br>③额外充能10点.',
                        zmzhanxingshu2: '占星术',
                        zmzhanxingshu2_info: '',
                        zmzhanxingshu3: ' ',
                        zmzhanxingshu3_info: '',
                        zmzhanxingshu_choose1: ' ',
                        zmzhanxingshu_choose1_info: '',
                        zmzhanxingshu_choose2: ' ',
                        zmzhanxingshu_choose2_info: '',
                        zmzhanxingshu4: ' ',
                        zmzhanxingshu4_info: '',
                        zmtiantimoshu: '天体魔术',
                        zmtiantimoshu_info: '转换技 每轮开始时你可以选择:<li>天不巡:你可以令一名其他角色跳过判定阶段且本轮内使用的【杀】需要两张闪响应;<li>地不动:你可以令一名角色跳过弃牌阶段且本轮内首次受到的伤害-1.',
                        zmtiantimoshu1: '天不巡',
                        zmtiantimoshu1_info: '你使用的【杀】需要两张【闪】响应.',
                        zmtiantimoshu2: '地不动',
                        zmtiantimoshu2_info: '持有此技能时,你免疫下次受到的伤害.',
                        zmguanweizhiding: '冠位指定•人理保障天球',
                        zmguanweizhiding_info: '限定技 <li>当你充能达到150点后你不能再使用【占星术】;<li>出牌阶段若你充能达到150点,你可清空能量对场上所有敌方角色各造成4点伤害.',
                        zmzhenhongchuanguang: '真红穿光',
                        zmzhenhongchuanguang_info: '<li>当你使用红色牌指定其他角色后,你可令其随机弃置1张牌;<li>你每以此法累计弃置4张牌后,你摸4张牌.',
                        zmaerbeisizhiqiang: '阿尔贝斯之枪',
                        zmaerbeisizhiqiang_info: '当你于弃牌阶段内每弃置1张红色牌后,你可消耗5点能量视为对一名其他角色使用1张【杀】;<li>此时你可选择额外消耗20点能量使此杀伤害+1;<li>若你选择消耗能量且装备了武器牌则你弃置武器牌改为对目标造成2点伤害.',
                        zmshenxingtaibao: '神行太保',
                        zmshenxingtaibao_info: '当你成为【杀】的目标时,你可消耗15点能量令其他角色直到你的下个回合结束前与你计算距离时增加你的攻击距离数;<br>&nbsp若如此做后你不在此杀来源的攻击范围内,则此杀对你无效.<li>处于此技能效果中时,【千里传讯】的摸牌数+1.',
                        zmqianlichuanxun: '千里传讯',
                        zmqianlichuanxun_info: '任意角色弃牌阶段开始时,若其本回合内未使用牌指定其他角色为目标,则你可令其摸1张牌并进行1个额外的出牌阶段.',
                        zmshengshoushusheng: '圣手书生',
                        zmshengshoushusheng_info: '当其他角色使用锦囊牌时,你可将1张颜色相同的手牌当做同名牌使用;<br>&nbsp若你以此法使用的牌之点数大于该角色使用的牌,则你可令该角色使用的牌失效.',
                        zmyizidangxian: '义字当先',
                        zmyizidangxian_info: '当你攻击范围内的角色回复体力或摸牌后,你可消耗至少25点能量令一名除其以外的角色共享效果.',
                        zmgouzhuangbushu: '构装部署',
                        zmgouzhuangbushu_info: '锁定技 <li>当你每回合首次弃置牌时,你将这些牌置于武将牌上.<li>当你需以【杀/闪】进行响应时,你可获得武将牌上的牌以此将手牌补至体力上限.<li>当你于回合外获得牌后,你可选择其中1张牌立即使用.',
                        zmleyuanqudong: '乐园驱动',
                        zmleyuanqudong_info: '当你使用【杀】对其他角色造成伤害时,若目标未翻面则你可弃置2张手牌令对方翻面.<br>&nbsp若触发此技能时你的能量达到70点,则你清空能量将效果改为令该伤害+1.',
                        zmlingxiuqizhipx: '领袖气质',
                        zmlingxiuqizhipx_info: '其他角色出牌阶段结束时,若此阶段其使用过至少3张不同类别的牌或3张类别相同的牌,你可令你们双方充能5点.',
                        zmyandizhijian: '炎帝之剑',
                        zmyandizhijian_info: '<li>其他角色使用【杀】对目标造成伤害后,你可将1张基本牌视为【火杀】对其使用,若此杀造成了伤害则原目标回复1点体力.<li>若你发动此技能时能量达到60点,则发动后选择条件改为基本牌及红色牌,且此杀造成伤害时将清空能量改为对此杀目标造成2点火焰伤害.',
                        zmlingxiuqizhig: '领袖气质',
                        zmlingxiuqizhig_info: '其他角色/你的回合开始时,若你/其他角色的体力值大于对方,则你/其他角色可令对方回复1点体力,自己流失1点体力并摸1张牌.',
                        zmkuangluandeguigongzi: '狂乱的贵公子',
                        zmkuangluandeguigongzi_info: '<li>出牌阶段结束时,若你本回合使用了牌且数量不大于你的体力值,则你可消耗30点能量摸等量的牌并视为使用了1张【过河拆桥】.<li>你使用【过河拆桥】指定目标时目标的手牌可见,且弃置了目标的红色牌后你对其造成1点火焰伤害.',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:综漫季刊壹/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊壹/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊壹');
                lib.config.characters.add('综漫季刊壹');
                lib.translate['综漫季刊壹_character_config'] = `综漫季刊壹`;
                return QQQ;
            });
        },
        config: {
            ZMSLTB1: {
                name: '势力图标',
                init: false,
                intro: '开启后将本包势力图片化显示,可能与部分不支持DIY势力图片调用的美化扩展冲突.',
            },
            zmthelp: {
                name: '名词释义',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于职阶✪:是作为对众多世界观下英灵统合分类进行的规则标准.根据武将原作中的能力、经历、职业、功法等划分出不同职阶.',
                    3: '英灵根据特性被赋予适合的职阶.职阶间不存在克制.【Dominator】作为BOSS职阶强度较高.',
                    4: '✪关于宝具✪:每个英灵独有的特殊能力,可在武将信息栏查看.',
                    5: '宝具是作为英灵原有的、最独特的能力与成就的具现化,可以是武器、法术、异能、规则等等..各有不同的运行模式.',
                    6: '不同宝具与英灵之间不存在平衡.原作中过强的能力套入规则后会有限制,较弱的能力略有提升.',
                    7: '✪职阶一览✪',
                    8: '【Saber——剑士】 适格者以刀剑闻名,或具备相关传说及概念能力等..',
                    9: '【Archer——弓兵】 适格者以射击或相近的远程手段闻名,或具备相关传说及概念能力等.',
                    10: '【Lancer——枪兵】 适格者以长兵器或穿刺类手段闻名,或具备相关传说及概念能力等.',
                    11: '【Fighter——斗士】 适格者以格斗或作为战士闻名,或具备相关传说及概念能力等.',
                    12: '【Rider——骑兵】 适格者以驾驭或统御闻名,或具备相关传说及概念能力等.',
                    13: '【Mechanic——械师】 适格者以理学或机械闻名,或具备相关传说及概念能力等.',
                    14: '【Caster——施法者】 适格者以术法闻名,或具备相关传说及概念能力等.',
                    15: '【Smability——异能者】 适格者以特异能力闻名,或具备相关传说及概念能力等.',
                    16: '【Assassin——暗匿者】 适格者以隐匿或突袭暗杀闻名,或具备相关传说及概念能力等.',
                    17: '【Berserker——狂战士】 适格者以非理性或本能行事闻名,或具备相关传说及概念能力等.',
                    18: '【Guardian——守卫者】 适格者以守护防卫或愈疗闻名,或具备相关传说及概念能力等.',
                    19: '【Guardian——裁定者】 适格者以权威律令或守序裁决闻名,或具备相关传说及概念能力等.',
                    20: '【Undead——不眠者】 适格者以不死性或非生者闻名,或具备相关传说及概念能力等.',
                    21: '【Foreigner——降临者】 适格者以异星领域外来客或混沌关联者闻名,或具备相关传说及概念能力等.',
                    22: '【Dominator——上位者】 适格者以高等生命或权能闻名,或具备相关传说及概念能力等.',
                    23: '【Assistant——搭档】 已存在英灵所制造/转化/召唤而来的衍生角色,及被选中的高适性角色被赋予此职阶.',
                    24: '✪关于玉碟✪:每场战斗胜利后玩家可获得不等数量的玉碟,保底掉落1玉碟.',
                    25: '✪玉碟召唤✪:每3玉碟可进行1次玉碟召唤,或使用30玉碟进行10次召唤.根据召唤结果可获得各职阶中的隐藏英灵或解锁可升级的搭档角色.',
                    26: '✪关于卡池✪:评级越高的角色被抽到的概率越低;抽卡时可能抽到已有的角色.',
                    27: '✪隐藏英灵✪:通过玉碟召唤/兑换获得后才会出现在游戏中的特殊武将.',
                    28: '✪关于搭档✪:搭档角色只能通过玉碟召唤解锁,按强度分为1到5星,每1星代表搭档拥有1个技能或一种效果.',
                    29: '✪搭档特性✪:玩家开始游戏时可选择一名已解锁的搭档角色加入游戏;搭档不直接进行游戏,也无法被攻击.玩家可以点击桌面上的搭档图标可发动技能;搭档技冷却时间统一为三分钟.',
                    30: '✪搭档等级✪:搭档每使用一次技能都会获得100经验,随等级提升可解锁新的能力.',
                    31: '✪关于能量✪:每当角色进行摸牌阶段可根据摸牌数每张牌获得5点能量,且角色在自己的回合外获得牌时每次获得5点能量.',
                    32: '国战模式下能量获取翻倍.',
                    33: '某些角色可通过特有技能额外获得能量或赋予夺取能量.',
                    34: '能量的获取软上限为120点,超过该数字则无法从摸牌阶段获取能量,超过150点则无法通过固有方式获得能量.',
                },
            },
            zmthelp2: {
                name: '属性设定',
                init: '1',
                item: {
                    1: '查看',
                    2: '✪关于属性✪:英灵们根据特性具备不同的属性,这些属性有些与技能效果相关,有些则自带一些效果.',
                    3: '✪属性一览✪',
                    4: '【人形】 身体结构形态与要害接近灵掌人科,许多以此为假想敌锻炼的技术会限定对人形属性特攻.',
                    5: '【类人】 大体与人形有关,但拥有相当部分不属于人形的身体结构,因而不可与人形相并列.',
                    6: '【野兽】 用于与人形大相径庭的身体结构,涵盖众多生命形式.',
                    7: '【造物】 一般指被制造的非生命体,如物品道具等持有的属性..',
                    8: '【机械】 造物中分离出的一类,特指具备相当机械结构者持有的属性..',
                    9: '【死灵】 灵体,已死之物或与之类似的特性会被认定为此属性.',
                    10: '【龙血】 拥有龙类血脉的混血种或浅龙类概念者持有的属性.',
                    11: '【龙族】 纯血或高度纯血的龙族与概念上的龙族持有的属性.',
                    12: '【元素】 元素生命,或与自然力量深度相关者持有的属性..',
                    13: '【神性】 与神道/愿力相关,或神性血脉所持有的属性.通常与魔性不可共存.',
                    14: '【神圣】 与纯粹正愿力相关者所持有的属性.与魔性不可共存.',
                    15: '【魔性】 与魔道/负愿力相关,或魔性血脉所持有的属性.通常与神性不可共存.',
                    16: '【时空】 时间或空间深度相关者持有的属性.',
                    17: '【混沌】 高等力量之一,与世界底层要素:混沌相关联的属性.拥有最高优先级,无序扭曲的代名词,与肃正不可共存.',
                    18: '【肃正】 高等力量之一,与世界底层要素:秩序相关联的属性.为泛世界集体意志或规则相关的抑制力代名词,与混沌不可共存.',
                    19: '【巨大】 体型与智人种相比质量百倍以内的标志.',
                    20: '【超巨大】 体型与智人种相比质量百倍以上的标志.',
                    21: '【高等力量】 特殊类型的高位能力,具备较高优先级的属性;通常表现为概念/因果/权能等.',
                    22: '【高等生命】 存在本身即与世界底层相关的特殊生命,高等力量的上级形态,生命层次上的最高阶层.',
                },
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【综漫坛】的小部分武将分离而成,使单包体积不至于过大.分包仅包含卡面查看功能,请无视简介中的其它内容",
            author: '尧',
            version: '1.0',
        },
    };
});

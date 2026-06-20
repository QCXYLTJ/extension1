import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊陆',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_10kuangfafuna = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_12timaqima = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianzhuyin = `<img src=extension/综漫季刊陆/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_04douaerdelike = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_10kuangdusake = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linweierangsaiting = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linfangao = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_10kuangquan = `<img src=extension/综漫季刊陆/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongxian = `<img src=extension/综漫季刊陆/image/二星.png width="59" height="22">`;
            lib.characterTitle.zm_01jianbaer = `<img src=extension/综漫季刊陆/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jiandiyu = `<img src=extension/综漫季刊陆/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_10kuangjusha = `<img src=extension/综漫季刊陆/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_02gongyii = `<img src=extension/综漫季刊陆/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_05qihanxin = `<img src=extension/综漫季刊陆/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_09huminuotaosi = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09hushenzhiyunzhi = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_12tiaerge = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11rusapulan = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gonglingliu = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongtaizichangqin = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongluodelisi = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gongzhuli = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangdilu = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shayasiboge = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangpawa = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangjufu = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04dousulaiman = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04doukaiousi = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shatushanlirui = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qifuer = `<img src=extension/综漫季刊陆/image/三星.png width="59" height="22">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy6 = {
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
                    for (var i in lib.characterPack.综漫季刊陆) {
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
                    for (var i in lib.characterPack.综漫季刊陆) {
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
                                    np1.setBackgroundImage('extension/综漫季刊陆/image/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊陆/image/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊陆/image/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊陆/image/np000.png');
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
            lib.skill._zmtnlcz6 = {
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
                    for (var i in lib.characterPack.综漫季刊陆) {
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
            lib.translate.zm6ru = '裁';
            lib.translate.zm6ruColor = '#FFFF00';
            lib.group.push('zm6ru');
            lib.translate.zm6ti = '异';
            lib.translate.zm6tiColor = '#FFFF00';
            lib.group.push('zm6ti');
            lib.translate.zm6lin = '临';
            lib.translate.zm6linColor = '#FFFF00';
            lib.group.push('zm6lin');
            lib.translate.zm6do = '斗';
            lib.translate.zm6doColor = '#FFFF00';
            lib.group.push('zm6do');
            lib.translate.zm6kuang = '狂';
            lib.translate.zm6kuangColor = '#FFFF00';
            lib.group.push('zm6kuang');
            lib.translate.zm6gong = '弓';
            lib.translate.zm6gongColor = '#FFFF00';
            lib.group.push('zm6gong');
            lib.translate.zm6jian = '剑';
            lib.translate.zm6jianColor = '#FFFF00';
            lib.group.push('zm6jian');
            lib.translate.zm6qi = '骑';
            lib.translate.zm6qiColor = '#FFFF00';
            lib.group.push('zm6qi');
            lib.translate.zm6hu = '守';
            lib.translate.zm6qiColor = '#FFFF00';
            lib.group.push('zm6hu');
            lib.translate.zm6sha = '杀';
            lib.translate.zm6shaColor = '#FFFF00';
            lib.group.push('zm6sha');
            if (config.ZMSLTB6) {
                lib.translate.zm6ru = `<img src=extension/综漫季刊陆/image/zm6ru.png width="28" height="28">`;
                lib.translate.zm6chan = `<img src=extension/综漫季刊陆/image/zm6chan.png width="28" height="28">`;
                lib.translate.zm6lin = `<img src=extension/综漫季刊陆/image/zm6lin.png width="28" height="28">`;
                lib.translate.zm6hu = `<img src=extension/综漫季刊陆/image/zm6hu.png width="28" height="28">`;
                lib.translate.zm6dao = `<img src=extension/综漫季刊陆/image/zm6dao.png width="28" height="28">`;
                lib.translate.zm6ti = `<img src=extension/综漫季刊陆/image/zm6ti.png width="28" height="28">`;
                lib.translate.zm6do = `<img src=extension/综漫季刊陆/image/zm6do.png width="28" height="28">`;
                lib.translate.zm6ke = `<img src=extension/综漫季刊陆/image/zm6ke.png width="28" height="28">`;
                lib.translate.zm6sha = `<img src=extension/综漫季刊陆/image/zm6sha.png width="28" height="28">`;
                lib.translate.zm6gong = `<img src=extension/综漫季刊陆/image/zm6gong.png width="28" height="28">`;
                lib.translate.zm6qi = `<img src=extension/综漫季刊陆/image/zm6qi.png width="28" height="28">`;
                lib.translate.zm6kuang = `<img src=extension/综漫季刊陆/image/zm6kuang.png width="28" height="28">`;
                lib.translate.zm6jian = `<img src=extension/综漫季刊陆/image/zm6jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp426 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊陆/mp4/${Q}.mp4`;
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
            lib.skill._dieAudiozmjk6 = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊陆/audio', trigger.player.name);
                },
            };
            game.playzm6 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊陆/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm6t = function (bg, pos, time, func) {
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
                    name: '综漫季刊陆',
                    connect: true,
                    character: {
                        zm_02gongyii: ['male', 'zm6gong', 4, ['zmbaihongguanri', 'zmrendaoqingying', 'zmshirizhishang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】白虹贯日<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】秉人道持天命而出的上古射师,彼时连神灵也畏惧他的锋芒.<br>\n传说帝尧时天有金乌之子,十日临空,烈日之下山泽枯涸,妖兽径出食人;<br>\n帝尧请擅射之羿来解决危局,就这样羿先后灭杀了猰貐九婴大风等上古凶兽,最终以赤弓白箭射落九只金乌,一解十日之天灾.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_02gongxian: ['female', 'zm6gong', 4, ['zmyaogunxiezou', 'zmfanpanjiepai'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】叛逆节拍<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】真名瑞秋·冯·克里格,地下乐队<Middle Eyes>的吉他手兼主唱,热爱摇滚乐,常在不夜城的酒吧街里演出,当然,得是在<第三象限>街口的第一盏霓虹灯亮起之后.想要知道今晚弦的演出地点也很简单,哪个酒吧的场子最热,哪里就有弦出没.换句话说,有弦和弦的乐队的地方,酒吧今晚的生意也就有了保障——她太受欢迎了.<br>\n弦出身于上个世纪就迁居至莱纳赫的克里格家族,是即使在分家中也较为偏远的一支.两年前,弦带着她的吉他来到了条顿堡,毕竟,有哪个乐手会不想在条顿堡的不夜城里演出呢？这里简直就是摇滚乐的天堂,有着最多的听众,最大的场地,以及一对克里格的姐弟作为这一切的老板？<br>\n' + '【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_10kuangquan: ['male', 'zm6kuang', 4, ['zmshengya', 'zmxiaoyue'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性野兽.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】生牙<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】最可悲的觉醒者,一个对自己皮毛过敏的狼人...<br>\n犬,真名埃米尔.出生于喀尔巴阡,孤儿,14岁时经由X安排加入耶格尔事务所.从业五年,实际作为耶格尔的受托人至今已有六年.身体存在被改造过的痕迹,但改造似乎并没有实质性的作用.拜异能所赐,犬具有较高的攻击能力和打击承受能力,且能够依靠自身出色的嗅觉、听觉等为任务找寻不易被察觉的线索.在追踪、情报分析与野外生存方面有着相当专业的水准.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_10kuangdusake: ['male', 'zm6kuang', 4, ['zmchangdao', 'zmjixue', 'zmxuechang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】血债血偿<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★★★☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】长刀党首领,极度危险的异能者领袖.<br>\n真名腓特烈•冯•克里格,长刀党第三代<杜萨克>.长刀党干部多以武器之名为代号,<杜萨克>亦是一种刀的名字,也是长刀党首领历来的正式称呼.<br>\n条顿堡灰色地带的人都知道一个道理:杜萨克来了,一定不会有什么好事发生.如果他大张旗鼓的来了,一定会有一大批人去地狱报道.如今的长刀党经过洗牌已经彻底被腓烈特掌握,手下更有丧钟、巨斧、莎拉维尔等异能者高手;这批精于杀戮的中层连同镇压一切的杜萨克全部处于灵能的巅峰时期,成为克里格诸支脉中数一数二的强盛分支.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09huminuotaosi: ['female', 'zm6hu', 4, ['zmxushumigong', 'zmjuesimigong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】虚数迷宫<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】王权馆的小公主,力气很大,很在意别人把她和蛮牛米诺陶看作一体.<br>\n王权馆是觉醒者家族<克里格>分裂后的一支,由继承了真血的成员组成,试图重回克里格当年的辉煌.米诺桃斯真名为维罗妮卡•冯•克里格.其内向害羞,缺乏克里格族人应有的野心,唯独在异能与血统上无可挑剔.<br>\n米诺桃斯的血脉源自传说中的神性怪物米诺陶洛斯,经过长久岁月其能力已经异变为了对矢量空间的扰乱与调序——将空间属性变为异种迷宫.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_12tiaerge: ['female', 'zm6ti', 4, ['zmquannengshiye', 'zmruodianningshi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】全能视野<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】既魅魔从事直播行业后,用魔眼打电竞也不足为奇吧？<br>\n真名可可斯•铎拉霍,网名阿尔戈.目前是条顿堡职业电竞选手,虚鼠组织的成员.在网络上阿尔戈是神秘的风云人物,以绝对的操作与反射速度成为电子竞技的无冕之王.除了被黑客搞砸的时候,阿尔戈从没输掉过一场比赛,人们除了她的兔子头像对其一无所知...<br>\n阿尔戈的血脉源自传说中守护金羊毛的不眠之龙科尔喀斯,由此觉醒的能力名为<全能视野>.这份能力可以令使用者阅读目标的内在信息,甚至对其进行物质层面的影响.<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_05qifuer: ['female', 'zm6qi', 4, ['zmleisu', 'zmdianchang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性野兽.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】雷速电场<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】碧眼之蛇最快的骑手,毛手毛脚的急躁姑娘.<br>\n芙尔是组织中出了名的急性子,每每巨灵发布任务的余音还在基地中回响,芙尔便已不见踪影.无法分辨她是快走还是小跑,芙尔总是在高速移动着.<br>\n或许是血脉使然,芙尔就像是开关损坏了的玩具车,在电量耗尽前只能任其横冲直撞;不巧的是——芙尔还能自己发电.每当不得不停止时她那无处安放的电荷就会胡乱攻击周围的一切.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_10kuangjufu: ['male', 'zm6kuang', 5, ['zmhonglie', 'zmbaoran'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】迸燃<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】长刀党行动组负责人,脾气大不好惹.<br>\n真名阿格尼亚•哈特曼,组织代号巨斧.人如其名是个简单粗暴的硬汉.巨斧不会没由来的爆发,但很容易被引燃.刨去会破坏公共设施这点他其实是个风评不错的队长,办事可靠又关心兄弟.<br>\n巨斧在加入长刀党前与父亲一样曾以打黑拳为生,直到父亲在地下格斗场失踪他又调查无门,才会想到依靠长刀党势力查案.巨斧的入职过程非常简单,他赤手空拳从大厦一层打到了长刀党首领杜萨克的办公室,之后办公室内接连传出巨响,随即巨斧被抬进了急救室.待他几日后苏醒时所有人都认可了新伙伴的加入.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_08shayasiboge: ['male', 'zm6sha', '3/4', ['zmyouying', 'zmyingzhan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】影战<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】长刀党的新人,不善言谈,情商接近零.<br>\n亚斯伯格过去被所有人视作怪胎.他行为刻版、生硬、程式化,每天都在一个时间干同一件事,就算和别人交流也很难以理解他人的言外之意.由于缺乏正向的社交,亚斯伯格经常向自己的影子诉苦.这样的行为在他人看来无比诡异,更导致亚斯伯格的社交每况愈下.一次校园霸凌中,亚斯伯格发现了自己的异能.化身为怪物的影子瞬间就将对自己拳打脚踢的同学撕裂.由于缺乏目击证人,亚斯伯格被无罪释放.<br>\n杜萨克老板对亚斯伯格来说意义非凡.影子杀人事件之后亚斯伯格就受到了长刀党的关注,并很快得到了长刀党的保护.长刀党成为了唯一一个接纳亚斯伯格的群体.随着亚斯伯格的努力,他也逐渐得到杜萨克的重用.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_04dousulaiman: ['male', 'zm6do', 4, ['zmyitijihuo', 'zmshinengmiyao'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】失能秘钥<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】圣堂的战斗牧师,虔诚刻板却不盲从.<br>\n真名苏莱曼•伊萨姆•麦穆杜哈.除了信仰,他的人生不需要其他东西.每个天还没亮的清晨,苏莱曼都会认真地祷告,向神倾诉自己的罪;这项在他生命中印刻了20多年的习惯未曾有一天中断过.<br>\n这样虔诚的信者会出现在战场上杀戮敌人,而不是在教堂里传播福音或多或少都让人难以理解.毕竟是圣堂的命令,苏莱曼还是会选择遵守,但明显有违神意的命令还是会让他对圣堂本身产生质疑.<br>\n苏莱曼的能力[神之使],是将自己的全部交付给<神>,并使自己的躯体成为<神>的媒介的能力.只有最虔诚的信徒才能成为神与世间的链接,只有最无瑕的灵魂才能经受神的考验.可这种奉献对身体的负担极大,每当使用异能后,所罗门都有一小段时间动弹不得.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gonglingliu: ['female', 'zm6gong', 4, ['zmfenhongzidan', 'zmzhimingyouhuo'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】致命诱惑<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】条顿堡超人气主播,她可是各种意义上天生适合这个职业的.<br>\n几乎没有人知道,第一主播零六的真名是朱迪•冯•克里格.作为觉醒者家族克里格的血裔,零六自然也拥有超自然生命的血脉...还是魅魔血脉.<br>\n能够拥有如今称得上辉煌的成绩,自然是因为零六本身的演出水准与用心,不过也跟她使用异能魅惑观众脱不了干系.不过这又如何呢？她就是那种随心所欲去生活的类型.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_11rusapulan: ['male', 'zm6ru', 4, ['zmheibaibianzheng', 'zmlichangzhuanhuan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】黑白辨正<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】游走于灰色地带的<顾问>,这样身份的家伙十有八九都是欺诈师.<br>\n真名伯纳德•拉斯提格,这个名字在他青年时候就被封存了,取而代之的是层出不穷的假名字与假身份.城府越深的人表面上越看不出任何异样.进行每一单<生意>时大家都不会注意老板身后的小角色,更不会想到他在里社会有多大能量,甚至还是这个集团的主导者之一,以及是强大的异能者？<br>\n萨普兰喜欢魔术、人心和一切可以翻转的东西.这种嗜好就像他显而易见的血脉源头——反逆的堕天者那样,恶质又傲慢.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongluodelisi: ['female', 'zm6gong', 4, ['zmyanyanzhuangtian', 'zmershiyidianyanchong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】二十一点炎铳<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】卡伦斯行会成员,活用法律和暴力的合同律师.<br>\n出身寒微的罗德利斯很早就加入了卡伦斯行会工作,之后很快靠着手中的火铳在罗格<一战成名>并晋升管理者.<br>\n在担任护卫时期罗德利斯就已有很多人尽皆知的事迹,比如曾单独击杀了拦住货道的怪物以及孤身一人将被劫走的货物抢回.成为合同律师后,会内更传出了她用<手段>把打算拒签合同的客人硬生生逼回谈判桌的传闻.对于行会来说,能文能武的律师可谓完美.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_10kuangdilu: ['female', 'zm6kuang', 4, ['zmyinhongshike', 'zmmoxiangtianqu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】魔翔天驱<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】疯疯癫癫的狂战士,拥有操作血与刺激生物异化的能力.<br>\n迪露是碎镜组织的实验体,干部萨菲罗的助手.迪露幼年被绑架后,长久折磨中因阵线的不作为和伪善逐渐癫狂.即使后来她知晓了绑架折磨自己的其实也是碎镜的干部,但对阵线无谓的报复还是要继续.说到底,她只是寻找一场激烈地葬礼而已.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_04doukaiousi: ['male', 'zm6do', 4, ['zmsantouquan', 'zmsanchongjianya'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】三重尖牙<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】长刀党的守门人,因为三重人格的关系常年处于睡眠不足状态.<br>\n真名弗里茨•瑟布鲁斯,常年镇守长刀党本部,背后也被人称为长刀党的看门犬.因为觉醒的超自然血统原因,被这么称呼也不无道理;毕竟从弗里茨灵纹解放后出现的地狱三头犬形象来看不管是喜欢看门还是三重人格都可以得到解释.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gongzhuli: ['female', 'zm6gong', 4, ['zmxuemaidianfeng', 'zmnvwangshoujian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】女王手剑<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】王权馆核心人物,思想非常古板固执的老派贵族.<br>\n真名朱利安·冯·克里格,王权馆鹰派代表人物.这一脉庞大的股权,便是由她操控并成倍地增值着,推进着她复兴克里格的梦想.<br>\n<克里格的血脉必须纯净>,这是古老祖先的意志.为了保证极致的血脉不被劣化,朱莉这一脉的克里格始终只与真血族裔结合.舍弃了大量近亲通婚带来的先天残疾后,后代中确实也诞生过一些顶级异能者,更有像朱莉这样返祖觉醒的罕见个例.<br>\n克里格分裂后,朱莉选择依附当时代表真血族裔的阿尔德里克,成为王权馆核心成员.遗憾的是,了解了阿尔德里克后,朱莉发现传说中杀戮肄野的<末日>竟然还是个不愿同室操戈的怀柔派.直到末日的儿子们执掌王权馆后,朱莉才看到收复诸支脉,让克里格重回巅峰的希望.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_10kuangpawa: ['female', 'zm6kuang', 4, ['zmxuezhiemo', 'zmjiefangzhixue'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】解放之血<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】喜欢撒谎,脾气暴躁,特别不爱干净的笨蛋.<br>\n帕瓦是因生灵对血的恐惧而诞生的血之恶魔,擅长用血液战斗,可以用自身的血液制造出各种各样的武器和物品.自称<全盛期是超恐怖的恶魔>,然而因为她见到强敌不是逃跑就是装死导致没有怎么表现过.<br>\n自称人类至下主义者,认为猫都是比人类更高等的生物,人类在帕瓦的眼里算是最低等的生物.几乎在遇上自己很讨厌的事情时在前面都会带上<人类>这个词,比如<人类真是有够蠢啊!>等.讨厌撒谎,认为撒谎是只有肮脏的人类才会干的事,然而自己一旦闯祸就会诬陷到人类头上...<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_02gongtaizichangqin: ['male', 'zm6gong', 5, ['zmxingyunyayue', 'zmfanxianheyue', 'zmkeyuaiyue'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】弓兵<br>\n' + '【宝具】繁弦和乐<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】醒榣山,藏琴印匣,敢令大荒弦辍. 妙音绝,南荒祷火,子夜磬声泠彻.<br>\n<山海经·大荒西经>:<祝融生太子长琴,是处摇山,始作乐风.有五彩鸟三名,一曰皇鸟,一曰鸾鸟,一曰凤>.<br>\n<荒文辑异·南荒卷·卷六十六>:<太子长琴生摇山,幼为祝融所养,生来携琴,因是名.好乐,善琴,性傲,以第二琴师居.自矜,好兵.><br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_09hushenzhiyunzhi: ['female', 'zm6hu', 4, ['zmchongyun', 'zmcangming'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性野兽.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】冲云&沧溟<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】⁣⁣波凌千济,涛濯芝语,彤衣笑踏千潮. 挥袖水激,扬灯焰起,巫山此去迢迢.<br>\n<荒文辑异·北荒卷·卷三十四>:<神芝,芝妖也,云芝胞姐.尝游于海域,适蒲牢.蒲牢以己之瓢为履,载此片川之水,赠之.神芝不复以去水久而脱水怆于怀.><br>\n<荒文辑异·北荒卷·卷三十四>:<云芝,芝妖也,神芝胞妹.乃姊神芝以为芝者灵气渡之,云芝乃活.尝为巨鸟噬,幸内有神芝灵气,乃反噬成,可飞.><br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_08shatushanlirui: ['male', 'zm6sha', 4, ['zmqingqiuzhizhu', 'zmyiliyoujun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性野兽.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】青丘之主<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】青丘独断,主河山、久备军征.千载逝,忆昔年九尾,犹自心惊.<br>\n<山海经·海外东经>:<朝阳之谷……青丘国在其北,其狐四足九尾.><br>\n涂山黎睿,今青丘主,性固激、喜兵好伐.因惮其弟黎信,与饕餮谋.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_12timaqima: ['female', 'zm6ti', '4/4/4', ['zmzhipeiemo', 'zmjueduizhipei'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】绝对支配<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★★☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】难以琢磨的危险小姐.很喜欢人类,就像人类喜欢狗一样.<br>\n玛奇玛真实身份为支配恶魔,由众生对<支配>的恐惧而诞生.玛奇玛可以支配她主观上所认为比自己低等的存在,表现为获得对方的能力与五感,转嫁伤害或将对方变为傀儡等.<br>\n对外,玛奇玛是内阁直属的恶魔猎人,统领并培育着公安对魔特别行动4课.与这样危险的恶魔契约来对抗恶魔,究竟是政府的无奈之举还是他们早已处于恶魔的支配之下了呢？<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianbaer: ['male', 'zm6jian', 4, ['zmtianciguanmian', 'zmshenweihuguang', 'zmshizilingzang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】十字灵葬<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】王权馆二号人物,处理所有需要动武的大事件,可谓是王权馆的剑尖.<br>\n真名莫捷里尔•冯•克里格,他和哥哥是王权馆前领袖阿尔德里克之子,也是如今王权馆的执掌者.老领袖并不认可激进派的两兄弟如今的发展规划,但能让那位<末日>退位让贤足以证明两兄弟的实力.没有人质疑莫捷里尔会超越他的父亲,年纪轻轻就足与末日匹敌的实力是兄长君临王权馆的基础.<br>\n莫捷里尔觉醒的血脉被他称为雷电君王,那种改变天相支配雷电的能力和<巴尔>的称号很容易联想到传说中腓尼基人崇拜的那位代表强大、支配、法律的雷雨之神.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_04douaerdelike: ['male', 'zm6do', 5, ['zmzhuorejiaotu', 'zmhuijinhuanghun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】灰烬黄昏<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】王权馆的前首领,有<末日>逸名的怀柔派领袖.<br>\n真名阿尔德里克•冯•克里格,王权馆辉煌的缔造者.克里格分裂后,被称为王权馆的一脉攫取了最大利益,成为了混乱的中心.克里格内战最纷乱的年代,年轻的阿尔德里克继承了领袖的位置;他凭铁血手腕与武力击退外敌,奠定王权馆在诸支脉中唯我独尊的地位,把克里格最后的旗帜钉在了家族的土地上.于无数被岩浆冲刷的战场上,阿尔德里克被憎恨者称为末日.<br>\n阿尔德里克的能力名为焦土.通过将身边一定空间划定为<焦土>,焦土中任何事物都会逐渐升温至融碎.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_14linweierangsaiting: ['male', 'zm6lin', 4, ['zmmingyunjushe', 'zmmingyunchongqi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性野兽.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】命运重启<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】不要小看这名刚出生一个月的婴儿,许多神灵的力量都没有低谷期的他强大.<br>\n尊名<幸运的化身,预知未来的怪物,传播厄难的灾祸,贝克兰德所有命运的见证者,混乱与疯狂的看守.<br>\n威尔·昂赛汀的位格为怪物途径序列1<命运之蛇>,担任生命学派中命运议会的议长.这样的大人物之所以是婴儿形态,是因为祂对自己发动了命运重启的能力,让自己通过无数次转生活过悠久的岁月,寻找更进一步的契机.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianzhuyin: ['male', 'zm6jian', 5, ['zmzhongshanmingmie', 'zmwudaozhenji'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性龙族.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性神性.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】武道真极<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】寂夜钟山静,冷电中天骋.云巅论武,长锋秉,期骁猛.<br>\n<山海经·海外北经>:<有神人面蛇身而赤,直目正乘.其瞑乃晦,其视乃明……是烛九阴,是谓烛龙.><br>\n烛阴,又名烛龙.即使在先天神魔中也是最强大的几位之一.传说祂的神目睁开时天地为昼,闭合时暗夜降临;呼吸之间四季轮转,举手投足已是寻常生灵难以想象的宏大伟力.<br>\n即便不使用神通,烛阴也称得上绝对强者.祂所居住的钟山在大荒乃是武道圣地,参加钟山论武挑战烛阴是八荒勇士眼中的无上荣耀......<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_10kuangfafuna: ['female', 'zm6kuang', 5, ['zmlaiyindehuangjin', 'zmzhushenzhihuanghun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性龙血.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】诸神之黄昏<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】<尼伯龙根的指环>中灾难的根源,莱茵的黄金之化身.<br>\n相传,莱茵河底沉睡着一块具有魔力的黄金.<谁用莱茵的黄金铸造出指环,谁就能占有世界的财富,它将带来无边的权力.只有断绝爱情的人才能带走它.><br>\n<莱茵的黄金带来无边的权力,它的魔力也让佩戴它的人死于非命……指环的主人将沦为指环的奴隶,这是痛苦的尼伯龙人对指环的祝福……保护它吧,好好把它占有.><br>\n诅咒的指环带来无尽黄金.黄金无尽,诅咒亦无尽.不管邪龙、英雄还是诸神都被这罪火引向毁灭.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_10kuangjusha: ['male', 'zm6kuang', 5, ['zmcichangzhuandongj', 'zmtianwushadao', 'zmfengkuangliliang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】天武杀道<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】最疯狂的磁场强者,陪白武男一起癫的好兄弟.<br>\n巨鲨,原蓝国最高领袖,将天武杀道推演至前无古人后无来者的绝世杀才.<br>\n与创始人天道一般,巨鲨在修行有成后亦感受到自己的凶残本性.失控击杀师弟刹严后,巨鲨卸去领袖位置在狱中过了几十年养鱼习武的简单生活.<br>\n大地战争时期,新领袖刹亚请巨鲨出关,允诺给他弟子黑鲨白鲨竞争领袖的机会.原本照这样巨鲨后半生也不会有如何波折,但与强敌两败时他却遭到刹亚灭口,蓝国出卖,弟子更被杀尽.逃生后再无挂念的巨鲨彻底投身天武杀道的嗜血真意,将自己的霸道、自私、残忍毫不压抑地解放,成为当世最强的狂徒和一个绝对恐怖的复仇者.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_01jiandiyu: ['male', 'zm6jian', 5, ['zmcichangzhuandongd', 'zmdiyuzhijian', 'zmdiyuzhanshen'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】地狱战神<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】最为天才睿智的磁场强者.若非两世都被围杀,史上最强的位置恐也非白武男所有.<br>\n地狱真名元海,元祖磁场转动能力者中最早到达九十九万匹的强者.地狱在那个时代曾统领一国,举世无敌.能力已达极限的他看到自己死亡的命运,但因为不愿使用卑鄙手段破局和为在未来帮到自己义子,最终败于多名当世至强者的围攻下.<br>\n地狱曾创下地狱之剑等多门功法,而其独有的<地狱战神>更被后世称为无敌绝学,只要练成便可无敌于天下.这门功法来自于亲哥战神为地狱牺牲后,地狱成长过程中日日分裂自己的意识幻想大哥仍在,并一心二用的生活,拥有完全境界后终于将大哥具现而出.<br>\n战神出现时地狱心神两分而精神不衰,力量不减;大哥战神不但与地狱心念相通更可独立思考战斗,只是消耗翻倍.任何人修成此绝学战力何止提升两倍,故此地狱战神被后世评为天下第一神功,直至磁场转动的时代终结...<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_05qihanxin: ['male', 'zm6qi', 4, ['zmguoshi', 'zmbingxian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】兵仙<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】兵家传人,当世人称国士无双,兵仙神帅的千古奇才.<br>\n韩信为西汉开国功臣、兵家谋战派代表人物.少时韩信虽落魄但熟读兵书,秦末乱世时投奔楚霸王项羽但不得重用,后投刘邦.经萧何引荐刘邦发现韩信才华,力排众议将其从小吏直升大将军.<br>\n韩信掌兵后改军制谏军略,与刘邦分兵后孤军一支先破楚军于京、索之间,再于十月内以少胜多连灭魏代赵燕四国.刘邦成皋兵败韩信部支援其精兵,之后短时间内以新募之兵攻下齐国 ,随即全歼援齐的龙且二十万楚军主力.<br>\n与屡战屡败的刘邦部相比,韩信部以极短时间在种种不利条件下打出了前无古人的绝世战功,令项羽主动说和愿与其三分天下.但韩信并未背叛势弱的主公,带兵与刘邦会师垓下,彻底歼灭楚军,一统天下.<br>\n完成平天下的最高成就时,韩信年仅29岁,王侯将相他都曾任过.面对这刚刚壮年功高盖主的英杰,年近60的刘邦自不敢将他留给自己幼子统领.35岁时韩信死于宫中,次年刘邦病逝.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_14linfangao: ['female', 'zm6lin', 4, ['zmhuangzhiwu', 'zmxingyueye', 'zmlingbiaozhihun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊陆/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊陆/image/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊陆/image/属性中立邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】星月夜<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】既是名画家,又是向日葵妖精,还是邪神的眷者,塞满各种设定的阴暗少女.<br>\n文森特·梵高是活跃于十九世纪欧洲的画家,作品在其自杀后获得了极高的评价.在史实中当然是男性,名字、肖像画,以及为数不多的照片可以证明这点.<br>\n另一方面,自称梵高身着少年装束出现的这位降临者的外表与性别都与史实不同.但是,她的绘画才能却毋庸置疑是梵高本人.饭量大、爱开玩笑、作画杂乱无章且笑起来很阴森.<br>\n事实上,她的本性究竟是——<br>\n灵基的八成是疯狂的宁芙,一成五来自虚数的黑匣子,剩余部分被画家梵高的记忆与绘画才能所占据.是由未知外神被梵高吸引,进而肆意创造的异常英灵.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                    },
                    skill: {
                        zmzhuorejiaotu: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            mark: true,
                            marktext: '焦',
                            intro: {
                                markcount(storage, player) {
                                    var a = player.storage.zmzhuorejiaotu_1;
                                    var b = player.storage.zmzhuorejiaotu_2;
                                    var c = player.storage.zmzhuorejiaotu_3;
                                    return a + b + c;
                                },
                                content(storage, player) {
                                    var str = ',全部删除后重置:';
                                    if (player.storage.zmzhuorejiaotu_1 == 1) str += '<br>&nbsp①摸1张牌.';
                                    if (player.storage.zmzhuorejiaotu_2 == 1) str += '<br>&nbsp②此杀不可响应.';
                                    if (player.storage.zmzhuorejiaotu_3 == 1) str += '<br>&nbsp③此杀变为火属性.';
                                    return '以下为剩余选项' + str;
                                },
                            },
                            init(player) {
                                player.storage.zmzhuorejiaotu_1 = 1;
                                player.storage.zmzhuorejiaotu_2 = 1;
                                player.storage.zmzhuorejiaotu_3 = 1;
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (!event.targets) return false;
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                event.num1 = 0;
                                event.num2 = 0;
                                event.num3 = 0;
                                player.chooseTarget('是否对一名此杀目标发动【灼热焦土】？', function (card, player, target) {
                                    return trigger.targets.includes(target);
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = 999;
                                    game.countPlayer(function (current) {
                                        if (current.isMinHp()) {
                                            num = current.hp;
                                        }
                                    });
                                    if (!player.hasSkill('zmhuijinhuanghun_1') && player.hasSkill('zmhuijinhuanghun') && player.storage.zmhuijinhuanghun > num) {
                                        player.addSkill('zmhuijinhuanghun_1');
                                        game.playzm6('zmaerdelike');
                                        game.mp426('zmaerdelike');
                                        if (player.name == 'zm_04douaerdelike' || player.name1 == 'zm_04douaerdelike') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身阿尔德里克.png');
                                        } else if (player.name2 == 'zm_04douaerdelike') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身阿尔德里克.png');
                                        }
                                    } else game.playzm6(['zmzhuorejiaotu1', 'zmzhuorejiaotu2', 'zmzhuorejiaotu3', 'zmzhuorejiaotu4', 'zmzhuorejiaotu5', 'zmzhuorejiaotu6'].randomGet());
                                    event.target = result.targets[0];
                                    player.line(result.targets, 'fire');
                                } else event.finish();
                                ('step 2');
                                var list = ['摸一张牌', '此杀不可响应', '此杀变为火属性'];
                                if (player.storage.zmzhuorejiaotu_1 == 0) {
                                    list.remove('摸一张牌');
                                }
                                if (player.storage.zmzhuorejiaotu_2 == 0) {
                                    list.remove('此杀不可响应');
                                }
                                if (player.storage.zmzhuorejiaotu_3 == 0) {
                                    list.remove('此杀变为火属性');
                                }
                                if (list.length) {
                                    event.target
                                        .chooseControl(list, function () {
                                            if (player.storage.zmzhuorejiaotu_1 == 1) return '摸一张牌';
                                            return list.randomGet();
                                        })
                                        .set('prompt', '须选择一项执行');
                                } else {
                                    player.storage.zmzhuorejiaotu_1 = 1;
                                    player.storage.zmzhuorejiaotu_2 = 1;
                                    player.storage.zmzhuorejiaotu_3 = 1;
                                    player.markSkill('zmzhuorejiaotu_1');
                                    player.markSkill('zmzhuorejiaotu_2');
                                    player.markSkill('zmzhuorejiaotu_3');
                                    event.goto(2);
                                }
                                ('step 3');
                                if (result.control == '摸一张牌') {
                                    event.num1 = 1;
                                    event.target.draw();
                                    player.storage.zmzhuorejiaotu_1 = 0;
                                }
                                if (result.control == '此杀不可响应') {
                                    event.num2 = 1;
                                    trigger.directHit = true;
                                    player.storage.zmzhuorejiaotu_2 = 0;
                                }
                                if (result.control == '此杀变为火属性') {
                                    event.num3 = 1;
                                    trigger.card.nature = 'fire';
                                    if (get.itemtype(trigger.card) == 'card') {
                                        var next = game.createEvent('zmzhuorejiaotu_clear');
                                        next.card = trigger.card;
                                        event.next.remove(next);
                                        trigger.after.push(next);
                                        next.setContent(function () {
                                            delete card.nature;
                                        });
                                    }
                                    player.storage.zmzhuorejiaotu_3 = 0;
                                }
                                ('step 4');
                                if (player.storage.zmzhuorejiaotu_1 == 0 && player.storage.zmzhuorejiaotu_2 == 0 && player.storage.zmzhuorejiaotu_3 == 0) {
                                    player.storage.zmzhuorejiaotu_1 = 1;
                                    player.storage.zmzhuorejiaotu_2 = 1;
                                    player.storage.zmzhuorejiaotu_3 = 1;
                                    if (trigger.card.nature == 'fire') trigger.baseDamage++;
                                    player.getStat().card.sha--;
                                }
                                ('step 5');
                                var num = 999;
                                game.countPlayer(function (current) {
                                    if (current.isMinHp()) {
                                        num = current.hp;
                                    }
                                });
                                if (player.hasSkill('zmhuijinhuanghun') && player.storage.zmhuijinhuanghun > num) {
                                    var list = ['摸一张牌', '此杀不可响应', '此杀变为火属性'];
                                    var list2 = ['摸一张牌', '此杀不可响应', '此杀变为火属性'];
                                    if (player.storage.zmzhuorejiaotu_1 == 0) {
                                        list2.remove('摸一张牌');
                                        list.remove('摸一张牌');
                                    }
                                    if (player.storage.zmzhuorejiaotu_2 == 0) {
                                        list2.remove('此杀不可响应');
                                        list.remove('此杀不可响应');
                                    }
                                    if (player.storage.zmzhuorejiaotu_3 == 0) {
                                        list2.remove('此杀变为火属性');
                                        list.remove('此杀变为火属性');
                                    }
                                    if (event.num2 == 1) list2.remove('此杀不可响应');
                                    if (event.num3 == 1) list2.remove('此杀变为火属性');
                                    if (list.length) {
                                        player
                                            .chooseControl(list, function () {
                                                if (player.storage.zmzhuorejiaotu_1 == 1) return '摸一张牌';
                                                if (list2.length) return list2.randomGet();
                                                return list.randomGet();
                                            })
                                            .set('prompt', '须选择一项执行');
                                    }
                                } else event.finish();
                                ('step 6');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                    player.storage.zmzhuorejiaotu_1 = 0;
                                }
                                if (result.control == '此杀不可响应') {
                                    trigger.directHit = true;
                                    player.storage.zmzhuorejiaotu_2 = 0;
                                }
                                if (result.control == '此杀变为火属性') {
                                    trigger.card.nature = 'fire';
                                    if (get.itemtype(trigger.card) == 'card') {
                                        var next = game.createEvent('zmzhuorejiaotu_clear');
                                        next.card = trigger.card;
                                        event.next.remove(next);
                                        trigger.after.push(next);
                                        next.setContent(function () {
                                            delete card.nature;
                                        });
                                    }
                                    player.storage.zmzhuorejiaotu_3 = 0;
                                }
                                ('step 7');
                                if (player.storage.zmzhuorejiaotu_1 == 0 && player.storage.zmzhuorejiaotu_2 == 0 && player.storage.zmzhuorejiaotu_3 == 0) {
                                    player.storage.zmzhuorejiaotu_1 = 1;
                                    player.storage.zmzhuorejiaotu_2 = 1;
                                    player.storage.zmzhuorejiaotu_3 = 1;
                                    if (trigger.card.nature == 'fire') trigger.baseDamage++;
                                    player.getStat().card.sha--;
                                }
                                player.markSkill('zmzhuorejiaotu_1');
                                player.markSkill('zmzhuorejiaotu_2');
                                player.markSkill('zmzhuorejiaotu_3');
                            },
                        },
                        zmhuijinhuanghun: {
                            group: ['zmtrenxing', 'zmtmoxing'],
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature && !player.hasSkill('zmhuijinhuanghun_2');
                            },
                            init(player) {
                                player.storage.zmhuijinhuanghun = 0;
                            },
                            content() {
                                player.addTempSkill('zmhuijinhuanghun_2', { player: 'phaseBegin' });
                            },
                            subSkill: {
                                1: {},
                                2: {
                                    audio: 'ext:综漫季刊陆/audio:4',
                                    trigger: {
                                        global: 'phaseDrawBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmt_np >= 10 && event.num >= 1;
                                    },
                                    check(event, player) {
                                        if (player.storage.zmhuijinhuanghun <= 3) return get.attitude(player, event.player) <= 0;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 10;
                                        player.line(trigger.player, 'fire');
                                        trigger.num -= 1;
                                        player.storage.zmhuijinhuanghun += 1;
                                    },
                                },
                            },
                        },
                        zmshenweihuguang: {
                            init(player) {
                                player.storage.zmshenweihuguang = false;
                            },
                            shaRelated: true,
                            nobracket: true,
                            trigger: {
                                global: 'shaBefore',
                            },
                            filter(event, player) {
                                if (!event.targets) return false;
                                return player.storage.zmt_np >= 20;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var bma = 0;
                                var nff = 0;
                                var att = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    if (trigger.targets[i].countCards('h') > 0 || trigger.targets[i].getEquip('bagua')) nff++;
                                    if (get.attitude(player, trigger.targets[i]) > 0 && trigger.targets[i].hp == 1 && trigger.targets[i] != player) bma++;
                                    att += get.effect(trigger.targets[i], { name: 'sha' }, trigger.player, trigger.player);
                                }
                                event.num = 0;
                                var list = ['一次', '二次', '取消'];
                                player
                                    .chooseControl(list, function () {
                                        if (bma > 0) return '取消';
                                        if (get.attitude(player, trigger.player) < 0 && trigger.directHit) return '二次';
                                        if (get.attitude(player, trigger.player) > 0 && trigger.player.hp == 1 && !trigger.player.hasSkillTag('nothunder')) return '取消';
                                        if (get.attitude(player, trigger.player) > 0 && nff == 0) return '取消';
                                        if (player.hasSkill('zmshizilingzang_1') && player.storage.zmt_np == 20) return '取消';
                                        if (att > 0 && get.attitude(player, trigger.player) <= 0 && trigger.player.hp == 1 && !trigger.player.hasSkillTag('nothunder')) return '二次';
                                        if (get.attitude(player, trigger.player) <= 0 && trigger.targets.includes(player) && player.countCards('h', { name: 'shan' }) == 0 && get.effect(player, trigger.card, trigger.player, trigger.player) > 0 && !player.getEquip('bagua') && !trigger.player.hasSkillTag('nothunder')) return '二次';
                                        if (att > 0 && get.attitude(player, trigger.player) > 0 && !trigger.directHit) return '一次';
                                        return '取消';
                                    })
                                    .set('prompt', `是否令${get.translation(trigger.player)}进行1或2次【浮雷】判定？如此做后当前对${get.translation(trigger.targets)}结算的【杀】不可响应`);
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                } else {
                                    player.line(trigger.player);
                                    if (get.attitude(player, trigger.player) >= 0) {
                                        if (trigger.player != player) {
                                            game.playzm6(['zmshenweihuguang1', 'zmshenweihuguang2', 'zmshenweihuguang3', 'zmshenweihuguang22', 'zmshenweihuguang21', 'zmshenweihuguang23', 'zmshenweihuguang24'].randomGet());
                                        } else game.playzm6(['zmshenweihuguang1', 'zmshenweihuguang2', 'zmshenweihuguang3', 'zmshenweihuguang12', 'zmshenweihuguang11', 'zmshenweihuguang13'].randomGet());
                                    } else game.playzm6(['zmshenweihuguang33', 'zmshenweihuguang32', 'zmshenweihuguang31'].randomGet());
                                }
                                if (result.control == '一次') {
                                    player.storage.zmt_np -= 20;
                                    event.num = 1;
                                    trigger.directHit = true;
                                }
                                if (result.control == '二次') {
                                    player.storage.zmt_np -= 20;
                                    event.num = 2;
                                    trigger.directHit = true;
                                }
                                ('step 2');
                                player.storage.zmshenweihuguang = true;
                                player.storage.zmshenweihuguang_1 = false;
                                if (event.num > 0) {
                                    event.card = game.createCard('fulei');
                                    event.num--;
                                    trigger.player.popup(event.card.name, 'thunder');
                                } else event.finish();
                                ('step 3');
                                if (!event.cancelled) trigger.player.judge(event.card);
                                ('step 4');
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
                                ('step 5');
                                if (event.card) event.card.delete();
                                if (player.storage.zmshenweihuguang_1 == true) {
                                    player.storage.zmshenweihuguang_1 = false;
                                    trigger.player.damage(1, 'thunder', 'nosource');
                                }
                                if (event.num > 0) {
                                    event.goto(2);
                                } else player.storage.zmshenweihuguang = false;
                            },
                            group: ['zmshenweihuguang_1', 'zmtshenxing', 'zmtleiren'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['judgeEnd'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmshenweihuguang_1 = false;
                                    },
                                    filter(event, player) {
                                        return player.storage.zmshenweihuguang == true && event.result && event.result.bool == false && get.type(event.card) == 'delay' && event.card.name == 'fulei';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmshenweihuguang_1 = true;
                                    },
                                },
                            },
                        },
                        zmshizilingzang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:1',
                            juexingji: true,
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source.hp > 0 && event.source == player;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmbaer');
                                game.mp426('zmbaer');
                                if (player.name == 'zm_01jianbaer' || player.name1 == 'zm_01jianbaer') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身巴尔.png');
                                } else if (player.name2 == 'zm_01jianbaer') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身巴尔.png');
                                }
                                player.storage.zmshizilingzang = true;
                                player.awakenSkill('zmshizilingzang');
                                ('step 1');
                                player.addSkill('zmshizilingzang_1');
                                player.addSkill('zmshizilingzang_2');
                                player.storage.zmshizilingzang_1 = player.hp;
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmshizilingzang_1 = 0;
                                    },
                                    audio: 'ext:综漫季刊陆/audio:1',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmshizilingzang_1 > 0 && event.source && event.source.isIn() && event.source.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.effect(trigger.source, { name: 'sha' }, player, player) > 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否视为对${get.translation(trigger.source)}使用一张伤害基数为${get.translation(player.storage.zmshizilingzang_1)}的【杀】？`);
                                        ('step 1');
                                        if (result.control == '确定') {
                                        } else {
                                            player.removeSkill('zmshizilingzang_1');
                                            event.finish();
                                        }
                                        ('step 2');
                                        player.useCard({ name: 'sha' }, trigger.source, true);
                                        ('step 3');
                                        player.removeSkill('zmshizilingzang_1');
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.parent.skill == 'zmshizilingzang_1' && player.storage.zmshizilingzang_1 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmshizilingzang_2');
                                        trigger.baseDamage = player.storage.zmshizilingzang_1;
                                    },
                                },
                            },
                        },
                        zmtianciguanmian: {
                            nobracket: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            check(event, player) {
                                if (_status.currentPhase != player) return true;
                                var num = 0;
                                var num1 = 0;
                                if (player.countCards('h') > 0) {
                                    var cards1 = player.getCards('h');
                                    for (var i = 0; i < cards1.length; i++) {
                                        if ((cards1[i].name != 'sha' && !lib.filter.cardEnabled(cards1[i])) || (cards1[i].name == 'sha' && player.getCardUsable('sha') == 0)) num1++;
                                        if (lib.filter.cardEnabled(cards1[i], player) && player.hasUseTarget(cards1[i]) && player.getUseValue(cards1[i]) > 0) num++;
                                    }
                                }
                                if (num1 == 0) true;
                                if (num == 0) return true;
                                return false;
                            },
                            init(player) {
                                player.storage.zmtianciguanmian = [];
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (_status.currentPhase != player) game.playzm6(['zmtianciguanmian1', 'zmtianciguanmian2', 'zmtianciguanmian3', 'zmtianciguanmian4', 'zmtianciguanmian5', 'zmtianciguanmian6'].randomGet());
                                player.storage.zmtianciguanmian = [];
                                player.draw();
                                ('step 1');
                                event.cards = result;
                                ('step 2');
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (!player.storage.zmtianciguanmian.includes(i)) {
                                            player.storage.zmtianciguanmian.push(i);
                                        }
                                    }
                                player.addTempSkill('zmtianciguanmian_1');
                            },
                            group: ['zmtianciguanmian_2'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (player.storage.zmtianciguanmian.length) {
                                                if (!player.storage.zmtianciguanmian.includes(card)) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            if (player.storage.zmtianciguanmian.length) {
                                                if (!player.storage.zmtianciguanmian.includes(card)) return false;
                                            }
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtianciguanmian.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtianciguanmian = [];
                                    },
                                },
                            },
                        },
                        zmxushumigong: {
                            group: ['zmtleiren', 'zmtshenxing', 'zmtshikong'],
                            nobracket: true,
                            trigger: {
                                global: ['useCard'],
                            },
                            check(event, player, name) {
                                var num0 = 0;
                                if (event.player == player) {
                                    if (player.countCards('h') == 0) return false;
                                    var maxArray = [];
                                    for (var i = 0; i < player.getCards('h').length; i++) {
                                        if (maxArray.length == 0) {
                                            maxArray.push(player.getCards('h')[i]);
                                        } else {
                                            var h = maxArray[0];
                                            if (h.number < get.number(player.getCards('h')[i])) {
                                                maxArray = [player.getCards('h')[i]];
                                            } else if (h.number == get.number(player.getCards('h')[i])) {
                                                maxArray.push(player.getCards('h')[i]);
                                            }
                                        }
                                    }
                                    if (maxArray.length) {
                                        for (var i = 0; i < maxArray.length; i++) {
                                            if ((maxArray[i].name == 'sha' && player.getCardUsable('sha') > 0 && player.getUseValue(maxArray[i]) > 0 && lib.filter.cardEnabled(maxArray[i], player) && player.hasUseTarget(maxArray[i])) || (maxArray[i].name != 'sha' && player.getUseValue(maxArray[i]) > 0 && lib.filter.cardEnabled(maxArray[i], player) && player.hasUseTarget(maxArray[i]))) num0++;
                                        }
                                    }
                                    return num0 > 0;
                                } else {
                                    var att = get.attitude(player, event.player);
                                    if (att > 0 && event.player.getUseValue(event.card) >= 7) return false;
                                    if (att <= 0 && event.player.countCards('h') <= 2 && event.card.name != 'sha') return true;
                                    if (name == 'useCard' && att <= 0 && event.player.countCards('h') <= 4 && (event.card.name == 'sha' || event.card.name == 'tao' || event.player.getUseValue(event.card) >= 8)) return true;
                                    if (att > 0 && (get.tag(event.card, 'save') || event.card.name == 'shan' || event.card.name == 'jinchan')) return false;
                                    if (att > 0 && event.card.name == 'sha') return false;
                                    if (att > 0 && event.player.countCards('h') > 4 && !event.player.hasSkill('zmxushumigong_temp') && Math.random() <= 0.2) return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.getParent(3).name == 'zmxushumigong') return false;
                                if (event.getParent(2).name == 'zmxushumigong') return false;
                                if (event.parent.name == 'zmxushumigong') return false;
                                var num = 0;
                                if (event.card.number == undefined) return false;
                                if (event.player.countCards('h') > 0 && event.card.number != undefined) {
                                    var hs = event.player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number < event.card.number) {
                                            num++;
                                        }
                                    }
                                }
                                return num == 0;
                            },
                            content() {
                                'step 0';
                                event.num1 = 0;
                                event.target = trigger.player;
                                if (get.attitude(player, trigger.player) > 0) {
                                    game.playzm6(['zmxushumigong11', 'zmxushumigong12', 'zmxushumigong13', 'zmxushumigong14', 'zmxushumigong21', 'zmxushumigong22', 'zmxushumigong14'].randomGet());
                                } else {
                                    game.playzm6(['zmxushumigong11', 'zmxushumigong12', 'zmxushumigong13', 'zmxushumigong14', 'zmxushumigong15', 'zmxushumigong16', 'zmxushumigong14', 'zmxushumigong17'].randomGet());
                                }
                                if (player.storage.zmjuesimigong == true && player.storage.zmt_np >= 30) {
                                    player
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (get.attitude(player, trigger.player) >= 0) return '取消';
                                            if (trigger.player.countCards('h') > 2) return '取消';
                                            if (trigger.player.countCards('h') <= 2 && trigger.player.countCards('h') >= player.hp) return '取消';
                                            return '确定';
                                        })
                                        .set('prompt', `是否消耗能量强化对${get.translation(trigger.player)}的效果？如其无法使用牌则失去一点体力,反之你失去一点体力`);
                                } else event.goto(2);
                                ('step 1');
                                if (result.control == '确定') {
                                    event.num1++;
                                    player.storage.zmt_np -= 30;
                                    game.log(player, `强化了【虚数迷宫】的威力,若${get.translation(trigger.player)}不能使用一张手牌中点数最大的牌则失去一点体力,反之米诺桃斯失去一点体力`);
                                }
                                ('step 2');
                                if (trigger.player.countCards('h') == 0) {
                                    event.goto(4);
                                } else {
                                    var maxArray = [];
                                    for (var i = 0; i < trigger.player.getCards('h').length; i++) {
                                        if (maxArray.length == 0) {
                                            maxArray.push(trigger.player.getCards('h')[i]);
                                        } else {
                                            var h = maxArray[0];
                                            if (h.number < get.number(trigger.player.getCards('h')[i])) {
                                                maxArray = [trigger.player.getCards('h')[i]];
                                                event.num = get.number(trigger.player.getCards('h')[i]);
                                            } else if (h.number == get.number(trigger.player.getCards('h')[i])) {
                                                maxArray.push(trigger.player.getCards('h')[i]);
                                            }
                                        }
                                    }
                                    var next = trigger.player.chooseToUse(`【虚数迷宫】须立即使用一张点数最大的手牌,否则${get.translation(trigger.card)}失效`).set('ai', function (card) {
                                        if (get.type(card) == 'equip') return 18 + get.value(card);
                                        if (trigger.player == player) return trigger.player.getUseValue(card) * 4 + 99;
                                        return trigger.player.getUseValue(card) + 4;
                                    });
                                    next.filterCard = function (card) {
                                        return maxArray.includes(card) && lib.filter.cardEnabled(card, trigger.player) && trigger.player.hasUseTarget(card);
                                    };
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.player.popup('成功');
                                    if (get.attitude(player, trigger.player) > 0 && trigger.player != player) {
                                        trigger.player.addTempSkill('zmxushumigong_temp');
                                    }
                                    if (event.num1 == 1) {
                                        player.loseHp();
                                    }
                                    trigger.player.draw();
                                    event.finish();
                                } else {
                                    trigger.player.popup('失败');
                                    if (trigger.player.hp == 1 && event.num1 == 1) {
                                        game.playzm6('zmminuotaosi2');
                                        game.mp426('zmminuotaosi2');
                                    }
                                    if (get.attitude(player, trigger.player) > 0) {
                                        trigger.player.addTempSkill('zmxushumigong_temp', { player: 'phaseDrawAfter' });
                                        game.playzm6('zmxushumigong0');
                                    }
                                    event.goto(5);
                                }
                                ('step 4');
                                trigger.player.popup('失败');
                                if (trigger.player.hp == 1 && event.num1 == 1) {
                                    game.playzm6('zmminuotaosi2');
                                    game.mp426('zmminuotaosi2');
                                }
                                ('step 5');
                                if (event.num1 != 0) event.target.loseHp();
                                ('step 6');
                                trigger.cancel();
                            },
                            subSkill: {
                                temp: {},
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        zmjuesimigong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:1',
                            trigger: {
                                global: 'roundStart',
                            },
                            juexingji: true,
                            forced: true,
                            init(player) {
                                player.storage.zmjuesimigong = 0;
                            },
                            filter(event, player) {
                                return game.roundNumber >= player.hp;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmminuotaosi');
                                game.mp426('zmminuotaosi');
                                setTimeout(function () {
                                    if (player.name == 'zm_09huminuotaosi' || player.name1 == 'zm_09huminuotaosi') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身米诺桃斯.png');
                                    } else if (player.name2 == 'zm_09huminuotaosi') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身米诺桃斯.png');
                                    }
                                }, 6000);
                                player.storage.zmjuesimigong = true;
                                player.awakenSkill('zmjuesimigong');
                                ('step 1');
                                player.addSkill('zmjuesimigong_1');
                                player.storage.zmjuesimigong_1 = game.roundNumber;
                            },
                            ai: {
                                combo: 'zmjiuridezhanshu',
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (player.storage.zmjuesimigong_1) {
                                                var num1 = player.storage.zmjuesimigong_1;
                                                if (num < num1) {
                                                    return num1;
                                                }
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmleisu: {
                            nobracket: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt() {
                                var num5 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmdianchang_1');
                                });
                                if (num5 > 0) {
                                    return '将一张牌当作【闪】使用或打出？';
                                } else {
                                    return '将两张牌当作【闪】使用或打出？';
                                }
                            },
                            position: 'he',
                            check(card, event) {
                                return 10 - get.value(card);
                            },
                            selectCard() {
                                var player = _status.event.player;
                                var num5 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmdianchang_1');
                                });
                                if (num5 > 0) {
                                    return [1, 1];
                                } else {
                                    return [2, 2];
                                }
                            },
                            viewAs: {
                                name: 'shan',
                            },
                            precontent() {
                                'step 0';
                                if (player.hasSkill('zmdianchang') && !player.hasSkill('zmdianchang_1')) {
                                    player.storage.zmdianchang++;
                                    if (player.storage.zmdianchang >= game.roundNumber) {
                                        event.target = player;
                                        player.useSkill('zmdianchang');
                                    }
                                }
                                event.current = player.next;
                                ('step 1');
                                if (event.current != player) {
                                    var current = event.current;
                                    event.current = event.current.next;
                                    if (current.hasSkill('zmdianchang') && !current.hasSkill('zmdianchang_1')) {
                                        current.storage.zmdianchang++;
                                        if (current.storage.zmdianchang >= game.roundNumber) {
                                            event.target = current;
                                            current.useSkill('zmdianchang');
                                        }
                                    }
                                    event.redo();
                                }
                                ('step 2');
                                if (!event.target) {
                                    game.playzm6(['zmleisu1', 'zmleisu2', 'zmleisu3', 'zmleisu4', 'zmleisu5', 'zmleisu6', 'zmleisu7', 'zmleisu8', 'zmleisu9'].randomGet());
                                }
                                ('step 3');
                                if (player.name == 'zm_05qifuer') {
                                    var num4 = game.countPlayer(function (current) {
                                        return !current.hasSkill('zmleisu');
                                    });
                                    if (num4 > 0) {
                                        player
                                            .chooseTarget('是否令一名未持有【雷速】的角色获得之？', function (card, player, target) {
                                                return !target.hasSkill('zmleisu');
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target.hp <= 2 || target.countCards('he') == 1) att *= 2;
                                                if (target.hp == 1 || target.countCards('he') >= 1) att *= 2;
                                                return att;
                                            });
                                    } else event.finish();
                                } else {
                                    var num4 = game.countPlayer(function (current) {
                                        return current.hasSkill('zmleisu');
                                    });
                                    if (num4 > 0) {
                                        player
                                            .chooseTarget('令一名持有【雷速】的角色移除此技能', true, function (card, player, target) {
                                                return target.hasSkill('zmleisu');
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target.name == 'zm_05qifuer' && att > 0) return -999;
                                                return -att;
                                            });
                                    } else event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(event.target, { color: [255, 204, 51] });
                                    if (player.name == 'zm_05qifuer') {
                                        game.log(event.target, '获得了技能【雷速】');
                                        event.target.addSkill('zmleisu');
                                    } else {
                                        game.log(event.target, '移除了技能【雷速】');
                                        event.target.removeSkill('zmleisu');
                                    }
                                }
                            },
                            filter(event, player) {
                                var player = _status.event.player;
                                var num5 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmdianchang_1');
                                });
                                if (num5 > 0) {
                                    return player.countCards('he') > 0;
                                } else {
                                    return player.countCards('he') > 1;
                                }
                            },
                            filterCard(card) {
                                return true;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha' && player.countCards('he') >= 2 && player.hasSkill('zmdianchang') && !player.hasSkill('zmdianchang_1') && player.storage.zmdianchang + 1 >= game.roundNumber) {
                                            return [1, 999];
                                        }
                                    },
                                },
                                basic: {
                                    useful: [9, 2],
                                    value: [9, 2],
                                },
                                result: {
                                    player: 1,
                                },
                                order: 12,
                            },
                        },
                        zmdianchang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
                            juexingji: true,
                            forced: true,
                            init(player) {
                                player.storage.zmdianchang = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmdianchang >= player.maxHp;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmfuer');
                                game.mp426('zmfuer');
                                setTimeout(function () {
                                    if (player.name == 'zm_05qifuer' || player.name1 == 'zm_05qifuer') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身芙尔.png');
                                    } else if (player.name2 == 'zm_05qifuer') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身芙尔.png');
                                    }
                                }, 3000);
                                player.storage.zmdianchang = false;
                                player.awakenSkill('zmdianchang');
                                ('step 1');
                                player.addSkill('zmdianchang_1');
                            },
                            ai: {
                                combo: 'zmleisu',
                            },
                            group: ['zmtleiren', 'zmtyeshou'],
                            subSkill: {
                                1: {
                                    superCharlotte: true,
                                    charlotte: true,
                                    audio: 'ext:综漫季刊陆/audio:5',
                                    trigger: {
                                        global: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}获得【雷速】？`;
                                    },
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                        if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                        return player.storage.zmt_np >= 20 && !event.player.hasSkill('zmleisu');
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 20;
                                        player.line(trigger.player, { color: [255, 204, 51] });
                                        trigger.player.addSkill('zmleisu');
                                    },
                                },
                            },
                        },
                        zmquannengshiye: {
                            group: ['zmtleiren', 'zmtlongxue'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                var num = player.getAttackRange();
                                var num2 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && get.effect(current, { name: 'sha' }, player, player) > 0 && player.countCards('h', { name: 'sha' }) > 0 && get.distance(player, current, 'attack') - num <= 1 && current.countCards('h');
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && get.effect(current, { name: 'juedou' }, player, player) > 0 && player.countCards('h', { name: 'juedou' }) > 0 && current.countCards('h');
                                });
                                return num3 + num2 > 0;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 15;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 15;
                                event.target1 = [];
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        if (get.distance(player, current, 'attack') <= 1) {
                                            event.target1.push(current);
                                        }
                                    }
                                });
                                ('step 1');
                                player.addTempSkill('zmquannengshiye_0');
                                event.current = player.next;
                                ('step 2');
                                if (event.current != player) {
                                    if (get.distance(player, event.current, 'attack') <= 1) {
                                        if (event.target1.includes(event.current)) {
                                            player.line(event.current, { color: [136, 17, 0] });
                                            event.current.addTempSkill('zmquannengshiye_1');
                                        } else {
                                            player.line(event.current, { color: [187, 102, 86] });
                                            event.current.addTempSkill('zmquannengshiye_2');
                                        }
                                    }
                                } else event.finish();
                                ('step 3');
                                event.current = event.current.next;
                                event.goto(2);
                            },
                            subSkill: {
                                0: {
                                    mod: {
                                        attackFrom(from, to, distance) {
                                            var num = to.getAttackRange();
                                            return distance - num;
                                        },
                                    },
                                },
                                1: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var suit1 = card.suit;
                                            if (suit1 != undefined && player.countCards('h', { suit: suit1 }) > 0) return false;
                                        },
                                        cardRespondable(card, player) {
                                            var suit1 = card.suit;
                                            if (suit1 != undefined && player.countCards('h', { suit: suit1 }) > 0) return false;
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var suit1 = card.suit;
                                            if (suit1 != undefined && !player.countCards('h', { suit: suit1 })) return false;
                                        },
                                        cardRespondable(card, player) {
                                            var suit1 = card.suit;
                                            if (suit1 != undefined && !player.countCards('h', { suit: suit1 })) return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmruodianningshi: {
                            group: ['zmruodianningshi_0'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:3',
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.player.isAlive()) return false;
                                if (event.card && event.card.suit == 'heart' && event.player.hasSkill('zmruodianningshi_1')) return false;
                                if (event.card && event.card.suit == 'diamond' && event.player.hasSkill('zmruodianningshi_2')) return false;
                                if (event.card && event.card.suit == 'spade' && event.player.hasSkill('zmruodianningshi_3')) return false;
                                if (event.card && event.card.suit == 'club' && event.player.hasSkill('zmruodianningshi_4')) return false;
                                return event.card && event.card.suit != undefined && player.countCards('he', { suit: event.card.suit }) > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmruodianningshi_0.includes(trigger.card.suit)) {
                                    var next = player.chooseCard(1, 'he', `是否展示一张${get.translation(trigger.card.suit)}牌令${get.translation(trigger.player)}下次受到该花色的牌之伤害翻倍`, function (card, player) {
                                        return trigger.card.suit == card.suit;
                                    });
                                    var att1 = get.attitude(player, trigger.player);
                                    next.ai = function (card) {
                                        if (att1 <= 0) {
                                            return 99 - get.value(card);
                                        }
                                        return 0;
                                    };
                                } else {
                                    var next = player.chooseCard(1, 'he', `是否将一张${get.translation(trigger.card.suit)}牌交给${get.translation(trigger.player)}?之后下次该花色的牌对其造成的伤害翻倍`, function (card, player) {
                                        return trigger.card.suit == card.suit;
                                    });
                                    var att1 = get.attitude(player, trigger.player);
                                    next.ai = function (card) {
                                        if (att1 < 0) {
                                            if (card.name == 'tao') return 0;
                                            return 7 - get.value(card);
                                        }
                                        return 0;
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player, { color: [214, 0, 0] });
                                    var suit = result.cards[0].suit;
                                    if (suit == 'heart') {
                                        trigger.player.addSkill('zmruodianningshi_1');
                                    }
                                    if (suit == 'diamond') {
                                        trigger.player.addSkill('zmruodianningshi_2');
                                    }
                                    if (suit == 'spade') {
                                        trigger.player.addSkill('zmruodianningshi_3');
                                    }
                                    if (suit == 'club') {
                                        trigger.player.addSkill('zmruodianningshi_4');
                                    }
                                    if (!player.storage.zmruodianningshi_0.includes(trigger.card.suit)) {
                                        trigger.player.gain(result.cards, player, 'give');
                                    } else {
                                        player.showCards(result.cards);
                                    }
                                    player.draw();
                                } else event.finish();
                            },
                            subSkill: {
                                0: {
                                    name: '弱点凝视',
                                    mark: true,
                                    marktext: '凝',
                                    init(player) {
                                        player.storage.zmruodianningshi_0 = [];
                                    },
                                    intro: {
                                        content(storage) {
                                            if (!storage.length) {
                                                return '未记录花色';
                                            } else {
                                                var str = '已记录花色:' + get.translation(storage[0]);
                                                for (var i = 1; i < storage.length; i++) {
                                                    str += '、' + get.translation(storage[i]);
                                                }
                                                return str;
                                            }
                                        },
                                    },
                                    audio: 'ext:综漫季刊陆/audio:1',
                                    trigger: {
                                        source: 'dieEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmruodianningshi_0.length < 4;
                                    },
                                    content() {
                                        'step 0';
                                        var list = ['heart', 'spade', 'club', 'diamond'];
                                        if (player.storage.zmruodianningshi_0.includes('heart')) {
                                            list.remove('heart');
                                        }
                                        if (player.storage.zmruodianningshi_0.includes('spade')) {
                                            list.remove('spade');
                                        }
                                        if (player.storage.zmruodianningshi_0.includes('club')) {
                                            list.remove('club');
                                        }
                                        if (player.storage.zmruodianningshi_0.includes('diamond')) {
                                            list.remove('diamond');
                                        }
                                        player
                                            .chooseControl(list)
                                            .set('prompt', '可选择一种花色记录,之后你因【弱点凝视】给出该花色的牌时改为展示')
                                            .set('ai', function () {
                                                return list.randomGet();
                                            });
                                        ('step 1');
                                        if (player.storage.zmruodianningshi_0.length == 0) {
                                            game.playzm6('zmaerge');
                                            game.mp426('zmaerge');
                                            if (player.name == 'zm_12tiaerge' || player.name1 == 'zm_12tiaerge') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身阿尔戈.png');
                                            } else if (player.name2 == 'zm_12tiaerge') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身阿尔戈.png');
                                            }
                                        }
                                        if (result.control == 'heart') {
                                            player.storage.zmruodianningshi_0.push('heart');
                                            player.popup(get.translation('heart'));
                                        }
                                        if (result.control == 'diamond') {
                                            player.storage.zmruodianningshi_0.push('diamond');
                                            player.popup(get.translation('diamond'));
                                        }
                                        if (result.control == 'club') {
                                            player.storage.zmruodianningshi_0.push('club');
                                            player.popup(get.translation('club'));
                                        }
                                        if (result.control == 'diamond') {
                                            player.storage.zmruodianningshi_0.push('diamond');
                                            player.popup(get.translation('diamond'));
                                        }
                                    },
                                },
                                1: {
                                    mark: true,
                                    marktext: '♥️️',
                                    intro: {
                                        content(storage) {
                                            return '下次受到♥️️牌造成的伤害翻倍结算';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'heart';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num *= 2;
                                        player.removeSkill('zmruodianningshi_1');
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '♦️️',
                                    intro: {
                                        content(storage) {
                                            return '下次受到♦️️牌造成的伤害翻倍结算';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'diamond';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num *= 2;
                                        player.removeSkill('zmruodianningshi_2');
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '♠️️',
                                    intro: {
                                        content(storage) {
                                            return '下次受到♠️️牌造成的伤害翻倍结算';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'spade';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num *= 2;
                                        player.removeSkill('zmruodianningshi_3');
                                    },
                                },
                                4: {
                                    mark: true,
                                    marktext: '♣️️',
                                    intro: {
                                        content(storage) {
                                            return '下次受到♣️️牌造成的伤害翻倍结算';
                                        },
                                    },
                                    trigger: {
                                        player: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.suit == 'club';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num *= 2;
                                        player.removeSkill('zmruodianningshi_4');
                                    },
                                },
                            },
                        },
                        zmheibaibianzheng: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            check(event, player) {
                                var num00 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && !current.hasSkillTag('noturn') && current.isTurnedOver();
                                });
                                var num0 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && current.hasSkillTag('noturn');
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && !current.isTurnedOver();
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isTurnedOver();
                                });
                                if (num00 > 0) return false;
                                if (num0 > 2) return false;
                                // if(num0=2&&(!player.storage.zmlichangzhuanhuan||player.storage.zmlichangzhuanhuan==false)) return false;
                                return num1 + num2 > 0;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.cs = 0;
                                player.storage.zmt_np -= 20;
                                ('step 1');
                                event.cs++;
                                if (player.storage.zmlichangzhuanhuan == true) {
                                    player
                                        .chooseTarget('是否暗中指定一名角色反转其之后的选项？', function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            var num4 = game.countPlayer(function (current) {
                                                return get.attitude(target, current) > 0 && target.hp >= current.hp && target != current && !current.hasSkillTag('noturn');
                                            });
                                            var num5 = game.countPlayer(function (current) {
                                                return get.attitude(target, current) > 0 && target != current;
                                            });
                                            if (Math.random() <= 0.2) return 0;
                                            if (Math.random() <= 0.7 && ((att < 0 && num4 == num5) || (att <= 0 && target.hasSkillTag('noturn')))) att *= 2;
                                            return -att;
                                        });
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    event.num = 1;
                                    event.target = result.targets[0];
                                }
                                ('step 3');
                                event.fm = [];
                                event.bfm = [];
                                event.current = player.next;
                                ('step 4');
                                player.chooseControl('翻面', '取消', true).set('prompt', '是否翻面并摸一张牌？').ai = function () {
                                    if (player.isTurnedOver() || event.cs > 8) return 0;
                                    return 1;
                                };
                                ('step 5');
                                if (result.control == '翻面') {
                                    player.popup('翻面');
                                    player.turnOver();
                                    player.draw();
                                    event.fm.push(player);
                                } else {
                                    player.popup('不翻面');
                                    event.bfm.push(player);
                                }
                                ('step 6');
                                if (event.current && event.current != player) {
                                    player.line(event.current);
                                    var num3 = game.countPlayer(function (current) {
                                        return event.fm.includes(current);
                                    });
                                    var num4 = game.countPlayer(function (current) {
                                        return get.attitude(event.current, current) > 0 && !event.fm.includes(current) && event.current.hp >= current.hp && event.current != current && !current.hasSkillTag('noturn');
                                    });
                                    var num5 = game.countPlayer(function (current) {
                                        return get.attitude(event.current, current) > 0 && event.current != current;
                                    });
                                    var num6 = game.countPlayer(function (current) {
                                        return get.attitude(event.current, current) > 0 && event.bfm.includes(current) && event.current != current;
                                    });
                                    event.current.chooseControl('翻面', '取消', true).set('prompt', '是否翻面并摸一张牌？').ai = function () {
                                        var att = get.attitude(event.current, player);
                                        if (event.cs > 2 && att <= 0) return 0;
                                        if (att >= 0 && event.current.isTurnedOver()) return 0;
                                        if (!player.hasSkill('zmlichangzhuanhuan') || player.storage.zmlichangzhuanhuan == false || (player.storage.zmlichangzhuanhuan == true && att < 0 && event.num == -1)) {
                                            if ((att < 0 && event.current.isTurnedOver()) || event.current.hasSkillTag('noturn')) return 0;
                                            if (att < 0 && num3 == 0 && num4 == num5) return 0;
                                            if (att < 0 && num3 == 0 && num6 == num5) return 0;
                                        } else {
                                            if (att < 0 && num5 == 0) {
                                                if ((event.current.isTurnedOver() || event.current.hasSkillTag('noturn')) && att < 0 && Math.random() <= 0.5) return 0;
                                                if (att < 0 && num3 == 0 && num4 == num5 && Math.random() <= 0.5) return 0;
                                                if (att < 0 && num3 == 0 && num6 == num5 && Math.random() <= 0.5) return 0;
                                            } else {
                                                if ((event.current.isTurnedOver() || event.current.hasSkillTag('noturn')) && att < 0 && Math.random() <= 0.7) return 0;
                                                if (att < 0 && num3 == 0 && num4 == num5 && Math.random() <= 0.7) return 0;
                                                if (att < 0 && num3 == 0 && num6 == num5 && Math.random() <= 0.7) return 0;
                                            }
                                        }
                                        return 1;
                                    };
                                } else event.goto(9);
                                ('step 7');
                                if (result.control == '翻面') {
                                    if (event.target && event.target == event.current) {
                                        event.current.popup('立场转换!', 'thunder');
                                        event.num = -1;
                                        player.line(event.current, { color: [0, 0, 170] });
                                        event.current.popup('不翻面');
                                        event.bfm.push(event.current);
                                    } else {
                                        event.current.popup('翻面');
                                        event.current.turnOver();
                                        event.current.draw();
                                        event.fm.push(event.current);
                                        if (event.bfm.length) {
                                            for (var i = 0; i < event.bfm.length; i++) {
                                                if (event.current.isAlive()) event.bfm[i].chooseToUse(`是否对${get.translation(event.current)}使用一张牌？`, -1, event.current);
                                            }
                                        }
                                    }
                                } else {
                                    if (event.target && event.target == event.current) {
                                        event.current.popup('立场转换!', 'thunder');
                                        event.num = -1;
                                        player.line(event.current, { color: [0, 0, 170] });
                                        event.current.popup('翻面');
                                        event.current.turnOver();
                                        event.current.draw();
                                        event.fm.push(event.current);
                                        if (event.bfm.length) {
                                            for (var i = 0; i < event.bfm.length; i++) {
                                                if (event.current.isAlive()) event.bfm[i].chooseToUse(`是否对${get.translation(event.current)}使用一张牌？`, -1, event.current);
                                            }
                                        }
                                    } else {
                                        event.current.popup('不翻面');
                                        event.bfm.push(event.current);
                                    }
                                }
                                ('step 8');
                                if (event.current != player) {
                                    event.current = event.current.next;
                                    event.goto(6);
                                }
                                ('step 9');
                                if (!event.fm.length) {
                                    if (event.num == -1) {
                                        game.playzm6(['zmheibaibianzheng11', 'zmheibaibianzheng12', 'zmheibaibianzheng13', 'zmheibaibianzheng13'].randomGet());
                                    } else {
                                        game.playzm6(['zmheibaibianzheng21', 'zmheibaibianzheng12'].randomGet());
                                    }
                                    if (event.target) event.target = undefined;
                                    player.draw();
                                    event.num = 0;
                                    event.goto(1);
                                }
                                if (event.fm.includes(player) && event.fm.length < event.bfm.length) {
                                    if (player.isTurnedOver() && !player.hasSkillTag('noturn')) {
                                        game.playzm6('zmheibaibianzheng23');
                                    }
                                    if (!player.isTurnedOver()) {
                                        game.playzm6('zmheibaibianzheng22');
                                    }
                                    player.turnOver();
                                }
                                if (event.bfm.includes(player) && event.bfm.length < event.fm.length) {
                                    if (player.isTurnedOver() && !player.hasSkillTag('noturn')) {
                                        game.playzm6('zmheibaibianzheng23');
                                    }
                                    if (!player.isTurnedOver()) {
                                        game.playzm6('zmheibaibianzheng22');
                                    }
                                    player.turnOver();
                                }
                            },
                        },
                        zmlichangzhuanhuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:1',
                            juexingji: true,
                            forced: true,
                            trigger: {
                                global: ['dying'],
                            },
                            init(player) {
                                player.storage.zmlichangzhuanhuan = false;
                            },
                            filter(event, player) {
                                return _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                setTimeout(function () {
                                    if (player.name == 'zm_11rusapulan' || player.name1 == 'zm_11rusapulan') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身萨普兰.png');
                                    } else if (player.name2 == 'zm_11rusapulan') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身萨普兰.png');
                                    }
                                }, 2000);
                                ('step 1');
                                game.playzm6('zmsapulan');
                                game.mp426('zmsapulan');
                                player.storage.zmlichangzhuanhuan = true;
                                player.awakenSkill('zmlichangzhuanhuan');
                                var num = trigger.player.maxHp;
                                if (num > player.hp) {
                                    player.recover(num - player.hp);
                                }
                            },
                            ai: {
                                combo: 'zmheibaibianzheng',
                            },
                        },
                        zmfenhongzidan: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:7',
                            trigger: {
                                player: 'shaBefore',
                            },
                            _priority: 5,
                            forced: true,
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(`是否令一名其他角色获得${get.translation(trigger.cards)}？之后其须交给你一张除此以外的手牌,且结算过程中若出现♥️️牌则此杀不可响应`, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('h') > 0;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player;
                                        });
                                        if (num4 == 0 && num5 > 0) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0 && target.countCards('h') == 0) return (att += 2);
                                            return att;
                                        } else {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.countCards('h') == 0) return 0;
                                            return -att;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    player.line(result.targets[0], { color: [255, 170, 204] });
                                    event.target.gain(trigger.cards, 'gain2');
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (i.suit == 'heart') trigger.directHit = true;
                                        }
                                } else event.finish();
                                ('step 2');
                                var num3 = 0;
                                var hs = event.target.getCards('h');
                                if (hs.length == 0) event.finish();
                                for (var i = 0; i < hs.length; i++) {
                                    if (!trigger.cards.includes(hs[i])) {
                                        num3++;
                                    }
                                }
                                if (num3 == 0) event.finish();
                                var next = event.target.chooseCard(`【魅魔子弹】须交给${get.translation(player)}一张${get.translation(trigger.cards)}以外的手牌`, 1, 'h', true, function (card, player) {
                                    return !trigger.cards.includes(card);
                                });
                                next.ai = function (card) {
                                    if (get.attitude(event.target, player) > 0) {
                                        var num = get.value(card);
                                        if (player.getCardUsable('sha') > 0 && card.name == 'sha') num -= 3;
                                        if (card.suit == 'heart') num -= 3;
                                        return 6 - num;
                                    } else {
                                        if (card.name == 'sha') return 0;
                                        var num = get.value(card);
                                        if (player.getCardUsable('sha') > 0 && card.name == 'sha') num = 0;
                                        if (card.suit == 'heart') num *= 2;
                                        return -num;
                                    }
                                };
                                ('step 3');
                                if (result.bool) {
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            if (i.suit == 'heart') trigger.directHit = true;
                                        }
                                    player.gain(result.cards);
                                    event.target.$give(1, player);
                                }
                            },
                        },
                        zmzhimingyouhuo: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond', 'changeHp'],
                            },
                            forced: true,
                            juexingji: true,
                            init(player) {
                                player.storage.zmzhimingyouhuo = 0;
                            },
                            filter(event, player, name) {
                                if (name != 'changeHp') {
                                    return event.card.suit == 'heart';
                                } else {
                                    return true;
                                }
                            },
                            content() {
                                'step 0';
                                if (event.triggername != 'changeHp') {
                                    player.storage.zmzhimingyouhuo++;
                                }
                                ('step 1');
                                if (player.storage.zmzhimingyouhuo < player.hp) event.finish();
                                ('step 2');
                                game.playzm6('zmlingliu');
                                game.mp426('zmlingliu');
                                event.current = player;
                                player.addSkill('zmzhimingyouhuo2');
                                player.awakenSkill('zmzhimingyouhuo');
                                if (player.name == 'zm_02gonglingliu' || player.name1 == 'zm_02gonglingliu') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身零六.jpg');
                                } else if (player.name2 == 'zm_02gonglingliu') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身零六.jpg');
                                }
                                ('step 3');
                                var num = player.getAllHistory('sourceDamage', function (target) {
                                    return target.player == event.current;
                                }).length;
                                if (num > 0) {
                                    player.line(event.current, { color: [255, 170, 204] });
                                    event.current.link(true);
                                }
                                ('step 4');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                            },
                        },
                        zmzhimingyouhuo2: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            enable: 'phaseUse',
                            selectTarget() {
                                return [1, Infinity];
                            },
                            filterTarget(card, player, target) {
                                var list = [];
                                game.countPlayer(function (current) {
                                    var num = player.getAllHistory('sourceDamage', function (target) {
                                        return target.player == current;
                                    }).length;
                                    if (num > 0) list.push(current);
                                });
                                return list.includes(target);
                            },
                            filter(event, player) {
                                var list = [];
                                game.countPlayer(function (current) {
                                    var num = player.getAllHistory('sourceDamage', function (target) {
                                        return target.player == current;
                                    }).length;
                                    if (num > 0) list.push(current);
                                });
                                return player.storage.zmt_np >= 25 && list.length;
                            },
                            contentBefore() {
                                player.storage.zmt_np -= 25;
                                player.addTempSkill('zmzhimingyouhuo2_1');
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmzhimingyouhuo2_1');
                                var num = 0;
                                player.line(target, { color: [255, 170, 204] });
                                for (var i = 0; i < target.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        if (get.tag(card, 'recover')) {
                                            target.useCard(card, player);
                                            num++;
                                        }
                                    }, target.getCards('h')[i]);
                                }
                                if (num == 0) target.addTempSkill('baiban', { player: 'phaseAfter' });
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (player.hp == player.maxHp) return 0;
                                        if (player.hasSkill('zmzhimingyouhuo2_1')) return 0;
                                        return -2;
                                    },
                                    player(player) {
                                        if (player.hp == player.maxHp) return 0;
                                        if (player.hasSkill('zmzhimingyouhuo2_1')) return 0;
                                        var num0 = 0;
                                        var num1 = 0;
                                        game.countPlayer(function (current) {
                                            var num = player.getAllHistory('sourceDamage', function (target) {
                                                return target.player == current;
                                            }).length;
                                            if (num > 0) {
                                                num0 += current.countCards('h');
                                                num1++;
                                            }
                                        });
                                        if (player.hp > 1) {
                                            if (player.storage.zmt_np < 35) return 0;
                                            if (num0 < 4) return 0;
                                            return 1;
                                        } else {
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmzhongshanmingmie: {
                            group: ['zmtgaodengliliang', 'zmtlongzu', 'zmtyuansu', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmzhongshanmingmie = false;
                            },
                            filter(event, player) {
                                return game.roundNumber > 0 && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var num = game.roundNumber * 3;
                                var list = ['红色', '黑色', '取消'];
                                if (!player.countCards('h', { color: 'red' })) {
                                    list.remove('红色');
                                }
                                if (!player.countCards('h', { color: 'black' })) {
                                    list.remove('黑色');
                                }
                                player
                                    .chooseControl(list)
                                    .set('ai', function () {
                                        var red = 0;
                                        var black = 0;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.color(hs[i]) == 'black') {
                                                black += get.value(hs[i]);
                                            } else red += get.value(hs[i]);
                                        }
                                        if ((black <= 4 && player.countCards('h', { color: 'black' }) > 0) || (black < num && player.countCards('h', { color: 'black' }) > 0 && black <= red)) return '黑色';
                                        if ((red <= 4 && player.countCards('h', { color: 'red' }) > 0) || (red < num && player.countCards('h', { color: 'red' }) > 0 && red <= black)) return '红色';
                                        return '取消';
                                    })
                                    .set('prompt', `是否用你手牌中一种颜色的牌交换牌堆顶${get.translation(game.roundNumber)}张牌中颜色相同的牌？`);
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                } else {
                                    event.list = [];
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'red' && result.control == '红色') {
                                            event.list.push(hs[i]);
                                        }
                                        if (get.color(hs[i]) == 'black' && result.control == '黑色') {
                                            event.list.push(hs[i]);
                                        }
                                    }
                                    /////
                                    var num = game.roundNumber;
                                    var cards = get.cards(num);
                                    game.cardsGotoOrdering(cards);
                                    var cardsx = [];
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (get.color(i) == 'red' && result.control == '红色') {
                                                cardsx.push(i);
                                            }
                                            if (get.color(i) == 'black' && result.control == '黑色') {
                                                cardsx.push(i);
                                            }
                                        }
                                    event.cards2 = cardsx;
                                    for (var i = 0; i < event.list.length; i++) {
                                        ui.cardPile.insertBefore(event.list[i], ui.cardPile.firstChild);
                                    }
                                }
                                ('step 2');
                                if (event.cards2.length) {
                                    if (game.roundNumber > 2) {
                                        game.roundNumber -= 2;
                                    } else {
                                        if (game.roundNumber > 1) game.roundNumber -= 1;
                                    }
                                    player.gain(event.cards2, 'gain2');
                                } else {
                                    if (player.storage.zmzhongshanmingmie == false) {
                                        game.playzm6('zmzhuyin');
                                        game.mp426('zmzhuyin');
                                        player.storage.zmzhongshanmingmie = true;
                                        if (player.name == 'zm_01jianzhuyin' || player.name1 == 'zm_01jianzhuyin') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身烛阴.jpg');
                                        } else if (player.name2 == 'zm_01jianzhuyin') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身烛阴.jpg');
                                        }
                                    }
                                    game.roundNumber += 1;
                                }
                            },
                            ai: {
                                threaten(player) {
                                    return 2 + game.roundNumber / 5;
                                },
                            },
                        },
                        zmwudaozhenji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            init(player) {
                                player.storage.zmwudaozhenji = 3;
                            },
                            mark: true,
                            marktext: '武',
                            intro: {
                                content: '你与其他角色计算距离减#',
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance - to.storage.zmwudaozhenji;
                                },
                            },
                            trigger: {
                                player: ['useCardEnd', 'respondEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmwudaozhenji--;
                                player.markSkill('zmwudaozhenji');
                                ('step 1');
                                if (player.storage.zmwudaozhenji == 0) {
                                    player.chooseUseTarget('可视为使用了一张【杀】', { name: 'sha' }, false);
                                }
                            },
                            group: ['zmwudaozhenji_1', 'zmwudaozhenji_2', 'zmwudaozhenji_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: 2022,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        var num4 = game.countPlayer(function (current) {
                                            return current.countCards('h') == player.storage.zmwudaozhenji && current != player;
                                        });
                                        if (num4 == 0) return false;
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
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
                                            .chooseTarget([1, Infinity], `可指定任意名手牌数为${get.translation(player.storage.zmwudaozhenji)}的其他角色成为此杀额外目标`, function (card, player, target) {
                                                return !trigger.targets.includes(target) && target.countCards('h') == player.storage.zmwudaozhenji;
                                            })
                                            .set('ai', function (target) {
                                                return ai.get.effect(target, { name: 'sha' }, _status.event.player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.targets = result.targets;
                                            event.num2 = 0;
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            if (result.bool && event.num2 < event.targets.length) {
                                                game.log(event.targets, `额外成为了${get.translation(trigger.card)}的目标`);
                                                trigger.targets.addArray(event.targets);
                                                event.num2++;
                                                event.redo();
                                            }
                                        }
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊陆/audio:3',
                                    trigger: {
                                        player: ['damageBegin', 'loseHpBegin'],
                                    },
                                    _priority: 100,
                                    filter(event, player) {
                                        return player.hp > 0 && player.storage.zmwudaozhenji == player.hp;
                                    },
                                    content() {
                                        var num = trigger.num;
                                        player.storage.zmwudaozhenji -= num;
                                        trigger.num = 0;
                                        game.log(player, `以【武道真极】抵消了${num}点体力减少效果`);
                                        player.markSkill('zmwudaozhenji');
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwudaozhenji != 3;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwudaozhenji = 3;
                                        player.markSkill('zmwudaozhenji');
                                    },
                                },
                            },
                        },
                        zmzhipeiemo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            filter(event, player) {
                                if (!event.card) return false;
                                if (!event.targets) return false;
                                return get.tag(event.card, 'damage');
                            },
                            check(event, player) {
                                if ((event.card.name == 'sha' || event.card.name == 'wanjian') && !player.hasSkill('unequip') && event.target.getEquip('bagua') && event.target.countCards('h') >= 3) return false;
                                if (get.effect(event.target, event.card, player, player) <= 0) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.target.draw();
                                ('step 1');
                                var next = game.createEvent('zmzhipeiemo');
                                next.player = player;
                                next.target = trigger.target;
                                next.setContent(function () {
                                    if (!target.isIn()) return;
                                    if (
                                        player.getHistory('sourceDamage', function (evt) {
                                            return evt.getParent(2) == event.parent;
                                        }).length
                                    ) {
                                        var num = target.countCards('h') - 1;
                                        if (num > 0) {
                                            player.gainPlayerCard(target, num, 'h', true);
                                        } else {
                                            var controls = [];
                                            var skills = target.getCards('s');
                                            for (var i = 0; i < skills.length; i++) {
                                                var info = lib.skill[skills[i]];
                                                if (!info) continue;
                                                if (!lib.translate[skills[i]]) continue;
                                                if (!lib.translate[skills[i] + '_info']) continue;
                                                if (!controls.includes(skills[i]) && skills[i] != 'zmt_np') {
                                                    controls.push(skills[i]);
                                                    player.addTempSkill(skills[i], { player: 'phaseBefore' });
                                                    target.disableSkill('zmzhipeiemo', [skills[i]]);
                                                }
                                            }
                                        }
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                            },
                            group: ['zmtrenxing', 'zmtgaodengliliang', 'zmtmoxing', 'zmzhipeiemo_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['die', 'phaseBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.players = get.players(player);
                                        event.num = 0;
                                        event.players = event.players.filter((i) => i.storage.zmbaishe_1);
                                        ('step 1');
                                        if (event.players.length) {
                                            var current = event.players.shift();
                                            for (var i = 0; i < current.skills.length; i++) {
                                                if (!current.hasSkill('zmjueduizhipei_2')) current.enableSkill('zmzhipeiemo', [player.skills[i]]);
                                            }
                                            event.redo();
                                        }
                                    },
                                },
                            },
                        },
                        zmjueduizhipei: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var num = 0;
                                game.hasPlayer(function (current) {
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                });
                                return num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.list = [];
                                game.hasPlayer(function (current) {
                                    var num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    if (num0 > 0) event.list.push(current);
                                });
                                event.current = player.next;
                                ('step 1');
                                if (event.list.includes(event.current)) {
                                    if (event.current.countCards('he') == 0) {
                                        event.current.changeHp(-1);
                                        player.changeHp(+1);
                                        event.goto(3);
                                    }
                                    var next = event.current.chooseCard(true, 1, 'he', '须选择一张牌交给' + get.translation(player), function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        var att = get.attitude(event.current, player);
                                        if (att <= 0 && get.position(card) == 'h' && event.current.countCards('h') == 1 && player.storage.zmt_np >= 30) return -999;
                                        return -get.value(card);
                                    };
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) player.gain(result.cards, event.current, 'giveAuto');
                                ('step 3');
                                if (event.current.hp <= 0) {
                                    event.current.dying({ source: player });
                                }
                                event.current = event.current.next;
                                if (event.current != player) event.goto(1);
                            },
                            group: ['zmjueduizhipei_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:1',
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}代替你承受未来的伤害？`;
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        if (event.getParent(2).name != 'zmjueduizhipei') return false;
                                        if (event.player.countCards('h') || event.player == player || event.player.hasSkill('zmjueduizhipei_2')) return false;
                                        return player.storage.zmt_np >= 30 && event.hs && event.hs.length && event.player.isMinHp();
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np -= 30;
                                        game.mp426('zmmaqima');
                                        trigger.player.storage.zmjueduizhipei_2 = player;
                                        trigger.player.addTempSkill('zmjueduizhipei_2', { player: 'die' });
                                    },
                                },
                                2: {
                                    intro: {
                                        content(storage, player) {
                                            var zz = player.storage.zmjueduizhipei_2;
                                            var str = ' ';
                                            str = get.translation(zz) + '受到伤害时,由你代替之';
                                            return str;
                                        },
                                    },
                                    audio: 'ext:综漫季刊陆/audio:2',
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    _priority: -10,
                                    forced: true,
                                    filter(event, player, name) {
                                        return event.player == player.storage.zmjueduizhipei_2 && player.storage.zmjueduizhipei_2.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        var mb = player.storage.zmjueduizhipei_2;
                                        mb.line(player, 'thunder');
                                        trigger.player = player;
                                    },
                                },
                            },
                        },
                        zmxuemaidianfeng: {
                            init(player) {
                                player.storage.zmxuemaidianfeng = true;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            trigger: {
                                player: ['phaseZhunbeiBefore'],
                            },
                            prompt: '是否跳过本回合的判定、摸牌、出牌、弃牌、结束阶段并回复一点体力？',
                            check(event, player) {
                                if (player.skipList.includes('phaseUse') || player.skipList.includes('phaseDraw')) return true;
                                var num0 = 0;
                                var cards1 = player.getCards('h');
                                for (var i = 0; i < cards1.length; i++) {
                                    if (player.getUseValue(cards1[i]) >= 7) num0++;
                                }
                                if (player.countCards('h', { name: 'shan' }) > 0 && !player.isDamaged() && num0 > 0) return false;
                                if (player.hp > 3 && num0 > 1) return false;
                                return true;
                            },
                            firstDo: true,
                            filter(event, player) {
                                return player.storage.zmxuemaidianfeng == true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxuemaidianfeng_0++;
                                player.storage.zmxuemaidianfeng = false;
                                player.storage.zmxuemaidianfeng_1 = true;
                                player.storage.zmxuemaidianfeng_2 = false;
                                player.storage.zmxuemaidianfeng_3 = false;
                                player.storage.zmxuemaidianfeng_4 = false;
                                player.storage.zmxuemaidianfeng_5 = false;
                                player.recover();
                                ('step 1');
                                if (player.storage.zmxuemaidianfeng_0 == 1) {
                                    game.playzm6('zmzhuli');
                                    game.mp426('zmzhuli');
                                    if (player.name == 'zm_02gongzhuli' || player.name1 == 'zm_02gongzhuli') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身朱莉.png');
                                    } else if (player.name2 == 'zm_02gongzhuli') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身朱莉.png');
                                    }
                                }
                                if (!player.skipList.includes('phaseJudge')) {
                                    player.skip('phaseJudge');
                                }
                                if (!player.skipList.includes('phaseDraw')) {
                                    player.skip('phaseDraw');
                                }
                                if (player.maxHp != player.hp && !player.skipList.includes('phaseUse')) {
                                    player.skip('phaseUse');
                                }
                                if (!player.skipList.includes('phaseDiscard')) {
                                    player.skip('phaseDiscard');
                                }
                                if (!player.skipList.includes('phaseJieshu')) {
                                    player.skip('phaseJieshu');
                                }
                            },
                            group: ['zmxuemaidianfeng_1', 'zmxuemaidianfeng_2', 'zmxuemaidianfeng_3', 'zmxuemaidianfeng_4', 'zmxuemaidianfeng_5', 'zmxuemaidianfeng_0'],
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_0 = -1;
                                    },
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_0 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num += player.storage.zmxuemaidianfeng_0;
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_1 = false;
                                    },
                                    prompt: '是否跳过本回合的摸牌、出牌、弃牌、结束阶段并回复一点体力？',
                                    nobracket: true,
                                    audio: 'zmxuemaidianfeng',
                                    trigger: {
                                        player: ['phaseJudgeBefore'],
                                    },
                                    check(event, player) {
                                        if (player.skipList.includes('phaseUse') || player.skipList.includes('phaseDraw')) return true;
                                        var num0 = 0;
                                        var cards1 = player.getCards('h');
                                        for (var i = 0; i < cards1.length; i++) {
                                            if (player.getUseValue(cards1[i]) >= 7) num0++;
                                        }
                                        if (player.countCards('h', { name: 'shan' }) > 0 && !player.isDamaged() && num0 > 0) return false;
                                        if (player.hp > 3 && num0 > 1) return false;
                                        return true;
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_1 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuemaidianfeng = false;
                                        player.storage.zmxuemaidianfeng_1 = false;
                                        player.storage.zmxuemaidianfeng_2 = true;
                                        player.recover();
                                        ('step 1');
                                        if (!player.skipList.includes('phaseDraw')) {
                                            player.skip('phaseDraw');
                                        }
                                        if (player.maxHp != player.hp && !player.skipList.includes('phaseUse')) {
                                            player.skip('phaseUse');
                                        }
                                        if (!player.skipList.includes('phaseDiscard')) {
                                            player.skip('phaseDiscard');
                                        }
                                        if (!player.skipList.includes('phaseJieshu')) {
                                            player.skip('phaseJieshu');
                                        }
                                    },
                                },
                                2: {
                                    prompt: '是否跳过本回合的出牌、弃牌、结束阶段并回复一点体力？',
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_2 = false;
                                    },
                                    nobracket: true,
                                    audio: 'zmxuemaidianfeng',
                                    trigger: {
                                        player: ['phaseDrawBefore'],
                                    },
                                    check(event, player) {
                                        if (player.skipList.includes('phaseUse')) return true;
                                        var num0 = 0;
                                        var cards1 = player.getCards('h');
                                        for (var i = 0; i < cards1.length; i++) {
                                            if (player.getUseValue(cards1[i]) >= 7) num0++;
                                        }
                                        if (!player.isDamaged() && num0 > 0) return false;
                                        if (player.hp > 3 && num0 > 1) return false;
                                        return true;
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_2 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuemaidianfeng = false;
                                        player.storage.zmxuemaidianfeng_1 = false;
                                        player.storage.zmxuemaidianfeng_2 = false;
                                        player.storage.zmxuemaidianfeng_3 = true;
                                        player.recover();
                                        ('step 1');
                                        if (player.maxHp != player.hp && !player.skipList.includes('phaseUse')) {
                                            player.skip('phaseUse');
                                        }
                                        if (!player.skipList.includes('phaseDiscard')) {
                                            player.skip('phaseDiscard');
                                        }
                                        if (!player.skipList.includes('phaseJieshu')) {
                                            player.skip('phaseJieshu');
                                        }
                                    },
                                },
                                3: {
                                    prompt: '是否跳过本回合的弃牌、结束阶段并回复一点体力？',
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_3 = false;
                                    },
                                    nobracket: true,
                                    audio: 'zmxuemaidianfeng',
                                    trigger: {
                                        player: ['phaseUseBefore'],
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_3 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuemaidianfeng = false;
                                        player.storage.zmxuemaidianfeng_1 = false;
                                        player.storage.zmxuemaidianfeng_2 = false;
                                        player.storage.zmxuemaidianfeng_3 = false;
                                        player.storage.zmxuemaidianfeng_4 = true;
                                        player.recover();
                                        ('step 1');
                                        if (!player.skipList.includes('phaseDiscard')) {
                                            player.skip('phaseDiscard');
                                        }
                                        if (!player.skipList.includes('phaseJieshu')) {
                                            player.skip('phaseJieshu');
                                        }
                                    },
                                },
                                4: {
                                    prompt: '是否跳过本回合的结束阶段并回复一点体力？',
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_4 = false;
                                    },
                                    nobracket: true,
                                    audio: 'zmxuemaidianfeng',
                                    trigger: {
                                        player: ['phaseDiscardBefore'],
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_4 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuemaidianfeng = false;
                                        player.storage.zmxuemaidianfeng_1 = false;
                                        player.storage.zmxuemaidianfeng_2 = false;
                                        player.storage.zmxuemaidianfeng_3 = false;
                                        player.storage.zmxuemaidianfeng_4 = false;
                                        player.storage.zmxuemaidianfeng_5 = true;
                                        player.recover();
                                        ('step 1');
                                        if (!player.skipList.includes('phaseJieshu')) {
                                            player.skip('phaseJieshu');
                                        }
                                    },
                                },
                                5: {
                                    prompt: '是否回复一点体力？',
                                    init(player) {
                                        player.storage.zmxuemaidianfeng_5 = false;
                                    },
                                    nobracket: true,
                                    audio: 'zmxuemaidianfeng',
                                    trigger: {
                                        player: ['phaseJieshuBefore'],
                                    },
                                    check(event, player) {
                                        return true;
                                    },
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.storage.zmxuemaidianfeng_5 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxuemaidianfeng_1 = false;
                                        player.storage.zmxuemaidianfeng_2 = false;
                                        player.storage.zmxuemaidianfeng_3 = false;
                                        player.storage.zmxuemaidianfeng_4 = false;
                                        player.storage.zmxuemaidianfeng_5 = false;
                                        player.storage.zmxuemaidianfeng = true;
                                        player.recover();
                                        ('step 1');
                                    },
                                },
                            },
                        },
                        zmnvwangshoujian: {
                            group: ['zmtmoxing', 'zmtrenxing', 'zmnvwangshoujian_3'],
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
                                if (player == target) {
                                    game.playzm6(['zmnvwangshoujian11', 'zmnvwangshoujian12'].randomGet());
                                } else game.playzm6(['zmnvwangshoujian21', 'zmnvwangshoujian22', 'zmnvwangshoujian23'].randomGet());
                                ('step 1');
                                target
                                    .chooseControl('摸牌', '弃牌')
                                    .set('prompt', '可选择一项效果发动,之后本回合你被任意牌指定为目标时执行另一项')
                                    .set('choiceList', ['摸一张牌', '弃置一张牌'])
                                    .set('ai', function () {
                                        var eff = get.attitude(target, player);
                                        if (eff <= 0 && player.countCards('h') > 4) return '弃牌';
                                        return '摸牌';
                                    });
                                ('step 2');
                                if (result.control == '摸牌') {
                                    target.draw();
                                    target.addTempSkill('zmnvwangshoujian_2');
                                }
                                if (result.control == '弃牌') {
                                    target.chooseToDiscard(1, 'he', true);
                                    target.addTempSkill('zmnvwangshoujian_1');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var num555 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('juedou', current) && get.effect(current, { name: 'juedou' }, player, player) > 0;
                                        });
                                        var num55 = 0;
                                        var num5 = 0;
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            for (var i = 0; i < hs.length; i++) {
                                                if (player.canUse(hs[i], player) && get.effect(player, hs[i], player, player) > 0) num55++;
                                                if (player.canUse(hs[i], target) && get.effect(target, hs[i], player, player) > 0 && hs[i].name != 'sha') num5++;
                                            }
                                        }
                                        if (target.hp <= 2 && target.countCards('h') <= 1 && get.attitude(player, target) > 0) return 5;
                                        if (player.storage.zmt_np >= 20 && num55 > 0 && num555 > 0 && player == target) return 4;
                                        if (num5 > 1 && get.attitude(player, target) < 0 && target.countCards('h') > 0) return -3;
                                        return 1;
                                    },
                                },
                                threaten: 0.2,
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '﹢',
                                    intro: {
                                        content(storage) {
                                            return '当你成为任意牌的目标时,摸一张牌';
                                        },
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
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
                                2: {
                                    mark: true,
                                    marktext: '﹣',
                                    intro: {
                                        content(storage) {
                                            return '当你成为任意牌的目标时,弃置一张牌';
                                        },
                                    },
                                    trigger: {
                                        target: 'useCardToBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('he');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(1, 'he', true);
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmnvwangshoujian_3 = 0;
                                    },
                                    audio: 'ext:综漫季刊陆/audio:7',
                                    trigger: {
                                        global: 'discardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(2).name != 'zmnvwangshoujian' && event.getParent(2).name != 'zmnvwangshoujian_2') return false;
                                        return player.storage.zmt_np - player.storage.zmnvwangshoujian_3 >= 10;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmnvwangshoujian_4')) {
                                            player.storage.zmnvwangshoujian_3 += 10;
                                            player.chooseUseTarget({ name: 'juedou' }, trigger.cards, false);
                                        } else event.goto(2);
                                        ('step 1');
                                        player.storage.zmnvwangshoujian_3 = 0;
                                        if (result && result.bool) {
                                            player.storage.zmt_np -= 10;
                                        } else {
                                            player.addTempSkill('zmnvwangshoujian4');
                                        }
                                        event.finish();
                                        ('step 2');
                                        player.chooseTarget('选择【决斗】的目标？当前你免疫决斗造成的伤害', function (card, player, target) {
                                            return player.canUse('juedou', target);
                                        }).ai = function (target) {
                                            if (get.attitude(player, target) < 0 && (target.hp <= 2 || target.countCards('h') <= 2)) return -9;
                                            return -get.attitude(player, target);
                                        };
                                        ('step 3');
                                        if (result.bool && result.targets[0] != undefined) {
                                            player.useCard({ name: 'juedou' }, trigger.cards, result.targets[0], false);
                                        }
                                    },
                                },
                            },
                        },
                        zmnvwangshoujian4: {
                            mark: true,
                            marktext: '免',
                            intro: {
                                content(storage) {
                                    return '你防止因【决斗】受到的伤害';
                                },
                            },
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou';
                            },
                            content() {
                                player.popup('免伤');
                                trigger.untrigger();
                                trigger.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'juedou') {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        zmmoxiangtianqu: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            prompt(event, player) {
                                var str = '';
                                if (event.player == player && player.storage.zmt_np >= 40) {
                                    str += `是否使用${get.translation(event.card)}对${get.translation(event.source)}结算两次？`;
                                } else str += `是否令${get.translation(event.source)}使用${get.translation(event.card)}对你结算一次？结算后你获得此牌`;
                                return str;
                            },
                            logTarget: 'source',
                            check(event, player) {
                                if (event.getParent(3).name == 'zmmoxiangtianqu') return false;
                                var num = 0;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            num += get.value(i);
                                        }
                                }
                                if (event.player == player && player.storage.zmt_np >= 40) {
                                    return get.attitude(player, event.source) < 0 && get.effect(event.source, event.card, player, player) > 0;
                                } else {
                                    if (get.effect(player, event.card, event.source, event.source) <= 0 && get.attitude(player, event.source) <= 0) return true;
                                    if (get.effect(player, event.card, event.source, event.source) <= 0 && get.attitude(player, event.source) > 0 && player.hp > 2 && num > 5) return true;
                                    if (event.card.name == 'sha' && (player.countCards('h', 'shan') > 1 || (player.getEquip(2) && player.countCards('h') && player.hp > 1))) return true;
                                    if (event.card.name == 'juedou' && get.attitude(player, event.source) <= 0 && player.countCards('h', 'sha') > 0) return true;
                                    if (event.card.name == 'wanjian' && (player.countCards('h', 'shan') > 1 || player.getEquip('tengjia'))) return true;
                                    if (event.card.name == 'nanman' && (player.countCards('h', 'sha') > 1 || player.getEquip('tengjia'))) return true;
                                    if (event.card.name == 'huogong' && (player.countCards('h') == 0 || event.source.countCards('h') < 2 || get.attitude(player, event.source) > 0)) return true;
                                    if ((get.attitude(player, event.source) > 0 || event.source == player) && !event.source.hasSkill('unequip') && player.getEquip('renwang') && event.cards && get.color(event.cards[0]) == 'black' && event.card.name == 'sha') return true;
                                    if ((get.attitude(player, event.source) > 0 || event.source == player) && !event.source.hasSkill('unequip') && player.getEquip('tengjia') && event.card.name == 'sha' && !event.nature) return true;
                                    if (!event.source.hasSkill('unequip') && player.getEquip('bagua') && event.card.name == 'sha' && player.hp > 1) return true;
                                    return false;
                                }
                                return false;
                            },
                            filter(event, player) {
                                return _status.currentPhase != player && event.card && event.cards[0] != undefined && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player && player.storage.zmt_np >= 40) {
                                    player.storage.zmt_np = 0;
                                    game.playzm6('zmdilu');
                                    game.mp426('zmdilu');
                                    player.useCard(trigger.card, trigger.cards, trigger.source, false);
                                    player.useCard(trigger.card, trigger.cards, trigger.source, false);
                                    event.finish();
                                } else {
                                    game.playzm6(['zmmoxiangtianqu11', 'zmmoxiangtianqu12', 'zmmoxiangtianqu13'].randomGet());
                                    trigger.source.useCard(trigger.card, trigger.cards, player, false);
                                }
                                ('step 1');
                                player.gain(trigger.cards);
                                player.$gain2(trigger.cards);
                            },
                        },
                        zmyinhongshike: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                ('step 1');
                                player.line(event.current, { color: [214, 0, 0] });
                                var red = event.current.countCards('he', { color: 'red' });
                                if (red > 0) {
                                    var next = event.current.chooseCard(true, 1, 'he', `须选择一张红色牌交给${get.translation(player)};其于下回合开始时交还该牌`, function (card, player) {
                                        return get.color(card) == 'red';
                                    });
                                    next.ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else event.goto(3);
                                ('step 2');
                                if (result.bool) {
                                    if (!event.current.hasSkill('zmyinhongshike_1')) event.current.addSkill('zmyinhongshike_1');
                                    event.current.storage.zmyinhongshike_1 = [];
                                    player.gain(result.cards, event.current, 'giveAuto');
                                    event.current.storage.zmyinhongshike_1.push(result.cards[0]);
                                }
                                ('step 3');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            group: ['zmyinhongshike_2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyinhongshike_1 = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num4 = 0;
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('zmyinhongshike_1')) num4++;
                                        });
                                        return num4 > 0 && player.countCards('hej') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        ('step 1');
                                        if (!event.current.hasSkill('zmyinhongshike_1')) {
                                            event.current.addSkill('zmyinhongshike_1');
                                            event.current.storage.zmyinhongshike_1 = [];
                                            event.goto(2);
                                        }
                                        if (event.current.storage.zmyinhongshike_1.length && player.countCards('hej') > 0) {
                                            var hs = player.getCards('hej');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (event.current.storage.zmyinhongshike_1.includes(hs[i])) {
                                                    event.current.gain(hs[i], player, 'giveAuto');
                                                }
                                            }
                                        }
                                        event.current.storage.zmyinhongshike_1 = [];
                                        ('step 2');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        zmmingyunchongqi: {
                            mod: {
                                cardUsable(card, player) {
                                    if (!card.cards) return;
                                    if (player.storage.zmmingyunchongqi.length && player.storage.zmmingyunchongqi.includes(card.cards[0])) {
                                        return Infinity;
                                    }
                                },
                            },
                            init(player) {
                                player.storage.zmmingyunchongqi = [];
                            },
                            forced: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:3',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (!event.cards) return false;
                                var num = 0;
                                if (event.cards.length) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (player.storage.zmmingyunchongqi.includes(i)) num++;
                                        }
                                }
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.cards.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (player.storage.zmmingyunchongqi.includes(i)) {
                                                player.storage.zmmingyunchongqi.remove(i);
                                            }
                                        }
                                }
                                ('step 1');
                                if (player.storage.zmmingyunchongqi.length == 0) {
                                    player.phase('nodelay');
                                } else event.finish();
                                ('step 2');
                                game.videoContent.windowzoom1();
                                game.videoContent.windowzoom3();
                                ('step 3');
                                game.videoContent.windowzoom4();
                                player.stat.push({ card: {}, skill: {} });
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    //QQQ
                                    evt.finish();
                                }
                            },
                            group: ['zmmingyunchongqi_1', 'zmmingyunchongqi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmmingyunchongqi.length != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmmingyunchongqi = [];
                                    },
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                player.storage.zmmingyunchongqi.push(i);
                                            }
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmmingyunjushe: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 15;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            line: 'thunder',
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 15;
                                if (get.attitude(player, target) <= 0) {
                                    game.playzm6(['zmmingyunjushe2', 'zmmingyunjushe4', 'zmmingyunjushe3'].randomGet());
                                } else {
                                    if (target == player) {
                                        game.playzm6(['zmmingyunjushe0', 'zmmingyunjushe00'].randomGet());
                                    } else game.playzm6(['zmmingyunjushe1', 'zmmingyunjushe5', 'zmmingyunjushe3', 'zmmingyunjushe5'].randomGet());
                                }
                                ('step 1');
                                if (target.hasSkill('zmmingyunjushe_1')) target.removeSkill('zmmingyunjushe_1');
                                if (target.hasSkill('zmmingyunjushe_2')) target.removeSkill('zmmingyunjushe_2');
                                ('step 2');
                                player
                                    .chooseControl('增加', '减少')
                                    .set('ai', function () {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && (current.hasSkill('zmmingyunjushe_1') || current.hasSkill('zmmingyunjushe_2'));
                                        });
                                        if (get.attitude(player, target) > 0 && target.isDamaged()) return '增加';
                                        if (get.attitude(player, target) > 0 && num4 == 0) return '增加';
                                        return '减少';
                                    })
                                    .set('prompt', `请期望${get.translation(target)}未来的体力值增减变化`);
                                ('step 3');
                                if (result.control == '增加') {
                                    target.storage.zmmingyunjushe_1 = player;
                                    game.log(player, `期望了${get.translation(target)}体力值增加的未来`);
                                    target.addSkill('zmmingyunjushe_1');
                                }
                                if (result.control == '减少') {
                                    target.storage.zmmingyunjushe_2 = player;
                                    game.log(player, `期望了${get.translation(target)}体力值减少的未来`);
                                    target.addSkill('zmmingyunjushe_2');
                                }
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && (current.countCards('h') < 2 || current.hp < 2) && !current.hasSkill('zmmingyunjushe_1') && !current.hasSkill('zmmingyunjushe_2');
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && (current.hasSkill('zmmingyunjushe_1') || current.hasSkill('zmmingyunjushe_2'));
                                        });
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0;
                                        });
                                        if (target.hasSkill('zmmingyunjushe_1') || target.hasSkill('zmmingyunjushe_2')) return 0;
                                        if (num5 > 0 || num4 == num3) return 1;
                                        return -1;
                                    },
                                    player(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && (current.hasSkill('zmmingyunjushe_1') || current.hasSkill('zmmingyunjushe_2'));
                                        });
                                        if (num4 == 0 && get.attitude(player, target) > 0 && !target.isDamaged()) return 0;
                                        if (target.hasSkill('zmmingyunjushe_1') || target.hasSkill('zmmingyunjushe_2')) return 0;
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmtrenxing', 'zmtyeshou', 'zmthundun'],
                            subSkill: {
                                1: {
                                    intro: {
                                        content(storage, player) {
                                            var zz = player.storage.zmmingyunjushe_1;
                                            return get.translation(zz) + '期望了你体力值增加的未来,使用【无懈可击】或期望实现后此效果结束';
                                        },
                                    },
                                    trigger: {
                                        player: ['changeHp', 'wuxieAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name == 'changeHp') {
                                            return event.num > 0;
                                        }
                                        if (name == 'wuxieAfter') {
                                            return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'wuxieAfter') {
                                            player.removeSkill('zmmingyunjushe_1');
                                            event.finish();
                                        } else event.num = Math.abs(trigger.num);
                                        ('step 1');
                                        player.removeSkill('zmmingyunjushe_1');
                                        var zz = player.storage.zmmingyunjushe_1;
                                        if (zz.isAlive()) {
                                            zz.chooseTarget([1, 1], `可选择一名其他被你期望的角色将期望实现,体力变化为${trigger.num}点`, function (card, player, target) {
                                                return (target.hasSkill('zmmingyunjushe_1') || target.hasSkill('zmmingyunjushe_2')) && target.storage.zmmingyunjushe_1 == zz;
                                            }).set('ai', function (target) {
                                                var att = get.attitude(zz, target);
                                                if (att <= 0 && target.hasSkill('zmmingyunjushe_1')) return 0;
                                                if (att > 0 && target.hasSkill('zmmingyunjushe_2')) return 0;
                                                if (get.attitude(zz, player) > 0 && player.hp <= 2 && player.isDamaged()) return 0;
                                                if (att > 0 && target.hasSkill('zmmingyunjushe_1') && target.isDamaged()) return 99;
                                                return -att;
                                            });
                                        } else {
                                            player.changeHp(+1);
                                            event.finish();
                                        }
                                        ('step 2');
                                        var zz = player.storage.zmmingyunjushe_1;
                                        if (result.bool) {
                                            zz.line(result.targets, 'thunder');
                                            if (result.targets[0].hasSkill('zmmingyunjushe_1')) {
                                                result.targets[0].changeHp(+event.num);
                                            } else {
                                                result.targets[0].changeHp(-event.num);
                                            }
                                            event.target = result.targets[0];
                                            event.zz = zz;
                                        } else {
                                            zz.line(player, 'thunder');
                                            player.changeHp(+1);
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (event.target && event.target.hp <= 0) event.target.dying({ source: event.zz });
                                    },
                                },
                                2: {
                                    intro: {
                                        content(storage, player) {
                                            var zz = player.storage.zmmingyunjushe_2;
                                            return get.translation(zz) + '期望了你体力值减少的未来,使用【无懈可击】或期望实现后此效果结束';
                                        },
                                    },
                                    trigger: {
                                        player: ['changeHp', 'wuxieAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name == 'changeHp') {
                                            return event.num < 0;
                                        }
                                        if (name == 'wuxieAfter') {
                                            return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'wuxieAfter') {
                                            player.removeSkill('zmmingyunjushe_2');
                                            event.finish();
                                        } else event.num = Math.abs(trigger.num);
                                        ('step 1');
                                        player.removeSkill('zmmingyunjushe_2');
                                        var zz = player.storage.zmmingyunjushe_2;
                                        if (zz.isAlive()) {
                                            zz.chooseTarget([1, 1], `可选择一名其他被你期望的角色将期望实现,体力变化为${trigger.num}点`, function (card, player, target) {
                                                return (target.hasSkill('zmmingyunjushe_1') || target.hasSkill('zmmingyunjushe_2')) && (target.storage.zmmingyunjushe_1 == zz || target.storage.zmmingyunjushe_2 == zz);
                                            }).set('ai', function (target) {
                                                var att = get.attitude(zz, target);
                                                if (att <= 0 && target.hasSkill('zmmingyunjushe_1')) return 0;
                                                if (att > 0 && target.hasSkill('zmmingyunjushe_2')) return 0;
                                                if (att > 0 && target.hasSkill('zmmingyunjushe_1') && target.isDamaged()) return 99;
                                                return -att;
                                            });
                                        } else {
                                            player.changeHp(-1);
                                            if (player.hp <= 0) player.dying({ source: player });
                                            event.finish();
                                        }
                                        ('step 2');
                                        var zz = player.storage.zmmingyunjushe_2;
                                        if (result.bool) {
                                            zz.line(result.targets, 'thunder');
                                            if (result.targets[0].hasSkill('zmmingyunjushe_1')) {
                                                result.targets[0].changeHp(+event.num);
                                            } else {
                                                result.targets[0].changeHp(-event.num);
                                            }
                                            event.target = result.targets[0];
                                            event.zz = zz;
                                        } else {
                                            zz.line(player, 'thunder');
                                            player.changeHp(-1);
                                            event.target = player;
                                            event.zz = zz;
                                        }
                                        ('step 3');
                                        if (event.target && event.target.hp <= 0) event.target.dying({ source: event.zz });
                                    },
                                },
                            },
                        },
                        zmcichangzhuandongd: {
                            init(player) {
                                player.storage.zmcichangzhuandongd = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmcichangzhuandong');
                                event.num1 = player.storage.zmcichangzhuandongd;
                                event.num = 4;
                                event.suit = [];
                                ('step 1');
                                event.num--;
                                player.judge(function (card) {
                                    if (event.suit.includes(card.suit)) return 0;
                                    return 1;
                                });
                                ('step 2');
                                event.card = result.card;
                                if (!event.suit.includes(result.card.suit)) {
                                    event.suit.push(result.card.suit);
                                }
                                if (event.suit.length == 4 || (event.suit.length == 1 && event.num == 0)) {
                                    game.playzm6(['zmcichangzhuandongd0', 'zmcichangzhuandongd0'].randomGet());
                                    player.storage.zmcichangzhuandongd += 1;
                                    game.log(player, '提升了【磁场转动】效果上限');
                                }
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp <= 0;
                                        });
                                        if (num5 > 0 && result.card.name == 'tao') return '确定';
                                        if (player.hp == 0 && (result.card.name == 'jiu' || result.card.name == 'tao')) return '确定';
                                        if (event.suit.length == 4 - event.num && player.storage.zmcichangzhuandongd < 4) {
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
                                order: 12,
                                threaten: 1.2,
                                result: {
                                    player(player, target) {
                                        return 2;
                                    },
                                },
                            },
                        },
                        zmdiyuzhijian: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            audio: 'ext:综漫季刊陆/audio:7',
                            nobracket: true,
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                var num = 0;
                                if (player.storage.zmt_np < 20) return false;
                                game.hasPlayer(function (current) {
                                    current.getHistory('damage', function (evt) {
                                        num += evt.num;
                                    });
                                });
                                return num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                game.hasPlayer(function (current) {
                                    var num0 = 0;
                                    current.getHistory('damage', function (evt) {
                                        num0 = evt.num;
                                    });
                                    if (num0 > 0) list.push(current);
                                });
                                var player = _status.event.player;
                                player
                                    .chooseTarget([1, 1], '可选择一名本回合受到过伤害的角色,对其造成一点伤害', function (card, player, target) {
                                        return list.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 20;
                                    event.targets = result.targets[0];
                                    player.line(result.targets[0], 'thunder');
                                    event.num2 = event.targets.maxHp - event.targets.hp;
                                    event.targets.damage();
                                } else event.finish();
                                ('step 2');
                                if (event.targets.maxHp - event.targets.hp > 0) {
                                    event.num = event.targets.maxHp - event.targets.hp;
                                } else event.num = event.num2;
                                player
                                    .chooseTarget(`是否令 一名角色将手牌数调整至${event.num}？`, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) <= 0 && event.num > target.countCards('h')) return 0;
                                        if (get.attitude(player, target) > 0 && event.num <= target.countCards('h')) return 0;
                                        var num0 = event.num - target.countCards('h');
                                        return get.attitude(player, target) * num0;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'thunder');
                                    var num = Math.round(result.targets[0].countCards('h') - event.num);
                                    var num1 = Math.round(event.num - result.targets[0].countCards('h'));
                                    if (target.countCards('h') <= event.num) {
                                        target.draw(num1);
                                    } else {
                                        target.chooseToDiscard(num, 'h', true);
                                    }
                                }
                            },
                        },
                        zmdiyuzhanshen: {
                            mark: true,
                            marktext: '战',
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, storage, player) {
                                    var cards = player.getExpansions('zmdiyuzhanshen');
                                    if (player.isUnderControl(true)) dialog.addAuto(cards);
                                    else return `共有${get.cnNumber(cards.length)}张牌`;
                                },
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) return false;
                                var num = 0;
                                var list = player.getExpansions('zmdiyuzhanshen');
                                for (var i = 0; i < list.length; i++) {
                                    if (player.canUse(list[i], event.player) && get.effect(event.player, list[i], player, player) > 0) num++;
                                }
                                return num > 0;
                            },
                            prompt(event, player) {
                                var list1 = [];
                                var list = player.getExpansions('zmdiyuzhanshen');
                                for (var i = 0; i < list.length; i++) {
                                    if (player.canUse(list[i], event.player)) list1.push(list[i]);
                                }
                                return `是否对${get.translation(event.player)}使用左手中的${get.translation(list1)}？期间其使用你右手中的同名牌时,你对其造成一点伤害`;
                            },
                            filter(event, player, name) {
                                var num = 0;
                                var list = player.getExpansions('zmdiyuzhanshen');
                                for (var i = 0; i < list.length; i++) {
                                    if (player.canUse(list[i], event.player)) num++;
                                }
                                if (event.player == player || num == 0) return false;
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player) && player.storage.zmdiyuzhanshen_2 == false;
                            },
                            content() {
                                'step 0';
                                player.$fullscreenpop('地狱战神', 'thunder');
                                player.storage.zmdiyuzhanshen_2 = true;
                                trigger.player.addTempSkill('zmdiyuzhanshen_0');
                                ('step 1');
                                var list = player.getExpansions('zmdiyuzhanshen');
                                for (var i = 0; i < list.length; i++) {
                                    if (player.canUse(list[i], trigger.player)) player.useCard(list[i], trigger.player);
                                }
                                ('step 2');
                                player.storage.zmdiyuzhanshen_2 = false;
                                trigger.player.removeSkill('zmdiyuzhanshen_0');
                            },
                            group: ['zmdiyuzhanshen_1', 'zmdiyuzhanshen_2'],
                            subSkill: {
                                0: {},
                                1: {
                                    trigger: {
                                        player: 'drawAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.getExpansions('zmdiyuzhanshen').length) {
                                            var cards = player.getExpansions('zmdiyuzhanshen');
                                            player.gain(cards, 'draw');
                                        }
                                        event.num = player.countCards('h', { name: 'sha' });
                                        ('step 1');
                                        var num = player.maxHp;
                                        player.chooseCard('h', [1, num], `是否将至多${num}张手牌置于左手？`).ai = function (card) {
                                            var player = _status.currentPhase;
                                            var num8 = 0;
                                            if (!get.tag(card, 'damage')) return 0;
                                            if (ui.selected.cards.length) {
                                                if (Array.isArray(ui.selected.cards))
                                                    for (var i of ui.selected.cards) {
                                                        var cardb = i;
                                                        if (cardb.name == 'sha') num8++;
                                                        if (num8 >= event.num - 1 && card.name == 'sha') return 0;
                                                    }
                                            }
                                            return 8 - get.value(card);
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            player.addToExpansion(result.cards, player).gaintag.add('zmdiyuzhanshen');
                                        }
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmdiyuzhanshen_2 = false;
                                    },
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var name1 = event.card.name;
                                        return player.countCards('h', { name: name1 }) >= 1 && event.player.hasSkill('zmdiyuzhanshen_0') && player.storage.zmdiyuzhanshen_2 == true;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm6(['zmdiyuzhanshen_21', 'zmdiyuzhanshen_22', 'zmdiyuzhanshen_23'].randomGet());
                                        player.line(trigger.player, 'thunder');
                                        trigger.player.damage();
                                    },
                                },
                            },
                        },
                        zmtianwushadao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:7',
                            trigger: {
                                global: 'phaseDrawBefore',
                            },
                            filter(event, player) {
                                return event.player != player && player.storage.zmt_np >= 25;
                            },
                            init(player) {
                                player.storage.zmtianwushadao = false;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                return get.effect(event.player, { name: 'sha' }, player, player);
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                player.useCard({ name: 'sha' }, trigger.player, false);
                                ('step 1');
                                if (player.storage.zmtianwushadao == true) {
                                    player.storage.zmtianwushadao = false;
                                    trigger.cancel();
                                }
                                ('step 2');
                                player.storage.zmtianwushadao = false;
                            },
                            group: ['zmtianwushadao_1', 'zmtrenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    check(event, player) {
                                        if (event.num == 2 && event.player.hp > 5) return false;
                                        return event.player.hp > event.num && event.num < 3 && get.attitude(player, event.player) <= 0;
                                    },
                                    prompt(event, player) {
                                        return `是否取消伤害令${get.translation(event.player)}跳过当前与下个摸牌阶段？`;
                                    },
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmtianwushadao';
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.popup('斩除阶段', 'fire');
                                        player.storage.zmtianwushadao = true;
                                        //player.discardPlayerCard(trigger.player,1,'he',true);
                                        trigger.player.skip('phaseDraw');
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        zmfengkuangliliang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
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
                                var num44 = game.countPlayer(function (current) {
                                    return current.hp == 1;
                                });
                                return num44 > 0;
                            },
                            filterTarget(card, player, target) {
                                return target.hp == 1;
                            },
                            selectTarget() {
                                var player = _status.event.player;
                                return [1, Infinity];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                player.addSkill('zmfengkuangliliang2');
                                player.awakenSkill('zmfengkuangliliang');
                                for (var i = 0; i < targets.length; i++) {
                                    player.line(targets[i], { color: [214, 0, 0] });
                                    targets[i].die({ source: player });
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
                        },
                        zmcichangzhuandongj: {
                            init(player) {
                                player.storage.zmcichangzhuandongj = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmcichangzhuandong');
                                event.num1 = player.storage.zmcichangzhuandongj;
                                event.num = 4;
                                event.suit = [];
                                ('step 1');
                                event.num--;
                                player.judge(function (card) {
                                    if (event.suit.includes(card.suit)) return 0;
                                    return 1;
                                });
                                ('step 2');
                                event.card = result.card;
                                if (!event.suit.includes(result.card.suit)) {
                                    event.suit.push(result.card.suit);
                                    if (event.suit.length == 4) {
                                        game.playzm6(['zmcichangzhuandongj0', 'zmcichangzhuandongj00'].randomGet());
                                        player.storage.zmcichangzhuandongj++;
                                        game.log(player, '提升了【磁场转动】效果上限');
                                    }
                                }
                                player
                                    .chooseControl('确定', '取消', function () {
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.hp <= 0;
                                        });
                                        if (num5 > 0 && result.card.name == 'tao') return '确定';
                                        if (player.hp == 0 && (result.card.name == 'jiu' || result.card.name == 'tao')) return '确定';
                                        if (event.suit.length == 4 - event.num && player.storage.zmcichangzhuandongj < 4) {
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
                                order: 12,
                                threaten: 1.2,
                                result: {
                                    player(player, target) {
                                        return 2;
                                    },
                                },
                            },
                            group: ['zmcichangzhuandongj_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > event.player.hp;
                                    },
                                    content() {
                                        player.useSkill('zmcichangzhuandongj');
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmfengkuangliliang2: {
                            mark: true,
                            marktext: '狂',
                            intro: {
                                content(storage) {
                                    return '造成的伤害+1.受到伤害后若有伤害来源且你体力值为1,伤害来源击杀你并获得此效果';
                                },
                            },
                            trigger: {
                                source: 'damageBegin1',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                trigger.num += 1;
                            },
                            group: ['zmfengkuangliliang2_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hp == 1 && event.source;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmfengkuangliliang2');
                                        player.die({ source: trigger.source });
                                        trigger.source.addSkill('zmfengkuangliliang2');
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        zmhuangzhiwu2: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmhuangzhiwu2 = [];
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length;
                            },
                            content() {
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        player.storage.zmhuangzhiwu2.push(i);
                                    }
                            },
                        },
                        zmxingzhiye: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '可对一名体力值与你相同的角色造成1点伤害', function (card, player, target) {
                                        return player.hp == target.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (get.attitude(player, result.targets[0]) <= 0) {
                                        game.playzm6(['zmxingyueye1', 'zmxingyueye2', 'zmxingyueye3', 'zmxingyueye4', 'zmxingyueye5', 'zmxingyueye6'].randomGet());
                                    } else {
                                        if (result.targets[0] == player) {
                                            game.playzm6(['zmxingyueye11', 'zmxingyueye12', 'zmxingyueye13'].randomGet());
                                        } else game.playzm6(['zmxingyueye21', 'zmxingyueye22'].randomGet());
                                    }
                                    player.line(result.targets, 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmxingyuewu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm6(['zmhuangzhiwu1', 'zmhuangzhiwu2', 'zmhuangzhiwu3', 'zmhuangzhiwu4', 'zmhuangzhiwu5', 'zmhuangzhiwu6'].randomGet());
                                event.list = [];
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    player.discard(event.list);
                                }
                                player.recover();
                            },
                            group: ['zmxingyuewu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmhuangzhiwu2') || player.storage.zmhuangzhiwu2.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmhuangzhiwu2');
                                        player.storage.zmhuangzhiwu2 = [];
                                    },
                                },
                            },
                        },
                        zmxingzhiwu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            prompt(event, player) {
                                event.list = [];
                                var str = '';
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    str += `是否弃置${get.translation(event.list)}回复一点体力？`;
                                } else str += '是否回复一点体力？';
                                return str;
                            },
                            filter(event, player, name) {
                                return true;
                            },
                            check(event, player) {
                                var num = 0;
                                if (!player.isDamaged()) return false;
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        num += get.value(he[i]);
                                    }
                                }
                                if (player.hp > 2 && num > 18) return false;
                                if (player.hp <= 2 && num > 28) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm6(['zmhuangzhiwu1', 'zmhuangzhiwu2', 'zmhuangzhiwu3', 'zmhuangzhiwu4', 'zmhuangzhiwu5', 'zmhuangzhiwu6'].randomGet());
                                event.list = [];
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    player.discard(event.list);
                                }
                                player.recover();
                            },
                            group: ['zmxingzhiwu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmhuangzhiwu2') || player.storage.zmhuangzhiwu2.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmhuangzhiwu2');
                                        player.storage.zmhuangzhiwu2 = [];
                                    },
                                },
                            },
                        },
                        zmhuangyueye: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.number <= player.hp) return true;
                                        }
                                    return false;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], '须对一名体力值与你相同的角色造成1点伤害', true, function (card, player, target) {
                                        return player.hp == target.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (get.attitude(player, result.targets[0]) <= 0) {
                                        game.playzm6(['zmxingyueye1', 'zmxingyueye2', 'zmxingyueye3', 'zmxingyueye4', 'zmxingyueye5', 'zmxingyueye6'].randomGet());
                                    } else {
                                        if (result.targets[0] == player) {
                                            game.playzm6(['zmxingyueye11', 'zmxingyueye12', 'zmxingyueye13'].randomGet());
                                        } else game.playzm6(['zmxingyueye21', 'zmxingyueye22'].randomGet());
                                    }
                                    player.line(result.targets, 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmhuangyuewu: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.number <= player.hp) return true;
                                        }
                                    return false;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                game.playzm6(['zmhuangzhiwu1', 'zmhuangzhiwu2', 'zmhuangzhiwu3', 'zmhuangzhiwu4', 'zmhuangzhiwu5', 'zmhuangzhiwu6'].randomGet());
                                event.list = [];
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    player.discard(event.list);
                                }
                                player.recover();
                            },
                            group: ['zmhuangyuewu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmhuangzhiwu2') || player.storage.zmhuangzhiwu2.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmhuangzhiwu2');
                                        player.storage.zmhuangzhiwu2 = [];
                                    },
                                },
                            },
                        },
                        zmhuangzhiye: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player, name) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.number <= player.hp) return true;
                                        }
                                    return false;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], '可对一名体力值与你相同的角色造成1点伤害', function (card, player, target) {
                                        return player.hp == target.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (get.attitude(player, result.targets[0]) <= 0) {
                                        game.playzm6(['zmxingyueye1', 'zmxingyueye2', 'zmxingyueye3', 'zmxingyueye4', 'zmxingyueye5', 'zmxingyueye6'].randomGet());
                                    } else {
                                        if (result.targets[0] == player) {
                                            game.playzm6(['zmxingyueye11', 'zmxingyueye12', 'zmxingyueye13'].randomGet());
                                        } else game.playzm6(['zmxingyueye21', 'zmxingyueye22'].randomGet());
                                    }
                                    player.line(result.targets, 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmxuezhiemo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            trigger: {
                                global: 'useCard2',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return get.color(event.card) == 'red';
                            },
                            content() {
                                'step 0';
                                if (!trigger.targets || (player.storage.zmt_np < 15 && !player.hasSkill('zmxuezhiemo_3')) || trigger.card.name == 'jinchan' || trigger.card.name == 'shan' || trigger.card.name == 'wuxie') {
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
                                        .chooseTarget(`是否额外指定一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
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
                                    if (!player.hasSkill('zmxuezhiemo_3')) player.storage.zmt_np -= 15;
                                    trigger.targets.add(event.target);
                                    player.line(trigger.player, { color: [221, 17, 0] });
                                }
                                event.finish();
                                ('step 4');
                                player
                                    .chooseTarget(`是否移除一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 5');
                                if (result.bool) {
                                    player.line(trigger.player, { color: [221, 17, 0] });
                                    if (!player.hasSkill('zmxuezhiemo_3')) player.storage.zmt_np -= 15;
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
                                ('step 6');
                            },
                            group: ['zmxuezhiemo_1', 'zmtleiren', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    usable: 1,
                                    filter(event, player) {
                                        return event.num < 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmxuezhiemo_3');
                                    },
                                },
                                3: {},
                            },
                        },
                        zmjiefangzhixue: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            init(player) {
                                player.storage.zmjiefangzhixue = false;
                            },
                            check(event, player) {
                                if (player.skipList.includes('phaseUse') || player.hasJudge('lebu')) return false;
                                return true;
                            },
                            content() {
                                player.storage.zmjiefangzhixue = true;
                                player.draw(4);
                            },
                            group: ['zmjiefangzhixue_1', 'zmjiefangzhixue2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjiefangzhixue == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjiefangzhixue2 = 0;
                                        player.storage.zmjiefangzhixue = false;
                                    },
                                },
                            },
                        },
                        zmjiefangzhixue2: {
                            init(player) {
                                player.storage.zmjiefangzhixue2 = 0;
                            },
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player) && player.storage.zmjiefangzhixue == true;
                            },
                            content() {
                                'step 0';
                                var num = 3 + player.storage.zmjiefangzhixue2;
                                if (player.countCards('h') >= num) {
                                    var next = player.chooseCard(num, 'h', `须重铸${num}张手牌`, true, function (card, player) {
                                        return true;
                                    });
                                    next.ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmjiefangzhixue2++;
                                    game.playzm6(['zmjiefangzhixue11', 'zmjiefangzhixue12', 'zmjiefangzhixue13'].randomGet());
                                    var cards = result.cards;
                                    player.lose(cards);
                                    player.$throw(cards);
                                    player.draw(result.cards.length);
                                    event.finish();
                                }
                                ('step 2');
                                var num = 2 + player.storage.zmjiefangzhixue2;
                                game.playzm6(['zmjiefangzhixue21', 'zmjiefangzhixue22'].randomGet());
                                if (player.countCards('he') >= num) {
                                    player.chooseToDiscard(`须弃置${num}张牌`, num, 'he', true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                    player.storage.zmjiefangzhixue2++;
                                } else {
                                    var num = 1 + player.storage.zmjiefangzhixue2;
                                    player.loseHp(num);
                                    player.storage.zmjiefangzhixue2++;
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                        },
                        zmhuangzhiwu: {
                            nobracket: true,
                            trigger: {
                                player: 'gainAfter',
                            },
                            prompt(event, player) {
                                event.list = [];
                                var str = '';
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    str += `是否弃置${get.translation(event.list)}回复一点体力？`;
                                } else str += '是否回复一点体力？';
                                return str;
                            },
                            filter(event, player, name) {
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.number <= player.hp && player.storage.zmhuangzhiwu2.length) return true;
                                        }
                                    return false;
                                }
                                return false;
                            },
                            check(event, player) {
                                var num = 0;
                                if (!player.isDamaged()) return false;
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        num += get.value(he[i]);
                                    }
                                }
                                if (player.hp > 2 && num > 18) return false;
                                if (player.hp <= 2 && num > 28) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm6(['zmhuangzhiwu1', 'zmhuangzhiwu2', 'zmhuangzhiwu3', 'zmhuangzhiwu4', 'zmhuangzhiwu5', 'zmhuangzhiwu6'].randomGet());
                                event.list = [];
                                var he = player.getCards('h');
                                for (var i = 0; i < he.length; i++) {
                                    if (player.storage.zmhuangzhiwu2.includes(he[i])) {
                                        event.list.push(he[i]);
                                    }
                                }
                                if (event.list.length) {
                                    player.discard(event.list);
                                }
                                player.recover();
                            },
                            group: ['zmhuangzhiwu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.hasSkill('zmhuangzhiwu2');
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmhuangzhiwu2');
                                    },
                                },
                            },
                        },
                        zmlingbiaozhihun: {
                            nobracket: true,
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            check(event, player) {
                                if (!player.hasSkill('zmxingzhiye') && player.hp > 2 && _status.currentPhase == player && player.storage.zmt_np <= 24) return false;
                                return true;
                            },
                            init(player) {
                                player.storage.zmlingbiaozhihun = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 12 && Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(_status.currentPhase) && (event.respondTo[0] == _status.currentPhase || _status.currentPhase == event.player);
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmlingbiaozhihun + 1 != player.hp) {
                                    game.playzm6(['zmlingbiaozhihun1', 'zmlingbiaozhihun2', 'zmlingbiaozhihun3', 'zmlingbiaozhihun4', 'zmlingbiaozhihun5', 'zmlingbiaozhihun6', 'zmlingbiaozhihun7', 'zmlingbiaozhihun8', 'zmlingbiaozhihun9'].randomGet());
                                }
                                player.storage.zmt_np -= 12;
                                player.draw();
                                if (player.storage.zmlingbiaozhihun < 999) player.storage.zmlingbiaozhihun++;
                                ('step 1');
                                if (player.storage.zmlingbiaozhihun >= player.hp && player.storage.zmlingbiaozhihun < 999) {
                                    player.storage.zmlingbiaozhihun = 999;
                                } else event.finish();
                                ('step 2');
                                player.removeSkill('zmxingyueye');
                                player.removeSkill('zmhuangzhiwu');
                                event.aa = 0;
                                event.ab = 0;
                                event.ba = 0;
                                event.bb = 0;
                                event.ca = 0;
                                event.cb = 0;
                                ('step 3');
                                player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的触发条件').set('choiceList', ['结束阶段', '当你获得点数不大于体力值的牌后']).ai = function (event, player) {
                                    return '选项一';
                                };
                                ('step 4');
                                if (result.control == '选项一') {
                                    event.aa = 1;
                                }
                                if (result.control == '选项二') {
                                    event.ab = 1;
                                }
                                ('step 5');
                                player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的执行方式').set('choiceList', ['你须', '你可']).ai = function (event, player) {
                                    return '选项二';
                                };
                                ('step 6');
                                if (result.control == '选项一') {
                                    event.ba = 1;
                                }
                                if (result.control == '选项二') {
                                    event.bb = 1;
                                }
                                ('step 7');
                                player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的技能效果').set('choiceList', ['对一名体力值与你相同的角色造成1点伤害', '弃置手牌中于本回合获得的牌并回复1点体力']).ai = function (event, player) {
                                    if (player.hasSkill('zmxingzhiye')) return '选项二';
                                    return '选项一';
                                };
                                ('step 8');
                                if (result.control == '选项一') {
                                    event.ca = 1;
                                }
                                if (result.control == '选项二') {
                                    event.cb = 1;
                                }
                                ('step 9');
                                if (event.aa == 1 && event.ba == 1 && event.ca == 1) {
                                    player.addSkill('zmxingyueye');
                                }
                                if (event.aa == 1 && event.bb == 1 && event.ca == 1) {
                                    player.addSkill('zmxingzhiye');
                                }
                                if (event.aa == 1 && event.ba == 1 && event.cb == 1) {
                                    player.addSkill('zmxingyuewu');
                                }
                                if (event.aa == 1 && event.bb == 1 && event.cb == 1) {
                                    player.addSkill('zmxingzhiwu');
                                }
                                if (event.ba == 1 && event.ba == 1 && event.ca == 1) {
                                    player.addSkill('zmhuangyueye');
                                }
                                if (event.ba == 1 && event.bb == 1 && event.ca == 1) {
                                    player.addSkill('zmhuangzhiye');
                                }
                                if (event.ba == 1 && event.ba == 1 && event.cb == 1) {
                                    player.addSkill('zmhuangyuewu');
                                }
                                if (event.ba == 1 && event.bb == 1 && event.cb == 1) {
                                    player.addSkill('zmhuangzhiwu');
                                }
                                ('step 10');
                                if ((player.storage.zmlingbiaozhihun_1 == 1 && player.storage.zmlingbiaozhihun != 999) || (player.storage.zmlingbiaozhihun_1 == 0 && player.storage.zmlingbiaozhihun == 999)) {
                                    game.playzm6(['zmfangao11', 'zmfangao12'].randomGet());
                                    game.mp426('zmfangao1');
                                }
                                if (player.storage.zmlingbiaozhihun_1 == 1 && player.storage.zmlingbiaozhihun == 999) {
                                    game.playzm6(['zmfangao21', 'zmfangao22'].randomGet());
                                    game.mp426('zmfangao2');
                                    if (player.name == 'zm_14linfangao' || player.name1 == 'zm_14linfangao') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身梵高.jpg');
                                    } else if (player.name2 == 'zm_14linfangao') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身梵高.jpg');
                                    }
                                }
                            },
                            group: ['zmtrenxing', 'zmthundun', 'zmlingbiaozhihun_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['dyingAfter', 'changeHp'],
                                    },
                                    init(player) {
                                        player.storage.zmlingbiaozhihun_1 = 0;
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name == 'changeHp') {
                                            return player.storage.zmlingbiaozhihun != 999 && player.hp <= player.storage.zmlingbiaozhihun;
                                        } else {
                                            return player.hp > 0 && player.storage.zmlingbiaozhihun_1 == 0;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'changeHp') {
                                            player.storage.zmlingbiaozhihun = 999;
                                        }
                                        player.removeSkill('zmxingyueye');
                                        player.removeSkill('zmhuangzhiwu');
                                        event.aa = 0;
                                        event.ab = 0;
                                        event.ba = 0;
                                        event.bb = 0;
                                        event.ca = 0;
                                        event.cb = 0;
                                        if (event.triggername == 'dyingAfter') {
                                            player.storage.zmlingbiaozhihun_1 = 1;
                                        }
                                        ('step 1');
                                        player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的触发条件').set('choiceList', ['结束阶段', '当你获得点数不大于体力值的牌后']).ai = function (event, player) {
                                            return '选项一';
                                        };
                                        ('step 2');
                                        if (result.control == '选项一') {
                                            event.aa = 1;
                                        }
                                        if (result.control == '选项二') {
                                            event.ab = 1;
                                        }
                                        ('step 3');
                                        player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的执行方式').set('choiceList', ['你须', '你可']).ai = function (event, player) {
                                            return '选项二';
                                        };
                                        ('step 4');
                                        if (result.control == '选项一') {
                                            event.ba = 1;
                                        }
                                        if (result.control == '选项二') {
                                            event.bb = 1;
                                        }
                                        ('step 5');
                                        player.chooseControl('选项一', '选项二').set('prompt', '选择新技能的技能效果').set('choiceList', ['对一名体力值与你相同的角色造成1点伤害', '弃置手牌中于本回合获得的牌并回复1点体力']).ai = function (event, player) {
                                            if (player.hasSkill('zmxingzhiye')) return '选项二';
                                            return '选项一';
                                        };
                                        ('step 6');
                                        if (result.control == '选项一') {
                                            event.ca = 1;
                                        }
                                        if (result.control == '选项二') {
                                            event.cb = 1;
                                        }
                                        ('step 7');
                                        if (event.aa == 1 && event.ba == 1 && event.ca == 1) {
                                            player.addSkill('zmxingyueye');
                                        }
                                        if (event.aa == 1 && event.bb == 1 && event.ca == 1) {
                                            player.addSkill('zmxingzhiye');
                                        }
                                        if (event.aa == 1 && event.ba == 1 && event.cb == 1) {
                                            player.addSkill('zmxingyuewu');
                                        }
                                        if (event.aa == 1 && event.bb == 1 && event.cb == 1) {
                                            player.addSkill('zmxingzhiwu');
                                        }
                                        if (event.ba == 1 && event.ba == 1 && event.ca == 1) {
                                            player.addSkill('zmhuangyueye');
                                        }
                                        if (event.ba == 1 && event.bb == 1 && event.ca == 1) {
                                            player.addSkill('zmhuangzhiye');
                                        }
                                        if (event.ba == 1 && event.ba == 1 && event.cb == 1) {
                                            player.addSkill('zmhuangyuewu');
                                        }
                                        if (event.ba == 1 && event.bb == 1 && event.cb == 1) {
                                            player.addSkill('zmhuangzhiwu');
                                        }
                                        ('step 8');
                                        if ((player.storage.zmlingbiaozhihun_1 == 1 && player.storage.zmlingbiaozhihun != 999) || (player.storage.zmlingbiaozhihun_1 == 0 && player.storage.zmlingbiaozhihun == 999)) {
                                            game.playzm6(['zmfangao11', 'zmfangao12'].randomGet());
                                            game.mp426('zmfangao1');
                                        }
                                        if (player.storage.zmlingbiaozhihun_1 == 1 && player.storage.zmlingbiaozhihun == 999) {
                                            game.playzm6(['zmfangao21', 'zmfangao22'].randomGet());
                                            game.mp426('zmfangao2');
                                            if (player.name == 'zm_14linfangao' || player.name1 == 'zm_14linfangao') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身梵高.jpg');
                                            } else if (player.name2 == 'zm_14linfangao') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身梵高.jpg');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmxingyueye: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], '须对一名体力值与你相同的角色造成1点伤害', true, function (card, player, target) {
                                        return player.hp == target.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, _status.event.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (get.attitude(player, result.targets[0]) <= 0) {
                                        game.playzm6(['zmxingyueye1', 'zmxingyueye2', 'zmxingyueye3', 'zmxingyueye4', 'zmxingyueye5', 'zmxingyueye6'].randomGet());
                                    } else {
                                        if (result.targets[0] == player) {
                                            game.playzm6(['zmxingyueye11', 'zmxingyueye12', 'zmxingyueye13'].randomGet());
                                        } else game.playzm6(['zmxingyueye21', 'zmxingyueye22'].randomGet());
                                    }
                                    player.line(result.targets, 'thunder');
                                    result.targets[0].damage();
                                }
                            },
                        },
                        zmyaogunxiezou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            init(player) {
                                player.storage.zmyaogunxiezou = 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard([1, 2], 'h', '是否弃置1~2张牌？若如此做本回合结束时你令一名角色摸等量的牌', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmyaogunxiezou = result.cards.length;
                                }
                            },
                            group: ['zmyaogunxiezou_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:4',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyaogunxiezou > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.zmyaogunxiezou;
                                        player
                                            .chooseTarget(`【摇滚协奏】须令一名角色摸${num}张牌`, true, function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target == player) att += 2;
                                                if (target.hp == 1 || target.countCards('h') <= 2) att *= 3;
                                                return att;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var num = player.storage.zmyaogunxiezou;
                                            player.storage.zmyaogunxiezou = 0;
                                            player.line(result.targets[0], 'green');
                                            result.targets[0].draw(num);
                                        }
                                    },
                                },
                            },
                        },
                        zmfanpanjiepai: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.sp1 = [];
                                event.hp1 = [];
                                event.sp2 = [];
                                event.hp2 = [];
                                game.countPlayer(function (current) {
                                    if (current.isMaxHandcard()) {
                                        event.sp1.push(current);
                                    }
                                    if (current.isMaxHp()) {
                                        event.hp1.push(current);
                                    }
                                    if (current.isMinHandcard()) {
                                        event.sp2.push(current);
                                    }
                                    if (current.isMinHp()) {
                                        event.hp2.push(current);
                                    }
                                });
                                ('step 1');
                                player
                                    .chooseTarget('【反叛节拍】是否令一名角色摸一张牌？之后你再令一名角色弃置一张牌', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        var att = get.attitude(player, target);
                                        if (target.hp == 1 || target.countCards('h') <= 2) att *= 2;
                                        if (event.sp2.includes(target) && (num4 > 0 || player.isDamaged())) att *= 4;
                                        return att;
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.storage.zmt_np -= 20;
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].draw();
                                    if (!result.targets[0].isMinHandcard() && event.sp2.includes(result.targets[0])) {
                                        event.num++;
                                    }
                                } else event.finish();
                                ('step 3');
                                player
                                    .chooseTarget(
                                        '令一名角色弃置一张牌',
                                        true,
                                        function (card, player, target) {
                                            return target.countCards('he');
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        var num = 1;
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        if (event.sp1.includes(target) && (num4 > 0 || player.isDamaged())) num = 9;
                                        return -get.attitude(player, target);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    var next = result.targets[0].chooseToDiscard(1, 'he', true);
                                    next.set('ai', function (card) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        var player = _status.event.player;
                                        var att = get.attitude(result.targets[0], player);
                                        if (att < 0 && (num4 > 0 || player.isDamaged()) && event.num == 0 && get.position(card) == 'h' && result.targets[0].isMaxHandcard()) {
                                            return 3 - get.value(card);
                                        }
                                        return 18 - get.value(card);
                                    });
                                }
                                ('step 5');
                                event.ssp1 = [];
                                event.hhp1 = [];
                                event.ssp2 = [];
                                event.hhp2 = [];
                                game.countPlayer(function (current) {
                                    if (current.isMaxHandcard()) {
                                        event.ssp1.push(current);
                                    }
                                    if (current.isMinHandcard()) {
                                        event.ssp2.push(current);
                                    }
                                });
                                ('step 6');
                                var num0 = 0;
                                for (var i = 0; i < event.ssp2.length; i++) {
                                    if (!event.sp2.includes(event.ssp2[i])) num0++;
                                }
                                for (var i = 0; i < event.sp2.length; i++) {
                                    if (!event.ssp2.includes(event.sp2[i])) num0++;
                                }
                                for (var i = 0; i < event.ssp1.length; i++) {
                                    if (!event.sp1.includes(event.ssp1[i])) num0++;
                                }
                                for (var i = 0; i < event.sp1.length; i++) {
                                    if (!event.ssp1.includes(event.sp1[i])) num0++;
                                }
                                if (num0 > 0) {
                                    player
                                        .chooseTarget('场上手牌最多或最少的角色因你而改变,你须令一名角色回复一点体力', true, function (card, player, target) {
                                            return target.isDamaged();
                                        })
                                        .set('ai', function (target) {
                                            var num = 1;
                                            return get.recoverEffect(target, player, player) * num;
                                        });
                                } else event.finish();
                                ('step 7');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    result.targets[0].recover();
                                } else event.finish();
                                ('step 8');
                                game.countPlayer(function (current) {
                                    if (current.isMaxHp()) {
                                        event.hhp1.push(current);
                                    }
                                    if (current.isMinHp()) {
                                        event.hhp2.push(current);
                                    }
                                });
                                ('step 9');
                                var num0 = 0;
                                for (var i = 0; i < event.hhp2.length; i++) {
                                    if (!event.hp2.includes(event.hhp2[i])) num0++;
                                }
                                for (var i = 0; i < event.hp2.length; i++) {
                                    if (!event.hhp2.includes(event.hp2[i])) num0++;
                                }
                                for (var i = 0; i < event.hhp1.length; i++) {
                                    if (!event.hp1.includes(event.hhp1[i])) num0++;
                                }
                                for (var i = 0; i < event.hp1.length; i++) {
                                    if (!event.hhp1.includes(event.hp1[i])) num0++;
                                }
                                if (num0 > 0) {
                                    player.chooseTarget('场上体力值最大或最小的角色因你而改变,你须选择一名角色令其横置', true, function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (target.isLinked() && att > 0) return 1;
                                        if (target.isLinked() && att <= 0) return 0;
                                        return -att;
                                    };
                                }
                                ('step 10');
                                if (result.bool) {
                                    player.line(result.targets);
                                    result.targets[0].link();
                                }
                            },
                        },
                        zmershiyidianyanchong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                event.num0 = 0;
                                event.num = 0;
                                ('step 1');
                                if (player.countCards('he') == 0) {
                                    target.line(player, { color: [255, 68, 51] });
                                    player.damage(1, 'fire', target);
                                    event.goto(5);
                                } else {
                                    var num1 = 21 - event.num;
                                    var dialog = ui.create.dialog(`当前总点数为:${event.num},可弃置一张点数不超过${num1}的牌累计之`, player.getCards('he'));
                                    player.chooseButton(1, dialog).set('ai', function (button) {
                                        if (get.attitude(player, target) > 0 && get.attitude(target, player) > 0 && get.damageEffect(player, target, target, 'fire') > 1) return 0;
                                        if (button.link.number == num1) return 0;
                                        return button.link.number;
                                    }).filterButton = function (button) {
                                        return button.link.number <= num1;
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    event.num0++;
                                    player.discard(result.links);
                                    if (get.color(result.links[0]) == 'red') event.list.push(result.links[0]);
                                    event.num += result.links[0].number;
                                    if (event.num >= 21) {
                                        target.line(player, { color: [255, 68, 51] });
                                        player.damage(1, 'fire', target);
                                        event.goto(5);
                                    }
                                } else {
                                    target.line(player, { color: [255, 68, 51] });
                                    player.damage(1, 'fire', target);
                                    event.goto(5);
                                }
                                ('step 3');
                                if (target.countCards('he') == 0) {
                                    player.line(target, { color: [255, 68, 51] });
                                    target.damage(1, 'fire', player);
                                    event.goto(5);
                                } else {
                                    var num1 = 21 - event.num;
                                    var dialog = ui.create.dialog(`当前总点数为:${event.num},可弃置一张点数不超过${num1}的牌累计之`, target.getCards('he'));
                                    target.chooseButton(1, dialog).set('ai', function (button) {
                                        if (button.link.number == num1) return 0;
                                        return button.link.number;
                                    }).filterButton = function (button) {
                                        return button.link.number <= num1;
                                    };
                                }
                                ('step 4');
                                if (result.bool) {
                                    target.discard(result.links);
                                    if (get.color(result.links[0]) == 'red') event.list.push(result.links[0]);
                                    event.num += result.links[0].number;
                                    if (event.num >= 21) {
                                        player.line(target, { color: [255, 68, 51] });
                                        target.damage(1, 'fire', player);
                                    } else event.goto(1);
                                } else {
                                    player.line(target, { color: [255, 68, 51] });
                                    target.damage(1, 'fire', player);
                                }
                                ('step 5');
                                if (event.list.length) {
                                    player.chooseCardButton([0, event.num0], `可选择其中至多${event.num0}张牌获得之`, event.list).set('ai', function (button) {
                                        return 99 - get.value(button.link);
                                    });
                                } else event.finish();
                                ('step 6');
                                if (result.bool) {
                                    player.gain(result.links);
                                    player.$gain2(result.links);
                                }
                            },
                            ai: {
                                expose: 2,
                                order: 9,
                                result: {
                                    player(player, target) {
                                        //  if(get.attitude(player,target)>0&&get.attitude(target,player)>0&&get.damageEffect(player,target,target,'fire')<=0) return 0;
                                        if (get.attitude(player, target) > 0) return 0;
                                        if (player.countCards('he') == 0) return 0;
                                        if (player.hp <= 1 && target.countCards('he') > player.countCards('he')) return 0;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        //  if(get.attitude(player,target)>0&&get.attitude(target,player)>0&&get.damageEffect(player,target,target,'fire')>1) return 1;
                                        if (get.attitude(player, target) > 0) return 0;
                                        var num = 1;
                                        if (target.hp == 1) num += 2;
                                        if (target.countCards('he') < player.countCards('he')) num += player.countCards('he') - target.countCards('he');
                                        return -(num * get.damageEffect(target, player, player, 'fire'));
                                    },
                                },
                                threaten: 1.2,
                            },
                        },
                        zmyanyanzhuangtian: {
                            group: ['zmtrenxing', 'zmyanyanzhuangtian_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:1',
                            trigger: {
                                player: 'gainAfter',
                            },
                            init(player) {
                                player.storage.zmyanyanzhuangtian = false;
                            },
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                var red = 0;
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { color: 'red' }) > 0;
                                });
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        }
                                    }
                                if (red > 0) {
                                    if (player.storage.zmyanyanzhuangtian == false) {
                                        player.storage.zmyanyanzhuangtian = true;
                                    } else {
                                        if (player.storage.zmt_np >= 10 && num4 > 0) event.goto(2);
                                    }
                                } else player.storage.zmyanyanzhuangtian = false;
                                ('step 1');
                                event.finish();
                                ('step 2');
                                player
                                    .chooseTarget('【焱焱突袭】:是否弃置场上一张红色牌？', function (card, player, target) {
                                        return target.countCards('ej', { color: 'red' }) > 0;
                                    })
                                    .set('ai', function (target) {
                                        var e = target.getDiscardableCards(player, 'e');
                                        var j = target.getDiscardableCards(player, 'j');
                                        var att1 = get.attitude(player, target);
                                        if (att1 > 0 && e.length && target.countCards('e', { color: 'red' }) > 0) return att1;
                                        if (att1 <= 0 && j.length && target.countCards('j', { color: 'red' }) > 0) return att1;
                                        return 0;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var skr = '可选择其中一张红色牌弃置';
                                    player
                                        .discardPlayerCard(event.target, 1, 'ej')
                                        .set('filterButton', function (button) {
                                            return get.color(button.link) == 'red';
                                        })
                                        .set('ai', function (button) {
                                            var att1 = get.attitude(player, event.target);
                                            if (att1 <= 0) {
                                                if (get.position(button.link) == 'e') return 1;
                                                return 0;
                                            }
                                            if (att1 > 0) {
                                                if (get.position(button.link) == 'j') return 1;
                                                return 0;
                                            }
                                            return 0;
                                        });
                                }
                                ('step 4');
                                if (result.bool && result.links && result.links.length) {
                                    player.storage.zmt_np -= 10;
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:2',
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    init(player) {
                                        player.storage.zmyanyanzhuangtian_1 = false;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        var red = 0;
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (get.color(i) == 'red') {
                                                    red++;
                                                }
                                            }
                                        if (red > 0) {
                                            if (player.storage.zmyanyanzhuangtian_1 == false) {
                                                player.storage.zmyanyanzhuangtian_1 = true;
                                            } else {
                                                if (player.storage.zmt_np >= 10) event.goto(2);
                                            }
                                        } else player.storage.zmyanyanzhuangtian_1 = false;
                                        ('step 1');
                                        event.finish();
                                        ('step 2');
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (player.countCards('h') > 4 || (player.hp > 2 && _status.currentPhase == player && player.storage.zmt_np < 30 && player.countCards('h') > 1)) return 'cance12';
                                                return '确定';
                                            })
                                            .set('prompt', '【焱焱突袭】:是否从牌堆获得一张红色牌？');
                                        ('step 3');
                                        if (result.control == '确定') {
                                            player.storage.zmt_np -= 10;
                                            var card = get.cardPile(function (card) {
                                                return get.color(card) == 'red';
                                            });
                                            if (card) {
                                                player.gain(card, 'gain2');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmjixue: {
                            init(player) {
                                player.storage.zmjixue = 0;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
                            trigger: {
                                player: 'damageAfter',
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否消耗能量获得${get.translation(event.num)}点护甲？<br>因此法获得的护甲于你结算致命伤害前出现,当前已累计${get.translation(player.storage.zmjixue)}点`;
                                return str;
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                return event.num > 0 && player.storage.zmt_np >= 30;
                            },
                            content() {
                                player.storage.zmt_np = 0;
                                player.storage.zmjixue += Math.floor(trigger.num);
                            },
                            group: ['zmjixue_1', 'zmtleiren', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjixue > 0 && event.num >= player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.zmjixue;
                                        player.storage.zmjixue = 0;
                                        player.changeHujia(num);
                                    },
                                },
                            },
                        },
                        zmchangdao: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            popup: false,
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0 && event.player.countCards('h');
                            },
                            filter(event, player) {
                                if (event.player.getCardUsable('sha') == 0 || (event.player.hasSkill('zmchangdao_00') && !event.player.getEquip('zhuge') && !event.player.hasSkill('zmchusha0'))) return false;
                                return event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    var next = player.chooseToUse();
                                    next.set('openskilldialog', get.prompt2('zmchangdaox'));
                                    next.set('norestore', true);
                                    next.set('_backupevent', 'zmchangdaox');
                                    next.set('custom', {
                                        add: {},
                                        replace: { window() { } },
                                    });
                                    next.backup('zmchangdaox');
                                } else {
                                    var next = trigger.player.chooseToUse();
                                    next.set('openskilldialog', get.prompt2('zmchangdaox'));
                                    next.set('norestore', true);
                                    next.set('_backupevent', 'zmchangdaox');
                                    next.set('custom', {
                                        add: {},
                                        replace: { window() { } },
                                    });
                                    next.backup('zmchangdaox');
                                }
                                ('step 1');
                                //if(ui.confirm){ui.confirm.close();};
                            },
                            group: ['zmchangdao_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: ['shaAfter', 'phaseUseBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == _status.currentPhase && event.player.getCardUsable('sha') == 0;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.addTempSkill('zmchangdao_00');
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:5',
                                },
                                2: {
                                    audio: 'ext:综漫季刊陆/audio:7',
                                },
                                '00': {},
                            },
                        },
                        zmxuechang: {
                            nobracket: true,
                            enable: 'phaseUse',
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                return num44 > 0;
                            },
                            filterTarget(card, player, target) {
                                return target.hp > player.hp;
                            },
                            selectTarget() {
                                return [1, Infinity];
                            },
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmxuechang2')) {
                                    player.addSkill('zmxuechang2');
                                    game.playzm6('zmdusake1');
                                    game.mp426('zmdusake1');
                                    if (player.name == 'zm_10kuangdusake' || player.name1 == 'zm_10kuangdusake') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身杜萨克.jpg');
                                    } else if (player.name2 == 'zm_10kuangdusake') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身杜萨克.jpg');
                                    }
                                } else {
                                    if (player.storage.zmxuechang2 == 0) {
                                        game.playzm6('zmdusake2');
                                        game.mp426('zmdusake2');
                                    } else game.playzm6('zmdusake2');
                                    player.storage.zmxuechang2++;
                                }
                                ('step 1');
                                player.storage.zmxuechang = true;
                                player.awakenSkill('zmxuechang');
                                ('step 2');
                                for (var i = 0; i < targets.length; i++) {
                                    player.line(targets[i], { color: [214, 0, 0] });
                                    if (!targets[i].hasSkill('zmxuechang3')) {
                                        targets[i].addSkill('zmxuechang3');
                                    } else {
                                        targets[i].storage.zmxuechang3++;
                                    }
                                    targets[i].damage();
                                }
                            },
                            ai: {
                                expose: 2,
                                damage: true,
                                threaten: 2.5,
                                order: 6,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        zmxuechang2: {
                            init(player) {
                                player.storage.zmxuechang2 = 0;
                            },
                            ai: {
                                threaten: 3.4,
                            },
                        },
                        zmxuechang3: {
                            init(player) {
                                player.storage.zmxuechang3 = 1;
                            },
                            mark: true,
                            marktext: '偿',
                            intro: {
                                content: '对你使用的【杀】额外结算#次',
                            },
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmxuechang2');
                                });
                                if (event.getParent(3).name == 'zmxuechang3') return false;
                                if (event.getParent(2).name == 'zmxuechang3') return false;
                                if (event.parent.name == 'zmxuechang3') return false;
                                return event.card && event.card.name == 'sha' && player.storage.zmxuechang3 > 0 && num4 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = player.storage.zmxuechang3;
                                ('step 1');
                                event.num--;
                                trigger.player.useCard(trigger.card, trigger.cards, player, false);
                                ('step 2');
                                if (event.num > 0 && player.isAlive()) event.goto(1);
                            },
                            group: ['zmxuechang3_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmxuechang2');
                                        });
                                        return num4 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        ('step 1');
                                        if (event.current.hasSkill('zmxuechang2')) {
                                            player.line(event.current, { color: [214, 0, 0] });
                                            event.current.storage.zmxuechang = false;
                                            event.current.restoreSkill('zmxuechang');
                                        }
                                        ('step 2');
                                        if (event.current.next != player) {
                                            event.current = event.current.next;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        zmchangdaox: {
                            viewAs: {
                                name: 'sha',
                            },
                            filterCard: true,
                            position: 'hs',
                            selectCard: 1,
                            check(card) {
                                return 5 - get.value(card);
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
                                    if (lib.linked.includes(get.nature(item))) {
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
                            },
                        },
                        zmbingxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:3',
                            trigger: {
                                global: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                if (get.color(event.card) == undefined) return false;
                                game.filterPlayer(function (current) {
                                    if (current.countCards('ej') > 0) {
                                        var ej = current.getCards('ej');
                                        for (var i = 0; i < ej.length; i++) {
                                            if (get.color(ej[i]) == get.color(event.card)) num++;
                                        }
                                    }
                                });
                                return event.target.isAlive() && num > 2;
                            },
                            content() {
                                'step 0';
                                var num1 = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    if (get.attitude(player, trigger.targets[i]) > 0) {
                                        num1++;
                                    }
                                }
                                var dialog = ui.create.dialog(`【兵仙】:可令场上三张${get.translation(get.color(trigger.card))}色牌返回其主手牌中,之后${get.translation(trigger.player)}使用的杀额外结算一次`, 'hidden');
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.getCards('ej').length) {
                                        dialog.addText(`【${get.translation(i)}】场上的牌`);
                                        dialog.add(i.getCards('ej'));
                                    }
                                }
                                player
                                    .chooseButton(dialog, 3)
                                    .set('filterButton', function (button) {
                                        return get.color(button.link) == get.color(trigger.card);
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, trigger.player);
                                        var owner = get.owner(button.link);
                                        if (num1 > 0) return 0;
                                        if (get.attitude(player, owner) < 0 && get.position(button.link) == 'j') {
                                            return 0;
                                        }
                                        if (get.attitude(player, owner) <= 0 && button.link.name == 'baiyin' && owner.isDamaged()) {
                                            return 0;
                                        }
                                        if (get.attitude(player, owner) > 0 && button.link.name == 'baiyin' && owner.isDamaged()) {
                                            return 99;
                                        }
                                        if (owner == player) {
                                            return 18 - get.value(button.link);
                                        }
                                        return owner.getUseValue(button.link) + 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        var owner = get.owner(list[i]);
                                        player.line(owner);
                                        owner.gain(list[i], owner);
                                        game.log(owner, '将', list[i], '收入手牌');
                                    }
                                } else event.finish();
                                ('step 2');
                                trigger.player.useCard(trigger.card, trigger.cards, trigger.targets, false);
                            },
                            group: ['zmbingxian_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.canMoveCard() && event.player.countCards('ej');
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseButton([`是否取消对${get.translation(trigger.player)}造成的${get.translation(trigger.num)}点伤害并移动其场上一张牌？若移动后其场上没有牌此伤害仍生效`, trigger.player.getCards('ej')]);
                                        next.filterButton = function (button) {
                                            var player = _status.event.player;
                                            var sub = get.subtype(button.link);
                                            var num11 = game.hasPlayer(function (current) {
                                                return !current.getEquip(1);
                                            });
                                            var num22 = game.hasPlayer(function (current) {
                                                return !current.getEquip(2);
                                            });
                                            var num33 = game.hasPlayer(function (current) {
                                                return !current.getEquip(3);
                                            });
                                            var num44 = game.hasPlayer(function (current) {
                                                return !current.getEquip(4);
                                            });
                                            var num55 = game.hasPlayer(function (current) {
                                                return !current.getEquip(5);
                                            });
                                            if (sub == 'equip1' && num11 == 0) {
                                                return false;
                                            }
                                            if (sub == 'equip2' && num22 == 0) {
                                                return false;
                                            }
                                            if (sub == 'equip3' && num33 == 0) {
                                                return false;
                                            }
                                            if (sub == 'equip4' && num44 == 0) {
                                                return false;
                                            }
                                            if (sub == 'equip5' && num55 == 0) {
                                                return false;
                                            }
                                            return true;
                                        };
                                        next.set('ai', function (button) {
                                            var sub = get.subtype(button.link);
                                            var num1 = game.hasPlayer(function (current) {
                                                return !current.getEquip(1) && get.attitude(player, current) > 0;
                                            });
                                            var num2 = game.hasPlayer(function (current) {
                                                return !current.getEquip(2) && get.attitude(player, current) > 0;
                                            });
                                            var num3 = game.hasPlayer(function (current) {
                                                return !current.getEquip(3) && get.attitude(player, current) > 0;
                                            });
                                            var num4 = game.hasPlayer(function (current) {
                                                return !current.getEquip(4) && get.attitude(player, current) > 0;
                                            });
                                            var num5 = game.hasPlayer(function (current) {
                                                return !current.getEquip(5) && get.attitude(player, current) > 0;
                                            });
                                            var att = get.attitude(player, trigger.player);
                                            if (att > 0 && trigger.player.countCards('j') == 0 && trigger.player.countCards('e') == 1) return 0;
                                            if (att <= 0 && trigger.player.hp <= trigger.num) return 0;
                                            // if(att<=0&&trigger.num>1) return 0;
                                            if (att <= 0 && trigger.player.countCards('ej') > 1 && button.link.name != 'bagua' && button.link.name != 'renwang') {
                                                return 0;
                                            }
                                            if (att <= 0 && get.position(button.link) == 'j') {
                                                return 0;
                                            }
                                            if (att > 0 && button.link.name == 'baiyin' && trigger.player.isDamaged()) {
                                                return 99;
                                            }
                                            if (att > 0 && get.position(button.link) == 'j') {
                                                return 99;
                                            }
                                            if (att <= 0) {
                                                if (sub == 'equip1' && num1 == 0) {
                                                    return 0;
                                                }
                                                if (sub == 'equip2' && num2 == 0) {
                                                    return 0;
                                                }
                                                if (sub == 'equip3' && num3 == 0) {
                                                    return 0;
                                                }
                                                if (sub == 'equip4' && num4 == 0) {
                                                    return 0;
                                                }
                                                if (sub == 'equip5' && num5 == 0) {
                                                    return 0;
                                                }
                                            }
                                            if (trigger.player == player) {
                                                return 12 - get.value(button.link);
                                            }
                                            return get.value(button.link) + 1;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            event.card = result.links[0];
                                            player
                                                .chooseTarget(`选择${get.translation(result.links[0])}的目标角色`, function (card, player, target) {
                                                    var sub = get.subtype(result.links[0]);
                                                    if (sub == 'equip1' && target.getEquip(1)) {
                                                        return false;
                                                    }
                                                    if (sub == 'equip2' && target.getEquip(2)) {
                                                        return false;
                                                    }
                                                    if (sub == 'equip3' && target.getEquip(3)) {
                                                        return false;
                                                    }
                                                    if (sub == 'equip4' && target.getEquip(4)) {
                                                        return false;
                                                    }
                                                    if (sub == 'equip5' && target.getEquip(5)) {
                                                        return false;
                                                    }
                                                    return true;
                                                })
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    var att = get.attitude(player, target);
                                                    return att;
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            trigger.player.line(result.targets[0]);
                                            if (get.type(event.card) == 'equip') {
                                                result.targets[0].equip(event.card);
                                            } else {
                                                result.targets[0].addJudge(event.card);
                                                result.targets[0].$draw(event.card);
                                            }
                                        } else event.finish();
                                        ('step 3');
                                        if (trigger.player.countCards('ej') > 0) {
                                            trigger.cancel();
                                        }
                                    },
                                },
                            },
                        },
                        zmguoshi2: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                if (!player.num('h') || player.num('h') % 2 == 0) return false;
                                return player.storage.zmt_np >= 5 && _status.currentPhase == player;
                            },
                            filterCard(card, player) {
                                var num = Math.floor(player.countCards('h') / 2);
                                return card == player.getCards('h')[num];
                            },
                            viewAs: {
                                name: 'wuzhong',
                            },
                            viewAsFilter(player) {
                                var card = player.getCards('h')[0];
                                if (!player.num('h') || player.num('h') % 2 == 0) return false;
                                return player.storage.zmt_np >= 5;
                            },
                            precontent() {
                                'step 0';
                                if (player.storage.zmt_np >= 5) {
                                    player.storage.zmt_np -= 5;
                                }
                                ('step 1');
                                if (player.storage.zmt_np < 0) {
                                    player.storage.zmt_np = 0;
                                }
                            },
                            prompt: '可将最中间手牌当作【无中生有】使用',
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
                            },
                        },
                        zmguoshi: {
                            group: ['zmtrenxing', 'zmguoshi2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                if (!player.num('h') || player.num('h') % 2 == 0) return false;
                                return player.storage.zmt_np >= 5 && _status.currentPhase != player;
                            },
                            filterCard(card, player) {
                                var num = Math.floor(player.countCards('h') / 2);
                                return card == player.getCards('h')[num];
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            viewAsFilter(player) {
                                var card = player.getCards('h')[0];
                                if (!player.num('h') || player.num('h') % 2 == 0) return false;
                                return player.storage.zmt_np >= 5;
                            },
                            precontent() {
                                'step 0';
                                event.num = player.storage.zmt_np - 5;
                                if (player.storage.zmt_np >= 5) {
                                    player.storage.zmt_np -= 5;
                                }
                                ('step 1');
                                if ((player.storage.zmt_np = event.num - 5)) {
                                    player.storage.zmt_np = event.num + 5;
                                }
                                if (player.storage.zmt_np < 0) {
                                    player.storage.zmt_np = 0;
                                }
                            },
                            prompt: '可将最中间手牌当作【无懈可击】使用',
                            check(card) {
                                var card1 = { name: 'wuxie' };
                                return get.value(card1) - get.value(card);
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
                        zmbaihongguanri: {
                            audio: 'ext:综漫季刊陆/audio:5',
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets) return false;
                                return event.card.name == 'sha' && event.card.number != undefined;
                            },
                            content() {
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    if (trigger.card.number < trigger.targets[i].hp) {
                                        trigger.baseDamage++;
                                    }
                                    if (!trigger.targets[i].hasSkill('zmbaihongguanri_0')) {
                                        trigger.targets[i].addTempSkill('zmbaihongguanri_0');
                                        trigger.targets[i].storage.zmbaihongguanri_0 = trigger.card.number;
                                    } else {
                                        if (trigger.targets[i].storage.zmbaihongguanri_0 < trigger.card.number) {
                                            trigger.targets[i].storage.zmbaihongguanri_0 = trigger.card.number;
                                        }
                                    }
                                }
                            },
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtsuzheng'],
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '贯',
                                    intro: {
                                        content: '本回合不能使用点数大于#的牌',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmbaihongguanri_0 = 0;
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (player.storage.zmbaihongguanri_0 > 0) {
                                                if (card.number > player.storage.zmbaihongguanri_0) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmrendaoqingying: {
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return event.source && event.source.isAlive() && !event.source.hasSkill('zmrendaoqingying_1');
                            },
                            logTarget: 'source',
                            check(event, player) {
                                if (event.player.hp > player.hp && player.storage.zmt_np < 50) return false;
                                if (_status.currentPhase == event.source && _status.event.getParent('phaseJudge').name == 'phaseJudge') return false;
                                if (_status.currentPhase == event.source && _status.event.getParent('phaseDraw').name == 'phaseDraw') return false;
                                return get.attitude(player, event.source) > 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.source.name != 'zm_02gongyii') {
                                    game.playzm6(['zmrendaoqingying22', 'zmrendaoqingying21', 'zmrendaoqingying6', 'zmrendaoqingying2'].randomGet());
                                }
                                player.storage.zmt_np -= 20;
                                trigger.source.addSkill('zmrendaoqingying_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseDiscardBefore', 'phaseJieshuBefore', 'phaseUseBefore', 'phaseDrawBefore', 'phaseJudgeBefore', 'phaseZhunbeiBefore'],
                                    },
                                    forced: true,
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmrendaoqingying_1');
                                        if (player.name == 'zm_02gongyii') {
                                            game.playzm6(['zmrendaoqingying1', 'zmrendaoqingying6', 'zmrendaoqingying2', 'zmrendaoqingying3', 'zmrendaoqingying4', 'zmrendaoqingying5'].randomGet());
                                        }
                                        trigger.untrigger();
                                        trigger.finish();
                                        ('step 1');
                                        player.phaseDraw();
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmshirizhishang: {
                            nobracket: true,
                            trigger: {
                                global: ['changeHp', 'gameDrawAfter', 'enterGame'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'changeHp') {
                                    var zs = game.countPlayer() - 1;
                                    if (!player.countCards('h') && player.hp == player.maxHp) return false;
                                    if (event.num > 0) {
                                        var num = event.player.hp - event.num;
                                        var num0 = game.countPlayer(function (current) {
                                            return current.hp > num && current != event.player;
                                        });
                                        var num2 = game.countPlayer(function (current) {
                                            return current.hp < num && current != event.player;
                                        });
                                        var num1 = game.countPlayer(function (current) {
                                            return current.isMaxHp(true);
                                        });
                                        if (num2 == zs && event.player.isMaxHp(true)) return false;
                                        if (num0 == 0 && num1 > 0) return true;
                                    }
                                    if (event.num < 0) {
                                        var num = event.player.hp - event.num;
                                        var num0 = game.countPlayer(function (current) {
                                            return current.hp > num && current != event.player;
                                        });
                                        var num1 = game.countPlayer(function (current) {
                                            return current.isMaxHp(true);
                                        });
                                        var num2 = game.countPlayer(function (current) {
                                            return current.hp < num && current != event.player;
                                        });
                                        if (num2 == zs && event.player.isMaxHp(true)) return false;
                                        if (num0 == 0 && num1 > 0) return true;
                                    }
                                    return false;
                                } else {
                                    //if(!player.countCards('h')) return false;
                                    if (name == 'gameDrawAfter') {
                                        var num1 = game.countPlayer(function (current) {
                                            return current.isMaxHp(true);
                                        });
                                        return num1 > 0;
                                    }
                                    if (name == 'enterGame' && game.roundNumber > 1) {
                                        return event.player.isMaxHp(true);
                                    }
                                    return false;
                                }
                            },
                            content() {
                                'step 0';
                                player.recover();
                                if (player.countCards('h')) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        var num0 = hs[i].number - 3;
                                        if (num0 < 1) {
                                            num0 = 1;
                                        }
                                        if (num0 >= 1) {
                                            hs[i].init([hs[i].suit, num0, hs[i].name]);
                                        }
                                    }
                                } else event.finish();
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current.isMaxHp(true)) {
                                        event.target = current;
                                    }
                                });
                                ('step 2');
                                if (event.target) {
                                    var target = event.target;
                                    var next = player.chooseCard(1, 'h', `是否将一张手牌当作【杀】对${get.translation(target)}使用？`, function (card, player) {
                                        return true;
                                    });
                                    var att1 = get.attitude(target, player);
                                    var att2 = get.effect(target, { name: 'sha' }, player, player);
                                    next.ai = function (card) {
                                        if (att1 < 0 && att2 > 0) {
                                            if (!player.hasSkill('unequip') && !player.getEquip('zhuque') && target.getEquip('tengjia')) return 0;
                                            if (!player.hasSkill('unequip') && target.getEquip('renwang') && get.color(card) == 'black') return 0;
                                            return 8 - get.value(card) + (13 - card.number / 6);
                                        }
                                        return -1;
                                    };
                                }
                                ('step 3');
                                if (result.bool) {
                                    var card = result.cards;
                                    player.useCard({ name: 'sha' }, card, event.target);
                                }
                            },
                        },
                        zmyiliyoujun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                global: 'discardAfter',
                            },
                            check(event, player) {
                                var red = 0;
                                var black = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        } else black++;
                                    }
                                if (get.attitude(player, event.player) < 0 && event.player.countCards('h') == 0) {
                                    return (event.player.countCards('e', { color: 'black' }) && black == 0) || (event.player.countCards('e', { color: 'red' }) && red == 0);
                                }
                                if ((player.hp > 1 && !event.player.hasSkill('unequip') && (player.getEquip('bagua') || player.getEquip('renwang') || player.getEquip('tengjia'))) || get.effect(player, { name: 'sha' }, event.player, event.player) <= 0) {
                                    return get.attitude(player, event.player) < 0;
                                }
                                if (player.hp > 1 && (red == 0 || black == 0)) {
                                    return get.attitude(player, event.player) < 0;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.getParent(2).name == 'zmyiliyoujun') return false;
                                return event.cards && event.cards.length && event.player != player && event.player.countCards('he');
                            },
                            content() {
                                'step 0';
                                var red = 0;
                                var black = 0;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        } else black++;
                                    }
                                player.discardPlayerCard(trigger.player, 1, 'he', true).set('ai', function (button) {
                                    if (get.position(button.link) == 'e' && red == 0 && get.color(button.link) == 'red') return 18;
                                    if (get.position(button.link) == 'e' && black == 0 && get.color(button.link) == 'black') return 17;
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    if (get.attitude(player, target) > 0) return -1.5;
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.links && result.links.length) {
                                    var kg = 0;
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (get.color(i) == get.color(result.links[0])) {
                                                kg++;
                                            }
                                        }
                                    if (kg > 0) {
                                        event.cards = result.links;
                                    } else event.finish();
                                }
                                ('step 2');
                                trigger.player.useCard({ name: 'sha' }, event.cards, player);
                            },
                        },
                        zmqingqiuzhizhu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            check(event, player) {
                                var num0 = 0;
                                var cards1 = player.getCards('h');
                                if (player.isMaxHandcard()) return true;
                                for (var i = 0; i < cards1.length; i++) {
                                    if (player.getUseValue(cards1[i]) >= 8) num0++;
                                }
                                if (num0 == 0 || player.countCards('h') <= 2 || player.hp <= 1) return true;
                                return false;
                            },
                            content() {
                                player.storage.zmt_np -= 20;
                                player.addTempSkill('zmqingqiuzhizhu_0');
                                player.draw(2);
                            },
                            group: ['zmqingqiuzhizhu_2', 'zmqingqiuzhizhu_1', 'zmtyeshou', 'zmtmoxing'],
                            subSkill: {
                                0: {
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (target.countCards('h') >= player.countCards('h')) return false;
                                        },
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmqingqiuzhizhu_1 = true;
                                    },
                                    trigger: {
                                        player: 'discardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        var tp1 = 0;
                                        var tp2 = 0;
                                        var tp3 = 0;
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (get.value(i) > 3 && get.type(i, 'trick') == 'trick') {
                                                    tp3++;
                                                }
                                                if (get.value(i) > 4 && get.type(i, 'trick') == 'equip') {
                                                    tp2++;
                                                }
                                                if (get.value(i) > 2 && get.type(i, 'trick') == 'basic') {
                                                    tp1++;
                                                }
                                            }
                                        var tp11 = 0;
                                        var tp22 = 0;
                                        var tp33 = 0;
                                        var cards1 = player.getCards('he');
                                        for (var i = 0; i < cards1.length; i++) {
                                            if (get.value(cards1[i]) <= 5) {
                                                if (get.type(cards1[i], 'trick') == 'trick') {
                                                    tp33++;
                                                }
                                                if (get.type(cards1[i], 'trick') == 'equip') {
                                                    tp22++;
                                                }
                                                if (get.type(cards1[i], 'trick') == 'basic') {
                                                    tp11++;
                                                }
                                            }
                                        }
                                        player
                                            .chooseTarget('【青丘之主】令一名角色弃置一张牌？', function (card, player, target) {
                                                return target.countCards('he');
                                            })
                                            .set('ai', function (target) {
                                                if (player.storage.zmqingqiuzhizhu_1 == true && ((tp1 > 2 && tp11 > 0) || (tp2 > 2 && tp22 > 0) || (tp3 > 2 && tp33 > 0))) {
                                                    return target == player && target.countCards('h');
                                                }
                                                return -get.attitude(player, target);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (result.targets[0] == player) {
                                                player.storage.zmqingqiuzhizhu_1 = false;
                                                var next = player.chooseToDiscard(true, 1, 'he', `须弃置一张牌,之后你收回${get.translation(trigger.cards)}中的同类牌`, function (card, player) {
                                                    return true;
                                                });
                                                next.ai = function (card) {
                                                    var tp1 = 0;
                                                    var tp2 = 0;
                                                    var tp3 = 0;
                                                    if (Array.isArray(trigger.cards))
                                                        for (var i of trigger.cards) {
                                                            if (get.value(i) > 3 && get.type(i, 'trick') == 'trick') {
                                                                tp3++;
                                                            }
                                                            if (get.value(i) > 4 && get.type(i, 'trick') == 'equip') {
                                                                tp2++;
                                                            }
                                                            if (get.value(i) > 2 && get.type(i, 'trick') == 'basic') {
                                                                tp1++;
                                                            }
                                                        }
                                                    if (get.type(card[i], 'trick') == 'trick' && get.value(card) <= 5 && tp3 > 2) return 99;
                                                    if (get.type(card[i], 'trick') == 'equip' && get.value(card) <= 5 && tp2 > 2) return 98;
                                                    if (get.type(card[i], 'trick') == 'basic' && get.value(card) <= 5 && tp1 > 2) return 97;
                                                    return -get.value(card);
                                                };
                                            } else {
                                                var next = result.targets[0].chooseToDiscard(1, `须弃置一张牌,之后${get.translation(player)}收回${get.translation(trigger.cards)}中的同类牌`, 'he', true);
                                                var att = get.attitude(_status.event.player, result.targets[0]);
                                                next.ai = function (card) {
                                                    var tp1 = 0;
                                                    var tp2 = 0;
                                                    var tp3 = 0;
                                                    if (Array.isArray(trigger.cards))
                                                        for (var i of trigger.cards) {
                                                            if (get.value(i) > 3 && get.type(i, 'trick') == 'trick') {
                                                                tp3++;
                                                            }
                                                            if (get.value(i) > 4 && get.type(i, 'trick') == 'equip') {
                                                                tp2++;
                                                            }
                                                            if (get.value(i) > 2 && get.type(i, 'trick') == 'basic') {
                                                                tp1++;
                                                            }
                                                        }
                                                    if (att > 0) {
                                                        if (get.type(card, 'trick') == 'trick' && get.value(card) < 5 && tp3 > 2) return 99;
                                                        if (get.type(card, 'trick') == 'equip' && get.value(card) < 5 && tp2 > 2) return 98;
                                                        if (get.type(card, 'trick') == 'basic' && get.value(card) < 5 && tp1 > 2) return 97;
                                                        return -get.value(card);
                                                    }
                                                    return -get.value(card);
                                                };
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            var type = get.type(result.cards[0], 'trick');
                                            var list = [];
                                            if (Array.isArray(trigger.cards))
                                                for (var i of trigger.cards) {
                                                    if (get.type(i, 'trick') == type) {
                                                        list.push(i);
                                                    }
                                                }
                                            if (list.length) {
                                                player.gain(list, 'gain2');
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
                                        return player.storage.zmqingqiuzhizhu_1 == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmqingqiuzhizhu_1 = true;
                                    },
                                },
                            },
                        },
                        zmshengya: {
                            group: ['zmtleiren', 'zmtyeshou'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:6',
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            position: 'h',
                            selectCard: [1, Infinity],
                            check(card, event) {
                                return 10 - get.value(card);
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) && player.storage.zmt_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            filterCard(card) {
                                return card.name == 'sha';
                            },
                            contentBefore() {
                                player.storage.zmt_np -= 10;
                                var num = cards.length;
                                player.lose(cards);
                                player.$throw(cards);
                                game.log(player, '重铸了', cards);
                                player.draw(num);
                            },
                            content() {
                                'step 0';
                                player.useCard({ name: 'sha' }, target, true);
                            },
                            ai: {
                                expose: 0.8,
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -get.effect(target, { name: 'sha' }, player, player);
                                    },
                                },
                            },
                        },
                        zmxiaoyue: {
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
                            content() {
                                'step 0';
                                game.playzm6('zmquan');
                                game.mp426('zmquan');
                                ('step 1');
                                if (player.name == 'zm_10kuangquan' || player.name1 == 'zm_10kuanquan') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身犬.jpg');
                                } else if (player.name2 == 'zm_10kuangquan') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身犬.jpg');
                                }
                                var num = game.roundNumber;
                                //   player.draw(num);
                                player.recover(num);
                                player.storage.zmxiaoyue = true;
                                player.awakenSkill('zmxiaoyue');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.hp > 2) return 0;
                                        if (player.countCards('hs', { name: 'tao' }) + player.countCards('hs', { name: 'jiu' }) > 1 && player.hp == 1) return 0;
                                        return 1;
                                    },
                                },
                                threaten: 1.3,
                            },
                            group: ['zmxiaoyue_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:3',
                                    preHidden: true,
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmshengya == true) return false;
                                        return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o' && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.gain(trigger.cards, 'gain2');
                                    },
                                },
                            },
                        },
                        zmchongyun: {
                            group: ['zmchongyun_0', 'zmtyeshou', 'zmchongyun_11', 'zmchongyun_22', 'zmchongyun_33'],
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 10;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 10;
                                game.playzm6(['zmchongyun11', 'zmchongyun12', 'zmchongyun13'].randomGet());
                                ('step 1');
                                event.card = get.cards()[0];
                                player.gain(event.card, 'gain2');
                                if (get.type(event.card, 'trick') == 'basic' && !player.hasSkill('zmchongyun_1')) {
                                    player.addTempSkill('zmchongyun_1');
                                    player.storage.zmchongyun_1 = true;
                                }
                                if (get.type(event.card, 'trick') == 'equip' && !player.hasSkill('zmchongyun_2')) {
                                    player.addTempSkill('zmchongyun_2');
                                    player.storage.zmchongyun_2 = true;
                                }
                                if (get.type(event.card, 'trick') == 'trick' && !player.hasSkill('zmchongyun_3')) {
                                    player.addTempSkill('zmchongyun_3');
                                    player.storage.zmchongyun_3 = true;
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > 5 && player.hp > 2) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'phaseUseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCard(`是否交给${get.translation(trigger.player)}一张牌？若如此做,限一次其本回合使用同类牌时你可额外指定一名目标`, 1, 'he', false, function (card) {
                                                return true;
                                            })
                                            .set('ai', function (card) {
                                                var att = get.attitude(player, trigger.player);
                                                if (att > 0 && trigger.player.countCards('h') > player.countCards('h') && trigger.player.hp > player.hp && player.countCards('h') < 3) return 0;
                                                if (att > 0) {
                                                    if (get.type(card, 'trick') == 'equip') return 0;
                                                    return 7 - get.value(card);
                                                } else {
                                                    var num44 = game.countPlayer(function (current) {
                                                        return get.attitude(player, current) > 0 && current != player;
                                                    });
                                                    if (card.name == 'du') return 99;
                                                    //  if(num44==0&&(get.type(card,'trick')=='equip'||get.type(card)=='delay')&&trigger.player.countCards('h')>5) return 3-get.value(card);
                                                    return 0;
                                                }
                                                return 0;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            game.playzm6(['zmchongyun11', 'zmchongyun22', 'zmchongyun21'].randomGet());
                                            trigger.player.gain(result.cards, player, 'give');
                                            if (get.type(result.cards[0], 'trick') == 'basic' && !trigger.player.hasSkill('zmchongyun_1')) {
                                                trigger.player.addTempSkill('zmchongyun_1');
                                                trigger.player.storage.zmchongyun_1 = true;
                                            }
                                            if (get.type(result.cards[0], 'trick') == 'equip' && !trigger.player.hasSkill('zmchongyun_2')) {
                                                trigger.player.addTempSkill('zmchongyun_2');
                                                trigger.player.storage.zmchongyun_2 = true;
                                            }
                                            if (get.type(result.cards[0], 'trick') == 'trick' && !trigger.player.hasSkill('zmchongyun_3')) {
                                                trigger.player.addTempSkill('zmchongyun_3');
                                                trigger.player.storage.zmchongyun_3 = true;
                                            }
                                        }
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmchongyun_1 = false;
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmchongyun_2 = false;
                                    },
                                },
                                3: {
                                    init(player) {
                                        player.storage.zmchongyun_3 = false;
                                    },
                                },
                                11: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card);
                                        if (event.card.name == 'shan') return false;
                                        return type == 'basic' && event.player.storage.zmchongyun_1 == true && event.player.hasSkill('zmchongyun_1');
                                    },
                                    content() {
                                        'step 0';
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
                                                .chooseTarget(`【冲云】是否为${get.translation(trigger.card)}额外指定一名目标？`, function (card, player, target) {
                                                    var trigger = _status.event.getTrigger();
                                                    if (trigger.targets.includes(target)) return false;
                                                    return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    var player = _status.event.player;
                                                    return ai.get.effect(target, trigger.card, player, player);
                                                });
                                        } else {
                                            if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                                event.finish();
                                            }
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.storage.zmchongyun_1 = false;
                                            player.line(result.targets);
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.target) {
                                            trigger.targets.add(event.target);
                                            game.log(event.target, `成为了${get.translation(trigger.card)}的额外目标`);
                                        }
                                        event.finish();
                                    },
                                },
                                22: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card);
                                        return type == 'equip' && event.player.storage.zmchongyun_2 == true && event.player.hasSkill('zmchongyun_2');
                                    },
                                    content() {
                                        'step 0';
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
                                                .chooseTarget(`【冲云】是否为${get.translation(trigger.card)}额外指定一名目标？`, function (card, player, target) {
                                                    var trigger = _status.event.getTrigger();
                                                    if (trigger.targets.includes(target)) return false;
                                                    return false;
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    var player = _status.event.player;
                                                    return ai.get.effect(target, trigger.card, player, player);
                                                });
                                        } else {
                                            if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                                event.finish();
                                            }
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.storage.zmchongyun_2 = false;
                                            player.line(result.targets);
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.target) {
                                            trigger.targets.add(event.target);
                                            game.log(event.target, `成为了${get.translation(trigger.card)}的额外目标`);
                                        }
                                        event.finish();
                                    },
                                },
                                33: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name == 'wuxie') return false;
                                        return get.type(event.card, 'trick') == 'trick' && event.player.storage.zmchongyun_3 == true && event.player.hasSkill('zmchongyun_3');
                                    },
                                    content() {
                                        'step 0';
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
                                                .chooseTarget(`【冲云】是否为${get.translation(trigger.card)}额外指定一名目标？`, function (card, player, target) {
                                                    var trigger = _status.event.getTrigger();
                                                    if (trigger.targets.includes(target)) return false;
                                                    return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                                })
                                                .set('ai', function (target) {
                                                    var trigger = _status.event.getTrigger();
                                                    var player = _status.event.player;
                                                    return ai.get.effect(target, trigger.card, player, player);
                                                });
                                        } else {
                                            if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                                event.finish();
                                            }
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.storage.zmchongyun_3 = false;
                                            player.line(result.targets);
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.target) {
                                            trigger.targets.add(event.target);
                                            game.log(event.target, `成为了${get.translation(trigger.card)}的额外目标`);
                                        }
                                        event.finish();
                                    },
                                },
                            },
                        },
                        zmcangming: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:4',
                            trigger: {
                                source: 'damageBegin',
                            },
                            prompt(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var types = [];
                                for (var i = 0; i < history.length; i++) {
                                    var type = get.type(history[i].card, 'trick');
                                    if (type && !types.includes(type)) types.add(type);
                                }
                                return `是否令${get.translation(event.player)}弃置${get.translation(types.length)}张牌？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var types = [];
                                for (var i = 0; i < history.length; i++) {
                                    var type = get.type(history[i].card, 'trick');
                                    if (type && !types.includes(type)) types.add(type);
                                }
                                return types.length && event.player.countCards('he') && event.player != player;
                            },
                            content() {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var types = [];
                                for (var i = 0; i < history.length; i++) {
                                    var type = get.type(history[i].card, 'trick');
                                    if (type && !types.includes(type)) types.add(type);
                                }
                                var num = types.length;
                                player.line(trigger.player, { color: [68, 51, 153] });
                                trigger.player.chooseToDiscard(num, 'he', true);
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        zmxingyunyayue: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmxingyunyayue_1')) {
                                    game.playzm6(['zmxingyunyayue1', 'zmxingyunyayue2'].randomGet());
                                    player.addTempSkill('zmxingyunyayue_1');
                                }
                                player.storage.zmt_np -= 10;
                                player.discard(player.getCards('h'));
                                ('step 1');
                                target.draw();
                            },
                            ai: {
                                threaten: 0.3,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        var cards = player.getCards('h');
                                        var num0 = 0;
                                        if (cards.length) {
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    num0 += get.value(i);
                                                }
                                        }
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player && current.hp <= 2;
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player;
                                        });
                                        if (num0 >= 15) return 0;
                                        if (player.storage.zmt_np <= 30 && player.countCards('h') == 0 && target != player) return 0;
                                        if ((num0 >= 6 && num4 == 0) || get.attitude(player, target) <= 0) return 0;
                                        if (!player.hasSkill('zmxingyunyayue_1') && player.hp > 2 && player.storage.zmt_np < 20) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (!player.hasSkill('zmxingyunyayue_1') && player.hp > 2 && player.storage.zmt_np < 20) return 0;
                                        if (target == player && player.countCards('h') == 0) return 99;
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player && current.hp <= 2;
                                        });
                                        var cards = player.getCards('h');
                                        var num0 = 0;
                                        if (cards.length) {
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    num0 += get.value(i);
                                                }
                                        }
                                        if (num4 > 0 && num0 < 15 && player.hp > 1) {
                                            if (target.countCards('h') > player.countCards('h') && target.hp > player.hp && player.storage.zmt_np <= 30) return 0;
                                            if (get.attitude(player, target) > 0 && target.hp == 1) return 18;
                                            if (get.attitude(player, target) > 0 && target.hp < 3 && target.countCards('h') < 2) return 10;
                                            if (target == player) return 2;
                                            return 1;
                                        } else {
                                            if (num0 >= 15) return 0;
                                            if (target.countCards('h') > player.countCards('h') && target.hp > player.hp && player.storage.zmt_np <= 30) return 0;
                                            if (target == player && num0 < 6 && player.storage.zmt_np <= 30) return 25;
                                            if (num0 < 6 && player.storage.zmt_np > 30 && target != player && get.attitude(player, target) > 0) return 10;
                                            return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                            group: ['zmtrenxing'],
                            subSkill: {
                                1: {},
                            },
                        },
                        zmfanxianheyue: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmfanxianheyue = 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmfanxianheyue'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmfanxianheyue_1');
                                        });
                                        if (num4 > 0) return 0;
                                        var player = _status.event.player;
                                        var num = target.countCards('h') + 1;
                                        if (target != player && get.attitude(player, target) > 0) num *= 2;
                                        if (target.hasJudge('lebu')) num = 0;
                                        return get.attitude(player, target) * num;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (player == result.targets[0]) {
                                        game.playzm6(['zmfanxianheyue11', 'zmfanxianheyue12'].randomGet());
                                    } else {
                                        game.playzm6(['zmfanxianheyue21', 'zmfanxianheyue22'].randomGet());
                                    }
                                    player.storage.zmfanxianheyue = 0;
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.storage.zmfanxianheyue_1 = player;
                                    player.storage.zmfanxianheyue_2 = target;
                                    player.addSkill('zmfanxianheyue_2');
                                    target.addSkill('zmfanxianheyue_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    intro: {
                                        content(storage, player) {
                                            var zb = player.storage.zmfanxianheyue_1;
                                            return `你与${get.translation(zb)}中一方造成伤害时,另一方摸一张牌`;
                                        },
                                    },
                                    trigger: {
                                        player: ['phaseEnd', 'dieBegin'],
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name == 'damageEnd') {
                                            if (player.storage.zmfanxianheyue_1 == player) return false;
                                            return player.storage.zmfanxianheyue_1 && player.storage.zmfanxianheyue_1.isAlive();
                                        } else {
                                            return true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        event.kg = false;
                                        if (event.triggername == 'damageEnd') {
                                            game.playzm6(['zmfanxianheyue_21', 'zmfanxianheyue_22'].randomGet());
                                            var zb = player.storage.zmfanxianheyue_1;
                                            zb.storage.zmfanxianheyue += trigger.num;
                                            player.line(zb);
                                            zb.draw();
                                            event.finish();
                                        } else {
                                            if (player.storage.zmfanxianheyue_1 && player.storage.zmfanxianheyue_1.isAlive()) {
                                                var zb = player.storage.zmfanxianheyue_1;
                                                if (zb.storage.zmfanxianheyue % 2 == 0 && zb.storage.zmfanxianheyue > 0 && event.triggername != 'dieBegin') {
                                                    if (player.hp != zb.hp) {
                                                        if (player.hp < zb.hp) {
                                                            player.recover();
                                                        } else {
                                                            zb.recover();
                                                        }
                                                    }
                                                    player.removeSkill('zmfanxianheyue_1');
                                                    zb.removeSkill('zmfanxianheyue_2');
                                                    player.storage.zmfanxianheyue_1 = [];
                                                    zb.storage.zmfanxianheyue_2 = [];
                                                    event.goto(1);
                                                }
                                                player.removeSkill('zmfanxianheyue_1');
                                                zb.removeSkill('zmfanxianheyue_2');
                                                player.storage.zmfanxianheyue_1 = [];
                                                zb.storage.zmfanxianheyue_2 = [];
                                                zb.storage.zmfanxianheyue = 0;
                                                event.finish();
                                            }
                                            player.removeSkill('zmfanxianheyue_1');
                                            player.storage.zmfanxianheyue_1 = [];
                                            event.finish();
                                        }
                                        ('step 1');
                                    },
                                },
                                2: {
                                    intro: {
                                        content(storage, player) {
                                            var zb = player.storage.zmfanxianheyue_2;
                                            return `你与${get.translation(zb)}中一方造成伤害时,另一方摸一张牌`;
                                        },
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmfanxianheyue_2 && player.storage.zmfanxianheyue_2.isAlive();
                                    },
                                    content() {
                                        game.playzm6(['zmfanxianheyue_11', 'zmfanxianheyue_12', 'zmfanxianheyue_13'].randomGet());
                                        player.storage.zmfanxianheyue += trigger.num;
                                        var zb = player.storage.zmfanxianheyue_2;
                                        player.line(zb);
                                        zb.draw();
                                    },
                                },
                            },
                        },
                        zmkeyuaiyue: {
                            nobracket: true,
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player;
                            },
                            content() {
                                player.line(trigger.source, { color: [187, 68, 119] });
                                trigger.source.turnOver();
                                trigger.source.chooseToDisable().ai = function (event, player, list) {
                                    if (list.includes('equip5')) return 'equip5';
                                    return list.randomGet();
                                };
                            },
                        },
                        zmlaiyindehuangjin: {
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
                            contentBefore() {
                                if (player.name == 'zm_10kuangfafuna') {
                                    game.playzm6('zmlaiyindehuangjin11');
                                } else {
                                    game.playzm6(['zmlaiyindehuangjin21', 'zmlaiyindehuangjin22', 'zmlaiyindehuangjin23', 'zmlaiyindehuangjin24'].randomGet());
                                }
                            },
                            content() {
                                'step 0';
                                player.storage.zmlaiyindehuangjin = true;
                                player.awakenSkill('zmlaiyindehuangjin');
                                player.addSkill('zmlaiyindehuangjin_1');
                                player.addSkill('zmlaiyindehuangjin_2');
                                var num1 = 0;
                                list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var card = { name: name };
                                    var type = get.type(card);
                                    if (type && type == 'basic') {
                                        if (name == 'tao') num1++;
                                        list.push(['基本', '', name]);
                                    }
                                }
                                var dialog = ui.create.dialog('先后选择两种基本牌,本局内你手牌中先选择的牌将视为后选择的牌', [list, 'vcard'], 'hidden');
                                player.chooseButton(dialog, 2, true).set('ai', function (button) {
                                    var name = button.link[2];
                                    if (ui.selected.buttons.length) {
                                        if (name == 'tao') return 999;
                                        if (name == 'shan') return 9;
                                        return 1;
                                    } else {
                                        if (name == 'du') return 999;
                                        if (name == 'shan' && num1 > 0) return 9.5 + Math.random();
                                        if (name == 'jiu' && num1 > 0) return 9 + Math.random();
                                        if (num1 == 0 && name == 'jiu') return 9;
                                        return 1;
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name1 = result.links[0][2];
                                    var name2 = result.links[1][2];
                                    player.storage.zmlaiyindehuangjin_1 = name1;
                                    player.storage.zmlaiyindehuangjin_2 = name2;
                                }
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmlaiyindehuangjin_1') && current != player;
                                });
                                var num5 = game.countPlayer(function (current) {
                                    return !current.hasSkill('zmlaiyindehuangjin_2') && !current.hasSkill('zmlaiyindehuangjin_1') && !current.hasSkill('zmlaiyindehuangjin');
                                });
                                if (num4 == 0) {
                                    player.addSkill('zmnibolonggendezhihuan');
                                }
                                if (num5 > 0) {
                                    player
                                        .chooseTarget('须选择一名未持有过此技能角色获得【莱茵的黄金】', true, function (card, player, target) {
                                            return !target.hasSkill('zmlaiyindehuangjin_2') && !target.hasSkill('zmlaiyindehuangjin_1') && !target.hasSkill('zmlaiyindehuangjin');
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            return att;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], { color: [255, 204, 51] });
                                    result.targets[0].addSkill('zmlaiyindehuangjin');
                                    result.targets[0].addSkill('zmlaiyindehuangjin_2');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player) {
                                        var mode = get.mode();
                                        if (mode == 'identity' && player.identity == 'zhu' && game.roundNumber == 1) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card, player) {
                                            if (player.storage.zmlaiyindehuangjin_2 && player.storage.zmlaiyindehuangjin_1) {
                                                if (card.name == player.storage.zmlaiyindehuangjin_1) {
                                                    return player.storage.zmlaiyindehuangjin_2;
                                                }
                                            }
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmlaiyindehuangjin_1 = 0;
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmlaiyindehuangjin_2 = 0;
                                    },
                                },
                            },
                        },
                        zmzhushenzhihuanghun: {
                            group: ['zmtleiren', 'zmtlongxue', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:2',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) < 0 && current.countCards('h') > 6 && current.hasSkill('zmlaiyindehuangjin_1');
                                });
                                if (event.player.hasSkillTag('nofire')) return false;
                                if (get.damageEffect(event.player, player, player, 'fire') <= 0) return false;
                                if (event.player == player && player.hp == 1 && player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) > 1 && num5 > 0) return true;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                var num = 0;
                                var targets = [],
                                    bool = false;
                                event.player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                if (num > 0 || player.storage.zmt_np < 30) return false;
                                var history = event.player.getHistory('sourceDamage');
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].player.isAlive()) bool = true;
                                }
                                if (event.player.getStat('damage') && event.player.getStat('damage') > 0) return bool;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                game.playzm6('zmfafuna');
                                game.mp426('zmfafuna');
                                player.line(trigger.player, 'fire');
                                trigger.player.damage(1, 'fire');
                            },
                        },
                        zmnibolonggendezhihuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:8',
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (hs.length > 1) {
                                    for (var i = 0; i < hs.length; i++) {
                                        var name = hs[i].name;
                                        if (player.countCards('h', { name: name }) > 1) {
                                            return false;
                                        }
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hasSkill('zmlaiyindehuangjin_1')) return 3;
                                    return 1;
                                },
                            },
                            group: ['zmnibolonggendezhihuan_1', 'zmnibolonggendezhihuan_2'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊陆/audio:3',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmlaiyindehuangjin_1') && current.storage.zmlaiyindehuangjin_1 && current.storage.zmlaiyindehuangjin_2;
                                        });
                                        return num4 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        'step 1';
                                        player
                                            .chooseTarget('须选择一名处于【莱茵的黄金】效果中的角色,之后根据其曾以该方式指定过的牌将其手牌中的同名牌转化为【毒】', true, function (card, player, target) {
                                                return target.hasSkill('zmlaiyindehuangjin_1') && target.storage.zmlaiyindehuangjin_1 && target.storage.zmlaiyindehuangjin_2;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                //if(att<=0){att=-(target.countCards('h')+1)}
                                                if (att > 0 && target.countCards('h') > 0) return 0;
                                                return -(target.countCards('h') + 1);
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            player.line(result.targets[0], 'fire');
                                            var name1 = result.targets[0].storage.zmlaiyindehuangjin_1;
                                            var name2 = result.targets[0].storage.zmlaiyindehuangjin_2;
                                            if (result.targets[0].countCards('h') > 0) {
                                                var hs = result.targets[0].getCards('h');
                                                for (var i = 0; i < hs.length; i++) {
                                                    if (hs[i].name == name1 || hs[i].name == name2) {
                                                        var card = hs[i];
                                                        card.init([card.suit, card.number, 'du']);
                                                    }
                                                }
                                            }
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'dyingAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num4 = game.countPlayer(function (current) {
                                            return current != player && current.hasSkill('zmlaiyindehuangjin_1') && current.storage.zmlaiyindehuangjin_1 && current.storage.zmlaiyindehuangjin_2;
                                        });
                                        return num4 > 0 && player.hp > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('zmlaiyindehuangjin_1') && current != player) {
                                                current.loseHp();
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        zmhonglie: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:7',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (event.getParent(3).name == 'zmhonglie') return false;
                                if (event.getParent(2).name == 'zmhonglie') return false;
                                if (event.parent.name == 'zmhonglie') return false;
                                var nff = 0;
                                if (event.targets.length) {
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (event.targets[i] != player) {
                                            nff++;
                                        }
                                    }
                                }
                                if (!event.targets || !event.card) return false;
                                if (event.card.name == 'wuxie') return false;
                                // if(event.targets.length<=1&&event.targets.includes(player)) return false;
                                return nff > 0;
                            },
                            check(event, player) {
                                if (event.targets.length == 1 && get.attitude(player, event.targets[0]) <= 0 && event.name == 'sha'.name && player.countCards('h') == 0) return true;
                                var num0 = 0;
                                var cards1 = player.getCards('h');
                                for (var i = 0; i < cards1.length; i++) {
                                    if (player.getUseValue(cards1[i]) > 0) num0 += get.value(cards1[i]);
                                }
                                if (num0 > 20 && player.storage.zmt_np < 30) return false;
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0 && player.canUse({ name: 'sha' }, current);
                                });
                                if (player.countCards('h', { name: 'sha' }) > 0 && num4 > 0 && player.getCardUsable('sha') > 0) return false;
                                var att = 0;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (get.effect(event.targets[i], { name: 'sha' }, player, player) < 0 && event.targets[i].hp <= 3) {
                                        att -= 3;
                                    } else {
                                        if (ai.get.effect(event.targets[i], { name: 'sha' }, player, player) > 0 && !player.hasSkill('unequip') && event.targets[i].getEquip('renwang') && event.cards && get.color(event.cards[0]) == 'black') att -= ai.get.effect(event.targets[i], { name: 'sha' }, player, player);
                                        if (ai.get.effect(event.targets[i], { name: 'sha' }, player, player) > 0 && !event.card.nature && !player.hasSkill('unequip') && event.targets[i].getEquip('tengjia')) att -= ai.get.effect(event.targets[i], { name: 'sha' }, player, player);
                                        att += ai.get.effect(event.targets[i], { name: 'sha' }, player, player);
                                    }
                                }
                                return att > 1;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmt_np >= 20) {
                                    player
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (player.countCards('h') == 0) return 'cancel2';
                                            return '确定';
                                        })
                                        .set('prompt', '是否消耗能量？否则你须弃置所有手牌');
                                } else {
                                    player.discard(player.getCards('h'));
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.control == '确定') {
                                    player.storage.zmt_np -= 20;
                                } else player.discard(player.getCards('h'));
                                ('step 2');
                                if (trigger.card.name == 'sha') {
                                    trigger.baseDamage++;
                                } else {
                                    trigger.cancel();
                                    if (trigger.get.itemtype(trigger.cards) == 'cards') {
                                        trigger.player.useCard({ name: 'sha' }, trigger.cards, trigger.targets);
                                    } else {
                                        trigger.player.useCard({ name: 'sha' }, trigger.targets, false);
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged() && player.storage.zmt_np < 30) return [1, 1];
                                    },
                                    player(card, player, target) {
                                        if (get.type(card) == 'trick') return [1, 3];
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        // if(event.getParent(3).name!='zmhonglie') return false;
                                        // if(event.getParent(2).name!='zmhonglie') return false;
                                        if (event.parent.name != 'zmhonglie') return false;
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmhonglie_1');
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        zmbaoran: {
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:3',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return !player.getStat('damage') && player.countCards('h') == 0;
                            },
                            content() {
                                'step 0';
                                game.playzm6('zmjufu');
                                game.mp426('zmjufu');
                                if (player.name == 'zm_10kuangjufu' || player.name1 == 'zm_10kuangjufu') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身巨斧.png');
                                } else if (player.name2 == 'zm_10kuangjufu') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身巨斧.png');
                                }
                                ('step 1');
                                player.awakenSkill('zmbaoran');
                                player.addSkill('zmbaoran_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    filter(event, player) {
                                        return !player.getStat('damage') && player.countCards('h') == 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseUseTarget('可视为使用一张【火杀】', { name: 'sha', nature: 'fire' }, false);
                                    },
                                },
                            },
                        },
                        zmyitijihuo: {
                            init(player) {
                                player.storage.zmyitijihuo = false;
                            },
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
                                    if (target == player) {
                                        if (player.storage.zmyitijihuo == false) {
                                            player.storage.zmyitijihuo = true;
                                            game.playzm6('zmsulaiman');
                                            game.mp426('zmsulaiman');
                                            if (player.name == 'zm_04dousulaiman' || player.name1 == 'zm_04dousulaiman') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身苏莱曼.png');
                                            } else if (player.name2 == 'zm_04dousulaiman') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身苏莱曼.png');
                                            }
                                        } else game.playzm6(['zmyitijihuo11', 'zmyitijihuo14', 'zmyitijihuo13', 'zmyitijihuo14', 'zmyitijihuo15'].randomGet());
                                    } else game.playzm6(['zmyitijihuo11', 'zmyitijihuo12', 'zmyitijihuo13', 'zmyitijihuo16', 'zmyitijihuo15'].randomGet());
                                } else game.playzm6(['zmyitijihuo21', 'zmyitijihuo22', 'zmyitijihuo24', 'zmyitijihuo24', 'zmyitijihuo25'].randomGet());
                                ('step 1');
                                target.draw(Math.min(5, target.maxHp) - target.countCards('h'));
                                ('step 2');
                                target.addSkill('zmyitijihuo2');
                            },
                            ai: {
                                threaten: 1,
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            var num4 = 1;
                                        } else {
                                            var num4 = -1;
                                        }
                                        var num;
                                        var num0 = target.maxHp - target.countCards('h');
                                        if (num0 < 0) num0 = 0;
                                        if (num0 > 5) num0 = 5;
                                        num = num0 * num4;
                                        if (get.attitude(player, target) > 0 && num < 0) num = 0;
                                        if (get.attitude(player, target) <= 0 && num0 == 0) num = -1;
                                        if (get.attitude(player, target) < 0 && target.countCards('h') - 1 > 2 && num0 == 1) num -= 2;
                                        if (get.attitude(player, target) < 0 && target.countCards('h') - 1 > 4 && num0 < 2) num -= target.countCards('h');
                                        if (get.attitude(player, target) <= 0 && target.hasSkill('zmyitijihuo2')) num = 0;
                                        if (get.attitude(player, target) > 0 && target.hasSkill('zmyitijihuo2') && num0 > 0) num += num0;
                                        if (get.attitude(player, target) <= 0 && num0 >= 2 && target.countCards('h') < 6) num = 0;
                                        return num;
                                    },
                                },
                            },
                        },
                        zmshinengmiyao: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmshinengmiyao_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊陆/audio:5',
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: 100,
                            forced: true,
                            filter(event, player) {
                                return event.cards && event.cards.length && event.target;
                            },
                            content() {
                                'step 0';
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        var name = i.name;
                                        if (trigger.target.countCards('he', { name: name }) >= 1) {
                                            trigger.target.chooseToDiscard(`须选择弃置一张【${get.translation(name)}】弃置`, 1, 'he', true, function (card) {
                                                return card.name == name;
                                            });
                                        }
                                    }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'discardAfter',
                                    },
                                    filter(event, player) {
                                        return event.cards && event.cards.length && player.storage.zmt_np >= 20;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(`【失能秘钥】是否对一名角色使用${get.translation(trigger.cards)}转化的【杀】？`, function (card, player, target) {
                                            return target;
                                        }).ai = function (target) {
                                            return get.effect(target, { name: 'sha' }, player, player);
                                        };
                                        ('step 1');
                                        if (result.bool && result.targets[0] != undefined) {
                                            player.storage.zmt_np -= 20;
                                            player.useCard({ name: 'sha' }, trigger.cards, result.targets[0], false);
                                        }
                                    },
                                },
                            },
                        },
                        zmyitijihuo2: {
                            mark: true,
                            marktext: '异',
                            intro: {
                                content(storage) {
                                    return '出牌阶段结束时你须将手牌弃置至一张,在此之前你使用的【杀】无视防具';
                                },
                            },
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.removeSkill('zmyitijihuo2');
                                if (player.countCards('h') > 1) {
                                    var num = player.countCards('h') - 1;
                                    player.chooseToDiscard(num, 'h', true);
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        zmsanchongjianya: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            _priority: 100,
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            init(player) {
                                player.storage.zmsanchongjianya = 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.suit != undefined && event.target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                player.storage.zmsanchongjianya++;
                                event.suit = trigger.card.suit;
                                ('step 1');
                                if (player.storage.zmsanchongjianya % 3 == 0) {
                                    if (player.storage.zmsanchongjianya_0 == false) {
                                        player.storage.zmsanchongjianya_0 = true;
                                        game.playzm6('zmkaiousi');
                                        game.mp426('zmkaiousi');
                                        if (player.name == 'zm_04doukaiousi' || player.name1 == 'zm_04doukaiousi') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身凯欧斯.png');
                                        } else if (player.name2 == 'zm_04doukaiousi') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身凯欧斯.png');
                                        }
                                    } else game.playzm6(['zmsanchongjianya1', 'zmsanchongjianya2', 'zmsanchongjianya3', 'zmsanchongjianya4'].randomGet());
                                    var next = player.chooseCard(`【三重尖牙】可将一张${get.translation(event.suit)}牌与${get.translation(trigger.target)}的手牌一同展示`, 1, 'he', function (card, player) {
                                        return card.suit == event.suit;
                                    });
                                    next.ai = function (card) {
                                        if (get.attitude(player, trigger.target) <= 0) {
                                            return 1;
                                        }
                                        return 0;
                                    };
                                    event.current = player.next;
                                } else {
                                    game.playzm6(['zmsanchongjianya1', 'zmsanchongjianya2', 'zmsanchongjianya3', 'zmsanchongjianya4'].randomGet());
                                    if (trigger.target.countCards('h') > 0) {
                                        event.goto(5);
                                    } else event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (!event.list.includes(result.cards[0])) event.list.push(result.cards[0]);
                                }
                                if (event.current == player) event.goto(5);
                                ('step 3');
                                var next = event.current.chooseCard(`【三重尖牙】可将一张${get.translation(event.suit)}牌与${get.translation(trigger.target)}的手牌一同展示`, 1, 'he', function (card, player) {
                                    return card.suit == event.suit;
                                });
                                next.ai = function (card) {
                                    if (get.attitude(event.current, trigger.target) <= 0) {
                                        return 1;
                                    }
                                    return 0;
                                };
                                event.current = event.current.next;
                                ('step 4');
                                if (result.bool) {
                                    if (!event.list.includes(result.cards[0])) event.list.push(result.cards[0]);
                                }
                                if (event.current != player) event.goto(3);
                                ('step 5');
                                var hs = trigger.target.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    event.list.push(hs[i]);
                                }
                                trigger.target.showCards(event.list, '三重尖牙');
                                ('step 6');
                                var heart = 0;
                                var diamond = 0;
                                var spade = 0;
                                var club = 0;
                                for (var i = 0; i < event.list.length; i++) {
                                    if (event.list[i].suit == 'heart') {
                                        heart++;
                                    }
                                    if (event.list[i].suit == 'diamond') {
                                        diamond++;
                                    }
                                    if (event.list[i].suit == 'spade') {
                                        spade++;
                                    }
                                    if (event.list[i].suit == 'club') {
                                        club++;
                                    }
                                }
                                if (event.suit == 'heart' && heart >= diamond && heart >= spade && heart >= club) {
                                    trigger.target.chooseToDiscard(heart, 'he', true);
                                }
                                if (event.suit == 'diamond' && diamond >= heart && diamond >= spade && diamond >= club) {
                                    trigger.target.chooseToDiscard(diamond, 'he', true);
                                }
                                if (event.suit == 'spade' && spade >= diamond && spade >= heart && spade >= club) {
                                    trigger.target.chooseToDiscard(spade, 'he', true);
                                }
                                if (event.suit == 'club' && club >= diamond && club >= spade && club >= heart) {
                                    trigger.target.chooseToDiscard(club, 'he', true);
                                }
                            },
                            group: ['zmsanchongjianya_0'],
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmsanchongjianya_0 = false;
                                    },
                                },
                            },
                        },
                        zmsantouquan: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.zmt_np >= 10;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 10;
                                event.num1 = 0;
                                event.num2 = 0;
                                if (player.countCards('h') % 3 == 0) {
                                    game.playzm6(['zmsantouquan11', 'zmsantouquan12', 'zmsantouquan13', 'zmsantouquan14', 'zmsantouquan15', 'zmsantouquan16', 'zmsantouquan17'].randomGet());
                                    player.addTempSkill('zmsantouquan_1');
                                    event.finish();
                                }
                                if (player.countCards('h') == 0) {
                                    game.playzm6(['zmsantouquan11', 'zmsantouquan12', 'zmsantouquan13', 'zmsantouquan14', 'zmsantouquan15', 'zmsantouquan16', 'zmsantouquan17'].randomGet());
                                    player.addTempSkill('zmsantouquan_2');
                                    player.draw(3);
                                    event.finish();
                                }
                                if (player.countCards('h') == 1) {
                                    game.playzm6(['zmsantouquan11', 'zmsantouquan12', 'zmsantouquan13', 'zmsantouquan14', 'zmsantouquan15', 'zmsantouquan16', 'zmsantouquan17'].randomGet());
                                    player.addTempSkill('zmsantouquan_2');
                                    player.draw(2);
                                    event.finish();
                                }
                                ('step 1');
                                event.num1++;
                                var num = player.countCards('h');
                                if ((event.num1 + num) % 3 == 0) {
                                    event.goto(2);
                                } else event.goto(1);
                                ('step 2');
                                event.num2++;
                                var num = player.countCards('h');
                                if ((num - event.num2) % 3 == 0) {
                                    event.goto(3);
                                } else event.goto(2);
                                ('step 3');
                                if (event.num1 < event.num2) {
                                    game.playzm6(['zmsantouquan11', 'zmsantouquan12', 'zmsantouquan13', 'zmsantouquan14', 'zmsantouquan15', 'zmsantouquan16', 'zmsantouquan17'].randomGet());
                                    player.addTempSkill('zmsantouquan_2');
                                    player.draw(event.num1);
                                } else {
                                    game.playzm6(['zmsantouquan21', 'zmsantouquan22', 'zmsantouquan23', 'zmsantouquan24'].randomGet());
                                    player.chooseToDiscard(event.num2, 'h', true);
                                    if (player.hp >= 3) {
                                        player.changeHp(-(player.hp - 3));
                                    } else {
                                        player.changeHp(+(3 - player.hp));
                                    }
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    if (player.hp <= 2 && player.countCards('h') % 3 == 1 && player.countCards('h') > 3) return 12;
                                    return 1;
                                },
                                result: {
                                    player(player) {
                                        var num5 = 0;
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            for (var i = 0; i < hs.length; i++) {
                                                if (hs[i].name == 'sha') {
                                                    var num4 = game.countPlayer(function (current) {
                                                        return player.canUse(hs[i], current) && get.effect(current, hs[i], player, player) > 0;
                                                    });
                                                    if (num4 > 0) num5++;
                                                }
                                            }
                                        }
                                        if (player.countCards('h') >= 3 && player.countCards('h') % 3 == 0 && (player.getEquip('zhuge') || player.hasSkill('zmsantouquan_1') || num5 == 0)) return 0;
                                        if (player.countCards('h') > 3 && player.countCards('h') % 3 == 1 && (player.hp >= 3 || !player.isDamaged())) return 0;
                                        if (player.countCards('h') >= 3 && player.countCards('h') % 3 == 0 && num5 > 0 && !player.getEquip('zhuge') && !player.hasSkill('zmsantouquan_1')) return 1;
                                        if (player.countCards('h') >= 2 && player.countCards('h') % 3 == 2 && player.storage.zmt_np >= 20) return 1;
                                        if (player.countCards('h') >= 2 && player.countCards('h') > 3 && player.countCards('h') % 3 == 1 && player.hp < 3) return 5;
                                        if (player.countCards('h') == 0) return 4;
                                        if (player.countCards('h') == 1) return 3;
                                        return 0;
                                    },
                                },
                            },
                            group: ['zmtleiren', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    marktext: '三',
                                    intro: {
                                        content: '你的出杀次数为三',
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return 3;
                                        },
                                    },
                                },
                                2: {
                                    marktext: '三',
                                    intro: {
                                        content: '你的手牌上限为三',
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return 3;
                                        },
                                    },
                                },
                            },
                        },
                        zmyouying: {
                            nobracket: true,
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter', 'judgeAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                var num = 0;
                                if (name != 'judgeAfter') {
                                    if (get.type(event.cards[0]) == 'equip' && event.type == 'use') return false;
                                    if (get.type(event.cards[0]) == 'delay' && event.type == 'use') return false;
                                    if (event.cards) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.color(i) == 'black') num++;
                                            }
                                    }
                                    if (event.name == 'lose' && event.position != ui.discardPile) return false;
                                    return event.cards && event.cards.length && get.position(event.cards[0]) == 'd' && num > 0;
                                } else {
                                    return event.result.card != undefined && get.color(event.result.card) == 'black';
                                }
                            },
                            content() {
                                if (event.triggername == 'damageBegin4') {
                                    if (trigger.result.card.suit == 'spade') {
                                        player.addTempSkill('zmyouying_2');
                                    }
                                    if (trigger.result.card.suit == 'club') {
                                        player.addTempSkill('zmyouying_1');
                                    }
                                } else {
                                    if (trigger.cards) {
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (i.suit == 'spade') {
                                                    player.addTempSkill('zmyouying_2');
                                                }
                                                if (i.suit == 'club') {
                                                    player.addTempSkill('zmyouying_1');
                                                }
                                            }
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == 'club') return false;
                                        },
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == 'spade') return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmyingzhan: {
                            init(player) {
                                player.storage.zmyingzhan0 = false;
                                player.storage.zmyingzhan1 = 'sha';
                                player.storage.zmyingzhan2 = 'shan';
                                player.storage.zmyingzhan3 = 'tao';
                                player.storage.zmyingzhan4 = 'jiu';
                            },
                            mark: true,
                            marktext: '影',
                            intro: {
                                content(storage, player) {
                                    return `①${get.translation(player.storage.zmyingzhan1)};<br>②${get.translation(player.storage.zmyingzhan2)};<br>③${get.translation(player.storage.zmyingzhan3)};<br>④${get.translation(player.storage.zmyingzhan4)};`;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                global: 'useCardAfter',
                            },
                            prompt(event, player) {
                                var name = event.card.name;
                                var str = '';
                                var str1 = '';
                                if ((player.storage.zmyingzhan1 == name && player.hp == 1) || (player.storage.zmyingzhan2 == name && player.hp == 2) || (player.storage.zmyingzhan3 == name && player.hp == 3) || (player.storage.zmyingzhan4 == name && player.hp == 4)) {
                                    str1 += '之后你可重新定义此技能牌名次序';
                                }
                                if (player.storage.zmyingzhan1 == name) {
                                    str += `是否获得一张${get.translation(player.storage.zmyingzhan2)}？`;
                                }
                                if (player.storage.zmyingzhan2 == name) {
                                    str += `是否获得一张${get.translation(player.storage.zmyingzhan3)}？`;
                                }
                                if (player.storage.zmyingzhan3 == name) {
                                    str += `是否获得一张${get.translation(player.storage.zmyingzhan4)}？`;
                                }
                                return str + str1;
                            },
                            check(event, player) {
                                var name = event.card.name;
                                if (player.storage.zmyingzhan1 == name) {
                                    var name1 = player.storage.zmyingzhan2;
                                }
                                if (player.storage.zmyingzhan2 == name) {
                                    var name1 = player.storage.zmyingzhan3;
                                }
                                if (player.storage.zmyingzhan3 == name) {
                                    var name1 = player.storage.zmyingzhan4;
                                }
                                var card = { name: name1 };
                                if (player.storage.zmt_np < 25 && _status.currentPhase == player && player.hp > 2) return false;
                                return get.value(card) > 2;
                            },
                            filter(event, player) {
                                var type = get.type(event.card, 'trick');
                                var name = event.card.name;
                                if (type != 'basic') return false;
                                if (player.storage.zmyingzhan1 != name && player.storage.zmyingzhan2 != name && player.storage.zmyingzhan3 != name && player.storage.zmyingzhan4 != name) return false;
                                if (player.storage.zmyingzhan4 == name) return false;
                                return player.storage.zmt_np >= 15;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 15;
                                var name = trigger.card.name;
                                if (player.storage.zmyingzhan1 == name) {
                                    var name1 = player.storage.zmyingzhan2;
                                }
                                if (player.storage.zmyingzhan2 == name) {
                                    var name1 = player.storage.zmyingzhan3;
                                }
                                if (player.storage.zmyingzhan3 == name) {
                                    var name1 = player.storage.zmyingzhan4;
                                }
                                var card = game.createCard(name1);
                                player.gain(card, 'gain2');
                                ('step 1');
                                var name = trigger.card.name;
                                event.num = 0;
                                if ((player.storage.zmyingzhan1 == name && player.hp == 1) || (player.storage.zmyingzhan2 == name && player.hp == 2) || (player.storage.zmyingzhan3 == name && player.hp == 3) || (player.storage.zmyingzhan4 == name && player.hp == 4)) {
                                } else {
                                    game.playzm6(['zmyingzhan27', 'zmyingzhan26', 'zmyingzhan25', 'zmyingzhan24', 'zmyingzhan23', 'zmyingzhan22', 'zmyingzhan21'].randomGet());
                                    event.finish();
                                }
                                ('step 2');
                                if (player.storage.zmyingzhan0 == false) {
                                    player.storage.zmyingzhan0 = true;
                                    game.playzm6('zmyasiboge');
                                    game.mp426('zmyasiboge');
                                    if (player.name == 'zm_08shayasiboge' || player.name1 == 'zm_08shayasiboge') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊陆/image/变身亚斯伯格.png');
                                    } else if (player.name2 == 'zm_08shayasiboge') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊陆/image/变身亚斯伯格.png');
                                    }
                                }
                                event.list = ['杀', '闪', '桃', '酒'];
                                ('step 3');
                                event.num++;
                                player
                                    .chooseControl(event.list)
                                    .set('ai', function () {
                                        return event.list.randomGet();
                                    })
                                    .set('prompt', `重新定义序号${event.num}的对应牌名`);
                                ('step 4');
                                if (result.control == '杀') {
                                    event.list.remove('杀');
                                    if (event.num == 1) {
                                        player.storage.zmyingzhan1 = 'sha';
                                    }
                                    if (event.num == 2) {
                                        player.storage.zmyingzhan2 = 'sha';
                                    }
                                    if (event.num == 3) {
                                        player.storage.zmyingzhan3 = 'sha';
                                    }
                                    if (event.num == 4) {
                                        player.storage.zmyingzhan4 = 'sha';
                                    }
                                }
                                if (result.control == '闪') {
                                    event.list.remove('闪');
                                    if (event.num == 1) {
                                        player.storage.zmyingzhan1 = 'shan';
                                    }
                                    if (event.num == 2) {
                                        player.storage.zmyingzhan2 = 'shan';
                                    }
                                    if (event.num == 3) {
                                        player.storage.zmyingzhan3 = 'shan';
                                    }
                                    if (event.num == 4) {
                                        player.storage.zmyingzhan4 = 'shan';
                                    }
                                }
                                if (result.control == '桃') {
                                    event.list.remove('桃');
                                    if (event.num == 1) {
                                        player.storage.zmyingzhan1 = 'tao';
                                    }
                                    if (event.num == 2) {
                                        player.storage.zmyingzhan2 = 'tao';
                                    }
                                    if (event.num == 3) {
                                        player.storage.zmyingzhan3 = 'tao';
                                    }
                                    if (event.num == 4) {
                                        player.storage.zmyingzhan4 = 'tao';
                                    }
                                }
                                if (result.control == '酒') {
                                    event.list.remove('酒');
                                    if (event.num == 1) {
                                        player.storage.zmyingzhan1 = 'jiu';
                                    }
                                    if (event.num == 2) {
                                        player.storage.zmyingzhan2 = 'jiu';
                                    }
                                    if (event.num == 3) {
                                        player.storage.zmyingzhan3 = 'jiu';
                                    }
                                    if (event.num == 4) {
                                        player.storage.zmyingzhan4 = 'jiu';
                                    }
                                }
                                ('step 5');
                                if (event.list.length) {
                                    event.goto(3);
                                } else {
                                    var name = player.storage.zmyingzhan4;
                                    if (name == 'sha') {
                                        game.playzm6(['zmyingzhan11', 'zmyingzhan12'].randomGet());
                                    } else {
                                        game.playzm6(['zmyingzhan27', 'zmyingzhan26', 'zmyingzhan25', 'zmyingzhan24', 'zmyingzhan23', 'zmyingzhan22', 'zmyingzhan21'].randomGet());
                                    }
                                    if (name != 'shan') {
                                        player.chooseUseTarget('可视为使用一张' + get.translation(player.storage.zmyingzhan4), { name: name }, false);
                                    }
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
                        zm_09huminuotaosi: '米诺桃斯',
                        zm_05qifuer: '芙尔',
                        zm_12tiaerge: '阿尔戈',
                        zm_11rusapulan: '萨普兰',
                        zm_02gonglingliu: '零六',
                        zm_04douaerdelike: '阿尔德里克',
                        zm_01jianzhuyin: '烛阴',
                        zm_01jianbaer: '巴尔',
                        zm_14linfangao: '梵高',
                        zm_09hushenzhiyunzhi: '神芝云芝',
                        zm_02gongtaizichangqin: '太子长琴',
                        zm_05qihanxin: '韩信',
                        zm_08shatushanlirui: '涂山黎睿',
                        zm_02gongxian: '弦',
                        zm_10kuangquan: '犬',
                        zm_02gongluodelisi: '罗德利斯',
                        zm_10kuangdusake: '杜萨克',
                        zm_12timaqima: '玛奇玛',
                        zm_02gongzhuli: '朱莉',
                        zm_10kuangdilu: '迪露',
                        zm_01jiandiyu: '地狱',
                        zm_14linweierangsaiting: '威尔昂赛汀',
                        zm_10kuangjusha: '巨鲨',
                        zm_10kuangpawa: '帕瓦',
                        zm_08shayasiboge: '亚斯伯格',
                        zm_10kuangjufu: '巨斧',
                        zm_04dousulaiman: '苏莱曼',
                        zm_04doukaiousi: '凯欧斯',
                        zm_10kuangfafuna: '法芙娜',
                        zm_02gongyii: '羿',
                        zmyouying: '幽影',
                        zmyouying_info: '有黑色牌进入了弃牌堆的回合内,你不能被这些黑色牌对应花色的牌指定为目标.',
                        zmyingzhan: '影战',
                        zmyingzhan_info: '当有①杀②闪③桃④酒被使用后,你可消耗15点能量获得1张后一项序号的牌;<li>如此做后若你的体力值等于触发序号则重新定义以上四种牌的序号顺序,并于完成后可视为使用了1张序号④的牌.',
                        zmhonglie: '轰烈',
                        zmhonglie_info: '你使用牌指定其他角色为目标时可弃置所有手牌或消耗20点能量令此牌改为【杀】结算,若效果不变则此杀伤害+1.',
                        zmbaoran: '迸燃',
                        zmbaoran_info: '觉醒技<br>结束阶段若你本回合未造成过伤害且没有手牌,则此后本局内你处于相同情形时可视为使用了1张【火杀】.',
                        zmyitijihuo: '异体激活',
                        zmyitijihuo_info: '出牌阶段限一次<br>你可令一名角色将手牌数补至体力上限<b><font color=DarkGray>(至多为5)</font></b>,之后其于出牌阶段结束时将手牌数弃置至1并结束效果.<br>&nbsp处于此效果中的角色使用的【杀】无视防具.',
                        zmshinengmiyao: '失能秘钥',
                        zmshinengmiyao_info: '<li>锁定技 你使用的【杀】结算前,目标须根据此杀对应实体牌依次检索并弃置1张同名牌.<li>当你弃置牌后,你可消耗20点能量将这些牌当作【杀】对一名角色使用.',
                        zmyitijihuo2: '异体激活',
                        zmyitijihuo2_info: '',
                        zmsanchongjianya: '三重尖牙',
                        zmsanchongjianya_info: '你使用的【杀】结算前可令目标展示手牌;若此杀花色为展示牌中最多的花色,目标须弃置与该花色数等量的牌.<br>&nbsp此技能发动次数为3的倍数时,展示前场上角色依次可选择1张与此杀同花色的牌与目标一同展示.',
                        zmsantouquan: '三头犬',
                        zmsantouquan_info: '出牌阶段 <br>你可消耗10点能量将手牌数摸或弃至与当前最接近的3的倍数;若如此做后你的手牌数:<li>减少,本回合你的体力值调整为3.<li>增加,本回合你的手牌上限调整为3.<li>不变,本回合你的出杀次数调整为3.',
                        zmlaiyindehuangjin: '莱茵的黄金',
                        zmlaiyindehuangjin_info: '限定技<br>出牌阶段你可先后指定牌堆中两种基本牌,使本局内你手牌中的前者均视为后者.<br>&nbsp若如此做,你令一名未持有过此技能的角色获得此技能.<li>若你为场上首个发动此技能的角色,你获得<b><font color=DarkGray>〖尼伯龙根的指环〗:<br>&nbsp摸牌阶段结束时,若你手牌中没有复数同名牌则你摸1张牌.<br>&nbsp当你进入濒死状态时,你令一名处于〖莱茵的黄金〗效果中的角色将手牌中以该方式指定过的同名牌转化为【毒】;当你脱离濒死状态时除你外处于该效果中的角色失去1点体力.</font></b>',
                        zmzhushenzhihuanghun: '诸神之黄昏',
                        zmzhushenzhihuanghun_info: '一名角色回合结束时,若其本回合造成过伤害且未受到过伤害,你可消耗30点能量对其造成1点火焰伤害.',
                        zmnibolonggendezhihuan: '尼伯龙根的指环',
                        zmnibolonggendezhihuan_info: '<li>锁定技 摸牌阶段结束时,若你手牌中没有复数同名牌则你摸1张牌.<li>当你进入濒死状态时你令一名处于〖莱茵的黄金〗效果中的角色将手牌中以该方式指定过的同名牌转化为【毒】;当你脱离濒死状态时除你外处于该效果中的角色失去1点体力.',
                        zmchongyun: '冲云',
                        zmchongyun_info: '其他角色出牌阶段开始时,你可交给其1张牌;<br>&nbsp如此做后本回合限1次,你可为其使用的同类牌增加1名目标.<li>你的出牌阶段,你可消耗10点能量用牌堆顶的牌对你发动此技能.',
                        zmcangming: '沧溟',
                        zmcangming_info: '其他角色受到你造成的伤害后,根据本回合你使用过的牌之类型数,你可令其弃置等量的牌.',
                        zmxingyunyayue: '行云雅乐',
                        zmxingyunyayue_info: '出牌阶段<br>你可消耗10点能量弃置所有手牌并令一名角色摸1张牌.',
                        zmfanxianheyue: '繁弦和乐',
                        zmfanxianheyue_info: '准备阶段你可指定一名角色,直到其回合结束前你们一方造成伤害时,对方摸1张牌.<br>&nbsp效果结束时若期间你们造成的伤害总数为偶数,你们中体力较少的一方回复1点体力.',
                        zmkeyuaiyue: '刻羽哀乐',
                        zmkeyuaiyue_info: '锁定技<br>你死亡时,击杀你的角色翻面并选择1个装备栏废除.',
                        zmshengya: '生牙',
                        zmshengya_info: '出牌阶段<br>你可消耗10点能量重铸任意张【杀】并视为对等量角色使用了1张杀.',
                        zmxiaoyue: '啸月',
                        zmxiaoyue_info: '限定技<br>出牌阶段你可根据当前轮数回复等量的体力.<br>&nbsp此技能发动前,你获得对你造成伤害的【杀】.',
                        zmbingxian: '兵仙',
                        zmbingxian_info: '<li>有【杀】被抵消时,你可令场上3张同颜色的牌返回对应角色手牌,之后此杀额外结算1次.<li>你对任意角色造成的伤害可改为移动其场上1张牌,若其因此失去其场上全部牌,该伤害仍生效.',
                        zmguoshi2: '国士',
                        zmguoshi2_info: '回合内/回合外若你手牌数为奇数,你可消耗5点能量将最中间的手牌当作【无中生有】/【无懈可击】使用.',
                        zmguoshi: '国士',
                        zmguoshi_info: '回合内/回合外若你手牌数为奇数,你可消耗5点能量将最中间的手牌当作【无中生有】/【无懈可击】使用.',
                        zmbaihongguanri: '白虹贯日',
                        zmbaihongguanri_info: '锁定技<br>你使用【杀】指定的角色本回合不能使用点数大于此杀的牌,且若其体力值大于此杀点数则此杀伤害+1.',
                        zmrendaoqingying: '人道箐英',
                        zmrendaoqingying_info: '任意角色造成伤害后,你可消耗20点能量令其进行的下个阶段变为摸牌阶段.',
                        zmshirizhishang: '天命加身',
                        zmshirizhishang_info: '任意角色成为场上体力唯一最多的角色时,你所有手牌点数-3<b><font color=DarkGray>(不小于1)</font></b>并回复1点体力,之后你可将1张手牌当作【杀】对其使用.',
                        zmyiliyoujun: '夷厉幽君',
                        zmyiliyoujun_info: '其他角色不因此法弃牌后,你可弃置其1张牌;<br>&nbsp若因此法弃置的牌之颜色与该角色本次弃置的任一牌相同,该角色将此牌当作【杀】对你使用.',
                        zmqingqiuzhizhu: '青丘之主',
                        zmqingqiuzhizhu_info: '<li>出牌阶段开始时,你可消耗15点能量摸2张牌,之后本回合你使用牌只能指定手牌少于你的角色为目标.<li>当你弃牌后可令一名角色弃置1张牌,根据其弃牌之类型你收回本次弃置的同类牌.',
                        zmershiyidianyanchong: '二十一点炎铳',
                        zmershiyidianyanchong_info: '出牌阶段限一次<br>你与一名角色可先后轮流弃置1张牌至这些牌的累计点数不小于21点为止;<li>率先无法、放弃弃牌或令总点数达到上限的一方受到来自对方的1点火焰伤害.<li>结算后你可选择双方弃牌中的红色牌获得,所选牌数不得超过你本次所弃牌数.',
                        zmyanyanzhuangtian: '焱焱突袭',
                        zmyanyanzhuangtian_info: '<li>你连续多次获得红色牌后可消耗10点能量弃置场上1张红色牌.<li>你连续多次失去红色牌后可消耗10点能量获得牌堆中1张红色牌.',
                        zmjixue: '祭血',
                        zmjixue_info: '当你受到伤害后可消耗至少30点能量获得与该伤害等量的、于你结算致命伤害前出现的护甲.',
                        zmchangdao: '长刀',
                        zmchangdao_info: '一名角色的出牌阶段结束时若其出杀次数未达上限,你可令其选择将1张手牌当作【杀】使用.',
                        zmxuechang: '血偿',
                        zmxuechang_info: '限定技<br>出牌阶段你可对任意名体力值大于你的角色造成1点伤害,之后你存活期间指定这些角色的【杀】多结算1次.<br>&nbsp处于此效果中的角色死亡后,此技能重置.',
                        zmxuechang2: '血偿',
                        zmxuechang2_info: '',
                        zmxuechang3: '血偿',
                        zmxuechang3_info: '',
                        zmchangdaox: '长刀',
                        zmchangdaox_info: '可将一张手牌当作【杀】使用',
                        zmyaogunxiezou: '摇滚协奏',
                        zmyaogunxiezou_info: '出牌阶段开始时你可弃置1~2张牌,若如此做该回合结束时你令一名角色摸等量的牌.',
                        zmfanpanjiepai: '叛逆节拍',
                        zmfanpanjiepai_info: '每回合你的体力值首次变化后,你可消耗20点能量令一名角色摸1张牌,再令一名角色弃置1张牌.<li>若场上手牌数最大或最小的角色因此变动,你令一名角色回复1点体力;<li>若场上体力值最大或最小的角色因此变动,你令一名角色横置.',
                        zmmingyunchongqi: '命运重启',
                        zmmingyunchongqi_info: '你于当前回合获得的牌使用时无数量限制,且你将这些牌全部使用后终止当前回合并开始1个额外的回合.',
                        zmmingyunjushe: '命运之蛇',
                        zmmingyunjushe_info: '出牌阶段 <br>你可消耗15点能量对一名角色声明体力增加或减少的<期望>.<li>对应角色的体力变化符合期望时,你可使另一名角色的期望调整体力至实现,变化值与触发角色相同.<br>&nbsp若未选择,触发角色的体力值根据期望调整1.<li>对应角色实现期望或使用【无懈可击】后,清除期望.',
                        zmzhipeiemo: '支配恶魔',
                        zmzhipeiemo_info: '你使用带有伤害标签的牌对目标结算时,可令其摸1张牌;<br>&nbsp若如此做,此牌造成伤害后你保留其1张手牌获得其余手牌;若无法获得牌,你获得该角色全技能直到你的下回合开始,期间原技能失效.',
                        zmjueduizhipei: '绝对支配',
                        zmjueduizhipei_info: '锁定技<br>结束阶段,本回合受到过伤害的角色须交给你1张牌,否则你获得其1点体力.<br>&nbsp体力值最小的角色因此法失去最后的手牌时,你可消耗30点能量令其代为结算你之后受到的伤害直到其死亡,且期间其因〖支配恶魔〗失效的技能无法回复.',
                        zmxuemaidianfeng: '血脉巅峰',
                        zmxuemaidianfeng_info: '准备阶段,你可跳过剩余阶段回复1点体力,之后若体力值达到上限你仍进行出牌阶段.<br>&nbsp此技能发动后,触发时机循环顺延至下个阶段.你每完成1循,摸牌阶段多摸1张牌.',
                        zmnvwangshoujian: '女王手剑',
                        zmnvwangshoujian_info: '出牌阶段限一次<br>你可令一名角色选择摸或弃置1张牌;若如此做,本回合有牌对该角色结算时,其先结算未以此法选择的选项.<li>因此法弃置的牌你可消耗10点能量将之当作【决斗】使用,若放弃则本回合你免疫因决斗受到的伤害.',
                        zmnvwangshoujian4: '女王手剑',
                        zmnvwangshoujian4_info: '',
                        zmmoxiangtianqu: '魔翔天驱',
                        zmmoxiangtianqu_info: '回合外有角色受到实体牌造成的伤害后,你可令该牌对你结算1次后获得该牌.<br>&nbsp若触发角色为你且你充能达40点,你清空能量改为你使用该牌对伤害来源结算2次.',
                        zmyinhongshike: '殷红时刻',
                        zmyinhongshike_info: '结束阶段 其他角色须依次交给你1张红色牌,你的下回合开始时依次交还这些牌.',
                        zmzhongshanmingmie: '钟山明灭',
                        zmzhongshanmingmie_info: '每轮开始时,根据当前轮数你可以手牌中一种颜色的牌交换牌堆顶等量牌中同颜色的牌.<br>&nbsp如此做后若你未获得牌,游戏轮数+1,否则轮数-2.',
                        zmwudaozhenji: '武道真极',
                        zmwudaozhenji_info: '你与其他角色计算距离减3,你每使用或打出1张牌后,该回合此值减1.<li>此值变为0时,你视为使用了1张【杀】.<li>此值与你体力值相同时,可代替体力值扣除.<li>手牌数与此值相同的角色可被你的【杀】指定为额外目标.',
                        zmxushumigong: '虚数迷宫',
                        zmxushumigong_info: '有角色不因此法使用牌时,若该牌相较其手牌为点数最小的牌,你可令其立即使用1张点数最大的手牌;<br>&nbsp若如此做其摸1张牌,否则该牌失效.',
                        zmjuesimigong: '决死迷宫',
                        zmjuesimigong_info: '觉醒技<br>一轮开始时若游戏轮数不小于你的体力值,本局内你的手牌上限不会小于此轮数.<br>&nbsp觉醒后你发动〖虚数迷宫〗时可消耗30点能量追加效果:若该角色未以该方式使用牌则失去1点体力,反之你失去1点体力.',
                        zmleisu: '雷速',
                        zmleisu_info: '你可将2张牌当作【闪】使用或打出.<br>&nbsp如此做后若你的武将牌为芙尔,则你可令一名角色获得此技能,反之你须令一名持有此技能的角色移除此技能.',
                        zmdianchang: '电场',
                        zmdianchang_info: '觉醒技<br>当场上角色使用〖雷速〗之次数不小于游戏轮数或你的体力上限后,你存活时场上角色使用〖雷速〗所需转化牌数-1.<li>觉醒后未持有〖雷速〗的角色需要使用或打出【闪】时,你可消耗15点能量令其获得〖雷速〗.',
                        zmquannengshiye: '全能视野',
                        zmquannengshiye_info: '出牌阶段开始时,你可消耗15点能量令攻击距离翻倍,之后本回合:<li>因此进入你攻击范围内的其他角色不能响应其手牌中缺少的花色的牌.<li>原本处于你攻击范围内的其他角色不能响应其手牌中包含的花色的牌.',
                        zmruodianningshi: '弱点凝视',
                        zmruodianningshi_info: '当有角色受到牌造成的伤害后,你可交给其1张对应花色的牌令该角色下次受到该花色牌造成的伤害翻倍,之后你摸1张牌.<br>&nbsp你每击杀一名角色后可记录1种花色,当你须因此技能给出记录花色的牌时改为展示.',
                        zmheibaibianzheng: '黑白辨正',
                        zmheibaibianzheng_info: '出牌阶段开始时,你可消耗20点能量令场上角色依次选择是否翻面并摸1张牌;如此做后:<li>若最终没有角色选择翻面,你摸1张牌并重复此流程;<li>若最终你的选择与多数角色不同,你翻面.<li>有角色选择翻面后,不选择翻面的角色依次可对其使用1张牌.',
                        zmlichangzhuanhuan: '立场转换',
                        zmlichangzhuanhuan_info: '觉醒技<br>当你的回合内有角色进入濒死状态时,你将体力回复至该角色的体力上限.<br>&nbsp觉醒后你发动〖黑白辨证〗时可事先暗中指定一名角色,其进行选择后反转其选择.',
                        zmfenhongzidan: '魅魔子弹',
                        zmfenhongzidan_info: '当你使用实体【杀】时,你可将此杀交给一名其他角色并令其交给你1张不为此杀的手牌.<br>&nbsp若上述结算过程中涉及♥️️牌,此杀不可响应.',
                        zmzhimingyouhuo: '致命诱惑',
                        zmzhimingyouhuo_info: '觉醒技<br>你使用或打出过的♥️️牌不少于你的体力值时,场上曾受到你伤害的角色均调整为横置状态.<li>觉醒后的出牌阶段,你可消耗25点能量指定任意名曾受到你伤害的角色令其对你使用手牌中带有回复标签的牌,若无则其直到下个回合结束前全技能失效.',
                        zmzhimingyouhuo2: '致命诱惑',
                        zmzhimingyouhuo2_info: '出牌阶段<br>你可消耗25点能量指定任意名曾受到你伤害的角色令其对你使用手牌中带有回复标签的牌,若无则其直到下个回合结束前全技能失效.',
                        zmzhuorejiaotu: '灼热焦土',
                        zmzhuorejiaotu_info: '当你使用【杀】时,可令此杀目标之一选择一项执行:<br>&nbsp①摸1张牌.<br>&nbsp②此杀不可响应.<br>&nbsp③此杀变为火属性.<br>选择完成后你删除对应选项;全部选项删除后此技能重置,此杀不计入次数且若为火属性则伤害+1.',
                        zmhuijinhuanghun: '灰烬黄昏',
                        zmhuijinhuanghun_info: '<li>你造成属性伤害后,直到你的下回合开始有角色进行摸牌阶段时你可消耗10点能量令其少摸1张牌.<li>此技能发动次数超过场上最小的体力值时,你令其他角色以〖灼热焦土〗执行选项后亦选择一项执行.',
                        zmshenweihuguang: '神威弧光',
                        zmshenweihuguang_info: '当有角色使用【杀】时,你可消耗20点能量令其进行1或2次【浮雷】判定并使此杀不可响应.',
                        zmshizilingzang: '十字灵葬',
                        zmshizilingzang_info: '觉醒技<br>当你令一名角色进入濒死状态时记录当前体力值;<br>&nbsp觉醒后你下次进入濒死状态时可视为对令你进入濒死状态的角色使用1张伤害为记录值的【杀】.',
                        zmtianciguanmian: '天赐冠冕',
                        zmtianciguanmian_info: '你使用或打出牌后可摸1张牌,若如此做本回合你仅可使用或打出本次以此法摸到的牌.',
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
                        zmcichangzhuandongd: '磁场转动',
                        zmcichangzhuandongd_info: '出牌阶段限一次<br>你可进行4次判定,判定牌亮出后可选择获得之,否则进行下次判定.<br>&nbsp若以此法亮出的4张判定牌花色各不相同或均相同,你本局以此法可获得的牌数上限+1.',
                        zmdiyuzhijian: '地狱之剑',
                        zmdiyuzhijian_info: '任意角色的结束阶段,你可消耗20点能量对一名本回合受到过伤害的角色造成1点伤害,之后可根据其已损失体力值令一名角色将手牌数调整至与之相同.',
                        zmdiyuzhanshen: '地狱战神',
                        zmdiyuzhanshen_info: '<li>你的手牌由左右手分持,左手所持牌数不得超过体力上限.摸牌后你将手牌合并-分配,此外时仅结算右手手牌.<li>其他角色响应你的牌后,你可将左手中的牌依次尽可能对其使用;期间该角色使用或打出你右手中的同名牌时你对其造成1点伤害.',
                        zmtianwushadao: '天武杀道',
                        zmtianwushadao_info: '其他角色摸牌阶段开始时,你可消耗25点能量视为对其使用了1张【杀】;此杀造成的伤害可取消之改为令目标跳过当前与下个摸牌阶段.',
                        zmfengkuangliliang: '疯狂力量',
                        zmfengkuangliliang_info: '限定技<br>出牌阶段你可击杀任意名体力值为1的角色,之后本局你造成的伤害额外+1.<br>&nbsp若如此做,当你受到伤害后体力值为1时伤害来源亦对你发动此效果.',
                        zmcichangzhuandongj: '磁场转动',
                        zmcichangzhuandongj_info: '出牌阶段限一次<br>你可进行4次判定,判定牌亮出后可选择获得之,否则进行下次判定.<br>&nbsp若以此法亮出的4张判定牌花色各不相同,你本局以此法可获得的牌数上限+1.<li>当你对目标造成超过其体力值的伤害后,此技能执行1次.',
                        zmfengkuangliliang2: '疯狂力量',
                        zmfengkuangliliang2_info: '',
                        zmhuangzhiwu: '黄之屋',
                        zmhuangzhiwu_info: '当你获得点数不大于体力值的牌后,你可弃置手牌中于本回合获得的牌并回复1点体力.',
                        zmlingbiaozhihun: '澪标之魂',
                        zmlingbiaozhihun_info: '<li>当前进行回合的角色使用的牌被响应后,你可消耗12点能量摸1张牌.<li>你首次脱离濒死状态/此技能发动次数首次达到你的体力值后,你移除〖黄之屋〗与〖星月夜〗并取两者的触发条件、执行方式、技能效果以每项二选一的规则构筑新技能并获得.',
                        zmxingyueye: '星月夜',
                        zmxingyueye_info: '结束阶段,你须对一名体力值与你相同的角色造成1点伤害.',
                        zmhuangzhiwu2: '黄之屋',
                        zmhuangzhiwu2_info: '',
                        zmxingzhiye: '星之夜',
                        zmxingzhiye_info: '结束阶段,你可对一名体力值与你相同的角色造成1点伤害.',
                        zmxingyuewu: '星月屋',
                        zmxingyuewu_info: '结束阶段,你须弃置手牌中于本回合获得的牌并回复1点体力.',
                        zmxingzhiwu: '星之屋',
                        zmxingzhiwu_info: '结束阶段,你可弃置手牌中于本回合获得的牌并回复1点体力.',
                        zmhuangyueye: '黄月夜',
                        zmhuangyueye_info: '当你获得点数不大于体力值的牌后,你须对一名体力值与你相同的角色造成1点伤害.',
                        zmhuangyuewu: '黄月屋',
                        zmhuangyuewu_info: '当你获得点数不大于体力值的牌后,你须弃置手牌中于本回合获得的牌并回复1点体力.',
                        zmhuangzhiye: '黄之夜',
                        zmhuangzhiye_info: '当你获得点数不大于体力值的牌后,你可对一名体力值与你相同的角色造成1点伤害.',
                        zmxuezhiemo: '血之恶魔',
                        zmxuezhiemo_info: '一回合内首张红色牌被使用时,你可消耗15点能量增减一名目标.<br>&nbsp你体力减少过的回合内此技能不消耗能量.',
                        zmjiefangzhixue: '解放之血',
                        zmjiefangzhixue_info: '准备阶段,你可摸4张牌;<br>&nbsp如此做后直到你的下回合开始前,你进行响应或被响应后须重铸3张手牌,否则弃置2张牌,否则失去1点体力.<br>&nbsp生效期间每次执行后,以上数值+1.',
                        zmjiefangzhixue2: '解放之血',
                        zmjiefangzhixue2_info: '',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:综漫季刊陆/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊陆/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊陆');
                lib.config.characters.add('综漫季刊陆');
                lib.translate['综漫季刊陆_character_config'] = `综漫季刊陆`;
                return QQQ;
            });
        },
        config: {
            ZMSLTB6: {
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
                    13: '【Mechanic——工程师】 适格者以理学或机械闻名,或具备相关传说及概念能力等.',
                    14: '【Caster——施法者】 适格者以术法闻名,或具备相关传说及概念能力等.',
                    15: '【Smability——异能者】 适格者以特异能力闻名,或具备相关传说及概念能力等.',
                    16: '【Assassin——暗匿者】 适格者以隐匿或突袭暗杀闻名,或具备相关传说及概念能力等.',
                    17: '【Berserker——狂战士】 适格者以非理性或本能行事闻名,或具备相关传说及概念能力等.',
                    18: '【Guardian——守卫者】 适格者以守护防卫或愈疗闻名,或具备相关传说及概念能力等.',
                    19: '【Ruler——裁定者】适格者以规则秩序或权威裁决闻名,或具备相关传说及概念能力等.',
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
                    34: '能量的获取软上限为150点,超过该数字则无法因通用方式获得能量.',
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
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【幻想嘉年华】的少量武将分离而成的先行体验包.分包仅包含卡面查看功能,请无视简介中的其它内容<li>本扩展遵循GPL开源协议、所有素材均来自互联网、永不参与任何商业/非商业盈利活动.<li>本扩展无任何相关群组、唯一指定下载地址为B站<打灰皇帝>发布视频之简介区链接.",
            author: '尧',
            version: '1.0',
        },
    };
});

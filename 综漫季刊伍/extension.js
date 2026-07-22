import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊伍',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_03qiangannita = `<img src=extension/综漫季刊伍/二星.png width="59" height="22">`;
            lib.characterTitle.zm_04dououermaite = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_08shaxidekagainuo = `<img src=extension/综漫季刊伍/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linaierajifu = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_07keluna = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_07keluolan = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qikalin = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_04douaojia = `<img src=extension/综漫季刊伍/五星.png width="84" height="22">`;
            lib.characterTitle.zm_12tiyilishabai = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruye = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruyifu = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07keaidisheng = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_20shenyouhabahe = `<img src=extension/综漫季刊伍/极星.png width="84" height="22">`;
            lib.characterTitle.zm_07keluosaita = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_12tisu = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangqianjie = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_12tishiyuanzhilvzhe = `<img src=extension/综漫季刊伍/五星.png width="84" height="22">`;
            lib.characterTitle.zm_07keweierwei = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_03qiangweila = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_03qiangyishena = `<img src=extension/综漫季刊伍/五星.png width="84" height="22">`;
            lib.characterTitle.zm_10kuangkesimo = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_01jianying = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_04doufuhua = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangfapuda = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qizhenlong = `<img src=extension/综漫季刊伍/二星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruyigulabojin = `<img src=extension/综漫季刊伍/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangdan = `<img src=extension/综漫季刊伍/二星.png width="59" height="22">`;
            lib.characterTitle.zm_13linglouhu = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingzhenren = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingjiantongyinga = `<img src=extension/综漫季刊伍/四星.png width="77" height="20">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy5 = {
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
                    for (var i in lib.characterPack.综漫季刊伍) {
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
                    for (var i in lib.characterPack.综漫季刊伍) {
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
                                    np1.setBackgroundImage('extension/综漫季刊伍/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊伍/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊伍/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊伍/np000.png');
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
            lib.skill._zmtnlcz5 = {
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
                    for (var i in lib.characterPack.综漫季刊伍) {
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
            lib.translate.zm5ru = '裁';
            lib.translate.zm5ruColor = '#FFFF00';
            lib.group.push('zm5ru');
            lib.translate.zm5ti = '异';
            lib.translate.zm5tiColor = '#FFFF00';
            lib.group.push('zm5ti');
            lib.translate.zm5yan = '衍';
            lib.translate.zm5yanColor = '#FFFF00';
            lib.group.push('zm5yan');
            lib.translate.zm5do = '斗';
            lib.translate.zm5doColor = '#FFFF00';
            lib.group.push('zm5do');
            lib.translate.zm5ke = '械';
            lib.translate.zm5keColor = '#FFFF00';
            lib.group.push('zm5ke');
            lib.translate.zm5qiang = '枪';
            lib.translate.zm5qiangColor = '#FFFF00';
            lib.group.push('zm5qiang');
            lib.translate.zm5kuang = '狂';
            lib.translate.zm5kuangColor = '#FFFF00';
            lib.group.push('zm5kuang');
            lib.translate.zm5gong = '弓';
            lib.translate.zm5gongColor = '#FFFF00';
            lib.group.push('zm5gong');
            lib.translate.zm5fa = '法';
            lib.translate.zm5faColor = '#FFFF00';
            lib.group.push('zm5fa');
            lib.translate.zm5shen = '神';
            lib.translate.zm5shenColor = '#FFFF00';
            lib.group.push('zm5shen');
            lib.translate.zm5jian = '剑';
            lib.translate.zm5jianColor = '#FFFF00';
            lib.group.push('zm5jian');
            lib.translate.zm5ling = '灵';
            lib.translate.zm5lingColor = '#FFFF00';
            lib.group.push('zm5ling');
            lib.translate.zm5qi = '骑';
            lib.translate.zm5qiColor = '#FFFF00';
            lib.group.push('zm5qi');
            lib.translate.zm5hu = '守';
            lib.translate.zm5qiColor = '#FFFF00';
            lib.group.push('zm5hu');
            lib.translate.zm5sha = '杀';
            lib.translate.zm5shaColor = '#FFFF00';
            lib.group.push('zm5sha');
            lib.translate.zm5lin = '临';
            lib.translate.zm5linColor = '#FFFF00';
            lib.group.push('zm5lin');
            if (config.ZMSLTB5) {
                lib.translate.zm5ru = `<img src=extension/综漫季刊伍/zm5ru.png width="28" height="28">`;
                lib.translate.zm5chan = `<img src=extension/综漫季刊伍/zm5chan.png width="28" height="28">`;
                lib.translate.zm5lin = `<img src=extension/综漫季刊伍/zm5lin.png width="28" height="28">`;
                lib.translate.zm5hu = `<img src=extension/综漫季刊伍/zm5hu.png width="28" height="28">`;
                lib.translate.zm5dao = `<img src=extension/综漫季刊伍/zm5dao.png width="28" height="28">`;
                lib.translate.zm5ti = `<img src=extension/综漫季刊伍/zm5ti.png width="28" height="28">`;
                lib.translate.zm5yan = `<img src=extension/综漫季刊伍/zm5yan.png width="28" height="28">`;
                lib.translate.zm5do = `<img src=extension/综漫季刊伍/zm5do.png width="28" height="28">`;
                lib.translate.zm5ke = `<img src=extension/综漫季刊伍/zm5ke.png width="28" height="28">`;
                lib.translate.zm5sha = `<img src=extension/综漫季刊伍/zm5sha.png width="28" height="28">`;
                lib.translate.zm5gong = `<img src=extension/综漫季刊伍/zm5gong.png width="28" height="28">`;
                lib.translate.zm5fa = `<img src=extension/综漫季刊伍/zm5fa.png width="28" height="28">`;
                lib.translate.zm5qiang = `<img src=extension/综漫季刊伍/zm5qiang.png width="28" height="28">`;
                lib.translate.zm5qi = `<img src=extension/综漫季刊伍/zm5qi.png width="28" height="28">`;
                lib.translate.zm5xie = `<img src=extension/综漫季刊伍/zm5xie.png width="28" height="28">`;
                lib.translate.zm5shen = `<img src=extension/综漫季刊伍/zm5shen.png width="28" height="28">`;
                lib.translate.zm5ling = `<img src=extension/综漫季刊伍/zm5ling.png width="28" height="28">`;
                lib.translate.zm5kuang = `<img src=extension/综漫季刊伍/zm5kuang.png width="28" height="28">`;
                lib.translate.zm5jian = `<img src=extension/综漫季刊伍/zm5jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp425 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊伍/mp4/${Q}.mp4`;
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
            lib.skill._dieAudiozmjk5 = {
                trigger: { player: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊伍/audio', trigger.player.name);
                },
            };
            game.playzm5 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊伍/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm5t = function (bg, pos, time, func) {
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
                    name: '综漫季刊伍',
                    connect: true,
                    character: {
                        zm_04dououermaite: ['male', 'zm5do', 5, ['zhepingdexiangzheng', 'zmoneforall'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】One For All<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★☆☆☆☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】原世界最强的英雄,此为其全盛期的一端.<br>\n在混乱的异能者社会中,暴力与杀戮总会盛开在大地上.既有依仗能力为恶之徒,相应的挺身而出的英雄也自然存在.<br>\n自欧尔麦特登上历史舞台后社会犯罪率逐年下降,他的存在本身就对恶势力有着极大的威慑力,因此也被称为<和平的象征>.其秉持正义作风豪爽、所向无敌的形象常年位于英雄人气榜榜首,故有最强英雄之名.<br>\n欧尔麦特的能力[One For All]是特殊的,可以代代累积传承的异能,在他闪耀之前已经背负了七位英雄毕生的力量.然而人终究会因重伤和年龄衰弱,如同他继承这份能力时一样,欧尔麦特燃尽前也需要寻找一位足够坚强正义的继承者...<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_07keaidisheng: ['male', 'zm5ke', 4, ['zmfaminggongchang', 'zmgainiangailiang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】概念改良<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】史上最著名的发明家.虽然变成了狮子头,小看他的话还是会被告上法庭.<br>\n托马斯·阿尔瓦·爱迪生是出身于美国的发明家,他的门洛帕克发明工厂向世界输出了多达四位数的发明,其中更包括照亮黑暗的电灯、记录逝去之音的留声机、映射出真实世界的摄影机.<br>\n虽然爱迪生本身确实是发明的天才,但比起新发明,将前人的发明以更容易普及的形式,进行再构筑……在这一点上他无人能出其右.而且比起将发明当做研究,他更多时候是把发明当成一种生意和资本来经营——能做到这种事,的确亦是一种强大的证明.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_10kuangfapuda: ['female', 'zm5kuang', 4, ['zmbumiedegongzhu', 'zmyuwangdeyaolan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】价值的化身<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】阿比斯深渊中沐浴诅咒与祝福所诞生的完美生骸.<br>\n法普妲生活在被称为<有来无回之都>的深渊第六层.不同于在此处因诅咒扭曲而成的生骸,她是自遗物[欲望的摇篮]中孵化而出.<br>\n原本这种遗物是可以通过畸形的方式在深渊中实现寄主的一个愿望,且达成后就会破碎.但在某个糟糕又矛盾的愿望中这件蛋形遗物竟然诞生了生命,考虑到其外形或许这才是远古居民创造同族的正确使用方式.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_11ruyifu: ['female', 'zm5ru', 4, ['zmsihaiwenshu', 'zmhonghaiqiji'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】红海奇迹<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★★☆☆☆☆<br>\n' + '【特质】自<死海文书>诞生的幻灵,自号主的牧羊人.<br>\n<死海文书>是二十世纪于死海西北基伯昆兰旷野的山洞发现的古代犹太教,基督教的经文.在那个<圣经>被当权者垄断解读甚至歪曲的年代,死海文书的发现无异于将基督教的部分异化扳回了正轨.更加重要的是,根据材质分析与注解表明这部经文中包含的圣经旧约预言完成于耶稣降生之前,一定程度上佐证了旧约的真实性.<br>\n<日子近了.有声音在旷野呼喊,要修直神的路.<br>\n光明重现之时,弥赛亚必当降临.<br>\n豺狼必与绵羊羔同居,豹子与山羊羔同卧.<br>\n陆有猛兽,海有巨怪.行恶者,必遭毁灭.<br>\n天有天使,人有先知.笃信者,必得解救.<br>\n义人的地土,定有权柄行走其上,将有人为此见证.><br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_05qizhenlong: ['female', 'zm5qi', 4, ['zmtiziyishun', 'zmdalongduisha'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性类人.png width="34" height="22"><img src=extension/综漫季刊伍/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】大龙对杀<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<棋经十三篇>诞生的幻灵,沉迷下棋导致常年低血糖.<br>\n<棋经十三篇>是北宋仁宗时期张学士关于围棋的理论著作.黑白相伴,以法阴阳.方寸之间,别有天地.<br>\n<棋道虽小,实与兵合.><br>\n棋书本为兵书,对于珍珑而言,战斗的技巧可谓与生俱来.<br>\n' + '【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_04doufuhua: ['female', 'zm5do', 4, ['zmfenyinyang', 'zmhunliangyi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】分阴阳 混两仪<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火英桀第十二位,活过末日后经积累变得足以独当一面.<br>\n原名为逐火英桀中的战士华,负责火种计划的先行者.前文明对抗终焉律者败亡后,藏身地底的华成为了人类仅剩的几名幸存者之一.作为于第二文明纪元最早苏醒的英桀,拥有强大力量的华形象被神化,在与崩坏兽的对抗中被称为仙人赤鸢.<br>\n到了近代,符华因变故已多次丢失记忆,力量亦不复巅峰.当她越来越难善尽使命时,曾经的同伴凯文归来了.可如今的华还能下定决心推行凯文的残酷计划吗？<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07keluolan: ['male', 'zm5ke', 4, ['zmhuiqishi', 'zmxiyan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】戏炎<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】通过升格网络筛选的升格者,露娜团队的保姆级军师.<br>\n在帕弥什战争前,少年罗兰是一名小有名气的演员.灾难爆发后,他的理想从<出人头地>变成了<和家人幸福的活下去>,再到<活下去>,最终活下去的梦想也破灭了.他先是被黑野改造为早期构造体,因改造失败被丢弃在垃圾场,等待电池耗尽迎来死亡.<br>\n此时意外发生了,一名同样被感染的失败构造体通过了[升格网络]的筛选,成为了升格网络的代行者;而这位名叫露娜的代行者为升格网络招募的第一个升格者就是罗兰,这大概也是她一生中做过最正确的决定.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11ruye: ['female', 'zm5ru', 4, ['zmrenjianshige', 'zmfupingrenshengsiliushui'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】浮萍人生似流水<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★☆☆☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<人间失格>诞生的幻灵,内在非常丧的大姐姐.<br>\n<人间失格>是日本作家太宰治所著小说.作品中太宰治巧妙地将自己的人生与思想,隐藏于主角叶藏的人生遭遇,藉由叶藏的独白,窥探太宰治的内心世界——充满了可耻的一生.在发表该作品的同年,太宰治自杀身亡.<br>\n叶是一个讨人喜欢的姑娘.她似乎永远都在微笑着,永远都在热心肠地帮助他人,答应一切合理或不合理的要求,只是极少有人知道叶是如何憎恶着自己的生命.<br>\n<永生>对很多人来说是值得倾尽一切去追求的至宝;然而对叶而言,它却是无法逃离的诅咒.没有意义.没有意义.一切都没有意义……一切都如此荒谬.叶嘲讽着自己,而后周而复始地重复着每一天.<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_03qiangweila: ['female', 'zm5qiang', 4, ['zmxianzhenzhe', 'zmleimingjinjun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】雷鸣进军<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】黑野氏集团三头犬小队队长,众所周知的战场煞星.<br>\n薇拉最初接受构造体化改造后是医疗兵的身份投入到战争中.不知是何种原因,每经历过一次损失惨重的战斗后,小队内都仅有她一人幸存,这招致了他人的猜忌与质疑,薇拉甚至因此获得了<死神>的绰号,这令她非常地懊恼.<br>\n获得了不友好的绰号之后,薇拉<克队友>的现象也一直没有中止,她的心理也渐渐变得扭曲.终于在一场战斗中,她积日已久的怒气彻底爆发了.她先是自行<解决>了几个苟延残喘的队友,抱着残破的机体强忍痛楚继续与感染体作战,直到因体力不支而昏倒.<br>\n那场战斗后,黑野氏集团发现了薇拉的才能,自此造就了强大又不择手段的战士薇拉.虽然在构造体部队中风评极差,但也有部分相当欣赏其作风的构造体,比如连队名都模仿三头犬小队的地狱犬小队,其队长便是薇拉狂热的追随者之一.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_13lingjiantongyinga: ['female', 'zm5ling', 5, ['zmheizhishengbei', 'zmezhaozhihua'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】黑之圣杯<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】使役被污染的圣杯,将诅咒泼洒向大地的魔术师.<br>\n间桐樱是魔术名门远坂家的女儿,出生后被过继到亲近的间桐家作为间桐魔术的继承者.然而,素质优异的樱并没有得到友好的对待,反而长久受到惨无人道地改造与折磨.<br>\n第五次圣杯战争时,间桐樱作为魔术师之一参战,并在间桐脏砚的安排下暗中成为接收灵魂能量的小圣杯,进而受到安哥拉曼纽的诅咒侵染.随着汇聚的诅咒与日俱增,樱心中的阴暗面与怨念开始侵蚀理智,与圣杯内的黑泥产生共鸣.借助这异化的伪第三法力量与对关联英灵的绝对克制,樱逐渐成为这场战争中横扫一切的怪物.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_12tiyilishabai: ['female', 'zm5ti', 4, ['zmtianzaixinshi', 'zmyishunkuiliu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性魔性.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】一瞬溃流<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<鹅妈妈童谣>所诞生的幻灵,灾厄的预言家.<br>\n<鹅妈妈童谣>是世界上最早的儿歌集,由英国民间整理成书,充满了可爱而美好的故事——<br>\n以上完全是虚假的.<br>\n这部童谣真正的内容,每一行每一句都充满了邪恶与阴暗,说是恐怖诗集也不为过.其中更包含了糟糕的预言和对现实的诅咒,即使经由当局修编净化后这些黑童话依然流传至今.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_14linaierajifu: ['female', 'zm5lin', 4, ['zmshenyuanmidian', 'zmkuayuemenfeizhiwu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】跨越门扉之物<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<基塔布·阿尔·阿吉夫>所诞生的幻灵,这本书也被叫做<死灵之书>.<br>\n<基塔布·阿尔·阿吉夫>是疯诗人阿卜杜拉·阿尔哈萨德所著,据说他完成这本书后就在大马士革的街道上众目睽睽下被肉眼看不见的魔物吃掉了.公元950年,拜占庭帝国的翻译家将这本书翻译成希腊文,并正式命名为<死灵之书>,通过书名也不难看出拜占庭人对这本书恐惧.公元1050年,<死灵之书>被拜占庭列为禁书并将印刷版本烧毁.直到1228年,丹麦的一个学者将这本书从希腊文翻译成了拉丁文,<死灵之书>再次风靡.但是当年恐怖的景象却并未停止,四年后教皇不得不再次将这本书列为了禁书.<br>\n<死灵之书>阐述了历史上的事件、预言了未来,并揭示了人类神话和宗教的<真正>起源;它明确记载了天文学知识和大量魔法咒文,神秘生物的召唤仪轨和应对方式,并明示了人类以外某些高等生命的存在与恐怖.这使得真品<死灵之书>成为了神秘学领域的一个秘宝和传说,太多超自然事件中都有它的影子.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_03qiangyishena: ['male', 'zm5qiang', 4, ['zmwanxiangshengmiedeqidi', 'zmtapazhihuobumie'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性神性.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】塔帕之火不灭<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★★★☆☆☆☆☆<br>\n' + '【特质】密教十二天之一,地位尊崇的佛门神圣.<br>\n伊舍那天是佛教传说中的大护法神;常醉天、喜面天、器手天、大黑天等皆为其眷属.其左手持盛血劫波杯,右手持三戟枪,浅青肉色,三目忿怒,姿态与更古老的印度教神明[湿婆]相类,亦有人说在佛教内伊舍那天与湿婆化身同等.<br>\n湿婆神是古印度教的创生与毁灭之神,地位不在创世神梵天之下.他的额上长着第三只眼睛,睁开时将摧毁万物,就连神也不能幸免.传说爱神迦摩在湿婆修苦行时打扰,湿婆第三只眼喷射的神火把爱神烧却,但爱神并没有死,只不过没有了形体,所以爱是无形的.<br>\n<我在起舞时认为神就在我的身体里.他伟大的智慧,正借助我的躯体得以传扬.><br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_20shenyouhabahe: ['male', 'zm5shen', 5, ['zmlingzizhipei', 'zmquanzhiquanneng'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】上位者<br>\n' + '【宝具】全知全能<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】灭却师之王用九百年取回心跳、九十年取回意识、九年取回力量、随即仅用九天取得世界.<br>\n曾经有一个天生目不能视、耳不能听、口不能言、甚至不能活动的婴儿.所有触碰过这个婴儿的人其原本残缺的一切都会得到补足;丑陋的变得美丽,弱小的变得强大,终有一天他们死亡,灵魂被这个婴儿吞噬.<br>\n夺取了大量灵魂,婴儿也得以不再残缺,他被崇拜者们视为神,称作<友哈巴赫>.<br>\n友哈巴赫将自己的血散播出去,演化出了操控灵子的灭却师一族.在无数灵魂的推动下,他觉醒了自己真正的能力,为了将世界带回没有生死的混沌而向世界宣战.<br>\n友哈巴赫的能力〖全知全能〗可以让他看到视野中万物未来的种种可能性.围绕着可能性,他就可以篡改即将发生的未来,让可能会发生的事情跳过过程直接成为已经到来的现实.<br>\n' + '【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_13linglouhu: ['male', 'zm5ling', 4, ['zmdadihuo', 'zmgaiguantieweishan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性元素.png width="34" height="22"><img src=extension/综漫季刊伍/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性中立邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】盖棺铁围山<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自人类对大地的畏惧中所诞生的,最强的自然咒灵.<br>\n作为接受了海量人类愿力成形的高等咒物,漏瑚认定负面情感才是人类的真实,因此与同级的存在们以新人类自居.其拥有高位的咒术与庞大的咒力,一般的杂鱼只消一个念头就会被他如火柴般轻易点燃.这样的漏瑚自恃强大一贯藐视所有敌人,直到其败给了五条悟的<无限>后才接受了天外有天的事实.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_13lingzhenren: ['male', 'zm5ling', 4, ['zmwuweizhuanbian', 'zmzibiyuandunguo'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】自闭圆顿裹<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】由人类对自身的畏惧中诞生的咒灵,宛如恶质残忍的结块.<br>\n作为接受了海量愿力成形的高等咒物,真人认为负面情感才是人的真实,因此与同类们以新人类自居.虽然目前真人的力量不是最强的,但同类们仍奉其为首领,只因真人的潜力——人类对自身,对同族的恐惧终有一天会凌驾于任何自然事物之上.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_05qikalin: ['female', 'zm5qi', 4, ['zmzhanzhenglun', 'zmhexinzhanlue'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】核心战略<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<战争论>诞生的幻灵,行事雷厉风行,一丝不苟.<br>\n<战争论>是普鲁士军事家卡尔·冯·克劳塞维茨创作的一部军事理论著作.该书是军事思想史上自觉运用辩证法总结战争经验的战争理论经典,为近代西方军事思想体系的形成和发展奠定了理论基础,被誉为<战略学的<圣经>>.克劳塞维茨也因此被视为西方近代军事理论的鼻祖.<br>\n卡琳自诞生起便活跃在人类的军营,极具军事素养和军事才能,深受大家信赖,曾率领人类军队打赢无数大大小小的战争.战争从不是一个人的舞台,军队从不是统领者的天下;唯有将所有力量调动掌握,局部实现以强击弱,方能破敌制胜.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_03qiangannita: ['female', 'zm5qiang', 4, ['zmhuanghunqishi', 'zmshanyaodeyuhui'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】黄昏骑士<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<堂·吉诃德>诞生的幻灵,追寻着与历史进程背道而驰的<骑士精神>,常把所到之处闹得天翻地覆的小骑士.<br>\n<堂·吉诃德>是西班牙作家塞万提斯著反骑士小说.荒谬的白日梦中,顽固又滑稽的骑士擦亮盔甲,牵起瘦马走向浪漫的幻象.即使被现实撞得头破血流,放弃冒险,但临终他仍没有放手骑士道的执着.<br>\n即使骑士时代早已远去,骄傲的骑士安妮塔大人面对光怪陆离的新世界依然无所畏惧,横冲直撞.<br>\n' + '【评级】<b><font color=DarkKhaki>C</font></b>\n']],
                        zm_10kuangdan: ['female', 'zm5kuang', 5, ['zmgelintonghua', 'zmlanglaile'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性野兽.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】狼来了<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】自<格林童话>诞生的幻灵,脱胎自古老的幻想.<br>\n<格林童话>是19世纪德国语言学家格林兄弟收集整理的德意志民间童话集,出版后成为世界童话中不可或缺的经典著作.这些童话表达了人类质朴的心愿、幻想和信仰——那是因为它们已经过长达45年的改写,抹去了最初恐怖邪恶的情节与结局.<br>\n丹既是大灰狼也是小红帽.她把真实的自己隐藏了起来,藏起耳朵和尾巴,把作为<狼>的一面藏进了一只玩偶里,变成了一个抱着玩偶的人类女孩.<br>\n<这样,应该就会被接纳了吧.><br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_11ruyigulabojin: ['male', 'zm5ru', 4, ['zmshehuitouxi', 'zmqiyuebangjia'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】契约绑架<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】心灵派系的媚娃混血,致力于社会财富再分配的天才欺诈师.<br>\n当幼年伊古拉凭借一部<未成年儿童保护法>支配了整个抚养所时,他就明确了自己将来的职业规划.成年后的伊古拉毫不犹豫的选择了难以修习的心灵派系,凭借极具亲和性的外表与狡诈的言语陷阱常年作案却仍能逍遥法外.<br>\n伊古拉最得意的成就是他以契约术灵为核心开发的奇迹<言出必践>.只要目标向他做出承诺,那么在一定程度内目标就必须兑现自己的承诺——而这些承诺往往是伊古拉诱导他们开出的空头支票.<br>\n' + '【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_04douaojia: ['male', 'zm5do', 5, ['zmcichangzhuandong', 'zmshajingbaquan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】杀鲸霸拳<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】元祖磁场强者之一,为人冷静而坚定,对自己力量的信心会给对手很大压力.<br>\n奥加人称<杀人鲸>,是最初的磁场转动觉醒者蓝道天武的长子.自出道起奥加就占据着世界最强的称号,鲜有败绩.<br>\n少年时奥加曾因小瞳离开蓝梦组织自行闯荡,凭实力和智慧只用四年时间便能与蓝梦组织分庭抗礼.但蓝道天武利用小瞳威胁奥加,奥加选择了屈服.对于亲人的羁绊迫他效忠组织.尽管奥加总被命令执行内心不想做的残酷任务,不满蓝梦的野心,可总是举棋不定的他无可奈何.虽然拥有强绝的力量,但平日总是不开心的样子.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_10kuangkesimo: ['male', 'zm5kuang', 4, ['zmxuguangcanji', 'zmguochongchaobian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性类人.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】过重超变<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火英桀第九位,旭光的科斯魔.<br>\n科斯魔是逐火之蛾中的后晋者,融合了珍贵的特殊崩坏兽<毗湿奴>进而拥有吸收其它能力并无限进化的特质.单以正面作战而论,英桀中能胜过他的也只有寥寥几人——且科斯魔仍有机会继续变强下去.<br>\n作为新兵的科斯魔曾被交给凯文培养.因为科斯魔不擅言辞凯文也不擅指导,一开始科斯魔被训哭过很多次,后来却成了凯文的小跟班.想来科斯魔之所以能迅速取得高战力,也是多亏了这位最强战士的指导.<br>\n然而,未及科斯魔成长到追上凯文的地步,逐火之蛾已必须去面对强绝的终焉律者了.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_01jianying: ['female', 'zm5jian', 5, ['zmchanayidao', 'zmwanxiangwuming'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性类人.png width="34" height="22"><img src=extension/综漫季刊伍/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】刹那一刀 万象无明<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火英桀第八位,耳机里播放的音乐风格可能导致其人形象崩塌,所以绝对不可以给别人分享.<br>\n樱是历史上第四位融合战士,在逐火之蛾中可谓中流砥柱.过去她曾专研诸武,最终精研了追求极致速度的刹那剑技;当樱以寒狱冰天全力施展时,密织的剑痕就连空间也能冻结.<br>\n作为能凭技术在千劫面前维持不败的强者,樱却是唯一一个死在终焉之战前的英桀.究其原因,即使拥有天下无双的速度却也不能够成为她从至亲身边逃离的理由.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_10kuangqianjie: ['male', 'zm5kuang', 5, ['zmaomie', 'zmfeitian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】鏖灭<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★☆☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火英桀第六位,前文明最凶暴的战士.<br>\n在逐火之蛾,以及整个文明对抗崩坏的历程中涌现了许许多多的天才、英雄.然而在无数杰出战士中只有两人可以胜过千劫.千劫的力量就是这般强大,在他成为融合战士前就有过独自撕碎冰之律者的战绩.千劫的超变手术称不上成功,虽然取得了无与伦比的破坏力但也产生了与日俱增的精神异化与身体负担.罹患这种后遗症的战士很多,但硬抗并活下来的只有千劫一个.<br>\n千劫与大多数同伴的关系都称不上好,因为即使调用他的数据进行模拟训练也发生过数次受训者脑死亡的事件,故没有多少人敢于千劫照面;而剩下的几人就知道,催动千劫无尽杀意的除了仇恨,也只有他想重回和平年代在当疗养院当力工生活的小小希冀而已.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_07keweierwei: ['female', 'zm5ke', 4, ['zmluoxuanchangyan', 'zmyuxizhixia'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】愚戏之匣<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火之蛾十三英桀第五位,黄昏纪元的大工程师、大发明家、大魔术师.<br>\n维尔薇加入逐火之蛾前有很多身份,而且在每个对应领域都成就斐然.究其原因,真正的维尔薇只是一名<欺诈师>;她自认没有其他才能,但只要想要就可以扮演成任何职业的天才.<br>\n成为融合战士后维尔薇的能力是<思维分割>,将自己的思维分割成不同的部分,让不同的<自己>承担不同的<身份>.分割数量没有上限,但可供使用的心智有其上限,分割出的人格最多存在八个,否则就难以维持<天才>的标准.<br>\n在逐火之蛾中维尔薇也是首屈一指的工程师,不仅仅是常规武装,最初的神之键作者也是她.像这样无穷无尽的发明灵感和表演欲不仅令敌人恐惧对同伴来说也是令人头痛的特质.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_12tishiyuanzhilvzhe: ['female', 'zm5ti', 4, ['zmzhenwozhichi', 'zmzhiyiwuxia'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】致以无瑕的时代<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】逐火之蛾十三英桀第二位,同时也是有史以来第一个诞生的律者.<br>\n当崩坏现象尚未被人类文明所知时,第一个崩坏的使徒以人类女孩的形象降生在地球.这位一无所知的律者在人类社会中长大,见证这个文明面对崩坏时的好奇、贪婪、不屈、恐惧、绝望.<br>\n始源之律者太像人类,也太爱人类了.她隐藏身份化名爱莉希雅加入军方与崩坏作战,结识了形形色色的伙伴并在最危急时建立了逐火之蛾,艰难战胜了一名又一名崩坏的律者.<br>\n斩除第十二律者后,大地上仅剩的是文明的残迹,连十三英桀也悲观的认为难以抵抗下去.在这时爱莉希雅以第十三律者的身份自绝,燃烧自己的权能在命运层面对崩坏概念施加影响,让后世的律者得以富有更多自我——以及让人类鼓起希望迎战最后的律者.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_12tisu: ['male', 'zm5ti', 4, ['zmtianhui', 'zmyinguozhuanlun'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】因果转轮<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】逐火英桀第七位,洞观三千世界领悟天慧.<br>\n在十三英桀中,苏的身份为战友间的调停者,以及恒沙计划与监察者计划执行者.为了找到拯救文明的方法,苏无数次冒着意识消亡的风险使用神之键[千界一乘]观察平行世界;虽然最终未能改变结局,但苏的精神经过洗练也愈发强大.<br>\n前文明毁灭后,幸存的凯文决意在新文明启动会波及所有人类的计划,向来舍己渡人的苏自然不会同意.矛盾的最后,凯文被千界一乘暂时封印,而苏则因为超负荷观测平行世界的缘故导致寿命将近.在生命的最后,苏与千界一乘沉入量子之海,前往死后的世界寻找凌驾于崩坏之上的宇宙真相.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07keluosaita: ['female', 'zm5ke', 4, ['zmlinliezhixin', 'zmdizuizhiqiang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】涤罪之枪<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】原守林人组织首领,至今仍相信人马是真实存在的.<br>\n守林人组织是北极航线联合强行改造犯罪者制造的异人型构造体集团.这种改造忽视人道主义精神,将上传的人类意识强行容纳于非人的机械躯体内,虽然获得了更强的战斗力但也使构造体的意识更容易偏离人类.<br>\n<我过去并不相信空中花园关于异人型构造体的理论,但变成人形之后确实产生了自己仍然是人类的错觉.><br>\n罗塞塔在被空中花园收容后得以卸去人马机体转变成人形构造体,并追加高频磁极悬浮装置.改造后其意识海趋于稳定,单兵突破能力较以前更为强大.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_07keluna: ['female', 'zm5ke', 4, ['zmshenggewangluo', 'zmyinmianhuiguan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22"><img src=extension/综漫季刊伍/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】械师<br>\n' + '【宝具】银冕辉冠<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】升格网络的代行者,有着凌驾于所有升格者之上的权限与力量.<br>\n露娜和露西娅是被军方收养,参与了空中花园构造体改造实验的一对孤儿姐妹.遗憾的是,妹妹露娜在最后的实验中被帕弥什病毒迅速感染,实验失败.其<遗体>被空中花园当做垃圾抛弃在废土上.<br>\n被抛弃的露娜之精神接受了升格网络的邀请成为升格者,不但身心抵御了帕弥什的侵蚀而且还成为了帕弥什造物的主宰.之后露娜组建升格者组织,欲将空中花园拉到地面让其中卑劣的人类平等的接受帕弥什的筛选.<br>\n经历了许多事后,露娜的筛选已不像最初那么决绝;除了她作为代行者思想的改变,升格网络本身也在吸收情报的同时演变进化,寻求不同生命形式间更优的发展道路.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_08shaxidekagainuo: ['male', 'zm5sha', 5, ['zmyingshou', 'zmjiye'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊伍/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊伍/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】极夜<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】平日低调,暗中却不为人知地介入故事,无比强大的<影之实力者><br>\n——自小开始,希德就梦想成为这样的英雄角色;当同龄人走出中二期时,他却更坚定地去实现这个理想.对肉体极限仍不满足的他尝试用各种方式寻找超自然力量,并因此死亡转生到有魔力的异世界...某种意义上来说他成功了.<br>\n经过第二世更加卓绝的修行,希德在废物贵族庶子的伪装下积累了举世无双的实力,且误打误撞组建了自己的组织并在他不知情的时候对上了支配世界的邪恶集团.虽然他眼中看来自己只是玩角色扮演和袭击大型盗贼团,但事实上他已确实成为了伙伴眼中拯救世界的影之英雄.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                    },
                    skill: {
                        zmhonghaiqiji: {
                            group: ['zmtrenxing', 'zmtshenxing'],
                            nobracket: true,
                            trigger: {
                                global: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var num0 = 0;
                                if (event.card.name == 'wuxie') return false;
                                if (!event.targets) return false;
                                if (event.targets.length) {
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (event.targets[i].countCards('he') > 0) num0++;
                                    }
                                }
                                if (player.storage.zmt_np < 10) return false;
                                if (get.type(event.card) != 'trick' && get.type(event.card) != 'delay') return false;
                                if (num0 == 0) return false;
                                return get.color(event.card) == 'red' || get.color(event.card) == 'black';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, Infinity], `【红海奇迹】是否令任意名${get.translation(trigger.card)}的目标随机重铸一张牌？`, function (card, player, target) {
                                        return _status.event.targets.includes(target) && target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        if (get.color(trigger.card) == 'red') {
                                            if (target.maxHp == target.hp) return 0;
                                            return get.attitude(player, target);
                                        } else return -get.attitude(player, target);
                                    })
                                    .set('targets', trigger.targets);
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 10;
                                    if (get.color(trigger.card) != 'red') {
                                        game.playzm5(['zmhonghaiqiji11', 'zmhonghaiqiji12', 'zmhonghaiqiji13'].randomGet());
                                    } else {
                                        game.playzm5(['zmhonghaiqiji21', 'zmhonghaiqiji22', 'zmhonghaiqiji23'].randomGet());
                                    }
                                    if (get.color(trigger.card) == 'red') {
                                        player.line(result.targets, 'blue');
                                    } else {
                                        player.line(result.targets, 'fire');
                                    }
                                    event.targets = result.targets;
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        var card = targets[i].getCards('he').randomGet();
                                        targets[i].lose(card);
                                        targets[i].$throw(card);
                                        event.card = get.cards();
                                        if (get.color(event.card) == 'black' && get.color(trigger.card) == 'black') {
                                            targets[i].loseHp();
                                        }
                                        if (get.color(event.card) == 'red' && get.color(trigger.card) == 'red') {
                                            targets[i].recover();
                                        }
                                        targets[i].gain(event.card, 'gain2');
                                    }
                                }
                            },
                        },
                        zmsihaiwenshu: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmsihaiwenshu;
                                },
                            },
                            mark: true,
                            marktext: '约',
                            intro: {
                                markcount(storage, player) {
                                    var num = player.getHandcardLimit();
                                    return num;
                                },
                                content(storage, player) {
                                    var num1 = player.getHandcardLimit();
                                    var num = player.storage.zmsihaiwenshu;
                                    if (player.storage.zmsihaiwenshu_1 == false) {
                                        return `你的手牌上限为${num1},趋势为减少`;
                                    } else return `你的手牌上限为${num1},趋势为增加`;
                                },
                            },
                            init(player) {
                                player.storage.zmsihaiwenshu = 0;
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBefore',
                            },
                            forced: true,
                            _priority: 10,
                            content() {
                                'step 0';
                                if (player.getHandcardLimit() <= 0) {
                                    player.storage.zmsihaiwenshu = -player.hp;
                                }
                                ('step 1');
                                if (player.storage.zmsihaiwenshu_1 == false) {
                                    player.storage.zmsihaiwenshu--;
                                } else {
                                    player.storage.zmsihaiwenshu++;
                                }
                                player.markSkill('zmsihaiwenshu');
                                ('step 2');
                                if (player.getHandcardLimit() <= 0) {
                                    player.storage.zmsihaiwenshu = -player.hp;
                                }
                                if (player.getHandcardLimit() <= 0 && player.storage.zmsihaiwenshu_1 == false) {
                                    event.num = 1;
                                    player.storage.zmsihaiwenshu_1 = true;
                                    player.chooseTarget('选择一名受伤角色令其回复一点体力', function (card, player, target) {
                                        return target.isDamaged();
                                    }).ai = function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) > 0) {
                                            return get.recoverEffect(target, player, player) + 1;
                                        }
                                        return 0;
                                    };
                                }
                                if (player.getHandcardLimit() >= player.hp && player.storage.zmsihaiwenshu_1 == true) {
                                    player.storage.zmsihaiwenshu_1 = false;
                                    player.chooseTarget('选择一名角色令其失去一点体力', function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    };
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (event.num == 1) {
                                        game.playzm5(['zmsihaiwenshu11', 'zmsihaiwenshu12', 'zmsihaiwenshu13', 'zmsihaiwenshu14', 'zmsihaiwenshu15', 'zmsihaiwenshu16'].randomGet());
                                        player.line(result.targets, 'blue');
                                        result.targets[0].recover();
                                    } else {
                                        game.playzm5(['zmsihaiwenshu21', 'zmsihaiwenshu22', 'zmsihaiwenshu23', 'zmsihaiwenshu24', 'zmsihaiwenshu25', 'zmsihaiwenshu26'].randomGet());
                                        player.line(result.targets, 'fire');
                                        result.targets[0].loseHp();
                                    }
                                }
                            },
                            group: ['zmsihaiwenshu_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmsihaiwenshu_1 = false;
                                    },
                                },
                            },
                        },
                        zmxianzhenzhe: {
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                                source: 'damageAfter',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player) {
                                return player.hp != player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                if (player.countCards('h') < player.hp) {
                                    if (trigger.player != player) {
                                        game.playzm5(['zmxianzhenzhe13', 'zmxianzhenzhe12', 'zmxianzhenzhe11', 'zmxianzhenzhe14', 'zmxianzhenzhe11'].randomGet());
                                    } else {
                                        game.playzm5(['zmxianzhenzhe21', 'zmxianzhenzhe22', 'zmxianzhenzhe23', 'zmxianzhenzhe24', 'zmxianzhenzhe25'].randomGet());
                                    }
                                    player.draw(player.hp - player.countCards('h'));
                                    event.finish();
                                }
                                if (player.countCards('h') > player.hp) {
                                    event.num++;
                                    var num = player.countCards('h') - player.hp;
                                    player.chooseToDiscard(num, 'h', true);
                                }
                                ('step 1');
                                if (result.bool && event.num == 1) {
                                    event.cards = result.cards;
                                    player.chooseTarget(`是否对一名本回合未以此法指定过的合理角色使用${get.translation(result.cards)}转化的【杀】？`, function (card, player, target) {
                                        return !target.hasSkill('zmxianzhenzhe_1') && player.canUse('sha', target);
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    };
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    if (result.targets[0].hp == 1) {
                                        game.playzm5('zmweilaq1');
                                        game.mp425('zmweilaq');
                                    } else {
                                        game.playzm5(['zmxianzhenzhe13', 'zmxianzhenzhe12', 'zmxianzhenzhe11', 'zmxianzhenzhe14', 'zmxianzhenzhe15'].randomGet());
                                    }
                                    player.useCard({ name: 'sha' }, event.cards, result.targets[0], false);
                                    result.targets[0].addTempSkill('zmxianzhenzhe_1');
                                } else {
                                    if (trigger.player != player) {
                                        game.playzm5(['zmxianzhenzhe13', 'zmxianzhenzhe12', 'zmxianzhenzhe11', 'zmxianzhenzhe14', 'zmxianzhenzhe11'].randomGet());
                                    } else {
                                        game.playzm5(['zmxianzhenzhe21', 'zmxianzhenzhe22', 'zmxianzhenzhe23', 'zmxianzhenzhe24', 'zmxianzhenzhe25'].randomGet());
                                    }
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmleimingjinjun: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.storage.zmt_np < 40) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return !target.hasSkill('zmleimingjinjun_1');
                            },
                            content() {
                                if (target == player) {
                                    game.playzm5(['zmleimingjinjun13', 'zmleimingjinjun12', 'zmleimingjinjun21', 'zmleimingjinjun11'].randomGet());
                                } else {
                                    game.playzm5(['zmleimingjinjun23', 'zmleimingjinjun22', 'zmleimingjinjun21', 'zmleimingjinjun21'].randomGet());
                                }
                                player.storage.zmt_np -= 40;
                                target.addSkill('zmleimingjinjun_1');
                                target.storage.zmleimingjinjun_1 = 2;
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.isDamaged() && target.hp >= 3) return 1;
                                        if (target.isDamaged() && target.hp < 2) return 3;
                                        if (target.isDamaged() && target == player) return 2;
                                        return 0;
                                    },
                                },
                                threaten: 1,
                            },
                            group: ['zmtrenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmleimingjinjun_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '军',
                                    intro: {
                                        content: '之后使用的#张【杀】造成伤害时回复1点体力.',
                                    },
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmleimingjinjun_2', 'shaEnd');
                                        player.storage.zmleimingjinjun_1--;
                                        ('step 1');
                                        if (player.storage.zmleimingjinjun_1 <= 0) {
                                            player.storage.zmleimingjinjun_1 = 0;
                                            player.removeSkill('zmleimingjinjun_1');
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        player.removeSkill('zmleimingjinjun_2');
                                        player.recover();
                                    },
                                },
                            },
                        },
                        zmheizhishengbei: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var num5 = game.countPlayer(function (current) {
                                    return current.countCards('h', { color: 'black' }) >= 1;
                                });
                                return player.storage.zmt_np >= 25 && num5 >= 1;
                            },
                            check(event, player) {
                                var th = game.findPlayer(function (current) {
                                    return current.isMaxHandcard() || current.isMaxHandcard(true);
                                });
                                if (th != player && th.countCards('h') < 4 && player.hp > 2) return false;
                                if (th == player && player.countCards('h', { color: 'black' }) <= 1 && player.hp > 1) return false;
                                return player.countCards('h') <= 4 || player.hp <= 2 || player.storage.zmt_np >= 60;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                player.addTempSkill('zmheizhishengbei_2');
                                var maxHandPlayers = game.filterPlayer(function (current) {
                                    return !game.hasPlayer(function (cur) {
                                        return cur.countCards('h', { color: 'black' }) > current.countCards('h', { color: 'black' });
                                    });
                                });
                                event.num = maxHandPlayers[0].countCards('h', { color: 'black' });
                                event.target = maxHandPlayers[0];
                                ('step 1');
                                if (event.num >= 3) {
                                    game.playzm5('zmjiantongying');
                                    game.mp425('zmjiantongying1');
                                }
                                if (event.num == 2) {
                                    game.playzm5(['zmheizhishengbei21', 'zmheizhishengbei22'].randomGet());
                                    game.mp425('zmjiantongying2');
                                }
                                if (event.num == 1) {
                                    game.playzm5('zmheizhishengbei11');
                                }
                                event.target.showHandcards();
                                var list2 = [];
                                var hs = event.target.getCards('h');
                                if (hs.length) {
                                    var hs2 = [];
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.color(hs[i]) == 'black') {
                                            hs2.push(game.createCard(hs[i].name, hs[i].suit, hs[i].number));
                                        }
                                    }
                                }
                                player.gain(hs2, 'draw');
                            },
                            group: ['zmheizhishengbei_1', 'zmtrenxing', 'zmtmoxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:1',
                                    trigger: {
                                        global: ['damageEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 1 && player.countCards('he', { color: 'black' }) >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseCardButton('选择一张黑色牌当作【桃】对一名角色使用？', player, player.getCards('he'))
                                            .set('filterButton', function (button) {
                                                return get.color(button.link) == 'black';
                                            })
                                            .set('ai', function (button) {
                                                return 10 - get.value(button.link);
                                            });
                                        ('step 1');
                                        if (result.links?.length) {
                                            event.cards = result.links;
                                            player
                                                .chooseTarget(1, '选择此【桃】目标？', function (card, player, target) {
                                                    return target.isDamaged();
                                                })
                                                .set('ai', function (target) {
                                                    var card = { name: 'tao' };
                                                    var trigger = _status.event.getTrigger();
                                                    return get.effect(target, card, player, player);
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.targets?.length) {
                                            player.useCard({ name: 'tao' }, event.cards, result.targets[0]);
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (get.color(card) == 'black') return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        zmezhaozhihua: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:5',
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.source != player && event.getParent(3).name != 'zmezhaozhihua') return false;
                                if (event.player.countCards('h') == 0) return false;
                                return event.source && event.player != player && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                var next = player.chooseButton([`可选择${get.translation(trigger.player)}的一张手牌令其使用之`, trigger.player.getCards('h')]);
                                next.set('ai', function (button) {
                                    var num4 = game.countPlayer(function (current) {
                                        return get.distance(trigger.player, current, 'attack') <= 1 && get.attitude(trigger.player, current) > 0;
                                    });
                                    if (button.link.name == 'sha' && num4 == 0) return 0;
                                    if (get.type(button.link) == 'equip' || button.link.name == 'tao' || button.link.name == 'huogong') return 0;
                                    return get.buttonValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, trigger.player) && trigger.player.hasUseTarget(button.link);
                                };
                                ('step 1');
                                if (result.links?.length) {
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
                                            game.checkMod(card, target, range, 'selectTarget', trigger.player);
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
                                            next.set('prompt', event.prompt || '是否令' + get.translation(trigger.player) + (event.targets2.length ? '对' : '') + get.translation(event.targets2) + `使用${get.translation(card)}?`);
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
                                            next.set('prompt', event.prompt || `选择${get.translation(trigger.player)}使用${get.translation(card)}的目标`);
                                        }
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.line(trigger.player, { color: [119, 0, 0] });
                                    trigger.player.line(event.targets2 || result.targets, { color: [119, 0, 0] });
                                    trigger.player.useCard(card, event.targets2 || result.targets, false, 'noai');
                                }
                            },
                        },
                        zmtianzaixinshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:1',
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
                                    .chooseTarget(get.prompt('zmtianzaixinshi'), '选择一名角色令其展示一张手牌', 1, function (card, player, target) {
                                        return target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var num = 0;
                                        if (player.countCards('h') > 0) {
                                            var cards1 = player.getCards('h');
                                            for (var i = 0; i < cards1.length; i++) {
                                                if (player.getUseValue(cards1[i]) > 9) num++;
                                            }
                                        }
                                        if ((num > 0 && player.countCards('h') <= 3) || (num > 0 && player.hp <= 2)) {
                                            if (target != player) return 0;
                                            return 1;
                                        }
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    if (get.attitude(player, result.targets[0]) > 0) {
                                        game.playzm5(['zmtianzaixinshi11', 'zmtianzaixinshi12', 'zmtianzaixinshi13', 'zmtianzaixinshi14', 'zmtianzaixinshi15', 'zmtianzaixinshi16', 'zmtianzaixinshi17', 'zmtianzaixinshi18', 'zmtianzaixinshi19'].randomGet());
                                    } else {
                                        game.playzm5(['zmtianzaixinshi21', 'zmtianzaixinshi22', 'zmtianzaixinshi23', 'zmtianzaixinshi24', 'zmtianzaixinshi25', 'zmtianzaixinshi26', 'zmtianzaixinshi27', 'zmtianzaixinshi27', 'zmtianzaixinshi28', 'zmtianzaixinshi29', 'zmtianzaixinshi30'].randomGet());
                                    }
                                    player.line(result.targets);
                                    event.target = result.targets[0];
                                    event.target.addSkill('zmtianzaixinshi_1');
                                } else event.finish();
                                ('step 2');
                                var next = event.target.chooseCard(true, 1, 'h', '须选择一张牌展示,回合结束时若该牌已离开你的手牌区则你摸一张牌,否则你弃置该牌', function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (event.target == player) return player.getUseValue(card);
                                    return -get.value(card);
                                };
                                ('step 3');
                                if (result.cards?.length) {
                                    player.showCards(result.cards[0]);
                                    event.target.storage.zmtianzaixinshi_1.push(result.cards[0]);
                                }
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmtianzaixinshi_1 = [];
                                    },
                                    intro: {
                                        content: 'cards',
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtianzaixinshi_1.length;
                                    },
                                    content() {
                                        'step 0';
                                        var num = 0;
                                        player.removeSkill('zmtianzaixinshi_1');
                                        var cards1 = player.getCards('h');
                                        for (var i = 0; i < cards1.length; i++) {
                                            if (player.storage.zmtianzaixinshi_1.includes(cards1[i])) {
                                                player.discard(cards1[i]);
                                                num++;
                                            }
                                        }
                                        if (num == 0) player.draw();
                                        ('step 1');
                                        player.storage.zmtianzaixinshi_1 = [];
                                    },
                                },
                            },
                        },
                        zmyishunkuiliu: {
                            group: ['zmtrenxing', 'zmtmoxing', 'zmtgaodengliliang', 'zmyishunkuiliu_1', 'zmyishunkuiliu_2'],
                            audio: 'ext:综漫季刊伍/audio:4',
                            nobracket: true,
                            trigger: {
                                global: 'discardBefore',
                            },
                            check(event, player) {
                                var num = player.countCards('h') - event.cards.length;
                                if (num < 0) num = 0;
                                if ((player.hp > 1 && event.player.countCards('h') - event.cards.length - num <= 2 && player.storage.zmt_np < 50) || (player.hp == 1 && event.player.countCards('h') - event.cards.length - num < 2 && player.storage.zmt_np < 50)) return false;
                                return get.attitude(player, event.player) < 0;
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `是否代替${get.translation(event.player)}弃置${event.cards.length}张手牌并令其弃置全部手牌？`;
                                return str;
                            },
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i) == 'h') num++;
                                    }
                                if (player.storage.zmt_np < 25) return false;
                                if (!event.player.isAlive()) return false;
                                if (event.cards.length == 0) return false;
                                if (event.player == player) return false;
                                return num > 0 && num < event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                trigger.player.line(player, { color: [187, 102, 119] });
                                event.target = trigger.player;
                                player.storage.zmt_np -= 25;
                                var num = trigger.cards.length;
                                trigger.cancel();
                                player.chooseToDiscard(num, 'h', true);
                                ('step 1');
                                player.line(event.target, { color: [255, 0, 0] });
                                event.target.discard(event.target.getCards('h'));
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'discardBefore',
                                    },
                                    check(event, player) {
                                        var num = event.cards.length;
                                        if (num > player.countCards('h')) num = player.countCards('h');
                                        var num1 = event.player.hp - 1;
                                        var num2 = event.player.hp - 1;
                                        if (num2 < 0) num2 = 0;
                                        if (num2 == 0) return false;
                                        if ((player.hp > 2 && num2 * 2.5 < num && player.storage.zmt_np < 50) || (player.hp <= 2 && num2 * 3 < num && player.storage.zmt_np < 50)) return false;
                                        if ((player.hp > 2 && num2 * 3 < num && player.storage.zmt_np >= 50 && player.hp <= num1) || (player.hp <= 2 && num2 * 4 < num && player.storage.zmt_np >= 50 && player.hp <= num1)) return false;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        var num1 = event.player.hp - 1;
                                        str += `是否代替${get.translation(event.player)}弃置${event.cards.length}张手牌并令其受到${num1}点伤害？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                // if(i.original=='h') num++;
                                                if (get.position(i) == 'h') num++;
                                            }
                                        if (player.storage.zmt_np < 25) return false;
                                        if (!event.player.isAlive()) return false;
                                        if (event.cards.length == 0) return false;
                                        if (event.player == player) return false;
                                        return num > 0 && num == event.player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.line(player, { color: [187, 102, 119] });
                                        event.target = trigger.player;
                                        player.storage.zmt_np -= 25;
                                        var num = trigger.cards.length;
                                        trigger.cancel();
                                        player.chooseToDiscard(num, 'h', true);
                                        ('step 1');
                                        if (!player.hasSkill('zmyishunkuiliu_3')) {
                                            player.addTempSkill('zmyishunkuiliu_3', 'roundStart');
                                            game.playzm5('zmtiyilishabai');
                                            game.mp425('zmtiyilishabai');
                                        }
                                        ('step 2');
                                        player.line(event.target, { color: [255, 0, 0] });
                                        event.target.damage(event.target.hp - 1);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    check(event, player) {
                                        var num = player.hp - event.num;
                                        var num2 = event.player.hp;
                                        if ((num <= 0 && game.countPlayer() > 2) || (num <= 0 && event.player.countCards('h') > 0)) return false;
                                        if (num2 <= 0) return false;
                                        if (event.player.getEquip('baiyin') && num2 > 1 && num < 2) return false;
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        var num1 = event.player.hp;
                                        str += `是否代替${get.translation(event.player)}受到${event.num}点伤害并令其受到${num1}点伤害？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmt_np < 25) return false;
                                        if (!event.player.isAlive()) return false;
                                        if (event.num == 0) return false;
                                        if (event.player == player) return false;
                                        return event.num + 1 == event.player.hp;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.line(player, { color: [187, 102, 119] });
                                        event.target = trigger.player;
                                        player.storage.zmt_np -= 25;
                                        //  trigger.cancel();
                                        trigger.player = player;
                                        ('step 1');
                                        if (!player.hasSkill('zmyishunkuiliu_3')) {
                                            player.addTempSkill('zmyishunkuiliu_3', 'roundStart');
                                            game.playzm5('zmtiyilishabai');
                                            game.mp425('zmtiyilishabai');
                                        }
                                        ('step 2');
                                        var num = event.target.hp;
                                        player.line(event.target, { color: [255, 0, 0] });
                                        if (trigger.nature) {
                                            if (trigger.source) {
                                                event.target.damage(num, event.nature, trigger.source);
                                            } else {
                                                event.target.damage(num, event.nature, 'nosource');
                                            }
                                        } else {
                                            if (trigger.source) {
                                                event.target.damage(num, trigger.source);
                                            } else {
                                                event.target.damage(num, 'nosource');
                                            }
                                        }
                                    },
                                },
                                3: {},
                            },
                        },
                        zmdadihuo: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:5',
                            trigger: {
                                player: 'shaBefore',
                            },
                            check(event, player) {
                                var suits = ['spade', 'heart', 'diamond', 'club'];
                                var cards = player.getCards('h');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        suits.remove(i.suit);
                                    }
                                if (player.countCards('h') == 0) return false;
                                if (event.target.countCards('h') == 0) return false;
                                if (event.target.hasSkillTag('nofire')) return false;
                                if (player.hasSkill('jiu') && player.storage.zmgaiguantieweishan == false) return false;
                                if (suits.length > 1 && player.storage.zmgaiguantieweishan == false) return false;
                                if (get.attitude(player, event.target) > 0) return false;
                                if (get.effect(event.target, { name: 'huogong' }, player, player) <= 0 && player.storage.zmgaiguantieweishan == false) return false;
                                if (event.target.countCards('h') <= 2 && player.storage.zmgaiguantieweishan == false && !event.target.getEquip('bagua')) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.target && event.target.countCards('h') > 0 && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                if (trigger.get.itemtype(trigger.cards) == 'cards') {
                                    trigger.player.useCard({ name: 'huogong' }, trigger.cards, trigger.target);
                                } else {
                                    trigger.player.useCard({ name: 'huogong' }, trigger.target, false);
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        var suits = ['spade', 'heart', 'diamond', 'club'];
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                suits.remove(i.suit);
                                            }
                                        if (arg && arg.name == 'sha' && arg.target.getEquip(2) && suits.length <= 2) return true;
                                        return false;
                                        if (arg && arg.name == 'sha') return true;
                                        return false;
                                    }
                                },
                            },
                            group: ['zmdadihuo_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:5',
                                    trigger: {
                                        target: 'shaBefore',
                                    },
                                    check(event, player) {
                                        if (player.countCards('h', { name: 'shan' }) > 1 || player.countCards('h', { name: 'jinchan' }) == player.countCards('h')) return false;
                                        if (event.player.countCards('h') > 3 && !player.hasSkillTag('nofire') && player.getEquip('tengjia')) return false;
                                        if (player.countCards('h', { name: 'shan' }) == 1 && event.player.countCards('h') >= 2 && !player.hasSkillTag('nofire')) return false;
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return player.countCards('h') > 0 && event.player.countCards('h') > 0 && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        if (trigger.get.itemtype(trigger.cards) == 'cards') {
                                            trigger.player.useCard({ name: 'huogong' }, trigger.cards, trigger.target);
                                        } else {
                                            trigger.player.useCard({ name: 'huogong' }, trigger.target, false);
                                        }
                                    },
                                },
                            },
                        },
                        zmgaiguantieweishan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:1',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            init(player) {
                                player.storage.zmgaiguantieweishan = false;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 40;
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0 && player.canUse({ name: 'sha' }, current) && get.effect(current, { name: 'huogong' }, player) > 0 && current.countCards('h') > 0;
                                });
                                if (player.countCards('h', { name: 'sha' }) + player.countCards('h', { name: 'huogong' }) == 0) return false;
                                if (num4 == 0) return false;
                                var suits = ['spade', 'heart', 'diamond', 'club'];
                                var cards = player.getCards('he');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        suits.remove(i.suit);
                                    }
                                if (suits.length > 2) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 40;
                                game.mp425('zmlouhu1');
                                ui.background.setBackgroundImage('extension/综漫季刊伍/image/背景漏瑚.jpg');
                                ('step 1');
                                game.playzm5('zmgaiguantieweishan2');
                                ('step 2');
                                setTimeout(function () {
                                    game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                }, 100000);
                                player.$fullscreenpop('盖棺铁围山', 'fire');
                                player.storage.zmgaiguantieweishan = true;
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp <= 2) return 2;
                                    return 0.8;
                                },
                            },
                            group: ['zmtleiren', 'zmtyuansu', 'zmtmoxing', 'zmgaiguantieweishan_1', 'zmgaiguantieweishan_2', 'zmgaiguantieweishan_3', 'zmgaiguantieweishan_4'],
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    forced: true,
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.num > 0 && event.nature == 'fire' && player.storage.zmgaiguantieweishan == true;
                                    },
                                    content() {
                                        player.draw(trigger.num);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'huogongBefore',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'huogong' && player.storage.zmgaiguantieweishan == true;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.setContent(lib.skill.zmgaiguantieweishan_2.contentx);
                                    },
                                    contentx() {
                                        'step 0';
                                        if (target.countCards('h') == 0) {
                                            event.finish();
                                            return;
                                        }
                                        target.chooseCard(true).ai = function (card) {
                                            if (_status.event.getRand() < 0.5) return Math.random();
                                            return get.value(card);
                                        };
                                        ('step 1');
                                        event.dialog = ui.create.dialog(get.translation(target) + '展示的手牌', result.cards);
                                        event.videoId = lib.status.videoId++;
                                        game.broadcast('createDialog', event.videoId, get.translation(target) + '展示的手牌', result.cards);
                                        game.addVideo('cardDialog', null, [get.translation(target) + '展示的手牌', get.cardsInfo(result.cards), event.videoId]);
                                        event.card2 = result.cards[0];
                                        game.log(target, '展示了', event.card2);
                                        event._result = {};
                                        player.chooseCard('he', { suit: event.card2.suit }, function (card) {
                                            var evt = _status.event.parent;
                                            if (get.damageEffect(evt.target, evt.player, evt.player, 'fire') > 0) {
                                                return 7 - get.value(card, evt.player);
                                            }
                                            return -1;
                                        }).prompt = false;
                                        ('step 2');
                                        if (result.cards?.length) {
                                            player.showCards(result.cards);
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            target.damage(2, 'fire');
                                        }
                                        event.dialog.close();
                                        game.addVideo('cardDialog', null, event.videoId);
                                        game.broadcast('closeDialog', event.videoId);
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmgaiguantieweishan == true;
                                    },
                                    content() {
                                        player.storage.zmgaiguantieweishan = false;
                                        game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                    },
                                },
                                4: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'huogong' && player.storage.zmgaiguantieweishan == true;
                                    },
                                    content() {
                                        trigger.nowuxie = true;
                                    },
                                },
                            },
                        },
                        zmyuxizhixia: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return true;
                            },
                            line: 'fire',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                event.target = target;
                                event.list = [];
                                var card1 = get.cards()[0];
                                event.list.push(card1);
                                target.gain(event.list);
                                var num = event.list.length;
                                player.showCards(event.list, '愚戏之匣');
                                target.chooseCardTarget({
                                    filterCard(card) {
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].number >= card.number) return false;
                                        }
                                        return true;
                                    },
                                    position: 'he',
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return event.target != target;
                                    },
                                    ai1(card) {
                                        if (get.value(card1) > 12 && event.target.hp >= 3 && get.attitude(event.target, player) <= 0) return -1;
                                        return card.number;
                                    },
                                    ai2(target) {
                                        var cards = target.getCards('e');
                                        var num2 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number >= 11) {
                                                    num2 += 2;
                                                }
                                            }
                                        var num0 = 2;
                                        if (get.attitude(event.target, target) < 0 && target.countCards('he') <= 3) {
                                            num0 = 6 - target.countCards('he');
                                        }
                                        if (num2 >= 1 && get.attitude(event.target, target) < 0) return 0;
                                        return -get.attitude(event.target, target) * num0;
                                    },
                                    prompt: `将一张点数大于${get.translation(event.list)}的牌与这些牌交给其他角色或获得这些牌并受到${num}点伤害`,
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    target.line(result.targets, 'fire');
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            event.list.push(i);
                                        }
                                    var num = event.list.length;
                                    result.targets[0].gain(event.list, event.target);
                                    event.target.$give(num, result.targets[0]);
                                    event.target.showCards(event.list, '愚戏之匣');
                                    event.target = result.targets[0];
                                } else {
                                    var num = event.list.length;
                                    if (get.attitude(player, event.target) <= 0) {
                                        if (num > 1) {
                                            game.playzm5(['zmweierwei1', 'zmweierwei2', 'zmweierwei3'].randomGet());
                                            game.mp425('zmweierwei');
                                        } else {
                                            game.playzm5(['zmyuxizhixia11', 'zmyuxizhixia12', 'zmyuxizhixia13', 'zmyuxizhixia14', 'zmyuxizhixia15', 'zmyuxizhixia16'].randomGet());
                                        }
                                    } else {
                                        game.playzm5(['zmyuxizhixia21', 'zmyuxizhixia22'].randomGet());
                                    }
                                    event.target.damage(num);
                                    event.finish();
                                }
                                ('step 2');
                                var num = event.list.length;
                                event.target.chooseCardTarget({
                                    filterCard(card) {
                                        for (var i = 0; i < event.list.length; i++) {
                                            if (event.list[i].number >= card.number) return false;
                                        }
                                        return true;
                                    },
                                    position: 'he',
                                    selectCard: [1, 1],
                                    filterTarget(card, player, target) {
                                        return event.target != target;
                                    },
                                    ai1(card) {
                                        return card.number;
                                    },
                                    ai2(target) {
                                        var cards = target.getCards('e');
                                        var num2 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number >= 11) {
                                                    num2 += 2;
                                                }
                                            }
                                        var num0 = 2;
                                        if (get.attitude(event.target, target) < 0 && target.countCards('he') <= 3) {
                                            num0 = 6 - target.countCards('he');
                                        }
                                        if (num2 >= 1 && get.attitude(event.target, target) < 0) return 0;
                                        return -get.attitude(event.target, target) * num0;
                                    },
                                    prompt: `将一张点数大于${get.translation(event.list)}的牌与这些牌交给其他角色或获得这些牌并受到${num}点伤害`,
                                });
                                ('step 3');
                                if (result.targets?.length) {
                                    event.target.line(result.targets, 'fire');
                                    if (Array.isArray(result.cards))
                                        for (var i of result.cards) {
                                            event.list.push(i);
                                        }
                                    var num = event.list.length;
                                    result.targets[0].gain(event.list, event.target);
                                    event.target.$give(num, result.targets[0]);
                                    event.target.showCards(event.list, '愚戏之匣');
                                    event.target = result.targets[0];
                                    event.goto(2);
                                } else {
                                    var num = event.list.length;
                                    if (get.attitude(player, event.target) <= 0) {
                                        if (num > 1) {
                                            game.playzm5(['zmweierwei1', 'zmweierwei2', 'zmweierwei3'].randomGet());
                                            game.mp425('zmweierwei');
                                        } else {
                                            game.playzm5(['zmyuxizhixia11', 'zmyuxizhixia12', 'zmyuxizhixia13', 'zmyuxizhixia14', 'zmyuxizhixia15', 'zmyuxizhixia16'].randomGet());
                                        }
                                    } else {
                                        game.playzm5(['zmyuxizhixia21', 'zmyuxizhixia22'].randomGet());
                                    }
                                    event.target.damage(num);
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player, target) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current != player;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('he') == 0;
                                        });
                                        var cards = player.getCards('he');
                                        var num1 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number >= 9) {
                                                    num1 += 3;
                                                }
                                            }
                                        var cards1 = target.getCards('e');
                                        var num2 = 0;
                                        if (target.getCards('e') > 0 && get.attitude(player, target) <= 0) {
                                            for (var i = 0; i < cards1.length; i++) {
                                                if (cards1[i].number >= 11) {
                                                    num2 += 1;
                                                }
                                            }
                                        }
                                        if (num2 >= 1) return 0;
                                        if (get.attitude(player, target) > 0 && target.hp <= 2) return 0;
                                        if (get.attitude(player, target) > 0 && target.countCards('he') <= 3) return 0;
                                        if (get.attitude(player, target) <= 0 && target.countCards('he') > 5) return 0;
                                        if (num1 == 0 && num5 == 0) return 0;
                                        if (num55 == 0) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('he') >= 4 && current.hp > 2 && current != player;
                                        });
                                        if (num44 >= 1) {
                                            if (target.hp <= 2) return 0;
                                            if (target.countCards('he') <= 3) return 0;
                                            return target.countCards('he');
                                        } else {
                                            var cards1 = target.getCards('e');
                                            var num2 = 0;
                                            if (target.getCards('e') > 0 && get.attitude(player, target) <= 0) {
                                                for (var i = 0; i < cards1.length; i++) {
                                                    if (cards1[i].number >= 11) {
                                                        num2 += 1;
                                                    }
                                                }
                                            }
                                            if (num2 >= 1) return 0;
                                            if (target.countCards('he') <= 3 && num2 == 0) return -2;
                                            if (target.countCards('he') == 0) return -5;
                                            return -1;
                                        }
                                        return 0;
                                    },//QQQ
                                },
                            },
                        },
                        zmluoxuanchangyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:6',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                var cards = [];
                                var num0 = 0;
                                game.countPlayer2(function (current) {
                                    current.getHistory('useCard', function (evt) {
                                        if (evt.getParent('phaseUse').player == event.player && evt.cards && evt.cards.length && evt.cards.filterInD('d').length) cards.addArray(evt.cards.filterInD('d'));
                                    });
                                });
                                if (cards.length) {
                                    var num0 = 0;
                                    var maxArray = [];
                                    for (var i = 0; i < player.getCards('he').length; i++) {
                                        if (maxArray.length == 0) {
                                            maxArray.push(player.getCards('he')[i]);
                                        } else {
                                            var h = maxArray[0];
                                            if (h.number > get.number(player.getCards('he')[i])) {
                                                maxArray = [player.getCards('he')[i]];
                                                num0 = get.number(player.getCards('he')[i]);
                                            } else if (h.number == get.number(player.getCards('he')[i])) {
                                                maxArray.push(player.getCards('he')[i]);
                                                num0 = get.number(player.getCards('he')[i]);
                                            }
                                        }
                                    }
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if (i.number > num0) {
                                                return !player.hasSkill('zmluoxuanchangyan_1') && num0 > 0;
                                            }
                                        }
                                }
                                return false;
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
                                            cards1.push(i);
                                        }
                                }
                                event.cards = cards1;
                                ('step 1');
                                if (event.cards.length) {
                                    var str = '是否用一张牌交换弃牌堆中点数更大的一张牌?';
                                    var dialog = ui.create.dialog(str, 'hidden');
                                    dialog.addText(`【${get.translation(player)}】的牌`);
                                    dialog.add(player.getCards('he'));
                                    dialog.addText('本回合因使用进入弃牌堆的牌');
                                    dialog.add(event.cards);
                                    player
                                        .chooseButton(dialog, 2)
                                        .set('filterButton', function (button) {
                                            var player = _status.event.player;
                                            var num = ui.selected.buttons.length;
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (num == 1 && get.owner(button.link) == player) return false;
                                                if (num == 1 && ui.selected.buttons[0].link.number >= button.link.number) return false;
                                            }
                                            if (num == 0 && get.owner(button.link) != player) return false;
                                            if (get.owner(button.link) == player) {
                                                var num4 = 0;
                                                if (Array.isArray(event.cards))
                                                    for (var i of event.cards) {
                                                        if (i.number > button.link.number) {
                                                            num4++;
                                                        }
                                                    }
                                                if (num4 == 0) return false;
                                            }
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            var player = _status.event.player;
                                            var owner = get.owner(button.link);
                                            var num = ui.selected.buttons.length;
                                            if (num == 1) {
                                                if (get.value(ui.selected.buttons[0].link) >= get.value(button.link)) {
                                                    return -1;
                                                }
                                            }
                                            return 18 - get.value(button.link);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addSkill('zmluoxuanchangyan_1');
                                    player.disableSkill('zmluoxuanchangyan_1', ['zmluoxuanchangyan']);
                                    var num = result.links[1].number - result.links[0].number;
                                    ui.cardPile.insertBefore(result.links[0], ui.cardPile.firstChild);
                                    player.storage.zmluoxuanchangyan_1 = num;
                                    player.gain(result.links[1]);
                                    result.links[0].fix();
                                    ui.cardPile.appendChild(result.links[0]);
                                    game.log(player, '将', result.links[0], '放在了牌堆底.');
                                    player.markSkill('zmluoxuanchangyan_1');
                                }
                            },
                            ai: {
                                threaten: 0.9,
                            },
                        },
                        zmluoxuanchangyan_1: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            mark: true,
                            marktext: '宴',
                            intro: {
                                content: '当有角色使用点数为#的牌时你获得之并回复【螺旋长宴】',
                            },
                            init(player) {
                                player.storage.zmluoxuanchangyan_1 = 0;
                            },
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return event.card && event.card.number == player.storage.zmluoxuanchangyan_1;
                            },
                            content() {
                                player.gain(trigger.cards, 'gain2');
                                player.removeSkill('zmluoxuanchangyan_1');
                                player.enableSkill('zmluoxuanchangyan_1', ['zmluoxuanchangyan']);
                            },
                        },
                        zmzhenwozhichi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:9',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('zmzhenwozhichi_1')) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') != player.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (target.countCards('h') > player.countCards('h')) {
                                    event.num = 1;
                                    var str = `须交给${get.translation(player)}一张手牌`;
                                    target.chooseCard('h', str, true).set('ai', function (card) {
                                        if (get.attitude(target, player) > 0) {
                                            if (player.hp <= 2 || player.countCards('h') == 1) return 10 - get.value(card);
                                            return 5 - get.value(card);
                                        } else {
                                            if (card.name == 'du') return 20;
                                            return 4 - get.value(card);
                                        }
                                    });
                                } else {
                                    event.num = 0;
                                    var str = `须交给${get.translation(target)}一张手牌`;
                                    player.chooseCard('h', str, true).set('ai', function (card) {
                                        if (get.attitude(player, target) > 0) {
                                            if ((target.hp <= 1 && player.hp > 1) || target.countCards('h') <= 1) {
                                                if (card.name == 'jinchan' && target.countCards('h') == 0) return 22;
                                                if (card.name == 'shan' && target.countCards('h') == 0) return 21;
                                                if (card.name == 'jiu' || card.name == 'jinchan') return 20;
                                                return 4 - get.value(card);
                                            }
                                            return 5 - get.value(card);
                                        } else {
                                            if (card.name == 'du') return 20;
                                            return 4 - get.value(card);
                                        }
                                    });
                                }
                                ('step 1');
                                if (event.num == 1) {
                                    if (result.cards?.length) {
                                        target.$give(result.cards, player);
                                        player.gain(result.cards, player);
                                    }
                                }
                                if (event.num == 0) {
                                    if (result.cards?.length) {
                                        player.$give(result.cards, target);
                                        target.gain(result.cards, player);
                                    }
                                }
                                ('step 2');
                                if (target.countCards('h') == player.countCards('h')) player.addTempSkill('zmzhenwozhichi_1');
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.8,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (!player.hasSkill('zmzhiyiwuxia_1') && get.attitude(player, target) <= 0 && player.countCards('h') > target.countCards('h')) return 0;
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') > player.countCards('h');
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') < player.countCards('h');
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') + 2 < player.countCards('h');
                                        });
                                        var num444 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') < player.countCards('h') && (current.countCards('h') <= 1 || current.hp <= 1);
                                        });
                                        if (num4 == 0 && num5 == 0) return 0;
                                        if (player.getHandcardLimit() < player.countCards('h')) {
                                            if (num4 == 0 && num5 == 0) return 0;
                                        } else {
                                            if (num5 == 0 && num444 == 0) return 0;
                                            // if(num444==0) return 0;
                                        }
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (!player.hasSkill('zmzhiyiwuxia_1') && get.attitude(player, target) <= 0 && player.countCards('h') > target.countCards('h')) return 0;
                                        /*  var num3=game.countPlayer(function(current){
                    return get.attitude(player,current)>0&&current.countCards('h')<player.countCards('h')&&current.isDamaged();
                    });*/
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') < player.countCards('h');
                                        });
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') + 2 < player.countCards('h');
                                        });
                                        var num444 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') < player.countCards('h') && (current.countCards('h') <= 1 || current.hp <= 1);
                                        });
                                        var num4444 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') + 2 < player.countCards('h') && (current.countCards('h') <= 1 || current.hp <= 1);
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') > player.countCards('h');
                                        });
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') > player.countCards('h') + 2;
                                        });
                                        if (num444 == 0 && num5 == 0 && player.getHandcardLimit() <= player.countCards('h')) {
                                            return 0;
                                        }
                                        if (num444 > 0 && num5 > 0) {
                                            if (num55 > 0) {
                                                if ((get.attitude(player, target) <= 0 && target.countCards('h') < player.countCards('h')) || get.attitude(player, target) > 0) return 0;
                                                return -target.countCards('h');
                                            } else {
                                                if (num4444 > 0) {
                                                    if (get.attitude(player, target) <= 0) return 0;
                                                    if (target.countCards('h') > player.countCards('h')) return 0;
                                                    if ((target.hp <= 1 || target.countCards('h') <= 1) && target.countCards('h') + 2 < player.countCards('h') && get.attitude(player, target) > 0) {
                                                        return 11;
                                                    }
                                                    if (get.attitude(player, target) <= 0 || target.countCards('h') > player.countCards('h')) {
                                                        return 0;
                                                    }
                                                    return 1;
                                                } else {
                                                    if (target.countCards('h') < player.countCards('h') && get.attitude(player, target) > 0 && (player.hasSkill('zmzhiyiwuxia_1') || (player.hp > target.hp && (player.countCards('h', { name: 'shan' }) >= 1 || player.countCards('h', { name: 'jiu' }) >= 1 || player.countCards('h', { name: 'jinchan' }) >= 1)))) {
                                                        if ((target.hp <= 1 || target.countCards('h') <= 1) && target.countCards('h') + 2 < player.countCards('h') && get.attitude(player, target) > 0) {
                                                            return 11;
                                                        }
                                                        if (get.attitude(player, target) <= 0 || target.countCards('h') > player.countCards('h')) {
                                                            return 0;
                                                        }
                                                        return 1;
                                                    } else {
                                                        if (num5 == 0 || target.countCards('h') < player.countCards('h') || get.attitude(player, target) > 0) return 0;
                                                        return -target.countCards('h');
                                                    }
                                                }
                                            }
                                            return 0;
                                        } else {
                                            //一般情况
                                            if (num55 > 0) {
                                                //存在大冤种
                                                if (num5 == 0 || target.countCards('h') < player.countCards('h') || get.attitude(player, target) > 0) return 0;
                                                return -target.countCards('h');
                                            } else {
                                                if (num44 > 0) {
                                                    //优先补给少牌队友
                                                    if (target.countCards('h') + 2 < player.countCards('h') && get.attitude(player, target) > 0) return 5;
                                                    if (get.attitude(player, target) <= 0 || target.countCards('h') > player.countCards('h')) return 0;
                                                    return 1;
                                                } else {
                                                    var num55 = game.countPlayer(function (current) {
                                                        return get.attitude(player, current) <= 0 && current.countCards('h') > player.countCards('h');
                                                    });
                                                    var num44 = game.countPlayer(function (current) {
                                                        return get.attitude(player, current) > 0 && current.countCards('h') < player.countCards('h');
                                                    });
                                                    if (num55 > 0 && num44 > 0) {
                                                        return -target.countCards('h');
                                                    } else {
                                                        if (num55 == 0 && num44 >= 1) {
                                                            if ((target.hp <= 1 || target.countCards('h') <= 1) && target.countCards('h') + 2 < player.countCards('h') && get.attitude(player, target) > 0) {
                                                                return 11;
                                                            }
                                                            return 1;
                                                        } else {
                                                            if (num55 == 0 || (target.countCards('h') < player.countCards('h') && get.attitude(player, target) <= 0) || get.attitude(player, target) > 0) return 0;
                                                            return -target.countCards('h');
                                                        }
                                                        return 0;
                                                    }
                                                    return 0;
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmzhiyiwuxia: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 50 && !player.hasSkill('zmzhiyiwuxia_1');
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                game.playzm5(['zmshiyuanzhilvzhe11', 'zmshiyuanzhilvzhe12'].randomGet());
                                game.mp425('zmshiyuanzhilvzhe1');
                                player.addSkill('zmzhiyiwuxia_1');
                                player.addSkill('zmzhiyiwuxia_2');
                                player.storage.zmzhiyiwuxia_1 = 0;
                                ui.background.setBackgroundImage('extension/综漫季刊伍/背景始源之律者.png');
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmzhiyiwuxia_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '致',
                                    intro: {
                                        content(storage) {
                                            return `已发动${storage}/3次`;
                                        },
                                    },
                                    trigger: {
                                        global: ['gainAfter', 'loseAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.countCards('h') == player.countCards('h');
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhiyiwuxia_1 += 1;
                                        player.markSkill('zmzhiyiwuxia_1');
                                        player.chooseControl('回复体力', '失去体力').set('prompt', `请选择令${get.translation(trigger.player)}回复一点体力或失去一点体力`).ai = function (event, player) {
                                            if (get.attitude(player, trigger.player) > 0) return '回复体力';
                                            return '失去体力';
                                        };
                                        ('step 1');
                                        if (result.control == '回复体力') {
                                            if (_status.currentPhase != player && player.storage.zmzhiyiwuxia_1 < 3 && trigger.player.isDamaged()) {
                                                game.playzm5(['zmzhiyiwuxia21', 'zmzhiyiwuxia22', 'zmzhiyiwuxia23', 'zmzhiyiwuxia24', 'zmzhiyiwuxia25'].randomGet());
                                            }
                                            player.line(trigger.player, { color: [255, 221, 238] });
                                            trigger.player.recover();
                                        }
                                        if (result.control == '失去体力') {
                                            if (_status.currentPhase != player && player.storage.zmzhiyiwuxia_1 < 3) {
                                                game.playzm5(['zmzhiyiwuxia21', 'zmzhiyiwuxia22', 'zmzhiyiwuxia23', 'zmzhiyiwuxia24'].randomGet());
                                            }
                                            player.line(trigger.player, { color: [255, 221, 238] });
                                            trigger.player.loseHp();
                                        }
                                        ('step 2');
                                        if (player.storage.zmzhiyiwuxia_1 >= 3) {
                                            game.playzm5(['zmshiyuanzhilvzhe21', 'zmshiyuanzhilvzhe22'].randomGet());
                                            game.mp425('zmshiyuanzhilvzhe2');
                                            game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                            player.storage.zmzhiyiwuxia_1 = 0;
                                            player.removeSkill('zmzhiyiwuxia_1');
                                            player.removeSkill('zmzhiyiwuxia_2');
                                            //player.gainMaxHp();
                                            player.storage.zmt_np = 0;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['phaseJieshuBefore', 'phaseDiscardBefore', 'phaseUseBefore', 'phaseDrawBefore', 'phaseJudgeBefore', 'phaseZhunbeiBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.countCards('h') < event.player.maxHp;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.draw();
                                        if (_status.event.getParent('phaseZhunbei').name == 'phaseZhunbei') {
                                            event.name = 'phaseZhunbei';
                                        }
                                        if (_status.event.getParent('phaseJudge').name == 'phaseJudge') {
                                            event.name = 'phaseJudge';
                                        }
                                        if (_status.event.getParent('phaseDraw').name == 'phaseDraw') {
                                            event.name = 'phaseDraw';
                                        }
                                        if (_status.event.getParent('phaseUse').name == 'phaseUse') {
                                            event.name = 'phaseUse';
                                        }
                                        if (_status.event.getParent('phaseDiscard').name == 'phaseDiscard') {
                                            event.name = 'phaseDiscard';
                                        }
                                        if (_status.event.getParent('phaseJieshu').name == 'phaseJieshu') {
                                            event.name = 'phaseJieshu';
                                        }
                                        if (event.name == 'phaseZhunbei') {
                                            var evt = _status.event.getParent('phaseZhunbei');
                                            if (evt && evt.name == 'phaseZhunbei') {
                                                evt.skipped = true;
                                            }
                                        }
                                        if (event.name == 'phaseJudge') {
                                            var evt = _status.event.getParent('phaseJudge');
                                            if (evt && evt.name == 'phaseJudge') {
                                                evt.skipped = true;
                                            }
                                        }
                                        if (event.name == 'phaseDraw') {
                                            var evt = _status.event.getParent('phaseDraw');
                                            if (evt && evt.name == 'phaseDraw') {
                                                evt.skipped = true;
                                            }
                                        }
                                        if (event.name == 'phaseUse') {
                                            var evt = _status.event.getParent('phaseUse');
                                            if (evt && evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                            }
                                        }
                                        if (event.name == 'phaseDiscard') {
                                            var evt = _status.event.getParent('phaseDiscard');
                                            if (evt && evt.name == 'phaseDiscard') {
                                                evt.skipped = true;
                                            }
                                        }
                                        if (event.name == 'phaseJieshu') {
                                            var evt = _status.event.getParent('phaseJieshu');
                                            if (evt && evt.name == 'phaseJieshu') {
                                                evt.skipped = true;
                                            }
                                        }
                                        //   trigger.untrigger();
                                        //trigger.finish();
                                    },
                                },
                            },
                        },
                        zmxuguangcanji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmguochongchaobian && player.storage.zmguochongchaobian == true) return false;
                                if (player.storage.zmt_np < 20) return false;
                                if (!player.getCards('h', { type: 'basic' }) && !player.getCards('h', { type: 'trick' }) && !player.getCards('h', { type: 'delay' })) return false;
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                var next = player.chooseCardButton('选择一张基本牌或锦囊牌进行记录/替换已有的记录', player, player.getCards('h'), true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                next.filterButton = function (button) {
                                    return get.type(button.link) == 'trick' || get.type(button.link) == 'basic' || get.type(button.link) == 'delay';
                                };
                                ('step 1');
                                player.gainMaxHp();
                                if (result.links?.length) {
                                    //  var value0=get.value(result.links[0]);
                                    var value1 = 0;
                                    var value2 = 0;
                                    var value3 = 0;
                                    if (player.storage.zmxuguangcanji_1.length) {
                                        value1 = get.value(player.storage.zmxuguangcanji_1[0]);
                                    }
                                    if (player.storage.zmxuguangcanji_2.length) {
                                        value2 = get.value(player.storage.zmxuguangcanji_2[0]);
                                    }
                                    if (player.storage.zmxuguangcanji_3.length) {
                                        value3 = get.value(player.storage.zmxuguangcanji_3[0]);
                                    }
                                    event.card = result.links[0];
                                    var strJ = '空置';
                                    if (player.storage.zmxuguangcanji_1.length) {
                                        strJ = '已记录' + get.translation(player.storage.zmxuguangcanji_1[0]);
                                    }
                                    var strQ = '空置';
                                    if (player.storage.zmxuguangcanji_2.length) {
                                        strQ = '已记录' + get.translation(player.storage.zmxuguangcanji_2[0]);
                                    }
                                    var strK = '空置';
                                    if (player.storage.zmxuguangcanji_3.length) {
                                        strK = '已记录' + get.translation(player.storage.zmxuguangcanji_3[0]);
                                    }
                                    player
                                        .chooseControl('记录栏J', '记录栏Q', '记录栏K')
                                        .set('prompt', `选择记录${get.translation(event.card)}的栏位`)
                                        .set('choiceList', ['栏位J状态:' + strJ, '栏位Q状态:' + strQ, '栏位K状态:' + strK]).ai = function (event, player) {
                                            if (player.storage.zmxuguangcanji_1.length == 0) return '记录栏J';
                                            if (player.storage.zmxuguangcanji_2.length == 0) return '记录栏Q';
                                            if (player.storage.zmxuguangcanji_3.length == 0) return '记录栏K';
                                            if (value1 < value2 && value1 < value3) return '记录栏J';
                                            if (value2 < value1 && value2 < value3) return '记录栏Q';
                                            if (value3 < value1 && value3 < value2) return '记录栏K';
                                            return '记录栏J';
                                        };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '记录栏J') {
                                    if (player.storage.zmxuguangcanji_1.length) {
                                        player.storage.zmxuguangcanji_1 = [];
                                        player.storage.zmxuguangcanji_1.push(event.card);
                                    } else {
                                        player.storage.zmxuguangcanji_1.push(event.card);
                                    }
                                    player.markSkill('zmxuguangcanji_1');
                                }
                                if (result.control == '记录栏Q') {
                                    if (player.storage.zmxuguangcanji_2.length) {
                                        player.storage.zmxuguangcanji_2 = [];
                                        player.storage.zmxuguangcanji_2.push(event.card);
                                    } else {
                                        player.storage.zmxuguangcanji_2.push(event.card);
                                    }
                                    player.markSkill('zmxuguangcanji_2');
                                }
                                if (result.control == '记录栏K') {
                                    if (player.storage.zmxuguangcanji_3.length) {
                                        player.storage.zmxuguangcanji_3 = [];
                                        player.storage.zmxuguangcanji_3.push(event.card);
                                    } else {
                                        player.storage.zmxuguangcanji_3.push(event.card);
                                    }
                                    player.markSkill('zmxuguangcanji_3');
                                }
                                ('step 3');
                                var num = player.storage.zmxuguangcanji_3.length + player.storage.zmxuguangcanji_2.length + player.storage.zmxuguangcanji_1.length;
                                player.draw(num);
                            },
                            ai: {
                                threaten: 2.2,
                                order: 13,
                                result: {
                                    player(player) {
                                        var value1 = 0;
                                        var value2 = 0;
                                        var value3 = 0;
                                        if (player.storage.zmxuguangcanji_1.length) {
                                            value1 = get.value(player.storage.zmxuguangcanji_1[0]);
                                        }
                                        if (player.storage.zmxuguangcanji_2.length) {
                                            value2 = get.value(player.storage.zmxuguangcanji_2[0]);
                                        }
                                        if (player.storage.zmxuguangcanji_3.length) {
                                            value3 = get.value(player.storage.zmxuguangcanji_3[0]);
                                        }
                                        var num = 0;
                                        var cards1 = player.getCards('h');
                                        for (var i = 0; i < cards1.length; i++) {
                                            if (get.value(cards1[i]) > num) num = get.value(cards1[i]);
                                        }
                                        if (num <= 2) return 0;
                                        var num2 = (value1 + value2 + value3) / 3;
                                        if (value1 > 0 && value2 > 0 && value3 > 0 && player.hp > 1 && player.storage.zmt_np < 30 && num <= num2) return 0;
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmxuguangcanji_1', 'zmxuguangcanji_2', 'zmxuguangcanji_3', 'zmtleiren'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardname(card, player) {
                                            var name1 = 'shan';
                                            if (player.storage.zmxuguangcanji_1.length) {
                                                name1 = player.storage.zmxuguangcanji_1[0].name;
                                            }
                                            if (card.number == 11 && player.storage.zmxuguangcanji_1.length) {
                                                return name1;
                                            }
                                        },
                                    },
                                    mark: true,
                                    marktext: 'J',
                                    init(player) {
                                        player.storage.zmxuguangcanji_1 = [];
                                    },
                                    intro: {
                                        content: 'cards',
                                    },
                                },
                                2: {
                                    mod: {
                                        cardname(card, player) {
                                            var name2 = 'shan';
                                            if (player.storage.zmxuguangcanji_2.length) {
                                                name2 = player.storage.zmxuguangcanji_2[0].name;
                                            }
                                            if (card.number == 12 && player.storage.zmxuguangcanji_2.length) {
                                                return name2;
                                            }
                                        },
                                    },
                                    mark: true,
                                    marktext: 'Q',
                                    init(player) {
                                        player.storage.zmxuguangcanji_2 = [];
                                    },
                                    intro: {
                                        content: 'cards',
                                    },
                                },
                                3: {
                                    mod: {
                                        cardname(card, player) {
                                            var name3 = 'shan';
                                            if (player.storage.zmxuguangcanji_3.length) {
                                                name3 = player.storage.zmxuguangcanji_3[0].name;
                                            }
                                            if (card.number == 13 && player.storage.zmxuguangcanji_3.length) {
                                                return name3;
                                            }
                                        },
                                    },
                                    mark: true,
                                    marktext: 'K',
                                    init(player) {
                                        player.storage.zmxuguangcanji_3 = [];
                                    },
                                    intro: {
                                        content: 'cards',
                                    },
                                },
                            },
                        },
                        zmguochongchaobian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            juexingji: true,
                            init(player) {
                                player.storage.zmguochongchaobian = false;
                            },
                            filter(event, player) {
                                return player.storage.zmguochongchaobian == false;
                            },
                            content() {
                                'step 0';
                                game.playzm5('zmkesimo');
                                game.mp425('zmkesimo');
                                setTimeout(function () {
                                    if (player.name == 'zm_10kuangkesimo' || player.name1 == 'zm_10kuangkesimo') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身科斯魔.png');
                                    } else if (player.name2 == 'zm_10kuangkesimo') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身科斯魔.png');
                                    }
                                }, 5800);
                                ('step 1');
                                player.storage.zmguochongchaobian = true;
                                player.awakenSkill('zmguochongchaobian');
                                player.addSkill('zmguochongchaobian_1');
                                player.recover(player.maxHp);
                            },
                        },
                        zmaomie: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmaomie = 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                'step 0';
                                event.card = game.createCard('shandian');
                                ('step 1');
                                player.popup(event.card.name, 'thunder');
                                ('step 2');
                                if (!event.cancelled) player.judge(event.card);
                                ('step 3');
                                event.card.expired = true;
                                var name = event.card.name;
                                if (trigger.cancelled && !trigger.direct) {
                                    if (lib.card[name].cancel) {
                                        var next = game.createEvent(name + 'Cancelled');
                                        next.setContent(lib.card[name].cancel);
                                        next.card = event.card;
                                        next.player = player;
                                    }
                                } else {
                                    var next = game.createEvent(name);
                                    next.setContent(lib.card[name].effect);
                                    next._result = result;
                                    next.card = event.card;
                                    next.player = player;
                                }
                                ui.clear();
                                ('step 4');
                                if (event.card) event.card.delete();
                                ('step 5');
                                trigger.num = player.storage.zmaomie + 1;
                            },
                            ai: {
                                threaten: 2.1,
                            },
                            group: ['zmaomie_1', 'zmaomie_2', 'zmaomie_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > player.storage.zmaomie;
                                    },
                                    content() {
                                        player.storage.zmaomie = trigger.num;
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmaomie_2 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseZhunbeiAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('h') > player.storage.zmaomie_2;
                                    },
                                    content() {
                                        player.storage.zmaomie_2 = player.countCards('h');
                                    },
                                },
                                3: {
                                    audio: 'ext:综漫季刊伍/audio:5',
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmfeitian && player.storage.zmfeitian == true;
                                    },
                                    content() {
                                        'step 0';
                                        event.card = game.createCard('shandian');
                                        ('step 1');
                                        player.popup(event.card.name, 'thunder');
                                        ('step 2');
                                        if (!event.cancelled) player.judge(event.card);
                                        ('step 3');
                                        event.card.expired = true;
                                        var name = event.card.name;
                                        if (trigger.cancelled && !trigger.direct) {
                                            if (lib.card[name].cancel) {
                                                var next = game.createEvent(name + 'Cancelled');
                                                next.setContent(lib.card[name].cancel);
                                                next.card = event.card;
                                                next.player = player;
                                            }
                                        } else {
                                            var next = game.createEvent(name);
                                            next.setContent(lib.card[name].effect);
                                            next._result = result;
                                            next.card = event.card;
                                            next.player = player;
                                        }
                                        ui.clear();
                                        ('step 4');
                                        if (event.card) event.card.delete();
                                        ('step 5');
                                        if (player.countCards('h') <= player.storage.zmaomie_2) {
                                            var num = player.storage.zmaomie_2 - player.countCards('h');
                                            player.draw(num + 1);
                                        } else {
                                            player.storage.zmaomie_2 = player.countCards('h');
                                            player.draw();
                                        }
                                    },
                                },
                            },
                        },
                        zmfeitian: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:2',
                            trigger: {
                                player: ['damageAfter'],
                            },
                            juexingji: true,
                            forced: true,
                            init(player) {
                                player.storage.zmfeitian = false;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return player.isAlive() && player.storage.zmfeitian == false;
                            },
                            content() {
                                player.storage.zmt_np = 0;
                                game.playzm5('zmqianjie');
                                game.mp425('zmqianjie');
                                setTimeout(function () {
                                    if (player.name == 'zm_10kuangqianjie' || player.name1 == 'zm_10kuangqianjie') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身千劫.png');
                                    } else if (player.name2 == 'zm_10kuangqianjie') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身千劫.png');
                                    }
                                }, 6000);
                                player.storage.zmfeitian = true;
                                player.awakenSkill('zmfeitian');
                            },
                            ai: {
                                combo: 'zmaomie',
                            },
                        },
                        zmyinguozhuanlun: {
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var list = player.getExpansions('zmyinguozhuanlun');
                                var suits = [];
                                for (var i = 0; i < list.length; i++) {
                                    suits.add(list[i].suit);
                                }
                                return player.hasCard(function (card) {
                                    return !suits.includes(card.suit);
                                });
                            },
                            mark: true,
                            marktext: '轮',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            position: 'he',
                            filterCard(card, player) {
                                var list = player.getExpansions('zmyinguozhuanlun');
                                var suits = [];
                                for (var i = 0; i < list.length; i++) {
                                    suits.add(list[i].suit);
                                }
                                return !suits.includes(card.suit);
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            discard: false,
                            prepare(cards, player) {
                                player.$give(1, player, false);
                            },
                            content() {
                                if (!player.hasSkill('zmyinguozhuanlun_temp')) {
                                    game.playzm5(['zmyinguozhuanlun1', 'zmyinguozhuanlun2', 'zmyinguozhuanlun3', 'zmyinguozhuanlun4', 'zmyinguozhuanlun5'].randomGet());
                                    player.addTempSkill('zmyinguozhuanlun_temp');
                                }
                                player.addToExpansion(cards[0], player, 'give').gaintag.add('zmyinguozhuanlun');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmyinguozhuanlun_1'],
                            subSkill: {
                                1: {
                                    nobracket: true,
                                    audio: 'ext:综漫季刊伍/audio:3',
                                    trigger: {
                                        global: 'useCardToBegin',
                                    },
                                    check(event, player) {
                                        if (get.attitude(player, event.targets[0]) <= 0) return false;
                                        if (player.hp > 2) {
                                            if (get.attitude(player, event.player) > 0) return false;
                                            return get.tag(event.card, 'damage') || event.card.name == 'tiesuo' || event.card.name == 'shunshou' || event.card.name == 'lebu' || event.card.name == 'bingliang';
                                        } else {
                                            return get.attitude(player, event.player) <= 0;
                                        }
                                    },
                                    prompt(event, player, name) {
                                        var str = '';
                                        var mb = event.targets[0];
                                        str += get.translation(event.player) + `对${get.translation(mb)}使用了${get.translation(event.card)},是否发动【因果转轮】？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        var num = 0;
                                        if (get.itemtype(event.cards) != 'cards') return false;
                                        if (event.card.suit == undefined) return false;
                                        if (!event.targets || event.targets.length != 1) return false;
                                        if (event.card.suit != undefined && player.getExpansions('zmyinguozhuanlun').length > 1) {
                                            var list = player.getExpansions('zmyinguozhuanlun');
                                            for (var i = 0; i < list.length; i++) {
                                                if (get.color(list[i]) == get.color(event.card)) num++;
                                            }
                                        }
                                        return num >= 2 && event.targets[0] != event.player;
                                    },
                                    content() {
                                        'step 0';
                                        var num = 2;
                                        var list = player.getExpansions('zmyinguozhuanlun');
                                        for (var i = 0; i < list.length; i++) {
                                            if (get.color(list[i]) == get.color(trigger.card) && num > 0) {
                                                num--;
                                                var card = list[i];
                                                player.loseToDiscardpile(card);
                                            }
                                        }
                                        ('step 1');
                                        player.line(trigger.player, 'fire');
                                        trigger.target = trigger.player;
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmtianhui: {
                            group: ['zmtianhui_2'],
                            nobracket: true,
                            trigger: {
                                global: ['phaseBefore'],
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmtianhui = 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                // return event.player!=player;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmtianhui_2 = 0;
                                player
                                    .chooseControl(['heart', 'spade', 'club', 'diamond', '取消'])
                                    .set('prompt', '是否暗中指定一种花色？')
                                    .set('ai', function () {
                                        if (player.hp <= 2) {
                                            if ((trigger.player.countCards('h') <= 1 && trigger.player.hasJudge('bingliang')) || trigger.player.hasJudge('lebu')) return '取消';
                                        } else {
                                            if (player.countCards('h') > 1 && player.storage.zmt_np < 20 && trigger.player.countCards('h') < 4) return '取消';
                                            if (trigger.player.countCards('h') <= 2 || (trigger.player.hasJudge('bingliang') && trigger.player.countCards('h') <= 3) || trigger.player.hasJudge('lebu')) return '取消';
                                        }
                                        return ['club', 'spade', 'heart', 'diamond'].randomGet();
                                    });
                                ('step 1');
                                if (result.control == 'club') {
                                    player.storage.zmt_np -= 10;
                                    player.storage.zmtianhui = 'club';
                                    player.addTempSkill('zmtianhui_1');
                                }
                                if (result.control == 'spade') {
                                    player.storage.zmt_np -= 10;
                                    player.storage.zmtianhui = 'spade';
                                    player.addTempSkill('zmtianhui_1');
                                }
                                if (result.control == 'heart') {
                                    player.storage.zmt_np -= 10;
                                    player.storage.zmtianhui = 'heart';
                                    player.addTempSkill('zmtianhui_1');
                                }
                                if (result.control == 'diamond') {
                                    player.storage.zmt_np -= 10;
                                    player.storage.zmtianhui = 'diamond';
                                    player.addTempSkill('zmtianhui_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (get.itemtype(event.cards) != 'cards') return false;
                                        return event.card && event.card.suit == player.storage.zmtianhui;
                                    },
                                    content() {
                                        player.storage.zmtianhui_2++;
                                    },
                                },
                                2: {
                                    init(player) {
                                        player.storage.zmtianhui_2 = 0;
                                    },
                                    audio: 'ext:综漫季刊伍/audio:5',
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hasSkill('zmtianhui_1')) return false;
                                        return player.storage.zmtianhui_2 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var num = player.storage.zmtianhui_2;
                                        event.suit = player.storage.zmtianhui;
                                        player.storage.zmtianhui_2 = 0;
                                        player.storage.zmtianhui = 0;
                                        player.draw(num);
                                        ('step 1');
                                        var card = player.getCards('h')[0];
                                        card.init([event.suit, card.number, card.name]);
                                    },
                                },
                            },
                        },
                        zmwanxiangwuming: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (event.player == player) {
                                    var num5 = game.countPlayer(function (current) {
                                        return get.attitude(player, current) <= 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0 && current.countCards('h') > 0;
                                    });
                                    if ((player.countCards('h', { name: 'sha' }) == 0 && !player.hasSkill('zmchanayidao2')) || (player.hasSkill('zmchanayidao2') && player.countCards('h', { name: 'sha' }) == 0)) return false;
                                    if (player.countCards('h', { name: 'shan' }) == 0) return false;
                                    if (num5 == 0) return false;
                                    return true;
                                } else {
                                    var num5 = game.countPlayer(function (current) {
                                        return get.attitude(event.player, current) <= 0 && get.attitude(player, current) <= 0 && event.player.canUse('sha', current) && get.effect(current, { name: 'sha' }, event.player, event.player) > 0;
                                    });
                                    var num55 = game.countPlayer(function (current) {
                                        return get.attitude(event.player, current) <= 0 && get.attitude(player, current) <= 0 && event.player.canUse('sha', current) && get.effect(current, { name: 'sha' }, event.player, event.player) > 0 && current != player && (current.hp == 1 || current.countCards('h') <= 2);
                                    });
                                    if (event.player.countCards('h') < 2) return false;
                                    if (player.countCards('h', { name: 'sha' }) == 0) return false;
                                    //  if(num5==0) return false;
                                    if ((num55 == 0 && player.countCards('h', { name: 'shan' }) >= 1) || (num55 == 0 && player.countCards('h') == player.countCards('h', { name: 'jinchan' }))) return false;
                                    return get.attitude(player, event.player) <= 0;
                                }
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 15 && get.distance(event.player, player, 'attack') <= 1 && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                'step 0';
                                player.storage.zmt_np -= 15;
                                game.playzm5('zmwanxiangwuming0');
                                var players = get.players(player);
                                players.remove(player);
                                event.players = players;
                                ('step 1');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    player.line(current, 'thunder');
                                    current.addTempSkill('zmwanxiangwuming_1');
                                    current.storage.zmwanxiangwuming_1 = player;
                                    event.redo();
                                }
                            },
                            group: ['zmtleiren', 'zmtshikong'],
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player) {
                                            if (player.storage.zmwanxiangwuming_1 != undefined && player.storage.zmwanxiangwuming_1.isAlive()) {
                                                var name1 = card.name;
                                                var mb = player.storage.zmwanxiangwuming_1;
                                                if (mb.countCards('h', { name: name1 }) >= 1) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            if (player.storage.zmwanxiangwuming_1 != undefined && player.storage.zmwanxiangwuming_1.isAlive()) {
                                                var name1 = card.name;
                                                var mb = player.storage.zmwanxiangwuming_1;
                                                if (mb.countCards('h', { name: name1 }) >= 1) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            if (player.storage.zmwanxiangwuming_1 != undefined && player.storage.zmwanxiangwuming_1.isAlive()) {
                                                var name1 = card.name;
                                                var mb = player.storage.zmwanxiangwuming_1;
                                                if (mb.countCards('h', { name: name1 }) >= 1) return false;
                                            }
                                        },
                                        cardEnabled(card, player) {
                                            if (player.storage.zmwanxiangwuming_1 != undefined && player.storage.zmwanxiangwuming_1.isAlive()) {
                                                var name1 = card.name;
                                                var mb = player.storage.zmwanxiangwuming_1;
                                                if (mb.countCards('h', { name: name1 }) >= 1) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmchanayidao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player.canUse('sha', target);
                            },
                            line: 'thunder',
                            content() {
                                player.useCard({ name: 'sha', nature: 'ice' }, target, true);
                            },
                            ai: {
                                threaten: 1.5,
                                order: 1,
                                result: {
                                    player(player) {
                                        var num5 = game.countPlayer(function (current) {
                                            return (get.attitude(player, current) < 0 && current.hasSkill('zmwanxiangwuming_1') && player.countCards('h', { name: 'shan' }) > 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha', nature: 'ice' }, player, player) > 0) || (get.attitude(player, current) < 0 && current.countCards('h') == 0 && get.effect(current, { name: 'sha', nature: 'ice' }, player, player) > 0 && player.canUse('sha', current) && !current.getEquip('bagua'));
                                        });
                                        var num55 = game.countPlayer(function (current) {
                                            return (get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha', nature: 'ice' }, player, player) > 0 && !current.getEquip('bagua')) || (get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha', nature: 'ice' }, player, player) > 0 && current.getEquip('bagua') && current.hp <= 1 && current.countCards('h') <= 1);
                                        });
                                        if (num5 > 0 || (player.getStat().card.sha > 0 && num55 > 0)) return -0.7;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -get.effect(target, { name: 'sha', nature: 'ice' }, player, player);
                                    },
                                },
                            },
                            group: ['zmchanayidao_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'zmchanayidao' || event.getParent(4).name == 'zmchanayidao';
                                    },
                                    content() {
                                        'step 0';
                                        player.addSkill('zmchanayidao2');
                                        player.disableSkill('zmchanayidao2', ['zmchanayidao']);
                                    },
                                },
                            },
                        },
                        zmchanayidao2: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            marktext: '刹',
                            intro: {
                                content: '已累计响应#/2张牌',
                            },
                            init(player) {
                                player.storage.zmchanayidao2 = 0;
                                player.markSkill('zmchanayidao2');
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                player.storage.zmchanayidao2++;
                                ('step 1');
                                if (player.storage.zmchanayidao2 >= 2) {
                                    player.removeSkill('zmchanayidao2');
                                    player.enableSkill('zmchanayidao2', ['zmchanayidao2']);
                                }
                            },
                        },
                        zmfenyinyang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var red = target.countCards('h', { color: 'red' });
                                var black = target.countCards('h', { color: 'black' });
                                if (red == black) {
                                    event.goto(7);
                                }
                                ('step 1');
                                event.list = [];
                                player
                                    .chooseControl('多数', '少数', true, function () {
                                        if (get.attitude(player, target) > 0) return '多数';
                                        return '少数';
                                    })
                                    .set('prompt', `选择令${get.translation(target)}调整手牌的方式`);
                                ('step 2');
                                var red = target.countCards('h', { color: 'red' });
                                var black = target.countCards('h', { color: 'black' });
                                event.num = 0;
                                event.num1 = 0;
                                if (red > black) {
                                    event.num = red - black;
                                } else {
                                    event.num = black - red;
                                }
                                if (result.control == '多数') {
                                    event.list = [];
                                    if (red > black) {
                                        event.goto(3);
                                    } else {
                                        event.goto(5);
                                    }
                                }
                                if (result.control == '少数') {
                                    event.num1 = 1;
                                    if (red > black) {
                                        target
                                            .chooseToDiscard(event.num, 'h', true, function (card) {
                                                return get.color(card) == 'red';
                                            })
                                            .set('ai', function (card) {
                                                return -get.value(card);
                                            });
                                    } else {
                                        target
                                            .chooseToDiscard(event.num, 'h', true, function (card) {
                                                return get.color(card) == 'black';
                                            })
                                            .set('ai', function (card) {
                                                return -get.value(card);
                                            });
                                    }
                                }
                                ('step 3');
                                if (event.num1 == 1) {
                                    event.goto(7);
                                }
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'black' && !event.list.includes(card);
                                });
                                if (card) {
                                    event.list.push(card);
                                }
                                event.num--;
                                ('step 4');
                                if (event.num > 0) {
                                    event.goto(3);
                                } else {
                                    if (event.list.length) {
                                        target.gain(event.list, 'gain2');
                                    }
                                    event.goto(7);
                                }
                                ('step 5');
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'red' && !event.list.includes(card);
                                });
                                if (card) {
                                    event.list.push(card);
                                }
                                event.num--;
                                ('step 6');
                                if (event.num > 0) {
                                    event.goto(5);
                                } else {
                                    if (event.list.length) {
                                        target.gain(event.list, 'gain2');
                                    }
                                }
                                ('step 7');
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                event.finish();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var num0 = 0;
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') > 1;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') >= 1 && current != player;
                                        });
                                        var red0 = player.countCards('h', { color: 'red' });
                                        var black0 = player.countCards('h', { color: 'black' });
                                        if (red0 < black0) {
                                            num0 = black0 - red0;
                                        }
                                        if (red0 > black0) {
                                            num0 = red0 - black0;
                                        }
                                        if (num0 >= 2 && player.getHandcardLimit() > player.countCards('h')) {
                                            if (target != player) return 0;
                                            return 1;
                                        } else {
                                            if (num4 > 0) {
                                                if (target.countCards('h') <= 1) return 0;
                                                return -target.countCards('h');
                                            } else {
                                                if (num5 > 0) {
                                                    if (target == player) return 0;
                                                    return 1;
                                                }
                                                return 0;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmhunliangyi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            trigger: {
                                global: 'discardEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                if (!event.player.isAlive()) return false;
                                if (event.cards.length == 0) return false;
                                if (event.player == player) return false;
                                var num = 0;
                                var red = 0;
                                var black = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        } else {
                                            black++;
                                        }
                                    }
                                return (event.cards && event.cards.length == red) || event.cards.length == black;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                event.list = [];
                                var num = trigger.cards.length;
                                var cards = get.cards(num);
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        event.list.push(i);
                                    }
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        event.list.push(i);
                                    }
                                player.showCards(event.list, '混两仪');
                                ('step 1');
                                var red = 0;
                                var black = 0;
                                for (var i = 0; i < event.list.length; i++) {
                                    if (get.color(event.list[i]) == 'red') {
                                        red++;
                                    } else {
                                        black++;
                                    }
                                }
                                if (red == black && red > 0) {
                                    if (red > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(red);
                                }
                                if (red > black && black == 0) {
                                    game.playzm5('zmhunliangyi0');
                                }
                                if (red > black && black > 0) {
                                    if (black > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(black);
                                }
                                if (red < black && red == 0) {
                                    game.playzm5('zmhunliangyi0');
                                }
                                if (red < black && red > 0) {
                                    if (red > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(red);
                                }
                            },
                        },
                        zmshenggewangluo: {
                            init(player) {
                                player.storage.zmshenggewangluo = [];
                            },
                            audio: 'ext:综漫季刊伍/audio:4',
                            trigger: {
                                player: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player, name) {
                                //if(event.name=='lose'&&event.position!=ui.discardPile) return false;
                                if (get.type(event.cards[0]) == 'equip' && event.type == 'use') return false;
                                if (get.type(event.cards[0]) == 'delay' && event.type == 'use') return false;
                                if (player.storage.zmshenggewangluo.length) return false;
                                return event.type == 'use' && event.cards.length >= 1 && get.position(event.cards[0]) == 'd';
                            },
                            content() {
                                'step 0';
                                if (trigger.cards.length >= 2) {
                                    var num = trigger.cards.length;
                                    var card1 = trigger.cards[num - 1];
                                    var card2 = trigger.cards[num - 2];
                                    if (get.color(card1) == get.color(card2)) {
                                        player.storage.zmshenggewangluo = [];
                                        player.addSkill('zmshenggewangluo_1');
                                        player.storage.zmshenggewangluo.push(card1);
                                        player.storage.zmshenggewangluo.push(card2);
                                    } else player.storage.zmshenggewangluo = [];
                                } else {
                                    var num = ui.discardPile.childNodes.length;
                                    var card1 = ui.discardPile.childNodes[num - 1];
                                    var card2 = trigger.cards[0];
                                    if (card1 != undefined && get.color(card1) == get.color(card2) && card1 != card2) {
                                        player.storage.zmshenggewangluo = [];
                                        player.addSkill('zmshenggewangluo_1');
                                        player.storage.zmshenggewangluo.push(card1);
                                        player.storage.zmshenggewangluo.push(card2);
                                    } else player.storage.zmshenggewangluo = [];
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['loseAfter', 'cardsDiscardAfter', 'judgeAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name != 'judgeAfter') {
                                            if (player.storage.zmshenggewangluo && player.storage.zmshenggewangluo[1] == event.cards[0]) return false;
                                            if (event.name == 'lose' && event.position != ui.discardPile) return false;
                                            return event.cards && event.cards.length && get.position(event.cards[0]) == 'd';
                                        } else {
                                            return event.result.card != undefined;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername != 'judgeAfter') {
                                            var list = [];
                                            var num1 = 0;
                                            var num2 = trigger.cards.length;
                                            var num3 = player.storage.zmshenggewangluo.length - 1;
                                            event.card1 = player.storage.zmshenggewangluo[num3];
                                            for (var i = 0; i < player.storage.zmshenggewangluo.length; i++) {
                                                list.push(player.storage.zmshenggewangluo[i]);
                                                if (get.color(player.storage.zmshenggewangluo[i]) != get.color(trigger.cards[0])) {
                                                    num1++;
                                                }
                                            }
                                            if (num1 > 0) {
                                                player.storage.zmshenggewangluo = [];
                                                player.removeSkill('zmshenggewangluo_1');
                                                event.finish();
                                            } else {
                                                player.removeSkill('zmshenggewangluo_1');
                                                list.push(trigger.cards[0]);
                                                player.storage.zmshenggewangluo = [];
                                                if (trigger.player == player && trigger.type == 'use') {
                                                    player.storage.zmshenggewangluo.push(trigger.cards[0]);
                                                    player.storage.zmshenggewangluo.push(event.card1);
                                                }
                                                var next = player.chooseButton(['可视为使用其中一张牌', list]);
                                                next.set('ai', function (button) {
                                                    return player.getUseValue(button.link.name);
                                                });
                                                next.filterButton = function (button) {
                                                    var num4 = game.countPlayer(function (current) {
                                                        return player.canUse({ name: button.link.name }, current);
                                                    });
                                                    if (get.type(button.link) == 'equip') return false;
                                                    if (get.type(button.link) == 'delay') return false;
                                                    return num4 > 0;
                                                };
                                            }
                                        } else {
                                            //判定牌预读
                                            var list = [];
                                            var num1 = 0;
                                            for (var i = 0; i < player.storage.zmshenggewangluo.length; i++) {
                                                list.push(player.storage.zmshenggewangluo[i]);
                                                if (get.color(player.storage.zmshenggewangluo[i]) != get.color(trigger.result.card)) {
                                                    num1++;
                                                }
                                            }
                                            if (num1 > 0) {
                                                player.storage.zmshenggewangluo = [];
                                                player.removeSkill('zmshenggewangluo_1');
                                                event.finish();
                                            } else {
                                                player.removeSkill('zmshenggewangluo_1');
                                                list.push(trigger.result.card);
                                                player.storage.zmshenggewangluo = [];
                                                var next = player.chooseButton(['可视为使用其中一张牌', list]);
                                                next.set('ai', function (button) {
                                                    return player.getUseValue(button.link.name);
                                                });
                                                next.filterButton = function (button) {
                                                    if (get.type(button.link) == 'equip') return false;
                                                    if (get.type(button.link) == 'delay') return false;
                                                    var num4 = game.countPlayer(function (current) {
                                                        return player.canUse({ name: button.link.name }, current);
                                                    });
                                                    return num4 > 0;
                                                };
                                            }
                                        }
                                        ('step 1');
                                        if (result.links?.length) {
                                            if (get.type(result.links[0]) == 'basic') {
                                                player.chooseUseTarget({ name: result.links[0].name }, false);
                                            } else {
                                                player.chooseUseTarget({ name: result.links[0].name, nature: result.links[0].nature }, false);
                                            }
                                        } else event.finish();
                                    },
                                },
                            },
                        },
                        zmyinmianhuiguan: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'fire',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                if (target.countCards('h') <= player.countCards('h') && target.countCards('h') > 0) return true;
                                return false;
                            },
                            content() {
                                if (player.storage.zmt_np < 30) {
                                    game.playzm5(['zmyinmianhuiguan1', 'zmyinmianhuiguan2', 'zmyinmianhuiguan3', 'zmyinmianhuiguan4', 'zmyinmianhuiguan5'].randomGet());
                                    var card = target.getCards('h');
                                    target.useCard({ name: 'wuzhong' }, card, target);
                                } else {
                                    player.storage.zmt_np = 0;
                                    game.playzm5('zmluna');
                                    var t = Math.random();
                                    if (t <= 0.5) {
                                        game.mp425('zmluna1');
                                    } else {
                                        game.mp425('zmluna2');
                                    }
                                    var card = target.getCards('h');
                                    target.useCard({ name: 'wuzhong' }, card, player);
                                }
                            },
                            ai: {
                                threaten: 1.3,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var num;
                                        num = target.countCards('h');
                                        if (player.storage.zmt_np < 30) {
                                            var num5 = game.countPlayer(function (current) {
                                                return (get.attitude(player, current) <= 0 && current.hp <= 1 && current.countCards('h') >= 2) || (get.attitude(player, current) <= 0 && current.hp >= 2 && current.countCards('h') >= 3);
                                            });
                                            if (num5 > 0) {
                                                if ((num == 1 && target.hp <= 1) || (num < 3 && target.hp >= 2)) return 0;
                                                return -num;
                                            } else {
                                                var cards = player.getCards('he');
                                                var num0 = 0;
                                                if (Array.isArray(cards))
                                                    for (var i of cards) {
                                                        num0 += get.value(i);
                                                    }
                                                var card = { name: 'wuzhong' };
                                                if (target == player && num0 < get.value(card)) return 1;
                                                return 0;
                                            }
                                        } else {
                                            return -num;
                                        }
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
                                for (var i = 0; i < hs.length; i++) {
                                    if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                }
                                return num > 0;
                            },
                            precontent() {
                                'step 0';
                                if (!player.hasSkill('zmjiye2')) {
                                    game.playzm5(['zmyingshou11', 'zmyingshou12', 'zmyingshou13', 'zmyingshou14'].randomGet());
                                } else {
                                    game.playzm5(['zmyingshou31', 'zmyingshou32', 'zmyingshou33'].randomGet());
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
                                    for (var i = 0; i < hs.length; i++) {
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
                            group: ['zmyingshou_1', 'zmyingshou_2', 'zmtrenxing'],
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
                                        for (var i = 0; i < hs.length; i++) {
                                            if (!player.storage.zmyingshou.includes(get.type(hs[i], 'trick'))) num++;
                                        }
                                        return num > 0;
                                    },
                                    precontent() {
                                        'step 0';
                                        if (!player.hasSkill('zmjiye2')) {
                                            game.playzm5(['zmyingshou21', 'zmyingshou22', 'zmyingshou23', 'zmyingshou24', 'zmyingshou25', 'zmyingshou26', 'zmyingshou27', 'zmyingshou28'].randomGet());
                                        } else {
                                            game.playzm5(['zmyingshou41', 'zmyingshou42', 'zmyingshou43'].randomGet());
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
                                            for (var i = 0; i < hs.length; i++) {
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
                                    audio: 'ext:综漫季刊伍/audio:3',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        event.num = 0;
                                        var list = player.getExpansions('zmjiye2');
                                        for (var i = 0; i < list.length; i++) {
                                            event.card = list[i];
                                            event.num += list[i].number;
                                        }
                                        if (player.storage.zmt_np < 20) return false;
                                        return player.hasSkill('zmjiye2') && player.getExpansions('zmjiye2').length == 1 && event.num > 1;
                                    },
                                    content() {
                                        'step 0';
                                        var list = player.getExpansions('zmjiye2');
                                        event.num = 0;
                                        for (var i = 0; i < list.length; i++) {
                                            event.card = list[i];
                                            event.num += list[i].number;
                                        }
                                        ('step 1');
                                        if (event.num > 0) {
                                            player
                                                .chooseTarget([1, 1], `可选择一名其他角色令其弃置点数小于${event.num}的牌`, function (card, player, target) {
                                                    return target != player && target.countCards('he') > 0;
                                                })
                                                .set('ai', function (target) {
                                                    var num = target.countCards('he');
                                                    if (target.countCards('h') == 0) return 0;
                                                    return -get.attitude(_status.event.player, target) * num;
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            player.storage.zmt_np -= 20;
                                            player.line(result.targets, 'fire');
                                            event.target = result.targets[0];
                                            var num0 = event.card.number - 1;
                                            event.card.init([event.card.suit, num0, event.card.name]);
                                        }
                                        ('step 3');
                                        if (result.bool) {
                                            var list = [];
                                            var hs = event.target.getCards('he');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (hs[i].number < event.num) {
                                                    list.push(hs[i]);
                                                }
                                            }
                                            if (list.length) {
                                                if (list.length > 1) {
                                                    game.mp425('zmxidekagainuo1');
                                                }
                                                event.target.discard(list);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmjiye: {
                            dutySkill: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.hasSkill('zmjiye2') && player.getExpansions('zmjiye2').length) return false;
                                if (player.countCards('h') == 0) return false;
                                var num1 = 0;
                                event.num = 0;
                                var hss = player.getCards('h');
                                for (var i = 0; i < hss.length; i++) {
                                    if (hss[i].number > event.num) {
                                        event.num = hss[i].number;
                                        event.card = hss[i];
                                    }
                                }
                                if (event.num <= game.roundNumber) return false;
                                game.filterPlayer(function (current) {
                                    if (current.countCards('h') > 0) {
                                        var hs = current.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= event.num && hs[i] != event.card) num1++;
                                        }
                                    }
                                });
                                return num1 == 0;
                            },
                            position: 'h',
                            filterCard(card, player) {
                                var num = card.number;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].number >= num && hs[i] != card) return false;
                                }
                                return card.number > game.roundNumber;
                            },
                            check(card) {
                                return 999;
                            },
                            discard: false,
                            usable: 1,
                            content() {
                                'step 0';
                                var t = Math.random();
                                if (t <= 0.6) {
                                    event.tt = 1;
                                    game.playzm5('zmxidekagainuo3');
                                    game.mp425('zmxidekagainuo3');
                                } else {
                                    event.tt = 2;
                                    setTimeout(function () {
                                        game.playzm5('zmjiye0');
                                    }, 660);
                                }
                                if (!player.hasSkill('zmjiye2')) {
                                    player.addSkill('zmjiye2');
                                }
                                ('step 1');
                                if (event.tt == 2) {
                                    game.mp425('zmxidekagainuo2');
                                }
                                ('step 2');
                                if (event.tt == 2) {
                                }
                                player.addToExpansion(cards[0], player, 'give').gaintag.add('zmjiye2');
                                ('step 3');
                                if (event.tt == 2) {
                                    if (player.name == 'zm_08shaxidekagainuo' || player.name1 == 'zm_08shaxidekagainuo') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/image/变身暗影.jpg');
                                    } else if (player.name2 == 'm_08shaxidekagainuo') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/image/变身暗影.jpg');
                                    }
                                } else {
                                    if (player.name == 'zm_08shaxidekagainuo' || player.name1 == 'zm_08shaxidekagainuo') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/image/变身暗影2.jpg');
                                    } else if (player.name2 == 'm_08shaxidekagainuo') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/image/变身暗影2.jpg');
                                    }
                                }
                                ('step 4');
                                player.recover(player.maxHp);
                                game.log(player, '成功完成使命');
                                player.awakenSkill('zmjiye');
                                player.addSkillLog('zmjiye');
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
                                        player.loseHp(player.hp);
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
                        zmdizuizhiqiang: {
                            group: ['zmtrenxing', 'zmtjixie', 'zmdizuizhiqiang_1'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmdizuizhiqiang = false;
                            },
                            content() {
                                'step 0';
                                var num = Math.floor(player.storage.zmt_np / 15);
                                if (player.storage.zmdizuizhiqiang == true) {
                                    player
                                        .chooseControl('关闭', '取消', function () {
                                            if ((player.hp <= 2 && num >= 2) || num >= 3) return '关闭';
                                            return '取消';
                                        })
                                        .set('prompt', `是否关闭【涤罪之枪】并摸${num}张牌？`);
                                } else {
                                    player
                                        .chooseControl('激活', '取消', function () {
                                            if (num >= 2) return '激活';
                                            return '取消';
                                        })
                                        .set('prompt', `是否激活【涤罪之枪】并摸${num}张牌？`);
                                }
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '关闭') {
                                    player.storage.zmdizuizhiqiang = false;
                                    var num = Math.floor(player.storage.zmt_np / 15);
                                    player.draw(num);
                                    player.storage.zmt_np = 0;
                                }
                                if (result.control == '激活') {
                                    player.storage.zmdizuizhiqiang = true;
                                    var num = Math.floor(player.storage.zmt_np / 15);
                                    player.draw(num);
                                    player.storage.zmt_np = 0;
                                }
                            },
                            subSkill: {
                                1: {
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = 0;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.tag(i, 'damage')) num++;
                                            }
                                        return player.storage.zmdizuizhiqiang == true && num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (get.tag(i, 'damage')) {
                                                    player.addToExpansion(i).gaintag.add('zmdizuizhiqiang_1');
                                                }
                                            }
                                        ('step 1');
                                        if (player.getExpansions('zmdizuizhiqiang_1').length > 1) {
                                            var num = Math.floor(player.getExpansions('zmdizuizhiqiang_1').length / 2);
                                            player
                                                .chooseTarget(1, `是否移除以【涤罪之枪】放置的牌对一名角色造成${num}点伤害？`, function (card, player, target) {
                                                    return true;
                                                })
                                                .set('ai', function (target) {
                                                    if (num < 2 && player.hp > 1) return 0;
                                                    if (player.getExpansions('zmdizuizhiqiang_1').length % 2 != 0 && player.hp > 1) return 0;
                                                    return get.damageEffect(target, player, player);
                                                });
                                        } else event.finish();
                                        ('step 2');
                                        if (result.bool) {
                                            var num = Math.floor(player.getExpansions('zmdizuizhiqiang_1').length / 2);
                                            var target = result.targets[0];
                                            var cards = player.getExpansions('zmdizuizhiqiang_1');
                                            if (num <= 1) {
                                                game.playzm5('zmluosaita2');
                                            } else {
                                                game.playzm5('zmluosaita1');
                                                game.mp425('zmluosaita');
                                            }
                                            player.loseToDiscardpile(cards);
                                            player.line(target, 'thunder');
                                            target.damage(num);
                                        }
                                    },
                                },
                            },
                        },
                        zmlinliezhixin: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            enable: 'phaseUse',
                            selectCard: 1,
                            position: 'h',
                            filterCard(card, player) {
                                if (!player.storage.zmlinliezhixin) {
                                    return true;
                                }
                                return !player.storage.zmlinliezhixin.includes(card.suit);
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (player.hp < player.maxHp && player.storage.zmlinliezhixin && player.storage.zmlinliezhixin.length >= 2) {
                                    return 8 - get.value(card);
                                }
                                return 5 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                if (!player.storage.zmlinliezhixin) {
                                    player.storage.zmlinliezhixin = [];
                                    player.addTempSkill('zmlinliezhixin_end');
                                }
                                player.storage.zmlinliezhixin.push(cards[0].suit);
                                player.lose(cards);
                                player.$throw(cards);
                                game.log(player, '重铸了', cards);
                                ('step 1');
                                player.draw();
                                ('step 2');
                                if (player.storage.zmlinliezhixin.length >= 4) {
                                    player.recover();
                                }
                            },
                            subSkill: {
                                end: {
                                    onremove(player) {
                                        delete player.storage.zmlinliezhixin;
                                    },
                                },
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmshehuitouxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmshehuitouxi_1 = 0;
                                player.storage.zmshehuitouxi_2 = 0;
                                player.storage.zmshehuitouxi_3 = 0;
                                player.storage.zmshehuitouxi_4 = 0;
                            },
                            filter(event, player) {
                                if (ui.discardPile.childNodes.length == 0) return false;
                                var num = ui.discardPile.childNodes.length;
                                var card = ui.discardPile.childNodes[num - 1];
                                if (card == undefined) return false;
                                return (player.storage.zmshehuitouxi_1 >= 2 && card.suit == 'spade') || (player.storage.zmshehuitouxi_2 >= 2 && card.suit == 'club') || (player.storage.zmshehuitouxi_3 >= 2 && card.suit == 'heart') || (player.storage.zmshehuitouxi_4 >= 2 && card.suit == 'diamond');
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                /*  prompt:function (event,player){
                              var str='';
                                 var card=get.cards('bottom');        
                              str+=`是否获得${get.translation(card)}？`;
                              return str;
                          },*/
                                var num = ui.discardPile.childNodes.length;
                                var card1 = ui.discardPile.childNodes[num - 1];
                                //  player.showCards('社会透析',card1);
                                player.gain(card1, 'log');
                                player.$gain2(card1);
                            },
                            ai: {
                                threaten: 1,
                                order: 12,
                                result: {
                                    player(player) {
                                        var num = ui.discardPile.childNodes.length;
                                        var card = ui.discardPile.childNodes[num - 1];
                                        if (get.value(card) <= 0) return 0;
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmtrenxing', 'zmshehuitouxi_1', 'zmshehuitouxi_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.suit != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.card.suit == 'spade') {
                                            player.storage.zmshehuitouxi_1++;
                                        }
                                        if (trigger.card.suit == 'club') {
                                            player.storage.zmshehuitouxi_2++;
                                        }
                                        if (trigger.card.suit == 'heart') {
                                            player.storage.zmshehuitouxi_3++;
                                        }
                                        if (trigger.card.suit == 'diamond') {
                                            player.storage.zmshehuitouxi_4++;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmshehuitouxi_1 = 0;
                                        player.storage.zmshehuitouxi_2 = 0;
                                        player.storage.zmshehuitouxi_3 = 0;
                                        player.storage.zmshehuitouxi_4 = 0;
                                    },
                                },
                            },
                        },
                        zmqiyuebangjia: {
                            forced: true,
                            nobracket: true,
                            global: 'zmqiyuebangjia2',
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:4',
                                    init(player) {
                                        player.storage.zmqiyuebangjia_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '契',
                                    intro: {
                                        content: '未来#次摸牌后由伊古拉博金获得其中一张牌',
                                    },
                                    trigger: {
                                        player: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmqiyuebangjia2 != undefined && player.storage.zmqiyuebangjia2.isAlive() && player.storage.zmqiyuebangjia_1 > 0 && event.result.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.target = player.storage.zmqiyuebangjia2;
                                        event.cards = trigger.result;
                                        player.line(event.target);
                                        var next = event.target.chooseCardButton('选择其中一张牌获得', true, event.cards);
                                        next.ai = function (button) {
                                            if (button.link.name == 'du') return 0;
                                            return get.value(button.link, event.target);
                                        };
                                        next.filterButton = function (button) {
                                            return true;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.zmqiyuebangjia_1--;
                                            player.$give(1, event.target);
                                            event.target.gain(result.links[0], player);
                                        }
                                        ('step 2');
                                        player.markSkill('zmqiyuebangjia_1');
                                        if (player.storage.zmqiyuebangjia_1 <= 0) player.removeSkill('zmqiyuebangjia_1');
                                    },
                                },
                            },
                        },
                        zmshajingbaquan: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 30) return false;
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                var next = player
                                    .chooseToDiscard([1, 4], 'h', `【殺鲸霸拳】是否弃置任意张花色各不相同的手牌令${get.translation(trigger.target)}弃置等量的基本牌？`, function (card) {
                                        if (ui.selected.cards.length) {
                                            if (Array.isArray(ui.selected.cards))
                                                for (var i of ui.selected.cards) {
                                                    var cardb = i;
                                                    if (card.suit == cardb.suit) return false;
                                                }
                                        }
                                        return card.suit != undefined;
                                    })
                                    .set('complexCard', true);
                                var att = get.attitude(_status.event.player, trigger.target);
                                next.ai = function (card) {
                                    if (att < 0) {
                                        if (player.hasSkill('jiu')) return 0;
                                        if (player.countCards('h') == 1) return 0;
                                        if (trigger.target.getEquip('bagua') && trigger.target.countCards('h') == 0) return -1;
                                        if (trigger.target.getEquip('baiyin') && trigger.target.countCards('h') == 0) return -1;
                                        if (player.countCards('h', { name: 'jiu' }) + player.countCards('h', { name: 'tao' }) == 1 && player.hp == 1 && (card.name == 'tao' || card.name == 'jiu')) return -1;
                                        return 8 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    var num = result.cards.length;
                                    var num1 = trigger.target.countCards('h', { type: 'basic' });
                                    event.num = num1 - num;
                                    if (event.num < -2) {
                                        game.playzm5(['zmshajingbaquan0', 'zmshajingbaquan00', 'zmshajingbaquan000'].randomGet());
                                    } else {
                                        game.playzm5(['zmshajingbaquan1', 'zmshajingbaquan2', 'zmshajingbaquan3'].randomGet());
                                    }
                                    if (num1 > 0) {
                                        if (num > num1) {
                                            num = num1;
                                        }
                                        trigger.target.chooseToDiscard(num, true, 'h', `须弃置${num}张基本牌`, function (card) {
                                            return get.type(card) == 'basic';
                                        });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (event.num < 0) {
                                    var num = Math.abs(event.num);
                                } else {
                                    var num = 1;
                                }
                                trigger.baseDamage = num;
                                if (event.num < -1) {
                                    game.playzm5('zmaojia');
                                    game.mp425('zmaojia');
                                }
                            },
                        },
                        zmqiyuebangjia2: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.target == undefined) return false;
                                if (event.player == undefined) return false;
                                if (event.card.name != 'sha') return false;
                                var num4 = game.countPlayer(function (current) {
                                    return current != player && current.hasSkill('zmqiyuebangjia') && current.storage.zmt_np >= 20;
                                });
                                return num4 > 0;
                            },
                            content() {
                                'step 0';
                                var ygl = game.filterPlayer(function (current) {
                                    return current.hasSkill('zmqiyuebangjia') && current.storage.zmt_np >= 20;
                                });
                                if (ygl.length) {
                                    event.ygl = ygl[0];
                                    event.ygl
                                        .chooseControl('确定', '取消', function () {
                                            if ((trigger.target.countCards('h') == 0 && event.ygl.hp > 1) || get.attitude(player, event.ygl) > 0) return '取消';
                                            return '确定';
                                        })
                                        .set('prompt', `是否发动【契约绑架】预测${get.translation(trigger.player)}使用的${get.translation(trigger.card)}是否会对${get.translation(trigger.target)}造成伤害?`);
                                } else event.finish();
                                ('step 1');
                                if (result.control == '确定') {
                                    game.playzm5(['zmqiyuebangjia21', 'zmqiyuebangjia22', 'zmqiyuebangjia23'].randomGet());
                                    event.ygl.storage.zmt_np -= 20;
                                    event.ygl.draw();
                                    player
                                        .chooseControl('会', '不会', function () {
                                            if ((get.effect(trigger.target, trigger.card, trigger.player, trigger.player) > 0 && Math.random() < 0.65) || trigger.target.countCards('h') == 0) return '会';
                                            return '不会';
                                        })
                                        .set('prompt', `【契约绑架】:须预测此牌是否会对${get.translation(trigger.target)}造成伤害?`);
                                } else event.finish();
                                ('step 2');
                                if (result.control == '会') {
                                    event.num1 = 1;
                                    trigger.player.popup('会造成伤害');
                                    game.log(trigger.player, `预测了${get.translation(trigger.card) + result.control}造成伤害`);
                                }
                                if (result.control == '不会') {
                                    event.num1 = 2;
                                    trigger.player.popup('不会造成伤害');
                                    game.log(trigger.player, `预测了${get.translation(trigger.card) + result.control}造成伤害`);
                                    event.goto(4);
                                }
                                ('step 3');
                                //--------------------------------------------//
                                var next = game.createEvent('zmqiyuebangjia2_draw');
                                next.ygl = event.ygl;
                                next.player = player;
                                next.target = trigger.target;
                                next.setContent(function () {
                                    if (!target.isIn()) return;
                                    if (
                                        player.getHistory('sourceDamage', function (evt) {
                                            return evt.getParent(2) == event.parent;
                                        }).length == 0
                                    ) {
                                        player.addSkill('zmqiyuebangjia_1');
                                        if (player.storage.zmqiyuebangjia_11 == undefined) {
                                            player.storage.zmqiyuebangjia_11 = 0;
                                        }
                                        player.storage.zmqiyuebangjia_11++;
                                        player.storage.zmqiyuebangjia_1 = player.storage.zmqiyuebangjia_11;
                                        player.storage.zmqiyuebangjia2 = event.ygl;
                                        player.markSkill('zmqiyuebangjia_1');
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                                event.finish();
                                ('step 4');
                                var next = game.createEvent('zmqiyuebangjia2_draw');
                                next.ygl = event.ygl;
                                next.player = player;
                                next.target = trigger.target;
                                next.setContent(function () {
                                    if (!target.isIn()) return;
                                    if (
                                        player.getHistory('sourceDamage', function (evt) {
                                            return evt.getParent(2) == event.parent;
                                        }).length
                                    ) {
                                        player.addSkill('zmqiyuebangjia_1');
                                        if (player.storage.zmqiyuebangjia_11 == undefined) {
                                            player.storage.zmqiyuebangjia_11 = 0;
                                        }
                                        player.storage.zmqiyuebangjia_11++;
                                        player.storage.zmqiyuebangjia_1 = player.storage.zmqiyuebangjia_11;
                                        player.storage.zmqiyuebangjia2 = event.ygl;
                                        player.markSkill('zmqiyuebangjia_1');
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                            },
                        },
                        zmcichangzhuandong: {
                            init(player) {
                                player.storage.zmcichangzhuandong = 1;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playzm5('zmcichangzhuandong');
                                event.num1 = player.storage.zmcichangzhuandong;
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
                                        game.playzm5(['zmcichangzhuandong0', 'zmcichangzhuandong00'].randomGet());
                                        player.storage.zmcichangzhuandong++;
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
                                        if (event.suit.length == 4 - event.num && player.storage.zmcichangzhuandong < 4) {
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
                            group: ['zmcichangzhuandong_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['dying', 'dieEnd'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (event.name == 'dieEnd' && event.player == player) return false;
                                        if (event.name == 'dying' && event.player != player) return false;
                                        //return event.player==player||event.source&&event.source==player;
                                        return true;
                                    },
                                    content() {
                                        player.useSkill('zmcichangzhuandong');
                                    },
                                },
                            },
                        },
                        zmgelintonghua: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                var cards = [];
                                if (player.hasSkill('zmlanglaile_1')) {
                                    game.playzm5(['zmgelintonghua21', 'zmgelintonghua22', 'zmgelintonghua23', 'zmgelintonghua24', 'zmgelintonghua25', 'zmgelintonghua26', 'zmgelintonghua27', 'zmgelintonghua28', 'zmgelintonghua29'].randomGet());
                                    var card = get.cardPile(function (card) {
                                        return !cards.includes(card) && get.type(card, 'trick') == 'trick' && get.tag(card, 'damage');
                                    });
                                } else {
                                    game.playzm5(['zmgelintonghua11', 'zmgelintonghua12', 'zmgelintonghua13', 'zmgelintonghua14', 'zmgelintonghua15'].randomGet());
                                    var card = get.cardPile(function (card) {
                                        return !cards.includes(card) && get.type(card, 'trick') == 'trick' && !get.tag(card, 'damage');
                                    });
                                }
                                cards.push(card);
                                if (cards.length) {
                                    event.card = cards[0];
                                    player.showCards(event.card);
                                } else {
                                    event.finish();
                                    game.log('牌堆中没有符合【格林童话】条件的牌');
                                }
                                ('step 1');
                                var name = event.card.name;
                                game.filterPlayer(function (current) {
                                    if (current.countCards('h') > 0) {
                                        var hs = current.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i].name == name) {
                                                player.discard(event.card);
                                                event.finish();
                                            }
                                        }
                                    }
                                });
                                player.chooseUseTarget(event.card, false);
                                ('step 2');
                                if (!result.bool) {
                                    player.discard(event.card);
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmlanglaile: {
                            nobracket: true,
                            trigger: {
                                global: ['damageAfter'],
                            },
                            check(event, player) {
                                if (get.attitude(player, event.source) <= 0 && player.storage.zmt_np < 30 && player.hp > 1) return false;
                                if (get.attitude(player, event.source) <= 0 && event.source.hasSkillTag('noturn') && player.hasSkill('zmlanglaile_1')) return false;
                                return get.attitude(player, event.source) <= 0 || (get.attitude(player, event.source) > 0 && event.source.isTurnedOver()) || (get.attitude(player, event.source) > 0 && event.source.hasSkillTag('noturn'));
                            },
                            filter(event, player) {
                                return event.source && event.source != player && player.storage.zmt_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                trigger.source
                                    .chooseCard(`【狼来了】是否交给${get.translation(player)}一张手牌？否则你翻面且${get.translation(player)}更改技能状态`, 1, 'h', false, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var att = get.attitude(trigger.source, player);
                                        if (trigger.source.isTurnedOver() && !trigger.source.hasSkillTag('noturn')) return 0;
                                        if (trigger.source.hasSkillTag('noturn')) return 0;
                                        return 14 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm5(['zmlanglaile11', 'zmlanglaile12', 'zmlanglaile13'].randomGet());
                                    player.line(trigger.source, { color: [187, 102, 102] });
                                    trigger.source.$give(result.cards.length, player);
                                    player.gain(result.cards);
                                } else {
                                    game.playzm5(['zmlanglaile21', 'zmlanglaile22', 'zmlanglaile23', 'zmlanglaile25', 'zmlanglaile24'].randomGet());
                                    player.line(trigger.source, { color: [187, 102, 102] });
                                    trigger.source.turnOver();
                                    player.addSkill('zmlanglaile_1');
                                    if (player.name == 'zm_10kuangdan' || player.name1 == 'zm_10kuangdan') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/image/变身丹.jpg');
                                    } else if (player.name2 == 'zm_10kuangdan') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/image/变身丹.jpg');
                                    }
                                }
                            },
                            group: ['zmtrenxing', 'zmtyeshou'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.removeSkill('zmlanglaile_1');
                                        if (player.name == 'zm_10kuangdan' || player.name1 == 'zm_10kuangdan') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊伍/image/zm_10kuangdan.jpg');
                                        } else if (player.name2 == 'zm_10kuangdan') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/image/zm_10kuangdan.jpg');
                                        }
                                    },
                                },
                            },
                        },
                        zmhexinzhanlue: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            enable: 'phaseUse',
                            position: 'h',
                            filterCard(card) {
                                return get.type(card) == 'trick';
                            },
                            selectCard: [1, 1],
                            filter(event, player) {
                                return player.countCards('h', { type: 'trick' }) && player.getExpansions('zmhexinzhanlue').length == 0;
                            },
                            check(card, player) {
                                return get.value(card);
                            },
                            content() {
                                'step 0';
                                player.addToExpansion(cards[0]).gaintag.add('zmhexinzhanlue');
                            },
                            ai: {
                                threaten: 2,
                                order: 12,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmhexinzhanlue_0', 'zmhexinzhanlue_1', 'zmhexinzhanlue_2'],
                            subSkill: {
                                2: {
                                    nobracket: true,
                                    audio: 'ext:综漫季刊伍/audio:3',
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var respondTo = event.respondTo;
                                        if (!respondTo) return false;
                                        if (respondTo[1] == undefined) return false;
                                        if (player == event.player) return false;
                                        if (player.getExpansions('zmhexinzhanlue').length <= 0) return false;
                                        if (get.type(respondTo[1]) != 'trick') return false;
                                        return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmhexinzhanlue');
                                        trigger.player.gain(cards, player, 'give');
                                    },
                                },
                            },
                        },
                        zmzhanzhenglun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.storage.zmt_np < 25) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1], '选择一名其他角色直到你的下个回合开始前处于所有角色攻击范围内,且为出杀的唯一合理目标', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 25;
                                    player.line(result.targets);
                                    result.targets[0].addSkill('zmzhanzhenglun2');
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var players = get.players(player);
                                event.players = players;
                                ('step 3');
                                if (event.players.length) {
                                    var current = event.players.shift();
                                    if (!current.hasSkill('zmzhanzhenglun2')) {
                                        current.addSkill('zmzhanzhenglun_2');
                                    }
                                    event.redo();
                                }
                            },
                            group: ['zmtrenxing', 'zmzhanzhenglun_3'],
                            subSkill: {
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            var num5 = game.hasPlayer(function (current) {
                                                return current.hasSkill('zmzhanzhenglun');
                                            });
                                            if (card.name == 'sha' && num5 > 0) return false;
                                        },
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['phaseBegin', 'dieBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.filterPlayer(function (current) {
                                            current.removeSkill('zmzhanzhenglun_2');
                                            current.removeSkill('zmzhanzhenglun2');
                                        });
                                    },
                                },
                            },
                        },
                        zmhexinzhanlue_1: {
                            usable: 1,
                            audio: 'ext:综漫季刊伍/audio:5',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var list = player.getExpansions('zmhexinzhanlue');
                                var num = 0;
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].name == 'wuxie') num++;
                                }
                                return player.getExpansions('zmhexinzhanlue').length && num == 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('核心战略', player.getExpansions('zmhexinzhanlue'), 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return true;
                                },
                                check(button) {
                                    if (button.link.name == 'du') return -2;
                                    var player = _status.event.player;
                                    if (get.select(get.info(button.link).selectTarget)[1] == -1) {
                                        if (get.type(button.link) == 'delay') return -1;
                                        if (get.type(button.link) == 'equip') {
                                            var current = player.getCards('e', { subtype: get.subtype(button.link) })[0];
                                            if (current && get.equipValue(current) >= get.equipValue(button.link)) return -1;
                                            return 1;
                                        }
                                        if (get.tag(button.link, 'multitarget')) return -1;
                                        if (button.link.name == 'huoshaolianying') return -1;
                                    }
                                    if (button.link.name == 'jiu') {
                                        if (get.effect(player, { name: 'jiu' }, player) > 0) {
                                            return 1;
                                        }
                                        return -1;
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: {
                                            name: links[0].name,
                                        },
                                        onuse(result, player) { },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择${get.translation(links)}的目标`;
                                },
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmhexinzhanlue_0: {
                            audio: 'zmhexinzhanlue_1',
                            usable: 1,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var list = player.getExpansions('zmhexinzhanlue');
                                var num = 0;
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].name == 'wuxie') num++;
                                }
                                return player.getExpansions('zmhexinzhanlue').length && num > 0;
                            },
                            viewAs: {
                                name: 'wuxie',
                            },
                            filterCard() {
                                return false;
                            },
                            viewAsFilter(player) {
                                var list = player.getExpansions('zmhexinzhanlue');
                                var num = 0;
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].name == 'wuxie') num++;
                                }
                                return player.getExpansions('zmhexinzhanlue').length && num > 0;
                            },
                            selectCard: -1,
                            prompt: '视为使用一张无懈可击',
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
                        zmzhanzhenglun1: {
                            mark: true,
                            marktext: '战',
                            intro: {
                                content: '你处于全场角色攻击范围内,且为全场出杀唯一合理目标',
                            },
                            mod: {
                                targetInRange(card, player, target) {
                                    if (target.hasSkill('zmzhanzhenglun2')) {
                                        return true;
                                    }
                                },
                            },
                        },
                        zmzhanzhenglun2: {
                            global: 'zmzhanzhenglun1',
                            forced: true,
                        },
                        zmshanyaodeyuhui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                if (!event.targets) return false;
                                return get.tag(event.card, 'damage') && event.target.hp > player.hp;
                            },
                            check(event, player) {
                                if (!player.hasSkill('unequip') && event.target.getEquip('baiyin')) return false;
                                if (get.effect(event.target, event.card, player, player) <= 0) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.baseDamage++;
                                ('step 1');
                                var next = game.createEvent('zmshanyaodeyuhui_ls');
                                next.player = player;
                                next.target = trigger.target;
                                next.setContent(function () {
                                    if (!target.isIn()) return;
                                    if (
                                        player.getHistory('sourceDamage', function (evt) {
                                            return evt.getParent(2) == event.parent;
                                        }).length == 0
                                    ) {
                                        player.loseHp();
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                            },
                        },
                        zmhuanghunqishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:5',
                            group: ['zmtrenxing', 'zmhuanghunqishi2', 'zmhuanghunqishi_1'],
                            trigger: {
                                player: ['loseAfter', 'dying'],
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return true;
                            },
                            filter(event, player, name) {
                                if (name == 'loseAfter') {
                                    if (player.storage.zmt_np < 20) return false;
                                    if (player.countCards('h') > 0) return false;
                                    return event.hs && event.hs.length && player.isDamaged();
                                } else {
                                    if (player.storage.zmt_np < 20) return false;
                                    return player.isAlive();
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                ('step 1');
                                if (event.triggername == 'loseAfter') {
                                    player.recover(2);
                                } else {
                                    player.draw(2);
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.isIn() && event.source != player;
                                    },
                                    content() {
                                        trigger.source.addSkill('zmhuanghunqishi2');
                                    },
                                },
                            },
                        },
                        zmhuanghunqishi2: {
                            mark: true,
                            marktext: '昏',
                            intro: {
                                content: '体力值小于你的角色对你使用【杀】时,不可响应',
                            },
                            nobracket: true,
                            forced: true,
                            trigger: {
                                global: 'shaBegin',
                            },
                            filter(event, player) {
                                return event.target == player && event.player.hp < player.hp;
                            },
                            content() {
                                trigger.directHit = true;
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
                        zmwuweizhuanbian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:7',
                            trigger: {
                                target: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h', { name: 'shan' }) > 0 && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard(1, 'he', `是否用一张牌交换${get.translation(trigger.player)}的一张【闪】？`, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (player.countCards('h', { name: 'jinchan' }) >= 1 && player.countCards('h') == player.countCards('h', { name: 'jinchan' })) return -1;
                                    if (player.countCards('h', { name: 'shan' }) > 1) return -1;
                                    if (card.name == 'shan' || card.name == 'tao') return -1;
                                    if (player.hp <= 2 && player.countCards('h', { name: 'shan' }) == 0) return 8 - get.value(card);
                                    return 5 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.gain(result.cards[0], player);
                                    player.$give(result.cards.length, trigger.player);
                                    var next = trigger.player.chooseCard(1, 'h', true, '须选择一张【闪】交给' + get.translation(player), function (card, player) {
                                        return card.name == 'shan';
                                    });
                                    next.ai = function (card) {
                                        return 1;
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.cards?.length) {
                                    player.gain(result.cards[0], trigger.player);
                                    trigger.player.$give(result.cards.length, player);
                                }
                            },
                            group: ['zmwuweizhuanbian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:5',
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.target && event.target != player && event.target.countCards('h', { name: 'shan' }) > 0 && player.countCards('he') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseCard(1, 'he', `是否用一张牌交换${get.translation(trigger.target)}的一张【闪】？`, function (card, player) {
                                            return true;
                                        });
                                        next.ai = function (card) {
                                            if (card.name == 'shan' || card.name == 'tao' || (trigger.target.hp == 1 && card.name == 'jiu') || (trigger.target.countCards('h') == 1 && card.name == 'jinchan')) return -1;
                                            return 1;
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            trigger.target.gain(result.cards[0], player);
                                            player.$give(result.cards.length, trigger.target);
                                            var next = trigger.target.chooseCard(1, 'h', true, '须选择一张【闪】交给' + get.translation(player), function (card, player) {
                                                return card.name == 'shan';
                                            });
                                            next.ai = function (card) {
                                                return 1;
                                            };
                                        } else event.finish();
                                        ('step 2');
                                        if (result.cards?.length) {
                                            player.gain(result.cards[0], trigger.target);
                                            trigger.target.$give(result.cards.length, player);
                                        }
                                    },
                                },
                            },
                        },
                        zmzibiyuandunguo: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 50;
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0 && player.canUse({ name: 'sha' }, current);
                                });
                                if (player.countCards('h', { name: 'sha' }) + player.countCards('h', { name: 'shan' }) == 0) return false;
                                if (num4 == 0) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm5(['zmzhenren1', 'zmzhenren2'].randomGet());
                                game.mp425('zmzhenren');
                                ui.background.setBackgroundImage('extension/综漫季刊伍/背景真人.png');
                                ('step 1');
                                ('step 2');
                                player.$fullscreenpop('自闭圆顿裹', 'thunder');
                                player.addTempSkill('zmzibiyuandunguo_1');
                                player.addTempSkill('zmzibiyuandunguo_2');
                                player.addTempSkill('zmzibiyuandunguo_5');
                                event.players = get.players(player);
                                event.players = event.players.filter((i) => i.hasSkill('zmzibiyuandunguo_3'));
                                ('step 3');
                                if (event.players.length >= 1) {
                                    var current = event.players.shift();
                                    current.removeSkill('zmzibiyuandunguo_3');
                                    event.redo();
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                        cardname(card) {
                                            if (card.name == 'shan') return 'sha';
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content() {
                                        trigger.player.addSkill('zmzibiyuandunguo_3');
                                        player.removeSkill('zmzibiyuandunguo_2');
                                    },
                                },
                                3: {
                                    nobracket: true,
                                    forced: true,
                                    trigger: {
                                        player: 'changeHp',
                                    },
                                    filter(event, player) {
                                        return player.countCards('he') > 0;
                                    },
                                    content() {
                                        player.chooseToDiscard(1, 'he', true);
                                    },
                                },
                                5: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.removeSkill('zmzibiyuandunguo_1');
                                        game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                    },
                                },
                            },
                        },
                        zmquanzhiquanneng: {
                            group: ['zmquanzhiquanneng_1', 'zmquanzhiquanneng2', 'zmtrenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            enable: 'chooseToUse',
                            mullter(event, player) {
                                return ui.cardPile.childNodes[i].name == 'chenhuodajie';
                            },
                            init(player) {
                                player.markSkill('zmquanzhiquanneng');
                                for (var i = 0; i < player.node.marks.childNodes.length; i++) {
                                    if (player.node.marks.childNodes[i].name == 'zmquanzhiquanneng') {
                                        player.node.marks.childNodes[i].setBackground(player.name, 'character');
                                        player.node.marks.childNodes[i].innerHTML = '';
                                    }
                                }
                            },
                            intro: {
                                content(storage, player) {
                                    var str = '';
                                    if (ui.cardPile.childNodes.length >= 1) {
                                        for (var i = 0; i < 1; i++) {
                                            if (player.isUnderControl(true)) {
                                                str += get.translation(ui.cardPile.childNodes[i]);
                                            }
                                        }
                                    } else {
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            if (player.isUnderControl(true)) {
                                                str += get.translation(ui.cardPile.childNodes[i]);
                                            }
                                        }
                                    }
                                    return str;
                                },
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true)) dialog.add('<div class="text center">牌堆顶的牌</div>');
                                    if (ui.cardPile.childNodes.length >= 1) {
                                        var cards = [ui.create.card()];
                                        cards[0].init([ui.cardPile.childNodes[0].suit, ui.cardPile.childNodes[0].number, ui.cardPile.childNodes[0].name]);
                                    } else {
                                        var cards = [ui.create.card()];
                                        cards[0].init([ui.cardPile.childNodes[0].suit, ui.cardPile.childNodes[0].number, ui.cardPile.childNodes[0].name]);
                                    }
                                    if (cards) {
                                        if (player.isUnderControl(true)) {
                                            dialog.add(cards);
                                        }
                                    } else {
                                        if (player.isUnderControl(true)) {
                                            dialog.add('(无)');
                                        }
                                    }
                                },
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 5) return false;
                                if (ui.cardPile.childNodes.length >= 1) {
                                    for (var i = 0; i < 1; i++) {
                                        if (ui.cardPile.childNodes.length && event.filterCard && event.filterCard({ name: ui.cardPile.childNodes[i].name }, player)) return true;
                                    }
                                } else {
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        if (ui.cardPile.childNodes.length && event.filterCard && event.filterCard({ name: ui.cardPile.childNodes[i].name }, player)) return true;
                                    }
                                }
                                return false;
                            },
                            onChooseToUse(event) {
                                if (!game.online) {
                                    var cards = [];
                                    if (ui.cardPile.childNodes.length >= 1) {
                                        for (var i = 0; i < 1; i++) {
                                            cards.push(ui.cardPile.childNodes[i]);
                                        }
                                    } else {
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            cards.push(ui.cardPile.childNodes[i]);
                                        }
                                    }
                                    event.set('tianyancards', cards);
                                }
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    return ui.create.dialog('可使用牌堆顶的牌', event.tianyancards);
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                    return false;
                                },
                                check(button) {
                                    /*   var num4=game.countPlayer(function(current){
                              return _status.event.player.getEnemies().includes(current)&&current.hp<=0&&event.parent.type=='dying';
                              });
                              if(num4>0) return false;      
                                    */
                                    if (_status.event.type == 'dying') return get.attitude(_status.event.player, _status.event.dying);
                                    return _status.event.player.getUseValue(button.link, false);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        viewAs: links[0],
                                        onuse(result, player) {
                                            if (!player.hasSkill('zmquanzhiquanneng_temp')) {
                                                player.addTempSkill('zmquanzhiquanneng_temp');
                                                game.playzm5(['zmquanzhiquanneng1', 'zmquanzhiquanneng2', 'zmquanzhiquanneng3', 'zmquanzhiquanneng4', 'zmquanzhiquanneng5', 'zmquanzhiquanneng6', 'zmquanzhiquanneng7'].randomGet());
                                            }
                                            player.storage.zmt_np -= 5;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择${get.translation(links)}的目标`;
                                },
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                            hiddenCard(player, name) {
                                if (ui.cardPile.childNodes.length >= 1) {
                                    for (var i = 0; i < 1; i++) {
                                        if (ui.cardPile.childNodes[i].name == 'wuxie') return true;
                                    }
                                } else {
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        if (ui.cardPile.childNodes[i].name == 'wuxie') return true;
                                    }
                                }
                                return false;
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:1',
                                    trigger: {
                                        player: ['recoverAfter'],
                                    },
                                    juexingji: true,
                                    forced: true,
                                    init(player) {
                                        player.storage.zmquanzhiquanneng_1 = 0;
                                    },
                                    filter(event, player) {
                                        return player.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmquanzhiquanneng_1 += trigger.num;
                                        ('step 1');
                                        if (player.storage.zmquanzhiquanneng_1 >= player.maxHp) {
                                            player.awakenSkill('zmquanzhiquanneng_1');
                                            player.removeSkill('zmquanzhiquanneng');
                                            player.addSkill('zmquanzhiquanneng0');
                                        }
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmlingzizhipei: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:6',
                            trigger: {
                                global: 'useCard',
                            },
                            check(event, player) {
                                if (get.effect(event.targets[0], event.card, player, player) > 0) return false;
                                return get.attitude(player, event.player) <= 0 && get.attitude(player, event.targets[0]) > 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (!event.targets /*||event.targets.length!=1*/) return false;
                                return event.player != player && event.card.name == 'sha' && event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var next = trigger.player.chooseCard(1, 'h', '【灵子支配】须重铸一张手牌', true, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    return 18 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.lose(card);
                                    trigger.player.$throw(card);
                                    var card2 = get.cards();
                                    if (get.type(card2[0]) == 'basic') {
                                        trigger.excluded.addArray(
                                            game.filterPlayer(function (current) {
                                                return true;
                                            })
                                        );
                                        trigger.cancel();
                                    } else {
                                        player.addSkill('zmlingzizhipei2');
                                        player.disableSkill('zmlingzizhipei2', ['zmlingzizhipei']);
                                    }
                                    trigger.player.gain(card2, 'gain2');
                                }
                            },
                        },
                        zmquanzhiquanneng2: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            audio: 'zmquanzhiquanneng',
                            filter(event, player) {
                                if (player.storage.zmt_np < 5) return false;
                                if (event.responded) return false;
                                if (ui.cardPile.childNodes.length >= 1) {
                                    for (var i = 0; i < 1; i++) {
                                        if (event.filterCard) {
                                            if (ui.cardPile.childNodes.length) {
                                                if (event.filterCard && event.filterCard({ name: ui.cardPile.childNodes[i].name }, player)) return true;
                                            }
                                        }
                                    }
                                } else {
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        if (event.filterCard) {
                                            if (ui.cardPile.childNodes.length) {
                                                if (event.filterCard && event.filterCard({ name: ui.cardPile.childNodes[i].name }, player)) return true;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                if (ui.cardPile.childNodes.length >= 1) {
                                    for (var i = 0; i < 1; i++) {
                                        if (ui.cardPile.childNodes.length) {
                                            cards.push(ui.cardPile.childNodes[i]);
                                        }
                                    }
                                } else {
                                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                        if (ui.cardPile.childNodes.length) {
                                            cards.push(ui.cardPile.childNodes[i]);
                                        }
                                    }
                                }
                                player.chooseCardButton('打出牌堆顶的牌', cards).set('filterButton', function (button) {
                                    return _status.event.getTrigger().filterCard(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 5;
                                    if (!player.hasSkill('zmquanzhiquanneng_temp')) {
                                        player.addTempSkill('zmquanzhiquanneng_temp');
                                        game.playzm5(['zmquanzhiquanneng1', 'zmquanzhiquanneng2', 'zmquanzhiquanneng3', 'zmquanzhiquanneng4', 'zmquanzhiquanneng5', 'zmquanzhiquanneng6', 'zmquanzhiquanneng7'].randomGet());
                                    }
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    result.links[0].remove();
                                    trigger.result = { bool: true, card: result.links[0] };
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan')) return 0.7;
                                        if (get.tag(card, 'respondSha')) return 0.7;
                                    },
                                },
                            },
                        },
                        zmlingzizhipei2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('zmlingzizhipei2');
                                player.enableSkill('zmlingzizhipei2', ['zmlingzizhipei']);
                            },
                        },
                        zmquanzhiquanneng0: {
                            nobracket: true,
                            audio: 'zmquanzhiquanneng',
                            enable: 'chooseToUse',
                            filter(event, button, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current != player && current.countCards('h') >= 1;
                                });
                                if (num4 == 0) return false;
                                return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('hidden');
                                    for (var i of game.players) {
                                        if (i == player) continue;
                                        if (i.countCards('h')) {
                                            dialog.add(get.translation(i) + '的手牌');
                                            var hs = i.getCards('h');
                                            dialog.add(hs);
                                        }
                                    }
                                    return dialog;
                                },
                                filter(button, player) {
                                    var num4 = game.countPlayer(function (current) {
                                        return current != player && current.countCards('h') >= 1;
                                    });
                                    if (num4 == 0) return false;
                                    var evt = _status.event.parent;
                                    if (evt && evt.filterCard) {
                                        return evt.filterCard(button.link, player, evt);
                                    }
                                },
                                check() {
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
                                            if (!player.hasSkill('zmquanzhiquanneng_temp')) {
                                                player.addTempSkill('zmquanzhiquanneng_temp');
                                                game.playzm5(['zmquanzhiquanneng1', 'zmquanzhiquanneng2', 'zmquanzhiquanneng3', 'zmquanzhiquanneng4', 'zmquanzhiquanneng5', 'zmquanzhiquanneng6', 'zmquanzhiquanneng7'].randomGet());
                                            }
                                            var owner = get.owner(result.links[0]);
                                            owner.lose(result.links[0]);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择${get.translation(links)}的目标`;
                                },
                            },
                            ai: {
                                threaten: 99,
                                order: 11,
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmquanzhiquanneng0_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'chooseToRespondBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.responded) return false;
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.countCards('h');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var dialog = ui.create.dialog('hidden');
                                        var cards = [];
                                        for (var i of game.players) {
                                            if (i == player || i.countCards('h') == 0) continue;
                                            dialog.add(get.translation(i) + '的手牌');
                                            if (i.countCards('h')) {
                                                var hs = i.getCards('h');
                                                for (var j = 0; j < hs.length; j++) {
                                                    cards.push(hs[j]);
                                                }
                                            }
                                        }
                                        player.chooseCardButton(dialog, cards).set('filterButton', function (button) {
                                            return _status.event.getTrigger().filterCard(button.link);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            if (!player.hasSkill('zmquanzhiquanneng_temp')) {
                                                player.addTempSkill('zmquanzhiquanneng_temp');
                                                game.playzm5(['zmquanzhiquanneng1', 'zmquanzhiquanneng2', 'zmquanzhiquanneng3', 'zmquanzhiquanneng4', 'zmquanzhiquanneng5', 'zmquanzhiquanneng6', 'zmquanzhiquanneng7'].randomGet());
                                            }
                                            var owner = get.owner(result.links[0]);
                                            owner.lose(result.links[0]);
                                            trigger.untrigger();
                                            trigger.responded = true;
                                            result.links[0].remove();
                                            trigger.result = { bool: true, card: result.links[0] };
                                        }
                                    },
                                },
                            },
                        },
                        zmwanxiangshengmiedeqidi: {
                            nobracket: true,
                            mod: {
                                cardSavable(card, player) {
                                    if (card.name == 'tao' && player.storage.zmwanxiangshengmiedeqidi_3 == true) return false;
                                    if (card.name == 'jiu' && player.storage.zmwanxiangshengmiedeqidi_4 == true) return false;
                                },
                                cardEnabled(card, player) {
                                    if (card.name == 'sha' && player.storage.zmwanxiangshengmiedeqidi_1 == true) return false;
                                    if (card.name == 'shan' && player.storage.zmwanxiangshengmiedeqidi_2 == true) return false;
                                    if (card.name == 'tao' && player.storage.zmwanxiangshengmiedeqidi_3 == true) return false;
                                    if (card.name == 'jiu' && player.storage.zmwanxiangshengmiedeqidi_4 == true) return false;
                                },
                            },
                            group: ['zmwanxiangshengmiedeqidi_1', 'zmwanxiangshengmiedeqidi_2', 'zmwanxiangshengmiedeqidi_3', 'zmwanxiangshengmiedeqidi_4', 'zmwanxiangshengmiedeqidi_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return (event.card && event.card.name == 'sha' && player.storage.zmwanxiangshengmiedeqidi_1 == true) || (event.card.name == 'shan' && player.storage.zmwanxiangshengmiedeqidi_2 == true) || (event.card.name == 'tao' && player.storage.zmwanxiangshengmiedeqidi_3 == true) || (event.card.name == 'jiu' && player.storage.zmwanxiangshengmiedeqidi_4 == true);
                                    },
                                    content() {
                                        if (trigger.card.name == 'sha' && player.storage.zmwanxiangshengmiedeqidi_1 == true) {
                                            player.storage.zmwanxiangshengmiedeqidi_1 = false;
                                        }
                                        if (trigger.card.name == 'shan' && player.storage.zmwanxiangshengmiedeqidi_2 == true) {
                                            player.storage.zmwanxiangshengmiedeqidi_2 = false;
                                        }
                                        if (trigger.card.name == 'tao' && player.storage.zmwanxiangshengmiedeqidi_3 == true) {
                                            player.storage.zmwanxiangshengmiedeqidi_3 = false;
                                        }
                                        if (trigger.card.name == 'jiu' && player.storage.zmwanxiangshengmiedeqidi_4 == true) {
                                            player.storage.zmwanxiangshengmiedeqidi_4 = false;
                                        }
                                    },
                                },
                                1: {
                                    name: '使用杀',
                                    mark: true,
                                    marktext: '杀',
                                    intro: {
                                        content(player) {
                                            if (player.storage.zmwanxiangshengmiedeqidi_1 == true) return '你的【杀】无法使用,直到其他角色使用杀为止';
                                            return '你于需要时可视为使用一张【杀】,之后你无法使用杀直到其他角色使用杀为止';
                                        },
                                    },
                                    audio: 'ext:综漫季刊伍/audio:6',
                                    init(player) {
                                        player.storage.zmwanxiangshengmiedeqidi_1 = true;
                                    },
                                    enable: ['chooseToUse'],
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmwanxiangshengmiedeqidi_1 == false;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    selectCard: -1,
                                    precontent() {
                                        player.storage.zmwanxiangshengmiedeqidi_1 = true;
                                    },
                                    prompt: '是否视为使用一张【杀】？之后你无法使用杀直到其他角色使用过为止',
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
                                            if (player.countCards('h', { name: 'sha' }) > 0) return false;
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
                                2: {
                                    name: '使用闪',
                                    mark: true,
                                    marktext: '闪',
                                    intro: {
                                        content(player) {
                                            if (player.storage.zmwanxiangshengmiedeqidi_2 == true) return '你的【闪】无法使用,直到其他角色使用闪为止';
                                            return '你于需要时可视为使用一张【闪】,之后你无法使用闪直到其他角色使用闪为止';
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmwanxiangshengmiedeqidi_2 = true;
                                    },
                                    audio: 'ext:综漫季刊伍/audio:3',
                                    enable: ['chooseToUse'],
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmwanxiangshengmiedeqidi_2 == false;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.storage.zmwanxiangshengmiedeqidi_2 = true;
                                    },
                                    selectCard: -1,
                                    prompt: '是否视为使用一张【闪】？之后你无法使用闪直到其他角色使用过为止',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.hasSkill('zjqixizheduan_disable')) return false;
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
                                },
                                3: {
                                    name: '使用桃',
                                    mark: true,
                                    marktext: '桃',
                                    intro: {
                                        content(player) {
                                            if (player.storage.zmwanxiangshengmiedeqidi_3 == true) return '你的【桃】无法使用,直到其他角色使用桃为止';
                                            return '你于需要时可视为使用一张【桃】,之后你无法使用桃直到其他角色使用桃为止';
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmwanxiangshengmiedeqidi_3 = true;
                                    },
                                    audio: 'ext:综漫季刊伍/audio:3',
                                    enable: ['chooseToUse'],
                                    viewAs: {
                                        name: 'tao',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmwanxiangshengmiedeqidi_3 == false;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.storage.zmwanxiangshengmiedeqidi_3 = true;
                                    },
                                    selectCard: -1,
                                    prompt: '是否视为使用一张【桃】？之后你无法使用桃直到其他角色使用过为止',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.hasSkill('zjqixizheduan_disable')) return false;
                                        },
                                        basic: {
                                            order(card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [6.5, 4, 3, 2],
                                            value: [6.5, 4, 3, 2],
                                        },
                                        result: {
                                            target: 2,
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
                                4: {
                                    name: '使用酒',
                                    mark: true,
                                    marktext: '酒',
                                    intro: {
                                        content(player) {
                                            if (player.storage.zmwanxiangshengmiedeqidi_4 == true) return '你的【酒】无法使用,直到其他角色使用酒为止';
                                            return '你于需要时可视为使用一张【酒】,之后你无法使用酒直到其他角色使用酒为止';
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmwanxiangshengmiedeqidi_4 = true;
                                    },
                                    audio: 'ext:综漫季刊伍/audio:2',
                                    enable: ['chooseToUse'],
                                    viewAs: {
                                        name: 'jiu',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmwanxiangshengmiedeqidi_4 == false;
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return true;
                                    },
                                    onuse(event, player) {
                                        player.storage.zmwanxiangshengmiedeqidi_4 = true;
                                    },
                                    selectCard: -1,
                                    prompt: '是否视为使用一张【酒】？之后你无法使用酒直到其他角色使用过为止',
                                    ai: {
                                        order() {
                                            var player = _status.event.player;
                                            return 3.15;
                                        },
                                        skillTagFilter(player) {
                                            if (player.countCards('h', { name: 'jiu' }) > 0 && player.hp > 0) return false;
                                        },
                                        basic: {
                                            useful(card, i) {
                                                if (_status.event.player.hp > 1) {
                                                    if (i == 0) return 4;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                            value(card, player, i) {
                                                if (player.hp > 1) {
                                                    if (i == 0) return 5;
                                                    return 1;
                                                }
                                                if (i == 0) return 7.3;
                                                return 3;
                                            },
                                        },
                                        result: {
                                            target(player, target) {
                                                if (target && target.isDying()) return 2;
                                                if (target && !target.isPhaseUsing()) return 0;
                                                if (lib.config.mode == 'stone' && !player.isMin()) {
                                                    if (player.getActCount() + 1 >= player.actcount) return 0;
                                                }
                                                var shas = player.getCards('h', 'sha');
                                                if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('h', 'zhuge'))) {
                                                    return 0;
                                                }
                                                shas.sort(function (a, b) {
                                                    return get.order(b) - get.order(a);
                                                });
                                                var card;
                                                if (shas.length) {
                                                    for (var i = 0; i < shas.length; i++) {
                                                        if (lib.filter.filterCard(shas[i], target)) {
                                                            card = shas[i];
                                                            break;
                                                        }
                                                    }
                                                } else if (player.hasSha() && player.needsToDiscard()) {
                                                    if (player.countCards('h', 'hufu') != 1) {
                                                        card = { name: 'sha' };
                                                    }
                                                }
                                                if (card) {
                                                    if (
                                                        game.hasPlayer(function (current) {
                                                            return (
                                                                get.attitude(target, current) < 0 &&
                                                                target.canUse(card, current, null, true) &&
                                                                !current.hasSkillTag('filterDamage', null, {
                                                                    player: player,
                                                                    card: card,
                                                                    jiu: true,
                                                                }) &&
                                                                get.effect(current, card, target) > 0
                                                            );
                                                        })
                                                    ) {
                                                        return 1;
                                                    }
                                                }
                                                return 0;
                                            },
                                        },
                                        tag: {
                                            save: 1,
                                            recover: 0.1,
                                        },
                                    },
                                },
                            },
                        },
                        zmtapazhihuobumie: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:8',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmtapazhihuobumie = false;
                            },
                            filterCard(card) {
                                return true;
                            },
                            selectCard: 1,
                            line: 'thunder',
                            discard: false,
                            lose: false,
                            delay: 0,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('h') >= 1 && player.storage.zmt_np >= 20;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                target.addTempSkill('zmtapazhihuobumie_0', { player: 'phaseEnd' });
                                player.storage.zmt_np -= 20;
                                event.list = [];
                                player.showCards(cards);
                                event.suit = cards[0].suit;
                                event.Q = cards[0].name;
                                if (target.countCards('he') == 0) {
                                    event.finish();
                                }
                                ('step 1');
                                var hs = target.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    if (hs[i].suit == event.suit || hs[i].name == event.Q) {
                                        event.list.push(hs[i]);
                                    }
                                }
                                if (event.list.length) {
                                    if (player.storage.zmtapazhihuobumie == true) {
                                        target.discard(event.list);
                                    } else {
                                        target.discard(event.list);
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.storage.zmtapazhihuobumie == true) {
                                    var num = -get.value(cards[0]);
                                    for (var i = 0; i < event.list.length; i++) {
                                        num += get.value(event.list[i]);
                                    }
                                    player
                                        .chooseControl('交换牌', '给出牌', '取消')
                                        .set('prompt', '可选择一项效果执行')
                                        .set('choiceList', [`用${get.translation(cards[0])}交换` + get.translation(event.list), `将${get.translation(cards[0])}交给${get.translation(target)}并对其造成一点伤害`, '取消']).ai = function (event, player) {
                                            if (cards[0].name == 'du') return '给出牌';
                                            if (target.hp > 1 && num > 20) return '交换牌';
                                            return '给出牌';
                                        };
                                }
                                ('step 3');
                                if (result.control == '交换牌') {
                                    player.discard(cards[0]);
                                    player.gain(event.list, 'gain2');
                                }
                                if (result.control == '给出牌') {
                                    target.gain(cards[0], player);
                                    player.$give(1, target);
                                    target.damage();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.2,
                                order: 6,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkill('zmtapazhihuobumie_0') || (player.storage.zmt_np <= 40 && target.countCards('he') < 3) || (player.storage.zmt_np > 40 && target.countCards('he') < 2)) return 0;
                                        return -target.countCards('h');
                                    },
                                },
                            },
                            group: ['zmtapazhihuobumie_1', 'zmtrenxing', 'zmtshenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                0: {},
                                1: {
                                    init(player) {
                                        player.storage.zmtapazhihuobumie_1 = [];
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.zmtapazhihuobumie_1) return false;
                                        if (event.card.name != 'sha' && event.card.name != 'shan' && event.card.name != 'tao' && event.card.name != 'jiu') return false;
                                        return player.storage.zmtapazhihuobumie == false && !player.storage.zmtapazhihuobumie_1.includes(event.card.name);
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.storage.zmtapazhihuobumie_1.includes(trigger.card.name)) {
                                            player.storage.zmtapazhihuobumie_1.push(trigger.card.name);
                                        }
                                        ('step 1');
                                        if (player.storage.zmtapazhihuobumie_1.length >= 4) {
                                            game.playzm5('zmyishena');
                                            game.mp425('zmyishena');
                                            player.storage.zmtapazhihuobumie = true;
                                        }
                                    },
                                },
                            },
                        },
                        zmgainiangailiang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:1',
                            enable: 'phaseUse',
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(he[i].name)) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique && lib.inpile.includes(card.name);
                            },
                            selectCard: 2,
                            position: 'he',
                            check(card) {
                                return get.value(card);
                            },
                            content() {
                                var name = cards[0].name + '_' + cards[1].name;
                                var info1 = get.info(cards[0]),
                                    info2 = get.info(cards[1]);
                                if (!lib.card[name]) {
                                    var info = {
                                        enable: true,
                                        type: 'equip',
                                        subtype: get.subtype(cards[0]),
                                        cardimage: info1.cardimage || cards[0].name,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        selectTarget: -1,
                                        modTarget: true,
                                        content: lib.element.content.equipCard,
                                        legend: true,
                                        source: [cards[0].name, cards[1].name],
                                        onEquip: [],
                                        onLose: [],
                                        skills: [],
                                        distance: {},
                                        ai: {
                                            order: 8.9,
                                            equipValue: 10,
                                            useful: 2.5,
                                            value: 10,
                                            result: {
                                                target(player, target) {
                                                    return get.equipResult(player, target, name);
                                                },
                                            },
                                        },
                                    };
                                    for (var i in info1.distance) {
                                        info.distance[i] = info1.distance[i];
                                    }
                                    for (var i in info2.distance) {
                                        if (typeof info.distance[i] == 'number') {
                                            info.distance[i] += info2.distance[i];
                                        } else {
                                            info.distance[i] = info2.distance[i];
                                        }
                                    }
                                    if (info1.skills) {
                                        info.skills = info.skills.concat(info1.skills);
                                    }
                                    if (info2.skills) {
                                        info.skills = info.skills.concat(info2.skills);
                                    }
                                    if (info1.onEquip) {
                                        if (Array.isArray(info1.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info1.onEquip);
                                        } else {
                                            info.onEquip.push(info1.onEquip);
                                        }
                                    }
                                    if (info2.onEquip) {
                                        if (Array.isArray(info2.onEquip)) {
                                            info.onEquip = info.onEquip.concat(info2.onEquip);
                                        } else {
                                            info.onEquip.push(info2.onEquip);
                                        }
                                    }
                                    if (info1.onLose) {
                                        if (Array.isArray(info1.onLose)) {
                                            info.onLose = info.onLose.concat(info1.onLose);
                                        } else {
                                            info.onLose.push(info1.onLose);
                                        }
                                    }
                                    if (info2.onLose) {
                                        if (Array.isArray(info2.onLose)) {
                                            info.onLose = info.onLose.concat(info2.onLose);
                                        } else {
                                            info.onLose.push(info2.onLose);
                                        }
                                    }
                                    if (info.onEquip.length == 0) delete info.onEquip;
                                    if (info.onLose.length == 0) delete info.onLose;
                                    lib.card[name] = info;
                                    lib.translate[name] = get.translation(cards[0].name, 'skill') + get.translation(cards[1].name, 'skill');
                                    var str = lib.translate[cards[0].name + '_info'];
                                    if (str[str.length - 1] == '.' || str[str.length - 1] == '.') {
                                        str = str.slice(0, str.length - 1);
                                    }
                                    lib.translate[`${name}_info`] = str + ';' + lib.translate[`${cards[1].name}_info`];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[`${name}_info`],
                                            card: cards[0].name,
                                            legend: true,
                                        });
                                    } catch (e) { }
                                }
                                player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zmshenyuanmidian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:14',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num4 = 0;
                                if (event.card && event.cards[0] != undefined) {
                                    num4 = game.countPlayer(function (current) {
                                        return event.getParent(2).targets.includes(current) && current.isAlive();
                                    });
                                }
                                return event.card && event.cards[0] != undefined && num4 > 0 && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                            },
                            content() {
                                'step 0';
                                event.color = get.color(trigger.card);
                                if (get.color(trigger.card) == 'red') {
                                    event.color2 = 'black';
                                } else {
                                    event.color2 = 'red';
                                }
                                player
                                    .chooseTarget(`是否选择一名角色获得${get.translation(trigger.card)}？之后其弃置颜色不为${get.translation(event.color)}的牌`, function (card, player, target) {
                                        return trigger.getParent(2).targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var num0 = target.countCards('h') / 2;
                                        var num1 = target.countCards('e', { color: 'black' });
                                        var num2 = target.countCards('e', { color: 'red' });
                                        var num = target.countCards('h');
                                        if ((event.color == 'red' && num + num1 == 0 && get.attitude(player, target) > 0) || (event.color == 'black' && num + num2 == 0 && get.attitude(player, target) > 0)) {
                                            return get.attitude(player, target);
                                        }
                                        if ((event.color == 'red' && num <= 2 && num1 == 0 && get.attitude(player, target) <= 0) || (event.color == 'black' && num <= 2 && num2 == 0 && get.attitude(player, target) <= 0)) {
                                            return 0;
                                        }
                                        return -get.attitude(player, target) * ((1 + target.countCards('e', { color: event.color2 })) * num0);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].gain(trigger.cards);
                                    result.targets[0].$gain2(trigger.cards);
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                if (event.target) {
                                    if (event.color == 'red') {
                                        var cards = event.target.getCards('he', { color: 'black' });
                                        if (cards.length) {
                                            event.target.discard(cards);
                                            if (cards.length >= player.hp) {
                                                player.recover();
                                            }
                                            game.log(event.target, `弃置了${cards.length}张牌`);
                                        }
                                    } else {
                                        var cards = event.target.getCards('he', { color: 'red' });
                                        if (cards.length) {
                                            event.target.discard(cards);
                                            if (cards.length >= player.hp) {
                                                player.recover();
                                            }
                                            game.log(event.target, `弃置了${cards.length}张牌`);
                                        }
                                    }
                                }
                            },
                        },
                        zmkuayuemenfeizhiwu: {
                            group: ['zmthundun', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 40;
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm5('zmaierajifu');
                                event.num0 = 0;
                                event.num1 = 0;
                                event.num2 = 0;
                                event.num3 = 0;
                                event.num4 = 0;
                                ('step 1');
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
                                event.num0 = list.randomGet();
                                player.$fullscreenpop(event.num0, 'thunder');
                                ('step 2');
                                ('step 3');
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
                                event.num1 = list.randomGet();
                                player.$fullscreenpop(event.num1, 'thunder');
                                ('step 4');
                                ('step 5');
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
                                event.num2 = list.randomGet();
                                player.$fullscreenpop(event.num2, 'thunder');
                                ('step 6');
                                ('step 7');
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
                                event.num3 = list.randomGet();
                                player.$fullscreenpop(event.num3, 'thunder');
                                ('step 8');
                                ('step 9');
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
                                event.num4 = list.randomGet();
                                player.$fullscreenpop(event.num4, 'thunder');
                                ('step 10');
                                game.mp425('zmaierajifu');
                                var cards = get.cards(13);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '跨越门扉之物');
                                var cardsx = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.number == event.num3 || i.number == event.num0 || i.number == event.num1 || i.number == event.num2 || i.number == event.num4) {
                                            cardsx.push(i);
                                        }
                                    }
                                event.cards = cardsx;
                                ('step 11');
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                }
                                if (cards.length >= 2) {
                                    event.num = cards.length / 2;
                                } else event.finish();
                                ('step 12');
                                event.num--;
                                player
                                    .chooseTarget(
                                        '对一名其他角色造成一点伤害',
                                        function (card, player, target) {
                                            return player != target;
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 13');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    result.targets[0].damage();
                                }
                                ('step 14');
                                if (event.num >= 1) {
                                    event.goto(12);
                                }
                            },
                        },
                        zmrenjianshige: {
                            intro: {
                                content: 'card',
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:8',
                            trigger: {
                                global: 'useCard',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (_status.currentPhase != event.player) return false;
                                if (event.player == player) return false;
                                if (!player.storage.zmrenjianshige || player.storage.zmrenjianshige == 0) false;
                                if (!event.cards || event.cards.length != 1) return false;
                                if (get.type(player.storage.zmrenjianshige, 'trick') == get.type(event.cards[0], 'trick')) return true;
                                if (player.storage.zmfupingrenshengsiliusui >= 1 && player.storage.zmrenjianshige.number == event.cards[0].number) return true;
                                if (player.storage.zmfupingrenshengsiliusui >= 2 && player.storage.zmrenjianshige.suit == event.cards[0].suit) return true;
                                if (player.storage.zmfupingrenshengsiliusui >= 3 && get.color(player.storage.zmrenjianshige) == get.color(event.cards[0])) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.player.chooseCard(`是否弃置一张牌?否则${get.translation(trigger.card)}失效`, 1, 'he').set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.discard(card);
                                } else {
                                    trigger.cancel();
                                }
                            },
                            group: ['zmtrenxing', 'zmrenjianshige_1', 'zmrenjianshige_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardEnd',
                                    },
                                    _priority: -1,
                                    forced: true,
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.cards || event.cards.length != 1) return false;
                                        if (_status.currentPhase != event.player) return false;
                                        return true;
                                    },
                                    content() {
                                        player.storage.zmrenjianshige = trigger.cards[0];
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmrenjianshige = 0;
                                    },
                                },
                            },
                        },
                        zmfupingrenshengsiliushui: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmt_np >= 30;
                            },
                            mark: true,
                            marktext: '浮',
                            intro: {
                                content: '已发动此技能#次',
                            },
                            init(player) {
                                player.storage.zmfupingrenshengsiliushui = 0;
                            },
                            content() {
                                'step 0';
                                var num0 = game.countPlayer(function (current) {
                                    return true;
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return current.hp;
                                });
                                event.num = Math.round(num1 / num0);
                                if (player.hp < event.num) {
                                } else {
                                    player
                                        .chooseControl('发动', '取消')
                                        .set('ai', function () {
                                            if (player.hp <= 1 && player.storage.zmfupingrenshengsiliushui < 3) return '发动';
                                            return '取消';
                                        })
                                        .set('prompt', `已发动【浮萍人生似流水】${get.translation(player.storage.zmfupingrenshengsiliushui)}次,是否继续发动？`);
                                }
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                } else {
                                    player.storage.zmt_np -= 30;
                                    player.storage.zmfupingrenshengsiliushui += 1;
                                    player.recover(player.maxHp);
                                }
                                ('step 2');
                                if (player.storage.zmfupingrenshengsiliushui >= 4) {
                                    player.die();
                                } else {
                                    if (player.storage.zmfupingrenshengsiliushui == 1) {
                                        game.playzm5('zmye');
                                        game.mp425('zmye');
                                    } else {
                                        game.playzm5(['zmfupingrenshengsiliushui1', 'zmfupingrenshengsiliushui2', 'zmfupingrenshengsiliushui3'].randomGet());
                                    }
                                }
                            },
                        },
                        zmfenyinyang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var red = target.countCards('h', { color: 'red' });
                                var black = target.countCards('h', { color: 'black' });
                                if (red == black) {
                                    event.goto(7);
                                }
                                ('step 1');
                                event.list = [];
                                player
                                    .chooseControl('多数', '少数', true, function () {
                                        if (get.attitude(player, target) > 0) return '多数';
                                        return '少数';
                                    })
                                    .set('prompt', `选择令${get.translation(target)}调整手牌的方式`);
                                ('step 2');
                                var red = target.countCards('h', { color: 'red' });
                                var black = target.countCards('h', { color: 'black' });
                                event.num = 0;
                                event.num1 = 0;
                                if (red > black) {
                                    event.num = red - black;
                                } else {
                                    event.num = black - red;
                                }
                                if (result.control == '多数') {
                                    event.list = [];
                                    if (red > black) {
                                        event.goto(3);
                                    } else {
                                        event.goto(5);
                                    }
                                }
                                if (result.control == '少数') {
                                    event.num1 = 1;
                                    if (red > black) {
                                        target
                                            .chooseToDiscard(event.num, 'h', true, function (card) {
                                                return get.color(card) == 'red';
                                            })
                                            .set('ai', function (card) {
                                                return -get.value(card);
                                            });
                                    } else {
                                        target
                                            .chooseToDiscard(event.num, 'h', true, function (card) {
                                                return get.color(card) == 'black';
                                            })
                                            .set('ai', function (card) {
                                                return -get.value(card);
                                            });
                                    }
                                }
                                ('step 3');
                                if (event.num1 == 1) {
                                    event.goto(7);
                                }
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'black' && !event.list.includes(card);
                                });
                                if (card) {
                                    event.list.push(card);
                                }
                                event.num--;
                                ('step 4');
                                if (event.num > 0) {
                                    event.goto(3);
                                } else {
                                    if (event.list.length) {
                                        target.gain(event.list, 'gain2');
                                    }
                                    event.goto(7);
                                }
                                ('step 5');
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'red' && !event.list.includes(card);
                                });
                                if (card) {
                                    event.list.push(card);
                                }
                                event.num--;
                                ('step 6');
                                if (event.num > 0) {
                                    event.goto(5);
                                } else {
                                    if (event.list.length) {
                                        target.gain(event.list, 'gain2');
                                    }
                                }
                                ('step 7');
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse') {
                                    evt.skipped = true;
                                }
                                event.finish();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var num0 = 0;
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') > 1;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.countCards('h') >= 1 && current != player;
                                        });
                                        var red0 = player.countCards('h', { color: 'red' });
                                        var black0 = player.countCards('h', { color: 'black' });
                                        if (red0 < black0) {
                                            num0 = black0 - red0;
                                        }
                                        if (red0 > black0) {
                                            num0 = red0 - black0;
                                        }
                                        if (num0 >= 2 && player.getHandcardLimit() > player.countCards('h')) {
                                            if (target != player) return 0;
                                            return 1;
                                        } else {
                                            if (num4 > 0) {
                                                if (target.countCards('h') <= 1) return 0;
                                                return -target.countCards('h');
                                            } else {
                                                if (num5 > 0) {
                                                    if (target == player) return 0;
                                                    return 1;
                                                }
                                                return 0;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmhunliangyi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:3',
                            trigger: {
                                global: 'discardEnd',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                if (!event.player.isAlive()) return false;
                                if (event.cards.length == 0) return false;
                                if (event.player == player) return false;
                                var num = 0;
                                var red = 0;
                                var black = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        } else {
                                            black++;
                                        }
                                    }
                                return (event.cards && event.cards.length == red) || event.cards.length == black;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                event.list = [];
                                var num = trigger.cards.length;
                                var cards = get.cards(num);
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        event.list.push(i);
                                    }
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        event.list.push(i);
                                    }
                                player.showCards(event.list, '混两仪');
                                ('step 1');
                                var red = 0;
                                var black = 0;
                                for (var i = 0; i < event.list.length; i++) {
                                    if (get.color(event.list[i]) == 'red') {
                                        red++;
                                    } else {
                                        black++;
                                    }
                                }
                                if (red == black && red > 0) {
                                    if (red > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(red);
                                }
                                if (red > black && black == 0) {
                                    game.playzm5('zmhunliangyi0');
                                }
                                if (red > black && black > 0) {
                                    if (black > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(black);
                                }
                                if (red < black && red == 0) {
                                    game.playzm5('zmhunliangyi0');
                                }
                                if (red < black && red > 0) {
                                    if (red > 1) {
                                        game.playzm5('zmfuhua');
                                        game.mp425('zmfuhua');
                                    } else {
                                        game.playzm5(['zmhunliangyi11', 'zmhunliangyi12'].randomGet());
                                    }
                                    trigger.player.damage(red);
                                }
                            },
                        },
                        zmhuiqishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:8',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmhuiqishi = [];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') == 0) {
                                    target.addSkill('zmhuiqishi_1');
                                    target.storage.zmhuiqishi_1 = player;
                                    event.finish();
                                } else {
                                    target.addSkill('zmhuiqishi_1');
                                    target.storage.zmhuiqishi_1 = player;
                                    var next = target.chooseButton(['可使用罗兰的一张手牌', player.getCards('h')]);
                                    next.set('ai', function (button) {
                                        return 20 - get.buttonValue(button);
                                    });
                                    next.filterButton = function (button) {
                                        return lib.filter.cardEnabled(button.link, target) && target.hasUseTarget(button.link);
                                    };
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    target.chooseUseTarget(result.links[0], false);
                                } else event.finish();
                            },
                            ai: {
                                threaten: 1.8,
                                order: 1,
                                effect: {
                                    target(card, player, target) {
                                        if ((card.name == 'tao' || card.name == 'wuzhong') && player == target && player.isDamaged()) return [1, 1];
                                    },
                                },
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h') == 0) return -1;
                                        var num;
                                        num = player.getHandcardLimit() - player.countCards('h');
                                        if (num > 0 || player.countCards('h') <= 2) {
                                            if (player.countCards('h', { name: 'tao' }) > 0 && target.hp <= 3 && target.isDamaged()) return 0;
                                            return -target.countCards('h');
                                        } else return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '灰',
                                    intro: {
                                        content: '你的下个出牌阶段开始时,罗兰可使用你至多2张手牌',
                                    },
                                    audio: 'ext:综漫季刊伍/audio:6',
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.num1 = 0;
                                        if (!player.storage.zmhuiqishi_1.isAlive() || player.countCards('h') == 0) {
                                            player.storage.zmhuiqishi_1 = undefined;
                                            player.removeSkill('zmhuiqishi_1');
                                            event.finish();
                                        } else {
                                            event.list = [];
                                            event.target = player.storage.zmhuiqishi_1;
                                            event.num = 2;
                                            player.storage.zmhuiqishi_1 = undefined;
                                            player.removeSkill('zmhuiqishi_1');
                                            player.storage.zmhuiqishi_2 = event.target;
                                            player.addTempSkill('zmhuiqishi_2');
                                        }
                                        ('step 1');
                                        event.num--;
                                        var next = event.target.chooseButton([`可使用${get.translation(player)}的一张手牌`, player.getCards('h')]);
                                        next.set('ai', function (button) {
                                            var num4 = game.countPlayer(function (current) {
                                                return get.attitude(event.target, current) < 0 && get.effect(current, { name: 'sha' }, player) > 0 && player.canUse({ name: 'sha' }, current);
                                            });
                                            if (player.countCards('h', { name: 'sha' }) <= 1 && num4 > 0 && get.attitude(event.target, player) > 0 && button.link.name == 'sha') return 0;
                                            if (get.attitude(event.target, player) > 0 && button.link.name != 'sha') return 0;
                                            return 20 - get.buttonValue(button);
                                        });
                                        next.filterButton = function (button) {
                                            var num0 = 0;
                                            if (event.list.length >= 1) {
                                                for (var i = 0; i < event.list.length; i++) {
                                                    if (event.list[i] == get.type(button.link, 'trick')) num0++;
                                                }
                                            }
                                            if (num0 > 0) return false;
                                            return lib.filter.cardEnabled(button.link, event.target) && event.target.hasUseTarget(button.link);
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            player.line(event.target, 'fire');
                                            event.list.push(get.type(result.links[0], 'trick'));
                                            event.target.chooseUseTarget(result.links[0], false);
                                        } else {
                                            if (event.num1 == 0) player.draw();
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.targets?.length) {
                                            event.num1++;
                                            if (event.num > 0 && player.countCards('h') > 0) {
                                                event.goto(1);
                                            } else {
                                                if (event.num1 == 0) player.draw();
                                                event.finish();
                                            }
                                        } else {
                                            if (event.num1 == 0) player.draw();
                                            if (event.num > 0 && player.countCards('h') > 0) {
                                                event.goto(1);
                                            }
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        globalTo(from, to) {
                                            if (from == to.storage.zmhuiqishi_2) return -Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        zmxiyan: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:6',
                            trigger: {
                                global: 'damageBegin',
                            },
                            check(event, player) {
                                var fakecard = { name: 'tiesuo' };
                                if (player.getUseValue(fakecard) > 0) return true;
                                if (player.hp <= 2 || player.countCards('h') <= 1) return true;
                                return false;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                player.chooseUseTarget('###视为使用一张无距离限制的【铁索连环】?否则你摸1张牌', { name: 'tiesuo' }, false, 'nodistance');
                                ('step 1');
                                if (!result.bool) {
                                    player.draw();
                                }
                            },
                        },
                        zmbumiedegongzhu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:1',
                            enable: 'phaseUse',
                            limited: true,
                            xiandingji: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'zm_10kuangfapuda' || player.name1 == 'zm_10kuangfapuda') {
                                    player.node.avatar.setBackgroundImage('extension/综漫季刊伍/image/变身法普妲.jpg');
                                } else if (player.name2 == 'zm_10kuangfapuda') {
                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/image/变身法普妲.jpg');
                                }
                                player.recover();
                                player.storage.zmbumiedegongzhu = true;
                                player.awakenSkill('zmbumiedegongzhu');
                                player.addSkill('zmbumiedegongzhu2');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.hp > 1) return 0;
                                        return 1;
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
                        },
                        zmyuwangdeyaolan: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                if (get.itemtype(event.cards) != 'cards') return false;
                                return get.position(event.cards[0]) == 'd' && event.card && get.type(event.card) != 'equip' && get.type(event.card) != 'delay';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 0;
                                var num2 = 0;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        num += get.value(i);
                                        if (i.name == 'wuxie' || i.name == 'tiesuo' || i.name == 'shan' || i.name == 'tao' || i.name == 'wuzhong' || i.name == 'zengbing' || i.name == 'shunshou') {
                                            num2++;
                                        }
                                    }
                                var num44 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && (current.getEquip(2) || current.getEquip(3) || (current.countCards('h') == 1 && !current.hasSkill('zmyuwangdeyaolan_1')));
                                });
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && (current.countCards('e') > 0 || (current.countCards('h') == 1 && !current.hasSkill('zmyuwangdeyaolan_1')));
                                });
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && (current.countCards('he') > 3 || current.countCards('hej') == 0 || current.countCards('j') > 0);
                                });
                                var num55 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.countCards('j') > 0;
                                });
                                player.chooseTarget(`是否将${get.translation(trigger.cards)}交给一名角色？若如此做须先弃置其区域内一张牌`, function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    if (num2 > 0) {
                                        var num7 = 1;
                                        if (get.attitude(player, target) > 0 && target.countCards('j') > 0) num7 = 6;
                                        return get.attitude(player, target) * num7;
                                    } else {
                                        if (_status.currentPhase == player) {
                                            if (num4 == 0 && num55 == 0 && num < 10) return 0;
                                            if (num55 > 0) {
                                                if (target.countCards('j') == 0) return 0;
                                                return get.attitude(player, target);
                                            } else {
                                                if (num44 > 0) {
                                                    var num3 = 0;
                                                    if (target.getEquip(2) || target.getEquip(3) || (target.countCards('h') == 1 && !target.hasSkill('zmyuwangdeyaolan_1'))) num3 = 9;
                                                    return -get.attitude(player, target) * num3;
                                                }
                                                if (num < 10) return 0;
                                                if (target.hasSkill('zmyuwangdeyaolan_1')) return 0;
                                                return get.attitude(player, target);
                                            }
                                            return 1;
                                        } else {
                                            if (num55 > 0) {
                                                if (target.countCards('j') == 0) return 0;
                                                return get.attitude(player, target);
                                            } else {
                                                if (num > 8 && num5 > 0) {
                                                    if (num > 14 || (i.name == 'shan' && player.countCards('h', { name: 'shan' }) == 0) || (i.name == 'tao' && player.countCards('h', { name: 'tao' }) == 0 && player.hp <= 3) || i.name == 'wuzhong') {
                                                        if (target != player) return 0;
                                                        return 1;
                                                    }
                                                    return get.attitude(player, target);
                                                } else {
                                                    if (num4 > 0) return -get.attitude(player, target);
                                                    return 0;
                                                }
                                            }
                                            return get.attitude(player, target);
                                        }
                                        return 0;
                                    }
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    if (get.attitude(player, result.targets[0]) > 0) {
                                        game.playzm5(['zmyuwangdeyaolan11', 'zmyuwangdeyaolan12', 'zmyuwangdeyaolan13', 'zmyuwangdeyaolan14'].randomGet());
                                    } else {
                                        game.playzm5(['zmyuwangdeyaolan21', 'zmyuwangdeyaolan22', 'zmyuwangdeyaolan23', 'zmyuwangdeyaolan24', 'zmyuwangdeyaolan25'].randomGet());
                                    }
                                    result.targets[0].addTempSkill('zmyuwangdeyaolan_1', 'roundStart');
                                    player.storage.zmt_np -= 10;
                                    player.line(result.targets, 'fire');
                                    event.target = result.targets[0];
                                    if (event.target.countCards('hej') > 0) {
                                        if (get.attitude(player, event.target) > 0) {
                                            player.discardPlayerCard(event.target, 1, 'hej', true);
                                        } else {
                                            player.discardPlayerCard(event.target, 1, 'hej', true).ai = ai.get.buttonValue;
                                        }
                                    }
                                    result.targets[0].gain(trigger.cards, 'gain2');
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmbumiedegongzhu2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                if (player.hp < player.maxHp) {
                                    player.recover();
                                    if (player.hp >= player.maxHp) {
                                        player.removeSkill('zmbumiedegongzhu2');
                                    }
                                } else {
                                    player.removeSkill('zmbumiedegongzhu2');
                                }
                            },
                            ai: {
                                nodamage: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (player.hasSkillTag('jueqing', false, target, true)) return;
                                        if (get.tag(card, 'damage') && target.hp > 1) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        zmtiziyishun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:10',
                            trigger: {
                                player: 'phaseZhunbei',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return player != current;
                                });
                                return num4 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 1], get.prompt('zmtiziyishun'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var num = 1;
                                        if (target.countCards('he') == 0 && get.attitude(player, target) < 0) num = 8;
                                        return -get.attitude(player, target) * num;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    event.current = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                if (event.current.countCards('he') == 0) {
                                    event.current.draw(2);
                                    event.current.loseHp();
                                }
                                ('step 3');
                                if (event.current.isAlive()) {
                                    if (event.current.countCards('he') == 0) {
                                        event.goto(2);
                                    }
                                    var str = '将一张牌交给' + get.translation(event.current.next);
                                    event.current.chooseCardButton(event.current.getCards('he'), true, str).set('ai', function (button) {
                                        return -get.value(button.link);
                                    });
                                } else {
                                    event.current = event.current.next;
                                    event.goto(2);
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.current.line(event.current.next);
                                    event.current.next.gain(result.links[0], event.current);
                                    event.current.$give(1, event.current.next);
                                    if (event.current.next != player) {
                                        event.current = event.current.next;
                                        event.goto(2);
                                    }
                                }
                            },
                        },
                        zmdalongduisha: {
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:5',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                if (player.storage.zmt_np < 15) return false;
                                /*   var respondTo=event.respondTo;
                         if(get.itemtype(event.cards)!='cards'&&get.itemtype(respondTo[1])!='cards') return false;
                              if(!respondTo) return false;
                              if(!event.cards||!respondTo[1].cards) return false;
                              if(event.cards.length==0||respondTo[1].cards.length==0) return false;*/
                                if (event.player.countCards('h') == 0 && player != event.player) return false;
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && event.respondTo[0].countCards('h') > 0 && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player && trigger.respondTo[0].countCards('h') == 0) {
                                    event.finish();
                                }
                                if (trigger.respondTo[0] == player && trigger.player.countCards('h') == 0) {
                                    event.finish();
                                }
                                event.num = 0;
                                var respondTo = trigger.respondTo;
                                event.list = [];
                                if (respondTo[1].cards && respondTo[1].cards.length) {
                                    for (var i = 0; i < respondTo[1].cards.length; i++) {
                                        if (respondTo[1].i.number > event.num) event.num = respondTo[1].i.number;
                                        event.list.push(respondTo[1].i);
                                    }
                                }
                                if (trigger.cards && trigger.cards.length) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (i.number > event.num) event.num = i.number;
                                            event.list.push(i);
                                        }
                                }
                                ('step 1');
                                if (trigger.player == player && trigger.respondTo[0].countCards('h') == 0) {
                                    event.finish();
                                }
                                if (trigger.respondTo[0] == player && trigger.player.countCards('h') == 0) {
                                    event.finish();
                                }
                                if (event.list.length) {
                                    if (trigger.respondTo[0] == player) {
                                        player
                                            .chooseCardButton(event.list, 1, `是否用其中一张牌与${get.translation(trigger.player)}拼点？若拼点胜利则对其造成一点伤害`)
                                            .set('filterButton', function (button) {
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                if (button.link.number < 7) return 0;
                                                if (event.num + 2 / trigger.player.countCards('h') <= 4 && event.num < 10) return 0;
                                                if (get.attitude(player, trigger.player) > 0) return 0;
                                                return button.link.number;
                                            });
                                    } else {
                                        player
                                            .chooseCardButton(event.list, 1, `是否用其中一张牌与${get.translation(trigger.respondTo[0])}拼点？若拼点胜利则对其造成一点伤害`)
                                            .set('filterButton', function (button) {
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                if (button.link.number < 7) return 0;
                                                if (event.num + 2 / trigger.respondTo[0].countCards('h') <= 4 && event.num < 10) return 0;
                                                if (get.attitude(player, trigger.respondTo[0]) > 0) return 0;
                                                return button.link.number;
                                            });
                                    }
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.storage.zmt_np -= 15;
                                    if (trigger.respondTo[0] == player) {
                                        var next = player.chooseToCompare(trigger.player);
                                        next.set('small', true);
                                        if (!next.fixedResult) next.fixedResult = {};
                                        next.fixedResult[player.playerid] = result.links[0];
                                    } else {
                                        var next = player.chooseToCompare(trigger.respondTo[0]);
                                        next.set('small', true);
                                        if (!next.fixedResult) next.fixedResult = {};
                                        next.fixedResult[player.playerid] = result.links[0];
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.bool && result.winner == player) {
                                    if (trigger.respondTo[0] == player) {
                                        trigger.player.damage();
                                    } else {
                                        trigger.respondTo[0].damage();
                                    }
                                } else {
                                    var num = result.num1 - result.num2;
                                    if (num < 0) {
                                        if (trigger.respondTo[0] == player) {
                                            player.damage(1, trigger.player);
                                        } else {
                                            player.damage(1, trigger.respondTo[0]);
                                        }
                                    }
                                }
                            },
                            group: ['zmtleiren', 'zmtlongxue'],
                        },
                        zmfaminggongchang: {
                            group: ['zmtleiren', 'zmtshensheng', 'zmfaminggongchang_1'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var num1 = 0;
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    var type = get.type(hs[i]);
                                    if (type == 'equip') {
                                        num1++;
                                    }
                                }
                                return num1 > 0;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                var hs = player.getCards('he');
                                for (var i = 0; i < hs.length; i++) {
                                    var type = get.type(hs[i]);
                                    if (type == 'equip') {
                                        event.list.push(hs[i]);
                                    }
                                }
                                if (event.list.length == 0) event.finish();
                                ('step 1');
                                var dialog = ui.create.dialog('须使用其中一张牌,若你对应装备栏内有牌则爱迪生回复一点体力', event.list);
                                target.chooseButton(1, dialog, true).set('ai', function (button) {
                                    if (button.link.name == 'muniu') return 0;
                                    var sub = get.subtype(button.link);
                                    if (player.hp <= 2 && player.isDamaged() && target.isEmpty(sub) && get.attitude(target, player) > 0) return 999;
                                    return target.getUseValue(button.link);
                                }).filterButton = function (button) {
                                    return true;
                                };
                                ('step 2');
                                if (result.links?.length) {
                                    var sub = get.subtype(result.links[0]);
                                    if (!target.isEmpty(sub) && player.isDamaged()) {
                                        if (target == player && get.position(result.links[0]) == 'e') {
                                        } else {
                                            game.playzm5(['zmfaminggongchang11', 'zmfaminggongchang12', 'zmfaminggongchang14', 'zmfaminggongchang13'].randomGet());
                                            player.recover();
                                        }
                                    }
                                    target.useCard(result.links[0], target);
                                }
                            },
                            ai: {
                                threaten: 1,
                                order(skill, player) {
                                    return 1;
                                },
                                result: {
                                    player(player, target) {
                                        var mode = get.mode();
                                        var num1 = 0;
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            var type = get.type(hs[i]);
                                            if (type == 'equip') {
                                                num1++;
                                            }
                                        }
                                        if (mode == 'identity' && player.identity == 'zhu' && game.roundNumber == 1) return 0;
                                        if (get.attitude(player, target) <= 0) return 0;
                                        if (target.hp >= player.hp && player.countCards('e') == num1) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        var num2 = 5 - target.countCards('e');
                                        if (num2 < 0) num2 = 0;
                                        if (get.attitude(player, target) <= 0) {
                                            num2 = 0;
                                            var num = 0;
                                        } else {
                                            var num = get.attitude(player, target);
                                        }
                                        var list = [];
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            var type = get.type(hs[i]);
                                            if (type == 'equip') {
                                                list.push(hs[i]);
                                            }
                                        }
                                        var num0 = 0;
                                        if (list.length >= 1) {
                                            for (var i = 0; i < list.length; i++) {
                                                if (target.getUseValue(list[i]) > num0) {
                                                    num0 = target.getUseValue(list[i]);
                                                }
                                            }
                                        }
                                        if (target.hp >= player.hp && list.length == player.countCards('e')) {
                                            num0 = 0;
                                        }
                                        if (num0 <= 0 && (player.hp > 2 || !player.isDamaged())) return 0;
                                        return num * num2 * num0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊伍/audio:9',
                                    trigger: {
                                        player: ['phaseZhunbeiBegin'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var name = get.inpile('equip').randomGet();
                                        if (name) {
                                            event.card = game.createCard(name);
                                            player.showCards(event.card, '发明工厂');
                                        } else event.finish();
                                        ('step 1');
                                        var num1 = 0;
                                        game.filterPlayer(function (current) {
                                            if (current.countCards('e') > 0) {
                                                var es = current.getCards('e');
                                                for (var i = 0; i < es.length; i++) {
                                                    if (es[i].name == event.card.name) num1++;
                                                }
                                            }
                                        });
                                        if (num1 == 0) {
                                            player.gain(event.card, 'gain2');
                                        }
                                        var sub = get.subtype(event.card);
                                        if (player.storage.zmt_np >= 15 && !player.isEmpty(sub)) {
                                            player
                                                .chooseControl('确定', 'cancel2', function () {
                                                    return '确定';
                                                })
                                                .set('prompt', '是否消耗15点能量重复此流程？');
                                        } else event.finish();
                                        ('step 2');
                                        if (result.control == '确定') {
                                            player.storage.zmt_np -= 15;
                                            event.goto(0);
                                        }
                                    },
                                },
                            },
                        },
                        zhepingdexiangzheng: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊伍/audio:9',
                            trigger: {
                                global: 'damageBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.source == undefined) return false;
                                if (event.source.countCards('he') == 0) return false;
                                if (event.player.countCards('he') == 0) return false;
                                if (player.countCards('he') == 0) return false;
                                return player.storage.zmt_np >= 20 && event.num > 0;
                            },
                            check(event, player) {
                                if (event.num > 2) return false;
                                if (!player.hasSkill('zmoneforall_1')) {
                                    if (event.num - 1 > event.player.hp) return false;
                                    return get.attitude(player, event.source) <= 0 && get.attitude(player, event.player) > 0;
                                } else return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                event.list = [];
                                ('step 1');
                                if (trigger.player.countCards('he') > 0) {
                                    player.line(trigger.player, { color: [255, 204, 70] });
                                    trigger.player.chooseCard(1, 'he', true).set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var type = get.type(result.cards[0], 'trick');
                                    if (!event.list.includes(type)) {
                                        event.list.push(type);
                                    }
                                    trigger.player.lose(result.cards[0]);
                                    trigger.player.$throw(result.cards[0]);
                                    trigger.player.draw();
                                }
                                ('step 3');
                                if (trigger.source.countCards('he') > 0) {
                                    player.line(trigger.source, { color: [255, 204, 70] });
                                    trigger.source.chooseCard(1, 'he', true).set('ai', function (card) {
                                        var type = get.type(card, 'trick');
                                        if (!event.list.includes(type) && get.attitude(trigger.source, trigger.player) > 0 && event.list.length + 2 > trigger.num) return 1;
                                        if (event.list.includes(type) && get.attitude(trigger.source, trigger.player) <= 0 && event.list.length + 2 > trigger.num) return 1;
                                        return -get.value(card);
                                    });
                                }
                                ('step 4');
                                if (result.cards?.length) {
                                    var type = get.type(result.cards[0], 'trick');
                                    if (!event.list.includes(type)) {
                                        event.list.push(type);
                                    }
                                    trigger.source.lose(result.cards[0]);
                                    trigger.source.$throw(result.cards[0]);
                                    trigger.source.draw();
                                }
                                ('step 5');
                                if (player.countCards('he') > 0) {
                                    player.chooseCard(1, 'he', true).set('ai', function (card) {
                                        if (!event.list.includes(type) && event.list.length + 1 > trigger.num && event.list.length <= trigger.num) return 1;
                                        return -get.value(card);
                                    });
                                }
                                ('step 6');
                                if (result.cards?.length) {
                                    var type = get.type(result.cards[0], 'trick');
                                    if (!event.list.includes(type)) {
                                        event.list.push(type);
                                    }
                                    player.lose(result.cards[0]);
                                    player.$throw(result.cards[0]);
                                    player.draw();
                                }
                                ('step 7');
                                if (event.list.length > trigger.num) {
                                    if (player.hasSkill('zmoneforall_1')) {
                                        player.chooseControl('加一', '减一').set('prompt', `令${get.translation(trigger.player)}受到的${get.translation(trigger.num)}点伤害+1或-1？`).ai = function (event, player) {
                                            if (get.attitude(player, trigger.player) <= 0) return '加一';
                                            if (get.attitude(player, trigger.player) > 0) return '减一';
                                            return '减一';
                                        };
                                    } else {
                                        game.playzm5(['zmhepingdexiangzheng11', 'zmhepingdexiangzheng12', 'zmhepingdexiangzheng13', 'zmhepingdexiangzheng14', 'zmhepingdexiangzheng15', 'zmhepingdexiangzheng16', 'zmhepingdexiangzheng17', 'zmhepingdexiangzheng18'].randomGet());
                                        trigger.num--;
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 8');
                                if (result.control == '加一') {
                                    game.playzm5(['zmhepingdexiangzheng21', 'zmhepingdexiangzheng22', 'zmhepingdexiangzheng23', 'zmhepingdexiangzheng24', 'zmhepingdexiangzheng25', 'zmhepingdexiangzheng26', 'zmhepingdexiangzheng27'].randomGet());
                                    trigger.num++;
                                }
                                if (result.control == '减一') {
                                    game.playzm5(['zmhepingdexiangzheng11', 'zmhepingdexiangzheng12', 'zmhepingdexiangzheng13', 'zmhepingdexiangzheng14', 'zmhepingdexiangzheng15', 'zmhepingdexiangzheng16', 'zmhepingdexiangzheng17', 'zmhepingdexiangzheng18'].randomGet());
                                    trigger.num--;
                                }
                            },
                        },
                        zmoneforall: {
                            nobracket: true,
                            enable: 'phaseUse',
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
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current != player;
                                });
                                var list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
                                if (num4 == 0) {
                                    var list1 = ['2', '2', '3', '4'];
                                } else {
                                    var list1 = ['3', '4'];
                                }
                                player
                                    .chooseControl(list, function () {
                                        return list1.randomGet();
                                    })
                                    .set('prompt', '选择一个数字,对应轮后你死亡');
                                ('step 1');
                                if (result.control == '1') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 1;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 10;
                                    player.draw(10);
                                }
                                if (result.control == '2') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 2;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 9;
                                    player.draw(9);
                                }
                                if (result.control == '3') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 3;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 8;
                                    player.draw(8);
                                }
                                if (result.control == '4') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 4;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 7;
                                    player.draw(7);
                                }
                                if (result.control == '5') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 5;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 6;
                                    player.draw(6);
                                }
                                if (result.control == '6') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 6;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 5;
                                    player.draw(5);
                                }
                                if (result.control == '7') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 7;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 4;
                                    player.draw(4);
                                }
                                if (result.control == '8') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 8;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 3;
                                    player.draw(3);
                                }
                                if (result.control == '9') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 9;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 2;
                                    player.draw(2);
                                }
                                if (result.control == '10') {
                                    game.mp425('zmou1');
                                    ui.backgroundMusic.src = 'extension/综漫季刊伍/audio/背景音乐欧尔麦特激昂.mp3';
                                    if (player.name == 'zm_04dououermaite' || player.name1 == 'zm_04dououermaite') {
                                        player.node.avatar.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    } else if (player.name2 == 'zm_04dououermaite') {
                                        player.node.avatar2.setBackgroundImage('extension/综漫季刊伍/变身欧尔麦特.png');
                                    }
                                    player.addSkill('zmoneforall_1');
                                    player.storage.zmoneforall_1 = 10;
                                    player.addSkill('zmoneforall_2');
                                    player.storage.zmoneforall_2 = 1;
                                    player.draw(1);
                                }
                                ('step 2');
                                player.disableSkill('zmoneforall_2', ['zmoneforall']);
                            },
                            ai: {
                                order: 6,
                                result: {
                                    player(player) {
                                        var num55 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0;
                                        });
                                        var num555 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.hp <= 3;
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current != player;
                                        });
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && player.canUse('sha', current) && get.effect(current, { name: 'sha' }, player, player) > 0;
                                        });
                                        if (num55 == 1 && num5 == 1 && num555 == 1) {
                                            return 1;
                                        } else {
                                            if ((num4 > 0 && player.hp > 1) || (num4 == 0 && player.hp > 2)) return 0;
                                            if ((num5 == 0 && player.hp > 1) || (num5 == 0 && player.hp == 1 && num4 > 0)) return 0;
                                            return 1;
                                        }
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '燃',
                                    intro: {
                                        content: '#轮后你死亡',
                                    },
                                    init(player) {
                                        player.storage.zmoneforall_1 = 0;
                                        player.markSkill('zmoneforall_1');
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    _priority: 60,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmoneforall_1 -= 1;
                                        ('step 1');
                                        if (player.storage.zmoneforall_1 <= 0) {
                                            player.storage.zmoneforall_1 = 0;
                                            player.removeSkill('zmoneforall_1');
                                            player.die();
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return player.storage.zmoneforall_2;
                                        },
                                    },
                                },
                            },
                        },
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
                    },
                    translate: {
                        zm_13lingjiantongyinga: '间桐樱',
                        zm_07keaidisheng: '爱迪生',
                        zm_14linaierajifu: '艾尔阿吉芙',
                        zm_07keluosaita: '罗塞塔',
                        zm_07keluna: '露娜',
                        zm_03qiangweila: '薇拉',
                        zm_03qiangyishena: '伊舍那',
                        zm_08shaxidekagainuo: '希德卡盖诺',
                        zm_07keweierwei: '维尔薇',
                        zm_12tishiyuanzhilvzhe: '始源之律者',
                        zm_10kuangkesimo: '科斯魔',
                        zm_10kuangqianjie: '千劫',
                        zm_12tisu: '苏',
                        zm_01jianying: '樱',
                        zm_04doufuhua: '符华',
                        zm_07keluolan: '罗兰',
                        zm_10kuangfapuda: '法普妲',
                        zm_05qizhenlong: '珍珑',
                        zm_11ruye: '叶',
                        zm_12tiyilishabai: '伊丽莎白',
                        zm_05qikalin: '卡琳',
                        zm_03qiangannita: '安妮塔',
                        zm_11ruyigulabojin: '伊古拉博金',
                        zm_04douaojia: '奥加',
                        zm_11ruyifu: '伊芙',
                        zm_10kuangdan: '丹',
                        zm_20shenyouhabahe: '友哈巴赫',
                        zm_04dououermaite: '欧尔麦特',
                        zm_13linglouhu: '漏瑚',
                        zm_13lingzhenren: '真人',
                        zmhuiqishi: '灰骑士',
                        zmhuiqishi_info: '出牌阶段限一次 <br>你可令一名其他角色选择你的1张手牌使用;<br>&nbsp若如此做,其下个出牌阶段开始时你可使用其2张不同类型的手牌,且该回合你与其计算距离为1,之后若你未以此法使用其手牌则其摸1张牌.',
                        zmxiyan: '戏炎',
                        zmxiyan_info: '当有角色受到伤害时,你可消耗20点能量视为使用或重铸了1张【铁索连环】.',
                        zmbumiedegongzhu: '不灭的公主',
                        zmbumiedegongzhu_info: '限定技<br>出牌阶段,你可回复1点体力,之后每当你的回合开始时回复1点体力直到你的体力值达到体力上限.',
                        zmyuwangdeyaolan: '价值的化身',
                        zmyuwangdeyaolan_info: '当你使用的牌结算并进入弃牌堆后,你可消耗10点能量将该牌交给一名角色,且在这之前你弃置其区域内的1张牌.',
                        zmbumiedegongzhu2: '不灭的公主',
                        zmbumiedegongzhu2_info: '',
                        zmtiziyishun: '提子一瞬',
                        zmtiziyishun_info: '准备阶段你可指定一名其他角色;<br>&nbsp若如此做,自其开始其与因此法获得牌的角色须将1张牌交给下家,直到你因此法获得牌为止.<li>若须以此法给出牌的角色没有牌,则其失去1点体力摸2张牌.',
                        zmdalongduisha: '大龙对杀',
                        zmdalongduisha_info: '当你/其他角色响应了对方的牌后,你可消耗15点能量用此时双方互相响应的牌中的1张与对方拼点,点数较小的一方受到对方1点伤害.',
                        zmwuweizhuanbian: '无为转变',
                        zmwuweizhuanbian_info: '当你使用【杀】指定其他角色/被其他角色使用【杀】指定为目标时,若对方手牌中有【闪】则你可用1张牌交换其中1张【闪】.',
                        zmzibiyuandunguo: '自闭圆顿裹',
                        zmzibiyuandunguo_info: '出牌阶段开始时,你可消耗至少50点能量激活此技能至回合结束; <li>此技能生效期间你手牌中的【闪】均视为【杀】,且使用杀无次数限制;<li>此技能生效期间你使用的【杀】首次造成伤害时,受到伤害的角色直到你下次激活此技能前当体力变化时须弃置1张牌.',
                        zmdadihuo: '大地火',
                        zmdadihuo_info: '当你使用【杀】指定其他角色为目标或成为其他角色使用【杀】的目标时,若双方均有手牌则你可令此杀改为【火攻】结算.',
                        zmgaiguantieweishan: '盖棺铁围山',
                        zmgaiguantieweishan_info: '出牌阶段开始时 你可消耗40点能量激活此技能至你的下回合开始;<li>此技能生效期间你使用的【火攻】不可响应,且效果中的[弃置手牌]改为[展示牌],造成的伤害+1.<li>此技能生效期间,当场上产生火焰伤害后你摸与伤害量等量的牌.',
                        zmgelintonghua: '格林童话',
                        zmgelintonghua_info: '出牌阶段限一次 <br>你可展示牌堆中1张<b><font color=Wheat>[不带有伤害标签的锦囊牌]</font></b>,若场上角色手牌中没有同名牌则你可使用该牌,如未使用展示牌则你弃置该牌.',
                        zmlanglaile: '狼来了',
                        zmlanglaile_info: '其他角色造成伤害后,你可消耗20点能量令其交给你1张手牌,否则其翻面且直到你的下个回合结束前〖格林童话〗中<b><font color=Wheat>[不带有伤害标签的锦囊牌]</font></b>改为<b><font color=IndianRed>[带有伤害标签的锦囊牌]</font></b>.',
                        zmshehuitouxi: '社会透析',
                        zmshehuitouxi_info: '出牌阶段限一次<br>若最后进入弃牌堆的牌之花色本回合场上角色已使用或打出了至少2次,则你可获得该牌.',
                        zmqiyuebangjia: '契约绑架',
                        zmqiyuebangjia_info: '其他角色使用【杀】指定目标时,你可消耗20点能量摸1张牌后令其猜测此杀是否会造成伤害;<br>&nbsp若其猜测错误,其每次摸牌后你可查看并获得其中1张牌,直到你因此法获得该角色的牌数达到其本局猜错次数的最大值时,效果结束.',
                        zmshajingbaquan: '杀鲸霸拳',
                        zmshajingbaquan_info: '当你使用【杀】指定目标时,可消耗30点能量弃置任意张花色各不相同的手牌令目标弃置等量的基本牌,之后此杀伤害变为其少弃置的牌数<b><font color=DarkGray>(至少为1)</font></b>',
                        zmqiyuebangjia2: '契约绑架',
                        zmqiyuebangjia2_info: '',
                        zmcichangzhuandong: '磁场转动',
                        zmcichangzhuandong_info: '出牌阶段限一次<br>你可进行4次判定,每次判定牌亮出后可选择获得之,否则进行下次判定.<br>&nbsp若以此法亮出的4张判定牌花色各不相同,则你本局以此法可获得的牌数上限+1.<li>当你进入濒死状态时或其他角色死亡时,此技能执行1次.',
                        zmyuxizhixia: '愚戏之匣',
                        zmyuxizhixia_info: '出牌阶段限一次 <br>你可消耗25点能量将牌堆顶的1张牌展示并交给一名其他角色;<br>&nbsp因此法获得牌的角色须将这些牌与1张点数更大的牌展示并交给一名其他角色,否则根据其获得的牌数你对其造成等量的伤害.',
                        zmluoxuanchangyan: '螺旋长宴',
                        zmluoxuanchangyan_info: '任意角色的回合结束时,你可用1张牌交换1张点数更大的、本回合因使用进入弃牌堆的牌;<br>&nbsp如此做后,当场上有点数与交换牌之点数差相同的牌被使用时你获得该牌,且在这之前此技能失效.',
                        zmluoxuanchangyan_1: '螺旋长宴',
                        zmluoxuanchangyan_1_info: '',
                        zmzhenwozhichi: '真我之匙',
                        zmzhenwozhichi_info: '出牌阶段 <br>你可将1张手牌交给一名手牌少于你的角色,或令一名手牌多于你的角色将1张手牌交给你.<br>&nbsp若如此做后你与选择的角色手牌数相同,本回合你不能发动此技能.',
                        zmzhiyiwuxia: '致以无瑕的时代',
                        zmzhiyiwuxia_info: '出牌阶段开始时 你可消耗50点能量激活此技能,此技能生效期间:<li>场上角色执行阶段时,若其手牌数小于体力上限则其跳过该阶段并摸1张牌.<li>其他角色获得或失去牌后,若其手牌数与你相同则你选择令其失去/回复1点体力;当你选择3次后清空能量并结束效果.',
                        zmxuguangcanji: '旭光残迹',
                        zmxuguangcanji_info: '出牌阶段 <br>你可消耗20点能量选择手牌中1张基本牌或锦囊牌进行记录/替换并增加1点体力上限;<li>你至多以此法记录3张牌,分别对应J.Q.K;<li>当你对以上某项进行操作后,你手牌中对应点数的牌均视为相应记录牌,之后你根据记录牌总数摸等量的牌.',
                        zmguochongchaobian: '过重超变',
                        zmguochongchaobian_info: '觉醒技<br>当你进入濒死状态时你将体力值回复至体力上限,之后本局你无法再以〖旭光残迹〗进行记录/替换.',
                        zmaomie: '鏖灭' /*此设计来自3d吧赛作品*/,
                        zmaomie_info: '锁定技<br>当你使用【杀】造成伤害时,你须进行1次【闪电】判定,之后你将伤害值调整至你本局历史最高值+1.',
                        zmfeitian: '非天',
                        zmfeitian_info: '觉醒技<br>当你受到伤害后,若你的能量达到30点则清空能量令本局你触发〖鏖灭〗的事件增加:<strong><b><font color=LightBLue>[准备阶段--你的手牌数]</font></b></strong>.',
                        zmyinguozhuanlun: '因果转轮',
                        zmyinguozhuanlun_info: '出牌阶段 <br>你可将1张未以此法放置的花色的牌置于武将牌上;<br>&nbsp当其他角色使用牌指定除其以外的角色为唯一目标时,你可弃置两张以此法放置的、与该牌颜色相同的牌将目标改为其自身.',
                        zmtianhui: '天慧',
                        zmtianhui_info: '一名角色回合开始时,你可消耗10点能量暗中指定1个花色;<br>&nbsp若如此做,该角色回合结束时根据本回合场上角色使用对应花色牌的总数,你摸等量的牌后将你左手边第1张牌转化为对应花色.',
                        zmwanxiangwuming: '万象无明',
                        zmwanxiangwuming_info: '攻击范围内包含你的角色之出牌阶段开始时,你可消耗15点能量令其他角色于该回合内无法使用或打出你手牌中的同名牌.',
                        zmchanayidao: '刹那一刀',
                        zmchanayidao_info: '出牌阶段限一次<br>你可视为对一名合理的角色使用了1张【冰杀】,若该杀被响应则此技能失效至你累计响应其他角色2张牌为止.',
                        zmchanayidao2: '刹那回复',
                        zmchanayidao2_info: '',
                        zmfenyinyang: '分阴阳',
                        zmfenyinyang_info: '出牌阶段限一次 <br>你可令一名角色将手牌中黑红两色的牌调整至与其中较多/较少的一色数量相同,之后你结束当前阶段.',
                        zmhunliangyi: '混两仪',
                        zmhunliangyi_info: '其他角色弃置牌时,若弃牌均为同一颜色则你可消耗20点能量展示这些牌与牌堆顶等量的牌;<br>&nbsp若如此做,展示牌中成对的颜色每有1组则你对该角色造成1点伤害.',
                        zmdizuizhiqiang: '涤罪之枪',
                        zmdizuizhiqiang_info: '回合开始时,你可激活/关闭此技能;<li>此技能生效期间当你获得带有伤害标签的牌时你将之置于武将牌上;之后你可移除以此法放置的牌对一名角色造成总牌数/2数量的伤害,向下取整.<li>当你开关此技能后,你清空能量摸能量值/15数量的牌.',
                        zmlinliezhixin: '凛冽之心',
                        zmlinliezhixin_info: '出牌阶段 <br>你可重铸手牌中1张本回合未以此法选择过的花色的牌;<br>&nbsp此技能结算后,若你本回合以此法重铸了所有花色的牌,你回复1点体力.',
                        zmshenggewangluo: '升格网络',
                        zmshenggewangluo_info: '当你使用或打出的牌进入弃牌堆后,若最后进入弃牌堆的2张牌与下张进入弃牌堆的牌均为同颜色,届时你可视为使用了这3张牌中的1张同名牌.',
                        zmyinmianhuiguan: '银冕辉冠',
                        zmyinmianhuiguan_info: '出牌阶段限一次 <br>你可令一名有手牌且手牌不多于你的角色将其手牌当作【无中生有】使用;<br>&nbsp若如此做时你的能量达到30点,则你清空能量令以此法转化的【无中生有】目标改为你.',
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
                        zmyingshou: '影守',
                        zmyingshou_info: '<li>你可将未以此法转化过的类型的牌当作【杀/闪】使用或打出;<br>&nbsp当你以此法转化了3种类型的牌后,你重置此技能并摸1张牌.<li>准备阶段若你以〖极夜〗放置了牌,则你可消耗20点能量令一名其他角色弃置点数小于该牌的牌,之后该牌点数-1.',
                        zmjiye: '极夜',
                        zmjiye_info: '使命技<br>合理轮数内,于出牌阶段将1张点数为全场角色手牌中唯一最大、且大于游戏轮数的手牌置于武将牌上.<li>成功:<br>&nbsp你将体力回复至体力上限,〖影守〗的摸牌数改为你重置该技能的次数.<li>失败:<br>你失去全部体力.',
                        zmjiye2: '极夜',
                        zmjiye2_info: '',
                        zmhexinzhanlue: '核心战略',
                        zmhexinzhanlue_info: '出牌阶段,若你的武将牌上未以此法放置牌则你可将1张普通锦囊牌置于武将牌上;<li>每回合限一次,你可视为使用了1张以此法放置的牌.<li>当你使用的锦囊牌被其他角色响应时,该角色获得你以此法放置的牌.',
                        zmzhanzhenglun: '战争论',
                        zmzhanzhenglun_info: '结束阶段 你可消耗25点能量指定一名角色;<br>&nbsp若如此做,直到你的下个回合开始前其为场上角色使用【杀】的唯一合理目标,且处于所有角色的攻击范围内.',
                        zmhexinzhanlue_1: '核心战略',
                        zmhexinzhanlue_1_info: '',
                        zmhexinzhanlue_0: '核心战略',
                        zmhexinzhanlue_0_info: '',
                        zmzhanzhenglun1: '战争论',
                        zmzhanzhenglun1_info: '',
                        zmzhanzhenglun2: '战争论',
                        zmzhanzhenglun2_info: '',
                        zmshanyaodeyuhui: '闪耀的余晖',
                        zmshanyaodeyuhui_info: '你使用【杀】指定体力值大于你的角色时,可令此杀伤害基数+1;<br>&nbsp若如此做后此杀未造成伤害,则你失去1点体力.',
                        zmhuanghunqishi: '黄昏骑士',
                        zmhuanghunqishi_info: '&nbsp①体力值小于你的角色对你使用的【杀】不可响应.<br>&nbsp②当你的手牌数/体力值归零时,你可消耗20点能量使另一项+2.<br>&nbsp③当你死亡时,击杀你的角色获得效果①.',
                        zmhuanghunqishi2: '黄昏骑士',
                        zmhuanghunqishi2_info: '体力值小于你的角色对你使用的【杀】不可响应.',
                        zmfaminggongchang: '发明工厂',
                        zmfaminggongchang_info: '<li>锁定技 准备阶段你随机创造1张装备牌并展示;若场上没有同名牌则你获得之.<br>&nbsp若你装备了与展示牌同类型的牌,结算后你可消耗15点能量重复此流程.<li>出牌阶段限一次 你可令一名角色查看并使用1张你区域内的装备牌,若其应因此更换装备牌则你回复1点体力.',
                        zmquanzhiquanneng: '全知全能',
                        zmquanzhiquanneng_info: '<li>牌堆顶的1张牌始终对你可见,且需要时你可消耗5点能量使用或打出该牌.<li>觉醒技<br>若你累计回复的体力值不小于你的体力上限,此技能改为:<b><font color=IndianRed>[需要时你可使用或打出所有角色的手牌]</font></b>',
                        zmlingzizhipei: '灵子支配',
                        zmlingzizhipei_info: '当有角色被【杀】指定为目标时,若你非此杀来源则你可令此杀来源重铸1张手牌;<br>&nbsp若重铸后的牌为基本牌则此杀失效,否则直到你下回合开始前此技能失效.',
                        zmquanzhiquanneng2: '全知全能',
                        zmquanzhiquanneng2_info: '',
                        zmlingzizhipei2: '灵子支配',
                        zmlingzizhipei2_info: '',
                        zmquanzhiquanneng0: '全知全能',
                        zmquanzhiquanneng0_info: '需要时你可使用或打出所有角色的手牌.',
                        zmwanxiangshengmiedeqidi: '万象生灭的启迪',
                        zmwanxiangshengmiedeqidi_info: '你无法使用【杀/闪/桃/酒】.<li>当其他角色使用【杀/闪/桃/酒】时,你解除对应牌之使用限制,且于需要时可视为使用了1张对应牌.<li>当你以此法使用过以上某种牌后,你重新回到无法使用对应牌的状态.',
                        zmtapazhihuobumie: '塔帕之火不灭',
                        zmtapazhihuobumie_info: '出牌阶段<br>你可消耗20点能量展示1张手牌并指定一名角色;若如此做,该角色弃置同名称、同花色的牌.<li>若你本局内使用过【杀/闪/桃/酒】,其他角色因此法弃置牌后你可用展示牌交换这些牌或将展示牌交给该角色并对其造成1点伤害.',
                        zmgainiangailiang: '概念改良',
                        zmgainiangailiang_info: '出牌阶段 <br>你可将2张装备牌合成为1件特殊装备牌,合成后保留素材装备全部效果,攻击距离叠加.',
                        zmshenyuanmidian: '深渊秘典',
                        zmshenyuanmidian_info: '当你使用牌造成伤害时,你可将此牌交给一名此牌的目标;<br>&nbsp若如此做,该角色须弃置手牌区与装备区内与此牌颜色不同的牌,且若弃牌数不小于你的体力值则你回复1点体力.',
                        zmkuayuemenfeizhiwu: '跨越门扉之物',
                        zmkuayuemenfeizhiwu_info: '出牌阶段开始时 你可消耗至少40点能量从1～13中随机获取5个数字,之后展示牌堆顶13张牌;<br>&nbsp若如此做,你获得展示牌中点数与获取数字相同的牌,且你每以此法获得2张牌则可对一名其他角色造成1点伤害.',
                        zmtianzaixinshi: '天灾信使',
                        zmtianzaixinshi_info: '出牌阶段开始时,你可令一名角色展示1张手牌;<br>&nbsp若回合结束时展示牌已离开原区域则该角色摸1张牌,否则其弃置该牌.',
                        zmyishunkuiliu: '一瞬溃流',
                        zmyishunkuiliu_info: '当其他角色进行以下事件时,你可消耗25点能量代替之并令其执行相应事件的后一项:<br>&nbsp①弃置部分手牌.<br>&nbsp②弃置全部手牌.<br>&nbsp③受到最大限度的非致命伤害.<br>&nbsp④受到最小限度的致命伤害.',
                        zmheizhishengbei: '黑之圣杯',
                        zmheizhishengbei_info: '<li>当有角色受到超过1点的伤害后,你可将1张黑色牌当作【桃】对一名角色使用.<li>出牌阶段开始时,你可消耗25点能量展示场上手牌中黑色牌最多的一名角色之手牌,之后获得其中黑色牌的复制牌,且本回合你使用黑色牌无数量限制.',
                        zmezhaozhihua: '恶兆之花',
                        zmezhaozhihua_info: '当你对其他角色造成伤害后,你可查看其手牌并控制其使用其中1张牌;<br>&nbsp因此法使用的牌若造成伤害则同样可触发此技能.',
                        zmxianzhenzhe: '陷阵者',
                        zmxianzhenzhe_info: '锁定技<br>当你受到或造成伤害后,你将手牌数调整至与体力值相同.<br>&nbsp若你因此法弃置了牌,则你可将这些牌当作【杀】对一名本回合未以此法指定过的合理角色使用.',
                        zmleimingjinjun: '雷鸣进军',
                        zmleimingjinjun_info: '出牌阶段限一次 <br>你可消耗40点能量令一名未处于此效果中的角色之后2次使用【杀】时,若该杀造成了伤害则其回复1点体力.',
                        zmrenjianshige: '人间失格',
                        zmrenjianshige_info: '其他角色于其回合内连续使用<strong><b><font color=LightBLue>[同类型]</font></b></strong>的牌时,你可令其选择是否弃置1张牌,若其选否则该牌失效.',
                        zmfupingrenshengsiliushui: '浮萍人生似流水',
                        zmfupingrenshengsiliushui_info: '摸牌阶段结束时,你可消耗30点能量将体力值回复至体力上限,之后根据此技能发动次数获得以下效果:<br>&nbsp①〖人间失格〗增加时机:<strong><b><font color=LightBLue>[同点数]</font></b></strong>;<br>&nbsp②〖人间失格〗增加时机:<strong><b><font color=LightBLue>[同花色]</font></b></strong>;<br>&nbsp③〖人间失格〗增加时机:<strong><b><font color=LightBLue>[同颜色]</font></b></strong>;<br>&nbsp④你死亡.<li>若你的体力值低于场上角色平均值,你必须执行此技能.',
                        zhepingdexiangzheng: '和平的象征',
                        zhepingdexiangzheng_info: '当有角色受到伤害时,你可消耗20点能量令受到伤害的角色、伤害来源、你依次重铸1张牌;<br>&nbsp若以此法重铸的牌之类型总数大于伤害值,则该伤害-1.',
                        zmoneforall: 'ONE FOR ALL',
                        zmoneforall_info: '限定技<br>出牌阶段你可选择1~10中的一个数字,并于对应轮数后死亡.<br>&nbsp若如此做,根据所选数字之对应你摸10~1张牌,本局游戏内出杀次数变为10~1;且【和平的象征】效果改为[选择令该伤害+1/-1].',
                        zmhonghaiqiji: '红海奇迹',
                        zmhonghaiqiji_info: '当有红色/黑色锦囊牌结算后,你可消耗10点能量令任意名此牌目标随机重铸1张牌;<br>&nbsp若重铸后的牌为红色/黑色,则目标回复/失去1点体力.',
                        zmsihaiwenshu: '死海文书',
                        zmsihaiwenshu_info: '锁定技 <br>准备阶段你的手牌上限累计-1,之后若你的手牌上限为0则效果改为+1,直到其不小于你的体力值后重新改为-1;<br>&nbsp根据以此法到达极值的方式,你执行以下效果:<li>因减少到达---可令一名角色回复1点体力.<li>因增加到达---可令一名角色失去1点体力.',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:综漫季刊伍/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊伍/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊伍');
                lib.config.characters.add('综漫季刊伍');
                lib.translate['综漫季刊伍_character_config'] = `综漫季刊伍`;
                return QQQ;
            });
        },
        config: {
            ZMSLTB5: {
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
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【幻想嘉年华】的少量武将分离而成的先行体验包.分包仅包含卡面查看功能,请无视简介中的其它内容",
            author: '尧',
            version: '1.0',
        },
    };
});

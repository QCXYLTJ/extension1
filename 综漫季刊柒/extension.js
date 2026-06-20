import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊柒',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_01jianmoshenzongsi = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianlan = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_04douailianxiya = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianlilibei = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_07keheita = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_12tiwaerteyang = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingkailong = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_13lingnailuo = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_11ruzhahake = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_11rukaweili = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_14linzhiwu = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_08shafeiaoleituo = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_10kuangmoleteleisi = `<img src=extension/综漫季刊柒/image/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jiankaiwenkasilanna = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_03qiangjiaerna = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_04douqiyu = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_12tiwutiaowu = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linshiruijiesi = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_05qijingyuan = `<img src=extension/综漫季刊柒/image/五星.png width="84" height="22">`;
            lib.characterTitle.zm_20shentongtian = `<img src=extension/综漫季刊柒/image/极星.png width="84" height="22">`;
            lib.characterTitle.zm_04doudongtangkui = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_09humaxiu = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_12tixier = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_10kuangalan = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_13lingcaifeng = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_06faweiweian = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_06fahunxiang = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruluya = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qililiyasi = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            lib.characterTitle.zm_06faailiya = `<img src=extension/综漫季刊柒/image/三星.png width="59" height="22">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy7 = {
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
                    for (var i in lib.characterPack.综漫季刊柒) {
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
                    for (var i in lib.characterPack.综漫季刊柒) {
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
                                    np1.setBackgroundImage('extension/综漫季刊柒/image/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊柒/image/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊柒/image/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊柒/image/np000.png');
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
            lib.skill._zmtnlcz7 = {
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
                    for (var i in lib.characterPack.综漫季刊柒) {
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
            lib.translate.zm7ru = '裁';
            lib.translate.zm7ruColor = '#FFFF00';
            lib.group.push('zm7ru');
            lib.translate.zm7ti = '异';
            lib.translate.zm7tiColor = '#FFFF00';
            lib.group.push('zm7ti');
            lib.translate.zm7lin = '临';
            lib.translate.zm7linColor = '#FFFF00';
            lib.group.push('zm7lin');
            lib.translate.zm7do = '斗';
            lib.translate.zm7doColor = '#FFFF00';
            lib.group.push('zm7do');
            lib.translate.zm7ke = '科';
            lib.translate.zm7keColor = '#FFFF00';
            lib.group.push('zm7ke');
            lib.translate.zm7fa = '法';
            lib.translate.zm7faColor = '#FFFF00';
            lib.group.push('zm7fa');
            lib.translate.zm7qiang = '枪';
            lib.translate.zm7qiangColor = '#FFFF00';
            lib.group.push('zm7qiang');
            lib.translate.zm7kuang = '狂';
            lib.translate.zm7kuangColor = '#FFFF00';
            lib.group.push('zm7kuang');
            lib.translate.zm7shen = '神';
            lib.translate.zm7shenColor = '#FFFF00';
            lib.group.push('zm7shen');
            lib.translate.zm7ling = '灵';
            lib.translate.zm7lingColor = '#FFFF00';
            lib.group.push('zm7ling');
            lib.translate.zm7jian = '剑';
            lib.translate.zm7jianColor = '#FFFF00';
            lib.group.push('zm7jian');
            lib.translate.zm7qi = '骑';
            lib.translate.zm7qiColor = '#FFFF00';
            lib.group.push('zm7qi');
            lib.translate.zm7hu = '守';
            lib.translate.zm7qiColor = '#FFFF00';
            lib.group.push('zm7hu');
            lib.translate.zm7sha = '杀';
            lib.translate.zm7shaColor = '#FFFF00';
            lib.group.push('zm7sha');
            if (config.ZMSLTB7) {
                lib.translate.zm7ru = `<img src=extension/综漫季刊柒/image/zm7ru.png width="28" height="28">`;
                lib.translate.zm7chan = `<img src=extension/综漫季刊柒/image/zm7chan.png width="28" height="28">`;
                lib.translate.zm7lin = `<img src=extension/综漫季刊柒/image/zm7lin.png width="28" height="28">`;
                lib.translate.zm7hu = `<img src=extension/综漫季刊柒/image/zm7hu.png width="28" height="28">`;
                lib.translate.zm7dao = `<img src=extension/综漫季刊柒/image/zm7dao.png width="28" height="28">`;
                lib.translate.zm7ti = `<img src=extension/综漫季刊柒/image/zm7ti.png width="28" height="28">`;
                lib.translate.zm7ling = `<img src=extension/综漫季刊柒/image/zm7ling.png width="28" height="28">`;
                lib.translate.zm7do = `<img src=extension/综漫季刊柒/image/zm7do.png width="28" height="28">`;
                lib.translate.zm7ke = `<img src=extension/综漫季刊柒/image/zm7ke.png width="28" height="28">`;
                lib.translate.zm7sha = `<img src=extension/综漫季刊柒/image/zm7sha.png width="28" height="28">`;
                lib.translate.zm7shen = `<img src=extension/综漫季刊柒/image/zm7shen.png width="28" height="28">`;
                lib.translate.zm7qiang = `<img src=extension/综漫季刊柒/image/zm7qiang.png width="28" height="28">`;
                lib.translate.zm7fa = `<img src=extension/综漫季刊柒/image/zm7fa.png width="28" height="28">`;
                lib.translate.zm7qi = `<img src=extension/综漫季刊柒/image/zm7qi.png width="28" height="28">`;
                lib.translate.zm7kuang = `<img src=extension/综漫季刊柒/image/zm7kuang.png width="28" height="28">`;
                lib.translate.zm7jian = `<img src=extension/综漫季刊柒/image/zm7jian.png width="28" height="28">`;
            }
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp427 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊柒/mp4/${Q}.mp4`;
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
            HTMLDivElement.prototype.zmw7 = function (Q) {
                const video = document.createElement('video');
                video.src = `extension/综漫季刊柒/mp4/${Q}.mp4`;
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
            game.playzm7 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊柒/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm7t = function (bg, pos, time, func) {
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
                    name: '综漫季刊柒',
                    connect: true,
                    character: {
                        zm_20shentongtian: ['male', 'zm7shen', 5, ['zmzhu', 'zmlu', 'zmxian', 'zmjue', 'zmshangqing', 'zmhunyuan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性神性.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等生命.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】上位者<br>\n' + '【宝具】诛戮陷绝<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★★☆☆☆<br>\n' + '【爆发】★★★★★★★★★★<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★★★★★★☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】洪荒截教之主,三清圣人之一,号上清灵宝天尊.<br>\n通天道人乃盘古正宗、先天圣人,性情易躁冲动但心怀天下.其主张<有教无类>,不论出身跟脚一切生灵皆可得道修行,上古时创下的截教意为为众生截取一线生机;门下诸神参拜,万仙来朝,一度为天地第一大教.<br>\n截教势大,然门下弟子不少福缘浅薄身负业障,且教内并无功德至宝镇压气运.封神大劫时截教死伤惨重,甚至牵连到通天圣人亲自出手.最终截教崩散,通天圣人愤怒下意欲重立地风水火再开世界,被道祖鸿钧禁足.<br>\n' + '【评级】<b><font color=GoldEnrod>S+</font></b>\n']],
                        zm_14linzhiwu: ['male', 'zm7lin', '4/4', ['zmdaquanzaiwo', 'zmanxinglongzhao', 'zmjieyinyishi'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性时空.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】接引仪式<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】泰拉纳德的少年帝王,妄图支配暗星力量的阴谋家.<br>\n明面上智武只是皇族远亲,因为太师扎哈克和神秘人路雅才登上皇位,无异于二人的傀儡.然而智武一直隐藏着自己身为变革使徒艾尔达德最后碎片的事实,与扎哈克在路雅即将成功的最后一刻反噬,完美攫取了外宇宙暗星的遗留,开启暗星<德托穆>降临的仪式.<br>\n德托穆自称变革之神,然这只是迷惑文明的伪名.其真实特性是混乱、反秩序、黑暗与隔阂.被祂侵染的世界最终只会走向在无尽黑暗中猜疑彷徨的末路而已.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_14linshiruijiesi: ['male', 'zm7lin', 5, ['zmhuimiexingjun', 'zmanxingningshi', 'zmxingchenbushizhe'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性魔性.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性混沌.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】降临者<br>\n' + '【宝具】星辰捕食者<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★★★☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】手持魔剑的暗星使徒,外神巴斯特斯入侵异界的代言人.<br>\n史瑞杰斯原本是某世界的强大苦修士,侍奉着这颗星球的星魂——神明列科斯.神是否是完美全能的？作为距离神太近的凡人,苦修士产生过这样的疑惑.这点点念头被强大的暗星捕获;从混沌中,苦修士得到了一柄剑,混沌说,你的神是否全能,亲手一试便知.<br>\n苦修士相信自己的神看到一切,掌控一切,但结果却是列科斯被一剑抹杀.弱小的行星怎能抵挡远比祂巨大古老的深空意志呢？其上的凡人更不值一提.<br>\n史瑞杰斯的魔剑名为「星辰捕食者」,本身就是暗星巴斯特斯的终端,寄宿着巴斯特斯的意志.而毁灭一个星球的阴谋,也只是巴斯特斯为了强攻下一个世界进行的工具准备而已.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_13lingnailuo: ['male', 'zm7ling', 4, ['zmcanjue', 'zmningyuan', 'zmmoran'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性类人.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】四魂之玉<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★★★★★☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】由邪念凝聚的妖魔,咒物『四魂之玉』的代言人.<br>过去曾有一名人类名为鬼蜘蛛,其多行不义后落得半身不遂的下场,却被慈悲的巫女桔梗所救.然而鬼蜘蛛却恩将仇报对桔梗起了贪恋觊觎之心,想要看到圣洁的她堕落玷污的样子.<br>异乎寻常的邪念引来了众多妖魔,它们对桔梗的憎恨与鬼蜘蛛的执念交织使彼此融为一体,从中诞生的就是半妖奈落.<br>对桔梗爱恨交织的执念是奈落的根源.为了克服鬼蜘蛛残留的人心击杀桔梗进而变得完美,奈落需要收集浸润邪念的碎片完成相传拥有无限妖力的四魂之玉...<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_13lingkailong: ['male', 'zm7ling', '4/4', ['zmwanglingpaihuai', 'zmwuweideyindaozhe', 'zmzhenhunzhijian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性机械.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】无为的引导者<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】塔拉诺尔反抗组织「Homunculus」的永生者领袖.<br>\n过去塔拉诺尔的研究员大胆使用外星陨石的未知特性创造了史上第一台真人工智能<无为的引导者>,意为知晓一切的它将以究极智慧使人类达到无为登神的境地.<br>\n不出意外的,那一批造物最终在异化的人工智能引导下暴动,最终几乎与人类同归于尽.<无为的引导者>极难消亡,其多年后其搭载在新宿体上后重现大陆,并开始搜集失落的古代技术.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_13lingcaifeng: ['male', 'zm7ling', 5, ['zmxinghongxiutao', 'zmchaijiecaipian', 'zmfenghezhisui'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】不眠者<br>\n' + '【宝具】缝合之髓<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】裁缝的异能并非天生,而是通过对自己进行的<嵌合体>实验觉醒.每一次嫁接,都在塑造一个新的弗朗西斯.<br>\n作为故乡都市传说的正体,以及星群投资事件中引发恐慌的异能者,裁缝短暂消失了一段时间后再度现身于条顿堡.据说他在闯进耶格尔驻地的大门前又背上了好几起恶性案件.<br>\n裁缝的赌注不是钱财资产,而是<身体最好的一部分>.从那些纵横的缝合线上可以看出,他曾经完成了数场兴会淋漓的豪赌,每一道疤痕都是有力的证明,每一块肢体肌肉都是精挑细选——除了大脑,他的整个身体都换过了.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_12tixier: ['female', 'zm7ti', 4, ['zmliangzizhiying', 'zmyuyesezhong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】于夜色中<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】地下世界飞舞的冥蝶,地火组织的最高战力.<br>\n希儿出身于雅利洛-VI贝洛伯格下城区.作为被舍弃的城市,下城区被隔离在地下,四面八方都是侵袭而来的裂界,异化的死者和裂界怪物每天都在蚕食这最后的堡垒.对于下城区的人而言,他们确实生活在一艘漏水的破船上.<br>\n即使身处绝地,人类也不会放弃挣扎.名为地火的组织维持着下城区的秩序,无数次对怪物的清剿令他们顽强,率真,果敢.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_12tiwutiaowu: ['male', 'zm7ti', 4, ['zmliuyan', 'zmwuxiaxianshushi', 'zmwuliangkongchu'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】无量空处<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★★★★☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】现代最强的咒术师,除了性格外能力几乎完美的人物,为了改变腐朽的咒术界亲自下场教育新人开发他们的潜力.<br>\n五条悟使用的无下限术式——里收敛无穷级数即<这段距离可以无止尽地无限缩小>;这种术式可以在现实的某一块空间里实现这个概念,由此实现绝对防御和引导扭曲都不在话下.五条家活用这种能力的先祖并不少,而对于五条悟来说全天轻松驾驭生得术式也只是迈向最强的第一步而已.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_12tiwaerteyang: ['male', 'zm7ti', 3, ['zmwuzhijuxian', 'zmzhongliyazhi', 'zmnisiheidong'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】异能者<br>\n' + '【宝具】拟似黑洞<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】屡次拯救世界于灭亡的边缘的前逆熵盟主,平日总谦虚地自称是动画画师.<br>\n瓦尔特·杨本名约阿希姆·诺基安维塔宁,于1955年继承了瓦尔特的名号和律者核心,姓氏换成母姓,改名为瓦尔特·杨,成为新一代理之律者承担起守护人类的责任.<br>\n崩坏灾难结束后,瓦尔特一度卸下命运交付的重担,成为一名动画原画师.然而圣方丹事件结束后,瓦尔特被迫与事件始作俑者去向星门另一侧.或许连他自己也未曾料到,在那里等待着的,将是全新的旅途和同伴.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_11ruzhahake: ['male', 'zm7ru', 4, ['zmzhenmimouhua', 'zmsijiaoqieru', 'zmjuedingdeyishou'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】决定的一手<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】辅佐泰拉纳德历代皇帝的太师,只有在影响泰拉纳德国运的大事发生时才会出现,因此被称为皇室守护者.他在世人眼中是个神秘的存在,最近在打破长久的沉寂后终于现身了.<br>\n三个有着暗影妖精血脉的挚友中,善良的女子为阻止邪神被永久封印.持剑的男子为了不让女子的牺牲白费带着四季之剑远走他乡.背叛的男子隐入历史布局千年,等待为过去赎罪的契机.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_11ruluya: ['female', 'zm7ru', 4, ['zmweimu', 'zmnongshi', 'zmjingxi', 'zmdiemeng'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】蝶梦<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】纳特伦众多事件幕后的神秘操盘者,<变革之手>的实际掌控者.<br>\n路雅这个名字频繁出现在泰拉纳德历史中,王朝更迭势力变迁很多时候都是她一手促成,诸多重要人物都是她自小扶持的傀儡.这千年的谋划都是为了让四季之剑重新现世并齐聚,进而接引外宇宙暗星的力量,让自己成为超脱这颗星球造物的伟大存在.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11rukaweili: ['male', 'zm7ru', 5, ['zmxietiaozhe', 'zmliliangtiaoxu', 'zmchongjianfaze'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】裁定者<br>\n' + '【宝具】重建法则<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★☆☆☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】没落大地的「协调者」,为了平衡元素及净化怪异在大陆上奔走.但无情的是普通人并不理解他的伟大,反而留下了<被协调者认定为异化就会被杀>的中伤之言.<br>\n在诸神离开日渐衰亡的大地,破灭与杀戮催生着亡灵魔物,连元素精灵王都产生异化.不知何时协调者听到了这样的传言:<大地并不希望被协调>.破灭已经成为世界自身的选择.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_10kuangmoleteleisi: ['male', 'zm7kuang', 5, ['zmgujianwuming', 'zmshuangrencengshi', 'zmjueduiweiyan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性野兽.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】绝对威严<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★★★<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】万坦贝克传说中的狂龙,平和的外表下隐藏着极度偏执的灵魂.<br>\n万坦贝克龙族千年来互相攻伐,直到蓝龙一族的后裔:魔勒特雷斯出现,这一切才有所改变.魔勒除了无与伦比的血脉力量,才能也高到难以置信,连教授他枪术的老师使出毕生所学也差点死在初学几日的魔勒枪下.<br>\n很快没有敌手的魔勒失去了前进的方向,好不容易寻得的守护古龙在与他两败具伤时被父亲偷袭而死,这是他一生中最愤怒的时刻.龙皇的地位、龙神传承和使徒的力量都选择过魔勒,但他反倒用这些东西培养自己的敌人.为了有真正的强敌充实人生,他即使伤害朋友击杀父亲也在所不惜.四处挑战无果的魔勒引发人类与龙族的千年战争,之后他将自己封印在停滞的时空,等待龙族不得不召唤自己的一天到来.<br>\n' + '【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_10kuangalan: ['male', 'zm7kuang', 4, ['zmmimishixin', 'zmjuechufanji'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】狂战士<br>\n' + '【宝具】秘密誓心<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】空间站「黑塔」的防卫科负责人,也是空间站中少见的可靠人士.<br>\n阿兰是黑塔空间站实质管理者艾斯妲的亲信,除了防卫科的工作外还兼着一份艾斯妲小姐管家的职责.虽然最初只是从街头招募的流浪少年,但经过锻炼阿兰的实力也得到黑塔的认可,在这个汇聚了无数星球人才的空间站身居要职.<br>\n虽然不懂科研,但为了保护空间站科员顺利完成他们的研究,阿兰可以拼上性命.在与种种异星生物、出逃实验体及反物质军团的战斗中他早已习惯疼痛,沉默地将负伤视作荣勋.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_09humaxiu: ['female', 'zm7hu', '4/4/1', ['zmyingxiongjijie', 'zmjueyifenqizhidun', 'zmyiranyaoyuan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】守卫者<br>\n' + '【宝具】已然遥远的理想之城<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★★★★☆☆☆☆☆☆<br>\n' + '【特质】人理保障机构迦勒底的成员——玛修·基列莱特,与英灵融合后的亚从者.<br>\n曾经加拉哈德把作为英灵的能力和宝具转让给玛修,相对地希望她能够排除产生特异点的原因.<br>\n此后玛修与藤丸立香正式建立契约,凭借持有的十字大盾[英雄聚集之所]来临时契约其他英灵获得助力与守护同伴;<br>\n大盾的强度与使用者的精神力相呼应,据说只要心不屈服,其防御就绝不会崩塌.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_08shafeiaoleituo: ['male', 'zm7sha', 4, ['zmcanying', 'zmhuanfeng', 'zmnuesha'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱中立.png width="57" height="19">` + ' <br>\n' + '【职阶】暗匿者<br>\n' + '【宝具】虐杀<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】没落大地,普兰特内战时期菲奥雷托一度把叛乱的莉莉亚斯逼入绝境,然而另一战场他的家族却成为弃子.返回本部的菲奥雷托得知噩耗,及高层补偿他加入议会的席位.<br>\n牺牲的父亲曾说,牺牲是总有意义的.答应授勋的菲奥雷托来到议会后杀光了普兰特高层.莉莉亚斯见到菲奥雷托坐上尸堆中的王座,感慨这位不成熟的挚友终于蜕变.随着菲奥雷托成为莉莉亚斯的左右手,普兰特的新时代拉开序幕.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_07keheita: ['female', 'zm7ke', 5, ['zmzhishilingshi', 'zmwoxingwosu', 'zmheitaxulie'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性机械.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性造物.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】工程师<br>\n' + '【宝具】黑塔序列<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】我行我素的天才遥控傀儡少女,两次拜谒星神的智识令使.<br>\n黑塔女士的成就多得数都数不清;她年少时解开孤波算法难题、斯帕克模型猜想.青年时发现了西格玛重子的转化方法;中年时提出黑塔序列,发表关于返老还童的论文.其一生中曾十九次将母星从毁灭的危机中拯救,最终得到星神「智识」博识尊的认可,成为天才俱乐部#83号成员.<br>\n黑塔不满足于寻常世界的万物法则,她将目光投向了银河中未解的存在,并期待那些遥远的神秘能够满足自己的好奇心.为此,黑塔主导建立了博物馆式星际舰船,并将它发射至行星轨道,开始了<将一切怪异封印在星空之中>的研究工作.闻名星海的空间站<黑塔>便由此诞生.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_06faweiweian: ['female', 'zm7fa', 5, ['zmziranenhui', 'zmziranbaochang'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】自然报偿<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★★★☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】被称为森之贤者的魔法师,受到精灵祝福的施法者,也是「协调者」卡威利的爱人.<br>作为被世界所爱与调和世界平衡的人,这两人始终为了修正自然而奔走,哪怕在没落大地行于正道的一切都变得愈发艰辛.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_06fahunxiang: ['female', 'zm7fa', 3, ['zmtianxingzhaoming', 'zmmingzaonayin'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】天星照命<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★☆☆☆☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】真名李星夜,三清会五术中的<命>.洞晓星命,却总自称天文学家.<br>\n据说浑象祖上乃是钦天监出身,给皇家测命可是苦差事,终究有一次祸从口出险些断了香火.宫中逃出来的族人自此隐姓埋名,常时就算能算也推三阻四,以<袜子太紧>、<指甲长了>等理由搪塞.搅得三清会内不少人认为她跟三才一样是个油嘴滑舌的语言艺术家,其实这才是她的生存之道.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_06faailiya: ['female', 'zm7fa', 4, ['zmanyingyaojing', 'zmanyingzhendi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性魔性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】施法者<br>\n' + '【宝具】暗影阵地<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★★☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】暗影妖精的领袖,在隐遁者之森过着与世隔绝的生活.<br>\n因为一些渊源,除了自己的同族之外艾莉雅时常对外界人抱持着敌对态度,并摆出一副冷淡面孔.虽然嘴上表现的十分坚毅,但外界对暗影妖精的歧视,以及为了种族大义和亲情的取舍都令她内心煎熬.<br>\n' + '【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_05qililiyasi: ['female', 'zm7qi', 4, ['zmliantongweiyi', 'zmjueduiweiquan', 'zmxinshidaidexumu'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】新时代的序幕<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★☆☆☆☆☆☆<br>\n' + '【控制】★★★★★★☆☆☆☆<br>\n' + '【生存】★★☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】在莉莉亚斯还没成为普兰特的女王时,她就通过杀戮将家族中的无能之辈铲除殆尽,年纪轻轻即成为有为的领主,并探知密辛、培植势力、很快收服普兰特南部并发动叛乱.<br>\n虽然莉莉亚斯手腕高明,但旧识菲奥雷托率领的王国军绝不好对付.幸好费雷奥托后方失火,家族惨遭背叛的他竟突然在王都杀光了王国高层.尽快赶来的莉莉亚斯顺理成章收服了本就青梅竹马的弟弟,进而轻易登上了女王宝座.但区区普兰特可无法满足这位征服者的野心,最终她将目光瞄向了整个希都尼亚...<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_05qijingyuan: ['male', 'zm7qi', 3, ['zmshencejiangjun', 'zmyifengjingdian', 'zmshezhaoweiling'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】骑兵<br>\n' + '【宝具】召摄威灵<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★★☆☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★★☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】仙舟联盟帝弓七天将之一,负责节制罗浮云骑军的神策将军.<br>\n出身仙舟的<帝弓>晋升为司掌复仇、追猎的星神「巡猎」岚后,祂的令使自然从仙舟联盟中选出.虽然岚在星神中力量偏弱,但巡猎令使们却得到了规格外的赐福;他们奉行帝弓诰谕,带领仙舟星海巡航,剿灭「丰饶」眷族.<br>\n在诸同僚述职记录中,罗浮仙舟的<神策将军>景元却难得长寿,已安然治军数百年.在他折冲运筹之下,罗浮云骑一度蜚声联盟,立下过众多惊人的战绩.虽然有人腹诽他本人畏战怯阵,鲜少动武.但也不得不承认,其人的智谋不逊于最锋锐的利剑.对神策将军而言,善战者无赫赫之功,善弈者无通盘妙手.虽然妙计翻盘、力挽狂澜能显出一个人的光华,但将危机平伏于微末之间更显上将之能.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_04douqiyu: ['male', 'zm7do', 8, ['zmyijinan', 'zmzuiqiangnan'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】一击<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★★<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★☆☆☆☆☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】我秃了,也变强了.<br>\n突破限制在原世界所向无敌的最强英雄.虽然满足于小人物柴米油盐的生活,但偶尔也会期待失去已久的紧张感.<br>\n不管怎么看,在同级强者中琦玉都是最好相处的类型,作为纯粹的英雄他的暴力不会随便挥洒.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                        zm_04doudongtangkui: ['male', 'zm7do', 5, ['zmbuyiyouxi', 'zmzone'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性时空.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】不义游戏<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★☆☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★☆☆☆☆☆<br>\n' + '【控制】★★★★★★★★☆☆<br>\n' + '【生存】★★☆☆☆☆☆☆☆☆<br>\n' + '【成长】★★★☆☆☆☆☆☆☆<br>\n' + '【辅助】★★★☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】还在上学的年轻一级咒术师,九十九由基的弟子.即使在几乎全员怪人的咒术高专也是异类,暗中被称为可靠的疯子,尚未毕业就有独自拔除特级咒灵的战绩.<br>\n东堂葵的术式名为「不义游戏」,以拍手的形式将一定范围内含有咒力的两个物体交换位置.这种效果即使对手有所防备也很难应对,拥有巨大战术价值.<br>\n' + '【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_04douailianxiya: ['female', 'zm7do', 4, ['zmqinglifeiwu', 'zmmaofandedaijia'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性野兽.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性龙血.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】斗士<br>\n' + '【宝具】冒犯的代价<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★★☆☆☆☆☆☆☆☆<br>\n' + '【特质】万坦贝克龙族守护者,外冷内热多愁善感还总被嫌弃啰嗦的善龙.<br>\n真名爱莲西诺克斯,龙神遗迹<守护者>的副手.爱莲西诺克斯长久守护着龙族族地外围,直到一名年轻蓝龙改变了她的生活.守护者击退他后说他可能就是龙神等待的继承者.几个月后青年打败了守护者,却是因其父亲偷袭分出的胜负.青年一怒之下毁灭了龙神传承力量,让父亲只能当有名无实的<伟大者>.从此爱莲西雅就成了魔勒特雷斯唯一的朋友,在龙之溪谷也只有她配做魔勒的朋友.<br>\n获得自由的爱莲西雅喜欢人类,和自己庇护村庄中的小孩子成为非常要好的玩伴.然而悲剧的是,寻求敌手发狂的魔勒看到了玩伴赛娜的潜力,交给其使徒碎片后打碎她的一切来让她成为自己的劲敌.这一切的结果就是赛娜死亡,人类建立龙骑士帝国对抗龙族.愧疚的爱莲西雅不敢再亲近人类,生怕给脆弱的人类带来灾祸.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_03qiangjiaerna: ['male', 'zm7qiang', 5, ['zshishedeyingxiong', 'zrilunjiazhou', 'zmzhanhuo', 'zrilunsiwang'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性神性.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序善良.png width="57" height="19">` + ' <br>\n' + '【职阶】枪兵<br>\n' + '【宝具】日轮啊 归于死亡<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★★★<br>\n' + '【控制】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★★☆☆☆☆<br>\n' + '【成长】★★★★★★★☆☆☆<br>\n' + '【辅助】★★★★☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】拥有诸神难侵的黄金之甲和一击必灭的弑神之枪,被称为施舍的英雄.<br>\n迦尔纳是人类与太阳神苏利耶所生的半神,但他出生后立刻遭到生母的抛弃,被作为车夫的儿子抚养.母亲抛弃了迦尔纳后生下了般度王家的五兄弟,而长大后的迦尔纳成了与般度家对立的俱卢家的养子.<br>\n迦尔纳与弟弟们兵戎相见时,将他遗弃了的母亲贡蒂向迦尔纳坦白.知耻、并且坦白罪状的贡蒂令迦尔纳深受感动,发誓不对阿周那之外的般度五子出手.因此,迦尔纳在战场上无数次地放过了除了阿周那的般度五子.<br>\n便是最后一战前.阿周那的父亲雷神因陀罗害怕儿子战死,于是化身为乞丐向迦尔纳索要他与生俱来的黄金铠甲.迦尔纳明知这一切还是应承了他想要的黄金甲和耳饰——也就是宝具『日轮啊,化为甲胄』.被这份过人高洁感动了的因陀罗,给了迦尔纳即使是众神之王也难以掌控的光之枪,那便是『日轮啊,归于死亡』.<br>\n最后一战中,迦尔纳的车轮因为诅咒陷进土里,因为诅咒而想不起武器的真名,已经不是不死之身的迦尔纳没有回避阿周那的箭矢的办法.<br>\n战前双方曾约定不可攻击陷入无法战斗状态的人.迦尔纳动弹不得之时,阿周那被谗言蛊惑,致使其终生抱憾.另一方面迦尔纳认为,他那样的英雄不惜打破原则也要杀了自己,面对这样的想法有着奇怪的自豪.——最终,阿周那的弓射落了太阳.<br>\n' + '【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_01jianlilibei: ['female', 'zm7jian', '3/3', ['zmfusongshuangjian', 'zmlinghuncaijianshi'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序邪恶.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】创生之福&破坏之颂<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★☆☆☆☆☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★☆☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】出身于列科斯世界的缝纫师家族,因为战争不得不作为佣兵生存,日后却成为世上首屈一指的强大剑士.<br>\n因为对星神列科斯的愤恨,莉莉贝将神器剪刀冠以恶魔之名来嘲弄教宗.外神使徒史瑞杰斯击杀星魂后,因为其对佣兵抱有的诚挚信任莉莉贝作为干部继续跟随他前往未知的星球.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianmoshenzongsi: ['female', 'zm7jian', 4, ['zmwuduan', 'zmwubian', 'zmwuqiongsanduan'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性守序中立.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】无穹三段<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★★★☆☆<br>\n' + '【爆发】★★★★★★★☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★★★☆☆☆☆☆<br>\n' + '【成长】★★★★★★☆☆☆☆<br>\n' + '【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】☆☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】只为仅仅一次的闪耀而被抑制力创造的决战英灵,基本是以剑士冲田总司为原型.<br>\n作为为了行使抑止力而改变、以单骑歼灭目标或是与对方同归于尽为目的调整而成的超规格英灵,虽然清除了病弱的属性,但头脑似乎更不好用了.<br>\n那次事件结束后,本该消失在历史夹缝中的魔神总司其可能性受到抑制力的肯定,正式成为了诸多肃正使徒之一.在过去与未来的必要时刻,她还会悄无声息的现身吧.<br>\n' + '【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianlan: ['male', 'zm7jian', 5, ['zmjifeng', 'zmjianqie', 'zmdongmian'], ['des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性肃正.png width="34" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性混乱善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】冬冕切刀<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★★☆☆☆<br>\n' + '【爆发】★★★★★★☆☆☆☆<br>\n' + '【控制】★★☆☆☆☆☆☆☆☆<br>\n' + '【生存】★★★☆☆☆☆☆☆☆<br>\n' + '【成长】★★★★★☆☆☆☆☆<br>\n' + '【辅助】★☆☆☆☆☆☆☆☆☆<br>\n' + '【治疗】★☆☆☆☆☆☆☆☆☆<br>\n' + '【特质】过去誓约继承者团队中维德瑞的老师,持有四季之剑中冬日之剑的老剑士.<br>\n原本岚来自泰拉纳德,为了某个目的在其他大陆上周游许久.然而无功而返的他,却如被命运牵引般回到了东方,在急袭而来的危机中寻找剩余三剑,并培养缺位的稚嫩剑主.<br>\n' + '【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_01jiankaiwenkasilanna: ['male', 'zm7jian', 5, ['zmtianhuochuqiao', 'zmyemoruyuan', 'zmjiushibajian'], ['zhu', 'des: ' + '【属性】' + `<img src=extension/综漫季刊柒/image/属性人形.png width="34" height="22"><img src=extension/综漫季刊柒/image/属性高等力量.png width="56" height="22">` + ' <br>\n' + '【阵营】' + `<img src=extension/综漫季刊柒/image/属性中立善良.png width="57" height="19">` + ' <br>\n' + '【职阶】剑士<br>\n' + '【宝具】救世拔剑<br>\n' + '<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n' + '【攻击】★★★★★★☆☆☆☆<br>\n' + '【爆发】★★★★★★★★☆☆<br>\n' + '【控制】★★★★★☆☆☆☆☆<br>\n' + '【生存】★★★★★★★★☆☆<br>\n' + '【成长】★★★★★★★★☆☆<br>\n' + '【辅助】★★★★★☆☆☆☆☆<br>\n' + '【治疗】★★★☆☆☆☆☆☆☆<br>\n' + '【特质】逐火之蛾十三英桀之首,前文明最强的战士.<br>\n<约束的惨剧>后,逐火之蛾仅存十三位融合战士,统称<十三英桀>.由于某些理由每位成员被授予了位次和名为<刻印>的称号,以此十三人背负文明存续的希望.凯文位列第一,持有<救世>刻印.<br>\n作为人类最强大的守护者,最接近逐火之蛾宏愿的人,被所有人承认的<英雄>.世人坚信,凯文终将带领人类战胜崩坏.<br>\n逐火英桀中有几位强大到足以独战律者,而凯文的实力对于其余人来说也有断层般的差距.即便如此,终焉律者的力量实在无法估量.月光王座超负荷使用主炮仅让终焉律者崩坏能流失30%,凯文全力一击让终焉律者瘫痪12小时.<br>\n作战失败,逐火之蛾把避难所全部沉入地下,幸存的战士撤回地球开始冷冻睡眠.12小时后文明毁灭,存活者寥寥无几.<br>\n五万年后,更弱更稚嫩的人类文明再次遭遇崩坏爆发,通过烛火之蛾遗留的手段凯文劫持了终焉律者的权能,以自己持续承受反噬为代价让终焉律者无法正常诞生.同时他也期待着,新文明的后继者能以更好的方式跨越终焉.<br>\n' + '【评级】<b><font color=GoldEnrod>S</font></b>\n']],
                    },
                    skill: {
                        zmzhu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i = 0; i < event.result.length; i++) {
                                    if (event.result[i].name == 'sha') return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                for (var i = 0; i < trigger.result.length; i++) {
                                    if (trigger.result[i].name == 'sha') {
                                        event.list.push(trigger.result[i]);
                                    }
                                }
                                ('step 1');
                                var next = player.chooseCardButton('可使用其中一张【杀】并摸一张牌', event.list, 1);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.$fullscreenpop('诛', 'fire');
                                    event.list.remove(result.links[0]);
                                    player.chooseUseTarget(result.links[0], true);
                                } else event.finish();
                                ('step 3');
                                player.draw();
                                if (event.list.length) {
                                    event.goto(1);
                                }
                            },
                        },
                        zmxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                global: 'phaseBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var red = event.player.countCards('h', { color: 'red' });
                                var black = event.player.countCards('h', { color: 'black' });
                                if (event.player == player) return false;
                                if (event.player.countCards('h') <= 1) return false;
                                return (red == 1 && player.countCards('he', { color: 'black' }) > 0) || (black == 1 && player.countCards('he', { color: 'red' }) > 0);
                            },
                            content() {
                                'step 0';
                                var hsl = [];
                                var hs = trigger.player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    var co = get.color(hs[i]);
                                    if (trigger.player.countCards('h', { color: co }) == 1) {
                                        hsl.push(hs[i]);
                                    }
                                }
                                var str = `【陷】是否用一张牌交换${get.translation(trigger.player)}的一张不同颜色手牌?之后其将所有手牌置入弃牌堆`;
                                var dialog = ui.create.dialog(str, 'hidden');
                                dialog.addText(`【${get.translation(player)}】的牌`);
                                dialog.add(player.getCards('he'));
                                dialog.addText(`【${get.translation(trigger.player)}】可交换的手牌`);
                                dialog.add(hsl);
                                player
                                    .chooseButton(dialog, 2)
                                    .set('filterButton', function (button) {
                                        var num = ui.selected.buttons.length;
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            var owner = get.owner(ui.selected.buttons[0].link);
                                            if (num > 0 && get.owner(button.link) == owner) return false;
                                        }
                                        var color = get.color(button.link);
                                        if (num == 0 && get.owner(button.link) == player) return false;
                                        if (num == 0 && trigger.player.countCards('h', { color: color }) != 1) return false;
                                        if (num == 1 && color == get.color(ui.selected.buttons[0].link)) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) >= 0) return -1;
                                        var owner = get.owner(button.link);
                                        if (owner == trigger.player) {
                                            return get.value(button.link);
                                        } else {
                                            return 7 - get.value(button.link);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.$fullscreenpop('陷', 'fire');
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        var owner = get.owner(list[i]);
                                        if (owner == player) {
                                            player.$give(1, trigger.player);
                                            trigger.player.gain(list[i], player);
                                        } else {
                                            trigger.player.$give(1, player);
                                            player.gain(list[i], trigger.player);
                                        }
                                    }
                                } else event.finish();
                                ('step 2');
                                trigger.player.lose(trigger.player.getCards('h'));
                            },
                        },
                        zmlu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                var num44 = game.countPlayer(function (current) {
                                    return current.countCards('h') == 0 || current.hp == 1;
                                });
                                if (event.parent.name == 'zmlu') return false;
                                return event.card.name == 'sha' && num44 > 0;
                            },
                            content() {
                                'step 0';
                                event.mbs = trigger.targets.length;
                                var num = 0;
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    num += get.effect(trigger.targets[i], trigger.card, player, player);
                                }
                                var num1 = 0;
                                var num2 = 0;
                                event.tr1 = [];
                                event.tr2 = [];
                                game.countPlayer(function (current) {
                                    if (current.hp == 1) {
                                        if (get.attitude(player, current) > 0 && get.effect(current, trigger.card, player, player) < 0) num1++;
                                        event.tr1.push(current);
                                    }
                                    if (current.countCards('h') == 0) {
                                        if (get.attitude(player, current) > 0 && get.effect(current, trigger.card, player, player) < 0) num2++;
                                        event.tr2.push(current);
                                    }
                                });
                                player
                                    .chooseControl('选项一', '选项二', '取消')
                                    .set('prompt', `可将此杀目标由${get.translation(trigger.targets)}更改为[${get.translation(event.tr1)}]或[${get.translation(event.tr2)}],目标数未增加则伤害+1`)
                                    .set('choiceList', [' ' + get.translation(event.tr1), ' ' + get.translation(event.tr2)]).ai = function (event, player) {
                                        var num11 = 0;
                                        var num22 = 0;
                                        for (var i = 0; i < event.tr1.length; i++) {
                                            num11 += get.effect(event.tr1[i], trigger.card, player, player);
                                        }
                                        for (var i = 0; i < event.tr2.length; i++) {
                                            num22 += get.effect(event.tr2[i], trigger.card, player, player);
                                        }
                                        if (num1 == 0 && num11 >= num && num11 >= num22) return '选项一';
                                        if (num2 == 0 && num22 >= num && num22 >= num11) return '选项二';
                                        return '取消';
                                    };
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '选项一') {
                                    player.$fullscreenpop('戮', 'fire');
                                    trigger.targets = [];
                                    for (var i = 0; i < event.tr1.length; i++) {
                                        trigger.targets.push(event.tr1[i]);
                                    }
                                    if (event.mbs <= event.tr1.length) trigger.baseDamage++;
                                }
                                if (result.control == '选项二') {
                                    player.$fullscreenpop('戮', 'fire');
                                    trigger.targets = [];
                                    for (var i = 0; i < event.tr2.length; i++) {
                                        trigger.targets.push(event.tr2[i]);
                                    }
                                    if (event.mbs <= event.tr2.length) trigger.baseDamage++;
                                }
                            },
                        },
                        zmjue: {
                            nobracket: true,
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && event.source == player && event.num > 0;
                            },
                            check(event, player) {
                                if (event.player.maxHp > 4 || event.player.maxHp == event.player.hp) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            line: 'fire',
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var num = trigger.player.maxHp - trigger.player.hp;
                                var num0 = trigger.num;
                                if (num0 > num) num0 = num;
                                if (!trigger.player.hasSkill('zmjue_1')) trigger.player.addSkill('zmjue_1');
                                trigger.player.storage.zmjue_1 += 1;
                                trigger.player.recover();
                                ('step 1');
                                if (trigger.player.storage.zmjue_1 >= trigger.player.maxHp) {
                                    trigger.player.storage.zmjue_1 = 0;
                                    trigger.player.removeSkill('zmjue_1');
                                    game.playzm7('zmjue0');
                                    player.$fullscreenpop('绝', 'fire');
                                    trigger.player.node.avatar.zmw7('武将牌特效通天');
                                    trigger.player.die({ source: player });
                                } else game.playzm7('zmjue1');
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmjue_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '绝',
                                    intro: {
                                        content: '以【绝】回复过#点体力,达到体力上限时你死亡',
                                    },
                                },
                            },
                        },
                        zmshangqing: {
                            group: ['zmtrenxing', 'zmtshenxing', 'zmtgaodengshengming'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                player: ['drawBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(`【上清】你即将摸${get.translation(trigger.num)}张牌,可取消之并令一名角色的上下家分别交给其1张牌/令一名角色分别交给上下家1张牌`, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (trigger.num > 1) return 0;
                                        var xj = target.next;
                                        var sj = target.previous;
                                        if (get.attitude(player, target) < 0 && target.countCards('he') > 0 && get.attitude(player, sj) > 0 && get.attitude(player, xj) > 0) return -6;
                                        if (get.attitude(player, target) > 0 && get.attitude(player, sj) <= 0 && sj.countCards('he') > 0 && get.attitude(player, xj) <= 0 && xj.countCards('he') > 0) return 4 + get.attitude(player, target);
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.finish();
                                    player.line(result.targets);
                                    event.tr = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                player
                                    .chooseControl('获得牌', '给出牌', function () {
                                        if (get.attitude(player, event.tr) <= 0) return '给出牌';
                                        return '获得牌';
                                    })
                                    .set('prompt', `选择令${get.translation(event.tr)}于上下家获得或给出牌`);
                                ('step 3');
                                event.kg = 0;
                                if (result.control == '获得牌') {
                                    event.kg++;
                                } else event.kg--;
                                ('step 4');
                                var th = event.tr.next;
                                if (event.kg == 1) {
                                    if (th.countCards('he') == 0) {
                                        event.goto(6);
                                    }
                                    th.chooseCard(`须交给${get.translation(player)}一张牌`, 1, 'he', true).set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                }
                                if (event.kg == -1) {
                                    if (event.tr.countCards('he') == 0) {
                                        event.goto(8);
                                    }
                                    event.tr.chooseCard(`须交给${get.translation(th)}一张牌`, 1, 'he', true).set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                }
                                ('step 5');
                                if (result.bool) {
                                    var th = event.tr.next;
                                    if (event.kg == -1) {
                                        event.tr.$give(result.cards[0], th);
                                        th.gain(result.cards[0], event.tr);
                                    }
                                    if (event.kg == 1) {
                                        th.$give(result.cards[0], event.tr);
                                        event.tr.gain(result.cards[0], th);
                                    }
                                }
                                ('step 6');
                                var th = event.tr.previous;
                                if (event.kg == 1) {
                                    if (th.countCards('he') == 0) {
                                        event.goto(8);
                                    }
                                    th.chooseCard(`须交给${get.translation(player)}一张牌`, 1, 'he', true).set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                }
                                if (event.kg == -1) {
                                    if (event.tr.countCards('he') == 0) {
                                        event.goto(8);
                                    }
                                    event.tr.chooseCard(`须交给${get.translation(th)}一张牌`, 1, 'he', true).set('ai', function (card) {
                                        return -get.value(card);
                                    });
                                }
                                ('step 7');
                                if (result.bool) {
                                    var th = event.tr.previous;
                                    if (event.kg == -1) {
                                        event.tr.$give(result.cards[0], th);
                                        th.gain(result.cards[0], event.tr);
                                    }
                                    if (event.kg == 1) {
                                        th.$give(result.cards[0], event.tr);
                                        event.tr.gain(result.cards[0], th);
                                    }
                                }
                                ('step 8');
                            },
                            ai: {
                                threaten: 5,
                            },
                        },
                        zmhunyuan: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return player.countUsed(null, true) % 3 == 0;
                            },
                            forced: true,
                            content() {
                                player.draw(1);
                            },
                            group: ['zmhunyuan_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:2',
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countUsed(null, true) >= 9;
                                    },
                                    content() {
                                        'step 0';
                                        player.recover(1);
                                    },
                                },
                            },
                        },
                        zmdaquanzaiwo: {
                            nobracket: true,
                            group: ['zmdaquanzaiwo_0', 'zmthundun', 'zmtrenxing'],
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                return !player.hasSkill('zmdaquanzaiwo_remove');
                            },
                            init(player) {
                                player.storage.zmdaquanzaiwo = true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                //player.addSkill("zmdaquanzaiwo_remove");
                                if (player.isZhu) {
                                    player.draw(1);
                                }
                                if (player.storage.zmdaquanzaiwo == false) {
                                    player.storage.zmdaquanzaiwo = true;
                                } else {
                                    if (player.isMinHandcard()) player.recover();
                                }
                                ('step 1');
                                player.addSkill('zmdaquanzaiwo_skip2');
                                player.phase('zmdaquanzaiwo');
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm7(['zmdaquanzaiwo_01', 'zmdaquanzaiwo_01'].randomGet());
                                        player.storage.zmdaquanzaiwo = false;
                                    },
                                },
                                skip: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        trigger.cancel();
                                        player.removeSkill('zmdaquanzaiwo_skip');
                                    },
                                },
                                skip2: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.addSkill('zmdaquanzaiwo_skip');
                                        player.removeSkill('zmdaquanzaiwo_skip2');
                                    },
                                },
                                remove: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player.isZhu;
                                    },
                                    content() {
                                        player.removeSkill('zmdaquanzaiwo_remove');
                                    },
                                },
                            },
                        },
                        zmjieyinyishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            xiandingji: true,
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            line: 'fire',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('hej');
                            },
                            content() {
                                'step 0';
                                game.playzm7('zmzhiwu2');
                                game.mp427('zmzhiwu2');
                                player.storage.zmjieyinyishi = true;
                                player.awakenSkill('zmjieyinyishi');
                                ('step 1');
                                var suits = [];
                                var hs = target.getCards('hej');
                                for (var i = 0; i < hs.length; i++) {
                                    if (!suits.includes(hs[i].suit)) {
                                        suits.push(hs[i].suit);
                                    }
                                }
                                player.gainPlayerCard(target, 'hej', Infinity, true);
                                if (suits.length >= 4) {
                                    player.addSkill('zmzhiliposui');
                                }
                            },
                            ai: {
                                combo: 'zmzhiliposui',
                                threaten: 2,
                                order: 12,
                                result: {
                                    player(player, target) {
                                        var suits = [];
                                        var hs = target.getCards('ej');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (!suits.includes(hs[i].suit)) {
                                                suits.push(hs[i].suit);
                                            }
                                        }
                                        if (suits.length < 4 && player.hp > 1) return 0;
                                        if (target != player && get.attitude(player, target) > 0 && suits.length < 4) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        var num44 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('ej', { suit: 'heart' }) > 0 && current.countCards('ej', { suit: 'spade' }) > 0 && current.countCards('ej', { suit: 'club' }) > 0 && current.countCards('ej', { suit: 'diamond' }) > 0;
                                        });
                                        if (num44 > 0) {
                                            var suits = [];
                                            var hs = target.getCards('ej');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (!suits.includes(hs[i].suit)) {
                                                    suits.push(hs[i].suit);
                                                }
                                            }
                                            if (get.attitude(player, target) <= 0 && suits.length == 4) return -8;
                                            return 0;
                                        } else {
                                            var suits1 = [];
                                            var hs1 = player.getCards('hej');
                                            for (var i = 0; i < hs1.length; i++) {
                                                if (!suits1.includes(hs1[i].suit)) {
                                                    suits1.push(hs1[i].suit);
                                                }
                                            }
                                            if (suits1.length == 4) {
                                                if (target != player) return 0;
                                                return 1;
                                            } else {
                                                var suits = [];
                                                var hs = target.getCards('ej');
                                                for (var i = 0; i < hs.length; i++) {
                                                    if (!suits.includes(hs[i].suit)) {
                                                        suits.push(hs[i].suit);
                                                    }
                                                }
                                                if (get.attitude(player, target) <= 0 && suits.length == 3 && target.countCards('h') > 3) return -1;
                                                if (player.hp == 1) return -target.countCards('he');
                                                return 0;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmanxinglongzhao: {
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (game.countPlayer() <= 1) return false;
                                if (player.hasSkill('zmanxinglongzhao_temp')) return false;
                                return event.card != undefined;
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('zmanxinglongzhao_temp', 'roundStart');
                                if (get.color(trigger.card) != undefined) {
                                    game.log('本轮内智武以外的角色不能对智武使用', get.translation(get.color(trigger.card)), '牌');
                                    player.storage.zmanxinglongzhao_color = get.color(trigger.card);
                                    player.addTempSkill('zmanxinglongzhao_color', 'roundStart');
                                }
                                ('step 1');
                                if (trigger.card.suit != undefined) {
                                    game.log('本轮内智武以外的角色不能对自己使用', get.translation(trigger.card.suit), '牌');
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            current.storage.zmanxinglongzhao_suit = trigger.card.suit;
                                            current.addTempSkill('zmanxinglongzhao_suit', 'roundStart');
                                        }
                                    });
                                }
                                ('step 2');
                                if (trigger.card.number != undefined) {
                                    game.log('本轮内智武以外的角色不能获得点数', get.translation(trigger.card.number), '的牌');
                                    game.countPlayer(function (current) {
                                        if (current != player) {
                                            current.storage.zmanxinglongzhao_number = trigger.card.number;
                                            current.addTempSkill('zmanxinglongzhao_number', 'roundStart');
                                        }
                                    });
                                }
                            },
                            subSkill: {
                                number: {
                                    trigger: {
                                        player: 'gainBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards && event.cards.length && player.storage.zmanxinglongzhao_number) {
                                            if (Array.isArray(event.cards))
                                                for (var i of event.cards) {
                                                    if (player.storage.zmanxinglongzhao_number == i.number) {
                                                        return true;
                                                    }
                                                }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmanxinglongzhao_number == i.number) {
                                                    player.lose(i, ui.discardPile)._triggered = null;
                                                }
                                            }
                                    },
                                },
                                suit: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            var suit = card.suit;
                                            if (target.storage.zmanxinglongzhao_suit != undefined) {
                                                if (player == target && suit && target.storage.zmanxinglongzhao_suit == suit) {
                                                    return false;
                                                }
                                            }
                                        },
                                    },
                                },
                                color: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            var color = get.color(card);
                                            if (target.storage.zmanxinglongzhao_color != undefined) {
                                                if (player != target && color && target.storage.zmanxinglongzhao_color == color) {
                                                    return false;
                                                }
                                            }
                                        },
                                    },
                                },
                                temp: {},
                            },
                        },
                        zmzhiliposui: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            logTarget: 'target',
                            line: 'thunder',
                            check(event, player) {
                                if (event.target.countCards('h') == 0) return false;
                                return get.attitude(player, event.target) <= 0;
                            },
                            content() {
                                'step 0';
                                trigger.baseDamage++;
                                player.gainPlayerCard(trigger.target, 'h', Infinity, true);
                                ('step 1');
                                player.chooseControl('弃置手牌', '失去体力').set('prompt', '须选择弃置所有手牌或失去两点体力').ai = function (event, player) {
                                    if (player.countCards('h') > 2 && (player.countCards('h', { name: 'tao' }) + player.countCards('h', { name: 'jiu' }) > 1 || (player.countCards('h', { name: 'tao' }) > 0 && player.hp >= 4))) return '失去体力';
                                    return '弃置手牌';
                                };
                                ('step 2');
                                if (result.control == '弃置手牌') {
                                    player.discard(player.getCards('h'));
                                    game.playzm7(['zmzhiwu1', 'zmzhiwu7', 'zmzhiwu3', 'zmzhiwu4', 'zmzhiwu5', 'zmzhiwu6'].randomGet());
                                    game.mp427('zmzhiwu');
                                }
                                if (result.control == '失去体力') {
                                    player.loseHp(2);
                                    game.playzm7(['zmzhiwu1', 'zmzhiwu7', 'zmzhiwu3', 'zmzhiwu4', 'zmzhiwu5', 'zmzhiwu6'].randomGet());
                                    game.mp427('zmzhiwu');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'tao' && player == target && player.isDamaged()) return [1, 1];
                                    },
                                },
                            },
                        },
                        zmhuimiexingjun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                global: 'phaseEnd',
                            },
                            init(player) {
                                player.storage.zmhuimiexingjun = [];
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.zmhuimiexingjun.length;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                if (num == 0) {
                                    var tricklist = [];
                                    for (var i = 0; i < player.storage.zmhuimiexingjun.length; i++) {
                                        tricklist.push(['锦囊', '', player.storage.zmhuimiexingjun[i]]);
                                    }
                                    player.chooseButton(['可视为使用一张本回合被使用过锦囊牌,之后若你本回合未造成伤害则此技能于本轮失效', [tricklist, 'vcard']], false).set('ai', function (button) {
                                        var name = button.link[2];
                                        if (name == 'wuxie' || name == 'jinchan') return 0;
                                        var card = { name: button.link[2] };
                                        return get.value(card);
                                    });
                                }
                                ('step 1');
                                player.storage.zmhuimiexingjun = [];
                                if (result.bool) {
                                    player.chooseUseTarget({ name: result.links[0][2] }, false);
                                } else event.finish();
                                ('step 2');
                                if (!player.getStat('damage')) {
                                    player.addSkill('zmhuimiexingjun2');
                                    player.disableSkill('zmhuimiexingjun2', ['zmhuimiexingjun']);
                                }
                            },
                            group: ['zmhuimiexingjun_1', 'zmhuimiexingjun_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCardEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card) == 'trick';
                                    },
                                    content() {
                                        player.storage.zmhuimiexingjun.add(trigger.card.name);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmhuimiexingjun.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmhuimiexingjun = [];
                                    },
                                },
                            },
                        },
                        zmanxingningshi: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var suit = [];
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (!suit.includes(i.suit)) suit.push(i.suit);
                                        }
                                }
                                if (event.cards[0] == undefined) return false;
                                if (event.cards && event.cards[0].name == 'sha' && event.cards.length == 1) return false;
                                return event.baseDamage < suit.length;
                            },
                            content() {
                                var suit = [];
                                if (trigger.cards) {
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (!suit.includes(i.suit)) suit.push(i.suit);
                                        }
                                }
                                if (suit.length == 1) {
                                    game.playzm7(['zmanxingningshi2', 'zmanxingningshi1'].randomGet());
                                }
                                trigger.baseDamage += suit.length;
                            },
                            group: ['zmanxingningshi_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    usable: 1,
                                    filter(event, player) {
                                        return event.num >= 3;
                                    },
                                    content() {
                                        game.playzm7('zmshiruijiesi');
                                        game.mp427('zmshiruijiesi');
                                    },
                                },
                            },
                        },
                        zmxingchenbushizhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                global: 'roundStart',
                            },
                            usable: 1,
                            forced: true,
                            init(player) {
                                player.storage.zmxingchenbushizhe = 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmxingchenbushizhe += 1;
                                ('step 1');
                                if (player.storage.zmxingchenbushizhe % 2 == 0 && player.storage.zmxingchenbushizhe % 3 == 0 && player.countCards('he') >= 3) {
                                    player
                                        .chooseCardButton('【星辰捕食者】你可将三张牌当作无视防具的【杀】对一名角色使用', player, player.getCards('he'), 3)
                                        .set('filterButton', function (button) {
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            var suits = [];
                                            if (ui.selected.buttons.length) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    var suit = ui.selected.buttons[i].link.suit;
                                                    if (!suits.includes(suit)) suits.push(suit);
                                                }
                                            }
                                            if (!suits.includes(button.link.suit)) return 12 - get.value(button.link);
                                            return 8 - get.value(button.link);
                                        });
                                } else {
                                    if (player.storage.zmxingchenbushizhe % 2 == 0 || player.storage.zmxingchenbushizhe % 3 == 0) {
                                        game.playzm7('zmxingchenbushizhe11');
                                    }
                                    if (player.storage.zmxingchenbushizhe % 2 == 0) {
                                        player.draw(2);
                                    }
                                    if (player.storage.zmxingchenbushizhe % 3 == 0) {
                                        player.recover();
                                    }
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('unequip', { player: 'shaEnd' });
                                    event.cards = result.links;
                                    player.chooseTarget(`选择使用${get.translation(event.cards)}转化的【杀】的目标？`, function (card, player, target) {
                                        return true;
                                    }).ai = function (target) {
                                        return get.effect(target, { name: 'sha' }, player, player);
                                    };
                                } else event.finish();
                                ('step 3');
                                if (result.bool && result.targets[0] != undefined) {
                                    player.useCard({ name: 'sha' }, event.cards, result.targets[0], false);
                                }
                                ('step 4');
                                player.removeSkill('unequip');
                            },
                            group: ['zmxingchenbushizhe_1', 'zmtrenxing', 'zmtmoxing', 'zmthundun'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                },
                            },
                        },
                        zmhuimiexingjun2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            _priority: 999,
                            forced: true,
                            content() {
                                'step 0';
                                player.removeSkill('zmhuimiexingjun2');
                                player.enableSkill('zmhuimiexingjun2', ['zmhuimiexingjun']);
                                player.storage.zmhuimiexingjun = [];
                            },
                            _priority: 99900,
                        },
                        zmcanjue: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmcanjue = false;
                            },
                            audio: 'ext:综漫季刊柒/audio:6',
                            usable: 1,
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) || (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) || (event.filterCard && event.filterCard({ name: 'tao' }, player, event))) {
                                    return player.isAlive;
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
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('残珏', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var num = 1;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 8 * num;
                                            case 'jiu':
                                                return 3.01 * num;
                                            case 'shan':
                                                if (player.isTurnedOver()) return 10 * num;
                                                else return 0;
                                            case 'sha':
                                                if (player.isTurnedOver()) return 10 * num;
                                                if (button.link[3] == 'fire') return 0.2 * num;
                                                else if (button.link[3] == 'fire') return 0.2 * num;
                                                else return 0;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAsFilter(player) {
                                            return player.isAlive();
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null },
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            player.storage.zmcanjue = true;
                                            player.turnOver();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用【' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '】？';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        if (_status.event.type == 'dying') {
                                            return 0.1;
                                        } else {
                                            return 6;
                                        }
                                    }
                                    return 5;
                                },
                                save: true,
                                respondSha: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'respondSha') {
                                        if (arg != 'use') return false;
                                    }
                                    return player.countCards('h') > 0;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        } else {
                                            return 1;
                                        }
                                    },
                                },
                            },
                            group: ['zmcanjue_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.cards && event.cards.length) return false;
                                        return player.storage.zmcanjue == true && get.type(event.card) == 'basic' && event.targets && event.targets.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmcanjue = false;
                                        for (var i = 0; i < trigger.targets.length; i++) {
                                            trigger.targets[i].turnOver();
                                        }
                                        ('step 1');
                                        if (player.countCards('h', { color: 'red' }) == 0 && !player.hasSkill('zmwanghuo')) {
                                            game.playzm7('zmcanjue0');
                                            player.addSkill('zmwanghuo');
                                        }
                                    },
                                },
                            },
                        },
                        zmningyuan: {
                            nobracket: true,
                            init(player) {
                                player.storage.zmningyuan = 0;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = num - player.storage.zmningyuan;
                                    return num1;
                                },
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'damageBegin' && player.hp > trigger.num + 1) {
                                    game.playzm7(['zmningyuan21', 'zmningyuan22', 'zmningyuan23', 'zmningyuan24'].randomGet());
                                }
                                player.draw();
                                player.storage.zmningyuan += 2;
                            },
                            group: ['zmningyuan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmningyuan > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmningyuan = 0;
                                    },
                                },
                            },
                        },
                        zmjueduiweiquan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:7',
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.countPlayer() > 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget([1, 3], '【绝对威权】可令至多三名其他角色将一张牌以你定义的次序置于牌堆顶', function (card, player, target) {
                                        return target.countCards('he') && target != player;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.hqs = result.targets;
                                } else event.finish();
                                ('step 2');
                                event.cards = [];
                                event.current = player.next;
                                ('step 3');
                                if (event.hqs.includes(event.current)) {
                                    var dialog = ui.create.dialog(`【绝对威权】须选择一张牌令${get.translation(player)}以任意顺序置于牌堆顶`, event.current.getCards('he'));
                                    event.current.chooseButton(1, dialog, true).set('ai', function (button) {
                                        var att = get.attitude(event.current, player);
                                        if (att > 0 && event.current.hp > player.hp) {
                                            return 9 - get.value(button.link);
                                        }
                                        return -get.value(button.link);
                                    });
                                } else event.goto(5);
                                ('step 4');
                                if (result.bool) {
                                    if (result.links && !event.cards.includes(result.links[0])) {
                                        event.cards.push(result.links[0]);
                                    }
                                }
                                ('step 5');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(3);
                                }
                                ('step 6');
                                if (event.cards.length) {
                                    var num = event.cards.length;
                                    player.chooseCardButton(num, true, '对将放置的牌进行排序,后选择的靠近牌堆顶', event.cards).set('ai', function (button) {
                                        return -get.value(button.link);
                                    });
                                } else event.finish();
                                ('step 7');
                                if (result.bool) {
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        var owner = get.owner(list[i]);
                                        owner.lose(list[i], ui.special);
                                        ui.cardPile.insertBefore(list[i], ui.cardPile.firstChild);
                                        game.log(list[i], '被置于牌堆顶');
                                    }
                                }
                            },
                        },
                        zmmoran: {
                            group: ['zmtleiren', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
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
                                    .chooseControl('弃牌', '受到伤害')
                                    .set('ai', function () {
                                        return '弃牌';
                                    })
                                    .set('prompt', '【魔染】请选择一项');
                                ('step 1');
                                if (result.control == '弃牌') {
                                    event.kg = 1;
                                    player.chooseToDiscard(2, 'he', true);
                                } else {
                                    player.damage(1);
                                    event.kg = 2;
                                }
                                ('step 2');
                                if (event.kg == 1) {
                                    var str = '令一名角色受到你一点伤害';
                                } else var str = '令一名角色弃置两张牌';
                                player
                                    .chooseTarget(
                                        str,
                                        true,
                                        function (card, player, target) {
                                            return true;
                                        },
                                        true
                                    )
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target) * target.countCards('h');
                                    });
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets);
                                    if (result.targets[0].countCards('h', { color: 'black' }) > 0) {
                                        if (event.kg == 2) {
                                            result.targets[0].chooseToDiscard(2, 'he', true);
                                        } else result.targets[0].damage(1);
                                    }
                                }
                            },
                        },
                        zmwanghuo: {
                            audio: 'ext:综漫季刊柒/audio:2',
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.isAlive() && event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var num = trigger.player.countCards('h');
                                player.chooseTarget([1, num], `【妄祸】可令至多${num}名角色弃置一张牌后获得${get.translation(trigger.player)}的一张手牌`, function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var player = _status.event.player;
                                    if (get.attitude(player, trigger.player) > 0) return 0;
                                    var att = get.attitude(player, target);
                                    if (target == trigger.player) return 99;
                                    if (att > 0 && target.countCards('h') > 2) return 9;
                                    return -att;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.removeSkill('zmwanghuo');
                                    var t = Math.random();
                                    if (t >= 0.5) {
                                        game.mp427('zmnailuo');
                                    } else game.mp427('zmnailuo2');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].chooseToDiscard(1, 'he', true);
                                        targets[i].gainPlayerCard(trigger.player, 1, 'h', true);
                                    }
                                }
                            },
                        },
                        zmwanglingpaihuai: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                player: 'drawBegin',
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `【亡灵徘徊】你即将摸${event.num}张牌,是否改为回复一点体力？`;
                                return str;
                            },
                            check(event, player) {
                                if (player.hp > 5 && event.num > 1) return false;
                                if ((player.countCards('h') <= 2 && player.hp > 1) || event.num > 2) return false;
                                return player.hp < player.maxHp;
                            },
                            filter(event, player) {
                                return event.num > 0 && player.maxHp >= 10;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                trigger.cancel();
                            },
                        },
                        zmwuweideyindaozhe: {
                            group: ['zmtrenxing', 'zmtjixie', 'zmwuweideyindaozhe_1'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                player: ['useCardEnd'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                                var num0 = game.countPlayer(function (current) {
                                    return current.countCards('h') >= player.countCards('h') && player.canCompare(current);
                                });
                                return num0 > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【无为的引导者】须与一名手牌不少于你的角色拼点', true, function (card, player, target) {
                                        return player.canCompare(target) && target.countCards('h') >= player.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseToCompare(result.targets[0]);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.draw(2);
                                }
                                if (player.countCards('h') == 0) {
                                    player.draw(2);
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                        target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                    },
                                    filter(event, player) {
                                        return player.maxHp < 10;
                                    },
                                    _priority: -100,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (trigger.target != player) event.tr = trigger.target;
                                        if (trigger.player != player) event.tr = trigger.player;
                                        var next = player.chooseCardButton([trigger.card1, trigger.card2], `可将其中一张牌交给${get.translation(event.tr)},之后你增加一点体力上限`);
                                        next.ai = function (button) {
                                            if (get.attitude(_status.event.player, event.tr) > 0) return get.value(button.link, event.tr);
                                            return 9 - get.value(button.link, event.tr);
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            event.tr.gain(result.links[0], 'gain2');
                                            player.gainMaxHp();
                                        }
                                    },
                                    _priority: -10000,
                                },
                            },
                        },
                        zmzhenhunzhijian: {
                            audio: 'ext:综漫季刊柒/audio:3',
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
                                event.Q = target.name;
                                game.playzm7('zmkailong');
                                game.mp427('zmkailong');
                                target.damage(2);
                                ('step 1');
                                player.awakenSkill('zmzhenhunzhijian');
                                if (target.isAlive && target.hp > 0 && event.Q == target.name) {
                                    player.loseHp(target.hp);
                                    event.finish();
                                }
                                ('step 2');
                                player.storage.zmzhenhunzhijian_1 = 2;
                                player.addSkill('zmzhenhunzhijian_1');
                            },
                            ai: {
                                threaten: 1,
                                order: 1,
                                result: {
                                    player(player, target) {
                                        if (target.hp - 2 >= player.hp) return 0;
                                        if (get.attitude(player, target) > 0 || target.countCards('h') >= 3 || target.hp >= 3) return 0;
                                        return 1;
                                    },
                                    target(player, target, card) {
                                        if (target.hp - 2 >= player.hp) return 0;
                                        if (get.attitude(player, target) > 0 || target.countCards('h') >= 3 || target.hp >= 3) return 0;
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '魂',
                                    intro: {
                                        content(storage, player, skill) {
                                            var num = player.storage.zmzhenhunzhijian_1;
                                            return num + '轮后你重置【镇魂之剑】';
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmzhenhunzhijian_1 = 2;
                                    },
                                    nobracket: true,
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    usable: 1,
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmzhenhunzhijian_1--;
                                        ('step 1');
                                        if (player.storage.zmzhenhunzhijian_1 <= 0) {
                                            player.removeSkill('zmzhenhunzhijian_1');
                                            player.restoreSkill('zmzhenhunzhijian');
                                        }
                                    },
                                },
                            },
                        },
                        zmchaijiecaipian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.num('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    game.playzm7(['zmcaijianqiepian11', 'zmcaijianqiepian12', 'zmcaijianqiepian13', 'zmcaijianqiepian14'].randomGet());
                                    player.gainPlayerCard(target, 1, 'he', true, 'visible');
                                } else {
                                    if (result.num2 > result.num1) {
                                        game.playzm7(['zmcaijianqiepian21', 'zmcaijianqiepian22', 'zmcaijianqiepian23', 'zmcaijianqiepian23'].randomGet());
                                        target.gainPlayerCard(player, 1, 'he', true, 'visible');
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number >= 9) {
                                                    num++;
                                                }
                                            }
                                        if (num == 0) return 0;
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num < 5) return -2;
                                        if (target.countCards('he') == 1) return 0;
                                        if (num < 3) return -3;
                                        if (num == 1) return -5;
                                        return -1;
                                    },
                                },
                                order: 12,
                            },
                        },
                        zmfenghezhisui: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = 0;
                                var num2 = 0;
                                var hs = player.getCards('hej');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.storage.zmfenghezhisui_2.includes(hs[i])) {
                                        num2++;
                                    }
                                    if (player.storage.zmfenghezhisui_1.includes(hs[i])) {
                                        num1++;
                                    }
                                }
                                return player.countDisabledSlot() > 0 || num2 > 0 || num1 < player.countCards('hej') / 2;
                            },
                            content() {
                                'step 0';
                                if (player.countDisabledSlot() > 0) {
                                    player.draw();
                                }
                                ('step 1');
                                var num1 = 0;
                                var num2 = 0;
                                var hs = player.getCards('hej');
                                for (var i = 0; i < hs.length; i++) {
                                    if (player.storage.zmfenghezhisui_2.includes(hs[i])) {
                                        num2++;
                                    }
                                    if (player.storage.zmfenghezhisui_1.includes(hs[i])) {
                                        num1++;
                                    }
                                }
                                if (num2 > 0) {
                                    player.draw();
                                }
                                if (num1 < player.countCards('hej') / 2) {
                                    player.draw();
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            group: ['zmfenghezhisui_1', 'zmfenghezhisui_2', 'zmfenghezhisui_3', 'zmtmoxing', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['phaseDrawAfter'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmfenghezhisui_1 = [];
                                    },
                                    filter(event, player, name) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (!player.storage.zmfenghezhisui_1.includes(i)) {
                                                    player.storage.zmfenghezhisui_1.push(i);
                                                }
                                            }
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: ['rewriteGainResult'],
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmfenghezhisui_2 = [];
                                    },
                                    filter(event, player, onrewrite) {
                                        return event.result.cards && event.target != player;
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < trigger.result.cards.length; i++) {
                                            if (!player.storage.zmfenghezhisui_2.includes(trigger.i)) {
                                                player.storage.zmfenghezhisui_2.push(trigger.i);
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.type == 'use' && get.type(event.cards[0]) == 'equip' && event.cards.length == 1) return false;
                                        if (!event.cards || !event.cards.length) return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmfenghezhisui_1.includes(i) || player.storage.zmfenghezhisui_2.includes(i)) {
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        //&&player.storage.zmxushihuajing_1.includes(event.card);
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmfenghezhisui_2.includes(i)) {
                                                    player.storage.zmfenghezhisui_2.remove(i);
                                                }
                                                if (player.storage.zmfenghezhisui_1.includes(i)) {
                                                    player.storage.zmfenghezhisui_1.remove(i);
                                                }
                                            }
                                    },
                                },
                            },
                        },
                        zmxinghongxiutao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.targets && event.targets.length > 1;
                            },
                            content() {
                                'step 0';
                                var type = get.type(trigger.card);
                                if (type == 'equip' || type == 'delay' || player.countDisabledSlot() >= 5) {
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
                                        .chooseTarget(`【猩红袖套】是否废除一个装备栏并额外指定一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            if (player.countDisabledSlot() >= 2) return 0;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'huogong') return 0;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'jiu') return 0;
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'shunshou') return 0;
                                            if (player.countDisabledSlot() == 0) return 1;
                                            if (player.countDisabledSlot() == 0) return -1;
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
                                    trigger.targets.add(event.target);
                                    player.line(trigger.player, { color: [221, 17, 0] });
                                    player.chooseToDisable().ai = function (event, player, list) {
                                        if (list.includes('equip5')) return 'equip5';
                                        if (list.includes('equip3')) return 'equip3';
                                        return list.randomGet();
                                    };
                                }
                                event.finish();
                                ('step 4');
                                if (player.countDisabledSlot() == 0) {
                                    event.goto(6);
                                }
                                player
                                    .chooseTarget(`【猩红袖套】是否回复一个装备栏并移除一名${get.translation(trigger.card)}的目标？`, function (card, player, target) {
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
                                    player.chooseToEnable();
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
                        },
                        zmyuyesezhong: {
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                event.player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                return (event.source && event.source.getStat('damage') > 1) || (event.player.isAlive() && num > 1);
                            },
                            content() {
                                'step 0';
                                var att = get.attitude(player, trigger.source);
                                if (trigger.source && trigger.source.getStat('damage') > 1 && trigger.source.countCards('hej')) {
                                    if (trigger.source.countCards('h') > 1 && att <= 0) {
                                        game.playzm7(['zmyuyesezhong11', 'zmyuyesezhong12', 'zmyuyesezhong13', 'zmyuyesezhong14'].randomGet());
                                    }
                                    if (trigger.source.countCards('j') > 1 && att > 0) {
                                        game.playzm7('zmyuyesezhong21');
                                    }
                                    player.line(trigger.source, { color: [136, 17, 221] });
                                    player.discardPlayerCard('hej', trigger.source, 1, false);
                                }
                                ('step 1');
                                var num = 0;
                                trigger.player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                if (trigger.player.isAlive() && num > 1 && trigger.player.countCards('hej')) {
                                    var att = get.attitude(player, trigger.player);
                                    if (trigger.player.countCards('h') > 1 && att <= 0) {
                                        game.playzm7(['zmyuyesezhong11', 'zmyuyesezhong12', 'zmyuyesezhong13', 'zmyuyesezhong14'].randomGet());
                                    }
                                    if (trigger.player.countCards('j') > 1 && att > 0) {
                                        game.playzm7('zmyuyesezhong21');
                                    }
                                    player.line(trigger.player, { color: [136, 17, 221] });
                                    player.discardPlayerCard('hej', trigger.player, 1, false);
                                }
                            },
                            group: ['zmyuyesezhong_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyuyesezhong_1 = 0;
                                    },
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    prompt(event, player) {
                                        return `【与夜色中】是否对${get.translation(event.player)}造成一点伤害？`;
                                    },
                                    line: 'thunder',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        if (event.getParent(3).name != 'zmyuyesezhong') return false;
                                        if (event.player.countCards('h')) return false;
                                        return event.hs && event.hs.length && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmyuyesezhong_1 == 9 || (player.storage.zmyuyesezhong_1 == 1 && !player.hasSkill('zmliangzizhiying_zf'))) {
                                            game.playzm7('zmxier0');
                                        } else game.playzm7('zmxier');
                                        if (player.storage.zmyuyesezhong_1 == 1 && player.hasSkill('zmliangzizhiying_zf')) {
                                            player.storage.zmyuyesezhong_1 = 9;
                                            game.mp427('zmxier2');
                                        }
                                        if (player.storage.zmyuyesezhong_1 == 0) {
                                            player.storage.zmyuyesezhong_1 = 1;
                                            game.mp427('zmxier1');
                                        }
                                        ('step 1');
                                        trigger.player.damage(1);
                                    },
                                },
                            },
                        },
                        zmliangzizhiying: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmliangzizhiying = [];
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('h', { type: 'basic' }) > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardButton(`可对${get.translation(trigger.player)}无视合理性使用一张基本牌,若该牌未被响应则你可获得其一张手牌`, player, player.getCards('h'));
                                next.ai = function (button) {
                                    if (!trigger.player.isDamaged() && button.link.name == 'tao') return 0;
                                    if (get.attitude(player, trigger.player) < 0 && button.link.name == 'du') return 99;
                                    if (get.attitude(player, trigger.player) < 0 && get.effect(trigger.player, { name: 'sha' }, player) > 0 && button.link.name == 'sha') return 99;
                                    if (get.attitude(player, trigger.player) < 0 && get.effect(trigger.player, { name: 'sha' }, player) > 0 && button.link.name == 'sha' && player.countCards('h', { name: 'sha' }) > 1 && trigger.player.countCards('h')) return 90;
                                    if (get.attitude(player, trigger.player) > 0 && trigger.player.hp < player.hp && button.link.name == 'tao') return 92;
                                    if (get.attitude(player, trigger.player) < 0 && player.countCards('h', { name: 'shan' }) > 1 && player.hp > 2 && trigger.player.countCards('h') && button.link.name == 'shan') return 8;
                                    if (get.attitude(player, trigger.player) < 0 && player.countCards('h', { name: 'jiu' }) > 1 && player.hp > 2 && trigger.player.countCards('h') && button.link.name == 'jiu') return 10;
                                    return 0;
                                };
                                next.filterButton = function (button) {
                                    return get.type(button.link) == 'basic';
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (get.tag(result.links[0], 'recover')) {
                                        game.playzm7(['zmliangzizhiying22', 'zmliangzizhiying21'].randomGet());
                                    } else game.playzm7(['zmliangzizhiying12', 'zmliangzizhiying11', 'zmliangzizhiying13', 'zmliangzizhiying14', 'zmliangzizhiying15', 'zmliangzizhiying16'].randomGet());
                                    event.card = result.links[0];
                                    player.storage.zmliangzizhiying.push(result.links[0]);
                                    player.useCard(event.card, trigger.player, false);
                                }
                                ('step 2');
                                if (player.storage.zmliangzizhiying.length && trigger.player.isAlive() && trigger.player.countCards('h')) {
                                    player.gainPlayerCard(trigger.player, 1, 'h', false);
                                }
                                ('step 3');
                                player.storage.zmliangzizhiying = [];
                            },
                            group: ['zmliangzizhiying_2', 'zmliangzizhiying_1', 'zmtrenxing', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var respondTo = event.respondTo;
                                        if (event.player == player) return false;
                                        if (player.storage.zmliangzizhiying.length == 0) return false;
                                        return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliangzizhiying = [];
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageEnd',
                                        player: ['useCardToPlayer', 'rewriteGainResult', 'rewriteDiscardResult'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (_status.currentPhase == player) return false;
                                        if (name == 'useCardToPlayer' && event.card.name == 'wuxie') return false;
                                        if (name == 'useCardToPlayer' && !event.targets) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (_status.currentPhase == trigger.target && (event.triggername == 'rewriteGainResult' || event.triggername == 'rewriteDiscardResult')) {
                                            if (!trigger.target.hasSkill('zmliangzizhiying_3')) {
                                                trigger.target.addTempSkill('zmliangzizhiying_3');
                                                trigger.target.storage.zmliangzizhiying_3 = 1;
                                            } else {
                                                trigger.target.storage.zmliangzizhiying_3++;
                                            }
                                        }
                                        if (_status.currentPhase == trigger.player && event.triggername == 'damageEnd') {
                                            if (!trigger.player.hasSkill('zmliangzizhiying_3')) {
                                                trigger.player.addTempSkill('zmliangzizhiying_3');
                                                trigger.player.storage.zmliangzizhiying_3 = 1;
                                            } else {
                                                trigger.player.storage.zmliangzizhiying_3++;
                                            }
                                        }
                                        if (event.triggername == 'useCardToPlayer') {
                                            if (trigger.targets && trigger.targets.length) {
                                                for (var i = 0; i < trigger.targets.length; i++) {
                                                    if (_status.currentPhase == trigger.targets[i] && !trigger.targets[i].hasSkill('zmliangzizhiying_3')) {
                                                        trigger.targets[i].addTempSkill('zmliangzizhiying_3');
                                                        trigger.targets[i].storage.zmliangzizhiying_3 = 1;
                                                    } else {
                                                        trigger.targets[i].storage.zmliangzizhiying_3++;
                                                    }
                                                }
                                            }
                                        }
                                        ('step 1');
                                        if (event.triggername == 'useCardToPlayer') {
                                            if (trigger.targets && trigger.targets.length) {
                                                for (var i = 0; i < trigger.targets.length; i++) {
                                                    if (trigger.targets[i].hasSkill('zmliangzizhiying_3') && trigger.targets[i].storage.zmliangzizhiying_3 > 1 && !trigger.targets[i].hasSkill('zmliangzizhiying_jy')) {
                                                        game.playzm7('zmxier00');
                                                        trigger.targets[i].addTempSkill('zmliangzizhiying_jy');
                                                        player.addTempSkill('zmliangzizhiying_zf');
                                                    }
                                                }
                                            }
                                        }
                                        if (event.triggername == 'damageEnd') {
                                            if (trigger.player.hasSkill('zmliangzizhiying_3') && trigger.player.storage.zmliangzizhiying_3 > 1 && !trigger.player.hasSkill('zmliangzizhiying_jy')) {
                                                game.playzm7('zmxier00');
                                                trigger.player.addTempSkill('zmliangzizhiying_jy');
                                                player.addTempSkill('zmliangzizhiying_zf');
                                            }
                                        }
                                        if (event.triggername == 'rewriteGainResult' || event.triggername == 'rewriteDiscardResult') {
                                            if (trigger.target.hasSkill('zmliangzizhiying_3') && trigger.target.storage.zmliangzizhiying_3 > 1 && !trigger.target.hasSkill('zmliangzizhiying_jy')) {
                                                game.playzm7('zmxier00');
                                                trigger.target.addTempSkill('zmliangzizhiying_jy');
                                                player.addTempSkill('zmliangzizhiying_zf');
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmliangzizhiying_3 = 0;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliangzizhiying_3 = 0;
                                    },
                                },
                                jy: {
                                    mark: true,
                                    marktext: '缠',
                                    intro: {
                                        content(storage) {
                                            return '【纠缠】你的手牌上限减半';
                                        },
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return Math.ceil(num / 2);
                                        },
                                    },
                                },
                                zf: {
                                    mark: true,
                                    marktext: '增',
                                    intro: {
                                        content(storage) {
                                            return '【增幅】你造成的伤害翻倍';
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
                                        trigger.num *= 2;
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        zmliuyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:9',
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getExpansions('zmliuyan').length;
                            },
                            content() {
                                'step 0';
                                event.cards = player.getExpansions('zmliuyan').slice(0);
                                var next = player.chooseCardButton('【六眼】可自其中一张牌开始向后使用剩余牌,终止时弃置以此法放置的牌', 1, event.cards);
                                next.set('ai', function (button) {
                                    return player.getUseValue(button);
                                });
                                next.filterButton = function (button) {
                                    return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num0 = 0;
                                    var bq = result.links[0];
                                    event.list = [];
                                    var list = player.getExpansions('zmliuyan');
                                    for (var i = 0; i < list.length; i++) {
                                        if (list[i] == bq) num0++;
                                        if (num0 > 0) {
                                            event.list.push(list[i]);
                                        }
                                    }
                                } else {
                                    var cards = player.getExpansions('zmliuyan');
                                    player.loseToDiscardpile(cards);
                                    event.finish();
                                }
                                ('step 2');
                                if (event.list.length && lib.filter.cardEnabled(event.list[0], player) && player.hasUseTarget(event.list[0])) {
                                    var dq = event.list[0];
                                    event.list.remove(event.list[0]);
                                    player.chooseUseTarget(dq, false);
                                } else {
                                    var cards = player.getExpansions('zmliuyan');
                                    player.loseToDiscardpile(cards);
                                    event.finish();
                                }
                                ('step 3');
                                if (result && result.bool) {
                                    if (event.list.length) event.goto(2);
                                }
                                ('step 4');
                                var cards = player.getExpansions('zmliuyan');
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            group: ['zmliuyan_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (get.itemtype(event.cards) != 'cards') return false;
                                        if (event.getParent(3).name == 'zmliuyan') return false;
                                        if (event.getParent(2).name == 'zmliuyan') return false;
                                        if (event.parent.name == 'zmliuyan') return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = get.cards()[0];
                                        player.addToExpansion(event.cards, player, 'give').gaintag.add('zmliuyan');
                                    },
                                },
                            },
                        },
                        zmwuxiaxianshushi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:10',
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.card.name == 'nanman' || event.card.name == 'wanjian') return true;
                                return get.attitude(player, event.player) <= 0;
                            },
                            init(player) {
                                player.storage.zmwuxiaxianshushi = false;
                            },
                            filter(event, player) {
                                var type = get.type(event.card);
                                if (event.card) {
                                    return get.tag(event.card, 'damage') && type != player.storage.zmwuxiaxianshushi;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.storage.zmwuxiaxianshushi = get.type(trigger.card);
                                trigger.player.draw();
                                trigger.targets.remove(player);
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        zmwuliangkongchu: {
                            group: ['zmtgaodengliliang', 'zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            line: 'thunder',
                            filter(event, player) {
                                if (player.storage.zmt_np < 50) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                game.playzm7(['zmwutiaowu1', 'zmwutiaowu2'].randomGet());
                                game.mp427('zmwutiaowu');
                                ('step 1');
                                target.addSkill('zmwuliangkongchu_0');
                                target.storage.zmwuliangkongchu_0 += 1;
                                if (target.storage.zmwuliangkongchu_0 > 1) {
                                    var num = (target.storage.zmwuliangkongchu_0 - 1) * 10;
                                    target.loseHp(Math.floor(num));
                                }
                                target.node.avatar.zmw7('武将牌特效五条悟');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkill('zmwuliangkongchu_0')) return -5;
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '空',
                                    intro: {
                                        markcount(storage, player) {
                                            var num = Math.floor(player.storage.zmwuliangkongchu_0 * 100);
                                            return num;
                                        },
                                        content(storage, player) {
                                            var num = Math.floor(player.storage.zmwuliangkongchu_0 * 100);
                                            return `你使用牌有${num}%的概率失效,每次使用时减少10%概率`;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmwuliangkongchu_0 = 0;
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuliangkongchu_0 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuliangkongchu_0 -= 0.1;
                                        if (Math.random() <= player.storage.zmwuliangkongchu_0) {
                                            game.log(trigger.player, '使用的', trigger.card, '失效');
                                            player.node.avatar.zmw7('武将牌特效五条悟');
                                            trigger.untrigger();
                                            trigger.finish();
                                        }
                                        ('step 1');
                                        if (player.storage.zmwuliangkongchu_0 < 0.1) player.removeSkill('zmwuliangkongchu_0');
                                    },
                                },
                            },
                        },
                        zmzhongliyazhi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                player: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                var num2 = game.countPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                                if (player.countCards('h') == 0 || num2 == 0) return false;
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
                                event.num = 0;
                                event.cards = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.position(i) == 'd') {
                                            event.cards.push(i);
                                        }
                                    }
                                ('step 1');
                                player
                                    .chooseTarget('可使用与一名合理角色进行拼点至你未赢', function (card, player, target) {
                                        return player != target && player.canCompare(target);
                                    })
                                    .set('ai', function (target) {
                                        if (target.countCards('h') == 1 && get.attitude(player, target) < 0) return 99;
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 3');
                                if (event.cards.length && event.num == 0) {
                                    var card = event.cards[0];
                                    event.cards.remove(card);
                                    var next = player.chooseToCompare(event.target);
                                    next.set('small', true);
                                    if (!next.fixedResult) next.fixedResult = {};
                                    next.fixedResult[player.playerid] = card;
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    event.goto(5);
                                } else {
                                    if (event.target.countCards('h') == 0) {
                                        event.num = 1;
                                        event.target.loseHp();
                                        if (event.cards.length) {
                                            event.target.gain(event.cards);
                                            event.target.$gain2(event.cards);
                                            event.goto(6);
                                        }
                                    }
                                    event.goto(6);
                                }
                                ('step 5');
                                if (event.target.countCards('h') == 0) {
                                    event.num = 1;
                                    event.target.loseHp();
                                    if (event.cards.length) {
                                        event.target.gain(event.cards);
                                        event.target.$gain2(event.cards);
                                        event.goto(6);
                                    }
                                    event.goto(6);
                                }
                                event.goto(3);
                                ('step 6');
                            },
                        },
                        zmwuzhijuxian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                global: ['useCardAfter'],
                            },
                            check(event, player) {
                                if (event.cards[0] != undefined && event.cards.length && get.value(event.cards[0]) <= 0) return false;
                                // if(event.cards[0]!=undefined&&get.attitude(player,event.player)>0&&(get.type(event.card)=="equip"||get.type(event.card)=="delay")) return false;
                                return true;
                            },
                            filter(event, player, name) {
                                if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return false;
                                var num0 = 0;
                                var hs = player.getCards('h');
                                if (hs.length) {
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number > num0) {
                                            num0 = hs[i].number;
                                        }
                                    }
                                }
                                return event.cards[0] != undefined && event.player != player && event.cards.length && event.card.number > num0;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('h') > 0) player.showHandcards();
                                ('step 1');
                                player.gain(trigger.cards, 'gain2');
                            },
                        },
                        zmnisiheidong: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            audio: 'ext:综漫季刊柒/audio:1',
                            nobracket: true,
                            enable: 'phaseUse',
                            logTarget: 'target',
                            selectTarget: [1, Infinity],
                            filter(event, player) {
                                return player.storage.zmt_np >= 80;
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                return true;
                            },
                            contentBefore() {
                                game.mp427('zmwaerte');
                                player.storage.zmt_np -= 80;
                            },
                            content() {
                                var num = 0;
                                player.line(target);
                                if (target.countCards('h') > 1) {
                                    var num1 = target.countCards('h') - 1;
                                    num += num1;
                                    target.chooseToDiscard(num1, 'h', true);
                                }
                                if (target.countCards('e') > 1) {
                                    var num2 = target.countCards('e') - 1;
                                    num += num2;
                                    target.chooseToDiscard(num2, 'e', true);
                                }
                                if (target.countCards('j') > 1) {
                                    var num3 = target.countCards('j') - 1;
                                    num += num3;
                                    target.chooseToDiscard(num3, 'j', true);
                                }
                                //   if(num>target.hp){  target.turnOver();};
                            },
                            ai: {
                                result: {
                                    player(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return (get.attitude(player, current) < 0 && current.countCards('h') > 1) || (get.attitude(player, current) < 0 && current.countCards('e') > 1) || (get.attitude(player, current) < 0 && current.countCards('j') > 1);
                                        });
                                        if (num4 == 0) return 0;
                                        if (target.countCards('h') <= 1 && target.countCards('e') <= 1) return 0;
                                        return -1;
                                    },
                                    target(player, target) {
                                        var num = 0;
                                        if (target.countCards('h') <= 1 && target.countCards('e') <= 1) return 0;
                                        if (target.countCards('h') > 1) {
                                            num += target.countCards('h') - 1;
                                        }
                                        if (target.countCards('e') > 1) {
                                            num += target.countCards('e') - 1;
                                        }
                                        if (target.countCards('j') > 1) {
                                            num += target.countCards('j') - 1;
                                        }
                                        if (num == 0) return 0;
                                        return -2;
                                    },
                                },
                                order: 12,
                                expose: 0.4,
                            },
                        },
                        zmzhenmimouhua: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, 1],
                            discard: false,
                            lose: false,
                            delay: 0,
                            position: 'he',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            check(card) {
                                if (get.position(card) != 'h') return 0;
                                return 18 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.tr = target;
                                target.gain(cards, player, 'giveAuto');
                                ('step 1');
                                if (event.tr.countCards('h') == player.countCards('h')) {
                                    event.tr
                                        .chooseTarget('可选择一名与你手牌数不同的角色弃置其一张手牌', false, function (card, player, target) {
                                            return event.tr.countCards('h') != target.countCards('h') && target.countCards('h');
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.tr.line(result.targets);
                                    event.target = result.targets[0];
                                    event.tr.discardPlayerCard(event.target, 1, 'h', true);
                                }
                            },
                            ai: {
                                threaten: 0.8,
                                order(skill, player) {
                                    return 12;
                                },
                                result: {
                                    player(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('h') > 0 && current.countCards('h') != player;
                                        });
                                        if (num4 > 0) return 1;
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target != player) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        zmjuedingdeyishou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('zmjuedingdeyishou'), '选择摸牌的角色？', function (card, player, target) {
                                        return !target.hasSkill('zmjuedingdeyishou_0');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, trigger.player) > 0) return 0;
                                        if ((target.hp == 0 && target.countCards('h') > 3) || (target.hp == 0 && get.attitude(player, target) == 0 && target.countCards('h') > 0)) return -99;
                                        return -get.attitude(player, target) * target.countCards('h');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    result.targets[0].addTempSkill('zmjuedingdeyishou_0');
                                    result.targets[0].draw();
                                }
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '<span style="color: red">禁</span>',
                                    intro: {
                                        content(storage) {
                                            return '你不能使用或打出牌,友方角色死亡后你失去2点体力';
                                        },
                                    },
                                    trigger: {
                                        global: 'dieBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getFriends().includes(event.player) && player.hp > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.loseHp(2);
                                    },
                                    mod: {
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
                        zmsijiaoqieru: {
                            nobracket: true,
                            trigger: {
                                global: ['damageBegin'],
                            },
                            usable: 2,
                            forced: true,
                            filter(event, player) {
                                var tr = [];
                                var hm = 999;
                                game.countPlayer(function (current) {
                                    var num = Math.abs(player.countCards('h') - current.countCards('h'));
                                    if (hm > num) {
                                        hm = num;
                                    }
                                });
                                ///
                                game.countPlayer(function (current) {
                                    var num = Math.abs(player.countCards('h') - current.countCards('h'));
                                    if (hm == num) {
                                        tr.push(current);
                                    }
                                });
                                return event.source && tr.includes(event.source);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                var tr = [];
                                var hm = 0;
                                game.countPlayer(function (current) {
                                    var num = Math.abs(player.countCards('h') - current.countCards('h'));
                                    if (hm < num) {
                                        hm = num;
                                    }
                                });
                                ///
                                game.countPlayer(function (current) {
                                    var num = Math.abs(player.countCards('h') - current.countCards('h'));
                                    if (hm == num) {
                                        tr.push(current);
                                    }
                                });
                                if (trigger.player && tr.includes(trigger.player)) {
                                    player
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (get.attitude(player, trigger.player) <= 0) return '确定';
                                            return 'cancel2';
                                        })
                                        .set('prompt', `是否令${get.translation(trigger.player)}受到的伤害+1？`);
                                } else {
                                    if (get.attitude(player, trigger.player) <= 0) {
                                        game.playzm7(['zmsijiaoqieru6', 'zmsijiaoqieru5', 'zmsijiaoqieru4', 'zmsijiaoqieru3', 'zmsijiaoqieru2', 'zmsijiaoqieru1'].randomGet());
                                    } else {
                                        game.playzm7(['zmsijiaoqieru6', 'zmsijiaoqieru5'].randomGet());
                                    }
                                    event.goto(4);
                                }
                                ('step 2');
                                if (result.control == '确定') {
                                    trigger.num += 1;
                                    player.line(trigger.player);
                                } else {
                                    if (get.attitude(player, trigger.player) <= 0) {
                                        game.playzm7(['zmsijiaoqieru6', 'zmsijiaoqieru5', 'zmsijiaoqieru4', 'zmsijiaoqieru3', 'zmsijiaoqieru2', 'zmsijiaoqieru1'].randomGet());
                                    } else {
                                        game.playzm7(['zmsijiaoqieru6', 'zmsijiaoqieru5'].randomGet());
                                    }
                                    event.goto(4);
                                }
                                ('step 3');
                                game.playzm7(['zmzhahake1', 'zmzhahake2'].randomGet());
                                game.mp427('zmzhahake');
                                event.finish();
                                ('step 4');
                            },
                        },
                        zmnongshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                global: 'gainBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var owner = get.owner(event.cards[0]);
                                if (!game.players.includes(owner) || event.cards[0] == undefined) return false;
                                if (owner == player && player.countCards('he') == event.cards.length) return false;
                                if (event.player == owner || event.player == player) return false;
                                return event.cards && event.cards.length && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var he = player.getCards('he');
                                for (var i = 0; i < he.length; i++) {
                                    if (!trigger.cards.includes(he[i])) {
                                        list.push(he[i]);
                                    }
                                }
                                var owner = get.owner(trigger.cards[0]);
                                var str = `【弄势】${get.translation(trigger.player)}即将获得${get.translation(owner)}的${get.translation(trigger.cards)},是否用你的一张牌替换其中一张牌?`;
                                var dialog = ui.create.dialog(str, 'hidden');
                                dialog.addText(`【${get.translation(player)}】的牌`);
                                dialog.add(list);
                                dialog.addText('可替换的牌');
                                dialog.add(trigger.cards);
                                player
                                    .chooseButton(dialog, 2)
                                    .set('filterButton', function (button) {
                                        var num = ui.selected.buttons.length;
                                        if (num == 1) return !trigger.cards.includes(button.link);
                                        return trigger.cards.includes(button.link);
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        var hd = trigger.player;
                                        var sq = owner;
                                        if (get.attitude(player, hd) > 0) return 0;
                                        if (trigger.cards.includes(button.link)) {
                                            return get.value(button.link);
                                        }
                                        if (!trigger.cards.includes(button.link)) {
                                            if (get.value(button.link) > get.value(ui.selected.buttons[0].link)) return 0;
                                            return -get.value(button.link);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var owner = get.owner(trigger.cards[0]);
                                    if (owner != player) {
                                        game.playzm7(['zmnongshi11', 'zmnongshi12'].randomGet());
                                    } else game.playzm7(['zmnongshi21', 'zmnongshi21'].randomGet());
                                    var list = result.links;
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if (i == result.links[0]) {
                                                var card = i;
                                                i = result.links[1];
                                            }
                                        }
                                    if (card && owner != player) player.gain(card, owner, 'give');
                                }
                            },
                        },
                        zmjingxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            check(event, player) {
                                //  if(get.tag(event.card,'damage')) return true;
                                if (get.tag(event.card, 'save') || get.tag(event.card, 'recover') || get.tag(event.card, 'draw')) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.card && event.card.number && player.countCards('h') == event.card.number;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.number == player.countCards('h')) {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                            group: ['zmjingxi_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:1',
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    prompt(event, player) {
                                        return `【镜隙】是否成为${get.translation(event.player)}使用的${get.translation(event.card)}之额外目标？`;
                                    },
                                    check(event, player) {
                                        if (get.type(event.card) == 'equip' || get.tag(event.card, 'damage')) return false;
                                        if (get.type(event.card) == 'delay' && get.attitude(player, event.targets[0]) > 0) return true;
                                        if (get.tag(event.card, 'save') || get.tag(event.card, 'recover') || get.tag(event.card, 'draw')) return true;
                                        return get.effect(player, event.card, player, player);
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (event.targets && event.targets.includes(player)) return false;
                                        return event.targets && event.targets.length && player.countCards('h') == event.card.number;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.targets.add(player);
                                        game.log(player, '成为了', trigger.card, '的额外目标.');
                                    },
                                },
                            },
                        },
                        zmdiemeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                trigger.player.storage.zmdiemeng_1 = player;
                                trigger.player.addTempSkill('zmdiemeng_1', { player: 'phaseBegin' });
                            },
                            group: ['zmtrenxing', 'zmtshikong'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '梦',
                                    intro: {
                                        content: '你于进行的下个回合内所有手牌均视为【闪】',
                                    },
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        var mb = player.storage.zmdiemeng_1;
                                        if (player.storage.zmdiemeng_1 && player.storage.zmdiemeng_1.isAlive()) mb.line(player, { color: [102, 119, 204] });
                                        event.num = 0;
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            for (var i = 0; i < hs.length; i++) {
                                                if (hs[i].name != 'shan') {
                                                    event.num++;
                                                }
                                            }
                                        }
                                        ('step 1');
                                        ('step 2');
                                        player.addTempSkill('zmdiemeng_2');
                                        if (player.storage.zmdiemeng_1 && player.storage.zmdiemeng_1.isAlive()) {
                                            var mb = player.storage.zmdiemeng_1;
                                            if (player.countCards('h') >= 2 || event.num > mb.countCards('h')) {
                                                game.playzm7(['zmluya1', 'zmluya2'].randomGet());
                                                game.mp427('zmluya');
                                            } else {
                                                game.playzm7(['zmluya0', 'zmluya0', 'zmluya00'].randomGet());
                                            }
                                            if (event.num > mb.countCards('h')) {
                                                mb.draw(event.num - mb.countCards('h'));
                                            }
                                        }
                                    },
                                },
                                2: {
                                    mod: {
                                        cardname(card) {
                                            return 'shan';
                                        },
                                    },
                                },
                            },
                        },
                        zmchusha1: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                        },
                        zmweimu: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player != target && target.storage.zmweimu < 3) {
                                        return false;
                                    }
                                },
                            },
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            usable: 1,
                            forced: true,
                            init(player) {
                                player.storage.zmweimu = 0;
                            },
                            filter(event, player) {
                                return player.storage.zmweimu <= 2;
                            },
                            content() {
                                'step 0';
                                /*mark:true,
                            marktext:"帷",
                            intro:{
                                content:function (storage,player,skill){
                                    var num=3-player.storage.zmweimu;
                                    return num+'轮后,你不能被其他角色使用牌指定的效果失效';
                                },
                            },*/
                                player.storage.zmweimu++;
                            },
                        },
                        zmxietiaozhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                global: ['addJudgeAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                for (var i of game.players) {
                                    if (i.num('j') > 0) {
                                        return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog('【协调者】可将场上一张延时锦囊牌当作【决斗】使用', 'hidden');
                                var players = game.filterPlayer();
                                for (var i of players) {
                                    if (i.getCards('j').length) {
                                        dialog.addText(`【${get.translation(i)}】场上的牌`);
                                        dialog.add(i.getCards('j'));
                                    }
                                }
                                player
                                    .chooseButton(dialog, 1)
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player;
                                        var owner = get.owner(button.link);
                                        if (get.attitude(player, owner) <= 0) {
                                            return 0;
                                        }
                                        return player.getUseValue(button.link) + 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.chooseUseTarget({ name: 'juedou' }, result.links, false);
                                } else event.finish();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'delay' && (target.countCards('h') <= 1 || target.countCards('h', { name: 'sha' }) == 0)) {
                                            return [0, 0];
                                        }
                                    },
                                },
                            },
                        },
                        zmchongjianfaze: {
                            group: ['zmtrenxing', 'zmtsuzheng', 'zmchongjianfaze_1', 'zmchongjianfaze_2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:7',
                            trigger: {
                                global: ['useCard'],
                            },
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards' || (event.card && event.cards[0] == undefined)) return true;
                                if (event.card.name == 'shan' && (!Array.isArray(event.respondTo) || !event.respondTo[0])) return true;
                                if (event.targets && event.targets.length > 1) {
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (!event.player.canUse(event.card, event.targets[i])) {
                                            if (event.card.name == 'tao' && event.targets[i] == _status.event.dying) {
                                            } else return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            init(player) {
                                player.storage.zmchongjianfaze = false;
                            },
                            prompt(event, player) {
                                //非f读取时机名无效,故分离
                                return `【重构法则】是否尝试取消${get.translation(event.player)}使用的${get.translation(event.card)}？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player);
                                event.kg = 0;
                                if (player.storage.zmchongjianfaze == true) {
                                    event.kg++;
                                    player.storage.zmchongjianfaze = false;
                                    player.judge(function (card) {
                                        if (get.color(card) == 'black') return 1;
                                        return -1;
                                    })._triggered = null;
                                } else {
                                    player.judge(function (card) {
                                        if (get.color(card) == 'black') return 1;
                                        return -1;
                                    });
                                }
                                ('step 1');
                                if (get.color(result.card) == 'black') {
                                    if (event.kg == 0) {
                                        game.playzm7(['zmchongjianfaze11', 'zmchongjianfaze22'].randomGet());
                                        game.mp427('zmkaweili');
                                    }
                                    if (player.storage.zmchongjianfaze == false) {
                                        player.storage.zmchongjianfaze = true;
                                    }
                                    trigger.finish();
                                    trigger.untrigger();
                                } else {
                                    var cards = player.getCards('hej', { suit: result.card.suit });
                                    if (cards.length) {
                                        player.discard(cards);
                                        game.log(player, `弃置了${cards.length}张牌`);
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'zmchongjianfaze',
                                    trigger: {
                                        global: ['linkBefore'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `【重建法则】是否尝试取消${get.translation(event.player)}的横置行为？`;
                                    },
                                    check(event, player) {
                                        if (event.player.hasSkillTag('nolink')) return false;
                                        if (event.player.isLinked() && get.attitude(player, event.player) < 0) return true;
                                        if (!event.player.isLinked() && get.attitude(player, event.player) > 0) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.line(trigger.player);
                                        event.kg = 0;
                                        if (player.storage.zmchongjianfaze == true) {
                                            event.kg++;
                                            player.storage.zmchongjianfaze = false;
                                            player.judge(function (card) {
                                                if (get.color(card) == 'black') return 1;
                                                return -1;
                                            })._triggered = null;
                                        } else {
                                            player.judge(function (card) {
                                                if (get.color(card) == 'black') return 1;
                                                return -1;
                                            });
                                        }
                                        ('step 1');
                                        if (get.color(result.card) == 'black') {
                                            if (player.storage.zmchongjianfaze == false) {
                                                player.storage.zmchongjianfaze = true;
                                                if (event.kg == 0) {
                                                    game.playzm7(['zmchongjianfaze11', 'zmchongjianfaze22'].randomGet());
                                                    game.mp427('zmkaweili');
                                                }
                                                trigger.finish();
                                                trigger.untrigger();
                                            }
                                        } else {
                                            var cards = player.getCards('hej', { suit: result.card.suit });
                                            if (cards.length) {
                                                player.discard(cards);
                                                game.log(player, `弃置了${cards.length}张牌`);
                                            }
                                        }
                                    },
                                },
                                2: {
                                    audio: 'zmchongjianfaze',
                                    trigger: {
                                        global: ['turnOverBefore'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    prompt(event, player) {
                                        return `【重建法则】是否尝试取消${get.translation(event.player)}的翻面行为？`;
                                    },
                                    check(event, player) {
                                        if (event.player.hasSkillTag('noturn')) return false;
                                        if (event.player.isTurnedOver() && get.attitude(player, event.player) < 0) return true;
                                        if (!event.player.isTurnedOver() && get.attitude(player, event.player) > 0) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.line(trigger.player);
                                        event.kg = 0;
                                        if (player.storage.zmchongjianfaze == true) {
                                            event.kg++;
                                            player.storage.zmchongjianfaze = false;
                                            player.judge(function (card) {
                                                if (get.color(card) == 'black') return 1;
                                                return -1;
                                            })._triggered = null;
                                        } else {
                                            player.judge(function (card) {
                                                if (get.color(card) == 'black') return 1;
                                                return -1;
                                            });
                                        }
                                        ('step 1');
                                        if (get.color(result.card) == 'black') {
                                            if (player.storage.zmchongjianfaze == false) {
                                                player.storage.zmchongjianfaze = true;
                                                if (event.kg == 0) {
                                                    game.playzm7(['zmchongjianfaze11', 'zmchongjianfaze22'].randomGet());
                                                    game.mp427('zmkaweili');
                                                }
                                                trigger.finish();
                                                trigger.untrigger();
                                            }
                                        } else {
                                            var cards = player.getCards('hej', { suit: result.card.suit });
                                            if (cards.length) {
                                                player.discard(cards);
                                                game.log(player, `弃置了${cards.length}张牌`);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmliliangtiaoxu: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            nobracket: true,
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase != player && (player.storage.zmliliangtiaoxu_1 == true || player.storage.zmliliangtiaoxu_2 == true);
                            },
                            content() {
                                'step 0';
                                /* if(player.storage.zmliliangtiaoxu_1==true&&player.storage.zmliliangtiaoxu_2==true){
                                        player.chooseControl('摸牌','弃牌',function(){
                                       return '摸牌';
                                   }).set('prompt','【力量调序】从摸一张牌/弃置一张牌中选择一项执行');   
                                 }else{*/
                                if (player.storage.zmliliangtiaoxu_1 == true) {
                                    player.storage.zmliliangtiaoxu_1 = false;
                                    player.draw();
                                }
                                if (player.storage.zmliliangtiaoxu_2 == true) {
                                    player.storage.zmliliangtiaoxu_2 = false;
                                    player.chooseToDiscard(1, 'he', true);
                                }
                                /*  };
                                    "step 1"
                                     if(result.control=='摸牌'){
                              player.draw(); 
                                    }
                                     if(result.control=='弃牌'){
                              player.chooseToDiscard(1,'he',true); 
                                    }*/
                            },
                            group: ['zmliliangtiaoxu_1', 'zmliliangtiaoxu_2', 'zmliliangtiaoxu_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    init(player) {
                                        player.storage.zmliliangtiaoxu_1 = false;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase != player && event.cards.length && player.storage.zmliliangtiaoxu_1 == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliliangtiaoxu_1 = true;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    init(player) {
                                        player.storage.zmliliangtiaoxu_2 = false;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase != player && event.cards.length && player.storage.zmliliangtiaoxu_2 == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliliangtiaoxu_2 = true;
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmliliangtiaoxu_1 == true || player.storage.zmliliangtiaoxu_2 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmliliangtiaoxu_1 = false;
                                        player.storage.zmliliangtiaoxu_2 = false;
                                    },
                                },
                            },
                        },
                        zmgujianwuming: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                var targets = [],
                                    bool = false;
                                player.getHistory('damage', function (evt) {
                                    num += evt.num;
                                });
                                if ((num > 0 || player.getStat('damage')) && player.hp == player.maxHp) {
                                    game.playzm7('zmgujianwuming1');
                                    player.draw(2);
                                    player.gainMaxHp();
                                } else {
                                    if (num > 0 || player.getStat('damage')) {
                                        game.playzm7('zmgujianwuming1');
                                        player.draw(2);
                                    }
                                    if (player.hp == player.maxHp) {
                                        game.playzm7('zmgujianwuming2');
                                        player.gainMaxHp();
                                    }
                                    if (num == 0 && !player.getStat('damage') && player.hp < player.maxHp) {
                                        game.playzm7('zmgujianwuming3');
                                        player.loseHp();
                                    }
                                }
                            },
                        },
                        zmshuangrencengshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'thunder',
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.storage.zmshuangrencengshi_1 = player;
                                target.addTempSkill('zmshuangrencengshi_1');
                                target
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        `【霜刃曾试】对${get.translation(player)}使用一张杀,或令其弃置你的一张牌`
                                    )
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (result.bool == false && target.countCards('he') > 0) {
                                    player.discardPlayerCard(target, 'he', true);
                                } else {
                                    player.addTempSkill('zmchusha1');
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        globalTo(from, to) {
                                            if (from == to.storage.zmshuangrencengshi_1) return -Infinity;
                                        },
                                    },
                                },
                            },
                            ai: {
                                order: 3,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                    player(player, target) {
                                        if (player.hp + player.hujia <= 2) return -2;
                                        if (player.countCards('h', 'shan') == 0 && !player.hujia && player.hp < 3) return -1;
                                        return -0.5;
                                    },
                                },
                                threaten: 1.5,
                            },
                        },
                        zmjueduiweiyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                player: 'recoverAfter',
                            },
                            init(player) {
                                player.storage.zmjueduiweiyan = false;
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            content() {
                                player.changeHujia();
                            },
                            group: ['zmjueduiweiyan_1', 'zmtyeshou', 'zmtlongxue'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'changeHujiaEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num < 0 && event.type == 'damage';
                                    },
                                    content() {
                                        'step 0';
                                        if (player.hujia > 0) {
                                            event.num = player.hujia;
                                        } else event.num = 0;
                                        player.changeHujia(-event.num);
                                        if (event.num == 0) {
                                            game.playzm7('zmjueduiweiyan11');
                                            var num = player.maxHp - player.hp;
                                            player.draw(player.maxHp - player.countCards('h'));
                                        } else {
                                            player
                                                .chooseTarget(1, `【绝对威严】须对一名角色造成${event.num}点伤害`, true, function (card, player, target) {
                                                    return true;
                                                })
                                                .set('ai', function (target) {
                                                    return get.damageEffect(target, player, player);
                                                });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            if (player.storage.zmjueduiweiyan == false) {
                                                game.playzm7('zmmoleteleisi1');
                                                game.mp427('zmmole');
                                                player.storage.zmjueduiweiyan = true;
                                                if (player.name == 'zm_10kuangmoleteleisi' || player.name1 == 'zm_10kuangmoleteleisi') {
                                                    player.node.avatar.setBackgroundImage('extension/综漫季刊柒/image/变身魔勒.jpg');
                                                } else if (player.name2 == 'zm_10kuangmoleteleisi') {
                                                    player.node.avatar2.setBackgroundImage('extension/综漫季刊柒/image/变身魔勒.jpg');
                                                }
                                            } else game.playzm7('zmjueduiweiyan21');
                                            var target = result.targets[0];
                                            target.damage(event.num);
                                        }
                                    },
                                },
                            },
                        },
                        zmmimishixin: {
                            nobracket: true,
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmmimishixin = [];
                            },
                            mark: true,
                            marktext: '誓',
                            intro: {
                                content(storage) {
                                    if (!storage.length) {
                                        return '未记录角色';
                                    } else {
                                        var str = '已记录角色为' + get.translation(storage[0]);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        return str;
                                    }
                                },
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 10;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('he');
                            },
                            content() {
                                'step 0';
                                if (target == player) {
                                    game.playzm7(['zmmimishixin11', 'zmmimishixin12', 'zmmimishixin12', 'zmmimishixin13', 'zmmimishixin13'].randomGet());
                                } else game.playzm7(['zmmimishixin21', 'zmmimishixin22'].randomGet());
                                player.storage.zmt_np -= 10;
                                var next = target.chooseCard('he', 1, `【秘密誓心】是否交给${get.translation(player)}一张牌？`, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (card.name == 'du') return 12;
                                    var player = _status.currentPhase;
                                    if (target == player && (card.name == 'sha' || player.storage.zmmimishixin_1.includes(card))) return 0;
                                    if (get.attitude(target, player) <= 0 && get.value(card) >= 0) return 0;
                                    if (get.color(card) == 'red' && get.value(card) < 7) return 8;
                                    if (target == player) return 10;
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (!player.storage.zmmimishixin.includes(target)) {
                                        player.storage.zmmimishixin.push(target);
                                    }
                                    if (!player.storage.zmmimishixin_1.includes(result.cards[0])) {
                                        player.storage.zmmimishixin_1.push(result.cards[0]);
                                    }
                                    player.gain(result.cards, 'gain2');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player(player, target) {
                                        var num = 0;
                                        var cards = player.getCards('he');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.value(i) <= 6) {
                                                    num++;
                                                }
                                            }
                                        if (num == 0 && target == player) return 0;
                                        return 0.7;
                                    },
                                    target(player, target) {
                                        if (target != player && player.storage.zmmimishixin.includes(target) && target.countCards('h') <= 2) return 0;
                                        if (target.countCards('h') == 0) return 0;
                                        if (target.countCards('h') == 1 && target.countCards('e') == 1) return 0;
                                        if (!player.storage.zmmimishixin.includes(target)) return 8;
                                        return target.countCards('he');
                                    },
                                },
                            },
                            group: ['zmmimishixin_1', 'zmmimishixin_2', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmmimishixin_1 = [];
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            if (player.storage.zmmimishixin_1.includes(card)) {
                                                return 'sha';
                                            }
                                        },
                                        maxHandcard(player, num) {
                                            var num1 = 0;
                                            var hs = player.getCards('h');
                                            for (var i = 0; i < hs.length; i++) {
                                                if (player.storage.zmmimishixin_1.includes(hs[i])) {
                                                    num1 += 2;
                                                }
                                            }
                                            return num + num1;
                                        },
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                return player.storage.zmmimishixin_1.includes(i);
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmmimishixin_1.includes(i)) {
                                                    player.storage.zmmimishixin_1.remove(i);
                                                }
                                            }
                                    },
                                },
                            },
                        },
                        zmjuechufanji: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                global: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isAlive() && player.storage.zmmimishixin && player.storage.zmmimishixin.includes(event.player);
                            },
                            content() {
                                'step 0';
                                player.chooseToUse(`是否对${get.translation(trigger.source)}使用一张【杀】？以此法使用的红色杀不可响应`, { name: 'sha' }, trigger.source);
                            },
                            group: ['zmjuechufanji_1', 'zmjuechufanji_2'],
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'shaBefore',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && get.color(event.card) == 'red' && event.getParent(3).name == 'zmjuechufanji';
                                    },
                                    content() {
                                        player.popup('必中', 'fire');
                                        trigger.directHit = true;
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊柒/audio:4',
                                    trigger: {
                                        player: 'dying',
                                    },
                                    init(player) {
                                        player.storage.zmjuechufanji_2 = true;
                                    },
                                    forced: true,
                                    usable: 1,
                                    filter(event, player) {
                                        return player.storage.zmjuechufanji_2 == true;
                                    },
                                    content() {
                                        'step 0';
                                        if (!player.hasSkill('zmjuechufanji_3')) player.addSkill('zmjuechufanji_3');
                                        player.recover();
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjuechufanji_2 == true && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjuechufanji_2 = false;
                                        player.removeSkill('zmjuechufanji_3');
                                        player
                                            .chooseControl('确定', 'cancel2', function () {
                                                if (get.attitude(player, trigger.player) <= 0) return '确定';
                                                return 'cancel2';
                                            })
                                            .set('prompt', `是否令${get.translation(trigger.player)}失去一点体力？`);
                                        ('step 1');
                                        if (result.control == '确定') {
                                            game.playzm7('zmalan1');
                                            game.mp427('zmalan');
                                            player.line(trigger.player);
                                            trigger.player.loseHp();
                                        }
                                    },
                                },
                            },
                        },
                        zmjueyifenqizhidun: {
                            audio: 'ext:综漫季刊柒/audio:7',
                            enable: 'phaseUse',
                            nobracket: true,
                            filter(event, player) {
                                return player.storage.zmt_np >= 20;
                            },
                            filterTarget(card, player, target) {
                                return !target.hujia;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                target.changeHujia();
                                ('step 1');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0) return 0;
                                        return get.recoverEffect(target, player, player) + 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        zmyingxiongjijie: {
                            group: ['zmyingxiongjijie_2'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
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
                                    .chooseTarget(1, get.prompt('zmyingxiongjijie'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att <= 0 && player.countCards('e') > 0) return 0;
                                        if (att <= 0 && target.countCards('he') == 0) return 0;
                                        if (att > 0 && target.countCards('he') == 0 && target == player) return 4;
                                        if (att > 0 && target.countCards('he') == 0 && target != player) return 9;
                                        if (target == player && player.countCards('h') > 1) return 1;
                                        if (att < 0 && !target.getEquip('baiyin') && target.getEquip(2) + target.getEquip(0) + target.getEquip(4) > 0) return -2;
                                        if (att > 0 && target.countCards('he') > 3) return 3;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets[0]);
                                    event.tr = result.targets[0];
                                    if (event.tr.countCards('he') > 0) player.discardPlayerCard('he', event.tr, 1, true);
                                    if (!player.hasSkill('zmyingxiongjijie_0')) player.addSkill('zmyingxiongjijie_0');
                                    if (!event.tr.hasSkill('zmyingxiongjijie_0')) event.tr.addSkill('zmyingxiongjijie_0');
                                    if (!player.hasSkill('zmyingxiongjijie_1')) player.addSkill('zmyingxiongjijie_1');
                                    if (!event.tr.hasSkill('zmyingxiongjijie_1')) event.tr.addSkill('zmyingxiongjijie_1');
                                } else event.finish();
                                ('step 2');
                                event.tr.draw();
                                ('step 3');
                                event.tr.line(player);
                                if (player.countCards('he') > 0) event.tr.discardPlayerCard('he', player, 1, true);
                                ('step 4');
                                player.draw();
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmyingxiongjijie_0 = [];
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            if (player.storage.zmyingxiongjijie_0.includes(card)) {
                                                return 'tao';
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                return player.storage.zmyingxiongjijie_0.includes(i);
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmyingxiongjijie_0.includes(i)) {
                                                    player.storage.zmyingxiongjijie_0.remove(i);
                                                }
                                            }
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmyingxiongjijie_1 = [];
                                    },
                                    mod: {
                                        cardname(card, player) {
                                            if (player.storage.zmyingxiongjijie_1.includes(card)) {
                                                return 'wuzhong';
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                return player.storage.zmyingxiongjijie_1.includes(i);
                                            }
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmyingxiongjijie_1.includes(i)) {
                                                    player.storage.zmyingxiongjijie_1.remove(i);
                                                }
                                            }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.getParent(1).name != 'zmyingxiongjijie') return false;
                                        return event.player.hasSkill('zmyingxiongjijie_0') && event.player.hasSkill('zmyingxiongjijie_1');
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < trigger.result.length; i++) {
                                            if (get.type(trigger.result[i], 'trick') == 'trick') {
                                                if (!trigger.player.storage.zmyingxiongjijie_1.includes(trigger.result[i])) {
                                                    trigger.player.storage.zmyingxiongjijie_1.push(trigger.result[i]);
                                                }
                                            }
                                            if (get.type(trigger.result[i]) == 'basic') {
                                                if (!trigger.player.storage.zmyingxiongjijie_0.includes(trigger.result[i])) {
                                                    trigger.player.storage.zmyingxiongjijie_0.push(trigger.result[i]);
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmyiranyaoyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            trigger: {
                                global: ['damageBegin'],
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                var num = 0;
                                if (event.player.hujia > 0) num += event.player.hujia;
                                return event.num > num;
                            },
                            content() {
                                'step 0';
                                game.playzm7('zmmaxiu');
                                game.mp427('zmmaxiu');
                                ('step 1');
                                var num = 0;
                                if (trigger.player.hujia > 0) num += trigger.player.hujia;
                                trigger.num = num;
                                player.addSkill('zmyiranyaoyuan2');
                                player.storage.zmyiranyaoyuan2 = 12;
                                player.disableSkill('zmyiranyaoyuan2', ['zmyiranyaoyuan']);
                            },
                        },
                        zmyiranyaoyuan2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            mark: true,
                            marktext: '城',
                            intro: {
                                content: '#个没有产生伤害的回合后回复【已然遥远的理想之城】',
                            },
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return current.getStat('damage') > 0;
                                });
                                return player.storage.zmyiranyaoyuan2_1 == false && num4 == 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.zmyiranyaoyuan2 -= 1;
                                player.markSkill('zmyiranyaoyuan2');
                                ('step 1');
                                player.popup(player.storage.zmyiranyaoyuan2, 'water');
                                if (player.storage.zmyiranyaoyuan2 <= 0) {
                                    player.storage.zmyiranyaoyuan2 = 0;
                                    player.removeSkill('zmyiranyaoyuan2');
                                    player.enableSkill('zmyiranyaoyuan2', ['zmyiranyaoyuan']);
                                }
                            },
                            group: ['zmyiranyaoyuan2_1', 'zmyiranyaoyuan2_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmyiranyaoyuan2_1 = false;
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyiranyaoyuan2_1 = true;
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyiranyaoyuan2_1 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyiranyaoyuan2_1 = false;
                                    },
                                },
                            },
                        },
                        zmcanying: {
                            audio: 'ext:综漫季刊柒/audio:2',
                            nobracket: true,
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = 0;
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        var info = lib.card[hs[i].name];
                                        if (info.subtype == 'equip2') {
                                            num1 += 1;
                                        }
                                    }
                                    return num + num1;
                                },
                                cardname(card) {
                                    if (lib.card[card.name].subtype == 'equip2') {
                                        return 'sha';
                                    }
                                },
                            },
                            init(player) {
                                player.disableEquip(2);
                            },
                            forced: true,
                            group: ['zmcanying_2', 'zmcanying_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    filter(event, player) {
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
                                        game.playzm7(['zmcanying1', 'zmcanying2'].randomGet());
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
                                2: {
                                    trigger: {
                                        target: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToUse(`是否对${get.translation(trigger.player)}使用一张【杀】？`, { name: 'sha' }, -1, trigger.player);
                                    },
                                },
                            },
                        },
                        zmhuanfeng: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            filter(event, player) {
                                return true;
                            },
                            init(player) {
                                player.storage.zmhuanfeng = false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.playzm7(['zmhuanfeng1', 'zmhuanfeng2', 'zmhuanfeng3', 'zmhuanfeng4', 'zmhuanfeng5'].randomGet());
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (trigger.directHit == true) return '取消';
                                        if (player.getEquip('guanshi') && player.countCards('h') >= 3 && Math.random() <= 0.75) return '取消';
                                        if (get.attitude(player, trigger.target) > 0) return '确定';
                                        if (player.storage.zmhuanfeng == false && get.attitude(player, trigger.target) <= 0 && trigger.target.countCards('h') > 6) return '确定';
                                        if (player.storage.zmhuanfeng == false && get.attitude(player, trigger.target) <= 0 && trigger.target.countCards('h') > 2 && trigger.target.hp > 1 && Math.random() <= 0.75) return '确定';
                                        if (player.storage.zmhuanfeng == false && get.attitude(player, trigger.target) <= 0 && trigger.target.getEquip('bagua') && !player.hasSkill('unequip') && Math.random() <= 0.85) return '确定';
                                        if (get.attitude(player, trigger.target) <= 0 && trigger.target.getEquip('lanyin') && !player.hasSkill('unequip') && trigger.target.countCards('h') > 0) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', `【幻锋】是否提前取消此杀对${get.translation(trigger.target)}造成的伤害？`);
                                ('step 1');
                                if (result.control == '确定') {
                                    player.storage.zmhuanfeng = true;
                                    player.addTempSkill('zmhuanfeng_1', { player: 'shaEnd' });
                                    player.addTempSkill('zmhuanfeng_2', { player: 'shaEnd' });
                                }
                            },
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('zmhuanfeng_1') || player.hasSkill('zmhuanfeng_2') || player.storage.zmhuanfeng == true;
                                    },
                                    content() {
                                        player.storage.zmhuanfeng = false;
                                        player.removeSkill('zmhuanfeng_1');
                                        player.removeSkill('zmhuanfeng_2');
                                    },
                                },
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:4',
                                    trigger: {
                                        player: 'shaMiss',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        player.getStat().card.sha--;
                                        player.removeSkill('zmhuanfeng_1');
                                        player.removeSkill('zmhuanfeng_2');
                                        player.draw(3);
                                    },
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou') && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        player.removeSkill('zmhuanfeng_1');
                                        player.removeSkill('zmhuanfeng_2');
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        zmnuesha: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                source: 'damageAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.hp <= event.player.countCards('h')) return false;
                                return event.card && event.card.name == 'sha' && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var num = trigger.player.hp - trigger.player.countCards('h');
                                var next = player.chooseToDiscard([1, num], 'he', `【虐杀】是否弃置至多${get.translation(num)}张牌令${get.translation(trigger.player)}失去等量的体力？`, function (card, player) {
                                    return /*get.color(card)=='black'*/ true;
                                });
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    var eff = get.attitude(trigger.player, player);
                                    if (eff >= 0) return 0;
                                    return 10 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    game.mp427('zmfeileiaotuo1');
                                    event.num = result.cards.length;
                                } else event.finish();
                                ('step 2');
                                game.mp427('zmfeileiaotuo2');
                                trigger.player.loseHp(event.num);
                            },
                        },
                        zmzhishilingshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                'step 0';
                                player.draw();
                            },
                        },
                        zmwoxingwosu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                global: ['damageAfter'],
                            },
                            line: 'thunder',
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (event.player.countCards('he') == 0) return false;
                                return (event.source && event.source == player) || (event.card && get.type(event.card, 'trick') == 'trick');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard('he', trigger.player, 1, true);
                            },
                        },
                        zmheitaxulie: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            nobracket: true,
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card) {
                                return true;
                            },
                            selectCard: [1, 1],
                            filter(event, player) {
                                return player.getExpansions('zmheitaxulie').length == 0;
                            },
                            check(card, player) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.addToExpansion(cards[0]).gaintag.add('zmheitaxulie');
                            },
                            ai: {
                                threaten: 1.5,
                                order: 12,
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmheitaxulie_1', 'zmtrenxing', 'zmtzaowu', 'zmtshenxing', 'zmtjixie'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        //if(event.getParent(1).name=='zmheitaxulie_1') return false;
                                        return player.getExpansions('zmheitaxulie').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = player.getExpansions('zmheitaxulie');
                                        player.lose(cards);
                                        player.$throw(cards);
                                        game.log(player, '重铸了', cards);
                                        ('step 1');
                                        event.card22 = get.cards();
                                        player.addToExpansion(event.card22).gaintag.add('zmheitaxulie');
                                        ('step 2');
                                        var num = 0;
                                        var list = player.getExpansions('zmheitaxulie');
                                        for (var i = 0; i < list.length; i++) {
                                            if (num == 0) {
                                                num++;
                                                event.card22 = list[i];
                                            }
                                        }
                                        if (get.type(event.card22) != 'delay' && get.type(event.card22) != 'trick') {
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (get.type(event.card22) == 'delay' || get.type(event.card22) == 'trick') {
                                            player
                                                .chooseTarget(`是否将${get.translation(event.card22)}交给一名角色并对其造成一点伤害？`, function (card, player, target) {
                                                    return true;
                                                })
                                                .set('ai', function (target) {
                                                    if (player.hp <= 2 && player.isDamaged()) return 0;
                                                    var att = get.attitude(player, target);
                                                    if (target.getUseValue(event.card22) >= 7 && att <= 0 && target.hp > 1) return 0;
                                                    if (target == player && target.getUseValue(event.card22) > 8 && player.hp > 3) return 6;
                                                    return get.damageEffect(target, player, player);
                                                });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 4');
                                        if (result.bool) {
                                            if (result.targets[0] == player) {
                                                game.playzm7('zmheitaxulie10');
                                            } else game.playzm7(['zmheitaxulie11', 'zmheitaxulie12', 'zmheitaxulie13', 'zmheitaxulie14'].randomGet());
                                            player.line(result.targets, 'thunder');
                                            result.targets[0].gain(event.card22, player, 'giveAuto');
                                            result.targets[0].damage(1);
                                            event.finish();
                                        } else {
                                            player
                                                .chooseControl('确定', 'cancel2', function () {
                                                    if (player.isDamaged()) return '确定';
                                                    return 'cancel2';
                                                })
                                                .set('prompt', `是否弃置${get.translation(event.card22)}回复一点体力？`);
                                        }
                                        ('step 5');
                                        if (result.control == '确定') {
                                            game.playzm7(['zmheitaxulie21', 'zmheitaxulie22'].randomGet());
                                            player.discard(event.card22);
                                            player.recover();
                                        }
                                    },
                                },
                            },
                        },
                        zmziranenhui: {
                            nobracket: true,
                            trigger: {
                                player: 'drawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.isMaxHandcard();
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【自然恩惠】是否将此技能交给一名角色？否则你多摸一张牌', function (card, player, target) {
                                        return !target.hasSkill('zmziranenhui');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(player, target);
                                        if (Math.random() < 0.36 && att > 0 && (target.hp < player.hp || target.countCards('h') <= player.countCards('h'))) return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playzm7(['zmziranenhui21', 'zmziranenhui22'].randomGet());
                                    event.target = result.targets[0];
                                    player.line(event.target, 'green');
                                    player.removeSkill('zmziranenhui');
                                    event.target.addSkill('zmziranenhui');
                                } else {
                                    game.playzm7(['zmziranenhui11', 'zmziranenhui12', 'zmziranenhui13', 'zmziranenhui14', 'zmziranenhui15'].randomGet());
                                    trigger.num += 1;
                                }
                            },
                        },
                        zmziranbaochang: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmziranbaochang = 0;
                            },
                            filter(event, player) {
                                var num0 = 0;
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    game.broadcastAll(function (card) {
                                        if (get.tag(card, 'damage')) {
                                            num0++;
                                        }
                                    }, player.getCards('h')[i]);
                                }
                                if (event.player == player) return false;
                                return num0 > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCard('h', '【自然报偿】是否将一张带有伤害标签的手牌当作桃使用？', function (card, player) {
                                    return get.tag(card, 'damage');
                                });
                                next.ai = function (card) {
                                    if (get.attitude(player, trigger.player) >= 0) return 0;
                                    if (player.hp == player.maxHp) return 0;
                                    return 10 - player.hp - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmziranbaochang = result.cards[0].name;
                                    player.useCard({ name: 'tao' }, result.cards, player);
                                }
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            group: ['zmziranbaochang_1', 'zmziranbaochang_2', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player != player && !event.player.hasSkill('zmziranenhui')) return false;
                                        return player.storage.zmziranbaochang != 0 && event.source && event.source != undefined;
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm7('zmweiweian');
                                        game.mp427('zmweiweian');
                                        var name = player.storage.zmziranbaochang;
                                        trigger.player.useCard({ name: name }, trigger.source, true);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmziranbaochang != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmziranbaochang = 0;
                                    },
                                },
                            },
                        },
                        zmtianxingzhaoming: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.zmtianxingzhaoming = 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                player.addTempSkill('zmtianxingzhaoming_1');
                                ('step 1');
                                player.getStat().card.sha++;
                                player.judge(function (card) {
                                    if (card.number > player.countCards('h')) return 2;
                                    return -2;
                                });
                                ('step 2');
                                if (result.card.number > player.countCards('h')) {
                                    player.storage.zmtianxingzhaoming = result.card.number;
                                    player.gain(result.card);
                                } else {
                                    game.playzm7(['zmtianxingzhaoming0', 'zmtianxingzhaoming0', 'zmtianxingzhaoming00'].randomGet());
                                    player.storage.zmtianxingzhaoming = 0;
                                    event.finish();
                                }
                                ('step 3');
                                player
                                    .chooseControl('确定', '取消', function () {
                                        if (player.countCards('h') <= 4) return '确定';
                                        return '取消';
                                    })
                                    .set('prompt', '是否重复此流程？');
                                ('step 4');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '确定') {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') > 4) return 0;
                                        return 1;
                                    },
                                },
                            },
                            group: ['zmtrenxing'],
                            subSkill: {
                                1: {
                                    mod: {
                                        maxHandcard(player, num) {
                                            return (num = player.storage.zmtianxingzhaoming);
                                        },
                                    },
                                },
                            },
                        },
                        zmmingzaonayin: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.card1 = trigger.player.getCards('h').randomGet();
                                event.suit1 = event.card1.suit;
                                event.color1 = get.color(event.card1);
                                var list = ['取消'];
                                var kg = 0;
                                if (player.countCards('h', { color: event.color1 }) > 0) {
                                    list.push('重铸');
                                    kg += 1;
                                }
                                if (player.countCards('h', { suit: event.suit1 }) > 0) {
                                    list.push('弃置');
                                    kg += 2;
                                }
                                player.chooseControl(list).set('prompt', get.translation(trigger.player) + `的一张手牌为${get.translation(event.card1)}<br>你可重铸一张同颜色手牌后令其重铸该牌或弃置一张同花色手牌后令其弃置手牌中同花色的牌`).ai = function (event, player) {
                                    var num = trigger.player.getUseValue(event.card1);
                                    var n1 = 0;
                                    var n2 = 0;
                                    if (get.attitude(player, trigger.player) > 0) {
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) < 6 && get.color(hs[i]) == event.color1) {
                                                n1++;
                                            }
                                        }
                                        if (kg > 0 && num < 5 && n1 > 0) return '重铸';
                                        return '取消';
                                    } else {
                                        var hs = player.getCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) < 6 && get.color(hs[i]) == event.color1) {
                                                n1++;
                                                if (get.value(hs[i]) < 5 && hs[i].suit == event.suit1) {
                                                    n2++;
                                                }
                                            }
                                        }
                                        if (kg > 1 && n2 > 0 && (num > 3 || trigger.player.countCards('h') > 4)) return '弃置';
                                        if (kg > 0 && n2 == 0 && num > 5 && n1 > 0) return '弃置';
                                        return '取消';
                                    }
                                    return '取消';
                                };
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '重铸') {
                                    game.playzm7(['zmmingzaonayin11', 'zmmingzaonayin12', 'zmmingzaonayin13'].randomGet());
                                    player.line(trigger.player);
                                    event.kg = 10;
                                    trigger.player.lose(event.card1);
                                    trigger.player.$throw(event.card1);
                                    trigger.player.draw();
                                    var next = player.chooseCard(1, 'h', `重铸一张${get.translation(event.color1)}手牌`, true, function (card, player) {
                                        return get.color(card) == event.color1;
                                    });
                                    next.ai = function (card) {
                                        return -get.value(card);
                                    };
                                }
                                if (result.control == '弃置') {
                                    game.playzm7(['zmmingzaonayin21', 'zmmingzaonayin22', 'zmmingzaonayin23'].randomGet());
                                    player.line(trigger.player);
                                    var cards = trigger.player.getCards('h', { suit: event.suit1 });
                                    if (cards.length) {
                                        trigger.player.discard(cards);
                                    }
                                    event.kg = 20;
                                    var next = player.chooseCard(1, 'h', `弃置一张${get.translation(event.suit1)}手牌`, true, function (card, player) {
                                        return card.suit == event.suit1;
                                    });
                                    next.ai = function (card) {
                                        return -get.value(card);
                                    };
                                }
                                ('step 2');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    if (event.kg == 10) {
                                        player.lose(card);
                                        player.$throw(card);
                                        player.draw();
                                    }
                                    if (event.kg == 20) {
                                        player.discard(card);
                                    }
                                }
                            },
                        },
                        zmanyingyaojing: {
                            group: ['zmtrenxing', 'zmtmoxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                player: ['loseEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = 0;
                                var num = 0;
                                if (!event.cards || !event.cards.length) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (num1 < i.number) {
                                            num1 = i.number;
                                        }
                                    }
                                if (player.countCards('h') > 0) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number > num) {
                                            num = hs[i].number;
                                        }
                                    }
                                }
                                return _status.currentPhase != player && num1 >= num;
                            },
                            content() {
                                'step 0';
                                var num = 99;
                                var cards = [];
                                if (player.countCards('h') > 0) {
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number < num) {
                                            num = hs[i].number;
                                        }
                                    }
                                    for (var i = 0; i < hs.length; i++) {
                                        if (hs[i].number == num) {
                                            cards.push(hs[i]);
                                        }
                                    }
                                }
                                if (cards.length) {
                                    player.discard(cards);
                                    game.log(player, `弃置了${cards.length}张牌`);
                                }
                                ('step 1');
                                if (player.countCards('h', { color: 'black' }) == 0 && _status.currentPhase.countCards('he') > 0) {
                                    _status.currentPhase.chooseCard('he', `【暗影妖精】须将一张牌当作【增兵减灶】对${get.translation(player)}使用`, 1, true).ai = function (card) {
                                        return -get.value(card);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    _status.currentPhase.useCard({ name: 'zengbin' }, result.cards, player);
                                    if (player.countCards('h', { color: 'black' }) == 0) event.goto(1);
                                }
                            },
                        },
                        zmanyingzhendi: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.zmanyingzhendi;
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                source: 'damageBegin',
                            },
                            init(player) {
                                player.storage.zmanyingzhendi = 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            _priority: -10,
                            content() {
                                'step 0';
                                if (!trigger.player.hasSkill('zmanyingzhendi_0')) {
                                    trigger.player.addSkill('zmanyingzhendi_0');
                                }
                                ('step 1');
                                trigger.player.storage.zmanyingzhendi_0++;
                                player.storage.zmanyingzhendi++;
                                ('step 2');
                                event.kg = 0;
                                if (player.storage.zmanyingzhendi >= 4) {
                                    if (player.countCards('he') >= 4) {
                                        var num = 0;
                                        event.tr = [];
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('zmanyingzhendi_0')) {
                                                event.tr.push(current);
                                            }
                                            if (get.attitude(player, current) > 0) num++;
                                        });
                                        player.chooseToDiscard(`【暗影阵地】是否弃置四张牌并对${get.translation(event.tr)}造成两点伤害？`, 4, 'he').set('ai', function (card) {
                                            if (num > 0) return 0;
                                            return 13 - get.value(card);
                                        });
                                    } else {
                                        player.storage.zmanyingzhendi = 0;
                                        event.goto(4);
                                    }
                                } else event.finish();
                                ('step 3');
                                if (result.bool && result.cards.length) {
                                    event.kg++;
                                    game.playzm7(['zmailiya', 'zmailiya1'].randomGet());
                                    game.mp427('zmailiya');
                                    player.storage.zmanyingzhendi = 0;
                                    for (var i = 0; i < event.tr.length; i++) {
                                        player.line(event.tr[i], 'thunder');
                                        event.tr[i].storage.zmanyingzhendi_0 = 0;
                                        event.tr[i].removeSkill('zmanyingzhendi_0');
                                        event.tr[i].damage(2);
                                    }
                                    event.goto(7);
                                }
                                ('step 4');
                                if (event.kg && event.kg > 0) {
                                    event.goto(7);
                                } else {
                                    player.storage.zmanyingzhendi = 0;
                                    event.current = player.next;
                                }
                                ('step 5');
                                if (event.current.hasSkill('zmanyingzhendi_0')) {
                                    player.line(event.current);
                                    //var num=event.current.storage.zmanyingzhendi_0;
                                    event.current.storage.zmanyingzhendi_0 = 0;
                                    event.current.removeSkill('zmanyingzhendi_0');
                                    if (event.current.countCards('he')) player.gainPlayerCard(event.current, 1, 'he', true);
                                } else event.goto(6);
                                ('step 6');
                                if (event.current.next != player) {
                                    event.current = event.current.next;
                                    event.goto(5);
                                }
                                ('step 7');
                            },
                            subSkill: {
                                0: {
                                    mark: true,
                                    marktext: '阵',
                                    intro: {
                                        content: '你的手牌上限减#',
                                    },
                                    init(player) {
                                        player.storage.zmanyingzhendi_0 = 0;
                                    },
                                    mod: {
                                        maxHandcard(player, num) {
                                            return num - player.storage.zmanyingzhendi_0;
                                        },
                                    },
                                },
                            },
                            _priority: -1000,
                        },
                        zmliantongweiyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (!get.tag(event.card, 'damage')) return false;
                                return event.targets && event.targets.length == 1 && event.target != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(`是否令一名其他角色对${get.translation(trigger.target)}使用一张牌？`, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    var num = target.countCards('e', { subtype: 'equip1' }) * 2;
                                    var player = _status.event.player;
                                    if (get.attitude(target, trigger.target) > 0) return 0;
                                    return num + get.attitude(player, target) * target.countCards('h');
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets);
                                    if (result.targets[0].countCards('e', { subtype: 'equip1' })) {
                                        var cards = result.targets[0].getCards('e');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (get.subtype(i) == 'equip1') var skills = lib.card[i.name].skills;
                                                if (skills != undefined) {
                                                    game.log(player, '获得了', ` ${get.translation(i)} 的装备技能`);
                                                    for (var j = 0; j < skills.length; j++) {
                                                        player.addTempSkill(skills[j]);
                                                    }
                                                }
                                            }
                                    }
                                    result.targets[0].chooseToUse(`是否对${get.translation(trigger.target)}使用一张牌？`, -1, trigger.target);
                                } else event.finish();
                            },
                        },
                        zmxinshidaidexumu: {
                            group: ['zmtrenxing', 'zmxinshidaidexumu_1', 'zmxinshidaidexumu_2', 'zmxinshidaidexumu_0', 'zmxinshidaidexumu_3'],
                            audio: 'ext:综漫季刊柒/audio:3',
                            nobracket: true,
                            enable: 'phaseUse',
                            logTarget: 'target',
                            selectTarget: [1, Infinity],
                            init(player) {
                                player.storage.zmxinshidaidexumu = false;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 60 && player.storage.zmxinshidaidexumu == false;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            contentBefore() {
                                player.storage.zmt_np -= 60;
                                game.playzm7('zmliliyasi');
                                game.mp427('zmliliyasi');
                                player.storage.zmxinshidaidexumu = true;
                            },
                            content() {
                                target.useCard({ name: 'jiu' }, target);
                                player.storage.zmxinshidaidexumu_1.push(target);
                            },
                            ai: {
                                order: 3,
                                result: {
                                    player(player, target) {
                                        if (get.attitude(player, target) <= 0) return 0;
                                        if (player.storage.zmxinshidaidexumu_0 == false) return 0;
                                        return 1;
                                    },
                                    target(player, target) {
                                        if (player.storage.zmxinshidaidexumu_0 == false) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                0: {
                                    init(player) {
                                        player.storage.zmxinshidaidexumu_0 = false;
                                    },
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase == player && event.num > 0 && player.storage.zmxinshidaidexumu_0 == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxinshidaidexumu_0 = true;
                                    },
                                },
                                1: {
                                    init(player) {
                                        player.storage.zmxinshidaidexumu_1 = [];
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxinshidaidexumu_1 && player.storage.zmxinshidaidexumu_1.includes(event.player) && player.storage.zmxinshidaidexumu == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.line(trigger.player);
                                        trigger.player.useCard({ name: 'jiu' }, trigger.player);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxinshidaidexumu == true && player.storage.zmxinshidaidexumu_0 == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxinshidaidexumu = false;
                                        player.storage.zmxinshidaidexumu_1 = [];
                                        player.popup('效果结束');
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmxinshidaidexumu_0 == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmxinshidaidexumu_0 = false;
                                    },
                                },
                            },
                        },
                        zmshencejiangjun: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                global: 'damageBefore',
                            },
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                return event.source != undefined && event.source != player && get.distance(event.player, player, 'attack') <= 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = trigger.source.countCards('h') - player.countCards('h') + 1;
                                if (num < 0) num = 0;
                                player.chooseCard('he', `【神策将军】是否交给${get.translation(trigger.source)}一张牌？<br>&nbsp之后你将手牌数摸至与其相同,预计可摸${num}张牌`).set('ai', function (card) {
                                    if (num <= 2 && get.attitude(player, trigger.source) <= 0 && trigger.source.getUseValue(card) > 5) return 0;
                                    if (get.attitude(player, trigger.source) <= 0 && trigger.source.getUseValue(card) > 7) return 0;
                                    if (get.attitude(player, trigger.source) <= 0 && num <= 0 && card.name != 'du') return 0;
                                    if (get.attitude(player, trigger.source) > 0 && num <= 0 && trigger.source.hp > 1) return 0;
                                    if (get.attitude(player, trigger.source) > 0 && card.name == 'jiu' && trigger.source.hp == 1 && player.hp > 1 && trigger.num <= 2) return 12;
                                    if (num > 2 || get.attitude(player, trigger.source) > 0) return 8 - get.value(card);
                                    if (num == 2) return 6 - get.value(card);
                                    return 4 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.source);
                                    trigger.source.gain(result.cards, player, 'give');
                                } else event.finish();
                                ('step 2');
                                var num = trigger.source.countCards('h') - player.countCards('h');
                                if (num > 0) player.draw(num);
                            },
                        },
                        zmshezhaoweiling: {
                            nobracket: true,
                            trigger: {
                                source: 'damageAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (trigger.parent.name == 'zmyifengjingdian') {
                                } else {
                                    game.playzm7(['zmzhaosheweiling1', 'zmzhaosheweiling2', 'zmzhaosheweiling3', 'zmzhaosheweiling4'].randomGet());
                                }
                                event.cards = get.cards()[0];
                                player.showCards(event.cards);
                                ('step 1');
                                if (event.cards.name == 'sha') {
                                    player.useCard(event.cards, trigger.player, false);
                                }
                                if (get.type(event.cards) == 'delay' || get.type(event.cards) == 'trick') {
                                    player.gain(event.cards, 'gain2');
                                }
                            },
                        },
                        zmyifengjingdian: {
                            init(player) {
                                player.storage.zmyifengjingdian = 0;
                            },
                            nobracket: true,
                            trigger: {
                                global: ['wuxieBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player && player.storage.zmt_np >= 40;
                            },
                            content() {
                                'step 0';
                                if (player.countCards('hs', { name: 'wuxie' }) > 0) {
                                    player
                                        .chooseTarget(1, '【移锋惊电】可选择一名角色对其造成两点雷电伤害', false, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (target.hasSkillTag('nothunder')) return 0;
                                            return get.damageEffect(target, player, player, 'thunder');
                                        });
                                } else {
                                    player
                                        .chooseTarget(1, '【移锋惊电】可选择一名角色对其造成一点雷电伤害', false, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (target.hasSkillTag('nothunder')) return 0;
                                            return get.damageEffect(target, player, player, 'thunder');
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 40;
                                    player.storage.zmyifengjingdian++;
                                    if (player.storage.zmyifengjingdian == 1) {
                                        game.playzm7('zmjingyuan2');
                                        game.mp427('zmjingyuan2');
                                    }
                                    if (player.storage.zmyifengjingdian == 2) {
                                        game.playzm7('zmjingyuan1');
                                        game.mp427('zmjingyuan1');
                                    }
                                    if (player.storage.zmyifengjingdian > 2) {
                                        game.playzm7(['zmyifengjingdian1', 'zmyifengjingdian2'].randomGet());
                                    }
                                    player.line(result.targets, 'thunder');
                                    if (player.countCards('hs', { name: 'wuxie' }) > 0) {
                                        result.targets[0].damage(2, 'thunder');
                                    } else result.targets[0].damage(1, 'thunder');
                                }
                            },
                            group: ['zmyifengjingdian_1', 'zmyifengjingdian_2', 'zmtrenxing', 'zmtshenxing'],
                            subSkill: {
                                1: {
                                    mod: {
                                        attackFrom(from, to, distance) {
                                            if (to.storage.zmyifengjingdian_2) return distance - to.storage.zmyifengjingdian_2;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha' && player.storage.zmyifengjingdian_2) return (num += player.storage.zmyifengjingdian_2);
                                        },
                                    },
                                    trigger: {
                                        global: ['loseAfter', 'judgeAfter'],
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (_status.currentPhase != player) return false;
                                        if (name != 'judgeAfter') {
                                            if (event.type != 'use') return false;
                                            var num = 0;
                                            if (event.cards) {
                                                if (Array.isArray(event.cards))
                                                    for (var i of event.cards) {
                                                        if (get.type(i, 'trick') == 'trick' || get.type(i, 'trick') == 'basic') num++;
                                                    }
                                            }
                                            return event.cards && event.cards.length && num > 0;
                                        } else {
                                            return event.result.card != undefined && (get.type(event.result.card, 'trick') == 'trick' || get.type(event.result.card, 'trick') == 'basic');
                                        }
                                    },
                                    init(player) {
                                        player.storage.zmyifengjingdian_1 = 0;
                                        player.storage.zmyifengjingdian_2 = 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername != 'judgeAfter') {
                                            if (Array.isArray(trigger.cards))
                                                for (var i of trigger.cards) {
                                                    if (get.type(i, 'trick') == 'trick') {
                                                        player.storage.zmyifengjingdian_2++;
                                                    }
                                                    if (get.type(i, 'trick') == 'basic') {
                                                        player.storage.zmyifengjingdian_1++;
                                                    }
                                                }
                                        } else {
                                            if (get.type(trigger.result.card, 'trick') == 'trick') {
                                                player.storage.zmyifengjingdian_2++;
                                            }
                                            if (get.type(trigger.result.card, 'trick') == 'basic') {
                                                player.storage.zmyifengjingdian_1++;
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
                                        return player.storage.zmyifengjingdian_1 != 0 || player.storage.zmyifengjingdian_2 != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyifengjingdian_1 = 0;
                                        player.storage.zmyifengjingdian_2 = 0;
                                    },
                                },
                            },
                        },
                        zmyijinan: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                player: 'shaBefore',
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isLinked() && current != player;
                                });
                                if (event.target.getEquip('renwang') && get.color(event.card) == 'black') return false;
                                if (event.card.nature && event.target.isLinked() && num4 > 0) return false;
                                if (event.target.getEquip('baiyin')) return false;
                                if (get.effect(event.target, { name: 'sha' }, player, player) <= 0) return false;
                                return get.attitude(player, event.target) < 0;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 10;
                            },
                            content() {
                                'step 0';
                                event.cards1 = get.cards();
                                player.storage.zmt_np -= 10;
                                var num = event.cards1[0].number;
                                player.showCards(event.cards1);
                                trigger.baseDamage = num;
                                event.num = num;
                                ('step 1');
                                var next = trigger.target.chooseToDiscard([1, 1], 'he', `琦玉对你使用的【杀】伤害变为${event.num},是否弃置一张牌令此伤害减去该牌点数？`, function (card) {
                                    return card.number != undefined;
                                });
                                var att = get.attitude(trigger.target, _status.event.player);
                                next.ai = function (card) {
                                    var cards1 = trigger.target.getCards('he');
                                    var num = 0;
                                    for (var i = 0; i < cards1.length; i++) {
                                        var num1 = cards1[i].number;
                                        if (num1 > num) {
                                            num = num1;
                                        }
                                    }
                                    if (trigger.target.countCards('h', { name: 'shan' }) > 0) {
                                        if (player.getEquip('guanshi') && player.countCards('he') > 1 && num - event.num >= trigger.target.hp) return card.number;
                                        if (card.name == 'shan' && card.number < event.num) return 0;
                                        return -1;
                                    } else {
                                        //
                                        if (num >= event.num && event.num > 1) {
                                            if (card.number < event.num) return 0;
                                            return 100 - (card.number - event.num);
                                        } else {
                                            if (event.num == 1) return 9 - get.value(card);
                                            if (event.num > 1 && num < event.num && event.num - num <= trigger.target.hp + 2) return card.number;
                                            return 0;
                                        }
                                    }
                                    return -1;
                                };
                                ('step 2');
                                if (result.bool) {
                                    var num = result.cards[0].number;
                                    //本体bug定义0结算会强行变为1,这里先用取消凑合
                                    if (trigger.baseDamage - num > 0) {
                                        trigger.baseDamage -= num;
                                    } else {
                                        trigger.baseDamage = 0;
                                        trigger.cancel();
                                    }
                                }
                                ('step 3');
                                if (trigger.baseDamage > 2) {
                                    game.playzm7(['zmyijinan21', 'zmyijinan22', 'zmyijinan23', 'zmyijinan24', 'zmyijinan25', 'zmyijinan26', 'zmyijinan27', 'zmyijinan28'].randomGet());
                                    game.mp427('zmqiyu');
                                } else {
                                    if (trigger.baseDamage == 0) {
                                        game.playzm7(['zmyijinan31', 'zmyijinan32', 'zmyijinan33', 'zmyijinan34', 'zmyijinan35', 'zmyijinan36', 'zmyijinan37', 'zmyijinan38', 'zmyijinan39'].randomGet());
                                    } else {
                                        game.playzm7(['zmyijinan11', 'zmyijinan12', 'zmyijinan13', 'zmyijinan14', 'zmyijinan15', 'zmyijinan16', 'zmyijinan17'].randomGet());
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'jiu' && player.hp > 0) {
                                            return 'zerotarget';
                                        }
                                    },
                                },
                            },
                        },
                        zmzuiqiangnan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:8',
                            trigger: {
                                target: 'shaBegin',
                            },
                            check(event, player) {
                                if (player.hp > 3 && event.baseDamage <= 1) return false;
                                if (player.getEquip('bagua') && player.hp > event.baseDamage) return false;
                                if (player.countCards('h', { name: 'shan' }) > 0) return false;
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 10 && event.player != player;
                            },
                            content() {
                                'step 0';
                                event.cards1 = get.cards();
                                player.storage.zmt_np -= 10;
                                var num = event.cards1[0].number;
                                player.showCards(event.cards1);
                                event.num = num;
                                ('step 1');
                                var next = trigger.player.chooseToDiscard([1, 1], 'he', `你对琦玉使用的【杀】伤害即将减${event.num},是否弃置一张点数更大的牌取消此变化？`, function (card) {
                                    return card.number > event.num;
                                });
                                var att = get.attitude(player, trigger.player);
                                next.ai = function (card) {
                                    if (att > 0) return 0;
                                    if (card.name == 'shan') return 0;
                                    if (trigger.baseDamage == 1 && player.hp > 1) return 0;
                                    return 100 - (card.number - event.num);
                                };
                                ('step 2');
                                if (result.bool) {
                                } else {
                                    if (trigger.baseDamage - event.num > 0) {
                                        trigger.baseDamage -= event.num;
                                    } else {
                                        trigger.cancel();
                                    }
                                }
                            },
                        },
                        zmbuyiyouxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                global: 'shaBegin',
                            },
                            usable: 1,
                            _priority: -100,
                            prompt(event, player) {
                                return `【不义游戏】是否交换『${get.translation(event.player)}』与『${get.translation(event.target)}』？`;
                            },
                            check(event, player) {
                                if (get.attitude(player, event.target) > 0 && get.attitude(player, event.player) < 0 && get.effect(event.target, event.card, event.player, event.player) > 0 && event.player.countCards('h') == 0) return true;
                                if (get.attitude(player, event.player) > 0 || get.attitude(player, event.target) <= 0) return false;
                                if (!event.target.hasSkill('unequip') && (event.player.getEquip('bagua') || (event.player.getEquip('lanyin') && event.player.countCards('h')))) return false;
                                if (get.effect(event.target, { name: 'sha' }, event.player, event.player) <= 0) return false;
                                if (event.player.countCards('h') - 1 >= player.hp) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (!event.targets) return false;
                                if (event.player == player) return false;
                                return event.targets.length == 1 && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                game.playzm7('zmdongtangkui');
                                game.mp427('zmdongtangkui');
                                var so = trigger.player;
                                var tr = trigger.target;
                                trigger.target = so;
                                trigger.player = tr;
                                event.tr = tr;
                                ('step 1');
                                var next = game.createEvent('zmbuyiyouxi_ls');
                                next.player = player;
                                next.tr = event.tr;
                                next.target = trigger.target;
                                next.setContent(function () {
                                    if (!target.isIn()) return;
                                    if (
                                        event.tr.getHistory('sourceDamage', function (evt) {
                                            return evt.getParent(2) == event.parent;
                                        }).length == 0
                                    ) {
                                        player.loseHp();
                                    }
                                });
                                event.next.remove(next);
                                trigger.parent.after.push(next);
                            },
                            ai: {
                                expose: 0.6,
                                threaten: 2.5,
                            },
                            _priority: -10000,
                        },
                        zmzone: {
                            group: ['zmtrenxing', 'zmtshikong'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            trigger: {
                                global: 'damageAfter',
                            },
                            filter(event, player) {
                                if (!event.source || event.source != player.previous) return false;
                                return event.source != undefined && event.source.countCards('h') > player.countCards('h');
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                        },
                        zmqinglifeiwu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:8',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player);
                            },
                            content() {
                                'step 0';
                                var respondTo = trigger.respondTo;
                                if ((respondTo[1].name == 'nanman' && !trigger.respondTo[0].countCards('h', { name: 'sha' }) > 0) || (respondTo[1].name == 'wanjian' && !trigger.respondTo[0].countCards('h', { name: 'shan' }) > 0) || trigger.respondTo[0].countCards('h', { name: 'jinchan' }) == trigger.respondTo[0].countCards('h')) event.finish();
                                ('step 1');
                                var respondTo = trigger.respondTo;
                                if ((respondTo[1].name == 'sha' && trigger.respondTo[0].countCards('h', { name: 'shan' }) == 0) || (get.type(respondTo[1]) == 'trick' && trigger.respondTo[0].countCards('h', { name: 'wuxie' }) == 0)) {
                                    player
                                        .chooseControl('确定', 'cancel2', function () {
                                            if (get.attitude(player, trigger.respondTo[0]) <= 0) return '确定';
                                            return 'cancel2';
                                        })
                                        .set('prompt', `【清理废物】是否获得${get.translation(trigger.respondTo[0])}一张手牌并立即使用一张牌？`);
                                } else event.finish();
                                ('step 2');
                                if (result.control == '确定') {
                                    if (trigger.respondTo[0].countCards('h')) {
                                        player.gainPlayerCard(trigger.respondTo[0], 1, 'h', true);
                                    }
                                } else event.finish();
                                ('step 3');
                                player.chooseToUse('是否使用一张牌？');
                            },
                        },
                        zmmaofandedaijia: {
                            audio: 'ext:综漫季刊柒/audio:5',
                            nobracket: true,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'damageAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'damageAfter' && event.num > 0) {
                                    return true;
                                } else {
                                    return !player.isPhaseUsing() && event.card.number && event.card.number > 0;
                                }
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'damageAfter') {
                                    var num = trigger.num * 10;
                                    var num1 = trigger.num;
                                } else {
                                    var num1 = trigger.card.number;
                                    var num = trigger.card.number;
                                }
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '冒犯的代价');
                                var cardsx = [];
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (i.number == num1) {
                                            cardsx.push(i);
                                        }
                                    }
                                event.cards = cardsx;
                                ('step 1');
                                if (cards.length) {
                                    event.num = cards.length;
                                    player.gain(cards, 'gain2');
                                    /*   var zx=999;
                                       game.countPlayer(function(current){
                       if(current.isMinHp()&&current.hp>zx){ zx=current.hp; };
                        });*/
                                    if (event.num >= player.hp && player.storage.zmt_np >= 40) {
                                        player
                                            .chooseTarget(
                                                `对一名其他角色造成${event.num}点伤害？`,
                                                function (card, player, target) {
                                                    return true;
                                                },
                                                true
                                            )
                                            .set('ai', function (target) {
                                                return get.damageEffect(target, player, player);
                                            });
                                    } else event.goto(5);
                                } else event.goto(5);
                                ('step 2');
                                if (result.bool) {
                                    player.storage.zmt_np -= 40;
                                    event.tr = result.targets[0];
                                    game.playzm7('zmailianxiya');
                                    game.mp427('zmailianxiya');
                                } else event.goto(5);
                                ('step 3');
                                player.line(result.targets[0], { color: [17, 238, 0] });
                                ('step 4');
                                event.tr.damage(event.num);
                                ('step 5');
                            },
                            group: ['zmtyeshou', 'zmtlongxue'],
                        },
                        zrilunjiazhou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                var num = player.countCards('e');
                                if (event.num < 2 && player.hp > 4 && num > 1) return false;
                                return true;
                            },
                            filter(event, player) {
                                var num1 = player.countCards('e');
                                return player.countCards('e') > 0 && event.num <= num1;
                            },
                            content() {
                                game.mp427('zmrilunjia');
                                trigger.num = 0;
                                player.randomDiscard(Infinity, 'e', true);
                            },
                        },
                        zrilunsiwang: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.storage.zmt_np >= 120;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 120;
                                game.playzm7(['zmjiaerna1', 'zmjiaerna2'].randomGet());
                                game.mp427('zmjiaerna');
                                ('step 1');
                                event.list = player.getFriends().sortBySeat();
                                ('step 2');
                                for (var i of game.players) {
                                    if (get.attitude(i, player) <= 0) {
                                        i.damage(3, 'fire')._triggered = null;
                                    }
                                }
                                ('step 3');
                                player.removeSkill('zrilunjiazhou');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    player: 2,
                                },
                                threaten: 1.8,
                            },
                        },
                        zshishedeyingxiong: {
                            group: ['zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:7',
                            trigger: {
                                global: 'discardBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            popup: false,
                            logTarget: 'player',
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.cards && event.cards.length && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToUse(`【施舍的英雄】${get.translation(trigger.player)}即将弃置${get.translation(trigger.cards.length)}张牌,是否对其使用一张牌并取消弃牌？`, trigger.player).set('ai', function (card) {
                                    if (get.attitude(player, trigger.player) <= 0) return 0;
                                    if (get.attitude(player, trigger.player) > 0 && card.name == 'huogong') return 10;
                                    if (get.attitude(player, trigger.player) > 0) {
                                        return get.effect(trigger.player, card, player, player);
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.line(trigger.player);
                                    //game.playzm7(['zshishedeyingxiong1','zshishedeyingxiong2','zshishedeyingxiong3','zshishedeyingxiong4','zshishedeyingxiong5','zshishedeyingxiong6','zshishedeyingxiong7'].randomGet());
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        zmzhanhuo: {
                            mod: {
                                cardname(card, player) {
                                    if (lib.card[card.name].type == 'trick' && player.getExpansions('zmzhanhuo').length) {
                                        return 'huogong';
                                    }
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCardButton('【梵天啊 诅咒吾身】可将一张牌置于武将牌上', player, player.getCards('he'), 1)
                                    .set('filterButton', function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        if (player.getExpansions('zmzhanhuo').length) return 1 - get.value(button.link);
                                        return 7 - get.value(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addToExpansion(result.links, player, 'give').gaintag.add('zmzhanhuo');
                                }
                            },
                            group: ['zmzhanhuo_1', 'zmzhanhuo_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'huogongBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (get.attitude(player, trigger.target) <= 0) {
                                            game.playzm7(['zmzhanhuo_11', 'zmzhanhuo_12', 'zmzhanhuo_13', 'zmzhanhuo_14', 'zmzhanhuo_15', 'zmzhanhuo_16'].randomGet());
                                        }
                                        player.draw(3);
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'huogongAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('he') + player.getExpansions('zmzhanhuo').length > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var dialog = ui.create.dialog('须弃置其中两张牌', 'hidden');
                                        if (player.countCards('he')) {
                                            dialog.addText(`【${get.translation(player)}】手牌及装备区内的牌`);
                                            dialog.add(player.getCards('he'));
                                        }
                                        if (player.getExpansions('zmzhanhuo').length) {
                                            dialog.addText(`【${get.translation(player)}】以此法放置的牌`);
                                            dialog.add(player.getExpansions('zmzhanhuo'));
                                        }
                                        player
                                            .chooseButton(dialog, 2, true)
                                            .set('filterButton', function (button) {
                                                return true;
                                            })
                                            .set('ai', function (button) {
                                                return -get.value(button.link);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.links);
                                        }
                                    },
                                },
                            },
                        },
                        zmlinghuncaijianshi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmlinghuncaijianshi = 0;
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var red = 0;
                                var black = 0;
                                var red1 = 0;
                                var black1 = 0;
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    if (get.color(hs[i]) == 'black') {
                                        black += get.value(hs[i]);
                                        if (get.type(hs[i]) == 'basic' && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i]) && player.getUseValue(hs[i]) > 0) black1++;
                                        if (hs[i].name != 'tiesuo' && get.type(hs[i]) == 'trick' && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i]) && player.getUseValue(hs[i]) > 0) black1++;
                                    } else {
                                        red += get.value(hs[i]);
                                        if (get.type(hs[i]) == 'basic' && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i]) && player.getUseValue(hs[i]) > 0) red1++;
                                        if (hs[i].name != 'tiesuo' && get.type(hs[i]) == 'trick' && lib.filter.cardEnabled(hs[i], player) && player.hasUseTarget(hs[i]) && player.getUseValue(hs[i]) > 0) red1++;
                                    }
                                }
                                player.chooseControl('红色', '黑色', '取消').set('prompt', '【灵魂裁剪师】你可选择一种颜色的手牌保留').ai = function (event, player) {
                                    if (player.countCards('h', { color: 'red' }) == 0 || (red <= 6 && black1 > 0) || (black1 >= 3 && black1 > red1)) return '黑色';
                                    if (player.countCards('h', { color: 'black' }) == 0 || (black <= 6 && red1 > 0) || (red1 >= 3 && red1 > black1)) return '红色';
                                    return '取消';
                                };
                                ('step 1');
                                if (result.control == '红色') {
                                    player.addTempSkill('zmlinghuncaijianshi_red');
                                    var cards = player.getCards('h', { color: 'black' });
                                    if (cards.length) {
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                            }
                                        game.log(player, `将${cards.length}张牌置于牌堆顶`);
                                    }
                                }
                                if (result.control == '黑色') {
                                    player.addTempSkill('zmlinghuncaijianshi_black');
                                    var cards = player.getCards('h', { color: 'red' });
                                    if (cards.length) {
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                                            }
                                        game.log(player, `将${cards.length}张牌置于牌堆顶`);
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                            group: ['zmlinghuncaijianshi_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                    trigger: {
                                        player: 'phaseJieshu',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmlinghuncaijianshi >= 1 || (player.countCards('h', { color: 'red' }) > 0 && player.countCards('h', { color: 'black' }) > 0 && (player.hasSkill('zmlinghuncaijianshi_red') || player.hasSkill('zmlinghuncaijianshi_black')));
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmlinghuncaijianshi >= 2) {
                                            if (player.hp == player.maxHp) {
                                                player.changeHujia();
                                            } else player.recover();
                                        }
                                        ('step 1');
                                        if (player.countCards('h', { color: 'red' }) > 0 && player.countCards('h', { color: 'black' }) > 0) {
                                            if (player.hp == player.maxHp) {
                                                player.changeHujia();
                                            } else player.recover();
                                        }
                                        player.storage.zmlinghuncaijianshi = 0;
                                    },
                                },
                                black: {
                                    audio: 'zmlinghuncaijianshi_1',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.parent.name == 'zmlinghuncaijianshi_black') return false;
                                        if (!event.targets) return false;
                                        if (get.info(event.card).complexTarget) return false;
                                        if (!lib.filter.cardEnabled(event.card, player, event.parent)) return false;
                                        var color = get.color(event.card);
                                        if (color == 'red') return false;
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
                                    check(event, player) {
                                        if (get.tag({ name: event.card.name }, 'norepeat')) return false;
                                        var att = 0;
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (event.targets[i] != player) {
                                                att += ai.get.effect(event.targets[i], { name: event.card.name }, player, player);
                                            }
                                        }
                                        if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return true;
                                        return att >= 1;
                                    },
                                    content() {
                                        game.playzm7('zmlinghuncaijianshi0');
                                        player.storage.zmlinghuncaijianshi++;
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                    },
                                },
                                red: {
                                    audio: 'zmlinghuncaijianshi_1',
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.parent.name == 'zmlinghuncaijianshi_red') return false;
                                        if (!event.targets) return false;
                                        if (get.info(event.card).complexTarget) return false;
                                        if (!lib.filter.cardEnabled(event.card, player, event.parent)) return false;
                                        var color = get.color(event.card);
                                        if (color == 'black') return false;
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
                                    check(event, player) {
                                        if (get.tag({ name: event.card.name }, 'norepeat')) return false;
                                        var att = 0;
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (event.targets[i] != player) {
                                                att += ai.get.effect(event.targets[i], { name: event.card.name }, player, player);
                                            }
                                        }
                                        if (get.type(event.card) == 'equip' || get.type(event.card) == 'delay') return true;
                                        return att >= 1;
                                    },
                                    content() {
                                        game.playzm7('zmlinghuncaijianshi0');
                                        player.storage.zmlinghuncaijianshi++;
                                        var card = game.createCard(trigger.card.name, trigger.card.suit, trigger.card.number, trigger.card.nature);
                                        player.useCard(card, (trigger._targets || trigger.targets).slice(0));
                                    },
                                },
                            },
                        },
                        zmfusongshuangjian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:1',
                            trigger: {
                                player: 'discardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getParent(2).name == 'zmfusongshuangjian') return false;
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('ej') > 0;
                                });
                                return event.cards && event.cards.length && event.player.isAlive() && num4 > 0;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        num += get.value(i);
                                    }
                                player
                                    .chooseTarget(`【福&颂】是否弃置一名角色场上的一张牌并失去一点体力以取消你弃置${get.translation(trigger.cards)}的行为？`, function (card, player, target) {
                                        return target.countDiscardableCards(player, 'e') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.hp <= 2) return 0;
                                        if (num < 8) return 0;
                                        var num2 = game.countPlayer(function (current) {
                                            return current.countCards('e') > 0 && get.attitude(player, current) <= 0;
                                        });
                                        var num3 = game.countPlayer(function (current) {
                                            return current.countCards('j') > 0 && get.attitude(player, current) > 0;
                                        });
                                        var player = _status.event.player,
                                            att = get.attitude(player, target),
                                            es = target.getCards('e'),
                                            val = 0;
                                        for (var i of es) {
                                            var eff = -(get.value(i, target) - 0.1) * att;
                                            if (eff > val) val = eff;
                                        }
                                        if (num >= 18 && num2 == 0 && num3 == 0) return 1;
                                        return eff;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                    var target = result.targets[0];
                                    player.addExpose(0.15);
                                    player.line(target, 'fire');
                                    player.discardPlayerCard(target, 'e', true);
                                    player.loseHp();
                                    event.goto(4);
                                }
                                ('step 2');
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.countDiscardableCards(player, 'j') > 0;
                                    })
                                ) {
                                    event.finish();
                                } else {
                                    player
                                        .chooseTarget(`【福&颂】是否弃置一名角色装备区内的一张牌并失去一点体力以取消你弃置${get.translation(trigger.cards)}的行为？`, function (card, player, target) {
                                            return target.countDiscardableCards(player, 'j') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player,
                                                att = get.attitude(player, target),
                                                es = target.getCards('j'),
                                                val = 0;
                                            for (var i of es) {
                                                var eff = -get.effect(target, i, target, player);
                                                if (eff > val) val = eff;
                                            }
                                            return eff;
                                        });
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.cancel();
                                    var target = result.targets[0];
                                    player.addExpose(0.15);
                                    player.line(target, 'fire');
                                    player.discardPlayerCard(target, 'j', true);
                                    player.loseHp();
                                }
                                ('step 4');
                            },
                            group: ['zmfusongshuangjian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        return event.player.countCards('e') == 0 && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        game.playzm7('zmlilibei');
                                        game.mp427('zmlilibei');
                                        trigger.num += 1;
                                    },
                                },
                            },
                        },
                        zmwuqiongsanduan: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            nobracket: true,
                            init(player) {
                                player.storage.zmwuqiongsanduan1 = 0;
                                player.storage.zmwuqiongsanduan2 = 0;
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('造成伤害', '未造成伤害', function () {
                                        var num4 = game.countPlayer(function (current) {
                                            return player.canUse({ name: 'sha' }, current, false) && ai.get.effect(current, { name: 'sha' }, player, player) > 0 && current.countCards('h') < 4 && !current.getEquip('bagua');
                                        });
                                        if (num4 == 0 && Math.random() <= 0.8) return '未造成伤害';
                                        return '造成伤害';
                                    })
                                    .set('prompt', '【无穹三段】:定义▼的内容');
                                ('step 1');
                                if (result.control == '造成伤害') {
                                    player.storage.zmwuqiongsanduan1 = 1;
                                } else player.storage.zmwuqiongsanduan1 = -1;
                                ('step 2');
                                player
                                    .chooseControl('造成伤害', '未造成伤害', function () {
                                        return '造成伤害';
                                    })
                                    .set('prompt', '【无穹三段】:定义▲的内容');
                                ('step 3');
                                if (result.control == '造成伤害') {
                                    player.storage.zmwuqiongsanduan2 = 1;
                                } else player.storage.zmwuqiongsanduan2 = -1;
                            },
                            group: ['zmwuqiongsanduan_1', 'zmwuqiongsanduan_2', 'zmwuqiongsanduan_3'],
                            subSkill: {
                                0: {
                                    mod: {
                                        targetInRange(card, player, target, now) {
                                            if (player.getStat().card.sha < 3 && card.name == 'sha') return true;
                                        },
                                    },
                                },
                                1: {
                                    usable: 1,
                                    audio: 'ext:综漫季刊柒/audio:6',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    init(player) {
                                        player.storage.zmwuqiongsanduan_1 = 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getStat().card.sha == 1 && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        var next = game.createEvent('zmwuqiongsanduan_1');
                                        next.player = player;
                                        next.target = trigger.target;
                                        next.setContent(function () {
                                            if (!target.isIn()) return;
                                            if (
                                                player.getHistory('sourceDamage', function (evt) {
                                                    return evt.getParent(2) == event.parent;
                                                }).length == 0
                                            ) {
                                                if (player.storage.zmwuqiongsanduan1 == -1) {
                                                    player.addSkill('zmwuqiongsanduan_11');
                                                    player.addSkill('zmwuqiongsanduan_0');
                                                } else player.removeSkill('zmwuqiongsanduan_11');
                                            } else {
                                                if (player.storage.zmwuqiongsanduan1 == 1) {
                                                    player.addSkill('zmwuqiongsanduan_11');
                                                    player.addSkill('zmwuqiongsanduan_0');
                                                } else player.removeSkill('zmwuqiongsanduan_11');
                                            }
                                        });
                                        event.next.remove(next);
                                        trigger.parent.after.push(next);
                                    },
                                },
                                2: {
                                    usable: 1,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    forced: true,
                                    init(player) {
                                        player.storage.zmwuqiongsanduan_2 = 0;
                                    },
                                    filter(event, player) {
                                        if (!player.hasSkill('zmwuqiongsanduan_0')) return false;
                                        return player.getStat().card.sha == 2 && event.card.name == 'sha';
                                    },
                                    content() {
                                        'step 0';
                                        var next = game.createEvent('zmwuqiongsanduan_2');
                                        next.player = player;
                                        next.target = trigger.target;
                                        next.setContent(function () {
                                            if (!target.isIn()) return;
                                            if (
                                                player.getHistory('sourceDamage', function (evt) {
                                                    return evt.getParent(2) == event.parent;
                                                }).length == 0
                                            ) {
                                                if (player.storage.zmwuqiongsanduan2 == -1) {
                                                    player.addSkill('zmwuqiongsanduan_00');
                                                } else player.removeSkill('zmwuqiongsanduan_11');
                                                player.removeSkill('zmwuqiongsanduan_0');
                                            } else {
                                                if (player.storage.zmwuqiongsanduan2 == 1) {
                                                    player.addSkill('zmwuqiongsanduan_00');
                                                } else player.removeSkill('zmwuqiongsanduan_11');
                                                player.removeSkill('zmwuqiongsanduan_0');
                                            }
                                        });
                                        event.next.remove(next);
                                        trigger.parent.after.push(next);
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasSkill('zmwuqiongsanduan_11') || player.hasSkill('zmwuqiongsanduan_0') || player.hasSkill('zmwuqiongsanduan_00');
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmwuqiongsanduan_11');
                                        player.removeSkill('zmwuqiongsanduan_0');
                                        player.removeSkill('zmwuqiongsanduan_00');
                                    },
                                },
                                11: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (player.getStat().card.sha < 3 && card.name == 'sha') return num + player.getStat().card.sha;
                                        },
                                    },
                                },
                                '00': {
                                    mod: {
                                        selectTarget(card, player, range) {
                                            if (player.getStat().card.sha < 3 && card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1] = Infinity;
                                        },
                                    },
                                    usable: 1,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return player.getStat().card.sha == 3 && event.card.name == 'sha';
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        game.playzm7('zmmoshenzongsi');
                                        game.mp427('zmmoshenzongsi');
                                        if (trigger.targets.length == 1) trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        zmwubian: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if ('sha' == i.name) {
                                            num++;
                                        }
                                    }
                                return player.countCards('h', { name: 'sha' }) == 0 && event.hs && event.hs.length && num > 0 && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if ('sha' == i.name) {
                                            list.push(i);
                                        }
                                    }
                                var next = player.chooseToDiscard(1, 'h', `【无断】是否弃置一张手牌收回${get.translation(list)}？`, function (card, player) {
                                    return true;
                                });
                                next.ai = function (card) {
                                    if (trigger.type == 'gain') return 0;
                                    var value = 1;
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            value += get.value(i);
                                        }
                                    if (get.type(card) == 'basic' && player.canUse(card, player) && get.effect(player, card, player, player) > 0) return 18;
                                    if (player.getCardUsable('sha') == 0 && value < 6) return 0;
                                    return value - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var list = [];
                                    if (Array.isArray(trigger.cards))
                                        for (var i of trigger.cards) {
                                            if ('sha' == i.name) {
                                                list.push(i);
                                            }
                                        }
                                    game.log(player, '收回了', list);
                                    player.gain(list, 'gain2');
                                    if (get.type(result.cards[0]) == 'basic' && player.canUse(result.cards[0], player)) {
                                        player.useCard(result.cards[0], player);
                                    }
                                }
                            },
                            group: ['zmtsuzheng', 'zmtrenxing'],
                        },
                        zmwuduan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:6',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmwuduan = 0;
                            },
                            filter(event, player) {
                                return player.countUsed('sha', true) != player.storage.zmwuduan;
                            },
                            content() {
                                'step 0';
                                var num = Math.abs(player.storage.zmwuduan - player.countUsed('sha', true));
                                player.draw(num);
                            },
                            group: ['zmwuduan_1', 'zmwuduan_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuduan += trigger.num;
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmwuduan != 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmwuduan = 0;
                                    },
                                },
                            },
                        },
                        zmjianqie: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.countCards('h') == 0) return false;
                                return true;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                game.playzm7('zmjianqie0');
                                ('step 1');
                                player.addTempSkill('zmjianqie_1');
                                ('step 2');
                                var cards = player.getCards('h');
                                var num = cards.length;
                                player.lose(cards);
                                player.$throw(cards);
                                game.log(player, '重铸了', cards);
                                player.draw(num);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player) {
                                        var val = 0;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                val += get.value(i, player, 'raw');
                                            }
                                        val = val / cards.length;
                                        if (val > 5) return -1;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            return Infinity;
                                        },
                                    },
                                },
                            },
                        },
                        zmjifeng: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            prompt(event, player) {
                                var str = '';
                                str += `【見切】你即将摸${event.num}张牌,是否延后至你下次造成伤害后执行？届时你多摸等同于伤害量的牌`;
                                return str;
                            },
                            check(event, player) {
                                if (player.countCards('h', { name: 'shan' }) == 0 && _status.currentPhase != player) return false;
                                if (player.isPhaseUsing()) return false;
                                if (_status.event.getParent('phaseDraw').name == 'phaseDraw' && _status.currentPhase == player && player.countCards('h') < 2) return false;
                                return player.storage.zmjifeng.length == 0 && player.countCards('h') > 0;
                            },
                            init(player) {
                                player.storage.zmjifeng = [];
                            },
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmjifeng.push(trigger.num);
                                trigger.cancel();
                            },
                            group: ['zmjifeng_1', 'zmtrenxing', 'zmtsuzheng'],
                            subSkill: {
                                0: {},
                                1: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            var num = from.storage.zmjifeng_1;
                                            if (from.hasSkill('zmjifeng_0')) return distance - num;
                                        },
                                    },
                                    audio: 'ext:综漫季刊柒/audio:2',
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    init(player) {
                                        player.storage.zmjifeng_1 = 0;
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjifeng.length;
                                    },
                                    content() {
                                        'step 0';
                                        var num0 = 0;
                                        for (var i = 0; i < player.storage.zmjifeng.length; i++) {
                                            var num = player.storage.zmjifeng[i] + trigger.num;
                                            player.draw(num);
                                        }
                                        //  player.addTempSkill('zmjifeng_0');
                                        ('step 1');
                                        player.storage.zmjifeng = [];
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
                                    game.playzm7(['zmdongmianqiedao1', 'zmdongmianqiedao2', 'zmdongmianqiedao3', 'zmdongmianqiedao4', 'zmdongmianqiedao5'].randomGet());
                                }
                                if (player.name == 'zm_11ruaiting' || player.name1 == 'zm_11ruaiting' || player.name2 == 'zm_11ruaiting') {
                                    if (player.hasSkill('zmxunhuanzhijian')) {
                                        game.playzm7(['zmdongzhijian21', 'zmdongzhijian22'].randomGet());
                                    } else game.playzm7(['zmdongzhijian11', 'zmdongzhijian12'].randomGet());
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
                                    if (get.type(hs[i], 'trick') == 'trick') {
                                        event.zh.push(hs[i]);
                                    }
                                }
                                ('step 1');
                                if (event.zh.length) {
                                    if (trigger.baseDamage && (event.zh.length > trigger.cards.length || !trigger.cards.length)) {
                                        trigger.baseDamage++;
                                    }
                                    var name = trigger.card.name;
                                    trigger.player.useCard({ name: name }, event.zh, trigger.targets);
                                } else trigger.player.useCard({ name: name }, trigger.targets);
                            },
                            group: ['zmdongmian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊柒/audio:3',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmdongmian' && event.num > 1 && (player.name == 'zm_01jianlan' || player.name1 == 'zm_01jianlan');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm7('zmlan');
                                        game.mp427('zmlan');
                                    },
                                },
                            },
                        },
                        zmtianhuochuqiao: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:4',
                            trigger: {
                                player: 'phaseJieshu',
                            },
                            init(player) {
                                player.storage.zmtianhuochuqiao = false;
                            },
                            filter(event, player) {
                                if (player.storage.zmtianhuochuqiao != false) return false;
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
                                return num0 == cards.length && num0 > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, '选择一名角色对其造成一点火焰伤害', false, function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return get.damageEffect(target, player, player, 'fire');
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'fire');
                                    result.targets[0].damage(1, 'fire');
                                }
                            },
                            group: ['zmtianhuochuqiao_1', 'zmtianhuochuqiao_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmtianhuochuqiao == false;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmtianhuochuqiao = true;
                                        game.playzm7(['zmkaiwen1', 'zmkaiwen2'].randomGet());
                                        game.mp427('zmkaiwen1');
                                        if (player.name == 'zm_01jiankaiwenkasilanna' || player.name1 == 'zm_01jiankaiwenkasilanna') {
                                            player.node.avatar.setBackgroundImage('extension/综漫季刊柒/image/变身凯文1.png');
                                        } else if (player.name2 == 'zm_01jiankaiwenkasilanna') {
                                            player.node.avatar2.setBackgroundImage('extension/综漫季刊柒/image/变身凯文1.png');
                                        }
                                        ('step 1');
                                        player.recover(1);
                                        trigger.player.draw(trigger.player.maxHp - trigger.player.num('h'));
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseJieshu',
                                    },
                                    filter(event, player) {
                                        if (player.storage.zmtianhuochuqiao != true) return false;
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
                                        return num0 == cards.length && num0 > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw(3);
                                    },
                                },
                            },
                        },
                        zmyemoruyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊柒/audio:5',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0 && player.canUse({ name: 'sha' }, current);
                                });
                                if (num4 == 0) return false;
                                if (player.countCards('h', { name: 'sha' }) == 0) return false;
                                var cards1 = player.getCards('h');
                                for (var i = 0; i < cards1.length; i++) {
                                    if (get.tag(cards1[i], 'recover') && player.countCards('h') <= 2) return false;
                                }
                                return !player.hasJudge('lebu');
                            },
                            filter(event, player) {
                                return player.storage.zmyemoruyuan_1 < 2 && player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                event.num = player.countCards('h') * 2;
                                var cards1 = player.getCards('h');
                                for (var i = 0; i < cards1.length; i++) {
                                    event.list.push(cards1[i].name);
                                }
                                var card = player.getCards('h');
                                player.useCard({ name: 'jiu' }, card, player);
                                ('step 1');
                                var list = [];
                                var cards = get.cards(event.num);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '业魔入渊');
                                if (Array.isArray(cards))
                                    for (var i of cards) {
                                        if (event.list.includes(i.name)) {
                                            list.push(i);
                                        }
                                    }
                                if (list.length) {
                                    player.gain(list, 'gain2');
                                }
                            },
                            group: ['zmyemoruyuan_1', 'zmyemoruyuan_2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyemoruyuan_1 = 0;
                                    },
                                    trigger: {
                                        player: 'dyingBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmyemoruyuan_1 < 2;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyemoruyuan_1++;
                                        ('step 1');
                                        if (player.storage.zmyemoruyuan_1 == 2) {
                                            player.recover(1);
                                            trigger.player.draw(trigger.player.maxHp - trigger.player.num('h'));
                                        } else event.finish();
                                    },
                                },
                                2: {
                                    audio: 'ext:综漫季刊柒/audio:4',
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.zmyemoruyuan_1 >= 2 && player.countCards('h') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw(3);
                                    },
                                },
                            },
                        },
                        zmjiushibajian: {
                            nobracket: true,
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.num('h') == 0 && player.storage.zmjiushibajian_1 <= 2 && event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                if (_status.event.getParent('phaseZhunbei').name == 'phaseZhunbei') {
                                    player.chooseUseTarget('视为使用一张【决斗】？', { name: 'juedou' }, false, 'nodistance');
                                } else {
                                    player.chooseUseTarget('视为使用一张【决斗】？', { name: 'juedou' }, false, 'nodistance');
                                }
                                ('step 1');
                                if (result && result.bool) {
                                    // player.addSkill('zmjiushibajian_3');
                                }
                            },
                            group: ['zmjiushibajian_1', 'zmjiushibajian_2', 'zmtleiren', 'zmtgaodengliliang'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmjiushibajian_1 = 0;
                                    },
                                    trigger: {
                                        player: 'dyingBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjiushibajian_1 <= 2;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmjiushibajian_1++;
                                        ('step 1');
                                        if (player.storage.zmjiushibajian_1 == 3) {
                                            game.playzm7('zmkaiwen3');
                                            game.mp427('zmkaiwen2');
                                            if (player.name == 'zm_01jiankaiwenkasilanna' || player.name1 == 'zm_01jiankaiwenkasilanna') {
                                                player.node.avatar.setBackgroundImage('extension/综漫季刊柒/image/变身凯文2.png');
                                            } else if (player.name2 == 'zm_01jiankaiwenkasilanna') {
                                                player.node.avatar2.setBackgroundImage('extension/综漫季刊柒/image/变身凯文2.png');
                                            }
                                        } else event.finish();
                                        ('step 2');
                                        player.recover(1);
                                        trigger.player.draw(trigger.player.maxHp - trigger.player.num('h'));
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        return player.num('h') == 0 && player.storage.zmjiushibajian_1 >= 3;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.draw(3);
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        return event.player.num('h') == 0 && event.player != player && event.hs && event.hs.length && event.player.isAlive();
                                    },
                                    prompt(event, player) {
                                        return `是否令${get.translation(event.player)}摸两张牌？`;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('zmjiushibajian_3');
                                        trigger.player.draw(2);
                                    },
                                },
                                4: {
                                    audio: 'ext:综漫季刊柒/audio:2',
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
                        zm_09humaxiu: '玛修基列莱特',
                        zm_12tiwutiaowu: '五条悟 ',
                        zm_12tixier: '希儿',
                        zm_10kuangalan: '阿兰',
                        zm_07keheita: '黑塔',
                        zm_12tiwaerteyang: '瓦尔特•杨',
                        zm_13lingcaifeng: '裁缝',
                        zm_06faweiweian: '薇薇安',
                        zm_13lingkailong: '凯隆',
                        zm_06fahunxiang: '浑象',
                        zm_13lingnailuo: '奈落',
                        zm_20shentongtian: '通天',
                        zm_11ruzhahake: '扎哈克',
                        zm_11rukaweili: '卡威利',
                        zm_11ruluya: '路雅',
                        zm_14linzhiwu: '智武',
                        zm_08shafeiaoleituo: '菲奥雷托',
                        zm_05qililiyasi: '莉莉亚斯',
                        zm_06faailiya: '艾莉雅',
                        zm_10kuangmoleteleisi: '魔勒特雷斯',
                        zm_14linshiruijiesi: '史瑞杰斯',
                        zm_05qijingyuan: '景元',
                        zm_04douqiyu: '琦玉',
                        zm_04doudongtangkui: '东堂葵',
                        zm_04douailianxiya: '爱莲西雅',
                        zm_01jianlan: '岚',
                        zm_01jianlilibei: '莉莉贝',
                        zm_03qiangjiaerna: '迦尔纳',
                        zm_01jianmoshenzongsi: '魔神总司',
                        zm_01jiankaiwenkasilanna: '凯文卡斯兰娜',
                        zmcanjue: '残珏',
                        zmcanjue_info: '每回合限一次 需要时你可视为使用了任意基本牌;<br>&nbsp此牌结算后你与此牌目标翻面,若你无红色手牌则获得〖妄祸〗<b><font color=DarkGray>:其他角色受到伤害后,你可失去此技能令至多x名角色弃置1张牌并获得该角色1张手牌(X为其手牌数)</font></b>',
                        zmningyuan: '凝怨',
                        zmningyuan_info: '锁定技<br>你受到伤害时摸1张牌,之后你手牌上限-2直到你的回合结束.',
                        zmmoran: '魔染',
                        zmmoran_info: '锁定技<br>准备阶段你须执行一项:<li>弃置2张牌.<li>受到来自你的1点伤害.<br>&nbsp如此做后你令一名角色执行另一项,若其无黑色手牌则不生效.',
                        zmwanghuo: '妄祸',
                        zmwanghuo_info: '其他角色受到伤害后,你可失去此技能令至多x名角色弃置1张牌并获得该角色1张手牌<b><font color=DarkGray>(X为其手牌数)</font></b>',
                        zmzhenmimouhua: '缜密谋划',
                        zmzhenmimouhua_info: '出牌阶段限一次<br>你可将1张手牌交给一名角色,之后若你们手牌数相同则该角色可自手牌数不同的角色处弃置1张手牌.',
                        zmjuedingdeyishou: '决定的一手',
                        zmjuedingdeyishou_info: '有角色进入濒死状态时你可令一名未处于此效果中的角色摸1张牌,之后其本回合不能使用牌且友方角色死亡时失去2点体力.',
                        zmsijiaoqieru: '死角切入',
                        zmsijiaoqieru_info: '锁定技<br>每回合限两次 手牌数与你最接近的角色造成伤害时你摸1张牌.<br>&nbsp若此时受到伤害的角色为手牌数与你最不接近的角色,你可令该伤害+1.',
                        zmjueyifenqizhidun: '决意奋起之盾',
                        zmjueyifenqizhidun_info: '出牌阶段<br>你可消耗20点能量令一名没有护甲的角色获得1点护甲.',
                        zmyingxiongjijie: '英雄集结',
                        zmyingxiongjijie_info: '准备阶段 你可与一名角色先后弃置对方1张牌并令其摸1张牌,双方此法获得的锦囊牌均视为【无中生有】,基本牌均视为【桃】.',
                        zmyiranyaoyuan: '已然遥远的理想之城',
                        zmyiranyaoyuan_info: '有角色受到大于其护甲值的伤害时,你可令该伤害等于其护甲值,之后此技能失效至12个未产生伤害的回合结束为止.',
                        zmyiranyaoyuan2: '已然遥远的理想之城',
                        zmyiranyaoyuan2_info: '',
                        zmcanying: '残影',
                        zmcanying_info: '锁定技<li>你废除防具栏并始终视为装备了【八卦阵】,手牌中的防具牌均视为不计入手牌上限的【杀】.<li>当你抵消其他角色使用的【杀】后可对其使用1张杀.',
                        zmhuanfeng: '幻锋',
                        zmhuanfeng_info: '你使用【杀】对目标结算前可暗中取消此杀将造成的伤害,如此做后此杀被抵消时不计入次数,你摸3张牌.',
                        zmnuesha: '虐杀',
                        zmnuesha_info: '你的【杀】造成伤害后可弃置任意张牌令目标失去等量的体力,至多令其体力值减少至等于其手牌数.',
                        zmziranenhui: '自然恩惠',
                        zmziranenhui_info: '你摸牌时若手牌不为全场最多则可将此技能交给其他角色,否则你多摸1张牌.',
                        zmziranbaochang: '自然报偿',
                        zmziranbaochang_info: '其他角色回合开始时你可将1张带有伤害标签的手牌当作【桃】使用;<br>&nbsp如此做后,本回合你及持有〖自然恩惠〗的角色受到伤害时视为对伤害来源使用该牌.',
                        zmtianxingzhaoming: '天星照命',
                        zmtianxingzhaoming_info: '出牌阶段限一次<br>你可令你本回合出杀次数+1后进行判定并将判定牌点数作为你本回合的手牌上限;<br>&nbsp若该点数大于你的手牌数则你获得判定牌且可重复此流程,否则该点数视为0.',
                        zmmingzaonayin: '命造纳音',
                        zmmingzaonayin_info: '其他角色出牌阶段开始时你查看其1张手牌,之后你可选择:<br>重铸1张同颜色手牌后令其重铸你查看的牌.<br>弃置1张同花色手牌后令其弃置手牌中同花色的牌.',
                        zmyijinan: '一击',
                        zmyijinan_info: '当你使用【杀】指定其他角色时可消耗10点能量展示牌堆顶的牌令此杀伤害变为该牌点数;<br>&nbsp如此做后,该角色可弃置1张牌令此杀伤害减去相当于弃牌点数的数值.',
                        zmzuiqiangnan: '刚体',
                        zmzuiqiangnan_info: '当你被其他角色使用【杀】指定为目标时可消耗10点能量展示牌堆顶的牌令此杀伤害减去该牌点数;<br>&nbsp如此做后,此杀来源可弃置1张点数比展示牌更大的牌取消此效果.',
                        zmlinghuncaijianshi: '灵魂裁剪师',
                        zmlinghuncaijianshi_info: '出牌阶段开始时,你可保留1种颜色的手牌将其余手牌置于牌堆顶,之后本回合你使用的该颜色的牌可额外结算1次.<br>&nbsp若如此做,直到结束阶段若该效果发动至少2次或你手牌中有2种颜色的牌,每满足一项你回复1点体力,溢出的回复转化为护甲.',
                        zmfusongshuangjian: '创生之福&破坏之颂',
                        zmfusongshuangjian_info: '<li>当你进行弃牌时可改为弃置场上1张牌并失去1点体力.<li>你对装备区内没有牌的角色造成伤害时可令该伤害+1.',
                        zmwuqiongsanduan: '绝剑:无穹三段',
                        zmwuqiongsanduan_info: '锁定技<br>每回合你使用【杀】时第1张无次数限制、若▼则第2张延续效果且无距离限制、若▲则第3张延续效果且无目标数限制且指定唯一目标时伤害+1<b><font color=DarkGray>(▼▲为造成/未造成伤害,由你回合开始时指定)</font></b>',
                        zmwubian: '无断',
                        zmwubian_info: '你失去手牌中最后的【杀】时可弃置1张手牌收回这些杀,你以此法弃置的基本牌若合理则对自己使用之.',
                        zmwuduan: '极地',
                        zmwuduan_info: '锁定技<br>结束阶段 根据你本回合出杀次数与摸牌阶段摸牌数之差值,你摸等量的牌.',
                        zmjianqie: '激风',
                        zmjianqie_info: '出牌阶段限一次<br>你可重铸所有手牌,之后本回合你使用牌无次数限制.',
                        zmjifeng: '见切',
                        zmjifeng_info: '你进行的摸牌可延后至你下次造成伤害后执行,届时摸牌数增加对应伤害值.',
                        zmdongmian: '冬冕切刀',
                        zmdongmian_info: '你使用的普通锦囊牌只能指定攻击范围内的角色,若指定唯一目标则可将其手牌中的锦囊牌并入该牌重新结算,实体牌因此增加后该牌伤害+1.',
                        zmtianhuochuqiao: '天火出鞘',
                        zmtianhuochuqiao_info: '结束阶段 若本回合因使用进入弃牌堆的牌均为红色,你可分配1点火焰伤害.<li>当你第一次进入濒死状态时回复1点体力并将手牌补至体力上限,此技能时机不变效果改为摸3张牌.',
                        zmyemoruyuan: '业魔入渊',
                        zmyemoruyuan_info: '准备阶段<br> 你可将全部手牌当作【酒】使用,之后你展示牌堆顶双倍的牌,并获得其中转化牌的同名牌.<li>当你第二次进入濒死状态时回复1点体力并将手牌补至体力上限,此技能时机不变效果改为摸3张牌.',
                        zmjiushibajian: '救世拔剑',
                        zmjiushibajian_info: '当你失去最后的手牌时可视为对一名角色使用了1张【决斗】.<li>当你第三次进入濒死状态时回复1点体力并将手牌补至体力上限,此技能时机不变效果改为摸3张牌.',
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
                        zrilunjiazhou: '日轮啊 化作甲胄',
                        zrilunjiazhou_info: '你受到的伤害若不大于你装备区内牌数的2倍,则你可弃置装备区内的牌使该伤害变为0.',
                        zrilunsiwang: '日轮啊 归于死亡',
                        zrilunsiwang_info: '出牌阶段 <br>你可消耗120点能量并失去【日轮啊 化作甲胄】,之后对敌方全体造成3点神圣火焰伤害.',
                        zshishedeyingxiong: '施舍的英雄',
                        zshishedeyingxiong_info: '其他角色弃牌时,你可对其使用1张牌后取消该事件.',
                        zmzhanhuo: '梵天啊 诅咒吾身',
                        zmzhanhuo_info: '<li>出牌阶段开始时你可将1张牌置于武将牌上,以此法放置了牌时你的普通锦囊牌均视为【火攻】.<li>你使用【火攻】时摸3张牌,结算后弃置2张牌<b><font color=DarkGray>(可弃置以此法放置的牌)</font></b>',
                        zmqinglifeiwu: '清理废物',
                        zmqinglifeiwu_info: '其他角色使用的牌被你被响应后,若其自身无手牌可响应该牌,你可获得其1张手牌后立即使用1张牌.',
                        zmmaofandedaijia: '冒犯的代价',
                        zmmaofandedaijia_info: '锁定技<br>你于出牌阶段外使用或打出牌后将根据该牌点数展示牌堆顶等量的牌,之后获得其中同点数的牌.<li>若你以此法获得的牌数不少于你的体力值,你可消耗40点能量对一名角色造成等量的伤害.<li>你受到伤害后亦可以伤害量为点数触发此技能,且展示牌数视为伤害量的10倍.',
                        zmbuyiyouxi: '不义游戏',
                        zmbuyiyouxi_info: '每回合限一次<br>其他角色使用【杀】指定唯一目标时你可交换使用者与目标,之后此杀未造成伤害则你失去1点体力.',
                        zmzone: 'Zone',
                        zmzone_info: '锁定技<br>你的上家造成伤害后若你手牌少于其则摸1张牌.',
                        zmshencejiangjun: '神策将军',
                        zmshencejiangjun_info: '你攻击范围内的角色受到伤害时,你可交给伤害来源1张牌后将手牌数摸至与其相同.',
                        zmshezhaoweiling: '摄召威灵',
                        zmshezhaoweiling_info: '当你对一名角色造成伤害后你可展示牌堆顶的牌:<br>&nbsp若之为【杀】,你对其使用之;<br>&nbsp若之为锦囊牌,你获得之.',
                        zmyifengjingdian: '移锋惊电',
                        zmyifengjingdian_info: '<li>你的回合内:每张因使用进入弃牌堆的基本牌使你攻击距离+1;每张因使用进入弃牌堆的锦囊牌使你出杀次数上限+1.<li>有角色使用【无懈可击】时,你可消耗40点能量分配1点雷电伤害;若你此时手牌中有【无懈可击】,造成的伤害翻倍.',
                        zmjueduiweiquan: '绝对威权',
                        zmjueduiweiquan_info: '摸牌阶段开始时,你可令至多3名其他角色将1张牌以你定义的顺序置于牌堆顶.',
                        zmliantongweiyi: '联统为一',
                        zmliantongweiyi_info: '当你对唯一目标使用带有伤害标签的牌时,可令一名其他角色对该目标使用1张牌且你于本回合获得其武器牌技能.',
                        zmxinshidaidexumu: '新时代的序幕',
                        zmxinshidaidexumu_info: '出牌阶段<br>你可消耗60点能量激活此技能并指定任意名角色,此技能生效至你的一个没有发生过伤害的回合结束为止.<br>&nbsp若你存活,以此法指定的角色于此技能生效时、回合开始时视为使用了1张【酒】.',
                        zmanyingyaojing: '暗影妖精',
                        zmanyingyaojing_info: '锁定技<br>当你于回合外失去点数最大的手牌时,你弃置手牌中点数最小的牌;<br>&nbsp如此做后若你没有黑色手牌,当前进行回合的角色须将1张牌当作【增兵减灶】对你使用直到该牌结算后你手牌中有黑色牌为止.',
                        zmanyingzhendi: '暗影阵地',
                        zmanyingzhendi_info: '锁定技<br>当你对其他角色造成伤害时,获取其1点手牌上限;<br>&nbsp你以此法获取的上限达到4点时归还对应上限值,之后你选择一项执行:<li>获得回复了上限值的角色各1张牌.<li>弃置4张牌并对回复了上限值的角色各造成2点伤害.',
                        zmzhishilingshi: '智识令使',
                        zmzhishilingshi_info: '锁定技<br>当你成为锦囊牌的目标时摸1张牌.',
                        zmwoxingwosu: '我行我素',
                        zmwoxingwosu_info: '有角色受到锦囊牌或你造成的伤害后你可弃置其1张牌.',
                        zmheitaxulie: '黑塔序列',
                        zmheitaxulie_info: '出牌阶段 <br>你可将1张牌置于武将牌上,以此法同时仅可放置1张牌.<br>&nbsp以此法放置的牌每当你摸牌后重铸1次,其变为锦囊牌时你可弃置该牌回复1点体力或将该牌交给1名角色后对其造成1点伤害.',
                        zmmimishixin: '秘密誓心',
                        zmmimishixin_info: '出牌阶段<br>你可消耗10点能量令一名角色选择是否交给你1张牌,如是则你记录该角色.<br>&nbsp你手牌中以此法获得的牌均视为【杀】,且对手牌上限的占用为-1.',
                        zmjuechufanji: '绝地反击',
                        zmjuechufanji_info: '<li>你以〖秘密誓心〗记录的角色受到伤害后,你可对伤害来源使用1张【杀】,以此法使用的红色杀不可响应.<li>当你进入濒死状态时回复1点体力<b><font color=DarkGray>(每回合限1次)</font></b>,此效果发动后生效至有其他角色进入濒死状态为止,且届时你可令其失去1点体力.',
                        zmgujianwuming: '孤剑无鸣',
                        zmgujianwuming_info: '锁定技 结束阶段:<li>若你本回合参与过伤害事件,你摸2张牌;<li>若你体力值达到上限,你增加1点体力上限;<li>若上述条件均不满足,你失去1点体力.',
                        zmshuangrencengshi: '霜刃曾试',
                        zmshuangrencengshi_info: '出牌阶段限一次<br>你可令一名其他角色本回合与你计算距离为1,并令其选择是否对你使用1张【杀】;<br>&nbsp若其选择否则你弃置其1张牌,反之你本回合出杀次数上限+1.',
                        zmjueduiweiyan: '绝对威严',
                        zmjueduiweiyan_info: '锁定技<li>当你回复体力后获得1点护甲.<li>你的护甲抵消后清除剩余护甲并对一名角色造成等量的伤害,若不存在剩余护甲则你将手牌数摸至体力上限.',
                        zmxietiaozhe: '协调者',
                        zmxietiaozhe_info: '有角色判定区内置入牌后,你可将场上1张延时锦囊牌当作【决斗】使用.',
                        zmchongjianfaze: '重构法则',
                        zmchongjianfaze_info: '当无实体/不合理的牌被使用或有武将牌变更状态时,你可进行判定:<br>&nbsp若判定牌为黑色则该事件取消且此技能下次进行的判定不可被干涉,反之你弃置区域内与判定牌同花色的牌.',
                        zmliliangtiaoxu: '力量调序',
                        zmliliangtiaoxu_info: '锁定技<br>其他角色的回合结束时,若你本回合失去过牌则你摸1张牌、获得过牌则你弃置1张牌.',
                        zmnongshi: '弄势',
                        zmnongshi_info: '其他角色获得另一名角色的牌时,你查看并可用1张牌交换其中1张牌.',
                        zmjingxi: '镜隙',
                        zmjingxi_info: '其他角色使用点数等于你手牌数的牌时,若你为此牌目标则可令此牌对你失效,若非目标则可加入此牌目标.',
                        zmdiemeng: '蝶梦',
                        zmdiemeng_info: '你对其他角色造成伤害时可令其于其进行的下个回合内所有手牌均视为【闪】,且生效时根据以此法改变的牌数你将手牌数补至对应值.',
                        zmweimu: '帷幕',
                        zmweimu_info: '锁定技<br>你进入游戏后2轮内不能被其他角色使用牌指定为目标.',
                        zmzhongliyazhi: '重力压制',
                        zmzhongliyazhi_info: '你的牌被弃置后可用这些牌与一名合理角色拼点至你未赢;<br>&nbsp该角色因此失去最后的手牌时失去1点体力并获得你未拼点的弃牌.',
                        zmwuzhijuxian: '物质具现',
                        zmwuzhijuxian_info: '点数大于你所有手牌的即时牌被其他角色使用后,你可展示手牌并获得该牌.',
                        zmnisiheidong: '拟似黑洞',
                        zmnisiheidong_info: '出牌阶段<br>你可消耗80点能量令任意名角色分别弃置所有区域的牌至1张.',
                        zmwuliangkongchu: '无量空处',
                        zmwuliangkongchu_info: '出牌阶段<br>你可消耗至少50点能量令一名角色使用的牌增加100%的失效概率,之后其每次使用牌时概率降低10%至0%为止;<br>&nbsp如此做后若此概率大于100%则每余10%其失去1点体力.',
                        zmwuxiaxianshushi: '无下限术式',
                        zmwuxiaxianshushi_info: '当你被带有伤害标签的牌指定为目标时可令此牌来源摸1张牌,之后你从此牌目标中移除.<br>&nbsp如此做后下次此技能不能被同类牌触发.',
                        zmliuyan: '六眼',
                        zmliuyan_info: '锁定技<br>你不因此法使用牌后将牌堆顶的牌置于武将牌上;<br>&nbsp结束阶段你可从以此法放置的牌中的1张开始向后依序连续使用之,结束时弃置剩余牌.',
                        zmyuyesezhong: '于夜色中',
                        zmyuyesezhong_info: '同一回合内,一名角色造成/受到伤害后若该值累计超过1点,你可弃置其区域内1张牌;<br>&nbsp若其因此失去最后的手牌,你对其造成1点伤害.',
                        zmliangzizhiying: '量子之影',
                        zmliangzizhiying_info: '<li>其他角色出牌阶段开始时,你可无视合理性对其使用1张基本牌,若该牌未被响应则你可获得其1张手牌.<li>你于其他角色的回合内<strong><b><font color=#9935FF>对其行动</font></b></strong><b><font color=MediumPurple>(获得牌、使用牌、弃置牌、造成伤害)</font></b>达2次后,本回合你造成的伤害翻倍,该角色手牌上限减半.',
                        zmchaijiecaipian: '拆解裁片',
                        zmchaijiecaipian_info: '出牌阶段限一次<br>你可与一名角色拼点,点数较大的一方查看对方区域内的牌并获得其中1张牌.',
                        zmfenghezhisui: '缝合之髓',
                        zmfenghezhisui_info: '锁定技 结束阶段:<li>若你装备栏不完整,你摸1张牌.<li>若你区域内存在获得自其他角色的牌,你摸1张牌.<li>若你区域内不因摸牌阶段获得的牌占比超过一半,你摸1张牌.',
                        zmxinghongxiutao: '猩红袖套',
                        zmxinghongxiutao_info: '当你使用牌指定复数目标时,你可废除/回复1个装备栏以增加/减少一名目标.',
                        zmwanglingpaihuai: '亡灵徘徊',
                        zmwanglingpaihuai_info: '你的体力上限达到10后进行摸牌时可改为回复1点体力.',
                        zmwuweideyindaozhe: '无为的引导者',
                        zmwuweideyindaozhe_info: '<li>锁定技 你使用即时牌后须与手牌不少于你的角色拼点,产生结果后若你胜利/无手牌则摸2张牌.<li>你拼点后若体力上限小于10则可将一张拼点牌交给拼点对象并增加1点体力上限.',
                        zmzhenhunzhijian: '镇魂之剑',
                        zmzhenhunzhijian_info: '限定技<br>出牌阶段你可对一名角色造成2点伤害,之后若其存活则你根据其体力值失去等量的体力,否则2轮后你重置此技能.',
                        zmhuimiexingjun: '毁灭行军',
                        zmhuimiexingjun_info: '你未受到伤害的回合结束时,可视为使用了1张本回合被使用过的锦囊牌.<br>&nbsp如此做后若本回合你未造成过伤害,本轮此技能失效.',
                        zmanxingningshi: '暗星灌注',
                        zmanxingningshi_info: '锁定技<br>你使用的转化【杀】伤害基数增加转化牌之花色总数.',
                        zmxingchenbushizhe: '星辰捕食者',
                        zmxingchenbushizhe_info: '<li>游戏每进行2轮,你摸2张牌.<li>游戏每进行3轮,你回复1点体力.<br>&nbsp上述效果同时生效时,效果改为你可将3张牌当作无视防具的【杀】对一名角色使用.',
                        zmhuimiexingjun2: '毁灭行军重置',
                        zmhuimiexingjun2_info: '',
                        zmdaquanzaiwo: '大权在握',
                        zmdaquanzaiwo_info: '锁定技<li>每轮开始时由你最先进行回合,若你身份为主公则摸1张牌.<li>每轮结束时若你手牌数为全场最少且本轮未受到伤害,你回复1点体力.',
                        zmjieyinyishi: '接引仪式',
                        zmjieyinyishi_info: '限定技<br>出牌阶段你可获得一名角色区域内的全部牌,若其中包含所有花色则你获得〖支离破碎〗:<b><font color=DarkGray><br>你使用的【杀】伤害+1且对目标结算时可获得其全部手牌,否则伤害-1;<br>如此做后你须选择弃置全部手牌或失去2点体力.</font></b>',
                        zmanxinglongzhao: '暗星笼罩',
                        zmanxinglongzhao_info: '锁定技<br>一轮内你使用首张牌后,本轮其他角色不能对你使用同颜色的牌、不能对自身使用同花色的牌、不能获得同点数的牌.',
                        zmzhiliposui: '支离破碎',
                        zmzhiliposui_info: '你使用的【杀】伤害+1且对目标结算时可获得其全部手牌,否则伤害-1;<br>如此做后你须选择弃置全部手牌或失去2点体力.',
                        zmhunyuan: '混元',
                        zmhunyuan_info: '锁定技<br>你同回合内每使用3张牌则摸1张牌,使用了至少9张牌的回合结束时回复1点体力.',
                        zmzhu: '诛',
                        zmzhu_info: '你摸到的【杀】可立即使用并摸1张牌.',
                        zmxian: '陷',
                        zmxian_info: '其他角色回合开始时若手牌中有1张牌颜色与其余牌不同,则你查看并可用1张牌交换该牌使该角色所有手牌颜色相同后置入弃牌堆.',
                        zmlu: '戮',
                        zmlu_info: '你使用【杀】时可将目标改为场上体力值为1的角色或没有手牌的角色,目标数未因此增加则此杀伤害+1.',
                        zmjue: '绝',
                        zmjue_info: '其他角色受到你造成的伤害后你可令其回复1点体力,其以此法回复的体力累计达到体力上限时你将其击杀.',
                        zmshangqing: '上清',
                        zmshangqing_info: '当你摸牌时可改为令一名角色的上下家分别交给其1张牌/令其分别交给上下家1张牌.',
                        zmchusha1: '出杀次数+1',
                        zmchusha1_info: '',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:综漫季刊柒/image/${i}.jpg`);
                    info[4].push(`die:ext:综漫季刊柒/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('综漫季刊柒');
                lib.config.characters.add('综漫季刊柒');
                lib.translate['综漫季刊柒_character_config'] = `综漫季刊柒`;
                return QQQ;
            });
        },
        config: {
            ZMSLTB7: {
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

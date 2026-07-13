import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '综漫季刊肆',
        content(config, pack) {
            //------------------------------------------------星级--------------------------------------------------//
            lib.characterTitle.zm_07keyinuosha = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07keaiertenamu = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shazhufu = `<img src=extension/综漫季刊肆/二星.png width="59" height="22">`;
            lib.characterTitle.zm_14linrishi = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_09husuirenshi = `<img src=extension/综漫季刊肆/五星.png width="84" height="22">`;
            lib.characterTitle.zm_14linzhoubai = `<img src=extension/综漫季刊肆/五星.png width="84" height="22">`;
            lib.characterTitle.zm_11rugulunwenhua = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07kesuofeiya = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruaisi = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruxinhua = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_05qiluolunzuo = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_08shajingke = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruaboniya = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_07kemeibiwusi = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_08shapaduofeilisi = `<img src=extension/综漫季刊肆/二星.png width="47" height="20">`;
            lib.characterTitle.zm_05qikaierxi = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11ruweijina = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07kechaersi = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_02gonggonggong = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_03qiangyoulandaier = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_01jianmalikasi = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_10kuanglataen = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_09hulifu = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_07keqishi = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_11rubaize = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            lib.characterTitle.zm_07keyagebubonuli = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_14linaiboliyeta = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_01jianmenggete = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_14linmengge = `<img src=extension/综漫季刊肆/三星.png width="59" height="22">`;
            lib.characterTitle.zm_14lintianyinqi = `<img src=extension/综漫季刊肆/四星.png width="77" height="20">`;
            //------------------------------------------------------能量全局--------------------------------------------------------//
            lib.skill._zmtnlfy4 = {
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
                    for (var i in lib.characterPack.综漫季刊肆) {
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
                                    np1.setBackgroundImage('extension/综漫季刊肆/np.png');
                                }
                                if (player.storage.zmt_np > 70 && player.storage.zmt_np < 100) {
                                    np1.setBackgroundImage('extension/综漫季刊肆/np0.png');
                                }
                                if (player.storage.zmt_np >= 100 && player.storage.zmt_np < 140) {
                                    np1.setBackgroundImage('extension/综漫季刊肆/np00.png');
                                }
                                if (player.storage.zmt_np >= 140) {
                                    np1.setBackgroundImage('extension/综漫季刊肆/np000.png');
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
            lib.skill._zmtnlcz4 = {
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
                    for (var i in lib.characterPack.综漫季刊肆) {
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
            //------------------------------------------------看来用不上了的分栏及势力--------------------------------------------------//
            lib.group.push('zm4ru');
            lib.translate.zm4ru = '裁';
            lib.translate.zm4ruColor = '#FFFF00';
            lib.group.push('zm4dao');
            lib.translate.zm4ti = '替';
            lib.translate.zm4tiColor = '#FFFF00';
            lib.group.push('zm4yan');
            lib.translate.zm4yan = '衍';
            lib.translate.zm4yanColor = '#FFFF00';
            lib.group.push('zm4do');
            lib.translate.zm4do = '斗';
            lib.translate.zm4doColor = '#FFFF00';
            lib.group.push('zm4ke');
            lib.translate.zm4ke = '科';
            lib.translate.zm4keColor = '#FFFF00';
            lib.group.push('zm4xie');
            lib.translate.zm4xie = '谐';
            lib.translate.zm4xieColor = '#FFFF00';
            lib.group.push('zm4qiang');
            lib.translate.zm4qiang = '枪';
            lib.translate.zm4qiangColor = '#FFFF00';
            lib.group.push('zm4kuang');
            lib.translate.zm4kuang = '狂';
            lib.translate.zm4kuangColor = '#FFFF00';
            lib.group.push('zm4gong');
            lib.translate.zm4gong = '弓';
            lib.translate.zm4gongColor = '#FFFF00';
            lib.group.push('zm4fa');
            lib.translate.zm4fa = '法';
            lib.translate.zm4faColor = '#FFFF00';
            lib.group.push('zm4shen');
            lib.translate.zm4shen = '神';
            lib.translate.zm4shenColor = '#FFFF00';
            lib.group.push('zm4jian');
            lib.translate.zm4jian = '剑';
            lib.translate.zm4jianColor = '#FFFF00';
            lib.group.push('zm4ling');
            lib.translate.zm4ling = '灵';
            lib.translate.zm4lingColor = '#FFFF00';
            lib.group.push('zm4qi');
            lib.translate.zm4qi = '骑';
            lib.translate.zm4qiColor = '#FFFF00';
            lib.group.push('zm4sha');
            lib.translate.zm4hu = '护';
            lib.translate.zm4qiColor = '#FFFF00';
            lib.group.push('zm4hu');
            lib.translate.zm4sha = '杀';
            lib.translate.zm4shaColor = '#FFFF00';
            lib.group.push('zm4sha');
            lib.translate.zm4lin = '临';
            lib.translate.zm4linColor = '#FFFF00';
            lib.group.push('zm4lin');
            lib.translate.zm4ru = `<img src=extension/综漫季刊肆/zm4ru.png width="28" height="28">`;
            lib.translate.zm4chan = `<img src=extension/综漫季刊肆/zm4chan.png width="28" height="28">`;
            lib.translate.zm4lin = `<img src=extension/综漫季刊肆/zm4lin.png width="28" height="28">`;
            lib.translate.zm4hu = `<img src=extension/综漫季刊肆/zm4hu.png width="28" height="28">`;
            lib.translate.zm4dao = `<img src=extension/综漫季刊肆/zm4dao.png width="28" height="28">`;
            lib.translate.zm4ti = `<img src=extension/综漫季刊肆/zm4ti.png width="28" height="28">`;
            lib.translate.zm4yan = `<img src=extension/综漫季刊肆/zm4yan.png width="28" height="28">`;
            lib.translate.zm4do = `<img src=extension/综漫季刊肆/zm4do.png width="28" height="28">`;
            lib.translate.zm4ke = `<img src=extension/综漫季刊肆/zm4ke.png width="28" height="28">`;
            lib.translate.zm4sha = `<img src=extension/综漫季刊肆/zm4sha.png width="28" height="28">`;
            lib.translate.zm4gong = `<img src=extension/综漫季刊肆/zm4gong.png width="28" height="28">`;
            lib.translate.zm4fa = `<img src=extension/综漫季刊肆/zm4fa.png width="28" height="28">`;
            lib.translate.zm4qiang = `<img src=extension/综漫季刊肆/zm4qiang.png width="28" height="28">`;
            lib.translate.zm4qi = `<img src=extension/综漫季刊肆/zm4qi.png width="28" height="28">`;
            lib.translate.zm4xie = `<img src=extension/综漫季刊肆/zm4xie.png width="28" height="28">`;
            lib.translate.zm4shen = `<img src=extension/综漫季刊肆/zm4shen.png width="28" height="28">`;
            lib.translate.zm4ling = `<img src=extension/综漫季刊肆/zm4ling.png width="28" height="28">`;
            lib.translate.zm4kuang = `<img src=extension/综漫季刊肆/zm4kuang.png width="28" height="28">`;
            lib.translate.zm4jian = `<img src=extension/综漫季刊肆/zm4jian.png width="28" height="28">`;
            //------------------------------------------------特效支持--------------------------------------------------//
            game.mp424 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/综漫季刊肆/mp4/${Q}.mp4`;
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
            lib.skill._dieAudiozmjk4 = {
                trigger: { global: 'dieBegin' },
                _priority: 2,
                forced: true,
                content() {
                    game.playAudio('../extension/综漫季刊肆/audio', trigger.player.name);
                },
            };
            game.playzm4 = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/综漫季刊肆/audio', fn);
                }
            };
            HTMLDivElement.prototype.zm4t = function (bg, pos, time, func) {
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '综漫季刊肆',
                    connect: true,
                    character: {
                        zm_07keaiertenamu: ['female', 'zm4ke', 4, ['zmyitailianshu', 'zmsanjianheermosijiaotu'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性中立善良.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】三尖赫尔墨斯焦土<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★☆☆☆☆☆☆☆<br>\n【辅助】☆☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】全名希翁·艾尔特纳姆·阿特拉西亚,魔术协会三大部门之一阿特拉斯院的预备院长.<br>\n艾尔特纳姆出身于阿特拉斯的没落贵族之家,本身是被授予了阿特拉西亚之名的优秀炼金术士.<br>\n常用的武器是被称为[乙太光束]的模拟神经,可通过接触目标皮肤以沟通其脑神经达到读取记忆与扰乱甚至操控思维的作用,因为这个技术艾尔特纳姆也被称呼为灵子黑客.其秘密武器是阿特拉斯院的拟似灵子演算器·三尖赫尔墨斯,其是世界最大的记录媒体,收集·区分·记录着地球上的众多情报,仅仅是与其链接的瞬间都会令一般人因大脑过载而精神崩溃.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_08shazhufu: ['male', 'zm4sha', 4, ['zmxiaomianhu', 'zmlangdangjiuguan'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】啷当酒馆<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【特质】梁山泊好汉第九十三位,地藏星<笑面虎>朱富.<br>\n朱富祖贯沂水,哥哥<旱地忽律>朱贵是梁山元老之一.为人精明的朱富多为其出谋划策.反上梁山后朱贵负责经营山脚下四大酒店之一的南山酒店,观人观相察言观色,邀有意来投的好汉上山,又得区分出朝廷派来的探子.<br>\n梁山大聚义后,朱富受任在山上监造、供应酒醋,举办宴席等事务.之后朱富还成功策划了劫法场救李逵的行动,征方腊时染瘟疫病故于杭州.<br>\n【评级】<b><font color=DarkKhaki>C-</font></b>\n']],
                        zm_14linrishi: ['female', 'zm4lin', 4, ['zmheitianzhiyan', 'zmjiguangjingtu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱中立.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】寂光净土<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】黑天崇拜者召唤受肉的神性,然而日蚀的概念并非人类独有,会沟通混沌的外神也不足为奇.<br>\n恒星被遮蔽时,万物自心底产生畏惧,却也有信徒疯狂崇拜.祈祷未得回应,但似乎更适宜通过死灵之书向伟大的万门之匙祈求仪式,让日蚀的概念凭依于身,创造属于教众的黑天.<br>\n人类并非宇宙中的唯一智慧,但傲慢的术士往往不会多考虑这点.造神失败,所谓的黑天之神反客为主.即使祂以全部人性自缚,在被教会抹杀前寂光的黑域也已淹没数个城市,造成大乱.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_09husuirenshi: ['male', 'zm4hu', 5, ['zmxinhuoxiangcheng', 'zmxinhuoyongran'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】薪火永燃<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★★★★★<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【特质】上古三皇之首,天皇燧皇.<br>\n上古时期,人类还未形成真正部落,茹毛饮血,时时刻刻面对野兽侵袭.在那混沌未明的时代,一位智者观雷击大地所余雷火有感,在百兽与族人无不恐惧火焰的时候敢于去接触,理解的火焰,最终取得了燧火之法.<br>\n使用火焰可谓是人类从百兽之属中走出的决定一步,也是人类理解天道,挑战天地,自强不息的第一面旗帜.有了火焰,人类可以战胜野兽;有了火焰,人类可以形成最初的部落.这火虽是凡火,却又是象征文明的,天地间最强大的薪火.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_14linzhoubai: ['male', 'zm4lin', 4, ['zmtianrenjiuzai', 'zmlanzai', 'zmqiongzai', 'zmchouzai', 'zmshuaizai', 'zmyuzai', 'zmtanzai', 'zmfengzai', 'zmkuangzai', 'zmnuzai'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】天人九灾<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★★★★<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】从仙道走向诡异的修行者,点亮所有星图后可以窥见其全盛时的一端.<br>\n在世界被扭曲侵染后,一名从未来时间回卷到过去的人类带着完整的[天人九灾],冒着无数次彻底堕入疯狂的风险以期在某个时间点扭转自己最坏的未来.<br>\n[天人九灾]是多文明集合百家之长整理出的九种功法,旨在最大限度的适应越来越混沌的宇宙,将扭曲与污染化为己用,被称为整个宇宙的千年大计之一.据说完全掌握九灾的使用者将成为不可直视、不可探听、不可言说、不可想象的诡异.<br>\n【评级】<b><font color=GoldEnrod>S-</font></b>\n']],
                        zm_07keyinuosha: ['female', 'zm4ke', 4, ['zmwanyouyinli', 'zmxiazhuidezhenli'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】下坠的真理<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】由<自然哲学的数学原理>一书中诞生的幻灵,一位对经典力学略有研究的淑女.<br>\n<自然哲学的数学原理>是艾萨克·牛顿的知名著作,其中总结了近代天体力学和地面力学的成就,为经典力学规定了一套基本概念,提出了力学的三大定律和万有引力定律,从而使经典力学成为一个完整的理论体系.<br>\n该书意味着经典力学的成熟,其中所建立的经典力学的理论体系成为了近代科学的标准尺度.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07kesuofeiya: ['female', 'zm4ke', 4, ['zmwendinghuahewu', 'zmbuwendinghuahetai'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性元素.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】不稳定化合态<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★★☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】自<元素周期律>中诞生的幻灵,喜欢边喝伏特加边做实验真的没问题吗？<br>\n<元素周期律>是俄国科学家门捷列夫提出并整理的,他将当时已知的63种元素依相对原子量大小并以表的形式排列,把有相似化学性质的元素放在同一列,制成元素周期律的雏形.世间万物皆由元素构成,元素和元素之间又可以发生反应,反应不断发生,构筑了这个世界,也可以改变这个世界.<br>\n元素周期律最初面世之时,有许多的空白,许多科学家不惜献上生命也要填补这些空白.索菲娅说,这就是化学的魅力.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_11ruaisi: ['male', 'zm4ru', 4, ['zmlingheboyi'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序邪恶.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】零和博弈<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★☆☆☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】由<非合作博弈>所诞生的幻灵,沉迷于名为博弈的游戏却从不关注游戏的胜负,而是欣赏着局中人们的种种选择与反应.他用模型与公式时刻把玩着人心和策略,却似乎又对某些非理性的反应兴趣十足.<br>\n<非合作博弈>是约翰·纳什所著论文,深度剖析了多人博弈中决策的立场与平恒点.<br>\n所谓零和博弈,即结果是一方获利而另一方损失,且一方的所得正是另一方的所失,整个社会的利益并不会因此而增加一分.也可以说:在零和博弈中,自己的幸福是建立在他人的痛苦之上的,二者的大小完全相等,因而双方都想尽一切办法以实现<损人利己>.如果进一步想要达到00的<双赢>局面,那就要负担对方失误或背叛的风险,其中如何计算心理取得平衡点是无数心理学家津津乐道的话题.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_08shajingke: ['male', 'zm4sha', 4, ['zmfengyunjihui', 'zmtuqiongbijian'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】图穷匕见<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★☆☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★☆☆☆☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【特质】性格耿直,抱必死之心面刺秦王的勇士.<br>\n荆轲,卫国人.荆轲好读书击剑,又嗜酒,与好友高渐离尝日日共饮于燕市.秦灭赵后,将至于燕,太子丹恐大祸将临,决定派门客荆轲刺秦救燕.荆轲以泰叛将樊於期之头颅与燕督亢地图进献秦王贏政,图穷匕见,绕柱追刺秦王.可惜终究功亏一篑,荆轲身中八创,慷慨赴死.<br>\n荆轲一生最重莫过于一个<义>字.他一生中最重要的两个人,一个是燕太子丹.他顶着易水河畔的刺骨冷风、冒着秦军铁蹄的滚滚烟尘,抱着必死的决心走进秦国王宫,都只为回报燕太子丹的知遇之恩.另一个是高渐离,在秦王宫的大殿上,看着自己的鲜血流淌满地的那一刻,荆轲最遗憾的,是再也听不见渐离的筑声.<br>\n【评级】<b><font color=Silver>B-</font></b>\n']],
                        zm_11ruaboniya: ['female', 'zm4ru', 4, ['zmjielvzhijian', 'zmminglitanzhi'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】戒律之槛<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】逐火之蛾十三英桀第三位,前文明最强的精神力战士.<br>\n阿波尼亚出身于黄昏街,原本的身份是疗养院护工.早在她成为融合战士,得以用双眼直视命运之前...对于未来,她便已可得到某种模糊而难明的预见.<br>\n可以预见未来的人想要改变未来,这也是理所应当的事情.阿波尼亚看到的不是完整的因果,但却更为可怕——唯独可以看清的东西,无法更改.伴随着严重的事故,阿波尼亚一切试图反抗命运的作为都将自己与旁人卷入更加凄绝难测的境地.<br>\n成为融合战士后,阿波尼亚对于大多数人而言是一个太过可怕的名字.她的力量约束组织内部,不可摆脱.能够印证一个人存在的思想与记忆,在她的手中却偏偏如此易于摆弄,脆弱不堪.她早已了然,自己往日一切试图看护众人的作为,除却为自己招致憎恨之外,徒劳无益.而她却说:<我将俯首告罪,但绝不会止步于前.><br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_08shapaduofeilisi: ['female', 'zm4sha', 4, ['zmchenluanzhuajinshijian', 'zmhaoleizhunbeikailiu'], ['des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性野兽.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性中立善良.png width="57" height="19"> <br>\n【职阶】暗匿者<br>\n【宝具】趁乱,抓紧时间!<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】前文明逐火之蛾十三英桀之一,拥有特殊进货方式的贼猫商人.<br>\n帕朵菲莉丝是自小在黄昏街与猫群生活的流浪者,靠着捡破烂和小偷小摸维持生计.崩坏战争时期,帕朵在一具尸体上捡到了逐火之蛾的身份文件;之后本想借机混进军事组织干一票大买卖的帕朵莫名其妙被安排了融合战士改造手术,成为了极少数存活下来的幸运儿.<br>\n虽然变成了融合战士,但帕朵正面战斗能力确实弱的可怜.与第十二律者的战争结束后,作为世界上仅存的十三个融合战士帕朵也获得了十三英桀的称号,不过跟其中那些战力爆炸的怪物完全无法相比就是了.<br>\n【评级】<b><font color=DarkKhaki>C+</font></b>\n']],
                        zm_07kemeibiwusi: ['female', 'zm4ke', 4, ['zmwuxianmingtu', 'zmshijiezhishe'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性中立邪恶.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】噬界之蛇<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】典型的无下限科学家,每次复活后都会变得幼小.<br>\n第一文明纪元抗崩坏组织逐火之蛾的元老,也是后来被称为<十三英桀>的融合战士之一.虽然梅比乌斯位列逐火之蛾的顶尖战力,但实际上她的建树主要还在科学研究上,在文明末期的许多激进科研项目——包括融合战士项目中梅比乌斯都功勋卓著.<br>\n梅比乌斯作为融合战士的一员,拥有被称为无限的一定程度上死而复生的能力;不过仅仅如此她还不满意,据说其有50多套复活方案,即使是在律者灭世的情况下也有很大的概率存活.事实上随着梅比乌斯本体的蹊跷<自杀>,她那怀有异心的记忆体确实活到了下个文明,且在乐土世界中如蛇般等待时机...<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_05qikaierxi: ['female', 'zm4qi', 4, ['zmbuhuichonggou', 'zmMon3tr'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性野兽.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】不毁重构<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★★★☆☆☆☆☆☆<br>\n【特质】学识渊博,冷静淡漠,疑似活过长久岁月的转生者.<br>\n凯尔希,罗德岛的主要话事人.其在冶金工业、社会学、源石技艺、考古学、历史系谱学、经济学、植物学、地质学等领域皆有造诣且经验丰富.于罗德岛部分行动中作为医务人员提供医学理论协助与应急医疗器械,同时也作为罗德岛战略指挥系统的重要组成人员活跃在各项目中.<br>\n凯尔希擅于研究指挥,但缺乏正面作战能力;相对的,召唤物Mon3tr则补足了这部分短板.这只全长九米的怪物平时隐藏在凯尔希背部的原石结晶内,力量巨大甲壳坚固还可操控,堪称如臂使指的战争兵器.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11ruweijina: ['female', 'zm4ru', 4, ['zmxingyunchaoxi', 'zmyuexiangtiancheng'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】月相天呈<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】月神之女,正为了成为合格的神明努力着.<br>\n薇姬娜自出生起就在月神的教会生活,一无所知的她跟随其他祭司们学习,祈祷,成为了善良高尚的祭月之女.数年后,一场人为的瘟疫与叛乱席卷了薇姬娜的家乡.偶然得知真相的她被追杀,被污蔑,被背叛,最终被她所保护的国民烧死在火刑架上.<br>\n即使这样,薇姬娜也没有堕落,没有失去信仰.作为人的生命结束时,她已获得了作为神存在的资格.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_14lintianyinqi: ['female', 'zm4lin', 4, ['zmshimengzhiyuan', 'zmcanguixingtong'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】残轨星瞳<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★★★★☆☆☆☆<br>\n【特质】冒牌天使,从星空中被生灵的愿望所召唤.<br>\n天音祈,由人类变转之物.她口中的<天使>可是跟普遍意义上的天界生灵大有不同,这种生物沉睡在宇宙深处,是介乎于虚实之间的量子幽灵.只有当<天使>被智慧生命观测时,它们才会因映射获得智慧,为了<清醒>下去,它们需要不断进食观测者的存在信息.<br>\n天音祈曾说,<天使>是一缕恶毒的光.它们拥有颠覆物理法则的生命性质,用许愿者自身实现愿望,无限进食观测到它们的文明直到其中的智慧生命消耗殆尽.天音祈是某个世界人类反抗<天使>最后遗留的残迹,大概也是唯一拥有真正人格的<天使>吧.<br>\n【评级】<b><font color=Gold>A+</font></b>\n']],
                        zm_07kechaersi: ['male', 'zm4ke', 4, ['zmjinhualun', 'zmtianyantulu'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】天演图录<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】由<物种起源>所诞生的幻灵,在科学侧的尊位无可动摇.<br>\n<物种起源>是查尔斯·罗伯特·达尔文的关键著作,也是进化论的起点.该书论证了物种进化演变的现实性与合理性,摧毁了各种唯心的神造论以及物种不变论.除了生物学外,他的理论对人类学、心理学、哲学的发展都有不容忽视的影响.<br>\n明确的,进化论登上历史舞台是为科学压倒神秘的转折点,自此后以万物之理解析世界的唯物思想成为主流,带领人类脚踏实地走向真理.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_02gonggonggong: ['male', 'zm4gong', 4, ['zmhuangushuishi', 'zmfushuigaitian'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性元素.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】弓兵<br>\n【宝具】覆水盖天<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】铸下大错的古神祇,至今仍在保护生灵偿还业力.<br>\n共工是开天后造化的最初的一批神祇,也是执掌元素权柄的精灵.在同代的自然神中,共工脾气暴躁,且与司火的祝融神相性不合;长久的岁月中,两人旧怨日增,难以调和.<br>\n在人族大兴初期,许多自然神受天道感召帮助人族走向繁盛.共工和祝融这对冤家彼时刚好同在黄帝帐下,共事了没多久便大打出手;共工不敌,怒而撞折天柱,给生灵带来无边祸患.之后幸得女娲圣人补天之缺,才消解这场劫难,共工自此也改了暴躁的性子,隐姓埋名默默弥补罪业.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_03qiangyoulandaier: ['female', 'zm4qiang', 4, ['zmxingkaizhuxing', 'zmshiguanxinghuang'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】枪兵<br>\n【宝具】星铠铸形<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★★☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★★☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】认真正直又强大的战士,拥有一个小世界为她提供能量.<br>\n真名琪亚娜·卡斯兰娜,天命现役最强的S级女武神.她的名字在组织中口耳相传,有如神话英雄般响亮.<br>\n某次事件中,幽兰黛尔为了挽救世界解体的命运曾将一个世界泡<反演>进自己的体内,自己则成为了这个世界存在的以太锚点.也正是为了纪念那次事件中逝去的同伴,自此她将名字改为了<比安卡·幽兰黛尔·阿塔吉娜.><br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_01jianmalikasi: ['male', 'zm4jian', 5, ['zmheijianyeshou', 'zmmingdingzhisi'], ['des: 【属性】<img src=extension/综漫季刊肆/属性野兽.png width="34" height="22"><img src=extension/综漫季刊肆/属性高等力量.png width="56" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序中立.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】命定之死<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★★★☆☆☆☆☆☆<br>\n【爆发】★★★★★★★☆☆☆<br>\n【控制】★★☆☆☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】被称为黑剑的野兽,执掌神人们畏惧的死亡.<br>\n在交界地,黄金律法下有望登上神座的神人们都被双指指派了影子野兽作为辅佐.它们既是神的臂助,又是监视控制神的手段.<br>\n玛利喀斯是守护永恒女王玛丽卡的野兽,同时也是玛丽卡的结拜弟弟.决战中,玛利喀斯击败了上个时代的神<宵色眼女王>,并将其执掌的[命定之死]纳入剑中,扫清了新王朝最大的障碍.<br>\n在玛丽卡的时代,死亡的概念被命定之死收纳;交界地的生物生命凋零时灵魂归于黄金树轮回,身体化为树的养料.但在被称为黑刀之夜的事件中,玛利喀斯的命定之死被盗走部分,以此转化的黑刀击杀了神子葛德文与菈妮.那一夜完美循环被破坏,玛丽卡也打碎法环后不知所踪.<br>\n经过漫长努力,玛利喀斯收回了失散的死亡,让命定之死重新完整,然而那黑剑却隐隐要自发行使制裁神的作用——玛利喀斯不敢置信,策划一切的背叛者竟是玛丽卡本身？<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_14linmengge: ['male', 'zm4lin', 4, ['zmxianxuewangchao', 'zmshouxueyishi'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性混沌.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱邪恶.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】授血仪式<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】虚假星空下的鲜血君王,期待着与米凯拉一起开启美妙王朝,而神人却不为所动.<br>\n蒙格是交界地的半神,碎片君王.虽贵为半神,但唯独他与哥哥蒙葛特因觉醒了生命熔炉的特征而被冠以恶兆与诅咒之名,终年生活在王城下水道中.<br>\n传说蒙格曾在地下遭遇了渴望伤口的无形外神<真实之母>,之后祂成为了蒙格的信仰,自此蒙格深爱自己的诅咒血脉.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_01jianmenggete: ['male', 'zm4jian', 4, ['zmshenghuabingren', 'zmrongluezhaog'], ['des: 【属性】<img src=extension/综漫季刊肆/属性类人.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】剑士<br>\n【宝具】圣律兵刃<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】未曾领受荣光,甘愿隐藏身份守卫王城的末代君王.<br>\n蒙葛特,初代艾尔登之王葛弗雷之子,高贵的半神君王——这样的他却因为显现了生命熔炉的血脉而被黄金树厌弃,无法得到赐福且自小被囚禁在王城下水道.当他的兄弟姐妹享受黄金王朝的荣耀时,葛蒙特与弟弟蒙格也只是因为表现良好而被允许卸下囚具,做下水道的看守.<br>\n法环破碎后,各路半神进攻王城;无人可守之时,臣民们从未见过的最后一位半神<赐福王>和<恶兆妖鬼>站了出来,率领骑士们成功守住了王城.没有人把衣衫褴褛,面目狰狞的恶兆妖鬼和伟大的赐福王联系在一起.蒙葛特心知肚明,恶兆之子的自己不配拥有这个王朝的任何事物,但他仍愿意成为黄金树的守卫——不是因为被爱,想要回馈,而是他单纯希望去爱.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_10kuanglataen: ['male', 'zm4kuang', 5, ['zmsuixingyingxiong', 'zmfengyinqunxing'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性巨大.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱善良.png width="57" height="19"> <br>\n【职阶】狂战士<br>\n【宝具】封印群星<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★★★☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】被称为交界地有史以来最强的半神,即使狂乱后也没有伤害他的战马.<br>\n拉塔恩是黄金律法拉达冈与满月女王蕾娜菈之子,在黄金王朝中担任将军一职,勇猛又为人高尚,在交界地颇具名望.拉塔恩自幼便崇拜先祖葛弗雷,立志成为一名强大的战士.青年时,因为异于常人的魁梧体型他的爱马无法与他继续作战,于是拉塔恩前往瑟利亚学习重力魔法.<br>\n多年后,一颗陨石坠落大地,其中诞生的星兽危害一方;重力魔法精深的拉塔恩独身击碎坠星,并以自身为封印将一片星雨禁锢在天外,自此被世人称为<碎星将军>.<br>\n法环破碎后,神子们率领麾下的大军开展惨烈地混战,最终屹立的就是拉塔恩与神人玛莲妮亚.交手处于下风的玛莲妮亚急于寻找哥哥米凯拉,不管不顾地解放了外神猩红腐败对自己的侵蚀,进而导致整个盖利德地区化为腐败地.拉塔恩在爆心地被腐败侵蚀入骨,但仍放任尊腐骑士将玛莲妮亚救走.他在思维被彻底侵蚀前厚葬双方的战士,率领部下修筑包围腐败的长期防线,之后自断双腿独自留在战场,作为一个战士希望得以死得荣誉.<br>\n【评级】<b><font color=Gold>A</font></b>\n']],
                        zm_14linaiboliyeta: ['female', 'zm4lin', 5, ['zmshenkongqishi', 'zmyuanfangdezhaohuan'], ['des: 【属性】<img src=extension/综漫季刊肆/属性野兽.png width="34" height="22"><img src=extension/综漫季刊肆/属性混沌.png width="34" height="22"><img src=extension/综漫季刊肆/属性巨大.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性混乱中立.png width="57" height="19"> <br>\n【职阶】降临者<br>\n【宝具】远方的召唤<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★★★☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】被称为宇宙之女的星界生命,因无法回归星空而呦哭.<br>\n在拜尔金沃斯研究的后期,一部分学者震惊于上位者之血那不可思议的功效,转而抛弃<眼>对血进行研究,这便是治愈教会的开端.随着治愈教会势大,科斯遗骸已经不足以满足他们晋升的需求,于是教会高层圣歌团大胆地通过苏美鲁遗物召唤出了新的上位者——埃波利耶塔.<br>\n经过与埃波利耶塔沟通,圣歌团成员获得了前所未有的智慧并初涉星空的奥术;且通过接受埃波利耶塔的血液,他们可以将人类转化为新的生命形态,即<天庭使者>.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_07keyagebubonuli: ['male', 'zm4ke', 4, ['zmcaiduoshu', 'zmyichanghaodu'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序中立.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】一场豪赌<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】瑞士数学家,概率论先驱.<br>\n雅各布·伯努利是数学世家伯努利辉煌的开端,其在数学上的贡献涉及微积分、微分方程、无穷级数求和、解析几何、概率论以及变分法等领域.知名著作有<推测的艺术>与<猜度术>等,对概率论进行了数理与哲学上的剖析.<br>\n概率论登上数学舞台后,由于雅各布在<猜度术>中对<论赌博中的计算>进行了展开分析,最先对其追捧的不是数学界而是赌博领域——对概率数学期望的应用很快成为了赌徒的必备技能.而在更久的未来,连雅各布自己也从未敢设想过的是,于决定论崩塌的微观世界中<概率>这一概念恰恰是世界运转的重要基石.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11rubaize: ['male', 'zm4ru', 5, ['zmtongdawanwu', 'zmfengxionghuaji'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性野兽.png width="34" height="22"><img src=extension/综漫季刊肆/属性神性.png width="34" height="22"><img src=extension/综漫季刊肆/属性肃正.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】逢凶化吉<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★★☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★★★☆☆☆☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【特质】上古神兽,活过悠久岁月的和平主义者.<br>\n白泽跟脚不详,于远古时崭露头角,在妖庭日益残暴时全身而退,故能保全自身.上古人族崛起时白泽曾与黄帝相会,展露其<达万物之精,晓万物状貌>的神通与博学,与黄帝探讨避除灾害,贤明治世之道.<br>\n临别时,白泽绘天下一万一千五百二十妖魔精怪之图录赠予黄帝,史称<白泽图>,之后白泽便作为祥瑞神兽传颂后世.不类于其它销声匿迹的远古神魔,白泽的传说在各个时代流传,经久不衰.<br>\n【评级】<b><font color=Gold>A-</font></b>\n']],
                        zm_07keqishi: ['female', 'zm4ke', 5, ['zmjixiexianzhe', 'zmyaoxingzhizuo'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】械师<br>\n【宝具】遥星之座<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★★☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★☆☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★★★☆☆☆<br>\n【辅助】★★☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】跳脱的谜之构造体,很难让人相信她就是第一个觉醒了自我的机械体,传说中的<机械先哲>.<br>\n<幼时>的七实生活在一个幸福美满的四口之家中.在<十八岁>那年,帕弥什病毒爆发了.某天在家中避灾时,七实突然发现父母不见踪影,于是出门寻找.途中七实与感染体发生了搏斗,无意间,她发现自己身上的伤口中出露出了机械结构.此时周围的人们都开始下意识地远离她,赶来的父母阻止了警察射杀七实,但也对她做了最后道别.<br>\n知晓自己机器人身份的七实开始了漫长的流浪,在废土中结识机械朋友,为了适应乱世对自己进行改造升级.<br>\n数年后,名为机械教会的由觉醒机械们组成的强大势力出现在大陆上.虽然高层很希望七实能亲自去领导他们,但我行我素的七实依然仗着强大武力在废土上乱跑.同胞们不清楚的是,解放算力的七实已经可以推演到谁也未曾预见的未来...所以她的工作没有人能替代.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_09hulifu: ['female', 'zm4hu', 5, ['zmxundaoxuanshi', 'zmqielanzhihai'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"><img src=extension/综漫季刊肆/属性机械.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】守卫者<br>\n【宝具】伽蓝之海<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★☆☆☆☆☆☆☆☆☆<br>\n【控制】★★★★★☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★☆☆☆☆☆☆<br>\n【辅助】★★★★★★☆☆☆☆<br>\n【治疗】★★★☆☆☆☆☆☆☆<br>\n【特质】灰鸦小队队员,出身自生命之星医疗共同体,机体为[极昼].<br>\n丽芙成长于富裕的贵族家庭,帕弥什战争期间她却不顾家人劝阻毅然参军.在一次战斗中,丽芙尽全力挽救了阵地上的其余35名士兵却导致自己衰竭濒死;因已无法进行救治,丽芙接受了构造体化改造,自此告别人类身份.<br>\n[极昼]是科学理事会研发出的S级特化型机体,具有如虫洞般吸纳<净化>帕弥什病毒的能力——同时也是一种自灭行为,在物理与精神层面都会对自身造成巨大创伤.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                        zm_05qiluolunzuo: ['male', 'zm4qi', 4, ['zmjunzhulun', 'zmweijiashangxia'], ['zhu', 'des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序中立.png width="57" height="19"> <br>\n【职阶】骑兵<br>\n【宝具】王权之下<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★☆☆☆☆☆☆☆<br>\n【控制】★★★☆☆☆☆☆☆☆<br>\n【生存】★★★★★☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★★☆☆☆☆☆<br>\n【治疗】★★★★★☆☆☆☆☆<br>\n【特质】自<君主论>中诞生的幻灵,拥有优秀政治家所该有的一切能力与特质.<br>\n<君主论>是尼可罗·马基亚维利创作的政治学著作,其中较为完整地阐述了作者的君主专制理论和君王权术论,辛辣地剖析了种种政治手段的本质.该书从西方到东方,在政界、宗教界、学术等领域引起巨大的反响,被西方评论界列为和<圣经>、<资本论>等相提并论的影响人类历史的十部著作之一,也是许多历史上风云人物的伴身读物.<br>\n<君主自身不必成为全才,只需通晓用人之道,能在合适的时机、向合适的场所派遣合适的臣下即可>——<君主必须有一种精神准备,随时顺应命运的风向和事物的变幻情况而变……如果可能的话,他还是不要背离善良之道,但若是必须,他就得懂得怎样走上为非作恶之途.><br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11rugulunwenhua: ['female', 'zm4ru', 4, ['zmqieyinjieyi', 'zmwenhaiyudian'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】文海御殿<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★★☆☆☆☆☆☆<br>\n【成长】★★★★★★☆☆☆☆<br>\n【辅助】★☆☆☆☆☆☆☆☆☆<br>\n【治疗】★☆☆☆☆☆☆☆☆☆<br>\n【特质】自<康熙字典>中诞生的幻灵,受赐固伦之名的古代公主.<br>\n<上古结绳而治,后世圣人易之以书契.百官以治,万民以察.……盖以其为万事百物之统纪,而足以助教政教也.><br>\n<康熙字典>是历史上第一本以字典为名的辞书,也可以说是字典概念的起源,确立了字典切音解意,引经据典,知根溯源的基本方略.由这样的概念所凝聚的文华拥有从[字]本身中引出力量,获得对应的强化的能力;同时亦能将字义反转以压制敌人,使其遭受对应的弱化.<br>\n【评级】<b><font color=Silver>B+</font></b>\n']],
                        zm_11ruxinhua: ['female', 'zm4ru', 4, ['zmchaquebulou', 'zmyaowenjiaozi'], ['des: 【属性】<img src=extension/综漫季刊肆/属性人形.png width="34" height="22"> <br>\n【阵营】<img src=extension/综漫季刊肆/属性守序善良.png width="57" height="19"> <br>\n【职阶】裁定者<br>\n【宝具】咬文嚼字<br>\n<br><font color=DarkGray>—————【能力数据】—————</font><br><br>\n【破坏】★☆☆☆☆☆☆☆☆☆<br>\n【爆发】★★★★★☆☆☆☆☆<br>\n【控制】★★★★☆☆☆☆☆☆<br>\n【生存】★★★☆☆☆☆☆☆☆<br>\n【成长】★★★★★☆☆☆☆☆<br>\n【辅助】★★★★☆☆☆☆☆☆<br>\n【治疗】★★☆☆☆☆☆☆☆☆<br>\n【特质】由<新华字典>所诞生的幻灵,虽然还很幼小但潜力巨大.<br>\n在那个百废待兴的时代,新世界的建立者们将这部<新华字典>编纂,视为新的文化事业的重要组成部分.它要肩负规范现代汉语的职责,是汇聚中华文化的结晶.<br>\n字典里,可以看到那时候,人们就是这样说话、写文章.字典就勾勒着一个时代,也继承了以往的各个时代.字典虽小乾坤大,甘苦几多心自知.<br>\n【评级】<b><font color=Silver>B</font></b>\n']],
                    },
                    translate: {
                        zm_07keaiertenamu: '艾尔特纳姆',
                        zm_08shazhufu: '朱富',
                        zm_14linrishi: '日蚀',
                        zm_09husuirenshi: '燧人氏',
                        zm_14linzhoubai: '周白',
                        zm_11rugulunwenhua: '固伦文华',
                        zm_11ruxinhua: '欣华',
                        zm_07keyinuosha: '伊诺莎',
                        zm_07kesuofeiya: '索菲娅',
                        zm_11ruaisi: '艾斯',
                        zm_05qiluolunzuo: '洛伦佐',
                        zm_08shajingke: '荆轲',
                        zm_11ruaboniya: '阿波尼亚',
                        zm_07kemeibiwusi: '梅比乌斯',
                        zm_08shapaduofeilisi: '帕朵菲莉丝',
                        zm_05qikaierxi: '凯尔希',
                        zm_14lintianyinqi: '天音祈',
                        zm_11ruweijina: '薇姬娜',
                        zm_03qiangyoulandaier: '幽兰黛尔',
                        zm_02gonggonggong: '共工',
                        zm_07kechaersi: '查尔斯',
                        zm_09hulifu: '丽芙',
                        zm_07keqishi: '七实',
                        zm_11rubaize: '白泽',
                        zm_07keyagebubonuli: '雅各布伯努利',
                        zm_14linmengge: '蒙格',
                        zm_10kuanglataen: '拉塔恩',
                        zm_14linaiboliyeta: '埃波利耶塔',
                        zm_01jianmalikasi: '玛利喀斯',
                        zm_01jianmenggete: '蒙葛特',
                        zmfengyinqunxing: '封印群星',
                        zmfengyinqunxing_info: '出牌阶段限一次<br>你可消耗50点能量指定任意名其他角色并令他们随机弃置1张牌.<li>当你从正面翻至背面时,以此法指定过的角色需进行判定,若判定结果为♠️️则其翻面.<li>当以此法选择的角色从背面翻至正面时,若你为背面则你进行判定,若判定结果为♠️️则你翻面.',
                        zmsuixingyingxiong: '碎星英雄',
                        zmsuixingyingxiong_info: '<li>当你对其他角色造成伤害时,你可交给其至少1张牌直到其手牌数大于你,之后该伤害+1.<li>当有角色受到伤害时,若你未翻面且非伤害来源,则你可令伤害来源交给你至少1张牌直到其手牌数小于你,之后你翻面且该伤害-1.',
                        zmshenkongqishi: '深空启示',
                        zmshenkongqishi_info: '当有角色获得至少2张牌后,若这些牌均为同一颜色且其手牌数与你相同,则你可令一名角色从牌堆中获得1张名称与其手牌均不相同的牌.',
                        zmyuanfangdezhaohuan: '远方的召唤',
                        zmyuanfangdezhaohuan_info: '出牌阶段限一次 <br>你可消耗20点能量展示任意张同名牌并指定至多等量的其他角色;<br>以此法指定的角色若持有展示牌的同名牌,则其须弃置包含同名牌在内的与展示牌数量等量的牌.',
                        zmyichanghaodu: '一场豪赌',
                        zmyichanghaodu_info: '出牌阶段限一次 <br> 你可与一名其他角色各摸3张牌,之后由你开始轮流弃置0~2张手牌;<br>&nbsp当一方未能弃置比对方点数更大的牌时,对方获胜.<br>&nbsp当有一方获胜两次后,赌局结束.<li>最终赢家收回本次以此法弃置的牌,之后可对输家立即使用1张牌.<li>输家弃置本次以此法摸到的牌,且本回合无法使用或打出牌.',
                        zmcaiduoshu: '猜度术',
                        zmcaiduoshu_info: '当有角色进行摸牌前,你可消耗5点能量查看牌堆顶的1张牌并可弃置该牌.',
                        zmfengxionghuaji: '逢凶化吉',
                        zmfengxionghuaji_info: '当有角色被带有伤害标签的牌指定为唯一目标时,若你非此牌来源则你可消耗20点能量进行判定:<li>若判定牌点数大于此牌,则此牌效果变为【桃】,否则你成为此牌目标.<li>若判定牌类型与此牌相同,则你视为对此牌来源使用了1张同花色的同名牌.',
                        zmtongdawanwu: '通达万物',
                        zmtongdawanwu_info: '你实时记录场上角色各自最新使用的牌;<li>你的基本牌或锦囊牌可当做同类型的记录牌使用.<li>当你以与记录牌同花色的牌指定对应角色为目标时,其不可响应该牌.',
                        zmqielanzhihai: '伽蓝之海',
                        zmqielanzhihai_info: '当有角色进入濒死状态时,你可消耗40点能量令其将体力值回复至1;<li>若如此做,此技能生效至场上再次有角色进入濒死状态为止,生效期间你无法触发此技能.<li>效果结束时你清空能量,并根据生效期间场上角色累计受到的伤害可令当时进入濒死状态的角色回复等量的体力,否则你回复1点体力.',
                        zmxundaoxuanshi: '殉道宣誓',
                        zmxundaoxuanshi_info: '<li>当有角色受到伤害时,若你不为伤害来源则你可对自己造成1点伤害并取消该伤害.<li>当你受到伤害后,你选择令当前进行回合的角色:<br>&nbsp①交给你1张牌.<br>&nbsp②结束当前阶段.',
                        zmyaoxingzhizuo: '遥星之座',
                        zmyaoxingzhizuo_info: '当其他角色使用【杀】指定你攻击范围的角色时,你可消耗20点能量与其猜拳2次;<li>每次猜拳结果产生时,赢家视为对输家使用1张【过河拆桥】.<li>猜拳过程中若平局,则此杀目标中手牌数小于体力上限的角色摸1张牌.<li>效果结束时若你为最终赢家,则你清空能量令此杀伤害基数+1且目标改为此杀来源.',
                        zmjixiexianzhe: '机械先哲',
                        zmjixiexianzhe_info: '出牌阶段限一次<br>你可查看一名角色的手牌并重铸其中1张牌;<br>&nbsp若如此做,本回合你使用与该牌花色相同的牌后,该角色摸1张牌.',
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
                        zmshenghuabingren: '圣律兵刃',
                        zmshenghuabingren_info: '出牌阶段限一次 <br>你可选择一名其他角色视为其对你使用了1张【决斗】;<br>&nbsp若你因此法受到了伤害,则你跳过下个弃牌阶段.',
                        zmrongluezhaog: '熔炉恶兆',
                        zmrongluezhaog_info: '当你受到其他角色造成的伤害后,你可消耗30点能量展示牌堆顶相当于你体力上限数量的牌并获得其中的基本牌;<br>你每因此法获得1张牌,伤害来源需弃置1张牌.',
                        zmmingdingzhisi: '命定之死',
                        zmmingdingzhisi_info: '出牌阶段开始时 你可消耗50点能量从牌堆获得2张黑色牌,之后本回合你每使用1张牌,造成伤害时可令伤害量等于目标体力上限10%的数量并向上取整.',
                        zmheijianyeshou: '黑剑野兽',
                        zmheijianyeshou_info: '结束阶段 根据你本回合所使用的牌之花色总数你可弃置等量的牌;<br>若如此做,则根据你本回合使用牌之总数你摸等量的牌,且之后可立即使用至多等量的牌.',
                        zmshouxueyishi: '授血仪式',
                        zmshouxueyishi_info: '<li>当你使用或打出红色基本牌/普通锦囊牌时,你可将之置于一名角色的武将牌上;每名角色至多以此法放置3张牌.<li>出牌阶段限一次 <br>若有角色因此法放置了3张牌,则你可令场上所有角色各自移除因此法放置的牌且须弃置等量的红色牌,若不足则流失1点体力.',
                        zmxianxuewangchao: '鲜血王朝',
                        zmxianxuewangchao_info: '若你因摸牌阶段获得的牌中没有红色牌,则你可消耗25点能量摸2张牌或回复1点体力.',
                        zmxingkaizhuxing: '星锚铸形',
                        zmxingkaizhuxing_info: '回合开始时,若以此法记录的牌不足4张,则你可选择牌名未被记录的手牌进行记录.<li>出牌阶段开始时,你可选择消耗25点能量将你的手牌替换为以此法记录的牌,或不消耗能量将1张符合规则的手牌添加/替换进记录的牌库.',
                        zmshiguanxinghuang: '矢贯星煌',
                        zmshiguanxinghuang_info: '锁定技<br>当你使用【杀】指定目标时,若你区域内的牌:<li>包含所有颜色;<li>包含所有花色;<br>&nbsp满足1项则此杀无视防具,满足2项则此杀伤害基数+1.',
                        zmfushuigaitian: '浪涌荒流',
                        zmfushuigaitian_info: '当有普通锦囊牌被使用后,若你未放置对应花色的牌则你将该牌置于武将牌上.<li>出牌阶段结束时,若你因此法放置的牌未集齐所有花色,则需以你区域内的牌补足,否则将移除这些牌.<li>当有角色受到伤害时,若你以此法放置了所有花色的牌,则你可移除这些牌令伤害量+1/-1.',
                        zmhuangushuishi: '荒古水师',
                        zmhuangushuishi_info: '出牌阶段限一次<br>你可用一半手牌交换其他角色的一半手牌<b><font color=DarkGray>(均向上取整)</font></b><br>&nbsp若如此做时你的能量达到25点,则你清空能量,此次交换时查看目标的手牌且多获得1张牌.',
                        zmjinhualun: '进化论',
                        zmjinhualun_info: '<li>你的体力上限,手牌上限恒定为体力值+1.<li>当你的体力值变化后,你随机获得1个锁定技直到下轮开始.',
                        zmtianyantulu: '天演图录',
                        zmtianyantulu_info: '出牌阶段 <br>你可消耗10点能量令一名角色选择以下1项关键词:<li>伤害;<li>回复;<li>距离;<li>判定;<li>弃置;<br>&nbsp若如此做,该角色从全卡包中随机获得1张描述带有对应关键词的牌,且以此法获得的牌将在进入弃牌堆后销毁.',
                        zmshimengzhiyuan: '蚀梦之愿',
                        zmshimengzhiyuan_info: '每回合限一次<br>其他角色的体力值向上/向下变化时,其可向你请求由你获得其1点体力/2张牌后其摸2张牌/回复1点体力.',
                        zmcanguixingtong: '残轨星瞳',
                        zmcanguixingtong_info: '出牌阶段开始时 你可消耗至少60点能量选择:<li>之后2次发动【蚀梦之愿】时收益翻倍.<li>与至多2名其他角色强制进行1次【蚀梦之愿】,且代价翻倍.<br>&nbsp若以此法进行交易的角色无法支付全部代价,则其额外流失1点体力.',
                        zmxingyunchaoxi: '星云潮汐',
                        zmxingyunchaoxi_info: '锁定技 <li>当你的体力值大于体力上限的一半时,若牌堆中有黑色牌则你只能摸到黑色牌.<li>当你的体力值不大于体力上限的一半时,若牌堆中有红色牌则你只能摸到红色牌.',
                        zmyuexiangtiancheng: '月相天呈',
                        zmyuexiangtiancheng_info: '当你的体力值以体力上限的一半为界变化后:<br>&nbsp①由多变少,则你可消耗30点能量选择至多相当于你体力上限数量的角色令他们弃置相当于你体力值数量的牌.<br>&nbsp②由少变多,则你可消耗30点能量选择至多相当于你体力上限数量的角色令他们摸相当于你体力值数量的牌.',
                        zmwuxianmingtu: '无限命途',
                        zmwuxianmingtu_info: '当你使用本回合未以此法使用过的基本/普通锦囊牌时,可将1张手牌替代此牌使用,原效果不变.<br>&nbsp任意角色回合结束时,若本回合你以此法使用了至少2张牌,则你可收回1张以此法使用的牌.',
                        zmshijiezhishe: '噬界之蛇',
                        zmshijiezhishe_info: '出牌阶段开始时 你可消耗至少50点能量激活此技能2轮;<li>此技能生效期间,你使用【无限命途】时取消牌名限制.<li>此技能生效期间,你的摸牌行为均改为查看并获得其他角色等量的手牌.',
                        zmchenluanzhuajinshijian: '趁乱,抓紧时间!',
                        zmchenluanzhuajinshijian_info: '出牌阶段 <br>你可消耗10点能量记录1个牌名至你下回合开始,且仅自己可见;<br>&nbsp若如此做,当其他角色摸到与记录名称相同的牌时你可将对应牌交给一名角色并清除所有记录.',
                        zmhaoleizhunbeikailiu: '好嘞,准备开溜!',
                        zmhaoleizhunbeikailiu_info: '当你使用或打出【闪】时,本回合你不能被带有伤害标签的牌指定为目标.<br>&nbsp若此时你以【趁乱,抓紧时间!】记录了牌名,则你可查看一名其他角色区域内的牌;若其中有与记录对应的牌则你可获得1张对应牌.',
                        zmbuhuichonggou: '不毁重构',
                        zmbuhuichonggou_info: '出牌阶段限一次 <br>你可用1张牌交换牌堆顶3张牌中的1张牌.<li>当有角色进入濒死状态时,若此技能未失效则你可令此技能失效3轮并使该角色回复1点体力.',
                        zmMon3tr: 'Mon3tr',
                        zmMon3tr_info: '当其他角色对你使用基本牌时,你可消耗25点能量执行以下一项:<br>&nbsp①令此牌对你无效.<br>&nbsp②从牌堆中获得1张同名牌.<br>&nbsp③视为对该角色使用1张同名牌.',
                        zmbuhuichonggou2: '重构',
                        zmbuhuichonggou2_info: '',
                        zmjielvzhijian: '戒律之槛',
                        zmjielvzhijian_info: '出牌阶段限一次<br>你可与一名其他角色猜拳,胜利者选择以下一项效果获得,对方获得另1项:<br>&nbsp①于回合内不能使用或打出牌.<br>&nbsp②于回合内使用牌无次数限制.<br>&nbsp获得的效果生效至双方各自的回合结束.',
                        zmminglitanzhi: '命理探知',
                        zmminglitanzhi_info: '当你摸牌后,你可消耗15点能量重铸摸到的牌.<li>此技能每累计发动3次则你可选择任意名其他角色:手牌数大于你的须弃置1张手牌,反之则受到1点伤害.',
                        zmfengyunjihui: '风云济汇',
                        zmfengyunjihui_info: '出牌阶段限一次 <br>你可指定一名其他角色并废除1个装备栏;<br>&nbsp若如此做,该角色须交给你1张牌,之后其可选择摸1张牌或回复1点体力.',
                        zmtuqiongbijian: '图穷匕见',
                        zmtuqiongbijian_info: '<li>若你未废除全部装备栏,结束阶段你可消耗15点能量令你直到下个回合开始前视为装备了【八卦阵】,反之则可消耗15点能量获得1张【决斗】.<li>当你废除了全部装备栏并对其他角色造成伤害时,该角色每有1个区域内的牌数大于你,你可令该伤害+1.',
                        zmjunzhulun: '君主论',
                        zmjunzhulun_info: '当你攻击范围内的角色弃置红色牌时,若你的手牌数大于其弃牌数,则你可将这些牌分配给除其以外的角色.',
                        zmweijiashangxia: '王权之下',
                        zmweijiashangxia_info: '出牌阶段限一次 <br>你可以令一名区域内有牌的角色回复1点体力后弃置其区域内2张牌.<br>&nbsp若发动此技能时你的能量达到40点,则你清空能量令该效果反转.',
                        zmlingheboyi: '零和博弈',
                        zmlingheboyi_info: '出牌阶段限一次 <br>你可以消耗15点能量指定2名角色令他们各自选择以下1项效果并同时执行:<br>&nbsp①自己翻面.<br>&nbsp②令对方翻面.<br>&nbsp③沉默.<br>&nbsp若2人选择的选项相同,则重新选择;若选择次数超过3次则终止结算,双方均调整为翻面状态.<li>当你指定自己为目标时,你摸1张牌.',
                        zmchaquebulou: '查缺补漏',
                        zmchaquebulou_info: '其他角色的回合开始时 你可依次选择将该角色手牌中缺少的花色之手牌各1张交给该角色;<br>&nbsp若如此做后该角色手牌中包含了所有花色,则你摸2张牌.',
                        zmyaowenjiaozi: '咬文嚼字',
                        zmyaowenjiaozi_info: '在你的回合内,当其他角色使用牌时你可弃置1张颜色不同的手牌取消之;<br>&nbsp若如此做,你可再弃置1张与该牌颜色不同的手牌或消耗30点能量视为对该角色使用了1张【杀】.',
                        zmwanyouyinli: '万有引力',
                        zmwanyouyinli_info: '每轮限一次 <br>当有角色的牌因弃置进入弃牌堆时,你可展示1张手牌后获得其中任意张点数不大于该牌的牌.',
                        zmxiazhuidezhenli: '下坠的真理',
                        zmxiazhuidezhenli_info: '当你使用带有伤害标签的牌指定其他角色为目标时,你可消耗35点能量随机展示该角色的1张牌:<li>若展示牌点数不大于该牌,则其弃置展示牌并重复此流程.<li>若该牌目标因此法弃置了所有牌,则该牌对其造成的伤害+1.',
                        zmbuwendinghuahetai: '不稳定化合态',
                        zmbuwendinghuahetai_info: '出牌阶段限一次 <br>你可将1张手牌交给一名其他角色;<br>&nbsp若如此做后该角色区域内2种颜色的牌之数量不同,则其随机弃置1张牌并重复此流程直到其区域内2种颜色的牌数量相同或只余1种颜色的牌.<li>当你的能量达到40点时,你清空能量令此效果改为随机弃置2张牌,且每次弃置牌该角色受到1点无来源的伤害.',
                        zmwendinghuahewu: '稳定化合物',
                        zmwendinghuahewu_info: '转换技<br>每回合限一次,当有角色弃置/被其他角色获得牌前,若其区域内2种颜色的牌之数量相同,则你可取消之.',
                        zmwenhaiyudian: '文海御殿',
                        zmwenhaiyudian_info: '出牌阶段开始时,你可消耗30点能量与一名其他角色获得以下效果直到各自的回合结束,且每项限触发一次:<br>&nbsp①当你使用基本牌时,你从牌堆随机获得1张锦囊牌.<br>&nbsp②当你使用锦囊牌时,你从牌堆随机获得1张装备牌.<br>&nbsp③当你使用装备牌时,你从牌堆随机获得1张基本牌.<li>当以此法指定的其他角色执行该效果时,内容中获得牌改为弃置其区域内的牌.',
                        zmqieyinjieyi: '切音解意',
                        zmqieyinjieyi_info: '出牌阶段限一次<br>你可以选择1张手牌并令一名其他角色猜测颜色:<li>若该角色猜测的颜色与此牌不符,则你将此牌当作【杀】对其使用,反之该角色获得此牌.<li>若你选择的角色上一次猜测时结果错误,则该效果改为猜测花色.',
                        zmtianrenjiuzai: '天人九灾',
                        zmtianrenjiuzai_info: '出牌阶段开始前 你消耗相当于此技能发动次数*5的能量解锁1个附属技能并回复1点体力.<br>&nbsp所有附属技能发动概率为已解锁总数*5%.',
                        zmlanzai: '懒灾',
                        zmlanzai_info: '出牌阶段结束时,若你本回合未使用基本牌则你直到下个回合开始前受到的伤害有概率-1.',
                        zmqiongzai: '穷灾',
                        zmqiongzai_info: '回合结束时,若你的手牌数不大于场上角色手牌数之平均数,则手牌最多的其他角色有概率交给你1张手牌.',
                        zmyuzai: '愚灾',
                        zmyuzai_info: '当你使用锦囊牌时,其他角色有概率无法响应此牌,之后本轮内所有附属技能发动概率翻倍.',
                        zmshuaizai: '衰灾',
                        zmshuaizai_info: '当你攻击范围内的其他角色获得牌后,你有概率可选择随机获得该角色1张手牌.',
                        zmnuzai: '怒灾',
                        zmnuzai_info: '当你/其他角色使用牌响应了其他角色/你后,你有概率随机获得对方1张手牌.',
                        zmkuangzai: '狂灾',
                        zmkuangzai_info: '你于回合内使用【杀】时有概率令此杀不计入出杀次数且伤害+1.',
                        zmchouzai: '丑灾',
                        zmchouzai_info: '当你一轮内复数次被其他角色使用带有伤害标签的牌指定为目标时,该牌有概率对你失效.',
                        zmtanzai: '贪灾',
                        zmtanzai_info: '当其他角色获得或弃置你的牌时,有概率失效.',
                        zmfengzai: '疯灾',
                        zmfengzai_info: '当你将因其它附属技能获得其他角色的牌时,你有概率可选择令对应效果改为使该角色进入混乱状态直到其回合结束.',
                        zmxinhuoxiangcheng0: '薪火',
                        zmxinhuoxiangcheng0_info: '',
                        zmxinhuoxiangcheng: '薪火相承',
                        zmxinhuoxiangcheng_info: '当你获得♦️️牌后,你展示之并摸1张牌;<br>&nbsp你每累计发动此技能3次,则可令一名未持有此技能的其他角色获得此技能,且效果改为累计发动此技能3次后移除此技能.<li>场上持有此技能的角色可使用或打出彼此的手牌.',
                        zmxinhuoxiangcheng2: '薪火相承',
                        zmxinhuoxiangcheng2_info: '当你获得♦️️牌后你展示之并摸1张牌,累计发动3次后移除此技能.<li>场上持有此技能的角色可使用或打出彼此的手牌.',
                        zmxinhuoyongran: '薪火永燃',
                        zmxinhuoyongran_info: '当有角色受到伤害后,你可消耗20点能量进行判定:<li>若判定牌为红色,该角色回复1点体力;<li>若判定牌为♦️️,则你获得判定牌.<li>若判定后该角色体力值小于受到伤害前的数值,则你重复此流程且每重复1次能量消耗-5.',
                        zmheitianzhiyan: '黑天之眼',
                        zmheitianzhiyan_info: '出牌阶段 <br>你可消耗10点能量并弃置1张红色牌后指定1/2名其他角色:<li>若如此做,以此法指定的角色须将2/1张红色牌置于武将牌上.<li>当你造成或受到伤害后,你可使用1张场上以此法放置的牌.',
                        zmjiguangjingtu: '寂光净土',
                        zmjiguangjingtu_info: '锁定技 <br>摸牌阶段开始时,若所有角色区域内的黑色牌总数大于红色牌总数,则你摸牌数+1;<br>&nbsp若红色牌总数为0,则你回复1点体力.',
                        zmxiaomianhu: '笑面虎',
                        zmxiaomianhu_info: '当其他角色使用锦囊牌指定你为目标时,你可展示手牌并令该角色摸1张牌使此牌对你无效.',
                        zmlangdangjiuguan: '啷当酒馆',
                        zmlangdangjiuguan_info: '出牌阶段限一次<br>你可消耗20点能量指定一名其他角色并创造2张【酒】,之后你们分别获得其中1张.<li>你每次以此法创造的2张【酒】中有1张首次被使用时效果改为令使用者流失1点体力,且使用者若处于其出牌阶段则结束该阶段.<li>效果改变的【酒】对你正常结算,对其他角色生效时你可重铸1张牌令该酒正常结算.',
                        zmyitailianshu: '以太链束',
                        zmyitailianshu_info: '当你对其他角色造成伤害时,你可令其之后使用的相当于该伤害量的牌将指向错误的目标.',
                        zmsanjianheermosijiaotu: '三尖赫尔墨斯焦土',
                        zmsanjianheermosijiaotu_info: '当你受到其他角色造成的伤害时,你可消耗至少60点能量令其受到你们双方之距离数量的无来源伤害;<br>&nbsp若如此做,其之后使用的x张牌将指向错误的目标<b><font color=DarkGray>(x为你与该角色之距离加本次你受到的伤害数)</font></b>',
                        zmxinhuoxiangcheng00: '薪火',
                        zmxinhuoxiangcheng00_info: '',
                    },
                    skill: {
                        zmyitailianshu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                return event.player != player && event.num > 0;
                            },
                            content() {
                                'step 0';
                                if (!trigger.player.hasSkill('zmyitailianshu_1')) {
                                    trigger.player.addSkill('zmyitailianshu_1');
                                }
                                ('step 1');
                                trigger.player.storage.zmyitailianshu_1 += trigger.num;
                            },
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyitailianshu_1 = 0;
                                    },
                                    mark: true,
                                    marktext: '乱',
                                    intro: {
                                        content: '之后使用的#张牌将指向错误的目标.',
                                    },
                                    audio: 'ext:综漫季刊肆/audio:4',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return (
                                            player.storage.zmyitailianshu_1 >= 1 &&
                                            event.targets &&
                                            event.targets.length == 1 &&
                                            game.hasPlayer(function (current) {
                                                return current != event.targets[0] && lib.filter.targetEnabled2(event.card, player, current);
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.zmyitailianshu_1 -= 1;
                                        ('step 1');
                                        if (player.storage.zmyitailianshu_1 < 1) {
                                            player.removeSkill('zmyitailianshu_1');
                                        }
                                        var list = game.filterPlayer(function (current) {
                                            return current != trigger.targets[0] && lib.filter.targetEnabled2(trigger.card, player, current);
                                        });
                                        if (list.length) {
                                            var target = list.randomGet();
                                            trigger.targets[0] = target;
                                            player.line(target, 'green');
                                        }
                                    },
                                },
                            },
                        },
                        zmsanjianheermosijiaotu: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) < 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 60) return false;
                                return event.source != undefined && event.source != player;
                            },
                            logTarget: 'source',
                            content() {
                                player.storage.zmt_np = 0;
                                game.mp424('zmziyuan');
                                var tar1 = player;
                                var tar2 = trigger.source;
                                var num = tar1.distanceTo(tar2);
                                trigger.source.damage(num, 'nosource');
                                if (!trigger.source.hasSkill('zmyitailianshu_1')) trigger.source.addSkill('zmyitailianshu_1');
                                trigger.source.storage.zmyitailianshu_1 += num + trigger.num;
                            },
                        },
                        zmxiaomianhu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            _priority: 20,
                            check(event, player) {
                                if ((event.card.name == 'wanjian' && player.countCards('h', { name: 'shan' }) >= 3) || (event.card.name == 'namman' && player.countCards('h', { name: 'sha' }) >= 2) || (event.card.name == 'juedou' && player.countCards('h', { name: 'sha' }) >= 2)) return false;
                                var card = event.card;
                                var effect = get.effect(player, card, event.player, player);
                                if (get.tag(card, 'damage')) {
                                    if (player.hp <= 4 && effect < 0) {
                                        return true;
                                    }
                                    if (event.baseDamage && effect < 0) {
                                        if (event.baseDamage >= player.hp) {
                                            return true;
                                        }
                                    }
                                }
                                if (effect >= 0) {
                                    return false;
                                }
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return get.type(event.card) == 'delay' || get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player);
                                if (player.countCards('h')) {
                                    player.showHandcards();
                                }
                                trigger.player.draw();
                                ('step 1');
                                trigger.cancel();
                            },
                        },
                        zmlangdangjiuguan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return true;
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmlangdangjiuguan = [];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 20;
                                var list = ['jiu'];
                                event.card1 = game.createCard(list.randomGet());
                                event.card2 = game.createCard(list.randomGet());
                                ('step 1');
                                var t = Math.random();
                                if (t <= 0.5) {
                                    player.storage.zmlangdangjiuguan.push(event.card1);
                                    player.markSkill('zmlangdangjiuguan');
                                    target.gain(event.card1, 'gain2');
                                    player.gain(event.card2, 'gain2');
                                } else {
                                    player.storage.zmlangdangjiuguan.push(event.card1);
                                    player.markSkill('zmlangdangjiuguan');
                                    target.gain(event.card2, 'gain2');
                                    player.gain(event.card1, 'gain2');
                                }
                                ('step 2');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0 && target.hp <= 1 && player.countCards('he') >= 1) return 2;
                                        return -1;
                                    },
                                },
                                threaten: 1,
                            },
                            group: ['zmlangdangjiuguan_1', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.card.name != 'jiu') return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmlangdangjiuguan.includes(i)) return true;
                                            }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmlangdangjiuguan.includes(i)) {
                                                    player.storage.zmlangdangjiuguan.remove(i);
                                                }
                                            }
                                        ('step 1');
                                        if (trigger.player == player) {
                                            event.finish();
                                        } else {
                                            if (player.countCards('he') >= 1) {
                                                var next = player.chooseToDiscard(1, 'he', `是否弃置一张牌令${get.translation(trigger.player)}使用的【酒】回复正常？`, function (card, player) {
                                                    return true;
                                                });
                                                next.ai = function (card) {
                                                    var att = get.attitude(player, trigger.player);
                                                    if (att > 0) {
                                                        return 16 - get.value(card);
                                                    }
                                                    return -1;
                                                };
                                            }
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            game.playzm4('zmlangdangjiuguan01');
                                            player.draw();
                                            event.finish();
                                        } else {
                                            game.playzm4('zmlangdangjiuguan02');
                                            game.mp424('zmzhufu');
                                            player.line(trigger.player);
                                            trigger.cancel();
                                        }
                                        ('step 3');
                                        ('step 4');
                                        trigger.player.loseHp();
                                        ('step 5');
                                        if (_status.event.getParent('phaseUse').name == 'phaseUse' && _status.currentPhase == trigger.player) {
                                            var evt = _status.event.getParent('phaseUse');
                                            if (evt && evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmheitianzhiyan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                return player.countCards('he', { color: 'red' });
                            },
                            check(card) {
                                if (get.position(card) == 'e') return 12 - get.value(card);
                                return 7 - get.value(card);
                            },
                            selectTarget() {
                                return [1, 2];
                            },
                            position: 'he',
                            filterTarget(card, player, target) {
                                return target.countCards('he') && target != player;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            contentBefore() {
                                var num9 = 0;
                                var num8 = 0;
                                for (var i = 0; i < targets.length; i++) {
                                    if (!targets[i].hasSkill('zmheitianzhiyan_3') && !targets[i].hasSkill('zmheitianzhiyan_2')) {
                                        num8++;
                                    }
                                    num9 += targets[i].countCards('he', { color: 'red' });
                                }
                                player.storage.zmt_np -= 10;
                                if (num9 >= 1 && Math.random() <= 0.3 && num8 >= 2) {
                                    game.mp424('zmrishi');
                                }
                            },
                            content() {
                                'step 0';
                                event.num = targets.length;
                                if (event.num == 1) {
                                    event.num1 = 2;
                                }
                                if (event.num == 2) {
                                    event.num1 = 1;
                                }
                                if (!target.hasSkill('zmheitianzhiyan_1') && target.countCards('he', { color: 'red' })) {
                                    target.addSkill('zmheitianzhiyan_1');
                                }
                                ('step 1');
                                if (target.countCards('he', { color: 'red' })) {
                                    target.addTempSkill('zmheitianzhiyan_3', 'roundStart');
                                    target
                                        .chooseCardButton(`需将${event.num1}张牌置于武将牌上`, target, target.getCards('he'), event.num1, true)
                                        .set('filterButton', function (button) {
                                            return get.color(button.link) == 'red';
                                        })
                                        .set('ai', function (button) {
                                            return 4 - get.value(button.link);
                                        });
                                } else {
                                    target.addTempSkill('zmheitianzhiyan_2', 'roundStart');
                                    target.say('我没有红色牌');
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    if (event.num1 == 2 && result.links.length == 1) {
                                        target.addTempSkill('zmheitianzhiyan_2', 'roundStart');
                                    }
                                    target.addToExpansion(result.links, target, 'give').gaintag.add('zmheitianzhiyan_1');
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('he');
                                        if (target.countCards('e', { color: 'red' }) >= 1) {
                                            num += 9;
                                        }
                                        if (target.hasSkill('zmheitianzhiyan_2')) {
                                            num = 0;
                                        }
                                        if (target.hasSkill('zmheitianzhiyan_3') && target.countCards('h') <= 1) {
                                            num = 0;
                                        }
                                        if (target.countCards('e', { color: 'red' }) == 0 && target.countCards('h') == 0) {
                                            num = 0;
                                        }
                                        return -num;
                                    },
                                },
                            },
                            group: ['zmtleiren', 'zmthundun', 'zmtshenxing', 'zmheitianzhiyan_0'],
                            subSkill: {
                                0: {
                                    trigger: {
                                        player: 'damageAfter',
                                        source: 'damageAfter',
                                    },
                                    _priority: 15,
                                    forced: true,
                                    filter(event, player) {
                                        var num5 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmheitianzhiyan_1') && current.getExpansions('zmheitianzhiyan_1').length >= 1;
                                        });
                                        return num5 > 0;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.source == player && trigger.player != player) {
                                            game.playzm4(['zmheitianzhiyan_01', 'zmheitianzhiyan_04', 'zmheitianzhiyan_05', 'zmheitianzhiyan_06', 'zmheitianzhiyan_07'].randomGet());
                                        } else {
                                            game.playzm4(['zmheitianzhiyan_02', 'zmheitianzhiyan_03', 'zmheitianzhiyan_08'].randomGet());
                                        }
                                        var list = [];
                                        game.countPlayer(function (current) {
                                            if (current.hasSkill('zmheitianzhiyan_1') && current.getExpansions('zmheitianzhiyan_1').length >= 1) {
                                                var list2 = current.getExpansions('zmheitianzhiyan_1');
                                                for (var i = 0; i < list2.length; i++) {
                                                    list.push(list2[i]);
                                                }
                                            }
                                        });
                                        var next = player.chooseButton(['可使用其中一张牌', list]);
                                        next.set('ai', function (button) {
                                            var num4 = game.countPlayer(function (current) {
                                                return get.distance(player, current, 'attack') <= 1 && get.attitude(player, current) <= 0 && get.effect(current, { name: 'sha' }, player) > 0;
                                            });
                                            if (button.link.name == 'sha' && num4 == 0) return 0;
                                            return get.buttonValue(button);
                                        });
                                        next.filterButton = function (button) {
                                            return lib.filter.cardEnabled(button.link, player) && player.hasUseTarget(button.link);
                                        };
                                        ('step 1');
                                        if (result.links?.length) {
                                            if (result.links?.length) {
                                                player.chooseUseTarget(result.links[0], false);
                                            }
                                        } else event.finish();
                                    },
                                },
                                1: {
                                    mark: true,
                                    marktext: '蚀',
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                },
                                2: {},
                                3: {},
                            },
                        },
                        zmjiguangjingtu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num1 = 0;
                                var num2 = 0;
                                game.countPlayer(function (current) {
                                    if (current.countCards('hej')) {
                                        num1 += current.countCards('hej', { color: 'black' });
                                        num2 += current.countCards('hej', { color: 'red' });
                                    }
                                });
                                return num1 > num2;
                            },
                            content() {
                                var num2 = 0;
                                game.countPlayer(function (current) {
                                    if (current.countCards('hej')) {
                                        num2 += current.countCards('hej', { color: 'red' });
                                    }
                                });
                                trigger.num += 1;
                                if (num2 == 0) {
                                    player.recover();
                                }
                            },
                        },
                        zmxinhuoxiangcheng: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            init(player) {
                                player.storage.zmxinhuoxiangcheng = 0;
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.suit == 'diamond') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && !current.hasSkill('zmxinhuoxiangcheng2') && !current.hasSkill('zmxinhuoxiangcheng1');
                                });
                                if (!player.hasSkill('zmxinhuoxiangcheng_1')) {
                                    if (player.storage.zmxinhuoxiangcheng <= 1 || (player.storage.zmxinhuoxiangcheng >= 2 && num4 == 0)) {
                                        game.playzm4(['zmxinhuoxiangcheng1', 'zmxinhuoxiangcheng2', 'zmxinhuoxiangcheng5'].randomGet());
                                    } else {
                                        game.mp424('zmsuirenshi');
                                        game.playzm4(['zmxinhuoxiangcheng4', 'zmxinhuoxiangcheng3', 'zmxinhuoxiangcheng3', 'zmxinhuoxiangcheng6'].randomGet());
                                    }
                                }
                                var list = [];
                                event.cards = trigger.cards.slice(0);
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.suit == 'diamond') list.push(i);
                                    }
                                player.storage.zmxinhuoxiangcheng++;
                                player.showCards(list, '薪火相承');
                                ('step 1');
                                player.addTempSkill('zmxinhuoxiangcheng_1');
                                if (player.storage.zmxinhuoxiangcheng >= 3) {
                                    player.draw();
                                    player.storage.zmxinhuoxiangcheng = 0;
                                    player
                                        .chooseTarget('是否令一名其他角色获得【薪火相承】？当其使用三次后失去此技能并令你获得一张♦️️牌', function (card, player, target) {
                                            return player != target && !target.hasSkill('zmxinhuoxiangcheng2');
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(player, target);
                                            if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                            return att;
                                        });
                                } else {
                                    player.draw();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.line(event.target, 'fire');
                                    if (!player.hasSkill('zmxinhuoxiangcheng0')) {
                                        player.addSkill('zmxinhuoxiangcheng0');
                                        player.addSkill('zmxinhuoxiangcheng00');
                                    }
                                    event.target.addSkill('zmxinhuoxiangcheng2');
                                }
                            },
                            group: ['zmxinhuoxiangcheng_2'],
                            subSkill: {
                                1: {},
                                2: {
                                    trigger: {
                                        global: 'gainAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.hasSkill('zmxinhuoxiangcheng0')) return false;
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmxinhuoxiangcheng2');
                                        });
                                        return num4 == 0;
                                    },
                                    content() {
                                        player.removeSkill('zmxinhuoxiangcheng0');
                                        player.removeSkill('zmxinhuoxiangcheng00');
                                    },
                                },
                            },
                        },
                        zmxinhuoxiangcheng2: {
                            nobracket: true,
                            trigger: {
                                player: 'gainEnd',
                            },
                            init(player) {
                                player.storage.zmxinhuoxiangcheng2 = 0;
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.suit == 'diamond') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                event.cards = trigger.cards.slice(0);
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.suit == 'diamond') list.push(i);
                                    }
                                player.storage.zmxinhuoxiangcheng2++;
                                player.showCards(list, '薪火相承');
                                ('step 1');
                                player.draw();
                                if (player.storage.zmxinhuoxiangcheng2 >= 3) {
                                    player.storage.zmxinhuoxiangcheng2 = 0;
                                    player.removeSkill('zmxinhuoxiangcheng2');
                                }
                            },
                            group: ['zmxinhuoxiangcheng0', 'zmxinhuoxiangcheng00'],
                        },
                        zmxinhuoyongran: {
                            group: ['zmtgaodengliliang', 'zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return event.num > 0 && event.player.isAlive();
                            },
                            prompt(event, player) {
                                var str = '';
                                var num = event.player.hp * 2;
                                str += ` ${get.translation(event.player)}已受到${event.num}点伤害,是否发动【薪火永燃】？`;
                                return str;
                            },
                            check(event, player) {
                                if (event.player.hp >= 2 && event.num <= 1 && player.storage.zmt_np <= 34) return false;
                                if (event.player.hp < 0 && event.player.hp * 10 + player.storage.zmt_np < 0) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                event.num1 = 0;
                                event.num = trigger.player.hp + trigger.num;
                                player.storage.zmt_np -= 20;
                                ('step 1');
                                player.line(trigger.player, 'fire');
                                event.num1 += 1;
                                trigger.player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return -1;
                                });
                                ('step 2');
                                if (result.bool) {
                                    trigger.player.recover();
                                    if (result.card.suit == 'diamond') {
                                        player.gain(result.card);
                                        player.$gain2(result.card);
                                    }
                                }
                                ('step 3');
                                if (trigger.player.hp < trigger.player.maxHp && trigger.player.hp < event.num && player.storage.zmt_np >= 20 - event.num1 * 5) {
                                    if (event.num1 * 5 >= 20) {
                                    } else {
                                        player.storage.zmt_np -= 20 - event.num1 * 5;
                                    }
                                    event.goto(1);
                                }
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        zmxinhuoxiangcheng0: {
                            enable: 'chooseToUse',
                            filter(event, button, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return (current.hasSkill('zmxinhuoxiangcheng') && current != player && current.countCards('h') >= 1) || (current.hasSkill('zmxinhuoxiangcheng2') && current != player && current.countCards('h') >= 1);
                                });
                                if (num4 == 0) return false;
                                return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('hidden');
                                    for (var i of game.players) {
                                        if (i == player || (!i.hasSkill('zmxinhuoxiangcheng') && !i.hasSkill('zmxinhuoxiangcheng2'))) continue;
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
                                        return (current.hasSkill('zmxinhuoxiangcheng') && current != player && current.countCards('h') >= 1) || (current.hasSkill('zmxinhuoxiangcheng2') && current != player && current.countCards('h') >= 1);
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
                                            for (var i of game.players) {
                                                i.lose(links[0]);
                                                i.update();
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return `选择${get.translation(links)}的目标`;
                                },
                            },
                            ai: {
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
                        },
                        zmxinhuoxiangcheng00: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return (current.hasSkill('zmxinhuoxiangcheng') && current != player && current.countCards('h', { name: 'wuxie' }) > 0) || (current.hasSkill('zmxinhuoxiangcheng2') && current != player && current.countCards('h', { name: 'wuxie' }) > 0);
                                });
                                if (num4 == 0) return false;
                                if (event.responded) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog('hidden');
                                var cards = [];
                                for (var i of game.players) {
                                    if (i == player || (!i.hasSkill('zmxinhuoxiangcheng') && !i.hasSkill('zmxinhuoxiangcheng2'))) continue;
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
                                    for (var i of game.players) {
                                        i.lose(result.links[0]);
                                    }
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    result.links[0].remove();
                                    trigger.result = { bool: true, card: result.links[0] };
                                }
                            },
                        },
                        zmwenhaiyudian: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 30 && !player.hasSkill('zmwenhaiyudian_2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('是否发动【文海御殿】,并令一名其他角色获得负面效果？', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkill('zmwenhaiyudian_3')) return 0;
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    game.playzm4('zmwenhua');
                                    game.mp424('zmwenhua');
                                    result.targets[0].addSkill('zmwenhaiyudian_3');
                                    result.targets[0].addSkill('zmwenhaiyudian_1');
                                    player.addSkill('zmwenhaiyudian_2');
                                    player.addSkill('zmwenhaiyudian_1');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    silent: true,
                                    content() {
                                        if (player.hasSkill('zmwenhaiyudian_2')) {
                                            player.storage.zmwenhaiyudian_2 = [];
                                        }
                                        if (player.hasSkill('zmwenhaiyudian_3')) {
                                            player.storage.zmwenhaiyudian_3 = [];
                                        }
                                        player.removeSkill('zmwenhaiyudian_3');
                                        player.removeSkill('zmwenhaiyudian_1');
                                        player.removeSkill('zmwenhaiyudian_2');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    init(player) {
                                        player.storage.zmwenhaiyudian_2 = [];
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card, 'trick');
                                        if (player.storage.zmwenhaiyudian_2.includes(type)) return false;
                                        return ['basic', 'trick', 'equip'].includes(type);
                                    },
                                    content() {
                                        var type = null;
                                        var type0 = get.type(trigger.card, 'trick');
                                        switch (type0) {
                                            case 'basic':
                                                type = 'trick';
                                                break;
                                            case 'trick':
                                                type = 'equip';
                                                break;
                                            case 'equip':
                                                type = 'basic';
                                                break;
                                        }
                                        var card = get.cardPile(function (card) {
                                            return get.type(card, 'trick') == type;
                                        });
                                        if (card) {
                                            player.gain(card, 'gain2');
                                            player.storage.zmwenhaiyudian_2.push(type0);
                                        }
                                    },
                                },
                                3: {
                                    mark: true,
                                    marktext: '文',
                                    intro: {
                                        content: '每项限一次:<li>使用基本牌时随机弃置1张锦囊牌;<li>使用锦囊牌时随机弃置1张装备牌;<li>使用装备牌时随机弃置1张基本牌.',
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    init(player) {
                                        player.storage.zmwenhaiyudian_3 = [];
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card, 'trick');
                                        if (player.countCards('hej', { type: ['trick'] }) == 0 && type == 'basic') return false;
                                        if (player.countCards('hej', { type: ['basic'] }) == 0 && type == 'equip') return false;
                                        if (player.countCards('hej', { type: ['equip'] }) == 0 && type == 'trick') return false;
                                        if (player.storage.zmwenhaiyudian_3.includes(type)) return false;
                                        return ['basic', 'trick', 'equip'].includes(type);
                                    },
                                    content() {
                                        var type = null;
                                        var type0 = get.type(trigger.card, 'trick');
                                        switch (type0) {
                                            case 'basic':
                                                type = 'trick';
                                                break;
                                            case 'trick':
                                                type = 'equip';
                                                break;
                                            case 'equip':
                                                type = 'basic';
                                                break;
                                        }
                                        player.storage.zmwenhaiyudian_3.push(type0);
                                        if (type0 == 'trick') {
                                            var card = player.getCards('hej', { type: 'equip' }).randomGet();
                                            player.discard(card);
                                        }
                                        if (type0 == 'equip') {
                                            var card = player.getCards('hej', { type: 'basic' }).randomGet();
                                            player.discard(card);
                                        }
                                        if (type0 == 'basic') {
                                            var card = player.getCards('hej', { type: 'trick' }).randomGet();
                                            player.discard(card);
                                        }
                                    },
                                },
                            },
                        },
                        zmqieyinjieyi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, 1],
                            discard: false,
                            lose: false,
                            delay: 0,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (card.name == 'du') return 20;
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (target.hasSkill('zmqieyinjieyi_1')) {
                                    target.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                                        switch (Math.floor(Math.random() * 6)) {
                                            case 0:
                                                return 'heart2';
                                            case 1:
                                            case 4:
                                            case 5:
                                                return 'diamond2';
                                            case 2:
                                                return 'club2';
                                            case 3:
                                                return 'spade2';
                                        }
                                    });
                                } else {
                                    target.chooseControl('red', 'black').set('ai', function (event) {
                                        if (Math.random() <= 0.5) return 'red';
                                        return 'black';
                                    });
                                }
                                ('step 1');
                                game.log(target, '选择了' + get.translation(result.control));
                                event.choice = result.control;
                                target.popup(event.choice);
                                ('step 2');
                                player.showCards(cards[0], '切音解意');
                                var card = cards[0];
                                if (target.hasSkill('zmqieyinjieyi_1')) {
                                    if (card.suit + '2' != event.choice) {
                                        player.useCard({ name: 'sha' }, cards, target);
                                    } else {
                                        target.removeSkill('zmqieyinjieyi_1');
                                        target.gain(card, player, 'give');
                                    }
                                } else {
                                    if (get.color(card) != event.choice) {
                                        target.addSkill('zmqieyinjieyi_1');
                                        player.useCard({ name: 'sha' }, cards, target);
                                    } else {
                                        target.gain(card, player, 'give');
                                    }
                                }
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        var eff = get.effect(target, { name: 'sha' }, player) > 0;
                                        if (eff > 0 && get.attitude(player, target) <= 0 && !target.hasSkill('zmqieyinjieyi_1')) return -1;
                                        if (eff > 0 && get.attitude(player, target) <= 0 && target.hasSkill('zmqieyinjieyi_1')) return -2;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmchaquebulou: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (event.player.hp >= 2 && event.player.countCards('h') <= 2 && player.countCards('h') <= 2) return false;
                                return get.attitude(player, event.player) > 0;
                            },
                            prompt(event, player) {
                                return `是否尝试补全${get.translation(event.player)}手牌中缺少的花色的牌？`;
                            },
                            filter(event, player) {
                                var diamond = event.player.countCards('h', { suit: 'diamond' });
                                var heart = event.player.countCards('h', { suit: 'heart' });
                                var spade = event.player.countCards('h', { suit: 'spade' });
                                var club = event.player.countCards('h', { suit: 'club' });
                                return player.countCards('h') && event.player != player && ((diamond == 0 && player.countCards('h', { suit: 'diamond' })) || (heart == 0 && player.countCards('h', { suit: 'heart' })) || (spade == 0 && player.countCards('h', { suit: 'spade' })) || (club == 0 && player.countCards('h', { suit: 'club' })));
                            },
                            content() {
                                'step 0';
                                player.chooseCard(`你可交给${get.translation(trigger.player)}其缺少的,不同花色的手牌各一张`, 'h', [1, 4], function (card) {
                                    var suit = card.suit;
                                    if (Array.isArray(ui.selected.cards))
                                        for (var i of ui.selected.cards) {
                                            if (i.suit == suit) return false;
                                        }
                                    return !trigger.player.countCards('h', { suit: card.suit });
                                }).ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.playzm4(['zmchaquebulou1', 'zmchaquebulou2', 'zmchaquebulou3', 'zmchaquebulou4', 'zmchaquebulou5'].randomGet());
                                    player.$give(result.cards, trigger.player);
                                    trigger.player.gain(result.cards, player);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var diamond = trigger.player.countCards('h', { suit: 'diamond' });
                                var heart = trigger.player.countCards('h', { suit: 'heart' });
                                var spade = trigger.player.countCards('h', { suit: 'spade' });
                                var club = trigger.player.countCards('h', { suit: 'club' });
                                if (diamond > 0 && heart > 0 && spade > 0 && club > 0) {
                                    player.draw(2);
                                }
                            },
                        },
                        zmyaowenjiaozi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: ['useCard'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (get.color(event.card) != 'red' && get.color(event.card) != 'black') return false;
                                if ((get.color(event.card) == 'red' && player.countCards('h', { color: 'black' }) == 0) || (get.color(event.card) == 'black' && player.countCards('h', { color: 'red' }) == 0)) return false;
                                return _status.currentPhase == player;
                            },
                            content() {
                                'step 0';
                                event.color = get.color(trigger.card);
                                var next = player.chooseToDiscard(1, 'h', `是否弃置一张与${get.translation(trigger.card)}颜色不同的手牌令该牌失效？`, function (card, player) {
                                    return get.color(card) != get.color(trigger.card);
                                });
                                next.ai = function (card) {
                                    var att = get.attitude(player, trigger.player);
                                    if (att < 0) {
                                        return 9 - get.value(card);
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                } else event.finish();
                                ('step 2');
                                if (player.storage.zmt_np >= 30 || (event.color == 'red' && player.countCards('h', { color: 'black' }) >= 1) || (event.color == 'black' && player.countCards('h', { color: 'red' }) >= 1)) {
                                    var list1 = ['弃置手牌', '消耗能量', 'cancel2'];
                                    if ((event.color == 'red' && !player.countCards('h', { color: 'black' })) || (event.color == 'black' && !player.countCards('h', { color: 'red' }))) {
                                        list1.remove('弃置手牌');
                                    }
                                    if (player.storage.zmt_np < 30) {
                                        list1.remove('消耗能量');
                                    }
                                    player
                                        .chooseControl(list1)
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var trigger = _status.event.getTrigger();
                                            if (get.effect(trigger.player, { name: 'sha' }, player) <= 0) return 'cancel2';
                                            if (player.storage.zmt_np >= 30) return '消耗能量';
                                            if ((player.storage.zmt_np < 30 && event.color == 'red' && player.countCards('h', { color: 'black' }) >= 2) || (player.storage.zmt_np < 30 && event.color == 'black' && player.countCards('h', { color: 'red' }) >= 2) || (event.color == 'black' && player.countCards('h', { color: 'red' }) >= 4) || (event.color == 'red' && player.countCards('h', { color: 'black' }) >= 4)) return '弃置手牌';
                                            return 'cancel2';
                                        })
                                        .set('prompt', `可选择弃置一张颜色不为${get.translation(event.color)}的手牌或消耗30点能量视为对${get.translation(trigger.player)}使用一张【杀】`);
                                } else {
                                    game.playzm4(['zmyaowenjiaozi1', 'zmyaowenjiaozi2', 'zmyaowenjiaozi3', 'zmyaowenjiaozi4'].randomGet());
                                    player.line(trigger.player);
                                    event.finish();
                                }
                                ('step 3');
                                if (result.control == 'cancel2') {
                                    game.playzm4(['zmyaowenjiaozi1', 'zmyaowenjiaozi2', 'zmyaowenjiaozi3', 'zmyaowenjiaozi4'].randomGet());
                                    player.line(trigger.player);
                                    event.finish();
                                } else {
                                    if (result.control == '消耗能量' && player.storage.zmt_np >= 30) {
                                        player.storage.zmt_np -= 30;
                                        if (player.hasSkill('zmyaowenjiaozi_1')) {
                                            game.playzm4('zmyaowenjiaozi2');
                                        } else {
                                            game.playzm4(['zmxinhua1', 'zmxinhua2'].randomGet());
                                            game.mp424('zmxinhua');
                                        }
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                        player.addTempSkill('zmyaowenjiaozi_1');
                                        event.finish();
                                    }
                                    if (result.control == '弃置手牌') {
                                        if ((event.color == 'red' && player.countCards('h', { color: 'black' }) >= 1) || (event.color == 'black' && player.countCards('h', { color: 'red' }) >= 1)) {
                                            var next = player.chooseToDiscard(1, 'h', `弃置一张与${get.translation(trigger.card)}颜色不同的手牌视为对${get.translation(trigger.player)}使用一张【杀】？`, function (card, player) {
                                                return get.color(card) != event.color;
                                            });
                                            next.ai = function (card) {
                                                var att = get.attitude(player, trigger.player);
                                                if (att < 0 && get.effect(trigger.player, { name: 'sha' }, player) > 0) {
                                                    return 9 - get.value(card);
                                                }
                                                return -1;
                                            };
                                        } else {
                                            game.playzm4(['zmyaowenjiaozi1', 'zmyaowenjiaozi2', 'zmyaowenjiaozi3', 'zmyaowenjiaozi4'].randomGet());
                                            player.line(trigger.player);
                                            event.finish();
                                        }
                                    }
                                }
                                ('step 4');
                                if (result.bool) {
                                    if (player.hasSkill('zmyaowenjiaozi_1')) {
                                        game.playzm4('zmyaowenjiaozi2');
                                    } else {
                                        game.playzm4(['zmxinhua1', 'zmxinhua2'].randomGet());
                                        game.mp424('zmxinhua');
                                    }
                                    player.useCard({ name: 'sha' }, trigger.player, false);
                                    player.addTempSkill('zmyaowenjiaozi_1');
                                } else {
                                    game.playzm4(['zmyaowenjiaozi1', 'zmyaowenjiaozi2', 'zmyaowenjiaozi3', 'zmyaowenjiaozi4'].randomGet());
                                    player.line(trigger.player);
                                    event.finish();
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmwanyouyinli: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:6',
                            trigger: {
                                global: 'discardAfter',
                            },
                            filter(event, player) {
                                var num0 = 0;
                                var maxArray = [];
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    if (maxArray.length == 0) {
                                        maxArray.push(player.getCards('h')[i]);
                                    } else {
                                        var h = maxArray[0];
                                        if (h.number < get.number(player.getCards('h')[i])) {
                                            maxArray = [player.getCards('h')[i]];
                                            num0 = get.number(player.getCards('h')[i]);
                                        } else if (h.number == get.number(player.getCards('h')[i])) {
                                            maxArray.push(player.getCards('h')[i]);
                                            num0 = get.number(player.getCards('h')[i]);
                                        }
                                    }
                                }
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i) == 'd' && i.number < num0) {
                                            return !player.hasSkill('zmwanyouyinli_temp');
                                        }
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                var num1 = 0;
                                var num2 = 0;
                                var num0 = 0;
                                var maxArray = [];
                                for (var i = 0; i < player.getCards('h').length; i++) {
                                    if (maxArray.length == 0) {
                                        maxArray.push(player.getCards('h')[i]);
                                    } else {
                                        var h = maxArray[0];
                                        if (h.number < get.number(player.getCards('h')[i])) {
                                            maxArray = [player.getCards('h')[i]];
                                            num0 = get.number(player.getCards('h')[i]);
                                        } else if (h.number == get.number(player.getCards('h')[i])) {
                                            maxArray.push(player.getCards('h')[i]);
                                            num0 = get.number(player.getCards('h')[i]);
                                        }
                                    }
                                }
                                var cards = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.position(i) == 'd') {
                                            if (i.number < num0) {
                                                if (get.value(i) > 0) {
                                                    num2++;
                                                }
                                                //if(i.name=='du'){num1++;};
                                            }
                                            cards.push(i);
                                        }
                                    }
                                if (cards.length) {
                                    event.use = cards;
                                    player
                                        .choosePlayerCard('h', player, 'visible')
                                        .set('prompt', `是否展示一张牌,之后可获得${get.translation(event.use)}中点数小于该牌的牌？`)
                                        .set('ai', function (button) {
                                            if (num2 == 0) return 0;
                                            return button.link.number;
                                        })
                                        .set('filterButton', function (button) {
                                            return button.link.number >= 1;
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.links?.length) {
                                    player.showCards(result.links[0], '万有引力');
                                    if (!player.hasSkill('zmwanyouyinli_temp')) {
                                        player.addTempSkill('zmwanyouyinli_temp', 'roundStart');
                                    }
                                    event.num = result.links[0].number;
                                } else event.finish();
                                ('step 3');
                                if (event.use.length && event.num >= 1) {
                                    player
                                        .chooseCardButton(event.use, [1, Infinity], `可获得其中任意张点数小于${get.translation(event.num)}的牌`)
                                        .set('filterButton', function (button) {
                                            return button.link.number < event.num;
                                        })
                                        .set('ai', function (button) {
                                            //if(button.link.name=='du') return 0;
                                            //return get.value(button.link);
                                            return button.link.name != 'du';
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                if (result.links?.length) {
                                    player.gain(result.links, 'gain2');
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                temp: {},
                            },
                        },
                        zmxiazhuidezhenli: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            check(event, player) {
                                var num0 = 0;
                                if (event.target.countCards('e')) {
                                    var es = event.target.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (es[i].number >= event.card.number) {
                                            num0++;
                                        }
                                    }
                                }
                                if (get.attitude(player, event.target) >= 0) return false;
                                if (event.target.countCards('h') == 0 && num0 >= 1) return false;
                                return (player.storage.zmt_np < 60 && event.card.number >= 7 + event.target.countCards('he') / 2) || (player.storage.zmt_np >= 60 && event.card.number >= 5 + event.target.countCards('he') / 2);
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 35) return false;
                                if (!event.card) return false;
                                if (!event.targets) return false;
                                if (event.target == player) return false;
                                var num = event.card.number;
                                if (num == undefined) return false;
                                return get.tag(event.card, 'damage') && event.target.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 35;
                                game.playzm4('zmyinuosha');
                                game.mp424('zmyinuosha');
                                event.num = 0;
                                event.num1 = trigger.target.countCards('he');
                                ('step 1');
                                player.line(trigger.target, { color: [205, 51, 221] });
                                var card = trigger.target.getCards('he').randomGet();
                                trigger.target.showCards(card);
                                if (card.number >= trigger.card.number) {
                                    event.finish();
                                } else {
                                    event.num++;
                                    trigger.target.discard(card);
                                }
                                ('step 2');
                                if (trigger.target.countCards('he')) {
                                    event.goto(1);
                                } else {
                                    if (event.num == event.num1) {
                                        trigger.baseDamage++;
                                    }
                                }
                            },
                        },
                        zmbuwendinghuahetai: {
                            group: ['zmtyuansu', 'zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, 1],
                            discard: false,
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                return 5 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.gain(cards, player, 'giveAuto');
                                var evt2 = event.getParent(3);
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.getParent(2).name == 'rende' && evt.getParent(5) == evt2) num += evt.cards.length;
                                });
                                if (player.storage.zmt_np >= 40) {
                                    player.storage.zmt_np -= 40;
                                    event.num = 1;
                                    game.playzm4('zmsuofeiya');
                                    game.mp424('zmsuofeiya');
                                } else {
                                    if (get.attitude(player, target) > 0 && target.countCards('hej', { color: 'red' }) <= 1) {
                                        game.playzm4('zmbuwendinghuahetai11');
                                    } else {
                                        game.playzm4(['zmbuwendinghuahetai1', 'zmbuwendinghuahetai1', 'zmbuwendinghuahetai2', 'zmbuwendinghuahetai3', 'zmbuwendinghuahetai4'].randomGet());
                                    }
                                    event.num = 0;
                                }
                                ('step 1');
                                if (event.num == 0) {
                                    var red = target.countCards('hej', { color: 'red' });
                                    var black = target.countCards('hej', { color: 'black' });
                                    if (red != black && red >= 1 && black >= 1 && target.countCards('hej') >= 3) {
                                        target.randomDiscard(1, 'hej', true);
                                    } else event.finish();
                                } else {
                                    var red = target.countCards('hej', { color: 'red' });
                                    var black = target.countCards('hej', { color: 'black' });
                                    if (red != black && red >= 1 && black >= 1 && target.countCards('hej') >= 3) {
                                        target.randomDiscard(2, 'hej', true);
                                        target.damage(1, 'nosource');
                                    } else event.finish();
                                }
                                ('step 2');
                                var red = target.countCards('hej', { color: 'red' });
                                var black = target.countCards('hej', { color: 'black' });
                                if (red != black && red >= 1 && black >= 1 && target.countCards('hej') >= 3) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order(skill, player) {
                                    return 12;
                                },
                                result: {
                                    target(player, target) {
                                        var num;
                                        var num1 = target.countCards('ej');
                                        var num2 = target.countCards('h');
                                        var red = target.countCards('ej', { color: 'red' });
                                        var black = target.countCards('ej', { color: 'black' });
                                        num = target.countCards('he');
                                        if (get.attitude(player, target) > 0 && num == 0 && target.hp <= 2 && player.storage.zmt_np < 40) return 1;
                                        if (get.attitude(player, target) <= 0 && num >= 3) return -num;
                                        if (player.storage.zmt_np >= 40 && player.storage.zmt_np < 80 && get.attitude(player, target) <= 0 && num <= 3 && target.hp >= 2) return 0;
                                        if ((get.attitude(player, target) <= 0 && num2 == 1 && red == num1) || (get.attitude(player, target) <= 0 && num2 == 1 && black == num1)) return 0;
                                        return 0;
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        zmwendinghuahewu: {
                            init(player) {
                                player.storage.zmwendinghuahewu = true;
                            },
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.zmwendinghuahewu == true) return '当有角色弃置牌前,若其区域内所有颜色的牌数量相同,则你可取消之';
                                    return '当有角色的牌被获得时,若其区域内所有颜色的牌数量相同,则你可取消之';
                                },
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            trigger: {
                                global: ['discardBefore'],
                            },
                            prompt2(event, player, onrewrite) {
                                return `稳定化合物:${get.translation(event.player)}即将弃置牌,是否取消之？`;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            usable: 1,
                            filter(event, player, name) {
                                if (event.player.countCards('hej') <= 1 || event.player.countCards('hej') % 2 != 0) return false;
                                if (player.storage.zmwendinghuahewu != true) return false;
                                var red = event.player.countCards('hej', { color: 'red' });
                                var black = event.player.countCards('hej', { color: 'black' });
                                return red >= 1 && black >= 1 && red == black && event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, { color: [187, 153, 238] });
                                trigger.cancel();
                            },
                            group: ['zmwendinghuahewu_2', 'zmwendinghuahewu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['rewriteGainResult'],
                                    },
                                    usable: 1,
                                    prompt2(event, player) {
                                        return `稳定化合物:${get.translation(event.target)}即将失去牌,是否取消之？`;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.target) > 0;
                                    },
                                    filter(event, player) {
                                        if (event.target.countCards('hej') <= 1 || event.target.countCards('hej') % 2 != 0) return false;
                                        if (player.storage.zmwendinghuahewu == true) return false;
                                        var red = event.target.countCards('hej', { color: 'red' });
                                        var black = event.target.countCards('hej', { color: 'black' });
                                        return red >= 1 && black >= 1 && red == black && event.target.isAlive();
                                    },
                                    content() {
                                        'step 0';
                                        player.addTempSkill('zmwendinghuahewu_2');
                                        game.playzm4(['zmwendinghuahewu1', 'zmwendinghuahewu2', 'zmwendinghuahewu3', 'zmwendinghuahewu4'].randomGet());
                                        player.line(trigger.target, { color: [187, 153, 238] });
                                        trigger.cancel();
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    _priority: 10,
                                    content() {
                                        if (player.storage.zmwendinghuahewu) {
                                            player.storage.zmwendinghuahewu = false;
                                        } else {
                                            player.storage.zmwendinghuahewu = true;
                                        }
                                    },
                                },
                            },
                        },
                        zmlingheboyi: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:9',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            filter(event, player) {
                                return player.storage.zmt_np >= 15;
                            },
                            prepare: 'throw',
                            content() {
                                'step 0';
                                /*    
                                      */
                                event.num = 1;
                                event.co1 = 0;
                                event.co2 = 0;
                                player.storage.zmt_np -= 15;
                                game.playzm4('zmaisi');
                                game.mp424('zmaisi');
                                if (targets[0] == player || targets[1] == player) {
                                    player.draw();
                                }
                                ('step 1');
                                targets[0].chooseControl('令自己翻面', '令对方翻面', '沉默', true).set('prompt', `对方为${get.translation(targets[1])},需选择一项效果发动`).ai = function () {
                                    if (get.attitude(targets[0], targets[1]) > 0 && targets[0].isTurnedOver() && targets[1].isTurnedOver()) return 2;
                                    if (get.attitude(targets[0], targets[1]) > 0) return Math.round(Math.random() * 1);
                                    return Math.round(Math.random() * 2);
                                };
                                ('step 2');
                                if (result.control == '令自己翻面') {
                                    event.co1 = result.control;
                                }
                                if (result.control == '令对方翻面') {
                                    event.co1 = result.control;
                                }
                                if (result.control == '沉默') {
                                    event.co1 = result.control;
                                }
                                targets[1].chooseControl('令自己翻面', '令对方翻面', '沉默', true).set('prompt', `对方为${get.translation(targets[0])},需选择一项效果发动`).ai = function () {
                                    if (get.attitude(targets[1], targets[0]) > 0 && targets[0].isTurnedOver() && targets[1].isTurnedOver()) return 2;
                                    if (get.attitude(targets[1], targets[0]) > 0) return Math.round(Math.random() * 1);
                                    return Math.round(Math.random() * 2);
                                };
                                ('step 3');
                                if (result.control == '令自己翻面') {
                                    event.co2 = result.control;
                                }
                                if (result.control == '令对方翻面') {
                                    event.co2 = result.control;
                                }
                                if (result.control == '沉默') {
                                    event.co2 = result.control;
                                }
                                ('step 4');
                                game.log(targets[0], '选择了' + get.translation(event.co1));
                                if (event.co1 == '令自己翻面') {
                                    targets[0].say('翻面我自己');
                                }
                                if (event.co1 == '令对方翻面') {
                                    targets[0].line(targets[1]);
                                    targets[0].say(`令${get.translation(targets[1])}翻面`);
                                }
                                if (event.co1 == '沉默') {
                                    targets[0].say('沉默');
                                }
                                ('step 5');
                                game.log(targets[1], '选择了' + get.translation(event.co2));
                                if (event.co2 == '令自己翻面') {
                                    targets[1].say('翻面我自己');
                                }
                                if (event.co2 == '令对方翻面') {
                                    targets[1].line(targets[0]);
                                    targets[1].say(`令${get.translation(targets[0])}翻面`);
                                }
                                if (event.co2 == '沉默') {
                                    targets[1].say('沉默');
                                }
                                ('step 6');
                                if (event.co2 == event.co1) {
                                    if (event.num + 1 >= 4) {
                                        game.playzm4(['zmlingheboyi31', 'zmlingheboyi32', 'zmlingheboyi33'].randomGet());
                                        targets[1].turnOver(true);
                                        targets[0].turnOver(true);
                                        event.finish();
                                    } else {
                                        event.num += 1;
                                        event.goto(1);
                                    }
                                } else {
                                    if (event.co1 == '令自己翻面') {
                                        targets[0].turnOver();
                                    }
                                    if (event.co1 == '令对方翻面') {
                                        targets[1].turnOver();
                                    }
                                    if (event.co2 == '令自己翻面') {
                                        targets[1].turnOver();
                                    }
                                    if (event.co2 == '令对方翻面') {
                                        targets[0].turnOver();
                                    }
                                }
                                ('step 7');
                                if (targets[0] == player || targets[1] == player) {
                                    if ((targets[0] == player && player.isTurnedOver() && !targets[1].isTurnedOver()) || (targets[1] == player && player.isTurnedOver() && !targets[0].isTurnedOver())) {
                                        game.playzm4(['zmlingheboyi21', 'zmlingheboyi22', 'zmlingheboyi23'].randomGet());
                                    }
                                    if ((targets[0] == player && !player.isTurnedOver() && targets[1].isTurnedOver()) || (targets[1] == player && !player.isTurnedOver() && targets[0].isTurnedOver())) {
                                        game.playzm4(['zmlingheboyi01', 'zmlingheboyi02', 'zmlingheboyi03', 'zmlingheboyi04', 'zmlingheboyi05', 'zmlingheboyi06', 'zmlingheboyi05', 'zmlingheboyi06'].randomGet());
                                    }
                                } else {
                                    if (get.attitude(player, targets[0]) < 0 && get.attitude(player, targets[1]) < 0 && !targets[0].isTurnedOver() && !targets[1].isTurnedOver()) {
                                        game.playzm4(['zmlingheboyi21', 'zmlingheboyi22', 'zmlingheboyi23'].randomGet());
                                    }
                                    if (get.attitude(player, targets[0]) <= 0 && get.attitude(player, targets[1]) <= 0 && targets[0].isTurnedOver() && targets[1].isTurnedOver()) {
                                        game.playzm4(['zmlingheboyi01', 'zmlingheboyi03', 'zmlingheboyi02', 'zmlingheboyi31'].randomGet());
                                    }
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.8,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0;
                                        });
                                        var num;
                                        num = target.countCards('h') + 1;
                                        if (target.isTurnedOver() && get.attitude(player, target) <= 0) return 0;
                                        if (target.isTurnedOver() && get.attitude(player, target) > 0) return 2;
                                        if (num4 == 1 && target == player) return 1;
                                        if (game.players.length == 2 && target != player && get.attitude(player, target) > 0) return 0;
                                        return -num;
                                    },
                                },
                            },
                        },
                        zmjunzhulun: {
                            nobracket: true,
                            trigger: {
                                global: 'discardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.distance(player, event.player, 'attack') > 1) return false;
                                if (!event.cards || !event.cards.length) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red' && get.position(i) == 'd') {
                                            return game.players.length >= 2 && player.countCards('h') > event.cards.length;
                                        }
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num0 = 0;
                                event.cards = [];
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.color(i) == 'red' && get.position(i) == 'd') {
                                            event.cards.push(i);
                                            ui.special.appendChild(i);
                                        }
                                    }
                                ('step 1');
                                if (event.cards.length) {
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
                                            return get.attitude(player, current) > 1;
                                        });
                                    }
                                    player
                                        .chooseCardButton(get.prompt('zmjunzhulun'), event.cards, [1, event.cards.length])
                                        .set('ai', function (button) {
                                            if (!_status.event.goon || ui.selected.buttons.length) return 0;
                                            if (button.link.name == 'du') return 2;
                                            return 1;
                                        })
                                        .set('goon', goon);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    event.togive = result.links.slice(0);
                                    player
                                        .chooseTarget(`将${get.translation(result.links)}交给一名除${get.translation(trigger.player)}以外的角色`, true, function (card, player, target) {
                                            return target != trigger.player;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (_status.event.enemy) {
                                                return -att;
                                            } else {
                                                if (att > 2) return att / Math.sqrt(1 + target.countCards('h'));
                                                return att / Math.sqrt(1 + target.countCards('h')) / 5;
                                            }
                                        })
                                        .set('enemy', get.value(event.togive[0]) < 0);
                                } else {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            i.discard();
                                        }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (event.num0 == 0) {
                                        event.num0++;
                                        game.playzm4(['zmjunzhulun1', 'zmjunzhulun2', 'zmjunzhulun5', 'zmjunzhulun4', 'zmjunzhulun3'].randomGet());
                                    }
                                    for (var i = 0; i < event.togive.length; i++) {
                                        event.cards.remove(event.togive[i]);
                                    }
                                    result.targets[0].gain(event.togive, player);
                                    result.targets[0].$gain2(event.togive);
                                    event.goto(1);
                                } else {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            i.discard();
                                        }
                                    event.finish();
                                }
                            },
                        },
                        zmweijiashangxia: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return (current.isDamaged() && player.storage.zmt_np < 40) || player.storage.zmt_np >= 40;
                                });
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp && player.storage.zmt_np < 40) return false;
                                return target.countCards('hej') >= 1;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmt_np < 40) {
                                    if (target == player) {
                                        game.playzm4(['zmweijiashangxia21', 'zmweijiashangxia22'].randomGet());
                                    } else {
                                        game.playzm4(['zmweijiashangxia1', 'zmweijiashangxia2', 'zmweijiashangxia3', 'zmweijiashangxia4'].randomGet());
                                    }
                                    target.recover();
                                    var num = target.countDiscardableCards(player, 'hej');
                                    var num1 = Math.min(2, num);
                                    if (num1 > 0) player.discardPlayerCard(num1, target, true, 'hej');
                                    event.finish();
                                } else {
                                    player.storage.zmt_np = 0;
                                    game.playzm4(['zmluolunzuo1', 'zmluolunzuo2'].randomGet());
                                    game.mp424('zmluolunzuo');
                                    target.loseHp();
                                    target.draw(2);
                                }
                                /* "step 1"
                                   var cards=target.getCards('h',{color:'red'});
                     if(cards.length){
                     player.$gain2(cards);
                     player.gain(cards,target);
                     game.log(player,`获得${cards.length}张牌`);
                     }*/
                            },
                            ai: {
                                threaten: 1.2,
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (player.storage.zmt_np >= 40) {
                                            if ((get.attitude(player, target) < 0 && target.hp <= 2) || (get.attitude(player, target) < 0 && target.countCards('h') >= 5)) return -2;
                                            return -1;
                                        }
                                        if (player.storage.zmt_np < 40) {
                                            var num = target.countDiscardableCards(player, 'hej');
                                            if ((get.attitude(player, target) > 0 && target.hp <= 2) || (get.attitude(player, target) > 0 && target.countCards('j') >= 1)) return 2;
                                            if (get.attitude(player, target) > 0 && target.hp > 2) return 1;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        zmfengyunjihui: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countDisabled() < 5;
                            },
                            filterTarget(card, player, target) {
                                if (target != player && target.countCards('he')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseToDisable();
                                ('step 1');
                                target.chooseCard(1, 'he', true, '请选择一张牌交给' + get.translation(player));
                                ('step 2');
                                target.chooseDrawRecover(1, true);
                                //  target.$give(result.cards[0],player);
                                player.gain(result.cards, target, 'giveAuto');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        if (target.hp <= 3 && target.countCards('h') >= 2) return 5;
                                        return 3;
                                    },
                                },
                                threaten: 0.2,
                            },
                        },
                        zmtuqiongbijian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:1',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            check(event, player) {
                                if ((player.hp <= 3 && player.countCards('h', { name: 'shan' }) == 0) || player.countDisabled() == 5) {
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 15;
                            },
                            content() {
                                player.storage.zmt_np -= 15;
                                if (player.countDisabled() == 5) {
                                    var list = ['juedou'];
                                    trigger.player.gain(game.createCard(list.randomGet()));
                                    trigger.player.$draw();
                                } else {
                                    player.addTempSkill('bagua_skill', { player: 'phaseBegin' });
                                }
                            },
                            group: ['zmtuqiongbijian_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊肆/audio:2',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) <= 0;
                                    },
                                    filter(event, player) {
                                        var nh = 0;
                                        if (event.player.countCards('h') > player.countCards('h')) nh++;
                                        if (event.player.countCards('e') > player.countCards('e')) nh++;
                                        if (event.player.countCards('j') > player.countCards('j')) nh++;
                                        if (player.countDisabled() < 5) return false;
                                        return nh > 0 && event.player != player;
                                    },
                                    content() {
                                        var nh = 0;
                                        if (trigger.player.countCards('h') > player.countCards('h')) nh++;
                                        if (trigger.player.countCards('e') > player.countCards('e')) nh++;
                                        if (trigger.player.countCards('j') > player.countCards('j')) nh++;
                                        if (nh > 0 && trigger.player.hp == 1) {
                                            game.playzm4('zmjingke');
                                            game.mp424('zmjingke');
                                        }
                                        trigger.num += nh;
                                    },
                                },
                            },
                        },
                        zmjielvzhijian: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.num1 = 0;
                                event.att = 0;
                                if (get.attitude(player, target) <= 0) {
                                    event.att = 1;
                                    game.playzm4(['zmjielvzhijian13', 'zmjielvzhijian11', 'zmjielvzhijian12', 'zmjielvzhijian13', 'zmjielvzhijian23', 'zmjielvzhijian23'].randomGet());
                                } else {
                                    game.playzm4(['zmjielvzhijian21', 'zmjielvzhijian12', 'zmjielvzhijian24', 'zmjielvzhijian23', 'zmjielvzhijian21', 'zmjielvzhijian22'].randomGet());
                                }
                                ('step 1');
                                player.chooseToPSS(target);
                                ('step 2');
                                if (result.tie) {
                                    event.goto(1);
                                } else {
                                    if (result.bool) {
                                        event.num = 1;
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(target, current) <= 0 && get.distance(target, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, target) > 0;
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        player.chooseControl('戒律', '解放').set('prompt', '须选择一项效果获得直到你的回合结束').set('choiceList', ['你于回合内无法使用牌', '你于回合内使用牌无数量限制']).ai = function (event, player) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, target) <= 0 || (get.attitude(player, target) > 0 && num4 >= 1 && player.countCards('h', { name: 'sha' }) >= 2) || (get.attitude(player, target) > 0 && num3 == 0 && num4 >= 1 && player.countCards('h', { name: 'sha' }) >= 1)) return '解放';
                                            return '戒律';
                                        };
                                    } else {
                                        event.num1 = 1;
                                        target.chooseControl('戒律', '解放').set('prompt', '须选择一项效果获得直到你的回合结束').set('choiceList', ['你于回合内无法使用牌', '你于回合内使用牌无数量限制']).ai = function (event, player) {
                                            var player = _status.event.player;
                                            var num4 = game.countPlayer(function (current) {
                                                return get.attitude(player, current) <= 0 && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0;
                                            });
                                            var num6 = game.countPlayer(function (current) {
                                                return get.attitude(player, current) <= 0 && get.distance(target, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, target) > 0;
                                            });
                                            if (get.attitude(player, target) <= 0) return '解放';
                                            if (num6 > 0 && target.countCards('h', { name: 'sha' }) >= 2) return '解放';
                                            if (get.attitude(target, player) > 0 && player.countCards('h') >= 4 && num4 > 0 && event.att == 0) return '戒律';
                                            return '解放';
                                        };
                                    }
                                }
                                ('step 3');
                                if (result.control == '戒律') {
                                    if (event.num == 1) {
                                        player.popup('戒律', 'fire');
                                        target.popup('解放', 'water');
                                        player.addTempSkill('zmjielvzhijian_1', { player: 'phaseEnd' });
                                        target.addTempSkill('zmjielvzhijian_2', { player: 'phaseEnd' });
                                    }
                                    if (event.num1 == 1) {
                                        target.popup('戒律', 'fire');
                                        player.popup('解放', 'water');
                                        player.addTempSkill('zmjielvzhijian_2', { player: 'phaseEnd' });
                                        target.addTempSkill('zmjielvzhijian_1', { player: 'phaseEnd' });
                                    }
                                }
                                if (result.control == '解放') {
                                    if (event.num == 1) {
                                        target.popup('戒律', 'fire');
                                        player.popup('解放', 'water');
                                        player.addTempSkill('zmjielvzhijian_2', { player: 'phaseEnd' });
                                        target.addTempSkill('zmjielvzhijian_1', { player: 'phaseEnd' });
                                    }
                                    if (event.num1 == 1) {
                                        player.popup('戒律', 'fire');
                                        target.popup('解放', 'water');
                                        player.addTempSkill('zmjielvzhijian_1', { player: 'phaseEnd' });
                                        target.addTempSkill('zmjielvzhijian_2', { player: 'phaseEnd' });
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num4 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0;
                                        });
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(target, current) <= 0 && get.distance(target, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, target) > 0;
                                        });
                                        if (num4 >= 1 && player.countCards('h', { name: 'sha' }) >= 1) {
                                            var num = target.countCards('h');
                                            if (get.attitude(player, target) <= 0) {
                                                num *= -1;
                                            }
                                            if (get.attitude(player, target) <= 0) {
                                                num -= 2;
                                            }
                                            if (player.countCards('h', { name: 'sha' }) >= 2 && player.countCards('h') >= 4) {
                                                if (get.attitude(player, target) > 0 && num3 > 0) {
                                                    num += 4;
                                                }
                                                return num;
                                            }
                                            if (get.attitude(player, target) > 0 && (target.getEquip('zhuge') || target.hasJudge('lebu'))) return 0;
                                            if (get.attitude(player, target) <= 0 && target.getEquip('zhuge')) {
                                                num *= 3;
                                            }
                                            if (get.attitude(player, target) <= 0 && target.hasJudge('lebu')) return 0;
                                            return num;
                                        } else {
                                            if (target.hasSkill('zmjielvzhijian_1')) return 0;
                                            if (target.hasSkill('zmjielvzhijian_2') && get.attitude(player, target) > 0) return 0;
                                            if (get.attitude(player, target) > 0 && target.hasSkill('zmjielvzhijian_2')) return 0;
                                            var num = target.countCards('h');
                                            if (get.attitude(player, target) < 0 && target.countCards('h') >= 3) {
                                                num += 1;
                                            }
                                            if (target.hasSkill('zmjielvzhijian_2') && get.attitude(player, target) <= 0) {
                                                num += 1;
                                            }
                                            if (get.attitude(player, target) > 0) {
                                                if (get.attitude(player, target) > 0 && num3 > 0 && target.countCards('h') >= 3) {
                                                    num += 1;
                                                }
                                            }
                                            if (get.attitude(player, target) <= 0) {
                                                num *= -1;
                                            }
                                            if (get.attitude(player, target) <= 0) {
                                                num -= 2;
                                            }
                                            if (get.attitude(player, target) <= 0 && target.getEquip('zhuge')) {
                                                num *= 3;
                                            }
                                            if (get.attitude(player, target) > 0 && (target.getEquip('zhuge') || target.hasJudge('lebu'))) return 0;
                                            if (get.attitude(player, target) <= 0 && target.hasJudge('lebu')) return 0;
                                            return num;
                                        }
                                    },
                                },
                                threaten: 1.5,
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '<span style="color: red">戒</span>',
                                    intro: {
                                        content(storage) {
                                            return '你于回合内不能使用或打出牌';
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            if ((_status.currentPhase == player && get.type(card, 'trick')) || (_status.currentPhase == player && get.type(card, 'basic')) || (_status.currentPhase == player && get.type(card, 'delay')) || (_status.currentPhase == player && get.type(card, 'equip'))) return false;
                                        },
                                        cardUsable(card, player) {
                                            if ((_status.currentPhase == player && get.type(card, 'trick')) || (_status.currentPhase == player && get.type(card, 'basic')) || (_status.currentPhase == player && get.type(card, 'delay')) || (_status.currentPhase == player && get.type(card, 'equip'))) return false;
                                        },
                                        cardRespondable(card, player) {
                                            if ((_status.currentPhase == player && get.type(card, 'trick')) || (_status.currentPhase == player && get.type(card, 'basic')) || (_status.currentPhase == player && get.type(card, 'delay')) || (_status.currentPhase == player && get.type(card, 'equip'))) return false;
                                        },
                                        cardSavable(card, player) {
                                            if ((_status.currentPhase == player && get.type(card, 'trick')) || (_status.currentPhase == player && get.type(card, 'basic')) || (_status.currentPhase == player && get.type(card, 'delay')) || (_status.currentPhase == player && get.type(card, 'equip'))) return false;
                                        },
                                    },
                                },
                                2: {
                                    mark: true,
                                    marktext: '<span style="color: green">解</span>',
                                    intro: {
                                        content(storage) {
                                            return '你于回合内使用或打出牌无次数限制';
                                        },
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (_status.currentPhase == player) {
                                                return Infinity;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        zmminglitanzhi: {
                            group: ['zmtrenxing', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: 'drawAfter',
                            },
                            _priority: -999,
                            filter(event, player) {
                                if (player.storage.zmt_np < 15) return false;
                                return event.result.length;
                            },
                            init(player) {
                                player.storage.zmminglitanzhi = 0;
                            },
                            check(event, player) {
                                var num = 0;
                                var num1 = 0;
                                if (player.storage.zmt_np >= 35) {
                                    num1 += 1;
                                }
                                if (_status.currentPhase != player) {
                                    num -= 2;
                                }
                                for (var i = 0; i < event.result.length; i++) {
                                    num += get.value(event.result[i]);
                                }
                                var num1 = num / event.result.length;
                                for (var i = 0; i < event.result.length; i++) {
                                    if ((get.value(event.result[i]) >= 8 + num1 && num1 >= 5 + num1) || (get.tag(event.result[i], 'recover') >= 1 && num >= 5 + num1) || num >= 7 + num1) return false;
                                }
                                if (player.hasSkill('zmminglitanzhi_1') && player.hp >= 3 && _status.currentPhase == player && player.storage.zmt_np < 25) return false;
                                return true;
                            },
                            prompt(event, player) {
                                return `是否重铸${get.translation(event.result)}？`;
                            },
                            content() {
                                'step 0';
                                if (player.storage.zmminglitanzhi <= 1 && !player.hasSkill('zmminglitanzhi_1')) {
                                    game.playzm4(['zmminglitanzhi1', 'zmminglitanzhi2', 'zmminglitanzhi3', 'zmminglitanzhi4', 'zmminglitanzhi5', 'zmminglitanzhi6', 'zmminglitanzhi7'].randomGet());
                                }
                                player.storage.zmt_np -= 15;
                                event.num = trigger.result.length;
                                var loseCards = [];
                                for (var i = 0; i < trigger.result.length; i++) {
                                    loseCards.push(trigger.result[i]);
                                }
                                player.discard(loseCards);
                                ('step 1');
                                player.addTempSkill('zmminglitanzhi_1');
                                player.storage.zmminglitanzhi++;
                                player.draw(event.num);
                                ('step 2');
                                if (player.storage.zmminglitanzhi >= 3) {
                                    player.storage.zmminglitanzhi = 0;
                                    player
                                        .chooseTarget([1, Infinity], '可选择任意名其他角色,手牌数大于你的须弃置1张手牌,反之你对其造成1点伤害', function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    game.playzm4(['zmaboniya1', 'zmaboniya2', 'zmaboniya3'].randomGet());
                                    game.mp424('zmaboniya');
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                }
                                ('step 4');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        if (targets[i].countCards('h') > player.countCards('h')) {
                                            targets[i].chooseToDiscard(1, 'h', true);
                                        } else {
                                            targets[i].damage(1);
                                        }
                                    }
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmbuhuichonggou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            usable: 1,
                            position: 'he',
                            filterCard: true,
                            selectCard: 1,
                            check(card, player) {
                                var pl = _status.currentPhase;
                                if (card.name == 'du') return 0;
                                return 6 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            content() {
                                'step 0';
                                event.card1 = cards[0];
                                event.cards = get.cards(3);
                                game.cardsGotoOrdering(event.cards);
                                ('step 1');
                                var next = player.chooseCardButton(`可使用${get.translation(event.card1)}交换其中一张牌`, event.cards, [1, 1]).set('filterButton', function (button) {
                                    return true;
                                });
                                next.ai = function (button) {
                                    var player = _status.event.player;
                                    var num = get.value(button.link) - get.value(event.card1);
                                    if (num > 0) return num;
                                    return 0;
                                };
                                ('step 2');
                                if (result.bool) {
                                    ui.cardPile.insertBefore(event.card1, ui.cardPile.firstChild);
                                    player.gain(result.links[0], 'log');
                                    player.$gain2(result.links[0]);
                                }
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.3,
                                order: 12,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmbuhuichonggou_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    _priority: 12,
                                    filter(event, player) {
                                        return true;
                                    },
                                    logTarget: 'player',
                                    check(event, player) {
                                        var num = player.countCards('h', { name: 'tao' }) + 1;
                                        if (get.attitude(player, event.player) <= 0) return false;
                                        if (event.player.hp + num < 0 && event.player != player) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.player == player) {
                                            game.playzm4('zmbuhuichonggou_13');
                                        } else {
                                            game.playzm4(['zmbuhuichonggou_12', 'zmbuhuichonggou_11', 'zmbuhuichonggou_12'].randomGet());
                                        }
                                        player.line(trigger.player, 'green');
                                        trigger.player.recover();
                                        ('step 1');
                                        player.addSkill('zmbuhuichonggou2');
                                        player.storage.zmbuhuichonggou2 = 3;
                                        player.disableSkill('zmbuhuichonggou2', ['zmbuhuichonggou']);
                                    },
                                },
                            },
                        },
                        zmMon3tr: {
                            group: ['zmtleiren', 'zmtyeshou'],
                            nobracket: true,
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            filter(event, player) {
                                if (event.card && event.player != player) {
                                    return get.type(event.card) == 'basic' && player.storage.zmt_np >= 25;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isLinked() && current != player;
                                });
                                player
                                    .chooseControl('无效化', '获得牌', '反结算', '取消')
                                    .set('prompt', '可选择一项效果发动')
                                    .set('choiceList', [`令${get.translation(trigger.card)}对你无效`, `从牌堆中获得一张${get.translation(trigger.card)}的同名牌`, `视为对${get.translation(trigger.player)}使用一张` + get.translation(trigger.card), '取消']).ai = function (event, player) {
                                        if ((get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'sha' && player.isLinked() && num4 > 0 && player.countCards('h', { name: 'shan' }) == 0 && trigger.card.nature == 'fire') || (get.attitude(player, trigger.player) <= 0 && trigger.card.name == 'sha' && player.isLinked() && num4 > 0 && player.countCards('h', { name: 'shan' }) == 0 && trigger.card.nature == 'thunder')) return '无效化';
                                        if (trigger.card.name == 'sha' && ((get.attitude(player, trigger.player) <= 0 && get.effect(trigger.player, trigger.card, player, player) > 0 && player.hp >= 3) || (get.attitude(player, trigger.player) <= 0 && get.effect(trigger.player, trigger.card, player, player) > 0 && !player.hasSkill('zmbumiechonggou2') && trigger.player <= 2) || (get.attitude(player, trigger.player) <= 0 && get.effect(trigger.player, trigger.card, player, player) > 0 && player.countCards('h', { name: 'shan' }) >= 1) || player.countCards('h', { name: 'shan' }) >= 2)) return '反结算';
                                        if (trigger.card.name == 'sha' && (get.attitude(player, trigger.player) > 0 || get.effect(trigger.player, trigger.card, player, player) <= 0 || (player.countCards('h', { name: 'shan' }) == 0 && player.hp <= 2 && get.effect(player, trigger.card, trigger.player, trigger.player) > 0))) return '无效化';
                                        if (trigger.card.name == 'tao' && (get.attitude(player, trigger.player) <= 0 || (get.attitude(player, trigger.player) > 0 && trigger.player.hp >= 4) || (get.attitude(player, trigger.player) > 0 && trigger.player.hp == trigger.player.maxHp))) return '获得牌';
                                        if (player.countCards('h', { name: 'jinchan' }) >= 1 && player.countCards('h') == player.countCards('h', { name: 'jinchan' })) return '取消';
                                        return '取消';
                                    };
                                ('step 1');
                                if (result.control == '取消') {
                                }
                                if (result.control == '无效化') {
                                    player.storage.zmt_np -= 25;
                                    game.playzm4(['zmMon3tr12', 'zmMon3tr12', 'zmMon3tr11'].randomGet());
                                    game.mp424('zmkaierxi');
                                    trigger.cancel();
                                }
                                if (result.control == '获得牌') {
                                    player.storage.zmt_np -= 25;
                                    var card = get.cardPile(function (card) {
                                        return card.name == trigger.card.name;
                                    });
                                    if (card) {
                                        game.playzm4(['zmMon3tr21', 'zmMon3tr21', 'zmMon3tr12'].randomGet());
                                        game.mp424('zmkaierxi');
                                        player.gain(card, 'gain2');
                                    }
                                }
                                if (result.control == '反结算') {
                                    player.storage.zmt_np -= 25;
                                    if (trigger.card.name == 'tao') {
                                        game.playzm4('zmMon3tr21');
                                    } else {
                                        game.playzm4(['zmMon3tr11', 'zmMon3tr32', 'zmMon3tr12', 'zmMon3tr31', 'zmMon3tr11'].randomGet());
                                    }
                                    game.mp424('zmkaierxi');
                                    player.useCard({ name: trigger.card.name }, trigger.player, false);
                                }
                            },
                        },
                        zmbuhuichonggou2: {
                            trigger: {
                                global: 'roundStart',
                            },
                            mark: true,
                            marktext: '构',
                            intro: {
                                content: '#轮后回复【不毁重构】',
                            },
                            usable: 1,
                            init(player) {
                                player.storage.zmbuhuichonggou2 = 0;
                                player.markSkill('zmbuhuichonggou2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.storage.zmbuhuichonggou2 -= 1;
                                player.markSkill('zmbuhuichonggou2');
                                ('step 1');
                                if (player.storage.zmbuhuichonggou2 <= 0) {
                                    player.storage.zmbuhuichonggou2 = 0;
                                    player.removeSkill('zmbuhuichonggou2');
                                    player.enableSkill('zmbuhuichonggou2', ['zmbuhuichonggou']);
                                }
                            },
                        },
                        zmwuxianmingtu: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardBefore',
                            },
                            init(player) {
                                player.storage.zmwuxianmingtu = [];
                                player.storage.zmwuxianmingtu_1 = [];
                            },
                            forced: true,
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (player.storage.zmwuxianmingtu.includes(event.card.name) && !player.hasSkill('zmshijiezhishe_1')) return false;
                                if (get.type(event.card) != 'basic' && get.type(event.card) != 'trick') return false;
                                if (player.countCards('h') < 2) return false;
                                return event.card;
                            },
                            content() {
                                'step 0';
                                var num9 = 0;
                                game.countPlayer(function (current) {
                                    if (current != player && current.countCards('h') && get.attitude(player, current) <= 0) {
                                        num9 += current.countCards('h');
                                    }
                                });
                                player
                                    .chooseCard(`是否选择一张手牌替换${get.translation(trigger.card)}？该牌原效果不变`, 1, 'h', function (card) {
                                        var trigger = _status.event.getTrigger();
                                        return !trigger.cards.includes(card);
                                    })
                                    .set('ai', function (card) {
                                        var card1 = _status.event.getTrigger().cards[0];
                                        if (player.hasSkill('zmshijiezhishe_1') && (trigger.card.name == 'wuzhong' || trigger.card.name == 'zengbing' || get.tag(trigger.card, 'draw')) && num9 <= 2) return 0;
                                        if (player.storage.zmwuxianmingtu_1.length) {
                                            return get.value(card1) - get.value(card) >= 0;
                                        } else {
                                            return get.value(card1) - get.value(card) >= 0;
                                        }
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.cards[0] = result.cards[0];
                                    if (player.storage.zmwuxianmingtu_1.length) {
                                        game.playzm4(['zmwuxianmingtu31', 'zmwuxianmingtu32', 'zmwuxianmingtu33', 'zmwuxianmingtu34', 'zmwuxianmingtu35', 'zmwuxianmingtu36'].randomGet());
                                    } else {
                                        if (trigger.card.name == 'tao' || trigger.card.name == 'shan') {
                                            if (trigger.card.name == 'shan') {
                                                game.playzm4(['zmwuxianmingtu21', 'zmwuxianmingtu22', 'zmwuxianmingtu23', 'zmwuxianmingtu24', 'zmwuxianmingtu25', 'zmwuxianmingtu21'].randomGet());
                                            }
                                            if (trigger.card.name == 'tao') {
                                                game.playzm4(['zmwuxianmingtu11', 'zmwuxianmingtu12', 'zmwuxianmingtu11'].randomGet());
                                            }
                                        } else {
                                            game.playzm4(['zmwuxianmingtu01', 'zmwuxianmingtu02', 'zmwuxianmingtu03', 'zmwuxianmingtu04', 'zmwuxianmingtu05', 'zmwuxianmingtu06'].randomGet());
                                        }
                                    }
                                    player.storage.zmwuxianmingtu.push(trigger.card.name);
                                    player.storage.zmwuxianmingtu_1.push(result.cards[0]);
                                    game.log(player, '使用', result.cards[0], '替换了', trigger.card);
                                }
                            },
                            group: ['zmwuxianmingtu_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseEnd'],
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.zmwuxianmingtu_1.length >= 2) {
                                            event.cards = player.storage.zmwuxianmingtu_1;
                                            player.storage.zmwuxianmingtu_1 = [];
                                            player.chooseCardButton('可选择获得其中一张牌获得', event.cards, 1).set('ai', function (button) {
                                                if (button.link.name == 'du') return false;
                                                return 15 - get.value(button.link);
                                            });
                                        } else {
                                            player.storage.zmwuxianmingtu_1 = [];
                                            player.storage.zmwuxianmingtu = [];
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.links?.length) {
                                            event.cards.remove(result.links[0]);
                                            player.gain(result.links[0], 'gain2');
                                            // game.log(player,'收回了',result.links[0]);
                                            player.storage.zmwuxianmingtu_1 = [];
                                            player.storage.zmwuxianmingtu = [];
                                        } else {
                                            player.storage.zmwuxianmingtu_1 = [];
                                            player.storage.zmwuxianmingtu = [];
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        zmshijiezhishe: {
                            group: ['zmtleiren'],
                            init(player) {
                                player.storage.zmshijiezhishe = 0;
                                player.markSkill('zmshijiezhishe');
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 50 && !player.hasSkill('zmshijiezhishe_1');
                            },
                            check(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np = 0;
                                var t = Math.random();
                                if (t >= 0.47) {
                                    game.playzm4('zmmeibiwusi');
                                    game.mp424('zmmeibiwusi');
                                } else {
                                    game.playzm4('zmmeibiwusi2');
                                    game.mp424('zmmeibiwusi2');
                                }
                                player.addSkill('zmshijiezhishe_1');
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (name == 'roundStart') {
                                            return true;
                                        } else {
                                            var num = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && current.countCards('h')) {
                                                    num += current.countCards('h');
                                                }
                                            });
                                            return event.num >= 1;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        event.num9 = trigger.num;
                                        event.num = 0;
                                        if (event.triggername == 'drawBegin') {
                                            trigger.cancel();
                                            game.countPlayer(function (current) {
                                                if (current != player && current.countCards('h')) {
                                                    event.num += current.countCards('h');
                                                }
                                            });
                                        }
                                        if (event.triggername == 'roundStart') {
                                            player.storage.zmshijiezhishe += 1;
                                            player.markSkill('zmshijiezhishe');
                                        }
                                        ('step 1');
                                        if (event.triggername == 'drawBegin' && event.num == 0) {
                                            trigger.cancel();
                                            event.finish();
                                        }
                                        if (player.storage.zmshijiezhishe >= 2) {
                                            player.storage.zmshijiezhishe = 0;
                                            player.removeSkill('zmshijiezhishe_1');
                                            player.removeSkill('zmshijiezhishe_2');
                                            if (event.triggername == 'roundStart') {
                                                event.finish();
                                            }
                                        }
                                        ('step 2');
                                        if (event.num9 >= 1 && event.num >= 0) {
                                            var str = `获得${event.num9}张其他角色的手牌`;
                                            var dialog = ui.create.dialog(str, 'hidden');
                                            game.countPlayer(function (current) {
                                                if (current != player && current.countCards('h')) {
                                                    dialog.addText(`【${get.translation(current)}】的牌`);
                                                    dialog.add(current.getCards('h'));
                                                }
                                            });
                                            player
                                                .chooseButton(dialog, event.num9, true)
                                                .set('filterButton', function (button) {
                                                    return true;
                                                })
                                                .set('ai', function (button) {
                                                    var player = _status.event.player;
                                                    var owner = get.owner(button.link);
                                                    if (get.attitude(player, owner) > 0) {
                                                        return 2 - get.value(button.link);
                                                    } else {
                                                        return get.value(button.link);
                                                    }
                                                    return -1;
                                                });
                                        } else event.finish();
                                        ('step 3');
                                        if (result.links?.length) {
                                            var list = result.links;
                                            for (var i = 0; i < list.length; i++) {
                                                var owner = get.owner(list[i]);
                                                owner.line(player, { color: [51, 170, 51] });
                                                owner.$give(1, player);
                                                player.gain(list[i], owner);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmchenluanzhuajinshijian: {
                            group: ['zmchenluanzhuajinshijian_3', 'zmchenluanzhuajinshijian_1', 'zmtyeshou', 'zmtleiren'],
                            init(player) {
                                player.storage.zmchenluanzhuajinshijian = [];
                            },
                            mark: true,
                            marktext: '盗',
                            intro: {
                                content(storage, player) {
                                    if (!storage.length) {
                                        return '未记录牌';
                                    } else {
                                        var str = '已记录名称为' + get.translation(storage[0]);
                                        for (var i = 1; i < storage.length; i++) {
                                            str += '、' + get.translation(storage[i]);
                                        }
                                        str += '的牌';
                                        if (player.isUnderControl(true)) {
                                            return str;
                                        }
                                        return '不可见';
                                    }
                                },
                            },
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var card = { name: name };
                                    list.push(lib.inpile[i]);
                                    // list.push(['','',name]);
                                }
                                var dialog = ui.create.dialog('记录一张牌之牌名至你的下个回合开始', 'hidden');
                                dialog.add([list, 'vcard']);
                                var next = player.chooseButton(dialog, true);
                                next.ai = function (button) {
                                    var card = { name: button.link[2] };
                                    var player = _status.event.player;
                                    if (get.type(card, 'trick') != 'basic' && player.storage.zmchenluanzhuajinshijian.length <= 4) return 0;
                                    if (player.storage.zmchenluanzhuajinshijian.length >= 1) {
                                        return get.value(card);
                                    } else {
                                        if (card.name == 'shan') return 1;
                                        return 0;
                                    }
                                };
                                next.filterButton = function (button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2] };
                                    return !player.storage.zmchenluanzhuajinshijian.includes(card.name);
                                };
                                ('step 1');
                                if (result.bool) {
                                    if (!player.hasSkill('zmchenluanzhuajinshijian_2')) {
                                        player.addTempSkill('zmchenluanzhuajinshijian_2');
                                        game.playzm4(['zmchenluanzhuajinshijian1', 'zmchenluanzhuajinshijian2', 'zmchenluanzhuajinshijian3', 'zmchenluanzhuajinshijian4', 'zmchenluanzhuajinshijian5', 'zmchenluanzhuajinshijian6'].randomGet());
                                    }
                                    player.storage.zmt_np -= 10;
                                    var name = result.buttons[0].link[2];
                                    player.storage.zmchenluanzhuajinshijian.push(name);
                                    player.markSkill('zmchenluanzhuajinshijian');
                                }
                            },
                            ai: {
                                threaten: 1,
                                order: 13,
                                result: {
                                    player(player) {
                                        if (player.hp > 1 && player.storage.zmchenluanzhuajinshijian.length >= 2) return 0;
                                        if (player.storage.zmchenluanzhuajinshijian.length >= 3) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊肆/audio:3',
                                    trigger: {
                                        global: 'drawEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        for (var i = 0; i < event.result.length; i++) {
                                            if (player.storage.zmchenluanzhuajinshijian.includes(event.result[i].name)) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        for (var i = 0; i < trigger.result.length; i++) {
                                            if (player.storage.zmchenluanzhuajinshijian.includes(trigger.result[i].name)) {
                                                event.card = trigger.result[i];
                                            }
                                        }
                                        ('step 1');
                                        player
                                            .chooseTarget(`是否令一名角色获得${get.translation(event.card)}？`, function (card, player, target) {
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                if (event.card.name == 'du' && get.attitude(player, trigger.player) > 0) {
                                                    var att = get.attitude(player, target);
                                                    if (target.hp == 1 || target.countCards('h') >= target.getHandcardLimit()) att *= 3;
                                                    return -att;
                                                } else {
                                                    var att = get.attitude(player, target);
                                                    if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                                    if (event.card.name == 'du') return 0;
                                                    if (get.attitude(player, trigger.player) > 0) return 0;
                                                    if (event.card.name == 'shan' && target == player && player.countCards('h', { name: 'shan' }) == 0) att += 3;
                                                    return att;
                                                }
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            player.storage.zmchenluanzhuajinshijian = [];
                                            event.target = result.targets[0];
                                            player.line(trigger.player);
                                            trigger.player.line(event.target);
                                            result.targets[0].gain(event.card, trigger.player, 'giveAuto');
                                            player.markSkill('zmchenluanzhuajinshijian');
                                        }
                                    },
                                },
                                2: {},
                                3: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmchenluanzhuajinshijian = [];
                                        player.markSkill('zmchenluanzhuajinshijian');
                                    },
                                },
                            },
                        },
                        zmhaoleizhunbeikailiu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            init(player) {
                                player.storage.zmhaoleizhunbeikailiu = 0;
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.addTempSkill('zmhaoleizhunbeikailiu_2');
                                if (player.storage.zmchenluanzhuajinshijian.length >= 1) {
                                    player.chooseTarget(
                                        '可选择一名其他角色查看其区域内的牌',
                                        function (card, player, target) {
                                            return player != target && target.countCards('hej') > 0;
                                        },
                                        true
                                    ).ai = function (target) {
                                        var num0 = 0;
                                        var num1 = 0;
                                        var player = _status.event.player;
                                        for (var i = 0; i < target.getCards('j').length; i++) {
                                            game.broadcastAll(function (card) {
                                                var name = card.name;
                                                if (player.storage.zmchenluanzhuajinshijian.includes(name)) {
                                                    num0++;
                                                }
                                            }, target.getCards('j')[i]);
                                        }
                                        for (var i = 0; i < target.getCards('e').length; i++) {
                                            game.broadcastAll(function (card) {
                                                var name = card.name;
                                                if (player.storage.zmchenluanzhuajinshijian.includes(name)) {
                                                    num1++;
                                                }
                                            }, target.getCards('e')[i]);
                                        }
                                        if (player.storage.zmhaoleizhunbeikailiu_1 == target && target.countCards('h') <= player.storage.zmhaoleizhunbeikailiu && game.players.length > 2) return 0;
                                        if (num0 == 0 && num1 == 0) {
                                            var num = target.countCards('h');
                                            return -get.attitude(player, target) * num;
                                        } else {
                                            if (get.attitude(player, target) <= 0 && num1 >= 1) return -1;
                                            if (get.attitude(player, target) > 0 && num0 >= 1) return 1;
                                            return -1;
                                        }
                                    };
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    event.target = result.targets[0];
                                    if (result.targets[0].countCards('h') > 0) {
                                        player.viewCards('偷偷看一眼', result.targets[0].getCards('hej'));
                                    }
                                    var num0 = 0;
                                    for (var i = 0; i < result.targets[0].getCards('hej').length; i++) {
                                        game.broadcastAll(function (card) {
                                            var name = card.name;
                                            if (player.storage.zmchenluanzhuajinshijian.includes(name)) {
                                                num0++;
                                            }
                                        }, result.targets[0].getCards('hej')[i]);
                                    }
                                    if (num0 > 0) {
                                        if (num0 == 1) {
                                            player.storage.zmhaoleizhunbeikailiu = result.targets[0].countCards('h');
                                            player.storage.zmhaoleizhunbeikailiu_1 = result.targets[0];
                                        }
                                        event.goto(3);
                                    } else {
                                        //   player.addTempSkill('zmhaoleizhunbeikailiu_2');
                                        player.storage.zmhaoleizhunbeikailiu = result.targets[0].countCards('h');
                                        player.storage.zmhaoleizhunbeikailiu_1 = result.targets[0];
                                    }
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player
                                    .chooseCardButton(event.target, event.target.getCards('hej'), true)
                                    .set('filterButton', function (button) {
                                        var name = button.link.name;
                                        return player.storage.zmchenluanzhuajinshijian.includes(name);
                                    })
                                    .set('ai', function (button) {
                                        return true;
                                    });
                                ('step 4');
                                if (result.links?.length) {
                                    player.gain(result.links[0], event.target, 'giveAuto');
                                }
                            },
                            group: ['zmhaoleizhunbeikailiu_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmhaoleizhunbeikailiu_1 = [];
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmhaoleizhunbeikailiu = 0;
                                        player.storage.zmhaoleizhunbeikailiu_1 = [];
                                    },
                                },
                                2: {
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (get.tag(card, 'damage')) return false;
                                        },
                                    },
                                },
                            },
                        },
                        zmshimengzhiyuan: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:10',
                            trigger: {
                                global: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (event.num == 0) return false;
                                if (event.num < 0 && event.player.countCards('he') <= 1) return false;
                                if (event.num < 0 && event.player.hp <= 0) return false;
                                return !player.hasSkill('zmshimengzhiyuan_1');
                            },
                            content() {
                                'step 0';
                                event.player1 = player;
                                if (trigger.num <= 0) {
                                    if (player.storage.zmcanguixingtong >= 1) {
                                        trigger.player.chooseControl('回复体力', '取消', true).set('prompt', `是否令${get.translation(player)}获得你两张牌并回复两点体力？`).ai = function (event, player) {
                                            if (get.attitude(trigger.player, event.player1) > 0 && trigger.player.maxHp - trigger.player.hp >= 1) return '回复体力';
                                            return '取消';
                                        };
                                    } else {
                                        trigger.player.chooseControl('回复体力', '取消', true).set('prompt', `是否令${get.translation(player)}获得你两张牌并回复一点体力？`).ai = function (event, player) {
                                            if (get.attitude(trigger.player, event.player1) > 0 && trigger.player.maxHp - trigger.player.hp >= 1) return '回复体力';
                                            return '取消';
                                        };
                                    }
                                } else {
                                    if (player.storage.zmcanguixingtong >= 1) {
                                        trigger.player.chooseControl('摸牌', '取消', true).set('prompt', `是否令${get.translation(player)}获得你一点体力并摸四张牌？`).ai = function (event, player) {
                                            if ((get.attitude(trigger.player, event.player1) > 0 && trigger.player.maxHp - trigger.player.hp == 0 && trigger.player.hp >= 4) || (get.attitude(trigger.player, event.player1) > 0 && trigger.player.hp >= 5) || (get.attitude(trigger.player, event.player1) > 0 && event.player1.hp <= 1 && trigger.player.hp >= 2 && event.player1.maxHp - event.player1.hp >= 1)) return '摸牌';
                                            return '取消';
                                        };
                                    } else {
                                        trigger.player.chooseControl('摸牌', '取消', true).set('prompt', `是否令${get.translation(player)}获得你一点体力并摸两张牌？`).ai = function (event, player) {
                                            if ((get.attitude(trigger.player, event.player1) > 0 && trigger.player.maxHp - trigger.player.hp == 0 && trigger.player.hp >= 4) || (get.attitude(trigger.player, event.player1) > 0 && trigger.player.hp >= 5) || (get.attitude(trigger.player, event.player1) > 0 && event.player1.hp <= 1 && trigger.player.hp >= 2 && event.player1.maxHp - event.player1.hp >= 1)) return '摸牌';
                                            return '取消';
                                        };
                                    }
                                }
                                ('step 1');
                                event.num1 = 0;
                                event.num2 = 0;
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '回复体力') {
                                    trigger.player.line(player);
                                    event.num2 += 1;
                                    if (player.storage.zmcanguixingtong >= 1) {
                                        player.chooseControl('同意', '拒绝', true).set('prompt', `是否获得${get.translation(trigger.player)}两张牌并令其回复两点体力？`).ai = function (event, player) {
                                            if (player.hasSkill('zmshimengzhiyuan_1') && player.hp >= 2) return '拒绝';
                                            if (get.attitude(player, trigger.player) > 0) return '同意';
                                            return '拒绝';
                                        };
                                    } else {
                                        player.chooseControl('同意', '拒绝', true).set('prompt', `是否获得${get.translation(trigger.player)}两张牌并令其回复一点体力？`).ai = function (event, player) {
                                            if (player.hasSkill('zmshimengzhiyuan_1') && player.hp >= 2) return '拒绝';
                                            if (get.attitude(player, trigger.player) > 0) return '同意';
                                            return '拒绝';
                                        };
                                    }
                                }
                                if (result.control == '摸牌') {
                                    trigger.player.line(player);
                                    event.num1 += 1;
                                    if (player.storage.zmcanguixingtong >= 1) {
                                        player.chooseControl('同意', '拒绝', true).set('prompt', `是否获得${get.translation(trigger.player)}一点体力并令其摸四张牌？`).ai = function (event, player) {
                                            if (player.hasSkill('zmshimengzhiyuan_1') && player.hp >= 2) return '拒绝';
                                            if (get.attitude(player, trigger.player) > 0) return '同意';
                                            return '拒绝';
                                        };
                                    } else {
                                        player.chooseControl('同意', '拒绝', true).set('prompt', `是否获得${get.translation(trigger.player)}一点体力并令其摸两张牌？`).ai = function (event, player) {
                                            if (player.hasSkill('zmshimengzhiyuan_1') && player.hp >= 2) return '拒绝';
                                            if (get.attitude(player, trigger.player) > 0) return '同意';
                                            return '拒绝';
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.control == '拒绝') {
                                    player.popup('拒绝');
                                    event.finish();
                                }
                                if (result.control == '同意') {
                                    player.addTempSkill('zmshimengzhiyuan_1');
                                    player.popup('同意');
                                    player.line(trigger.player);
                                    if (event.num1 == 1) {
                                        if (player.storage.zmcanguixingtong >= 1) {
                                            player.storage.zmcanguixingtong -= 1;
                                            trigger.player.loseHp();
                                            player.recover();
                                            trigger.player.draw(4);
                                        } else {
                                            trigger.player.loseHp();
                                            player.recover();
                                            trigger.player.draw(2);
                                        }
                                    }
                                    if (event.num2 == 1) {
                                        if (player.storage.zmcanguixingtong >= 1) {
                                            player.storage.zmcanguixingtong -= 1;
                                            player.gainPlayerCard(2, 'he', trigger.player, true);
                                            trigger.player.recover(2);
                                        } else {
                                            player.gainPlayerCard(2, 'he', trigger.player, true);
                                            trigger.player.recover();
                                        }
                                    }
                                }
                                ('step 3');
                                event.finish();
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmcanguixingtong: {
                            group: ['zmtleiren', 'zmtgaodengliliang'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 60;
                            },
                            init(player) {
                                player.storage.zmcanguixingtong = 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num1 = game.countPlayer(function (current) {
                                    return player.getFriends().includes(current) && current.hp <= 1 && current.countCards('he') >= 4;
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return player.getFriends().includes(current) && current.hp <= 1;
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return player.getFriends().includes(current);
                                });
                                var num4 = game.countPlayer(function (current) {
                                    return player.getEnemies().includes(current) && current.countCards('he') <= 3 && current.hp <= 5;
                                });
                                player.chooseControl('指定角色', '强化效果', '取消').set('prompt', '可选择一项效果发动').set('choiceList', ['指定至多二名其他角色强制与你以【蚀梦之愿】交易,且代价翻倍.', '令之后二次【蚀梦之愿】的收益翻倍', '取消']).ai = function (event, player) {
                                    if ((num3 >= 1 && num4 == 0) || (player.storage.zmcanguixingtong >= 1 && num1 == 0)) return '强化效果';
                                    return '指定角色';
                                };
                                ('step 1');
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                if (result.control == '指定角色') {
                                    player
                                        .chooseTarget([1, 2], '可选择至多两名其他角色强制与你以【蚀梦之愿】交易,且代价翻倍', function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            if (get.attitude(_status.event.player, target) > 0 && target.maxHp - target.hp >= 2 && target.countCards('he') >= 4) return 10;
                                            if (get.attitude(_status.event.player, target) <= 0 && target.countCards('he') >= 4 && target.isDamaged()) return 0;
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                if (result.control == '强化效果') {
                                    player.storage.zmt_np = 0;
                                    game.playzm4('zmtianyinqi1');
                                    game.mp424('zmtianyinqi1');
                                    player.storage.zmcanguixingtong += 2;
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.storage.zmt_np = 0;
                                    game.playzm4(['zmtianyinqi2', 'zmtianyinqi3'].randomGet());
                                    var t = Math.random();
                                    if (t <= 0.5) {
                                        game.mp424('zmtianyinqi2');
                                    }
                                    if (t > 0.5) {
                                        game.mp424('zmtianyinqi3');
                                    }
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                    event.targets.sort(lib.sort.seat);
                                } else event.finish();
                                ('step 3');
                                if (event.targets && event.targets.length) {
                                    event.target1 = event.targets.shift();
                                } else event.finish();
                                ('step 4');
                                if (player.storage.zmcanguixingtong >= 1) {
                                    var list1 = ['摸牌', '回复体力'];
                                    event.target1.chooseControl(list1, true).set('prompt', '可选择一项效果发动').set('choiceList', ['令天音祈获得你两点体力后摸四张牌.', '令天音祈获得你四张牌后回复两点体力.']).ai = function (event, player) {
                                        return '回复体力';
                                    };
                                } else {
                                    var list1 = ['摸牌', '回复体力'];
                                    event.target1.chooseControl(list1, true).set('prompt', '可选择一项效果发动').set('choiceList', ['令天音祈获得你两点体力后摸两张牌.', '令天音祈获得你四张牌后回复一点体力.']).ai = function (event, player) {
                                        if (event.target1.hp >= 7) return '摸牌';
                                        return '回复体力';
                                    };
                                }
                                ('step 5');
                                if (player.storage.zmcanguixingtong >= 1) {
                                    player.storage.zmcanguixingtong -= 1;
                                    if (result.control == '摸牌') {
                                        if (event.target1.hp <= 1) {
                                            event.target1.loseHp();
                                        }
                                        event.target1.loseHp(2);
                                        player.recover(2);
                                        event.target1.draw(2);
                                        event.goto(3);
                                    }
                                    if (result.control == '回复体力') {
                                        if (event.target1.countCards('he') <= 3) {
                                            event.target1.loseHp();
                                        }
                                        event.target1.recover();
                                        player.gainPlayerCard(4, 'he', event.target1, true);
                                        event.goto(3);
                                    }
                                } else {
                                    if (result.control == '摸牌') {
                                        if (event.target1.hp <= 1) {
                                            event.target1.loseHp();
                                        }
                                        event.target1.loseHp(2);
                                        player.recover(2);
                                        event.target1.draw(4);
                                        event.goto(3);
                                    }
                                    if (result.control == '回复体力') {
                                        if (event.target1.countCards('he') <= 3) {
                                            event.target1.loseHp();
                                        }
                                        event.target1.recover();
                                        player.gainPlayerCard(4, 'he', event.target1, true);
                                        event.goto(3);
                                    }
                                }
                            },
                        },
                        zmxingyunchaoxi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:7',
                            trigger: {
                                player: 'drawBegin',
                            },
                            _priority: -5,
                            filter(event, player) {
                                if (game.fixedPile) return false;
                                if (event.num <= 0) return false;
                                if (ui.cardPile.childNodes.length == 0) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hp <= player.maxHp / 2) {
                                    var card = ui.cardPile.firstChild;
                                    if (lib.inpile.includes(card.name)) {
                                        for (var i = 1; i < ui.cardPile.childElementCount; i++) {
                                            var card2 = ui.cardPile.childNodes[i];
                                            if (get.color(card2) == 'red') {
                                                ui.cardPile.insertBefore(card2, card);
                                            }
                                        }
                                    } else {
                                        card.init([['heart', 'diamond'].randomGet(), card.number, card.name, card.nature]);
                                    }
                                } else {
                                    var card = ui.cardPile.firstChild;
                                    if (lib.inpile.includes(card.name)) {
                                        for (var i = 1; i < ui.cardPile.childElementCount; i++) {
                                            var card2 = ui.cardPile.childNodes[i];
                                            if (get.color(card2) == 'black') {
                                                ui.cardPile.insertBefore(card2, card);
                                            }
                                        }
                                    } else {
                                        card.init([['club', 'spade'].randomGet(), card.number, card.name, card.nature]);
                                    }
                                }
                            },
                        },
                        zmyuexiangtiancheng: {
                            group: ['zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hp == 0) return false;
                                if (player.storage.zmt_np < 30) return false;
                                var num1 = player.maxHp / 2;
                                if (event.num == 0) return false;
                                return (event.num < 0 && player.hp - event.num >= num1 && player.hp <= num1) || (event.num > 0 && player.hp - event.num <= num1 && player.hp >= num1);
                            },
                            content() {
                                'step 0';
                                var num1 = player.maxHp;
                                event.num = player.hp;
                                if (trigger.num < 0) {
                                    player
                                        .chooseTarget([1, num1], `可选择至多${get.translation(num1)}名角色令他们弃置${get.translation(event.num)}张牌`, function (card, player, target) {
                                            return target.countCards('he');
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                } else {
                                    player
                                        .chooseTarget([1, num1], `可选择至多${get.translation(num1)}名角色令他们摸${get.translation(event.num)}张牌`, function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.zmt_np -= 30;
                                    if (trigger.num < 0) {
                                        game.playzm4('zmweijina1');
                                        game.mp424('zmweijina1');
                                    } else {
                                        game.playzm4('zmweijina2');
                                        game.mp424('zmweijina2');
                                    }
                                    player.line(result.targets);
                                    event.targets = result.targets;
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < targets.length; i++) {
                                        if (trigger.num < 0) {
                                            targets[i].chooseToDiscard(event.num, 'he', true);
                                        } else {
                                            targets[i].draw(event.num);
                                        }
                                    }
                                }
                            },
                        },
                        zmjinhualun: {
                            mod: {
                                maxHandcard(player, num) {
                                    var num2 = player.hp + 1;
                                    return num2;
                                },
                            },
                            nobracket: true,
                            group: ['zmjinhualun_2', 'zmjinhualun_1', 'zmtgaodengliliang', 'zmtrenxing'],
                            init(player) {
                                player.storage.zmjinhualun = true;
                            },
                            trigger: {
                                player: 'changeHp',
                            },
                            forced: true,
                            fixed: true,
                            superCharlotte: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.num != 0;
                            },
                            content() {
                                'step 0';
                                var num = player.hp + 1;
                                player.storage.zmjinhualun = false;
                                if (player.maxHp < num) {
                                    game.playzm4(['zmjinhualun1', 'zmjinhualun2', 'zmjinhualun3', 'zmjinhualun4', 'zmjinhualun4'].randomGet());
                                    var num1 = num - player.maxHp;
                                    player.gainMaxHp(num1)._triggered = null;
                                } else {
                                    if (player.hp >= 0) {
                                        var num1 = player.maxHp - num;
                                        player.loseMaxHp(num1)._triggered = null;
                                    }
                                }
                                ('step 1');
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
                                var link = skills.randomGet();
                                player.addTempSkill(link, 'roundStart');
                                game.log(player, '获得了技能', `【${get.translation(link)}】直到本轮结束`);
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['phaseBefore'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    fixed: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.hp != player.maxHp - 1;
                                    },
                                    content() {
                                        var num = player.hp + 1;
                                        // player.storage.zmjinhualun=false;
                                        if (player.maxHp < num) {
                                            var num1 = num - player.maxHp;
                                            player.gainMaxHp(num1)._triggered = null;
                                        } else {
                                            if (player.hp >= 0) {
                                                var num1 = player.maxHp - num;
                                                player.loseMaxHp(num1)._triggered = null;
                                            }
                                        }
                                    },
                                    popup: false,
                                },
                                2: {
                                    trigger: {
                                        player: ['loseMaxHpBegin', 'gainMaxHpBegin'],
                                    },
                                    firstDo: true,
                                    silent: true,
                                    forced: true,
                                    fixed: true,
                                    superCharlotte: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        game.log(player, '无效了体力上限的变化');
                                        trigger.cancel();
                                    },
                                    popup: false,
                                },
                            },
                        },
                        zmtianyantulu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 10) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 10;
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(target, current) <= 0 && get.distance(target, current, 'attack') <= 1;
                                });
                                var list = ['伤害', '判定', '弃置'];
                                target
                                    .chooseControl('伤害', '回复', '距离', '判定', '弃置', function () {
                                        if (target.hp <= 2 && target.isDamaged()) return '回复';
                                        if (target.hp > 2 && num4 == 0) return '距离';
                                        return list.randomGet();
                                    })
                                    .set('prompt', '选择一项关键词,之后你随机获得一张描述与之相关的牌');
                                ('step 1');
                                var a1 = get.typeCard('trick');
                                var a2 = get.typeCard('basic');
                                var a3 = get.typeCard('equip');
                                var a4 = get.typeCard('delay');
                                var c = [];
                                for (var i = 0; i < a1.length; i++) {
                                    c.push(a1[i]);
                                }
                                for (var i = 0; i < a2.length; i++) {
                                    c.push(a2[i]);
                                }
                                for (var i = 0; i < a3.length; i++) {
                                    c.push(a3[i]);
                                }
                                for (var i = 0; i < a4.length; i++) {
                                    c.push(a4[i]);
                                }
                                //var c=lib.inpile; 仅牌堆取值
                                if (result.control == '回复') {
                                    var t = lib.translate;
                                    var l = [];
                                    var w = ['回', '复'];
                                    for (var i = 0; i < c.length; i++) {
                                        var str = t[c[i] + '_info'];
                                        for (var j = 0; j < str.length; j++) {
                                            if (str[j] == w[0] && str[j + 1] == w[1]) {
                                                l.push(c[i]);
                                                break;
                                            }
                                        }
                                    }
                                    var card = game.createCard(l.randomGet());
                                    target.gain(card, 'gain2');
                                }
                                if (result.control == '伤害') {
                                    var t = lib.translate;
                                    var l = [];
                                    var w = ['伤', '害'];
                                    for (var i = 0; i < c.length; i++) {
                                        var str = t[c[i] + '_info'];
                                        for (var j = 0; j < str.length; j++) {
                                            if (str[j] == w[0] && str[j + 1] == w[1]) {
                                                l.push(c[i]);
                                                break;
                                            }
                                        }
                                    }
                                    var card = game.createCard(l.randomGet());
                                    target.gain(card, 'gain2');
                                }
                                if (result.control == '距离') {
                                    var t = lib.translate;
                                    var l = [];
                                    var w = ['距', '离'];
                                    for (var i = 0; i < c.length; i++) {
                                        var str = t[c[i] + '_info'];
                                        for (var j = 0; j < str.length; j++) {
                                            if (str[j] == w[0] && str[j + 1] == w[1]) {
                                                l.push(c[i]);
                                                break;
                                            }
                                        }
                                    }
                                    var card = game.createCard(l.randomGet());
                                    target.gain(card, 'gain2');
                                }
                                if (result.control == '判定') {
                                    var t = lib.translate;
                                    var l = [];
                                    var w = ['判', '定'];
                                    for (var i = 0; i < c.length; i++) {
                                        var str = t[c[i] + '_info'];
                                        for (var j = 0; j < str.length; j++) {
                                            if (str[j] == w[0] && str[j + 1] == w[1]) {
                                                l.push(c[i]);
                                                break;
                                            }
                                        }
                                    }
                                    var card = game.createCard(l.randomGet());
                                    target.gain(card, 'gain2');
                                }
                                if (result.control == '弃置') {
                                    var t = lib.translate;
                                    var l = [];
                                    var w = ['弃', '置'];
                                    for (var i = 0; i < c.length; i++) {
                                        var str = t[c[i] + '_info'];
                                        for (var j = 0; j < str.length; j++) {
                                            if (str[j] == w[0] && str[j + 1] == w[1]) {
                                                l.push(c[i]);
                                                break;
                                            }
                                        }
                                    }
                                    var card = game.createCard(l.randomGet());
                                    target.gain(card, 'gain2');
                                    player.storage.zmtianyantulu_1.push(card);
                                    player.markSkill('zmtianyantulu_1');
                                    // card._destroy='zmtianyantulu';
                                }
                                ('step 2');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var num = 0;
                                        if (target.hp <= 2) num += 2;
                                        if (target.hp <= 1) num += 2;
                                        if (target == player && target.hp <= 2) num += 1;
                                        if (target.countCards('h') < 3) num += 1;
                                        if (get.attitude(player, target) <= 0) return 0;
                                        if ((get.attitude(player, target) > 0 && target.hp >= 4 && target.countCards('h') >= 3) || (target.hp == 3 && get.attitude(player, target) > 0 && target.countCards('h') >= 4) || (target.hp <= 2 && get.attitude(player, target) > 0 && target.countCards('h') >= 5)) return 0;
                                        return 1 + Math.abs(num);
                                    },
                                },
                                threaten: 2,
                            },
                            group: ['zmtianyantulu_1', 'zmtianyantulu_2'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmtianyantulu_1 = [];
                                    },
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    forceDie: true,
                                    filter(event, player) {
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (player.storage.zmtianyantulu_1.includes(i) && get.position(i) == 'd') {
                                                    if (event.type == 'gain') return false;
                                                    if (get.type(i) == 'equip' && event.type == 'use') return false;
                                                    if (get.type(i) == 'delay' && event.type == 'use') return false;
                                                    return true;
                                                }
                                            }
                                        return false;
                                    },
                                    content() {
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (player.storage.zmtianyantulu_1.includes(i) && trigger.type != 'gain') {
                                                    if ((get.type(i) == 'equip' && trigger.type == 'use') || (get.type(i) == 'delay' && trigger.type == 'use')) {
                                                    } else {
                                                        player.storage.zmtianyantulu_1.remove(i);
                                                        game.cardsGotoSpecial(i);
                                                    }
                                                }
                                            }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'gainBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(1).name == 'zmtianyantulu';
                                    },
                                    content() {
                                        var card = trigger.cards;
                                        for (var i = 0; i < card.length; i++) {
                                            if (!player.storage.zmtianyantulu_1.includes(card[i])) {
                                                player.storage.zmtianyantulu_1.push(card[i]);
                                                player.markSkill('zmtianyantulu_1');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        zmfushuigaitian: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            trigger: {
                                global: 'useCardAfter',
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
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (!event.cards || event.cards.length != 1) return false;
                                if (get.position(event.cards[0]) != 'd' || event.cards.length != 1) return false;
                                if (get.type(event.card) != 'trick') return false;
                                var list = player.getExpansions('zmfushuigaitian');
                                for (var i = 0; i < list.length; i++) {
                                    if (list[i].suit == event.cards[0].suit) return false;
                                }
                                return player.getExpansions('zmfushuigaitian').length <= 3 && event.card;
                            },
                            content() {
                                if (trigger.card.isCard) {
                                    player.addToExpansion(trigger.cards[0], player, 'draw').gaintag.add('zmfushuigaitian');
                                    game.log(player, '将', trigger.card, '置于武将牌上');
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                            group: ['zmfushuigaitian_1', 'zmfushuigaitian_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmfushuigaitian').length <= 3;
                                    },
                                    content() {
                                        'step 0';
                                        var num4 = 0;
                                        var diamond = 0;
                                        if (player.countCards('hej', { suit: 'diamond' }) >= 1) {
                                            diamond = 1;
                                        }
                                        var heart = 0;
                                        if (player.countCards('hej', { suit: 'heart' }) >= 1) {
                                            heart = 1;
                                        }
                                        var spade = 0;
                                        if (player.countCards('hej', { suit: 'spade' }) >= 1) {
                                            spade = 1;
                                        }
                                        var club = 0;
                                        if (player.countCards('hej', { suit: 'club' }) >= 1) {
                                            club = 1;
                                        }
                                        var num0 = 0;
                                        var list = player.getExpansions('zmfushuigaitian');
                                        var list2 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            if (list[i].suit == 'diamond') {
                                                diamond = 0;
                                            }
                                            if (list[i].suit == 'heart') {
                                                heart = 0;
                                            }
                                            if (list[i].suit == 'spade') {
                                                spade = 0;
                                            }
                                            if (list[i].suit == 'club') {
                                                club = 0;
                                            }
                                            list2.add(list[i].suit);
                                        }
                                        num0 = diamond + heart + spade + club;
                                        if (player.getExpansions('zmfushuigaitian').length >= 1) {
                                            num4 = player.getExpansions('zmfushuigaitian').length;
                                        }
                                        if (num0 + num4 >= 4) {
                                            var num1 = 4 - player.getExpansions('zmfushuigaitian').length;
                                            if (event.dialog) event.dialog.close();
                                            var dialog = ui.create.dialog(`是否将${num1}张花色符合的牌置于武将牌上？否则将移除所有以此法放置的牌`, player.getCards('he'));
                                            player.chooseButton(num1, dialog, false).set('ai', function (button) {
                                                return 7 - get.value(button.link);
                                            }).filterButton = function (button) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                                }
                                                return !list2.includes(button.link.suit);
                                            };
                                        } else {
                                            var cards = player.getExpansions('zmfushuigaitian');
                                            player.loseToDiscardpile(cards);
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.links?.length) {
                                            player.addToExpansion(result.links, player, 'give').gaintag.add('zmfushuigaitian');
                                            game.log(player, '将', result.cards, '置于武将牌上');
                                        } else {
                                            var cards = player.getExpansions('zmfushuigaitian');
                                            player.loseToDiscardpile(cards);
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.getExpansions('zmfushuigaitian').length >= 4 && event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseControl('加一', '减一', '取消').set('prompt', `是否移除以【浪涌荒流】放置的牌令${get.translation(trigger.player)}受到的${get.translation(trigger.num)}点伤害+1或-1？`).ai = function (event, player) {
                                            if (get.attitude(player, trigger.player) <= 0 && trigger.num <= trigger.player.hp && !trigger.player.getEquip('baiyin')) return '加一';
                                            if ((get.attitude(player, trigger.player) > 0 && trigger.num <= trigger.player.hp + 1) || trigger.player == player) return '减一';
                                            return '取消';
                                        };
                                        ('step 1');
                                        if (result.control == '加一') {
                                            game.playzm4(['zmfushuigaitian_211', 'zmfushuigaitian_212'].randomGet());
                                            var cards = player.getExpansions('zmfushuigaitian');
                                            player.loseToDiscardpile(cards);
                                            player.line(trigger.player, { color: [102, 153, 204] });
                                            trigger.num++;
                                        }
                                        if (result.control == '减一') {
                                            game.playzm4(['zmfushuigaitian_221', 'zmfushuigaitian_222'].randomGet());
                                            var cards = player.getExpansions('zmfushuigaitian');
                                            player.loseToDiscardpile(cards);
                                            player.line(trigger.player, { color: [102, 153, 204] });
                                            trigger.num--;
                                        }
                                    },
                                },
                            },
                        },
                        zmhuangushuishi: {
                            group: ['zmtshenxing', 'zmtyuansu', 'zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard(card, player, target) {
                                var player = _status.event.player;
                                var num = Math.ceil(player.countCards('h') / 2);
                                return num;
                            },
                            discard: false,
                            lose: false,
                            delay: 0,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h');
                            },
                            check(card) {
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                return 6 - get.value(card);
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = Math.ceil(target.countCards('h') / 2);
                                ('step 1');
                                if (player.storage.zmt_np >= 25) {
                                    player.storage.zmt_np = 0;
                                    game.playzm4('zmgonggong');
                                    game.mp424('zmgonggong');
                                    event.num++;
                                    player.chooseCardButton(`获得${get.translation(target)}的${event.num}张手牌`, target.getCards('h'), event.num, true).ai = function (button) {
                                        return 15 - get.value(button.link);
                                    };
                                } else {
                                    game.playzm4(['zmhuanggushuishi1', 'zmhuanggushuishi2', 'zmhuanggushuishi3', 'zmhuanggushuishi4', 'zmhuanggushuishi5'].randomGet());
                                    player.gainPlayerCard(target, event.num, 'h', true);
                                    target.gain(cards, player, 'giveAuto');
                                    var evt2 = event.getParent(3);
                                    var num = 0;
                                    player.getHistory('lose', function (evt) {
                                        if (evt.getParent(2).name == 'rende' && evt.getParent(5) == evt2) num += evt.cards.length;
                                    });
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    player.gain(result.links, target);
                                    target.$giveAuto(result.links, player);
                                    game.log(player, '与', target, '交换了手牌');
                                } else event.finish();
                                ('step 3');
                                target.gain(cards, player, 'giveAuto');
                                var evt2 = event.getParent(3);
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.getParent(2).name == 'rende' && evt.getParent(5) == evt2) num += evt.cards.length;
                                });
                                ('step 4');
                            },
                            ai: {
                                order(skill, player) {
                                    return 1;
                                },
                                result: {
                                    target(player, target) {
                                        var num;
                                        var num1 = Math.ceil(player.countCards('h') / 2);
                                        var num2 = Math.ceil(target.countCards('h') / 2);
                                        if (num1 > num2) {
                                            num = 0;
                                        } else {
                                            num = 1 + (num2 - num1);
                                        }
                                        if (get.attitude(player, target) > 0) return 0;
                                        return -num;
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        zmxingkaizhuxing: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:1',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            _priority: 25,
                            forced: true,
                            init(player) {
                                player.storage.zmxingkaizhuxing = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            filter(event, player) {
                                return player.storage.zmxingkaizhuxing.length <= 3 && player.countCards('h');
                            },
                            content() {
                                'step 0';
                                var num = 4 - player.storage.zmxingkaizhuxing.length;
                                var next = player.chooseCardButton(player, player.getCards('h'), `可选择至多${get.translation(num)}张名称未记录的手牌记录之`, [1, num]).set('ai', function (button) {
                                    return 20 - get.value(button.link);
                                });
                                next.filterButton = function (button) {
                                    var player = _status.event.player;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (button.link.name == ui.selected.buttons[i].link.name) return false;
                                    }
                                    for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                        if (button.link.name == player.storage.zmxingkaizhuxing[i].name) {
                                            return false;
                                        }
                                    }
                                    return !player.storage.zmxingkaizhuxing.includes(button.link);
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    for (var i of result.links) {
                                        if (!player.storage.zmxingkaizhuxing.includes(i)) {
                                            player.storage.zmxingkaizhuxing.push(i);
                                            player.markSkill('zmxingkaizhuxing');
                                        }
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            group: ['zmxingkaizhuxing_1', 'zmtgaodengliliang', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num1 = player.countCards('h');
                                        if (player.storage.zmxingkaizhuxing.length >= 1) {
                                            for (var i = 0; i < player.getCards('h').length; i++) {
                                                game.broadcastAll(function (card) {
                                                    for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                        if (card.name && card.name == player.storage.zmxingkaizhuxing[i].name) {
                                                            num1--;
                                                        }
                                                    }
                                                }, player.getCards('h')[i]);
                                            }
                                        }
                                        if (player.storage.zmt_np < 25 && num1 == 0) return false;
                                        return (player.countCards('h') && player.storage.zmt_np < 25) || (player.storage.zmt_np >= 25 && player.storage.zmxingkaizhuxing.length >= 1);
                                    },
                                    content() {
                                        'step 0';
                                        event.num2 = 0;
                                        ('step 1');
                                        var num1 = player.countCards('h');
                                        event.num = 0;
                                        for (var i = 0; i < player.getCards('h').length; i++) {
                                            game.broadcastAll(function (card) {
                                                for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                    if (card.name && card.name == player.storage.zmxingkaizhuxing[i].name) {
                                                        num1--;
                                                    }
                                                }
                                            }, player.getCards('h')[i]);
                                        }
                                        if (player.storage.zmt_np >= 25 && event.num2 == 0) {
                                            event.goto(4);
                                        } else {
                                            if (num1 >= 1) {
                                                if (player.storage.zmxingkaizhuxing.length >= 4) {
                                                    event.num += 1;
                                                    var next = player.chooseCardButton(player, player.getCards('h'), `可选择一张名称未记录的手牌替换${get.translation(player.storage.zmxingkaizhuxing)}中的一张牌`, 1).set('ai', function (button) {
                                                        var num9 = 99;
                                                        var player = _status.event.player;
                                                        for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                            //var card={name:player.storage.zmxingkaizhuxing[i]};
                                                            var num8 = get.value(player.storage.zmxingkaizhuxing[i]);
                                                            if (num9 < num8) {
                                                                num9 = num8;
                                                            }
                                                        }
                                                        if (get.value(button.link) <= num8) return false;
                                                        return 20 - get.value(button.link);
                                                    });
                                                    next.filterButton = function (button) {
                                                        var player = _status.event.player;
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            if (button.link.name == ui.selected.buttons[i].link.name) return false;
                                                        }
                                                        for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                            if (button.link.name == player.storage.zmxingkaizhuxing[i].name) {
                                                                return false;
                                                            }
                                                        }
                                                        return !player.storage.zmxingkaizhuxing.includes(button.link);
                                                    };
                                                }
                                                if (player.storage.zmxingkaizhuxing.length <= 3) {
                                                    var next = player.chooseCardButton(player, player.getCards('h'), '可选择至多一张名称未记录的手牌记录之', 1).set('ai', function (button) {
                                                        if (button.link.name == 0) return false;
                                                        return 20 - get.value(button.link);
                                                    });
                                                    next.filterButton = function (button) {
                                                        var player = _status.event.player;
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            if (button.link.name == ui.selected.buttons[i].link.name) return false;
                                                        }
                                                        for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                            if (button.link.name == player.storage.zmxingkaizhuxing[i].name) {
                                                                return false;
                                                            }
                                                        }
                                                        return !player.storage.zmxingkaizhuxing.includes(button.link);
                                                    };
                                                }
                                            } else {
                                                event.finish();
                                            }
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            game.playzm4(['zmxingkaizhuxing_1', 'zmxingkaizhuxing_2', 'zmxingkaizhuxing_3', 'zmxingkaizhuxing_4', 'zmxingkaizhuxing_5', 'zmxingkaizhuxing_1'].randomGet());
                                            for (var i of result.links) {
                                                if (!player.storage.zmxingkaizhuxing.includes(i)) {
                                                    player.storage.zmxingkaizhuxing.push(i);
                                                    player.markSkill('zmxingkaizhuxing');
                                                }
                                            }
                                            if (event.num >= 1) {
                                                var next = player.chooseCardButton(player.storage.zmxingkaizhuxing, '须选择1张记录的牌移除之', [1, 1], true).set('ai', function (button) {
                                                    return 8 - get.value(button.link);
                                                });
                                            } else event.finish();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 3');
                                        if (result.bool && event.num >= 1) {
                                            for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                if (result.links[0] == player.storage.zmxingkaizhuxing[i]) {
                                                    player.storage.zmxingkaizhuxing.remove(result.links[0]);
                                                    player.markSkill('zmxingkaizhuxing');
                                                    event.finish();
                                                }
                                            }
                                        }
                                        ('step 4');
                                        if (player.storage.zmxingkaizhuxing.length >= 1) {
                                            player
                                                .chooseControl('确定', '取消', function () {
                                                    var num = 0;
                                                    var num1 = 0;
                                                    var player = _status.event.player;
                                                    var hs = player.getCards('h');
                                                    for (var i = 0; i < hs.length; i++) {
                                                        var num9 = get.value(hs[i]);
                                                        num1 += num9;
                                                    }
                                                    for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                        //var card={name:player.storage.zmxingkaizhuxing[i]};
                                                        var num8 = get.value(player.storage.zmxingkaizhuxing[i]);
                                                        num += num8;
                                                    }
                                                    if (num - num1 >= 3 || (player.hp == 1 && num - num1 >= 2)) return '确定';
                                                    return '取消';
                                                })
                                                .set('prompt', `是否将你的手牌替换为${get.translation(player.storage.zmxingkaizhuxing)}？`);
                                        } else event.finish();
                                        ('step 5');
                                        if (result.control == '确定') {
                                            player.storage.zmt_np -= 25;
                                            game.mp424('zmyoulandaier2');
                                            var num5 = player.storage.zmxingkaizhuxing.length;
                                            for (var i = 0; i < player.storage.zmxingkaizhuxing.length; i++) {
                                                player.storage.zmxingkaizhuxing[i] = game.createCard(player.storage.zmxingkaizhuxing[i]);
                                            }
                                            var cards = player.getCards('h');
                                            if (Array.isArray(cards))
                                                for (var i of cards) {
                                                    i.discard();
                                                }
                                            player.$draw(num5);
                                            player.directgain(player.storage.zmxingkaizhuxing);
                                        }
                                        if (result.control == '取消') {
                                            event.num2 += 1;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        zmshiguanxinghuang: {
                            nobracket: true,
                            trigger: {
                                player: 'shaBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                var red = player.countCards('hej', { color: 'red' });
                                var black = player.countCards('hej', { color: 'black' });
                                var ht = player.countCards('hej', { suit: 'heart' });
                                var mh = player.countCards('hej', { suit: 'club' });
                                var hh = player.countCards('hej', { suit: 'spade' });
                                var fp = player.countCards('hej', { suit: 'diamond' });
                                return (player.countCards('hej') > 1 && red > 0 && black > 0) || (player.countCards('hej') > 1 && ht > 0 && hh > 0 && mh > 0 && fp > 0);
                            },
                            _priority: 1,
                            content() {
                                'step 0';
                                event.num = 0;
                                var red = player.countCards('hej', { color: 'red' });
                                var black = player.countCards('hej', { color: 'black' });
                                var ht = player.countCards('hej', { suit: 'heart' });
                                var mh = player.countCards('hej', { suit: 'club' });
                                var hh = player.countCards('hej', { suit: 'spade' });
                                var fp = player.countCards('hej', { suit: 'diamond' });
                                if (player.countCards('hej') > 1 && ht > 0 && hh > 0 && mh > 0 && fp > 0) {
                                    event.num += 1;
                                }
                                if (player.countCards('hej') > 1 && red > 0 && black > 0) {
                                    event.num += 1;
                                }
                                ('step 1');
                                if (event.num >= 1) {
                                    if (event.num == 1) {
                                        game.playzm4(['zmshiguanxinghuang11', 'zmshiguanxinghuang12', 'zmshiguanxinghuang13', 'zmshiguanxinghuang14'].randomGet());
                                    }
                                    player.addTempSkill('unequip', 'shaAfter');
                                    if (event.num >= 2) {
                                        if (!player.hasSkill('zmshiguanxinghuang_1')) {
                                            game.playzm4('zmyoulandaier');
                                            game.mp424('zmyoulandaier');
                                        } else {
                                            game.playzm4(['zmshiguanxinghuang11', 'zmshiguanxinghuang12', 'zmshiguanxinghuang13', 'zmshiguanxinghuang14'].randomGet());
                                        }
                                        player.addTempSkill('zmshiguanxinghuang_1');
                                        trigger.baseDamage++;
                                    }
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmmingdingzhisi: {
                            group: ['zmtyeshou', 'zmtgaodengliliang'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            init(player) {
                                player.storage.zmmingdingzhisi = false;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 50;
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'sha' }, player) > 0 && (player.countCards('h', { name: 'sha' }) >= 1 || player.countCards('h', { name: 'juedou' }) >= 1);
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && get.distance(player, current, 'attack') <= 1 && get.effect(current, { name: 'juedou' }, player) > 0 && player.countCards('h', { name: 'juedou' }) >= 1;
                                });
                                if (player.hp >= 2 && num == 0 && num1 == 0) return false;
                                return !player.hasSkill('zmmingdingzhisi_1');
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 50;
                                if (player.storage.zmmingdingzhisi == false) {
                                    game.playzm4('zmmalikasi1');
                                    game.mp424('zmmalikasi1');
                                    player.storage.zmmingdingzhisi = true;
                                } else {
                                    game.playzm4('zmmalikasi2');
                                    game.mp424('zmmalikasi2');
                                }
                                player.addTempSkill('zmmingdingzhisi_1');
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'black';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return get.color(card) == 'black';
                                });
                                if (card) {
                                    player.gain(card, 'gain2');
                                }
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊肆/audio:3',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    check(event, player) {
                                        var num1 = player.countUsed(null, true);
                                        var num = Math.ceil((num1 / 10) * event.player.maxHp);
                                        return get.attitude(player, event.player) <= 0 && num >= event.num;
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        var num1 = player.countUsed(null, true);
                                        var num = Math.ceil((num1 / 10) * event.player.maxHp);
                                        str += ` ${get.translation(event.player)}即将受到${event.num}点伤害,是否改为${num}点？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        return true;
                                    },
                                    content() {
                                        var num1 = player.countUsed(null, true);
                                        if (event.triggername == 'damageBegin1') {
                                            var num = Math.ceil((num1 / 10) * trigger.player.maxHp);
                                            trigger.num = num;
                                        } else {
                                        }
                                    },
                                },
                            },
                        },
                        zmheijianyeshou: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:7',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                return player.countUsed(null, true) > 0 && suits.length && player.countCards('he') >= suits.length;
                            },
                            content() {
                                'step 0';
                                var history = player.getHistory('useCard', function (evt) {
                                    return evt.isPhaseUsing();
                                });
                                var suits = [];
                                for (var i = 0; i < history.length; i++) {
                                    var suit = history[i].card.suit;
                                    if (suit) suits.add(suit);
                                }
                                var num1 = suits.length;
                                event.num = player.countUsed(null, true);
                                player
                                    .chooseToDiscard(`是否弃置${num1}张牌后摸${event.num}张牌？且你可立即使用至多等量的牌`, num1, 'he', false, function (card) {
                                        return true;
                                    })
                                    .set('ai', function (card) {
                                        var num2 = event.num - num1;
                                        if (player.hasSkill('zmmingdingzhisi_1')) {
                                            return 6 + num2 - get.value(card);
                                        } else {
                                            return 5 + num2 - get.value(card);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.draw(event.num);
                                } else event.finish();
                                ('step 2');
                                event.num--;
                                player.chooseToUse();
                                ('step 3');
                                if (event.num > 0) {
                                    event.goto(2);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        zmshouxueyishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current.hasSkill('zmshouxueyishi_2') && current.getExpansions('zmshouxueyishi_2').length >= 3;
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                game.countPlayer(function (current) {
                                    if (current.hasSkill('zmshouxueyishi_2') && current.getExpansions('zmshouxueyishi_2').length >= 1) {
                                        player.line(current, { color: [214, 0, 0] });
                                        var num = current.getExpansions('zmshouxueyishi_2').length;
                                        if (current.countCards('he', { color: 'red' }) < num) {
                                            current.loseHp();
                                        }
                                        if (current.countCards('he', { color: 'red' }) >= 1) {
                                            var num1 = current.countCards('he', { color: 'red' });
                                            if (current.countCards('he', { color: 'red' }) >= num) {
                                                current.chooseToDiscard(num, 'he', true, function (card, player) {
                                                    return get.color(card) == 'red';
                                                });
                                            } else {
                                                current.chooseToDiscard([num1, num], 'he', true, function (card, player) {
                                                    return get.color(card) == 'red';
                                                });
                                            }
                                        }
                                        var cards = current.getExpansions('zmshouxueyishi_2');
                                        current.loseToDiscardpile(cards);
                                    }
                                });
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['zmshouxueyishi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        //if(event.type!='use') return false;
                                        if (get.type(event.card) == 'delay' || get.type(event.card) == 'equip') return false;
                                        if (Array.isArray(event.cards))
                                            for (var i of event.cards) {
                                                if (get.position(i) == 'd' && get.color(i) == 'red') return true;
                                            }
                                        return false;
                                    },
                                    forced: true,
                                    popup: false,
                                    content() {
                                        'step 0';
                                        event.cards = [];
                                        if (Array.isArray(trigger.cards))
                                            for (var i of trigger.cards) {
                                                if (get.position(i) == 'd' && get.color(i) == 'red') {
                                                    event.cards.push(i);
                                                }
                                            }
                                        player
                                            .chooseTarget(`是否令一名角色将${get.translation(event.cards)}置于武将牌上？`, function (card, player, target) {
                                                if (target.hasSkill('zmshouxueyishi_2') && target.getExpansions('zmshouxueyishi_2').length >= 3) return false;
                                                return true;
                                            })
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (target.hasSkill('zmshouxueyishi_2') && target.getExpansions('zmshouxueyishi_2').length >= 1) att *= 3;
                                                return -att;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            event.target = result.targets[0];
                                            if (!result.targets[0].hasSkill('zmshouxueyishi_2')) {
                                                result.targets[0].addSkill('zmshouxueyishi_2');
                                            }
                                            if (result.targets[0].getExpansions('zmshouxueyishi_2').length == 0) {
                                                game.playzm4('zmshouxueyishi_13');
                                            }
                                            if (result.targets[0].getExpansions('zmshouxueyishi_2').length == 1) {
                                                game.playzm4('zmshouxueyishi_12');
                                            }
                                            if (result.targets[0].getExpansions('zmshouxueyishi_2').length >= 2) {
                                                game.playzm4('zmshouxueyishi_11');
                                            }
                                            player.line(result.targets, { color: [214, 0, 0] });
                                            result.targets[0].addToExpansion(event.cards, player, 'give').gaintag.add('zmshouxueyishi_2');
                                        } else event.finish();
                                        ('step 2');
                                        if (event.target.hasSkill('zmshouxueyishi_2') && event.target.getExpansions('zmshouxueyishi_2').length >= 4) {
                                            var card = event.target.getExpansions('zmshouxueyishi_2').randomGet();
                                            event.target.loseToDiscardpile(card);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.target.hasSkill('zmshouxueyishi_2') && event.target.getExpansions('zmshouxueyishi_2').length >= 4) {
                                            event.goto(2);
                                        }
                                    },
                                },
                                2: {
                                    intro: {
                                        content: 'expansion',
                                        markcount: 'expansion',
                                    },
                                    onremove(player, skill) {
                                        var cards = player.getExpansions(skill);
                                        if (cards.length) player.loseToDiscardpile(cards);
                                    },
                                },
                            },
                        },
                        zmxianxuewangchao: {
                            group: ['zmthundun', 'zmtleiren', 'zmtshenxing'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            trigger: {
                                player: 'gainAfter',
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                var red = 0;
                                if (player.storage.zmt_np < 25) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        }
                                    }
                                if (event.parent.parent.name != 'phaseDraw') return false;
                                return event.cards && event.cards.length && red == 0;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 25;
                                player.chooseDrawRecover(2, true);
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        zmshenghuabingren: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                target.useCard({ name: 'juedou' }, player, 'noai');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var num1 = target.countCards('h');
                                        var num = player.countCards('h', { name: 'sha' });
                                        if (num == 0) return 0;
                                        var num0 = num * 3 - num1;
                                        if (num0 <= 0) return 0;
                                        if (get.attitude(player, target) <= 0 && num >= 1 && target.hp == 1 && num1 <= 3 && player.hp >= 2) return -9;
                                        if (get.attitude(player, target) > 0) {
                                            return 0;
                                        } else {
                                            return -Math.abs(num0);
                                        }
                                        return 0;
                                    },
                                },
                                threaten: 1.8,
                            },
                            group: ['zmshenghuabingren_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(3).name == 'zmshenghuabingren';
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.player == player) {
                                            player.skip('phaseDiscard');
                                        } else {
                                            game.playzm4(['zmshenghuabingren11', 'zmshenghuabingren12', 'zmshenghuabingren13', 'zmshenghuabingren14'].randomGet());
                                        }
                                    },
                                },
                            },
                        },
                        zmrongluezhaog: {
                            group: ['zmtshenxing', 'zmtleiren'],
                            audio: 'ext:综漫季刊肆/audio:2',
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            logTarget: 'source',
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source != player && player.storage.zmt_np >= 30;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 30;
                                game.mp424('zmmenggete');
                                event.num = Math.floor(player.maxHp);
                                event.cards = get.cards(event.num);
                                player.showCards(event.cards);
                                ('step 1');
                                cards = cards.filter((i) => get.type(i) == 'basic');
                                if (event.cards.length == 0) {
                                    event.finish();
                                } else {
                                    var num = event.cards.length;
                                    player.$gain2(event.cards);
                                    player.gain(event.cards);
                                    player.line(trigger.source, { color: [119, 85, 51] });
                                    trigger.source.chooseToDiscard(num, 'he', true);
                                }
                            },
                        },
                        zmfengyinqunxing: {
                            group: ['zmfengyinqunxing_1', 'zmfengyinqunxing_2', 'zmtjuda', 'zmtshenxing', 'zmtrenxing'],
                            nobracket: true,
                            enable: 'phaseUse',
                            selectTarget() {
                                return [1, Infinity];
                            },
                            line: false,
                            filter(event, player) {
                                return player.storage.zmt_np >= 50;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            contentBefore() {
                                var num4 = game.countPlayer(function (current) {
                                    return current.hasSkill('zmfengyinqunxing_3');
                                });
                                player.storage.zmt_np -= 50;
                                if (num4 > 0) {
                                    game.playzm4(['zmlataen3', 'zmlataen4'].randomGet());
                                } else {
                                    game.playzm4(['zmlataen1', 'zmlataen2', 'zmlataen1'].randomGet());
                                    game.mp424('zmlataen');
                                }
                            },
                            content() {
                                player.line(target, { color: [170, 136, 221] });
                                target.addSkill('zmfengyinqunxing_3');
                                target.randomDiscard(1, 'he', true);
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                },
                                order: 12,
                                expose: 0.4,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'turnOverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.isTurnedOver()) return false;
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.hasSkill('zmfengyinqunxing_3');
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        event.current = player.next;
                                        ('step 1');
                                        if (event.current.hasSkill('zmfengyinqunxing_3')) {
                                            player.line(event.current, { color: [170, 136, 221] });
                                            game.playzm4(['zmfengyinqunxing11', 'zmfengyinqunxing12'].randomGet());
                                            event.current.judge(function (card) {
                                                if (card.suit == 'spade') return -1;
                                                return 1;
                                            });
                                        } else {
                                            if (event.current.next != player) {
                                                event.current = event.current.next;
                                                event.goto(1);
                                            } else event.finish();
                                        }
                                        ('step 2');
                                        if (result.card.suit == 'spade') {
                                            event.current.turnOver();
                                            if (event.current.next != player) {
                                                event.current = event.current.next;
                                                event.goto(1);
                                            } else event.finish();
                                        } else {
                                            if (event.current.next != player) {
                                                event.current = event.current.next;
                                                event.goto(1);
                                            } else event.finish();
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'turnOverBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.isTurnedOver()) return false;
                                        return player.isTurnedOver() && event.player != player && event.player.hasSkill('zmfengyinqunxing_3');
                                    },
                                    content() {
                                        'step 0';
                                        game.playzm4(['zmfengyinqunxing11', 'zmfengyinqunxing12'].randomGet());
                                        trigger.player.line(player, { color: [170, 136, 221] });
                                        player.judge(function (card) {
                                            if (card.suit == 'spade') return 1;
                                            return -1;
                                        });
                                        ('step 1');
                                        if (result.card.suit == 'spade') {
                                            player.turnOver();
                                        }
                                    },
                                },
                                3: {},
                            },
                        },
                        zmsuixingyingxiong: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                var num1 = player.countCards('h');
                                var num2 = trigger.player.countCards('h');
                                if (num1 == num2) {
                                    var num0 = 1;
                                }
                                if (num1 > num2) {
                                    var num0 = num1 - num2;
                                }
                                if (num2 > num1) {
                                    var num0 = 1;
                                }
                                player.chooseCard(`是否将至少${num0}张牌交给${get.translation(trigger.player)}令该伤害+1？`, [num0, Infinity], 'he').ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) {
                                        if (num0 >= 4 && trigger.player.hp > trigger.num) return 0;
                                        if (card.name == 'du') return 20;
                                        if (card.name == 'tao') return 0;
                                        if (card.name == 'jiu' && trigger.player.hp <= trigger.num + 1) return 0;
                                        return 5 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.player.gain(result.cards, player);
                                    player.$give(result.cards.length, trigger.player);
                                    trigger.num++;
                                }
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            group: ['zmsuixingyingxiong_1'],
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊肆/audio:3',
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    check(event, player) {
                                        var num3 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0;
                                        });
                                        var num4 = game.countPlayer(function (current) {
                                            return current.hasSkill('zmfengyinqunxing_3') && get.attitude(player, current) <= 0;
                                        });
                                        var num2 = event.source.countCards('h') - player.countCards('h');
                                        if (num2 < 4 && event.player.hp - event.num >= 1 && num4 < num3) return false;
                                        if (event.num - (event.player.hp + 1) >= 1) return false;
                                        return (get.attitude(player, event.source) <= 0 && get.attitude(player, event.player) > 0) || (get.attitude(player, event.player) > 0 && event.player.hp <= event.num);
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        var num1 = player.countCards('h');
                                        var num2 = event.source.countCards('h');
                                        if (num1 == num2) {
                                            var num0 = 1;
                                        }
                                        if (num1 > num2) {
                                            var num0 = 1;
                                        }
                                        if (num2 > num1) {
                                            var num0 = num2 - num1;
                                        }
                                        str += ` ${get.translation(event.player)}将受到${event.num}点伤害,是否翻面令其该伤害减一并令${get.translation(event.source)}至少交给你${num0}张牌？`;
                                        return str;
                                    },
                                    filter(event, player) {
                                        if (player.isTurnedOver()) return false;
                                        if (event.source != undefined && event.source.countCards('he') == 0) return false;
                                        return event.source != undefined && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        var num1 = player.countCards('h');
                                        var num2 = trigger.source.countCards('h');
                                        if (num1 == num2) {
                                            var num0 = 1;
                                        }
                                        if (num1 > num2) {
                                            var num0 = 1;
                                        }
                                        if (num2 > num1) {
                                            var num0 = num2 - num1;
                                        }
                                        trigger.source.chooseCard(`须将至少${num0}张牌交给` + get.translation(player), true, [num0, Infinity], 'he').ai = function (card) {
                                            if (get.attitude(trigger.source, player) < 0) {
                                                if (card.name == 'du') return 20;
                                                if (card.name == 'tao') return 0;
                                                if (card.name == 'jiu' && player.hp <= 1) return 0;
                                                return 4 - get.value(card);
                                            }
                                        };
                                        ('step 1');
                                        if (result.cards?.length) {
                                            player.gain(result.cards, trigger.source);
                                            trigger.source.$give(result.cards.length, player);
                                            player.turnOver();
                                            trigger.num--;
                                        }
                                    },
                                },
                            },
                        },
                        zmshenkongqishi: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:8',
                            trigger: {
                                global: ['gainEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.countCards('h') != player.countCards('h')) return false;
                                var red = 0;
                                var black = 0;
                                if (event.cards.length < 2) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.color(i) == 'red') {
                                            red++;
                                        }
                                        if (get.color(i) == 'black') {
                                            black++;
                                        }
                                    }
                                return event.cards && (event.cards.length == red || event.cards.length == black);
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择一名角色令其获得一张与其手牌各不相同的牌？', function (card, player, target) {
                                    return true;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (target.hp == 1 || target.countCards('h') <= 1) att *= 3;
                                    return att;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets[0]);
                                    var list = [];
                                    var namelist = [];
                                    for (var i = 0; i < result.targets[0].getCards('h').length; i++) {
                                        var node = result.targets[0].getCards('h')[i];
                                        if (['basic', 'trick'].includes(get.type(node)) && !namelist.includes(node.name)) {
                                            namelist.push(node.name);
                                        }
                                    }
                                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                        var node = ui.cardPile.childNodes[i];
                                        if (['basic', 'trick'].includes(get.type(node)) && !namelist.includes(node.name)) {
                                            list.push(node);
                                            namelist.push(node.name);
                                            if (list.length >= 1) break;
                                        }
                                    }
                                    if (list.length < 1) {
                                        for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                            var node = ui.discardPile.childNodes[i];
                                            if (['basic', 'trick'].includes(get.type(node)) && !namelist.includes(node.name)) {
                                                list.push(node);
                                                namelist.push(node.name);
                                                if (list.length >= 1) break;
                                            }
                                        }
                                    }
                                    result.targets[0].gain(list, 'gain2');
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        zmyuanfangdezhaohuan: {
                            group: ['zmtyeshou', 'zmtjuda', 'zmthundun'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.zmt_np < 20) return false;
                                return player.countCards('he');
                            },
                            complexCard: true,
                            usable: 1,
                            discard: false,
                            lose: false,
                            delay: 0,
                            line: false,
                            check(card, player) {
                                var a = Math.random();
                                var b = Math.random();
                                var c = Math.random();
                                if (card.name == 'tao') return 1.2 + a;
                                if (card.name == 'shan') return 1.5 + b;
                                if (card.name == 'sha') return 1 + c;
                                return 0;
                            },
                            position: 'h',
                            selectTarget() {
                                return [1, ui.selected.cards.length];
                            },
                            selectCard: [1, Infinity],
                            filterCard(card) {
                                if (ui.selected.cards.length) {
                                    return card.name == ui.selected.cards[0].name;
                                }
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            contentBefore() {
                                player.storage.zmt_np -= 20;
                                player.showCards(cards, '远方的召唤');
                            },
                            content() {
                                'step 0';
                                player.line(target, { color: [85, 102, 153] });
                                var num0 = cards.length;
                                event.Q = cards[0].name;
                                if (target.countCards('he', { name: event.Q })) {
                                    game.playzm4('zmyuanfangdezhaohuan11');
                                    if (event.dialog) event.dialog.close();
                                    var dialog = ui.create.dialog(`须弃置${num0}张牌`, target.getCards('he'));
                                    target.chooseButton(num0, dialog, true).set('ai', function (button) {
                                        return 4 - get.value(button.link);
                                    }).filterButton = function (button) {
                                        if (ui.selected.buttons.length) return true;
                                        return button.link.name == event.Q;
                                    }; //QQQ
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    target.discard(result.links);
                                    game.log(target, `弃置了${result.links.length}张牌`);
                                }
                                ('step 2');
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var num;
                                        num = target.countCards('h');
                                        return -num;
                                    },
                                },
                            },
                        },
                        zmyichanghaodu: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:7',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                event.list2 = [];
                                event.list1 = [];
                                event.num1 = 0;
                                event.num2 = 0;
                                event.num11 = 0;
                                event.num22 = 0;
                                player.draw(3);
                                ('step 1');
                                event.cards1 = result;
                                ('step 2');
                                target.draw(3);
                                ('step 3');
                                event.cards2 = result;
                                ('step 4');
                                if (event.num11 == 0 && event.num22 == 0 && event.num1 == 1 && event.num2 == 1) {
                                    game.playzm4('zmyichanghaodu08');
                                    player.$fullscreenpop('最终一轮', 'thunder');
                                }
                                if ((event.num11 == 0 && event.num22 == 0 && event.num1 == 1 && event.num2 == 0) || (event.num11 == 0 && event.num22 == 0 && event.num2 == 1 && event.num1 == 0)) {
                                    game.playzm4('zmyichanghaodu08');
                                    player.$fullscreenpop('下一轮', 'thunder');
                                }
                                if (player.countCards('h') >= 1) {
                                    var cards = player.getCards('h');
                                    var card0 = [];
                                    var num = 0;
                                    var num2 = 0; //最大的两张
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var num1 = i.number;
                                            if (num1 >= num) {
                                                num = num1;
                                                card0 = i;
                                            }
                                        }
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var num1 = i.number;
                                            if (num1 >= num2 && i != card0) {
                                                num2 = num1;
                                            }
                                        }
                                    var num9 = 0; //算平均数
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            num9 += i.number;
                                        }
                                    if (num2 + num > event.num22) {
                                        var dialog = ui.create.dialog(`须弃置0~2张点数和大于${event.num22}的手牌,令${get.translation(target)}弃置点数更大的牌`, player.getCards('h'));
                                        player.chooseButton([1, 2], dialog).set('ai', function (button) {
                                            if (get.attitude(player, target) > 0) {
                                                //友情假赛
                                                // if(!event.button.links1.includes(button.link)) return 0;
                                                if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                                if (button.link.number + num <= event.num22) return false;
                                                var zs = 0;
                                                if (ui.selected.buttons.length) {
                                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                        zs += ui.selected.buttons[i].number;
                                                    }
                                                }
                                                return button.link.number;
                                            } else {
                                                if (event.num1 + event.num2 == 0 && event.num22 >= 20) {
                                                    return 0;
                                                }
                                                if (event.num1 + event.num2 == 0 && event.num22 == 0) {
                                                    if (player.countCards('h') < 6 && ui.selected.buttons.length) return false;
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number == num + num2) return false;
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return Math.random();
                                                }
                                                if (event.num2 == 1 && event.num22 == 0) {
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number < num + num2) return false;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return button.link.number;
                                                }
                                                if (event.num2 == 1 && event.num22 > 0) {
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return 100 - Math.abs(button.link.number - event.num22);
                                                }
                                                if (event.num1 == 1 && event.num2 == 0 && event.num22 > 0) {
                                                    if (event.num22 >= 20 && Math.random() >= 0.9) return 0;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return 100 - Math.abs(button.link.number - event.num22);
                                                }
                                                if (event.num1 == 1 && event.num2 == 0 && event.num22 == 0) {
                                                    var cards = player.getCards('h');
                                                    var cards0 = [];
                                                    var num = 0;
                                                    var num2 = 0; //最大的两张
                                                    if (Array.isArray(cards))
                                                        for (var i of cards) {
                                                            var num1 = i.number;
                                                            if (num1 >= num) {
                                                                num = num1;
                                                                cards0 = i;
                                                            }
                                                        }
                                                    if (Array.isArray(cards))
                                                        for (var i of cards) {
                                                            var num1 = i.number;
                                                            if (num1 >= num2 && i != cards0) {
                                                                num2 = num1;
                                                            }
                                                        }
                                                    var num9 = 0; //算平均数
                                                    if (Array.isArray(cards))
                                                        for (var i of cards) {
                                                            num9 += i.number;
                                                        }
                                                    if (event.num22 == 0 && player.countCards('h') < 4 && ui.selected.buttons.length) return false;
                                                    if (player.countCards('h') < 4) {
                                                        if (button.link.number < num9 / player.countCards('h')) return false;
                                                        if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                                        var zs = 0;
                                                        if (ui.selected.buttons.length) {
                                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                                zs += ui.selected.buttons[i].number;
                                                            }
                                                        }
                                                        return Math.random() && button.link.number + num > event.num22;
                                                    }
                                                    if (player.countCards('h') >= 4 && target.countCards('h') < player.countCards('h') && Math.random() <= 0.65) {
                                                        var zs = 0;
                                                        if (ui.selected.buttons.length) {
                                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                                zs += ui.selected.buttons[i].number;
                                                            }
                                                        }
                                                        return button.link.number;
                                                    }
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return Math.random() && button.link.number + num > event.num22;
                                                }
                                            }
                                            if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                            var zs = 0;
                                            if (ui.selected.buttons.length) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    zs += ui.selected.buttons[i].number;
                                                }
                                            }
                                            return Math.random() && button.link.number + num > event.num22;
                                        }).filterButton = function (button) {
                                            var cards1 = player.getCards('h');
                                            var num = 0;
                                            for (var i = 0; i < cards1.length; i++) {
                                                var num1 = i.number;
                                                if (num1 >= num && i != button.link) {
                                                    num = num1;
                                                }
                                            }
                                            if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num22) return false;
                                            return button.link.number + num > event.num22;
                                        };
                                    } else {
                                        game.log(target, '赢下一场');
                                        if (event.num22 >= 23) {
                                            player.say(['离谱,要不起', '太大,不跟', '猛,告辞', '真敢出呢,不跟', '嗯,不跟', '这样吗,不出'].randomGet());
                                        } else {
                                            player.say('不出');
                                        }
                                        event.num11 = 0;
                                        event.num22 = 0;
                                        event.num2++;
                                        event.goto(8);
                                    }
                                } else {
                                    game.log(target, '赢下一场');
                                    player.say('我没有手牌了');
                                    event.num11 = 0;
                                    event.num22 = 0;
                                    event.num2++;
                                    event.goto(8);
                                }
                                ('step 5');
                                if (result.bool) {
                                    game.playzm4(['zmyichanghaodu01', 'zmyichanghaodu02', 'zmyichanghaodu03', 'zmyichanghaodu04'].randomGet());
                                    for (var i of result.links) {
                                        event.list1.push(i);
                                        event.num11 += i.number;
                                    }
                                    player.discard(result.links);
                                    if (event.num11 > event.num22) {
                                        event.num22 = 0;
                                        if (event.num11 <= 10) {
                                            player.say(event.num11 + '点');
                                        }
                                        if (event.num11 > 10 && event.num11 <= 18) {
                                            player.say(event.num11 + '点!');
                                        }
                                        if (event.num11 > 18 && event.num11 < 24) {
                                            player.say(event.num11 + '点!!');
                                        }
                                        if (event.num11 >= 24) {
                                            var t = Math.random();
                                            if (t >= 0.7) {
                                                player.say(event.num11 + '点!!! ');
                                            } else {
                                                player.say(event.num11 + `点!! ${get.translation(target)},认输吧!`);
                                            }
                                        }
                                        game.log(player, `弃置了${result.links.length}张牌,点数和为${event.num11}点`);
                                    } else {
                                        game.log(player, `弃置了${result.links.length}张牌,点数和为${event.num11}点,点数不足`);
                                        player.say(event.num11 + '点');
                                        game.log(target, '赢下一场');
                                        event.num11 = 0;
                                        event.num22 = 0;
                                        event.num2++;
                                        event.goto(8);
                                    }
                                } else {
                                    game.log(target, '赢下一场');
                                    if (event.num22 >= 23) {
                                        player.say(['离谱,要不起', '太大,不跟', '猛,告辞', '真敢出呢,不跟', '嗯,不出', '这样吗,不出'].randomGet());
                                    } else {
                                        player.say('不出');
                                    }
                                    event.num11 = 0;
                                    event.num22 = 0;
                                    event.num2++;
                                    event.goto(8);
                                }
                                ('step 6');
                                if (target.countCards('h') >= 1) {
                                    var cards = target.getCards('h');
                                    var card0 = [];
                                    var num = 0;
                                    var num2 = 0; //最大的两张
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var num1 = i.number;
                                            if (num1 >= num) {
                                                num = num1;
                                                card0 = i;
                                            }
                                        }
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            var num1 = i.number;
                                            if (num1 >= num2 && i != card0) {
                                                num2 = num1;
                                            }
                                        }
                                    var num9 = 0; //算平均数
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            num9 += i.number;
                                        }
                                    if (num2 + num > event.num11) {
                                        var dialog = ui.create.dialog(`须弃置0~2张点数和大于${event.num11}的手牌,令${get.translation(player)}弃置点数更大的牌`, target.getCards('h'));
                                        target.chooseButton([1, 2], dialog).set('ai', function (button) {
                                            if (get.attitude(target, player) > 0) {
                                                //友情假赛
                                                return 0;
                                            } else {
                                                if (event.num1 + event.num2 == 0) {
                                                    if (event.num11 >= 18 && (num + num2 < 21 || target.countCards('h') < 6)) return false;
                                                    if ((num9 / target.countCards('h')) * (target.countCards('h') / 3) < event.num11 && Math.random() >= 0.5) return false;
                                                    if (event.num11 >= 21) return false;
                                                    if (event.num11 + player.countCards('h') > (num + num2 + target.countCards('h')) / 2 && Math.random() >= 0.7) return false;
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number == num + num2 && Math.random() >= 0.65) return false;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return 100 - Math.abs(button.link.number - event.num11);
                                                }
                                                if (event.num2 == 1) {
                                                    if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number < num + num2) return false;
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return button.link.number;
                                                }
                                                if (event.num2 == 0 && event.num1 == 1) {
                                                    var zs = 0;
                                                    if (ui.selected.buttons.length) {
                                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                            zs += ui.selected.buttons[i].number;
                                                        }
                                                    }
                                                    return 100 - Math.abs(button.link.number - event.num11);
                                                }
                                            }
                                            if (ui.selected.cards.length && ui.selected.cards[0].number + card.number <= event.num22) return false;
                                            var zs = 0;
                                            if (ui.selected.buttons.length) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    zs += ui.selected.buttons[i].number;
                                                }
                                            }
                                            return Math.random() && button.link.number + num > event.num22;
                                        }).filterButton = function (button) {
                                            var cards1 = target.getCards('h');
                                            var num = 0;
                                            for (var i = 0; i < cards1.length; i++) {
                                                var num1 = i.number;
                                                if (num1 >= num && i != button.link) {
                                                    num = num1;
                                                }
                                            }
                                            if (ui.selected.buttons.length && ui.selected.buttons[0].number + button.link.number <= event.num11) return false;
                                            return button.link.number + num > event.num11;
                                        };
                                    } else {
                                        game.log(player, '赢下一场');
                                        if (event.num11 >= 23) {
                                            target.say(['离谱,要不起', '太大,不跟', '猛,告辞', '真敢出呢,不跟', '嚯,不要', '嘶,不要'].randomGet());
                                        } else {
                                            target.say('不出');
                                        }
                                        event.num11 = 0;
                                        event.num22 = 0;
                                        event.num1++;
                                        event.goto(8);
                                    }
                                } else {
                                    game.log(player, '赢下一场');
                                    target.say('我没有手牌了');
                                    event.num11 = 0;
                                    event.num22 = 0;
                                    event.num1++;
                                    event.goto(8);
                                }
                                ('step 7');
                                if (result.bool) {
                                    game.playzm4(['zmyichanghaodu01', 'zmyichanghaodu02', 'zmyichanghaodu03', 'zmyichanghaodu04'].randomGet());
                                    for (var i of result.links) {
                                        event.list2.push(i);
                                        event.num22 += i.number;
                                    }
                                    target.discard(result.links);
                                    if (event.num22 > event.num11) {
                                        event.num11 = 0;
                                        if (event.num22 <= 10) {
                                            target.say(event.num22 + '点');
                                        }
                                        if (event.num22 > 10 && event.num22 <= 18) {
                                            target.say(event.num22 + '点!');
                                        }
                                        if (event.num22 > 18 && event.num22 < 24) {
                                            target.say(event.num22 + '点!!');
                                        }
                                        if (event.num22 >= 24) {
                                            var t = Math.random();
                                            if (t >= 0.7) {
                                                target.say(event.num22 + '点!!! ');
                                            } else {
                                                target.say(event.num22 + `点!! ${get.translation(player)},认输吧!`);
                                            }
                                        }
                                        game.log(target, `弃置了${result.links.length}张牌,点数和为${event.num22}点`);
                                    } else {
                                        game.log(target, `弃置了${result.links.length}张牌,点数和为${event.num22}点,点数不足`);
                                        target.say(event.num22 + '点');
                                        game.log(player, '赢下一场');
                                        event.num11 = 0;
                                        event.num22 = 0;
                                        event.num1++;
                                        event.goto(8);
                                    }
                                } else {
                                    if (event.num11 >= 23) {
                                        target.say(['离谱,要不起', '太大,不跟', '猛,告辞', '真敢出呢,不跟', '嚯,不跟', '嘶,不跟'].randomGet());
                                    } else {
                                        target.say('不出');
                                    }
                                    event.num11 = 0;
                                    event.num22 = 0;
                                    event.num1++;
                                    game.log(player, '赢下一场');
                                    event.goto(8);
                                }
                                ('step 8');
                                if (event.num1 == 2 || event.num2 == 2) {
                                    if (event.num1 == 2) {
                                        game.playzm4('zmyichanghaodu09');
                                        if (get.attitude(target, player) <= 0) {
                                            game.playzm4(['zmyichanghaodu11', 'zmyichanghaodu12', 'zmyichanghaodu13', 'zmyichanghaodu14'].randomGet());
                                        }
                                        game.log(player, '取得了最终胜利');
                                        target.addTempSkill('zmyichanghaodu_1');
                                        player.$fullscreenpop(get.translation(player) + '胜!', 'fire');
                                        // for(var i=0;i<event.list1.length;i++)
                                        player.gain(event.list1);
                                        target.discard(event.cards2);
                                        player.chooseToUse(`是否对${get.translation(target)}使用一张牌？`, -1, target);
                                    }
                                    if (event.num2 == 2) {
                                        if (get.attitude(target, player) <= 0) {
                                            game.playzm4(['zmyichanghaodu21', 'zmyichanghaodu22', 'zmyichanghaodu22'].randomGet());
                                        }
                                        game.log(target, '取得了最终胜利');
                                        player.addTempSkill('zmyichanghaodu_1');
                                        target.$fullscreenpop(get.translation(target) + '胜!', 'fire');
                                        target.gain(event.list2);
                                        player.discard(event.cards1);
                                        target.chooseToUse(`是否对${get.translation(player)}使用一张牌？`, -1, player);
                                    }
                                } else {
                                    event.goto(4);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player) {
                                        return -0.7;
                                    },
                                    target(player, target) {
                                        var cards = player.getCards('h');
                                        var num0 = 0;
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if (i.number > 7) {
                                                    num0++;
                                                }
                                            }
                                        var num = target.countCards('h');
                                        var num1 = player.countCards('h');
                                        var num5 = game.countPlayer(function (current) {
                                            return get.attitude(player, current) <= 0 && current.countCards('h') < player.countCards('h');
                                        });
                                        if (num5 == 0 || num0 == 0) {
                                            if (get.attitude(player, target) > 0 && (num <= 2 || target.hp <= 2)) return 2;
                                            return 1;
                                        } else {
                                            var num = target.countCards('h');
                                            var num1 = player.countCards('h');
                                            var num9 = 1000 - num;
                                            if (get.attitude(player, target) <= 0 && num >= num1) return 0;
                                            return -num9;
                                        }
                                    },
                                },
                                threaten: 1.2,
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
                        zmcaiduoshu: {
                            group: ['zmtrenxing'],
                            nobracket: true,
                            trigger: {
                                global: 'drawBefore',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.getParent(1).name == 'zmyichanghaodu' && get.attitude(player, event.player) > 0 && event.player != player) return false;
                                if (player.storage.zmt_np <= 5 && _status.currentPhase != player) return false;
                                return true;
                            },
                            filter(event, player) {
                                return player.storage.zmt_np >= 5;
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 5;
                                event.card = get.cards()[0];
                                //  player.viewCards('【猜度术】',event.cards);
                                ('step 1');
                                player.chooseControl('弃置', '取消').set('prompt', get.translation(trigger.player) + `即将摸牌,是否弃置牌堆顶的${get.translation(event.card)}？`).ai = function (event, player) {
                                    if (player == trigger.player && get.value(event.card) < 6) return '弃置';
                                    if (get.attitude(player, trigger.player) <= 0 && trigger.player.getUseValue(event.card) >= 7) return '弃置';
                                    if (player != trigger.player && get.attitude(player, trigger.player) > 0 && trigger.player.getUseValue(event.card) < 5) return '弃置';
                                    if (get.attitude(player, trigger.player) <= 0 && event.card.number >= 8 && trigger.getParent(1).name == 'zmyichanghaodu') return '弃置';
                                    if (trigger.player == player && event.card.number <= 6 && trigger.getParent(1).name == 'zmyichanghaodu') return '弃置';
                                    return '取消';
                                };
                                ('step 2');
                                if (result.control == '弃置') {
                                    player.discard(event.card);
                                } else {
                                    ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                }
                            },
                        },
                        zmfengxionghuaji: {
                            group: ['zmtshenxing', 'zmtyeshou', 'zmtsuzheng'],
                            nobracket: true,
                            trigger: {
                                global: 'useCard',
                            },
                            check(event, player) {
                                if (event.card.number >= 9 && event.targets[0].hp > 1) return false;
                                if (event.card.number >= 13) return false;
                                //if(event.targets[0]!=player&&event.targets[0].hp>player) return false;
                                return get.attitude(player, event.player) <= 0 && get.effect(event.targets[0], event.card, player, player) < 0;
                            },
                            prompt(event, player, name) {
                                var str = '';
                                var mb = event.targets[0];
                                str += `是否对${get.translation(mb)}发动【逢凶化吉】？`;
                                return str;
                            },
                            filter(event, player) {
                                if (!event.targets || event.targets.length != 1) return false;
                                if (player.storage.zmt_np < 20) return false;
                                return event.player != player && get.tag(event.card, 'damage') && event.card.number != undefined;
                            },
                            content() {
                                'step 0';
                                if (trigger.targets[0] == player) {
                                    game.playzm4(['zmfengxionghuaji11', 'zmfengxionghuaji12', 'zmfengxionghuaji13', 'zmfengxionghuaji14'].randomGet());
                                } else {
                                    if (player.hp <= 2) {
                                        game.playzm4(['zmfengxionghuaji21', 'zmfengxionghuaji22', 'zmfengxionghuaji3', 'zmfengxionghuaji4'].randomGet());
                                    } else {
                                        game.playzm4(['zmfengxionghuaji21', 'zmfengxionghuaji14'].randomGet());
                                    }
                                }
                                player.storage.zmt_np -= 20;
                                player.judge(function (card) {
                                    if (card.number > trigger.card.number || get.type(card) == get.type(trigger.card)) return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (get.type(result.card) == get.type(trigger.card)) {
                                    player.useCard({ suit: trigger.card.suit, name: trigger.card.name }, trigger.player, false);
                                }
                                if (result.card.number > trigger.card.number) {
                                    trigger.cancel();
                                    trigger.player.useCard({ name: 'tao' }, trigger.targets[0], false);
                                } else {
                                    if (!_status.event.getTrigger().targets.includes(player)) {
                                        trigger.targets.add(player);
                                    }
                                    event.finish();
                                }
                            },
                        },
                        zmtongdawanwu: {
                            init(p, s) {
                                p.storage[s] = [];
                            },
                            marktext: '通',
                            intro: {
                                content(n, p, s) {
                                    var str = '';
                                    for (var i = 0; i < n.length; i++) {
                                        var t = n[i];
                                        str += `<li><span class=firetext></span>${get.translation(t.plyr)}<b><font color=DarkGray>最近使用了</font></b>` + get.translation(t.suit) + (get.translation(t.natu) || '') + get.translation(t.name);
                                    }
                                    return str;
                                },
                                markcount(n, p) {
                                    return n.filter(function (i) {
                                        return i.use;
                                    }).length;
                                },
                            },
                            nobracket: true,
                            trigger: {
                                global: 'useCardBegin',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && event.card && event.card.suit;
                            },
                            forced: true,
                            content() {
                                if (trigger.card.name == 'sha') {
                                    if (player.storage.zmtongdawanwu.length) {
                                        for (var i = 0; i < player.storage.zmtongdawanwu.length; i++) {
                                            if (player.storage.zmtongdawanwu[i].plyr == trigger.player.name) {
                                                player.storage.zmtongdawanwu.remove(player.storage.zmtongdawanwu[i]);
                                            }
                                        }
                                    }
                                    player.markAuto('zmtongdawanwu', [{ suit: trigger.card.suit, name: 'sha', natu: trigger.card.nature, plyr: trigger.player.name }]);
                                } else {
                                    if (player.storage.zmtongdawanwu.length) {
                                        for (var i = 0; i < player.storage.zmtongdawanwu.length; i++) {
                                            if (player.storage.zmtongdawanwu[i].plyr == trigger.player.name) {
                                                player.storage.zmtongdawanwu.remove(player.storage.zmtongdawanwu[i]);
                                            }
                                        }
                                    }
                                    player.markAuto('zmtongdawanwu', [{ suit: trigger.card.suit, name: trigger.card.name, plyr: trigger.player.name }]);
                                }
                            },
                            group: ['zmtongdawanwu_use', 'zmtongdawanwu_1', 'zmtongdawanwu_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.targets) return false;
                                        return player.storage.zmtongdawanwu.length && event.card.suit;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                if (trigger.targets.includes(current)) {
                                                    for (var i = 0; i < player.storage.zmtongdawanwu.length; i++) {
                                                        if (player.storage.zmtongdawanwu[i].plyr == current.name && player.storage.zmtongdawanwu[i].suit == trigger.card.suit) {
                                                            player.popup('通达万物');
                                                            player.line(current);
                                                            return true;
                                                        }
                                                    }
                                                }
                                            })
                                        );
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (player.storage.zmtongdawanwu.length) {
                                            for (var i = 0; i < player.storage.zmtongdawanwu.length; i++) {
                                                if (player.storage.zmtongdawanwu[i].plyr == event.player.name) {
                                                    return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.zmtongdawanwu.length) {
                                            for (var i = 0; i < player.storage.zmtongdawanwu.length; i++) {
                                                if (player.storage.zmtongdawanwu[i].plyr == trigger.player.name) {
                                                    player.storage.zmtongdawanwu.remove(player.storage.zmtongdawanwu[i]);
                                                }
                                            }
                                        }
                                    },
                                },
                                use: {
                                    audio: 'ext:综漫季刊肆/audio:9',
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        for (var i of player.storage.zmtongdawanwu) {
                                            if (event.filterCard(i, player, event) && get.type(i) != 'equip' && player.hasCard((c) => get.type(c) == get.type(i), 'h')) {
                                                return true;
                                            }
                                        }
                                    }, //QQQ
                                    hiddenCard(player, name) {
                                        if (player.storage.zmtongdawanwu.some((q) => q.name == name) && get.type({ name: name }) != 'equip' && player.hasCard((c) => get.type(c) == get.type({ name: name }), 'h')) {
                                            return true;
                                        }
                                    },
                                    //你的基本牌或锦囊牌可当做同类型的记录牌使用
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i of player.storage.zmtongdawanwu) {
                                                if (event.filterCard(i, player, event) && get.type(i) != 'equip' && player.hasCard((c) => get.type(c) == get.type(i), 'h')) {
                                                    list.push(i.name);
                                                }
                                            }
                                            return ui.create.dialog('通达万物', [list, 'vcard'], 'hidden');
                                        },
                                        check(button) {
                                            return _status.event.player.getUseValue(button.link[2]);
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard(card, player) {
                                                    return get.type(card) == get.type({ name: links[0][2] }) && get.type(card) != 'equip';
                                                },
                                                viewAs: {
                                                    name: links[0][2],
                                                    nature: links[0][3],
                                                },
                                                selectCard: 1,
                                                position: 'h',
                                                precontent() {
                                                    player.markSkill('zmtongdawanwu');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return `选择转化${(get.translation(links[0][3]) || '') + get.translation(links[0][2])}的牌与目标`;
                                        },
                                    },
                                    ai: {
                                        order: 11,
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        skillTagFilter(player, tag) {
                                            var f = function (n) {
                                                return player.storage.zmtongdawanwu.filter(function (i) {
                                                    return i.use && i.name == n;
                                                }).length;
                                            };
                                            if (tag == 'respondSha') {
                                                if (!f('sha')) return false;
                                            } else if (tag == 'respondShan') {
                                                if (!f('shan')) return false;
                                            } else {
                                                if (!f('tao') && !f('jiu')) return false;
                                            }
                                        },
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        zmqielanzhihai: {
                            group: ['zmtjixie', 'zmtrenxing', 'zmqielanzhihai_2'],
                            nobracket: true,
                            trigger: {
                                global: 'dying',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                if (player.storage.zmt_np < 40) return false;
                                return !player.hasSkill('zmqielanzhihai_1');
                            },
                            content() {
                                'step 0';
                                player.storage.zmt_np -= 40;
                                player.addSkill('zmqielanzhihai_1');
                                // player.addSkill('zmqielanzhihai_3');
                                ('step 1');
                                game.playzm4('zmlifu1');
                                game.mp424('zmlifu1');
                                ui.background.setBackgroundImage('extension/综漫季刊肆/背景丽芙.png');
                                ('step 2');
                                trigger.player.recover(1 - trigger.player.hp);
                                ('step 3');
                                player.storage.zmqielanzhihai_1 = 0;
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '伽',
                                    intro: {
                                        content: '场上已累计#点伤害',
                                    },
                                    init(player) {
                                        player.storage.zmqielanzhihai_1 = 0;
                                    },
                                    trigger: {
                                        global: 'damageBegin',
                                    },
                                    _priority: -5000,
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        if (player.hasSkill('zmqielanzhihai_3')) {
                                            player.removeSkill('zmqielanzhihai_3');
                                        } else {
                                            player.storage.zmqielanzhihai_1 += trigger.num;
                                        }
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('zmqielanzhihai_1');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.storage.zmt_np = 0;
                                        event.num = player.storage.zmqielanzhihai_1;
                                        player
                                            .chooseControl('选项一', '选项二', function () {
                                                if (get.attitude(player, trigger.player) > 0 && event.num > 1 && trigger.player.maxHp - trigger.player.hp >= 2) return '选项一';
                                                if (get.attitude(player, trigger.player) > 0 && !player.isDamaged()) return '选项一';
                                                return '选项二';
                                            })
                                            .set('prompt', `①令${get.translation(trigger.player)}回复${event.num}点体力;②令你回复一点体力`);
                                        ('step 1');
                                        game.playzm4('zmlifu2');
                                        game.mp424('zmlifu2');
                                        game.broadcastAll() + ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                                        if (result.control == '选项一') {
                                            trigger.player.recover(event.num);
                                        } else player.recover();
                                        player.storage.zmqielanzhihai_1 = 0;
                                        player.removeSkill('zmqielanzhihai_1');
                                    },
                                },
                                3: {},
                            },
                            ai: {
                                threaten: 1.8,
                            },
                        },
                        zmxundaoxuanshi: {
                            nobracket: true,
                            trigger: {
                                global: ['damageBegin'],
                            },
                            _priority: 5000,
                            prompt(event, player) {
                                var str = '';
                                str += ` ${get.translation(event.player)}将受到${event.num}点伤害,是否对自己造成一点伤害后取消之？`;
                                return str;
                            },
                            check(event, player) {
                                var num4 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) > 0 && current.isLinked();
                                });
                                var num5 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0 && current.isLinked();
                                });
                                if (get.attitude(player, event.player) > 0 && event.num > 1) return true;
                                if (get.attitude(player, event.player) > 0 && event.nature && event.nature == 'fire' && event.player.getEquip('tengjia')) return true;
                                if (get.attitude(player, event.player) > 0 && event.player.hp <= player.hp && _status.currentPhase != event.player) return true;
                                // if(get.attitude(player,event.player)>0&&event.source&&get.attitude(player,event.source)<=0&&(event.nature=='thunder'||event.nature=='fire')) return true;
                                if (event.source && get.attitude(player, event.source) <= 0 && get.attitude(player, event.player) > 0 && num4 > 0 && num4 > num5 && num4 + num5 >= 2 && (event.nature == 'thunder' || event.nature == 'fire')) return true;
                                return false;
                            },
                            filter(event, player) {
                                return !event.source || (event.source && event.source != player);
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                if ((!player.storage.zmqielanzhihai_1 && player.hp > 1 && player.storage.zmt_np >= 40) || player.storage.zmt_np <= 39 || (player.hasSkill('zmqielanzhihai_1') && player.hp > 1)) {
                                    if (trigger.player == player) {
                                        game.playzm4(['zmxundaoxuanshi11', 'zmxundaoxuanshi12', 'zmxundaoxuanshi13', 'zmxundaoxuanshi14'].randomGet());
                                    } else {
                                        game.playzm4(['zmxundaoxuanshi21', 'zmxundaoxuanshi22', 'zmxundaoxuanshi24', 'zmxundaoxuanshi23', 'zmxundaoxuanshi25', 'zmxundaoxuanshi12'].randomGet());
                                    }
                                }
                                player.line(trigger.player);
                                trigger.cancel();
                                //  trigger.untrigger();
                                //trigger.finish();
                                ('step 1');
                                player.damage(1, player);
                            },
                            group: ['zmxundaoxuanshi_1'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'damageAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        event.target = _status.currentPhase;
                                        player.chooseControl('给牌', '中止阶段').set('prompt', `选择令${get.translation(event.target)}交给你一张牌或中止当前阶段`).ai = function (event, player) {
                                            if (_status.event.getParent('phaseUse').name == 'phaseUse' && get.attitude(player, event.target) > 0 && event.target.getCardUsable('sha') == 0) return '中止阶段';
                                            if (_status.event.getParent('phaseUse').name == 'phaseUse' && get.attitude(player, event.target) <= 0 && event.target.getCardUsable('sha') > 0 && (event.target.countCards('h') >= 3 || event.target.countCards('h') - event.target.getHandcardLimit() >= 2)) return '中止阶段';
                                            return '给牌';
                                        };
                                        ('step 1');
                                        if ((trigger.source && trigger.source != player) || (!player.storage.zmqielanzhihai_1 && ((trigger.source && trigger.source != player) || !trigger.source)) || (player.storage.zmqielanzhihai_1 > 0 && ((trigger.source && trigger.source != player) || !trigger.source))) {
                                            if (event.parent.name != 'zmxundaoxuanshi') {
                                                game.playzm4(['zmxundaoxuanshi_11', 'zmxundaoxuanshi_12', 'zmxundaoxuanshi_14', 'zmxundaoxuanshi_13', 'zmxundaoxuanshi_15'].randomGet());
                                            }
                                        }
                                        if (result.control == '给牌') {
                                            if (event.target.countCards('he')) {
                                                var str = `须交给${get.translation(player)}一张牌`;
                                                event.target.chooseCardButton(event.target.getCards('he'), str, true).set('ai', function (button) {
                                                    return 4 - get.value(button.link);
                                                });
                                            } else event.finish();
                                        }
                                        if (result.control == '中止阶段') {
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
                                            if (['phaseZhunbei', 'phaseJudge', 'phaseDraw', 'phaseUse', 'phaseDiscard', 'phaseJieshu'].includes(event.name)) {
                                                var evt = _status.event.getParent(event.name);
                                                if (evt && evt.name) {
                                                    evt.finish();
                                                }
                                            }
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.links?.length) {
                                            player.gain(result.links[0], event.target);
                                            event.target.$give(1, player);
                                        }
                                    },
                                },
                            },
                        },
                        zmyaoxingzhizuo: {
                            group: ['zmtrenxing', 'zmtjixie'],
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:3',
                            trigger: {
                                global: 'shaBegin',
                            },
                            _priority: -10,
                            check(event, player) {
                                var numm = 0;
                                for (var i = 0; i < event.targets.length; i++) {
                                    var juese = event.targets[i];
                                    var att = get.attitude(player, juese);
                                    if (att >= 0) {
                                        numm++;
                                    }
                                    if (att < 0) {
                                        numm--;
                                    }
                                }
                                if (event.player.countCards('he') == 0) return false;
                                if (numm <= 0) return false;
                                if (player.countCards('he') - 2 >= player.maxHp && event.targets.length == 1 && event.target[0] == player) return false;
                                if (event.targets.length == 1 && event.target[0] == player && player.countCards('h') <= 2 && (player.countCards('h', { name: 'shan' }) > 0 || player.countCards('h', { name: 'tao' }) > 0) && player.hp <= 2) return false;
                                if (get.attitude(player, event.player) > 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                var num = 0;
                                for (var i = 0; i < event.targets.length; i++) {
                                    var mb = event.targets[i];
                                    var jl = get.distance(player, mb, 'attack');
                                    if (jl <= 1) {
                                        num++;
                                    }
                                }
                                if (!event.targets) return false;
                                if (event.player == player) return false;
                                if (event.card.name != 'sha') return false;
                                return player.storage.zmt_np >= 20 && num > 0;
                            },
                            content() {
                                'step 0';
                                event.num = 2;
                                event.num1 = 0;
                                event.num2 = 0;
                                player.storage.zmt_np -= 20;
                                ('step 1');
                                player.chooseToPSS(trigger.player);
                                ('step 2');
                                if (result.tie) {
                                    for (var i = 0; i < trigger.targets.length; i++) {
                                        var juese = trigger.targets[i];
                                        if (juese.countCards('h') < juese.maxHp) {
                                            juese.draw();
                                        }
                                    }
                                    event.goto(1);
                                } else {
                                    event.num--;
                                    if (result.bool) {
                                        event.num1++;
                                        player.useCard({ name: 'guohe' }, trigger.player);
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    } else {
                                        event.num2++;
                                        trigger.player.useCard({ name: 'guohe' }, player);
                                        if (event.num > 0) {
                                            event.goto(1);
                                        }
                                    }
                                }
                                ('step 3');
                                if (event.num1 > event.num2) {
                                    player.storage.zmt_np = 0;
                                    game.playzm4('zmqishi');
                                    game.mp424('zmqishi');
                                    trigger.target = trigger.player;
                                    trigger.baseDamage++;
                                    player.line(trigger.player, 'fire');
                                }
                                if (event.num1 < event.num2) {
                                    game.playzm4('zmyaoxingzhizuo21');
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.getParent(4).name == 'zmyaoxingzhizuo';
                                    },
                                    content() {
                                        player.changeHujia();
                                        trigger.baseDamage++;
                                    },
                                },
                            },
                        },
                        zmjixiexianzhe: {
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:6',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.zmjixiexianzhe = 0;
                            },
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.addSkill('zmjixiexianzhe_1');
                                player.chooseCardButton('选择其中一张牌重铸', target.getCards('h'), true).ai = function (button) {
                                    var diamond = 0;
                                    var heart = 0;
                                    var spade = 0;
                                    var club = 0;
                                    var diamond1 = 0;
                                    var heart1 = 0;
                                    var spade1 = 0;
                                    var club1 = 0;
                                    var cards = player.getCards('h');
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if ((i.name == 'sha' && player.getCardUsable('sha') > 0) || lib.filter.cardEnabled(i)) {
                                                if (player.getUseValue(i) > 0) {
                                                    if (i.suit == 'diamond') {
                                                        diamond += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart += 1;
                                                    }
                                                } else {
                                                    if (i.suit == 'diamond') {
                                                        diamond1 += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade1 += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club1 += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart1 += 1;
                                                    }
                                                }
                                            } else {
                                                if (get.value(i) <= 5) {
                                                    if (i.suit == 'diamond') {
                                                        diamond1 += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade1 += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club1 += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart1 += 1;
                                                    }
                                                }
                                            }
                                        }
                                    if (target == player && ((diamond > 0 && diamond1 > 0) || (spade > 0 && spade1 > 0) || (club > 0 && club1 > 0) || (heart > 0 && heart1 > 0))) {
                                        var num = 0;
                                        if (num <= diamond + diamond1 && diamond > 0 && diamond1 > 0) {
                                            num = diamond + diamond1;
                                        }
                                        if (num <= spade + spade1 && spade > 0 && spade1 > 0) {
                                            num = spade + spade1;
                                        }
                                        if (num <= club + club1 && club > 0 && club1 > 0) {
                                            num = club + club1;
                                        }
                                        if (num <= heart + heart1 && heart > 0 && heart1 > 0) {
                                            num = heart + heart1;
                                        }
                                        if ((num = heart + heart1 && heart > 0 && heart1 > 0 && button.link.suit == 'heart')) {
                                            return 4 - get.value(button.link) && button.link.suit == 'heart';
                                        }
                                        if ((num = club + club1 && club > 0 && club1 > 0 && button.link.suit == 'club')) {
                                            return 4 - get.value(button.link) && button.link.suit == 'club';
                                        }
                                        if ((num = spade + spade1 && spade > 0 && spade1 > 0 && button.link.suit == 'spade')) {
                                            return 4 - get.value(button.link) && button.link.suit == 'spade';
                                        }
                                        if ((num = diamond + diamond1 && diamond > 0 && diamond1 > 0 && button.link.suit == 'diamond')) {
                                            return 4 - get.value(button.link) && button.link.suit == 'diamond';
                                        }
                                        return 0;
                                    }
                                    return get.value(button.link) - 3;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    var suit = result.links[0].suit;
                                    event.card = result.links[0];
                                    target.discard(result.links[0]);
                                    target.draw();
                                    player.storage.zmjixiexianzhe = target;
                                    player.storage.zmjixiexianzhe_1 = suit;
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order(name, player) {
                                    var diamond = 0;
                                    var heart = 0;
                                    var spade = 0;
                                    var club = 0;
                                    var diamond1 = 0;
                                    var heart1 = 0;
                                    var spade1 = 0;
                                    var club1 = 0;
                                    var cards = player.getCards('h');
                                    if (Array.isArray(cards))
                                        for (var i of cards) {
                                            if ((i.name == 'sha' && player.getCardUsable('sha') > 0) || lib.filter.cardEnabled(i)) {
                                                if (player.getUseValue(i) > 0) {
                                                    if (i.suit == 'diamond') {
                                                        diamond += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart += 1;
                                                    }
                                                } else {
                                                    if (i.suit == 'diamond') {
                                                        diamond1 += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade1 += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club1 += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart1 += 1;
                                                    }
                                                }
                                            } else {
                                                if (get.value(i) <= 5) {
                                                    if (i.suit == 'diamond') {
                                                        diamond1 += 1;
                                                    }
                                                    if (i.suit == 'spade') {
                                                        spade1 += 1;
                                                    }
                                                    if (i.suit == 'club') {
                                                        club1 += 1;
                                                    }
                                                    if (i.suit == 'heart') {
                                                        heart1 += 1;
                                                    }
                                                }
                                            }
                                        }
                                    if ((diamond > 0 && diamond1 > 0) || (spade > 0 && spade1 > 0) || (club > 0 && club1 > 0) || (heart > 0 && heart1 > 0)) return 12;
                                    return 1;
                                },
                                result: {
                                    target(player, target) {
                                        var diamond = 0;
                                        var heart = 0;
                                        var spade = 0;
                                        var club = 0;
                                        var diamond1 = 0;
                                        var heart1 = 0;
                                        var spade1 = 0;
                                        var club1 = 0;
                                        var cards = player.getCards('h');
                                        if (Array.isArray(cards))
                                            for (var i of cards) {
                                                if ((i.name == 'sha' && player.getCardUsable('sha') > 0) || lib.filter.cardEnabled(i)) {
                                                    if (player.getUseValue(i) > 0) {
                                                        if (i.suit == 'diamond') {
                                                            diamond += 1;
                                                        }
                                                        if (i.suit == 'spade') {
                                                            spade += 1;
                                                        }
                                                        if (i.suit == 'club') {
                                                            club += 1;
                                                        }
                                                        if (i.suit == 'heart') {
                                                            heart += 1;
                                                        }
                                                    } else {
                                                        if (i.suit == 'diamond') {
                                                            diamond1 += 1;
                                                        }
                                                        if (i.suit == 'spade') {
                                                            spade1 += 1;
                                                        }
                                                        if (i.suit == 'club') {
                                                            club1 += 1;
                                                        }
                                                        if (i.suit == 'heart') {
                                                            heart1 += 1;
                                                        }
                                                    }
                                                } else {
                                                    if (get.value(i) <= 5) {
                                                        if (i.suit == 'diamond') {
                                                            diamond1 += 1;
                                                        }
                                                        if (i.suit == 'spade') {
                                                            spade1 += 1;
                                                        }
                                                        if (i.suit == 'club') {
                                                            club1 += 1;
                                                        }
                                                        if (i.suit == 'heart') {
                                                            heart1 += 1;
                                                        }
                                                    }
                                                }
                                            }
                                        if ((diamond > 0 && diamond1 > 0) || (spade > 0 && spade1 > 0) || (club > 0 && club1 > 0) || (heart > 0 && heart1 > 0)) {
                                            if (target == player) return 9;
                                            return 0;
                                        }
                                        return -1;
                                    },
                                },
                            },
                            group: ['zmjixiexianzhe_2'],
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '机',
                                    intro: {
                                        content(storage, player) {
                                            return `你使用${get.translation(storage)}牌后${get.translation(player.storage.zmjixiexianzhe)}摸一张牌`;
                                        },
                                    },
                                    init(player) {
                                        player.storage.zmjixiexianzhe_1 = 0;
                                    },
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card.suit == player.storage.zmjixiexianzhe_1;
                                    },
                                    content() {
                                        player.storage.zmjixiexianzhe.draw();
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.zmjixiexianzhe != 0;
                                    },
                                    content() {
                                        player.storage.zmjixiexianzhe = 0;
                                        player.storage.zmjixiexianzhe_1 = 0;
                                        player.removeSkill('zmjixiexianzhe_1');
                                    },
                                },
                            },
                        },
                        zmtianrenjiuzai: {
                            mark: true,
                            marktext: '灾',
                            intro: {
                                content(storage, player) {
                                    var num = storage * 5 * player.storage.zmyuzai_1;
                                    return `已解锁${storage}个附属技能,所有附属技能触发概率为${num}%`;
                                },
                            },
                            init(player) {
                                player.storage.zmtianrenjiuzai = 0;
                            },
                            nobracket: true,
                            forced: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                if (player.storage.zmqiongzai == true && player.storage.zmlanzai == true && player.storage.zmchouzai == true && player.storage.zmshuaizai == true && player.storage.zmyuzai == true && player.storage.zmnuzai == true && player.storage.zmfengzai == true && player.storage.zmkuangzai == true && player.storage.zmtanzai == true) return false;
                                return player.storage.zmt_np >= 5 * player.storage.zmtianrenjiuzai;
                            },
                            content() {
                                'step 0';
                                var list1 = ['懒灾', '丑灾', '衰灾', '穷灾', '愚灾', '怒灾', '疯灾', '狂灾', '贪灾'];
                                if (player.storage.zmlanzai == true) {
                                    list1.remove('懒灾');
                                }
                                if (player.storage.zmchouzai == true) {
                                    list1.remove('丑灾');
                                }
                                if (player.storage.zmshuaizai == true) {
                                    list1.remove('衰灾');
                                }
                                if (player.storage.zmqiongzai == true) {
                                    list1.remove('穷灾');
                                }
                                if (player.storage.zmyuzai == true) {
                                    list1.remove('愚灾');
                                }
                                if (player.storage.zmnuzai == true) {
                                    list1.remove('怒灾');
                                }
                                if (player.storage.zmfengzai == true) {
                                    list1.remove('疯灾');
                                }
                                if (player.storage.zmkuangzai == true) {
                                    list1.remove('狂灾');
                                }
                                if (player.storage.zmtanzai == true) {
                                    list1.remove('贪灾');
                                }
                                player
                                    .chooseControl(list1)
                                    .set('ai', function () {
                                        if (player.storage.zmchouzai == false) return '丑灾';
                                        if (player.storage.zmshuaizai == false && player.storage.zmchouzai == true) return '衰灾';
                                        if (player.storage.zmnuzai == false && player.storage.zmchouzai == true && player.storage.zmshuaizai == true) return '怒灾';
                                        if (player.storage.zmyuzai == false && player.storage.zmchouzai == true && player.storage.zmshuaizai == true && player.storage.zmnuzai == true) return '愚灾';
                                        return list1.randomGet();
                                    })
                                    .set('prompt', '选择一个附属技能永久解锁');
                                ('step 1');
                                if (result.control == '懒灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzailan');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('懒灾解锁');
                                    player.storage.zmlanzai = true;
                                    player.enableSkill('zmlanzai', ['zmlanzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '穷灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaiqiong');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('穷灾解锁');
                                    player.storage.zmqiongzai = true;
                                    player.enableSkill('zmqiongzai', ['zmqiongzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '丑灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaichou');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('丑灾解锁');
                                    player.storage.zmchouzai = true;
                                    player.enableSkill('zmchouzai', ['zmchouzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '衰灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaishuai');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('衰灾解锁');
                                    player.storage.zmshuaizai = true;
                                    player.enableSkill('zmshuaizai', ['zmshuaizai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '愚灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaiyu');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('愚灾解锁');
                                    player.storage.zmyuzai = true;
                                    player.enableSkill('zmyuzai', ['zmyuzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '贪灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaitan');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('贪灾解锁');
                                    player.storage.zmtanzai = true;
                                    player.enableSkill('zmtanzai', ['zmtanzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '疯灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaifeng');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('疯灾解锁');
                                    player.storage.zmfengzai = true;
                                    player.enableSkill('zmfengzai', ['zmfengzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '狂灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzaikuang');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('狂灾解锁');
                                    player.storage.zmkuangzai = true;
                                    player.enableSkill('zmkuangzai', ['zmkuangzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                                if (result.control == '怒灾') {
                                    player.recover();
                                    game.playzm4('zmtianrenjiuzainu');
                                    player.storage.zmt_np -= 5 * player.storage.zmtianrenjiuzai;
                                    if (player.storage.zmtianrenjiuzai >= 5) {
                                        game.mp424('zmzhoubai');
                                    }
                                    player.popup('怒灾解锁');
                                    player.storage.zmnuzai = true;
                                    player.enableSkill('zmnuzai', ['zmnuzai']);
                                    player.storage.zmtianrenjiuzai += 1;
                                }
                            },
                            group: ['zmtianrenjiuzai_1', 'zmthundun', 'zmtrenxing'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmtianrenjiuzai_1 = 0;
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    lastDo: true,
                                    filter(event, player) {
                                        return player.storage.zmtianrenjiuzai_1 == 0;
                                    },
                                    content() {
                                        player.storage.zmtianrenjiuzai_1 += 1;
                                        player.disableSkill('zmlanzai', ['zmlanzai']);
                                        player.disableSkill('zmqiongzai', ['zmqiongzai']);
                                        player.disableSkill('zmchouzai', ['zmchouzai']);
                                        player.disableSkill('zmshuaizai', ['zmshuaizai']);
                                        player.disableSkill('zmyuzai', ['zmyuzai']);
                                        player.disableSkill('zmfengzai', ['zmfengzai']);
                                        player.disableSkill('zmkuangzai', ['zmkuangzai']);
                                        player.disableSkill('zmnuzai', ['zmnuzai']);
                                        player.disableSkill('zmtanzai', ['zmtanzai']);
                                    },
                                },
                            },
                        },
                        zmlanzai: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            init(player) {
                                player.storage.zmlanzai = false;
                            },
                            filter(event, player) {
                                return player.countUsed('sha', true) == 0 && player.countUsed('shan', true) == 0 && player.countUsed('tao', true) == 0 && player.countUsed('du', true) == 0 && player.countUsed('jiu', true) == 0;
                            },
                            content() {
                                player.addTempSkill('zmlanzai_1', { player: 'phaseBegin' });
                            },
                            subSkill: {
                                1: {
                                    audio: 'ext:综漫季刊肆/audio:5',
                                    trigger: {
                                        player: ['damageBegin'],
                                    },
                                    forced: true,
                                    _priority: 100,
                                    filter(event, player) {
                                        if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                        return true;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                },
                            },
                        },
                        zmqiongzai: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:5',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            init(player) {
                                player.storage.zmqiongzai = false;
                            },
                            forced: true,
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                var num0 = game.countPlayer(function (current) {
                                    return true;
                                });
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('h');
                                });
                                event.num = Math.round(num1 / num0);
                                return player.countCards('h') <= event.num;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                var th = game.findPlayer(function (current) {
                                    return (current.isMaxHandcard() && current != player) || (current.isMaxHandcard(true) && current != player);
                                });
                                event.target = th;
                                if (player.storage.zmfengzai == true && Math.random() <= ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1 && event.num == 0) {
                                    event.goto(3);
                                } else {
                                    th.chooseCard(`须交给${get.translation(player)}一张手牌`, 1, 'h', true).set('ai', function (card) {
                                        if (get.attitude(th, player) > 0) {
                                            return 6 - get.value(card);
                                        } else {
                                            return -get.value(card);
                                        }
                                    });
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    event.target.$give(result.cards[0], player);
                                    player.line(event.target);
                                    player.gain(result.cards[0], event.target);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var th = game.findPlayer(function (current) {
                                    return current.isMaxHandcard();
                                });
                                event.target = th;
                                player
                                    .chooseControl('确定', '取消')
                                    .set('prompt', '是否更改【穷灾】的效果？')
                                    .set('choiceList', [`令${get.translation(th)}进入混乱状态直到其回合结束`, `依旧令${get.translation(th)}交给你一张手牌`]).ai = function (event, player) {
                                        if (get.attitude(player, th) <= 0) return '确定';
                                        return '取消';
                                    };
                                ('step 4');
                                if (result.control == '确定') {
                                    event.target.goMad({ player: 'phaseEnd' });
                                }
                                if (result.control == '取消') {
                                    event.num += 1;
                                    event.goto(1);
                                }
                            },
                        },
                        zmyuzai: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            trigger: {
                                player: 'useCard',
                            },
                            init(player) {
                                player.storage.zmyuzai = false;
                            },
                            forced: true,
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                            },
                            content() {
                                var num = player.countCards('h');
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    })
                                );
                                player.storage.zmyuzai_1 *= 2;
                            },
                            group: ['zmyuzai_1'],
                            subSkill: {
                                1: {
                                    init(player) {
                                        player.storage.zmyuzai_1 = 1;
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.zmyuzai_1 = 1;
                                    },
                                },
                            },
                        },
                        zmshuaizai: {
                            superCharlotte: true,
                            charlotte: true,
                            init(player) {
                                player.storage.zmshuaizai = false;
                            },
                            nobracket: true,
                            trigger: {
                                global: 'gainAfter',
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0;
                            },
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                return event.player != player && get.distance(player, event.player, 'attack') <= 1;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                if (player.storage.zmfengzai == true && Math.random() <= ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1 && event.num == 0) {
                                    event.goto(2);
                                } else {
                                    if (trigger.player.countCards('h') >= 1) {
                                        game.playzm4(['zmshuaizai1', 'zmshuaizai2', 'zmshuaizai2'].randomGet());
                                        player.gainPlayerCard(trigger.player, 1, 'h', true);
                                    }
                                    event.finish();
                                }
                                ('step 2');
                                player
                                    .chooseControl('确定', '取消')
                                    .set('prompt', '是否更改【衰灾】的效果？')
                                    .set('choiceList', [`令${get.translation(trigger.player)}进入混乱状态直到其回合结束`, `依旧随机获得${get.translation(trigger.player)}一张手牌`]).ai = function (event, player) {
                                        if (get.attitude(player, trigger.player) <= 0) return '确定';
                                        return '取消';
                                    };
                                ('step 3');
                                if (result.control == '确定') {
                                    trigger.player.goMad({ player: 'phaseEnd' });
                                }
                                if (result.control == '取消') {
                                    event.num += 1;
                                    event.goto(1);
                                }
                            },
                        },
                        zmnuzai: {
                            superCharlotte: true,
                            charlotte: true,
                            init(player) {
                                player.storage.zmnuzai = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            trigger: {
                                global: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.position(i) == 'd' && Array.isArray(event.respondTo) && event.respondTo[0] != event.player && [event.respondTo[0], event.player].includes(player)) return true;
                                        }
                                }
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (Array.isArray(trigger.cards))
                                    for (var i of trigger.cards) {
                                        if (get.position(i) == 'd') {
                                            num++;
                                        }
                                    }
                                //if(num>=1){player.gain(trigger.cards,'gain2');};
                                event.num = 0;
                                ('step 1');
                                if (trigger.respondTo[0] == player) {
                                    event.mark = trigger.player;
                                } else {
                                    event.mark = trigger.respondTo[0];
                                }
                                if (player.storage.zmfengzai == true && Math.random() <= ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1 && event.num == 0) {
                                    event.goto(2);
                                } else {
                                    player.gainPlayerCard(event.mark, 1, 'h', true);
                                    event.finish();
                                }
                                ('step 2');
                                if (trigger.respondTo[0] == player) {
                                    event.mark = trigger.player;
                                } else {
                                    event.mark = trigger.respondTo[0];
                                    player
                                        .chooseControl('确定', '取消')
                                        .set('prompt', '是否更改【怒灾】的效果？')
                                        .set('choiceList', [`令${get.translation(event.mark)}进入混乱状态直到其回合结束`, `依旧获得${get.translation(event.mark)}的一张手牌`]).ai = function (event, player) {
                                            if (get.attitude(player, event.mark) <= 0) return '确定';
                                            return '取消';
                                        };
                                }
                                ('step 3');
                                if (trigger.respondTo[0] == player) {
                                    event.mark = trigger.player;
                                } else {
                                    event.mark = trigger.respondTo[0];
                                }
                                if (result.control == '确定') {
                                    event.mark.goMad({ player: 'phaseEnd' });
                                }
                                if (result.control == '取消') {
                                    event.num += 1;
                                    event.goto(1);
                                }
                            },
                        },
                        zmkuangzai: {
                            superCharlotte: true,
                            charlotte: true,
                            init(player) {
                                player.storage.zmkuangzai = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:4',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                return _status.currentPhase == player;
                            },
                            content() {
                                player.getStat().card.sha--;
                                trigger.baseDamage++;
                            },
                        },
                        zmchouzai: {
                            superCharlotte: true,
                            charlotte: true,
                            init(player) {
                                player.storage.zmchouzai = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:2',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                if (!player.hasSkill('zmchouzai_1')) {
                                    player.addTempSkill('zmchouzai_1', 'roundStart');
                                } else {
                                    if (Math.random() <= ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) {
                                        trigger.targets.remove(player);
                                        trigger.untrigger();
                                        trigger.finish();
                                    }
                                }
                            },
                            subSkill: {
                                1: {},
                            },
                        },
                        zmtanzai: {
                            superCharlotte: true,
                            charlotte: true,
                            init(player) {
                                player.storage.zmtanzai = false;
                            },
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:1',
                            trigger: {
                                global: ['discardPlayerCardBegin', 'gainPlayerCardBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (Math.random() > ((player.storage.zmtianrenjiuzai * 5) / 100) * player.storage.zmyuzai_1) return false;
                                return event.player != player && event.target == player;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        zmfengzai: {
                            superCharlotte: true,
                            charlotte: true,
                            nobracket: true,
                            audio: 'ext:综漫季刊肆/audio:7',
                            init(player) {
                                player.storage.zmfengzai = false;
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
                    },
                };
                lib.config.all.characters.add('综漫季刊肆');
                lib.config.characters.add('综漫季刊肆');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:综漫季刊肆/image/${i}.jpg`)
                }
                lib.translate['综漫季刊肆_character_config'] = `综漫季刊肆`;
                return QQQ;
            });
        },
        config: {
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
                    22: '【Dominator——上位者】 适格者以高等生命或权能闻名,或具备相关传说及概念能力等..',
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
                    13: '【神性】 与神道/愿力相关,或神性者后代所持有的属性.通常与魔性不可共存.',
                    14: '【神圣】 与纯粹正愿力相关者所持有的属性.与魔性不可共存.',
                    15: '【魔性】 与魔道/负愿力相关,或魔性者后代所持有的属性.通常与神性不可共存.',
                    16: '【时空】 时间或空间深度相关者持有的属性.',
                    17: '【混沌】 高等力量之一,与世界底层要素:混沌相关联的属性.拥有最高优先级,无序扭曲的代名词,与肃正不可共存.',
                    18: '【肃正】 高等力量之一,与世界底层要素:秩序相关联的属性.为泛世界集体意志或规则相关的抑制力代名词,与混沌不可共存.',
                    19: '【巨大】 体型与智人种相比质量百倍以内的标志.',
                    20: '【超巨大】 体型与智人种相比质量百倍以上的标志.',
                    21: '【高等力量】 特殊类型的高位能力,具备较高优先级的属性;通常表现为概念/因果/权能等.',
                    22: '【高等生命】 存在本身即与世界底层相关的特殊生命,生命层次上的最高阶层.',
                },
            },
        },
        package: {
            intro: "<br><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>综漫季刊系列为完整包【综漫季刊肆】的小部分武将分离而成,使单包体积不至于过大.分包仅包含卡面查看功能,请无视简介中的其它内容<li>武将简介内引用的图片手机端无法显示,属正常现象.",
            author: '尧',
            version: '1.0',
        },
    };
});

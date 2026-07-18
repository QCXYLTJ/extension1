import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    //wanbi
    return {
        name: '平安京',
        content(config, pack) {
            lib.arenaReady.push(function () {
                if (lib.config.extension_平安京_BackgroundMusic != '1') {
                    ui.backgroundMusic.src = `extension/平安京/audio/${lib.config.extension_平安京_BackgroundMusic}.mp3`;
                }
            });
            if (lib.rank) {
                lib.rank.rarity.legend.addArray(['paj_xx_xiej', 'paj_xx_huangchuanzhizhu', 'paj_xx_dtg', 'paj_xx_xtz', 'paj_xx_xln', 'paj_xx_yuzaoqian', 'paj_xx_xuern', 'paj_xx_jiutuntz', 'paj_xx_dx_cimutz', 'paj_xx_jz_gq', 'paj_xx_yingcao', 'paj_xx_ydj', 'paj_xx_kls', 'paj_xx_guishihei', 'paj_xx_bzh', 'paj_xx_shanfeng', 'paj_xx_dx_bl', 'paj_xx_thy', 'paj_xx_Lycj', 'paj_xx_hdz', 'paj_xx_Xiumuluqiya', 'paj_xx_Bianhua', 'paj_xx_Bi', 'paj_xx_Zhunyueshen', 'paj_xx_Guinuhongye', 'paj_xx_Hqyh', 'paj_xx_yc', 'paj_dx_xx_qfz', 'paj_xxj', 'paj_xx_thy', 'paj_xx_Baimugui', 'paj_xx_ssw', 'paj_xx_qyc', 'paj_xx_jg', 'sp_paj_xx_huangchuanzhizhu', 'sp_paj_xx_Baimugui', 'sp_paj_xx_jg']);
            }
            lib.characterReplace.paj_xx_huangchuanzhizhu = ['sp_paj_xx_huangchuanzhizhu', 'paj_xx_huangchuanzhizhu'];
            lib.characterReplace.sp_paj_xx_jg = ['sp_paj_xx_jg', 'paj_xx_jg'];
            lib.characterReplace.paj_xx_Baimugui = ['sp_paj_xx_Baimugui', 'paj_xx_Baimugui'];
            lib.translate.no2 = '取消';
            var style1 = document.createElement('style');
            style1.innerHTML = ".player .identity[data-color='dx_s'],";
            style1.innerHTML += "div[data-nature='dx_s'],";
            style1.innerHTML += "span[data-nature='dx_s'] {text-shadow: black 0 0 1px,rgba(108,255,255,1) 0 0 2px,rgba(108,255,255,1) 0 0 5px,rgba(108,255,255,1) 0 0 10px,rgba(108,255,255,1) 0 0 10px}";
            style1.innerHTML += "div[data-nature='dx_sm'],";
            style1.innerHTML += "span[data-nature='dx_sm'] {text-shadow: black 0 0 1px,rgba(108,255,255,1) 0 0 2px,rgba(108,255,255,1) 0 0 5px,rgba(108,255,255,1) 0 0 5px,rgba(108,255,255,1) 0 0 5px,black 0 0 1px;}";
            style1.innerHTML += "div[data-nature='dx_smm'],";
            style1.innerHTML += "span[data-nature='dx_smm'] {text-shadow: black 0 0 1px,rgba(108,255,255,1) 0 0 2px,rgba(108,255,255,1) 0 0 2px,rgba(108,255,255,1) 0 0 2px,rgba(108,255,255,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style1);
            lib.translate.dx_s = '射';
            lib.translate.dx_s2 = '射';
            lib.groupnature.dx_s = 'dx_s';
            lib.group.push('dx_s');
            lib.group.push('dx_sz');
            lib.translate.dx_sz = '守';
            lib.groupnature.dx_sz = 'dx_sz';
            var style2 = document.createElement('style');
            style2.innerHTML = ".player .identity[data-color='dx_sz'],";
            style2.innerHTML += "div[data-nature='dx_sz'],";
            style2.innerHTML += "span[data-nature='dx_sz'] {text-shadow: black 0 0 1px,rgba(255, 130, 0, 0.7) 0 0 2px,rgba(255, 130, 0, 0.7) 0 0 5px,rgba(255, 130, 0, 0.7) 0 0 10px,rgba(255, 130, 0, 0.7) 0 0 10px,rgba(255, 130, 0, 0.7) 0 0 20px,rgba(255, 130, 0, 0.7) 0 0 20px}";
            document.head.appendChild(style2);
            lib.group.push('dx_w');
            lib.translate.dx_w = '巫';
            lib.groupnature.dx_w = 'dx_w';
            var style3 = document.createElement('style');
            style3.innerHTML = ".player .identity[data-color='dx_w'],";
            style3.innerHTML += "div[data-nature='dx_w'],";
            style3.innerHTML += "span[data-nature='dx_w'] {text-shadow: black 0 0 1px,rgba(255, 40, 146, 1) 0 0 2px,rgba(255, 40, 146, 1) 0 0 5px,rgba(255, 40, 146, 1) 0 0 10px,rgba(255, 40 , 146, 1) 0 0 20px}";
            document.head.appendChild(style3);
            lib.group.push('dx_ss');
            lib.translate.dx_ss = '祝';
            lib.groupnature.dx_ss = 'dx_ss';
            var style4 = document.createElement('style');
            style4.innerHTML = ".player .identity[data-color='dx_ss'],";
            style4.innerHTML += "div[data-nature='dx_ss'],";
            style4.innerHTML += "span[data-nature='dx_ss'] {text-shadow: black 0 0 1px,rgba(0, 255, 0, 1) 0 0 2px,rgba(0, 255, 0, 1) 0 0 5px,rgba(0, 255, 0, 1) 0 0 10px,rgba(0, 255, 0, 1) 0 0 20px}";
            document.head.appendChild(style4);
            lib.group.push('dx_r');
            lib.translate.dx_r = '忍';
            lib.groupnature.dx_r = 'dx_r';
            var style5 = document.createElement('style');
            style5.innerHTML = ".player .identity[data-color='dx_r'],";
            style5.innerHTML += "div[data-nature='dx_r'],";
            style5.innerHTML += "span[data-nature='dx_r'] {text-shadow: black 0 0 1px,rgba(142, 0, 255, 1) 0 0 2px,rgba(142, 0, 255, 1) 0 0 5px,rgba(142, 0, 255, 1) 0 0 10px,rgba(142, 0, 255, 1) 0 0 20px}";
            document.head.appendChild(style5);
            var style6 = document.createElement('style');
            style6.innerHTML = ".player .identity[data-color='dx_sxzx'],";
            style6.innerHTML += "div[data-nature='dx_sxzx'],";
            style6.innerHTML += "span[data-nature='dx_sxzx'] {text-shadow: black 0 0 1px,rgba(0,0,0,1) 0 0 2px,rgba(0,0,0,1) 0 0 5px,rgba(0,0,0,1) 0 0 10px,rgba(0,0,0,1) 0 0 10px}";
            style6.innerHTML += "div[data-nature='dx_sxzxm'],";
            style6.innerHTML += "span[data-nature='dx_sxzxm'] {text-shadow: black 0 0 1px,rgba(0,0,0,1) 0 0 2px,rgba(0,0,0,1) 0 0 5px,rgba(0,0,0,1) 0 0 5px,rgba(0,0,0,1) 0 0 5px,black 0 0 1px;}";
            style6.innerHTML += "div[data-nature='dx_sxzxmm'],";
            style6.innerHTML += "span[data-nature='dx_sxzxmm'] {text-shadow: black 0 0 1px,rgba(0,0,0,1) 0 0 2px,rgba(0,0,0,1) 0 0 2px,rgba(0,0,0,1) 0 0 2px,rgba(0,0,0,1) 0 0 2px,black 0 0 1px;}";
            document.head.appendChild(style6);
            lib.translate.dx_sxzx = '侍';
            lib.translate.dx_sxzx2 = '侍';
            lib.groupnature.dx_sxzx = 'dx_sxzx';
            lib.group.push('dx_sxzx');
            /*十周年UI武将名背景*/
            var tenUi = document.createElement('style');
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_s']>.camp-back {background: linear-gradient(to bottom, rgb(201,255,255), rgb(108,255,255));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_r']>.camp-back {background: linear-gradient(to bottom, rgb(225,0,255), rgb(142,0,255));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_ss']>.camp-back {background: linear-gradient(to bottom, rgb(0,255,238), rgb(0,255,0));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_sxzx']>.camp-back {background: linear-gradient(to bottom, rgb(180,180,180), rgb(0,0,0));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_w']>.camp-back {background: linear-gradient(to bottom, rgb(255,202,255), rgb(255,165,255));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_sz']>.camp-back {background: linear-gradient(to bottom, rgb(255,186,0), rgb(255,164,0));}";
            /*十周年UI势力*/
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_s']>.camp-name {text-shadow: 0 0 5px rgb(108,255,255), 0 0 10px rgb(108,255,255), 0 0 15px rgb(108,255,255);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_sxzx']>.camp-name {text-shadow: 0 0 5px rgb(0, 20, 0), 0 0 10px rgb(0, 20, 0), 0 0 15px rgb(0, 20, 0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_r']>.camp-name {text-shadow: 0 0 5px rgb(167, 0, 255), 0 0 10px rgb(167, 0, 255), 0 0 15px rgb(167, 0, 255);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_w']>.camp-name {text-shadow: 0 0 5px rgb(255, 142, 255), 0 0 10px rgb(255, 142, 255), 0 0 15px rgb(255, 142, 255);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_sz']>.camp-name {text-shadow: 0 0 5px rgb(255, 164, 0), 0 0 10px rgb(255, 164, 0), 0 0 15px rgb(255, 164, 0);}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='dx_ss']>.camp-name {text-shadow: 0 0 5px rgb(0, 255, 0), 0 0 10px rgb(0, 255, 0), 0 0 15px rgb(0, 255, 0);}";
            document.head.appendChild(tenUi);
            if (config.smdx_jstx) {
                lib.skill._smdx_jstx = {
                    trigger: {
                        source: 'dieBegin',
                    },
                    forced: true,
                    _priority: 2021,
                    content() {
                        //QQQ
                        player.storage.smdx_jstx = player.storage.smdx_jstx + 1 || 1;
                        if (player.storage.smdx_jstx == 1) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印·初始之仪</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx == 2) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印•双克之理</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx == 3) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印•三大神器</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx == 4) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印•四神呼应</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx == 5) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印•五行之阵</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx == 6) {
                            player.$fullscreenpop('<font color="#D8D8BF">封印•疾风怒涛</font>', '#E9C2A6');
                        }
                        if (player.storage.smdx_jstx >= 7) {
                            player.$fullscreenpop('<font color="#D8D8BF">天下无双</font>', '#E9C2A6');
                        }
                    },
                };
            }
            if (config.zlsp) {
                lib.skill._zdzlsp = {
                    popup: false,
                    forced: true,
                    _priority: 77496,
                    trigger: {
                        player: 'gainAfter',
                        global: 'gameDrawAfter',
                    },
                    filter(event, player) {
                        return event.player == game.me;
                    },
                    content() {
                        var hs = [];
                        var hs2 = game.me.getCards('h');
                        for (var i of hs2) hs.push(game.createCard2(i.name, i.suit, i.number, i.nature));
                        hs.sort(function (a, b) {
                            if (a.name != b.name) return lib.sort.card(a.name, b.name);
                            else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                            else return a.number - b.number;
                        });
                        for (var i = 0; i < hs2.length; i++) {
                            if (hs2[i] != hs[i]) hs2[i].init(hs[i]);
                        }
                    },
                };
            }
            lib.skill._paj_xx_hut = {
                marktext: '<span class="bluetext">甲</span>',
                intro: {
                    name: '护甲',
                    mark(dialog, content, player) {
                        var str;
                        if (player.storage._paj_xx_hut.hut && typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0) {
                            if (str == undefined) str = '当前有' + player.storage._paj_xx_hut.hut + '点<护甲>(可抵挡' + player.storage._paj_xx_hut.hut + '点伤害)';
                            else str += '<br>当前有' + player.storage._paj_xx_hut.hut + '点<护甲>(可抵挡' + player.storage._paj_xx_hut.hut + '点伤害)';
                        }
                        if (player.storage._paj_xx_hut.naryhut && typeof player.storage._paj_xx_hut.naryhut == 'number' && player.storage._paj_xx_hut.naryhut > 0) {
                            if (str == undefined) str = '当前有' + player.storage._paj_xx_hut.naryhut + '点<普通护甲>(可抵挡' + player.storage._paj_xx_hut.naryhut + '点非属性伤害)';
                            else str += '<br>当前有' + player.storage._paj_xx_hut.naryhut + '点<普通护甲>(可抵挡' + player.storage._paj_xx_hut.naryhut + '点非属性伤害)';
                        }
                        if (player.storage._paj_xx_hut.natured && typeof player.storage._paj_xx_hut.natured == 'number' && player.storage._paj_xx_hut.natured > 0) {
                            if (str == undefined) str = '当前有' + player.storage._paj_xx_hut.natured + '点<属性护甲>(可抵挡' + player.storage._paj_xx_hut.natured + '点属性伤害)';
                            else str += '<br>当前有' + player.storage._paj_xx_hut.natured + '点<属性护甲>(可抵挡' + player.storage._paj_xx_hut.natured + '点属性伤害)';
                        }
                        for (var i in player.storage._paj_xx_hut) {
                            if (get.itemtype(i) == 'nature') {
                                if (typeof player.storage._paj_xx_hut[i] == 'number' && player.storage._paj_xx_hut[i] > 0) {
                                    if (str == undefined) str = '当前有' + player.storage._paj_xx_hut[i] + '点"' + get.translation(i) + '属性护甲>(可抵挡' + player.storage._paj_xx_hut[i] + '点' + get.translation(i) + '属性伤害)';
                                    else str += '<br>当前有' + player.storage._paj_xx_hut[i] + '点"' + get.translation(i) + '属性护甲>(可抵挡' + player.storage._paj_xx_hut[i] + '点' + get.translation(i) + '属性伤害)';
                                }
                            }
                        }
                        if (str != undefined) {
                            dialog.addAuto(ui.create.div('.menubutton.pointerdiv', str));
                        }
                    },
                    markcount(storage, player) {
                        if (player.storage._paj_xx_hut.hut && typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0) return player.storage._paj_xx_hut.hut;
                        else if (player.storage._paj_xx_hut.naryhut && typeof player.storage._paj_xx_hut.naryhut == 'number' && player.storage._paj_xx_hut.naryhut > 0) return player.storage._paj_xx_hut.naryhut;
                        else if (player.storage._paj_xx_hut.natured && typeof player.storage._paj_xx_hut.natured == 'number' && player.storage._paj_xx_hut.natured > 0) return player.storage._paj_xx_hut.natured;
                        else {
                            var result = 0;
                            for (var i in player.storage._paj_xx_hut) {
                                if (get.itemtype(i) == 'nature') {
                                    if (typeof player.storage._paj_xx_hut[i] == 'number' && player.storage._paj_xx_hut[i] > 0) {
                                        if (player.storage._paj_xx_hut[i] > result) result = player.storage._paj_xx_hut[i];
                                    }
                                }
                            }
                            return result;
                        }
                    },
                },
                trigger: {
                    player: 'damageBefore',
                },
                silent: true,
                filter(event, player) {
                    if (player.storage._paj_xx_hut) {
                        if (!event.nature && event.source && event.parent.name != 'paj_xx_Jingangtsy' && event.parent.name != 'paj_xx_Mingdaotsy' && event.parent.name != 'paj_xx_Longlintsy') {
                            if (!event.source.hasSkill('_paj_xx_hut_pt')) {
                                if ((typeof player.storage._paj_xx_hut.naryhut == 'number' && player.storage._paj_xx_hut.naryhut > 0) || (typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0)) return true;
                            } else return false;
                        } else if (event.parent.name != 'paj_xx_Jingangtsy' && event.parent.name != 'paj_xx_Mingdaotsy' && event.parent.name != 'paj_xx_Longlintsy' && !event.nature) {
                            if ((typeof player.storage._paj_xx_hut.naryhut == 'number' && player.storage._paj_xx_hut.naryhut > 0) || (typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0)) return true;
                        }
                        if (event.nature && event.source && event.parent.name != 'paj_xx_Jingangtsy' && event.parent.name != 'paj_xx_Mingdaotsy' && event.parent.name != 'paj_xx_Longlintsy') {
                            if (typeof player.storage._paj_xx_hut.natured == 'number' && player.storage._paj_xx_hut.natured > 0) return true;
                            if (!event.source.hasSkill('_paj_xx_hut_pt')) {
                                for (var i in player.storage._paj_xx_hut) {
                                    if (get.itemtype(i) == 'nature') {
                                        if (typeof player.storage._paj_xx_hut[i] == 'number' && player.storage._paj_xx_hut[i] > 0 && event.nature == i) return true;
                                        return false;
                                    } else if (typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0) return true;
                                }
                            } else return false;
                        } else if (event.nature && event.parent.name != 'paj_xx_Jingangtsy' && event.parent.name != 'paj_xx_Mingdaotsy' && event.parent.name != 'paj_xx_Longlintsy') {
                            if (typeof player.storage._paj_xx_hut.natured == 'number' && player.storage._paj_xx_hut.natured > 0) return true;
                            for (var i in player.storage._paj_xx_hut) {
                                if (get.itemtype(i) == 'nature') {
                                    if (typeof player.storage._paj_xx_hut[i] == 'number' && player.storage._paj_xx_hut[i] > 0 && event.nature == i) return true;
                                    return false;
                                } else if (typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0) return true;
                            }
                        }
                    }
                },
                content() {
                    var num2 = trigger.num,
                        nature,
                        str = '',
                        natured,
                        bool = [];
                    for (var i in player.storage._paj_xx_hut) {
                        if (get.itemtype(i) == 'nature') {
                            if (typeof player.storage._paj_xx_hut[i] == 'number' && trigger.nature == i) {
                                nature = i;
                            }
                        }
                    }
                    var num = 0;
                    while (trigger.num > 0) {
                        if (typeof player.storage._paj_xx_hut.naryhut == 'number' && player.storage._paj_xx_hut.naryhut > 0) {
                            player.removeHut('naryhut');
                            trigger.num--;
                            if (!bool.includes('普通')) bool.push('普通');
                            num++;
                        } else if (typeof player.storage._paj_xx_hut[trigger.nature] == 'number' && player.storage._paj_xx_hut[trigger.nature] > 0) {
                            player.removeHut(trigger.nature);
                            trigger.num--;
                            if (!bool.includes(trigger.nature)) bool.push(trigger.nature);
                            num++;
                        } else if (typeof player.storage._paj_xx_hut.natured == 'number' && player.storage._paj_xx_hut.natured > 0) {
                            player.removeHut('natured');
                            trigger.num--;
                            if (!bool.includes('属性')) bool.push('属性');
                            num++;
                            natured = true;
                        } else if (typeof player.storage._paj_xx_hut.hut == 'number' && player.storage._paj_xx_hut.hut > 0) {
                            player.removeHut();
                            trigger.num--;
                            num++;
                        } else break;
                    }
                    for (var i = 0; i < bool.length; i++) {
                        if (get.itemtype(bool[i]) != 'nature') str += bool[i];
                        else str += get.translation(bool[i]) + '属性';
                        if (bool[i + 1] != undefined) str += '/';
                    }
                    if (num && num != undefined && num != null && typeof num == 'number' && num > 0) game.log(player, '的', bool.length == 1 ? (nature != undefined ? get.translation(nature) + '属性' : natured == undefined ? '' : '属性') : str, '护甲抵挡了', bool.length <= 1 ? '' : '共计', num <= num2 ? get.cnNumber(num) : get.cnNumber(num2), '点', trigger.nature ? get.translation(trigger.nature) + '属性伤害' : '普通伤害');
                },
                subSkill: {
                    pt: {},
                },
            };
            lib.element.content.addHut = function () {
                'step 0';
                event.trigger('addHutBefore');
                ('step 1');
                event.trigger('addHutBegin1');
                ('step 2');
                event.trigger('addHutBegin');
                ('step 3');
                if (num <= 0) {
                    event.trigger('addhutZero');
                    delete event.filterStop;
                    event.finish();
                    event._triggered = null;
                }
                var str = '';
                if (source) str += '<span class="bluetext">' + get.translation(source) + '</span>令<span class="bluetext">' + get.translation(player) + '</span>';
                else str += '<span class="bluetext">' + get.translation(player) + '</span>';
                str += '获得了';
                str += get.cnNumber(num) + '点';
                if (event.nary) str += '普通';
                else if (event.nature) str += get.translation(event.nature) + '属性';
                else if (event.natured) str += '属性';
                str += '护甲';
                game.log(str);
                if (!player.storage._paj_xx_hut) player.storage._paj_xx_hut = {};
                if (!event.result) event.result = {};
                if (num > 0) event.result.num = num;
                if (!event.result.target) event.result.target = player;
                else event.result.huttarget = player;
                if (source) {
                    if (!event.result.source) event.result.source = source;
                    else event.result.hutsource = source;
                }
                if (event.nary) {
                    if (typeof player.storage._paj_xx_hut.naryhut != 'number') player.storage._paj_xx_hut.naryhut = num;
                    else player.storage._paj_xx_hut.naryhut += num;
                    return;
                } else if (event.nature) {
                    if (typeof player.storage._paj_xx_hut[event.nature] != 'number') player.storage._paj_xx_hut[event.nature] = num;
                    else player.storage._paj_xx_hut[event.nature] += num;
                    if (!event.result.nature) event.result.nature = event.nature;
                    else event.result.hutnature = event.nature;
                    return;
                } else if (event.natured) {
                    if (typeof player.storage._paj_xx_hut.natured != 'number') player.storage._paj_xx_hut.natured = num;
                    else player.storage._paj_xx_hut.natured += num;
                    if (!event.result.natured) event.result.natured = true;
                    else event.result.hutnatured = true;
                    return;
                }
                if (typeof player.storage._paj_xx_hut.hut != 'number') player.storage._paj_xx_hut.hut = num;
                else player.storage._paj_xx_hut.hut += num;
                ('step 4');
                var numx = 0;
                for (var i in player.storage._paj_xx_hut) {
                    if (typeof player.storage._paj_xx_hut[i] == 'number') {
                        numx += player.storage._paj_xx_hut[i];
                    }
                }
                player._paj_xx_hut = numx;
                if (typeof player._paj_xx_hutnum != 'number') player._paj_xx_hutnum = num;
                else player._paj_xx_hutnum += num;
                player.markSkill('_paj_xx_hut');
                event.trigger('addHutEnd');
                event.trigger('addHutAfter');
            };
            lib.element.player.addHut = function () {
                var next = game.createEvent('addhut');
                next.player = this;
                var event = _status.event;
                for (var i = 0; i < arguments.length; i++) {
                    if (typeof arguments[i] == 'number') {
                        next.num = arguments[i];
                    } else if (get.itemtype(arguments[i]) == 'player') {
                        next.source = arguments[i];
                    } else if (arguments[i] == 'nary') {
                        next.nary = true;
                    } else if (get.itemtype(arguments[i]) == 'nature') {
                        next.nature = arguments[i];
                        next.isNature = true;
                    } else if (arguments[i] == 'nature') {
                        next.natured = true;
                        next.isNature = true;
                    }
                }
                if (next.source && next.source.isDead()) delete next.source;
                if (next.num == undefined) next.num = 1;
                if (next.nature == 'poison') delete next._triggered;
                if (next.nary == undefined && next.nature == undefined) next.nonary = true;
                next.setContent('addHut');
                next.filterStop = function () {
                    if (this.source && this.source.isDead()) delete this.source;
                    if (this.num <= 0) {
                        delete this.filterStop;
                        this.trigger('addhutZero');
                        this.finish();
                        this._triggered = null;
                        return true;
                    }
                };
                return next;
            };
            lib.element.player.removeHut = function (i, num, log) {
                if (!i || i == undefined) i = 'hut';
                if (typeof num != 'number' || !num) num = 1;
                if (!this.storage._paj_xx_hut || this.storage._paj_xx_hut == undefined) return;
                if (typeof this.storage._paj_xx_hut[i] != 'number') return;
                if (num > this.storage._paj_xx_hut[i]) num = this.storage._paj_xx_hut[i];
                this.storage._paj_xx_hut[i] -= num;
                if (this.storage._paj_xx_hut[i] <= 0) delete this.storage._paj_xx_hut[i];
                var num2 = 0;
                for (var j in this.storage._paj_xx_hut) num2++;
                if (num2 <= 0) this.unmarkSkill('_paj_xx_hut');
            };
            lib.extensionMenu.extension_平安京.pajcardback = {
                name: '切换卡背',
                intro: '可以根据自己的喜好选择卡背样式.',
                init: '默认',
                item: {
                    默认: '默认',
                    paj_cardback1: '平安京<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback1.jpg>',
                    paj_cardback14: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback14.jpg>',
                    paj_cardback2: '玄武江湖<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback2.jpg>',
                    paj_cardback13: '金色卡背<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback13.jpg>',
                    paj_cardback4: '系统卡背<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback4.jpg>',
                    paj_cardback5: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback5.jpg>',
                    paj_cardback6: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback6.jpg>',
                    paj_cardback7: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback7.jpg>',
                    paj_cardback8: '无名杀<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback8.jpg>',
                    paj_cardback9: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback9.jpg>',
                    paj_cardback11: '其它<br><img style=width:40px src=extension/平安京/image/cardback/paj_cardback11.jpg>',
                    paj_cardback12: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback12.jpg>',
                    paj_cardback10: '<img style=width:40px src=extension/平安京/image/cardback/paj_cardback10.jpg>',
                },
                onclick(item) {
                    var cbcss = document.createElement('style');
                    if (lib.config.pajcardback != '默认') cbcss.innerHTML = '.card:empty,.card.infohidden{background: url(extension/平安京/image/cardback/' + item + '.jpg);background-size: 100% 100% !important;}';
                    document.head.appendChild(cbcss);
                },
            };
        },
        precontent() {
            //—————————————————————————————————————————————————————————————————————————————数据操作相关自定义函数
            const numfunc = function () {
                if (!lib.number) {
                    lib.number = [];
                    for (var i = 1; i < 14; i++) {
                        lib.number.add(i);
                    }
                } //添加lib.number
                window.sgn = function (bool) {
                    if (bool) return 1;
                    return -1;
                }; //true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                }; //始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                }; //始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                }; //始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                }; //始终返回正数且至少为1
                window.deepClone = function (obj, visited = new WeakMap()) {
                    if (obj === null || typeof obj !== 'object' || obj instanceof window.Element) {
                        return obj;
                    }
                    if (visited.has(obj)) {
                        return visited.get(obj);
                    }
                    if (Array.isArray(obj)) {
                        return obj.map((item) => deepClone(item, visited));
                    }
                    const clonedObj = {};
                    visited.set(obj, clonedObj);
                    for (let key in obj) {
                        if (Object.hasOwn(obj, key)) {
                            clonedObj[key] = deepClone(obj[key], visited);
                        }
                    }
                    return clonedObj;
                }; //深拷贝对象
                window.factorial = function (num) {
                    num = Math.round(num);
                    if (num < 0) {
                        return 0;
                    }
                    if (num < 2) {
                        return 1;
                    }
                    let result = 1;
                    for (let i = 2; i <= num; i++) {
                        result *= i;
                    }
                    return result;
                }; //阶乘
                window.isPrime = function (num) {
                    if (num === 2 || num === 3) return true;
                    if (num < 2 || num % 2 === 0 || num % 3 === 0) return false;
                    for (let i = 5; i * i <= num; i += 6) {
                        if (num % i === 0 || num % (i + 2) === 0) return false;
                    }
                    return true;
                }; // 质数
            };
            numfunc();
            //—————————————————————————————————————————————————————————————————————————————视为转化虚拟牌相关自创函数
            const shiwei = function () {
                lib.element.player.filterCardx = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card);
                    if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                    if (info.notarget) return true;
                    if (!info.filterTarget) return true;
                    if (!info.enable) return true;
                    return game.hasPlayer(function (current) {
                        if (info.multicheck && !info.multicheck(card, player)) return false;
                        if (filter) {
                            if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                            return lib.filter.targetEnabledx(card, player, current);
                        }
                        return lib.filter.targetEnabled(card, player, current); //目标限制
                    });
                }; //适用于choosetouse的filtercard
                lib.element.player.filterCard = function (card, filter) {
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const player = this,
                        info = get.info(card),
                        event = _status.event;
                    const evt = event.name.startsWith('chooseTo') ? event : event.getParent((q) => q.name.startsWith('chooseTo'));
                    if (evt.filterCard2) {
                        return evt._backup.filterCard(card, player, evt);
                    } //viewAs的技能会修改chooseToUse事件的filterCard
                    else if (evt.filterCard && evt.filterCard != lib.filter.filterCard) {
                        return evt.filterCard(card, player, evt); //这里也有次数限制
                    } else {
                        if (!lib.filter.cardEnabled(card, player)) return false; //卡牌使用限制
                        if (info.notarget) return true;
                        if (!info.filterTarget) return true;
                        if (!info.enable) return true;
                        if (evt.name == 'chooseToRespond') return true; //chooseToRespond无次数距离目标限制
                        if (filter) {
                            if (!lib.filter.cardUsable(card, player, evt)) return false; //次数限制
                        }
                        if (evt.filterTarget && evt.filterTarget != lib.filter.filterTarget) {
                            return game.hasPlayer(function (current) {
                                return evt.filterTarget(card, player, current);
                            });
                        }
                        return game.hasPlayer(function (current) {
                            if (info.multicheck && !info.multicheck(card, player)) return false;
                            if (filter) {
                                if (!lib.filter.targetInRange(card, player, current)) return false; //距离限制
                                return lib.filter.targetEnabledx(card, player, current);
                            }
                            return lib.filter.targetEnabled(card, player, current); //目标限制
                        });
                    }
                }; //删除次数限制//filter决定有无次数距离限制//viewAs的技能会修改chooseToUse事件的filterCard
                lib.element.player.qcard = function (type, filter, range) {
                    const list = [];
                    for (const i in lib.card) {
                        const info = lib.card[i];
                        if (info.mode && !info.mode.includes(lib.config.mode)) {
                            continue;
                        }
                        if (!info.content) {
                            continue;
                        }
                        if (['delay', 'equip'].includes(info.type)) {
                            continue;
                        }
                        if (type && info.type != type) {
                            continue;
                        }
                        if (filter !== false) {
                            const player = this;
                            if (range !== false) {
                                range = true;
                            }
                            if (!player.filterCard(i, range)) {
                                continue;
                            }
                        }
                        list.push([lib.suits.randomGet(), lib.number.randomGet(), i]); //花色/点数/牌名/属性/应变
                        if (i == 'sha') {
                            for (const j of Array.from(lib.nature.keys())) {
                                list.push([lib.suits.randomGet(), lib.number.randomGet(), 'sha', j]);
                            }
                        }
                    }
                    return list;
                }; //可以转化为的牌//filter控制player.filterCard//range控制是否计算次数与距离限制
            };
            shiwei();
            game.import('character', function (lib, game, ui, get, ai, _status) {
                var pajCharacter = {
                    name: 'paj',
                    connect: true,
                    character: {
                        paj_xxj: ['female', 'dx_sz', 4, ['dx_xuexi', 'xy_paj', 'x_paj'], ["des:吸血姬传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>我并不是从出生起,就是现在这个样子的.父亲还活着的时候,我喜欢吃的是紫苏.父亲会把紫苏和牛肉放到罐子里炖,直到飘出香味.我现在还记得那种味道,只是我已经再也吃不到了.母亲也是,她也再也吃不到父亲的炖牛肉了.<br>传记二<br>紫苏的气味会让母亲不适.每次我吃得津津有味时,母亲都会一脸苦恼地跑到院子里.父亲就会追过去.当我把紫苏和牛肉都吃完,父亲就会带着破涕为笑的母亲回来.但是那一天不一样.父亲追出去之后再也没有回来.回来的只有母亲一人.母亲的脸色苍白,带着我无法形容的表情,抱紧了我.<br>传记三<br>她用力地把我按在怀里,我能感觉到扶住我后脑勺的手心,滑腻腻的,带有难闻的腥臭.我忍受着那腥臭味,却突然感觉脖子上传来一阵痛,好痛,好像是被谁咬了.失去知觉之前,我发现那腥臭味,开始变得香甜.从那以后,我再也没有见过我的双亲.当然,也再也没有人给我做紫苏牛肉了.记忆中最后闻到的腥臭之物,后来变成了我唯一的食粮.</div>"]],
                        paj_xx_jg: ['female', 'dx_s', 3, ['paj_xx_Pmzj', 'paj_xx_lljf', 'paj_xx_shc', 'paj_xx_wnjj'], ["des:桔梗传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>我叫桔梗,我是净化四魂之玉的巫女. 我从来不让人看到我脆弱的一面,也不能有所迷惑,因为那样的话会让妖怪趁虚而入. 虽然我是人类,却不能像平常人一样的活着. 是的,我是巫女,这就是我这辈子的宿命. 犬夜叉,你不是说过吗,想要变成人类.而我相信了你的话. 那一天我带着四魂之玉,到你藏身的地方去...... 太可恨了......你为什么背叛我,犬夜叉! <br>传记二<br>是吗,原来是那个盗贼...... 奈落的体内,确实残留着鬼蜘蛛的心. 那个盗贼一直希望我成为他的女人,特意设下陷阱,让我亲手把你杀掉. 就是受盗贼鬼蜘蛛强烈的嫉妒心驱使,让我和犬夜叉可悲地互相残杀. 是为了得到被污染的玉吗？ 没错,就这么点小事,然而,这就是人类啊. 犬夜叉,我们本该无缘再会的. 曾紧紧纠缠在一起的命运之线,已经无法再复原了. 当时的身体已化为灰烬,但这个假的身体,这个泥土和骨灰造就的虚假的身躯......现在对我而言,更加自由. 我的魂魄比那时更自由,不论憎恨,或是爱怜. <br>传记三<br>四魂之玉如果交给邪恶的妖怪的话,妖力会越来越强. 妖怪奈落,不,半妖奈落,你就是最需要四魂之玉的力量的吧？ 只要奈落仍有鬼蜘蛛的心,必定能够趁虚而入,那时正是净化奈落,让他从这个世界上完全消失的时机. 奈落啊,好好收集四魂之玉碎片吧. 当你取得完整的四魂之玉之时,我就会送你下地狱. 是的,我是巫女. 这就是我这辈子的宿命.</div>"]],
                        paj_dx_xx_qfz: ['male', 'dx_sxzx', 4, ['paj_xx_wfjk', 'paj_xx_cd'], ["des:背景故事<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>浮生一梦,万法皆空. 佛曰八苦:生、老、病、死、怨憎会、爱别离、求不得、五阴炽盛. 凡间人人遭此劫难,我有意渡世人,世人却沉迷红尘中,红尘化骨,诸事旨空,唯有因果,几番轮转.生生不灭. 青灯古佛边,夜夜通明,唯有木鱼声相伴.日复一日,年复一年,韶华尽失,忘却尘寰. <br>传记二<br>我常谓世人曰,心不动则无苦无痛. 万象非实,万象若梦,万象乃虚,渡我者,佛祖慈悲. 入我佛门,潜心向善,知我所知,得我所得,无欲无求. 戒嗔戒痴,避色避贪,方得极乐. 然终能斩断尘念者,不过寥寥数人. <br>传记三<br>世人谓我曰,动乱之中安能独善其身,受难之时岂有极乐？ 鬼魅横行,白骨遍野,佛家清净不过妄言. 我思索良久,终得其解.袈裟染血,禅杖伏魔,时之将至,归入凡世也. 悟法负青灯,破戒济苍生,以证禅心."]],
                        paj_xx_qyc: ['male', 'dx_sxzx', 4, ['paj_xx_Tsy', 'paj_xx_fzs'], ["des:背景故事<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>犬夜叉:铁碎牙.獠牙啊,老爹还真是留了个了不起的东西给我.虽然我从来也没有被老爹疼爱过的经历,不过老爹既然把铁碎牙藏在我的右眼里,我就绝不会把它交给任何人.就算是那位了不起的兄长大人也一样. 杀生丸:一直隐藏在父亲亡骸体内的宝刀,它的名字就叫做铁碎牙,终于让我找到了.父亲还真是把坟墓藏在奇怪的地方了.右眼的黑珍珠,没想到指的是封印在你右眼中的黑珍珠. 犬夜叉:是你,杀生丸!你就为了这种事情……可恶,竟然用妖术欺骗我!竟然敢装成我妈妈. 杀生丸:余兴节目而已. 犬夜叉:混蛋,我饶不了你. 杀生丸:真是无趣啊,是吧,犬夜叉？有个叫做人类的卑贱生物当母亲的半妖,犬妖一族的耻辱,你的体内流淌着污秽的血.半妖能做什么？ 犬夜叉:半妖啊,妈妈过世的时候,我还是个小鬼头而已.对了,我想起来了,那个时候,那个时候妈妈哭了,因为她想到我的处境,想到我的未来,而为我流泪了.管他是什么人类还是妖怪,竟然利用我妈妈设下陷阱,太不可原谅了!就算为了我的母亲,我也绝不能输给你,杀生丸! 杀生丸:对人类的女子,对你母亲的种种思念,使父亲沦为这副骸骨.拔刀,犬夜叉 !让我见识见识,犬夜叉!你才是铁碎牙继承人的证明. 犬夜叉:那种东西我才没有兴趣,我不想看到你那目中无人的脸了.铁碎牙在搏动……我听得到,这是铁碎牙的脉搏.妖气在我和铁碎牙体内流动.拜托了铁碎牙,我相信你! 杀生丸:就让我的毒爪来把你融化吧. 犬夜叉:我来了!铁碎牙!</div>"]],
                        paj_xx_yc: ['male', 'dx_r', 3, ['paj_xx_xiuluo', 'paj_xx_my', 'paj_xx_Tl'], ["des:背景故事<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>恶鬼,那些人类好像是这么喊本大爷的.本大爷最近都没听到过这名字了,差点忘了.因为这么喊本大爷的最后都. 哈哈哈,你那害怕的表情,还真不错.不过已经晚了.你是刚刚到这里来吧？不然怎么可能连本大爷都不知道？不过被本大爷抓到,也是一种幸运. <br>传记二<br><为什么>？因为你的村庄已经被我烧掉了啊,连同村子里的人一起.又是<为什么>？没有为什么,想烧掉就烧掉了. 你的问题可真多啊,不过话多的人,本大爷也不讨厌就是了.那种不爱说话,冷冰冰的家伙,才是看了就心烦.既然你这么好奇,本大爷就一起回答你.本大爷没有家,没有家人,也没有朋友,明白了吗？<br>传记三<br>哈？你要诅咒我吗？暗地里诅咒本大爷的人也不少,当面还是第一次,你胆子还真大啊. 哈哈哈,<会失去自己珍惜的东西>,这也算诅咒吗？本大爷从一开始,就没有什么珍惜的东西,这点不是已经告诉过你了吗？ 虽然话多的人不讨厌．但脑子不好使的家伙还是早点消失吧.只是想教训教训他而已．怎么这么简单就死掉了啊？人类可真无聊啊.</div>"]],
                        paj_xx_Hqyh: ['male', 'dx_sxzx', 3, ['paj_xx_Yueya', 'paj_xx_Xxjie'], ["des:<div class='popup pointerdiv' style='width:80%;display:inline-black'><我叫黑崎一护,请多指教!> 黑崎一护拥有强大的战斗能力,且具有多种形态变化.因此技能设计围绕他坚韧的战斗能力和多种不同形态展开,突出其持续作战的特点.黑崎一护在不同状态下的技能拥有不同的提升效果,在造成减速的同时,通过多段位移实现持续贴身进行输出.<br>"]],
                        paj_xx_Zhunyueshen: ['female', 'dx_w', 3, ['paj_xx_Mingyue', 'paj_xx_Zhuyue'], ["des:背景故事<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 在人类眼中,神是外观有别于人类,又无所不能的存在.神可以赐予人类以智慧,满足人类的祈愿,保障人类的生存.神这个字眼,仿佛在人类心中处于至高无上的地位,神圣而不可亵渎. 我就是这神社中供奉着的神灵.至少,这周围的人类都是这么认为的. <br>传记二<br> 在饥荒时期,人类祈求食物.虽然我无法凭空变出珍馐美馔,但我可以飞去百里外的深山,击杀野鹿和野兔,带回来供人类享用.在干旱时期,人类祈求水源.虽然我无法开山引水呼风唤雨,但我可以飞去千里外的河流,一次又一次地取水,直至将人类的水井填满.每次满足了人类的愿望,他们都会一秉虔诚地跪在我面前,感激我帮他们渡过难关. 我喜欢这种被需要、被感激的感觉,即使它来之不易.这大概就是做一个神的感觉吧. <br>传记三<br> 至今为止,我满足了所有人的祈愿,除了那一个……那是来自一个人类孩子的愿望.那天他好像因为受到了惊吓而有些颤抖,学着大人的动作,眼泪汪汪地向我祈愿.他希望我可以除尽世上的妖怪,因为他妈妈说调皮的孩子会被妖怪吃掉.虽然我不能满足他的祈愿,但是我会一直保护他不被妖怪吃掉的. 可是,妖怪这个字眼,在人类心中真的有那么不堪吗?我的力量和神比起来,明明就没有区别!</div>"]],
                        paj_xx_Bianhua: ['female', 'dx_w', 3, ['paj_xx_Siwangzhihua', 'paj_xx_Huafu', 'paj_xx_Huangquanhuajing'], ["des:背景故事<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 呵呵,人类总是把誓言和承诺挂在嘴边. 如果你真的如你所起誓的那样,那就先和我一起下黄泉吧. 不,我不是开玩笑,我是认真的哦.我有说过自己是人类吗,看来你是误会了什么呢. 我住在黄泉的河岸,那里有一片彼岸花海.从春天到夏天,从秋天到冬天,四季盛开的花朵,就像火焰一样,染红了整个河川.那可真是十分壮观的景象呢.不过人们只有在死后,才能看到这盛况了. <br>传记二<br> 害怕了吗？ 不过这也是自然的吧,人类啊,既怕<死亡>、又怕<妖怪>,是非常软弱的生物. 但是我曾经认识一个人,他可是和其他人类不一样. 是的,那是个又勇敢、又坚忍的人类.他对我起誓,他毫不畏惧,最后也和我一起,去了黄泉,看到了那片美丽的花海. <br>传记三<br> 你问那个人现在在哪里吗？ 呵呵,对了,你看不见他. 他就是这里,在我的身体里哦. 他成为了我的花泥,变成了我的养分,流入我的身体,给我提供了源源不断的能量.那真是个意志坚定的人呢. 嗯？你怎么不说话了,呵呵,你也想成为我的养分吗？</div>"]],
                        paj_xx_Xiumuluqiya: ['male', 'dx_sxzx', 3, ['paj_xx_Yuebai', 'paj_xx_Bailian', 'paj_xx_Bairen'], ["des:<div class='popup pointerdiv' style='width:80%;display:inline-black'><我不叫死神,我叫朽木露琪亚.> 朽木露琪亚持有尸魂界最美的斩魄刀袖白雪,普攻将对敌人造成法术伤害.技能设计则围绕露琪亚使用过的技能,还原了初舞·月白、次舞·白涟等经典表现.技能组合灵活,并且能够冰冻敌人,对敌人造成高额输出和有效的控制.</div>"]],
                        sp_paj_xx_jg: ['female', 'dx_s', 3, ['sp_paj_xx_Pmzj', 'sp_paj_xx_Llqh', 'sp_paj_xx_Shc', 'sp_paj_xx_Wnjj'], ["des:桔梗传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>我叫桔梗,我是净化四魂之玉的巫女. 我从来不让人看到我脆弱的一面,也不能有所迷惑,因为那样的话会让妖怪趁虚而入. 虽然我是人类,却不能像平常人一样的活着. 是的,我是巫女,这就是我这辈子的宿命. 犬夜叉,你不是说过吗,想要变成人类.而我相信了你的话. 那一天我带着四魂之玉,到你藏身的地方去...... 太可恨了......你为什么背叛我,犬夜叉! <br>传记二<br>是吗,原来是那个盗贼...... 奈落的体内,确实残留着鬼蜘蛛的心. 那个盗贼一直希望我成为他的女人,特意设下陷阱,让我亲手把你杀掉. 就是受盗贼鬼蜘蛛强烈的嫉妒心驱使,让我和犬夜叉可悲地互相残杀. 是为了得到被污染的玉吗？ 没错,就这么点小事,然而,这就是人类啊. 犬夜叉,我们本该无缘再会的. 曾紧紧纠缠在一起的命运之线,已经无法再复原了. 当时的身体已化为灰烬,但这个假的身体,这个泥土和骨灰造就的虚假的身躯......现在对我而言,更加自由. 我的魂魄比那时更自由,不论憎恨,或是爱怜. <br>传记三<br>四魂之玉如果交给邪恶的妖怪的话,妖力会越来越强. 妖怪奈落,不,半妖奈落,你就是最需要四魂之玉的力量的吧？ 只要奈落仍有鬼蜘蛛的心,必定能够趁虚而入,那时正是净化奈落,让他从这个世界上完全消失的时机. 奈落啊,好好收集四魂之玉碎片吧. 当你取得完整的四魂之玉之时,我就会送你下地狱. 是的,我是巫女. 这就是我这辈子的宿命.</div>"]],
                        paj_xx_hdz: ['male', 'dx_sz', 4, ['paj_xx_Xiechang', 'paj_xx_Jichao', 'paj_xx_Zhunming'], ["des:背景故事 <br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 白童子,唯独你,唯独你是我不能失去的. 当听到你说你要牺牲自己去祭祀山神的时候,我就下定了决心. 我不会让你这么做的.我一直在想如何才能救出你,直到有天我听到爸爸说,他会给你喂一种催眠药,让你失去挣扎的能力,乖乖地被山神吞食,以防你后悔. 他扭曲地笑着,<那个白童子,真是够傻的,还说着这就是幸福,真是恶心.> <br>传记二<br> <不好吗,这样就不用担心轮到我们来献出自己的孩子了.这点还是要感谢那孩子的.>妈妈也跟着爸爸一起笑了起来. <不过弟弟他不是和那家伙关系不错嘛,可别掉眼泪哦?>哥哥看着我,嘲讽地说. <不对不对,>姐姐打断哥哥的话,<还是哭一下比较好哦?这样才能显得你们感情比较好,不然会被人说冷血的哦.有的时候还是要在大家面前表演一下才行,这样大家才会对你印象比较好哦.> <啊,好像真的要哭出来了,这样可不行哦,这么脆弱的话,一点都不像我们家的孩子,还是和你的哥哥姐姐多学一些吧.>爸爸看着我,有些无奈地摇了摇头. <br>传记三<br> 真正让人觉得恶心的,才不是白童子. 祭祀的当天,我在爸爸的喝的茶里,也下了催眠药. 白童子,等等我,我会去救你的. 唯独你,唯独你是不能失去的.</div>"]],
                        paj_xx_Lycj: ['female', 'dx_sxzx', 4, ['paj_xx_Yuefeng', 'paj_xx_Longhua', 'paj_xx_Guibing'], ["des:背景故事 <br><div class='popup pointerdiv' style='width:80%;display:inline-black'>曜姬,是她曾经的名字.父亲希望她能像太阳般光耀,她也曾经是那么火热地崇拜太阳的光辉,而如今只能隐身在夜幕中忍受着轮回的煎熬. 她在痛苦中不断见证着重复的一天,活着的人不断被抹去记忆,逝者变为行尸走肉,数百年不断上演着已经无数次重复的剧情.曾经的太阳女王已不再耀眼,这所谓最幸福的一天,已成永劫.不再需要太阳的她,现在是黑夜中的鬼族公主——泷夜叉姬,带领着已无处容身的鬼魂骑士们,抵抗着这场不知何时才能结束的劫. 少女在夜幕中缓缓走来,纤长的身材被黑衣紧紧包裹,宽大的白袖在夜风中放肆飘扬.她的一头白色长发如同月光一般散发出清冷的光晕,额间淡淡的弯月纹饰为她赋予了黑夜的力量.数百年的轮回已让她的双眼中再无波澜,一双浅瞳中充满决绝.她手中那柄闪耀着紫色流光的月曜之刃寒光闪闪,令人不寒而栗,她曾用它斩落日之光辉,为城中徘徊的亡者招魂.她的世界如今只剩黑白,但那一份不屈支持着她在劫难中继续抵抗.</div>"]],
                        paj_xx_thy: ['female', 'dx_ss', 3, ['paj_xx_Taohuazhuozhuo', 'paj_xx_Xinxiang', 'paj_xx_Huawu'], ["des:背景故事 <br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 我的名字是<桃花>,是桃花的妖怪. 当我还是桃花树的时候,就经常被认成樱花,所以在化成人形的时候特意变成了和<樱>完全不一样的样子. 我不是讨厌<樱>哦.可是她居然爱上人类,她还是早点放弃比较好. 因为,<想要和人类结成夫妇>什么的,怎么可能啦. <bt>传记二<br> 樱她最后,也一定会因为这个受到伤害的. 诶？如果<妖怪能和人类结成夫妇>的话？ 我又不是什么不讲道理的恶鬼,如果真的出现那种奇迹的话,我也会好好的,真心的祝福她. 但这只是<妖怪能和人类结成夫妇>的假设而已. 不过如果樱是真的想要和那个人在一起的话,我也不得不认真起来了. 因为樱她真的只知道一根筋的努力向前,那个笨蛋. <br>传记三<br> 我必须看好她,帮她善后,因为她真的好让人放心不下啊. 嗯,我变成什么都可以,没关系的.而且以后不跟樱在一起,我就再也不用担心被认错了. 整个人都轻松起来了. 樱,你一定要幸福啊.</div>"]],
                        paj_xx_Baimugui: ['female', 'dx_s', 3, ['paj_xx_guimou', 'paj_xx_Tongyan', 'paj_xx_Zuzhouzhiyan'], ["des:背景故事 <br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 三月十二日<br> 她喘息声十分微弱,她身下汩汩不断地流出鲜血. 渐渐暗下去的瞳孔里还剩下最后一丝光亮——她正在看着我.我走近她,用手指拂过她的柔软的脸颊,她绝望地祈求着我、眼眶里卑微的眼泪正打着转,用仅剩的力气说,救……救……我……. 她的眼睛像一面镜子照着我,漂亮的眼睛——就这样失去光芒的话就太可惜了…… <br>传记二<bt> 四月二日<br> 昨天的那只猫妖真难缠啊,连我也花了这么久才回复过来. 如果不是我能看穿她的想法,也许我就要死在她手上了……不过,冒了这么大的险,还是有价值的. 这猫妖的眼睛,就像宝石一样…… 嘻嘻……以后就是我的了…… <br>传记三<br> 五月十五日<br> 怎么回事？ 为什么我耳边还有其他人的声音……是、是我夺来的眼睛发出了奇怪的声音!不对,不仅仅是这样…… 还有其他人的心声,都在我的耳边! 不、不——!</div>"]],
                        sp_paj_xx_Baimugui: ['female', 'dx_s', 3, ['sp_paj_xx_Guimou', 'sp_paj_xx_Tongyan', 'sp_paj_xx_Ningshi', 'sp_paj_xx_Zuzhouzhiyan'], ["des:背景故事 <br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br> 三月十二日<br> 她喘息声十分微弱,她身下汩汩不断地流出鲜血. 渐渐暗下去的瞳孔里还剩下最后一丝光亮——她正在看着我.我走近她,用手指拂过她的柔软的脸颊,她绝望地祈求着我、眼眶里卑微的眼泪正打着转,用仅剩的力气说,救……救……我……. 她的眼睛像一面镜子照着我,漂亮的眼睛——就这样失去光芒的话就太可惜了…… <br>传记二<br> 四月二日<br> 昨天的那只猫妖真难缠啊,连我也花了这么久才回复过来. 如果不是我能看穿她的想法,也许我就要死在她手上了……不过,冒了这么大的险,还是有价值的. 这猫妖的眼睛,就像宝石一样…… 嘻嘻……以后就是我的了…… <br>传记三<br>五月十五日<br> 怎么回事？ 为什么我耳边还有其他人的声音……是、是我夺来的眼睛发出了奇怪的声音!不对,不仅仅是这样…… 还有其他人的心声,都在我的耳边! 不、不——!</div>"]],
                        paj_xx_dx_bl: ['female', 'dx_s', 3, ['ss_s', 'jx', 'paj_xx_Ningshen'], ["des:白狼传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>在我初次化形的时候,一位结界师救了我的命. 那只污秽的怪物对我张开了血盆大口,我自己就会这样死掉了. 下一瞬间,他的箭准确无误地贯穿了怪物的喉咙. 这只庞然大物轰然倒下.身后的结界师还保持着举弓的动作.<br>传记二<br>我完全被他吸引住了,忘却了差点被怪物吞食的恐惧,只能看着他淡然地调整气息,收弓,转身离开.后来我才知道,那叫<残心>. 我开始学习弓道. 用足、胴造、备弓、起弓、拉弓、会、离. 最后是,残心. <br>传记三<br>我不停地重复练习着,无论族人怎么耻笑我学习<弱小的人类伎俩>,我都不停地重复练习着. 这跟我是否是一匹狼没有关系.弓道使我感到宁静,也让我从内心开始,渐渐变得强大. 我是否能变成,像那位结界师一样威风凛凛的、正直的妖怪呢. 再见面时,希望我强大得足以帮助他.</div>"]],
                        paj_xx_shanfeng: ['male', 'dx_r', 4, ['dx_feng', 'zhan'], ["des:山风传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>夜是月的影子,周围一片寂静. 突然,面前冲出一只巨大的妖怪,他的双眼就像燃烧的火焰.他一步一步地靠近我,他身上散发着浓烈的血腥味,我的本能告诉我逃跑,可是我的双腿已经软了. 就在我放弃求生的时候,他却从我身边走过,朝我的背后凶狠地吼叫着,发出阵阵警告的低吟. 我浑身颤抖着,但还是勉强转过身,发现背后的树丛里的群狼那一双又一双眼睛正饥饿地盯着我. 是他救了我. 　他是当之无愧的森林之王. 　他教授了我许多事情,我也不断地磨炼自己. 　慢慢地,他开始带我一起巡视他的领地,一起接受他的臣民的敬意,我明白,他想要赐予我荣誉,也希望我能背负其责任. 　　可是,那一天还是来了. 　　等我赶到的时候,他的身躯和内脏已经被啃食干净,只剩下带着刺的兽皮,上面沾染着浓浓的狼的气味. 　　他的臣民都在一旁哭泣,只有我没有流泪.我沉默地将他的兽皮戴在身上. 　　我将继承他的荣誉,也会背负他的责任. 　　我在河边休息的时候,看到了似曾相识的一幕.河对岸是那群狼的眼睛,就像最初的那天晚上. 　　我的身上散发着浓烈的血的气味;我的刀刃上满是战斗的痕迹.我一步一步地走向狼群,心中的近乎变态的喜悦吞噬了我. 　　我一直,一直在等待这一天,我曾想象过无数次,我的双手兴奋地暴起青筋.复仇的这一天终于来了. 　　那群狼察觉到了危险,它们似乎想要逃跑,可是已经晚了. 　　河岸边弥漫着腥味,河水已经是一片血海. 　　我从狼群的尸体上踩过,走向森林深处.<br>"]],
                        paj_xx_bzh: ['female', 'dx_w', 3, ['yan_蝶', 'xin_jr', 'paj_xx_Lishang'], ["des:不知火传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>原本黑寂的海面上,突然出现了一束火光.火光分裂,滋生,最终成百上千,沿着海面直达天际.这便是大妖怪不知火的传说,它深深地烙印在每一个杏原人的脑海里.每过数十年,不知火便会降临在杏原的海面,带来福祉抑或灾难.不过,传说归传说,真正见过不知火的人,却是寥寥无几.而我,却被赋予了这个神秘又不祥的名字.自从记事起,我便生活在这杏原湾的离岛之上.离岛上并无人居住,只有一座离人阁,一座闻名杏原的烟花之所.我被当作头牌歌姬培养,离人阁之于我是存在的意义,却也是内心的牢笼.每到入夜时分,我一步一步走向伫立在海面之上的舞台.看着远处星星点点的火光,那是慕名而来的游船上的渔灯.待到夜色渐浓,那火光也蔓延开来.它们成百上千,接天连地,一如传说中的大妖怪不知火.歌姬不知火,也许真的是这样呢.时间原本只是麻木地流逝着,直到一个冒失的阴阳师闯进了我的生活,他仿佛黑暗的房间中照进的一束光线,刺眼却热烈.在我的演出上读懂了我歌声中的无奈,他带着我出海,为我讲述着外面的花花世界.而我,则和着他所作的和歌,跳着真正自由的舞步.夏夜的海黑暗寂静,可是为什么会有火焰?先是遥远的一小束,接着越来越多,蔓延至整个海面.并不是游船的灯火,而是闪动着的橘色火焰,它们随着我的动作起落,仿若相处已久的友人般.也许,在漫长的岁月中,我已经与那传说合而为一了呢.</div>"]],
                        paj_xx_guishihei: ['male', 'dx_sxzx', 4, ['duanming', 'suoming'], ["des:鬼使黑传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>哈啊,你总是这么啰嗦,听你说话我都要睡着了.我是为了弟弟,才到这冥府这鬼地方来的.死后变成鬼还是变成别的什么,这种事情我才无所谓.<只要能够夺回弟弟的幸福,让我做什么都行.>正当我心里面这么想的时候.你却出现在我面前.还对我说<你和以前不一样了,现在我无法放心地把工作交给你.>帮助我实现愿望的冥府鬼使,居然就是你.<br>传记二<br>真是的,这是哪门子的玩笑啊.你还是和以前一样,老是一副认真的样子,一点都没变.就不能偶尔也稍微放松一下嘛.你对我说<只要实现了你的愿望,我就可以离开这里,重获自由>.知道啊,我早就知道了.我一开始就是这么打算的.你不该留在这种又窄又湿的地方.<br>传记三<br>我变成亡魂也无所谓.如果你能够回到人间、实现还没完成的遗愿的话,就算变成怪物,我也愿意.你是,我的.喂喂,你可别在意我的事情啊.我不是说过了么,只要是为了你,我什么都可以做.哥哥本来就应该为了弟弟,拼上一切的啊.</div>"]],
                        paj_xx_kls: ['female', 'dx_sxzx', 3, ['chuji', 'juex', 'paj_xx_Tongxin'], ["des:傀儡师传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br><你是最完美的人偶.>那个疯狂的老人对我说了这样一句话,还给了我一颗奇妙的傀儡心.扑通,扑通,扑通.他在我胸前的缝隙里,鲜活地撞击着四周的零件.这就是名为<生命>的喜悦吗？我疑惑地看向那个疯狂的老人.而他正在切开一个人类少女的尸体.<br>传记二<br>那个少女不一动不动,全身都被绝望萦绕.如果我把心脏给她,她会高兴起来吗？于是我打算从体内掏出那颗奇妙的傀儡心.<蠢货.你在做什么.啊.>老人突然扑过来,我感受到了他对我的恶意和危险.<嘭.>他摔倒在地.我挪开老人,认真的端详起那个少女.<br>传记三<br>她真好看.但是她被打开的胸腔里,少了一颗心脏.那就给你吧,要是你能动起来,你会对我笑吗？嗯,我好像失去了控制身体的能力,渐渐地,失去了知觉.<我没死,哥哥,是哥哥吗？>失去知觉之前,耳边传来了少女的声音.真好听.好羡慕啊,那个,被她,叫哥哥的人.</div>"]],
                        paj_xx_ydj: ['female', 'dx_r', 4, ['xin_sm', 'xin_daoxi'], ["des:妖刀姬传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>当我遭遇危险的时候,就会变成那样,变成兵器,这把妖刀,很可怕.强的话,会伤害别人;弱的话,会被人伤害,力量就是这样的东西.强者和弱者,到底哪一边比较幸福呢？<br>传记二<br>人类和我完全不一样,他们很弱.但我却觉得有些熟悉.我平时很少说话,也不知道要怎么诉说.可是我想试着和他们交谈,也想试着靠近他们,还想试着去理解他们.也许那么做之后,我就能知道为什么我会觉得那么熟悉了.但我却不能靠近他们.很想,可是不能.<br>传记三<br>虽然不想遭遇「危险」,才会变成那个样子.不过对许多人来说,我才是危险.为了保护自己不受「伤害,而伤他人……就是我的宿命.所以,不要和我交谈,不要理解我,也不要靠近……如果你不想,被我伤害的话.善良？不,我想我并不是善良.要说的话……或许弱的人是我也说不定.只有弱者,才会害怕被伤害并为此不惜去伤害其他人.我好像说的太多了,下次再会.或许不再会对你来说,反而比较好.那么还是,后会无期吧.</div>"]],
                        paj_xx_yingcao: ['female', 'dx_ss', 3, ['sh_mark', '缠绕', 'zhiyu_d'], ["des:萤草传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>昨天大家回来的时候,身上又都是伤痕累累的. 真是的.跟他们说了,不要在外面打架,不要跟别的妖怪起冲突,总是不肯听. 也不愿意告诉我到底发生了什么事. .不行,今晚我要跟过去看看到底是怎么回事. <那家伙也太强了.><这次一定要把我们的地盘赢回来.> 大家嘴里这么说着,嘟囔着走向了我们的地盘边界. <br>传记二<br>我听到了一个陌生女孩子的声音,我探出头去. 大家居然在欺负一个女孩子.怎么可以这样.这次一定要好好地说他们一顿. 诶？那个女孩子.好凶呀..大家都被打倒了.诶诶诶.？ <切.一个能打的都没有>,女孩子可不能用这种凶恶的语气说话哦. 那个扛着狼牙棒的女孩子往这边看过来了. 呜呜呜,她看到我了. <br>传记三<br> <哈.这里还藏着一头.>我才不是<一头>呢. 呜哇哇,她发现我了吗？ 狼牙棒砸下来了.不,不能哭,不能哭. <但是,不要哭什么的,做不到啦.> 呜哇.我好害怕啊.</div>"]],
                        paj_xx_jz_gq: ['male', 'dx_sxzx', 3, ['jz_gq_zn', 'jz_gq_rc', 'xin_gz'], ["des:鬼切传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>唔,唔啊,咳咳咳,我从血泊里爬起.刚才真是一场恶战.我本抱着赴死的心去决斗,没想到我竟然活了下来.我的手到现在还在发抖,无法握住掉在地上的刀.不是因为恐惧,而是难以平息的恨意.但是,那个人类的尸体,去哪里了呢？这时,我看到那只落在地上的鬼手,茨木童子的鬼手,竟然握住了我的刀.<br>传记二<br>也许是那个人类的血起了作用.茨木童子的鬼手竟被我支配了.我一定要找到茨木童子.我跟着那只鬼手的指引来到大江山,这里已是一片狼藉.茨木童子:鬼切.我一定要报我这断臂之仇.鬼切:等等.茨木童子.茨木童子:喝哈.鬼切:喝哈.<br>传记三<br>哈,哈,唔呵,哈哈哈哈哈.不愧是你啊.茨木童子.突然,我却感到左眼一阵阵刺痛.难道这是,契约的效果？可恶.可恶啊.原来那个人类还没死吗？怎么可能.不会原谅你.不会放过你.该死的人类.哈哈哈哈哈哈哈哈哈.茨木童子:等等,这股戾气,鬼切:可恶.还不够.还远远没有结束.可恶.茨木童子,我们停手吧.我会帮助你一起复仇.茨木:什、什么.如果不解决这一切,这份契约的痛苦,将永远溶在我的血中.我绝对、绝对不会放过那个人类.</div>"]],
                        paj_xx_dx_cimutz: ['male', 'dx_sxzx', 4, ['gw', 'dx_gy'], ["des:茨木童子传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>六道众生,万物生灵都不过是这三千世界中的沧海一粟,妖怪亦然.一旦松懈,就会被其他的种族欺凌,玩弄,甚至屠戮.所以他们必须有一个领导者来指导他们.为了在这弱肉强食的世界中活下去,匍匐在强者的脚下吧.<br>传记二<br>他,就像一片混沌中的明亮灯塔.他实力超群,头脑聪明、还冷静谨慎得令人可怕.这就是我的挚友,酒吞童子.君临妖族巅峰的男人.但,令人恼火的是,如今的他却被两样东西冲昏了头脑.就是女人和酒.<br>传记三<br>名叫红叶的女鬼,就是因为那女人,酒吞童子才会.我要快点帮助他找回自己,从哪着手好呢？对了,安倍晴明.这个与红叶有关的人类阴阳师,只要找到他,想必酒吞童子一定能够取回失去的怒火与憎恨.<div>"]],
                        paj_xx_jiutuntz: ['male', 'dx_sxzx', 5, ['kq', 'fqh_kx', 'gwli'], ["des:酒吞童子传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>虽然人们常说<喝酒伤身>,但本大爷不这么觉得.对本大爷来说,<酒治百病>.只要一起喝一杯,就能知道对方是什么器量.看看那些不沾酒的家伙,简直是无聊透顶.阎魔那混蛋还留在另一个世界啊,还真亏她在那种阴湿狭窄的地方还能呆得住啊.大天狗那个笨蛋,还在追随着那个蠢货吧,也是不像样子啊.<br>传记二<br>剩下的就是荒川主,听说那家伙也加入了大天狗一伙吧？那可真是够闲的.说到底,都是那个安倍晴明吧.那个渺小的人类,居然掀起了这么大的风浪.那家伙身边也全是怪胎,八百比丘尼到底在想什么啊.晴明分离出来的黑影,暂时先叫他<黑晴明>吧.那东西究竟是什么啊？就连本大爷也完全搞不懂.<br>传记三<br>看来在这一系列事件的背后,还有我不知道的阴谋啊.一想起鬼女红叶的事情,本大爷就一肚子的火.看来在这乱世,本大爷也不能只考虑自己的事情了.烦死了,之后的事情之后再想好了.</div>"]],
                        paj_xx_xuern: ['female', 'dx_w', 3, ['sf_d', 'xzz_dx', 'paj_xx_Chuixue'], ["des:雪女传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>九月二十三日,雪<br>雪原的雪永远不会停止,今天也是,和昨天一样.不过今天,我在雪原里发现了一个瘦弱的人类.他一步、一步地向前跋涉,最后倒在了茫茫大雪之中.为什么在这大雪纷飞的时候,他还要到雪原来？我忍不住好奇了起来.<br>九月二十五日,雪<br>今天,那个人醒了.不过他也不算完全醒来,也仅仅是艰难地睁开了眼睛而已,在这冰天雪地之中.意外的是,他看到我的时候,一点都没有害怕.<请问,你知道哪里有雪莲吗？>他突然这么问我.我回答了他.因为我很好奇他想做什么,就和他一起去了.我没有说谎,我只是好奇而已.<br>传记二<br>九月二十六日,雪<br>人类真的太脆弱了.如果我没有跟着他、呼风唤雪为他开路,他绝对不可能走到这里来.不过遗憾的是,我能为他做的也仅仅只有这些而已.他的病痛……我没有办法治好.<br>九月二十七日,雪<br>他应该就快死了吧.<br>九月二十八日,雪<br>他都快要死了,可还是坚持要去采雪莲.如果他死了,雪山之巅就不再是净土了,我还是把他带到别的地方埋葬他吧.<br>传记三<br>九月二十九日,雪<br>他果然真的死了.但是他不让我把他埋在别的地方,只是请求我将雪山之巅的雪莲带到他妻子坟前.为了这样一个无聊的承诺,他居然付出了自己的性命.我是感受不到温度的,但是这个男人递过来的雪莲,却让我觉得手心烫得就要燃烧了起来.连我的心都要融化了,为什么人类会喜欢这种感觉呢？</div>"]],
                        paj_xx_yuzaoqian: ['male', 'dx_w', 3, ['sss', 'huhuo', 'dtzl'], ["des:玉藻前传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>给葛叶:见信如晤.突然不知道说什么好了,那我就想到哪里写到哪里吧,还请你不要介意.葛叶,我见到你的孩子了.宫廷里的人们都在谈论他,我想替你去看看那孩子,毕竟我答应过你要好好照顾他.但那孩子,一直以守护京都为己任.他那么单纯,一定会与我为敌的.这应该就是你所说的命运吧.<br>传记二<br>最近宫廷中来了一位大人物,他见到我的时候,问我为什么要打扮成女人的模样.看来这副美貌,并不能蒙蔽所有人呢.你的孩子,长得十分像你,我好高兴,葛叶.在那孩子面前,在那副与你相似的面孔面前,我不想扮演另一个人.我会以我原本的姿态去见他.去见他,就如同见到了你.<br>传记三<br>葛叶,原谅我.我不得不给你的孩子出一个难题.事实上,连我自己都不确定这难题是否有答案,答案又是什么……不过,如果是你的孩子,一定能给我一个满意的答案.你一直以那孩子为骄傲呢.我也一直以你为骄傲,葛叶.你所说的命运,哪怕一次也好,我想要战胜它.为我祝福吧,葛叶.</div>"]],
                        paj_xx_xln: ['male', 'dx_sxzx', 4, ['飞蹄', 'bt_z', 'lp'], ["des:小鹿男传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>我从小就是孤儿,养育我的父母,就像脚下的山川林地一样,在我出生不久便被长相奇怪直立行走的生物毁坏了.后来在随着族人迁徙的过程中,身边的同伴越来越少,最后只剩下我一人..在溪边饮水的时候,我会望着自己的影子,我这样告诉自己,我要变得更强,我必须更得变强才行.<一太郎哥哥,这边有个落单的小鹿.老规矩,三太郎你先把他绊倒,我趁机割伤.><br>传记二<br><等等,二太郎.你还记得家训第二条是什么吗？.><不能恃强凌弱.><亏你们还记得.不枉祖爷爷太爷爷爷爷大伯父二伯父父亲小叔..><一太郎哥哥.他在往这边看了.><br>传记三<br>其实,我从一开始就注意到了他们,也一字不漏地听到了所有的对话.我有足够的时间和信心跑掉,或者迎头将他们撞翻.但我都没有做,而是向着他们走了过去,我能看到藏在斗篷后面的小眼睛在不安地打量着我.我坚信,这次相遇,一定会改变我的一生.</div>"]],
                        paj_xx_ssw: ['male', 'dx_r', 4, ['ayclp', 'gzj', 'ssws'], ["des:杀生丸传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>这一刻我已经等很久了.我一直在寻找牙,只要能得到牙,我就能得到更大的力量.一直隐藏在父亲亡骸体内的宝刀,需一挥就能轻易打倒上百只妖怪的牙之剑,它的名字就叫做铁碎牙,终于让我找到了.但是……被铁碎牙的结界所阻挡,碰都不能碰.为什么…… 为什么父亲……给予我的却是并非武器的治愈之刀天生牙.那是说,要我拿着刀到处救人吗？开什么玩笑,为何父亲要如此冷待我杀生丸？<br>传记二<br>犬夜叉,是个不太想记起来的名字呢.我们伟大父亲的血液中,对人类的慈悲之心,我没有继承到.人类的女子,对你母亲的种种思念,那发自内心的喜爱,使父亲沦为这副骸骨.犬夜叉……你体内流淌着污秽的血液,半妖能做什么？凭你这个半妖.对使用者而言,刀可以是活的,也可以是死的,犬夜叉只是靠蛮力挥舞铁碎牙罢了,名刀跟柴刀落得同样下场,你不会为铁碎牙感到悲哀吗？你就这么点能耐吗？可恶的犬夜叉.那么你原本就没有资格拥有铁碎牙.<br>传记三<br>弱肉强食,抛弃,无论铁碎牙,还是天生牙.原本我这只失去的左臂,正是被父亲大人传给犬夜叉的铁碎牙所斩.不过,我并没有憎恨,因为本来就是战斗中的事,对于我杀生丸可没有逃跑一说.父亲大人是出于何种考量,将天生牙交给了我,这种事情我早就没兴趣了,已经没什么可说的了.天生牙……意思是让我拔刀吗？原来如此,来试试看吧,天生牙的力量.犬夜叉……有我无你,有你无我,这就是我们的命运,给我记好了.</div>"]],
                        paj_xx_xtz: ['male', 'dx_sxzx', 4, ['bj', 'xz'], ["des:雪童子传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>当你看到这封信的时候,我应该已经不在了吧.其实我很久以前就知道这里,因为这里也是我的哥哥姐姐们最后待过的地方.他们先是化成了水,落在窗台和屋前;太阳暖暖地照耀着他们,于是他们又慢慢地升起、变成了空中的云朵.云朵最后化作雨,回到了大地、回到了他们曾经停留过的地方.我想,我一定也会和他们一样.我曾经很疑惑,为什么哥哥姐姐们要离开寒冷而安稳的家园;为什么他们明明知道自己会消失,还是选择来到这里.当我看到你的笑容的时候,我就知道自己会和他们一样,做出相同的选择.你的心,散发着温柔的光芒;就算我会消失,我也想要陪伴你.现在终于到了告别的时刻.虽然和你在一起的时光很短暂,但我一直都在看着你哦.也许之后也会有令人难过的事情发生,但也请你一定无论如何也要坚持下去.抱歉,之后不能继续陪伴你了.但是,就算只能陪你一个冬天,我也觉得非常、非常高兴.</div>"]],
                        paj_xx_dtg: ['male', 'dx_w', 3, ['paj_wshi', 'paj_yurenfb', 'paj_wxzy'], ["des:大天狗传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>我就是正义的化身.手刃过无数恶鬼,还曾与同样出身高贵的人类皇族武士并肩作战过.与怪物搏斗之人,必须要时刻提醒自己不要成为怪物.但是我,我要让所有人都臣服于我,我要给世界带去新的秩序.<br>传记二<br>为此,我需要力量,更多的力量.黑夜山的骤变,引诱着我那颗渴望变强的心,我心中不断地骚动着.那个男人,他一定在那个地方一边居高临下地笑着,一边等着我去见他吧.<成为我的仆人,为我效忠吧.><我知道你想要什么,我会给你比你想要的还多的力量.><br>传记三<br><我们一起去完成大义吧.>我听到他对我这么说.我看到他站在山顶上,背后的空气中有一道裂缝,就像被刀切开一样,从那里涌出的无尽的阴界的力量.我想象着他对我所说的那副图景,激动得浑身都在颤抖.是的,这就是我想要的,全部.</div>"]],
                        paj_xx_huangchuanzhizhu: ['none', 'dx_w', 3, ['paj_hc_youyu', 'paj_hc_chuanliu', 'paj_hc_guichuan'], ["des:荒川之主传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>荒川,源起甲武信岳,引入秩父山,经盆地,过长瀞溪谷,北行带大里郡、寄居町入关东平原.下游于熊谷转东南向,流入间川于川越市,过埼玉后再度东流,出隅田川,终入江户湾.<br>传记二<br>其中主宰,名为:荒川之主.坊间传说,荒川之主暴烈,性躁.故此荒川虽闹水凶猛,水中妖物亦不敢轻易作乱.更有云,荒川几度将竭未竭,全赖荒川之主术法所救.荒川岸旁以居之人,将之奉若神明,祈求保佑.<br>传记三<br>然则,荒川之主行事从来只凭喜好,未将此等供奉放入眼内,只将便利,予以施行水利之人.<吾乃荒川之主,只有心镇此一方水土,更无他意照拂旁人.独行水利者,善.></div>"]],
                        sp_paj_xx_huangchuanzhizhu: ['none', 'dx_w', 4, ['paj_hc_laolue', 'paj_hc_shafu'], ["des:荒川之主传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>传记一<br>荒川,源起甲武信岳,引入秩父山,经盆地,过长瀞溪谷,北行带大里郡、寄居町入关东平原.下游于熊谷转东南向,流入间川于川越市,过埼玉后再度东流,出隅田川,终入江户湾.<br>传记二<br>其中主宰,名为:荒川之主.坊间传说,荒川之主暴烈,性躁.故此荒川虽闹水凶猛,水中妖物亦不敢轻易作乱.更有云,荒川几度将竭未竭,全赖荒川之主术法所救.荒川岸旁以居之人,将之奉若神明,祈求保佑.<br>传记三<br>然则,荒川之主行事从来只凭喜好,未将此等供奉放入眼内,只将便利,予以施行水利之人.<吾乃荒川之主,只有心镇此一方水土,更无他意照拂旁人.独行水利者,善.></div>"]],
                        paj_xx_xiej: ['female', 'dx_sz', 4, ['paj_jfq', 'paj_schui'], ["des:蟹姬传记<br><div class='popup pointerdiv' style='width:80%;display:inline-black'>要去到大海的深处,一定很不容易的.所以每当有远道而来的客人出现,蟹姬总会热心地款待他们.只是蟹姬的脾气并没有看上去那么温柔,如果他们坚持要带着山洞里硬邦邦的宝石与法器离开,后果可是十分严重的哦.蟹姬的蟹生,只有三件重要的事情——吃饭,睡觉,打食材.只是提到食材,似乎不要被当成食物抓走更重要呢.作为铃鹿山优秀的吃货,蟹姬清澈的眼睛里,似乎只有对于美食单纯而执拗的渴望.红色华服,在蓝色海面的衬托下,绽放出属于夏天的热情,脚上的铃铛,在溅起的浪花里,闪耀着炫目的金色光芒.一看到身前巨大的红色蟹钳,不会再有人质疑蟹姬小小身体里隐藏的强大力量.事实上,她也确实拥有极强的捕食能力.蟹姬的大钳子会教育它如何成为一个任蟹宰割的食物.</div>"]],
                    },
                    skill: {
                        ss_s: {
                            popup: false,
                            usable: 1,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return ['sha', 'jg'].includes(event.card.name) && _status.currentPhase == player && game.countPlayer() > 2;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = player.getAttackRange();
                                if (num > 1) {
                                    player
                                        .chooseTarget('【散射】:请选择要为' + get.translation(trigger.card) + '增加的额外目标', [0, num - 1], function (card, player, target) {
                                            var player = _status.event.player;
                                            if (_status.event.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(_status.event.card, player, target) && player.inRange(target);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card)
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                }
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    trigger.targets.addArray(result.targets);
                                }
                            },
                        },
                        dx_feng: {
                            limited: true,
                            mark: true,
                            enable: 'phaseUse',
                            discard: false,
                            lose: false,
                            delay: 0,
                            init(player) {
                                player.storage.dx_feng = false;
                            },
                            filter(event, player) {
                                return player.storage.dx_feng == false;
                            },
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            position: 'he',
                            content() {
                                var t = target;
                                var c = cards;
                                t.gain(c, player, 'giveAuto');
                                t.addMark('dx_feng_m');
                                player.addTempSkill('dx_feng_use', { player: 'phaseZhunbeiBefore' });
                                player.storage.dx_feng_a = t;
                                player.addTempSkill('dx_feng_a');
                                t.addTempSkill('dx_feng_x');
                                player.storage.dx_feng = true;
                                player.awakenSkill('dx_feng');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        var hs = player.countCards('h', function (card) {
                                            return ['sha', 'juedou', 'jg'].includes(card.name);
                                        });
                                        var xz = game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) < 0 && current.hp <= hs;
                                        });
                                        if (hs > 2 && xz > 0) return -2;
                                        if (hs > 1 && xz > 0) return -1;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (target.countCards('h') > 3) return 3.3;
                                    return 2.4;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            group: 'dx_feng_r',
                            subSkill: {
                                a: {
                                    intro: {
                                        content: '到$的距离视为1',
                                    },
                                    mod: {
                                        globalFrom(from, to) {
                                            if (to == from.storage.dx_feng_a) {
                                                return -Infinity;
                                            }
                                        },
                                    },
                                },
                                x: {
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'damage')) return [0, -999];
                                            },
                                        },
                                    },
                                },
                                r: {
                                    popup: false,
                                    trigger: {
                                        global: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('dx_feng_m');
                                    },
                                    content() {
                                        trigger.player.removeMark('dx_feng_m', Infinity);
                                    },
                                },
                                use: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    filter(event, player) {
                                        return (
                                            event.card &&
                                            (get.type(event.card) == 'trick' || get.type(event.card) == 'basic') &&
                                            game.hasPlayer(function (current) {
                                                return current != player && current.hasMark('dx_feng_m');
                                            })
                                        );
                                    },
                                    content() {
                                        trigger.directHit.addArray(
                                            game.filterPlayer(function (current) {
                                                return current != player && current.hasMark('dx_feng_m');
                                            })
                                        );
                                    },
                                },
                                m: {
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        zhan: {
                            usable: 3,
                            trigger: {
                                source: 'damageSource',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing() && (get.distance(player, event.player) <= 1 || event.player.hp <= player.hp);
                            },
                            content() {
                                'step 0';
                                player.draw();
                                var stat = player.getStat();
                                if (stat && stat.card && stat.card.sha) stat.card.sha--;
                                ('step 1');
                                player
                                    .chooseTarget('是否进行『位移』与一名距离为一的角色交换位置？若如此做,本回合结束时,若其未死亡,你与其交换位置.', function (card, player, target) {
                                        return target != player && get.distance(player, target) <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    var xt = result.targets[0];
                                    player.line(xt);
                                    if (!player.storage.zhan) player.storage.zhan = [];
                                    player.storage.zhan.push(xt);
                                    player.addTempSkill('zhan_x');
                                    game.broadcastAll(
                                        function () {
                                            game.swapSeat(player, xt);
                                        },
                                        player,
                                        xt
                                    );
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                x: {
                                    popup: false,
                                    _priority: 777,
                                    trigger: {
                                        global: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var num = player.storage.zhan.length;
                                        for (var i = num - 1; i >= 0; i--) {
                                            var target = player.storage.zhan[i];
                                            game.broadcastAll(
                                                function () {
                                                    game.swapSeat(player, target);
                                                },
                                                player,
                                                target
                                            );
                                            player.storage.zhan.remove(target);
                                        }
                                        player.storage.zhan = [];
                                    },
                                },
                            },
                        },
                        yan_蝶: {
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasMark('yan_蝶')) return -Infinity;
                                },
                            },
                            markimage: 'extension/平安京/image/mark/mx7.jpg',
                            intro: {
                                name: '夜蝶',
                                name2: '蝶',
                                content: '当前有#个<焰蝶>',
                            },
                            group: ['xin_yd', 'yan_蝶_a'],
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            content() {
                                player.addMark('yan_蝶', 2);
                            },
                            subSkill: {
                                a: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return event.player != player && event.player.hasMark('yan_蝶');
                                    },
                                    silent: true,
                                    content() {
                                        var x = trigger.player.countMark('yan_蝶');
                                        player.addMark('yan_蝶', x);
                                        player.markSkill('yan_蝶');
                                        trigger.player.removeMark('yan_蝶', x);
                                        trigger.player.unmarkSkill('yan_蝶');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        duanming: {
                            group: ['duanming_r'],
                            audio: 'ext:平安京/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hp <= event.num;
                            },
                            logTarget: 'player',
                            content() {
                                trigger.num++;
                                player.draw();
                                player.addMark('duanming'); //QQQ
                            },
                            subSkill: {
                                r: {
                                    popup: false,
                                    trigger: {
                                        global: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('duanming');
                                    },
                                    content() {
                                        var num = player.countMark('duanming');
                                        player.removeMark('duanming', num);
                                    },
                                },
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    var k = player.countMark('duanming');
                                    if (card.name == 'sha') return num + k;
                                },
                            },
                        },
                        suoming: {
                            group: ['suoming_1', 'suoming_1_x'], //QQQ
                            audio: 'ext:平安京/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                target.link(true);
                                player.discardPlayerCard(target, true, 'he');
                            },
                            ai: {
                                order: 14,
                                result: {
                                    player(player, target, card) {
                                        var x = game.countPlayer(function (current) {
                                            return current != player && !current.isLinked();
                                        });
                                        var c = game.countPlayer(function (current) {
                                            return current != player && get.attitude(player, current) < 0 && current.countCards('he');
                                        });
                                        if (x > 0) return 2;
                                        if (c > 0) return 1;
                                        return 0;
                                    },
                                    target(player, target, card) {
                                        var att = get.attitude(player, target);
                                        if (!target.isLinked() || target.countCards('he')) return -1;
                                        return 0;
                                    },
                                },
                                effect: {
                                    target(card) {
                                        if (card.name == 'tiesuo') return 'zeroplayertarget';
                                    },
                                },
                                threaten: 2.5,
                            },
                        },
                        chuji: {
                            mark: true,
                            zhuanhuanji: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str1 = player.hasSkill('chuji_sha1') ? '生效' : '失效';
                                    var str2 = player.hasSkill('chuji_sha') ? '生效' : '失效';
                                    var str = player.storage.chuji ? '下次转换为·<font color="white">阳</font>:出牌阶段开始时,你可以令你下回合开始前使用的第一张【杀】指定目标时弃置其一张牌/你视为近程形态(不会成为延时锦囊的目标)<br>当前效果为<br>「<font color="black">阴</font>」<br>〔杀无距离限制/' + str2 + '〕' : '下次转换为·<font color="black">阴</font>:出牌阶段开始时,你可令你直至下个回合开始时使用【杀】无距离限制/你视为远程形态(其他角色与你距离+1)<br>当前效果为<br>「<font color="white">阳</font>」<br>〔下张杀弃对面牌/' + str1 + '〕';
                                    return str;
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            prompt2(event, player) {
                                var str = player.storage.chuji ? '出牌阶段开始时,你可以令你下回合开始前使用的第一张【杀】指定目标时弃置其一张牌/你视为近程形态(不会成为延时锦囊的目标)' : '出牌阶段开始时,你可令你直至下个回合开始时使用【杀】无距离限制/你视为远程形态(其他角色与你距离+1)';
                                return str;
                            },
                            content() {
                                'step 0';
                                if (player.storage.chuji == true) {
                                    player.storage.chuji = false;
                                    player.popup('<font color="white">☯</font>');
                                    player.removeSkill('juex_yin');
                                    player.addSkill('juex_yang');
                                    player.addTempSkill('chuji_sha1', { player: 'phaseZhunbeiBegin' });
                                    player.addSkill('chuji_mas');
                                    player.storage.chujish = true;
                                } else {
                                    player.storage.chuji = true;
                                    player.storage.chujish = true;
                                    player.popup('<font color="black">☯</font>');
                                    player.removeSkill('juex_yang');
                                    player.addSkill('juex_yin');
                                    player.addTempSkill('chuji_sha', { player: 'phaseZhunbeiBegin' });
                                    player.addSkill('chuji_mas');
                                }
                            },
                            subSkill: {
                                mas: {
                                    marktext: '同',
                                    mark: true,
                                    intro: {
                                        name: '同心',
                                        name2: '同',
                                        content: '下次使用【进攻】造成的伤害+1',
                                    },
                                },
                            },
                        },
                        juex: {
                            subSkill: {
                                yin: {
                                    marktext: '远',
                                    mark: true,
                                    intro: {
                                        name: '远程',
                                        name2: '远',
                                        content: '其他角色与你距离+1',
                                    },
                                    mod: {
                                        globalTo(from, to, distance) {
                                            return distance + 1;
                                        },
                                    },
                                },
                                yang: {
                                    marktext: '近',
                                    mark: true,
                                    intro: {
                                        name: '近程',
                                        name2: '近',
                                        content: '你不能成为延时锦囊的目标',
                                    },
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') {
                                                return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        chuji_sha: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (['sha', 'jg'].includes(card.name)) return true;
                                },
                            },
                        },
                        chuji_sha1: {
                            popup: false,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && ['sha', 'jg'].includes(event.card.name);
                            },
                            logTarget: 'target',
                            content() {
                                player.discardPlayerCard(trigger.target, true, 'he');
                                player.removeSkill('chuji_sha1');
                            },
                        },
                        sh_damage: {
                            group: 'sh_damage_1',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                for (var i of game.players) {
                                    //QQ
                                    if (i == player) continue;
                                    if (i == player.storage.sh_mark_m) {
                                        i.draw();
                                        i.recover(trigger.num);
                                    }
                                }
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    filter(event, player) {
                                        return event.player == player.storage.sh_mark_m && event.num > 0;
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 0';
                                        event.c = trigger.num * 2;
                                        event.num2 = trigger.num;
                                        ('step 1');
                                        player.draw(event.c);
                                        player.loseHp(trigger.num);
                                        trigger.cancel();
                                        ('step 2');
                                        var next = player.chooseTarget('请选择要进行分牌的角色', [1, 2], true, function (card, player, target) {
                                            return target != player;
                                        });
                                        next.set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0) {
                                                return att / (1 + target.countCards('h'));
                                            } else {
                                                return att / 100;
                                            }
                                        });
                                        ('step 3');
                                        if (!result.targets || !result.targets.length) {
                                            event.finish();
                                            return;
                                        }
                                        event.num = {};
                                        event.cards = {};
                                        event.targets = [];
                                        event.bool = true;
                                        event.ts = result.targets;
                                        for (var i = 0; i < result.targets.length; i++) {
                                            event.num[i] = 0;
                                            event.cards[i] = [];
                                            event.targets.push([result.targets[i], i]);
                                        }
                                        ('step 4');
                                        if (event.ts.length > 1) {
                                            var dialog = ui.create.dialog('请选择要给予牌的角色');
                                            for (var i of event.targets) {
                                                var target = [].concat(i[0]);
                                                dialog.add(target);
                                                if (event.cards[i[1]].length) {
                                                    dialog.add(event.cards[i[1]]);
                                                }
                                                dialog.add('');
                                            }
                                            player
                                                .chooseButton(dialog, event.bool)
                                                .set('filterButton', function (button) {
                                                    for (var i in event.num) {
                                                        for (var j of event.targets) {
                                                            if (j[0] == button.link && event.num[j[1]] >= event.c / 2) return false;
                                                        }
                                                    }
                                                    for (var i in event.cards) {
                                                        if (event.cards[i].includes(button.link)) return false;
                                                    }
                                                    return true;
                                                })
                                                .set('ai', function (button) {
                                                    var player = _status.event.player;
                                                    var att = get.attitude(player, button.link);
                                                    return att;
                                                });
                                        } else if (event.targets.length == 1) {
                                            event._result.links = [event.ts[0]];
                                            event.istarget = true;
                                        }
                                        ('step 5');
                                        if (result.links?.length) {
                                            var cards = player.getCards('h', function (card) {
                                                for (var i in event.cards) {
                                                    if (event.cards[i].includes(card)) return false;
                                                }
                                                return true;
                                            });
                                            event.target = result.links[0];
                                            var num = [0, 0],
                                                num2 = 0;
                                            for (var i in event.num) {
                                                for (var j of event.targets) {
                                                    if (j[0] == event.target && typeof event.num[j[1]] == 'number') num2 = event.num[j[1]];
                                                }
                                            }
                                            num2 = event.num2 - num2;
                                            num = [1, num2];
                                            if (!cards.length) {
                                                event.goto(8);
                                                return;
                                            }
                                            if (num2 <= 0) {
                                                event.goto(7);
                                                return;
                                            }
                                            if (cards.length > 1) {
                                                var t = [].concat(result.links[0]);
                                                var dialog = ui.create.dialog('请选择要给予的牌', t);
                                                for (var i of event.targets) {
                                                    if (event.cards[i[1]].length && i[0] == result.links[0]) {
                                                        dialog.add(event.cards[i[1]]);
                                                        dialog.add('');
                                                    }
                                                }
                                                dialog.add('你的手牌');
                                                dialog.add(cards);
                                                player
                                                    .chooseButton(dialog, num, true)
                                                    .set('filterButton', function (button) {
                                                        return cards.includes(button.link);
                                                    })
                                                    .set('ai', function (button) {
                                                        return get.value(button.link);
                                                    });
                                            } else if (cards.length == 1) {
                                                event._result.links = [cards[0]];
                                            }
                                        } else {
                                            event.goto(8);
                                        }
                                        ('step 6');
                                        if (result.links?.length) {
                                            event.card = result.links;
                                        }
                                        if (event.card && event.target) {
                                            for (var j of event.targets) {
                                                if (j[0] == event.target) {
                                                    event.num[j[1]] += event.card.length;
                                                    for (var i of event.card) event.cards[j[1]].push(i);
                                                }
                                            }
                                            result.links = [];
                                        }
                                        ('step 7');
                                        var bool = true;
                                        for (var i of event.targets) {
                                            if (event.num[i[1]] <= 0) {
                                                bool = false;
                                                break;
                                            }
                                        }
                                        if (bool == true) {
                                            event.bool = false;
                                            for (var i of event.targets) {
                                                if (event.num[i[1]] < event.num2) event.goto(4);
                                            }
                                        } else event.goto(4);
                                        ('step 8');
                                        for (var j of event.targets) {
                                            if (event.cards[j[1]].length && j[0] != player) {
                                                player.line(j[0]);
                                                player.give(event.cards[j[1]], j[0]);
                                            }
                                        }
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        sh_mark: {
                            group: ['sh_mark_1'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('sh_mark'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.addTempSkill('sh_damage', { player: 'phaseZhunbeiBegin' });
                                    player.storage.sh_mark_m = target;
                                    player.addTempSkill('sh_mark_m', { player: 'phaseZhunbeiBegin' });
                                }
                            },
                            ai: {
                                threaten: 3.4,
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseZhunbeiBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        for (var i of game.players) {
                                            //QQ
                                            if (i == player) continue;
                                            if (i == player.storage.sh_mark_m) {
                                                player.storage.sh_mark_m.remove(i);
                                            }
                                        }
                                    },
                                    popup: false,
                                },
                                m: {
                                    intro: {
                                        content: '莹草选择了$作为<生花>目标',
                                    },
                                },
                            },
                            popup: false,
                        },
                        缠绕: {
                            enable: 'phaseUse',
                            usable: 1,
                            discard: false,
                            filter(event, player) {
                                return player.countCards('he', { suit: 'club' }) > 0;
                            },
                            prepare: 'throw',
                            position: 'he',
                            filterCard: {
                                suit: 'club',
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'bingliang' }, player, target);
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                var next = player.useCard({ name: 'bingliang' }, target, cards);
                                next.animate = false;
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        return get.effect(target, { name: 'bingliang' }, player, target);
                                    },
                                },
                                order: 9,
                            },
                        },
                        zhiyu_d: {
                            enable: 'phaseUse',
                            limited: true,
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return (target = player);
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.awakenSkill('zhiyu_d');
                                player.storage.zhiyu_d = true;
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].recover();
                                    targets[i].draw();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target: 1,
                                },
                                threaten: 2,
                            },
                        },
                        jz_gq_zn: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target) && player.inRange(target);
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                player.useCard({ name: 'sha' }, target, false);
                            },
                            ai: {
                                expose: 1,
                                threaten: 1.9,
                                order(item, player) {
                                    return get.order({ name: 'sha' }) + 0.1;
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.effect(target, { name: 'sha' }, player, target);
                                    },
                                },
                            },
                        },
                        jz_gq_rc: {
                            marktext: '刃',
                            intro: {
                                name: '刃',
                                content: '本回合出牌阶段下一次对一名其他角色造成伤害后,回复X点体力或摸X张牌(X为你本次造成的伤害数).',
                            },
                            forced: true,
                            trigger: {
                                player: ['xin_gzEnd', 'jz_gq_znEnd'],
                            },
                            filter(event, player) {
                                return player.countMark('jz_gq_rc') <= 0 && _status.currentPhase == player;
                            },
                            content() {
                                player.addMark('jz_gq_rc');
                                player.markSkill('jz_gq_rc');
                            },
                            group: ['jz_gq_rc_a', 'jz_gq_rc_b'],
                            subSkill: {
                                a: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('jz_gq_rc') > 0 && event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var a = trigger.num;
                                        player.removeMark('jz_gq_rc');
                                        if (player.countMark('jz_gq_rc') <= 0) {
                                            player.unmarkSkill('jz_gq_rc');
                                        }
                                        player
                                            .chooseControl('回复', '摸牌')
                                            .set('prompt', '请选择以下一项')
                                            .set('choiceList', ['<回复:回复' + a + '点体力.>', '<摸牌:摸' + a + '张牌.>'])
                                            .set('ai', function () {
                                                var player = _status.event.player;
                                                if (player.hp <= 2) return '回复';
                                                if (player.countCards('h') < player.hp) return '摸牌';
                                                if (player.hp + a > player.maxHp) return '摸牌';
                                                return '回复';
                                            });
                                        event.a = a;
                                        ('step 1');
                                        if (result.control == '摸牌') {
                                            player.draw(event.a);
                                        }
                                        if (result.control == '回复') {
                                            player.recover(event.a);
                                        }
                                    },
                                },
                                b: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('jz_gq_rc') > 0;
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.jz_gq_rc = 0;
                                        player.unmarkSkill('jz_gq_rc');
                                    },
                                },
                            },
                        },
                        gw: {
                            group: ['gw_c', 'gw_x'],
                            subSkill: {
                                c: {
                                    usable: 1,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(e, p) {
                                        return p.isPhaseUsing();
                                    },
                                    forced: true,
                                    content() {
                                        player.addHut();
                                    },
                                },
                                x: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    prompt: '选择一名其他角色,其本回合视为在你攻击范围内',
                                    content() {
                                        player.storage.gw_v = target;
                                        player.addTempSkill('gw_v');
                                    },
                                    ai: {
                                        order: 13,
                                        result: {
                                            target(player, target, card) {
                                                if (get.distance(player, target) > 2 || !player.inRange(target)) return -1;
                                                return 0;
                                            },
                                        },
                                    },
                                },
                                v: {
                                    mark: true,
                                    intro: {
                                        content: '「$」视为在你攻击范围内',
                                    },
                                    mod: {
                                        inRange(from, to) {
                                            if (to == from.storage.gw_v) return true;
                                            return;
                                        },
                                    },
                                },
                            },
                        },
                        xin_gz: {
                            popup: false,
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return event.num > 0 && !event.numFixed;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var c = game.countPlayer(function (current) {
                                    return current != player && get.attitude(player, current) < 0;
                                });
                                var num = '' + c + '';
                                var num1 = get.copy(trigger.num);
                                var map = {};
                                var list = [];
                                for (var i = 1; i <= num1; i++) {
                                    var cn = i;
                                    map[cn] = i;
                                    list.push(cn);
                                }
                                event.map = map;
                                player
                                    .chooseControl(list, 'no2', function () {
                                        return get.cnNumber(_status.event.goon);
                                    })
                                    .set('prompt', get.prompt2('xin_gz'))
                                    .set('ai', function () {
                                        return num;
                                    });
                                ('step 1');
                                var num = event.map[result.control] || 0;
                                if (num > 0) {
                                    player.addMark('xin_gz', num); //QQQ
                                    player.addTempSkill('xin_gz_c');
                                    trigger.num -= num;
                                }
                                ('step 2');
                                if (trigger.num <= 0) game.delay();
                            },
                            ai: {
                                threaten: 1.6,
                            },
                            subSkill: {
                                c: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.num = player.countMark('xin_gz');
                                        if (event.num > 0) {
                                            player
                                                .chooseTarget('请选择至多' + event.num + '名角色,你获得这些角色各一张牌', [1, event.num], function (card, player, target) {
                                                    return target.countCards('he') > 0 && player != target;
                                                })
                                                .set('ai', function (target) {
                                                    return 10 - get.attitude(_status.event.player, target);
                                                });
                                            player.removeMark('xin_gz', event.num);
                                        }
                                        ('step 1');
                                        if (result.bool && result.targets.length) {
                                            result.targets.sortBySeat();
                                            for (var i = 0; i < result.targets.length; i++) {
                                                player.gainPlayerCard(result.targets[i], 'he');
                                                player.line(result.targets[i]);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        dx_gy: {
                            mod: {
                                attackFrom(from, to, distance) {
                                    var num = game.countPlayer(function (current) {
                                        return get.distance(current, from) > 2;
                                    });
                                    return distance + num - 2;
                                },
                                inRange(from, to) {
                                    if (get.distance(from, to) <= 2) return true;
                                },
                            },
                            group: ['dx_gy_d'],
                            forced: true,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    (get.type(event.card) == 'trick' || (get.type(event.card) == 'basic' && !['shan', 'tao', 'jiu', 'du'].includes(event.card.name))) &&
                                    _status.currentPhase == player &&
                                    game.hasPlayer(function (current) {
                                        return current != player && player.inRange(current);
                                    })
                                );
                            },
                            content() {
                                trigger.directHit.addArray(
                                    game.filterPlayer(function (current) {
                                        return current != player && player.inRange(current);
                                    })
                                );
                            },
                            ai: {
                                directHit_ai: true,
                                //你攻击范围内的角色不能响应你使用的基本牌或普通锦囊牌
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target) {
                                        return player.inRange(arg.target);
                                    } //QQQ
                                },
                            },
                            subSkill: {
                                d: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    filter(event, player, card) {
                                        if (event.card || event.cards) return false;
                                        return true;
                                    },
                                    forced: true,
                                    _priority: 676738661686,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        kq: {
                            marktext: '狂',
                            intro: {
                                name: '狂气',
                                content: '当前有#个<狂气>标记',
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageSource',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                'step 0';
                                c = trigger.num;
                                ('step 1');
                                c--;
                                player.addMark('kq');
                                if (player.countMark('kq') > 3 && player.hasSkill('fqh_kx')) {
                                    player.removeMark('kq', Infinity);
                                    player.removeMark('kq_c', Infinity);
                                    player.addSkill('fqh_kx_f');
                                    player.addSkill('kq_c');
                                }
                                ('step 2');
                                if (c > 0) {
                                    event.goto(1);
                                }
                            },
                            subSkill: {
                                c: {
                                    marktext: '化',
                                    mark: true,
                                    intro: {
                                        name: '强化',
                                        name2: '化',
                                        content: '「狂啸」己被强化<br>强化效果(直到自己的下个回合结束强化效果失效)出牌阶段,当你使用第一张基本牌或非延时锦囊牌仅指定一名其他角色为目标后,你可选择一项:1.此牌不能被响应;2,此牌可额外指定一名角色为目标;3.令目标角色弃置一张牌.',
                                    },
                                    popup: false,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('kq_c');
                                        if (player.countMark('kq_c') > 1) {
                                            player.removeMark('kq_c', Infinity);
                                            player.removeSkill('fqh_kx_f');
                                            player.removeSkill('kq_c');
                                        }
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        guh1: {
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.suit == 'spade') {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.suit == 'spade') {
                                        return false;
                                    }
                                },
                            },
                            nobracket: true,
                            enable: ['chooseToUse'],
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'jiu' }, player, event)) return true;
                                return false;
                            },
                            filterCard(card, player) {
                                return card.suit == 'spade';
                            },
                            position: 'h',
                            viewAs: {
                                name: 'jiu',
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('he', { suit: 'spade' })) return false;
                            },
                            prompt: '将一张♠️️手牌当酒使用',
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                save: true,
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
                                order() {
                                    return get.order({ name: 'sha' }) + 0.2;
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
                                                        target.canUse(card, current, true, true) &&
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
                                },
                            },
                        },
                        dx_xuexi: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (player.hp == 1 && !player.hasMark('xy_paj')) return -0.6;
                                return 1;
                            },
                            content() {
                                'step 0';
                                event.t = [];
                                event.c = Math.ceil(player.hp / 2);
                                ('step 1');
                                if (!player.hasMark('xy_paj')) player.loseHp();
                                player.removeMark('xy_paj');
                                ('step 2');
                                player
                                    .chooseTarget('请选择一名角色,令其选择掉血或弃牌', function (card, player, target) {
                                        return target != player && !event.t.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        if (target.hasSkill('xy_paj_c')) return 0;
                                        return 10 - get.attitude(_status.event.player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    tg = result.targets[0];
                                    player.line(tg);
                                    event.t.push(tg);
                                    tg.chooseToDiscard('请弃置一张手牌,否则你将受到1点火焰伤害').set('ai', function (card) {
                                        if (tg.hasSkill('xy_paj_c')) return 0;
                                        return 9 - get.value(card);
                                    });
                                } else {
                                    event.goto(5);
                                }
                                ('step 4');
                                if (!result.bool) {
                                    if (!tg.hasSkill('xy_paj_c')) {
                                        tg.damage(c, 'fire');
                                        tg.addTempSkill('xy_paj_c', 'roundStart');
                                    }
                                }
                                ('step 5');
                                event.c--;
                                if (event.c > 0) event.goto(2);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xy_paj: {
                            markimage: 'extension/平安京/image/mark/mx9.jpg',
                            intro: {
                                name: '血翼',
                                name2: '蝙蝠',
                                content: '当前有#个<蝙蝠>',
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('xy_paj', trigger.num);
                            },
                            ai: {
                                maixie_hp: true,
                            },
                            subSkill: {
                                c: {},
                            },
                        },
                        x_paj: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hasMark('xy_paj');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('【血拥】:是否选择一名其他角色,令其本回合与你距离为1且你本回合每对其造成一点伤害便回复一点体力.如此做后,你失去一枚【蝙蝠】', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return 10 - get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('xy_paj');
                                    player.storage.x_paj_x = result.targets[0];
                                    player.addTempSkill('x_paj_x');
                                }
                            },
                            subSkill: {
                                x: {
                                    intro: {
                                        content: '与$的距离视为1',
                                    },
                                    mod: {
                                        globalFrom(from, to) {
                                            if (to == from.storage.x_paj_x) {
                                                return -Infinity;
                                            }
                                        },
                                    },
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.player == player.storage.x_paj_x && event.num > 0;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.c = trigger.num;
                                        ('step 1');
                                        event.c--;
                                        player.recover();
                                        ('step 2');
                                        if (event.c > 0) event.goto(1);
                                    },
                                },
                            },
                        },
                        sf_paj: {
                            popup: false,
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard('he', true);
                            },
                        },
                        sf_d: {
                            nobracket: true,
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                if (!event.player.countCards('he') > 2) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.player != player && event.player.isAlive() && !player.hasSkill('sf_d_c') && player.countCards('h', { suit: 'heart' }) > 0;
                            },
                            popup: false,
                            content() {
                                'step 0';
                                if (player.countCards('h', { suit: 'heart' }) > 0) {
                                    player
                                        .chooseToDiscard(
                                            'h',
                                            function (card) {
                                                return card.suit == 'heart';
                                            },
                                            '【霜风寒夜】:是否弃置一张♥️️手牌并令' + get.translation(trigger.player.name) + '本回合每使用一张牌便弃置一张牌？'
                                        )
                                        .set('suit')
                                        .set('ai', function (card) {
                                            if (_status.event.check) return 6 - get.value(card);
                                            return 0;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.player;
                                    player.line(target, 'green');
                                    player.addTempSkill('sf_d_c', 'roundStart');
                                    target.addTempSkill('sf_paj', 'phaseUseEnd');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                            subSkill: {
                                c: {},
                            },
                        },
                        xzz_dx: {
                            markimage: 'extension/平安京/image/mark/mx5.jpg',
                            intro: {
                                name: '雪之装',
                                content: '当前有#枚<雪>',
                            },
                            nobracket: true,
                            group: ['hut', 'xzz_dx_d'],
                            usable: 1,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return get.type(event.card) == 'basic' && player.isPhaseUsing();
                            },
                            forced: true,
                            content() {
                                player.addMark('xzz_dx');
                                if (player.countMark('xzz_dx') > 2) {
                                    player.addHut();
                                    player.removeMark('xzz_dx', 3);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.type(card) == 'basic') return [1, 3];
                                    },
                                },
                            },
                            subSkill: {
                                d: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    forced: true,
                                    _priority: 46678781,
                                    content() {
                                        player.addMark('xzz_dx');
                                        if (player.countMark('xzz_dx') > 2) {
                                            player.addHut();
                                            player.removeMark('xzz_dx', 3);
                                        }
                                    },
                                },
                            },
                        },
                        cx_xin: {
                            group: 'hut',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            _priority: 64763971,
                            content() {
                                'step 0';
                                if (trigger.num > 1) {
                                    player.addHut(trigger.num - 1);
                                } else {
                                    if (
                                        trigger.source &&
                                        trigger.source.countCards('h', function (card) {
                                            return get.type(card) == 'basic';
                                        }) > 0
                                    ) {
                                        trigger.source
                                            .chooseCard(
                                                'h',
                                                function (card) {
                                                    return get.type(card) == 'basic';
                                                },
                                                '交给' + get.translation(player) + '一张基本牌或受到1点伤害'
                                            )
                                            .set('ai', function (card) {
                                                return 8 - get.value(card);
                                            })
                                            .set('type', type);
                                    } else event.goto(1);
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.source.give(result.cards, player, true);
                                } else trigger.source.damage();
                            },
                        },
                        xin_daoxi: {
                            markimage: 'extension/平安京/image/mark/mx2.jpg',
                            intro: {
                                name: '刀袭',
                                content(storage) {
                                    return '当前有' + storage + '枚<刀袭><br>与其他角色距离-' + storage + '';
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.c = trigger.num;
                                ('step 1');
                                event.c--;
                                player.addMark('xin_daoxi');
                                if (player.countMark('xin_daoxi') > 2) {
                                    player.removeMark('xin_sm_c', Infinity);
                                    player.removeMark('xin_daoxi', Infinity);
                                    player.removeHut(Infinity);
                                    player.addSkill('xin_sm_c');
                                }
                                ('step 2');
                                if (event.c > 0) {
                                    event.goto(1);
                                }
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    var c = from.countMark('xin_daoxi');
                                    return distance - c;
                                },
                            },
                        },
                        xin_sm: {
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.targets.length == 1 && event.card && ['sha', 'jg'].includes(event.card.name) && !player.hasSkill('xin_sm_c');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('h', '是否弃置一张手牌令' + get.translation(trigger.card) + '不可响应？').set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.directHit.addArray(game.players);
                                }
                            },
                            group: ['xin_sm_f'],
                            subSkill: {
                                f: {
                                    shaRelated: true,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.targets.length == 1 && event.card && ['sha', 'jg'].includes(event.card.name) && player.hasSkill('xin_sm_c');
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                        var trigger2 = trigger.parent;
                                        if (typeof trigger2.baseDamage != 'number') {
                                            trigger2.baseDamage = 1;
                                        }
                                        trigger2.baseDamage += 1;
                                    },
                                },
                                c: {
                                    popup: false,
                                    _priority: 9990,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('xin_sm_c');
                                        player.markSkill('xin_sm_c');
                                        if (player.countMark('xin_sm_c') > 1) {
                                            player.removeMark('xin_sm_c', Infinity);
                                            player.removeSkill('xin_sm_c');
                                        }
                                    },
                                    marktext: '化',
                                    mark: true,
                                    intro: {
                                        name: '强化',
                                        content: '「噬魔」己被强化<br>强化效果(直到自己的下个回合结束强化效果失效)当你使用【杀】指定一名角色为目标后,此杀不可被响应且伤害+1.',
                                    },
                                },
                            },
                        },
                        xin_jr: {
                            popup: false,
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasMark('yan_蝶');
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                'step 0';
                                if (trigger.player.countCards('h') > 0) {
                                    trigger.player.chooseToDiscard('h', '弃置一张手牌或令' + get.translation(player.name) + '收回你的<焰蝶>并受到1点火焰伤害').set('ai', function (card) {
                                        return 9 - get.value(card);
                                    });
                                } else {
                                    event._result = { bool: false };
                                }
                                ('step 1');
                                if (!result.bool) {
                                    var num = trigger.player.countMark('yan_蝶');
                                    trigger.player.damage('fire');
                                    player.addMark('yan_蝶', num);
                                    trigger.player.removeMark('yan_蝶', num);
                                }
                            },
                            ai: {
                                threaten: 1.1,
                                expose: 0.3,
                            },
                        },
                        fqh_kx: {
                            usable: 1,
                            popup: false,
                            trigger: {
                                player: 'useCard2',
                            },
                            filter(trigger, player) {
                                return ['basic', 'trick'].includes(get.type(trigger.card)) && _status.currentPhase == player && trigger.targets && trigger.targets.length == 1 && !player.hasSkill('fqh_kx_f');
                            },
                            forced: true,
                            _priority: 7749,
                            content() {
                                'step 0';
                                if (!player.hasSkill('fqh_kx_f')) {
                                    player
                                        .chooseTarget('【狂啸】:要为' + get.translation(trigger.card) + '增加额外目标吗？', [0, 1], function (card, player, target) {
                                            var player = _status.event.player;
                                            if (_status.event.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(_status.event.card, player, target);
                                        })
                                        .set('targets', trigger.targets)
                                        .set('card', trigger.card)
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                }
                                ('step 1');
                                if (result.targets && !player.hasSkill('fqh_kx_f')) {
                                    trigger.targets.addArray(result.targets);
                                }
                            },
                            subSkill: {
                                f: {
                                    usable: 1,
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return ['basic', 'trick'].includes(get.type(event.card)) && _status.currentPhase == player && event.targets && event.targets.length == 1 && player.hasSkill('fqh_kx_f');
                                    },
                                    forced: true,
                                    _priority: 46545348675,
                                    //出牌阶段,当你使用第一张基本牌或非延时锦囊牌仅指定一名其他角色为目标后,可额外指定一名角色为目标
                                    async content(event, trigger, player) {
                                        //QQQ
                                        const result = await player
                                            .chooseControl('无法响应', '额外目标', '目标弃牌')
                                            .set('prompt', '要令' + get.translation(trigger.card) + '获得以下哪种效果？')
                                            .set('ai', function () {
                                                if (game.players.length > 2) return '额外目标';
                                                if (trigger.target.countCards('he') > 1) '无法响应';
                                                return '目标弃牌';
                                            })
                                            .forResult();
                                        if (result.control == '无法响应') {
                                            trigger.directHit.addArray(game.players);
                                        }
                                        if (result.control == '目标弃牌') {
                                            trigger.target.chooseToDiscard('he', true);
                                        }
                                        if (result.control == '额外目标') {
                                            const result1 = await player
                                                .chooseTarget('为' + get.translation(trigger.card) + '增加目标', (card, player, target) => !trigger.targets.includes(target))
                                                .set('ai', function (target) {
                                                    return get.effect(target, trigger.card, player, player);
                                                })
                                                .forResult();
                                            if (result1.targets && result1.targets[0] && player.hasSkill('kq_c')) {
                                                trigger.targets.addArray(result1.targets);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        xin_yd: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            silent: true,
                            _priority: -5,
                            content() {
                                'step 0';
                                var nxt = player.chooseTarget(2, get.prompt2('xin_yd'), function (card, player, target) {
                                    if (!ui.selected.targets.length) {
                                        return target.hasMark('yan_蝶');
                                    } else {
                                        return !target.hasMark('yan_蝶');
                                    }
                                });
                                nxt.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (!ui.selected.targets.length) {
                                        return att;
                                    } else {
                                        return -att;
                                    }
                                });
                                nxt.set('multitarget', true);
                                nxt.set('targetprompt', ['被移走', '移动目标']);
                                ('step 1');
                                if (result.targets?.length) {
                                    var z1 = result.targets[0];
                                    var z2 = result.targets[1];
                                    player.line(z1);
                                    z1.line(z2);
                                    if (z1.hasMark('yan_蝶')) z2.addMark('yan_蝶');
                                    z1.removeMark('yan_蝶');
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        sss: {
                            nobracket: true,
                            trigger: {
                                player: 'die',
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                for (var i of game.players) {
                                    //QQ
                                    player.line(i);
                                    i.damage();
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 1.9;
                                    return 2.7;
                                },
                            },
                        },
                        huhuo: {
                            audio: 'ext:平安京:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                            },
                            filterTarget(card, player, target) {
                                return target != player && player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    player.line(target);
                                    target.damage();
                                    target.addTempSkill('huhuo_1', { player: 'phaseJieshuBefore' });
                                } else {
                                    target.line(player);
                                    player.damage(target);
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.skipList.includes('phaseUse') || target.hasSkill('pingkou')) return 0;
                                        var hs = player.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        var ts = target.getCards('h').sort(function (a, b) {
                                            return b.number - a.number;
                                        });
                                        if (!hs.length || !ts.length) return 0;
                                        if (hs[0].number > ts[0].number) return -1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                1: {
                                    mark: true,
                                    marktext: '狐',
                                    intro: {
                                        content: '该角色使用牌只能指定自己为目标',
                                    },
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            var info = get.info(card);
                                            if ((!info || !info.singleCard || !ui.selected.targets.length) && player.isPhaseUsing() && target != player) return false;
                                        },
                                    },
                                },
                            },
                        },
                        dtzl: {
                            group: ['tdx', 'td3', 'tdx_x'],
                            nobracket: true,
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.players.length > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('要给予哪名角色<堕天>标记？', lib.filter.notMe, true).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return 10 - get.attitude(player, target);
                                }).animate = false;
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.storage.td2 = target;
                                    player.addSkill('td2');
                                }
                            },
                        },
                        td2: {
                            charlotte: true,
                            mark: true,
                            markimage: 'extension/平安京/image/mark/mx4.jpg',
                            intro: {
                                name: '堕天',
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true)) {
                                        dialog.addText('当前拥有<堕天>标记的角色为「' + get.translation(content) + '」');
                                        dialog.add([content]);
                                    }
                                },
                                content(storage, player) {
                                    if (player.isUnderControl(true)) {
                                        return '当前拥有<堕天>标记的角色为「' + get.translation(storage) + '」';
                                    } else {
                                        return '猜猜看呐';
                                    }
                                },
                            },
                        },
                        td3: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            _priority: -5,
                            content() {
                                'step 0';
                                player.chooseTarget('是否转移<堕天>标记？', lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return 10 - get.attitude(player, target);
                                }).animate = false;
                                ('step 1');
                                if (result.bool) {
                                    player.removeSkill('td2');
                                    player.storage.td2 = result.targets[0];
                                    player.addSkill('td2');
                                }
                            },
                        },
                        飞蹄: {
                            group: 'ft_sha',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                            },
                            content() {
                                var c = player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                                player.draw(c);
                            },
                        },
                        ft_sha: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return ['sha', 'jg'].includes(event.card.name) && player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] }) && !event.parent.directHit.includes(event.target);
                            },
                            content() {
                                var c = player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].paj_xx_fyRequired == 'number') {
                                    map[id].paj_xx_fyRequired += c;
                                } else {
                                    map[id].paj_xx_fyRequired = 1 + c;
                                }
                            },
                        },
                        lp: {
                            round: 1,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num && event.source && event.source != player;
                            },
                            check(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                c = card ? { name: 'sha' } : { name: 'jg' };
                                if (player.canUse(c, trigger.source, false)) player.useCard(c, trigger.source, false);
                            },
                            ai: {
                                expose: 0.3,
                            },
                            group: ['lp_roundcount'],
                        },
                        bt_z: {
                            group: 'bt2',
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.bt_z = false;
                            },
                            filter(event, player) {
                                if (player.storage.bt_z) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && !player.inRange(target);
                            },
                            content() {
                                'step 0';
                                c = player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                                player.storage.bt_z = true;
                                target.damage(c);
                                ('step 1');
                                player
                                    .chooseTarget('是否进行『位移』与一名距离为一的角色交换位置？若如此做,本回合结束时,若其未死亡,你与其交换位置.', function (card, player, target) {
                                        return target != player && get.distance(player, target) <= 1;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(player, target);
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    player.storage.bt2 = result.targets[0];
                                    player.addTempSkill('bt2');
                                    game.swapSeat(player, result.targets[0]);
                                } //QQQ
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player, target) {
                                        var c = player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                                        if (c > 0) return 1;
                                        return 0;
                                    },
                                    target(player, target) {
                                        var c = player.countCards('e', { subtype: ['equip3', 'equip4', 'equip6'] });
                                        var ts = target.hp;
                                        if (c >= ts) return -1;
                                        if (c > 0) return -0.5;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        bt2: {
                            trigger: {
                                global: 'phaseJieshuBefore',
                            },
                            silent: true,
                            filter: (event, player) => player.storage.bt2, //QQQ
                            content() {
                                game.swapSeat(player, player.storage.bt2);
                            },
                        },
                        suoming_1: {
                            popup: false,
                            trigger: {
                                global: ['damageAfter', 'recoverAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isLinked() && event.player != player;
                            },
                            content() {
                                player.draw();
                                player.chooseToDiscard('he', true);
                            },
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.isLinked() && event.source != player && event.player != player;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.source = player;
                                    },
                                },
                            },
                        },
                        gwli: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseUseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip('paj_ghl') && player.hp > 1;
                            },
                            content() {
                                player.loseHp();
                                player.useCard(game.createCard('paj_ghl', 'club', 9), player);
                            },
                        },
                        ayclp: {
                            forceDie: true,
                            nobracket: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            selectCard: [1, 4],
                            line: 'thunder',
                            selectTarget() {
                                var length = ui.selected.cards.length;
                                return [length, length];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            complexSelect: true,
                            complexCard: true,
                            complexTarget: true,
                            multitarget: true,
                            multiline: true,
                            contentBefore() {
                                player.$fullscreenpop('<font color=#38B0DE>奥义苍龙破</font>', 'thunder');
                            },
                            content() {
                                'step 0';
                                event.x = [];
                                player.awakenSkill('ayclp');
                                for (var i = 0; i < targets.length; i++) {
                                    event.x.push(targets[i]);
                                }
                                ('step 1');
                                event.tx = event.x[0];
                                if (event.tx.inRange(player)) {
                                    event.tx.chooseToUse({
                                        preTarget: player,
                                        prompt: '是否对' + get.translation(player) + '使用一张【杀】？若不如此做,将受到其对你造成的1点雷电伤害',
                                        filterCard(card, player) {
                                            return ['sha', 'jg'].includes(card.name) && lib.filter.filterCard.apply(this, arguments);
                                        },
                                        filterTarget(card, player, target) {
                                            return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
                                        },
                                        addCount: false,
                                    });
                                } else {
                                    event.tx.damage('thunder');
                                    event.goto(3);
                                }
                                ('step 2');
                                if (!result.bool) {
                                    event.tx.damage('thunder');
                                }
                                ('step 3');
                                event.x.remove(event.tx);
                                if (event.x.length) event.goto(1);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nothunder')) return 0;
                                        if (!target.inRange(player)) return -2;
                                        if (target.hp < 2) return -1;
                                        return get.damageEffect(target, player, player, 'thunder');
                                    },
                                },
                            },
                        },
                        gzj: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('gzj'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        return -att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    x = '进攻';
                                    c = card ? { name: 'sha' } : { name: 'jg' };
                                    if (card) x = '杀';
                                    t = result.targets[0];
                                    player.line(t);
                                    player.storage.gzj_z = t;
                                    player.addTempSkill('gzj_z');
                                    player.chooseToDiscard('是否弃置一张手牌并视为对' + get.translation(t.name) + '使用一张【' + x + '】？').ai = function () {
                                        var player = _status.event.player;
                                        return get.attitude(player, t) <= 0;
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    if (player.canUse(c, t, false)) player.useCard(c, t, false);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (player.isAlive()) {
                                    player
                                        .chooseTarget('是否进行『位移』与一名距离为一的角色交换位置？若如此做,本回合结束时,若其未死亡,你与其交换位置.', function (card, player, target) {
                                            return target != player && get.distance(player, target) <= 1;
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(player, target);
                                        });
                                }
                                ('step 4');
                                xt = result.targets[0];
                                if (!result.bool) {
                                    event.finish();
                                } else {
                                    player.line(xt);
                                    player.addTempSkill('gzj_x');
                                    player.storage.gzj_x = xt;
                                    game.broadcastAll(
                                        function () {
                                            game.swapSeat(player, xt);
                                        },
                                        player,
                                        xt
                                    );
                                }
                            },
                            subSkill: {
                                z: {
                                    intro: {
                                        content: '与$的距离视为1',
                                    },
                                    mod: {
                                        globalFrom(from, to) {
                                            if (to == from.storage.gzj_z) return -Infinity;
                                        },
                                    },
                                },
                                x: {
                                    popup: false,
                                    _priority: 777,
                                    trigger: {
                                        player: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        game.broadcastAll(
                                            function () {
                                                game.swapSeat(player, player.storage.gzj_x);
                                            },
                                            player,
                                            player.storage.gzj_x
                                        );
                                    },
                                },
                            },
                        },
                        bj: {
                            popup: false,
                            group: 'bj2',
                            trigger: {
                                player: 'phaseDiscardBegin',
                            },
                            filter(event, player) {
                                return player.getStorage('bj2_bj3').length >= 3;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('bj'), function (card, player, target) {
                                    if (!player.inRange(target) || target == player) return false;
                                    return true;
                                }).ai = function (target) {
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    return -get.attitude(_status.event.player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    t = result.targets[0];
                                    if (!t.countCards('h')) event._result = { control: '掉血' };
                                    else {
                                        t.chooseControl('掉血', '弃置两张手牌').set('prompt', '请选择一项').ai = function () {
                                            var ts = t.countCards('h', function (card) {
                                                return ['jiu', 'tao', 'zhaofuda', 'jiyuanda'].includes(card.name);
                                            });
                                            if (ts > 1 && t.countCards('h') > 2 && t.hp > 3) return '掉血';
                                            if (t.hasSkillTag('nodamage')) return '掉血';
                                            if (ts > 0 && t.countCards('h') > 1 && t.hp > 2) return '掉血';
                                            if (t.hp == 1 && !ts) return '弃置两张手牌';
                                            if (t.countCards('h') > 2 && ts < 2) return '弃置两张手牌';
                                            return '掉血';
                                        };
                                    }
                                }
                                ('step 2');
                                if (result.control == '掉血') t.damage();
                                if (result.control == '弃置两张手牌') t.chooseToDiscard('h', 2, true);
                            },
                        },
                        xz: {
                            trigger: {
                                global: 'recoverEnd',
                            },
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('xz_x') && event.player.hasSkill('xz_x') && event.player.isPhaseUsing();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseBool(get.prompt2('xz', trigger.player)).ai = function () {
                                    var player = _status.event.player;
                                    if (get.attitude(player, _status.event.getTrigger().player) < 0) return 1;
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    x = '进攻';
                                    c = card ? { name: 'sha' } : { name: 'jg' };
                                    player.addTempSkill('xz_x');
                                    player.useCard(c, trigger.player, false).type = 'xz';
                                } else {
                                    player.addTempSkill('xz_x');
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                            group: ['xz_c', 'xz_y', 'paj_xx_xzdraw'],
                            subSkill: {
                                y: {
                                    popup: false,
                                    trigger: {
                                        global: 'recoverBefore',
                                    },
                                    forced: true,
                                    usable: 1,
                                    content() {
                                        trigger.player.addTempSkill('xz_x', { player: 'recoverAfter', global: ['loseAfter', 'damageEnd'] });
                                    },
                                },
                                x: {},
                                c: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return event.type == 'xz';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                    },
                                },
                                w: {
                                    intro: {
                                        content(storage, player) {
                                            var str;
                                            if (player.storage.xz_w) str = '无法再使用的类型:' + get.translation(player.storage.xz_w) + '';
                                            return str;
                                        },
                                    },
                                    mod: {
                                        cardEnabled(card, player) {
                                            var cards = player.storage.xz_w;
                                            for (var i = 0; i < cards.length; i++) {
                                                if (cards[i] == get.type(card)) return false;
                                            }
                                        },
                                        cardUsable(card, player) {
                                            var cards = player.storage.xz_w;
                                            for (var i = 0; i < cards.length; i++) {
                                                if (cards[i] == get.type(card)) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        hx: {
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard: true,
                            selectCard: 3,
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.hx = false;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            filter(event, player) {
                                if (player.storage.hx) return false;
                                if (!player.countCards('he') >= 3) return false;
                                return true;
                            },
                            check(card) {
                                if (['sha', 'jg'].includes(card.name)) {
                                    return 10;
                                }
                                return 8 - get.value(card);
                            },
                            content() {
                                'step 0';
                                event.card = cards;
                                player.storage.hx = true;
                                player.line(target);
                                target.damage();
                                ('step 1');
                                var cardsx = [];
                                for (var x = 0; x < event.cards.length; x++) {
                                    if (['sha', 'jg'].includes(event.cards[x].name)) {
                                        cardsx.add(event.cards[x]);
                                    }
                                }
                                event.cardsx = cardsx;
                                /*player.chooseButton(1,['请选择要使用的杀',event.cardsx],true).set('filterButton',function(button){
                return button.link.name=='sha';
                          });        
                "step 3"
                if(result.bool){       
                var list=result.links;
                for(var i=0;i<list.length;i++){*/
                                ('step 2');
                                if (event.cardsx && event.cardsx.length && target.isAlive()) {
                                    var list = event.cardsx.randomGet();
                                    player.useCard(list, target, false);
                                    event.cardsx.remove(list);
                                    if (event.cardsx.length) event.goto(2);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target: -1,
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        ssws: {
                            markimage: 'extension/平安京/image/mark/mx1.jpg',
                            intro: {
                                content: 'mark',
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.targets && event.targets.length == 1;
                            },
                            forced: true,
                            _priority: -46545,
                            logTarget: 'target',
                            content() {
                                trigger.target.addMark('ssws');
                            },
                            group: ['ssws_x', 'hut'],
                            subSkill: {
                                x: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    _priority: -7,
                                    filter(event, player) {
                                        return event.player.countMark('ssws') >= 3;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        bj2: {
                            mod: {
                                aiOrder(player, card, num) {
                                    var list = player.getStorage('bj2_bj3');
                                    if (get.itemtype(card) == 'card' && player == _status.currentPhase && !list.includes(card.suit)) return num + 1;
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            popup: false,
                            silent: true,
                            firstDo: true,
                            filter(event, player) {
                                if (!event.card || player != _status.currentPhase) return false;
                                var list = player.getStorage('bj2_bj3');
                                for (var i of event.cards) {
                                    if (!list.includes(i.suit)) return true;
                                }
                                return false;
                            },
                            content() {
                                if (!player.storage.bj2_bj3) player.storage.bj2_bj3 = [];
                                for (var i of trigger.cards) player.storage.bj2_bj3.add(i.suit);
                                player.addTempSkill('bj2_bj3');
                                player.markSkill('bj2_bj3');
                            },
                            group: ['bj2_bj3'],
                            subSkill: {
                                bj3: {
                                    intro: {
                                        content(storage, player) {
                                            var str = '当前已使用花色:' + get.translation(player.storage.bj2_bj3) + '';
                                            return str;
                                        },
                                    },
                                },
                            },
                        },
                        jx: {
                            popup: false,
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h', { color: 'red' });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseCard(
                                        'h',
                                        function (card) {
                                            return get.color(card) == 'red';
                                        },
                                        get.prompt2('jx')
                                    )
                                    .set('ai', function (card) {
                                        return 8 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    cardx = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    x = '进攻';
                                    c = cardx ? { name: 'sha' } : { name: 'jg' };
                                    if (cardx) x = '杀';
                                    event.card = result.cards;
                                    player.chooseTarget('选择一名角色,视为对其使用一张「' + x + '」', function (card, target, player) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    player.discard(event.card);
                                    player.useCard(c, result.targets[0], false);
                                }
                            },
                        },
                        paj_hc_youyu: {
                            group: 'paj_hc_youyu_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(e, p) {
                                        return game.countPlayer(function (current) {
                                            if (current != p) return true;
                                            return current.hasMark('paj_hc_youyu');
                                        });
                                    }, //QQQ
                                    forced: true,
                                    _priority: 8848,
                                    content() {
                                        'step 0';
                                        var nxt = player.chooseTarget(get.prompt2('paj_hc_youyu'), function (card, player, target) {
                                            return target.hasMark('paj_hc_youyu');
                                        });
                                        nxt.set('prompt', '是否转移一枚"游鱼"？(先选移去,后选获得)');
                                        nxt.set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (att > 0) {
                                                if (target == player && player.hasMark('paj_hc_youyu')) return att + 2;
                                                if (target.countMark('paj_hc_youyu') > 0) return att + 1;
                                            }
                                            return att;
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            z1 = result.targets[0];
                                            var next = player.chooseTarget('请选择要转移的目标', function (card, player, target) {
                                                return !target.hasMark('paj_hc_youyu');
                                            });
                                            next.set('ai', function (target) {
                                                var player = _status.event.player;
                                                var att = get.attitude(player, target);
                                                if (att < 0) {
                                                    if (target.hasMark('paj_hc_youyu')) return att + 1;
                                                } else {
                                                    if (att > 0) {
                                                        if (!target.hasMark('paj_hc_youyu')) return (att = 0);
                                                    }
                                                }
                                                return -att;
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.targets?.length) {
                                            z2 = result.targets[0];
                                            player.line(z2);
                                            if (z1.hasMark('paj_hc_youyu')) z2.addMark('paj_hc_youyu');
                                            z1.removeMark('paj_hc_youyu');
                                        }
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasMark('paj_hc_youyu')) return -Infinity;
                                },
                            },
                            trigger: {
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            _priority: 77646,
                            content() {
                                'step 0';
                                var num = game.countPlayer();
                                var x = num - 1 < 3 ? num - 1 : 3;
                                player
                                    .chooseTarget('选择' + x + '名角色,交给其一枚<游鱼>', x, true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        return 10 - get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets, 'thunder');
                                    result.targets.sortBySeat();
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addMark('paj_hc_youyu');
                                    }
                                }
                            },
                            markimage: 'extension/平安京/image/mark/mx6.jpg',
                            intro: {
                                name: '游鱼',
                                content(storage) {
                                    return '当前有' + storage + '枚<游鱼>';
                                },
                            },
                        },
                        paj_hc_guichuan: {
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.paj_hc_guichuan = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_hc_guichuan) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                var players = game.players.slice(0).sortBySeat();
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i] != player && players[i].hasMark('paj_hc_youyu')) {
                                        event.num += players[i].getDamagedHp();
                                        player.line(players[i], 'thunder');
                                        var num = players[i].countMark('paj_hc_youyu');
                                        players[i].removeMark('paj_hc_youyu', num);
                                        player.addMark('paj_hc_youyu', num);
                                    }
                                }
                                var c = event.num || 1;
                                player.draw(c);
                                player.storage.paj_hc_guichuan = true;
                                player.awakenSkill('paj_hc_guichuan');
                            },
                            ai: {
                                result: {
                                    player(player, target, card) {
                                        var num = 0;
                                        game.countPlayer(function (current) {
                                            if (current != player && current.hasMark('paj_hc_youyu')) return (num += current.getDamagedHp());
                                        });
                                        if (num == player.hp) return 0.2;
                                        if (num >= game.players.length) return 0.7;
                                        else return -0.4;
                                        if (num >= 4) return 1;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_hc_chuanliu: {
                            popup: false,
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                var c = game.countPlayer(function (current) {
                                    if (current != player) return true;
                                    return current.hasMark('paj_hc_youyu');
                                });
                                return c > 0;
                            },
                            forced: true,
                            _priority: 7764,
                            content() {
                                'step 0';
                                var next = player.chooseTarget(get.prompt2('paj_hc_chuanliu'), function (card, player, target) {
                                    return target.hasMark('paj_hc_youyu');
                                });
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    if (att < 0) {
                                        if (target.countCards('he')) return att / 2;
                                        if (target.hp <= 2 && target.countCards('he') <= 2) return att / 3;
                                        if (target.countCards('h') < 2 && target.hp < 2) return att / 4;
                                        return -att;
                                    }
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    t = result.targets[0];
                                    player.addTempSkill('paj_hc_chuanliu_x');
                                    if (!t.countCards('e')) {
                                        var card = t.getCards('h').randomGet();
                                        player.gain(card, t, 'giveAuto', 'bySelf');
                                    } else {
                                        player.gainPlayerCard(t, 'he');
                                    }
                                    player.storage.paj_hc_chuanliu = t;
                                    game.broadcastAll(
                                        function () {
                                            game.swapSeat(player, t);
                                        },
                                        player,
                                        t
                                    );
                                }
                            },
                            subSkill: {
                                x: {
                                    popup: false,
                                    _priority: 7774,
                                    trigger: {
                                        global: 'phaseJieshuBefore',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        game.broadcastAll(
                                            function () {
                                                game.swapSeat(player, player.storage.paj_hc_chuanliu);
                                            },
                                            player,
                                            player.storage.paj_hc_chuanliu
                                        );
                                    },
                                },
                            },
                        },
                        paj_jfq: {
                            usable: 1,
                            nobracket: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.num && event.source && event.source != player && player.inRange(event.source) && event.source.isPhaseUsing();
                            },
                            check(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                c = card ? { name: 'sha' } : { name: 'jg' };
                                player.addTempSkill('paj_jfq_x', 'useCardAfter');
                                player.useCard(c, trigger.source, false);
                            },
                            ai: {
                                expose: 0.3,
                            },
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return ['sha', 'jg'].includes(event.card.name) && event.source == player && event.card;
                                    },
                                    forced: true,
                                    content() {
                                        player.discardPlayerCard(trigger.player, 'he');
                                    },
                                },
                            },
                        },
                        paj_schui: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player) {
                                if (
                                    player.countCards('h', function (card) {
                                        return get.type(card) == 'basic';
                                    }) > 0
                                )
                                    return true;
                                if (player.hp > 3) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                x = '进攻';
                                c = card ? { name: 'sha' } : { name: 'jg' };
                                if (card) x = '杀';
                                if (
                                    player.countCards('h', function (card) {
                                        return get.type(card) == 'basic';
                                    }) > 0
                                ) {
                                    player
                                        .chooseCard(
                                            'h',
                                            function (card) {
                                                return get.type(card) == 'basic';
                                            },
                                            '弃置一张基本牌或点击取消失去一点体力,视为使用一张不记次数的【' + x + '】'
                                        )
                                        .set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.chooseTarget('选择一名角色,视为对其使用一张「' + x + '」', function (card, target, player) {
                                        return target != player;
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                } else {
                                    player.loseHp();
                                    event.goto(3);
                                }
                                cardsx = result.cards[0];
                                ('step 2');
                                if (result.bool) {
                                    player.discard(cardsx);
                                    player.addTempSkill('paj_schui_x', 'useCardAfter');
                                    player.useCard(c, result.targets[0], false);
                                    event.finish();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                player.chooseTarget('选择一名角色,视为对其使用一张「' + x + '」', function (card, target, player) {
                                    return target != player;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 4');
                                if (result.bool) {
                                    player.addTempSkill('paj_schui_x', 'useCardAfter');
                                    player.useCard(c, result.targets[0], false);
                                } else {
                                    event.finish();
                                }
                            },
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return ['sha', 'jg'].includes(event.card.name) && event.source == player && event.card;
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                            },
                        },
                        paj_hc_laolue: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'shunshou' }, player, target);
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            filter(event, player) {
                                return player.countCards('he', { color: 'red' });
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                if (get.distance(player, target) > 1) event.num++;
                                player.useCard({ name: 'shunshou' }, target, false);
                                ('step 1');
                                if (event.num > 0) {
                                    player.chooseBool('是否摸一张牌？');
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.draw();
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order(item, player) {
                                    return get.order({ name: 'shunshou' }) + 0.1;
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.effect(target, { name: 'shunshou' }, player, target);
                                    },
                                },
                            },
                        },
                        paj_hc_shafu: {
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            forced: true,
                            content() {
                                if (trigger.parent.name == 'damage' && get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                                player.addTempSkill('paj_hc_shafu_f', { player: 'phaseAfter' });
                            },
                            group: ['paj_hc_shafu_x', 'paj_hc_shafu_s'],
                            subSkill: {
                                f: {
                                    mark: true,
                                    marktext: '伏',
                                    intro: {
                                        name: '杀伏',
                                        content: '造成的火焰伤害+1',
                                    },
                                    popup: false,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                s: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isMaxEquip() && event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        nofire: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (!target.isMaxEquip() && get.tag(card, 'fireDamage')) return 'zerotarget';
                                            },
                                        },
                                    },
                                },
                                x: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isMaxEquip() && event.nature == 'thunder';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.naturn == 'thunder') return 2;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        paj_wshi: {
                            popup: false,
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            forced: true,
                            _priority: -5,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('paj_wshi'), [1, 3], function (card, player, target) {
                                    return player.canCompare(target);
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.chooseToCompare(result.targets).callback = lib.skill.paj_wshi.callback;
                                }
                            },
                            markimage: 'extension/平安京/image/mark/mx8.jpg',
                            intro: {
                                name: '羽矢',
                                content: 'mark',
                            },
                            callback() {
                                'step 0';
                                if (event.num1 <= event.num2) {
                                    var evt = _status.event;
                                    for (var i = 0; i < 10; i++) {
                                        if (evt && evt.getParent) evt = evt.parent;
                                        if (evt.name == 'phaseUse') {
                                            evt.skipped = true;
                                            break;
                                        }
                                    }
                                }
                                ('step 1');
                                if (event.num1 >= event.num2) {
                                    target.addMark('paj_wshi');
                                    target.chooseToDiscard('he', true);
                                }
                            },
                        },
                        paj_yurenfb: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hasMark('paj_wshi');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.line(trigger.player);
                                if (
                                    trigger.player.countCards('h', function (card) {
                                        return get.type(card) != 'basic';
                                    }) > 0
                                ) {
                                    trigger.player
                                        .chooseToDiscard(
                                            'h',
                                            function (card) {
                                                return get.type(card) != 'basic';
                                            },
                                            '弃置一张非基本牌或点击取消失去一点体力并弃置<暴风>'
                                        )
                                        .set('ai', function (card) {
                                            return 8 - get.value(card);
                                        });
                                }
                                ('step 1');
                                if (!result.cards || !result.cards.length) {
                                    trigger.player.loseHp();
                                    trigger.player.removeMark('paj_wshi', Infinity);
                                }
                            },
                            group: ['paj_yurenfb_x', 'paj_yurenfb_c'],
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    forced: true,
                                    content() {
                                        trigger.player.addMark('paj_wshi');
                                    },
                                },
                                c: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    silent: true,
                                    forced: true,
                                    content() {
                                        var players = game.players.slice(0).sortBySeat();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != player) players[i].removeMark('paj_wshi', Infinity);
                                        }
                                    },
                                },
                            },
                        },
                        paj_wxzy: {
                            trigger: {
                                player: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getHistory('sourceDamage').length;
                            },
                            content() {
                                player.addHut();
                            },
                        },
                        paj_xx_xiuluo: {
                            markimage: 'extension/平安京/image/mark/mx3.jpg',
                            intro: {
                                name: '修罗',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            _priority: -7,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    position: 'he',
                                    prompt: get.prompt2('paj_xx_xiuluo'),
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        if (typeof event != 'string') event = event.parent.name;
                                        var mod = game.checkMod(card, player, event, 'unchanged', 'cardDiscardable', player);
                                        if (mod != 'unchanged') return mod;
                                        return true;
                                    },
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    filterTarget(card, player, target) {
                                        return target != player && player.inRange(target);
                                    },
                                    complexSelect: true,
                                    ai1(card) {
                                        return 9 - get.value(card);
                                    },
                                    ai2(target) {
                                        var att = get.attitude(_status.event.player, target);
                                        return -att;
                                    },
                                });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                } else {
                                    var tx = result.targets[0];
                                    player.discard(result.cards);
                                    player.gainPlayerCard(tx, 'he', true);
                                    tx.addMark('paj_xx_xiuluo');
                                }
                            },
                            group: 'paj_xx_xiuluo_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.player.hasMark('paj_xx_xiuluo') && event.player.isAlive();
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.restoreSkill('paj_xx_my');
                                        ('step 1');
                                        trigger.player.removeMark('paj_xx_xiuluo', Infinity);
                                    },
                                },
                            },
                        },
                        paj_xx_Tl: {
                            usable: 1,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (!player.inRange(target)) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            selectCard: [0, 1],
                            content() {
                                'step 0';
                                if (cards.length == 0) {
                                    player.loseHp();
                                }
                                ('step 1');
                                target.damage('nocard');
                                target.addMark('paj_xx_xiuluo');
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            position: 'he',
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 2.3,
                        },
                        paj_xx_my: {
                            enable: 'phaseUse',
                            mark: true,
                            group: 'hut',
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_my = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_my) return false;
                                return true;
                            },
                            filterTarget(card, target, player) {
                                var c = 1;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hasMark('paj_xx_xiuluo');
                                    })
                                )
                                    c = Infinity;
                                return get.distance(player, target) <= c && target != player;
                            },
                            content() {
                                'step 0';
                                player.addHut();
                                player.storage.paj_xx_my = true;
                                ('step 1');
                                if (!player.storage.paj_xxxc_vc) player.storage.paj_xxxc_vc = [];
                                player.storage.paj_xxxc_vc.push(target);
                                game.broadcastAll(
                                    function () {
                                        game.swapSeat(player, target);
                                    },
                                    player,
                                    target
                                );
                                ('step 2');
                                card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                c = card ? { name: 'sha' } : { name: 'jg' };
                                if (player.canUse(c, target, false)) player.useCard(c, target, false);
                                ('step 3');
                                player.addTempSkill('paj_xx_my_x');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        var equip2 = target.getEquip(2);
                                        if (target.countCards('h') < 3 && target.hasMark('paj_xx_xiuluo') && equip2.name != 'penghoudakai') return -1.5;
                                        if (target.hasMark('paj_xx_xiuluo')) return -1;
                                        return 0;
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                            subSkill: {
                                x: {
                                    popup: false,
                                    _priority: 777,
                                    trigger: {
                                        player: 'phaseJieshuBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var num = player.storage.paj_xxxc_vc.length;
                                        for (var i = num - 1; i >= 0; i--) {
                                            var target = player.storage.paj_xxxc_vc[i];
                                            game.broadcastAll(
                                                function () {
                                                    game.swapSeat(player, target);
                                                },
                                                player,
                                                target
                                            );
                                            game.log(target);
                                            player.storage.paj_xxxc_vc.remove(target);
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_Xueyutsy: {
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (get.distance(player, target) > 1) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [0, 1],
                            content() {
                                'step 0';
                                if (cards.length == 0) {
                                    player.loseHp();
                                }
                                ('step 1');
                                target.damage('nocard');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 1.5,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var x = player.storage.paj_xx_Xueyutsy;
                                    var str = '已使用<血玉铁碎牙>造成' + x + '点伤害<br>使用<血玉铁碎牙>累计造成3点伤害点后升级为<金刚铁碎牙>';
                                    return str;
                                },
                            },
                            group: ['paj_xx_Xueyutsy_x'],
                            subSkill: {
                                n: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_Xueyutsy_xx == true;
                                    },
                                    content() {
                                        player.storage.paj_xx_Xueyutsy_xx = false;
                                    },
                                },
                                x: {
                                    init(player) {
                                        player.storage.paj_xx_Xueyutsy = 0;
                                        player.unmarkSkill('paj_xx_Xueyutsy');
                                    },
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.parent.name == 'paj_xx_Xueyutsy';
                                    },
                                    content() {
                                        player.storage.paj_xx_Xueyutsy += trigger.num;
                                        player.markSkill('paj_xx_Xueyutsy');
                                        player.update();
                                        if (player.storage.paj_xx_Xueyutsy >= 3) {
                                            player.storage.paj_xx_Xueyutsy_xx = true;
                                            player.addSkill('paj_xx_Jingangtsy');
                                            player.removeSkill('paj_xx_Xueyutsy');
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_Tsy: {
                            derivation: ['paj_xx_Xueyutsy', 'paj_xx_Jingangtsy', 'paj_xx_Longlintsy', 'paj_xx_Mingdaotsy'],
                            popup: false,
                            nobracket: true,
                            trigger: {
                                global: 'gameDrawBefore',
                            },
                            forced: true,
                            content() {
                                player.addSkill('paj_xx_Xueyutsy');
                                player.removeSkill('paj_xx_Tsy');
                            },
                        },
                        paj_xx_Jingangtsy: {
                            usable: 1,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.paj_xx_Xueyutsy_xx == true) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (get.distance(player, target) > 1) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [0, 1],
                            content() {
                                'step 0';
                                if (cards.length == 0) {
                                    player.loseHp();
                                }
                                ('step 1');
                                target.addTempSkill('paj_xx_Jingangtsy_tx', { player: 'damageAfter', global: 'loseAfter' });
                                target.damage('nocard');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && arg.target.hasSkill('paj_xx_Jingangtsy_tx')) return true;
                                    return false;
                                },
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 2.5,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var x = player.storage.paj_xx_Jingangtsy;
                                    var str = '已使用<金刚铁碎牙>造成' + x + '点伤害<br>使用<金刚铁碎牙>累计造成3点伤害点后升级为<龙鳞铁碎牙>';
                                    return str;
                                },
                            },
                            group: ['paj_xx_Jingangtsy_x', 'paj_xx_Jingangtsy_sx', 'paj_xx_Xueyutsy_n'],
                            subSkill: {
                                x: {
                                    init(player) {
                                        player.storage.paj_xx_Jingangtsy = 0;
                                        player.unmarkSkill('paj_xx_Jingangtsy');
                                    },
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.parent.name == 'paj_xx_Jingangtsy';
                                    },
                                    content() {
                                        player.storage.paj_xx_Jingangtsy += trigger.num;
                                        player.markSkill('paj_xx_Jingangtsy');
                                        event.trigger('skilldamage1');
                                        player.update();
                                    },
                                },
                                sx: {
                                    trigger: {
                                        player: 'skilldamage1',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return player.storage.paj_xx_Jingangtsy >= 3;
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 0';
                                        player.addSkill('paj_xx_Longlintsy');
                                        ('step 1');
                                        player.storage.paj_xx_Xueyutsy_xx = true;
                                        ('step 2');
                                        player.removeSkill('paj_xx_Jingangtsy');
                                    },
                                },
                                tx: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                            },
                        },
                        paj_xx_Longlintsy: {
                            enable: 'phaseUse',
                            usable: 2,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (!player.inRange(target)) return false;
                                return true;
                            },
                            filterCard: true,
                            filter(event, player) {
                                if (player.storage.paj_xx_Xueyutsy_xx == true) return false;
                                return true;
                            },
                            selectCard: [0, 1],
                            content() {
                                'step 0';
                                if (cards.length == 0) {
                                    player.loseHp();
                                }
                                ('step 1');
                                target.addTempSkill('paj_xx_Jingangtsy_tx', { player: ['damageAfter', 'loseAfter'], global: 'loseAfter' });
                                target.damage('nocard');
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && arg.target.hasSkill('paj_xx_Jingangtsy_tx')) return true;
                                    return false;
                                },
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 2.7,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var x = player.storage.paj_xx_Longlintsy;
                                    var c = player.storage.paj_xx_Longlintsyx == true ? '生效' : '失效';
                                    var str = '已使用<龙鳞铁碎牙>造成' + x + '次伤害<br>使用<龙鳞铁碎牙>累计造成3次伤害点后升级为<冥道铁碎牙><br>下次造成伤害可摸牌或回血(' + c + ')';
                                    return str;
                                },
                            },
                            group: ['paj_xx_Longlintsy_x', 'paj_xx_Longlintsy_tx', 'paj_xx_Longlintsy_sx', 'paj_xx_Longlintsy_sz'],
                            subSkill: {
                                x: {
                                    init(player) {
                                        player.storage.paj_xx_Longlintsy = 0;
                                        player.storage.paj_xx_Longlintsyx = false;
                                        player.unmarkSkill('paj_xx_Longlintsy');
                                    },
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.parent.name == 'paj_xx_Longlintsy';
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.paj_xx_Longlintsy++;
                                        player.markSkill('paj_xx_Longlintsy');
                                        player.update();
                                        ('step 1');
                                        if (player.storage.paj_xx_Longlintsy >= 3) {
                                            player.addSkill('paj_xx_Mingdaotsy');
                                            player.addSkill('paj_xx_Xueyutsy_n');
                                            player.storage.paj_xx_Xueyutsy_xx = true;
                                            player.removeSkill('paj_xx_Longlintsy');
                                        }
                                    },
                                },
                                sx: {
                                    popup: false,
                                    trigger: {
                                        player: ['paj_xx_LonglintsyAfter', 'paj_xx_MingdaotsyAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        player.storage.paj_xx_Longlintsyx = true;
                                    },
                                },
                                sz: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    popup: false,
                                    silent: true,
                                    forced: true,
                                    content() {
                                        player.storage.paj_xx_Longlintsyx = false;
                                        player.storage.paj_xx_Xueyutsy_xx = false;
                                    },
                                },
                                tx: {
                                    popup: false,
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_Longlintsyx == true;
                                    },
                                    content() {
                                        'step 0';
                                        x = trigger.num;
                                        var next = player.chooseControl('回血', '摸牌', '取消');
                                        next.set('prompt', '请选择一项');
                                        next.set('prompt2', '回复' + x + '点体力或摸' + x + '张牌');
                                        next.ai = function () {
                                            var player = _status.event.player;
                                            if (player.hp > 2) return '摸牌';
                                            if (player.hp < 3) return '回血';
                                            return '回血';
                                        };
                                        ('step 1');
                                        if (result.control == '取消') {
                                            event.finish();
                                        } else {
                                            if (result.control == '回血') {
                                                player.recover(x);
                                            } else {
                                                player.draw(x);
                                            }
                                        }
                                        player.storage.paj_xx_Longlintsyx = false;
                                    },
                                },
                            },
                        },
                        paj_xx_Mingdaotsy: {
                            usable: 2,
                            nobracket: true,
                            filter(event, player) {
                                if (player.storage.paj_xx_Xueyutsy_xx == true) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                return true;
                            },
                            enable: 'phaseUse',
                            filterCard: true,
                            selectCard: [0, 1],
                            content() {
                                'step 0';
                                if (cards.length == 0) {
                                    player.loseHp();
                                }
                                ('step 1');
                                target.addTempSkill('paj_xx_Jingangtsy_tx', { player: ['damageAfter', 'loseAfter'], global: 'loseAfter' });
                                target.damage('nocard');
                            },
                            check(card, player) {
                                if (player.storage.paj_xx_Longlintsyx == true) return 6 - get.value(card);
                                return 8 - get.value(card);
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.target && arg.target.hasSkill('paj_xx_Jingangtsy_tx')) return true;
                                    return false;
                                },
                                order: 8.5,
                                result: {
                                    target(player, target) {
                                        if (!ui.selected.cards.length) {
                                            if (player.hp < 2) return 0;
                                            if (target.hp >= player.hp) return 0;
                                        }
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                            threaten: 3.2,
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var c = player.storage.paj_xx_Longlintsyx == true ? '生效' : '失效';
                                    var str = '下次造成伤害可摸牌或回血(' + c + ')';
                                    return str;
                                },
                            },
                            group: ['paj_xx_Mingdaotsy_x', 'paj_xx_Longlintsy_sx', 'paj_xx_Longlintsy_sz', 'paj_xx_Longlintsy_tx'],
                            subSkill: {
                                x: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return !player.getEquip('guanshi');
                                    },
                                    content() {
                                        var card = get.cardPile('guanshi', 'field');
                                        if (card) {
                                            player.gain(card, 'gain2', 'log');
                                            player.equip(card);
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_fzs: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (['sha', 'jg'].includes(card.name)) return num + player.storage.paj_xx_fzs_ss;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - from.storage.paj_xx_fzs_ss;
                                },
                            },
                            init(player) {
                                player.storage.paj_xx_fzs_s = 0;
                                player.storage.paj_xx_fzs_x = 0;
                                player.storage.paj_xx_fzs = 0;
                                player.storage.paj_xx_fzs_ss = 0;
                                player.storage.paj_xx_fzs_qh = false;
                                player.storage.paj_xx_fzs_qh_x = 2;
                                player.unmarkSkill('paj_xx_fzs');
                            },
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            nobracket: true,
                            silent: true,
                            filter(event, player) {
                                return player.storage.paj_xx_fzs_qh != true;
                            },
                            content() {
                                player.storage.paj_xx_fzs_x++;
                                player.markSkill('paj_xx_fzs');
                                event.trigger('f_x');
                                player.update();
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var str = '风之伤',
                                        x = player.storage.paj_xx_fzs_x,
                                        s = player.storage.paj_xx_fzs_s,
                                        f = player.storage.paj_xx_fzs,
                                        v = player.storage.paj_xx_fzs_qh == true ? '己强化' : '未强化',
                                        z = player.storage.paj_xx_fzs_qh_x,
                                        b = player.storage.paj_xx_fzs_ss;
                                    if (player.storage.paj_xx_fzs_qh != true) str += '<br>累计造成伤害次数:' + x + '(达到3自动清空)';
                                    if (player.storage.paj_xx_fzs_qh != true) str += '<br>累计使用进攻次数:' + s + '(达到3自动清空)';
                                    str += '<br>当前风之伤层数:' + f + '';
                                    str += '<br>风之伤当前' + v + '';
                                    if (b > 0) str += '<br>可额外使用' + b + '张进攻';
                                    if (b > 0) str += '<br>与其他角色距离-' + b + '';
                                    if (player.storage.paj_xx_fzs_qh == true) str += '<br>离强化效果结束还有' + z + '回合';
                                    if (player.isUnderControl(true)) {
                                        return str;
                                    } else {
                                        return '这是皇帝的新标记,一般人看不见';
                                    }
                                },
                            },
                            group: ['paj_xx_fzs_x', 'paj_xx_fzs_c', 'paj_xx_fzs_v', 'paj_xx_fzs_u', 'paj_xx_fzs_b', 'paj_xx_fzs_j'],
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return ['sha', 'jg'].includes(event.card.name) && event.card && player.storage.paj_xx_fzs_qh != true;
                                    },
                                    content() {
                                        player.storage.paj_xx_fzs_s++;
                                        player.markSkill('paj_xx_fzs');
                                        event.trigger('f_s');
                                        player.update();
                                    },
                                    popup: false,
                                },
                                c: {
                                    trigger: {
                                        player: ['f_x', 'f_s'],
                                    },
                                    popup: false,
                                    forced: true,
                                    silent: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.paj_xx_fzs_s >= 3) {
                                            player.storage.paj_xx_fzs++;
                                            player.storage.paj_xx_fzs_ss++;
                                            player.markSkill('paj_xx_fzs');
                                            player.storage.paj_xx_fzs_s = 0;
                                            event.trigger('f');
                                            player.update();
                                        }
                                        ('step 1');
                                        if (player.storage.paj_xx_fzs_x >= 3) {
                                            player.storage.paj_xx_fzs++;
                                            player.storage.paj_xx_fzs_ss++;
                                            player.markSkill('paj_xx_fzs');
                                            player.storage.paj_xx_fzs_x = 0;
                                            event.trigger('f');
                                            player.update();
                                        }
                                    },
                                },
                                v: {
                                    trigger: {
                                        player: ['f', 'b'],
                                    },
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_fzs >= 6;
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.paj_xx_fzs_qh = true;
                                        //player.storage.paj_xx_fzs=0;
                                    },
                                },
                                u: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return ['sha', 'jg'].includes(event.card.name) && player.storage.paj_xx_fzs_qh == true;
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                    },
                                    popup: false,
                                },
                                j: {
                                    trigger: {
                                        player: ['paj_xx_MingdaotsyAfter', 'paj_xx_LonglintsyAfter', 'paj_xx_JingangtsyAfter', 'paj_xx_XueyutsyAfter'],
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_fzs_qh == true;
                                    },
                                    content() {
                                        player.draw();
                                        player.storage.paj_xx_fzs++;
                                        player.markSkill('paj_xx_fzs');
                                        event.trigger('b');
                                        player.update();
                                    },
                                    popup: false,
                                },
                                b: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    silent: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_fzs_qh == true;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.paj_xx_fzs_qh_x--;
                                        ('step 1');
                                        if (player.storage.paj_xx_fzs_qh_x == 0) {
                                            player.storage.paj_xx_fzs_qh = false;
                                            player.storage.paj_xx_fzs_qh_x = 2;
                                        }
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        paj_xx_Pmzj: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (game.online) {
                                        if (!player.countUsed()) return true;
                                    } else {
                                        var evt = _status.event.getParent('phaseUse');
                                        if (
                                            evt &&
                                            evt.name == 'phaseUse' &&
                                            player.getHistory('useCard', function (evt2) {
                                                return evt2.getParent('phaseUse') == evt;
                                            }).length == 0
                                        )
                                            return true;
                                    }
                                },
                            },
                            usable: 1,
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            group: 'paj_xx_Pmzj_x',
                            subSkill: {
                                x: {
                                    usable: 1,
                                    popup: false,
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return player.storage.paj_xx_Pmzj == true && event.card;
                                    },
                                    content() {
                                        player.addTempSkill('_paj_xx_hut_pt', { player: 'useCardAfter' });
                                        player.addTempSkill('paj_xx_Pmzj_pf', { player: 'useCardAfter' });
                                    },
                                },
                                pf: {
                                    ai: {
                                        unequip: true,
                                    },
                                },
                            },
                        },
                        paj_xx_lljf: {
                            mark: true,
                            marktext: '灵',
                            intro: {
                                name: '灵力进发',
                                content(storage, player) {
                                    if (player.storage.paj_xx_lljf) {
                                        return '其他角色与你距离+' + storage + '';
                                    } else {
                                        return '未增加其他角色与你距离';
                                    }
                                },
                            },
                            init(player) {
                                if (typeof player.storage.paj_xx_lljf != 'number') player.storage.paj_xx_lljf = 0;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            nobracket: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            prompt() {
                                var player = _status.event.player;
                                var str = '出牌阶段限一次,你可以弃置一张手牌,直到你的下个回合开始前,其他角色计算与你的距离+1,你于下回合出牌阶段开始时展示所有手牌并弃置一种类别的所有手牌(至少一张).';
                                if (player.storage.paj_xx_lljfsj == true) str = '出牌阶段限一次,你可以弃置一张基本牌,直到你的下个回合开始,其他角色计算与你距离+1,你下回合展示所有手牌并弃置一种花色的所有手牌(至少一张).';
                                return str;
                            },
                            content() {
                                'step 0';
                                player.$damagepop(1, 'unknownx');
                                player.addTempSkill('paj_xx_lljf_2', { player: 'phaseBegin' });
                                player.storage.paj_xx_lljf++;
                                player.markSkill('paj_xx_lljf');
                                game.addVideo('storage', player, ['paj_xx_lljf', player.storage.paj_xx_lljf]);
                                ('step 1');
                                if (player.storage.paj_xx_lljfsj == false) {
                                    player.addTempSkill('paj_xx_lljf_1', { player: 'phaseUseBegin' });
                                }
                                if (player.storage.paj_xx_lljfsj == true) {
                                    player.addTempSkill('paj_xx_lljf_3', { player: 'phaseUseBegin' });
                                }
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    if (typeof to.storage.paj_xx_lljf == 'number') {
                                        return distance + to.storage.paj_xx_lljf;
                                    }
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                1: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h');
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        player.showHandcards();
                                        var type = player
                                            .getCards('h')
                                            .map((q) => get.type(q))
                                            .unique();
                                        const result = await player.chooseControl(type).forResult();
                                        player.discard(
                                            player.getCards('h', function (card) {
                                                return get.type(card, 'trick') == result.control;
                                            })
                                        );
                                    },
                                },
                                2: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        player.storage.paj_xx_lljf = 0;
                                        player.markSkill('paj_xx_lljf');
                                        game.addVideo('storage', player, ['paj_xx_lljf', player.storage.paj_xx_lljf]);
                                    },
                                },
                                3: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseUseBefore',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h');
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        player.showHandcards();
                                        var type = player
                                            .getCards('h')
                                            .map((q) => q.suit)
                                            .unique();
                                        const result = await player.chooseControl(type).forResult();
                                        player.discard(
                                            player.getCards('h', function (card) {
                                                return card.suit == result.control;
                                            })
                                        );
                                    },
                                },
                            },
                        },
                        paj_xx_shc: {
                            markimage: 'extension/平安京/image/mark/mx10.jpg',
                            intro: {
                                name: '死魂虫',
                                content: 'mark',
                            },
                            nobracket: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0 || !event.target.hasMark('paj_xx_shc');
                            },
                            forced: true,
                            filter(event, player) {
                                return ['sha', 'jg'].includes(event.card.name) && event.card;
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.addMark('paj_xx_shc');
                            },
                            mod: {
                                globalFrom(from, to) {
                                    if (to.hasMark('paj_xx_shc')) return -Infinity;
                                },
                            },
                            group: 'paj_xx_shc_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && event.player.hasMark('paj_xx_shc') && player.storage.paj_xx_shc == true;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        paj_xx_wnjj: {
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var str = '';
                                    if (player.storage.paj_xx_wnjj_skill.length) {
                                        str += '己升级的技能:' + get.translation(player.storage.paj_xx_wnjj_skill) + '';
                                    } else {
                                        str += '当前未升级技能';
                                    }
                                    return str;
                                },
                            },
                            init(player) {
                                player.storage.paj_xx_wnjj_skill = [];
                                player.storage.paj_xx_Pmzj = false;
                                player.storage.paj_xx_lljfsj = false;
                                player.storage.paj_xx_shc = false;
                            },
                            round: 1,
                            nobracket: true,
                            trigger: {
                                player: ['paj_xx_PmzjAfter', 'paj_xx_lljfAfter', 'paj_xx_shcAfter'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'paj_xx_PmzjAfter') {
                                    var num = 0;
                                    if (player.storage.paj_xx_wnjj_skill.includes('死魂虫')) num++;
                                    if (player.storage.paj_xx_wnjj_skill.includes('灵力进发')) num++;
                                    return num < 2;
                                }
                                if (name == 'paj_xx_lljfAfter') {
                                    num = 0;
                                    if (player.storage.paj_xx_wnjj_skill.includes('死魂虫')) num++;
                                    if (player.storage.paj_xx_wnjj_skill.includes('破魔之箭')) num++;
                                    return num < 2;
                                }
                                if (name == 'paj_xx_shcAfter') {
                                    num = 0;
                                    if (player.storage.paj_xx_wnjj_skill.includes('破魔之箭')) num++;
                                    if (player.storage.paj_xx_wnjj_skill.includes('灵力进发')) num++;
                                    return num < 2;
                                }
                            },
                            content() {
                                'step 0';
                                var skillx = ['paj_xx_PmzjAfter', 'paj_xx_lljfAfter', 'paj_xx_shcAfter'];
                                skillx.remove(event.triggername);
                                var skillsx = [];
                                if (skillx.includes('paj_xx_PmzjAfter') && !player.storage.paj_xx_wnjj_skill.includes('破魔之箭')) skillsx.push('破魔之箭');
                                if (skillx.includes('paj_xx_shcAfter') && !player.storage.paj_xx_wnjj_skill.includes('死魂虫')) skillsx.push('死魂虫');
                                if (skillx.includes('paj_xx_lljfAfter') && !player.storage.paj_xx_wnjj_skill.includes('灵力进发')) skillsx.push('灵力进发');
                                if (skillsx.length) {
                                    if (skillsx.length == 1) event._result = { control: skillsx[0] };
                                    var next = player.chooseControl(skillsx);
                                }
                                var l = !skillx.includes('paj_xx_lljfAfter') ? '' : '灵力进发/升级后:出牌阶段限一次,你可以弃置一张基本牌,直到你的下个回合开始,其他角色计算与你距离+1,你下回合展示所有手牌并弃置一种花色的所有手牌(至少一张).',
                                    s = !skillx.includes('paj_xx_shcAfter') ? '' : '<br>死魂虫/升级后:你使用【进攻】指定一名角色为目标时,该角色获得一枚<死魂虫>标记,你对拥有<死魂虫>标记的角色使用牌时,没有距离限制,当拥有<死魂虫>标记的角色死亡后,你摸一张牌.',
                                    p = !skillx.includes('paj_xx_PmzjAfter') ? '' : '<br>破魔之箭/升级后:锁定技,出牌阶段,你第一次造成的伤害+1,你使用的第一张牌不受距离限制且无视护甲效果和防具效果.';
                                next.set('prompt', '请选择要升级的技能');
                                next.set('prompt2', '' + l + '' + p + '' + s + '');
                                next.set('ai', function () {
                                    return skillsx.randomGet();
                                });
                                ('step 1');
                                if (result.control == '死魂虫') {
                                    player.storage.paj_xx_shc = true;
                                    player.storage.paj_xx_wnjj_skill.push(result.control);
                                }
                                if (result.control == '灵力进发') {
                                    player.storage.paj_xx_lljfsj = true;
                                    player.storage.paj_xx_wnjj_skill.push(result.control);
                                }
                                if (result.control == '破魔之箭') {
                                    player.storage.paj_xx_Pmzj = true;
                                    player.storage.paj_xx_wnjj_skill.push(result.control);
                                }
                            },
                            group: ['paj_xx_wnjj_roundcount'],
                        },
                        paj_xx_wfjk: {
                            juexingji: true,
                            derivation: ['paj_xx_fxzx', 'paj_xx_fmzx'],
                            nobracket: true,
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hp <= 1 && !player.storage.paj_xx_wfjk;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseMaxHp();
                                player.recover();
                                ('step 1');
                                event.str1 = '每名角色回合限一次,造成伤害时/受到伤害时,你可以摸一张牌防止之/失去一点体力防止之,获得一点护甲并令一名其他角色摸两张牌.';
                                event.str2 = '每名角色回合限一次,当你造成伤害时/受到伤害时,可弃置一张牌/令伤害来源摸一张牌并防止此伤害,你造成的伤害+1/回复一点体力.';
                                event.listx = [!player.hasSkill('paj_xx_fxzx'), !player.hasSkill('paj_xx_fmzx')];
                                ('step 2');
                                event.videoId = lib.status.videoId++;
                                var func = function (id, bool) {
                                    var list = ['' + event.str1 + '', '' + event.str2 + ''];
                                    var choiceList = ui.create.dialog('【万法皆空】:请选择要获得的技能', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (!bool[i]) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool[i]) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                event.dialog1 = func(event.videoId, event.listx);
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1);
                                next.set('filterButton', function (button) {
                                    return event.listx[button.link];
                                });
                                next.set('ai', function (button) {
                                    return Math.random();
                                });
                                ('step 3');
                                event.dialog1.close();
                                event.link = result.links[0];
                                if (event.link == 0) {
                                    player.addSkillLog('paj_xx_fxzx');
                                    game.log(player, '获得了技能', '#g【佛心之相】');
                                    player.awakenSkill(event.name);
                                    player.storage[event.name] = true;
                                } else {
                                    player.addSkill('paj_xx_fmzx');
                                    player.popup('<font color="black">伏魔之相</font>');
                                    game.log(player, '获得了技能', '#g【伏魔之相】');
                                    player.awakenSkill(event.name);
                                    player.storage[event.name] = true;
                                }
                            },
                            ai: {
                                threaten(player, target) {
                                    if (target.hp == 1) return 4;
                                    return 0.8;
                                },
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!target.hasFriend()) return;
                                        if (get.tag(card, 'damage') == 1 && target.hp == 2 && !target.isTurnedOver() && _status.currentPhase != target && get.distance(_status.currentPhase, target, 'absolute') <= 3) return [0.5, 1];
                                    },
                                },
                            },
                        },
                        paj_xx_fxzx: {
                            nobracket: true,
                            usable: 1,
                            trigger: {
                                source: 'damageBegin1',
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            check(event, player) {
                                if (event.source == player) {
                                    return get.attitude(player, event.player) > 0;
                                } else {
                                    return player.hp > 2;
                                }
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'damageBegin1') {
                                    event.xt = true;
                                    player.draw();
                                    trigger.cancel();
                                    player.addHut();
                                }
                                if (event.triggername == 'damageBegin4') {
                                    event.xt = true;
                                    trigger.cancel();
                                    player.loseHp();
                                    player.addHut();
                                }
                                ('step 1');
                                if (event.xt) {
                                    var next = player.chooseTarget('选择一名其他角色,令其摸两张牌', true, function (card, player, target) {
                                        return target != player;
                                    });
                                    next.set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (target.hasSkillTag('nogain')) att /= 10;
                                        if (target.hasJudge('lebu')) att /= 5;
                                        return att;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.draw(2);
                                }
                            },
                        },
                        paj_xx_fmzx: {
                            nobracket: true,
                            trigger: {
                                source: 'damageBegin1',
                                player: 'damageBegin3',
                            },
                            filter(event, player, name) {
                                if (name == 'damageBegin3') {
                                    return event.source && event.num > 0 && !player.hasSkill('paj_xx_fmzx_x');
                                } else return event.num > 0 && !player.hasSkill('paj_xx_fmzx_x');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'damageBegin1') {
                                    var next = player.chooseToDiscard('he');
                                    next.set('prompt', '是否发动【伏魔之相】？');
                                    next.set('prompt2', '弃置一张牌并令你对<' + get.translation(trigger.player) + '>造成的伤害+1.');
                                    next.set('ai', function (card) {
                                        var player = _status.event.player;
                                        var triggerx = _status.event.getTrigger().player;
                                        if (get.damageEffect(triggerx, player, player) > 0) return 8 - get.value(card);
                                        return 0;
                                    });
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.cards?.length) {
                                    trigger.num++;
                                    player.addTempSkill('paj_xx_fmzx_x');
                                    event.finish();
                                }
                                ('step 2');
                                if (event.triggername == 'damageBegin3') {
                                    var next = player.chooseBool();
                                    next.set('prompt', '是否发动【伏魔之相】？');
                                    next.set('prompt2', '令<' + get.translation(trigger.source) + '>摸一张牌并防止其对你造成的伤害,你回复1点体力.');
                                    next.ai = function () {
                                        var player = _status.event.player;
                                        var event = _status.event.getTrigger();
                                        if (player.getDamagedHp() < 1 && get.attitude(player, event.source) < 1) return 0;
                                        return 1;
                                    };
                                }
                                ('step 3');
                                if (result.bool) {
                                    trigger.source.draw();
                                    player.recover();
                                    player.addTempSkill('paj_xx_fmzx_x');
                                    trigger.cancel();
                                }
                            },
                            subSkill: {
                                x: {},
                            },
                        },
                        paj_xx_cd: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            prompt2: '出牌阶段开始时,你可以弃置一种类型的手牌(至少一张),令一名其他角色弃置等量的牌.',
                            filter(event, player) {
                                return player.countCards('he') && !player.hasSkill('paj_xx_fxzx') && !player.hasSkill('paj_xx_fmzx');
                            },
                            //出牌阶段开始时,你可以弃置一种类型的手牌(至少一张),令一名其他角色弃置等量的牌.<br>当你获得<佛心之相>后,此技能改为:出牌阶段开始时,你可以弃置一种类型的所有手牌(至少一张),指定一名其他角色,你选择一项:1.该角色摸等量的牌;2.该角色弃置等量的牌. <br>当你获得<伏魔之相>后,此技能改为:准备阶段,你可以指定一名角色,你选择一项令该角色执行:1.摸一张牌弃置X张牌(X为你已损失体力值且至少为1);2.摸X张牌弃置一张牌(X为你已损失体力值且至少为1)
                            async content(event, trigger, player) {
                                //QQQ
                                player.showHandcards();
                                var type = player
                                    .getCards('h')
                                    .map((q) => get.type(q))
                                    .unique();
                                const result = await player.chooseControl(type).forResult();
                                var num = player.countCards('h', function (card) {
                                    return get.type(card, 'trick') == result.control;
                                });
                                player.discard(
                                    player.getCards('h', function (card) {
                                        return get.type(card, 'trick') == result.control;
                                    })
                                );
                                const result1 = await player
                                    .chooseTarget('选择一名其他角色,令其弃置' + num + '张牌', true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', (t) => -get.attitude(player, t))
                                    .forResult();
                                if (result1.targets && result1.targets[0]) {
                                    await result1.targets[0].chooseToDiscard('he', num, true);
                                }
                            },
                            group: ['paj_xx_cd_fx', 'paj_xx_cd_fm'],
                            subSkill: {
                                fx: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    prompt2: '出牌阶段开始时,你可以弃置一种类型的所有手牌(至少一张),指定一名其他角色,你选择一项:1.该角色摸等量的牌;2.该角色弃置等量的牌.',
                                    filter(event, player) {
                                        return player.countCards('he') && player.hasSkill('paj_xx_fxzx') && !player.hasSkill('paj_xx_fmzx');
                                    },
                                    check(event, player) {
                                        e = player.countCards('h', { type: 'equip' });
                                        t = player.countCards('h', { type: ['trick', 'delay'] });
                                        b = player.countCards('h', { type: 'basic' });
                                        var c = 0;
                                        if (e < t && e < b) c++;
                                        if (t < e && t < b) c++;
                                        if (b < t && b < e) c++;
                                        if (c > 0) return true;
                                        return false;
                                    },
                                    async content(event, trigger, player) {
                                        //QQQ
                                        player.showHandcards();
                                        var type = player
                                            .getCards('h')
                                            .map((q) => get.type(q))
                                            .unique();
                                        const result = await player.chooseControl(type).forResult();
                                        var num = player.countCards('h', function (card) {
                                            return get.type(card, 'trick') == result.control;
                                        });
                                        player.discard(
                                            player.getCards('h', function (card) {
                                                return get.type(card, 'trick') == result.control;
                                            })
                                        );
                                        const result1 = await player
                                            .chooseTarget('选择一名其他角色,令其弃置' + num + '张牌', true, function (card, player, target) {
                                                return target != player;
                                            })
                                            .forResult();
                                        if (result1.targets && result1.targets[0]) {
                                            const result2 = await player
                                                .chooseControl('摸', '弃')
                                                .set('ai', () => {
                                                    if (get.attitude(result1.targets, player) > 0) return '摸';
                                                    return '弃';
                                                })
                                                .forResult();
                                            if (result2.control == '摸') {
                                                result1.targets[0].draw(num);
                                            } else {
                                                await result1.targets[0].chooseToDiscard('he', num, true);
                                            }
                                        }
                                    },
                                },
                                fm: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('paj_xx_fxzx') && player.hasSkill('paj_xx_fmzx');
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.num = player.getDamagedHp() || 1;
                                        var next = player.chooseTarget('是否发动【禅定】？', function (card, player, target) {
                                            return player != target;
                                        });
                                        next.set('prompt2', '准备阶段,你可以指定一名角色,你选择一项令该角色执行:1.摸一张牌弃置X张牌(X为你已损失体力值且至少为1);2.摸X张牌弃置一张牌(X为你已损失体力值且至少为1).');
                                        next.ai = function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (event.num == 1) return att;
                                            return [-att, att].randomGet();
                                        };
                                        ('step 1');
                                        if (result.targets?.length) {
                                            event.target = result.targets[0];
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        event.listx = [event.target.isAlive(), event.target.isAlive()];
                                        event.videoId = lib.status.videoId++;
                                        var func = function (id, bool) {
                                            var list = ['令XXX摸一张牌并弃置X张牌', '令XXX摸X张牌并弃置一张牌'];
                                            var choiceList = ui.create.dialog('〖禅定〗:请选择一项', 'forcebutton');
                                            choiceList.videoId = id;
                                            for (var i = 0; i < list.length; i++) {
                                                list[i] = list[i].replace(/XXX/g, get.translation(event.target));
                                                list[i] = list[i].replace(/X/g, get.cnNumber(event.num, true));
                                                var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                                if (!bool[i]) str += '<div style="opacity:0.5">';
                                                str += list[i];
                                                if (!bool[i]) str += '</div>';
                                                str += '</div>';
                                                var next = choiceList.add(str);
                                                next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                                next.firstChild.link = i;
                                                Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                                choiceList.buttons.add(next.firstChild);
                                            }
                                            return choiceList;
                                        };
                                        event.dialog1 = func(event.videoId, event.listx);
                                        var next = player.chooseButton();
                                        next.set('dialog', event.videoId);
                                        next.set('selectButton', 1);
                                        next.set('filterButton', function (button) {
                                            return event.listx[button.link];
                                        });
                                        next.set('ai', function (button) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, event.target) <= 0 && button.link == 0) return 1;
                                            return button.link == 1;
                                        });
                                        ('step 3');
                                        event.dialog1.close();
                                        event.link = result.links[0];
                                        if (event.link == 0) {
                                            event.target.draw();
                                            event.target.chooseToDiscard('he', event.num, true);
                                        } else {
                                            event.target.draw(event.num);
                                            event.target.chooseToDiscard('he', true);
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_xzdraw: {
                            usable: 3,
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            prompt(event, player) {
                                var player = _status.event.player;
                                var typex = [],
                                    cards = [];
                                for (var i of event.cards) {
                                    typex.push(get.type(i));
                                    cards.push(i);
                                }
                                var str = '是否发动【雪走】？';
                                if (cards.length) {
                                    str += '<br>' + get.translation(cards) + '';
                                    if (typex.length) {
                                        str += '的类型为:';
                                        str += typex.length > 1 ? '[' + get.translation(typex) + ']' : get.translation(typex);
                                    } else {
                                        str += '此牌无类型';
                                    }
                                }
                                return str;
                            },
                            check(event, player) {
                                var typex = [];
                                for (var i of event.cards) typex.add(get.type(i));
                                var hx = player.countCards('h', function (card) {
                                    return typex.includes(get.type(card)) && player.filterCardx(card);
                                });
                                return hx < 1;
                            },
                            _priority: 6654,
                            content() {
                                player.draw();
                                if (!player.storage.xz_w) player.storage.xz_w = [];
                                for (var i of trigger.cards) player.storage.xz_w.add(get.type(i));
                                player.markSkill('xz_w');
                                player.addTempSkill('xz_w');
                            },
                        },
                        paj_xx_guimou: {
                            markimage: 'extension/平安京/image/mark/mx12.jpg',
                            intro: {
                                name: '鬼眸',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                            },
                            _priority: 9,
                            forced: true,
                            content() {
                                player.addMark('paj_xx_guimou');
                                event.trigger('skillMark');
                            },
                            group: ['paj_xx_guimou_x', 'paj_xx_guimou_c'],
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'skillMark',
                                    },
                                    popup: false,
                                    _priority: 776,
                                    filter(event, player) {
                                        return player.countMark('paj_xx_guimou') >= 5;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var c = game.players.length - 1 < 5 ? game.players.length - 1 : 5;
                                        var next = player.chooseTarget('请选择至多' + c + '名角色,视为对这些角色使用一张【杀】.', [1, c], function (card, player, target) {
                                            return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                        });
                                        next.set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, { name: 'sha' }, player, player) > 0;
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            player.useCard({ name: 'sha' }, result.targets, false);
                                        }
                                        player.removeMark('paj_xx_guimou', Infinity);
                                    },
                                },
                                c: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    _priority: -16,
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        'step 0';
                                        x = trigger.num - 1;
                                        ('step 1');
                                        var next = player.chooseControl('回血', '摸牌');
                                        next.set('prompt', '请选择一项');
                                        next.set('prompt2', '回复' + x + '点体力或摸' + x + '张牌');
                                        next.ai = function () {
                                            var player = _status.event.player;
                                            if (player.hp > 2) return '摸牌';
                                            if (player.hp < 3) return '回血';
                                            return '回血';
                                        };
                                        ('step 2');
                                        if (result.control == '回血') {
                                            player.recover(x);
                                            trigger.num = 1;
                                        } else {
                                            player.draw(x);
                                            trigger.num = 1;
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_Tongyan: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                var filter = event.filterCard,
                                    card = get.cardPile((card) => card.name == 'sha'); //QQQ
                                return filter(card ? { name: 'sha' } : { name: 'jg' }, player, event);
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            viewAs(cards, player) {
                                var card = get.cardPile((card) => card.name == 'sha'); //QQQ
                                if (card) return { name: 'sha' };
                                return { name: 'jg' };
                            },
                            filterTarget(card, player, target) {
                                c = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                return lib.filter.targetEnabled(c ? { name: 'sha' } : { name: 'jg' }, player, target);
                            },
                            check(card) {
                                return 9 - get.value(card);
                            },
                            ai: {
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order(item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 13;
                                    if (lib.linked.includes(get.nature(item))) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                            }) &&
                                            game.countPlayer(function (current) {
                                                return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                            }) > 1
                                        )
                                            return 10;
                                        return 10;
                                    }
                                    return get.order({ name: 'sha' }) + 0.1;
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
                            group: ['paj_xx_Tongyan_s', 'paj_xx_Zuzhouzhiyan_x', 'paj_xx_Tongyan_c'],
                            subSkill: {
                                s: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    popup: false,
                                    _priority: 47,
                                    filter(event, player) {
                                        return event.card && event.parent.skill == 'paj_xx_Tongyan';
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                c: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    _priority: 764,
                                    forced: true,
                                    filter(event, player) {
                                        return event.skill == 'paj_xx_Tongyan';
                                    },
                                    popup: false,
                                    content() {
                                        card = get.cardPile(function (card) {
                                            return card.name == 'sha';
                                        });
                                        var stat = player.getStat();
                                        if (card) {
                                            if (stat && stat.card && stat.card.sha) stat.card.sha--;
                                        } else {
                                            if (stat && stat.card && stat.card.jg) stat.card.jg--;
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_Zuzhouzhiyan: {
                            intro: {
                                content: 'limited',
                            },
                            nobracket: true,
                            limited: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.paj_xx_Zuzhouzhiyan;
                            },
                            init(player) {
                                player.storage.paj_xx_Zuzhouzhiyan = false;
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                return true;
                            },
                            mark: true,
                            selectTarget: [0, 3],
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.awakenSkill('paj_xx_Zuzhouzhiyan');
                                player.storage.paj_xx_Zuzhouzhiyan = true;
                                ('step 1');
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].addMark('paj_xx_Zuzhouzhiyan_x');
                                }
                            },
                            ai: {
                                expose: 0.4,
                                order: 4,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                x: {
                                    marktext: '咒',
                                    intro: {
                                        name: '诅咒之眼',
                                        content: 'mark',
                                    },
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    popup: false,
                                    filter(event, player) {
                                        return event.player.hasMark('paj_xx_Zuzhouzhiyan_x');
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.damage();
                                        trigger.player.removeMark('paj_xx_Zuzhouzhiyan_x', Infinity);
                                    },
                                },
                            },
                        },
                        paj_xx_Manwu: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source != undefined && !player.hasSkill('paj_xx_Manwu_c');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                c = trigger.num;
                                var next = player.chooseToDiscard('he', get.prompt('paj_xx_Manwu', trigger.source) + '(可对其造成' + c + '点伤害)');
                                next.set('prompt2', '每轮限1次,当你受到伤害时,你可以弃置一张牌对伤害来源角色造成x点伤害(x为你此次所受伤害值).');
                                next.set('ai', function (card) {
                                    var player = _status.event.player;
                                    var event = _status.event.getTrigger();
                                    if (get.damageEffect(player, event.source) > 0) return 8 - get.value(card);
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.source.damage(c);
                                    player.addTempSkill('paj_xx_Manwu_c', 'roundStart');
                                }
                            },
                            subSkill: {
                                c: {},
                            },
                        },
                        paj_xx_Fengwa: {
                            markimage: 'extension/平安京/image/mark/mx15.jpg',
                            intro: {
                                name: '枫娃',
                                content: 'mark',
                            },
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addMark('paj_xx_Fengwa');
                            },
                            group: 'paj_xx_Fengwa_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasMark('paj_xx_Fengwa') && event.player != player;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        var list = ['掉盾', '弃牌', '掉血'];
                                        if (!trigger.player.storage._paj_xx_hut || trigger.player.storage._paj_xx_hut < 1) list.remove('掉盾');
                                        if (trigger.player.countCards('he') < 1) list.remove('弃牌');
                                        if (list.length == 1) event._result = { control: list[0] };
                                        else {
                                            trigger.player
                                                .chooseControl(list)
                                                .set('ai', function () {
                                                    var tp = trigger.player;
                                                    if (tp.hp > 2 && !tp.hasMark('hut')) return '掉血';
                                                    if (tp.countCards('he') > 3) return '弃牌';
                                                    if (tp.hasMark('hut')) return '掉盾';
                                                    return list.randomGet();
                                                })
                                                .set('prompt', '请选择一项<br>弃牌:弃置两张牌/掉血:失去1点体力/掉盾:失去1点护甲');
                                        }
                                        ('step 1');
                                        if (result.control == '掉血') {
                                            trigger.player.loseHp();
                                        }
                                        if (result.control == '弃牌') {
                                            trigger.player.chooseToDiscard('he', 2, true);
                                        }
                                        if (result.control == '掉盾') {
                                            trigger.player.removeHut();
                                        }
                                    },
                                },
                            },
                        },
                        paj_xx_Ziyan: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hp == 1) {
                                        if (['sha', 'jg'].includes(card.name)) return Infinity;
                                    }
                                },
                            },
                            trigger: {
                                player: 'damageBegin4',
                                source: 'damageBegin2',
                            },
                            filter(event, player, name) {
                                if (player.hp == 1) {
                                    if (name == 'damageBegin2') {
                                        return event.card && event.card.name == 'sha' && event.card;
                                    } else {
                                        return !event.nature;
                                    }
                                }
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                if (event.triggername == 'damageBegin4') {
                                    trigger.cancel();
                                } else if (event.triggername == 'damageBegin2') {
                                    trigger.cancel();
                                    player.discardPlayerCard(trigger.player, 'he');
                                }
                            },
                        },
                        paj_xx_Jianluo: {
                            trigger: {
                                player: 'phaseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return !player.getEquip(5);
                            },
                            content() {
                                player.equip(game.createCard('paj_xx_Fengyexinjian', '', 0));
                            },
                            group: 'paj_xx_Jianluo_x',
                            subSkill: {
                                x: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    prompt: '移动一次【枫叶信笺】',
                                    filter(event, player, cards) {
                                        return game.hasPlayer(function (current) {
                                            return current.getEquip('paj_xx_Fengyexinjian');
                                        });
                                    },
                                    filterTarget(card, player, target) {
                                        if (!ui.selected.targets.length) {
                                            return target.getCards('e', function (card) {
                                                return card.name == 'paj_xx_Fengyexinjian';
                                            }).length;
                                        } else {
                                            return target.isEmpty(5);
                                        }
                                    },
                                    targetprompt: ['被移走', '移动目标'],
                                    selectTarget: 2,
                                    multitarget: true,
                                    content() {
                                        'step 0';
                                        var card = targets[0].getEquip(5);
                                        targets[1].equip(card);
                                        targets[0].$give(card, targets[1]);
                                        ('step 1');
                                        var listn = game.filterPlayer(function (current) {
                                            var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                            return muniun && muniun.cards && muniun.cards.length;
                                        });
                                        if (!listn.length) {
                                            event.finish();
                                            return;
                                        }
                                        if (targets[0] == player) event._result = { bool: true };
                                        else
                                            player.chooseBool('是否令' + get.translation(targets[0]) + '使用叶信笺中的一张牌？').set('ai', function () {
                                                if (get.attitude(_status.event.player, targets[0]) > 0) return 1;
                                                return 0;
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            var list2 = game.filterPlayer(function (current) {
                                                var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                                return muniun && muniun.cards && muniun.cards.length;
                                            });
                                            if (!list2.length) {
                                                event.finish();
                                                return;
                                            }
                                            var dialog = ui.create.dialog('是否使用叶信笺中的一张牌？'),
                                                size = '<span class="text" style="font size:5">';
                                            for (var i = 0; i < list2.length; i++) {
                                                var muniu = list2[i].getEquip('paj_xx_Fengyexinjian');
                                                dialog.add(size + get.translation(list2[i]) + '叶信笺中的牌');
                                                dialog.add(muniu.cards);
                                            }
                                            targets[0]
                                                .chooseButton(dialog)
                                                .set('filterButton', function (button) {
                                                    return targets[0].hasUseTarget(button.link) && lib.filter.filterCard(button.link, targets[0], event.getParent(2));
                                                })
                                                .set('ai', function (button) {
                                                    return targets[0].getUseValue(button.link);
                                                });
                                        } else event.finish();
                                        ('step 3');
                                        if (result.links?.length) {
                                            event.link = result.links[0];
                                            if (lib.filter.filterCard(event.link, targets[0], event.getParent(2))) targets[0].chooseUseTarget(result.links[0], false);
                                            else event.finish();
                                        } else event.finish();
                                        ('step 4');
                                        if (result.bool) {
                                            var card = event.link;
                                            var listx = game.filterPlayer(function (current) {
                                                var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                                return muniun && muniun.cards && muniun.cards.length;
                                            });
                                            if (!listx.length) {
                                                event.finish();
                                                return;
                                            }
                                            for (var i = 0; i < listx.length; i++) {
                                                var muniuz = listx[i].getEquip('paj_xx_Fengyexinjian');
                                                if (muniuz.cards.includes(card)) {
                                                    for (var j = 0; j < muniuz.cards.length; j++) {
                                                        if (muniuz.cards[j] == card) {
                                                            muniuz.cards.remove(card);
                                                            listx[i].update();
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target(player, target) {
                                                var num = 0;
                                                if (!ui.selected.targets.length) {
                                                    if (get.attitude(player, target) > 0) {
                                                        var list = game.filterPlayer(function (current) {
                                                            var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                                            return muniun && muniun.cards && muniun.cards.length;
                                                        });
                                                        var cards = [];
                                                        for (var i = 0; i < list.length; i++) {
                                                            cards.add(list[i].getEquip('paj_xx_Fengyexinjian').cards);
                                                        }
                                                        for (var i = 0; i < cards.length; i++) {
                                                            var name = cards[i];
                                                            if (name.name == 'sha' && target.hasUseTarget(name)) {
                                                                return 0.8;
                                                            } else if (name.name == 'tao' && target.hasUseTarget(name) && target.hp <= 2) {
                                                                return 1;
                                                            } else if (target.hasUseTarget(name)) {
                                                                return 0.6;
                                                            }
                                                        }
                                                    } else return -1;
                                                } else if (get.attitude(player, target) > 0) {
                                                    if (!target.getEquip('paj_xx_Fengyexinjian') || !target.getEquip('paj_xx_Fengyexinjian').cards || !target.getEquip('paj_xx_Fengyexinjian').cards.length) {
                                                        return 1;
                                                    }
                                                } else return 0;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        paj_xx_Ningshen: {
                            shaRelated: true,
                            usable: 1,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0 && event.target.countCards('he');
                            },
                            filter(event, player) {
                                return ['sha', 'jg'].includes(event.card.name) && player.isPhaseUsing();
                            },
                            logTarget: 'target',
                            content() {
                                player.discardPlayerCard(trigger.target, 'he');
                            },
                        },
                        paj_xx_Lishang: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hp <= 0 && !player.hasSkill('paj_xx_Lishang_y');
                            },
                            content() {
                                'step 0';
                                var num = 1 - player.hp;
                                if (num > 0) player.recover(num);
                                player.addTempSkill('paj_xx_Lishang_y', 'roundStart');
                                player.chooseTarget('选择一名角色,视为对其使用一张「杀」', function (card, target, player) {
                                    return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'sha' }, _status.event.player, _status.event.player) > 0;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'sha' }, result.targets[0]).card.paj_xx_Lishang = true;
                                }
                            },
                            group: 'paj_xx_Lishang_x',
                            subSkill: {
                                x: {
                                    popup: false,
                                    trigger: {
                                        source: 'damageAfter',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.paj_xx_Lishang;
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                    },
                                },
                                y: {},
                            },
                        },
                        paj_xx_Tongxin: {
                            popup: false,
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && ['sha', 'jg'].includes(event.card.name) && player.storage.chujish == true;
                            },
                            content() {
                                trigger.num++;
                                player.storage.chujish = false;
                                player.removeSkill('chuji_mas');
                            },
                        },
                        paj_xx_Chuixue: {
                            nobracket: true,
                            audio: 'ext:平安京:2',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectCard() {
                                if (ui.selected.targets.length) {
                                    var num = ui.selected.targets[0].getDamagedHp() < 1 ? 1 : ui.selected.targets[0].getDamagedHp();
                                    return num;
                                } else {
                                    return 0;
                                }
                            },
                            complexSelect: true,
                            complexCard: true,
                            complexTarget: true,
                            content() {
                                'step 0';
                                var c = target.getDamagedHp() < 1 ? 1 : target.getDamagedHp();
                                target
                                    .chooseToDiscard('he', c)
                                    .set('ai', function (card) {
                                        if (_status.event.player.isTurnedOver()) return -1;
                                        return 8 - get.value(card);
                                    })
                                    .set('prompt', '弃置' + c + '张牌,或将武将牌翻面并摸' + c + '');
                                event.c = c;
                                ('step 1');
                                if (!result.bool) {
                                    target.turnOver();
                                    target.draw(event.c);
                                }
                            },
                            ai: {
                                order: 2,
                                result: {
                                    target: -1,
                                },
                                threaten: 1.5,
                                expose: 0.3,
                            },
                        },
                        paj_xx_Fengyexinjian_skill: {
                            equipSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard() {
                                return [1, _status.event.player.hp];
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (card.name == 'du') return 20;
                                var nh = player.countCards('h');
                                if (!player.needsToDiscard()) {
                                    if (nh < 3) return 0;
                                    if (nh == 3) return 5 - get.value(card);
                                    return 7 - get.value(card);
                                }
                                return 10 - get.useful(card);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            sync(muniu) {
                                if (game.online) {
                                    return;
                                }
                                if (!muniu.cards) {
                                    muniu.cards = [];
                                }
                                for (var i = 0; i < muniu.cards.length; i++) {
                                    if (get.position(muniu.cards[i]) != 's') {
                                        muniu.cards.splice(i--, 1);
                                    }
                                }
                                game.broadcast(
                                    function (muniu, cards) {
                                        muniu.cards = cards;
                                    },
                                    muniu,
                                    muniu.cards
                                );
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            prepare(cards, player) {
                                player.$give(cards.length, player, false);
                            },
                            content() {
                                'step 0';
                                player.lose(cards, ui.special);
                                var muniu = player.getEquip('paj_xx_Fengyexinjian');
                                if (!muniu || !cards.length) {
                                    for (var i = 0; i < cards.length; i++) {
                                        cards[i].discard();
                                    }
                                    event.finish();
                                    return;
                                }
                                if (muniu.cards == undefined) muniu.cards = [];
                                for (var i = 0; i < cards.length; i++) {
                                    muniu.cards.push(cards[i]);
                                    player.update();
                                }
                                game.broadcast(
                                    function (muniu, cards) {
                                        muniu.cards = cards;
                                    },
                                    muniu,
                                    muniu.cards
                                );
                                ('step 1');
                                var next = player.chooseTarget('是否移动叶信笺？', function (card, player, target) {
                                    return !target.isMin() && target == player.next && target.isEmpty(5);
                                });
                                next.set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 2');
                                if (result.bool) {
                                    var card = player.getEquip(5);
                                    var target = result.targets[0];
                                    target.equip(card);
                                    player.$give(card, target);
                                    player.line(result.targets, 'green');
                                    var list = game.filterPlayer(function (current) {
                                        return current.hasSkill('paj_xx_Jianluo');
                                    });
                                    if (!list.includes(player)) {
                                        event.finish();
                                        return;
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                var list2 = game.filterPlayer(function (current) {
                                    var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                    return muniun && muniun.cards && muniun.cards.length;
                                });
                                if (!list2.length) {
                                    event.finish();
                                    return;
                                }
                                var dialog = ui.create.dialog('是否使用叶信笺中的一张牌？'),
                                    size = '<span class="text" style="font size:5">';
                                for (var i = 0; i < list2.length; i++) {
                                    var muniux = list2[i].getEquip('paj_xx_Fengyexinjian');
                                    dialog.add(size + get.translation(list2[i]) + '叶信笺中的牌');
                                    dialog.add(muniux.cards);
                                }
                                var next = player.chooseButton(dialog);
                                next.set('filterButton', function (button) {
                                    return player.hasUseTarget(button.link) && lib.filter.filterCard(button.link, player, event.getParent(2));
                                });
                                next.set('ai', function (button) {
                                    return player.getUseValue(button.link);
                                });
                                ('step 4');
                                if (result.links?.length) {
                                    event.link = result.links[0];
                                    if (lib.filter.filterCard(event.link, player, event.getParent(2))) player.chooseUseTarget(result.links[0], false);
                                    else event.finish();
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    var card = event.link;
                                    var listx = game.filterPlayer(function (current) {
                                        var muniun = current.getEquip('paj_xx_Fengyexinjian');
                                        return muniun && muniun.cards && muniun.cards.length;
                                    });
                                    if (!listx.length) {
                                        event.finish();
                                        return;
                                    }
                                    for (var i = 0; i < listx.length; i++) {
                                        var muniuxx = listx[i].getEquip('paj_xx_Fengyexinjian');
                                        if (muniuxx.cards.includes(card)) {
                                            for (var j = 0; j < muniuxx.cards.length; j++) {
                                                if (muniuxx.cards[j] == card) {
                                                    muniuxx.cards.remove(card);
                                                    listx[i].update();
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var muniu = player.getEquip('paj_xx_Fengyexinjian');
                                    if (!muniu || !muniu.cards || !muniu.cards.length) return '共有〇张牌';
                                    if (player.isUnderControl(true)) {
                                        return get.translation(muniu.cards);
                                    } else {
                                        return '共有' + get.cnNumber(muniu.length) + '张牌';
                                    }
                                },
                                mark(dialog, storage, player) {
                                    var muniu = player.getEquip('paj_xx_Fengyexinjian');
                                    if (!muniu || !muniu.cards || !muniu.cards.length) return '共有〇张牌';
                                    if (player.isUnderControl(true)) {
                                        dialog.addAuto(muniu.cards);
                                    } else {
                                        return '共有' + get.cnNumber(muniu.cards.length) + '张牌';
                                    }
                                },
                                markcount(storage, player) {
                                    var muniu = player.getEquip('paj_xx_Fengyexinjian');
                                    if (muniu && muniu.cards && muniu.cards.length) return muniu.cards.length;
                                    return 0;
                                },
                            },
                        },
                        paj_xx_Mingyue: {
                            markimage: 'extension/平安京/image/mark/mx11.jpg',
                            intro: {
                                name: '明月',
                                name2: '月之力',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                source: 'damageEnd',
                            },
                            filter(event, player, name) {
                                if (name == 'damageEnd') {
                                    return event.player != player;
                                } else return true;
                            },
                            forced: true,
                            content() {
                                player.addMark('paj_xx_Mingyue');
                            },
                        },
                        paj_xx_Tianchong: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            viewAs(cards, player) {
                                var card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) return { name: 'sha' };
                                return { name: 'jg' };
                            },
                            selectTarget() {
                                var card = ui.selected.cards[0];
                                if (get.type(card) == 'basic') return [1, 2];
                                return [1, 1];
                            },
                            complexTarget: true,
                            precontent() {
                                player.draw();
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            check(card) {
                                if (get.type(card) == 'basic') return 10;
                                return 9 - get.value(card);
                            },
                            ai: {
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
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
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
                            group: 'paj_xx_Tianchong_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: 47,
                                    filter(event, player, name) {
                                        return event.skill == 'paj_xx_Tianchong';
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        if (get.type(trigger.cards[0]) == 'trick') {
                                            trigger.directHit.addArray(game.players);
                                        }
                                        if (get.type(trigger.cards[0]) == 'equip') {
                                            trigger.baseDamage++;
                                        }
                                    },
                                    ai: {
                                        directHit_ai: true,
                                    },
                                    popup: false,
                                },
                            },
                        },
                        paj_xx_Yueya: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card, player) {
                                return get.color(card) == 'black';
                            },
                            position: 'hes',
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                            },
                            viewAs(cards, player) {
                                card = get.cardPile(function (card) {
                                    return card.name == 'sha';
                                });
                                if (card) return { name: 'sha' };
                                return { name: 'jg' };
                            },
                            multiline: true,
                            precontent() {
                                player.draw();
                            },
                            viewAsFilter(player) {
                                if (!player.countCards('hes', { color: 'black' })) return false;
                            },
                            check(card) {
                                if (get.type(card) != 'basic') return 10;
                                return 9 - get.value(card);
                            },
                        },
                        paj_xx_Xxjie: {
                            mark: true,
                            derivation: ['paj_xx_Xuhua', 'paj_xx_Wuyue', 'paj_xx_Tianchong'],
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_Xxjie = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Xxjie) return false;
                                return true;
                            },
                            trigger: {
                                player: ['phaseBegin', 'dying'],
                            },
                            check() {
                                var player = _status.event.player;
                                if (
                                    player.hp < 3 ||
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) > 0 && current.hp < 3;
                                    })
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.skills[i]) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.gainMaxHp();
                                player.awakenSkill('paj_xx_Xxjie');
                                player.storage.paj_xx_Xxjie = true;
                                player.removeSkill([skills]);
                                ('step 1');
                                player.addSkill(['paj_xx_Tianchong', 'paj_xx_Wuyue', 'paj_xx_Xuhua']);
                                player.recover(3);
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_xx_Wuyue: {
                            audio: 'ext:平安京:2',
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_Wuyue = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Wuyue) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                var num = player.countCards('ej');
                                player.awakenSkill('paj_xx_Wuyue');
                                player.storage.paj_xx_Wuyue = true;
                                player.discard(player.getCards('ej'));
                                player.disableEquip('equip1');
                                player.disableEquip('equip2');
                                player.disableEquip('equip3');
                                player.disableEquip('equip4');
                                player.disableEquip('equip5');
                                player.discardPlayerCard(target, 'he', num, true);
                                target.damage();
                            },
                            ai: {
                                order: 13,
                                result: {
                                    player(player, target) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && current.hp < 3 && current.countCards('he') == player.countCards('ej');
                                            })
                                        )
                                            return 1;
                                        return 0;
                                    },
                                    target: -1,
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_xx_Xuhua: {
                            audio: 'ext:平安京:2',
                            juexingji: true,
                            derivation: ['paj_xx_Jiusuo', 'paj_xx_Xushan', 'paj_xx_Shien'],
                            forced: true,
                            init(player) {
                                player.storage.paj_xx_Xuhua = false;
                            },
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Xuhua || event.parent.name != 'damage' || get.itemtype(event.parent.cards) != 'cards' || event.parent.cards[0].suit != 'spade') return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (get.skills[i]) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.gainMaxHp();
                                player.awakenSkill('paj_xx_Xuhua');
                                player.storage.paj_xx_Xuhua = true;
                                player.removeSkill([skills]);
                                ('step 1');
                                player.addSkill(['paj_xx_Jiusuo', 'paj_xx_Shien', 'paj_xx_Xushan']);
                                player.hp = player.maxHp;
                            },
                        },
                        paj_xx_Jiusuo: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.target.isLinked() && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                trigger.target.link();
                            },
                        },
                        paj_xx_Xushan: {
                            usable: 1,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.targets && event.targets.length && get.color(event.card) == 'black';
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.loseHp();
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                                ('step 1');
                                for (var i of game.players) {
                                    //QQ
                                    if (player.canUse({ name: 'sha' }, i, false) && i != player) player.useCard({ name: 'sha' }, i, false);
                                }
                            },
                        },
                        paj_xx_Shien: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h', function (card) {
                                    return ['shan', 'tao', 'jiu'].includes(card.name);
                                });
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                ('step 1');
                                event.cards = player.getCards('h', function (card) {
                                    return ['shan', 'tao', 'jiu'].includes(card.name);
                                });
                                player.discard(event.cards);
                                player.draw(event.cards.length);
                            },
                        },
                        paj_xx_Zhuyue: {
                            derivation: ['paj_xx_Xianyue', 'paj_xx_Yaoyue'],
                            trigger: {
                                player: 'paj_xx_MingyueAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countMark('paj_xx_Mingyue') >= 4 && (!player.hasSkill('paj_xx_Xianyue') || !player.hasSkill('paj_xx_Yaoyue'));
                            },
                            popup: false,
                            content() {
                                'step 0';
                                var next = player.chooseBool('是否发动【逐月】？');
                                next.set('prompt2', '弃置所有<月之力>标记,获得技能【邀月】和【弦月】.');
                                next.ai = function () {
                                    var player = _status.event.player;
                                    if (!player.hasSkill('paj_xx_Xianyue') || !player.hasSkill('paj_xx_Yaoyue')) return 1;
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('paj_xx_Mingyue', player.countMark('paj_xx_Mingyue'));
                                    player.addSkill(['paj_xx_Yaoyue', 'paj_xx_Xianyue']);
                                }
                            },
                        },
                        paj_xx_Xianyue: {
                            group: 'hut',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.countPlayer(function (current) {
                                    return current != player && current.hasMark('paj_xx_Yaoyue');
                                });
                            },
                            filterTarget(card, player, target) {
                                return target.hasMark('paj_xx_Yaoyue');
                            },
                            complexTarget: true,
                            selectTarget: [2, Infinity],
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.num1 = 0;
                                ('step 1');
                                event.num = targets[0].countMark('paj_xx_Yaoyue');
                                targets[0].removeMark('paj_xx_Yaoyue', event.num);
                                var choiceList = ['令' + get.translation(player) + '获得' + event.num + '点护甲', '使自己翻面'];
                                if (targets[0].countCards('he') >= event.num) choiceList.push('弃置' + event.num + '张牌并失去1点体力');
                                var next = targets[0].chooseControl();
                                next.set('choiceList', choiceList);
                                next.set('ai', function () {
                                    return 0;
                                });
                                ('step 2');
                                if (result.index == 0) {
                                    player.hujia += event.num;
                                } else if (result.index == 1) {
                                    targets[0].turnOver();
                                } else {
                                    targets[0].chooseToDiscard('he', event.num, true);
                                    targets[0].loseHp();
                                }
                                targets.remove(targets[0]);
                                if (targets.length) {
                                    event.goto(1);
                                }
                            },
                        },
                        paj_xx_Yaoyue: {
                            markimage: 'extension/平安京/image/mark/mx13.jpg',
                            intro: {
                                name: '潮汐',
                                name2: '潮汐',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'black') return 1;
                                    return 0;
                                });
                                ('step 1');
                                if (result.color) {
                                    if (result.color == 'black') {
                                        player
                                            .chooseTarget('选择一名攻击范围内的角色,对其造成一点冰属性伤害', function (card, player, target) {
                                                return player.inRange(target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.damageEffect(target, player, player, 'ice');
                                            });
                                    } else event.finish();
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'ice');
                                    result.targets[0].damage('ice');
                                    result.targets[0].addMark('paj_xx_Yaoyue');
                                }
                            },
                        },
                        paj_xx_Siwangzhihua: {
                            enable: 'phaseUse',
                            usable: 1,
                            nobracket: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            position: 'hes',
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].damage('nocard');
                                }
                                if (targets[0].hasMark('paj_xx_Huafu')) {
                                    player
                                        .chooseTarget('选择一名与' + get.translation(targets[0]) + '距离为一的角色,对其造成一点伤害', function (card, player, target) {
                                            return get.distance(target, targets[0]) <= 1 && target != targets[0];
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                                player.addHut();
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target) {
                                        if (target.hasMark('paj_xx_Huafu') && get.damageEffect(target, player)) return -1.5;
                                        else if (get.damageEffect(target, player)) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        paj_xx_Huafu: {
                            markimage: 'extension/平安京/image/mark/mx14.jpg',
                            intro: {
                                name: '花符',
                                name2: '花符',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterTarget(card, player, target) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hasMark('paj_xx_Huafu');
                                            })
                                        ) {
                                            if (!ui.selected.targets.length) {
                                                return target.hasMark('paj_xx_Huafu');
                                            } else return !target.hasMark('paj_xx_Huafu');
                                        }
                                        return player != target;
                                    },
                                    filterCard: true,
                                    complexTarget: true,
                                    selectTarget() {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hasMark('paj_xx_Huafu');
                                            })
                                        )
                                            return [2, 2];
                                        return [1, 1];
                                    },
                                    position: 'he',
                                    targetprompt(target) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hasMark('paj_xx_Huafu');
                                            })
                                        ) {
                                            if (target.hasMark('paj_xx_Huafu')) return '被移走';
                                            else return '移动目标';
                                        } else return '';
                                    },
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.hasMark('paj_xx_Huafu');
                                            })
                                        ) {
                                            if (ui.selected.targets.length) {
                                                for (var i of game.players) {
                                                    //QQ
                                                    if (i != player && get.distance(target, i) <= 1 && att < 0 && player.inRange(target)) {
                                                        return 1;
                                                    }
                                                }
                                            } else {
                                                for (var i of game.players) {
                                                    //QQ
                                                    if (i != player && get.distance(target, i) > 1 && att < 0 && player.inRange(target)) {
                                                        if (target.hasMark('paj_xx_Huafu')) return 1;
                                                    }
                                                }
                                            }
                                        }
                                        var c = [];
                                        for (var i of game.players) {
                                            //QQ
                                            if (i != player && get.distance(target, i) <= 1 && att < 0 && player.inRange(target)) {
                                                c.push(i);
                                            }
                                        }
                                        return 0.5 * c.length;
                                    },
                                    prompt: get.prompt2('paj_xx_Huafu'),
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards);
                                    if (result.targets.length == 1) {
                                        result.targets[0].addMark('paj_xx_Huafu');
                                    } else if (result.targets.length == 2) {
                                        if (result.targets[0].hasMark('paj_xx_Huafu')) {
                                            player.line(result.targets[0]);
                                            result.targets[0].line(result.targets[1]);
                                            result.targets[0].removeMark('paj_xx_Huafu');
                                            result.targets[1].addMark('paj_xx_Huafu');
                                        }
                                    }
                                }
                            },
                        },
                        paj_xx_Huangquanhuajing: {
                            marktext: '魂',
                            intro: {
                                name: '黄泉花镜',
                                name2: '花魂',
                                content: 'mark',
                            },
                            nobracket: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player.countMark('paj_xx_Huangquanhuajing') >= game.players.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var next = player.chooseTarget(get.prompt2('paj_xx_Huangquanhuajing'), [1, Infinity]);
                                next.set('ai', function (target) {
                                    return -get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (event.target[0].countCards('he') < 1) event._result = { bool: false };
                                else
                                    event.target[0].chooseToDiscard('弃置一张手牌或点击取消受到一点伤害').set('ai', function (card) {
                                        return 7 - get.value(card);
                                    });
                                ('step 3');
                                if (!result.cards || !result.cards.length) {
                                    event.target[0].damage();
                                }
                                event.target.remove(event.target[0]);
                                if (event.target.length) event.goto(2);
                            },
                            group: 'paj_xx_Huangquanhuajing_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.parent.name == 'paj_xx_Siwangzhihua';
                                    },
                                    content() {
                                        player.addMark('paj_xx_Huangquanhuajing');
                                    },
                                    popup: false,
                                },
                            },
                        },
                        paj_xx_Yuebai: {
                            mark: true,
                            marktext: '月',
                            intro: {
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true)) {
                                        if (!player.storage.paj_xx_Yuebai || player.storage.paj_xx_Yuebai == undefined) dialog.addText('当前没有卡牌');
                                        else {
                                            dialog.add([content]);
                                        }
                                    } else dialog.addText('李在看肾么');
                                },
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage = undefined;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt2('paj_xx_Yuebai')).set('ai', function (card) {
                                    return 7 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.paj_xx_Yuebai = result.cards[0];
                                    player.draw('nodelay');
                                }
                            },
                            group: 'paj_xx_Yuebai_x',
                            subSkill: {
                                x: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseAfter',
                                        global: 'useCard',
                                    },
                                    filter(event, player, name) {
                                        if (name == 'phaseAfter') {
                                            return player.storage.paj_xx_Yuebai && player.storage.paj_xx_Yuebai != undefined;
                                        } else {
                                            if (player.storage.paj_xx_Yuebai && player.storage.paj_xx_Yuebai != undefined) {
                                                var color = [];
                                                if (Array.isArray(event.cards))
                                                    for (var i of event.cards) {
                                                        //QQ
                                                        if (!color.includes(get.color(i))) color.push(get.color(i));
                                                    }
                                                if (color.length == 1 && color[0] == get.color(player.storage.paj_xx_Yuebai) && event.player != player) return true;
                                            }
                                            return false;
                                        }
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        if (event.triggername == 'phaseAfter') {
                                            player.$throw(player.storage.paj_xx_Yuebai, 1000);
                                            game.cardsDiscard(player.storage.paj_xx_Yuebai);
                                            game.log(player.storage.paj_xx_Yuebai, '被置入了弃牌堆');
                                            player.storage.paj_xx_Yuebai = undefined;
                                        } else {
                                            player.discardPlayerCard(trigger.player, 'he', true);
                                            player.$throw(player.storage.paj_xx_Yuebai, 1000);
                                            game.cardsDiscard(player.storage.paj_xx_Yuebai);
                                            game.log(player.storage.paj_xx_Yuebai, '被置入了弃牌堆');
                                            player.storage.paj_xx_Yuebai = undefined;
                                        }
                                    },
                                    forced: true,
                                },
                            },
                        },
                        paj_xx_Bailian: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' }) > 0;
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            selectCard: [1, Infinity],
                            line: 'gray',
                            position: 'hs',
                            selectTarget() {
                                var length = ui.selected.cards.length;
                                return [length, length];
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') && player.inRange(target);
                            },
                            complexSelect: true,
                            complexCard: true,
                            complexTarget: true,
                            multitarget: true,
                            multiline: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (targets[0]) var next = targets[0].chooseToUse('请使用一张♦️️闪,否则您将被弃置两张牌');
                                next.set('filterCard', function (card, player) {
                                    if (card.name != 'shan' || card.suit != 'diamond') return false;
                                    return lib.filter.cardEnabled(card, player, 'forceEnable');
                                });
                                next.autochoose = lib.filter.autoUseShan;
                                ('step 1');
                                if (result.bool == false) {
                                    player.discardPlayerCard(targets[0], 'he', 2, true);
                                }
                                targets.remove(targets[0]);
                                if (targets.length) event.goto(0);
                            },
                            ai: {
                                order: 13,
                                expose: 0.2,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        paj_xx_Bairen: {
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_Bairen = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Bairen) return false;
                                return true;
                            },
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                player.storage.paj_xx_Bairen = true;
                                player.awakenSkill('paj_xx_Bairen');
                                var num = 1 - player.hp;
                                if (num > 0) player.recover(num);
                                var card = get.cardPile(function (card) {
                                    return get.subtype(card) == 'equip1';
                                });
                                player.gain(card, 'gain2', 'log');
                                if (trigger.source) {
                                    trigger.source.damage();
                                }
                                game.updateRoundNumber();
                            },
                            logTarget: 'source',
                            intro: {
                                content: 'limited',
                            },
                        },
                        sp_paj_xx_Pmzj: {
                            enable: 'phaseUse',
                            nobracket: true,
                            usable: 1,
                            filterTarget(card, player, target) {
                                return lib.filter.targetEnabled({ name: 'sha', nature: 'thunder' }, player, target);
                            },
                            content() {
                                player.useCard({ name: 'sha', nature: 'thunder' }, target, false);
                            },
                            ai: {
                                order(item, player) {
                                    if (!player.storage.sp_llqh.includes('1') && player.countCards('h') >= player.hp) return 100;
                                    return get.order({ name: 'sha', nature: 'thunder' }) + 0.1;
                                },
                                result: {
                                    target(player, target, card) {
                                        return get.effect(target, { name: 'sha', nature: 'thunder' }, player, target);
                                    },
                                },
                            },
                            group: 'sp_paj_xx_Pmzj_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.source == player && event.getParent(3).name == 'sp_paj_xx_Pmzj';
                                    },
                                    content() {
                                        trigger.player.addTempSkill('fengyin');
                                    },
                                },
                            },
                        },
                        sp_paj_xx_Llqh: {
                            init(player) {
                                player.storage.sp_llqh = [['sp_shc'], ['sp_wnjj'], ['sp_sha']];
                            },
                            nobracket: true,
                            trigger: {
                                global: 'die',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.sp_llqh[0] == true && player.storage.sp_llqh[1] == true && player.storage.sp_llqh[2] == true) {
                                    player.draw(3);
                                    event.finish();
                                    return;
                                }
                                event.list = [player.storage.sp_llqh[0] != true, player.storage.sp_llqh[1] != true, player.storage.sp_llqh[2] != true];
                                event.videoId = lib.status.videoId++;
                                var func = function (id, bool) {
                                    var list = ['去除死魂虫中手牌不小于体力值的限制', '重置巫女结界的使用次数,并增加:翻面的角色失去1点体力', '你使用虚拟和转化的【杀】不可闪避'];
                                    var choiceList = ui.create.dialog('〖灵力强化〗:请选择一种效果', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (!bool[i]) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool[i]) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                event.dialog1 = func(event.videoId, event.list);
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', 1);
                                next.set('filterButton', function (button) {
                                    return event.list[button.link];
                                });
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    if (player.awakenedSkills.includes('sp_paj_xx_Wnjj')) return button.link * 2 + Math.random();
                                    return Math.random();
                                });
                                ('step 1');
                                event.dialog1.close();
                                event.link = result.links[0];
                                switch (event.link) {
                                    case 0:
                                        player.storage.sp_llqh.push('1');
                                        player.storage.sp_llqh[0] = true;
                                        break;
                                    case 1:
                                        player.storage.sp_llqh.push('2');
                                        player.storage.sp_llqh[1] = true;
                                        player.restoreSkill('sp_paj_xx_Wnjj');
                                        break;
                                    case 2:
                                        player.storage.sp_llqh[2] = true;
                                        break;
                                }
                            },
                            group: 'sp_paj_xx_Llqh_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.card || event.card.name != 'sha') return false;
                                        if (!event.card.isCard) {
                                            if (player.storage.sp_llqh[2] != true) return false;
                                        } else {
                                            if (get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o') return;
                                            else return true;
                                        }
                                        return true;
                                    },
                                    silent: true,
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                    },
                                    ai: {
                                        directHit_ai: true,
                                    },
                                },
                            },
                        },
                        sp_paj_xx_Shc: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.name == 'sha' && !player.storage.sp_llqh.includes('1') && player.countCards('h') >= player.hp - 1) return num + 7;
                                },
                            },
                            trigger: {
                                source: 'damageBegin2',
                            },
                            nobracket: true,
                            filter(event, player) {
                                return (player.countCards('h') >= player.hp || player.storage.sp_llqh.includes('1')) && event.card && event.card.name == 'sha';
                            }, //QQQ
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        sp_paj_xx_Wnjj: {
                            nobracket: true,
                            enable: 'phaseUse',
                            limited: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length) return get.color(card) == get.color(ui.selected.cards[0]);
                                return true;
                            },
                            position: 'hes',
                            selectCard: [1, Infinity],
                            line: 'thunder',
                            selectTarget() {
                                var length = ui.selected.cards.length;
                                return [length, length];
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            complexSelect: true,
                            complexCard: true,
                            complexTarget: true,
                            multitarget: true,
                            multiline: true,
                            content() {
                                for (var i = 0; i < targets.length; i++) {
                                    targets[i].turnOver();
                                    if (player.storage.sp_llqh.includes('2')) targets[i].loseHp();
                                }
                                player.awakenSkill('sp_paj_xx_Wnjj');
                            },
                            ai: {
                                order: 8,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            if (target.isTurnedOver()) return 1;
                                            return 0;
                                        } else {
                                            if (!target.isTurnedOver()) return -1;
                                            return 0;
                                        }
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        paj_xx_Xiechang: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            check() {
                                var player = _status.event.player;
                                if (
                                    game.hasPlayer(function (current) {
                                        return get.attitude(player, current) < 0 && player.inRange(current);
                                    })
                                )
                                    return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var suit = ['heart'];
                                var list = [];
                                for (var i of lib.suit) {
                                    if (i != 'heart') list.push(i);
                                }
                                list.sort(function (a, b) {
                                    var gro = function (name) {
                                        if (name == 'diamond') return 0;
                                        if (name == 'spade') return 1;
                                        return 2;
                                    };
                                    var del = gro(a) - gro(b);
                                    if (del != 0) return del;
                                    var aa = a,
                                        bb = b;
                                    if (a.includes('_')) {
                                        a = a.slice(a.indexOf('_') + 1);
                                    }
                                    if (b.includes('_')) {
                                        b = b.slice(b.indexOf('_') + 1);
                                    }
                                    if (a != b) {
                                        return a > b ? 1 : -1;
                                    }
                                    return aa > bb ? 1 : -1;
                                });
                                for (var i = 0; i < player.getDamagedHp(); i++) {
                                    suit.push(list[i]);
                                }
                                player.judge(function (card) {
                                    if (suit.includes(card.suit)) return 1;
                                    return 0;
                                });
                                event.suit = suit;
                                ('step 1');
                                if (event.suit.includes(result.suit)) {
                                    player
                                        .chooseTarget('选择一名攻击范围内的角色,对其造成一点伤害', true, function (card, player, target) {
                                            return player.inRange(target);
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player, 'ice');
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    result.targets[0].damage();
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (!get.tag(card, 'damage')) {
                                            if (get.attitude(player, target) > 0) return 0.7 * target.getDamagedHp();
                                        }
                                        return 0.6 / target.getDamagedHp();
                                    },
                                },
                            },
                        },
                        paj_xx_Jichao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player && target.countDiscardableCards(player, 'he') > 0;
                            },
                            selectTarget() {
                                return [1, _status.event.player.hp];
                            },
                            complexSelect: true,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                for (var i = 0; i < targets.length; i++) {
                                    player.discardPlayerCard(targets[i], 'he', true);
                                }
                                ('step 1');
                                targets[0].chooseToUse({
                                    preTarget: player,
                                    prompt: '是否对' + get.translation(player) + '使用一张【杀】？',
                                    filterCard(card, player) {
                                        return ['sha', 'jg'].includes(card.name) && lib.filter.filterCard.apply(this, arguments);
                                    },
                                    filterTarget(card, player, target) {
                                        return target == _status.event.preTarget && lib.filter.targetEnabled.apply(this, arguments);
                                    },
                                    addCount: false,
                                });
                                ('step 2');
                                targets.remove(targets[0]);
                                if (targets.length) event.goto(1);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target, card) {
                                        if (
                                            game.countPlayer(function (current) {
                                                return get.attitude(player, current) < 0 && player.inRange(current) && current.countDiscardableCards(player, 'he') > 0;
                                            }) < 1 ||
                                            player.hp <= 1
                                        )
                                            return -1;
                                        return 1;
                                    },
                                    target: -1,
                                },
                            },
                        },
                        paj_xx_Zhunming: {
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_Zhunming = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Zhunming) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.storage.paj_xx_Zhunming = true;
                                player.awakenSkill('paj_xx_Zhunming');
                                if (
                                    !target.getCards('h', function (card) {
                                        return lib.filter.targetEnabled2(card, target, player) && get.type(card) != 'equip';
                                    }).length
                                ) {
                                    event.finish();
                                    return;
                                }
                                var dialog = ui.create.dialog('【追命】:请选择要令' + get.translation(target) + '对你使用的牌(请按顺序选择)'),
                                    size = '<span class="text" style="font size:5">';
                                if (
                                    target.getCards('h', function (card) {
                                        return lib.filter.targetEnabled2(card, target, player) && get.type(card) != 'equip';
                                    }).length
                                ) {
                                    dialog.add(size + get.translation(target) + '的手牌');
                                    dialog.add(target.getCards('h'));
                                }
                                var next = player.chooseButton(
                                    dialog,
                                    target.getCards('h', function (card) {
                                        return lib.filter.targetEnabled2(card, target, player) && get.type(card) != 'equip';
                                    }).length,
                                    true
                                );
                                next.set('filterButton', function (button) {
                                    return lib.filter.targetEnabled2(button.link, target, player) && get.type(button.link) != 'equip';
                                });
                                next.ai = function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    return get.effect(player, button.link, target, target) > 0;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    for (var i of result.links) {
                                        target.useCard(result.links[i], player);
                                    }
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: -1,
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_xx_Yuefeng: {
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && get.distance(player, event.player) > 1 && get.distance(player, event.player) <= 3;
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        paj_xx_Longhua: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                player.discardPlayerCard(target, 'he', true);
                                player.draw('nodelay');
                                target.draw('nodelay');
                                target.storage.paj_xx_Longhua = player;
                                target.addTempSkill('paj_xx_Longhua_x');
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -1,
                                },
                            },
                            subSkill: {
                                x: {
                                    mod: {
                                        globalTo(from, to, distance) {
                                            if (from == to.storage.paj_xx_Longhua) return distance + 1;
                                        },
                                    },
                                },
                            },
                        },
                        paj_xx_Guibing: {
                            marktext: '卒',
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage = undefined;
                                    }
                                },
                            },
                            init(player) {
                                if (!player.storage.paj_xx_Guibing) player.storage.paj_xx_Guibing = [];
                            },
                            trigger: {
                                player: ['phaseBegin', 'phaseDrawBegin2'],
                            },
                            filter(event, player, name) {
                                if (name == 'phaseDrawBegin2') {
                                    return player.storage.paj_xx_Guibing.length >= 4;
                                } else {
                                    return (
                                        player.countCards('hs', function (card) {
                                            return card.name == 'sha';
                                        }) > 0
                                    );
                                }
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseDrawBegin2') {
                                    event.goto(3);
                                }
                                ('step 1');
                                player
                                    .chooseCard(get.prompt2('鬼兵'), 'hs', function (card) {
                                        return card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        return 7 - get.value(card);
                                    })
                                    .set('prompt2', '回合开始时,你可将一张【杀】置于武将牌上,称之为【卒】并摸两张牌.');
                                ('step 2');
                                if (result.cards?.length) {
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.paj_xx_Guibing = player.storage.paj_xx_Guibing.concat(result.cards);
                                    player.markSkill('paj_xx_Guibing');
                                    player.draw(2, 'nodelay');
                                    event.finish();
                                } else if (event.triggername == 'phaseDrawBegin2') event.finish();
                                ('step 3');
                                var next = player.chooseBool('是否发动【鬼兵】？');
                                next.set('prompt2', '摸牌阶段开始时,若【卒】的数量不小于4,则你可失去此技能并选择获得以下效果之一: ①:本回合的出牌阶段你攻击距离与使用【杀】的次数+1,你的【杀】无视防具. ②:回复1点体力并将手牌摸至体力上限数.');
                                next.set('ai', function () {
                                    var player = _status.event.player;
                                    if (
                                        player.maxHp - player.countCards('h') < 5 ||
                                        player.countCards('hs', function (card) {
                                            return card.name == 'sha';
                                        }) < 2
                                    )
                                        return 0;
                                    return 1;
                                });
                                ('step 4');
                                if (result.bool) {
                                    var x = player.maxHp - player.countCards('h');
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['本回合的出牌阶段你攻击距离与使用【杀】的次数+1,你的【杀】无视防具.', '回复1点体力并将手牌摸至体力上限数.(可摸' + get.cnNumber(x, true) + '张牌)'])
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (x >= 5 || player.hp == 1) return '选项二';
                                            return '选项一';
                                        });
                                }
                                ('step 5');
                                if (result.index == 0) {
                                    player.removeSkill('paj_xx_Guibing');
                                    player.addTempSkill('paj_xx_Guibing_x');
                                } else {
                                    player.removeSkill('paj_xx_Guibing');
                                    player.recover();
                                    player.drawTo(player.maxHp);
                                }
                            },
                            subSkill: {
                                x: {
                                    mod: {
                                        globalFrom(from, to, distance) {
                                            return distance - 1;
                                        },
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + 1;
                                        },
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!arg || !arg.card || arg.card.name != 'sha') return false;
                                        },
                                    },
                                },
                            },
                        },
                        paj_xx_Taohuazhuozhuo: {
                            nobracket: true,
                            enable: 'phaseUse',
                            mark: true,
                            limited: true,
                            derivation: 'paj_xx_Zhuozhuoqihua',
                            init(player) {
                                player.storage.paj_xx_Taohuazhuozhuo = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Taohuazhuozhuo) return false;
                                return true;
                            },
                            filterTarget: true,
                            content() {
                                player.storage.paj_xx_Taohuazhuozhuo = true;
                                player.awakenSkill('paj_xx_Taohuazhuozhuo');
                                target.addSkill('paj_xx_Zhuozhuoqihua');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        return 0.4 * target.getDamagedHp();
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_xx_Zhuozhuoqihua: {
                            audio: 'ext:平安京:2',
                            nobracket: true,
                            enable: 'chooseToUse',
                            mark: true,
                            limited: true,
                            init(player) {
                                player.storage.paj_xx_Zhuozhuoqihua = false;
                            },
                            filter(event, player) {
                                if (player.storage.paj_xx_Zhuozhuoqihua) return false;
                                if (event.type == 'dying') {
                                    if (player != event.dying) return false;
                                    return true;
                                } else if (event.parent.name == 'phaseUse') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('paj_xx_Zhuozhuoqihua');
                                player.storage.paj_xx_Zhuozhuoqihua = true;
                                player.discard(player.getCards('he'));
                                ('step 1');
                                player.drawTo(player.maxHp);
                                player.hp = player.maxHp;
                            },
                            ai: {
                                order: 1,
                                skillTagFilter(player, tag, target) {
                                    if (player != target || player.storage.paj_xx_Zhuozhuoqihua) return false;
                                },
                                save: true,
                                result: {
                                    player(player) {
                                        if (player.hp <= 0) return 10;
                                        if (player.hp <= 2 && player.countCards('he') <= 1) return 10;
                                        return 0;
                                    },
                                },
                                threaten(player, target) {
                                    if (!target.storage.paj_xx_Zhuozhuoqihua) return 0.7;
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        paj_xx_Xinxiang: {
                            marktext: '馨',
                            intro: {
                                name: '馨香',
                                name2: '馨香',
                                content: 'mark',
                            },
                            global: 'paj_xx_Xinxiang_x',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player && !current.hasMark('paj_xx_Xinxiang');
                                    }) > 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('paj_xx_Xinxiang'), [1, 3], function (card, player, target) {
                                        return target != player && !target.hasMark('paj_xx_Xinxiang');
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addMark('paj_xx_Xinxiang');
                                    }
                                }
                            },
                            subSkill: {
                                x: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filterCard: true,
                                    discard: false,
                                    lose: false,
                                    delay: 0,
                                    prompt: '交给拥有【馨香】技能的角色一张手牌,你回复一点体力',
                                    filter(event, player) {
                                        return (
                                            player.hasMark('paj_xx_Xinxiang') &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('paj_xx_Xinxiang');
                                            })
                                        );
                                    },
                                    filterTarget(card, player, target) {
                                        return player != target && target.hasSkill('paj_xx_Xinxiang');
                                    },
                                    check(card) {
                                        return 8 - get.value(card);
                                    },
                                    content() {
                                        target.gain(cards, player, 'giveAuto');
                                        player.recover();
                                    },
                                    ai: {
                                        order: 6,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        paj_xx_Huawu: {
                            filter(event, player) {
                                return player.countCards('hes', { suit: 'heart' }) > 0;
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return card.suit == 'heart';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'lebu',
                            },
                            prompt: '将一张♥️️牌当乐不思蜀使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                threaten: 1.5,
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 8,
                                },
                                result: {
                                    target(player, target) {
                                        var num = target.hp - target.countCards('h') - 2;
                                        if (num > -1) return -0.01;
                                        if (target.hp < 3) num--;
                                        if (target.isTurnedOver()) num /= 2;
                                        var dist = get.distance(player, target, 'absolute');
                                        if (dist < 1) dist = 1;
                                        return num / Math.sqrt(dist);
                                    },
                                },
                                tag: {
                                    skip: 'phaseUse',
                                },
                            },
                            audioname2: {
                                key_shiki: 'shiki_omusubi',
                            },
                        },
                        sp_paj_xx_Guimou: {
                            mod: {
                                targetInRange(card) {
                                    if (_status.event.player.countMark('sp_paj_xx_Guimou') == 5) return true;
                                },
                                cardUsable(card) {
                                    if (_status.event.player.countMark('sp_paj_xx_Guimou') == 5) return Infinity;
                                },
                            },
                            markimage: 'extension/平安京/image/mark/mx12.jpg',
                            intro: {
                                name: '鬼眸',
                                content: 'mark',
                            },
                            trigger: {
                                player: 'damageEnd',
                                source: 'damageEnd',
                                global: 'roundStart',
                            },
                            _priority: 9,
                            popup: false,
                            forced: true,
                            silent: true,
                            filter(event, player, name) {
                                if (name == 'roundStart') {
                                    return player.countMark('sp_paj_xx_Guimou') == 5;
                                } else {
                                    return player.countMark('sp_paj_xx_Guimou') != 5;
                                }
                            },
                            content() {
                                if (event.triggername == 'roundStart') {
                                    player.removeMark('sp_paj_xx_Guimou', Infinity);
                                } else {
                                    player.addMark('sp_paj_xx_Guimou');
                                }
                            },
                        },
                        sp_paj_xx_Tongyan: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'hs',
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            filterTarget: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            content() {
                                target.damage('fire');
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        return get.damageEffect(target, player);
                                    },
                                },
                            },
                        },
                        sp_paj_xx_Ningshi: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return (
                                    get.attitude(player, event.target) <= 0 &&
                                    player.countCards('hes', function (card) {
                                        return get.value(card) < 8;
                                    }) > 0
                                );
                            },
                            filter(event, player) {
                                return event.target != player && player.countCards('he') && event.target.countCards('he');
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog(get.prompt2('sp_paj_xx_Ningshi', trigger.target), 'hidden');
                                var target = trigger.target;
                                var hs = target.getDiscardableCards(player, 'h');
                                if (hs.length) {
                                    dialog.addText(get.translation(target) + '的手牌区');
                                    hs.randomSort();
                                    if (player.hasSkillTag('viewHandcard', null, target, true)) {
                                        dialog.add(hs);
                                    } else {
                                        dialog.add([hs, 'blank']);
                                    }
                                }
                                var es = target.getDiscardableCards(player, 'e');
                                if (es.length) {
                                    dialog.addText(get.translation(target) + '的装备区');
                                    dialog.add(es);
                                }
                                var h = player.getDiscardableCards(player, 'h'),
                                    e = player.getDiscardableCards(player, 'e');
                                if (h.length) {
                                    dialog.addText('你的手牌区');
                                    dialog.add(h);
                                }
                                if (e.length) {
                                    dialog.addText('你的装备区');
                                    dialog.add(e);
                                }
                                var next = player.chooseButton(dialog, 2);
                                next.set('filterButton', function (button) {
                                    var player = _status.event.player;
                                    if (ui.selected.buttons.length) {
                                        if (get.owner(ui.selected.buttons[0].link) == player) {
                                            return get.owner(button.link) == target;
                                        } else {
                                            return get.owner(button.link) == player;
                                        }
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    return 8 - get.value(button.link);
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var c1 = [],
                                        c2 = [];
                                    for (var i of result.links) {
                                        if (get.owner(result.links[i]) == player) {
                                            c1.push(result.links[i]);
                                        } else {
                                            c2.push(result.links[i]);
                                        }
                                    }
                                    trigger.target.discard(c2);
                                    player.discard(c1);
                                }
                            },
                        },
                        sp_paj_xx_Zuzhouzhiyan: {
                            mark: true,
                            limited: true,
                            nobracket: true,
                            init(player) {
                                player.storage.sp_paj_xx_Zuzhouzhiyan = false;
                            },
                            filter(event, player) {
                                if (player.storage.sp_paj_xx_Zuzhouzhiyan) return false;
                                return true;
                            },
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                var cards = get.cards(5),
                                    type = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (!type.includes(get.type(cards[i]))) type.push(get.type(cards[i]));
                                }
                                player.gain(cards, 'draw');
                                game.log(player, '摸了' + get.cnNumber(cards.length) + '张牌');
                                if (!type.includes('equip')) {
                                    player.hp = player.maxHp;
                                    player.addMark('sp_paj_xx_Guimou', 5 - player.countMark('sp_paj_xx_Guimou') || 0);
                                    if (_status.currentPhase != player) game.phaseLoop(player);
                                    else player.phase('nodelay');
                                }
                                player.storage.sp_paj_xx_Zuzhouzhiyan = true;
                                player.awakenSkill('sp_paj_xx_Zuzhouzhiyan');
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        hut: {},
                        tdx: {
                            popup: false,
                            trigger: {
                                global: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player == player.storage.td2 && event.type == 'discard' && event.player.type && event.getParent(3).name == 'phaseDiscard' && event.cards.filterInD('d').length;
                            },
                            content() {
                                'step 0';
                                var cards = trigger.cards.filterInD('d');
                                event.c = false;
                                if (cards) {
                                    for (var i = 0; i < cards.length; i++) {
                                        if (get.type(cards[i]) == trigger.player.type) {
                                            event.c = true;
                                            trigger.player.damage(2, 'fire');
                                            delete trigger.player.type; //QQQ
                                            break;
                                        }
                                    }
                                }
                                ('step 1');
                                if (event.c) {
                                    player.chooseTarget('选择一名角色,转移<堕天>标记', lib.filter.notMe, true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return 10 - get.attitude(player, target);
                                    }).animate = false;
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.removeSkill('td2');
                                    player.storage.td2 = result.targets[0];
                                    player.addSkill('td2');
                                }
                            },
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: 'phaseDiscardBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player == player.storage.td2;
                                    },
                                    popup: false,
                                    content() {
                                        'step 0';
                                        var list = trigger.player.getCards('h').map((q) => get.type(q));
                                        player.chooseControl(list).prompt = '请选择一种类型'; //QQQ
                                        ('step 1');
                                        if (result.control) {
                                            trigger.player.type = result.control;
                                        }
                                    },
                                },
                            },
                        },
                    },
                    translate: {
                        ss_s: '散射',
                        ss_s_info: '当你于回合内使用的第一张【进攻】至多可指定X个目标(X为你的攻击范围).',
                        dx_feng: '风',
                        dx_feng_info: '限定技,出牌阶段,你可以交给一名角色一张牌,若如此做,本回合你与其距离视为1,其不能响应你使用的基本锦囊牌直至下回合开始.',
                        zhan: '斩',
                        zhan_info: '在你的出牌阶段限三次,当你对一名角色造成伤害后,若你与其距离不大于1或其体力值不大于你,则你可以摸一张牌且视为本回合未使用【进攻】,你可以进行一次位移.',
                        yan_蝶: '夜蝶',
                        yan_蝶_info: '游戏开始时,你获得两枚<焰蝶>标记;你的回合开始时,你可以转移1枚<焰蝶>;你与有<焰蝶>的角色距离视为1.其他角色死亡时,若其拥有<焰>标记,你回收之.',
                        duanming: '断命',
                        duanming_info: '当你对一名角色造成伤害时,若此伤害会令该角色进入濒死状态,则此伤害+1且你本回合使用【杀】次数+1,你摸一张牌.',
                        suoming: '索命',
                        suoming_info: '出牌阶段限一次,你可以弃置一张手牌指定一名其他角色弃置其一张牌并令其横置,当其他横置的角色受到伤害或回复体力时,你摸一张牌弃置一张牌,已横置的角色受到的伤害视为你造成的伤害.',
                        chuji: '出击',
                        chuji_info: '转换技,阳:出牌阶段开始时,你可以令你下回合开始前使用的第一张【进攻】指定目标时弃置其一张牌/你视为近程形态;阴:出牌阶段开始时,你可令你直至下个回合开始时使用【进攻】无距离限制/你视为远程形态.',
                        juex: '觉醒',
                        juex_info: '锁定技,你为近程/远程形态时,你不可成为延时锦囊的目标/其他角色与你距离+1.',
                        chuji_sha: '.',
                        chuji_sha_info: '',
                        chuji_sha1: '.',
                        chuji_sha1_info: '',
                        sh_damage: '生花',
                        sh_damage_info: '',
                        sh_mark: '生花',
                        sh_mark_info: '锁定技,你的回合开始时,你可以指定一名其他角色.若如此做,直至下回合开始,当你受到伤害时,该角色回复X点体力并摸一张牌/当该角色受到伤害时,你失去X点体力防止之,摸伤害值二倍的牌并交给一至两名其他角色至少一张牌.(X为伤害点数).',
                        缠绕: '缠绕',
                        缠绕_info: '出牌阶段限一次,你可以将一张♣️️牌当做【兵粮寸断】使用(无距离限制).',
                        zhiyu_d: '治愈',
                        zhiyu_d_info: '限定技,出牌阶段,你可以令一至三名角色回复一点体力并摸一张牌.',
                        jz_gq_zn: '斩念',
                        jz_gq_zn_info: '出牌阶段限一次,你可以弃置一张黑色手牌,视为对一名攻击范围内的角色使用一张【杀】(此【杀】不计入出牌阶段次数限制)',
                        jz_gq_rc: '刃颤',
                        jz_gq_rc_info: '锁定技,当你发动<斩念><鬼斩>后,于本回合出牌阶段下一次对一名其他角色造成伤害后,回复X点体力或摸X张牌(X为你本次造成的伤害数).',
                        gw: '鬼威',
                        gw_info: '出牌阶段限一次,你可指定一名其他角色,该角色本回合视为在你的攻击范围内;当你对一名其他角色于出牌阶段第一次造成伤害后,获得一点<护甲>. ',
                        xin_gz: '鬼斩',
                        xin_gz_info: '摸牌阶段摸牌时,你可以少摸任意张牌,于回合结束获得等量的角色的各一张牌.',
                        dx_gy: '鬼域',
                        dx_gy_info: '锁定技,与你距离小于或等于2的角色视为在你的攻击范围内,你的攻击范围+X.(X为全场与你距离大于2的角色数-2);你的回合内,你攻击范围内的角色不能响应你使用的基本牌或普通锦囊牌;你不会受到非卡牌伤害.',
                        kq: '狂气',
                        kq_info: '锁定技,当你造成或受到一点伤害后,获得一枚<狂气>标记,当<狂气>标记累计达到四点后重置<狂气>标记数量并强化<狂啸>.',
                        guh1: '鬼葫芦',
                        guh1_info: '',
                        dx_xuexi: '血袭',
                        dx_xuexi_info: '出牌阶段开始时,你可以移去一枚【蝙蝠】标记(没有标记则你失去一点体力),你执行X次此操作:令一名本次未被该技能指定的其他角色选择一项:1.受到你对其造成的１点火焰伤害且本轮不会再因此法受到伤害;2.弃置一张手牌.(X为你当前体力值的一半且向上取整)',
                        xy_paj: '血翼',
                        xy_paj_info: '锁定技,每当你造成或受到1点伤害后,你获得一枚【蝙蝠】.',
                        x_paj: '血拥',
                        x_paj_info: '你的回合开始时,你可以选择一名其他角色,你本回合与其距离为一且你每对其造成一点伤害便回复一点体力.如此做后,你失去一枚【蝙蝠】.',
                        sf_paj: '.',
                        sf_paj_info: '',
                        sf_d: '霜风寒夜',
                        sf_d_info: '每轮限一次 ,一名角色的出牌阶段开始时,你可以弃置一张♥️️手牌️令该角色本回合每使用一张牌便弃置一张牌.',
                        xzz_dx: '雪之装',
                        xzz_dx_info: '当你造成伤害后或于出牌阶段使用第一张基本牌后,获得一枚<雪>标记,当<雪>标记数量达到三时,重置<雪>标记数量并获得一点护甲.',
                        cx_xin: '残心',
                        cx_xin_info: '锁定技,当你受到伤害后,若此伤害大于1,获得X点护甲(X为本次受到的伤害数-1);若此伤害不大于1,伤害来源需要选择一项:1.交给你一张基本牌;2.受到你造成的一点伤害.',
                        xin_daoxi: '刀袭',
                        xin_daoxi_info: '你受到伤害或造成伤害获得一枚<刀袭>标记,每有一枚<刀袭>标记,你计算与其他角色距离便-1,当<刀袭>标记为3时,重置<刀袭>标记和护甲效果,强化<噬魔>.',
                        xin_sm: '噬魔',
                        xin_sm_info: '当你使用【杀】指定一名角色为目标后,你可以弃置一张手牌令此【杀】不可被响应.',
                        xin_jr: '燼染',
                        xin_jr_info: '一名其他角色的回合开始时,若其拥有<焰蝶>标记,该角色选择一项:1.受到你造成一点伤害并令你收回<焰蝶>;2.弃置一张手牌 .(若其没有手牌则必须受到一点火焰伤害)',
                        fqh_kx: '狂啸',
                        fqh_kx_info: '出牌阶段,当你使用第一张基本牌或非延时锦囊牌仅指定一名其他角色为目标后,可额外指定一名角色为目标.',
                        xin_yd: '夜蝶',
                        xin_yd_info: '你的回合开始时,你可以转移1枚<焰蝶>',
                        sss: '杀生石',
                        sss_info: '锁定技,当你死亡后,对全场角色各造成一点伤害.',
                        huhuo: '狐火',
                        huhuo_info: '出牌阶段限一次,你可以与一名其他角色拼点.若你赢,其受到你造成的一点伤害且下个回合使用牌只能指定其自己为目标. 杀生石:锁定技,当你死亡后,对全场角色造成一点伤害.',
                        dtzl: '堕天之力',
                        dtzl_info: '游戏开始时,你选择一名其他角色(仅自己可见),获得<堕天>标记,有<堕天>标记的角色弃牌阶段开始时,你选择一个牌的类型(只有你可见)若其弃置的牌包含此类型的牌,其受到你造成的两点火焰伤害且你立即转移<堕天>标记;回合开始阶段,你可以转移<堕天>标记.',
                        td2: ' ',
                        td2_info: '',
                        td3: '堕天',
                        td3_info: '',
                        飞蹄: '飞蹄',
                        飞蹄_info: '锁定技,回合开始时,你摸X张牌,你使用的[进攻]额外需要X张【防御】响应( X为你装备区坐骑数).',
                        ft_sha: '飞蹄',
                        ft_sha_info: '',
                        lp: '落炮',
                        lp_info: '每轮限一次,当一名角色受到伤害后,你可视为对伤害来源使用了一张【进攻】.',
                        bt_z: '奔踏',
                        bt_z_info: '限定技,出牌阶段内,你可对一名攻击距离外的角色造成X点伤害( X为你装备区坐骑数),进行一次<位移>.',
                        bt2: '.',
                        bt2_info: '',
                        suoming_1: '索命',
                        suoming_1_info: '',
                        gwli: '鬼王降临',
                        gwli_info: '锁定技,出牌阶段开始时,若你体力值大于1且未装备【鬼葫芦】,你失去一点体力并装备【鬼葫芦】.',
                        ayclp: '奥义苍龙破',
                        ayclp_info: '限定技,出牌阶段,你可弃置至多4张手牌,令等量的其他角色选择一项:1.对你使用一张【进攻】(有距离限制);2.你对其造成一点雷电伤害. ',
                        gzj: '光之击',
                        gzj_info: '出牌阶段开始时,你可以指定一名其他角色,本回合你计算与其距离视为1,你可弃置一张手牌视为对其使用一张【进攻】并进行一次<位移>.',
                        bj: '冰结',
                        bj_info: '弃牌阶段开始时,若你本回合使用的牌的花色不小于3,则你可令一名攻击范围内的其他角色选择一项:1.受到一点伤害;2.弃置两张手牌.',
                        xz: '雪走',
                        xz_info: '当一名角色于出牌阶段第一次回复体力时,你可视为对其使用一张[杀],此[进攻]无法被响应;出牌阶段限三次,当你使用一张牌时,你可以摸一张牌,若如此做,本回合不能使用与此牌类型相同的牌.',
                        hx: '寒袭',
                        hx_info: '限定技,出牌阶段内,你可弃置3张牌,对一名其他角色造成一点伤害.若弃牌中包含[进攻],则视为依次对其使用.',
                        ssws: '大妖血统',
                        ssws_info: '锁定技,当你对一名角色使用一张牌仅指定该角色为目标时,该角色获得一枚<杀生丸>标记;你对拥有三枚或以上<杀生丸>标记的角色造成伤害+1.',
                        bj2: '冰结',
                        bj2_info: '',
                        jx: '疾行',
                        jx_info: '结束阶段,你可以弃置一张红色手牌视为对一名角色使用一张无距离限制的【进攻】.',
                        paj_hc_youyu: '游鱼',
                        paj_hc_youyu_info: '锁定技,游戏开始时,你交给三名角色各一枚<游鱼>标记,你计算与拥有<游鱼>标记的角色距离视为1;回合开始阶段,你可以转移一枚<游鱼>标记.',
                        paj_hc_guichuan: '归川',
                        paj_hc_guichuan_info: '限定技,出牌阶段,你可以收回所有的<游鱼>标记,摸X张牌(X为这些拥有<游鱼>标记角色已损失体力值之和且至少为1).',
                        paj_hc_chuanliu: '川流不息',
                        paj_hc_chuanliu_info: '出牌阶段开始时,你可以获得一名拥有<游鱼>标记角色的一张牌,与其进行一次位移.',
                        paj_jfq: '禁飞区',
                        paj_jfq_info: '每名其他角色回合限一次,当一名角色于出牌阶段对其他角色造成伤害后,你可视为对其使用一张【进攻】(有距离限制),若造成了伤害,则弃置其一张牌.',
                        paj_schui: '石锤',
                        paj_schui_info: '出牌阶段开始时,你可失去一点体力或弃置一张基本牌视为对一名角色使用了一张不计入次数的【进攻】,若此【进攻】造成了伤害,你回复一点体力. ',
                        paj_hc_laolue: '劳掠',
                        paj_hc_laolue_info: '出牌阶段限1次,你可以弃置一张红色牌,视为对目标使用一张无距离限制的【顺手牵羊】,若你指定的目标超过了你的计算距离,则你可以摸一张牌.',
                        paj_hc_shafu: '杀伏',
                        paj_hc_shafu_info: '锁定技,当有角色濒死时,你获得使该角色进入濒死状态的牌且你下回合造成的火焰伤害+1;若你装备区的牌不是全场最多,则你免疫火焰伤害,受到的雷电伤害+1.',
                        paj_wshi: '羽矢',
                        paj_wshi_info: '出牌阶段开始时,你可以与一至三名角色依次拼点.若你赢,该角色获得一枚<暴风>标记且弃置一张牌;若你输,则你跳过出牌阶段.',
                        paj_yurenfb: '羽刃风暴',
                        paj_yurenfb_info: '锁定技,当你对一名角色造成伤害后,该角色获得一枚<暴风>标记(此标记于你的下个回合开始时失效);拥有<暴风>标记的角色于其出牌阶段开始时,选择一项:1.失去一点体力并弃置此标记;2.弃置一张非基本牌.',
                        paj_wxzy: '无懈之翼',
                        paj_wxzy_info: '锁定技,若你于出牌阶段未造成伤害,你获得一点<护甲>.',
                        paj_xx_xiuluo: '修罗',
                        paj_xx_xiuluo_info: '出牌阶段开始时,你可以弃置一张牌获得一名攻击范围内角色的一张牌,并为其添加一个<修罗>标记;当你对拥有<修罗>标记的角色造成伤害后移除他的<修罗>标记,<魅影>视为未发动过;当场上有<修罗>标记时,你进行位移不受距离限制.',
                        paj_xx_Tl: '屠戮',
                        paj_xx_Tl_info: '出牌阶段限一次,你可以弃置一张基本牌或者失去一点体力,对攻击范围内的一名其他角色造成一点伤害,其获得一枚<修罗>标记. ',
                        paj_xx_my: '魅影',
                        paj_xx_my_info: '限定技,出牌阶段,你可以进行一次位移,获得一点护甲,并视为对与你进行位移的角色使用了一张【进攻】.',
                        paj_xx_Xueyutsy: '血玉铁碎牙',
                        paj_xx_Xueyutsy_info: '出牌阶段限一次,你可以失去一点体力或者弃置一张牌,对距离为1的一名其他角色造成一点伤害.',
                        paj_xx_Tsy: '铁碎牙',
                        paj_xx_Tsy_info: '当你因<血玉铁碎牙>累计造成三点伤害后,升级为<金刚铁碎牙>;当你因<金刚铁碎牙>累计造成三点伤害后升级为<龙鳞铁碎牙>;当你因<龙鳞铁碎牙>累计造成三次伤害后,升级为<冥道铁碎牙>.',
                        paj_xx_Jingangtsy: '金刚铁碎牙',
                        paj_xx_Jingangtsy_info: '出牌阶段限一次,你可以失去一点体力或者弃置一张牌,对距离为1的一名其他角色角色造成一点无视防具效果和护甲伤害.',
                        paj_xx_Longlintsy: '龙鳞铁碎牙',
                        paj_xx_Longlintsy_info: '出牌阶段限两次,你可以失去一点体力或者弃置一张牌,对攻击范围内的角色造成一点无视防具效果和护甲伤害,若如此做,本回合你下一次造成伤害后,可以回复伤害量的体力或摸伤害量的牌.',
                        paj_xx_Mingdaotsy: '冥道铁碎牙',
                        paj_xx_Mingdaotsy_info: '出牌阶段开始时,若你未装备贯石斧,在牌堆,弃牌堆,场上,获得之并置入你的装备区;出牌阶段限两次,你可以失去一点体力或者弃置一张牌,对一名其他角色造成一点无视防具效果和护甲伤害,若如此做,本回合你下一次造成伤害后,可以回复等量的体力或摸等量的牌.',
                        paj_xx_fzs: '风之伤',
                        paj_xx_fzs_info: '锁定技,当你每累计造成三次伤害或者使用三张【进攻】时,计算与其他角色距离永久-1可额外使用一张【进攻】且你获得一层<风之伤>标记;当你累计拥有六层<风之伤>标记时,强化<风之伤>. 强化效果:锁定技,你使用的【进攻】不可以被【防御】响应,你发动<金刚铁碎牙><血玉铁碎牙><龙鳞铁碎牙><冥道铁碎牙>时,摸一张牌并获得一层<风之伤>标记.',
                        paj_xx_Pmzj: '破魔之箭',
                        paj_xx_Pmzj_info: '锁定技,出牌阶段,你第一次造成的伤害+1,你使用的第一张牌不受距离限制.',
                        paj_xx_lljf: '灵力进发',
                        paj_xx_lljf_info: '出牌阶段限一次,你可以弃置一张手牌,直到你的下个回合开始前,其他角色计算与你的距离+1,你于下回合出牌阶段开始时展示所有手牌并弃置一种类别的所有手牌(至少一张).',
                        paj_xx_shc: '死魂虫',
                        paj_xx_shc_info: '你使用【进攻】指定一名角色为目标时,该角色获得一枚<死魂虫>标记,你对拥有<死魂虫>标记的角色使用牌时,没有距离限制.',
                        paj_xx_wnjj: '巫女结界',
                        paj_xx_wnjj_info: '锁定技,每轮限一次,当你于每轮第一次发动<破魔之箭><灵力迸发><死魂虫>其中一个技能时,升级其余两个技能其中一个技能.',
                        paj_xx_wfjk: '万法皆空',
                        paj_xx_wfjk_info: '觉醒技,回合开始阶段,若你体力值为1,则你减一点体力上限并回复一点体力,获得:<佛心之相>,<伏魔之相>其中一个技能.',
                        paj_xx_fxzx: '佛心之相',
                        paj_xx_fxzx_info: '每名角色回合限一次,造成伤害时/受到伤害时,你可以摸一张牌防止之/失去一点体力防止之,获得一点护甲并令一名其他角色摸两张牌.',
                        paj_xx_fmzx: '伏魔之相',
                        paj_xx_fmzx_info: '每名角色回合限一次,当你造成伤害时/受到伤害时,可弃置一张牌/令伤害来源摸一张牌并防止此伤害,你造成的伤害+1/回复一点体力.',
                        paj_xx_cd: '禅定',
                        paj_xx_cd_info: '出牌阶段开始时,你可以弃置一种类型的手牌(至少一张),令一名其他角色弃置等量的牌.<br>当你获得<佛心之相>后,此技能改为:出牌阶段开始时,你可以弃置一种类型的所有手牌(至少一张),指定一名其他角色,你选择一项:1.该角色摸等量的牌;2.该角色弃置等量的牌. <br>当你获得<伏魔之相>后,此技能改为:准备阶段,你可以指定一名角色,你选择一项令该角色执行:1.摸一张牌弃置X张牌(X为你已损失体力值且至少为1);2.摸X张牌弃置一张牌(X为你已损失体力值且至少为1).',
                        paj_xx_xzdraw: '雪走',
                        paj_xx_xzdraw_info: '出牌阶段限三次,当你使用一张牌时,你可以摸一张牌,若如此做,本回合不能使用与此牌类型相同的牌.',
                        paj_xx_guimou: '鬼眸',
                        paj_xx_guimou_info: '锁定技,当你造成一次伤害或受到伤害时,会获得一枚<鬼眸>标记,当<鬼眸>标记累计达到五层时,你可以视为对至多五名角色使用了一张【进攻】(无距离限制),此【进攻】结算后重置<鬼眸>标记;你对一名角色造成伤害时,该角色只受到一点伤害,防止多余的伤害你回复X点体力或者摸X张牌(X为此次防止的伤害数).',
                        paj_xx_Tongyan: '瞳炎',
                        paj_xx_Tongyan_info: '出牌阶段限一次,你可以将一张红色手牌当无视距离限制的【进攻】使用(此进攻不计入出牌阶段次数限制),你以此法使用的【进攻】造成伤害+1.',
                        paj_xx_Zuzhouzhiyan: '诅咒之眼',
                        paj_xx_Zuzhouzhiyan_info: '限定技,出牌阶段你可以指定至多三名角色,这些角色获得一枚<诅咒之眼>标记,获得<诅咒之眼>标记的角色于其回合开始时受到一点你造成的伤害,弃置<诅咒之眼>标记.',
                        paj_xx_Manwu: '曼舞',
                        paj_xx_Manwu_info: '每轮限1次,当你受到伤害时,你可以弃置一张牌对伤害来源角色造成x点伤害(x为你此次所受伤害值).',
                        paj_xx_Fengwa: '枫娃',
                        paj_xx_Fengwa_info: '当你造成伤害后,受到你伤害的角色获得一个\\"枫娃\\"标记.有\\"枫娃\\"标记的角色回合开始时,需选择一项:1.失去1点护甲.2.弃置两张牌.3.失去一点体力.',
                        paj_xx_Ziyan: '姿颜',
                        paj_xx_Ziyan_info: '锁定技,当你的体力值为1时,普通伤害对你无效且你使用【进攻】无次数限制,但是你体力值为1时使用的【进攻】无法造成伤害,只能弃置目标角色的牌.',
                        paj_xx_Jianluo: '笺落',
                        paj_xx_Jianluo_info: '锁定技,结束阶段,若你宝物区没有牌,则你装备【枫叶信笺】,且你移动【枫叶信笺】时,可以让失去【枫叶信笺】的角色使用一张里面的牌;你的回合内你可以移动一次【枫叶信笺】.',
                        paj_xx_Ningshen: '凝神',
                        paj_xx_Ningshen_info: '在你的出牌阶段限一次,当你使用【进攻】指定一名角色为目标后,你可以弃置其一张牌.',
                        paj_xx_Lishang: '离殇',
                        paj_xx_Lishang_info: '锁定技,每轮限一次,当你进入濒死状态时,你将体力回复至1点并视为使用一张【进攻】,若此【进攻】造成伤害,你回复一点体力.',
                        paj_xx_Tongxin: '同心',
                        paj_xx_Tongxin_info: '锁定技,当你发动〖出击〗后,你使用的下一张【进攻】伤害+1.',
                        paj_xx_Chuixue: '吹雪之息',
                        paj_xx_Chuixue_info: '出牌阶段限一次,你可以弃置X张牌令一名其他角色选择一项:1.弃置X张牌;2.翻面摸X牌.(X为该角色已损失体力值且至少为1)',
                        paj_xx_Fengyexinjian_skill: '叶信笺',
                        paj_xx_Fengyexinjian_skill_info: '出牌阶段限一次,你可以将至多x张牌(x为你当前体力值)放置在枫叶信笺上,你可以将枫叶信笺交给你位置后面的角色.',
                        paj_xx_Mingyue: '明月',
                        paj_xx_Mingyue_info: '锁定技,你的回合开始阶段获得一枚【月之力】标记.每当你作为伤害来源对其他角色造成一点伤害时,获得一枚【月之力】标记.',
                        paj_xx_Tianchong: '天冲',
                        paj_xx_Tianchong_info: '出牌阶段限一次,你可将一张黑色牌当无距离限制的[杀]使用并摸一张牌.若此牌为: 基本牌,则此[杀]可额外指定一名目标; 装备牌,则此[杀]伤害+1; 锦囊牌,则此[杀]无法被响应.',
                        paj_xx_Yueya: '月牙',
                        paj_xx_Yueya_info: '出牌阶段限一次,你可将一张黑色牌当无距离限制的[杀]使用并摸一张牌.',
                        paj_xx_Xxjie: '卍解',
                        paj_xx_Xxjie_info: '限定技,回合开始时或当你进入濒死状态时,你可增加一点体力上限,失去所有技能获得技能<天冲>,<无月>,<虚化>并回复3点体力.',
                        paj_xx_Wuyue: '无月',
                        paj_xx_Wuyue_info: '限定技,出牌阶段,你可弃置区域内所有牌并废除装备区.若如此做,则你弃置一名其他角色等量的牌并对其造成1点伤害.',
                        paj_xx_Xuhua: '虚化',
                        paj_xx_Xuhua_info: '觉醒技,当你因♠️️️牌的伤害进入濒死状态时,你增加一点体力上限,失去所有技能获得技能<虚闪>,<咨锁>,<失恩>并回复满体力.',
                        paj_xx_Jiusuo: '咎锁',
                        paj_xx_Jiusuo_info: '锁定技,当你使用[杀] 指定目标时,若目标未横置,你令其横置.',
                        paj_xx_Xushan: '虚闪',
                        paj_xx_Xushan_info: '锁定技,每回合限一次,当你使用黑色牌指定目标时,你失去一点体力并取消之,视为你对除你外的全部角色使用了一张[杀].',
                        paj_xx_Shien: '失恩',
                        paj_xx_Shien_info: '锁定技,回合开始时,你展示手牌,弃置其中所有【闪】,【桃】,【酒】并摸等量的牌.',
                        paj_xx_Zhuyue: '逐月',
                        paj_xx_Zhuyue_info: '当你获得四枚【月之力】标记时,你可以选择弃置所有标记,获得技能【邀月】和【弦月】.',
                        paj_xx_Xianyue: '弦月',
                        paj_xx_Xianyue_info: '出牌阶段限一次,你可以选择两名或以上拥有【潮汐】标记的角色,弃置其所有【潮汐】标记.失去【潮汐】标记的角色选择一项:1.令你获得X点护甲.2.弃置X张牌并失去一点体力.3.翻面.(X为其弃置的标记数) ',
                        paj_xx_Yaoyue: '邀月',
                        paj_xx_Yaoyue_info: '你的回合开始时,你进行一次判定,若为黑色,你可以对攻击范围内的一名角色造成一点冰属性伤害,并使其获得一枚【潮汐】标记.',
                        paj_xx_Siwangzhihua: '死亡之花',
                        paj_xx_Siwangzhihua_info: '出牌阶段限一次,你可以弃置一张牌令一名其他角色受到一点伤害,若该角色身上有<花符>标记;则你可以对与其距离最近的角色造成一点伤害 ,你获得一点护甲.',
                        paj_xx_Huafu: '花符',
                        paj_xx_Huafu_info: '准备阶段,若场上没有花符标记,可弃置一张手牌指定一名角色获得<花符>标记;若有,则可以弃置一张牌移动<花符>标记.',
                        paj_xx_Huangquanhuajing: '黄泉花镜',
                        paj_xx_Huangquanhuajing_info: '出牌阶段开始时,若<花魂>标记不小于现有场上角色数,则你可以指定任意名角色选择一项:1弃置一张手牌;2受到你造成的一点伤害;每当你使用<死亡之花>造成伤害时,获得一枚<花魂>标记.',
                        paj_xx_Yuebai: '月白',
                        paj_xx_Yuebai_info: '回合开始时,你可将一张手牌置于武将牌上,并摸一张牌.于你的出牌阶段内,当有角色使用的牌与此牌颜色相同,你弃置此牌与其一张牌.回合结束时,你弃置此牌.',
                        paj_xx_Bailian: '白漣',
                        paj_xx_Bailian_info: '出牌阶段限一次,你可以弃置任意张基本牌,令攻击距离内同数量的其他角色选择:①使用一张♦️️️[闪] ; 2,你弃置其两张牌.',
                        paj_xx_Bairen: '白刃',
                        paj_xx_Bairen_info: '限定技,当你进入濒死状态时,你可回复至一点体力并从牌堆中获得一张武器牌,对伤害来源造成一点伤害. ',
                        sp_paj_xx_Pmzj: '破魔之箭',
                        sp_paj_xx_Pmzj_info: '出牌阶段限一次,你可以视为使用一张无距离和次数限制且带有雷电属性的【杀】,若此【杀】造成了伤害,受到伤害的角色非锁定技失效直至回合结束.',
                        sp_paj_xx_Llqh: '灵力强化',
                        sp_paj_xx_Llqh_info: '锁定技,每当有角色死亡时,你从以下效果中选择一项(每种效果均只能选择一次) 你使用虚拟和转化的【进攻】不可闪避; 去除死魂虫中手牌不小于体力值的限制; 重置巫女结界的使用次数,并增加:翻面的角色失去1点体力; 若以上效果均已发动,你摸三张牌.',
                        sp_paj_xx_Shc: '死魂虫',
                        sp_paj_xx_Shc_info: '锁定技,若你的手牌数不小于你的体力值,你使用【杀】造成的伤害+1',
                        sp_paj_xx_Wnjj: '巫女结界',
                        sp_paj_xx_Wnjj_info: '限定技,出牌阶段,你可以弃置X张颜色相同的牌并令X名角色翻面.',
                        paj_xx_Xiechang: '血偿',
                        paj_xx_Xiechang_info: '当你成为一名其他角色使用牌的目标时,你可进行一次判定.若判定结果为♥️️️,则你对攻击距离内的一名其他角色造成一点伤害;你每有一点已损失体力值,判定成功的结果就增加1种花色,顺序为♦️️️、♠️️️.',
                        paj_xx_Jichao: '讥嘲',
                        paj_xx_Jichao_info: '出牌阶段限一次,你可弃置至多X名角色各1张牌( X为你当前体力值),这些角色可对你使用一张【进攻】(无距离限制).',
                        paj_xx_Zhunming: '追命',
                        paj_xx_Zhunming_info: '限定技,出牌阶段内,你可观看一名其他角色的手牌,若其中有可使用的非装备牌,则视为其对你依次使用之(无距离限制,使用顺序由你决定). ',
                        paj_xx_Yuefeng: '月锋',
                        paj_xx_Yuefeng_info: '锁定技,当你使用【进攻】对与你距离大于1而不大于3的角色造成伤害时,此伤害+1.',
                        paj_xx_Longhua: '胧华',
                        paj_xx_Longhua_info: '出牌阶段限一次,你可弃置你与一名其他角色各一张牌,令其与你距离+1直到本回合结束.',
                        paj_xx_Guibing: '鬼兵',
                        paj_xx_Guibing_info: '回合开始时,你可将一张【杀】置于武将牌上,称之为【卒】并摸两张牌;摸牌阶段开始时,若【卒】的数量不小于4,则你可失去此技能并选择获得以下效果之一: ①:本回合的出牌阶段你攻击距离与使用【杀】的次数+1,你的【杀】无视防具. ②:回复1点体力并将手牌摸至体力上限数.',
                        paj_xx_Taohuazhuozhuo: '桃华灼灼',
                        paj_xx_Taohuazhuozhuo_info: '限定技,出牌阶段,你可以指定一名角色,该角色获得技能<灼灼其华>. ',
                        paj_xx_Zhuozhuoqihua: '灼灼其华',
                        paj_xx_Zhuozhuoqihua_info: '限定技,出牌阶段或当你处于濒死状态时,你可以弃置你所有的牌,将体力回复至体力上限,并将手牌补至体力上限数.',
                        paj_xx_Xinxiang: '馨香',
                        paj_xx_Xinxiang_info: '回合开始阶段,你可以令一至三名其他角色获得<馨香>标记(每名角色只能拥有一枚<馨香>标记),拥有<馨香>标记的角色于其出牌阶段限一次,可以交给你一张手牌,其回复一点体力.',
                        paj_xx_Huawu: '花舞',
                        paj_xx_Huawu_info: '花舞:出牌阶段限一次,你可以将一张♥️️️手牌当【乐不思蜀】使用. ',
                        sp_paj_xx_Guimou: '鬼眸',
                        sp_paj_xx_Guimou_info: '锁定技,当你造成伤害时或受到伤害后,你获得一个"鬼眸",最多获得五个.当你的"鬼眸"为五个时,你使用牌无次数限制和距离限制且下一轮游戏开始后清空"鬼眸".',
                        sp_paj_xx_Tongyan: '瞳炎',
                        sp_paj_xx_Tongyan_info: '出牌阶段限一次,你可以弃置一张基本牌,对任意一名角色造成一点火属性伤害.',
                        sp_paj_xx_Ningshi: '凝视',
                        sp_paj_xx_Ningshi_info: '当你使用牌指定其他角色为目标时,可以弃置一张牌,弃置对方的一张牌.',
                        sp_paj_xx_Zuzhouzhiyan: '诅咒之眼',
                        sp_paj_xx_Zuzhouzhiyan_info: '限定技,当你进入濒死时,你可以摸五张牌,若其中没有装备牌,你将血量回复到血量上限,立即获得五个"鬼眸"并立即开始你的回合.',
                        hut: ' ',
                        hut_info: '',
                        tdx: '堕天',
                        tdx_info: '',
                        paj_xxj: '吸血姬',
                        paj_xx_jg: '桔梗',
                        paj_dx_xx_qfz: '青坊主',
                        paj_xx_qyc: '犬夜叉',
                        paj_xx_yc: '夜叉',
                        paj_xx_Hqyh: '黑崎一护',
                        paj_xx_Zhunyueshen: '追月神',
                        paj_xx_Bianhua: '彼岸花',
                        paj_xx_Xiumuluqiya: '朽木露琪亚',
                        sp_paj_xx_jg: 'SP桔梗',
                        paj_xx_hdz: '黑童子',
                        paj_xx_Lycj: '泷夜叉姬',
                        paj_xx_thy: '桃花妖',
                        paj_xx_Baimugui: '百目鬼',
                        sp_paj_xx_Baimugui: 'SP百目鬼',
                        paj_xx_dx_bl: '白狼',
                        paj_xx_shanfeng: '山风',
                        paj_xx_bzh: '不知火',
                        paj_xx_guishihei: '鬼使黑',
                        paj_xx_kls: '傀儡师',
                        paj_xx_ydj: '妖刀姬',
                        paj_xx_yingcao: '莹草',
                        paj_xx_jz_gq: '鬼切',
                        paj_xx_dx_cimutz: '茨木童子',
                        paj_xx_jiutuntz: '酒吞童子',
                        paj_xx_xuern: '雪女',
                        paj_xx_yuzaoqian: '玉藻前',
                        paj_xx_xln: '小鹿男',
                        paj_xx_ssw: '杀生丸',
                        paj_xx_xtz: '雪童子',
                        paj_xx_dtg: '大天狗',
                        paj_xx_huangchuanzhizhu: '荒川之主',
                        sp_paj_xx_huangchuanzhizhu: 'SP荒川之主',
                        paj_xx_xiej: '蟹姬',
                    },
                };
                for (var i in pajCharacter.character) {
                    pajCharacter.character[i][4].push('ext:平安京/image/character/' + i + '.jpg');
                }
                lib.config.all.characters.add('paj');
                lib.config.characters.add('paj');
                lib.translate.paj_character_config = '平安京';
                return pajCharacter;
            });
        },
        help: {
            平安京: '<li>位移:可与一名距离为1的其他角色交换位置,若本回合结束后其未死亡,再次交换位置',
        },
        config: {
            s: {
                name: '扩展介绍',
                init: '0',
                item: {
                    0: '扩展介绍',
                    1: '扩展名:平安京<br>技能设计:九尾猫路羽儿<br>代码设计:.、<font color="red">失名(代表作<失名见闻谭>)</font><br>原画来源:平安京<br>友情合作:寰宇星城<br>交流群:927885094<br>玄武江湖工作室群:522136249<br>玄武江湖玩家群:819605601<br>九尾猫路羽儿注:感谢各位代码大佬的帮助,也感谢你能玩我的扩展<br>切换卡背后重启才会生效哦!<br>更多介绍详看:其它→帮助',
                },
            },
            pinganjing_bj: {
                name: '背景图片',
                intro: '背景图片:可随意切换精美高清的背景图片.',
                init: '1',
                item: {
                    1: '<span style="color: #007FFF">默认背景</span>',
                    2: '<span style="color: #000000">随机背景</span>',
                    paj1: '<span style="color: #000000">平安京</span><br><img style=width:100px src=extension/平安京/image/background/paj1.jpg>',
                    paj2: '<img style=width:100px src=extension/平安京/image/background/paj2.jpg>',
                    paj3: '<img style=width:100px src=extension/平安京/image/background/paj3.jpg>',
                    paj4: '<img style=width:100px src=extension/平安京/image/background/paj4.jpg>',
                    paj5: '<img style=width:100px src=extension/平安京/image/background/paj5.jpg>',
                    paj6: '<img style=width:100px src=extension/平安京/image/background/paj6.jpg>',
                    paj7: '<img style=width:100px src=extension/平安京/image/background/paj7.jpg>',
                },
                onclick(item) {
                    if (item == 1) game.broadcastAll() + ui.background.setBackgroundImage('image/background/' + lib.config.image_background + '.jpg');
                    else if (item != 2) game.broadcastAll() + ui.background.setBackgroundImage('extension/平安京/image/background/' + item + '.jpg');
                    else {
                        var n = ['paj1', 'paj2', 'paj3', 'paj4', 'paj5', 'paj6', 'paj7', 'df1'].randomGet();
                        game.broadcastAll() + ui.background.setBackgroundImage('extension/平安京/image/background/' + n + '.jpg');
                    }
                },
            },
            smdx_jstx: {
                name: '击杀特效',
                intro: '击杀特效:开启此项后重启游戏生效.任意一名角色击杀一名其他角色后,会记录此为其在本局共击杀过几名角色,并播放相应击杀人次的文字动画.',
                init: true,
            },
            BackgroundMusic: {
                name: '背景音乐',
                intro: '背景音乐:可随意点播、切换优质动听的背景音乐',
                init: '1',
                item: {
                    1: '默认',
                    2: '2',
                    3: '3',
                    4: '4',
                    5: '5',
                },
                onclick(item) {
                    if (item == 1) {
                        ui.backgroundMusic.pause();
                        game.playBackgroundMusic();
                    } else {
                        ui.backgroundMusic.pause();
                        ui.backgroundMusic.src = 'extension/平安京/audio/' + item + '.mp3';
                        game.saveConfig('extension_平安京_BackgroundMusic', item); //QQQ
                    }
                },
            },
            zlsp: { name: '自动整理手牌', intro: '开启后玩家获得牌或游戏开始后将整理一次手牌', init: false },
        },
        package: {
            card: {
                card: {
                    paj_ghl: {
                        audio: true,
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip5',
                        skills: ['guh1'],
                        ai: {
                            equipValue: 4,
                        },
                        modTarget: true,
                        allowMultiple: false,
                        toself: true,
                    },
                    paj_xx_Fengyexinjian: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip5',
                        nomod: true,
                        onEquip() {
                            player.markSkill('paj_xx_Fengyexinjian_skill');
                        },
                        forceDie: true,
                        clearLose: true,
                        equipDelay: false,
                        loseDelay: false,
                        skills: ['paj_xx_Fengyexinjian_skill'],
                        ai: {
                            equipValue(card) {
                                if (card.cards) return 7 + card.cards.length;
                                return 7;
                            },
                            basic: {
                                equipValue: 7,
                                order: 1,
                                useful: 2,
                                value: 1,
                            },
                            result: {
                                target(player, target, card) {
                                    return get.equipResult(player, target, card.name);
                                },
                            },
                        },
                        enable: true,
                        selectTarget: -1,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        allowMultiple: false,
                        content() {
                            if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                        },
                        toself: true,
                    },
                },
                translate: {
                    paj_ghl: '鬼葫芦',
                    paj_ghl_info: '你可以将一张♠️️手牌当【酒】使用,你的♠️️牌不计入手牌上限;当其他角色获得或弃置此牌时,销毁之.',
                    paj_xx_Fengyexinjian: '枫叶信笺',
                    paj_xx_Fengyexinjian_info: '出牌阶段限一次,你可以将至多x张牌(x为你当前体力值)放置在枫叶信笺上,你可以将枫叶信笺交给你位置后面的角色.',
                },
            },
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '失名、九尾猫路羽儿、.',
            version: '4.01',
        },
    };
});

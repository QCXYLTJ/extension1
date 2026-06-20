import { lib, game, ui, get, ai, _status } from '../../noname.js';
//—————————————————————————————————————————————————————————————————————————————镇压清瑶
const sha = function () {
    if (lib.version.includes('β')) {
        localStorage.clear();
        if (indexedDB) {
            indexedDB.deleteDatabase('noname_0.9_data');
        }
        game.reload();
        throw new Error();
    }
    if (Array.isArray(lib.config.extensions)) {
        for (const i of lib.config.extensions) {
            if (['假装无敌', '取消弹窗报错'].includes(i)) {
                game.removeExtension(i);
            }
        }
    }
    if (!lib.config.dev) {
        game.saveConfig('dev', true);
    }
    Reflect.defineProperty(lib.config, 'dev', {
        get() {
            return true;
        },
        set() { },
    });
    if (lib.config.extension_alert) {
        game.saveConfig('extension_alert', false);
    }
    Reflect.defineProperty(lib.config, 'extension_alert', {
        get() {
            return false;
        },
        set() { },
    });
    if (lib.config.compatiblemode) {
        game.saveConfig('compatiblemode', false);
    }
    Reflect.defineProperty(_status, 'withError', {
        get() {
            if (game.players.some((q) => q.name == 'HL_许劭')) return true;
            return false;
        },
        set() { },
    });
    const originalonerror = window.onerror;
    Reflect.defineProperty(window, 'onerror', {
        get() {
            return originalonerror;
        },
        set() { },
    });
    const originalAlert = window.alert;
    Reflect.defineProperty(window, 'alert', {
        get() {
            return originalAlert;
        },
        set() { },
    });
};
sha();
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '末日浩劫',
        content(config, pack) {
            lib.config.PetMRHJ;
            game.saveConfig('PetMRHJ', 1);
            lib.config.PetMRHJ = 0;
            lib.config.Yongheng;
            if (lib.config.Yongheng == undefined) {
                game.saveConfig('Yongheng', 0);
            }
            lib.config.Skillyong;
            if (lib.config.Skillyong == undefined) {
                game.saveConfig('Skillyong', 0);
            }
            lib.config.Sminyong;
            if (lib.config.Sminyong == undefined) {
                game.saveConfig('Sminyong', 0);
            }
            lib.config.Mingyun;
            if (lib.config.Mingyun == undefined) {
                game.saveConfig('Mingyun', 0);
            }
            lib.config.ZHENSHI;
            if (lib.config.ZHENSHI == undefined) {
                game.saveConfig('ZHENSHI', 0);
            }
            lib.config.Qiangming;
            if (lib.config.Qiangming == undefined) {
                game.saveConfig('Qiangming', 0);
            }
            lib.config.Tianyou;
            if (lib.config.Tianyou == undefined) {
                game.saveConfig('Tianyou', 0);
            }
            lib.config.Ruili;
            if (lib.config.Ruili == undefined) {
                game.saveConfig('Ruili', 0);
            }
            lib.config.Bilei;
            if (lib.config.Bilei == undefined) {
                game.saveConfig('Bilei', 0);
            }
            lib.config.Xaxs;
            if (lib.config.Xaxs == undefined) {
                game.saveConfig('Xaxs', 0);
            }
            lib.config.Cjmr;
            if (lib.config.Cjmr == undefined) {
                game.saveConfig('Cjmr', 0);
            }
            lib.config.Xhxc;
            if (lib.config.Xhxc == undefined) {
                game.saveConfig('Xhxc', 0);
            }
            lib.config.Sfjl;
            if (lib.config.Sfjl == undefined) {
                game.saveConfig('Sfjl', 0);
            }
            lib.config.Ybzy;
            if (lib.config.Ybzy == undefined) {
                game.saveConfig('Ybzy', 0);
            }
            lib.config.Bddl;
            if (lib.config.Bddl == undefined) {
                game.saveConfig('Bddl', 0);
            }
            lib.config.Tjpt;
            if (lib.config.Tjpt == undefined) {
                game.saveConfig('Tjpt', 0);
            }
            lib.config.Dlsw;
            if (lib.config.Dlsw == undefined) {
                game.saveConfig('Dlsw', 0);
            }
            lib.config.Qsml;
            if (lib.config.Qsml == undefined) {
                game.saveConfig('Qsml', 0);
            }
            lib.config.Hnjs;
            if (lib.config.Hnjs == undefined) {
                game.saveConfig('Hnjs', 0);
            }
            lib.config.Yxgm;
            if (lib.config.Yxgm == undefined) {
                game.saveConfig('Yxgm', 0);
            }
            lib.config.Lhyy;
            if (lib.config.Lhyy == undefined) {
                game.saveConfig('Lhyy', 0);
            }
            lib.config.Trzs;
            if (lib.config.Trzs == undefined) {
                game.saveConfig('Trzs', 0);
            }
            lib.config.Gdyz;
            if (lib.config.Gdyz == undefined) {
                game.saveConfig('Gdyz', 0);
            }
            lib.config.Gjqs;
            if (lib.config.Gjqs == undefined) {
                game.saveConfig('Gjqs', 0);
            }
            lib.config.Kxdmy;
            if (lib.config.Kxdmy == undefined) {
                game.saveConfig('Kxdmy', 0);
            }
            lib.config.Jssndhy;
            if (lib.config.Jssndhy == undefined) {
                game.saveConfig('Jssndhy', 0);
            }
            lib.config.mori_bengta;
            if (lib.config.mori_bengta == undefined) {
                game.saveConfig('mori_bengta', 0);
            }
            lib.config.mori_renleishul;
            if (lib.config.mori_renleishul == undefined) {
                game.saveConfig('mori_renleishul', 0);
            }
            lib.config.mori_huo;
            if (lib.config.mori_huo == undefined) {
                game.saveConfig('mori_huo', 0);
            }
            lib.config.mori_shui;
            if (lib.config.mori_shui == undefined) {
                game.saveConfig('mori_shui', 0);
            }
            lib.config.mori_lei;
            if (lib.config.mori_lei == undefined) {
                game.saveConfig('mori_lei', 0);
            }
            lib.config.mori_feng;
            if (lib.config.mori_feng == undefined) {
                game.saveConfig('mori_feng', 0);
            }
            lib.config.mori_tu;
            if (lib.config.mori_tu == undefined) {
                game.saveConfig('mori_tu', 0);
            }
            lib.config.mori_bing;
            if (lib.config.mori_bing == undefined) {
                game.saveConfig('mori_bing', 0);
            }
            lib.config.mori_kongjian;
            if (lib.config.mori_kongjian == undefined) {
                game.saveConfig('mori_kongjian', 0);
            }
            lib.config.mori_shijian;
            if (lib.config.mori_shijian == undefined) {
                game.saveConfig('mori_shijian', 0);
            }
            lib.group.push('mie');
            lib.translate.mie = '灭';
            lib.group.push('ai');
            lib.translate.ai = '爱';
            lib.characterTitle.wuyue_morizz = '<span style="color: #800000">投影分身</span>';
            lib.characterTitle.mori_alice = '<span style="color: #FFA500">至高神</span>';
            lib.characterTitle.mori_mieshitianshi = '<span style="color: #FFA500">终焉之神</span>';
            lib.characterTitle.mori_zhihuitians = '<span style="color: #FFA500">艾丽西亚</span>';
            lib.characterTitle.mori_shenling = '<span style="color: #FFA500">莫濑空沢</span>';
            lib.characterTitle.mori_xikadiya = '<span style="color: #FFA500">希卡蒂亚</span>';
            lib.characterTitle.mori_guangminqis = '<span style="color: #FFA500">终焉世界的庇护者</span>';
            lib.characterTitle.mori_guangmingshennv = '<span style="color: #EA7500">希丝黛塔</span>';
            lib.characterTitle.wuyue_shenshengqiss = '<span style="color: #EA7500">最后的骑士</span>';
            lib.characterTitle.ali_jiushizhu = '<span style="color: #EA7500">卡亚</span>';
            lib.characterTitle.mori_pomieqis = '<span style="color: #EA7500">黑潮屠杀者</span>';
            lib.characterTitle.mori_shenzhi = '<span style="color: #FFA500">神之子</span>';
            lib.characterTitle.mori_fuchouzhe = '<span style="color: #9F5000">斯塔里斯</span>';
            lib.characterTitle.wuyue_heiajqis = '<span style="color: #9F5000">沉沦者</span>';
            lib.characterTitle.miri_chiuuzhishou = '<span style="color: #AAAAFF">墨染画</span>';
            lib.characterTitle.miri_huimieshitu = '<span style="color: #AAAAFF">向纷纷</span>';
            lib.characterTitle.ali_zhiyintians = '<span style="color: #AAAAFF">隐居者</span>';
            lib.rank.rarity.junk.addArray(['aili_heichao', 'wuyue_moqhr', 'wuyue_moxgzr', 'wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'mori_hujiaoqishi']);
            lib.rank.rarity.rare.addArray(['wuyue_zhigaiqis', 'wuyue_yonghqis', 'mori_tkzj', 'mori_gtzj', 'wuyue_mohuazj', 'wuyue_mohuazj2', 'mori_yinyingqis', 'mori_pomieqis']);
            lib.rank.rarity.epic.addArray(['mori_xikadiya', 'mori_shenling', 'wuyue_shenshengqiss', 'wuyue_skgzr', 'wuyue_morishouwei', 'wuyue_zhanzkuil', 'wuyue_zhuangjijial', 'wuyue_heiajqis', 'mori_zhihuitians', 'mori_shoujiezhe', 'mori_shenzhi', 'mori_guangmingshennv', 'mori_fuchouzhe', 'aili_mrsz', 'miri_chiuuzhishou', 'miri_huimieshitu', 'ali_zhiyintians', 'ali_jiushizhu']);
            lib.rank.rarity.legend.addArray(['mori_alice', 'mori_shenmingqis', 'wuyue_morizz', 'wuyue_xunchas', 'aili_morihj', 'mor_guangminshenjiao', 'aili_morilail', 'mori_xunhuuhze', 'mori_mieshitianshi', 'mori_guangminqis', 'miri_zhaoxijushou']);
            game.playvs = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/末日浩劫/audio', fn);
                }
            };
            lib.skill._Shangdian_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.boss.name == 'mori_mieshitianshi';
                },
                content() {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue12.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/yinghe.jpg');
                    if (player == game.me) {
                        player.addSkill('mori_Shangdian');
                    }
                },
            };
            lib.skill._morisibai = {
                trigger: {
                    global: 'dieBegin',
                },
                forced: true,
                _priority: -Infinity,
                filter(event, player) {
                    return (
                        get.mode() == 'boss' &&
                        game.me.hp <= 0 &&
                        event.player.identity == 'cai' &&
                        game.countPlayer(function (current) {
                            return current.identity == 'cai';
                        }) <= 1
                    );
                },
                content() {
                    ui.backgroundMusic.src = 'extension/末日浩劫/audio/Gameover.mp3';
                },
            };
            lib.skill._Qiangming_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'aili_morilail' || game.boss.name == 'aili_morihj' || game.boss.name == 'mor_guangminshenjiao' || game.boss.name == 'mori_shenmingqis');
                },
                content() {
                    var q = lib.config.Qiangming;
                    if (player == game.me) {
                        if (q > 0 && q <= 2) {
                            game.me.gainMaxHp(1);
                            game.me.hp += 1;
                        }
                        if (q > 3 && q <= 10) {
                            game.me.gainMaxHp(2);
                            game.me.hp += 2;
                        }
                        if (q > 10 && q <= 30) {
                            game.me.gainMaxHp(3);
                            game.me.hp += 3;
                        }
                        if (q > 30 && q <= 60) {
                            game.me.gainMaxHp(4);
                            game.me.hp += 4;
                        }
                        if (q > 60 && q <= 120) {
                            game.me.gainMaxHp(5);
                            game.me.hp += 5;
                        }
                        if (q > 120) {
                            game.me.gainMaxHp(6);
                            game.me.hp += 6;
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Bilei_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'aili_morilail' || game.boss.name == 'aili_morihj' || game.boss.name == 'mor_guangminshenjiao' || game.boss.name == 'mori_shenmingqis');
                },
                content() {
                    var b = lib.config.Bilei;
                    if (player == game.me) {
                        if (b > 0 && b <= 2) {
                            game.me.changeHujia(1);
                        }
                        if (b > 2 && b <= 5) {
                            game.me.changeHujia(2);
                        }
                        if (b > 5 && b <= 8) {
                            game.me.changeHujia(3);
                        }
                        if (b > 8 && b <= 15) {
                            game.me.changeHujia(4);
                        }
                        if (b > 15 && b <= 30) {
                            game.me.changeHujia(5);
                        }
                        if (b > 30 && b <= 50) {
                            game.me.changeHujia(6);
                        }
                        if (b > 50 && b <= 75) {
                            game.me.changeHujia(7);
                        }
                        if (b > 75 && b <= 100) {
                            game.me.changeHujia(8);
                        }
                        if (b > 100 && b <= 125) {
                            game.me.changeHujia(9);
                        }
                        if (b > 125 && b <= 150) {
                            game.me.changeHujia(10);
                        }
                        if (b > 150 && b <= 175) {
                            game.me.changeHujia(11);
                        }
                        if (b > 175 && b <= 300) {
                            game.me.changeHujia(12);
                        }
                        if (b > 300) {
                            game.me.changeHujia(15);
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Tianyou_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'aili_morilail' || game.boss.name == 'aili_morihj' || game.boss.name == 'mor_guangminshenjiao' || game.boss.name == 'mori_shenmingqis');
                },
                content() {
                    var t = lib.config.Tianyou;
                    if (player == game.me) {
                        player.addSkill('mori_Tianyou');
                        player.storage.mori_Tianyou += t;
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Tianyou_player1 = {
                trigger: {
                    player: 'phaseDrawBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player.hasSkill('mori_Tianyou');
                },
                content() {
                    var t = lib.config.Tianyou;
                    if (player == game.me) {
                        if (t > 0 && t <= 10) {
                            event.num = Math.random();
                            if (event.num <= t / 10) trigger.num += 1;
                        }
                        if (t > 10 && t <= 50) {
                            event.num = Math.random();
                            if (event.num <= t / 50) trigger.num += 2;
                            else trigger.num += 1;
                        }
                        if (t > 50 && t <= 100) {
                            event.num = Math.random();
                            if (event.num <= t / 100) trigger.num += 3;
                            else trigger.num += 2;
                        }
                        if (t > 100 && t <= 500) {
                            event.num = Math.random();
                            if (event.num <= t / 500) trigger.num += 4;
                            else trigger.num += 3;
                        }
                        if (t > 500) {
                            event.num = Math.random();
                            if (event.num <= t / 1000) trigger.num += 5;
                            else trigger.num += 4;
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Ruili_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'aili_morilail' || game.boss.name == 'aili_morihj' || game.boss.name == 'mor_guangminshenjiao' || game.boss.name == 'mori_shenmingqis');
                },
                content() {
                    var d = lib.config.Ruili;
                    if (player == game.me) {
                        player.addSkill('mori_Ruili');
                        player.storage.mori_Ruili += d;
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Ruili_player1 = {
                trigger: {
                    source: 'damageBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && event.source.hasSkill('mori_Ruili');
                },
                content() {
                    var d = lib.config.Ruili;
                    if (trigger.source == game.me) {
                        if (d > 0 && d <= 10) {
                            event.num = Math.random();
                            if (event.num <= d / 10) trigger.num += 1;
                        }
                        if (d > 10 && d <= 20) {
                            event.num = Math.random();
                            if (event.num <= d / 20) trigger.num += 2;
                            else trigger.num += 1;
                        }
                        if (d > 20 && d <= 100) {
                            event.num = Math.random();
                            if (event.num <= d / 100) trigger.num += 3;
                            else trigger.num += 2;
                        }
                        if (d > 100 && d <= 500) {
                            event.num = Math.random();
                            if (event.num <= d / 500) trigger.num += 4;
                            else trigger.num += 3;
                        }
                        if (d > 500) {
                            event.num = Math.random();
                            if (event.num <= d / 3000) trigger.num += 5;
                            else trigger.num += 4;
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            game.tis2 = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
                dialog.classList.add('popped');
                ui.window.appendChild(dialog);
                var width = dialog.content.firstChild.firstChild.offsetWidth;
                if (width < 240) {
                    dialog._mod_height = -16;
                } else {
                    dialog.content.firstChild.style.textAlign = 'left';
                }
                dialog.style.width = width + 55 + 'px';
                lib.placePoppedDialog(dialog, {
                    clientX: (this.offsetLeft + this.offsetWidth / 6) * game.documentZoom,
                    clientY: (this.offsetTop + this.offsetHeight / 8) * game.documentZoom,
                });
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                dialog.style.left = 'calc(45%)';
                dialog.style.top = 'calc(5%)';
                setTimeout(function () {
                    dialog.delete();
                }, 6000);
            };
            game.tis = function (str) {
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
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
                dialog.style.top = 'calc(30%)';
                setTimeout(function () {
                    dialog.delete();
                }, 3500);
            };
            lib.arenaReady.push(function () {
                ui.chengjiu = ui.create.system('成就预览', null, true);
                lib.setPopped(
                    ui.chengjiu,
                    function () {
                        ui.system1.classList.add('shown');
                        ui.system2.classList.add('shown');
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        var xianshi = ui.create.div();
                        if (get.is.phoneLayout()) {
                            xianshi.style.height = '320px';
                        } else {
                            xianshi.style.height = '320px';
                        }
                        xianshi.style.overflow = 'scroll';
                        lib.setScroll(xianshi);
                        uiintro.contentContainer.style.overflow = 'hidden';
                        var dialog = ui.create.dialog('hidden');
                        dialog.listen(function (e) {
                            e.stopPropagation();
                        });
                        xianshi.innerHTML = '<h6>隐藏成就</h6><h6> <span class="bluetext"style="color:orange">初见末日 相爱相杀 薪火相传 神罚降临 黑暗救赎 踏入真实 孤独勇者 永恒冠军</h6><h6>普通成就</h6><h6><span class="bluetext"style="color:grey">一步之遥 被逮到了 天界叛徒 堕落守卫 骑士末路 一线光明 落花有意 打破命运</h6>';
                        dialog.appendChild(xianshi);
                        return dialog;
                    },
                    100,
                    400
                );
            });
            lib.skill._chengjiu_player = {
                trigger: {
                    global: 'dieBegin',
                },
                _priority: 999,
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.player == game.boss && !event.player.hasSkill('mori_Yongheng');
                },
                content() {
                    if (game.me != game.boss) {
                        if (trigger.player.name == 'wuyue_mohuazj') {
                            if (lib.config.Qiangming < 1 && lib.config.Cjmr < 1) {
                                game.tis('解锁隐藏成就:<span style="color: #FFA550"><初见末日></span>,强命值+1');
                                game.saveConfig('Cjmr', lib.config.Cjmr + 1);
                                game.saveConfig('Qiangming', lib.config.Qiangming + 1);
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.01) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 5);
                                        game.tis('击败boss,获得命运点数:5');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 5);
                                    game.tis('击败boss,获得命运点数:5');
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_fuchouzhe') {
                            for (var i of game.players) {
                                if (i.name == 'mori_guangmingshennv' && lib.config.Xaxs < 1) {
                                    game.saveConfig('Xaxs', lib.config.Xaxs + 1);
                                    game.saveConfig('Bilei', lib.config.Bilei + 3);
                                    game.tis('解锁隐藏成就:<span style="color: #FFA550"><相爱相杀></span>,守护值+3');
                                } else {
                                    if (lib.config.ZHENSHI >= 10) {
                                        event.num = Math.random();
                                        if (event.num <= 0.02) {
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                        } else {
                                            game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                            game.tis('击败boss,获得命运点数:10');
                                        }
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                        game.tis('击败boss,获得命运点数:10');
                                    }
                                }
                            }
                        }
                        if (trigger.player.name == 'wuyue_mohuazj2') {
                            for (var i of game.players) {
                                if (i.name == 'wuyue_zhigaiqis' && lib.config.Xhxc < 1) {
                                    game.saveConfig('Xhxc', lib.config.Xhxc + 1);
                                    game.saveConfig('Bilei', lib.config.Bilei + 3);
                                    game.tis('解锁隐藏成就:<span style="color: #FFA550"><薪火相传></span>,守护值+3');
                                } else {
                                    if (lib.config.ZHENSHI >= 10) {
                                        event.num = Math.random();
                                        if (event.num <= 0.02) {
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                        } else {
                                            game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                            game.tis('击败boss,获得命运点数:10');
                                        }
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                        game.tis('击败boss,获得命运点数:10');
                                    }
                                }
                            }
                        }
                        if (trigger.player.name == 'aili_mrsz') {
                            if (lib.config.ZHENSHI < 1 && lib.config.Ybzy < 1) {
                                game.tis('完成普通成就:<一步之遥>,命运点数+500');
                                game.saveConfig('Ybzy', lib.config.Ybzy + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.025) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                        game.tis('击败boss,获得命运点数:15');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                    game.tis('击败boss,获得命运点数:15');
                                }
                            }
                        }
                        if (trigger.player.name == 'miri_huimieshitu') {
                            game.saveConfig('Mingyun', lib.config.Mingyun + 40);
                            game.tis('击败本关boss,获得命运点数:40');
                        }
                        if (trigger.player.name == 'wuyue_morizz') {
                            for (var i of game.players) {
                                if (lib.config.Sfjl < 1 && (i.name == 'mori_xikadiya' || i.name == 'mori_shenling' || i.name == 'mori_zhihuitians')) {
                                    game.tis('解锁隐藏成就:<span style="color: #FFA550"><神罚降临></span>,天运值+3');
                                    game.saveConfig('Sfjl', lib.config.Sfjl + 1);
                                    game.saveConfig('Tianyun', lib.config.Tianyun + 3);
                                } else {
                                    if (lib.config.ZHENSHI >= 10) {
                                        event.num = Math.random();
                                        if (event.num <= 0.2) {
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('<span style="color: #FFA550">击败本关最终boss,获得真实点数:1</span>');
                                        } else {
                                            game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                            game.tis('击败本关最终boss,获得命运点数:100');
                                        }
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                        game.tis('击败本关最终boss,获得命运点数:100');
                                    }
                                }
                            }
                        }
                        if (trigger.player.name == 'wuyue_skgzr') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.01) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 8);
                                    game.tis('击败boss,获得命运点数:8');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 8);
                                game.tis('击败本关boss,获得命运点数:8');
                            }
                        }
                        if (trigger.player.name == 'miri_zhaoxijushou') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.03) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                    game.tis('击败boss,获得命运点数:15');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                game.tis('击败本关boss,获得命运点数:15');
                            }
                        }
                        if (trigger.player.name == 'wuyue_zhuangjijial') {
                            if (lib.config.Bddl < 1) {
                                for (var i of game.players) {
                                    if (i.name == 'wuyue_zhanzkuil') {
                                        game.tis('完成普通成就:<被逮到了>,命运点数+500');
                                        game.saveConfig('Bddl', lib.config.Bddl + 1);
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                                    }
                                }
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.03) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 12);
                                        game.tis('击败boss,获得命运点数:12');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 12);
                                    game.tis('击败本关boss,获得命运点数:12');
                                }
                            }
                        }
                        if (trigger.player.name == 'wuyue_morishouwei') {
                            for (var i of game.players) {
                                if (lib.config.Dlsw < 1 && i.name == 'mori_shoujiezhe') {
                                    game.tis('完成普通成就:<堕落守卫>,命运点数+500');
                                    game.saveConfig('Dlsw', lib.config.Dlsw + 1);
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                                } else {
                                    if (lib.config.ZHENSHI >= 10) {
                                        event.num = Math.random();
                                        if (event.num <= 0.035) {
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                        } else {
                                            game.saveConfig('Mingyun', lib.config.Mingyun + 20);
                                            game.tis('击败boss,获得命运点数:20');
                                        }
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 20);
                                        game.tis('击败本关boss,获得命运点数:20');
                                    }
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_xunhuuhze') {
                            if (lib.config.Tjpt < 1) {
                                game.tis('完成普通成就:<天界叛徒>,命运点数+500');
                                game.saveConfig('Tjpt', lib.config.Tjpt + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.08) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 60);
                                        game.tis('击败boss,获得命运点数:60');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 60);
                                    game.tis('击败本关boss,获得命运点数:60');
                                }
                            }
                        }
                        if (trigger.player.name == 'wuyue_xunchas') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.1) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败本关最终boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                    game.tis('击败本关最终boss,获得命运点数:50');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                game.tis('击败本关最终boss,获得命运点数:50');
                            }
                        }
                        if (trigger.player.name == 'wuyue_shoihuqs') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.01) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 12);
                                    game.tis('击败boss,获得命运点数:12');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 12);
                                game.tis('击败本关boss,获得命运点数:12');
                            }
                        }
                        if (trigger.player.name == 'wuuue_weiguangqis') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.02) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                    game.tis('击败boss,获得命运点数:15');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 15);
                                game.tis('击败本关boss,获得命运点数:15');
                            }
                        }
                        if (trigger.player.name == 'wuyue_shenshengqiss') {
                            if (lib.config.Qsml < 1) {
                                game.tis('完成普通成就:<骑士末路>,命运点数+500');
                                game.saveConfig('Qsml', lib.config.Qsml + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 22);
                                game.tis('击败本关boss,获得命运点数:22');
                            }
                        }
                        if (trigger.player.name == 'wuyue_heiajqis') {
                            for (var i of game.players) {
                                if (lib.config.Hnjs < 1 && i.name == 'mori_alice') {
                                    game.saveConfig('Hnjs', lib.config.Hnjs + 1);
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.saveConfig('Tianyun', lib.config.Tianyun + 2);
                                    game.tis('解锁隐藏成就:<span style="color: #FFA550"><黑暗救赎></span>,真实值+1,天运值+2');
                                    trigger.player.cs1s('神啊,你来迎接我了么？', 3);
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 45);
                                    game.tis('击败本关最终boss,获得命运点数:45');
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_guangmingshennv') {
                            for (var i of game.players) {
                                if (lib.config.Xaxs < 1 && i.name == 'fuchouzhe') {
                                    game.saveConfig('Xaxs', lib.config.Xaxs + 1);
                                    game.saveConfig('Bilei', lib.config.Bilei + 3);
                                    game.tis('解锁隐藏成就:<span style="color: #FFA550"><相爱相杀></span>,守护值+3');
                                } else {
                                    if (lib.config.ZHENSHI >= 10) {
                                        event.num = Math.random();
                                        if (event.num <= 0.05) {
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                        } else {
                                            game.saveConfig('Mingyun', lib.config.Mingyun + 25);
                                            game.tis('击败boss,获得命运点数:25');
                                        }
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 25);
                                        game.tis('击败本关boss,获得命运点数:25');
                                    }
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_shenzhi') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.05) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                    game.tis('击败boss,获得命运点数:50');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                game.tis('击败本关boss,获得命运点数:50');
                            }
                        }
                        if (trigger.player.name == 'mori_guangminqis') {
                            if (lib.config.Yxgm < 1) {
                                game.tis('完成普通成就:<一线光明>,命运点数+500');
                                game.saveConfig('Yxgm', lib.config.Yxgm + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.3) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                        game.tis('击败boss,获得命运点数:100');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                    game.tis('击败本关最终boss,获得命运点数:100');
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_tkzj') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.01) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                    game.tis('击败boss,获得命运点数:10');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                game.tis('击败本关boss,获得命运点数:10');
                            }
                        }
                        if (trigger.player.name == 'mori_shenling') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.03) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 25);
                                    game.tis('击败boss,获得命运点数:25');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 25);
                                game.tis('击败本关boss,获得命运点数:25');
                            }
                        }
                        if (trigger.player.name == 'mori_zhihuitians') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.05) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                    game.tis('击败boss,获得命运点数:50');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                game.tis('击败本关boss,获得命运点数:50');
                            }
                        }
                        if (trigger.player.name == 'mori_xikadiya') {
                            if (lib.config.Lhyy < 1) {
                                game.saveConfig('Lhyy', lib.config.Lhyy + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                                game.tis('解锁普通成就<落花有意>,命运值+500');
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.05) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 40);
                                        game.tis('击败boss,获得命运点数:40');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 40);
                                    game.tis('击败本关boss,获得命运点数:40');
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_alice') {
                            if (lib.config.ZHENSHI < 10 && lib.config.Trzs < 1) {
                                trigger.player.cs1s('<span style="color: #FFA550">你们成功击败了我呢,不过,在真实中,希望还能再次看到<你>,呵呵呵......</span>', 5);
                                game.saveConfig('Trzs', lib.config.Trzs + 1);
                                game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 1000);
                                game.tis('<span style="color: #7B7B7B">完成隐藏成就,<踏入真实>,真实值+1,命运值+1000.</span>');
                            }
                            if (lib.config.ZHENSHI >= 10 && lib.config.Gdyz < 1) {
                                trigger.player.cs1s('<span style="color: #FFA550">那么这次是真的结束了,恭喜你....拯救了世界？呵呵呵呵.........</span>', 5);
                                game.saveConfig('Gdyz', lib.config.Gdyz + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 3000);
                                game.tis('<span style="color: #7B7B7B">完成隐藏成就,<孤独勇者>,命运值+3000</span>');
                            }
                        }
                        if (trigger.player.name == 'mori_zhuguangzhe') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.01) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                    game.tis('击败boss,获得命运点数:10');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 10);
                                game.tis('击败本关boss,获得命运点数:10');
                            }
                        }
                        if (trigger.player.name == 'mori_minglitianshi') {
                            if (lib.config.Kxdmy < 1) {
                                game.saveConfig('Kxdmy', lib.config.Kxdmy + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 500);
                                game.tis('解锁普通成就<打破命运>,命运值+500');
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.03) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 35);
                                        game.tis('击败boss,获得命运点数:35');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 35);
                                    game.tis('击败本关boss,获得命运点数:35');
                                }
                            }
                        }
                        if (trigger.player.name == 'mori_pojunzhanji') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.04) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                    game.tis('击败boss,获得命运点数:50');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                game.tis('击败本关boss,获得命运点数:50');
                            }
                        }
                        if (trigger.player.name == 'mori_zhixutianshi') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.05) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                    game.tis('击败boss,获得命运点数:50');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 50);
                                game.tis('击败本关boss,获得命运点数:50');
                            }
                        }
                        if (trigger.player.name == 'ali_zhiyintians') {
                            if (lib.config.ZHENSHI >= 10) {
                                event.num = Math.random();
                                if (event.num <= 0.05) {
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                    game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 65);
                                    game.tis('击败boss,获得命运点数:65');
                                }
                            } else {
                                game.saveConfig('Mingyun', lib.config.Mingyun + 65);
                                game.tis('击败本关boss,获得命运点数:65');
                            }
                        }
                        if (trigger.player.name == 'ali_jiushizhu') {
                            if (lib.config.Jssndhy < 1) {
                                game.saveConfig('Jssndhy', lib.config.Jssndhy + 1);
                                game.saveConfig('Mingyun', lib.config.Mingyun + 2000);
                                game.tis('<span style="color: #7B7B7B">完成隐藏成就,<救世是你的谎言>,命运值+2000.</span>');
                            } else {
                                if (lib.config.ZHENSHI >= 10) {
                                    event.num = Math.random();
                                    if (event.num <= 0.05) {
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                        game.tis('<span style="color: #FFA550">击败boss,获得真实点数:1</span>');
                                    } else {
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                        game.tis('击败boss,获得命运点数:100');
                                    }
                                } else {
                                    game.saveConfig('Mingyun', lib.config.Mingyun + 100);
                                    game.tis('击败本关boss,获得命运点数:100');
                                }
                            }
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            lib.arenaReady.push(function () {
                ui.mingyun = ui.create.system('救世记录', null, true);
                lib.setPopped(
                    ui.mingyun,
                    function () {
                        ui.system1.classList.add('shown');
                        ui.system2.classList.add('shown');
                        var uiintro = ui.create.dialog('hidden');
                        uiintro.listen(function (e) {
                            e.stopPropagation();
                        });
                        var xianshi = ui.create.div();
                        if (get.is.phoneLayout()) {
                            xianshi.style.height = '460px';
                        } else {
                            xianshi.style.height = '460px';
                        }
                        xianshi.style.overflow = 'scroll';
                        lib.setScroll(xianshi);
                        uiintro.contentContainer.style.overflow = 'hidden';
                        var dialog = ui.create.dialog('hidden');
                        dialog.listen(function (e) {
                            e.stopPropagation();
                        });
                        xianshi.innerHTML = '<h6>命运值:          <span class="bluetext"style="color:white">' + lib.config.Mingyun + '</h6><h6>真实值:          <span class="bluetext"style="color:orange">' + lib.config.ZHENSHI + '</h6><h6>强命值:          <span class="bluetext"style="color:orange">' + lib.config.Qiangming + '</h6><h6>天运值:          <span class="bluetext"style="color:orange">' + lib.config.Tianyou + '</h6><h6>锐利值:          <span class="bluetext"style="color:orange">' + lib.config.Ruili + '</h6><h6>守护值:          <span class="bluetext"style="color:orange">' + lib.config.Bilei + '</h6>';
                        dialog.appendChild(xianshi);
                        return dialog;
                    },
                    100,
                    300
                );
            });
            lib.skill._yonghenjingji_BOSS = {
                trigger: {
                    global: ['gameStart'],
                },
                popup: false,
                forced: true,
                _priority: 30,
                mode: ['boss'], //QQQ
                filter(event, player) {
                    return game.boss.name == 'mor_ashenminjinjichang' && game.boss == player;
                },
                content() {
                    'step 0';
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue12.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg4.jpg');
                    game.me.init('ali_jiushizhu');
                    game.me.gainMaxHp(-1);
                    ('step 1');
                    ('step 2');
                    ('step 3');
                    ('step 4');
                    ('step 5');
                    ('step 6');
                    player.init('aili_heichao');
                    player.addSkill('mori_Yongheng');
                    player.storage.mori_Yongheng += 0;
                    event.goto(19);
                    ('step 7');
                    var y = lib.config.Yongheng;
                    if (y > 0) {
                        game.me
                            .chooseControl('继续挑战', '重新挑战', '取消', function () {
                                if (result.control == '继续挑战') return -10;
                                if (result.control == '重新挑战') return -10;
                                if (result.control == '取消') return 10;
                            })
                            .set('prompt', '是否延续上次的挑战？');
                    } else {
                        event.goto(9);
                    }
                    ('step 8');
                    if (result.control == '继续挑战') {
                        event.goto(9);
                    }
                    if (result.control == '重新挑战') {
                        game.saveConfig('Yongheng', lib.config.Yongheng - lib.config.Yongheng);
                        game.saveConfig('Skillyong', lib.config.Skillyong - lib.config.Skillyong);
                        game.saveConfig('Sminyong', lib.config.Sminyong - lib.config.Sminyong);
                        event.goto(9);
                    }
                    if (result.control == '取消') {
                        game.over();
                        event.finish();
                    }
                    ('step 9');
                    if (lib.config.Yongheng < 1) {
                        game.saveConfig('Skillyong', lib.config.Skillyong - lib.config.Skillyong + 2);
                        var s = lib.config.Skillyong;
                        event.num = s;
                    } else {
                        var m = lib.config.Sminyong;
                        var s = lib.config.Skillyong;
                        game.me.gainMaxHp(m);
                        game.me.recover(m);
                        event.num = s;
                    }
                    ('step 10');
                    var y = lib.config.Yongheng;
                    if (y < 1) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_zhuguangzhe', 'ali_jiushizhu'];
                    }
                    if (y >= 1 && y <= 20) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'wuyue_zhigaiqis', 'wuyue_yonghqis', 'mori_zhuguangzhe', 'mori_yinyingqis', 'mori_gtzj', 'ali_jiushizhu'];
                    }
                    if (y > 20 && y <= 50) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'wuyue_zhigaiqis', 'wuyue_yonghqis', 'wuyue_shenshengqiss', 'mori_gtzj', 'mori_zhuguangzhe', 'mori_shenling', 'mori_yinyingqis', 'mori_pomieqis', 'ali_jiushizhu'];
                    }
                    var s = lib.config.Skillyong;
                    event.card = list.randomGets(s);
                    ('step 11');
                    if (event.card.length) {
                        game.me
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['选择一张武将牌', [event.card, 'character']]);
                    }
                    ('step 12');
                    var link = result.links[0];
                    var list = [];
                    var skills = lib.character[link][3];
                    for (var i = 0; i < skills.length; i++) {
                        var info = lib.skill[skills[i]];
                        list.push(skills[i]);
                    }
                    list.push('cancel2');
                    game.me
                        .chooseControl(list)
                        .set('prompt', '请选择一个要获得的技能,<font color=#FF0000>点取消返回上一步</font>')
                        .set('ai', function () {
                            return 0;
                        });
                    ('step 13');
                    if (result.control == 'cancel2') event.goto(10);
                    else game.me.addSkill(result.control);
                    ('step 14');
                    event.num--;
                    if (event.num > 0) {
                        event.goto(10);
                    }
                    ('step 15');
                    var d = [];
                    var s = lib.config.Skillyong;
                    var b = game.me.getSkills(true, false);
                    for (var l = 0; l < b.length; l++) {
                        if (!lib.translate[b[l]] || !lib.translate[b[l] + '_info']) continue;
                        d.push(b[l]);
                    }
                    if (d.length > s) {
                        var c = [];
                        for (var j = 0; j < d.length; j++) {
                            c.push(d[j]);
                        }
                        game.me
                            .chooseControl(c)
                            .set('prompt', '请选择一个要失去的技能')
                            .set('ai', function () {
                                return 0;
                            });
                    } else event.goto(17);
                    ('step 16');
                    game.me.removeSkill(result.control);
                    ('step 17');
                    var y = lib.config.Yongheng;
                    if (y > 0) {
                        game.saveConfig('Yongheng', lib.config.Yongheng - 2);
                        if (y > 10 && y <= 20) {
                            player.addFellow('wuyue_moxgzr');
                        }
                        if (y > 20 && y <= 60) {
                            player.addFellow('wuyue_moxgzr');
                            player.addFellow('wuyue_moqhr');
                        }
                        game.me.draw(4);
                        player.die();
                    }
                    ('step 18');
                    event.finish();
                    ('step 19');
                    player.addFellow('ali_jiushizhu');
                    for (var i of game.players) {
                        if (i.name == 'ali_jiushizhu' && i != player) {
                            var h = i.countCards('he');
                            i.chooseToDiscard(h, 'he', true);
                            i.side = false;
                            i.identity = 'cai';
                            i.setIdentity('cai');
                            game.addVideo('setIdentity', i, 'cai');
                            i._trueMe = game.me;
                            i.cs1s('这一次,我一定会拯救你们.....', 3.5);
                            i.clearSkills();
                            i.phaseUse();
                            i.gainMaxHp(-1);
                        }
                    }
                    ('step 20');
                    event.goto(7);
                },
            };
            lib.skill._Yongheng_Boss = {
                trigger: {
                    global: 'dieBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.player == game.boss && event.player.hasSkill('mori_Yongheng');
                },
                content() {
                    if (lib.config.Yongheng > 50) {
                        if (lib.config.Gjqs < 1) {
                            game.saveConfig('Gjqs', lib.config.Gjqs + 1);
                            game.saveConfig('Tianyun', lib.config.Tianyun + 5);
                            game.tis('解锁隐藏成就:<span style="color: #FFA550"><永恒冠军></span>,天运值+5');
                        }
                        game.tis2('<span style="color: #7B7B7B">你已经通关,命运值+2000</span>');
                        game.saveConfig('Mingyun', lib.config.Mingyun + 2000);
                        game.saveConfig('Yongheng', lib.config.Yongheng - lib.config.Yongheng);
                        game.saveConfig('Skillyong', lib.config.Skillyong - lib.config.Skillyong);
                        game.saveConfig('Sminyong', lib.config.Sminyong - lib.config.Sminyong);
                    } else {
                        game.saveConfig('Yongheng', lib.config.Yongheng + 1);
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._Yongheng_Bossk = {
                trigger: {
                    player: 'dieBefore',
                },
                forced: true,
                _priority: 10,
                fixed: true,
                filter(event, player) {
                    return event.player == game.boss && event.player.hasSkill('mori_Yongheng') && lib.config.Yongheng <= 50 && event.player.storage.mori_Yongheng > 0;
                },
                content() {
                    'step 0';
                    var y = lib.config.Yongheng;
                    if (lib.config.Yongheng == 5 || lib.config.Yongheng == 10 || lib.config.Yongheng == 15 || lib.config.Yongheng == 20 || lib.config.Yongheng == 25 || lib.config.Yongheng == 30 || lib.config.Yongheng == 35 || lib.config.Yongheng == 40 || lib.config.Yongheng == 45 || lib.config.Yongheng == 50) {
                        game.saveConfig('Skillyong', lib.config.Skillyong + 1);
                        game.saveConfig('Mingyun', lib.config.Mingyun + (30 / 5) * y);
                        game.tis2('<span style="color: #7B7B7B">你已经累计通过5关,获得命运值+</span>' + (30 / 5) * y + '<span style="color: #7B7B7B">点奖励</span>');
                        game.tis('<span style="color: #7B7B7B">技能最大持有数+1,现在最大携带数为:</span>' + y + '<span style="color: #7B7B7B">个技能</span>');
                    } else {
                        var n = [1, 2, 3].randomGet();
                        if (n == 1) event.goto(8);
                        if (n == 2) event.goto(9);
                        if (n == 3) event.goto(1);
                    }
                    ('step 1');
                    var y = lib.config.Yongheng;
                    if (y < 1) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_zhuguangzhe', 'ali_jiushizhu'];
                    }
                    if (y >= 1 && y <= 20) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'wuyue_zhigaiqis', 'wuyue_yonghqis', 'mori_zhuguangzhe', 'mori_yinyingqis', 'mori_gtzj', 'ali_jiushizhu'];
                    }
                    if (y > 20 && y <= 50) {
                        var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'wuyue_zhigaiqis', 'wuyue_yonghqis', 'wuyue_shenshengqiss', 'mori_gtzj', 'mori_zhuguangzhe', 'mori_shenling', 'mori_yinyingqis', 'mori_pomieqis', 'ali_jiushizhu'];
                    }
                    event.card = list.randomGets(2);
                    ('step 2');
                    game.me
                        .chooseButton(true)
                        .set('ai', function (button) {
                            return get.rank(button.link, true) - lib.character[button.link][2];
                        })
                        .set('createDialog', ['选择一张武将牌', [event.card, 'character']]);
                    ('step 3');
                    var link = result.links[0];
                    var list = [];
                    var skills = lib.character[link][3];
                    for (var i = 0; i < skills.length; i++) {
                        var info = lib.skill[skills[i]];
                        list.push(skills[i]);
                    }
                    game.me
                        .chooseControl(list)
                        .set('prompt', '请选择一个要获得的技能')
                        .set('ai', function () {
                            return 0;
                        });
                    ('step 4');
                    if (result.control) game.me.addSkill(result.control);
                    ('step 5');
                    var d = [];
                    var s = lib.config.Skillyong;
                    var b = game.me.getSkills(true, false);
                    for (var l = 0; l < b.length; l++) {
                        if (!lib.translate[b[l]] || !lib.translate[b[l] + '_info']) continue;
                        d.push(b[l]);
                    }
                    if (d.length > s) {
                        var c = [];
                        for (var j = 0; j < d.length; j++) {
                            c.push(d[j]);
                        }
                        game.me
                            .chooseControl(c)
                            .set('prompt', '请选择一个要失去的技能')
                            .set('ai', function () {
                                return 0;
                            });
                    } else event.goto(7);
                    ('step 6');
                    game.me.removeSkill(result.control);
                    ('step 7');
                    event.finish();
                    ('step 8');
                    game.tis('过关奖励,最大体力值+1,体力值+2');
                    game.saveConfig('Sminyong', lib.config.Sminyong + 1);
                    game.me.gainMaxHp();
                    game.me.recover(2);
                    game.me.draw(2);
                    event.finish();
                    ('step 9');
                    game.tis('过关奖励,获得五张手牌');
                    game.me.draw(5);
                },
            };
            lib.skill._Yongheng_Bossi = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -999,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.hasSkill('mori_Yongheng') && lib.config.Yongheng <= 40;
                },
                content() {
                    'step 0';
                    'step 1';
                    ('step 2');
                    var y = lib.config.Yongheng;
                    var n = [1, 2, 3, 4, 5].randomGet();
                    event.num = n;
                    game.tis2('<span style="color: #7B7B7B">闯关成功,现在是第</span>' + y + '<span style="color: #7B7B7B">关</span>');
                    if (y < 5) {
                        var n = [1, 2, 3, 4, 5, 6].randomGet();
                        if (n == 1) game.changeBossQ('aili_heichao');
                        if (n == 2) game.changeBossQ('wuyue_moxgzr');
                        if (n == 3) game.changeBossQ('wuyue_moqhr');
                        if (n == 4) game.changeBossQ('mori_hujiaoqishi');
                        if (n == 5) game.changeBossQ('mori_xingyueqis');
                        if (n == 6) game.changeBossQ('mori_zhuguangzhe');
                    }
                    if (y >= 5 && y < 10) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].randomGet();
                        if (n == 1) game.changeBossQ('aili_heichao');
                        if (n == 2) game.changeBossQ('wuyue_moxgzr');
                        if (n == 3) game.changeBossQ('wuyue_moqhr');
                        if (n == 4) game.changeBossQ('mori_hujiaoqishi');
                        if (n == 5) game.changeBossQ('mori_xingyueqis');
                        if (n == 6) game.changeBossQ('wuyue_shoihuqs');
                        if (n == 7) game.changeBossQ('wuyue_jianxiqis');
                        if (n == 8) game.changeBossQ('wuyue_poxieqis');
                        if (n == 9) game.changeBossQ('wuyue_rongyqoqis');
                        if (n == 10) game.changeBossQ('wuuue_weiguangqis');
                        if (n == 11) game.changeBossQ('mori_pomieqis');
                        if (n == 12) game.changeBossQ('mori_yinyingqis');
                    }
                    if (y == 10) {
                        var n = [1, 2].randomGet();
                        if (n == 1) game.changeBossQ('wuyue_mohuazj');
                        if (n == 2) game.changeBossQ('wuyue_mohuazj2');
                    }
                    if (y > 10 && y < 20) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].randomGet();
                        if (n == 1) game.changeBossQ('wuyue_mohuazj');
                        if (n == 2) game.changeBossQ('wuyue_mohuazj2');
                        if (n == 3) game.changeBossQ('wuyue_zhigaiqis');
                        if (n == 4) game.changeBossQ('wuyue_shenshengqiss');
                        if (n == 5) game.changeBossQ('wuyue_yonghqis');
                        if (n == 6) game.changeBossQ('mori_hujiaoqishi');
                        if (n == 7) game.changeBossQ('mori_xingyueqis');
                        if (n == 8) game.changeBossQ('wuyue_shoihuqs');
                        if (n == 9) game.changeBossQ('mori_tkzj');
                        if (n == 10) game.changeBossQ('mori_pojunzhanji');
                        if (n == 11) game.changeBossQ('mori_pomieqis');
                        if (n == 12) game.changeBossQ('wuuue_weiguangqis');
                    }
                    if (y == 20) {
                        game.changeBossQ('wuyue_heiajqis');
                    }
                    if (y > 20 && y < 30) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8].randomGet();
                        if (n == 1) game.changeBossQ('awuyue_mohuazj');
                        if (n == 2) game.changeBossQ('wuyue_mohuazj2');
                        if (n == 3) game.changeBossQ('mori_fuchouzhe');
                        if (n == 4) game.changeBossQ('wuyue_shenshengqiss');
                        if (n == 5) game.changeBossQ('wuyue_skgzr');
                        if (n == 6) game.changeBossQ('mori_pojunzhanji');
                        if (n == 7) game.changeBossQ('mori_tkzj');
                        if (n == 8) game.changeBossQ('wuuue_weiguangqis');
                    }
                    if (y == 30) {
                        game.changeBossQ('aili_mrsz');
                    }
                    if (y > 30 && y < 40) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8].randomGet();
                        if (n == 1) game.changeBossQ('awuyue_mohuazj');
                        if (n == 2) game.changeBossQ('wuyue_mohuazj2');
                        if (n == 3) game.changeBossQ('mori_fuchouzhe');
                        if (n == 4) game.changeBossQ('wuyue_shenshengqiss');
                        if (n == 5) game.changeBossQ('wuyue_skgzr');
                        if (n == 6) game.changeBossQ('wuyue_shoihuqs');
                        if (n == 7) game.changeBossQ('mori_tkzj');
                        if (n == 8) game.changeBossQ('wuuue_weiguangqis');
                    }
                    if (y == 40) {
                        game.changeBossQ('wuyue_zhuangjijial');
                    }
                    if (y > 40 && y < 50) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8].randomGet();
                        if (n == 1) game.changeBossQ('mori_shenzhi');
                        if (n == 2) game.changeBossQ('miri_zhaoxijushou');
                        if (n == 3) game.changeBossQ('mori_zhihuitians');
                        if (n == 4) game.changeBossQ('mori_xunhuuhze');
                        if (n == 5) game.changeBossQ('wuyue_skgzr');
                        if (n == 6) game.changeBossQ('wuyue_zhanzkuil');
                        if (n == 7) game.changeBossQ('mori_shoujiezhe');
                        if (n == 8) game.changeBossQ('mori_guangmingshennv');
                    }
                    if (y == 50) {
                        game.changeBossQ('wuyue_morishouwei');
                    }
                    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].randomGet();
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue' + n + '.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg' + n + '.jpg');
                    game.boss.addSkill('mori_Yongheng');
                    game.boss.storage.mori_Yongheng += 1;
                    ('step 3');
                    var y = lib.config.Yongheng;
                    if (y <= 10) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].randomGet();
                        if (n == 1) game.boss.addSkill('aili_canbao');
                        if (n == 2) game.boss.addSkill('wuyue_jijiaz');
                        if (n == 3) game.boss.addSkill('aili_jixiehua');
                        if (n == 4) game.boss.addSkill('aili_banr');
                        game.boss.gainMaxHp(y - game.boss.maxHp);
                        game.boss.recover(y - game.boss.hp);
                    }
                    if (y > 10 && y <= 20) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18].randomGet();
                        if (n == 1) game.boss.addSkill('aili_canbao');
                        if (n == 2) game.boss.addSkill('aili_benneng');
                        if (n == 3) game.boss.addSkill('wuyue_jijiaz');
                        if (n == 4) game.boss.addSkill('aili_jixiehua');
                        if (n == 5) game.boss.addSkill('aili_jushou');
                        if (n == 6) game.boss.addSkill('aili_banr');
                        game.boss.gainMaxHp(y - 5 - game.boss.maxHp);
                        game.boss.recover(y - 5 - game.boss.hp);
                    }
                    if (y > 20 && y <= 30) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].randomGet();
                        if (n == 1) game.boss.addSkill('aili_canbao');
                        if (n == 2) game.boss.addSkill('aili_benneng');
                        if (n == 3) game.boss.addSkill('wuyue_jijiaz');
                        if (n == 4) game.boss.addSkill('aili_jixiehua');
                        if (n == 5) game.boss.addSkill('aili_jushou');
                        if (n == 6) game.boss.addSkill('qili_xn');
                        if (n == 7) game.boss.addSkill('aili_liangzhizhuanh');
                        if (n == 8) game.boss.addSkill('aili_banr');
                        game.boss.gainMaxHp(y - 10 - game.boss.maxHp);
                        game.boss.recover(y - 10 - game.boss.hp);
                    }
                    if (y > 30 && y <= 50) {
                        var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].randomGet();
                        if (n == 1) game.boss.addSkill('aili_canbao');
                        if (n == 2) game.boss.addSkill('aili_benneng');
                        if (n == 3) game.boss.addSkill('wuyue_jijiaz');
                        if (n == 4) game.boss.addSkill('aili_jixiehua');
                        if (n == 5) game.boss.addSkill('aili_jushou');
                        if (n == 6) game.boss.addSkill('qili_xn');
                        if (n == 7) game.boss.addSkill('aili_liangzhizhuanh');
                        if (n == 8) game.boss.addSkill('aili_banr');
                        game.boss.gainMaxHp(y - 15 - game.boss.maxHp);
                        game.boss.recover(y - 15 - game.boss.hp);
                    }
                    ('step 4');
                    event.num--;
                    if (event.num > 0) {
                        event.goto(3);
                    }
                    ('step 5');
                    var y = lib.config.Yongheng;
                    if (y == 10) {
                        game.boss.addFellow('aili_heichao');
                    }
                    if (y > 10 && y < 20) {
                        var n = [1, 2, 3, 4, 5].randomGet();
                        if (n == 1) game.boss.addFellow('aili_heichao');
                        if (n == 2) game.boss.addFellow('wuyue_jianxiqis');
                        if (n == 3) game.boss.addFellow('wuyue_shoihuqs');
                        if (n == 4) game.boss.addFellow('wuyue_poxieqis');
                        if (n == 5) game.boss.addFellow('wuyue_rongyqoqis');
                    }
                    if (y == 20) {
                        game.boss.addFellow('wuyue_moqhr');
                        game.boss.addFellow('wuyue_moxgzr');
                    }
                    if (y > 20 && y <= 50) {
                        var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                        if (n == 1) game.boss.addFellow('aili_heichao');
                        if (n == 2) game.boss.addFellow('wuyue_jianxiqis');
                        if (n == 3) game.boss.addFellow('wuyue_shoihuqs');
                        if (n == 4) game.boss.addFellow('wuyue_poxieqis');
                        if (n == 5) game.boss.addFellow('wuyue_rongyqoqis');
                        if (n == 6) game.boss.addFellow('wuyue_moxgzr');
                        if (n == 7) game.boss.addFellow('wuyue_moqhr');
                        var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                        if (n == 1) game.boss.addFellow('aili_heichao');
                        if (n == 2) game.boss.addFellow('wuyue_jianxiqis');
                        if (n == 3) game.boss.addFellow('wuyue_shoihuqs');
                        if (n == 4) game.boss.addFellow('wuyue_poxieqis');
                        if (n == 5) game.boss.addFellow('wuyue_rongyqoqis');
                        if (n == 6) game.boss.addFellow('wuyue_moxgzr');
                        if (n == 7) game.boss.addFellow('wuyue_moqhr');
                    }
                    ('step 6');
                },
            };
            lib.skill._morizhuzai_BOSS = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'aili_morilail';
                },
                content() {
                    'step 0';
                    ui.backgroundMusic.src = 'extension/末日浩劫/audio/mori.mp3';
                    ('step 1');
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue4.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (27).jpg');
                    player.removeSkill('末日主宰');
                    ('step 2');
                    player.cs1s('吾,末日主宰!!');
                    ('step 3');
                    player.cs1s('在此宣布,尔等之灭亡', 4);
                    ('step 4');
                    game.playvs('morizhuzhai1');
                    player.cs1s('末日即将亲临,尔等可感到兴奋', 4);
                    ('step 5');
                    player.smoothAvatar();
                    player.init('wuyue_mohuazj');
                    _status.noswap = true;
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        player.gainMaxHp(z - player.maxHp);
                        player.recover(z - player.hp);
                        player.addSkill('aili_canbao');
                        player.addSkill('aili_zhigao');
                    } else {
                        var z = lib.config.ZHENSHI;
                        player.gainMaxHp(5 + z - player.maxHp);
                        player.recover(5 + z - player.hp);
                        player.addSkill('aili_zhigao');
                        player.addSkill('aili_touzhi');
                    }
                    ('step 6');
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (7).jpg');
                    player.cs1s('只有毁灭,才是永恒.', 3);
                    ('step 7');
                    player.cs1s('我!是末日的起点,也是你们的终点', 4);
                    ('step 8');
                    game.playvs('fumieba');
                    player.cs1s('只有你们的死亡,才能让主宰大人愉悦', 3);
                },
                forced: true,
                popup: false,
            };
            lib.skill._morizhuzai_BOSS_1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuyue_mohuazj' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    var n = [1, 2].randomGet();
                    if (n == 1) game.changeBossQ('wuyue_mohuazj2');
                    if (n == 2) game.changeBossQ('mori_fuchouzhe');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - game.boss.maxHp);
                        game.boss.recover(z - game.boss.hp);
                        game.boss.addSkill('aili_canbao');
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(2);
                        game.boss.recover(2);
                        game.boss.addSkill('aili_canbao');
                    }
                    game.boss.addFellow('wuyue_moxgzr');
                    game.boss.addFellow('wuyue_moqhr');
                    game.playvs('morizhuzhai2');
                },
            };
            lib.skill._morizhuzai_BOSS_2 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && !player.hasSkill('mori_Yongheng') && (player.name == 'wuyue_mohuazj2' || player.name == 'mori_fuchouzhe');
                },
                async content(event, trigger, player) {
                    game.changeBossQ('aili_mrsz');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(5 + z - game.boss.maxHp);
                        game.boss.recover(5 + z - game.boss.hp);
                        game.boss.storage.aili_ms += z * 2;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.storage.aili_ms += z;
                    }
                    game.boss.addFellow('aili_heichao');
                    game.boss.addFellow('aili_heichao');
                },
            };
            lib.skill._morizhuzai_BOSS_3 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'aili_mrsz' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    if (lib.config.ZHENSHI < 3) {
                        game.tis('真实值＜3,进入假结局');
                        game.changeBossQ('miri_huimieshitu');
                        game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/xunhui.jpg');
                        lib.config.background_music = 'music_custom';
                        lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue13.mp3';
                        game.playBackgroundMusic();
                        game.boss.update();
                        game.boss.cs1s('主宰已经降临,这个世界终将被我们毁灭,而你们会成为这一切的见证者', 5);
                        game.boss.addFellow('aili_mrsz');
                        game.boss.addFellow('aili_mrsz');
                        for (var i of game.players) {
                            if (i.name == 'aili_mrsz') {
                                i.removeSkill('aili_ms');
                                i.removeSkill('aili_mr');
                            }
                        }
                    }
                    else {
                        game.changeBossQ('wuyue_morizz');
                        game.boss.update();
                        game.boss.cs1s('既然吾来了,这个世界就此终结吧.', 3);
                        if (lib.config.ZHENSHI >= 10) {
                            game.boss.gainMaxHp(20 - player.maxHp);
                            game.boss.recover(20 - player.hp);
                            game.boss.addSkill('aili_canbao');
                        }
                        lib.config.background_music = 'music_custom';
                        lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue2.mp3';
                        game.playBackgroundMusic();
                        game.boss.addFellow('aili_heichao');
                        game.boss.addFellow('aili_heichao');
                        game.playvs('morizhuzhai4');
                    }
                },
            };
            lib.skill._xunchas_BOSS = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                forced: true,
                silent: true,
                popup: false,
                filter(event, player) {
                    return player == game.boss && player.name == 'aili_morihj';
                },
                content() {
                    'step 0';
                    'step 1';
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue1.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (27).jpg');
                    ('step 2');
                    player.cs1s('看来都是一些毫无价值的生物', 4);
                    ('step 3');
                    player.cs1s('那么开始净化吧', 4);
                    ('step 4');
                    player.smoothAvatar();
                    player.init('wuyue_skgzr');
                    _status.noswap = true;
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg1.jpg');
                    player.gainMaxHp(5 - player.maxHp);
                    player.recover(5 - player.hp);
                    ('step 5');
                    player.cs1s('来吧,让我感受更多厮杀的乐趣吧', 4);
                },
            };
            lib.skill._xunchas_BOSS_1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -100,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuyue_skgzr' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    var n = [1, 2].randomGet();
                    if (n == 1) game.changeBossQ('wuyue_zhuangjijial');
                    if (n == 2) game.changeBossQ('miri_zhaoxijushou');
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg3.jpg');
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue3.mp3';
                    game.playBackgroundMusic();
                    var n = [1, 2].randomGet();
                    if (n == 1) {
                        game.boss.addFellow('mori_shoujiezhe');
                        for (var i of game.players) {
                            if (i.name == 'mori_shoujiezhe') {
                                i.side = false;
                                i.identity = 'cai';
                                i.setIdentity('cai');
                                game.addVideo('setIdentity', i, 'cai');
                                i.cs1s('歼灭模式启动,无关人员请离开,否则无法保证你们的安全', 6);
                            }
                        }
                    }
                    else {
                        game.boss.addFellow('wuyue_zhanzkuil');
                        for (var i of game.players) {
                            if (i.name == 'wuyue_zhanzkuil') {
                                i.side = false;
                                i.identity = 'cai';
                                i.setIdentity('cai');
                                game.addVideo('setIdentity', i, 'cai');
                                i.cs1s('目标发现,执行清除指令', 5);
                            }
                        }
                    }
                },
            };
            lib.skill._xunchas_BOSS_2 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && !player.hasSkill('mori_Yongheng') && (player.name == 'wuyue_zhuangjijial' || player.name == 'miri_zhaoxijushou');
                },
                async content(event, trigger, player) {
                    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9].randomGet();
                    if (n <= 8) game.changeBossQ('wuyue_morishouwei');
                    if (n == 9) game.changeBossQ('mori_xunhuuhze');
                    game.boss.addFellow('aili_heichao');
                    game.boss.addFellow('aili_heichao');
                    for (var i of game.players) {
                        if (i.name == 'aili_heichao') {
                            if (i.identity == 'zhong') {
                                i.addSkill('aili_gedang');
                                i.gainMaxHp(6 - i.maxHp);
                                i.recover(6 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._xunchas_BOSS_3 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && !player.hasSkill('mori_Yongheng') && (player.name == 'wuyue_morishouwei' || player.name == 'mori_xunhuuhze');
                },
                async content(event, trigger, player) {
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg2.jpg');
                    game.changeBossQ('wuyue_xunchas');
                    game.boss.cs1s('展现你们的价值吧', 5);
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue6.mp3';
                    game.playBackgroundMusic();
                    game.boss.addFellow('aili_heichao');
                    game.boss.addFellow('aili_heichao');
                    for (var i of game.players) {
                        if (i.name == 'aili_heichao') {
                            if (i.identity == 'zhong') {
                                i.addSkill('aili_gedang');
                                i.addSkill('aili_canbao');
                                i.gainMaxHp(9 - i.maxHp);
                                i.recover(9 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._jiaohui_BOSS = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mor_guangminshenjiao';
                },
                content() {
                    'step 0';
                    'step 1';
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue5.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (56).jpg');
                    player.node.name.innerHTML = '神<br/>圣<br/>骑<br/>士';
                    ('step 2');
                    player.cs1s('这个世界,已经无法被拯救', 4);
                    ('step 3');
                    player.cs1s('骑士们,去吧,将所有人全都送入天国', 5);
                    ('step 4');
                    ('step 5');
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                    player.addFellow('wuyue_jianxiqis');
                    player.addFellow('wuyue_jianxiqis');
                    player.smoothAvatar();
                    player.init('wuyue_shoihuqs');
                    ('step 6');
                    for (var i of game.players) {
                        if (i.name == 'wuyue_jianxiqis') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(4 - player.maxHp);
                                i.recover(4 - player.hp);
                            }
                        }
                    }
                    _status.noswap = true;
                    player.gainMaxHp(5 - player.maxHp);
                    player.recover(5 - player.hp);
                    player.addSkill('aili_banr');
                    player.update();
                    ('step 7');
                    player.cs1s('以神之名,接引你们进入天国', 5);
                    ('step 8');
                    player.cs1s('放弃抵抗,回归神的怀抱吧!!!', 4);
                },
                forced: true,
                popup: false,
            };
            lib.skill._jiaohui_BOSS1 = {
                trigger: {
                    player: 'dieBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuyue_shoihuqs' && !player.hasSkill('mori_Yongheng');
                },
                content() {
                    player.cs1s('神啊!!!请不要抛弃我!!!!', 3);
                },
                forced: true,
                popup: false,
            };
            lib.skill._jiaohui_BOSS_1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuyue_shoihuqs' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.changeBossQ('wuuue_weiguangqis');
                    game.boss.gainMaxHp(3);
                    game.boss.recover(3);
                    game.boss.addSkill('aili_banr');
                    game.boss.update();
                    game.boss.addFellow('wuyue_rongyqoqis');
                    game.boss.addFellow('wuyue_poxieqis');
                    for (var i of game.players) {
                        if (i.name == 'wuyue_rongyqoqis') {
                            if (i.identity == 'zhong') {
                                i.addSkill('aili_banr');
                                i.gainMaxHp(6 - i.maxHp);
                                i.recover(6 - i.maxHp);
                                i.cs1s('荣耀必将属于我们!!!!!!!!', 3);
                            }
                        }
                        if (i.name == 'wuyue_poxieqis') {
                            if (i.identity == 'zhong') {
                                i.addSkill('aili_banr');
                                i.gainMaxHp(6 - i.maxHp);
                                i.recover(6 - i.maxHp);
                                i.cs1s('除尽一切邪恶!!!!!!!!', 3);
                            }
                        }
                        if (i.name == 'wuuue_weiguangqis') {
                            if (i.identity == 'zhu') {
                                i.cs1s('尔等微光,为何不遵从光明？', 3);
                            }
                        }
                    }
                },
            };
            lib.skill._jiaohui_BOSS2 = {
                trigger: {
                    player: 'dieBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuuue_weiguangqis' && !player.hasSkill('mori_Yongheng');
                },
                content() {
                    'step 0';
                    player.cs1s('这无边的黑暗', 3);
                    ('step 1');
                    player.cs1s('我竟只能照亮自身周围...', 3);
                },
                forced: true,
                popup: false,
            };
            lib.skill._jiaohui_BOSS_2 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -50,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuuue_weiguangqis' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue7.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                    if (lib.config.ZHENSHI > 5) {
                        game.tis('真实值＞5,命运线变更');
                        game.changeBossQ('mori_guangmingshennv');
                        if (lib.config.ZHENSHI >= 10) {
                            var z = lib.config.ZHENSHI;
                            game.boss.gainMaxHp(z);
                            game.boss.recover(z);
                            game.boss.addSkill('mori_shenhuaa');
                            game.boss.storage.mori_shenhuaa_mark += 2;
                        } else {
                            var z = lib.config.ZHENSHI;
                            game.boss.gainMaxHp(6);
                            game.boss.recover(6);
                            game.boss.addSkill('mori_shenhuaa');
                        }
                        game.boss.update();
                        game.boss.addFellow('mori_xingyueqis');
                        game.boss.addFellow('mori_hujiaoqishi');
                        for (var i of game.players) {
                            if (i.name == 'mori_xingyueqis') {
                                if (i.identity == 'zhong') {
                                    i.addSkill('aili_banr');
                                    i.gainMaxHp(6 - i.maxHp);
                                    i.recover(6 - i.maxHp);
                                    i.cs1s('光鲜的玫瑰花瓣会将你们的尸骸掩盖,没人可以听见你们的叹息.', 3);
                                }
                            }
                            if (i.name == 'mori_hujiaoqishi') {
                                if (i.identity == 'zhong') {
                                    i.addSkill('mori_xunjiao_marka');
                                    i.addSkill('aili_banr');
                                    i.gainMaxHp(6 - i.maxHp);
                                    i.recover(6 - i.maxHp);
                                    i.cs1s('黑暗将让光明更加耀眼', 3);
                                }
                            }
                            if (i.name == 'mori_guangmingshennv') {
                                if (i.identity == 'zhu') {
                                    i.cs1s('教会就像萤火,于黑暗才能绽放', 4);
                                }
                            }
                        }
                    } else {
                        game.tis('真实值＜=5,命运线不变');
                        game.changeBossQ('wuyue_shenshengqiss');
                        game.boss.gainMaxHp(4);
                        game.boss.recover(4);
                        game.boss.addSkill('mori_shenhuaa');
                        game.boss.update();
                        game.boss.addFellow('wuyue_yonghqis');
                        game.boss.addFellow('wuyue_zhigaiqis');
                        for (var i of game.players) {
                            if (i.name == 'wuyue_yonghqis') {
                                if (i.identity == 'zhong') {
                                    i.addSkill('aili_banr');
                                    i.gainMaxHp(6 - i.maxHp);
                                    i.recover(6 - i.maxHp);
                                    i.cs1s('希望你们能让我感到有趣', 3);
                                }
                            }
                            if (i.name == 'wuyue_zhigaiqis') {
                                if (i.identity == 'zhong') {
                                    i.addSkill('aili_banr');
                                    i.gainMaxHp(6 - i.maxHp);
                                    i.recover(6 - i.maxHp);
                                    i.cs1s('蝼蚁们,能乖乖去死么？', 3);
                                }
                            }
                            if (i.name == 'wuyue_shenshengqiss') {
                                if (i.identity == 'zhu') {
                                    i.cs1s('罪恶之人,我来亲自净化汝等', 4);
                                }
                            }
                        }
                    }
                },
            };
            lib.skill._jiaohui_BOSS_3 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -1000,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'wuyue_shenshengqiss' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('我将焚掉这世界的罪恶,让被蔑视的灵魂得到释放.', 4);
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue8.mp3';
                    game.playBackgroundMusic();
                    game.changeBossQ('wuyue_heiajqis');
                    game.boss.gainMaxHp(4);
                    game.boss.recover(4);
                    game.boss.addSkill('mori_shenhuaa');
                    game.boss.addSkill('aili_benneng');
                    game.boss.storage.mori_shenhuaa_mark += 2;
                    game.boss.storage.aili_rimo -= 30;
                    game.boss.update();
                    for (var i of game.players) {
                        if (i.name == 'wuyue_heiajqis') {
                            if (i.identity == 'zhu') {
                                i.cs1s('肆意疯狂吧!!!那所谓的天堂只是一个令人痛苦的幻想,哈哈哈哈哈', 6);
                            }
                        }
                    }
                },
            };
            lib.skill._jiaohui_BOSS_3_1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_guangmingshennv' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('我看见了,最后一次日出涅盘后的钟声 送我走入 那无尽的黑夜.', 5);
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue11.mp3';
                    game.playBackgroundMusic();
                    game.changeBossQ('mori_shenzhi');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z);
                        game.boss.recover(z);
                        game.boss.addSkill('mori_shenhuaa');
                        game.boss.storage.mori_shenhuaa_mark += 3;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(7);
                        game.boss.recover(7);
                        game.boss.addSkill('mori_shenhuaa');
                        game.boss.storage.mori_shenhuaa_mark += 2;
                    }
                    game.boss.update();
                    game.boss.addFellow('mori_hujiaoqishi');
                    game.boss.addFellow('mori_hujiaoqishi');
                    for (var i of game.players) {
                        if (i.name == 'mori_hujiaoqishi') {
                            if (i.identity == 'zhong') {
                                i.addSkill('mori_xunjiao_marka');
                                i.addSkill('aili_banr');
                                i.gainMaxHp(7 - i.maxHp);
                                i.recover(7 - i.maxHp);
                            }
                        }
                        if (i.name == 'mori_shenzhi') {
                            if (i.identity == 'zhu') {
                                i.cs1s('光既暴露了自身,也暴露了黑暗', 3);
                            }
                        }
                    }
                },
            };
            lib.skill._jiaohui_BOSS_4 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_shenzhi' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('活着只是延续肮脏的罪恶,死亡才是绚烂的绽放.', 5);
                    game.changeBossQ('mori_guangminqis');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z);
                        game.boss.recover(z);
                        game.boss.addSkill('mori_shenhuaa');
                        game.boss.storage.mori_shenhuaa_mark += 3;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.addSkill('mori_shenhuaa');
                        game.boss.storage.mori_shenhuaa_mark += 2;
                    }
                    game.boss.update();
                    game.boss.addFellow('wuuue_weiguangqis');
                    game.boss.addFellow('wuuue_weiguangqis');
                    for (var i of game.players) {
                        if (i.name == 'wuuue_weiguangqis') {
                            if (i.identity == 'zhong') {
                                i.addSkill('aili_banr');
                                i.gainMaxHp(6 - i.maxHp);
                                i.recover(6 - i.maxHp);
                            }
                        }
                        if (i.name == 'mori_guangminqis') {
                            if (i.identity == 'zhu') {
                                i.cs1s('我在光明中沉睡,我在黑暗中苏醒,我将驱逐黑暗,我将带来光明.', 8);
                            }
                        }
                    }
                },
            };
            lib.skill._ahenyi_BOSS = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_shenmingqis';
                },
                content() {
                    'step 0';
                    'step 1';
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue9.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                    player.node.name.innerHTML = 'A<br/>l<br/>i<br/>c<br/>e';
                    ('step 2');
                    player.cs1s('<span style="color: #FFA550">观察凡人们的挣扎是如此的有趣</span>', 5);
                    ('step 3');
                    player.cs1s('<span style="color: #FFA550">尽管去挣扎把,…………如果你们能来到我的面前</span>', 5);
                    ('step 4');
                    player.cs1s('<span style="color: #FFA550">我会赐予你们最崇高的赏赐</span>', 5);
                    ('step 5');
                    ('step 6');
                    player.addFellow('mori_gtzj');
                    player.addFellow('mori_gtzj');
                    player.smoothAvatar();
                    player.init('mori_tkzj');
                    ('step 7');
                    for (var i of game.players) {
                        if (i.name == 'mori_gtzj') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(4 - i.maxHp);
                                i.recover(4 - i.hp);
                            }
                        }
                    }
                    _status.noswap = true;
                    player.gainMaxHp(4 - player.maxHp);
                    player.recover(4 - player.hp);
                    player.addSkill('mori_shenminga');
                    player.update();
                    ('step 8');
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue8.mp3';
                    game.playBackgroundMusic();
                    player.cs1s('发现目标,执行摧毁指令.', 4);
                },
                forced: true,
                popup: false,
            };
            lib.skill._shenyi_BOSS_1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_tkzj' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('你们的抵抗只是徒劳', 4);
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue11.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (58).jpg');
                    game.changeBossQ('mori_shenling');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 2;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(4);
                        game.boss.recover(4);
                        game.boss.addSkill('mori_shenminga');
                    }
                    game.boss.update();
                    game.boss.addFellow('mori_gtzj');
                    game.boss.addFellow('mori_gtzj');
                    for (var i of game.players) {
                        if (i.name == 'mori_shenling') {
                            if (i.identity == 'zhu') {
                                i.cs1s('施暴者,唯有对其以更强的暴力镇压', 5);
                                i.cs1s('为你们的所作所为付出代价!', 5);
                            }
                        }
                        if (i.name == 'mori_gtzj') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(5 - i.maxHp);
                                i.recover(5 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._shenyi_BOSS_2 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_shenling' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('我的暴力…………还是不够', 3.5);
                    game.playvs('shenlinsiw');
                    var n = [1, 2].randomGet();
                    if (n == 1) {
                        lib.config.background_music = 'music_custom';
                        lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue10.mp3';
                        game.playBackgroundMusic();
                        game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (136).jpg');
                        game.changeBossQ('mori_xikadiya');
                        if (lib.config.ZHENSHI >= 10) {
                            var z = lib.config.ZHENSHI;
                            game.boss.gainMaxHp(z - player.maxHp);
                            game.boss.recover(z - player.hp);
                            game.boss.addSkill('mori_shenminga');
                            game.boss.storage.mori_shenminga_mark += 3;
                        } else {
                            var z = lib.config.ZHENSHI;
                            game.boss.gainMaxHp(4);
                            game.boss.recover(4);
                            game.boss.addSkill('mori_shenminga');
                            game.boss.storage.mori_shenminga_mark += 2;
                        }
                        game.boss.update();
                        game.boss.addFellow('mori_tkzj');
                        game.boss.addFellow('mori_tkzj');
                        for (var i of game.players) {
                            if (i.name == 'mori_xikadiya') {
                                if (i.identity == 'zhu') {
                                    i.cs1s('请在此处停留吧,我会给予你们所有人平等的爱', 5);
                                }
                            }
                            if (i.name == 'mori_tkzj') {
                                if (i.identity == 'zhong') {
                                    i.gainMaxHp(5 - i.maxHp);
                                    i.recover(5 - i.maxHp);
                                }
                            }
                        }
                    }
                    else {
                        lib.config.background_music = 'music_custom';
                        lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue10.mp3';
                        game.playBackgroundMusic();
                        game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (135).jpg');
                        game.changeBossQ('mori_zhihuitians');
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z);
                        game.boss.recover(z);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 2;
                        game.boss.update();
                        game.boss.addFellow('mori_gtzj');
                        game.boss.addFellow('mori_gtzj');
                        for (var i of game.players) {
                            if (i.name == 'mori_zhihuitians') {
                                if (i.identity == 'zhu') {
                                    i.cs1s('让我们来一场华丽的战争吧!!!', 5);
                                }
                            }
                            if (i.name == 'mori_gtzj') {
                                if (i.identity == 'zhong') {
                                    i.gainMaxHp(7 - i.maxHp);
                                    i.recover(7 - i.maxHp);
                                }
                            }
                        }
                    }
                },
            };
            lib.skill._shenyi_BOSS_3 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && !player.hasSkill('mori_Yongheng') && (player.name == 'mori_xikadiya' || player.name == 'mori_zhihuitians');
                },
                async content(event, trigger, player) {
                    if (player.name != 'mori_xikadiya') {
                        game.boss.cs1s('没想到我也会有输掉的一天.....', 4);
                    }
                    else {
                        game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (135).jpg');
                        game.boss.cs1s('我明明可以给予你们平等的爱', 3.5);
                        game.boss.cs1s('继续前进,你们得到的只会是绝望', 3.5);
                        game.playvs('xikadiyasiwang');
                    }
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue9.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (137).jpg');
                    game.changeBossQ('mori_alice');
                    if (lib.config.ZHENSHI >= 10) {
                        game.boss.gainMaxHp(7);
                        game.boss.recover(7);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 2;
                        game.boss.update();
                    }
                    for (var i of game.players) {
                        if (i.name == 'mori_alice') {
                            if (i.identity == 'zhu') {
                                i.cs1s('<span style="color: #FFA550">恭喜你们,成功的来到了我的面前呢</span>', 5);
                                i.cs1s('<span style="color: #FFA550">那么我也该履行对你们的承诺了</span>', 5);
                                i.cs1s('<span style="color: #FFA550">迎接你们最崇高的死亡吧</span>', 5);
                            }
                        }
                    }
                },
            };
            lib.skill._mieshizhiling_BOSS = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_wenmingmiejue';
                },
                content() {
                    'step 0';
                    'step 1';
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue12.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/yinghe.jpg');
                    player.node.name.innerHTML = '灭<br/>世<br/>天<br/>使';
                    player.node.avatar.setBackgroundImage('extension/末日浩劫/image/mori_mieshitianshi.jpg');
                    lib.translate[player.name] = '灭世天使';
                    ('step 2');
                    player.cs1s('<span style="color: #FFA550">灭世程序已经被启动</span>', 5);
                    ('step 3');
                    player.cs1s('<span style="color: #FFA550">可爱的人类,看来要与你说再见了</span>', 5);
                    game.saveConfig('mori_renleishul', (lib.config.mori_renleishul = 6000000000));
                    game.saveConfig('mori_feng', (lib.config.mori_feng = 0));
                    game.saveConfig('mori_huo', (lib.config.mori_huo = 0));
                    game.saveConfig('mori_shui', (lib.config.mori_shui = 0));
                    game.saveConfig('mori_lei', (lib.config.mori_lei = 0));
                    game.saveConfig('mori_tu', (lib.config.mori_tu = 0));
                    game.saveConfig('mori_bing', (lib.config.mori_bing = 0));
                    game.saveConfig('mori_kongjian', (lib.config.mori_kongjian = 0));
                    game.saveConfig('mori_shijian', (lib.config.mori_shijian = 0));
                    ('step 4');
                    ('step 5');
                    player.addFellow('mori_zhuguangzhe');
                    player.addFellow('mori_zhuguangzhe');
                    player.smoothAvatar();
                    player.init('mori_zhuguangzhe');
                    ('step 6');
                    for (var i of game.players) {
                        if (i.name == 'mori_zhuguangzhe') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(5 - i.maxHp);
                                i.recover(5 - i.hp);
                            }
                        }
                    }
                    _status.noswap = true;
                    player.gainMaxHp(5 - player.maxHp);
                    player.recover(5 - player.hp);
                    player.update();
                    ('step 7');
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (135).jpg');
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue14.mp3';
                    game.playBackgroundMusic();
                    player.cs1s('人类,迎接你们的终焉吧', 4);
                    var m = lib.config.mori_renleishul / 6000000000;
                    player.node.nameol.innerHTML = '人类存活率:<br><span style="color: #ffff00">' + m * 100 + '</span>%';
                },
                forced: true,
                popup: false,
            };
            lib.skill._mieshizhiling_BOSS1 = {
                trigger: {
                    player: ['dieBegin'],
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_zhuguangzhe' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('无法理解', 3);
                    game.changeBossQ('mori_minglitianshi');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 3;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(6 - game.boss.maxHp);
                        game.boss.recover(6 - game.boss.maxHp);
                        game.boss.addSkill('mori_shenminga');
                    }
                    game.boss.update();
                    game.boss.addFellow('mori_zhuguangzhe');
                    game.boss.addFellow('mori_zhuguangzhe');
                    for (var i of game.players) {
                        if (i.name == 'mori_minglitianshi') {
                            if (i.identity == 'zhu') {
                                i.cs1s('命运早已注定,你们为何还要挣扎', 5);
                            }
                        }
                        if (i.name == 'mori_zhuguangzhe') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(5 - i.maxHp);
                                i.recover(5 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._mieshizhiling_BOSS2 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_minglitianshi' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('命运画卷上面明明没有这一幕......', 4);
                    game.changeBossQ('mori_pojunzhanji');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 3;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(6 - game.boss.maxHp);
                        game.boss.recover(6 - game.boss.maxHp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 1;
                    }
                    game.boss.update();
                    game.boss.addFellow('mori_zhuguangzhe');
                    game.boss.addFellow('mori_zhuguangzhe');
                    for (var i of game.players) {
                        if (i.name == 'mori_pojunzhanji') {
                            if (i.identity == 'zhu') {
                                i.cs1s('你们所坚信的一切,也只是镜花水月...', 3);
                            }
                        }
                        if (i.name == 'mori_zhuguangzhe') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(9 - i.maxHp);
                                i.recover(9 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._mieshizhiling_BOSS3 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_pojunzhanji' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('永永远不会停息的争斗....', 3);
                    game.changeBossQ('mori_zhixutianshi');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 4;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(6 - game.boss.maxHp);
                        game.boss.recover(6 - game.boss.maxHp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 2;
                        player.storage.mori_zhanzjielv_mark += 6;
                    }
                    game.boss.update();
                    game.boss.addFellow('mori_pojunzhanji');
                    game.boss.addFellow('mori_pojunzhanji');
                    for (var i of game.players) {
                        if (i.name == 'mori_minglitianshi') {
                            if (i.identity == 'zhu') {
                                i.cs1s('背弃秩序者,终将被秩序所碾碎', 5);
                            }
                        }
                        if (i.name == 'mori_pojunzhanji') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(5 - i.maxHp);
                                i.recover(5 - i.maxHp);
                            }
                        }
                    }
                },
            };
            lib.skill._mieshizhiling_BOSS4 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'mori_zhixutianshi' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('破格之人,你们终将被世界所遗弃', 3);
                    player.previousSeat.revive();
                    game.changeBossQ('ali_zhiyintians');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 2;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(5 - game.boss.maxHp);
                        game.boss.recover(5 - game.boss.maxHp);
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 1;
                    }
                    player.node.avatar.setBackgroundImage('extension/末日浩劫/image/mori_wenmingmiejue.jpg');
                    game.boss.update();
                    game.boss.addFellow('ali_jiushizhu');
                    for (var i of game.players) {
                        if (i.name == 'ali_jiushizhu') {
                            if (i.identity == 'zhong') {
                                i.gainMaxHp(5 - i.maxHp);
                                i.recover(5 - i.maxHp);
                                i.addSkill('mori_jiushizhuboss');
                                i.cs1s('这次的敌人就是他们吗？', 5);
                                i.cs1s('抱歉了,接下来我将全力以赴的击杀你们', 5);
                                i.cs1s('...这是....为了拯救世界!!!', 5);
                            }
                        }
                        if (i.name == 'ali_zhiyintians') {
                            if (i.identity == 'zhu') {
                                i.cs1s('救世主啊,清扫阻碍你的一切吧', 5);
                            }
                        }
                    }
                },
            };
            lib.skill._mieshizhiling_BOSS5 = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: -10,
                fixed: true,
                filter(event, player) {
                    return player == game.boss && player.name == 'ali_zhiyintians' && !player.hasSkill('mori_Yongheng');
                },
                async content(event, trigger, player) {
                    game.boss.cs1s('救世主,去完成你的使命吧!!!', 3);
                    player.nextSeat.revive();
                    game.changeBossQ('ali_jiushizhu');
                    if (lib.config.ZHENSHI >= 10) {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(z - player.maxHp);
                        game.boss.recover(z - player.hp);
                        game.boss.addSkill('mori_jiushizhuboss');
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 9;
                    } else {
                        var z = lib.config.ZHENSHI;
                        game.boss.gainMaxHp(4 - game.boss.maxHp);
                        game.boss.recover(4 - game.boss.maxHp);
                        game.boss.addSkill('mori_jiushizhuboss');
                        game.boss.addSkill('mori_shenminga');
                        game.boss.storage.mori_shenminga_mark += 6;
                    }
                    game.boss.update();
                    game.boss.cs1s('我还需要更强的力量', 5);
                    game.boss.cs1s('为了那些我所珍爱的一切', 4);
                    game.boss.cs1s('为了消逝的人们', 4);
                    game.boss.cs1s('为了世界的一切', 5);
                    game.boss.cs1s('请你们赴死', 5);
                    var m = lib.config.mori_renleishul / 6000000000;
                    if (m < 0.9) {
                        game.tis('救世主掌控了[狂风]');
                        game.saveConfig('mori_feng', (lib.config.mori_feng = 1));
                    }
                    if (m < 0.8) {
                        game.tis('救世主掌控了[海啸]');
                        game.saveConfig('mori_shui', (lib.config.mori_shui = 1));
                    }
                    if (m < 0.7) {
                        game.tis('救世主掌控了[烈焰]');
                        game.saveConfig('mori_huo', (lib.config.mori_huo = 1));
                    }
                    if (m < 0.6) {
                        game.tis('救世主掌控了[怒雷]');
                        game.saveConfig('mori_lei', (lib.config.mori_lei = 1));
                    }
                    if (m < 0.5) {
                        game.tis('救世主掌控了[大地]');
                        game.saveConfig('mori_tu', (lib.config.mori_tu = 1));
                    }
                    if (m < 0.4) {
                        game.tis('救世主掌控了[冰霜]');
                        game.saveConfig('mori_bing', (lib.config.mori_bing = 1));
                    }
                    if (m < 0.3) {
                        game.tis('救世主掌控了[空间]');
                        game.saveConfig('mori_kongjian', (lib.config.mori_kongjian = 1));
                    }
                    if (m < 0.15) {
                        game.tis('救世主掌控了[时间]');
                        game.saveConfig('mori_shijian', (lib.config.mori_shijian = 1));
                    }
                },
            };
            lib.skill._jiushizhuqianghua_boss = {
                trigger: {
                    global: 'roundStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && game.boss.name == 'ali_zhiyintians';
                },
                content() {
                    var dead = game.dead.slice(0);
                    for (var i = 0; i < dead.length; i++) {
                        if (dead[i].name == 'ali_jiushizhu') {
                            if (dead[i].identity == 'zhong') {
                                dead[i].gainMaxHp(5 - dead[i].maxHp);
                                dead[i].revive(dead[i].maxHp);
                                game.tis('<span style="color: #FFA550">你无法摧毁救世主</span>');
                            }
                        }
                    }
                },
                forced: true,
                popup: false,
            };
            lib.skill._renleimiejueshuliang_boss = {
                trigger: {
                    global: ['damageBegin2', 'loseHpBefore', 'dying'],
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'ali_zhiyintians' || game.boss.name == 'ali_jiushizhu' || game.boss.name == 'mori_zhixutianshi' || game.boss.name == 'mori_pojunzhanji' || game.boss.name == 'mori_minglitianshi' || game.boss.name == 'mori_zhuguangzhe');
                },
                content() {
                    'step 0';
                    game.saveConfig('mori_renleishul', (lib.config.mori_renleishul -= 1000000));
                    var m = lib.config.mori_renleishul / 6000000000;
                    if (m < 0.9 && lib.config.mori_feng == 0) {
                        game.tis('救世主掌控了[狂风]');
                        game.saveConfig('mori_feng', (lib.config.mori_feng = 1));
                    }
                    if (m < 0.8 && lib.config.mori_shui == 0) {
                        game.tis('救世主掌控了[海啸]');
                        game.saveConfig('mori_shui', (lib.config.mori_shui = 1));
                    }
                    if (m < 0.7 && lib.config.mori_huo == 0) {
                        game.tis('救世主掌控了[烈焰]');
                        game.saveConfig('mori_huo', (lib.config.mori_huo = 1));
                    }
                    if (m < 0.6 && lib.config.mori_lei == 0) {
                        game.tis('救世主掌控了[怒雷]');
                        game.saveConfig('mori_lei', (lib.config.mori_lei = 1));
                    }
                    if (m < 0.5 && lib.config.mori_tu == 0) {
                        game.tis('救世主掌控了[大地]');
                        game.saveConfig('mori_tu', (lib.config.mori_tu = 1));
                    }
                    if (m < 0.4 && lib.config.mori_bing == 0) {
                        game.tis('救世主掌控了[冰霜]');
                        game.saveConfig('mori_bing', (lib.config.mori_bing = 1));
                    }
                    if (m < 0.3 && lib.config.mori_kongjian == 0) {
                        game.tis('救世主掌控了[空间]');
                        game.saveConfig('mori_kongjian', (lib.config.mori_kongjian = 1));
                    }
                    if (m < 0.15 && lib.config.mori_shijian == 0) {
                        game.tis('救世主掌控了[时间]');
                        game.saveConfig('mori_shijian', (lib.config.mori_shijian = 1));
                    }
                    if (m > 0.8) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #ffff00">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m >= 0.5 && m < 0.8) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #a020f0">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m >= 0.25 && m < 0.5) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #4169e1">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m > 0 && m < 0.25) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #e3170d">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m <= 0) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #292421">' + 0 + '</span>%';
                        game.tis('人类灭亡');
                        event.goto(1);
                    }
                    ('step 1');
                    event.targets = game.filterPlayer();
                    event.targets.remove(game.boss);
                    event.targets.sort(lib.sort.seat);
                    event.targets2 = event.targets.slice(0);
                    game.boss.line(event.targets, 'green');
                    ('step 2');
                    for (const i of event.targets) {
                        i.qdie(game.boss);
                    }
                    ('step 3');
                    game.tis('人类灭亡');
                },
                forced: true,
                popup: false,
            };
            lib.skill._renleimiejueshuliang_boss1 = {
                trigger: {
                    global: ['roundStart', 'dieBefore'],
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && (game.boss.name == 'ali_zhiyintians' || game.boss.name == 'ali_jiushizhu' || game.boss.name == 'mori_zhixutianshi' || game.boss.name == 'mori_pojunzhanji' || game.boss.name == 'mori_minglitianshi' || game.boss.name == 'mori_zhuguangzhe');
                },
                content() {
                    'step 0';
                    game.saveConfig('mori_renleishul', (lib.config.mori_renleishul -= 20000000));
                    var m = lib.config.mori_renleishul / 6000000000;
                    if (m < 0.9 && lib.config.mori_feng == 0) {
                        game.tis('救世主掌控了[狂风]');
                        game.saveConfig('mori_feng', (lib.config.mori_feng = 1));
                    }
                    if (m < 0.8 && lib.config.mori_shui == 0) {
                        game.tis('救世主掌控了[海啸]');
                        game.saveConfig('mori_shui', (lib.config.mori_shui = 1));
                    }
                    if (m < 0.7 && lib.config.mori_huo == 0) {
                        game.tis('救世主掌控了[烈焰]');
                        game.saveConfig('mori_huo', (lib.config.mori_huo = 1));
                    }
                    if (m < 0.6 && lib.config.mori_lei == 0) {
                        game.tis('救世主掌控了[怒雷]');
                        game.saveConfig('mori_lei', (lib.config.mori_lei = 1));
                    }
                    if (m < 0.5 && lib.config.mori_tu == 0) {
                        game.tis('救世主掌控了[大地]');
                        game.saveConfig('mori_tu', (lib.config.mori_tu = 1));
                    }
                    if (m < 0.4 && lib.config.mori_bing == 0) {
                        game.tis('救世主掌控了[冰霜]');
                        game.saveConfig('mori_bing', (lib.config.mori_bing = 1));
                    }
                    if (m < 0.3 && lib.config.mori_kongjian == 0) {
                        game.tis('救世主掌控了[空间]');
                        game.saveConfig('mori_kongjian', (lib.config.mori_kongjian = 1));
                    }
                    if (m < 0.15 && lib.config.mori_shijian == 0) {
                        game.tis('救世主掌控了[时间]');
                        game.saveConfig('mori_shijian', (lib.config.mori_shijian = 1));
                    }
                    if (m > 0.8) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #ffff00">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m >= 0.5 && m < 0.8) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #a020f0">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m >= 0.25 && m < 0.5) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #4169e1">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m > 0 && m < 0.25) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #e3170d">' + m * 100 + '</span>%';
                        event.finish();
                    }
                    if (m <= 0) {
                        game.boss.node.nameol.innerHTML = '人类存活率:<br><span style="color: #292421">' + 0 + '</span>%';
                        event.goto(1);
                    }
                    ('step 1');
                    event.targets = game.filterPlayer();
                    event.targets.remove(game.boss);
                    event.targets.sort(lib.sort.seat);
                    event.targets2 = event.targets.slice(0);
                    player.line(event.targets, 'green');
                    ('step 2');
                    for (const i of event.targets) {
                        i.qdie(player);
                    }
                    ('step 3');
                    game.tis('人类灭亡');
                },
                forced: true,
                popup: false,
            };
            lib.skill._renleimiejueshuliang_huo = {
                trigger: {
                    player: 'useCardAfter',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && !get.tag(event.card, 'recover') && get.type(event.card) != 'equip' && event.card.name != 'shan' && game.me != game.boss && player == game.boss && game.boss.name == 'ali_jiushizhu' && get.itemtype(event.cards) == 'cards' && _status.currentPhase == player && lib.config.mori_huo > 0;
                },
                content() {
                    event.targets = trigger.targets.slice(0);
                    event.targets.remove(player);
                    game.boss.popup('烈焰');
                    player.useCard(
                        {
                            name: 'sha',
                            nature: 'fire',
                            suit: trigger.card.suit,
                        },
                        false,
                        event.targets,
                        false
                    );
                },
            };
            lib.skill._renleimiejueshuliang_feng = {
                trigger: {
                    player: 'shaBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player == game.boss && game.boss.name == 'ali_jiushizhu' && event.card && lib.config.mori_feng > 0;
                },
                content() {
                    player.popup('狂风');
                    trigger.directHit = true;
                    game.playvs(player.name + 'jn2');
                },
            };
            lib.skill._renleimiejueshuliang_shui = {
                trigger: {
                    global: 'roundStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_shui > 0;
                },
                content() {
                    'step 0';
                    game.boss
                        .chooseTarget(get.prompt('mori_zhongyan'), [1, 3], function (card, player, target) {
                            return player != target;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            if (get.attitude(_status.event.player, target)) {
                                return 1 - get.attitude(_status.event.player, target);
                            }
                            return -1;
                        });
                    ('step 1');
                    if (result.bool) {
                        for (var i = 0; i < result.targets.length; i++) {
                            game.playvs(game.boss.name + 'jn3');
                            game.boss.popup('海啸');
                            result.targets[i].damage(2);
                            game.boss.recover(2);
                        }
                    }
                },
            };
            lib.skill._renleimiejueshuliang_tu = {
                trigger: {
                    player: ['damageBegin2', 'loseHpBefore'],
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player == game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_tu > 0;
                },
                content() {
                    if (trigger.num > 1) trigger.num = 1;
                    var l = [1, 2, 3].randomGet();
                    if (l == 1) game.playvs(player.name + 'jn4');
                    player.popup('大地');
                },
            };
            lib.skill._renleimiejueshuliang_bing = {
                trigger: {
                    player: ['useCardAfter'],
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player != game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_bing > 0;
                },
                content() {
                    'step 0';
                    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                    if (n > 1) event.finish();
                    ('step 1');
                    player.skip('phaseUse', true);
                    player.damage(player.maxHp - 1);
                    player.turnOver();
                    game.boss.popup('冰霜');
                    game.playvs(game.boss.name + 'jn1');
                },
            };
            lib.skill._renleimiejueshuliang_kongjian = {
                trigger: {
                    player: 'damageBegin2',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player != game.boss && event.source == game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_kongjian > 0;
                },
                content() {
                    player.damage(player.maxHp)._triggered = null;
                    game.playvs(game.boss.name + 'jn5');
                    game.boss.popup('空间');
                },
            };
            lib.skill._renleimiejueshuliang_shijian = {
                trigger: {
                    player: 'phaseEnd',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player == game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_shijian > 0;
                },
                content() {
                    player.popup('时间');
                    game.playvs(player.name + 'jn');
                    player.phaseDraw();
                    player.hp = player.maxHp;
                    player.phaseUse();
                    player.update();
                },
            };
            lib.skill._renleimiejueshuliang_lei = {
                trigger: {
                    player: 'phaseBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return get.mode() == 'boss' && game.me != game.boss && player != game.boss && game.boss.name == 'ali_jiushizhu' && lib.config.mori_lei > 0;
                },
                content() {
                    'step 0';
                    game.boss.popup('怒雷');
                    event.card = get.cards()[0];
                    game.cardsGotoOrdering(event.card);
                    event.videoId = lib.status.videoId++;
                    var judgestr = get.translation(game.boss) + '发动了【控雷】';
                    game.addVideo('judge1', player, [get.cardInfo(event.card), judgestr, event.videoId]);
                    game.broadcastAll(
                        function (player, card, str, id, cardid) {
                            var event;
                            if (game.online) {
                                event = {};
                            } else {
                                event = _status.event;
                            }
                            if (game.chess) {
                                event.node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                            } else {
                                event.node = player.$throwordered(card.copy(), true);
                            }
                            if (lib.cardOL) lib.cardOL[cardid] = event.node;
                            event.node.cardid = cardid;
                            event.node.classList.add('thrownhighlight');
                            ui.arena.classList.add('thrownhighlight');
                            event.dialog = ui.create.dialog(str);
                            event.dialog.classList.add('center');
                            event.dialog.videoId = id;
                        },
                        player,
                        event.card,
                        judgestr,
                        event.videoId,
                        get.id()
                    );
                    game.log(player, '展示了', event.card);
                    if (get.color(event.card) == 'black') {
                        var n = event.card.number;
                        player.damage(n, 'thunder')._triggered = null;
                        game.playvs(player.name + 'jn1');
                    }
                },
            };
            lib.skill._mori_siwang = {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                _priority: 999,
                content() {
                    if (player.name == 'wuyue_morizz' || player.name == 'wuyue_shenshengqiss' || player.name == 'mori_shenling' || player.name == 'mori_xikadiya' || player.name == 'mori_alice' || player.name == 'wuyue_heiajqis' || player.name == 'wuyue_xunchas') {
                        game.playvs(trigger.player.name);
                    }
                },
            };
            lib.skill._ZHENSHI_alice = {
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    return player.name == 'mori_alice';
                },
                content() {
                    if (player == game.boss) {
                        if (lib.config.ZHENSHI >= 10) {
                            for (const i of ['discard', 'chooseToDiscard', '$die', 'disableSkill', 'init', 'reinit', 'clearSkills', 'removeSkill', 'turnOver', 'goMad', 'delete', 'remove', 'skip', 'out', 'addSkill', 'addTempSkill']) {
                                player[i] = game.kongfunc;
                            }
                            player.isMad = () => false;
                        }
                        else {
                            for (const i of ['$die', 'disableSkill', 'init', 'reinit', 'clearSkills', 'removeSkill', 'turnOver', 'goMad', 'delete', 'remove', 'skip', 'out', 'addSkill', 'addTempSkill']) {
                                player[i] = game.kongfunc;
                            }
                            player.isMad = () => false;
                        }
                    }
                },
            };
            lib.skill._GameBug_player = {
                trigger: {
                    player: ['dieBefore', 'damageBegin2', 'loseHpBefore', 'loseMaxHpBefore'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    return event.player == game.boss && (event.player.name == 'mori_shenmingqis' || event.player.name == 'mor_guangminshenjiao' || event.player.name == 'aili_morihj' || event.player.name == 'mori_mieshitianshi' || event.player.name == 'mor_ashenminjinjichang' || event.player.name == 'aili_morilail' || event.player.name == 'mori_wenmingmiejue');
                },
                content() {
                    trigger.untrigger();
                    trigger.finish();
                },
            };
            lib.skill._busi2_alice = {
                trigger: {
                    player: ['dying', 'dieBefore'],
                },
                forced: true,
                _priority: 999,
                filter(event, player) {
                    return player.name == 'mori_alice' && player == game.boss;
                },
                async content(event, trigger, player) {
                    if (trigger.source) {
                        if (trigger.source.maxHp > 50 || trigger.source.countCards('he') > 50 || player.countCards('he') > 50 || player.maxHp < 3 || player.hp < -10 || game.roundNumber < 10) {
                            trigger.untrigger();
                            trigger.finish();
                            trigger.source.qdie(player);
                            player.gainMaxHp(Infinity);
                            player.hp = player.maxHp;
                            player.draw(50);
                            player.cs1s('<span style="color: #FFA550">让我陪你们慢慢玩吧</span>', 5);
                            game.playvs('shenyi2');
                            event.finish();
                        } else {
                            var n = [1, 2].randomGet();
                            if (n == 1) {
                                trigger.untrigger();
                                trigger.finish();
                                player.gainMaxHp(3 - player.maxHp);
                                player.recover(2 - player.hp);
                                player.draw(2);
                                game.playvs('shenyi2');
                            }
                            if (n == 2) {
                                game.playvs('shenyi2');
                                player.draw(trigger.source.maxHp * 2);
                            }
                        }
                    } else {
                        trigger.untrigger();
                        trigger.finish();
                        player.gainMaxHp(Infinity);
                        player.hp = player.maxHp;
                        player.draw(50);
                        player.cs1s('<span style="color: #FFA550">让我陪你们慢慢玩吧</span>', 5);
                        game.playvs('shenyi2');
                        event.finish();
                    }
                },//我嘞个抗性地狱
            };
            lib.element.player.cs1s = function (str, time) {
                if (!time) time = 2;
                str = str.replace(/##assetURL##/g, lib.assetURL);
                var dialog = ui.create.dialog('hidden');
                dialog.classList.add('static');
                dialog.add('<div class="text" style="word-break:break-all;display:inline">' + str + '</div>');
                dialog.classList.add('popped');
                ui.window.appendChild(dialog);
                var width = dialog.content.firstChild.firstChild.offsetWidth;
                if (width < 190) {
                    dialog._mod_height = -16;
                } else {
                    dialog.content.firstChild.style.textAlign = 'left';
                }
                dialog.style.width = width + 16 + 'px';
                var refnode;
                if (this.node && this.node.avatar && this.parentNode == ui.arena) {
                    refnode = this.node.avatar;
                }
                if (refnode) {
                    lib.placePoppedDialog(dialog, {
                        clientX: (ui.arena.offsetLeft + this.getLeft() + refnode.offsetLeft + refnode.offsetWidth / 2) * game.documentZoom,
                        clientY: (ui.arena.offsetTop + this.getTop() + refnode.offsetTop + refnode.offsetHeight / 4) * game.documentZoom,
                    });
                } else {
                    lib.placePoppedDialog(dialog, {
                        clientX: (this.getLeft() + this.offsetWidth / 2) * game.documentZoom,
                        clientY: (this.getTop() + this.offsetHeight / 4) * game.documentZoom,
                    });
                }
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                setTimeout(
                    function () {
                        dialog.delete();
                    },
                    time < 2 ? 2000 : time * 1000
                );
                var name = get.translation(this.name);
                var info = [name ? name + '[' + this.nickname + ']' : this.nickname, str];
                lib.chatHistory.push(info);
                if (_status.addChatEntry) {
                    if (_status.addChatEntry._origin.parentNode) {
                        _status.addChatEntry(info, false);
                    } else {
                        delete _status.addChatEntry;
                    }
                }
            };
            var moriboss = {
                wuyue_xunchas: '巡查使',
                wuyue_morizz: '末日主宰',
                wuyue_morishouwei: '守望者',
                wuyue_zhanzkuil: '守卫者',
                wuyue_zhuangjijial: '装甲暴龙',
                aili_mrsz: '末日使者',
                mori_guangminqis: '光明意志',
                mori_xunhuuhze: '巡回者',
                mori_shoujiezhe: '守界者',
                miri_zhaoxijushou: '潮汐巨兽',
            };
        },
        precontent(config, pack) {
            //—————————————————————————————————————————————————————————————————————————————boss模式相关函数,目前改用代理来排序
            const boss = function () {
                lib.skill._sort = {
                    trigger: {
                        player: ['phaseEnd'],
                    },
                    silent: true,
                    forceDie: true,
                    forceOut: true,
                    filter() {
                        game.sort();
                    },
                    content() { },
                }; //排座位
                let _me;
                Reflect.defineProperty(game, 'me', {
                    get() {
                        return _me;
                    },
                    set(v) {
                        _me = v;
                        if (game.players.includes(v) && game.players[0] != v) {
                            game.sort();//因为李白最先进入players,挑战模式不管选什么挑战李白,都会变成game.me是李白
                        } //如果数组target[meIndex]是李白,那么替换掉的一瞬间,接下来调用就会再添加一个李白,导致数组两个李白
                    }, //更换game.me之后第一时间排序
                });
                game.sort = function () {
                    const players = game.players.filter(Boolean);
                    const deads = game.dead.filter(Boolean);
                    const allPlayers = deads.concat(players);//先移除players后面玩家会前移,再添加入dead需要同排序取前
                    const bool = lib.config.dieremove;
                    const playerx = bool ? players : allPlayers;
                    ui.arena.setNumber(playerx.length);
                    if (bool) {
                        deads.forEach((player) => {
                            player.classList.add('removing', 'hidden');
                        });
                    }//隐藏死亡角色
                    playerx.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    if (playerx.includes(game.me) && playerx[0] != game.me) {
                        while (playerx[0] != game.me) {
                            const start = playerx.shift();
                            playerx.push(start);
                        }
                    }//将玩家排至数组首位
                    playerx.forEach((player, index, array) => {
                        player.dataset.position = index;
                        const zhu = _status.roundStart || game.zhu || game.boss || array.find((p) => p.seatNum == 1) || array[0];
                        const zhuPos = Number(zhu.dataset.position);
                        const num = index - zhuPos + 1;
                        if (index < zhuPos) {
                            player.seatNum = players.length - num;
                        } else {
                            player.seatNum = num;
                        }
                    });//修改dataset.position与seatNum
                    players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    players.forEach((player, index, array) => {
                        if (bool) {
                            player.classList.remove('removing', 'hidden');
                        }
                        if (index == 0) {
                            if (ui.handcards1Container && ui.handcards1Container.firstChild != player.node.handcards1) {
                                while (ui.handcards1Container.firstChild) {
                                    ui.handcards1Container.firstChild.remove();
                                }
                                ui.handcards1Container.appendChild(player.node.handcards1.addTempClass('start').fix());
                            }
                            if (game.me != player) {
                                ui.updatehl();
                            }
                        }
                        player.previous = array[index === 0 ? array.length - 1 : index - 1];
                        player.next = array[index === array.length - 1 ? 0 : index + 1];
                    });//展示零号位手牌/修改previous/显示元素
                    allPlayers.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    allPlayers.forEach((player, index, array) => {
                        player.previousSeat = array[index === 0 ? array.length - 1 : index - 1];
                        player.nextSeat = array[index === array.length - 1 ? 0 : index + 1];
                    });//修改previousSeat
                    game.players.sort((a, b) => Number(a.dataset.position) - Number(b.dataset.position));
                    return true;
                };
                game.players = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
                game.dead = new Proxy([], {
                    set(target, property, value) {
                        const result = Reflect.set(target, property, value);
                        if (property === 'length') {
                            game.sort();
                        }
                        return result;
                    },
                });
                game.kongfunc = function () {
                    return game.kong;
                };
                game.kong = {
                    set() {
                        return this;
                    },
                    get player() {
                        return game.me;
                    }, //先声明后赋值的,后面调用会是underfined,所以用getter实时获取
                    cards: [],
                    result: {
                        cards: [],
                    },
                    gaintag: [],
                    forResult() { },
                };
                game.changeBossQ = function (name) {
                    _status.event.forceDie = true;
                    const boss = game.addPlayerQ(name);
                    boss.side = true;
                    if (game.additionaldead) {
                        game.additionaldead.push(game.boss);
                    } else {
                        game.additionaldead = [game.boss];
                    }
                    boss.setIdentity('zhu');
                    boss.identity = 'zhu';
                    const player = game.boss;
                    game.boss = boss;
                    game.addVideo('bossSwap', player, '_' + boss.name);
                    if (game.me == player) {
                        game.swapControl(boss);
                    }
                    return boss;
                };
                game.addPlayerQ = function (name) {
                    const player = ui.create.player(ui.arena).addTempClass('start');
                    player.getId();
                    if (name) player.init(name);
                    game.players.push(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                };
                lib.element.player.addFellow = function (name) {
                    const player = this;
                    const npc = game.addPlayerQ(name);
                    player.guhuo(npc);
                    return npc;
                }; //添加随从
                lib.element.player.guhuo = function (target) {
                    const player = this;
                    target.side = player.side;
                    let identity = player.identity;
                    if (player.identity == 'zhu') {
                        identity = 'zhong';
                    } // 挑战模式多个主身份,会导致boss多个回合
                    target.identity = identity;
                    target.setIdentity(identity, 'blue');
                    target.boss = player;
                    target.ai.modAttitudeFrom = function (from, to, att) {
                        if (to == from.boss) return 99;
                        return att;
                    }; //这里from是本人
                    target.ai.modAttitudeTo = function (from, to, att) {
                        if (to.boss == from) return 99;
                        return att;
                    }; //这里to是本人
                    return player;
                }; //令一名角色服从你
            };
            boss();
            //—————————————————————————————————————————————————————————————————————————————解构魔改本体函数
            const mogai = function () {
                lib.element.player.dyingResult = async function () {
                    const player1 = this;
                    game.log(player1, '濒死');
                    _status.dying.unshift(player1);
                    for (const i of game.players) {
                        const { result } = await i.chooseToUse({
                            filterCard(card, player, event) {
                                return lib.filter.cardSavable(card, player, player1);
                            },
                            filterTarget(card, player, target) {
                                if (!card || target != player1) {
                                    return false;
                                }
                                const info = get.info(card);
                                if (!info.singleCard || ui.selected.targets.length == 0) {
                                    const mod1 = game.checkMod(card, player, target, 'unchanged', 'playerEnabled', player);
                                    if (mod1 == false) {
                                        return false;
                                    }
                                    const mod2 = game.checkMod(card, player, target, 'unchanged', 'targetEnabled', target);
                                    if (mod2 != 'unchanged') {
                                        return mod2;
                                    }
                                }
                                return true;
                            },
                            prompt: get.translation(player1) + '濒死,是否帮助？',
                            ai1() {
                                return 1;
                            },
                            ai2() {
                                return get.attitude(player1, i);
                            },
                            type: 'dying',
                            targetRequired: true,
                            dying: player1,
                        });
                        if (result?.bool) {
                            _status.dying.remove(player1);
                            break;
                        }
                    }
                    if (_status.dying.includes(player1)) {
                        await player1.die();
                    }
                    return player1;
                }; //濒死结算
                lib.element.player.yinni = function () {
                    const player = this;
                    player.storage.rawHp = player.hp;
                    player.storage.rawMaxHp = player.maxHp;
                    if (player.skills.length) {
                        if (!player.hiddenSkills) {
                            player.hiddenSkills = [];
                        }
                        for (const i of player.skills.slice()) {
                            player.removeSkill(i);
                            player.hiddenSkills.add(i);
                        }
                    }
                    player.classList.add('unseen');
                    player.name = 'unknown';
                    player.sex = 'male';
                    player.storage.nohp = true;
                    player.node.hp.hide();
                    player.addSkill('g_hidden_ai');
                    player.hp = 1;
                    player.maxHp = 1;
                    player.update();
                    return player;
                }; //隐匿函数
                lib.element.player.qreinit = function (name) {
                    const player = this;
                    const info = lib.character[name];
                    player.name1 = name;
                    player.name = name;
                    player.sex = info.sex;
                    player.changeGroup(info.group, false);
                    for (const i of info.skills) {
                        player.addSkill(i);
                    }
                    player.maxHp = get.infoMaxHp(info.maxHp);
                    player.hp = player.maxHp;
                    game.addVideo('reinit3', player, {
                        name: name,
                        hp: player.maxHp,
                        avatar2: player.name2 == name,
                    });
                    player.smoothAvatar(false);
                    player.node.avatar.setBackground(name, 'character');
                    player.node.name.innerHTML = get.translation(name);
                    player.update();
                    return player;
                }; //变身
                lib.element.player.quseCard = async function (card, targets, cards) {
                    const player = this;
                    if (typeof card == 'string') {
                        card = { name: card };
                    }
                    const name = card.name;
                    const info = lib.card[name];
                    if (!cards) {
                        cards = [card];
                    }
                    const skill = _status.event.skill;
                    if (info.contentBefore) {
                        const next = game.createEvent(name + 'ContentBefore', false);
                        if (next.parent) {
                            next.parent.stocktargets = targets;
                        }
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'precard';
                        next.forceDie = true;
                        await next.setContent(info.contentBefore);
                    }
                    if (!info.multitarget) {
                        for (const target of targets) {
                            if (target && target.isDead()) return;
                            if (info.notarget) return;
                            const next = game.createEvent(name, false);
                            if (next.parent) {
                                next.parent.directHit = [];
                            }
                            next.targets = targets;
                            next.target = target;
                            next.card = card;
                            if (info.type == 'delay') {
                                next.card = {
                                    name: name,
                                    cards: cards,
                                };
                            }
                            next.cards = cards;
                            next.player = player;
                            next.type = 'card';
                            next.skill = skill;
                            next.baseDamage = Math.max(numberq1(info.baseDamage));
                            next.forceDie = true;
                            next.directHit = true;
                            await next.setContent(info.content);
                        }
                    } else {
                        if (info.notarget) return;
                        const next = game.createEvent(name, false);
                        if (next.parent) {
                            next.parent.directHit = [];
                        }
                        next.targets = targets;
                        next.target = targets[0];
                        next.card = card;
                        if (info.type == 'delay') {
                            next.card = {
                                name: name,
                                cards: cards,
                            };
                        }
                        next.cards = cards;
                        next.player = player;
                        next.type = 'card';
                        next.skill = skill;
                        next.baseDamage = Math.max(numberq1(info.baseDamage));
                        next.forceDie = true;
                        next.directHit = true;
                        await next.setContent(info.content);
                    }
                    if (info.contentAfter) {
                        const next = game.createEvent(name + 'ContentAfter', false);
                        next.targets = targets;
                        next.card = card;
                        next.cards = cards;
                        next.player = player;
                        next.skill = skill;
                        next.type = 'postcard';
                        next.forceDie = true;
                        await next.setContent(info.contentAfter);
                    }
                    return player;
                }; //解构用牌
                lib.element.player.qrevive = function () {
                    const player = this;
                    if (player.parentNode != ui.arena) {
                        ui.arena.appendChild(player);
                    } //防止被移除节点
                    player.classList.remove('removing', 'hidden', 'dead');
                    game.log(player, '复活');
                    player.maxHp = Math.max(lib.character[player.name]?.maxHp || 0, player.maxHp || 0);
                    player.hp = player.maxHp;
                    game.addVideo('revive', player);
                    player.removeAttribute('style');
                    player.node.avatar.style.transform = '';
                    player.node.avatar2.style.transform = '';
                    player.node.hp.show();
                    player.node.equips.show();
                    player.node.count.show();
                    player.update();
                    game.players.add(player);
                    game.dead.remove(player);
                    player.draw(Math.min(player.maxHp, 20));
                    return player;
                }; //复活函数
                lib.element.player.zhenshang = function (num, source, nature) {
                    const player = this;
                    let str = '受到了';
                    if (source) {
                        str += `来自<span class='bluetext'>${source == player ? '自己' : get.translation(source)}</span>的`;
                    }
                    str += get.cnNumber(num) + '点';
                    if (nature) {
                        str += get.translation(nature) + '属性';
                    }
                    str += '伤害';
                    game.log(player, str);
                    const stat = player.stat;
                    const statx = stat[stat.length - 1];
                    if (!statx.damaged) {
                        statx.damaged = num;
                    } else {
                        statx.damaged += num;
                    }
                    if (source) {
                        const stat = source.stat;
                        const statx = stat[stat.length - 1];
                        if (!statx.damage) {
                            statx.damage = num;
                        } else {
                            statx.damage += num;
                        }
                    }
                    player.hp -= num;
                    player.update();
                    player.$damage(source);
                    var natures = (nature || '').split(lib.natureSeparator);
                    game.broadcastAll(
                        function (natures, player) {
                            if (lib.config.animation && !lib.config.low_performance) {
                                if (natures.includes('fire')) {
                                    player.$fire();
                                }
                                if (natures.includes('thunder')) {
                                    player.$thunder();
                                }
                            }
                        },
                        natures,
                        player
                    );
                    var numx = player.hasSkillTag('nohujia') ? num : Math.max(0, num - player.hujia);
                    player.$damagepop(-numx, natures[0]);
                    if (player.hp <= 0 && player.isAlive()) {
                        player.dying({ source: source });
                    }
                    return player;
                }; //真实伤害
                lib.element.player.qequip = function (card) {
                    const player = this;
                    if (Array.isArray(card)) {
                        for (const i of card) {
                            player.qequip(i);
                        }
                    } else if (card) {
                        if (card[card.cardSymbol]) {
                            const owner = get.owner(card);
                            const vcard = card[card.cardSymbol];
                            if (owner) {
                                owner.vcardsMap?.equips.remove(vcard);
                            }
                            player.vcardsMap?.equips.add(vcard);
                        } else {
                            const vcard = new lib.element.VCard(card);
                            const cardSymbol = Symbol('card');
                            card.cardSymbol = cardSymbol;
                            card[cardSymbol] = vcard;
                            player.vcardsMap?.equips.push(vcard);
                        }
                        player.node.equips.appendChild(card);
                        card.style.transform = '';
                        card.node.name2.innerHTML = `${get.translation(card.suit)}${card.number} ${get.translation(card.name)}`;
                        const info = lib.card[card.name];
                        if (info && info.skills) {
                            for (const i of info.skills) {
                                player.addSkillTrigger(i);
                            }
                        }
                    }
                    return player;
                };
                lib.element.player.qdie = function (source) {
                    const player = this;
                    player.qdie1(source);
                    player.qdie2(source);
                    player.qdie3(source);
                    return player;
                }; //可以触发死亡相关时机,但是死亡无法避免//直接正常堆叠事件即可.如果await每个qdie123事件,那么外部就必须await qdie了,否则就卡掉
                lib.element.player.qdie1 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex1', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieBefore');
                        await event.trigger('dieBegin');
                    });
                    return next;
                }; //触发死亡前相关时机//不能用async,不然会卡掉后续事件,不能await那个setcontent
                lib.element.player.qdie2 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex2', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.restMap = { type: null, count: null, audio: null };
                    next.excludeMark = [];
                    next.setContent('die');
                    return next;
                }; //斩杀
                lib.element.player.qdie3 = function (source) {
                    const player = this;
                    const next = game.createEvent('diex3', false);
                    next.source = source;
                    next.player = player;
                    next._triggered = null;
                    next.setContent(async function (event, trigger, player) {
                        await event.trigger('dieEnd');
                        await event.trigger('dieAfter');
                    });
                    return next;
                }; //触发死亡后相关时机
            }; //解构魔改本体函数
            mogai();
            game.mp413 = async function (Q) {
                return new Promise((resolve) => {
                    const video = document.createElement('video');
                    video.src = `extension/末日浩劫/mp4/${Q}.mp4`;
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
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '末日浩劫',
                    connect: true,
                    character: {
                        ali_jiushizhu: ['male', 'ai', 4, ['mori_poxiao', 'mori_liming'], ['des:至高神Alice选定的救世主,拯救人类的旅途上他将遇到残酷的事实,救世主的力量与人类的数量成反比,人类越多,救世主越弱,人类越少,救世主越强,当世界只剩他一人时,他或许可以弑杀神明.(对不起,我想拯救你,但我必须先杀了你)']],
                        mori_npc: ['none', 'ai', 4, [], ['des:.']],
                        mori_npc2: ['none', 'ai', 4, [], ['des:.']],
                        mori_npc3: ['none', 'ai', 4, [], ['des:.']],
                        mor_ashenminjinjichang: ['none', 'ai', 9, [], ['zhu', 'boss', 'bossallowed', 'des:存在与世界夹缝之中的竞技场,传说此竞技场是为至高神与外神对弈的棋盘,强者能在里面获得一切,弱者将失去一切']],
                        wuyue_xunchas: ['none', 'mie', 15, ['aili_gaodengshenm', 'aili_fenxi', 'aili_jiazhipand'], ['des:巡查使,至高神Alice利用末日主宰的小部分躯壳而制造出来的机械生命,因此拥有末日主宰的部分性格(反骨仔),末日主宰与其似乎达成什么协议,然而至高神Alice因为觉得有趣,并没有进行干涉']],
                        wuyue_morizz: ['none', 'mie', 12, ['aili_chouqu', 'aili_haojie', 'aioi_benyuan', 'aili_fensa'], ['des:末日主宰(分身),此界之外的神明,简称:外神,会将遇到的所有世界进行毁灭,在数千年前遇到了此方世界,被此界至高神Alice所阻拦,随后被Alice击败并驱逐,但是其征战无数世界岂能被此界所阻拦,一直想方设法的对此界进行破坏']],
                        wuyue_shoihuqs: ['male', 'ai', 4, ['aili_shouhu', 'aili_rongyao'], ['des:擅长守护的骑士,经常可以在大人物身边看到他们']],
                        wuyue_jianxiqis: ['male', 'ai', 3, ['aili_gedang', 'aili_chongfeng'], ['des:见习骑士,经历3年,经过考核后才可以转正的骑士,当然,有些人可能一辈子也是见习其实']],
                        wuyue_poxieqis: ['male', 'ai', 4, ['aili_shanbi', 'aili_touzhix'], ['des:破邪骑士,专门致力于斩杀邪魔的骑士,全世界各个地方都可能遇到他们,(破邪骑士:如果你是非人类,你最好藏好点,不要让我发现了)']],
                        wuyue_rongyqoqis: ['male', 'ai', 4, ['aili_zhujia', 'aili_shanbi'], ['des:荣耀骑士,因立过大功,而被册封的骑士,可以这么说:所有荣耀骑士都是功勋累累']],
                        wuuue_weiguangqis: ['male', 'ai', 4, ['aili_guangren', 'aili_guangbao'], ['des:微光骑士,致力于解救所有人,将所有迷途的羔羊代带入光明,(微光无法照亮世界,只能照亮自身周围)']],
                        wuyue_zhigaiqis: ['male', 'ai', 4, ['aili_zhigao', 'aili_dangfan'], ['des:光明教会三大骑士之一,至高骑士,上一任在2年前被末日主宰击杀,这个是最近才升任上来的,为人有丶嚣张']],
                        wuyue_shenshengqiss: ['male', 'ai', 5, ['aili_guangrenz', 'aili_ansunz'], ['des:光明教会三大骑士之首,神圣骑士,也是光明教会的最高统领']],
                        wuyue_yonghqis: ['male', 'ai', 4, ['aili_youren', 'aili_kanpo'], ['des:光明教会三大骑士之一,永恒骑士,拥有不朽的寿命,见证了光明教会数百年兴衰']],
                        wuyue_skgzr: ['male', 'mie', 4, ['aili_benneng', 'aili_canbao', 'aili_banr', 'aili_jixiehua'], ['des:人类妄想研究魔化而失控的实验体,被巡查使投放到了人类城市']],
                        wuyue_moxgzr: ['male', 'mie', 6, ['aili_jixiehua', 'aili_banr'], ['des:被末日主宰改造并魔化的人类']],
                        wuyue_moqhr: ['male', 'mie', 7, ['aili_banr'], ['des:被魔化的人类强者']],
                        wuyue_mohuazj: ['male', 'mie', 5, ['aili_banr', 'aili_gedang', 'mori_huimieqixi'], ['des:魔化骑士,曾经的他在对抗黑潮之中被击垮,现在的他只是一个向往毁灭的空壳']],
                        wuyue_morishouwei: ['none', 'mie', 10, ['wuyue_jijiaz', 'aili_liangzhizhuanh', 'aili_chongneng', 'wuyue_huifu'], ['des:人界遗失的守卫者之一,被重新改写了意志,现听命与巡查使']],
                        wuyue_zhanzkuil: ['none', 'ai', 8, ['wuyue_jijiaz', 'wuyue_nengyuan', 'wuyue_paoji', 'wuyue_huifu'], ['des:人界的守卫者之一,防止任何危险生物进入人界']],
                        wuyue_zhuangjijial: ['none', 'mie', 12, ['aili_zhendang', 'aili_lichang', 'aili_jushou', 'aili_jixiehua'], ['des:从天界逃出来的机械生物,拥有能让空间震荡的力量,但是正在被人界的守卫者追杀']],
                        wuyue_heiajqis: ['none', 'ai', 6, ['aili_rimo', 'aili_zhuguang', 'aili_chenlun'], ['des:被神明与世界抛弃的神圣骑士,随时都可能彻底堕落']],
                        aili_morilail: ['none', 'mie', 15, [], ['boss', 'bossallowed', 'des:末日即将亲临,你可感到兴奋']],
                        aili_mrsz: ['none', 'mie', 10, ['wuyue_jijiaz', 'aili_lz', 'qili_xn', 'aili_ms', 'aili_mr'], ['des:为世界带来末日的使者']],
                        mori_gtzj: ['female', 'ai', 4, ['mori_tiebizzz', 'mori_tieji'], ['des:至高神Alice手下的量产型制式钢铁军团士兵']],
                        mori_tkzj: ['female', 'ai', 4, ['mori_shenkong', 'mori_gaokongyazhi'], ['des:至高神Alice手下的量产型制式天空军团士兵']],
                        aili_morihj: ['none', 'mie', 10, [], ['boss', 'bossallowed', 'des:对众生的裁决,你能否活下来']],
                        aili_heichao: ['none', 'mie', 5, ['aili_jixiehua', 'aili_banr'], ['des:末日主宰手下量产型机械军团士兵,末日主宰会不定期的打开深渊之门将数百至数千万的黑潮送往此方世界']],
                        mor_guangminshenjiao: ['none', 'ai', 9, [], ['zhu', 'boss', 'bossallowed', 'des:信仰至高神Alice的教会,致力于拯救人类,传播光明,可惜神明无情,将观察众生的痛苦与折磨视为最大的乐趣']],
                        mori_xikadiya: ['female', 'ai', 4, ['mori_shouxu', 'mori_aishis'], ['des:至高神Alice座下天使之一:和平天使.被授予的使命是将和平带给世人,这个目的永远也无法达成']],
                        mori_shenling: ['female', 'ai', 4, ['mori_shenlinga', 'mori_chubao'], ['des:至高神Alice座下天使之一:除暴天使,自小失去双亲,被世界的恶意笼罩,经历痛苦与暴力的折磨而死,死后被至高神Alice复活,授予了除暴天使的职位,Alice为何将其复活,谁也不知道,可能是一时觉得有趣,也或者将其当成乐趣之一,谁也不会清楚']],
                        mori_alice: ['female', 'ai', 3, ['mori_chencis', 'mori_chaokonga', 'mori_shenyia'], ['zhu', 'des:至高神Alice,喜乐无常']],
                        mori_shenmingqis: ['female', 'ai', 3, ['mori_shenmingqis_jieshao'], ['zhu', 'boss', 'bossallowed', 'des:这是一场与神明的对决']],
                        wuyue_mohuazj2: ['male', 'mie', 6, ['aili_banr', 'aili_dangfan', 'mori_fenshizhiyi'], ['des:前任至高骑士,因两年前在一次对抗黑潮的行动中大意之下被黑潮困死,之后被生擒送到了末日主宰手中,末日主宰魔化并改写了他的意志,现在的他只是一个向往毁灭的空壳']],
                        mori_guangminqis: ['male', 'ai', 12, ['mori_bishi', 'aili_guangrenz', 'aili_zhuiji'], ['des:由混沌之中诞生的光明意志,因信仰而生,(如果世间是光明的,那么吾就是他们的守护者,如世界是黑暗的,那么吾就是他们的指明灯,如果人们不信仰吾,吾如何去庇护他们呢)']],
                        mori_xunhuuhze: ['male', 'ai', 7, ['mori_xunhui', 'aili_jixiehua'], ["des:巡回者,数十年前曾经是与巡查使同级的机械生命,与巡查使不同,其对Alice及其忠诚,却被巡查使陷害其与外神勾结,被天界放逐了.至始至终它都没有怀疑过巡查使,也一直在为巡查使口中的'真相'而与天界越走越远.而作为至高神的Alice,清楚一切,却笑而不语"]],
                        mori_shoujiezhe: ['none', 'ai', 8, ['wuyue_jijiaz', 'qili_xn', 'mori_bilei'], ['des:人界的守卫者之一,防止任何危险生物进入人界']],
                        mori_zhihuitians: ['female', 'ai', 4, ['mori_tianqi'], ['des:至高神Alice座下天使之一:权能天使.她是天空战姬的统领,主要的职责就是抹除异端,陨石之下,皆为异端']],
                        mori_guangmingshennv: ['female', 'ai', 4, ['mori_shengyan', 'mori_guanganlunzhuan'], ['zhu', 'des:当她成为光明圣女时,她过去的一切都已经被舍去,她是光明圣女.但是光明之下,阴影随行,这个世界已经腐朽不堪,她什么都无法阻止.(如果光明无法拯救世人.....)']],
                        mori_shenzhi: ['female', 'ai', 4, ['mori_guanghuilaiwei', 'mori_diaolingzhihua'], ['des:数百年前,神明现身人界,将她指定为光明圣子,并且赋予了她祝福,将她的生命与光明教会链接在了一起,她的生命如今或许即将终结']],
                        mori_hujiaoqishi: ['female', 'ai', 4, ['mori_xunjiao', 'mori_quguang'], ['des:光明教会的护教骑士,作为光明圣女与圣子的护卫队,由修女之中选拔出来的一只部队,一般只有教廷本部才会存在']],
                        mori_xingyueqis: ['female', 'ai', 4, ['mori_chuyi', 'mori_suiyin'], ['des:教会之中的新月骑士,作为光明圣女手中的一只隐秘骑士部队,其构成全部是由教会收养的孤儿之中选拔出来的']],
                        mori_fuchouzhe: ['male', 'mie', 5, ['mori_heijiang', 'mori_juejian'], ['des:复仇者,年幼时与希丝黛塔是亲梅竹马的关系,之后因其被光明教会选中成为了光明圣女,而他也对她发誓以后要成为一名骑士守护她,然而迎来的却是教会的异端审判,[成为光明圣女需要舍弃一切吗？] 望着如同炼狱般的村庄,他如是的说到.数年后,他从深渊之中回归,带来了炙烈的复仇之火']],
                        miri_zhaoxijushou: ['none', 'mie', 15, ['aili_jushou', 'mori_qianfu', 'mori_qichao', 'mori_yanmoshijie'], ['des:能引发天灾的巨兽,曾多次引发洪水覆灭人类的城市,也是此世界四大移动天灾之一,潮汐巨兽']],
                        miri_huimieshitu: ['male', 'mie', 4, ['mori_paicili', 'mori_huimieyizhi', 'mori_mingyunbodong'], ['des:毁灭使徒,曾亲眼目睹末日主宰毁灭世界的伟力,被其的强大所折服,甘愿追随与末日主宰,当数千年前末日主宰被Alice击退时,其也被Alice重伤.但是她一直坚信着,井底之神(指Alice),终将被冕下的毁灭撕碎']],
                        miri_chiuuzhishou: ['female', 'mie', 4, [], ['des:痴愚之獣,相传是末日主宰的宠物,它是一个矛盾的存在,既爱着世界,又恨着世界,如果惹它生气的话,可能会被它召唤数百个陨石进行轰击']],
                        ali_zhiyintians: ['female', 'ai', 4, ['mori_shige', 'mori_zhiyin'], ['des:指引天使,至高神Alice座下天使之一,在人类眼中,她是指引人类,为人类带来光明,繁荣的天使,这一项职责她已经持续了无数年.然而她的真正职责却是为救世主指引方向.(救世主,拯救与牺牲是同在的哦)']],
                        mori_yinyingqis: ['male', 'ai', 4, ['mori_yinyingjian', 'mori_shenyuanqixi', 'mori_jimiezhijian'], ['des:阴影骑士,他是行走在深渊边界的骑士,常年与黑潮进行战斗的他,因过多的接触深渊已经被深渊所腐蚀,但是坚韧的信念依旧驱赶着他们,为了保护身后的净土而战斗着,然而却不知身后已经没有了净土']],
                        mori_pomieqis: ['male', 'ai', 4, ['mori_dangmo', 'mori_shixin', 'mori_bumieyizhi'], ['des:破灭骑士,他们的身体已经被腐化为半人半怪物,他们的意志已经模糊不清,但是他们对抗深渊的意念却从未改变,永不停歇的游荡在世界边缘,将所遇到的深渊全部送葬']],
                        mori_zhuguangzhe: ['female', 'ai', 4, ['mori_zhanyi', 'mori_guangneng'], ['des:逐光者,由人界光明教众中选取并献祭给神明的女性转化而成,她们的一生都在侍奉神明,而这种情况并将永远持续下去']],
                        mori_zhixutianshi: ['female', 'ai', 4, ['mori_shenmingxianzhi', 'mori_zhanzjielv'], ['des:秩序天使,至高神Alice座下天使之一,她的职责是将秩序带给世间,但是她维持的秩序如今已如镜花水月一般脆弱不堪']],
                        mori_pojunzhanji: ['female', 'ai', 4, ['mori_xuhang', 'mori_zhanzhenjinzhi'], ['des:至高神Alice手下的精英军团士兵,当人界混乱时,她们将出现,并对人界进行镇压,此前这种事情她们已经执行过无数次了']],
                        mori_minglitianshi: ['female', 'ai', 4, ['mori_yinguoqiege', 'mori_yinguofanzhuan'], ['des:命理天使,至高神Alice座下天使之一,她操控着凡人的命运,凡人的悲欢离合或许只是她一次小小的恶作剧,当然,救世主也在其中被宿命所拉扯']],
                        mori_wenmingmiejue: ['female', 'ai', 10, [], ['boss', 'bossallowed', 'des:轮回已经开始,新文明将从旧文明尸体中发芽']],
                        mori_mieshitianshi: ['female', 'ai', 4, ['mori_zhongyan', 'mori_zhaowuquanneng'], ['zhu', 'boss', 'bossallowed', 'des:当灭世天使醒来时,旧世界将会迎来终结']],
                    },
                    skill: {
                        mori_shenmingqis_jieshao: {

                        },
                        wuyue_jijiaz: {
                            group: ['wuyue_jijiaz_turn', 'wuyue_jijiaz_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.notLink() && event.card && event.card.name == 'sha' && event.player.countCards('h') < player.countCards('h');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'sha';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'jiu')) return false;
                                },
                                respondSha: true,
                                noturn: true,
                            },
                        },
                        wuyue_nengyuan: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '源',
                            init(player) {
                                player.storage.wuyue_nengyuan = 0;
                                player.markSkill('wuyue_nengyuan');
                            },
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            content() {
                                player.storage.wuyue_nengyuan += 1;
                                game.playvs('jiqiren');
                                player.changeHujia(3);
                                player.draw(3);
                                player.markSkill('wuyue_nengyuan');
                                player.say('能源核心开始运转,能量聚集中......');
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                combo: 'wuyue_paoji',
                            },
                        },
                        wuyue_paoji: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.wuyue_nengyuan >= 5;
                            },
                            usable: 3,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_paoji'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('mieshi');
                                    player.storage.wuyue_nengyuan -= 2;
                                    result.targets[0].damage(player.hp - 4);
                                    player.changeHujia(9 - player.hp);
                                    player.draw(9 - player.hp);
                                }
                            },
                            ai: {
                                combo: 'wuyue_nengyuan',
                                expose: 1,
                                order: 8,
                                threaten: 0.5,
                                result: {
                                    player: 1,
                                    target: -2,
                                },
                            },
                        },
                        wuyue_huifu: {
                            audio: 'ext:末日浩劫/audio:4',
                            enable: 'phaseUse',
                            prompt: '失去一层护甲回复一点体力',
                            filter(event, player) {
                                if (player.hp >= player.maxHp) return false;
                                if (player.hujia <= 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                game.playvs('chongneng1');
                                player.changeHujia(-1);
                                ('step 1');
                                player.recover();
                                player.draw();
                            },
                            ai: {
                                order: 30,
                                result: {
                                    player(player) {
                                        if (player.hp > 7) return -1;
                                        return 2;
                                    },
                                },
                            },
                        },
                        aili_gedang: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) event.goto(2);
                                if (n == 2) player.draw();
                                ('step 1');
                                event.finish();
                                ('step 2');
                                game.playvs('gedang2');
                                trigger.num--;
                            },
                        },
                        aili_chongfeng: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'phaseJudgeBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var check = player.countCards('h') > 0;
                                player
                                    .chooseTarget(get.prompt('aili_chongfeng'), '跳过判定阶段和摸牌阶段,视为对一名其他角色使用一张【杀】', function (card, player, target) {
                                        if (player == target) return false;
                                        return player.canUse({ name: 'sha' }, target, false);
                                    })
                                    .set('check', check)
                                    .set('ai', function (target) {
                                        if (!_status.event.check) return 0;
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('chonga');
                                    player.useCard({ name: 'sha' }, result.targets[0], false);
                                    trigger.cancel();
                                    player.skip('phaseDraw');
                                    player.draw();
                                }
                            },
                        },
                        aili_shanbi: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) event.goto(2);
                                if (n == 2) player.draw();
                                ('step 1');
                                event.finish();
                                ('step 2');
                                game.playvs('gedang3');
                                trigger.num = 0;
                            },
                        },
                        aili_touzhi: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.type(card) == 'equip';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { type: 'equip' })) return false;
                                }
                            },
                            prompt: '将一张装备牌当杀使用或打出',
                            check(card) {
                                return 16 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { type: 'equip' })) return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 15;
                                    return 10;
                                },
                                result: {
                                    target(player, target) {
                                        if (player.hasSkill('jiu') && !target.getEquip('baiyin')) {
                                            if (get.attitude(player, target) > 0) {
                                                return -6;
                                            } else {
                                                return -4;
                                            }
                                        }
                                        return -2.5;
                                    },
                                    player: 2,
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
                        aili_touziz: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.type(card) == 'equip') return 8;
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.cards && get.type(event.cards[0], 'equip') == 'equip';
                            },
                            forced: true,
                            content() {
                                if (player.hasSkill('aili_banr')) {
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                    game.playvs('dahan');
                                    player.draw(2);
                                    player.cs1s('将你们诛杀殆尽!!!', 3);
                                } else {
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                        player.cs1s('用尽一切,我也要打败你!!!', 3);
                                    }
                                    game.playvs('dahan');
                                    player.draw();
                                }
                            },
                        },
                        aili_touzhix: {
                            forced: true,
                            group: ['aili_touziz', 'aili_touzhi'],
                        },
                        aili_zhujia: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.type(card) == 'equip') return 15;
                                },
                            },
                            audio: 'ext:末日浩劫/audio:4',
                            enable: 'phaseUse',
                            prompt: '弃置一张装备牌为自己加一层护甲',
                            filter(event, player) {
                                return player.countCards('he', { type: 'equip' }) > 0;
                            },
                            position: 'he',
                            filterCard: {
                                type: 'equip',
                            },
                            check(card) {
                                return 16 - get.value(card);
                            },
                            content() {
                                if (player.hasSkill('aili_banr') && player.name == 'wuyue_rongyqoqis') {
                                    player.changeHujia();
                                    player.draw(2);
                                    game.playvs('shouhu');
                                    player.cs1s('我,坚不可摧!!!', 3);
                                } else {
                                    game.playvs('shouhu');
                                    player.changeHujia();
                                    player.draw();
                                    player.cs1s('此物可为盾!!!', 3);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('e') <= 1) return -1;
                                        if (player.countCards('he') >= 4) return 2;
                                        if (player.hujia <= 1) return 3;
                                        return 1;
                                    },
                                },
                            },
                        },
                        aili_shouhu: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            usable: 2,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hujia >= player.hp) return false;
                                return true;
                            },
                            content() {
                                if (player.hasSkill('aili_banr') && player.name == 'wuyue_shoihuqs') {
                                    game.playvs('shouhu');
                                    target.changeHujia();
                                    player.draw(2);
                                } else {
                                    game.playvs('shouhu');
                                    target.changeHujia();
                                }
                            },
                            ai: {
                                expose: 1,
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.hujia <= 2) return 2;
                                        if (player == target && player.hp < player.maxHp) return 9;
                                        return 1;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        aili_rongyao: {
                            trigger: {
                                player: ['damageBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && player.hujia > 0;
                            },
                            content() {
                                if (player.name == 'wuyue_shoihuqs' && player.hasSkill('aili_banr')) {
                                    trigger.source.chooseToDiscard(trigger.num, 'he', true);
                                    player.draw(trigger.num + 1);
                                    game.playvs('rongyao');
                                    player.say('我,是神的代行者!');
                                } else {
                                    trigger.source.chooseToDiscard(trigger.num, 'he', true);
                                    game.playvs('rongyao');
                                    player.say('荣耀即吾命!');
                                }
                            },
                        },
                        aili_guangren: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            audio: 'ext:末日浩劫/audio:2',
                            content() {
                                'step 0';
                                var check;
                                if (player.hp < 0) {
                                    check = false;
                                } else {
                                    check =
                                        game.countPlayer(function (current) {
                                            return player != current && get.attitude(player, current) > 1;
                                        }) >= 1;
                                }
                                if (get.is.versus()) {
                                    event.versus = true;
                                    player.chooseBool(get.prompt('aili_guangren'));
                                } else {
                                    player
                                        .chooseTarget(
                                            get.prompt('aili_guangren'),
                                            [1, 2],
                                            function (card, player, target) {
                                                return player != target;
                                            },
                                            function (target) {
                                                if (!_status.event.check) return 0;
                                                return get.attitude(_status.event.player, target);
                                            }
                                        )
                                        .set('check', check);
                                }
                                ('step 1');
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    game.asyncDraw(targets);
                                    player.draw();
                                    game.playvs('weiguang');
                                }
                            },
                            ai: {
                                expose: 0.5,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'du' && player.hp > 3) return [1, 1];
                                    },
                                },
                                threaten: 0.3,
                            },
                            group: 'aili_guangren_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.name == 'wuuue_weiguangqis' && player.hasSkill('aili_banr');
                                    },
                                    content() {
                                        player.damage(2);
                                        player.recover();
                                        player.draw();
                                        player.recover();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        aili_guangbao: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('aili_guangbao'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('guangyi');
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                    player.draw(2);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten(player, target) {
                                    return 1.6;
                                },
                            },
                        },
                        aili_zhigao: {
                            trigger: {
                                player: ['phaseDiscardEnd'],
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('he');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('aili_zhigao'), function (card, player, target) {
                                        return target != player && target.countCards('he');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].chooseToDiscard(2, 'he', true);
                                    player.draw(2);
                                }
                            },
                            ai: {
                                order: 10,
                                expose: 1,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        return -3;
                                    },
                                },
                            },
                        },
                        aili_dangfan: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.hp > 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'wuyue_zhigaiqis' && player.hasSkill('aili_banr')) {
                                    var n = [1, 2].randomGet();
                                    if (n == 1) event.goto(2);
                                    if (n == 2) event.goto(3);
                                } else {
                                    var n = [1, 2, 3, 4].randomGet();
                                    if (n == 1) trigger.num--;
                                    if (n == 2) player.draw();
                                    if (n == 3) trigger.source.damage();
                                    if (n == 4) event.finish();
                                }
                                ('step 1');
                                game.playvs('gedang3');
                                player.say('哼!蝼蚁');
                                event.finish();
                                ('step 2');
                                trigger.num--;
                                player.draw(2);
                                game.playvs('gedang4');
                                player.cs1s('蝼蚁,你就这点本事么？', 5);
                                event.finish();
                                ('step 3');
                                game.playvs('gedang5');
                                trigger.source.damage();
                                player.draw(2);
                                player.cs1s('蝼蚁,给我去死!', 5);
                            },
                            ai: {
                                noh: true,
                                threaten: 9,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'trick') return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_youren: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') < 2;
                            },
                            content() {
                                if (player.name == 'wuyue_yonghqis' && player.hasSkill('aili_banr')) {
                                    player.draw(6 - player.countCards('h'));
                                    game.playvs('youren');
                                } else {
                                    player.draw(2 - player.countCards('h'));
                                    game.playvs('youren');
                                }
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 2;
                                },
                                maxHandcard(player, num) {
                                    if (!player.hasSkill('aili_banr')) {
                                        return num - (player.hp - 1);
                                    }
                                },
                            },
                            ai: {
                                noh: true,
                                threaten: 4,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 1];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_kanpo: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'damageBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.hp >= 0 && event.source != player;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'wuyue_yonghqis' && player.hasSkill('aili_banr')) {
                                    var n = [1, 2].randomGet();
                                    if (n == 1) trigger.num = 0;
                                    if (n == 2) trigger.source.chooseToDiscard(trigger.num * 2, 'he', true);
                                } else {
                                    var n = [1, 2, 3].randomGet();
                                    if (n == 1) trigger.num = 0;
                                    if (n == 2) player.draw(trigger.num + 1);
                                    if (n == 3) trigger.source.chooseToDiscard(trigger.num + 1, 'he', true);
                                }
                                ('step 1');
                                game.playvs('gedang4');
                                player.say('哦？有点意思!');
                            },
                        },
                        aili_guangrenz: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && get.color(event.card) == 'red';
                            },
                            content() {
                                trigger.directHit = true;
                                player.draw();
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 2;
                                },
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (get.color(card) == 'red' && card.name == 'sha' && player.countCards('h', { name: 'sha' }) >= 1) return [3, 6];
                                    },
                                },
                            },
                        },
                        aili_zhuiji: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && _status.currentPhase == player;
                            },
                            content() {
                                if (player == game.boss) {
                                    trigger.num++;
                                    player.getStat().card.sha--;
                                    player.recover();
                                    player.say('光明净世!');
                                } else {
                                    trigger.num++;
                                    player.getStat().card.sha--;
                                    player.say('光明净世!');
                                }
                            },
                        },
                        aili_ansun: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.event.skill != 'aili_ansun' && card.name != 'shan' && get.color(card) == 'black') return false;
                                },
                                cardRespondable(card, player) {
                                    if (_status.event.skill != 'aili_ansun' && card.name != 'shan' && get.color(card) == 'black') return false;
                                },
                                cardSavable(card, player) {
                                    if (_status.event.skill != 'aili_ansun' && card.name != 'shan' && get.color(card) == 'black') return false;
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filterCard: {
                                color: 'black',
                            },
                            viewAs: {
                                name: 'shan',
                                suit: 'club',
                                number: 11,
                                cards: [
                                    {
                                        node: {
                                            image: {},
                                            info: {},
                                            name: {},
                                            name2: {},
                                            background: {},
                                            intro: {},
                                            range: {},
                                        },
                                        storage: {},
                                        vanishtag: [],
                                        _uncheck: [],
                                        suit: 'club',
                                        number: 11,
                                        name: 'sha',
                                        cardid: '2546126299',
                                        clone: {
                                            name: 'sha',
                                            suit: 'club',
                                            number: 11,
                                            node: {
                                                name: {},
                                                info: {},
                                                intro: {},
                                                background: {},
                                                image: {},
                                            },
                                            _transitionEnded: true,
                                            timeout: 1388,
                                        },
                                        timeout: 1368,
                                        original: 'h',
                                    },
                                ],
                            },
                            check() {
                                return 1;
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                                    },
                                },
                                respondShan: true,
                                order: 4,
                                useful: -1,
                                value: -1,
                                basic: {
                                    useful: [5, 1],
                                    value: [5, 1],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        aili_haoyueyuyinyshi: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'shan' && event.cards && event.cards[0] && get.color(event.cards[0]) == 'black';
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.say('你与我的差距犹如皓月与萤石!');
                            },
                        },
                        aili_ansunz: {
                            forced: true,
                            group: ['aili_haoyueyuyinyshi', 'aili_ansun', 'aili_yingshiz', 'aili_zhuiji'],
                        },
                        aili_yingshiz: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.type(card) == 'basic' && get.color(card) == 'red';
                            },
                            position: 'h',
                            viewAs: {
                                name: 'sha',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('h')) return false;
                                } else {
                                    if (!player.countCards('h', { type: 'basic' })) return false;
                                }
                            },
                            prompt: '将一张红色基本牌当杀使用或打出',
                            check(card) {
                                return 10 - get.value(card);
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('h')) return false;
                                    } else {
                                        if (!player.countCards('h', { type: 'basic' })) return false;
                                    }
                                },
                                respondSha: true,
                                basic: {
                                    useful: [1, 1],
                                    value: [5, 1],
                                },
                                order() {
                                    if (_status.event.player.hasSkillTag('presha', true, null, true)) return 10;
                                    return 3;
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
                        aili_jixiehua: {
                            group: ['aili_jixiehua_turn', 'aili_jixiehua_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.notLink() && event.card && event.card.name == 'sha' && event.player.countCards('h') <= player.countCards('h');
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                            },
                            ai: {
                                noturn: true,
                            },
                        },
                        aili_banr: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += 1;
                            },
                            mod: {
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1]++;
                                },
                                maxHandcard(player, num) {
                                    return num + 3;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.subtype(card) == 'equip1') return +1;
                                    },
                                },
                            },
                        },
                        aili_rimo: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '蚀',
                            forced: true,
                            init(player) {
                                player.storage.aili_rimo = 0;
                                player.markSkill('aili_rimo');
                            },
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                if (event.name != 'useCard');
                                return get.color(event.card) == 'black';
                            },
                            content() {
                                if (player == game.boss) {
                                    player.storage.aili_rimo += 2;
                                    player.draw();
                                    player.loseHp();
                                    player.markSkill('aili_rimo');
                                    var n = [1, 2, 3, 4].randomGet();
                                    if (n == 1) game.playvs('mohua');
                                    if (n >= 2) event.finish();
                                } else {
                                    if (player.storage.aili_rimo <= 17) {
                                        player.storage.aili_rimo += 2;
                                        player.draw();
                                        player.loseHp();
                                        player.markSkill('aili_rimo');
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) game.playvs('mohua');
                                        if (n >= 2) event.finish();
                                    } else {
                                        player.loseHp();
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) game.playvs('mohua');
                                        if (n >= 2) event.finish();
                                    }
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.color(card) == 'black' && player.hp > 3) return [1, 2.5];
                                        if (get.color(card) == 'black' && player.hp <= 3) return [0.5, -5];
                                    },
                                },
                            },
                        },
                        aili_zhuguang: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                if (event.name != 'useCard');
                                return get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                player.storage.aili_rimo -= 1;
                                player.recover();
                                player.draw();
                                var n = [1, 2, 3, 4, 5].randomGet();
                                if (n == 1) game.playvs('zhuguang');
                                if (n >= 2) event.finish();
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.color(card) == 'red' && player.hp == 6) return [1, 1];
                                        if (get.color(card) == 'red' && player.hp == 5) return [1, 1.5];
                                        if (get.color(card) == 'red' && player.hp == 4) return [1, 2];
                                        if (get.color(card) == 'red' && player.hp < 4) return [1, 2.5];
                                    },
                                },
                            },
                        },
                        aili_chenlun: {
                            derivation: ['aili_banr', 'aili_canbao'],
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return player == game.boss && player.storage.aili_rimo >= 17;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp(17 - player.maxHp);
                                ('step 1');
                                if (player.hp < 17) {
                                    player.recover(17 - player.hp);
                                }
                                ('step 2');
                                game.playvs('chenlun2');
                                player.storage.aili_rimo = 0;
                                player.addSkill('aili_banr');
                                player.addSkill('aili_canbao');
                                player.awakenSkill('aili_rimo');
                                player.awakenSkill('aili_zhuguang');
                                player.awakenSkill('aili_chenlun');
                            },
                        },
                        aili_canbao: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && event.player.isAlive() && event.player.countCards('he') > 0 && event.player != player;
                            },
                            content() {
                                var num = 0;
                                if (trigger.player.countCards('he')) num++;
                                if (num > 0) {
                                    if (trigger.num <= 5) {
                                        trigger.player.chooseToDiscard(trigger.num + 1, 'he', true);
                                        player.draw(trigger.num + 1);
                                        game.playvs('chanbao');
                                        player.say('你们亲手将我送入深渊...现在我来赐予你们痛苦!!!');
                                    } else {
                                        trigger.player.chooseToDiscard(5, 'he', true);
                                        player.draw(5);
                                        game.playvs('chanbao');
                                        player.say('你们亲手将我送入深渊...现在我来赐予你们痛苦!!!');
                                    }
                                }
                            },
                            ai: {
                                threaten: 4,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_benneng: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.hp >= 0;
                            },
                            content() {
                                'step 0';
                                if (trigger.num <= 5) {
                                    var n = [1, 2, 3, 4].randomGet();
                                    if (n == 1) trigger.num = 0;
                                    if (n == 2) player.draw(trigger.num + 2);
                                    if (n == 3) event.goto(2);
                                    if (n == 4) trigger.source.chooseToDiscard(trigger.num + 2, 'he', true);
                                } else {
                                    var n = [1, 2, 3].randomGet();
                                    if (n == 1) trigger.num = 0;
                                    if (n == 2) player.draw(5);
                                    if (n == 3) trigger.source.chooseToDiscard(5, 'he', true);
                                }
                                ('step 1');
                                event.finish();
                                ('step 2');
                                game.playvs('benneng');
                                trigger.source.damage(trigger.num + 1);
                            },
                        },
                        aili_jushou: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'sha';
                                },
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1]++;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 1;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                game.playvs('jushou');
                                trigger.num += Math.max(2, Math.floor(player.maxHp - player.hp)) - 2;
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'jiu')) return false;
                                },
                                respondSha: true,
                                noturn: true,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_lichang: {
                            trigger: {
                                global: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.countCards('he') && event.player != player;
                            },
                            content() {
                                trigger.player.chooseToDiscard(1, 'he', true);
                            },
                        },
                        aili_zhendang: {
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                game.playvs('zhendang');
                                player.draw(3);
                                trigger.player.loseHp();
                            },
                        },
                        aili_liangzhizhuanh: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                trigger.num += Math.max(5, Math.floor(player.hujia)) - 2;
                                game.playvs('chongneng');
                                player.changeHujia(5);
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_chongneng: {
                            forced: true,
                            init(player) {
                                player.changeHujia(10);
                            },
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            content() {
                                player.changeHujia();
                            },
                            group: ['aili_chongneng_damage'],
                            subSkill: {
                                damage: {
                                    audio: 'ext:末日浩劫/audio:2',
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.hujia > 10;
                                    },
                                    usable: 9,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('aili_chongneng'), function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target) < 0) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return -1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            game.playvs('mieshi');
                                            player.changeHujia(-5);
                                            result.targets[0].damage(2);
                                            player.draw(5);
                                        }
                                    },
                                    ai: {
                                        expose: 1,
                                        order: 9,
                                        threaten: 0.5,
                                        result: {
                                            player: 1,
                                            target: -2,
                                        },
                                    },
                                },
                            },
                        },
                        aili_gaodengshenm: {
                            group: ['aili_gaodengshenm_turn', 'aili_gaodengshenm_damage', 'aili_gaodengshenm_damagez', 'aili_gaodengshenm_cancel'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.notLink() && event.player && event.player.hp <= player.hp;
                                    },
                                    content() {
                                        if (trigger.player.hasSkill('aili_fenxi_markz')) {
                                            trigger.player.removeSkill('aili_fenxi_markz');
                                            trigger.player.draw(3);
                                            player.chooseToDiscard(1, 'he', true);
                                            game.playvs('fenshen');
                                            event.finish();
                                        } else {
                                            player.draw();
                                        }
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                                damagez: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter: (event, player) => event.source,
                                    content() {
                                        if (trigger.source.hasSkill('aili_fenxi_mark')) {
                                            trigger.source.removeSkill('aili_fenxi_mark');
                                            trigger.source.chooseToDiscard(5, 'he', true);
                                            trigger.source.loseHp();
                                            player.draw(5);
                                            game.playvs('fenshen4');
                                            event.finish();
                                        } else {
                                            player.draw(3);
                                        }
                                    },
                                },
                                cancel: {
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    _priority: -11,
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 1;
                                    },
                                    content() {
                                        trigger.num = 1;
                                    },
                                },
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 3;
                                },
                                selectTarget(card, player, range) {
                                    if (Array.isArray(range) && range[1] == -1) return;
                                    if (card.name == 'sha') range[1] += 2;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'sha';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'jiu')) return false;
                                },
                                respondSha: true,
                                noturn: true,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                    },
                                },
                            },
                        },
                        aili_fenxi: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseDiscardEnd'],
                            },
                            forced: true,
                            audio: 'ext:末日浩劫/audio:2',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    if (event.name == 'roundStart' && !current.isMinHp()) return false;
                                    return current != player && !current.hasSkill('aili_fenxi_mark') && !current.hasSkill('aili_fenxi_markz');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('aili_fenxi'), function (card, player, target) {
                                        if (_status.event.round && !target.isMinHp()) return false;
                                        return target != player && !target.hasSkill('aili_fenxi_mark') && !target.hasSkill('aili_fenxi_markz');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('fenxi');
                                    var target = result.targets[0];
                                    target.loseHp();
                                    var n = [1, 2].randomGet();
                                    if (n == 1) target.addSkill('aili_fenxi_mark');
                                    if (n == 2) target.addSkill('aili_fenxi_markz');
                                }
                            },
                            group: ['aili_fenxi_mark', 'aili_fenxi_markz'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '无',
                                    intro: {
                                        content: '你被分析[无价值]',
                                    },
                                },
                                markz: {
                                    mark: true,
                                    marktext: '有',
                                    intro: {
                                        content: '你被分析[有价值]',
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                expose: 0.3,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        return -3;
                                    },
                                },
                            },
                        },
                        aili_jiazhipand: {
                            trigger: {
                                global: 'phaseDiscardEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && (event.player.hasSkill('aili_fenxi_mark') || event.player.hasSkill('aili_fenxi_markz'));
                            },
                            content() {
                                game.mp413('caijue');
                                if (trigger.player.hasSkill('aili_fenxi_markz')) {
                                    game.playvs('haojie2');
                                    trigger.player.damage(trigger.player.hujia + 1);
                                    player.recover();
                                } else {
                                    game.playvs('haojie2');
                                    trigger.player.loseMaxHp();
                                    trigger.player.chooseToDiscard(trigger.player.maxHp, 'he', true);
                                    player.draw(trigger.player.hp + 2);
                                    player.gainMaxHp();
                                }
                            },
                        },
                        aili_morizhuzai: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (game.players.length + game.dead.length <= 7 && player.name == 'wuyue_morizz') return true;
                                return false;
                            },
                            content() {
                                if (game.bossinfo) {
                                    game.bossinfo.loopType = 1;
                                }
                                player.say('吾之使者,苏醒吧!!!');
                                var list = [];
                                for (var i in lib.character) {
                                    if (lib.character[i].mode && lib.character[i].mode.includes(lib.config.mode) == false) continue;
                                    if (i != 'list') list.push(i);
                                }
                                var players = game.players.concat(game.dead);
                                for (var j = 0; j < players.length; j++) {
                                    list.remove([players[j].name]);
                                }
                                if (list.length) {
                                    const player2 = game.addPlayerQ('wuyue_mrsz');
                                    player2.identity = player.identity;
                                    if (player2.identity == 'zhu') player2.identity = 'zhong';
                                    player2.setIdentity('苏醒');
                                    player2.group = player.group;
                                    player2.draw(4);
                                    player2.maxHp = 5;
                                    if (player2.name) {
                                        var skills0 = lib.character[player2.name][3];
                                    }
                                    if (player2.name1) {
                                        var skills1 = lib.character[player2.name1][3];
                                    }
                                    if (player2.name2) {
                                        var skills2 = lib.character[player2.name2][3];
                                    }
                                }
                            },
                        },
                        试用: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            content() {
                                player.draw();
                                player.say('<img src=/storage/emulated/0/图片/22199754_1371460645989.jpg>');
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.color(card) == 'red' && player.hp == 6) return [1, 1];
                                        if (get.color(card) == 'red' && player.hp == 5) return [1, 1.5];
                                        if (get.color(card) == 'red' && player.hp == 4) return [1, 2];
                                        if (get.color(card) == 'red' && player.hp < 4) return [1, 2.5];
                                    },
                                },
                            },
                        },
                        aili_bs: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('boss_baimang3');
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('boss_shaohao');
                                game.boss.addFellow('boss_jinshenrushou');
                                game.boss.addFellow('boss_mingxingzhu');
                                if (game.me != game.boss) {
                                    game.boss.addFellow('boss_mingxingzhu');
                                } else {
                                    game.boss.addFellow('boss_mingxingzhu');
                                }
                            },
                        },
                        aili__zhaohz: {},
                        aili_bosszz: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            popup: false,
                            fixed: true,
                            content() {
                                player.smoothAvatar();
                                player.init('boss_baihu');
                                _status.noswap = true;
                                game.addVideo('reinit2', player, player.name);
                            },
                        },
                        aili_zhaobc: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('boss_baimang2');
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('boss_jinshenrushou');
                                game.boss.addFellow('boss_mingxingzhu');
                                game.boss.addFellow('boss_mingxingzhu');
                            },
                        },
                        末日主宰: {
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            content() {
                                'step 0';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue4.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (27).jpg');
                                player.removeSkill('末日主宰');
                                ('step 1');
                                player.cs1s('吾,末日主宰!!');
                                ('step 2');
                                player.cs1s('在此宣布,尔等之灭亡', 4);
                                ('step 3');
                                game.playvs('morizhuzhai1');
                                player.cs1s('末日即将亲临,尔等可感到兴奋', 4);
                                ('step 4');
                                player.smoothAvatar();
                                player.init('wuyue_mohuazj');
                                _status.noswap = true;
                                player.gainMaxHp(5 - player.maxHp);
                                player.recover(5 - player.hp);
                                player.addSkill('aili_canbao');
                                ('step 5');
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (7).jpg');
                                player.cs1s('只有毁灭,才是永恒.', 4);
                                ('step 6');
                                player.cs1s('我!是末日的起点,也是你们的终点', 6);
                                ('step 7');
                                game.playvs('fumieba');
                                player.cs1s('只有你们的死亡,才能让主宰大人愉悦', 3);
                            },
                            forced: true,
                            popup: false,
                        },
                        aili_mrrq: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss;
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('wuyue_mohuazj');
                                game.boss.gainMaxHp(2);
                                game.boss.recover(6 - player.hp);
                                game.boss.addSkill('aili_canbao');
                                game.boss.addFellow('wuyue_moxgzr');
                                game.boss.addFellow('wuyue_moqhr');
                                game.playvs('morizhuzhai2');
                            },
                        },
                        aili_moriccc: {
                            silent: true,
                            fixed: true,
                            init() {
                                lib.boss.boss_chiyanshilian.init();
                            },
                        },
                        aili_qiehuanzzzz: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('boss_baimang3');
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('boss_shaohao');
                                game.boss.addFellow('boss_jinshenrushou');
                                game.boss.addFellow('boss_mingxingzhu');
                                if (game.me != game.boss) {
                                    game.boss.addFellow('boss_mingxingzhu');
                                } else {
                                    game.boss.addFellow('boss_mingxingzhu');
                                }
                            },
                        },
                        aili_qiehuanxxx: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss;
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('aili_mrsz');
                                game.boss.addFellow('aili_heichao');
                                game.boss.addFellow('aili_heichao');
                            },
                        },
                        aili_lz: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            forced: true,
                            content() {
                                game.playvs('chongneng');
                                trigger.num += Math.max(2, Math.floor(player.maxHp)) - 2;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return (num += player.maxHp - player.hp);
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        qili_xn: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                if (trigger.num <= 5) {
                                    game.playvs('fenshen');
                                    player.changeHujia(trigger.num);
                                    player.draw();
                                } else {
                                    game.playvs('fenshen');
                                    player.changeHujia(5);
                                    player.draw();
                                }
                            },
                        },
                        aili_ms: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '灭',
                            init(player) {
                                player.storage.aili_ms = 1;
                                player.markSkill('aili_ms');
                            },
                            trigger: {
                                source: 'damageBegin2',
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                if (trigger.num <= 5) {
                                    player.storage.aili_ms += trigger.num;
                                    player.markSkill('aili_ms');
                                } else {
                                    player.storage.aili_ms += 5;
                                    player.markSkill('aili_ms');
                                }
                            },
                            intro: {
                                content: '你正在进行灭世',
                            },
                            ai: {
                                combo: 'aili_mr',
                            },
                        },
                        aili_mr: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.aili_ms >= 8;
                            },
                            usable: 3,
                            content() {
                                'step 0';
                                player.say('在末日面前一切都是平等的');
                                game.playvs('nengliang3');
                                player.storage.aili_ms -= 8;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage();
                                    event.redo();
                                }
                            },
                            ai: {
                                combo: 'aili_ms',
                                order: 10,
                                result: {
                                    player: 3,
                                    target: -3,
                                },
                            },
                        },
                        aili_chouqu: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '㴰',
                            init(player) {
                                player.storage.aili_chouqu = 0;
                                player.markSkill('aili_chouqu');
                            },
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            silent: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0 && player.name == 'wuyue_morizz';
                            },
                            content() {
                                'step 0';
                                if (player.hp <= player.maxHp / 2) {
                                    var n = [1, 2, 3].randomGet();
                                    if (n == 1) player.storage.aili_chouqu += 6;
                                    if (n == 2) player.storage.aili_chouqu += 12;
                                    if (n == 3) player.storage.aili_chouqu += 18;
                                    player.markSkill('aili_chouqu');
                                    player.say('希卡,取消能量护甲加持,全力输送能量', 4);
                                } else {
                                    var n = [1, 2, 3, 4, 5, 6].randomGet();
                                    if (n <= 4) player.storage.aili_chouqu += 5;
                                    if (n == 5) player.storage.aili_chouqu += 7;
                                    if (n == 6) player.storage.aili_chouqu += 12;
                                    player.changeHujia(5, 7, 9).randomGet;
                                    player.markSkill('aili_chouqu');
                                    player.say('希卡,将抽取的星球能源输送给我!', 4);
                                }
                                ('step 1');
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) game.playvs('chouqu1');
                                if (n == 2) game.playvs('chouqu2');
                                if (n == 3) game.playvs('chouqu3');
                                if (n == 4) game.playvs('chouqu4');
                            },
                            group: ['aili_chouqu_damaga'],
                            subSkill: {
                                damaga: {
                                    trigger: {
                                        source: 'damageEnd',
                                        player: 'damageBegin2',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        if (trigger.num <= 5) {
                                            var n = [1, 2, 3, 4].randomGet();
                                            if (n == 1) game.playvs('chouqu1');
                                            if (n == 2) game.playvs('chouqu2');
                                            if (n == 3) game.playvs('chouqu3');
                                            if (n == 4) game.playvs('chouqu4');
                                            player.storage.aili_chouqu += trigger.num;
                                            player.markSkill('aili_chouqu');
                                        } else {
                                            var n = [1, 2, 3, 4].randomGet();
                                            if (n == 1) game.playvs('chouqu1');
                                            if (n == 2) game.playvs('chouqu2');
                                            if (n == 3) game.playvs('chouqu3');
                                            if (n == 4) game.playvs('chouqu4');
                                            player.storage.aili_chouqu += 5;
                                            player.markSkill('aili_chouqu');
                                        }
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                combo: 'aili_haojie',
                            },
                            popup: false,
                        },
                        aioi_benyuan: {
                            trigger: {
                                player: 'dieBefore',
                            },
                            filter(event, player) {
                                return player.storage.aili_chouqu >= 15;
                            },
                            forced: true,
                            silent: true,
                            fixed: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.storage.aili_chouqu -= 10;
                                player.gainMaxHp(12 - player.maxHp);
                                player.recover(12 - player.hp);
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) game.playvs('benyuan1');
                                if (n == 2) game.playvs('benyuan2');
                                if (n == 3) game.playvs('benyuan3');
                                if (n == 4) game.playvs('benyuan4');
                            },
                            popup: false,
                        },
                        aili_haojie: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.storage.aili_chouqu >= 8;
                            },
                            usable: 3,
                            forced: true,
                            silent: true,
                            fixed: true,
                            content() {
                                'step 0';
                                game.mp413('haojie');
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) game.playvs('haojie1');
                                if (n == 2) game.playvs('haojie2');
                                if (n == 3) game.playvs('haojie3');
                                if (n == 4) game.playvs('haojie4');
                                player.storage.aili_chouqu -= 8;
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage(3)._triggered = null;
                                    event.redo();
                                    player.recover();
                                }
                            },
                            ai: {
                                combo: 'aili_chouqu',
                                order: 10,
                                result: {
                                    player: 3,
                                    target: -3,
                                },
                            },
                            popup: false,
                        },
                        aili_jiehuancccc: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss;
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('wuyue_morizz');
                                game.boss.update();
                                game.boss.cs1s('既然吾来了,这个世界就此终结吧.', 3);
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue2.mp3';
                                game.playBackgroundMusic();
                                game.boss.addFellow('aili_heichao');
                                game.boss.addFellow('aili_heichao');
                                game.playvs('morizhuzhai4');
                            },
                        },
                        aili_xunchas: {
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            silent: true,
                            popup: false,
                            content() {
                                'step 0';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue1.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (27).jpg');
                                player.removeSkill('aili_xunchas');
                                ('step 1');
                                player.cs1s('看来都是一些毫无价值的生物', 4);
                                ('step 2');
                                player.cs1s('那么开始净化吧', 4);
                                ('step 3');
                                player.smoothAvatar();
                                player.init('wuyue_skgzr');
                                _status.noswap = true;
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg1.jpg');
                                player.gainMaxHp(5 - player.maxHp);
                                player.recover(5 - player.hp);
                                ('step 5');
                                player.cs1s('杀杀杀杀杀杀,通通击杀', 4);
                            },
                        },
                        aili_jieduan: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss;
                            },
                            async content(event, trigger, player) {
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg3.jpg');
                                game.changeBossQ('wuyue_zhuangjijial');
                                game.boss.addFellow('wuyue_zhanzkuil');
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue3.mp3';
                                game.playBackgroundMusic();
                                for (var i of game.players) {
                                    if (i.name == 'wuyue_zhanzkuil') {
                                        i.side = false;
                                        i.identity = 'cai';
                                        i.setIdentity('cai');
                                        game.addVideo('setIdentity', i, 'cai');
                                        i.cs1s('目标装甲暴龙发现,进行清除', 5);
                                    }
                                }
                            },
                        },
                        aili_jieduan2: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss;
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('wuyue_morishouwei');
                                game.boss.addSkill('boss3');
                                game.boss.addFellow('aili_heichao');
                                game.boss.addFellow('aili_heichao');
                            },
                        },
                        boss3: {
                            global: 'aili_jieduan3',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return player == game.boss;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                            forced: true,
                            popup: false,
                        },
                        aili_jieduan3: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('boss3');
                            },
                            content() {
                                'step 0';
                                'step 1';
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg2.jpg');
                                game.changeBossQ('wuyue_xunchas');
                                game.boss.update();
                                game.boss.cs1s('展现你们的价值吧', 5);
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue6.mp3';
                                game.playBackgroundMusic();
                                ('step 2');
                                game.boss.addFellow('aili_heichao');
                                game.boss.addFellow('aili_heichao');
                                ('step 3');
                                for (var i of game.players) {
                                    if (i.name == 'aili_heichao') {
                                        if (i.identity == 'zhong') {
                                            i.gainMaxHp(9 - i.maxHp);
                                            i.recover(9 - i.maxHp);
                                        }
                                    }
                                }
                            },
                        },
                        mori_guangmin: {
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return player.name == 'mor_guangminshenjiao';
                            },
                            content() {
                                'step 0';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue5.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (56).jpg');
                                player.node.name.innerHTML = '神<br/>圣<br/>骑<br/>士';
                                player.removeSkill('mori_guangmin');
                                player.addSkill('re_boss1');
                                ('step 1');
                                player.cs1s('这个世界,已经无法被拯救', 4);
                                ('step 2');
                                player.cs1s('骑士们,去吧,将所有人全都送入天国', 5);
                                ('step 3');
                                ('step 4');
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                                player.addFellow('wuyue_jianxiqis');
                                player.addFellow('wuyue_jianxiqis');
                                player.smoothAvatar();
                                player.init('wuyue_shoihuqs');
                                ('step 5');
                                for (var i of game.players) {
                                    if (i.name == 'wuyue_jianxiqis') {
                                        if (i.identity == 'zhong') {
                                            i.gainMaxHp(4 - player.maxHp);
                                            i.recover(4 - player.hp);
                                        }
                                    }
                                }
                                _status.noswap = true;
                                player.gainMaxHp(5 - player.maxHp);
                                player.recover(5 - player.hp);
                                player.addSkill('aili_banr');
                                player.update();
                                ('step 6');
                                player.cs1s('以神之名,接引你们进入天国', 5);
                                ('step 7');
                                player.cs1s('放弃抵抗,回归神的怀抱吧!!!', 4);
                            },
                            forced: true,
                            popup: false,
                        },
                        re_boss1: {
                            global: 'mori_kaisa',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return player.name == 'wuyue_shoihuqs';
                            },
                            content() {
                                'step 0';
                                player.cs1s('不!!!!!', 4);
                                ('step 1');
                                player.cs1s('神啊!!!请不要抛弃我!!!!', 4);
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_kaisa: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('re_boss1');
                            },
                            async content(event, trigger, player) {
                                game.changeBossQ('wuuue_weiguangqis');
                                game.boss.gainMaxHp(3);
                                game.boss.recover(3);
                                game.boss.addSkill('re_boss2');
                                game.boss.addSkill('aili_banr');
                                game.boss.update();
                                game.boss.addFellow('wuyue_rongyqoqis');
                                game.boss.addFellow('wuyue_poxieqis');
                                for (var i of game.players) {
                                    if (i.name == 'wuuue_weiguangqis') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('尔等微光,为何不遵从光明？', 5);
                                        }
                                    }
                                    if (i.name == 'wuyue_rongyqoqis') {
                                        if (i.identity == 'zhong') {
                                            i.addSkill('aili_banr');
                                            i.gainMaxHp(6 - i.maxHp);
                                            i.recover(6 - i.maxHp);
                                            i.cs1s('荣耀必将属于我们!!!!!!!!', 4);
                                        }
                                    }
                                    if (i.name == 'wuyue_poxieqis') {
                                        if (i.identity == 'zhong') {
                                            i.addSkill('aili_banr');
                                            i.gainMaxHp(6 - i.maxHp);
                                            i.recover(6 - i.maxHp);
                                            i.cs1s('除尽一切邪恶!!!!!!!!', 4);
                                        }
                                    }
                                }
                            },
                        },
                        re_boss2: {
                            global: 'mori_kaisa2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            content() {
                                'step 0';
                                player.cs1s('这无边的黑暗', 4);
                                ('step 1');
                                player.cs1s('我竟只能照亮自身周围...', 4);
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_kaisa2: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('re_boss2');
                            },
                            async content(event, trigger, player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue7.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                                game.changeBossQ('wuyue_shenshengqiss');
                                game.boss.gainMaxHp(4);
                                game.boss.recover(4);
                                game.boss.addSkill('re_boss3');
                                game.boss.addSkill('mori_shenhuaa');
                                game.boss.update();
                                game.boss.addFellow('wuyue_yonghqis');
                                game.boss.addFellow('wuyue_zhigaiqis');
                                for (var i of game.players) {
                                    if (i.name == 'wuyue_shenshengqiss') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('罪恶之人,我来亲自净化汝等', 5);
                                        }
                                    }
                                    if (i.name == 'wuyue_yonghqis') {
                                        if (i.identity == 'zhong') {
                                            i.addSkill('aili_banr');
                                            i.gainMaxHp(6 - i.maxHp);
                                            i.recover(6 - i.maxHp);
                                            i.cs1s('希望你们能让我感到有趣', 4);
                                        }
                                    }
                                    if (i.name == 'wuyue_zhigaiqis') {
                                        if (i.identity == 'zhong') {
                                            i.addSkill('aili_banr');
                                            i.gainMaxHp(6 - i.maxHp);
                                            i.recover(6 - i.maxHp);
                                            i.cs1s('蝼蚁们,能乖乖去死么？', 4);
                                        }
                                    }
                                }
                            },
                        },
                        mori_shenhuaa: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                maxHandcard(player, num) {
                                    return (num += player.maxHp - player.hp);
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '轮',
                            init(player) {
                                player.storage.mori_shenhuaa = 0;
                                player.markSkill('mori_shenhuaa');
                            },
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.mori_shenhuaa >= 3;
                            },
                            content() {
                                'step 0';
                                player.storage.mori_shenhuaa_mark += 1;
                                player.storage.mori_shenhuaa -= 3;
                                player
                                    .chooseTarget(get.prompt('mori_shenhuaa'), [1, 3], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('nengliang2');
                                    var num = player.storage.mori_shenhuaa_mark;
                                    event.players = result.targets;
                                    if (event.players.length) {
                                        event.players.shift().damage(num, 'fire');
                                        event.redo();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                            intro: {
                                content: '你正在进行升华',
                            },
                            group: ['mori_shenhuaa_mark', 'mori_shenhuaa_turn', 'mori_shenhuaa_jusi'],
                            subSkill: {
                                mark: {
                                    init(player) {
                                        player.storage.mori_shenhuaa_mark = 0;
                                        player.markSkill('mori_shenhuaa_mark');
                                    },
                                    mark: true,
                                    marktext: '光',
                                    trigger: {
                                        player: ['phaseBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_shenhuaa < 3;
                                    },
                                    content() {
                                        if (player.name == 'wuyue_heiajqis') {
                                            game.playvs('shenhua2');
                                            player.cs1s('我还需要更多的力量!!!!', 4);
                                            player.storage.mori_shenhuaa += 1;
                                            player.recover(player.storage.mori_shenhuaa_mark + 1);
                                            player.draw(player.storage.mori_shenhuaa_mark + 4);
                                        }
                                        if (player.name == 'mori_guangmingshennv' || player.name == 'mori_shenzhi') {
                                            game.playvs('shenhua2');
                                            player.storage.mori_shenhuaa += 1;
                                            player.recover(player.storage.mori_shenhuaa_mark + 1);
                                            player.draw(player.storage.mori_shenhuaa_mark + 3);
                                        }
                                        if (player.name != 'wuyue_heiajqis' && player.name != 'mori_guangmingshennv' && player.name != 'mori_shenzhi') {
                                            game.playvs('shenhua');
                                            player.cs1s('光明正在聚集', 4);
                                            player.storage.mori_shenhuaa += 1;
                                            player.recover();
                                            player.draw(player.storage.mori_shenhuaa_mark + 2);
                                        }
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                                jusi: {
                                    trigger: {
                                        player: ['dieBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_shenhuaa_mark > 0;
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.gainMaxHp(9 - player.maxHp);
                                        player.recover(5 - player.hp);
                                        player.draw(5);
                                        player.storage.mori_shenhuaa_mark -= 1;
                                        if (player.name == 'wuyue_heiajqis') {
                                            game.playvs('shenhua4');
                                        }
                                        if (player.name == 'mori_guangmingshennv') {
                                            game.playvs('shengnv6');
                                        }
                                        if (player.name == 'mori_shenzhi') {
                                            game.playvs('guanghuiweilai1');
                                        }
                                        if (player.name != 'mori_shenzhi' && player.name != 'mori_guangmingshennv' && player.name != 'wuyue_heiajqis') {
                                            game.playvs('shenhua3');
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        re_boss3: {
                            global: 'mori_kaisa3',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            content() {
                                'step 0';
                                player.cs1s('我的行为是如此的正义', 5);
                                ('step 1');
                                player.cs1s('我的目的是如此的光明伟岸', 5);
                                ('step 2');
                                player.cs1s('为什么要反抗我!!!!!!!!!!!!!', 5);
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_kaisa3: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return event.player == game.boss && event.player.hasSkill('re_boss3');
                            },
                            async content(event, trigger, player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue8.mp3';
                                game.playBackgroundMusic();
                                game.changeBossQ('wuyue_heiajqis');
                                game.boss.gainMaxHp(4);
                                game.boss.recover(4);
                                game.boss.addSkill('mori_shenhuaa');
                                game.boss.addSkill('aili_benneng');
                                game.boss.storage.mori_shenhuaa_mark += 3;
                                player.storage.aili_rimo -= 17;
                                game.boss.update();
                                for (var i of game.players) {
                                    if (i.name == 'wuyue_heiajqis') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('啊!!!!!!!!!!!!!!!!', 5);
                                        }
                                    }
                                }
                            },
                        },
                        mori_shenzhiyi: {
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return player.name == 'mori_shenmingqis';
                            },
                            content() {
                                'step 0';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue9.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (57).jpg');
                                player.node.name.innerHTML = 'A<br/>l<br/>i<br/>c<br/>e';
                                player.removeSkill('mori_shenzhiyi');
                                player.addSkill('zz_boss1');
                                ('step 1');
                                player.cs1s('<span style="color: #FFA550">观察凡人们的挣扎是如此的有趣</span>', 5);
                                ('step 2');
                                player.cs1s('<span style="color: #FFA550">尽管去挣扎把,…………如果你们能来到我的面前</span>', 5);
                                ('step 3');
                                player.cs1s('<span style="color: #FFA550">我会赐予你们最崇高的赏赐</span>', 5);
                                ('step 4');
                                ('step 5');
                                player.addFellow('mori_gtzj');
                                player.addFellow('mori_gtzj');
                                player.smoothAvatar();
                                player.init('mori_tkzj');
                                ('step 6');
                                for (var i of game.players) {
                                    if (i.name == 'mori_gtzj') {
                                        if (i.identity == 'zhong') {
                                            i.gainMaxHp(4 - i.maxHp);
                                            i.recover(4 - i.hp);
                                        }
                                    }
                                }
                                _status.noswap = true;
                                player.gainMaxHp(4 - player.maxHp);
                                player.recover(4 - player.hp);
                                player.addSkill('mori_shenminga');
                                player.update();
                                ('step 7');
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue8.mp3';
                                game.playBackgroundMusic();
                                player.cs1s('发现目标,执行摧毁指令.', 4);
                            },
                            forced: true,
                            popup: false,
                        },
                        zz_boss1: {
                            global: 'mori_nishen',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return player.name == 'mori_tkzj';
                            },
                            content() {
                                player.cs1s('你们的抵抗只是徒劳', 5);
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_nishen: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('zz_boss1');
                            },
                            async content(event, trigger, player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue11.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (58).jpg');
                                game.changeBossQ('mori_shenling');
                                game.boss.gainMaxHp(4);
                                game.boss.recover(4);
                                game.boss.addSkill('zz_boss2');
                                game.boss.addSkill('mori_shenminga');
                                game.boss.update();
                                game.boss.addFellow('mori_gtzj');
                                game.boss.addFellow('mori_gtzj');
                                for (var i of game.players) {
                                    if (i.name == 'mori_shenling') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('施暴者,唯有对其以更强的暴力镇压', 5);
                                            i.cs1s('为你们的所作所为付出代价吧', 5);
                                        }
                                    }
                                    if (i.name == 'mori_gtzj') {
                                        if (i.identity == 'zhong') {
                                            i.gainMaxHp(5 - i.maxHp);
                                            i.recover(5 - i.maxHp);
                                        }
                                    }
                                }
                            },
                        },
                        zz_boss2: {
                            global: 'mori_nishen2',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            _priority: 10,
                            content() {
                                game.playvs('shenlinsiw');
                                player.cs1s('我的暴力…………还是不够', 5);
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_nishen2: {
                            trigger: {
                                player: ['dieBegin'],
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            mode: ['boss'], //QQQ
                            filter(event, player) {
                                return player == game.boss && player.hasSkill('zz_boss2');
                            },
                            async content(event, trigger, player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue10.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (136).jpg');
                                game.changeBossQ('mori_xikadiya');
                                game.boss.gainMaxHp(3);
                                game.boss.recover(3);
                                game.boss.addSkill('zz_boss3');
                                game.boss.addSkill('mori_shenminga');
                                game.boss.storage.mori_shenminga_mark += 2;
                                game.boss.update();
                                game.boss.addFellow('mori_tkzj');
                                game.boss.addFellow('mori_tkzj');
                                for (var i of game.players) {
                                    if (i.name == 'mori_xikadiya') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('请在此处停留吧,我会给予你们所有人平等的爱', 5);
                                        }
                                    }
                                    if (i.name == 'mori_tkzj') {
                                        if (i.identity == 'zhong') {
                                            i.gainMaxHp(5 - i.maxHp);
                                            i.recover(5 - i.maxHp);
                                        }
                                    }
                                }
                            },
                        },
                        zz_boss3: {
                            global: 'mori_nishen3',
                            trigger: {
                                player: 'dieBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            content() {
                                'step 0';
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (135).jpg');
                                ('step 1');
                                player.cs1s('我明明可以给予你们平等的爱', 4);
                                ('step 2');
                                player.cs1s('继续前进,你们得到的只会是绝望', 6);
                                game.playvs('xikadiyasiwang');
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_nishen3: {
                            trigger: {
                                global: 'dieBegin',
                            },
                            forced: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return event.player == game.boss && event.player.hasSkill('zz_boss3');
                            },
                            async content(event, trigger, player) {
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue9.mp3';
                                game.playBackgroundMusic();
                                game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/bg (137).jpg');
                                game.changeBossQ('mori_alice');
                                for (var i of game.players) {
                                    if (i.name == 'mori_alice') {
                                        if (i.identity == 'zhu') {
                                            i.cs1s('<span style="color: #FFA550">恭喜你们,成功的来到了我的面前呢</span>', 5);
                                            i.cs1s('<span style="color: #FFA550">那么我也该履行对你们的承若了</span>', 5);
                                            i.cs1s('<span style="color: #FFA550">迎接你们最崇高的死亡吧</span>', 5);
                                        }
                                    }
                                }
                            },
                        },
                        mori_shenlinga: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '临',
                            init(player) {
                                player.storage.mori_shenlinga = 4;
                                player.markSkill('mori_shenlinga');
                            },
                            trigger: {
                                player: ['damageEnd', 'recoverEnd'],
                            },
                            forced: true,
                            content() {
                                if (player == game.boss && player.name == 'mori_shenling') {
                                    game.playvs('shenlin');
                                    player.storage.mori_shenlinga += trigger.num * 2;
                                    player.markSkill('mori_shenlinga');
                                } else {
                                    game.playvs('shenlin');
                                    player.storage.mori_shenlinga += trigger.num;
                                    player.markSkill('mori_shenlinga');
                                }
                            },
                            group: ['mori_shenlinga_silin', 'mori_shenlinga_mopai'],
                            subSkill: {
                                silin: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        if (player == game.boss && player.name == 'mori_shenling') {
                                            game.playvs('shenlin3');
                                            player.draw(2);
                                            player.storage.mori_shenlinga -= 2;
                                            player.markSkill('mori_shenlinga');
                                        } else {
                                            game.playvs('shenlin3');
                                            player.draw();
                                            player.storage.mori_shenlinga -= 1;
                                            player.markSkill('mori_shenlinga');
                                        }
                                    },
                                },
                                mopai: {
                                    trigger: {
                                        player: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    content() {
                                        game.playvs('shenlin2');
                                        player.draw(Math.max(1, Math.floor(player.storage.mori_shenlinga)));
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                maixie: true,
                                basic: {
                                    useful: [9.5],
                                    value: [9.5],
                                },
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian') return [-1, -8];
                                    },
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp) return [0, 0];
                                    },
                                },
                            },
                        },
                        mori_chubao: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            filter(event, player) {
                                return event.source && event.source != player && event.source.hp >= 0 && player.countCards('h', 'sha') > 0;
                            },
                            content() {
                                'stpe 0';
                                if (event.source != player) {
                                    player
                                        .chooseToUse('是否使用一张杀？', { name: 'sha' })
                                        .set('filterTarget', function (card, player, target) {
                                            return player.canUse('sha', target, false);
                                        })
                                        .set('sourcex', player);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('chubao3');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                },
                            },
                        },
                        mori_aishis: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            fixed: true,
                            _priority: -10,
                            filter(event, player) {
                                return event.source && event.source != player && event.player.hp > 0;
                            },
                            content() {
                                'step 0';
                                game.playvs('aishi2');
                                player.draw(2);
                                if (trigger.player != player) {
                                    player.chooseCard(true, 'he', '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
                                        if (get.position(card) == 'e') return -1;
                                        if (card.name == 'sha') return 1;
                                        if (get.type(card) == 'equip') return 0.5;
                                        return 0;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                trigger.player.gain(result.cards, player, 'give');
                            },
                            ai: {
                                threaten: 1.6,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian') return [1, 3];
                                    },
                                },
                                result: {
                                    target: 1,
                                    player: 1,
                                },
                            },
                        },
                        mori_shouxu: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '希',
                            init(player) {
                                player.storage.mori_shouxu = 2;
                                player.markSkill('mori_shouxu');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.addSkill('mori_shouxu_mark');
                                if (player.identity == 'nei' || player.identity == 'fan') {
                                    player.setIdentity('zhong');
                                    player.identity = 'zhong';
                                    player.node.identity.dataset.color = 'zhong';
                                    player.identityShown = true;
                                }
                            },
                            group: ['mori_shouxu_fuhuo', 'mori_shouxu_mark'],
                            subSkill: {
                                fuhuo: {
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return player.countCards('h') >= 3 && event.player.identity != 'zhu' && player.hp > 0 && !event.player.hasSkill('mori_shouxu_mark') && player.storage.mori_shouxu >= 1;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(get.prompt('mori_shouxu', trigger.player), '弃置三张牌,将' + get.translation(trigger.player) + '复活', 3, 'he').set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (get.attitude(player, _status.event.getTrigger().player) > 0) {
                                                return 20 - get.value(card);
                                            }
                                            return -3;
                                        });//QQQ
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.untrigger();
                                            trigger.finish();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (player == game.boss && player.name == 'mori_xikadiya') {
                                            var player2 = trigger.player;
                                            game.playvs('shouxu');
                                            player2.maxHp = 5;
                                            player2.recover(5 - player2.hp);
                                            player2.draw(5);
                                            player.storage.mori_shouxu -= 1;
                                        } else {
                                            var player2 = trigger.player;
                                            game.playvs('shouxu');
                                            player2.maxHp = 3;
                                            player2.recover(3 - player2.hp);
                                            player2.draw(3);
                                            player.storage.mori_shouxu -= 1;
                                        }
                                    },
                                    ai: {
                                        threaten: 0.8,
                                        expose: 1,
                                    },
                                },
                                mark: {
                                    mark: true,
                                    marktext: '善',
                                    intro: {
                                        content: '你是守序阵营',
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        mori_chencis: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'tao';
                                },
                            },
                            init(player) {
                                if (player.name != 'mori_alice') {
                                    player.clearSkills();
                                }
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: ['changeHpBefore'],
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0 && event.num < 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', '层次:是否弃置一张牌令伤害无效？')
                                    .set('ai', function (card) {
                                        var player = _status.event.player;
                                        if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                                            return 20 - get.value(card);
                                        }
                                        if (player.hp == 2) {
                                            return 19 - get.value(card);
                                        }
                                        return 18 - get.value(card);
                                    });
                                event.players = get.players(player);
                                ('step 1');
                                if (result.bool) {
                                    if (event.players.length) {
                                        var current = event.players.shift();
                                        if (current.isEnemiesOf(player)) {
                                            player.line(current);
                                            current.hp -= trigger.num;
                                        }
                                        event.redo();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var n = [1, 2, 3].randomGet();
                                if (n == 1) game.playvs('chenci1');
                                if (n == 2) game.playvs('chenci2');
                                if (n == 3) game.playvs('chenci3');
                                trigger.untrigger();
                                trigger.finish();
                                player.draw(2);
                            },
                            group: ['mori_chencis_loseEnd', 'mori_chencis_damage', 'mori_chencis_tun'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'phaseJudgeBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.countCards('j') > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard('he', '层次:是否弃置一张牌对所有人造成伤害', function (card, player) {
                                            return 1;
                                        });
                                        next.set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                                                return 20 - get.value(card);
                                            }
                                            if (player.hp == 2) {
                                                return 19 - get.value(card);
                                            }
                                            return 18 - get.value(card);
                                        });
                                        event.players = get.players(player);
                                        ('step 1');
                                        if (result.bool) {
                                            if (event.players.length) {
                                                var current = event.players.shift();
                                                if (current.isEnemiesOf(player)) {
                                                    player.line(current);
                                                    current.damage(player.countCards('j'))._triggered = null;
                                                }
                                                event.redo();
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        var n = [1, 2, 3].randomGet();
                                        if (n == 1) game.playvs('chenci1');
                                        if (n == 2) game.playvs('chenci2');
                                        if (n == 3) game.playvs('chenci3');
                                        player.discard(player.getCards('j'), player.countCards('j'));
                                        player.draw(2);
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.type(card) == 'delay') return -1;
                                            },
                                        },
                                    },
                                },
                                tun: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.isTurnedOver();
                                    },
                                    content() {
                                        'step 0';
                                        var next = player.chooseToDiscard('he', '层次:是否弃置一张牌对所有人造成伤害', function (card, player) {
                                            return 1;
                                        });
                                        next.set('ai', function (card) {
                                            var player = _status.event.player;
                                            if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                                                return 20 - get.value(card);
                                            }
                                            if (player.hp == 2) {
                                                return 19 - get.value(card);
                                            }
                                            return 18 - get.value(card);
                                        });
                                        event.players = get.players(player);
                                        ('step 1');
                                        if (result.bool) {
                                            if (event.players.length) {
                                                var current = event.players.shift();
                                                if (current.isEnemiesOf(player)) {
                                                    player.line(current);
                                                    current.damage()._triggered = null;
                                                }
                                                event.redo();
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        var n = [1, 2, 3].randomGet();
                                        if (n == 1) game.playvs('chenci1');
                                        if (n == 2) game.playvs('chenci2');
                                        if (n == 3) game.playvs('chenci3');
                                        player.turnOver();
                                        player.draw(2);
                                    },
                                },
                                loseEnd: {
                                    trigger: {
                                        player: ['loseEnd'],
                                    },
                                    _priority: 10,
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length > 1;
                                    },
                                    async content(event, trigger, player) {
                                        game.playvs('chenci1');
                                        player.draw(Math.ceil(trigger.cards.length / 2) + 1);
                                    },//QQQ
                                },
                            },
                        },
                        mori_chaokonga: {
                            init(player) {
                                if (player.name != 'mori_alice') {
                                    player.clearSkills();
                                }
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('h') > 0;
                            },
                            selectTarget: 2,
                            multitarget: true,
                            multiline: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            prepare: 'throw',
                            discard: false,
                            filterCard: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (targets[0].countCards('h') && targets[1].countCards('h')) {
                                    game.playvs('caokong');
                                    targets[0].chooseToCompare(targets[1]);
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    targets[0].gain(cards);
                                    targets[0].$gain2(cards);
                                    targets[0].draw(2);
                                    player.draw(2);
                                    targets[1].damage(targets[0], 3);
                                } else {
                                    targets[1].gain(cards);
                                    targets[1].$gain2(cards);
                                    targets[1].draw(2);
                                    player.draw(2);
                                    targets[0].damage(targets[1], 3);
                                }
                            },
                            ai: {
                                expose: 1.5,
                                threaten: 0.1,
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target == player) return 1;
                                        return -1;
                                    },
                                },
                            },
                        },
                        mori_shenyia: {
                            init(player) {
                                if (player.name != 'mori_alice') {
                                    player.clearSkills();
                                }
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            _priority: 2022,
                            filter(event, player) {
                                return event.source && event.source.hp > 0;
                            },
                            content() {
                                if (trigger.source == player) {
                                    trigger.source.draw(2);
                                } else {
                                    var n = [1, 2, 3, 4].randomGet();
                                    if (n == 1) trigger.player.recover(2 - trigger.player.hp);
                                    if (n == 2) trigger.source.draw(2);
                                    if (n == 3) player.draw(2);
                                    if (n == 4) trigger.source.damage(2, 'thunder');
                                }
                                game.playvs('shenyi3');
                            },
                        },
                        mori_shenminga: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                maxHandcard(player, num) {
                                    return (num += player.maxHp - player.hp);
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '神',
                            init(player) {
                                player.storage.mori_shenminga = 0;
                                player.markSkill('mori_shenminga');
                            },
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.mori_shenminga >= 3;
                            },
                            content() {
                                'step 0';
                                if (player.name == 'mori_xikadiya') {
                                    game.playvs('shenli3');
                                    player.storage.mori_shouxu += 2;
                                    player.storage.mori_shenminga_mark += 1;
                                    player.storage.mori_shenminga -= 3;
                                    player
                                        .chooseTarget(get.prompt('mori_shenminga'), [1, 3], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else {
                                    if (player.name == 'mori_shenling') {
                                        game.playvs('chubao2');
                                        player.storage.mori_shenminga_mark += 1;
                                        player.storage.mori_shenminga -= 3;
                                        player
                                            .chooseTarget(get.prompt('mori_shenminga'), [1, 3], function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target)) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return 1;
                                            });
                                    } else {
                                        game.playvs('chubao5');
                                        player.storage.mori_shenminga_mark += 1;
                                        player.storage.mori_shenminga -= 3;
                                        player
                                            .chooseTarget(get.prompt('mori_shenminga'), [1, 3], function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target)) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return 1;
                                            });
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    var num = player.storage.mori_shenminga_mark;
                                    event.players = result.targets;
                                    if (event.players.length) {
                                        event.players.shift().damage(num, 'fire')._triggered = null;
                                        event.redo();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                            intro: {
                                content: '你拥有拥有神之力',
                            },
                            group: ['mori_shenminga_mark', 'mori_shenminga_turn', 'mori_shenminga_jusi'],
                            subSkill: {
                                mark: {
                                    init(player) {
                                        player.storage.mori_shenminga_mark = 0;
                                        player.markSkill('mori_shenminga_mark');
                                    },
                                    mark: true,
                                    marktext: '力',
                                    trigger: {
                                        player: ['phaseBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_shenminga < 3;
                                    },
                                    content() {
                                        if (player.name == 'mori_xikadiya') {
                                            player.cs1s('人类为何一直沉迷与争斗呢？', 4);
                                            player.storage.mori_shenminga += 1;
                                            player.recover(player.storage.mori_shenminga_mark + 3);
                                            player.draw(player.storage.mori_shenminga_mark + 2);
                                        }
                                        if (player.name == 'mori_zhihuitians') {
                                            player.storage.mori_shenminga += 1;
                                            player.recover(player.storage.mori_shenminga_mark + 1);
                                            player.draw(player.storage.mori_shenminga_mark * 2);
                                        }
                                        if (player.name != 'mori_xikadiya' && player.name != 'mori_zhihuitians') {
                                            player.cs1s('停止徒劳的挣扎吧', 4);
                                            player.storage.mori_shenminga += 1;
                                            player.recover();
                                            player.draw(player.storage.mori_shenminga_mark + 4);
                                        }
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '翻面被神力阻止了');
                                    },
                                },
                                jusi: {
                                    trigger: {
                                        player: ['dieBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_shenminga_mark > 0;
                                    },
                                    content() {
                                        if (player.name == 'mori_zhihuitians') {
                                            game.playvs('tianqi2');
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.gainMaxHp(7 - player.maxHp);
                                            player.recover(4 - player.hp);
                                            player.draw(4);
                                            player.storage.mori_shenminga_mark -= 1;
                                            event.finish();
                                        }
                                        if (player.name == 'mori_xikadiya') {
                                            game.playvs('shenli2');
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.gainMaxHp(7 - player.maxHp);
                                            player.recover(4 - player.hp);
                                            player.draw(4);
                                            player.storage.mori_shenminga_mark -= 1;
                                            event.finish();
                                        }
                                        if (player.name == 'mori_shenling') {
                                            game.playvs('shenlin2');
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.gainMaxHp(7 - player.maxHp);
                                            player.recover(4 - player.hp);
                                            player.draw(4);
                                            player.storage.mori_shenminga_mark -= 1;
                                            event.finish();
                                        }
                                        if (player.name != 'mori_shenling' && player.name != 'mori_xikadiya' && player.name != 'mori_zhihuitians') {
                                            trigger.untrigger();
                                            trigger.finish();
                                            player.gainMaxHp(7 - player.maxHp);
                                            player.recover(4 - player.hp);
                                            player.draw(4);
                                            player.storage.mori_shenminga_mark -= 1;
                                            event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        mori_tiebizzz: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: 'equipEnd',
                            },
                            forced: true,
                            content() {
                                game.playvs('tiebi2');
                                player.changeHujia();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip') return [1, 3];
                                    },
                                },
                                threaten: 1.3,
                            },
                            group: 'mori_tiebizzz_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: ['damageEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.name == 'mori_gtzj' && get.mode() == 'boss' && player.identity == 'zhong';
                                    },
                                    content() {
                                        game.playvs('tiebi');
                                        player.gain(
                                            get.cardPile(function (card) {
                                                return get.type(card, 'equip') == 'equip';
                                            }),
                                            'gain2'
                                        );
                                    },
                                },
                            },
                        },
                        mori_shenkong: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '高',
                            init(player) {
                                player.storage.mori_shenkong = 0;
                                player.markSkill('mori_shenkong');
                            },
                            enable: 'phaseUse',
                            filterCard: true,
                            filter(event, player) {
                                if (player.storage.mori_shenkong > player.maxHp) return false;
                                return true;
                            },
                            usable: 2,
                            prompt: '弃置一张牌为自己加一层[高]',
                            check(card) {
                                return 9 - get.value(card);
                            },
                            content() {
                                game.playvs('shenkong');
                                player.storage.mori_shenkong += 1;
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    if (typeof to.storage.mori_shenkong == 'number') {
                                        return distance + to.storage.mori_shenkong;
                                    }
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            ai: {
                                combo: 'mori_gaokongyazhi',
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.storage.mori_shenkong >= 4) return 1;
                                        return 2;
                                    },
                                },
                            },
                            group: 'mori_shenkong_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: ['damageEnd'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.name == 'mori_tkzj' && get.mode() == 'boss' && (player.identity == 'zhong' || player.identity == 'zhu');
                                    },
                                    content() {
                                        if (player.storage.mori_shenkong > 3) {
                                            game.playvs('xiao');
                                            player.storage.mori_shenkong -= 1;
                                            player.draw(3);
                                        } else {
                                            game.playvs('xiao');
                                            player.storage.mori_shenkong += trigger.num;
                                        }
                                    },
                                },
                            },
                        },
                        mori_gaokongyazhi: {
                            trigger: {
                                player: 'phaseDrawBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.mori_shenkong >= 4;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mori_gaokongyazhi'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target) < 0) {
                                            return 5 - get.attitude(_status.event.player, target);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (player.name == 'mori_tkzj' && get.mode() == 'boss' && (player.identity == 'zhong' || player.identity == 'zhu')) {
                                        game.playvs('tianjiangzhenyi1');
                                        result.targets[0].damage(player.hp)._triggered = null;
                                        player.storage.mori_shenkong -= 4;
                                        player.recover(2);
                                    } else {
                                        game.playvs('tianjiangzhenyi1');
                                        result.targets[0].damage(player.hp)._triggered = null;
                                        player.storage.mori_shenkong -= 4;
                                    }
                                }
                            },
                            ai: {
                                combo: 'mori_shenkong',
                                expose: 1,
                                order: 8,
                                threaten: 0.5,
                                result: {
                                    player: 1,
                                    target: -5,
                                },
                            },
                        },
                        mori_tieji: {
                            audio: 'ext:末日浩劫/audio:2',
                            filter(event, player) {
                                return player.hujia >= 1;
                            },
                            enable: 'phaseUse',
                            usable: 9,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mori_tieji'), function (card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('tiebi3');
                                    player.useCard({ name: 'sha' }, result.targets, false);
                                    player.changeHujia(-1);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return 2;
                                    },
                                    target: -2,
                                },
                            },
                        },
                        aili_fensa: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 1;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                cardname(card, player) {
                                    if (card.name == 'jiu') return 'sha';
                                },
                            },
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'phaseBegin'],
                            },
                            forced: true,
                            silent: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return player.name == 'wuyue_morizz';
                            },
                            content() {
                                player.drawTo(player.maxHp);
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) game.playvs('fenshen');
                                if (n >= 2) event.finish();
                            },
                            group: ['aili_fensa_turn', 'aili_fensa_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                turn: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    _priority: 20,
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isTurnedOver();
                                    },
                                    content() {
                                        trigger.cancel();
                                        game.log(player, '取消了翻面');
                                    },
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('h', 'jiu')) return false;
                                },
                                respondSha: true,
                                threaten: 4,
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (get.type(card) == 'delay') return [1, 2];
                                        if (get.type(card) == 'trick') return [1, 2];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'basic' && card.name != 'tao' && card.name != 'du') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                            popup: false,
                        },
                        mori_bishi: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],//QQQ
                            },
                            forced: true,
                            silent: true,
                            fixed: true,
                            content() {
                                if (trigger.source && trigger.source.hp > 0) {
                                    var n = [1, 2, 3].randomGet();
                                    if (n <= 2) trigger.source.chooseToDiscard(3, 'he', true);
                                    if (n == 3) trigger.source.damage(3, 'fire');
                                } else {
                                    player.draw(trigger.num * 3);
                                }
                            },
                            ai: {
                                maixie: true,
                            },
                            group: ['mori_bishi_damage', 'mori_bishi_damage1', 'mori_bishi_damage2', 'mori_bishi_damage3', 'mori_bishi_damage4'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    fixed: true,
                                    content() {
                                        game.asyncDraw([trigger.player]);
                                    },
                                    popup: false,
                                },
                                damage1: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    silent: true,
                                    fixed: true,
                                    content() {
                                        var n = [1, 2, 3].randomGet();
                                        if (n <= 2) player.recover();
                                        if (n == 3) player.draw(3);
                                    },
                                    ai: {
                                        order: 10,
                                        effect: {
                                            player(card, player) {
                                                if (get.color(card) == 'red' && card.name == 'sha') return [1, 1];
                                                if (card.name == 'du' && player.hp > 1) return [1, 2];
                                                if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                                if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                                if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                            },
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                damage2: {
                                    trigger: {
                                        player: 'useCardAfter',
                                        target: 'useCardToBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    fixed: true,
                                    filter(event, player) {
                                        if (event.name != 'useCard' && event.player == event.target) return false;
                                        return event.card.suit == 'heart';
                                    },
                                    content() {
                                        var n = [1, 2, 3].randomGet();
                                        if (n == 3) player.recover();
                                        if (n <= 2) player.draw();
                                    },
                                    popup: false,
                                },
                                damage3: {
                                    trigger: {
                                        global: 'dieBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return event.player != player && player == game.boss;
                                    },
                                    content() {
                                        player.gainMaxHp(3);
                                        player.draw(3);
                                    },
                                    popup: false,
                                },
                                damage4: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    silent: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return player.maxHp > 4;
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.gainMaxHp(-4);
                                        player.recover(4 - player.hp);
                                        player.draw(4);
                                    },
                                    popup: false,
                                },
                            },
                            popup: false,
                        },
                        mori_tianqi: {
                            mod: {
                                maxHandcard(player, current) {
                                    return current + Math.max(0, Math.floor(player.storage.mori_tianqi));
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '启',
                            init(player) {
                                player.storage.mori_tianqi = 13;
                                player.markSkill('mori_tianqi');
                            },
                            trigger: {
                                player: ['damageEnd', 'loseHpBegin'],
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.mori_tianqi >= 1;
                            },
                            content() {
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) game.playvs('tianqi1');
                                if (n == 2) game.playvs('tianqi3');
                                player.storage.mori_tianqi_mark += trigger.num;
                                player.storage.mori_tianqi -= trigger.num;
                                player.markSkill('mori_tianqi_mark');
                                player.markSkill('mori_tianqi');
                                player.draw(trigger.num);
                            },
                            intro: {
                                content: '星辰正在部署',
                            },
                            group: 'mori_tianqi_mark',
                            subSkill: {
                                mark: {
                                    init(player) {
                                        player.storage.mori_tianqi_mark = 0;
                                        player.markSkill('mori_tianqi_mark');
                                    },
                                    mark: true,
                                    marktext: '时',
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.mori_tianqi_mark < player.storage.mori_tianqi) {
                                            player.storage.mori_tianqi_mark += 1;
                                            player.markSkill('mori_tianqi_mark');
                                            var n = [1, 2, 3, 4, 5, 6, 7].randomGet();
                                            if (n == 1) game.playvs('tianqi1');
                                            if (n == 2) game.playvs('tianqi3');
                                            event.finish();
                                        } else {
                                            game.playvs('tianqi2');
                                            var d = [0, 0, 1, 1, 2].randomGet();
                                            player.draw(d);
                                            player.recover(d);
                                            player.cs1s('这璀璨的群星,将是你们最终的谢幕', 4);
                                            player.storage.mori_tianqi_mark = 0;
                                            player.markSkill('mori_tianqi_mark');
                                            if (player != game.boss) {
                                                var num = [21, 23, 25].randomGet();
                                                player.storage.mori_tianqi = num;
                                                player.markSkill('mori_tianqi');
                                                player
                                                    .chooseTarget(get.prompt('mori_tianqi'), [1, 1], function (card, player, target) {
                                                        return player != target;
                                                    })
                                                    .set('ai', function (target) {
                                                        var player = _status.event.player;
                                                        if (get.attitude(_status.event.player, target)) {
                                                            return 1 - get.attitude(_status.event.player, target);
                                                        }
                                                        return 1;
                                                    });
                                            } else {
                                                var num = [5, 7, 9, 11, 13, 15, 17].randomGet();
                                                player.storage.mori_tianqi = num;
                                                player.markSkill('mori_tianqi');
                                                player
                                                    .chooseTarget(get.prompt('mori_tianqi'), [1, 3], function (card, player, target) {
                                                        return player != target;
                                                    })
                                                    .set('ai', function (target) {
                                                        var player = _status.event.player;
                                                        if (get.attitude(_status.event.player, target)) {
                                                            return 1 - get.attitude(_status.event.player, target);
                                                        }
                                                        return 1;
                                                    });
                                            }
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            var num = [1, 2, 2, 3].randomGet();
                                            event.players = result.targets;
                                            if (event.players.length) {
                                                event.players.shift().damage(num, 'fire')._triggered = null;
                                                player.storage.mori_tianqi_mark += 1;
                                                player.markSkill('mori_tianqi_mark');
                                                event.redo();
                                            }
                                        }
                                    },
                                    intro: {
                                        content: '天体武器充能中',
                                    },
                                },
                            },
                        },
                        mori_xunhui: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            mark: true,
                            marktext: '巡',
                            init(player) {
                                player.changeHujia(7);
                                player.storage.mori_xunhui = 1;
                                player.markSkill('mori_xunhui');
                            },
                            content() {
                                if (player.storage.mori_xunhui <= 2) {
                                    player.markSkill('mori_xunhui');
                                    player.changeHujia(player.storage.mori_xunhui * 3);
                                    player.draw(player.storage.mori_xunhui * 3);
                                } else {
                                    player.gainMaxHp();
                                    player.recover();
                                }
                                player.storage.mori_xunhui += 1;
                                game.playvs('xunhui1');
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['mori_xunhui_damage', 'mori_xunhui_damage1', 'mori_xunhui_damage2'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: ['damageBegin2', 'loseHpBefore'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_xunhui > 0;
                                    },
                                    content() {
                                        var u = player.storage.mori_xunhui;
                                        if (trigger.num > u) {
                                            trigger.num -= u;
                                            game.playvs('chongneng1');
                                            player.storage.mori_xunhui += 1;
                                        }
                                    },
                                },
                                damage1: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_xunhui >= 3;
                                    },
                                    content() {
                                        'step 0';
                                        game.playvs('hongzha');
                                        var f = player.storage.mori_xunhui;
                                        player.skip('phaseUse');
                                        player.skip('phaseDraw');
                                        player.skip('phaseDiscard');
                                        player.recover(f);
                                        player
                                            .chooseTarget(get.prompt('mori_xunhui'), [1], function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target)) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return 1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            event.players = result.targets;
                                            if (event.players.length) {
                                                event.players.shift().damage(player.storage.mori_xunhui);
                                                event.redo();
                                            }
                                        }
                                    },
                                    ai: {
                                        threaten: 1.8,
                                    },
                                },
                                damage2: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_xunhui >= 2 && player == game.boss;
                                    },
                                    content() {
                                        game.playvs('xunhui2');
                                        trigger.untrigger();
                                        trigger.finish();
                                        player.gainMaxHp(9 - player.maxHp);
                                        player.recover(9 - player.hp);
                                        player.draw(9);
                                        player.storage.mori_xunhui -= 2;
                                        player.markSkill('mori_xunhui');
                                    },
                                },
                            },
                        },
                        mori_bilei: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.playvs('xunhui1');
                                player
                                    .chooseTarget(get.prompt('mori_bilei'), [1, 3], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 + get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.players = result.targets;
                                    if (event.players.length) {
                                        event.players.shift().changeHujia();
                                        player.changeHujia();
                                        event.redo();
                                    }
                                }
                            },
                            group: 'mori_bilei_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hujia > 0 && event.source && event.source.hp > 0;
                                    },
                                    content() {
                                        if (trigger.source.hujia > 0) {
                                            game.playvs('bilei');
                                            trigger.source.changeHujia(-1);
                                            trigger.source.chooseToDiscard(2, 'he', true);
                                            player.draw(2);
                                        } else {
                                            game.playvs('bilei');
                                            trigger.source.damage();
                                            trigger.source.chooseToDiscard(2, 'he', true);
                                            player.draw(2);
                                        }
                                    },
                                },
                            },
                        },
                        mori_heijiang: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            audio: 'ext:末日浩劫/audio:2',
                            content() {
                                'step 0';
                                var n = [1, 2, 3, 4, 5].randomGet();
                                if (n == 1) game.playvs('heian1');
                                if (n == 2) game.playvs('heian3');
                                if (n == 3) game.playvs('heian4');
                                if (n == 4) game.playvs('heian6');
                                if (n == 5) game.playvs('heian7');
                                player.judge(function (result) {
                                    if (result.number >= 6) return 1;
                                    return -1;
                                });
                                ('step 1');
                                var targets = [],
                                    players = game.filterPlayer();
                                if (result.bool) {
                                    game.trySkillAudio('mori_heijiang');
                                    for (var i of players) {
                                        if (i.isEnemiesOf(player)) {
                                            i.addSkill('mori_heijiang_debuff');
                                            i.popup('mori_heijiang_debuff');
                                            targets.push(i);
                                        }
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.6,
                            },
                            group: ['mori_heijiang_delete', 'mori_heijiang_damage'],
                            subSkill: {
                                debuff: {
                                    mark: true,
                                    marktext: '黑',
                                    mod: {
                                        cardEnabled(card, player, target) {
                                            if (_status.currentPhase != player) return false;
                                        },
                                        cardUsable(card, player, target) {
                                            if (_status.currentPhase != player) return false;
                                        },
                                        cardRespondable(card, player, target) {
                                            if (_status.currentPhase != player) return false;
                                        },
                                        cardSavable(card, player, target) {
                                            if (_status.currentPhase != player) return false;
                                        },
                                    },
                                    intro: {
                                        content: '回合外不能使用或打出卡牌',
                                    },
                                },
                                delete: {
                                    trigger: {
                                        player: 'phaseDiscardEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('mori_heijiang_debuff');
                                        });
                                    },
                                    content() {
                                        var n = [1, 2, 3, 4, 5].randomGet();
                                        if (n == 1) game.playvs('heian1');
                                        if (n == 2) game.playvs('heian3');
                                        if (n == 3) game.playvs('heian4');
                                        if (n == 4) game.playvs('heian6');
                                        if (n == 5) game.playvs('heian7');
                                        for (var i of game.players) {
                                            if (i.hasSkill('mori_heijiang_debuff')) {
                                                player.line(i);
                                                i.removeSkill('mori_heijiang_debuff');
                                            }
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player.hasSkill('mori_heijiang_debuff');
                                    },
                                    content() {
                                        trigger.num++;
                                        var n = [1, 2].randomGet();
                                        if (n == 1) game.playvs('heian2');
                                        if (n == 2) game.playvs('heian5');
                                    },
                                },
                            },
                        },
                        mori_juejian: {
                            mark: true,
                            marktext: '刃',
                            init(player) {
                                player.storage.mori_juejian = 0;
                                player.markSkill('mori_juejian');
                            },
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.mori_juejian < 4) {
                                    player.storage.mori_juejian += 1;
                                    event.finish();
                                } else {
                                    player.storage.mori_juejian -= 4;
                                    player
                                        .chooseTarget(get.prompt('mori_juejian'), function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target) < 0) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return -1;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('shanren2');
                                    result.targets[0].damage();
                                }
                            },
                            group: ['mori_juejian_mark', 'mori_juejian_markc', 'mori_juejian_markb'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '闪',
                                    init(player) {
                                        player.storage.mori_juejian_mark = 0;
                                        player.markSkill('mori_juejian_mark');
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        var d = trigger.num;
                                        if (player.storage.mori_juejian_mark < 4) {
                                            player.storage.mori_juejian_mark += d;
                                            event.finish();
                                        } else {
                                            game.playvs('shanren3');
                                            player.storage.mori_juejian_mark -= 4;
                                            player.draw(4);
                                        }
                                    },
                                },
                                markc: {
                                    mark: true,
                                    marktext: '回',
                                    init(player) {
                                        player.storage.mori_juejian_markc = 0;
                                        player.markSkill('mori_juejian_markc');
                                    },
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.length;
                                    },
                                    content() {
                                        var c = trigger.cards.length;
                                        if (player.storage.mori_juejian_markc < 4) {
                                            player.storage.mori_juejian_markc += c;
                                            event.finish();
                                        } else {
                                            game.playvs('shanren1');
                                            player.storage.mori_juejian_markc -= 4;
                                            player.recover();
                                        }
                                    },
                                },
                                markb: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    content() {
                                        var n = [1, 2, 3, 4].randomGet();
                                        if (n == 1) game.playvs('shanren2');
                                        player.storage.mori_juejian += 1;
                                        player.storage.mori_juejian_mark += 1;
                                        player.storage.mori_juejian_markc += 1;
                                    },
                                    ai: {
                                        effect: {
                                            player(card, player) {
                                                if (card.name == 'nanman' || card.name == 'wanjian') return [1, 3];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        mori_qianfu: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '潜',
                            init(player) {
                                player.storage.mori_qianfu = 1;
                                player.markSkill('mori_qianfu');
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0 && player.name == 'miri_zhaoxijushou';
                            },
                            content() {
                                'step 0';
                                if (player.storage.mori_qichao >= 2) {
                                    player.storage.mori_qianfu += 7;
                                    player.markSkill('mori_qianfu');
                                } else {
                                    player.storage.mori_qianfu += 5;
                                    player.markSkill('mori_qianfu');
                                }
                                ('step 1');
                                game.mp413('zhaoxi');
                                game.playvs('zhaoxi1');
                            },
                            group: ['mori_qianfu_damaga', 'mori_qianfu_draw', 'mori_qianfu_daa'],
                            subSkill: {
                                damaga: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.num > 0 && player.storage.mori_qianfu >= 1;
                                    },
                                    content() {
                                        if (player.isTurnedOver()) {
                                            player.turnOver();
                                        }
                                        player.storage.mori_qianfu -= 1;
                                        player.markSkill('mori_qianfu');
                                    },
                                },
                                draw: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player && player.storage.mori_qianfu >= 1;
                                    },
                                    content() {
                                        if (player.storage.mori_qichao >= 2) {
                                            if (player.hp < player.maxHp) {
                                                player.storage.mori_qianfu -= 1;
                                                player.draw(3);
                                                player.recover(1);
                                            } else {
                                                player.storage.mori_qianfu -= 1;
                                                player.draw(4);
                                            }
                                        } else {
                                            if (player.hp < player.maxHp) {
                                                player.storage.mori_qianfu -= 1;
                                                player.recover(1);
                                                player.draw(2);
                                            } else {
                                                player.storage.mori_qianfu -= 1;
                                                player.draw(3);
                                            }
                                        }
                                    },
                                },
                                daa: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_qianfu >= 1;
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('mori_qianfu'), function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target) < 0) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return -1;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var d = player.storage.mori_qianfu;
                                            game.playvs('zhaoxi3');
                                            result.targets[0].damage(d);
                                        }
                                    },
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            popup: false,
                        },
                        mori_qichao: {
                            mark: true,
                            marktext: '潮',
                            init(player) {
                                player.storage.mori_qichao = 0;
                                player.markSkill('mori_qichao');
                            },
                            enable: 'phaseUse',
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            usable: 1,
                            selectCard: 4,
                            check(card) {
                                var player = get.owner(card);
                                if (player.countCards('h') > 6) return 12 - get.value(card);
                            },
                            content() {
                                game.playvs('zhaoxi4');
                                player.storage.mori_qichao += 1;
                            },
                            ai: {
                                order: 9.5,
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= 6) return 3;
                                        return -1;
                                    },
                                    target: -1,
                                },
                                threaten: 2,
                            },
                            intro: {
                                content: '你开始起潮',
                            },
                        },
                        mori_yanmoshijie: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            audio: 'ext:末日浩劫/audio:2',
                            filter(event, player) {
                                return player.storage.mori_qichao >= 1;
                            },
                            content() {
                                'step 0';
                                game.mp413('yanmoshijie');
                                game.playvs('zhaoxi4');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                player.line(event.targets, 'green');
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage(player.storage.mori_qichao);
                                    event.redo();
                                }
                            },
                            popup: false,
                        },
                        mori_quguang: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.addSkill('mori_quguang_mark');
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.card.suit == 'heart';
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(2);
                                        player.removeSkill('mori_quguang_mark');
                                    },
                                },
                            },
                        },
                        mori_chuyi: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                game.playvs('chuyi1');
                                target.showHandcards();
                                ('step 1');
                                var color = get.color;
                                if (target.countCards('h', { color: 'black' }) > 0) {
                                    target.damage();
                                    player.draw(target.countCards('h', { color: 'black' }));
                                }
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        return -target.countCards('h', { color: 'black' });
                                        return 0;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        mori_suiyin: {
                            trigger: {
                                player: ['respond', 'useCard'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (get.color(trigger.card) == 'red') {
                                    var card = get.cardPile2(function (card) {
                                        return get.color(card, false) == 'black';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9].randomGet();
                                    if (n == 1) game.playvs('shuiying1');
                                    if (n == 2) game.playvs('shuiying2');
                                    event.finish();
                                }
                                if (get.color(trigger.card) == 'black') {
                                    player
                                        .chooseTarget(get.prompt('mori_suiyin'), function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0) return 3;
                                            return -2;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var card = get.cardPile2(function (card) {
                                        return get.color(card, false) == 'red';
                                    });
                                    if (card) result.targets[0].gain(card, 'gain2');
                                    var n = [1, 2, 3, 4, 5].randomGet();
                                    if (n == 1) game.playvs('shuiying3');
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-0.5, -0.1];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.type(card) == 'delay') return [1, 1];
                                        if (get.type(card) == 'trick') return [1, 1];
                                        if (get.type(card) == 'equip') return [1, 1];
                                    },
                                },
                            },
                        },
                        mori_guanganlunzhuan: {
                            trigger: {
                                player: ['phaseBegin'],
                            },
                            forced: true,
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = !player.storage.mori_guanganlunzhuan ? '(非boss时,此技能失效)回合开始时,<span class="legendtext">你增加一层「暗」标记<span class="legendtext">你可以选择一个目标令其失去「暗」层数点体力值.当你的「暗」层数大于你的体力值时,你弃置所有手牌,并清空「暗」的层数</span>' : '(非boss时,此技能失效)回合开始时,<span class="bluetext">你为全场人员回复一点体力,并使其获得一层「光」标记拥有「光」的目标对你造成伤害,会失去「光」对应层数的体力值,并减去1层「光」的层数.';
                                    if (!player.storage.mori_guanganlunzhuan) {
                                        str += '<br><li>当前状态:暗';
                                    } else str += '<br><li>当前状态:光';
                                    return str;
                                },
                            },
                            zhuanhuanji: true,
                            marktext: '光',
                            content() {
                                'step 0';
                                if (player.storage.mori_guanganlunzhuan == true) {
                                    player.storage.mori_guanganlunzhuan = false;
                                    var targets = [],
                                        players = game.filterPlayer();
                                    game.trySkillAudio('mori_guanganlunzhuan');
                                    for (var i of players) {
                                        if (i != player) {
                                            if (i.hasSkill('mori_guanganlunzhuan_debuff')) {
                                                i.recover();
                                                i.storage.mori_guanganlunzhuan_debuff += 1;
                                                i.markSkill('mori_guanganlunzhuan_debuff');
                                                i.popup('mori_guanganlunzhuan_debuff');
                                                targets.push(i);
                                            } else {
                                                i.addSkill('mori_guanganlunzhuan_debuff');
                                                i.recover();
                                                i.popup('mori_guanganlunzhuan_debuff');
                                                targets.push(i);
                                            }
                                        }
                                    }
                                    var n = [1, 2].randomGet();
                                    if (n == 1) game.playvs('shengnv1');
                                    if (n == 2) game.playvs('shengnv2');
                                    event.finish();
                                } else {
                                    player.storage.mori_guanganlunzhuan = true;
                                    player.storage.mori_guanganlunzhuan_delete += 1;
                                    player
                                        .chooseTarget(get.prompt('mori_guanganlunzhuan'), function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target) < 0) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return -1;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('shengnv3');
                                    result.targets[0].loseHp(player.storage.mori_guanganlunzhuan_delete);
                                }
                            },
                            group: ['mori_guanganlunzhuan_delete'],
                            subSkill: {
                                debuff: {
                                    mark: true,
                                    marktext: '光',
                                    init(player) {
                                        player.storage.mori_guanganlunzhuan_debuff = 1;
                                        player.markSkill('mori_guanganlunzhuan_debuff');
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('mori_guanganlunzhuan');
                                    },
                                    content() {
                                        game.playvs('shengnv6');
                                        if (player.storage.mori_guanganlunzhuan_debuff <= 1) {
                                            player.loseHp(player.storage.mori_guanganlunzhuan_debuff);
                                            player.removeSkill('mori_guanganlunzhuan_debuff');
                                        } else {
                                            player.loseHp(player.storage.mori_guanganlunzhuan_debuff);
                                            player.storage.mori_guanganlunzhuan_debuff -= 1;
                                        }
                                    },
                                    intro: {
                                        content: '你曾被光芒眷顾',
                                    },
                                },
                                delete: {
                                    mark: true,
                                    marktext: '暗',
                                    init(player) {
                                        player.storage.mori_guanganlunzhuan_delete = 0;
                                        player.markSkill('mori_guanganlunzhuan_delete');
                                    },
                                    intro: {
                                        content: '你在黑暗中寻求光明',
                                    },
                                },
                            },
                            popup: false,
                        },
                        mori_shengyan: {
                            audio: 'ext:末日浩劫/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseControl('增加体力', '回复体力', '获得手牌', function () {
                                        if (player.hp >= player.maxHp / 2 && player.countCards('h') >= player.maxHp / 2) {
                                            return '增加体力';
                                        }
                                        if (player.hp < player.maxHp / 2) {
                                            return '回复体力';
                                        }
                                        if (player.countCards('h') < player.maxHp / 2) {
                                            return '获得手牌';
                                        }
                                        return 1;
                                    })
                                    .set('prompt', '选择一个圣言执行');
                                ('step 1');
                                if (result.control == '增加体力') {
                                    player.gainMaxHp();
                                    game.playvs('shengyan4');
                                }
                                if (result.control == '回复体力') {
                                    player.hp = player.maxHp;
                                    game.playvs('shengyan3');
                                }
                                if (result.control == '获得手牌') {
                                    player.draw(player.maxHp - player.countCards('h'));
                                    game.playvs('shengyan2');
                                }
                            },
                            ai: {
                                order: 6.5,
                                result: {
                                    player(player) {
                                        return 10;
                                    },
                                },
                            },
                        },
                        mori_guanghuilaiwei: {
                            mod: {
                                maxHandcard(player, current) {
                                    return current + Math.max(0, Math.floor(player.storage.mori_guanghuilaiwei));
                                },
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '未',
                            init(player) {
                                player.storage.mori_guanghuilaiwei = 0;
                                player.markSkill('mori_guanghuilaiwei');
                            },
                            trigger: {
                                player: ['phaseEnd', 'phaseBegin'],
                            },
                            forced: true,
                            silent: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0 && player.name == 'mori_shenzhi';
                            },
                            content() {
                                'step 0';
                                player.recover();
                                if (player.storage.mori_guanghuilaiwei < 17) {
                                    player.storage.mori_guanghuilaiwei += 1;
                                    player.markSkill('mori_guanghuilaiwei');
                                    var targets = [],
                                        players = game.filterPlayer();
                                    game.trySkillAudio('mori_guanghuilaiwei');
                                    for (var i of players) {
                                        if (i.isEnemiesOf(player)) {
                                            i.damage();
                                            i.popup('mori_guanghuilaiwei');
                                            targets.push(i);
                                        }
                                    }
                                    game.playvs('guanghuiweilai1');
                                    event.finish();
                                } else {
                                    player.storage.mori_guanghuilaiwei -= 17;
                                    player.markSkill('mori_guanghuilaiwei');
                                    player
                                        .chooseTarget(get.prompt('mori_guanghuilaiwei'), function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target) < 0) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return -1;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.playvs('guanghuiweilai2');
                                    result.targets[0].die();
                                }
                            },
                            group: ['mori_guanghuilaiwei_damaga', 'mori_guanghuilaiwei_draw'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:末日浩劫/audio:2',
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    content() {
                                        game.playvs('guanghuiweilai3');
                                        var d = player.storage.mori_guanghuilaiwei;
                                        trigger.num += d;
                                    },
                                },
                                damaga: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    forced: true,
                                    silent: true,
                                    fixed: true,
                                    content() {
                                        game.playvs('guanghuiweilai4');
                                        var hp = trigger.player.maxHp;
                                        player.storage.mori_guanghuilaiwei += hp;
                                        player.markSkill('mori_guanghuilaiwei');
                                    },
                                    popup: false,
                                },
                            },
                            intro: {
                                content: 'mark',
                            },
                            popup: false,
                        },
                        mori_diaolingzhihua: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                global: ['phaseDiscardBefore'],
                            },
                            forced: true,
                            silent: true,
                            _priority: -10,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0 && player.name == 'mori_shenzhi' && event.player != player;
                            },
                            content() {
                                'step 0';
                                if (player.maxHp < 17) {
                                    game.playvs('diaolingshihua1');
                                    var c = trigger.player.countCards('h');
                                    trigger.player.chooseToDiscard(c, 'h', true);
                                    player.gainMaxHp();
                                    player.loseHp();
                                    player.draw(2);
                                    event.finish();
                                } else {
                                    game.playvs('diaolingshihua2');
                                    player.gainMaxHp(-10);
                                    var list = game.filterPlayer();
                                    list.remove(player);
                                    list.sort(lib.sort.seat);
                                    var list2 = [];
                                    for (var i = 0; i < list.length; i++) {
                                        list2.push(0);
                                    }
                                    for (var i = 0; i < 17; i++) {
                                        list2[Math.floor(Math.random() * list2.length)]++;
                                    }
                                    event.list = list;
                                    event.list2 = list2;
                                }
                                ('step 1');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    target.damage(event.list2.shift());
                                    player.line(target, 'thunder');
                                    event.redo();
                                }
                            },
                            popup: false,
                        },
                        mori_Ruili: {
                            audio: 'ext:末日浩劫/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '锐',
                            init(player) {
                                player.storage.mori_Ruili = 0;
                                player.markSkill('mori_Ruili');
                            },
                        },
                        mori_Yongheng: {
                            audio: 'ext:末日浩劫/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '恒',
                            init(player) {
                                player.storage.mori_Yongheng = 0;
                                player.markSkill('mori_Yongheng');
                            },
                        },
                        mori_Tianyou: {
                            audio: 'ext:末日浩劫/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            popup: false,
                            mark: true,
                            marktext: '佑',
                            init(player) {
                                player.storage.mori_Tianyou = 0;
                                player.markSkill('mori_Tianyou');
                            },
                        },
                        mori_Shangdian: {
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return get.mode() == 'boss' && game.me != game.boss && game.boss.name == 'mori_mieshitianshi';
                            },
                            content() {
                                'step 0';
                                game.boss.cs1s('<span style="color: #FFA550">可爱的人类,你们来找我是为了何事？</span>', 3);
                                ('step 1');
                                player
                                    .chooseControl('寻找命运', '逃避真实', '这就离开', function () {
                                        if (result.control == '寻找命运') return -10;
                                        if (result.control == '逃避真实') return -10;
                                        if (result.control == '这就离开') return 10;
                                    })
                                    .set('prompt', '请说明你的来意');
                                ('step 2');
                                if (result.control == '寻找命运') {
                                    event.goto(3);
                                }
                                if (result.control == '逃避真实') {
                                    game.boss.cs1s('<span style="color: #FFA550">逃避是无法解决问题的哦,可爱的人类.</span>', 3);
                                    event.goto(6);
                                }
                                if (result.control == '这就离开') {
                                    game.boss.cs1s('<span style="color: #FFA550">想通过这样的方式让我记住你么,可爱的人类</span>', 6);
                                    game.over();
                                    event.finish();
                                }
                                ('step 3');
                                game.boss.cs1s('<span style="color: #FFA550">那么你们想要从我这里得到什么？</span>', 3);
                                ('step 4');
                                player
                                    .chooseControl('兑换强命', '兑换天运', '兑换守护', '兑换锐利', '兑换真实', '取消', function () {
                                        if (result.control == '兑换强命') return -10;
                                        if (result.control == '兑换天运') return -10;
                                        if (result.control == '兑换守护') return -10;
                                        if (result.control == '兑换锐利') return -10;
                                        if (result.control == '兑换真实') return -10;
                                        if (result.control == '取消') return 10;
                                    })
                                    .set('prompt', '请选择需要兑换的属性');
                                ('step 5');
                                if (result.control == '兑换强命') {
                                    if (lib.config.Mingyun >= 500) {
                                        game.boss.cs1s('<span style="color: #FFA550">呵呵呵,强健的身体能遭受更多的苦难呢</span>', 3);
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 500);
                                        game.saveConfig('Qiangming', lib.config.Qiangming + 1);
                                        game.tis('兑换成功,强命值+1');
                                        event.goto(3);
                                    } else {
                                        game.boss.cs1s('<span style="color: #FFA550">兑换强命可是需要500点命运值哦</span>', 3);
                                        game.tis('命运值不足,无法兑换');
                                        event.goto(3);
                                    }
                                }
                                if (result.control == '兑换天运') {
                                    if (lib.config.Mingyun >= 300) {
                                        game.boss.cs1s('<span style="color: #FFA550">哦？准备向神明祈祷了么？</span>', 3);
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 300);
                                        game.saveConfig('Tianyou', lib.config.Tianyou + 1);
                                        game.tis('兑换成功,天运值+1');
                                        event.goto(3);
                                    } else {
                                        game.boss.cs1s('<span style="color: #FFA550">兑换天运可是需要300点命运值哦</span>', 3);
                                        game.tis('命运值不足,无法兑换');
                                        event.goto(3);
                                    }
                                }
                                if (result.control == '兑换守护') {
                                    if (lib.config.Mingyun >= 200) {
                                        game.boss.cs1s('<span style="color: #FFA550">是不是应该好好想想到底是谁给你的守护呢？</span>', 3);
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 200);
                                        game.saveConfig('Bilei', lib.config.Bilei + 1);
                                        game.tis('兑换成功,壁垒+1');
                                        event.goto(3);
                                    } else {
                                        game.boss.cs1s('<span style="color: #FFA550">兑换守护可是需要200点命运值哦</span>', 3);
                                        game.tis('命运值不足,无法兑换');
                                        event.goto(3);
                                    }
                                }
                                if (result.control == '兑换锐利') {
                                    if (lib.config.Mingyun >= 500) {
                                        game.boss.cs1s('<span style="color: #FFA550">最好的防御就是进攻,对吧？</span>', 3);
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 500);
                                        game.saveConfig('Ruili', lib.config.Ruili + 1);
                                        game.tis('兑换成功,锐利+1');
                                        event.goto(3);
                                    } else {
                                        game.boss.cs1s('<span style="color: #FFA550">兑换锐利可是需要500点命运值哦</span>', 3);
                                        game.tis('命运值不足,无法兑换');
                                        event.goto(3);
                                    }
                                }
                                if (result.control == '兑换真实') {
                                    if (lib.config.ZHENSHI < 9) {
                                        if (lib.config.Mingyun >= 1500) {
                                            game.boss.cs1s('<span style="color: #FFA550">虚无的真实,希望你已经做好面对它的准备.</span>', 3);
                                            game.saveConfig('Mingyun', lib.config.Mingyun - 1500);
                                            game.saveConfig('ZHENSHI', lib.config.ZHENSHI + 1);
                                            game.tis('兑换成功,真实值+1');
                                            event.goto(3);
                                        } else {
                                            game.boss.cs1s('<span style="color: #FFA550">兑换真实可是需要1500点命运值哦</span>', 3);
                                            game.tis('命运值不足,无法兑换');
                                            event.goto(3);
                                        }
                                    } else {
                                        game.boss.cs1s('<span style="color: #FFA550">通往真实的最后一步,可是需要你自己去发现哦</span>', 3);
                                        game.tis('兑换失败,无法兑换');
                                        event.goto(3);
                                    }
                                }
                                if (result.control == '取消') {
                                    game.boss.cs1s('<span style="color: #FFA550">在终结来临之前,努力挣扎吧,可爱的人类们.</span>', 6);
                                    game.over();
                                    event.finish();
                                }
                                ('step 6');
                                game.boss.init('miri_chiuuzhishou');
                                ('step 7');
                                game.boss.cs1s('<span style="color: #AAAAFF">我讨厌这个世界,也爱着这个世界</span>', 3);
                                ('step 8');
                                game.boss.cs1s('<span style="color: #AAAAFF">人类,你想要忘掉一切吗？</span>', 3);
                                ('step 9');
                                player
                                    .chooseControl('消除真实', '我想', '不想', function () {
                                        if (result.control == '我想') return -10;
                                        if (result.control == '不想') return 10;
                                        if (result.control == '消除真实') return -10;
                                    })
                                    .set('prompt', '是否让痴愚之兽抹除你的记忆');
                                ('step 10');
                                if (result.control == '消除真实') {
                                    if (lib.config.ZHENSHI > 6) {
                                        game.boss.cs1s('<span style="color: #AAAAFF">人类,在命运之中沉沦吧!</span>', 3);
                                        game.saveConfig('Mingyun', lib.config.Mingyun + 300);
                                        game.saveConfig('ZHENSHI', lib.config.ZHENSHI - 1);
                                        game.tis('消除成功,真实值-1,命运值+300');
                                        event.goto(8);
                                    } else {
                                        game.boss.cs1s('<span style="color: #AAAAFF">愚蠢的人类,明明已经置身于命运之中却不自知</span>', 3);
                                        game.tis('消除失败,痴愚之獣无法将真实降低至5');
                                        event.goto(8);
                                    }
                                }
                                if (result.control == '我想') {
                                    game.boss.cs1s('<span style="color: #AAAAFF">喜欢逃避的人类,和我一样呢</span>', 4);
                                    event.goto(11);
                                }
                                if (result.control == '不想') {
                                    game.boss.cs1s('<span style="color: #AAAAFF">噢噢,那我走了</span>', 6);
                                    game.over();
                                    event.finish();
                                }
                                ('step 11');
                                player
                                    .chooseControl('我很确定', '考虑一下', '傻猫', function () {
                                        if (result.control == '我很确定') return -10;
                                        if (result.control == '考虑一下') return -10;
                                        if (result.control == '傻猫') return 10;
                                    })
                                    .set('prompt', '确定要清除所有记忆么？(清除所有数据)');
                                ('step 12');
                                if (result.control == '我很确定') {
                                    game.boss.cs1s('<span style="color: #AAAAFF">痛苦的记忆,让我来帮你清除掉</span>', 6);
                                    game.tis('数据已清零');
                                    game.saveConfig('Mingyun', lib.config.Mingyun - lib.config.Mingyun);
                                    game.saveConfig('ZHENSHI', lib.config.ZHENSHI - lib.config.ZHENSHI);
                                    game.saveConfig('Bilei', lib.config.Bilei - lib.config.Bilei);
                                    game.saveConfig('Tianyou', lib.config.Tianyou - lib.config.Tianyou);
                                    game.saveConfig('Qiangming', lib.config.Qiangming - lib.config.Qiangming);
                                    game.saveConfig('Ruili', lib.config.Ruili - lib.config.Ruili);
                                    game.saveConfig('Xaxs', lib.config.Xaxs - lib.config.Xaxs);
                                    game.saveConfig('Cjmr', lib.config.Cjmr - lib.config.Cjmr);
                                    game.saveConfig('Xhxc', lib.config.Xhxc - lib.config.Xhxc);
                                    game.saveConfig('Sfjl', lib.config.Sfjl - lib.config.Sfjl);
                                    game.saveConfig('Ybzy', lib.config.Ybzy - lib.config.Ybzy);
                                    game.saveConfig('Bddl', lib.config.Bddl - lib.config.Bddl);
                                    game.saveConfig('Tjpt', lib.config.Tjpt - lib.config.Tjpt);
                                    game.saveConfig('Dlsw', lib.config.Dlsw - lib.config.Dlsw);
                                    game.saveConfig('Qsml', lib.config.Qsml - lib.config.Qsml);
                                    game.saveConfig('Hnjs', lib.config.Hnjs - lib.config.Hnjs);
                                    game.saveConfig('Yxgm', lib.config.Yxgm - lib.config.Yxgm);
                                    game.saveConfig('Lhyy', lib.config.Lhyy - lib.config.Lhyy);
                                    game.saveConfig('Trzs', lib.config.Trzs - lib.config.Trzs);
                                    game.saveConfig('Gjqs', lib.config.Gjqs - lib.config.Gjqs);
                                    game.saveConfig('Gdyz', lib.config.Gdyz - lib.config.Gdyz);
                                    game.saveConfig('Yongheng', lib.config.Yongheng - lib.config.Yongheng);
                                    game.saveConfig('Skillyong', lib.config.Skillyong - lib.config.Skillyong);
                                    game.saveConfig('Sminyong', lib.config.Sminyong - lib.config.Sminyong);
                                    game.over();
                                }
                                if (result.control == '考虑一下') {
                                    game.boss.cs1s('<span style="color: #AAAAFF">人类,你还在等什么？</span>', 3);
                                    event.goto(8);
                                }
                                if (result.control == '傻猫') {
                                    game.boss.cs1s('<span style="color: #AAAAFF">不许叫我傻猫,讨厌的人类!!!</span>', 4);
                                    game.saveConfig('Mingyun', lib.config.Mingyun - 10);
                                    game.tis('你被痴愚之獣抢走了10点命运值');
                                    game.over();
                                    event.finish();
                                }
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_paicili: {
                            init(player) {
                                player.gainMaxHp(player.maxHp * 2);
                                player.recover(player.hp * 2);
                            },
                            forced: true,
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            content() {
                                trigger.num += Math.max(2, Math.floor(player.maxHp)) - 2;
                            },
                            group: ['mori_paicili_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        if (player == game.boss) {
                                            player.storage.mori_mingyunbodong += 1;
                                        }
                                        game.playvs('xpaicili2');
                                        player.gainMaxHp(-1);
                                    },
                                },
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'juedou' || card.name == 'wugu') return [2, 4];
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (card.name == 'du' && player.hp > 1) return [1, 2];
                                    },
                                },
                            },
                        },
                        mori_huimieyizhi: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == game.boss && event.player != player && event.player.name != 'wuyue_morizz' && event.player.name != 'aili_mrsz';
                            },
                            content() {
                                player.line(trigger.player, 'green');
                                var p = trigger.player.hp;
                                var w = trigger.player;
                                var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                                game.tis('意志检定点数为' + n + '点');
                                if (n <= p) {
                                    var num = [1, 2].randomGet();
                                    if (num == 1) game.playvs('xdiyu');
                                    if (num == 2) game.playvs('xdiyu2');
                                    w.draw(3);
                                    w.goMad('phaseEnd');
                                    w.loseMaxHp();
                                }
                            },
                        },
                        mori_mingyunbodong: {
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '命',
                            init(player) {
                                player.storage.mori_mingyunbodong = 0;
                                player.markSkill('mori_mingyunbodong');
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return player == game.boss && player.hp <= player.storage.mori_mingyunbodong;
                            },
                            async content(event, trigger, player) {
                                var m = player.storage.mori_mingyunbodong;
                                var y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                                game.tis('命运拨动点数为' + y + '点');
                                if (y < m) {
                                    var num = [1, 2].randomGet();
                                    if (num == 1) game.playvs('xmingyunbodong1');
                                    if (num == 2) game.playvs('xmingyunbodong2');
                                    game.changeBossQ('miri_huimieshitu');
                                    game.boss.update();
                                    game.boss.cs1s('你们的命运,已经注定在此终结.', 5);
                                    lib.config.background_music = 'music_custom';
                                    lib.config.background_music_src = 'extension/末日浩劫/audio/beijinyinyue13.mp3';
                                    game.playBackgroundMusic();
                                    game.broadcastAll() + ui.background.setBackgroundImage('extension/末日浩劫/image/xunhui.jpg');
                                    game.boss.addFellow('aili_mrsz');
                                    game.boss.addFellow('aili_mrsz');
                                    game.playvs('xpaicili');
                                    for (var i of game.players) {
                                        if (i.name == 'aili_mrsz') {
                                            i.removeSkill('aili_ms');
                                            i.removeSkill('aili_mr');
                                        }
                                    }
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        mori_xunjiao: {
                            init(player) {
                                player.addSkill('mori_xunjiao_marka');
                            },
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            filter(event, player) {
                                return player.hasSkill('mori_xunjiao_mark') && get.color(event.card) == 'red';
                            },
                            forced: true,
                            content() {
                                if (trigger.card.name == 'sha') {
                                    player.getStat().card.sha--;
                                }
                                player.draw();
                            },
                            ai: {
                                threaten: 2,
                                effect: {
                                    player(card, player) {
                                        if (player.getEquip('zhuge') && get.type(card) == 'equip') return [-2, -4];
                                        if (!player.getEquip('zhuge') && get.type(card) == 'equip') return [1, 2];
                                        if (get.color(card) == 'black' && card.name == 'sha') return [-0.25, -0.25];
                                        if (get.color(card) == 'red' && card.name == 'sha') return [2, 2];
                                    },
                                },
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '殉',
                                    init(player) {
                                        player.storage.mori_xunjiao_mark = player.maxHp - player.hp;
                                        player.markSkill('mori_xunjiao_mark');
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.storage.mori_xunjiao_mark < 1) {
                                            game.playvs('xunjiao2');
                                            player.addSkill('mori_xunjiao_marka');
                                            player.gainMaxHp(4 - player.maxHp);
                                            player.recover(4 - player.hp);
                                            player.removeSkill('mori_xunjiao_mark');
                                            player.die();
                                        } else {
                                            game.playvs('xunjiao3');
                                            player.storage.mori_xunjiao_mark -= 1;
                                        }
                                    },
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                                marka: {
                                    audio: 'ext:末日浩劫/audio:2',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        game.playvs('xunjiao');
                                        player.addSkill('mori_xunjiao_mark');
                                        player.gainMaxHp(12 - player.maxHp);
                                        player.recover(12 - player.hp);
                                        player.draw(12 - player.countCards('h'));
                                        player.removeSkill('mori_xunjiao_marka');
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player(player) {
                                                return 2 - player.hp;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        mori_huimieqixi: {
                            forced: true,
                            trigger: {
                                source: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                if (trigger.player.hasSkill('mori_huimieqixi_mark')) {
                                    trigger.player.storage.mori_huimieqixi_mark += 1;
                                } else {
                                    trigger.player.addSkill('mori_huimieqixi_mark');
                                    trigger.player.storage.mori_huimieqixi_mark += 1;
                                    trigger.player.markSkill('mori_huimieqixi_mark');
                                }
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '毁',
                                    init(player) {
                                        player.storage.mori_huimieqixi_mark = 0;
                                        player.markSkill('mori_huimieqixi_mark');
                                    },
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    forced: true,
                                    content() {
                                        var h = player.storage.mori_huimieqixi_mark;
                                        if (player.countCards('he') >= h) {
                                            player.chooseToDiscard(h, 'he', true);
                                        } else {
                                            player.damage(h);
                                        }
                                        player.removeSkill('mori_huimieqixi_mark');
                                    },
                                    intro: {
                                        content: 'mark',
                                    },
                                },
                            },
                        },
                        mori_fenshizhiyi: {
                            mark: true,
                            marktext: '焚',
                            init(player) {
                                player.storage.mori_fenshizhiyi_mark = 0;
                                player.markSkill('mori_fenshizhiyi_mark');
                            },
                            forced: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                player.storage.mori_fenshizhiyi_mark += 1;
                                player.markSkill('mori_fenshizhiyi_mark');
                            },
                            group: ['mori_fenshizhiyi_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var f = player.storage.mori_fenshizhiyi_mark;
                                        if (f > 5) {
                                            player.recover(2);
                                            player.draw(6);
                                        } else {
                                            player.damage();
                                            player
                                                .chooseTarget(get.prompt('mori_fenshizhiyi'), function (card, player, target) {
                                                    return player != target;
                                                })
                                                .set('ai', function (target) {
                                                    var player = _status.event.player;
                                                    if (get.attitude(_status.event.player, target) < 0) {
                                                        return 1 - get.attitude(_status.event.player, target);
                                                    }
                                                    return -1;
                                                });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].damage(2, 'fire');
                                        }
                                    },
                                },
                            },
                        },
                        mori_yinyingjian: {
                            shaRelated: true,
                            audio: 'ext:末日浩劫/audio:2',
                            group: ['mori_yinyingjian_respond', 'mori_yinyingjian_use'],
                            subSkill: {
                                use: {
                                    audio: 'ext:末日浩劫/audio:2',
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.countCards('he') > 0;
                                    },
                                    logTarget: 'target',
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(1, 'he', true);
                                        game.playvs(player.name + 'jn2');
                                        ('step 1');
                                        var type = get.type(result.cards[0]);
                                        var target = trigger.target;
                                        target
                                            .chooseToDiscard('请弃置一张' + get.translation(type) + '牌,否则此杀伤害+1,且无法闪避', 'he', function (card) {
                                                return get.type(card) == _status.event.type;
                                            })
                                            .set('ai', function (card) {
                                                return 12 - get.value(card);
                                            })
                                            .set('type', type);
                                        ('step 2');
                                        if (!result.bool) {
                                            trigger.parent.directHit.add(trigger.target);
                                            var id = trigger.target.playerid;
                                            var map = trigger.parent.customArgs;
                                            if (!map[id]) map[id] = {};
                                            if (typeof map[id].extraDamage != 'number') {
                                                map[id].extraDamage = 0;
                                            }
                                            map[id].extraDamage++;
                                        }
                                    },
                                },
                                respond: {
                                    audio: 'ext:末日浩劫/audio:2',
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && player.countCards('he') > 0;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        player.chooseToDiscard(1, 'he', true);
                                        game.playvs(player.name + 'jn3');
                                        ('step 1');
                                        var type = get.type(result.cards[0]);
                                        var target = trigger.player;
                                        target
                                            .chooseToDiscard('请弃置一张' + get.translation(type) + '牌,否则此牌对目标无效', 'he', function (card) {
                                                return get.type(card) == _status.event.type;
                                            })
                                            .set('ai', function (card) {
                                                return 12 - get.value(card);
                                            })
                                            .set('type', type);
                                        ('step 2');
                                        if (!result.bool) {
                                            trigger.parent.excluded.add(player);
                                        }
                                    },
                                },
                            },
                            ai: {
                                directHit_ai: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && current) return 0.7;
                                    },
                                },
                            },
                        },
                        mori_shenyuanqixi: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                game.playvs(player.name + 'jn1');
                                player
                                    .chooseToDiscard('是否弃置一张红色牌,否则此回合无法使用牌', 'he', function (card) {
                                        return get.color(card) == 'red';
                                    })
                                    .set('ai', function (card) {
                                        return 15 - get.value(card);
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    player.addSkill('mori_shenyuanqixi_mark');
                                }
                            },
                            group: ['mori_shenyuanqixi_marks'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '渊',
                                    mod: {
                                        cardEnabled(card, player, target) {
                                            if (_status.currentPhase == player) return false;
                                        },
                                        cardUsable(card, player, target) {
                                            if (_status.currentPhase == player) return false;
                                        },
                                        cardRespondable(card, player, target) {
                                            if (_status.currentPhase == player) return false;
                                        },
                                        cardSavable(card, player, target) {
                                            if (_status.currentPhase == player) return false;
                                        },
                                    },
                                    intro: {
                                        content: '你被深渊气息所扰乱,回合内不能使用或打出卡牌',
                                    },
                                },
                                marks: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.hasSkill('mori_shenyuanqixi_mark')) {
                                            player.removeSkill('mori_shenyuanqixi_mark');
                                        }
                                        player.loseHp();
                                        game.playvs(player.name + 'jn4');
                                        var card = get.cardPile2(function (card) {
                                            return get.color(card, false) == 'black';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        mori_jimiezhijian: {
                            audio: 'ext:末日浩劫/audio:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                if (!player.hasSkill('mori_jimiezhijian_marks')) {
                                    player.addSkill('mori_jimiezhijian_marks');
                                }
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        player.recover(1 - player.hp);
                                        game.playvs(player.name + 'jn');
                                    },
                                },
                                marks: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('mori_jimiezhijian'), function (card, player, target) {
                                                return lib.filter.targetEnabled({ name: 'sha' }, player, target);
                                            })
                                            .set('ai', function (target) {
                                                return get.effect(target, { name: 'sha' }, _status.event.player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            player.addTempSkill('mori_jimiezhijian_mark', 'recoverBefore');
                                            player.useCard({ name: 'sha' }, result.targets, false);
                                        }
                                    },
                                },
                            },
                        },
                        mori_dangmo: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mori_dangmo'), function (card, player, target) {
                                        return target.group != player.group && target != player;
                                    })
                                    .set('ai', function (target) {
                                        return get.effect(target, { name: 'sha' }, _status.event.player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    game.playvs(player.name + 'jn1');
                                    var r = result.targets[0];
                                    player.useCard({ name: 'sha' }, r, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                            group: ['mori_dangmo_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source == player && event.player.group != player.group;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                        },
                        mori_shixin: {
                            mod: {
                                cardSavable(card, player) {
                                    if (
                                        card.name == 'tao' &&
                                        game.hasPlayer(function (current) {
                                            return current != player && player.group == current.group;
                                        })
                                    ) {
                                        return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mori_shixin'), function (card, player, target) {
                                        return target.group != player.group && target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var l = [1, 2].randomGet();
                                    if (l == 1) game.playvs(player.name + 'jn2');
                                    if (l == 2) game.playvs(player.name + 'jn3');
                                    var r = result.targets[0];
                                    r.loseHp();
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -1,
                                },
                            },
                        },
                        mori_bumieyizhi: {
                            trigger: {
                                player: 'dying',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.maxHp > 0;
                            },
                            content() {
                                var l = [1, 2].randomGet();
                                if (l == 1) game.playvs(player.name + 'jn');
                                if (l == 2) game.playvs(player.name + 'jn4');
                                player.loseMaxHp();
                                player.draw(4);
                                player.phaseUse();
                            },
                        },
                        mori_shige: {
                            init(player) {
                                player.storage.mori_shige = 0;
                                player.markSkill('mori_shige');
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            forced: true,
                            fixed: true,
                            audio: 'ext:末日浩劫/audio:2',
                            mark: true,
                            marktext: '平衡',
                            filter(event, player) {
                                return event.player != player;
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                event.targets2 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets.length) {
                                    player.storage.mori_shige += event.targets.shift().maxHp;
                                    player.markSkill('mori_shige');
                                    event.redo();
                                }
                            },
                            group: ['mori_shige_mark', 'mori_shige_marka'],
                            subSkill: {
                                marka: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.player.hasSkill('mori_zhiyin_mark')) return false;
                                        if (player != game.boss) return false;
                                        return player != event.player;
                                    },
                                    content() {
                                        var p = player.storage.mori_shige;
                                        var h = trigger.player.hp;
                                        var k = trigger.player.countCards('h');
                                        var m = trigger.player.maxHp;
                                        var i = game.players.length;
                                        if (h >= p / (i - 1) / 2 || k >= p / (i - 1) / 2) {
                                            trigger.targets.remove(player);
                                        }
                                    },
                                },
                                mark: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 0;
                                    },
                                    content() {
                                        'step 0';
                                        var p = player.storage.mori_shige;
                                        var h = trigger.player.hp;
                                        var k = trigger.player.countCards('h');
                                        var m = trigger.player.maxHp;
                                        var i = game.players.length;
                                        game.playvs(player.name + 'jn');
                                        if (h >= p / (i - 1) / 2) {
                                            if (m % 2 == 0) {
                                                trigger.player.damage(m / 2);
                                            } else {
                                                trigger.player.damage((m + 1) / 2);
                                            }
                                        }
                                        if (k >= p / (i - 1) / 2) {
                                            if (k % 2 == 0) {
                                                trigger.player.chooseToDiscard(k / 2, 'h', true);
                                            } else {
                                                trigger.player.chooseToDiscard((k + 1) / 2, 'h', true);
                                            }
                                        }
                                        player.storage.mori_shige = 0;
                                    },
                                    ai: {
                                        expose: 0.2,
                                        threaten: 1.2,
                                        result: {
                                            target(player, target, card) {
                                                if (get.attitude(player, trigger.player) >= 0) return 0;
                                                if (get.attitude(player, trigger.player) < 0) return -3;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        mori_zhiyin: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            silent: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('mori_zhiyin'), [1], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return get.attitude(_status.event.player, target);
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = [1, 2].randomGet();
                                        if (l == 1) game.playvs(player.name + 'jn1');
                                        if (l == 2) game.playvs(player.name + 'jn2');
                                        result.targets[i].addTempSkill('mori_zhiyin_mark', { player: 'phaseEnd' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: 1,
                                },
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    mark: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.targets && ['basic', 'trick'].includes(get.type(event.card)) && event.card.name != 'tiesuo' && event.player.hasSkill('mori_zhiyin');
                                    },
                                    content() {
                                        event.targets = trigger.targets.slice(0);
                                        player.useCard(
                                            {
                                                name: trigger.card.name,
                                                nature: trigger.card.nature,
                                                suit: trigger.card.suit,
                                            },
                                            false,
                                            event.targets,
                                            false
                                        );
                                    },
                                },
                            },
                        },
                        mori_zhanyi: {
                            forceDie: true,
                            enable: 'phaseUse',
                            complexCard: true,
                            limited: true,
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            selectCard: 2,
                            check(card) {
                                return 15 - get.value(card);
                            },
                            line: 'fire',
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 1 || length == 2 || length == 3;
                            },
                            selectTarget: [1, 3],
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                if (player != game.boss) {
                                    player.awakenSkill('mori_zhanyi');
                                    player.storage.mori_zhanyi = true;
                                }
                                event.num = 0;
                                game.playvs(player.name + 'jn2');
                                targets.sortBySeat();
                                ('step 1');
                                var n = player.maxHp - player.hp;
                                var l = [1, 2, n].randomGet();
                                if (event.num < targets.length) {
                                    targets[event.num].damage(l, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (player.hp <= player.maxHp / 2) return -3;
                                        if (player == game.boss) return -3;
                                        if (player.hp > player.maxHp / 2) return 0;
                                    },
                                },
                            },
                        },
                        mori_guangneng: {
                            trigger: {
                                global: ['phaseDiscardEnd', 'dying'],
                            },
                            audio: 'ext:末日浩劫/audio:2',
                            filter(event, player) {
                                return event.player.hp < event.player.maxHp && player.hp > 0;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) >= 0;
                            },
                            content() {
                                var l = [1, 2, 3, 4, 5].randomGet();
                                if (l == 1) game.playvs(player.name + 'jn');
                                if (l == 2) game.playvs(player.name + 'jn1');
                                player.loseHp();
                                trigger.player.recover();
                                player.draw(2);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                maixie: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= target.maxHp) return [0, 1];
                                        }
                                        if (get.tag(card, 'recover') && player.hp >= player.maxHp - 1 && player.maxHp > 1) return [0, 0];
                                    },
                                },
                                result: {
                                    player(player) {
                                        if (player.hp <= 1) return -1;
                                        if (player.hp > 1) return 2;
                                    },
                                },
                            },
                        },
                        mori_zhanzhenjinzhi: {
                            enable: 'phaseUse',
                            silent: true,
                            init(player) {
                                player.storage.mori_zhanzhenjinzhi = 0;
                                player.markSkill('mori_zhanzhenjinzhi');
                            },
                            filter(event, player) {
                                if (player.getStat().skill['mori_zhanzhenjinzhi'] >= player.hp) return false;
                                if (player.storage.mori_zhanzhenjinzhi > 4) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('mori_zhanzhenjinzhi_marka');
                            },
                            content() {
                                'step 0';
                                var l = [1, 2, 3].randomGet();
                                if (l == 1) game.playvs(player.name + 'jn');
                                if (l == 2) game.playvs(player.name + 'jn1');
                                if (l == 3) game.playvs(player.name + 'jn2');
                                target
                                    .chooseToDiscard('请弃置一张杀否则受到一点伤害', 'h', function (card) {
                                        return card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        return 12 - get.value(card);
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    target.damage();
                                    player.draw(Math.max(1, Math.floor(player.storage.mori_zhanzhenjinzhi)));
                                    player.storage.mori_zhanzhenjinzhi = 10;
                                } else {
                                    if (player.storage.mori_zhanzhenjinzhi < 4) {
                                        player.storage.mori_zhanzhenjinzhi += 1;
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                order: 10,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) <= 0) return -5;
                                    },
                                },
                            },
                            group: ['mori_zhanzhenjinzhi_mark', 'mori_zhanzhenjinzhi_markb'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.source == player && !event.player.hasSkill('mori_zhanzhenjinzhi_marka');
                                    },
                                    content() {
                                        trigger.player.addTempSkill('mori_zhanzhenjinzhi_marka', 'phaseEnd');
                                    },
                                },
                                marka: {
                                    charlotte: true,
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    popup: false,
                                    onremove(player) {
                                        for (var i of game.players) {
                                            if (i.name == 'mori_pojunzhanji') {
                                                i.storage.mori_zhanzhenjinzhi = 0;
                                            }
                                        }
                                    },
                                },
                                markb: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.mori_zhanzhenjinzhi == 10 && event.card && event.card.name == 'sha' && _status.currentPhase == player;
                                    },
                                    content() {
                                        if (player == game.boss) {
                                            var l = [1, 2, 3, 4].randomGet();
                                            if (l == 1) game.playvs(player.name + 'jn3');
                                            player.getStat().card.sha--;
                                            player.draw();
                                            player.say('清算已经来临了');
                                        } else {
                                            var l = [1, 2, 3, 4].randomGet();
                                            if (l == 1) game.playvs(player.name + 'jn3');
                                            player.getStat().card.sha--;
                                            player.say('清算已经来临了');
                                        }
                                    },
                                },
                            },
                        },
                        mori_xuhang: {
                            init(player) {
                                player.storage.mori_xuhang = 0;
                                player.markSkill('mori_xuhang');
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            fixed: true,
                            mark: true,
                            marktext: '战续',
                            filter(event, player) {
                                return player.storage.mori_xuhang > 0;
                            },
                            content() {
                                var x = player.storage.mori_xuhang;
                                var h = player.hp;
                                if (x >= h) {
                                    game.playvs(player.name + 'jn');
                                    player.draw(x);
                                    player.phaseUse();
                                    player.loseHp(x);
                                } else {
                                    game.playvs(player.name + 'jn1');
                                    player.loseHp(x);
                                    player.draw(x);
                                }
                                player.storage.mori_xuhang--;//QQQ
                                player.markSkill('mori_xuhang');
                            },
                            intro: {
                                content: 'mark',
                            },
                            group: ['mori_xuhang_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageBegin2',
                                    },
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        var l = [1, 2, 3, 4, 5, 6].randomGet();
                                        if (l == 1) game.playvs(player.name + 'jn1');
                                        player.hp = player.maxHp;
                                        player.storage.mori_xuhang += 1;
                                        player.markSkill('mori_xuhang');
                                        player.update();
                                    },
                                },
                            },
                        },
                        mori_zhanzjielv: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.mori_zhanzjielv_mark > player.maxHp * 2 || game.roundNumber >= player.hp * 2 || player.hp <= 1;
                            },
                            content() {
                                'step 0';
                                var l = [1, 2].randomGet();
                                if (l == 1) game.playvs(player.name + 'jn3');
                                if (l == 2) game.playvs(player.name + 'jn4');
                                event.num = player.hp;
                                ('step 1');
                                if (player == game.boss) {
                                    player
                                        .chooseTarget(get.prompt('mori_zhanzjielv'), [1, 3], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 0;
                                        });
                                } else {
                                    player
                                        .chooseTarget(get.prompt('mori_zhanzjielv'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 0;
                                        });
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.useCard({ name: 'sha', nature: 'thunder' }, result.targets[i], false);
                                    }
                                }
                                ('step 3');
                                event.num--;
                                if (event.num > 0) event.goto(1);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1,
                                order: 10,
                                unequip: true,
                                skillTagFilter(player) {
                                    return true;
                                },
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                            group: ['mori_zhanzjielv_mark'],
                            subSkill: {
                                mark: {
                                    init(player) {
                                        player.storage.mori_zhanzjielv_mark = 0;
                                        player.markSkill('mori_zhanzjielv_mark');
                                    },
                                    trigger: {
                                        player: ['damageBegin2', 'loseHpEnd'],
                                    },
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        player.storage.mori_zhanzjielv_mark += trigger.num;
                                    },
                                },
                            },
                        },
                        mori_shenmingxianzhi: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (player == game.boss) {
                                    player
                                        .chooseTarget(get.prompt('mori_shenmingxianzhi'), [1, 3], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 0;
                                        });
                                } else {
                                    player
                                        .chooseTarget(get.prompt('mori_shenmingxianzhi'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 0;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var l = [1, 2, 3].randomGet();
                                    if (l == 1) game.playvs(player.name + 'jn');
                                    if (l == 2) game.playvs(player.name + 'jn1');
                                    if (l == 3) game.playvs(player.name + 'jn2');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        if (player == game.boss) {
                                            result.targets[i].loseHp();
                                        }
                                        result.targets[i].addTempSkill('mori_shenmingxianzhi_mark', { player: 'phaseEnd' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 0.5,
                                order: 10,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                        source: 'damageBegin',
                                    },
                                    charlotte: true,
                                    mark: true,
                                    marktext: '限制',
                                    forced: true,
                                    silent: true,
                                    content() {
                                        trigger.num -= 1;
                                    },
                                    popup: false,
                                    intro: {
                                        content: '你的生命已经被限制',
                                    },
                                },
                            },
                        },
                        mori_yinguoqiege: {
                            init(player) {
                                player.storage.mori_yinguoqiege = 0;
                                player.markSkill('mori_yinguoqiege');
                            },
                            enable: 'phaseUse',
                            prompt: '弃置一张来杀发动因果切割',
                            filter(event, player) {
                                return player.countCards('h', { name: 'sha' }) > 0;
                            },
                            position: 'h',
                            filterCard: {
                                name: 'sha',
                            },
                            check(card) {
                                return 12 - get.value(card);
                            },
                            content() {
                                if (player == game.boss) {
                                    player.draw();
                                }
                                var l = [1, 2, 3].randomGet();
                                if (l == 1) game.playvs(player.name + 'jn');
                                player.storage.mori_yinguoqiege += 1;
                            },
                            ai: {
                                basic: {
                                    order: 3,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                            group: ['mori_yinguoqiege_mark'],
                            subSkill: {
                                mark: {
                                    silent: true,
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return event.player.countCards('h', { name: 'shan' }) < player.storage.mori_yinguoqiege;
                                    },
                                    content() {
                                        'step 0';
                                        var y = player.storage.mori_yinguoqiege;
                                        var h = trigger.player.countCards('h', { name: 'shan' });
                                        event.num = y - h;
                                        ('step 1');
                                        var next;
                                        next = player
                                            .chooseControl('因果切割', 'cancel2', function (event, player) {
                                                var source = _status.event.sourcex;
                                                var att = get.attitude(player, source);
                                                if (att >= 0 || trigger.player.hp <= 0) {
                                                    return 'cancel2';
                                                }
                                                return '因果切割';
                                            })
                                            .set('sourcex', trigger.player);
                                        next.set('prompt', get.prompt('mori_yinguoqiege', trigger.player));
                                        ('step 2');
                                        if (result.control == '因果切割') {
                                            var y = player.storage.mori_yinguoqiege;
                                            var h = trigger.player.countCards('h', { name: 'shan' });
                                            var l = [1, 2, 3].randomGet();
                                            if (l == 1) game.playvs(player.name + 'jn2');
                                            player.popup('因果切割');
                                            trigger.player.damage();
                                            player.draw();
                                            player.storage.mori_yinguoqiege -= 1;
                                        } else event.finish();
                                        ('step 3');
                                        event.num--;
                                        if (event.num > 0) event.goto(1);
                                    },
                                    ai: {
                                        expose: 0.2,
                                        threaten: 0.7,
                                    },
                                },
                            },
                        },
                        mori_yinguofanzhuan: {
                            trigger: {
                                player: 'dying',
                            },
                            silent: true,
                            forced: true,
                            content() {
                                'step 0';
                                if (player == game.boss) {
                                    player
                                        .chooseTarget(get.prompt('mori_yinguofanzhuan'), [1, 3], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else {
                                    player
                                        .chooseTarget(get.prompt('mori_yinguofanzhuan'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        player.hp = result.targets[i].hp;
                                        result.targets[i].loseHp(result.targets[i].hp);
                                        game.playvs(player.name + 'jn1');
                                        if (player == game.boss) {
                                            var l = [1, 2].randomGet();
                                            if (l == 1) {
                                                player.awakenSkill('mori_yinguofanzhuan');
                                                player.storage.mori_yinguofanzhuan = true;
                                                player.storage.mori_yinguoqiege += player.maxHp;
                                            } else {
                                                event.finish();
                                            }
                                        } else {
                                            player.awakenSkill('mori_yinguofanzhuan');
                                            player.storage.mori_yinguofanzhuan = true;
                                        }
                                        player.update();
                                        result.targets[i].update();
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 0.2,
                                result: {
                                    player(player) {
                                        return game.countPlayer(function (current) {
                                            if (current != player) {
                                                return get.sgn(get.damageEffect(current, player, player));
                                            }
                                        });
                                    },
                                    target: -3,
                                },
                            },
                        },
                        mori_bengta: {
                            trigger: {
                                global: 'roundStart',
                                player: ['dieBefore', 'damageBegin2', 'loseHpBefore', 'loseMaxHpBefore'],
                            },
                            fixed: true,
                            forced: true,
                            charlotte: true,
                            init(player) {
                                player.storage.mori_bengta = player.maxHp;
                                player.markSkill('mori_bengta');
                            },
                            filter(event, player) {
                                return lib.config.mori_bengta < player.storage.mori_bengta;
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                                player.hp = player.maxHp;
                                game.saveConfig('mori_bengta', lib.config.mori_bengta + 1);
                                player.storage.mori_momie += 1;
                                player.update();
                            },
                            group: ['mori_bengta_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    fixed: true,
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.num = lib.config.mori_bengta;
                                        ('step 1');
                                        var card = { name: 'sha' };
                                        trigger.player.useCard(card, trigger.player, false);
                                        if (!trigger.player.hasSkill('mori_bengta_debuff')) trigger.player.addTempSkill('mori_bengta_debuff', 'phaseBegin');
                                        ('step 2');
                                        event.num--;
                                        if (event.num > 0) event.goto(1);
                                        ('step 3');
                                        game.saveConfig('mori_bengta', lib.config.mori_bengta - 1);
                                        player.storage.mori_momie -= 1;
                                        player.update();
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player) {
                                            return true;
                                        },
                                    },
                                    popup: false,
                                },
                                debuff: {
                                    charlotte: true,
                                    mark: true,
                                    silent: true,
                                    init(player) {
                                        player.goMad('phaseBegin');
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player) {
                                            return true;
                                        },
                                    },
                                },
                            },
                        },
                        mori_momie: {
                            mark: true,
                            marktext: '崩塌',
                            init(player) {
                                game.saveConfig('mori_bengta', (lib.config.mori_bengta = 1));
                                player.storage.mori_momie = lib.config.mori_bengta;
                                player.markSkill('mori_momie');
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            selectTarget: [1, 99],
                            multitarget: true,
                            filter(event, player) {
                                return lib.config.mori_bengta > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                ('step 1');
                                var n = lib.config.mori_bengta;
                                if (event.num < targets.length) {
                                    targets[event.num].damage(n);
                                    player.storage.mori_momie -= 1;
                                    player.update();
                                    event.num++;
                                }
                                if (event.num == targets.length) event.goto(2);
                                else event.redo();
                                ('step 2');
                                game.saveConfig('mori_bengta', (lib.config.mori_bengta = player.storage.mori_momie));
                            },
                            intro: {
                                content: '虚界崩塌',
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                                order: 9,
                                nohujia: true,
                                skillTagFilter(player) {
                                    return true;
                                },
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        mori_poxiao: {
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                if (trigger.target.hasSkill('aili_banr')) {
                                    player.gainPlayerCard(trigger.target, 1, 'h', true);
                                } else trigger.target.chooseToDiscard(1, true, 'he');
                            },
                        },
                        mori_liming: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.hasSkill('aili_banr');
                            },
                            content() {
                                trigger.num++;
                            },
                            group: ['mori_liming_damage'],
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.card.suit == 'heart';
                                    },
                                    content() {
                                        player.draw();
                                    },
                                    popup: false,
                                },
                            },
                        },
                        mori_jiushizhuboss: {
                            init(player) {
                                player.storage.mori_jiushizhuboss = 0;
                                player.markSkill('mori_jiushizhuboss');
                            },
                            trigger: {
                                global: 'roundStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            filter(event, player) {
                                return get.mode() == 'boss' && game.me != game.boss && game.boss.name == 'ali_jiushizhu';
                            },
                            content() {
                                'step 0';
                                var list = ['wuuue_weiguangqis', 'wuyue_rongyqoqis', 'wuyue_poxieqis', 'wuyue_jianxiqis', 'wuyue_shoihuqs', 'mori_xingyueqis', 'wuyue_zhigaiqis', 'wuyue_yonghqis', 'wuyue_shenshengqiss', 'mori_gtzj', 'mori_zhuguangzhe', 'mori_shenling', 'mori_yinyingqis', 'mori_pomieqis', 'ali_jiushizhu'];
                                event.card = list.randomGets(1);
                                ('step 1');
                                game.boss
                                    .chooseButton(true)
                                    .set('ai', function (button) {
                                        return get.rank(button.link, true) - lib.character[button.link][2];
                                    })
                                    .set('createDialog', ['选择一张武将牌', [event.card, 'character']]);
                                ('step 2');
                                var link = result.links[0];
                                var list = [];
                                var skills = lib.character[link][3];
                                for (var i = 0; i < skills.length; i++) {
                                    var info = lib.skill[skills[i]];
                                    list.push(skills[i]);
                                }
                                game.boss.addSkill(list);
                                var l = [1, 2, 3].randomGet();
                                game.playvs(player.name + 'jn5');
                            },
                            forced: true,
                            popup: false,
                        },
                        mori_zhongyan: {},
                        mori_zhaowuquanneng: {},
                    },
                    translate: {
                        ali_jiushizhu: '救世主',
                        mori_npc1: '',
                        mori_npc2: '',
                        mori_npc3: '',
                        mor_ashenminjinjichang: '永恒竞技场',
                        wuyue_xunchas: '巡查使',
                        wuyue_morizz: '末日主宰',
                        wuyue_shoihuqs: '守护骑士',
                        wuyue_jianxiqis: '见习骑士',
                        wuyue_poxieqis: '破邪骑士',
                        wuyue_rongyqoqis: '荣耀骑士',
                        wuuue_weiguangqis: '微光骑士',
                        wuyue_zhigaiqis: '至高骑士',
                        wuyue_shenshengqiss: '神圣骑士',
                        wuyue_yonghqis: '永恒骑士',
                        wuyue_skgzr: '实验体',
                        wuyue_moxgzr: '改造人',
                        wuyue_moqhr: '魔化人',
                        wuyue_mohuazj: '魔化骑士',
                        wuyue_morishouwei: '守望者',
                        wuyue_zhanzkuil: '守卫者',
                        wuyue_zhuangjijial: '装甲暴龙',
                        wuyue_heiajqis: '黑暗骑士',
                        aili_morilail: '末日浩劫',
                        aili_mrsz: '末日使者',
                        mori_gtzj: '钢铁战姬',
                        mori_tkzj: '天空战姬',
                        aili_morihj: '众生裁决',
                        aili_heichao: '黑潮',
                        mor_guangminshenjiao: '光明教会',
                        mori_shenling: '除暴天使',
                        mori_xikadiya: '和平天使',
                        mori_alice: 'Alice',
                        mori_shenmingqis: `<b style='color: rgb(221, 17, 34);'>神明亲启</b>`,
                        wuyue_mohuazj2: '魔化骑士',
                        mori_guangminqis: '光明意志',
                        mori_xunhuuhze: '巡回者',
                        mori_shoujiezhe: '守界者',
                        mori_zhihuitians: '权能天使',
                        mori_guangmingshennv: '光明圣女',
                        mori_shenzhi: '圣子',
                        mori_hujiaoqishi: '护教骑士',
                        mori_xingyueqis: '新月骑士',
                        mori_fuchouzhe: '复仇者',
                        miri_zhaoxijushou: '潮汐巨兽',
                        miri_huimieshitu: '毁灭使徒',
                        miri_chiuuzhishou: '痴愚之獣',
                        ali_zhiyintians: '指引天使',
                        mori_yinyingqis: '阴影骑士',
                        mori_pomieqis: '破灭骑士',
                        mori_zhuguangzhe: '逐光者',
                        mori_zhixutianshi: '秩序天使',
                        mori_pojunzhanji: '破军战姬',
                        mori_minglitianshi: '命理天使',
                        mori_wenmingmiejue: '文明灭绝',
                        mori_mieshitianshi: '灭世天使',
                        mori_shenmingqis_jieshao: '击破条件',
                        mori_shenmingqis_jieshao_info: '伤害有来源,且来源体力上限小于50、手牌数小于50;爱丽丝手牌数小于50、体力上限大于3、体力值大于-10;游戏轮数大于10',
                        wuyue_jijiaz: '机甲',
                        wuyue_jijiaz_info: '锁定技,你使用【杀】对手牌小于你的角色造成的伤害+1;你与其他角色距离-1;你不能被翻面,你不能成为延时锦囊牌的目标',
                        wuyue_nengyuan: '能源',
                        wuyue_nengyuan_info: '锁定技,游戏开始时,你获得1枚<源>标记;锁定技,每当到你的回合你都会获得一枚"源"标记,获得3层护甲并摸三张牌',
                        wuyue_paoji: '波动炮',
                        wuyue_paoji_info: '出牌阶段,当你拥有超过5层能源时,你可以弃3层<能源>并选一位角色,对这名角色造成x点伤害,并增加y点护甲摸y张牌.(x等于现有体力值-4;y等于 9-现有体力值)',
                        wuyue_huifu: '修复',
                        wuyue_huifu_info: '出牌阶段限,你可以消耗护甲来修复伤势.(1点护甲修复一点伤势) ',
                        aili_gedang: '格挡',
                        aili_gedang_info: '每当你受到伤害后,有百分之25几率使伤害-1,百分之25几率摸一张牌',
                        aili_chongfeng: '冲锋',
                        aili_chongfeng_info: '你可以跳过判定阶段和摸牌阶段,视为对一名角色使用杀,若如此做,你摸一张牌',
                        aili_shanbi: '闪避',
                        aili_shanbi_info: '每当你受到伤害后,有百分之25几率使伤害无效,百分之25几率摸一张牌',
                        aili_touzhi: '投掷',
                        aili_touzhi_info: '你可以将一张装备牌当做【杀】使用或打出,每当你如此做,你都会摸一张牌',
                        aili_touziz: '投掷',
                        aili_touziz_info: '...',
                        aili_touzhix: '投掷',
                        aili_touzhix_info: '你可以将一张装备牌当做【杀】使用或打出,你如此使用的杀不计入出杀次数,若如此做你摸一张牌',
                        aili_zhujia: '铸盾',
                        aili_zhujia_info: '你的回合阶段阶段,你可以将一张装备牌转化成一层护甲,你摸一张牌',
                        aili_shouhu: '守护',
                        aili_shouhu_info: '出牌阶段限两次,你可以弃置一张手牌并令一名角色获得一层护甲.(如果目标的护甲值大于等于你的现有体力值,则无法对其使用.)',
                        aili_rongyao: '荣耀',
                        aili_rongyao_info: '每当你受到伤害时,如果你拥有护甲,则你让伤害来源弃置x张牌.(x等于目标即将造成的伤害)',
                        aili_guangren: '微光',
                        aili_guangren_info: '当你回复体力时,你可以指定至多两名其他角色各摸一张牌,若如此做,你自己也摸一张牌',
                        aili_guangbao: '光凝',
                        aili_guangbao_info: '当你受到伤害后,可以使用一次无视距离的杀,摸两张牌',
                        aili_zhigao: '至高',
                        aili_zhigao_info: '弃牌阶段结束时,你可以令一名其他角色弃置两张牌,你摸两张牌',
                        aili_dangfan: '档反',
                        aili_dangfan_info: '每当你受到伤害之前,有四分之一几率使伤害-1,四分之一几率对伤害来源造成一点伤害,四分之一几率摸一张牌.不管触发以上哪个特效(就算没触发特效),你都会对伤害来源进行蔑视',
                        aili_youren: '游刃',
                        aili_youren_info: '锁定技,若你的手牌数小于2,你将手牌补至2张,锁定技:你的手牌上限为1,你使用杀次数+2',
                        aili_kanpo: '看破',
                        aili_kanpo_info: '当你受伤害之前,有三分之一几率使伤害无效,三分之一几率摸x张牌,三分之一几率让伤害来源弃置x张牌.(x等于此次伤害+1)',
                        aili_guangrenz: '光刃',
                        aili_guangrenz_info: '你使用红色杀不能被【闪】响应,锁定技:你的攻击范围+2',
                        aili_zhuiji: '追击',
                        aili_zhuiji_info: '锁定技,每当你在出牌阶段使用杀造成伤害时,伤害+1,且本阶段内出杀次数上限+1',
                        aili_ansun: '暗瞬',
                        aili_ansun_info: '你所有的黑色手牌只能当闪打出或者使用',
                        aili_haoyueyuyinyshi: '萤火',
                        aili_haoyueyuyinyshi_info: '....',
                        aili_ansunz: '皓月',
                        aili_ansunz_info: '你所有的黑色手牌只能当闪打出或者使用,你的红色基本牌可以当火杀使用,你使用杀如果对目标造成了伤害,则出杀次数+1.每当你使用黑闪与红杀,你都可以摸一张牌',
                        aili_yingshiz: '萤石',
                        aili_yingshiz_info: '...',
                        aili_jixiehua: '机械',
                        aili_jixiehua_info: '锁定技,你使用【杀】对手牌小于你的角色造成伤害时,你摸一张牌;你与其他角色距离-1;你不能被翻面',
                        aili_banr: '魔化',
                        aili_banr_info: '锁定技:你使用杀能多选择一个目标,你手牌上限+3,你出杀次数+1,你摸牌数+1,你某些技能效果会发生变化',
                        aili_rimo: '入魔',
                        aili_rimo_info: "锁定技,游戏开始时,你获得<蚀>标记;锁定技,每当到你使用黑色手牌你都会获得两层'蚀'标记,失去一点生命值摸一张牌,当你的'蚀'大于17时,再次使用黑色手牌不会再增加'蚀'标记,摸牌数改为0(因为即将入魔的原因,其在战斗中会无法分清谁是敌谁是友.)",
                        aili_zhuguang: '逐光',
                        aili_zhuguang_info: "锁定技:每当你使用红色手牌时你失去一层'蚀',回复一点体力值,并摸一张牌",
                        aili_chenlun: '沉沦',
                        aili_chenlun_info: "(非boss时,此技能失效)锁定技:当你使用牌时,你的'蚀'标记大于等于17,你失去所有技能,将最大体力上限增至17,并将体力回复至17,获得技能魔化与残暴",
                        aili_canbao: '残暴',
                        aili_canbao_info: '锁定技:每当你对其他玩家造成伤害,你都可以让目标弃置x张牌,摸x张牌.(x为伤害数+1,且最高为5)',
                        aili_benneng: '本能',
                        aili_benneng_info: '每当你受到伤害后,有百分之25几率使伤害无效,百分之25几率摸x+2张牌,百分之25使伤害来源受到x+1点伤害,百分之25让伤害来源弃置x+2张牌.(x等于此次伤害,且最高为5)',
                        aili_jushou: '巨兽',
                        aili_jushou_info: '锁定技,你摸牌数等于x,你使用【杀】指定的目标数上限+1,使用次数+1,你无法被延时锦囊牌选为目标.[X等于你失去的体力值,且X最小等于2]',
                        aili_lichang: '立场',
                        aili_lichang_info: '场上其他玩家,使用牌时,需要弃置一张牌',
                        aili_zhendang: '震荡',
                        aili_zhendang_info: '游戏开始,你引起空间震荡,其他人回合结束时,你摸三张牌,并让对方失去一点生命值',
                        aili_liangzhizhuanh: '转换',
                        aili_liangzhizhuanh_info: '锁定技,摸牌阶段,你的摸牌基数改为X(X为你的护甲值,且至少为5),随后你增加5层护盾',
                        aili_chongneng: '充能',
                        aili_chongneng_info: '锁定技:游戏开始时,你获得10层护甲.你每使用一张手牌,你加一层护甲. 当你·护甲大于10时,你可以弃置5层护甲对一个目标造成两点伤害,你摸3张牌,每回合限9次',
                        aili_gaodengshenm: '超然',
                        aili_gaodengshenm_info: '拥有此技能的单位为超然生命;特性:受到伤害后摸三张牌.你造成伤害后摸一张牌;你的杀能额外选两个目标;你与其他角色距离-3;你不能被翻面,你不能被选为延时锦囊牌的目标,你受到的所有伤害全部改为1.(如果伤害/受伤时目标被分析过,某些效果会改变.)',
                        aili_fenxi: '分析',
                        aili_fenxi_info: '回合开始与回合结束时,你选择一个没有被分析过的目标对其进行分析,分析成功会给予目标"无"标记,分析失败会给予目标"有"标记;分析之后目标失去一点体力.(无标记代表无价值,有标记代表有价值)',
                        aili_jiazhipand: '裁决',
                        aili_jiazhipand_info: '被判定为无价值的目标回合结束时将受到你的裁决.(失去一点最大体力并弃置最大体力值数量的牌,你增加一点最大生命值)被判断有价值的目标回合结束后会受到你的一点伤害,随后你回复一点体力',
                        aili_lz: '量子',
                        aili_lz_info: '锁定技,摸牌阶段,你的摸牌基数改为X(X为你的体力值,且至少为2);你的手牌上限与你的最大体力值相同',
                        qili_xn: '吸能',
                        qili_xn_info: '锁定技,每当你造成伤害时,你获得一点护盾并摸一张牌',
                        aili_ms: '灭世',
                        aili_ms_info: '锁定技,游戏开始时,你获得1枚<灭>标记,;锁定技,每当你造成1点伤害后,你获得1枚<灭>标记',
                        aili_mr: '末日',
                        aili_mr_info: '出牌阶段,当你拥有超过8枚灭世标记时,你可以弃8枚<灭世>标记并选择所有其他角色,对这些角色各造成1点伤害,每阶段限三次',
                        aili_chouqu: '抽取',
                        aili_chouqu_info: '该单位能通过抽取星球能源来补充能量.锁定技,每当到你的回合你都会获得随机的["㴰"/护甲值],当你造成/受到伤害也会获得对应伤害数的"㴰"',
                        aioi_benyuan: '本源',
                        aioi_benyuan_info: '该单位拥有宇宙核心本源;锁定技:当自己即将死亡时,"㴰"的层数大于等于10,则你弃置10层"㴰"回复所有体力值',
                        aili_haojie: '浩劫',
                        aili_haojie_info: '出牌阶段,当你拥有超过8层"㴰"时,你可以弃8层<㴰>,对在场所有角色造成3点伤害,且你回复y点生命值.(y等于现有玩家数)(其中都没有包括你自己)',
                        mori_shenhuaa: '升华',
                        mori_shenhuaa_info: '锁定技:每当你经过三回合,下回合开始你可以选择至多3名目标,并对他们各造成Y点伤害.你不能成为延时锦囊牌的目标,你无法被翻面,你的手牌上限等于你的最大体力值,且你每回合回复一点体力,并摸Y张牌.当你死亡之前,如果你发动过此技能,则你将生命值回复至5点,并模5张牌,减少一次使用次数.(X等于你的体力值,Y等于使用此技能的次数+1)',
                        mori_shenlinga: '神临',
                        mori_shenlinga_info: '锁定技:你开局获得4层"临";每当你造成伤害后失去一层"临",摸一张牌.每当你掉血或者回血后你获得与之同等层数的"临".锁定技:弃牌阶段结束,你摸x张牌(x等于"临"的层数),且最低为1',
                        mori_chubao: '除暴',
                        mori_chubao_info: '以暴制暴!!!,当场上有人受到伤害,你可以选择使用一张杀,且此次杀无视距离.(前提是你手中必须有杀)',
                        mori_aishis: '爱世',
                        mori_aishis_info: '当场上有人受到伤害且伤害来源不是你,你可以摸两张牌,若如此做,你需要给予受伤的目标一张牌',
                        mori_shouxu: '守序',
                        mori_shouxu_info: '锁定技:游戏开始时你获得两枚"希",且如果你的身份是"内"或者"反",你将身份改为"忠";场上其他且不是主公的玩家陷入死亡时,如果你的"希"大于0且手牌大于等于3,你弃置三张牌与一枚"希",复活对方,并改变目标的最大体力上限为3',
                        mori_chencis: '层次',
                        mori_chencis_info: '每当一名角色对你造成伤害(任何引起你血量变少的操作)时,你可以弃置一张牌,让全场玩家(除了自己)各失去一点体力,随后让其对你造成的伤害无效,(当你是神明):此技能生效时,你摸两张牌,并且当你一次性失去超过2张牌时,你摸x张牌.(x=失去的牌/2+1),判定阶段开始,如果你判断区有牌,则你可以弃置一张牌,对全场玩家造成Y点伤害,弃置判定区所有牌.(Y等于判定区牌的数量)',
                        mori_chaokonga: '操控',
                        mori_chaokonga_info: '出牌阶段限一次,你可以选择一张手牌并指定两名角色进行拼点(其中一个可以是自己),拼点赢的角色摸两张牌且获得此牌,并对没赢的角色造成三点伤害',
                        mori_shenyia: '神意',
                        mori_shenyia_info: '1.当场上其他人进入濒死状态时,如果伤害来源是你,则你摸两张牌,如不是你则有四分之一几率让濒死玩家将体力回复至2,有四分之一几率令伤害来源摸两张牌,四分之一几率对伤害来源造成两点雷属性伤害,四分之一几率你自己摸两张牌.(当你是神明时生效)2.当你陷入濒死状态时,有二分之一几率回复至两点体力,有二分之一几率你摸伤害来源最大体力值*2的牌',
                        mori_shenminga: '神力',
                        mori_shenminga_info: '锁定技:每当你经过三回合,下回合开始你可以选择至多3名目标,并对他们各造成Y点圣神伤害.你不能成为延时锦囊牌的目标,你无法被翻面,你的手牌上限等于你的最大体力值,且你每回合回复一点体力,并摸Y张牌.当你死亡之前,如果你发动过此技能,则你将生命值回复至4点,并模4张牌,减少一次使用次数.(Y等于使用此技能的次数+4)',
                        mori_nishen2_info: 'undefined',
                        mori_nishen3_info: 'undefined',
                        mori_tiebizzz: '铁壁',
                        mori_tiebizzz_info: '当有装备牌进入你的装备区时,你获得一层护甲',
                        mori_shenkong: '升空',
                        mori_shenkong_info: '出牌阶段限两次,当你的"高"不超过你的最大体力时,你可以弃置一张手牌为自己加一层"高",锁定技,你的防御距离+x(x为你的"高"层数)',
                        mori_gaokongyazhi: '天降正义',
                        mori_gaokongyazhi_info: '摸牌结束阶段,当你的"高"等于4,你可以选择一个目标对其进行天降正义(效果:目标受到自身体力值的真实伤害),随后清零你的"高"',
                        mori_tieji: '贯穿之刺',
                        mori_tieji_info: '出牌阶段,你可以消耗一层护甲来使用一张无视距离的杀',
                        aili_fensa: '分身',
                        aili_fensa_info: '该单位只有末日主宰的一丝威能;锁定技:你的回合开始或者每当你使用牌,你都会将手牌补至与体力上限同等.且你无法被翻面,你不能成为延时锦囊牌的目标,你造成的伤害+1',
                        mori_bishi: '庇世',
                        mori_bishi_info: '当你受到伤害时,你有三分之一概率对伤害来源造成三点火属性伤害,三分之二概率让伤害来源弃置三张牌,如果是无来源的伤害时,你摸伤害数*3的牌;锁定技:当场上有人受到伤害后,你让其摸一张牌;锁定技:当你造成伤害后,有三分之二概率你回复一点体力,三分之一概率你摸三张牌;锁定技:当你使用/被指定的卡牌为♥️️时,你有3分之一几率回复一点体力,三分之二几率摸一张牌;(当你是神明时)场上其他武将死亡时,你增加3点最大体力值.锁定技:当你陷入死亡之时,如果你的最大体力上限大于4,则你减少4点最大体力上限,将体力值回复至4点,摸4张牌',
                        mori_tianqi: '天启',
                        mori_tianqi_info: '锁定技:回合开始时你获得13层[启],与0层[时],每当场上有人使用卡牌,你将增加1层[时],每当你受到/造成伤害时,你将增加X层[时]并减少X层[启],摸X张牌(X为伤害数);锁定技:你的手牌上限+Y(Y为[启]的层数).当场上有人使用卡牌且你的[时]大于等于[启],你可以随机摸0-2张牌与回复相同的体力,选择最多3名玩家对其造成1-3点随机伤害,你重置你的[时]并随机获得5-21层[启],且在其中你每命中一个玩家时,你会获得1层[时]',
                        mori_xunhui: '巡回',
                        mori_xunhui_info: '锁定技:游戏开始时你获得7层护甲,你每回合会增加一层[巡],每当你的回合开始时如果你拥有[巡]层数大于2,则你跳过你的回合,选择一个目标对其造成X点伤害回复X点体力;锁定技:你的回合结束时,如果你的[巡]层数小宇等于2,你可以摸X*3数量的牌,获得X*3点护甲,否则你增加1点最大体力上限.锁定技:当你受到伤害时,如果此伤害＞X,则此次伤害减少X点并且你获得一层[巡].(当你是神明时)你死亡之前,如果你的[巡]大于等于2,则你拒绝死亡减去2层[巡],将体力值回复至9点,摸9张牌.(X等于[巡]的层数)',
                        mori_bilei: '壁垒',
                        mori_bilei_info: '开局时或你的回合结束时,比可以选择最多3名目标令其增加一层护盾,你每选择一个目标,你增加一层护盾.当你受到有伤害来源的伤害之前,如果你的护盾大于0,你对伤害来源造成一点伤害,令其弃置两张牌,随后你摸两张牌',
                        mori_heijiang: '黑降',
                        mori_heijiang_info: '你的回合开始时你进行判定,如果点数大于等于6,则你令全场进入黑暗状态,陷入黑暗状态下的目标无法响应你使用的卡牌,且你对其造成的伤害+1',
                        mori_juejian: '闪刃',
                        mori_juejian_info: '每当你使用四张牌后,你可以选择一个目标对其造成一点伤害,每当你造成四点伤害后,你可以摸四张牌,每当你摸四张牌后,你回复一点体力.(当你受到伤害后,你的出牌次数,摸牌次数,造成伤害数+1)',
                        mori_qianfu: '潜伏',
                        mori_qianfu_info: '你的回合结束时,你可以进入潜伏状态,并获得5层[潜],你每受到一次伤害失去一层[潜],其他玩家回合结束后,如果你的[潜]大于0,则你回复一点体力摸两张牌,如果你的体力值为满,则多摸一张牌,你的回合开始时如果你的[潜]大于0,则你选择一个目标对其造成[潜]层数的伤害',
                        mori_qichao: '起潮',
                        mori_qichao_info: '你的回合阶段,你可以弃置4张黑色手牌为自己增加一层[潮],当你的[潮]大于等与2时,你使用潜伏获得层数+2,且你因潜伏所获得的牌数+1',
                        mori_yanmoshijie: '淹没世界',
                        mori_yanmoshijie_info: '你的回合开始且当你的潮大于0时,你对全场所有人造成X点伤害,你的摸牌数加X*2.(X等于[潮的层数])',
                        mori_quguang: '趋光',
                        mori_quguang_info: '每当场上其他玩家使用♥️️牌,你可以摸两张牌,每名玩家每回合限制一次',
                        mori_chuyi: '除异',
                        mori_chuyi_info: '回合阶段限一次,你可以选择一个目标,如果其拥有黑色手牌,你对其造成一点伤害随后你摸其拥有黑色手牌数量的牌',
                        mori_suiyin: '随影',
                        mori_suiyin_info: '每当你使用一张红色手牌,你可以获得一张黑色手牌,每当你使用一张黑色手牌,你可以选择一个目标使其获得一张红色手牌(不能选择自己)',
                        mori_guanganlunzhuan: '光暗轮转',
                        mori_guanganlunzhuan_info: '<span class="bluetext">光:回合开始时,你为全场人员回复一点体力,并使其获得一层「光」标记拥有「光」的目标对你造成伤害,会失去「光」对应层数的体力值,并移除「光」的所有层数.  <span class="legendtext"> 暗:回合开始时,你增加一层「暗」标记<span class="legendtext">你可以选择一个目标令其失去「暗」层数点体力值.当你的「暗」层数大于你的体力值时,你弃置所有手牌,并清空「暗」的层数</span>\'',
                        mori_shengyan: '圣言',
                        mori_shengyan_info: '回合阶段限一次,你可以执行以下操作:1.增加1点最大体力值 2.将手牌补至于最大体力值同等 3.回复体力值至满值',
                        mori_guanghuilaiwei: '光辉未来',
                        mori_guanghuilaiwei_info: '领域技:圣子每回合开始/结束获得一层「未」并回复一点体力值,对全场敌人造成1点伤害,当「未」层数到达17时,圣子将对一个目标进行即死,并清空「未」的层数.每当场上有人濒死时圣子获得其最大体力值数量层「未」,圣子摸牌数等于「未」的层数',
                        mori_diaolingzhihua: '凋零之花',
                        mori_diaolingzhihua_info: '领域技:此角色在场时,全场所有人的手牌上限皆为0;场上其他玩家每回合结束后圣子与其各失去一点体力值,随后圣子增加一点最大体力值并摸两张牌.当圣子最大血量值＞17时,神子将失去10点最大体力值,并对全场所有人随机造成总共17点伤害',
                        mori_Ruili: '锐利',
                        mori_Ruili_info: '',
                        mori_Yongheng: '永恒',
                        mori_Yongheng_info: '',
                        mori_Tianyou: '天佑',
                        mori_Tianyou_info: '',
                        mori_Shangdian: '命运',
                        mori_Shangdian_info: '',
                        mori_paicili: '抑制力',
                        mori_paicili_info: '你强行进入此方世界,被此方世界所排斥,无法长时间停留.游戏开始时,你的最大体力值*3,每轮开始时,你获得一层<命>并减少一点体力上限,你的摸牌数等于你的体力上限',
                        mori_huimieyizhi: '邪恶低语',
                        mori_huimieyizhi_info: '(当你是神明时生效)其他玩家回合开始时进行一次意志检定,当检定点数小于Y时,你使其摸三张牌并失去一点最大体力值,令其进入混乱状态,持续至回合结束.(Y等于目标玩家的体力值)',
                        mori_mingyunbodong: '命运拨动',
                        mori_mingyunbodong_info: '(当你是神明时生效)当你的回合开始时,如果你的体力值＜X,你可以拨动命运线.有10分之X概率进入新的命运线(跳回到出场阶段)(X等于<命>的层数)',
                        mori_xunjiao: '殉教',
                        mori_xunjiao_info: '限定技:限一次,使用后你获得损失生命值层数的【殉】并将最大体力上限改为12,回复满生命值与手牌,你每回合结束时减少一层【殉】,当【殉】小于1时,你将死亡.在拥有【殉】期间,你使用红色杀无次数上限,每使用一张红色手牌,你可以摸一张牌',
                        mori_huimieqixi: '毁灭气息',
                        mori_huimieqixi_info: '当你造成伤害后,你令其获得一层<毁>,当目标回合开始时,其需弃置X张牌,如果其牌不够,则改为受到你的X点伤害,随后你摸X张牌,其弃置所有<毁>的层数(X等于<毁>的层数)',
                        mori_fenshizhiyi: '焚世之意',
                        mori_fenshizhiyi_info: '当你造成伤害时,你获得一层<焚>,你的回合结束时,当你的<焚>小于等于5,你受到1点无来源的伤害,随后选择一个目标对其造成2点火焰伤害,大于5,你回复2点体力,并摸6张牌',
                        mori_yinyingjian: '影剑术',
                        mori_yinyingjian_info: '当你使用杀指定目标时/被杀指定为目标时,你可以弃置一张牌,令目标弃置一张与此牌相同类型的牌,否则你令此杀不可被响应,且伤害+1/此杀无效',
                        mori_shenyuanqixi: '深渊气息',
                        mori_shenyuanqixi_info: '回合开始时,你需要弃置一张红色手牌,否则你此回合无法使用牌,回合结束时,你受到一点无来源的伤害,并从牌堆中获得三张牌,其中必定有一张是黑色牌',
                        mori_jimiezhijian: '寂灭之剑',
                        mori_jimiezhijian_info: '当你濒死时,你可以选择一个目标,视为对其使用了一张无视距离的杀,如果此杀生效,你将体力回复至一点',
                        mori_dangmo: '灭渊',
                        mori_dangmo_info: '锁定技,你对非同势力角色造成的伤害+1,你的回合开始时,你可以选择对一名非同势力角色,视为对其使用一张无视距离的杀',
                        mori_shixin: '蚀心',
                        mori_shixin_info: '锁定技,你无法对其他角色使用桃,你受到伤害后,你可以选择一名角色令其流失一点体力',
                        mori_bumieyizhi: '不灭意志',
                        mori_bumieyizhi_info: '锁定技,你进入濒死状态时,如果你的最大体力值大于0,你可以减少一点最大体力值,摸四张牌获得一个额外的回合',
                        mori_zhiyin: '指引者',
                        mori_zhiyin_info: '回合开始,你选择一个目标,当你使用基本牌或者锦囊牌指定目标后,你选择的目标视为使用了相同的牌指定你选择的目标',
                        mori_shige: '平衡检定',
                        mori_shige_info: '当其他玩家回合结束时,你可以对其进行平衡检定,如果其体力值大于场上平均值,你对其造成其最大体力值一半的伤害(向上取整),如果其手牌大于场上平均值,你可以令其弃置一半手牌(向上取整),当你是神明时,自己被指定为卡牌目标时,如果对方手牌或者体力值大于场上平均值,则自身从卡牌目标中取消',
                        mori_zhanyi: '展翼',
                        mori_zhanyi_info: '限定技:限制一次,出牌阶段,你可以选择最多3名目标,弃置两张红色手牌,随机对他们造成1-X点伤害.(X等于自身失去的体力值)',
                        mori_guangneng: '光能',
                        mori_guangneng_info: '其他玩家弃牌阶段或者濒死时,若你的体力值大于0,且其体力值不为满,你可以扣减一点体力来为其回复一点体力值,随后你摸两张牌',
                        mori_xuhang: '战斗续行',
                        mori_xuhang_info: '当你受到伤害后,你可以将体力回满,并获得一层<续>,你的回合结束时,你失去X点体力值,并摸X张牌,减少一层<续>.因此效果一次性失去的体力值大于等于你的现有体力值时,你可以进行一个额外的回合.(X等于<续>的层数)',
                        mori_zhanzhenjinzhi: '战争禁止',
                        mori_zhanzhenjinzhi_info: '出牌阶段限制X次,你可以选择一个此轮你没有对其造成过伤害的目标令其弃置一张杀,否则你对其造成一点伤害,如果以此方法对目标造成伤害后,你摸此回合使用技能数的牌,此回合内无法使用此技能且使用杀无次数限制.(X等于你的体力值)',
                        mori_shenmingxianzhi: '生命限制',
                        mori_shenmingxianzhi_info: '回合结束阶段,你可以选择一个目标,使其在其回合结束前,摸牌数-1,造成伤害-1',
                        mori_zhanzjielv: '最终戒律',
                        mori_zhanzjielv_info: '解锁技:当满足以下条件时解锁;一:游戏轮数大于自己体力值*2,二:受到总计伤害超过自己最大体力值*2,三:体力值小于等于1.回合开始时,执行X次,你选择对一个目标使用一张雷杀(X等于自身现有体力值)',
                        mori_yinguoqiege: '因果切割',
                        mori_yinguoqiege_info: '出牌阶段,你可以弃置一张杀,若如此做,其他玩家回合开始时,若其手牌中闪的数量小于X,你可以选择对其造成一点伤害,并摸一张牌,持续N次,并令X的次数减N(X等于你弃置杀的次数,N等于X减去目标闪的数量)',
                        mori_yinguofanzhuan: '因果反转',
                        mori_yinguofanzhuan_info: '限定技,限一次,当你进入濒死状态时,你可以选择一个目标,将自身体力值与对方体力值互换',
                        mori_bengta: '自我抹灭',
                        mori_bengta_info: '每轮开始时/死亡时,如果X<你的体力值,你拒绝死亡,你令X+1并将体力值回复至满值,当你受到伤害时取消此次伤害改为将X+1,其他玩家回合结束时,你令其对自己使用X张无视防具的杀,并令X-1.(X等于<崩塌>的数量,如果X<1则视为1)',
                        mori_momie: '虚界崩塌',
                        mori_momie_info: '出牌阶段,当你拥有<崩塌>时,你可以选择所有其他角色,对这些角色各造成X点无视护甲的伤害,每对一位玩家造成伤害你都会减少一层<崩>,每阶段限一次',
                        mori_poxiao: '破晓',
                        mori_poxiao_info: '当你使用杀指定目标时,如果对方拥有<魔化>技能,则你可以获得目标一张牌,否则你弃置目标一张牌',
                        mori_liming: '黎明',
                        mori_liming_info: '你对拥有魔化的目标造成的伤害+1,你使用♥️️牌后可以摸一张牌',
                        mori_zhongyan: '终焉',
                        mori_zhongyan_info: '当自身受到伤害时/回合开始时/回合结束时,满足以下两个条件:1.自身血量＜2,2.场上其他玩家最大血量总和>自身最大体力值*3,3.游戏轮数=自身最大体力值的倍数,4.自身手牌数>自身体力值*3,5.自身最大体力值不等于4,6.场上拥有拟造物=2.你选择玩家,令其选择一项:1.令灭世天使获得自身所有技能 2.失去一个队友 3.自身所有技能失效',
                        mori_zhaowuquanneng: '造物权能',
                        mori_zhaowuquanneng_info: '回合结束时,如果场上拟造物<2,你可以创造一个拟造物出现在现场,并对其进行法则改写.否则你可以选择一个拟造物对其进行法则改写',
                        mori_fazhe1: '永固壁垒',
                        mori_fazhe1_info: '自身受到的伤害只能为1',
                        mori_fazhe2: '生物分解',
                        mori_fazhe2_info: '造成的所有伤害改为令其流失同等最大体力值(灭世天使除外)',
                        mori_fazhe3: '叹息坚壁',
                        mori_fazhe3_info: '对灭世天使造成的伤害全部改由自身承受',
                        mori_fazhe4: '破灭之兆',
                        mori_fazhe4_info: '每轮对全场(除了灭世天使)玩家造成当前体力值一半的伤害',
                        mori_fazhe5: '绝杀绝死',
                        mori_fazhe5_info: '全场人回复生命改为失去同等体力值(灭世天使除外)',
                        mori_fazhe6: '死亡判决',
                        mori_fazhe6_info: '回合开始选择一个目标对其进行死亡判决,在下回合开始之前,如果目标没有对自身造成3次伤害,则你令其死亡',
                        mori_fazhe7: '重力场域',
                        mori_fazhe7_info: '场上其他玩家摸牌数全部为一(灭世天使除外)',
                        mori_fazhe8: '空间隔离',
                        mori_fazhe8_info: '自身防御距离+∞',
                        mori_fazhe9: '时间回溯',
                        mori_fazhe9_info: '回合开始时记录自身状态,下回合开始时回归原样',
                        mori_fazhe10: '灭世程序',
                        mori_fazhe10_info: '自身死亡时,将重启世界(游戏结束)',
                    },
                };
                lib.config.all.characters.add('末日浩劫');
                lib.config.characters.add('末日浩劫');
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].add(`ext:末日浩劫/image/${i}.jpg`);
                    info[4].push(`die:ext:末日浩劫/audio/${i}.mp3`);
                }
                lib.translate['末日浩劫_character_config'] = `末日浩劫`;
                return QQQ;
            });
        },
        config: {
            死亡移除: {
                name: '<span class="Qmenu">死亡移除</span>',
                intro: '死亡后移出游戏',
                init: true,
                onclick(result) {
                    game.saveConfig('dieremove', result);
                },
            },
            shuxing: {
                name: '扩展介绍',
                init: '1',
                item: {
                    1: '查看',
                    2: '[命运值]:击败末日浩劫的boss后掉落,命运值可以到<灭世天使>处进行兑换.(灭世天使所在处为:挑战模式——灭世天使——选择挑战武将——点击确定,如果选择应战的话就无法购买了哦,别害怕,此boss并不会伤害你的,至少现在不会.)',
                    3: '[真实值]:在真实值大于等于10时,击败boss有小几率掉落,也可以到灭世天使处进行兑换,1000点命运值可以兑换1点(当然在痴愚之獣那里你可以卖掉多余的真实值),当某些事发生时,真实值不够,便无法进入真实',
                    4: '[强命值]:强命值越高,玩家挑战末日浩劫boss时的生命值便越高,可以到灭世天使处进行兑换,500点命运值可以兑换1点',
                    5: '[天运值]:天运值越高,玩家摸牌时,摸牌数便越多,可以到灭世天使处进行兑换,300点命运值可以兑换1点',
                    6: '[守护值]:守护值越高,玩家开局时获得的护甲便越高,可以到灭世天使处进行兑换,200点命运值可以兑换1点',
                    7: '[锐利值]:锐利值越高,玩家造成伤害时造成的额外伤害便越高(如比1-10点时,额外造成1点伤害的几率为 锐利值/10,10-20点时额外造成2点伤害几率为 锐利值/20,否则造成一点额外伤害),可以到灭世天使处进行兑换,500点命运值可以兑换1点',
                    8: '竞技场:永恒竞技场玩法为爬塔模式,现版本最高层数为40层,通过每层都会获得一个随机的技能进行选择或者是最大体力值奖励.技能:初始最大技能携带数为2,每通过5层,技能最大携带数+1.成功通关后会获得大量命运值奖励',
                    9: '游戏内容:本扩展大部分内容都主要为boss挑战,出现在身份场的武将皆不等于挑战boss时的强度,是为削弱版',
                    10: '关卡:当前挑战数量为4,每个挑战都有4-5关卡,并分别会有不同的boss,根据真实值的不同,会遇到不同的boss与关卡',
                    11: '兑换系统说明,当前版本命运值兑换暂时只能兑换以上四钟属性,兑换位置为灭世天使处, 灭世天使为未来版本的boss,现阶段还无法进行挑战.可别浪费时间去想着击败她哦.                                 ',
                    12: ' 成就系统说明,当前版本已经加入了成就系统,使用特定的武将组合挑战boss,或者单纯的击败某些boss,完成某些结局,都可以完成成就,成就只能完成一次,完成成就后,都可以获得对应的点数,比如最简单的隐藏成就:<初见末日>就是在玩家强命值为0时击败末日浩劫第一关的boss就可以获得了哦,此成就奖励为1点强命值,建议在强命值为0时去挑战哦,否则就会永久错过了(除非你清除数据,灭世天使那里选择逃避--可以清除所有数据, ❛˓◞˂̵✧ 诶嘿~)',
                    13: '成就预览里面并不是显示你获得的成就,而是显示本游戏现有的所有成就',
                },
            },
        },
        package: {
            intro: '<img src=extension/末日浩劫/image/yinghe.jpg width="240" height="121"><br>&nbsp;&nbsp;<font color="#FF3030">[末日浩劫]<br>此版本增加了命运点系统与成就系统,击败boss可以获得命运点,以及使用特别的组合击败boss来完成成就,命运点可以用来购买,详情可以点击下方查看来浏览具体信息.如果有bug或者什么好的建议,可以到末日浩劫交流群找我,末日浩劫交流群  :480446472    ps:感谢向纷纷的友情配音(毁灭使徒) <br><br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br><br></span>',
            author: '<br>&nbsp;&nbsp;<font color="#FFA500">无夜月<br>',
            version: '1.0',
        },
    };
});

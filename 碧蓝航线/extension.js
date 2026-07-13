import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '碧蓝航线',
        content(config, pack) {
            if (lib.config.wuyuefuli == undefined) game.saveConfig('wuyuefuli', 0);
            if (lib.config.wuyueExp == undefined) game.saveConfig('wuyueExp', 0);
            if (lib.config.wuyuedj == undefined) game.saveConfig('wuyuedj', 0);
            if (lib.config.wuyue_lafei == undefined) game.saveConfig('wuyue_lafei', 1);
            if (lib.config.wuyue_biaoqiang == undefined) game.saveConfig('wuyue_biaoqiang', 1);
            if (lib.config.wuyue_z23 == undefined) game.saveConfig('wuyue_z23', 1);
            if (lib.config.wuyue_lingno == undefined) game.saveConfig('wuyue_lingbo', 1);
            if (lib.config.wuyue_yingrui == undefined) game.saveConfig('wuyue_yingrui', 0);
            if (lib.config.wuyue_edu == undefined) game.saveConfig('wuyue_edu', 0);
            if (lib.config.wuyue_huashengdun == undefined) game.saveConfig('wuyue_huashengdun', 0);
            if (lib.config.wuyue_heianjie == undefined) game.saveConfig('wuyue_heianjie', 0);
            if (lib.config.wuyue_changmeng == undefined) game.saveConfig('wuyue_changmeng', 0);
            if (lib.config.wuyue_luoen == undefined) game.saveConfig('wuyue_luoen', 0);
            if (lib.config.wuyue_chaijun == undefined) game.saveConfig('wuyue_chaijun', 0);
            if (lib.config.wuyue_ftldadi == undefined) game.saveConfig('wuyue_ftldadi', 0);
            if (lib.config.wuyue_blackfangzhou == undefined) game.saveConfig('wuyue_blackfangzhou', 0);
            if (lib.config.wuyue_zhenhai == undefined) game.saveConfig('wuyue_zhenhai', 0);
            if (lib.config.wuyue_bingjiang == undefined) game.saveConfig('wuyue_bingjiang', 0);
            if (lib.config.wuyue_kongbu == undefined) game.saveConfig('wuyue_kongbu', 0);
            if (lib.config.wuyue_ruyue == undefined) game.saveConfig('wuyue_ruyue', 0);
            if (lib.config.wuyue_muyue == undefined) game.saveConfig('wuyue_muyue', 0);
            if (lib.config.wuyue_xiaotiane == undefined) game.saveConfig('wuyue_xiaotiane', 0);
            if (lib.config.wuyue_fulaiche == undefined) game.saveConfig('wuyue_fulaiche', 0);
            if (lib.config.wuyue_xinyue == undefined) game.saveConfig('wuyue_xinyue', 0);
            if (lib.config.wuyue_aolike == undefined) game.saveConfig('wuyue_aolike', 0);
            if (lib.config.wuyue_fute == undefined) game.saveConfig('wuyue_fute', 0);
            if (lib.config.wuyue_z20 == undefined) game.saveConfig('wuyue_z20', 0);
            if (lib.config.wuyue_z21 == undefined) game.saveConfig('wuyue_z21', 0);
            if (lib.config.wuyue_dafeng == undefined) game.saveConfig('wuyue_dafeng', 0);
            if (lib.config.wuyue_shengnvzhende == undefined) game.saveConfig('wuyue_shengnvzhende', 0);
            if (lib.config.wuyue_afuleer == undefined) game.saveConfig('wuyue_afuleer', 0);
            lib.translate.yuleiji = '雷击';
            game.addNature('yuleiji', '雷击', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            lib.translate.wuyuepaoji = '炮击';
            game.addNature('wuyuepaoji', '炮击', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            lib.translate.wuyuehangkong = '航空';
            game.addNature('wuyuehangkong', '航空', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            lib.translate.wuyuewushu = '无';
            game.addNature('wuyuewushu', '无', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            lib.group.push('wuyue_donghuang');
            lib.translate.wuyue_donghuang = '煌';
            var tenUi = document.createElement('style');
            tenUi.innerHTML = ".player>.camp-zone[data-camp='wuyue_donghuang']>.camp-back {background: linear-gradient(to bottom, rgb(255,100,100), rgb(255,100,100));}";
            tenUi.innerHTML += ".player>.camp-zone[data-camp='wuyue_donghuang']>.camp-name {text-shadow: 0 0 5px rgb(255,100,100), 0 0 10px rgb(255,100,100), 0 0 15px rgb(255,100,100);}";
            document.head.appendChild(tenUi);
            lib.rank.rarity.junk.addArray(['wuyue_ruyue', 'wuyue_muyue', 'wuyue_xinyue', 'wuyue_aolike', 'wuyue_fute', 'wuyue_z20', 'wuyue_z21']);
            lib.rank.rarity.rare.addArray(['wuyue_lafei', 'wuyue_biaoqiang', 'wuyue_z23', 'wuyue_lingbo', 'wuyue_yingrui', 'wuyue_heianjie', 'wuyue_zhenhai', 'wuyue_kongbu']);
            lib.rank.rarity.epic.addArray(['wuyue_edu', 'wuyue_huashengdun', 'wuyue_changmeng', 'wuyue_luoen', 'wuyue_chaijun', 'wuyue_bingjiang', 'wuyue_blackfangzhou', 'wuyue_shengnvzhende', 'wuyue_afuleer']);
            lib.rank.rarity.legend.addArray(['wuyue_ftldadi', 'wuyue_xiaotiane', 'wuyue_dafeng']);
            game.Blhxts = function (str) {
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
                    clientX: (this.offsetLeft + this.offsetWidth / 4) * game.documentZoom,
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
            game.Blhxts1 = function (str) {
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
                    clientX: (this.offsetLeft + this.offsetWidth / 4) * game.documentZoom,
                    clientY: (this.offsetTop + this.offsetHeight / 8) * game.documentZoom,
                });
                if (dialog._mod_height) {
                    dialog.content.firstChild.style.padding = 0;
                }
                dialog.style.left = 'calc(45%)';
                dialog.style.top = 'calc(5%)';
                setTimeout(function () {
                    dialog.delete();
                }, 1000);
            };
            game.Blanbf = function (fn, dir, sex) {
                if (lib.config.background_speak) {
                    if (dir && sex) game.playAudio(dir, sex, fn);
                    else if (dir) game.playAudio(dir, fn);
                    else game.playAudio('../extension/碧蓝航线/audio', fn);
                }
            };
            lib.skill._Bilan_xlgj = {
                trigger: {
                    player: 'damageAfter',
                },
                fixed: true,
                forced: true,
                silent: true,
                charlotte: true,
                forceDie: true,
                _priority: 2022,
                filter(event, player) {
                    return (event.player.hasSkill('wuyue_jianniangdengji') || event.player.hasSkill('wuyue_jianniangdengjihm')) && event.player.hp <= event.player.maxHp / 2 && event.player.hp >= event.player.maxHp / 10;
                },
                content() {
                    var num = [1, 2, 3].randomGet();
                    if (num == 1) game.Blanbf(trigger.player.name + 'xlgj');
                    if (num >= 2) event.finish();
                },
            };
            lib.skill._Jiannian_Exp = {
                trigger: {
                    player: 'dieBegin',
                },
                fixed: true,
                forced: true,
                silent: true,
                charlotte: true,
                forceDie: true,
                _priority: 2022,
                filter(event, player) {
                    return event.source && event.source != game.boss && (event.source.hasSkill('wuyue_jianniangdengji') || event.source.hasSkill('wuyue_jianniangdengjihm'));
                },
                content() {
                    'step 0';
                    if (player == game.boss) {
                        if (player.hasSkill('wuyue_jianniangdengji') || (player.hasSkill('wuyue_jianniangdengjihm') && player.hasSkill('wuyue_jianniangBoss'))) {
                            if (game.me.hasSkill('wuyue_jianniangdengji') || game.me.hasSkill('wuyue_jianniangdengjihm')) {
                                var dj = lib.config.wuyuedj;
                                if (dj == 10) {
                                    game.saveConfig('wuyueExp', lib.config.wuyueExp + dj * 80);
                                    game.Blhxts('击败简单boss舰娘,获得经验值:' + dj * 80);
                                    player.storage.wuyue_jianniangExp += dj * 80;
                                    player.markSkill('wuyue_jianniangExp');
                                    game.Blanbf(trigger.source.name + 'ptgj');
                                }
                                if (dj == 30) {
                                    game.saveConfig('wuyueExp', lib.config.wuyueExp + dj * 40);
                                    game.Blhxts('击败普通boss舰娘,获得经验值:' + dj * 40);
                                    player.storage.wuyue_jianniangExp += dj * 40;
                                    player.markSkill('wuyue_jianniangExp');
                                    game.Blanbf(trigger.source.name + 'ptgj');
                                }
                                if (dj == 70) {
                                    if (game.boss.name == 'wuyue_blackfangzhou') {
                                        if (lib.config.wuyue_blackfangzhou < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    if (game.boss.name == 'wuyue_xiaotiane') {
                                        if (lib.config.wuyue_xiaotiane < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    if (game.boss.name == 'wuyue_dafeng') {
                                        if (lib.config.wuyue_dafeng < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    game.saveConfig('wuyueExp', lib.config.wuyueExp + dj * 22);
                                    game.Blhxts('击败困难boss舰娘,获得经验值:' + dj * 22);
                                    player.storage.wuyue_jianniangExp += dj * 22;
                                    player.markSkill('wuyue_jianniangExp');
                                    game.Blanbf(trigger.source.name + 'ptgj');
                                }
                                if (dj == 120) {
                                    if (game.boss.name == 'wuyue_blackfangzhou') {
                                        if (lib.config.wuyue_blackfangzhou < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    if (game.boss.name == 'wuyue_xiaotiane') {
                                        if (lib.config.wuyue_xiaotiane < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    if (game.boss.name == 'wuyue_dafeng') {
                                        if (lib.config.wuyue_dafeng < 1) {
                                            event.goto(2);
                                        }
                                    }
                                    game.saveConfig('wuyueExp', lib.config.wuyueExp + dj * 25);
                                    game.Blhxts('击败噩梦boss舰娘,获得经验值:' + dj * 25);
                                    player.storage.wuyue_jianniangExp += dj * 25;
                                    player.markSkill('wuyue_jianniangExp');
                                    game.Blanbf(trigger.source.name + 'ptgj');
                                }
                            } else game.Blhxts('爬!');
                        } else {
                            game.saveConfig('wuyueExp', lib.config.wuyueExp + 5 * 100);
                            game.Blhxts('击败boss,获得经验值:' + 5 * 100);
                            player.storage.wuyue_jianniangExp += 5 * 100;
                            player.markSkill('wuyue_jianniangExp');
                            game.Blanbf(trigger.source.name + 'ptgj');
                        }
                    } else {
                        if (trigger.source == game.me) {
                            if (player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm')) {
                                game.saveConfig('wuyueExp', lib.config.wuyueExp + 2 * 100);
                                game.Blhxts('击败舰娘,获得经验值:' + 2 * 100);
                                player.storage.wuyue_jianniangExp += 2 * 100;
                                player.markSkill('wuyue_jianniangExp');
                                game.Blanbf(trigger.source.name + 'ptgj');
                            } else {
                                game.saveConfig('wuyueExp', lib.config.wuyueExp + 5 * 20);
                                game.Blhxts('击败目标,获得经验值:' + 5 * 20);
                                player.storage.wuyue_jianniangExp += 5 * 20;
                                player.markSkill('wuyue_jianniangExp');
                                game.Blanbf(trigger.source.name + 'ptgj');
                            }
                        } else game.Blanbf(trigger.source.name + 'ptgj');
                    }
                    ('step 1');
                    event.finish();
                    ('step 2');
                    var list = [];
                    list.push(game.boss.name);
                    event.card = list.randomGets(1);
                    ('step 3');
                    if (event.card.length) {
                        game.me
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['恭喜你获得了舰娘,点击舰娘进行领取', [event.card, 'character']]);
                    }
                    ('step 4');
                    if (result.links?.length) {
                        if (result.links[0] == 'wuyue_blackfangzhou') game.saveConfig('wuyue_blackfangzhou', lib.config.wuyue_blackfangzhou + 1);
                        if (result.links[0] == 'wuyue_xiaotiane') game.saveConfig('wuyue_xiaotiane', lib.config.wuyue_xiaotiane + 1);
                        if (result.links[0] == 'wuyue_dafeng') game.saveConfig('wuyue_dafeng', lib.config.wuyue_dafeng + 1);
                    }
                },
            };
            lib.skill._Bilan_siwang = {
                trigger: {
                    player: 'dieBegin',
                },
                fixed: true,
                forced: true,
                silent: true,
                charlotte: true,
                forceDie: true,
                _priority: 2022,
                filter(event, player) {
                    return event.player.hasSkill('wuyue_jianniangdengji') || event.player.hasSkill('wuyue_jianniangdengjihm');
                },
                content() {
                    game.Blanbf(trigger.player.name);
                },
            };
            lib.skill._shuxinzhi_boss = {
                trigger: {
                    player: 'phaseBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                _priority: 2022,
                filter(event, player) {
                    return event.player.hasSkill('wuyue_jianniangBoss') && event.player.storage.wuyue_jianniangBoss < 1;
                },
                content() {
                    var dj = lib.config.wuyuedj;
                    trigger.player.maxHp = trigger.player.maxHp + dj * 250;
                    trigger.player.hp = trigger.player.maxHp;
                    trigger.player.storage.wuyue_jianniangBoss = 1;
                    trigger.player.storage.wuyue_fangkongzhi += dj * 1.5;
                    trigger.player.storage.wuyue_xingyunzhi += dj * 0.15;
                    trigger.player.storage.wuyue_paojizhi += dj * 4;
                    trigger.player.storage.wuyue_leijizhi += dj * 4;
                    trigger.player.storage.wuyue_jidongzhi += dj * 0.25;
                    trigger.player.storage.wuyue_tianzhuangzhi += dj * 1.5;
                    trigger.player.storage.wuyue_hangkongzhi += dj * 3;
                },
            };
            lib.skill._Paojizhi_player = {
                trigger: {
                    global: ['gameStart', 'phaseBefore'],
                    player: 'enterGame',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                _priority: 2022,
                content() {
                    ////东煌
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_yingrui' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_yingrui;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 2;
                            game.players[i].storage.wuyue_fangkongzhi = 242 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 20;
                            game.players[i].storage.wuyue_paojizhi = 127 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 198 + n;
                            game.players[i].storage.wuyue_jidongzhi = 100 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 131 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_zhenhai' && !game.players[i].hasSkill('wuyue_jianniangdengjihm')) {
                            var n = lib.config.wuyue_zhenhai;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_hangkongzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengjihm');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 6;
                            game.players[i].storage.wuyue_xingyunzhi = 45;
                            game.players[i].storage.wuyue_hangkongzhi = 303 + n * 2;
                            game.players[i].storage.wuyue_fangkongzhi = 165 + n;
                            game.players[i].storage.wuyue_paojizhi = 122 + n;
                            game.players[i].storage.wuyue_jidongzhi = 53;
                            game.players[i].storage.wuyue_tianzhuangzhi = 135 + n;
                            game.players[i].storage.wuyue_jianniangdengjihm = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_bingjiang' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_bingjiang;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 3;
                            game.players[i].storage.wuyue_fangkongzhi = 325 + n * 2;
                            game.players[i].storage.wuyue_xingyunzhi = 10;
                            game.players[i].storage.wuyue_paojizhi = 155 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 285 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 155 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 142 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    ///皇家
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_biaoqiang' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var b = lib.config.wuyue_biaoqiang;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 171 + b;
                            game.players[i].storage.wuyue_xingyunzhi = 65;
                            game.players[i].storage.wuyue_paojizhi = 65 + b * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 245 + b * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 265 + b;
                            game.players[i].storage.wuyue_tianzhuangzhi = 100 + b;
                            game.players[i].storage.wuyue_jianniangdengji = b;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_xiaotiane' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_xiaotiane;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 168 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 72;
                            game.players[i].storage.wuyue_paojizhi = 109 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 354 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 275 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 193 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_xinyue' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_xinyue;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 125 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 35;
                            game.players[i].storage.wuyue_paojizhi = 95 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 225 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 225 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 130 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_chaijun' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_chaijun;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 3;
                            game.players[i].storage.wuyue_fangkongzhi = 365 + n * 2.2;
                            game.players[i].storage.wuyue_xingyunzhi = 10;
                            game.players[i].storage.wuyue_paojizhi = 185 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 135 + n;
                            game.players[i].storage.wuyue_jidongzhi = 60 + n * 0.5;
                            game.players[i].storage.wuyue_tianzhuangzhi = 72 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    ///铁血
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_ftldadi' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_ftldadi;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 5;
                            game.players[i].storage.wuyue_fangkongzhi = 295 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 10;
                            game.players[i].storage.wuyue_paojizhi = 345 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 28;
                            game.players[i].storage.wuyue_tianzhuangzhi = 82 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_luoen' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_luoen;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 3;
                            game.players[i].storage.wuyue_fangkongzhi = 245 + n * 2;
                            game.players[i].storage.wuyue_xingyunzhi = 10;
                            game.players[i].storage.wuyue_paojizhi = 192 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 59 + n * 0.5;
                            game.players[i].storage.wuyue_tianzhuangzhi = 116 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_z23' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var z = lib.config.wuyue_z23;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 205 + z;
                            game.players[i].storage.wuyue_xingyunzhi = 65;
                            game.players[i].storage.wuyue_paojizhi = 135 + z * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 180 + z * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 175 + z;
                            game.players[i].storage.wuyue_tianzhuangzhi = 80 + z;
                            game.players[i].storage.wuyue_jianniangdengji = z;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_z20' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var z = lib.config.wuyue_z20;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 145 + z;
                            game.players[i].storage.wuyue_xingyunzhi = 71;
                            game.players[i].storage.wuyue_paojizhi = 60 + z * 1;
                            game.players[i].storage.wuyue_leijizhi = 290 + z * 2;
                            game.players[i].storage.wuyue_jidongzhi = 190 + z;
                            game.players[i].storage.wuyue_tianzhuangzhi = 105 + z;
                            game.players[i].storage.wuyue_jianniangdengji = z;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_z21' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var z = lib.config.wuyue_z21;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 145 + z;
                            game.players[i].storage.wuyue_xingyunzhi = 65;
                            game.players[i].storage.wuyue_paojizhi = 65 + z * 1;
                            game.players[i].storage.wuyue_leijizhi = 280 + z * 2;
                            game.players[i].storage.wuyue_jidongzhi = 185 + z;
                            game.players[i].storage.wuyue_tianzhuangzhi = 102 + z;
                            game.players[i].storage.wuyue_jianniangdengji = z;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    ///重樱
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_dafeng' && !game.players[i].hasSkill('wuyue_jianniangdengjihm')) {
                            var n = lib.config.wuyue_dafeng;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_hangkongzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengjihm');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 7;
                            game.players[i].storage.wuyue_xingyunzhi = 36;
                            game.players[i].storage.wuyue_hangkongzhi = 345 + n * 2;
                            game.players[i].storage.wuyue_fangkongzhi = 255 + n;
                            game.players[i].storage.wuyue_jidongzhi = 55;
                            game.players[i].storage.wuyue_tianzhuangzhi = 85 + n;
                            game.players[i].storage.wuyue_jianniangdengjihm = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_changmeng' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_changmeng;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 5;
                            game.players[i].storage.wuyue_fangkongzhi = 265 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 71;
                            game.players[i].storage.wuyue_paojizhi = 275 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 38;
                            game.players[i].storage.wuyue_tianzhuangzhi = 69 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_lingbo' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_lingbo;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 163 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 36;
                            game.players[i].storage.wuyue_paojizhi = 35 + n;
                            game.players[i].storage.wuyue_leijizhi = 375 + n * 2;
                            game.players[i].storage.wuyue_jidongzhi = 190 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 90 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_ruyue' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_ruyue;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 101 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 15;
                            game.players[i].storage.wuyue_paojizhi = 56 + n;
                            game.players[i].storage.wuyue_leijizhi = 297 + n * 2;
                            game.players[i].storage.wuyue_jidongzhi = 200 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 191 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_muyue' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_muyue;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 145 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 35;
                            game.players[i].storage.wuyue_paojizhi = 57 + n;
                            game.players[i].storage.wuyue_leijizhi = 305 + n * 2;
                            game.players[i].storage.wuyue_jidongzhi = 190 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 191 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    ///白鹰
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_huashengdun' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_huashengdun;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 5;
                            game.players[i].storage.wuyue_fangkongzhi = 409 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 89;
                            game.players[i].storage.wuyue_paojizhi = 305 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 34;
                            game.players[i].storage.wuyue_tianzhuangzhi = 55 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_heianjie' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_heianjie;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 3;
                            game.players[i].storage.wuyue_fangkongzhi = 205 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 91;
                            game.players[i].storage.wuyue_paojizhi = 235 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 91;
                            game.players[i].storage.wuyue_tianzhuangzhi = 101 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_kongbu' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_kongbu;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 3;
                            game.players[i].storage.wuyue_fangkongzhi = 205 + n * 1.5;
                            game.players[i].storage.wuyue_xingyunzhi = 19;
                            game.players[i].storage.wuyue_paojizhi = 190 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 0;
                            game.players[i].storage.wuyue_jidongzhi = 130;
                            game.players[i].storage.wuyue_tianzhuangzhi = 115 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_lafei' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var l = lib.config.wuyue_lafei;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 335 + l;
                            game.players[i].storage.wuyue_xingyunzhi = 15;
                            game.players[i].storage.wuyue_paojizhi = 85 + l * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 227 + l * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 225 + l;
                            game.players[i].storage.wuyue_tianzhuangzhi = 155 + l;
                            game.players[i].storage.wuyue_jianniangdengji = l;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_fulaiche' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_fulaiche;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 152 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 73;
                            game.players[i].storage.wuyue_paojizhi = 85 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 200 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 171 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 150 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_fute' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_fute;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 171 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 67;
                            game.players[i].storage.wuyue_paojizhi = 73 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 175 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 165 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 145 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_aolike' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_aolike;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_jianniangExp');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 152 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 62;
                            game.players[i].storage.wuyue_paojizhi = 89 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 210 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 190 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 155 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    //教廷//撒丁
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_edu' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_edu;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 1;
                            game.players[i].storage.wuyue_fangkongzhi = 194 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 51;
                            game.players[i].storage.wuyue_paojizhi = 79 + n * 1.5;
                            game.players[i].storage.wuyue_leijizhi = 230 + n * 1.5;
                            game.players[i].storage.wuyue_jidongzhi = 210 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 91 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_shengnvzhende' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_shengnvzhende;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 2;
                            game.players[i].storage.wuyue_fangkongzhi = 276 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 55;
                            game.players[i].storage.wuyue_paojizhi = 142 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 191 + n * 1;
                            game.players[i].storage.wuyue_jidongzhi = 90 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 110 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    ///北方联合
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_afuleer' && !game.players[i].hasSkill('wuyue_jianniangdengji')) {
                            var n = lib.config.wuyue_afuleer;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengji');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 2;
                            game.players[i].storage.wuyue_fangkongzhi = 160 + n;
                            game.players[i].storage.wuyue_xingyunzhi = 55;
                            game.players[i].storage.wuyue_paojizhi = 111 + n * 2;
                            game.players[i].storage.wuyue_leijizhi = 185 + n * 1;
                            game.players[i].storage.wuyue_jidongzhi = 91 + n;
                            game.players[i].storage.wuyue_tianzhuangzhi = 115 + n;
                            game.players[i].storage.wuyue_jianniangdengji = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                    //////meta
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].name == 'wuyue_blackfangzhou' && !game.players[i].hasSkill('wuyue_jianniangdengjihm')) {
                            var n = lib.config.wuyue_blackfangzhou;
                            var exp = lib.config.wuyueExp;
                            game.players[i].addSkill('wuyue_paojizhi');
                            game.players[i].addSkill('wuyue_leijizhi');
                            game.players[i].addSkill('wuyue_jidongzhi');
                            game.players[i].addSkill('wuyue_tianzhuangzhi');
                            game.players[i].addSkill('wuyue_fangkongzhi');
                            game.players[i].addSkill('wuyue_hangkongzhi');
                            game.players[i].addSkill('wuyue_chakanshuxin');
                            game.players[i].addSkill('wuyue_jianniangdengjihm');
                            game.players[i].addSkill('wuyue_xingyunzhi');
                            game.players[i].addSkill('wuyue_baojizhi');
                            game.players[i].addSkill('wuyue_shanbizhi');
                            game.players[i].addSkill('wuyue_jianniangleibie');
                            game.players[i].storage.wuyue_jianniangleibie = 7;
                            game.players[i].storage.wuyue_xingyunzhi = 87;
                            game.players[i].storage.wuyue_hangkongzhi = 398 + n * 2;
                            game.players[i].storage.wuyue_fangkongzhi = 205 + n;
                            game.players[i].storage.wuyue_jidongzhi = 82;
                            game.players[i].storage.wuyue_tianzhuangzhi = 98 + n;
                            game.players[i].storage.wuyue_jianniangdengjihm = n;
                            game.players[i].storage.wuyue_jianniangExp = exp;
                        }
                    }
                },
            };
            lib.skill._recover_player = {
                trigger: {
                    player: 'recoverBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm');
                },
                content() {
                    var j = player.storage.wuyue_jidongzhi;
                    var h = player.maxHp;
                    if (j <= 100 && h < 8000) {
                        trigger.num += player.maxHp / 7;
                    }
                    if (j <= 100 && h >= 8000) {
                        trigger.num += 999;
                    }
                    if (j >= 100 && j < 300 && h < 6000) {
                        trigger.num += player.maxHp / 5;
                    }
                    if (j >= 100 && j < 300 && h >= 6000) {
                        trigger.num += 799;
                    }
                    if (j >= 300 && j < 500 && h < 4000) {
                        trigger.num += player.maxHp / 5;
                    }
                    if (j >= 300 && j < 500 && h >= 4000) {
                        trigger.num += 699;
                    }
                    if (j >= 500 && j < 1000 && h < 2000) {
                        trigger.num += player.maxHp / 4;
                    }
                    if (j >= 500 && j < 1000 && h >= 2000) {
                        trigger.num += 599;
                    }
                    if (j >= 1000 && h < 1000) {
                        trigger.num += player.maxHp / 3;
                    }
                    if (j >= 1000 && h > 1000) {
                        trigger.num += 499;
                    }
                },
            };
            lib.skill._Paoji_player1 = {
                trigger: {
                    player: 'damageBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.source && (event.source.hasSkill('wuyue_jianniangdengji') || event.source.hasSkill('wuyue_jianniangdengjihm')) && (player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm'));
                },
                content() {
                    var p = trigger.source.storage.wuyue_paojizhi;
                    var h = trigger.source.storage.wuyue_hangkongzhi;
                    var f = player.storage.wuyue_fangkongzhi;
                    var x = player.storage.wuyue_xingyunzhi;
                    var l = trigger.source.storage.wuyue_leijizhi;
                    var b = trigger.source.storage.wuyue_baojizhi;
                    if (trigger.nature && trigger.nature == 'wuyuewushu') {
                        event.finish();
                    } else {
                        if (trigger.source.hasSkill('wuyue_jianniangdengji')) {
                            if (trigger.nature && trigger.nature == 'wuyuehangkong') {
                                trigger.num += trigger.num * h * 1.5 - f;
                            } else {
                                if (trigger.nature && trigger.nature == 'yuleiji') {
                                    event.num = Math.random();
                                    if (event.num <= x / 4 / 100 + 0.1 + b / 100) {
                                        trigger.num += trigger.num * l * 4;
                                        trigger.source.popup('暴击');
                                    } else trigger.num += trigger.num * l * 2;
                                } else {
                                    if (trigger.notLink()) {
                                        event.num = Math.random();
                                        if (event.num <= x / 4 / 100 + 0.1 + b / 100) {
                                            trigger.num += trigger.num * p * 2;
                                            trigger.source.popup('暴击');
                                        } else trigger.num += trigger.num * p;
                                    } else {
                                        event.finish();
                                    }
                                }
                            }
                        } else {
                            if (trigger.nature && trigger.nature == 'wuyuepaoji') {
                                trigger.num += trigger.num * p;
                            } else {
                                if (trigger.nature && trigger.nature == 'yuleiji') {
                                    event.num = Math.random();
                                    if (event.num <= x / 4 / 100 + 0.1 + b / 100) {
                                        trigger.num += trigger.num * l * 4;
                                        trigger.source.popup('暴击');
                                    } else trigger.num += trigger.num * l * 2;
                                } else {
                                    if (trigger.notLink()) {
                                        event.num = Math.random();
                                        if (event.num <= x / 4 / 100 + 0.1 + b / 100) {
                                            trigger.num += trigger.num * h * 3 - f;
                                            trigger.source.popup('暴击');
                                        } else trigger.num += trigger.num * h * 1.5 - f;
                                    } else {
                                        event.finish();
                                    }
                                }
                            }
                        }
                    }
                },
            };
            lib.skill._Paoji_player = {
                trigger: {
                    player: 'damageBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.notLink() && event.source && !event.source.hasSkill('wuyue_jianniangdengji') && !event.source.hasSkill('wuyue_jianniangdengjihm') && (player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm'));
                },
                content() {
                    var j = player.storage.wuyue_jidongzhi;
                    if (j < 200) {
                        trigger.num += trigger.num * 1500 - j * trigger.num * 5;
                    }
                    if (j >= 200 && j < 600) {
                        trigger.num += trigger.num * 800 - j * trigger.num;
                    }
                    if (j >= 600) {
                        trigger.num += trigger.num * 150;
                    }
                    player.hp -= trigger.num;
                    trigger.finished = true;
                },
            };
            lib.skill._Paoji_player3 = {
                trigger: {
                    player: 'damageBefore',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return event.source && (event.source.hasSkill('wuyue_jianniangdengji') || event.source.hasSkill('wuyue_jianniangdengjihm')) && !player.hasSkill('wuyue_jianniangdengji') && !player.hasSkill('wuyue_jianniangdengjihm');
                },
                content() {
                    if (trigger.notLink()) {
                        event.finish();
                    } else {
                        trigger.num -= trigger.num - 1;
                    }
                },
            };
            lib.skill._Shanghai_player = {
                trigger: {
                    player: ['damageBegin', 'loseHpBegin'],
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return !event.source && event.notLink() && (player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm'));
                },
                content() {
                    trigger.num += trigger.num * 500;
                },
            };
            lib.skill._jidong_player = {
                trigger: {
                    player: 'damageBegin2',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player.hasSkill('wuyue_jidongzhi');
                },
                content() {
                    var j = player.storage.wuyue_jidongzhi;
                    var s = player.storage.wuyue_shanbizhi;
                    if (j < 500) {
                        event.num = Math.random();
                        if (event.num <= 1 - (800 - j) / 800 + s / 100) {
                            trigger.num *= 0;
                            player.popup('miss');
                        }
                    }
                    if (j >= 500 && j < 1000) {
                        event.num = Math.random();
                        if (event.num <= 1 - (1200 - j) / 1200 + s / 100) {
                            trigger.num *= 0;
                            player.popup('miss');
                        }
                    }
                    if (j >= 1000) {
                        event.num = Math.random();
                        if (event.num <= 0.85 + s / 100) {
                            trigger.num *= 0;
                            player.popup('miss');
                        }
                    }
                },
            };
            lib.skill._TBjianniang_BOSS = {
                trigger: {
                    global: 'gameStart',
                    player: 'enterGame',
                },
                forced: true,
                _priority: 300,
                filter(event, player) {
                    return get.mode() == 'boss' && game.boss.name == 'wuyue_zhiyingzhe';
                },
                content() {
                    'step 0';
                    if (game.me == game.boss) {
                        game.tis('不支持使用boss进行战斗');
                        game.over();
                    }
                    lib.config.background_music = 'music_custom';
                    lib.config.background_music_src = 'extension/碧蓝航线/bjyy/beijinyinyue1.mp3';
                    game.playBackgroundMusic();
                    game.broadcastAll() + ui.background.setBackgroundImage('extension/碧蓝航线/bg/bg1.jpg');
                    event.current = player.previousSeat; //上
                    game.me.init('wuyue_zhiyingzhe');
                    game.me.changeSeat(1);
                    game.boss.changeSeat(7);
                    ('step 1');
                    if (player.getFriends(true).includes(event.current)) event.current = event.current.previousSeat;
                    ('step 2');
                    if (player.getFriends(true).includes(event.current)) event.goto(1);
                    ('step 3');
                    event.num = game.filterPlayer(function (current) {
                        return player.getEnemies().includes(current);
                    });
                    if (event.num.length > 1) {
                        event.current.removed = true;
                        event.current.classList.add('dead');
                        event.current.remove();
                        game.players.remove(event.current);
                    }
                    ('step 4');
                    if (event.num.length == 1) event.finish();
                    else event.current = event.current.previousSeat;
                    ('step 5');
                    event.current.removed = true;
                    event.current.classList.add('dead');
                    event.current.remove();
                    game.players.remove(event.current);
                    ('step 6');
                    var list = ['wuyue_blackfangzhou', 'wuyue_xiaotiane', 'wuyue_dafeng'];
                    event.card = list.randomGets(3);
                    ('step 7');
                    if (event.card.length) {
                        game.me
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['请选择一个boss进行挑战', [event.card, 'character']]);
                    }
                    ('step 8');
                    if (result.links?.length) {
                        game.boss.init(result.links[0]);
                        game.boss.addSkill('wuyue_jianniangBoss');
                        if (result.links[0] == 'wuyue_blackfangzhou') {
                            event.num = 2;
                        }
                        if (result.links[0] == 'wuyue_xiaotiane') {
                            game.boss.removeSkill('wuyue_jingjihuibi');
                            game.boss.addSkill('wuyue_jingjihuibi1');
                            game.boss.node.name.innerHTML = '大<br/>天<br/>鹅<br/>';
                            game.boss.node.avatar.setBackgroundImage('extension/碧蓝航线/tup/wuyue_datiane.jpg');
                            lib.translate[game.boss.name] = '大天鹅';
                            game.boss.maxHp += 15000;
                            game.boss.changeSeat(4);
                            game.boss.hp = game.boss.maxHp;
                            event.num = 5;
                        }
                        if (result.links[0] == 'wuyue_dafeng') {
                            game.boss.removeSkill('wuyue_mingyunzhisai');
                            game.boss.addSkill('wuyue_mingyunzhisai1');
                            game.boss.node.name.innerHTML = '黑<br/>化<br/>大<br/>凤<br/>';
                            game.boss.node.avatar.setBackgroundImage('extension/碧蓝航线/tup/wuyue_hhdafeng.jpg');
                            lib.translate[game.boss.name] = '黑化大凤';
                            game.boss.maxHp += 12000;
                            game.boss.hp = game.boss.maxHp;
                            game.boss.changeSeat(4);
                            event.num = 5;
                        }
                        game.me
                            .chooseControl('简单', '普通', '困难', '噩梦', function () {
                                if (result.control == '简单') return 10;
                                if (result.control == '普通') return -10;
                                if (result.control == '困难') return -10;
                                if (result.control == '噩梦') return -10;
                            })
                            .set('prompt', '请选择难度');
                    }
                    ('step 9');
                    if (result.control == '简单') {
                        game.saveConfig('wuyuedj', (lib.config.wuyuedj = 10));
                    }
                    if (result.control == '普通') {
                        var bs = lib.config.wuyuedj;
                        game.saveConfig('wuyuedj', (lib.config.wuyuedj = 30));
                    }
                    if (result.control == '困难') {
                        var bs = lib.config.wuyuedj;
                        game.saveConfig('wuyuedj', (lib.config.wuyuedj = 70));
                    }
                    if (result.control == '噩梦') {
                        var bs = lib.config.wuyuedj;
                        game.saveConfig('wuyuedj', (lib.config.wuyuedj = 120));
                    }
                    ('step 10');
                    var list = [];
                    if (lib.config.wuyue_lafei > 0) list.push('wuyue_lafei');
                    if (lib.config.wuyue_biaoqiang > 0) list.push('wuyue_biaoqiang');
                    if (lib.config.wuyue_z23 > 0) list.push('wuyue_z23');
                    if (lib.config.wuyue_lingbo > 0) list.push('wuyue_lingbo');
                    if (lib.config.wuyue_yingrui > 0) list.push('wuyue_yingrui');
                    if (lib.config.wuyue_huashengdun > 0) list.push('wuyue_huashengdun');
                    if (lib.config.wuyue_heianjie > 0) list.push('wuyue_heianjie');
                    if (lib.config.wuyue_luoen > 0) list.push('wuyue_luoen');
                    if (lib.config.wuyue_changmeng > 0) list.push('wuyue_changmeng');
                    if (lib.config.wuyue_chaijun > 0) list.push('wuyue_chaijun');
                    if (lib.config.wuyue_ftldadi > 0) list.push('wuyue_ftldadi');
                    if (lib.config.wuyue_zhenhai > 0) list.push('wuyue_zhenhai');
                    if (lib.config.wuyue_bingjiang > 0) list.push('wuyue_bingjiang');
                    if (lib.config.wuyue_edu > 0) list.push('wuyue_edu');
                    if (lib.config.wuyue_fulaiche > 0) list.push('wuyue_fulaiche');
                    if (lib.config.wuyue_muyue > 0) list.push('wuyue_muyue');
                    if (lib.config.wuyue_ruyue > 0) list.push('wuyue_ruyue');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_kongbu');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_xinyue');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_aolike');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_fute');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_z20');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_z21');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_dafeng');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_shengnvzhende');
                    if (lib.config.wuyue_kongbu > 0) list.push('wuyue_afuleer');
                    event.card = list.randomGets(5);
                    ('step 11');
                    if (event.card.length) {
                        game.me
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['选择一个舰娘出战', [event.card, 'character']]);
                    }
                    ('step 12');
                    game.me.init(result.links[0]);
                    event.goto(13);
                    ('step 13');
                    var list = [];
                    if (lib.config.wuyue_lafei > 0 && game.me.name != 'wuyue_lafei' && game.me.nextSeat.name != 'wuyue_lafei' && game.me.previousSeat.name != 'wuyue_lafei' && game.me.nextSeat.nextSeat.name != 'wuyue_lafei' && game.me.previousSeat.previousSeat.name != 'wuyue_lafei') list.push('wuyue_lafei');
                    if (lib.config.wuyue_biaoqiang > 0 && game.me.name != 'wuyue_biaoqiang' && game.me.nextSeat.name != 'wuyue_biaoqiang' && game.me.previousSeat.name != 'wuyue_biaoqiang' && game.me.nextSeat.nextSeat.name != 'wuyue_biaoqiang' && game.me.previousSeat.previousSeat.name != 'wuyue_biaoqiang') list.push('wuyue_biaoqiang');
                    if (lib.config.wuyue_z23 > 0 && game.me.name != 'wuyue_z23' && game.me.nextSeat.name != 'wuyue_z23' && game.me.previousSeat.name != 'wuyue_z23' && game.me.nextSeat.nextSeat.name != 'wuyue_z23' && game.me.previousSeat.previousSeat.name != 'wuyue_z23') list.push('wuyue_z23');
                    if (lib.config.wuyue_lingbo > 0 && game.me.name != 'wuyue_lingbo' && game.me.nextSeat.name != 'wuyue_lingbo' && game.me.previousSeat.name != 'wuyue_lingbo' && game.me.nextSeat.nextSeat.name != 'wuyue_lingbo' && game.me.previousSeat.previousSeat.name != 'wuyue_lingbo') list.push('wuyue_lingbo');
                    if (lib.config.wuyue_yingrui > 0 && game.me.name != 'wuyue_yingrui' && game.me.nextSeat.name != 'wuyue_yingrui' && game.me.previousSeat.name != 'wuyue_yingrui' && game.me.nextSeat.nextSeat.name != 'wuyue_yingrui' && game.me.previousSeat.previousSeat.name != 'wuyue_yingrui') list.push('wuyue_yingrui');
                    if (lib.config.wuyue_huashengdun > 0 && game.me.name != 'wuyue_huashengdun' && game.me.nextSeat.name != 'wuyue_huashengdun' && game.me.previousSeat.name != 'wuyue_huashengdun' && game.me.nextSeat.nextSeat.name != 'wuyue_huashengdun' && game.me.previousSeat.previousSeat.name != 'wuyue_huashengdun') list.push('wuyue_huashengdun');
                    if (lib.config.wuyue_heianjie > 0 && game.me.name != 'wuyue_heianjie' && game.me.nextSeat.name != 'wuyue_heianjie' && game.me.previousSeat.name != 'wuyue_heianjie' && game.me.nextSeat.nextSeat.name != 'wuyue_heianjie' && game.me.previousSeat.previousSeat.name != 'wuyue_heianjie') list.push('wuyue_heianjie');
                    if (lib.config.wuyue_luoen > 0 && game.me.name != 'wuyue_luoen' && game.me.nextSeat.name != 'wuyue_luoen' && game.me.previousSeat.name != 'wuyue_luoen' && game.me.nextSeat.nextSeat.name != 'wuyue_luoen' && game.me.previousSeat.previousSeat.name != 'wuyue_luoen') list.push('wuyue_luoen');
                    if (lib.config.wuyue_changmeng > 0 && game.me.name != 'wuyue_changmeng' && game.me.nextSeat.name != 'wuyue_changmeng' && game.me.previousSeat.name != 'wuyue_changmeng' && game.me.nextSeat.nextSeat.name != 'wuyue_changmeng' && game.me.previousSeat.previousSeat.name != 'wuyue_changmeng') list.push('wuyue_changmeng');
                    if (lib.config.wuyue_chaijun > 0 && game.me.name != 'wuyue_chaijun' && game.me.nextSeat.name != 'wuyue_chaijun' && game.me.previousSeat.name != 'wuyue_chaijun' && game.me.nextSeat.nextSeat.name != 'wuyue_chaijun' && game.me.previousSeat.previousSeat.name != 'wuyue_chaijun') list.push('wuyue_chaijun');
                    if (lib.config.wuyue_ftldadi > 0 && game.me.name != 'wuyue_ftldadi' && game.me.nextSeat.name != 'wuyue_ftldadi' && game.me.previousSeat.name != 'wuyue_ftldadi' && game.me.nextSeat.nextSeat.name != 'wuyue_ftldadi' && game.me.previousSeat.previousSeat.name != 'wuyue_ftldadi') list.push('wuyue_ftldadi');
                    if (lib.config.wuyue_zhenhai > 0 && game.me.name != 'wuyue_zhenhai' && game.me.nextSeat.name != 'wuyue_zhenhai' && game.me.previousSeat.name != 'wuyue_zhenhai' && game.me.nextSeat.nextSeat.name != 'wuyue_zhenhai' && game.me.previousSeat.previousSeat.name != 'wuyue_zhenhai') list.push('wuyue_zhenhai');
                    if (lib.config.wuyue_bingjiang > 0 && game.me.name != 'wuyue_bingjiang' && game.me.nextSeat.name != 'wuyue_bingjiang' && game.me.previousSeat.name != 'wuyue_bingjiang' && game.me.nextSeat.nextSeat.name != 'wuyue_bingjiang' && game.me.previousSeat.previousSeat.name != 'wuyue_bingjiang') list.push('wuyue_bingjiang');
                    if (lib.config.wuyue_edu > 0 && game.me.name != 'wuyue_edu' && game.me.nextSeat.name != 'wuyue_edu' && game.me.previousSeat.name != 'wuyue_edu' && game.me.nextSeat.nextSeat.name != 'wuyue_edu' && game.me.previousSeat.previousSeat.name != 'wuyue_edu') list.push('wuyue_edu');
                    if (lib.config.wuyue_fulaiche > 0 && game.me.name != 'wuyue_fulaiche' && game.me.nextSeat.name != 'wuyue_fulaiche' && game.me.previousSeat.name != 'wuyue_fulaiche' && game.me.nextSeat.nextSeat.name != 'wuyue_fulaiche' && game.me.previousSeat.previousSeat.name != 'wuyue_fulaiche') list.push('wuyue_fulaiche');
                    if (lib.config.wuyue_muyue > 0 && game.me.name != 'wuyue_muyue' && game.me.nextSeat.name != 'wuyue_muyue' && game.me.previousSeat.name != 'wuyue_muyue' && game.me.nextSeat.nextSeat.name != 'wuyue_muyue' && game.me.previousSeat.previousSeat.name != 'wuyue_muyue') list.push('wuyue_muyue');
                    if (lib.config.wuyue_ruyue > 0 && game.me.name != 'wuyue_ruyue' && game.me.nextSeat.name != 'wuyue_ruyue' && game.me.previousSeat.name != 'wuyue_ruyue' && game.me.nextSeat.nextSeat.name != 'wuyue_ruyue' && game.me.previousSeat.previousSeat.name != 'wuyue_ruyue') list.push('wuyue_ruyue');
                    if (lib.config.wuyue_kongbu > 0 && game.me.name != 'wuyue_kongbu' && game.me.nextSeat.name != 'wuyue_kongbu' && game.me.previousSeat.name != 'wuyue_kongbu' && game.me.nextSeat.nextSeat.name != 'wuyue_kongbu' && game.me.previousSeat.previousSeat.name != 'wuyue_kongbu') list.push('wuyue_kongbu');
                    if (lib.config.wuyue_xinyue > 0 && game.me.name != 'wuyue_xinyue' && game.me.nextSeat.name != 'wuyue_xinyue' && game.me.previousSeat.name != 'wuyue_xinyue' && game.me.nextSeat.nextSeat.name != 'wuyue_xinyue' && game.me.previousSeat.previousSeat.name != 'wuyue_xinyue') list.push('wuyue_xinyue');
                    if (lib.config.wuyue_aolike > 0 && game.me.name != 'wuyue_aolike' && game.me.nextSeat.name != 'wuyue_aolike' && game.me.previousSeat.name != 'wuyue_aolike' && game.me.nextSeat.nextSeat.name != 'wuyue_aolike' && game.me.previousSeat.previousSeat.name != 'wuyue_aolike') list.push('wuyue_aolike');
                    if (lib.config.wuyue_fute > 0 && game.me.name != 'wuyue_fute' && game.me.nextSeat.name != 'wuyue_fute' && game.me.previousSeat.name != 'wuyue_fute' && game.me.nextSeat.nextSeat.name != 'wuyue_fute' && game.me.previousSeat.previousSeat.name != 'wuyue_fute') list.push('wuyue_fute');
                    if (lib.config.wuyue_z20 > 0 && game.me.name != 'wuyue_z20' && game.me.nextSeat.name != 'wuyue_z20' && game.me.previousSeat.name != 'wuyue_z20' && game.me.nextSeat.nextSeat.name != 'wuyue_z20' && game.me.previousSeat.previousSeat.name != 'wuyue_z20') list.push('wuyue_z20');
                    if (lib.config.wuyue_z21 > 0 && game.me.name != 'wuyue_z21' && game.me.nextSeat.name != 'wuyue_z21' && game.me.previousSeat.name != 'wuyue_z21' && game.me.nextSeat.nextSeat.name != 'wuyue_z21' && game.me.previousSeat.previousSeat.name != 'wuyue_z21') list.push('wuyue_z21');
                    if (lib.config.wuyue_dafeng > 0 && game.me.name != 'wuyue_dafeng' && game.me.nextSeat.name != 'wuyue_dafeng' && game.me.previousSeat.name != 'wuyue_dafeng' && game.me.nextSeat.nextSeat.name != 'wuyue_dafeng' && game.me.previousSeat.previousSeat.name != 'wuyue_dafeng') list.push('wuyue_dafeng');
                    if (lib.config.wuyue_shengnvzhende > 0 && game.me.name != 'wuyue_shengnvzhende' && game.me.nextSeat.name != 'wuyue_shengnvzhende' && game.me.previousSeat.name != 'wuyue_shengnvzhende' && game.me.nextSeat.nextSeat.name != 'wuyue_shengnvzhende' && game.me.previousSeat.previousSeat.name != 'wuyue_shengnvzhende') list.push('wuyue_shengnvzhende');
                    if (lib.config.wuyue_afuleer > 0 && game.me.name != 'wuyue_afuleer' && game.me.nextSeat.name != 'wuyue_afuleer' && game.me.previousSeat.name != 'wuyue_afuleer' && game.me.nextSeat.nextSeat.name != 'wuyue_afuleer' && game.me.previousSeat.previousSeat.name != 'wuyue_afuleer') list.push('wuyue_afuleer');
                    event.card = list.randomGets(3);
                    ('step 14');
                    if (event.card.length) {
                        game.me
                            .chooseButton(true)
                            .set('ai', function (button) {
                                return get.rank(button.link, true) - lib.character[button.link][2];
                            })
                            .set('createDialog', ['选择一个舰娘作为队友', [event.card, 'character']]);
                    }
                    ('step 15');
                    if (result.bool) {
                        event.n = game.filterPlayer(function (current) {
                            return player.getEnemies().includes(current);
                        });
                        if (event.n.length == 5) {
                            game.addBossFellow(5, result.links[0]);
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].name == result.links[0]) {
                                    game.players[i].side = false;
                                    game.players[i].identity = 'cai';
                                    game.players[i].setIdentity('cai');
                                    game.addVideo('setIdentity', game.players[i], 'cai');
                                }
                            }
                        }
                        if (event.n.length == 4) {
                            game.addBossFellow(6, result.links[0]);
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].name == result.links[0]) {
                                    game.players[i].side = false;
                                    game.players[i].identity = 'cai';
                                    game.players[i].setIdentity('cai');
                                    game.addVideo('setIdentity', game.players[i], 'cai');
                                }
                            }
                        }
                        if (event.n.length == 3) {
                            game.addBossFellow(7, result.links[0]);
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].name == result.links[0]) {
                                    game.players[i].side = false;
                                    game.players[i].identity = 'cai';
                                    game.players[i].setIdentity('cai');
                                    game.addVideo('setIdentity', game.players[i], 'cai');
                                }
                            }
                        }
                        if (event.n.length == 2) {
                            game.addBossFellow(3, result.links[0]);
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].name == result.links[0]) {
                                    game.players[i].side = false;
                                    game.players[i].identity = 'cai';
                                    game.players[i].setIdentity('cai');
                                    game.addVideo('setIdentity', game.players[i], 'cai');
                                }
                            }
                        }
                        if (event.n.length == 1) {
                            game.addBossFellow(2, result.links[0]);
                            for (var i = 0; i < game.players.length; i++) {
                                if (game.players[i].name == result.links[0]) {
                                    game.players[i].side = false;
                                    game.players[i].identity = 'cai';
                                    game.players[i].setIdentity('cai');
                                    game.addVideo('setIdentity', game.players[i], 'cai');
                                }
                            }
                        }
                    }
                    ('step 16');
                    event.num--;
                    if (event.num > 0) {
                        event.goto(13);
                    }
                },
            };
            lib.skill._fuli_player = {
                trigger: {
                    global: 'gameStart',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                _priority: 999,
                filter(event, player) {
                    return lib.config.wuyuefuli != 1;
                },
                content() {
                    game.me.addSkill('wuyue_wuyuefuli');
                },
            };
            lib.skill._tianzhuang_player = {
                trigger: {
                    player: 'phaseDrawBegin',
                },
                charlotte: true,
                fixed: true,
                silent: true,
                filter(event, player) {
                    return player.hasSkill('wuyue_tianzhuangzhi');
                },
                content() {
                    var t = player.storage.wuyue_tianzhuangzhi;
                    if (t < 100) {
                        event.num = Math.random();
                        if (event.num <= t / 100) trigger.num += 3;
                        else trigger.num += 1;
                    }
                    if (t >= 100 && t < 200) {
                        event.num = Math.random();
                        if (event.num <= t / 200) trigger.num += 4;
                        else trigger.num += 2;
                    }
                    if (t >= 200 && t < 300) {
                        event.num = Math.random();
                        if (event.num <= t / 300) trigger.num += 5;
                        else trigger.num += 3;
                    }
                    if (t >= 300 && t < 400) {
                        event.num = Math.random();
                        if (event.num <= t / 500) trigger.num += 6;
                        else trigger.num += 4;
                    }
                    if (t >= 400 && t < 500) {
                        event.num = Math.random();
                        if (event.num <= t / 700) trigger.num += 7;
                        else trigger.num += 5;
                    }
                    if (t >= 500 && t < 600) {
                        event.num = Math.random();
                        if (event.num <= t / 700) trigger.num += 8;
                        else trigger.num += 6;
                    }
                    if (t >= 700) {
                        event.num = Math.random();
                        if (event.num <= t / 1000) trigger.num += 9;
                        else trigger.num += 7;
                    }
                },
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '碧蓝航线',
                    connect: true,
                    character: {
                        ////东煌
                        wuyue_yingrui: ['female', 'wuyue_donghuang', 2519, ['wuyue_cewj', 'wuyue_dqby', 'wuyue_dmzhaohe', 'wuyue_jnleiji'], ['des:我是肇和级防护巡洋舰二号舰——应瑞,同时也是肇和的妹妹.顺便一提,如果您恰好看到我和姐姐拌嘴,请不要惊讶,那正是我们关系融洽的表现,嗯~']],
                        wuyue_zhenhai: ['female', 'wuyue_donghuang', 3935, ['wuyue_xingluoqibu', 'wuyue_zhamouqiji'], ['zhu', 'des:我是东煌最早的水上飞机母舰,镇海.虽然有很多个<第一>,不过那些并非都是荣誉就是.相比起那些真正的航空母舰,我欠缺的东西还是有点多呢.']],
                        wuyue_bingjiang: ['female', 'wuyue_donghuang', 3519, ['wuyue_shiwuxufa', 'wuyue_qingxieruhuo', 'wuyue_dmhaeeb', 'wuyue_jnleiji'], ['des:我是东煌的轻巡洋舰哈尔滨.怎么,觉得我的出现有点出乎意料？哈哈!生活总得需要点惊喜不是么？总而言之,我和我的火炮不会让你失望的!']],
                        /////皇家
                        wuyue_biaoqiang: ['female', 'qun', 1792, ['wuyue_bqtxi', 'wuyue_dmbiaoqiang', 'wuyue_jnleiji'], ['des:指挥官好,我是J级驱逐标枪. 和姐妹们参加了纳尔维克海战以及敦刻尔克大撤退,虽然中间闹了一些小别扭,不过也算是奋战到最后了啦!']],
                        wuyue_chaijun: ['female', 'qun', 4667, ['wuyue_Grinandfire', 'wuyue_cjpowerup', 'wuyue_dmchaijun', 'wuyue_jnleiji'], ['des:我是皇家所属的重巡洋舰,柴郡号!不过,直到见到亲爱的以前,我一直都是只存在于想象之中的舰船呢.所以,我的这副身体,都是属于亲爱的你的呢!']],
                        wuyue_xiaotiane: ['female', 'qun', 1558, ['wuyue_yanwudan', 'wuyue_jingjihuibi', 'wuyue_dmcji', 'wuyue_jnleiji'], ['des:指挥官,那个……就是……炸鱼薯条吃完了,咱能去买一点吗？']],
                        wuyue_xinyue: ['female', 'qun', 1612, ['wuyue_yanwudan', 'wuyue_dmcji', 'wuyue_jnleiji'], ['des:我是C级驱逐舰的新月,虽然和姐妹们一样隶属于本国舰队,出国前我也去过红海,印度洋,要是把我当小学生你可就要倒霉了,哼!']],
                        ///铁血
                        wuyue_z23: ['female', 'qun', 2384, ['wuyue_txxfeng', 'wuyue_dmZ23', 'wuyue_jnleiji'], ['des:我是1936A型驱逐舰的大姐,Z23,从我开始的妹妹们都只有代号,不像姐姐们有继承前人的名字.虽然有些不近人情不过确实比较方便,所以请不要客气直接叫我Z23就好']],
                        wuyue_z21: ['female', 'qun', 1950, ['wuyue_paodanjintong', 'wuyue_dmZ23', 'wuyue_jnleiji'], ['des:铁血海军Z级驱逐舰1936型.作为为旗舰参与了威瑟演习作战,最后被勇敢号击沉……下次作战我不会再输了!']],
                        wuyue_z20: ['female', 'qun', 1850, ['wuyue_paodanjintong', 'wuyue_dmZ23', 'wuyue_jnleiji'], ['des:铁血海军Z级驱逐舰1936型.Z17型唯一幸存的驱逐舰.被转交给北方联合后改名为<Protschny>.和姐妹们分离,一个人苟活于世也能叫幸运吗？']],
                        wuyue_luoen: ['female', 'qun', 5238, ['wuyue_zhuanyetzs', 'wuyue_quanfangweizj', 'wuyue_dmluoen'], ['des:铁血巡洋舰罗恩号,历史中仅停留在设计构想阶段.指挥官,我看到了哟——你的内心中有和我相似的部分喔']],
                        wuyue_ftldadi: ['female', 'qun', 9141, ['wuyue_heiandkxq', 'wuyue_hundundzmq', 'wuyue_pohuaidjxq'], ['zhu', 'des:铁血海军腓特烈大帝号战列舰,H计划的产物之一.我的孩子,如果失眠的话,就让我为你唱首摇篮曲吧']],
                        ///重樱
                        wuyue_changmeng: ['female', 'qun', 7343, ['wuyue_chongyingqijian', 'wuyue_bigsevenying'], ['zhu', 'des:吾代表着重樱的军魂,重樱的荣光以及重樱的辉煌.吾是BIG 7之一,吾之存在即是那个时代,睁大汝的双眼,顶礼膜拜吧——看够了吗,吾站腻了,要休息一下…']],
                        wuyue_dafeng: ['female', 'qun', 7481, ['wuyue_mingyunzhisai', 'wuyue_zhongzhuanghangmu'], ['des:我可是专门强化过防御装甲的最新型航母唷,看这飞行甲板,看这封闭式机库,是不是很棒呢~？——嗯？您说装载数量和消防？这些小事无所谓啦……比起这个,您对大凤的身体……满意吗？']],
                        wuyue_lingbo: ['female', 'qun', 1953, ['wuyue_guishen', 'wuyue_dmlingbo', 'wuyue_jnleiji'], ['des:吹雪级驱逐舰的改良舰绫波……的说,对我来说,战斗没什么好害怕的,所以虽然只是驱逐舰,但是无论什么敌人我都敢一战……']],
                        wuyue_ruyue: ['female', 'qun', 1652, ['wuyue_kuaisutianzhuang', 'wuyue_yuleilianshe', 'wuyue_dmmuyue', 'wuyue_jnleiji'], ['des:我是睦月级的如月,一直和睦月在一起……讨厌飞机和威克岛,想和大家在一起……']],
                        wuyue_muyue: ['female', 'qun', 1702, ['wuyue_kuaisutianzhuang', 'wuyue_leijizhihui', 'wuyue_dmmuyue', 'wuyue_jnleiji'], ['des:睦月是第30驱逐队的睦月,睦月级的姐姐!虽然是旧型,也很能干的!喜欢吃糖,讨厌斯图……呜,不会念,总之就是讨厌!']],
                        ///白鹰
                        wuyue_lafei: ['female', 'qun', 2152, ['wuyue_slmdzs', 'wuyue_dmlafei', 'wuyue_jnleiji'], ['des:我是备受期待的本森级驱逐舰拉菲,在三次所罗门海战有着极为活跃的表现,战舰？那是什么？']],
                        wuyue_huashengdun: ['female', 'qun', 7316, ['wuyue_yypj', 'wuyue_tdwzy'], ['des:北卡罗来纳级二号舰华盛顿就是本小姐了.喜欢的东西就是歼灭敌人,最近正在练习笑容.——战绩？那种东西可不是拿出来炫耀的,总而言之,我笑的还可以吗？']],
                        wuyue_heianjie: ['female', 'qun', 3587, ['wuyue_darkness'], ['des:黑暗界这个名字听起来是不是有点超现实？我的前身是载着探险队去往北极再也没有回来的一艘船,倒确实很有通往深渊的气质……总而言之,比起我请多照顾一下我妹妹吧']],
                        wuyue_kongbu: ['female', 'qun', 3419, ['wuyue_darkness'], ['des:我是黑暗界级浅水重炮舰二号舰恐怖.阿贝克隆比级是比不过我和姐姐的.我们经常在达达尼尔海峡那里.对陆轰击作战……应该很容易……']],
                        wuyue_fulaiche: ['female', 'qun', 1976, ['wuyue_jiejieqizhi', 'wuyue_zhqnshuzhihuiqz', 'wuyue_dmfulaic', 'wuyue_jnleiji'], ['des:我是弗莱彻级175艘驱逐舰的大姐弗莱彻号!是驱逐舰队的主力,重要的海上战役都参与过喔~']],
                        wuyue_fute: ['female', 'qun', 2211, ['wuyue_kuaisutianzhuang', 'wuyue_dmfulaic', 'wuyue_jnleiji'], ['des:我是弗莱彻级小海狸分队的富特.有这么个大家族真是麻烦,三十多个姐姐和上百个妹妹,名字记起来就好累……']],
                        wuyue_aolike: ['female', 'qun', 1792, ['wuyue_kuaisutianzhuang', 'wuyue_dmfulaic', 'wuyue_jnleiji'], ['des:我是小海狸分队的奥利克!主要负责空中航线救援,虽然没有队长厉害,但只要能和大伙们一起战斗到最后,奥利克就心满意足了']],
                        //教廷//撒丁
                        wuyue_edu: ['female', 'qun', 1925, ['wuyue_Gassing', 'wuyue_xfzd', 'wuyue_dmkaix', 'wuyue_jnleiji'], ['des:我是隶属于维希教延的空想级驱逐舰恶毒,曾部署于布雷斯特的第八分队...与姐妹们共同作战.但是在那之后,凯旋她选择了和我们不一样的道路......嗯,不用勉强']],
                        wuyue_shengnvzhende: ['female', 'qun', 3223, ['wuyue_Pucelle', 'wuyue_shengnvdedg', 'wuyue_dmsnvsd', 'wuyue_jnleiji'], ['des:曾经我作为训练舰,培养优秀的战士.现在我将拿起剑,站在鸢尾的最前方.为了我热爱的土地,我愿意付出一切.']],
                        ///北方联合
                        wuyue_afuleer: ['female', 'qun', 3372, ['wuyue_gaibsddps', 'wuyue_dmafleer', 'wuyue_jnleiji'], ['des:我是巡洋舰阿芙乐尔,如您所知道的,我曾经为那一场著名的革命打响了第一炮,不过在那之后的世界变得我也有些看不懂了……总之,在舰队中我也只是普通的士兵,请尽情使用我吧,我会为舰队带来胜利的!']],
                        /////////meta
                        wuyue_blackfangzhou: ['female', 'qun', 5941, ['wuyue_jinghuoqiangyan', 'wuyue_huanyinqx', 'wuyue_rongguangzf'], ['des:你我是军人,是战士.越是面对困境,越不可忘记我们的身份,以及我们身后需要守护的人们.']],
                        wuyue_zhiyingzhe: ['female', 'qun', 3, [], ['zhu', 'boss', 'bossallowed', 'des:......']],
                    },
                    translate: {
                        ////东煌
                        wuyue_yingrui: '应瑞',
                        wuyue_zhenhai: '镇海',
                        wuyue_bingjiang: '滨江',
                        /////皇家
                        wuyue_biaoqiang: '标枪',
                        wuyue_chaijun: '柴郡',
                        wuyue_xiaotiane: '小天鹅',
                        wuyue_xinyue: '新月',
                        ///铁血
                        wuyue_ftldadi: '腓特烈大帝',
                        wuyue_luoen: '罗恩',
                        wuyue_z23: 'Z 2 3',
                        wuyue_z21: 'Z 2 1',
                        wuyue_z20: 'Z 2 0',
                        ///重樱
                        wuyue_changmeng: '长萌',
                        wuyue_dafeng: '大凤',
                        wuyue_lingbo: '凌波',
                        wuyue_ruyue: '如月',
                        wuyue_muyue: '睦月',
                        ///白鹰
                        wuyue_heianjie: '黑暗界',
                        wuyue_kongbu: '恐怖',
                        wuyue_lafei: '拉菲',
                        wuyue_huashengdun: '华盛顿',
                        wuyue_fulaiche: '弗莱彻',
                        wuyue_fute: '富特',
                        wuyue_aolike: '奥利克',
                        //教廷//撒丁
                        wuyue_edu: '恶毒',
                        wuyue_shengnvzhende: '圣女贞德',
                        ///北方联合
                        wuyue_afuleer: '阿芙乐尔',
                        //////meta
                        wuyue_zhiyingzhe: 'T B',
                        wuyue_blackfangzhou: '黑方舟',
                        wuyue_slmdzs: '所罗门的战神',
                        wuyue_slmdzs_info: '拉菲使用/响应牌时有15%+X%概率发动,直到拉菲下回合结束之前,自身炮击,机动,填装属性各增加百分之40(X等于拉菲的等级/6)',
                        wuyue_dmlafei: '弹幕-拉菲',
                        wuyue_dmlafei_info: '拉菲每进行8/4次攻击时,可以选择1/2个目标对其造成0~2次X点伤害与1次Y点伤害/1-2次X点伤害与1-2次Y点伤害(/后面分别为拉菲70级时的效果,X为拉菲炮击值,Y为拉菲雷击值*2,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_bqtxi: '标枪突袭',
                        wuyue_bqtxi_info: '标枪使用/响应牌时有15%+X%概率发动,直到标枪下回合结束前,机动值提高百分之60(X等于标枪的等级/6)',
                        wuyue_dmbiaoqiang: '弹幕-标枪',
                        wuyue_dmbiaoqiang_info: '标枪每进行8/4次攻击时,可以选择1个目标对其造成2次X点伤害与1次Y点伤害/1次X点伤害与2次Y点伤害(/后面为标枪70级时的效果,X等于标枪自身炮击值,Y等于自身雷击值*2,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_txxfeng: '铁血先锋',
                        wuyue_txxfeng_info: 'Z23使用/响应牌时有15%+X%概率发动,直到Z23下回合结束之前,自身炮击值提高百分之100(X等于Z23的等级/6)',
                        wuyue_dmZ23: '弹幕-Z',
                        wuyue_dmZ23_info: '每进行8/4次攻击时,可以选择1/2个目标,对其造成3次X点伤害(/后面70级时的效果,X等于自身炮击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_guishen: '鬼神',
                        wuyue_guishen_info: '凌波使用/响应牌时有15%+X%概率发动,直到下回合结束之前,自身雷击值提高百分之60.(X等于凌波等级/6)',
                        wuyue_dmlingbo: '弹幕-凌波',
                        wuyue_dmlingbo_info: '凌波每进行8次攻击时,可以选择1个目标对其造成3次X点伤害(X等于自身雷击值*2,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_chakanshuxin: '舰娘系统',
                        wuyue_chakanshuxin_info: '',
                        wuyue_Gassing: 'Gassing Breath',
                        wuyue_Gassing_info: '当你累计使用8次牌时,直到下回合结束,你造成的炮击雷击伤害提高15%+X%,每次自身造成伤害后,自身炮击属性提高2%,最多叠加30/40层(/后面为100级之后的效果,X等于自身等级/5)',
                        wuyue_xfzd: '兴奋之毒',
                        wuyue_xfzd_info: '回合开始时,你的机动、雷击属性提高50%,持续至回合结束,随后每回合增加的属性减少百分之2,持续减少至0%',
                        wuyue_dmkaix: '弹幕-凯旋',
                        wuyue_dmkaix_info: '每进行12/6次攻击时,可以选择1个目标对其造成2次X点伤害与一次Y点伤害(/后面为70级后的效果,X等于自身炮击值,Y等于自身雷击值*2,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_cewj: '除恶务尽',
                        wuyue_cewj_info: '回合开始时,自身炮击提高35%,机动提高25%,幸运增加15;且有20%+X%概率,发动一轮弹幕射击,对最多2个目标造成两次Y点伤害.(X等于等级/6,Y等于自身炮击值)',
                        wuyue_dqby: '丹青不渝',
                        wuyue_dqby_info: '自身在战斗中受到的伤害降低25%,若场上有其他东煌阵营角色(该条件暂时失效,因为没有其他东煌角色),自身最大血量提高35%,.',
                        wuyue_dmzhaohe: '弹幕-肇和',
                        wuyue_dmzhaohe_info: '每进行10/5次攻击时,可以选择1个目标对其造成X点伤害(/后面为70级后的效果,X等于自身炮击值*3,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_yypj: '英勇炮击',
                        wuyue_yypj_info: '回合开始时,有35.0%+X%概率发射强力弹幕,对1个目标造成三次Y点伤害(X等于自身等级/5,Y等于自身炮击值)',
                        wuyue_tdwzy: '铁底弯之夜',
                        wuyue_tdwzy_info: '觉醒技:南达科他或者自己在战斗中受到伤害,导致耐久低于35%时触发,自身炮击提高35.0%+X%,承受伤害减少60%+X%,直到自己的下回合结束.如果南达科他在场,令自身与其各回复百分之20+X%的生命值.(X等于自身等级/6)',
                        wuyue_darkness: '无限之darkness',
                        wuyue_darkness_info: '回合开始时,有33.0%+X%的几率触发一次专属弹幕技能,对最多2/4名目标造成1/2次Y点伤害(/后面为70级以后的效果,X等于等级/5,Y等于自身炮击值*2)',
                        wuyue_jnleiji: '鱼雷发射',
                        wuyue_jnleiji_info: '游戏开始,你获得一枚鱼雷,每过两轮,你也可以获得一枚鱼雷,鱼雷最多可以储存两枚,你的回合内,你可以来对一个目标使用一张鱼雷,鱼雷命中后将对目标造成自身雷击值*2点伤害',
                        wuyue_chongyingqijian: '重樱旗舰',
                        wuyue_chongyingqijian_info: '作为玩家/主公时,回合开始阶段,你可以令一个非东煌阵营的舰娘角色炮击,装填,机动提高20.0%.(可以是自己,每名角色限一次)',
                        wuyue_bigsevenying: 'BIG SEVEN樱',
                        wuyue_bigsevenying_info: '进行攻击时,有10%+X%的概率朝自己前方直线发射一轮专属弹幕,对最多1/2个目标造成2~5次Y点伤害(/后面为70级后的效果,X等于自身等级/10,Y等于自身炮击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_pohuaidjxq: '破坏的交响曲',
                        wuyue_pohuaidjxq_info: '当自身受到伤害,或自身回合结束时,触发一轮副炮弹,对最多4名目标造成一次X点伤害,触发后陷入冷却,直到自身回合开始时(X等于自身炮击值)',
                        wuyue_hundundzmq: '混沌的奏鸣曲',
                        wuyue_hundundzmq_info: '转换技,每轮开始时进行切换;奏鸣:提升自身装填30%/60%及机动值30%/60%.混沌:提升自身暴击率25%/50%;(/后面为70级以后的效果)',
                        wuyue_heiandkxq: '黑暗的狂想曲',
                        wuyue_heiandkxq_info: '回合开始时,如果自身剩余血量在50%以上,炮击提升20%+X%;血量在50%以下时,自身受到的伤害降低20%+X%(X等于自身等级/4,效果不可叠加)',
                        wuyue_zhuanyetzs: '专业填装手',
                        wuyue_zhuanyetzs_info: '每进行一次攻击,装填提升2.0%,最多叠加25层;每进行10次攻击后,会切换当前攻击特性:攻:你造成的伤害+20%+X%;守:你造成伤害后回复20%+X%你此次造成伤害量的生命值(X等于等级/10,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_quanfangweizj: '全方位装甲',
                        wuyue_quanfangweizj_info: '每轮开始,生成4个护盾,受到伤害时,你消耗一个护盾,将此次伤害减少50+X点,护盾无法叠加(X等于等级)',
                        wuyue_dmluoen: '弹幕-罗恩',
                        wuyue_dmluoen_info: '罗恩的回合结束时,有30+X%概率触发专属弹幕,对一个目标造成2次Y点伤害(X等于自身等级/5,Y等于自身炮击值)',
                        wuyue_Grinandfire: 'Grin and fire!',
                        wuyue_Grinandfire_info: '自身在战斗中受到的伤害降低10%+X%,你的回合开始时,有50%+X%概率触发一次特殊弹幕,选择一个目标对其造成2次Y点伤害(X等于等级/5,Y等于自身炮击值)',
                        wuyue_cjpowerup: '柴郡PowerUp!',
                        wuyue_cjpowerup_info: '自身受到攻击时,有20%+X%的概率触发,提升自身炮击、机动5%+X%,属性提升效果最高叠加5次(X等于等级/10)',
                        wuyue_dmchaijun: '弹幕-柴郡',
                        wuyue_dmchaijun_info: '每进行12/6次攻击,触发专属弹幕,对目标造成一次X点伤害与一次Y点伤害(/后面为70级后的效果,X等于自身炮击值,Y等于自身雷击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_jinghuoqiangyan: '烬火枪焰',
                        wuyue_jinghuoqiangyan_info: '每轮开始时,触发一轮特殊弹幕,对1个目标造成X点伤害,被特殊弹幕命中的角色下回合摸牌数减-1.(X等于自身航空值*1.5)',
                        wuyue_huanyinqx: '幻影强袭',
                        wuyue_huanyinqx_info: '回合结束时,有50%概率触发,自身在下回合造成的伤害提高35%,触发失败时,发射一轮弹幕,对一个目标造成两次X点伤害(X等于自身航空值*1.5)',
                        wuyue_rongguangzf: '荣光之锋',
                        wuyue_rongguangzf_info: '回合开始时,提升自身填装值,航空值5/10点(最多叠加20次),并回复自身X点生命值(/后面为70级之后的效果,X等于自身航空值)',
                        wuyue_xingluoqibu: '星罗棋布',
                        wuyue_xingluoqibu_info: '回合结束时发射一轮特殊弹幕,对一个目标造成2/3次X点伤害,被弹幕命中后的目标会随机获得一种特效:①若为黑,目标在下回合摸牌数-1,②若为白,目标在下回合造成的伤害降低30%,(/后面为70级之后的效果,X等于自身炮击值)',
                        wuyue_zhamouqiji: '诈谋奇计',
                        wuyue_zhamouqiji_info: '回合开始时发动一轮航空弹幕;对2个目标造成1/2次X点伤害,若有其他东煌阵营角色在场,自身造成的伤害提高20%/40%(/后面为70级之后的效果,X等于自身航空值)',
                        wuyue_shiwuxufa: '鱼雷,矢无虚发!',
                        wuyue_shiwuxufa_info: '自身受到的鱼雷伤害降低20%+X%;若有其他东煌阵营角色在场,你的雷击属性提高20%;每当你造成鱼雷伤害后,直到下回合开始,你增加自身30%的回避率,且减少鱼雷百分之50的冷却时间.(X等于等级/6)',
                        wuyue_qingxieruhuo: '炮火,倾泻如瀑!',
                        wuyue_qingxieruhuo_info: '每回合开始时,有50%+X%概率触发1轮特殊弹幕,对一个目标造成一次Y点伤害与一次Z点伤害.自身受到攻击时,有20%概率触发,自身炮击、防空,雷击属性提高4.0%,最高叠加5/10层(/后面为70级之后的效果,X等于等级/5,Y等于自身炮击值,Z等于自身雷击值.)',
                        wuyue_dmhaeeb: '弹幕-哈尔滨',
                        wuyue_dmhaeeb_info: '每进行12/6次攻击,触发弹幕-哈尔滨,对1个目标造成2/3次X点伤害(/后面为70级之后的效果,X等于自身炮击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_kuaisutianzhuang: '快速填装',
                        wuyue_kuaisutianzhuang_info: '回合开始前,有40%+X%的概率发动,提高自身40%+X%装填,持续至回合结束.(X等于等级/5)',
                        wuyue_yuleilianshe: '鱼雷连射',
                        wuyue_yuleilianshe_info: '每次使用鱼雷时有30%+X%的概率直接完成一次鱼雷冷却.(X等于自身等级/5,每回合限一次)',
                        wuyue_leijizhihui: '雷击指挥',
                        wuyue_leijizhihui_info: '回合开始时,你可以令一个舰娘角色雷击提高20%+X%.(X等于自身等级/5,目标可以是自己,每名角色限一次)',
                        wuyue_dmmuyue: '弹幕-睦月',
                        wuyue_dmmuyue_info: '每进行6/4次攻击,触发弹幕-睦月,对一个目标造成1次X点伤害(/后面为70级之后的效果,X等于自身雷击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_jiejieqizhi: '姐姐气质',
                        wuyue_jiejieqizhi_info: '回合开始时,如果自身体力值>60%-X%,提高自己的炮击、填装40%+X%,持续至下回合开始(X等于自身等级/6)',
                        wuyue_zhqnshuzhihuiqz: '战术指挥',
                        wuyue_zhqnshuzhihuiqz_info: '回合结束时,你可以令最多3个舰娘提高20%+X%机动属性,持续至其回合结束,(X等于自身等级/6,目标可以是自己)',
                        wuyue_dmfulaic: '弹幕-弗莱彻',
                        wuyue_dmfulaic_info: '每进行6/4次攻击,触发弹幕-弗莱彻,对一个目标造成2次X点伤害(/后面为70级之后的效果,X等于自身炮击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_yanwudan: '烟雾弹',
                        wuyue_yanwudan_info: '回合结束时,有25%+X%的概率使用烟雾弹,回避率提高30%,持续至下回合开始.(X等于等级/6)',
                        wuyue_jingjihuibi: '天鹅之舞',
                        wuyue_jingjihuibi_info: '回合开始时,当自己生命值低于30%+X%时,有百分之25+X%概率发动,对一个目标造成总共自身最大生命值/2的伤害(X等于等级/6)',
                        wuyue_jingjihuibi1: '魔神之判决',
                        wuyue_jingjihuibi1_info: '回合开始时,当自己生命值低于85%时,有百分之30概率发动,对在场所有非自身目标随机造成总共自身现有生命值的伤害,触发失败时,增加自身炮击,雷击,填装10点.',
                        wuyue_dmcji: '弹幕-C级',
                        wuyue_dmcji_info: '每进行6次攻击,触发弹幕-C级,对一个目标造成一次X点伤害与一次y点伤害(X等于自身炮击值,Y等于自身雷击值*2)',
                        wuyue_paodanjintong: '炮弹精通',
                        wuyue_paodanjintong_info: '你对目标造成的伤害提高15%+X%(X等于自身等级/6)',
                        wuyue_gaibsddps: '改变时代的炮声',
                        wuyue_gaibsddps_info: '回合开始时,有40%概率发动,你可以令最多3名舰娘提高40%+X%炮击属性,持续至其回合结束(X等于自身等级/6,目标可以是自己)',
                        wuyue_dmafleer: '弹幕-阿芙乐尔',
                        wuyue_dmafleer_info: '每进行12/6次攻击,触发弹幕-阿芙乐尔,对1-2个目标造成2次X点伤害(/后面为70级之后的效果,X等于自身炮击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_Pucelle: 'La Pucelle',
                        wuyue_Pucelle_info: '回合开始时,自身获得2层引燃,每次受到伤害后自身增加2层引燃,场上其他玩家回合结束时,如果自身引燃层数＞0,则自身受到150-X点火焰伤害并减少一层引燃.当自身处于被点燃状态时,自身炮击、雷击、防空、机动提升30%(X等于自身等级/2)',
                        wuyue_shengnvdedg: '圣女的祷告',
                        wuyue_shengnvdedg_info: '回合结束时,你可以令最多3个舰娘获得一层护盾,持续至自身回合开始,当拥有护盾的目标受到伤害时,失去护盾并使该次伤害减少60+X点,回复目标120+X点血量(X等于等级*3)',
                        wuyue_dmsnvsd: '弹幕-圣女贞德',
                        wuyue_dmsnvsd_info: '每进行14/7次攻击,触发弹幕-圣女贞德,对1个目标造成2次X点伤害与1次Y点伤害(/后面为70级之后的效果,X等于自身炮击值,Y等于自身雷击值,攻击特指使用非装备牌与非治疗牌)',
                        wuyue_mingyunzhisai: '命运之骰',
                        wuyue_mingyunzhisai_info: '回合开始时,流星、彗星、彩云三种特效分别有30%+X%概率触发.彩云:自身在回合结束之前造成的伤害提高25%,彗星:对一个目标造成800点伤害,流星:对最多1-8个目标造成3次Y点伤害.(Y等于自身航空值*1.5,X等于自身等级/12)',
                        wuyue_mingyunzhisai1: '命运之骰',
                        wuyue_mingyunzhisai1_info: '回合开始时,流星、彗星、彩云三种特效分别有30%+X%概率触发.彩云:自身在回合结束之前造成的伤害提高25%,彗星:对一个目标造成800点伤害,流星:对最多1-8个目标造成3次Y点伤害.(Y等于自身航空值*1.5,X等于自身等级/12)',
                        wuyue_zhongzhuanghangmu: '重樱装母',
                        wuyue_zhongzhuanghangmu_info: '自身受到的非鱼雷伤害降低25%+X%,自身受到的鱼雷伤害增加25%-X%(X等于自身等级/8)',
                    },
                    skill: {
                        wuyue_slmdzs: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.hasSkill('wuyue_slmdzs_mark') && !player.hasSkill('wuyue_slmdzs_mark1');
                            },
                            content() {
                                var l = lib.config.wuyue_lafei;
                                event.num = Math.random();
                                if (event.num <= l / 6 / 100 + 0.15) {
                                    player.addSkill('wuyue_slmdzs_mark1');
                                    player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 1.4;
                                    player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.4;
                                    player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi * 1.4;
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('所罗门的战神');
                                } else {
                                    var num = [1, 2, 3, 4, 5].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    if (num >= 2) event.finish();
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    content() {
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / 1.4;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / 1.4;
                                        player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi / 1.4;
                                        player.removeSkill('wuyue_slmdzs_mark');
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBegin'],
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('wuyue_slmdzs_mark');
                                    },
                                    content() {
                                        player.addSkill('wuyue_slmdzs_mark');
                                        player.removeSkill('wuyue_slmdzs_mark1');
                                    },
                                },
                            },
                        },
                        wuyue_dmlafei: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmlafei = 0;
                                player.markSkill('wuyue_dmlafei');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_lafei;
                                var dm = player.storage.wuyue_dmlafei;
                                if (l >= 70) {
                                    if (dm < 5) {
                                        player.storage.wuyue_dmlafei += 1;
                                        player.markSkill('wuyue_dmlafei');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmlafei'), [1, 2], function (card, player, target) {
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
                                } else {
                                    if (dm < 10) {
                                        player.storage.wuyue_dmlafei += 1;
                                        player.markSkill('wuyue_dmlafei');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmlafei'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmlafei = 0;
                                    player.markSkill('wuyue_dmlafei');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_lafei;
                                        if (l >= 70) {
                                            var num = [1, 2].randomGet();
                                            if (num == 1) {
                                                result.targets[i].damage('yuleiji');
                                                result.targets[i].damage('yuleiji');
                                            }
                                            if (num == 2) {
                                                result.targets[i].damage('yuleiji');
                                                result.targets[i].damage();
                                                result.targets[i].damage();
                                            }
                                        } else {
                                            var num = [1, 2, 3].randomGet();
                                            if (num == 1) {
                                                result.targets[i].damage('yuleiji');
                                            }
                                            if (num == 2) {
                                                result.targets[i].damage('yuleiji');
                                                result.targets[i].damage();
                                            }
                                            if (num == 3) {
                                                result.targets[i].damage('yuleiji');
                                                result.targets[i].damage();
                                                result.targets[i].damage();
                                            }
                                        }
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
                        },
                        wuyue_bqtxi: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.hasSkill('wuyue_bqtxi_mark') && !player.hasSkill('wuyue_bqtxi_mark1');
                            },
                            content() {
                                var l = lib.config.wuyue_biaoqiang;
                                event.num = Math.random();
                                if (event.num <= l / 6 / 100 + 0.15) {
                                    player.addSkill('wuyue_bqtxi_mark1');
                                    player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.6;
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('标枪突袭');
                                } else {
                                    var num = [1, 2, 3, 4, 5].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    if (num >= 2) event.finish();
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    content() {
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / 1.6;
                                        player.removeSkill('wuyue_bqtxi_mark');
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBegin'],
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('wuyue_bqtxi_mark');
                                    },
                                    content() {
                                        player.addSkill('wuyue_bqtxi_mark');
                                        player.removeSkill('wuyue_bqtxi_mark1');
                                    },
                                },
                            },
                        },
                        wuyue_dmbiaoqiang: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmbiaoqiang = 0;
                                player.markSkill('wuyue_dmbiaoqiang');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_biaoqiang;
                                var dm = player.storage.wuyue_dmbiaoqiang;
                                if (l >= 70) {
                                    if (dm < 5) {
                                        player.storage.wuyue_dmbiaoqiang += 1;
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmbiaoqiang'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 10) {
                                        player.storage.wuyue_dmbiaoqiang += 1;
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmbiaoqiang'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmbiaoqiang = 0;
                                    player.markSkill('wuyue_dmbiaoqiang');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_biaoqiang;
                                        if (l >= 70) {
                                            result.targets[i].damage();
                                            result.targets[i].damage('yuleiji');
                                            result.targets[i].damage('yuleiji');
                                        } else {
                                            result.targets[i].damage('yuleiji');
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
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
                        },
                        wuyue_txxfeng: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.hasSkill('wuyue_txxfeng_mark') && !player.hasSkill('wuyue_txxfeng_mark1');
                            },
                            content() {
                                var l = lib.config.wuyue_z23;
                                event.num = Math.random();
                                if (event.num <= l / 6 / 100 + 0.15) {
                                    player.addSkill('wuyue_txxfeng_mark1');
                                    player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 2;
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('铁血先锋');
                                } else {
                                    var num = [1, 2, 3, 4, 5].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    if (num >= 2) event.finish();
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    content() {
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / 2;
                                        player.removeSkill('wuyue_txxfeng_mark');
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBegin'],
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('wuyue_txxfeng_mark');
                                    },
                                    content() {
                                        player.addSkill('wuyue_txxfeng_mark');
                                        player.removeSkill('wuyue_txxfeng_mark1');
                                    },
                                },
                            },
                        },
                        wuyue_dmZ23: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmZ23 = 0;
                                player.markSkill('wuyue_dmZ23');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_z23;
                                var dm = player.storage.wuyue_dmZ23;
                                if (l >= 70) {
                                    if (dm < 4) {
                                        player.storage.wuyue_dmZ23 += 1;
                                        player.markSkill('wuyue_dmZ23');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmZ23'), [1, 2], function (card, player, target) {
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
                                } else {
                                    if (dm < 8) {
                                        player.storage.wuyue_dmZ23 += 1;
                                        player.markSkill('wuyue_dmZ23');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmZ23'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmZ23 = 0;
                                    player.markSkill('wuyue_dmZ23');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_guishen: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.hasSkill('wuyue_guishen_mark') && !player.hasSkill('wuyue_guishen_mark1');
                            },
                            content() {
                                var l = lib.config.wuyue_lingbo;
                                event.num = Math.random();
                                if (event.num <= l / 6 / 100 + 0.15) {
                                    player.addSkill('wuyue_guishen_mark1');
                                    player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi * 1.6;
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('鬼神');
                                } else {
                                    var num = [1, 2, 3, 4, 5].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    if (num >= 2) event.finish();
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    content() {
                                        player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi / 1.6;
                                        player.removeSkill('wuyue_guishen_mark');
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBegin'],
                                    },
                                    filter(event, player) {
                                        return !player.hasSkill('wuyue_guishen_mark');
                                    },
                                    content() {
                                        player.addSkill('wuyue_guishen_mark');
                                        player.removeSkill('wuyue_guishen_mark1');
                                    },
                                },
                            },
                        },
                        wuyue_dmlingbo: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmlingbo = 0;
                                player.markSkill('wuyue_dmlingbo');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_lingbo;
                                var dm = player.storage.wuyue_dmlingbo;
                                if (dm < 10) {
                                    player.storage.wuyue_dmlingbo += 1;
                                    player.markSkill('wuyue_dmlingbo');
                                } else {
                                    player
                                        .chooseTarget(get.prompt('wuyue_dmlingbo'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmlingbo = 0;
                                    player.markSkill('wuyue_dmlingbo');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage('yuleiji');
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
                        },
                        wuyue_chakanshuxin: {
                            enable: 'phaseUse',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm');
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('wuyue_jianniangdengji')) {
                                    var p = player.storage.wuyue_paojizhi;
                                    var t = player.storage.wuyue_tianzhuangzhi;
                                    var f = player.storage.wuyue_fangkongzhi;
                                    var l = player.storage.wuyue_leijizhi;
                                    var j = player.storage.wuyue_jidongzhi;
                                    var x = player.storage.wuyue_xingyunzhi;
                                    var Exp = player.storage.wuyue_jianniangdengji;
                                    var xp = player.storage.wuyue_jianniangExp;
                                    var list = [];
                                    list.push('提升等级');
                                    list.push('舰娘唤醒');
                                    list.push('十连唤醒');
                                    if (lib.config.Mingyun > 100) list.push('命运兑换');
                                    // list.push('重置等级');
                                    list.push('取消');
                                    player.chooseControl
                                        .apply(player, list)
                                        .set('choiceList', ['<br>&nbsp;<span style="color: #ffa042">炮击:</span>' + p + '点(炮击值能提升对其他舰娘造成的普通伤害)<br>&nbsp;<span style="color: #ffa042">雷击:</span>' + l + '点(雷击值能增加对目标舰娘造成雷击伤害)<br>&nbsp;<span style="color: #ffa042">防空:</span>' + f + '点(防空值能减少自身受到的航空伤害)<br>&nbsp;<span style="color: #ffa042">机动:</span>' + j + '点(机动值能增加舰娘闪避率,回复体力,且减少受到非舰娘单位造成的伤害)<br>&nbsp;<span style="color: #ffa042">填装:</span>' + t + '点(填装能提升舰娘摸牌数与每回合攻击次数,也会增加最大手牌数)<br>&nbsp;<span style="color: #ffff93">幸运:</span>' + x + '点(幸运能增加舰娘暴击率(暴击能造成双倍伤害))'])
                                        .set('prompt', player.node.name.innerHTML + '<br>&nbsp;<span style="color: #ffd306">等级:</span>' + Exp + '<br>&nbsp;经验值:' + xp)
                                        .set('ai', function () {
                                            return 1;
                                        });
                                } else {
                                    var h = player.storage.wuyue_hangkongzhi;
                                    var f = player.storage.wuyue_fangkongzhi;
                                    var p = player.storage.wuyue_paojizhi;
                                    var t = player.storage.wuyue_tianzhuangzhi;
                                    var j = player.storage.wuyue_jidongzhi;
                                    var x = player.storage.wuyue_xingyunzhi;
                                    var Exp = player.storage.wuyue_jianniangdengjihm;
                                    var xp = player.storage.wuyue_jianniangExp;
                                    var list = [];
                                    list.push('提升等级');
                                    list.push('舰娘唤醒');
                                    list.push('十连唤醒');
                                    if (lib.config.Mingyun > 100) list.push('命运兑换');
                                    //list.push('重置等级');
                                    list.push('取消');
                                    player.chooseControl
                                        .apply(player, list)
                                        .set('choiceList', ['<br>&nbsp;<span style="color: #ffa042">航空:</span>' + h + '点(航空值能提升航母/轻母对其他舰娘造成的普通伤害)<br>&nbsp;<span style="color: #ffa042">防空:</span>' + f + '点(防空值能减少自身受到的航空伤害)<br>&nbsp;<span style="color: #ffa042">炮击:</span>' + p + '点(炮击值能提升对其他舰娘造成的炮击伤害)<br>&nbsp;<span style="color: #ffa042">机动:</span>' + j + '点(机动值能增加舰娘闪避率,回复体力,且减少受到非舰娘单位造成的伤害)<br>&nbsp;<span style="color: #ffa042">填装:</span>' + t + '点(填装能提升舰娘摸牌数与每回合攻击次数,也会增加最大手牌数)<br>&nbsp;<span style="color: #ffff93">幸运:</span>' + x + '点(幸运能增加舰娘暴击率(暴击能造成双倍伤害))'])
                                        .set('prompt', player.node.name.innerHTML + '<br>&nbsp;<span style="color: #ffd306">等级:</span>' + Exp + '<br>&nbsp;经验值:' + xp)
                                        .set('ai', function () {
                                            return 1;
                                        });
                                }
                                ('step 1');
                                if (result.control == '提升等级') {
                                    var Exp = player.storage.wuyue_jianniangdengji;
                                    var Exp1 = player.storage.wuyue_jianniangdengjihm;
                                    var xp = player.storage.wuyue_jianniangExp;
                                    var p = lib.config.wuyueExp;
                                    if (player.hasSkill('wuyue_jianniangdengji')) {
                                        if (p >= Exp * 200 && Exp < 70) {
                                            player.storage.wuyue_jianniangExp -= Exp * 200;
                                            game.saveConfig('wuyueExp', lib.config.wuyueExp - Exp * 200);
                                            player.storage.wuyue_jianniangdengji += 1;
                                            player.markSkill('wuyue_jianniangExp');
                                            player.markSkill('wuyue_jianniangdengji');
                                            if (player.name == 'wuyue_lafei') {
                                                game.saveConfig('wuyue_lafei', lib.config.wuyue_lafei + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_biaoqiang') {
                                                game.saveConfig('wuyue_biaoqiang', lib.config.wuyue_biaoqiang + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_z23') {
                                                game.saveConfig('wuyue_z23', lib.config.wuyue_z23 + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_lingbo') {
                                                game.saveConfig('wuyue_lingbo', lib.config.wuyue_lingbo + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_yingrui') {
                                                game.saveConfig('wuyue_yingrui', lib.config.wuyue_yingrui + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_edu') {
                                                game.saveConfig('wuyue_edu', lib.config.wuyue_edu + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_huashengdun') {
                                                game.saveConfig('wuyue_huashengdun', lib.config.wuyue_huashengdun + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_changmeng') {
                                                game.saveConfig('wuyue_changmeng', lib.config.wuyue_changmeng + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_luoen') {
                                                game.saveConfig('wuyue_luoen', lib.config.wuyue_luoen + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_chaijun') {
                                                game.saveConfig('wuyue_chaijun', lib.config.wuyue_chaijun + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_ftldadi') {
                                                game.saveConfig('wuyue_ftldadi', lib.config.wuyue_ftldadi + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_kongbu') {
                                                game.saveConfig('wuyue_kongbu', lib.config.wuyue_kongbu + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_heianjie') {
                                                game.saveConfig('wuyue_heianjie', lib.config.wuyue_heianjie + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_ruyue') {
                                                game.saveConfig('wuyue_ruyue', lib.config.wuyue_ruyue + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_muyue') {
                                                game.saveConfig('wuyue_muyue', lib.config.wuyue_muyue + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_fulaiche') {
                                                game.saveConfig('wuyue_fulaiche', lib.config.wuyue_fulaiche + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_bingjiang') {
                                                game.saveConfig('wuyue_bingjiang', lib.config.wuyue_bingjiang + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_xinyue') {
                                                game.saveConfig('wuyue_xinyue', lib.config.wuyue_xinyue + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_aolike') {
                                                game.saveConfig('wuyue_aolike', lib.config.wuyue_aolike + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_fute') {
                                                game.saveConfig('wuyue_fute', lib.config.wuyue_fute + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_z20') {
                                                game.saveConfig('wuyue_z20', lib.config.wuyue_z20 + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_z21') {
                                                game.saveConfig('wuyue_z21', lib.config.wuyue_z21 + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_shengnvzhende') {
                                                game.saveConfig('wuyue_shengnvzhende', lib.config.wuyue_shengnvzhende + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_afuleer') {
                                                game.saveConfig('wuyue_afuleer', lib.config.wuyue_afuleer + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                        } else {
                                            game.Blhxts('升级失败,经验值少于' + Exp * 200 + '点');
                                        }
                                    } else {
                                        if (p >= Exp1 * 200 && Exp1 < 70) {
                                            player.storage.wuyue_jianniangExp -= Exp1 * 200;
                                            game.saveConfig('wuyueExp', lib.config.wuyueExp - Exp1 * 200);
                                            player.storage.wuyue_jianniangdengjihm += 1;
                                            player.markSkill('wuyue_jianniangExp');
                                            player.markSkill('wuyue_jianniangdengjihm');
                                            if (player.name == 'wuyue_blackfangzhou') {
                                                game.saveConfig('wuyue_blackfangzhou', lib.config.wuyue_blackfangzhou + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_zhenhai') {
                                                game.saveConfig('wuyue_zhenhai', lib.config.wuyue_zhenhai + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                            if (player.name == 'wuyue_dafeng') {
                                                game.saveConfig('wuyue_dafeng', lib.config.wuyue_dafeng + 1);
                                                game.Blhxts('升级成功,舰娘等级+1,重启游戏后生效');
                                                game.Blanbf(player.name + 'jn');
                                            }
                                        } else {
                                            game.Blhxts('升级失败,经验值少于' + Exp1 * 200 + '点');
                                        }
                                    }
                                    event.finish();
                                }
                                if (result.control == '重置等级') {
                                    game.saveConfig('wuyue_yingrui', (lib.config.wuyue_yingrui = 0));
                                    game.saveConfig('wuyue_edu', (lib.config.wuyue_edu = 0));
                                    game.saveConfig('wuyue_huashengdun', (lib.config.wuyue_huashengdun = 0));
                                    game.saveConfig('wuyue_heianjie', (lib.config.wuyue_heianjie = 0));
                                    game.saveConfig('wuyue_changmeng', (lib.config.wuyue_changmeng = 0));
                                    game.saveConfig('wuyue_luoen', (lib.config.wuyue_luoen = 0));
                                    game.saveConfig('wuyue_chaijun', (lib.config.wuyue_chaijun = 0));
                                    game.saveConfig('wuyue_ftldadi', (lib.config.wuyue_ftldadi = 0));
                                    game.saveConfig('wuyue_zhenhai', (lib.config.wuyue_zhenhai = 0));
                                    game.saveConfig('wuyue_bingjiang', (lib.config.wuyue_bingjiang = 0));
                                    game.saveConfig('wuyue_blackfangzhou', (lib.config.wuyue_blackfangzhou = 0));
                                    game.Blhxts('重置成功');
                                    event.finish();
                                }
                                if (result.control == '舰娘唤醒') {
                                    var p = lib.config.wuyueExp;
                                    if (p >= 200) {
                                        event.num = 1;
                                        event.goto(8);
                                    } else {
                                        game.Blhxts('唤醒失败,你的经验值少于200');
                                        event.finish();
                                    }
                                }
                                if (result.control == '十连唤醒') {
                                    var p = lib.config.wuyueExp;
                                    if (p >= 2000) {
                                        event.num = 10;
                                        event.goto(8);
                                    } else {
                                        game.Blhxts('唤醒失败,你的经验值少于2000');
                                        event.finish();
                                    }
                                }
                                if (result.control == '命运兑换') {
                                    event.goto(5);
                                }
                                if (result.control == '取消') {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.card.length) {
                                    game.me
                                        .chooseButton(true)
                                        .set('ai', function (button) {
                                            return get.rank(button.link, true) - lib.character[button.link][2];
                                        })
                                        .set('createDialog', ['恭喜你唤醒了舰娘,点击以下舰娘领取', [event.card, 'character']]);
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    if (result.links[0] == 'wuyue_yingrui') game.saveConfig('wuyue_yingrui', lib.config.wuyue_yingrui + 1);
                                    if (result.links[0] == 'wuyue_edu') game.saveConfig('wuyue_edu', lib.config.wuyue_edu + 1);
                                    if (result.links[0] == 'wuyue_huashengdun') game.saveConfig('wuyue_huashengdun', lib.config.wuyue_huashengdun + 1);
                                    if (result.links[0] == 'wuyue_heianjie') game.saveConfig('wuyue_heianjie', lib.config.wuyue_heianjie + 1);
                                    if (result.links[0] == 'wuyue_changmeng') game.saveConfig('wuyue_changmeng', lib.config.wuyue_changmeng + 1);
                                    if (result.links[0] == 'wuyue_luoen') game.saveConfig('wuyue_luoen', lib.config.wuyue_luoen + 1);
                                    if (result.links[0] == 'wuyue_chaijun') game.saveConfig('wuyue_chaijun', lib.config.wuyue_chaijun + 1);
                                    if (result.links[0] == 'wuyue_ftldadi') game.saveConfig('wuyue_ftldadi', lib.config.wuyue_ftldadi + 1);
                                    if (result.links[0] == 'wuyue_zhenhai') game.saveConfig('wuyue_zhenhai', lib.config.wuyue_zhenhai + 1);
                                    if (result.links[0] == 'wuyue_bingjiang') game.saveConfig('wuyue_bingjiang', lib.config.wuyue_bingjiang + 1);
                                    if (result.links[0] == 'wuyue_fulaiche') game.saveConfig('wuyue_fulaiche', lib.config.wuyue_fulaiche + 1);
                                    if (result.links[0] == 'wuyue_muyue') game.saveConfig('wuyue_muyue', lib.config.wuyue_muyue + 1);
                                    if (result.links[0] == 'wuyue_ruyue') game.saveConfig('wuyue_ruyue', lib.config.wuyue_ruyue + 1);
                                    if (result.links[0] == 'wuyue_kongbu') game.saveConfig('wuyue_kongbu', lib.config.wuyue_kongbu + 1);
                                    if (result.links[0] == 'wuyue_xinyue') game.saveConfig('wuyue_xinyue', lib.config.wuyue_xinyue + 1);
                                    if (result.links[0] == 'wuyue_aolike') game.saveConfig('wuyue_aolike', lib.config.wuyue_aolike + 1);
                                    if (result.links[0] == 'wuyue_fute') game.saveConfig('wuyue_fute', lib.config.wuyue_fute + 1);
                                    if (result.links[0] == 'wuyue_z20') game.saveConfig('wuyue_z20', lib.config.wuyue_z20 + 1);
                                    if (result.links[0] == 'wuyue_z21') game.saveConfig('wuyue_z21', lib.config.wuyue_z21 + 1);
                                    if (result.links[0] == 'wuyue_dafeng') game.saveConfig('wuyue_dafeng', lib.config.wuyue_dafeng + 1);
                                    if (result.links[0] == 'wuyue_shengnvzhende') game.saveConfig('wuyue_shengnvzhende', lib.config.wuyue_shengnvzhende + 1);
                                    if (result.links[0] == 'wuyue_afuleer') game.saveConfig('wuyue_afuleer', lib.config.wuyue_afuleer + 1);
                                    player.storage.wuyue_jianniangExp -= 200;
                                    game.saveConfig('wuyueExp', lib.config.wuyueExp - 200);
                                    player.markSkill('wuyue_jianniangExp');
                                    game.Blhxts('恭喜你解锁了新舰娘,重启后生效');
                                    event.num--;
                                    if (event.num >= 1) event.goto(8);
                                }
                                ('step 4');
                                event.finish();
                                ('step 5');
                                game.me
                                    .chooseControl('100点', '1000点', '10000点', '不兑换了', function () {
                                        if (result.control == '100点') return -10;
                                        if (result.control == '1000点') return -10;
                                        if (result.control == '10000点') return -10;
                                        if (result.control == '不兑换了') return 10;
                                    })
                                    .set('prompt', '请选择你要兑换的命运值数量.(ps:1命运值可以兑换10点经验值)');
                                ('step 6');
                                if (result.control == '100点') {
                                    if (lib.config.Mingyun >= 100) {
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 100);
                                        player.storage.wuyue_jianniangExp += 1000;
                                        game.saveConfig('wuyueExp', lib.config.wuyueExp + 1000);
                                        player.markSkill('wuyue_jianniangExp');
                                        game.Blhxts('命运值兑换成功');
                                    } else {
                                        game.Blhxts('兑换失败,命运值不足');
                                        event.finish();
                                    }
                                }
                                if (result.control == '1000点') {
                                    if (lib.config.Mingyun >= 1000) {
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 1000);
                                        player.storage.wuyue_jianniangExp += 10000;
                                        game.saveConfig('wuyueExp', lib.config.wuyueExp + 10000);
                                        player.markSkill('wuyue_jianniangExp');
                                        game.Blhxts('命运值兑换成功');
                                    } else {
                                        game.Blhxts('兑换失败,命运值不足');
                                        event.finish();
                                    }
                                }
                                if (result.control == '10000点') {
                                    if (lib.config.Mingyun >= 10000) {
                                        game.saveConfig('Mingyun', lib.config.Mingyun - 10000);
                                        player.storage.wuyue_jianniangExp += 100000;
                                        game.saveConfig('wuyueExp', lib.config.wuyueExp + 100000);
                                        player.markSkill('wuyue_jianniangExp');
                                        game.Blhxts('命运值兑换成功');
                                    } else {
                                        game.Blhxts('兑换失败,命运值不足');
                                        event.finish();
                                    }
                                }
                                ('step 7');
                                event.finish();
                                ('step 8');
                                var list = [];
                                if (lib.config.wuyue_yingrui < 1) list.push('wuyue_yingrui');
                                if (lib.config.wuyue_edu < 1) list.push('wuyue_edu');
                                if (lib.config.wuyue_huashengdun < 1) list.push('wuyue_huashengdun');
                                if (lib.config.wuyue_heianjie < 1) list.push('wuyue_heianjie');
                                if (lib.config.wuyue_changmeng < 1) list.push('wuyue_changmeng');
                                if (lib.config.wuyue_luoen < 1) list.push('wuyue_luoen');
                                if (lib.config.wuyue_chaijun < 1) list.push('wuyue_chaijun');
                                if (lib.config.wuyue_ftldadi < 1) list.push('wuyue_ftldadi');
                                if (lib.config.wuyue_zhenhai < 1) list.push('wuyue_zhenhai');
                                if (lib.config.wuyue_bingjiang < 1) list.push('wuyue_bingjiang');
                                if (lib.config.wuyue_kongbu < 1) list.push('wuyue_kongbu');
                                if (lib.config.wuyue_ruyue < 1) list.push('wuyue_ruyue');
                                if (lib.config.wuyue_muyue < 1) list.push('wuyue_muyue');
                                if (lib.config.wuyue_fulaiche < 1) list.push('wuyue_fulaiche');
                                if (lib.config.wuyue_xinyue < 1) list.push('wuyue_xinyue');
                                if (lib.config.wuyue_aolike < 1) list.push('wuyue_aolike');
                                if (lib.config.wuyue_fute < 1) list.push('wuyue_fute');
                                if (lib.config.wuyue_z20 < 1) list.push('wuyue_z20');
                                if (lib.config.wuyue_z21 < 1) list.push('wuyue_z21');
                                if (lib.config.wuyue_dafeng < 1) list.push('wuyue_dafeng');
                                if (lib.config.wuyue_shengnvzhende < 1) list.push('wuyue_shengnvzhende');
                                if (lib.config.wuyue_afuleer < 1) list.push('wuyue_afuleer');
                                event.card = list.randomGets(1);
                                event.n = Math.random();
                                if (event.n <= 0.05) {
                                    event.goto(2);
                                } else {
                                    event.goto(9);
                                }
                                ('step 9');
                                player.storage.wuyue_jianniangExp -= 200;
                                game.saveConfig('wuyueExp', lib.config.wuyueExp - 200);
                                player.markSkill('wuyue_jianniangExp');
                                game.Blhxts1('真遗憾,你什么都没有唤醒');
                                ('step 10');
                                event.num--;
                                if (event.num >= 1) event.goto(8);
                            },
                        },
                        wuyue_paojizhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '炮',
                            init(player) {
                                player.storage.wuyue_paojizhi = 0;
                                player.markSkill('wuyue_paojizhi');
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - 9;
                                },
                                cardname(card, player) {
                                    if (card.name == 'baiyin') return 'tao';
                                },
                            },
                        },
                        wuyue_leijizhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '雷',
                            init(player) {
                                player.storage.wuyue_leijizhi = 0;
                                player.markSkill('wuyue_leijizhi');
                            },
                        },
                        wuyue_xingyunzhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '幸运',
                            init(player) {
                                player.storage.wuyue_xingyunzhi = 0;
                                player.markSkill('wuyue_xingyunzhi');
                            },
                        },
                        wuyue_jianniangleibie: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '类别',
                            init(player) {
                                ///驱逐,轻巡,重巡/重炮,超巡/战巡,战列,轻母,航母,维修,潜艇
                                ///1 ,2,3,4,5,6,7,8,9
                                player.storage.wuyue_jianniangleibie = 0;
                                player.markSkill('wuyue_jianniangleibie');
                            },
                            trigger: {
                                global: ['roundStart', 'phaseBegin'],
                            },
                            filter(event, player) {
                                return player.storage.wuyue_jianniangleibie > 0;
                            },
                            content() {
                                var pl = player.storage.wuyue_jianniangdengji;
                                var hm = player.storage.wuyue_jianniangdengjihm;
                                if (player.storage.wuyue_jianniangleibie == 1) {
                                    player.maxHp = player.maxHp + pl * 15;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 2) {
                                    player.maxHp = player.maxHp + pl * 18;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 3) {
                                    player.maxHp = player.maxHp + pl * 21;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 4) {
                                    player.maxHp = player.maxHp + pl * 24;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 5) {
                                    player.maxHp = player.maxHp + pl * 28;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 6) {
                                    player.maxHp = player.maxHp + hm * 19;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 7) {
                                    player.maxHp = player.maxHp + hm * 26;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 8) {
                                    player.maxHp = player.maxHp + pl * 13;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                                if (player.storage.wuyue_jianniangleibie == 9) {
                                    player.maxHp = player.maxHp + pl * 5;
                                    player.hp = player.maxHp;
                                    player.storage.wuyue_jianniangleibie = 0;
                                }
                            },
                        },
                        wuyue_wuyuefuli: {
                            audio: 'ext:碧蓝航线/audio:2',
                            trigger: {
                                global: 'gameStart',
                            },
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            filter(event, player) {
                                return lib.config.wuyuefuli != 1;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (lib.config.wuyue_yingrui < 1) list.push('wuyue_yingrui');
                                if (lib.config.wuyue_edu < 1) list.push('wuyue_edu');
                                if (lib.config.wuyue_huashengdun < 1) list.push('wuyue_huashengdun');
                                if (lib.config.wuyue_heianjie < 1) list.push('wuyue_heianjie');
                                if (lib.config.wuyue_changmeng < 1) list.push('wuyue_changmeng');
                                if (lib.config.wuyue_luoen < 1) list.push('wuyue_luoen');
                                if (lib.config.wuyue_chaijun < 1) list.push('wuyue_chaijun');
                                if (lib.config.wuyue_zhenhai < 1) list.push('wuyue_zhenhai');
                                if (lib.config.wuyue_bingjiang < 1) list.push('wuyue_bingjiang');
                                if (lib.config.wuyue_kongbu < 1) list.push('wuyue_kongbu');
                                if (lib.config.wuyue_ruyue < 1) list.push('wuyue_ruyue');
                                if (lib.config.wuyue_muyue < 1) list.push('wuyue_muyue');
                                if (lib.config.wuyue_fulaiche < 1) list.push('wuyue_fulaiche');
                                event.card = list.randomGets(10);
                                ('step 1');
                                if (event.card.length) {
                                    game.me
                                        .chooseButton(true)
                                        .set('ai', function (button) {
                                            return get.rank(button.link, true) - lib.character[button.link][2];
                                        })
                                        .set('createDialog', ['<br>&nbsp;<span style="color: #ffd306">感谢安装碧蓝航线扩展,作为萌新福利,选择一个喜欢的舰娘领取吧~!</span>', [event.card, 'character']]);
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    if (result.links[0] == 'wuyue_yingrui') game.saveConfig('wuyue_yingrui', lib.config.wuyue_yingrui + 1);
                                    if (result.links[0] == 'wuyue_edu') game.saveConfig('wuyue_edu', lib.config.wuyue_edu + 1);
                                    if (result.links[0] == 'wuyue_huashengdun') game.saveConfig('wuyue_huashengdun', lib.config.wuyue_huashengdun + 1);
                                    if (result.links[0] == 'wuyue_heianjie') game.saveConfig('wuyue_heianjie', lib.config.wuyue_heianjie + 1);
                                    if (result.links[0] == 'wuyue_changmeng') game.saveConfig('wuyue_changmeng', lib.config.wuyue_changmeng + 1);
                                    if (result.links[0] == 'wuyue_luoen') game.saveConfig('wuyue_luoen', lib.config.wuyue_luoen + 1);
                                    if (result.links[0] == 'wuyue_chaijun') game.saveConfig('wuyue_chaijun', lib.config.wuyue_chaijun + 1);
                                    if (result.links[0] == 'wuyue_ftldadi') game.saveConfig('wuyue_ftldadi', lib.config.wuyue_ftldadi + 1);
                                    if (result.links[0] == 'wuyue_zhenhai') game.saveConfig('wuyue_zhenhai', lib.config.wuyue_zhenhai + 1);
                                    if (result.links[0] == 'wuyue_bingjiang') game.saveConfig('wuyue_bingjiang', lib.config.wuyue_bingjiang + 1);
                                    if (result.links[0] == 'wuyue_fulaiche') game.saveConfig('wuyue_fulaiche', lib.config.wuyue_fulaiche + 1);
                                    if (result.links[0] == 'wuyue_muyue') game.saveConfig('wuyue_muyue', lib.config.wuyue_muyue + 1);
                                    if (result.links[0] == 'wuyue_ruyue') game.saveConfig('wuyue_ruyue', lib.config.wuyue_ruyue + 1);
                                    if (result.links[0] == 'wuyue_kongbu') game.saveConfig('wuyue_kongbu', lib.config.wuyue_kongbu + 1);
                                    if (result.links[0] == 'wuyue_xinyue') game.saveConfig('wuyue_xinyue', lib.config.wuyue_xinyue + 1);
                                    if (result.links[0] == 'wuyue_aolike') game.saveConfig('wuyue_aolike', lib.config.wuyue_aolike + 1);
                                    if (result.links[0] == 'wuyue_fute') game.saveConfig('wuyue_fute', lib.config.wuyue_fute + 1);
                                    if (result.links[0] == 'wuyue_z20') game.saveConfig('wuyue_z20', lib.config.wuyue_z20 + 1);
                                    if (result.links[0] == 'wuyue_z21') game.saveConfig('wuyue_z21', lib.config.wuyue_z21 + 1);
                                    if (result.links[0] == 'wuyue_dafeng') game.saveConfig('wuyue_dafeng', lib.config.wuyue_dafeng + 1);
                                    if (result.links[0] == 'wuyue_shengnvzhende') game.saveConfig('wuyue_shengnvzhende', lib.config.wuyue_shengnvzhende + 1);
                                    if (result.links[0] == 'wuyue_afuleer') game.saveConfig('wuyue_afuleer', lib.config.wuyue_afuleer + 1);
                                    game.Blhxts('恭喜你领取了萌新福利,并且附送你10000经验值,请用来唤醒其他舰娘吧(重启后生效)');
                                    game.saveConfig('wuyuefuli', (lib.config.wuyuefuli = 1));
                                    game.saveConfig('wuyueExp', (lib.config.wuyueExp = 10000));
                                }
                            },
                        },
                        wuyue_jianniangdengji: {
                            audio: 'ext:碧蓝航线/audio:2',
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '级别',
                            init(player) {
                                player.storage.wuyue_jianniangdengji = 0;
                                player.markSkill('wuyue_jianniangdengji');
                            },
                        },
                        wuyue_jianniangBoss: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: 'b',
                            init(player) {
                                player.storage.wuyue_jianniangBoss = 0;
                                player.markSkill('wuyue_jianniangBoss');
                            },
                        },
                        wuyue_jianniangdengjihm: {
                            audio: 'ext:碧蓝航线/audio:2',
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '航母',
                            init(player) {
                                player.storage.wuyue_jianniangdengjihm = 0;
                                player.markSkill('wuyue_jianniangdengjihm');
                            },
                        },
                        wuyue_jianniangExp: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '经验',
                            init(player) {
                                player.storage.wuyue_jianniangExp = 0;
                                player.markSkill('wuyue_jianniangExp');
                            },
                        },
                        wuyue_baojizhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '暴击',
                            init(player) {
                                player.storage.wuyue_baojizhi = 0;
                                player.markSkill('wuyue_baojizhi');
                            },
                        },
                        wuyue_shanbizhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '闪避',
                            init(player) {
                                player.storage.wuyue_shanbizhi = 0;
                                player.markSkill('wuyue_shanbizhi');
                            },
                        },
                        wuyue_jidongzhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '机',
                            init(player) {
                                player.storage.wuyue_jidongzhi = 0;
                                player.markSkill('wuyue_jidongzhi');
                            },
                        },
                        wuyue_hangkongzhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '航空',
                            init(player) {
                                player.storage.wuyue_hangkongzhi = 0;
                                player.markSkill('wuyue_hangkongzhi');
                            },
                        },
                        wuyue_fangkongzhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '防空',
                            init(player) {
                                player.storage.wuyue_fangkongzhi = 0;
                                player.markSkill('wuyue_fangkongzhi');
                            },
                        },
                        wuyue_tianzhuangzhi: {
                            audio: 'ext:碧蓝航线/audio:2',
                            charlotte: true,
                            fixed: true,
                            silent: true,
                            forced: true,
                            mark: true,
                            marktext: '装',
                            init(player) {
                                player.storage.wuyue_tianzhuangzhi = 0;
                                player.markSkill('wuyue_tianzhuangzhi');
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    var t = player.storage.wuyue_tianzhuangzhi;
                                    if (t >= 0 && t < 50) {
                                        return num - player.hp + 5;
                                    }
                                    if (t >= 50 && t < 100) {
                                        return num - player.hp + 6;
                                    }
                                    if (t >= 100 && t < 500) {
                                        return num - player.hp + 7;
                                    }
                                    if (t >= 500) {
                                        return num - player.hp + 8;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    var t = player.storage.wuyue_tianzhuangzhi;
                                    if (t >= 50 && t < 100) {
                                        if (card.name == 'sha') return num + 1;
                                    }
                                    if (t >= 100 && t < 150) {
                                        if (card.name == 'sha') return num + 2;
                                    }
                                    if (t >= 150 && t < 200) {
                                        if (card.name == 'sha') return num + 3;
                                    }
                                    if (t >= 200 && t < 250) {
                                        if (card.name == 'sha') return num + 4;
                                    }
                                    if (t >= 250 && t < 300) {
                                        if (card.name == 'sha') return num + 5;
                                    }
                                    if (t >= 300 && t < 350) {
                                        if (card.name == 'sha') return num + 6;
                                    }
                                    if (t >= 350 && t < 400) {
                                        if (card.name == 'sha') return num + 7;
                                    }
                                    if (t >= 450 && t < 500) {
                                        if (card.name == 'sha') return num + 8;
                                    }
                                    if (t >= 500) {
                                        if (card.name == 'sha') return num + 999;
                                    }
                                },
                            },
                        },
                        wuyue_Gassing: {
                            nobracket: true,
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_Gassing = 0;
                                player.markSkill('wuyue_Gassing');
                            },
                            filter(event, player) {
                                return !player.hasSkill('wuyue_Gassing_mark');
                            },
                            content() {
                                var dm = player.storage.wuyue_Gassing;
                                if (dm < 8) {
                                    player.storage.wuyue_Gassing += 1;
                                    var num = [1, 2, 3, 4, 5].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    if (num >= 2) event.finish();
                                } else {
                                    player.storage.wuyue_Gassing = 0;
                                    player.addTempSkill('wuyue_Gassing_mark', { player: 'phaseDiscardBegin' });
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('Gassing Breath');
                                }
                            },
                            group: ['wuyue_Gassing_mark1'],
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: 'G',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        var l = lib.config.wuyue_edu / 5 / 100;
                                        if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                            trigger.num += trigger.num * (0.15 + l);
                                        } else trigger.num++;
                                    },
                                    intro: {
                                        content: '你造成的伤害将会提高',
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    init(player) {
                                        player.storage.wuyue_Gassing_mark1 = 0;
                                        player.markSkill('wuyue_Gassing_mark1');
                                    },
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        var ma = player.storage.wuyue_Gassing_mark1;
                                        var l = lib.config.wuyue_edu;
                                        if (l >= 100) {
                                            if (ma < 40) {
                                                player.storage.wuyue_Gassing_mark1 += 1;
                                                player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 1.02;
                                                player.popup('Gassing Breath');
                                            } else event.finish;
                                        } else {
                                            if (ma < 30) {
                                                player.storage.wuyue_Gassing_mark1 += 1;
                                                player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 1.02;
                                                player.popup('Gassing Breath');
                                            } else event.finish;
                                        }
                                    },
                                },
                            },
                        },
                        wuyue_xfzd: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_xfzd = 50;
                                player.markSkill('wuyue_xfzd');
                            },
                            filter(event, player) {
                                return player.storage.wuyue_xfzd > 0;
                            },
                            content() {
                                var xf = player.storage.wuyue_xfzd;
                                player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * (1 + xf / 100);
                                player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi * (1 + xf / 100);
                                var num = [1, 2, 3, 4, 5, 6].randomGet();
                                if (num == 1) game.Blanbf(player.name + 'ptgj');
                                player.popup('兴奋之毒');
                            },
                            group: ['wuyue_xfzd_mark'],
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'phaseDiscardBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.wuyue_xfzd > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var xf = player.storage.wuyue_xfzd;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / (1 + xf / 100);
                                        player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi / (1 + xf / 100);
                                        var num = [1, 2, 3, 4, 5, 6].randomGet();
                                        if (num == 1) game.Blanbf(player.name + 'ptgj');
                                        player.popup('兴奋之毒');
                                        ('step 1');
                                        player.storage.wuyue_xfzd -= 2;
                                    },
                                },
                            },
                        },
                        wuyue_dmkaix: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmkaix = 0;
                                player.markSkill('wuyue_dmkaix');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_edu;
                                var dm = player.storage.wuyue_dmkaix;
                                if (l >= 70) {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmkaix += 1;
                                        player.markSkill('wuyue_dmkaix');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmkaix'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 12) {
                                        player.storage.wuyue_dmkaix += 1;
                                        player.markSkill('wuyue_dmkaix');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmkaix'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmkaix = 0;
                                    player.markSkill('wuyue_dmkaix');
                                    player.popup('弹幕-凯旋');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_edu;
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_cewj: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                if (!player.hasSkill('wuyue_cewj_mark')) {
                                    player.addSkill('wuyue_cewj_mark');
                                }
                                var l = lib.config.wuyue_yingrui;
                                event.num = Math.random();
                                if (event.num <= 0.2 + l / 6 / 100) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_cewj'), [1, 2], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'ptgj');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    init(player) {
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 1.35;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.25;
                                        player.storage.wuyue_xingyunzhi += 15;
                                    },
                                },
                            },
                        },
                        wuyue_dqby: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                trigger.num -= trigger.num * 0.25;
                                player.popup('丹青不渝');
                            },
                            group: ['wuyue_dqby_mark'],
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '丹',
                                    init(player) {
                                        player.storage.wuyue_dqby_mark = 0;
                                        player.markSkill('wuyue_dqby_mark');
                                    },
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        return player.storage.wuyue_dqby_mark < 1;
                                    },
                                    content() {
                                        var num = game.countPlayer(function (current) {
                                            return current.group == 'wuyue_donghuang';
                                        });
                                        if (num > 1) {
                                            game.Blanbf(player.name + 'jn');
                                            player.popup('丹青不渝');
                                            player.storage.wuyue_dqby_mark += 1;
                                            player.maxHp = player.maxHp * 1.35;
                                            player.hp = player.maxHp;
                                        }
                                    },
                                },
                            },
                        },
                        wuyue_dmzhaohe: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmzhaohe = 0;
                                player.markSkill('wuyue_dmzhaohe');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_yingrui;
                                var dm = player.storage.wuyue_dmzhaohe;
                                if (l >= 70) {
                                    if (dm < 5) {
                                        var num = [1, 2, 3, 4, 5].randomGet();
                                        if (num == 1) game.Blanbf(player.name + 'jn');
                                        if (num >= 2) event.finish();
                                        player.storage.wuyue_dmzhaohe += 1;
                                        player.markSkill('wuyue_dmzhaohe');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmzhaohe'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 10) {
                                        var num = [1, 2, 3, 4, 5].randomGet();
                                        if (num == 1) game.Blanbf(player.name + 'jn');
                                        if (num >= 2) event.finish();
                                        player.storage.wuyue_dmzhaohe += 1;
                                        player.markSkill('wuyue_dmzhaohe');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmzhaohe'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmzhaohe = 0;
                                    player.markSkill('wuyue_dmzhaohe');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage(3);
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
                        },
                        wuyue_yypj: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_huashengdun;
                                event.num = Math.random();
                                if (event.num <= 0.35 + l / 5 / 100) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_yypj'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_tdwzy: {
                            nobracket: true,
                            trigger: {
                                player: 'damageAfter',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return player.hp <= player.maxHp * 0.35;
                            },
                            content() {
                                var l = lib.config.wuyue_huashengdun;
                                player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * (1.35 + l / 5 / 100);
                                player.recover(player.maxHp * (0.2 + l / 5 / 100))._triggered = null;
                                player.addTempSkill('wuyue_tdwzy_mark', { player: 'phaseEnd' });
                                game.Blanbf(player.name + 'jn');
                                player.storage.wuyue_tdwzy = true;
                                player.awakenSkill('wuyue_tdwzy');
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    onremove(player) {
                                        var l = lib.config.wuyue_huashengdun;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / (1.35 + l / 5 / 100);
                                    },
                                    content() {
                                        var l = lib.config.wuyue_huashengdun;
                                        trigger.num -= trigger.num * (0.6 + l / 6 / 100);
                                    },
                                },
                            },
                        },
                        wuyue_darkness: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_heianjie;
                                var n = lib.config.wuyue_kongbu;
                                event.num = Math.random();
                                if (event.num <= 0.33 + l / 5 / 100) {
                                    if (l >= 70 || n >= 70) {
                                        player
                                            .chooseTarget(get.prompt('wuyue_darkness'), [1, 4], function (card, player, target) {
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
                                            .chooseTarget(get.prompt('wuyue_darkness'), [1, 2], function (card, player, target) {
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
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_heianjie;
                                        var n = lib.config.wuyue_kongbu;
                                        if (l >= 70 || n >= 70) {
                                            result.targets[i].damage(2);
                                            result.targets[i].damage(2);
                                        } else {
                                            result.targets[i].damage(2);
                                        }
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
                        },
                        wuyue_jnleiji: {
                            nobracket: true,
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                return player.storage.wuyue_jnleiji_mark >= 2;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            content() {
                                player.storage.wuyue_jnleiji_mark -= 2;
                                player.unmarkSkill('wuyue_jnleiji_mark');
                                player.useCard({ name: 'sha', nature: 'yuleiji' }, targets, false);
                            },
                            ai: {
                                combo: 'wuyue_jnleiji_mark',
                                order: 2,
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                },
                            },
                            group: ['wuyue_jnleiji_mark'],
                            subSkill: {
                                mark: {
                                    charlotte: true,
                                    fixed: true,
                                    silent: true,
                                    forced: true,
                                    mark: true,
                                    init(player) {
                                        player.storage.wuyue_jnleiji_mark = 2;
                                        player.markSkill('wuyue_jnleiji_mark');
                                    },
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    filter(event, player) {
                                        return player.storage.wuyue_jnleiji_mark < 4;
                                    },
                                    content() {
                                        player.storage.wuyue_jnleiji_mark += 1;
                                    },
                                    ai: {
                                        combo: 'wuyue_jnleiji',
                                    },
                                },
                            },
                        },
                        wuyue_bigsevenying: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_changmeng;
                                event.num = Math.random();
                                if (event.num <= 0.1 + l / 10 / 100) {
                                    if (l >= 70) {
                                        player
                                            .chooseTarget(get.prompt('wuyue_bigsevenying'), [1, 2], function (card, player, target) {
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
                                            .chooseTarget(get.prompt('wuyue_bigsevenying'), [1], function (card, player, target) {
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
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var num = [1, 2, 3, 4].randomGet();
                                        if (num == 1) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
                                        if (num == 2) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
                                        if (num == 3) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
                                        if (num == 4) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
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
                        },
                        wuyue_chongyingqijian: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            silent: true,
                            filter(event, player) {
                                return player.identity == 'zhu' || player == game.me;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_chongyingqijian'), function (card, player, target) {
                                        return target.group != 'wuyue_donghuang' && !target.hasSkill('wuyue_chongyingqijian_mark') && (target.hasSkill('wuyue_jianniangdengji') || target.hasSkill('wuyue_jianniangdengjihm'));
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
                                    game.Blanbf(player.name + 'ptgj');
                                    player.popup('重樱旗舰');
                                    var r = result.targets[0];
                                    if (r.hasSkill('wuyue_paojizhi')) {
                                        r.storage.wuyue_paojizhi = r.storage.wuyue_paojizhi * 1.2;
                                    }
                                    if (r.hasSkill('wuyue_hangkongzhi')) {
                                        r.storage.wuyue_hangkongzhi = r.storage.wuyue_hangkongzhi * 1.2;
                                    }
                                    r.storage.wuyue_jidongzhi = r.storage.wuyue_jidongzhi * 1.2;
                                    r.storage.wuyue_tianzhuangzhi = r.storage.wuyue_tianzhuangzhi * 1.2;
                                    r.addSkill('wuyue_chongyingqijian_mark');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    target: 3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '樱',
                                    intro: {
                                        content: '你被重樱旗舰增幅',
                                    },
                                },
                            },
                        },
                        wuyue_heiandkxq: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                if (player.hp <= player.maxHp * 0.5) {
                                    player.addTempSkill('wuyue_heiandkxq_mark', { player: 'phaseBefore' });
                                    player.popup('黑暗狂想曲');
                                    game.Blanbf(player.name + 'jn');
                                } else {
                                    player.addTempSkill('wuyue_heiandkxq_mark1', { player: 'phaseBefore' });
                                    player.popup('黑暗狂想曲');
                                    game.Blanbf(player.name + 'jn');
                                }
                            },
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var l = lib.config.wuyue_ftldadi;
                                        trigger.num -= trigger.num * (0.2 + l / 6 / 100);
                                        var num = [1, 2, 3, 4, 5, 6, 7, 8].randomGet();
                                        if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    },
                                },
                                mark1: {
                                    forced: true,
                                    silent: true,
                                    init(player) {
                                        var l = lib.config.wuyue_ftldadi;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * (1.2 + l / 4 / 100);
                                    },
                                    onremove(player) {
                                        var l = lib.config.wuyue_ftldadi;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / (1.2 + l / 4 / 100);
                                    },
                                },
                            },
                        },
                        wuyue_hundundzmq: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            nobracket: true,
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var str = !player.storage.wuyue_hundundzmq ? '奏鸣:<span class="legendtext">提升自身装填30%/60%及机动值20%/40%' : '混沌:<span class="bluetext">提升自身暴击率25%/50%.';
                                    if (!player.storage.wuyue_hundundzmq) {
                                        str += '<br><li>当前状态:奏鸣';
                                    } else str += '<br><li>当前状态:混沌';
                                    return str;
                                },
                            },
                            zhuanhuanji: true,
                            marktext: '鸣',
                            content() {
                                var l = lib.config.wuyue_ftldadi;
                                var num = [1, 2, 3, 4].randomGet();
                                if (num == 1) game.Blanbf(player.name + 'ptgj');
                                if (player.storage.wuyue_hundundzmq == false) {
                                    player.storage.wuyue_hundundzmq = true;
                                    player.popup('混沌');
                                    player.removeSkill('wuyue_hundundzmq_mark');
                                } else {
                                    player.storage.wuyue_hundundzmq = false;
                                    player.popup('奏鸣');
                                    player.addSkill('wuyue_hundundzmq_mark');
                                }
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    init(player) {
                                        var l = lib.config.wuyue_ftldadi;
                                        if (l >= 70) {
                                            player.storage.wuyue_baojizhi = 0;
                                            player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.6;
                                            player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi * 1.6;
                                        } else {
                                            player.storage.wuyue_baojizhi = 0;
                                            player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.3;
                                            player.unmarkSkill('wuyue_jidongzhi');
                                            player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi * 1.3;
                                            player.unmarkSkill('wuyue_tianzhuangzhi');
                                        }
                                    },
                                    onremove(player) {
                                        var l = lib.config.wuyue_ftldadi;
                                        if (l >= 70) {
                                            player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / 1.6;
                                            player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi / 1.6;
                                            player.storage.wuyue_baojizhi += 50;
                                        } else {
                                            player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / 1.3;
                                            player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi / 1.3;
                                            player.unmarkSkill('wuyue_jidongzhi');
                                            player.unmarkSkill('wuyue_tianzhuangzhi');
                                            player.storage.wuyue_baojizhi += 25;
                                        }
                                    },
                                },
                            },
                        },
                        wuyue_pohuaidjxq: {
                            nobracket: true,
                            trigger: {
                                player: ['phaseDiscardBefore', 'damageEnd'],
                            },
                            forced: true,
                            silent: true,
                            filter(event, player) {
                                return !player.hasSkill('wuyue_pohuaidjxq_mark');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_pohuaidjxq'), [1, 4], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        player.addTempSkill('wuyue_pohuaidjxq_mark', { player: 'phaseEnd' });
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
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '尽',
                                    intro: {
                                        content: '弹幕已经被使用',
                                    },
                                },
                            },
                        },
                        wuyue_zhuanyetzs: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            init(player) {
                                player.storage.wuyue_zhuanyetzs = 0;
                                player.markSkill('wuyue_zhuanyetzs');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                var l = lib.config.wuyue_luoen;
                                var z = player.storage.wuyue_zhuanyetzs;
                                var m = player.storage.wuyue_zhuanyetzs_mark;
                                var num = [1, 2, 3, 4, 5, 6, 7, 8, 9].randomGet();
                                if (num == 1) game.Blanbf(player.name + 'ptgj');
                                player.storage.wuyue_zhuanyetzs_mark += 1;
                                if (z < 25) {
                                    player.storage.wuyue_zhuanyetzs += 1;
                                    player.storage.wuyue_tianzhuangzhi += player.storage.wuyue_tianzhuangzhi * 0.02;
                                }
                                if (m >= 10) {
                                    player.storage.wuyue_zhuanyetzs_mark -= 10;
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('专业填装手');
                                    if (player.hasSkill('wuyue_zhuanyetzs_mark3')) {
                                        player.addSkill('wuyue_zhuanyetzs_mark4');
                                        player.removeSkill('wuyue_zhuanyetzs_mark3');
                                    } else {
                                        player.addSkill('wuyue_zhuanyetzs_mark3');
                                        player.removeSkill('wuyue_zhuanyetzs_mark4');
                                    }
                                }
                            },
                            group: ['wuyue_zhuanyetzs_mark', 'wuyue_zhuanyetzs_mark1'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '弹',
                                    init(player) {
                                        player.storage.wuyue_zhuanyetzs_mark = 10;
                                        player.markSkill('wuyue_zhuanyetzs_mark');
                                    },
                                    intro: {
                                        content: '攻击次数',
                                    },
                                },
                                mark1: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        var p = player.storage.wuyue_paojizhi;
                                        var l = lib.config.wuyue_luoen;
                                        if (player.hasSkill('wuyue_zhuanyetzs_mark3')) {
                                            if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                                trigger.num += trigger.num * (0.2 + l / 6 / 100);
                                            } else trigger.num++;
                                        } else {
                                            if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                                player.recover(trigger.num * (0.2 + l / 6 / 100))._triggered = null;
                                            } else player.recover(p * (0.2 + l / 6 / 100))._triggered = null;
                                        }
                                    },
                                },
                                mark3: {
                                    mark: true,
                                    marktext: '攻',
                                    intro: {
                                        content: '提高你造成的伤害',
                                    },
                                },
                                mark4: {
                                    mark: true,
                                    marktext: '守',
                                    intro: {
                                        content: '你回复造成伤害会进行回复',
                                    },
                                },
                            },
                        },
                        wuyue_quanfangweizj: {
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            mark: true,
                            marktext: '盾',
                            init(player) {
                                player.storage.wuyue_quanfangweizj = 0;
                                player.markSkill('wuyue_quanfangweizj');
                            },
                            content() {
                                player.storage.wuyue_quanfangweizj = 4;
                                player.markSkill('wuyue_quanfangweizj');
                            },
                            intro: {
                                content: '你拥有镜盾',
                            },
                            group: ['wuyue_quanfangweizj_mark'],
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return player.storage.wuyue_quanfangweizj > 0;
                                    },
                                    content() {
                                        var l = lib.config.wuyue_luoen;
                                        player.storage.wuyue_quanfangweizj -= 1;
                                        player.popup('全方位装甲');
                                        trigger.num -= 50 + l;
                                    },
                                },
                            },
                        },
                        wuyue_dmluoen: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_luoen;
                                event.num = Math.random();
                                if (event.num <= 0.3 + l / 5 / 100) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_dmluoen'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_Grinandfire: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_chaijun;
                                event.num = Math.random();
                                if (event.num <= 0.5 + l / 5 / 100) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_Grinandfire'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                            group: ['wuyue_Grinandfire_mark'],
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    content() {
                                        var l = lib.config.wuyue_chaijun;
                                        trigger.num -= trigger.num * (0.1 + l / 5 / 100);
                                    },
                                },
                            },
                        },
                        wuyue_cjpowerup: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            marktext: '增幅',
                            init(player) {
                                player.storage.wuyue_cjpowerup = 0;
                                player.markSkill('wuyue_cjpowerup');
                            },
                            filter(event, player) {
                                return player.storage.wuyue_cjpowerup < 5;
                            },
                            content() {
                                var l = lib.config.wuyue_chaijun;
                                player.popup('柴郡PowerUp');
                                event.num = Math.random();
                                if (event.num <= 0.2 + l / 10 / 100) {
                                    player.storage.wuyue_cjpowerup += 1;
                                    player.storage.wuyue_paojizhi += player.storage.wuyue_paojizhi * (0.05 + l / 10 / 100);
                                    player.storage.wuyue_jidongzhi += player.storage.wuyue_jidongzhi * (0.05 + l / 10 / 100);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        wuyue_dmchaijun: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmchaijun = 0;
                                player.markSkill('wuyue_dmchaijun');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_chaijun;
                                var dm = player.storage.wuyue_dmchaijun;
                                if (l >= 70) {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmchaijun += 1;
                                        player.markSkill('wuyue_dmchaijun');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmchaijun'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 12) {
                                        player.storage.wuyue_dmchaijun += 1;
                                        player.markSkill('wuyue_dmchaijun');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmchaijun'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmchaijun = 0;
                                    player.markSkill('wuyue_dmchaijun');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage();
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
                        },
                        wuyue_jinghuoqiangyan: {
                            nobracket: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_blackfangzhou;
                                player
                                    .chooseTarget(get.prompt('wuyue_jinghuoqiangyan'), [1], function (card, player, target) {
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
                                    var num = [1, 2, 3, 4].randomGet();
                                    if (num == 1) game.Blanbf(player.name + 'ptgj');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('wuyue_jinghuoqiangyan_mark', { player: 'phaseEnd' });
                                        result.targets[i].damage();
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
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    content() {
                                        trigger.num -= 1;
                                    },
                                },
                            },
                        },
                        wuyue_huanyinqx: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_blackfangzhou;
                                event.num = Math.random();
                                if (event.num <= 0.5) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_huanyinqx'), [1], function (card, player, target) {
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
                                    player.addTempSkill('wuyue_huanyinqx_mark', { player: 'phaseDiscardBefore' });
                                    game.Blanbf(player.name + 'ptgj');
                                }
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '袭',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                            if (player == game.boss) {
                                                trigger.num += trigger.num * 1.15;
                                            } else {
                                                trigger.num += trigger.num * 0.35;
                                            }
                                        } else {
                                            if (player == game.boss) {
                                                trigger.num += 3;
                                            } else trigger.num++;
                                        }
                                    },
                                    intro: {
                                        content: '你造成伤害将会提高',
                                    },
                                },
                            },
                        },
                        wuyue_rongguangzf: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_rongguangzf = 0;
                                player.markSkill('wuyue_rongguangzf');
                            },
                            content() {
                                var l = lib.config.wuyue_blackfangzhou;
                                var h = player.storage.wuyue_hangkongzhi;
                                player.popup('荣光之锋');
                                player.recover(h)._triggered = null;
                                game.Blanbf(player.name + 'qhcg');
                                if (player.storage.wuyue_rongguangzf < 20) {
                                    if (l >= 70) {
                                        player.storage.wuyue_tianzhuangzhi += 10;
                                        player.storage.wuyue_hangkongzhi += 10;
                                    } else {
                                        player.storage.wuyue_tianzhuangzhi += 5;
                                        player.storage.wuyue_hangkongzhi += 5;
                                    }
                                }
                            },
                        },
                        wuyue_xingluoqibu: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_xingluoqibu'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('星罗棋布');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_zhenhai;
                                        var num = [1, 2].randomGet();
                                        if (num == 1) result.targets[i].addTempSkill('wuyue_xingluoqibu_mark', { player: 'phaseDiscardBefore' });
                                        if (num == 2) result.targets[i].addTempSkill('wuyue_xingluoqibu_mark1', { player: 'phaseDiscardBefore' });
                                        if (l >= 70) {
                                            result.targets[i].damage('wuyuepaoji');
                                            result.targets[i].damage('wuyuepaoji');
                                            result.targets[i].damage('wuyuepaoji');
                                        } else {
                                            result.targets[i].damage('wuyuepaoji');
                                            result.targets[i].damage('wuyuepaoji');
                                        }
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
                            subSkill: {
                                mark: {
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '黑',
                                    content() {
                                        trigger.num -= 1;
                                    },
                                    intro: {
                                        content: '受到黑棋影响,你摸牌数将会减少',
                                    },
                                },
                                mark1: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '白',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                            trigger.num -= trigger.num * 0.3;
                                        } else trigger.num--;
                                    },
                                    intro: {
                                        content: '受到白棋影响,你造成伤害将会降低',
                                    },
                                },
                            },
                        },
                        wuyue_zhamouqiji: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_zhamouqiji'), [1, 2], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_zhenhai;
                                        if (l >= 70) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        } else {
                                            result.targets[i].damage();
                                        }
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
                            group: ['wuyue_zhamouqiji_mark'],
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '计',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        var l = lib.config.wuyue_zhenhai;
                                        var num = game.countPlayer(function (current) {
                                            return current.group == 'wuyue_donghuang';
                                        });
                                        if (num > 1) {
                                            if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                                if (l >= 70) {
                                                    trigger.num += trigger.num * 0.4;
                                                } else {
                                                    trigger.num += trigger.num * 0.2;
                                                }
                                            } else trigger.num++;
                                        }
                                    },
                                    intro: {
                                        content: '当场上有其他东煌角色时,你造成的伤害提高',
                                    },
                                },
                            },
                        },
                        wuyue_shiwuxufa: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                var l = lib.config.wuyue_bingjiang;
                                if (trigger.nature && trigger.nature == 'yuleiji') {
                                    trigger.num -= trigger.num * (0.2 + l / 6 / 100);
                                }
                            },
                            group: ['wuyue_shiwuxufa_mark', 'wuyue_shiwuxufa_mark2'],
                            subSkill: {
                                mark1: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '雾',
                                    init(player) {
                                        player.storage.wuyue_shanbizhi = 30;
                                    },
                                    onremove(player) {
                                        player.storage.wuyue_shanbizhi = 0;
                                    },
                                    intro: {
                                        content: '你的闪避率增加30%',
                                    },
                                },
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        var l = lib.config.wuyue_bingjiang;
                                        if (trigger.nature && trigger.nature == 'yuleiji') {
                                            if (!player.hasSkill('wuyue_shiwuxufa_mark1')) {
                                                player.addTempSkill('wuyue_shiwuxufa_mark1', { player: 'phaseBegin' });
                                            }
                                            if (player.storage.wuyue_jnleiji_mark < 4) {
                                                player.storage.wuyue_jnleiji_mark += 1;
                                            }
                                        }
                                    },
                                },
                                mark2: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    init(player) {
                                        player.storage.wuyue_shiwuxufa_mark2 = 0;
                                        player.markSkill('wuyue_shiwuxufa_mark2');
                                    },
                                    filter(event, player) {
                                        return player.storage.wuyue_shiwuxufa_mark2 < 1;
                                    },
                                    content() {
                                        var num = game.countPlayer(function (current) {
                                            return current.group == 'wuyue_donghuang';
                                        });
                                        if (num > 1) {
                                            game.Blanbf(player.name + 'jn');
                                            player.popup('鱼雷,矢无虚发!');
                                            player.storage.wuyue_shiwuxufa_mark2 += 1;
                                            player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi * 1.2;
                                        }
                                    },
                                },
                            },
                        },
                        wuyue_qingxieruhuo: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_bingjiang;
                                event.num = Math.random();
                                if (event.num <= 0.5 + l / 5 / 100) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_qingxieruhuo'), [1], function (card, player, target) {
                                            return player != target;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return 1 - get.attitude(_status.event.player, target);
                                            }
                                            return 1;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage();
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
                            group: ['wuyue_qingxieruhuo_mark'],
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '火',
                                    init(player) {
                                        player.storage.wuyue_qingxieruhuo_mark = 0;
                                        player.markSkill('wuyue_qingxieruhuo_mark');
                                    },
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        var l = lib.config.wuyue_bingjiang;
                                        if (l >= 70) {
                                            if (player.storage.wuyue_qingxieruhuo_mark < 10) {
                                                event.num = Math.random();
                                                if (event.num <= 0.2) {
                                                    player.storage.wuyue_qingxieruhuo_mark += 1;
                                                    player.storage.wuyue_leijizhi += player.storage.wuyue_leijizhi * 0.04;
                                                    player.storage.wuyue_paojizhi += player.storage.wuyue_paojizhi * 0.04;
                                                    player.storage.wuyue_fangkongzhi += player.storage.wuyue_fangkongzhi * 0.04;
                                                }
                                            } else event.finish();
                                        } else {
                                            if (player.storage.wuyue_qingxieruhuo_mark < 5) {
                                                event.num = Math.random();
                                                if (event.num <= 0.2) {
                                                    player.storage.wuyue_qingxieruhuo_mark += 1;
                                                    player.storage.wuyue_leijizhi += player.storage.wuyue_leijizhi * 0.04;
                                                    player.storage.wuyue_paojizhi += player.storage.wuyue_paojizhi * 0.04;
                                                    player.storage.wuyue_fangkongzhi += player.storage.wuyue_fangkongzhi * 0.04;
                                                }
                                            } else event.finish();
                                        }
                                    },
                                },
                            },
                        },
                        wuyue_dmhaeeb: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmhaeeb = 0;
                                player.markSkill('wuyue_dmhaeeb');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyue_bingjiang;
                                var dm = player.storage.wuyue_dmhaeeb;
                                if (l >= 70) {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmhaeeb += 1;
                                        player.markSkill('wuyue_dmhaeeb');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmhaeeb'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 12) {
                                        player.storage.wuyue_dmhaeeb += 1;
                                        player.markSkill('wuyue_dmhaeeb');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmhaeeb'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmhaeeb = 0;
                                    player.markSkill('wuyue_dmhaeeb');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        var l = lib.config.wuyue_bingjiang;
                                        if (l <= 70) {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        } else {
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                            result.targets[i].damage();
                                        }
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
                        },
                        wuyue_kuaisutianzhuang: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                var l = player.storage.wuyue_jianniangdengji;
                                event.num = Math.random();
                                if (event.num <= 0.4 + l / 5 / 100) {
                                    player.addTempSkill('wuyue_kuaisutianzhuang_mark', { player: 'phaseEnd' });
                                    player.popup('快速填装');
                                    game.Blanbf(player.name + 'jn');
                                }
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '填',
                                    init(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi * (1.4 + l / 5 / 100);
                                    },
                                    onremove(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi / (1.4 + l / 5 / 100);
                                    },
                                    intro: {
                                        content: '你正在进行快速填装',
                                    },
                                },
                            },
                        },
                        wuyue_yuleilianshe: {
                            nobracket: true,
                            forced: true,
                            silent: true,
                            trigger: {
                                player: 'useSkillBefore',
                            },
                            filter(event, player) {
                                return !player.hasSkill('wuyue_yuleilianshe_mark') && event.skill == 'wuyue_jnleiji';
                            },
                            content() {
                                var l = player.storage.wuyue_jianniangdengji;
                                event.num = Math.random();
                                if (event.num <= 0.3 + l / 5 / 100) {
                                    if (player.storage.wuyue_jnleiji_mark < 4) {
                                        player.storage.wuyue_jnleiji_mark += 2;
                                    }
                                    player.addTempSkill('wuyue_yuleilianshe_mark', { player: 'phaseEnd' });
                                    player.popup('鱼雷连射');
                                    game.Blanbf(player.name + 'jn');
                                }
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                },
                            },
                        },
                        wuyue_leijizhihui: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            silent: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_leijizhihui'), function (card, player, target) {
                                        return !target.hasSkill('wuyue_leijizhihui_mark') && (target.hasSkill('wuyue_jianniangdengji') || target.hasSkill('wuyue_jianniangdengjihm'));
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
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('雷击指挥');
                                    var l = player.storage.wuyue_jianniangdengji;
                                    var r = result.targets[0];
                                    r.storage.wuyue_leijizhi = r.storage.wuyue_leijizhi * (1.2 + l / 5 / 100);
                                    r.addSkill('wuyue_leijizhihui_mark');
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    target: 3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '雷',
                                    intro: {
                                        content: '你被雷击指挥增幅',
                                    },
                                },
                            },
                        },
                        wuyue_dmmuyue: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmmuyue = 0;
                                player.markSkill('wuyue_dmmuyue');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var dm = player.storage.wuyue_dmmuyue;
                                if (l >= 70) {
                                    if (dm < 4) {
                                        player.storage.wuyue_dmmuyue += 1;
                                        player.markSkill('wuyue_dmmuyue');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmmuyue'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmmuyue += 1;
                                        player.markSkill('wuyue_dmmuyue');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmmuyue'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmmuyue = 0;
                                    player.markSkill('wuyue_dmmuyue');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('yuleiji');
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
                        },
                        wuyue_jiejieqizhi: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                var l = player.storage.wuyue_jianniangdengji;
                                if (player.hp >= player.maxHp * (0.6 - l / 6 / 100)) {
                                    player.addTempSkill('wuyue_jiejieqizhi_mark', { player: 'phaseBefore' });
                                    player.popup('姐姐气质');
                                    game.Blanbf(player.name + 'jn');
                                }
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '气',
                                    init(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * (1.4 + l / 6 / 100);
                                        player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi * (1.4 + l / 6 / 100);
                                    },
                                    onremove(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / (1.4 + l / 6 / 100);
                                        player.storage.wuyue_tianzhuangzhi = player.storage.wuyue_tianzhuangzhi / (1.4 + l / 6 / 100);
                                    },
                                    intro: {
                                        content: '因姐姐气质,所以你的炮击,机动提高了',
                                    },
                                },
                            },
                        },
                        wuyue_zhqnshuzhihuiqz: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_zhqnshuzhihuiqz'), [1, 3], function (card, player, target) {
                                        return !target.hasSkill('wuyue_zhqnshuzhihuiqz_mark') && (target.hasSkill('wuyue_jianniangdengji') || target.hasSkill('wuyue_jianniangdengjihm'));
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
                                    game.Blanbf(player.name + 'ptgj');
                                    player.popup('战术指挥');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('wuyue_zhqnshuzhihuiqz_mark', { player: 'phaseDiscardEnd' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    target: 3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '战',
                                    init(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * (1.2 + l / 6 / 100);
                                    },
                                    onremove(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / (1.2 + l / 6 / 100);
                                    },
                                    intro: {
                                        content: '你被战术指挥振幅',
                                    },
                                },
                            },
                        },
                        wuyue_dmfulaic: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmfulaic = 0;
                                player.markSkill('wuyue_dmfulaic');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var dm = player.storage.wuyue_dmfulaic;
                                if (l >= 70) {
                                    if (dm < 4) {
                                        player.storage.wuyue_dmfulaic += 1;
                                        player.markSkill('wuyue_dmfulaic');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmfulaic'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmfulaic += 1;
                                        player.markSkill('wuyue_dmfulaic');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmfulaic'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmfulaic = 0;
                                    player.markSkill('wuyue_dmfulaic');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_yanwudan: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                var l = player.storage.wuyue_jianniangdengji;
                                var d = lib.config.wuyuedj;
                                if (player == game.boss) {
                                    event.num = Math.random();
                                    if (event.num <= 0.25 + d / 3 / 100) {
                                        player.addTempSkill('wuyue_yanwudan_mark', { player: 'phaseBefore' });
                                        player.popup('烟雾弹');
                                        game.Blanbf(player.name + 'jn');
                                    }
                                } else {
                                    event.num = Math.random();
                                    if (event.num <= 0.25 + l / 6 / 100) {
                                        player.addTempSkill('wuyue_yanwudan_mark', { player: 'phaseBefore' });
                                        player.popup('烟雾弹');
                                        game.Blanbf(player.name + 'jn');
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '烟',
                                    init(player) {
                                        player.storage.wuyue_shanbizhi = 30;
                                    },
                                    onremove(player) {
                                        player.storage.wuyue_shanbizhi = 0;
                                    },
                                    intro: {
                                        content: '你的闪避率增加40%',
                                    },
                                },
                            },
                        },
                        wuyue_jingjihuibi: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                if (player.hp <= player.maxHp * (0.3 + l / 6 / 100)) {
                                    event.num = Math.random();
                                    if (event.num <= 0.25 + l / 6 / 100) {
                                        player
                                            .chooseTarget(get.prompt('wuyue_jingjihuibi'), [1], function (card, player, target) {
                                                return player != target;
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (get.attitude(_status.event.player, target)) {
                                                    return 1 - get.attitude(_status.event.player, target);
                                                }
                                                return 1;
                                            });
                                    } else event.finish();
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    var h = player.maxHp / 2;
                                    for (var i = 0; i < result.targets.length; i++) {
                                        if (player.hasSkill('wuyue_jianniangdengji') || player.hasSkill('wuyue_jianniangdengjihm')) {
                                            result.targets[i].damage(h, 'wuyuewushu');
                                        } else result.targets[i].damage(3, 'wuyuewushu');
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
                        },
                        wuyue_jingjihuibi1: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var h = player.hp;
                                if (player.hp <= player.maxHp * 0.9) {
                                    event.num = Math.random();
                                    if (event.num <= 0.3) {
                                        game.Blanbf(player.name + 'jn');
                                        var list = game.filterPlayer();
                                        list.remove(player);
                                        list.sort(lib.sort.seat);
                                        var list2 = [];
                                        for (var i = 0; i < list.length; i++) {
                                            list2.push(0);
                                        }
                                        for (var i = 0; i < h; i++) {
                                            list2[Math.floor(Math.random() * list2.length)]++;
                                        }
                                        event.list = list;
                                        event.list2 = list2;
                                    } else {
                                        player.storage.wuyue_paojizhi += 10;
                                        player.storage.wuyue_leijizhi += 10;
                                        player.storage.wuyue_tianzhuangzhi += 10;
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 1');
                                if (event.list.length) {
                                    var target = event.list.shift();
                                    target.damage(event.list2.shift(), 'wuyuewushu');
                                    player.line(target, 'thunder');
                                    event.redo();
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
                        },
                        wuyue_dmcji: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmcji = 0;
                                player.markSkill('wuyue_dmcji');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var dm = player.storage.wuyue_dmcji;
                                if (dm < 6) {
                                    player.storage.wuyue_dmcji += 1;
                                    player.markSkill('wuyue_dmcji');
                                } else {
                                    player
                                        .chooseTarget(get.prompt('wuyue_dmcji'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmcji = 0;
                                    player.markSkill('wuyue_dmcji');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage('yuleiji');
                                        result.targets[i].damage();
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
                        },
                        wuyue_paodanjintong: {
                            nobracket: true,
                            audio: 'ext:碧蓝航线/audio:2',
                            forced: true,
                            silent: true,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source == player;
                            },
                            content() {
                                var l = player.storage.wuyue_jianniangdengji;
                                var num = [1, 2, 3, 4, 5].randomGet();
                                if (num == 1) game.Blanbf(player.name + 'jn');
                                if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                    trigger.num += trigger.num * (0.15 + l / 6 / 100);
                                } else trigger.num++;
                            },
                        },
                        wuyue_gaibsddps: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                'step 0';
                                event.num = Math.random();
                                if (event.num <= 0.4) {
                                    player
                                        .chooseTarget(get.prompt('wuyue_gaibsddps'), [1, 3], function (card, player, target) {
                                            return !target.hasSkill('wuyue_gaibsddps_mark') && (target.hasSkill('wuyue_jianniangdengji') || target.hasSkill('wuyue_jianniangdengjihm'));
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            if (get.attitude(_status.event.player, target)) {
                                                return get.attitude(_status.event.player, target);
                                            }
                                            return 0;
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('改变时代的炮声');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('wuyue_gaibsddps_mark', { player: 'phaseDiscardEnd' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    target: 3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '改',
                                    init(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * (1.4 + l / 5 / 100);
                                    },
                                    onremove(player) {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / (1.4 + l / 5 / 100);
                                    },
                                    intro: {
                                        content: '你被改变时代的炮声增幅',
                                    },
                                },
                            },
                        },
                        wuyue_dmafleer: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmafleer = 0;
                                player.markSkill('wuyue_dmafleer');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var dm = player.storage.wuyue_dmafleer;
                                if (l >= 70) {
                                    if (dm < 6) {
                                        player.storage.wuyue_dmafleer += 1;
                                        player.markSkill('wuyue_dmafleer');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmafleer'), [1, 2], function (card, player, target) {
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
                                } else {
                                    if (dm < 12) {
                                        player.storage.wuyue_dmafleer += 1;
                                        player.markSkill('wuyue_dmafleer');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmafleer'), [1, 2], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmafleer = 0;
                                    player.markSkill('wuyue_dmafleer');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
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
                        },
                        wuyue_Pucelle: {
                            nobracket: true,
                            audio: 'ext:碧蓝航线/audio:2',
                            forced: true,
                            silent: true,
                            trigger: {
                                player: ['damageEnd', 'phaseBegin'],
                            },
                            content() {
                                if (!player.hasSkill('wuyue_Pucelle_mark')) {
                                    player.addSkill('wuyue_Pucelle_mark');
                                    player.storage.wuyue_Pucelle_mark = 2;
                                    player.markSkill('wuyue_Pucelle_mark');
                                } else {
                                    player.storage.wuyue_Pucelle_mark += 2;
                                    player.markSkill('wuyue_Pucelle_mark');
                                }
                            },
                            group: ['wuyue_Pucelle_damage'],
                            subSkill: {
                                damage: {
                                    forced: true,
                                    silent: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.hasSkill('wuyue_Pucelle_mark');
                                    },
                                    content() {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        var num = [1, 2, 3, 4].randomGet();
                                        if (num == 1) game.Blanbf(player.name + 'xlgj');
                                        if (player.storage.wuyue_Pucelle_mark > 1) {
                                            player.damage(150 - l * 2, 'fire')._triggered = null;
                                            player.storage.wuyue_Pucelle_mark -= 1;
                                            player.markSkill('wuyue_Pucelle_mark');
                                        } else {
                                            player.damage(150 - l * 2, 'fire')._triggered = null;
                                            player.removeSkill('wuyue_Pucelle_mark');
                                        }
                                    },
                                },
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '燃',
                                    init(player) {
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi * 1.3;
                                        player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi * 1.3;
                                        player.storage.wuyue_fangkongzhi = player.storage.wuyue_fangkongzhi * 1.3;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi * 1.3;
                                    },
                                    onremove(player) {
                                        player.storage.wuyue_paojizhi = player.storage.wuyue_paojizhi / 1.3;
                                        player.storage.wuyue_leijizhi = player.storage.wuyue_leijizhi / 1.3;
                                        player.storage.wuyue_fangkongzhi = player.storage.wuyue_fangkongzhi / 1.3;
                                        player.storage.wuyue_jidongzhi = player.storage.wuyue_jidongzhi / 1.3;
                                    },
                                    intro: {
                                        content: '你被点燃了',
                                    },
                                },
                            },
                        },
                        wuyue_shengnvdedg: {
                            nobracket: true,
                            trigger: {
                                player: 'phaseDiscardEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('wuyue_shengnvdedg'), [1, 3], function (card, player, target) {
                                        return !target.hasSkill('wuyue_shengnvdedg_mark') && (target.hasSkill('wuyue_jianniangdengji') || target.hasSkill('wuyue_jianniangdengjihm'));
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
                                    game.Blanbf(player.name + 'jn');
                                    player.popup('圣女的祷告');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].addTempSkill('wuyue_shengnvdedg_mark', { player: 'phaseBegin' });
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 2,
                                result: {
                                    target: 3,
                                },
                            },
                            subSkill: {
                                mark: {
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '祷',
                                    trigger: {
                                        player: 'damageBegin',
                                    },
                                    content() {
                                        var l = player.storage.wuyue_jianniangdengji;
                                        player.popup('圣女的祷告');
                                        trigger.num -= 60 + l * 3;
                                        player.recover(120 + l * 3)._triggered = null;
                                        player.removeSkill('wuyue_shengnvdedg_mark');
                                    },
                                    intro: {
                                        content: '你正在被圣女贞德守护',
                                    },
                                },
                            },
                        },
                        wuyue_dmsnvsd: {
                            nobracket: true,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            silent: true,
                            mark: true,
                            init(player) {
                                player.storage.wuyue_dmsnvsd = 0;
                                player.markSkill('wuyue_dmsnvsd');
                            },
                            filter(event, player) {
                                var evt = event.getParent('phaseUse');
                                if (!evt || evt.player != player) return false;
                                if (get.tag(event.card, 'recover')) return false;
                                if (!['basic', 'trick', 'delay'].includes(get.type(event.card))) return false;
                                return (
                                    player
                                        .getHistory('useCard', function (ev) {
                                            return ev.getParent('phaseUse') == evt && !get.tag(ev.card, 'recover') && ['basic', 'trick', 'delay'].includes(get.type(ev.card));
                                        })
                                        .indexOf(event) < 999
                                );
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengji;
                                var dm = player.storage.wuyue_dmsnvsd;
                                if (l >= 70) {
                                    if (dm < 7) {
                                        player.storage.wuyue_dmsnvsd += 1;
                                        player.markSkill('wuyue_dmsnvsd');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmsnvsd'), [1], function (card, player, target) {
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
                                } else {
                                    if (dm < 14) {
                                        player.storage.wuyue_dmsnvsd += 1;
                                        player.markSkill('wuyue_dmsnvsd');
                                    } else {
                                        player
                                            .chooseTarget(get.prompt('wuyue_dmsnvsd'), [1], function (card, player, target) {
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
                                    game.Blanbf(player.name + 'jn');
                                    player.storage.wuyue_dmsnvsd = 0;
                                    player.markSkill('wuyue_dmsnvsd');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                        result.targets[i].damage('yuleiji');
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
                        },
                        wuyue_mingyunzhisai: {
                            nobracket: true,
                            forced: true,
                            silent: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                var l = player.storage.wuyue_jianniangdengjihm;
                                player.popup('命运之骰');
                                event.num = Math.random();
                                if (event.num <= 0.33 + l / 12 / 100) {
                                    player.addTempSkill('wuyue_mingyunzhisai_mark', { player: 'phaseDiscardEnd' });
                                    game.Blanbf(player.name + 'jn1');
                                }
                                ('step 1');
                                var l = player.storage.wuyue_jianniangdengjihm;
                                event.num = Math.random();
                                if (event.num <= 0.3 + l / 12 / 100) {
                                    event.goto(2);
                                } else event.goto(4);
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('wuyue_mingyunzhisai'), [1], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'ptgj');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage(800, 'wuyuewushu');
                                    }
                                }
                                ('step 4');
                                var l = player.storage.wuyue_jianniangdengjihm;
                                event.num = Math.random();
                                if (event.num <= 0.3 + l / 12 / 100) {
                                    event.goto(5);
                                } else event.finish();
                                ('step 5');
                                player
                                    .chooseTarget(get.prompt('wuyue_mingyunzhisai'), [1, 8], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 6');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn2');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '云',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                            trigger.num += trigger.num * 0.25;
                                        } else trigger.num++;
                                    },
                                    intro: {
                                        content: '彩云触发中',
                                    },
                                },
                            },
                        },
                        wuyue_mingyunzhisai1: {
                            nobracket: true,
                            forced: true,
                            silent: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                var l = lib.config.wuyuedj;
                                player.popup('命运之骰');
                                event.num = Math.random();
                                if (event.num <= 0.5 + l / 6 / 100) {
                                    player.addTempSkill('wuyue_mingyunzhisai_mark', { player: 'phaseDiscardEnd' });
                                    game.Blanbf(player.name + 'jn1');
                                }
                                ('step 1');
                                var l = lib.config.wuyuedj;
                                event.num = Math.random();
                                if (event.num <= 0.5 + l / 6 / 100) {
                                    event.goto(2);
                                } else event.goto(4);
                                ('step 2');
                                player
                                    .chooseTarget(get.prompt('wuyue_mingyunzhisai'), [1], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'ptgj');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage(800, 'wuyuewushu');
                                    }
                                }
                                ('step 4');
                                var l = lib.config.wuyuedj;
                                event.num = Math.random();
                                if (event.num <= 0.3 + l / 6 / 100) {
                                    event.goto(5);
                                } else event.finish();
                                ('step 5');
                                player
                                    .chooseTarget(get.prompt('wuyue_mingyunzhisai'), [1, 8], function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(_status.event.player, target)) {
                                            return 1 - get.attitude(_status.event.player, target);
                                        }
                                        return 1;
                                    });
                                ('step 6');
                                if (result.bool) {
                                    game.Blanbf(player.name + 'jn2');
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                        result.targets[i].damage();
                                    }
                                }
                            },
                            subSkill: {
                                mark: {
                                    audio: 'ext:碧蓝航线/audio:2',
                                    forced: true,
                                    silent: true,
                                    mark: true,
                                    marktext: '云',
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        return event.source == player;
                                    },
                                    content() {
                                        if (trigger.player.hasSkill('wuyue_jianniangdengji') || trigger.player.hasSkill('wuyue_jianniangdengjihm')) {
                                            trigger.num += trigger.num * 0.25;
                                        } else trigger.num++;
                                    },
                                    intro: {
                                        content: '彩云触发中',
                                    },
                                },
                            },
                        },
                        wuyue_zhongzhuanghangmu: {
                            nobracket: true,
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            silent: true,
                            content() {
                                var l = player.storage.wuyue_jianniangdengjihm;
                                player.popup('重樱装母');
                                if (trigger.nature && trigger.nature == 'yuleiji') {
                                    trigger.num += trigger.num * (0.25 - l / 8 / 100);
                                } else trigger.num -= trigger.num * (0.25 + l / 8 / 100);
                            },
                        },
                    },
                };
                lib.config.all.characters.add('碧蓝航线');
                lib.config.characters.add('碧蓝航线');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:碧蓝航线/image/${i}.jpg`)
                }
                lib.translate['碧蓝航线_character_config'] = `碧蓝航线`;
                return QQQ;
            });
        },
        package: {
            intro: '<img src=extension/碧蓝航线/image/wuyue_huashengdun.jpg width="240" height="360"><br>&nbsp;&nbsp;<font color="#4a4aff">[碧蓝航线]<br>碧蓝航线1.3正式完成,大概的框架已经完工,舰娘血量与普通武将血量换算不一样,可不要因为舰娘血量数千就认为普通武将打不过,两方攻击换算不一样,详情我就不多说了,具体可以试试哦,舰娘等级现版本最高为70,经验值获取方式为使用舰娘击败敌人与击败boss(击败boss经验值是普通敌人的5倍),升级方式为游戏中点击舰娘系统后选择升级.如果有bug或者什么好的建议,可以到末日航线交流群找我,末日航线交流群  :480446472   (求求你了,加下群吧 QAQ)<br><span style=\'color: gold\'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span> ',
            author: '<font color="#FFA500">无夜月<br>',
            version: '1.0',
        },
    };
});

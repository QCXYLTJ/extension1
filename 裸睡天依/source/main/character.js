import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
game.import('character', function (lib, game, ui, get, ai, _status) {
    const lsty = {
        name: 'lsty',
        connect: true,
        characterSort: {
            lsty: {
                //同名异构
                lsty_tmyg: ['ls_caocao', 'ls_quncaocao', 'ls_liuhuang&&liuyi', 'lsw_liuhuang&&liuyi', 'ls_lvfan', 'ls_Eruda_sunli', 'ls_zhuran', 'ls_duanwei', 'ls_zhangning', 'ls_wanghun', 'ls_yanghu', 'ls_wangyi'],
                lsty_yxld: ['ls_shen_zhaoyun', 'ls_linyuxia', 'ls_shy', 'ls_Ace'],
                lsty_blcx: ['ls_cheng_jiangwei', 'ls_mou_sunquan', 'ls_mou_chengong'],
                lsty_qxkl: ['ls_lvmeng', 'ls_goufu', 'ls_dengai'],
                lsty_zqjb: ['ls_dongyun'],
                lsty_wwyc: ['ls_zhugeliang', 'ls_wenluxun', 'ls_Eruda_huangpusong'],
                lsty_sjjz: ['ls_chengyu', 'ls_jiaxu', 'ls_lukang', 'ls_yuanshao'],
                lsty_mdtx: [],
                lsty_yszx: ['ls_lianshi', 'ls_jackchen', 'ls_longjie'],
            },
        },
        character: {
            ls_lianshi: ['male', 'wei', 3, ['ls_juntian', 'ls_fengtun'], []],
            ls_caocao: ['male', 'wei', 4, ['ls_fushi'], ['des:丞相何故穿jk']],
            ls_lvfan: ['male', 'wei', 3, ['ls_diaodu', 'ls_diancai'], []],
            ls_duanwei: ['male', 'qun', 4, ['ls_langmie'], []],
            ls_zhangning: ['female', 'qun', 3, ['ls_tianlei', 'ls_dihuo'], []],
            ls_zhuran: ['male', 'wu', 4, ['ls_danshou'], []],
            ls_chengyu: ['male', 'shen', 3, ['ls_shefu', 'ls_benyu'], []],
            ls_quncaocao: ['male', 'qun', 4, ['ls_zhishi', 'ls_jianxiong'], []],
            ls_longjie: ['male', 'qun', '3/4', ['ls_shuixing', 'ls_cujin'], []],
            ls_jackchen: ['male', 'shu', 4, ['ls_tengnuo', 'ls_jieli', 'ls_chandou'], []],
            ls_yanghu: ['male', 'wei', 3, ['ls_tandang', 'ls_mingwang', 'ls_futu'], []],
            ls_jiaxu: ['male', 'shen', 3, ['ls_chenmou', 'ls_guanzhi', 'ls_dongxin'], []],
            ls_lukang: ['male', 'shen', 4, ['ls_xiuyan', 'ls_juedi', 'ls_qianjie'], []],
            'ls_liuhuang&&liuyi': ['female', 'shu', 3, ['ls_yucan', 'ls_luohong'], []],
            'lsw_liuhuang&&liuyi': ['female', 'wei', 3, ['ls_wyucan', 'ls_huachou'], []],
            ls_yuanshao: ['male', 'shen', '2/9', ['ls_ziya', 'ls_zhengrong'], []],
            ls_shy: ['female', 'long', 3, ['ls_fugui', 'ls_duocai'], []],
            ls_Ace: ['female', 'kes', 4, ['ls_lingdong', 'ls_xunying', 'ls_yingshan'], []],
            ls_wenluxun: ['male', 'wu', '4/6', ['Is_duoshi', 'Is_cangqi'], []],
            ls_Eruda_huangpusong: ['male', 'qun', 1, ['ls_Eruda_huangen', 'ls_Eruda_zhaotao', 'Erudadiy_kuanghan'], []],
            ls_Eruda_sunli: ['male', 'wei', 4, ['ls_Erudadiy_zongsi'], []],
            ls_shen_zhaoyun: ['male', 'shen', '3/6', ['ls_shen_longhun', 'ls_shen_longdan', 'ls_shen_chongzhen'], []],
            ls_wangyi: ['female', 'wei', 4, ['ls_zhenlie', 'ls_miji'], []],
            ls_goufu: ['male', 'shu', '3/5', ['ls_guzhen', 'ls_yiyong'], []],
            ls_wanghun: ['male', 'jin', 3, ['ls_fuxun', 'ls_chenya', 'ls_zhongliu'], ['clan:太原王氏']],
            ls_cheng_jiangwei: ['male', 'wei', 4, ['ls_yingshou', 'ls_suzhi'], []],
            ls_mou_chengong: ['male', 'qun', 3, ['ls_zhichi', 'ls_mingce'], []],
            ls_mou_sunquan: ['male', 'wu', 4, ['ls_zhiheng'], []],
            ls_zhugeliang: ['male', 'shu', '3/7', ['ls_guanxing', 'ls_kongcheng', 'ls_laohui', 'ls_zhengxian'], []],
            ls_dongyun: ['male', 'shu', 3, ['ls_lizheng', 'ls_qingbi'], []],
            ls_lvmeng: ['male', 'wu', 4, ['ls_qinxue', 'ls_keji', 'ls_botu'], []],
            ls_linyuxia: ['female', 'long', 4, ['ls_liuli', 'ls_taoguang', 'ls_suiren'], []],
            ls_dengai: ['male', 'wei', 4, ['ls_dengfeng', 'ls_weibi'], []],
        },
        group: ['long', 'kes'],
        groupnature: {
            long: 'fire',
            kes: 'water',
        },
        characterIntro: {},
        characterTitle: {},
        characterReplace: {},
        skill: {
            ls_fuxun: {
                mod: {
                    aiOrder(player, card, num) {
                        if (player.isPhaseUsing() && get.type(card) == 'equip' && get.equipValue(card, player) > 0) return num + 3;
                    },
                },
                audio: 'clanfuxun',
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'h',
                discard: false,
                lose: false,
                delay: false,
                selectCard() {
                    var player = _status.event.player;
                    if (ui.selected.targets.length && !ui.selected.targets[0].countGainableCards(player, 'h')) return 1;
                    return [0, 1];
                },
                filterTarget(card, player, target) {
                    if (player == target) return false;
                    if (!ui.selected.cards.length) return target.countGainableCards(player, 'h') > 0;
                    return true;
                },
                check(card) {
                    var player = _status.event.player;
                    var evtx = _status.event.getParent('phaseUse');
                    var targets = game.filterPlayer((target) => target != player && lib.skill.ls_fuxun.ai.result.target(player, target) != 0);
                    targets.sort((a, b) => Math.abs(lib.skill.ls_fuxun.ai.result.target(player, b)) - Math.abs(lib.skill.ls_fuxun.ai.result.target(player, a)));
                    if (evtx && targets.length) {
                        var target = targets[0];
                        if (
                            !target.hasHistory('lose', (evt) => {
                                return evt.getParent(3).name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards2.length;
                            }) &&
                            !target.hasHistory('gain', (evt) => {
                                return evt.parent.name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards.length;
                            }) &&
                            Math.abs(player.countCards('h') - target.countCards('h')) == 2
                        ) {
                            if (player.countCards('h') > target.countCards('h')) return 1 / (get.value(card) || 0.5);
                            return -1;
                        }
                        if (card.name == 'du') return 20;
                        return -1;
                    }
                    if (card.name == 'du') return 20;
                    return -1;
                },
                content() {
                    'step 0';
                    event.tar = target;
                    if (cards.length) {
                        player.give(cards, target);
                        event.boolx = true;
                    } else {
                        player.gainPlayerCard(target, 'h', true);
                        event.boolx = false;
                    }
                    ('step 1');
                    var evtx = event.getParent('phaseUse');
                    if (player.countCards('h') == target.countCards('h')) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (get.type(name) != 'basic') continue;
                            if (player.hasUseTarget({ name: name })) list.push(['基本', '', name]);
                            if (name == 'sha') {
                                for (var nature of lib.inpile_nature) {
                                    if (player.hasUseTarget({ name: name, nature: nature })) list.push(['基本', '', name, nature]);
                                }
                            }
                        }
                        if (list.length) {
                            player.chooseButton(['选择需要使用的基本牌', [list, 'vcard']]).set('ai', (button) => {
                                return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                            });
                        } else event.finish();
                    } else event.finish();
                    ('step 2');
                    if (result.bool) {
                        var card = {
                            name: result.links[0][2],
                            nature: result.links[0][3],
                        };
                        event.card = card;
                        event.tnum = game.countPlayer(function (current) {
                            return player.canUse(card, current) && current != player;
                        });
                        var csx;
                        var tar;
                        if (event.boolx) {
                            tar = target;
                            csx = target.getCards('hej');
                        } else {
                            tar = player;
                            csx = player.getCards('hej');
                        }
                        var str = '将' + get.translation(tar) + '一张牌作为' + get.translation(card.name) + '使用';
                        if (tar == player) {
                            player.chooseCardButton(csx, str, 1).set('prompt2', '将' + get.translation(tar) + '一张牌作为' + get.translation(card.name) + '使用');
                        } else player.chooseButton(1, [str, [csx, 'blank']]);
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        var tar;
                        var ca = result.links;
                        event.ca = ca;
                        if (event.tnum > 0) {
                            player.chooseTarget('选择【' + get.translation(event.card) + '】的目标', function (card, player, tar) {
                                return player.canUse(event.card, tar, false);
                            });
                        } else {
                            tar = player;
                            player.useCard({ name: event.card.name }, ca, true, tar, 'ls_fuxun');
                            event.finish();
                        }
                    } else {
                        event.finish();
                    }
                    ('step 4');
                    if (result.bool) {
                        var tar = result.targets[0];
                        player.useCard({ name: event.card.name }, event.ca, true, tar, 'ls_fuxun');
                    } else {
                        event.finish();
                    }
                    ('step 5');
                    if (player.getStat().card[event.card.name]) {
                        player.getStat().card[event.card.name]--;
                    }
                },
                ai: {
                    order(item, player) {
                        var evtx = _status.event.getParent('phaseUse');
                        if (
                            game.hasPlayer((current) => {
                                if (current == player || !evtx || get.attitude(player, current) == 0) return false;
                                return (
                                    !current.hasHistory('lose', (evt) => {
                                        return evt.getParent(3).name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards2.length;
                                    }) &&
                                    !current.hasHistory('gain', (evt) => {
                                        return evt.parent.name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards.length;
                                    }) &&
                                    Math.abs(player.countCards('h') - current.countCards('h')) == 2
                                );
                            })
                        )
                            return 10;
                        return 2;
                    },
                    result: {
                        target(player, target) {
                            var evtx = _status.event.getParent('phaseUse');
                            var num = get.sgn(get.attitude(player, target));
                            var targets = game.filterPlayer((current) => {
                                if (current == player || !evtx || get.attitude(player, current) == 0) return false;
                                return (
                                    !current.hasHistory('lose', (evt) => {
                                        return evt.getParent(3).name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards2.length;
                                    }) &&
                                    !current.hasHistory('gain', (evt) => {
                                        return evt.parent.name != 'ls_fuxun' && evt.getParent('phaseUse') == evtx && evt.cards.length;
                                    }) &&
                                    Math.abs(player.countCards('h') - current.countCards('h')) == 2
                                );
                            });
                            if (targets.includes(target)) {
                                if (player.countCards('h') < target.countCards('h')) return get.sgn(num + 0.5) * Math.sqrt(2 - num);
                                else return num * (2 + num);
                            }
                            return get.sgn(num + 0.5) * (1 - num) * 0.25;
                        },
                    },
                },
            },
            ls_chenya: {
                audio: 'clanchenya',
                trigger: {
                    global: ['useSkillAfter', 'logSkill'],
                },
                filter(event, player) {
                    if (event.type != 'player') return false;
                    var skill = event.sourceSkill || event.skill;
                    var info = get.info(skill);
                    if (info.charlotte) return false;
                    var translation = get.skillInfoTranslation(skill, event.player);
                    if (!translation) return false;
                    var match = translation.match(/出牌阶段限一次/g);
                    if (!match || match.every((value) => value != '出牌阶段限一次')) return false;
                    return event.player.countCards('h') > 0;
                },
                _priority: 1,
                check(event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                logTarget: 'player',
                content() {
                    'step 0';
                    var cnum = player.countCards('h');
                    event.cnum = cnum;
                    var num = player.storage.ls_chenya_num;
                    var str = '你可以重铸' + get.translation(trigger.player) + '' + num + '张牌';
                    if (trigger.player == player) {
                        trigger.player
                            .chooseCard('你可以重铸' + num + '张牌', [1, num], 'he', function (card, player) {
                                return player.canRecast(card);
                            })
                            .set('ai', (card) => {
                                var val = get.value(card);
                                return 6 - val;
                            });
                    } else {
                        player.chooseButton(num, [str, [trigger.player.getCards('hej'), 'blank']]);
                    }
                    ('step 1');
                    if (result.bool) {
                        if (result.cards) trigger.player.recast(result.cards);
                        if (result.links) trigger.player.recast(result.links);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.cnum < player.countCards('h')) {
                        player.draw();
                    }
                },
                group: ['ls_chenya_1', 'ls_chenya_2'],
                subSkill: {
                    1: {
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        content() {
                            player.storage.ls_chenya_num = 0;
                        },
                    },
                    2: {
                        trigger: {
                            global: ['useSkillAfter', 'logSkill'],
                        },
                        filter(event, player) {
                            if (event.type != 'player') return false;
                            var skill = event.sourceSkill || event.skill;
                            var info = get.info(skill);
                            if (info.charlotte) return false;
                            var translation = get.skillInfoTranslation(skill, event.player);
                            if (!translation) return false;
                            var match = translation.match(/出牌阶段限一次/g);
                            if (!match || match.every((value) => value != '出牌阶段限一次')) return false;
                            return event.player.countCards('h') > 0;
                        },
                        _priority: 10,
                        forced: true,
                        content() {
                            if (player.storage.ls_chenya_num) {
                                player.storage.ls_chenya_num++;
                            } else {
                                player.storage.ls_chenya_num = 1;
                            }
                        },
                    },
                },
            },
            ls_zhongliu: {
                audio: 'clanzhongliu',
                audioname: ['clan_wangling', 'clan_wangyun', 'clan_wanghun', 'clan_wanglun'],
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                clanSkill: true,
                filter(event, player) {
                    if (!event.cards.length) return true;
                    return !game.hasPlayer2((current) => {
                        if (!current.hasClan('太原王氏') && current != player) return false;
                        return current.hasHistory('lose', (evt) => {
                            return evt.parent == event && evt.hs.length;
                        });
                    });
                },
                content() {
                    'step 0';
                    var skills = player.getStockSkills(true, true);
                    game.expandSkills(skills);
                    var resetSkills = [];
                    var suffixs = ['used', 'round', 'block', 'blocker'];
                    for (var skill of skills) {
                        var info = get.info(skill);
                        if (typeof info.usable == 'number') {
                            if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                                delete player.getStat('triggerSkill')[skill];
                                resetSkills.add(skill);
                            }
                            if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                                delete player.getStat('skill')[skill];
                                resetSkills.add(skill);
                            }
                        }
                        if (info.round && player.storage[skill + '_roundcount']) {
                            delete player.storage[skill + '_roundcount'];
                            resetSkills.add(skill);
                        }
                        if (player.storage[`temp_ban_${skill}`]) {
                            delete player.storage[`temp_ban_${skill}`];
                        }
                        if (player.awakenedSkills.includes(skill)) {
                            player.restoreSkill(skill);
                            resetSkills.add(skill);
                        }
                        for (var suffix of suffixs) {
                            if (player.hasSkill(skill + '_' + suffix)) {
                                player.removeSkill(skill + '_' + suffix);
                                resetSkills.add(skill);
                            }
                        }
                    }
                    if (resetSkills.length) {
                        var str = '';
                        for (var i of resetSkills) {
                            str += '【' + get.translation(i) + '】、';
                        }
                        game.log(player, '重置了技能', '#g' + str.slice(0, -1));
                    }
                },
            },
            ls_yingshou: {
                mark: true,
                marktext: '营守',
                intro: {
                    name: '营守',
                    content(stor, player) {
                        var name = player.storage.ls_yingshou_name;
                        var color = player.storage.ls_yingshou_color;
                        if (!name || !color) {
                            return '未发动';
                        }
                        return '上一张通过此技能使用或打出的牌为' + get.translation(color) + '【' + get.translation(name) + '】.';
                    },
                },
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (player.hasSkill('ls_yingshou_1')) return false;
                    if (!player.countCards('hes')) return false;
                    //if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) return true
                    for (var name of lib.inpile) {
                        if (!['sha', 'shan'].includes(name)) continue;
                        var card = { name: name };
                        if (event.filterCard(card, player, event)) return true;
                        if (name == 'sha') {
                            for (var nature of lib.inpile_nature) {
                                card.nature = nature;
                                if (event.filterCard(card, player, event)) return true;
                            }
                        }
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [['锦囊', '', 'wuxie']];
                        for (var name of lib.inpile) {
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                }
                            } else if (name == 'shan' && event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        var dialog = ui.create.dialog('营守', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            audio: 'kunfen',
                            selectCard() {
                                var player = _status.event.player;
                                var num = 1;
                                return num;
                            },
                            filterCard(card, player) {
                                var name = links[0][2];
                                if (player.storage.ls_yingshou_name && player.storage.ls_yingshou_name == name) {
                                    return get.color(card) != player.storage.ls_yingshou_color;
                                }
                                return true;
                            },
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            onuse(result, player) {
                                var cards = result.cards;
                                var color = get.color(cards[0]);
                                if (player.storage.ls_yingshou_color) {
                                    if (player.storage.ls_yingshou_color != color) {
                                        player.addTempSkill('ls_yingshou_1');
                                    }
                                }
                                player.storage.ls_yingshou_name = links[0][2];
                                player.storage.ls_yingshou_color = color;
                            },
                        };
                    },
                    prompt(links, player) {
                        var num = 1;
                        if (num < 1) {
                            num = 1;
                        }
                        return '将' + num + '张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name);
                    return type == 'basic' && player.countCards('hes') > 0;
                },
                group: ['ls_yingshou_2'],
                subSkill: {
                    1: {},
                    2: {
                        audio: 'kunfen',
                        enable: 'chooseToUse',
                        position: 'hes',
                        viewAs: {
                            name: 'wuxie',
                        },
                        filter(event, player) {
                            if (player.hasSkill('ls_yingshou_1')) return false;
                            return player.countCards('hes') > 0;
                        },
                        filterCard(card, player) {
                            var name = 'wuxie';
                            if (player.storage.ls_yingshou_name && player.storage.ls_yingshou_name == name) {
                                return get.color(card) != player.storage.ls_yingshou_color;
                            }
                            return true;
                        },
                        viewAsFilter(player) {
                            return player.countCards('hes') > 0;
                        },
                        prompt: '将一张牌当无懈可击使用',
                        onuse(result, player) {
                            var cards = result.cards;
                            var color = get.color(cards[0]);
                            if (player.storage.ls_yingshou_color) {
                                if (player.storage.ls_yingshou_color != color) {
                                    player.addTempSkill('ls_yingshou_1');
                                }
                            }
                            player.storage.ls_yingshou_name = 'wuxie';
                            player.storage.ls_yingshou_color = color;
                        },
                        check(card) {
                            return 8 - get.equipValue(card);
                        },
                        threaten: 1.2,
                    },
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes') || player.hasSkill('jsrgnianen_blocker')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            ls_suzhi: {
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    if (!Array.isArray(event.respondTo)) return false;
                    if (player == event.respondTo[0]) return false;
                    var color = get.color(event.card);
                    if (color == 'none') return false;
                    return color != get.color(event.respondTo[1]);
                },
                content() {
                    player.draw(2);
                },
            },
            ls_zhichi: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                content() {
                    var num = player.maxHp - player.hp;
                    player.draw(num);
                },
                group: 'ls_zhichi_1',
                subSkill: {
                    1: {
                        trigger: {
                            player: 'changeHp',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.parent.name == 'damage' && event.num != 0;
                        },
                        content() {
                            var num = player.maxHp - player.hp;
                            player.changeHujia(num);
                        },
                    },
                },
            },
            ls_mingce: {
                usable: 1,
                enable: 'phaseUse',
                filter(event, player) {
                    return true;
                },
                filterTarget: true,
                content() {
                    'step 0';
                    var num = player.maxHp - player.hp;
                    if (num < 1) {
                        num = 1;
                    }
                    event.num = num;
                    target.chooseControl('视为使用一张【杀】', '与' + get.translation(player) + '各摸' + num + '张牌.').set('ai', function () {
                        if (num > 2) {
                            return 1;
                        }
                        var list = [0];
                        for (var i = 0; i < num; i++) {
                            list.push(1);
                        }
                        return list.randomGet();
                    });
                    ('step 1');
                    if (result.index == 0) {
                        target.chooseUseTarget('视为使用一张【杀】', { name: 'sha' }, false);
                    } else {
                        target.draw(num);
                        player.draw(num);
                    }
                },
                ai: {
                    order: 5,
                    result: {
                        player(player, tar) {
                            var num = player.maxHp - player.hp;
                            if (num < 1) {
                                num = 1;
                            }
                            return num;
                        },
                        target(player, tar) {
                            var num = player.maxHp - player.hp;
                            if (num < 1) {
                                num = 1;
                            }
                            return num;
                        },
                    },
                },
            },
            ls_zhiheng: {
                usable: 1,
                enable: 'phaseUse',
                content() {
                    'step 0';
                    player.chooseCard('he', [1, Infinity]).set('ai', function (card) {
                        return 6 - get.value(card);
                    });
                    ('step 1');
                    if (result.bool) {
                        event.cards = result.cards;
                        player.chooseControl('牌堆顶', '牌堆底').set('ai', function () {
                            return [0, 1].randomGet();
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    var top = [];
                    var bottom = [];
                    var num = event.cards.length;
                    event.num = num;
                    if (result.index == 0) {
                        top = event.cards;
                        event.nx = 1;
                        game.log(player, '将' + num + '张牌置于牌堆顶');
                    } else {
                        bottom = event.cards;
                        event.nx = 2;
                        game.log(player, '将' + num + '张牌置于牌堆底');
                    }
                    top.reverse();
                    for (var i = 0; i < top.length; i++) {
                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                    }
                    for (i = 0; i < bottom.length; i++) {
                        ui.cardPile.appendChild(bottom[i]);
                    }
                    game.updateRoundNumber();
                    ('step 3');
                    if (player != _status.currentPhase) {
                        event.num++;
                    }
                    if (event.nx == 1) {
                        player.draw(event.num, 'bottom');
                    } else {
                        player.draw(event.num);
                    }
                    game.updateRoundNumber();
                },
                group: 'ls_zhiheng_1',
                subSkill: {
                    1: {
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            return get.type(event.card) != 'equip' && player.countCards('he') > 0;
                        },
                        content() {
                            player.useSkill('ls_zhiheng');
                        },
                    },
                },
                ai: {
                    order(item, player) {
                        return get.order({ name: 'tao' });
                    },
                    result: {
                        player: 1,
                    },
                    threaten: 1.55,
                },
            },
            ls_guzhen: {
                trigger: {
                    source: 'damageEnd',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    var n1 = player.countCards('h');
                    var n2 = player.hp;
                    if (n1 > n2) {
                        return !player.hasSkill('ls_guzhen_1');
                    }
                    if (n2 > n1) {
                        return !player.hasSkill('ls_guzhen_2');
                    }
                    return !player.hasSkill('ls_guzhen_2') || !player.hasSkill('ls_guzhen_1');
                },
                content() {
                    var nx = player.maxHp;
                    var n1 = player.countCards('h');
                    var n2 = player.hp;
                    if (n1 == n2 && n1 < nx) {
                        player.draw(nx - n1);
                        player.recover(nx - n2);
                        player.addTempSkill('ls_guzhen_1');
                        player.addTempSkill('ls_guzhen_2');
                    }
                    if (n1 > n2) {
                        player.recover(n1 - n2);
                        player.addTempSkill('ls_guzhen_1');
                    }
                    if (n2 > n1) {
                        player.draw(n2 - n1);
                        player.addTempSkill('ls_guzhen_2');
                    }
                },
                subSkill: {
                    1: {},
                    2: {},
                },
            },
            ls_yiyong: {
                trigger: {
                    player: 'useCardToPlayered',
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                content() {
                    'step 0';
                    var nx = player.maxHp - player.hp;
                    if (nx <= 0) {
                        nx = 1;
                    }
                    event.nx = nx;
                    player.chooseToDiscard('he', [1, nx]).set('prompt2', '弃置1至' + nx + '张牌或流失一点体力令此【杀】不可响应且造成的伤害+1或-1.');
                    //event.goto(2)
                    ('step 1');
                    if (!result.bool) {
                        player.loseHp();
                    }
                    ('step 2');
                    trigger.directHit.addArray(game.players);
                    player.chooseControl('令此【杀】伤害+1', '令此【杀】伤害-1').set('ai', function () {
                        var eff = get.effect(trigger.target, { name: 'sha' }, trigger.player, player);
                        if (eff > 0) return 0;
                        return 1;
                    });
                    ('step 3');
                    if (result.index == 0) {
                        var map = trigger.customArgs;
                        var id = trigger.target.playerid;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                        map[id].extraDamage += 1;
                    } else {
                        var map = trigger.customArgs;
                        var id = trigger.target.playerid;
                        if (!map[id]) map[id] = {};
                        if (typeof map[id].extraDamage != 'number') map[id].extraDamage = 0;
                        map[id].extraDamage -= 1;
                    }
                },
            },
            ls_zhenlie: {
                audio: 'zhenlie',
                trigger: {
                    target: 'useCardToTargeted',
                },
                filter(event, player) {
                    return event.player != player;
                },
                check(event, player) {
                    if (event.parent.excluded.includes(player)) return false;
                    if (get.attitude(player, event.player) > 0) {
                        return false;
                    }
                    if (get.tag(event.card, 'respondSha')) {
                        if (player.countCards('h', { name: 'sha' }) == 0) {
                            return true;
                        }
                    } else if (get.tag(event.card, 'respondShan')) {
                        if (player.countCards('h', { name: 'shan' }) == 0) {
                            return true;
                        }
                    } else if (get.tag(event.card, 'damage')) {
                        if (event.card.name == 'shuiyanqijunx') return player.countCards('e') == 0;
                        return true;
                    } else if ((event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) && player.hp > 2) {
                        return true;
                    }
                    return false;
                },
                content() {
                    'step 0';
                    event.tar = trigger.player;
                    event.c1 = event.tar.getCards('h');
                    event.c2 = event.tar.getCards('ej');
                    player.loseHp();
                    trigger.parent.excluded.add(player);
                    ('step 1');
                    var num = player.maxHp - player.hp;
                    player.discardPlayerCard(get.prompt('ls_zhenlie', event.tar), event.tar, [1, num], 'hej');
                    ('step 2');
                    if (result.bool) {
                        var cs = result.cards;
                        var list1 = [];
                        var list2 = [];
                        for (var card of cs) {
                            for (var cx of event.c1) {
                                if (card == cx) {
                                    list1.push(card);
                                }
                            }
                            for (var cx of event.c2) {
                                if (card == cx) {
                                    list2.push(card);
                                }
                            }
                        }
                        if ((event.c1 && event.c1.length && list1.length == event.c1.length) || (event.c2 && event.c2.length && list2.length == event.c2.length)) {
                            player.useSkill('ls_miji');
                        }
                    }
                },
            },
            ls_miji: {
                mark: true,
                marktext: '秘',
                intro: {
                    name: '秘技',
                    content(stor, player) {
                        var n1 = 0;
                        var n2 = 0;
                        var num = player.maxHp - player.hp;
                        if (player.hasSkill('ls_miji_1')) {
                            n2 = num;
                            n1 = player.maxHp - num;
                        } else {
                            n1 = num;
                            n2 = player.maxHp - num;
                        }
                        if (n1 < 0) {
                            n1 = 0;
                        }
                        if (n1 > 4) {
                            n1 = 4;
                        }
                        if (n2 < 0) {
                            n2 = 0;
                        }
                        return '结束阶段,你可以摸' + n1 + '张牌并可以将' + n2 + '张牌作为任意一张基本牌使用';
                    },
                },
                audio: 'miji',
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                prompt2() {
                    var player = _status.event.player;
                    var n1 = 0;
                    var n2 = 0;
                    var num = player.maxHp - player.hp;
                    if (player.hasSkill('ls_miji_1')) {
                        n2 = num;
                        n1 = player.maxHp - num;
                    } else {
                        n1 = num;
                        n2 = player.maxHp - num;
                    }
                    if (n1 < 0) {
                        n1 = 0;
                    }
                    if (n1 > 4) {
                        n1 = 4;
                    }
                    if (n2 < 0) {
                        n2 = 0;
                    }
                    return '结束阶段,你可以摸' + n1 + '张牌并可以将' + n2 + '张牌作为任意一张基本牌使用';
                },
                content() {
                    'step 0';
                    event.n1 = 0;
                    event.n2 = 0;
                    var num = player.maxHp - player.hp;
                    if (player.hasSkill('ls_miji_1')) {
                        event.n1 = player.maxHp - num;
                        event.n2 = num;
                        player.removeSkill('ls_miji_1');
                    } else {
                        event.n1 = num;
                        event.n2 = player.maxHp - num;
                        player.addSkill('ls_miji_1');
                    }
                    if (event.n1 < 0) {
                        event.n1 = 0;
                    }
                    if (event.n1 > 4) {
                        event.n1 = 4;
                    }
                    if (event.n2 < 0) {
                        event.n2 = 0;
                    }
                    player.draw(event.n1);
                    ('step 1');
                    var list = [];
                    for (var name of lib.inpile) {
                        var card = {
                            name: name,
                        };
                        if (
                            game.hasPlayer(function (current) {
                                return player.canUse(card, current);
                            })
                        ) {
                            if (name == 'sha') {
                                if (lib.filter.cardUsable({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var nature of lib.inpile_nature) {
                                    if (lib.filter.cardUsable({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                }
                            } else if (get.type(name) == 'basic' && lib.filter.cardUsable({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                    }
                    if (list.length) {
                        player.chooseButton(['选择一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
                            var player = _status.event.player;
                            var card = { name: button.link[2], nature: button.link[3] };
                            if (card.name == 'tao') {
                                if (player.hp == 1 || (player.hp == 2 && !player.hasShan()) || player.needsToDiscard()) {
                                    return 5;
                                }
                                return 1;
                            }
                            if (card.name == 'sha') {
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                    })
                                ) {
                                    if (card.nature == 'fire') return 2.95;
                                    if (card.nature == 'thunder' || card.nature == 'ice') return 2.92;
                                    return 2.9;
                                }
                                return 0;
                            }
                            if (card.name == 'jiu') {
                                return 0.5;
                            }
                            return 0;
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result && result.bool && result.links[0]) {
                        var card = { name: result.links[0][2], nature: result.links[0][3] };
                        event.card = card;
                        var tnum = game.countPlayer(function (current) {
                            return player.canUse(card, current) && current != player;
                        });
                        if (tnum <= 0) {
                            player.chooseCard('he', event.n2).set('prompt2', '将' + event.n2 + '张牌作为' + get.translation(card.name) + '使用');
                        } else {
                            player.chooseCardTarget({
                                prompt: '将' + event.n2 + '张牌作为' + get.translation(card.name) + '使用',
                                filterCard: true,
                                selectCard: event.n2,
                                position: 'he',
                                filterTarget(ca, player, tar) {
                                    return player.canUse(card, tar, false);
                                },
                            });
                        }
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        var tar;
                        if (result.targets[0]) {
                            tar = result.targets[0];
                        } else {
                            tar = player;
                        }
                        player.useCard({ name: event.card.name }, result.cards, true, tar, 'ls_miji');
                    }
                },
                subSkill: {
                    1: {},
                },
            },
            ls_shen_longhun: {
                marktext: '龙魂',
                intro: {
                    name: '龙魂',
                    content: '',
                },
                audio: 'longhun',
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.countMark('ls_shen_longhun'));
                    },
                },
                trigger: {
                    global: 'phaseBefore',
                    player: ['changeHp', 'gainMaxHpAfter', 'loseMaxHpAfter'],
                },
                _priority: 10,
                forced: true,
                content() {
                    var hp = Math.floor((player.maxHp - player.hp) / 2);
                    var mn = player.countMark('ls_shen_longhun');
                    if (mn != hp) {
                        if (mn < hp) {
                            player.addMark('ls_shen_longhun', hp - mn);
                        }
                        if (mn > hp) {
                            player.removeMark('ls_shen_longhun', mn - hp);
                        }
                        player.removeSkill('ls_shen_longdan_1');
                        player.draw();
                    }
                },
                group: ['ls_shen_longhun_1', 'ls_shen_longhun_2'],
                subSkill: {
                    1: {
                        trigger: {
                            player: 'recoverBegin',
                        },
                        _priority: 2,
                        forced: true,
                        content() {
                            'step 0';
                            var num = player.countMark('ls_shen_longhun');
                            if (num < 2 /*&& !(trigger.skill && trigger.skill == 'ls_shen_longhun_2')*/) {
                                trigger.cancel();
                                player.changeHujia(trigger.num);
                            }
                        },
                    },
                    2: {
                        trigger: {
                            player: ['damageEnd', 'dying'],
                        },
                        forced: true,
                        filter(event, player) {
                            return player.hujia > 0;
                        },
                        content() {
                            'step 0';
                            var hj = player.hujia;
                            player.changeHujia(-hj);
                            player.recover(hj);
                        },
                    },
                },
                ai: {
                    nohujia: true,
                },
            },
            ls_shen_longdan: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (player.hasSkill('ls_shen_longdan_1')) return false;
                    var num = player.countMark('ls_shen_longhun');
                    if (num >= 2) {
                        var nx = player.countCards('hes', function (card) {
                            return get.type(card) != 'basic';
                        });
                        if (!player.countCards('hes', { type: 'basic' }) && nx < 2) return false;
                    } else {
                        if (!player.countCards('hes', { type: 'basic' })) return false;
                    }
                    for (var name of lib.inpile) {
                        if (get.type2(name) != 'basic') continue;
                        var card = { name: name };
                        if (event.filterCard(card, player, event)) return true;
                        if (name == 'sha') {
                            for (var nature of lib.inpile_nature) {
                                card.nature = nature;
                                if (event.filterCard(card, player, event)) return true;
                            }
                        }
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [];
                        for (var name of lib.inpile) {
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                for (var nature of lib.inpile_nature) {
                                    if (event.filterCard && event.filterCard({ name: name, nature: nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                                }
                            } else if (get.type(name) == 'basic' && event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                        }
                        var dialog = ui.create.dialog('龙胆', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            filterCard(card) {
                                var num = player.countMark('ls_shen_longhun');
                                if (num < 2) return get.type(card) == 'basic';
                                return true;
                            },
                            selectCard() {
                                var player = _status.event.player;
                                var num = player.countMark('ls_shen_longhun');
                                if (num < 2) return 1;
                                if (ui.selected.cards) {
                                    if (get.type(ui.selected.cards[0]) == 'basic') return 1;
                                }
                                return 2;
                            },
                            popname: true,
                            check(card) {
                                return 8 - get.value(card);
                            },
                            position: 'hes',
                            viewAs: { name: links[0][2], nature: links[0][3] },
                            precontent() {
                                player.addTempSkill('ls_shen_longdan_1');
                            },
                        };
                    },
                    prompt(links, player) {
                        var num = player.countMark('ls_shen_longhun');
                        if (num < 2) return '将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                        return '将一张基本牌或两张非基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name);
                    return type == 'basic' && player.countCards('hes') > 0;
                },
                subSkill: {
                    1: {},
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.countCards('hes') || player.hasSkill('jsrgnianen_blocker')) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            ls_shen_chongzhen: {
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    return event.skill && event.skill == 'ls_shen_longdan_backup' && ['sha', 'shan'].includes(event.card.name);
                },
                logTarget(event, player) {
                    if (event.name == 'respond') return event.source;
                    if (event.card.name == 'sha') return event.targets[0];
                    return event.respondTo[0];
                },
                content() {
                    'step 0';
                    var list = [_status.currentPhase];
                    var target = lib.skill.ls_shen_chongzhen.logTarget(trigger, player);
                    list.push(target);
                    if (trigger.targets) {
                        list.push(trigger.targets);
                    }
                    player
                        .chooseTarget('冲阵:你可以获得此牌目标或当前回合角色一张牌', function (card, player, tar) {
                            return list.includes(tar);
                        })
                        .set('ai', function (tar) {
                            return get.effect(tar, { name: 'shunshou' }, player, player);
                        });
                    ('step 1');
                    if (result.bool) {
                        player.gainPlayerCard(get.prompt('ls_shen_chongzhen', result.targets[0]), result.targets[0], 'hej', 'visibleMove');
                    }
                },
            },
            ls_juntian: {
                init() {
                    if (!_status.average) _status.average = 0;
                    if (!_status.average_r) _status.average_r = _status.average;
                    if (!_status.average_c) _status.average_c = [];
                },
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                content() {
                    var num = Math.floor(game.countPlayer((current) => current.getHandcardLimit()) / game.countPlayer());
                    _status.average += num;
                    _status.average_r += _status.average;
                    player.markSkill('ls_juntian_mark1');
                    player.markSkill('ls_juntian_mark2');
                },
                group: 'ls_juntian_effect',
                subSkill: {
                    effect: {
                        audio: 'ext:裸睡天依:2',
                        forced: true,
                        trigger: {
                            global: ['phaseBegin', 'phaseEnd'],
                        },
                        logTarget: 'player',
                        content() {
                            'step 0';
                            var num = trigger.player.countCards('h') - _status.average_r;
                            if (num > 0) {
                                _status.average_r++;
                                player.markSkill('ls_juntian_mark1');
                                trigger.player.chooseCard(num, 'h', '均田:将' + get.cnNumber(num) + '张手牌置于<策>区', true);
                            }
                            if (num < 0) {
                                _status.average_r--;
                                player.markSkill('ls_juntian_mark1');
                                if (_status.average_c.length) {
                                    var togain = [];
                                    for (var i = 0; i < Math.abs(num) && i < _status.average_c.length; i++) {
                                        togain.push(_status.average_c[i]);
                                    }
                                    trigger.player.gain(togain, 'gain2', 'fromStorage');
                                    _status.average_c.removeArray(togain);
                                    player.markSkill('ls_juntian_mark2');
                                }
                                event.finish();
                            }
                            if (num == 0) player.chooseBool('均田:是否发动〖豊屯〗？').set('ai', () => true);
                            ('step 1');
                            if (result.bool) {
                                if (result.cards && result.cards.length) {
                                    trigger.player.$throw(result.cards, 1000);
                                    game.log(trigger.player, '将', result.cards, '置入了<策>区');
                                    trigger.player.lose(result.cards, ui.special, 'toStorage');
                                    _status.average_c.addArray(result.cards);
                                    player.markSkill('ls_juntian_mark2');
                                    event.finish();
                                } else {
                                    player.useSkill('ls_fengtun');
                                    if (_status.average_c.length > _status.average_r) {
                                        if (_status.average_c.length == 1) {
                                            event._result = {
                                                links: _status.average_c,
                                                bool: true,
                                            };
                                        } else {
                                            player.chooseButton(['将<策>区一张牌交给一名其他角色并视为使用一张雷【杀】', _status.average_c], true).set('ai', function (button) {
                                                return 5 - get.value(button.link);
                                            });
                                        }
                                    } else event.finish();
                                }
                            }
                            ('step 2');
                            event.togive = result.links[0];
                            player
                                .chooseTarget(lib.filter.notMe, true)
                                .set('createDialog', ['选择获得此牌的角色', [event.togive]])
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (get.value(event.togive, player, 'raw') < 0) {
                                        return -att;
                                    } else if (att > 0) {
                                        return att / (1 + target.countCards('h'));
                                    } else {
                                        return att / 100;
                                    }
                                });
                            ('step 3');
                            player.line(result.targets[0], 'green');
                            result.targets[0].gain(event.togive, 'gain2', 'fromStorage');
                            _status.average_c.remove(event.togive);
                            player.markSkill('ls_juntian_mark2');
                            var card = { name: 'sha', nature: 'thunder' };
                            if (player.hasUseTarget(card, false)) {
                                player.chooseUseTarget(card, 'nodistance', true, false);
                            }
                        },
                    },
                    mark1: {
                        marktext: '均',
                        intro: {
                            markcount: () => '' + _status.average + '/' + _status.average_r,
                            content: () => '初始/当前均值:' + _status.average + '/' + _status.average_r,
                        },
                    },
                    mark2: {
                        marktext: '策',
                        intro: {
                            markcount: () => _status.average_c.length,
                            mark(dialog, content, player) {
                                if (!_status.average_c.length) return '<策>区中没有牌';
                                else dialog.addAuto(_status.average_c);
                            },
                            content() {
                                if (!_status.average_c.length) return '<策>区中没有牌';
                                return get.translation(_status.average_c);
                            },
                        },
                    },
                },
            },
            ls_fengtun: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'roundStart',
                },
                content() {
                    'step 0';
                    player
                        .chooseControl('<span class="firetext">+1</span>', '<span class="thundertext">-1</span>', 'cancel2')
                        .set('prompt', get.prompt(event.name))
                        .set('prompt2', '令<均>值±1(初始/当前均值:' + _status.average + '/' + _status.average_r + ')')
                        .set('ai', function () {
                            return _status.event.controls.randomGet();
                        });
                    ('step 1');
                    if (result.control && result.control != 'cancel2') {
                        if (result.index == 0) _status.average_r++;
                        else _status.average_r--;
                        player.markSkill('ls_juntian_mark1');
                    } else event.finish();
                    ('step 2');
                    if (_status.average_r != _status.average) {
                        player.chooseBool('豊屯:是否重置<均>值？(初始/当前均值:' + _status.average + '/' + _status.average_r + ')').set('ai', function () {
                            return [0, 1].randomGet();
                        });
                    } else event.goto(4);
                    ('step 3');
                    if (result.bool) {
                        _status.average_r = _status.average;
                        player.markSkill('ls_juntian_mark1');
                    }
                    event.finish();
                    ('step 4');
                    event.num = _status.average;
                    event.forced = false;
                    ('step 5');
                    if (event.num && _status.average_c.length) {
                        var prompt = '是否分配<策>区中的牌？';
                        if (event.forced) prompt = '请继续分配<策>区中的牌';
                        player
                            .chooseCardButton(prompt, _status.average_c, [1, event.num])
                            .set('forced', event.forced)
                            .set('ai', function (button) {
                                if (ui.selected.buttons.length == 0) return 1;
                                return 0;
                            });
                    } else event.finish();
                    ('step 6');
                    if (result.bool) {
                        event.togive = result.links;
                        event.num -= result.links.length;
                        event.forced = true;
                        player
                            .chooseTarget('将' + get.translation(result.links) + '交给一名角色', true)
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
                            .set('enemy', get.value(event.togive[0], player, 'raw') < 0);
                    } else event.finish();
                    ('step 7');
                    player.line(result.targets[0], 'green');
                    result.targets[0].gain(event.togive, 'gain2', 'fromStorage');
                    _status.average_c.removeArray(event.togive);
                    player.markSkill('ls_juntian_mark2');
                    event.goto(5);
                },
                group: 'ls_fengtun_use',
                subSkill: {
                    use: {
                        enable: ['chooseToUse', 'chooseToRespond'],
                        filter(event, player) {
                            if (_status.average_c.length > _status.average_r) {
                                for (var name of lib.inpile) {
                                    if (
                                        get.type(name) == 'basic' &&
                                        event.filterCard &&
                                        event.filterCard(
                                            {
                                                name: name,
                                            },
                                            player,
                                            event
                                        )
                                    ) {
                                        return true;
                                    }
                                }
                            }
                            return false;
                        },
                        hiddenCard(player, name) {
                            if (get.type(name) == 'basic') return _status.average_c.length > _status.average_r;
                        },
                        chooseButton: {
                            dialog(event, player) {
                                var dialog = ui.create.dialog('豊屯', 'hidden');
                                var table = document.createElement('div');
                                table.classList.add('add-setting');
                                table.style.margin = '0';
                                table.style.width = '100%';
                                table.style.position = 'relative';
                                var list = lib.inpile.filter((name) => get.type(name) == 'basic');
                                for (var name of list) {
                                    var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                    var bool = event.filterCard && event.filterCard({ name: name }, player, event);
                                    td.innerHTML = (bool ? '<span>' : '<span style="opacity: 0.5">') + get.translation(name) + '</span>';
                                    td.link = name;
                                    td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                    Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
                                    table.appendChild(td);
                                    dialog.buttons.add(td);
                                }
                                dialog.content.appendChild(table);
                                dialog.add(_status.average_c);
                                return dialog;
                            },
                            filter(button, player) {
                                var evt = _status.event.parent;
                                if (typeof button.link == 'string') {
                                    if (!evt.filterCard || !evt.filterCard({ name: button.link }, player, evt)) return false;
                                }
                                if (ui.selected.buttons.length) return typeof ui.selected.buttons[0].link != typeof button.link;
                                return true;
                            },
                            select: 2,
                            check(button) {
                                var player = _status.event.player;
                                if (typeof button.link == 'string') {
                                    var card = { name: button.link };
                                    if (game.hasPlayer((current) => player.canUse(card, current) && get.effect(current, card, player, player) > 0)) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 5;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                return 2.9;
                                        }
                                    }
                                    return 5 - get.value(card); //QQQ
                                }
                                return 5 - get.value(button.link);
                            },
                            backup(links, player) {
                                if (typeof links[0] == 'object') links.reverse();
                                return {
                                    audio: 'ls_fengtun',
                                    popname: true,
                                    filterCard: () => false,
                                    selectCard: -1,
                                    viewAs: {
                                        name: links[0],
                                    },
                                    card: links[1],
                                    ignoreMod: true,
                                    precontent() {
                                        'step 0';
                                        var togive = lib.skill['ls_fengtun_use_backup'].card;
                                        player
                                            .chooseTarget(lib.filter.notMe, true)
                                            .set('createDialog', ['豊屯:将此牌交给一名其他角色', [togive]])
                                            .set('ai', function (target) {
                                                var att = get.attitude(player, target);
                                                if (get.value(togive, player, 'raw') < 0) {
                                                    return -att;
                                                } else if (att > 0) {
                                                    return att / (1 + target.countCards('h'));
                                                } else {
                                                    return att / 100;
                                                }
                                            });
                                        ('step 1');
                                        var togive = lib.skill['ls_fengtun_use_backup'].card;
                                        player.line(result.targets[0], 'green');
                                        result.targets[0].gain(togive, 'gain2', 'fromStorage');
                                        _status.average_c.remove(togive);
                                        player.markSkill('ls_juntian_mark2');
                                    },
                                };
                            },
                            prompt(links, player) {
                                return '选择【' + get.translation(links[0]) + '】的目标';
                            },
                        },
                        ai: {
                            order() {
                                var player = _status.event.player;
                                var event = _status.event;
                                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                    return 3.1;
                                }
                                return 2.9;
                            },
                            respondSha: true,
                            respondShan: true,
                            skillTagFilter(player, tag, arg) {
                                if (_status.average_c.length > _status.average_r) {
                                    if (tag == 'respondSha') {
                                        if (arg != 'use') return false;
                                    }
                                }
                                return false;
                            },
                            result: {
                                player: 1,
                            },
                        },
                    },
                },
            },
            ls_fushi: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    player: 'useCard2',
                },
                filter(event, player) {
                    return game.hasPlayer((current) => current.hasMark('ls_fushi')) && (['sha', 'tao'].includes(event.card.name) || get.type(event.card) == 'trick');
                },
                content() {
                    'step 0';
                    event.loged = false;
                    if (trigger.targets.some((target) => target.hasMark(event.name))) {
                        player
                            .chooseTarget(get.prompt2(event.name), '移去一名目标角色一枚<负>并令此牌不可抵消且不计入次数', function (card, player, target) {
                                return trigger.targets.includes(target) && target.hasMark(event.name);
                            })
                            .set('ai', function (target) {
                                return 1;
                            });
                    } else event.goto(2);
                    ('step 1');
                    if (result.bool) {
                        event.loged = true;
                        result.targets[0].removeMark(event.name, 1);
                        trigger.nowuxie = true;
                        trigger.customArgs.default.directHit2 = true;
                        if (trigger.addCount !== false) {
                            trigger.addCount = false;
                            if (player.stat[player.stat.length - 1].card.sha > 0) {
                                player.stat[player.stat.length - 1].card.sha--;
                            }
                        }
                    }
                    ('step 2');
                    var filter = function (player, target) {
                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
                    };
                    if (game.hasPlayer((target) => filter(player, target)) && player.hasMark(event.name)) {
                        player
                            .chooseTarget(get.prompt2(event.name), '移去自己一枚<负>标记为此牌额外选择一个目标', function (card, player, target) {
                                return filter(player, target);
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, _status.event.getTrigger().card, player, player);
                            });
                    } else event.finish();
                    ('step 3');
                    if (result.bool) {
                        player.removeMark(event.name, 1);
                        if (!event.isMine() && !event.isOnline()) game.delayx();
                        event.target = result.targets[0];
                    } else event.finish();
                    ('step 4');
                    player.line(event.target, 'green');
                    trigger.targets.add(event.target);
                },
                marktext: '负',
                intro: {
                    content: 'mark',
                },
                group: ['ls_fushi_addMark', 'ls_fushi_lose', 'ls_fushi_damage'],
                subSkill: {
                    addMark: {
                        forced: true,
                        trigger: {
                            source: 'damageEnd',
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            if (event.player == player) return event.source && event.source.isAlive();
                            return true;
                        },
                        content() {
                            if (trigger.player == player) {
                                player.line(trigger.source);
                                trigger.source.addMark('ls_fushi', 1);
                                if (trigger.cards && trigger.cards.length && get.itemtype(trigger.cards) == 'cards' && trigger.cards.filterInD().length) {
                                    player.gain(trigger.cards.filterInD(), 'gain2');
                                }
                            } else {
                                player.addMark('ls_fushi', 1);
                            }
                        },
                    },
                    lose: {
                        forced: true,
                        trigger: {
                            player: 'loseAfter',
                        },
                        filter(event, player) {
                            return player.countCards('h') < player.countMark('ls_fushi');
                        },
                        content() {
                            var num = player.countMark('ls_fushi') - player.countCards('h');
                            player.removeMark('ls_fushi', num);
                            player.draw(num);
                        },
                    },
                    damage: {
                        forced: true,
                        trigger: {
                            player: 'damageBegin4',
                        },
                        filter(event, player) {
                            var source = event.source;
                            if (source && source != player && source.hasMark('ls_fushi')) return source.countGainableCards(player, 'he');
                            return (!source || !source.hasMark('ls_fushi')) && event.num > 1;
                        },
                        content() {
                            if (!trigger.source || !trigger.source.hasMark('ls_fushi')) {
                                trigger.num = 1;
                            } else {
                                player.gainPlayerCard(trigger.source, 'he').set('prompt', get.prompt(event.name)).set('prompt2', '获得伤害来源一张牌');
                            }
                        },
                    },
                },
            },
            ls_diaodu: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    var map = [1, 2, 3, 4, 5].map((num) => 'equip' + num);
                    return map.some((equip) => player.isEmpty(equip));
                },
                content() {
                    'step 0';
                    var map = [1, 2, 3, 4, 5].map((num) => 'equip' + num);
                    var empty = map.filter((equip) => player.isEmpty(equip));
                    var targets = game.filterPlayer(function (target) {
                        if (target == player) return false;
                        var list = map.filter((equip) => target.getEquip(equip));
                        var equips = empty.filter((equip) => list.includes(equip));
                        return equips.length;
                    });
                    if (!targets.length) {
                        event._result = { bool: false };
                    } else {
                        player
                            .chooseTarget('选择你要获得装备牌的目标,或取消并摸一张牌', function (card, player, target) {
                                return targets.includes(target);
                            })
                            .set('ai', function (target) {
                                return -get.attitude(player, target);
                            });
                    }
                    ('step 1');
                    if (result.bool) {
                        event.target = result.targets[0];
                        player.line(event.target);
                        player
                            .choosePlayerCard(event.target, true, 'e')
                            .set('filterButton', function (button) {
                                return player.isEmpty(get.subtype(button.link));
                            })
                            .set('ai', function (button) {
                                return get.value(button.link) * get.effect(event.target, button.link, player, event.target);
                            });
                    } else {
                        player.draw();
                        event.finish();
                    }
                    ('step 2');
                    player.gain(result.links, event.target, 'giveAuto');
                },
            },
            ls_diancai: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'phaseBegin',
                },
                filter(event, player) {
                    if (!event.player.isMinEquip() && event.player.countCards('e')) {
                        if (
                            game.hasPlayer(function (target) {
                                if (target == event.player) return false;
                                if (target.isMin()) return false;
                                for (var card of event.player.getCards('e')) {
                                    if (target.isEmpty(get.subtype(card))) return true;
                                }
                                return false;
                            })
                        )
                            return true;
                    }
                    if (!event.player.isMaxEquip() && event.player != player && player.countCards('hej', (card) => lib.card[card.name].type == 'equip')) {
                        for (var card of player.getCards('hej', (card) => lib.card[card.name].type == 'equip')) {
                            if (event.player.isEmpty(lib.card[card.name].subtype)) return true;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var bool1 =
                        !trigger.player.isMinEquip() &&
                        trigger.player.countCards('e') &&
                        game.hasPlayer(function (target) {
                            if (target == trigger.player) return false;
                            if (target.isMin()) return false;
                            for (var card of trigger.player.getCards('e')) {
                                if (target.isEmpty(get.subtype(card))) return true;
                            }
                            return false;
                        });
                    var bool2 = !trigger.player.isMaxEquip() && trigger.player != player && player.countCards('e') && player.getCards('hej', (card) => lib.card[card.name].type == 'equip').some((card) => trigger.player.isEmpty(lib.card[card.name].subtype));
                    if (bool1 && bool2) {
                        player.chooseControlList(get.prompt(event.name), ['将' + get.translation(trigger.player) + '装备区内的一张牌移动到其他角色的装备区', '将你区域区内的一张牌移动到' + get.translation(trigger.player) + '的装备区']).set('ai', function () {
                            var att = get.attitude(player, trigger.player);
                            if (att > 0) {
                                if (
                                    trigger.player.countCards('e', function (card) {
                                        return (
                                            get.value(card, trigger.player) < 0 &&
                                            game.hasPlayer(function (target) {
                                                return target != trigger.player && get.attitude(player, target) < 0 && target.isEmpty(get.subtype(card)) && get.effect(target, card, player, player) < 0;
                                            })
                                        );
                                    }) > 0
                                )
                                    return 0;
                            } else if (att < 0) {
                                if (
                                    game.hasPlayer(function (target) {
                                        if (target != trigger.player && get.attitude(player, target) > 0) {
                                            var equips = trigger.player.getCards('e');
                                            for (var card of equips) {
                                                if (get.value(card, trigger.player) > 0 && target.isEmpty(get.subtype(card)) && get.effect(target, card, player, player) > 0) return true;
                                            }
                                        }
                                    })
                                )
                                    return 0;
                            }
                            return 'cancel2';
                        });
                    } else {
                        event._result = {
                            control: 'auto',
                            index: bool1 ? 0 : 1,
                        };
                    }
                    ('step 1');
                    if (result.control && result.control != 'cancel2') {
                        event.control = result.control;
                        event.index = result.index;
                        switch (event.index) {
                            case 0: {
                                var next = player.chooseTarget(function (card, player, target) {
                                    var from = trigger.player;
                                    if (target.isMin()) return false;
                                    var es = from.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (target.isEmpty(get.subtype(es[i]))) return true;
                                    }
                                    return false;
                                });
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    var sgnatt = get.sgn(att);
                                    if (att > 0) {
                                        if (
                                            target.countCards('j', function (card) {
                                                return game.hasPlayer(function (current) {
                                                    return current != target && current.canAddJudge(card) && get.attitude(player, current) < 0;
                                                });
                                            })
                                        )
                                            return 14;
                                        if (
                                            target.countCards('e', function (card) {
                                                return (
                                                    get.value(card, target) < 0 &&
                                                    game.hasPlayer(function (current) {
                                                        return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card)) && get.effect(target, card, player, player) < 0;
                                                    })
                                                );
                                            }) > 0
                                        )
                                            return 9;
                                    } else if (att < 0) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                if (current != target && get.attitude(player, current) > 0) {
                                                    var es = target.getCards('e');
                                                    for (var i = 0; i < es.length; i++) {
                                                        if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, player) > 0) return true;
                                                    }
                                                }
                                            })
                                        ) {
                                            return -att;
                                        }
                                    }
                                    return 0;
                                });
                                next.set('prompt', event.control == 'auto' ? get.prompt(event.name) : '典财:移动' + get.translation(trigger.player) + '的一张装备牌给其他角色');
                                next.set('prompt2', event.control == 'auto' ? '移动' + get.translation(trigger.player) + '的一张装备牌给其他角色' : null);
                                next.set('forced', event.control == 'auto' ? false : true);
                                break;
                            }
                            case 1: {
                                event._result = {
                                    targets: [],
                                    bool: true,
                                };
                                break;
                            }
                        }
                    } else event.finish();
                    ('step 2');
                    if (result.bool) {
                        var bool1 = result.targets.length == 0;
                        var bool2 = event.control == 'auto';
                        event.toMove = bool1 ? player : trigger.player;
                        event.beMove = bool1 ? trigger.player : result.targets[0];
                        var position = event.toMove == player ? 'hej' : 'e';
                        var next = player.choosePlayerCard(event.toMove, position);
                        next.set('filterButton', function (button) {
                            var card = button.link;
                            if (lib.card[card.name].type != 'equip') return false;
                            return event.beMove.isEmpty(lib.card[card.name].subtype);
                        });
                        next.set('forced', !bool2);
                        next.set('prompt', bool2 ? get.prompt(event.name) : '典财:选择要移动给' + get.translation(event.beMove) + '的牌');
                        next.set('prompt2', bool2 ? '选择要移动给' + get.translation(event.beMove) + '的牌' : null);
                        next.set('ai', function (button) {
                            var card = button.link;
                            var player = _status.event.player;
                            if (get.attitude(player, event.toMove) > 0 && get.attitude(player, event.beMove) < 0) {
                                if (get.position(card) == 'j') return 12;
                                if (get.value(card, event.toMove) < 0 && get.effect(event.beMove, card, player, event.beMove) > 0) return 10;
                                return 0;
                            } else {
                                return get.value(card) * get.effect(event.beMove, card, player, event.beMove);
                            }
                        });
                    } else event.finish();
                    ('step 3');
                    if (result.bool && result.links.length) {
                        player.line2([event.toMove, event.beMove]);
                        var card = result.links[0];
                        event.beMove.equip(card);
                        event.toMove.$give(card, event.beMove, false);
                        game.log(event.toMove, '的', card, '被移动给了', event.beMove);
                        var target = trigger.player == player ? event.beMove : trigger.player;
                        var subtype = lib.card[card.name].subtype;
                        if (['equip3', 'equip4', 'equip6'].includes(subtype)) trigger.player.addTempSkill(event.name + '_equip');
                        else trigger.player.addTempSkill(event.name + '_' + subtype);
                    } else event.finish();
                    ('step 4');
                    if (event.control != 'auto') {
                        event._result = {
                            control: 'auto',
                            index: event.index == 0 ? 1 : 0,
                        };
                        event.goto(1);
                    }
                },
                subSkill: {
                    equip: {
                        mod: {
                            cardEnabled(card, player) {
                                if (get.type(card) == 'trick') return false;
                            },
                        },
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '典财-坐骑',
                            content: '本回合不能使用普通锦囊牌',
                        },
                    },
                    equip1: {
                        mod: {
                            cardEnabled(card, player) {
                                if (['sha', 'juedou'].includes(card.name)) return false;
                            },
                        },
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '典财-武器',
                            content: '本回合不能使用【杀】和【决斗】',
                        },
                    },
                    equip2: {
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        skillBlocker(skill, player) {
                            return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                        },
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '典财-防具',
                            content(storage, player, skill) {
                                var list = player.getSkills(null, false, false).filter(function (i) {
                                    return lib.skill[skill].skillBlocker(i, player);
                                });
                                if (list.length) return '失效技能:' + get.translation(list);
                                return '无失效技能';
                            },
                        },
                    },
                    equip5: {
                        mod: {
                            cardEnabled(card, player) {
                                if (card.name == 'tao' || get.type(card) == 'delay') return false;
                            },
                            cardSavable(card, player) {
                                if (card.name == 'tao') return false;
                            },
                        },
                        charlotte: true,
                        mark: true,
                        intro: {
                            name: '典财-宝物',
                            content: '本回合不能使用【桃】和延时锦囊牌',
                        },
                    },
                },
            },
            ls_langmie: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: ['phaseUseEnd', 'phaseEnd'],
                },
                filter(event, player) {
                    if (event.name == 'phaseUse') {
                        var map = { basic: 0, trick: 0, equip: 0 };
                        var history = event.player.getHistory('useCard');
                        for (var evt of history) map[get.type2(evt.card)]++;
                        return Object.values(map).some((num) => num >= 2);
                    }
                    var num = -1;
                    var history = event.player.getHistory('sourceDamage');
                    if (!history.length) return false;
                    for (var evt of history) num += evt.num;
                    return num > 0 && player.countCards('he', (card) => lib.filter.cardDiscardable(card, player)) && event.player != player;
                },
                content() {
                    'step 0';
                    if (trigger.name == 'phaseUse') {
                        var map = { basic: 0, trick: 0, equip: 0 };
                        var history = trigger.player.getHistory('useCard');
                        for (var evt of history) map[get.type2(evt.card)]++;
                        event.num = 0;
                        for (var num of Object.values(map)) event.num += Math.floor(num / 2);
                        event.num = Math.min(event.num, game.countPlayer2());
                        player.chooseBool(get.prompt(event.name), '你可以摸' + event.num + '张牌').set('ai', function () {
                            return !player.hasSkillTag('nokeep');
                        });
                    } else {
                        var history = trigger.player.getHistory('sourceDamage');
                        event.num = -1;
                        for (var evt of history) event.num += evt.num;
                        event.num = Math.min(event.num, game.countPlayer2());
                        player.chooseToDiscard(get.prompt(event.name), '弃置一张牌并对' + get.translation(trigger.player) + '造成' + event.num + '点伤害').set('ai', function (card) {
                            if (event.num <= 0) return false;
                            return 7 - get.value(card) && get.damageEffect(trigger.player, player, player) > 0;
                        });
                    }
                    ('step 1');
                    if (result.bool) {
                        if (trigger.name == 'phaseUse') {
                            player.draw(event.num);
                        } else {
                            player.line(trigger.player);
                            trigger.player.damage(event.num);
                        }
                    }
                },
            },
            ls_tianlei: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'judge',
                },
                filter(event, player) {
                    if (!player.countCards('hes')) return false;
                    if (event.player == player || event.parent.name == 'ls_dihuo_effect') return true;
                    return get.color(event.player.judging[0]) == 'red';
                },
                content() {
                    'step 0';
                    player
                        .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt(event.name), 'hes', function (card) {
                            var player = _status.event.player;
                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            var player = _status.event.player;
                            var judging = _status.event.judging;
                            var result = trigger.judge(card) - trigger.judge(judging);
                            var attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) return 0;
                            if (attitude > 0) return result;
                            else return -result;
                        })
                        .set('judging', trigger.player.judging[0]);
                    ('step 1');
                    if (result.bool) player.respond(result.cards, 'highlight', event.name, 'noOrdering');
                    else event.finish();
                    ('step 2');
                    if (result.bool) {
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0] = result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player, '的判定牌改为', result.cards[0]);
                    }
                    ('step 3');
                },
                ai: {
                    rejudge: true,
                    tag: {
                        rejudge: 1,
                    },
                },
                group: 'ls_tianlei_effect',
                subSkill: {
                    effect: {
                        forced: true,
                        trigger: {
                            global: 'judgeEnd',
                        },
                        filter(event, player) {
                            return event.result && event.result.color == 'black';
                        },
                        content() {
                            'step 0';
                            event.num = trigger.result.suit == 'spade' ? 3 : 1;
                            if (trigger.player == player) {
                                player.chooseTarget(get.prompt('ls_tianlei'), '令一名其他角色受到' + event.num + '点无来源雷电伤害', lib.filter.notMe).set('ai', function (target) {
                                    return get.damageEffect(target, player, player, 'thunder') > 0;
                                });
                            } else {
                                var next = player.chooseBool(get.prompt('ls_tianlei', trigger.player), '令其受到' + event.num + '点无来源雷电伤害').set('ai', function () {
                                    return get.damageEffect(trigger.player, player, player, 'thunder') > 0;
                                });
                                if (trigger.parent.name == 'ls_dihuo_effect') next.set('frequentSkill', event.name);
                            }
                            ('step 1');
                            if (result.bool) {
                                var target = result.targets && result.targets.length ? result.targets[0] : trigger.player;
                                target.damage(event.num, 'thunder', 'nosource');
                            }
                        },
                    },
                },
            },
            ls_dihuo: {
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter'],
                },
                filter(event, player) {
                    if (event.name == 'lose') {
                        if (event.player != player || event.position != ui.discardPile) return false;
                        return event.cards2 && event.cards2.some((card) => get.color(card) == 'red' && get.position(card, true) == 'd');
                    } //QQQ
                    return event.cards && event.cards.some((card) => get.color(card) == 'red' && get.position(card, true) == 'd');
                },
                content() {
                    var cards = trigger[trigger.name == 'lose' ? 'cards2' : 'cards'].filter((card) => get.color(card) == 'red' && get.position(card, true) == 'd');
                    player.addToExpansion(cards, 'gain2').gaintag.add(event.name);
                },
                marktext: '火',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                group: ['ls_dihuo_effect', 'ls_dihuo_use'],
                subSkill: {
                    effect: {
                        audio: 'ls_dihuo',
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                            player: 'damageBegin3',
                        },
                        filter(event, player, name) {
                            if (!player.getExpansions('ls_dihuo').length) return false;
                            if (name == 'damageBegin1') return event.player != player && event.player.isAlive();
                            return event.source && event.source != player && event.source.isAlive();
                        },
                        content() {
                            'step 0';
                            if (trigger) event.target = event.triggername == 'damageBegin1' ? trigger.player : trigger.source;
                            player.chooseButton([get.prompt(event.name, event.target), player.getExpansions('ls_dihuo')]).set('ai', function (button) {
                                if (get.attitude(player, event.target) > 1) return false;
                                return 1 + Math.random();
                            });
                            ('step 1');
                            if (result.bool) {
                                player.loseToDiscardpile(result.links);
                                player.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -10;
                                    if (suit == 'club') return -5;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.color == 'black' ? true : false;
                                };
                            } else {
                                if (!trigger) player.getStat('skill')['ls_dihuo_use']--;
                                event.finish();
                            }
                            ('step 2');
                            if (result.color == 'black') {
                                if (target.countDiscardableCards(player, 'he')) player.discardPlayerCard(target, 'he', true);
                            } else {
                                player.draw();
                            }
                        },
                    },
                    use: {
                        enable: 'phaseUse',
                        usable: 1,
                        forced: true,
                        filter(event, player) {
                            return player.getExpansions('ls_dihuo').length;
                        },
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        delay: 0.5,
                        prompt: '出牌阶段限一次,你可以对一名其他角色发动〖地火②〗',
                        content() {
                            var next = game.createEvent('ls_dihuo_effect');
                            next.player = player;
                            next.target = target;
                            next.setContent(lib.skill['ls_dihuo_effect'].content);
                        },
                        ai: {
                            order: 8.5,
                            result: {
                                target(player, target) {
                                    return get.damageEffect(target, player);
                                },
                            },
                        },
                    },
                },
            },
            ls_danshou: {
                audio: 'ext:裸睡天依:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    return _status.currentPhase && _status.currentPhase.countCards('h'); //QQQ
                },
                hiddenCard(player, name) {
                    var num = player.getStat('skill')['ls_danshou'] || 0;
                    var storage = player.storage['ls_danshou_record'] || [];
                    return ['basic', 'trick'].includes(get.type(name)) && player.countCards('he', (card) => lib.filter.cardDiscardable(card, player)) >= num && !storage.includes(name);
                },
                chooseButton: {
                    dialog(event, player) {
                        var dialog = ui.create.dialog(get.prompt('ls_danshou'), 'hidden');
                        dialog.addText(get.translation(_status.currentPhase) + '的手牌');
                        dialog.add(_status.currentPhase.getCards('h'));
                        return dialog;
                    },
                    filter(button, player) {
                        var evt = _status.event.parent,
                            storage = player.storage['ls_danshou_record'] || [];
                        return evt.filterCard && evt.filterCard({ name: button.link.name, nature: button.link.nature }, player, evt) && !storage.includes(button.link.name) && ['basic', 'trick'].includes(get.type(button.link));
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        var card = { name: button.link.name, nature: button.link.nature };
                        if (
                            game.hasPlayer(function (current) {
                                return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                            })
                        ) {
                            switch (button.link.name) {
                                case 'tao':
                                    return 5;
                                case 'jiu': {
                                    if (player.countCards('hs', { type: 'basic' }) >= 2) return 3;
                                }
                                case 'sha':
                                    if (button.link[3] == 'fire') return 2.95;
                                    else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                    else return 2.9;
                                default:
                                    return 1;
                            }
                        }
                        return 0;
                    },
                    backup(links, player) {
                        return {
                            audio: 'ls_danshou',
                            popname: true,
                            filterCard(card, player) {
                                var num = player.getStat('skill')['ls_danshou'] || 0;
                                return num == 0 ? false : lib.filter.cardDiscardable(card, player);
                            },
                            position: 'he',
                            selectCard() {
                                var player = _status.event.player;
                                var num = player.getStat('skill')['ls_danshou'] || 0;
                                return num == 0 ? -1 : num;
                            },
                            check(card) {
                                var player = _status.event.player;
                                var num = player.getStat('skill')['ls_danshou'] || 0;
                                return num == 0 ? true : 8 - num - get.value(card);
                            },
                            viewAs: {
                                name: links[0].name,
                                nature: links[0].nature,
                                suit: links[0].suit,
                                number: links[0].number,
                            },
                            precontent() {
                                if (event.result.cards.length) {
                                    if (event.result.cards.some((card) => get.type(card) == 'equip')) player.getStat('skill')['ls_danshou'] = -1;
                                    player.discard(event.result.cards).delay = false;
                                    event.result.cards.splice(0);
                                }
                                player.addTempSkill('ls_danshou_record');
                                player.storage['ls_danshou_record'].push(event.result.card.name);
                                player.markSkill('ls_danshou_record');
                            },
                        };
                    },
                    prompt(links, player) {
                        var num = player.getStat('skill')['ls_danshou'] || 0;
                        return (num == 0 ? '' : `弃置${num}张牌`) + '视为' + (_status.event.name == 'chooseToUse' ? '使用' : '打出') + (get.translation(links[0].nature) || '') + '【' + get.translation(links[0].name) + '】';
                    },
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        var target = _status.currentPhase,
                            num = player.getStat('skill')['ls_danshou'] || 0;
                        var discardable = player.countCards('he', (card) => lib.filter.cardDiscardable(card, player));
                        if (target) {
                            //QQQ
                            if (tag == 'respondSha') {
                                if (!target.hasSkill('ls_danshou')) {
                                    if (!target.hasSha() || discardable < num) return false;
                                } else {
                                    if (!target.countCards('hs', 'sha') > 0 || discardable < num) return false;
                                }
                            }
                            if (tag == 'respondShan') {
                                if (!target.hasSkill('ls_danshou')) {
                                    if (!target.hasShan() || discardable < num) return false;
                                } else {
                                    if (!target.countCards('hs', 'shan') > 0 || discardable < num) return false;
                                }
                            }
                            if (tag == 'save') {
                                var dying = _status.event.dying.slice(-1)[0];
                                if (
                                    !target.hasCard(function (card) {
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, player, dying);
                                        return savable;
                                    }, 'hs') ||
                                    discardable < num
                                )
                                    return false;
                            }
                        }
                    },
                    order() {
                        var player = _status.event.player;
                        var event = _status.event;
                        if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                            return 3.3;
                        }
                        return 3.1;
                    },
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                subSkill: {
                    backup: {},
                    record: {
                        init: (player, skill) => (player.storage[skill] = []),
                        charlotte: true,
                        mark: true,
                        intro: {
                            content(storage) {
                                var list = lib.inpile;
                                return '本回合已使用或打出:<br>' + get.translation(storage.sort((a, b) => list.indexOf(a) - list.indexOf(b)));
                            },
                        },
                    },
                },
            },
            ls_shefu: {
                init: (player, skill) => (player.storage[skill] ? true : (player.storage[skill] = [])),
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    global: 'phaseBegin',
                },
                filter(event, player) {
                    return player.storage['ls_shefu'].length < lib.inpile.filter((name) => ['basic', 'trick'].includes(get.type2(name))).length;
                },
                content() {
                    'step 0';
                    var storage = player.storage[event.name];
                    var list = lib.inpile.filter((name) => ['basic', 'trick'].includes(get.type2(name)) && !storage.includes(name)).map((name) => [get.translation(get.type(name)), '', name]);
                    player
                        .chooseButton([1, 2], [get.prompt(event.name), '你可以记录一个<伏兵>', [list, 'vcard']])
                        .set('filterButton', function (button) {
                            for (var buttoned of ui.selected.buttons) {
                                if (get.type2(buttoned.link[2]) == get.type2(button.link[2])) return false;
                            }
                            return true;
                        })
                        .set('ai', function (button) {
                            var rand = _status.event.rand;
                            switch (button.link[2]) {
                                case 'sha':
                                    return 5 + rand[1];
                                case 'tao':
                                    return 4 + rand[2];
                                case 'lebu':
                                    return 3 + rand[3];
                                case 'shan':
                                    return 4.5 + rand[4];
                                case 'wuzhong':
                                    return 4 + rand[5];
                                case 'shunshou':
                                    return 3 + rand[6];
                                case 'nanman':
                                    return 2 + rand[7];
                                case 'wanjian':
                                    return 2 + rand[8];
                                default:
                                    return rand[0];
                            }
                        })
                        .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
                    ('step 1');
                    if (result.bool) {
                        player.storage[event.name].addArray(result.links.map((link) => link[2]));
                        player.storage[event.name].sort((a, b) => lib.inpile.indexOf(a) - lib.inpile.indexOf(b));
                        player.markSkill(event.name);
                    }
                },
                intro: {
                    content(storage, player) {
                        if (player.isUnderControl(true)) return '已记录牌名:' + get.translation(storage);
                        return '已记录' + get.cnNumber(storage.length) + '个牌名';
                    },
                },
                group: 'ls_shefu_effect',
                subSkill: {
                    effect: {
                        audio: 'ls_shefu',
                        trigger: {
                            global: 'useCard',
                        },
                        filter(event, player) {
                            return event.player != player && player.storage['ls_shefu'].includes(event.card.name);
                        },
                        logTarget: 'player',
                        check(event, player) {
                            var effect = 0;
                            if (event.card.name == 'wuxie' || event.card.name == 'shan') {
                                if (get.attitude(player, event.player) < -1) {
                                    effect = -1;
                                }
                            } else if (event.targets && event.targets.length) {
                                for (var i = 0; i < event.targets.length; i++) {
                                    effect += get.effect(event.targets[i], event.card, event.player, player);
                                }
                            }
                            if (effect < 0) {
                                if (event.card.name == 'sha') {
                                    var target = event.targets[0];
                                    if (target == player) {
                                        return !player.countCards('h', 'shan');
                                    } else {
                                        return target.hp == 1 || (target.countCards('h') <= 2 && target.hp <= 2);
                                    }
                                } else {
                                    return true;
                                }
                            }
                            return false;
                        },
                        content() {
                            trigger.player.addTempSkill('ls_shefu_baiban');
                            trigger.cancel();
                            player.storage['ls_shefu'].remove(trigger.card.name);
                            if (player.storage['ls_shefu'].length) player.markSkill('ls_shefu');
                            else player.unmarkSkill('ls_shefu');
                            if (get.type(trigger.card.name == 'delay')) return;
                            var card = { name: trigger.card.name };
                            if (player.hasUseTarget(card, false)) {
                                player.chooseUseTarget(card, 'nodistance').addCount = false;
                            }
                        },
                    },
                    baiban: {
                        inherit: 'baiban',
                        charlotte: true,
                        mark: true,
                        marktext: '伏',
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        skillBlocker(skill, player) {
                            return !lib.skill[skill].charlotte;
                        },
                        intro: {
                            content(storage, player, skill) {
                                var list = player.getSkills(null, false, false).filter(function (i) {
                                    return lib.skill.baiban.skillBlocker(i, player);
                                });
                                if (list.length) return '失效技能:' + get.translation(list);
                                return '无失效技能';
                            },
                        },
                    },
                },
            },
            ls_benyu: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    return event.source && Math.abs(event.source.countCards('h') - player.countCards('h')) > 0;
                },
                logTarget: 'source',
                content() {
                    'step 0';
                    var list = [];
                    event.num = Math.abs(trigger.source.countCards('h') - player.countCards('h'));
                    list.push('摸' + get.cnNumber(event.num) + '张牌');
                    if (player.hasSkill('ls_shefu')) {
                        event.blank = lib.inpile.filter((name) => ['basic', 'trick'].includes(get.type2(name))).length - player.storage['ls_shefu'].length;
                        list.push('记录' + get.cnNumber(event.num) + '个<伏兵>(剩余记录空间:' + event.blank + ')');
                    }
                    player.chooseControlList('贲育:选择一项', list, true).set('ai', function () {
                        return 0;
                    });
                    ('step 1');
                    if (result.index == 0) {
                        player.draw(event.num);
                        event.finish();
                    }
                    ('step 2');
                    event.num--;
                    var storage = player.storage['ls_shefu'];
                    var list = lib.inpile.filter((name) => ['basic', 'trick'].includes(get.type2(name)) && !storage.includes(name)).map((name) => [get.translation(get.type(name)), '', name]);
                    var select = Math.min(event.num, event.blank);
                    player
                        .chooseButton([1, 2], ['贲育:记录一个<伏兵>', [list, 'vcard']], true)
                        .set('filterButton', function (button) {
                            for (var buttoned of ui.selected.buttons) {
                                if (get.type2(buttoned.link[2]) == get.type2(button.link[2])) return false;
                            }
                            return true;
                        })
                        .set('ai', function (button) {
                            var rand = _status.event.rand;
                            switch (button.link[2]) {
                                case 'sha':
                                    return 5 + rand[1];
                                case 'tao':
                                    return 4 + rand[2];
                                case 'lebu':
                                    return 3 + rand[3];
                                case 'shan':
                                    return 4.5 + rand[4];
                                case 'wuzhong':
                                    return 4 + rand[5];
                                case 'shunshou':
                                    return 3 + rand[6];
                                case 'nanman':
                                    return 2 + rand[7];
                                case 'wanjian':
                                    return 2 + rand[8];
                                default:
                                    return rand[0];
                            }
                        })
                        .set('rand', [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()]);
                    ('step 3');
                    player.storage['ls_shefu'].addArray(result.links.map((link) => link[2]));
                    player.storage['ls_shefu'].sort((a, b) => lib.inpile.indexOf(a) - lib.inpile.indexOf(b));
                    player.markSkill('ls_shefu');
                    ('step 4');
                    if (event.num > 0) event.goto(2);
                },
            },
            ls_zhishi: {
                audio: 'ext:裸睡天依:2',
                trigger: {
                    global: ['logSkill', 'useSkillAfter', 'useCardAfter', 'respondAfter'],
                },
                prompt(event, player) {
                    var str = '是否令';
                    str += get.translation(event.player);
                    str += '的【';
                    str += get.translation(event.skill);
                    str += '】失效？';
                    return str;
                },
                filter(event, player) {
                    var list = [];
                    var listm = [];
                    var listv = [];
                    if (event.player.name1 != undefined) listm = lib.character[event.player.name1][3];
                    else listm = lib.character[event.player.name][3];
                    if (event.player.name2 != undefined) listv = lib.character[event.player.name2][3];
                    listm = listm.concat(listv);
                    var func = function (skill) {
                        var info = get.info(skill);
                        if (!info || info.charlotte) return false;
                        return true;
                    };
                    for (var i = 0; i < listm.length; i++) {
                        if (func(listm[i])) list.add(listm[i]);
                    }
                    if (event.name != 'useCard' && event.name != 'respond') {
                        if (!event.player.hasSkill(event.skill)) return false;
                        if (!list.includes(event.skill)) return false;
                        if (event.type != 'player') return false;
                    } else {
                        return event.skill && event.skill != 'zhangba_skill' && event.skill != 'muniu_skill';
                    }
                    return true;
                },
                check(event, player) {
                    var num1 =
                        player.getSkills(null, false, false).filter(function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return false;
                            if (info.zhuSkill) return player.hasZhuSkill(skill);
                            return true;
                        }).length - 3;
                    var num2 = player.getSkills(null, false, false).filter(function (i) {
                        return lib.skill.ls_zhishi_block.skillBlocker(i, player);
                    }).length;
                    if (player != _status.currentPhase) {
                        if (event.skill == 'ls_zhishi') return !player.hasSkillTag('maixie');
                        return get.attitude(player, event.player) >= 0;
                    } else {
                        if (event.skill == 'ls_zhishi') return num2 >= num1 || player.getStat('skill')['ls_zhishi'] > 1;
                        return get.attitude(player, event.player) >= 0 || (get.attitude(player, event.player) < 0 && event.player.hasSkillTag('maixie'));
                    }
                    return get.attitude(player, event.player) >= 0;
                },
                content() {
                    'step 0';
                    if (!trigger.player.hasSkill('ls_zhishi_count')) {
                        trigger.player.addTempSkill('ls_zhishi_count');
                    }
                    trigger.player.addTempSkill('ls_zhishi_block');
                    ('step 1');
                    var skill = trigger.skill;
                    var text = [];
                    for (var i = 0; i < skill.length; i++) {
                        text[i] = skill[i];
                    }
                    event.cardss = 0;
                    for (var i = 0; i < text.length; i++) {
                        if (text[i] == '_' && text[i + 1] == 'b' && text[i + 2] == 'a' && text[i + 3] == 'c' && text[i + 4] == 'k' && text[i + 5] == 'u' && text[i + 6] == 'p') {
                            event.cardss = i;
                        }
                    }
                    if (event.cardss != 0) {
                        var list = [];
                        var listm = [];
                        var listv = [];
                        if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                        else listm = lib.character[trigger.player.name][3];
                        if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                        listm = listm.concat(listv);
                        var func = function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return false;
                            return true;
                        };
                        for (var i = 0; i < listm.length; i++) {
                            if (func(listm[i])) list.add(listm[i]);
                        }
                        for (var i of list) {
                            if (i[event.cardss - 1] == skill[event.cardss - 1] && i[event.cardss - 2] == skill[event.cardss - 2] && i != 'zhangba_skill' && i != 'muniu_skill') {
                                var skillx = i;
                            }
                        }
                        trigger.player.markAuto('ls_zhishi_count', [skillx]);
                        trigger.player.restoreSkill('ls_zhishi_block');
                        game.log(trigger.player, '的【', skillx, '】失效了');
                    } else {
                        trigger.player.markAuto('ls_zhishi_count', [skill]);
                        trigger.player.restoreSkill('ls_zhishi_block');
                        game.log(trigger.player, '的【', skill, '】失效了');
                    }
                    ('step 2');
                    var num = 1;
                    var list = trigger.player.getSkills(null, false, false).filter(function (i) {
                        return lib.skill.ls_zhishi_block.skillBlocker(i, trigger.player);
                    });
                    num += list.length;
                    if (trigger.player.hasSkill('fengyin')) {
                        var list1 = trigger.player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.fengyin.skillBlocker(i, trigger.player);
                        });
                        num += list1.length;
                    }
                    if (trigger.player.hasSkill('baiban') || trigger.player.hasSkill('ls_shefu_baiban')) {
                        var list2 = trigger.player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.baiban.skillBlocker(i, trigger.player);
                        });
                        num += list2.length;
                    }
                    trigger.player.draw(num);
                },
                subSkill: {
                    count: {
                        mark: true,
                        charlotte: true,
                        intro: {
                            content: '失效技能:$',
                        },
                    },
                    block: {
                        init(player, skill) {
                            player.addSkillBlocker(skill);
                        },
                        onremove(player, skill) {
                            player.removeSkillBlocker(skill);
                        },
                        charlotte: true,
                        skillBlocker(skill, player) {
                            return player.getStorage('ls_zhishi_count').includes(skill);
                        },
                    },
                },
            },
            ls_jianxiong: {
                audio: 'ext:裸睡天依:2',
                trigger: {
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (event.source) {
                        var list = [];
                        var listm = [];
                        var listv = [];
                        if (event.source.name1 != undefined) listm = lib.character[event.source.name1][3];
                        else listm = lib.character[event.source.name][3];
                        if (event.source.name2 != undefined) listv = lib.character[event.source.name2][3];
                        listm = listm.concat(listv);
                        var func = function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return false;
                            return true;
                        };
                        for (var i = 0; i < listm.length; i++) {
                            if (func(listm[i])) list.add(listm[i]);
                        }
                        for (var i = 0; i < list.length; i++) {
                            if (player.hasSkill(list[i])) list.remove(list[i]);
                        }
                        return list.length && player.countCards('he') > 0;
                    } else {
                        return false;
                    }
                    return false;
                },
                forced: true,
                content() {
                    'step 0';
                    var next = player.chooseToDiscard('he', '奸雄:是否弃置一张牌并获得' + get.translation(trigger.source) + '武将牌上的一个技能？');
                    next.set('ai', function (card) {
                        var player = _status.event.player;
                        if (player.hp == 1 || _status.event.getTrigger().num > 1) {
                            return 9 - get.value(card);
                        }
                        if (player.hp == 2) {
                            return 8 - get.value(card);
                        }
                        return 7 - get.value(card);
                    });
                    ('step 1');
                    if (result.bool) {
                        var list = [];
                        var listm = [];
                        var listv = [];
                        if (trigger.source.name1 != undefined) listm = lib.character[trigger.source.name1][3];
                        else listm = lib.character[trigger.source.name][3];
                        if (trigger.source.name2 != undefined) listv = lib.character[trigger.source.name2][3];
                        listm = listm.concat(listv);
                        var func = function (skill) {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return false;
                            return true;
                        };
                        for (var i = 0; i < listm.length; i++) {
                            if (func(listm[i])) list.add(listm[i]);
                        }
                        for (var i = 0; i < list.length; i++) {
                            if (player.hasSkill(list[i])) list.remove(listm[i]);
                        }
                        player
                            .chooseControl(list)
                            .set('prompt', '请选择要获得的技能')
                            .set('ai', function () {
                                return list.randomGet();
                            });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    player.addSkill(result.control);
                    if (!player.storage.ls_jianxiong) player.storage.ls_jianxiong = [];
                    player.storage.ls_jianxiong.push(result.control);
                    player.addSkill('ls_jianxiong_lose');
                    lib.character.ls_quncaocao[3].add(result.control);
                    player.popup(result.control, 'thunder');
                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                if (!target.hasFriend()) return;
                                var num = 1;
                                if (get.attitude(player, target) > 0) {
                                    if (player.needsToDiscard()) {
                                        num = 0.7;
                                    } else {
                                        num = 0.5;
                                    }
                                }
                                if (target.hp >= 4) return [1, num * 2];
                                if (target.hp == 3) return [1, num * 1.5];
                                if (target.hp == 2) return [1, num * 0.5];
                            }
                        },
                    },
                },
                subSkill: {
                    lose: {
                        forced: true,
                        charlotte: true,
                        trigger: {
                            player: ['phaseZhunbeiBegin', 'phaseAfter'],
                        },
                        lastDo: true,
                        filter(event, player) {
                            if (['phaseZhunbei'].indexOf(event.name)) {
                                return player.storage.ls_jianxiong_lose;
                            } else {
                                return player.storage.ls_jianxiong;
                            }
                        },
                        content() {
                            if (!['phaseZhunbei'].indexOf(trigger.name)) {
                                if (!player.storage.ls_jianxiong_lose) player.storage.ls_jianxiong_lose = [];
                                var skills = player.storage.ls_jianxiong;
                                if (skills.length) {
                                    for (var i = skills.length - 1; i >= 0; i--) {
                                        player.storage.ls_jianxiong_lose.push(skills[i]);
                                        player.storage.ls_jianxiong.remove(skills[i]);
                                    }
                                }
                            } else {
                                if (player.storage.ls_jianxiong_lose) {
                                    var skillx = player.storage.ls_jianxiong_lose;
                                    if (skillx.length) {
                                        for (var i = skillx.length - 1; i >= 0; i--) {
                                            if (player.hasSkill(skillx[i])) {
                                                player.removeSkill(skillx[i]);
                                                player.storage.ls_jianxiong_lose.remove(skillx[i]);
                                            }
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            ls_shuixing: {
                mark: true,
                zhuanhuanji: true,
                marktext: '☯',
                intro: {
                    content() {
                        var player = _status.event.player;
                        if (player.storage.ls_shuixing == true) {
                            var str = '转换技,阴:若上一张指定你为目标的非装备牌为非伤害牌,你可以将一张牌当作此牌使用或打出;当你造成伤害后,你可以摸一张牌并转换此技能;当你于一回合内首次受到伤害后,你可以回复一点体力并转换此技能.';
                        } else {
                            var str = '转换技,阳:若你使用的上一张非装备牌为非转化牌,你可以将一张牌当作此牌使用或打出;当你于一回合内首次受到伤害后,你可以回复一点体力并转换此技能.';
                        }
                        return str;
                    },
                },
                audio: 'ext:裸睡天依:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                position: 'hes',
                filterCard: true,
                selectCard: 1,
                precontent() {
                    player.storage.ls_cujin++;
                    player.changeZhuanhuanji('ls_shuixing');
                },
                filter(event, player) {
                    return (!player.storage.ls_shuixing && player.storage.ls_shuixing_fire && !player.hasSkill('ls_shuixing_block')) || (player.storage.ls_shuixing != true && player.storage.ls_shuixing_fire && !player.hasSkill('ls_shuixing_block')) || (player.storage.ls_shuixing == true && player.storage.ls_shuixing_water);
                },
                check(card) {
                    var player = _status.event.player;
                    var cardx = lib.skill.ls_shuixing.viewAs;
                    var value = player.getUseValue(cardx);
                    if (value < 0) return 0;
                    return value - get.value(card);
                },
                prompt() {
                    var player = _status.event.player;
                    var str = '将一张牌当作';
                    var card = lib.skill.ls_shuixing.viewAs;
                    str += get.translation(card);
                    str += '使用';
                    return str;
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    save: true,
                    order: 5,
                    result: {
                        player(player, target) {
                            return 2;
                        },
                    },
                },
                group: ['ls_shuixing_fire', 'ls_shuixing_water', 'ls_shuixing_change', 'ls_shuixing_damage', 'ls_shuixing_source'],
                subSkill: {
                    damage: {
                        audio: 'ls_shuixing',
                        trigger: {
                            player: 'damageEnd',
                        },
                        filter(event, player) {
                            var history = player.getHistory('damage');
                            if (history.indexOf(event) != 0) return false;
                            return true;
                        },
                        prompt: '是否回复一点体力并转换【水形】？',
                        content() {
                            player.recover();
                            player.changeZhuanhuanji('ls_shuixing');
                            player.storage.ls_cujin++;
                        },
                    },
                    source: {
                        audio: 'ls_shuixing',
                        trigger: {
                            source: 'damageSource',
                        },
                        filter(event, player) {
                            return player.storage.ls_shuixing == true;
                        },
                        prompt: '是否摸一张牌并将【水形】转换为阳？',
                        content() {
                            player.draw();
                            player.changeZhuanhuanji('ls_shuixing');
                            player.storage.ls_cujin++;
                        },
                    },
                    change: {
                        forced: true,
                        charlotte: true,
                        forced: true,
                        _priority: -2023,
                        trigger: {
                            player: ['useCard', 'respond'],
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            return (player.storage.ls_shuixing != true && player.storage.ls_shuixing_fire) || (player.storage.ls_shuixing == true && player.storage.ls_shuixing_water);
                        },
                        content() {
                            if (player.storage.ls_shuixing == true) {
                                var cards = player.storage.ls_shuixing_water;
                            } else {
                                var cards = player.storage.ls_shuixing_fire;
                            }
                            var card = { name: cards.name, nature: cards.nature };
                            lib.skill.ls_shuixing.viewAs = card;
                        },
                        _priority: -202300,
                    },
                    block: {
                        charlotte: true,
                    },
                    fire: {
                        forced: true,
                        charlotte: true,
                        forced: true,
                        _priority: 2023,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return get.type(event.card) != 'equip';
                        },
                        content() {
                            if (trigger.card.isCard) {
                                if (player.hasSkill('ls_shuixing_block')) player.removeSkill('ls_shuixing_block');
                                player.storage.ls_shuixing_fire = trigger.card;
                            } else {
                                player.addSkill('ls_shuixing_block');
                                player.storage.ls_shuixing_fire = trigger.card;
                            }
                        },
                        _priority: 202300,
                    },
                    water: {
                        forced: true,
                        charlotte: true,
                        forced: true,
                        _priority: 2023,
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        filter(event, player) {
                            return !get.tag(event.card, 'damage') && get.type(event.card) != 'equip';
                        },
                        content() {
                            player.storage.ls_shuixing_water = trigger.card;
                        },
                        _priority: 202300,
                    },
                },
            },
            ls_cujin: {
                audio: 'ext:裸睡天依:2',
                init(player, skill) {
                    player.storage.ls_cujin = 0;
                },
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    if (player.storage.ls_cujin == 0) return false;
                    return get.tag(event.card, 'damage');
                },
                prompt(event, player) {
                    var player = _status.event.player;
                    var str = '是否发动【殂劲】令';
                    str += get.translation(event.card);
                    str += '的伤害+';
                    str += player.storage.ls_cujin;
                    return str;
                },
                content() {
                    player.addTempSkill('ls_cujin_remove');
                    if (!player.storage.ls_cujin_benghuai) player.storage.ls_cujin_benghuai = [];
                    player.storage.ls_cujin_benghuai.push(trigger.card);
                    trigger.baseDamage += player.storage.ls_cujin;
                },
                ai: {
                    effect: {
                        player(card, player, target, current) {
                            if (get.tag(card, 'damage') && player.storage.ls_cujin > 0 && player.hp < 3 && player.maxHp < 3) {
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
                group: ['ls_cujin_clear', 'ls_cujin_benghuai', 'ls_cujin_remove'],
                subSkill: {
                    clear: {
                        forced: true,
                        charlotte: true,
                        trigger: {
                            global: 'roundStart',
                        },
                        content() {
                            player.storage.ls_cujin = 0;
                        },
                    },
                    benghuai: {
                        forced: true,
                        trigger: {
                            source: 'damageSource',
                        },
                        lastDo: true,
                        filter(event, player) {
                            return event.card && player.storage.ls_cujin_benghuai && player.storage.ls_cujin_benghuai.includes(event.card);
                        },
                        content() {
                            'step 0';
                            player
                                .chooseControl('受到一点伤害', 'baonue_maxHp', function (event, player) {
                                    if (player.hp == player.maxHp) return '受到一点伤害';
                                    var history = player.getHistory('damage');
                                    if (history.indexOf(event) != 0) {
                                        if (player.hp <= 2 && player.countCards('hs', 'tao') + player.countCards('hs', 'jiu') == 0) return 'baonue_maxHp';
                                    } else {
                                        if (player.hp < 2 && player.countCards('hs', 'tao') + player.countCards('hs', 'jiu') == 0) return 'baonue_maxHp';
                                    }
                                    return '受到一点伤害';
                                })
                                .set('prompt', '殂劲:受到一点伤害或减1点体力上限');
                            ('step 1');
                            if (result.control == '受到一点伤害') {
                                player.damage();
                            } else {
                                player.loseMaxHp(true);
                            }
                        },
                    },
                    remove: {
                        forced: true,
                        charlotte: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        filter(event, player) {
                            return event.card && player.storage.ls_cujin_benghuai && player.storage.ls_cujin_benghuai.includes(event.card);
                        },
                        content() {
                            player.storage.ls_cujin_benghuai.remove(event.card);
                            player.removeSkill('ls_cujin_remove');
                        },
                    },
                },
            },
            ls_tengnuo: {
                audio: 'ext:裸睡天依:2',
                forced: true,
                lastDo: true,
                init(player, skill) {
                    player.storage.ls_tengnuo = 0;
                },
                trigger: {
                    global: ['useCardAfter', 'useSkillAfter', 'changeHpAfter', 'dieAfter', 'loseAfter'],
                }, //QQQ
                filter(event, player) {
                    var num = player.storage.ls_tengnuo_count;
                    var count = game.countPlayer(function (current) {
                        return get.distance(current, player) <= 1;
                    });
                    return num != count;
                },
                content() {
                    'step 0';
                    var num = player.storage.ls_tengnuo_count;
                    var count = game.countPlayer(function (current) {
                        return get.distance(current, player) <= 1;
                    });
                    var numx = num - count;
                    if (numx > 0) {
                        player.draw(numx);
                    } else {
                        player.draw(-numx);
                    }
                    ('step 1');
                    player.storage.ls_tengnuo_count = game.countPlayer(function (current) {
                        return get.distance(current, player) <= 1;
                    });
                },
                mark: true,
                marktext: '腾挪',
                intro: {
                    content(num) {
                        var player = _status.event.player;
                        var str = '<li>防御距离';
                        if (num >= 0) str += '+';
                        str += num;
                        return str;
                    },
                },
                mod: {
                    globalTo(from, to, current) {
                        var num = to.storage.ls_tengnuo;
                        return current + num;
                    },
                },
                group: ['ls_tengnuo_count', 'ls_tengnuo_add', 'ls_tengnuo_remove'],
                subSkill: {
                    count: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        content() {
                            var count = game.countPlayer(function (current) {
                                return get.distance(current, player) <= 1;
                            });
                            player.storage.ls_tengnuo_count = count;
                        },
                        charlotte: true,
                    },
                    add: {
                        trigger: {
                            global: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            if (player.storage.ls_tengnuo >= 5) return false;
                            if (
                                player.getHistory('damage', function (evt) {
                                    return evt.card == event.card;
                                }).length
                            )
                                return false;
                            return player != event.player && event.targets && event.targets.includes(player);
                        },
                        content() {
                            player.storage.ls_tengnuo++;
                            player.markSkill('ls_tengnuo');
                            game.log(player, '的防御距离+1');
                            event.trigger('tengnuoAfter');
                        },
                    },
                    remove: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        filter(event, player) {
                            if (
                                !game.hasPlayer(function (current) {
                                    return get.distance(current, player) > 1;
                                })
                            )
                                return false;
                            if (player.storage.ls_tengnuo <= -5) return false;
                            if (
                                player.getHistory('sourceDamage', function (evt) {
                                    return evt.card == event.card;
                                }).length
                            )
                                return false;
                            return true;
                        },
                        content() {
                            player.storage.ls_tengnuo--;
                            player.markSkill('ls_tengnuo');
                            game.log(player, '的防御距离-1');
                            event.trigger('tengnuoAfter');
                        },
                    },
                },
            },
            ls_jieli: {
                audio: 'ext:裸睡天依:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (event.responded || event.ls_jieli || event.type == 'wuxie') return false;
                    if (
                        game.hasPlayer(function (current) {
                            return current.countCards('ej') > 0;
                        }) &&
                        event.filterCard &&
                        event.filterCard(
                            {
                                name: 'sha',
                            },
                            player,
                            event
                        )
                    )
                        return true;
                    if (
                        game.hasPlayer(function (current) {
                            return current.countCards('ej') > 0;
                        }) &&
                        event.filterCard &&
                        event.filterCard(
                            {
                                name: 'shan',
                            },
                            player,
                            event
                        )
                    )
                        return true;
                    return false;
                },
                delay: false,
                usable: 5, //QQQ
                filterTarget(card, player, target) {
                    return target.countCards('ej') > 0;
                },
                content() {
                    'step 0';
                    var evt = event.getParent(2);
                    evt.set('ls_jieli', true);
                    var list = [];
                    if (evt.filterCard && evt.filterCard({ name: 'shan' }, player, event)) list.push(['基本', '', 'shan']);
                    if (evt.filterCard && evt.filterCard({ name: 'sha' }, player, event)) list.push(['基本', '', 'sha']);
                    player.chooseButton(['视为使用一张 【杀】/【闪】', [list, 'vcard']]);
                    ('step 1');
                    if (result.bool) {
                        var evt = event.getParent(2);
                        event.Q = result.links[0][2];
                        player.choosePlayerCard(true, target, 'ej').set('filterButton', function (button) {
                            return true;
                        });
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        var evt = event.getParent(2);
                        var name = event.Q;
                        if (evt.name == 'chooseToUse') {
                            game.broadcastAll(
                                function (result, name) {
                                    lib.skill.ls_jieli_backup.viewAs = {
                                        name: name,
                                        cards: [result],
                                    };
                                    lib.skill.ls_jieli_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                                },
                                result.links[0],
                                name
                            );
                            evt.set('_backupevent', 'ls_jieli_backup');
                            evt.backup('ls_jieli_backup');
                            evt.set('openskilldialog', '选择' + get.translation(name) + '(' + get.translation(result.links[0]) + ')的目标');
                            evt.set('norestore', true);
                            evt.set('custom', {
                                add: {},
                                replace: { window() { } },
                            });
                        } else {
                            evt.result.card = {
                                name: name,
                                cards: [result],
                            };
                            evt.result.cards = [result.links[0]];
                            target.$give(result.links[0], player, false);
                            target.draw();
                            evt.redo();
                            return;
                        }
                        evt.goto(0);
                    } else {
                        event.finish();
                    }
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    order: 10,
                    skillTagFilter(player, tag) {
                        return game.hasPlayer(function (current) {
                            return current.countCards('ej') > 0;
                        });
                    },
                    result: {
                        player(player, target) {
                            var att = get.attitude(player, target);
                            var eff = Math.max(0, get.effect(target, { name: 'sha' }, player, player));
                            if (_status.event.type != 'phase') return 11 - att;
                            if (!player.hasValueTarget({ name: 'sha' })) return 0;
                            if (_status.event.type == 'phase') {
                                if (
                                    player.hasValueTarget({ name: 'sha' }) &&
                                    game.hasPlayer(function (current) {
                                        return (
                                            get.attitude(player, current) < 0 &&
                                            !player.hasCard(function (card) {
                                                return get.tag(card, 'damage') && player.hasUseTarget(card);
                                            })
                                        );
                                    })
                                )
                                    return 15 - att + 3 * eff;
                            }
                            return 9 - att + 3 * eff;
                        },
                    },
                },
                subSkill: {
                    backup: {
                        sourceSkill: 'ls_jieli',
                        precontent() {
                            var cards = event.result.card.cards;
                            event.result.cards = cards;
                            var owner = get.owner(cards[0]);
                            event.target = owner;
                            owner.$give(cards[0], player, false);
                            player.popup(event.result.card.name, 'metal');
                            owner.draw();
                        },
                        filterCard() {
                            return false;
                        },
                        prompt: '请选择【杀】的目标',
                        selectCard: -1,
                    },
                },
            },
            ls_chandou: {
                forced: true,
                audio: 'ext:裸睡天依:2',
                trigger: {
                    player: 'tengnuoAfter',
                },
                filter(event, player) {
                    var target = _status.currentPhase;
                    if (target == player) return false;
                    if ((!target.hasSkill('ls_chandou_block') && get.distance(target, player) <= 1) || (target.hasSkill('ls_chandou_block') && get.distance(target, player) > 1)) return true;
                    return false;
                },
                content() {
                    var target = _status.currentPhase;
                    if (target.hasSkill('ls_chandou_block')) {
                        target.removeSkill('ls_chandou_block');
                    } else {
                        target.addTempSkill('ls_chandou_block');
                    }
                },
                subSkill: {
                    block: {
                        forced: true,
                        mark: true,
                        marktext: '缠斗',
                        intro: {
                            content() {
                                var str = '只能使用牌指定';
                                var target = game.filterPlayer((current) => current.hasSkill('ls_chandou'));
                                str += get.translation(target);
                                str += '为目标';
                                return str;
                            },
                        },
                        mod: {
                            playerEnabled(card, player, target) {
                                if (!target.hasSkill('ls_chandou')) return false;
                            },
                        },
                    },
                },
            },
            ls_tandang: {
                audio: 'ext:裸睡天依:2',
                trigger: {
                    player: 'useCard',
                    target: 'useCardToTargeted',
                },
                forced: true,
                global: 'ls_tandang_g',
                filter(event, player) {
                    if (event.name != 'useCard' && event.player == event.target) return false;
                    if (
                        player.countCards('h', function (card) {
                            if (game.text_hasExtension('天灾之下')) {
                                return !card.hasGaintag('viewHandcard');
                            } else {
                                return !card.hasGaintag('ls_tandang_g');
                            }
                        }) > 0
                    )
                        return true;
                    return !event.player.hasHistory('lose', function (evt) {
                        if (evt.parent != event) return false;
                        for (var i in evt.gaintag_map) {
                            if (game.text_hasExtension('天灾之下')) {
                                if (evt.gaintag_map[i].includes('viewHandcard')) return true;
                            } else {
                                if (evt.gaintag_map[i].includes('ls_tandang_g')) return true;
                            }
                        }
                        return false;
                    });
                },
                content() {
                    'step 0';
                    var list = [];
                    var chosen1 = trigger.player.hasHistory('lose', function (evt) {
                        if (evt.parent != trigger) return false;
                        for (var i in evt.gaintag_map) {
                            if (game.text_hasExtension('天灾之下')) {
                                if (evt.gaintag_map[i].includes('viewHandcard')) return true;
                            } else {
                                if (evt.gaintag_map[i].includes('ls_tandang_g')) return true;
                            }
                        }
                        return false;
                    });
                    var chosen2 =
                        player.countCards('h', function (card) {
                            if (game.text_hasExtension('天灾之下')) {
                                return !card.hasGaintag('viewHandcard');
                            } else {
                                return !card.hasGaintag('ls_tandang_g');
                            }
                        }) > 0;
                    if (!chosen1) list.push('选项一');
                    if (chosen2) list.push('选项二');
                    list.push('cancel2');
                    var choiceList = [];
                    var card = trigger.card;
                    choiceList.push('展示' + get.translation(card) + '并令此牌不可被未明置牌响应');
                    choiceList.push('展示一张未明置的手牌,若为' + get.translation(get.type2(card)) + '牌则取消' + get.translation(trigger.card) + '的所有目标');
                    var next = player.chooseControl(list);
                    next.set('choiceList', choiceList);
                    next.set('prompt', get.prompt('ls_tandang'));
                    next.set('ai', function () {
                        var effect = 0;
                        if (trigger.targets && trigger.targets.length) {
                            for (var i = 0; i < trigger.targets.length; i++) {
                                effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                            }
                        }
                        if (get.attitude(player, trigger.player) > 0 && (get.type2(card) == 'equip' || ['shan', 'tao', 'jiu'].includes(card.name))) {
                            if (
                                player.hasCard(function (cardx) {
                                    return cardx.hasGaintag('ls_futu');
                                }, 'he')
                            )
                                return '选项二';
                            if (
                                player.hasCard(function (cardx) {
                                    if (game.text_hasExtension('天灾之下')) {
                                        return get.type2(cardx) != get.type2(card) && !cardx.hasGaintag('viewHandcard');
                                    } else {
                                        return get.type2(cardx) != get.type2(card) && !cardx.hasGaintag('ls_tandang_g');
                                    }
                                }, 'h')
                            )
                                return '选项二';
                            return '选项一';
                        }
                        if (effect < 0 && chosen2) return '选项二';
                        if (effect >= 0 && !chosen1) return '选项一';
                        return list.randomGet();
                    });
                    ('step 1');
                    if (result.control != 'cancel2') {
                        if (result.control == '选项一') {
                            trigger.player.showCards(trigger.cards);
                            trigger.player.addTempSkill('ls_tandang_directhit');
                            if (!trigger.player.storage.ls_tandang_directhit) trigger.player.storage.ls_tandang_directhit = [];
                            trigger.player.storage.ls_tandang_directhit.push(trigger.card);
                            event.finish();
                        } else {
                            player.chooseCard(true, function (card) {
                                if (game.text_hasExtension('天灾之下')) {
                                    return !card.hasGaintag('viewHandcard');
                                } else {
                                    return !card.hasGaintag('ls_tandang_g');
                                }
                            }).ai = function (card) {
                                if (get.attitude(player, trigger.player) > 0 && get.type2(card) == get.type2(trigger.card)) return -20;
                                if (card.hasGaintag('ls_futu')) return get.useful(card) + 10;
                                return get.useful(card);
                            };
                        }
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        var card = result.cards[0];
                        player.showCards(card);
                        if (get.type2(card) == get.type2(trigger.card)) {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                        }
                    }
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (!card.gaintag_map) return;
                        if (game.text_hasExtension('天灾之下')) {
                            if (card.hasGaintag('viewHandcard')) return num + 5;
                        } else {
                            if (card.hasGaintag('ls_tandang_g')) return num + 5;
                        }
                    },
                },
                subSkill: {
                    g: {
                        trigger: {
                            player: ['showCardsEnd', 'showHandcardsEnd'],
                        },
                        charlotte: true,
                        firstDo: true,
                        forced: true,
                        popup: false,
                        content() {
                            if (game.text_hasExtension('天灾之下')) {
                                if (event.triggername == 'showHandcardsEnd') {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        player.addGaintag(hs, 'viewHandcard');
                                        player.removeGaintag(hs, 'ls_futu');
                                    }
                                } else {
                                    game.broadcastAll(function (cards) {
                                        cards.forEach((card) => card.addGaintag('viewHandcard'));
                                        cards.forEach((card) => card.removeGaintag('ls_futu'));
                                    }, trigger.cards);
                                }
                            } else {
                                if (event.triggername == 'showHandcardsEnd') {
                                    var hs = player.getCards('h');
                                    if (hs.length) {
                                        player.addGaintag(hs, 'viewHandcard');
                                        player.removeGaintag(hs, 'ls_futu');
                                    }
                                } else {
                                    game.broadcastAll(function (cards) {
                                        cards.forEach((card) => card.addGaintag('ls_tandang_g'));
                                        cards.forEach((card) => card.removeGaintag('ls_futu'));
                                    }, trigger.cards);
                                }
                            }
                        },
                        mod: {
                            cardEnabled2(card, player) {
                                if (game.text_hasExtension('天灾之下')) {
                                    if (_status.event.respondTo) {
                                        var target = _status.event.respondTo[0];
                                        if (target.hasSkill('ls_tandang_directhit') && get.itemtype(card) == 'card' && !card.hasGaintag('viewHandcard')) {
                                            return false;
                                        }
                                    }
                                } else {
                                    if (_status.event.respondTo) {
                                        var target = _status.event.respondTo[0];
                                        if (target.hasSkill('ls_tandang_directhit') && get.itemtype(card) == 'card' && !card.hasGaintag('ls_tandang_g')) {
                                            return false;
                                        }
                                    }
                                }
                            },
                            cardRespondable(card, player) {
                                if (game.text_hasExtension('天灾之下')) {
                                    var target = _status.event.parent.player;
                                    if (target.hasSkill('ls_tandang_directhit') && get.itemtype(card) == 'card' && !card.hasGaintag('viewHandcard')) {
                                        return false;
                                    }
                                } else {
                                    var target = _status.event.parent.player;
                                    if (target.hasSkill('ls_tandang_directhit') && get.itemtype(card) == 'card' && !card.hasGaintag('ls_tandang_g')) {
                                        return false;
                                    }
                                }
                            },
                        },
                    },
                    directhit: {
                        charlotte: true,
                        forced: true,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        lastDo: true,
                        filter(event, player) {
                            return event.card && player.storage.ls_tandang_directhit && player.storage.ls_tandang_directhit.includes(event.card);
                        },
                        content() {
                            player.storage.ls_tandang_directhit.remove(event.card);
                            player.removeSkill('ls_tandang_directhit');
                        },
                    },
                },
            },
            ls_mingwang: {
                auido: 2,
                trigger: {
                    global: 'useCardAfter',
                },
                firstDo: true,
                forced: true,
                filter(event, player) {
                    var cards = player.getCards('h', function (card) {
                        if (game.text_hasExtension('天灾之下')) {
                            if (card.hasGaintag('viewHandcard')) return false;
                        } else {
                            if (card.hasGaintag('ls_tandang_g')) return false;
                        }
                        return true;
                    });
                    var name = [];
                    for (var i of cards) {
                        name.push(i.name);
                    }
                    if (name.includes(event.card.name)) return false;
                    if (!name.includes(event.card.name) && event.card && event.player.storage.ls_tandang_directhit && event.player.storage.ls_tandang_directhit.includes(event.card)) return true;
                    if (
                        event.player.hasHistory('lose', function (evt) {
                            if (evt.parent != event) return false;
                            for (var i in evt.gaintag_map) {
                                if (game.text_hasExtension('天灾之下')) return evt.gaintag_map[i].includes('viewHandcard');
                                else return evt.gaintag_map[i].includes('ls_tandang_g');
                            }
                        })
                    )
                        return true;
                    return false;
                },
                content() {
                    player.draw();
                },
            },
            //每回合限一次,当你使用的明置牌进入弃牌堆后,你可以收回此牌,且此牌无法使用直到你展示此牌
            ls_futu: {
                audio: 'ext:裸睡天依:2',
                usable: 1,
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    if (Array.isArray(event.cards)) {
                        for (var i of event.cards) {
                            if (get.is.shownCard(i)) return true;
                        }
                    } //QQQ
                    return false;
                },
                prompt(event) {
                    var str = '是否发动【复土】收回';
                    str += get.translation(event.cards);
                    str += '?';
                    return str;
                },
                content() {
                    var cards = trigger.cards.filterInD();
                    if (cards) {
                        player.gain(cards, 'gain2').gaintag.add('ls_futu');
                    }
                },
                mod: {
                    cardEnabled2(card) {
                        if (game.text_hasExtension('天灾之下')) {
                            if (card.hasGaintag('ls_futu') && !card.hasGaintag('viewHandcard')) return false;
                        } else {
                            if (card.hasGaintag('ls_futu') && !card.hasGaintag('ls_tandang_g')) return false;
                        }
                    },
                },
            },
            ls_chenmou: {
                forced: true,
                trigger: {
                    player: 'damageBegin4',
                },
                filter(event, player) {
                    var types = [];
                    types.addArray(
                        game
                            .getGlobalHistory('useCard', function (evt) {
                                return player == evt.player;
                            })
                            .map((evt) => get.type2(evt.card))
                    );
                    if (types.length >= 3 || (types.includes('basic') && types.includes('trick') && player.countCards('hs', { type: 'equip' }) <= 0) || player.countCards('hes') == 0) return false;
                    return true;
                },
                forced: true,
                content() {
                    'step 0';
                    var types = [];
                    types.addArray(
                        game
                            .getGlobalHistory('useCard', function (evt) {
                                return player == evt.player;
                            })
                            .map((evt) => get.type2(evt.card))
                    );
                    var prompt2 = types.length ? '使用一张不为' + get.translation(types) + '的牌并防止此次伤害' : '使用一张牌并防止此次伤害';
                    player
                        .chooseToUse(function (card, player, event) {
                            return player.hasUseTarget(card) && !types.includes(get.type2(card, player));
                        }, prompt2)
                        .set('targetRequired', true)
                        .set('filterTarget', function (card, player, target) {
                            return lib.filter.targetEnabled.apply(this, arguments) && player.canUse(card, target);
                        });
                    ('step 1');
                    if (result.bool) {
                        trigger.cancel();
                    }
                },
            },
            ls_guanzhi: {
                audio: 'ext:裸睡天依:2',
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (!player.countCards('hes') || !_status.currentPhase || player.hasSkill('ls_guanzhi_block') || (player.storage.ls_guanzhi_count && player.countMark('ls_guanzhi') >= player.storage.ls_guanzhi_count)) return false;
                    var target = _status.currentPhase;
                    for (var i of lib.inpile) {
                        var type = get.type(i);
                        if ((type == 'basic' || type == 'trick') && event.filterCard && event.filterCard({ name: i }, player, event) && target.storage.ls_guanzhi_used && target.storage.ls_guanzhi_used.includes(i)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        var list = [],
                            target = _status.currentPhase;
                        for (var i = 0; i < lib.inpile.length; i++) {
                            var name = lib.inpile[i];
                            if (name == 'sha') {
                                if (event.filterCard && event.filterCard({ name: name }, player, event) && target.storage.ls_guanzhi_used && target.storage.ls_guanzhi_used.includes(name)) list.push(['基本', '', 'sha']);
                            } else if (get.type(name) == 'trick' && event.filterCard && event.filterCard({ name: name }, player, event) && target.storage.ls_guanzhi_used && target.storage.ls_guanzhi_used.includes(name)) list.push(['锦囊', '', name]);
                            else if (get.type(name) == 'basic' && event.filterCard && event.filterCard({ name: name }, player, event) && target.storage.ls_guanzhi_used && target.storage.ls_guanzhi_used.includes(name)) list.push(['基本', '', name]);
                        }
                        return ui.create.dialog('冠智', [list, 'vcard']);
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        var player = _status.event.player;
                        if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                        return player.getUseValue({
                            name: button.link[2],
                        });
                    },
                    backup(links, player) {
                        return {
                            filterCard: true,
                            audio: 'lg_guanzhi',
                            popname: true,
                            check(card) {
                                return 12 - lib.skill.dcweidang.getLength(card) * 2 - get.value(card);
                            },
                            named: links[0][2],
                            position: 'hes',
                            viewAs: { name: links[0][2] },
                            precontent() {
                                player.addMark('ls_guanzhi', 1, false);
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张牌当做' + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    var type = get.type2(name),
                        target = _status.currentPhase;
                    return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0 && !player.hasSkill('ls_guanzhi_block') && player.storage.ls_guanzhi_count && player.countMark('ls_guanzhi') < player.storage.ls_guanzhi_count && target.storage.ls_guanzhi_used && target.storage.ls_guanzhi_used.includes(name);
                },
                ai: {
                    fireAttack: true,
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!_status.currentPhase || !player.countCards('hes') || player.hasSkill('ls_guanzhi_block') || (player.storage.ls_guanzhi_count && player.countMark('ls_guanzhi') >= player.storage.ls_guanzhi_count)) return false;
                    },
                    order: 1,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                global: 'ls_guanzhi_used',
                group: ['ls_guanzhi_draw', 'ls_guanzhi_count'],
                subSkill: {
                    backup: {
                        charlotte: true,
                    },
                    block: {
                        charlotte: true,
                    },
                    draw: {
                        trigger: {
                            player: ['useCard', 'respond'],
                        },
                        forced: true,
                        filter(event, player) {
                            if (!event.skill || event.skill != 'ls_guanzhi_backup') return false;
                            return true;
                        },
                        content() {
                            var name1 = lib.skill.dcweidang.getLength(trigger.card);
                            var name2 = lib.skill.dcweidang.getLength(trigger.cards[0]);
                            if (name1 < name2) {
                                player.draw();
                            } else {
                                player.addTempSkill('ls_guanzhi_block');
                            }
                        },
                    },
                    count: {
                        init(player, skill) {
                            player.storage[skill] = 1;
                            player.markSkill([skill]);
                        },
                        trigger: {
                            global: 'roundStart',
                        },
                        forced: true,
                        charlotte: true,
                        lastDo: true,
                        silent: true,
                        filter(event, player) {
                            return player.countMark('ls_guanzhi') > 0;
                        },
                        marktext: '冠智',
                        intro: {
                            content: '当前【冠智】发动次数为#',
                        },
                        content() {
                            player.removeMark('ls_guanzhi', player.countMark('ls_guanzhi'), false);
                        },
                        mod: {
                            maxHandcard(player, num) {
                                return num + player.storage.ls_guanzhi_count;
                            },
                        },
                        popup: false,
                        _priority: 1,
                    },
                    used: {
                        forced: true,
                        charlotte: true,
                        firstDo: true,
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            return get.type(event.card, player) == 'basic' || get.type(event.card, player) == 'trick';
                        },
                        content() {
                            var name = trigger.card.name;
                            if (!player.storage.ls_guanzhi_used) player.storage.ls_guanzhi_used = [];
                            player.storage.ls_guanzhi_used.push(name);
                        },
                    },
                },
            },
            ls_dongxin: {
                audio: 'ext:裸睡天依:2',
                trigger: {
                    global: 'useCardToPlayered',
                },
                filter(event, player) {
                    if (!(event.isFirstTarget && event.targets && event.player.isIn())) return false;
                    return event.card && event.cards.length != 0 && (event.cards.length != 1 || event.card.name != event.cards[0].name);
                },
                forced: true,
                init(player, skill) {
                    player.storage[skill] = [];
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(get.prompt2('ls_dongxin'), function (card, player, target) {
                            return (target == trigger.player || trigger.targets.includes(target)) && target.countCards('h') > 0;
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return 10 - target.countCards('h');
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.chooseCardButton(target, target.getCards('h'), '选择一张牌并将其所有与此牌类型相同的牌标记为<洞心>');
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (result.bool) {
                        var target = event.target;
                        player.storage.ls_dongxin.push(target);
                        var cards = target.getCards('h', function (card) {
                            return get.type2(card, target) == get.type2(result.links[0], target);
                        });
                        cards.forEach((card) => card.addGaintag('ls_dongxin'));
                    }
                },
                group: ['ls_dongxin_use'],
                subSkill: {
                    use: {
                        trigger: {
                            global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer((current) => {
                                var cards = current.getCards('h'),
                                    cardx = [];
                                for (var i of cards) {
                                    if (i.hasGaintag('ls_dongxin')) cardx.push(i);
                                }
                                return cardx.length == 0 && player.storage.ls_dongxin.includes(current);
                            });
                        },
                        content() {
                            var targets = game.filterPlayer((current) => {
                                var cards = current.getCards('h'),
                                    cardx = [];
                                for (var i of cards) {
                                    if (i.hasGaintag('ls_dongxin')) cardx.push(i);
                                }
                                return cardx.length == 0 && player.storage.ls_dongxin.includes(current);
                            });
                            player.line(targets[0], 'green');
                            if (player.storage.ls_guanzhi_count) player.storage.ls_guanzhi_count++;
                            player.storage.ls_dongxin.remove(targets[0]);
                            player.markSkill('ls_guanzhi_count');
                        },
                    },
                },
            },
            ls_xiuyan: {
                forced: true,
                charlotte: true,
                global: ['ls_xiuyan_draw', 'ls_xiuyan_use'],
                subSkill: {
                    use: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        charlotte: true,
                        firstDo: true,
                        forced: true,
                        filter(event, player) {
                            return !player.hasYanba() || game.hasPlayer((cur) => cur.hasYanba());
                        },
                        content() {
                            'step 0';
                            var list = [];
                            if (!player.hasYanba()) list.push('选项一');
                            if (game.hasPlayer((cur) => cur.hasYanba())) list.push('选项二');
                            list.push('cancel2');
                            player
                                .chooseControl(list)
                                .set('choiceList', ['修筑【堰坝】', '摧毁最近的【堰坝】'])
                                .set('prompt', '修堰:请选择一项')
                                .set('ai', function () {
                                    if (list.length == 2) {
                                        if (Math.random() < 0.2) return 'cancel2';
                                        if (!player.hasYanba()) return '选项一';
                                        if (game.hasPlayer((cur) => cur.hasYanba())) return '选项二';
                                    }
                                    if (game.hasPlayer((cur) => cur.hasYanba() && get.attitude(player, cur.next) > 0 && get.attitude(player, cur.previous) > 0)) return '选项二';
                                    if (Math.random() < 0.2) return 'cancel2';
                                    if (Math.random() < 0.3) return '选项二';
                                    return '选项一';
                                });
                            ('step 1');
                            if (result.control == 'cancel2') {
                                event.finish();
                            } else {
                                if (result.control == '选项一') {
                                    var card = game.createCard('ls_yanbae', 'spade', 13);
                                    player.$gain2(card);
                                    player.equip(card);
                                    event.trigger('yanba_build');
                                    event.finish();
                                } else {
                                    player
                                        .chooseTarget('修堰:摧毁最近的【堰坝】', true, function (card, player, target) {
                                            var targets = game.filterPlayer((cur) => cur.hasYanba());
                                            var dist = get.distance(player, target);
                                            if (dist > 1) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return targets.includes(current) && current != player && get.distance(player, current) < dist;
                                                    })
                                                ) {
                                                    return false;
                                                }
                                            }
                                            return targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var res = 0;
                                            var a = target.next,
                                                b = target.previous;
                                            var att1 = get.attitude(player, a),
                                                att2 = get.attitude(player, b),
                                                att = get.attitude(player, target);
                                            if (a.hasYanba()) {
                                                if (b.hasYanba()) {
                                                    res += att1 > 0 ? 1 : -1;
                                                    res += att2 > 0 ? 1 : -1;
                                                    res += att > 0 ? -1 : 1;
                                                }
                                                res += att1 > 0 ? 1 : -1;
                                                res += att2 > 0 ? -1 : 1;
                                                res += att > 0 ? -1 : 1;
                                            } else {
                                                if (b.hasYanba()) {
                                                    res += att1 > 0 ? -1 : 1;
                                                    res += att2 > 0 ? 1 : -1;
                                                    res += att > 0 ? -1 : 1;
                                                }
                                                res += att > 0 ? -1 : 1;
                                            }
                                            return res;
                                        });
                                }
                            }
                            ('step 2');
                            var target = result.targets[0];
                            var card = target.getCards('e', function (card) {
                                return card.name == 'ls_yanbaa' || card.name == 'ls_yanbab' || card.name == 'ls_yanbac' || card.name == 'ls_yanbad' || card.name == 'ls_yanbae';
                            });
                            target.loseToDiscardpile(card);
                        },
                    },
                    draw: {
                        trigger: {
                            player: 'gainAfter',
                            global: 'loseAsyncAfter',
                        },
                        charlotte: true,
                        forced: true,
                        filter(event, player) {
                            if (event.getg(player).length < 2) return false;
                            return !player.hasYanba() && event.parent.name != 'ls_xiuyan_draw';
                        },
                        content() {
                            var targets = game.filterPlayer((cur) => cur == player.next || cur == player.previous);
                            if (targets) game.asyncDraw(targets);
                        },
                    },
                },
            },
            ls_juedi: {
                forced: true,
                charlotte: true,
                trigger: {
                    global: ['yanba_build'],
                },
                filter(event, player) {
                    var players = game.filterPlayer((c) => !c.hasYanba() && (c == event.player.next || c == event.player.previous));
                    return players.length;
                },
                content() {
                    var players = game.filterPlayer((c) => !c.hasYanba() && (c == trigger.player.next || c == trigger.player.previous));
                    player.draw(players.length);
                    event.finish();
                },
                global: ['ls_juedi_destroy'],
                subSkill: {
                    destroy: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        usable: 5, //QQQ
                        filter(event, player) {
                            var evt = event.getl(player);
                            if (!evt || !evt.es || !evt.es.length) return false;
                            for (var card of evt.es) {
                                if (card.name == 'ls_yanbae') {
                                    var targets = game.filterPlayer((c) => c.hasSkill('ls_juedi'));
                                    var players = game.filterPlayer((c) => !c.hasYanba() && (c == event.player.next || c == event.player.previous));
                                    return players.length && targets.length;
                                }
                            }
                            return false;
                        },
                        content() {
                            'step 0';
                            var targets = game.filterPlayer((c) => c.hasSkill('ls_juedi'));
                            event.current = targets[0];
                            var players = game.filterPlayer((c) => !c.hasYanba() && (c == player.next || c == player.previous));
                            event.num = players.length;
                            ('step 1');
                            var targets = game.filterPlayer((c) => c == player.next || c == player.previous);
                            if (targets.length > 1) {
                                if (event.num == 1) {
                                    event.current
                                        .chooseTarget('决堰:选择一名与' + get.translation(player) + '相邻的一名角色,对其造成1点伤害', true, function (card, player, targetx) {
                                            return targets.includes(targetx);
                                        })
                                        .set('ai', function (targetx) {
                                            var player = _status.event.player;
                                            return get.damageEffect(targetx, event.current, event.current);
                                        });
                                } else {
                                    for (var i of targets) {
                                        i.damage(event.current);
                                    }
                                    event.finish();
                                }
                            } else {
                                targets[0].damage(event.current);
                                event.finish();
                            }
                            ('step 2');
                            result.targets[0].damage(event.current);
                        },
                    },
                },
            },
            ls_qianjie: {
                forced: true,
                charlotte: true,
                trigger: {
                    player: ['linkBegin', 'turnOverBegin', 'judgeBegin'],
                },
                content() {
                    trigger.cancel();
                },
                mod: {
                    targetEnabled(card, player, target) {
                        if (get.type(card) == 'delay') return false;
                    },
                },
                ai: {
                    noturn: true,
                    noCompareTarget: true,
                    effect: {
                        target(card) {
                            if (card.name == 'tiesuo') return 'zeroplayertarget';
                        },
                    },
                },
                group: ['ls_qianjie_skip', 'ls_qianjie_change'],
                subSkill: {
                    change: {
                        forced: true,
                        firstDo: true,
                        charlotte: true,
                        trigger: {
                            player: 'damageBegin3',
                            source: 'damageBegin1',
                        },
                        content() {
                            'step 0';
                            if (event.triggername == 'damageBegin3') {
                                if (player.hasYanba()) {
                                    player.chooseBool('是否摧毁【堰坝】并防止即将受到的' + trigger.num + '点伤害？').set('ai', function () {
                                        return trigger.num > 0;
                                    });
                                } else event.finish();
                            } else {
                                if (!player.hasYanba()) {
                                    player.chooseBool('是否修筑【堰坝】并防止即将造成的' + trigger.num + '点伤害？').set('ai', function () {
                                        return trigger.num <= 1;
                                    });
                                } else event.finish();
                            }
                            ('step 1');
                            if (result.bool) {
                                trigger.cancel();
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (event.triggername == 'damageBegin1') {
                                var card = game.createCard('ls_yanbae', 'spade', 13);
                                player.$gain2(card);
                                player.equip(card);
                                event.trigger('yanba_build');
                            } else {
                                var card = player.getCards('e', function (card) {
                                    return card.name == 'ls_yanbaa' || card.name == 'ls_yanbab' || card.name == 'ls_yanbac' || card.name == 'ls_yanbad' || card.name == 'ls_yanbae';
                                });
                                player.loseToDiscardpile(card);
                            }
                        },
                    },
                    skip: {
                        trigger: {
                            player: ['phaseZhunbeiSkipped', 'phaseZhunbeiCancelled', 'phaseDrawSkipped', 'phaseDrawCancelled', 'phaseJudgeSkipped', 'phaseJudgeCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseDiscardSkipped', 'phaseDiscardCancelled', 'phaseJieshuSkipped', 'phaseJieshuCancelled'],
                        },
                        forced: true,
                        charlotte: true,
                        content() {
                            var name = event.triggername;
                            switch (name) {
                                case 'phaseZhunbeiSkipped':
                                case 'phaseZhunbeiCancelled':
                                    var next = player.phaseUse();
                                    break;
                                case 'phaseDrawSkipped':
                                case 'phaseDrawCancelled':
                                    var next = player.phaseDraw();
                                    break;
                                case 'phaseJudgeSkipped':
                                case 'phaseJudgeCancelled':
                                    var next = player.phaseJudge();
                                    break;
                                case 'phaseUseSkipped':
                                case 'phaseUseCancelled':
                                    var next = player.phaseUse();
                                    break;
                                case 'phaseDiscardSkipped':
                                case 'phaseDiscardCancelled':
                                    var next = player.phaseDiscard();
                                    break;
                                case 'phaseJieshuSkipped':
                                case 'phaseJieshuCancelled':
                                    var next = player.phaseJieshu();
                                    break;
                            }
                            event.next.remove(next);
                            trigger.next.push(next);
                        },
                    },
                },
            },
            ls_yucan: {
                trigger: {
                    global: 'useCardToTarget',
                },
                forced: true,
                filter(event, player) {
                    if (get.color(event.card) == 'red') return false;
                    if (!event.targets || event.targets.length != 1) return false;
                    if (event.player == player) return false;
                    if (event.targets.includes(player)) return false;
                    if (get.info(event.card).multitarget) return false;
                    var type = get.type(event.card);
                    if (type != 'basic' && type != 'trick') return false;
                    if (lib.filter.targetEnabled2(event.card, event.player, player)) {
                        for (var i = 0; i < event.targets.length; i++) {
                            if (get.distance(event.targets[i], player) <= 1) return true;
                        }
                    }
                    return false;
                },
                content() {
                    player.draw();
                    trigger.parent.targets.add(player);
                    trigger.player.line(player, 'fire');
                },
                group: ['ls_yucan_damage'],
                subSkill: {
                    damage: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        content() {
                            var cards = get.cards(3);
                            event.cards = cards;
                            game.cardsGotoOrdering(cards);
                            player.showCards(event.cards, get.translation(player) + '发动了【玉惨】');
                            var color = trigger.card ? get.color(trigger.card) : 'none';
                            var list = [],
                                cardx = [];
                            for (var i of event.cards) {
                                if (get.color(i) != color) {
                                    list.push(i);
                                } else {
                                    cardx.push(i);
                                }
                            }
                            if (list.length) player.gain(list, 'gain2');
                            if (cardx.length && trigger.source) trigger.source.gain(cardx, 'gain2');
                        },
                        ai: {
                            maixie: true,
                            maixie_hp: true,
                            effect: {
                                target(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return;
                                        if (!target.hasFriend()) return;
                                        var num = 1;
                                        if (!player.needsToDiscard() && target.isDamaged()) {
                                            num = 0.7;
                                        } else {
                                            num = 0.5;
                                        }
                                        if (get.color(card) != 'red' && get.color(card) != 'black') num * 2;
                                        if (target.hp >= 4) return [1, num * 2];
                                        if (target.hp == 3) return [1, num * 1.5];
                                        if (target.hp == 2) return [1, num * 0.5];
                                    }
                                },
                            },
                        },
                    },
                },
            },
            ls_luohong: {
                trigger: {
                    global: ['loseAfter', 'loseAsyncAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (event.type != 'discard' || event.getlx === false) return false;
                    if (player.hasSkill('ls_luohong_count') && player.storage.ls_luohong_count >= 2) return false;
                    var cards = event.cards.slice(0);
                    for (var i = 0; i < cards.length; i++) {
                        if (get.color(cards[i]) == 'red' && cards[i].original != 'j') {
                            var cards = [];
                            game.countPlayer(function (current) {
                                var evt = event.getl(current);
                                for (var i of evt.cards2) {
                                    if (get.position(i, true) == 'd' && player.hasUseTarget(i)) cards.push(i);
                                }
                                return false;
                            });
                            return cards.length;
                        }
                    }
                    return false;
                },
                content() {
                    'step 0';
                    var cards = [];
                    event.list = [];
                    game.countPlayer(function (current) {
                        var evt = trigger.getl(current);
                        for (var i of evt.cards2) {
                            if (get.position(i, true) == 'd' && player.hasUseTarget(i)) {
                                cards.push(i);
                                event.list.push([i, current]);
                            }
                        }
                        return false;
                    });
                    player.chooseButton(['落红:是否使用其中的一张牌？', cards]).set('ai', function (button) {
                        return _status.event.player.getUseValue(button.link);
                    });
                    ('step 1');
                    if (result.bool) {
                        player.addTempSkill('ls_luohong_count', 'roundStart');
                        player.storage.ls_luohong_count++;
                        for (var i of event.list) {
                            if (i[0] == result.links[0]) event.target = i[1];
                        }
                        player.$gain2(result.links[0], false);
                        player.chooseUseTarget(true, result.links[0], false);
                    } else {
                        event.finish();
                    }
                    ('step 2');
                    if (event.target.isIn()) {
                        var target = event.target;
                        var list = [];
                        if (game.hasPlayer((c) => c != player && get.distance(c, player) <= 1 && target.canUse('sha', c, false))) list.push('选项一');
                        list.push('选项二');
                        player
                            .chooseControl(list)
                            .set('choiceList', ['令' + get.translation(target) + '视为对一名与你距离为1的其他角色使用一张【杀】', '弃置两张牌,你与' + get.translation(target) + '各摸两张牌'])
                            .set('prompt', '修堰:请选择一项')
                            .set('ai', function () {
                                if (list.length == 2) {
                                    if (player.countCards('he') < 2) return '选项二';
                                    var targets = game.filterPlayer((c) => c != player && get.distance(c, player) <= 1 && target.canUse('sha', c, false));
                                    for (var i of targets) {
                                        if (get.effect(i, { name: 'sha', storage: { ls_luohong: true } }, target, player) > 0) return '选项一';
                                    }
                                    return Math.random() > 0.6 ? '选项二' : '选项一';
                                }
                                return '选项二';
                            });
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.control == '选项一') {
                        player
                            .chooseTarget('选择' + get.translation(event.target) + '视为使用【杀】的目标', true, function (card, player, target) {
                                return event.target.canUse('sha', target, false) && target != player && get.distance(target, player) <= 1;
                            })
                            .set('ai', function (target) {
                                var player = _status.event.player;
                                return get.effect(target, { name: 'sha' }, event.target, player);
                            });
                    } else {
                        player.chooseToDiscard(2, 'he', true);
                        var players = [player, event.target];
                        game.asyncDraw(players, 2);
                        event.finish();
                    }
                    ('step 4');
                    if (result.bool) {
                        target.addTempSkill('ls_luohong_sha', { player: 'useCardAfter' });
                        target.useCard({ name: 'sha', storage: { ls_luohong: true } }, result.targets[0], false);
                    }
                },
                subSkill: {
                    sha: {
                        trigger: {
                            source: 'damageBegin',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.card.storage && event.card.storage.ls_luohong;
                        },
                        content() {
                            player.recover();
                        },
                    },
                    count: {
                        charlotte: true,
                        init(player, skill) {
                            player.storage[skill] = 0;
                        },
                        onremove(player, skill) {
                            delete player.storage[skill];
                        },
                    },
                },
            },
            ls_wyucan: {
                trigger: {
                    global: ['loseAfter', 'gainAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                init(player, skill) {
                    player.storage[skill] = [1, 1, 1, 1];
                },
                filter(event, player) {
                    if (player.hasSkill('ls_wyucan_block')) return false;
                    if (!player.storage.ls_wyucan_chose) return false;
                    var target = player.storage.ls_wyucan_chose;
                    var num = event.getl(target).cards2.length;
                    if (event.getg) num = Math.max(num, event.getg(target).length);
                    return num > 1 || (player.storage.ls_wyucan[1] > 1 && num > 0);
                },
                prompt(event, player) {
                    var target = player.storage.ls_wyucan_chose;
                    var num = event.getl(target).cards2.length;
                    var str = get.translation(target) + '一次性';
                    str += (num > (player.storage.ls_wyucan[1] > 1) ? 1 : 0) ? '失去了至少' : '获得了至少';
                    str += player.storage.ls_wyucan[1] > 1 ? '一' : '两';
                    str += '张牌,是否发动【玉惨】令你与其各';
                    if (player.storage.ls_wyucan[0] > 1) {
                        str += '摸或弃置一张牌？';
                    } else {
                        str += num > 1 ? '摸一张牌？' : '弃置一张牌？';
                    }
                    return str;
                },
                content() {
                    'step 0';
                    player.addTempSkill('ls_wyucan_block');
                    var target = player.storage.ls_wyucan_chose;
                    var numx = trigger.getl(target).cards2.length;
                    event.targets = [player, target];
                    event.cards = [];
                    event.num = 0;
                    if (player.storage.ls_wyucan[0] > 1) {
                        player.chooseBool('点确定一起摸一张牌,或点取消一起弃置一张牌').set('ai', function () {
                            return true;
                        });
                        event.goto(8);
                    } else {
                        event.goto(numx > 1 ? 1 : 3);
                    }
                    ('step 1');
                    event.targets[event.num].draw();
                    event.num++;
                    ('step 2');
                    event.cards.push(result[0]);
                    event.goto(event.num < 2 ? 1 : 5);
                    ('step 3');
                    event.targets[event.num].chooseToDiscard('he', true);
                    event.num++;
                    ('step 4');
                    event.cards.push(result.cards[0]);
                    event.goto(event.num < 2 ? 3 : 5);
                    ('step 5');
                    if (event.cards.length != 2) {
                        event.finish();
                    } else {
                        if (get.type2(event.cards[0], player) == get.type2(event.cards[1], player)) {
                            var list = [],
                                listx = [],
                                str = player.storage.ls_wyucan;
                            if (str[0] == 1) {
                                list.push('<span class="bluetext">失去/获得</span>修改为失去或获得,<span class="bluetext">各摸/弃置</span>修改为各摸或弃置');
                                listx.push('选项一');
                            }
                            if (str[1] == 1) {
                                list.push('<span class="firetext">两张</span>修改为一张');
                                listx.push('选项二');
                            }
                            if (str[2] == 1) {
                                list.push('<span class="greentext">你修改一次【玉惨】</span>修改为你令此技能视为为发动过或修改一次【玉惨】');
                                listx.push('选项三');
                            }
                            if (str[3] == 1) {
                                list.push('<span class="yellowtext">你可以视为使用其中一张牌</span>修改为你可以视为使用这两张牌');
                                listx.push('选项四');
                            }
                            if (str[2] > 1) {
                                list.push('令此技能视为未发动过');
                                listx.push('选项五');
                            }
                            listx.push('cancel2');
                            var prompt = str[2] > 1 ? (str[0] > 1 && str[1] > 1 && str[3] > 1 ? '玉惨:是否令此技能视为未发动过？' : '玉惨:是否修改一次此技能或令此技能视为未发动过？') : '玉惨:是否修改一次此技能？';
                            if (str[0] > 1 && str[1] > 1 && str[2] > 1 && str[3] > 1) {
                                player
                                    .chooseControl('令此技能视为未发动过', 'cancel2')
                                    .set('prompt', prompt)
                                    .set('ai', function () {
                                        return '令此技能视为未发动过';
                                    });
                            } else {
                                player
                                    .chooseControl(listx)
                                    .set('choiceList', list)
                                    .set('prompt', prompt)
                                    .set('ai', function () {
                                        if (listx.includes('选项一')) return '选项一';
                                        if (listx.includes('选项二')) return '选项二';
                                        if (listx.includes('选项四')) return '选项四';
                                        if (listx.includes('选项三')) return '选项三';
                                        if (listx.includes('选项五')) return '选项五';
                                        return 'cancel2';
                                    });
                            }
                            event.goto(7);
                        } else {
                            var cards = [];
                            for (var i of event.cards) {
                                if (player.hasUseTarget(i) && get.type(i) != 'equip' && get.type(i) != 'delay') {
                                    cards.push(i);
                                }
                            }
                            if (cards.length) {
                                if (player.storage.ls_wyucan[3] > 1) {
                                    event.cardx = cards;
                                    player.chooseBool('是否视为依次使用' + get.translation(cards) + '?').set('ai', function () {
                                        var effect = 0;
                                        for (var i of cards) {
                                            effect += _status.event.player.getUseValue(i);
                                        }
                                        return effect > 0;
                                    });
                                } else {
                                    player.chooseButton(['玉惨:是否视为使用其中的一张牌？', cards]).set('ai', function (button) {
                                        return _status.event.player.getUseValue(button.link);
                                    });
                                }
                            } else {
                                event.finish();
                            }
                        }
                    }
                    ('step 6');
                    if (result.bool) {
                        if (player.storage.ls_wyucan[3] > 1) {
                            for (var i of event.cardx) {
                                player.chooseUseTarget(true, { name: i.name }, false);
                            }
                        } else {
                            player.chooseUseTarget(true, { name: result.links[0].name }, false);
                        }
                        event.finish();
                    }
                    ('step 7');
                    if (result.control != 'cancel2') {
                        switch (result.control) {
                            case '选项一':
                                player.storage.ls_wyucan[0]++;
                                break;
                            case '选项二':
                                player.storage.ls_wyucan[1]++;
                                break;
                            case '选项三':
                                player.storage.ls_wyucan[2]++;
                                break;
                            case '选项四':
                                player.storage.ls_wyucan[3]++;
                                break;
                            case '选项五':
                            case '令此技能视为未发动过':
                                player.removeSkill('ls_wyucan_block');
                                break;
                        }
                        event.finish();
                    }
                    event.finish();
                    ('step 8');
                    if (result.bool) {
                        event.goto(1);
                    } else {
                        event.goto(3);
                    }
                },
                group: ['ls_wyucan_chose'],
                subSkill: {
                    block: {
                        charlotte: true,
                    },
                    chose: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        filter(event, player) {
                            return game.hasPlayer((current) => current != player) && (event.name != 'phase' || game.phaseNumber == 0);
                        },
                        content() {
                            'step 0';
                            player
                                .chooseTarget('请选择【玉惨】的目标', true, function (card, player, target) {
                                    return target != player && (!player.storage.ls_wyucan_chose || !player.storage.ls_wyucan_chose.includes(target));
                                })
                                .set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (att > 0) return att + 1;
                                    if (att == 0) return Math.random();
                                    return att;
                                });
                            ('step 1');
                            if (result.bool) {
                                var target = result.targets[0];
                                if (!player.storage.ls_wyucan_chose) player.storage.ls_wyucan_chose = target;
                                target.markSkillCharacter('ls_wyucan', player, '玉惨', '你已成为' + get.translation(player) + '的【玉惨】对象');
                            }
                        },
                    },
                },
            },
            ls_huachou: {
                trigger: {
                    global: ['useCard', 'respond'],
                },
                forced: true,
                filter(event, player) {
                    if (!event.cards.filterInD('o').length) return false;
                    if (player.storage.ls_huachou[0] == 1 && (player.hasSkill('ls_huachou_b') || player.hasSkill('ls_huachou_t') || player.hasSkill('ls_huachou_e'))) return false;
                    if (get.type(event.card) == 'basic' && ((player.countCards('h') == 0 && player.storage.ls_huachou[1] == 1) || player.hasSkill('ls_huachou_b'))) return false;
                    if (get.type2(event.card) == 'trick' && player.hasSkill('ls_huachou_t')) return false;
                    if (get.type(event.card) == 'equip' && ((player.countCards('h') == 0 && player.storage.ls_huachou[3] == 1 && _status.currentPhase) || player.hasSkill('ls_huachou_e'))) return false;
                    return event.card.isCard;
                },
                init(player, skill) {
                    player.storage[skill] = [1, 1, 1, 1];
                },
                content() {
                    'step 0';
                    switch (get.type2(trigger.card)) {
                        case 'basic':
                            if (player.storage.ls_huachou[1] > 1) {
                                player.chooseBool('进入处理区的牌为' + get.translation(trigger.card) + ',' + get.prompt('花愁')).set('ai', function (card) {
                                    return trigger.card.name != 'du';
                                });
                            } else {
                                player.chooseCard('进入处理区的牌为' + get.translation(trigger.card) + ',' + get.prompt('花愁'), 'h').set('ai', function (card) {
                                    return player.getUseValue(card, null, true) > player.getUseValue(trigger.card, null, true);
                                });
                            }
                            break;
                        case 'trick':
                            var list = [],
                                listx = [],
                                str = player.storage.ls_huachou;
                            if (str[0] == 1) {
                                list.push('<span class="bluetext">每回合限一次</span>修改为每回合每项限一次');
                                listx.push('选项一');
                            }
                            if (str[1] == 1) {
                                list.push('<span class="firetext">选择一张手牌替换之</span>修改为获得之');
                                listx.push('选项二');
                            }
                            if (str[2] == 1) {
                                list.push('<span class="greentext">修改一次【花愁】</span>修改为令此牌失效或修改一次【花愁】');
                                listx.push('选项三');
                            }
                            if (str[3] == 1) {
                                list.push('<span class="yellowtext">对当前回合角色造成伤害</span>修改为对一名其他角色造成1点伤害');
                                listx.push('选项四');
                            }
                            if (str[2] > 1) {
                                list.push('令此牌失效');
                                listx.push('选项五');
                            }
                            listx.push('cancel2');
                            var prompt = str[2] > 1 ? (str[0] > 1 && str[1] > 1 && str[3] > 1 ? '花愁:是否令此牌失效？' : '花愁:是否令此牌失效或修改一次【花愁】？') : '花愁:是否修改一次【花愁】？';
                            if (str[0] > 1 && str[1] > 1 && str[2] > 1 && str[3] > 1) {
                                player
                                    .chooseControl('令此牌失效', 'cancel2')
                                    .set('prompt', prompt)
                                    .set('ai', function () {
                                        var effect = 0;
                                        if (trigger.card.name == 'wuxie') {
                                            if (get.attitude(player, trigger.player) < -1) {
                                                effect = -1;
                                            }
                                        } else if (trigger.targets && trigger.targets.length) {
                                            for (var i = 0; i < trigger.targets.length; i++) {
                                                effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                            }
                                        }
                                        if (effect < 0) return '令此牌失效';
                                        return 'cancel2';
                                    });
                            } else {
                                player
                                    .chooseControl(listx)
                                    .set('choiceList', list)
                                    .set('prompt', prompt)
                                    .set('ai', function (bot) {
                                        if (list.includes('选项一')) return '选项一';
                                        if (list.includes('选项二')) return '选项二';
                                        if (list.includes('选项四')) return '选项四';
                                        if (list.includes('选项三')) return '选项三';
                                        var effect = 0;
                                        if (trigger.card.name == 'wuxie') {
                                            if (get.attitude(player, trigger.player) < -1) {
                                                effect = -1;
                                            }
                                        } else if (trigger.targets && trigger.targets.length) {
                                            for (var i = 0; i < trigger.targets.length; i++) {
                                                effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                            }
                                        }
                                        if (list.includes('选项五') && effect < 0) return '选项五';
                                        return 'cancel2';
                                    });
                            }
                            break;
                        case 'equip':
                            if (player.storage.ls_huachou[3] > 1) {
                                player.chooseTarget('花愁:是否对一名其他角色造成一点伤害？', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                            } else {
                                player.chooseToDiscard('h', '花愁:是否弃置一张手牌并对' + get.translation(_status.currentPhase) + '造成1点伤害？').set('ai', function (card) {
                                    return 7 - get.value(card) && get.damageEffect(_status.currentPhase, player, player) > 0;
                                });
                            }
                            break;
                    }
                    ('step 1');
                    if ((result.bool && get.type2(trigger.card) != 'trick') || (result.control != 'cancel2' && get.type2(trigger.card) == 'trick')) {
                        switch (get.type2(trigger.card)) {
                            case 'basic':
                                player.addTempSkill('ls_huachou_b');
                                if (player.storage.ls_huachou[1] > 1) {
                                    player.$gain2(trigger.cards);
                                    player.gain(trigger.cards);
                                } else {
                                    player.respond(result.cards, 'highlight', 'noOrdering');
                                    player.$gain2(trigger.cards);
                                    player.gain(trigger.cards);
                                    trigger.cards = result.cards;
                                }
                                break;
                            case 'trick':
                                player.addTempSkill('ls_huachou_t');
                                if (result.control != 'cancel2') {
                                    if (result.control == '选项一') {
                                        player.storage.ls_huachou[0]++;
                                    }
                                    if (result.control == '选项二') {
                                        player.storage.ls_huachou[1]++;
                                    }
                                    if (result.control == '选项三') {
                                        player.storage.ls_huachou[2]++;
                                    }
                                    if (result.control == '选项四') {
                                        player.storage.ls_huachou[3]++;
                                    }
                                    if (result.control == '令此牌失效' || result.control == '选项五') {
                                        trigger.targets.length = 0;
                                        trigger.all_excluded = true;
                                    }
                                }
                                break;
                            case 'equip':
                                player.addTempSkill('ls_huachou_e');
                                if (player.storage.ls_huachou[3] > 1) {
                                    result.targets[0].damage();
                                } else if (_status.currentPhase) {
                                    //QQQ
                                    _status.currentPhase.damage();
                                }
                                break;
                        }
                    }
                },
                subSkill: {
                    b: {
                        charlotte: true,
                    },
                    t: {
                        charlotte: true,
                    },
                    e: {
                        charlotte: true,
                    },
                },
            },
            ls_ziya: {
                forced: true,
                trigger: {
                    global: 'roundStart',
                },
                filter(event, player) {
                    return player.countCards('h') < player.getHandcardLimit();
                },
                content() {
                    player.draw(player.getHandcardLimit() - player.countCards('h'));
                },
                group: ['ls_ziya_use', 'ls_ziya_dying'],
                mod: {
                    maxHandcardBase(player) {
                        return player.getDamagedHp();
                    },
                },
                subSkill: {
                    use: {
                        forced: true,
                        trigger: {
                            global: 'phaseUseBegin',
                        },
                        filter(event, player) {
                            return player.countCards('h') > event.player.countCards('h');
                        },
                        content() {
                            'step 0';
                            player.chooseCard('he', true, '交给' + get.translation(trigger.player) + '一张牌');
                            ('step 1');
                            player.give(result.cards, trigger.player);
                            player.gainMaxHp();
                        },
                    },
                    dying: {
                        forced: true,
                        trigger: {
                            player: 'dying',
                        },
                        filter(event, player) {
                            return player.maxHp > 2 && player.hp < 1;
                        },
                        content() {
                            player.loseMaxHp(2);
                            player.recover(1 - player.hp);
                        },
                    },
                },
            },
            ls_zhengrong: {
                trigger: {
                    player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                },
                init(player, skill) {
                    player.storage[skill] = [];
                },
                forced: true,
                filter(event, player) {
                    var list = [];
                    for (var name of lib.inpile) {
                        var type = get.type(name);
                        if (type != 'basic' && type != 'trick') continue;
                        var card = { name: name };
                        if (player.hasUseTarget(card) && !player.storage.ls_zhengrong.includes(name)) {
                            list.push([type, '', name]);
                        }
                        if (name == 'sha') {
                            for (var i of lib.inpile_nature) {
                                card.nature = i;
                                if (player.hasUseTarget(card) && !player.storage.ls_zhengrong.includes(name)) list.push([type, '', name, i]);
                            }
                        }
                    }
                    return list.length;
                },
                content() {
                    'step 0';
                    var list = [];
                    for (var name of lib.inpile) {
                        var type = get.type(name);
                        if (type != 'basic' && type != 'trick') continue;
                        var card = { name: name };
                        if (player.hasUseTarget(card) && !player.storage.ls_zhengrong.includes(name)) {
                            list.push([type, '', name]);
                        }
                        if (name == 'sha') {
                            for (var i of lib.inpile_nature) {
                                card.nature = i;
                                if (player.hasUseTarget(card) && !player.storage.ls_zhengrong.includes(name)) list.push([type, '', name, i]);
                            }
                        }
                    }
                    if (list.length) {
                        player
                            .chooseButton(['是否视为使用一张牌？', [list, 'vcard']])
                            .set('forced', true)
                            .set('ai', function (button) {
                                return _status.event.player.getUseValue({ name: button.link[2] });
                            });
                    }
                    ('step 1');
                    if (result.bool) {
                        player.storage.ls_zhengrong.push(result.links[0][2]);
                        player.chooseUseTarget({ name: result.links[0][2], nature: result.links[0][3] }, true, false);
                    } else event.finish();
                },
                group: ['ls_zhengrong_draw'],
                subSkill: {
                    draw: {
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        filter(event, player) {
                            var cardx = Array.from(ui.discardPile.childNodes),
                                cards = Array.from(ui.cardPile.childNodes);
                            var lista = [],
                                listb = [];
                            for (var i of cardx) {
                                if (i.name == event.card.name) lista.push(i);
                            }
                            for (var i of cards) {
                                if (i.name == event.card.name) listb.push(i);
                            }
                            return (lista.length < 1 || listb.length < 1) && get.type(event.card) != 'equip';
                        },
                        content() {
                            player.chooseDrawRecover(2, true, function (event, player) {
                                return 'draw_card';
                            });
                        },
                    },
                },
            },
            ls_fugui: {
                audio: 'ext:裸睡天依:2',
                nobracket: true,
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    if (get.tag(event.card, 'damage') > 0) return false;
                    return (
                        player.getHistory('useSkill', function (evt) {
                            return evt.skill == 'ls_fugui';
                        }).length <= Math.max(1, player.getDamagedHp())
                    );
                },
                content() {
                    'step 0';
                    var next = player.judge(function (card) {
                        if (get.type2(card) != get.type2(trigger.card)) return 1;
                        return -1;
                    });
                    next.judge2 = function (result) {
                        return result.bool;
                    };
                    ('step 1');
                    if (result.bool) {
                        player.gain(result.card, 'gain2');
                    }
                },
            },
            ls_duocai: {
                audio: 'ext:裸睡天依:2',
                nobracket: true,
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                filter(event, player) {
                    var num = player.getHistory('useSkill', function (evt) {
                        return evt.skill == 'ls_duocai';
                    }).length;
                    if (num >= Math.max(1, player.getDamagedHp())) return false;
                    if (event.getParent(3).name == 'ls_duocai') return false;
                    var evt = event.getParent('phaseDraw');
                    if (evt && evt.player == player) return false;
                    return event.getg(player).length;
                },
                check(event, player) {
                    var cards = event.getg(player),
                        eff = 0;
                    for (var i of cards) {
                        eff += 1 - player.getUseValue(i);
                    }
                    for (var i of lib.suit) {
                        for (var j of cards) {
                            if (j.suit == i) {
                                switch (i) {
                                    case 'heart':
                                        eff += player.getUseValue('dongzhuxianji');
                                        break;
                                    case 'diamond':
                                        eff += player.getUseValue('chuqibuyi');
                                        break;
                                    case 'spade':
                                        eff += player.getUseValue('shuiyanqijunx');
                                        break;
                                    case 'club':
                                        eff += player.getUseValue('zhujinqiyuan');
                                        break;
                                }
                                break;
                            }
                        }
                    }
                    return eff > 0;
                },
                content() {
                    'step 0';
                    var cards = trigger.getg(player);
                    player.recast(cards);
                    ('step 1');
                    var cards = trigger.getg(player);
                    var list = [];
                    for (var i of lib.suit) {
                        for (var j of cards) {
                            if (j.suit == i) {
                                switch (i) {
                                    case 'heart':
                                        list.push(['锦囊', '', 'dongzhuxianji']);
                                        break;
                                    case 'diamond':
                                        list.push(['锦囊', '', 'chuqibuyi']);
                                        break;
                                    case 'spade':
                                        list.push(['锦囊', '', 'shuiyanqijunx']);
                                        break;
                                    case 'club':
                                        list.push(['锦囊', '', 'zhujinqiyuan']);
                                        break;
                                }
                                break;
                            }
                        }
                    }
                    event.list = list;
                    ('step 2');
                    if (event.list.length) {
                        if (event.list.length > 1) {
                            player
                                .chooseButton(['多财善贾:视为使用一张牌', [event.list, 'vcard']])
                                .set('forced', true)
                                .set('ai', function (button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                });
                        } else {
                            event._result = {
                                bool: true,
                                links: event.list,
                            };
                        }
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        var cardx = result.links[0];
                        event.list = event.list.filter((item) => item != cardx);
                        var card = { name: result.links[0][2] };
                        if (player.hasUseTarget(card)) {
                            player.chooseUseTarget(card, true, false);
                        }
                        event.goto(2);
                    }
                },
            },
            ls_lingdong: {
                trigger: {
                    player: 'useCard',
                },
                lastDo: true,
                forced: true,
                init(player, skill) {
                    player.storage[skill] = [];
                },
                suyuan() {
                    'step 0';
                    game.log(player, '使用了', '#g【溯源】');
                    var list = [];
                    for (var name of lib.inpile) {
                        var type = get.type(name);
                        if (type != 'basic' && type != 'trick') continue;
                        var card = { name: name, storage: { yingshan: true } };
                        if (get.tag(card, 'damage') > 0 && player.canUse(card, target, false)) {
                            list.push([type, '', name]);
                        }
                        if (name == 'sha') {
                            for (var i of lib.inpile_nature) {
                                card.nature = i;
                                if (player.canUse(card, target, false)) list.push([type, '', name, i]);
                            }
                        }
                    }
                    if (list.length) {
                        player.chooseButton(['是否视为使用一张重攻击牌？', [list, 'vcard']]).set('ai', function (button) {
                            return _status.event.player.getUseValue({ name: button.link[2] });
                        });
                    } else event.finish();
                    ('step 1');
                    if (result.bool) {
                        player.useCard({ name: result.links[0][2], nature: result.links[0][3], storage: { yingshan: true } }, target, false);
                    } else event.finish();
                },
                content() {
                    'step 0';
                    if (Math.random() > 0.75) {
                        game.log(player, '使用了', '#g【虚像】');
                        trigger.effectCount++;
                    }
                    var attack = lib.skill.ls_lingdong_mark.attack(trigger.card);
                    player.storage.ls_lingdong.push(attack);
                    if (attack == 'other' && player != _status.currentPhase && Math.random() > 0.25) {
                        var next = game.createEvent('suyuan');
                        next.player = player;
                        next.target = _status.currentPhase;
                        next.setContent(lib.skill.ls_lingdong.suyuan);
                    }
                    ('step 1');
                    if (player.storage.ls_lingdong.length > 1 && lib.skill.ls_lingdong_mark.attack(trigger.card) == 'other') {
                        game.log(player, '使用', '#g【闪避】', '打断了技能释放');
                        player.storage.ls_lingdong = [];
                        event.finish();
                    } else {
                        var skilld = lib.skill.ls_lingdong.uskill(player);
                        if (skilld != false) {
                            if (skilld.length > 1) {
                                player.chooseControl(skilld);
                            } else {
                                event._result = {
                                    control: skilld[0],
                                };
                            }
                        } else {
                            if (player.storage.ls_lingdong.length > 4) {
                                game.log(player, '未成功使用技能,已重置');
                                player.storage.ls_lingdong = [];
                            }
                            event.finish();
                        }
                    }
                    ('step 2');
                    if (result.control) {
                        game.log(player, '使用了', '#g' + result.control);
                        switch (result.control) {
                            case '【激发】':
                                player.addSkill('ls_lingdong_fly');
                                for (var i of trigger.targets) {
                                    if (i != player) i.addSkill('ls_lingdong_jifei');
                                }
                                break;
                            case '【冲击】':
                                player.addTempSkill('ls_lingdong_daluo', { player: 'useCardAfter' });
                                player.removeSkill('ls_lingdong_fly');
                                break;
                            case '【迭影】':
                                if (player.hasSkill('ls_lingdong_fly')) {
                                    player.addTempSkill('ls_lingdong_daluo', { player: 'useCardAfter' });
                                }
                                player.addTempSkill('ls_lingdong_dieying', { player: 'useCardAfter' });
                                player.storage.ls_lingdong_dieying.push(trigger.card);
                                if (player.hasSkill('ls_lingdong_fly')) {
                                    // 【迭影】可以在地面获得,所以这里需要区分空中、地面
                                    player.removeSkill('ls_lingdong_fly');
                                }
                                break;
                            case '【扰动】':
                                player.useCard({ name: trigger.card.name, nature: trigger.card.nature, storage: { yingshan: true } }, trigger.targets, false);
                                if (player.hasSkill('ls_lingdong_fly')) {
                                    // 【扰动】可以在地面获得,所以这里需要区分空中、地面
                                    player.removeSkill('ls_lingdong_fly');
                                }
                                break;
                            case '【反吹】':
                                trigger.directHit.addArray(game.players);
                                player.removeSkill('ls_lingdong_fly');
                                break;
                            case '【荡涤】':
                                var targets = game.filterPlayer((c) => player.inRange(c));
                                trigger.targets.length = 0;
                                trigger.targets.addArray(targets);
                                if (player.hasSkill('ls_lingdong_fly')) {
                                    // 【荡涤】可以在地面获得,所以这里需要区分空中、地面
                                    player.removeSkill('ls_lingdong_fly');
                                }
                                break;
                            case '【磁阱】':
                                player.addSkill('ls_lingdong_cijing');
                                player.storage.ls_lingdong_cijing.push(trigger.card);
                                break;
                            case '【震荡】':
                                for (var i of trigger.targets) {
                                    if (i != player) i.addSkill('ls_lingdong_jifei');
                                }
                                break;
                            case '【流场】':
                                for (var i of trigger.targets) {
                                    if (i != player) i.addSkill('ls_lingdong_jifei');
                                }
                                if (player.hasSkill('ls_lingdong_fly')) {
                                    player.addTempSkill('ls_lingdong_daluo', { player: 'useCardAfter' });
                                    trigger.parent.baseDamage++;
                                }
                                if (player.countMark('ls_yingshan') > 0) {
                                    var num = player.countMark('ls_yingshan');
                                    player.removeMark('ls_yingshan', num);
                                    trigger.effectCount += num;
                                }
                                break;
                            case '【凝滞】':
                                for (var i of trigger.targets) {
                                    if (i.hasSkill('ls_lingdong_jifei')) {
                                        i.storage.ls_lingdong_jifei++;
                                    } else {
                                        if (i != player) i.addSkill('ls_lingdong_jifei');
                                    }
                                }
                                break;
                        }
                        if (result.control != '【流场】' && (player.storage.ls_lingdong[player.storage.ls_lingdong.length - 1] == 'light' || player.storage.ls_lingdong[player.storage.ls_lingdong.length - 1] == 'shadow')) {
                            game.log(player, '使用了', '#g【流场】');
                            for (var i of trigger.targets) {
                                if (i != player) i.addSkill('ls_lingdong_jifei');
                            }
                            if (player.hasSkill('ls_lingdong_fly')) {
                                player.addTempSkill('ls_lingdong_daluo', { player: 'useCardAfter' });
                                trigger.parent.baseDamage++;
                            }
                            if (player.countMark('ls_yingshan') > 0) {
                                var num = player.countMark('ls_yingshan');
                                player.removeMark('ls_yingshan', num);
                                trigger.effectCount += num;
                            }
                        }
                        player.storage.ls_lingdong = [];
                    } else {
                        event.finish();
                    }
                },
                uskill(player) {
                    var list = player.storage.ls_lingdong,
                        a = 'light',
                        b = 'heavy',
                        c = 'other',
                        d = 'shadow',
                        skills = [];
                    if (player.hasSkill('ls_lingdong_fly')) {
                        if ((list[0] == a || list[0] == d) && (list[1] == b || list[1] == d)) skills.push('【冲击】');
                        if ((list[0] == b || list[0] == d) && (list[1] == b || list[1] == d) && (list[2] == b || list[2] == d)) skills.push('【荡涤】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == a || list[3] == d) && (list[4] == a || list[4] == d)) skills.push('【扰动】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == b || list[3] == d)) skills.push('【反吹】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == b || list[3] == d) && (list[4] == b || list[4] == d)) skills.push('【迭影】');
                        if ((list[0] == b || list[0] == d) && (list[1] == b || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == a || list[3] == d) && (list[4] == a || list[4] == d)) skills.push('【流场】');
                    } else {
                        if ((list[0] == a || list[0] == d) && (list[1] == b || list[1] == d)) skills.push('【震荡】');
                        if (list[0] == c && (list[1] == a || list[1] == d)) skills.push('【激发】');
                        if (list[0] == c && (list[1] == b || list[1] == d)) skills.push('【凝滞】');
                        if ((list[0] == b || list[0] == d) && (list[1] == b || list[1] == d) && (list[2] == b || list[2] == d)) skills.push('【荡涤】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == a || list[3] == d) && (list[4] == a || list[4] == d)) skills.push('【扰动】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == a || list[3] == d) && (list[4] == b || list[4] == d)) skills.push('【震颤】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == b || list[3] == d) && (list[4] == b || list[4] == d)) skills.push('【迭影】');
                        if ((list[0] == a || list[0] == d) && (list[1] == a || list[1] == d) && (list[2] == b || list[2] == d) && (list[3] == b || list[3] == d) && (list[4] == b || list[4] == d)) skills.push('【磁阱】');
                        if ((list[0] == b || list[0] == d) && (list[1] == b || list[1] == d) && (list[2] == a || list[2] == d) && (list[3] == a || list[3] == d) && (list[4] == a || list[4] == d)) skills.push('【流场】');
                    }
                    if (skills.length) return skills;
                    return false;
                },
                mod: {
                    cardUsable(card, player) {
                        if (player.storage.ls_lingdong.length == 0) return;
                        var evt = player.getLastUsed();
                        if ((evt && evt.card && lib.skill.ls_lingdong_mark.attack(card) == lib.skill.ls_lingdong_mark.attack(evt.card)) || player.storage.ls_lingdong[player.storage.ls_lingdong.length - 1] == 'shadow') return Infinity;
                    },
                },
                group: ['ls_lingdong_mark', 'ls_lingdong_draw', 'ls_lingdong_dangdi', 'ls_lingdong_kill'],
                subSkill: {
                    kill: {
                        audio: 2,
                        trigger: {
                            source: 'dieAfter',
                        },
                        forced: true,
                        content() {
                            game.log(player, '使用了', '#g【耦合】');
                            player.recover();
                            player.addMark('ls_yingshan', 2);
                        },
                    },
                    dangdi: {
                        forced: true,
                        mod: {
                            globalFrom(from, to, distance) {
                                if (from.storage.ls_lingdong[0] != 'heavy' || from.storage.ls_lingdong.length > 3) return;
                                return distance - 1;
                            },
                            attackRange(player, distance) {
                                if (player.storage.ls_lingdong[1] != 'heavy' || player.storage.ls_lingdong.length > 3) return;
                                return distance + 1;
                            },
                        },
                    },
                    cijing: {
                        audio: 2,
                        trigger: {
                            player: 'useCardAfter',
                        },
                        init(player, skill) {
                            player.storage[skill] = [];
                        },
                        onremove(player, skill) {
                            delete player.storage[skill];
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && ((player.storage.ls_lingdong_cijing && player.storage.ls_lingdong_cijing.includes(event.card)) || (event.card.storage && event.card.storage.cijing));
                        },
                        content() {
                            if (
                                !player.getHistory('sourceDamage', function (evt) {
                                    return evt.card == trigger.card;
                                }).length
                            ) {
                                var cards = trigger.cards.filterInD();
                                if (trigger.card.storage && trigger.card.storage.cijing) {
                                    player.useCard({ name: trigger.card.name, storage: { yingshan: true, cijingx: true } }, trigger.targets, false, cards);
                                } else player.useCard({ name: trigger.card.name, storage: { yingshan: true, cijing: true } }, trigger.targets, false, cards);
                            } else {
                                player.removeSkill('ls_lingdong_cijing');
                            }
                        },
                        group: ['ls_lingdong_cijingd'],
                    },
                    cijingd: {
                        trigger: {
                            source: 'damageSource',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && ((player.storage.ls_lingdong_cijing && player.storage.ls_lingdong_cijing.includes(event.card)) || (event.card.storage && (event.card.storage.cijing || event.card.storage.cijingx)));
                        },
                        content() {
                            var targets = game.filterPlayer((c) => c != player && get.distance(c, trigger.player) <= 1);
                            for (var i of targets) {
                                i.damage();
                            }
                        },
                    },
                    dieying: {
                        trigger: {
                            source: 'damageSource',
                        },
                        init(player, skill) {
                            player.storage[skill] = [];
                        },
                        forced: true,
                        filter(event, player) {
                            return event.card && player.storage.ls_lingdong_dieying.includes(event.card);
                        },
                        content() {
                            trigger.player.damage(player, trigger.nature, trigger.num);
                        },
                    },
                    fly: {
                        forced: true,
                        charlotte: true,
                        mark: true,
                        marktext: '空',
                        intro: {
                            content: '进入空状态,部分技能改变',
                        },
                    },
                    daluo: {
                        trigger: {
                            source: 'damageSource',
                        },
                        firstDo: true,
                        forced: true,
                        filter(event, player) {
                            return event.player.hasSkill('ls_lingdong_jifei') && event.player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            game.log(trigger.player, '被', player, '击落了');
                            ('step 1');
                            player.discardPlayerCard(trigger.player, 'he', true).set('prompt', get.translation(player) + '击落了' + get.translation(trigger.player) + ',弃置其一张牌');
                            ('step 2');
                            trigger.player.removeSkill('ls_lingdong_jifei');
                        },
                    },
                    jifei: {
                        init(player, skill) {
                            player.storage[skill] = 1;
                        },
                        trigger: {
                            player: 'useCard',
                        },
                        forced: true,
                        charlotte: true,
                        mark: true,
                        marktext: '击飞',
                        intro: {
                            content: '进入击飞状态,使用牌失效',
                        },
                        content() {
                            'step 0';
                            var targets = trigger.targets;
                            if (trigger.targets) {
                                game.log(trigger.player, '被击飞了,使用【' + get.translation(trigger.card.name) + '】失效');
                                trigger.targets.removeArray(targets);
                            }
                            if (trigger.parent.triggeredTargets1) {
                                game.log(trigger.player, '被击飞了,使用【' + get.translation(trigger.parent.triggeredTargets1.card.name) + '】失效');
                                trigger.parent.triggeredTargets1.removeArray(targets);
                            }
                            ('step 1');
                            if (player.storage.ls_lingdong_jifei > 1) {
                                player.storage.ls_lingdong_jifei--;
                            } else {
                                player.removeSkill('ls_lingdong_jifei');
                            }
                        },
                    },
                    draw: {
                        trigger: {
                            player: 'useCard',
                        },
                        filter(event, player) {
                            if (player.storage.ls_lingdong.length == 0) return false;
                            var evt = player.getLastUsed(1);
                            return (evt && evt.card && lib.skill.ls_lingdong_mark.attack(event.card) != lib.skill.ls_lingdong_mark.attack(evt.card)) || player.storage.ls_lingdong[player.storage.ls_lingdong.length - 1] == 'shadow';
                        },
                        forced: true,
                        content() {
                            player.draw();
                        },
                    },
                    mark: {
                        forced: true,
                        popup: false,
                        trigger: {
                            player: ['gainAfter', 'enterGame'],
                            global: ['loseAsyncAfter', 'phaseBefore'],
                        },
                        filter(event, player) {
                            if (event.name == 'lose' || event.name == 'gain') return event.getg(player).length;
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        init(player, skill) {
                            player.markSkill([skill]);
                        },
                        marktext: '灵动',
                        intro: {
                            content() {
                                var player = _status.event.player;
                                if (!player.storage.ls_lingdong || player.storage.ls_lingdong.length == 0) return '无记录';
                                var str = '当前行动次序为(A轻 B重 C闪 D影):';
                                for (var i = 0; i < player.storage.ls_lingdong.length; i++) {
                                    var eff = player.storage.ls_lingdong[i];
                                    var result = eff == 'heavy' ? 'B' : eff == 'shadow' ? 'D' : eff == 'light' ? 'A' : 'C';
                                    str += result;
                                    if (i != player.storage.ls_lingdong.length - 1) {
                                        str += ',';
                                    }
                                }
                                return str;
                            },
                        },
                        attack(card) {
                            if (get.tag(card, 'damage') > 0) return 'heavy';
                            var info = lib.card[card.name];
                            if (info.notarget) return 'other';
                            if (info.selectTarget != undefined) {
                                if (!info.toself) {
                                    return 'light';
                                } else {
                                    if (get.cardtag(card, 'gifts') || card.name == 'tao') return 'light';
                                    return 'other';
                                }
                            }
                            return 'other';
                        },
                        content() {
                            for (var i of player.getCards('h')) {
                                switch (lib.skill.ls_lingdong_mark.attack(i)) {
                                    case 'heavy':
                                        i.addGaintag('重攻击');
                                        break;
                                    case 'light':
                                        i.addGaintag('轻攻击');
                                        break;
                                    case 'other':
                                        i.addGaintag('闪避');
                                        break;
                                }
                            }
                        },
                    },
                },
            },
            ls_xunying: {
                trigger: {
                    player: 'useCardAfter',
                },
                lastDo: true,
                forced: true,
                filter(event, player) {
                    if (event.card.storage && event.card.storage.yingshan) return false;
                    return lib.skill.ls_lingdong_mark.attack(event.card) == 'other';
                },
                content() {
                    if (!player.hasSkill('ls_xunying_mark')) {
                        player.addTempSkill('ls_xunying_mark');
                    } else if (player.countMark('ls_yingshan') < 5) {
                        player.addMark('ls_yingshan', 1);
                    }
                },
                subSkill: {
                    mark: {
                        trigger: {
                            target: 'useCardToTargeted',
                        },
                        mark: true,
                        marktext: '虚影',
                        intro: {
                            name: '虚影',
                            name2: '虚影',
                            content: '免疫其他角色对你使用的下一张牌',
                        },
                        onremove(player, skill) {
                            var event = _status.event;
                            if (event.parent && event.parent.name == 'phaseLoop' && player.countMark('ls_yingshan') < 5) {
                                player.addMark('ls_yingshan', 1);
                            }
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player) {
                            return event.player != player && event.card;
                        },
                        content() {
                            trigger.parent.excluded.add(player);
                            game.log(player, '的虚影消失了');
                            player.removeSkill('ls_xunying_mark');
                        },
                    },
                },
            },
            ls_yingshan: {
                marktext: '能量',
                intro: {
                    name: '能量',
                    name2: '能量',
                    content: 'mark',
                },
                audio: 'ext:裸睡天依:2',
                enable: ['chooseToRespond', 'chooseToUse'],
                filterCard: () => false,
                selectCard: -1,
                viewAs: {
                    name: 'shan',
                    storage: {
                        yingshan: true,
                    },
                },
                viewAsFilter(player) {
                    if (!player.hasMark('ls_yingshan')) return false;
                },
                prompt: '消耗1点能量,视为使用或打出一张【闪】',
                precontent() {
                    player.removeMark('ls_yingshan', 1);
                },
                check() {
                    return 1;
                },
                group: ['ls_yingshan_ying'],
                subSkill: {
                    ying: {
                        enable: 'phaseUse',
                        filter(event, player) {
                            if (!player.hasMark('ls_yingshan')) return false;
                            return true;
                        },
                        content() {
                            player.removeMark('ls_yingshan', 1);
                            if (player.storage.ls_lingdong) {
                                player.storage.ls_lingdong.push('shadow');
                            }
                            player.draw();
                        },
                    },
                },
                ai: {
                    order: 3,
                    respondShan: true,
                    skillTagFilter(player) {
                        if (!player.hasMark('ls_yingshan')) return false;
                    },
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'respondShan') && current < 0) return 0.6;
                        },
                    },
                    basic: {
                        useful: [7, 5.1, 2],
                        value: [7, 5.1, 2],
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            Is_duoshi: {
                markText: '势',
                intro: {
                    markcount: 'expansion',
                    content: 'expansion',
                },
                trigger: {
                    target: 'useCardToPlayered',
                },
                init(player) {
                    player.storage.usable = [];
                    player.storage.Ucards = [];
                    player.storage.Utargets = [];
                },
                filter(evt, player) {
                    if (player.storage.usable.length >= 2) return false; //每回合最多发动3次,所以>=2
                    if (_status.currentPhase == player || evt.player == player) return false;
                    if (!evt.card) return false;
                    return evt.targets && evt.targets.length == 1;
                },
                group: ['Is_duoshi_reset', 'Is_duoshi_phaseUsex', 'Is_duoshi_useCard'],
                content() {
                    'step 0';
                    //player.storage.t=trigger;
                    var list = ['[知己知彼]:你观看一名角色的手牌并获得红色牌', '[诱敌深入]:你弃置一张牌抵消此牌,目标可对你出实体杀直到对你造成伤害,否则你对目标造成伤害', '[静待良机]:你摸一张牌令此牌无效,置于你武将牌上.目标下个回合出牌阶段开始时对你使用此牌(若可以使用)'];
                    event.list = list;
                    event.forced = true; //用于强制结束
                    //移除重复的选择
                    if (player.storage.usable.includes(list[0])) event.list.remove(list[0]);
                    if (player.storage.usable.includes(list[1])) event.list.remove(list[1]);
                    //如果选了诱敌深入的同时触发了度策,则不能选3
                    if (player.storage.event_3 || player.storage.usable.includes(list[2])) {
                        event.list.remove(list[2]);
                    }
                    //同一事件触发2或3就互相不可选
                    if (event.info && (event.info.includes('[静待良机]') || event.info.includes('[诱敌深入]'))) {
                        event.list.remove(list[1]);
                        event.list.remove(list[2]);
                    }
                    player.chooseControl('cancel2').set('prompt', '请从下列选项选择一项发动之').set('choiceList', event.list);
                    ('step 1');
                    if (result.control != 'cancel2') {
                        //保存选项
                        event.info = event.list[result.index];
                        player.storage.usable.push(event.info);
                        //判断选项
                        if (event.info.includes('[知己知彼]')) {
                            //发动知己知彼
                            player
                                .chooseTarget(false, 1)
                                .set('prompt', '请选择一名其他角色,观看其手牌并获得其一张红色牌')
                                .set('filterTarget', (card, player, target) => {
                                    return player != target && target.getCards('h').length;
                                });
                        } else if (event.info.includes('[诱敌深入]')) {
                            //发动诱敌深入
                            player.chooseToDiscard(1, 'he').set('prompt', '弃置一张牌抵消' + get.translation(trigger.cards) + '的效果');
                        } else if (event.info.includes('[静待良机]')) {
                            //发动静待良机
                            player.draw();
                            trigger.player.addSkill('Is_cangqi_attackSource');
                            trigger.parent.excluded.add(player);
                            player.addToExpansion('giveAuto', trigger.cards[0], trigger.player).gaintag.add('Is_duoshi');
                            player.storage.Ucards.push(trigger.cards[0]);
                            player.storage.Utargets.push(trigger.player);
                        } else {
                            //不知道选了什么,直接结束
                            event.forced = false;
                            event.goto(3);
                        }
                    } else {
                        //选了返回,直接结束
                        event.forced = false;
                        event.goto(3);
                    }
                    ('step 2');
                    if (event.info.includes('[知己知彼]')) {
                        //知己知彼效果
                        if (result.targets) {
                            //如果知己知彼选择了角色
                            player.popup('知己知彼');
                            trigger.player.link(true);
                            var next = game.createEvent('give');
                            next.player = player;
                            next._trigger = trigger.player;
                            next.setContent(function () {
                                'step 0';
                                var targets = trigger; //观看选择红色牌
                                player.chooseCardButton(targets, targets.getCards('h')).set('ai', function (button) {
                                    return get.value(button.link);
                                }).filterButton = function (button) {
                                    return get.color(button.link) == 'red';
                                };
                                ('step 1');
                                //获得
                                player.gain(result.links[0], targets);
                            });
                        }
                    } else if (event.info.includes('[诱敌深入]')) {
                        //诱敌深入效果
                        if (result.cards) {
                            //如果诱敌深入弃置了牌
                            player.popup('诱敌深入');
                            trigger.player.link(true);
                            trigger.excluded.add(player);
                            player.storage.event_3 = true;
                            //出杀开始前的准备工作
                            trigger.player.storage.attackTrue = false;
                            player.line(trigger.player);
                            player.addSkill('Is_cangqi_attackPlayer');
                            trigger.player.addSkill('Is_cangqi_attackSource');
                            event.goto(4);
                        }
                    } else if (event.info.includes('[静待良机]')) {
                        //静待良机效果
                        player.popup('静待良机');
                        trigger.parent.excluded.add(player);
                        trigger.player.addSkill('Is_cangqi_attackSource');
                        trigger.player.link(true);
                    }
                    ('step 3');
                    //这一步用来判断,以及一些清理工作
                    if (player.getDamagedHp() >= 3 && event.forced && player.storage.usable.length < 2) {
                        //如果已损坏体力大于等于3可再次发动并且之前没有取消并且还能选择(同一事件最多2次)
                        event.goto(0);
                    } else {
                        delete player.storage.event_3;
                        event.finish();
                    }
                    //清理可能未移除的子技能
                    for (var pl of game.players) {
                        if (pl.hasSkill('Is_cangqi_attackPlayer')) pl.removeSkill('Is_cangqi_attackPlayer');
                        if (pl.hasSkill('Is_cangqi_attackSource')) pl.removeSkill('Is_cangqi_attackSource');
                        if (pl.storage.attackTrue) delete pl.storage.attackTrue;
                    }
                    ('step 4');
                    //诱敌深入出杀环节
                    if (trigger.player.storage.attackTrue) {
                        //你受到伤害
                        delete trigger.player.storage.attackTrue;
                        event.goto(3);
                    } else {
                        //没有受到伤害,视情况继续出杀
                        if (event.notUse == true) {
                            //对方不出杀了或没杀
                            trigger.player.damage(player);
                            event.goto(3);
                        } else if (!trigger.player.storage.attackTrue) {
                            //有杀,选择出不出
                            trigger.player
                                .chooseCard(1, false)
                                .set('prompt', '选择是否对' + get.translation(player) + '使用杀(无距离限制)')
                                .set('filterCard', (card) => {
                                    return card.name == 'sha';
                                })
                                .set('ai', function () {
                                    return -get.attitude(trigger.player, player);
                                });
                        }
                    }
                    ('step 5');
                    if (result.bool) {
                        //如果用了杀
                        trigger.player.addSkill('Is_cangqi_attackSource');
                        trigger.player.useCard(result.cards, player);
                    } else {
                        //没用杀
                        event.notUse = true;
                    }
                    event.goto(4);
                },
                subSkill: {
                    useCard: {
                        forced: true,
                        trigger: {
                            global: 'phaseUseBegin',
                        },
                        filter(evt, player) {
                            if (evt.player == player) return false;
                            for (var target of player.storage.Utargets) {
                                if (evt.player == target) return true;
                            }
                            return false;
                        },
                        content() {
                            for (var i in player.storage.Utargets) {
                                if (player.storage.Utargets[i] != trigger.player) continue;
                                var hisCard = player.storage.Ucards[i];
                                var him = player.storage.Utargets[i];
                                if (him.canUse(hisCard, player, true)) {
                                    him.useCard(hisCard, player);
                                    player.storage.Ucards.remove(hisCard);
                                    player.storage.Utargets.remove(him);
                                }
                            }
                        },
                    },
                    reset: {
                        charlotte: true,
                        forced: true,
                        firstDo: true,
                        trigger: {
                            global: 'phaseEnd',
                        },
                        content() {
                            player.storage.usable = [];
                        },
                    },
                    phaseUsex: {
                        enable: 'phaseUse',
                        usable: 1,
                        filterTarget(card, player, target) {
                            return player != target;
                        },
                        selectTarget() {
                            var player = _status.currentPhase;
                            //不然[0,1]
                            return [0, 1];
                        },
                        filter(evt, player) {
                            if (player.getStat('skill').Is_duoshi_phaseUsex > 0 && player.maxHp - player.hp >= 3)
                                //只有已损失体力大于或等于3才能发动第二次
                                return false;
                            return true;
                        },
                        prompt() {
                            //根据选择过的选项调整弹出信息
                            var player = _status.currentPhase;
                            for (var info of player.storage.usable) {
                                if (info.includes('[知己知彼]')) return '选择一名角色发动[诱敌深入](选择的目标可对你使用实体杀,直到对你造成伤害,否则你对目标角色造成伤害)或不选择目标发动[静待良机](摸一张牌).';
                                if (info.includes('[诱敌深入]')) return '选择一名角色发动[知己知彼](观看选择的目标的手牌并获得红色牌),或不选择目标发动[静待良机](摸一张牌).';
                                if (info.includes('[静待良机]')) return '选择一名角色发动①[知己知彼](观看选择的目标的手牌并获得其中一张红色牌);②[诱敌深入](选择的目标可对你出实体杀直到对你造成伤害,否则你对目标造成伤害)中的一项';
                            }
                            return '若你选择了目标,则选择发动①[知己知彼](观看选择的目标的手牌并获得红色牌);②[诱敌深入](选择的目标可对你出实体杀直到对你造成伤害,否则你对目标造成伤害)中的一项,否则你发动[静待良机]摸一张牌.';
                        },
                        content() {
                            'step 0';
                            var list = ['[知己知彼]:你观看' + get.translation(targets[0]) + '的手牌并获得其一张红色牌', '[诱敌深入]:' + get.translation(targets[0]) + '可对你出实体杀直到对你造成伤害,否则你对目标造成伤害', '[静待良机]:摸一张牌,' + get.translation(targets[0]) + "对你使用'势'"];
                            event.list = list;
                            //移除选择过的选项
                            for (var info of player.storage.usable) {
                                if (info.includes('[知己知彼]')) event.list.remove(list[0]);
                                if (info.includes('[诱敌深入]')) event.list.remove(list[1]);
                                if (info.includes('[静待良机]')) event.list.remove(list[2]);
                            }
                            //如果主动技不选目标则无事发生
                            if (!targets.length) {
                                event.finish();
                            } else {
                                player.chooseControl(true).set('prompt', '请选择一项发动').set('choiceList', event.list);
                            }
                            ('step 1');
                            player.storage.usable.push(event.list[result.index]);
                            event.info = event.list[result.index];
                            if (event.info.includes('[知己知彼]')) {
                                //发动知己知彼
                                if (targets[0].getCards('h').length) {
                                    //有手牌才能发动
                                    player.popup('知己知彼');
                                    var next = game.createEvent('give');
                                    next.player = player;
                                    next._trigger = targets[0];
                                    next.setContent(function () {
                                        'step 0';
                                        var targets = trigger; //观看选择红色牌
                                        player.chooseCardButton(targets, targets.getCards('h')).set('ai', function (button) {
                                            return get.value(button.link);
                                        }).filterButton = function (button) {
                                            return get.color(button.link) == 'red';
                                        };
                                        ('step 1');
                                        //获得
                                        player.gain(result.links[0], targets);
                                        targets.$giveAuto(result.links[0], player);
                                    });
                                }
                                if (player.getDamagedHp() >= 3 && player.storage.usable.length < 2) {
                                    //如果已损坏体力大于等于3可再次发动并且之前没有取消并且还能选择(同一事件最多2次)
                                    event.goto(0);
                                } else event.finish();
                            } else if (event.info.includes('[诱敌深入]')) {
                                //发动诱敌深入
                                targets[0].storage.attackTrue = false;
                                player.line(targets[0]);
                                player.addSkill('Is_cangqi_attackPlayer');
                                targets[0].addSkill('Is_cangqi_attackSource');
                            } else if (event.info.includes('[静待良机]')) {
                                //发动静待良机
                                player.draw();
                                for (var i in player.storage.Utargets) {
                                    if (player.storage.Utargets[i] != targets[0]) continue;
                                    var hisCard = player.storage.Ucards[i];
                                    var him = player.storage.Utargets[i];
                                    if (him.canUse(hisCard, player, true)) {
                                        him.useCard(hisCard, player);
                                        player.storage.Ucards.remove(hisCard);
                                        player.storage.Utargets.remove(him);
                                    }
                                    event.finish();
                                }
                            }
                            ('step 2');
                            player.line(targets[0]);
                            if (targets[0].storage.attackTrue) {
                                //玩家受到伤害了
                                delete targets[0].storage.attackTrue;
                                event.finish();
                            } else {
                                //没有受到伤害,视情况继续出杀
                                if (event.notUse == true) {
                                    //对方不出杀了或没杀
                                    targets[0].damage(player);
                                    event.goto(4);
                                } else {
                                    //有杀,选择出不出
                                    targets[0]
                                        .chooseCard(1, false)
                                        .set('prompt', '选择是否对' + get.translation(player) + '使用杀(无距离限制)')
                                        .set('filterCard', (card) => {
                                            return card.name == 'sha';
                                        })
                                        .set('ai', function () {
                                            return -get.attitude(targets[0], player);
                                        });
                                }
                            }
                            ('step 3');
                            player.draw();
                            if (result.bool) {
                                //如果用了杀
                                targets[0].useCard(result.cards, player);
                            } else {
                                //没用杀
                                event.notUse = true;
                            }
                            event.goto(2);
                            ('step 4');
                            //清理子技能
                            for (var pl of game.players) {
                                if (pl.hasSkill('Is_cangqi_attackPlayer')) pl.removeSkill('Is_cangqi_attackPlayer');
                                if (pl.hasSkill('Is_cangqi_attackSource')) pl.removeSkill('Is_cangqi_attackSource');
                                if (pl.storage.attackTrue) delete pl.storage.attackTrue;
                            }
                        },
                    },
                },
            },
            Is_cangqi: {
                markText: '器',
                intro: {
                    markcount: 'expansion',
                    content: 'expansion',
                },
                subSkill: {
                    attackPlayer: {
                        forced: true,
                        trigger: {
                            source: 'damageBegin1',
                        },
                        filter(evt, player) {
                            //防止二次造成伤害
                            if (player.storage.no_second == true) return false;
                            return evt.player.hasSkill('Is_cangqi_attackSource');
                        },
                        content() {
                            //因度势造成伤害
                            'step 0';
                            player
                                .chooseBool()
                                .set('prompt', '你即将对' + get.translation(trigger.player) + '造成伤害(度势)')
                                .set('prompt2', '是否防止此伤害,改为横置之,弃置所有<器>对其造成等量火焰伤害(若其已横置则造成伤害+1)');
                            ('step 1');
                            if (result.bool) {
                                trigger.cancel();
                                player.storage.no_second = true;
                                var num = player.getExpansions('Is_cangqi').length;
                                if (trigger.player.isLink) num++;
                                trigger.player.link(true);
                                if (player.getExpansions('Is_cangqi')) {
                                    player.loseToDiscardpile(player.getExpansions('Is_cangqi'));
                                    trigger.player.damage('fire', num);
                                }
                                delete player.storage.no_second;
                            }
                            player.removeSkill('Is_cangqi_attackPlayer');
                        },
                    },
                    attackSource: {
                        forced: true,
                        trigger: {
                            source: 'damageEnd',
                        },
                        filter(evt, player) {
                            if (evt.card.name != 'sha') return false;
                            return evt.player.hasSkill('Is_cangqi_attackPlayer') || evt.player.hasSkill('Is_cangqi');
                        },
                        content() {
                            //被度势造成伤害
                            player.draw();
                            player.storage.attackTrue = true;
                            trigger.player.addToExpansion(trigger.cards, player, 'giveAuto').gaintag.add('Is_cangqi');
                            player.removeSkill('Is_duoshi_attackSource');
                        },
                    },
                },
            },
            ls_Eruda_huangen: {
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.number == 1) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.number == 1) return false;
                    },
                },
                group: 'ls_Eruda_huangen_compare',
                trigger: {
                    player: 'dying',
                },
                forced: true,
                filter(event, player) {
                    var num = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            num++;
                        }
                    }
                    return 1 <= num;
                },
                content() {
                    var card = false;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        if (ui.cardPile.childNodes[i].number === 1) {
                            card = ui.cardPile.childNodes[i];
                            break;
                        }
                    }
                    if (card) {
                        player.gain(card);
                        player.recover(1 - player.hp);
                    }
                },
                subSkill: {
                    compare: {
                        trigger: {
                            player: 'compare',
                            target: 'compare',
                        },
                        forced: true,
                        filter(event, player) {
                            var num = 0;
                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                var card = ui.cardPile.childNodes[i];
                                if (card.number == 1) {
                                    num++;
                                }
                            }
                            return 1 <= num;
                        },
                        content() {
                            var num = 0;
                            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                var card = ui.cardPile.childNodes[i];
                                if (card.number == 1) {
                                    num++;
                                }
                            }
                            if (player == trigger.target || !trigger.iwhile) {
                                trigger[player == trigger.player ? 'num1' : 'num2'] += num;
                                game.log(player, '的拼点牌点数+' + num);
                            }
                        },
                    },
                },
            },
            ls_Eruda_zhaotao: {
                mark: true,
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                selectTarget: [1, 3],
                filter(event, player) {
                    var num = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            num++;
                        }
                    }
                    return 1 <= num && player.countCards('h') > 0;
                },
                multitarget: true,
                multiline: true,
                content() {
                    player.chooseToCompare(targets).callback = lib.skill.ls_Eruda_zhaotao.callback;
                },
                callback() {
                    if (event.num1 > event.num2) {
                        player.addMark('ls_Eruda_zhaotao', 1);
                    }
                    event.finish();
                },
                contentAfter() {
                    'step 0';
                    if (player.countMark('ls_Eruda_zhaotao') >= 0) player.chooseUseTarget({ name: 'huogong' }, get.prompt('ls_Eruda_zhaotao'), '视为使用一张【火攻】', true);
                    else player.removeMark('ls_Eruda_zhaotao', Infinity);
                    ('step 1');
                    if (player.countMark('ls_Eruda_zhaotao') > 0) player.chooseUseTarget({ name: 'juedou' }, get.prompt('ls_Eruda_zhaotao'), '视为使用一张【决斗】', true);
                    else player.removeMark('ls_Eruda_zhaotao', Infinity);
                    ('step 2');
                    if (player.countMark('ls_Eruda_zhaotao') >= 2) player.chooseUseTarget({ name: 'sha', nature: 'thunder' }, get.prompt('ls_Eruda_zhaotao'), '视为使用一张雷【杀】', true, false);
                    else player.removeMark('ls_Eruda_zhaotao', Infinity);
                    ('step 4');
                    player.removeMark('ls_Eruda_zhaotao', Infinity);
                },
            },
            Erudadiy_kuanghan: {
                intro: {
                    content: 'limited',
                },
                init: (player, skill) => (player.storage[skill] = false),
                mark: true,
                limited: true,
                trigger: {
                    global: ['logSkill', 'gainBefore', 'useSkillAfter'],
                },
                filter(event, player) {
                    var num = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            num++;
                        }
                    }
                    return num == 0;
                },
                content() {
                    'step 0';
                    player.awakenSkill('Erudadiy_kuanghan');
                    player.addSkill('Erudadiy_kuanghan_restore');
                    player.addSkill('Erudadiy_kuanghan_use');
                    game.washCard();
                    var list = player.getCards('h', { number: '1' });
                    game.log(player, `将${get.cnNumber(list.length)}张牌置入了牌堆`);
                    player.loseToDiscardpile(list, ui.cardPile, 'blank').set('log', false).insert_index = function () {
                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                    };
                    ('step 1');
                    event.pl = game.filterPlayer(function (current) {
                        return current.countCards('h', (card) => card.number == 1) && current != player;
                    });
                    event.pl.sort(lib.sort.seat);
                    for (var i = 0; i < event.pl.length; i++) {
                        event.pl[i].addTempSkill('fengyin');
                    }
                    ('step 2');
                    var A = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            A++;
                        }
                    }
                    player
                        .chooseTarget(true, get.prompt('Erudadiy_kuanghan'), '视为对一名其他角色使用' + get.cnNumber(A) + '张雷【杀】', function (card, player, target) {
                            return player.canUse('sha', target, false);
                        })
                        .set('ai', function (target) {
                            var player = _status.event.player;
                            return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                        });
                    ('step 3');
                    var A = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            A++;
                        }
                    }
                    if (result.bool && A > 0) {
                        var target = result.targets[0];
                        event.target = target;
                        event.sha = 0;
                    } else event.finish();
                    ('step 4');
                    event.sha++;
                    player.useCard({ name: 'sha', nature: 'thunder', storage: { Erudadiy_kuanghan: true } }, target, false);
                    ('step 5');
                    var AA = 0;
                    for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                        var card = ui.cardPile.childNodes[i];
                        if (card.number == 1) {
                            AA++;
                        }
                    }
                    if (event.sha < AA) event.goto(4);
                },
                subSkill: {
                    roundStart: {
                        charlotte: true,
                    },
                    use: {
                        charlotte: true,
                        trigger: {
                            player: 'useCardToPlayered',
                        },
                        filter(event, player) {
                            return event.card.storage && event.card.storage.Erudadiy_kuanghan && event.target.countCards('h', (card) => card.number == 1);
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        logTarget: 'target',
                        content() {
                            player.addTempSkill('Erudadiy_kuanghan_roundStart', 'roundStart');
                            trigger.target.addSkill('qinggang2');
                            player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                            game.log(player, '无视防具', '#g【匡汉】');
                        },
                    },
                    restore: {
                        charlotte: true,
                        trigger: {
                            source: 'dieAfter',
                        },
                        filter(event, player) {
                            return event.card && event.card.storage && event.card.storage.Erudadiy_kuanghan && !player.hasSkill('Erudadiy_kuanghan_roundStart');
                        },
                        forced: true,
                        popup: false,
                        firstDo: true,
                        content() {
                            player.removeSkill('Erudadiy_kuanghan_restore');
                            player.restoreSkill('Erudadiy_kuanghan');
                            player.popup('匡汉');
                            game.log(player, '回复了技能', '#g【匡汉】');
                        },
                    },
                },
            },
            //锁定技,当你造成伤害或受到伤害时,摸2张牌.因此获得牌时,若你有以此法获得的牌,则需弃置X牌,下次发动技能时,摸牌数+X(X为此法获得且仍在手牌区的牌数且至多为5)
            ls_Erudadiy_zongsi: {
                group: ['ls_Erudadiy_zongsi_1'],
                audio: 'ext:裸睡天依:2',
                trigger: {
                    player: 'damageBegin4',
                    source: 'damageBegin4',
                },
                forced: true,
                async content(event, trigger, player) {
                    //QQQ
                    var num = player.countCards('he', (card) => card.hasGaintag('ls_Erudadiy_zongsi'));
                    await player.draw(2 + num).set('gaintag', ['ls_Erudadiy_zongsi']);
                    if (player.countCards('he') && num) await player.chooseToDiscard('he', num, true);
                },
            },
            ls_guanxing: {
                subfrequent: ['zhunbei'],
                group: ['ls_guanxing_zhunbei', 'ls_guanxing_judge'],
                subSkill: {
                    zhunbei: {
                        trigger: {
                            player: 'phaseZhunbeiBegin',
                        },
                        async content(event, trigger, player) {
                            const num = Math.max(2, 7 - player.getDamagedHp());
                            player.chooseToGuanxing(num);
                        },
                        ai: {
                            guanxing: true,
                        },
                    },
                    judge: {
                        trigger: {
                            player: 'judgeEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return event.result && event.result.bool == true && event.cardname && get.type({ name: event.cardname }) == 'delay';
                        },
                        async content(event, trigger, player) {
                            player.recover();
                        },
                    },
                },
            },
            ls_kongcheng: {
                trigger: {
                    target: 'useCardToTarget',
                },
                forced: true,
                filter(event, player) {
                    if (!lib.card['binglinchengxia'] || !lib.card['bingliang']) return false;
                    return event.player != player && ['red', 'black'].includes(get.color(event.card));
                },
                async content(event, trigger, player) {
                    trigger.card.name = get.color(trigger.card) == 'red' ? 'binglinchengxia' : 'bingliang';
                },
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (target.countCards('h') == 0) {
                            if (get.tag(card, 'damage')) return false;
                        }
                        if (target.hasJudge('binglinchengxia')) {
                            if (get.tag(card, 'damage') && get.color(card) == 'red') return false;
                        }
                        if (target.hasJudge('bingliang')) {
                            if (get.tag(card, 'damage') && get.color(card) == 'black') return false;
                        }
                    },
                },
            },
            ls_laohui: {
                enable: 'phaseUse',
                usable: 7,
                filter(event, player) {
                    if (!lib.card['binglinchengxia'] || !lib.card['bingliang']) return false;
                    return player.countCards('h') && ['bingliang', 'binglinchengxia'].some((judge) => player.canAddJudge(judge));
                },
                viewAs(cards, player) {
                    if (cards.length) {
                        var name = false;
                        switch (get.color(cards[0], player)) {
                            case 'red':
                                name = 'binglinchengxia';
                                break;
                            case 'black':
                                name = 'bingliang';
                                break;
                        }
                        if (name)
                            return {
                                name: name,
                                storage: {
                                    ls_laohui: true,
                                },
                            };
                    }
                    return null;
                },
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return player == target;
                },
                filterCard(card, player, event) {
                    return (get.color(card) == 'red' && player.canAddJudge({ name: 'binglinchengxia', cards: [card] })) || (get.color(card) == 'black' && player.canAddJudge({ name: 'bingliang', cards: [card] }));
                },
                position: 'hes',
                check(card) {
                    return 9 - get.value(card);
                },
                async precontent(event, trigger, player) {
                    player
                        .when('useCardAfter')
                        .filter((event, player) => {
                            return event.card.storage.ls_laohui;
                        })
                        .then(() => {
                            player.addTempSkill('ls_laohui_attack');
                            player.addMark('ls_laohui_attack', 1, false);
                            if (player.hasUseTarget({ name: 'sha' })) player.chooseUseTarget({ name: 'sha' }, true, false);
                        });
                },
                subSkill: {
                    attack: {
                        charlotte: true,
                        mod: {
                            attackRange: (player, num) => num + player.countMark('ls_laohui_attack'),
                        },
                    },
                },
            },
            ls_zhengxian: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == player || !event.player.isIn()) return false;
                    return player.getCards('j').some((jc) => event.player.canAddJudge(jc)) || event.player.getCards('j').some((jc) => player.canAddJudge(jc));
                },
                async content(event, trigger, player) {
                    const targetss = [player, trigger.player];
                    const { bool, targets } = await player
                        .chooseTarget(`将你或${get.translation(trigger.player)}判定区的一张牌移动至对方的判定区内`, function (card, player, target) {
                            if (target == player) return player.getCards('j').some((jc) => trigger.player.canAddJudge(jc));
                            if ((target = trigger.player)) return trigger.player.getCards('j').some((jc) => player.canAddJudge(jc));
                            return false;
                        })
                        .forResult();
                    if (bool) {
                        const targetx = targets[0],
                            targety = targetss.remove(targetx)[0];
                        const { result } = await player.choosePlayerCard(targetx, 'j', true).set('filterButton', function (button) {
                            return targety.canAddJudge(button.link);
                        });
                        if (result.bool) {
                            var card = result.cards[0];
                            targetx.$give(card, targety);
                            var name = card.viewAs || card.name;
                            if (card.name != name) {
                                targety.addJudge(name, card);
                            } else {
                                targety.addJudge(card);
                            }
                        }
                    }
                },
            },
            ls_lizheng: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    if (['h', 'e', 'j'].filter((pos) => !player.countCards(pos)).length < 2) return false;
                    return evt && evt.player == player && ((evt.hs && evt.hs.length) || (evt.es && evt.es.length) || (evt.js && evt.js.length));
                },
                videolist: [],
                video(name) {
                    let skillName;
                    do {
                        skillName = 'ls_lizheng_' + Math.random().toString(36).slice(-8);
                    } while (lib.skill[skillName] != null);
                    if (!lib.card[skillName]) {
                        game.broadcastAll(() => {
                            lib.card[skillName] = {
                                type: 'special_delay',
                                fullskin: true,
                                noEffect: true,
                                wuxieable: false,
                            };
                            lib.card[skillName].cardimage = name;
                            lib.translate[skillName] = lib.translate[name] + '·理政';
                            lib.translate[skillName + '_info'] = '无效果【' + lib.translate[name] + '】';
                            lib.skill.ls_lizheng.videolist.add(skillName);
                        });
                    }
                    return skillName;
                },
                async content(event, trigger, player) {
                    const cards = get.cards();
                    game.cardsGotoOrdering(cards);
                    const list = [];
                    if (!player.countCards('h')) list.push('手牌区');
                    if (!player.countCards('e') && player.hasEnabledSlot()) list.push('装备区');
                    if (!player.countCards('j') && !player.isDisabledJudge()) list.push('判定区');
                    const { control } = await player
                        .chooseControl(list)
                        .set('prompt', `将${get.translation(cards[0])}置于一个区域内`)
                        .forResult();
                    if (control == '手牌区') {
                        player.gain(cards);
                    } else if (control == '装备区') {
                        if (get.type(cards[0]) == 'equip' && player.canUse(cards[0], player)) {
                            player.chooseUseTarget(cards[0], 'nothrow', 'nopopup', true);
                        } else player.equip(cards[0]);
                    } else {
                        if (player.canAddJudge(cards[0]) && get.type(cards[0]) == 'delay') player.addJudge(cards[0]);
                        else {
                            const namex = get.info('ls_lizheng').video(cards[0].name);
                            player.addJudge({ name: namex }, [cards[0]]);
                        }
                    }
                },
                group: ['ls_lizheng_init', 'ls_lizheng_begin'],
                subSkill: {
                    init: {
                        trigger: {
                            global: 'phaseBefore',
                            player: 'enterGame',
                        },
                        forced: true,
                        popup: false,
                        filter(event, player) {
                            if (['h', 'e', 'j'].filter((pos) => !player.countCards(pos)).length < 2) return false;
                            return event.name != 'phase' || game.phaseNumber == 0;
                        },
                        async content(event, trigger, player) {
                            player.useSkill('ls_lizheng');
                        },
                    },
                    begin: {
                        trigger: {
                            player: 'phaseBegin',
                        },
                        forced: true,
                        async content(event, trigger, player) {
                            const arealist = [];
                            arealist.push(['手牌区', player.getCards('h')]);
                            if (player.hasEnabledSlot()) arealist.push(['装备区', player.getCards('e')]);
                            if (!player.isDisabledJudge()) arealist.push(['判定区', player.getCards('j')]);
                            const next = player.chooseToMove('理政');
                            next.set('list', arealist);
                            next.set('filterMove', function (from, to, moved) {
                                return typeof to != 'number';
                            });
                            const { result } = await next;
                            if (result.bool) {
                                const hs = result.moved[0].removeArray(player.getCards('h'));
                                const es = result.moved[1].removeArray(player.getCards('e'));
                                const js = result.moved[2].removeArray(player.getCards('j'));
                                if (hs.length) {
                                    player.gain(hs);
                                }
                                if (es.length) {
                                    while (es.length) {
                                        const e = es.shift();
                                        if (get.type(e) == 'equip' && player.canUse(e, player)) player.chooseUseTarget(e, 'nothrow', 'nopopup', true);
                                        else player.equip(e);
                                    }
                                }
                                if (js.length) {
                                    while (js.length) {
                                        const j = js.shift();
                                        if (player.canAddJudge(j) && get.type(j) == 'delay') player.addJudge(j);
                                        else {
                                            const namex = get.info('ls_lizheng').video(j.name);
                                            player.addJudge({ name: namex }, [j]);
                                        }
                                    }
                                }
                            }
                        },
                    },
                },
            },
            ls_qingbi: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (['h', 'e', 'j'].filter((pos) => player.countCards(pos)).length < 2) return false;
                    const posname = player
                        .getCards('hej')
                        .map((pos) => pos.name)
                        .filter((name) => !player.getStorage('ls_qingbi_used').includes(name));
                    for (var i of posname) {
                        var type = get.type2(i);
                        if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog('清弊');
                        if (player.countCards('h')) {
                            dialog.add('<div class="text center">手牌区</div>');
                            dialog.add(player.getCards('h'));
                        }
                        if (player.countCards('e')) {
                            dialog.add('<div class="text center">装备区</div>');
                            dialog.add(player.getCards('e'));
                        }
                        if (player.countCards('j')) {
                            dialog.add('<div class="text center">判定区</div>');
                            dialog.add(player.getCards('j'));
                        }
                        return dialog;
                    },
                    filter(button, player) {
                        if (ui.selected.buttons.length) {
                            if (get.position(button.link) == get.position(ui.selected.buttons[0].link)) return false;
                            if (!['basic', 'trick'].includes(get.type(button.link))) return false;
                            if (player.getStorage('ls_qingbi_used').includes(button.link.name)) return false;
                            return _status.event.parent.filterCard({ name: button.link.name }, player, _status.event.parent);
                        }
                        return true;
                    },
                    select: 2,
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[1].name,
                                nature: get.nature(links[1], false),
                            },
                            filterCard(card, player) {
                                return card == links[0];
                            },
                            selectCard: -1,
                            position: 'hej',
                            async precontent(event, trigger, player) {
                                if (!player.storage.ls_qingbi_used) {
                                    player.when({ global: 'phaseAfter' }).then(() => {
                                        delete player.storage.ls_qingbi_used;
                                    });
                                }
                                player.markAuto('ls_qingbi_used', [event.result.card.name]);
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张牌当做' + get.translation(links[1]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (['h', 'e', 'j'].filter((pos) => player.countCards(pos)).length < 2) return false;
                    const posname = player.getCards('hej').map((pos) => pos.name);
                    if (player.getStorage('ls_qingbi_temp').includes(name)) return false;
                    var type = get.type2(name);
                    return (type == 'basic' || type == 'trick') && posname.includes(name);
                },
                group: 'ls_qingbi_hand',
                subSkill: {
                    backup: {},
                    hand: {
                        trigger: {
                            player: 'loseEnd',
                            global: ['equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd'],
                        },
                        forced: true,
                        firstDo: true,
                        silent: true,
                        content() {
                            lib.skill['ls_qingbi_in'].onremove(player);
                            var cards = player.getCards('ej');
                            var cardsx = cards.map((card) => {
                                var cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                return cardx;
                            });
                            player.directgains(cardsx, null, 'ls_qingbi');
                            player.addSkill('ls_qingbi_in');
                        },
                    },
                    in: {
                        trigger: {
                            global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
                        },
                        forced: true,
                        silent: true,
                        filter(event, player) {
                            var cards = event.getd();
                            return cards.length;
                        },
                        onremove(player) {
                            var cards2 = player.getCards('s', (card) => {
                                return card.hasGaintag('ls_qingbi');
                            });
                            if (player.isOnline2()) {
                                player.send(
                                    function (cards, player) {
                                        cards.forEach((i) => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    },
                                    cards2,
                                    player
                                );
                            }
                            cards2.forEach((i) => i.delete());
                            if (player == game.me) ui.updatehl();
                        },
                        group: ['ls_qingbi_use', 'ls_qingbi_lose'],
                        content() {
                            var cards = player.getCards('ej');
                            var idList = player.getCards('s', (card) => card.hasGaintag('ls_qingbi')).map((i) => i._cardid);
                            var cards2 = cards.map((card) => {
                                var cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                return cardx;
                            });
                            lib.skill['ls_qingbi_in'].onremove(player);
                            player.directgains(cards2, null, 'ls_qingbi');
                        },
                        mod: {
                            cardEnabled(card, player) {
                                if (get.position(card) == 'h') return;
                                if (!['equip', 'delay'].includes(get.type(card))) return;
                                if (!card.cards) return;
                                for (var i of card.cards) {
                                    if (!i.hasGaintag('ls_qingbi')) return;
                                }
                                const true_card = player.getCards('ej').find((cardx) => card.cards && card.cards[0] && cardx.cardid == card.cards[0]._cardid);
                                if (!true_card) return;
                                if (true_card && get.position(true_card) == 'e' && get.type(true_card) == 'equip') return false;
                                if (true_card && get.position(true_card) == 'j' && get.type(true_card) == 'delay') return false;
                            },
                            cardRespondable(card, player) {
                                if (get.itemtype(card) == 'card' && card.hasGaintag('ls_qingbi')) return false;
                            },
                        },
                    },
                    use: {
                        trigger: {
                            player: ['useCardBefore', 'respondBefore'],
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        firstDo: true,
                        filter(event, player) {
                            var cards = player.getCards('s', (card) => card.hasGaintag('ls_qingbi') && card._cardid);
                            return (
                                event.cards &&
                                event.cards.some((card) => {
                                    return cards.includes(card);
                                })
                            );
                        },
                        content() {
                            var idList = player.getCards('s', (card) => card.hasGaintag('ls_qingbi')).map((i) => i._cardid);
                            var cards = [];
                            cards.addArray(player.getCards('ej').filter((i) => idList.includes(i.cardid)));
                            var cards2 = [];
                            for (var card of trigger.cards) {
                                var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                                if (cardx) cards2.push(cardx);
                            }
                            var cards3 = trigger.cards.slice();
                            trigger.cards = cards2;
                            trigger.card.cards = cards2;
                            if (player.isOnline2()) {
                                player.send(
                                    function (cards, player) {
                                        cards.forEach((i) => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    },
                                    cards3,
                                    player
                                );
                            }
                            cards3.forEach((i) => i.delete());
                            if (player == game.me) ui.updatehl();
                        },
                    },
                    lose: {
                        trigger: {
                            global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'cardsGotoOrderingBegin', 'phaseAfter'],
                        },
                        charlotte: true,
                        forced: true,
                        popup: false,
                        firstDo: true,
                        filter(event, player) {
                            if (event.name == 'phase') return true;
                            var idList = player.getCards('s', (card) => card.hasGaintag('ls_qingbi')).map((i) => i._cardid);
                            return (
                                event.cards &&
                                event.cards.some((card) => {
                                    return idList.includes(card.cardid);
                                })
                            );
                        },
                        content() {
                            var cards2;
                            if (trigger.name == 'phase') {
                                cards2 = player.getCards('s', (card) => {
                                    return card.hasGaintag('ls_qingbi');
                                });
                            } else {
                                var idList = [];
                                idList.addArray(player.getCards('ej').map((i) => i.cardid));
                                cards2 = player.getCards('s', (card) => {
                                    return card.hasGaintag('ls_qingbi') && !idList.includes(card._cardid);
                                });
                            }
                            if (player.isOnline2()) {
                                player.send(
                                    function (cards, player) {
                                        cards.forEach((i) => i.delete());
                                        if (player == game.me) ui.updatehl();
                                    },
                                    cards2,
                                    player
                                );
                            }
                            cards2.forEach((i) => i.delete());
                            if (player == game.me) ui.updatehl();
                        },
                    },
                },
            },
            ls_qinxue: {
                enable: 'phaseUse',
                usable: 1,
                filterCard: true,
                position: 'hes',
                filterTarget: lib.filter.notMe,
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    const target = event.target,
                        cards = event.cards;
                    await player.give(cards, target);
                    var list = [];
                    list.push('选项一');
                    list.push('选项二');
                    const { control } = await target
                        .chooseControl(list)
                        .set('choiceList', [`出牌阶段结束时,${get.translation(player)}将手牌摸至与你相同`, `下个准备阶段,${get.translation(player)}失去1点体力(若${get.translation(player)}本回合发动过<博图>则跳过),获得三张副类不同的牌`])
                        .set('prompt', get.translation(event.name))
                        .set('ai', () => {
                            return list.randomGet();
                        })
                        .forResult();
                    target.say(`我选择${control}`);
                    game.log(target, '选择了', control);
                    if (control == '选项一') {
                        player
                            .when('phaseUseEnd')
                            .then(() => {
                                player.drawTo(target.countCards('h'));
                            })
                            .vars({ target: target });
                    } else {
                        const num_fix = player.getHistory('useSkill', (evt) => evt.skill == 'ls_botu').length;
                        player.setStorage('jsrgdengnan_check', false);
                        player
                            .when('phaseZhunbeiBegin')
                            .then(() => {
                                if (length <= player.getAllHistory('useSkill', (evt) => evt.skill == 'ls_botu').length) {
                                    player.loseHp();
                                }
                                let num = 0,
                                    cards = [];
                                for (var i = 0; i < 3; i++) {
                                    const card = get.cardPile(function (cardx) {
                                        return !cards.includes(cardx) && !cards.map((c) => c.name).includes(cardx.name);
                                    });
                                    if (card) cards.add(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            })
                            .vars({ length: num_fix });
                    }
                },
            },
            ls_keji: {
                forced: true,
                group: ['ls_keji_gain', 'ls_keji_discard'],
                subSkill: {
                    gain: {
                        trigger: {
                            player: 'gainEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            if (!player.isPhaseUsing()) return false;
                            return event.cards && event.cards.length;
                        },
                        async content(event, trigger, player) {
                            player.addTempSkill('ls_keji_add');
                            player.addGaintag(trigger.cards, 'ls_keji_add');
                        },
                    },
                    discard: {
                        trigger: {
                            player: 'phaseDiscardEnd',
                        },
                        forced: true,
                        filter(event) {
                            return !event.cards || !event.cards.length;
                        },
                        async content(event, trigger, player) {
                            const { bool } = await player.chooseToDiscard(`你可以弃置至少一张牌并回复1点体力`).forResult();
                            if (bool) {
                                player.recover();
                                player.setStorage('jsrgdengnan_check', true);
                            }
                        },
                    },
                    add: {
                        charlotte: true,
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.hasGaintag('ls_keji_add')) return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.hasGaintag('ls_keji_add')) return false;
                            },
                        },
                        onremove(player) {
                            player.removeGaintag('ls_keji_add');
                        },
                    },
                },
            },
            ls_botu: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                filter(event, player) {
                    const suits = [],
                        types = [];
                    game.getGlobalHistory('cardMove', function (evt) {
                        if (suits.length >= 4 || types.length >= 3) return;
                        if (evt.name == 'lose') {
                            if (evt.position == ui.discardPile) {
                                for (var i of evt.cards) suits.add(i.suit);
                                for (var i of evt.cards) suits.add(get.type2(i, false));
                            }
                        } else {
                            if (evt.name == 'cardsDiscard') {
                                for (var i of evt.cards) suits.add(i.suit);
                                for (var i of evt.cards) suits.add(get.type2(i, false));
                            }
                        }
                    });
                    return suits.length >= 4 || types.length >= 3;
                },
                async content(event, trigger, player) {
                    const { index } = await player.chooseControl('准备阶段', '出牌阶段', '弃牌阶段', 'cancel').set('prompt', '博图:请选择要执行的额外阶段').forResult();
                    if (index == 3) return;
                    const insert = index == 0 ? 'phaseZhunbei' : index == 1 ? 'phaseUse' : 'phaseDiscard';
                    var next = player[insert]();
                    event.next.remove(next);
                    trigger.parent.next.push(next);
                },
            },
            ls_liuli: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                async content(event, trigger, player) {
                    const num =
                        player.countCards('h', (card) => {
                            return get.tag(card, 'damage');
                        }) -
                        (player.getHistory('useSkill', (evt) => evt.skill == 'ls_liuli').length - 1);
                    const num_fix = Math.max(num, 0);
                    trigger.num -= num_fix;
                },
                group: 'ls_liuli_fanji',
                subSkill: {
                    fanji: {
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        filter(event, player) {
                            return (
                                event.source &&
                                event.source.isIn() &&
                                player.countCards('h', (card) => {
                                    return player.canUse(card, event.source);
                                })
                            );
                        },
                        async content(event, trigger, player) {
                            const cards = player.getCards('h', (card) => {
                                return player.canUse(card, trigger.source);
                            });
                            while (true) {
                                if (!trigger.source || !trigger.source.isIn()) break;
                                const cardsx = player.getCards('h', (cardx) => {
                                    if (!['basic', 'trick'].includes(get.type2(cardx))) return false;
                                    if (get.type2(cardx) == 'delay') return trigger.source.canAddJudge(cardx);
                                    return player.canUse(cardx, trigger.source);
                                });
                                if (!cardsx.length) break;
                                const { result } = await player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (!['basic', 'trick'].includes(get.type2(card))) return false;
                                            if (get.type2(card) == 'delay') return trigger.source.canAddJudge(card);
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '对' + get.translation(trigger.source) + '使用一张牌'
                                    )
                                    .set('forced', true)
                                    .set('targetRequired', true)
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != trigger.source) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    });
                            }
                        },
                    },
                },
            },
            ls_taoguang: {
                trigger: {
                    player: 'damageBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            ls_suiren: {
                enable: 'phaseUse',
                usable: 1,
                filterCard(card, player) {
                    if (ui.selected.cards.length) return get.color(card) == get.color(ui.selected.cards[0]);
                    return true;
                },
                complexCard: true,
                selectCard: [1, Infinity],
                position: 'hes',
                filterTarget: true,
                check(card) {
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    const target = event.target;
                    const color = get.color(event.cards[0]);
                    const num = event.cards.length - 1;
                    const { result } = await target.judge(function (card) {
                        return 0;
                    });
                    if (result.color == color) {
                        if (num > 0) target.damage(num);
                        player.draw();
                    } else {
                        if (num > 0) player.draw(num);
                        target.damage();
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target: -1,
                    },
                },
            },
            ls_dengfeng: {
                trigger: {
                    player: ['loseAfter', 'damageEnd'],
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageEnd') return true;
                    var evt = event.getl(player);
                    return evt && evt.player == player && evt.cards2 && evt.cards2.filter((card) => get.type(card, false) == 'basic').length;
                },
                async content(event, trigger, player) {
                    var cards = Array.from(ui.discardPile.childNodes);
                    var gains = [];
                    var history = game.getGlobalHistory('cardMove', (evt) => {
                        if (evt.name == 'lose') return evt.position == ui.discardPile;
                        return evt.name == 'cardsDiscard';
                    });
                    for (var i = history.length - 1; i >= 0; i--) {
                        var evt = history[i];
                        var cards2 = evt.cards.filter((card) => {
                            return cards.includes(card);
                        });
                        if (cards2.length) {
                            gains.addArray(cards2);
                            cards.removeArray(cards2);
                        }
                        if (!cards.length) break;
                    }
                    if (!gains.length) return;
                    if (trigger.name == 'damage') {
                        const { bool, links } = await player.chooseButton(['你可以蓄谋一张牌', gains]).set('ai', get.buttonValue).forResult();
                        if (bool) {
                            player.addJudge({ name: 'xumou_jsrg' }, links);
                        }
                        return;
                    }
                    let count = trigger.getl(player).cards2.filter((card) => get.type(card, false) == 'basic').length;
                    while (count-- > 0) {
                        count--;
                        const { bool, links } = await player.chooseButton(['你可以蓄谋一张牌', gains]).set('ai', get.buttonValue).forResult();
                        if (bool) {
                            player.addJudge({ name: 'xumou_jsrg' }, links);
                            gains.removeArray(links);
                        }
                        if (!count || !player.hasSkill(event.name)) break;
                    }
                },
            },
            ls_weibi: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (event.responded || event.ls_weibi || !player.getCards('j')) return false;
                    const cards = player.getCards('j').map((card) => card.name);
                    for (var i of cards) {
                        if (event.filterCard({ name: i }, player, event)) return true;
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    var evt = event.getParent(2);
                    evt.set('ls_weibi', true);
                    var cards = player.getCards('j');
                    var aozhan = player.hasSkill('aozhan');
                    const { result } = await player
                        .chooseButton(['选择要使用的牌', cards])
                        .set('filterButton', function (button) {
                            return _status.event.cards.includes(button.link);
                        })
                        .set(
                            'cards',
                            cards.filter(function (card) {
                                if (evt.name == '_wuxie') return card.name == 'wuxie';
                                if (aozhan && card.name == 'tao') {
                                    return (
                                        evt.filterCard(
                                            {
                                                name: 'sha',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        ) ||
                                        evt.filterCard(
                                            {
                                                name: 'shan',
                                                cards: [card],
                                            },
                                            evt.player,
                                            evt
                                        )
                                    );
                                }
                                return evt.filterCard(card, evt.player, evt);
                            })
                        )
                        .set('ai', function (button) {
                            if (get.type(button.link) == 'equip') return 0;
                            var evt = _status.event.getParent(3),
                                player = _status.event.player;
                            if (evt.type == 'phase' && !player.hasValueTarget(button.link, null, true)) return 0;
                            if (evt && evt.ai) {
                                var tmp = _status.event;
                                _status.event = evt;
                                var result = (evt.ai || event.ai1)(button.link, _status.event.player, evt);
                                _status.event = tmp;
                                return result;
                            }
                            return 1;
                        });
                    if (result.bool && result.links && result.links.length) {
                        var card = result.links[0];
                        var name = card.name,
                            aozhan = player.hasSkill('aozhan') && name == 'tao';
                        if (aozhan) {
                            name = evt.filterCard(
                                {
                                    name: 'sha',
                                    cards: [card],
                                },
                                evt.player,
                                evt
                            )
                                ? 'sha'
                                : 'shan';
                        }
                        if (evt.name != 'chooseToUse') {
                            const key = evt.name == '_wuxie' ? 'wuxieresult2' : 'result';
                            delete evt[key].skill;
                            delete evt[key].used;
                            evt[key].card = { name: name, cards: [card] };
                            evt[key].cards = [card];
                            if (evt[key].target) evt[key].target = null;
                            if (evt[key].targets) evt[key].targets = [];
                            evt.redo();
                            return;
                        }
                        game.broadcastAll(
                            function (result, name) {
                                lib.skill.ls_weibi_backup.viewAs = {
                                    name: name,
                                    cards: [result],
                                };
                            },
                            card,
                            name
                        );
                        evt.set('_backupevent', 'ls_weibi_backup');
                        evt.set('openskilldialog', '请选择' + get.translation(card) + '的目标');
                        evt.backup('ls_weibi_backup');
                    }
                    evt.goto(0);
                },
                ai: {
                    effect: {
                        target(card, player, target, effect) {
                            if (get.tag(card, 'respondShan')) return 0.7;
                            if (get.tag(card, 'respondSha')) return 0.7;
                        },
                    },
                    order: 12,
                    respondShan: true,
                    respondSha: true,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
                hiddenCard(player, name) {
                    if (
                        player
                            .getCards('j')
                            .map((card) => card.name)
                            .includes(name) &&
                        lib.inpile.includes(name)
                    )
                        return true;
                },
                group: 'ls_weibi_xumou',
                subSkill: {
                    backup: {
                        sourceSkill: 'ls_weibi',
                        precontent() {
                            var name = event.result.card.name,
                                cards = event.result.card.cards.slice(0);
                            event.result.cards = cards;
                            var rcard = cards[0],
                                card;
                            if (rcard.name == name) card = rcard;
                            else card = { name };
                            event.result.card = card;
                        },
                        filterCard() {
                            return false;
                        },
                        selectCard: -1,
                    },
                    xumou: {
                        trigger: {
                            player: 'loseAfter',
                            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                        },
                        forced: true,
                        filter(event, player) {
                            var evt = event.getl(player);
                            return evt && evt.js && evt.js.length && !player.countCards('j');
                        },
                        async content(event, trigger, player) {
                            var name = trigger.parent.name;
                            if (name == 'useCard' || name == 'respond') {
                                player.recover();
                            } else {
                                player.damage();
                            }
                        },
                    },
                },
            },
        },
        dynamicTranslate: {
            ls_shuixing(player) {
                if (player.storage.ls_shuixing == true) return '转换技,阳:若你使用的上一张非装备牌为非转化牌,你可以将一张牌当作此牌使用或打出;<span class="bluetext">阴:若上一张指定你为目标的非装备牌为非伤害牌,你可以将一张牌当作此牌使用或打出.当你造成伤害后,若此技能状态为阴,你可以摸一张牌并转换此技能;</span>当你于一回合内首次受到伤害后,你可以回复一点体力并转换此技能.';
                return '转换技,<span class="firetext">阳:若你使用的上一张非装备牌为非转化牌,你可以将一张牌当作此牌使用或打出;</span>阴:若上一张指定你为目标的非装备牌为非伤害牌,你可以将一张牌当作此牌使用或打出.当你造成伤害后,若此技能状态为阴,你可以摸一张牌并转换此技能;当你于一回合内首次受到伤害后,你可以回复一点体力并转换此技能.';
            },
            ls_wyucan(player) {
                var list = player.storage.ls_wyucan;
                var str = '游戏开始时,你选择一名其他角色.每回合限一次,当其一次性';
                str += list[0] > 1 ? '失去或获得' : "<span class='bluetext'>失去/获得</span>";
                str += '至少';
                str += list[1] > 1 ? '一张' : "<span class='firetext'>两张</span>";
                str += '牌时,你可以与其';
                str += list[0] > 1 ? '各摸或弃置' : "<span class='bluetext'>各摸/弃置</span>";
                str += '一张牌;若这两张牌的类型:相同,';
                str += list[2] > 1 ? (list[0] > 1 && list[1] > 1 && list[3] > 1 ? '你令此技能视为未发动' : "你令此技能视为未发动或<span class='greentext'>修改一次【玉惨】</span>") : "<span class='greentext'>你修改一次【玉惨】</span>";
                str += ';不同,';
                str += list[3] > 1 ? '你可以依次使用这两张牌.' : "<span class='yellowtext'>你可以视为使用其中一张牌</span>.";
                return str;
            },
            ls_huachou(player) {
                var list = player.storage.ls_huachou;
                var str = list[0] > 1 ? '每回合每项限一次' : "<span class='bluetext'>每回合限一次</span>";
                str += ',当一张非转化牌不因【花愁】而进入处理区时,你可以根据此牌类型执行对应效果:基本,';
                str += list[1] > 1 ? '获得之' : "<span class='firetext'>选择一张手牌替换之</span>";
                str += ';锦囊,';
                str += list[2] > 1 ? (list[0] > 1 && list[1] > 1 && list[3] > 1 ? '你令此牌失效' : "你令此牌失效或<span class='greentext'>修改一次【花愁】</span>") : "<span class='greentext'>你修改一次【花愁】</span>";
                str += ';装备,';
                str += list[3] > 1 ? '你可以对一名其他角色造成1点伤害.' : "<span class='yellowtext'>你可以弃置一张牌并对当前回合角色造成1点伤害</span>.";
                return str;
            },
        },
        translate: {
            lsty: '裸睡天依',
            lsty_tmyg: '同名异构',
            lsty_yxld: '游戏联动',
            lsty_blcx: '兵临城下',
            lsty_qxkl: '勤学苦练',
            lsty_zqjb: '政权交变',
            lsty_wwyc: '文武英才',
            lsty_sjjz: '神降九州',
            lsty_mdtx: '谋定天下',
            lsty_yszx: '异世之星',
            ls_wanghun: '王浑',
            ls_cheng_jiangwei: '城姜维',
            ls_mou_chengong: '谋陈宫',
            ls_mou_sunquan: '谋孙权',
            ls_goufu: '句扶',
            ls_wangyi: '王异',
            ls_shen_zhaoyun: '神赵云',
            long: '龙',
            kes: '克',
            ls_lianshi: '李安世',
            ls_caocao: '曹操',
            ls_lvfan: '吕范',
            ls_duanwei: '段煨',
            ls_zhangning: '张宁',
            ls_zhuran: '朱然',
            ls_chengyu: '程昱',
            ls_quncaocao: '曹操',
            ls_longjie: '龙杰',
            ls_jackchen: '杰克陈',
            ls_yanghu: '羊祜',
            ls_jiaxu: '贾诩',
            ls_lukang: '陆抗',
            'ls_liuhuang&&liuyi': '刘煌刘熠',
            'lsw_liuhuang&&liuyi': '刘煌刘熠',
            ls_yuanshao: '袁绍',
            ls_shy: '琳琅诗怀雅',
            ls_Ace: '艾希',
            ls_wenluxun: '武陆逊',
            ls_Eruda_huangpusong: '武皇甫嵩',
            ls_Eruda_sunli: '孙礼',
            ls_zhugeliang: '诸葛亮',
            ls_dongyun: '董允',
            ls_lvmeng: '吕蒙',
            ls_linyuxia: '林雨霞',
            ls_dengai: '邓艾',
            ls_fuxun: '抚循',
            ls_fuxun_info: '出牌阶段限一次,你可以获得或交给一名其他角色一张手牌,若因此使其手牌数与你相同,你可以将手牌数增加的角色的一张牌作为任意一张基本牌使用(不计入次数)',
            ls_chenya: '沉雅',
            ls_chenya_info: '一名角色发动<出牌阶段限一次>的技能后,你可以重铸其x张牌,若其手牌数发生变化,你摸一张牌(x为本轮<出牌阶段限一次>技能累计发动次数).',
            ls_zhongliu: '中流',
            ls_zhongliu_info: '宗族技,锁定技,当你使用牌时,若不为同族角色的手牌,你视为未发动武将牌上的技能.',
            ls_yingshou: '营守',
            ls_yingshou_info: '你可以将一张牌作为【杀/闪/无懈可击】使用或打出,若本次转化的牌与上次通过此技能转化的牌颜色:<br>相同,不能选择上次选择的牌名.<br>不同,此技能本回合失效.',
            ls_suzhi: '宿智',
            ls_suzhi_info: '锁定技,当你使用或打出牌响应其他角色的牌时,若这两张牌颜色不同,你摸两张牌.',
            ls_zhichi: '智迟',
            ls_zhichi_info: '锁定技,你受到伤害后,摸x张牌,若你的体力值因此变化,你获得x点护甲(x为你已损失体力值).',
            ls_mingce: '明策',
            ls_mingce_info: '出牌阶段限一次,你可以令一名角色选择一项:<br>1.视为对另一名角色使用一张【杀】.<br>2.与你各摸x张牌(x为你已损失体力值,不小于1).',
            ls_zhiheng: '制衡',
            ls_zhiheng_info: '每轮限x次,出牌阶段限一次,或当你成为非装备牌的目标后,你可以将任意张牌只要牌堆顶或牌堆底,从另一端摸等量牌,若此时不为你的回合,你额外摸一张牌,且可以使用一张以此法获得的牌(x为你当前体力值).',
            ls_guzhen: '固阵',
            ls_guzhen_info: '每回合各限一次,当你造成或受到伤害后,你可以将手牌数或体力值调整至与较高的一项相同,若已相同,则均调整至体力上限.',
            ls_yiyong: '毅勇',
            ls_yiyong_info: '当你使用【杀】或成为【杀】的目标后,你可以弃置至少一张至多x张牌或失去一点体力,令此【杀】不可响应且造成的伤害+1或-1(x为你已损失体力值,不小于1)',
            ls_zhenlie: '贞烈',
            ls_zhenlie_info: '当你成为其他角色牌的目标后,你可以失去一点体力并弃置其x张牌,若其因此失去了最后一张手牌或场上的牌,你可以发动一次【秘技】(x为你已损失体力值,不小于1,不大于4).',
            ls_miji: '秘技',
            ls_miji_info: '结束阶段,你可以摸[x]张牌并将[y-x]张牌当作一张基本牌使用.下次发动时交换[]的中的数值(x为你已损失体力值,不小于1,不大于4,y为你的体力上限).',
            ls_shen_longhun: '龙魂',
            ls_shen_longhun_info: '锁定技,你每有两点已损失体力,便拥有一枚<龙魂>标记,你的手牌上限+x(x为<龙魂>数)<br>当你回复体力时,若<龙魂>不足3,则改为获得等量护甲.<br>你受到伤害后或进入濒死状态时,若你有护甲,你移除所有护甲并回复等量体力.<br>当<龙魂>数变化后,重置【龙胆】发动次数并摸一张牌.',
            ls_shen_longdan: '龙胆',
            ls_shen_longdan_info: '每回合限一次,你可以将(一张基本牌)作为任意一张基本牌使用或打出.<br>若<龙魂>不小于2,改为(一张基本牌或两张非基本牌).',
            ls_shen_chongzhen: '冲阵',
            ls_shen_chongzhen_info: '当你发动【龙胆】使用或打出【杀】或【闪】时,你可以获得目标角色或当前回合角色一张牌.',
            ls_juntian: '均田',
            ls_juntian_info: '游戏开始时,记录本局所有角色手牌上限均值(向下取整),称为<均>.一名角色回合开始/结束时,若其手牌数大于<均>,令<均>+1,其将超出部分置于<策>区;若其手牌数小于<均>,令<均>-1,其获得X张最早进入<策>区的牌(X为<均>与其手牌数之差,不足则全部获得);若其手牌数等于<均>,你可以发动一次〖豊屯〗.',
            ls_fengtun: '豊屯',
            ls_fengtun_info: '一轮游戏开始时,你可令<均>±1,若你因此使<均>等于初始值,则你可以将<均>张位于<策>区的牌分配给任意角色,否则你可以将<均>改为初始值.',
            ls_fushi: '负世',
            ls_fushi_info: '当你造成或受到伤害后,你令伤害来源获得一枚<负>标记并获得本次对你造成伤害牌对应的所有实体牌.当你使用【杀】、【桃】或普通锦囊牌时,若目标角色中存在一名角色拥有<负>标记,则你可以移去该角色一枚<负>标记令此牌不计入次数且不可被抵消,或移去你一枚<负>标记为此牌额外增加一个目标.当你的手牌数小于<负>标记时,你将手牌摸至<负>标记并移去摸牌数个标记.',
            ls_diaodu: '调度',
            ls_diaodu_info: '每回合结束时,若你的装备区有空置的装备栏,则你可获得其他角色装备区的一张对应装备或摸一张牌.',
            ls_diancai: '典财',
            ls_diancai_info: '一名角色的回合开始时,若其装备数不为全场最少,你可将其装备区的一张牌移动至另一名角色的对应装备栏:若其装备数不为全场最多,你可以将你区域内的一张装备牌置于其对应装备栏.若如此做,根据移动或置入的装备牌的副类:武器,此回合其不能使用【杀】和【决斗】;防具,此回合其非锁定技失效;坐骑,此回合其不能使用普通锦囊牌;宝物,此回合其不能使用延时锦囊和【桃】.',
            ls_langmie: '狼灭',
            ls_langmie_info: '一名角色的出牌阶段结束时,若其此阶段每使用过两张同一类型的牌,你可摸一张牌;其他角色的结束阶段,若其此回合造成了X点伤害,你可弃置一张牌并对其造成X-1点伤害.',
            ls_tianlei: '天雷',
            ls_tianlei_info: '当一名角色的判定牌生效前,若判定牌为红色,你可打出一张牌替换之;若为你,则取消颜色限制.当一名角色的判定结果为黑色时,你可令该角色受到1点无伤害来源的雷电伤害;若判定结果为♠️️2-9,则伤害改为3点;若为你的判定结果,则受伤角色改为你选择的一名其他角色.',
            ls_dihuo: '地火',
            ls_dihuo_info: '当你即将失去一张红色牌时,你可将其置于你的武将牌上,称为"火".每当你造成或受到伤害时,你可弃置一枚"火",并进行一次判定:若结果为黑色,你弃置目标角色或伤害来源一张牌;若结果为红色,你摸一张牌.',
            ls_danshou: '胆守',
            ls_danshou_info: '当你需要使用或打出一张基本牌或普通锦囊牌时,你可以观看当前回合角色的手牌,你弃置X张牌,视为使用或打出其中一张牌,若你以此法弃置了装备牌,则重置此技能的发动次数(每回合每种牌名限一次,X为此技能本回合已发动的次数).',
            ls_shefu: '设伏',
            ls_shefu_info: '每回合开始时,你可以记录一次基本牌和锦囊牌的名称,称为<伏兵>.当其他角色使用手牌时,你可以移去一个记录名称相同的<伏兵>并可视为使用此<伏兵>,此牌无效.其本回合所有技能失效.',
            ls_benyu: '贲育',
            ls_benyu_info: '当你受到伤害后,你可以选择一项:1.摸X张牌;2.记录X次<伏兵>.(X为你与伤害来源手牌数之差)',
            ls_zhishi: '治世',
            ls_zhishi_info: '一名角色发动武将牌上的技能后,你可以令其此技能失效直到本回合结束,其摸X张牌(X为其已失效技能数+1).',
            ls_jianxiong: '奸雄',
            ls_jianxiong_info: '当你受到伤害后,你可以弃置一张牌并获得伤害来源武将牌上的一个技能直到你的下个回合结束.',
            ls_shuixing: '水形',
            ls_shuixing_info: '转换技,阳:若你使用的上一张非装备牌为非转化牌,你可以将一张牌当作此牌使用或打出;阴:若上一张指定你为目标的非装备牌为非伤害牌,你可以将一张牌当作此牌使用或打出.当你造成伤害后,若此技能状态为阴,你可以摸一张牌并转换此技能;当你于一回合内首次受到伤害后,你可以回复一点体力并转换此技能.',
            ls_cujin: '殂劲',
            ls_cujin_info: '锁定技,当你使用一张带有伤害标签的牌时,此牌的基础伤害+X(X为你本轮转换【水形】的次数).你因此牌造成伤害后,你须受到一点伤害或减少一点体力上限.',
            ls_tengnuo: '腾挪',
            ls_tengnuo_info: '锁定技,①当其他角色使用的指定你为目标的牌结算完成后,若你未因此牌受到过伤害,其他角色计算与你的距离+1.②当你使用的牌结算完成后,若你未因此牌造成过伤害,其他角色计算与你的距离-1.③当攻击范围内含有你的角色数变化后,你摸X张牌.(X为变化人数)',
            ls_jieli: '借力',
            ls_jieli_info: '你可以将场上的一张牌当作【杀】或【闪】使用或打出,以此法失去牌的角色摸一张牌.',
            ls_chandou: '缠斗',
            ls_chandou_info: '锁定技,当你于回合外发动【腾挪】①/【腾挪】②后,若当前回合角色与你的距离为1,直到回合结束,其无法使用牌指定你以外的角色为目标直到其与你的距离大于1.',
            ls_tandang: '坦荡',
            ls_tandang_info: '当你使用牌或成为其他角色使用牌的目标时,你可以选择一项:1.展示此牌,令此牌不可被未明置牌抵消;2.展示一张未明置的手牌,若此牌与使用牌类型相同,取消使用牌的全部目标.',
            ls_mingwang: '名望',
            ls_mingwang_info: '一名角色使用的明置牌结算完成后,若你没有与此牌同名的未明置牌,你可以摸一张牌.',
            ls_futu: '复土',
            ls_futu_info: '每回合限一次,当你使用的明置牌进入弃牌堆后,你可以收回此牌,且此牌无法使用直到你展示此牌.',
            ls_chenmou: '沉谋',
            ls_chenmou_info: '锁定技,当你受到伤害时,若你有未使用过的类型的牌,你须使用一张本回合未使用过的类型的牌并防止此次伤害.',
            ls_guanzhi: '冠智',
            ls_guanzhi_info: '每轮限一次,你可以把一张牌当作一张当前回合角色使用过的基本牌或普通锦囊牌使用或打出.若你以此法转化牌的字数大于使用的牌,你摸一张牌;否则本技能此回合失效.你的手牌上限+X(X为此技能每轮可使用次数)',
            ls_dongxin: '洞心',
            ls_dongxin_info: '一名角色使用转化牌指定目标后,你可以观看此牌的使用者或目标之一的手牌,将其中一种类型的所有牌标记为<洞心>.一名角色失去最后的<洞心>牌时,【冠智】的可使用次数+1.',
            ls_xiuyan: '修堰',
            ls_xiuyan_info: '锁定技,游戏开始时,所有角色视为连通在一条江河上.江河上的角色不因【修堰】而累计摸两张牌后,与其相邻的角色各摸一张牌.每名角色的回合开始时,其可以选择一项:①若其未装备【堰坝】,修筑【堰坝】;②摧毁最近的【堰坝】.',
            ls_juedi: '决堤',
            ls_juedi_info: '锁定技,当有【堰坝】被修筑时,你摸X张牌,【堰坝】被摧毁时,你对与其相邻的角色共造成X点伤害,且每名角色至多因此受到1点伤害.(X为与其相邻的无【堰坝】人数)',
            ls_qianjie: '谦节',
            ls_qianjie_info: '锁定技,你的武将牌始终为初始状态;当你造成/受到伤害时,你可以改为修筑/摧毁【堰坝】.',
            ls_yucan: '玉惨',
            ls_yucan_info: '锁定技,与你距离为1的其他角色成为非红色牌的唯一目标时,若你不为此牌的使用者,你摸一张牌并成为此牌的目标;当你受到伤害后,你展示牌堆顶三张牌并获得其中与造成伤害牌颜色不同的牌,伤害来源获得剩余的牌.',
            ls_luohong: '落红',
            ls_luohong_info: '每轮限两次,一名角色弃置红色牌时,你可以使用弃置牌中的一张,选择一项:①视为该角色对一名与你距离为1的其他角色使用一张【杀】,此【杀】造成伤害时,其回复1点体力;②你弃置两张牌,与其各摸两张牌.',
            ls_wyucan: '玉惨',
            ls_wyucan_info: "游戏开始时,你选择一名其他角色.每回合限一次,当其一次性<span class='bluetext'>失去/获得</span>至少<span class='firetext'>两张</span>牌时,你可以与其<span class='bluetext'>各摸/弃置</span>一张牌;若这两张牌的类型:相同,<span class='greentext'>你修改一次【玉惨】</span>;不同,<span class='yellowtext'>你可以视为使用其中一张牌</span>.",
            ls_huachou: '花愁',
            ls_huachou_info: "<span class='bluetext'>每回合限一次</span>,当一张非转化牌不因【花愁】而进入处理区时,你可以根据此牌类型执行对应效果:基本,<span class='firetext'>选择一张手牌替换之</span>;锦囊,<span class='greentext'>你修改一次【花愁】</span>;装备,<span class='yellowtext'>你可以弃置一张牌并对当前回合角色造成1点伤害</span>.",
            ls_ziya: '姿雅',
            ls_ziya_info: '锁定技,你的手牌上限改为已损失体力值.每轮游戏开始时,你将手牌补至手牌上限.一名角色的出牌阶段开始时,若你手牌数大于其,你交给其一张牌增加一点体力上限.当你进入濒死状态时,若你的体力上限大于2,你减少两点体力上限并回复体力至1点.',
            ls_zhengrong: '峥嵘',
            ls_zhengrong_info: '锁定技,你的体力上限变化后,你视为使用一张你未以此法使用过的牌.当你使用一张非装备牌时,若牌堆或弃牌堆中没有与此牌牌名相同的牌,你回复1点体力或摸两张牌.',
            ls_fugui: '富贵出身',
            ls_fugui_info: '每回合限X+1次,你使用非伤害牌后可以进行一次判定,若判定结果与此牌类型不同,你获得判定牌.(X为你已损失的体力值且至少为1)',
            ls_duocai: '多财善贾',
            ls_duocai_info: '每回合限X次,你于摸牌阶段外不因此技能获得牌后,你可以重铸之,根据重铸牌的花色视为使用一张:♥️️【洞烛先机】;♦️️【出其不意】;♣️️【逐近弃远】;♠️️【水淹七军】.(X为你已损失的体力值且至少为1)',
            ls_lingdong: '灵动',
            ls_lingdong_info: '锁定技,①你使用具有指定标签的牌时,视为发动对应攻击:<造成伤害>,重攻击;<指定其他角色为目标>,轻攻击;其他,闪避.②你以指定攻击顺序使用牌后,触发对应技能.③若你使用的牌与上一张攻击类型:相同,不受次数限制;不同,摸一张牌.',
            ls_xunying: '迅影',
            ls_xunying_info: '锁定技,你不因【影闪】而发动<闪避>后,获得一个虚影(已拥有虚影则改为获得1点能量),虚影在你成为其他角色使用牌的目标时破碎并令此牌对你无效.一名角色的结束阶段,若你拥有虚影,你失去虚影并获得1点能量.(能量至多为5)',
            ls_yingshan: '影闪',
            ls_yingshan_info: '锁定技,①出牌阶段你可以消耗1点能量,视为发动<影>攻击(可以代替轻/重攻击来进行技能判定).②你可以消耗1点能量,视为使用或打出一张【闪】.',
            Is_duoshi: '度势',
            Is_duoshi_info: '每回合每项限一次.当你成为其他角色使用牌指定的唯一目标时,或你的出牌阶段限一次,你可以发动<知己知彼>、<诱敌深入>或<静待良机>中的一个(若已损失体力值大于3则改为两个),令其横置.(知己知彼:观看目标角色的手牌并获得其一张红色牌.诱敌深入:弃置一张牌抵消此牌的效果.该角色需继续对你使用【杀】直到对你造成伤害为止,否则你对其造成1点伤害.静待良机:摸一张牌.此牌对你无效并将此牌置于其武将牌上,其的下个出牌阶段开始时,其对你使用此牌且需合法.)',
            Is_cangqi: '藏器',
            Is_cangqi_info: '你因<度势>而受到伤害后,你将造成伤害的牌置于武将牌上,称为<器>.当你因<度势>造成伤害时,你可改为横置目标角色,弃置所有<器>并造成等量火焰伤害,若已横置则造成伤害＋1.',
            Is_duoshi_damaged: 'Is_duoshi_damaged',
            Is_duoshi_damaged_info: '',
            ls_Eruda_huangen: '皇恩',
            ls_Eruda_huangen_info: '锁定技,当你进入濒死状态时,若牌堆中有A点数的牌,你获得一张并将体力回复至1点.你的拼点牌亮出后,你的点数增加X(X为牌堆中剩余A点牌的数量).你的A点牌不记入手牌上限.',
            ls_Eruda_zhaotao: '詔讨',
            ls_Eruda_zhaotao_info: '出牌阶段限X次,你可与至多三名其他角色拼点,此次拼点根据你赢的次数,依次视为使用:至少0次,【火攻】;至少1次,【决斗】;2次或以上,雷【杀】.',
            Erudadiy_kuanghan: '匡汉',
            Erudadiy_kuanghan_info: '限定技,当牌堆中无A点牌时,你可以将手牌、弃牌堆中的A点牌重新洗入牌堆,本回合有A点牌的其他角色非锁定技失效,视为对一名其他角色使用X张【雷杀】(无距离和次数限制,若目标有A点牌则无视防具).若击杀目标,则重置此技能(每轮限一次).',
            ls_Erudadiy_zongsi: '忠嗣',
            ls_Erudadiy_zongsi_info: '锁定技,当你造成伤害或受到伤害时,摸2张牌.因此获得牌时,若你有以此法获得的牌,则需弃置X牌,下次发动技能时,摸牌数+X(X为此法获得且仍在手牌区的牌数且至多为5).',
            ls_guanxing: '观星',
            ls_guanxing_info: '准备阶段,你可以观看牌堆顶的7张牌(你每损失1点体力,便少看一张牌,至少观看2张牌),你可以将这些牌以任意顺序置于牌堆顶或牌堆底.当你的延时锦囊判定失败时,你回复一点体力.',
            ls_kongcheng: '空城',
            ls_kongcheng_info: '锁定技,若你的手牌数为0,则你不是其他角色使用伤害牌的合法目标.其他角色对你使用的伤害牌:红色视为【兵临城下】;黑色视为【兵粮寸断】(若已有则不可选中).',
            ls_laohui: '勞徽',
            ls_laohui_info: '出牌阶段限七次,你可以将一张红色牌当做【兵临城下】(判定结果不为◆则受到1点伤害)或黑色牌当做【兵粮寸断】对自己使用,本回合你的攻击范围+1,并视为使用一张无次数限制的【杀】.',
            ls_zhengxian: '铮弦',
            ls_zhengxian_info: '当你造成伤害后,你可以将你或其的一张判定牌移动至对方判定区.',
            ls_lizheng: '理政',
            ls_lizheng_info: '回合开始时,你可以重新分配你区域内的所有牌(牌数不变).锁定技,当你两个区域的牌数为0时,你将牌堆顶的一张牌置于其中一个区域.',
            ls_qingbi: '清弊',
            ls_qingbi_info: '你可以使用你区域内的所有牌.你可以将一个区域内的一张牌当做另一个区域内的一张牌使用或打出(每回合每种牌名限一次).',
            ls_qinxue: '勤学',
            ls_qinxue_info: '出牌阶段限一次,你可以交给其他角色一张牌,其选择:1.此阶段结束时,你将手牌摸至与其相同;2.下个准备阶段开始时,你失去一点体力并获得三张副类不同的牌.若你本回合成功发动<博图>,则不需失去体力.',
            ls_keji: '克己',
            ls_keji_info: '锁定技,你于出牌阶段获得的牌,本回合不记入手牌上限.若你于弃牌阶段未弃置牌,弃牌阶段结束时,你可以弃置至少一张牌并回复一点体力.',
            ls_botu: '博图',
            ls_botu_info: '你的回合结束时,若本回合你使用过三种类型的牌或有四种花色的牌进入弃牌堆,你可进行一个额外的准备阶段、出牌阶段或弃牌阶段.',
            ls_liuli: '琉璃',
            ls_liuli_info: '锁定技,你受到的伤害-X,本回合下次发动时X-1.当你受到至少1点伤害后,你对伤害来源使用所有可使用的手牌( X为手牌中伤害牌数量).',
            ls_taoguang: '韬光',
            ls_taoguang_info: '锁定技,当你受到伤害时,你摸一张牌.',
            ls_suiren: '碎刃',
            ls_suiren_info: '出牌阶段限一次, 你可以弃置任意张相同颜色的牌,指定一名其他角色并进行一次判定: 若判定结果与弃牌颜色相同,则造成弃牌数次1点伤害并摸一张牌;若颜色不同,摸弃牌数张牌,并造成1点伤害.',
            ls_dengfeng: '登峰',
            ls_dengfeng_info: '当你失去一张基本牌时或受到伤害后,你可以将本回合进入弃牌堆的一张牌蓄谋.',
            ls_weibi: '危壁',
            ls_weibi_info: '你可以将蓄谋牌如手牌般使用或打出(每回合每种牌名限一次).当你因使用而失去最后一张判定区内的牌时,你回复一点体力,否则你受到一点伤害.',
        },
    };
    for (var i in lsty.character) {
        lsty.character[i][4].push('ext:裸睡天依/image/character/' + i + '.jpg');
    }
    lib.config.characters.add('lsty');
    lib.config.all.characters.add('lsty');
    lib.translate['lsty_character_config'] = '裸睡天依';
    return lsty;
});

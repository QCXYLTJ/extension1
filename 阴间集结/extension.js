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
        name: '阴间集结',
        content(config, pack) {
            // ---------------------------------------武将评级------------------------------------------//
            if (lib.rank) {
                lib.rank.rarity.legend.addArray(['new_yangbiao', 'xinshen_guojia', 'xinzhouyi', 'xinshen_xunyu', 'xinsp_duyu', 'xinfanyufeng', 'xinsunhao', 'xinyangwan', 'xinhuangchengyan', 'xinyanghuiyu', 'xinruanyu', 'xinxincaochun', 'xinshen_guanyu', 'xinhuangfusong', 'xinzhangchangpu', 'xinxinre_zhuran', 'xinmajun', 'xinpanshu', 'xinhuaman', 'xinchengyu', 'xinzhangqiying', 'zhangqiying', 'xinjiakui', 'xinxin_baosanniang', 'xinjsp_pangtong', 'new_relingtong', 'xinshen_ganning', 'xinxurong', 'xincaoying', 'new_xinshenzhaoyun', 'new_shenzhugeliang', 'new_shencaocao', 'new_xinxushao', 'yin_xinguozhao', 're_xinliuzan', 'yin_xinyuantanyuanshang', 'new_zhangrang', 'new_xinwolongfengchu', 'new_spxiahoushi', 'new_xsimahui', 'new_sguansuo', 'new_xshencaopi', 'xinpuyuan', 'xinzhaoxiang', 'xinwanglang', 'xinnanhualaoxian', 'xinluotong', 'xinliubian', 'xinshen_lvbu']);
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                var QQQ = {
                    name: '阴间集结',
                    connect: true,
                    character: {
                        new_yangbiao: ['male', 'qun', 8, ['new_rangjie', 'new_yizheng', 'new_zhaohan'], []],
                        new_relingtong: ['male', 'wu', 8, ['new_xuanfeng', 'new_yongjin'], []],
                        new_xinshenzhaoyun: ['male', 'shen', 8, ['new_relonghun', 'new_xinjuejing'], []],
                        new_shenzhugeliang: ['male', 'shen', 8, ['new_qixing', 'new_dawu', 'new_kuangfeng'], []],
                        new_shencaocao: ['male', 'shen', 8, ['new_xguixin', 'new_xfeiying'], []],
                        new_xinxushao: ['male', 'qun', Infinity, ['new_pingjian'], []],
                        yin_xinguozhao: ['female', 'wei', 8, ['new_pianchong', 'new_zunwei'], []],
                        re_xinliuzan: ['male', 'wu', 10, ['new_xinrefenyin', 'new_xinliji'], []],
                        yin_xinyuantanyuanshang: ['male', 'qun', 10, ['new_neifa'], []],
                        new_zhangrang: ['male', 'qun', 8, ['new_xtaoluan'], []],
                        new_spxiahoushi: ['female', 'shu', 8, ['xin_yanyu', 'xin_qiaoshi'], []],
                        new_xinwolongfengchu: ['male', 'shu', 8, ['xin_youlong', 'xin_luanfeng'], []],
                        new_xsimahui: ['male', 'qun', 8, ['xin_jianjie', 'xin_chenghao', 'xin_yinshi', 'xin_mingshi'], []],
                        new_sguansuo: ['male', 'shu', 8, ['new_zhengnan', 'new_xiefang'], []],
                        new_xshencaopi: ['male', 'shen', 8, ['xin_chuyuan', 'xin_dengji'], []],
                        xinpuyuan: ['male', 'shu', 8, ['xinpytianjiang', 'xinpyzhuren', 'xinduanzao'], []],
                        xinzhaoxiang: ['female', 'shu', 8, ['xinrefanghun', 'xinrefuhan'], []],
                        xinwanglang: ['male', 'wei', 8, ['xinregushe', 'xinrejici'], []],
                        xinnanhualaoxian: ['male', 'qun', 99, ['xinyufeng', 'xintianshu', 'xingongxiu', 'xinjinghe', 'newxinxianfa', 'shen_shentong', 'nhhuashen'], []],
                        xinluotong: ['male', 'wu', 8, ['xinqinzheng'], []],
                        xinliubian: ['male', 'qun', 8, ['xinshiyuan', 'xindushi', 'xinyuwei'], []],
                        xinshen_lvbu: ['male', 'shen', 12, ['xinbaonu', 'xinkuangbao', 'xinol_wuqian', 'xinol_shenfen', 'xinchituma'], []],
                        xincaoying: ['female', 'wei', 8, ['yin_lingren', 'yin_fujian'], []],
                        xinxurong: ['male', 'qun', 8, ['yin_xionghuo', 'yin_shajue'], []],
                        xinshen_ganning: ['male', 'shen', 10, ['xindrlt_poxi', 'xindrlt_jieying', 'xinrepojun'], [], []],
                        xinjsp_pangtong: ['male', 'qun', 9, ['xinpt_manjuan', 'xinpt_zuixiang'], []],
                        xinxin_baosanniang: ['female', 'shu', 8, ['xindecadewuniang', 'xindecadexushen'], []],
                        xinmajun: ['male', 'wei', 8, ['yin_jingxie1', 'xinqiaosi', 'xinchuangzao', 'xinjueshi'], []],
                        xinjiakui: ['male', 'wei', 8, ['xinzhongzuo', 'xinnewwanlan'], []],
                        xinzhangqiying: ['female', 'qun', 9, ['yin_falu', 'yin_dianhua', 'yin_zhenyi'], []],
                        xinchengyu: ['male', 'wei', 9, ['new_shefu', 'new_benyu'], []],
                        xinhuaman: ['female', 'shu', 9, ['xinhmmanyi', 'xinmansi', 'xinsouying', 'xinzhanyuan'], []],
                        xinpanshu: ['female', 'wu', 9, ['xinweiyi', 'xinjinzhi', 'xinzhiren', 'xinyaner'], []],
                        xinzhangchangpu: ['female', 'wei', 8, ['xinyanjiao', 'xinxingshen'], []],
                        xinxinre_zhuran: ['male', 'wu', 10, ['xinxindanshou'], []],
                        xinhuangfusong: ['male', 'qun', 12, ['xinxinfenyue'], []],
                        xinshen_guanyu: ['male', 'shen', 999, ['xinnew_wuhun', 'xinwushen', 'xinmengmo'], []],
                        xinyanghuiyu: ['female', 'wei', 9, ['xinhongyi', 'xinrequanfeng', 'xinciwei'], []],
                        xinxincaochun: ['male', 'wei', 10, ['xin_xinshanjia'], []],
                        xinruanyu: ['male', 'wei', 8, ['xin_xingzuo', 'xin_miaoxian'], []],
                        xinsp_duyu: ['male', 'qun', 9, ['xinspwuku', 'xinspmiewu'], []],
                        xinhuangchengyan: ['male', 'qun', 9, ['xinguanxu', 'xinyashi'], []],
                        xinyangwan: ['female', 'shu', 9, ['xinyouyan', 'xinzhuihuan'], []],
                        xinsunhao: ['male', 'wu', 15, ['xinrecanshi', 'xinrechouhai', 'xinguiming'], []],
                        xinfanyufeng: ['female', 'qun', 9, ['xinbazhan', 'xinjiaoying'], []],
                        xinshen_xunyu: ['male', 'shen', 9, ['xintianzuo', 'xinlingce', 'xindinghan'], []],
                        xinshen_guojia: ['male', 'shen', 10, ['xinreshuishi', 'xinstianyi', 'xinresghuishi'], []],
                        xinzhouyi: ['female', 'wu', 9, ['xinzhukou', 'xinmengqing'], []],
                    },
                    skill: {
                        new_rangjie: {
                            audio: ['rangjie', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            group: 'n_rangjie',
                            content() {
                                event.insert(lib.skill.n_rangjie.content, { player: player });
                            },
                            subSkill: {
                                card: {
                                    popup: false,
                                    content() {
                                        'step 0';
                                        var list = [];
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            var type = get.type(name);
                                            if (name == 'sha') {
                                                list.push([type, '', 'sha']);
                                                list.push([type, '', 'sha', 'fire']);
                                                list.push([type, '', 'sha', 'thunder']);
                                                list.push([type, '', 'sha', 'ice']);
                                            } else if (get.type(name) == 'trick') list.push([type, '', name]);
                                            else if (get.type(name) == 'basic') list.push([type, '', name]);
                                            else if (get.type(name) == 'equip') list.push([type, '', name]);
                                        }
                                        if (!list.length) {
                                            event.finish();
                                            return;
                                        }
                                        player
                                            .chooseButton(['让节:选择至多五种牌,从牌堆中获得一张与之牌名属性均相同的牌', [list, 'vcard']], [1, 5])
                                            .set('ai', function (button) {
                                                var card = { name: button.link[2], nature: button.link[3] };
                                                return _status.event.player.getUseValue(card);
                                            })
                                            .set('filterButton', function (button) {
                                                var n = [];
                                                for (var c = 0; c < ui.cardPile.childNodes.length; c++) {
                                                    if (ui.cardPile.childNodes[c].name == button.link[2]) {
                                                        n.push(ui.cardPile.childNodes[c].name);
                                                    }
                                                    if (ui.cardPile.childNodes[c].nature == button.link[3]) {
                                                        n.push(ui.cardPile.childNodes[c].nature);
                                                    }
                                                }
                                                if (n.includes(button.link[2]) && n.includes(button.link[3])) return true;
                                            });
                                        ('step 1');
                                        if (!result.links.length) {
                                            event.finish();
                                            return;
                                        }
                                        var cards = [];
                                        for (var i = 0; i < result.links.length; i++) {
                                            var card = get.cardPile(function (card) {
                                                return !cards.includes(card) && card.name == result.links[i][2] && card.nature == result.links[i][3];
                                            });
                                            if (card) {
                                                cards.push(card);
                                            }
                                        }
                                        if (cards.length) {
                                            player.directgain(cards);
                                            game.updateRoundNumber();
                                        }
                                    },
                                },
                                move: {
                                    popup: false,
                                    content() {
                                        'step 0';
                                        var next = player.chooseTarget(2, function (card, player, target) {
                                            if (ui.selected.targets.length) {
                                                var from = ui.selected.targets[0];
                                                var js = from.getCards('j');
                                                for (var i = 0; i < js.length; i++) {
                                                    if (_status.event.nojudge) break;
                                                    if (target.canAddJudge(js[i])) return true;
                                                }
                                                if (target.isMin()) return false;
                                                var es = from.getCards('e');
                                                for (var i = 0; i < es.length; i++) {
                                                    if (target.isEmpty(get.subtype(es[i]))) return true;
                                                }
                                                if (from.getCards('h').length) return true;
                                                return false;
                                            } else {
                                                var range = 'hej';
                                                if (_status.event.nojudge) range = 'he';
                                                return target.countCards(range) > 0;
                                            }
                                        });
                                        next.set('nojudge', event.nojudge || false);
                                        next.set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            var sgnatt = get.sgn(att);
                                            if (ui.selected.targets.length == 0) {
                                                if (att > 0) {
                                                    if (
                                                        !_status.event.nojudge &&
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
                                            }
                                            var es = ui.selected.targets[0].getCards('e');
                                            var i;
                                            var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                                            for (var i = 0; i < es.length; i++) {
                                                if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
                                                    return Math.abs(att);
                                                }
                                            }
                                            if (
                                                i == es.length &&
                                                (_status.event.nojudge ||
                                                    !ui.selected.targets[0].countCards('j', function (card) {
                                                        return target.canAddJudge(card);
                                                    }) ||
                                                    att2 <= 0)
                                            ) {
                                                return 0;
                                            }
                                            return -att * att2;
                                        });
                                        next.set('multitarget', true);
                                        next.set('targetpromp', ['被移走', '移动目标']);
                                        next.set('prompt', '移动场上的一张牌');
                                        ('step 1');
                                        event.result = result;
                                        if (result.bool) {
                                            player.line2(result.targets, 'green');
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        ('step 3');
                                        if (targets.length == 2) {
                                            player
                                                .choosePlayerCard(
                                                    'hej',
                                                    'visible',
                                                    true,
                                                    function (button) {
                                                        var player = _status.event.player;
                                                        var targets0 = _status.event.targets0;
                                                        var targets1 = _status.event.targets1;
                                                        if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                                                            if (get.position(button.link) == 'j') return 12;
                                                            if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
                                                            return 0;
                                                        } else {
                                                            if (get.position(button.link) == 'j') return -10;
                                                            return get.value(button.link) * get.effect(targets1, button.link, player, targets1);
                                                        }
                                                    },
                                                    targets[0]
                                                )
                                                .set('nojudge', false)
                                                .set('targets0', targets[0])
                                                .set('targets1', targets[1])
                                                .set('filterButton', function (button) {
                                                    var targets1 = _status.event.targets1;
                                                    if (get.position(button.link) == 'j') {
                                                        if (_status.event.nojudge) return false;
                                                        return targets1.canAddJudge(button.link);
                                                    } else if (get.position(button.link) == 'e') {
                                                        return targets1.isEmpty(get.subtype(button.link));
                                                    } else if (get.position(button.link) == 'h') return true;
                                                });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 4');
                                        if (result.bool && result.links.length) {
                                            var link = result.links[0];
                                            if (get.position(link) == 'e') {
                                                event.targets[1].equip(link);
                                            } else if (link.viewAs) {
                                                event.targets[1].addJudge({ name: link.viewAs }, [link]);
                                            } else if (get.position(link) == 'j') {
                                                event.targets[1].addJudge(link);
                                            } else if (get.position(link) == 'h') {
                                                event.targets[1].gain(link, 'giveAuto', 'gain2');
                                            }
                                            event.targets[0].$give(link, event.targets[1], false);
                                            game.log(event.targets[0], '的', link, '被移动给了', event.targets[1]);
                                        }
                                    },
                                    sourceSkill: 'new_rangjie',
                                },
                            },
                        },
                        n_rangjie: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'damageEnd') event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                if (event.count) event.count--;
                                var choiceList = ['获得一至五张指定牌名的牌'];
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countCards('hej');
                                    })
                                )
                                    choiceList.push('移动场上的五张牌');
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('rangjie'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var num = 0;
                                        var list = game.filterPlayer(function (target) {
                                            if (target != player) num += target.countCards('hej');
                                        });
                                        if (num >= 2) return 1;
                                        return 0;
                                    });
                                ('step 2');
                                if (result.control == 'cancel2') event.goto(3);
                                else {
                                    player.draw();
                                    if (result.index == 0) {
                                        event.insert(lib.skill.new_rangjie.subSkill.card.content, { player: player });
                                    } else {
                                        for (var i = 0; i < 5; i++) {
                                            event.insert(lib.skill.new_rangjie.subSkill.move.content, { player: player });
                                        }
                                    }
                                }
                                ('step 3');
                                if (event.count > 0) event.goto(1);
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
                        },
                        new_yizheng: {
                            audio: ['yizheng', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canCompare(current);
                                });
                            },
                            filterTarget(card, player, current) {
                                return player.canCompare(current);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.skip('phaseZhunbeiBefore');
                                    target.skip('phaseDraw');
                                    target.skip('phaseUse');
                                    target.skip('phaseJieshuBefore');
                                    target.addTempSkill('new_yizheng2', { player: ['phaseZhunbeiBeforeSkipped', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseJieshuBeforeSkipped'] });
                                } else {
                                    target.loseMaxHp();
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.skipList.includes('phaseDraw') || target.hasSkill('pingkou')) return 0;
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
                        },
                        new_zhaohan: {
                            audio: ['zhaohan', 2],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                var next = player.chooseTarget('是否发动【昭汉】？');
                                next.set('prompt2', '你的准备阶段开始时,你可选择一名角色,该角色每个回合开始时减少一点体力上限.');
                                next.set('ai', function (target) {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.hasSkill('new_zhaohan_x') || target == _status.event.player) att = 0;
                                    return -att;
                                });
                                ('step 2');
                                if (result.bool) {
                                    result.targets[0].addSkill('new_zhaohan_x');
                                }
                            },
                            subSkill: {
                                x: {
                                    popup: false,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    content() {
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('new_zhaohan');
                                        });
                                        for (var i = 0; i < list.length; i++) {
                                            list[i].gainMaxHp();
                                            list[i].recover();
                                        }
                                        for (var i = 0; i < list.length; i++) {
                                            player.loseMaxHp();
                                        }
                                    },
                                },
                            },
                        },
                        xinreshuishi: {
                            audio: 'shuishi',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            usable: 3,
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('xinreshuishi');
                                        if (evt && evt.suits && evt.suits.includes(result.suit)) return 0;
                                        return 1;
                                    })
                                    .set('callback', function () {
                                        event.parent.orderingCards.remove(event.judgeResult.card);
                                    }).judge2 = function (result) {
                                        return result.bool ? true : false;
                                    };
                                ('step 2');
                                event.cards.push(result.card);
                                if (result.bool) {
                                    event.suits.push(result.suit);
                                    player.gainMaxHp();
                                    player.recover();
                                    event.goto(1);
                                } else {
                                    cards = cards.filterInD();
                                    if (cards.length)
                                        player.chooseTarget('将' + get.translation(cards) + '交给一名角色', true).set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target) / Math.sqrt(1 + target.countCards('h'));
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            return att;
                                        });
                                    else event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    target.gain(cards, 'gain2');
                                }
                                ('step 4');
                                if (target.isMaxHandcard()) player.gainMaxHp();
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xinstianyi: {
                            audio: ['stianyi', 2],
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.getAllHistory('damage').length == 0;
                                });
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('xinstianyi');
                                player.gainMaxHp(2);
                                player.recover();
                                ('step 1');
                                player.chooseTarget(true, '令一名角色获得技能〖佐幸〗').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.storage.xinzuoxing = player;
                                    target.addSkill('xinzuoxing');
                                }
                            },
                            derivation: 'xinzuoxing',
                        },
                        xinzuoxing: {
                            audio: ['zuoxing', 2],
                            charlotte: true,
                            fixed: true,
                            trigger: { player: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                var target = player.storage.xinzuoxing;
                                return target && target.isAlive() && target.maxHp > 1;
                            },
                            logTarget(event, player) {
                                return player.storage.xinzuoxing;
                            },
                            check(event, player) {
                                var target = player.storage.xinzuoxing;
                                if (get.attitude(player, target) <= 0) return true;
                                return target.maxHp > 3 && !player.hasJudge('lebu');
                            },
                            content() {
                                player.storage.xinzuoxing.gainMaxHp();
                                player.addTempSkill('xinzuoxing2');
                            },
                        },
                        xinzuoxing2: {
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'trick' && event.filterCard({ name: i }, player, event)) list.push(['锦囊', '', i]);
                                    }
                                    return ui.create.dialog('佐幸', [list, 'vcard']);
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        filterCard: () => false,
                                        selectCard: -1,
                                        popname: true,
                                        precontent() { },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: { order: 1, result: { player: 1 } },
                        },
                        xinresghuishi: {
                            audio: 'sghuishi',
                            usable: 1,
                            charlotte: true,
                            fixed: true,
                            inherit: 'sghuishi',
                            filterTarget: true,
                            content() {
                                'step 0';
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                });
                                if (player.maxHp >= game.players.length && list.length) {
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else player.chooseControl(list).set('prompt', '选择一个觉醒技,令' + get.translation(target) + '可无视条件发动该技能');
                                } else {
                                    target.draw(4);
                                    event.goto(2);
                                }
                                ('step 1');
                                target.storage.xinresghuishi = result.control;
                                target.markSkill('xinresghuishi');
                                var info = lib.skill[result.control];
                                if (info.filter && !info.charlotte && !info.xinsghuishi_filter) {
                                    info.xinsghuishi_filter = info.filter;
                                    info.filter = function (event, player) {
                                        if (player.storage.xinresghuishi) return true;
                                        return this.xinsghuishi_filter.apply(this, arguments);
                                    };
                                }
                                ('step 2');
                                player.gainMaxHp(2);
                            },
                            intro: { content: '发动【$】时无视条件' },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if ((target != player && player.hasUnknown()) || player.maxHp < (player.getDamagedHp() > 1 ? 5 : 6)) return 0;
                                        if (
                                            target == player &&
                                            player.hasSkill('xinresghuishi') &&
                                            game.hasPlayer(function (current) {
                                                return current.getAllHistory('damage').length == 0;
                                            })
                                        )
                                            return 4;
                                        var list = target.getSkills(null, false, false).filter(function (skill) {
                                            var info = lib.skill[skill];
                                            return info && info.juexingji && !target.awakenedSkills.includes(skill);
                                        });
                                        if (list.length || target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        return 4;
                                    },
                                },
                            },
                        },
                        xintianzuo: {
                            audio: ['tianzuo', 2],
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return !lib.inpile.includes('qizhengxiangsheng');
                            },
                            content() {
                                game.addGlobalSkill('xintianzuo_global');
                                for (var i = 2; i < 13; i++) {
                                    var card = game.createCard2('qizhengxiangsheng', i % 16 ? 'club' : 'spade', i);
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.broadcastAll(function () {
                                    lib.inpile.add('qizhengxiangsheng');
                                });
                                game.updateRoundNumber();
                            },
                            group: 'xintianzuo_rewrite',
                            subSkill: {
                                global: {
                                    trigger: { player: 'useCardToPlayered' },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.card.name == 'qizhengxiangsheng';
                                    },
                                    content() {
                                        'step 0';
                                        var target = trigger.target;
                                        event.target = target;
                                        player
                                            .chooseControl('奇兵', '正兵')
                                            .set('prompt', '请选择' + get.translation(target) + '的标记')
                                            .set(
                                                'choice',
                                                (function () {
                                                    var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
                                                    var e2 = 0;
                                                    if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
                                                    var es = target.getGainableCards(player, 'e');
                                                    if (es.length)
                                                        e2 = Math.min(
                                                            e2,
                                                            (function () {
                                                                var max = 0;
                                                                for (var i of es) max = Math.max(max, get.value(i, target));
                                                                return -max / 4;
                                                            })()
                                                        );
                                                    if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
                                                    if (e1 < e2) return '奇兵';
                                                    return '正兵';
                                                })()
                                            )
                                            .set('ai', function () {
                                                return _status.event.choice;
                                            });
                                        ('step 1');
                                        var map = trigger.parent.customArgs,
                                            id = target.playerid;
                                        if (!map[id]) map[id] = {};
                                        map[id].qizheng_name = result.control;
                                    },
                                },
                                rewrite: {
                                    audio: 'tianzuo',
                                    trigger: { global: 'useCardToTargeted' },
                                    filter(event, player) {
                                        return event.card.name == 'qizhengxiangsheng';
                                    },
                                    logTarget: 'target',
                                    prompt2: '观看其手牌并修改<奇正相生>标记',
                                    content() {
                                        'step 0';
                                        var target = trigger.target;
                                        event.target = target;
                                        if (player != target && target.countCards('h') > 0) player.viewHandcards(target);
                                        player
                                            .chooseControl('奇兵', '正兵')
                                            .set('prompt', '请选择' + get.translation(target) + '的标记')
                                            .set(
                                                'choice',
                                                (function () {
                                                    var shas = target.getCards('h', 'sha'),
                                                        shans = target.getCards('h', 'shan');
                                                    var e1 = 1.5 * get.sgn(get.damageEffect(target, player, target));
                                                    var e2 = 0;
                                                    if (target.countGainableCards(player, 'h') > 0 && !target.hasSkillTag('noh')) e2 = -1;
                                                    var es = target.getGainableCards(player, 'e');
                                                    if (es.length)
                                                        e2 = Math.min(
                                                            e2,
                                                            (function () {
                                                                var max = 0;
                                                                for (var i of es) max = Math.max(max, get.value(i, target));
                                                                return -max / 4;
                                                            })()
                                                        );
                                                    if (get.attitude(player, target) > 0) {
                                                        if (shas.length >= Math.max(1, shans.length)) return '奇兵';
                                                        if (shans.length > shas.length) return '正兵';
                                                        return e1 > e2 ? '奇兵' : '正兵';
                                                    }
                                                    if (shas.length) e1 = -0.5;
                                                    if (shans.length) e2 = -0.7;
                                                    if (Math.abs(e1 - e2) <= 0.3) return Math.random() < 0.5 ? '奇兵' : '正兵';
                                                    var rand = Math.random();
                                                    if (e1 < e2) return rand < 0.1 ? '奇兵' : '正兵';
                                                    return rand < 0.1 ? '正兵' : '奇兵';
                                                })()
                                            );
                                        ('step 1');
                                        var map = trigger.parent.customArgs,
                                            id = target.playerid;
                                        if (!map[id]) map[id] = {};
                                        map[id].qizheng_name = result.control;
                                        map[id].qizheng_aibuff = get.attitude(player, target) > 0;
                                    },
                                },
                            },
                        },
                        xinlingce: {
                            audio: ['lingce', 2],
                            trigger: { global: 'useCard' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return get.type(event.card, 'equip') != 'equip';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        xindinghan: {
                            audio: ['dinghan', 2],
                            group: 'xindinghan2',
                            trigger: { target: 'useCardToTarget' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                        },
                        xindinghan2: {
                            audio: ['dinghan', 2],
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin', 'dieBefore', 'dying'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        xinrecanshi: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: { player: 'phaseDrawBegin2' },
                            check(event, player) {
                                if (
                                    player.skipList.includes('phaseUse') ||
                                    !player.countCards('h', function (card) {
                                        return get.type(card, 'trick') == 'trick' && player.hasUseTarget(card);
                                    })
                                )
                                    return true;
                                var num =
                                    10 +
                                    game.countPlayer(function (current) {
                                        if (player.hasSkill('xinguiming')) return true;
                                    });
                                return num > 1;
                            },
                            prompt(event, player) {
                                var num =
                                    10 +
                                    game.countPlayer(function (current) {
                                        if (player.hasSkill('xinguiming') && current != player) return true;
                                    });
                                return '残蚀:是否多摸' + get.cnNumber(num) + '张牌？';
                            },
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    game.hasPlayer(function (current) {
                                        if (player.hasSkill('xinguiming') && current != player) return true;
                                    })
                                );
                            },
                            content() {
                                var num =
                                    10 +
                                    game.countPlayer(function (current) {
                                        if (player.hasSkill('xinguiming') && current != player) return true;
                                    });
                                if (num > 0) {
                                    trigger.num += num;
                                }
                                player.addTempSkill('xinrecanshi2');
                            },
                        },
                        xinrecanshi2: {
                            trigger: { player: 'useCard' },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                if (player.countCards('he') == 0) return false;
                                if (event.card.name == 'sha') return true;
                                return get.type(event.card) == 'trick';
                            },
                            autodelay: true,
                            content() {
                                player.draw(2);
                                player.gainMaxHp(2);
                                player.recover(2);
                            },
                        },
                        xinrechouhai: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha'; //QQQ
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                trigger.num += 3;
                            },
                        },
                        xinguiming: {
                            charlotte: true,
                            fixed: true,
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                                targetInRange(card) {
                                    return true;
                                },
                            },
                        },
                        xinyouyan: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            filter(event, player) {
                                if (!event.cards2 || !event.cards2.length) return false;
                                var list = [];
                                for (var i of event.cards2) {
                                    list.add(i.suit);
                                    if (list.length >= lib.suit.length) return false;
                                }
                                return true;
                            },
                            content() {
                                var list = [],
                                    cards = [];
                                for (var i of trigger.cards2) {
                                    list.add(i.suit);
                                }
                                for (var i of lib.suit) {
                                    if (list.includes(i)) continue;
                                    var card = get.cardPile2(function (card) {
                                        return card.suit == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            ai: {
                                effect: {
                                    player_use(card, player, target) {
                                        if (
                                            typeof card == 'object' &&
                                            (!player.getStat('triggerSkill').xinyouyan) &&
                                            player.needsToDiscard() == 1 &&
                                            card.cards &&
                                            card.cards.filter(function (i) {
                                                return get.position(i) == 'h';
                                            }).length &&
                                            !get.tag(card, 'draw') &&
                                            !get.tag(card, 'gain')
                                        )
                                            return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        xinzhuihuan: {
                            audio: 'ext:阴间集结/audio:2',
                            group: 'xinzhuihuan3',
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !current.hasSkill('xinzhuihuan2');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xinzhuihuan'), '令一名角色获得<追还>效果', function (card, player, target) {
                                        return !target.hasSkill('xinzhuihuan2');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target);
                                        if (target.hasSkill('maixie') || target.hasSkill('maixie_defend')) att /= 3;
                                        if (target != player) att /= Math.pow(game.players.length - get.distance(player, target, 'absolute'), 0.7);
                                        return att;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.addTempSkill('xinzhuihuan2', { player: 'phaseBegin' });
                                }
                            },
                        },
                        xinzhuihuan2: {
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            logTarget: 'source',
                            content() {
                                trigger.source.damage(3);
                                trigger.source.chooseToDiscard(Infinity, true, 'he');
                            },
                            mark: true,
                            intro: { content: '当你受到伤害后,你对伤害来源造成3点伤害,其失去所有手牌和装备牌' },
                        },
                        xinzhuihuan3: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            logTarget: 'source',
                            filter: (event, player) => event.source, //QQQ
                            content() {
                                trigger.source.damage(3);
                                trigger.source.chooseToDiscard(Infinity, true, 'he');
                            },
                            intro: { content: '当你受到伤害后,你对伤害来源造成3点伤害,其失去所有手牌和装备牌' },
                        },
                        xinxinfenyue: {
                            group: 'xinxinfenyue2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            audio: 'ext:阴间集结/audio:2',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(event, player, target) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (!result.bool) event.finish();
                                event.num = result.num1;
                                ('step 2');
                                if (num <= 5 && target.countGainableCards(player, 'he') > 0) player.gainPlayerCard(target, 'he', true);
                                player.draw(2);
                                ('step 3');
                                if (num <= 9) {
                                    var card = get.cardPile2(function (x) {
                                        return x.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                    target.damage(2);
                                }
                                ('step 4');
                                if (num <= 13) {
                                    var card = { name: 'sha', nature: 'thunder' };
                                    if (player.canUse(card, target, false)) player.useCard(card, target, false);
                                    player.gainMaxHp();
                                    player.recover();
                                }
                            },
                            ai: {
                                order: 4,
                                result: {
                                    target(player, target) {
                                        var sort = function (a, b) {
                                            return b.number - a.number;
                                        };
                                        var ps = player.getCards('h').sort(sort);
                                        var ts = target.getCards('h').sort(sort);
                                        if (ps[0].number > ts[0].number) {
                                            var effect = get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                                            if (ps[0].number < 6 && target.countCards('he') > 1) effect -= 2;
                                            if (ps[0].number < 10) effect -= 1;
                                            return effect;
                                        }
                                        return ps.length >= ts.length ? -0.5 : 0;
                                    },
                                },
                            },
                        },
                        xinxinfenyue2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { player: 'phaseDrawBegin2' },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += 8;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        xinhongyi: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            forced: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            //filter:function(event,player){
                            //	return player.countCards('he')>=Math.min(2,game.dead.length);
                            //},
                            //selectCard:function(){
                            //	return Math.min(2,game.dead.length);
                            //},
                            //filterCard:true,
                            filterTarget: lib.filter.notMe,
                            check(card) {
                                var num = Math.min(2, game.dead.length);
                                if (!num) return 1;
                                if (num == 1) return 7 - get.value(card);
                                return 5 - get.value(card);
                            },
                            position: 'he',
                            content() {
                                player.addTempSkill('xinhongyi2', { player: 'phaseBeginStart' });
                                player.storage.xinhongyi2.add(target);
                                player.markSkill('xinhongyi2');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.hasJudge('lebu')) return -0.5;
                                        return -1 - target.countCards('h');
                                    },
                                },
                            },
                        },
                        xinhongyi2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { global: 'damageBegin1' },
                            charlotte: true,
                            forced: true,
                            logTarget: 'source',
                            filter(event, player) {
                                return player.storage.xinhongyi2.includes(event.source);
                            },
                            content() {
                                'step 0';
                                trigger.source.judge();
                                ('step 1');
                                if (result.color == 'black') trigger.cancel();
                                else trigger.player.draw(2);
                                trigger.player.recover();
                            },
                            intro: {
                                content: '已选中$为技能目标',
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                        },
                        xinrequanfeng: {
                            audio: 'ext:阴间集结/audio:2',
                            group: 'xinrequanfeng2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited;
                                }).length;
                            },
                            logTarget: 'player',
                            forced: true,
                            content() {
                                'step 0';
                                var list = trigger.player.getStockSkills(true, true).filter(function (skill) {
                                    var info = get.info(skill);
                                    return info && !info.juexingji && !info.hiddenSkill && !info.zhuSkill && !info.charlotte && !info.limited;
                                });
                                list.remove(player.getSkills());
                                if (!list.length) {
                                    event.finish();
                                }
                                if (list.length == 1) event._result = { control: list[0] };
                                else
                                    player
                                        .chooseControl(list)
                                        .set('prompt', '选择获得' + get.translation(trigger.player) + '的一个技能')
                                        .set('forceDie', true)
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                ('step 1');
                                player.addSkillLog(result.control);
                                player.gainMaxHp(4);
                                player.recover(4);
                            },
                        },
                        xinrequanfeng2: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return event.type == 'dying' && player == event.dying;
                            },
                            content() {
                                player.gainMaxHp(2);
                                player.recover(4);
                            },
                        },
                        xinciwei: {
                            trigger: { source: 'damageSource' },
                            audio: 'ext:阴间集结/audio:2',
                            forced: true,
                            filter(event, player) {
                                return player != event.player && !event.player.storage._disableJudge && event.player.countCards('he') && !event.player.countCards('j');
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard(trigger.player, 'he', get.prompt('xinciwei', trigger.player)).set('ai', function (button) {
                                    if (get.attitude(_status.event.player, _status.event.target) >= 0) return 0;
                                    return get.value(button.link);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = result.cards[0];
                                    trigger.player.$throw(card);
                                    if (get.type(card, false) == 'delay') trigger.player.addJudge(card);
                                    else trigger.player.addJudge({ name: get.color(card, false) == 'red' ? 'lebu' : 'bingliang' }, result.cards);
                                }
                            },
                            group: 'xinciwei_draw',
                            subfrequent: ['draw'],
                            subSkill: {
                                draw: {
                                    audio: 'ext:阴间集结/audio:2',
                                    trigger: { player: 'phaseEnd' },
                                    forced: true,
                                    prompt: '是否发动【慈威】摸三张牌？',
                                    filter(event, player) {
                                        return !player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        player.draw(3);
                                    },
                                },
                            },
                        },
                        xinxindanshou: {
                            group: ['xinxindanshou2', 'xinxindanshou3'],
                            trigger: { global: 'phaseJieshuBegin' },
                            audio: ['xindanshou', 2],
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                if (player == event.player) return false;
                                var num = event.player.getHistory('useCard', function (evt) {
                                    return evt.targets.includes(player);
                                }).length;
                                return num == 0 || (event.player.isAlive() && num <= player.countCards('he'));
                            },
                            content() {
                                'step 0';
                                var num = trigger.player.getHistory('useCard', function (evt) {
                                    return evt.targets.includes(player);
                                }).length;
                                event.num = num;
                                if (num == 0) {
                                    if (player.hasSkill('xinxindanshou')) event._result = { bool: true };
                                    else player.chooseBool('是否发动【胆守】摸三张牌？', lib.translate.xinxindanshou_info);
                                } else event.goto(2);
                                ('step 1');
                                if (result.bool) {
                                    player.draw(2);
                                    player.gainMaxHp();
                                }
                                event.finish();
                                ('step 2');
                                player
                                    .chooseToDiscard(1, get.prompt('xinxindanshou', trigger.player), '弃置' + get.translation() + '张牌并对其造成2点伤害', 'he')
                                    .set('ai', function (card) {
                                        if (!_status.event.goon) return 0;
                                    })
                                    .set('goon', get.damageEffect(trigger.player, player, player) > 0);
                                ('step 3');
                                if (result.bool) {
                                    player.recover(2);
                                    player.addExpose(0.2);
                                    trigger.player.damage(2);
                                }
                            },
                        },
                        xinxindanshou2: {
                            audio: ['xindanshou', 2],
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        xinxindanshou3: {
                            audio: ['xindanshou', 2],
                            trigger: { global: 'phaseZhunbeiBegin' },
                            filter(event, player) {
                                return event.player.isAlive() && event.player != player;
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                if (trigger.player.isDead()) {
                                    event._result = { bool: true, links: [0] };
                                    return;
                                }
                                event.videoId = lib.status.videoId++;
                                var func = function (card, id, bool) {
                                    var list = ['令自己摸两张牌回复两点体力', '令XXX失去一点体力并跳过出牌阶段', '令XXX增加一点体力上限并回复1点体力'];
                                    var choiceList = ui.create.dialog('【胆守】:请选择一至两项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = list[i].replace(/XXX/g, card);
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (i == 2 && !bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (i == 2 && !bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, get.translation(trigger.player), event.videoId, trigger.player.isDamaged());
                                }
                                event.dialog = func(get.translation(trigger.player), event.videoId, trigger.player.isDamaged());
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton(true, [1, 2]);
                                next.set('dialog', event.videoId);
                                next.set('filterButton', function (button) {
                                    if (button.link == 2) {
                                        return _status.event.bool1;
                                    }
                                    return true;
                                });
                                next.set('bool1', trigger.player.isDamaged());
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    var event = _status.event.getTrigger();
                                    if (button.link && get.attitude(player, event.player) <= 0) return 0;
                                    return button.link * Math.random();
                                });
                                ('step 1');
                                if (event.videoId != undefined) {
                                    if (player.isOnline2()) {
                                        player.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                }
                                var map = [
                                    function (trigger, player, event) {
                                        player.draw(2);
                                        player.recover(2);
                                    },
                                    function (trigger, player, event) {
                                        if (!result.links.includes(2)) player.line(trigger.player);
                                        trigger.player.damage();
                                        trigger.player.skip('phaseUse');
                                    },
                                    function (trigger, player, event) {
                                        player.line(trigger.player);
                                        trigger.player.gainMaxHp();
                                        trigger.player.recover();
                                    },
                                ];
                                result.links.sort();
                                for (var i = 0; i < result.links.length; i++) {
                                    game.log(player, '选择了', '#g【胆守】', '的', '#y选项' + get.cnNumber(result.links[i] + 1, true));
                                    map[result.links[i]](trigger, player, event);
                                }
                            },
                        },
                        xinduanzao: {
                            audio: 'ext:阴间集结/audio:2',
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique;
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
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
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
                        xinhmmanyi: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            trigger: { target: 'useCardToBefore' },
                            forced: true,
                            audio: 'manyi',
                            filter(event, player) {
                                return event.card.name == 'nanman';
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        xinmansi: {
                            audio: ['mansi', 2],
                            group: 'xinmansi_viewas',
                            trigger: { global: 'damageEnd' },
                            filter(event, player) {
                                return event.card && event.card.name == 'nanman';
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                player.draw(2);
                                player.addMark('xinmansi', 1, false);
                            },
                            intro: { content: '已因此技能获得了#张牌' },
                        },
                        xinmansi_viewas: {
                            audio: 'mansi',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            usable: 3,
                            filterCard: true,
                            selectCard: -1,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    var mod2 = game.checkMod(hs[i], player, 'unchanged', 'cardEnabled2', player);
                                    if (mod2 === false) return false;
                                }
                                return true;
                            },
                            viewAs: { name: 'nanman' },
                            ai: { order: 0.1 },
                        },
                        xinsouying: {
                            audio: ['souying', 2],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player, name) {
                                if (!player.countCards('he')) return false;
                                if (!event.targets || event.targets.length != 1 || event.player == event.target) return false;
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                if (name == 'useCardToPlayered') {
                                    if (!event.cards.filterInD().length) return false;
                                    var target = event.target;
                                    return (
                                        player
                                            .getHistory('useCard', function (evt) {
                                                return evt.targets && evt.targets.includes(target);
                                            })
                                            .indexOf(event.parent) > 0
                                    );
                                } else {
                                    var source = event.player;
                                    return (
                                        source
                                            .getHistory('useCard', function (evt) {
                                                return evt.targets && evt.targets.includes(player);
                                            })
                                            .indexOf(event.parent) > 0
                                    );
                                }
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('he');
                                var prompt;
                                if (event.triggername == 'useCardToTargeted') {
                                    event.target = trigger.player;
                                    prompt = '令' + get.translation(trigger.card) + '对你无效';
                                    next.set('goon', -get.effect(player, trigger.card, trigger.player, player));
                                } else {
                                    event.target = trigger.targets[0];
                                    prompt = '弃置一张牌,并获得' + get.translation(trigger.cards.filterInD());
                                    next.set('goon', get.value(trigger.cards.filterInD()));
                                }
                                next.set('prompt', get.prompt('xinsouying', event.target));
                                next.set('prompt2', prompt);
                                next.set('ai', function (card) {
                                    return _status.event.goon - get.value(card);
                                });
                                ('step 1');
                                if (result.bool) {
                                    if (event.triggername == 'useCardToPlayered') player.gain(trigger.cards.filterInD());
                                    else trigger.excluded.add(player);
                                }
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        xinzhanyuan: {
                            audio: ['zhanyuan', 2],
                            derivation: 'xinhmxili',
                            juexingji: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                return player.countMark('xinmansi') > 3;
                            },
                            trigger: { player: 'phaseZhunbeiBegin' },
                            content() {
                                'step 0';
                                player.awakenSkill('xinzhanyuan');
                                player.gainMaxHp(3);
                                player.recover(3);
                                ('step 1');
                                player.chooseTarget('是否令一名其他角色和自己一同获得技能〖系力〗？', function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return get.attitude(_status.event.player, target);
                                };
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.addSkill('xinhmxili');
                                    target.addSkill('xinhmxili');
                                }
                            },
                        },
                        xinhmxili: {
                            trigger: { global: 'damageBegin1' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: ['hmxili', 2],
                            filter(event, player) {
                                return event.source && event.source != player && event.source == _status.currentPhase && event.source.hasSkill('xinhmxili') && !event.player.hasSkill('xinhmxili') && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('是否弃置一张牌,令' + get.translation(trigger.source) + '对' + get.translation(trigger.player) + '的伤害+2,且你与其各摸五张牌？', 'he').ai = function (card) {
                                    return 9 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    game.asyncDraw([trigger.source, player], 5);
                                    trigger.num += 2;
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        xinchuangzao: {
                            audio: 'xinfu_jingxie',
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var he = player.getCards('he');
                                var num = 0;
                                for (var i = 0; i < he.length; i++) {
                                    var info = lib.card[he[i].name];
                                    if (info.type == 'equip' && !info.nomod && !info.unique) {
                                        num++;
                                        if (num >= 2) return true;
                                    }
                                }
                            },
                            filterCard(card) {
                                if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return false;
                                var info = get.info(card);
                                return info.type == 'equip' && !info.nomod && !info.unique;
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
                                    lib.translate[name + '_info'] = str + ';' + lib.translate[cards[1].name + '_info'];
                                    try {
                                        game.addVideo('newcard', null, {
                                            name: name,
                                            translate: lib.translate[name],
                                            info: lib.translate[name + '_info'],
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
                        new_benyu: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var eh = player.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, player, 'new_benyu');
                                });
                                if (!trigger.source || eh < 1) {
                                    event.goto(1);
                                    return;
                                }
                                player
                                    .chooseControl('cancel2')
                                    .set('prompt', get.prompt('new_benyu', trigger.source))
                                    .set('choiceList', ['摸五张牌', '弃置一张牌并对其造成2点伤害'])
                                    .set('ai', function () {
                                        return [0, 1].randomGet();
                                    });
                                ('step 1');
                                if (result.control == 'cancel2') event.finish();
                                else if (result.index == 1) event.goto(3);
                                else player.chooseBool('是否发动【贲育】摸五张牌？');
                                ('step 2');
                                if (result.bool) {
                                    player.draw(5);
                                }
                                event.finish();
                                ('step 3');
                                var next = player.chooseToDiscard('he');
                                next.set('prompt', '是否发动【贲育】弃置一张牌并对' + get.translation(trigger.source) + '造成两点伤害？');
                                next.set('ai', function (card) {
                                    var trigger = _status.event.getTrigger();
                                    var player = _status.event.player;
                                    if (get.damageEffect(trigger.source, player, player) > 0 && (get.value(card, player) < 0 || _status.event.num <= 2)) {
                                        return 8 - get.value(card);
                                    }
                                    return -1;
                                });
                                ('step 4');
                                if (result.bool) trigger.source.damage(2);
                            },
                        },
                        new_shefu: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            init(player) {
                                if (!player.storage.shefu) player.storage.shefu = [];
                            },
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            intro: {
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        storage = [];
                                    }
                                },
                                mark(dialog, content, player) {
                                    if (player.isUnderControl(true) && player.storage.shefu && player.storage.shefu.length) {
                                        dialog.add(ui.create.div('.menubutton.pointerdiv', get.translation(player.storage.shefu)));
                                    }
                                },
                            },
                            content() {
                                'step 0';
                                var list1 = [],
                                    list2 = [],
                                    list3 = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var type = get.type(lib.inpile[i]);
                                    if (type == 'basic') {
                                        list1.push(['基本', '', lib.inpile[i]]);
                                    } else if (type == 'trick') {
                                        list2.push(['锦囊', '', lib.inpile[i]]);
                                    } else if (type == 'delay') {
                                        list3.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                }
                                player
                                    .chooseButton([get.prompt('new_shefu'), [list1.concat(list2).concat(list3), 'vcard']], [1, Infinity])
                                    .set('filterButton', function (button) {
                                        var player = _status.event.player;
                                        if (player.storage.shefu && player.storage.shefu.includes(button.link[2])) return false;
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
                                    for (var i = 0; i < result.links.length; i++) {
                                        player.storage.shefu.push(result.links[i][2]);
                                    }
                                    player.markSkill('new_shefu');
                                } else {
                                    event.finish();
                                }
                            },
                            group: 'new_shefu_x',
                            subSkill: {
                                x: {
                                    trigger: {
                                        global: ['useCard'],
                                    },
                                    audio: ['shefu', 2],
                                    filter(event, player) {
                                        if (_status.currentPhase == player || event.player == player) return false;
                                        return (
                                            player.storage.shefu &&
                                            player.storage.shefu.includes(event.card.name) &&
                                            event.player.getHistory('lose', function (evt) {
                                                return evt.parent == event && evt.hs && evt.hs.length == event.cards.length;
                                            }).length
                                        );
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var effect = 0;
                                        if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
                                            if (get.attitude(player, trigger.player) < -1) {
                                                effect = -1;
                                            }
                                        } else if (trigger.targets && trigger.targets.length) {
                                            for (var i = 0; i < trigger.targets.length; i++) {
                                                effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                                            }
                                        }
                                        var str = '设伏:是否令' + get.translation(trigger.player);
                                        if (trigger.targets && trigger.targets.length) {
                                            str += '对' + get.translation(trigger.targets);
                                        }
                                        str += '使用的' + get.translation(trigger.card) + '失效？';
                                        var next = player.chooseBool(str, function () {
                                            var player = _status.event.player;
                                            var trigger = _status.event.getTrigger();
                                            if (_status.event.effect < 0) {
                                                if (trigger.card.name == 'sha') {
                                                    var target = trigger.targets[0];
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
                                        });
                                        next.set('effect', effect);
                                        ('step 1');
                                        if (result.bool) {
                                            var index = player.storage.shefu.indexOf(trigger.card.name);
                                            if (index != -1) {
                                                player.storage.shefu.splice(index, 1);
                                                if (player.storage.shefu.length == 0) {
                                                    player.unmarkSkill('new_shefu');
                                                } else {
                                                    player.markSkill('new_shefu');
                                                }
                                            }
                                            trigger.targets.length = 0;
                                            trigger.all_excluded = true;
                                            player.gainMaxHp(2);
                                            player.recover(2);
                                            {
                                                trigger.player.addTempSkill('new_shefu_f', { player: 'phaseBegin' });
                                                trigger.player.addTempSkill('new_shefu_z', { player: 'phaseBegin' });
                                            }
                                        }
                                    },
                                    ai: {
                                        threaten: 1.8,
                                        expose: 0.3,
                                    },
                                },
                                f: {
                                    init(player, skill) {
                                        var skills = player.getSkills(true, false);
                                        for (var i = 0; i < skills.length; i++) {
                                            if (lib.skill[skills[i]].charlotte) {
                                                skills.splice(i--, 1);
                                            }
                                        }
                                        player.disableSkill(skill, skills);
                                    },
                                    onremove(player, skill) {
                                        player.enableSkill(skill);
                                    },
                                    mark: true,
                                    intro: {
                                        content(storage, player, skill) {
                                            let list = Object.keys(player.disabledSkills);
                                            if (list.length) {
                                                var str = '失效技能:';
                                                for (var i = 0; i < list.length; i++) {
                                                    if (lib.translate[list[i] + '_info']) {
                                                        str += get.translation(list[i]) + '、';
                                                    }
                                                }
                                                return str.slice(0, str.length - 1);
                                            }
                                        },
                                    },
                                },
                                z: {
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player) {
                                            return false;
                                        },
                                        cardEnabled(card, player) {
                                            return false;
                                        },
                                        cardRespondable(card, player) {
                                            return false;
                                        },
                                        cardSavable(card, player) {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        xinqiaosi: {
                            audio: 'xinfu_qiaosi',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            usable: 2,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    var type = get.type(name);
                                    if (name == 'sha') {
                                        list.push([type, '', 'sha']);
                                        list.push([type, '', 'sha', 'fire']);
                                        list.push([type, '', 'sha', 'thunder']);
                                        list.push([type, '', 'sha', 'ice']);
                                    } else if (get.type(name) == 'trick') list.push([type, '', name]);
                                    else if (get.type(name) == 'basic') list.push([type, '', name]);
                                    else if (get.type(name) == 'equip') list.push([type, '', name]);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                player.chooseButton(['巧思:选择至多八张牌,获得一张与之牌名属性均相同的牌', [list, 'vcard']], [1, 8]).set('ai', function (button) {
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    return _status.event.player.getUseValue(card);
                                });
                                ('step 1');
                                if (!result.links.length) {
                                    event.finish();
                                    return;
                                }
                                var cards = [];
                                for (var i = 0; i < result.links.length; i++) {
                                    cards.push(game.createCard(result.links[i][2], lib.suit.randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, player.maxHp].randomGet(), result.links[i][3]));
                                }
                                if (cards.length) {
                                    event.cards = cards;
                                    event.num = cards.length;
                                    player.showCards(cards);
                                } else event.finish();
                                ('step 2');
                                player.gain(event.cards, 'gain2');
                                player
                                    .chooseControl()
                                    .set('choiceList', ['将' + get.cnNumber(event.num) + '张牌交给一名角色', '获得' + get.cnNumber(event.num) + '点体力上限'])
                                    .set('ai', function () {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && get.attitude(player, current) > 2;
                                            })
                                        )
                                            return 0;
                                        return 1;
                                    });
                                ('step 3');
                                if (result.index == 0) {
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterCard: true,
                                        selectCard: event.num,
                                        ai1(card) {
                                            return 1;
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            if (target.hasJudge('lebu')) att /= 5;
                                            return att;
                                        },
                                        prompt: '选择' + get.cnNumber(event.num) + '张牌,交给一名角色.',
                                        forced: true,
                                    });
                                } else {
                                    player.gainMaxHp(event.num);
                                    event.finish();
                                }
                                ('step 4');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.give(result.cards, target);
                                }
                            },
                            ai: {
                                order: 10,
                                result: { player: 1 },
                                threaten: 3.2,
                            },
                        },
                        yin_jingxie1: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            group: ['yin_jingxie2'],
                            position: 'he',
                            audio: 'xinfu_jingxie',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var he = player.getCards('he');
                                for (var i = 0; i < he.length; i++) {
                                    if (['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].includes(he[i].name)) return true;
                                }
                                return false;
                            },
                            filterCard(card) {
                                return ['bagua', 'baiyin', 'lanyinjia', 'renwang', 'tengjia', 'zhuge'].includes(card.name);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            check() {
                                return 1;
                            },
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                var card = cards[0];
                                var bool = get.position(card) == 'e';
                                if (bool) player.removeEquipTrigger(card);
                                game.addVideo('skill', player, ['xinfu_jingxie', [bool, get.cardInfo(card)]]);
                                game.broadcastAll(function (card) {
                                    card.init([card.suit, card.number, 'rewrite_' + card.name]);
                                }, card);
                                if (bool) {
                                    var info = get.info(card);
                                    if (info.skills) {
                                        for (var i = 0; i < info.skills.length; i++) {
                                            player.addSkillTrigger(info.skills[i]);
                                        }
                                    }
                                }
                            },
                            ai: {
                                basic: {
                                    order: 10,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        yin_jingxie2: {
                            audio: 'xinfu_jingxie',
                            trigger: {
                                player: ['dieBefore', 'dying'],
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(3);
                                ('step 1');
                                var num = 1 - player.hp;
                                if (num > 0) player.recover(num);
                            },
                        },
                        xinzhongzuo: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { global: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xinzhongzuo'), '令一名角色摸两张牌.若其已受伤,则你摸一张牌.').set('ai', function (target) {
                                    if (target.hasSkillTag('nogain') && target != _status.currentPhase) return target.isDamaged() ? 0 : 1;
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.isDamaged()) att = att * 1.2;
                                    return att;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.draw(3);
                                    if (target.isDamaged()) player.draw(3);
                                    player.gainMaxHp(3);
                                    player.recover(3);
                                }
                            },
                        },
                        xinnewwanlan: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { global: 'dying' },
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var num = trigger.player.maxHp - trigger.player.hp;
                                if (num > 0) trigger.player.recover(num);
                                ('step 1');
                                if (_status.currentPhase && _status.currentPhase.isAlive()) {
                                    var next = _status.currentPhase.damage(3);
                                    event.next.remove(next);
                                    trigger.after.push(next);
                                }
                            },
                        },
                        xinwushen4: {
                            global: 'xinwushen4_global',
                            trigger: { global: 'dyingBegin' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            logTarget: 'player',
                            filter(event, player) {
                                return player == _status.currentPhase;
                            },
                            content() {
                                game.countPlayer(function (current) {
                                    if (current != player && current != trigger.player) current.addSkillBlocker('xinwushen4_fengyin');
                                });
                                player.addTempSkill('xinwushen4_clear');
                            },
                            subSkill: {
                                global: {
                                    mod: {
                                        cardEnabled(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('xinwushen4') && !player.isDying()) return false;
                                        },
                                        cardSavable(card, player) {
                                            var source = _status.currentPhase;
                                            if (card.name == 'tao' && source && source != player && source.hasSkill('xinwushen4') && !player.isDying()) return false;
                                        },
                                    },
                                },
                                fengyin: {
                                    inherit: 'fengyin',
                                },
                                clear: {
                                    trigger: { global: 'dyingAfter' },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    filter(event, player) {
                                        return !_status.dying.length;
                                    },
                                    content() {
                                        player.removeSkill('xinwushen4_clear');
                                    },
                                    onremove() {
                                        game.countPlayer2(function (current) {
                                            current.removeSkillBlocker('xinwushen4_fengyin');
                                        });
                                    },
                                },
                            },
                        },
                        xinwushen: {
                            mod: {
                                cardname(card, player, name) {
                                    if (card.suit == 'heart') return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.suit == 'heart') return false;
                                },
                                targetInRange(card) {
                                    return true;
                                },
                                cardUsableTarget(card, player, target) {
                                    return true;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    return Infinity;
                                },
                            },
                            group: ['xinwushen2', 'xinwushen3', 'xinwushen4'],
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { player: 'useCard' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                trigger.directHit.addArray(game.players);
                                if (trigger.addCount !== false) {
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                directHit_ai: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.name != 'sha') return false;
                                },
                            },
                        },
                        xinwushen2: {
                            enable: 'chooseToUse',
                            charlotte: true,
                            fixed: true,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: { name: 'jiu' },
                            position: 'hs',
                            viewAsFilter(player) {
                                if (!player.countCards('hs', { color: 'black' })) return false;
                                return true;
                            },
                            prompt: '将一张黑色手牌当酒使用',
                            check(cardx, player) {
                                if (player && player == cardx.player) return true;
                                if (_status.event.type == 'dying') return 1;
                                var player = _status.event.player;
                                var shas = player.getCards('hs', function (card) {
                                    return card != cardx && card.name == 'sha';
                                });
                                if (!shas.length) return -1;
                                if (shas.length > 1 && (player.getCardUsable('sha') > 1 || player.countCards('hs', 'zhuge'))) {
                                    return 0;
                                }
                                shas.sort(function (a, b) {
                                    return get.order(b) - get.order(a);
                                });
                                var card = false;
                                if (shas.length) {
                                    for (var i = 0; i < shas.length; i++) {
                                        if (shas[i] != cardx && lib.filter.filterCard(shas[i], player)) {
                                            card = shas[i];
                                            break;
                                        }
                                    }
                                }
                                if (card) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return (
                                                get.attitude(player, current) < 0 &&
                                                !current.hasShan() &&
                                                current.hp + current.countCards('h', { name: ['tao', 'jiu'] }) > 1 + (player.storage.jiu || 0) &&
                                                player.canUse(card, current, true, true) &&
                                                !current.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    jiu: true,
                                                }) &&
                                                get.effect(current, card, player) > 0
                                            );
                                        })
                                    ) {
                                        return 4 - get.value(cardx);
                                    }
                                }
                                return -1;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        xinwushen3: {
                            shaRelated: true,
                            priority: Infinity,
                            trigger: { player: 'useCardToPlayered' },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                if (!trigger.target.hasSkill('new_fengyin_f')) {
                                    trigger.target.addTempSkill('new_fengyin_f');
                                }
                                if (!trigger.target.hasSkill('fengyin2')) {
                                    trigger.target.addTempSkill('fengyin2');
                                }
                            },
                            ai: {
                                ignoreSkill: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'directHit_ai') {
                                        return get.attitude(player, arg.target) <= 0;
                                    }
                                    if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                                    if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || lib.skill[arg.skill].zhuSkill || lib.skill[arg.skill].hiddenSkill || lib.skill[arg.skill].juexingji || lib.skill[arg.skill].limited || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill)) return false;
                                },
                                directHit_ai: true,
                            },
                        },
                        fengyin2: {
                            mod: {
                                cardUsable(card, player) {
                                    return false;
                                },
                                cardEnabled(card, player) {
                                    return false;
                                },
                                cardRespondable(card, player) {
                                    return false;
                                },
                                cardSavable(card, player) {
                                    return false;
                                },
                            },
                        },
                        xinnew_wuhun: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['damageEnd', 'dying', 'die', 'loseHpEnd'],
                            },
                            priority: Infinity,
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xinnew_wuhun'), '令一名其他角色死亡', function (card, player, target) {
                                    return player != target;
                                });
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].die();
                                    result.targets[0].delete();
                                }
                            },
                        },
                        xinmengmo: {
                            charlotte: true,
                            fixed: true,
                            group: ['xinmengmo_turn', 'xinmengmo_damage'],
                            subSkill: {
                                damage: {
                                    trigger: { source: 'damageBegin1' },
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                                turn: {
                                    trigger: { player: 'turnOverBefore' },
                                    priority: 20,
                                    charlotte: true,
                                    fixed: true,
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
                                noturn: true,
                            },
                        },
                        xindecadewuniang: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xindecadewuniang'), function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countGainableCards(player, 'he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return 10 - get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    player.gainPlayerCard(target, 'he', true);
                                    target.damage();
                                    if (!player.storage.xindecadexushen) event.finish();
                                } else event.finish();
                                ('step 2');
                                var list = game.filterPlayer(function (current) {
                                    return current.name == 'new_sguansuo' || current.name2 == 'new_sguansuo';
                                });
                                if (list.length) game.asyncDraw(list);
                                else event.finish();
                                ('step 3');
                            },
                        },
                        xindecadexushen: {
                            derivation: 'xindecadezhennan',
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { player: 'damageEnd' },
                            charlotte: true,
                            fixed: true,
                            limited: true,
                            content() {
                                player.awakenSkill('xindecadexushen');
                                player.addSkill('xindecadezhennan');
                                player.recover();
                                player.addTempSkill('xindecadexushen2');
                                trigger.xindecadexushen = true;
                            },
                        },
                        xindecadexushen2: {
                            trigger: { player: 'damageEnd' },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return (
                                    event.xindecadexushen == true &&
                                    !game.hasPlayer(function (current) {
                                        return current.name == 'new_sguansuo' || current.name2 == 'new_sguansuo';
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(lib.filter.notMe, '许身:是否令一名其他角色选择是否将其武将牌替换为<关索>并令其摸五张牌？').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target) - 4;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'fire');
                                target.chooseBool('许身:是否将自己的一张武将牌替换为<关索>并令' + get.translation(player) + '摸五张牌？');
                                ('step 2');
                                if (result.bool) {
                                    if (target.name2 != undefined) {
                                        target.chooseControl(target.name, target.name2).set('prompt', '请选择要更换的武将牌');
                                    } else event._result = { control: target.name };
                                } else event.goto(4);
                                ('step 3');
                                target.reinit(result.control, 'new_sguansuo');
                                if (_status.characterlist) {
                                    _status.characterlist.add(result.control);
                                    _status.characterlist.remove('new_sguansuo');
                                }
                                ('step 4');
                                target.draw(5);
                            },
                        },
                        xindecadezhennan: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.isFirstTarget && event.targets && get.type(event.card) == 'basic';
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xindecadezhennan'), '对一名其他角色造成1点伤害', function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    result.targets[0].damage(1);
                                }
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        xinguanxu: {
                            audio: 'ext:阴间集结/audio:2',
                            fixed: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                return game.hasPlayer((current) => lib.skill.xinguanxu.filterTarget(null, player, current));
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                var cards = get.cards(10);
                                for (var i = cards.length - 1; i >= 0; i--) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                                game.updateRoundNumber();
                                var hs = target.getCards('h');
                                var dialog = ['观虚:选择要操作的牌', '<div class="text center">' + get.translation(target) + '的手牌</div>', hs, '<div class="text center">牌堆顶</div>', cards];
                                player
                                    .chooseButton(dialog, 2)
                                    .set('filterButton', function (button) {
                                        if (ui.selected.buttons.length) return get.position(button.link) != get.position(ui.selected.buttons[0].link);
                                        return true;
                                    })
                                    .set('cards1', hs)
                                    .set('cards2', cards)
                                    .set('ai', function (button) {
                                        var card = button.link,
                                            cards1 = _status.event.cards1.slice(0);
                                        var cards2 = _status.event.cards2.slice(0),
                                            target = _status.event.parent.target;
                                        if (!ui.selected.buttons.length) {
                                            if (!cards1.includes(card)) return 0;
                                            cards1.remove(card);
                                            var suits = cards2.map(function (i) {
                                                return i.suit;
                                            });
                                            for (var i of lib.suit) {
                                                var num = cards1.filter(function (c) {
                                                    return c.suit == i;
                                                }).length;
                                                if (num > 2 || (num > 1 && suits.includes(i))) return 20 + get.value(card);
                                            }
                                            return get.value(card);
                                        }
                                        cards1.remove(ui.selected.buttons[0].link);
                                        cards1.push(card);
                                        for (var i of lib.suit) {
                                            if (
                                                cards1.filter(function (c) {
                                                    return c.suit == i;
                                                }).length > 2
                                            )
                                                return 20 - get.value(card);
                                            return get.value(ui.selected.buttons[0].link) - get.value(card);
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var cards = result.links;
                                    if (get.position(cards[0]) != 'h') cards.reverse();
                                    var next = target.lose(cards[0], ui.cardPile);
                                    next.insert_index_card = cards[1];
                                    next.insert_index = function (event) {
                                        return event.insert_index_card;
                                    };
                                    target.gain(cards[1], 'draw');
                                    target.damage();
                                    player.gainMaxHp(3);
                                    player.recover(3);
                                } else event.finish();
                                ('step 2');
                                game.updateRoundNumber();
                                var suits = [],
                                    map = {},
                                    hs = target.getCards('h');
                                if (hs.length) {
                                    for (var i of hs) {
                                        if (!lib.filter.canBeDiscarded(i, player, target, 'xinguanxu')) continue;
                                        var suit = i.suit;
                                        if (!map[suit]) map[suit] = 1;
                                        else map[suit]++;
                                        if (map[suit] > 2) suits.add(suit);
                                    }
                                    var next = player.gainPlayerCard(target, 3, 'visible', 'h');
                                    next.set('suits', suits);
                                    next.set('filterButton', function (button) {
                                        var suit = button.link.suit;
                                        if (!ui.selected.buttons.length) return _status.event.suits.includes(suit);
                                        return suit == ui.selected.buttons[0].link.suit;
                                    });
                                    if (suits.length) next.set('forced', true);
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h') > 3) return -5;
                                        if (target.countCards('h') == 3) return -3;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        xinyashi: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                if (event.source && event.source.isAlive()) return true;
                                return game.hasPlayer((current) => lib.skill.xinguanxu.filterTarget(null, player, current));
                            },
                            content() {
                                'step 0';
                                event.addIndex = 0;
                                var choiceList = [];
                                if (trigger.source && trigger.source.isAlive()) {
                                    choiceList.push('令' + get.translation(trigger.source) + '的所有技能失效');
                                } else event.addIndex++;
                                if (game.hasPlayer((current) => lib.skill.xinguanxu.filterTarget(null, player, current))) choiceList.push('发动一次〖观虚〗');
                                player
                                    .chooseControl('cancel2')
                                    .set('prompt', get.prompt('xinyashi'))
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        var player = _status.event.player,
                                            source = _status.event.getTrigger().source,
                                            index = _status.event.parent.index;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.countCards('h') > 3 && get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 1 - index;
                                        if (source && source.isAlive() && get.attitude(player, source) < 0 && !source.hasSkill('new_fengyin_f') && !source.hasSkill('new_fengyin_z')) return 0;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current != player && current.countCards('h') > 0 && get.attitude(player, current) < 0;
                                            })
                                        )
                                            return 1 - index;
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.index + event.addIndex == 0) {
                                        var target = trigger.source;
                                        target.removeSkill('new_fengyin_f');
                                        target.removeSkill('new_fengyin_z');
                                        {
                                            target.addTempSkill('new_fengyin_f', { player: 'phaseBegin' });
                                            target.addTempSkill('new_fengyin_z', { player: 'phaseBegin' });
                                        }
                                        event.finish();
                                    } else
                                        player.chooseTarget(true, '请选择〖观虚〗的目标', lib.skill.xinguanxu.filterTarget).set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, 'xinguanxu', player, player);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    var next = game.createEvent('xinyashi_xinguanxu');
                                    next.player = player;
                                    next.target = target;
                                    next.setContent(lib.skill.xinguanxu.content);
                                }
                            },
                        },
                        new_fengyin_f: {
                            init(player, skill) {
                                var skills = player.getSkills(true, false);
                                for (var i = 0; i < skills.length; i++) {
                                    if (lib.skill[skills[i]].charlotte) {
                                        skills.splice(i--, 1);
                                    }
                                }
                                player.disableSkill(skill, skills);
                            },
                            onremove(player, skill) {
                                player.enableSkill(skill);
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    let list = Object.keys(player.disabledSkills);
                                    if (list.length) {
                                        var str = '失效技能:';
                                        for (var i = 0; i < list.length; i++) {
                                            if (lib.translate[list[i] + '_info']) {
                                                str += get.translation(list[i]) + '、';
                                            }
                                        }
                                        return str.slice(0, str.length - 1);
                                    }
                                },
                            },
                        },
                        new_fengyin_z: {
                            charlotte: true,
                            mod: {
                                cardUsable(card, player) {
                                    return false;
                                },
                                cardEnabled(card, player) {
                                    return false;
                                },
                                cardRespondable(card, player) {
                                    return false;
                                },
                                cardSavable(card, player) {
                                    return false;
                                },
                            },
                        },
                        xinpt_manjuan: {
                            audio: 'ext:阴间集结/audio:2',
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'basic', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (player.hasSkill('xinpt_manjuan2')) return false;
                                return true;
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                player.discard(trigger.cards);
                                player.storage.xinpt_manjuan = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    player.storage.xinpt_manjuan.add(trigger.cards[i]);
                                }
                                player.addSkill('xinpt_manjuan2');
                            },
                            group: ['xinpt_manjuan3'],
                        },
                        xinpt_manjuan2: {
                            trigger: {
                                player: 'discardAfter',
                            },
                            forced: true,
                            gainable: true,
                            async content(event, trigger, player) {
                                if (player.storage.xinpt_manjuan && player.storage.xinpt_manjuan[0]) {
                                    for (var Q of player.storage.xinpt_manjuan) {
                                        var cards = [];
                                        for (var i of Array.from(ui.discardPile.childNodes)) {
                                            if (i.number == Q.number) {
                                                cards.push(i);
                                            }
                                        }
                                        if (cards[0]) {
                                            const { result } = await player.chooseButton([cards], true);
                                            if (result.links && result.links[0]) {
                                                await player.gain(result.links, 'gain2'); //QQQ
                                                game.log(player, '从弃牌堆获得了', result.links);
                                            }
                                        }
                                    }
                                    player.storage.xinpt_manjuan = [];
                                }
                                player.removeSkill('xinpt_manjuan2');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        xinpt_manjuan3: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'gainEnd',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                return true;
                            },
                            content() { },
                        },
                        xinpt_zuixiang: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            priority: 10,
                            charlotte: true,
                            fixed: true,
                            check(event, player) {
                                return player.num('h') < player.hp && player.hp == player.maxHp;
                            },
                            content() {
                                'step 0';
                                player.storage.xinpt_zuixiang = get.cards(3);
                                player.showCards(player.storage.xinpt_zuixiang);
                                player.markSkill('xinpt_zuixiang');
                                ('step 1');
                                var cards = player.storage.xinpt_zuixiang;
                                if (cards[0].number == cards[1].number || cards[0].number == cards[2].number || cards[2].number == cards[1].number) {
                                    player.gain(player.storage.xinpt_zuixiang, 'draw2');
                                    player.storage.xinpt_zuixiang = [];
                                    player.unmarkSkill('xinpt_zuixiang');
                                    delete player.storage.xinpt_zuixiang2;
                                } else {
                                    player.storage.xinpt_zuixiang2 = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        player.storage.xinpt_zuixiang2.add(get.type(cards[i], 'trick'));
                                    }
                                }
                            },
                            group: 'xinpt_zuixiang2',
                            intro: {
                                content: 'cards',
                            },
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (target.storage.pt_zuixiang2 && target.storage.pt_zuixiang2.includes(get.type(card, 'trick'))) {
                                        return false;
                                    }
                                },
                                targetEnabled(card, player, target) {
                                    if (target.storage.pt_zuixiang2 && target.storage.pt_zuixiang2.includes(get.type(card, 'basic'))) {
                                        return false;
                                    }
                                },
                            },
                        },
                        xinpt_zuixiang2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            priority: 9.5,
                            filter(event, player) {
                                if (player.storage.xinpt_zuixiang && player.storage.xinpt_zuixiang.length) return true;
                                return false;
                            },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var zxcard = get.cards(3);
                                for (var j = 0; j < zxcard.length; j++) {
                                    player.storage.xinpt_zuixiang.add(zxcard[j]);
                                }
                                player.showCards(player.storage.xinpt_zuixiang);
                                player.markSkill('xinpt_zuixiang');
                                ('step 1');
                                var soon = false;
                                var cards = player.storage.xinpt_zuixiang;
                                for (var m = 0; m < cards.length; m++) {
                                    for (var n = 0; n < cards.length; n++) {
                                        if (n != m && cards[n].number == cards[m].number) {
                                            soon = true;
                                        }
                                    }
                                }
                                if (soon == false) {
                                    player.storage.xinpt_zuixiang2 = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        player.storage.xinpt_zuixiang2.add(get.type(cards[i]));
                                    }
                                    event.finish();
                                } else {
                                    player.gain(player.storage.xinpt_zuixiang, 'draw2');
                                }
                                ('step 2');
                                for (var k = 0; k < player.storage.xinpt_zuixiang.length; k++) {
                                    player.storage.xinpt_zuixiang.remove(player.storage.xinpt_zuixiang[k]);
                                }
                                player.unmarkSkill('xinpt_zuixiang');
                            },
                        },
                        xinshiyuan: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            content() {
                                player.draw(3);
                            },
                        },
                        xindushi: {
                            audio: 'ext:阴间集结/audio:2',
                            global: 'xindushi2',
                            priority: 1,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player, name) {
                                return event.player != player;
                            },
                            content() { },
                        },
                        xindushi2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (player.isAlive() && !player.hasSkill('xindushi')) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (player.isAlive() && !player.hasSkill('xindushi')) {
                                        if (card.name == 'tao' && !player.isDying()) return false;
                                    }
                                },
                            },
                        },
                        xinyuwei: {
                            group: ['xinyuwei_1', 'xinyuwei_2'],
                            charlotte: true,
                            fixed: true,
                            subSkill: {
                                1: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (get.type(card) == 'delay') return false;
                                        },
                                    },
                                },
                                2: {
                                    ai: { noCompareTarget: true },
                                },
                            },
                        },
                        yin_lingren: {
                            audio: 'ext:阴间集结/audio:2',
                            fixed: true,
                            charlotte: true,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.triggeredTargets3.length > 1) return false;
                                if (!player.isPhaseUsing()) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                const { result } = await player.chooseTarget(get.prompt2('yin_lingren'), (card, player, target) => trigger.targets.includes(target)).set('ai', (target) => -get.attitude(player, target));
                                if (result.bool) {
                                    var num = 0;
                                    const result1 = await player
                                        .chooseBool('是否押基本牌？')
                                        .set('ai', () => result.targets[0].countCards('h', { type: 'basic' }))
                                        .forResult();
                                    const result2 = await player
                                        .chooseBool('是否押锦囊牌？')
                                        .set('ai', () => result.targets[0].countCards('h', { type: 'trick' }))
                                        .forResult();
                                    const result3 = await player
                                        .chooseBool('是否押装备牌？')
                                        .set('ai', () => result.targets[0].countCards('h', { type: 'equip' }))
                                        .forResult();
                                    if (result1.bool == result.targets[0].countCards('h', { type: 'basic' }) > 0) num++;
                                    if (result2.bool == result.targets[0].countCards('h', { type: 'trick' }) > 0) num++;
                                    if (result3.bool == result.targets[0].countCards('h', { type: 'equip' }) > 0) num++;
                                    player.popup('猜对' + get.cnNumber(num) + '项');
                                    game.log(player, '猜对了' + get.cnNumber(num) + '项');
                                    if (num > 0) trigger.parent.baseDamage++; //QQQ
                                    if (num > 1) {
                                        player.draw(2);
                                        player.gainMaxHp(2);
                                    }
                                    if (num > 2) {
                                        player.addTempSkill('xinlingren_jianxiong', { player: 'phaseBegin' });
                                        player.addTempSkill('xinlingren_xingshang', { player: 'phaseBegin' });
                                        player.recover(2);
                                    }
                                }
                            },
                            ai: {
                                threaten: 2.4,
                            },
                        },
                        xinlingren_jianxiong: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                player.draw('nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage') && player != target) return [1, 0.6];
                                    },
                                },
                            },
                        },
                        xinlingren_xingshang: {
                            audio: 'ext:阴间集结/audio:2',
                            inherit: 'rexingshang',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return player.isDamaged() || event.player.countCards('he') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choice = [];
                                if (player.isDamaged()) choice.push('回复体力');
                                if (trigger.player.countCards('he')) choice.push('获得牌');
                                choice.push('cancel2');
                                player
                                    .chooseControl(choice)
                                    .set('prompt', get.prompt2('rexingshang'))
                                    .set('ai', function () {
                                        if (choice.length == 2) return 0;
                                        if (get.value(trigger.player.getCards('he')) > 8) return 1;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.control == '获得牌') {
                                        event.togain = trigger.player.getCards('he');
                                        player.gain(event.togain, trigger.player, 'giveAuto');
                                    } else player.recover();
                                }
                            },
                        },
                        yin_fujian: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                var num = game.countPlayer(function (current) {
                                    //QQQ
                                    return current != player && current.countCards('h') > 0;
                                });
                                if (num > 0) return true;
                                return false;
                            },
                            check(event, player) {
                                var num1 = game.countPlayer(function (current) {
                                    return get.attitude(player, current) <= 0;
                                });
                                if (num1 > 0) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('请选择一名角色'), function (card, player, target) {
                                        return player != target && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) <= 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    t = result.targets[0];
                                    player.chooseCardButton('选择' + get.translation(t) + '的1~2张手牌并获得之,若颜色相同则' + get.translation(t) + '受到一点伤害', t.getCards('h'), [1, 2]).set('ai', function (card) {
                                        return 1;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.links.length; i++) {
                                        player.gain(result.links[i]);
                                    }
                                    if (result.links.length > 1) {
                                        c1 = result.links[0];
                                        c2 = result.links[1];
                                        event.goto(3);
                                    } else {
                                        event.finish();
                                    }
                                }
                                ('step 3');
                                if (get.color(c1) == get.color(c2)) t.damage();
                            },
                        },
                        xinweiyi: {
                            trigger: { global: 'damageEnd' },
                            filter(event, player) {
                                if (!event.player.isIn()) return false;
                                return event.player.isDamaged();
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('失去体力');
                                list.push('回复体力');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('xinweiyi', trigger.player))
                                    .set('ai', function () {
                                        var player = _status.event.player,
                                            target = _status.event.getTrigger().player;
                                        var att = get.attitude(player, target),
                                            eff = get.recoverEffect(target, player, player);
                                        if (target.hp <= player.hp && target.isDamaged() && att > 2 && eff > 0) {
                                            if (player == target) {
                                                var storage = player.getStorage('xinweiyi');
                                                if (
                                                    player.hp >= 2 &&
                                                    game.hasPlayer(function (current) {
                                                        return current.hp == player.hp + 1 && !storage.includes(current) && get.attitude(player, current) < 0;
                                                    })
                                                )
                                                    return 'cancel2';
                                            }
                                            return '回复体力';
                                        }
                                        if (target.hp >= player.hp && att < -2 && eff < 0) return '失去体力';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var target = trigger.player;
                                    player.markAuto('xinweiyi', [target]);
                                    target[result.control == '失去体力' ? 'loseHp' : 'recover'](2);
                                }
                            },
                            intro: {
                                content: '已令$对汝威服',
                            },
                        },
                        xinweiyi: {
                            trigger: { global: 'damageEnd' },
                            filter(event, player) {
                                return event.player.isDamaged() && event.player.isAlive();
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('失去体力');
                                list.push('回复体力');
                                list.push('cancel2');
                                player
                                    .chooseControl(list)
                                    .set('prompt', get.prompt2('xinweiyi', trigger.player))
                                    .set('ai', function () {
                                        var player = _status.event.player,
                                            target = _status.event.getTrigger().player;
                                        var att = get.attitude(player, target),
                                            eff = get.recoverEffect(target, player, player);
                                        if (target.hp <= player.hp && target.isDamaged() && att > 2 && eff > 0) {
                                            if (player == target) {
                                                var storage = player.getStorage('xinweiyi');
                                                if (
                                                    player.hp >= 2 &&
                                                    game.hasPlayer(function (current) {
                                                        return current.hp == player.hp + 1 && !storage.includes(current) && get.attitude(player, current) < 0;
                                                    })
                                                )
                                                    return 'cancel2';
                                            }
                                            return '回复体力';
                                        }
                                        if (target.hp >= player.hp && att < -2 && eff < 0) return '失去体力';
                                        return 'cancel2';
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    var target = trigger.player;
                                    player.markAuto('xinweiyi', [target]);
                                    target[result.control == '失去体力' ? 'loseHp' : 'recover'](2);
                                }
                            },
                            intro: {
                                content: '已令$对汝威服',
                            },
                        },
                        xinjinzhi: {
                            audio: ['jinzhi', 2],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            charlotte: true,
                            fixed: true,
                            hiddenCard(player, name) {
                                if (get.type(name) == 'basic' && lib.inpile.includes(name)) return true;
                            },
                            filter(event, player) {
                                if (event.responded || event.xinjinzhi || player.countMark('xinjinzhi2') >= player.countCards('he')) return false;
                                for (var i of lib.inpile) {
                                    if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (get.type(i) == 'basic' && event.filterCard({ name: i }, player, event)) {
                                            list.push(['基本', '', i]);
                                            if (i == 'sha') {
                                                list.push(['基本', '', i, 'fire']);
                                                list.push(['基本', '', i, 'thunder']);
                                                list.push(['基本', '', i, 'ice']);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('锦织', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    if (button.link[2] == 'shan') return 3;
                                    var player = _status.event.player;
                                    if (button.link[2] == 'jiu') {
                                        if (player.getUseValue({ name: 'jiu' }) <= 0) return 0;
                                        if (player.countCards('h', 'sha')) return 4;
                                    }
                                    return player.getUseValue({ name: button.link[2], nature: button.link[3] }) / 4;
                                },
                                backup(links, player) {
                                    return {
                                        selectCard: player.countMark('xinjinzhi2') + 1,
                                        filterCard: lib.filter.cardDiscardable,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                            suit: 'none',
                                            number: null,
                                        },
                                        position: 'he',
                                        check(card) {
                                            var player = _status.event.player,
                                                color = get.color(card, player);
                                            if (player.countCards('he', { color: color }) <= player.countMark('xinjinzhi2') || (ui.selected.cards.length && get.color(ui.selected.cards[0], player) != color)) return 0;
                                            if (
                                                lib.skill.jinzhi_backup.viewAs.name == 'jiu' &&
                                                !player.countCards('h', function (cardx) {
                                                    return card != cardx && !ui.selected.cards.includes(cardx) && cardx.name == 'sha';
                                                })
                                            )
                                                return 0;
                                            return 6 - get.value(card);
                                        },
                                        precontent() {
                                            player.addTempSkill('xinjinzhi2', 'roundStart');
                                            var cards = event.result.cards;
                                            player.discard(cards);
                                            player.recover(3);
                                            player.draw(3);
                                            event.result.card = {
                                                name: event.result.card.name,
                                                nature: event.result.card.nature,
                                            };
                                            event.result.cards = [];
                                            if (cards.length > 1) {
                                                var color = get.color(cards[0], player);
                                                for (var i = 1; i < cards.length; i++) {
                                                    if (get.color(cards[i], player) != color) {
                                                        var evt = event.parent;
                                                        evt.set('xinjinzhi', true);
                                                        evt.goto(0);
                                                        return;
                                                    }
                                                }
                                            }
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var name = links[0][2];
                                    var nature = links[0][3];
                                    return '弃置' + get.cnNumber(player.countMark('xinjinzhi2') + 1) + '张牌并摸三张牌.视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                order(item, player) {
                                    if (_status.event.type == 'phase' && player.getUseValue({ name: 'jiu' }, null, true) > 0 && player.countCards('h', 'sha')) return 4;
                                    return 1;
                                },
                                respondShan: true,
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (player.countMark('xinjinzhi2') >= player.countCards('he')) return false;
                                },
                                result: {
                                    player(player) {
                                        if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                        return 1;
                                    },
                                },
                            },
                        },
                        xinjinzhi2: {
                            intro: {
                                content: '本轮已发动过#次',
                            },
                        },
                        xinzhiren: {
                            audio: ['zhiren', 2],
                            charlotte: true,
                            fixed: true,
                            trigger: { player: 'useCard' },
                            filter(event, player) {
                                return (
                                    event.card.isCard &&
                                    player
                                        .getHistory('useCard', function (evt) {
                                            return evt.card.isCard;
                                        })
                                        .indexOf(event) == 0
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.num = get.translation(trigger.card.name).length;
                                player.chooseToGuanxing(event.num);
                                if (event.num < 2) event.finish();
                                ('step 1');
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.countDiscardableCards(player, 'e') > 0;
                                    })
                                ) {
                                    event.goto(3);
                                } else
                                    player
                                        .chooseTarget('织纴:是否弃置一名角色装备区内的一张牌？', function (card, player, target) {
                                            return target.countDiscardableCards(player, 'e') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player,
                                                att = get.attitude(player, target),
                                                es = target.getCards('e'),
                                                val = 0;
                                            for (var i of es) {
                                                var eff = -(get.value(i, target) - 0.1) * att;
                                                if (eff > val) val = eff;
                                            }
                                            return eff;
                                        });
                                ('step 2');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addExpose(0.15);
                                    player.line(target, 'green');
                                    player.discardPlayerCard(target, 'e', true);
                                } else event.goto(5);
                                if (event.num < 3) event.finish();
                                ('step 3');
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.countDiscardableCards(player, 'j') > 0;
                                    })
                                ) {
                                    if (event.num < 3) event.finish();
                                    else event.goto(5);
                                } else
                                    player
                                        .chooseTarget('织纴:是否弃置一名角色判定区内的一张牌？', function (card, player, target) {
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
                                ('step 4');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.addExpose(0.15);
                                    player.line(target, 'green');
                                    player.discardPlayerCard(target, 'j', true);
                                }
                                if (event.num < 3) event.finish();
                                ('step 5');
                                player.hp = player.maxHp;
                                if (event.num < 4) event.finish();
                                ('step 6');
                                player.draw(5);
                                player.gainMaxHp(5);
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (
                                        player == _status.currentPhase &&
                                        !player.getHistory('useCard', function (evt) {
                                            return evt.card.isCard;
                                        }).length
                                    )
                                        return num + Math.pow(get.translation(card.name).length, 2);
                                },
                            },
                        },
                        xinyaner: {
                            audio: ['yaner', 2],
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            filter(event, player) {
                                var current = _status.currentPhase;
                                if (!current || current == player || !current.isIn() || !current.isPhaseUsing()) return false;
                                var evt = event.getl(current);
                                return evt && evt.hs && evt.hs.length && current.countCards('h') == 2;
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            prompt2: '与该角色各摸二张牌',
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) > 0;
                            },
                            content() {
                                'step 0';
                                game.asyncDraw([_status.currentPhase, player], 2);
                                ('step 1');
                                var e1 = player.getHistory('gain', function (evt) {
                                    return evt.getParent(2) == event;
                                })[0];
                                if (e1 && e1.cards && e1.cards.length == 2 && get.type(e1.cards[0]) == get.type(e1.cards[1])) {
                                    player.recover(3);
                                    player.draw(3);
                                }
                                var target = _status.currentPhase;
                                if (target.isIn() && target.isDamaged()) {
                                    var e2 = target.getHistory('gain', function (evt) {
                                        return evt.getParent(2) == event;
                                    })[0];
                                    if (e2 && e2.cards && e2.cards.length == 2 && get.type(e2.cards[0]) == get.type(e2.cards[1])) target.recover(3);
                                }
                                ('step 2');
                            },
                            ai: {
                                expose: 0.5,
                            },
                        },
                        xinbazhan: {
                            audio: ['bazhan', 2],
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                if (player.storage.xinbazhan) {
                                    return game.hasPlayer(function (current) {
                                        return current != player && current.countGainableCards(player, 'h') > 0;
                                    });
                                }
                                return player.countCards('h') > 0;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            selectCard() {
                                if (_status.event.player.storage.xinbazhan) return 0;
                                return [1, 5];
                            },
                            filterTarget(card, player, target) {
                                if (player == target) return false;
                                if (player.storage.xinbazhan) return target.countGainableCards(player, 'he') > 0;
                                return true;
                            },
                            prompt() {
                                if (_status.event.player.storage.xinbazhan) return '获得一名其他角色的至多五张手牌';
                                return '将至多五张手牌交给一名其他角色';
                            },
                            delay: false,
                            check(card) {
                                var player = _status.event.player;
                                var bool1 = false,
                                    bool2 = false;
                                for (var i of game.players) {
                                    if (get.attitude(player, i) <= 0 || player == i) continue;
                                    bool1 = true;
                                    if (i.isDamaged() || i.isTurnedOver()) {
                                        bool2 = true;
                                        break;
                                    }
                                }
                                if (bool2 && !ui.selected.cards.length && (card.suit == 'heart' || card.name == 'jiu' || card.name == 'sha' || card.name == 'shan')) return 10;
                                if (bool1) return 9 - get.value(card);
                                if (get.color(card) == 'red') return 5 - get.value(card);
                                return 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.xinbazhan) {
                                    player.storage.xinbazhan = false;
                                    event.recover = player;
                                    player.gainPlayerCard(target, 'h', true, 'visibleMove', [1, 5]);
                                } else {
                                    player.storage.xinbazhan = true;
                                    event.recover = target;
                                    target.gain(cards, player, 'give');
                                }
                                ('step 1');
                                var target = event.recover;
                                if (result.bool && result.cards && result.cards.length) {
                                    cards = result.cards;
                                }
                                if (
                                    !cards ||
                                    !target ||
                                    !target.getCards('h').filter(function (i) {
                                        return cards.includes(i);
                                    }).length ||
                                    (function () {
                                        for (var card of cards) {
                                            if (card.suit == 'heart' || card.name == 'jiu' || card.name == 'sha' || card.name == 'shan') return false;
                                        }
                                        return true;
                                    })()
                                ) {
                                    event.finish();
                                    return;
                                }
                                var list = [];
                                event.addIndex = 0;
                                var str = get.translation(target);
                                if (target.isDamaged()) list.push('令' + str + '回复五点体力');
                                else event.addIndex++;
                                if (target.isLinked() || target.isTurnedOver()) list.push('令' + get.translation(target) + '复原武将牌');
                                if (!list.length) event.finish();
                                else
                                    player
                                        .chooseControl('cancel2')
                                        .set('choiceList', list)
                                        .set('ai', function () {
                                            var evt = _status.event.parent;
                                            if (get.attitude(evt.player, evt.target) < 0) return 'cancel2';
                                            if (target.hp > 1 && target.isTurnedOver()) return 1 - evt.addIndex;
                                            return 0;
                                        });
                                ('step 2');
                                if (result.control == 'cancel2') event.finish();
                                else if (result.index + event.addIndex == 0) {
                                    event.recover.recover(5);
                                    event.finish();
                                } else if (event.recover.isLinked()) event.recover.link();
                                ('step 3');
                                if (event.recover.isTurnedOver()) event.recover.turnOver();
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        if (player.storage.xinbazhan) return -1;
                                        if (ui.selected.cards.length) {
                                            var cards = ui.selected.cards,
                                                card = cards[0];
                                            if (get.value(cards, target) < 0) return -0.5;
                                            if (get.attitude(player, target) > 0) {
                                                if ((target.isDamaged() || target.isTurnedOver()) && (card.suit == 'heart' || card.name == 'jiu' || card.name == 'sha' || card.name == 'shan')) return 3;
                                                if (target.hasUseTarget(card) && target.getUseValue(card) > player.getUseValue(card, null, true)) return 1.4;
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        xinjiaoying: {
                            audio: ['jiaoying', 2],
                            trigger: { source: 'gainEnd' },
                            forced: true,
                            filter(event, player) {
                                if (player == event.player) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            logTarget: 'player',
                            content() {
                                var target = trigger.player;
                                if (!target.storage.xinjiaoying2) target.storage.xinjiaoying2 = [];
                                var cs = trigger.getl(player).hs;
                                for (var i of cs) target.storage.xinjiaoying2.add(get.color(i, player));
                                target.addTempSkill('xinjiaoying2');
                                target.markSkill('xinjiaoying2');
                                player.addTempSkill('xinjiaoying3');
                                if (!player.storage.xinjiaoying3) player.storage.xinjiaoying3 = [];
                                player.storage.xinjiaoying3.add(target);
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    var target = arg.target;
                                    if (target.getStorage('xinjiaoying2').includes('red') && get.tag(arg.card, 'respondShan') && !target.hasSkillTag('respondShan', true, null, true)) return true;
                                    return false;
                                },
                            },
                        },
                        xinjiaoying2: {
                            charlotte: true,
                            mod: {
                                cardEnabled2(card, player) {
                                    if (player.getStorage('xinjiaoying2').includes(get.color(card))) return false;
                                },
                            },
                            intro: {
                                content: '本回合内不能使用或打出$牌',
                            },
                        },
                        xinjiaoying3: {
                            trigger: { global: 'useCard1' },
                            silent: true,
                            firstDo: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.xinjiaoying3.includes(event.player);
                            },
                            content() {
                                while (player.storage.xinjiaoying3.includes(trigger.player)) player.storage.xinjiaoying3.remove(trigger.player);
                                if (!player.storage.xinjiaoying3.length) player.removeSkill('xinjiaoying3');
                            },
                            group: 'xinjiaoying3_draw',
                        },
                        xinjiaoying3_draw: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return (
                                    player.getStorage('xinjiaoying3').length &&
                                    game.hasPlayer(function (current) {
                                        return current.countCards('h') < 8;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.storage.xinjiaoying3.shift();
                                player
                                    .chooseTarget('醮影:令一名角色将手牌摸至八张', function (card, player, target) {
                                        return target.countCards('h') < 8;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 2) {
                                            return 8 - target.countCards('h');
                                        }
                                        return att / 3;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].drawTo(8);
                                    }
                                    if (lib.skill.xinjiaoying3_draw.filter(null, player)) event.goto(0);
                                }
                            },
                        },
                        xinyanjiao: {
                            audio: ['yanjiao', 2],
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                    target: 1.1,
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var num = 4;
                                if (player.storage.xinxingshen) {
                                    num += player.storage.xinxingshen;
                                    player.storage.xinxingshen = 0;
                                    player.unmarkSkill('xinxingshen');
                                }
                                if (player.storage.olxingshen) {
                                    num += player.storage.olxingshen;
                                    player.storage.olxingshen = 0;
                                    player.unmarkSkill('olxingshen');
                                }
                                event.cards = get.cards(num);
                                player.showCards(event.cards);
                                ('step 1');
                                event.getedResult = lib.skill.xinyanjiao.getResult(cards);
                                if (!event.getedResult.length) {
                                    game.cardsDiscard(cards);
                                    player.addTempSkill('xinyanjiao2');
                                    event.finish();
                                }
                                ('step 2');
                                target.chooseControl('自动分配', '手动分配').set('prompt', '【严教】:是否让系统自动分配方案？').ai = function () {
                                    return 0;
                                };
                                ('step 3');
                                if (result.control == '手动分配') {
                                    event.map = [cards, [], []];
                                    _status.noclearcountdown = true;
                                    event.goto(8);
                                } else if (!_status.connectMode) {
                                    var choiceList = ui.create.dialog('请选择一种方案', 'hidden', 'forcebutton');
                                    for (var i = 0; i < event.getedResult.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">方案' + get.cnNumber(i + 1, true);
                                        str += '<br>第一组:';
                                        var current = event.getedResult[i];
                                        str += get.translation(current[0]);
                                        str += '<br>第二组:';
                                        str += get.translation(current[1]);
                                        if (current[2].length) {
                                            str += '<br>剩余:';
                                            str += get.translation(current[2]);
                                        }
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    event.choiceList = choiceList;
                                    target.chooseButton(choiceList, true, function (button) {
                                        return true;
                                    });
                                }
                                ('step 4');
                                if (result.bool && result.links) event.index = result.links[0];
                                else event.index = 0;
                                event.togain = event.getedResult[event.index];
                                target.showCards(event.togain[0], get.translation(target) + '分出的第一份牌');
                                ('step 5');
                                target.showCards(event.togain[1], get.translation(target) + '分出的第二份牌');
                                ('step 6');
                                target.chooseControl().set('choiceList', ['获得' + get.translation(event.togain[0]), '获得' + get.translation(event.togain[1])]).ai = function () {
                                    return Math.random() < 0.5 ? 1 : 0;
                                };
                                ('step 7');
                                target.gain(event.togain[result.index], 'gain2');
                                player.gain(event.togain[1 - result.index], 'gain2');
                                if (event.togain[2].length) {
                                    game.cardsDiscard(event.togain[2]);
                                    if (event.togain[2].length > 1) player.addTempSkill('xinyanjiao2');
                                }
                                event.finish();
                                ('step 8');
                                event.videoId = lib.status.videoId++;
                                var dialogx = ['严教:选择要移动的牌'];
                                var name = ['未分配', '第一组', '第二组'];
                                for (var i = 0; i < event.map.length; i++) {
                                    if (event.map[i].length) {
                                        dialogx.push('<div class="text center">' + name[i] + '</div>');
                                        dialogx.push(event.map[i]);
                                    }
                                }
                                if (target.isOnline2()) {
                                    target.send(
                                        function (dialogx, id) {
                                            ui.create.dialog.apply(null, dialogx).videoId = id;
                                        },
                                        dialogx,
                                        event.videoId
                                    );
                                }
                                event.dialog = ui.create.dialog.apply(null, dialogx);
                                event.dialog.videoId = event.videoId;
                                if (target != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = target.chooseButton();
                                next.set('selectButton', function () {
                                    if (!_status.event.map[1].length || !_status.event.map[2].length) return 1;
                                    var num1 = 0;
                                    for (var i = 0; i < _status.event.map[1].length; i++) {
                                        num1 += _status.event.map[1][i].number;
                                    }
                                    var num2 = 0;
                                    for (var j = 0; j < _status.event.map[2].length; j++) {
                                        num2 += _status.event.map[2][j].number;
                                    }
                                    return num1 == num2 ? [0, 1] : 1;
                                });
                                next.set('map', event.map);
                                next.set('dialog', event.videoId);
                                next.set('ai', function () {
                                    return -1;
                                });
                                next.set('forceAuto', true);
                                ('step 9');
                                if (result.bool) {
                                    if (!result.links.length) {
                                        if (target.isOnline2()) {
                                            target.send('closeDialog', event.videoId);
                                        }
                                        event.dialog.close();
                                        delete _status.noclearcountdown;
                                        if (!_status.noclearcountdown) {
                                            game.stopCountChoose();
                                        }
                                        event.togain = [event.map[1], event.map[2], event.map[0]];
                                        target.showCards(event.togain[0], get.translation(target) + '分出的第一份牌');
                                        event.goto(5);
                                    } else {
                                        event.card = result.links[0];
                                        var controls = ['取消分组', '移动到第一组', '移动到第二组'];
                                        for (var i = 0; i < event.map.length; i++) {
                                            if (event.map[i].includes(event.card)) {
                                                controls.splice(i, 1);
                                                break;
                                            }
                                        }
                                        var func = function (card, id) {
                                            var dialog = get.idDialog(id);
                                            if (dialog) {
                                                for (var i = 0; i < dialog.buttons.length; i++) {
                                                    if (dialog.buttons[i].link == card) {
                                                        dialog.buttons[i].classList.add('glow');
                                                    } else {
                                                        dialog.buttons[i].classList.add('unselectable');
                                                    }
                                                }
                                            }
                                        };
                                        if (target.isOnline2()) {
                                            target.send(func, event.card, event.videoId);
                                        } else if (target == game.me && !_status.auto) {
                                            func(event.card, event.videoId);
                                        }
                                        target.chooseControl(controls);
                                    }
                                } else {
                                    if (target.isOnline2()) {
                                        target.send('closeDialog', event.videoId);
                                    }
                                    event.dialog.close();
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    game.cardsDiscard(cards);
                                    player.addTempSkill('xinyanjiao2');
                                    event.finish();
                                }
                                ('step 10');
                                if (target.isOnline2()) {
                                    target.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var position = {
                                    取消分组: 0,
                                    移动到第一组: 1,
                                    移动到第二组: 2,
                                }[result.control || '取消分组'];
                                for (var i = 0; i < event.map.length; i++) {
                                    if (event.map[i].includes(card)) {
                                        event.map[i].remove(card);
                                        event.map[position].push(card);
                                        break;
                                    }
                                }
                                event.goto(8);
                            },
                            getResult(cards) {
                                var cl = cards.length;
                                var maxmium = Math.pow(3, cl);
                                var filter = function (list) {
                                    if (!list[1].length || !list[0].length) return false;
                                    var num1 = 0;
                                    for (var i = 0; i < list[1].length; i++) {
                                        num1 += list[1][i].number;
                                    }
                                    var num2 = 0;
                                    for (var j = 0; j < list[0].length; j++) {
                                        num2 += list[0][j].number;
                                    }
                                    return num1 == num2;
                                };
                                var results = [];
                                for (var i = 0; i < maxmium; i++) {
                                    var result = [[], [], []];
                                    for (var j = 0; j < cl; j++) {
                                        result[Math.floor((i % Math.pow(3, j + 1)) / Math.pow(3, j))].push(cards[j]);
                                    }
                                    if (filter(result)) results.push(result);
                                }
                                var filterSame = function (list1, list2) {
                                    if (list1[1].length == list2[0].length && list1[0].length == list2[1].length) {
                                        for (var i = 0; i < list1[0].length; i++) {
                                            if (!list2[1].includes(list1[0][i])) return false;
                                        }
                                        for (var i = 0; i < list1[1].length; i++) {
                                            if (!list2[0].includes(list1[1][i])) return false;
                                        }
                                        return true;
                                    }
                                    return false;
                                };
                                for (var i = 0; i < results.length; i++) {
                                    for (var j = i + 1; j < results.length; j++) {
                                        if (filterSame(results[i], results[j])) results.splice(j--, 1);
                                    }
                                }
                                results.sort(function (a, b) {
                                    return a[2].length - b[2].length;
                                });
                                return results;
                            },
                        },
                        xinyanjiao2: {
                            marktext: '教',
                            mark: true,
                            intro: {
                                content: '本回合手牌上限+10',
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 10;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                        },
                        xinolxingshen: {
                            trigger: { player: 'damageEnd' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: 'xingshen',
                            content() {
                                'step 0';
                                var next = player.draw(3);
                                if (get.isLuckyStar(player) || Math.random() < 0.5) next.num = 2;
                                var num = player.countMark('xinolxingshen');
                                if (num < 6) player.addMark('xinolxingshen', Math.min(6 - num, player.getDamagedHp()), false);
                            },
                            intro: {
                                content: '下一次发动〖严教〗时多展示X张牌',
                            },
                        },
                        xinxingshen: {
                            audio: ['xingshen', 2],
                            intro: {
                                content: '下一次发动【严教】时多展示#张牌',
                            },
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp(3);
                                player.recover(3);
                                player.draw(3);
                                if (!player.storage.xinxingshen) player.storage.xinxingshen = 0;
                                player.storage.xinxingshen += 4;
                                if (player.storage.xinxingshen > 4) player.storage.xinxingshen = 4;
                                player.markSkill('xinxingshen');
                            },
                        },
                        new_xuanfeng: {
                            audio: 'ext:阴间集结/audio:2',
                            group: ['new_xuanfeng2', 'new_xuanfeng3'],
                            trigger: {
                                player: ['loseAfter', 'phaseDiscardEnd'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                if (event.name == 'phaseDiscard') {
                                    var cards = [];
                                    player.getHistory('lose', function (evt) {
                                        if (evt && evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.hs) cards.addArray(evt.hs);
                                    });
                                    return cards.length > 1;
                                } else {
                                    var evt = event.getl(player);
                                    return evt && evt.es && evt.es.length;
                                }
                            },
                            content() {
                                'step 0';
                                event.count = 2;
                                event.targets = [];
                                event.logged = false;
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt('new_xuanfeng'), '弃置一名其他角色的一张牌', function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    if (!event.logged) {
                                        player.line(result.targets);
                                        game.playAudio('skill', ['new_xuanfeng1', 'new_xuanfeng2'].randomGet());
                                        player.popup('旋风');
                                        game.log(player, '对', result.targets, '发动了【旋风】');
                                        event.logged = true;
                                    } else player.line(result.targets[0], 'green');
                                    targets.add(result.targets[0]);
                                    player.discardPlayerCard(result.targets[0], 'he', true);
                                } else if (!targets.length) event.finish();
                                ('step 3');
                                if (event.count) event.goto(1);
                                else if (player == _status.currentPhase) {
                                    player
                                        .chooseTarget('是否对一名目标角色造成1至2点伤害?', function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('targets', targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                } else event.finish();
                                ('step 4');
                                if (result.bool) {
                                    player.line(result.targets[0], 'thunder');
                                    player.chooseControl('1', '2').set('prompt', '要对' + get.translation(result.targets[0]) + '造成多少伤害？');
                                    event.target = result.targets[0];
                                }
                                ('step 5');
                                event.num = { 1: 1, 2: 2 }[result.control];
                                if (result.control) event.target.damage(event.num);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                                reverseEquip: true,
                                noe: true,
                                expose: 0.2,
                            },
                        },
                        new_xuanfeng2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var dialog = ui.create.dialog('【旋风】:请选择要获得的一至两张装备牌'),
                                    size = '<span class="text" style="font size:5">';
                                var cards = [];
                                for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                    if (get.type(ui.cardPile.childNodes[i]) == 'equip') cards.add(ui.cardPile.childNodes[i]);
                                }
                                if (!cards.length) {
                                    event.finish();
                                    return;
                                }
                                dialog.add(cards);
                                player.chooseButton(dialog, [1, 2]);
                                ('step 1');
                                if (!result.links) {
                                    event.finish();
                                    return;
                                }
                                var card = [];
                                for (var i = 0; i < result.links.length; i++) {
                                    var name = result.links[i];
                                    card.push(name);
                                }
                                player.gain(card, 'gain2', 'log');
                                game.playAudio('skill', ['new_xuanfeng21', 'new_xuanfeng22'].randomGet());
                                player.popup('旋风');
                                game.log(player, '发动了【旋风】');
                                game.updateRoundNumber();
                            },
                        },
                        new_yizheng2: {
                            mark: true,
                            intro: {
                                name: '义争',
                                content: '跳过下个摸牌和出牌阶段和回合结束阶段',
                            },
                        },
                        new_xuanfeng3: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['loseAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            priority: 1,
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (player != _status.currentPhase) return false;
                                if (!evt || !evt.cards2.length || !['trick', 'equip'].includes(get.type(evt.cards2[0])) || evt.cards2.length < 1) return false;
                                return true;
                            },
                            content() {
                                event.insert(lib.skill.new_xuanfeng.content, { player: player });
                            },
                        },
                        new_relonghun: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            prompt: '将♦️️手牌当做火杀,♥️️手牌当做桃,♣️️手牌当做闪,♠️️手牌当做无懈可击使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                var nature = null;
                                switch (cards[0]?.suit) {
                                    case 'club':
                                        name = 'shan';
                                        break;
                                    case 'diamond':
                                        name = 'sha';
                                        nature = 'fire';
                                        break;
                                    case 'spade':
                                        name = 'wuxie';
                                        break;
                                    case 'heart':
                                        name = 'tao';
                                        break;
                                }
                                if (name) return { name: name, nature: nature };
                                return null;
                            },
                            check(card) {
                                if (ui.selected.cards.length) return 0;
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao'];
                                    var map = { sha: 'diamond', tao: 'heart' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (
                                            player.countCards('hejs', function (card) {
                                                return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                            }) > 0 &&
                                            player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                        ) {
                                            var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                            if (temp > max) {
                                                max = temp;
                                                name2 = map[name];
                                            }
                                        }
                                    }
                                    if (name2 == card.suit) return name2 == 'diamond' ? 5 - get.value(card) : 20 - get.value(card);
                                    return 0;
                                }
                                return 1;
                            },
                            selectCard: [1, 2],
                            complexCard: true,
                            position: 'hejs',
                            filterCard(card, player, event) {
                                if (ui.selected.cards.length) return card.suit == ui.selected.cards[0].suit;
                                event = event || _status.event;
                                var filter = event._backup.filterCard;
                                var name = card.suit;
                                if (name == 'club' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                if (name == 'diamond' && filter({ name: 'sha', cards: [card], nature: 'fire' }, player, event)) return true;
                                if (name == 'spade' && filter({ name: 'wuxie', cards: [card] }, player, event)) return true;
                                if (name == 'heart' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha', nature: 'fire' }, player, event) && player.countCards('hejs', { suit: 'diamond' })) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hejs', { suit: 'club' })) return true;
                                if (filter({ name: 'tao' }, player, event) && player.countCards('hejs', { suit: 'heart' })) return true;
                                if (filter({ name: 'wuxie' }, player, event) && player.countCards('hejs', { suit: 'spade' })) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'diamond';
                                            break;
                                        case 'respondShan':
                                            name = 'club';
                                            break;
                                        case 'save':
                                            name = 'heart';
                                            break;
                                    }
                                    if (!player.countCards('hejs', { suit: name })) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao'];
                                        var map = { sha: 'diamond', tao: 'heart' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (
                                                player.countCards('hejs', function (card) {
                                                    return (name != 'sha' || get.value(card) < 5) && card.suit == map[name];
                                                }) > 0 &&
                                                player.getUseValue({ name: name, nature: name == 'sha' ? 'fire' : null }) > 0
                                            ) {
                                                var temp = get.order({ name: name, nature: name == 'sha' ? 'fire' : null });
                                                if (temp > max) max = temp;
                                            }
                                        }
                                        max /= 1.1;
                                        return max;
                                    }
                                    return 2;
                                },
                            },
                            hiddenCard(player, name) {
                                if (name == 'wuxie' && _status.connectMode && player.countCards('hejs') > 0) return true;
                                if (name == 'wuxie') return player.countCards('hejs', { suit: 'spade' }) > 0;
                                if (name == 'tao') return player.countCards('hejs', { suit: 'heart' }) > 0;
                            },
                            group: ['new_relonghun_num', 'new_relonghun_gaincard'],
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event;
                                        return ['sha', 'tao'].includes(evt.card.name) && evt.skill == 'new_relonghun' && evt.cards && evt.cards.length == 2;
                                    },
                                    content() {
                                        trigger.baseDamage += [1, 2, 3].randomGet();
                                    },
                                },
                                gaincard: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    logTarget() {
                                        return _status.currentPhase;
                                    },
                                    autodelay(event) {
                                        return event.name == 'respond' ? 0.5 : false;
                                    },
                                    filter(evt, player) {
                                        return ['shan', 'wuxie'].includes(evt.card.name) && evt.skill == 'new_relonghun' && evt.cards && evt.cards.length == 1 && _status.currentPhase && _status.currentPhase != player && _status.currentPhase.countGainableCards(player, 'he');
                                    },
                                    content() {
                                        player.line(_status.currentPhase, 'green');
                                        player.gainPlayerCard(_status.currentPhase, 'he', [1, 2], true);
                                    },
                                },
                            },
                        },
                        new_xinjuejing: {
                            audio: 'ext:阴间集结/audio:2',
                            group: 'new_xinjuejing_2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                            subSkill: {
                                2: {
                                    popup: false,
                                    trigger: {
                                        player: ['dying', 'dyingAfter', 'phaseZhunbeiBegin', 'phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(3);
                                        player.hp = player.maxHp;
                                    },
                                },
                            },
                        },
                        new_yongjin: {
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.storage.new_yongjin_num;
                                    }
                                },
                                targetInRange(card) {
                                    if (card.name == 'sha' && _status.event.player.storage.new_yongjin) return true;
                                },
                            },
                            init(player) {
                                if (!player.storage.new_yongjin_num) player.storage.new_yongjin_num = 0;
                            },
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player, cards) {
                                return game.hasPlayer(function (current) {
                                    var es = current.getCards('e');
                                    for (var i = 0; i < es.length; i++) {
                                        if (
                                            game.hasPlayer(function (current2) {
                                                return current != current2 && !current2.isMin() && current2.isEmpty(get.subtype(es[i]));
                                            })
                                        ) {
                                            return true;
                                        }
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                event.count = 3;
                                ('step 1');
                                event.count--;
                                if (!lib.skill.new_yongjin.filter(null, player, cards)) {
                                    event.finish();
                                    return;
                                }
                                var next = player.chooseTarget(2, function (card, player, target) {
                                    if (ui.selected.targets.length) {
                                        var from = ui.selected.targets[0];
                                        if (target.isMin()) return false;
                                        var es = from.getCards('e');
                                        for (var i = 0; i < es.length; i++) {
                                            if (target.isEmpty(get.subtype(es[i]))) return true;
                                        }
                                        return false;
                                    } else {
                                        return target.countCards('e') > 0;
                                    }
                                });
                                next.set('ai', function (target) {
                                    var player = _status.event.player;
                                    var att = get.attitude(player, target);
                                    var sgnatt = get.sgn(att);
                                    if (ui.selected.targets.length == 0) {
                                        if (att > 0) {
                                            if (
                                                target.countCards('e', function (card) {
                                                    return (
                                                        get.value(card, target) < 0 &&
                                                        game.hasPlayer(function (current) {
                                                            return current != target && get.attitude(player, current) < 0 && current.isEmpty(get.subtype(card));
                                                        })
                                                    );
                                                }) > 0
                                            )
                                                return 9;
                                        } else if (att < 0) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    if (current != target && get.attitude(player, current) > 0) {
                                                        var es = target.getCards('e', function (card) {
                                                            return !_status.event.cards.includes(card);
                                                        });
                                                        for (var i = 0; i < es.length; i++) {
                                                            if (get.value(es[i], target) > 0 && current.isEmpty(get.subtype(es[i])) && get.effect(current, es[i], player, current) > 0) return true;
                                                        }
                                                    }
                                                })
                                            ) {
                                                return -att;
                                            }
                                        }
                                        return 0;
                                    }
                                    var es = ui.selected.targets[0].getCards('e', function (card) {
                                        return !_status.event.cards.includes(card);
                                    });
                                    var i;
                                    var att2 = get.sgn(get.attitude(player, ui.selected.targets[0]));
                                    for (var i = 0; i < es.length; i++) {
                                        if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.isEmpty(get.subtype(es[i]))) {
                                            return Math.abs(att);
                                        }
                                    }
                                    if (i == es.length) {
                                        return 0;
                                    }
                                    return -att * get.attitude(player, ui.selected.targets[0]);
                                });
                                next.set('multitarget', true);
                                next.set('cards', cards);
                                next.set('targetprompt', ['被移走', '移动目标']);
                                next.set('prompt', '【勇进】:移动场上的一张装备牌');
                                ('step 2');
                                if (result.bool) {
                                    player.line2(result.targets, 'green');
                                    player.popup('勇进');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                ('step 4');
                                if (targets.length == 2) {
                                    player
                                        .choosePlayerCard(
                                            'e',
                                            true,
                                            function (button) {
                                                var player = _status.event.player;
                                                var targets0 = _status.event.targets0;
                                                var targets1 = _status.event.targets1;
                                                if (get.attitude(player, targets0) > 0 && get.attitude(player, targets1) < 0) {
                                                    if (get.value(button.link, targets0) < 0 && get.effect(targets1, button.link, player, targets1) > 0) return 10;
                                                    return 0;
                                                } else {
                                                    return get.value(button.link) * get.effect(targets1, button.link, player, player);
                                                }
                                            },
                                            targets[0]
                                        )
                                        .set('nojudge', event.nojudge || false)
                                        .set('targets0', targets[0])
                                        .set('targets1', targets[1])
                                        .set('filterButton', function (button) {
                                            var targets1 = _status.event.targets1;
                                            return targets1.isEmpty(get.subtype(button.link));
                                        })
                                        .set('cards', cards);
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool && result.links.length) {
                                    var link = result.links[0];
                                    event.targets[1].equip(link);
                                    event.targets[0].$give(link, event.targets[1]);
                                } else event.finish();
                                ('step 6');
                                if (event.count > 0) event.goto(1);
                                ('step 7');
                                player.storage.new_yongjin = true;
                                player.storage.new_yongjin_num++;
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player(player) {
                                        var num = 0;
                                        var friends = game.filterPlayer(function (current) {
                                            return get.attitude(player, current) >= 4;
                                        });
                                        var vacancies = {
                                            equip1: 0,
                                            equip2: 0,
                                            equip3: 0,
                                            equip4: 0,
                                            equip5: 0,
                                        };
                                        for (var i = 0; i < friends.length; i++) {
                                            for (var j = 1; j <= 5; j++) {
                                                if (friends[i].isEmpty(j)) {
                                                    vacancies['equip' + j]++;
                                                }
                                            }
                                        }
                                        var sources = game.filterPlayer(function (current) {
                                            return get.attitude(player, current) < 0 && current.countCards('e');
                                        });
                                        for (var i = 0; i < sources.length; i++) {
                                            var es = sources[i].getCards('e');
                                            for (var j = 0; j < es.length; j++) {
                                                var type = get.subtype(es[j]);
                                                if (vacancies[type] && get.value(es[j]) > 0) {
                                                    num++;
                                                    if (num >= 3) {
                                                        return 1;
                                                    }
                                                    vacancies[type]--;
                                                }
                                            }
                                        }
                                        if (num && player.hp == 1) {
                                            return 0.5;
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        xindrlt_poxi: {
                            audio: 2,
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                                //return target!=player;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton(4, ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton(4, [get.translation(target.name) + '的手牌', target.getCards('h')]);
                                }
                                chooseButton.set('target', target);
                                chooseButton.set('ai', function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var ps = [];
                                    var ts = [];
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        var card = ui.selected.buttons[i].link;
                                        if (target.getCards('h').includes(card)) ts.push(card);
                                        else ps.push(card);
                                    }
                                    var card = button.link;
                                    var owner = get.owner(card);
                                    var val = get.value(card) || 1;
                                    if (owner == target) {
                                        if (ts.length > 1) return 0;
                                        if (ts.length == 0 || player.hp > 3) return val;
                                        return 2 * val;
                                    }
                                    return 7 - val;
                                });
                                chooseButton.set('filterButton', function (button) {
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                    }
                                    return true;
                                });
                                ('step 1');
                                if (result.bool) {
                                    var list = result.links;
                                    for (var i = 0; i < list.length; i++) {
                                        if (get.owner(list[i]) == player) {
                                            event.list1.push(list[i]);
                                        } else {
                                            event.list2.push(list[i]);
                                        }
                                    }
                                    if (event.list1.length && event.list2.length) {
                                        target.discard(event.list2).delay = false;
                                        player.discard(event.list1);
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else player.discard(event.list1);
                                }
                                ('step 2');
                                if (event.list1.length + event.list2.length == 4) {
                                    if (event.list1.length == 0) player.gainMaxHp(2);
                                    if (event.list1.length == 1) {
                                        target.loseMaxHp(2);
                                        player.draw(3);
                                        player.addTempSkill('xindrlt_poxi1', { player: 'phaseAfter' });
                                    }
                                    if (event.list1.length == 3) player.draw(4);
                                    if (event.list1.length == 3) player.hp = player.maxHp;
                                    if (event.list1.length == 4) player.draw(8);
                                }
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target(player, target, card) {
                                        return -1;
                                    },
                                },
                            },
                        },
                        xindrlt_poxi1: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num + 5;
                                },
                            },
                        },
                        xindrlt_jieying_mark: {
                            marktext: '营',
                            intro: {
                                name: '营',
                                content: 'mark',
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.hasMark('xindrlt_jieying_mark') && card.name == 'sha')
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('xindrlt_jieying');
                                            })
                                        );
                                },
                                maxHandcard(player, num) {
                                    if (player.hasMark('xindrlt_jieying_mark'))
                                        return (
                                            num +
                                            game.countPlayer(function (current) {
                                                return current.hasSkill('xindrlt_jieying');
                                            })
                                        );
                                },
                            },
                            audio: ['xindrlt_jieying', 2],
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    player.hasMark('xindrlt_jieying_mark') &&
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('xindrlt_jieying');
                                    })
                                );
                            },
                            content() {
                                trigger.num += game.countPlayer(function (current) {
                                    return current.hasSkill('xindrlt_jieying');
                                });
                            },
                            ai: {
                                nokeep: true,
                                skillTagFilter(player) {
                                    if (!player.hasMark('xindrlt_jieying_mark')) return false;
                                },
                            },
                        },
                        xindrlt_jieying: {
                            audio: ['drlt_jieying', 2],
                            charlotte: true,
                            fixed: true,
                            global: 'xindrlt_jieying_mark',
                            group: ['xindrlt_jieying_1', 'xindrlt_jieying_2', 'xindrlt_jieying_3'],
                            subSkill: {
                                1: {
                                    audio: ['drlt_jieying', 2],
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !game.hasPlayer(function (current) {
                                            return current.hasMark('xindrlt_jieying_mark');
                                        });
                                    },
                                    content() {
                                        player.addMark('xindrlt_jieying_mark', 1);
                                    },
                                },
                                2: {
                                    audio: ['drlt_jieying', 2],
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasMark('xindrlt_jieying_mark');
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt('xindrlt_jieying'), '将<营>交给一名角色;其摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1且手牌上限+1.该角色回合结束后,其移去<营>标记,你获得其所有手牌', function (card, player, target) {
                                            return target != player;
                                        }).ai = function (target) {
                                            if (get.attitude(player, target) > 0) return 0.1;
                                            if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                            return 1;
                                        };
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            var mark = player.countMark('xindrlt_jieying_mark');
                                            player.removeMark('xindrlt_jieying_mark', mark);
                                            target.addMark('xindrlt_jieying_mark', mark);
                                        }
                                    },
                                },
                                3: {
                                    audio: ['drlt_jieying', 2],
                                    trigger: {
                                        global: 'phaseBefore',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player && event.player.hasMark('xindrlt_jieying_mark') && event.player.isAlive();
                                    },
                                    logTarget: 'player',
                                    content() {
                                        trigger.player.give(trigger.player.getCards('h'), player);
                                        trigger.player.skip('phaseDraw');
                                        trigger.player.skip('phaseUse');
                                        trigger.player.removeMark('xindrlt_jieying_mark', trigger.player.countMark('xindrlt_jieying_mark'));
                                    },
                                },
                            },
                        },
                        xinrepojun: {
                            shaRelated: true,
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { player: 'useCardToPlayered' },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') >= 0;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.hp, trigger.target.countCards('he'))], get.prompt('xinrepojun', trigger.target));
                                next.set('ai', function (button) {
                                    if (!_status.event.goon) return 0;
                                    var val = get.value(button.link);
                                    if (button.link == _status.event.target.getEquip(2)) return 2 * (val + 3);
                                    return val;
                                });
                                next.set('goon', get.attitude(player, trigger.target) <= 0);
                                next.set('forceAuto', true);
                                ('step 1');
                                if (result.bool) {
                                    var target = trigger.target;
                                    target.addSkill('xinrepojun2');
                                    target.storage.xinrepojun2.addArray(result.cards);
                                    target.lose(result.cards, ui.special, 'toStorage');
                                    game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                                    target.markSkill('xinrepojun2');
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.hp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.name == 'sha' && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: 'xinrepojun3',
                        },
                        xinrepojun3: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { source: 'damageBegin1' },
                            forced: true,
                            logTarget: 'player',
                            filter(event, player) {
                                var target = event.player;
                                return event.parent.name == 'sha';
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        xinrepojun2: {
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            popup: false,
                            charlotte: true,
                            filter(event, player) {
                                return player.storage.xinrepojun2 && player.storage.xinrepojun2.length;
                            },
                            content() {
                                game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.xinrepojun2, 'draw', 'fromStorage').cards.length) + '张〖破军〗牌');
                                player.storage.xinrepojun2.length = 0;
                                player.removeSkill('xinrepojun2');
                            },
                            intro: {
                                onunmark: 'throw',
                                content: 'cardCount',
                            },
                        },
                        xingongxiu: {
                            audio: ['gongxiu', 2],
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                return player.hasSkill('xinjinghe_clear');
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                event.addIndex = 0;
                                var choices = [];
                                game.countPlayer(function (current) {
                                    if (current.additionalSkills['xinjinghe_' + player.playerid]) event.list1.push(current);
                                    else event.list2.push(current);
                                });
                                event.list1.sortBySeat();
                                if (event.list1.length) choices.push('令' + get.translation(event.list1) + (event.list1.length > 1 ? '各' : '') + '摸三张牌');
                                else event.addIndex++;
                                event.list2.sortBySeat();
                                if (event.list2.length) choices.push('令' + get.translation(event.list2) + (event.list2.length > 1 ? '各' : '') + '弃置三张手牌');
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', choices)
                                    .set('prompt', get.prompt('xingongxiu'))
                                    .set('', function () {
                                        var evt = _status.event.parent;
                                        if (
                                            evt.list2.filter(function (current) {
                                                return get.attitude(player, current) <= 0 && !current.hasSkillTag('noh');
                                            }).length -
                                            evt.list1.length >
                                            1
                                        )
                                            return 1 - evt.addIndex;
                                        return 0;
                                    });
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    if (result.index + event.addIndex == 0) {
                                        game.asyncDraw(event.list1, 3);
                                    } else {
                                        for (var i of event.list2) i.chooseToDiscard('h', true, 3);
                                        event.finish();
                                    }
                                } else event.finish();
                                ('step 2');
                            },
                        },
                        xinnhyinbing: {
                            trigger: { source: 'damageBefore' },
                            forced: true,
                            charlotte: true,
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp(trigger.num);
                            },
                            group: 'xinnhyinbing_draw',
                            subSkill: {
                                draw: {
                                    trigger: { global: 'loseHpAfter' },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        player.draw(3);
                                        player.recover(3);
                                    },
                                },
                            },
                        },
                        xinnhhuoqi: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            usable: 3,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            position: 'he',
                            filterCard: true,
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                target.recover();
                                target.draw();
                            },
                            ai: {
                                order: 1,
                                tag: {
                                    draw: 1,
                                    recover: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isDamaged()) return 3;
                                        if (ui.selected.cards.length) return 0;
                                        return 1;
                                    },
                                },
                            },
                        },
                        xinnhguizhu: {
                            trigger: { global: 'dying' },
                            charlotte: true,
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                player.draw(3);
                                player.recover(3);
                            },
                        },
                        xinnhxianshou: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            usable: 3,
                            charlotte: true,
                            filterTarget: true,
                            content() {
                                target.draw(target.isHealthy() ? 4 : 2);
                            },
                            ai: {
                                order: 1,
                                tag: {
                                    draw: 1,
                                },
                                result: {
                                    target(player, target) {
                                        return target.isHealthy() ? 2 : 0.5;
                                    },
                                },
                            },
                        },
                        xinnhlundao: {
                            charlotte: true,
                            trigger: { player: 'damageEnd' },
                            filter(event, player) {
                                return event.source && player != event.source && player.countCards('h') != event.source.countCards('h');
                            },
                            logTarget: 'source',
                            check(event, player) {
                                return player.countCards('h') < event.source.countCards('h') || get.effect(event.source, { name: 'guohe_copy2' }, player, player) > 0;
                            },
                            content() {
                                if (player.countCards('h') > trigger.source.countCards('h')) player.draw(2);
                                else player.discardPlayerCard(trigger.source, 'he', 3);
                            },
                        },
                        xinnhguanyue: {
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                var cards = get.cards(5);
                                player.chooseButton(['观月:选择获得一张牌', cards.slice(0)], true).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                while (cards.length) {
                                    ui.cardPile.insertBefore(cards.pop(), ui.cardPile.firstChild);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.gain(result.links, 'gain2');
                                    player.hp = player.maxHp;
                                }
                                ('step 2');
                                game.updateRoundNumber();
                            },
                        },
                        xinnhyanzheng: {
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard('h', get.prompt('xinnhyanzheng2'))
                                    .set(
                                        'goon',
                                        (function () {
                                            var num = player.countCards('h') - 1;
                                            return (
                                                game.countPlayer(function (current) {
                                                    return get.damageEffect(current, player, player) > 0;
                                                }) >= Math.min(3, num)
                                            );
                                        })()
                                    )
                                    .set('ai', function (card) {
                                        if (_status.event.goon) return Math.max(1, get.value(card));
                                        return 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var cards = player.getCards('h', function (card) {
                                        return card != result.cards[0] && lib.filter.cardDiscardable(card, player, 'xinnhyanzheng');
                                    });
                                    if (cards.length) {
                                        player.discard(cards);
                                        event.num = cards.length;
                                    } else event.finish();
                                } else event.finish();
                                ('step 2');
                                num = Math.min(num, game.countPlayer());
                                player.chooseTarget([1, num], true, '对' + (num > 1 ? '至多' : '') + get.cnNumber(num) + '名角色造成2点伤害').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var targets = result.targets.sortBySeat();
                                    player.line(targets, 'green');
                                    for (var i of targets) i.damage(2);
                                }
                            },
                        },
                        xinjinghe: {
                            audio: ['jinghe', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return !player.hasSkill('xinjinghe_clear');
                            },
                            selectCard() {
                                if (ui.selected.targets.length) return [ui.selected.targets.length, 4];
                                return [1, 4];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget: true,
                            filterCard(card) {
                                if (ui.selected.cards.length) {
                                    var name = card.name;
                                    for (var i of ui.selected.cards) {
                                        if (i.name == name) return false;
                                    }
                                }
                                return true;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 0;
                                    }) > ui.selected.cards.length
                                )
                                    return get.position(card) == 'e' ? 2 : 1;
                                return 0;
                            },
                            position: 'he',
                            complexCard: true,
                            discard: false,
                            lose: false,
                            delay: false,
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.showCards(cards, get.translation(player) + '发动了【经合】');
                                event.skills = lib.skill.xinjinghe.derivation.randomGets(targets.length);
                                player.addTempSkill('xinjinghe_clear', { player: 'phaseBegin' });
                                event.targets.sortBySeat();
                                ('step 1');
                                event.target = targets[targets.length - event.skills.length];
                                event.target
                                    .chooseControl(event.skills)
                                    .set(
                                        'choiceList',
                                        event.skills.map(function (i) {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })
                                    )
                                    .set('displayIndex', false)
                                    .set('prompt', '选择获得一个技能');
                                ('step 2');
                                var skill = result.control;
                                event.skills.remove(skill);
                                target.addAdditionalSkill('xinjinghe_' + player.playerid, skill);
                                target.popup(skill);
                                game.log(target, '获得了技能', '#g【' + get.translation(skill) + '】');
                                if (event.skills.length) event.goto(1);
                                if (target != game.me && !target.isOnline2()) game.delayx();
                            },
                            ai: {
                                threaten: 3,
                                order: 10,
                                result: {
                                    target: 1,
                                },
                            },
                            derivation: ['xinnhreleiji', 'xinrebiyue', 'xinnew_retuxi', 'xinmingce', 'Q_zhiyan', 'xinnhyinbing', 'xinnhhuoqi', 'xinnhguizhu', 'xinnhxianshou', 'xinnhlundao', 'xinnhguanyue', 'xinnhyanzheng'],
                            subSkill: {
                                clear: {
                                    onremove(player) {
                                        game.countPlayer(function (current) {
                                            current.removeAdditionalSkill('xinjinghe_' + player.playerid);
                                        });
                                    },
                                },
                            },
                        },
                        Q_zhiyan: {
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('Q_zhiyan'), '令一名角色摸一张牌并展示之再摸两张牌.若第一张为基本牌,则其回复2点体力').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.bool = false;
                                    event.target.draw('visible');
                                    event.target.draw(2);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var card = result[0];
                                if (get.type(card) == 'basic') {
                                    if (!event.target.isDisabled(get.subtype(card))) {
                                        event.target.chooseUseTarget(card, true, 'nopopup');
                                    }
                                    event.bool = true;
                                }
                                ('step 3');
                                if (event.bool) target.recover(2);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.2,
                            },
                        },
                        xinmingce: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            usable: 3,
                            position: 'he',
                            filterCard(card) {
                                return card.name == 'sha' || get.type(card) == 'equip';
                            },
                            filter(event, player) {
                                return player.countCards('h', 'sha') > 0 || player.countCards('he', { type: 'equip' }) > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            selectTarget: 2,
                            multitarget: true,
                            discard: false,
                            lose: false,
                            targetprompt: ['得到牌', '出杀目标'],
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 0) {
                                    return player != target;
                                } else {
                                    return ui.selected.targets[0].inRange(target);
                                }
                            },
                            delay: false,
                            content() {
                                'step 0';
                                targets[0].gain(cards, player, 'give');
                                ('step 1');
                                if (!lib.filter.filterTarget({ name: 'sha' }, targets[0], targets[1])) event._result = { control: 'draw_card' };
                                else
                                    targets[0]
                                        .chooseControl('draw_card', '出杀', function () {
                                            var player = _status.event.player;
                                            var target = _status.event.target;
                                            if (get.effect(_status.event.target, { name: 'sha' }, player, player) > 0) {
                                                return 1;
                                            }
                                            return 0;
                                        })
                                        .set('target', targets[1])
                                        .set('prompt', '对' + get.translation(targets[1]) + '使用一张杀,或摸二张牌');
                                ('step 2');
                                if (result.control == 'draw_card') {
                                    targets[0].draw(2);
                                } else {
                                    targets[0].useCard({ name: 'sha' }, targets[1]);
                                }
                            },
                            ai: {
                                result: {
                                    player(player) {
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != player && get.attitude(player, players[i]) > 1 && get.attitude(players[i], player) > 1) {
                                                return 1;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (ui.selected.targets.length) {
                                            return -0.1;
                                        }
                                        return 1;
                                    },
                                },
                                order: 8.5,
                                expose: 0.2,
                            },
                        },
                        xinnhreleiji: {
                            group: 'xinnhreleiji_misa',
                            derivation: 'xinnhreleiji_faq',
                            trigger: { player: ['useCard', 'respond'] },
                            charlotte: true,
                            filter(event, player) {
                                return event.card.name == 'shan' || (event.name == 'useCard' && event.card.name == 'shandian') || (event.name == 'useCard' && event.card.name == 'sha');
                            },
                            judgeCheck(card, bool) {
                                var suit = card.suit;
                                if (suit == 'spade') {
                                    if (bool && card.number > 1 && card.number < 10) return 5;
                                    return 4;
                                }
                                if (suit == 'club') return 2;
                                return 0;
                            },
                            content() {
                                player.judge(lib.skill.xinnhreleiji.judgeCheck).judge2 = function (result) {
                                    return result.bool ? true : false;
                                };
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (
                                            get.tag(card, 'respondShan') &&
                                            !player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            var be = target.countCards('e', { color: 'black' });
                                            if (target.countCards('h', 'shan') && be) {
                                                if (!target.hasSkill('xinguidao')) return 0;
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                if (!target.hasSkill('xinguidao')) return 0;
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || (be && target.countCards('h') >= 2)) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1 && !be) {
                                                return [1.2, 0];
                                            }
                                            if (!target.hasSkill('xinguidao')) return [1, 0.05];
                                            return [1, Math.min(0.5, (target.countCards('h') + be) / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        xinnhreleiji_misa: {
                            trigger: { player: 'judgeAfter' },
                            charlotte: true,
                            forced: true,
                            disableReason: ['暴虐', '助祭', '弘仪', '孤影'],
                            filter(event, player) {
                                return !lib.skill.xinnhreleiji_misa.disableReason.includes(event.judgestr) && ['spade', 'club'].includes(event.result.suit);
                            },
                            content() {
                                'step 0';
                                event.num = 2 + ['club', 'spade'].indexOf(trigger.result.suit);
                                event.logged = false;
                                if (event.num == 2 && player.isDamaged()) {
                                    event.logged = true;
                                    player.recover(2);
                                }
                                player.chooseTarget('雷击:是否对一名角色造成' + event.num + '点雷电伤害？', lib.filter.notMe).ai = function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player, 'thunder');
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.line(result.targets, 'thunder');
                                    result.targets[0].damage(event.num, 'thunder');
                                }
                            },
                        },
                        xinnhreleiji_faq: {},
                        xinnew_retuxi: {
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            forced: true,
                            preHidden: true,
                            charlotte: true,
                            filter(event, player) {
                                return (
                                    event.num > 0 &&
                                    !event.numFixed &&
                                    game.hasPlayer(function (target) {
                                        return target.countCards('h') > 0 && player != target;
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                var num = get.copy(trigger.num);
                                if (get.mode() == 'guozhan' && num > 2) num = 2;
                                player
                                    .chooseTarget(
                                        get.prompt('xinnew_retuxi'),
                                        '获得至多' + get.translation(num) + '名角色的各一张手牌,少摸等量的牌',
                                        [1, num],
                                        function (card, player, target) {
                                            return target.countCards('h') > 0 && player != target;
                                        },
                                        function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkill('tuntian')) return att / 10;
                                            return 1 - att;
                                        }
                                    )
                                    .setHiddenSkill('xinnew_retuxi');
                                ('step 1');
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.gainMultiple(result.targets);
                                    player.draw(3);
                                    trigger.num -= result.targets.length;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (trigger.num <= 0) game.delay();
                            },
                            ai: {
                                threaten: 1.6,
                                expose: 0.2,
                            },
                        },
                        xinrebiyue: {
                            trigger: { player: 'phaseJieshuBegin' },
                            charlotte: true,
                            forced: true,
                            content() {
                                var num = 3;
                                if (!player.countCards('h')) {
                                    num = 5;
                                }
                                player.draw(num);
                                player.recover(num);
                            },
                        },
                        xinyufeng: {
                            audio: ['jinghe', 2],
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            content() {
                                'step 0';
                                player.draw(2);
                                player.gainMaxHp();
                                player.recover();
                                ('step 1');
                                player
                                    .chooseTarget('请选择【御风】的目标', [0, 4], function (card, player, target) {
                                        return target != player && !target.hasSkill('xinyufeng2');
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = -get.attitude(player, target),
                                            attx = att * 2;
                                        if (att <= 0 || target.hasSkill('xinfu_pdgyingshi')) return 0;
                                        if (target.hasJudge('lebu')) attx -= att;
                                        if (target.hasJudge('bingliang')) attx -= att;
                                        return attx / Math.max(2.25, Math.sqrt(target.countCards('h') + 1));
                                    });
                                ('step 2');
                                if (result.bool) {
                                    result.targets.sortBySeat();
                                    player.line(result.targets, 'green');
                                    game.log(result.targets, '获得了', '#y<御风>', '效果');
                                    for (var i of result.targets) i.addSkill('xinyufeng2');
                                    player.draw(4 - result.targets.length);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                                threaten: 3.2,
                            },
                        },
                        xinyufeng2: {
                            trigger: {
                                player: 'phaseBefore',
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.removeSkill('xinyufeng2');
                                ('step 1');
                                player.skip('phaseZhunbeiBefore');
                                player.skip('phaseDraw');
                                player.skip('phaseUse');
                                player.skip('phaseJieshuBefore');
                            },
                            mark: true,
                            intro: {
                                content: '跳过所有阶段',
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xintianshu: {
                            audio: ['jinghe', 2],
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            usable: 1,
                            filter(event, player) {
                                return (
                                    player.countCards('he') > 0 &&
                                    !game.hasPlayer(function (current) {
                                        return current.countCards('ej', 'taipingyaoshu');
                                    })
                                );
                            },
                            position: 'he',
                            filterCard: true,
                            filterTarget: true,
                            check(card) {
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                if (!lib.inpile.includes('taipingyaoshu')) {
                                    lib.inpile.push('taipingyaoshu');
                                    event.card = game.createCard2('taipingyaoshu', 'heart', 3);
                                } else {
                                    event.card = get.cardPile(function (card) {
                                        return card.name == 'taipingyaoshu';
                                    });
                                }
                                if (!event.card) event.finish();
                                else target.gain(event.card, 'gain2');
                                target.hp = target.maxHp;
                                target.draw(5);
                                ('step 1');
                                if (target.getCards('h').includes(card) && card.name == 'taipingyaoshu') target.chooseUseTarget(card, 'nopopup', true);
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target(player, target) {
                                        if (
                                            lib.inpile.includes('taipingyaoshu') &&
                                            !get.cardPile(function (card) {
                                                return card.name == 'taipingyaoshu';
                                            })
                                        )
                                            return 0;
                                        return target.getUseValue({ name: 'taipingyaoshu' });
                                    },
                                },
                            },
                        },
                        xinxin_huanhua: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            priority: null,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        xinxin_xukong2: {
                            mod: {
                                targetInRange(card, player, target) {
                                    return true;
                                },
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                            },
                            audio: ['jinghe', 2],
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin', 'dieBegin', 'dieBefore', 'dying'],
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        xinxin_xukong3: {
                            audio: ['jinghe', 2],
                            trigger: { target: 'useCardToTarget' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                        },
                        shen_shentong: {
                            audio: ['jinghe', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['选择一名角色,移除其所有手牌', '选择一名角色,使其失去所有体力', '选择一名角色,移除其所有技能', '选择一名角色,其将体力回复至体力上限', '选择一名角色,令一名角色将手牌补至五张'];
                                    var choiceList = ui.create.dialog('神通:清选择一项', 'forcebutton', 'hidden');
                                    for (var i = 0; i < list.length; i++) {
                                        var bool = game.hasPlayer(function (current) {
                                            return current != player && lib.skill.shen_shentong.backups[i].filterTarget(null, player, current);
                                        });
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (!bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        next.firstChild._filterButton = bool;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                },
                                filter(button) {
                                    return button._filterButton;
                                },
                                backup(links) {
                                    var next = get.copy(lib.skill.shen_shentong.backups[links[0]]);
                                    next.audio = 'jinghe';
                                    next.filterCard = function () {
                                        return false;
                                    };
                                    next.selectCard = -1;
                                    return next;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 0: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxHp();
                                            });
                                            return (Math.min(target.hp, player.maxHp) - player.hp) * 2;
                                        }
                                        case 1: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxHandcard();
                                            });
                                            return Math.min(5, target.countCards('h') - player.countCards('h')) * 0.8;
                                        }
                                        case 2: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxEquip();
                                            });
                                            return (target.countCards('e') - player.countCards('e')) * 1.4;
                                        }
                                    }
                                },
                                prompt(links) {
                                    return ['选择一名角色,移除其所有手牌', '选择一名角色,使其失去所有体力', '选择一名角色,移除其所有技能', '选择一名角色,其将体力回复至体力上限', '选择一名角色,令其将手牌补至五张'][links[0]];
                                },
                            },
                            backups: [
                                {
                                    filterTarget(card, player, target) {
                                        return target.countCards('h') > 0;
                                    },
                                    content() {
                                        target.lose(target.getCards('h'));
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        target.loseHp(target.hp);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        var skills = target.getSkills();
                                        target.removeSkill([skills]);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        target.hp = target.maxHp;
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return target.countCards('h') < 5;
                                    },
                                    content() {
                                        target.drawTo(5);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                            ],
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        newxinxianfa: {
                            audio: ['jinghe', 2],
                            charlotte: true,
                            fixed: true,
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hes')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'fire' }, player, event)) list.push(['基本', '', 'sha', 'fire']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'thunder' }, player, event)) list.push(['基本', '', 'sha', 'thunder']);
                                            if ((get.mode() != 'guozhan' || _status.mode == 'yingbian') && event.filterCard({ name: name, nature: 'ice' }, player, event)) list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('仙法', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (['wugu', 'zhulu_card'].includes(button.link[2])) return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
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
                                        filterCard: true,
                                        audio: ['jinghe', 2],
                                        charlotte: true,
                                        fixed: true,
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('newxinxianfa2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes')) return false;
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
                        newxinxianfa2: {
                            trigger: { player: ['useCardAfter', 'respondAfter'] },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'newxinxianfa_backup';
                            },
                            content() {
                                player.draw();
                            },
                        },
                        newxinxianfa_backup: { audio: 'jinghe' },
                        nhhuashen: {
                            audio: 'jinghe',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            usable: 3,
                            init(player) {
                                player.storage.nhhuashen = [];
                                // player.storage.wanhua2=0;
                            },
                            // mark:true,
                            intro: {
                                name: '化身的武将',
                                content: 'characters',
                            },
                            content() {
                                'step 0';
                                var list = Object.keys(lib.character).filter((c) => !lib.character[c][4].includes('unseen'));
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    list.remove(player.name);
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                }
                                list = list.randomGets(400);
                                if (!list) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player
                                    .chooseButton()
                                    .set('ai', function (button) {
                                        return get.rank(button.link, true) - lib.character[button.link][2];
                                    })
                                    .set('createDialog', ['获得一张武将牌上的所有技能', [list, 'character'], 'hidden']);
                                ('step 1');
                                if (result?.links?.length && lib.character[result.links[0]]) {
                                    //QQQ
                                    game.log(player, '获得', result.links[0], '武将的所有技能');
                                    player.storage.nhhuashen.push(result.links[0]);
                                    player.markAuto('nhhuashen', [result.links[0]]);
                                    player.addSkill(lib.character[result.links[0]][3]);
                                    for (var skill of lib.character[result.links[0]][3]) {
                                        player.addSkillLog(skill);
                                    }
                                }
                            },
                            contentx() {
                                'step 0';
                                'step 1';
                                var list = [];
                                var list2 = [];
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list2.add(players[i].name);
                                    list2.add(players[i].name1);
                                    list2.add(players[i].name2);
                                }
                                for (var i in lib.character) {
                                    if (lib.character[i][4].includes('boss')) continue;
                                    if (lib.character[i][4].includes('minskin')) continue;
                                    if (player.storage.wanhua.includes(i)) continue;
                                    if (list2.includes(i)) continue;
                                    list.push(i);
                                }
                                var name = list.randomGet();
                                player.storage.wanhua.push(name);
                                player.markSkill('wanhua');
                                var skills = lib.character[name][3];
                                for (var i = 0; i < skills.length; i++) {
                                    player.addSkill(skills[i]);
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【万化】', [[name], 'character']);
                                ('step 2');
                                event.dialog.close();
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        xinregushe: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            selectTarget: [1, 7],
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                player.addTempSkill('xinregushe2');
                                player.chooseToCompare(targets).callback = lib.skill.xinregushe.callback;
                            },
                            intro: {
                                name: '饶舌',
                                content: 'mark',
                            },
                            callback() {
                                'step 0';
                                if (event.num1 <= event.num2) {
                                    target.chat(lib.skill.gushe.chat[player.countMark('xinregushe')]);
                                    player.addMark('xinregushe', 1);
                                } else player.addMark('xinregushe2', 1, false);
                                ('step 1');
                                if (event.num1 >= event.num2) {
                                    target
                                        .chooseToDiscard('he', '弃置一张牌,或令' + get.translation(player) + '摸三张牌增加三点体力上限并回复到体力上限')
                                        .set('ai', function (card) {
                                            if (_status.event.goon) return 6 - get.value(card);
                                            return 0;
                                        })
                                        .set('goon', get.attitude(target, player) < 0);
                                } else event.goto(3);
                                ('step 2');
                                if (!result.bool) {
                                    player.draw(3);
                                    player.gainMaxHp(3);
                                    player.hp = target.maxHp;
                                    target.skip('phaseZhunbeiBefore');
                                    target.skip('phaseDraw');
                                    target.skip('phaseUse');
                                    target.skip('phaseJieshuBefore');
                                    target.addTempSkill('xinregushe3', { player: ['phaseZhunbeiBefore', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseJieshuBeforeSkipped', 'phaseZhunbeiBeforeSkipped'] });
                                }
                                ('step 3');
                                if (event.num1 <= event.num2) {
                                    player.chooseToDiscard('he', '弃置一张牌,或摸三张牌增加三点体力上限并回复到体力上限').set('ai', function () {
                                        return -1;
                                    });
                                } else event.finish();
                                ('step 4');
                                if (!result.bool) player.draw(3);
                                player.gainMaxHp(3);
                                player.hp = target.maxHp;
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var num = ui.selected.targets.length + 1;
                                        if (num + player.countMark('xinregushe') <= 6) return -1;
                                        var hs = player.getCards('h');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.value(hs[i]) <= 6) {
                                                switch (hs[i].number) {
                                                    case 13:
                                                        return -1;
                                                    case 12:
                                                        if (player.countMark('xinregushe') + num <= 8) return -1;
                                                        break;
                                                    case 11:
                                                        if (player.countMark('xinregushe') + num <= 7) return -1;
                                                        break;
                                                    default:
                                                        if (hs[i].number > 5 && player.countMark('xinregushe') + num <= 6) return -1;
                                                }
                                            }
                                        }
                                        return 0;
                                    },
                                },
                            },
                            marktext: '饶',
                        },
                        xinregushe2: {
                            charlotte: true,
                        },
                        xinregushe3: {
                            mark: true,
                            intro: {
                                name: '鼓舌',
                                content: '跳过下个回合所有阶段',
                            },
                        },
                        xinrejici: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'compare',
                                target: 'compare',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                if (player != event.target && event.iwhile) return false;
                                return (player == event.player ? event.num1 : event.num2) <= player.countMark('xinregushe');
                            },
                            content() {
                                trigger[player == trigger.player ? 'num1' : 'num2'] += player.countMark('xinregushe');
                                game.log(player, '的拼点牌点数+' + player.countMark('xinregushe'));
                                var cards = [trigger.card1];
                                if (trigger.cardlist) cards.addArray(trigger.cardlist);
                                else cards.push(trigger.card2);
                                cards.sort(function (a, b) {
                                    return b.number - a.number;
                                });
                                var num = cards[0].number;
                                for (var i = 1; i < cards.length; i++) {
                                    if (cards[i].number < num) {
                                        cards.splice(i);
                                        break;
                                    }
                                }
                                cards = cards.filterInD();
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            group: 'xinrejici2',
                        },
                        xinrejici2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.source && event.source.isIn();
                            },
                            logTarget: 'source',
                            content() {
                                var num = 10 + player.countMark('xinregushe');
                                if (num > 0) trigger.source.chooseToDiscard(num, true, 'he');
                                trigger.source.loseHp(2);
                            },
                        },
                        new_xtaoluan: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'chooseToUse',
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.type != 'wuxie' && event.type != 'respondShan' && player.countCards('he') > 0; //&&!_status.dying.length;
                            },
                            init(player) {
                                if (!player.storage.new_xtaoluan) player.storage.new_xtaoluan = [];
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (player.storage.new_xtaoluan.includes(name)) continue;
                                        if (name == 'sha') {
                                            list.push(['基本', '', 'sha']);
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                            list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('滔乱', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('h', button.link[2]) > 0) return 0;
                                    if (button.link[2] == 'wugu') return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        audio: 'ext:阴间集结/audio:2',
                                        selectCard: 1,
                                        popname: true,
                                        check(card) {
                                            return 6 - get.value(card);
                                        },
                                        position: 'he',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                skillTagFilter(player) {
                                    if (!player.countCards('he') || player.hasSkill('new_xtaoluan3')) return false;
                                    if (!player.storage.new_xtaoluan.includes('tao')) {
                                    } else if (player.isDying() && !player.storage.new_xtaoluan.includes('jiu')) {
                                    } else return false;
                                },
                                order: 4,
                                result: {
                                    player(player) {
                                        var allshown = true,
                                            players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i].ai.shown == 0) {
                                                allshown = false;
                                            }
                                            if (players[i] != player && players[i].countCards('h') && get.attitude(player, players[i]) > 0) {
                                                return 1;
                                            }
                                        }
                                        if (allshown) return 1;
                                        return 0;
                                    },
                                },
                                threaten: 1.9,
                            },
                            group: ['new_xtaoluan2', 'new_xtaoluan4', 'new_xtaoluan5'],
                        },
                        new_xtaoluan2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'new_xtaoluan_backup' || event.skill == 'new_xtaoluan5' || event.skill == 'new_xtaoluan4';
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(
                                        true,
                                        function (card, player, target) {
                                            return target != player;
                                        },
                                        '滔乱<br><br><div class="text center">令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别相同的牌你增加一点体力上限并回复一点体力;2.其失去1点体力上限你增加一点体力上限并回复一点体力'
                                    )
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) > 0) {
                                            if (get.attitude(target, player) > 0) {
                                                return target.countCards('h');
                                            }
                                            return target.countCards('h') / 2;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                var target = result.targets[0];
                                event.target = target;
                                player.line(target, 'green');
                                var type = get.type(trigger.card, 'trick');
                                target
                                    .chooseCard('滔乱<br><br><div class="text center">交给' + get.translation(player) + '一张不为' + get.translation(type) + '牌的牌,或令其失去一点体力且滔乱无效直到回合结束', 'he', function (card, player, target) {
                                        return get.type(card, 'trick') != _status.event.cardType;
                                    })
                                    .set('cardType', type)
                                    .set('ai', function (card) {
                                        if (_status.event.att) {
                                            return 11 - get.value(card);
                                        }
                                        return 0;
                                    })
                                    .set('att', get.attitude(target, player) > 0);
                                ('step 2');
                                var target = event.target;
                                if (result.bool) {
                                    player.gain(result.cards, target, 'give');
                                    player.gainMaxHp();
                                    player.recover();
                                } else {
                                    var next = target.loseMaxHp();
                                    player.draw();
                                    player.gainMaxHp();
                                    player.recover();
                                }
                            },
                        },
                        new_xtaoluan4: {
                            audio: 'taoluan',
                            prompt: '将一张牌当做闪使用',
                            enable: 'chooseToUse',
                            filter(event, player) {
                                return !player.storage.new_xtaoluan.includes('shan') && player.countCards('he'); //&&!_status.dying.length;
                            },
                            filterCard: true,
                            position: 'he',
                            selectCard: 1,
                            viewAs: {
                                name: 'shan',
                            },
                            ai: {
                                skillTagFilter(player) {
                                    return player.countCards('he') && !player.storage.new_xtaoluan.includes('shan') && !player.hasSkill('new_xtaoluan3');
                                },
                                threaten: 1.5,
                                respondShan: true,
                                order: 3,
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        new_xtaoluan5: {
                            audio: 'taoluan',
                            enable: 'chooseToUse',
                            prompt: '将一张牌当做无懈可击使用',
                            viewAsFilter(player) {
                                return !player.storage.new_xtaoluan.includes('wuxie') && player.countCards('he');
                            },
                            filterCard: true,
                            position: 'he',
                            selectCard: 1,
                            viewAs: {
                                name: 'wuxie',
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
                        new_xtaoluan_backup: {},
                        yin_xionghuo: {
                            group: ['yin_xionghuo_damage', 'yin_xionghuo_begin'],
                            subSkill: {
                                begin: {
                                    audio: 'ext:阴间集结/audio:2',
                                    logTarget: 'player',
                                    charlotte: true,
                                    fixed: true,
                                    line: false,
                                    forced: true,
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('xinxionghuo') > 0 && event.player != player;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player.removeMark('xinxionghuo', trigger.player.countMark('xinxionghuo'));
                                        var list = [1, 2, 3];
                                        var num = list.randomGet();
                                        event.goto(num);
                                        ('step 1');
                                        player.line(trigger.player, 'fire');
                                        trigger.player.damage('fire', 2);
                                        if (!trigger.player.storage.xinxionghuo_disable) trigger.player.storage.xinxionghuo_disable = [];
                                        trigger.player.storage.xinxionghuo_disable.push(player);
                                        trigger.player.addTempSkill('xinxionghuo_disable', 'phaseAfter');
                                        event.goto(4);
                                        ('step 2');
                                        player.line(trigger.player, 'water');
                                        trigger.player.loseMaxHp();
                                        trigger.player.addMark('xinxionghuo_low', 1, false);
                                        trigger.player.addTempSkill('xinxionghuo_low', 'phaseAfter');
                                        event.goto(4);
                                        ('step 3');
                                        player.line(trigger.player, 'green');
                                        if (trigger.player.countCards('h') > 0) {
                                            trigger.player.give(trigger.player.getCards('h'), player);
                                        }
                                        ('step 4');
                                    },
                                },
                                damage: {
                                    audio: 'ext:阴间集结/audio:2',
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('xinxionghuo') > 0;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                },
                            },
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filterTarget(card, player, target) {
                                if (target.hasMark('xinxionghuo')) return false;
                                return player != target > 0;
                            },
                            content() {
                                target.addMark('xinxionghuo', 1);
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        if (
                                            (player.countMark('xinxionghuo') >= 2 ||
                                                !game.hasPlayer(function (current) {
                                                    return current != player && get.attitude(player, current) < 0 && current.hasMark('xinxionghuo');
                                                })) &&
                                            player.countCards('h', function (card) {
                                                return (
                                                    get.tag(card, 'damage') &&
                                                    player.canUse(card, target, null, true) &&
                                                    player.getUseValue(card) > 0 &&
                                                    get.effect_use(target, card, player) > 0 &&
                                                    target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                    })
                                                );
                                            })
                                        )
                                            return 3 / Math.max(1, target.hp);
                                        if (
                                            (!player.hasUnknown() &&
                                                game.countPlayer(function (current) {
                                                    return get.attitude(player, current) < 0;
                                                }) <= 1) ||
                                            player.countMark('xinxionghuo') >= 2
                                        ) {
                                            return -1;
                                        }
                                        return 0;
                                    },
                                },
                                effect: {
                                    player(card, player, target) {
                                        if (
                                            player != target &&
                                            get.tag(card, 'damage') &&
                                            target &&
                                            target.hasMark('xinxionghuo') &&
                                            !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                            })
                                        )
                                            return [1, 0, 1, -2];
                                    },
                                },
                                threaten: 1.6,
                            },
                        },
                        xinxionghuo: {
                            marktext: '戾',
                            mark: true,
                            intro: {
                                name: '暴戾',
                                content: 'mark',
                            },
                        },
                        xinxionghuo_disable: {
                            mod: {
                                playerEnabled(card, player, target) {
                                    return false;
                                },
                            },
                            charlotte: true,
                            mark: true,
                            marktext: '禁',
                            intro: {
                                content: '本回合内不能使用牌',
                            },
                        },
                        xinxionghuo_low: {
                            mod: {
                                maxHandcard(player, num) {
                                    return num - 10;
                                },
                            },
                            marktext: '减',
                            mark: true,
                            charlotte: true,
                            intro: {
                                content: '本回合内手牌上限-10',
                            },
                        },
                        yin_shajue: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player != player;
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            //priority:7,
                            content() {
                                if (get.itemtype(trigger.parent.cards) == 'cards' && get.position(trigger.parent.cards[0], true) == 'o') {
                                    player.gain(trigger.parent.cards, 'gain2');
                                }
                                player.gainMaxHp(2);
                                player.hp = player.maxHp;
                            },
                        },
                        new_pianchong: {
                            group: 'new_pianchong3',
                            audio: ['pianchong', 2],
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                var cards = [];
                                var card1 = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'red';
                                });
                                if (card1) cards.push(card1);
                                var card2 = get.cardPile2(function (card) {
                                    return get.color(card, false) == 'black';
                                });
                                if (card2) cards.push(card2);
                                if (cards.length) player.gain(cards, 'gain2');
                                ('step 1');
                                game.updateRoundNumber();
                                player
                                    .chooseControl('red', 'black')
                                    .set('prompt', '偏宠:请选择一种颜色.直至你的下回合开始时,失去该颜色的一张牌后,从牌堆获得另一种颜色的一张牌.')
                                    .set('ai', function () {
                                        var red = 0,
                                            black = 0;
                                        var player = _status.event.player;
                                        var cards = player.getCards('he');
                                        for (var i of cards) {
                                            var add = 1;
                                            var color = get.color(i, player);
                                            if (get.position(i) == 'e') add = 0.5;
                                            else if (i.name != 'sha' && player.hasValueTarget(i)) add = 1.5;
                                            if (color == 'red') red += add;
                                            else black += add;
                                        }
                                        if (black > red) return 'black';
                                        return 'red';
                                    });
                                ('step 2');
                                player.storage.new_pianchong2 = result.control;
                                player.addTempSkill('new_pianchong2', { player: 'phaseBeginStart' });
                                player.popup(result.control, result.control == 'red' ? 'fire' : 'thunder');
                                game.log(player, '声明了', '#y' + get.translation(result.control));
                            },
                            ai: {
                                threaten: 4.8,
                            },
                        },
                        new_zhengnan: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: ['dying', 'recoverEnd'],
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'recoverEnd') {
                                    return event.player != player;
                                } else {
                                    return !player.storage.new_zhengnan || !player.storage.new_zhengnan.includes(event.player);
                                }
                            },
                            content() {
                                'step 0';
                                if (!player.storage.new_zhengnan) player.storage.new_zhengnan = [];
                                player.storage.new_zhengnan.add(trigger.player);
                                player.storage.new_zhengnan.sortBySeat();
                                player.markSkill('new_zhengnan');
                                player.gainMaxHp();
                                player.hp = player.maxHp;
                                var list = [];
                                if (!player.hasSkill('new_xinrewusheng')) {
                                    list.push('new_xinrewusheng');
                                }
                                if (!player.hasSkill('new_xindangxian')) {
                                    list.push('new_xindangxian');
                                }
                                if (!player.hasSkill('new_rezhiman')) {
                                    list.push('new_rezhiman');
                                }
                                if (!player.hasSkill('new_olpaoxiao')) {
                                    list.push('new_olpaoxiao');
                                }
                                if (list.length) {
                                    player.draw(3);
                                    event.list = list;
                                } else {
                                    player.draw(3);
                                    event.finish();
                                }
                                ('step 1');
                                if (event.list.length == 1) event._result = { control: event.list[0] };
                                else
                                    player
                                        .chooseControl(event.list)
                                        .set('prompt', '征南:选择获得下列技能中的一个')
                                        .set('ai', function () {
                                            if (event.list.includes('new_xindangxian')) return 'new_xindangxian';
                                            return 0;
                                        });
                                ('step 2');
                                if (result.control == 'new_xindangxian') player.storage.xinfuli = true;
                                player.addSkill(result.control);
                                player.popup(result.control);
                                game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            intro: {
                                content: '已因$发动过技能',
                            },
                            derivation: ['new_xinrewusheng', 'new_xindangxian', 'new_rezhiman', 'new_olpaoxiao'],
                        },
                        new_olpaoxiao: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('new_olpaoxiao2');
                                player.addMark('new_olpaoxiao2', 1, false);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        new_olpaoxiao2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            audio: 'ext:阴间集结/audio:2',
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && player.countMark('new_olpaoxiao2') > 0;
                            },
                            content() {
                                trigger.num += player.countMark('new_olpaoxiao2');
                                player.removeSkill('new_olpaoxiao2');
                            },
                            intro: {
                                content: '本回合内下一次使用【杀】造成伤害时令伤害值+#',
                            },
                        },
                        new_xindangxian: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            audio: 'ext:阴间集结/audio:2',
                            content() {
                                var next = player.phaseUse();
                                next.xindangxian = true;
                                event.next.remove(next);
                                trigger.next.push(next);
                            },
                            group: 'new_xindangxian_rewrite',
                            subSkill: {
                                rewrite: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(kagari) {
                                        return kagari.xindangxian == true;
                                    },
                                    content() {
                                        'step 0';
                                        if (player.storage.xinfuli) {
                                            player.chooseBool('是否失去1点体力并获得一张【杀】？').ai = function () {
                                                return player.hp > 2 && !player.hasSha();
                                            };
                                        } else event._result = { bool: true };
                                        ('step 1');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        player.loseHp();
                                        ('step 2');
                                        var card = get.cardPile(function (card) {
                                            return card.name == 'sha';
                                        });
                                        if (card) player.gain(card, 'gain2');
                                        ('step 3');
                                        game.updateRoundNumber();
                                    },
                                },
                            },
                        },
                        new_rezhiman: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                source: 'damageBegin2',
                            },
                            filter(event, player) {
                                return player != event.player;
                            },
                            check(event, player) {
                                if (get.damageEffect(event.player, player, player) < 0) return true;
                                var att = get.attitude(player, event.player);
                                if (att > 0 && event.player.countCards('j')) return true;
                                if (event.num > 1) {
                                    if (att < 0) return false;
                                    if (att > 0) return true;
                                }
                                var cards = event.player.getGainableCards(player, 'he');
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.equipValue(cards[i]) >= 6) return true;
                                }
                                return false;
                            },
                            logTarget: 'player',
                            content() {
                                if (trigger.player.countGainableCards(player, 'hej')) {
                                    player.gainPlayerCard(trigger.player, 'hej', true);
                                }
                                trigger.cancel();
                            },
                        },
                        new_xinrewusheng: {
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && card.name == 'sha') return true;
                                },
                            },
                            audio: 'ext:阴间集结/audio:1',
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'he',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('he')) return false;
                                } else {
                                    if (!player.countCards('he', { color: 'red' })) return false;
                                }
                            },
                            prompt: '将一张红色牌当杀使用或打出',
                            check(card) {
                                return 4 - get.value(card);
                            },
                            ai: {
                                respondSha: true,
                                skillTagFilter(player) {
                                    if (get.zhu(player, 'shouyue')) {
                                        if (!player.countCards('he')) return false;
                                    } else {
                                        if (!player.countCards('he', { color: 'red' })) return false;
                                    }
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
                        },
                        new_xiefang: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + Infinity;
                                },
                            },
                        },
                        new_pianchong2: {
                            audio: ['pianchong', 2],
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                for (var i of evt.cards2) {
                                    if (get.color(i, player) == player.storage.new_pianchong2) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = trigger.getl(player).cards2.filter(function (card) {
                                    return get.color(card, player) == player.storage.new_pianchong2;
                                }).length;
                                var cards = [];
                                while (num-- > 0) {
                                    var card = get.cardPile2(function (card) {
                                        return !cards.includes(card) && get.color(card, false) != player.storage.new_pianchong2;
                                    });
                                    if (card) cards.push(card);
                                    else break;
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                                else event.finish();
                                ('step 1');
                                game.updateRoundNumber();
                            },
                            mark: true,
                            intro: {
                                content: '失去一张$牌后,从牌堆中获得一张与此牌颜色不同的牌',
                            },
                        },
                        new_pianchong3: {
                            audio: ['pianchong', 2],
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                return true;
                            },
                            content() {
                                player.draw();
                            },
                        },
                        new_zunwei: {
                            audio: ['zunwei', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['选择一名角色,移除其所有手牌', '选择一名角色,使其失去所有体力', '选择一名角色,移除其所有技能', '选择一名角色,其将体力回复至体力上限', '令一名角色将手牌补至五张'];
                                    var choiceList = ui.create.dialog('尊位:清选择一项', 'forcebutton', 'hidden');
                                    for (var i = 0; i < list.length; i++) {
                                        var bool = game.hasPlayer(function (current) {
                                            return current != player && lib.skill.new_zunwei.backups[i].filterTarget(null, player, current);
                                        });
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        if (!bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        next.firstChild._filterButton = bool;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                },
                                filter(button) {
                                    return button._filterButton;
                                },
                                backup(links) {
                                    var next = get.copy(lib.skill.new_zunwei.backups[links[0]]);
                                    next.audio = 'new_zunwei';
                                    next.filterCard = function () {
                                        return false;
                                    };
                                    next.selectCard = -1;
                                    return next;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 0: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxHp();
                                            });
                                            return (Math.min(target.hp, player.maxHp) - player.hp) * 2;
                                        }
                                        case 1: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxHandcard();
                                            });
                                            return Math.min(5, target.countCards('h') - player.countCards('h')) * 0.8;
                                        }
                                        case 2: {
                                            var target = game.findPlayer(function (current) {
                                                return current.isMaxEquip();
                                            });
                                            return (target.countCards('e') - player.countCards('e')) * 1.4;
                                        }
                                    }
                                },
                                prompt(links) {
                                    return ['选择一名角色,移除其所有手牌', '选择一名角色,使其失去所有体力', '选择一名角色,移除其所有技能', '选择一名角色,其将体力回复至体力上限', '选择一名角色,令其将手牌补至五张!'][links[0]];
                                },
                            },
                            backups: [
                                {
                                    filterTarget(card, player, target) {
                                        return target.countCards('h') > 0;
                                    },
                                    content() {
                                        target.lose(target.getCards('h'));
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        target.loseHp(target.hp);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        var skills = target.getSkills();
                                        target.removeSkill([skills]);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: -1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return (target = player);
                                    },
                                    content() {
                                        target.hp = target.maxHp;
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                                {
                                    filterTarget(card, player, target) {
                                        return target.countCards('h') < 5;
                                    },
                                    content() {
                                        target.drawTo(5);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target: 1,
                                        },
                                    },
                                },
                            ],
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        new_xinrefenyin: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            group: 'new_xinfenyin',
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                if (event.name == 'lose' && event.position != ui.discardPile) return false;
                                var list = [];
                                var num = event.cards.length;
                                if (event.cards && event.cards[0]) {
                                    //QQQ
                                    for (var i = 0; i < event.cards.length; i++) {
                                        var card = event.cards[i];
                                        list.add(get.suit(card, event.cards2 && event.cards2.includes(card) ? event.player : false));
                                    }
                                }
                                game.getGlobalHistory(
                                    'cardMove',
                                    function (evt) {
                                        if (evt == event || (evt.name != 'lose' && evt.name != 'cardsDiscard')) return false;
                                        if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
                                        num += evt.cards.length;
                                        for (var i = 0; i < evt.cards.length; i++) {
                                            var card = evt.cards[i];
                                            list.remove(get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false));
                                        }
                                    },
                                    event
                                );
                                player.storage.new_xinrefenyin_mark2 = num;
                                return list.length;
                            },
                            content() {
                                var list = [];
                                var list2 = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    var card = trigger.cards[i];
                                    var suit = get.suit(card, trigger.cards2 && trigger.cards2.includes(card) ? trigger.player : false);
                                    list.add(suit);
                                    list2.add(suit);
                                }
                                game.getGlobalHistory(
                                    'cardMove',
                                    function (evt) {
                                        if (evt == trigger || (evt.name != 'lose' && evt.name != 'cardsDiscard')) return false;
                                        if (evt.name == 'lose' && evt.position != ui.discardPile) return false;
                                        for (var i = 0; i < evt.cards.length; i++) {
                                            var card = evt.cards[i];
                                            var suit = get.suit(card, evt.cards2 && evt.cards2.includes(card) ? evt.player : false);
                                            list.remove(suit);
                                            list2.add(suit);
                                        }
                                    },
                                    trigger
                                );
                                list2.sort();
                                player.draw(list.length);
                                player.storage.new_xinrefenyin_mark = list2;
                                player.addTempSkill('new_xinrefenyin_mark');
                                player.markSkill('new_xinrefenyin_mark');
                            },
                            subSkill: {
                                mark: {
                                    onremove(player) {
                                        delete player.storage.new_xinrefenyin_mark;
                                        delete player.storage.new_xinrefenyin_mark2;
                                    },
                                    intro: {
                                        content(s, p) {
                                            var str = '本回合已经进入过弃牌堆的卡牌的花色:';
                                            for (var i = 0; i < s.length; i++) {
                                                str += get.translation(s[i]);
                                            }
                                            str += '<br>本回合进入过弃牌堆的牌数:';
                                            str += p.storage.new_xinrefenyin_mark2;
                                            return str;
                                        },
                                    },
                                },
                            },
                        },
                        xinbaonu: {
                            audio: 'ext:阴间集结/audio:2',
                            marktext: '暴',
                            trigger: {
                                source: 'damageSource',
                                player: ['damageEnd', 'enterGame'],
                                global: 'gameDrawAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'damage' || event.num > 0;
                            },
                            content() {
                                player.addMark('xinbaonu', trigger.name == 'damage' ? trigger.num : 2);
                            },
                            intro: {
                                name: '暴怒',
                                content: 'mark',
                            },
                            ai: {
                                combo: 'xinkuangbao',
                                maixie: true,
                                maixie_hp: true,
                            },
                        },
                        xinol_shenfen: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                return player.countMark('xinbaonu') >= 2;
                            },
                            usable: 1,
                            content() {
                                'step 0';
                                event.delay = false;
                                player.removeMark('xinbaonu', 2);
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                player.line(event.targets, 'green');
                                event.targets2 = event.targets.slice(0);
                                event.targets3 = event.targets.slice(0);
                                ('step 1');
                                if (event.targets2.length) {
                                    event.targets2.shift().damage('nocard');
                                    event.redo();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.current = event.targets.shift();
                                    if (event.current.countCards('e')) event.delay = true;
                                    event.current.discard(event.current.getCards('e')).delay = false;
                                }
                                ('step 3');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets.length) event.goto(2);
                                ('step 4');
                                if (event.targets3.length) {
                                    var target = event.targets3.shift();
                                    target.chooseToDiscard(Infinity, 'he', true).delay = false;
                                    if (target.countCards('h')) event.delay = true;
                                }
                                ('step 5');
                                if (event.delay) game.delay(0.5);
                                event.delay = false;
                                if (event.targets3.length) event.goto(4);
                            },
                            ai: {
                                combo: 'xinbaonu',
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
                        xinol_wuqian: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            derivation: 'xinwushuang',
                            filterTarget(card, player, target) {
                                return target != player && !target.hasSkill('xinol_wuqian_targeted');
                            },
                            content() {
                                player.addTempSkill('xinwushuang');
                                player.storage.ol_wuqian_target = target;
                                player.addTempSkill('xinol_wuqian_target');
                                target.addTempSkill('xinol_wuqian_targeted');
                            },
                            subSkill: {
                                equip: {
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (arg && arg.target && arg.target.hasSkill('xinol_wuqian_targeted')) return true;
                                            return false;
                                        },
                                    },
                                },
                                targeted: {
                                    ai: {
                                        unequip2: true,
                                    },
                                },
                                target: {
                                    intro: {
                                        content: '获得无双且$防具失效直到回合结束',
                                    },
                                },
                            },
                        },
                        xinkuangbao: {
                            audio: 'ext:阴间集结/audio:2',
                            group: 'xinkuangbao2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'juedou';
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                if (typeof player.storage.xinbaonu == 'number') {
                                    trigger.num += player.storage.xinbaonu;
                                }
                            },
                        },
                        xinkuangbao2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.nature == 'thunder';
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                if (typeof player.storage.xinbaonu == 'number') {
                                    trigger.num += player.storage.xinbaonu;
                                }
                            },
                        },
                        xinwushuang: {
                            shaRelated: true,
                            audio: 'ext:阴间集结/audio:2',
                            forced: true,
                            group: ['xinwushuang1', 'xinwushuang2'],
                        },
                        xinwushuang1: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
                            },
                            logTarget: 'target',
                            content() {
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].shanRequired == 'number') {
                                    map[id].shanRequired++;
                                } else {
                                    map[id].shanRequired = 2;
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
                                },
                            },
                        },
                        xinwushuang2: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            forced: true,
                            logTarget(trigger, player) {
                                return player == trigger.player ? trigger.target : trigger.player;
                            },
                            filter(event, player) {
                                return event.card.name == 'juedou';
                            },
                            content() {
                                var id = (player == trigger.player ? trigger.target : trigger.player)['playerid'];
                                var idt = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[idt]) map[idt] = {};
                                if (!map[idt].shaReq) map[idt].shaReq = {};
                                if (!map[idt].shaReq[id]) map[idt].shaReq[id] = 1;
                                map[idt].shaReq[id]++;
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if ((arg && arg.card.name != 'juedou') || Math.floor(arg.target.countCards('h', 'sha') / 2) > player.countCards('h', 'sha')) return false;
                                },
                            },
                        },
                        xinchituma: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') return false;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + 1;
                                    }
                                },
                                targetInRange(card) {
                                    return true;
                                },
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha' && range[1] && range[1] != -1) range[1] += 2;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            priority: null,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        yin_falu: {
                            subSkill: {
                                spade: {
                                    marktext: '♠️️︎️',
                                    intro: {
                                        name: '紫薇',
                                        content: 'mark',
                                    },
                                },
                                heart: {
                                    marktext: '♥️️︎️',
                                    intro: {
                                        name: '玉清',
                                        content: 'mark',
                                    },
                                },
                                club: {
                                    marktext: '♣️️︎️',
                                    intro: {
                                        name: '后土',
                                        content: 'mark',
                                    },
                                },
                                diamond: {
                                    marktext: '♦️️︎',
                                    intro: {
                                        name: '勾陈',
                                        content: 'mark',
                                    },
                                },
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: ['xinfu_falu', 2],
                            trigger: {
                                player: ['loseAfter', 'enterGame'],
                                global: 'gameDrawAfter',
                            },
                            filter(event, player) {
                                if (event.name != 'lose') return true;
                                if (event.type != 'discard') return false;
                                for (var i = 0; i < event.cards2.length; i++) {
                                    if (player.countMark('yin_falu_' + event.cards2[i].suit) < 3) return true;
                                }
                                return false;
                            },
                            content() {
                                if (trigger.name != 'lose') {
                                    for (var i = 0; i < lib.suit.length; i++) {
                                        if (player.countMark('yin_falu_' + lib.suit[i]) < 3) player.addMark('yin_falu_' + lib.suit[i]);
                                    }
                                    return;
                                }
                                for (var i = 0; i < trigger.cards2.length; i++) {
                                    var suit = trigger.cards2[i].suit;
                                    if (player.countMark('yin_falu_' + suit) < 3) player.addMark('yin_falu_' + suit);
                                }
                            },
                            ai: { threaten: 1.4 },
                        },
                        yin_dianhua: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            audio: ['xinfu_dianhua', 2],
                            filter(event, player) {
                                for (var i = 0; i < lib.suit.length; i++) {
                                    if (player.hasMark('yin_falu_' + lib.suit[i])) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                for (var i = 0; i < lib.suit.length; i++) {
                                    if (player.hasMark('yin_falu_' + lib.suit[i])) num += player.countMark('yin_falu_' + lib.suit[i]);
                                }
                                num = Math.min(12, num);
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var cards = get.cards(num);
                                event.cards = cards;
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                    const target = trigger.name == 'phaseZhunbei' ? player : player.next;
                                    const att = get.attitude(player, target);
                                    const top = [], bottom = cards;
                                    for (const i of target.getCards('j')) {
                                        const judge = get.judge(i);
                                        bottom.sort((a, b) => (judge(b) - judge(a)) * att); //态度大于0价值高的牌放前面
                                        if (bottom.length) {
                                            top.push(bottom.shift());
                                        }
                                    }
                                    bottom.sort((a, b) => (get.value(b) - get.value(a)) * att); //态度大于0价值高的牌放前面
                                    while (bottom.length) {
                                        top.push(bottom.shift());
                                    }
                                    top.reverse();
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                };
                                var chooseButton = function (online, player, cards) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    cards = cards || event.cards;
                                    event.top = [];
                                    event.bottom = [];
                                    event.status = true;
                                    event.dialog = ui.create.dialog('按顺序选择置于牌堆顶的牌(先选择的在上)', cards);
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('pointerdiv');
                                    }
                                    event.switchToAuto = function () {
                                        event._result = 'ai';
                                        event.dialog.close();
                                        event.control.close();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', 'pileTop', 'pileBottom', function (link) {
                                        var event = _status.event;
                                        if (link == 'ok') {
                                            if (online) {
                                                event._result = {
                                                    top: [],
                                                    bottom: [],
                                                };
                                                for (var i = 0; i < event.top.length; i++) {
                                                    event._result.top.push(event.top[i].link);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    event._result.bottom.push(event.bottom[i].link);
                                                }
                                            } else {
                                                var i;
                                                for (var i = 0; i < event.top.length; i++) {
                                                    ui.cardPile.insertBefore(event.top[i].link, ui.cardPile.firstChild);
                                                }
                                                for (var i = 0; i < event.bottom.length; i++) {
                                                    ui.cardPile.appendChild(event.bottom[i].link);
                                                }
                                                for (var i = 0; i < event.dialog.buttons.length; i++) {
                                                    if (event.dialog.buttons[i].classList.contains('glow') == false && event.dialog.buttons[i].classList.contains('target') == false) ui.cardPile.appendChild(event.dialog.buttons[i].link);
                                                }
                                                player.popup(get.cnNumber(event.top.length) + '上' + get.cnNumber(event.cards.length - event.top.length) + '下');
                                                game.log(player, '将' + get.cnNumber(event.top.length) + '张牌置于牌堆顶');
                                            }
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        } else if (link == 'pileTop') {
                                            event.status = true;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆顶的牌';
                                        } else {
                                            event.status = false;
                                            event.dialog.content.childNodes[0].innerHTML = '按顺序选择置于牌堆底的牌';
                                        }
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    event.custom.replace.button = function (link) {
                                        var event = _status.event;
                                        if (link.classList.contains('target')) {
                                            link.classList.remove('target');
                                            event.top.remove(link);
                                        } else if (link.classList.contains('glow')) {
                                            link.classList.remove('glow');
                                            event.bottom.remove(link);
                                        } else if (event.status) {
                                            link.classList.add('target');
                                            event.top.unshift(link);
                                        } else {
                                            link.classList.add('glow');
                                            event.bottom.push(link);
                                        }
                                    };
                                    event.custom.replace.window = function () {
                                        for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                            _status.event.dialog.buttons[i].classList.remove('target');
                                            _status.event.dialog.buttons[i].classList.remove('glow');
                                            _status.event.top.length = 0;
                                            _status.event.bottom.length = 0;
                                        }
                                    };
                                    game.pause();
                                    game.countChoose();
                                };
                                event.switchToAuto = switchToAuto;
                                if (event.isMine()) {
                                    chooseButton();
                                    event.finish();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, true, event.player, event.cards);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    event.switchToAuto();
                                    event.finish();
                                }
                                ('step 1');
                                if (event.result == 'ai' || !event.result) {
                                    event.switchToAuto();
                                } else {
                                    var top = event.result.top || [];
                                    var bottom = event.result.bottom || [];
                                    for (var i = 0; i < top.length; i++) {
                                        ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                    }
                                    for (var i = 0; i < bottom.length; i++) {
                                        ui.cardPile.appendChild(bottom[i]);
                                    }
                                    for (var i = 0; i < event.cards.length; i++) {
                                        if (!top.includes(event.cards[i]) && !bottom.includes(event.cards[i])) {
                                            ui.cardPile.appendChild(event.cards[i]);
                                        }
                                    }
                                    player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(event.cards.length - top.length) + '下');
                                    game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                    game.updateRoundNumber();
                                }
                            },
                            ai: {
                                threaten: 2.2,
                            },
                        },
                        yin_zhenyi: {
                            group: ['xinzhenyi_spade', 'xinzhenyi_club', 'xinzhenyi_heart', 'xinzhenyi_club_num'],
                            trigger: {
                                player: 'damageEnd',
                            },
                            charlotte: true,
                            fixed: true,
                            audio: 'ext:阴间集结/audio:2',
                            filter(event, player) {
                                //if(!event.nature) return false;
                                return player.hasMark('yin_falu_diamond');
                            },
                            prompt2() {
                                return '使用「勾陈♦️️」标记,从牌堆中获得每种类型的牌各' + get.cnNumber(_status.event.player.countMark('yin_falu_diamond')) + '张.';
                            },
                            content() {
                                var cards = [];
                                var types = [];
                                for (var i of lib.inpile) {
                                    if (!types.includes(get.type(i))) types.push(get.type(i));
                                }
                                while (cards.length < player.countMark('yin_falu_diamond') * types.length) {
                                    for (var i of types) {
                                        for (var j = 0; j < player.countMark('yin_falu_diamond'); j++) {
                                            var card = get.cardPile(function (card) {
                                                if (get.type(card) != i || cards.includes(card)) return false;
                                                return true;
                                            });
                                            if (card) {
                                                cards.push(card);
                                            } else break;
                                        }
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'gain2');
                                    player.gainMaxHp(2);
                                    player.recover(2);
                                }
                            },
                        },
                        xinzhenyi_spade: {
                            trigger: {
                                global: 'judge',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('yin_falu_spade');
                            },
                            content() {
                                'step 0';
                                var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【真仪】,使用「紫薇♠️️」标记并修改判定结果花色？';
                                player
                                    .chooseControl('spade', 'heart', 'diamond', 'club', 'cancel2')
                                    .set('prompt', str)
                                    .set('ai', function () {
                                        //return '取消';
                                        var judging = _status.event.judging;
                                        var trigger = _status.event.getTrigger();
                                        var res1 = trigger.judge(judging);
                                        var list = lib.suit.slice(0);
                                        var attitude = get.attitude(player, trigger.player);
                                        if (attitude == 0) return 0;
                                        var getj = function (suit) {
                                            return trigger.judge({
                                                name: judging.name,
                                                nature: get.nature(judging),
                                                suit: suit,
                                                number: 5,
                                            });
                                        };
                                        list.sort(function (a, b) {
                                            return (getj(b) - getj(a)) * get.sgn(attitude);
                                        });
                                        if ((getj(list[0]) - res1) * attitude > 0) return list[0];
                                        return 'cancel2';
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    event.suit = result.control;
                                    player.addExpose(0.25);
                                    player.popup(result.control);
                                    game.log(trigger.player, '判定结果花色为', '#g' + get.translation(result.control + 2));
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.suit = result.control;
                                    trigger.fixedResult.color = get.color({ suit: result.control });
                                    event.suit = result.control;
                                }
                                ('step 2');
                                var card = trigger.player.judging[0];
                                var judge0 = trigger.judge(card);
                                var judge1 = 0;
                                var choice;
                                var attitude = get.attitude(player, trigger.player);
                                var list = [];
                                for (var i = 1; i < 14; i++) {
                                    list.add(i);
                                    var judge2 =
                                        (trigger.judge({
                                            name: card.name,
                                            suit: event.suit,
                                            number: i,
                                            nature: get.nature(card),
                                        }) -
                                            judge0) *
                                        attitude;
                                    if (judge2 > judge1) {
                                        choice = '' + i + '';
                                        judge1 = judge2;
                                    }
                                }
                                player
                                    .chooseControl(list, 'cancel2')
                                    .set('ai', function () {
                                        if (choice != undefined) return choice;
                                        return 'cancel2';
                                    })
                                    .set('choice', choice).prompt = '是否发动【真仪】,使用「紫薇♠️️」标记并修改判定结果点数？';
                                ('step 3');
                                if (result.control != 'cancel2') {
                                    player.addExpose(0.25);
                                    player.popup(result.control);
                                    game.log(trigger.player, '判定结果点数为', '#g' + result.control);
                                    if (!trigger.fixedResult) trigger.fixedResult = {};
                                    trigger.fixedResult.number = result.control;
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                                expose: 0.5,
                            },
                        },
                        xinzhenyi_club: {
                            audio: 'xinfu_zhenyi',
                            enable: 'chooseToUse',
                            viewAsFilter(player) {
                                return player.hasMark('yin_falu_club');
                            },
                            filterCard: true,
                            position: 'h',
                            viewAs: {
                                name: 'tao',
                            },
                            prompt() {
                                var str = '使用「后土♣️️」标记,将一张手牌当桃使用';
                                if (_status.event.player.countMark('yin_falu_club') > 0) str += '(回复值+' + _status.event.player.countMark('yin_falu_club') + ')';
                                return str;
                            },
                            check(card) {
                                return 15 - get.value(card);
                            },
                            subSkill: {
                                num: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    silent: true,
                                    filter(event, player) {
                                        return event.cards && event.skill == 'xinzhenyi_club';
                                    },
                                    content() {
                                        trigger.baseDamage += player.countMark('yin_falu_club');
                                    },
                                },
                            },
                        },
                        xinzhenyi_heart: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            audio: 'xinfu_zhenyi',
                            filter(event, player) {
                                return player.hasMark('yin_falu_heart');
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                if (
                                    event.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: event.card,
                                    })
                                )
                                    return false;
                                return true;
                                //return player.hasMark('yin_falu_spade')||get.color(ui.cardPile.firstChild)=='black';
                            },
                            prompt2(event, player) {
                                return '使用「玉清♥️️」标记,令对' + get.translation(event.player) + '即将造成的伤害+' + _status.event.player.countMark('yin_falu_heart') + '.';
                            },
                            logTarget: 'player',
                            content() {
                                trigger.num += player.countMark('yin_falu_heart');
                            },
                        },
                        xinjueshi: {
                            mod: {
                                targetInRange(card) {
                                    return true;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            priority: null,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('e').length == 0) return false;
                                    for (var i of player.get('e')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('e').length == 0) return false;
                                    for (var i of player.get('e')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        xinzhukou: {
                            audio: ['zhukou', 2],
                            charlotte: true,
                            fixed: true,
                            trigger: { source: 'damageSource' },
                            filter(event, player) {
                                if (!player.getHistory('useCard').length) return false;
                                var evt = event.getParent('phaseUse');
                                if (!evt || !evt.player) return false;
                                return (
                                    player
                                        .getHistory('sourceDamage', function (evtx) {
                                            return evtx.getParent('phaseUse') == evt;
                                        })
                                        .indexOf(event) == 0
                                );
                            },
                            forced: true,
                            content() {
                                player.draw(player.getHistory('useCard').length);
                            },
                            group: 'xinzhukou_all',
                            subSkill: {
                                all: {
                                    audio: 'zhukou',
                                    trigger: { player: 'phaseJieshuBegin' },
                                    filter(event, player) {
                                        return game.hasPlayer((current) => current != player);
                                    },
                                    prompt: '是否发动【逐寇】？',
                                    prompt2: '对所有其他角色各造成1点伤害',
                                    logTarget: (event, player) => game.filterPlayer((current) => current != player),
                                    check(event, player) {
                                        return (
                                            game.countPlayer(function (current) {
                                                if (current == player) return false;
                                                var num = get.damageEffect(current, player, player);
                                                if (num < 0 && current.hp > 2) num /= 3;
                                                return num + 0.01;
                                            }) > 0
                                        );
                                    },
                                    content() {
                                        var list = game.filterPlayer((current) => current != player).sortBySeat();
                                        for (var i of list) i.damage();
                                    },
                                },
                            },
                        },
                        xinmengqing: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return game.hasPlayer((current) => current != player);
                            },
                            juexingji: true,
                            content() {
                                player.awakenSkill('xinmengqing');
                                player.gainMaxHp(6);
                                player.recover(6);
                                player.addSkill('xinyuyun');
                            },
                        },
                        xinyuyun: {
                            trigger: { player: 'phaseUseBegin' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.hp > 0 || player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                if (player.maxHp <= 1) event._result = { control: '增加体力', index: 0 };
                                else if (player.hp < 1) event._result = { control: '增加体力上限', index: 1 };
                                else
                                    player
                                        .chooseControl('增加体力', '加体力上限')
                                        .set('prompt', '玉陨:增加1点体力或加1点体力上限')
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            if (player.hp < 2 || player.getDamagedHp() > 2) return 1;
                                            return 0;
                                        });
                                ('step 1');
                                if (result.index == 1) player.gainMaxHp();
                                else player.recover();
                                ('step 2');
                                event.videoId = lib.status.videoId++;
                                var func = function (player, id) {
                                    var list = ['选项一:摸五张牌', '选项二:本回合使用【杀】无距离和次数限制', '选项三:本回合手牌上限视为无限', '选项四:弃置一名其他角色的一张手牌和一张装备区的牌', '选项五:令一名手牌最少的角色将手牌数摸至体力上限(至多摸至五张)'];
                                    var choiceList = ui.create.dialog('玉陨:请选择一' + (player.getDamagedHp() > 1 ? '至两' : '') + '项');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, player, event.videoId);
                                }
                                event.dialog = func(player, event.videoId);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 0:
                                            return 2;
                                            break;
                                        case 1:
                                            return Math.max(
                                                0.5,
                                                player.countCards('hs', function (card) {
                                                    return card.name == 'sha' && player.hasValueTarget(card);
                                                }) - player.getCardUsable({ name: 'sha' })
                                            );
                                            break;
                                        case 2:
                                            return player.needsToDiscard() / 4;
                                            break;
                                        case 3:
                                            var num = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && get.attitude(player, current) < 0) {
                                                    var num2 = 0;
                                                    current.countDiscardableCards(player, 'e', function (card) {
                                                        var val = get.value(card, current);
                                                        if (val > num2) num2 = val;
                                                    });
                                                    if (current.countCards('h') > 0 && !current.hasSkillTag('noh')) num2++;
                                                    if (num2 > num) num = num2;
                                                }
                                            });
                                            return num / 4;
                                            break;
                                        case 4:
                                            var num = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && get.attitude(player, current) > 0 && current.isMinHandcard()) {
                                                    var num2 = Math.min(5, current.maxHp) - current.countCards('h');
                                                    if (num2 > num) num = num2;
                                                }
                                            });
                                            return num * 0.8;
                                            break;
                                    }
                                });
                                if (player.getDamagedHp() > 1) next.set('selectButton', [1, 2]);
                                ('step 3');
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                result.links.sort();
                                for (var i of result.links) game.log(player, '选择了', '#g【玉陨】', '的', '#y选项' + get.cnNumber(1 + i, true));
                                event.links = result.links;
                                if (result.links.includes(0)) player.draw(5);
                                if (result.links.includes(1)) player.addTempSkill('xinyuyun_sha');
                                if (result.links.includes(2)) player.addTempSkill('xinyuyun_999');
                                if (!result.links.includes(3)) {
                                    if (result.links.includes(4)) event.goto(6);
                                    else event.finish();
                                }
                                ('step 4');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && current.hasCard((card) => lib.filter.canBeDiscarded(card, current, player), 'he');
                                    })
                                ) {
                                    player
                                        .chooseTarget(true, '弃置一名其他角色手牌区和装备区内的各一张牌', function (card, player, current) {
                                            return current != player && current.hasCard((card) => lib.filter.canBeDiscarded(card, current, player), 'he');
                                        })
                                        .set('ai', function (current) {
                                            var num2 = 0,
                                                player = _status.event.player;
                                            if (get.attitude(player, current) >= 0) return 0;
                                            current.countDiscardableCards(player, 'e', function (card) {
                                                var val = get.value(card, current);
                                                if (val > num2) num2 = val;
                                            });
                                            if (current.countCards('h') > 0 && !current.hasSkillTag('noh')) num2++;
                                        });
                                } else if (event.links.includes(4)) event.goto(6);
                                else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    var num = 0;
                                    if (target.hasCard((card) => lib.filter.canBeDiscarded(card, target, player), 'h')) num++;
                                    if (target.hasCard((card) => lib.filter.canBeDiscarded(card, target, player), 'e')) num++;
                                    if (num > 0) {
                                        player.discardPlayerCard(target, num, 'he', true).set('filterButton', function (button) {
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                            }
                                            return true;
                                        });
                                    }
                                }
                                if (!event.links.includes(4)) event.finish();
                                ('step 6');
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.isMinHandcard() && current.countCards('h') < Math.min(5, current.maxHp);
                                    })
                                ) {
                                    player
                                        .chooseTarget(true, '令一名手牌数最少的角色将手牌数摸至体力上限', function (card, player, current) {
                                            return current.isMinHandcard() && current.countCards('h') < Math.min(5, current.maxHp);
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (target.hasSkillTag('nogain')) att /= 6;
                                            if (att > 2) {
                                                return Math.min(5, target.maxHp) - target.countCards('h');
                                            }
                                            return att / 3;
                                        });
                                } else event.finish();
                                ('step 7');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.drawTo(Math.min(5, target.maxHp));
                                }
                            },
                            subSkill: {
                                999: {
                                    mod: {
                                        maxHandcardFinal(player, num) {
                                            return 999;
                                        },
                                    },
                                    charlotte: true,
                                    fixed: true,
                                },
                                sha: {
                                    mod: {
                                        cardUsable(card) {
                                            if (card.name == 'sha') return Infinity;
                                        },
                                        targetInRange(card) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    charlotte: true,
                                    fixed: true,
                                },
                            },
                        },
                        xin_chuyuan: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.player.isAlive() && player.getStorage('xin_chuyuan').length < player.maxHp;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                trigger.player.draw();
                                ('step 1');
                                if (!trigger.player.countCards('h')) event.finish();
                                else trigger.player.chooseCard('h', true, '选择一张牌置于' + get.translation(player) + '的武将牌上作为「储」');
                                ('step 2');
                                trigger.player.lose(result.cards, ui.special, 'visible', 'toStorage');
                                trigger.player.$give(result.cards, player, false);
                                game.log(trigger.player, '选择了', result.cards);
                                player.markAuto('xin_chuyuan', result.cards);
                            },
                            intro: {
                                content: 'cards',
                                onunmark: 'throw',
                            },
                        },
                        xin_dengji: {
                            audio: 'ext:阴间集结/audio:2',
                            derivation: ['xin_tianxing', 'xinnew_rejianxiong', 'xin_rerende', 'xin_rezhiheng', 'xin_olluanji', 'xin_caopixingdong'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getStorage('xin_chuyuan').length >= 3;
                            },
                            content() {
                                player.awakenSkill(event.name);
                                player.addSkill('xin_tianxing');
                                player.addSkill('xinnew_rejianxiong');
                                player.gainMaxHp(5);
                                player.gain(player.storage.xin_chuyuan, 'gain2', 'fromStorage');
                                player.unmarkAuto('xin_chuyuan', player.storage.xin_chuyuan);
                                player.addSkill(['xin_rerende', 'xin_rezhiheng', 'xin_olluanji', 'xin_caopixingdong']);
                            },
                        },
                        xin_tianxing: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            juexingji: true,
                            filter(event, player) {
                                return player.getStorage('xin_chuyuan').length >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill(event.name);
                                player.gainMaxHp(5);
                                player.gain(player.storage.xin_chuyuan, 'gain2', 'fromStorage');
                                player.unmarkAuto('xin_chuyuan', player.storage.xin_chuyuan);
                                player.removeSkill('xin_chuyuan');
                                player.addSkill('shen_xingshang');
                                player.addSkill('shen_wansha');
                                player.addSkill('shen_lianpo');
                                player.addSkill('shen_reguicai');
                                player.addSkill('shen_refangzhu');
                                player.addSkill('shen_rejizhi');
                            },
                        },
                        shen_rejizhi: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: { player: 'useCard' },
                            forced: true,
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick';
                            },
                            init(player) {
                                player.storage.shen_rejizhi = 0;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                event.card = result[0];
                                if (get.type(event.card) == 'basic') {
                                    player
                                        .chooseBool('是否弃置' + get.translation(event.card) + '并令本回合手牌上限+1？')
                                        .set('ai', function (evt, player) {
                                            return _status.currentPhase == player && player.needsToDiscard(-3) && _status.event.value < 6;
                                        })
                                        .set('value', get.value(event.card, player));
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.discard(event.card);
                                    player.storage.shen_rejizhi++;
                                    if (_status.currentPhase == player) {
                                        player.markSkill('shen_rejizhi');
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.storage.shen_rejizhi;
                                },
                            },
                            intro: {
                                content: '本回合手牌上限+#',
                            },
                            group: 'shen_rejizhi_clear',
                            subSkill: {
                                clear: {
                                    trigger: { global: 'phaseAfter' },
                                    silent: true,
                                    content() {
                                        player.storage.shen_rejizhi = 0;
                                        player.unmarkSkill('shen_rejizhi');
                                    },
                                },
                            },
                        },
                        shen_lianpo: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { global: 'phaseAfter' },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.getStat('kill') > 0;
                            },
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        shen_reguicai: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: { global: 'judge' },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('hes') > 0;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('shen_reguicai'), 'hes', function (card) {
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
                                        if (attitude > 0) {
                                            return result - get.value(card) / 2;
                                        } else {
                                            return -result - get.value(card) / 2;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0]);
                                ('step 1');
                                if (result.bool) {
                                    player.respond(result.cards, 'shen_reguicai', 'highlight', 'noOrdering');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (trigger.player.judging[0].clone) {
                                        trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                                        game.broadcast(function (card) {
                                            if (card.clone) {
                                                card.clone.classList.remove('thrownhighlight');
                                            }
                                        }, trigger.player.judging[0]);
                                        game.addVideo('deletenode', player, get.cardsInfo([trigger.player.judging[0].clone]));
                                    }
                                    game.cardsDiscard(trigger.player.judging[0]);
                                    trigger.player.judging[0] = result.cards[0];
                                    trigger.orderingCards.addArray(result.cards);
                                    game.log(trigger.player, '的判定牌改为', result.cards[0]);
                                }
                            },
                            ai: {
                                rejudge: true,
                                tag: {
                                    rejudge: 1,
                                },
                            },
                        },
                        shen_refangzhu: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('shen_refangzhu'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) == 0) return 0;
                                    if (get.attitude(_status.event.player, target) > 0) {
                                        if (target.classList.contains('turnedover')) return 1000 - target.countCards('h');
                                        if (player.getDamagedHp() < 3) return -1;
                                        return 100 - target.countCards('h');
                                    } else {
                                        if (target.classList.contains('turnedover')) return -1;
                                        if (player.getDamagedHp() >= 3) return -1;
                                        return 1 + target.countCards('h');
                                    }
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    if (player.isHealthy()) event._result = { bool: false };
                                    else
                                        event.target
                                            .chooseToDiscard('he', player.getDamagedHp())
                                            .set('ai', function (card) {
                                                var player = _status.event.player;
                                                if (player.isTurnedOver() || _status.event.getTrigger().player.getDamagedHp() > 2) return -1;
                                                return player.hp * player.hp - get.value(card);
                                            })
                                            .set('prompt', '弃置' + get.cnNumber(player.getDamagedHp()) + '张牌并失去一点体力;或选择不弃置,将武将牌翻面并摸' + get.cnNumber(player.getDamagedHp()) + '张牌.');
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    event.target.loseHp();
                                } else {
                                    if (player.isDamaged()) event.target.draw(player.getDamagedHp());
                                    event.target.turnOver();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -1.5];
                                            if (target.hp <= 1) return;
                                            if (!target.hasFriend()) return;
                                            var hastarget = false;
                                            var turnfriend = false;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(target, players[i]) < 0 && !players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                }
                                                if (get.attitude(target, players[i]) > 0 && players[i].isTurnedOver()) {
                                                    hastarget = true;
                                                    turnfriend = true;
                                                }
                                            }
                                            if (get.attitude(player, target) > 0 && !hastarget) return;
                                            if (turnfriend || target.hp == target.maxHp) return [0.5, 1];
                                            if (target.hp > 1) return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xin_caopixingdong: {
                            audio: 'ext:阴间集结/audio:2',
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '令',
                                    intro: {
                                        content: '跳过下个回合的判定阶段和摸牌阶段',
                                    },
                                },
                            },
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.countCards('h', lib.skill.xin_caopixingdong.filterCard);
                            },
                            filterCard(card) {
                                return card.name == 'sha' || get.type(card) == 'trick';
                            },
                            check(card) {
                                return 1;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            discard: false,
                            lose: false,
                            delay: 0,
                            content() {
                                'step 0';
                                target.gain(cards, player, 'give');
                                ('step 1');
                                target.chooseUseTarget(
                                    cards[0],
                                    game.filterPlayer(function (current) {
                                        return current != player;
                                    }),
                                    '请使用得到的牌,或者跳过下回合的判定阶段和摸牌阶段'
                                );
                                ('step 2');
                                if (result.bool) game.asyncDraw([player, target]);
                                else {
                                    target.addTempSkill('xin_caopixingdong_mark', 'phaseJudgeSkipped');
                                    target.skip('phaseJudge');
                                    target.skip('phaseDraw');
                                    event.finish();
                                }
                                ('step 3');
                            },
                            ai: {
                                order: 12,
                                result: {
                                    target(player, target) {
                                        var card = ui.selected.cards[0];
                                        if (target.hasSkill('pingkou')) return 1;
                                        if (!card) return 0;
                                        var info = get.info(card);
                                        if (info.selectTarget == -1) {
                                            var eff = 0;
                                            game.countPlayer(function (current) {
                                                if (current != player && target.canUse(card, current)) eff += get.effect(current, card, target, target) > 0;
                                            });
                                            if (eff > 0 || get.value(card) < 3) return eff;
                                            return 0;
                                        } else if (
                                            game.hasPlayer(function (current) {
                                                return current != player && target.canUse(card, current) && get.effect(current, card, target, target) > 0;
                                            })
                                        )
                                            return 1.5;
                                        else if (get.value(card) < 3) return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        xinnew_rejianxiong: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                if (get.itemtype(trigger.cards) == 'cards' && get.position(trigger.cards[0], true) == 'o') {
                                    player.gain(trigger.cards, 'gain2');
                                }
                                player.draw('nodelay');
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage') && player != target) return [1, 0.6];
                                    },
                                },
                            },
                        },
                        xin_rerende: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filterCard: true,
                            selectCard: [1, Infinity],
                            discard: false,
                            lose: false,
                            delay: false,
                            filterTarget(card, player, target) {
                                if (player.storage.rerende2 && player.storage.rerende2.includes(target)) return false;
                                return player != target;
                            },
                            onremove: ['xin_rerende', 'rerende2'],
                            check(card) {
                                if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                                if (!ui.selected.cards.length && card.name == 'du') return 20;
                                var player = get.owner(card);
                                if (ui.selected.cards.length >= Math.max(2, player.countCards('h') - player.hp)) return 0;
                                if (player.hp == player.maxHp || player.storage.xin_rerende < 0 || player.countCards('h') <= 1) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('haoshi') && !players[i].isTurnedOver() && !players[i].hasJudge('lebu') && get.attitude(player, players[i]) >= 3 && get.attitude(players[i], player) >= 3) {
                                            return 11 - get.value(card);
                                        }
                                    }
                                    if (player.countCards('h') > player.hp) return 10 - get.value(card);
                                    if (player.countCards('h') > 2) return 6 - get.value(card);
                                    return -1;
                                }
                                return 10 - get.value(card);
                            },
                            content() {
                                'step 0';
                                var evt = _status.event.getParent('phaseUse');
                                if (evt && evt.name == 'phaseUse' && !evt.rerende) {
                                    var next = game.createEvent('xin_rerende_clear');
                                    _status.event.next.remove(next);
                                    evt.after.push(next);
                                    evt.rerende = true;
                                    next.player = player;
                                    next.setContent(lib.skill.Q_rende.content);
                                }
                                if (!Array.isArray(player.storage.rerende2)) {
                                    player.storage.rerende2 = [];
                                }
                                player.storage.rerende2.push(target);
                                target.gain(cards, player, 'giveAuto');
                                if (typeof player.storage.xin_rerende != 'number') {
                                    player.storage.xin_rerende = 0;
                                }
                                if (player.storage.xin_rerende >= 0) {
                                    player.storage.xin_rerende += cards.length;
                                    if (player.storage.xin_rerende >= 2) {
                                        var list = [];
                                        if (
                                            lib.filter.cardUsable({ name: 'sha' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('sha', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'sha']);
                                            list.push(['基本', '', 'sha', 'fire']);
                                            list.push(['基本', '', 'sha', 'thunder']);
                                            list.push(['基本', '', 'sha', 'ice']);
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'tao' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('tao', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'tao']);
                                        }
                                        if (
                                            lib.filter.cardUsable({ name: 'jiu' }, player, event.getParent('chooseToUse')) &&
                                            game.hasPlayer(function (current) {
                                                return player.canUse('jiu', current);
                                            })
                                        ) {
                                            list.push(['基本', '', 'jiu']);
                                        }
                                        if (list.length) {
                                            player.chooseButton(['是否视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
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
                                        player.storage.xin_rerende = -1;
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result && result.bool && result.links[0]) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                            },
                            ai: {
                                fireAttack: true,
                                order(skill, player) {
                                    if (player.hp < player.maxHp && player.storage.xin_rerende < 2 && player.countCards('h') > 1) {
                                        return 10;
                                    }
                                    return 4;
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nogain')) return 0;
                                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -10;
                                        }
                                        if (target.hasJudge('lebu')) return 0;
                                        var nh = target.countCards('h');
                                        var np = player.countCards('h');
                                        if (player.hp == player.maxHp || player.storage.xin_rerende < 0 || player.countCards('h') <= 1) {
                                            if (nh >= np - 1 && np <= player.hp && !target.hasSkill('haoshi')) return 0;
                                        }
                                        return Math.max(1, 5 - nh);
                                    },
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (player == target && get.type(card) == 'equip') {
                                            if (player.countCards('e', { subtype: get.subtype(card) })) {
                                                if (
                                                    game.hasPlayer(function (current) {
                                                        return current != player && get.attitude(player, current) > 0;
                                                    })
                                                ) {
                                                    return 0;
                                                }
                                            }
                                        }
                                    },
                                },
                                threaten: 0.8,
                            },
                        },
                        Q_rende: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            silent: true,
                            content() {
                                player.storage.xin_rerende = 0;
                                player.storage.rerende2 = [];
                            },
                        },
                        xin_rezhiheng: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            position: 'he',
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
                            selectCard: [1, Infinity],
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    get.position(card) == 'h' &&
                                    !player.countCards('h', 'du') &&
                                    (player.hp > 2 ||
                                        !player.countCards('h', function (card) {
                                            return get.value(card) >= 8;
                                        }))
                                ) {
                                    return 1;
                                }
                                return 6 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player.discard(cards);
                                event.num = 1;
                                var hs = player.getCards('h');
                                if (!hs.length) event.num = 0;
                                for (var i = 0; i < hs.length; i++) {
                                    if (!cards.includes(hs[i])) {
                                        event.num = 0;
                                        break;
                                    }
                                }
                                ('step 1');
                                player.draw(event.num + cards.length);
                            },
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    silent: true,
                                    filter(event, player) {
                                        if (event.getParent(2).skill != 'xin_rezhiheng' && event.getParent(2).skill != 'jilue_zhiheng') return false;
                                        if (player.countCards('h')) return false;
                                        if (event.cards && event.cards[0]) {
                                            //QQQ
                                            for (var i = 0; i < event.cards.length; i++) {
                                                if (event.cards[i].original == 'h') return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.addTempSkill('xin_rezhiheng_delay', trigger.getParent(2).skill + 'After');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                delay: {},
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.55,
                            },
                        },
                        xin_olluanji: {
                            inherit: 'luanji',
                            audio: 'ext:阴间集结/audio:2',
                            line: false,
                            group: 'xin_olluanji_remove',
                            check(card) {
                                return 7 - get.value(card);
                            },
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            position: 'hs',
                            viewAs: {
                                name: 'wanjian',
                            },
                            filterCard(card, player) {
                                if (ui.selected.cards.length) {
                                    return card.suit == ui.selected.cards[0].suit;
                                }
                                var cards = player.getCards('hs');
                                for (var i = 0; i < cards.length; i++) {
                                    if (card != cards[i]) {
                                        if (card.suit == cards[i].suit) return true;
                                    }
                                }
                                return false;
                            },
                            selectCard: 2,
                            complexCard: true,
                            ai: {
                                basic: {
                                    order: 8.5,
                                    useful: 1,
                                    value: 5,
                                },
                                wuxie(target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'shan')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                result: {
                                    target_use(player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                    target(player, target) {
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        xin_olluanji_remove: {
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'wanjian' && event.targets.length;
                            },
                            line: false,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('xin_olluanji'), '为' + get.translation(trigger.card) + '减少一个目标', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.effect(target, _status.event.getTrigger().card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.remove(result.targets[0]);
                                }
                            },
                        },
                        shen_wansha: {
                            audio: 'ext:阴间集结/audio:2',
                            global: 'shen_wansha2',
                            trigger: {
                                global: 'dying',
                            },
                            priority: 15,
                            forced: true,
                            filter(event, player, name) {
                                return _status.currentPhase == player && event.player != player;
                            },
                            content() { },
                        },
                        shen_wansha2: {
                            mod: {
                                cardSavable(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('shen_wansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' || (card.name == 'jiu' && !player.isDying())) return false;
                                    }
                                },
                                cardEnabled(card, player) {
                                    if (!_status.currentPhase) return;
                                    if (_status.currentPhase.isAlive() && _status.currentPhase.hasSkill('shen_wansha') && _status.currentPhase != player) {
                                        if (card.name == 'tao' || (card.name == 'jiu' && !player.isDying())) return false;
                                    }
                                },
                            },
                        },
                        shen_xingshang: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: 'die',
                            },
                            filter(event, player) {
                                return event.player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('he');
                                player.gain(event.togain, trigger.player, 'giveAuto');
                            },
                        },
                        xinrefuhan: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countMark('xinrefanghun') > 0;
                            },
                            content() {
                                'step 0';
                                if (player.storage.Q_fanghun) player.draw(player.storage.Q_fanghun);
                                player.removeMark('xinrefanghun', player.storage.Q_fanghun);
                                ('step 1');
                                var list;
                                if (_status.characterlist) {
                                    list = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        if (lib.character[name][1] == 'shu') list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return lib.character[i][1] != 'shu';
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return info[1] == 'shu';
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove('zhaoyun');
                                list.remove('re_zhaoyun');
                                list.remove('ol_zhaoyun');
                                list = list.randomGets(12);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.limited && !info.juexingji && !info.hiddenSkill && !info.charlotte;
                                        })
                                    );
                                }
                                if (!list.length || !skills.length) {
                                    event.finish();
                                    return;
                                }
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(4),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多四个技能', [list, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 0; i < skills.length; i++) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skills[i];
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            var link = this.link;
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 4) return;
                                                rSkill.add(link);
                                                this.classList.add('bluebg');
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    event.switchToAuto = function () {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.control = ui.create.control('ok', function (link) {
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    });
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                if (event.isMine()) {
                                    chooseButton(list, skills);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, list, skills);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) player.addSkillLog(i);
                                }
                                ('step 3');
                                player.gainMaxHp(2);
                                player.hp = player.maxHp;
                                player.draw(5);
                            },
                        },
                        xinrefanghun: {
                            audio: 'ext:阴间集结/audio:2',
                            inherit: 'Q_fanghun',
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToTargeted',
                            },
                            hiddenCard(player, name) {
                                if (!player.storage.Q_fanghun || player.storage.Q_fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('h', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('h', 'tao') > 0;
                                return false;
                            },
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('xinrefanghun', trigger.num || 1);
                                player.storage.Q_fanghun = player.countMark('xinrefanghun');
                                //player.addMark('xinrefanghun2',trigger.num||1,false);
                            },
                            group: ['xinrefanghun_sha', 'xinrefanghun_draw', 'xinrefanghun_shan'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'xinrefanghun_shan';
                                    },
                                    content() {
                                        player.draw(3);
                                    },
                                },
                                sha: {
                                    audio: 'Q_fanghun',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filter(event, player) {
                                        if (player.countMark('xinrefanghun') < 1) return false;
                                        if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) return false;
                                        if (!player.countCards('he', { type: 'basic' }));
                                        for (var i = 0; i < lib.inpile.length; i++) {
                                            var name = lib.inpile[i];
                                            if (name != 'shan' && get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) return true;
                                        }
                                        return false;
                                    },
                                    prompt: '获得一枚【梅影】标记,将任意基本牌当任意基本牌使用或打出',
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                            }
                                            return ui.create.dialog('芳魂', [list, 'vcard'], 'hidden');
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type == 'phase') {
                                                var player = _status.event.player;
                                                var fakecard = { name: button.link[2] };
                                                if (player.getUseValue(fakecard) > 0) return get.order(fakecard);
                                                return 0;
                                            }
                                            return 1;
                                        },
                                        backup(links, player) {
                                            return {
                                                selectCard: 1,
                                                filterCard: { type: 'basic' },
                                                popname: true,
                                                check(card) {
                                                    if (get.type(card) == 'basic') return 6;
                                                    return 1 / Math.max(0.1, get.value(card));
                                                },
                                                position: 'he',
                                                viewAs: { name: links[0][2] },
                                                onrespond() {
                                                    return this.onuse.apply(this, arguments);
                                                },
                                                onuse(result, player) {
                                                    player.draw(3);
                                                    player.addMark('xinrefanghun', 1);
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张基本牌当做' + get.translation(links[0][2]) + '使用或打出';
                                        },
                                    },
                                    ai: {
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                for (var i = 0; i < lib.inpile.length; i++) {
                                                    var name = lib.inpile[i];
                                                    if (get.type(name) == 'basic' && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += 0.5;
                                                return max;
                                            }
                                            return 4;
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        save: true,
                                        respondSha: true,
                                        skillTagFilter(player, tag) {
                                            return player.countCards('he', { type: 'basic' }) > 0;
                                        },
                                    },
                                },
                                shan: {
                                    prompt: '将一张基本牌当做闪使用或打出',
                                    enable: ['chooseToRespond', 'chooseToUse'],
                                    filter(event, player) {
                                        if (player.countMark('xinrefanghun') < 1) return false;
                                        return true;
                                    },
                                    viewAs: {
                                        name: 'shan',
                                    },
                                    viewAsFilter(player) {
                                        if (
                                            !player.hasCard(function (card) {
                                                return get.type(card) == 'basic';
                                            }, 'he')
                                        ) {
                                            return false;
                                        }
                                    },
                                    selectCard: 1,
                                    filterCard: {
                                        type: 'basic',
                                    },
                                    popname: true,
                                    check(card) {
                                        return 1 / Math.max(0.1, get.value(card));
                                    },
                                    position: 'h',
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.addMark('xinrefanghun', 1);
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                        },
                                        respondShan: true,
                                        skillTagFilter(player) {
                                            if (
                                                !player.hasCard(function (card) {
                                                    return get.type(card) == 'basic';
                                                }, 'he')
                                            ) {
                                                return false;
                                            }
                                        },
                                        basic: {
                                            useful: [7, 2],
                                            value: [7, 2],
                                        },
                                    },
                                },
                            },
                        },
                        Q_fanghun: {
                            hiddenCard(player, name) {
                                if (!player.storage.Q_fanghun || player.storage.Q_fanghun <= 0) return false;
                                if (name == 'tao') return player.countCards('h', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('h', 'tao') > 0;
                                return false;
                            },
                            audio: 'ext:阴间集结/audio:2',
                            marktext: '影',
                            intro: {
                                content: 'mark',
                                name: '梅影',
                            },
                            trigger: {
                                source: 'damageSource',
                                player: 'damageEnd',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.addMark('Q_fanghun', trigger.num || 1);
                                player.addMark('Q_fanghun2', trigger.num || 1, false);
                            },
                            group: ['Q_fanghun_sha', 'Q_fanghun_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.skill == 'Q_fanghun_sha' || event.skill == 'Q_fanghun_shan';
                                    },
                                    content() {
                                        player.draw(3);
                                    },
                                },
                                sha: {
                                    audio: 'Q_fanghun',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    prompt: '获得一枚【梅影】标记,将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做桃使用或打出',
                                    viewAs(cards, player) {
                                        var name;
                                        switch (cards[0]?.name) {
                                            case 'sha':
                                                name = 'shan';
                                                break;
                                            case 'shan':
                                                name = 'sha';
                                                break;
                                        }
                                        if (name) return { name: name };
                                        return null;
                                    }, //QQQ
                                    check(card) {
                                        var player = _status.event.player;
                                        if (_status.event.type == 'phase') {
                                            var max = 0;
                                            var name2;
                                            var list = ['sha', 'tao', 'jiu'];
                                            var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                            for (var i = 0; i < list.length; i++) {
                                                var name = list[i];
                                                if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                    var temp = get.order({ name: name });
                                                    if (temp > max) {
                                                        max = temp;
                                                        name2 = map[name];
                                                    }
                                                }
                                            }
                                            if (name2 == card.name) return 1;
                                            return 0;
                                        }
                                        return 1;
                                    },
                                    filterCard(card, player, event) {
                                        event = event || _status.event;
                                        var filter = event._backup.filterCard;
                                        var name = card.name;
                                        if (name == 'sha' && filter({ name: 'shan', cards: [card] }, player, event)) return true;
                                        if (name == 'shan' && filter({ name: 'sha', cards: [card] }, player, event)) return true;
                                        if (name == 'tao' && filter({ name: 'jiu', cards: [card] }, player, event)) return true;
                                        if (name == 'jiu' && filter({ name: 'tao', cards: [card] }, player, event)) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        if (!player.storage.Q_fanghun || player.storage.Q_fanghun <= 0) return false;
                                        var filter = event.filterCard;
                                        if (filter({ name: 'sha' }, player, event) && player.countCards('h', 'shan')) return true;
                                        if (filter({ name: 'shan' }, player, event) && player.countCards('h', 'sha')) return true;
                                        if (filter({ name: 'tao' }, player, event) && player.countCards('h', 'jiu')) return true;
                                        if (filter({ name: 'jiu' }, player, event) && player.countCards('h', 'tao')) return true;
                                        return false;
                                    },
                                    onrespond() {
                                        return this.onuse.apply(this, arguments);
                                    },
                                    onuse(result, player) {
                                        player.addMark('Q_fanghun', 1);
                                    },
                                    ai: {
                                        respondSha: true,
                                        respondShan: true,
                                        skillTagFilter(player, tag) {
                                            if (!player.storage.Q_fanghun || player.storage.Q_fanghun < 0) return false;
                                            var name;
                                            switch (tag) {
                                                case 'respondSha':
                                                    name = 'shan';
                                                    break;
                                                case 'respondShan':
                                                    name = 'sha';
                                                    break;
                                            }
                                            if (!player.countCards('h', name)) return false;
                                        },
                                        order(item, player) {
                                            if (player && _status.event.type == 'phase') {
                                                var max = 0;
                                                var list = ['sha', 'tao', 'jiu'];
                                                var map = { sha: 'shan', tao: 'jiu', jiu: 'tao' };
                                                for (var i = 0; i < list.length; i++) {
                                                    var name = list[i];
                                                    if (player.countCards('h', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
                                                        var temp = get.order({ name: name });
                                                        if (temp > max) max = temp;
                                                    }
                                                }
                                                if (max > 0) max += 0.3;
                                                return max;
                                            }
                                            return 4;
                                        },
                                    },
                                },
                            },
                        },
                        new_xinfenyin: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object') {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && evt.card.suit != 'none' && card.suit != 'none' && evt.card.suit != card.suit) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var suit1 = evt.card.suit;
                                var suit2 = event.card.suit;
                                return suit1 && suit2 && suit1 != 'none' && suit2 != 'none' && suit1 != suit2;
                            },
                            content() {
                                player.draw();
                                player.gainMaxHp();
                                player.recover();
                            },
                            ai: {
                                threaten: 3,
                            },
                        },
                        new_xinliji: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return (player.getStat().skill.new_xinliji || 0) < (event.new_xinliji_num || 0);
                            },
                            onChooseToUse(event) {
                                if (game.online) return;
                                var num = 0;
                                var evt2 = event.parent;
                                if (!evt2.new_xinliji_all) evt2.new_xinliji_all = game.players.length > 2 ? 2 : 2;
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.position == ui.discardPile)) num += evt.cards.length;
                                });
                                event.set('new_xinliji_num', Math.floor(num / evt2.new_xinliji_all));
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                var val = get.value(card);
                                if (!_status.event.player.getStorage('new_xinrefenyin_mark').includes(card.suit)) return 12 - val;
                                return 8 - val;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                target.damage('nocard');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: -1.5,
                                },
                                tag: {
                                    damage: 1,
                                },
                            },
                        },
                        new_neifa: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                event.num = 5;
                                _status.noclearcountdown = true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countGainableCards(player, 'hej') > 0;
                                    })
                                ) {
                                    player
                                        .chooseControl('选项一', '选项二', 'cancel2')
                                        .set('choiceList', ['摸五张牌,弃置一张牌', '获得场上的五张牌,弃置一张牌'])
                                        .set('prompt', get.prompt('new_neifa'))
                                        .set('ai', function () {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    var att = get.attitude(player, current);
                                                    if (att == 0) return false;
                                                    if (att < 0)
                                                        return current.countCards('he', function (card) {
                                                            return get.value(card, current) > 5;
                                                        });
                                                    return (
                                                        current.countCards('hej', function (card) {
                                                            return get.position(card) == 'j' || get.value(card, current) <= 0;
                                                        }) > 4
                                                    );
                                                })
                                            )
                                                return '选项二';
                                            return '选项一';
                                        });
                                } else {
                                    player.chooseControl('确定', 'cancel2').set('prompt', '是否发动【内伐】？').set('prompt2', '摸五张牌,弃置一张牌');
                                }
                                ('step 1');
                                if (result.control == 'cancel2') {
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    event.finish();
                                    return;
                                } else if (result.control == '选项二' && event.num > 0) {
                                    player
                                        .chooseTarget('请选择一名角色,获得其区域内的至多' + event.num + '张牌', true, function (card, player, target) {
                                            return target.countGainableCards(player, 'hej') > 0;
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (
                                                att > 0 &&
                                                target.countCards('ej', function (card) {
                                                    return get.position(card) == 'j' || get.value(card, target) <= 0;
                                                })
                                            )
                                                return 2 * att;
                                            else if (
                                                att < 0 &&
                                                target.countCards('he', function (card) {
                                                    return get.value(card, target) > 5;
                                                })
                                            )
                                                return -att;
                                            return -1;
                                        });
                                } else if (result.control == '选项一' || result.control == '确定') {
                                    delete _status.noclearcountdown;
                                    if (!_status.noclearcountdown) {
                                        game.stopCountChoose();
                                    }
                                    player.draw(5);
                                    player.gainMaxHp(5);
                                    player.recover(5);
                                    event.goto(4);
                                }
                                ('step 2');
                                delete _status.noclearcountdown;
                                if (!_status.noclearcountdown) {
                                    game.stopCountChoose();
                                }
                                if (result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    player.gainPlayerCard(target, 'hej', [1, target.countCards('hej') > event.num ? event.num : target.countCards('hej')], true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.cards.length && event.num > 0) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.countGainableCards(player, 'hej') > 0;
                                        })
                                    ) {
                                        event.num -= result.cards.length;
                                        event._result = { control: '选项二' };
                                        event.goto(1);
                                    }
                                }
                                ('step 4');
                                player.chooseToDiscard(true, 'he').set('ai', function (cardx) {
                                    var player = _status.event.player;
                                    var num = 0;
                                    var hs = player.getCards('h');
                                    var muniu = player.getEquip('muniu');
                                    var subs = [];
                                    if (muniu && muniu.cards) hs = hs.concat(muniu.cards);
                                    if (get.type(cardx) == 'basic') {
                                        var shas = hs.filter(function (card) {
                                            return card != cardx && card.name == 'sha' && player.hasValueTarget(card);
                                        });
                                        var numx = player.countCards('h', function (card) {
                                            return get.type(card, player) != 'basic';
                                        });
                                        num += Math.min(numx, Math.max(0, shas.length - player.getCardUsable('sha'))) * 0.7;
                                        num +=
                                            Math.min(
                                                player.getCardUsable('sha') + numx,
                                                shas.filter(function (card) {
                                                    return (
                                                        game.countPlayer(function (current) {
                                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                                        }) > 1
                                                    );
                                                }).length
                                            ) * 1.1;
                                        var taos = Math.min(
                                            player.maxHp - player.hp,
                                            hs.filter(function (card) {
                                                return cardx != card && card.name == 'tao';
                                            }).length
                                        );
                                        num += taos * player.getDamagedHp() * 1.2;
                                    } else {
                                        var numx = Math.sqrt(
                                            Math.min(
                                                5,
                                                player.countCards('h', function (card) {
                                                    return get.type(card, player) == 'basic';
                                                })
                                            )
                                        );
                                        if (numx)
                                            num +=
                                                (numx *
                                                    Math.min(
                                                        2,
                                                        hs.filter(function (card) {
                                                            if (card == cardx || get.type(card) != 'equip' || !player.hasUseTarget(card)) return false;
                                                            subs.add(get.subtype(card));
                                                            return true;
                                                        }).length
                                                    ) *
                                                    (2.5 + player.countCards('e'))) /
                                                2.5;
                                        num +=
                                            hs.filter(function (card) {
                                                return card != cardx && get.type2(card) == 'trick' && player.hasValueTarget(card);
                                            }).length * 0.65;
                                    }
                                    if (get.position(cardx) == 'e' && cardx.name != 'muniu' && subs.includes(get.subtype(card))) num += 3;
                                    return num * 1.5 - get.value(cardx);
                                });
                                ('step 5');
                                if (result.bool && result.cards && result.cards.length) {
                                    var name = get.type(result.cards[0]) == 'basic' ? 'new_neifa_basic' : 'new_neifa_nobasic';
                                    player.addTempSkill(name);
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            subSkill: {
                                basic: {
                                    mark: true,
                                    marktext: '伐',
                                    intro: {
                                        name: '内伐 - 基本牌',
                                        content: '本回合内使用【杀】选择目标时可以多选择5个目标,使用【杀】的目标次数上限+5无视防具且无距离限制',
                                    },
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') {
                                                return num + 5;
                                            }
                                        },
                                        targetInRange(card) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    filter(event, player) {
                                        if (event.card.name != 'sha') return false;
                                        return game.hasPlayer(function (current) {
                                            return !event.targets.includes(current) && player.canUse(event.card, current);
                                        });
                                    },
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('new_neifa'), '为' + get.translation(trigger.card) + '额外指定五个目标', [0, 5], function (card, player, target) {
                                                return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target);
                                            })
                                            .set('sourcex', trigger.targets)
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, _status.event.card, player, player);
                                            })
                                            .set('card', trigger.card);
                                        ('step 1');
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        trigger.targets.addArray(event.targets);
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (!arg || !arg.card || arg.card.name != 'sha') return false;
                                        },
                                    },
                                },
                                nobasic: {
                                    group: 'new_neifa_draw',
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    mark: true,
                                    marktext: '伐',
                                    mod: {
                                        targetInRange(card) {
                                            return true;
                                        },
                                    },
                                    intro: {
                                        name: '内伐 - 非基本牌',
                                        content: '本回合内使用普通锦囊牌选择目标时可以多选择5个目标或一减少一个目标,你使用牌无距离限制且本回合前五次使用牌时摸5张牌.',
                                    },
                                    filter(event, player) {
                                        if (get.type(event.card) != 'trick') return false;
                                        if (event.targets && event.targets.length) return true;
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        if (event.targets && !info.multitarget) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
                                                })
                                            ) {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var prompt2 = '为' + get.translation(trigger.card) + '增加五个目标或减少一个目标';
                                        player
                                            .chooseTarget(get.prompt('new_neifa'), [1, 5], function (card, player, target) {
                                                var player = _status.event.player;
                                                if (_status.event.targets.includes(target)) return true;
                                                return lib.filter.targetEnabled2(_status.event.card, player, target) && lib.filter.targetInRange(_status.event.card, player, target);
                                            })
                                            .set('prompt2', prompt2)
                                            .set('ai', function (target) {
                                                var trigger = _status.event.getTrigger();
                                                var player = _status.event.player;
                                                return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                                            })
                                            .set('targets', trigger.targets)
                                            .set('card', trigger.card)
                                            .set('targetprompt', function (target) {
                                                if (_status.event.targets.includes(target)) return '移除';
                                                return '额外目标';
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (!event.isMine() && !event.isOnline()) game.delayx();
                                            event.targets = result.targets;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (event.targets) {
                                            var list = [];
                                            for (var i = 0; i < event.targets.length; i++) {
                                                if (trigger.targets.includes(event.targets[i])) {
                                                    list.push(event.targets[i]);
                                                    event.targets.remove(event.targets[i]);
                                                }
                                            }
                                            if (list.length > 1) {
                                                player
                                                    .chooseTarget('请选择要为' + get.translation(trigger.card) + '移除的一个目标', function (card, player, target) {
                                                        return list.includes(target);
                                                    })
                                                    .set('ai', function (target) {
                                                        var trigger = _status.event.getTrigger();
                                                        var player = _status.event.player;
                                                        return get.effect(target, trigger.card, player, player) * (_status.event.targets.includes(target) ? -1 : 1);
                                                    })
                                                    .set('targets', trigger.targets)
                                                    .set('card', trigger.card);
                                            } else if (list.length) trigger.targets.removeArray(list);
                                        }
                                        ('step 3');
                                        if (result.targets && result.targets.length) {
                                            trigger.targets.removeArray(result.targets);
                                        }
                                        trigger.targets.addArray(event.targets);
                                    },
                                },
                                draw: {
                                    audio: 'ext:阴间集结/audio:2',
                                    usable: 5,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    content() {
                                        player.draw(5);
                                        player.gainMaxHp(5);
                                        player.recover(5);
                                    },
                                },
                            },
                        },
                        xinqinzheng: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                return num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0;
                            },
                            content() {
                                var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                var cards = [];
                                if (num % 2 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'sha' || card.name == 'shan';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 3 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'tao' || card.name == 'jiu';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 4 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'shunshou' || card.name == 'guohe';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (num % 5 == 0) {
                                    var card = get.cardPile2(function (card) {
                                        return card.name == 'juedou' || card.name == 'wuzhong';
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                                player.gainMaxHp();
                                player.recover();
                            },
                            group: 'Q_qinzheng_count',
                            intro: {
                                content(num) {
                                    var str = '<li>总次数:';
                                    str += num;
                                    str += '<br><li>杀/闪:';
                                    str += num % 2;
                                    str += '/2<br><li>桃/酒:';
                                    str += num % 3;
                                    str += '/3<br><li>决斗/无中生有:';
                                    str += num % 4;
                                    str += '/4<br><li>顺手牵羊/过河拆桥:';
                                    str += num % 5;
                                    str += '/5';
                                    return str;
                                },
                            },
                        },
                        Q_qinzheng_count: {
                            trigger: {
                                player: ['useCard1', 'respond'],
                            },
                            silent: true,
                            firstDo: true,
                            noHidden: true,
                            content() {
                                player.storage.qinzheng = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                player.markSkill('xinqinzheng');
                            },
                        },
                        xin_yanyu: {
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            audio: 'ext:阴间集结/audio:2',
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(get.prompt('xin_yanyu'), get.translation('xin_yanyu_info'), 'he');
                                if (player == trigger.player) {
                                    next.set(
                                        'goon',
                                        (function () {
                                            var map = {
                                                basic: 0,
                                                trick: 0.1,
                                            };
                                            var hs = trigger.player.getCards('h');
                                            var sha = false;
                                            var jiu = false;
                                            for (var i = 0; i < hs.length; i++) {
                                                if (trigger.player.hasValueTarget(hs[i])) {
                                                    if (hs[i].name == 'sha' && !sha) {
                                                        sha = true;
                                                        map.basic += 2;
                                                    }
                                                    if (hs[i].name == 'tao') map.basic += 6;
                                                    if (hs[i].name == 'jiu') {
                                                        jiu = true;
                                                        map.basic += 2.5;
                                                    }
                                                    if (get.type(hs[i]) == 'trick') map.trick += get.value(hs[i], player, 'raw');
                                                }
                                            }
                                            return map;
                                        })()
                                    );
                                    next.set('ai', function (card) {
                                        var map = _status.event.goon;
                                        var type = get.type(card, 'trick');
                                        if (!map[type]) return -1;
                                        return map[type] - get.value(card);
                                    });
                                } else {
                                    next.set('ai', function (cardx) {
                                        var map = {
                                            basic: 0,
                                            trick: 0,
                                        };
                                        var hs = trigger.player.getCards('h');
                                        var sha = false;
                                        var jiu = false;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i] != cardx && trigger.player.hasValueTarget(hs[i])) {
                                                if (hs[i].name == 'sha' && !sha) {
                                                    sha = true;
                                                    map.basic += 2;
                                                }
                                                if (hs[i].name == 'tao') map.basic += 6;
                                                if (hs[i].name == 'jiu') {
                                                    jiu = true;
                                                    map.basic += 3;
                                                }
                                                if (get.type(hs[i]) == 'trick') map.trick += player.getUseValue(hs[i]);
                                            }
                                        }
                                        var type = get.type(cardx, 'trick');
                                        if (!map[type]) return -get.value(cardx);
                                        return map[type] - get.value(cardx);
                                    });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.xin_yanyu = get.type(result.cards[0], 'trick');
                                    player.addTempSkill('xin_yanyu2', 'phaseUseAfter');
                                }
                            },
                        },
                        xin_yanyu2: {
                            audio: 'ext:阴间集结/audio:2',
                            init(player, skill) {
                                player.storage[skill] = 0;
                            },
                            onremove(player, skill) {
                                delete player.storage.xin_yanyu;
                                delete player.storage.xin_yanyu2;
                            },
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter', 'gainAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                //var evt=event.parent;
                                //if(evt&&(evt.name=='useCard'||evt.name=='respond')) return false;
                                var type = player.storage.xin_yanyu;
                                var cards = event.cards;
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.type(cards[i], 'trick') == type && get.position(cards[i], true) == 'd') return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.logged = false;
                                event.cards = [];
                                var type = player.storage.xin_yanyu;
                                var cards = trigger.cards;
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.type(cards[i], 'trick') == type && get.position(cards[i], true) == 'd') event.cards.push(cards[i]);
                                }
                                ('step 1');
                                player.chooseCardButton(event.cards, '【燕语】:是否将其中的一张牌交给一名角色？').ai = function (card) {
                                    if (card.name == 'du') return 10;
                                    return get.value(card);
                                };
                                ('step 2');
                                if (result.bool) {
                                    player.storage.xin_yanyu2++;
                                    if (!event.logged) {
                                        player.addExpose(0.25);
                                        event.logged = true;
                                    }
                                    event.togain = result.links[0];
                                    event.cards.remove(event.togain);
                                    player
                                        .chooseTarget(true, '请选择要获得' + get.translation(event.togain) + '的角色')
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var card = _status.event.card;
                                            var val = get.value(card);
                                            if (player.storage.xin_yanyu2 < 3 && target == _status.currentPhase && target.hasValueTarget(card, null, true)) att = att * 5;
                                            else if (target == player && !player.hasJudge('lebu') && get.type(card) == 'trick') att = att * 3;
                                            if (target.hasSkillTag('nogain')) att /= 10;
                                            return att * val;
                                        })
                                        .set('card', event.togain);
                                } else event.finish();
                                ('step 3');
                                var target = result.targets[0];
                                player.line(target, 'green');
                                target.gain(event.togain, 'gain2');
                                if (event.cards.length) event.goto(1);
                            },
                        },
                        xin_qiaoshi: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            audio: 'ext:阴间集结/audio:2',
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player != event.player;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                var listm = [];
                                var listv = [];
                                if (trigger.player.name1 != undefined) listm = lib.character[trigger.player.name1][3];
                                else listm = lib.character[trigger.player.name][3];
                                if (trigger.player.name2 != undefined) listv = lib.character[trigger.player.name2][3];
                                listm = listm.concat(listv);
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    if (info.charlotte || info.zhuSkill || (info.unique && !info.limited) || info.juexingji) return false;
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                list.remove(player.getSkills());
                                if (!list.length) {
                                    event.finish();
                                }
                                if (list.length) {
                                    player
                                        .chooseControl(list, 'cancel2')
                                        .set('prompt', get.prompt('xin_qiaoshi'))
                                        .set('prompt2', get.translation('xin_qiaoshi_info'))
                                        .set('ai', function () {
                                            return list.randomGet();
                                        });
                                } else event.finish();
                                ('step 1');
                                if (result.control && result.control != 'cancel2') {
                                    game.log(player, '获得了技能', '#g【' + get.translation(result.control) + '】');
                                    player.addSkillLog(result.control);
                                }
                                ('step 2');
                                player.gainMaxHp(3);
                                player.recover(3);
                            },
                        },
                        xin_jianjie: {
                            derivation: ['Q_jianjie'],
                            group: ['xin_jianjie1', 'xin_jianjie2'],
                            audio: 'ext:阴间集结/audio:3',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                if (player.phaseNumber > 1) return false;
                                return !game.hasPlayer(function (current) {
                                    return current.hasSkill('xin_smh_huoji') || current.hasSkill('xin_smh_lianhuan');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('请将「龙印」交给一名角色', true, function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return 10 + get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    target.addSkill('xin_smh_huoji');
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return !current.hasSkill('xin_smh_huoji') && current != player;
                                    })
                                ) {
                                    player
                                        .chooseTarget('请将「凤印」交给一名角色', true, function (card, player, target) {
                                            return target != player && !target.hasSkill('xin_smh_huoji');
                                        })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return 10 + get.attitude(player, target);
                                        });
                                } else event.finish();
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('xin_smh_lianhuan');
                                }
                            },
                        },
                        xin_jianjie1: {
                            audio: 'ext:阴间集结/audio:3',
                            prompt: '你的第一个准备阶段,你令两名不同的角色分别获得龙印与凤印;出牌阶段限四次(你的第一个回合除外),或当拥有龙印、凤印的角色死亡时,你可以转移龙印、凤印',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            usable: 4,
                            filter(event, player) {
                                if (player.phaseNumber == 1) return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('xin_smh_huoji') || current.hasSkill('xin_smh_lianhuan');
                                    })
                                )
                                    return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                if (ui.selected.targets.length == 1) {
                                    return true;
                                } else {
                                    return target.hasSkill('xin_smh_huoji') || target.hasSkill('xin_smh_lianhuan');
                                }
                            },
                            targetprompt: ['移走印', '得到印'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                if (targets[0].hasSkill('xin_smh_huoji') && targets[0].hasSkill('xin_smh_lianhuan')) {
                                    player.chooseControl('龙印', '凤印').set('prompt', '请选择要移动的印');
                                } else {
                                    if (targets[0].hasSkill('xin_smh_huoji')) event._result = { control: '龙印' };
                                    else event._result = { control: '凤印' };
                                }
                                ('step 1');
                                if (result.control == '龙印') {
                                    targets[0].removeSkill('xin_smh_huoji');
                                    targets[1].addSkill('xin_smh_huoji');
                                } else {
                                    targets[0].removeSkill('xin_smh_lianhuan');
                                    targets[1].addSkill('xin_smh_lianhuan');
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.targets.length == 0) {
                                            return get.attitude(player, target) < 0 ? -999 : -3;
                                        } else {
                                            return target.countCards('h') + 1;
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        xin_smh_huoji: {
                            charlotte: true,
                            group: ['xin_smh_yeyan'],
                            mark: true,
                            marktext: '龙',
                            intro: {
                                name: '龙印',
                                content: '<li>出牌阶段你可以将一张红色牌当【火攻】使用.<br><li>若你同时拥有「凤印」,则你视为拥有技能〖业炎〗',
                            },
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'chooseToUse',
                            position: 'he',
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            viewAs: {
                                name: 'huogong',
                                nature: 'fire',
                            },
                            viewAsFilter(player) {
                                if (player.hasSkill('huoji')) return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('xin_jianjie');
                                    })
                                )
                                    return false;
                                if (!player.countCards('he', { color: 'red' })) return false;
                            },
                            prompt: '将一张红色牌当火攻使用',
                            check(card) {
                                var player = _status.currentPhase;
                                if (player.countCards('h') > player.hp) {
                                    return 6 - get.value(card);
                                }
                                return 4 - get.value(card);
                            },
                            ai: {
                                fireAttack: true,
                                basic: {
                                    order: 4,
                                    value: [3, 1],
                                    useful: 1,
                                },
                                wuxie(target, card, player, current, state) {
                                    if (get.attitude(current, player) >= 0 && state > 0) return false;
                                },
                                result: {
                                    player(player) {
                                        var nh = player.countCards('h');
                                        if (nh <= player.hp && nh <= 4 && _status.event.name == 'chooseToUse') {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -10;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -10;
                                                if (viewAs && viewAs.name == 'huogong') return -10;
                                            }
                                        }
                                        return 0;
                                    },
                                    target(player, target) {
                                        if (target.hasSkill('huogong2') || target.countCards('h') == 0) return 0;
                                        if (player.countCards('h') <= 1) return 0;
                                        if (target == player) {
                                            if (typeof _status.event.filterCard == 'function' && _status.event.filterCard({ name: 'huogong' }, player, _status.event)) {
                                                return -1.5;
                                            }
                                            if (_status.event.skill) {
                                                var viewAs = get.info(_status.event.skill).viewAs;
                                                if (viewAs == 'huogong') return -1.5;
                                                if (viewAs && viewAs.name == 'huogong') return -1.5;
                                            }
                                            return 0;
                                        }
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        xin_smh_lianhuan: {
                            charlotte: true,
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                if (player.hasSkill('lianhuan') || player.hasSkill('xinlianhuan')) return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('xin_jianjie');
                                    })
                                )
                                    return false;
                                if ((player.getStat().skill.xin_smh_lianhuan || 0) + (player.getStat().skill.xin_smh_lianhuan1 || 0) >= 6) return false;
                                return player.countCards('h', { suit: 'club' }) > 0;
                            },
                            filterCard(card) {
                                return card.suit == 'club';
                            },
                            viewAs: {
                                name: 'tiesuo',
                            },
                            prompt: '将一张♣️️牌当铁锁连环使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            mark: true,
                            marktext: '凤',
                            intro: {
                                name: '凤印',
                                content: '<li>出牌阶段限六次,你可以将你的任意一张♣️️手牌当作【铁索连环】使用或重铸',
                            },
                            group: ['xin_smh_lianhuan1'],
                            ai: {
                                wuxie(target, card, player, viewer) {
                                    if (_status.event.getRand() < 0.5) return 0;
                                    if (player == game.me && get.attitude(viewer, player) > 0) {
                                        return 0;
                                    }
                                },
                                basic: {
                                    useful: 4,
                                    value: 4,
                                    order: 7,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isLinked()) {
                                            if (target.hasSkillTag('link')) return 0;
                                            var f = target.hasSkillTag('nofire');
                                            var t = target.hasSkillTag('nothunder');
                                            if (f && t) return 0;
                                            if (f || t) return 0.5;
                                            return 2;
                                        }
                                        if (get.attitude(player, target) >= 0) return -0.9;
                                        if (ui.selected.targets.length) return -0.9;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return get.attitude(player, current) <= -1 && current != target && !current.isLinked();
                                            })
                                        ) {
                                            return -0.9;
                                        }
                                        return 0;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                    norepeat: 1,
                                },
                            },
                        },
                        xin_jianjie2: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            silent: true,
                            popup: false,
                            filter(event, player) {
                                return event.player.hasSkill('xin_smh_huoji') || event.player.hasSkill('xin_smh_lianhuan');
                            },
                            content() {
                                'step 0';
                                ('step 1');
                                if (trigger.player.hasSkill('xin_smh_huoji')) {
                                    player.chooseTarget('请将' + get.translation(trigger.player) + '的「龙印」交给一名角色', true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return 10 + get.attitude(player, target);
                                    });
                                } else event.goto(2);
                                ('step 2');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'fire');
                                    target.addSkill('xin_smh_huoji');
                                }
                                ('step 3');
                                if (trigger.player.hasSkill('xin_smh_lianhuan')) {
                                    player.chooseTarget('请将' + get.translation(trigger.player) + '的「凤印」交给一名角色', true).set('ai', function (target) {
                                        var player = _status.event.player;
                                        return 10 + get.attitude(player, target);
                                    });
                                } else event.finish();
                                ('step 4');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('xin_smh_lianhuan');
                                }
                            },
                        },
                        xin_smh_lianhuan1: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            filter(event, player) {
                                if (player.hasSkill('lianhuan') || player.hasSkill('xinlianhuan')) return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('xin_jianjie');
                                    })
                                )
                                    return false;
                                if ((player.getStat().skill.xin_smh_lianhuan || 0) + (player.getStat().skill.xin_smh_lianhuan1 || 0) >= 3) return false;
                                return player.countCards('h', { suit: 'club' }) > 0;
                            },
                            filterCard(card) {
                                return card.suit == 'club';
                            },
                            check(card) {
                                return -1;
                            },
                            content() {
                                player.draw();
                            },
                            discard: false,
                            loseTo: 'discardPile',
                            prompt: '将一张♣️️牌置入弃牌堆并摸一张牌',
                            delay: 0.5,
                            prepare(cards, player) {
                                player.$throw(cards, 1000);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player: 1,
                                },
                            },
                            forced: true,
                        },
                        xin_smh_yeyan: {
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            prompt: '出牌阶段,你可以对一至三名角色造成至多共3点火焰伤害(你可以任意分配每名目标角色受到的伤害点数),若你将对一名角色分配2点或更多的火焰伤害,你须先弃置四张不同花色的手牌',
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.hasSkill('xin_jianjie');
                                    })
                                )
                                    return false;
                                return player.hasSkill('xin_smh_lianhuan');
                            },
                            filterTarget(card, player, target) {
                                var length = ui.selected.cards.length;
                                return length == 0 || length == 4;
                            },
                            filterCard(card) {
                                var suit = card.suit;
                                for (var i = 0; i < ui.selected.cards.length; i++) {
                                    if (ui.selected.cards[i].suit == suit) return false;
                                }
                                return true;
                            },
                            complexCard: true,
                            selectCard: [0, 4],
                            line: 'fire',
                            check() {
                                return -1;
                            },
                            selectTarget() {
                                if (ui.selected.cards.length == 4) return [1, 2];
                                if (ui.selected.cards.length == 0) return [1, 3];
                                game.uncheck('target');
                                return [1, 3];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                targets.sort(lib.sort.seat);
                                event.num = 0;
                                ('step 1');
                                if (cards.length == 4) event.goto(2);
                                else {
                                    if (event.num < targets.length) {
                                        targets[event.num].damage('fire', 1, 'nocard');
                                        event.num++;
                                    }
                                    if (event.num == targets.length) event.finish();
                                    else event.redo();
                                }
                                ('step 2');
                                if (targets.length == 1) event.goto(4);
                                else {
                                    player
                                        .chooseTarget('请选择受到2点伤害的角色', true, function (card, player, target) {
                                            return _status.event.targets.includes(target);
                                        })
                                        .set('ai', function (target) {
                                            return 1;
                                        })
                                        .set('targets', targets)
                                        .set('forceDie', true);
                                }
                                ('step 3');
                                if (event.num < targets.length) {
                                    var dnum = 1;
                                    if (result.bool && result.targets && targets[event.num] == result.targets[0]) dnum = 2;
                                    targets[event.num].damage('fire', dnum, 'nocard');
                                    event.num++;
                                }
                                if (event.num == targets.length) event.finish();
                                else event.redo();
                                ('step 4');
                                player
                                    .chooseControl('2点', '3点')
                                    .set('prompt', '请选择伤害点数')
                                    .set('ai', function () {
                                        return '3点';
                                    })
                                    .set('forceDie', true);
                                ('step 5');
                                targets[0].damage('fire', result.control == '2点' ? 2 : 3, 'nocard');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: 0,
                                },
                            },
                        },
                        xin_yinshi: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: ['damageBegin4', 'loseHpBegin', 'dieBefore', 'dying'],
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        xin_mingshi: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 1;
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            priority: null,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        xin_chenghao: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.lianhuanable == true && event.player.isAlive();
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                event.cards = get.cards(
                                    game.countPlayer(function (current) {
                                        return current.isLinked();
                                    }) + 10
                                );
                                ('step 1');
                                if (event.cards.length > 1) {
                                    player.chooseCardButton('【称好】:请选择要分配的牌', true, event.cards, [1, event.cards.length]).set('ai', function (button) {
                                        if (ui.selected.buttons.length == 0) return 1;
                                        return 0;
                                    });
                                } else if (event.cards.length == 1) {
                                    event._result = { links: event.cards.slice(0), bool: true };
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    for (var i = 0; i < result.links.length; i++) {
                                        event.cards.remove(result.links[i]);
                                    }
                                    event.togive = result.links.slice(0);
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
                                }
                                ('step 3');
                                if (result.targets.length) {
                                    player.gainMaxHp(5);
                                    player.recover(5);
                                    result.targets[0].gain(event.togive, 'draw');
                                    player.line(result.targets[0], 'green');
                                    game.log(result.targets[0], '获得了' + get.cnNumber(event.togive.length) + '张牌');
                                    event.goto(1);
                                }
                            },
                        },
                        Q_jianjie: {},
                        xinpytianjiang: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var i = 0;
                                var list = [];
                                while (i++ < 2) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) != 'equip') return false;
                                        return list.length == 0 || get.subtype(card) != get.subtype(list[0]);
                                    });
                                    if (card) list.push(card);
                                }
                                if (!list.length) {
                                    event.finish();
                                    return;
                                }
                                event.list = list;
                                player.gain(event.list, 'gain2');
                                ('step 1');
                                var card = event.list.shift();
                                if (player.getCards('h').includes(card)) {
                                    player.$give(card, player, false);
                                    player.equip(card);
                                }
                                if (event.list.length) event.redo();
                            },
                            group: 'xinpytianjiang_move',
                        },
                        xinpytianjiang_move: {
                            audio: 'pytianjiang',
                            prompt: '将装备区里的一张牌移动至其他角色的装备区',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            position: 'e',
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            check() {
                                return 1;
                            },
                            filterCard: true,
                            filterTarget(event, player, target) {
                                return target != player && target.canEquip(ui.selected.cards[0], true);
                            },
                            prepare: 'give',
                            discard: false,
                            lose: false,
                            content() {
                                target.equip(cards[0]);
                                if (cards[0].name.indexOf('xinpyzhuren_') == 0) player.draw(4);
                            },
                            ai: {
                                order: 11,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (ui.selected.cards.length) {
                                            var card = ui.selected.cards[0];
                                            if (target.getEquip(card) || target.countCards('h', { subtype: get.subtype(card) })) return 0;
                                            return get.effect(target, card, player, target);
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        xinpyzhuren: {
                            audio: 'ext:阴间集结/audio:2',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            charlotte: true,
                            fixed: true,
                            filterCard: true,
                            selectCard: 1,
                            check(card) {
                                var player = _status.event.player;
                                var name = 'xinpyzhuren_' + card[card.name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || (_status.xinpyzhuren && _status.xinpyzhuren[name])) {
                                    if (!player.countCards('h', 'sha')) return 4 - get.value(card);
                                    return 0;
                                }
                                return 7 - get.value(card);
                            },
                            content() {
                                player.addSkill('xinpyzhuren_destroy');
                                if (!_status.xinpyzhuren) _status.xinpyzhuren = {};
                                var rand = 0.85;
                                var num = cards[0].number;
                                if (num > 4) rand = 0.9;
                                if (num > 8) rand = 0.95;
                                if (num > 12 || cards[0].name == 'shandian' || get.isLuckyStar(player)) rand = 1;
                                var name = 'xinpyzhuren_' + cards[0][cards[0].name == 'shandian' ? 'name' : 'suit'];
                                if (!lib.card[name] || _status.xinpyzhuren[name] || Math.random() > rand) {
                                    player.popup('杯具');
                                    game.log(player, '锻造失败');
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'sha';
                                    });
                                    if (card) player.gain(card, 'gain2');
                                } else {
                                    _status.xinpyzhuren[name] = true;
                                    player.gain(game.createCard(name, cards[0].name == 'shandian' ? 'spade' : cards[0].suit, 1), 'gain2');
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xinpyzhuren_destroy: {
                            trigger: {
                                global: ['loseEnd', 'cardsDiscardEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                var cs = event.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name.indexOf('xinpyzhuren_') == 0 && get.position(cs[i], true) == 'd') return true;
                                }
                                return false;
                            },
                            forceDie: true,
                            content() {
                                if (!_status.xinpyzhuren) _status.xinpyzhuren = {};
                                var list = [];
                                var cs = trigger.cards;
                                for (var i = 0; i < cs.length; i++) {
                                    if (cs[i].name.indexOf('xinpyzhuren_') == 0 && get.position(cs[i], true) == 'd') {
                                        _status.xinpyzhuren[cs[i].name] = false;
                                        list.push(cs[i]);
                                    }
                                }
                                game.log(list, '已被移出游戏');
                                game.cardsGotoSpecial(list);
                            },
                        },
                        xinpyzhuren_heart: {
                            audio: 'ext:阴间集结/audio:true',
                            trigger: {
                                source: 'damageSource',
                            },
                            equipSkill: true,
                            filter(event, player) {
                                return event.parent.name == 'sha';
                            },
                            check(event, player) {
                                return player.isDamaged();
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    var player = _status.event.getParent('xinpyzhuren_heart').player;
                                    if (player.isHealthy() && get.color(card) == 'red') return 0;
                                    return 2;
                                });
                                ('step 1');
                                if (result.color == 'red') player.recover(4);
                                else player.draw(4);
                            },
                        },
                        xinpyzhuren_diamond: {
                            audio: 'ext:阴间集结/audio:true',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            forced: true,
                            equipSkill: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    var cardx = player.getEquip('xinpyzhuren_diamond');
                                    if (card.name == 'sha' && (!cardx || player.hasSkill('xinpyzhuren_diamond', null, false) || (!_status.xinpyzhuren_diamond_temp && !ui.selected.cards.includes(cardx)))) {
                                        return (num += 4);
                                    }
                                },
                                cardEnabled2(card, player) {
                                    if (!_status.event.addCount_extra || player.hasSkill('xinpyzhuren_diamond', null, false)) return;
                                    if (card && card == player.getEquip('xinpyzhuren_diamond')) {
                                        _status.xinpyzhuren_diamond_temp = true;
                                        var bool = lib.filter.cardUsable({ name: 'sha' }, player);
                                        delete _status.xinpyzhuren_diamond_temp;
                                        if (!bool) return false;
                                    }
                                },
                            },
                            filter(event, player) {
                                if (event.parent.name != 'sha') return false;
                                return (
                                    player.countCards('he', function (card) {
                                        return card != player.getEquip('xinpyzhuren_diamond');
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard(
                                    'he',
                                    function (card, player) {
                                        return card != player.getEquip('xinpyzhuren_diamond');
                                    },
                                    get.prompt(event.name, trigger.player),
                                    '弃置一张牌,令即将对其造成的伤害+4'
                                );
                                next.ai = function (card) {
                                    if (_status.event.goon) return 6 - get.value(card);
                                    return -1;
                                };
                                next.set(
                                    'goon',
                                    get.attitude(player, trigger.player) < 0 &&
                                    !trigger.player.hasSkillTag('filterDamage', null, {
                                        player: player,
                                        card: trigger.card,
                                    })
                                );
                                ('step 1');
                                if (result.bool) trigger.num += 4; //QQQ
                            },
                            ai: {
                                expose: 0.25,
                            },
                        },
                        xinpyzhuren_club: {
                            audio: 'ext:阴间集结/audio:true',
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            equipSkill: true,
                            filter(event, player) {
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
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
                                var prompt2 = '为' + get.translation(trigger.card) + '额外指定2个目标';
                                player
                                    .chooseTarget([1, 3], get.prompt(event.name), function (card, player, target) {
                                        var player = _status.event.player;
                                        if (_status.event.targets.includes(target)) return false;
                                        return lib.filter.targetEnabled2(_status.event.card, player, target);
                                    })
                                    .set('prompt2', prompt2)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        return get.effect(target, trigger.card, player, player);
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card);
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    event.targets = result.targets;
                                } else {
                                    player.getStat('triggerSkill')[event.name]--;
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                        },
                        xinpyzhuren_spade: {
                            audio: 'ext:阴间集结/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha'; //&&event.targets.length==1&&get.color(event.card)=='black';
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                player.addTempSkill('xinpyzhuren_spade2');
                                player.addMark('xinpyzhuren_spade2', 1, false);
                                //trigger.target.gain(trigger.cards.filterInD(),'gain2','log');
                                trigger.target.loseHp(Math.min(player.countMark('xinpyzhuren_spade2'), 10)); //.set('source',player);
                            },
                            ai: {
                                jueqing: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.name == 'sha' && get.color(arg.card) == 'black') return true;
                                        return false;
                                    }
                                },
                            },
                        },
                        xinpyzhuren_spade2: {},
                        xinpyzhuren_shandian: {
                            audio: 'ext:阴间集结/audio:true',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha'; //&&event.targets.length==1;
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                trigger.target.judge(function (card) {
                                    var suit = card.suit;
                                    if (suit == 'spade') return -10;
                                    if (suit == 'club') return -5;
                                    return 0;
                                });
                                ('step 1');
                                if (result.suit == 'spade') {
                                    trigger.target.damage(6, 'thunder');
                                    //trigger.parent.excluded.add(trigger.target);
                                } else if (result.suit == 'club') {
                                    trigger.target.damage(3, 'thunder');
                                    player.recover(3);
                                    player.draw(3);
                                }
                            },
                        },
                        xin_youlong: {
                            enable: 'chooseToUse',
                            usable: 1, //QQQ
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            zhuanhuanji: true,
                            init(player) {
                                player.storage.xin_youlong = false;
                                if (!player.storage.xin_youlong2) player.storage.xin_youlong2 = [];
                            },
                            hiddenCard(player, name) {
                                if (player.storage.xin_youlong2.includes(name)) return false;
                                var type = get.type(name);
                                if (player.storage.xin_youlong) return type == 'basic';
                                return type == 'trick';
                            },
                            filter(event, player) {
                                if (player.storage.xin_youlong2.includes(name)) return false;
                                var type = player.storage.xin_youlong ? 'basic' : 'trick';
                                for (var name of lib.inpile) {
                                    if (player.storage.xin_youlong2.includes(name)) continue;
                                    if (get.type(name) != type) continue;
                                    if (event.filterCard && event.filterCard({ name: name }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var type = player.storage.xin_youlong ? 'basic' : 'trick';
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (player.storage.xin_youlong2.includes(name)) continue;
                                        if (get.type(name) != type) continue;
                                        if (event.filterCard && event.filterCard({ name: name }, player, event)) {
                                            list.push([type, '', name]);
                                            if (name == 'sha') {
                                                list.push([type, '', name, 'fire']);
                                                list.push([type, '', name, 'thunder']);
                                                list.push([type, '', name, 'ice']);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('游龙', [list, 'vcard']);
                                },
                                filter(button) {
                                    if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
                                    return true;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        popname: true,
                                        onuse(result, player) {
                                            player.storage.xin_youlong = !player.storage.xin_youlong;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg == 'respond') return false;
                                    if (!player.storage.xin_youlong || player.hasSkill('xin_youlong_true')) return false;
                                    var name = tag == 'respondSha' ? 'sha' : 'shan';
                                    return !player.storage.xin_youlong2.includes(name);
                                },
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xin_youlong_true: {},
                        xin_youlong_false: {},
                        xin_luanfeng: {
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'dying',
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                if (
                                    player.countCards('h', function (card) {
                                        var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                        if (mod2 != 'unchanged') return mod2;
                                        var mod = game.checkMod(card, player, event.player, 'unchanged', 'cardSavable', player);
                                        if (mod != 'unchanged') return mod;
                                        var savable = get.info(card).savable;
                                        if (typeof savable == 'function') savable = savable(card, player, event.player);
                                        return savable;
                                    }) >=
                                    1 - event.player.hp
                                )
                                    return false;
                                if (event.player == player || event.player == get.zhu(player)) return true;
                                return !player.hasUnknown();
                            },
                            content() {
                                'step 0';
                                trigger.player.hp = trigger.player.maxHp;
                                ('step 1');
                                var num = trigger.player.countDisabled();
                                if (num > 0) {
                                    for (var i = 1; i < 10; i++) {
                                        if (trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
                                    }
                                }
                                trigger.player.drawTo(10);
                                trigger.player.gainMaxHp(3);
                                if (player == trigger.player) player.storage.xin_youlong2 = [];
                            },
                        },
                        new_pingjian: {
                            audio: ['pingjian', 2],
                            group: 'new_pingjian_use',
                            trigger: {
                                player: ['damageEnd', 'phaseJieshuBegin', 'loseHpEnd', 'phaseZhunbeiBegin'],
                            },
                            fixed: true,
                            charlotte: true,
                            forced: true,
                            content() {
                                'step 0';
                                var list = [];
                                if (_status.connectMode) var list = get.charactersOL();
                                var skills = [];
                                var map = [];
                                var list1 = [];
                                for (var i in lib.character) {
                                    list1.push(i);
                                }
                                list1.randomSort();
                                var name2 = event.triggername;
                                for (var i = 0; i < list1.length; i++) {
                                    var name = list1[i];
                                    if (name.includes('zuoci') || name.includes('xushao') || name.includes('dongxie') || name.includes('yj_xuhuang')) continue;
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (skills.includes(skills2[j])) {
                                            list.add(name);
                                            if (!map[name]) map[name] = [];
                                            map[name].push(skills2[j]);
                                            skills.add(skills2[j]);
                                            continue;
                                        }
                                        var list2 = [skills2[j]];
                                        game.expandSkills(list2);
                                        for (var k = 0; k < list2.length; k++) {
                                            var info = lib.skill[list2[k]];
                                            if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill) continue;
                                            if (info.trigger.player == name2 || (Array.isArray(info.trigger.player) && info.trigger.player.includes(name2))) {
                                                if (info.init || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                if (info.filter) {
                                                    try {
                                                        var bool = info.filter(trigger, player, name2);
                                                        if (!bool) continue;
                                                    } catch (e) {
                                                        continue;
                                                    }
                                                }
                                                list.add(name);
                                                if (!map[name]) map[name] = [];
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                break;
                                            }
                                        }
                                    }
                                    if (list.length > 11) break;
                                }
                                if (!skills.length) {
                                    event.finish();
                                } else {
                                    var switchToAuto = function () {
                                        _status.imchoosing = false;
                                        event._result = {
                                            bool: true,
                                            skills: skills.randomGet(),
                                        };
                                        if (event.dialog) event.dialog.close();
                                        if (event.control) event.control.close();
                                    };
                                    var chooseButton = function (list, skills) {
                                        var event = _status.event;
                                        if (!event._result) event._result = {};
                                        event._result.skills = [];
                                        var rSkill = event._result.skills;
                                        var dialog = ui.create.dialog('请选择要发动的技能', [list, 'character'], 'hidden');
                                        event.dialog = dialog;
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        for (var i = 0; i < skills.length; i++) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link = skills[i];
                                            table.appendChild(td);
                                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                if (!this.classList.contains('bluebg')) {
                                                    if (rSkill.length >= 1) return;
                                                    rSkill.add(link);
                                                    this.classList.add('bluebg');
                                                } else {
                                                    this.classList.remove('bluebg');
                                                    rSkill.remove(link);
                                                }
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                        dialog.add('　　');
                                        dialog.open();
                                        event.switchToAuto = function () {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        };
                                        event.control = ui.create.control('ok', function (link) {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        });
                                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                                            event.dialog.buttons[i].classList.add('selectable');
                                        }
                                        game.pause();
                                        game.countChoose();
                                    };
                                    if (event.isMine()) {
                                        chooseButton(list, skills);
                                    } else if (event.isOnline()) {
                                        event.player.send(chooseButton, list, skills);
                                        event.player.wait();
                                        game.pause();
                                    } else {
                                        switchToAuto();
                                    }
                                }
                                ('step 1');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) {
                                        //QQQ
                                        if (event.triggername == 'damageEnd') player.addTempSkill(i, 'damageAfter');
                                        else if (event.triggername == 'phaseJieshuBegin') player.addTempSkill(i, 'phaseJieshuEnd');
                                        else if (event.triggername == 'loseHpEnd') player.addTempSkill(i, 'loseHpAfter');
                                        else if (event.triggername == 'phaseZhunbeiBegin') player.addTempSkill(i, 'phaseZhunbeiBegin');
                                    }
                                }
                            },
                        },
                        new_pingjian_use: {
                            audio: ['pingjian', 2],
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            position: 'he',
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                var list = [];
                                var skills = [];
                                var map = [];
                                var list1 = [];
                                for (var i in lib.character) {
                                    list1.push(i);
                                }
                                list1.randomSort();
                                for (var i = 0; i < list1.length; i++) {
                                    var name = list1[i];
                                    if (name.includes('zuoci') || name.includes('xushao')) continue;
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (skills.includes(skills2[j])) {
                                            list.add(name);
                                            if (!map[name]) map[name] = [];
                                            map[name].push(skills2[j]);
                                            skills.add(skills2[j]);
                                            continue;
                                        }
                                        var list2 = [skills2[j]];
                                        game.expandSkills(list2);
                                        for (var k = 0; k < list2.length; k++) {
                                            var info = lib.skill[list2[k]];
                                            if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill) continue;
                                            if (info.enable == 'phaseUse' || (Array.isArray(info.enable) && info.enable.includes('phaseUse'))) {
                                                if (info.init || info.onChooseToUse || (info.ai && (info.ai.combo || info.ai.notemp || info.ai.neg))) continue;
                                                if (info.filter) {
                                                    try {
                                                        var bool = info.filter(event.getParent(2), player);
                                                        if (!bool) continue;
                                                    } catch (e) {
                                                        continue;
                                                    }
                                                }
                                                list.add(name);
                                                if (!map[name]) map[name] = [];
                                                map[name].push(skills2[j]);
                                                skills.add(skills2[j]);
                                                break;
                                            }
                                        }
                                    }
                                    if (list.length > 11) break;
                                }
                                if (!skills.length) {
                                    event.finish();
                                } else {
                                    var switchToAuto = function () {
                                        _status.imchoosing = false;
                                        event._result = {
                                            bool: true,
                                            skills: skills.randomGet(),
                                        };
                                        if (event.dialog) event.dialog.close();
                                        if (event.control) event.control.close();
                                    };
                                    var chooseButton = function (list, skills) {
                                        var event = _status.event;
                                        if (!event._result) event._result = {};
                                        event._result.skills = [];
                                        var rSkill = event._result.skills;
                                        var dialog = ui.create.dialog('请选择要发动的技能', [list, 'character'], 'hidden');
                                        event.dialog = dialog;
                                        var table = document.createElement('div');
                                        table.classList.add('add-setting');
                                        table.style.margin = '0';
                                        table.style.width = '100%';
                                        table.style.position = 'relative';
                                        for (var i = 0; i < skills.length; i++) {
                                            var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                            td.link = skills[i];
                                            table.appendChild(td);
                                            td.innerHTML = '<span>' + get.translation(skills[i]) + '</span>';
                                            td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                if (_status.dragged) return;
                                                if (_status.justdragged) return;
                                                _status.tempNoButton = true;
                                                setTimeout(function () {
                                                    _status.tempNoButton = false;
                                                }, 500);
                                                var link = this.link;
                                                if (!this.classList.contains('bluebg')) {
                                                    if (rSkill.length >= 1) return;
                                                    rSkill.add(link);
                                                    this.classList.add('bluebg');
                                                } else {
                                                    this.classList.remove('bluebg');
                                                    rSkill.remove(link);
                                                }
                                            });
                                        }
                                        dialog.content.appendChild(table);
                                        dialog.add('　　');
                                        dialog.open();
                                        event.switchToAuto = function () {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        };
                                        event.control = ui.create.control('ok', function (link) {
                                            event.dialog.close();
                                            event.control.close();
                                            game.resume();
                                            _status.imchoosing = false;
                                        });
                                        for (var i = 0; i < event.dialog.buttons.length; i++) {
                                            event.dialog.buttons[i].classList.add('selectable');
                                        }
                                        game.pause();
                                        game.countChoose();
                                    };
                                    if (event.isMine()) {
                                        chooseButton(list, skills);
                                    } else if (event.isOnline()) {
                                        event.player.send(chooseButton, list, skills);
                                        event.player.wait();
                                        game.pause();
                                    } else {
                                        switchToAuto();
                                    }
                                }
                                ('step 1');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var i of map.skills) {
                                        //QQQ
                                        player.addTempSkill(i, 'phaseUseEnd');
                                        player.addTempSkill('new_pingjian_temp', 'phaseUseEnd');
                                        player.storage.new_pingjian_temp = i;
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        new_pingjian_temp: {
                            trigger: {
                                player: ['useSkillBegin', 'useCard1'],
                            },
                            silent: true,
                            firstDo: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                var info = lib.skill[event.skill];
                                if (!info) return false;
                                if (event.skill == player.storage.new_pingjian_temp) return true;
                                if (info.sourceSkill == player.storage.new_pingjian_temp || info.group == player.storage.new_pingjian_temp) return true;
                                if (Array.isArray(info.group) && info.group.includes(player.storage.new_pingjian_temp)) return true;
                                return false;
                            },
                            content() {
                                player.removeSkill(player.storage.new_pingjian_temp);
                                player.removeSkill('new_pingjian_temp');
                            },
                            forced: true,
                            popup: false,
                        },
                        new_xinguiyin2: {
                            mod: {
                                maxHandcard(player, num) {
                                    return Infinity;
                                },
                                targetInRange(card, player, target) {
                                    return true;
                                },
                                cardUsable(card) {
                                    if (get.info(card) && get.info(card).forceUsable) return;
                                    return Infinity;
                                },
                            },
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            trigger: {
                                player: ['dieBefore', 'dying'],
                            },
                            content() {
                                trigger.untrigger();
                                trigger.finish();
                            },
                        },
                        new_qixing: {
                            mod: {
                                canBeDiscarded(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                                canBeGaincarded(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            audio: 'ext:阴间集结/audio:2',
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            check(event, player) {
                                return player.hp <= 1;
                            },
                            filter(event, player) {
                                return !player.storage.new_qixing;
                            },
                            content() {
                                'step 0';
                                player.storage.new_qixing = game.cardsGotoSpecial(get.cards(7)).cards;
                                player.markSkill('new_qixing');
                                game.addVideo('storage', player, ['new_qixing', get.cardsInfo(player.storage.new_qixing), 'cards']);
                                ('step 1');
                                player.chooseButton([1, Infinity], ['选择任意张手牌与星交换', '你的手牌', player.getCards('h'), '星', player.storage.new_qixing]);
                                ('step 2');
                                if (result.bool) {
                                    var card = result.links,
                                        c1 = [],
                                        c2 = [];
                                    for (var i = 0; i < card.length; i++) {
                                        var owner = get.owner(card[i]);
                                        if (owner == player) c1.push(card[i]);
                                        else c2.push(card[i]);
                                    }
                                    for (var i = c1.length; i > c2.length; i--) {
                                        c1.remove(c1[i - 1]);
                                    }
                                    for (var i = c2.length; i > c1.length; i--) {
                                        c2.remove(c2[i - 1]);
                                    }
                                    player.lose(c1, ui.special, 'toStorage');
                                    player.storage.new_qixing = player.storage.new_qixing.concat(c1);
                                    player.gain(c2, 'fromStorage');
                                    player.storage.new_qixing.remove(c2);
                                    if (player == game.me && _status.auto) {
                                    }
                                }
                            },
                            mark: true,
                            intro: {
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                                mark(dialog, content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            dialog.addAuto(content);
                                        } else {
                                            return '共有' + get.cnNumber(content.length) + '张星';
                                        }
                                    }
                                },
                                content(content, player) {
                                    if (content && content.length) {
                                        if (player == game.me || player.isUnderControl()) {
                                            return get.translation(content);
                                        }
                                        return '共有' + get.cnNumber(content.length) + '张星';
                                    }
                                },
                            },
                            group: ['new_qixing_2'],
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'phaseDrawAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return player.storage.new_qixing && player.storage.new_qixing.length;
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseButton([1, Infinity], ['选择任意张手牌与星交换', '你的手牌', player.getCards('h'), '星', player.storage.new_qixing]);
                                        ('step 1');
                                        if (result.bool) {
                                            var card = result.links,
                                                c1 = [],
                                                c2 = [];
                                            for (var i = 0; i < card.length; i++) {
                                                var owner = get.owner(card[i]);
                                                if (owner == player) c1.push(card[i]);
                                                else c2.push(card[i]);
                                            }
                                            for (var i = c1.length; i > c2.length; i--) {
                                                c1.remove(c1[i - 1]);
                                            }
                                            for (var i = c2.length; i > c1.length; i--) {
                                                c2.remove(c2[i - 1]);
                                            }
                                            player.lose(c1, ui.special, 'toStorage');
                                            player.storage.new_qixing = player.storage.new_qixing.concat(c1);
                                            player.gain(c2, 'fromStorage');
                                            player.storage.new_qixing.remove(c2);
                                            if (player == game.me && _status.auto) {
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        new_dawu: {
                            audio: 'ext:阴间集结/audio:2',
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player) {
                                        if (['trick', 'basic', 'delay'].includes(get.type(card))) return false;
                                    }
                                },
                            },
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            priority: 1,
                            charlotte: true,
                            fixed: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.new_qixing && player.storage.new_qixing.length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择角色获得大雾标记', [1, Math.min(game.countPlayer(), player.storage.new_qixing.length)]).ai = function (target) {
                                    if (target.isMin()) return 0;
                                    if (target.hasSkill('biantian2')) return 0;
                                    var att = get.attitude(player, target);
                                    if (att >= 4) {
                                        if (target.hp == 1 && target.maxHp > 2) return att;
                                        if (target.hp == 2 && target.maxHp > 3 && target.countCards('he') == 0) return att * 0.7;
                                        return 0;
                                    }
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('new_dawu_2');
                                    }
                                    player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.storage.new_qixing, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                for (var i = 0; i < result.links.length; i++) {
                                    player.storage.new_qixing.push(result.links[i]);
                                }
                                if (player.storage.new_qixing.length == 0) {
                                    player.unmarkSkill('new_qixing');
                                }
                                player.$throw(result.links, 1000);
                                game.addVideo('storage', player, ['new_qixing', get.cardsInfo(player.storage.new_qixing), 'cards']);
                                game.cardsDiscard(result.links);
                                game.log(player, '将', result.links, '置入了弃牌堆');
                            },
                            group: 'new_dawu_3',
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: ['damageBegin4', 'loseHpBegin', 'dieBefore'],
                                    },
                                    mark: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        trigger.cancel();
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('new_dawu');
                                        });
                                        for (var i = 0; i < list.length; i++) {
                                            if (trigger.num) {
                                                for (var j = 0; j < trigger.num; j++) {
                                                    var card = game.cardsGotoSpecial(get.cards()).cards[0];
                                                    list[i].$draw(card);
                                                    list[i].storage.new_qixing.remove(card);
                                                    list[i].markSkill('new_qixing');
                                                }
                                            } else {
                                                var card = game.cardsGotoSpecial(get.cards()).cards[0];
                                                list[i].$draw(card);
                                                list[i].storage.new_qixing.remove(card);
                                                list[i].markSkill('new_qixing');
                                            }
                                        }
                                    },
                                    ai: {
                                        nofire: true,
                                        nodamage: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return [0, 0];
                                            },
                                        },
                                    },
                                    intro: {
                                        content: '已获得大雾标记',
                                    },
                                },
                                3: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'dieBegin'],
                                    },
                                    silent: true,
                                    content() {
                                        for (var i = 0; i < game.players.length; i++) {
                                            game.players[i].removeSkill(['new_dawu_2', 'new_kuangfeng_2']);
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        new_kuangfeng: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return player.storage.new_qixing && player.storage.new_qixing.length;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('选择角色获得狂风标记', [1, Math.min(game.countPlayer(), player.storage.new_qixing.length)]).ai = function (target) {
                                    return -1;
                                };
                                ('step 1');
                                if (result.bool) {
                                    var length = result.targets.length;
                                    for (var i = 0; i < length; i++) {
                                        result.targets[i].addSkill('new_kuangfeng_2');
                                    }
                                    player.chooseCardButton('弃置' + get.cnNumber(length) + '枚星', length, player.storage.new_qixing, true);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                for (var i = 0; i < result.links.length; i++) {
                                    player.storage.new_qixing.push(result.links[i]);
                                }
                                if (player.storage.new_qixing.length == 0) {
                                    player.unmarkSkill('new_qixing');
                                }
                                player.$throw(result.links, 1000);
                                game.addVideo('storage', player, ['new_qixing', get.cardsInfo(player.storage.new_qixing), 'cards']);
                                game.cardsDiscard(result.links);
                                game.log(player, '将', result.links, '置入了弃牌堆');
                            },
                            subSkill: {
                                2: {
                                    trigger: {
                                        player: 'damageBegin3',
                                    },
                                    mark: true,
                                    intro: {
                                        content: '已获得狂风标记',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        trigger.num += 3;
                                        var list = game.filterPlayer(function (current) {
                                            return current.hasSkill('new_kuangfeng');
                                        });
                                        for (var i = 0; i < list.length; i++) {
                                            var card = game.cardsGotoSpecial(get.cards()).cards[0];
                                            list[i].$draw(card);
                                            list[i].storage.new_qixing.remove(card);
                                            list[i].markSkill('new_qixing');
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'Damage')) return 1.5;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        new_xguixin: {
                            audio: 'ext:阴间集结/audio:3',
                            group: 'new_xguixin2',
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            fixed: true,
                            charlotte: true,
                            check(event, player) {
                                if (player.event.num > 1) return true;
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            async content(event, trigger, player) {
                                //QQQ
                                var num = trigger.num;
                                while (num-- > 0) {
                                    player.line(game.filterPlayer(), 'green');
                                    const { result } = await player
                                        .chooseControl('手牌区', '装备区', '判定区')
                                        .set('ai', function () {
                                            if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                            return Math.floor(Math.random() * 3);
                                        })
                                        .set('prompt', '请选择优先获得的区域');
                                    for (var i of game.filterPlayer()) {
                                        if (i.countCards('hej')) {
                                            if (i.countCards(result.control)) {
                                                player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                            }
                                            else {
                                                player.gain(i.getCards('hej').randomGet(), 'gain2');
                                            }
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        new_xguixin2: {
                            audio: 'ext:阴间集结/audio:3',
                            enable: 'phaseUse',
                            usable: 1, //QQQ
                            fixed: true,
                            charlotte: true,
                            check(event, player) {
                                if (player.event.num > 1) return true;
                                var num = game.countPlayer(function (current) {
                                    if (current.countCards('he') && current != player && get.attitude(player, current) <= 0) {
                                        return true;
                                    }
                                    if (current.countCards('j') && current != player && get.attitude(player, current) > 0) {
                                        return true;
                                    }
                                });
                                return num >= 2;
                            },
                            async content(event, trigger, player) {
                                player.line(game.filterPlayer(), 'green');
                                const { result } = await player
                                    .chooseControl('手牌区', '装备区', '判定区')
                                    .set('ai', function () {
                                        if (game.hasPlayer((current) => current.countCards('j') && current != player && get.attitude(player, current))) return 2;
                                        return Math.floor(Math.random() * 3);
                                    })
                                    .set('prompt', '请选择优先获得的区域');
                                for (var i of game.filterPlayer()) {
                                    if (i.countCards('hej')) {
                                        if (i.countCards(result.control)) {
                                            player.gain(i.getCards(result.control).randomGet(), 'gain2');
                                        }
                                        else {
                                            player.gain(i.getCards('hej').randomGet(), 'gain2');
                                        }
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                threaten(player, target) {
                                    if (target.hp == 1) return 2.5;
                                    return 1;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (!target.hasFriend()) return;
                                            if (target.hp >= 4) return [0.5, get.tag(card, 'damage') * 2];
                                            if (target.hp > 1) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 3) return [0.5, get.tag(card, 'damage') * 1.5];
                                            if (target.hp == 2) return [1, get.tag(card, 'damage') * 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        new_xfeiying: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return distance + 2;
                                },
                                globalFrom(from, to, distance) {
                                    return distance - 4;
                                },
                                targetInRange(card) {
                                    return true;
                                },
                                cardUsableTarget(card, player, target) {
                                    return true;
                                },
                                targetEnabled(card, player, target) {
                                    if (get.type(card) == 'delay') {
                                        return false;
                                    }
                                },
                                canBeDiscarded(card, player, target) {
                                    if (player == target) return false;
                                },
                            },
                            trigger: {
                                player: 'loseBefore',
                                global: 'gainBefore',
                            },
                            priority: null,
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player, name) {
                                if (name == 'gainBefore') {
                                    if (event.player == player) return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                } else {
                                    if (event.type != 'discard') return false;
                                    if (!event.cards) return false;
                                    if (player.get('h').length == 0) return false;
                                    for (var i of player.get('h')) {
                                        if (event.cards.includes(i)) return true;
                                    }
                                    return false;
                                }
                            },
                            content() {
                                trigger.cards.remove(player.get('he'));
                            },
                        },
                        xinspwuku: {
                            mod: {
                                cardUsable(card) {
                                    return Infinity;
                                },
                                targetInRange() {
                                    return true;
                                },
                            },
                            trigger: {
                                global: 'phaseJieshuBegin',
                            },
                            audio: 'ext:阴间集结/audio:2',
                            filter(event, player) {
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.cards2) num += evt.cards2.length;
                                });
                                return num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 0;
                                player.getHistory('lose', function (evt) {
                                    if (evt.cards2) num += evt.cards2.length;
                                });
                                if (num > 0) {
                                    player.draw(num);
                                }
                            },
                        },
                        xinspmiewu: {
                            audio: 'spmiewu',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (!player.countCards('hes')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && lib.filter.filterCard({ name: i }, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            if (event.filterCard && event.filterCard({ name: name }, player, event)) list.push(['基本', '', 'sha']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'fire' }, player, event)) list.push(['基本', '', 'sha', 'fire']);
                                            if (event.filterCard && event.filterCard({ name: name, nature: 'thunder' }, player, event)) list.push(['基本', '', 'sha', 'thunder']);
                                            if ((get.mode() != 'guozhan' || _status.mode == 'yingbian') && event.filterCard({ name: name, nature: 'ice' }, player, event)) list.push(['基本', '', 'sha', 'ice']);
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('破竹', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', button.link[2]) > 0) return 0;
                                    if (['wugu', 'zhulu_card'].includes(button.link[2])) return 0;
                                    var effect = player.getUseValue(button.link[2]);
                                    if (effect > 0) return effect;
                                    return 0;
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
                                        filterCard: true,
                                        audio: 'spmiewu',
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.addTempSkill('xinspmiewu2');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                            },
                            ai: {
                                fireAttack: true,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (!player.countCards('hes')) return false;
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
                        xinspmiewu2: {
                            trigger: { player: ['useCardAfter', 'respondAfter'] },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player) {
                                return event.skill == 'xinspmiewu_backup';
                            },
                            content() {
                                player.draw();
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        xinspmiewu_backup: { audio: 'spmiewu' },
                        xin_miaoxian: {
                            audio: 'ext:阴间集结/audio:2',
                            hiddenCard(player, name) {
                                return get.type(name) == 'trick' && player.countCards('h') > 0;
                            },
                            enable: 'chooseToUse',
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                for (var i of lib.inpile) {
                                    if (
                                        get.type(i) == 'trick' &&
                                        event.filterCard(
                                            {
                                                name: i,
                                            },
                                            player,
                                            event
                                        )
                                    )
                                        return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        if (
                                            get.type(i) == 'trick' &&
                                            event.filterCard(
                                                {
                                                    name: i,
                                                },
                                                player,
                                                event
                                            )
                                        ) {
                                            list.push(['锦囊', '', i]);
                                        }
                                    }
                                    return ui.create.dialog('妙弦', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    return player.getUseValue({ name: button.link[2] }) + 1;
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'miaoxian',
                                        popname: true,
                                        filterCard(card) {
                                            var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                                            if (mod2 === false) return false;
                                            return true;
                                        },
                                        check(card) {
                                            var val = -get.value(card);
                                            if (get.color(card) == 'red') val += 3;
                                            return val;
                                        },
                                        position: 'h',
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        onuse(links, player) {
                                            if (get.color(links.card) == 'red') player.draw(3);
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张手牌当做【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                        },
                        xin_xingzuo: {
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            content() {
                                'step 0';
                                player.addTempSkill('xin_xingzuo2');
                                player.chooseCard('兴作:将0~7张牌置于牌堆底(先选择的在上)', [0, 7], 'hes').set('ai', function (button) {
                                    return 0;
                                });
                                ('step 1');
                                var cards = get.bottomCards(7);
                                game.cardsGotoOrdering(cards);
                                if (!result.cards) {
                                    var dialog = ['请选择要获得的0~7张牌', cards];
                                    player.chooseButton(dialog, [0, 7]).set('ai', function () {
                                        return 1;
                                    });
                                } else if (result.cards) {
                                    event.forceDie = true;
                                    event.cards = result.cards;
                                    player.storage.xin_xingzuo2 = result.cards;
                                    var dialog = ['请选择要获得的0~7张牌', cards];
                                    player.chooseButton(dialog, [0, 7]).set('ai', function () {
                                        return 1;
                                    });
                                }
                                ('step 2');
                                if (result.links) {
                                    var x = result.links;
                                    player.lose(event.cards, ui.cardPile);
                                    for (var i of x) player.gain(i, 'draw', 'gain2');
                                }
                                for (var i of event.cards) {
                                    if (!'hejsd'.includes(get.position(i, true))) {
                                        i.fix();
                                        ui.cardPile.appendChild(i);
                                    }
                                }
                                game.updateRoundNumber();
                            },
                        },
                        xin_xingzuo2: {
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            filter(event, player) {
                                return game.hasPlayer(function (target) {
                                    return target.countCards('h') >= 0;
                                });
                            },
                            init: (player) => (player.storage.xin_xingzuo2 = []), //QQQ
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('兴作:令一名角色将其手牌与牌堆底的0~7张牌替换', (card, player, target) => target.countCards('h'))
                                    .set('ai', function (target) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, target),
                                            hs = target.getCards('h'),
                                            num = hs.length;
                                        var getv = function (list, target) {
                                            var num = 0;
                                            for (var i of list) num += get.value(i, target);
                                            return num;
                                        },
                                            val = getv(hs, target) - getv(player.storage.xin_xingzuo2, target);
                                        if (num < 3) return att * Math.sqrt(Math.max(0, -val)) * 1.5;
                                        if (num == 3) return -att * Math.sqrt(Math.max(0, val));
                                        if (player.hp < (num > 4 ? 3 : 2)) return 0;
                                        return -att * Math.sqrt(Math.max(0, val));
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    var cards = get.bottomCards(7);
                                    game.cardsGotoOrdering(cards);
                                    var dialog = ['兴作:请选择要令' + get.translation(event.target) + '用所有手牌替换的0~7张牌', cards];
                                    player.chooseButton(dialog, [0, 7]).set('ai', function (button) {
                                        var player = _status.event.player,
                                            att = get.attitude(player, event.target);
                                        if (att > 0) return 2 * get.value(button.link);
                                        return 0;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                    var cards = result.links;
                                    var target = event.target;
                                    if (cards.length) game.cardsGotoOrdering(cards);
                                    var hs = target.getCards('h');
                                    target.lose(hs, ui.cardPile);
                                    if (cards.length) target.gain(cards, 'draw');
                                    if (hs.length > 2) {
                                        player.gainMaxHp();
                                        player.recover();
                                    }
                                } else event.finish();
                                ('step 3');
                                game.updateRoundNumber();
                            },
                        },
                        xin_xinshanjia: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) {
                                        return num / player.hp;
                                    }
                                },
                            },
                            group: ['xin_xinshanjia_count', 'xin_xinshanjia_noshan'],
                            subSkill: {
                                count: {
                                    forced: true,
                                    charlotte: true,
                                    fixed: true,
                                    silent: true,
                                    popup: false,
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    filter(event, player) {
                                        return event.cards2 && event.cards2.length;
                                    },
                                    content() {
                                        lib.skill.xin_xinshanjia.sync(player);
                                    },
                                },
                                //出牌阶段开始时,你可以摸3+X张牌增加3+X点体力上限并回复3+X点体力,
                                //你可以视为使用一张不计入杀的无视防具无视距离且不可闪避的【杀】.(X为你于本局游戏内失去的装备牌数)
                                noshan: {
                                    silent: true,
                                    firstDo: true,
                                    trigger: {
                                        player: ['useCard0', 'useCardAfter'],
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.xin_xinshanjianoshan;
                                    },
                                    init: (player) => (player.shanjia = {}),
                                    async content(event, trigger, player) {
                                        if (event.triggername == 'useCardAfter') {
                                            await Object.assign(lib.skill, player.shanjia);
                                            player.shanjia = {};
                                        } else {
                                            trigger.directHit.addArray(game.players);
                                            const skill = game.players
                                                .map((q) => game.expandSkills(q.getSkills()))
                                                .flat()
                                                .unique();
                                            for (const i of skill) {
                                                const info = lib.skill[i];
                                                if (info && info.content) {
                                                    const string = info.content.toString();
                                                    if (i == 'xin_xinshanjia_noshan') continue;
                                                    if (['excluded', 'trigger.cancel', 'trigger.targets'].some((q) => string.includes(q))) {
                                                        player.shanjia[i] = info;
                                                        lib.skill[i] = {};
                                                    }
                                                }
                                            }
                                        }
                                    },//QQQ
                                },
                            },
                            audio: 'ext:阴间集结/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                            },
                            intro: {
                                content: '本局游戏内已失去过#张装备牌',
                            },
                            forced: true,
                            charlotte: true,
                            fixed: true,
                            sync(player) {
                                var history = player.actionHistory;
                                var num = 0;
                                for (var i = 0; i < history.length; i++) {
                                    for (var j = 0; j < history[i].lose.length; j++) {
                                        num += history[i].lose[j].cards2.filter(function (card) {
                                            return get.type(card, false) == 'equip';
                                        }).length;
                                    }
                                }
                                player.storage.xin_xinshanjia = num;
                                if (num > 0) player.markSkill('xin_xinshanjia');
                            },
                            content() {
                                'step 0';
                                lib.skill.xin_xinshanjia.sync(player);
                                var num = 0;
                                if (typeof player.storage.xin_xinshanjia == 'number') num += player.storage.xin_xinshanjia;
                                player.draw(3 + num);
                                player.gainMaxHp(3 + num);
                                player.recover(3 + num);
                                ('step 1');
                                var card = { name: 'sha' };
                                if (get.is.object(card)) card.isCard = true;
                                if (!lib.filter.cardEnabled(card, player) || !lib.filter.cardUsable(card, player)) {
                                    event.finish();
                                    return;
                                }
                                event.card = card;
                                var info = get.info(card);
                                var range;
                                if (!info.notarget) {
                                    var select = get.copy(info.selectTarget);
                                    if (select == undefined) {
                                        range = [1, 1];
                                    } else if (typeof select == 'number') range = [select, select];
                                    else if (get.itemtype(select) == 'select') range = select;
                                    else if (typeof select == 'function') range = select(card, player);
                                    game.checkMod(card, player, range, 'selectTarget', player);
                                }
                                if (info.notarget || range[1] == -1) {
                                } else {
                                    var next = player.chooseTarget();
                                    next.set('_get_card', card);
                                    next.set('filterTarget', function (card, player, target) {
                                        return lib.filter.targetEnabledx(card, player, target);
                                    });
                                    next.set('ai', get.effect_use);
                                    next.set('selectTarget', range || lib.filter.selectTarget);
                                    next.set('prompt', '是否视为使用一张不计次数无视防具无视距离且无法响应的【杀】？');
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.useCard(event.card, result.targets).card.xin_xinshanjianoshan = true;
                                }
                            },
                            ai: {
                                threaten: 3,
                                reverseOrder: true,
                                directHit: true,
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (!arg || !arg.card || arg.card.xin_xinshanjianoshan != true) return false;
                                },
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        },
                    },
                    dynamicTranslate: {
                        xin_youlong(player) {
                            if (player.storage.xin_youlong) return '转换技,阴,每轮限一次,你可以废除你的一个装备栏,视为使用一张未以此法使用过的普通锦囊牌;<span class="bluetext">阳,每轮限一次,你可以废除你的一个装备栏,视为使用一张未以此法使用过的基本牌.</span>';
                            return '转换技,<span class="bluetext">阴,每轮限一次,你可以废除你的一个装备栏,视为使用一张未以此法使用过的普通锦囊牌;</span>阳,每轮限一次,你可以废除你的一个装备栏,视为使用一张未以此法使用过的基本牌.';
                        },
                    },
                    translate: {
                        new_zunwei_backup: '尊位',
                        Q_fanghun_sha: '龙胆',
                        xinregushe3: '鼓舌',
                        xindushi2: '毒逝',
                        xinnhyanzheng2: '言政',
                        shen_shentong_backup: '神通',
                        xinshen_guojia: '神郭嘉',
                        xinshen_xunyu: '神荀彧',
                        xinfanyufeng: '樊玉凤',
                        new_yangbiao: '杨彪',
                        new_relingtong: '界凌统',
                        new_xinshenzhaoyun: '神赵云',
                        new_shenzhugeliang: '神诸葛亮',
                        new_shencaocao: '神曹操',
                        new_xinxushao: '许劭',
                        yin_xinguozhao: '郭照',
                        re_xinliuzan: '留赞',
                        yin_xinyuantanyuanshang: '袁谭袁尚',
                        new_zhangrang: '张让',
                        new_spxiahoushi: '星夏侯氏',
                        new_xinwolongfengchu: '卧龙凤雏',
                        new_xsimahui: '司马徽',
                        new_sguansuo: '关索',
                        new_xshencaopi: '神曹丕',
                        xinpuyuan: '蒲元',
                        xinzhaoxiang: '赵襄',
                        xinwanglang: '王朗',
                        xinnanhualaoxian: '南华老仙',
                        xinluotong: '骆统',
                        xinliubian: '刘辩',
                        xinshen_lvbu: '神吕布',
                        xincaoying: '曹婴',
                        xinxurong: '徐荣',
                        xinshen_ganning: '神甘宁',
                        xinjsp_pangtong: '星庞统',
                        xinxin_baosanniang: '鲍三娘',
                        xinmajun: '马钧',
                        xinjiakui: '贾逵',
                        xinzhangqiying: '张琪瑛',
                        xinchengyu: '程昱',
                        xinhuaman: '花鬘',
                        xinpanshu: '潘淑',
                        xinzhangchangpu: '张昌蒲',
                        xinxinre_zhuran: '界朱然',
                        xinhuangfusong: '皇甫嵩',
                        xinshen_guanyu: '神关羽',
                        xinyanghuiyu: '羊徽瑜',
                        xinxincaochun: '曹纯',
                        xinruanyu: '阮瑀',
                        xinsp_duyu: '杜预',
                        xinhuangchengyan: '黄承彦',
                        xinyangwan: '杨婉',
                        xinsunhao: '孙皓',
                        xinzhouyi: '周夷',
                        new_rangjie: '让节',
                        new_rangjie_info: '出牌阶段限或当你受到1点伤害后,你可摸一张牌并选择一项:1.从牌堆中获得5张由你指定牌名的牌.2.移动场上5张牌',
                        n_rangjie: '让节',
                        n_rangjie_info: '',
                        new_yizheng: '义争',
                        new_yizheng_info: '出牌阶段,你可以与一名角色拼点,若你赢其跳过下个摸牌和出牌阶段.若你没赢,其减少1点体力上限',
                        new_zhaohan: '昭汉',
                        new_zhaohan_info: '你的准备阶段开始时,你增加一点体力上限并回复一点体力,你可选择一名角色,其每个回合开始时,减少一点体力上限',
                        new_xuanfeng: '旋风',
                        new_xuanfeng_info: '你的回合开始时,你可以从牌堆中获得两张装备牌;当你于弃牌阶段弃置过至少两张牌/失去装备区里的牌后/于回合内失去一张装备牌和锦囊牌后,你可以弃置至多两名其他角色的共计两张牌.若此时是你的回合内,你可以对其中一名角色选择对其造成1-2点伤害',
                        new_xuanfeng2: '旋风',
                        new_xuanfeng2_info: '',
                        new_yizheng2: '争',
                        new_yizheng2_info: '',
                        new_xuanfeng3: '旋风',
                        new_xuanfeng3_info: '',
                        new_relonghun: '龙魂',
                        new_relonghun_info: '你可以将同花色的一至两张手牌按下列规则使用或打出:♥️️当【桃】,♦️️当火【杀】,♣️️当【闪】,♠️️当普【无懈可击】.若你以此法使用了两张红色牌,则此牌回复值或伤害值随机+1至3.若你以此法使用了一张黑色牌,则你获得当前回合角色一至二张牌',
                        new_xinjuejing: '绝境',
                        new_xinjuejing_info: '锁定技,当你进入/脱离濒死状态时/回合开始/结束阶段开始时你摸三张牌并将体力回复至上限;当你失去一张牌时,摸一张牌',
                        new_yongjin: '勇进',
                        new_yongjin_info: '出牌阶段,你可以依次移动场上的至多三张装备牌,你使用【杀】的次数+1且无距离限制',
                        new_qixing: '七星',
                        new_qixing_info: '游戏开始时,你将牌堆顶的四十九张牌置于你的武将牌上,称之为<星>./摸牌阶段结束后,你可用任意数量的手牌等量交换这些<星>',
                        new_dawu: '大雾',
                        new_dawu_info: '游戏开始后,你不能成为任何基本牌锦囊牌的目标.结束阶段,你可以弃置X张<星>并指定等量的角色:直到你的下回合开始,当这些角色受到伤害/失去体力/死亡时,防止之,你重新获得等量张<星>',
                        new_kuangfeng: '狂风',
                        new_kuangfeng_info: '结束阶段,你可以弃置X张<星>并指定等量角色:直到你的下回合开始,这些角色受到伤害时,此伤害+3,你重新获得一张<星>',
                        new_xguixin: '归心',
                        new_xguixin_info: '在出牌阶段或当你受到1点伤害后,你可以获得所有其他角色区域内的一张牌你增加一点体力上限并回复一点体力',
                        new_xguixin2: '归心',
                        new_xguixin2_info: '你可以获得所有其他角色区域内的一张牌',
                        new_xfeiying: '飞影',
                        new_xfeiying_info: '锁定技,其他角色计算与你的距离时+2,你与其他角色计算距离时为无限,你的手牌不能被弃置和获得并且你不能成为延时锦囊的目标,你的手牌使用无次数和距离限制',
                        new_pingjian: '评荐',
                        new_pingjian_info: '准备阶段时/结束阶段开始时/当你受到伤害后/体力流失后/限一次,出牌阶段,你可以令系统随机从剩余武将牌堆中检索出十二张拥有发动时机为结束阶段开始时/当你受到伤害后/体力流失后/出牌阶段的技能的武将牌.你可以选择尝试发动其中一个技能,每个技能每回合只能选择一次.当你所有技能用完则重置再次使用',
                        new_pingjian_use: '评荐',
                        new_xinguiyin: '避世',
                        new_xinguiyin_info: '锁定技,你的角色不能被减少体力上限和翻面和移除和进入死亡状态',
                        new_xinguiyin2: '避世',
                        new_xinguiyin2_info: '锁定技,你的角色不能被减少体力上限和翻面和移除和进入死亡状态',
                        new_pianchong: '偏宠',
                        new_pianchong2: '偏宠',
                        new_pianchong_info: '摸牌阶段开始时,你可放弃摸牌.若如此做,你从牌堆中获得一张红色牌和一张黑色牌.你选择一种颜色.你的下回合开始前,当你失去该颜色的一张牌后,你从牌堆中获得另一种颜色的一张牌,失去一张牌时,也从牌堆摸一张牌',
                        new_zunwei: '尊位',
                        new_zunwei_backup: '尊位',
                        new_zunwei_info: '出牌阶段限你可选择本一项:1.选择一名角色移除其所有手牌.2.选择一名角色使其失去所有体力.3.选择一名角色移除其所有技能.4.选择一名角色让其体力值回复至上限.5.选择一名角色让其手牌补到5张',
                        new_xinrefenyin: '奋音',
                        new_xinrefenyin_info: '锁定技,每个角色的回合内,当一张牌进入弃牌堆后,若本回合内没有过与此牌花色相同的卡牌进入过弃牌堆,或你使用一张与你上一张花色不同的牌,你摸一张牌并且增加一点体力上限回复一点体力',
                        new_xinliji: '力激',
                        new_xinliji_info: '出牌阶段限X次,你可以弃置一张牌并对一名其他角色造成1点伤害.x为你的回合内进入弃牌堆的牌数的2倍',
                        new_neifa: '内伐',
                        new_neifa_info: '内伐:出牌阶段开始时,你可以摸5张牌或获得场上的五张牌(可以是装备牌判定牌手牌),弃置一张牌.若弃置的牌是基本牌,本回合你【杀】的使用次数+5且目标+5且无视防具且无距离限制;若弃置的牌不是基本牌,本回合使用的普通锦囊牌的目标+5或-1使用牌无距离限制,本回合前五次使用牌时摸5张牌',
                        new_neifa_draw: '内伐',
                        new_xtaoluan: '滔乱',
                        new_xtaoluan4: '滔乱',
                        new_xtaoluan5: '滔乱',
                        new_xtaoluan_backup: '滔乱',
                        new_xtaoluan_info: '你可以将一张牌当做任意一张基本牌或普通锦囊牌使用(此牌可以是本局游戏你以此法使用过的牌),你令一名其他角色选择一项:1.交给你一张与你以此法使用的牌类别相同的牌你增加一点体力上限并回复一点体力;2.其失去1点体力上限你增加一点体力上限并回复一点体力',
                        xin_yanyu: '燕语',
                        xin_yanyu_info: '一名角色的出牌阶段开始时,你可以弃置一张牌.若如此做,则该出牌阶段内,当有与你弃置的牌类别相同的其他牌进入弃牌堆时,你可令任意一名角色获得此牌',
                        xin_yanyu2: '燕语',
                        xin_yanyu2_info: '',
                        xin_qiaoshi: '樵拾',
                        xin_qiaoshi_info: '其他角色受伤后,你增加三体力上限并回复三点体力你可以声明该角色武将牌上的一个不为主公技或觉醒技的技能,获得其技能',
                        xin_youlong: '游龙',
                        xin_youlong_info: '转换技,阴,视为使用一张普通锦囊牌;阳,视为使用一张基本牌',
                        xin_luanfeng: '鸾凤',
                        xin_luanfeng_info: '一名角色进入濒死状态时,你可令其回复至5点体力,其手牌补至10张',
                        xin_jianjie: '荐杰',
                        xin_jianjie_info: '你的第一个准备阶段,你令两名其他角色分别获得龙印与凤印;出牌阶段限一次(你的第一个回合除外),或当拥有龙印、凤印的角色死亡时,你可以转移龙印、凤印',
                        xin_jianjie1: '荐杰',
                        xin_jianjie1_info: '',
                        xin_smh_huoji: '火计',
                        xin_smh_huoji_info: '',
                        xin_smh_lianhuan: '连环',
                        xin_smh_lianhuan_info: '',
                        xin_jianjie2: '荐杰',
                        xin_jianjie2_info: '',
                        xin_smh_lianhuan1: '连铸',
                        xin_smh_lianhuan1_info: '',
                        xin_smh_yeyan: '业炎',
                        xin_smh_yeyan_info: '',
                        xin_yinshi: '隐士',
                        xin_yinshi_info: '锁定技,当你受到伤害时,防止此伤害',
                        xin_mingshi: '名士',
                        xin_mingshi_info: '锁定技,你的手牌不能被弃置和获得',
                        xin_chenghao: '称好',
                        xin_chenghao_info: '当一名角色受到属性伤害后,若其存活且其武将牌横置且是伤害传导的起点,则你可以观看牌堆顶的X+10张牌并分配给任意角色.(X为横置的角色数量且包含该角色)',
                        Q_jianjie: '关于龙凤印',
                        Q_jianjie_info: '龙印效果:视为拥有〖火计〗.凤印效果:视为拥有〖连环〗. 龙凤印齐全:视为拥有〖业炎〗,〖业炎〗发动后移除龙凤印',
                        new_zhengnan: '征南',
                        new_zhengnan_info: '当一名除你以外的其他角色回复体力时,或当一名角色进入濒死时若你未因其发动过〖征南〗,则你增加一点体力上限并回复体力到上限并摸3张牌并获得下列技能中的任意一个:〖武圣〗、 〖当先〗和〖制蛮〗和〖咆哮〗(若技能全部拥有则改为摸3张牌.你以此法获得的〖当先〗结算时视为已发动过〖伏枥〗)',
                        new_xiefang: '撷芳',
                        new_xiefang_info: '锁定技,其他角色都在你攻击范围内,你不在其他角色的攻击范围内',
                        new_olpaoxiao: '咆哮',
                        new_olpaoxiao2: '咆哮',
                        new_olpaoxiao_info: '①锁定技,你使用【杀】无次数限制.②锁定技,当你使用的【杀】被【闪】抵消时,你获得一枚<咆>(→)当你因【杀】造成伤害时,你弃置所有<咆>并令伤害值+X(X为<咆>数).回合结束后,你弃置所有<咆>',
                        new_rezhiman: '制蛮',
                        new_rezhiman_info: '当你对一名其他角色造成伤害时,你可以防止此伤害,获得其区域内的一张牌',
                        new_xinrewusheng: '武圣',
                        new_xinrewusheng_info: '你可以将一张红色牌当做【杀】使用或打出.你使用的♦️️杀没有距离限制',
                        new_xindangxian: '当先',
                        new_xindangxian_info: '锁定技,准备阶段,你执行一个额外的出牌阶段.此阶段开始时,你失去1点体力并从牌堆/弃牌堆中获得一张【杀】(若你已发动过〖伏枥〗,则可以不发动此效果)',
                        xin_chuyuan: '储元',
                        xin_chuyuan_info: '一名角色受到伤害后,若你武将牌上「储」的数量小于体力上限,你可以令其摸一张牌.其将一张手牌置于你的武将牌上,称为「储」',
                        xin_dengji: '登极',
                        xin_dengji_info: '觉醒技,准备阶段,若你武将牌上的「储」数不小于3,则你你增加5点体力上限并获得所有「储」,获得技能〖天行〗和〖奸雄〗/〖仁德〗/〖制衡〗/〖乱击〗/〖行动〗',
                        xin_tianxing: '天行',
                        xin_tianxing_info: '觉醒技,准备阶段,若你武将牌上的「储」数不小于3,则你增加5点体力上限并获得所有「储」,失去技能〖储元〗,获得以下技能:〖行殇〗/〖完杀〗/〖连破〗/〖鬼才〗/〖放逐〗/〖集智〗 ',
                        shen_lianpo: '连破',
                        shen_lianpo_info: '一名角色的回合结束时,若你本回合内击杀过角色,则你可以进行一个额外的回合.',
                        shen_rejizhi: '集智',
                        shen_rejizhi_info: '当你使用锦囊牌时,你可以摸一张牌.若此牌为基本牌,则你可以弃置之,令本回合手牌上限+1.',
                        shen_reguicai: '鬼才',
                        shen_rreguicai_info: '在任意角色的判定牌生效前,你可以打出一张牌代替之',
                        shen_refangzhu: '放逐',
                        shen_refangzhu_info: '当你受到伤害后,你可以令一名其他角色选择一项:摸X张牌并将武将牌翻面,或弃置X张牌并失去1点体力.(X为你已损失的体力值)',
                        shen_wansha: '完杀',
                        shen_wansha_info: '锁定技,你的回合内,除你以外,不处于濒死状态的角色不能使用【桃】和【酒】',
                        shen_xingshang: '行殇',
                        shen_xingshang_info: '当有角色死亡后,你可以获得该角色的所有牌',
                        xin_rezhiheng: '制衡',
                        xin_rezhiheng_info: '出牌阶段,你可以弃置任意张牌并摸等量的牌,若你在发动〖制衡〗时弃置了所有手牌,则你多摸一张牌',
                        xin_rerende: '仁德',
                        xin_rerende_info: '出牌阶段,你可以将至少一张手牌交给其他角色,你于此阶段内不能再以此法交给该角色牌;若你于此阶段内给出的牌首次达到两张,你可以视为使用一张基本牌',
                        xinnew_rejianxiong: '奸雄',
                        xinnew_rejianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌',
                        xin_olluanji: '乱击',
                        xin_olluanji_info: '你可以将两张花色相同的手牌当做【万箭齐发】使用.当你使用【万箭齐发】选择目标后,你可以为此牌减少一个目标',
                        xin_olluanji_remove: '乱击',
                        xin_caopixingdong: '行动',
                        xin_caopixingdong_info: '出牌阶段限,你可以将一张【杀】或普通锦囊牌交给一名其他角色,该角色选择一项:对除你以外的角色使用此牌并在此牌结算完成后和你各摸一张牌;或跳过下回合的判定阶段和摸牌阶段',
                        xinpytianjiang: '天匠',
                        xinpytianjiang_info: '游戏开始时,你随机获得两张不同副类别的装备牌,并置入你的装备区.出牌阶段,你可以将装备区的牌移动至其他角色的装备区(可替换原装备).若你以此法移动了〖铸刃〗的衍生装备,你摸四张牌',
                        xinpytianjiang_move: '天匠',
                        xinpyzhuren: '铸刃',
                        xinpyzhuren_info: '出牌阶段你可以弃置一张手牌.根据此牌的花色点数,你有一定概率打造成功并获得一张武器牌(若打造失败或武器已有则改为摸一张【杀】,花色决定武器名称,点数决定成功率).此武器牌进入弃牌堆时,将其移出游戏',
                        xinpyzhuren_destroy: '铸刃',
                        xinduanzao: '锻造',
                        xinduanzao_info: '你不能成为其他角色锦囊牌的目标且可以将两张装备合成一件装备(保留原来两张装备的效果)',
                        xinchuangzao: '创造',
                        xinchuangzao_info: '你不能成为其他角色锦囊牌的目标且可以将两张装备合成一件装备(保留原来两张装备的效果)',
                        xinrefanghun: '芳魂',
                        xinrefanghun_info: '当你使用【杀】或成为【杀】的目标后,你获得1个<梅影>标记;你可以获得1个<梅影>标记来发动〖龙胆〗并摸三张牌',
                        Q_fanghun_sha: '龙胆',
                        xinrefanghun_sha_info: '你可以获得1个<梅影>标记来发动〖龙胆〗并摸三张牌',
                        xinrefuhan: '扶汉',
                        xinrefuhan_info: '回合开始时,你可以移去所有"梅影"标记并摸等量的牌,从12张蜀势力武将牌中选择并获得至多四个技能(限定技、觉醒技、主公技除外).并且你回复体力值到上限并摸5张牌',
                        xinregushe: '鼓舌',
                        xinregushe_info: '出牌阶段,你可以用一张手牌与至多七名角色同时拼点,依次结算拼点结果,没赢的角色选择一项:1.弃置一张牌并跳过下个回合所有阶段;2.令你摸三张牌增加三点体力上限并回复到体力上限.若你没赢,你摸三张牌并获得一个<饶舌>标记.(X为你的<饶舌>标记数与本回合因<鼓舌>拼点而胜利的次数之和)',
                        xinrejici: '激词',
                        xinrejici2: '激词',
                        xinrejici_info: '锁定技,当你展示拼点牌后,若此牌的点数不大于X,则你令此牌点数+X,并获得此次拼点中原点数最大的拼点牌.当你受伤时,你令伤害来源的角色弃置X+10张牌并失去2点体力.(X为你的<饶舌>标记数)',
                        xinyufeng: '御风',
                        xinyufeng2: '御风',
                        xinyufeng_info: '出牌阶段限,你可以额外多摸二张牌并选择至多X名其他角色获得<御风>效果,并且你可以加一点体力上限且回复一点体力摸X-Y张牌(准备阶段开始时,获得<御风>效果的角色跳过所有阶段.X为4.Y为你选择的角色数)',
                        xintianshu: '天书',
                        xintianshu_info: '出牌阶段限一次,若场上没有【太平要术】,则你可以弃置一张牌并选择一名角色.该角色回复体力值到上限并摸5张牌获得并使用【太平要术】',
                        xinxin_huanhua: '幻化',
                        xinxin_huanhua_info: '锁定技,其他角色计算与你距离时+1,你不能成为延时锦囊的目标,你的手牌不能被弃置和获得',
                        xinxin_xukong: '虚空',
                        xinxin_xukong_info: '锁定技,当你受到伤害时,你可以防止此伤害.当你成为其他角色使用牌的目标或当你体力流失时,你取消之.你不会进入任何负面状态',
                        xinregushe3: '鼓舌',
                        xinqinzheng: '勤政',
                        xinqinzheng_info: '锁定技,当你使用或打出牌时,若你本局游戏内使用或打出过的牌数和:为2的倍数,你从牌堆中获得一张【杀】或【闪】;为3的倍数,你从牌堆中获得一张【桃】或【酒】;为4的倍数,你从牌堆中获得一张【顺手牵羊】或【过河拆桥】;为5的倍数,你从牌堆中获得一张【决斗】或【无中生有】你增加一点体力上限并回复一点体力',
                        xinshiyuan: '诗怨',
                        xinshiyuan_info: '当你成为全场角色使用牌的目标后你摸三张牌',
                        xindushi: '毒逝',
                        xindushi_info: '锁定技,除你以外的其他角色只有在濒死时才能使用桃',
                        xinyuwei: '余威',
                        xinyuwei_info: '锁定技,你不能成为延时锦囊和拼点的目标.',
                        xinbaonu: '暴怒',
                        xinbaonu_bg: '暴',
                        xinbaonu_info: '锁定技,游戏开始时,你获得两枚<暴怒>标记;锁定技,当你造成/受到1点伤害后,你获得1枚<暴怒>标记',
                        xinkuangbao: '狂暴',
                        xinkuangbao_info: '当你使用决斗或雷属性的杀造成伤害时,伤害值+X,X为你的暴怒标记数',
                        xinol_wuqian: '无前',
                        xinol_wuqian_info: '出牌阶段,你可以弃置2枚<暴怒>标记并选择一名本回合内未选择过的其他角色,你获得技能〖无双〗并令其防具无效直到回合结束',
                        xinol_shenfen: '神愤',
                        xinol_shenfen_info: '出牌阶段限一次,你可以弃置2枚<暴怒>标记对所有角色各造成1点伤害.这些角色先各弃置其装备区里的牌,再各弃置十张手牌',
                        xinchituma: '赤兔马',
                        xinchituma_info: '锁定技,其他角色与你计算距离时+1,所有角色都在你攻击范围内,每回合能多用一张杀并额外指定两个目标,你不能是延时锦囊的目标,你的手牌不被能弃置与获得',
                        yin_lingren: '凌人',
                        yin_lingren_info: '当你于出牌阶段使用带有「伤害」这一标签的基本牌或普通锦囊牌指定目标后,你可以猜测其中的一个目标的手牌中是否有基本牌,锦囊牌或装备牌.若你猜中的项目数:≥1,此牌对该角色的伤害+1;≥2,你摸两张牌并增加两点体力上限;≥3,你回复两点体力并获得技能〖奸雄〗和〖行殇〗直到下回合开始',
                        xinlingren_jianxiong: '奸雄',
                        xinlingren_jianxiong_info: '当你受到伤害后,你可以获得对你造成伤害的牌并摸一张牌',
                        xinlingren_xingshang: '行殇',
                        xinlingren_xingshang_info: '当有角色死亡后,你可以选择一项:1.回复一点体力.2.获得该角色的所有牌',
                        yin_fujian: '伏间',
                        yin_fujian_info: '你的回合开始时,你可以观看一名其他角色的手牌,你可以获得其中至多两张牌,若颜色相同,对其造成一点伤害',
                        yin_xionghuo: '凶镬',
                        yin_xionghuo_info: '出牌阶段,你可以让一位角色获得一个<暴戾>标记,你对有<暴戾>标记的角色造成伤害时,此伤害+1.有<暴戾>的其他角色的出牌阶段开始时随机执行一项:1.受到2点火焰伤害且本回合不能使用桃;2.失去1点体力上限且本回合手牌上限-5;3.你获得其所有手牌',
                        xinxionghuo: '凶镬',
                        xinxionghuo_info: '',
                        xinxionghuo_disable: '凶镬',
                        xinxionghuo_disable_info: '',
                        xinxionghuo_low: '凶镬',
                        xinxionghuo_low_info: '',
                        yin_shajue: '杀绝',
                        yin_shajue_info: '锁定技,其他角色受伤时,你获得使其受伤的牌,你增加2点体力上限并回复体力到上限',
                        xindrlt_poxi: '魄袭',
                        xindrlt_poxi_info: '出牌阶段,你可以观看一名其他角色的手牌,你可以弃置你与其手牌中的四张花色不同的牌.若如此做,根据此次弃置你的牌的数量执行以下效果:零张,增加两点体力上限;一张,对方减少两点体力上限且你本回合手牌上限+4;三张,你回复体力值到上限;四张,你摸八张牌',
                        xindrlt_jieying: '劫营',
                        xindrlt_jieying_info: '回合开始时,若场上没有拥有<营>标记的角色,你获得1个<营>标记;结束阶段,你可以将你的一个<营>标记交给一名角色;有<营>标记的角色除其他角色摸牌阶段多摸一张牌,出牌阶段使用【杀】的次数上限+1,手牌上限+1.有<营>的其他角色回合开始时跳过这个回合所有阶段,移去<营>标记,你获得其所有手牌',
                        xindrlt_jieying_mark: '劫营',
                        xinrepojun: '破军',
                        xinrepojun2: '破军',
                        xinrepojun3: '破军',
                        xinrepojun_info: '当你使用【杀】指定目标后,你可以将其的至多X张牌置于其武将牌上(X为其体力值),此伤害+1.',
                        xinpt_manjuan: '漫卷',
                        xinpt_manjuan_info: '锁定技,你不能成为任何锦囊和基本牌的目标,且每当你将获得任何一张牌,将之置于弃牌堆.你可依次将与该牌点数相同的一张牌从弃牌堆置于你手上',
                        xinpt_manjuan2: '漫卷',
                        xinpt_manjuan2_info: '',
                        xinpt_manjuan3: '漫卷',
                        xinpt_manjuan3_info: '',
                        xinpt_zuixiang: '展骥',
                        xinpt_zuixiang_info: '回合开始阶段开始时,你可以展示牌库顶的3张牌并置于你的武将牌上,之后每个你的回合开始阶段,你须重复展示一次,直至该些牌中任意两张点数相同时,将你武将牌上的全部牌置于你的手上',
                        xinpt_zuixiang2: '展骥',
                        xinpt_zuixiang2_info: '',
                        xindecadexushen: '许身',
                        xindecadexushen2: '许身',
                        xindecadexushen_info: '限定技,当你受伤后,你可以回复1点体力并获得技能<镇南>,如果回复体力后且<关索>不在场,你可令一名其他角色选择是否用<关索>代替其武将并令其摸三张牌',
                        xindecadezhennan: '镇南',
                        xindecadezhennan_info: '当有角色使用基本牌指定目标后,你可以对一名其他角色造成2点伤害',
                        xindecadewuniang: '武娘',
                        xindecadewuniang_info: '当你使用或打出牌时,你可以获得一名其他角色的一张牌.若如此做,其失去一点体力.(若你已发动许身,则关索也摸一张牌)',
                        xinqiaosi: '巧思',
                        xinqiaosi_info: '出牌阶段限二次,你可以选择至多八张牌,从牌堆中获得一张与之牌名属性均相同的牌.你选择一项:1.获得X点体力上限.2.将X张牌交给一名角色.(X为你以此法获得的牌数)',
                        yin_jingxie1: '精械',
                        yin_jingxie1_info: '你不能成为任何锦囊牌的目标且出牌阶段,你可以展示一张未强化过的【诸葛连弩】或标准包/军争包/SP包中的防具牌,对其进行强化',
                        yin_jingxie2: '精算',
                        yin_jingxie2_info: '当你濒死时,你摸三张牌,回复至1点体力',
                        xinjueshi: '绝世',
                        xinjueshi_info: '锁定技,你的装备不能被除你指定以外的其他角色弃置或获得',
                        xinzhongzuo: '忠佐',
                        xinzhongzuo_info: '一名角色的结束阶段开始时,你可以令一名角色摸两张牌让后你增加三点体力上限和回复三点体力.若该角色已受伤,则你摸三张牌张牌.',
                        xinnewwanlan: '挽澜',
                        xinnewwanlan_info: '当一名角色进入濒死状态时,你可以令其回复体力至体力上限,对当前回合角色造成3点伤害.',
                        yin_falu: '法箓',
                        yin_falu_info: '锁定技,游戏开始时,你获得「紫薇」「后土」「玉清」「勾陈」标记各一个.♠️️,「紫薇」;♣️️,「后土」;♥️️,「玉清」;♦️️,「勾陈」.当你因弃置失去这些花色的牌时你获得与花色相同的等量标记,(每种标记数量不超过3,从3开始每使用一种标记,标记数减一但不会低于1)',
                        yin_dianhua: '点化',
                        yin_dianhua_info: '准备阶段或结束阶段,你可以观看牌堆顶的X张牌(X为你的「紫薇」「后土」「玉清」「勾陈」标记数的总和).若如此做,你将这些牌以任意顺序放回牌堆顶或牌堆底.(X最大值为12)',
                        yin_zhenyi: '真仪',
                        yin_zhenyi_info: '你可以在以下时机弃置相应的标记来发动以下效果:一名角色的判定牌生效前,你可以使用一枚「紫薇」,将判定结果改为任意花色且点数为5;你可以使用一枚「后土」将一张手牌当【桃】使用;当你造成伤害时,你可以使用一枚「玉清」,令此伤害+2;当你受到伤害后,你可以使用一张「勾陈」,你从牌堆中随机获得三种类型的牌各1张.(效果随标记数叠加)',
                        xinzhenyi_spade: '真仪',
                        xinzhenyi_spade_info: '',
                        xinzhenyi_club: '真仪',
                        xinzhenyi_club_info: '',
                        xinzhenyi_heart: '真仪',
                        xinzhenyi_heart_info: '',
                        new_shefu: '设伏',
                        new_shefu2: '设伏',
                        new_shefu_x: '设伏',
                        new_shefu_f: '伏',
                        new_shefu_info: '出牌阶段,你可以选择指定牌名的牌,称为「伏兵」.你的回合外,当有其他角色使用与你记录的「伏兵」牌名相同的手牌时,你可以取消此牌的所有目标,移去该「伏兵」你增加两点体力上限并回复两点体力.若此时处于使用者的回合内,则你令使用者当前的所有技能失效和所有手牌不能打出直至其下个回合开始.',
                        new_benyu: '贲育',
                        new_benyu2: '贲育',
                        new_benyu_info: '当你受到伤害后,你可选择:①摸5张牌;②弃置1一张牌,对伤害来源造成2点伤害.',
                        xinhmmanyi: '蛮裔',
                        xinhmmanyi_info: '锁定技,任何锦囊牌对你无效.',
                        xinmansi_viewas: '蛮嗣',
                        xinmansi: '蛮嗣',
                        xinmansi_info: '出牌阶段限三次,你可以将所有手牌当做【南蛮入侵】使用;当有角色受到【南蛮入侵】的伤害后,你摸三张牌.',
                        xinsouying: '薮影',
                        xinsouying_info: '当你对其他角色(或其他角色对你)使用【杀】或普通锦囊牌指定唯一目标后,若此牌不是本回合你对其(或其对你)使用的第一张【杀】或普通锦囊牌,你可以弃置一张牌,获得此牌对应的所有实体牌(或令此牌对你无效).',
                        xinzhanyuan: '战缘',
                        xinzhanyuan_info: '觉醒技,准备阶段,若你已因蛮嗣累计获得超过3张牌,你加三点体力上限并回复3点体力,并可以选择一名角色,你与其获得技能〖系力〗.',
                        xinhmxili: '系力',
                        xinhmxili_info: '你的回合外,当其他拥有【系力】技能的角色在其回合内对没有【系力】技能的角色造成伤害时,你可以弃置一张牌,令此伤害+2,你与其各摸五张牌.',
                        xinweiyi: '威仪',
                        xinweiyi_info: '当有角色受到伤害后,你可选择:①其失去2点体力.②其回复2点体力.',
                        xinjinzhi: '锦织',
                        xinjinzhi2: '锦织',
                        xinjinzhi_info: '当你需要使用或打出一张基本牌时,你可弃置一张牌并摸一张牌你增加三点体力上限并回复三点体力.则视为你使用或打出了此牌.',
                        xinyanjiao: '严教',
                        xinyanjiao_info: '出牌阶段,你可以选择一名其他角色并从牌堆顶亮出四张牌.该角色将这些牌分成点数之和相等的两组,你与其各获得其中一组,将剩余未分组的牌置入弃牌堆.若未分组的牌超过一张,则你本回合手牌上限+5你不能成为延时锦囊的目标',
                        xinyanjiao2: '严教',
                        xinyanjiao2_info: '',
                        xinxingshen: '省身',
                        xinxingshen_info: '当你受到伤害后,你可以摸三张牌且下一次发动〖严教〗亮出的牌数+4',
                        xinxinfenyue: '奋钺',
                        xinxinfenyue_info: '回合开始阶段你额外多摸八张牌,你手牌上限等于你的体力上限.出牌阶段,你可以与一名其他角色拼点,若你赢,根据你拼点牌的点数依次执行以下效果:不大于5,你获得其一张牌在牌堆摸两张牌;不大于9,你获得牌堆里的一张【杀】对其造成一点伤害; 不大于K,视为你对其使用一张雷【杀】你增加一点体力上限并回复一点体力.',
                        xinxindanshou2: '胆守',
                        xinxindanshou3: '胆守',
                        xinxindanshou: '胆守',
                        xinxindanshou_info: '在其他角色的准备阶段你可以选择执行以下三项的两项 1.你摸两张牌并回复两点体力,2.让该角色受到一点伤害并跳过出牌阶段,3.让该角色增加一点体力上限并回复一点体力.当你成为自己或者其他角色的目标时,你摸2张牌,回合结束阶段,若有其他角色在他的回合指定你为目标,你可以弃置一张牌对其造成2点伤害你回复2点体力,若没有,则你摸二张牌增加一点体力上限.',
                        xinnew_wuhun: '武魂',
                        xinnew_wuhun_info: '锁定技,当你受到伤害/濒死时/流失体力/死亡后,你选择一名其他角色,该角色立即死亡',
                        xinwushen4: '武神',
                        xinwushen3: '武神',
                        xinwushen3_info: '让其失去所有技能并且手牌不能打出直到你的回合结束',
                        xinwushen2: '武神',
                        xinwushen: '武神',
                        xinwushen_info: '锁定技,延时锦囊对你无效,你可以将一张黑色手牌当【酒】使用,你的♥️️手牌均视为【杀】且你使用【酒】无次数限制;你使用【杀】无距离和次数限制且不可被响应.出牌阶段,你使用的杀无视防具且每当你使用一张杀指定一名角色后你可以让其失去所有技能并且全场角色失去所有非锁定技不能对该角色使用桃直到你的回合结束.',
                        xinhongyi: '才媛',
                        xinhongyi2: '才媛',
                        xinhongyi_info: '出牌阶段你可以选择一名其他角色.你的下回合开始前,该角色造成伤害时进行判定,若结果为:黑色,此伤害免疫.红色,受到伤害的角色摸2张牌并回复2点体力.',
                        xinrequanfeng: '慧容',
                        xinrequanfeng_info: '其他角色受伤时,你可选择获得其武将牌上的非主公技和非隐匿技,加4点体力上限并回复4点体力.当你处于濒死状态时,你可以加2点体力上限,回复4点体力.',
                        xinciwei: '慈威',
                        xinciwei_info: '当你对其他角色造成伤害后,若其判定区没有牌,则你你可以将其的一张牌置于其的判定区.若此牌不为延时锦囊牌且此牌为:红色,此牌视为【乐不思蜀】;黑色,此牌视为【兵粮寸断】.回合结束时,若你本回合内未造成伤害,你可摸三张牌.',
                        xinmengmo: '梦魇',
                        xinmengmo_info: '锁定技,你无法被翻面,你使用的♥️️杀伤害+1.',
                        xin_xinshanjia: '缮甲',
                        xin_xinshanjia_info: '出牌阶段开始时,你可以摸3+X张牌增加3+X点体力上限并回复3+X点体力,你可以视为使用一张不计入杀的无视防具无视距离且不可闪避的【杀】.(X为你于本局游戏内失去的装备牌数)',
                        xin_xingzuo: '兴作',
                        xin_xingzuo2: '兴作',
                        xin_xingzuo_info: '出牌阶段开始时,你可观看牌堆底的X张牌并用任意张手牌替换其中等量的牌.若如此做,结束阶段,你可令一名角色用所有手牌替换牌堆底的x张牌.若其因此法失去的牌多于二张,则你增加一点体力上限并回复一点体力.',
                        xin_miaoxian: '妙弦',
                        xin_miaoxian_info: '你可将此牌当作任意一张普通锦囊牌使用,若你使用一张红色牌,你使用此牌时摸三张牌.',
                        xinspwuku: '武库',
                        xinspwuku_info: '锁定技,你使用牌无距离次数限制,每当一位角色回合结束时你可以摸X张牌(X为你本回合失去的牌数).',
                        xinspmiewu: '破竹',
                        xinspmiewu2: '破竹',
                        xinspmiewu_backup: '破竹',
                        xinspmiewu_info: '你可将一张牌当做任意基本牌或锦囊牌使用,摸一张牌并增加一点上限再回复一点体力.',
                        xinguanxu: '观虚',
                        xinguanxu_info: '出牌阶段,你可以观看一名其他角色的手牌,你可将其中一张手牌与牌堆顶10张牌中的一张交换.若如此做,你获得其手牌中3张花色相同的牌增加三点体力上限并回复3点体力并让该角色失去一点体力.',
                        xinyashi: '雅士',
                        xinyashi_info: '当受到伤害或体力流失时,你可以在以下两项中选择一项:1.伤害来源处失去所有技能并且所有手牌不能打出直到其下个回合开始 2.再发动一次观虚.',
                        new_fengyin_f: '封印',
                        new_fengyin_z: '封印',
                        xinyouyan: '诱言',
                        xinyouyan_info: '当你的牌因失去进入弃牌堆后,你可以从牌堆中获得本次弃牌中没有的花色的牌各一张.',
                        xinzhuihuan: '追还',
                        xinzhuihuan2: '追还',
                        xinzhuihuan_info: '你的回合外对你造成过伤害的角色:受到你造成的3点伤害并失去所有手牌和装备牌.结束阶段,你可以选择一名其他角色,直到该角色的下个准备阶段,此期间内对其造成过伤害的角色:受到其造成的3点伤害并失去所有手牌和装备牌.',
                        xinrecanshi: '残蚀',
                        xinrecanshi2: '残蚀',
                        xinrecanshi_info: '摸牌阶段开始时,你可以多摸X+10张牌(X为场上除你以外的存活角色数),若如此做,当你于此回合内使用【杀】或普通锦囊牌时,你摸2张牌增加2点体力上限并回复2点体力.',
                        xinrechouhai: '仇海',
                        xinrechouhai_info: '锁定技,当其他角色受到你对其使用【杀】的伤害时,此伤害+3.',
                        xinguiming: '归命',
                        xinguiming_info: '锁定技,你不能成为其他角色延时锦囊的目标且其他角色都在你攻击范围内>',
                        xinzhiren: '织纴',
                        xinzhiren_info: '当你于每个回合内使用第一张非转化牌时,你可依次执行以下选项中的前X项:①观看牌堆顶X张牌.②可弃置场上的一张装备牌和延时锦囊牌.③回复体力值到体力上限.④摸5张牌.(X为此牌的名称的字数)',
                        xinyaner: '燕尔',
                        xinyaner_info: '当有其他角色于其出牌阶段内失去手牌后,若其手牌数等于2,则你可以与其各摸二张牌.若其以此法摸得的两张牌类型相同,则其回复3点体力并摸三张牌.若你增加3点体力上限并摸三张牌.',
                        xinbazhan: '把盏',
                        xinbazhan_info: '转换技,出牌阶段,阴:你可以将至多两张手牌交给一名其他角色.阳:你可以获得一名其他角色的至多两张手牌.若以此法移动的牌包含基本牌或♥️️牌,则你可令得到牌的角色执行一项:①回复体力值到体力上限.②复原武将牌.',
                        xinjiaoying: '醮影',
                        xinjiaoying2: '醮影',
                        xinjiaoying3: '醮影',
                        xinjiaoying3_draw: '醮影',
                        xinjiaoying_info: '锁定技,其他角色获得你的手牌后,该角色本回合不能使用或打出与此牌颜色相同的牌.此回合结束时,若其本回合没有再使用牌,你令一名角色将手牌摸至八张.',
                        xintianzuo: '天佐',
                        xintianzuo_info: '①游戏开始时,你将一定数量张【奇正相生】加入牌堆.②当一名角色成为【奇正相生】的目标后,你可观看其手牌,可以更改其标记.',
                        xinlingce: '灵策',
                        xinlingce_info: '锁定技.当有非装备牌被使用时,你摸一张牌.',
                        xindinghan: '定汉',
                        xindinghan_info: '锁定技,当你成为卡牌的目标时或当你收到伤害时,取消之.',
                        xingongxiu: '共修',
                        xingongxiu_info: '结束阶段,若你本回合内发动过〖经合〗,则你选择一项:①令所有本回合内成为过〖经合〗目标的角色各摸三张牌;②令所有本回合内未成为过〖经合〗目标的角色各弃置三张手牌.',
                        xinjinghe: '经合',
                        xinjinghe_info: '出牌阶段限一次,你可以展示四张牌名各不相同的牌并选择等量的角色.系统从<写满技能的天书>中随机选择等量的技能,这些角色依次选择获得其中的一个.',
                        newxinxianfa: '仙法',
                        newxinxianfa2: '仙法',
                        newxinxianfa_backup: '仙法',
                        newxinxianfa_info: '出牌阶段,你可以将你区域内任意牌当任意牌使用,你摸一张牌.',
                        xinnhreleiji: '雷击',
                        xinnhreleiji_misa: '雷击',
                        xinnhreleiji_info: '①当你使用或打出【杀】或【闪】或【闪电】时,你可以进行判定.②当你的判定的判定牌生效后,若结果为:♠️️,你可对一名其他角色造成3点雷电伤害;♣️️:你回复2点体力并可对一名其他其他角色造成2点雷电伤害.',
                        xinnhreleiji_append: '<span style="font-family: yuanli">不能触发〖雷击〗的判定:〖暴虐〗、〖助祭〗、<br>〖弘仪〗、〖孤影〗.</span>',
                        xinnhreleiji_faq: '不能触发〖雷击〗的判定',
                        xinnhreleiji_faq_info: '<br>董卓/界董卓〖暴虐〗<br>黄巾雷使〖助祭〗<br>羊徽瑜〖弘仪〗<br>鸣濑白羽〖孤影〗',
                        xinrebiyue: '闭月',
                        xinrebiyue_info: '结束阶段,你可以摸三张牌并回复三点体力,若你没有手牌,则改为摸五张牌并回复五点体力.',
                        xinnew_retuxi: '突袭',
                        xinnew_retuxi_info: '摸牌阶段摸牌时,你可以少摸任意张牌,获得等量的角色的各一张手牌并摸三张牌',
                        xinnhyinbing: '阴兵',
                        xinnhyinbing_info: '锁定技,你造成伤害改为失去体力.其他角色失去体力后,你摸三张牌回复三点体力.',
                        xinmingce: '明策',
                        xinmingce_info: '出牌阶段限三次,你可以交给一名其他角色一张装备牌或【杀】,令该角色选择一项:1. 视为对其攻击范围内的另一名由你指定的角色使用一张【杀】.2. 摸二张牌.每回合限一次.',
                        Q_zhiyan: '直言',
                        Q_zhiyan_info: '结束阶段,你可以令一名角色摸一张牌并展示之其再摸两张牌,若第一张为基本牌,其使用此牌并回复2点体力.',
                        xinnhhuoqi: '活气',
                        xinnhhuoqi_info: '出牌阶段限三次,你可以弃置一张牌,令一名角色回复2点体力并摸二张牌.',
                        xinnhguizhu: '鬼助',
                        xinnhguizhu_info: '一名角色进入濒死状态时,你可以摸三张牌并回复三点体力(每回合限一次).',
                        xinnhxianshou: '仙授',
                        xinnhxianshou_info: '出牌阶段,你可以选择一名角色令其摸一张牌.若其未受伤,则多摸一张.',
                        xinnhlundao: '论道',
                        xinnhlundao_info: '当你受到伤害后,若伤害来源比你手牌多,你可以弃置其三张牌;若伤害来源比你手牌少,你摸二张牌.',
                        xinnhguanyue: '观月',
                        xinnhguanyue_info: '结束阶段,你可以观看牌堆顶五张牌,获得其中一张,另四张放回牌堆顶体力值回复到体力上限.',
                        xinnhyanzheng: '言政',
                        xinnhyanzheng2: '言政',
                        xinnhyanzheng2_info: '你可以保留一张手牌并弃置其余的牌,选择至多等于弃牌数量的角色,对这些角色各造成2点伤害.',
                        xinnhyanzheng_info: '结束阶段,若你的手牌数大于1,你可以保留一张手牌并弃置其余的牌,选择至多等于弃牌数量的角色,对这些角色各造成2点伤害.',
                        xinreshuishi: '慧识',
                        xinreshuishi_info: '出牌阶段限三次,你可进行判定牌不置入弃牌堆的判定.若判定结果与本次发动技能时的其他判定结果的花色均不相同,则你加1点体力上限并重复此流程.你将所有位于处理区的判定牌交给一名角色.',
                        xinresghuishi: '辉逝',
                        xinresghuishi_info: '出牌阶段,你可选择一名角色.若你的体力上限不小于存活人数且其有未发动的觉醒技,则你令其中一个技能无视发动条件;否则其摸四张牌.',
                        xinstianyi: '天翊',
                        xinstianyi_info: '觉醒技,准备阶段,若场上的所有存活角色均于本局游戏内受到过伤害,则你加2点体力上限并回复1点体力,令一名角色获得技能〖佐幸〗.',
                        xinzuoxing: '佐幸',
                        xinzuoxing2: '佐幸',
                        xinzuoxing_info: '准备阶段,若令你获得〖佐幸〗的角色存活且体力上限大于1,你获得如下效果:出牌阶段限,你可以获得一张普通锦囊牌.',
                        shen_shentong: '神通',
                        shen_shentong_backup: '神通',
                        shen_shentong_info: '出牌阶段限你可选择本一项:1.选择一名角色移除其所有手牌.2.选择一名角色使其失去所有体力.3.选择一名角色移除其所有技能.4.选择一名角色让其体力值回复至上限.5.选择一名角色让其手牌补到5张.',
                        nhhuashen: '化身',
                        nhhuashen_info: '出牌阶段,你可以随机观看武将库里面的武将,你选择一个武将获得其所有技能.',
                        xinzhukou: '逐寇',
                        xinzhukou_info: '当你于一名角色的出牌阶段第一次造成伤害后,你可以摸X张牌(X为本回合你已使用的牌数).你的结束阶段,若你本回合没有造成伤害,你可以对所有其他角色造成1点伤害.',
                        xinmengqing: '氓情',
                        xinmengqing_info: '觉醒技,准备阶段.你加6点体力上限并回复6点体力,获得〖玉殒〗.',
                        xinyuyun: '玉殒',
                        xinyuyun_info: '锁定技,出牌阶段开始时,你增加1点体力或体力上限,选择一项(若你已损失体力值大于1,则多选一项):①摸两张牌;②本回合使用【杀】无距离和次数限制;③本回合的手牌上限视为无限;④弃置一名其他角色一张手牌和一张装备区中的牌;⑤令手牌最少的一名角色将手牌摸至体力上限(最多摸至5).',
                    },
                };
                for (var i in QQQ.character) {
                    QQQ.character[i][4].push('ext:阴间集结/image/' + i + '.jpg');
                }
                lib.config.all.characters.add('阴间集结');
                lib.config.characters.add('阴间集结');
                lib.translate['阴间集结_character_config'] = '阴间集结';
                return QQQ;
            });
        },
        package: {
            card: {
                card: {
                    xinpyzhuren_heart: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['xinpyzhuren_heart'],
                        ai: {
                            basic: {
                                equipValue: 4,
                            },
                        },
                    },
                    xinpyzhuren_diamond: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['xinpyzhuren_diamond'],
                        ai: {
                            basic: {
                                equipValue: 3,
                            },
                        },
                    },
                    xinpyzhuren_club: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['xinpyzhuren_club'],
                        ai: {
                            basic: {
                                equipValue: 5,
                            },
                        },
                        loseDelay: false,
                        onLose() {
                            var next = game.createEvent('baiyin_recover');
                            event.next.remove(next);
                            var evt = event.parent;
                            if (evt.getlx === false) evt = evt.parent;
                            evt.after.push(next);
                            next.player = player;
                            next.setContent(function () {
                                player.recover(4);
                            });
                        },
                    },
                    xinpyzhuren_spade: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['xinpyzhuren_spade'],
                        ai: {
                            basic: {
                                equipValue: 3,
                            },
                        },
                    },
                    xinpyzhuren_shandian: {
                        fullskin: true,
                        type: 'equip',
                        subtype: 'equip1',
                        distance: {
                            attackFrom: -8,
                        },
                        skills: ['xinpyzhuren_shandian'],
                        ai: {
                            basic: {
                                equipValue: 3,
                            },
                        },
                    },
                },
                translate: {
                    xinpyzhuren_heart: '红缎枪',
                    xinpyzhuren_heart_info: '当你使用【杀】造成伤害后,你可以进行判定,若结果为:红色,你回复4点体力;黑色:你摸四张牌',
                    xinpyzhuren_diamond: '烈淬刀',
                    xinpyzhuren_diamond_info: '当你使用【杀】对目标角色造成伤害时,你可以弃置一张牌,令此伤害+3.你使用【杀】的次数上限+4',
                    xinpyzhuren_club: '水波剑',
                    xinpyzhuren_club_info: '当你使用普通锦囊牌或【杀】时,你可以为此牌增加一个目标.当你失去装备区里的【水波剑】后,你回复4点体力',
                    xinpyzhuren_spade: '混毒弯匕',
                    xinpyzhuren_spade_info: '当你使用【杀】指定目标后,你可令其失去X点体力(X为此技能本回合内发动过的次数且至多为5)',
                    xinpyzhuren_shandian: '天雷刃',
                    xinpyzhuren_shandian_info: '当你使用【杀】指定目标后,可令其进行判定,若结果为:♠️️,其受到6点雷属性伤害;♣️️,其受到3点雷属性伤害,你回复3点体力并摸三张牌',
                },
            },
            intro: "本扩展集合了三国杀出现过的所有模式里面的最强武将,原则基础上再加强,强度极高,并且安装扩展后要开启ai禁选.另外此扩展为免费扩展,请勿相信收费购买<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '少年qq2856427658',
            version: '1.0',
        },
    };
});

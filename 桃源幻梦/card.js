'use strict';
game.import('card', function (lib, game, ui, get, ai, _status) {
    var tyhm = {
        name: 'tyhm',
        connect: true,
        card: {
            hyym_yijineiliyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                enable: true,
                filterTarget: true,
                image: 'ext:桃源幻梦/image/card/hyym_yijineiliyao.png',
                content() {
                    target.draw(3);
                    target.chooseToDiscard('he', 2, true).set('ai', get.disvalue);
                },
                ai: {
                    basic: {
                        order() {
                            return 23;
                        },
                        value: 5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_erjineiliyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                enable: true,
                filterTarget: true,
                image: 'ext:桃源幻梦/image/card/hyym_erjineiliyao.png',
                content() {
                    target.draw(2);
                },
                ai: {
                    basic: {
                        order: 25,
                        value: 6.5,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_sanjineiliyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && target.hasEnabledSlot();
                },
                image: 'ext:桃源幻梦/image/card/hyym_sanjineiliyao.png',
                content() {
                    player.chooseToDisable().ai = function (event, player, list) {
                        event.list1 = [];
                        event.list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            event.list1.push(list[i]);
                            event.list2.push(list[i]);
                        }
                        if (player.hasCard(null, 'he')) {
                            for (var i = 1; i < 6; i++) {
                                if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                    list.remove('equip' + i);
                                }
                                if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                    event.list1.remove('equip' + i);
                                }
                            }
                        }
                        if (!!list.length) return list.randomGet();
                        else if (!!event.list1.length) return event.list1.randomGet();
                        else return event.list2.randomGet();
                    };
                    player.draw(3);
                },
                ai: {
                    basic: {
                        order() {
                            var player = _status.event.player;
                            if (player.name == 'nanhuaxianrenhyym') return 13;
                            else return 24;
                        },
                        value() {
                            if (_status.event.player.hasEnabledSlot()) return 7;
                            else return 0;
                        },
                        useful() {
                            if (_status.event.player.hasEnabledSlot()) return 5.5;
                            else return 0;
                        },
                    },
                    result: {
                        target(player, target) {
                            if (target.name == 'nanhuaxianrenhyym' && target.hasEnabledSlot(1) && target.hasEnabledSlot(2) && target.hasEnabledSlot(3) && target.hasEnabledSlot(4) && target.hasEnabledSlot(5)) return -99;
                            else return 3;
                        },
                    },
                },
            },
            hyym_chujiqixveyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_chujiqixveyao.png',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target.hp == 1 && target.isDamaged();
                },
                content() {
                    target.recover();
                },
                ai: {
                    basic: {
                        useful: 5,
                        value: [7, 2],
                    },
                    order: 12.1,
                    result: {
                        target: 2,
                    },
                    tag: {
                        recover: 1,
                        huixie: true,
                    },
                },
            },
            hyym_zhongjiqixveyao: {
                type: 'hyym_yaopin',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_zhongjiqixveyao.png',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target.hp == 2 && target.isDamaged();
                },
                content() {
                    target.recover(2);
                },
                ai: {
                    basic: {
                        useful: 5,
                        value: 8,
                    },
                    order: 12.1,
                    result: {
                        target: 4,
                    },
                    tag: {
                        recover: 2,
                        huixie: true,
                    },
                },
            },
            hyym_yijiqixveshangxianyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_yijiqixveshangxianyao.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_yijiqixveshangxian') && !target.hasSkill('hyym_yijiqixveshangxianx');
                },
                content() {
                    player.gainMaxHp();
                    player.markSkill('hyym_yijiqixveshangxian');
                    player.addSkill('hyym_yijiqixveshangxian');
                    player.storage.hyym_yijiqixveshangxian++;
                },
                ai: {
                    basic: {
                        order: 8,
                        value: 5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2.5;
                        },
                    },
                    tag: {
                        recover: 1,
                    },
                },
            },
            hyym_sanjiqixveshangxianyao: {
                type: 'hyym_yaopin',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_sanjiqixveshangxianyao.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_sanjiqixveshangxian') && !target.hasSkill('hyym_sanjiqixveshangxianx');
                },
                content() {
                    player.gainMaxHp(3);
                    player.recover(3);
                    player.markSkill('hyym_sanjiqixveshangxian');
                    player.addSkill('hyym_sanjiqixveshangxian');
                    player.storage.hyym_sanjiqixveshangxian++;
                },
                ai: {
                    basic: {
                        order: 12,
                        value: 2.5,
                        useful: 2.5,
                    },
                    result: {
                        target(player, target) {
                            return 1.5;
                        },
                    },
                },
            },
            hyym_yijigongjiyao: {
                type: 'hyym_yaopin',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_yijigongjiyao.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return 14 - card.number;
                    }).judge2 = function (result) {
                        return result.bool ? true : false;
                    };
                    ('step 1');
                    player.storage.hyym_yijigongjiyao = result.number;
                    player.addSkill('hyym_yijigongji');
                    player.markSkill('hyym_yijigongji');
                    player.storage.hyym_yijigongji++;
                },
                ai: {
                    basic: {
                        order: 10,
                        value: 6,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_yijifangyuyao: {
                type: 'hyym_yaopin',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_yijifangyuyao.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    'step 0';
                    player.judge(function (card) {
                        return card.number;
                    }).judge2 = function (result) {
                        return result.bool ? true : false;
                    };
                    ('step 1');
                    player.storage.hyym_yijifangyuyao = result.number;
                    player.addSkill('hyym_yijifangyu');
                    player.markSkill('hyym_yijifangyu');
                    player.storage.hyym_yijifangyu++;
                },
                ai: {
                    basic: {
                        order: 10,
                        value: 6,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_caihongfengbaotang: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_caihongfengbaotang.png',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target.hp == target.countCards('h');
                },
                content() {
                    target.recover();
                    target.draw();
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 8,
                    },
                    order: 39,
                    result: {
                        target(player, target) {
                            if (target.hp == target.maxHp) return 1;
                            else return 3;
                        },
                    },
                    tag: {
                        recover: 1,
                        huixie: true,
                    },
                },
            },
            hyym_xiaomijiu: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_xiaomijiu.png',
                savable: true,
                selectTarget: -1,
                content() {
                    target.recover(1 - target.hp);
                },
                _priority: 99,
                ai: {
                    basic: {
                        useful() {
                            if (!game.hasPlayer((play) => play.hp < 3 && get.attitude(play, _status.event.player) > 0)) return 6;
                            return 8;
                        },
                        value: 8,
                    },
                    order() {
                        if (_status.event.getParent(2).player.hp < 0) return get.order({ name: 'jiu' }) + 1;
                        else return get.order({ name: 'jiu' }) + 1.1;
                    },
                    result: {
                        target: 2,
                    },
                    tag: {
                        recover: 99,
                        save: 99,
                        jiu: true,
                    },
                },
            },
            hyym_nverhong: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_nverhong.png',
                savable: true,
                selectTarget: -1,
                content() {
                    target.addSkill('hyym_nverhongx');
                    target.markSkill('hyym_nverhongx');
                    target.storage.hyym_nverhongx++;
                    target.recover();
                    target.draw();
                },
                _priority: 98,
                ai: {
                    basic: {
                        useful() {
                            if (!game.hasPlayer((play) => play.hp < 3 && get.attitude(play, _status.event.player) > 0)) return 6;
                            return 8;
                        },
                        value: 8,
                    },
                    order() {
                        return get.order({ name: 'jiu' }) + 0.5;
                    },
                    result: {
                        target: 4,
                    },
                    tag: {
                        recover: 1,
                        save: 1,
                        jiu: true,
                    },
                },
            },
            hyym_guihuajiu: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_guihuajiu.png',
                enable: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_guihuajiux');
                },
                content() {
                    target.storage.hyym_guihuajiux = game.createCard('hyym_guihuajiu');
                    target.addSkill('hyym_guihuajiux');
                    if (cards && cards.length) {
                        card = cards[0];
                    }
                },
                ai: {
                    basic: {
                        useful: 5,
                        value: 7,
                    },
                    order: 8,
                    result: {
                        target: 2,
                    },
                    tag: {
                        jiu: true,
                    },
                },
            },
            hyym_longjijiu: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_longjijiu.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    player.addSkill('hyym_longjijiux');
                    player.markSkill('hyym_longjijiux');
                    player.storage.hyym_longjijiux++;
                },
                ai: {
                    basic: {
                        order: 10,
                        value: 6,
                        useful: 6,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                    tag: {
                        jiu: true,
                    },
                },
            },
            hyym_jindingjiu: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_jindingjiu.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && target.hasEnabledSlot();
                },
                content() {
                    'step 0';
                    player.chooseToDisable().ai = function (event, player, list) {
                        event.list1 = [];
                        event.list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            event.list1.push(list[i]);
                            event.list2.push(list[i]);
                        }
                        if (player.hasCard(null, 'he')) {
                            for (var i = 1; i < 6; i++) {
                                if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                    list.remove('equip' + i);
                                }
                                if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                    event.list1.remove('equip' + i);
                                }
                            }
                        }
                        if (!!list.length) return list.randomGet();
                        else if (!!event.list1.length) return event.list1.randomGet();
                        else return event.list2.randomGet();
                    };
                    ('step 1');
                    player.addSkill('hyym_jindingjiux');
                    player.markSkill('hyym_jindingjiux');
                    player.storage.hyym_jindingjiux++;
                },
                ai: {
                    basic: {
                        order: 10,
                        value() {
                            if (_status.event.player.hasEnabledSlot()) return 7;
                            else return 0;
                        },
                        useful() {
                            if (_status.event.player.hasEnabledSlot()) return 6;
                            else return 0;
                        },
                    },
                    result: {
                        target(player, target) {
                            if (target.name == 'nanhuaxianrenhyym' && target.hasEnabledSlot(1) && target.hasEnabledSlot(2) && target.hasEnabledSlot(3) && target.hasEnabledSlot(4) && target.hasEnabledSlot(5)) return -99;
                            else return 2;
                        },
                    },
                    tag: {
                        jiu: true,
                    },
                },
            },
            hyym_zhuangyuanhong: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_zhuangyuanhong.png',
                enable: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_zhuangyuanhongx');
                },
                content() {
                    target.storage.hyym_zhuangyuanhongx = game.createCard('hyym_zhuangyuanhong');
                    target.addSkill('hyym_zhuangyuanhongx');
                    if (cards && cards.length) {
                        card = cards[0];
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 7,
                    },
                    order: 8,
                    result: {
                        target: 2,
                    },
                    tag: {
                        recover: 1,
                        jiu: true,
                    },
                },
            },
            hyym_huoliguo: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_huoliguo.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_huoliguox = card;
                    target.storage.hyym_huoliguox_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_huoliguox_markcount += 2;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_huoliguox_markcount += 3;
                    }
                    target.addSkill('hyym_huoliguox');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return target.countCards('h') * 0.3 + 1;
                        },
                    },
                },
            },
            hyym_hongzaozongzi: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_hongzaozongzi.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_hongzaozongzix = card;
                    target.storage.hyym_hongzaozongzix_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_hongzaozongzix_markcount += 2;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_hongzaozongzix_markcount += 3;
                    }
                    target.addSkill('hyym_hongzaozongzix');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 4,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_jingshenbinggan: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                enable: true,
                fullskin: true,
                filterTarget(card, player, target) {
                    return target.countCards('h') < target.maxHp || (target == player && target.countCards('h') == target.maxHp);
                },
                image: 'ext:桃源幻梦/image/card/hyym_jingshenbinggan.png',
                content() {
                    target.draw(Math.min(target.maxHp - target.countCards('h'), 4));
                },
                ai: {
                    basic: {
                        order: 0.3,
                        useful: 4.5,
                        value: 9.2,
                    },
                    result: {
                        target(player, target) {
                            if (target.maxHp - target.countCards('h') <= 0 && target != player) return 0;
                            if (target.maxHp - target.countCards('h') == 0 && target == player) return 1;
                            return target != player ? Math.min(target.maxHp - target.countCards('h'), 4) : Math.min(target.maxHp - target.countCards('h') + 1, 4);
                        },
                    },
                },
            },
            hyym_baozoubinggan: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_baozoubinggan.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_baozoubingganx');
                },
                content() {
                    targets[0].storage.hyym_baozoubingganx = game.createCard('hyym_baozoubinggan');
                    targets[0].addSkill('hyym_baozoubingganx');
                    if (cards && cards.length) {
                        card = cards[0];
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 7.5,
                    },
                    order: 8,
                    result: {
                        target: 3,
                    },
                },
            },
            hyym_xianrouzongzi: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_xianrouzongzi.png',
                enable: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_xianrouzongzix');
                },
                content() {
                    target.storage.hyym_xianrouzongzix = game.createCard('hyym_xianrouzongzi');
                    target.addSkill('hyym_xianrouzongzix');
                    if (cards && cards.length) {
                        card = cards[0];
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 7.5,
                    },
                    order: 8,
                    result: {
                        target: 3,
                    },
                },
            },
            hyym_banlizongzi: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_banlizongzi.png',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_banlizongzix') && !target.hasSkill('hyym_banlizongziy');
                },
                content() {
                    target.gainMaxHp(2);
                    target.changeHujia(2);
                    target.markSkill('hyym_banlizongzix');
                    target.addSkill('hyym_banlizongzix');
                    target.storage.hyym_banlizongzix++;
                },
                ai: {
                    basic: {
                        order: 9,
                        value: 8,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 3;
                        },
                    },
                },
            },
            hyym_caomei: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_caomei.png',
                enable: true,
                filterTarget(card, player, target) {
                    return target.hasDisabledSlot() || !target.isDisabledJudge();
                },
                content() {
                    'step 0';
                    var list = [];
                    if (target.hasDisabledSlot()) list.push('回复一个装备栏');
                    if (!target.isDisabledJudge()) list.push('废除判定区');
                    if (list.length < 2) {
                        if (target.hasDisabledSlot()) event._result = { index: 0 };
                        else event._result = { index: 1 };
                    } else {
                        target.chooseControl().set('choiceList', list);
                    }
                    ('step 1');
                    event.index = result.index;
                    if (result.index == 0) {
                        target.chooseToEnable();
                    } else {
                        target.disableJudge();
                    }
                },
                recastable: true,
                ai: {
                    basic: {
                        useful: 4,
                        value: 4,
                        order: 10,
                    },
                    result: {
                        target(player, target) {
                            return 1.5;
                        },
                    },
                },
            },
            hyym_jidanzongzi: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_jidanzongzi.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_jidanzongzix = card;
                    target.storage.hyym_jidanzongzix_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_jidanzongzix_markcount += 3;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_jidanzongzix_markcount += 4;
                    }
                    target.addSkill('hyym_jidanzongzix');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 5.5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_lvdouzongzi: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_lvdouzongzi.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    'step 0';
                    if (target.isTurnedOver()) target.turnOver();
                    ('step 1');
                    if (target.isLinked()) target.link();
                    if (target.getExpansions('hyym_suishending_1').length) {
                        target.lose(target.getExpansions('hyym_suishending_1'));
                        target.removeSkill('hyym_suishending_1', true);
                    }
                    if (target.hasSkill('hyym_modujiaomengyanx')) {
                        target.removeSkill('hyym_modujiaomengyanx');
                    }
                    if (target.hasSkill('hyym_hunyinx')) {
                        target.removeSkill('hyym_hunyinx');
                    }
                    if (target.hasSkill('hyym_sheshenx')) {
                        target.removeMark('hyym_sheshenx');
                        target.removeSkill('hyym_sheshenx');
                    }
                    if (target.hasSkill('hyym_zhongmaox')) {
                        target.removeMark('hyym_zhongmaox');
                        target.removeSkill('hyym_zhongmaox');
                    }
                    if (target.hasSkill('hyym_jihanlingyux') && target.storage.hyym_jihanlingyux < 0) {
                        target.removeMark('hyym_jihanlingyux');
                        target.removeSkill('hyym_jihanlingyux');
                    }
                    if (target.hasSkill('hyym_zhimangzhuangtai')) {
                        target.removeMark('hyym_zhimangzhuangtai');
                        target.removeSkill('hyym_zhimangzhuangtai');
                    }
                    if (target.hasSkill('hyym_zhimangzhuangtaired')) {
                        target.removeMark('hyym_zhimangzhuangtaired');
                        target.removeSkill('hyym_zhimangzhuangtaired');
                    }
                    if (target.hasSkill('hyym_zhimangzhuangtaiblack')) {
                        target.removeMark('hyym_zhimangzhuangtaiblack');
                        target.removeSkill('hyym_zhimangzhuangtaiblack');
                    }
                    if (target.hasSkill('hyym_bawangpaoxiaoheart')) {
                        target.removeMark('hyym_bawangpaoxiaoheart');
                        target.removeSkill('hyym_bawangpaoxiaoheart');
                    }
                    if (target.hasSkill('hyym_bawangpaoxiaoclub')) {
                        target.removeMark('hyym_bawangpaoxiaoclub');
                        target.removeSkill('hyym_bawangpaoxiaoclub');
                    }
                    if (target.hasSkill('hyym_bawangpaoxiaodiamond')) {
                        target.removeMark('hyym_bawangpaoxiaodiamond');
                        target.removeSkill('hyym_bawangpaoxiaodiamond');
                    }
                    if (target.hasSkill('hyym_anxiangx')) {
                        target.removeMark('hyym_anxiangx');
                        target.removeSkill('hyym_anxiangx');
                    }
                    if (target.hasSkill('hyym_geliezhuangtai')) {
                        target.removeMark('hyym_geliezhuangtai');
                        target.removeSkill('hyym_geliezhuangtai');
                    }
                    if (target.hasSkill('hyym_huimouyixiaoz')) {
                        target.removeMark('hyym_huimouyixiaoz');
                        target.removeSkill('hyym_huimouyixiaoz');
                    }
                    if (target.hasSkill('hyym_bingjiex')) {
                        target.removeMark('hyym_bingjiex');
                        target.removeSkill('hyym_bingjiex');
                    }
                    if (target.hasSkill('hyym_huangtiansuo')) {
                        target.removeMark('hyym_huangtiansuo');
                        target.removeSkill('hyym_huangtiansuo');
                    }
                    if (target.hasSkill('hyym_tianfabiaoji')) {
                        target.removeMark('hyym_tianfabiaoji');
                        target.removeSkill('hyym_tianfabiaoji');
                    }
                    if (target.hasSkill('hyym_huanxingqv')) {
                        target.removeSkill('hyym_huanxingqv');
                    }
                    if (target.hasSkill('hyym_huanxingqvlinshi')) {
                        target.removeSkill('hyym_huanxingqvlinshi');
                    }
                    if (target.hasSkill('hyym_chenzuix')) {
                        target.removeMark('hyym_chenzuix');
                        target.removeSkill('hyym_chenzuix');
                    }
                    if (target.hasSkill('hyym_chenzuiy')) {
                        target.removeMark('hyym_chenzuiy');
                        target.removeSkill('hyym_chenzuiy');
                    }
                    target.$gain2(cards);
                    target.storage.hyym_lvdouzongzix = card;
                    target.storage.hyym_lvdouzongzix_markcount |= 0;
                    var pp = game.filterPlayer().length * 2;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_lvdouzongzix_markcount += pp;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_lvdouzongzix_markcount += pp + 1;
                    }
                    target.addSkill('hyym_lvdouzongzix');
                },
                ai: {
                    basic: {
                        order: 0.4,
                        value: 4,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            var num = 1;
                            if (target.isTurnedOver()) num += 3;
                            if (target.isLinked()) num += 2;
                            if (target.getExpansions('hyym_suishending_1').length) {
                                num += target.getExpansions('hyym_suishending_1').length * 1.5;
                            }
                            if (target.hasSkill('hyym_modujiaomengyanx')) {
                                num += 2;
                            }
                            if (target.hasSkill('hyym_hunyinx')) {
                                num += 0.1;
                            }
                            if (target.hasSkill('hyym_sheshenx')) {
                                num += 0.1;
                            }
                            if (target.hasSkill('hyym_zhongmaox')) {
                                num++;
                            }
                            if (target.hasSkill('hyym_jihanlingyux') && target.storage.hyym_jihanlingyux < 0) {
                                num += -target.storage.hyym_jihanlingyux;
                            }
                            if (target.hasSkill('hyym_zhimangzhuangtai') || target.hasSkill('hyym_zhimangzhuangtaired') || target.hasSkill('hyym_zhimangzhuangtaiblack')) {
                                num += 2;
                            }
                            if (target.hasSkill('hyym_bawangpaoxiaoheart') || target.hasSkill('hyym_bawangpaoxiaoclub') || target.hasSkill('hyym_bawangpaoxiaodiamond')) {
                                num += 2;
                            }
                            if (target.hasSkill('hyym_anxiangx')) {
                                num += target.countMark('hyym_anxiangx') * 4;
                            }
                            if (target.hasSkill('hyym_geliezhuangtai')) {
                                num += 4;
                            }
                            if (target.hasSkill('hyym_huimouyixiaoz')) {
                                num += 2;
                            }
                            if (target.hasSkill('hyym_bingjiex')) {
                                num++;
                            }
                            if (target.hasSkill('hyym_huangtiansuo') || target.hasSkill('hyym_tianfabiaoji')) {
                                num += 3;
                            }
                            if (target.hasSkill('hyym_huanxingqv')) {
                                num++;
                            }
                            if (target.hasSkill('hyym_chenzuix')) {
                                num += target.storage.hyym_chenzuix;
                            }
                            if (target.hasSkill('hyym_chenzuiy')) {
                                num += target.storage.hyym_chenzuiy * 2;
                            }
                            return num;
                        },
                    },
                },
            },
            hyym_qianxingbinggan: {
                type: 'hyym_shiwu',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_qianxingbinggan.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_qianxingbingganx = card;
                    target.storage.hyym_qianxingbingganx_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_qianxingbingganx_markcount += 3;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_qianxingbingganx_markcount += 4;
                    }
                    target.addSkill('hyym_qianxingbingganx');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 5.5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_youlingneilitang: {
                global: 'g_hyym_youlingneilitang',
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_youlingneilitang.png',
                enable: true,
                selectTarget: 1,
                filterTarget: true,
                content() {
                    target.draw(Math.min(target.hp, 4));
                    target.loseHp();
                },
                ai: {
                    basic: {
                        order() {
                            return 11.9;
                        },
                        useful: 4.5,
                        value: 7,
                    },
                    result: {
                        target(player, target) {
                            if (target == player && target.hasSkill('hyym_yihesu') && target.hp == 2) return 0.1;
                            else if (target == player && target.hasSkill('hyym_yihesu') && target.hp == 1 && player.storage.yihesu.includes('hyym_xiaomijiu') && !player.getStorage('hyym_yihesu_count').includes('hyym_xiaomijiu') && !target.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs')) return 3;
                            else return Math.min(target.hp, 4) - 2.3;
                        },
                    },
                },
            },
            hyym_youlingqixvetang: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_youlingqixvetang.png',
                enable: true,
                selectTarget: 1,
                filterTarget(card, player, target) {
                    return target.isDamaged();
                },
                content() {
                    'step 0';
                    target.recover();
                    ('step 1');
                    if (target.countCards('h') > target.hp)
                        target.chooseToDiscard(target.countCards('h') - target.hp, 'h', true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                },
                ai: {
                    basic: {
                        order: 2,
                        useful: 4.5,
                        value: 6,
                    },
                    result: {
                        target(player, target) {
                            if (target != player) {
                                if (target.countCards('h') <= target.hp + 1) return 2;
                                else return 2.1 - target.countCards('h') + target.hp + 1;
                            } else {
                                if (target.countCards('h') <= target.hp + 2) return 2;
                                else return 2.1 - target.countCards('h') + target.hp + 2;
                            }
                        },
                    },
                    tag: {
                        recover: 1,
                        huixie: true,
                    },
                },
            },
            hyym_biandabianxiaorou: {
                type: 'hyym_shiwu',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_biandabianxiaorou.png',
                enable: true,
                recastable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_biandabianxiaoroux = card;
                    target.storage.hyym_biandabianxiaoroux_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_biandabianxiaoroux_markcount += 7;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_biandabianxiaoroux_markcount += 8;
                    }
                    target.addSkill('hyym_biandabianxiaoroux');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 3,
                        useful: 3,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_baihuyupei: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_baihuyupei.png',
                global: 'g_hyym_baihuyupei',
                ai: {
                    basic: {
                        value(card, player) {
                            if (game.hasPlayer((play) => play != player && get.attitude(player, play) > 0 && play.hp + play.hujia > 1 && get.damageEffect(play, player, player) != 0)) return 7;
                            return 1;
                        },
                    },
                },
            },
            hyym_xingjiuling: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_xingjiuling.png',
                global: 'g_hyym_xingjiuling',
                ai: {
                    basic: {
                        value: 7,
                    },
                },
            },
            hyym_shenjunshi: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_shenjunshi.png',
                global: 'g_hyym_shenjunshi',
                ai: {
                    basic: {
                        value: 7,
                    },
                },
            },
            hyym_dilaoshuyanhua: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_dilaoshuyanhua.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && (!target.hasSkill('hyym_dilaoshuyanhuax') || !target.hasSkill('hyym_dilaoshuyanhuay'));
                },
                content() {
                    player.markSkill('hyym_dilaoshuyanhuax');
                    player.addSkill('hyym_dilaoshuyanhuax');
                    player.storage.hyym_dilaoshuyanhuax++;
                    player.markSkill('hyym_dilaoshuyanhuay');
                    player.addSkill('hyym_dilaoshuyanhuay');
                    player.storage.hyym_dilaoshuyanhuay++;
                },
                ai: {
                    basic: {
                        order() {
                            return get.order({ name: 'sha' }) + 0.1;
                        },
                        value: 4.5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_tanghulubaozhu: {
                type: 'hyym_daojv',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_tanghulubaozhu.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                content() {
                    'step 0';
                    var cards = [];
                    for (var i = 0; i < 3; i++) {
                        var card = get.cardPile((cardx) => {
                            return cards.filter((cardxx) => get.type2(cardxx) == get.type2(cardx)).length == 0;
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) target.gain(cards, 'gain2');
                    ('step 1');
                    if (target.isMaxHandcard())
                        target.chooseToDiscard(1, 'he', true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                },
                ai: {
                    basic: {
                        order: 14,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 3;
                        },
                    },
                },
            },
            hyym_qingdianyanhua: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_qingdianyanhua.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    'step 0';
                    if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                    var num = Math.min(player.getDamagedHp() || 1, game.players.length - 1);
                    var kk = game.filterPlayer((play) => play != player).randomGets(num);
                    player
                        .chooseTarget(false, [0, num], '是否对其中任意名角色各造成1点伤害', function (card, player, target) {
                            return kk.includes(target);
                        })
                        .set('ai', function (target) {
                            let player = _status.event.player;
                            if (player.hasSkill('hyym_biwushanghaitongji')) return 99;
                            else return get.attitude(player, target) < 0;
                        });
                    ('step 1');
                    if (result.targets?.length) {
                        event.target = result.targets.sortBySeat();
                    } else event.finish();
                    ('step 2');
                    for (var i = 0; i < event.target.length; i++) {
                        event.target[i].damage(event.baseDamage);
                    }
                },
                ai: {
                    basic: {
                        order(item, player) {
                            if (player.name == 'zhangbaohyym') return 0.1;
                            else return 8.5;
                        },
                        value: 6,
                        useful: [4, 1],
                    },
                    result: {
                        target(player, target) {
                            if (!game.hasPlayer((play) => get.damageEffect(play, player, player) > 0 && play != player && get.attitude(player, play) < 0)) return 0;
                            else return 2;
                        },
                    },
                    tag: {
                        damage: 1,
                    },
                },
            },
            hyym_shuaipao: {
                type: 'hyym_daojv',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_shuaipao.png',
                enable: true,
                range: { global: 1 },
                filterTarget(card, player, target) {
                    return target != player && player.hasEnabledSlot();
                },
                selectTarget: 1,
                content() {
                    'step 0';
                    player.chooseToDisable().ai = function (event, player, list) {
                        event.list1 = [];
                        event.list2 = [];
                        for (var i = 0; i < list.length; i++) {
                            event.list1.push(list[i]);
                            event.list2.push(list[i]);
                        }
                        if (player.hasCard(null, 'he')) {
                            for (var i = 1; i < 6; i++) {
                                if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                    list.remove('equip' + i);
                                }
                                if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                    event.list1.remove('equip' + i);
                                }
                            }
                        }
                        if (!!list.length) return list.randomGet();
                        else if (!!event.list1.length) return event.list1.randomGet();
                        else return event.list2.randomGet();
                    };
                    ('step 1');
                    if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                    ('step 2');
                    target.damage(event.baseDamage);
                },
                ai: {
                    basic: {
                        order: 8.5,
                        value() {
                            if (_status.event.player.hasEnabledSlot()) return 7.5;
                            else return 0;
                        },
                        useful() {
                            if (_status.event.player.hasEnabledSlot()) return 4;
                            else return 0;
                        },
                    },
                    result: {
                        player(player, target) {
                            if (player.name == 'nanhuaxianrenhyym' && player.hasEnabledSlot(1) && player.hasEnabledSlot(2) && player.hasEnabledSlot(3) && player.hasEnabledSlot(4) && player.hasEnabledSlot(5)) return -99;
                            else return 0;
                        },
                        target: -2,
                    },
                    tag: {
                        damage: 1,
                    },
                },
            },
            hyym_caocaomazhiwen: {
                type: 'hyym_daojv',
                fullborder: 'gold',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_caocaomazhiwen.png',
                enable: true,
                selectTarget: 1,
                recastable: true,
                filterTarget(card, player, target) {
                    return game.filterPlayer((play) => play.name == 'caocaomahyym').length == 0 && target.hp < player.hp;
                },
                content() {
                    if (_status.characterlist && _status.characterlist.includes('caocaomahyym')) {
                        target.storage.hyym_caocaomazhiwen = target.name;
                        target.storage.bianhuimingzi = get.translation(target);
                        target.reinit(target.name, 'caocaomahyym', false);
                        _status.characterlist.remove('caocaomahyym');
                        _status.characterlist.add(target.name);
                        target.addMark('hyym_bianhuilai');
                        target.addSkill('hyym_bianhuilai');
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 6,
                    },
                    order() {
                        return get.order({ name: 'sha' }) + 0.5;
                    },
                    result: {
                        target: -2,
                    },
                },
            },
            hyym_beibaokuozhanmoka: {
                type: 'hyym_daojv',
                fullborder: 'bronze',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_beibaokuozhanmoka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    player.$gain2(cards);
                    player.storage.hyym_beibaokuozhanmokax = card;
                    player.storage.hyym_moka = card;
                    player.storage.hyym_beibaokuozhanmokax_markcount |= 0;
                    if (player.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) player.storage.hyym_beibaokuozhanmokax_markcount += 3;
                    else {
                        game.log(player, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        player.storage.hyym_beibaokuozhanmokax_markcount += 4;
                    }
                    player.storage.hyym_moka_markcount |= 0;
                    player.storage.hyym_moka_markcount++;
                    player.addSkill('hyym_beibaokuozhanmokax');
                    player.addSkill('hyym_beibaokuozhanmokax_use');
                },
                ai: {
                    basic: {
                        order: 5,
                        value: 6,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 3;
                        },
                    },
                },
            },
            hyym_gptiyanka: {
                type: 'hyym_daojv',
                fullborder: 'bronze',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_gptiyanka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    player.$gain2(cards);
                    player.storage.hyym_gptiyankax = card;
                    player.storage.hyym_gptiyan = card;
                    player.storage.hyym_gptiyankax_markcount |= 0;
                    if (player.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) player.storage.hyym_gptiyankax_markcount += 3;
                    else {
                        game.log(player, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        player.storage.hyym_gptiyankax_markcount += 4;
                    }
                    player.storage.hyym_gptiyan_markcount |= 0;
                    player.storage.hyym_gptiyan_markcount++;
                    player.addSkill('hyym_gptiyankax');
                },
                ai: {
                    basic: {
                        order() {
                            return get.order({ name: 'jiu' }) + 0.15;
                        },
                        value: 7.5,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 3;
                        },
                    },
                },
            },
            hyym_wangwangdalibao: {
                type: 'hyym_daojv',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_wangwangdalibao.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    var list = get.inpile('hyym_shiwu');
                    var list2 = [];
                    for (var i = 0; i < 1; i++) {
                        list2.push(game.createCard(list.randomGet(), lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1));
                    }
                    player.gain(list2, 'gain2');
                },
                ai: {
                    basic: {
                        order: 12,
                        value: 6,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_longdan: {
                type: 'hyym_daojv',
                fullborder: 'silver',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_longdan.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    var list = get.inpile('hyym_longbing');
                    var list2 = [];
                    for (var i = 0; i < 1; i++) {
                        list2.push(game.createCard(list.randomGet(), lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1));
                    }
                    player.gain(list2, 'gain2');
                },
                ai: {
                    basic: {
                        order: 12,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_jinhulu: {
                type: 'hyym_daojv',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_jinhulu.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    var list = get.inpile('hyym_yaopin');
                    var list2 = [];
                    for (var i = 0; i < 1; i++) {
                        list2.push(game.createCard(list.randomGet(), lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1));
                    }
                    player.gain(list2, 'gain2');
                },
                ai: {
                    basic: {
                        order: 12,
                        value: 6,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_daojvdai: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_daojvdai.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    var list = get.inpile('hyym_daojv');
                    var list2 = [];
                    for (var i = 0; i < 1; i++) {
                        list2.push(game.createCard(list.randomGet(), lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1));
                    }
                    player.gain(list2, 'gain2');
                },
                ai: {
                    basic: {
                        order: 12,
                        value: 6,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_fuhuobi: {
                type: 'hyym_daojv',
                fullskin: true,
                notarget: true,
                fullborder: 'gold',
                global: 'g_hyym_fuhuobi',
                image: 'ext:桃源幻梦/image/card/hyym_fuhuobi.png',
                filterTarget(card, player, target) {
                    return player == target;
                },
                content() {
                    event.getParent('die').cancel();
                    player.recover(1 - player.hp);
                    player.update();
                },
                ai: {
                    basic: {
                        useful() {
                            return 8;
                        },
                        value: 8,
                    },
                    order: 6,
                    result: {
                        target: 3,
                    },
                    tag: {
                        recover: 1,
                        save: 1,
                    },
                },
            },
            hyym_maomaoshendejuangu: {
                type: 'hyym_daojv',
                fullborder: 'silver',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_maomaoshendejuangu.png',
                global: 'g_hyym_maomaoshendejuangu',
                notarget: true,
                filterTarget(card, player, target) {
                    return player == target;
                },
                content() {
                    'step 0';
                    player.recover(Math.min(game.countGroup(), 3));
                    player.draw(Math.min(game.countGroup(), 3));
                    event.num = Math.min(game.countGroup(), 3);
                    ('step 1');
                    if (player.hasEnabledSlot()) {
                        player.chooseToDisable().ai = function (event, player, list) {
                            event.list1 = [];
                            event.list2 = [];
                            for (var i = 0; i < list.length; i++) {
                                event.list1.push(list[i]);
                                event.list2.push(list[i]);
                            }
                            if (player.hasCard(null, 'he')) {
                                for (var i = 1; i < 6; i++) {
                                    if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                        list.remove('equip' + i);
                                    }
                                    if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                        event.list1.remove('equip' + i);
                                    }
                                }
                            }
                            if (!!list.length) return list.randomGet();
                            else if (!!event.list1.length) return event.list1.randomGet();
                            else return event.list2.randomGet();
                        };
                        event.num--;
                    } else event.finish();
                    ('step 2');
                    if (event.num > 0) event.goto(1);
                },
                ai: {
                    basic: {
                        useful() {
                            if (_status.event.player.hp > 1) return 7.4;
                            else return 5;
                        },
                        value: 8,
                    },
                    order: 6,
                    result: {
                        target(player, target) {
                            return Math.min(Math.min(game.countGroup(), 3), target.maxHp - target.hp) * 2 + Math.min(game.countGroup(), 3);
                        },
                    },
                    tag: {
                        recover() {
                            let target = _status.event.player;
                            return Math.min(Math.min(game.countGroup(), 3), target.maxHp - target.hp);
                        },
                    },
                },
            },
            hyym_maomaoshendezhufu: {
                type: 'hyym_daojv',
                fullborder: 'wood',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_maomaoshendezhufu.png',
                enable: true,
                filterTarget(card, player, target) {
                    return true;
                },
                recastable() {
                    return game.countPlayer() <= 2;
                },
                content() {
                    target.$gain2(cards);
                    target.storage.hyym_maomaoshendezhufux = card;
                    target.storage.hyym_maomaoshendezhufux_markcount |= 0;
                    if (target.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) target.storage.hyym_maomaoshendezhufux_markcount += 2;
                    else {
                        game.log(target, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        target.storage.hyym_maomaoshendezhufux_markcount += 3;
                    }
                    target.addSkill('hyym_maomaoshendezhufux');
                },
                ai: {
                    basic: {
                        order: 7,
                        value: 5,
                        useful: 4,
                    },
                    result: {
                        target(player, target) {
                            if (game.countPlayer() <= 2) return 0;
                            else return 2;
                        },
                    },
                },
            },
            hyym_huangquanxingshu: {
                type: 'hyym_daojv',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_huangquanxingshu.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && ((!target.hasSkill('hyym_shouhu') && !target.storage.hyym_shouhujilu) || (!target.hasSkill('hyym_fangzhu') && !target.storage.hyym_fangzhujilu));
                },
                recastable: true,
                content() {
                    'step 0';
                    if ((player.hasSkill('hyym_shouhu') || player.storage.hyym_shouhujilu) && !target.hasSkill('hyym_fangzhu') && !target.storage.hyym_fangzhujilu) player.addSkill('hyym_fangzhu');
                    else if ((player.hasSkill('hyym_fangzhu') || player.storage.hyym_fangzhujilu) && !target.hasSkill('hyym_shouhu') && !target.storage.hyym_shouhujilu) player.addSkill('hyym_shouhu');
                    else {
                        (list = ['【放逐(行者)】', '【守护(行者)】']),
                            (list1 = ['【放逐(行者)】限定技,当你受到一名距离为1的其他角色造成的伤害后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以弃一张牌,对其造成1点伤害.', '【守护(行者)】限定技,当你的体力值减小后,若你的体力值不大于x(x为你体力上限的一半,且向下取整),则你可以令你下回合结束前受到的第一次伤害无效.']),
                            player
                                .chooseControl(list)
                                .set('ai', function () {
                                    if (player.name == 'guanxinghyym' && list.includes('【放逐(行者)】')) return '【放逐(行者)】';
                                    else if (
                                        game.hasPlayer(function (current) {
                                            var player = _status.event.player;
                                            return get.distance(player, current) <= 1 && get.attitude(player, current) < 0;
                                        }) &&
                                        list.includes('【放逐(行者)】')
                                    )
                                        return '【放逐(行者)】';
                                    else if (list.includes('【守护(行者)】')) return '【守护(行者)】';
                                    else if (list.includes('【放逐(行者)】')) return '【放逐(行者)】';
                                })
                                .set('choiceList', list1)
                                .set('prompt', '行者解放:选择并获得一个技能:');
                    }
                    ('step 1');
                    event.control = result.control;
                    if (event.control == '【放逐(行者)】') {
                        player.addSkill('hyym_fangzhu');
                        player.storage.hyym_fangzhujilu = true;
                    } else {
                        player.addSkill('hyym_shouhu');
                        player.storage.hyym_shouhujilu = true;
                    }
                },
                ai: {
                    basic: {
                        order: 8,
                        value: 6,
                        useful: 5,
                    },
                    result: {
                        player(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_lieyanbawanglongka: {
                type: 'hyym_longbing',
                fullskin: true,
                fullborder: 'silver',
                image: 'ext:桃源幻梦/image/card/hyym_lieyanbawanglongka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_lieyanbawangka') && !target.hasSkill('hyym_lieyanbawangkax');
                },
                recastable: true,
                content() {
                    player.addSkill('hyym_liuxinghuoyu');
                    player.markSkill('hyym_lieyanbawangka');
                    player.addSkill('hyym_lieyanbawangka');
                    player.storage.hyym_lieyanbawangka++;
                },
                ai: {
                    basic: {
                        order: 11,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            if (!target.hasSkill('hyym_liuxinghuoyu') && !target.storage.hyym_liuxinghuoyujilu) return 2;
                            else if (target.name == 'guanxinghyym') return 2;
                            else return 0;
                        },
                    },
                },
            },
            hyym_qingxuntudulongka: {
                type: 'hyym_longbing',
                fullskin: true,
                fullborder: 'silver',
                image: 'ext:桃源幻梦/image/card/hyym_qingxuntudulongka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_jingtianjidi');
                },
                recastable: true,
                content() {
                    player.addSkill('hyym_jingtianjidi');
                    player.markSkill('hyym_qingxuntuduka');
                    player.addSkill('hyym_qingxuntuduka');
                    player.storage.hyym_qingxuntuduka++;
                },
                ai: {
                    basic: {
                        order: 11,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_xuanhuangbawanglongka: {
                type: 'hyym_longbing',
                fullborder: 'silver',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_xuanhuangbawanglongka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_bowen');
                },
                recastable: true,
                content() {
                    player.addSkill('hyym_bowen');
                    player.markSkill('hyym_xuanhuangbawangka');
                    player.addSkill('hyym_xuanhuangbawangka');
                    player.storage.hyym_xuanhuangbawangka++;
                },
                ai: {
                    basic: {
                        order: 11,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            hyym_biyingtudulongka: {
                type: 'hyym_longbing',
                fullskin: true,
                fullborder: 'silver',
                image: 'ext:桃源幻梦/image/card/hyym_biyingtudulongka.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player && !target.hasSkill('hyym_biyingtuduka') && !target.hasSkill('hyym_biyingtudukax');
                },
                recastable: true,
                content() {
                    player.addSkill('hyym_jinzhixveyu');
                    player.markSkill('hyym_biyingtuduka');
                    player.addSkill('hyym_biyingtuduka');
                    player.storage.hyym_biyingtuduka++;
                },
                ai: {
                    basic: {
                        order: 11,
                        value: 7,
                        useful: 5,
                    },
                    result: {
                        target(player, target) {
                            if (!target.hasSkill('hyym_jinzhixveyu') && !target.storage.hyym_jinzhixveyujilu) return 2;
                            else if (target.name == 'guanxinghyym') return 2;
                            else return 0;
                        },
                    },
                },
            },
            hyym_ceshiyongjiangmingzhong: {
                type: 'trick',
                fullskin: true,
                fullborder: 'bronze',
                image: 'ext:桃源幻梦/image/card/hyym_ceshiyongjiangmingzhong.png',
                enable: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_zhimangzhuangtai') && target != player;
                },
                content() {
                    if (target.hasSkill('hyym_lvdouzongzix')) {
                        game.log(target, '因【绿豆粽子】免疫了异常状态');
                        event.finish();
                    } else {
                        target.addMark('hyym_zhimangzhuangtai');
                        target.addSkill('hyym_zhimangzhuangtai');
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 7.5,
                    },
                    order: 2,
                    result: {
                        target(player, target) {
                            if (target.hasSkill('hyym_lvdouzongzix')) return 0;
                            else if (target.hasSkill('hyym_qingnangbaodian')) return -0.5;
                            else return -2;
                        },
                    },
                },
            },
            hyym_jianguotouzi: {
                type: 'trick',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_jianguotouzi.png',
                enable: true,
                filterTarget(card, player, target) {
                    return !target.hasSkill('hyym_jianguotouzix') && target != player;
                },
                content() {
                    'step 0';
                    if (player.countCards('he') > 0)
                        player.chooseCard('he', true, 1, `建国投资:选择交给${get.translation(target)}一张牌`).set('ai', function (card) {
                            if (card.name == 'hyym_baihuyupei') return 1;
                            return 18 - get.value(card);
                        });
                    ('step 1');
                    player.give(result.cards, target);
                    target.storage.jianguo = player;
                    target.storage.hyym_jianguotouzix = game.createCard('hyym_jianguotouzi');
                    target.addSkill('hyym_jianguotouzix');
                    if (cards && cards.length) {
                        card = cards[0];
                    }
                },
                ai: {
                    basic: {
                        useful: 6,
                        value: 7.5,
                    },
                    order: 0.2,
                    result: {
                        player: 2.5,
                        target: 0.5,
                    },
                },
            },
            hyym_zhanguilaixi: {
                type: 'trick',
                fullskin: true,
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_zhanguilaixi.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target != player;
                },
                reverseOrder: true,
                content() {
                    'step 0';
                    if (target.hasClan('战鬼族')) {
                        target.draw();
                        event.finish();
                    } else {
                        if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                        if (event.directHit) event._result = { bool: false };
                        else {
                            var next = target.chooseToDiscard('he', '弃置一张非基本牌,或失去1点体力', (card) => get.type(card, 'trick') != 'basic');
                            next.set('ai', function (card) {
                                return 10 - get.value(card);
                            });
                        }
                    }
                    ('step 1');
                    if (result.bool == false) {
                        target.loseHp();
                    }
                },
                ai: {
                    wuxie(target, card, player, viewer) {
                        if (!target.hasClan('战鬼族') && get.attitude(viewer, target) > 0 && target.countCards('h', (card) => get.type(card, 'trick') != 'basic')) {
                            if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                        }
                    },
                    basic: {
                        order: 9,
                        useful: [5, 1],
                        value: 5,
                    },
                    result: {
                        target_use(player, target) {
                            if (target.hasClan('战鬼族')) {
                                return 1;
                            } else {
                                if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                var nh = target.countCards('h');
                                if (get.mode() == 'identity') {
                                    if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                }
                                if (nh == 0) return -2;
                                if (nh == 1) return -1.7;
                                return -1.5;
                            }
                        },
                        target(player, target) {
                            if (target.hasClan('战鬼族')) {
                                return 1;
                            } else {
                                var nh = target.countCards('h');
                                if (get.mode() == 'identity') {
                                    if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                }
                                if (nh == 0) return -2;
                                if (nh == 1) return -1.7;
                                return -1.5;
                            }
                        },
                    },
                    tag: {
                        respond: 1,
                        multitarget: 1,
                        multineg: 1,
                    },
                },
            },
            hyym_biwudahui: {
                type: 'trick',
                enable: true,
                recastable: true,
                fullskin: true,
                fullborder: 'bronze',
                image: 'ext:桃源幻梦/image/card/hyym_biwudahui.png',
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return player == target;
                },
                content() {
                    'step 0';
                    event.tar = game.players;
                    event.list1 = [];
                    event.list2 = [];
                    event.list3 = [];
                    event.list = [];
                    event.list4 = [];
                    event.list5 = ['【孤独求败】锁定技,出牌阶段开始/结束时,你摸两张牌.', '【傲视群雄】锁定技,你跳过判定阶段和弃牌阶段,你于出牌阶段内首次造成的伤害+1.', '【横扫千军】锁定技,你于出牌阶段内使用牌无距离限制且不可被响应.'];
                    event.num = 0;
                    event.num1 = 0;
                    event.num2 = 0;
                    event.num3 = 0;
                    event.num4 = 0;
                    event.num5 = 0;
                    event.num6 = 0;
                    event.num7 = 0;
                    event.num8 = 0;
                    event.num9 = 1;
                    game.addGlobalSkill('hyym_biwudahuibusi');
                    ('step 1');
                    event.tar[event.num].storage.hyym_biwudahui = event.tar[event.num].hp;
                    event.tar[event.num].chooseBool('是否参加<比武大会>？').set('ai', function () {
                        if (event.tar[event.num].hasCard((card) => get.tag(card, 'damage') > 0.5) || ['caocaohyym', 'huanggaihyym', 'mozhangjiaohyym', 'taishicihyym', 'yangxiuhyym', 'xiaoqiaoyoulinggongzhu'].includes(event.tar[event.num].name)) return true;
                        else return false;
                    });
                    ('step 2');
                    if (result.bool) {
                        event.list1.push(event.tar[event.num]);
                        event.list3.push(event.tar[event.num]);
                        event.tar[event.num].storage.biwushanghai = 0;
                    } else {
                        event.list2.push(event.tar[event.num]);
                        event.tar[event.num].addMark('hyym_diaohulishan');
                        event.tar[event.num].addSkill('hyym_diaohulishan');
                    }
                    event.num++;
                    if (event.num < event.tar.length) {
                        event.goto(1);
                    }
                    ('step 3');
                    if (event.list1.length && event.num9 == 1) game.log(`<比武大会>开启,<比武大会>第${event.num9}轮开始!`);
                    else if (event.list1.length && event.num9 > 1) game.log(`<比武大会>第${event.num9}轮开始!`);
                    else event.goto(22);
                    ('step 4');
                    event.list1[event.num1].storage.jixvbiwu = 0;
                    event.list1[event.num1].addSkill('hyym_biwushanghaitongji');
                    event.list1[event.num1].markSkill('hyym_biwushanghaitongji');
                    ('step 5');
                    event.num1++;
                    if (event.num1 < event.list1.length) {
                        event.goto(4); /* game.me.gain(get.cardPile('hyym_biwudahui'),'gain2') */
                    }
                    ('step 6');
                    event.num1 = 0;
                    ('step 7');
                    event.list1[event.num1]
                        .chooseToUse(function (card, player, event) {
                            if (!(get.tag(card, 'damage') > 0.5)) return false;
                            return lib.filter.filterCard.apply(this, arguments);
                        }, '比武大会:是否使用一张伤害牌并摸一张牌？')
                        .set('ai2', function (target) {
                            let player = _status.event.player;
                            if (get.attitude(player, target) > 0 && !target.hasMark('hyym_zhuangshengmengdie')) return 99;
                            else return 0.1;
                        });
                    ('step 8');
                    if (result.bool) event.list1[event.num1].draw();
                    event.num1++;
                    if (event.num1 < event.list1.length) {
                        event.goto(7);
                    }
                    ('step 9');
                    event.tar[event.num2].hp = event.tar[event.num2].storage.hyym_biwudahui;
                    event.tar[event.num2].update();
                    event.num2++;
                    ('step 10');
                    if (event.num2 < event.tar.length) {
                        event.goto(9);
                    }
                    ('step 11');
                    if (event.list3[event.num3].storage.jixvbiwu == 0 && event.list1.includes(event.list3[event.num3])) {
                        event.list1.remove(event.list3[event.num3]);
                        event.list2.push(event.list3[event.num3]);
                        event.list3[event.num3].addMark('hyym_diaohulishan');
                        event.list3[event.num3].addSkill('hyym_diaohulishan');
                        event.list3[event.num3].storage.jixvbiwu = 0;
                        event.list3[event.num3].removeMark('hyym_biwushanghaitongji');
                        event.list3[event.num3].removeSkill('hyym_biwushanghaitongji');
                    }
                    event.num3++;
                    ('step 12');
                    if (event.num3 < event.list3.length) {
                        event.goto(11);
                    }
                    ('step 13');
                    if (game.filterPlayer((play) => play.storage.jixvbiwu > 0).length > 1) {
                        event.num1 = 0;
                        event.num2 = 0;
                        event.num3 = 0;
                        event.num9++;
                        event.goto(3);
                    }
                    ('step 14');
                    event.list.push(event.list3[event.num4].storage.biwushanghai);
                    event.num4++;
                    ('step 15');
                    if (event.num4 < event.list3.length) {
                        event.goto(14);
                    }
                    ('step 16');
                    game.log('<比武大会>圆满结束!');
                    event.kk = Math.max(...event.list);
                    if (event.kk == 0) event.goto(22);
                    ('step 17');
                    if (event.list3[event.num5].storage.biwushanghai == event.kk) event.list4.push(event.list3[event.num5]);
                    event.num5++;
                    ('step 18');
                    if (event.num5 < event.list3.length) {
                        event.goto(17);
                    }
                    ('step 19');
                    event.list6 = [];
                    if (!game.hasPlayer((play) => play.hasSkill('hyym_guduqiubai'))) event.list6.push('孤独求败');
                    if (!game.hasPlayer((play) => play.hasSkill('hyym_aoshiqunxiong'))) event.list6.push('傲视群雄');
                    if (!game.hasPlayer((play) => play.hasSkill('hyym_hengsaoqianjun'))) event.list6.push('横扫千军');
                    if (event.list6.length) event.list4[event.num6].chooseControl(event.list6).set('choiceList', event.list5).set('prompt', '请选择并获得以下一个技能直到你下回合结束:');
                    else event.goto(22);
                    ('step 20');
                    event.control = result.control;
                    if (event.control == '孤独求败') {
                        event.list4[event.num6].addMark('hyym_guduqiubai');
                        event.list4[event.num6].addMark('hyym_guduqiubaixiaochu');
                        event.list4[event.num6].addSkill('hyym_guduqiubai');
                        event.list4[event.num6].addSkill('hyym_guduqiubaixiaochu');
                    } else if (event.control == '傲视群雄') {
                        event.list4[event.num6].addMark('hyym_aoshiqunxiong');
                        event.list4[event.num6].addMark('hyym_aoshiqunxiongxiaochu');
                        event.list4[event.num6].addSkill('hyym_aoshiqunxiong');
                        event.list4[event.num6].addSkill('hyym_aoshiqunxiongxiaochu');
                    } else {
                        event.list4[event.num6].addMark('hyym_hengsaoqianjun');
                        event.list4[event.num6].addMark('hyym_hengsaoqianjunxiaochu');
                        event.list4[event.num6].addSkill('hyym_hengsaoqianjun');
                        event.list4[event.num6].addSkill('hyym_hengsaoqianjunxiaochu');
                    }
                    event.num6++;
                    ('step 21');
                    if (event.num6 < event.list4.length) {
                        event.goto(19);
                    }
                    ('step 22');
                    if (event.list3[event.num7] && event.list3[event.num7].isIn() && event.list3[event.num7].hasSkill('hyym_biwushanghaitongji')) {
                        event.list3[event.num7].removeMark('hyym_biwushanghaitongji');
                        event.list3[event.num7].removeSkill('hyym_biwushanghaitongji');
                    }
                    event.num7++;
                    ('step 23');
                    if (event.num7 < event.list3.length) {
                        event.goto(22);
                    }
                    ('step 24');
                    if (event.list2[event.num8].isIn() && event.list2[event.num8].hasSkill('hyym_diaohulishan')) {
                        event.list2[event.num8].removeMark('hyym_diaohulishan');
                        event.list2[event.num8].removeSkill('hyym_diaohulishan');
                    }
                    event.num8++;
                    ('step 25');
                    if (event.num8 < event.list2.length) {
                        event.goto(24);
                    }
                    ('step 26');
                    game.removeGlobalSkill('hyym_biwudahuibusi');
                },
                ai: {
                    basic: {
                        useful: 5,
                        value: 6,
                    },
                    order: 8,
                    result: {
                        player(player, target) {
                            if (player.hasCard((card) => get.tag(card, 'damage') > 0.5, 'hs') && game.filterPlayer((play) => play != player && get.attitude(play, player) > 0 && play.countCards('h') > 0).length) return 2;
                            else return 0;
                        },
                    },
                },
            },
            hyym_tianjiangbaoxiang: {
                type: 'trick',
                fullborder: 'bronze',
                image: 'ext:桃源幻梦/image/card/hyym_tianjiangbaoxiang.png',
                enable: true,
                fullskin: true,
                filterTarget(card, player, target) {
                    return target.countCards('he') > 0;
                },
                selectTarget: [1, 3],
                content() {
                    'step 0';
                    target.chooseToDiscard(1, 'he', false, '你可弃一张牌并发现一张道具牌').set('ai', (card) => {
                        return 6 - get.value(card);
                    });
                    ('step 1');
                    if (result.cards?.length) {
                        target.discoverCard(get.inpile('hyym_daojv'), lib.suit.randomGet(), Math.floor(Math.random() * 13) + 1);
                    }
                },
                ai: {
                    basic: {
                        useful: 5,
                        value: 6,
                    },
                    order: 2,
                    result: {
                        target(player, target, card) {
                            if (card.cards) {
                                if (target == player && target.hasCard((car) => get.value(car) < 6 && car.cardid != /* kk */ card.cardid, 'he')) return 1;
                                else if (target != player) return 1;
                                else return 0;
                            } else return 1;
                        },
                    },
                },
            },
            hyym_zhengzhan: {
                type: 'trick',
                fullborder: 'wood',
                image: 'ext:桃源幻梦/image/card/hyym_zhengzhan.png',
                fullskin: true,
                enable(card, player) {
                    return game.hasPlayer((play) => play != player && player.canUse('sha', play, false, false));
                },
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                selectTarget: -1,
                content() {
                    'step 0';
                    player.storage.zhengzhan = 2;
                    ('step 1');
                    event.tar = game.filterPlayer((play) => play != player && player.canUse('sha', play, false, false)).randomGet();
                    target.useCard({ name: 'sha' }, event.tar, false);
                    player.addSkill('hyym_zhengzhan1');
                    event.tar.addSkill('hyym_zhengzhan2');
                    ('step 2');
                    player.removeSkill('hyym_zhengzhan1');
                    event.tar.removeSkill('hyym_zhengzhan2');
                    if (player.countCards('he') > 0 && player.storage.zhengzhan > 0 && game.countPlayer() > 2 && game.hasPlayer((play) => play != player && player.canUse('sha', play, false, false))) {
                        player.chooseBool('是否弃一张牌,重复此流程？').set('ai', function () {
                            return player.hasCard((card) => get.value(card) < 6, 'he');
                        });
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    if (result.bool) {
                        player.chooseToDiscard('he', 1, true).set('ai', (card) => {
                            return 10 - get.value(card);
                        });
                        player.storage.zhengzhan--;
                        event.goto(1);
                    }
                },
                ai: {
                    value: 6,
                    result: {
                        target(player, target) {
                            if (game.filterPlayer((play) => play != target && target.canUse('sha', play, false, false) && get.effect(play, { name: 'sha' }, target, target) > 0).length) return 2;
                            else return 0;
                        },
                    },
                    order() {
                        return get.order({ name: 'sha' }) + 0.01;
                    },
                },
            },
            hyym_F5: {
                type: 'trick',
                fullborder: 'silver',
                fullskin: true,
                global: 'g_hyym_F5',
                image: 'ext:桃源幻梦/image/card/hyym_F5.png',
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return player == target;
                },
                notarget: true,
                content() {
                    'step 0';
                    if (_status.event.getParent(6).player != player) {
                        player.loseHp();
                        _status.event.getParent(7).excluded.add(player);
                    }
                    ('step 1');
                    var evt = _status.event.getParent('phaseUse');
                    if (evt && evt.name == 'phaseUse') {
                        evt.skipped = true;
                    }
                    var evt = _status.event.getParent('phase');
                    if (evt && evt.name == 'phase') {
                        evt.finish();
                    }
                },
                ai: {
                    basic: {
                        useful() {
                            if (_status.event.player.hp < 2) return 0;
                            return 8;
                        },
                        value: 8,
                    },
                    order: 9,
                    result: {
                        target(player, target) {
                            if (player.hp < 2) return -1;
                            else return 1;
                        },
                    },
                },
            },
            hyym_shenmililiang: {
                type: 'trick',
                fullborder: 'silver',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_shenmililiang.png',
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                content() {
                    'step 0';
                    player
                        .chooseTarget(true, '请选择一名其他角色', function (card, player, target) {
                            return !target.hasSkill('hyym_shenmililiangx') && target != player;
                        })
                        .set('ai', function (target) {
                            if (get.attitude(player, target) > 0) return false;
                            return target.countCards('h');
                        }).animate = false;
                    ('step 1');
                    if (result.bool) {
                        result.targets[0].addSkill('hyym_shenmililiangx');
                    }
                },
                ai: {
                    basic: {
                        order: 4,
                        value: 7,
                        useful: 6,
                    },
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            hyym_nanguachui: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['hyym_nanguachui1'],
                fullborder: 'bronze',
                fullskin: true,
                distance: { attackFrom: -2 },
                image: 'ext:桃源幻梦/image/card/hyym_nanguachui.png',
            },
            hyym_liuyun: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['hyym_liuyun1'],
                fullborder: 'bronze',
                fullskin: true,
                distance: { attackFrom: -3 },
                image: 'ext:桃源幻梦/image/card/hyym_liuyun.png',
            },
            hyym_moyanjvpao: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['hyym_moyanjvpao1'],
                fullborder: 'bronze',
                distance: { attackFrom: -11 },
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_moyanjvpao.png',
            },
            hyym_danjiancard: {
                type: 'equip',
                subtype: 'equip1',
                skills: ['hyym_danjian1'],
                fullborder: 'bronze',
                fullskin: true,
                image: 'ext:桃源幻梦/image/card/hyym_danjiancard.png',
            },
            hyym_gphone: {
                image: 'ext:桃源幻梦/image/card/hyym_gphone.png',
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['hyym_gphonex'],
                ai: {
                    basic: {
                        equipValue: 8,
                    },
                },
            },
        },
        skill: {
            hyym_yijiqixveshangxian: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '限',
                intro: {
                    name: '1级气血上限药',
                    content: '下回合结束时,减1点体力上限并回复1点体力.',
                },
                content() {
                    player.addSkill('hyym_yijiqixveshangxianx');
                    player.markSkill('hyym_yijiqixveshangxianx');
                    player.storage.hyym_yijiqixveshangxianx++;
                    player.removeMark('hyym_yijiqixveshangxian');
                    player.removeSkill('hyym_yijiqixveshangxian');
                },
            },
            hyym_yijiqixveshangxianx: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '限',
                intro: {
                    name: '1级气血上限药',
                    content: '下回合结束时,减1点体力上限并回复1点体力.',
                },
                content() {
                    player.loseMaxHp();
                    player.recover();
                    player.removeMark('hyym_yijiqixveshangxianx');
                    player.removeSkill('hyym_yijiqixveshangxianx');
                },
            },
            hyym_sanjiqixveshangxian: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '限',
                intro: {
                    name: '3级气血上限药',
                    content: '下回合结束时,失去3点体力并减3点体力上限.',
                },
                content() {
                    player.addSkill('hyym_sanjiqixveshangxianx');
                    player.markSkill('hyym_sanjiqixveshangxianx');
                    player.storage.hyym_sanjiqixveshangxianx++;
                    player.removeMark('hyym_sanjiqixveshangxian');
                    player.removeSkill('hyym_sanjiqixveshangxian');
                },
            },
            hyym_sanjiqixveshangxianx: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '限',
                intro: {
                    name: '3级气血上限药',
                    content: '下回合结束时,失去3点体力并减3点体力上限.',
                },
                content() {
                    player.loseHp(3);
                    player.loseMaxHp(3);
                    player.removeMark('hyym_sanjiqixveshangxianx');
                    player.removeSkill('hyym_sanjiqixveshangxianx');
                },
            },
            hyym_yijigongji: {
                trigger: { player: 'useCard' },
                forced: true,
                filter(event, player) {
                    return event.card && event.cards.length && get.tag(event.card, 'damage') > 0.5 && event.card.number >= player.storage.hyym_yijigongjiyao;
                },
                mark: true,
                marktext: '攻',
                intro: {
                    name: '1级攻击药',
                    content(storage, player) {
                        var kk = player.storage.hyym_yijigongjiyao;
                        return `使用的下一张点数不小于${kk}的伤害牌伤害基数+1.`;
                    },
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_yijigongjiyao.mp3');
                    game.log(player, '触发了【1级攻击药】');
                    player.storage.hyym_yijigongjiyao = 0;
                    trigger.baseDamage++;
                    player.removeMark('hyym_yijigongji');
                    player.removeSkill('hyym_yijigongji');
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (typeof card === 'string') return;
                            else if (card.number && get.tag(card, 'damage') > 0.5 && card.number >= player.storage.hyym_yijigongjiyao) return [1, 1];
                        },
                    },
                },
            },
            hyym_yijifangyu: {
                trigger: { target: 'useCardToTargeted' },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.card && event.cards.length && event.card.number <= player.storage.hyym_yijifangyuyao && get.tag(event.card, 'damage') > 0.5;
                },
                intro: {
                    name: '1级防御药',
                    content(storage, player) {
                        var kk = player.storage.hyym_yijifangyuyao;
                        return `下一张其他角色指定${get.translation(player)}为目标的点数不大于${kk}的伤害牌对${get.translation(player)}无效.`;
                    },
                },
                mark: true,
                marktext: '防',
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_yijifangyuyao.mp3');
                    game.log(player, '触发了【1级防御药】');
                    player.storage.hyym_yijifangyuyao = 0;
                    trigger.parent.excluded.add(player);
                    player.removeMark('hyym_yijifangyu');
                    player.removeSkill('hyym_yijifangyu');
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.number && get.tag(card, 'damage') > 0.5 && card.number <= player.storage.hyym_yijifangyuyao) return [0, -1];
                        },
                    },
                },
            },
            hyym_guihuajiux: {
                mark: true,
                marktext: '桂',
                intro: {
                    content: '下次进入濒死状态时摸两张牌.',
                },
                trigger: { player: 'dying' },
                forced: true,
                _priority: 6.1,
                filter(event, player) {
                    return player.hp <= 0;
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_guihuajiu.mp3');
                    player.draw(2);
                    player.removeSkill('hyym_guihuajiux');
                },
            },
            hyym_nverhongx: {
                trigger: { player: 'useCard' },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && get.tag(event.card, 'damage') > 0.5;
                },
                mark: true,
                marktext: '女',
                intro: {
                    name: '女儿红',
                    content(storage, player) {
                        return '使用的下一张【杀】的伤害基数+1';
                    },
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_nverhong.mp3');
                    game.log(player, '触发了【女儿红】');
                    trigger.baseDamage++;
                    player.removeMark('hyym_nverhongx');
                    player.removeSkill('hyym_nverhongx');
                },
            },
            hyym_longjijiux: {
                trigger: { player: 'useCard' },
                forced: true,
                filter(event, player) {
                    return event.card && get.type(event.card, 'trick') == 'trick' && get.tag(event.card, 'damage') > 0.5;
                },
                mark: true,
                marktext: '龙',
                intro: {
                    name: '龙极酒',
                    content(storage, player) {
                        return '使用的下一张伤害锦囊牌的伤害基数+1.';
                    },
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_longjijiu.mp3');
                    game.log(player, '触发了【龙极酒】');
                    trigger.baseDamage++;
                    player.removeMark('hyym_longjijiux');
                    player.removeSkill('hyym_longjijiux');
                },
            },
            hyym_jindingjiux: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return true;
                },
                mark: true,
                marktext: '金',
                intro: {
                    name: '金鼎酒',
                    content(storage, player) {
                        return '下次造成的伤害+1.';
                    },
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_jindingjiu.mp3');
                    game.log(player, '触发了【金鼎酒】');
                    trigger.num++;
                    player.removeMark('hyym_jindingjiux');
                    player.removeSkill('hyym_jindingjiux');
                },
            },
            hyym_zhuangyuanhongx: {
                mark: true,
                marktext: '状',
                intro: {
                    name: '状元红',
                    content: '下次受到伤害后,回复1点体力.',
                },
                trigger: { player: 'damageEnd' },
                forced: true,
                _priority: 6.1,
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_zhuangyuanhong.mp3');
                    game.log(player, '触发了【状元红】');
                    player.recover();
                    player.removeMark('hyym_zhuangyuanhongx');
                    player.removeSkill('hyym_zhuangyuanhongx');
                },
            },
            hyym_banlizongzix: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '栗',
                intro: {
                    name: '板栗粽子',
                    content: '下回合结束时,减2点体力上限并失去2点护甲.',
                },
                content() {
                    player.addSkill('hyym_banlizongziy');
                    player.markSkill('hyym_banlizongziy');
                    player.storage.hyym_banlizongziy++;
                    player.removeMark('hyym_banlizongzix');
                    player.removeSkill('hyym_banlizongzix');
                },
            },
            hyym_banlizongziy: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '栗',
                intro: {
                    name: '板栗粽子',
                    content: '下回合结束时,减2点体力上限并失去2点护甲.',
                },
                content() {
                    player.loseMaxHp(2);
                    player.changeHujia(-2);
                    player.removeMark('hyym_banlizongziy');
                    player.removeSkill('hyym_banlizongziy');
                },
            },
            hyym_xianrouzongzix: {
                mark: true,
                marktext: '鲜',
                intro: {
                    name: '鲜肉粽子',
                    content: '下次脱离濒死状态后,获得1点护甲,且手牌上限+2直到下回合结束.',
                },
                trigger: { player: 'dyingAfter' },
                forced: true,
                _priority: 6.1,
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_xianrouzongzi.mp3');
                    player.changeHujia();
                    player.addSkill('hyym_xianrou');
                    player.storage.hyym_xianrou++;
                    player.storage.hyym_xianrou++;
                    player.markSkill('hyym_xianroux');
                    player.addSkill('hyym_xianroux');
                    player.storage.hyym_xianroux++;
                    player.removeMark('hyym_xianrouzongzix');
                    player.removeSkill('hyym_xianrouzongzix');
                },
            },
            hyym_xianrou: {
                init(player) {
                    if (!player.storage.hyym_xianrou) player.storage.hyym_xianrou = 0;
                },
                mod: {
                    maxHandcard(player, num) {
                        if (typeof player.storage.hyym_xianrou == 'number') return num + player.storage.hyym_xianrou;
                    },
                },
            },
            hyym_xianroux: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '鲜',
                intro: {
                    name: '鲜肉粽子',
                    content: '手牌上限+2直到下回合结束.',
                },
                content() {
                    player.addSkill('hyym_xianrouy');
                    player.markSkill('hyym_xianrouy');
                    player.storage.hyym_xianrouy++;
                    player.removeMark('hyym_xianroux');
                    player.removeSkill('hyym_xianroux');
                },
            },
            hyym_xianrouy: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '鲜',
                intro: {
                    name: '鲜肉粽子',
                    content: '手牌上限+2直到下回合结束.',
                },
                content() {
                    player.removeSkill('hyym_xianrou');
                    player.removeMark('hyym_xianrouy');
                    player.removeSkill('hyym_xianrouy');
                },
            },
            hyym_huoliguox: {
                mark: true,
                marktext: '果',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `使用牌的次数上限+2(剩余${player.storage.hyym_huoliguox_markcount}回合)`;
                    },
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'jiu' || card.name == 'sha') return num + 2;
                    },
                },
                content() {
                    player.storage.hyym_huoliguox_markcount--;
                    if (player.storage.hyym_huoliguox_markcount == 0) {
                        delete player.storage.hyym_huoliguox;
                        delete player.storage.hyym_huoliguox_markcount;
                        player.removeSkill('hyym_huoliguox');
                    } else {
                    }
                },
            },
            hyym_hongzaozongzix: {
                mark: true,
                marktext: '枣',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `使用牌无距离限制(剩余${player.storage.hyym_hongzaozongzix_markcount}回合)`;
                    },
                },
                mod: {
                    targetInRange() {
                        return true;
                    },
                },
                content() {
                    player.storage.hyym_hongzaozongzix_markcount--;
                    if (player.storage.hyym_hongzaozongzix_markcount == 0) {
                        delete player.storage.hyym_hongzaozongzix;
                        delete player.storage.hyym_hongzaozongzix_markcount;
                        player.removeSkill('hyym_hongzaozongzix');
                    } else {
                    }
                },
            },
            hyym_jidanzongzix: {
                mark: true,
                marktext: '蛋',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `受到伤害时,可弃一张牌,令伤害值-1(剩余${player.storage.hyym_jidanzongzix_markcount}回合)`;
                    },
                },
                content() {
                    player.storage.hyym_jidanzongzix_markcount--;
                    if (player.storage.hyym_jidanzongzix_markcount == 0) {
                        delete player.storage.hyym_jidanzongzix;
                        delete player.storage.hyym_jidanzongzix_markcount;
                        player.removeSkill('hyym_jidanzongzix');
                    } else {
                    }
                },
                group: 'hyym_jidanzongzix_use',
                subSkill: {
                    use: {
                        trigger: { player: 'damageBegin4' },
                        forced: true,
                        filter(event, player) {
                            return player.countCards('he') > 0;
                        },
                        content() {
                            'step 0';
                            player.chooseToDiscard('是否弃一张牌,令伤害值-1？', 'he').set('ai', function (card) {
                                let player = _status.event.player;
                                if (player.name == 'shenhuatuohyym' && event.getParent(4).name == 'hyym_tenglinghuanzhong_2') return 0;
                                else if (event.getParent(4).name == 'g_hyym_baihuyupei') return 0;
                                else if (game.hasPlayer((play) => play.hasSkill('hyym_biwushanghaitongji'))) {
                                    if (trigger.source && trigger.source.isIn() && get.attitude(player, trigger.source) > 0) return 0;
                                } else if (get.damageEffect(player, trigger.source, player) < 0) return 99 - get.value(card);
                                else return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_jidanzongzi.mp3');
                                game.log(player, '发动了【鸡蛋粽子】');
                                trigger.num--;
                            }
                        },
                    },
                },
            },
            hyym_lvdouzongzix: {
                mark: true,
                marktext: '绿',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `进入异常状态时,取消之(剩余${player.storage.hyym_lvdouzongzix_markcount}回合)`;
                    },
                },
                content() {
                    player.storage.hyym_lvdouzongzix_markcount--;
                    if (player.storage.hyym_lvdouzongzix_markcount == 0) {
                        delete player.storage.hyym_lvdouzongzix;
                        delete player.storage.hyym_lvdouzongzix_markcount;
                        player.removeSkill('hyym_lvdouzongzix');
                    } else {
                    }
                },
            },
            hyym_baozoubingganx: {
                mark: true,
                marktext: '暴',
                intro: {
                    name: '暴走饼干',
                    content(storage, player) {
                        return get.translation(player) + '的下一个受到过伤害的回合(含本回合)结束后,进行一个额外的回合.';
                    },
                },
                forced: true,
                trigger: { global: 'phaseAfter' },
                forced: true,
                filter(event, player) {
                    return player.getHistory('damage').length;
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_baozoubinggan.mp3');
                    player.phase('nodelay');
                    player.removeMark('hyym_baozoubingganx');
                    player.removeSkill('hyym_baozoubingganx');
                },
            },
            hyym_qianxingbingganx: {
                mark: true,
                marktext: '潜',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `成为其他角色牌的目标时,可弃一张牌,取消之(剩余${player.storage.hyym_qianxingbingganx_markcount}回合)`;
                    },
                },
                content() {
                    player.storage.hyym_qianxingbingganx_markcount--;
                    if (player.storage.hyym_qianxingbingganx_markcount == 0) {
                        delete player.storage.hyym_qianxingbingganx;
                        delete player.storage.hyym_qianxingbingganx_markcount;
                        player.removeSkill('hyym_qianxingbingganx');
                    } else {
                    }
                },
                group: 'hyym_qianxingbingganx_use',
                subSkill: {
                    use: {
                        trigger: { target: 'useCardToTargeted' },
                        filter(event, player) {
                            return event.player != player && player.countCards('he') > 0 && !event.parent.excluded.includes(player);
                        },
                        forced: true,
                        _priority: 96,
                        content() {
                            'step 0';
                            player.chooseToDiscard('是否弃一张牌,取消之？', 'he').set('ai', function (card) {
                                var evt = _status.event.getParent('useCard');
                                var player = evt.targets[0];
                                if (get.tag(evt.card, 'damage') > 0.5) return get.effect(player, evt.card, evt.player, player) < 0 ? 99 - get.value(card) : false;
                                else return get.effect(player, evt.card, evt.player, player) < 0 ? 6 - get.value(card) : false;
                            });
                            ('step 1');
                            if (result.bool) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_qianxingbinggan.mp3');
                                game.log(player, '发动了【潜行饼干】');
                                trigger.parent.excluded.add(player);
                            }
                        },
                    },
                },
            },
            hyym_biandabianxiaoroux: {
                mark: true,
                marktext: '肉',
                trigger: { global: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `判定牌生效前/拼点的牌亮出后,可以令此牌的点数加减4以内的任意值(剩余${player.storage.hyym_biandabianxiaoroux_markcount}回合)`;
                    },
                },
                content() {
                    player.storage.hyym_biandabianxiaoroux_markcount--;
                    if (player.storage.hyym_biandabianxiaoroux_markcount == 0) {
                        delete player.storage.hyym_biandabianxiaoroux;
                        delete player.storage.hyym_biandabianxiaoroux_markcount;
                        player.removeSkill('hyym_biandabianxiaoroux');
                    } else {
                    }
                },
                group: ['hyym_biandabianxiaoroux_use', 'hyym_biandabianxiaoroux_judge'],
                subSkill: {
                    use: {
                        trigger: { player: 'compare', target: 'compare' },
                        filter(event, player) {
                            return !event.iwhile;
                        },
                        forced: true,
                        preHidden: true,
                        content() {
                            'step 0';
                            player
                                .chooseControl('点数+4', '点数+3', '点数+2', '点数+1', '点数-1', '点数-2', '点数-3', '点数-4', 'cancel2')
                                .set('prompt', '是否令此牌的点数加减4以内的任意值(至少为A,至多为K)')
                                .set('ai', function () {
                                    if (_status.event.small) return 7;
                                    else return 0;
                                })
                                .set('small', trigger.small);
                            ('step 1');
                            if (result.index != 8) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_biandabianxiaorou.mp3');
                                if (result.index == 0) {
                                    game.log(player, '拼点牌点数+4');
                                    if (player == trigger.player) {
                                        trigger.num1 += 4;
                                        if (trigger.num1 > 13) trigger.num1 = 13;
                                    } else {
                                        trigger.num2 += 4;
                                        if (trigger.num2 > 13) trigger.num2 = 13;
                                    }
                                } else if (result.index == 1) {
                                    game.log(player, '拼点牌点数+3');
                                    if (player == trigger.player) {
                                        trigger.num1 += 3;
                                        if (trigger.num1 > 13) trigger.num1 = 13;
                                    } else {
                                        trigger.num2 += 3;
                                        if (trigger.num2 > 13) trigger.num2 = 13;
                                    }
                                } else if (result.index == 2) {
                                    game.log(player, '拼点牌点数+2');
                                    if (player == trigger.player) {
                                        trigger.num1 += 2;
                                        if (trigger.num1 > 13) trigger.num1 = 13;
                                    } else {
                                        trigger.num2 += 2;
                                        if (trigger.num2 > 13) trigger.num2 = 13;
                                    }
                                } else if (result.index == 3) {
                                    game.log(player, '拼点牌点数+1');
                                    if (player == trigger.player) {
                                        trigger.num1 += 1;
                                        if (trigger.num1 > 13) trigger.num1 = 13;
                                    } else {
                                        trigger.num2 += 1;
                                        if (trigger.num2 > 13) trigger.num2 = 13;
                                    }
                                } else if (result.index == 4) {
                                    game.log(player, '拼点牌点数-1');
                                    if (player == trigger.player) {
                                        trigger.num1 -= 1;
                                        if (trigger.num1 < 1) trigger.num1 = 1;
                                    } else {
                                        trigger.num2 -= 1;
                                        if (trigger.num2 < 1) trigger.num2 = 1;
                                    }
                                } else if (result.index == 5) {
                                    game.log(player, '拼点牌点数-2');
                                    if (player == trigger.player) {
                                        trigger.num1 -= 2;
                                        if (trigger.num1 < 1) trigger.num1 = 1;
                                    } else {
                                        trigger.num2 -= 2;
                                        if (trigger.num2 < 1) trigger.num2 = 1;
                                    }
                                } else if (result.index == 6) {
                                    game.log(player, '拼点牌点数-3');
                                    if (player == trigger.player) {
                                        trigger.num1 -= 3;
                                        if (trigger.num1 < 1) trigger.num1 = 1;
                                    } else {
                                        trigger.num2 -= 3;
                                        if (trigger.num2 < 1) trigger.num2 = 1;
                                    }
                                } else {
                                    game.log(player, '拼点牌点数-4');
                                    if (player == trigger.player) {
                                        trigger.num1 -= 4;
                                        if (trigger.num1 < 1) trigger.num1 = 1;
                                    } else {
                                        trigger.num2 -= 4;
                                        if (trigger.num2 < 1) trigger.num2 = 1;
                                    }
                                }
                            }
                        },
                    },
                    judge: {
                        trigger: {
                            player: 'judge',
                        },
                        forced: true,
                        filter(event, player) {
                            return true;
                        },
                        content() {
                            'step 0';
                            var str = get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',是否发动【变大变小肉】,令点数加减4以内的任意值？';
                            player
                                .chooseControl('点数+4', '点数+3', '点数+2', '点数+1', '点数-1', '点数-2', '点数-3', '点数-4', 'cancel2')
                                .set('prompt', str)
                                .set('ai', function () {
                                    if (_status.event.getParent(5).name == 'hyym_yijigongjiyao') return 7;
                                    else if (_status.event.getParent(5).name == 'hyym_buqvyizhi') return 7;
                                    else return 0;
                                })
                                .set('judging', trigger.player.judging[0]);
                            ('step 1');
                            if (result.index != 8) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_biandabianxiaorou.mp3');
                                if (result.index < 4) {
                                    game.log(player, `发动【变大变小肉】,令判定结果点数+${4 - result.index},点数改为` + Math.min(13, trigger.player.judging[0].number + 4 - result.index));
                                    trigger.fixedResult = {
                                        number: Math.min(13, trigger.player.judging[0].number + 4 - result.index),
                                    };
                                } else {
                                    game.log(player, `发动【变大变小肉】,令判定结果点数-${result.index - 3},点数改为` + Math.max(1, trigger.player.judging[0].number - (result.index - 3)));
                                    trigger.fixedResult = {
                                        number: Math.max(1, trigger.player.judging[0].number - (result.index - 3)),
                                    };
                                }
                            }
                        },
                        ai: {
                            rejudge: true,
                            tag: {
                                rejudge: 1,
                            },
                        },
                    },
                },
            },
            hyym_beibaokuozhanmokax: {
                mark: true,
                marktext: '扩',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    name: '背包扩展魔卡',
                    content(storage, player) {
                        return `手牌上限+${player.storage.hyym_moka_markcount}(剩余${player.storage.hyym_beibaokuozhanmokax_markcount}回合)`;
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        if (typeof player.storage.hyym_moka_markcount == 'number') return num + player.storage.hyym_moka_markcount;
                    },
                },
                content() {
                    player.storage.hyym_beibaokuozhanmokax_markcount--;
                    if (player.storage.hyym_beibaokuozhanmokax_markcount == 0) {
                        delete player.storage.hyym_beibaokuozhanmokax;
                        delete player.storage.hyym_moka;
                        delete player.storage.hyym_beibaokuozhanmokax_markcount;
                        delete player.storage.hyym_moka_markcount;
                        player.removeSkill('hyym_beibaokuozhanmokax');
                        player.removeSkill('hyym_beibaokuozhanmokax_use');
                    } else {
                    }
                },
            },
            hyym_beibaokuozhanmokax_use: {
                enable: 'phaseUse',
                position: 'he',
                usable: 1,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                filterCard: true,
                prompt: '弃一张牌,给魔卡续能1回合',
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_beibaokuozhanmoka.mp3');
                    if (player.countCards('h', (card) => card.name == 'hyym_shenjunshi') == 0) player.storage.hyym_beibaokuozhanmokax_markcount++;
                    else {
                        game.log(player, '发动了【神军石】');
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenjunshi.mp3');
                        player.storage.hyym_beibaokuozhanmokax_markcount += 2;
                    }
                },
                ai1(card) {
                    return 5 - get.value(card);
                },
                ai: {
                    order(card, player) {
                        return 0.1;
                    },
                    result: {
                        player(player, target, skill) {
                            if (player.countCards('h') > player.getHandcardLimit()) return 1;
                            return 0;
                        },
                    },
                },
            },
            hyym_gptiyankax: {
                mark: true,
                marktext: '壕',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `当前Gp等级:${player.storage.hyym_gptiyan_markcount}级<br>摸牌阶段摸牌基数+${player.storage.hyym_gptiyan_markcount},出牌阶段内可使用【杀】的次数+${player.storage.hyym_gptiyan_markcount}(剩余${player.storage.hyym_gptiyankax_markcount}回合)`;
                    },
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.storage.hyym_gptiyan_markcount;
                    },
                },
                content() {
                    player.storage.hyym_gptiyankax_markcount--;
                    if (player.storage.hyym_gptiyankax_markcount == 0) {
                        delete player.storage.hyym_gptiyankax;
                        delete player.storage.hyym_gptiyan;
                        delete player.storage.hyym_gptiyankax_markcount;
                        delete player.storage.hyym_gptiyan_markcount;
                        player.removeSkill('hyym_gptiyankax');
                    } else {
                    }
                },
                group: 'hyym_gptiyankax_draw',
                subSkill: {
                    draw: {
                        trigger: { player: 'phaseDrawBegin2' },
                        forced: true,
                        filter(event, player) {
                            return !event.numFixed;
                        },
                        content() {
                            game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_gptiyanka.mp3');
                            trigger.num += player.storage.hyym_gptiyan_markcount;
                        },
                    },
                },
            },
            g_hyym_fuhuobi: {
                trigger: { player: 'dieBefore' },
                filter(event, player) {
                    if (!player.hasUsableCard('hyym_fuhuobi')) return false;
                    if (!lib.filter.targetEnabled({ name: 'hyym_fuhuobi' }, player, event.player)) return false;
                    return player.maxHp > 0;
                },
                forced: true,
                content() {
                    player.chooseToUse(
                        get.prompt('hyym_fuhuobi', trigger.player).replace(/发动/, '使用'),
                        function (card, player) {
                            if (card.name != 'hyym_fuhuobi') return false;
                            return lib.filter.cardEnabled(card, player, 'forceEnable');
                        },
                        trigger.player,
                        -1
                    ).targetRequired = true;
                },
            },
            hyym_maomaoshendezhufux: {
                mark: true,
                marktext: '福',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                intro: {
                    content(storage, player) {
                        return `使用【杀】时可额外指定一名角色为目标(剩余${player.storage.hyym_maomaoshendezhufux_markcount}回合)`;
                    },
                },
                mod: {
                    selectTarget(card, player, range) {
                        if (card.name == 'sha' && Array.isArray(range) && range[1] != -1) range[1]++;
                    },
                },
                content() {
                    player.storage.hyym_maomaoshendezhufux_markcount--;
                    if (player.storage.hyym_maomaoshendezhufux_markcount == 0) {
                        delete player.storage.hyym_maomaoshendezhufux;
                        delete player.storage.hyym_maomaoshendezhufux_markcount;
                        player.removeSkill('hyym_maomaoshendezhufux');
                    } else {
                    }
                },
            },
            g_hyym_maomaoshendejuangu: {
                trigger: { player: 'phaseUseBegin' },
                filter(event, player) {
                    if (player.hp != 1) return false;
                    if (!player.hasUsableCard('hyym_maomaoshendejuangu')) return false;
                    if (!lib.filter.targetEnabled({ name: 'hyym_maomaoshendejuangu' }, player, event.player)) return false;
                    return true;
                },
                _priority: 98,
                forced: true,
                content() {
                    player.chooseToUse(
                        get.prompt('hyym_maomaoshendejuangu', trigger.player).replace(/发动/, '使用'),
                        function (card, player) {
                            if (card.name != 'hyym_maomaoshendejuangu') return false;
                            return lib.filter.cardEnabled(card, player, 'forceEnable');
                        },
                        trigger.player,
                        -1
                    ).targetRequired = true;
                },
            },
            hyym_dilaoshuyanhuax: {
                trigger: {
                    player: 'useCardEnd',
                },
                filter(event, player) {
                    return event.name == 'useCard' && event.card.name == 'sha';
                },
                forced: true,
                popup: false,
                nopop: true,
                mark: true,
                marktext: '鼠',
                intro: {
                    name: '地老鼠烟花',
                    content: '使用的下一张【杀】:被抵消时,可以弃一张红色牌,令目标须额外使用一张【闪】响应此【杀】.',
                },
                content() {
                    player.removeMark('hyym_dilaoshuyanhuax');
                    player.removeSkill('hyym_dilaoshuyanhuax');
                },
                group: ['hyym_dilaoshuyanhuax_1'],
                subSkill: {
                    1: {
                        trigger: { player: 'shaMiss' },
                        forced: true,
                        init(player, skill) {
                            player.storage.hyym_dilaoshuyanhuax_1 = player.getAllHistory('useCard', (evt) => evt.card.name == 'sha').length;
                        },
                        filter(event, player) {
                            returnplayer.getAllHistory('useCard', (evt) => evt.card.name == 'sha')[player.storage.hyym_dilaoshuyanhuax_1].card == event.card;
                        },
                        content() {
                            'step 0';
                            if (!player.countCards('he', { color: 'red' })) {
                                event.finish();
                                return;
                            }
                            player.chooseToDiscard('是否弃一张红色牌,令目标须额外使用一张【闪】响应此【杀】？', 'he', { color: 'red' }).set('ai', function (card) {
                                let player = _status.event.player;
                                if (get.attitude(player, trigger.target) < 0 && (trigger.target.countCards('h') > 0 || trigger.target.countCards('e', (card) => card.name == 'bagua') > 0)) return 7 - get.value(card);
                                else if (get.attitude(player, trigger.target) < 0 && trigger.target.countCards('h') == 0 && trigger.target.countCards('e', (card) => card.name == 'bagua') == 0) return 99 - get.value(card);
                                else return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_dilaoshuyanhua.mp3');
                                game.log(player, '发动了【地老鼠烟花】');
                                trigger.target.chooseToRespond({ name: 'shan' }, '地老鼠烟花:请额外使用一张【闪】响应此【杀】').autochoose = lib.filter.autoRespondShan;
                            } else {
                                event.finish();
                            }
                            ('step 2');
                            if (!result.bool) {
                                trigger.untrigger();
                                trigger.trigger('shaHit');
                                trigger._result.bool = false;
                            }
                        },
                    },
                },
            },
            hyym_dilaoshuyanhuay: {
                trigger: {
                    player: 'useCardEnd',
                },
                filter(event, player) {
                    return event.name == 'useCard' && event.card.name == 'sha';
                },
                forced: true,
                popup: false,
                nopop: true,
                mark: true,
                marktext: '鼠',
                intro: {
                    name: '地老鼠烟花',
                    content: '使用的下一张【杀】第一次造成伤害时,可以弃一张黑色牌,令伤害值+1.',
                },
                content() {
                    player.removeMark('hyym_dilaoshuyanhuay');
                    player.removeSkill('hyym_dilaoshuyanhuay');
                },
                group: ['hyym_dilaoshuyanhuay_1'],
                subSkill: {
                    1: {
                        trigger: { source: 'damageBegin1' },
                        forced: true,
                        init(player, skill) {
                            player.storage.hyym_dilaoshuyanhuay_1 = player.getAllHistory('useCard', (evt) => evt.card.name == 'sha').length;
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && player.getAllHistory('useCard', (evt) => evt.card.name == 'sha')[player.storage.hyym_dilaoshuyanhuay_1].card == event.card;
                        },
                        content() {
                            'step 0';
                            if (!player.countCards('he', { color: 'black' }) > 0) {
                                event.finish();
                                return;
                            }
                            player.chooseToDiscard('是否弃一张黑色牌,令此伤害+1？', 'he', { color: 'black' }).set('ai', function (card) {
                                let player = _status.event.player;
                                if (get.attitude(player, trigger.player) < 0 && (!trigger.player.hasCard((car) => car.name == 'baiyin', 'e') || player.hasCard((car) => car.name == 'qinggang', 'e')) && get.damageEffect(trigger.player, player, player) > 0) return 99 - get.value(card);
                                else return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_dilaoshuyanhua.mp3');
                                game.log(player, '发动了【地老鼠烟花】');
                                trigger.num++;
                                player.removeMark('hyym_dilaoshuyanhuay');
                                player.removeSkill('hyym_dilaoshuyanhuay');
                            }
                        },
                    },
                },
            },
            hyym_jianguotouzix: {
                mark: true,
                marktext: '建',
                intro: {
                    name: '建国投资',
                    content(storage, player) {
                        return `下次造成伤害后,摸三张牌并交给${get.translation(player.storage.jianguo)}三张牌`;
                    },
                },
                trigger: { source: 'damageSource' },
                filter(event, player) {
                    return player.storage.jianguo.isIn();
                },
                forced: true,
                content() {
                    'step 0';
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_jianguotouzi.mp3');
                    player.draw(3);
                    ('step 1');
                    if (player.countCards('he') > 0)
                        player.chooseCard('he', true, Math.min(3, player.countCards('he')), `建国投资:选择交给${get.translation(player.storage.jianguo)}三张牌`).set('ai', function (card) {
                            return 9 - get.value(card);
                        });
                    ('step 2');
                    player.give(result.cards, player.storage.jianguo);
                    player.removeMark('hyym_jianguotouzix');
                    player.removeSkill('hyym_jianguotouzix');
                },
                group: ['hyym_jianguotouzix_1'],
                subSkill: {
                    1: {
                        forced: true,
                        trigger: { global: 'die' },
                        forceDie: true,
                        forced: true,
                        filter(event, player) {
                            return player.storage.jianguo == event.player;
                        },
                        content() {
                            player.removeMark('hyym_jianguotouzix');
                            player.removeSkill('hyym_jianguotouzix');
                        },
                    },
                },
            },
            hyym_zhengzhan1: {
                trigger: { player: 'useCardToPlayered' },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && (event.getParent(2).name == 'hyym_zhengzhan' || event.getParent(3).name == 'hyym_zhengzhan2') && !event.parent.excluded.includes(event.target);
                },
                content() {
                    'step 0';
                    player.chooseBool(`是否取消此牌目标,并令${get.translation(trigger.target)}摸一张牌？`).set('ai', function () {
                        return get.attitude(player, trigger.target) > 0;
                    });
                    ('step 1');
                    if (result.bool) {
                        trigger.parent.targets.remove(trigger.target);
                        trigger.target.draw();
                    }
                },
            },
            hyym_zhengzhan2: {
                trigger: { player: 'damageEnd' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.getParent(3).name == 'hyym_zhengzhan' && player.canUse('sha', event.source, false, false);
                },
                forced: true,
                content() {
                    'step 0';
                    player.addSkill('hyym_zhengzhan1');
                    player
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            `复仇:是否对${get.translation(trigger.source)}使用一张杀？`
                        )
                        .set('targetRequired', true)
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        })
                        .set('sourcex', trigger.source);
                    ('step 1');
                    player.removeSkill('hyym_zhengzhan1');
                },
            },
            g_hyym_F5: {
                trigger: { target: 'useCardToTargeted' },
                filter(event, player) {
                    if (!player.hasUsableCard('hyym_F5')) return false;
                    if (!(get.tag(event.card, 'damage') > 0.5)) return false;
                    if (!lib.filter.targetEnabled({ name: 'hyym_F5' }, player, player)) return false;
                    return !event.parent.excluded.includes(player);
                },
                _priority: 97,
                forced: true,
                content() {
                    player
                        .chooseToUse(get.prompt('hyym_F5', player).replace(/发动/, '使用'), function (card, player) {
                            if (card.name != 'hyym_F5') return false;
                            return lib.filter.cardEnabled(card, player, 'forceEnable');
                        })
                        .set('ai1', function (card) {
                            return true;
                        })
                        .set(
                            'ai2',
                            function (target) {
                                let player = _status.event.player;
                                let evt = _status.event.getParent(4);
                                if (player.name == 'xvshenghyym') return true;
                                else if (!_status.currentPhase) return get.effect(player, evt.card, evt.player, player) < 0 && (player.hp > 1 || player.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs'));
                                else return (get.attitude(player, _status.currentPhase) < 0 && get.effect(player, evt.card, evt.player, player) < 0 && (player.hp > 1 || player.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs'))) || (player == _status.currentPhase && player.countCards('hs', (card) => game.filterPlayer((play) => player.canUse(card, play, true, true)).length) == 0 && ((get.effect(player, evt.card, evt.player, player) < 0 && player != evt.player && (player.hp > 1 || player.hasCard((card) => card.name == 'jiu' || card.name == 'tao' || card.name == 'xiaomijiu' || card.name == 'nverhong' || card.name == 'fuhuobi', 'hs'))) || (player == evt.player && player.countCards('h') - player.getHandcardLimit() >= 3)));
                            } /* .player,-1 */
                        ).targetRequired = false;
                },
                ai: {
                    order: 9,
                },
            },
            hyym_shenmililiangx: {
                trigger: { source: 'damageSource' },
                forced: true,
                filter(event, player) {
                    return player.isPhaseUsing();
                },
                content() {
                    game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_shenmililiang.mp3');
                    game.log(player, '被【神秘力量】袭击了!');
                    var evt = trigger.getParent('phaseUse');
                    if (evt && evt.player == player) evt.skipped = true;
                    player.removeSkill('hyym_shenmililiangx');
                },
            },
            hyym_lieyanbawangka: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '烈',
                intro: {
                    name: '烈焰霸王龙卡',
                    content: '下回合结束时,失去【流星火雨】.',
                },
                content() {
                    player.addSkill('hyym_lieyanbawangkax');
                    player.markSkill('hyym_lieyanbawangkax');
                    player.storage.hyym_lieyanbawangkax++;
                    player.removeMark('hyym_lieyanbawangka');
                    player.removeSkill('hyym_lieyanbawangka');
                },
            },
            hyym_lieyanbawangkax: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '烈',
                intro: {
                    name: '烈焰霸王龙卡',
                    content: '下回合结束时,失去【流星火雨】.',
                },
                content() {
                    player.removeSkill('hyym_liuxinghuoyu');
                    player.removeMark('hyym_lieyanbawangkax');
                    player.removeSkill('hyym_lieyanbawangkax');
                },
            },
            hyym_xuanhuangbawangka: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '玄',
                intro: {
                    name: '玄黄霸王龙卡',
                    content: '下回合结束时,失去【波纹】.',
                },
                content() {
                    player.addSkill('hyym_xuanhuangbawangkax');
                    player.markSkill('hyym_xuanhuangbawangkax');
                    player.storage.hyym_xuanhuangbawangkax++;
                    player.removeMark('hyym_xuanhuangbawangka');
                    player.removeSkill('hyym_xuanhuangbawangka');
                },
            },
            hyym_xuanhuangbawangkax: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '玄',
                intro: {
                    name: '玄黄霸王龙卡',
                    content: '下回合结束时,失去【波纹】.',
                },
                content() {
                    player.removeSkill('hyym_bowen');
                    player.removeMark('hyym_xuanhuangbawangkax');
                    player.removeSkill('hyym_xuanhuangbawangkax');
                },
            },
            hyym_qingxuntuduka: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '青',
                intro: {
                    name: '青迅荼毒龙卡',
                    content: '下回合结束时,失去【荆天棘地】.',
                },
                content() {
                    player.addSkill('hyym_qingxuntudukax');
                    player.markSkill('hyym_qingxuntudukax');
                    player.storage.hyym_qingxuntudukax++;
                    player.removeMark('hyym_qingxuntuduka');
                    player.removeSkill('hyym_qingxuntuduka');
                },
            },
            hyym_qingxuntudukax: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '青',
                intro: {
                    name: '青迅荼毒龙卡',
                    content: '下回合结束时,失去【荆天棘地】.',
                },
                content() {
                    player.removeSkill('hyym_jingtianjidi');
                    player.removeMark('hyym_qingxuntudukax');
                    player.removeSkill('hyym_qingxuntudukax');
                },
            },
            hyym_biyingtuduka: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '碧',
                intro: {
                    name: '碧影荼毒龙卡',
                    content: '下回合结束时,失去【禁制雪域】.',
                },
                content() {
                    player.addSkill('hyym_biyingtudukax');
                    player.markSkill('hyym_biyingtudukax');
                    player.storage.hyym_biyingtudukax++;
                    player.removeMark('hyym_biyingtuduka');
                    player.removeSkill('hyym_biyingtuduka');
                },
            },
            hyym_biyingtudukax: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '碧',
                intro: {
                    name: '碧影荼毒龙卡',
                    content: '下回合结束时,失去【禁制雪域】.',
                },
                content() {
                    player.removeSkill('hyym_jinzhixveyu');
                    player.removeMark('hyym_biyingtudukax');
                    player.removeSkill('hyym_biyingtudukax');
                },
            },
            hyym_guduqiubaixiaochu: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【孤独求败】.',
                },
                content() {
                    player.addSkill('hyym_guduqiubaixiaochux');
                    player.markSkill('hyym_guduqiubaixiaochux');
                    player.storage.hyym_guduqiubaixiaochux++;
                    player.removeMark('hyym_guduqiubaixiaochu');
                    player.removeSkill('hyym_guduqiubaixiaochu');
                },
            },
            hyym_guduqiubaixiaochux: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【孤独求败】.',
                },
                content() {
                    player.removeMark('hyym_guduqiubai');
                    player.removeSkill('hyym_guduqiubai');
                    player.removeMark('hyym_guduqiubaixiaochux');
                    player.removeSkill('hyym_guduqiubaixiaochux');
                },
            },
            hyym_aoshiqunxiongxiaochu: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【傲视群雄】.',
                },
                content() {
                    player.addSkill('hyym_aoshiqunxiongxiaochux');
                    player.markSkill('hyym_aoshiqunxiongxiaochux');
                    player.storage.hyym_aoshiqunxiongxiaochux++;
                    player.removeMark('hyym_aoshiqunxiongxiaochu');
                    player.removeSkill('hyym_aoshiqunxiongxiaochu');
                },
            },
            hyym_aoshiqunxiongxiaochux: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【傲视群雄】.',
                },
                content() {
                    player.removeMark('hyym_aoshiqunxiong');
                    player.removeSkill('hyym_aoshiqunxiong');
                    player.removeMark('hyym_aoshiqunxiongxiaochux');
                    player.removeSkill('hyym_aoshiqunxiongxiaochux');
                },
            },
            hyym_hengsaoqianjunxiaochu: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【横扫千军】.',
                },
                content() {
                    player.addSkill('hyym_hengsaoqianjunxiaochux');
                    player.markSkill('hyym_hengsaoqianjunxiaochux');
                    player.storage.hyym_hengsaoqianjunxiaochux++;
                    player.removeMark('hyym_hengsaoqianjunxiaochu');
                    player.removeSkill('hyym_hengsaoqianjunxiaochu');
                },
            },
            hyym_hengsaoqianjunxiaochux: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '武',
                nopop: true,
                intro: {
                    name: '比武大会',
                    content: '下回合结束时,失去【横扫千军】.',
                },
                content() {
                    player.removeMark('hyym_hengsaoqianjun');
                    player.removeSkill('hyym_hengsaoqianjun');
                    player.removeMark('hyym_hengsaoqianjunxiaochux');
                    player.removeSkill('hyym_hengsaoqianjunxiaochux');
                },
            },
            hyym_biwushanghaitongji: {
                trigger: { source: 'damageSource' },
                forced: true,
                mark: true,
                marktext: '武',
                intro: {
                    name: '比武大会',
                    content(storage, player) {
                        return `本轮比武大会已造成伤害:${player.storage.jixvbiwu}点.<br>本届比武大会造成的总伤害:${player.storage.biwushanghai}点.`;
                    },
                    markcount(storage, player) {
                        return player.storage.biwushanghai;
                    },
                },
                filter(event, player) {
                    return true;
                },
                nopop: true,
                content() {
                    'step 0';
                    event.num = Math.min(trigger.num, 9);
                    ('step 1');
                    player.storage.jixvbiwu++;
                    player.storage.biwushanghai++;
                    event.num--;
                    if (event.num > 0) {
                        event.goto(1);
                    }
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'damage') > 0.5 && !target.hasMark('hyym_zhuangshengmengdie')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [0, 0];
                                else return [0, 99, 0, 99];
                            }
                        },
                        player(card, player, target) {
                            if (typeof card !== 'string' && get.tag(card, 'damage') > 0.5 && !target.hasMark('hyym_zhuangshengmengdie')) {
                                if (player.hasSkillTag('jueqing', false, target)) return [0, 0];
                                else return [0, 99, 0, 99];
                            }
                        },
                    },
                },
            },
            hyym_biwudahuibusi: {
                trigger: { player: 'dying' },
                forced: true,
                filter(event, player) {
                    return true;
                },
                _priority: 99,
                content() {
                    player.recover(1 - player.hp);
                    if (trigger.reason.card && get.tag(trigger.reason.card, 'damage') > 0.5 && get.type(trigger.reason.card) == 'trick') {
                        if (!trigger.player.storage.hyym_sidouy) trigger.player.storage.hyym_sidouy = [];
                        trigger.player.storage.hyym_sidouy.push(trigger.reason.card.cardid);
                    }
                },
            },
            hyym_bianhuilai: {
                trigger: { global: 'phaseBefore' },
                forced: true,
                mark: true,
                marktext: '吻',
                nopop: true,
                intro: {
                    name: '草草马之吻',
                    content(storage, player) {
                        return '下回合结束时,将武将牌变回' + player.storage.bianhuimingzi;
                    },
                },
                content() {
                    player.addSkill('hyym_bianhuilaix');
                    player.markSkill('hyym_bianhuilaix');
                    player.storage.hyym_bianhuilaix++;
                    player.removeMark('hyym_bianhuilai');
                    player.removeSkill('hyym_bianhuilai');
                },
            },
            hyym_bianhuilaix: {
                trigger: { player: 'phaseEnd' },
                forced: true,
                mark: true,
                marktext: '吻',
                nopop: true,
                intro: {
                    name: '草草马之吻',
                    content(storage, player) {
                        return '下回合结束时,将武将牌变回' + player.storage.bianhuimingzi;
                    },
                },
                content() {
                    player.reinit('caocaomahyym', player.storage.hyym_caocaomazhiwen, false);
                    _status.characterlist.remove(player.storage.hyym_caocaomazhiwen);
                    _status.characterlist.add('caocaomahyym');
                    player.removeMark('hyym_bianhuilaix');
                    player.removeSkill('hyym_bianhuilaix');
                },
            },
            hyym_gphonex: {
                enable: 'phaseUse',
                usable: 1,
                content() {
                    'step 0';
                    player.loseHp(player.storage.hyym_gptiyan_markcount);
                    ('step 1');
                    player.chooseUseTarget('hyym_gptiyanka', true);
                },
                ai: {
                    order() {
                        return get.order({ name: 'jiu' }) + 0.2;
                    },
                    result: {
                        player(player) {
                            var kk;
                            if (!player.storage.hyym_gptiyan_markcount) kk = 1;
                            else kk = player.storage.hyym_gptiyan_markcount;
                            if (player.hasSkill('hyym_sanjiqixveshangxian') || player.hasSkill('hyym_sanjiqixveshangxianx')) kk += 3;
                            if (player.hp - kk > 1) return 2;
                            else if (kk >= player.hp && ((player.hasSkill('hyym_yihesu') && player.storage.yihesu.includes('hyym_xiaomijiu') && !player.getStorage('hyym_yihesu_count').includes('hyym_xiaomijiu')) || player.hasCard((card) => card.name == 'hyym_xiaomijiu' || card.name == 'hyym_fuhuobi', 'hs'))) return 2;
                            else if (kk == player.hp && player.hasCard((card) => card.name == 'jiu' /* ||card.name=='tao' */ || card.name == 'hyym_nverhong', 'hs')) return 2;
                            else if (kk + 1 == player.hp && player.hasCard((card) => card.name == 'hyym_chujiqixveyao', 'hs')) return 2;
                            else return -1;
                        },
                    },
                },
            },
            g_hyym_baihuyupei: {
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return player.countCards('h', 'hyym_baihuyupei') > 0 && player.hasEnabledSlot();
                },
                forced: true,
                content() {
                    'step 0';
                    if (player.countCards('h', (card) => card.name == 'hyym_baihuyupei' && (card.storage.hyym_baihuyupei != game.roundNumber || !card.storage.hyym_baihuyupei)) > 0)
                        player
                            .chooseTarget(false, '是否对一名其他角色交出【白虎玉佩】？', function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', function (target) {
                                let player = _status.event.player;
                                if (player.name == 'nanhuaxianrenhyym' && player.hasEnabledSlot(1) && player.hasEnabledSlot(2) && player.hasEnabledSlot(3) && player.hasEnabledSlot(4) && player.hasEnabledSlot(5)) return false;
                                else if (get.attitude(player, target) > 0 && get.damageEffect(target, player, player) != 0 && (target.hp + target.hujia > 1 || player.hasCard((card) => card.name == 'tao' || card.name == 'hyym_xiaomijiu' || card.name == 'hyym_nverhong', 'hs'))) return target.hp + target.hujia;
                                else return false;
                            });
                    else event.finish();
                    ('step 1');
                    if (result.bool) {
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_baihuyupei.mp3');
                        event.tar = result.targets[0];
                        player.chooseToDisable().ai = function (event, player, list) {
                            event.list1 = [];
                            event.list2 = [];
                            for (var i = 0; i < list.length; i++) {
                                event.list1.push(list[i]);
                                event.list2.push(list[i]);
                            }
                            if (player.hasCard(null, 'he')) {
                                for (var i = 1; i < 6; i++) {
                                    if (player.hasCard({ subtype: 'equip' + i }, 'he')) {
                                        list.remove('equip' + i);
                                    }
                                    if (player.hasCard({ subtype: 'equip' + i }, 'e')) {
                                        event.list1.remove('equip' + i);
                                    }
                                }
                            }
                            if (!!list.length) return list.randomGet();
                            else if (!!event.list1.length) return event.list1.randomGet();
                            else return event.list2.randomGet();
                        };
                    } else event.finish();
                    ('step 2');
                    player.chooseCard('h', true, 1, '选择一张【白虎玉佩】交出', (card) => card.name == 'hyym_baihuyupei');
                    ('step 3');
                    result.cards[0].storage.hyym_baihuyupei = game.roundNumber;
                    player.give(result.cards[0], event.tar);
                    event.tar.useCard({ name: 'hyym_jianguotouzi' }, player);
                    event.tar.damage();
                },
                ai: {
                    expose: 0.1,
                },
                group: ['g_hyym_baihuyupei_1'],
                subSkill: {
                    1: {
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.name == 'hyym_baihuyupei') return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.name == 'hyym_baihuyupei') return false;
                            },
                        },
                    },
                },
            },
            g_hyym_xingjiuling: {
                trigger: { global: 'useCardAfter' },
                filter(event, player) {
                    return (event.card.name == 'jiu' || event.card.name == 'hyym_xiaomijiu' || event.card.name == 'hyym_guihuajiu' || event.card.name == 'hyym_nverhong' || event.card.name == 'hyym_jindingjiu' || event.card.name == 'hyym_longjijiu' || event.card.name == 'hyym_zhuangyuanhong') && player.countCards('h', 'hyym_xingjiuling') > 0;
                },
                forced: true,
                content() {
                    'step 0';
                    player
                        .chooseTarget(false, '是否找个酒蒙子划拳？', function (card, player, target) {
                            return target != player && target.countCards('h') > 0 && !target.hasSkillTag('noCompareTarget');
                        })
                        .set('ai', function (target) {
                            return -get.attitude(player, target);
                        });
                    ('step 1');
                    if (result.bool && player.canCompare(result.targets[0])) {
                        game.playAudio('../extension/桃源幻梦/audio/卡牌配音/hyym_xingjiuling.mp3');
                        player.chooseToCompare(result.targets[0]);
                    }
                    ('step 2');
                    if (result.bool) {
                        player.draw(2);
                    }
                },
                ai: {
                    expose: 0.1,
                },
                group: ['g_hyym_xingjiuling_1'],
                subSkill: {
                    1: {
                        mod: {
                            ignoredHandcard(card, player) {
                                if (card.name == 'hyym_xingjiuling') return true;
                            },
                            cardDiscardable(card, player, name) {
                                if (name == 'phaseDiscard' && card.name == 'hyym_xingjiuling') return false;
                            },
                        },
                    },
                },
            },
            g_hyym_shenjunshi: {
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.name == 'hyym_shenjunshi') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.name == 'hyym_shenjunshi') return false;
                    },
                },
            },
            hyym_nanguachui1: {},
            hyym_liuyun1: {},
            hyym_moyanjvpao1: {},
            hyym_danjian1: {},
            g_hyym_youlingneilitang: {
                mod: {
                    aiOrder(player, card, num) {
                        let list = ['tao', 'hyym_chujiqixveyao', 'hyym_zhongjiqixveyao', 'hyym_youlingqixvetang'];
                        if (player.hasCard('hyym_youlingneilitang', 'h') && list.includes(card.name)) return 11.99;
                    },
                },
            },
        },
        translate: {
            hyym_shiwu: '食物',
            hyym_yaopin: '药品',
            hyym_daojv: '道具',
            hyym_longbing: '龙兵',
            hyym_huoliguo: '活力果',
            hyym_huoliguo_bg: '果',
            hyym_huoliguo_info: '出牌阶段,对一名角色使用,其使用牌的次数上限+2,持续2回合.',
            hyym_yijineiliyao: '1级内力药',
            hyym_yijineiliyao_info: '出牌阶段,对一名角色使用,令其摸三张牌并弃两张牌.',
            hyym_erjineiliyao: '2级内力药',
            hyym_erjineiliyao_info: '出牌阶段,对一名角色使用,令其摸两张牌.',
            hyym_sanjineiliyao: '3级内力药',
            hyym_sanjineiliyao_info: '出牌阶段,对自己使用,废除一个装备栏,摸三张牌.',
            hyym_chujiqixveyao: '初级气血药',
            hyym_chujiqixveyao_info: '出牌阶段,对一名体力值为1的角色使用,令其回复1点体力.',
            hyym_zhongjiqixveyao: '中级气血药',
            hyym_zhongjiqixveyao_info: '出牌阶段,对一名体力值为2的角色使用,令其回复2点体力.',
            hyym_yijiqixveshangxianyao: '1级气血上限药',
            hyym_yijiqixveshangxianyao_bg: '限',
            hyym_yijiqixveshangxianyao_info: '出牌阶段,对自己使用,加1点体力上限,你的下回合结束时,你减1点体力上限并回复1点体力.',
            hyym_sanjiqixveshangxianyao: '3级气血上限药',
            hyym_sanjiqixveshangxianyao_bg: '限',
            hyym_sanjiqixveshangxianyao_info: '出牌阶段,对自己使用,加3点体力上限并回复3点体力,你的下回合结束时,你失去3点体力并减3点体力上限.',
            hyym_yijigongjiyao: '1级攻击药',
            hyym_yijigongjiyao_bg: '攻',
            hyym_yijigongjiyao_info: '出牌阶段,对自己使用,进行一次判定,你使用的下一张点数不小于判定结果的伤害牌伤害基数+1.',
            hyym_yijifangyuyao: '1级防御药',
            hyym_yijifangyuyao_bg: '防',
            hyym_yijifangyuyao_info: '出牌阶段,对自己使用,进行一次判定,下一张其他角色指定你为目标的点数不大于判定结果的伤害牌对你无效.',
            hyym_caihongfengbaotang: '彩虹风暴糖',
            hyym_caihongfengbaotang_info: '出牌阶段,对一名手牌数等于体力值的角色使用,令其回复1点体力并摸一张牌.',
            hyym_xiaomijiu: '小米酒',
            hyym_xiaomijiu_info: '对一名濒死状态的角色使用,令其将体力回复至1点.',
            hyym_guihuajiu: '桂花酒',
            hyym_guihuajiu_bg: '桂',
            hyym_guihuajiu_info: '出牌阶段,对一名角色使用,其下次进入濒死状态时摸两张牌.',
            hyym_nverhong: '女儿红',
            hyym_nverhong_bg: '女',
            hyym_nverhong_info: '对一名濒死状态的角色使用,令其使用的下一张【杀】的伤害基数+1,其回复1点体力并摸一张牌.',
            hyym_jindingjiu: '金鼎酒',
            hyym_jindingjiu_bg: '金',
            hyym_jindingjiu_info: '出牌阶段,对自己使用,你废除一个装备栏,令自己下次造成的伤害+1.',
            hyym_zhuangyuanhong: '状元红',
            hyym_zhuangyuanhong_bg: '状',
            hyym_zhuangyuanhong_info: '出牌阶段,对一名角色使用,其下次受到伤害后,回复1点体力.',
            hyym_longjijiu: '龙极酒',
            hyym_longjijiu_bg: '龙',
            hyym_longjijiu_info: '出牌阶段,对自己使用,令你使用的下一张伤害锦囊牌的伤害基数+1.',
            hyym_hongzaozongzi: '红枣粽子',
            hyym_hongzaozongzi_bg: '枣',
            hyym_hongzaozongzi_info: '出牌阶段,对一名角色使用,其使用牌无距离限制,持续2回合.',
            hyym_jingshenbinggan: '精神饼干',
            hyym_jingshenbinggan_info: '出牌阶段,对一名角色使用,其将手牌数摸至体力上限(至多摸四张).',
            hyym_baozoubinggan: '暴走饼干',
            hyym_baozoubinggan_info: '出牌阶段,对自己使用.你的下一个受到过伤害的回合(含本回合)结束后,你进行一个额外的回合.',
            hyym_jidanzongzi: '鸡蛋粽子',
            hyym_jidanzongzi_bg: '蛋',
            hyym_jidanzongzi_info: '出牌阶段,对一名角色使用,其受到伤害时,可弃一张牌,令伤害值-1,持续3回合.',
            hyym_lvdouzongzi: '绿豆粽子',
            hyym_lvdouzongzi_info: '出牌阶段,对一名角色使用,其立即复原武将牌,清除所有异常状态,且无法进入异常状态,持续2x(x为存活角色数)个回合.',
            hyym_xianrouzongzi: '鲜肉粽子',
            hyym_xianrouzongzi_info: '出牌阶段,对一名角色使用,其下次脱离濒死状态后,获得1点护甲,且手牌上限+2直到其下回合结束.',
            hyym_banlizongzi: '板栗粽子',
            hyym_banlizongzi_bg: '栗',
            hyym_banlizongzi_info: '出牌阶段,对一名角色使用,其加2点体力上限并获得2点护甲;其下个回合结束时,其减2点体力上限并失去2点护甲.',
            hyym_caomei: '草莓',
            hyym_caomei_info: '此牌可被重铸.出牌阶段,对一名角色使用,其选择一项:1、废除判定区;2、回复一个装备栏.',
            hyym_qianxingbinggan: '潜行饼干',
            hyym_qianxingbinggan_bg: '潜',
            hyym_qianxingbinggan_info: '出牌阶段,对一名角色使用,当其成为其他角色牌的目标时,可弃一张牌,取消之,持续3回合.',
            hyym_youlingneilitang: '幽灵内力糖',
            hyym_youlingneilitang_info: '出牌阶段,对一名角色使用,令其摸x张牌(x为其体力值且至多为4)并失去1点体力.',
            hyym_youlingqixvetang: '幽灵气血糖',
            hyym_youlingqixvetang_info: '出牌阶段,对一名已受伤的角色使用,令其回复1点体力,将手牌弃至体力值张数.',
            hyym_biandabianxiaorou: '变大变小肉',
            hyym_biandabianxiaorou_bg: '肉',
            hyym_biandabianxiaorou_info: '此牌可被重铸.出牌阶段,对一名角色使用,当其判定牌生效前/拼点的牌亮出后,其可以令此牌的点数加减4以内的任意值(至少为A,至多为K),持续7回合.',
            hyym_baihuyupei: '白虎玉佩',
            hyym_baihuyupei_info: '此牌不计入拥有者的手牌上限.一轮游戏开始时,你可以废除一个装备栏,将一张【白虎玉佩】交给一名其他角色,令其视为对你使用一张【建国投资】,你对其造成1点伤害(不嵌套触发).',
            hyym_xingjiuling: '行酒令',
            hyym_xingjiuling_info: '此牌不计入拥有者的手牌上限.此牌在你手牌中时,每当有角色使用【酒】/【小米酒】/【桂花酒】/【女儿红】/【金鼎酒】/【龙极酒】/【状元红】后,你可以拼点:若你赢,你摸两张牌.',
            hyym_shenjunshi: '神军石',
            hyym_shenjunshi_info: '此牌不计入拥有者的手牌上限.此牌在你手牌中时,你每次因桃源牌获得的正面buff回合数+1.',
            hyym_dilaoshuyanhua: '地老鼠烟花',
            hyym_dilaoshuyanhua_bg: '鼠',
            hyym_dilaoshuyanhua_info: '出牌阶段,对自己使用,当你使用的下一张【杀】:被抵消时,你可以弃一张红色牌,令目标须额外使用一张【闪】响应此【杀】;第一次造成伤害时,你可以弃一张黑色牌,令伤害值+1.',
            hyym_tanghulubaozhu: '糖葫芦爆竹',
            hyym_tanghulubaozhu_info: '出牌阶段,对一名角色使用,令其随机获得三种不同类型的牌,若其手牌数为全场最多,则其弃一张牌.',
            hyym_qingdianyanhua: '庆典烟花',
            hyym_qingdianyanhua_info: '出牌阶段,对自己使用,你随机选择x名其他角色(x为你已损失的体力值且至少为1,不足则全选),你可以对其中任意名角色各造成1点伤害.',
            hyym_shuaipao: '摔炮',
            hyym_shuaipao_info: '出牌阶段,对一名距离为1的其他角色使用,你废除一个装备栏,对其造成1点伤害.',
            hyym_caocaomazhiwen: '草草马之吻',
            hyym_caocaomazhiwen_bg: '吻',
            hyym_caocaomazhiwen_info: '此牌可被重铸.出牌阶段,若场上没有【草草马】,对一名体力值小于你的角色使用,将其武将牌替换为【草草马】,直到其下回合结束.',
            hyym_beibaokuozhanmoka: '背包扩展魔卡',
            hyym_beibaokuozhanmoka_bg: '扩',
            hyym_beibaokuozhanmoka_info: '出牌阶段,对自己使用,手牌上限+1,持续3回合;此牌效果可叠加.<br>续能:出牌阶段限一次,你可以弃一张牌,令魔卡持续回合数+1.',
            hyym_gphone: 'G-phone',
            hyym_gphone_info: '出牌阶段限一次,你可以失去x点体力(x为你的Gp等级且至少为1),视为使用一张【Gp体验卡】.',
            hyym_gptiyanka: 'Gp体验卡',
            hyym_gptiyanka_bg: 'G',
            hyym_gptiyanka_info: '出牌阶段,对自己使用,持续3回合,你摸牌阶段摸牌基数+1,出牌阶段内可使用【杀】的次数+1;此牌效果可叠加.',
            hyym_wangwangdalibao: '旺旺大礼包',
            hyym_wangwangdalibao_info: '出牌阶段,对自己使用,随机获得一张食物牌.',
            hyym_longdan: '龙蛋',
            hyym_longdan_info: '出牌阶段,对自己使用,随机获得一张龙兵牌.',
            hyym_jinhulu: '金葫芦',
            hyym_jinhulu_info: '出牌阶段,对自己使用,随机获得一张药品牌.',
            hyym_daojvdai: '道具袋',
            hyym_daojvdai_info: '出牌阶段,对自己使用,随机获得一张道具牌.',
            hyym_fuhuobi: '复活币',
            hyym_fuhuobi_info: '自己死亡前,对自己使用,抵挡一次死亡,将体力值回复至1.',
            hyym_maomaoshendejuangu: '猫猫神的眷顾',
            hyym_maomaoshendejuangu_info: '出牌阶段开始时,若你的体力值为1,对自己使用,回复x点体力并摸x张牌,废除x个装备栏(x为场上现存势力数且至多为3).',
            hyym_maomaoshendezhufu: '猫猫神的祝福',
            hyym_maomaoshendezhufu_bg: '福',
            hyym_maomaoshendezhufu_info: '此牌可于存活角色数不大于2时被重铸.出牌阶段,对一名角色使用,使用【杀】时可额外指定一名角色为目标,持续2回合.',
            hyym_huangquanxingshu: '黄泉行书',
            hyym_huangquanxingshu_info: '此牌可被重铸.出牌阶段,对自己使用,你选择并获得【放逐(行者)】/【守护(行者)】.',
            hyym_lieyanbawanglongka: '烈焰霸王龙卡',
            hyym_lieyanbawanglongka_bg: '烈',
            hyym_lieyanbawanglongka_info: '此牌可被重铸.出牌阶段,对自己使用,使用后获得技能【流星火雨】,直到你的下回合结束.',
            hyym_biyingtudulongka: '碧影荼毒龙卡',
            hyym_biyingtudulongka_bg: '碧',
            hyym_biyingtudulongka_info: '此牌可被重铸.出牌阶段,对自己使用,使用后获得技能【禁制雪域】,直到你的下回合结束.',
            hyym_xuanhuangbawanglongka: '玄黄霸王龙卡',
            hyym_xuanhuangbawanglongka_bg: '玄',
            hyym_xuanhuangbawanglongka_info: '此牌可被重铸.出牌阶段,对自己使用,使用后获得技能【波纹】,直到你的下回合结束.',
            hyym_qingxuntudulongka: '青迅荼毒龙卡',
            hyym_qingxuntudulongka_bg: '青',
            hyym_qingxuntudulongka_info: '此牌可被重铸.出牌阶段,对自己使用,使用后获得技能【荆天棘地】,直到你的下回合结束.',
            hyym_ceshiyongjiangmingzhong: '测试用降命中',
            hyym_ceshiyongjiangmingzhong_info: '出牌阶段,对一名其他角色使用,令其获得<盲>标记.',
            hyym_jianguotouzi: '建国投资',
            hyym_jianguotouzi_bg: '资',
            hyym_jianguotouzi_info: '出牌阶段,对一名其他角色使用,你交给其一张牌,其下次造成伤害后,其摸三张牌并交给你三张牌.',
            hyym_zhanguilaixi: '战鬼来袭',
            hyym_zhanguilaixi_info: '出牌阶段,对所有其他角色使用,战鬼族目标角色摸一张牌,非战鬼族目标角色须弃置一张非基本牌,否则失去1点体力.',
            hyym_biwudahui: '比武大会',
            hyym_biwudahui_bg: '武',
            hyym_biwudahui_info: '此牌可被重铸.出牌阶段内使用,令所有角色依次选择是否<参会>并进入第一轮流程结算:所有<参会>角色依次选择是否使用一张伤害牌(无次数限制)并摸一张牌(此过程中所有未<参会>角色进入<调虎离山>状态,所有角色在进入濒死状态时立即将体力值回复至1点),且每轮流程结算完毕后,所有存活角色将体力值调整为此牌结算前的数值,此轮结算中造成过伤害的角色继续<参会>并进入下一轮流程结算,直至<参会>角色数不大于1.最终所有于此牌结算期间内累计造成伤害值最高的角色,依次选择并获得【孤独求败】/【傲视群雄】/【横扫千军】之一(场上已有技能除外),直到其各自下回合结束.',
            hyym_F5: 'F5',
            hyym_F5_info: '当你成为伤害牌的目标时,对自己使用(若使用者不为你,则你失去1点体力并取消目标),结束此回合.',
            hyym_tianjiangbaoxiang: '天降宝箱',
            hyym_tianjiangbaoxiang_info: '出牌阶段,对至多三名角色使用,每名目标角色可依次弃一张牌并发现一张道具牌.',
            hyym_shenmililiang: '神秘力量',
            hyym_shenmililiang_bg: '秘',
            hyym_shenmililiang_info: '出牌阶段,对自己使用.你秘密选择一名其他角色,其下次于出牌阶段内造成伤害后,结束此阶段.',
            hyym_zhengzhan: '征战',
            hyym_zhengzhan_info: '出牌阶段,对自己使用.你视为对一名随机其他角色使用一张不计入次数且无距离和次数限制的【杀】.每当此【杀】指定一名角色为目标后,你可以取消之并令该目标摸一张牌.一名角色受到此【杀】伤害后,其可对你使用一张【杀】(无距离限制),且每当此【杀】指定一名角色为目标后,其可以取消之并令该目标摸一张牌.若场上存活角色数大于2,你可以不断弃一张牌并重复此流程(最多重复两次).',
            hyym_nanguachui: '南瓜锤',
            hyym_nanguachui_info: '当你使用【杀】指定一名其他角色为目标时,你可以弃两张牌,令此【杀】伤害基数+1.',
            hyym_liuyun: '流云',
            hyym_liuyun_info: '当你使用【杀】对一名其他角色造成伤害后,你可令其回复1点体力并翻面.',
            hyym_moyanjvpao: '魔炎巨炮',
            hyym_moyanjvpao_info: '当你使用【杀】对一名角色造成伤害时,你可失去1点体力,令伤害值+x(x为2-你【三幻】剩余的标记数).',
            hyym_danjiancard: '单剑',
            hyym_danjiancard_info: '锁定技,当你使用【杀】指定一名其他角色为目标时,你令此牌无效,对其造成1点伤害.',
            hyym_huoliguox: '活力果',
            hyym_maomaoshendezhufux: '猫猫神的祝福',
            hyym_hongzaozongzix: '红枣粽子',
            hyym_jidanzongzix: '鸡蛋粽子',
            hyym_lvdouzongzix: '绿豆粽子',
            hyym_qianxingbingganx: '潜行饼干',
            hyym_biandabianxiaoroux: '变大变小肉',
            hyym_beibaokuozhanmokax: '续能',
            hyym_beibaokuozhanmokax_use: '续能',
            hyym_gptiyankax: 'Gp体验卡',
            g_hyym_fuhuobi: '复活币',
            g_hyym_maomaoshendejuangu: '猫猫神的眷顾',
            g_hyym_baihuyupei: '白虎玉佩',
            g_hyym_xingjiuling: '行酒令',
            g_hyym_shenjunshi: '神军石',
            hyym_guihuajiux: '桂花酒',
            hyym_xianrouzongzix: '鲜肉粽子',
            hyym_gphonex: 'G-phone',
        },
        list: [
            ['spade', 1, 'hyym_yijineiliyao'],
            ['spade', 2, 'hyym_erjineiliyao'],
            ['spade', 3, 'hyym_sanjineiliyao'],
            ['spade', 3, 'hyym_xiaomijiu'],
            ['spade', 4, 'hyym_guihuajiu'],
            ['spade', 5, 'hyym_nverhong'],
            ['spade', 5, 'hyym_gphone'],
            ['spade', 6, 'hyym_jindingjiu'],
            ['spade', 7, 'hyym_chujiqixveyao'],
            ['spade', 8, 'hyym_zhongjiqixveyao'],
            ['spade', 9, 'hyym_longjijiu'],
            ['spade', 10, 'hyym_jidanzongzi'],
            ['spade', 11, 'hyym_biyingtudulongka'],
            ['spade', 12, 'hyym_zhanguilaixi'],
            ['spade', 13, 'hyym_huangquanxingshu'],
            ['club', 1, 'hyym_yijiqixveshangxianyao'],
            ['club', 2, 'hyym_shuaipao'],
            ['club', 3, 'hyym_sanjiqixveshangxianyao'],
            ['club', 4, 'hyym_dilaoshuyanhua'],
            ['club', 5, 'hyym_qianxingbinggan'],
            ['club', 6, 'hyym_qingdianyanhua'],
            ['club', 6, 'hyym_lvdouzongzi'],
            ['club', 7, 'hyym_youlingneilitang'],
            ['club', 8, 'hyym_jingshenbinggan'],
            ['club', 8, 'hyym_shenjunshi'],
            ['club', 9, 'hyym_banlizongzi'],
            ['club', 10, 'hyym_maomaoshendezhufu'],
            ['club', 11, 'hyym_qingxuntudulongka'],
            ['club', 12, 'hyym_yijifangyuyao'],
            ['club', 13, 'hyym_yijigongjiyao'],
            ['diamond', 1, 'hyym_ceshiyongjiangmingzhong'],
            ['diamond', 2, 'hyym_daojvdai'],
            ['diamond', 3, 'hyym_jinhulu'],
            ['diamond', 4, 'hyym_wangwangdalibao'],
            ['diamond', 4, 'hyym_youlingqixvetang'],
            ['diamond', 5, 'hyym_F5'],
            ['diamond', 6, 'hyym_tanghulubaozhu'],
            ['diamond', 7, 'hyym_jianguotouzi'],
            ['diamond', 8, 'hyym_tianjiangbaoxiang'],
            ['diamond', 9, 'hyym_shenmililiang'],
            ['diamond', 10, 'hyym_zhengzhan'],
            ['diamond', 10, 'hyym_xingjiuling'],
            ['diamond', 11, 'hyym_xuanhuangbawanglongka'],
            ['diamond', 12, 'hyym_biwudahui'],
            ['diamond', 13, 'hyym_gptiyanka'],
            ['heart', 1, 'hyym_maomaoshendejuangu'],
            ['heart', 2, 'hyym_caocaomazhiwen'],
            ['heart', 3, 'hyym_fuhuobi'],
            ['heart', 4, 'hyym_caomei'],
            ['heart', 5, 'hyym_xianrouzongzi'],
            ['heart', 6, 'hyym_huoliguo'],
            ['heart', 7, 'hyym_biandabianxiaorou'],
            ['heart', 8, 'hyym_hongzaozongzi'],
            ['heart', 9, 'hyym_longdan'],
            ['heart', 10, 'hyym_zhuangyuanhong'],
            ['heart', 11, 'hyym_lieyanbawanglongka'],
            ['heart', 11, 'hyym_baihuyupei'],
            ['heart', 12, 'hyym_caihongfengbaotang'],
            ['heart', 12, 'hyym_baozoubinggan'],
            ['heart', 13, 'hyym_beibaokuozhanmoka'],
        ],
    };
    for (var name in tyhm.card) {
        if (!tyhm.card[name][4]) {
            tyhm.card[name][4] = [];
        }
        tyhm.card[name][4].push(`ext:桃源幻梦/image/card/${name}.png`);
    }
    lib.config.cards.add('tyhm');
    lib.config.all.cards.add('tyhm');
    lib.translate.tyhm_card_config = '<span style="font-family: xingkai">桃源幻梦</span>';
    return tyhm;
});

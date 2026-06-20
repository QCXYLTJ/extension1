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
    //待测
    return {
        name: '钢铁雄心4',
        content(config, pack) { },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '钢铁雄心4',
                    connect: true,
                    character: {
                        裕仁: ['male', 'wei', 4, ['招核', '侵华'], ['des:史']],
                        孙文: ['male', 'qun', 3, ['逸仙', '三民', '辛亥'], ['zhu']],
                        蒋中正: ['male', 'qun', 4, ['gtxx_haoyuan', 'gtxx_juedi', 'gtxx_weizuo'], []],
                        杜聿明: ['male', 'qun', '3/4', ['gtxx_tongren', 'gtxx_jieyi'], []],
                        朱可夫: ['male', 'qun', 4, ['gtxx_weiguo', 'gtxx_zhuocai'], []],
                        李大钊: ['male', 'qun', 3, ['gtxx_xianqu', 'gtxx_shouyi', 'gtxx_daiyuan'], ['des:李大钊(1889年10月29日-1927年4月28日),字守常,河北乐亭人.1907年考入天津北洋法政专门学校,1913年毕业后东渡日本,入东京早稻田大学政治本科学习,是中国共产主义运动的先驱,伟大的马克思主义者,杰出的无产阶级革命家,中国共产党的主要创始人之一.李大钊同志一生的奋斗历程,同马克思主义在中国传播的历史紧密相连,同中国共产党创建的历史紧密相连,同中国共产党领导的为中国人民谋幸福的历史紧密相连']],
                        陈独秀: ['male', 'qun', '4/4/1', ['gtxx_wenyao', 'gtxx_xianqing'], ['des:陈独秀(1879年10月9日—1942年5月27日),原名陈庆同,陈乾生,字仲甫,号实庵,安徽安庆怀宁人,新文化运动的倡导者、发起者和主要旗手,<五四运动的总司令>,中国共产党的主要创始人之一和党早期主要领导人.']],
                        林彪: ['male', 'qun', 4, ['gtxx_weijian', 'gtxx_xiezhan'], []],
                        列宁: ['male', 'qun', 4, ['gtxx_lidang', 'gtxx_geming'], []],
                        莫德尔: ['male', 'qun', 4, ['gtxx_xiaozhang', 'gtxx_zudi'], []],
                        斯佩尔: ['male', 'qun', 3, ['gtxx_buxie', 'gtxx_polao'], []],
                        麦克阿瑟: ['male', 'qun', 5, ['gtxx_lianjun', 'gtxx_shijia'], []],
                    },
                    skill: {
                        这是一个技能: {},
                        招核: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                player.loseHp();
                            },
                        },
                        侵华: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event._notrigger.includes(event.player)) return false;
                                return event.player.countGainableCards(player, 'he') > 0;
                            }, //QQQ
                            content() {
                                player.gainPlayerCard(trigger.player, 'he'); //QQQ
                            },
                        },
                        逸仙: {
                            trigger: {
                                player: ['phaseJudgeBefore'],
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                                trigger.player.skip('phaseDiscard');
                            },
                        },
                        三民: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                player.draw(3);
                                player.recover();
                            },
                            ai: {
                                order: 1,
                                result: {},
                            },
                        },
                        辛亥: {
                            audio: 'ext:钢铁雄心4/audio:1',
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                player.draw(2);
                            },
                        },
                        gtxx_meixie: {
                            forced: true,
                            mod: {
                                cardUsable(card) {
                                    return Infinity;
                                },
                                targetInRange(card) {
                                    return true;
                                },
                            },
                        },
                        gtxx_haoyuan: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(targrt, player) {
                                return targrt != player;
                            },
                            filterTarget: true,
                            content() {
                                target.draw(2);
                                target.addTempSkill('gtxx_meixie', { player: 'phaseAfter' });
                                player.changeHujia();
                            },
                            group: 'gtxx_haoyuan_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.source && event.source.hasSkill('gtxx_meixie');
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        gtxx_juedi: {
                            limited: true,
                            audio: 'ext:钢铁雄心4/audio:2',
                            derivation: 'gtxx_juedi',
                            enable: 'phaseUse',
                            filter(targrt, player) {
                                return player.maxHp - player.hp >= 2;
                            },
                            filterCard: true,
                            selectCard: -1,
                            logTarget: 'player',
                            content() {
                                'step 0';
                                player.awakenSkill('gtxx_juedi');
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                ('step 1');
                                if (event.targets.length) {
                                    event.targets.shift().damage(2, 'thunder');
                                    event.redo();
                                }
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        gtxx_weizuo: {
                            trigger: {
                                global: ['phaseZhunbeiBegin'],
                            },
                            zhuSkill: true,
                            forced: true,
                            filter(targrt, player) {
                                return !player.hasSkill('gtxx_meixie') && game.countPlayer() < 5;
                            },
                            content() {
                                player.addSkill('gtxx_meixie');
                            },
                        },
                        gtxx_tongren: {
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin', 'damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return Math.random() < 0.4;
                            },
                            content() {
                                player.chooseDrawRecover(true, 2, 1);
                            },
                        },
                        gtxx_jieyi: {
                            enable: 'phaseUse',
                            usable: 3,
                            filterTarget: true,
                            filter(event, player) {
                                if (player.getStat().skill.gtxx_jieyi > player.countMark('gtxx_jieyi')) return false;
                                return true;
                            },
                            content() {
                                target.damage('fire');
                            },
                            marktext: '捷役',
                            intro: {
                                name2: '捷役',
                                content: '捷役使用次数+#',
                            },
                            group: 'gtxx_jieyi_kill',
                            subSkill: {
                                kill: {
                                    trigger: {
                                        source: 'dieAfter',
                                    },
                                    forced: true,
                                    content() {
                                        if (player.countMark('gtxx_jieyi') < 2) {
                                            player.addMark('gtxx_jieyi', 1);
                                        } else {
                                            player.draw();
                                        }
                                        player.draw();
                                    },
                                },
                            },
                        },
                        gtxx_weiguo: {
                            inherit: 'gtxx_weiguo',
                            filter(event, player) {
                                if (player == event.target || player == event.player) return false;
                                if (!player.countCards('he')) return false;
                                if (event.targets.length > 1) return false;
                                if (!event.target) return false;
                                var card = event.card;
                                if (get.type(card, 'trick') == 'trick') return true;
                                return false;
                            },
                            forced: true,
                            audio: 'ext:钢铁雄心4/audio:2',
                            audioname: ['re_wenpin'],
                            trigger: {
                                global: 'useCardToTarget',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var save = false;
                                if (get.attitude(player, trigger.target) > 2) {
                                    if (trigger.card.name == 'juedou' && trigger.target.hp == 1) {
                                        save = true;
                                    } else if (trigger.card.name == 'shunshou' && get.attitude(player, trigger.player) < 0 && get.attitude(trigger.player, trigger.target) < 0) {
                                        save = true;
                                    }
                                }
                                var next = player.chooseToDiscard('he', get.prompt('gtxx_weiguo', trigger.target), '弃置一张牌,将' + get.translation(trigger.card) + '转移给自己.');
                                next.set('ai', function (card) {
                                    if (_status.event.aisave) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('aisave', save);
                                ('step 1');
                                if (result.bool) {
                                    player.draw();
                                    trigger.parent.targets.remove(trigger.target);
                                    trigger.parent.triggeredTargets2.remove(trigger.target);
                                    trigger.parent.targets.push(player);
                                    trigger.untrigger();
                                    trigger.player.line(player);
                                }
                            },
                            marktext: '卫国',
                            intro: {
                                name2: '卫国',
                                content: '卫国数量为#',
                            },
                            group: ['gtxx_weiguo_wei', 'gtxx_weiguo_guo'],
                            subSkill: {
                                wei: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    logTarget: 'player',
                                    check(event, player) {
                                        var target = event.player;
                                        if (
                                            get.attitude(player, target) >= -2 ||
                                            target.countCards('he', function (card) {
                                                return get.value(card, target) > 5;
                                            }) < 2
                                        )
                                            return false;
                                        if (player.hp > 2) return true;
                                        if (player.hp == 1) {
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
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        player.addMark('gtxx_weiguo', 1);
                                    },
                                },
                                guo: {
                                    trigger: {
                                        player: ['gtxx_weiguo_weiAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var num = player.countMark('gtxx_weiguo');
                                        if (num == 0) return false;
                                        return num % 2 == 0 || num % 4 == 0;
                                    },
                                    content() {
                                        var num = player.countMark('gtxx_weiguo');
                                        if (num % 2 == 0) {
                                            player.draw();
                                        }
                                        if (num % 4 == 0) {
                                            player.changeHujia();
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.1,
                            },
                        },
                        gtxx_zhuocai: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: [1, 3],
                            position: 'he',
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.give(cards, target);
                                ('step 1');
                                var list = ['basic', 'equip', 'trick'],
                                    cards = [];
                                for (var i of list) {
                                    var card = get.cardPile2(function (card) {
                                        return get.type(card) == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        gtxx_xianqu: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(targrt, player) {
                                return targrt != player;
                            },
                            filterTarget: true,
                            content() {
                                player.viewHandcards(target);
                                player.drawTo(4);
                            },
                        },
                        gtxx_shouyi: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            marktext: '坚',
                            intro: {
                                name: '坚守',
                                content: 'mark',
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.chooseTarget(get.prompt2('gtxx_shouyi')).ai = function (target) {
                                    return get.damageEffect(target, _status.event.player, _status.event.player, 'thunder');
                                }; //QQQ
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.draw(2);
                                }
                                player.draw();
                                player.addMark('gtxx_shouyi', 1);
                            },
                        },
                        gtxx_daiyuan: {
                            audio: 'ext:钢铁雄心4/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: 2,
                            forced: true,
                            content() {
                                player.removeMark('gtxx_shouyi', 1);
                            },
                            group: ['gtxx_daiyuan_die'],
                            subSkill: {
                                die: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.countMark('gtxx_shouyi') > player.maxHp;
                                    },
                                    content() {
                                        target.addSkill('gtxx_xianqu');
                                        player.die();
                                    },
                                },
                            },
                        },
                        gtxx_wenyao: {
                            audio: 'ext:钢铁雄心4/audio:1',
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            content() {
                                player.addSkill('gtxx_xianqu');
                            },
                            group: 'gtxx_wenyao_draw',
                            subSkill: {
                                draw: {
                                    trigger: {
                                        global: 'gtxx_xianquAfter',
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        gtxx_xianqing: {
                            audio: 'ext:钢铁雄心4/audio:1',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return player.isDamaged();
                            },
                            selectTarget: [1, 3],
                            filterTarget: true,
                            content() {
                                target.draw(2);
                                player.skip('phaseDraw');
                            },
                        },
                        gtxx_weijian: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - from.countMark('gtxx_weijian');
                                },
                            },
                            marktext: '围',
                            intro: {
                                name: '围歼',
                                content: 'mark',
                            },
                            group: 'gtxx_weijian_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    filter(event, player) {
                                        if (event.card && event.card.name == 'sha') return true;
                                        return false;
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.player.hp < trigger.player.maxHp) {
                                            trigger.num++;
                                        } else {
                                            player.addMark('gtxx_weijian');
                                        }
                                    },
                                },
                            },
                        },
                        gtxx_xiezhan: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            usable: 1,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                player.chooseUseTarget({ name: 'sha' }, get.prompt('gtxx_xiezhan'), '视为使用一张【杀】', false);
                                player.draw();
                            },
                        },
                        gtxx_lidang: {
                            forced: true,
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: true,
                            selectTarget: [1, 3],
                            content() {
                                player.gainPlayerCard(target, 'hej', true);
                            },
                            marktext: '革',
                            intro: {
                                name: '革命',
                                content: 'mark',
                            },
                            group: ['gtxx_lidang_draw', 'gtxx_lidang_lose'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: 'gainAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.addMark('gtxx_lidang');
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    preHidden: true,
                                    filter(event, player) {
                                        if (player == _status.currentPhase) return false;
                                        if (event.name == 'gain' && event.player == player) return false;
                                        var evt = event.getl(player);
                                        return evt && evt.cards2 && evt.cards2.length;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                            },
                        },
                        gtxx_geming: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'h',
                            filterCard: true,
                            selectCard: -1,
                            prompt: "弃置所有手牌和10枚'立党',摸10张牌,将体力回复至上限,失去〖立党〗并获得〖导师〗",
                            check(card) {
                                return 6 - get.value(card);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player) {
                                player.storage.gtxx_geming = false;
                            },
                            filter(event, player) {
                                if (player.countMark('gtxx_lidang') < 10) return false;
                                return true;
                            },
                            content() {
                                player.awakenSkill('gtxx_geming');
                                player.removeMark('gtxx_lidang', -1);
                                player.draw(10);
                                player.hp = player.maxHp;
                                player.removeSkill('gtxx_lidang');
                                player.addSkill('gtxx_daoshi');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                                threaten: 1.5,
                            },
                        },
                        gtxx_daoshi: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 2,
                            filter(event, player) {
                                if (!player.countCards('hes')) return false;
                                for (var i of lib.inpile) {
                                    var type = get.type2(i);
                                    if ((type == 'basic' || type == 'trick') && event.filterCard({ name: i }, player, event)) return true;
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
                                            for (var j of lib.inpile_nature) {
                                                if (event.filterCard && event.filterCard({ name: name, nature: j }, player, event)) list.push(['基本', '', 'sha', j]);
                                            }
                                        } else if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) list.push(['锦囊', '', name]);
                                        else if (get.type(name) == 'basic' && event.filterCard({ name: name }, player, event)) list.push(['基本', '', name]);
                                    }
                                    return ui.create.dialog('导师', [list, 'vcard']);
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
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: true,
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: 'hes',
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        precontent() {
                                            player.draw();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type2(name);
                                return (type == 'basic' || type == 'trick') && player.countCards('hes') > 0;
                            },
                            ai: {
                                combo: 'spwuku',
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
                        gtxx_xiaozhang: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            selectCard: -1,
                            position: 'h',
                            viewAs: {
                                name: 'juedou',
                            },
                            group: 'gtxx_xiaozhang_counter',
                            subSkill: {
                                counter: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event.parent;
                                        return evt.skill == 'gtxx_xiaozhang' && evt.player == player;
                                    },
                                    content() {
                                        var target = trigger.parent.target;
                                        trigger.num = 2;
                                    },
                                },
                            },
                            ai: {
                                wuxie(target, card, player, viewer, status) {
                                    if (player === game.me && get.attitude(viewer, player._trueMe || player) > 0) return 0;
                                    if (status * get.attitude(viewer, target) * get.effect(target, card, player, target) >= 0) return 0;
                                },
                                basic: {
                                    order: 5,
                                    useful: 1,
                                    value: 5.5,
                                },
                                result: {
                                    target: -1.5,
                                    player(player, target, card) {
                                        if (
                                            player.hasSkillTag(
                                                'directHit_ai',
                                                true,
                                                {
                                                    target: target,
                                                    card: card,
                                                },
                                                true
                                            )
                                        ) {
                                            return 0;
                                        }
                                        if (get.damageEffect(target, player, target) > 0 && get.attitude(player, target) > 0 && get.attitude(target, player) > 0) {
                                            return 0;
                                        }
                                        var hs1 = target.getCards('h', 'sha');
                                        var hs2 = player.getCards('h', 'sha');
                                        if (hs1.length > hs2.length + 1) {
                                            return -2;
                                        }
                                        var hsx = target.getCards('h');
                                        if (hsx.length > 2 && hs2.length == 0 && hsx[0].number < 6) {
                                            return -2;
                                        }
                                        if (hsx.length > 3 && hs2.length == 0) {
                                            return -2;
                                        }
                                        if (hs1.length > hs2.length && (!hs2.length || hs1[0].number > hs2[0].number)) {
                                            return -2;
                                        }
                                        return -0.5;
                                    },
                                },
                                tag: {
                                    respond: 2,
                                    respondSha: 2,
                                    damage: 1,
                                },
                            },
                        },
                        gtxx_zudi: {
                            forced: true,
                            trigger: {
                                player: 'loseAfter',
                            },
                            content() {
                                'step 0';
                                event.count == trigger.length;
                                ('step 1');
                                event.count--;
                                if (Math.random() < 0.25) {
                                    player.changeHujia();
                                } else if (Math.random() < 0.55) {
                                    player.draw();
                                }
                                ('step 2');
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            },
                            group: 'gtxx_zudi_draw',
                            subSkill: {
                                draw: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    filter(event, player) {
                                        if (player.countCards('h')) return false;
                                        return true;
                                    },
                                    content() {
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        gtxx_buxie: {
                            audio: 'ext:钢铁雄心4/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                for (var i = 1; i < 6; i++) {
                                    if (target.hasEmptySlot(i)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.num = 1;
                                ('step 1');
                                while (!target.hasEmptySlot(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip' + event.num && target.canUse(card, target);
                                });
                                if (card) {
                                    target.chooseUseTarget(card, true, 'nopopup');
                                }
                                event.num++;
                                if (event.num <= 5) event.redo();
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target(player, target) {
                                        return (target.hasSkillTag('noe') ? 2 : 1) * (5 - target.countCards('e') - target.countDisabled());
                                    },
                                },
                            },
                        },
                        gtxx_polao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                target.loseHp();
                                target.draw(2);
                                player.draw();
                            },
                        },
                        gtxx_shijia: {
                            forced: true,
                            mod: {
                                maxHandcard(player, num) {
                                    var num1 = Math.min(game.roundNumber + 1, 5);
                                    return num + num1;
                                },
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            content() {
                                var num1 = Math.min(game.roundNumber + 1, 5);
                                player.draw(num1);
                                if (game.roundNumber > 4 && !player.hasSkill('gtxx_meixie')) {
                                    player.addSkill('gtxx_meixie');
                                }
                            },
                            group: 'gtxx_shijia_skip',
                            subSkill: {
                                skip: {
                                    forced: true,
                                    trigger: {
                                        player: 'phaseDrawBefore',
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        gtxx_lianjun: {
                            forced: true,
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return Math.random() < 0.5;
                            },
                            content() {
                                player.draw();
                                player.chooseToUse('你可以使用1张牌');
                            },
                        },
                    },
                    translate: {
                        裕仁: '裕仁',
                        孙文: '孙文',
                        蒋中正: '蒋中正',
                        杜聿明: '杜聿明',
                        朱可夫: '朱可夫',
                        李大钊: '李大钊',
                        陈独秀: '陈独秀',
                        林彪: '林彪',
                        列宁: '列宁',
                        莫德尔: '莫德尔',
                        斯佩尔: '斯佩尔',
                        麦克阿瑟: '麦克阿瑟',
                        这是一个技能: '这是一个技能',
                        这是一个技能_info: '这是一个技能',
                        招核: '招核',
                        招核_info: '锁定技,准备阶段,你失去一点体力',
                        侵华: '侵华',
                        侵华_info: '当你造成伤害时,你获得目标角色的一张牌',
                        逸仙: '逸仙',
                        逸仙_info: '锁定技,你始终跳过判定阶段和弃牌阶段',
                        三民: '三民',
                        三民_info: '出牌阶段限一次,你摸三张牌并回复一点体力.',
                        辛亥: '辛亥',
                        辛亥_info: '当你造成伤害时,你摸2张牌',
                        gtxx_meixie: '美械',
                        gtxx_meixie_info: '锁定技,你使用牌无距离和次数限制;当你造成1点伤害时,【将中正】摸一张牌.',
                        gtxx_haoyuan: '号援',
                        gtxx_haoyuan_info: '出牌阶段限一次,你获得1点护甲并选择一名其他角色令其摸两张牌并获得技能〖美械〗,直到其回合结束.',
                        gtxx_juedi: '决堤',
                        gtxx_juedi_info: '限定技,出牌阶段,若你已损失体力值不小于2,你可以弃置所有手牌对其他所有角色造成两点雷电伤害.',
                        gtxx_weizuo: '委座',
                        gtxx_weizuo_info: '主公技,每名角色准备阶段,当场上角色不大于4时,你获得〖美械〗.',
                        gtxx_tongren: '统任',
                        gtxx_tongren_info: '锁定技,准备、结束阶段或当你受到伤害时,你有40%概率可以选择一项:1.摸两张牌;2.回复一点体力.',
                        gtxx_jieyi: '捷役',
                        gtxx_jieyi_info: "出牌阶段限X次,你可以对一名角色造成一点火焰伤害(X为'捷'的个数+1且最多为3);当你击杀一名角色,你获得一个'捷'并摸一张牌(若’捷‘的数量等于2则改为摸两张牌).",
                        gtxx_weiguo: '卫国',
                        gtxx_weiguo_info: '锁定技,当一名其他角色成为锦囊牌的目标时(使用者不是你),若此牌的目标角色数为1,你可以弃置一张牌并摸一张牌,将此锦囊牌转移给你.',
                        gtxx_zhuocai: '卓才',
                        gtxx_zhuocai_info: '出牌阶段限一次,你可以交给一名角色最多三张牌,你从牌堆随机获得三种类型的牌各一张.',
                        gtxx_xianqu: '先驱',
                        gtxx_xianqu_info: '出牌阶段限一次,你可以观看一名其他角色的手牌并将手牌摸至四张.',
                        gtxx_shouyi: '首义',
                        gtxx_shouyi_info: '锁定技,当你受到伤害时,你免疫此次伤害并选择一名角色令其摸两张牌,你摸一张牌并获得一个‘坚守’标记.',
                        gtxx_daiyuan: '待援',
                        gtxx_daiyuan_info: '出牌阶段限一次,你可以弃置两张手牌,移除一个‘坚守’标记.回合结束后,若‘坚守’标记的数量大于你的体力上限,则你令一名其他角色获得〖先驱〗死亡.',
                        gtxx_wenyao: '文耀',
                        gtxx_wenyao_info: '锁定技,游戏开始时,你获得〖先驱〗;当场上角色使用〖先驱〗后你摸两张牌.',
                        gtxx_xianqing: '贤青',
                        gtxx_xianqing_info: '摸牌阶段开始前,若你已受伤,你可以跳过摸牌阶段并令其他最多三名角色摸两张牌.',
                        gtxx_weijian: '围歼',
                        gtxx_weijian_info: '锁定技,当你使用【杀】造成伤害时,若目标角色已受伤则此伤害+1,反之你获得一个‘围’标记.你计算与其他角色的距离时-X(X为‘围’的数量)',
                        gtxx_xiezhan: '协战',
                        gtxx_xiezhan_info: '每回合限一次,当有角色使用【杀】后,你可以视为使用一张【杀】并摸一张牌.',
                        gtxx_lidang: '立党',
                        gtxx_lidang_info: '①出牌阶段限一次,你可以选择最多三名角色并获得其任意区域中一张牌;②你的回合外,当你失去牌时,你摸一张牌;③当你获得牌后,你获得一个‘革命’标记.',
                        gtxx_geming: '革命',
                        gtxx_geming_info: '限定技,若你的‘革命’标记大于十,你可以移除所有‘革命’、弃置所有手牌,摸十张牌并将体力回复至上限,失去〖立党〗并获得〖导师〗.',
                        gtxx_daoshi: '导师',
                        gtxx_daoshi_info: '每回合限两次,你可以将一张牌当做任意基本牌或锦囊牌使用,摸一张牌.',
                        gtxx_xiaozhang: '嚣张',
                        gtxx_xiaozhang_info: '出牌阶段限一次,你可以将所有手牌当作一张2点伤害的【决斗】使用.',
                        gtxx_zudi: '阻敌',
                        gtxx_zudi_info: '锁定技,①当你失去一张牌后,你有25%概率增加一点护甲,30%概率摸一张牌;②回合开始时,若你没有手牌,你摸两张牌.',
                        gtxx_buxie: '补械',
                        gtxx_buxie_info: '出牌阶段限一次,你可选择一名有空装备栏的角色.系统为该角色的每个空装备栏选择一张装备牌,该角色使用之.',
                        gtxx_polao: '迫劳',
                        gtxx_polao_info: '出牌阶段限一次,你可以选择一名其他角色,目标失去一点体力并摸两张牌,你摸一张牌.',
                        gtxx_shijia: '世家',
                        gtxx_shijia_info: '锁定技,①你始终跳过摸牌阶段;②准备阶段开始时,你摸X张牌;当游戏轮数不小于5时,你获得〖美械〗;③你的手牌上限+X.(X为游戏轮数+1,且至多为5)',
                        gtxx_lianjun: '联军',
                        gtxx_lianjun_info: '锁定技,每名角色回合结束时,你有50%概率摸一张牌并使用一张牌.',
                    },
                };
                for (const i in QQQ.character) {
                    const info = QQQ.character[i];
                    info[4].push(`ext:钢铁雄心4/image/${i}.jpg`);
                    info[4].push(`die:ext:钢铁雄心4/audio/${i}.mp3`);
                }
                lib.config.all.characters.add('钢铁雄心4');
                lib.config.characters.add('钢铁雄心4');
                lib.translate['钢铁雄心4_character_config'] = `钢铁雄心4`;
                return QQQ;
            });
        },
        package: {
            intro: "<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '东方红',
            version: '0.1',
        },
    };
});

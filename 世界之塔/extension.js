import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '世界之塔',
        content(config, pack) {
            get.groupnature = function (group, method) {
                var nature;
                switch (group) {
                    case '混沌域':
                        nature = 'fire';
                        break;
                    case '异世界':
                        nature = 'thunder';
                        break;
                    case '幻想乡':
                        nature = 'fire';
                        break;
                    case '泰拉大陆':
                        nature = 'thunder';
                        break;
                    case '伊提拉':
                        nature = 'metal';
                        break;
                    case '空间站':
                        nature = 'thunder';
                        break;
                    case '奇迹大陆':
                        nature = 'fire';
                        break;
                    case '迦勒底':
                        nature = 'metal';
                        break;
                    case '格兰索':
                        nature = 'metal';
                        break;
                    case '蕾兰':
                        nature = 'soil';
                        break;
                }
                if (method == 'raw') {
                    return nature;
                }
                return nature + 'mm';
            };
            lib.group.push('格兰索');
            lib.translate.格兰索 = '格兰索';
            lib.group.push('迦勒底');
            lib.translate.迦勒底 = '迦勒底';
            lib.group.push('奇迹大陆');
            lib.translate.奇迹大陆 = '奇迹大陆';
            lib.group.push('伊提拉');
            lib.translate.伊提拉 = '伊提拉';
            lib.group.push('泰拉大陆');
            lib.translate.泰拉大陆 = '泰拉大陆';
            lib.group.push('空间站');
            lib.translate.空间站 = '空间站';
            lib.group.push('幻想乡');
            lib.translate.幻想乡 = '幻想乡';
            lib.group.push('异世界');
            lib.translate.异世界 = '异世界';
            lib.group.push('混沌域');
            lib.translate.混沌域 = '混沌域';
            lib.group.push('蕾兰');
            lib.translate.蕾兰 = '蕾兰';
            //世界之塔❖势力
            lib.translate.xihuayu = '希花语';
            lib.translate.shengbei = '圣杯战争';
            lib.translate.xindong = '心动咖啡';
            lib.translate.shanyao = '闪耀暖暖';
            lib.translate.fangzhou = '明日方舟';
            lib.translate.xingtie = '星穹铁道';
            lib.translate.dongfang = '东方幻想乡';
            lib.translate.sanguo = '欢乐三国杀';
            lib.translate.wotui = '我推的孩子';
            lib.translate.jingjie = '境界';
            lib.translate.yuezhan = '约会大作战';
            lib.translate.dangan = '碧蓝档案';
            lib.translate.hundun = '混沌之初';
            lib.translate.gongzhu = '公主连结';
            lib.translate.tianshi = '我与天使之仇';
            //世界之塔❖系列
            lib.characterSort.世界之塔 = {
                tianshi: ['lg_tangyuanyougui', 'lg_yingzuowuye'],
                hundun: ['lg_zuozhiweiai'],
                gongzhu: ['lg_'],
                dangan: ['lg_feiniaomashi'],
                yuezhan: ['lg_yuanyizhezhi'],
                jingjie: ['lg_'],
                wotui: ['lg_'],
                sanguo: ['lg_'],
                dongfang: ['lg_erzitianlinai', 'lg_shiliuyexiaoye', 'lg_lunaqielude', 'lg_huoqinge'],
                xindong: ['lg_baoquanhanzhang', 'lg_yushuinai', 'lg_shenziqiange', 'lg_jinwanxiashu'],
                shanyao: ['lg_anuosi', 'lg_nuannuan', 'lg_yuntan', 'lg_huihuicao'],
                xingtie: ['lg_heita'],
                fangzhou: ['lg_amiya'],
                shengbei: ['lg_beimihu', 'lg_yuzhoulin', 'lg_aertuoliya', 'lg_mogen', 'lg_mizhilanwan'],
                xihuayu: ['lg_pingsongquan', 'lg_pingsonggui', 'lg_jiangqixingnai', 'lg_yizhilaiyuan', 'lg_yitengxihua'],
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '世界之塔',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    characterTitle: {
                    },
                    characterIntro: {
                    },
                    skill: {
                        lg_zhu_yitengxihua: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_yitengxihua2');
                                    player.addSkill('lg_zhu_yitengxihua1');
                                }
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_zhu_yitengxihua2');
                                    player.addSkill('lg_nei_yitengxihua1');
                                }
                            },
                        },
                        lg_zhu_yitengxihua1: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_wanwuzhishi.jpg',
                            intro: {
                                content: '「万物之始·主神」<br/>天赋效果:<br/>出牌阶段开始时,你可以视为使用一张普通锦囊牌.若如此做,你不能使用除此牌以外的普通锦囊牌,直到本回合结束.',
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                }
                                if (list.length == 0) {
                                    event.finish();
                                    return ui.create.dialog('无');
                                }
                                var dialog = ui.create.dialog('视为使用一张普通锦囊牌', [list, 'vcard']); //QQQ
                                player.chooseButton(dialog).ai = function (button) {
                                    if (['wugu', 'jiedao'].includes(button.link[2])) return 0;
                                    if (
                                        player.countCards('hs', function (card) {
                                            return card.name != button.link[2] && player.getUseValue(card) > 0 && get.type(card) == 'trick';
                                        }) -
                                        player.countCards('hs', button.link[2]) >
                                        1
                                    )
                                        return 0;
                                    return player.getUseValue(button.link[2]);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseUseTarget(
                                            {
                                                name: result.links[0][2],
                                            },
                                            false
                                        )
                                        .set('forced', true)
                                    player.addTempSkill('lg_zhu_yitengxihua1_db', 'phaseEnd');
                                    player.storage.lg_zhu_yitengxihua1_db = result.links[0][2];
                                }
                            },
                            subSkill: {
                                db: {
                                    mark: true,
                                    marktext: '✿',
                                    intro: {
                                        content: '$',
                                    },
                                    charlotte: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.type(card, player) == 'trick' && card.name != player.storage.lg_zhu_yitengxihua1_db) return false;
                                        },
                                    },
                                    onremove(player, skill) {
                                        delete player.storage.lg_zhu_yitengxihua1_db;
                                    },
                                },
                            },
                        },
                        lg_zhu_yitengxihua2: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yitengxihua1.mp3';
                                var list = ['wanwuzhishi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_jinguangyelu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            filter(event, player) {
                                var list = [1, 2, 3, 4, 5];
                                for (var a of list) {
                                    if (player.isEmpty(a)) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var list = [1, 2, 3, 4, 5];
                                var num = 0;
                                for (var a of list) {
                                    if (player.isEmpty(a)) num++;
                                }
                                player
                                    .chooseTarget(get.prompt2('lg_jinguangyelu'), [1, num], function (card, player, target) {
                                        return target.countCards('he') > 0;
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    event.cards = [];
                                    result.targets.sortBySeat();
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    event.current = target;
                                    player.choosePlayerCard('he', target, true);
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    event.current.lose(card, ui.special);
                                    event.current.$give(card, player, false);
                                    event.cards.push(card);
                                    event.goto(2);
                                }
                                ('step 4');
                                if (event.cards.length) {
                                    var card = event.cards.shift();
                                    event.c = card;
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                var list = [1, 2, 3, 4, 5];
                                for (var a of list) {
                                    if (player.isEmpty(a)) {
                                        var card = event.c;
                                        var n = card.name + '_lg_jinguangyelu' + a;
                                        lib.card[n] = get.copy(get.info(card));
                                        lib.card[n].subtype = 'equip' + a;
                                        lib.card[n].cardimage = card.name;
                                        lib.card[n].source_name = card.name;
                                        lib.translate[n] = lib.translate[card.name];
                                        lib.translate[n + '_info'] = lib.translate[card.name + '_info'];
                                        lib.card[n].epic = true;
                                        lib.card[n].loseDelay = false;
                                        lib.card[n].onLose = function () {
                                            card.init([card.suit, card.number, lib.card[card.name].source_name, card.nature]);
                                        };
                                        var cards = [card.suit, card.number, n, card.nature];
                                        card.init(cards);
                                        player.equip(card);
                                        break;
                                    }
                                }
                                event.goto(4);
                            },
                            mod: {
                                globalFrom(from, to, distance) {
                                    return (distance -= from.countCards('h'));
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        var list = [1, 2, 3, 4, 5];
                                        var num = 0;
                                        for (var a of list) {
                                            if (player.isEmpty(a)) num++;
                                        }
                                        if (
                                            player == target &&
                                            game.countPlayer(function (current) {
                                                return player.getEnemies().includes(current);
                                            }) >= num
                                        ) {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                    },
                                },
                            },
                            group: ['lg_jinguangyelu_dis'],
                            subSkill: {
                                dis: {
                                    audio: 'ext:黎光/Archive:2',
                                    forced: true,
                                    trigger: {
                                        player: 'discardPlayerCardBegin',
                                    },
                                    filter(event, player) {
                                        for (var a = 0; a < player.getCards('e').length; a++) {
                                            if (player.getCards('e')[a].name.indexOf('lg_jinguangyelu') > 0) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        var cards = [];
                                        for (var a = 0; a < player.getCards('e').length; a++) {
                                            if (player.getCards('e')[a].name.indexOf('lg_jinguangyelu') > 0) cards.push(player.getCards('e')[a]);
                                        }
                                        player.discard(cards);
                                        player.draw(cards.length);
                                        player.recover();
                                    },
                                },
                            },
                        },
                        lg_huacaofanrong: {
                            group: 'lg_huacaofanrong_damage',
                            enable: 'phaseUse',
                            audio: 'ext:世界之塔/Archive:3',
                            filterTarget(card, player, target) {
                                if (player.hp >= player.countCards('h')) return false;
                                if (target.countCards('hej') == 0) return false;
                                if (target == player) return false;
                                var num = Math.min(Math.abs(player.countCards('hej') - target.countCards('h')), 5);
                                return player.countCards('hej') >= num;
                            },
                            logTarget: 'target',
                            content() {
                                'step 0';
                                var num = Math.min(Math.abs(player.countCards('hej') - target.countCards('h')), 5);
                                if (num != 0) player.chooseToDiscard(num, true);
                                event.target1 = target;
                                ('step 1');
                                event.num3 = game.countPlayer() - 1;
                                target.showHandcards();
                                ('step 2');
                                event.videoId = lib.status.videoId++;
                                var cards = target.getCards('h');
                                event.dialog = ui.create.dialog('请选择牌进行分配', cards);
                                event.dialog.videoId = event.videoId;
                                if (!event.isMine()) {
                                    event.dialog.style.display = 'none';
                                }
                                var list = [];
                                var hs = target.getCards('h');
                                for (var i of hs) {
                                    list.add(i.suit);
                                }
                                player
                                    .chooseCardButton(true, [1, Math.min(list.length, event.num3)])
                                    .set('dialog', event.videoId)
                                    .set('filterButton', function (button) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                        }
                                        return true;
                                    });
                                ('step 3');
                                if (result.bool) {
                                    event.dialog.close();
                                    var num2 = result.links.length;
                                    event.num2 = num2;
                                    event.link = result.links.slice(0);
                                } else event.finish();
                                ('step 4');
                                player
                                    .chooseTarget(true, '请选择' + get.cnNumber(event.num2) + '名角色', event.num2, function (card, player, target) {
                                        return target != event.target1;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) + 0.5;
                                    });
                                ('step 5');
                                if (result.targets?.length) {
                                    while (result.targets.length) {
                                        var target0 = result.targets.shift();
                                        var card = event.link.shift();
                                        target0.gain(card, target);
                                        target.$give(card, target0);
                                    }
                                    event.next.sort(function (a, b) {
                                        return lib.sort.seat(a.player, b.player);
                                    });
                                }
                                ('step 6');
                            },
                            ai: {
                                order: 6,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: 'lg_zhu_yitengxihua1End',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('发动此技能？', function (card, player, target) {
                                                if (target.countCards('h') == 0) return false;
                                                if (target == player) return false;
                                                var num = Math.min(Math.abs(player.countCards('h') - target.countCards('h')), 5);
                                                return player.countCards('h') >= num;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target) + 0.5;
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var num = Math.min(Math.abs(player.countCards('h') - result.targets[0].countCards('h')), 5);
                                            if (num != 0) player.chooseToDiscard(num, true);
                                            var target = result.targets[0];
                                            event.target = target;
                                            event.num3 = game.countPlayer() - 1;
                                            target.showHandcards();
                                        } else event.finish();
                                        ('step 2');
                                        event.videoId = lib.status.videoId++;
                                        var cards = event.target.getCards('h');
                                        event.dialog = ui.create.dialog('请选择牌进行分配', cards);
                                        event.dialog.videoId = event.videoId;
                                        if (!event.isMine()) {
                                            event.dialog.style.display = 'none';
                                        }
                                        var list = [];
                                        var hs = event.target.getCards('h');
                                        for (var i of hs) {
                                            list.add(i.suit);
                                        }
                                        player
                                            .chooseCardButton(true, [1, Math.min(list.length, event.num3)])
                                            .set('dialog', event.videoId)
                                            .set('filterButton', function (button) {
                                                for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                    if (button.link.suit == ui.selected.buttons[i].link.suit) return false;
                                                }
                                                return true;
                                            });
                                        ('step 3');
                                        if (result.bool) {
                                            event.dialog.close();
                                            var num2 = result.links.length;
                                            event.num2 = num2;
                                            event.link = result.links.slice(0);
                                        } else event.finish();
                                        ('step 4');
                                        player
                                            .chooseTarget('请选择' + get.cnNumber(event.num2) + '名角色', event.num2, function (card, player, target) {
                                                return target != event.target;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(_status.event.player, target) + 0.5;
                                            });
                                        ('step 5');
                                        if (result.targets?.length) {
                                            while (result.targets.length) {
                                                var target0 = result.targets.shift();
                                                var card = event.link.shift();
                                                target0.gain(card, event.target);
                                                event.target.$give(card, target0);
                                            }
                                            event.next.sort(function (a, b) {
                                                return lib.sort.seat(a.player, b.player);
                                            });
                                        }
                                        ('step 6');
                                    },
                                },
                            },
                        },
                        lg_yitengxihua_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_yitengxihua1: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_wanwuzhishi.jpg',
                            intro: {
                                content: '「万物之始·叛逆者」<br/>天赋效果:<br/>出牌阶段开始时,你可以视为使用一张普通锦囊牌.若如此做,你摸两张牌,不能使用除此牌以外的普通锦囊牌,直到本回合结束.',
                            },
                            content() {
                                'step 0';
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    var name = lib.inpile[i];
                                    if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                }
                                if (list.length == 0) {
                                    //QQQ
                                    event.finish();
                                    return ui.create.dialog('无');
                                }
                                var dialog = ui.create.dialog('视为使用一张普通锦囊牌', [list, 'vcard']);
                                player.chooseButton(dialog).ai = function (button) {
                                    if (['wugu', 'jiedao'].includes(button.link[2])) return 0;
                                    if (
                                        player.countCards('hs', function (card) {
                                            return card.name != button.link[2] && player.getUseValue(card) > 0 && get.type(card) == 'trick';
                                        }) -
                                        player.countCards('hs', button.link[2]) >
                                        1
                                    )
                                        return 0;
                                    return player.getUseValue(button.link[2]);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseUseTarget(
                                            {
                                                name: result.links[0][2],
                                            },
                                            false
                                        )
                                        .set('forced', true)
                                    player.draw(2);
                                    player.addTempSkill('lg_nei_yitengxihua1_db', 'phaseEnd');
                                    player.storage.lg_nei_yitengxihua1_db = result.links[0][2];
                                }
                            },
                            subSkill: {
                                db: {
                                    mark: true,
                                    marktext: '✿',
                                    intro: {
                                        content: '$',
                                    },
                                    charlotte: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (get.type(card, player) == 'trick' && card.name != player.storage.lg_nei_yitengxihua1_db) return false;
                                        },
                                    },
                                    onremove(player, skill) {
                                        delete player.storage.lg_nei_yitengxihua1_db;
                                    },
                                },
                            },
                        },
                        lg_nei_yizhilaiyuan1: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_yizhilaiyuan');
                                    player.addSkill('lg_zhu_yizhilaiyuan2');
                                }
                            },
                        },
                        lg_zhu_yizhilaiyuan2: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yizhilaiyuan1.mp3';
                                var list = ['ezhao', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_quqiaoboli: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'damageBegin',
                            },
                            filter(event, player) {
                                return player.hp > 0;
                            },
                            logTarget: 'player',
                            prompt2: '发动此技能？',
                            check(event, player) {
                                return get.damageEffect(event.player, event.source, player, event.nature) * Math.sqrt(event.num) <= get.effect(player, { name: 'losehp' }, player, player);
                            },
                            group: 'lg_quqiaoboli_recover',
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.loseHp();
                                player.chooseToDisable();
                                player.markAuto('lg_quqiaoboli', [trigger.player]);
                                ('step 1');
                                if (player.isIn() && trigger.player.isIn()) {
                                    var targets = [player, trigger.player];
                                    targets.sortBySeat(_status.currentPhase);
                                    targets[0].draw('nodelay');
                                    targets[1].draw();
                                }
                            },
                            intro: {
                                content: '$',
                            },
                            ai: {
                                expose: 0.2,
                            },
                            subSkill: {
                                recover: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return game.hasPlayer((current) => {
                                            return current.isMinHp() && player.getStorage('lg_quqiaoboli').includes(current);
                                        });
                                    },
                                    usable: 1,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('lg_quqiaoboli_recover'), '选择目标', (card, player, target) => {
                                                return target.isMinHp() && player.getStorage('lg_quqiaoboli').includes(target);
                                            })
                                            .set('ai', (target) => {
                                                return get.recoverEffect(target, _status.event.player, _status.event.player);
                                            });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            target.recover(2);
                                            target.gain(
                                                get.cardPile(function (card) {
                                                    return card.suit == 'spade';
                                                }),
                                                'gain2'
                                            );
                                        } else player.getStat('triggerSkill').lg_quqiaoboli_recover--;
                                    },
                                },
                            },
                        },
                        lg_mingjiezhizhong: {
                            init(player) {
                                player.storage.lg_mingjiezhizhong = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'recoverBegin',
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('h') && event.player.countCards('h') && !event.player.isMinHp();
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt('lg_mingjiezhizhong', trigger.player), '你与' + get.translation(trigger.player) + '将等量的手牌均置于你的武将牌上', 'h', [1, trigger.player.countCards('h')], false).ai = function (card) {
                                    var att = get.attitude(player, _status.event.getTrigger().player);
                                    if (att >= 0) return -1;
                                    return 5.5 - get.value(card);
                                };
                                ('step 1');
                                if (result.bool) {
                                    var num = player.countCards('e') - trigger.player.countCards('e');
                                    _status.currentPhase && _status.currentPhase.draw(num);
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.storage.lg_mingjiezhizhong = player.storage.lg_mingjiezhizhong.concat(result.cards);
                                    player.markSkill('lg_mingjiezhizhong');
                                    trigger.player.chooseCard('将' + result.cards.length + '张手牌置于' + get.translation(player) + '的武将牌上', 'h', result.cards.length, true).ai = function (card) {
                                        return 20 - get.value(card);
                                    };
                                } else event.finish();
                                ('step 2');
                                trigger.player.lose(result.cards, ui.special, 'toStorage');
                                player.storage.lg_mingjiezhizhong = player.storage.lg_mingjiezhizhong.concat(result.cards);
                            },
                            ai: {
                                expose: 0.5,
                            },
                            group: ['lg_mingjiezhizhong_st'],
                            subSkill: {
                                st: {
                                    trigger: {
                                        player: ['shaMiss', 'lg_zhu_yizhilaiyuanBegin'],
                                    },
                                    filter(event, player) {
                                        return player.storage.lg_mingjiezhizhong.length;
                                    },
                                    prompt2(event, player) {
                                        return '发动此技能？';
                                    },
                                    check(card) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        event.cds = player.storage.lg_mingjiezhizhong;
                                        var tars = game.filterPlayer();
                                        event.tars = tars.sortBySeat();
                                        ('step 1');
                                        if (event.cds.length == 1) {
                                            event.tars[0].gain(event.cds[0], 'log', 'gain2');
                                            event.goto(4);
                                        } else {
                                            event.tars[0].chooseCardButton('获得其中的一张牌', true, event.cds, 1).set('ai', function (button) {
                                                return get.value(button.link);
                                            });
                                        }
                                        ('step 2');
                                        event.tars[0].gain(result.links[0], 'log', 'gain2');
                                        event.cds.remove(result.links[0]);
                                        var temp = event.tars.shift();
                                        event.tars.push(temp);
                                        ('step 3');
                                        event.goto(1);
                                        ('step 4');
                                        player.storage.lg_mingjiezhizhong = [];
                                        player.unmarkSkill('lg_mingjiezhizhong');
                                    },
                                },
                            },
                        },
                        lg_yizhilaiyuan_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_yizhilaiyuan: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_ezhao.jpg',
                            intro: {
                                content: '「噩兆·主神」<br/>天赋效果:<br/>当你处于濒死状态时,若你被横置,你可以弃置场上横置角色的各两张牌.',
                            },
                            check(event, player) {
                                var num = game.countPlayer(function (current) {
                                    if (current.isLinked() && current.countCards('he')) {
                                        return get.effect(current, { name: 'guohe_copy2' }, player, player);
                                    }
                                });
                                return num < 0;
                            },
                            filter(event, player) {
                                return player.isLinked();
                            },
                            preHidden: true,
                            prompt: '发动天赋效果？',
                            logTarget(event, player) {
                                return game.filterPlayer(function (current) {
                                    if (current.isLinked() && current.countCards('he')) {
                                        return true;
                                    }
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer(function (current) {
                                    if (current.isLinked() && current.countCards('he')) {
                                        return true;
                                    }
                                });
                                event.num = 0;
                                event.targets.sort(lib.sort.seat);
                                ('step 1');
                                if (event.num < event.targets.length) {
                                    var target = event.targets[event.num];
                                    if (player == target) {
                                        player.chooseToDiscard(2, true, 'he');
                                    } else {
                                        player.discardPlayerCard(2, true, 'he', target);
                                    }
                                    event.num++;
                                    event.redo();
                                }
                            },
                        },
                        lg_zhu_jiangqixingnai: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_jiangqixingnai2');
                                    player.addSkill('lg_zhu_jiangqixingnai1');
                                }
                            },
                        },
                        lg_zhu_jiangqixingnai2: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_jiangqixingnai1.mp3';
                                var list = ['poxiaohuanghuazhiguan', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_jiangqixingnai1: {
                            logTarget(event, player) {
                                var targets = [];
                                var evt = event.parent;
                                for (var i = event.num + 1; i < evt.targets.length; i++) {
                                    if (!evt.excluded.includes(evt.targets[i])) targets.push(evt.targets[i]);
                                }
                                return targets;
                            },
                            check(event, player) {
                                var num = 0,
                                    init = true;
                                var evt = event.parent;
                                for (var i = event.num + 1; i < evt.targets.length; i++) {
                                    if (!evt.excluded.includes(evt.targets[i])) {
                                        var eff = get.effect(evt.targets[i], event.card, player, player);
                                        if (init) {
                                            if (eff > 0) return false;
                                        }
                                        num += eff;
                                        init = false;
                                    }
                                }
                                return num < 0;
                            },
                            trigger: {
                                global: 'useCardToEnd',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_poxiaohuanghuazhiguan.jpg',
                            intro: {
                                content: '「破晓皇花之冠·主神」<br/>天赋效果:<br/>一名角色使用牌指定目标时,若此牌对其中一个目标结算后;且其不为唯一目标,你可以令当前回合角色回复1点体力,此牌对其余的目标均无效.',
                            },
                            filter(event, player) {
                                var evt = event.parent;
                                if (evt.targets.length - event.num <= 1) return false;
                                for (var i = event.num + 1; i < evt.targets.length; i++) {
                                    if (!evt.excluded.includes(evt.targets[i])) return true;
                                }
                                return false;
                            },
                            content() {
                                _status.currentPhase && _status.currentPhase.recover();
                                trigger.parent.excluded.addArray(game.filterPlayer());
                            },
                        },
                        lg_meishiyouhuo: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: ['damageBegin'],
                            },
                            filter(event, player) {
                                return game.hasPlayer((current) => {
                                    return current != event.source && current != player && current.countGainableCards(player, 'he');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget('发动此技能？', get.skillInfoTranslation('lg_meishiyouhuo'), true, (card, player, target) => {
                                        return player != target && target != _status.event.getTrigger().source && target.countGainableCards(player, 'he');
                                    })
                                    .set('ai', (target) => get.effect(target, { name: 'shunshou_copy2' }, player, player) /** (target.countCards('he')>1?1.5:1)*/);
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    if (target.ai.shown > 0) player.addExpose(0.15);
                                    var cards = target.getGainableCards(player, 'he').randomGets(1);
                                    event.cards = cards;
                                    player.gain(target, cards, 'give', 'bySelf');
                                    player.showCards(cards, '美食诱惑');
                                } else event.finish();
                                ('step 2');
                                for (var card of cards) {
                                    if (card.suit == 'heart' && player.hasUseTarget(card) && get.owner(card) == player) {
                                        player.chooseUseTarget(card);
                                        player.gain(game.createCard(get.inpile('basic').randomGet()), 'draw');
                                    }
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                            if (player != target && !player.getFriends().length) return;
                                            if (
                                                game.hasPlayer((current) => {
                                                    return current != player && get.attitude(player, current) > 0 && current.countGainableCards(target, 'he') > 0;
                                                })
                                            )
                                                return [1, 1];
                                        }
                                    },
                                },
                            },
                        },
                        lg_mimiyaoqing: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.hp < player.hp;
                            },
                            logTarget: 'player',
                            line: 'fire',
                            check(event, player) {
                                var target = event.player;
                                return get.attitude(player, target) > 0;
                            },
                            content() {
                                'step 0';
                                var num = trigger.player.hp;
                                player.draw(num);
                                ('step 1');
                                var target = trigger.player;
                                player.chooseCard(3, 'h', true, '交给' + get.translation(trigger.player) + '三张手牌').set('ai', function (card) {
                                    if (target.isDamaged && card.suit == 'diamond') return 1;
                                    if (ui.selected.cards.length && card.name == ui.selected.cards[0].name) return -1;
                                    if (get.tag(card, 'damage')) return 1;
                                    if (get.type(card) == 'equip') return 1;
                                    return 0;
                                });
                                ('step 2');
                                trigger.player.gain(result.cards, player, 'giveAuto');
                                trigger.player.addSkill('lg_mimiyaoqing_tao');
                                trigger.player.addSkill('lg_mimiyaoqing_damage');
                            },
                        },
                        lg_mimiyaoqing_tao: {
                            enable: 'chooseToUse',
                            charlotte: true,
                            viewAsFilter(player) {
                                return player.isPhaseUsing();
                            },
                            filterCard(card) {
                                return card.suit == 'diamond';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'lg_zhiliao',
                            },
                            prompt: '将一张♦️️牌当【治疗】使用',
                            check(card) {
                                return 15 - get.value(card);
                            },
                            ai: {
                                order() {
                                    return get.order({ name: 'lg_zhiliao' }) + 0.1;
                                },
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                        },
                        lg_mimiyaoqing_damage: {
                            charlotte: true,
                            trigger: {
                                global: ['phaseUseEnd'],
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            forced: true,
                            popup: false,
                            content() {
                                if (player.storage.lg_mimiyaoqing_damage == 0) player.damage(2, 'nosource');
                                player.removeSkill('lg_mimiyaoqing_tao');
                                player.removeSkill('lg_mimiyaoqing_damage');
                            },
                            group: ['lg_mimiyaoqing_damage_update'],
                            subSkill: {
                                update: {
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    content() {
                                        if (trigger.skill == 'lg_mimiyaoqing_tao') {
                                            player.storage.lg_mimiyaoqing_damage++;
                                        }
                                    },
                                },
                            },
                        },
                        lg_xinji: {
                            audio: 'ext:世界之塔/Archive:2',
                            usable: 1,
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player && _status.currentPhase) {
                                    return true;
                                }
                                return false;
                            },
                            check(event, player) {
                                return get.attitude(player, _status.currentPhase) < 0;
                            },
                            logTarget() {
                                return _status.currentPhase;
                            },
                            content() {
                                player.useCard({ name: 'sha' }, _status.currentPhase).animate = false;
                            },
                            ai: {
                                threaten: 0.9,
                            },
                        },
                        lg_jiangqixingnai_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_pingsonggui: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_pingsonggui2');
                                    player.addSkill('lg_zhu_pingsonggui1');
                                }
                            },
                        },
                        lg_zhu_pingsonggui1: {
                            usable: 1,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_douzhijifa.jpg',
                            intro: {
                                content: '「斗志激发·主神」<br/>天赋效果:<br/>一名其他角色使用牌指定你为唯一目标时,你可以弃置至多四张牌,选择一项:①弃置其等量的牌;②对其造成1点伤害.若如此做,直到当前回合结束,你不能发动此天赋效果.',
                            },
                            filter(event, player) {
                                if (player == event.player || event.targets.length != 1) return false;
                                return player.countCards('he') >= 1;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', [1, 4], get.prompt('lg_zhu_pingsonggui1', trigger.player), '<div class="text center">弃置至多四张牌？</div>')
                                    .set('ai', function (card) {
                                        if (_status.event.goon && ui.selected.cards.length < 2) return 5.6 - get.value(card);
                                        return 0;
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            var target = trigger.player;
                                            if (get.damageEffect(target, player, player) > 0) return true;
                                            if (
                                                target.countCards('he', function (card) {
                                                    return get.value(card, target) > 6;
                                                }) >= 2
                                            )
                                                return true;
                                            return false;
                                        })()
                                    );
                                ('step 1');
                                if (!result.bool) {
                                    player.getStat('triggerSkill').lg_zhu_pingsonggui1--;
                                    event.finish();
                                    return;
                                }
                                var num = result.cards.length;
                                event.num = num;
                                var target = trigger.player,
                                    str = get.translation(target);
                                event.target = target;
                                if (!target.isIn()) event.finish();
                                else if (
                                    !target.hasCard(function (card) {
                                        return lib.filter.canBeDiscarded(card, player, target);
                                    }, 'he')
                                )
                                    event._result = { index: 1 };
                                else
                                    player
                                        .chooseControl()
                                        .set('choiceList', ['弃置' + str + '的' + get.cnNumber(num) + '张牌', '对' + str + '造成1点伤害'])
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var eff0 = get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.min(1.7, target.countCards('he'));
                                            var eff1 = get.damageEffect(target, player, player);
                                            return eff0 > eff1 ? 0 : 1;
                                        });
                                ('step 2');
                                if (result.index == 0) player.discardPlayerCard(target, num, true, 'he');
                                else target.damage();
                            },
                        },
                        lg_wuyongfanji: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'useCardBefore',
                            },
                            filter(event, player) {
                                if (player.hasSkill('lg_wuyongfanji_temp') || event.player == player || get.tag(event.card, 'damage')) return false;
                                return event.targets.includes(player);
                            },
                            check(event, player) {
                                return get.effect(player, event.card, event.player, player) < 0;
                            },
                            logTarget: 'player',
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + '使用的' + get.translation(event.card) + '牌无效？';
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('lg_wuyongfanji_temp');
                                trigger.targets.remove(player);
                                trigger.player.draw('visible');
                                ('step 1');
                                var gained = result.cards[0];
                                var info = get.info(gained);
                                if (!lib.filter.cardEnabled(gained, trigger.player) || !trigger.player.canUse(gained, player) || !info || info.multitarget) {
                                    trigger.player.discard(gained);
                                } else {
                                    var num = trigger.player.getAttackRange();
                                    player.useCard(gained, trigger.player);
                                    trigger.player.chooseToDiscard(num, true, 'h');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (!get.tag(card, 'damage')) return 0.7;
                                    },
                                },
                            },
                            subSkill: {
                                temp: {
                                },
                            },
                        },
                        lg_wuyongdikang: {
                            audio: 'ext:世界之塔/Archive:3',
                            group: ['lg_wuyongdikang_use', 'lg_wuyongdikang_sha', 'lg_wuyongdikang_shan'],
                        },
                        lg_pingsonggui_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_wuyongdikang_use: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) || (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) || (event.filterCard && event.filterCard({ name: 'tao' }, player, event))) {
                                    return !player.isTurnedOver();
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        list.push(['基本', '', 'sha', 'ice']);
                                        list.push(['基本', '', 'sha', 'fire']);
                                        list.push(['基本', '', 'sha', 'thunder']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    return ui.create.dialog('无用抵抗', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    //var effect=player.getUseValue(button.link[2]);
                                    //if(effect>0) return effect;
                                    //return 0;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                                return 3.02;
                                            case 'jiu':
                                                return 3.01;
                                            case 'shan':
                                                return 3.01;
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAsFilter(player) {
                                            return !player.isTurnedOver();
                                        },
                                        // viewAs:{name:links[0][2],nature:links[0][3]},
                                        viewAs: { name: links[0][2], nature: links[0][3], suit: null, number: null },
                                        popname: true,
                                        ignoreMod: true,
                                        precontent() {
                                            //player.draw(player.maxHp-player.countCards('h'));
                                            player.showHandcards();
                                            player.turnOver();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用一张' + get.translation(links[0][3] || '') + get.translation(links[0][2]);
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
                                save: true,
                                respondSha: true,
                                respondShan: true,
                                result: {
                                    player(player, target) {
                                        var target = game.findPlayer(function (current) {
                                            return current.hp <= 0;
                                        });
                                        if (target && get.attitude(player, target) > 0) return 1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        lg_wuyongdikang_sha: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event, player) {
                                if (player.countCards('h', 'sha') > 0) return 0;
                                if (player.hp < 2 && player.countCards('h', 'sha') <= 0) return 1;
                                return Math.random();
                            },
                            filter(event, player) {
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player)) return false;
                                if (!lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                                //  if(event.parent.name!='sha') return false;
                                return !player.isTurnedOver();
                            },
                            content() {
                                //player.draw(player.maxHp-player.countCards('h'));
                                player.showHandcards();
                                player.turnOver();
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'sha' } };
                            },
                        },
                        lg_wuyongdikang_shan: {
                            trigger: {
                                player: 'chooseToRespondBegin',
                            },
                            check(event, player) {
                                if (player.countCards('h', 'shan') > 0) return 0;
                                if (player.hp < 2 && player.countCards('h', 'shan') <= 0) return 1;
                                return Math.random();
                            },
                            filter(event, player) {
                                if (!lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player)) return false;
                                return !player.isTurnedOver();
                            },
                            content() {
                                player.showHandcards();
                                player.turnOver();
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            },
                        },
                        lg_zhu_pingsonggui2: {
                            usable: 2,
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_pingsonggui1.mp3';
                                var list = ['douzhijifa', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_chunzhenzhufu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'damageBegin',
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                return event.player != player && event.player.isIn() && event.card && event.card.name != 'sha' && event.player.countGainableCards(player, 'hej') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.gainPlayerCard(trigger.player, true, 'hej');
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    if (card.suit == 'heart') {
                                        trigger.player.draw(4);
                                    }
                                    if (card.suit == 'diamond') {
                                        trigger.player.draw(2);
                                        player.draw(2);
                                    }
                                    if (card.suit == 'spade') {
                                        player.loseHp(2);
                                        trigger.cancel();
                                        trigger.player.chooseToDiscard('请弃置两张红色手牌', 2, 'h', true, { color: 'red' });
                                    }
                                    if (card.suit == 'club') {
                                        var num = trigger.source.countCards('hj', { suit: 'heart' }) + player.countCards('hj', { suit: 'heart' });
                                        trigger.player.chooseDrawRecover(num, 2);
                                    }
                                }
                            },
                        },
                        lg_zhu_pingsongquan: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_pingsongquan2');
                                    player.addSkill('lg_zhu_pingsongquan1');
                                }
                            },
                        },
                        lg_pingsongquan_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_pingsongquan1: {
                            trigger: {
                                player: ['useCard', 'respondEnd'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_qidao.jpg',
                            intro: {
                                content: '「祈祷·主神」<br/>天赋效果:<br/>当你使用或打出一张♣️️牌后,你可以令一名角色回复1点体力.',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.card.suit == 'club') {
                                    return game.hasPlayer(function (current) {
                                        return current.isDamaged();
                                    });
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var noneed = trigger.card.name == 'tao' && trigger.targets[0] == player && player.hp == player.maxHp - 1;
                                player
                                    .chooseTarget(get.prompt('lg_zhu_pingsongquan1'), function (card, player, target) {
                                        return target.hp < target.maxHp;
                                    })
                                    .set('autodelay', true).ai = function (target) {
                                        var num = get.attitude(player, target);
                                        if (num > 0) {
                                            if (noneed && player == target) {
                                                num = 0.5;
                                            } else if (target.hp == 1) {
                                                num += 3;
                                            } else if (target.hp == 2) {
                                                num += 1;
                                            }
                                        }
                                        return num;
                                    };
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].recover();
                                }
                            },
                            ai: {
                                expose: 0.3,
                                threaten: 1.5,
                            },
                        },
                        lg_zhu_pingsongquan2: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_pingsongquan1.mp3';
                                var list = ['qidao', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_huoqinge: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_huoqinge2');
                                    player.addSkill('lg_zhu_xujiahuanxiang');
                                }
                            },
                        },
                        lg_zhu_xujiahuanxiang: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_xujiahuanxiang.jpg',
                            intro: {
                                content: '「虚假幻想·主神」<br/>天赋效果:<br/>一名其他角色使用【杀】对你造成伤害时,若你的装备区内有宝物牌,你可以获得此【杀】对应的实体牌,将这些牌当【杀】对其使用.若其的装备区内没有宝物牌,你从牌堆底摸一张牌,防止此【杀】造成的伤害.',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.source && event.source.isIn() && player != event.source && event.cards.filterInD().length && player.getEquip(5);
                            },
                            check(event, player) {
                                var card = {
                                    name: 'sha',
                                    cards: event.cards.filterInD(),
                                },
                                    target = event.source;
                                return !player.canUse(card, target, false) || get.effect(target, card, player, player) > 0;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.cards.filterInD();
                                player.gain(event.cards, 'gain2');
                                ('step 1');
                                var target = trigger.source,
                                    hs = player.getCards('h');
                                if (
                                    target &&
                                    target.isIn() &&
                                    hs.length >= cards.length &&
                                    cards.filter(function (i) {
                                        return hs.includes(i);
                                    }).length == cards.length &&
                                    player.canUse({ name: 'sha', cards: cards }, target, false)
                                ) {
                                    var next = player.useCard({ name: 'sha' }, cards, target, false);
                                    if (!target.getEquip(5)) next.baseDamage = 0 && player.draw('bottom');
                                }
                            },
                        },
                        lg_zouhuorumo: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'useCard2',
                            },
                            filter(event, player) {
                                if (event.card.suit != 'club') return false;
                                if (!event.card || event.card.name != 'sha') return false;
                                if (!event.targets || event.player == player) return false;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (event.targets[i] == player || player.inRange(event.targets[i])) return true;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.choice = false;
                                event.num = Math.max(1, Math.min(5, player.maxHp - player.countCards('h')));
                                if (trigger.targets.includes(player)) {
                                    event.goto(3);
                                } else {
                                    player
                                        .chooseControl(['①', '②', 'cancel2'])
                                        .set('choiceList', ['摸' + get.cnNumber(event.num) + '张牌', '对其造成2点伤害'])
                                        .set('ai', function () {
                                            var eff = get.effect(player, trigger.card, trigger.player, player);
                                            for (var i = 0; i < trigger.targets.length; i++) {
                                                if (get.effect(trigger.targets[i], trigger.card, trigger.player, player) <= eff) return 0;
                                            }
                                            if (!trigger.player.hasSkillTag('nodamage') && get.damageEffect(trigger.player, player, player) > Math.abs(eff)) return 1;
                                            return 2;
                                        })
                                        .set('prompt', get.translation(trigger.player) + '使用【杀】指定' + get.translation(trigger.targets) + '为目标,发动此技能？');
                                }
                                ('step 1');
                                if (result.index == 0) {
                                    event.choice = true;
                                    event.goto(4);
                                } else if (result.index == 1) {
                                    trigger.targets.add(player);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                trigger.player.damage(2);
                                event.finish();
                                ('step 3');
                                player.chooseBool('摸' + get.cnNumber(event.num) + '张牌？').set('choice', true);
                                ('step 4');
                                if (event.choice || result.bool) {
                                    player.draw(event.num);
                                    trigger.targets = [player];
                                }
                            },
                        },
                        lg_liandong_huoqinge: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_zhu_xujiahuanxiangBegin',
                            },
                            filter(event, player) {
                                return player.countCards('h') == player.hp;
                            },
                            forced: true,
                            content() {
                                player.moveCard();
                            },
                        },
                        lg_gufenyegui: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                if (_status.currentPhase != player || player.hasSkill('lg_gufenyegui_used', null, null, false)) return false;
                                return event.card && event.parent.type == 'card' && lib.skill.lg_gufenyegui.getNum(event.player, player) > 0;
                            },
                            forced: true,
                            getNum(target, player) {
                                return target.countCards('e', (card) => {
                                    var subtype = get.subtype(card);
                                    return player.isDisabled(subtype);
                                });
                            },
                            group: 'lg_gufenyegui_disable',
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.suit == 'club';
                                    }),
                                    'gain2'
                                );
                                player.addTempSkill('lg_gufenyegui_used', ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
                                trigger.num += lib.skill.lg_gufenyegui.getNum(trigger.player, player);
                            },
                            subSkill: {
                                disable: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.es && evt.es.length;
                                    },
                                    content() {
                                        'step 0';
                                        event.cards = trigger.getl(player).es;
                                        ('step 1');
                                        var card = cards.shift(),
                                            subtype = get.subtype(card);
                                        event.subtype = subtype;
                                        if (!player.isDisabled(subtype)) {
                                            player.chooseToDiscard(1, 'he', true, { suit: 'club' });
                                            player.chooseBool(get.prompt('lg_gufenyegui_disable'), '废除' + get.translation(subtype) + '栏').set('ai', () => 2);
                                        } else event._result = { bool: false };
                                        ('step 2');
                                        if (result.bool) {
                                            var list = [];
                                            if (event.subtype == 'equip6') list.addArray(['3', '4']);
                                            else list.add(event.subtype);
                                            for (var i of list) player.disableEquip(i);
                                        }
                                        if (cards.length) event.goto(1);
                                    },
                                },
                                used: {
                                    charlotte: true,
                                },
                            },
                        },
                        lg_zhu_huoqinge2: {
                            audio: 'ext:世界之塔/Centuries:1',
                            usable: 1,
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_huoqinge1.mp3';
                                var list = ['zhiliao', 'shufu', 'shufu', 'shufu', 'fushijian'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhong_xindongshunjian: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'zhong') {
                                    player.addSkill('lg_xindongshunjian');
                                    player.addSkill('lg_zhong_jinwanxiashu1');
                                }
                            },
                        },
                        lg_xindongshunjian: {
                            trigger: {
                                player: ['useCardAfter', 'useCardCancelled'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_xindongshunjian.jpg',
                            intro: {
                                content: '「心动瞬间·守护者」<br/>天赋效果:<br/>当你使用一张♠️️牌结算后,你展示所有手牌.若其中没有名称相同的牌,你获得一张【心动】,执行一个额外的出牌阶段.',
                            },
                            filter(event, player) {
                                if (event.card.suit == 'spade') return true;
                                return false;
                            },
                            check(event, player) {
                                var cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].name == event.card.name) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                player.showHandcards();
                                var cards = player.getCards('h');
                                var has_card = 0;
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].name == trigger.card.name) has_card = 1;
                                }
                                if (has_card == 0) player.gain(game.createCard('lg_xindong'), 'gain2') && player.phaseUse();
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        lg_linweiyiji: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'useCardToPlayer',
                                target: 'useCardToTarget',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha') return false;
                                return event.player.countCards('h') && event.target.countCards('h');
                            },
                            check(event, player) {
                                if (event.player == player) {
                                    var player = event.player;
                                    var target = event.target;
                                    if (get.attitude(player, target) >= 0) return false;
                                    if (status.currentPhase != player) return false;
                                    var cards = player.getCards('h');
                                    var count = 0;
                                    for (var i = 0; i < cards.length; i++) {
                                        var card = cards[i];
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current);
                                            }) &&
                                            lib.filter.cardUsable(card, player) &&
                                            player.getCardUsable(card) > 0 &&
                                            player.getUseValue(card) >= 0
                                        )
                                            count += 1;
                                    }
                                    var count_cards = player.countCards('h');
                                    if (count == count_cards) return true;
                                    if (!player.needsToDiscard()) return Math.random() > 1 - count / (count_cards + 0.0);
                                    return true;
                                }
                                if (get.attitude(player, event.player) >= 0) return false;
                                if (status.currentPhase != event.player) return true;
                                var count = player.countCards('h', 'shan');
                                var count1 = player.countCards('h', 'tao') + player.countCards('h', 'jiu');
                                if (player.hp == 1) count += count1;
                                var count_cards = player.countCards('h');
                                if (count == count_cards) return true;
                                if (!event.player.needsToDiscard()) return true;
                                return Math.random() > 1 - count / (count_cards + 0.0);
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('lg_linweiyiji3');
                                trigger.player.choosePlayerCard(trigger.target, 'h', true);
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.showCards(card);
                                    trigger.target.addGaintag(card, 'lg_linweiyiji');
                                    trigger.target.addTempSkill('lg_linweiyiji2');
                                    trigger.player.storage.lg_linweiyiji2 = trigger.target;
                                }
                                ('step 2');
                                trigger.target.choosePlayerCard(trigger.player, 'h', true);
                                ('step 3');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.target.showCards(card);
                                    trigger.player.addGaintag(card, 'lg_linweiyiji');
                                    trigger.player.addTempSkill('lg_linweiyiji2');
                                    trigger.target.storage.lg_linweiyiji2 = trigger.player;
                                }
                            },
                            ai: {
                                presha: true,
                                skillTagFilter(player, tag) {
                                    if (tag == 'presha') {
                                        if (player.hasSkill('lg_linweiyiji2')) return false;
                                    }
                                },
                            },
                        },
                        lg_linweiyiji2: {
                            mod: {
                                aiOrder(player, card, num) {
                                    var flag = 0;
                                    for (var i of game.players) {
                                        //QQ
                                        if (i.storage.lg_linweiyiji == true) flag = 1;
                                    }
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('lg_linweiyiji')) {
                                        if (flag == 0) return num + 10;
                                    }
                                },
                                aiValue(player, card, num) {
                                    var flag = 0;
                                    for (var i of game.players) {
                                        //QQ
                                        if (i.storage.lg_linweiyiji == true) flag = 1;
                                    }
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('lg_linweiyiji')) {
                                        if (flag == 0) return num - 6;
                                    }
                                },
                                aiUseful(player, card, num) {
                                    var flag = 0;
                                    for (var i of game.players) {
                                        //QQ
                                        if (i.storage.lg_linweiyiji == true) flag = 1;
                                    }
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('lg_linweiyiji')) {
                                        if (flag == 0) return num - 6;
                                    }
                                },
                            },
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var flag0 = 0;
                                for (var i in event.gaintag_map) {
                                    if (event.gaintag_map[i].includes('lg_linweiyiji')) flag0 = 1;
                                }
                                var flag = 0;
                                for (var i of game.players) {
                                    //QQ
                                    if (i.storage.lg_linweiyiji == true) flag = 1;
                                }
                                var bool = false;
                                if (flag == 0 && flag0 == 1) bool = true;
                                if (bool) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = player.countCards('e');
                                var mu = Math.ceil(player.hp / 2);
                                player.storage.lg_linweiyiji = true;
                                player.draw(mu);
                                var target = player.storage.lg_linweiyiji2;
                                target.chooseToDiscard(num, true, 'h');
                                ('step 1');
                                for (var i of game.players) {
                                    //QQ
                                    if (i.hasSkill('lg_linweiyiji2')) {
                                        i.removeSkill('lg_linweiyiji2');
                                    }
                                }
                            },
                            onremove(player) {
                                player.removeGaintag('lg_linweiyiji');
                                delete player.storage.lg_linweiyiji;
                                delete player.storage.lg_linweiyiji2;
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.3,
                                effect: {
                                    player(card, player, target, current) {
                                        var flag = 0;
                                        for (var i of game.players) {
                                            //QQ
                                            if (i.storage.lg_linweiyiji == true) flag = 1;
                                        }
                                        if (!card.cards) return;
                                        if (get.itemtype(card.cards[0]) == 'card' && card.cards[0].hasGaintag('lg_linweiyiji')) {
                                            if (flag == 0) return current + 4;
                                        }
                                    },
                                },
                            },
                        },
                        lg_linweiyiji3: {},
                        lg_linweiyiji4: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                player.useCard({ name: 'juedou' }, trigger.source, false);
                            },
                        },
                        lg_jinwan_xindongtetiao: {
                            audio: 'ext:世界之塔/Archive:3',
                            content_use(player) {
                                'step 0';
                                var list = [];
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('sha', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        list.push(['基本', '', 'sha', j]);
                                    }
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('tao', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'tao']);
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('jiu', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'jiu']);
                                }
                                if (list.length) {
                                    player.chooseButton(['视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
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
                                                if (card.nature == 'ice' || card.nature == 'thunder' || card.nature == 'fire') return 2.92;
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
                                ('step 1');
                                if (result.links?.length) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                            },
                            trigger: {
                                global: 'recoverEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.countCards('h') >= 2;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                event.suitss = [];
                                event.num = 0;
                                var list = [];
                                trigger.player.countCards('h', function (cardx) {
                                    list.push(cardx.suit);
                                });
                                event.list = list;
                                ('step 1');
                                var choose = Math.floor(Math.random() * event.list.length);
                                var controls = ['heart', 'diamond', 'club', 'spade'];
                                var str = '选择一种花色';
                                player
                                    .chooseControl(controls, ui.create.dialog(str, 'hidden'))
                                    .set('ai', function () {
                                        return _status.event.choose;
                                    })
                                    .set('choose', choose);
                                ('step 2');
                                if (result.control) {
                                    player.popup(result.control);
                                    player.line(trigger.player, 'green');
                                    game.log(player, '声明了', result.control);
                                    event.suitss.add(result.control);
                                    event.list.remove(result.control);
                                    event.num++;
                                    if (event.num < 2) event.goto(1);
                                }
                                ('step 3');
                                var fun;
                                if (event.suitss.length == 1) {
                                    fun = function (card) {
                                        var suit = card.suit;
                                        return suit == event.suitss[0];
                                    };
                                } else {
                                    fun = function (card) {
                                        var suit = card.suit;
                                        if (!event.suitss.includes(suit)) return false;
                                        if (ui.selected.cards) {
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) return false;
                                            }
                                        }
                                        return true;
                                    };
                                }
                                trigger.player.chooseCard(2, 'h', '展示手牌？', fun).set('ai', function (card) {
                                    return 1;
                                });
                                ('step 4');
                                if (result.cards?.length) {
                                    trigger.player.showCards(result.cards);
                                    event.insert(lib.skill.lg_jinwan_xindongtetiao.content_use, {
                                        player: trigger.player,
                                    });
                                }
                            },
                        },
                        lg_jinwanxiashu_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_huoqinge_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_xindong1: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.countCards('h', { type: 'basic' }) == 0) return true;
                                if (player.countCards('h', { type: ['trick', 'delay'] }) == 0) return true;
                                if (player.countCards('h', { type: 'equip' }) == 0) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.countCards('h', { type: 'basic' }) == 0) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                    if (card) {
                                        player.gain(card, 'draw');
                                    }
                                    event.basiccard = card;
                                }
                                ('step 1');
                                if (event.basiccard) {
                                    if (player.hasUseTarget(event.basiccard)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == event.basiccard;
                                        };
                                        next.prompt = '使用' + get.translation(event.basiccard) + '？';
                                    }
                                }
                                ('step 2');
                                if (player.countCards('h', { type: ['trick', 'delay'] }) == 0) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'trick' || get.type(card) == 'delay';
                                    });
                                    if (card) {
                                        player.gain(card, 'draw');
                                    }
                                    event.trickcard = card;
                                }
                                ('step 3');
                                if (event.trickcard) {
                                    if (player.hasUseTarget(event.trickcard)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == event.trickcard;
                                        };
                                        next.prompt = '使用' + get.translation(event.trickcard) + '？';
                                    }
                                }
                                ('step 4');
                                if (player.countCards('h', { type: 'equip' }) == 0) {
                                    var card = get.cardPile(function (card) {
                                        return get.type(card) == 'equip';
                                    });
                                    if (card) {
                                        player.gain(card, 'draw');
                                    }
                                    event.equipcard = card;
                                }
                                ('step 5');
                                if (event.equipcard) {
                                    if (player.hasUseTarget(event.equipcard)) {
                                        var next = player.chooseToUse();
                                        next.filterCard = function (card) {
                                            return card == event.equipcard;
                                        };
                                        next.prompt = '使用' + get.translation(event.equipcard) + '？';
                                    }
                                }
                            },
                            ai: {
                                threaten: 1.7,
                            },
                        },
                        lg_zhong_jinwanxiashu1: {
                            usable: 1,
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_xindongkafei1.mp3';
                                var list = ['xinkuangshenyi', 'yitilazhihua', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_nei_shengbei: {
                            trigger: {
                                global: 'gainEnd',
                            },
                            check(event, player) {
                                var val = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        val += get.value(i);
                                    }
                                return get.attitude(player, event.player) < 0 && val >= 5;
                            },
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + '弃置' + get.translation(event.cards) + ';且弃置' + event.cards.length + '张牌？';
                            },
                            logTarget: 'player',
                            filter(event, player) {
                                if (player.hasSkill('lg_nei_shengbei_temp')) return false;
                                if (!event.source || event.source != player || event.source.isDead()) return false;
                                if (event.player == player) return false;
                                return event.cards && event.cards.length;
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_shengbeiqiyue.jpg',
                            intro: {
                                content: '「圣杯契约·叛逆者」<br/>天赋效果:<br/>一名其他角色获得你的牌时,你可以弃置之,弃置其等量的牌.若你的体力值为全场最少,你可以改为对其视为依次使用等量的【侵蚀】.若如此做,直到你使用装备牌为止,你不能发动此天赋效果.',
                            },
                            content() {
                                'step 0';
                                event.nm = trigger.cards.length;
                                trigger.player.discard(trigger.cards);
                                player.addTempSkill('lg_nei_shengbei_temp', 'damageEnd');
                                ('step 1');
                                if (player.isMinHp(false)) {
                                    player.chooseBool('对' + get.translation(trigger.player) + '视为依次使用' + event.nm + '张【侵蚀】？').set('ai', function () {
                                        var tri = _status.event.getTrigger();
                                        var eff = get.effect(tri.player, { name: 'lg_qinshi' }, player, player);
                                        return eff > 1;
                                    });
                                }
                                ('step 2');
                                if (result.bool) {
                                } else {
                                    trigger.player.chooseToDiscard('he', event.nm, true);
                                    event.finish();
                                }
                                ('step 3');
                                if (event.nm > 0) {
                                    player.useCard({ name: 'lg_qinshi' }, trigger.player);
                                } else event.finish();
                                ('step 4');
                                event.nm--;
                                event.goto(3);
                            },
                            group: ['lg_nei_shengbei_remove'],
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: 'equipEnd',
                                    },
                                    filter(event, player) {
                                        return event.num > 0 && player.hasSkill('lg_nei_shengbei_temp');
                                    },
                                    _priority: 22,
                                    forced: true,
                                    content() {
                                        player.removeSkill('lg_nei_shengbei_temp');
                                    },
                                },
                                temp: {
                                    charlotte: true,
                                },
                            },
                            ai: {
                                expose: 0.3,
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'shunshou' && !target.hasSkill('lg_nei_shengbei_temp')) return [0.5, 0, 1, -1];
                                    },
                                },
                            },
                        },
                        lg_nei_mizhilanwan: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_mizhilanwan1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_lanwanzhiguang: {
                            audio: 'ext:世界之塔/Archive:3',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.choosePlayerCard(target, 'h', 1, true, '展示' + get.translation(target) + '的一张手牌');
                                ('step 1');
                                event.card = result.cards[0];
                                target.showCards(event.card, get.translation(target) + '的一张手牌');
                                ('step 2');
                                if (!player.countCards('h')) {
                                    event.finish();
                                } else {
                                    var dialog = ui.create.dialog('弃置一张手牌？');
                                    dialog.add([event.card]);
                                    player
                                        .chooseToDiscard('h', dialog, 1)
                                        .set('ai', function (card) {
                                            var valt = get.value(_status.event.card2, _status.event.target);
                                            var valp = get.value(_status.event.card2, _status.event.player);
                                            var val = get.value(card);
                                            if (valt < 0) {
                                                return 3 - val;
                                            } else if (card.suit == _status.event.card2.suit) {
                                                return 3.1 + valp + valt - val;
                                            } else if (valt > 0 && get.color(card) == get.color(_status.event.card2)) {
                                                return valp + valt - val;
                                            }
                                            return valt + 1 - val;
                                        })
                                        .set('card2', event.card)
                                        .set('target', target);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    var cardx = result.cards[0];
                                    if (get.color(cardx) == get.color(event.card)) {
                                        player.gain([event.card], false, target, 'give');
                                        event.finish();
                                    } else {
                                        target.discard([event.card], 'notBySelf');
                                    }
                                    if (cardx.suit == event.card.suit) {
                                        target.loseHp();
                                        player.getStat().skill.lg_lanwanzhiguang--;
                                    }
                                }
                            },
                            ai: {
                                order(item, player) {
                                    var min = 15.1;
                                    var hs = player.getCards('h');
                                    for (var i = 0; i < hs.length; i++) {
                                        if (!get.tag(hs[i], 'draw')) continue;
                                        var name = hs[i].name;
                                        var temp = get.order({
                                            name: name,
                                        });
                                        min = Math.min(min, temp);
                                    }
                                    return min - 0.1;
                                },
                                result: {
                                    target(player, target) {
                                        var eff = get.damageEffect(target, player);
                                        if (target.hasSkillTag('nodamage')) return eff * 0.3;
                                        return eff;
                                    },
                                },
                            },
                        },
                        lg_liandong_mizhilanwan: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_nei_shengbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('sha'), 'gain2');
                                player.getStat().skill.lg_lanwanzhiguang--;
                            },
                        },
                        lg_liandong2_mizhilanwan: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                global: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(2, true, 'h');
                                player.draw(2);
                                player.getStat().skill.lg_lanwanzhiguang--;
                            },
                        },
                        lg_lanwan: {
                            init(player) {
                                player.storage.lg_lanwan = 0;
                            },
                            filter(event, player) {
                                if (player.storage.lg_lanwan == player.previous.getAttackRange()) return false;
                                if (!player.countCards('h')) return false;
                                if (event.targets.length > 1) return false;
                                return event.player != player && get.tag(event.card, 'damage');
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            content() {
                                'step 0';
                                player.storage.lg_lanwan++;
                                player.chooseCard('he', true, '交给' + get.translation(trigger.player) + '一张牌').set('ai', function (card) {
                                    var att = get.attitude(_status.event.player, trigger.player);
                                    if (att < 0 && get.color(card) == 'black') return -1;
                                    if (att < 0 && game.countPlayer() < 3) return -1;
                                    return 6 - get.value(card, player);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.gain(card, player, 'give');
                                    if (get.color(card) == 'black') {
                                        trigger.player.addTempSkill('lg_lanwan_adddamage');
                                        trigger.player.storage.lg_lanwan = {
                                            card: trigger.card,
                                        };
                                        event.finish();
                                    } else event.goto(2);
                                } else event.finish();
                                ('step 2');
                                var bool = game.hasPlayer(function (current) {
                                    return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, trigger.player, current);
                                });
                                if (bool) {
                                    player
                                        .chooseTarget(true, '令' + get.translation(trigger.card) + '额外指定一个目标', function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        });
                                } else event.finish();
                                ('step 3');
                                if (result.bool) {
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    player.line(result.targets[0]);
                                    event.target = result.targets[0];
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                trigger.targets.push(event.target);
                            },
                            subSkill: {
                                adddamage: {
                                    onremove(player) {
                                        delete player.storage.lg_lanwan;
                                    },
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        var info = player.storage.lg_lanwan;
                                        return event.card && event.card == info.card;
                                    },
                                    silent: true,
                                    popup: false,
                                    forced: true,
                                    content() {
                                        trigger.num += 2;
                                    },
                                },
                            },
                        },
                        lg_mizhilanwan_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_mizhilanwan1: {
                            trigger: {
                                source: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_mizhilanwan1.mp3';
                                var list = ['shengbeiqiyue', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_yuanyizhezhi: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_yuanyizhezhi2');
                                    player.addSkill('lg_zhu_yuanyizhezhi1');
                                }
                            },
                        },
                        lg_zhu_yuanyizhezhi1: {
                            trigger: {
                                global: ['useCard'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_juemiezhiyi.jpg',
                            intro: {
                                content: '「绝灭之翼·主神」<br/>天赋效果:<br/>你的回合内,一名其他角色使用【闪】时,你可以弃置一张【杀】,令其使用的【闪】无效.',
                            },
                            filter(event, player) {
                                var target = _status.currentPhase;
                                return event.card && event.card.name == 'shan' && player.countCards('h', { name: 'sha' }) > 0 && event.player != player && target && target == player && target.isIn();
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('he', '弃置一张【杀】,令' + get.translation(trigger.player) + '使用的【闪】无效？', function (card, player, target) {
                                        return card.name == 'sha';
                                    })
                                    .set('ai', function (card) {
                                        return 11 - get.value(card);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.cancel();
                                }
                            },
                        },
                        lg_rilun: {
                            round: 2,
                            trigger: {
                                player: 'shaHit',
                            },
                            filter(event, player) {
                                return true;
                            },
                            audio: 'ext:世界之塔/Archive:1',
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer(function (current) {
                                    return current != player && get.distance(player, current) <= 2;
                                });
                                event.targets.sortBySeat(event.target);
                                ('step 1');
                                if (event.targets.length) {
                                    var current = event.targets.shift();
                                    player.useCard({ name: 'sha', nature: 'fire' }, current, false);
                                    event.redo();
                                }
                            },
                            group: ['lg_rilun_roundcount'],
                        },
                        lg_tianyi1: {
                            mod: {
                                targetInRange(card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        lg_tianyi: {
                            audio: 'ext:世界之塔/Archive:1',
                            trigger: {
                                player: 'shaBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.suit == 'diamond';
                            },
                            content() {
                                trigger.directHit = true;
                            },
                        },
                        lg_guangjian: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'shaMiss',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!player.countCards('h', { type: 'trick' })) return false;
                                if (player.storage.lg_guangjian) {
                                    for (var i = 0; i < player.storage.lg_guangjian.length; i++) {
                                        if (player.storage.leiyu[i].isAlive()) return true;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                for (var i = 0; i < player.storage.lg_guangjian.length; i++) {
                                    if (player.storage.lg_guangjian[i].isDead()) {
                                        player.storage.lg_guangjian.splice(i--, 1);
                                    }
                                }
                                var num = 0;
                                var num2 = 0;
                                for (var i = 0; i < player.storage.lg_guangjian.length; i++) {
                                    if (!player.storage.lg_guangjian[i].isIn()) continue;
                                    var eff = get.effect(player.storage.lg_guangjian[i], { name: 'sha', nature: 'fire' }, player, player);
                                    num += eff;
                                    if (eff > 0) {
                                        num2++;
                                    } else if (eff < 0) {
                                        num2--;
                                    }
                                }
                                var next = player.chooseToDiscard(get.prompt('lg_guangjian', player.storage.lg_guangjian), { type: 'trick' });
                                next.ai = function (card) {
                                    if (num > 0 && num2 >= 2) {
                                        return 7 - get.value(card);
                                    }
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.lg_guangjian.sort(lib.sort.seat);
                                    player.useCard({ name: 'sha', nature: 'fire' }, player.storage.lg_guangjian).animate = false;
                                }
                            },
                            group: ['lg_guangjian2', 'lg_guangjian4'],
                            ai: {
                                threaten: 1.3,
                            },
                        },
                        lg_guangjian2: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            silent: true,
                            content() {
                                player.storage.lg_guangjian = [];
                            },
                            forced: true,
                            popup: false,
                        },
                        lg_guangjian4: {
                            trigger: {
                                player: 'useCardToBegin',
                            },
                            silent: true,
                            filter(event, player) {
                                return _status.currentPhase == player && Array.isArray(player.storage.lg_guangjian) && event.target && event.target != player;
                            },
                            content() {
                                player.storage.lg_guangjian.add(trigger.target);
                            },
                            forced: true,
                            popup: false,
                        },
                        lg_guangjian3: {
                            trigger: {
                                source: 'dieAfter',
                            },
                            forced: true,
                            popup: false,
                            filter(event, player) {
                                return player.storage.lg_guangjian2 ? true : false;
                            },
                            content() {
                                player.recover();
                                delete player.storage.lg_guangjian2;
                            },
                        },
                        lg_paoguan: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (player.storage.lg_paoguan == 0) return false;
                                if (event.targets.length == 1 && event.targets[0] == player) return false;
                                return get.tag(event.card, 'damage') && event.card.suit == 'diamond' && player.isPhaseUsing() && event.targets && event.targets.length;
                            },
                            init(player) {
                                player.storage.lg_paoguan = 1;
                                player.storage.lg_paoguanTarget = [];
                                player.storage.lg_paoguanCard = [];
                                player.storage.lg_paoguanUse = [];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var targets = trigger.targets;
                                player
                                    .chooseTarget('对' + get.translation(targets) + '发动此技能？', function (card, player, target) {
                                        return targets.includes(target) && target != player;
                                    })
                                    .set('ai', function (target) {
                                        if (
                                            target.countCards('h') == 0 &&
                                            target.hp > 2 &&
                                            player.countCards('h', function (card) {
                                                return get.tag(card, 'damage');
                                            }) < 3
                                        )
                                            return false;
                                        return get.attitude(player, target) <= 0;
                                    });
                                ('step 1');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                player.storage.lg_paoguan--;
                                var target = result.targets[0];
                                player.line(target, 'thunder');
                                player.storage.lg_paoguanTarget.push(target);
                                player.storage.lg_paoguanCard.push(trigger.card);
                            },
                            group: ['lg_paoguan_damage', 'lg_paoguan_gain', 'lg_paoguan_remove'],
                            subSkill: {
                                remove: {
                                    forced: true,
                                    trigger: {
                                        player: ['phaseEnd', 'phaseBegin'],
                                    },
                                    content() {
                                        if (player.storage.lg_paoguanTarget.length) {
                                            var target = game.findPlayer(function (current) {
                                                return player.storage.lg_paoguanTarget.includes(current);
                                            });
                                            if (target) {
                                                target.draw(player.storage.lg_paoguanUse.length);
                                                if (player.storage.lg_paoguanUse.length > target.countCards('e')) player.recover();
                                            } else {
                                                var num = player.countCards('e');
                                                player.draw(num);
                                            }
                                        }
                                        player.storage.lg_paoguanTarget = [];
                                        player.storage.lg_paoguanCard = [];
                                        player.storage.lg_paoguanUse = [];
                                        player.storage.lg_paoguan = 1;
                                    },
                                },
                                gain: {
                                    forced: true,
                                    trigger: {
                                        player: ['useCardEnd'],
                                    },
                                    filter(event, player) {
                                        return (
                                            !player.storage.lg_paoguanUse.includes(event.card.name) &&
                                            game.hasPlayer(function (current) {
                                                return player.storage.lg_paoguanTarget.includes(current) && current.countCards('he') > 0;
                                            })
                                        );
                                    },
                                    content() {
                                        var target = game.findPlayer(function (current) {
                                            return player.storage.lg_paoguanTarget.includes(current);
                                        });
                                        var a = target.countCards('e');
                                        player.gainPlayerCard('he', a, target, true);
                                        player.storage.lg_paoguanUse.push(trigger.card.name);
                                    },
                                },
                                damage: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        source: 'damage',
                                        player: 'useCardEnd',
                                    },
                                    content() {
                                        if (trigger.name != 'damage') {
                                            if (player.storage.lg_paoguanCard.length && player.storage.lg_paoguanCard.includes(trigger.card)) {
                                                player.storage.lg_paoguanCard = [];
                                                game.countPlayer(function (current) {
                                                    if (player.storage.lg_paoguanTarget.includes(current)) player.storage.lg_paoguanTarget = [];
                                                });
                                                event.finish();
                                                return;
                                            }
                                        }
                                        if (trigger.card && player.storage.lg_paoguanCard.includes(trigger.card) && trigger.num > 0) {
                                            if (trigger.player && player.storage.lg_paoguanTarget.includes(trigger.player)) {
                                                player.storage.lg_paoguanCard = [];
                                            }
                                        }
                                    },
                                },
                            },
                            ai: {
                                threaten: 1.5,
                                effect: {
                                    player(card) {
                                        if (get.tag(card, 'damage')) return 100;
                                    },
                                },
                            },
                        },
                        lg_yuanyizhezhi_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_liandong_yuanyizhezhi: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_juemiezhiyiBegin',
                            },
                            forced: true,
                            content() {
                                player.randomGain(player.previous, true);
                            },
                        },
                        lg_shiyu1: {
                            usable: 12,
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                return player.countCards('h', 'sha') > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var goon = get.damageEffect(player, trigger.player, player) <= 0;
                                player.chooseCard(get.prompt('lg_shiyu1'), { name: 'sha' }).ai = function () {
                                    return goon ? 1 : 0;
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    player.showCards(result.cards);
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = { bool: true, card: { name: 'shan' } }; //QQQ
                                } else {
                                    player.getStat('triggerSkill').lg_shiyu1++;
                                }
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan') && effect < 0) {
                                            if (target.countCards('h') >= 2) return 0.5;
                                        }
                                    },
                                },
                            },
                        },
                        lg_zhu_yuanyizhezhi2: {
                            usable: 1,
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yuanyizhezhi1.mp3';
                                var list = ['jiushuyuyi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_wuhougesheng: {
                            audio: 'ext:世界之塔/Archive:3',
                            group: ['lg_wuhougesheng_1', 'lg_wuhougesheng_2', 'lg_wuhougesheng_3', 'lg_wuhougesheng_4', 'lg_wuhougesheng_5'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'linkBegin',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (card.name == 'tiesuo') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                                2: {
                                    audio: 'ext:世界之塔/Archive:3',
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
                                    },
                                    ai: {
                                        noturn: true,
                                    },
                                },
                                3: {
                                    mod: {
                                        targetEnabled(card, player, target) {
                                            if (card.suit == 'club') return false;
                                        },
                                    },
                                },
                                4: {
                                    ai: {
                                        noCompareTarget: true,
                                    },
                                },
                                5: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        player: 'wuxieBegin',
                                    },
                                    forced: true,
                                    content() {
                                        player.addTempSkill('lg_wuhougesheng_6', { player: 'phaseBegin' });
                                    },
                                },
                                6: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        player: ['damageBegin', 'recoverBegin'],
                                    },
                                    forced: true,
                                    mark: true,
                                    intro: {
                                        content: '你不能回复体力;且防止受到的伤害,改为随机废除一个装备栏.',
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.next.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                                    },
                                    ai: {
                                        nofire: true,
                                        nothunder: true,
                                        nodamage: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'damage')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        lg_nei_huihuicao: {
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_yihaizhilei1');
                                    player.addSkill('lg_yihaizhilei0');
                                }
                            },
                        },
                        lg_xiangguangerxing: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: ['phaseUseEnd'],
                            },
                            init(player) {
                                player.storage.lg_xiangguangerxing = [];
                            },
                            marktext: '✧',
                            onremove(player) {
                                player.storage.lg_xiangguangerxing = [];
                                player.unmarkSkill('lg_xiangguangerxing');
                            },
                            intro: {
                                name: '✧',
                                content(storage) {
                                    if (!storage.length) {
                                        return '未使用或打出过牌';
                                    } else {
                                        var str = '已使用过' + get.translation(storage[0]);
                                        for (var a = 1; a < storage.length; a++) {
                                            str += '、' + get.translation(storage[a]);
                                        }
                                        str += '牌';
                                        return str;
                                    }
                                },
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.storage.lg_xiangguangerxing.length = 0;
                                    }
                                },
                            },
                            prompt(event, player) {
                                var name = '向光而行';
                                var info = '<br><br>摸' + get.cnNumber(player.storage.lg_xiangguangerxing.length) + '张牌,回复等量的体力？';
                                return name + info;
                            },
                            filter(event, player) {
                                return player.storage.lg_xiangguangerxing.length;
                            },
                            check(event, player) {
                                var num = player.storage.lg_xiangguangerxing.length;
                                var uneffect = player.countCards('h', function (card) {
                                    return ['shandian', 'fulei', 'du'].includes(card.name);
                                });
                                var att = get.attitude(_status.currentPhase, _status.currentPhase && _status.currentPhase.next);
                                if (num > player.hp) return true;
                                return att > 0 ? 4 - num <= num : 4 - num <= num + uneffect;
                            },
                            content() {
                                'step 0';
                                var num = player.storage.lg_xiangguangerxing.length;
                                player.draw(num);
                                player.recover(num);
                                if (num > player.hp) {
                                    player.skip('phaseDiscard');
                                    player.moveCard();
                                }
                                if (num >= 4) {
                                    event.finish();
                                    return;
                                }
                                event.num = num;
                                ('step 1');
                                player.chooseCard('he', [1, 4 - event.num], true).set('ai', function (card) {
                                    var att = get.attitude(_status.currentPhase, _status.currentPhase && _status.currentPhase.next);
                                    return att > 0 ? 7 - get.value(card) : 6 - get.value(card);
                                });
                                ('step 2');
                                event.cards = result.cards;
                                player.lose(event.cards, ui.special, 'visible');
                                player.$throw(event.cards, 1000);
                                ('step 3');
                                if (event.cards.length) {
                                    event.card = event.cards.shift();
                                    event.card.fix();
                                    ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                    game.updateRoundNumber();
                                    game.log(player, '将', event.card, '置于牌堆顶');
                                    event.redo();
                                }
                                ('step 4');
                                player.storage.lg_xiangguangerxing = [];
                                player.unmarkSkill('lg_xiangguangerxing');
                            },
                            group: ['lg_xiangguangerxing_use'],
                            subSkill: {
                                use: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        player: 'useCard',
                                        global: ['phaseAfter'],
                                    },
                                    filter(event, player) {
                                        if (event.name == 'phase') return true;
                                        return _status.currentPhase == player && !player.storage.lg_xiangguangerxing.includes(event.card.suit);
                                    },
                                    content() {
                                        if (trigger.name == 'phase') {
                                            player.storage.lg_xiangguangerxing = [];
                                            player.unmarkSkill('lg_xiangguangerxing');
                                            event.finish();
                                            return;
                                        }
                                        player.storage.lg_xiangguangerxing.push(trigger.card.suit);
                                        player.markSkill('lg_xiangguangerxing');
                                    },
                                },
                            },
                        },
                        lg_huihuicao_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_xiangguangerxing1: {
                            //你计算与其他角色的距离时-Y.<br/> ✧ 其他角色计算与你的距离时+Z
                            mod: {
                                globalFrom(from, to, distance) {
                                    return (distance -= from.hp);
                                }, //QQQ
                            },
                        },
                        lg_xiangguangerxing2: {
                            mod: {
                                globalTo(from, to, distance) {
                                    return (distance += to.getAttackRange());
                                },
                            },
                        },
                        lg_yihaizhilei1: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_yihaizhilei.jpg',
                            intro: {
                                content: '「忆海之泪·设计师」<br/>天赋效果:<br/>你的回合外,当你因使用、打出或弃置而失去♦️️牌后,你可以摸一张牌.',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            //QQ
                                            if (i.suit == 'diamond' && i.original != 'j') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        lg_yihaizhilei2: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_yihaizhilei.jpg',
                            intro: {
                                content: '「忆海之泪·设计师」<br/>天赋效果:<br/>你的回合外,当你因使用、打出或弃置而失去♦️️牌后,你可以摸两张牌.',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            //QQ
                                            if (i.suit == 'diamond' && i.original != 'j') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        lg_yihaizhilei3: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter', 'discardAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_yihaizhilei.jpg',
                            intro: {
                                content: '「忆海之泪·设计师」<br/>天赋效果:<br/>你的回合外,当你因使用、打出或弃置而失去♦️️牌后,你可以摸三张牌.',
                            },
                            filter(event, player) {
                                if (player == _status.currentPhase) return false;
                                if (event.cards) {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            //QQ
                                            if (i.suit == 'diamond' && i.original != 'j') return true;
                                        }
                                }
                                return false;
                            },
                            content() {
                                player.draw(3);
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        lg_yihaizhilei0: {
                            usable: 1,
                            trigger: {
                                source: 'dieBegin',
                                player: 'respondBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_shanyaonuannuan1.mp3';
                                var list = ['yihaizhilei', 'chongneng', 'shanyaozhanfang', 'yihaizhiyuan', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_qingyingshenzi: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: ['loseHpBegin', 'recoverBegin'],
                            },
                            filter(event, player) {
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd' && i.suit == 'diamond') cards.push(i);
                                    }
                                });
                                return cards.length;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'cardsDiscard' && evt.parent.name == 'orderingDiscard') return;
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd' && i.suit == 'diamond' && !cards.includes(i)) cards.push(i);
                                    }
                                });
                                player.chooseCardButton(cards).set('filterButton', function (button) {
                                    return (
                                        lib.filter.cardEnabled(button.link, player) &&
                                        lib.filter.cardUsable(button.link, player) &&
                                        game.hasPlayer(function (current) {
                                            return player.canUse(button.link, current);
                                        })
                                    );
                                }).ai = function (button) {
                                    return player.getUseValue(button.link);
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    player.chooseUseTarget(result.links[0], true);
                                    _status.currentPhase && _status.currentPhase.draw();
                                    player.next.chooseToCompare(player);
                                }
                            },
                        },
                        lg_qiangepeifang: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                global: 'compare',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var bool = true;
                                if (trigger.iwhile && typeof trigger.iwhile == 'number') bool = false;
                                if (bool) {
                                    player.chooseBool('对' + get.translation(trigger.player) + '发动此技能？').set('ai', function () {
                                        return get.attitude(player, trigger.player) > 0;
                                    });
                                } else event.goto(2);
                                ('step 1');
                                if (result && result.bool) {
                                    trigger.player.addSkill('lg_qiangepeifang_wuxie');
                                    trigger.player.addMark('lg_qiangepeifang_wuxie');
                                }
                                ('step 2');
                                player.chooseBool('对' + get.translation(trigger.target) + '发动此技能？').set('ai', function () {
                                    return get.attitude(player, trigger.target) > 0;
                                });
                                ('step 3');
                                if (result.bool) {
                                    trigger.target.addSkill('lg_qiangepeifang_wuxie');
                                    trigger.target.addMark('lg_qiangepeifang_wuxie');
                                }
                            },
                        },
                        lg_zhong_shenziqiange: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'zhong') {
                                    player.addSkill('lg_xindongshunjian');
                                    player.addSkill('lg_zhong_shenziqiange1');
                                }
                            },
                        },
                        lg_shenzi_xindongtetiao: {
                            audio: 'ext:世界之塔/Archive:2',
                            content_use(player) {
                                'step 0';
                                var list = [];
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('sha', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'sha']);
                                    for (var j of lib.inpile_nature) {
                                        list.push(['基本', '', 'sha', j]);
                                    }
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('tao', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'tao']);
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return player.canUse('jiu', current);
                                    })
                                ) {
                                    list.push(['基本', '', 'jiu']);
                                }
                                if (list.length) {
                                    player.chooseButton(['视为使用一张基本牌？', [list, 'vcard']]).set('ai', function (button) {
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
                                                if (card.nature == 'ice' || card.nature == 'thunder' || card.nature == 'fire') return 2.92;
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
                                ('step 1');
                                if (result.links?.length) {
                                    var card = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(card, true);
                                }
                            },
                            trigger: {
                                global: 'recoverEnd',
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.player.countCards('h') >= 2;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            content() {
                                'step 0';
                                event.suitss = [];
                                event.num = 0;
                                var list = [];
                                trigger.player.countCards('h', function (cardx) {
                                    list.push(cardx.suit);
                                });
                                event.list = list;
                                ('step 1');
                                var choose = Math.floor(Math.random() * event.list.length);
                                var controls = ['heart', 'diamond', 'club', 'spade'];
                                var str = '选择一种花色';
                                player
                                    .chooseControl(controls, ui.create.dialog(str, 'hidden'))
                                    .set('ai', function () {
                                        return _status.event.choose;
                                    })
                                    .set('choose', choose);
                                ('step 2');
                                if (result.control) {
                                    player.popup(result.control);
                                    player.line(trigger.player, 'green');
                                    game.log(player, '声明了', result.control);
                                    event.suitss.add(result.control);
                                    event.list.remove(result.control);
                                    event.num++;
                                    if (event.num < 2) event.goto(1);
                                }
                                ('step 3');
                                var fun;
                                if (event.suitss.length == 1) {
                                    fun = function (card) {
                                        var suit = card.suit;
                                        return suit == event.suitss[0];
                                    };
                                } else {
                                    fun = function (card) {
                                        var suit = card.suit;
                                        if (!event.suitss.includes(suit)) return false;
                                        if (ui.selected.cards) {
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) return false;
                                            }
                                        }
                                        return true;
                                    };
                                }
                                trigger.player.chooseCard(2, 'h', '展示手牌？', fun).set('ai', function (card) {
                                    return 1;
                                });
                                ('step 4');
                                if (result.cards?.length) {
                                    trigger.player.showCards(result.cards);
                                    event.insert(lib.skill.lg_shenzi_xindongtetiao.content_use, {
                                        player: trigger.player,
                                    });
                                }
                            },
                        },
                        lg_shenziqiange_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_qiangepeifang_wuxie: {
                            mark: true,
                            marktext2: '✦',
                            intro: {
                                name: '✦',
                                content: 'mark',
                            },
                            enable: 'chooseToUse',
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            viewAsFilter(player) {
                                if (!player.hasMark('lg_qiangepeifang_wuxie')) return false;
                                return true;
                            },
                            viewAs: {
                                name: 'lg_xindong',
                            },
                            precontent() {
                                player.draw();
                                player.removeMark('lg_qiangepeifang_wuxie');
                            },
                            prompt: '视为使用一张【心动】？',
                            check() {
                                return 1;
                            },
                            ai: {
                                basic: {
                                    order: 6,
                                    value: [6, 1],
                                    useful: [4, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isMinHandcard()) return 2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        lg_zhong_shenziqiange1: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_xindongkafei1.mp3';
                                var list = ['xindong', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_huzhijiahu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = [];
                                ('step 1');
                                var next = player.judge(function (card) {
                                    var type = get.type(card);
                                    var evt = _status.event.getParent('lg_huzhijiahu');
                                    if (evt && evt.name) {
                                        if (!evt.type) evt.type = type;
                                        else if (evt.type != type) return -1;
                                    }
                                    return 1;
                                });
                                next.judge2 = function (result) {
                                    return result.bool;
                                };
                                if (get.mode() != 'guozhan' && !player.hasSkillTag('rejudge'))
                                    next.set('callback', function () {
                                        if (get.position(card, true) == 'o') player.gain(card, 'gain2');
                                    });
                                else
                                    next.set('callback', function () {
                                        event.parent.orderingCards.remove(card);
                                    });
                                ('step 2');
                                if (result.judge > 0) {
                                    event.cards.push(result.card);
                                    player.chooseBool('重复此流程？').set('frequentSkill', 'lg_huzhijiahu');
                                } else {
                                    event.cards = event.cards.filter((q) => get.position(q, true) == 'o');
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                    }
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    event.goto(1);
                                } else {
                                    if (event.cards.length) {
                                        player.gain(event.cards, 'gain2');
                                    }
                                }
                            },
                        },
                        lg_zhu_mogen: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_mogen1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_wufadida1: {
                            round: 2,
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            check(event, player) {
                                return true;
                            },
                            filter(event, player) {
                                if (player.countCards('h')) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var tars = game.filterPlayer(function (current) {
                                    return current != player && current.countCards('h') && current.isDamaged();
                                });
                                event.tars = tars.sort(lib.sort.seat);
                                ('step 1');
                                if (event.tars.length) {
                                    var target = event.tars.shift();
                                    event.current = target;
                                } else event.finish();
                                ('step 2');
                                event.att = get.attitude(event.current, player);
                                event.current.chooseCard('交给' + get.translation(player) + '一张手牌？', 'h', function (card) {
                                    return true;
                                }).ai = function (card) {
                                    if (event.att > 0) return 6 - get.value(card);
                                    return 4.5 - get.value(card);
                                };
                                ('step 3');
                                if (result.cards?.length) {
                                    player.gain(result.cards, event.current, 'giveAuto');
                                    event.current.draw(3);
                                }
                                event.goto(1);
                            },
                            ai: {
                                threaten: 0.8,
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.5;
                                    },
                                },
                                noh: true,
                            },
                            group: ['lg_wufadida1_roundcount'],
                        },
                        lg_wufadida: {
                            ai: {
                                threaten(player, target) {
                                    var nm = player.getDamagedHp() * 0.2;
                                    return 0.7 + nm;
                                },
                            },
                            init(player) {
                                player.storage.lg_wufadida = 0;
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card);
                                return type == 'trick' && player.storage.lg_wufadida != player.hp;
                            },
                            content() {
                                'step 0';
                                var goon = false;
                                var info = get.info(trigger.card);
                                if (trigger.targets && !info.multitarget) {
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (lib.filter.targetEnabled2(trigger.card, player, players[i]) && !trigger.targets.includes(players[i])) {
                                            goon = true;
                                            break;
                                        }
                                    }
                                }
                                if (goon) {
                                    var num1 = Math.max(1, player.getDamagedHp());
                                    player
                                        .chooseTarget('额外指定至多' + num1 + '名其他角色为' + get.translation(trigger.card) + '的目标？', [1, num1], function (card, player, target) {
                                            var trigger = _status.event.getTrigger();
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            return get.effect(target, trigger.card, player, player);
                                        });
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.goto(3);
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.target = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.target) {
                                    game.log(event.target, '额外成为了' + get.translation(trigger.card) + '的目标');
                                    trigger.targets.addArray(event.target);
                                }
                                event.finish();
                                ('step 3');
                                var num2 = Math.max(1, player.getDamagedHp());
                                player
                                    .chooseTarget('取消至多' + num2 + '名角色成为' + get.translation(trigger.card) + '的目标？', [1, num2], function (card, player, target) {
                                        return _status.event.getTrigger().targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    });
                                ('step 4');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                    if (event.isMine()) {
                                        event.finish();
                                    }
                                    for (var i = 0; i < result.targets.length; i++) {
                                        trigger.targets.remove(result.targets[i]);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                player.storage.lg_wufadida++;
                            },
                        },
                        lg_mogen_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_mogen1: {
                            trigger: {
                                source: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_mogen1.mp3';
                                var list = ['qinshi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_nei_yuntan: {
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_yihaizhilei1');
                                    player.addSkill('lg_yihaizhilei0');
                                }
                            },
                        },
                        lg_mimengyuye: {
                            audio: 'ext:世界之塔/Archive:2',
                            usable: 1,
                            trigger: {
                                global: 'gainAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'draw') return false;
                                if (event.player != player && event.player.isMinHp()) return false;
                                var cards = event.cards,
                                    list = ['basic', 'trick', 'equip'];
                                for (var card of cards) if (list.includes(get.type2(card))) list.remove(get.type2(card));
                                for (var type of event.player.getStorage('lg_mimengyuye_gained')) if (list.includes(type)) list.remove(type);
                                return list.length;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) > 0;
                            },
                            prompt2(event, player) {
                                var cards = event.cards,
                                    list = ['basic', 'trick', 'equip'];
                                for (var card of cards) if (list.includes(get.type2(card))) list.remove(get.type2(card));
                                for (var type of event.player.getStorage('lg_mimengyuye_gained')) if (list.includes(type)) list.remove(type);
                                var name = event.player == player ? '你' : get.translation(event.player);
                                return (
                                    '令' +
                                    name +
                                    '随机获得一张' +
                                    (event.player.isUnderControl(true)
                                        ? list
                                            .map((i) => get.translation(i) + '牌')
                                            .join('、')
                                            .replace(/(.*)、/, '$1或')
                                        : '本次没有获得类别的牌')
                                );
                            },
                            logTarget: 'player',
                            content() {
                                trigger.player.addTempSkill('lg_mimengyuye_gained');
                                var cards = trigger.cards,
                                    list = ['basic', 'trick', 'equip'];
                                for (var card of cards) if (list.includes(get.type2(card))) list.remove(get.type2(card));
                                for (var type of trigger.player.getStorage('lg_mimengyuye_gained')) if (list.includes(type)) list.remove(type);
                                list.randomSort();
                                var card = get.cardPile(function (card) {
                                    return list.includes(get.type2(card));
                                });
                                if (card) {
                                    trigger.player.gain(card, 'gain2');
                                    trigger.player.markAuto('lg_mimengyuye_gained', [get.type2(card)]);
                                }
                            },
                            subSkill: {
                                gained: {
                                    charlotte: true,
                                },
                            },
                        },
                        lg_taruhongchen: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return !['diamond', 'spade'].includes(event.card.suit) && event.targets && event.targets.length;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var name = '踏入红尘';
                                var info = '<br><br>发动此技能？';
                                player
                                    .chooseTarget(name + info, [1, Infinity], function (card, player, target) {
                                        var tars = _status.event.targets;
                                        var card = _status.event.card;
                                        for (var a of tars) {
                                            if (!tars.includes(target)) {
                                                if (target == a.previous || target == a.next) {
                                                    if (lib.filter.targetEnabled2(card, player, target)) {
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                        return false;
                                    })
                                    .set('targets', trigger.targets)
                                    .set('card', trigger.card)
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    for (var a of result.targets) {
                                        trigger.targets.push(a);
                                    }
                                }
                            },
                        },
                        lg_shiyuezhixin: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                global: ['phaseEnd', 'recoverEnd'],
                            },
                            filter(event, player) {
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name != 'lose' && evt.name != 'cardsDiscard') return false;
                                    if (evt.name == 'lose' && (evt.position != ui.discardPile || evt.type != 'discard')) return false;
                                    if (evt.name == 'cardsDiscard' && !(evt.parent.relatedEvent && ['chooseToCompare', 'chooseToCompareMultiple', 'judge'].includes(evt.parent.relatedEvent.name))) return false;
                                    for (var i = 0; i < evt.cards.length; i++) {
                                        var card = evt.cards[i];
                                        if (card.suit == 'heart') list.add(card);
                                    }
                                });
                                return list.filterInD('d').length;
                            },
                            forced: true,
                            //一名角色回复体力;或回合结束时,若当前回合有♥️️牌因判定、拼点、弃置而进入过弃牌堆,你可以选择其中一张♥️️牌,获得之.若如此做,你随机获得其区域内的两张牌,随机获得其上家区域内的X张牌.<br/><br/> 「锁定技」<br/> ✧ 你不能使用延时锦囊牌与装备牌.<br/> ✧ 当你跳过摸牌阶段后,获得一张【桃】.<br/><br/> 「技能未知数据」<br/> ✧ X为你区域内♥️️牌数的一半,向下取整.<br/><br/> 云昙:<br/> 踏入红尘,只为停驻时光与你相遇
                            async content(event, trigger, player) {
                                //QQQ
                                var list = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name != 'lose') return false;
                                    if (evt.name == 'lose' && (evt.position != ui.discardPile || evt.type != 'discard')) return false;
                                    if (evt.name == 'cardsDiscard' && !(evt.parent.relatedEvent && ['chooseToCompare', 'chooseToCompareMultiple', 'judge'].includes(evt.parent.relatedEvent.name))) return false;
                                    for (var i = 0; i < evt.cards.length; i++) {
                                        var card = evt.cards[i];
                                        if (card.suit == 'heart') list.add(card);
                                    }
                                });
                                list = list.filterInD('d');
                                if (list[0]) {
                                    var dialog = ui.create.dialog('获得其中一张♥️️牌');
                                    dialog.add(list);
                                    const result = await player.chooseButton(dialog)
                                        .set('ai', (button) => get.value(button.link)).forResult();
                                    if (result.links?.length) {
                                        var num = Math.floor(player.countCards('hej', { suit: 'heart' }) / 2);
                                        player.gain(result.links, 'draw2', 'log');
                                        player.randomGain(trigger.player, 2, true, 'hej');
                                        player.randomGain(trigger.player.previous, num, true, 'hej');
                                    } //QQQ
                                }
                            },
                        },
                        lg_yuntan_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_shiyuezhixin1: {
                            mod: {
                                cardEnabled(card) {
                                    if (get.type(card) == 'equip') return false;
                                    if (get.type(card) == 'delay') return false;
                                },
                            },
                        },
                        lg_shiyuezhixin2: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'phaseUseSkipped',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard('tao'), 'gain2');
                            },
                        },
                        lg_yezhiyaojing: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'damageBegin',
                            },
                            content() {
                                'step 0';
                                player.drawTo(5);
                                ('step 1');
                                var targets = game.filterPlayer((current) => current != player && current.countCards('h') > 0 && player.inRange(current));
                                if (targets.length) {
                                    if (targets.length == 1) event._result = { bool: true, targets: targets };
                                    else
                                        player
                                            .chooseTarget(true, '选择目标', function (card, player, target) {
                                                return target != player && target.countCards('h') > 0 && player.inRange(target);
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'thunder');
                                    player.choosePlayerCard(target, true, 'h');
                                }
                                ('step 3');
                                if (result.bool) {
                                    target.addSkill('lg_yezhiyaojing_viewas');
                                    target.showCards(result.cards);
                                    target.addGaintag(result.cards, 'lg_yezhiyaojing');
                                    target.addTempSkill('lg_yezhiyaojing1', { player: 'recoverEnd' });
                                }
                            },
                            ai: {
                                maixie: true,
                            },
                            subSkill: {
                                viewas: {
                                    mod: {
                                        cardname(card) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('lg_yezhiyaojing')) return 'wuxie';
                                        },
                                    },
                                    charlotte: true,
                                },
                            },
                        },
                        lg_zhu_lunaqielude: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_lunaqielude1');
                                    player.addSkill('lg_zhu_zhenshihuanxiang');
                                }
                            },
                        },
                        lg_zhu_zhenshihuanxiang: {
                            trigger: {
                                player: 'loseAfter',
                                global: 'loseAsyncAfter',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_zhenshihuanxiang.jpg',
                            intro: {
                                content: '「真实幻想·主神」<br/>天赋效果:<br/>弃牌阶段结束时,若你在此阶段弃置过牌,你不能成为与这些牌点数均相同的牌目标,直到你回复体力为止.',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.type != 'discard' || event.getlx === false || event.getParent('phaseDiscard').player != player) return false;
                                var evt = event.getl(player);
                                return evt && evt.hs && evt.hs.length;
                            },
                            content() {
                                var cards = [],
                                    hs = trigger.getl(player).hs;
                                for (var i of hs) cards.add(i.number);
                                player.addTempSkill('lg_zhenshihuanxiang2', { player: 'recoverBegin' });
                                player.markAuto('lg_zhenshihuanxiang2', cards);
                            },
                        },
                        lg_zhenshihuanxiang2: {
                            mod: {
                                targetEnabled(card, player, target) {
                                    if (target.getStorage('lg_zhenshihuanxiang2').includes(card.number)) return false;
                                },
                            },
                            intro: {
                                content: '$',
                            },
                        },
                        lg_yezhiyaojing1: {
                            mod: {
                                cardEnabled(card) {
                                    if (get.color(card) != 'diamond') return false;
                                },
                            },
                        },
                        lg_jijingzhiyue: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (player.countCards('h') > 0) return false;
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                                if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                                return true;
                            },
                            content() {
                                var card = _status.currentPhase && _status.currentPhase.getCards('hej', { color: 'black' });
                                _status.currentPhase && _status.currentPhase.discard(card);
                                _status.currentPhase && _status.currentPhase.draw(card.length);
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.result = { bool: true, card: { name: 'shan' } };
                            },
                            ai: {
                                respondShan: true,
                                skillTagFilter(player) {
                                    if (player.countCards('h')) return false;
                                },
                                effect: {
                                    target(card, player, target, effect) {
                                        if (get.tag(card, 'respondShan') && target.countCards('h') == 0) return 0.5;
                                    },
                                },
                            },
                            group: ['lg_jijingzhiyue_wuxie'],
                            subSkill: {
                                wuxie: {
                                    enable: ['chooseToUse'],
                                    filterCard() {
                                        return true;
                                    },
                                    selectCard: -1,
                                    position: 'h',
                                    viewAsFilter(player) {
                                        return player.countCards('h');
                                    },
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    prompt: '将所有手牌当一张【无懈可击】使用',
                                    check() {
                                        var player = _status.event.player;
                                        var tri = _status.event.getTrigger();
                                        if (tri && tri.card && tri.card.name == 'chiling') return -1;
                                        return player.countCards('h') <= 2;
                                    },
                                    onuse(result, player) { },
                                    ai: {
                                        threaten: 0.9,
                                        basic: {
                                            useful: [6, 4, 3],
                                            value: [6, 4, 3],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                        expose: 0.2,
                                        value: [5, 1],
                                        useful: [5, 1],
                                        order: 1,
                                        wuxie(target, card, player, current, state) {
                                            return -state * get.attitude(player, current);
                                        },
                                    },
                                },
                            },
                        },
                        lg_jijingfengbao: {
                            mark: true,
                            marktext: '✧',
                            init(player) {
                                if (!player.storage.lg_jijingfengbao) {
                                    player.storage.lg_jijingfengbao = 0;
                                }
                            },
                            intro: {
                                content: 'mark',
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            audio: 'ext:世界之塔/Archive:2',
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.suit == 'diamond';
                            },
                            content() {
                                player.storage.lg_jijingfengbao++;
                                player.update();
                            },
                            mod: {
                                maxHandcard(player, current) {
                                    if (player.storage.lg_jijingfengbao && typeof player.storage.jijingfengbao == 'number') return current + player.storage.lg_jijingfengbao;
                                },
                            },
                        },
                        lg_liandong_jijingfengbao: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_zhu_zhenshihuanxiangEnd',
                            },
                            forced: true,
                            content() {
                                player.storage.lg_jijingfengbao = 0;
                            },
                        },
                        lg_lunaqielude_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_lunaqielude1: {
                            audio: 'ext:世界之塔/Centuries:1',
                            usable: 1,
                            trigger: {
                                player: 'drawAfter',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Towr/lg_shijiezhita_lunaqielude1.mp3';
                                var list = ['zhishui', 'zhiliao', 'shufu', 'shufu', 'shufu', 'fushijian'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_heita: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_heita1');
                                    player.addSkill('lg_zhu_bianxingqiong');
                                }
                            },
                        },
                        lg_zhu_bianxingqiong: {
                            group: 'lg_zhu_bianxingqiong_lose',
                            usable: 1,
                            trigger: {
                                player: ['gainAfter', 'equipAfter', 'addJudgeAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_bianxingqiong.jpg',
                            intro: {
                                content: '「彼岸星穹·造物主」<br/>天赋效果:<br/>当你不因此天赋置入区域内的牌后,若没有对应区域内的牌,你随机获得一张♦️️牌;当你失去某个区域内的最后一张牌时,你可以获得1点护甲,令一名其他角色弃置对应区域内的所有牌.',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'lg_zhu_bianxingqiong';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.suit == 'diamond';
                                    }),
                                    'gain2'
                                );
                            },
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (evt && evt.player == player && evt.hs && evt.hs.length && player.countCards('h') == 0) return true;
                                        if (evt && evt.player == player && evt.es && evt.es.length && player.countCards('e') == 0) return true;
                                        if (evt && evt.player == player && evt.js && evt.js.length && player.countCards('j') == 0) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var num1 = trigger.getl(player).hs.length;
                                        if (num1 > 0 && player.countCards('h') == 0) {
                                            player.changeHujia();
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置所有手牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('h');
                                                });
                                        } else event.goto(2);
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('h'));
                                        }
                                        ('step 2');
                                        var num2 = trigger.getl(player).es.length;
                                        if (num2 > 0 && player.countCards('e') == 0) {
                                            player.changeHujia();
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置装备区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('e');
                                                });
                                        } else event.goto(4);
                                        ('step 3');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('e'));
                                        }
                                        ('step 4');
                                        var num3 = trigger.getl(player).js.length;
                                        if (num3 > 0 && player.countCards('j') == 0) {
                                            player.changeHujia();
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置判定区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return att * target.countCards('j');
                                                });
                                        } else event.finish();
                                        ('step 5');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('j'));
                                        }
                                    },
                                },
                            },
                        },
                        lg_renoucaozong: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    //if(_status.currentPhase!=target){
                                    if (game.roundNumber % 2 == 0) {
                                        if (card.number % 2 == 0 && card.name == 'sha') return false;
                                    } else {
                                        if (card.number % 2 == 1 && card.name == 'sha') return false;
                                    }
                                    // }
                                },
                            },
                        },
                        lg_chuizimaimai: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'shaBegin',
                            },
                            content() {
                                'step 0';
                                var num1 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'spade' });
                                });
                                var num2 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'club' });
                                });
                                var num3 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'heart' });
                                });
                                var num4 = game.countPlayer(function (current) {
                                    return current.countCards('ej', { suit: 'diamond' });
                                });
                                event.num1 = num1;
                                event.num2 = num2;
                                event.num3 = num3;
                                event.num4 = num4;
                                ('step 1');
                                player.judge();
                                ('step 2');
                                switch (result.card.suit) {
                                    case 'heart':
                                        player.draw(event.num3);
                                        break;
                                    case 'diamond':
                                        player.draw(event.num4);
                                        break;
                                    case 'club':
                                        player.draw(event.num2);
                                        break;
                                    case 'spade':
                                        player.draw(event.num1);
                                        break;
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        lg_mofafujia: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '✧',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.lg_mofafujia == true) return '❶';
                                    return '❷';
                                },
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            group: ['lg_mofafujia_1', 'lg_mofafujia_2'],
                            subSkill: {
                                1: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return player !== _status.currentPhase && (player.storage.lg_mofafujia == false || player.storage.lg_mofafujia == undefined);
                                    },
                                    selectCard: -1,
                                    precontent() {
                                        player.storage.lg_mofafujia = true;
                                    },
                                    prompt: '视为使用一张【无懈可击】',
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
                                2: {
                                    enable: 'chooseToUse',
                                    viewAs: {
                                        name: 'wuxie',
                                    },
                                    filterCard() {
                                        return false;
                                    },
                                    viewAsFilter(player) {
                                        return player == _status.currentPhase && player.storage.lg_mofafujia == true;
                                    },
                                    selectCard: -1,
                                    precontent() {
                                        player.storage.lg_mofafujia = false;
                                    },
                                    prompt: '视为使用一张【无懈可击】',
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
                            },
                        },
                        lg_heita_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_heita1: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yizhilaiyuan1.mp3';
                                var list = ['bianxingqiong', 'huanxingtunmo', 'heitazhidie', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_bianxingqiong2: {
                            group: 'lg_zhu_bianxingqiong2_lose',
                            usable: 1,
                            trigger: {
                                player: ['gainAfter', 'equipAfter', 'addJudgeAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_bianxingqiong.jpg',
                            intro: {
                                content: '「彼岸星穹·造物主」<br/>天赋效果:<br/>当你不因此天赋置入区域内的牌后,若没有对应区域内的牌,你随机获得一张♦️️牌;当你失去某个区域内的最后一张牌时,你可以获得2点护甲,令一名其他角色弃置对应区域内的所有牌.',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'lg_zhu_bianxingqiong2';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.suit == 'diamond';
                                    }),
                                    'gain2'
                                );
                            },
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (evt && evt.player == player && evt.hs && evt.hs.length && player.countCards('h') == 0) return true;
                                        if (evt && evt.player == player && evt.es && evt.es.length && player.countCards('e') == 0) return true;
                                        if (evt && evt.player == player && evt.js && evt.js.length && player.countCards('j') == 0) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var num1 = trigger.getl(player).hs.length;
                                        if (num1 > 0 && player.countCards('h') == 0) {
                                            player.changeHujia(2);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置所有手牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('h');
                                                });
                                        } else event.goto(2);
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('h'));
                                        }
                                        ('step 2');
                                        var num2 = trigger.getl(player).es.length;
                                        if (num2 > 0 && player.countCards('e') == 0) {
                                            player.changeHujia(2);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置装备区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('e');
                                                });
                                        } else event.goto(4);
                                        ('step 3');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('e'));
                                        }
                                        ('step 4');
                                        var num3 = trigger.getl(player).js.length;
                                        if (num3 > 0 && player.countCards('j') == 0) {
                                            player.changeHujia(2);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置判定区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return att * target.countCards('j');
                                                });
                                        } else event.finish();
                                        ('step 5');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('j'));
                                        }
                                    },
                                },
                            },
                        },
                        lg_bianxingqiong3: {
                            group: 'lg_zhu_bianxingqiong3_lose',
                            usable: 1,
                            trigger: {
                                player: ['gainAfter', 'equipAfter', 'addJudgeAfter'],
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_bianxingqiong.jpg',
                            intro: {
                                content: '「彼岸星穹·造物主」<br/>天赋效果:<br/>当你不因此天赋置入区域内的牌后,若没有对应区域内的牌,你随机获得一张♦️️牌;当你失去某个区域内的最后一张牌时,你可以获得3点护甲,令一名其他角色弃置对应区域内的所有牌.',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent(2).name != 'lg_zhu_bianxingqiong3';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.suit == 'diamond';
                                    }),
                                    'gain2'
                                );
                            },
                            subSkill: {
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (evt && evt.player == player && evt.hs && evt.hs.length && player.countCards('h') == 0) return true;
                                        if (evt && evt.player == player && evt.es && evt.es.length && player.countCards('e') == 0) return true;
                                        if (evt && evt.player == player && evt.js && evt.js.length && player.countCards('j') == 0) return true;
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var num1 = trigger.getl(player).hs.length;
                                        if (num1 > 0 && player.countCards('h') == 0) {
                                            player.changeHujia(3);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置所有手牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('h');
                                                });
                                        } else event.goto(2);
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('h'));
                                        }
                                        ('step 2');
                                        var num2 = trigger.getl(player).es.length;
                                        if (num2 > 0 && player.countCards('e') == 0) {
                                            player.changeHujia(3);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置装备区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return -att * target.countCards('e');
                                                });
                                        } else event.goto(4);
                                        ('step 3');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('e'));
                                        }
                                        ('step 4');
                                        var num3 = trigger.getl(player).js.length;
                                        if (num3 > 0 && player.countCards('j') == 0) {
                                            player.changeHujia(3);
                                            player
                                                .chooseTarget(true, '令一名其他角色弃置判定区内的所有牌', function (card, player, target) {
                                                    return target != player;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(_status.event.player, target);
                                                    return att * target.countCards('j');
                                                });
                                        } else event.finish();
                                        ('step 5');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.line(target);
                                            target.discard(target.getCards('j'));
                                        }
                                    },
                                },
                            },
                        },
                        lg_heiyezhixing: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            check(event, player) {
                                if (get.effect(player, event.card, player, player) > 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            content() {
                                var cards = get.cards(1);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '黑夜之星');
                                if (cards[0].name == 'shan') {
                                    player.chooseToDiscard(1, 'h', true, { color: 'black' });
                                    trigger.parent.excluded.add(player);
                                    player.addTempSkill('lg_heiyezhixing1', { player: 'shaDamage' });
                                }
                                //if(get.type(cards[0])!='basic'){
                                //    trigger.parent.excluded.add(player);
                                //};
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                            return [1, 0, 1, -0.5];
                                        }
                                    },
                                },
                            },
                        },
                        lg_heiyezhixing1: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'spade' && event.notLink();
                            },
                            forced: true,
                            content() {
                                trigger.num += 2;
                            },
                        },
                        lg_nei_aertuoliya: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_aertuoliya1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_shiyuezhijian: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            init(player) {
                                player.storage.lg_shiyuezhijian = 0;
                            },
                            filter(event, player) {
                                return !player.isMinHandcard() && !player.isMinHp() && !player.hasSkill('lg_shiyuezhijian2');
                            },
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return get.distance(current, player, 'attack') <= 1 && current != player;
                                });
                                if (num == 0) {
                                    event.finish();
                                    return;
                                }
                                player.addTempSkill('lg_shiyuezhijian1', { player: 'phaseAfter' });
                                player.draw(num, 'bottom');
                                player.addTempSkill('lg_shiyuezhijian2', { player: 'respondBegin' });
                                if (num > player.maxHp - player.hp) player.randomDiscard('h');
                                player.storage.lg_shiyuezhijian += num;
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return (num += player.storage.lg_shiyuezhijian);
                                },
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (game.countPlayer() > 4 && player == target && get.subtype(card) == 'equip3') {
                                            if (get.equipValue(card) <= 7.5) return 0;
                                        }
                                    },
                                },
                            },
                        },
                        lg_aertuoliya_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_shiyuezhijian1: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'sha') range[1] += 2;
                                },
                            },
                        },
                        lg_liandong_aertuoliya: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_nei_shengbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('lg_shiyuezhijian2');
                            },
                        },
                        lg_shiyuezhijian2: {},
                        lg_nei_aertuoliya1: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_aertuoliya1.mp3';
                                var list = ['qinshi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhong_yushuinai: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'zhong') {
                                    player.addSkill('lg_xindongshunjian');
                                    player.addSkill('lg_zhong_yushuinai1');
                                }
                            },
                        },
                        lg_pengranxindong: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: ['lg_xindongshunjianBegin', 'recoverBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                if (event.name == 'phaseJieshu' && !player.storage.lg_pengranxindong) return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current.countCards('h') > 0;
                                    }) > 1
                                );
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player
                                    .chooseTarget(2, get.prompt('lg_pengranxindong'), '选择目标', function (card, player, target) {
                                        return target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (!ui.selected.targets.length) return get.attitude(player, target);
                                        return 1 - get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var targets = result.targets.sortBySeat();
                                    event.targets = targets;
                                    event.cards = [];
                                    player.choosePlayerCard(targets[0], true, 'h');
                                } else event.finish();
                                ('step 2');
                                var card = result.cards[0];
                                player.line(targets[0]);
                                player.showCards(card, get.translation(player) + '对' + get.translation(targets[0]) + '发动此技能');
                                event.cards.push(card);
                                player.choosePlayerCard(targets[1], true, 'h');
                                ('step 3');
                                var card = result.cards[0];
                                player.line(targets[1]);
                                player.showCards(card, get.translation(player) + '对' + get.translation(targets[1]) + '发动此技能');
                                event.cards.push(card);
                                if (get.type(cards[0], targets[0]) == get.type(cards[1], targets[1])) event.finish();
                                ('step 4');
                                var str1 = get.translation(targets[0]),
                                    str2 = get.translation(targets[1]);
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', ['令' + str1 + '获得' + str2 + '的' + get.translation(cards[1]), '令' + str2 + '获得' + str1 + '的' + get.translation(cards[0])])
                                    .set('goon', get.attitude(player, targets[0]) > 0 ? 0 : 1)
                                    .set('ai', () => _status.event.goon);
                                ('step 5');
                                if (result.control != 'cancel2') {
                                    var i = result.index;
                                    targets[1 - i].give(cards[1 - i], targets[i], 'give');
                                }
                            },
                        },
                        lg_zhengshixuzhao: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'phaseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                var stat = player.getStat('card');
                                for (var i in stat) {
                                    if (typeof stat[i] == 'number' && get.type(i, 'trick') == 'trick') {
                                        return false;
                                    }
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('lg_zhengshixuzhao'), function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    return -get.attitude(player, target) * Math.sqrt(target.countCards('h'));
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].addTempSkill('lg_zhengshixuzhao2', { player: 'phaseAfter' });
                                }
                            },
                        },
                        lg_yushuinai_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhengshixuzhao2: {
                            mod: {
                                cardEnabled(card) {
                                    if (get.type(card) != 'basic') return false;
                                },
                            },
                        },
                        lg_zhong_yushuinai1: {
                            usable: 1,
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_xindongkafei2.mp3';
                                var list = ['xinkuangshenyi', 'yitilazhihua', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_nuannuan: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_nuannuan1');
                                    player.addSkill('lg_zhu_nuannuan2');
                                }
                            },
                        },
                        lg_xuehuadingge: {
                            intro: {
                                content(storage) {
                                    if (!storage.length) return '✧';
                                    else {
                                        return '✧:' + get.translation(storage);
                                    }
                                },
                            },
                            init(player) {
                                player.storage.lg_xuehuadingge = [];
                            },
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                player: 'discardBegin',
                            },
                            forced: true,
                            _priority: 7,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('lg_xuehuadingge'), '选择目标？', [1, Infinity], false, function (card, player, target) {
                                        return target != player && target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        return true;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var tars = result.targets.slice(0);
                                    event.tars = tars.sort(lib.sort.seat);
                                } else event.finish();
                                ('step 2');
                                if (event.tars.length) {
                                    var target = event.tars.shift();
                                    event.current = target;
                                } else event.goto(4);
                                ('step 3');
                                if (event.current) {
                                    player.gainPlayerCard(event.current, 'h', 1, true);
                                    player.storage.lg_xuehuadingge.push(event.current);
                                }
                                event.goto(2);
                                ('step 4');
                                player.markSkill('lg_xuehuadingge');
                            },
                            group: ['lg_xuehuadingge_give'],
                            subSkill: {
                                give: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    _priority: 11,
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countCards('he')) return false;
                                        return player.storage.lg_xuehuadingge.includes(event.player);
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseCard('he', 1, '交给' + get.translation(trigger.player) + '一张牌', true).set('ai', function (card) {
                                            var tar = _status.event.getTrigger().player;
                                            var att = get.attitude(player, tar);
                                            var val = get.value(card);
                                            if (att > 0) return val - 4;
                                            return 4 - val;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            var card = game.createCard('lg_xuehua');
                                            player.addJudge(card);
                                            player.$draw(card);
                                            trigger.player.gain(result.cards[0], player, 'giveAuto');
                                            player.storage.lg_xuehuadingge.remove(trigger.player);
                                            if (!player.storage.lg_xuehuadingge.length) {
                                                player.unmarkSkill('lg_xuehuadingge');
                                            }
                                        }
                                    },
                                    ai: {
                                        expose: 0.1,
                                    },
                                },
                            },
                        },
                        lg_ruyueerzhi: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!player.storage.lg_xuehuadingge.includes(event.target)) return false;
                                if (event.target.countCards('h') == 0) return false;
                                var rednum = event.target.countCards('h', function (card) {
                                    return get.color(card) == 'red' && lib.filter.cardDiscardable(card, event.target, event);
                                });
                                var blacknum = event.target.countCards('h', function (card) {
                                    return get.color(card) == 'black' && lib.filter.cardDiscardable(card, event.target, event);
                                });
                                if (rednum == blacknum) return false;
                                return event.card && event.card.name == 'sha';
                            },
                            logTarget: 'target',
                            content() {
                                var target = trigger.target;
                                var rednum = target.countCards('h', function (card) {
                                    return get.color(card) == 'red' && lib.filter.cardDiscardable(card, target, trigger);
                                });
                                var blacknum = target.countCards('h', function (card) {
                                    return get.color(card) == 'black' && lib.filter.cardDiscardable(card, target, trigger);
                                });
                                var num = rednum - blacknum;
                                var color;
                                if (num > 0) {
                                    color = 'red';
                                } else {
                                    num = 0 - num;
                                    color = 'black';
                                }
                                player.draw();
                                target
                                    .chooseToDiscard(true, num, '请弃置' + get.cnNumber(num) + '张' + get.translation(color) + '牌', 'h', function (card) {
                                        return get.color(card) == _status.event.color && lib.filter.cardDiscardable(card, _status.event.player, trigger);
                                    })
                                    .set('color', color);
                            },
                        },
                        lg_chuxueqiyuan: {
                            audio: 'ext:世界之塔/Archive:2',
                            global: 'lg_chuxueqiyuan_buff',
                            shaRelated: true,
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.target.hp < player.hp) return false;
                                if (event.card.name != 'sha') return false;
                                return true;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.target);
                                if (event.target == player) {
                                    var cards = player.getCards('h');
                                    var good = 0;
                                    var trick = 0;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (get.type(cards[i]) == 'trick' || get.type(cards[i]) == 'equip') {
                                            trick += 1;
                                            if (get.value(cards[i]) < 8) good += 1;
                                        }
                                    }
                                    if (
                                        player.getEquip('bagua') ||
                                        player.countCards('h', {
                                            name: 'shan',
                                        }) > 0
                                    )
                                        return good > 0;
                                    return trick > 0;
                                }
                                if (att == 0) return false;
                                if (att < 0) {
                                    if (event.target.getEquip('bagua')) return true;
                                    if (event.target.countCards('h') >= 5) return Math.random() > 0.8;
                                    return Math.random() > 0.15 * event.target.countCards('h');
                                }
                                if (event.target.getEquip('bagua')) return false;
                                if (event.target.countCards('h') >= 5) return Math.random() > 0.3;
                                return Math.random() > 1 - 0.15 * event.target.countCards('h');
                            },
                            content() {
                                'step 0';
                                player.line(trigger.target, 'green');
                                trigger.target
                                    .chooseCard('he', 1, '将一张非基本牌置于牌堆顶,否则不能响应' + get.translation(trigger.card))
                                    .set('filterCard', function (card) {
                                        return get.type(card) == 'trick' || get.type(card) == 'equip';
                                    })
                                    .set('ai', function (card) {
                                        return 10.5 - get.value(card);
                                    });
                                ('step 1');
                                if (result.cards?.length) {
                                    event.card = result.cards[0];
                                    trigger.target.lose(event.card, ui.special);
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    trigger.target.$throw(cardx, 1000);
                                    event.goto(2);
                                } else {
                                    game.log(trigger.target, '没有将一张非基本牌置于牌堆底');
                                    trigger.parent.directHit.push(trigger.target);
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                event.card.fix();
                                var num = game.countPlayer(function (current) {
                                    return current.countCards('hj', { suit: 'club' }) == player.hp;
                                });
                                ui.cardPile.appendChild(event.card);
                                game.log(trigger.target, '将', event.card, '置于牌堆底');
                                trigger.parent.excluded.push(trigger.target);
                                trigger.target.draw(2);
                                player.chooseToDiscard(num, 'h', { suit: 'club' });
                            },
                        },
                        lg_nuannuan_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_chuxueqiyuan_buff: {
                            forced: true,
                            mod: {
                                aiValue(player, card, num) {
                                    if (get.type(card) != 'trick' && get.type(card) != 'equip') return;
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('lg_chuxueqiyuan') && players[i].hp <= player.hp) return num + 2;
                                    }
                                },
                                aiUseful(player, card, num) {
                                    if (get.type(card) != 'trick' && get.type(card) != 'equip') return;
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hasSkill('lg_chuxueqiyuan') && players[i].hp <= player.hp) return num + 4;
                                    }
                                },
                            },
                            ai: {},
                        },
                        lg_chuxueqiyuan0: {
                            mod: {
                                cardDiscardable(card, player) {
                                    if (card.name == 'shan') return false;
                                },
                            },
                        },
                        lg_zhu_nuannuan2: {
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_shanyaonuannuan2.mp3';
                                var list = ['yihaizhiyuan', 'shanyaozhanfang', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_nuannuan1: {
                            usable: 2,
                            trigger: {
                                global: 'respondEnd',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_weinishanyao.jpg',
                            intro: {
                                content: '「为你闪耀·闪耀设计师」<br/>天赋效果:<br/>你的回合外,一名其他角色打出手牌后,你可以令其选择一项:①令你摸两张牌,依次移动场上的两张牌;②令你获得其区域内的一张牌.',
                            },
                            filter(event, player) {
                                return event.player != player && _status.currentPhase != player;
                            },
                            logTarget: 'player',
                            content() {
                                'step 0';
                                var att = get.attitude(trigger.player, player);
                                var bool = 0;
                                if (att < 0) {
                                    if (trigger.player.countCards('e') == 0 && trigger.player.countCards('h') > 2) bool = 1;
                                    else if (trigger.player.countCards('he') == 0) bool = 1;
                                } else if (att == 0 && trigger.player.countCards('he') == 0) {
                                    bool = 1;
                                }
                                trigger.player
                                    .chooseControl(function () {
                                        return _status.event.bool;
                                    })
                                    .set('prompt', '为你闪耀·闪耀设计师')
                                    .set('bool', bool)
                                    .set('choiceList', ['令' + get.translation(player) + '摸两张牌,依次移动场上的两张牌', '令' + get.translation(player) + '获得你区域内的一张牌']);
                                ('step 1');
                                if (result.control == '选项一') {
                                    player.draw(2);
                                    player.moveCard(true);
                                    player.moveCard(true);
                                    event.finish();
                                } else if (trigger.player.countCards('he')) {
                                    player.gainPlayerCard(trigger.player, 1, true, 'hej');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        lg_emoshatang: {
                            group: ['lg_emoshatang1'],
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.suit == 'diamond' && event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                player.useSkill('lg_emoshatang2');
                                player.showHandcards();
                                ('step 1');
                                if (player.countCards('he')) {
                                    player.chooseCardTarget({
                                        position: 'he',
                                        filterCard: true,
                                        filterTarget(card, player, target) {
                                            return player != target;
                                        },
                                        ai1(card) {
                                            if (card.name == 'du') return 20;
                                            return 5 - get.value(card);
                                        },
                                        ai2(target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                                                if (target.hasSkillTag('nodu')) return 0;
                                                return 1 - att;
                                            }
                                            return -att;
                                        },
                                        forced: true,
                                        prompt: '请交给一名其他角色一张牌',
                                        //prompt:get.prompt2('lg_emoshatang'),
                                    });
                                } else event.finish();
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var cards = result.cards;
                                    target.gain(cards, player, 'give').gaintag.add('lg_emoshatang');
                                    game.log(player, '将', cards, '作为<镖>交给了', target);
                                    if (!player.storage.lg_emoshatang) player.storage.lg_emoshatang = {};
                                    player.storage.lg_emoshatang[target.playerid] = cards[0];
                                }
                            },
                        },
                        lg_nei_yuzhoulin: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_yuzhoulin1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_emoshatang1: {
                            trigger: {
                                global: ['recoverBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.lg_emoshatang && player.storage.lg_emoshatang[event.player.playerid];
                            },
                            content() {
                                'step 0';
                                if (trigger.name != 'die') {
                                    player.line(trigger.player, 'fire');
                                    if (!trigger.player.countGainableCards(player, 'h')) {
                                        var e = player.storage.lg_emoshatang[trigger.player.playerid];
                                        if (trigger.player.getCards('h').includes(e)) trigger.player.removeGaintag('lg_emoshatang', [e]);
                                        delete player.storage.lg_emoshatang[trigger.player.playerid];
                                        event.finish();
                                    } else {
                                        player.gainPlayerCard(trigger.player, 'h', true, 'visibleMove');
                                    }
                                } else {
                                    delete player.storage.lg_emoshatang[trigger.player.playerid];
                                    event.finish();
                                }
                                ('step 1');
                                if (result.links?.length) {
                                    //player.showCards(result.links,'✦')
                                    var e = player.storage.lg_emoshatang[trigger.player.playerid];
                                    player.$compare(e, trigger.player, result.links[0]);
                                    if (e != result.links[0]) {
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                        player.useCard({ name: 'sha' }, trigger.player, false);
                                        if (trigger.player.getCards('h').includes(e)) trigger.player.removeGaintag('lg_emoshatang', [e]);
                                    }
                                }
                                delete player.storage.lg_emoshatang[trigger.player.playerid];
                            },
                        },
                        lg_emoshatang2: {
                            usable: 1,
                            trigger: {
                                player: 'lg_nei_shengbeiBegin',
                            },
                            multitarget: true,
                            multiline: true,
                            check(event, player) {
                                var num = (player.countCards('h') + 1) % 2;
                                var targets = game.filterPlayer(function (current) {
                                    return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
                                });
                                var effect = 0;
                                for (var j = 0; j < targets.length; j++) {
                                    if (get.attitude(player, targets[j]) > 0) {
                                        effect--;
                                    } else effect++;
                                }
                                return effect > 0;
                            },
                            filter(event, player) {
                                var num = (player.countCards('h') + 1) % 2;
                                return game.hasPlayer(function (current) {
                                    return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
                                });
                            },
                            logTarget(event, player) {
                                var num = (player.countCards('h') + 1) % 2;
                                return game.filterPlayer(function (current) {
                                    return current.countCards('h') > 0 && current != player && current.countCards('h') % 2 == num;
                                });
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = (player.countCards('h') + 1) % 2;
                                if (!event.targets || !event.targets.length) {
                                    event.targets = lib.skill['lg_emoshatang2'].logTarget(null, player);
                                }
                                if (event.targets.length) {
                                    event.targets.sort(lib.sort.seat);
                                }
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (!target.isIn()) {
                                        event.redo();
                                        return;
                                    }
                                    target.addTempClass('target');
                                    event.current = target;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.current && event.current.countCards('h')) {
                                    event.current.chooseCard('将一张手牌置于牌堆顶', 'h', true);
                                } else {
                                    event.goto(1);
                                }
                                ('step 3');
                                if (result.cards?.length) {
                                    event.current.lose(result.cards, ui.cardPile, 'visible', 'insert');
                                    event.current.$throw(result.cards, 1000, 'nobroadcast');
                                    var evt = event.getParent('');
                                    if (evt && evt.name) {
                                        if (result.cards[0].suit == 'club') {
                                            evt.is_club = true;
                                            player.addMark('', 1, false);
                                            if (player.countMark('') >= 9) {
                                                event.trigger('');
                                            }
                                        }
                                    }
                                    /*
                                    game.broadcastAll(function(player){
                                        var cardx=ui.create.card();
                                        cardx.classList.add('infohidden');
                                        cardx.classList.add('infoflip');
                                        player.$throw(cardx,1000,'nobroadcast');
                                    },event.current);
                                    */
                                }
                                ('step 4');
                                if (event.current == game.me) game.delay(0.5);
                                ('step 5');
                                event.goto(1);
                            },
                        },
                        lg_yuzhouwangguan: {
                            init(player) {
                                player.storage.lg_yuzhouwangguan = 0;
                            },
                            marktext: '✧',
                            intro: {
                                content: '#',
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'phaseDrawBegin2',
                            },
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            check() {
                                return true;
                            },
                            prompt(event, player) {
                                return '展示牌堆顶的' + get.cnNumber(player.getAttackRange() + player.storage.lg_yuzhouwangguan) + '张牌？';
                            },
                            content() {
                                'step 0';
                                trigger.changeToZero();
                                event.num = player.getAttackRange() + player.storage.lg_yuzhouwangguan;
                                var cards = get.cards(event.num);
                                game.cardsGotoOrdering(cards);
                                player.showCards(cards, '闪耀于原始宇宙的王冠');
                                event.cards = cards;
                                ('step 1');
                                event.basic = [];
                                event.trick = [];
                                var val1 = 0,
                                    val2 = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (get.type2(i) == 'trick') {
                                            event.trick.push(i);
                                            val2 += get.value(i);
                                        } else {
                                            event.basic.push(i);
                                            val1 += get.value(i);
                                        }
                                    }
                                var str1 = event.basic.length ? '获得' + get.translation(event.basic) : '没有非锦囊牌获得';
                                var str2 = event.trick.length ? '获得' + get.translation(event.trick) : '没有锦囊牌获得';
                                player
                                    .chooseControl('非锦囊牌', '锦囊牌')
                                    .set('ai', function () {
                                        if (val2 > val1) return '锦囊牌';
                                        return '非锦囊牌';
                                    })
                                    .set('choiceList', [str1, str2]);
                                ('step 2');
                                if (result.control == '非锦囊牌') {
                                    if (event.basic.length) player.gain(event.basic, 'gain2');
                                    event.give = event.trick;
                                } else {
                                    if (event.trick.length) player.gain(event.trick, 'gain2');
                                    event.give = event.basic;
                                }
                                ('step 3');
                                if (event.give.length) {
                                    var str = '令一名其他角色获得' + get.translation(event.give) + '？';
                                    player.chooseTarget(str, lib.filter.notMe).set('ai', (target) => get.attitude(player, target));
                                } else {
                                    //QQQ
                                    event.goto(5);
                                }
                                ('step 4');
                                if (result.targets?.length) {
                                    result.targets[0].gain(event.give, player, 'gain2');
                                } else {
                                    player.next.showHandcards();
                                    player.next.chooseToCompare(player);
                                    player.useSkill('lg_yuzhouwangguan2');
                                    player.next.chooseToCompare(player);
                                    player.useSkill('lg_yuzhouwangguan2');
                                    player.next.chooseToCompare(player);
                                    player.useSkill('lg_yuzhouwangguan2');
                                }
                                ('step 5');
                                if (player.storage.lg_yuzhouwangguan > 0) {
                                    player.storage.lg_yuzhouwangguan = 0;
                                    player.unmarkSkill('lg_yuzhouwangguan');
                                }
                            },
                            group: 'lg_yuzhouwangguan_add',
                            subSkill: {
                                add: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (get.tag(event.card, 'discard')) return false;
                                        if (event.target && event.target == player) return true;
                                        return event.targets && event.targets.includes(player);
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    content() {
                                        player.chooseToDiscard(3, true, 'h');
                                        player.storage.lg_yuzhouwangguan++;
                                        player.markSkill('lg_yuzhouwangguan');
                                    },
                                },
                            },
                            action_tag: {
                                overall: 3.5,
                                draw: 1,
                                support: 1,
                                search: 0.5,
                            },
                        },
                        lg_yuzhoulin_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_yuzhoulin1: {
                            trigger: {
                                source: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yuzhoulin1.mp3';
                                var list = ['shengbeiqiyue', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_yuzhouwangguan1: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            init(player) {
                                player.storage.lg_yuzhouwangguan1 = [];
                            },
                            intro: {
                                content: 'cards',
                            },
                            filter(event, player) {
                                if (ui.cardPile.firstChild && ui.cardPile.firstChild.vanishtag.includes('lg_yuzhouwangguan1')) {
                                    return false;
                                }
                                return true;
                            },
                            onremove: 'lose',
                            content() {
                                var cards = get.cards(1);
                                for (var i = 0; i < cards.length; i++) {
                                    cards[i].vanishtag.add('lg_yuzhouwangguan1');
                                }
                                player.storage.lg_yuzhouwangguan1.addArray(cards); //QQQ
                                player.markSkill('lg_yuzhouwangguan1');
                            },
                        },
                        lg_yuzhouwangguan2: {
                            trigger: {
                                player: '',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.countCards('h')) event.finish();
                                else player.showHandcards();
                                ('step 1');
                                var cards = player.getCards('h');
                                var suit = cards[0].suit;
                                for (var i = 1; i < cards.length; i++) {
                                    if (cards[i].suit != suit) return;
                                }
                                var num = Math.ceil(game.countGroup() / 2);
                                player.draw(3, 'visible', 'bottom');
                                player.previous.loseHp(num);
                                player.previous.previous.loseHp(num);
                                player.previous.previous.previous.loseHp(num);
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                        },
                        lg_fan_yingzuowuye: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'fan') {
                                    player.addSkill('lg_fan_yingzuowuye1');
                                    player.addSkill('lg_fan_yingzuowuye2');
                                }
                            },
                        },
                        lg_lieguangmeiying: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                return get.color(event.card) == 'black' && event.card.name == 'sha' && player.canCompare(event.player);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    player.useCard({ name: 'sha' }, trigger.player, false);
                                    player.gain(game.createCard('chuqibuyi'), 'gain2');
                                    player.gain(game.createCard('chuqibuyi'), 'gain2');
                                    player.discardPlayerCard(trigger.player, true);
                                } else {
                                    // trigger.directHit = true;
                                    trigger.parent.directHit.add(player);
                                    player.loseHp();
                                    // player.draw();
                                }
                            },
                        },
                        lg_yingzuowuye_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_fan_yingzuowuye1: {
                            enable: 'phaseUse',
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_kuangluemo.jpg',
                            intro: {
                                content: '「狂戮恶魔·入侵者」<br/>天赋效果:<br/>出牌阶段,若你的装备区内有牌,你可以令一名其他角色选择一项:①令你交给其一张牌,对其视为使用一张【杀】;②交给你装备区内的X张牌,对你视为使用一张【决斗】(X为你的体力值与♠️️牌数之差).',
                            },
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                var num = player.hp - player.countCards('he', { suit: 'spade' });
                                var str = '交给其装备区内的' + get.cnNumber(num) + '张牌,你对其视为使用一张【决斗】？';
                                target
                                    .chooseCard(get.translation(player) + '对你发动此技能', str, num, 'e')
                                    .set('ai', (card) => {
                                        if (_status.event.canGive) return 5 - get.value(card);
                                        return 0;
                                    })
                                    .set(
                                        'canGive',
                                        (function () {
                                            if (get.attitude(target, player) > 1) return true;
                                            if (!player.hasSha() && player.countCards('h') <= 4) return true;
                                            if (
                                                game.hasPlayer((current) => {
                                                    return player.canUse('sha', current, true, true) && get.effect(current, { name: 'sha' }, player, target) < 0 && !current.countCards('hs', ['shan', 'caochuan']);
                                                })
                                            )
                                                return false;
                                            return true;
                                        })()
                                    );
                                ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    target.give(cards, player);
                                    if (lib.filter.targetEnabled2({ name: 'juedou' }, target, player)) target.useCard({ name: 'juedou' }, player, false);
                                    event.finish();
                                } else {
                                    player.chooseCard('交给' + get.translation(target) + '一张牌', get.translation(target) + '为目标,交给其一张牌,对其视为使用一张【杀】', true, 'he');
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    player.give(cards, target);
                                    if (player.canUse('sha', target, false, false)) player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                            ai: {
                                order(item, player) {
                                    return get.order({ name: 'juedou' }) + 0.01;
                                },
                                threaten: 2,
                                result: {
                                    target(player, target) {
                                        if (
                                            player.hasCard((card) => {
                                                return get.value(card) < 5 && !['shan', 'tao', 'jiu', 'wuxie', 'caochuan'].includes(card.name);
                                            }, 'he')
                                        )
                                            return -1;
                                        return 0;
                                    },
                                },
                            },
                        },
                        lg_fan_yingzuowuye2: {
                            usable: 1,
                            trigger: {
                                player: 'lg_fan_yingzuowuye1After',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_yingzuowuye1.mp3';
                                var list = ['emozhiyin', dengweichuansuo, 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_shiliuyexiaoye: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_shiliuyexiaoye2');
                                    player.addSkill('lg_zhu_xujiahuanxiang');
                                }
                            },
                        },
                        lg_wanmeinvpu: {
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                //  player.draw();
                                'step 1';
                                player.chooseBool('是否展示所有手牌?');
                                ('step 2');
                                if (result.bool) player.showHandcards() && player.draw();
                                else player.next.swapHandcards(player) && event.finish();
                                ('step 3');
                                event.bool1 = false;
                                event.bool2 = false;
                                event.bool3 = false;
                                if (!player.countCards('h', { type: 'basic' })) event.bool1 = true;
                                if (!player.countCards('h', { type: 'trick' }) && !player.countCards('h', { type: 'delay' })) event.bool2 = true;
                                if (!player.countCards('h', { type: 'equip' })) event.bool3 = true;
                                ('step 4');
                                if (event.bool1) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (name == 'sha') {
                                            for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                        } else if (get.type(name) == 'basic') list.push(['基本', '', name]);
                                    }
                                    player.chooseButton(
                                        ['选择需要使用的牌', [list, 'vcard']],
                                        function (button) {
                                            return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                        },
                                        function (button) {
                                            return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                        }
                                    );
                                } else event.goto(6);
                                ('step 5');
                                if (result.bool && event.bool1) player.chooseUseTarget(true, { name: result.links[0][2], nature: result.links[0][3] });
                                ('step 6');
                                if (event.bool2) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        var name = lib.inpile[i];
                                        if (get.type(name) == 'trick') list.push(['锦囊', '', name]);
                                    }
                                    player.chooseButton(
                                        ['选择需要使用的牌', [list, 'vcard']],
                                        function (button) {
                                            return _status.event.player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                        },
                                        function (button) {
                                            return _status.event.player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                        }
                                    );
                                } else event.goto(8);
                                ('step 7');
                                if (result.bool && event.bool2) player.chooseUseTarget(true, { name: result.links[0][2], nature: result.links[0][3] });
                                ('step 8');
                                if (event.bool3) {
                                    var equip = get.cardPile(function (card) {
                                        return get.type(card) == 'equip' && player.hasUseTarget(card) && player.isEmpty(get.subtype(card));
                                    });
                                    if (equip) {
                                        player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                                    }
                                }
                                ('step 9');
                                var num = player.countCards('hej', { suit: 'diamond' });
                                player.addMark('lg_yonghengwenrou', num);
                            },
                        },
                        lg_wanmeinvpu1: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_zhu_xujiahuanxiangBegin',
                            },
                            forced: true,
                            content() {
                                player.addMark('lg_yonghengwenrou', 1);
                            },
                        },
                        lg_zhongbiaocanhai: {
                            intro: {
                                markcount: 'expansion',
                                mark(dialog, content, player) {
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    dialog.add(cards);
                                },
                                onunmark(storage, player) {
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    if (cards.length) {
                                        player.$throw(cards, 1000);
                                        game.cardsDiscard(cards);
                                        game.log(cards, '被置入了弃牌堆');
                                    }
                                },
                            },
                            marktext: '✦',
                            onremove(player) {
                                var cards = player.getExpansions('lg_zhongbiaocanhai');
                                if (cards.length) {
                                    player.$throw(cards, 1000);
                                    game.cardsDiscard(cards);
                                    game.log(cards, '被置入了弃牌堆');
                                }
                            },
                            audio: 'ext:世界之塔/Archive:2',
                            trigger: {
                                global: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (player.getExpansions('lg_zhongbiaocanhai').length > 3) return false;
                                if (player.hp < 1) return false;
                                if (event.targets.length > 1) return false;
                                var card = event.card;
                                if (card.suit == 'heart') return true;
                                return false;
                            },
                            logTarget: 'target',
                            prompt2(event, player) {
                                return '令' + get.translation(event.player) + '使用的【' + get.translation(event.card) + '】无效？';
                            },
                            check(event, player) {
                                if (event.parent.excluded.includes(event.target)) return false;
                                if (get.effect(event.target, event.card, event.player, player) < 0 && (event.target.hp <= player.hp || (get.nature(event.card) && event.target.isLinked() && player.isLinked()))) {
                                    if (get.tag(event.card, 'respondSha')) {
                                        if (
                                            event.target.countCards('h', {
                                                name: 'sha',
                                            }) == 0
                                        ) {
                                            return true;
                                        }
                                    } else if (get.tag(event.card, 'respondShan')) {
                                        if (
                                            event.target.countCards('h', {
                                                name: 'shan',
                                            }) == 0
                                        ) {
                                            return true;
                                        }
                                    } else if (get.tag(event.card, 'damage')) {
                                        if (event.target.countCards('h') < 2) return true;
                                    } else if (get.tag(event.card, 'recover')) {
                                        return player.hp > 2;
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                trigger.parent.excluded.add(trigger.target);
                                ('step 1');
                                var suits = [];
                                var cards = player.getExpansions('lg_zhongbiaocanhai');
                                for (var i = 0; i < cards.length; i++) {
                                    suits.add(cards[i].suit);
                                }
                                event.suits = suits;
                                event.card = get.cards(0);
                                game.cardsGotoOrdering(event.card);
                                event.cards = [];
                                event.suits2 = [event.card.suit];
                                player.showCards(event.card, '钟表的残骸');
                                ('step 2');
                                if (event.card && event.suits.includes(event.card.suit)) {
                                    event.cards.push(event.card);
                                    event.card = get.cards(0);
                                    game.cardsGotoOrdering(event.card);
                                    player.showCards(event.card, '钟表的残骸');
                                    event.suits2.add(event.card.suit);
                                    event.redo();
                                }
                                ('step 3');
                                if (card) {
                                    player.addToExpansion(card, 'gain2').gaintag.add('lg_zhongbiaocanhai');
                                    player.markSkill('lg_zhongbiaocanhai');
                                    game.log(player, '将', card, '置于武将牌上');
                                }
                                if (event.cards.length == 0) event.goto(6);
                                ('step 4');
                                var dialog = ui.create.dialog('获得其中花色均不同的一张牌', cards);
                                player
                                    .chooseButton(dialog, [1, event.suits2.length - 1])
                                    .set('filterButton', function (button) {
                                        var card = button.link;
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            if (ui.selected.buttons[i].suit == card.suit.suit) return false;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return get.value(button.link) - 1;
                                    });
                                ('step 5');
                                if (result.links?.length) {
                                    player.gain(result.links, 'gain2', 'log');
                                }
                                ('step 6');
                                if (event.suits2.length != 4) player.randomDiscard(3, 'h');
                                ('step 7');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        lg_yonghengwenrou: {
                            marktext2: '✧',
                            marktext: '✧',
                            intro: {
                                name: '飞刀',
                                content: '你有#枚<飞刀>标记',
                            },
                            audio: 'ext:世界之塔/Archive:2',
                            usable: 1,
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var cards = player.getExpansions('lg_zhongbiaocanhai');
                                if (cards.length < 1) return false;
                                if (
                                    event.filterCard &&
                                    event.filterCard(
                                        {
                                            name: 'tao',
                                        },
                                        player,
                                        event
                                    )
                                ) {
                                    var color = {
                                        red: 0,
                                        black: 0,
                                    };
                                    for (var i = 0; i < cards.length; i++) {
                                        if (typeof color[get.color(cards[i])] == 'number') {
                                            if (color[get.color(cards[i])] > 0) {
                                                return true;
                                            } else {
                                                color[get.color(cards[i])] += 1;
                                            }
                                        }
                                    }
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    return ui.create.dialog('钟表的残骸', cards, 'hidden');
                                },
                                select: 2,
                                filter(button, player) {
                                    if (ui.selected.buttons.length) {
                                        return get.color(ui.selected.buttons[0].link) == get.color(button.link);
                                    }
                                    return true;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (player.countCards('hs', 'tao') > 0) return 0;
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    var evt = _status.event.getParent('chooseToUse', true);
                                    if (evt && evt.type == 'dying') {
                                        if (
                                            evt.dying != player &&
                                            get.effect(
                                                evt.dying,
                                                {
                                                    name: 'tao',
                                                },
                                                player,
                                                player
                                            ) <= 0
                                        )
                                            return 0;
                                        return 2;
                                    }
                                    if (cards.length == 4) return 1;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        viewAs: {
                                            name: 'tao',
                                            cards: links,
                                        },
                                        cards: links,
                                        onuse(result, player) {
                                            var cards = player.getExpansions('lg_zhongbiaocanhai');
                                            result.cards = lib.skill[result.skill].cards;
                                            cards.removeArray(result.cards);
                                            player.markSkill('lg_zhongbiaocanhai');
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择【桃】的目标';
                                },
                            },
                            mod: {
                                globalTo(from, to, distance) {
                                    var cards = to.getExpansions('lg_zhongbiaocanhai');
                                    return distance + cards.length;
                                },
                                maxHandcard(player, num) {
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    return num + cards.length;
                                },
                            },
                            ai: {
                                order: 7,
                                save: true,
                                combo: 'lg_zhongbiaocanhai',
                                skillTagFilter(player, tag, arg) {
                                    var cards = player.getExpansions('lg_zhongbiaocanhai');
                                    if (tag == 'save') {
                                        var color = {
                                            red: 0,
                                            black: 0,
                                        };
                                        for (var i = 0; i < cards.length; i++) {
                                            if (typeof color[get.color(cards[i])] == 'number') {
                                                if (color[get.color(cards[i])] > 0) {
                                                    return true;
                                                } else {
                                                    color[get.color(cards[i])] += 1;
                                                }
                                            }
                                        }
                                        return false;
                                    }
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                        lg_yonghengwenrou1: {
                            usable: 1,
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget: 'target',
                            filter: (e, player) => e.card.name == 'sha' && e.target.countCards('h') && player.hasMark('lg_zhongbiaocanhai') > 1, //QQQ
                            check: (e, p) => get.effect(e.target, e.card, p, p) > 0,
                            forced: true,
                            content() {
                                'step 0';
                                var card = trigger.target.getCards('h').randomGet();
                                trigger.target.showCards(card, '永恒的温柔');
                                event.card = card;
                                if (trigger.card.suit != card.suit) {
                                    trigger.parent.directHit.add(trigger.target);
                                    event.finish();
                                }
                                ('step 1');
                                player.removeMark('lg_zhongbiaocanhai', 2);
                                player.useCard({ name: 'chuqibuyi', color: 'black', suit: 'spade' }, trigger.player, false);
                                player.useCard({ name: 'chuqibuyi', color: 'black', suit: 'spade' }, trigger.player, false);
                                player.useCard({ name: 'chuqibuyi', color: 'black', suit: 'spade' }, trigger.player, false);
                                trigger.target.discard(event.card, player, 'notBySelf');
                            },
                        },
                        lg_shiliuyexiaoye_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_shiliuyexiaoye2: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_shiliuyexiaoye1.mp3';
                                var list = ['shiyu', 'fushijian', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_nvpugantan: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            forced: true,
                            filter(event, player) {
                                return event.targets.length && ['diamond', 'club'].includes(event.card.suit) && get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                'step 0';
                                if (trigger.targets.length) {
                                    player.chooseTarget(get.prompt2('lg_nvpugantan'), function (card, player, target) {
                                        return trigger.targets.includes(target);
                                    }).ai = function (target) {
                                        if (get.effect(player, trigger.card, target, player) >= 0 || target == player) {
                                            return 4;
                                        }
                                        if (get.attitude(player, target) <= 0) {
                                            return 2;
                                        }
                                        return 0;
                                    };
                                }
                                ('step 1');
                                if (result.bool && result.targets) {
                                    result.targets[0].addSkill('lg_nvpugantan2');
                                    result.targets[0].addToExpansion(trigger.cards, player, 'give').gaintag.add('lg_nvpugantan2');
                                    event.target = result.targets[0];
                                }
                                ('step 2');
                                if (event.target) {
                                    if (result.targets[0].getExpansions('lg_nvpugantan2').length > 1) {
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            for (var j = 0; j < result.targets[0].getExpansions('lg_nvpugantan2').length; j++) {
                                                if (result.targets[0].getExpansions('lg_nvpugantan2')[j].name == trigger.cards[i].name && result.targets[0].getExpansions('lg_nvpugantan2')[j] != trigger.cards[i]) {
                                                    result.targets[0].loseToDiscardpile([result.targets[0].getExpansions('lg_nvpugantan2')[j], trigger.cards[i]]);
                                                    player.useCard({ name: trigger.cards[i].name }, result.targets[0]);
                                                    ('step 3');
                                                    if (player.getEquip(2)) player.addTempSkill('lg_nvpugantan1', { player: 'phaseBegin' });
                                                } else {
                                                    player.chooseToDiscard(true, 'h');
                                                    player.draw(2);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            },
                        },
                        lg_zhong_baoquanhanzhang: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'zhong') {
                                    player.addSkill('lg_xindongshunjian');
                                    player.addSkill('lg_zhong_baoquanhanzhang1');
                                }
                            },
                        },
                        lg_nvpugantan2: {
                            intro: {
                                content: 'expansion',
                                markcount: 'expansion',
                            },
                            onremove(player, skill) {
                                var cards = player.getExpansions(skill);
                                if (cards.length) player.loseToDiscardpile(cards);
                            },
                            marktext: '✧',
                        },
                        lg_liandong_nvpugantan: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'phaseDarwSkipped',
                            },
                            forced: true,
                            content() {
                                if (player.getEquip(2)) player.addTempSkill('lg_nvpugantan1', { player: 'phaseBegin' });
                            },
                        },
                        lg_baoquanhanzhang_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nvpugantan1: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            filter(event, player) {
                                return event.card.viewAs || event.card.name.suit == 'club' && event.player != player;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    prompt: get.prompt('lg_nvpugantan1'),
                                    filterCard: { suit: 'club' },
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player.canUse({ name: 'lg_xinkuangshenyi' }, target);
                                    },
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.effect(target, { name: 'lg_xinkuangshenyi' }, player, player);
                                    },
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'lg_xinkuangshenyi' }, result.cards, result.targets);
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        lg_zhong_baoquanhanzhang1: {
                            usable: 1,
                            trigger: {
                                player: 'shanBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_xindongkafei2.mp3';
                                var list = ['xinkuangshenyi', 'yitilazhihua', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhu_amiya: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_yuanshizhihe');
                                    player.addSkill('lg_zhu_amiya1');
                                }
                            },
                        },
                        lg_yuanshizhihe: {
                            trigger: {
                                player: 'linkBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_yuanshizhihe.jpg',
                            intro: {
                                content: '「源石之核·救世」<br/>天赋效果:<br/>当你的横置状态变化时,你可以令一名其他角色交给你一张手牌.出牌阶段结束时,你将此牌置于牌堆顶.若如此做,当你下次受到伤害后,将此牌置于牌堆顶.',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('lg_yuanshizhihe'), function (card, player, target) {
                                        return target != player && target.countCards('h') > 0;
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return Math.sqrt(att) / 10;
                                        return 5 - att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    target.chooseCard('h', true, '将一张手牌交给' + get.translation(player) + '');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool) {
                                    player.addTempSkill('lg_yuanshizhihe_put');
                                    event.target.give(result.cards, player, true).gaintag.add('lg_yuanshizhihe');
                                }
                            },
                            subSkill: {
                                put: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasCard((card) => card.hasGaintag('lg_yuanshizhihe'), 'h');
                                    },
                                    content() {
                                        var cards = player.getCards('h', (card) => card.hasGaintag('lg_yuanshizhihe'));
                                        player.lose(cards, ui.cardPile, 'insert');
                                        game.log(player, '将', get.cnNumber(cards.length) + '张牌', '置于牌堆顶');
                                        game.broadcastAll(function (player) {
                                            var cardx = ui.create.card();
                                            cardx.classList.add('infohidden');
                                            cardx.classList.add('infoflip');
                                            player.$throw(cardx, 1000, 'nobroadcast');
                                        }, player);
                                    },
                                    onremove(player) {
                                        player.removeGaintag('lg_yuanshizhihe');
                                    },
                                },
                            },
                        },
                        lg_jingshenbaofa: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.next.storage._disableJudge && player.next.countDisabled() >= 5) return false;
                                return event.source != undefined && event.source != player;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.source);
                                if (event.source.isTurnedOver()) {
                                    if (att > 0 && !player.next.storage._disableJudge) return true;
                                    if (att > 0 && player.next.countCards('e') < 2) return true;
                                    return false;
                                } else {
                                    if (att < 0 && !player.next.storage._disableJudge) return true;
                                    if (att < 0 && player.next.countCards('e') < 2) return true;
                                    return false;
                                }
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.next.storage._disableJudge) list.push('判定区');
                                if (player.next.countDisabled() < 5) list.push('装备栏');
                                if (list.length == 2) {
                                    player
                                        .chooseControl(list, function (event, player) {
                                            return '判定区';
                                        })
                                        .set('prompt', '请选择一项');
                                } else {
                                    event._dis = list[0];
                                }
                                ('step 1');
                                var dis = result.control || event._dis;
                                if (dis == '装备栏') {
                                    player.next.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                                    player.next.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                                } else if (dis == '判定区') {
                                    player.next.disableJudge();
                                }
                                var num = Math.floor(player.getDamagedHp() + trigger.source.getDamagedHp() / 2);
                                trigger.source.damage();
                                trigger.source.chooseToDiscard(num, 'h', true, { color: 'black' });
                            },
                        },
                        lg_qimeila: {
                            audio: 'ext:世界之塔/Archive:3',
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                if (player.countDisabled() >= 5) return false;
                                var type = get.type(name);
                                return type == 'basic';
                            },
                            filter(event, player) {
                                if (player.countDisabled() >= 5) return false;
                                var type = 'basic';
                                for (var name of lib.inpile) {
                                    if (get.type(name) != type) continue;
                                    if (
                                        event.filterCard &&
                                        event.filterCard(
                                            {
                                                name: name,
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
                                    var dialog = ui.create.dialog('奇美拉', 'hidden');
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i = 1; i < 6; i++) {
                                        if (player.isDisabled(i)) continue;
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.innerHTML = '<span>' + get.translation('equip' + i) + '</span>';
                                        td.link = i;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
                                        table.appendChild(td);
                                        dialog.buttons.add(td);
                                    }
                                    dialog.content.appendChild(table);
                                    var type = 'basic';
                                    var list = [];
                                    for (var name of lib.inpile) {
                                        if (get.type(name) != type) continue;
                                        if (
                                            event.filterCard &&
                                            event.filterCard(
                                                {
                                                    name: name,
                                                },
                                                player,
                                                event
                                            )
                                        ) {
                                            list.push([type, '', name]);
                                            if (name == 'sha') {
                                                list.push([type, '', name, 'fire']);
                                                list.push([type, '', name, 'thunder']);
                                                list.push([type, '', name, 'ice']);
                                            }
                                        }
                                    }
                                    dialog.add([list, 'vcard']);
                                    return dialog;
                                },
                                filter(button) {
                                    if (ui.selected.buttons.length && typeof button.link == typeof ui.selected.buttons[0].link) return false;
                                    return true;
                                },
                                select: 2,
                                check(button) {
                                    var player = _status.event.player;
                                    var name = button.link[2];
                                    var evt = _status.event.parent;
                                    if (typeof button.link == 'number') {
                                        var card = player.getEquip(button.link);
                                        var flag = 0;
                                        if (card) {
                                            var val = get.value(card);
                                            //if(val>0) return 0;
                                            //return 5-val;
                                            flag = 0.5;
                                        }
                                        if (button.link == 1) return 3.2;
                                        if (button.link == 2) {
                                            if (evt.type == 'dying') return 1;
                                            return 0;
                                        }
                                        if (button.link == 3) return 4.5 + flag;
                                        if (button.link == 4) return 4.4 + flag;
                                        if (button.link == 5) return 4.3 + flag;
                                    }
                                    if (name == 'shan') {
                                        if (player.hp <= 2) return 2;
                                        if (Math.random() > 0.8) return 1;
                                    }
                                    if (evt.type == 'dying') {
                                        if (get.attitude(player, evt.dying) < 2) return false;
                                        if (name == 'jiu') return 2.1;
                                        return 1.9;
                                    }
                                    if (evt.type == 'phase') {
                                        if (name == 'jiu') return 0;
                                        if (name == 'tao') {
                                            if (player.hp == 1) return 1;
                                            if (player.hp == 2 && player.countCards('h') >= 3) return 1;
                                            return 0;
                                        }
                                        if (name == 'sha' && Math.random() > 0.6)
                                            return player.getUseValue({
                                                name: name,
                                                nature: button.link[3],
                                            });
                                        return 0;
                                    }
                                    if (Math.random() > 0.8) return 1;
                                    return 0;
                                },
                                backup(links, player) {
                                    if (typeof links[1] == 'number') links.reverse();
                                    var equip = links[0];
                                    var name = links[1][2];
                                    var nature = links[1][3];
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        equip: equip,
                                        viewAs: {
                                            name: name,
                                            nature: nature,
                                        },
                                        popname: true,
                                        precontent() {
                                            player.disableEquip(lib.skill.lg_qimeila_backup.equip);
                                            var card = player.getEquip(lib.skill.lg_qimeila_backup.equip);
                                            if (card) player.recover();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    if (typeof links[1] == 'number') links.reverse();
                                    var equip = 'equip' + links[0];
                                    var name = links[1][2];
                                    var nature = links[1][3];
                                    return '废除' + get.translation(equip) + '栏,视为使用' + (get.translation(nature) || '') + get.translation(name);
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg == 'respond') return false;
                                    if (player.countDisabled() >= 5) return false;
                                    return true;
                                },
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        lg_qimeila1: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'respondBegin',
                            },
                            content() {
                                player.chooseToEnable(true);
                            },
                        },
                        lg_amiya_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhu_amiya1: {
                            usable: 1,
                            trigger: {
                                player: 'lg_qimeilaBegin',
                            },
                            filter(event, player) {
                                return player.hp < 2;
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_amiya1.mp3';
                                var list = ['jinjijiebei', 'zhihui', 'juezhanqianxi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhong_feiniaomashi: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'zhong') {
                                    player.addSkill('lg_zhong_zhixu');
                                    player.addSkill('lg_zhong_feiniaomashi1');
                                }
                            },
                        },
                        lg_zhanshupanduan: {
                            round: 2,
                            trigger: {
                                source: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.card && event.card.name != 'sha' && event.notLink();
                            },
                            audio: 'ext:世界之塔/Archive:3',
                            logTarget: 'player',
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            prompt2(event, player) {
                                return '判定一次？若为♦️️,此牌对' + get.translation(event.player) + '造成的伤害值+2.';
                            },
                            content() {
                                'step 0';
                                player.judge('战术性判断', function (card) {
                                    if (card.suit == 'diamond') return 3;
                                    return -3;
                                });
                                ('step 1');
                                if (result.bool == true) {
                                    trigger.num += 2;
                                    event.finish();
                                } else {
                                    player.chooseUseTarget(false, { name: 'sha' });
                                    event.goto(2);
                                }
                                ('step 2');
                                var goon = get.attitude(player, trigger.player) < 0;
                                var next = player.chooseToDiscard(get.prompt('lg_zhanshupanduan', trigger.player));
                                next.set('filterCard', function (card) {
                                    return card.suit == 'diamond';
                                });
                                next.set('prompt2', '弃置一张♦️️手牌？');
                                next.set('ai', function (card) {
                                    if (_status.event.goon) {
                                        return 8 - get.value(card);
                                    }
                                    return 0;
                                });
                                next.set('goon', goon);
                                ('step 3');
                                if (result.bool) {
                                    var a = player.countCards('h', { suit: 'diamond' });
                                    trigger.num += a;
                                }
                            },
                            ai: {
                                damageBonus: true,
                            },
                            group: ['lg_zhanshupanduan_roundcount'],
                        },
                        lg_abishu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                var suit = event.card.suit;
                                if (suit && event.targets && event.targets.includes(player)) {
                                    if (suit == 'diamond')
                                        return game.hasPlayer(function (current) {
                                            return current.getHistory('sourceDamage', function (evt) {
                                                return evt.player == player;
                                            }).length;
                                        });
                                    return player.getStat('damage') > 0;
                                }
                                return false;
                            },
                            forced: true,
                            content() {
                                var num = _status.currentPhase == player ? 5 : 3;
                                player.draw(num, 'nodelay');
                                if (player.isMinHp()) player.removeSkill('lg_abishu');
                            },
                            ai: {
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        },
                        lg_feiniaomashi_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_zhong_feiniaomashi1: {
                            trigger: {
                                source: 'dieBegin',
                            },
                            filter(event, player) {
                                return player.hp < 5;
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_bilandangan1.mp3';
                                var list = ['', 'jingzhunyiji', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_zhong_zhixu: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_zhixu.jpg',
                            intro: {
                                content: '「秩序·守护者」<br/>天赋效果:<br/>出牌阶段,当你使用【杀】造成伤害时,你随机获得一张♠️️牌;且使用【杀】的次数上限+1.',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && _status.currentPhase == player;
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return card.suit == 'spade';
                                    }),
                                    'gain2'
                                );
                                player.getStat().card.sha--;
                            },
                        },
                        lg_beiyinanliu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'phaseJudgeBegin',
                            },
                            filter(event, player) {
                                return player.hasSkill('lg_beiyinanliu1');
                            },
                            content() {
                                'step 0';
                                if (!player.storage.lg_beiyinanliu) player.storage.lg_beiyinanliu = [];
                                player.addTempSkill('lg_beiyinanliu_view');
                                event.targets = game.filterPlayer(function (target) {
                                    return target != player;
                                });
                                event.targets = get.sort(event.targets, 'seat', player);
                                ('step 1');
                                if (event.targets.length == 0) event.finish();
                                ('step 2');
                                event.current = event.targets.shift();
                                event.current.chooseBool(+get.translation(player) + '对你发动此技能,令其摸两张牌？').set('ai', function (event, player) {
                                    if (player.countCards('h') == 0) return true;
                                    if (get.attitude(player, event.player) > 1) return true;
                                    if (!player.canSave(player)) return true;
                                    if (player.isMinHp() && player.hasFriend()) return false;
                                    if (player.hasSkillTag('forbid_card') || player.hp >= 3) return false;
                                    if (
                                        game.hasPlayer(function (target) {
                                            return target.hp <= player.hp && player.canSave(target) && get.recoverEffect(target, player, player) > 1;
                                        })
                                    )
                                        return true;
                                    return true;
                                });
                                ('step 3');
                                if (result.bool) {
                                    player.draw(2);
                                    player.viewHandcards(event.current);
                                    // event.current.showHandcards();
                                    player.storage.lg_beiyinanliu.add(event.current);
                                } else {
                                    player.loseHp(2);
                                    event.current.addTempSkill('lg_beiyinanliu_forbid');
                                    if (player.countCards('h', { name: 'sha' }) == 0) player.discardPlayerCard(player.nex, true, 'h') && event.finish();
                                }
                                event.goto(1);
                            },
                            subSkill: {
                                view: {
                                    charlotte: true,
                                    ai: {
                                        viewHandcard: true,
                                        skillTagFilter(player, tag, arg) {
                                            if (player.storage.lg_beiyinanliu && player.storage.lg_beiyinanliu.includes(arg)) return;
                                            return false;
                                        },
                                    },
                                    onremove(player, skill) {
                                        delete player.storage.lg_beiyinanliu;
                                    },
                                },
                            },
                        },
                        lg_nei_anuosi: {
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_yihaizhilei1');
                                    player.addSkill('lg_yihaizhilei0');
                                }
                            },
                        },
                        lg_beiyinanliu2: {
                            trigger: {
                                source: 'damageBegin1',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'spade' && event.notLink();
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('lg_beiyinanliu1', { player: 'phaseUseBegin' });
                            },
                        },
                        lg_beiyinanliu1: {},
                        lg_shenyuanhaixi: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player != player && !player.hasSkill('lg_shenyuanhaixi_used') && player.countCards('he') > 4;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseCard(get.prompt('lg_shenyuanhaixi', trigger.player), '你可以交给其五张牌', 5, 'he')
                                    .set('ai', (card) => {
                                        if (!_status.event.give) return 0;
                                        var player = _status.event.player,
                                            target = _status.event.target;
                                        return target.getUseValue(card) - player.getUseValue(card) + 0.5;
                                    })
                                    .set('give', get.attitude(player, trigger.player) > 0)
                                    .set('target', trigger.player);
                                ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    player.give(cards, trigger.player);
                                    player.addTempSkill('lg_shenyuanhaixi_used', 'damageEnd');
                                    player.addTempSkill('lg_shenyuanhaixi_given');
                                    player.markAuto('lg_shenyuanhaixi_used', [trigger.player]);
                                }
                            },
                            subSkill: {
                                used: {
                                    charlotte: true,
                                    intro: {
                                        content: '目标:$',
                                    },
                                },
                                given: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        global: 'phaseDiscardEnd',
                                    },
                                    filter(event, player) {
                                        return event.player.hasHistory('lose', (evt) => {
                                            return evt.type == 'discard' && evt.getParent('phaseDiscard') == event && evt.cards2.filterInD('d').length;
                                        });
                                    },
                                    charlotte: true,
                                    prompt2(event, player) {
                                        var cards = [];
                                        event.player.getHistory('lose', (evt) => {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == event) cards.addArray(evt.cards2.filterInD('d'));
                                        });
                                        return '获得' + get.translation(cards);
                                    },
                                    content() {
                                        var cards = [];
                                        trigger.player.getHistory('lose', (evt) => {
                                            if (evt.type == 'discard' && evt.getParent('phaseDiscard') == trigger) cards.addArray(evt.cards2.filterInD('d'));
                                        });
                                        var num = trigger.player.getAttackRange() + player.countCards('h', { suit: 'heart' });
                                        player.gain(cards, 'gain2');
                                        player.recover(num);
                                    },
                                },
                            },
                        },
                        lg_shenyuanhaixi1: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'recoverBegin',
                            },
                            content() {
                                player.showHandcards();
                                player.draw();
                            },
                        },
                        lg_shenyuanhaixi2: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dyingAfter',
                            },
                            content() {
                                _status.currentPhase && _status.currentPhase.damage();
                            },
                        },
                        lg_shenyuanhaixi3: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'loseHpBegin',
                            },
                            content() {
                                var card = player.getCards('h');
                                player.discard(card);
                                player.phase('nodelay');
                            },
                        },
                        lg_anuosi_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_mengjingqinran: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (!event.source) return false;
                                if (event.source == player) return false;
                                if (!event.source.isAlive()) return false;
                                if (event.source.hasSkill('lg_mengjingqinran_eff')) {
                                    for (var a of event.cards) {
                                        if (event.source.storage.lg_mengjingqinran_eff.includes(a.number)) return false;
                                    }
                                }
                                return true;
                            },
                            logTarget(event, player) {
                                return event.source;
                            },
                            line: 'thunder',
                            check(event, player) {
                                if (player.getEnemies().includes(event.source)) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.source.addSkill('lg_mengjingqinran_eff');
                                for (var a of trigger.cards) {
                                    if (!trigger.source.storage.lg_mengjingqinran_eff.includes(a.number)) {
                                        trigger.source.storage.lg_mengjingqinran_eff.push(a.number);
                                        trigger.source.markSkill('lg_mengjingqinran_eff');
                                    }
                                }
                            },
                            subSkill: {
                                eff: {
                                    audio: 'ext:世界之塔/Archive:3',
                                    trigger: {
                                        player: ['discardEnd', 'dying'],
                                    },
                                    filter(event, player) {
                                        if (event.name == 'discard') {
                                            for (var a of event.cards) {
                                                if (player.storage.lg_mengjingqinran_eff.includes(a.number)) return true;
                                            }
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.name != 'discard') {
                                            if (trigger.getParent(2).name == 'lg_mengjingqinran_eff') {
                                                var tar = game.findPlayer(function (current) {
                                                    return current.name == 'lg_tangyuanyougui';
                                                });
                                                if (tar && tar.isAlive()) {
                                                    tar.drawTo(tar.maxHp + tar.hp);
                                                }
                                            }
                                            player.removeSkill('lg_mengjingqinran_eff');
                                            event.finish();
                                            return;
                                        }
                                        ('step 1');
                                        event.judges = 0;
                                        for (var a of trigger.cards) {
                                            if (player.storage.lg_mengjingqinran_eff.includes(a.number)) event.judges++;
                                        }
                                        ('step 2');
                                        if (event.judges == 0) {
                                            event.finish();
                                            return;
                                        }
                                        ('step 3');
                                        player.judge(function (card) {
                                            if (get.color(card) == 'black') {
                                                for (var a of player.storage.lg_mengjingqinran_eff) {
                                                    if (['spade', 'club'].includes(a)) {
                                                        return -1;
                                                        break;
                                                    }
                                                }
                                            } else {
                                                for (var a of player.storage.lg_mengjingqinran_eff) {
                                                    if (['heart', 'diamond'].includes(a)) {
                                                        return -1;
                                                        break;
                                                    }
                                                }
                                            }
                                            return 0;
                                        });
                                        ('step 4');
                                        if (result.color) {
                                            if (result.color == 'black') {
                                                for (var a of player.storage.lg_mengjingqinran_eff) {
                                                    if (['spade', 'club'].includes(a)) {
                                                        player.loseHp();
                                                        break;
                                                    }
                                                }
                                            } else {
                                                for (var a of player.storage.lg_mengjingqinran_eff) {
                                                    if (['heart', 'diamond'].includes(a)) {
                                                        player.loseHp();
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        ('step 5');
                                        event.judges--;
                                        ('step 6');
                                        event.goto(2);
                                    },
                                    onremove(player) {
                                        player.unmarkSkill('lg_mengjingqinran_eff');
                                        player.storage.lg_mengjingqinran_eff = [];
                                    },
                                    init(player) {
                                        player.storage.lg_mengjingqinran_eff = [];
                                    },
                                    marktext: '✦',
                                    intro: {
                                        content(storage) {
                                            if (!storage.length) {
                                                return '';
                                            } else {
                                                var str = '记录点数为' + get.translation(storage[0]);
                                                for (var a = 1; a < storage.length; a++) {
                                                    str += '、' + get.translation(storage[a]);
                                                }
                                                str += '的牌';
                                                return str;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        lg_fan_tangyuanyougui: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'fan') {
                                    player.addSkill('lg_fan_tangyuanyougui1');
                                    player.addSkill('lg_fan_tangyuanyougui2');
                                }
                            },
                        },
                        lg_fan_tangyuanyougui1: {
                            enable: 'phaseUse',
                            selectTarget: [1, 3],
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_xiexinluanwu.jpg',
                            intro: {
                                content: '「邪心乱舞·入侵者」<br/>天赋效果:<br/>出牌阶段限一次,你可以弃置一张牌,令至多三名其他角色各判定一次.若与你弃置的牌类别:均不相同,你对其造成1点伤害;均相同,令其回复1点体力,失去1点体力.',
                            },
                            filterCard: true,
                            usable: 1,
                            content() {
                                'step 0';
                                var type = get.type(cards[0]);
                                target.judge(function (card) {
                                    return get.type(card) == type ? 1 : 0;
                                });
                                ('step 1');
                                if (!result.bool) {
                                    var mubiao = target;
                                    player.line(mubiao, 'fire');
                                    target.damage(1);
                                } else {
                                    target.recover();
                                    target.loseHp();
                                }
                            },
                            ai: {
                                order: 6,
                                threaten: 2,
                                result: {
                                    target: -3,
                                },
                            },
                        },
                        lg_cheyezhiguang: {
                            audio: 'ext:世界之塔/Archive:3',
                            usable: 1,
                            enable: 'phaseUse',
                            selectTarget: -1,
                            filterTarget(card, player, target) {
                                return target != player && target.hp < player.countCards('hej');
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                event.targets = targets;
                                event.colors = {
                                    black: [],
                                    red: [],
                                };
                                ('step 1');
                                event.target = event.targets.shift();
                                if (!event.target) {
                                    event.goto(3);
                                    return;
                                }
                                if (!event.target.countGainableCards(player, 'he')) {
                                    event.redo();
                                    return;
                                }
                                event.target
                                    .chooseCard('he', `交给${get.translation(player)}一张牌`, true, function (card, player) {
                                        return lib.filter.canBeGained(card, _status.event.target, player);
                                    })
                                    .set('target', player)
                                    .set('ai', function (card) {
                                        let player = _status.event.player;
                                        let target = _status.event.target;
                                        let num = -get.attitude(player, player) * get.value(card, player) + get.attitude(player, target) * get.value(card, target);
                                        if (get.color(card, player) == 'black') {
                                            num -= 15;
                                        }
                                        if (get.color(card, player) == 'red' && player.isDamaged()) {
                                            num += 15;
                                        }
                                        return num;
                                    });
                                ('step 2');
                                if (result.cards?.length) {
                                    player.gain(event.target, result.cards);
                                    let color = get.color(result.cards, event.target);
                                    if (color in event.colors) {
                                        event.colors[color].push(event.target);
                                    }
                                    event.target.$give(result.cards, player);
                                }
                                event.goto(1);
                                ('step 3');
                                let red = event.colors.red.filter((c) => c.isDamaged());
                                if (!event.colors.black.length && !red.length) {
                                    event.finish();
                                    return;
                                }
                                let prompt = `###${get.prompt(event.name)}###`;
                                if (event.colors.black.length) {
                                    prompt += `令${get.translation(event.colors.black)}失去1点体力 `;
                                }
                                if (red.length) {
                                    prompt += `令${get.translation(red)}回复1点体力`;
                                }
                                let value = 0;
                                for (let c of event.colors.black) {
                                    value -= Math.sign(get.attitude(player, c));
                                }
                                for (let c of red) {
                                    value += Math.sign(get.attitude(player, c));
                                }
                                player.chooseBool(prompt, value >= 0);
                                ('step 4');
                                if (!result.bool) {
                                    event.finish();
                                    return;
                                }
                                event.targets = game.filterPlayer().sortBySeat();
                                ('step 5');
                                let target = event.targets.shift();
                                if (!target) {
                                    return;
                                }
                                if (event.colors.black.includes(target)) {
                                    target.loseHp();
                                }
                                if (event.colors.red.includes(target) && target.isDamaged()) {
                                    target.recover(player);
                                }
                                event.redo();
                            },
                            ai: {
                                order: 9,
                                threaten: 2,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        lg_cheyezhiguang1: {
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.itemtype(event.source) == 'player' && event.bySelf != true;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) > 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = trigger.source.getCards('hej', { suit: 'club' });
                                trigger.source.discard(card);
                                trigger.source.draw(card.length);
                            },
                        },
                        lg_tangyuanyougui_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_beimihu: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_beimihu1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_guangzhishenyu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'phaseDrawBegin1',
                            },
                            filter(event, player) {
                                return (
                                    !event.numFixed &&
                                    game.hasPlayer(function (current) {
                                        if (player == current) return false;
                                        return current.countCards('h');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('lg_guangzhishenyu'), function (card, player, target) {
                                        if (player == target) return false;
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = get.player();
                                        if (get.attitude(player, target) < 0) {
                                            var n = target.countCards('h');
                                            return (n - 1) / 3;
                                        }
                                        return 0;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                trigger.changeToZero();
                                event.cards = target.getCards('h');
                                var next = player.chooseCardButton(get.translation(target) + '的手牌<br>获得其中至多三张花色均不同的牌', [1, 3], event.cards, true);
                                next.set('filterButton', function (button) {
                                    if (ui.selected.buttons.length) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            var card = ui.selected.buttons[i].link;
                                            if (card.suit == button.link.suit) return false;
                                        }
                                    }
                                    return true;
                                });
                                ('step 3');
                                event.cs = result.links;
                                player.gain(event.cs, target, 'giveAuto', 'bySelf');
                                ('step 4');
                                if (event.cs.length > 2) player.draw() && player.draw() && player.draw() && player.init('lg_beimihu');
                            },
                        },
                        lg_guangzhishenyu1: {
                            audio: 'ext:世界之塔/Archive:1',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('lg_guangzhishenyu1')).set('ai', function (target) {
                                    var player = _status.event.player,
                                        att = get.attitude(player, target),
                                        eff = att / (player == target ? 2 : 1) + 1;
                                    if (att >= 0) {
                                        if (target.hasSkill('yongsi')) return eff * 5;
                                        if (target.hasSkill('zhiheng') || target.hasSkill('rezhiheng')) return eff * 4;
                                        if (target.hasSkill('rekurou')) return eff * 3;
                                        if (target.hasSkill('xinlianji') || target.hasSkill('dclianji')) return eff * 2;
                                        if (target.needsToDiscard()) return eff * 1.5;
                                        return eff;
                                    }
                                    return 0;
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.markAuto('lg_guangzhishenyu2', [target]);
                                    player.addSkill('lg_guangzhishenyu2');
                                } else {
                                    player.moveCard();
                                    player.moveCard();
                                }
                            },
                        },
                        lg_guangzhishenyu2: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                return player.getStorage('lg_guangzhishenyu2').includes(event.player);
                            },
                            intro: {
                                content: '$',
                            },
                            content() {
                                'step 0';
                                player.removeSkill('lg_guangzhishenyu2');
                                var target = trigger.player;
                                event.target = target;
                                var cards = [];
                                target.getHistory('lose', function (evt) {
                                    if (evt.type == 'discard') cards.addArray(evt.cards2);
                                });
                                if (cards.length < 2) event.finish();
                                else event.cards = cards;
                                ('step 1');
                                var list = [];
                                for (var type of ['basic', 'trick', 'equip']) {
                                    for (var card of event.cards) {
                                        if (get.type2(card) == type) {
                                            list.push(type);
                                            break;
                                        }
                                    }
                                }
                                list.push('cancel2');
                                player.randomDiscard('j');
                                player
                                    .chooseControl(list)
                                    .set('prompt', '你与' + get.translation(target) + '各获得其中一种类别的牌？')
                                    .set('ai', function () {
                                        var player = _status.event.player,
                                            list = _status.event.controls;
                                        if (player.hp <= 3 && !player.countCards('h', { name: ['shan', 'tao'] }) && list.includes('basic')) return 'basic';
                                        if (player.countCards('he', { type: 'equip' }) < 2 && list.includes('equip')) return 'equip';
                                        if (list.includes('trick')) return 'trick';
                                        return list.remove('cancel2').randomGet();
                                    });
                                ('step 2');
                                if (result.control != 'cancel2') {
                                    var type = result.control;
                                    var list = [target, player].sortBySeat(_status.currentPhase),
                                        cards = [];
                                    for (var current of list) {
                                        var card = get.discardPile(function (card) {
                                            return get.type2(card) == type && !cards.includes(card);
                                        });
                                        if (card) {
                                            cards.push(card);
                                            current.gain(card, 'gain2');
                                        }
                                    }
                                }
                            },
                        },
                        lg_liandong_beimihu: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'lg_nei_shengbeiBegin',
                            },
                            filter(event, player) {
                                return player.countCards('j');
                            },
                            content() {
                                var hp = player.hp;
                                player.init('lg_beimihu');
                                player.hp = hp;
                                player.update();
                                ui.clear();
                            },
                        },
                        lg_jiuyuanjing: {
                            audio: 'ext:世界之塔/Archive:3',
                            limited: true,
                            mark: true,
                            marktext2: '✧',
                            marktext: '✧',
                            init(player) {
                                player.storage.lg_jiuyuanjing = false;
                            },
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage.lg_jiuyuanjing;
                            },
                            intro: {
                                content: 'limited',
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            filterTarget(card, player, target) {
                                return !target.storage.lg_jiuyuanjinged;
                            },
                            content() {
                                player.awakenSkill('lg_jiuyuanjing');
                                player.storage.lg_jiuyuanjing = true;
                                player.storage.lg_jiuyuanjing2 = {
                                    equip: {},
                                };
                                player.storage.lg_jiuyuanjing2.player = target;
                                for (var i = 1; i < 7; i++) {
                                    if (target.isDisabled(i)) {
                                        player.storage.lg_jiuyuanjing2.equip['equip' + i] = false;
                                    } else {
                                        player.storage.lg_jiuyuanjing2.equip['equip' + i] = true;
                                    }
                                }
                                target.storage.lg_jiuyuanjinged = true;
                                player.storage.lg_jiuyuanjing2.cards = target.getCards('e');
                                player.addSkill('lg_jiuyuanjing2');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 2) {
                                            return target.countCards('e');
                                        }
                                        return 0;
                                    },
                                },
                            },
                        },
                        lg_jiuyuanjing2: {
                            trigger: {
                                global: ['linkBegin', 'recoverBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                return player.storage.lg_jiuyuanjing2.player == event.player;
                            },
                            content() {
                                'step 0';
                                if (trigger.name == 'recover') {
                                    player.removeSkill('lg_jiuyuanjing2');
                                    player.restoreSkill('lg_jiuyuanjing');
                                    event.finish();
                                }
                                ('step 1');
                                var link = player.storage.lg_jiuyuanjing2;
                                var target = player.storage.lg_jiuyuanjing2.player;
                                for (var i = 1; i < 7; i++) {
                                    if (target.isDisabled(i) && link.equip['equip' + i] == true) {
                                        target.enableEquip('equip' + i);
                                    }
                                    if (!target.isDisabled(i) && link.equip['equip' + i] == false) {
                                        target.disableEquip('equip' + i);
                                    }
                                }
                                var dis = target.getCards('e', function (card) {
                                    return !player.storage.lg_jiuyuanjing2.cards.includes(card);
                                });
                                if (dis.length) target.discard(dis);
                                for (var i = 0; i < link.cards.length; i++) {
                                    if (!target.getCards('e').includes(link.cards[i])) {
                                        var bool = get.cardPile(function (card) {
                                            return card == link.cards[i];
                                        }, true);
                                        if (bool) {
                                            target.equip(bool);
                                        } else {
                                            target.equip(game.createCard(link.cards[i]));
                                        }
                                    }
                                }
                            },
                        },
                        lg_jiuyuanjing0: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.countCards('h', { type: 'trick' });
                            },
                            forced: true,
                            content() {
                                var n = [1, 2, 3].randomGet();
                                if (n == 1) player.addTempSkill('lg_jiuyuanjing01', { player: 'phaseEnd' });
                                if (n == 2) player.addTempSkill('lg_jiuyuanjing02', { player: 'phaseEnd' });
                                if (n == 3) player.addTempSkill('lg_jiuyuanjing03', { player: 'phaseEnd' });
                            },
                        },
                        lg_beimihu_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_jiuyuanjing01: {
                            trigger: {
                                player: ['chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (event.responded) return false;
                                if (
                                    !event.filterCard ||
                                    !event.filterCard(
                                        {
                                            name: 'shan',
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return false;
                                if (
                                    event.name == 'chooseToRespond' &&
                                    !lib.filter.cardRespondable(
                                        {
                                            name: 'shan',
                                        },
                                        player,
                                        event
                                    )
                                )
                                    return false;
                                var sour = event.parent.player;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var current = player;
                                event.lg_jiuyuanjing01_current = current.next;
                                event.lg_jiuyuanjing01_players = [];
                                ('step 1');
                                event.lg_jiuyuanjing01_current.chooseCard(2, 'h', '交给' + get.translation(player) + '两张手牌？').ai = function (card) {
                                    var att = get.attitude(event.lg_jiuyuanjing01_current, player);
                                    var value = get.value(card);
                                    if (att == 0) {
                                        if (value < 0) return 1;
                                        return 0;
                                    } else if (att < 0) {
                                        if (value < 0) return 5;
                                        if (!event.lg_jiuyuanjing01_players || event.lg_jiuyuanjing01_players.length == 0) {
                                            if (value < 5 && card.name != 'shan') return 5 - get.value(card);
                                        }
                                        return 0;
                                    } else if (att > 0) {
                                        if (card.name == 'shan') return 5;
                                        return 0;
                                    }
                                    return 0;
                                };
                                ('step 2');
                                if (result.cards?.length) {
                                    player.gain(result.cards, event.lg_jiuyuanjing01_current, 'give');
                                    event.lg_jiuyuanjing01_players.push(event.lg_jiuyuanjing01_current);
                                }
                                event.lg_jiuyuanjing01_current = event.lg_jiuyuanjing01_current.next;
                                if (event.lg_jiuyuanjing01_current == player) event.goto(3);
                                else event.goto(1);
                                ('step 3');
                                if (!event.lg_jiuyuanjing01_players || event.lg_jiuyuanjing01_players.length == 0) {
                                    trigger.untrigger();
                                    trigger.responded = true;
                                    trigger.result = {
                                        bool: true,
                                        card: {
                                            name: 'shan',
                                        },
                                    };
                                }
                            },
                            ai: {
                                respondShan: true,
                            },
                        },
                        lg_jiuyuanjing02: {
                            trigger: {
                                global: 'recoverEnd',
                            },
                            filter(event, player) {
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd' && (i.suit == 'spade' || i.suit == 'heart' || i.suit == 'diamond' || i.suit == 'club')) cards.push(i);
                                    }
                                });
                                return cards.length;
                            },
                            check(event, player) {
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd') cards.push(i);
                                    }
                                });
                                var suits = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var suit = cards[i].suit;
                                    if (!suits.includes(suit)) suits.push(suit);
                                }
                                if (suits.length > player.countCards('h')) return true;
                                if (suits.length == player.countCards('h')) return false;
                                if (!player.hasSkill('lg_jiuyuanjing02')) return false;
                                if (player.storage.lg_jiuyuanjing02_ming.length == 0) return false;
                                var count = 0;
                                var pre = player.previous;
                                while (pre != player) {
                                    var att = get.attitude(player, pre);
                                    if (pre.storage.lg_jiuyuanjing02_ming.length == 0) break;
                                    if (att > 0) count -= 1;
                                    if (att < 0) count += 1;
                                    var flag = 0;
                                    if (pre.next.lg_jiuyuanjing02_ming.length > 1 && get.attitude(player, pre.next) < 0) {
                                        flag = 1;
                                        count += 1;
                                    }
                                    pre = pre.previous;
                                    if (count > player.countCards('h') - suits.length) {
                                        if (flag == 1) count -= 1;
                                        return true;
                                    }
                                }
                                var count = 0;
                                var nex = player.next;
                                while (nex != player) {
                                    var att = get.attitude(player, nex);
                                    if (nex.storage.lg_jiuyuanjing02_ming.length == 0) break;
                                    if (att > 0) count -= 1;
                                    if (att < 0) count += 1;
                                    var flag = 0;
                                    if (nex.previous.lg_jiuyuanjing02_ming.length > 1 && get.attitude(player, nex.previous) < 0) {
                                        flag = 1;
                                        count += 1;
                                    }
                                    nex = nex.next;
                                    if (count > player.countCards('h') - suits.length) {
                                        if (flag == 1) count -= 1;
                                        return true;
                                    }
                                }
                                return false;
                            },
                            prompt2(event, player) {
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd') cards.push(i);
                                    }
                                });
                                var suits = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var suit = cards[i].suit;
                                    if (!suits.includes(suit)) suits.push(suit);
                                }
                                var str = '将手牌数调整至';
                                str += get.cnNumber(suits.length);
                                str += '?';
                                return str;
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    for (var i of evt.cards) {
                                        if (get.position(i, true) == 'd') cards.push(i);
                                    }
                                });
                                var suits = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var suit = cards[i].suit;
                                    if (!suits.includes(suit)) suits.push(suit);
                                }
                                if (suits.length > player.countCards('h')) player.draw(suits.length - player.countCards('h'));
                                else if (suits.length < player.countCards('h')) player.chooseToDiscard(player.countCards('h') - suits.length, true);
                            },
                        },
                        lg_jiuyuanjing03: {
                            trigger: {
                                global: 'judge',
                            },
                            filter(event, player) {
                                var type = get.type(event.player.judging[0], event.player);
                                return (
                                    player.countCards('hes', function (card) {
                                        if (_status.connectMode && get.position(card) != 'e') return true;
                                        return get.type(card) != type;
                                    }) > 0
                                );
                            },
                            forced: true,
                            preHidden: true,
                            content() {
                                'step 0';
                                var type = get.type(trigger.player.judging[0], trigger.player);
                                player
                                    .chooseCard(get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('lg_jiuyuanjing03'), 'hes', function (card) {
                                        if (get.type(card) == _status.event.type) return false;
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
                                            return result;
                                        } else {
                                            return -result;
                                        }
                                    })
                                    .set('judging', trigger.player.judging[0])
                                    .set('type', type)
                                    .setHiddenSkill(event.name);
                                ('step 1');
                                if (result.cards?.length) {
                                    player.respond(result.cards, 'highlight', 'lg_jiuyuanjing03', 'noOrdering');
                                } else {
                                    player.showHandcards();
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
                        'lg_ nei_beimihu1': {
                            usable: 1,
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_beimihu1.mp3';
                                var list = ['qinshi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_nei_zuozhiweiai: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_zuozhiweiai1');
                                    player.addSkill('lg_hundunmohai');
                                }
                            },
                        },
                        lg_jihunbianchi: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'loseEnd',
                            },
                            forced: true,
                            filter: (e, p) => _status.currentPhase && e.cards.filter((c) => c.suit == 'club').length,
                            content() {
                                'step 0';
                                event.target = _status.currentPhase;
                                if (!event.target.countCards('he')) event.finish();
                                ('step 1');
                                var ne = player.discardPlayerCard(get.prompt2('lg_jihunbianchi', event.target), event.target, 'he');
                                ne.set('tg', event.target);
                                ne.set('ai', function (button) {
                                    var tg = _status.event.tg;
                                    var player = get.player();
                                    if (tg == player) {
                                        if (game.hasPlayer((t) => get.attitude(player, t) < 0 && t.countCards('he'))) return 12 - get.value(button.link);
                                        return 0;
                                    }
                                    return -get.attitude(player, tg);
                                });
                                ('step 2');
                                if (result.bool && player == event.target && game.hasPlayer((t) => player != t && t.countCards('he'))) player.chooseTarget('获得一名其他角色区域内的两张牌？', (c, p, t) => p != t && t.countCards('he')).set('ai', (t) => -get.attitude(get.player(), t));
                                else event.finish();
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'fire');
                                    player.gainPlayerCard(result.targets[0], 'hej', 2, true);
                                    if (player.countCards('hej') < player.previous.hp) event.goto(1);
                                }
                            },
                        },
                        lg_zuozhiweiai_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_hundunmohai: {
                            group: 'lg_hundunmohai1',
                            trigger: {
                                source: 'damageSource',
                            },
                            mark: true,
                            markimage: 'extension/世界之塔/image/lg_hundunmohai.jpg',
                            intro: {
                                content: '「混沌魔骸的加持·混沌叛逆者」<br/>天赋效果:<br/>当你造成伤害时,你可以随机获得一张装备牌,你使用的【杀】与普通锦囊牌无距离限制、没有次数上限;且可以额外指定一个目标,直到你下回合结束.你的回合结束时,若你本回合未造成过伤害,你重铸所有手牌,依次执行两个额外的出牌阶段.',
                            },
                            forced: true,
                            content() {
                                player.gain(game.createCard(get.inpile('equip').randomGet()), 'draw');
                                player.addTempSkill('lg_hundunmohai_dist');
                                player.addTempSkill('lg_hundunmohai_add');
                            },
                            subSkill: {
                                dist: {
                                    forced: true,
                                    charlotte: true,
                                    mod: {
                                        cardUsable(card, player) {
                                            return Infinity;
                                        },
                                        targetInRange: () => true,
                                    },
                                },
                                add: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var info = get.info(event.card, false);
                                        if (info.allowMultiple == false) return false;
                                        if (event.card.name != 'sha' && info.type != 'trick') return false;
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
                                        var num = game.countPlayer(function (current) {
                                            return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                                        });
                                        player
                                            .chooseTarget('令' + get.translation(trigger.card) + '额外指定' + '一个' + '目标？', [1, Math.min(1, 1)], function (card, player, target) {
                                                var trigger = _status.event.getTrigger();
                                                var card = trigger.card;
                                                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(card, player, target) && lib.filter.targetInRange(card, player, target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var card = _status.event.getTrigger().card;
                                                return get.effect(target, card, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (player != game.me && !player.isOnline()) game.delayx();
                                        } else event.goto(3);
                                        ('step 2');
                                        var targets = result.targets.sortBySeat();
                                        trigger.targets.addArray(targets);
                                        event.finish();
                                        ('step 3');
                                        if (trigger.card.name == 'sha') {
                                        }
                                    },
                                },
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                                order: 7,
                            },
                        },
                        lg_hundunmohai1: {
                            trigger: {
                                player: 'phaseEnd',
                            },
                            silent: true,
                            forced: true,
                            filter(event, player) {
                                return !player.hasSkill('lg_hundunmohai_dist');
                            },
                            content() {
                                'step 0';
                                var card = player.getCards('h');
                                var n = player.countCards('h');
                                player.lose(card, ui.discardPile, 'visible');
                                player.$throw(card, 1000);
                                game.log(player, '将', card, '置入弃牌堆');
                                player.draw(n);
                                ('step 1');
                                player.getStat().card = {};
                                player.getStat().skill = {};
                                ('step 2');
                                player.phaseUse();
                                player.phaseUse();
                            },
                            popup: false,
                        },
                        lg_nei_zuozhiweiai1: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_hundunzhichu1.mp3';
                                var list = ['qingfu', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_qingfu: {
                            trigger: {
                                global: 'damageBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!lib.filter.targetEnabled({ name: 'lg_qingfu' }, player, event.player)) return false;
                                return player.hasCard('lg_qingfu', 'hes');
                            },
                            content() {
                                player.chooseToUse(
                                    get.prompt('lg_qingfu', trigger.player).replace(/发动/, '使用'),
                                    function (card, player) {
                                        if (card.name != 'lg_qingfu') return false;
                                        return lib.filter.cardEnabled(card, player, 'forceEnable');
                                    },
                                    trigger.player,
                                    -1
                                ).targetRequired = true;
                            },
                        },
                        lg_beijingwu: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'damageSource',
                            },
                            f(p, player) {
                                var lx = p.getEquip(1);
                                return lx && lx.storage.lg_beijingwu == player;
                            },
                            filter(event, player) {
                                if (!event.source || !event.source.isIn()) return false;
                                if (event.source == player || event.player != player) return false;
                                if (!player.node.avatar.classList.contains('lg_beijingwu')) return true;
                                if (lib.skill.lg_beijingwu.f(event.source, player)) return false;
                                return game.hasPlayer(function (current) {
                                    return lib.skill.lg_beijingwu.f(current, player);
                                });
                            },
                            group: 'lg_beijingwu_a',
                            subSkill: {
                                a: {
                                    _priority: 15,
                                    silent: true,
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        if (player.node.avatar.classList.contains('lg_beijingwu')) {
                                            return !game.hasPlayer(function (current) {
                                                return lib.skill.lg_beijingwu.f(current, player);
                                            });
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        player.phase('nodelay');
                                        trigger.player.phase('nodelay');
                                        player.node.avatar.show();
                                        player.node.avatar.classList.remove('lg_beijingwu');
                                        player.update();
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            content() {
                                'step 0';
                                var num = player.getAttackRange();
                                player.draw('bottom', num, trigger.source);
                                ('step 1');
                                if (!player.node.avatar.classList.contains('lg_beijingwu')) {
                                    var n = player.name;
                                    lib.card[n] = {
                                        type: 'equip',
                                        subtype: 'equip1',
                                        fullimage: true,
                                        image: 'character:' + n,
                                        enable: true,
                                        selectTarget: -1,
                                        filterTarget(card, player, target) {
                                            return target == player;
                                        },
                                        modTarget: true,
                                        allowMultiple: false,
                                        content() {
                                            target.equip(cards[0]);
                                        },
                                        toself: true,
                                    };
                                    lib.translate[n + '_info'] = '疯狂的背景舞';
                                    player.node.avatar.hide();
                                    player.node.avatar.classList.add('lg_beijingwu');
                                    var card = game.createCard(n);
                                    card.storage.lg_beijingwu = player;
                                    trigger.source.useCard(card, trigger.source);
                                } else {
                                    var to = game.findPlayer(function (current) {
                                        return lib.skill.lg_beijingwu.f(current, player);
                                    });
                                    var lx = to.getEquip(1);
                                    trigger.source.useCard(lx, trigger.source);
                                }
                                ('step 2');
                                game.countPlayer(function (current) {
                                    if (current == trigger.source) return false;
                                    var lx2 = current.getEquip(5);
                                    if (lx2 && lib.translate[lx2.name + '_info'] == '疯狂的背景舞') current.lose(lx2, 'discardPile');
                                });
                                ('step 3');
                                player.node.avatar.hide();
                                player.node.avatar.classList.add('lg_beijingwu');
                            },
                        },
                        lg_zhu_erzitianlinai: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.isZhu) {
                                    player.addSkill('lg_zhu_erzitianlinai1');
                                    player.addSkill('lg_zhu_zhenshihuanxiang');
                                }
                            },
                        },
                        lg_zhu_erzitianlinai1: {
                            usable: 1,
                            trigger: {
                                player: 'equipBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_erzitianlinai1.mp3';
                                var list = ['shufu', 'fushijian', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_liandong_erzitianlinai: {
                            audio: 'ext:世界之塔/Centuries:1',
                            usable: 1,
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                player.init('lg_erzitianlinai');
                            },
                        },
                        lg_wangquemingzi: {
                            audio: 'ext:世界之塔/Archive:3',
                            init(player) {
                                player.storage.lg_wangquemingzi = ['a', 'b', 'c'];
                            },
                            mark: true,
                            marktext: '✧',
                            intro: {
                                content(storage, player, skill) {
                                    var str = [];
                                    var getStr = function (num1) {
                                        switch (num1) {
                                            case 'a':
                                                return '不大于';
                                            case 'b':
                                                return '不等于';
                                            case 'c':
                                                return '不小于';
                                        }
                                        return num1;
                                    };
                                    var temp = player.storage.lg_wangquemingzi;
                                    for (var i = 0; i < temp.length; i++) {
                                        str.push(getStr(temp[i]));
                                    }
                                    return '忘却你的名字';
                                },
                            },
                            mod: {
                                globalTo(from, to, current) {
                                    var num1 = to.storage.lg_wangquemingzi[1];
                                    if (num1 == 'a' && to.hp >= from.hp) return current + 1;
                                    if (num1 == 'b' && to.hp != from.hp) return current + 1;
                                    if (num1 == 'c' && to.hp <= from.hp) return current + 1;
                                },
                                globalFrom(from, to, current) {
                                    var num1 = from.storage.lg_wangquemingzi[1];
                                    if (num1 == 'a' && from.hp >= to.hp) return current - 1;
                                    if (num1 == 'b' && from.hp != to.hp) return current - 1;
                                    if (num1 == 'c' && from.hp <= to.hp) return current - 1;
                                },
                            },
                            trigger: {
                                source: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (!event.notLink()) return false;
                                if (!event.card) return false;
                                if (event.num <= 0) return false;
                                var num1 = player.storage.lg_wangquemingzi[2];
                                if (num1 == 'a' && player.hp >= event.player.hp) return true;
                                if (num1 == 'b' && player.hp != event.player.hp) return true;
                                if (num1 == 'c' && player.hp <= event.player.hp) return true;
                                return false;
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                            ai: {
                                damageBonus: true,
                            },
                            group: ['lg_wangquemingzi_no'],
                            subSkill: {
                                no: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.getEquip(1)) return false;
                                        if (!event.card || get.type(event.card, 'trick') != 'trick') return false;
                                        if (event.num <= 0) return false;
                                        var num1 = player.storage.lg_wangquemingzi[0];
                                        if (num1 == 'a' && player.hp >= event.player.hp) return true;
                                        if (num1 == 'b' && player.hp != event.player.hp) return true;
                                        if (num1 == 'c' && player.hp <= event.player.hp) return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.num--;
                                    },
                                    ai: {
                                        notrick: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                var num1 = target.storage.lg_wangquemingzi[0];
                                                if (num1 == 'a' && target.hp < player.hp) return;
                                                if (num1 == 'b' && target.hp == player.hp) return;
                                                if (num1 == 'c' && target.hp > player.hp) return;
                                                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        lg_erzitianlinai_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                        lg_nei_bawanxi: {
                            ai: {
                                neg: true,
                            },
                            init(player) {
                                if (player.identity == 'nei') {
                                    player.addSkill('lg_nei_bawanxi1');
                                    player.addSkill('lg_nei_shengbei');
                                }
                            },
                        },
                        lg_nei_bawanxi1: {
                            trigger: {
                                source: 'dieBegin',
                            },
                            forced: true,
                            content() {
                                ui.backgroundMusic.src = 'extension/世界之塔/Tower/lg_shijiezhita_bawanxi1.mp3';
                                var list = ['qinshi', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng', 'zhishui', 'zhiliao', 'lingfeng'];
                                player.gain(game.createCard('lg_' + list.randomGet()), 'draw');
                            },
                        },
                        lg_maerjin: {
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                global: 'phaseUseEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.getHistory('useCard', function (evt) {
                                    return (
                                        evt.isPhaseUsing() &&
                                        ['club'].includes(evt.card.suit) &&
                                        player.hasUseTarget({
                                            name: evt.card.name,
                                            nature: evt.card.nature,
                                        })
                                    );
                                }).length;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                trigger.player.getHistory('useCard', function (evt) {
                                    if (!evt.isPhaseUsing() || 'club' != evt.card.suit) return;
                                    else list.add(evt.card.name);
                                });
                                for (var i = 0; i < list.length; i++) {
                                    list[i] = [get.type(list[i]), '', list[i]];
                                }
                                player
                                    .chooseButton([get.prompt('lg_maerjin'), [list, 'vcard']])
                                    .set('filterButton', function (button) {
                                        return player.hasUseTarget({ name: button.link[2], nature: button.link[3] });
                                    })
                                    .set('ai', function (button) {
                                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    player.chooseUseTarget(true, { name: result.links[0][2], nature: result.links[0][3] });
                                }
                                ('step 2');
                                var bool = game.hasPlayer2(function (current) {
                                    return current.getHistory('damage', function (evt) {
                                        return evt.getParent(4) == event;
                                    }).length;
                                });
                                if (bool) player.turnOver();
                                if (!bool) player.randomDiscard('h');
                            },
                        },
                        lg_tonghuankuzou: {
                            mark: true,
                            limited: true,
                            audio: 'ext:世界之塔/Archive:3',
                            trigger: {
                                player: 'useCard',
                            },
                            _priority: -10,
                            filter(event, player) {
                                return !player.storage.lg_tonghuankuzou && event.targets.length > 1 && player.countCards('hej') == 0 && event.card.suit != 'club';
                            },
                            init(player) {
                                player.storage.lg_tonghuankuzou = false;
                            },
                            check(event, player) {
                                var name = event.card.name;
                                if (name == 'tiesuo') return false;
                                for (var i = 0; i < event.targets.length; i++) {
                                    if (get.effect(event.targets[i], event.card, player, player) >= 1) {
                                        if (get.tag(event.card, 'damage') && event.targets.length > event.targets[i].hp) return true;
                                        if (get.attitude(player, event.targets[i]) > 3) {
                                            if (event.targets[i].hp == 1 && get.tag(event.card, 'recover') && event.targets.length >= event.targets[i].maxHp - event.targets[i].hp) return true;
                                        }
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('lg_tonghuankuzou');
                                player.storage.lg_tonghuankuzou = true;
                                ('step 1');
                                event.nm = trigger.targets.length;
                                player.chooseTarget('令你使用的' + get.translation(trigger.card) + '对其中一个目标结算' + event.nm + '次;或令其失去所有技能', true, function (card, player, target) {
                                    var trigger = _status.event.getTrigger();
                                    return trigger.targets.includes(target);
                                }).ai = function (target) {
                                    var trigger = _status.event.getTrigger();
                                    var eff = get.effect(target, trigger.card, player, player);
                                    return eff;
                                };
                                ('step 2');
                                if (result.targets?.length) {
                                    event.tar = result.targets[0];
                                    player.line(event.tar, 'red');
                                    event.tar
                                        .chooseControl()
                                        .set('choiceList', ['令' + get.translation(trigger.card) + '对你结算' + event.nm + '次', '失去所有技能'])
                                        .set('ai', function () {
                                            var eff = get.effect(event.tar, trigger.card, player, event.tar);
                                            if (eff >= 0) return 0;
                                            if (trigger.card.name == 'nanmian' || (trigger.card.name == 'wanjian' && player.getEquip('tengjia'))) return 0;
                                            if (trigger.card.name == 'sha' || trigger.card.name == 'wanjian') {
                                                if (
                                                    event.tar.countCards('h', {
                                                        name: 'shan',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'tao',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'jiu',
                                                    }) +
                                                    event.tar.hp >
                                                    event.nm
                                                )
                                                    return 0;
                                                if (
                                                    event.tar.countCards('h', {
                                                        name: 'shan',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'tao',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'jiu',
                                                    }) +
                                                    event.tar.hp >=
                                                    event.nm - 1 &&
                                                    player.getEquip('bagua')
                                                )
                                                    return 0;
                                                if (event.tar.hasSkillTag('respondShan') && event.target.countCards('h') + event.tar.hp > event.num) return 0;
                                                return 1;
                                            }
                                            if (trigger.card.name == 'juedou' || trigger.card.name == 'nanman') {
                                                if (
                                                    event.tar.countCards('h', {
                                                        name: 'sha',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'tao',
                                                    }) +
                                                    event.tar.countCards('h', {
                                                        name: 'jiu',
                                                    }) +
                                                    event.tar.hp >
                                                    event.nm
                                                )
                                                    return 0;
                                                if (event.tar.hasSkillTag('respondSha') && event.target.countCards('h') + event.tar.hp > event.num) return 0;
                                                return 1;
                                            }
                                            return 0;
                                        });
                                }
                                ('step 3');
                                if (result.index == 0) {
                                    game.log(event.tar, '选择被' + get.translation(trigger.card) + '结算' + event.nm + '次');
                                    trigger.targets = [];
                                    trigger.targets.push(event.tar);
                                    for (var i = 0; i < event.nm - 1; i++) {
                                        player.useCard(trigger.card, event.tar, false);
                                    }
                                } else if (result.index == 1) {
                                    game.log(event.tar, '选择失去了所有技能');
                                    event.tar.clearSkills();
                                } else event.finish();
                            },
                            ai: {
                                expose: 0.3,
                                effect: {
                                    player(card, player, target, current) {
                                        if (card && lib.card[card.name]) {
                                            //QQQ
                                            var check = game.hasPlayer(function (current) {
                                                return player.canUse(card, current) && lib.filter.targetEnabled2(card, player, current) && !current.getEquip('tengjia');
                                            });
                                            if (get.tag(card, 'multineg') && check) return [0, 3];
                                        }
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        lg_tonghuankuzou1: {
                            subSkill: {
                                dis: {
                                    mark: true,
                                    marktext2: '✧',
                                    marktext: '✧',
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (event.type != 'respond') return false;
                                        return player.countCards('hej') && event.getParent(3).name != 'lg_tonghuankuzou1_dis';
                                    },
                                    init(player) {
                                        player.markSkill('lg_tonghuankuzou1_dis');
                                    },
                                    content() {
                                        player.loseHp();
                                        player.loseHp();
                                        player.loseHp();
                                    },
                                    intro: {
                                        content: '痛幻哭奏',
                                    },
                                },
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                if (event.source && event.source != player && !event.source.isDead()) {
                                    return !event.source.hasSkill('lg_tonghuankuzou1_dis') && event.source.countCards('hej', { suit: 'club' }) == player.getDamagedHp();
                                }
                                return false;
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                trigger.cancel();
                                trigger.source.loseHp();
                                trigger.source.addSkill('lg_tonghuankuzou1_dis');
                            },
                        },
                        lg_bawanxi_zhenwang: {
                            audio: 'ext:世界之塔/Centuries:1',
                            trigger: {
                                player: 'dieAfter',
                            },
                            forceDie: true,
                            forced: true,
                            content() { },
                        },
                    },
                    character: {
                        lg_yitengxihua: ['female', '格兰索', 5, ['lg_zhu_yitengxihua', 'lg_jinguangyelu', 'lg_huacaofanrong', 'lg_yitengxihua_zhenwang'], ['zhu', 'des:本作女主,万物之始,有些轻微中二,平时喜欢思考一些不太实际的问题,说话也很喜欢讲一些大道理.虽然给人会有种微妙的距离感,不过作为人生咨询的对象,还挺受大家欢迎的.']],
                        lg_yizhilaiyuan: ['female', '格兰索', 5, ['lg_nei_yizhilaiyuan1', 'lg_quqiaoboli', 'lg_mingjiezhizhong', 'lg_yizhilaiyuan_zhenwang'], ['des:本作女主的旧友,个子娇小但拥有怪力,喜欢充满刺激的体验,注入坐车兜风、热闹的聚会等等,但是缺少好斗心,实际上是个十分单纯天真的孩子.']],
                        lg_jiangqixingnai: ['female', '格兰索', 5, ['lg_zhu_jiangqixingnai', 'lg_meishiyouhuo', 'lg_mimiyaoqing', 'lg_xinji', 'lg_jiangqixingnai_zhenwang'], ['des:喜欢各种有着神秘感的食物,热衷阴谋论,认为很多事情都有其模糊存在,不过大部分时候都是自己脑补过度.有着没事喜欢找点东西咬着的习惯,据说能以此辨别许多东西的真假,着实离谱.']],
                        lg_pingsonggui: ['female', '格兰索', '5/8', ['lg_zhu_pingsonggui', 'lg_wuyongfanji', 'lg_wuyongdikang', 'lg_pingsonggui_zhenwang'], ['des:平松泉的妹妹,豪爽帅气,但打架之外的事情都很懒.不喜欢走路,一有机会就想偷懒,日常大多拿来睡觉.']],
                        lg_pingsongquan: ['female', '格兰索', 5, ['lg_zhu_pingsongquan', 'lg_chunzhenzhufu', 'lg_pingsongquan_zhenwang'], ['des:平松桂的姐姐,开朗活泼,容易自大,被妹妹称作是小孩子脾气.平时语速有点快,但朗诵时会拉长腔调.']],
                        lg_huoqinge: ['female', '幻想乡', 5, ['lg_zhu_huoqinge', 'lg_zouhuorumo', 'lg_liandong_huoqinge', 'lg_gufenyegui', 'lg_huoqinge_zhenwang'], ['des:霍青娥,系列作品<东方Project>中的角色,邪仙,拥有穿越墙壁程度的能力,于<东方神灵庙>中作为四面BOSS首次登场.是仙人中的邪仙,因为所思所想比较邪恶所以被堵死了前往天人道路的存在.从中国来到日本,劝诱丰聪耳神子加入道教,但她没什么伙伴意识.<br/><br/> 以邪恶思想行动的仙人,原本是一个憧憬着道士的人类.青娥曾经是一时兴起而成仙,目的只是为了显摆仙力,也以骚扰自己感兴趣的人类为乐.她来到日本,也正是为了劝诱丰聪耳神子信仰道教.她是极为罕见的千岁仙人之一,如此长寿的仙人多半会晋升为天人或是神灵等更高级的种族,鲜少有人会刻意继续当仙人.她因为个性邪恶而无法成为仙人,但本人并不认为是件坏事 .<br/><br/> 个性非常恶劣.在她的观念里,只要是对自己有益的事情,其他人的死活都事不关己.虽然她与丰聪耳神子等人一同出现在幻想乡,但她没什么伙伴意识.只要她看上任何人或妖怪,就会马上黏过去,或许是因为幻想乡有不少充满魅力的人物,因此每天都能见到她无所事事地四处游荡.她会经常接近人类,感到无趣后又随即离开.虽然时常会盗窃,但对物品也并不执着 .']],
                        lg_jinwanxiashu: ['female', '伊提拉', 8, ['lg_zhong_xindongshunjian', 'lg_linweiyiji', 'lg_linweiyiji4', 'lg_jinwan_xindongtetiao', 'lg_jinwanxiashu_zhenwang'], ['des:本作四女主之一,认真勤奋,好胜心强的少女.不想落后给任何人,尤其是自己的挚友,总是暗自努力,希望能做个好榜样.']],
                        lg_mizhilanwan: ['female', '迦勒底', 8, ['lg_nei_mizhilanwan', 'lg_lanwanzhiguang', 'lg_liandong_mizhilanwan', 'lg_liandong2_mizhilanwan', 'lg_lanwan', 'lg_mizhilanwan_zhenwang'], ['des:谜之兰丸X,则是从银河的彼方,有许多森兰丸生活着的兰丸星飞来的,是拥有所有森兰丸中只有最优秀的森兰丸才能被允许使用的称号『兰丸X』的森兰丸.<br/><br/>森兰丸在本能寺与信长一同战死.<br/><br/> 被这么认为的兰丸实际上却抱着那位魔王的首级一个人逃出生天.为了遵守主君的遗命,至死都坚持保护的魔王首级就这么升华成了兰丸的宝具.作为宝具升华的魔王首级拥有让历史发生无数分歧的可能性,根据使用方法,甚至能发挥切分、改变历史流向的力量.<br/><br/>  在某次圣杯战争中被夺去这个宝具的森兰丸挤出最后的力气,向着闪耀着星星的夜空大喊.请将这首级,请将兰丸的愿望守护下去.这是快要消失般微弱而虚缈的,非常,非常细小的声音,但不知为何,最终居然传达到了.传到那据说位于银河彼方的,生活着众多兰丸的兰丸之星.<br/><br/>  承载着所有兰丸的愿望,此刻,一道光划过星辰大海.那正是,希望之光.']],
                        lg_yuanyizhezhi: ['female', '异世界', 5, ['lg_zhu_yuanyizhezhi', 'lg_rilun', 'lg_tianyi1', 'lg_tianyi', 'lg_guangjian', 'lg_guangjian3', 'lg_paoguan', 'lg_yuanyizhezhi_zhenwang', 'lg_liandong_yuanyizhezhi'], ['des:鸢一折纸,日本轻小说<约会大作战>及其衍生作品中的角色.她一头白发,是像人偶一样的无性格少女.身份是陆上自卫队的对精灵部队AST的队员,阶级是上士.<br/><br/> 五年前因精灵的现身而令双亲命丧,所以极度的憎恨着精灵.为了不会再让别人遇上和自己一样的惨剧并为父母报仇,以消灭精灵为目标而奋斗着.后期精灵化,为追寻五年前杀害双亲的幻影,借用十二之弹回到过去,发现击杀父母之死的真相后精神崩溃,导致灵结晶反转.对整个天宫市展开无差别的全方位攻击.之后被士道拯救并改变过去,对其称爱情现在才开始.']],
                        lg_huihuicao: ['female', '奇迹大陆', 5, ['lg_wuhougesheng', 'lg_nei_huihuicao', 'lg_xiangguangerxing', 'lg_xiangguangerxing1', 'lg_xiangguangerxing2', 'lg_huihuicao_zhenwang'], ['des:莉莉斯是由叠纸游戏所制作的暖暖系列游戏其第四作<闪耀暖暖>的登场角色.<br/><br/> 妮妮尔王国的现任女王,星羽天鹅冠军.据说来自于星羽镇一个充满爱的普通议员家庭,在父母与哥哥的温柔守护下成长.喜欢毛绒玩具与松鼠.同时也是妮妮尔历史以来出镜最多的女王.妮妮尔王国后为纪念莉莉斯在未来国名更改为<奇迹暖暖>莉莉斯王国,具体原因暂时不明.<br/><br/> 本来是由夜骸为欲望之神所创造出的<人偶>想制作欲望之神在人世间的肉体躯壳,但夜骸因人偶美好的品质对自己的这件作品感到不满,将人偶毁容抛弃在佩佩舞家门口.被收养佩佩舞家后成为了佩佩舞家的养女,但也是家中的女仆.<br/><br/> 因为生来脸上就有疤痕,在审美极度苛刻的星羽镇度过了因为被大多人排挤而十分孤独和凄惨的童年.唯有星羽镇的老乐师将灰灰草看做一个普通的孩子.因为脸上的疤痕,灰灰草就算拥有天使一般的歌声,在对颜值审美极度苛刻的星羽镇也显得无用.<br/><br/> 在一次星羽天鹅的比赛,因为被佩佩舞抢走了比赛的衣服即第二章主线套装,流星之羽而暴怒,烧掉了星羽天鹅的舞台.导致佩佩舞全身烧伤,而灰灰草<葬身火海>实际上遇到了夜骸,与恶魔契约后脱胎换骨成为莉莉斯.老乐师为了救灰灰草而受伤,之后再也没出过医院.']],
                        lg_shenziqiange: ['female', '伊提拉', 5, ['lg_qingyingshenzi', 'lg_qiangepeifang', 'lg_zhong_shenziqiange', 'lg_shenzi_xindongtetiao', 'lg_shenziqiange_zhenwang'], ['des:凛然正直、内心温和的女孩,担心自己的价值而过度在意他人的看法.渴望自己能成为他人的依靠,实际上却常常面临依赖他人的困境.']],
                        lg_mogen: ['female', '迦勒底', '5/8', ['lg_huzhijiahu', 'lg_zhu_mogen', 'lg_wufadida1', 'lg_wufadida', 'lg_mogen_zhenwang'], ['des:支配异闻带·妖精国不列颠的女王.在异闻带不列颠建立了绝对王政,用长达两千年的压迫折磨妖精们.身为最高位的妖精,是以魔术的形式学会了止境之枪·伦戈米尼亚德的神域天才魔术师.<br/><br/> 只相信自己力量的冷酷女王.并非不相信他人,只是不指望他人.将『支配不列颠岛的秩序』放在第一.<br/><br/>讨厌人类、讨厌妖精、讨厌弱小、讨厌丑陋、讨厌平等、讨厌和平,从民众角度看来,她的性格正可谓『恶的化身』.<br/><br/>  但说『讨厌』,却不会『不需要』,只是『无法相容』罢了.对摩根来说,正义就是『支配的状态』,恶就是『扰乱支配之人所处的状态』.所以,摩根个人的『好恶』,与身为支配者的『善恶』没有关系. 哪怕是自己讨厌的东西,只要是支配所必须的,就会公正地认可并允许其存在.这种极端而绝对的基准,正犹如没有心的机械.<br/><br/> 其实,摩根也是有心的.只是再也不会强烈地感受到喜悲、恨怒,与爱恋罢了.由于在漫长的岁月中一直守着不列颠,导致摩根的心彻底冰冻了起来.唯一掂量内心的热情就是过去的自己不断渴望的愿望.只有『支配不列颠』这个目的,现在仍在驱动着她.<br/><br/>尽管通过漫长的旅行,她已经充分理解了, 这并不是年幼时期充满人性的梦想,而是自己本身就是为此而生的事实.']],
                        lg_yuntan: ['female', '奇迹大陆', 5, ['lg_nei_yuntan', 'lg_mimengyuye', 'lg_taruhongchen', 'lg_shiyuezhixin', 'lg_shiyuezhixin1', 'lg_shiyuezhixin2', 'lg_yuntan_zhenwang'], ['des:一株开在山间的小云昙花,只希望有人能看到自己开花的瞬间,每一年的期待都落空,从来没有人看到自己的美.直到,遇到小虎的那一天.她第一次有了朋友,有人帮她挡住风雨,约定好明年来看她开花.可是过了很多年,小虎都没有来……终于,小云昙等到了小虎,可小虎却走开了,云昙花也化成了人形.<br/><br/>  <我不会再独自等待了,新的一年,我会自己去见你.>']],
                        lg_lunaqielude: ['female', '幻想乡', 5, ['lg_yezhiyaojing', 'lg_zhu_lunaqielude', 'lg_jijingzhiyue', 'lg_jijingfengbao', 'lg_liandong_jijingfengbao', 'lg_lunaqielude_zhenwang'], ['des:露娜切露德,系列作品<东方Project>中的角色,初登场于漫画作品<东方三月精>,是<东方三月精>系列的主角之一.<br/><br/> 露娜切露德能将身边的声音消去.这种能力并不会造成直接伤害,但常和其她妖精,特别是桑尼米尔克、斯塔萨菲雅一起行动,来进行恶作剧.身高很矮,有着蜻蜓般的翅膀.<br/><br/> 红、白、蓝三妖精之中,白色的是露娜切露德.在三妖精中属迟钝,有时还会因为过于依赖消音能力,而在逃跑时落单.']],
                        lg_heita: ['female', '空间站', 5, ['lg_zhu_heita', 'lg_renoucaozong', 'lg_chuizimaimai', 'lg_mofafujia', 'lg_heita_zhenwang'], ['zhu', 'des:黑塔,米哈游出品的游戏<崩坏:星穹铁道>及其衍生作品中的角色,<天才俱乐部>#83会员,空间站「黑塔」的真正主人.智慧过人却毫无同理心的大科学家.<br/><br/> 天才俱乐部的黑塔不满足于寻常世界的万物法则,她将目光投向了银河中未解的存在,并期待那些遥远的神秘能够满足自己的好奇心.为此,黑塔主导建立了博物馆式星际舰船,并将它发射至行星轨道,开始了<将一切怪异封印在星空之中>的研究工作.远近闻名的空间站<黑塔>便因此诞生.<br/><br/> 身为湛蓝星智商最高的人类,只做自己感兴趣的事,一旦失去兴趣就立刻走人,空间站就是最好的例子.平时以远程操纵的人偶形态登场:<br/><br/> <跟我小时候比,勉强七分相似吧.>黑塔本人这样说道.']],
                        lg_aertuoliya: ['female', '迦勒底', 8, ['lg_heiyezhixing', 'lg_nei_aertuoliya', 'lg_shiyuezhijian', 'lg_liandong_aertuoliya', 'lg_aertuoliya_zhenwang'], ['des:被圣杯的诅咒侵蚀,骑士王冷酷无情的另一面.亦或亚瑟王所追求的<理想之王>,正是这样的一种存在吧.阿尔托莉雅平时会克制自己的力量,但处于这种状态下的她,不会对使用强大魔力有丝毫的踌躇.<br/><br/> 由于铠甲被染成漆黑,并且重量也随之增加,力量比平时更为强大.相反,敏捷性似乎有些下降.没有无谓的言行,性格冷酷,与阿尔托莉雅判若两人,然而只要细心与她接触,想必就能发现其本质还是相同的.<br/><br/> 阿尔托莉雅生前虽从未坠入邪恶之路,但她也有过迷茫与纠葛,有过对自身的愤怒,有过对周围的哀叹. 正是这些要素因诅咒而显现为现在的模样,逆转了她的<方针>.她的目的与理想本身并没有改变.正常的阿尔托莉雅为了理想会贯彻清廉,然而这位则觉得为了理想可以实施高压政治.<br/><br/> 由于魔力炉心远超常规,因此该从者的食量非常大. 甚至标志性的饮食嗜好也发生了变化,对细致、精巧、有韵味的料理不屑一顾,反而大口大口地扫荡大量垃圾食品.饮食习惯极差,但本人对此极为满足, 这或许也算是一种幸福吧.']],
                        lg_yushuinai: ['female', '伊提拉', 5, ['lg_zhong_yushuinai', 'lg_pengranxindong', 'lg_zhengshixuzhao', 'lg_yushuinai_zhenwang'], ['des:活泼可爱的她,是个坚强又有着团结精神的少女,与此同时,她还是揭开神秘过去的某个关键祭品.']],
                        lg_nuannuan: ['female', '奇迹大陆', '5/8', ['lg_zhu_nuannuan', 'lg_xuehuadingge', 'lg_ruyueerzhi', 'lg_chuxueqiyuan', 'lg_nuannuan_zhenwang', 'lg_chuxueqiyuan0'], ['zhu', 'des:文明的湮灭像烟花那样绚烂. 从诞生起,就在走向毁灭. 用设计与搭配书写的独特历史都已成为空白. 消失在浩瀚星河中的文明,其名为,奇迹大陆. <br/><br/> 只有人类的记忆将被保存在方舟上. 古往今来的设计师灵感, 成为夜空中永恒不变的星轨. 改变奇迹大陆命运的秘密, 就蕴藏在交错的星轨之间. 或许,还有最后的希望.异世界的少女暖暖,借助方舟的力量,回到了历史的原点.<br/><br/>  680年前,奇迹大陆的文明最闪耀的时刻. 那么,在毁灭来临之前, 你愿意和她一起去改变未来吗？']],
                        lg_yuzhoulin: ['female', '迦勒底', 8, ['lg_emoshatang', 'lg_nei_yuzhoulin', 'lg_yuzhouwangguan', 'lg_yuzhoulin_zhenwang', 'lg_yuzhouwangguan1', 'lg_yuzhouwangguan2'], ['des:为了在苍辉银河获得新的体验,转生成从者的神灵从者.<br/><br/> 太空伊什塔尔是从者宇宙中最新型的『实际存在的女神』.不是『地球人看到(观测)的金星上司掌金星的女神』,而是『从金星古代文明诞生的金星女神』,所以以地球人来看,也可以说是外星人.<br/><br/>  原始宇宙指的是比苍辉银河(以太宇宙,现在的宇宙世界)更古老的『人类作为人类存在的宇宙』,而在这旧宇宙中更为古老的时候,哺乳类诞生于地球之前,在宇宙史前古代文明中被信仰的女神就是阿斯塔蒂.当时,人们没有信仰的概念,女神这个词代表了『生命可以存活的宙域』.<br/><br/> 尽管无法确定究竟是这个概念获得了形体,还是这种生活方式转化成了概念,但原始宇宙中的伊什塔尔·阿斯塔蒂成了『人形的银河』.原本非人类可以掌控的存在,也无法成为从者.碰巧发现了女神灵核的时臣教授将她作为『善之半身』抚养长大,并在自己去世后将女儿的将来托付给了值得信任的助手.<br/><br/> 就算自己能教会她教科书中所述的善,(因为S伊什塔尔是个聪明的孩子)其伪善性也会立刻被她看穿,自己在她身边时暂且不论,她或许迟早会厌倦善良转为原本的邪恶吧.可当她看到,本质好人表里如一并会一直线找到真相,但代价是给周围带来破坏与混乱的简,领悟到善恶并非表里一体的话,至少就不会堕落为单纯的恶吧.<br/><br/> 正如教授的预料,S伊什塔尔没有堕落为恶,而是锻炼出了优秀的吐槽功力,健全地成长为了虽然多少有些易怒、精打细算,但愿意锄强扶弱的猛犬赏金猎人.<br/><br/> 另外,简则惊人得丝毫未变.']],
                        lg_yingzuowuye: ['female', '蕾兰', 8, ['lg_fan_yingzuowuye', 'lg_lieguangmeiying', 'lg_yingzuowuye_zhenwang'], ['des:情绪总是过于强烈且难以自制,会因为太喜欢某样东西或人而将其爱不释手,以求能和自己永远在一起,也因此成了特殊者.虽然看上去是不喜欢回家的不良少女,但其实不能长久下去,似乎某种意义上在呼唤着什么,其的真实身份不明.']],
                        lg_shiliuyexiaoye: ['female', '幻想乡', 5, ['lg_zhu_shiliuyexiaoye', 'lg_wanmeinvpu', 'lg_wanmeinvpu1', 'lg_zhongbiaocanhai', 'lg_yonghengwenrou', 'lg_yonghengwenrou1', 'lg_shiliuyexiaoye_zhenwang'], ['des:十六夜咲夜,系列作品<东方Project>中的角色,人类,拥有操纵时间程度的能力,于<东方红魔乡>中作为五面BOSS首次登场,在后续多部作品中作为自机登场.侍奉吸血鬼蕾米莉亚·斯卡蕾特的女仆,管理红魔馆全部事务的女仆长,无论是作为女仆还是作为保镖都十分优秀.<br/><br/> 她是住在红魔馆里工作的女仆.不仅是住在恶魔栖息的洋馆·红魔馆里唯一的人类,同时也是女仆众之长.她在平常根本不会有人类靠近的地方工作,是充满神秘感的少女.她开始在红魔馆工作之前,没有人见过她.而且她对造访红魔馆的人类村民也十分冷淡,经常站在妖怪这一方.因此让人怀疑她不是幻想乡的人类,而是来自外面世界,甚至其他世界的人.<br/><br/> 没有名誉和支配的欲望等,抱着<只要能衣食无忧就好>的想法在红魔馆里当起了女仆作为红魔馆女仆长兼清扫工作着,常常使用时间静止的能力来工作.正如<完美而潇洒>的别名所说,咲夜作为女仆的工作是完美无缺的,基本上,作为从者她无可挑剔.<br/><br/>  红魔馆的女仆基于量重于质的理念,雇用了大量妖精勉强维持着.当中唯一身为人类的她担任女仆长,负责指挥妖精女仆.妖精女仆们几乎派不上用场,她们顶多只会洗自己的衣服,或是准备自己的食物,有没有这群妖精女仆其实无所谓.事实上,所有的工作都是女仆长一人包办.女仆长的工作是十分沉重的.她不仅要打扫迷宫般的红魔馆,照顾任性的大小姐,管理没用的妖精女仆,到村里买东西,还要调理豪华得莫名其妙的大餐,根本没有时间休息.这么多工作量要一人完成,不停止时间实在是不可能的.<br/><br/> 从心底发誓要对主人忠心,完全看不出她从工作这个词中感觉到有任何不满等阴暗的情绪,潇洒的样子让人看了很舒服 .只是,有时也会对主人提意见,或者也有我行我素、令大小姐困扰的时候.她没有真正的弱点,但怕吃热食.她非常擅长做菜.喜欢表演魔术,虽然只是通过停止时间的能力表演,但她对没有诀窍的戏法很得意.<br/><br/> <红魔馆的所有家务>中,包括了去村里购买必需品,顺从大小姐的任性要求,要是发生些什么还得跑去调查洋馆周边.也许就是以这些工作中的某件事为契机,原因虽然不明,但咲夜也开始投身于异变解决,以此为名义的妖怪退治.平时仅仅用在处理家事上的能力这下子也可以尽情发挥了.不过,她的行动原则基本上是<大小姐最优先>,这一点与因为是妖怪所以就要退治为主要想法的灵梦不同,因此她也不是一直会参与异变的解决 .']],
                        lg_baoquanhanzhang: ['female', '伊提拉', 5, ['lg_nvpugantan', 'lg_zhong_baoquanhanzhang', 'lg_liandong_nvpugantan', 'lg_baoquanhanzhang_zhenwang'], ['des:大概和她在一起,才会怀疑谁是真正的领头.她总是把身边人当作下仆随意使唤,用着傲娇不羁的行事风格满足自己各种任性的愿望.但不用担心,她也从来不会亏待自己的好下仆们,也许帮她跑个腿买点小东西,她就会带给你想要的任何惊喜.']],
                        lg_amiya: ['female', '泰拉大陆', 5, ['lg_zhu_amiya', 'lg_jingshenbaofa', 'lg_qimeila', 'lg_qimeila1', 'lg_amiya_zhenwang'], ['zhu', 'des:罗德岛的公开领袖,在内部拥有最高执行权.虽然,从外表上看起来仅仅是个不成熟的少女,实际上,她却是深受大家信任的合格的领袖. 现在,阿米娅正带领着罗德岛,为了感染者的未来,为了让这片大地挣脱矿石病的阴 霾而不懈努力.']],
                        lg_feiniaomashi: ['female', '异世界', 8, ['lg_zhong_feiniaomashi', 'lg_zhanshupanduan', 'lg_abishu', 'lg_feiniaomashi_zhenwang'], ['des:千年科学学园所属,秘密组织【C&C】的五号特工.<br/><br/>虽然隶属于C&C,但由于一直以来都是莉音的专属女仆和贴身护卫,因此知晓时的存在的人屈指可数.她是一位优秀的以高科技武器和技术进行战斗的特工.尽管直到目前为止一直都是以单独行动为主,但其实她也有容易感到寂寞的一面.']],
                        lg_anuosi: ['female', '奇迹大陆', '5/8', ['lg_beiyinanliu', 'lg_nei_anuosi', 'lg_beiyinanliu2', 'lg_shenyuanhaixi', 'lg_shenyuanhaixi1', 'lg_shenyuanhaixi2', 'lg_shenyuanhaixi3', 'lg_anuosi_zhenwang'], ['des:她的长发如瀑布绵延,她的裙身裹挟着无数细碎气泡,来自最幽深的海底,迎向最灿烂的星光.']],
                        lg_tangyuanyougui: ['female', '蕾兰', 5, ['lg_mengjingqinran', 'lg_fan_tangyuanyougui', 'lg_cheyezhiguang', 'lg_cheyezhiguang1', 'lg_tangyuanyougui_zhenwang'], ['des:她并不像看起来的那么娇小,实力超出任何人的想象.对她而言,守护重要的东西就意味着一切,为了达到这一目的,她可以跨越善恶的平衡,用罪恶挡下一切危难,用手中利斧劈开一切阻碍.']],
                        lg_beimihu: ['female', '迦勒底', '1/5', ['lg_nei_beimihu', 'lg_guangzhishenyu', 'lg_guangzhishenyu1', 'lg_liandong_beimihu', 'lg_jiuyuanjing', 'lg_jiuyuanjing0', 'lg_beimihu_zhenwang'], ['hiddenSkill', 'des:据说存在于古代日本的邪马台国的女王.传说她使用名为鬼道的魔术,善于用蛊惑的方式治理民众.是在分裂成众多小国、持续着长期战乱的倭国中突然出现,并以神谕之力统治国家的充满谜团的女王.<br/><br/> 卑弥呼居住在巨大神殿的最深处,不会出现在人们面前,她的话语由无名的弟弟传达给民众.从她向大陆的魏国派去使者,并且被授予了亲魏倭王的封号等事可以看出,她同样很擅长外交.然而在卑弥呼死后,以她弟子壹与的记录作为终点,邪马台国突然从历史舞台上消失了.邪马台国至今仍有不少谜团,甚至不确定具体地点在何处.<br/><br/> 看上去是个悠然自得精力充沛变化无常的女孩,但体内隐藏的神秘力量厉害到无愧于光之裁定者这个名号.时而用神谕,时而强行……不,没什么.就当她是用这类各种方法治理纷争好了.从她身为女王的言行举止中或许无法觉察到,她原本是个喜爱太阳的光芒、喜爱大地的果实、喜爱人们的笑容,喜爱与天然自然共生的善良女孩.<br/><br/> 顺便一提,不知为何体质异常召雨.每当想出门时就会下雨,以至于被人们宝贵地视为求雨的巫女.<br/><br/> 星辰显现出深渊,深渊又是会映照出星辰的无限反射镜.那一晚,她听到了<那个>.无比遥远,无比接近.犹如呢喃,又如大喊.宛若虚幻,又宛若清晰.自己犹如倒影,倒影加深自己.随后映入眼帘的悠久的彼方,维系此处的久远睿智.<br/><br/>  作为非人之睿智的无限反射镜诞生于现世,背负着人类所不能掌控力量的原始异能者.抛弃了身为一个人理应拥有的人生,为人们的笑容献上自身.对自己的一生无怨无悔,甚至不惜欣然接受人生尽头的黑暗,最终消失在时间的彼方.']],
                        lg_zuozhiweiai: ['female', '混沌域', 5, ['lg_nei_zuozhiweiai', 'lg_jihunbianchi', 'lg_zuozhiweiai_zhenwang'], ['des:所属混沌主麾下的<十二魔魂>之一,习惯遵循本性地生活、战斗,是一个几乎完全活在自己世界里的人.对于未爱而言,没有什么比将一块随处可见的魂灵塑以神韵,赋予魂灵这一过程更令人愉悦了.']],
                        lg_erzitianlinai: ['female', '幻想乡', 8, ['lg_beijingwu', 'lg_zhu_erzitianlinai', 'lg_liandong_erzitianlinai', 'lg_wangquemingzi', 'lg_erzitianlinai_zhenwang'], ['des:尔子田里乃,系列作品<东方Project>及其衍生作品中的角色,首次登场于<东方天空璋>.和丁礼田舞一同拥有诱导出万物潜在力量的能力,是摩多罗隐岐奈的部下.<br/><br/> 她们原先是普通的人类的孩子,但受隠岐奈的魔力影响,已经不算是人类了.仍是人类时的记忆也几乎丧失了,只会狂喜乱舞.但是性格还和人类时期一样,舞冒冒失失却很有行动力,里乃小心谨慎,却有自信过剩的缺点.<br/><br/> 她们的舞蹈,并不是为了取悦世人,已经是超脱了常轨的东西.完全是为了隐岐奈而起舞,为了隐岐奈而行动.两个人并不知道这次开启背上门扉,是为了寻找自己的继任者.她们只听说是为了增加自己的伙伴.如果,她们知道了真相,会如何行动呢.即便如此事态也不会有任何变化吧.<br/><br/> 她们从来不会想到任何忤逆隐岐奈的事情.作为隐岐奈的手足的二人,她们的能力,还只不过是隐岐奈的能力之一而已.']],
                        lg_bawanxi: ['female', '迦勒底', 5, ['lg_nei_bawanxi', 'lg_maerjin', 'lg_tonghuankuzou', 'lg_tonghuankuzou1', 'lg_bawanxi_zhenwang'], ['des:妖精国不列颠的圆桌骑士之一.获得泛人类史圆桌骑士·崔斯坦灵基赐名的妖精骑士.支配异闻带不列颠的女王摩根的<女儿>,作为继承人受到优待.在不需要魔术的异闻带不列颠,是被作为魔女抚养长大的两位妖精之一.<br/><br/> 身为妖精的名字是芭万·希.是苏格兰传说中的女性妖精.意思就是字面含义的<女妖精>,据说一旦在夜里出现,就会吸收人类的生命,置其于死地.喜欢鲜血,讨厌阳光.<br/><br/> 外向、处世主动.会毫不含蓄地说出自己的欲望,为了实现欲望不惜差遣周围人的支配者气质.短暂的享乐主义,只要现在痛快就够了.和其他妖精一样,喜欢快乐的事,但她感受的<快乐>只有弱者痛苦的声音,所以才会做出不分人类与妖精,玩弄、践踏弱者的行为.因为没有被任何人爱过,同时「母亲」摩根「只在她欺凌弱者时」夸奖她,所以她学到了这才是快乐的事.<br/><br/>  是为了获得母亲的爱而努力的少女形象,与将迟早会成为自己囊中之物的王国视为玩具的公主之傲慢融合而成的小魔女.一看到善行或是好事,就会真的感到恶心,并破口大骂.理由是<那还用问吗,因为我觉得无聊啊>.<br/><br/> 芭万·希对大部分事情毫无兴趣,只喜欢破坏,可对于贝里尔讲述的<泛人类史的文明>双眼熠熠生辉,并热衷于模仿泛人类史的事.<在历史悠久的城池内举办一场军队行动竞赛会不会很有趣？当然,作为惩罚,我要杀掉除了第一名以外所有的人.>在这过程中,她被泛人类史<高跟鞋>的魅力所惑,成了鞋子收藏家.但凡与鞋子相关的事,她都会认真对待,并付出纯粹的努力,她的梦想是将来要制作出比泛人类史任何工匠的作品都要帅气的鞋子.<br/><br/> 如此这般的芭万·希的<公主殿下>寝室中,像宝贝一样摆放着从脚后跟处被砍断的妖精们的裸足.']],
                    },
                    translate: {
                        lg_yitengxihua: '伊藤希花',
                        lg_yizhilaiyuan: '一之濑宛',
                        lg_jiangqixingnai: '江崎星奈',
                        lg_pingsonggui: '平松桂',
                        lg_pingsongquan: '平松泉',
                        lg_huoqinge: '霍青娥',
                        lg_jinwanxiashu: '金丸夏姝',
                        lg_mizhilanwan: '谜之兰丸X',
                        lg_yuanyizhezhi: '鸢一折纸',
                        lg_huihuicao: '灰灰草',
                        lg_shenziqiange: '神子千歌',
                        lg_mogen: '摩根',
                        lg_yuntan: '云昙',
                        lg_lunaqielude: '露娜切露德',
                        lg_heita: '黑塔',
                        lg_aertuoliya: '阿尔托莉雅',
                        lg_yushuinai: '三枝裕水奈',
                        lg_nuannuan: '暖暖',
                        lg_yuzhoulin: '太空伊什塔尔',
                        lg_yingzuowuye: '影佐无夜',
                        lg_shiliuyexiaoye: '十六夜咲夜',
                        lg_baoquanhanzhang: '保泉含彰',
                        lg_amiya: '阿米娅',
                        lg_feiniaomashi: '飞鸟马时',
                        lg_anuosi: '阿诺斯',
                        lg_tangyuanyougui: '堂园由桂',
                        lg_beimihu: '卑弥呼',
                        lg_zuozhiweiai: '佐治未爱',
                        lg_erzitianlinai: '尔子田里乃',
                        lg_bawanxi: '芭万希',
                        lg_zhu_yitengxihua: ' ',
                        lg_zhu_yitengxihua_info: '',
                        lg_zhu_yitengxihua1: '万物之始',
                        lg_zhu_yitengxihua1_info: '',
                        lg_zhu_yitengxihua2: ' ',
                        lg_zhu_yitengxihua2_info: '',
                        lg_jinguangyelu: '✦',
                        lg_jinguangyelu_info: '— 金光叶露 —<br/> 技能1<br/> 「普通技」<br/> ✦ 每轮游戏开始时,你可以选择至多X名有牌的其他角色,将这些角色的各一张牌置入你的装备区,你不能以此法将牌置入有装备的装备栏.<br/><br/> 「锁定技」<br/> ✦ 你计算与其他角色的距离时-Y.<br/> ✦ 当你弃置其他角色的牌时,将你装备区内因此技能使用的牌均置入弃牌堆,你回复1点体力,摸等量的牌.<br/><br/> 「技能未知数据」<br/> ✦ X为你装备区内的空装备栏数.<br/> ✦ Y为你的手牌数.<br/><br/> 伊藤希花:<br/>伤痛,只是在证明你的敌人没有击败你.',
                        lg_huacaofanrong: '✧',
                        lg_huacaofanrong_info: '— 花草繁荣 —<br/> 技能2<br/> 「普通技」<br/> ✧ 出牌阶段,若你的体力值小于手牌数,你可以选择一名其他角色,弃置X张手牌.若如此做,其展示所有手牌,你将其中任意张花色均不同的牌依次顺序分配给除其外的其他角色.<br/><br/> 「相关联动」<br/> ✧ 当你发动天赋效果时,你可以选择一名其他角色,弃置Y张手牌.若如此做,其展示所有手牌,你将其中任意张花色均不同的牌依次顺序分配给除其外的其他角色.<br/><br/> 「技能未知数据」<br/> ✧ X为你与其区域内的牌数之差,至多为5.<br/> ✧ Y为你与其的手牌数之差,至多为5.<br/><br/> 伊藤希花:<br/> 我无法回答你的一切问题,有的答案只有靠你自己才能明白.',
                        lg_yitengxihua_zhenwang: '阵亡',
                        lg_yitengxihua_zhenwang_info: '',
                        lg_nei_yitengxihua1: '万物之始',
                        lg_nei_yitengxihua1_info: '',
                        lg_nei_yizhilaiyuan1: ' ',
                        lg_nei_yizhilaiyuan1_info: '',
                        lg_zhu_yizhilaiyuan2: ' ',
                        lg_zhu_yizhilaiyuan2_info: '',
                        lg_quqiaoboli: '✦',
                        lg_quqiaoboli_info: '— 躯壳剥离 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名角色受到伤害时,你可以选择一个装备栏废除,失去1点体力.若如此做,你与其各摸一张牌,防止其受到的伤害.<br/> ✦ 当你造成伤害后,你可以选择因此技能防止受到的伤害;且体力值为全场最少的一名角色,令其回复2点体力,随机获得一张♠️️牌.若如此做,直到当前回合结束,你不能发动此技能.<br/><br/> 一之濑宛:<br/> 嘿嘿,快过来,和你分享一个好东西!',
                        lg_mingjiezhizhong: '✧',
                        lg_mingjiezhizhong_info: '— 冥界之种 —<br/> 技能2<br/> 「普通技」<br/> ✧ 一名其他角色回复体力时,若其的体力值为全场最多,你可以将任意张手牌置于你的武将牌上,令其将等量的手牌置于你的武将牌上.若如此做,当前回合角色摸X张牌.<br/> ✧ 当你使用的【杀】被【闪】响应后,你可以令场上角色各获得你武将牌的一张牌.<br/><br/> 「相关联动」<br/> ✧ 当你发动天赋效果时,你可以令场上角色各获得你武将牌的一张牌.<br/><br/> 「技能未知数据」<br/> ✧ X为你与其装备区内的牌数之差.<br/><br/> 一之濑宛:<br/> 碍事的家伙,统统干掉就好啦!',
                        lg_yizhilaiyuan_zhenwang: '阵亡',
                        lg_yizhilaiyuan_zhenwang_info: '',
                        lg_zhu_yizhilaiyuan: '噩兆',
                        lg_zhu_yizhilaiyuan_info: '',
                        lg_zhu_jiangqixingnai: ' ',
                        lg_zhu_jiangqixingnai_info: '',
                        lg_zhu_jiangqixingnai2: ' ',
                        lg_zhu_jiangqixingnai2_info: '',
                        lg_zhu_jiangqixingnai1: '破晓皇花之冠',
                        lg_zhu_jiangqixingnai1_info: '',
                        lg_meishiyouhuo: '✦',
                        lg_meishiyouhuo_info: '— 美食诱惑 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你受到伤害时,你可以选择除伤害来源以外的一名其他角色,随机获得其的一张牌,展示之.若此牌为♥️️,你可以使用之,随机获得一张基本牌.<br/><br/> 江崎星奈:<br/> 果然,这个东西好好吃,真的让人欲罢不能呢!',
                        lg_mimiyaoqing: '✦',
                        lg_mimiyaoqing_info: '— 秘密邀请 —<br/> 技能2<br/> 「普通技」<br/> ✦ 一名其他角色的出牌阶段开始时,若其的体力值小于你,你可以摸X张牌,交给其三张手牌.若如此做,其本回合的出牌阶段可以将一张♦️️牌当【治疗】使用.<br/><br/> 「锁定技」<br/> ✦ 一名其他角色的出牌阶段结束时,若其因此技能获得过牌;且其此阶段未以此法使用过【治疗】,其受到2点无来源伤害.<br/><br/> 「技能未知数据」<br/> ✦ X为其的体力值.<br/><br/> 江崎星奈:<br/> 不管是什么东西,只要让我咬一下我就能分辨真假哦.',
                        lg_mimiyaoqing_tao: '✦',
                        lg_mimiyaoqing_tao_info: '',
                        lg_mimiyaoqing_damage: ' ',
                        lg_mimiyaoqing_damage_info: '',
                        lg_xinji: '✧',
                        lg_xinji_info: '— 心悸 —<br/> 技能3<br/> 「锁定技」<br/> ✧ 当你使用【杀】指定一名角色为目标时,若你不在其的攻击范围,你弃置一张手牌,令此【杀】不能被【闪】响应.<br/><br/> 江崎星奈:<br/> 你们的幕后主使是谁？',
                        lg_jiangqixingnai_zhenwang: '阵亡',
                        lg_jiangqixingnai_zhenwang_info: '',
                        lg_zhu_pingsonggui: ' ',
                        lg_zhu_pingsonggui_info: '',
                        lg_zhu_pingsonggui1: '斗志激发',
                        lg_zhu_pingsonggui1_info: '',
                        lg_wuyongfanji: '✦',
                        lg_wuyongfanji_info: '— 无用反击 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名其他角色使用牌指定你为目标时,若此牌不为伤害类,你可以令此牌对你无效,其摸一张牌且展示之.若如此做,你可以对其使用以此法展示的牌,其弃置X张手牌.<br/><br/> 「技能未知数据」<br/> ✦ X为其的攻击范围.<br/><br/> 平松桂:<br/> 喂,你在看哪里啊!过来挨打!',
                        lg_wuyongdikang: '✧',
                        lg_wuyongdikang_info: '— 无用抵抗 —<br/> 技能2<br/> 「普通技」<br/> ✧ 当你需要使用或打出一张基本牌时,若你的武将牌正面朝上,你可以翻面且展示所有手牌,视为使用或打出之.<br/><br/> 平松桂:<br/> 这才是强者之间的对决!',
                        lg_pingsonggui_zhenwang: '阵亡',
                        lg_pingsonggui_zhenwang_info: '',
                        lg_wuyongdikang_use: '✧ ',
                        lg_wuyongdikang_use_info: '',
                        lg_wuyongdikang_sha: '✧',
                        lg_wuyongdikang_sha_info: '',
                        lg_wuyongdikang_shan: '✧',
                        lg_wuyongdikang_shan_info: '',
                        lg_zhu_pingsonggui2: ' ',
                        lg_zhu_pingsonggui2_info: '',
                        lg_chunzhenzhufu: '✧',
                        lg_chunzhenzhufu_info: '— 纯真祝福 —<br/> 技能1<br/> 「锁定技」<br/> ✧ 一名角色使用牌对除你以外的角色造成伤害时,若此牌不为【杀】,你获得其区域内的一张牌.若以此法获得的牌为:♥️️,令其摸四张牌.♦️️,你与其各摸两张牌.♠️️,你失去2点体力,令其弃置等量的红色手牌,防止其受到的伤害.♣️️,令其选择选择一项:①摸X张牌;②回复2点体力.<br/><br/> 「技能未知数据」<br/> ✧ X为你与伤害来源非装备区内的♥️️牌数之和.<br/><br/> 平松泉:<br/> 好像是这么一回事,不过偶尔放松下也不错呢.',
                        lg_zhu_pingsongquan: ' ',
                        lg_zhu_pingsongquan_info: '',
                        lg_pingsongquan_zhenwang: '阵亡',
                        lg_pingsongquan_zhenwang_info: '',
                        lg_zhu_pingsongquan1: '祈祷',
                        lg_zhu_pingsongquan1_info: '',
                        lg_zhu_pingsongquan2: ' ',
                        lg_zhu_pingsongquan2_info: '',
                        lg_zhu_huoqinge: ' ',
                        lg_zhu_huoqinge_info: '',
                        lg_zhu_xujiahuanxiang: '虚假幻想',
                        lg_zhu_xujiahuanxiang_info: '',
                        lg_zouhuorumo: '✦',
                        lg_zouhuorumo_info: '— 走火入魔 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名其他角色使用【杀】指定你或你攻击范围内的角色为目标时,若此【杀】为♣️️,你可以选择一项:①摸X张牌;②对其造成2点伤害.若选择的为①,且你不为此【杀】的唯一目标,令此【杀】对除你外的角色均无效.若选择的为②,且你不为此【杀】目标,令此【杀】额外指定你为目标.<br/><br/> 「技能未知数据」<br/> ✦ X为你的体力上限与手牌数之差,至多为5.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,若你的手牌数与体力值相同,你可以移动场上的一张牌.<br/><br/> 霍青娥:<br/> 一旦死了的话,可怕的东西就没有了吧？',
                        lg_liandong_huoqinge: ' ',
                        lg_liandong_huoqinge_info: '',
                        lg_gufenyegui: '✧',
                        lg_gufenyegui_info: '— 孤坟野鬼 —<br/> 技能2<br/> 「普通技」<br/> ✧ 当你失去装备区内的一张牌后,你可以废除对应的装备栏,弃置一张♣️️牌.<br/><br/> 「锁定技」<br/> ✧ 当你使用牌对其他角色造成伤害时,若你当前回合未以此法获得过牌,你随机获得一张♣️️牌,此伤害值+X.<br/><br/> 「技能未知数据」<br/> ✧ X为其装备区内与你废除对应装备栏的相同类别数.<br/><br/> 霍青娥:<br/> 这跟我的仙术没有任何关系,请不要误会!',
                        lg_zhu_huoqinge2: ' ',
                        lg_zhu_huoqinge2_info: '',
                        lg_zhong_xindongshunjian: ' ',
                        lg_zhong_xindongshunjian_info: '',
                        lg_xindongshunjian: '心动瞬间',
                        lg_xindongshunjian_info: '',
                        lg_linweiyiji: '✦',
                        lg_linweiyiji_info: '— 临危一击 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你使用【杀】指定其他角色为目标时,你可以令其与你展示对方的各一张手牌.若如此做,直到当前回合结束.失去以此法展示牌的第一个角色摸X张牌;且失去以此法展示牌的第二个角色弃置Y张手牌.<br/> ✦ 一名其他角色使用【杀】指定你为目标时,你可以令其与你展示对方的各一张手牌.若如此做,直到当前回合结束.失去以此法展示牌的第一个角色摸X张牌;且失去以此法展示牌的第二个角色弃置Y张手牌.<br/><br/> 「锁定技」<br/> ✦ 当你解除濒死状态后,对伤害来源视为使用一张【决斗】.<br/><br/> 「技能未知数据」<br/> ✦ X为你体力值的一半,向上取整.<br/> ✦ Y为你装备区内的牌数.<br/><br/> 金丸夏姝:<br/> 首先他们忽略你,接着会嘲笑你,会打你,最后会输给你.',
                        lg_linweiyiji2: '✦',
                        lg_linweiyiji2_info: '',
                        lg_linweiyiji3: ' ',
                        lg_linweiyiji3_info: '',
                        lg_linweiyiji4: ' ',
                        lg_linweiyiji4_info: '',
                        lg_jinwan_xindongtetiao: '✧',
                        lg_jinwan_xindongtetiao_info: '— 心动特调技术 —<br/> 技能2<br/> 「普通技」<br/>✧ 一名其他角色回复体力后,你可以选择两种花色,其可以展示两张与你以此法选择花色均相同的手牌,视为使用一张基本牌.<br/><br/> 金丸夏姝:<br/> 现在是心动瞬间!',
                        lg_jinwanxiashu_zhenwang: '阵亡',
                        lg_jinwanxiashu_zhenwang_info: '',
                        lg_huoqinge_zhenwang: '阵亡',
                        lg_huoqinge_zhenwang_info: '',
                        lg_xindong1: '心动',
                        lg_xindong1_info: '',
                        lg_zhong_jinwanxiashu1: ' ',
                        lg_zhong_jinwanxiashu1_info: '',
                        lg_nei_shengbei: '圣杯契约',
                        lg_nei_shengbei_info: '',
                        lg_nei_mizhilanwan: ' ',
                        lg_nei_mizhilanwan_info: '',
                        lg_lanwanzhiguang: '✦',
                        lg_lanwanzhiguang_info: '— 兰丸之光 —<br/> 技能1<br/> 「普通技」<br/> ✦ 出牌阶段限一次,你可以展示一名其他角色的一张手牌,选择是否弃置一张手牌.若选择是,你弃置其以此法展示的牌.若颜色均相同,改为你获得之;若花色均相同,令其失去1点体力,重置此技能.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,获得一张【杀】,重置此技能.<br/> ✦ 一名其他角色解除濒死状态后,你弃置两张手牌,摸等量的牌,重置此技能.<br/><br/> 谜之兰丸X:<br/> 请见证兰丸战斗的表现吧,主公!',
                        lg_liandong_mizhilanwan: ' ',
                        lg_liandong_mizhilanwan_info: '',
                        lg_liandong2_mizhilanwan: ' ',
                        lg_liandong2_mizhilanwan_info: '',
                        lg_lanwan: '✧',
                        lg_lanwan_info: '— 兰丸·X —<br/> 技能2<br/> 「限制技」<br/> 发动限制为S<br/> ✧ 一名其他角色使用伤害类的牌指定唯一目标时,你可以选择一项:①交给其一张红色牌,令此牌额外指定一个目标;②交给其一张黑色牌,令此牌造成的伤害值+2.<br/><br/> 「技能未知数据」<br/> ✧ S为你上家的攻击范围.<br/><br/> 谜之兰丸X:<br/> 集齐所有兰丸的念想,请您向不共戴天的那家伙射击!',
                        lg_mizhilanwan_zhenwang: '阵亡',
                        lg_mizhilanwan_zhenwang_info: '',
                        lg_nei_mizhilanwan1: ' ',
                        lg_nei_mizhilanwan1_info: '',
                        lg_zhu_yuanyizhezhi: ' ',
                        lg_zhu_yuanyizhezhi_info: '',
                        lg_zhu_yuanyizhezhi1: '绝灭之翼',
                        lg_zhu_yuanyizhezhi1_info: '',
                        lg_rilun: '✦',
                        lg_rilun_info: '— 绝灭天使·日轮 —<br/> 技能1<br/> 「锁定技」<br/>✦ 每两轮限一次,当你使用的【杀】结算后,若此【杀】不能被【闪】响应,你对距离为2以内的其他角色各视为使用一张【火杀】.<br/><br/> 鸢一折纸:<br/> 不许接近我!',
                        lg_tianyi1: ' ',
                        lg_tianyi1_info: '',
                        lg_tianyi: '✦',
                        lg_tianyi_info: '— 绝灭天使·天翼 —<br/> 技能2<br/> 「锁定技」<br/> ✦ 你使用的牌没有距离限制.<br/> ✦ 你使用的♦️️【杀】不能被【闪】响应.<br/><br/> 鸢一折纸:<br/> 哪有这么多的同情,少假惺惺的了!',
                        lg_guangjian: '✦',
                        lg_guangjian_info: '— 绝灭天使·光剑 —<br/> 技能3<br/> 「普通技」<br/>✦ 当你使用的【杀】被【闪】响应后,你可以弃置一张普通锦囊牌.若当前回合有成为过你使用的牌目标,你对这些角色各视为使用一张【火杀】.<br/><br/> 鸢一折纸:<br/> 再这样下去的话,可不仅仅是警告能解决的事情了.',
                        lg_guangjian2: ' ',
                        lg_guangjian2_info: '',
                        lg_guangjian4: ' ',
                        lg_guangjian4_info: '',
                        lg_guangjian3: ' ',
                        lg_guangjian3_info: '',
                        lg_paoguan: '✧',
                        lg_paoguan_info: '— 绝灭天使·炮冠 —<br/> 技能4<br/> 「普通技」<br/> ✧ 出牌阶段限一次,当你使用伤害类的牌指定目标时,若为♦️️,你可以选择其中一个目标.若此牌对其造成伤害,直到本回合结束.每当你使用一张牌结算后,若你未使用过与此牌名称相同的牌,你获得其的X张牌.本回合结束时,若其阵亡,你摸Y张牌;否则其随机弃置区域内的Y张牌.若X大于Y,你回复1点体力.<br/><br/> 「相关联动」<br/> ✧ 当你发动天赋效果时,你随机获得上家的一张牌.<br/><br/> 「技能未知数据」<br/> ✧ X为你装备区内的牌数.<br/> ✧ Y为其装备区内的牌数.<br/><br/> 鸢一折纸:<br/> 我可不会让你逃走!',
                        lg_yuanyizhezhi_zhenwang: '阵亡',
                        lg_yuanyizhezhi_zhenwang_info: '',
                        lg_liandong_yuanyizhezhi: ' ',
                        lg_liandong_yuanyizhezhi_info: '',
                        lg_shiyu1: '时域',
                        lg_shiyu1_info: '',
                        lg_zhu_yuanyizhezhi2: ' ',
                        lg_zhu_yuanyizhezhi2_info: '',
                        lg_wuhougesheng: '✦',
                        lg_wuhougesheng_info: '— 午后歌声 —<br/> 技能1<br/> 「锁定技」<br/> ✦ 你不能成为其他角色进行拼点的目标.<br/> ✦ 你不能翻面、横置.<br/> ✦ 你不能成为♣️️牌的目标.<br/> ✦ 当你使用【无懈可击】时,你不能回复体力;且防止受到的伤害,改为下家随机废除一个装备栏.直到下回合开始.<br/><br/> 灰灰草:<br/> 总是在四周无人的时候,才能唱出属于我的声音.',
                        lg_nei_huihuicao: ' ',
                        lg_nei_huihuicao_info: '',
                        lg_xiangguangerxing: '✧',
                        lg_xiangguangerxing_info: '— 向光而行 —<br/> 技能2<br/> 「普通技」<br/> ✧ 出牌阶段结束时,你可以摸X张牌,回复等量的体力,将4-X张牌置于牌堆顶.若X大于Y,你移动场上的一张牌,跳过本回合的弃牌阶段.<br/><br/> 「锁定技」<br/> ✧ 你计算与其他角色的距离时-Y.<br/> ✧ 其他角色计算与你的距离时+Z.<br/><br/> 「技能未知数据」<br/> ✧ X为你本回合因使用而进入弃牌堆的花色数.<br/> ✧ Y为你的体力值.<br/> ✧ Z为你的攻击范围.<br/><br/> 灰灰草:<br/> 只要飞入光芒之中,即便是灰色的羽翼,也能变得光鲜亮丽.',
                        lg_huihuicao_zhenwang: '阵亡',
                        lg_huihuicao_zhenwang_info: '',
                        lg_xiangguangerxing1: ' ',
                        lg_xiangguangerxing1_info: '',
                        lg_xiangguangerxing2: ' ',
                        lg_xiangguangerxing2_info: '',
                        lg_yihaizhilei1: '忆海之泪',
                        lg_yihaizhilei1_info: '',
                        lg_yihaizhilei2: '忆海之泪',
                        lg_yihaizhilei2_info: '',
                        lg_yihaizhilei3: '忆海之泪',
                        lg_yihaizhilei3_info: '',
                        lg_yihaizhilei0: ' ',
                        lg_yihaizhilei0_info: '',
                        lg_qingyingshenzi: '✦',
                        lg_qingyingshenzi_info: '— 轻盈身姿 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你回复或失去体力时,若当前回合有♦️️牌进入过弃牌堆,你可以使用其中的一张♦️️牌.若如此做,令当前回合角色摸一张牌,你的下家与你进行拼点.<br/><br/> 神子千歌:<br/> 不要羡慕我了,我还羡慕你们呢!',
                        lg_qiangepeifang: '✦',
                        lg_qiangepeifang_info: '— 千歌独家配方 —<br/> 技能2<br/> 「普通技」<br/> ✦ 一名角色进行拼点时,你可以令其获得1枚<千歌>标记.<br/> ✦ 一名角色需要使用一张【心动】时,其可以弃置一张<千歌>标记,摸一张牌,视为使用之.<br/><br/> 神子千歌:<br/> 过分依赖不是什么好现象.',
                        lg_zhong_shenziqiange: ' ',
                        lg_zhong_shenziqiange_info: '',
                        lg_shenzi_xindongtetiao: '✧',
                        lg_shenzi_xindongtetiao_info: '— 心动特调技术 —<br/> 技能3<br/> 「普通技」<br/>✧ 一名其他角色回复体力后,你可以选择两种花色,其可以展示两张与你以此法选择花色均相同的手牌,视为使用一张基本牌.<br/><br/> 神子千歌:<br/> 现在是心动瞬间!',
                        lg_shenziqiange_zhenwang: '阵亡',
                        lg_shenziqiange_zhenwang_info: '',
                        lg_qiangepeifang_wuxie: '✦',
                        lg_qiangepeifang_wuxie_info: '',
                        lg_zhong_shenziqiange1: ' ',
                        lg_zhong_shenziqiange1_info: '',
                        lg_huzhijiahu: '✦',
                        lg_huzhijiahu_info: '— 湖之加护 —<br/> 技能1<br/> 「锁定技」<br/>✦ 当你处于濒死状态时,你判定一次,获得之;且重复此流程,直到你以此法获得类别均不同的牌.<br/> <br/>摩根:<br/> 昏暗之湖啊,到来吧.',
                        lg_zhu_mogen: ' ',
                        lg_zhu_mogen_info: '',
                        lg_wufadida1: '✧',
                        lg_wufadida1_info: '',
                        lg_wufadida: '✧',
                        lg_wufadida_info: '— 业已无法抵达的理想乡 —<br/> 技能2<br/> 「锁定技」<br/> ✧ 每两轮限一次,当你失去最后一张手牌时,其他角色选择是否交给你一张手牌.若选择是,其摸三张牌.<br/><br/> 「限制技」<br/> 发动限制为S<br/> ✧ 当你使用普通锦囊牌指定目标时,你可以选择一项:①令此牌额外指定至多X个目标;②令此牌减少至多X个目标.<br/><br/> 「技能未知数据」<br/> ✧ S为你的体力值.<br/> ✧ X为你已损失的体力值,至少为1.<br/><br/> 摩根:<br/> 这是慈悲,垂下头吧!没有恐怖,也没有希望.唯有像罪人般死去,无人可以通过!',
                        lg_mogen_zhenwang: '阵亡',
                        lg_mogen_zhenwang_info: '',
                        lg_nei_mogen1: ' ',
                        lg_nei_mogen1_info: '',
                        lg_nei_yuntan: ' ',
                        lg_nei_yuntan_info: '',
                        lg_mimengyuye: '✦',
                        lg_mimengyuye_info: '— 迷蒙雨夜 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名其他角色不因摸牌而获得牌后,若其的体力值为全场最多;且当前回合未以此法获得相同类别的牌,你可以令其随机获得一张与此牌类别不同的牌.<br/><br/> 「相关联动」<br/> ✦ 当你不因摸牌而获得牌后,若当前回合未以此法获得相同类别的牌,你可以随机获得一张与此牌类别不同的牌.<br/><br/> 云昙:<br/> 盈盈月色下,絮语和雨滴一同坠入梦里.',
                        lg_taruhongchen: '✦',
                        lg_taruhongchen_info: '— 踏入红尘 —<br/> 技能2<br/> 「普通技」<br/> ✦ 当你使用♥️️牌或♣️️牌指定一名角色为目标时,你可以选择一项:①令此牌额外指定其的上家为目标;②令此牌额外指定其的下家为目标.<br/><br/> 云昙:<br/> 这一次,我不会再等待了.',
                        lg_shiyuezhixin: '✧',
                        lg_shiyuezhixin_info: '— 誓约之心 —<br/> 技能3<br/> 「普通技」<br/> ✧ 一名角色回复体力;或回合结束时,若当前回合有♥️️牌因判定、拼点、弃置而进入过弃牌堆,你可以选择其中一张♥️️牌,获得之.若如此做,你随机获得其区域内的两张牌,随机获得其上家区域内的X张牌.<br/><br/> 「锁定技」<br/> ✧ 你不能使用延时锦囊牌与装备牌.<br/> ✧ 当你跳过摸牌阶段后,获得一张【桃】.<br/><br/> 「技能未知数据」<br/> ✧ X为你区域内♥️️牌数的一半,向下取整.<br/><br/> 云昙:<br/> 踏入红尘,只为停驻时光与你相遇.',
                        lg_yuntan_zhenwang: '阵亡',
                        lg_yuntan_zhenwang_info: '',
                        lg_shiyuezhixin1: ' ',
                        lg_shiyuezhixin1_info: '',
                        lg_shiyuezhixin2: ' ',
                        lg_shiyuezhixin2_info: '',
                        lg_yezhiyaojing: '✦',
                        lg_yezhiyaojing_info: '— 夜晚的妖精 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你受到伤害时,你可以将手牌数补至五张.若如此做,你选择攻击范围内的一名其他角色,展示其的一张手牌,令此牌视为【无懈可击】;且直到其回复体力为止,其不能使用非♦️️牌.<br/><br/> 露娜切露德:<br/> 这里正适合搞点有趣的事情,不是吗？',
                        lg_zhu_lunaqielude: ' ',
                        lg_zhu_lunaqielude_info: '',
                        lg_zhu_zhenshihuanxiang: '真实幻想',
                        lg_zhu_zhenshihuanxiang_info: '',
                        lg_zhenshihuanxiang2: ' ',
                        lg_zhenshihuanxiang2_info: '',
                        lg_yezhiyaojing1: ' ',
                        lg_yezhiyaojing1_info: '',
                        lg_jijingzhiyue: '✦',
                        lg_jijingzhiyue_info: '— 寂静之月 —<br/> 技能2<br/> 「普通技」<br/> ✦ 当你需要使用一张【无懈可击】时,若你有手牌,你可以将所有手牌当一张【无懈可击】使用.<br/> ✦ 当你需要使用或打出一张【闪】时,若你没有手牌,你可以令当前回合角色重铸区域内的所有黑色牌,视为使用之.<br/><br/> 露娜切露德:<br/> 一切都太安静了!',
                        lg_jijingfengbao: '✧',
                        lg_jijingfengbao_info: '— 寂静风暴 —<br/> 技能3<br/> 「锁定技」<br/> ✧ 你的手牌上限+X.<br/><br/> 「相关联动」<br/> ✧ 当你发动天赋效果时,重置此技能.<br/><br/> 「技能未知数据」<br/> ✧ X为你本局游戏使用过的♦️️牌数.<br/><br/> 露娜切露德:<br/> 月色真美啊,看清楚了吗？',
                        lg_liandong_jijingfengbao: ' ',
                        lg_liandong_jijingfengbao_info: '',
                        lg_lunaqielude_zhenwang: '阵亡',
                        lg_lunaqielude_zhenwang_info: '',
                        lg_zhu_lunaqielude1: ' ',
                        lg_zhu_lunaqielude1_info: '',
                        lg_zhu_heita: ' ',
                        lg_zhu_heita_info: '',
                        lg_zhu_bianxingqiong: '彼岸星穹',
                        lg_zhu_bianxingqiong_info: '',
                        lg_renoucaozong: '✦',
                        lg_renoucaozong_info: '— 人偶操纵 —<br/> 技能1<br/> 「锁定技」<br/> ✦ 若当前游戏轮数为奇数,你不能成为点数为奇数的【杀】目标.<br/> ✦ 若当前游戏轮数为偶数,你不能成为点数为偶数的【杀】目标.<br/><br/> 黑塔:<br/> 好看吗？和我小时候比,勉强也就七分相似吧.',
                        lg_chuizimaimai: '✦',
                        lg_chuizimaimai_info: '— 锤子买卖 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你使用【杀】指定目标时,你可以判定一次,摸X张牌.<br/><br/> 「技能未知数据」<br/> ✦ X为场上与判定牌花色相同的牌数.<br/><br/> 黑塔:<br/> 真是不识趣的家伙.',
                        lg_mofafujia: '✧',
                        lg_mofafujia_info: '— 魔法附加 —<br/> 技能3<br/> 「转换技」<br/> ✦ ❶你的回合内,当你需要使用一张【无懈可击】时,你可以视为使用之.<br/> ✦ ❷你的回合外,当你需要使用一张【无懈可击】时,你可以视为使用之.<br/><br/> 黑塔:<br/> 先解决掉眼前的麻烦,再来找我吧.',
                        lg_heita_zhenwang: '阵亡',
                        lg_heita_zhenwang_info: '',
                        lg_zhu_heita1: ' ',
                        lg_zhu_heita1_info: '',
                        lg_bianxingqiong2: '彼岸星穹',
                        lg_bianxingqiong2_info: '',
                        lg_bianxingqiong3: '彼岸星穹',
                        lg_bianxingqiong3_info: '',
                        lg_heiyezhixing: '✦',
                        lg_heiyezhixing_info: '— 黑夜之星 —<br/> 技能1<br/> 「普通技」<br/>✦ 一名其他角色使用【杀】指定你为目标时,你可以展示牌堆顶的一张牌,将此牌置入弃牌堆.若为【闪】,此【杀】对你无效,你弃置一张黑色手牌;且你下次使用♠️️【杀】造成的伤害值+2.<br/><br/> 阿尔托莉雅:<br/> 太脆弱了,不堪一击!',
                        lg_heiyezhixing1: ' ',
                        lg_heiyezhixing1_info: '',
                        lg_nei_aertuoliya: ' ',
                        lg_nei_aertuoliya_info: '',
                        lg_shiyuezhijian: '✧',
                        lg_shiyuezhijian_info: '— 誓约胜利之剑 —<br/> 技能2<br/> 「普通技」<br/>✧ 出牌阶段开始时,若你的体力值与手牌数均为全场最多,你可以摸X张牌,本回合你使用【杀】的次数上限+X;且使用【杀】指定的目标上限+2.若如此做,你不能发动此技能,直到打出手牌为止.<br/><br/> 「相关联动」<br/>✧ 当你发动天赋效果时,你随机弃置一张手牌,重置此技能.<br/><br/> 「技能未知数据」<br/> ✧ X为攻击范围内包含你的其他角色数.<br/><br/> 阿尔托莉雅:<br/> 卑王铁锤,反转旭光,吞噬光芒吧!',
                        lg_aertuoliya_zhenwang: '阵亡',
                        lg_aertuoliya_zhenwang_info: '',
                        lg_shiyuezhijian1: ' ',
                        lg_shiyuezhijian1_info: '',
                        lg_liandong_aertuoliya: ' ',
                        lg_liandong_aertuoliya_info: '',
                        lg_shiyuezhijian2: ' ',
                        lg_shiyuezhijian2_info: '',
                        lg_nei_aertuoliya1: ' ',
                        lg_nei_aertuoliya1_info: '',
                        lg_zhong_yushuinai: ' ',
                        lg_zhong_yushuinai_info: '',
                        lg_pengranxindong: '✦',
                        lg_pengranxindong_info: '— 怦然心动 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你回复体力时,你可以摸一张牌,展示两名角色的各一张手牌.若以此法展示的类别均不同,你可以令其中一名角色获得另一名角色展示的牌.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,你可以摸一张牌,展示两名角色的各一张手牌.若以此法展示的类别均不同,你可以令其中一名角色获得另一名角色展示的牌.<br/><br/> 三枝裕水奈:<br/> 呜哇!唔……哼哼,以为我会被吓到吗,骗你的!',
                        lg_zhengshixuzhao: '✧',
                        lg_zhengshixuzhao_info: '— 正是虚晃一招 —<br/> 技能2<br/> 「普通技」<br/> ✧ 结束阶段开始时,若你本回合没有使用过锦囊牌,你可以令一名其他角色不能使用基本牌,直到其下回合结束.<br/><br/> 三枝裕水奈:<br/> 玩笑差不多该结束了!',
                        lg_yushuinai_zhenwang: '阵亡',
                        lg_yushuinai_zhenwang_info: '',
                        lg_zhengshixuzhao2: ' ',
                        lg_zhengshixuzhao2_info: '',
                        lg_zhong_yushuinai1: ' ',
                        lg_zhong_yushuinai1_info: '',
                        lg_zhu_nuannuan: ' ',
                        lg_zhu_nuannuan_info: '',
                        lg_xuehuadingge: '✦',
                        lg_xuehuadingge_info: '— 雪花定格 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你因弃置而失去牌时,你可以获得任意名角色的各一张手牌,将这些角色标记为<雪>.<br/><br/> 「锁定技」<br/> ✦ 一名其他角色的回合开始时,若其被标记为<雪>,将一张【雪花】置入你的判定区,你交给其一张牌,取消标记为其的<雪>.<br/><br/> 暖暖:<br/> 每一片微小的雪花,都是独一无二的存在.',
                        lg_ruyueerzhi: '✦',
                        lg_ruyueerzhi_info: '— 如约而至 —<br/> 技能2<br/> 「普通技」<br/> ✦ 当你使用【杀】指定其他角色为目标时,若其被标记为<雪>,你可以摸一张牌,令其将颜色最多的手牌调整至与颜色最少的手牌相同.<br/><br/> 暖暖:<br/> 难忘的记忆,终将如约而至.',
                        lg_chuxueqiyuan: '✧',
                        lg_chuxueqiyuan_info: '— 初雪祈愿 —<br/> 技能3<br/> 「普通技」<br/> ✧ 一名其他角色使用【杀】指定除你外的角色为目标时,若其的体力值不小于你,你可以令其选择是否将一张非基本牌置于牌堆顶.若其选择否,其不能响应此【杀】.若如此做,此【杀】结算后,其摸两张牌,你可以弃置X张♣️️手牌.<br/><br/> 「锁定技」<br/> ✧ 你不能弃置【闪】.<br/><br/> 「技能未知数据」<br/> ✧ X为场上非装备区内的♣️️牌数等于你体力值的角色数.<br/><br/> 暖暖:<br/> 有些事物很短暂,希望能再次欣赏它的美.',
                        lg_nuannuan_zhenwang: '阵亡',
                        lg_nuannuan_zhenwang_info: '',
                        lg_chuxueqiyuan_buff: ' ',
                        lg_chuxueqiyuan_buff_info: '',
                        lg_chuxueqiyuan0: ' ',
                        lg_chuxueqiyuan0_info: '',
                        lg_zhu_nuannuan2: ' ',
                        lg_zhu_nuannuan2_info: '',
                        lg_zhu_nuannuan1: '为你闪耀',
                        lg_zhu_nuannuan1_info: '',
                        lg_emoshatang: '✦',
                        lg_emoshatang_info: '— 恶魔的砂糖 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你使用的♦️️【杀】结算进入弃牌堆后,你可以展示所有手牌,令手牌奇偶数与你不同的其他角色各展示一张牌且置于牌堆顶.若如此做,你交给一名其他角色一张牌,标记此牌为<恶魔的砂糖>.其下次回复体力或失去体力时,你获得其的一张手牌且展示之.若未以此法获得标记为<恶魔的砂糖>的牌,你对其视为依次使用三张【杀】.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,令手牌奇偶数与你不同的其他角色各展示一张牌且置于牌堆顶.<br/><br/> 太空伊什塔尔:<br/> 赐予所有知性体忘却的惩罚.',
                        lg_nei_yuzhoulin: ' ',
                        lg_nei_yuzhoulin_info: '',
                        lg_emoshatang1: '✦',
                        lg_emoshatang1_info: '',
                        lg_emoshatang2: ' ',
                        lg_emoshatang2_info: '准备阶段,你可以令手牌数的奇偶性与你不同的所有其他角色所有依次展示一张牌并置于牌堆顶.',
                        lg_yuzhouwangguan: '✧',
                        lg_yuzhouwangguan_info: '— 闪耀于原始宇宙的王冠 —<br/> 技能2<br/> 「普通技」<br/> ✧ 摸牌阶段开始时,你可以放弃摸牌,改为展示牌堆顶的X张牌,选择一项:①获得其中的非锦囊牌;②获得其中的锦囊牌.若如此做,你选择是否令一名其他角色获得其余的牌.若选择否,你的下家展示所有手牌,与你的下家依次进行三次拼点.<br/><br/> 「锁定技」<br/> ✧ 当你回复体力时,将牌堆顶的一张牌置入弃牌堆.<br/> ✧ 一名角色对你使用的非弃置类牌结算后,你弃置三张手牌,令X+1.<br/><br/> ✧ 当你进行拼点后,你展示所有手牌.若花色均相同,与你顺时针距离为3之内的其他角色各失去Y点体力,你展示牌堆底的三张牌且获得之.<br/><br/> 「技能未知数据」<br/> ✧ X为你的攻击范围.<br/> ✧ Y为场上势力数的一半,向上取整.<br/><br/> 太空伊什塔尔:<br/> 这是真正的我,起源为极小,扩张为无限,一切均纳入吾之心脏.',
                        lg_yuzhoulin_zhenwang: '阵亡',
                        lg_yuzhoulin_zhenwang_info: '',
                        lg_nei_yuzhoulin1: ' ',
                        lg_nei_yuzhoulin1_info: '',
                        lg_yuzhouwangguan1: ' ',
                        lg_yuzhouwangguan1_info: '',
                        lg_yuzhouwangguan2: ' ',
                        lg_yuzhouwangguan2_info: '',
                        lg_fan_yingzuowuye: ' ',
                        lg_fan_yingzuowuye_info: '',
                        lg_lieguangmeiying: '✧',
                        lg_lieguangmeiying_info: '— 烈光魅影 — <br/>技能1<br/> 「普通技」<br/> ✧ 一名其他角色使用黑色【杀】指定你为目标时,你与其进行拼点.若你赢,你获得两张【出其不意】,对其视为使用一张【杀】且弃置其的一张牌.若你没赢,此【杀】不能被【闪】响应,你失去1点体力.<br/><br/> 影佐无夜:<br/> 速度,是我的个性!',
                        lg_yingzuowuye_zhenwang: '阵亡',
                        lg_yingzuowuye_zhenwang_info: '',
                        lg_fan_yingzuowuye1: '狂戮恶魔',
                        lg_fan_yingzuowuye1_info: '',
                        lg_fan_yingzuowuye2: ' ',
                        lg_fan_yingzuowuye2_info: '',
                        lg_zhu_shiliuyexiaoye: ' ',
                        lg_zhu_shiliuyexiaoye_info: '',
                        lg_wanmeinvpu: '✦',
                        lg_wanmeinvpu_info: '— 完美女仆 —<br/> 技能1<br/> 「锁定技」<br/> ✦ 每轮游戏开始时,你选择是否展示所有手牌.若选择:是,你摸一张牌;否,你的下家与你交换手牌.若你以此法展示的手牌中:没有基本牌,选择是否视为使用一张基本牌;没有锦囊牌,选择是否视为使用一张普通锦囊牌;没有装备牌,随机将一张装备牌置入你的装备区.若如此做,你获得X枚<飞刀>标记.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,你获得1枚<飞刀> 标记.<br/><br/> 「技能未知数据」<br/> ✦ X为你区域内的♦️️牌数.<br/><br/> 十六夜咲夜:<br/> 大小姐的任性每次都会让我很头疼呢.',
                        lg_wanmeinvpu1: ' ',
                        lg_wanmeinvpu1_info: '',
                        lg_zhongbiaocanhai: '✦',
                        lg_zhongbiaocanhai_info: '— 钟表的残骸 —<br/> 技能2<br/> 「普通技」<br/> 一名角色使用♥️️牌指定其他角色为目标时,你可以令此牌对其无效,你展示牌堆顶的一张牌;且重复此流程,直到展示与上一张花色不同的牌,将这些牌均置于你的武将牌上,称为<残骸>,获得其余花色均不相同的各一张牌.若未以此法展示四种花色的牌,你随机弃置三张手牌.<br/><br/> 十六夜咲夜:<br/> 这样的感觉会让你如坐针毡!',
                        lg_yonghengwenrou: '✧',
                        lg_yonghengwenrou_info: '— 永恒的温柔 —<br/> 技能3<br/> 「普通技」<br/> ✧ 每回合限一次,当你需要使用一张【桃】时,你可以选择武将牌上两张颜色均相同的<残骸>,将这些牌当【桃】使用.<br/><br/> 「锁定技」<br/> ✧ 每回合限一次,当你使用【杀】指定其他角色为目标时,若你的<飞刀>标记数大于1,你随机展示其的一张手牌.若与此【杀】的花色均不同,此【杀】不能被【闪】响应;否则弃置以此法展示其的牌,你弃置2枚<飞刀>标记,对其视为依次使用三张♠️️【出其不意】.<br/> ✧ 其他角色计算与你的距离时+X.<br/> ✧ 你的手牌上限+X.<br/><br/> 「技能未知数据」<br/> ✧ X为你武将牌上的<残骸>数.<br/><br/> 十六夜咲夜:<br/> 因为我是完美的女仆.',
                        lg_yonghengwenrou1: ' ',
                        lg_yonghengwenrou1_info: '',
                        lg_shiliuyexiaoye_zhenwang: '阵亡',
                        lg_shiliuyexiaoye_zhenwang_info: '',
                        lg_zhu_shiliuyexiaoye2: ' ',
                        lg_zhu_shiliuyexiaoye2_info: '',
                        lg_nvpugantan: '✧',
                        lg_nvpugantan_info: '— 女仆们的感叹 —<br/> 技能1<br/> 「普通技」<br/> ✧ 当你使用的♣️️牌或♦️️牌结算进入弃牌堆后,你可以将此牌置于其中一个目标的武将牌上,称为<仆>.若有角色的<仆>因此包含相同名称,弃置这些<仆>,你对其视为使用一张相同名称的牌.若你的装备区内:有防具牌,直到下回合开始.一名其他角色使用♣️️牌时,你可以将一张♣️️牌当【心旷神怡】使用;没有防具牌,你弃置一张手牌,摸两张牌.<br/><br/> 「相关联动」<br/> ✧ 当你跳过摸牌阶段后,若你的装备区内有防具牌,直到下回合开始.一名其他角色使用♣️️牌时,你可以将一张♣️️牌当【心旷神怡】使用.<br/><br/> 保泉含彰:<br/> 我回来了,肩膀酸死了,快帮我捏捏啦.',
                        lg_zhong_baoquanhanzhang: ' ',
                        lg_zhong_baoquanhanzhang_info: '',
                        lg_nvpugantan2: ' ',
                        lg_nvpugantan2_info: '',
                        lg_liandong_nvpugantan: ' ',
                        lg_liandong_nvpugantan_info: '',
                        lg_baoquanhanzhang_zhenwang: '阵亡',
                        lg_baoquanhanzhang_zhenwang_info: '',
                        lg_nvpugantan1: '✧',
                        lg_nvpugantan1_info: '',
                        lg_zhong_baoquanhanzhang1: ' ',
                        lg_zhong_baoquanhanzhang1_info: '',
                        lg_zhu_amiya: ' ',
                        lg_zhu_amiya_info: '',
                        lg_yuanshizhihe: '源石之核',
                        lg_yuanshizhihe_info: '',
                        lg_jingshenbaofa: '✦',
                        lg_jingshenbaofa_info: '— 精神爆发 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你受到伤害后,你可以选择一项:①令你的下家随机废除两个装备栏;②令你的下家废除判定区.若如此做,你对伤害来源造成1点伤害,其弃置X张黑色手牌.<br/><br/> 「技能未知数据」<br/> ✦ X为你与其已损失体力值之和的一半,向下取整.<br/><br/> 阿米娅:<br/> 我知道你在想什么.',
                        lg_qimeila: '✧',
                        lg_qimeila_info: '— 奇美拉 —<br/> 技能2<br/> 「普通技」<br/> ✧ 当你需要使用一张基本牌时,你可以选择一个装备栏废除,视为使用之.若因此失去装备区内的牌,你回复1点体力.<br/> ✧ 当你打出手牌时,你可以选择一个装备栏回复.<br/><br/> 阿米娅:<br/> 这个声音……在哭？',
                        lg_qimeila1: '✧',
                        lg_qimeila1_info: '',
                        lg_amiya_zhenwang: '阵亡',
                        lg_amiya_zhenwang_info: '',
                        lg_zhu_amiya1: ' ',
                        lg_zhu_amiya1_info: '',
                        lg_zhong_feiniaomashi: ' ',
                        lg_zhong_feiniaomashi_info: '',
                        lg_zhanshupanduan: '✦',
                        lg_zhanshupanduan_info: '— 战术性判断 —<br/> 技能1<br/> 「普通技」<br/> ✦ 每两轮限一次,当你使用牌对其他角色造成伤害时,若此牌不为【杀】,你可以判定一次.若为♦️️,此牌对其造成的伤害值+2.若不为♦️️,你可以对攻击范围内的一名其他角色视为使用一张【杀】;且可以弃置一张♦️️牌,令此牌对其造成的伤害值+X.<br/><br/> 「技能未知数据」<br/> ✦ X为你的♦️️手牌数<br/><br/> 飞鸟马时:<br/> 正如您预料的那样.',
                        lg_abishu: '✧',
                        lg_abishu_info: '— 系统·阿比舒 —<br/> 技能2<br/> 「锁定技」<br/> ✧ 一名角色使用♦️️牌指定你为目标时,若你当前回合受到过伤害,你摸三张牌.若你为当前回合角色,改为摸五张牌.若你的体力值为全场最少,失去此技能.<br/> ✧ 一名角色使用非♦️️牌指定你为目标时,若你当前回合造成过伤害,你摸三张牌.若你为当前回合角色,改为摸五张牌.若你的体力值为全场最少,失去此技能.<br/><br/> 飞鸟马时:<br/> 别犹豫,即刻铲除眼前的障碍!',
                        lg_feiniaomashi_zhenwang: '阵亡',
                        lg_feiniaomashi_zhenwang_info: '',
                        lg_zhong_feiniaomashi1: ' ',
                        lg_zhong_feiniaomashi1_info: '',
                        lg_zhong_zhixu: '秩序',
                        lg_zhong_zhixu_info: '',
                        lg_beiyinanliu: '✦',
                        lg_beiyinanliu_info: '— 悲吟暗流 —<br/> 技能1<br/> 「普通技」<br/> ✦ 判定阶段开始时,若你上回合使用♠️️【杀】造成过伤害,你可以令所有其他角色各选择一项:①令你摸两张牌,本回合其的手牌对你可见;②令你失去2点体力,若你没有【杀】,你弃置下家的一张手牌,结束此流程.<br/><br/> 阿诺斯:<br/> 悲歌早已无人听见,我的灵魂将潜没于暗流之中.',
                        lg_nei_anuosi: ' ',
                        lg_nei_anuosi_info: '',
                        lg_beiyinanliu2: ' ',
                        lg_beiyinanliu2_info: '',
                        lg_beiyinanliu1: ' ',
                        lg_beiyinanliu1_info: '',
                        lg_shenyuanhaixi: '✧',
                        lg_shenyuanhaixi_info: '— 深渊海汐 —<br/> 技能2<br/> 「普通技」<br/> ✧ 一名其他角色的出牌阶段开始时,你可以交给其五张牌.若其在当前回合的弃牌阶段弃置过牌,你获得其弃置的牌,回复X点体力.若如此做,直到你受到伤害为止,你不能发动此技能.<br/> ✧ 当你回复体力时,你可以展示所有手牌,摸一张牌.<br/> ✧ 当你失去体力时,你可以弃置所有手牌,执行一个额外的回合.<br/> ✧ 当你解除濒死状态时,你可以对当前回合角色造成1点伤害.<br/><br/> 「技能未知数据」<br/> ✧ X为其的攻击范围与你的♥️️手牌数之和.<br/><br/> 阿诺斯:<br/> 从深渊里诞生的海潮,也能化作那温柔的波涛.',
                        lg_shenyuanhaixi1: '✧',
                        lg_shenyuanhaixi1_info: '',
                        lg_shenyuanhaixi2: '✧',
                        lg_shenyuanhaixi2_info: '',
                        lg_shenyuanhaixi3: '✧',
                        lg_shenyuanhaixi3_info: '',
                        lg_anuosi_zhenwang: '阵亡',
                        lg_anuosi_zhenwang_info: '',
                        lg_mengjingqinran: '✦',
                        lg_mengjingqinran_info: '— 梦境侵染的酒杯 —<br/> 技能1<br/> 「锁定技」<br/> ✦ 当你获得一名其他角色的牌后,令其记录此牌的点数,直到其处于濒死状态为止.<br><br/> 「普通技」<br/> ✦ 一名角色因弃置而失去与记录点数相同的牌后,你可以令其判定一次.若与其记录的牌颜色均相同,其失去1点体力.若其因此处于濒死状态,你将手牌数补至X.<br/><br/> 「技能未知数据」<br/> ✦ X为你的体力值与体力上限之和.<br/><br/> 堂园由桂:<br/> 愿你不醉不归.',
                        lg_fan_tangyuanyougui: ' ',
                        lg_fan_tangyuanyougui_info: '',
                        lg_fan_tangyuanyougui1: '邪心乱舞',
                        lg_fan_tangyuanyougui1_info: '',
                        lg_cheyezhiguang: '✧',
                        lg_cheyezhiguang_info: '— 彻夜之光 —<br/> 技能1<br/> 「普通技」<br/> ✧ 出牌阶段限一次,你可以令所有体力值小于X的其他角色各交给你一张牌.若如此做,你可以令因此失去:红色牌的其他角色回复1点体力;黑色牌的其他角色失去1点体力.<br/><br/> 「锁定技」<br/> ✧ 一名其他角色交给你牌后,其重铸区域内的所有♣️️牌.<br/><br/> 「技能未知数据」<br/> ✧ X为你区域内的牌数.<br/><br/> 堂园由桂:<br/> 一切罪恶的源头都有迹可循.',
                        lg_cheyezhiguang1: ' ',
                        lg_cheyezhiguang1_info: '',
                        lg_tangyuanyougui_zhenwang: '阵亡',
                        lg_tangyuanyougui_zhenwang_info: '',
                        lg_nei_beimihu: ' ',
                        lg_nei_beimihu_info: '',
                        lg_guangzhishenyu: '✦',
                        lg_guangzhishenyu_info: '— 光之神谕 —<br/> 技能1<br/> 「显现技」<br/> ✦ 当你登场后,你可以选择一名角色.若如此做,其下回合结束时,若其当前回合因弃置而失去的牌数不小于2,你可以与其各获得其一种类别的一张牌;且随机弃置判定区内的一张牌.<br/><br/> 「潜伏技」<br/> ✦ 摸牌阶段开始时,你可以放弃摸牌,改为观看一名其他角色的手牌.若如此做,你可以获得其中至多三张花色均不同的牌.若以此法获得三张牌,你依次摸等量的牌.<br/><br/> 「相关联动」<br/> ✦ 当你发动天赋效果时,若你的判定区内有牌,执行潜伏.<br/><br/> 卑弥呼:<br/> 昏暗之人啊,回归光明吧!',
                        lg_guangzhishenyu1: '✦ ',
                        lg_guangzhishenyu1_info: '',
                        lg_guangzhishenyu2: '✦',
                        lg_guangzhishenyu2_info: '',
                        lg_liandong_beimihu: '✦',
                        lg_liandong_beimihu_info: '',
                        lg_jiuyuanjing: '✧',
                        lg_jiuyuanjing_info: '— 映像星辰之久远镜 —<br/> 技能2<br/> 「限定技」<br/> ✧ 出牌阶段,你可以选择一名角色,将其装备区内的牌均记录.每当其的横置状态变化时,将其装备区内的牌均回复至以此法记录的状态;且若其回复体力,则重置此技能.<br/><br/> 「变化技」<br/> 结束阶段开始时,若你有普通锦囊牌,随机变化此技能的其中一个状态.<br/> ✧ ❶当你需要使用或打出一张【闪】时,令所有其他角色各选择是否交给你两张手牌.若没有角色选择是,视为你使用之.<br/> ✧ ❷一名其他角色回复体力后,若当前回合有进入过弃牌堆的牌,你可以将手牌数补至与当前回合进入过弃牌堆的花色数相同.<br/> ✧ ❸一名角色的判定牌生效前,你可以选择是否打出一张与此牌类别均不同的牌代替之.若选择否,你展示所有手牌.<br/><br/> 卑弥呼:<br/> 瞬间闪过之光啊,永远启导那人前行的道路吧!',
                        lg_jiuyuanjing2: ' ',
                        lg_jiuyuanjing2_info: '',
                        lg_jiuyuanjing0: ' ',
                        lg_jiuyuanjing0_info: '',
                        lg_beimihu_zhenwang: '阵亡',
                        lg_beimihu_zhenwang_info: '',
                        lg_jiuyuanjing01: ' ',
                        lg_jiuyuanjing01_info: '',
                        lg_jiuyuanjing02: '✧',
                        lg_jiuyuanjing02_info: '',
                        lg_jiuyuanjing03: '✧',
                        lg_jiuyuanjing03_info: '',
                        'lg_ nei_beimihu1': ' ',
                        'lg_ nei_beimihu1_info': '',
                        lg_nei_zuozhiweiai: ' ',
                        lg_nei_zuozhiweiai_info: '',
                        lg_jihunbianchi: '✧',
                        lg_jihunbianchi_info: '— 无视之汲魂鞭笞 —<br/> 技能1<br/> 「普通技」<br/> ✦ 当你失去♣️️牌后,你可以弃置当前回合角色的一张牌.若因此弃置你的牌,你可以获得一名其他角色区域内的两张牌.若你的手牌数小于X,重复此流程.<br/><br/> 「技能未知数据」<br/> ✦ X为你上家的体力值.<br/><br/> 佐治未爱:<br/> 来和我一起享受这狂欢!',
                        lg_zuozhiweiai_zhenwang: '阵亡',
                        lg_zuozhiweiai_zhenwang_info: '',
                        lg_hundunmohai: '混沌魔骸的加持',
                        lg_hundunmohai_info: '',
                        lg_hundunmohai1: ' ',
                        lg_hundunmohai1_info: '',
                        lg_nei_zuozhiweiai1: ' ',
                        lg_nei_zuozhiweiai1_info: '',
                        lg_qingfu: '倾覆',
                        lg_qingfu_info: '',
                        lg_beijingwu: '✦',
                        lg_beijingwu_info: '— 疯狂的背景舞 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名其他角色对你造成伤害后,若其的装备区内没有<尔子田里乃>,其可以令你从牌堆底摸X张牌;且你的武将牌<尔子田里乃>当武器牌置入其的装备区.<br/><br/> 「锁定技」<br/> ✦ 一名其他角色不因此技能而失去装备区内的<尔子田里乃>后,复原你的武将牌,你与其各执行一个额外的回合.<br/><br/> 「相关联动」<br/> ✦ 当你解除濒死状态后,复原你的武将牌.<br/><br/> 「技能未知数据」<br/> ✦ X为你的攻击范围.<br/><br/> 尔子田里乃:<br/> 嘿嘿,跟得上我的节奏吗？',
                        lg_zhu_erzitianlinai: ' ',
                        lg_zhu_erzitianlinai_info: '',
                        lg_zhu_erzitianlinai1: ' ',
                        lg_zhu_erzitianlinai1_info: '',
                        lg_liandong_erzitianlinai: ' ',
                        lg_liandong_erzitianlinai_info: '',
                        lg_wangquemingzi: '✧',
                        lg_wangquemingzi_info: '— 忘却你的名字 —<br/> 技能2<br/> 「锁定技」<br/> ✧ 若有体力值不等于你的角色,你计算与其的距离时+1;且其计算与你的距离时+1.<br/> ✧ 当你受到锦囊牌造成的伤害时,若伤害来源的体力值不大于你;且你的装备区内有武器牌,此伤害值-1.<br/> ✧ 当你使用牌对其他角色造成伤害时,若其的体力值不小于你,此伤害值+1.<br/><br/> 尔子田里乃:<br/> 好,节奏加快!',
                        lg_erzitianlinai_zhenwang: '阵亡',
                        lg_erzitianlinai_zhenwang_info: '',
                        lg_nei_bawanxi: ' ',
                        lg_nei_bawanxi_info: '',
                        lg_nei_bawanxi1: ' ',
                        lg_nei_bawanxi1_info: '',
                        lg_maerjin: '✦',
                        lg_maerjin_info: '— 格雷玛尔金 —<br/> 技能1<br/> 「普通技」<br/> ✦ 一名角色的出牌阶段结束时,若其此阶段使用过♣️️牌,你可以视为使用其中一张♣️️牌.若以此法使用的牌:造成伤害,你翻面;未造成伤害,你随机弃置一张手牌.<br/><br/> 芭万希:<br/> 一个一个撕碎未免也太麻烦了.',
                        lg_tonghuankuzou: '✧',
                        lg_tonghuankuzou_info: '',
                        lg_tonghuankuzou1: '✧',
                        lg_tonghuankuzou1_info: '— 痛幻哭奏 —<br/> 技能1<br/> 「普通技」<br/> ✧ 一名其他角色对你造成伤害时,若其没有<痛哭>标记;且区域内的♣️️牌数等于X,你可以防止此伤害,令其失去1点体力并获得之.<br/><br/> 「锁定技」<br/> ✧ 一名其他角色因打出而失去牌后,若其有<痛哭>标记,令其依次失去3点体力.<br/><br/> 「限定技」<br/> ✧ 当你使用非♣️️牌指定目标时,若你的区域内没有牌;且此牌的目标数大于1,你可以令其中一个目标选择一项:①令此牌对除其以外的目标均无效且结算Y次;②失去所有技能.<br/><br/> 「技能未知数据」<br/> ✧ X为你已损失的体力值.<br/> ✧ Y为此牌指定的目标数.<br/><br/> 芭万希:<br/> 命运还真是残酷呢,无论善人还是恶人,一旦遭到记恨,就会到此结束.',
                        lg_bawanxi_zhenwang: '阵亡',
                        lg_bawanxi_zhenwang_info: '',
                    },
                };
                lib.config.all.characters.add('世界之塔');
                lib.config.characters.add('世界之塔');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:世界之塔/image/${i}.jpg`)
                }
                lib.translate['世界之塔_character_config'] = `世界之塔`;
                return QQQ;
            });
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
                };//true转为1,false转为-1
                window.numberq0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.abs(Number(num));
                };//始终返回正数(取绝对值)
                window.numberq1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Math.abs(Number(num)), 1);
                };//始终返回正数且至少为1(取绝对值)
                window.number0 = function (num) {
                    if (isNaN(Number(num))) return 0;
                    return Math.max(Number(num), 0);
                };//始终返回正数
                window.number1 = function (num) {
                    if (isNaN(Number(num))) return 1;
                    return Math.max(Number(num), 1);
                };//始终返回正数且至少为1
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
            game.import('card', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '世界之塔',
                    connect: true,
                    card: {
                        lg_wanwuzhishi: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhu_yitengxihua1', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        lg_ezhao: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhu_yizhilaiyuan', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            image: 'ext:世界之塔/image/lg_ezhao.png',
                        },
                        lg_poxiaohuanghuazhiguan: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhu_jiangqixingnai1', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            image: 'ext:世界之塔/image/lg_poxiaohuanghuazhiguan.png',
                        },
                        lg_douzhijifa: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhu_pingsonggui1', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            image: 'ext:世界之塔/image/lg_douzhijifa.png',
                        },
                        lg_qidao: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhu_pingsongquan1', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        lg_shufu: {
                            type: 'basic',
                            enable: true,
                            filterTarget: true,
                            content() {
                                'step 0';
                                var list = [];
                                for (var i in lib.card) {
                                    if (!lib.card[i].content) continue;
                                    if (lib.card[i].mode && lib.card[i].mode.includes(lib.config.mode) == false) continue;
                                    if (lib.card[i].vanish) continue;
                                    if (lib.card[i].type == 'delay') list.push([card.suit, card.number, i]);
                                }
                                var dialog = ui.create.dialog('束缚', [list, 'vcard']);
                                var bing = target.countCards('h') <= 1;
                                player.chooseButton(dialog, true, function (button) {
                                    if (get.effect(target, { name: button.link[2] }, player, player) > 0) {
                                        if (button.link[2] == 'bingliang') {
                                            if (bing) return 2;
                                            return 0.7;
                                        }
                                        if (button.link[2] == 'lebu') {
                                            return 1;
                                        }
                                        if (button.link[2] == 'bingliang') {
                                            return 0.5;
                                        }
                                        if (button.link[2] == 'caomu') {
                                            return 0.3;
                                        }
                                        return 0.2;
                                    }
                                    return 0;
                                }).filterButton = function (button) {
                                    return !target.hasJudge(button.link[2]);
                                };
                                ('step 1');
                                var card = game.createCard(result.links[0][2]);
                                event.judgecard = card;
                                target.$draw(card);
                                ('step 2');
                                target.addJudge(event.judgecard);
                                player.draw();
                            },
                            ai: {
                                value: 8,
                                useful: [5, 1],
                                result: {
                                    player(player, target) {
                                        var eff = 0;
                                        for (var i in lib.card) {
                                            if (lib.card[i].type == 'delay') {
                                                var current = get.effect(target, { name: i }, player, player);
                                                if (current > eff) {
                                                    eff = current;
                                                }
                                            }
                                        }
                                        return eff;
                                    },
                                },
                                order: 6,
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_fushijian: {
                            type: 'basic',
                            fullimage: true,
                            enable: true,
                            range: {
                                attack: 1,
                            },
                            filterTarget: true,
                            content() {
                                target.damage('fire');
                                target.gain(game.createCard('du'), 'gain2');
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                                useful: 5,
                                value: 8,
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                },
                            },
                            selectTarget: 1,
                        },
                        lg_xinkuangshenyi: {
                            enable: true,
                            type: 'basic',
                            filterTarget(card, player, target) {
                                return !target.isMin();
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                var subtype = null;
                                for (var i = 0; i < 3; i++) {
                                    var card = get.cardPile(function (card) {
                                        if (get.type(card) == 'equip') {
                                            if (subtype) {
                                                if (get.subtype(card) == subtype) {
                                                    return false;
                                                }
                                            } else {
                                                subtype = get.subtype(card);
                                            }
                                            return true;
                                        }
                                        return false;
                                    });
                                    if (card) {
                                        ui.special.appendChild(card);
                                        cards.push(card);
                                    }
                                }
                                switch (cards.length) {
                                    case 1: {
                                        target.$gain(cards[0]);
                                        break;
                                    }
                                    case 2: {
                                        target.$gain(cards[0]);
                                        setTimeout(function () {
                                            target.$gain(cards[1]);
                                        }, 250);
                                        break;
                                    }
                                }
                                event.cards = cards;
                                ('step 1');
                                if (event.cards.length) {
                                    target.equip(event.cards.shift());
                                    if (event.cards.length) {
                                        event.redo();
                                    }
                                }
                                ('step 2');
                                ('step 3');
                                if (target.countCards('h')) {
                                    target.chooseToDiscard(3, 'h', true);
                                    target.draw();
                                    target.draw();
                                    target.draw();
                                }
                            },
                            ai: {
                                order: 9,
                                value: 6,
                                useful: 2,
                                result: {
                                    target(player, target) {
                                        return Math.max(0, 2 - target.countCards('e'));
                                    },
                                },
                                tag: {
                                    norepeat: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_yitilazhihua: {
                            enable: true,
                            type: '神秘',
                            selectTarget: -1,
                            toself: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            modTarget: true,
                            content() {
                                'step 0';
                                if (!target.countCards('he')) {
                                    event.finish();
                                    return;
                                }
                                target.chooseToDiscard(true, 'he', [1, 5]).set('ai', function (card) {
                                    if (!ui.selected.cards.length && get.type(card) == 'equip') return 8 - get.value(card);
                                    return 6 - get.value(card);
                                });
                                ('step 1');
                                if (result.bool && result.cards) {
                                    var bool = 0;
                                    for (var i = 0; i < result.cards.length; i++) {
                                        if (result.cards[i].suit == 'club') {
                                            bool = 3;
                                            break;
                                        }
                                    }
                                    target.draw(result.cards.length + bool);
                                    target.recover(result.cards.length + bool);
                                }
                            },
                            ai: {
                                wuxie() {
                                    return 0;
                                },
                                basic: {
                                    useful: 3,
                                    value: 3,
                                    order: 5,
                                },
                                result: {
                                    target(player, target, card) {
                                        var cards = ui.selected.cards.concat(card.cards || []);
                                        var num = player.countCards('he', function (card) {
                                            if (cards.includes(card)) return false;
                                            if (card.suit == 'club') return 8 > get.value(card);
                                            return 6 > get.value(card);
                                        });
                                        if (!num) return 0;
                                        if (
                                            player.countCards('he', function (card) {
                                                if (cards.includes(card)) return false;
                                                if (card.suit == 'club') return 4 > get.value(card);
                                                return false;
                                            })
                                        )
                                            return 1.6;
                                        if (num < 2) return 0.5;
                                        return 1.2;
                                    },
                                },
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                    norepeat: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_xindong: {
                            type: '神秘',
                            enable: true,
                            filterTarget: true,
                            content() {
                                if (target.isMinHandcard()) {
                                    target.addTempSkill('lg_xindong1', { player: 'phaseAfter' });
                                } else {
                                    target.draw(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 6,
                                    value: [6, 1],
                                    useful: [4, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isMinHandcard()) return 2;
                                        return 1;
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_qinshi: {
                            type: '圣杯',
                            enable: true,
                            wuxieable: true,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                var next = target.chooseToRespond({ name: 'sha' });
                                next.autochoose = lib.filter.autoRespondShan;
                                ('step 1');
                                if (result.bool == false) {
                                    if (!target.hasSkill('fengyin')) {
                                        target.addTempSkill('fengyin', { player: 'phaseBegin' });
                                    }
                                    target.damage(2);
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    useful: 3,
                                    value: 6.5,
                                },
                                result: {
                                    target: -2,
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_lingfeng: {
                            type: 'basic',
                            enable: true,
                            filterTarget: true,
                            content() {
                                'step 0';
                                target.chooseToDiscard('h', 1, true).delay = false;
                                ('step 1');
                                target.draw();
                            },
                            ai: {
                                value: 6,
                                useful: [3, 1],
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noh')) return 0.1;
                                        switch (target.countCards('h')) {
                                            case 0:
                                                return 0.5;
                                            case 1:
                                                return 0;
                                            case 2:
                                                return -1.5;
                                            default:
                                                return -1;
                                        }
                                    },
                                },
                                order: 8,
                                tag: {
                                    loseCard: 1,
                                    discard: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_zhiliao: {
                            type: 'basic',
                            range: {
                                global: 2,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                target.chooseToDiscard(true, 'h');
                                target.recover();
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_zhishui: {
                            type: 'basic',
                            enable: true,
                            filterTarget: true,
                            content() {
                                var list = [];
                                for (var i = 0; i < 1; i++) {
                                    list.push(game.createCard('shan'));
                                }
                                target.gain(list, 'gain2');
                            },
                            ai: {
                                order: 4.5,
                                value: [5, 1],
                                tag: {
                                    gain: 1,
                                    norepeat: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (target == player) {
                                            if (!target.hasShan()) return 2;
                                            var num = target.needsToDiscard(2);
                                            if (num == 0) return 1.5;
                                            if (num == 1) return 1;
                                            return 0.5;
                                        } else {
                                            switch (target.countCards('h')) {
                                                case 0:
                                                    return 2;
                                                case 1:
                                                    return 1.5;
                                                case 2:
                                                    return 1;
                                                default:
                                                    return 0.5;
                                            }
                                        }
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_jiushuyuyi: {
                            type: '神秘',
                            savable: true,
                            selectTarget: -1,
                            content() {
                                'step 0';
                                target.recover(2);
                                ('step 1');
                                if (target.isIn()) {
                                    target.chooseToDiscard([1, Infinity], 'e', '弃置装备区内的任意张牌？');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    target.recover(result.cards.length);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 6,
                                    useful: 10,
                                    value: [8, 6.5, 5, 4],
                                },
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                    save: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_shiyu: {
                            type: '神秘',
                            enable: true,
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            content() {
                                target.loseMaxHp();
                                target.recover(2);
                                target.discard(target.getCards('hej'));
                                target.addTempSkill('lg_shiyu1', { player: 'damageAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [1, 1],
                                    value: [1, 1],
                                },
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h', 'tao')) return 0;
                                        var nh = target.countCards('h');
                                        if (nh <= 2) return 1;
                                        if (target.hp == 1 && target.maxHp > 2) return 1;
                                        return 0;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_yihaizhilei: {
                            fullskin: true,
                            type: '神秘',
                            enable: true,
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('lg_yihaizhilei3')) player.popup('已达进阶上限', 'fire') && player.draw(3);
                                ('step 1');
                                if (player.hasSkill('lg_yihaizhilei2')) player.removeSkill('lg_yihaizhilei2') && player.addSkill('lg_yihaizhilei3');
                                ('step 2');
                                if (player.hasSkill('lg_yihaizhilei1')) player.removeSkill('lg_yihaizhilei1') && player.addSkill('lg_yihaizhilei2');
                            },
                            ai: {
                                basic: {
                                    useful: [1, 1],
                                    value: [1, 1],
                                },
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h', 'tao')) return 0;
                                        var nh = target.countCards('h');
                                        if (nh <= 2) return 1;
                                        if (target.hp == 1 && target.maxHp > 2) return 1;
                                        return 0;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                        },
                        lg_yihaizhiyuan: {
                            type: '闪耀',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            content() {
                                'step 0';
                                event.num = 3;
                                var list = [];
                                event.list = list;
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (lib.filter.filterCard({ name: lib.inpile[i] }, target)) {
                                        var info = lib.card[lib.inpile[i]];
                                        if (info.type == 'trick' && !info.multitarget && !info.notarget) {
                                            if (Array.isArray(info.selectTarget)) {
                                                if (info.selectTarget[0] > 0 && info.selectTarget[1] >= info.selectTarget[0]) {
                                                    list.push(lib.inpile[i]);
                                                }
                                            } else if (typeof info.selectTarget == 'number') {
                                                list.push(lib.inpile[i]);
                                            }
                                        }
                                    }
                                }
                                ('step 1');
                                var list = event.list;
                                while (list.length) {
                                    var card = { name: list.randomRemove() };
                                    var info = get.info(card);
                                    var targets = game.filterPlayer(function (current) {
                                        return lib.filter.filterTarget(card, target, current);
                                    });
                                    if (targets.length) {
                                        targets.sort(lib.sort.seat);
                                        if (info.selectTarget == -1) {
                                            target.useCard(card, targets, 'noai');
                                        } else {
                                            var num = info.selectTarget;
                                            if (Array.isArray(num)) {
                                                if (targets.length < num[0]) continue;
                                                num = num[0] + Math.floor(Math.random() * (num[1] - num[0] + 1));
                                            } else {
                                                if (targets.length < num) continue;
                                            }
                                            target.useCard(card, targets.randomGets(num), 'noai');
                                        }
                                        if (--event.num > 0) {
                                            event.redo();
                                        }
                                        break;
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                value: 8,
                                useful: 3,
                                result: {
                                    target: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_shanyaozhanfang: {
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            type: 'trick',
                            content() {
                                'step 0';
                                target.judge(function (card) {
                                    return card.suit == 'club' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.recover(3);
                                } else {
                                    target.drawTo(5);
                                }
                            },
                            ai: {
                                order: 4,
                                value: [7, 3],
                                useful: [6, 3],
                                result: {
                                    target(player, target) {
                                        var eff = get.recoverEffect(target, player, target);
                                        if (eff <= 0) return 0;
                                        var num = target.maxHp - target.hp;
                                        if (num < 1) return 0;
                                        if (num == 1) return 1;
                                        if (target.hp == 1) return 2.5;
                                        return 2;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_chongneng: {
                            type: 'basic',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            selectTarget: -1,
                            content() {
                                var list = [];
                                list.push(get.cardPile2('juedou'));
                                list.push(get.cardPile2('huogong'));
                                list.push(get.cardPile2('nanman'));
                                list.push(get.cardPile2('wanjian'));
                                list.push(get.cardPile2('chuqibuyi'));
                                list.push(get.cardPile2('sha'));
                                list.push(get.cardPile2('lg_fushijian'));
                                list.push(get.cardPile2('lg_qinshi'));
                                for (var i = 0; i < list.length; i++) {
                                    if (!list[i]) list.splice(i--, 1);
                                }
                                list = [list.randomGet()];
                                var sha = get.cardPile2('sha');
                                if (sha) {
                                    if (list.length) {
                                        list.push(sha);
                                    } else {
                                        sha.remove();
                                        list.push(sha);
                                        var sha2 = get.cardPile2('sha');
                                        if (sha2) {
                                            list.push(sha2);
                                        }
                                    }
                                }
                                if (list.length) {
                                    target.gain(list, 'gain2', 'log');
                                }
                            },
                            ai: {
                                value: 8,
                                useful: [6, 1],
                                result: {
                                    player: 1,
                                },
                                order: 6,
                            },
                            fullimage: true,
                        },
                        lg_huanxingtunmo: {
                            type: 'basic',
                            enable: true,
                            filterTarget(card, player, target) {
                                return !target.isMinHandcard();
                            },
                            selectTarget: -1,
                            content() {
                                if (target.countCards('h')) {
                                    target.randomDiscard('h');
                                } else {
                                    player.recover();
                                    target.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                                }
                            },
                            ai: {
                                basic: {
                                    order: 6,
                                    value: [6, 1],
                                    useful: [4, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h')) return -1;
                                        return -2;
                                    },
                                },
                                tag: {
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_heitazhidie: {
                            type: '星穹',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.countCards('ej') > 0;
                            },
                            content() {
                                var es = target.getCards('ej');
                                if (es.length) target.next.gain(es, 'gain2', 'log');
                            },
                            ai: {
                                order: 10,
                                tag: {
                                    gain: 1,
                                },
                                basic: {
                                    useful: 0.5,
                                    value: 0.5,
                                },
                                result: {
                                    target(player, target) {
                                        var e5 = target.getEquip(5);
                                        if (e5 && e5.name == 'muniu' && e5.cards && e5.cards.length > 1) return -1;
                                        if (
                                            target.countCards('e', function (card) {
                                                return get.value(card, target) <= 0;
                                            }) ||
                                            target.hasSkillTag('noe')
                                        )
                                            return 1;
                                        return 0;
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_bianxingqiong: {
                            type: 'special',
                            selectTarget: -1,
                            modTarget: true,
                            toself: true,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            content() {
                                'step 0';
                                if (player.hasSkill('lg_bianxingqiong3')) player.popup('已达进阶上限', 'fire') && player.draw(3);
                                ('step 1');
                                if (player.hasSkill('lg_bianxingqiong2')) player.removeSkill('lg_yihaizhilei2') && player.addSkill('lg_bianxingqiong3');
                                ('step 2');
                                if (player.hasSkill('lg_bianxingqiong')) player.removeSkill('lg_yihaizhilei1') && player.addSkill('lg_bianxingqiong2');
                            },
                            ai: {
                                basic: {
                                    useful: [1, 1],
                                    value: [1, 1],
                                },
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.countCards('h', 'tao')) return 0;
                                        var nh = target.countCards('h');
                                        if (nh <= 2) return 1;
                                        if (target.hp == 1 && target.maxHp > 2) return 1;
                                        return 0;
                                    },
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            fullskin: true,
                        },
                        lg_xuehua: {
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (get.color(card) == 'club') return -3;
                                return 0;
                            },
                            effect() {
                                if (result.bool == false) {
                                    player.draw(3);
                                    player.randomDiscard();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                    useful: 1,
                                    value: 6,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('noturn')) return 0;
                                        return -3;
                                    },
                                },
                            },
                            selectTarget: 1,
                            enable: true,
                            content() {
                                if (lib.filter.judge(card, player, target) && cards.length && get.position(cards[0], true) == 'o') target.addJudge(card, cards);
                            },
                            allowMultiple: false,
                            fullimage: true,
                        },
                        lg_shengbeiqiyue: {
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_nei_shengbei', { player: 'damageAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_emozhiyin: {
                            type: 'basic',
                            enable: true,
                            wuxieable: true,
                            outrange: {
                                globalFrom: 3,
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                'step 0';
                                if (!target.countCards('h', { color: 'red' })) {
                                    target.loseHp();
                                    event.finish();
                                } else {
                                    target.chooseToDiscard({ color: 'red' }, '弃置一张红色手牌？').ai = function (card) {
                                        return 8 - get.value(card);
                                    };
                                }
                                ('step 1');
                                if (!result.bool) {
                                    target.loseHp();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 9,
                                    value: 3,
                                    useful: 1,
                                },
                                result: {
                                    target: -2,
                                },
                                tag: {
                                    discard: 1,
                                    loseHp: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_dengweichuansuo: {
                            type: '神秘',
                            enable: true,
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                if (target.countCards('hej')) {
                                    var next = player.gainPlayerCard('hej', target, true);
                                    next.visible = true;
                                    next.delay = false;
                                } else {
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.bool) {
                                }
                                ('step 2');
                                target.draw(false);
                                target.$draw();
                                ('step 3');
                                player.draw();
                            },
                            ai: {
                                order: 9.5,
                                value: 6,
                                useful: 3,
                                result: {
                                    target(player, target) {
                                        if (get.attitude(player, target) > 0) {
                                            var js = target.getCards('j');
                                            if (js.length) {
                                                var jj = js[0].viewAs ? { name: js[0].viewAs } : js[0];
                                                if (jj.name == 'lg_dengweichuansuo') return 3;
                                                if (js.length == 1 && get.effect(target, jj, target, player) >= 0) {
                                                    return 0;
                                                }
                                                return 3;
                                            }
                                        }
                                        var es = target.getCards('e');
                                        var nh = target.countCards('h');
                                        var noe = es.length == 0 || target.hasSkillTag('noe');
                                        var noe2 = es.length == 1 && es[0].name == 'baiyin' && target.hp < target.maxHp;
                                        var noh = nh == 0 || target.hasSkillTag('noh');
                                        if (noh && noe) return 0;
                                        if (noh && noe2) return 0.01;
                                        if (get.attitude(player, target) <= 0) return target.countCards('he') ? -1.5 : 1.5;
                                        return 0.1;
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_shengeshenghua: {
                            type: '神',
                            enable: true,
                            filterTarget: true,
                            content() {
                                if (target.isMinHandcard()) {
                                    target.recover(2);
                                    player.gain(game.createCard(get.inpile('delay').randomGet()), 'draw');
                                } else {
                                    target.gainMaxHp();
                                }
                            },
                            ai: {
                                basic: {
                                    order: 6,
                                    value: [6, 1],
                                    useful: [4, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (target.isMinHandcard()) return 2;
                                        return 1;
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_juezhanqianxi: {
                            type: 'trick',
                            enable: true,
                            selectTarget: -1,
                            filterTarget: true,
                            reverseOrder: true,
                            content() {
                                'step 0';
                                target.chooseToDiscard([1, 2], 'e').ai = function (card) {
                                    if (get.damageEffect(target, player, target, 'thunder') >= 0) {
                                        if (target.hasSkillTag('maixie')) {
                                            if (ui.selected.cards.length) return 0;
                                        } else {
                                            return 0;
                                        }
                                    }
                                    if (player.hasSkillTag('notricksource')) return 0;
                                    if (target.hasSkillTag('notrick')) return 0;
                                    if (card.name == 'tao') return 0;
                                    if (target.hp == 1 && card.name == 'jiu') return 0;
                                    if (get.type(card) != 'basic') {
                                        return 10 - get.value(card);
                                    }
                                    return 8 - get.value(card);
                                };
                                ('step 1');
                                if (!result.bool || result.cards.length < 2) {
                                    if (result.bool) target.recover(2 - result.cards.length, 'thunder');
                                    else target.recover(2);
                                }
                            },
                            ai: {
                                basic: {
                                    order: 7,
                                    useful: [5, 1],
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nothunder')) return 0;
                                        if (player.hasUnknown(2)) return 0;
                                        var nh = target.countCards('he');
                                        if (target == player) nh--;
                                        if (nh == 2) return -2.5;
                                        if (nh == 1) return -3;
                                        if (nh == 0) return -4;
                                        return -2;
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    natureDamage: 1,
                                    thunderDamage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                    discard: 2,
                                    loseCard: 2,
                                },
                            },
                            fullimage: true,
                        },
                        lg_jinjijiebei: {
                            enable: true,
                            type: 'basic',
                            toself: true,
                            filterTarget(card, player, target) {
                                return player == target;
                            },
                            selectTarget: -1,
                            modTarget: true,
                            content() {
                                'step 0';
                                target.changeHujia();
                                target.recover();
                                ('step 1');
                                if (target.countCards('e')) {
                                    target.chooseToDiscard('e', true);
                                } else {
                                    player.draw(2);
                                }
                            },
                            ai: {
                                order: 8.5,
                                value: 7,
                                useful: 3,
                                result: {
                                    target: 1,
                                },
                            },
                            fullimage: true,
                        },
                        lg_zhihui: {
                            type: 'basic',
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.countCards('e') > 0;
                            },
                            content() {
                                'step 0';
                                target.chooseToDiscard('e', [1, target.countCards('e')], '弃置装备区内的任意张牌？').ai = function (card) {
                                    return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    target.recover(result.cards.length);
                                    target.draw(result.cards.length);
                                }
                            },
                            ai: {
                                order: 1.5,
                                value: [4, 1],
                                tag: {
                                    norepeat: 1,
                                },
                                result: {
                                    target(player, target) {
                                        if (target == player) {
                                            var cards = player.getCards('e');
                                            var num = -1;
                                            for (var i = 0; i < cards.length; i++) {
                                                if (get.value(cards[i]) < 6) num++;
                                            }
                                            if (player.needsToDiscard() && num < 1) {
                                                num = 1;
                                            }
                                            return Math.max(0, num);
                                        } else {
                                            if (!player.needsToDiscard() && target.countCards('e') <= 3) {
                                                return 0;
                                            }
                                            return target.countCards('e') / 2;
                                        }
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_jingzhunyiji: {
                            type: 'basic',
                            enable(card, player) {
                                var enemies = player.getEnemies();
                                return game.hasPlayer(function (current) {
                                    return current.hp > player.hp && enemies.includes(current);
                                });
                            },
                            notarget: true,
                            contentBefore() {
                            },
                            content() {
                                var enemies = player.getEnemies();
                                var list = game.filterPlayer(function (current) {
                                    return current.hp > player.hp && enemies.includes(current);
                                });
                                if (list.length) {
                                    var target = list.randomGet();
                                    player.line(target);
                                    target.damage(2);
                                }
                            },
                            ai: {
                                value: 8,
                                useful: [6, 1],
                                result: {
                                    player: 1,
                                },
                                order: 0.6,
                            },
                            fullimage: true,
                        },
                        lg_zhixu: {
                            fullskin: true,
                            type: '天赋',
                            range: {
                                global: 1,
                            },
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            content() {
                                player.addTempSkill('lg_zhong_zhixu', { player: 'dyingAfter' });
                            },
                            ai: {
                                basic: {
                                    useful: [7, 2],
                                    value: [7, 2],
                                },
                                order: 2.2,
                                result: {
                                    target: 2,
                                },
                                tag: {
                                    recover: 1,
                                },
                            },
                            selectTarget: 1,
                            image: 'ext:世界之塔/image/lg_ezhao.png',
                        },
                        lg_qingfu: {
                            type: '混沌',
                            filterTarget: true,
                            global: 'lg_qingfu',
                            content() {
                                var evt = event.getParent(3)._trigger;
                                evt.cancel();
                                if (evt.source) {
                                    evt.source.draw(2);
                                }
                            },
                            ai: {
                                order: 1,
                                value: [5, 1],
                                useful: [6, 1],
                                result: {
                                    target(player, target) {
                                        var evt = _status.event.getTrigger();
                                        var eff = get.damageEffect(target, evt.source, target, evt.nature);
                                        if (eff > 0) return -1;
                                        if (eff < 0) return 2;
                                        return 0;
                                    },
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                    },
                    translate: {
                        lg_wanwuzhishi: '万物之始',
                        lg_wanwuzhishi_info: '—天赋传承—',
                        lg_ezhao: '噩兆',
                        lg_ezhao_info: '—天赋传承—',
                        lg_poxiaohuanghuazhiguan: '破晓皇花之冠',
                        lg_poxiaohuanghuazhiguan_info: '—天赋传承—',
                        lg_douzhijifa: '斗志激发',
                        lg_douzhijifa_info: '—天赋传承—',
                        lg_qidao: '祈祷',
                        lg_qidao_info: '—天赋传承—',
                        lg_shufu: '束缚',
                        lg_shufu_info: '出牌阶段,对一名角色使用,选择一张延时锦囊牌置入其的判定区,你摸一张牌.',
                        lg_fushijian: '腐蚀箭',
                        lg_fushijian_info: '出牌阶段,对攻击范围内的一名其他角色造成1点火焰伤害,其获得一张【毒】.',
                        lg_xinkuangshenyi: '心旷神怡',
                        lg_xinkuangshenyi_info: '出牌阶段,对一名角色使用.其随机使用三张类别均不同的装备牌,弃置等量的手牌,依次摸三张牌.',
                        lg_yitilazhihua: '伊提拉之花',
                        lg_yitilazhihua_info: '出牌阶段,对你与一名其他角色使用.你与其各弃置至多五张牌,摸等量的牌,回复等量的体力.若以此法弃置的牌有♣️️,对应数值+3.',
                        lg_xindong: '心动',
                        lg_xindong_info: '出牌阶段,对一名角色使用,其摸两张牌.若其的手牌数为全场最少,改为直到其下回合结束.每当其受到伤害后,其随机获得各一张手牌中没有的类别,选择是否使用之.',
                        lg_qinshi: '侵蚀',
                        lg_qinshi_info: '出牌阶段,对一名其他角色使用,其选择是否打出一张【杀】.若其选择否,你对其造成2点伤害,其的非锁定技失效,直到下回合开始.',
                        lg_lingfeng: '灵风',
                        lg_lingfeng_info: '出牌阶段,对一名角色使用,其弃置一张手牌,摸一张牌.',
                        lg_zhiliao: '治疗',
                        lg_zhiliao_info: '出牌阶段,对距离为2以内的一名受伤角色使用,其弃置一张手牌,回复1点体力.',
                        lg_zhishui: '止水',
                        lg_zhishui_info: '出牌阶段,对一名角色使用,其获得一张【闪】.',
                        lg_jiushuyuyi: '救赎羽翼',
                        lg_jiushuyuyi_info: '对一名处于濒死状态的角色使用,其回复2点体力,其可以弃置装备区内的任意张牌,回复等量的体力.',
                        lg_shiyu: '时域',
                        lg_shiyu_info: '出牌阶段,对你使用,减1点体力上限,回复2点体力,将区域内的牌均置入弃牌堆;且直到你受到伤害为止,当你需要使用或打出一张【闪】时,你可以展示一张【杀】,视为使用之.',
                        lg_yihaizhilei: '忆海之泪',
                        lg_yihaizhilei_info: '— 天赋进阶 —',
                        lg_yihaizhiyuan: '忆海之源',
                        lg_yihaizhiyuan_info: '出牌阶段,对随机角色各视为依次使用三张普通锦囊牌.',
                        lg_shanyaozhanfang: '闪耀绽放',
                        lg_shanyaozhanfang_info: '出牌阶段,对一名受伤角色使用,其判定一次.若为♣️️,其回复3点体力;否则其将手牌数补至五张.',
                        lg_chongneng: '充能',
                        lg_chongneng_info: '出牌阶段,对你使用,随机获得一张伤害类的牌.',
                        lg_huanxingtunmo: '幻星吞没',
                        lg_huanxingtunmo_info: '出牌阶段,令手牌数为全场最多的角色各随机弃置一张手牌.若没有手牌,其随机废除一个装备栏,你回复1点体力.',
                        lg_heitazhidie: '黑塔之蝶',
                        lg_heitazhidie_info: '出牌阶段,对一名场上有牌的角色使用,令其的下家获得其场上的所有牌.',
                        lg_bianxingqiong: '彼岸星穹',
                        lg_bianxingqiong_info: '— 天赋进阶 —',
                        lg_xuehua: '雪花',
                        lg_xuehua_info: '出牌阶段,对一名其他角色使用.若为♣️️,其摸三张牌,随机弃置一张牌.',
                        lg_shengbeiqiyue: '圣杯契约',
                        lg_shengbeiqiyue_info: '—天赋传承—',
                        lg_emozhiyin: '恶魔之印',
                        lg_emozhiyin_info: '出牌阶段,对一名与你距离大于2的角色使用,令其选择一项:①弃置一张红色手牌;②失去1点体力.',
                        lg_dengweichuansuo: '等维穿梭',
                        lg_dengweichuansuo_info: '出牌阶段,观看一名其他角色的手牌,获得其区域内的一张牌,你与其各摸一张牌.',
                        lg_shengeshenghua: '神格升华',
                        lg_shengeshenghua_info: '出牌阶段,令一名角色加1点体力上限.若其的手牌数为全场最少,改为其回复2点体力,你随机获得一张延时锦囊牌.',
                        lg_juezhanqianxi: '决战前夕',
                        lg_juezhanqianxi_info: '出牌阶段,对所有角色使用,随机弃置装备区内的牌且至多两张,回复等量的体力.',
                        lg_jinjijiebei: '紧急戒备',
                        lg_jinjijiebei_info: '出牌阶段,对你使用,获得1点护甲,回复1点体力.若你的装备区内没有牌,你摸两张牌;否则弃置装备区内的一张牌.',
                        lg_zhihui: '指挥',
                        lg_zhihui_info: '出牌阶段,对任意名角色使用,这些角色各选择是否弃置装备区内的任意张牌.若选择是,其回复等量的体力,摸等量的牌.',
                        lg_jingzhunyiji: '精准一击',
                        lg_jingzhunyiji_info: '出牌阶段,随机对一名体力值大于你的敌方角色使用,你对其造成2点神圣伤害.',
                        lg_zhixu: '秩序',
                        lg_zhixu_info: '—天赋传承—',
                        lg_qingfu: '倾覆',
                        lg_qingfu_info: '一名角色受到伤害时,对其使用,令伤害来源摸两张牌,防止其受到的伤害.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:世界之塔/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:世界之塔/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('世界之塔');
                lib.config.cards.add('世界之塔');
                lib.translate.世界之塔_card_config = '世界之塔';
                return QQQ;
            });
        },
        package: {
            intro: "他就不这样,虚虚实实,忽近忽远的.他知道说一些话让你胡思乱想,把你的心悬起来,再当作什么都没发生一样,再把这根弦卸掉.你说你要是执着一个人,你会这样？<br/> <br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '尘',
            version: '7.6',
        },
    };
});

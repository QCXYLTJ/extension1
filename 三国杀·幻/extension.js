import { lib, game, ui, get, ai, _status } from '../../noname.js';
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '三国杀·幻',
        content(config, pack) {
            game.huanCopyFilesFromDirToDir = function (fromPath, toPath, list, callback, namefilter, process, errorContinue) {
                if (!game.readFile || !game.writeFile) {
                    if (callback) {
                        callback(false);
                    }
                    return;
                }
                if (typeof list == 'string') {
                    var from = fromPath + '/' + list;
                    game.readFile(
                        from,
                        function (data) {
                            var name = list;
                            if (namefilter) {
                                name = namefilter(name);
                            }
                            game.writeFile(data, toPath, name, function () {
                                if (process) {
                                    process(name);
                                }
                                if (callback) {
                                    callback(true);
                                }
                            });
                        },
                        function (err) {
                            if (callback) {
                                callback(false);
                            }
                        }
                    );
                    return;
                }
                if (list.length == 0) {
                    if (callback) {
                        callback(true);
                    }
                    return;
                }
                var lst = list.slice(0);
                var name = lst.shift();
                game.huanCopyFilesFromDirToDir(
                    fromPath,
                    toPath,
                    name,
                    function (success) {
                        if (!success) {
                            if (callback) {
                                callback(false);
                            }
                            if (!errorContinue) {
                                return;
                            }
                        }
                        game.huanCopyFilesFromDirToDir(
                            fromPath,
                            toPath,
                            lst,
                            function (success) {
                                if (callback) {
                                    callback(success);
                                }
                            },
                            namefilter,
                            process,
                            errorContinue
                        );
                    },
                    namefilter,
                    process,
                    errorContinue
                );
            };
            game.huanHasExtension = function (str) {
                return lib.config.extensions && lib.config.extensions.includes(str) && lib.config['extension_' + str + '_enable'];
            };
            if (!lib.huan)
                lib.huan = {
                    developer: false,
                    packs: [],
                    func: {},
                };
            lib.huan.func.washTrigger = function () {
                _status.event.trigger('onWashTrigger');
            };
            lib.onwash.add(lib.huan.func.washTrigger);
        },
        precontent(sgs_huan) {
            lib.element.player.recycleCards = function (cards, card) {
                var custom = this.getHistory('custom', (e) => e.recycleCards);
                if (!custom.length) {
                    this.getHistory('custom').push({ recycleCards: 1 });
                } else {
                    custom[0].recycleCards++;
                }
                if (get.itemtype(cards) == 'card') {
                    cards = [cards];
                }
                var next = game.createEvent('recycleCards');
                next.player = this;
                next.cards = cards;
                if (card) next.card = card;
                next.setContent('recycleCards');
                return next;
            };
            lib.element.content.recycleCards = function () {
                var gain = cards.slice(0);
                var mark = [];
                var map = {};
                for (var i of cards) {
                    var owner = get.owner(i, 'judge');
                    if (owner) {
                        var id = owner.playerid;
                        if (!map[id]) map[id] = [];
                        map[id].push(i);
                        gain.remove(i);
                    }
                }
                for (var i in map) {
                    var owner = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                    player.gain(map[i], owner, 'give').set('type', 'recycleCards');
                }
                gain.removeArray(
                    player.getCards('h', function (cardx) {
                        return gain.includes(cardx);
                    })
                );
                if (gain.length) player.gain(gain, 'gain2').set('type', 'recycleCards');
                if (cards.length <= 0 && card) player.addHuanMark([card]).set('type', 'recycleCards');
                player.getHistory('custom').push(event);
            };
            lib.element.player.addHuanMark = function (cards) {
                if (!cards) cards = get.cards(1);
                if (!Array.isArray(cards)) cards = [cards];
                var next = game.createEvent('addHuanMark');
                next.player = this;
                next.cards = cards;
                next.setContent('addHuanMark');
                return next;
            };
            lib.element.content.addHuanMark = function () {
                'step 0';
                player.getHistory('custom').push(event);
                if (!player.storage._gs_hs_huanhua) player.storage._gs_hs_huanhua = [];
                for (var i of cards) {
                    var card = [get.translation(get.type2(i)), '', i.name, i.nature];
                    player.storage._gs_hs_huanhua.push(card);
                    player.markSkill('_gs_hs_huanhua');
                }
                ('step 1');
                var num = 0;
                game.hasPlayer(function (c) {
                    if (c.storage._gs_hs_huanhua && c.storage._gs_hs_huanhua.length) num += c.storage._gs_hs_huanhua.length;
                });
                if (num > 3) {
                    game.hasPlayer(function (c) {
                        if (c.storage._gs_hs_huanhua && c.storage._gs_hs_huanhua.length) {
                            c.storage._gs_hs_huanhua = [];
                            c.unmarkSkill('_gs_hs_huanhua');
                        }
                    });
                }
            };
            game.import('character', function () {
                var sgs_huan = {
                    name: 'sgs_huan',
                    connect: true,
                    characterSort: {
                        sgs_huan: {
                            standard1: [],
                        },
                    },
                    character: {
                        huan普净: ['male', 'qun', 3, ['huan超度', 'huan禅心', 'huan真言'], ['des:法名普净,原是汜水关镇国寺方丈 ,至玉泉山结草为庵,每天坐禅参道,某日夜遇关公显魂,法师以颜良点悟关公,此间种种皆为因果.后关公往往于玉泉山显圣护民']],
                        huan花鬘: ['female', 'shu', 4, ['huan羽刃'], ['des:三国时期南蛮王孟获与祝融夫人的女儿,是一位善使刀枪作战的女武将.关索的夫人之一.诸葛亮征伐南蛮时,为关羽之子关索所俘,遂与关索产生情愫.']],
                        huan洛神: ['female', 'shen', 3, ['huan诗想', 'huan无尘'], ['des:洛神即宓妃,是中国先秦神话中,司掌洛河的地方水神.在中古时期洛神形象得以丰富和发展,逐渐变身为世俗的美人,成为男性文人寄托情感的对象.在曹植人神相恋的千古名篇<洛神赋>中,洛神被作为理想美神的化身.']],
                        //"huan妲己": ["female", "shen", 3, ["huan幻化", "huan魅舞"], ["des:妲己"]],
                        dz_hs_hucheer: ['male', 'qun', 4, ['dz_hs_daoji'], ['character:hucheer']],
                        dz_hs_zhouchu: ['male', 'wu', 4, ['dz_hs_chuhai', 'dz_hs_guixin'], []],
                        dz_hs_dongfeng: ['male', 'wu', 3, ['dz_hs_sanqing', 'dz_hs_xinglin'], []],
                        dz_hs_yangxiu: ['male', 'wei', 3, ['dz_hs_zhijie', 'dz_hs_danlao', 'dz_hs_jilei'], []],
                        dz_hs_masu: ['male', 'shu', 3, ['dz_hs_xinzhan', 'dz_hs_huilei'], []],
                        dz_hs_jikang: ['male', 'wei', 3, ['dz_hs_qingxian', 'dz_hs_juexiang'], []],
                        dz_hs_wushen: ['male', 'shen', 1, ['dz_hs_yuanshi', 'dz_hs_moke'], []],
                        dz_hs_ji_wushen: ['male', 'shen', 99, ['dz_hs_ji_yuanshi', 'dz_hs_tianjie'], []],
                    },
                    characterIntro: {},
                    characterTitle: {
                        bjzm洛神: '神光离合',
                    },
                    //技能代码
                    skill: {
                        /*普净 HUAN 008  势力:群  称号:禅师  体力:3
                        超度——锁定技,当一名角色因满体力而有未回复的体力时,你摸一张牌并获得一枚超度标记.
                        禅心——准备阶段,你可以弃一枚超度标记令一名角色回复1点体力,该角色造成和受到的伤害至多为1且无来源直到你下个回合开始.
                        真言——限定技,你可以将所有角色区域里各一张牌移出游戏,你可以从中获得两张名称字数之和为6的牌,
                              若为本次移出的两张牌,则交换对应角色的当前体力值.*/
                        huan超度: {
                            trigger: {
                                global: 'recoverBefore',
                            },
                            filter: (event, player) => event.player.hp + event.num > event.player.maxHp,
                            content() {
                                player.draw();
                                player.addMark('huan超度', 1);
                            },
                            marktext: '超度',
                            intro: { content: '你可以弃一枚超度标记令一名角色回复1点体力,该角色造成和受到的伤害至多为1且无来源直到你下个回合开始.' },
                            forced: true,
                            group: 'huan超度桃园',
                        },
                        huan超度桃园: {
                            trigger: { global: 'useCardBegin' },
                            filter(event, player) {
                                return event.card.name == 'taoyuan';
                            },
                            forced: true,
                            content() {
                                var targets = game.filterPlayer((c) => c.isHealthy());
                                for (const target of targets) {
                                    player.draw();
                                    player.addMark('huan超度', 1);
                                }
                            },
                        },
                        huan禅心: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            // check:function (event,player) {
                            //     return game.hasPlayer((c)=>c.isDamaged()&&get.attitude(player,c)>0);
                            // },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('huan超度');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, get.prompt2('huan禅心'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var current = game.filterPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && current.isDamaged();
                                        });
                                        if (current.length) return current.includes(target);
                                        return get.attitude(player, target) > 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.removeMark('huan超度', 1);
                                    event.target = result.targets[0];
                                    event.target.recover();
                                    event.target.addTempSkill('huan禅心无来源', { player: 'phaseBegin' });
                                }
                            },
                        },
                        huan禅心无来源: {
                            mark: true,
                            marktext: '禅心',
                            intro: { content: '你造成和受到的伤害至多为1且无来源' },
                            trigger: {
                                player: 'damageBegin',
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.cancel();
                                trigger.player.loseHp();
                                //trigger.player.damage(1, 'nosource', 'nocard');
                            },
                            forced: true,
                        },
                        huan真言: {
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.awakenSkill('huan真言');
                                event.targets = game.filterPlayer();
                                event.list = [];
                                event.cards1 = [];
                                ('step 1');
                                event.target = event.targets.shift();
                                player.choosePlayerCard(event.target, 'hej', get.translation(event.target) + '的一张牌').set('ai', function (button) {
                                    return -get.attitude(player, event.target) * get.buttonValue(button);
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    event.list.push([result.links[0], event.target]);
                                    event.cards1.push(result.links[0]);
                                }
                                ('step 3');
                                if (event.targets.length) {
                                    event.goto(1);
                                } else {
                                    player.gain(event.cards1, 'giveAuto');
                                    game.cardsGotoSpecial(event.cards1);
                                }
                                ('step 4');
                                var specialCards = Array.from(ui.special.childNodes);
                                player
                                    .chooseCardButton(specialCards, 2, '你可以从中获得两张名称字数之和为6的牌,\n' + '                                  若为本次移出的两张牌,则交换对应角色的当前体力值.')
                                    .set('filterButton', function (button) {
                                        if (ui.selected.buttons.length) {
                                            return get.translation(button.link.name).length + get.translation(ui.selected.buttons[0].name).length == 6;
                                        }
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return player.getUseValue(button.link);
                                    });
                                ('step 5');
                                if (result.links?.length) {
                                    event.cards = result.links;
                                    player.gain(event.cards, 'gain2');
                                    var count = 0;
                                    for (const list of event.list) {
                                        if (list[0] == event.cards[0]) {
                                            event.target1 = list[1];
                                            count++;
                                        }
                                        if (list[0] == event.cards[1]) {
                                            event.target2 = list[1];
                                            count++;
                                        }
                                    }
                                    if (count == 2) {
                                        event.hp1 = event.target1.hp;
                                        event.hp2 = event.target2.hp;
                                        if (event.target2.hp > event.target1.hp) {
                                            // for (var i = 0; i < event.target2.hp - event.target1.hp; i++) {
                                            //     event.target1.recover();
                                            // }
                                            event.target1.recover(event.target2.hp - event.target1.hp);
                                            event.target2.loseHp(event.target2.hp - event.target1.hp);
                                        }
                                        if (event.target1.hp > event.target2.hp) {
                                            // for (var i = 0; i < event.target1.hp-event.target2.hp; i++) {
                                            //     event.target2.recover();
                                            // }
                                            event.target2.recover(event.target1.hp - event.target2.hp);
                                            event.target2.loseHp(event.target1.hp - event.target2.hp);
                                        }
                                    }
                                }
                            },
                        },
                        dz_hs_tianjie: {
                            trigger: { player: 'phaseDrawBefore' },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            group: 'dz_hs_tianjie_damage',
                            subSkill: {
                                damage: {
                                    trigger: { global: 'washCard' },
                                    forced: true,
                                    content() {
                                        player.damage(100, 'thunder', 'nosource');
                                    },
                                },
                            },
                        },
                        dz_hs_ji_yuanshi: {
                            inherit: 'dz_hs_yuanshi',
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'heart') return true;
                                },
                                cardUsable(card) {
                                    if (card.suit == 'heart') return Infinity;
                                },
                            },
                        },
                        dz_hs_moke: {
                            trigger: { player: 'dyingAfter' },
                            content() {
                                'step 0';
                                var name = player.name1;
                                if (player.name2 && player.name2 == 'dz_hs_wushen') name = player.name2;
                                player.reinit(name, 'dz_hs_ji_wushen');
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                if (num > 0) player.recover(num);
                                ('step 2');
                                player.addSkill('dz_hs_moke_buff');
                            },
                            subSkill: {
                                buff: {
                                    trigger: { player: ['damageAfter', 'die'] },
                                    forceDie: true,
                                    forced: true,
                                    charlotte: true,
                                    firstDo: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (event.name == 'die') return true;
                                        else return event.nature && event.nature == 'thunder';
                                    },
                                    content() {
                                        var name = player.name1;
                                        if (player.name2 && player.name2 == 'dz_hs_ji_wushen') name = player.name2;
                                        player.reinit(name, 'dz_hs_wushen');
                                    },
                                },
                            },
                        },
                        dz_hs_yuanshi: {
                            enable: 'chooseToUse',
                            hiddenCard(player, name) {
                                if (get.type(name) != 'basic') return false;
                                return player.hasCard(function (card) {
                                    return card.suit == 'heart';
                                }, 'hes');
                            },
                            filter(event, player) {
                                if (
                                    !player.hasCard(function (card) {
                                        return card.suit == 'heart';
                                    }, 'hes')
                                )
                                    return false;
                                var cards = lib.inpile.filter(function (i) {
                                    return get.type(i) == 'basic' && event.filterCard && event.filterCard({ name: i }, player, event);
                                });
                                return cards.length;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var cards = lib.inpile.filter(function (i) {
                                        return get.type(i) == 'basic';
                                    });
                                    for (var i of cards) {
                                        if (!event.filterCard || !event.filterCard({ name: i }, player, event)) continue;
                                        if (i == 'sha') {
                                            list.push(['基本', '', i]);
                                            for (var j of lib.inpile_nature)
                                                if (
                                                    event.filterCard &&
                                                    event.filterCard(
                                                        {
                                                            name: i,
                                                            nature: j,
                                                        },
                                                        player,
                                                        event
                                                    )
                                                )
                                                    list.push(['基本', '', i, j]);
                                        } else list.push(['基本', '', i]);
                                    }
                                    return ui.create.dialog('渊始', [list, 'vcard']);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var card = { name: button.link[2], nature: button.link[3] };
                                    if (
                                        _status.event.parent.type != 'phase' ||
                                        game.hasPlayer(function (current) {
                                            return player.canUse(card, current) && get.effect(current, card, player, player) > 0;
                                        })
                                    ) {
                                        switch (button.link[2]) {
                                            case 'tao':
                                            case 'shan':
                                                return 5;
                                            case 'jiu': {
                                                if (player.storage.yizan && player.countCards('hs', { type: 'basic' }) > 2) return 3;
                                            }
                                            case 'sha':
                                                if (button.link[3] == 'fire') return 2.95;
                                                else if (button.link[3] == 'thunder' || button.link[3] == 'ice') return 2.92;
                                                else return 2.9;
                                        }
                                    }
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard: { suit: 'heart' },
                                        check(card, player, target) {
                                            return 6 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hes',
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张♥️️牌当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        !player.hasCard(function (card) {
                                            return card.suit == 'heart';
                                        }, 'hes')
                                    ) {
                                        return false;
                                    }
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                            },
                            group: 'dz_hs_yuanshi_gain',
                            subSkill: {
                                backup: {},
                                gain: {
                                    trigger: { player: 'phaseEnd' },
                                    content() {
                                        'step 0';
                                        event.count = 0;
                                        ('step 1');
                                        var cards = get.cards();
                                        var gain = cards.filter(function (i) {
                                            return get.color(i) == 'red';
                                        });
                                        player.showCards(cards, get.translation(player) + '发动了【渊始】');
                                        if (gain.length) {
                                            event.count++;
                                            player.gain(gain, 'gain2');
                                        }
                                        cards.removeArray(gain);
                                        if (cards.length) game.cardsDiscard(cards);
                                        ('step 2');
                                        if (event.count < 3) event.goto(1);
                                    },
                                },
                            },
                        },
                        dz_hs_juexiang: {
                            enable: 'chooseToUse',
                            filter(event, player) {
                                var list = ['h', 'e', 'j'];
                                var evt = lib.filter.filterCard;
                                if (event.filterCard) evt = event.filterCard;
                                for (var i of list) {
                                    var wuxie = player.getCards(i, { color: 'red' });
                                    var shan = player.getCards(i, { color: 'black' });
                                    if (
                                        wuxie.length == 1 &&
                                        evt(
                                            {
                                                name: 'wuxie',
                                                cards: wuxie,
                                            },
                                            player,
                                            event
                                        )
                                    )
                                        return true;
                                    if (
                                        shan.length == 1 &&
                                        evt(
                                            {
                                                name: 'shan',
                                                cards: shan,
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
                                    var listx = ['h', 'e', 'j'];
                                    var shaned = false;
                                    var wuxieed = false;
                                    for (var i of listx) {
                                        var wuxie = player.getCards(i, { color: 'red' });
                                        var shan = player.getCards(i, { color: 'black' });
                                        if (
                                            !wuxieed &&
                                            wuxie.length == 1 &&
                                            event.filterCard &&
                                            event.filterCard(
                                                {
                                                    name: 'wuxie',
                                                    cards: wuxie,
                                                },
                                                player,
                                                event
                                            )
                                        ) {
                                            wuxieed = true;
                                            list.push(['锦囊', '', 'wuxie']);
                                        }
                                        if (
                                            !shaned &&
                                            shan.length == 1 &&
                                            event.filterCard &&
                                            event.filterCard(
                                                {
                                                    name: 'shan',
                                                    cards: shan,
                                                },
                                                player,
                                                event
                                            )
                                        ) {
                                            shaned = true;
                                            list.push(['基本', '', 'shan']);
                                        }
                                    }
                                    var map = {
                                        h: '手牌',
                                        e: '装备',
                                        j: '判定',
                                    };
                                    var dialog = ui.create.dialog('绝响', 'hidden');
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (var i of listx) {
                                        if (player.isDisabled(i)) continue;
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.innerHTML = '<span>' + map[i] + '</span>';
                                        td.link = i;
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        Object.setPrototypeOf(td, lib.element.Button.prototype); //QQQ
                                        table.appendChild(td);
                                        dialog.buttons.add(td);
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add([list, 'vcard']);
                                    return dialog;
                                },
                                select: 2,
                                filter(button, player) {
                                    if (ui.selected.buttons.length) {
                                        if (typeof ui.selected.buttons[0].link == 'string') return false;
                                        var name = ui.selected.buttons[0].link[2];
                                        var color = name == 'shan' ? 'black' : 'red';
                                        if (typeof button.link == 'string') {
                                            var cards = player.getCards(button.link, { color: color });
                                        }
                                        return (
                                            cards &&
                                            cards.length == 1 &&
                                            _status.event.parent.filterCard(
                                                {
                                                    name: name,
                                                    cards: cards,
                                                },
                                                player,
                                                _status.event.parent
                                            )
                                        );
                                    } else return typeof button.link != 'string';
                                },
                                check(button) {
                                    return 1;
                                },
                                backup(links, player) {
                                    var next = {
                                        filterCard(card) {
                                            var name = lib.skill.dz_hs_juexiang_backup.viewAs.name;
                                            var color = name == 'shan' ? 'black' : 'red';
                                            return player.countCards(get.position(card), { color: color }) == 1 && get.color(card) == color;
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        check(card) {
                                            return 8 - get.value(card);
                                        },
                                        position: links[1],
                                        viewAs: { name: links[0][2] },
                                    };
                                    return next;
                                },
                                prompt(links, player) {
                                    return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                },
                            },
                            hiddenCard(player, name) {
                                var listx = ['h', 'e', 'j'];
                                for (var i of listx) {
                                    var wuxie = player.getCards(i, { color: 'red' });
                                    var shan = player.getCards(i, { color: 'black' });
                                    if (wuxie.length == 1 && name == 'wuxie') return true;
                                    if (shan.length == 1 && name == 'shan') return true;
                                }
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['dz_hs_juexiang_cardsDiscard'],
                            subSkill: {
                                backup: {},
                                //若该牌是本回合进入弃牌堆里仅有的最后一种花色的牌, 你可以失去<绝响>令一名其他角色摸三张牌并获得<绝响>
                                cardsDiscard: {
                                    trigger: { player: 'loseAfter' },
                                    filter(event, player) {
                                        if (Array.isArray(event.cards)) {
                                            var list = [];
                                            game.countPlayer2(function (current) {
                                                current.getHistory('lose', function (evt) {
                                                    if (evt.position == ui.discardPile) list.addArray(evt.cards);
                                                });
                                            });
                                            game.getGlobalHistory('cardMove', function (evt) {
                                                if (evt.name == 'cardsDiscard') list.addArray(evt.cards);
                                            });
                                            var suit0 = list.map((q) => q.suit).unique();
                                            for (var i of event.cards) {
                                                list.remove(i);
                                            }
                                            var suit = list.map((q) => q.suit).unique();
                                            return suit.length == 3 && suit0.length == 4;
                                        }
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget('绝响:是否失去【绝响】令一名其他角色摸三张牌其获得【绝响】', lib.filter.notMe).set('ai', function (target) {
                                            return get.attitude(_status.event.player, target);
                                        });
                                        ('step 1');
                                        if (result.targets?.length) {
                                            var target = result.targets[0];
                                            player.removeSkill('dz_hs_juexiang');
                                            target.draw(3);
                                            target.addSkill('dz_hs_juexiang');
                                        }
                                    },
                                },
                            },
                        },
                        dz_hs_qingxian: {
                            enable: 'phaseUse',
                            position: 'he',
                            filter(event, player) {
                                if (!player.countCards('he')) return false;
                                return !player.getStat().dz_hs_qingxian || player.getStat().dz_hs_qingxian < 7;
                            },
                            filterCard: true,
                            selectCard() {
                                var player = _status.event.player;
                                var num = 7;
                                if (player.getStat().dz_hs_qingxian) num -= player.getStat().dz_hs_qingxian;
                                return [1, num];
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            delay: false,
                            content() {
                                player.addTempSkill('dz_hs_qingxian_buff');
                                if (!player.getStat().dz_hs_qingxian) player.getStat().dz_hs_qingxian = 0;
                                player.getStat().dz_hs_qingxian += cards.length;
                                player.markSkill('dz_hs_qingxian_buff');
                            },
                            subSkill: {
                                buff: {
                                    trigger: { player: 'phaseJieshuBegin' },
                                    filter(event, player) {
                                        return player.getStat().dz_hs_qingxian && player.getStat().dz_hs_qingxian > 0;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    onremove(player) {
                                        player.unmarkSkill('dz_hs_qingxian_buff');
                                    },
                                    content() {
                                        player.draw(player.getStat().dz_hs_qingxian);
                                    },
                                    intro: {
                                        markcount(storage, player) {
                                            if (!player.getStat().dz_hs_qingxian) return 0;
                                            return player.getStat().dz_hs_qingxian;
                                        },
                                        content(storage, player) {
                                            if (!player.getStat().dz_hs_qingxian) return '暂无效果';
                                            return '结束阶段,你摸' + player.getStat().dz_hs_qingxian + '张牌';
                                        },
                                    },
                                },
                            },
                        },
                        dz_hs_huilei: {
                            audio: 2,
                            trigger: { player: 'die' },
                            forced: true,
                            forceDie: true,
                            filter(event, player) {
                                return event.source != undefined;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                trigger.source.discard(trigger.source.getCards('he'));
                                ('step 1');
                                var cardTop = get.cards()[0];
                                var cardBottom = get.bottomCards()[0];
                                var cards = Array.from(ui.special.childNodes);
                                cards.add(cardTop);
                                cards.add(cardBottom);
                                event.cards = cards;
                                ui.cardPile.insertBefore(cardTop, ui.cardPile.firstChild);
                                ui.cardPile.appendChild(cardBottom);
                                if (cards.length) {
                                    player
                                        .chooseBool('是否令' + get.translation(trigger.source) + '从牌堆顶、牌堆底、移除游戏的牌中选择至多五张获得？')
                                        .set('ai', function () {
                                            return get.attitude(_status.event.player, _status.event.getTrigger().source) > 0;
                                        })
                                        .set('forceDie', true);
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    trigger.source.chooseButton(['获得其中至多五张牌', cards], [1, 5]);
                                } else event.finish();
                                ('step 3');
                                if (result.links?.length) trigger.source.gain(result.links, 'gain2');
                                game.updateRoundNumber();
                            },
                            ai: {
                                threaten: 0.7,
                            },
                        },
                        dz_hs_xinzhan: {
                            trigger: {
                                global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            audio: 2,
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    var evt = event.getl(current);
                                    return evt && evt.hs && evt.hs.length && current.countCards('h') == 0;
                                });
                            },
                            content() {
                                'step 0';
                                event.list = game
                                    .filterPlayer(function (current) {
                                        var evt = trigger.getl(current);
                                        return evt && evt.hs && evt.hs.length;
                                    })
                                    .sortBySeat(_status.currentPhase);
                                ('step 1');
                                var target = event.list.shift();
                                if (target.countCards('h') == 0) {
                                    player.chooseBool(get.prompt2('dz_hs_xinzhan'));
                                } else event.goto(6);
                                ('step 2');
                                if (result.bool) {
                                    var cards = get.cards(3);
                                    event.cards = cards;
                                    var next = player.chooseCardButton(cards, '选择获得的♥️️牌', [1, Infinity]).set('filterButton', function (button) {
                                        return button.link.suit == 'heart';
                                    });
                                }
                                ('step 3');
                                if (result.links?.length) {
                                    event.cards.removeArray(result.links);
                                    player.gain(result.links, 'gain2');
                                }
                                ('step 4');
                                if (event.cards.length) {
                                    var next = player.chooseToMove();
                                    next.set('list', [['牌堆顶', event.cards], ['牌堆底']]);
                                    next.set('prompt', '点击将牌移动到牌堆顶或牌堆底');
                                    next.processAI =
                                        event.processAI ||
                                        function (list) {
                                            var cards = list[0][1],
                                                player = _status.event.player;
                                            const top = [], bottom = cards;
                                            for (const i of player.getCards('j')) {
                                                const judge = get.judge(i);
                                                bottom.sort((a, b) => (judge(b) - judge(a))); //价值高的牌放前面
                                                if (bottom.length) {
                                                    top.push(bottom.shift());
                                                }
                                            }
                                            bottom.sort((a, b) => (get.value(b) - get.value(a))); //把价值高的牌放前面
                                            while (bottom.length) {
                                                top.push(bottom.shift());
                                            }
                                            return [top, bottom];
                                        };
                                } else event.goto(6);
                                ('step 5');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                game.updateRoundNumber();
                                ('step 6');
                                if (event.list.length) event.goto(1);
                            },
                            ai: {
                                threaten: 1.3,
                                expose: 0.2,
                                noh: true,
                            },
                        },
                        dz_hs_jilei: {
                            trigger: { player: 'damageBegin4' },
                            forced: true,
                            filter(event, player) {
                                return !event.cards || !event.cards.length;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        dz_hs_danlao: {
                            audio: 2,
                            trigger: {
                                target: 'useCardToTargeted',
                                global: 'dz_hs_sanqing_type',
                            },
                            filter(event, player) {
                                if (event.name == 'dz_hs_sanqing_type') {
                                    if (event.targets.includes(player) || event.parent.targets.includes(player)) return true;
                                }
                                return event.targets && event.targets.length > 1;
                            },
                            check(event, player) {
                                if (event.name != 'dz_hs_sanqing_type') return event.parent.excluded.includes(player) || get.tag(event.card, 'multineg') || get.effect(player, event.card, event.player, player) <= 0;
                                else return true;
                            },
                            content() {
                                var evt = trigger.parent;
                                if (trigger.name == 'dz_hs_sanqing_type') {
                                    if (trigger.targets.includes(player)) evt = trigger;
                                }
                                evt.excluded.add(player);
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card) {
                                        if (get.type(card) != 'trick') return;
                                        if (card.name == 'tiesuo') return [0, 0];
                                        if (card.name == 'yihuajiemu') return [0, 1];
                                        if (get.tag(card, 'multineg')) return [0, 2];
                                    },
                                },
                            },
                        },
                        dz_hs_zhijie: {
                            trigger: { player: ['damageEnd', 'recycleCardsEnd'] },
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('dz_hs_zhijie'), 'he');
                                ('step 1');
                                if (result.bool) {
                                    var cards = Array.from(ui.ordering.childNodes);
                                    while (cards.length) {
                                        cards.shift().discard();
                                    }
                                } else event.finish();
                                ('step 2');
                                var evt = _status.event.getParent('phase');
                                if (evt && evt.name == 'phase') {
                                    //QQQ
                                    evt.finish();
                                }
                            },
                        },
                        dz_hs_shuangtieji_skill_equip: {
                            trigger: { player: 'equipEnd' },
                            equipSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (get.subtype(event.card) == 'equip1') return player.getEquip('dz_hs_shuangtiejix');
                                if (get.subtype(event.card) == 'equip2') return player.getEquip('dz_hs_shuangtieji');
                                return false;
                            },
                            content() {
                                if (player.storage.dz_hs_shuangtieji_skill_Cons) {
                                    var card = player.getEquip('dz_hs_shuangtiejix');
                                } else {
                                    var card = player.getEquip('dz_hs_shuangtieji');
                                }
                                if (card) player.discard(card);
                            },
                        },
                        dz_hs_shuangtieji_skill_Cons: {
                            group: 'dz_hs_shuangtieji_skill_equip',
                            trigger: { player: 'phaseBegin' },
                            equipSkill: true,
                            forced: true,
                            filter(event, player) {
                                return player.getEquip('dz_hs_shuangtieji') || player.getEquip('dz_hs_shuangtiejix');
                            },
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.dz_hs_shuangtieji_skill_Cons ? '你的回合内,所有角色使用的黑色手牌无效' : '你的回合内,所有角色使用的红色手牌无效';
                                    return str;
                                },
                            },
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('dz_hs_shuangtieji_skill_Cons');
                                ('step 1');
                                if (player.storage.dz_hs_shuangtieji_skill_Cons) {
                                    var card = player.getEquip('dz_hs_shuangtieji');
                                    game.broadcastAll(
                                        function (card, name) {
                                            card.init([card.suit, card.number, name]);
                                        },
                                        card,
                                        'dz_hs_shuangtiejix'
                                    );
                                } else {
                                    var card = player.getEquip('dz_hs_shuangtiejix');
                                    game.broadcastAll(
                                        function (card, name) {
                                            card.init([card.suit, card.number, name]);
                                        },
                                        card,
                                        'dz_hs_shuangtieji'
                                    );
                                }
                                if (card) player.equip(card);
                            },
                        },
                        dz_hs_shuangtiejix_skill: {
                            trigger: { global: 'useCard' },
                            filter(event, player) {
                                return (
                                    _status.currentPhase == player &&
                                    event.player.hasHistory('lose', function (evt) {
                                        return evt.parent == event && evt.hs && evt.hs.length == event.cards.length;
                                    }) &&
                                    get.color(event.card) == 'black'
                                );
                            },
                            equipSkill: true,
                            forced: true,
                            content() {
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            },
                        },
                        dz_hs_shuangtieji_skill: {
                            trigger: { global: 'useCard' },
                            filter(event, player) {
                                return (
                                    _status.currentPhase == player &&
                                    event.player.hasHistory('lose', function (evt) {
                                        return evt.parent == event && evt.hs && evt.hs.length == event.cards.length;
                                    }) &&
                                    get.color(event.card) == 'red'
                                );
                            },
                            equipSkill: true,
                            forced: true,
                            content() {
                                trigger.targets.length = 0;
                                trigger.all_excluded = true;
                            },
                        },
                        dz_hs_huiguang_buff: {
                            trigger: { global: 'phaseEnd' },
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            content() {
                                if (player.hp > 1) player.loseHp(player.hp - 1).set('type', 'dz_hs_huiguang');
                                player.removeSkill('dz_hs_huiguang_buff');
                            },
                        },
                        dz_hs_shelizi_skill: {
                            trigger: { global: 'recoverEnd' },
                            equipSkill: true,
                            filter(event, player) {
                                return event.source && event.source == player;
                            },
                            prompt2: '获得一张移出游戏的牌或摸一张牌',
                            content() {
                                'step 0';
                                var cards = Array.from(ui.special.childNodes);
                                if (cards.length) {
                                    player.chooseButton(['选择要获得的牌或点击〖取消〗摸一张牌', cards]);
                                } else event._result = { bool: false };
                                ('step 1');
                                if (result.bool) player.gain(result.links, 'gain2');
                                else player.draw();
                            },
                            group: 'dz_hs_shelizi_skill_use',
                            subSkill: {
                                use: {
                                    limited: true,
                                    equipSkill: true,
                                    enable: 'chooseToUse',
                                    position: 'hs',
                                    prompt: '将一张【桃】当做【桃园结义】使用',
                                    filterCard: { name: 'tao' },
                                    viewAs: { name: 'taoyuan' },
                                    viewAsFilter(player) {
                                        return player.countCards('h', { name: 'tao' }) && player.isPhaseUsing() && !player.storage.dz_hs_shelizi_skill_use;
                                    },
                                    precontent() {
                                        player.awakenSkill('dz_hs_shelizi_skill_use');
                                        player.storage.yongjin = true;
                                    },
                                },
                            },
                        },
                        dz_hs_sanqing: {
                            trigger: { player: 'useCard2' },
                            filter(event, player) {
                                if (player.storage.dz_hs_sanqing && player.storage.dz_hs_sanqing.types && player.storage.dz_hs_sanqing.types.includes(get.type2(event.card))) return false;
                                return game.hasPlayer(function (current) {
                                    return !event.targets.includes(current) && lib.filter.targetEnabled2(event.card, player, current);
                                });
                            },
                            forced: true,
                            init(player) {
                                player.storage.dz_hs_sanqing = {
                                    types: [],
                                    count: 1,
                                };
                            },
                            content() {
                                'step 0';
                                var str = '为' + get.translation(trigger.card) + '额外指定至多' + get.cnNumber(player.storage.dz_hs_sanqing.count) + '个目标';
                                if (['equip', 'delay'].includes(get.type(trigger.card))) {
                                    str = '令至多' + get.cnNumber(player.storage.dz_hs_sanqing.count) + '名其他角色';
                                    if (get.type(trigger.card) == 'equip') str += '装备' + get.translation(trigger.card);
                                    else str += '被贴上' + get.translation(trigger.card);
                                }
                                var num = Math.min(game.countPlayer(), player.storage.dz_hs_sanqing.count);
                                player
                                    .chooseTarget(get.prompt('dz_hs_sanqing'), str, [1, num], function (c, p, t) {
                                        var trigger = _status.event.getTrigger();
                                        var bool = false;
                                        bool = lib.filter.targetEnabled2(trigger.card, p, t);
                                        return !_status.event.targetsx.includes(t) && bool;
                                    })
                                    .set('targetsx', trigger.targets)
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.effect(target, _status.event.getTrigger().card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.storage.dz_hs_sanqing.count++;
                                    player.storage.dz_hs_sanqing.types.add(get.type2(trigger.card));
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    event.targets = result.targets;
                                } else event.finish();
                                ('step 2');
                                if (['equip', 'delay'].includes(get.type(trigger.card))) {
                                    var next = game.createEvent('dz_hs_sanqing_type', false, trigger);
                                    next.player = player;
                                    next.targets = event.targets.sortBySeat();
                                    next.card = trigger.card;
                                    next.excluded = [];
                                    next.setContent(lib.skill.dz_hs_sanqing.content2);
                                } else {
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                            content2() {
                                'step 0';
                                event.trigger('dz_hs_sanqing_type');
                                event.count = 0;
                                ('step 1');
                                var count = event.count;
                                var cardx = game.createCard(card.name, '', '');
                                event.cardx = cardx;
                                if (!event.excluded.includes(event.targets[count])) {
                                    if (get.type(cardx) == 'equip') event.targets[count].equip(cardx);
                                    else event.targets[count].addJudge(cardx);
                                }
                                event.count++;
                                ('step 2');
                                if (event.cardx) {
                                    event.cardx._destroy = true;
                                    event.cardx.destroyed = true;
                                    delete event.cardx;
                                }
                                if (event.count < targets.length) event.goto(1);
                            },
                            group: 'dz_hs_sanqing_reset',
                            subSkill: {
                                reset: {
                                    trigger: { global: 'resetSkillEnd' },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        player.storage.dz_hs_sanqing = {
                                            types: [],
                                            count: 1,
                                        };
                                    },
                                },
                            },
                        },
                        dz_hs_xinglin: {
                            enable: 'chooseToUse',
                            usable: 1,
                            filterCard: { color: 'red' },
                            position: 'h',
                            viewAs: { name: 'dz_hs_miaoshou' },
                            viewAsFilter(player) {
                                return player.countCards('h', { color: 'red' }) > 0 && player.isPhaseUsing() && (!player.getStat().skill || !player.getStat().skill.dz_hs_dz_hs_xinglin);
                            },
                            position: 'hs',
                            prompt: '将一张红色手牌当妙手回春使用',
                            check(card) {
                                return 7 - get.value(card);
                            },
                        },
                        dz_hs_zixin: {
                            trigger: { player: 'recycleCardsEnd' },
                            prompt(event, player) {
                                return (
                                    get.prompt('dz_hs_zixin') +
                                    '(可摸' +
                                    get.cnNumber(
                                        player.getHistory('custom', function (evt) {
                                            return evt.name == 'recycleCards';
                                        }).length
                                    ) +
                                    '张牌)'
                                );
                            },
                            content() {
                                player.draw(
                                    player.getHistory('custom', function (evt) {
                                        return evt.name == 'recycleCards';
                                    }).length
                                );
                                if (!player.storage.dz_hs_chuhai_count) player.storage.dz_hs_chuhai_count = 0;
                                player.storage.dz_hs_chuhai_count++;
                                player.markSkill('dz_hs_chuhai_count');
                                delete player.stat[player.stat.length - 1].skill.dz_hs_chuhai;
                            },
                        },
                        dz_hs_guixin: {
                            trigger: { player: 'resetSkillEnd' },
                            derivation: 'dz_hs_zixin',
                            audio: 2,
                            juexingji: true,
                            forced: true,
                            filter(event, player) {
                                return player.storage.dz_hs_chuhai_count && player.storage.dz_hs_chuhai_count >= 3;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('dz_hs_guixin');
                                ('step 1');
                                player.loseMaxHp();
                                ('step 2');
                                player.drawTo(player.maxHp);
                                player.recover(player.getDamagedHp());
                                ('step 3');
                                player.addSkillLog('dz_hs_zixin');
                            },
                        },
                        dz_hs_chuhai: {
                            enable: 'chooseToUse',
                            usable: 1,
                            filterCard: true,
                            position: 'hes',
                            viewAs: { name: 'dz_hs_langzihuitou' },
                            viewAsFilter(player) {
                                return player.countCards('hes') > 0 && player.isPhaseUsing() && (!player.getStat().skill || !player.getStat().skill.dz_hs_chuhai);
                            },
                            prompt: '将一张牌当浪子回头使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            group: 'dz_hs_chuhai_count',
                            subSkill: {
                                count: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && ((evt.hs && evt.hs.length && !player.countCards('h')) || (evt.es && evt.es.length && !player.countCards('e')) || (evt.js && evt.js.length && !player.countCards('j')));
                                    },
                                    content() {
                                        'step 0';
                                        var num = 0;
                                        var evt = trigger.getl(player);
                                        if (evt.hs && evt.hs.length && !player.countCards('h')) num++;
                                        if (evt.es && evt.es.length && !player.countCards('e')) num++;
                                        if (evt.js && evt.js.length && !player.countCards('j')) num++;
                                        event.count = num;
                                        if (!player.storage.dz_hs_chuhai_count) player.storage.dz_hs_chuhai_count = 0;
                                        ('step 1');
                                        event.count--;
                                        player.storage.dz_hs_chuhai_count++;
                                        player.markSkill('dz_hs_chuhai_count');
                                        delete player.stat[player.stat.length - 1].skill.dz_hs_chuhai;
                                        if (event.count > 0) {
                                            event.redo();
                                        }
                                    },
                                    intro: {
                                        content: '已重置#次【除害】',
                                    },
                                },
                            },
                        },
                        g_dz_hs_langzihuitou_buff: {
                            trigger: { global: ['useCardEnd', 'phaseBefore'] },
                            forced: true,
                            charlotte: true,
                            firstDo: true,
                            filter(event, player) {
                                return (event.name == 'useCard' && _status.dz_hs_langzihuitou && _status.dz_hs_langzihuitou.length) || event.name == 'phase';
                            },
                            marktext: '浪',
                            intro: {
                                name: '浪子回头',
                                content() {
                                    return '本回合不能使用或打出手牌中的:' + get.translation(_status.dz_hs_langzihuitou) + '牌';
                                },
                                markcount() {
                                    return _status.dz_hs_langzihuitou.length;
                                },
                            },
                            content() {
                                if (trigger.name == 'useCard') player.markSkill('g_dz_hs_langzihuitou_buff');
                                else {
                                    delete _status.dz_hs_langzihuitou;
                                    player.unmarkSkill('g_dz_hs_langzihuitou_buff');
                                }
                            },
                            mod: {
                                cardEnabled(card, player) {
                                    if (_status.dz_hs_langzihuitou && _status.dz_hs_langzihuitou.includes(get.type2(card)) && get.position(card) == 'h') return false;
                                }, //QQQ
                                cardSavable(card, player) {
                                    if (_status.dz_hs_langzihuitou && _status.dz_hs_langzihuitou.includes(get.type2(card)) && get.position(card) == 'h') return false;
                                },
                                cardRespondable(card, player) {
                                    if (_status.dz_hs_langzihuitou && _status.dz_hs_langzihuitou.includes(get.type2(card)) && get.position(card) == 'h') return false;
                                },
                            },
                        },
                        g_dz_hs_langzihuitou: {
                            trigger: { player: 'useCardAfter' },
                            forced: true,
                            filter(event, player) {
                                if (!lib.filter.targetEnabled({ name: 'dz_hs_langzihuitou' }, player, event.player)) return false;
                                return player.hasUsableCard('dz_hs_langzihuitou');
                            },
                            content() {
                                var str = '获得' + get.translation(trigger.cards);
                                if (trigger.cards.length < 1) str = '获得一枚【幻·' + (get.translation(trigger.card.nature) || '') + get.translation(trigger.card.name) + '】标记';
                                player
                                    .chooseToUse(
                                        get.prompt('dz_hs_langzihuitou').replace(/发动/, '使用'),
                                        function (card, player) {
                                            if (card.name != 'dz_hs_langzihuitou') return false;
                                            return lib.filter.cardEnabled(card, player, 'forceEnable') /*&&lib.filter.targetEnabled2(card,player,player)*/;
                                        },
                                        player,
                                        -1
                                    )
                                    .set('prompt2', str).targetRequired = true;
                            },
                        },
                        dz_hs_daoji: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget: lib.filter.notMe,
                            content() {
                                'step 0';
                                target
                                    .chooseToUse(
                                        function (card, player, event) {
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '盗戟:是否对' + get.translation(player) + '使用一张牌？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.filterTarget.apply(this, arguments);
                                    })
                                    .set('sourcex', player);
                                ('step 1');
                                if (result.bool) {
                                    delete player.stat[player.stat.length - 1].skill.dz_hs_daoji;
                                    event.finish();
                                } else {
                                    if (target.countCards('e')) player.choosePlayerCard(target, 'e', true);
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    event.cardx = result.links[0];
                                    target.recycleCards(result.links);
                                }
                                ('step 3');
                                if (target.countGainableCards(player, 'he')) player.gainPlayerCard(target, 'he', true, 'visibleMove');
                                else event.finish();
                                ('step 4');
                                if ((!event.cardx || result.cards[0] != event.cardx) && target.canUse('sha', player, false))
                                    target.useCard(
                                        {
                                            name: 'sha',
                                        },
                                        player,
                                        'noai',
                                        false
                                    );
                            },
                        },
                        _gs_hs_huanhua: {
                            group: ['_gs_hs_huanhua_discard_Mark', '_gs_hs_huanhua_use'],
                            marktext: '幻',
                            intro: {
                                name: '幻牌',
                                mark(dialog, storage, player) {
                                    if (storage) {
                                        dialog.addSmall([storage, 'vcard']);
                                    } else dialog.addText('没有<幻>牌');
                                },
                                content(storage, player) {
                                    if (storage) {
                                        var str = '';
                                        for (var i of storage) {
                                            str += (get.translation(i[3]) || '') + get.translation(i[2]) + '、';
                                        }
                                        return '<幻>牌:' + str.slice(0, str.length - 1);
                                    } else return '没有<幻>牌';
                                },
                            },
                            subSkill: {
                                use: {
                                    audio: 2,
                                    name: '幻化',
                                    enable: ['chooseToUse', 'chooseToRespond'],
                                    filter(event, player) {
                                        if (!player.storage._gs_hs_huanhua || !player.storage._gs_hs_huanhua.length) return false;
                                        var evt = lib.filter.filterCard;
                                        if (event.filterCard) evt = event.filterCard;
                                        for (var i of player.storage._gs_hs_huanhua) {
                                            var type = get.type(i[2]);
                                            if ((type == 'basic' || type == 'trick') && evt({ name: i[2] }, player, event)) return true;
                                        }
                                        return false;
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            return ui.create.dialog('幻牌', [player.getStorage('_gs_hs_huanhua'), 'vcard']);
                                        },
                                        filter(button, player) {
                                            var type = get.type(button.link[2]);
                                            if (type != 'basic' && type != 'trick') return false;
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
                                                filterCard: () => false,
                                                selectCard: -1,
                                                popname: true,
                                                card: links[0],
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                precontent() {
                                                    var card = lib.skill._gs_hs_huanhua_use_backup.card;
                                                    for (var i = 0; i < player.storage._gs_hs_huanhua.length; i++) {
                                                        if (player.storage._gs_hs_huanhua[i] == card) {
                                                            player.storage._gs_hs_huanhua.splice(i--, 1);
                                                            break;
                                                        }
                                                    }
                                                    if (player.storage._gs_hs_huanhua.length) player.markSkill('_gs_hs_huanhua');
                                                    else player.unmarkSkill('_gs_hs_huanhua');
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '选择' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '的目标';
                                        },
                                    },
                                    hiddenCard(player, name) {
                                        if (player.storage._gs_hs_huanhua) {
                                            for (var i of player.storage._gs_hs_huanhua) {
                                                if (name == i[2]) return true;
                                            }
                                        }
                                        return false;
                                    },
                                    ai: {
                                        fireAttack: true,
                                        respondSha: true,
                                        respondShan: true,
                                        order: 1,
                                        result: {
                                            player(player) {
                                                if (_status.event.dying) return get.attitude(player, _status.event.dying);
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                discard_Mark: {
                                    audio: 2,
                                    firstDo: true,
                                    trigger: { player: 'loseAfter' },
                                    filter(event, player) {
                                        if (event.type != 'discard') return false;
                                        for (var i = 0; i < event.cards2.length; i++) {
                                            if (event.cards2[i].hasTag('sgs_huan1') && get.position(event.cards2[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        if (trigger.delay == false) game.delay();
                                        ('step 1');
                                        var cards = [];
                                        for (var i = 0; i < trigger.cards2.length; i++) {
                                            if (trigger.cards2[i].hasTag('sgs_huan1') && get.position(trigger.cards2[i], true) == 'd') {
                                                cards.push(trigger.cards2[i]);
                                            }
                                        }
                                        if (cards.length) {
                                            game.log(cards, '已被移出游戏');
                                            game.cardsGotoSpecial(cards);
                                            player.addHuanMark(cards);
                                        }
                                    },
                                },
                            },
                        },
                        幻牌: {
                            enable: 'phaseUse',
                            charlotte: true,
                            filter(event, player) {
                                return true;
                            },
                            selectCard: [0, Infinity],
                            filterCard(card, player) {
                                return true;
                            },
                            position: 'he',
                            forced: true,
                            lose: false,
                            content() {
                                'step 0';
                                var cardsCopy = [];
                                var cloneCard;
                                for (const card of cards) {
                                    cloneCard = game.createCard(card);
                                    cloneCard.huan = true;
                                    cloneCard.sourceCard = card;
                                    cardsCopy.push(cloneCard);
                                }
                                game.log(player, '将', cardsCopy, '放置幻区域');
                                player.loseToSpecial(cardsCopy, 'sgs_huan1').visible = false;
                                ('step 1');
                                var cardsInS = game.me.getCards('s', function (card) {
                                    return card.hasGaintag('sgs_huan1');
                                });
                                if (cardsInS.length > 3) {
                                    game.cardsGotoSpecial(cardsInS);
                                }
                                ('step 2');
                                //因为强制会出现手牌显示不整齐
                                var hs = player.getCards('h');
                                //刷新手牌的显示解决显示不整齐问题
                                player.directgains(hs, null);
                            },
                            canBeDiscarded(card, player, target) {
                                if (get.type(card) == 'equip' && get.position(card) == 'e' && card.huan) return false;
                            },
                            canBeGained(card, player, target) {
                                if (get.type(card) == 'equip' && get.position(card) == 'e' && card.huan) return false;
                            },
                            group: '移除幻牌',
                        },
                        移除幻牌: {
                            trigger: { player: 'loseEnd' },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (i.original == 'e') return true;
                                    }
                                return false;
                            },
                            content() {
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].original == 'e') game.cardsGotoSpecial(trigger.cards[i]);
                                }
                            },
                        },
                        回手: {
                            trigger: { global: 'useCardAfter' },
                            check(event, player) {
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.card.suit && trigger.card.cardid && !trigger.card.huan) {
                                    player.gain(trigger.cards, 'gain2', 'log');
                                    event.finish();
                                } else {
                                    var cardsCopy = [];
                                    var cloneCard;
                                    if (trigger.cards.length) {
                                        for (const card of trigger.cards) {
                                            cloneCard = game.createCard(card);
                                            cloneCard.huan = true;
                                            cloneCard.sourceCard = card;
                                            cardsCopy.push(cloneCard);
                                        }
                                    } else {
                                        cloneCard = game.createCard(trigger.card);
                                        cloneCard.huan = true;
                                        cardsCopy.push(cloneCard);
                                    }
                                    game.log(player, '将', cardsCopy, '放置幻区域');
                                    player.loseToSpecial(cardsCopy, 'sgs_huan1').visible = false;
                                }
                                ('step 1');
                                var cardsInS = game.me.getCards('s', function (card) {
                                    return card.hasGaintag('sgs_huan1');
                                });
                                if (cardsInS.length > 3) {
                                    game.cardsGotoSpecial(cardsInS);
                                }
                                ('step 2');
                                //因为强制会出现手牌显示不整齐
                                var hs = player.getCards('h');
                                //刷新手牌的显示解决显示不整齐问题
                                player.directgains(hs, null);
                            },
                            canBeDiscarded(card, player, target) {
                                if (get.type(card) == 'equip' && get.position(card) == 'e' && card.huan) return false;
                            },
                            canBeGained(card, player, target) {
                                if (get.type(card) == 'equip' && get.position(card) == 'e' && card.huan) return false;
                            },
                        },
                        /*妲己   3体力   神  参考   sp花木兰  参考 许劭
                        幻化:选将阶段,你隐藏此武将并选择另一张武将牌作为初始武将;你进入濒死状态时,你可以将武将牌回复为【妲己】并回复体力至2点,
                            你观看伤害来源的手牌与武将牌堆顶的六张牌并可以弃置其中至多六张牌.
                        魅舞:限定技,出牌阶段,你可以弃置装备区的所有牌,展示牌堆顶的武将牌并发动这张牌的一个技能,
                            你可以重复此流程直到你无法发动牌上的技能.*/
                        huan幻化: {
                            trigger: { global: 'gameStart' },
                            forced: true,
                            content() {
                                'step 0';
                                var list = get.gainableCharacters();
                                list.remove('huan妲己');
                                var dialog = ui.create.dialog('将武将牌替换为一名角色', 'hidden');
                                dialog.add([list, 'character']);
                                player.chooseButton(dialog, true).set('ai', function (button) {
                                    return -get.rank(button.link, true) - lib.character[button.link][2];
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    player.storage.huan幻化 = result.links[0];
                                    player.reinit(player.name, player.storage.huan幻化);
                                } else event.finish();
                                ('step 2');
                                player.hp = player.maxHp;
                                player.update();
                                player.addSkill('huan幻化_dying');
                            },
                            group: 'huan幻化_dying',
                            subSkill: {
                                dying: {
                                    init(player) {
                                        player.storage.huan幻化_dying = get.gainableCharacters().randomGets(6);
                                    },
                                    trigger: { player: 'dying' },
                                    content() {
                                        'step 0';
                                        player.reinit(player.storage.huan幻化, 'huan妲己');
                                        player.removeSkill('huan幻化_dying');
                                        ('step 1');
                                        player.recover(2 - player.hp);
                                        player.viewHandcards(trigger.source);
                                        ('step 2');
                                        var dialog = ui.create.dialog('观看武将牌堆顶的六张牌并可以弃置其中至多六张牌.', 'hidden');
                                        dialog.add([player.storage.huan幻化_dying, 'character']);
                                        player.chooseButton(dialog, [1, 6]).set('ai', function (button) {
                                            return -get.rank(button.link, true) - lib.character[button.link][2];
                                        });
                                        ('step 3');
                                        if (result.links?.length) {
                                            player.storage.huan幻化_dying.removeArray(result.links);
                                        }
                                    },
                                },
                            },
                        },
                        huan魅舞: {
                            enable: 'phaseUse',
                            content() {
                                'step 0';
                                player.discard(player.getCards('e'));
                                player.awakenSkill('huan魅舞');
                                ('step 1');
                                if (player.storage.huan幻化_dying.length) {
                                    event.target = player.storage.huan幻化_dying[0];
                                    game.log('展示了' + get.translation(event.target) + '武将牌.');
                                } else {
                                    event.target = get.gainableCharacters().randomGet();
                                    game.log('展示了' + get.translation(event.target) + '武将牌.');
                                }
                                event.dialog = ui.create.dialog('<div class="text center">' + get.translation(player) + '发动了【魅舞】', [[event.target], 'character']);
                                ('step 2');
                                event.dialog.close();
                                player.setAvatar(player.name, event.target);
                                var skills = lib.character[event.target][3];
                                for (const skill of skills) {
                                    if (!lib.skill[skill]) {
                                        skills.remove(skill);
                                        continue;
                                    }
                                    if (!lib.skill[skill].enable) skills.remove(skill);
                                    if (lib.skill[skill].trigger) skills.remove(skill);
                                }
                                player.storage.huan魅舞skills = skills;
                                for (const skill1 of player.storage.huan魅舞skills) {
                                    if (!lib.skill[skill]) {
                                        skills.remove(skill);
                                        continue;
                                    }
                                    if (lib.skill[skill1].trigger) player.storage.huan魅舞skills.remove(skill1);
                                }
                                if (!player.storage.huan魅舞skills || !player.storage.huan魅舞skills.length) {
                                    player.setAvatar(player.name, 'huan妲己');
                                    return;
                                }
                                player.storage.huan魅舞2 = player.storage.huan魅舞skills.shift();
                                player.addTempSkill(player.storage.huan魅舞2, 'phaseJieshuBegin');
                                player.addTempSkill('huan魅舞2', 'phaseJieshuBegin');
                            },
                            //group:""
                        },
                        huan魅舞2: {
                            trigger: { player: ['useSkillBegin', 'useCard', 'phaseUseEnd'] },
                            silent: true,
                            firstDo: true,
                            filter(event, player) {
                                if (event.name == 'useCard' || event.name == 'phaseUse') return true;
                                var info = lib.skill[event.skill];
                                if (!info) return false;
                                if (event.skill == player.storage.huan魅舞2) return true;
                                return false;
                            },
                            content() {
                                if (trigger.name == 'useCard' || trigger.name == 'phaseUse') {
                                    player.setAvatar(player.name, 'huan妲己');
                                }
                                player.removeSkill(player.storage.huan魅舞2);
                                if (player.storage.huan魅舞skills.length) {
                                    player.storage.huan魅舞2 = player.storage.huan魅舞skills.shift();
                                    player.addTempSkill(player.storage.huan魅舞2, 'phaseUseEnd');
                                } else {
                                    player.removeSkill('huan魅舞2');
                                    player.setAvatar(player.name, 'huan妲己');
                                }
                            },
                        },
                        /*花鬘
                        羽刃——当你需要打出或使用一张【杀】时,你可以进行一次判定,若结果为红色视为你打出或使用了一张【杀】
                             (出牌阶段此【杀】不计入使用次数且判定失败后你不能发动"羽刃"直到回合结束).*/
                        huan羽刃: {
                            trigger: {
                                player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (!_status.currentPhase) return false;
                                if (event.responded) return false;
                                if (!event.filterCard || !event.filterCard({ name: 'sha' }, player, event)) return false;
                                if (event.name != 'chooseToUse' && !lib.filter.cardRespondable({ name: 'sha' }, player, event)) return false;
                                return true;
                            },
                            audio: 2,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (get.color(result.card) == 'red') {
                                    if (_status.currentPhase == player) {
                                        player.chooseUseTarget('选择【杀】的目标', { name: 'sha' }, false, 'nodistance');
                                    } else {
                                        trigger.untrigger();
                                        trigger.responded = true;
                                        trigger.result = { bool: true, card: { name: 'sha' } };
                                    }
                                } else {
                                    player.getHistory('custom').push({ huan羽刃: true });
                                }
                                ('step 2');
                                //if (_status.currentPhase == player) player.useSkill('huan羽刃');
                            },
                            group: 'huan羽刃2',
                        },
                        huan羽刃2: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var customHistory = player.getHistory('custom', function (evt) {
                                    return evt.huan羽刃;
                                });
                                if (customHistory.length) return false;
                                if (!_status.currentPhase) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return 1;
                                    return -1;
                                });
                                ('step 1');
                                if (get.color(result.card) == 'red') {
                                    player.chooseUseTarget('选择【杀】的目标', { name: 'sha' }, false, 'nodistance');
                                } else {
                                    player.getHistory('custom').push({ huan羽刃: true });
                                }
                            },
                        },
                        /*洛神
                        诗想——回合开始时,你可以令一名角色摸一张牌或弃一张手牌,若你以此法令该角色的手牌等于其手牌上限,
                        你可以重复此流程且你的手牌上限+1;当你的手牌上限等于7时,你失去<诗想>.
                        无尘——锁定技,回合结束时,你的手牌上限-1 ;你的牌进入弃牌堆时均移出游戏;洗牌时你获得所有移出游戏的牌.*/
                        huan诗想: {
                            trigger: { player: 'phaseZhunbeiBegin' },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(1, get.prompt2('huan诗想'), function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var current = game.filterPlayer(function (current) {
                                            return get.attitude(player, current) && current.getHandcardLimit() - current.countCards('h') == 1;
                                        });
                                        if (current.length) return current.includes(target);
                                        return target.isMinHp() && target.countCards('h');
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player.chooseControl(['其摸一张牌', '其弃一张手牌', 'cancel2'], function (event1, player) {
                                        if (get.attitude(player, event.target) > 0) {
                                            return '其摸一张牌';
                                        } else {
                                            return '其弃一张手牌';
                                        }
                                    });
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    event.target.draw();
                                } else if (result.index == 1) {
                                    event.target.chooseToDiscard(1, true);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (event.target.countCards('h') == event.target.getHandcardLimit()) {
                                    if (player.getHandcardLimit() >= 7) player.removeSkill('huan诗想');
                                    //if (!player.hasSkill('huan诗想mark')) player.addSkill('huan诗想mark');
                                    player.storage.huan诗想mark++;
                                    player.useSkill('huan诗想');
                                }
                                ('step 4');
                                if (player.getHandcardLimit() >= 7) player.removeSkill('huan诗想');
                            },
                            //charlotte: true,
                            mark: true,
                            markimage: 'extension/三国杀·幻/image/icon/huan诗想.png',
                            //marktext:"诗想",
                            intro: {
                                name: '诗想',
                                content(storage, player, skill) {
                                    if (player.getHandcardLimit() >= 7) player.removeSkill('huan诗想');
                                    if (!player.getHandcardLimit()) return '手牌上限为' + player.hp;
                                    return '手牌上限为' + player.getHandcardLimit();
                                },
                            },
                            init(player, skill) {
                                if (!player.storage.huan诗想mark) player.storage.huan诗想mark = 0;
                            },
                            //group:"huan诗想mark"
                        },
                        huan诗想mark: {
                            //charlotte: true,
                            mark: true,
                            // marktext: "<img style=width:28px height:28px src=extension/三国杀·幻/image/icon/huan诗想.png>",
                            marktext: '诗想',
                            intro: {
                                name: '诗想',
                                content(storage, player, skill) {
                                    if (player.getHandcardLimit() >= 7) player.removeSkill('huan诗想');
                                    return '手牌上限为' + player.getHandcardLimit();
                                },
                                // mark:function(dialog,content,player){
                                //     if (player.getHandcardLimit() >= 7) player.removeSkill('huan诗想');
                                //     var str = "手牌上限为" + player.getHandcardLimit();
                                //     dialog.addText(str);
                                // },
                            },
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            //onremove: false,
                        },
                        huan无尘: {
                            trigger: { player: 'phaseJieshuBegin' },
                            forced: true,
                            content() {
                                player.storage.huan诗想mark--;
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (num < -player.storage.huan诗想mark) player.storage.huan诗想mark++;
                                    return num + player.storage.huan诗想mark;
                                },
                            },
                            group: ['huan无尘进入弃牌堆时', 'huan无尘洗牌时'],
                        },
                        huan无尘洗牌时: {
                            trigger: { global: 'onWashTrigger' },
                            forced: true,
                            content() {
                                var specialCards = Array.from(ui.special.childNodes);
                                player.gain(specialCards, 'gain2', 'log');
                            },
                        },
                        huan无尘进入弃牌堆时: {
                            //trigger:{player:"loseAfter"},
                            trigger: { global: ['loseAfter', 'discardAfter', 'cardsDiscardAfter'] },
                            filter(event, player) {
                                //根据事件名字分类讨论事件
                                if (event.name == 'lose') {
                                    //装备区丢失牌
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (i.original == 'e' || get.info(i).chongzhu) return true;
                                        }
                                    //防止一出牌就进入content
                                    if (event.type != 'discard' || event.player != player) return false;
                                } else {
                                    var evt = event.parent;
                                    if (evt.name != 'orderingDiscard' || !evt.relatedEvent || evt.relatedEvent.player != player) return false;
                                }
                                //区分是否是真正的进入弃牌堆
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        if (get.position(i, true) == 'd') return true;
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                game.cardsGotoSpecial(trigger.cards);
                            },
                        },
                    },
                    translate: {
                        huan普净: '普净',
                        huan超度: '超度',
                        huan超度_info: '锁定技,当一名角色因满体力而有未回复的体力时,你摸一张牌并获得一枚超度标记.',
                        huan禅心: '禅心',
                        huan禅心_info: '准备阶段,你可以弃一枚超度标记令一名角色回复1点体力,该角色造成和受到的伤害至多为1且无来源直到你下个回合开始.',
                        huan真言: '真言',
                        huan真言_info: '限定技,你可以将所有角色区域里各一张牌移出游戏,你可以从中获得两张名称字数之和为6的牌,若为本次移出的两张牌,则交换对应角色的当前体力值.',
                        回手: '回手',
                        回手_info: '上一张使用的牌收回手牌,如果是视为的牌就在手牌复制一个幻牌',
                        standard1: '代码作者',
                        sgs_huan1_info: '区域内(装备区,判定区和手牌)存在的视为牌称为幻牌.',
                        huan妲己: '妲己',
                        huan幻化: '幻化',
                        huan幻化_info: '选将阶段,你隐藏此武将并选择另一张武将牌作为初始武将;你进入濒死状态时,你可以将武将牌回复为【妲己】并回复体力至2点,你观看伤害来源的手牌与武将牌堆顶的六张牌并可以弃置其中至多六张牌.',
                        huan魅舞: '魅舞',
                        huan魅舞_info: '限定技,出牌阶段,你可以弃置装备区的所有牌,展示牌堆顶的武将牌并发动这张牌的一个技能,你可以重复此流程直到你无法发动牌上的技能.',
                        huan花鬘: '花鬘',
                        huan羽刃: '羽刃',
                        huan羽刃2: '羽刃',
                        huan羽刃_info: '当你需要打出或使用一张【杀】时,你可以进行一次判定,若结果为红色视为你打出或使用了一张【杀】(出牌阶段此【杀】不计入使用次数且判定失败后你不能发动"羽刃"直到回合结束).',
                        huan洛神: '洛神',
                        huan诗想: '诗想',
                        huan诗想mark: '诗想',
                        huan诗想_info: '回合开始时,你可以令一名角色摸一张牌或弃一张手牌,若你以此法令该角色的手牌等于其手牌上限,你可以重复此流程且你的手牌上限+1;当你的手牌上限等于7时,你失去<诗想>.',
                        huan无尘: '无尘',
                        huan无尘_info: '锁定技,回合结束时,你的手牌上限-1 ;你的牌进入弃牌堆时均移出游戏;洗牌时你获得所有移出游戏的牌.',
                        dz_hs_hucheer: '胡车儿',
                        dz_hs_daoji: '盗戟',
                        dz_hs_daoji_info: '出牌阶段限一次,你可以令一名其他角色选择一项;1.对你使用一张牌你重置此技能;2.令你选择其装备区内的一张装备牌其将此牌回手你正面朝上获得其一张手牌若此牌不为你此前选择的装备牌则其视为对你使用一张无距离限制的【杀】',
                        dz_hs_zhouchu: '周处',
                        dz_hs_chuhai: '除害',
                        dz_hs_chuhai_info: '出牌阶段内限一次,你可以将一张牌当做【浪子回头】使用;当你失去你任意一个区域内最后一张牌时,你重置此技能',
                        dz_hs_guixin: '皈心',
                        dz_hs_guixin_info: '觉醒技,当【除害】重置至少三次后你减一点体力上限将手牌摸至X张体力值回复至X获得技能【自新】(X为当前体力上限)',
                        dz_hs_zixin: '自新',
                        dz_hs_zixin_info: '当你回手后,你可以摸X张牌并重置【除害】(X为你本回合回手的次数)',
                        dz_hs_dongfeng: '董奉',
                        dz_hs_sanqing: '三清',
                        dz_hs_sanqing_info: '每种类型的牌各限发动一次,你使用的牌可以额外指定[ 1 ]个角色为目标;你每发动一次<三清>[ ]内的数字便 +1 ;当场上其他技能重置时,你能重置此技能.',
                        dz_hs_xinglin: '杏林',
                        dz_hs_xinglin_info: '出牌阶段限一次,你可以将一张红色手牌当做【妙手回春】使用',
                        dz_hs_shuangtieji_skill: '双铁戟',
                        dz_hs_shuangtieji_skill_info: '锁定技,转换技;阴,你的回合内,所有角色使用的红色手牌无效;阳,你的回合内,所有角色使用的黑色手牌无效;你的回合开始时你转换此技能的阴阳效果并根据转换后的状态将此牌置于;阴,武器栏;阳,防具栏;此装备牌会同时占用武器栏与防具栏',
                        dz_hs_shuangtiejix_skill: '双铁戟',
                        dz_hs_shuangtiejix_skill_info: '锁定技,转换技;阴,你的回合内,所有角色使用的红色手牌无效;阳,你的回合内,所有角色使用的黑色手牌无效;你的回合开始时你转换此技能的阴阳效果并根据转换后的状态将此牌置于;阴,武器栏;阳,防具栏;此装备牌会同时占用武器栏与防具栏',
                        dz_hs_shuangtieji_skill_Cons: '双铁戟',
                        dz_hs_shuangtieji_skill_Cons_info: '锁定技,转换技;阴,你的回合内,所有角色使用的红色手牌无效;阳,你的回合内,所有角色使用的黑色手牌无效;你的回合开始时你转换此技能的阴阳效果并根据转换后的状态将此牌置于;阴,武器栏;阳,防具栏;此装备牌会同时占用武器栏与防具栏',
                        dz_hs_yangxiu: '杨修',
                        dz_hs_zhijie: '智捷',
                        dz_hs_zhijie_info: '当你受到伤害或回手后,你可以弃置一张牌终止一切结算,当前回合结束',
                        dz_hs_danlao: '啖酪',
                        dz_hs_danlao_info: '当你成为一张牌的目标后若你不是此牌的唯一目标,你可以摸一张牌此牌对你无效',
                        dz_hs_jilei: '鸡肋',
                        dz_hs_jilei_info: '锁定技,当你受到伤害时,若此伤害没有对应的实体牌,你防止此伤害',
                        dz_hs_masu: '马谡',
                        dz_hs_xinzhan: '心战',
                        dz_hs_xinzhan_info: '一名角色失去最后一张手牌后,你可以观看牌堆顶三张牌并可以展示其中任意张♥️️牌并获得,你可以以任意顺序将这些牌置于牌堆顶或牌堆底',
                        dz_hs_huilei: '挥泪',
                        dz_hs_huilei_info: '锁定技,击杀你的角色弃置所有牌,你可以令其从牌堆顶、牌堆底、移除游戏外的牌中选择至多五张牌获得',
                        dz_hs_jikang: '嵇康',
                        dz_hs_qingxian: '清弦',
                        dz_hs_qingxian_info: '出牌阶段,你可以弃置任意张牌(每回合限七张);结束阶段,你摸等量的牌',
                        dz_hs_juexiang: '绝响',
                        dz_hs_juexiang_info: '你可以将你各区域处仅有的一张黑/红色当【闪】/【无懈可击】使用,若该牌是本回合进入弃牌堆里仅有的最后一种花色的牌,你可以失去<绝响>令一名其他角色摸三张牌并获得<绝响>.',
                        dz_hs_yuanshi: '渊始',
                        dz_hs_yuanshi_info: '你可以将一张♥️️牌当做任意一张基本牌使用;回合结束时,你可以展示牌堆顶三张牌并获得其中的红色牌',
                        dz_hs_moke: '摩柯',
                        dz_hs_moke_info: '当你脱离濒死状态后,你可以将武将牌替换为【极·武神】并回复体力至上限直到你受到雷电伤害结算后',
                        dz_hs_wushen: '武神',
                        dz_hs_ji_wushen: '极·武神',
                        dz_hs_ji_yuanshi_info: '你的♥️️牌可以当任意基本牌使用;你使用的♥️️牌无距离限制;回合结束时,你可以依次亮出并获得牌堆中的前 3 张红色牌.',
                        dz_hs_tianjie: '天劫',
                        dz_hs_tianjie_info: '锁定技,你跳过摸牌阶段;牌堆洗牌时,你受到100 点雷电伤害.',
                    },
                };
                for (var i in sgs_huan.character) {
                    sgs_huan.character[i][4].push('ext:三国杀·幻/image/character/' + i + '.jpg');
                }
                lib.config.all.characters.add('sgs_huan');
                lib.config.characters.add('sgs_huan');
                lib.translate['sgs_huan_character_config'] = '三国杀·幻';
                return sgs_huan;
            });
            game.import('card', function () {
                var sgs_huan = {
                    name: 'sgs_huan',
                    connect: true,
                    card: {
                        dz_hs_shuangtieji: {
                            image: 'ext:三国杀·幻/dz_hs_shuangtieji.png',
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -1,
                            },
                            forceDie: true,
                            equipDelay: false,
                            onEquip() {
                                player.markSkill('dz_hs_shuangtieji_skill_Cons');
                            },
                            onLose() {
                                delete player.storage.dz_hs_shuangtieji_skill_Cons;
                                player.unmarkSkill('dz_hs_shuangtieji_skill_Cons');
                            },
                            customSwap(card) {
                                var type = get.subtype(card, false);
                                return type == 'equip1' || type == 'equip2';
                            },
                            skills: ['dz_hs_shuangtieji_skill', 'dz_hs_shuangtieji_skill_Cons'],
                            fullskin: true,
                        },
                        dz_hs_shuangtiejix: {
                            image: 'ext:三国杀·幻/dz_hs_shuangtieji.png',
                            type: 'equip',
                            subtype: 'equip2',
                            distance: {
                                attackFrom: -1,
                            },
                            forceDie: true,
                            equipDelay: false,
                            onEquip() {
                                if (!player.storage.dz_hs_shuangtieji_skill_Cons) player.storage.dz_hs_shuangtieji_skill_Cons = true;
                                player.markSkill('dz_hs_shuangtieji_skill_Cons');
                            },
                            async onLose(event, trigger, player) {
                                if (event.cards?.length) {
                                    const card = event.cards[0];
                                    card.init([card.suit, card.number, 'dz_hs_shuangtieji']);
                                }
                            },
                            customSwap(card) {
                                var type = get.subtype(card, false);
                                return type == 'equip1' || type == 'equip2';
                            },
                            skills: ['dz_hs_shuangtiejix_skill', 'dz_hs_shuangtieji_skill_Cons'],
                            fullskin: true,
                        },
                        huan回击: {
                            global: ['huan回击skill'],
                            image: 'ext:三国杀·幻/dz_hs_huiji.png',
                            fullskin: true,
                            type: 'basic',
                            notarget: true,
                            nodelay: true,
                            content() {
                                'step 0';
                                var target = event.getParent('chooseToUse').targetRequired;
                                var next = target.chooseToRespond('是否' + get.translation(player) + '打出一张闪？或受到<>点伤害且此【杀】对' + event.target + '无效.', { name: 'shan' });
                                next.set('ai', function () {
                                    return true;
                                });
                                next.autochoose = lib.filter.autoRespondShan;
                                event.target = target;
                                ('step 1');
                                if (!result.bool) {
                                    var num = 1;
                                    var custom = target.getHistory('custom', (e) => e.recycleCards);
                                    if (custom.length) {
                                        num += custom[0].recycleCards;
                                    }
                                    target.damage(num);
                                    event.getParent('useCardToPlayered').targets.length = 0;
                                }
                            },
                            ai: {
                                order: 3,
                                respondShan: true,
                                basic: {
                                    useful: [7, 5.1, 2],
                                    value: [7, 5.1, 2],
                                },
                                result: { player: 1 },
                                //expose:0.2
                            },
                        },
                        huan回旋镖: {
                            image: 'ext:三国杀·幻/dz_hs_huixuanbiao.png',
                            //audio:"ext:三国杀·幻/peiyin",
                            type: 'equip',
                            subtype: 'equip1',
                            distance: {
                                attackFrom: -3,
                            },
                            skills: ['huan回旋镖skill'],
                            //cardnature:'jy_du',
                            fullskin: true,
                        },
                        dz_hs_huiguang: {
                            audio: true,
                            image: 'ext:三国杀·幻/dz_hs_huiguang.png',
                            fullskin: true,
                            type: 'trick',
                            toself: true,
                            enable: true,
                            logv: false,
                            savable: true,
                            selectTarget: -1,
                            modTarget: true,
                            filterTarget(card, player, target) {
                                return target == player;
                            },
                            content() {
                                'step 0';
                                if (typeof event.baseDamage != 'number') event.baseDamage = 1;
                                event.baseDamage--;
                                if (target.isDying() || event.getParent(2).type == 'dying') {
                                    var num = 1 - target.hp;
                                    num += event.baseDamage;
                                    if (num > 0) target.recover(num);
                                } else {
                                    var count = target.maxHp - target.countCards('h') + event.baseDamage;
                                    count = Math.max(0, Math.min(5, count));
                                    if (count > 0) target.draw(count);
                                    target.recover(target.getDamagedHp() + event.baseDamage);
                                    target.addSkill('dz_hs_huiguang_buff');
                                    event.finish();
                                }
                                ('step 1');
                                if (target.countCards('h')) {
                                    var cards = target.getCards('h');
                                    game.log(cards, '已被移出游戏');
                                    target.lose(cards, ui.special);
                                    target.addHuanMark(cards);
                                }
                            },
                            ai: {
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
                                    return get.order({ name: 'tao' }) + 2;
                                },
                                result: {
                                    target(player, target) {
                                        if (target && target.isDying()) return 2;
                                        var num = Math.max(0, target.maxHp - target.countCards('h'));
                                        var num2 = target.getDamagedHp();
                                        var eff = 0;
                                        if (target.hp <= 2) num += 2;
                                        eff = num + num2;
                                        if (num < 4 && player.hp > 1) eff = 0;
                                        return num;
                                    },
                                },
                                tag: {
                                    save: 1,
                                },
                            },
                        },
                        // 当你装备此牌时你可以获得一枚【幻·闪】标记;当你失去此装备时,将其销毁,并幻化一张手牌
                        dz_hs_jiasha: {
                            image: 'ext:三国杀·幻/dz_hs_jiasha.png',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip2',
                            loseDelay: false,
                            onEquip() {
                                var next = game.createEvent('dz_hs_jiasha_onEquipx');
                                next.player = player;
                                next.setContent(lib.card.dz_hs_jiasha.onEquipx);
                            },
                            onEquipx() {
                                'step 0';
                                player.chooseBool('袈裟:是否获得一枚【幻·闪】标记？');
                                ('step 1');
                                if (result.bool) player.addHuanMark({ name: 'shan' });
                            },
                            async onLose(event, trigger, player) {
                                if (player.countCards('h') && event.cards?.length) {
                                    const card = event.cards[0];
                                    setTimeout(async function () {
                                        game.log(card, '已被销毁');
                                        const card = event.cards[0];
                                        const npc = get.owner(card);
                                        if (npc) {
                                            await npc.lose(card).set('_triggered', null);
                                        }
                                        card.selfDestroy();
                                    }, 600);
                                    const { cards } = await player
                                        .chooseCard('h', '你可以选择一张手牌幻化').forResult();
                                    if (cards?.length) {
                                        player.addHuanMark(cards);
                                    }
                                }
                            },
                            ai: {
                                equipValue: 7,
                                basic: {
                                    equipValue: 7,
                                },
                            },
                        },
                        dz_hs_shelizi: {
                            image: 'ext:三国杀·幻/dz_hs_shelizi.png',
                            fullskin: true,
                            type: 'equip',
                            subtype: 'equip5',
                            loseDelay: false,
                            onLose() {
                                player.enableSkill('dz_hs_shelizi_skill_use'); //QQQ
                            },
                            skills: ['dz_hs_shelizi_skill'],
                            ai: {
                                equipValue: 7,
                                basic: {
                                    equipValue: 7,
                                },
                            },
                        },
                        /*妙手回春:出牌阶段对一名距离2以内角色使用.将其场上的一张牌回手,若其与你的距离为1,其回复1点体力,否则其摸两张牌.*/
                        dz_hs_miaoshou: {
                            image: 'ext:三国杀·幻/dz_hs_miaoshou.png',
                            audio: true,
                            fullskin: true,
                            type: 'trick',
                            enable: true,
                            range: { global: 2 },
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                if (target.countCards('ej')) {
                                    player.choosePlayerCard(target, 'ej', true, '令' + get.translation(target) + '回手一张牌');
                                } else event._result = { bool: false };
                                ('step 1');
                                if (result.links?.length) {
                                    target.recycleCards(result.links);
                                }
                                ('step 2');
                                if (get.distance(target, player) == 1) target.recover();
                                else target.draw(2);
                            },
                            ai: {
                                basic: {
                                    order: 7.5,
                                    useful: 4,
                                    value: 9,
                                },
                                result: {
                                    target: 2,
                                    tag: {
                                        draw: 2,
                                        recover: 0.5,
                                    },
                                },
                            },
                        },
                        dz_hs_langzihuitou: {
                            image: 'ext:三国杀·幻/dz_hs_langzihuitou.png',
                            fullskin: true,
                            type: 'trick',
                            filterTarget: true,
                            global: ['g_dz_hs_langzihuitou', 'g_dz_hs_langzihuitou_buff'],
                            content() {
                                var evt = event.getParent(3)._trigger;
                                var suit = get.type2(evt.card);
                                target.recycleCards(evt.cards, evt.card);
                                if (!_status.dz_hs_langzihuitou) _status.dz_hs_langzihuitou = [];
                                _status.dz_hs_langzihuitou.add(suit);
                            },
                            ai: {
                                order: 1,
                                useful: 6,
                                value: 6,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                    },
                    skill: {
                        huan回击skill: {
                            //trigger:{player:['chooseToRespond','chooseToUse']},
                            //trigger:{global:'shaBegin'},
                            trigger: { global: 'useCardToPlayered' },
                            filter(event, player) {
                                return event.target == player && event.card.name == 'sha' && player.hasUsableCard('huan回击');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToUse(
                                        get.prompt('huan回击skill').replace(/发动/, '使用'),
                                        function (card, player) {
                                            if (card.name != 'huan回击') return false;
                                            return lib.filter.cardEnabled(card, player, 'forceEnable') /*&&lib.filter.targetEnabled2(card,player,player)*/;
                                        },
                                        trigger.player
                                    )
                                    .set('prompt2', get.prompt('huan回击').replace(/发动/, '使用')).targetRequired = trigger.player;
                            },
                            forced: true,
                        },
                        huan回旋镖skill: {
                            trigger: {
                                player: 'shaMiss',
                            },
                            content() {
                                player.recycleCards(trigger.cards, trigger.card);
                            },
                        },
                    },
                    translate: {
                        huan回击skill: '回击',
                        huan回击: '回击',
                        huan回击_info: '当你成为【杀】的目标时,你令来源角色选择:打出一张【闪】,或受到<>点伤害且此【杀】对你无效.\n' + '<>为1+其本回合的回手次数.\n',
                        huan回旋镖: '回旋镖',
                        huan回旋镖skill: '回旋镖',
                        huan回旋镖_info: '当你使用的【杀】被抵消时,你可以令此【杀】回手.',
                        dz_hs_huiguang: '回光返照',
                        dz_hs_huiguang_info: '出牌阶段对自己使用,将手牌摸至体力上限(至多摸五张)并将体力回复至体力上限,回合结束时你将体力失去至一点;当一名角色处于濒死状态时对其使用其将体力回复至一点幻化所有手牌',
                        dz_hs_jiasha: '袈裟',
                        dz_hs_jiasha_info: '当你装备此牌时你可以获得一枚【幻·闪】标记;当你失去此装备时,将其销毁,并幻化一张手牌',
                        dz_hs_shelizi: '舍利子',
                        dz_hs_shelizi_info: '你令一名角色回复体力后你可以摸一张牌或从移出游戏的牌中选择一张获得;限定技,你的回合内你可以将一张【桃】当做【桃园结义】使用',
                        dz_hs_shelizi_skill: '舍利子',
                        dz_hs_miaoshou: '妙手回春',
                        dz_hs_miaoshou_info: '出牌阶段对一名距离2以内角色使用.将其场上的一张牌回手,若其与你的距离为1,其回复1点体力,否则其摸两张牌.',
                        dz_hs_langzihuitou: '浪子回头',
                        dz_hs_langzihuitou_info: '你使用的牌结算后对自己使用,你回手你使用的牌本回合内场内所有角色不能使用或打出与此牌类型相同的手牌',
                        dz_hs_shuangtieji: '双铁戟',
                        dz_hs_shuangtiejix: '双铁戟',
                        dz_hs_shuangtiejix_info: '锁定技,转换技;阴,你的回合内,所有角色使用的红色手牌无效;阳,你的回合内,所有角色使用的黑色手牌无效;你的回合开始时你转换此技能的阴阳效果并根据转换后的状态将此牌置于;阴,武器栏;阳,防具栏;此装备牌会同时占用武器栏与防具栏',
                        dz_hs_shuangtieji_info: '锁定技,转换技;阴,你的回合内,所有角色使用的红色手牌无效;阳,你的回合内,所有角色使用的黑色手牌无效;你的回合开始时你转换此技能的阴阳效果并根据转换后的状态将此牌置于;阴,武器栏;阳,防具栏;此装备会同时占用武器栏与防具栏',
                        sgs_huan1: '幻',
                        sgs_huan1_tag: '<img style=width:30px src=extension/三国杀·幻/huan.png' + '>',
                    },
                    list: [
                        //牌堆
                        ['heart', '3', 'tao', null, ['sgs_huan1']],
                        ['diamond', '3', 'shan', null, ['sgs_huan1']],
                        ['diamond', '10', 'shan', null, ['sgs_huan1']],
                        ['diamond', '7', 'dz_hs_miaoshou'],
                        ['diamond', '2', 'dz_hs_jiasha'],
                        ['diamond', '13', 'dz_hs_huiguang'],
                        ['club', '5', 'sha', null, ['sgs_huan1']],
                        ['club', '13', 'sha', null, ['sgs_huan1']],
                        ['club', '8', 'dz_hs_langzihuitou'],
                        ['club', '1', 'huan回旋镖'],
                        ['club', '4', 'huan回击'],
                        ['spade', '11', 'sha', null, ['sgs_huan1']],
                        ['spade', '4', 'dz_hs_langzihuitou'],
                        ['spade', '6', 'huan回击'],
                        ['spade', '11', 'huan回击'],
                        ['spade', '8', 'dz_hs_langzihuitou'],
                        ['spade', '13', 'dz_hs_shuangtieji'],
                        ['heart', '13', 'wuxie', null, ['sgs_huan1']],
                        ['heart', '10', 'dz_hs_langzihuitou'],
                        ['heart', '5', 'dz_hs_miaoshou'],
                        ['heart', '1', 'dz_hs_shelizi'],
                    ],
                };
                lib.translate['sgs_huan_card_config'] = '三国杀·幻';
                lib.config.all.cards.add('sgs_huan');
                lib.config.cards.add('sgs_huan');
                return sgs_huan;
            });
        },
        package: {
            author: "<br>主策划:<br>造塔人  QQ:1248700807<br>代码编写:<br>鬼神易,美妙的世界  QQ:2438059583(写将可找我)<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            version: '1.0',
        },
    };
});

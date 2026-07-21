import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '始源之乱',
        content(config, pack) {
            lib.group.push('仙');
            lib.translate.仙 = '仙';
            lib.group.push('妖');
            lib.translate.妖 = '妖';
            lib.translate.西游记 = '西游记';
            lib.translate.神兽录 = '神兽录';
            lib.translate.聊斋录 = '聊斋录';
            lib.translate.山海经 = '山海经';
            lib.translate.封神壁画 = '封神壁画';
            lib.translate.海底龙宫 = '海底龙宫';
            lib.translate.上古卷轴 = '上古卷轴';
            lib.translate.上古神话 = '上古神话';
            lib.translate.节日限定 = '节日限定';
            lib.translate.阴曹地府 = '阴曹地府';
            lib.characterSort.始源之乱 = {
                聊斋录: ['xlg_baiqiulian'],
                神兽录: ['xlg_xuanwu', 'xlg_baihu', 'xlg_zhuque', 'xlg_qinglong'],
                西游记: ['xlg_niumowang', 'xlg_jiutouchong', 'xlg_liuermihou', 'xlg_baigujing'],
                山海经: ['xlg_chimei', 'xlg_cuihu', 'xlg_xingtian', 'xlg_jingwei', 'xlg_jinwu', 'xlg_luwu', 'xlg_baize'],
                节日限定: ['xlg_zhinv'],
                阴曹地府: ['xlg_heiwuchang', 'xlg_baiwuchang', 'xlg_mengpo', 'xlg_yanluowang'],
                封神壁画: ['xlg_lingbaotianzun', 'xlg_longjigongzhu', 'xlg_yuanshitianzun', 'xlg_lijing', 'xlg_shengongbao', 'xlg_yunxiao', 'xlg_qiongxiao', 'xlg_bixiao'],
                上古神话: ['xlg_jiuweihu', 'xlg_yudi', 'xlg_dianmu', 'xlg_leigong', 'xlg_zhenwudadi', 'xlg_zhurong', 'xlg_gonggong'],
                海底龙宫: ['xlg_longwang', 'xlg_jiaonv', 'xlg_longnv'],
                上古卷轴: ['xlg_shunfenger', 'xlg_zhuguang', 'xlg_taohuayao', 'xlg_qianliyan', 'xlg_xiaoming', 'xlg_fuxi', 'xlg_houyi', 'xlg_yujiang', 'xlg_yaoji', 'xlg_nvwa', 'xlg_nvying', 'xlg_goumang'],
            };
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '始源之乱',
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
                        lg_jimiezhizhao2: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                var n = [1, 2, 3, 4].randomGet();
                                if (n == 1) player.skip('phaseDiscard');
                                if (n == 2) player.skip('phaseUse');
                                if (n == 3) player.skip('phaseDraw');
                                if (n == 4) player.skip('phaseJudge');
                            },
                        },
                        lg_shanbi2: {
                            trigger: {
                                target: 'useCardToBegin',
                            },
                            _priority: -1,
                            filter(event, player) {
                                return event.card.name == 'lg_jingong';
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (card.name == 'lg_jingong') return [1, 1];
                                    },
                                },
                            },
                        },
                        xlg_hualingniao: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target != player && _status.currentPhase != target) {
                                        var num = 0;
                                        var list = game.filterPlayer(function (c) {
                                            return c.getHistory('useCard', function (evt) {
                                                return evt.targets.includes(target);
                                            });
                                        });
                                        for (var i = 0; i < list.length; i++) {
                                            var c = list[i];
                                            var hist = c.getHistory('useCard', function (evt) {
                                                return evt.targets.includes(target);
                                            });
                                            num += hist.length;
                                        }
                                        if (num <= target.countCards('hej', { suit: 'club' })) return false;
                                    }
                                },
                            },
                        },
                        xlg_fusheng: {
                            usable: 1,
                            enable: 'phaseUse',
                            selectTarget: 2,
                            filterTarget(card, player, target) {
                                return player.inRange(target) || player == target;
                            },
                            check(card) {
                                return true;
                            },
                            multitarget: true,
                            multiline: true,
                            targetprompt: ['拼点来源', '拼点目标'],
                            content() {
                                'step 0';
                                if (targets[0].canCompare(targets[1])) {
                                    targets[0].chooseToCompare(targets[1]);
                                } else event.finish();
                                ('step 1');
                                var card1 = result.player;
                                var card2 = result.target;
                                if (get.position(card1) == 'd') targets[0].gain(card2, 'gain2');
                                if (get.position(card2) == 'd') targets[1].gain(card1, 'gain2');
                                if (get.type(card1) == get.type(card2)) {
                                    targets[0].randomDiscard(2, 'h');
                                    targets[1].randomDiscard(2, 'h');
                                    player.randomDiscard(2, 'h');
                                    player.useSkill('xlg_fusheng2');
                                }
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 0.1,
                                },
                                threaten: 1,
                            },
                        },
                        xlg_fusheng2: {
                            trigger: {
                                player: '',
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xlg_fusheng2'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target);
                                    if (player.hp <= 0) {
                                        if (player == target) {
                                            return 1;
                                        }
                                        if (att > 3) {
                                            return att + Math.max(0, 5 - target.countCards('h'));
                                        }
                                        return att / 4;
                                    }
                                    if (att > 3) {
                                        return att + Math.max(0, 5 - target.countCards('h'));
                                    }
                                    return att;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].draw(4);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            return [1, 0.5];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_bolan: {
                            trigger: {
                                global: ['damageAfter', 'loseHpAfter'],
                            },
                            filter(event, player) {
                                if (event.num <= 0 || event.cards) return false;
                                if (event.name == 'damage') {
                                    return event.source && event.source != player;
                                } else {
                                    return event.player != player;
                                }
                            },
                            content() {
                                player.gain(game.createCard('lg_shanbi'), 'gain2');
                            },
                        },
                        xlg_cangming: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            check(event, player) {
                                if (!player.countCards('h', 'lg_zhiyu') && !player.countCards('h', 'lg_kuangbao')) return true;
                                return false;
                            },
                            init(player) {
                                player.storage.xlg_cangming = 0;
                            },
                            _priority: -199,
                            filter(event, player) {
                                return event.num >= player.getAttackRange() && player.storage.xlg_cangming < 3;
                            },
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.isDisabled(1) && !player.isDisabled(2)) {
                                    list.push('武器栏与防具栏');
                                }
                                if (!player.isDisabled(4) && !player.isDisabled(3)) {
                                    list.push('饰品栏');
                                }
                                if (!player.isDisabled(5) && player.storage._disableJudge != true) {
                                    list.push('宝物栏与判定区');
                                }
                                if (list.length) {
                                    player.chooseControl(list, true).set('prompt', '发动此技能？');
                                } else event.finish();
                                ('step 1');
                                if (result.control == '武器栏与防具栏') {
                                    player.disableEquip('equip1');
                                    player.disableEquip('equip2');
                                } else if (result.control == '饰品栏') {
                                    player.disableEquip('equip4');
                                    player.disableEquip('equip3');
                                } else if (result.control == '宝物栏与判定区') {
                                    player.disableEquip('equip5');
                                    player.disableJudge();
                                }
                                ('step 2');
                                player.recover(2);
                                trigger.cancel();
                                player.storage.xlg_cangming++;
                            },
                            _priority: -19900,
                        },
                        xlg_niliu: {
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            filter(event, player) {
                                return !player.hujia;
                            },
                            content() {
                                var num = game.countPlayer(function (current) {
                                    return current.hp > player.hp;
                                });
                                if (num > 0) {
                                    player.changeHujia(num);
                                    player.draw(num);
                                }
                            },
                        },
                        xlg_honghuniao: {
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (player == event.player || event.targets.length != 1) return false;
                                return player.countCards('h') >= 2;
                            },
                            forced: true,
                            usable: 1,
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard('h', 2, get.prompt('xlg_honghuniao', trigger.player), '<div class="text center">弃置两张手牌？</div>')
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
                                                target.countCards('h', function (card) {
                                                    return get.value(card, target) > 6;
                                                }) >= 2
                                            )
                                                return true;
                                            return false;
                                        })()
                                    );
                                ('step 1');
                                if (!result.bool) {
                                    player.getStat('triggerSkill').xlg_honghuniao--;
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
                                        .set('choiceList', ['弃置' + str + '的' + get.cnNumber(num) + '张手牌', '对' + str + '造成2点伤害'])
                                        .set('ai', function () {
                                            var player = _status.event.player;
                                            var eff0 = get.effect(target, { name: 'lg_duanbingxiangjie' }, player, player) * Math.min(1.7, target.countCards('h'));
                                            var eff1 = get.damageEffect(target, player, player);
                                            return eff0 > eff1 ? 0 : 1;
                                        });
                                ('step 2');
                                if (result.index == 0) player.discardPlayerCard(target, num, true, 'h');
                                else target.damage(2);
                            },
                        },
                        xlg_xianle: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            check(event, player) {
                                return event.source && get.attitude(player, event.source) <= 0;
                            },
                            filter(event, player) {
                                return event.source != undefined && event.source.countCards('he') > 0;
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'club') return 2;
                                    return -2;
                                }).judge2 = (result) => result.bool;
                                ('step 1');
                                if (result.bool && trigger.source.countCards('he')) {
                                    player.discardPlayerCard(trigger.source, 'he', 4, true);
                                }
                            },
                            ai: {
                                expose: 0.2,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkill('jueqing')) return [1, -1.5];
                                        if (get.tag(card, 'damage') && Math.random() < 0.5) {
                                            if (get.attitude(target, player) < 0) return [1, 0, 0, -1.5];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_qingluan: {
                            trigger: {
                                player: ['loseAfter'],
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            filter(event, player) {
                                var evt = event.getl(player);
                                return (
                                    evt &&
                                    evt.player == player &&
                                    evt.es &&
                                    evt.es.length &&
                                    game.hasPlayer(function (current) {
                                        return player.canUse({ name: 'lg_jingong' }, current, false);
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                player
                                    .chooseUseTarget(
                                        get.prompt2('xlg_qingluan'),
                                        {
                                            name: 'lg_jingong',
                                        },
                                        false,
                                        'nodistance'
                                    )
                                    .set('selectTarget', [1, 1])
                                    .set('oncard', function (card, player) {
                                        if (!player) player = this.player;
                                    });
                            },
                            ai: {
                                expose: 2,
                                noe: true,
                                reverseEquip: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card) == 'equip' && !get.cardtag(card, 'gifts')) return [1, 3];
                                    },
                                },
                            },
                        },
                        xlg_fushenzhou: {
                            usable: 1,
                            trigger: {
                                global: 'linkAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.player.isLinked()) return false;
                                return game.hasPlayer(function (current) {
                                    return !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_fushenzhou'), function (card, player, target) {
                                        return !target.isLinked();
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var att = get.attitude(player, target);
                                        if (att == 0) return 0;
                                        var num = lib.card.tiesuo.ai.result.target(player, target);
                                        if (att < 0) num = -num;
                                        return num;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].link();
                                } else {
                                    player.getStat('triggerSkill').xlg_fushenzhou--;
                                }
                            },
                        },
                        xlg_fulongsuo: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') == player.hp;
                            },
                            prompt: '选择目标',
                            content() {
                                'step 0';
                                target.chooseToDiscard('he', [1, Infinity], true);
                                ('step 1');
                                var num = result.cards.length;
                                if (player.countCards('h', (card) => get.color(card) == 'red') > num - 1 && player.canUse({ name: 'lg_jingong' }, target))
                                    player
                                        .chooseToDiscard(
                                            '弃置' + get.cnNumber(num) + '张红色手牌,对' + get.translation(target) + '视为使用一张【进攻】？',
                                            'h',
                                            num,
                                            (card) => get.color(card) == 'red',
                                            (card) => (get.effect(_status.event.tg, { name: 'lg_jingong' }, get.player()) && num < 3 ? 1 : -1)
                                        )
                                        .set('tg', target);
                                else event.finish();
                                ('step 2');
                                if (result.bool) player.useCard({ name: 'lg_jingong' }, target);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    target: -1,
                                },
                            },
                        },
                        xlg_shengsibu: {
                            trigger: {
                                target: 'useCardToTargeted',
                                global: 'judgeBefore',
                            },
                            filter(event, player) {
                                if (event.name == 'judge') return event.parent.name == 'phaseJudge';
                                return get.type(event.card) == 'trick';
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                game.cardsGotoOrdering(event.cards);
                                ('step 1');
                                player.chooseButton(['获得其中的一张牌', event.cards], 1, true).set('ai', function (button) {
                                    var card = button.link;
                                    var val = get.value(card);
                                    var trigger = _status.event.getTrigger();
                                    if (trigger.name == 'judge') {
                                        var judge = trigger.judge(card);
                                        if (judge > 0) {
                                            return -10 + val;
                                        }
                                    }
                                    if (get.tag(trigger.card, 'damage') && ['lg_zhiyu', 'lg_kuangbao'].includes(card.name)) return 2.5 * val;
                                    if (card.name == 'lg_diyu') return 2 * val;
                                    if (get.tag(trigger.card, 'respondShan') && card.name == 'lg_shanbi') return 1.5 * val;
                                    if (get.tag(trigger.card, 'respondSha') && card.name == 'sha') return 1.5 * val;
                                    return val;
                                });
                                ('step 2');
                                if (result.links?.length) {
                                    event.cards.remove(result.links[0]);
                                    player.gain(result.links[0], 'draw');
                                    event.card = event.cards[0];
                                    game.log(player, '将', event.card, '置于牌堆顶');
                                    game.broadcastAll(function (player) {
                                        var cardx = ui.create.card();
                                        cardx.classList.add('infohidden');
                                        cardx.classList.add('infoflip');
                                        player.$throw(cardx, 1000, 'nobroadcast');
                                    }, player);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                event.card.fix();
                                ui.cardPile.insertBefore(event.card, ui.cardPile.firstChild);
                                game.updateRoundNumber();
                            },
                            action_tag: {
                                overall: 3,
                                draw: 1,
                                active_defend: 1,
                            },
                        },
                        xlg_huangquan: {
                            init(player) {
                                player.storage.xlg_huangquan = 0;
                            },
                            intro: {
                                mark(dialog, content, player) {
                                    var num = 0;
                                    player.getAllHistory('sourceDamage', function (evt) {
                                        num += evt.num;
                                    });
                                    var str;
                                    str = '即死率: ' + num + '%';
                                    dialog.addText(str);
                                },
                            },
                            marktext: '阎',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            logTarget(event, player) {
                                return event.target;
                            },
                            line: 'thunder',
                            forced: true,
                            filter(event, player) {
                                var num = 0;
                                player.getAllHistory('sourceDamage', function (evt) {
                                    num += evt.num;
                                });
                                return Math.random() <= num / 100 && get.tag(event.card, 'damage') && event.target != player;
                            },
                            content() {
                                'step 0';
                                event.num = trigger.target.hp;
                                trigger.target.hp -= event.num;
                                trigger.target.update();
                                trigger.target.dying({ source: player });
                                ('step 1');
                                if (trigger.target.isAlive()) {
                                    trigger.target.hp += event.num;
                                    trigger.target.update();
                                }
                            },
                            group: ['xlg_huangquan_start'],
                            subSkill: {
                                start: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                    },
                                    forced: true,
                                    content() {
                                        player.markSkill('xlg_huangquan');
                                    },
                                },
                            },
                        },
                        xlg_duoming: {
                            trigger: {
                                player: 'lg_qiangjiBegin',
                            },
                            check(event, player) {
                                for (var i of game.players) {
                                    //QQ
                                    if (i != player && i.hp < 2) {
                                        if (get.attitude(player, i) > 0) return 0;
                                        return 1;
                                    }
                                }
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.hp == player.hp;
                                });
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                event.targets = game.filterPlayer(function (current) {
                                    return current != player && current.hp == player.hp;
                                });
                                //event.targets.sort(lib.sort.seat);
                                //player.line(event.targets,'green');
                                ('step 1');
                                if (event.num < event.targets.length) {
                                    player.line(event.targets[event.num], 'red');
                                    event.targets[event.num].loseHp();
                                    event.num++;
                                    event.redo();
                                } else event.finish();
                            },
                        },
                        xlg_wangsheng: {
                            usable: 1,
                            enable: 'phaseUse',
                            line: 'thunder',
                            filterTarget(card, player, target) {
                                return target.countCards('h') > player.countCards('h');
                            },
                            content() {
                                'step 0';
                                if (player != game.me) event.goto(3);
                                ('step 1');
                                player.choosePlayerCard(target, true, 'h');
                                ('step 2');
                                var card = result.links[0];
                                var suit = card.suit;
                                player.showCards(card);
                                target.discard(card);
                                if (suit == 'spade') target.loseHp();
                                if (suit == 'heart') target.recover();
                                if (suit == 'club') target.chooseToDiscard(3, 'h', true);
                                if (suit == 'diamond') target.draw(3);
                                event.finish();
                                ('step 3');
                                event.cards = target.getCards('h');
                                var a = target.countCards('h', { suit: 'spade' });
                                var b = target.countCards('h', { suit: 'club' });
                                var c = target.countCards('h', { name: 'tao' });
                                var d = target.countCards('h', { suit: 'diamond' });
                                var e = target.countCards('h', { suit: 'heart' });
                                player.chooseCardButton('展示', event.cards).ai = function (button) {
                                    if (player.getEnemies().includes(target)) {
                                        if (!target.isDamaged() && c > 0) return button.link.name == 'lg_zhiyu';
                                        if (target.countCards('h') > 2) return button.link.suit == 'spade';
                                        return button.link.suit == 'club';
                                    }
                                    if (player.getFriends().includes(target)) {
                                        if (target.isDamaged() && e > 0) return button.link.suit == 'heart';
                                        return button.link.suit == 'diamond';
                                    }
                                    return Math.random();
                                };
                                ('step 4');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    var suit = card.suit;
                                    player.showCards(card);
                                    target.discard(card);
                                    if (suit == 'spade') target.loseHp();
                                    if (suit == 'heart') target.recover();
                                    if (suit == 'club') target.chooseToDiscard(3, 'h', true);
                                    if (suit == 'diamond') target.draw(3);
                                }
                            },
                            ai: {
                                threaten: 2,
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var a = target.countCards('h', { suit: 'spade' });
                                        var b = target.countCards('h', { suit: 'club' });
                                        var c = target.countCards('h', { name: 'tao' });
                                        var d = target.countCards('h', { suit: 'diamond' });
                                        var e = target.countCards('h', { suit: 'heart' });
                                        if (player.getFriends().includes(target)) {
                                            if (d > 0 || e > 0) return 0.5;
                                            if (target.isDamaged() && e > 0) return 0.5;
                                            if (!target.isDamaged() && (e > 0 || d < 1)) return -1;
                                            return 0;
                                        }
                                        if (player.getEnemies().includes(target)) {
                                            if (a < 1) return 1;
                                            if (b < 1) return 1;
                                            if (a < 1 && b < 1) return 1;
                                            if (target.isDamaged() && d < 1 && a < 1 && b < 1) return 1;
                                            return -3;
                                        }
                                    },
                                },
                            },
                        },
                        xlg_wangque: {
                            trigger: {
                                player: 'damageAfter',
                            },
                            content() {
                                'step 0';
                                player.draw();
                                ('step 1');
                                if (_status.currentPhase && _status.currentPhase.isAlive()) {
                                    _status.currentPhase.addTempSkill('xlg_wangque_debuff');
                                }
                            },
                            subSkill: {
                                debuff: {
                                    mark: true,
                                    marktext: '忘',
                                    mod: {
                                        cardEnabled(card, player, target) {
                                            return false;
                                        },
                                        cardUsable(card, player, target) {
                                            return false;
                                        },
                                        cardRespondable(card, player, target) {
                                            return false;
                                        },
                                        cardSavable(card, player, target) {
                                            return false;
                                        },
                                    },
                                    intro: {
                                        content: '你不能使用或打出手牌',
                                    },
                                },
                            },
                        },
                        xlg_qizhu: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            mark: true,
                            marktext: '泣',
                            _priority: -10,
                            filter(event, player) {
                                if (!player.isPhaseUsing()) return false;
                                var num1 = player.getHistory('useCard').length;
                                if (num1 != player.hp) return false;
                                return event.card && get.tag(event.card, 'damage') && event.notLink();
                            },
                            forced: true,
                            intro: {
                                content(content, player) {
                                    var num1 = player.getHistory('useCard').length;
                                    var str = '这是你使用的第 ' + num1 + ' 张牌';
                                    return str;
                                },
                            },
                            content() {
                                trigger.num += 2;
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (get.tag(card, 'damage')) {
                                            var num1 = player.getHistory('useCard').length;
                                            if (num1 + 1 == player.hp) return 2;
                                        }
                                    },
                                },
                            },
                            _priority: -1000,
                        },
                        xlg_yibao: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return (
                                    player != event.player &&
                                    game.getGlobalHistory('cardMove', function (evt) {
                                        if (evt.name != 'lose' || evt.type != 'discard') return false;
                                        for (var i of evt.cards) {
                                            if (get.subtype(i, false) == 'equip5' && get.position(i, true) == 'd') return true;
                                        }
                                        return false;
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                var cards = [];
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name != 'lose' || evt.type != 'discard') return false;
                                    for (var i of evt.cards) {
                                        if (get.subtype(i, false) == 'equip5' && get.position(i, true) == 'd') cards.push(i);
                                    }
                                });
                                player.draw();
                                player.chooseButton(['获得其中的一张宝物牌', cards], true).set('ai', function (button) {
                                    return get.value(button.link, _status.event.player);
                                });
                                ('step 1');
                                if (result.bool) player.gain(result.links, 'gain2');
                            },
                        },
                        xlg_yaoshen: {
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                return event.targets && event.targets.length && (event.card.name == 'lg_duanbingxiangjie' || event.card.name == 'lg_qiangji');
                            },
                            lastDo: true,
                            forced: true,
                            logTarget: 'targets',
                            content() {
                                var list = [];
                                for (var i of trigger.targets) {
                                    list.add(i);
                                }
                                trigger.targets = trigger.targets.concat(list);
                            },
                        },
                        xlg_qigu: {
                            subSkill: {
                                useskill: {
                                    mark: true,
                                    marktext2: '泽',
                                    marktext: '泽',
                                    intro: {
                                        content: '凄骨',
                                    },
                                },
                                ondis: {
                                    mark: true,
                                    marktext2: '♥️️',
                                    marktext: '♥️️',
                                    intro: {
                                        content: '其使用过♥️️牌',
                                    },
                                },
                                cl: {
                                    marktext2: '♡',
                                    marktext: '♡',
                                    intro: {
                                        content: '其未使用过♥️️牌.',
                                    },
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        return (event.player == player || event.player == player.storage.xlg_qigu) && player.storage.xlg_qigu;
                                    },
                                    group: ['xlg_qigu_use', 'xlg_qigu_dis'],
                                    content() {
                                        'step 0';
                                        if (trigger.player == player.storage.xlg_qigu) {
                                            player.removeSkill('xlg_qigu_cl');
                                            event.finish();
                                        }
                                        ('step 1');
                                        player.storage.xlg_qigu.removeSkill('xlg_qigu_useskill');
                                        player.storage.xlg_qigu.unmarkSkill('xlg_qigu_use');
                                        player.storage.xlg_qigu.restoreSkill('xlg_qigu');
                                        ('step 2');
                                        delete player.storage.xlg_qigu;
                                        player.removeSkill('xlg_qigu_cl');
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                dis: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('xlg_qigu_ondis')) return false;
                                        var source = player.storage.xlg_qigu;
                                        if (!source || !source.isIn()) return false;
                                        var count = player.countDiscardableCards(source, 'he');
                                        return count > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var source = player.storage.xlg_qigu;
                                        var count = player.countDiscardableCards(source, 'he');
                                        if (count > 3) count = 3;
                                        source.discardPlayerCard('弃置' + get.translation(player) + '的三张牌？', 'he', count, player);
                                        ('step 1');
                                        if (result.bool) {
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                use: {
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    filter(event, player) {
                                        return event.card.suit == 'heart' && player.storage.xlg_qigu;
                                    }, //QQQ
                                    content() {
                                        'step 0';
                                        player.storage.xlg_qigu.draw(3);
                                        if (_status.currentPhase == player && !player.hasSkill('xlg_qigu_ondis')) {
                                            player.addTempSkill('xlg_qigu_ondis', 'phaseAfter');
                                        }
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                            enable: 'phaseUse',
                            position: 'h',
                            filter(event, player) {
                                if (player.hasSkill('xlg_qigu_useskill')) return false;
                                return true;
                                // return player.countCards('h',{suit:'heart'})>0;
                            },
                            filterTarget(card, player, target) {
                                if (target.hasSkill('xlg_qigu_cl')) return false;
                                if (target == player) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                target.storage.xlg_qigu = player;
                                player.addSkill('xlg_qigu_useskill');
                                target.addSkill('xlg_qigu_cl');
                                ('step 1');
                                player.markSkillCharacter('xlg_qigu_use', target, '凄骨');
                                player.awakenSkill('xlg_qigu');
                            },
                            discard: false,
                            ai: {
                                basic: {
                                    order: 10.5,
                                },
                                result: {
                                    target(player, target) {
                                        return -0.5;
                                    },
                                },
                                threaten: 1,
                            },
                        },
                        xlg_chudhui: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            filter(event, player) {
                                return true;
                            },
                            check(event, player) {
                                var suits = [];
                                var cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    suits.add(cards[i].suit);
                                }
                                if (suits.length < 4) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    true,
                                    '选择目标',
                                    function (card, player, target) {
                                        if (player == target) return false;
                                        var players = game.filterPlayer();
                                        var min = Infinity;
                                        for (var i of players) {
                                            if (i == player) continue;
                                            min = Math.min(min, i.countCards('h'));
                                        }
                                        if (target.countCards('h') == min) return true;
                                        return false;
                                    },
                                    false
                                ).ai = function (target) {
                                    return get.attitude(player, target) + 20;
                                };
                                ('step 1');
                                player.showHandcards();
                                event.target = result.targets[0];
                                var players = [];
                                var current = event.target.next;
                                players.push(event.target);
                                while (current != event.target) {
                                    if (current != player) players.push(current);
                                    current = current.next;
                                }
                                event.xlg_chunhui_curr = 0;
                                event.xlg_chunhui_players = players;
                                player.line(result.targets, 'red');
                                ('step 2');
                                event.xlg_chunhui_players[event.xlg_chunhui_curr].chooseCard({
                                    filterCard(card) {
                                        var suits = [];
                                        var cards = trigger.player.getCards('h');
                                        for (var i = 0; i < cards.length; i++) {
                                            suits.add(cards[i].suit);
                                        }
                                        return !suits.includes(card.suit);
                                    },
                                    position: 'he',
                                    selectCard: 1,
                                    ai(card) {
                                        if (get.attitude(event.target, player) > 0) {
                                            if (card.name == 'du') return 0.1;
                                            return 20 - get.value(card);
                                        }
                                        if (card.name == 'du') return 20;
                                        return 6 - get.value(card);
                                    },
                                    prompt: '交给' + get.translation(trigger.player) + '一张与其手牌花色均不同的牌',
                                });
                                ('step 3');
                                if (result.cards?.length) {
                                    trigger.player.gain(result.cards, event.xlg_chunhui_players[event.xlg_chunhui_curr], 'give');
                                    event.xlg_chunhui_players[event.xlg_chunhui_curr].chooseDrawRecover(2, 2);
                                } else game.log(event.xlg_chunhui_players[event.xlg_chunhui_curr], '未交给', trigger.player, '牌');
                                event.xlg_chunhui_curr += 1;
                                if (event.xlg_chunhui_curr == event.xlg_chunhui_players.length) event.finish();
                                else event.goto(2);
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 0.8,
                            },
                        },
                        xlg_fusu: {
                            trigger: {
                                global: 'recoverEnd',
                            },
                            filter(event, player) {
                                return event.player != player && player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return lib.filter.targetEnabled({ name: 'lg_zhiyu' }, player, target);
                                    },
                                    filterCard: true,
                                    ai1(card) {
                                        return get.unuseful(card) + 9;
                                    },
                                    ai2(target) {
                                        return get.effect(target, { name: 'lg_zhiyu' }, player);
                                    },
                                    prompt: get.prompt('xlg_fusu'),
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    player.useCard({ name: 'lg_zhiyu' }, result.cards, result.targets, false);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        xlg_queqiao: {
                            subSkill: {
                                die: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.player == player.storage.xlg_queqiao_two || event.player == player;
                                    },
                                    content() {
                                        'step 0';
                                        player.unmarkSkill('xlg_queqiao');
                                        player.storage.xlg_queqiao_two.unmarkSkill('xlg_queqiao');
                                        ('step 1');
                                        player.removeSkill('xlg_queqiao_two');
                                    },
                                    _priority: 1,
                                },
                                two: {
                                    group: 'xlg_queqiao_die',
                                    trigger: {
                                        global: 'damageSource',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.card || !event.card.name) return false;
                                        if (!event.cards || !event.cards.filterInD('od').length) return false;
                                        if (!player.storage.xlg_queqiao_two || !player.storage.xlg_queqiao_two.isIn()) return false;
                                        return event.source == player || event.source == player.storage.xlg_queqiao_two;
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.source == player) {
                                            event.source = player;
                                            event.target = player.storage.xlg_queqiao_two;
                                        } else {
                                            event.source = player.storage.xlg_queqiao_two;
                                            event.target = player;
                                        }
                                        event.cards = trigger.cards.filterInD('od');
                                        ('step 1');
                                        event.source
                                            .chooseBool('令' + get.translation(event.target) + '获得' + get.translation(event.cards) + '？')
                                            .set('ai', function () {
                                                var player = _status.event.player;
                                                var targets0 = _status.event.targets0;
                                                return get.attitude(targets0, player) > 0;
                                            })
                                            .set('targets0', event.target);
                                        ('step 2');
                                        if (result.bool) {
                                            event.target.gain(event.cards, 'give', 'log', event.source);
                                            event.target.changeHujia();
                                        }
                                    },
                                },
                            },
                            trigger: {
                                global: 'gameStart',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.hasSkill('xlg_queqiao_two')) return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current != player && current.hasSex('male');
                                    }) > 0
                                );
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_queqiao'), true, function (card, player, target) {
                                        return target != player && target.hasSex('male');
                                    })
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (att > 0) return att + 1;
                                        if (att == 0) return Math.random();
                                        return att;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'red');
                                    target.markSkillCharacter('xlg_queqiao', player, '鹊桥相会');
                                    player.markSkillCharacter('xlg_queqiao', target, '鹊桥相会');
                                    player.storage.xlg_queqiao_two = target;
                                    player.addSkill('xlg_queqiao_two');
                                }
                            },
                        },
                        xlg_qingzhi: {
                            subSkill: {
                                use: {
                                    filterCard(card) {
                                        return _status.event.suitx && card.suit == _status.event.suitx;
                                    },
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    log: false,
                                },
                            },
                            usable: 1,
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.skill && event.skill == 'xlg_qingzhi_use') return false;
                                if (!player.isPhaseUsing()) return false;
                                if (get.type(event.card) != 'basic') return false;
                                if (!['heart', 'diamond', 'club', 'spade'].includes(event.card.suit)) return false;
                                if (
                                    !player.countCards('h', function (cardx) {
                                        return cardx.suit == event.card.suit;
                                    })
                                )
                                    return false;
                                var card = {
                                    name: event.card.name,
                                    nature: event.card.nature,
                                    suit: event.card.suit,
                                };
                                return player.hasUseTarget(card);
                            },
                            content() {
                                var card = {
                                    name: trigger.card.name,
                                    nature: trigger.card.nature,
                                };
                                lib.skill.xlg_qingzhi_use.viewAs = card;
                                var next = player.chooseToUse();
                                if (next.isOnline()) {
                                    player.send(function (card) {
                                        lib.skill.xlg_qingzhi_use.viewAs = card;
                                    }, card);
                                }
                                next.set('openskilldialog', '将一张' + get.translation(trigger.card.suit) + '手牌当' + get.translation(card) + '使用');
                                next.set('norestore', true);
                                next.set('suitx', trigger.card.suit);
                                next.set('_backupevent', 'xlg_qingzhi_use');
                                next.set('custom', {
                                    add: {},
                                    replace: {
                                        window() { },
                                    },
                                });
                                next.backup('xlg_qingzhi_use');
                            },
                        },
                        xlg_lianshi: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            filter(event, player) {
                                if (
                                    !game.hasPlayer(function (current) {
                                        return current.countCards('h') == 1;
                                    })
                                )
                                    return false;
                                if ((event.filterCard && event.filterCard({ name: 'lg_jingong' }, player, event)) || event.filterCard({ name: 'lg_shanbi' }, player, event)) return true;
                                return false;
                            },
                            hiddenCard(player, name) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.countCards('h') == 1;
                                    }) &&
                                    ['lg_jingong', 'lg_shanbi'].includes(name)
                                )
                                    return true;
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [],
                                        str = '进攻';
                                    if (event.filterCard && event.filterCard({ name: 'lg_jingong' }, player, event)) list.push(['基本', '', 'lg_jingong']);
                                    if (event.filterCard && event.filterCard({ name: 'lg_shanbi' }, player, event)) {
                                        str = '闪避';
                                        list.push(['基本', '', 'lg_shanbi']);
                                    }
                                    return ui.create.dialog('将一名角色的最后一张手牌当' + str + '使用或打出', [list, 'vcard'], 'hidden');
                                },
                                check(button) {
                                    var player = _status.event.player,
                                        name = button.link[2];
                                    if (name == 'lg_shanbi') return 10;
                                    else if (
                                        game.hasPlayer(function (current) {
                                            var att = get.attitude(player, current);
                                            return current.countCards('h') && att > 0;
                                        })
                                    )
                                        return 5;
                                    return 0;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return false;
                                        },
                                        popname: true,
                                        selectCard: -1,
                                        check(card, player, target) {
                                            return true;
                                        },
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        precontent() {
                                            'step 0';
                                            player
                                                .chooseTarget('将其的最后一张手牌当' + get.translation(event.result.card) + '使用', 1, true, function (card, player, target) {
                                                    return target.countCards('h') == 1;
                                                })
                                                .set('ai', function (target) {
                                                    var att = get.attitude(player, target);
                                                    return att;
                                                });
                                            ('step 1');
                                            if (result.targets?.length) {
                                                var cds = result.targets[0].getCards('h');
                                                event.result.cards = cds;
                                                result.targets[0].recover(2);
                                            } else event.finish();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '视为使用一张' + get.translation(links[0][2]);
                                },
                            },
                            ai: {
                                order: 9,
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return current.countCards('h') == 1;
                                        })
                                    )
                                        return false;
                                },
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xlg_chuangshi: {
                            trigger: {
                                player: 'drawAfter',
                            },
                            filter(event, player) {
                                if (event.parent.name == 'xlg_chuangshi') return false;
                                if (event.getParent(2).name == 'phaseDraw') return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                event.suit = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    var suit = trigger.cards[i].suit;
                                    if (!event.suit.includes(suit)) event.suit.push(suit);
                                }
                                event.cars = get.cards(trigger.cards.length);
                                player.showCards(event.cars);
                                ('step 1');
                                var cards2 = [];
                                for (var i = 0; i < event.cars.length; i++) {
                                    if (event.suit.includes(event.cars[i].suit)) {
                                        cards2.push(event.cars[i]);
                                        event.cars.splice(i--, 1);
                                    }
                                }
                                game.cardsDiscard(event.cars);
                                if (cards2.length) {
                                    event.cards1 = cards2;
                                    player
                                        .chooseTarget(get.prompt('xlg_lianshi'), '令一名其他角色获得' + get.translation(cards2), function (card, player, target) {
                                            return target != player;
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            var num = Math.max(0, target.hp - target.countCards('h'));
                                            if (att > 0) {
                                                return att + num * 2;
                                            }
                                            return att;
                                        });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'red');
                                    target.gain(event.cards1, 'gain2');
                                }
                            },
                            ai: {
                                expose: 0.3,
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'lg_shanbi') return [1, 3];
                                    },
                                },
                            },
                        },
                        xlg_ningyuan: {
                            usable: 1,
                            trigger: {
                                global: 'damageBegin',
                            },
                            filter(event, player) {
                                return get.distance(player, event.player, 'attack') <= 1;
                            },
                            check(event, player) {
                                if (event.player == player) return true;
                                return player.countCards('h') >= 2 && get.attitude(player, event.player) > 0;
                            },
                            content() {
                                trigger.player.draw(2);
                                player.chooseToDiscard(true);
                                if (trigger.source) trigger.source.chooseToDiscard(3, true);
                            },
                        },
                        xlg_weiwu: {
                            trigger: {
                                player: 'equipBegin',
                            },
                            filter(event, player) {
                                var hs = player.getCards('h', 'lg_duanbingxiangjie');
                                if (!hs.length) return false;
                                for (var i of hs) {
                                    if (!lib.filter.cardDiscardable(i, player, 'xlg_weiwu')) return false;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('xlg_weiwu'), lib.filter.notMe).set('ai', (target) => {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    var hs = player.getCards('h', 'lg_duanbingxiangjie');
                                    event.num = hs.length;
                                    player.discard(hs);
                                } else event.finish();
                                ('step 2');
                                target
                                    .chooseToDiscard(get.translation(player) + '对你发动技能', '弃置' + get.cnNumber(num) + '张牌,失去2点体力;或令其摸' + get.cnNumber(num) + '张牌,回复2点体力')
                                    .set('ai', (card) => {
                                        if (_status.event.goon) return 0;
                                        return 5.5 - get.value(card);
                                    })
                                    .set('goon', target.hp <= 2 || get.attitude(target, player) >= 0 || player.isHealthy());
                                ('step 3');
                                if (result.bool) {
                                    target.loseHp(2);
                                } else {
                                    player.draw(num);
                                    player.recover(2);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        xlg_fenjin: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            content() {
                                var num = player.hp - trigger.source.hp;
                                player.recover();
                                trigger.source.damage(num, 'fire');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'thunderDamage')) {
                                            if (target.hp <= 1 || !target.hasSkill('xfenxin')) return [0, 0];
                                            return [0, 1.5];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_lieyan: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player
                                        .chooseTarget('令一名角色随机获得一张♦️️牌', function (card, player, target) { })
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            if (player == target) att /= 2;
                                            return att;
                                        });
                                }
                                ('step 2');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    var card = get.cardPile2(function (cardx) {
                                        return cardx.suit == 'diamond';
                                    });//QQQ
                                    if (card) target.gain(card, 'log', 'gain2');
                                    event.goto(4);
                                } else {
                                    player
                                        .chooseTarget('弃置一名其他角色的一张牌', true, function (card, player, target) {
                                            return target.countCards('he');
                                        })
                                        .set('ai', function (target) {
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.discardPlayerCard(target, true, 'he');
                                    player.line(target, 'red');
                                } else event.finish();
                                ('step 4');
                                event.finish();
                            },
                        },
                        xlg_lingmou: {
                            init(player) {
                                player.storage.xlg_lingmou = 0;
                            },
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                player.chooseToDiscard(true, 'h');
                                player.storage.xlg_lingmou++;
                            },
                        },
                        xlg_guanxin: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.player.isIn()) return false;
                                if (event.player == player) return false;
                                if (!player.countCards('he')) return false;
                                if (event.player.countCards('h')) return false;
                                return event.hs && event.hs.length;
                            },
                            content() {
                                'step 0';
                                var b = get.attitude(player, trigger.player) > 0;
                                player.chooseCard(get.prompt2('xlg_guanxin', trigger.player), 'he').set('ai', function (card) {
                                    if (!b) return 0;
                                    return 8 - get.value(card);
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.give(result.cards, trigger.player);
                                } else event.finish();
                                ('step 2');
                                player.recover();
                            },
                        },
                        xlg_shangqing: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return player.countCards('ej');
                            },
                            content() {
                                'step 0';
                                var num = player.storage.xlg_lingmou;
                                trigger.num += num;
                                player.addTempSkill('xlg_shangqing_a', { player: 'phaseDrawAfter' });
                            },
                            subSkill: {
                                a: {
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseDrawEnd',
                                    },
                                    filter: (e, p) => p.countCards('he'),
                                    forced: true,
                                    async content(event, trigger, player) {
                                        const result = await player.chooseCard(true, 'he', '将一张牌置于牌堆顶').set('ai', (c) => 4 - get.value(c)).forResult(); //QQQ
                                        if (result.cards?.length) {
                                            ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
                                            game.updateRoundNumber();
                                        }
                                    },
                                },
                            },
                        },
                        xlg_guhuo: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('he', { suit: 'diamond' }) > 1;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(2, '请弃置两张♦️️牌', 'he', true, { suit: 'diamond' });
                                player.draw('nodelay');
                                ('step 1');
                                event.targets = player.previous;
                                ('step 2');
                                player.line(event.targets, 'nodelay');
                                event.targets.chooseBool('与' + get.translation(player) + '各摸一张牌？').ai = function () {
                                    var att = get.attitude(event.targets, player);
                                    var num = event.targets.countDiscardableCards(event.targets, 'he'); //QQQ
                                    if (att < 0) {
                                        if (event.targets.previous != player && get.attitude(event.targets.previous, player) > 0) return false;
                                        if (num > 3 || num == 0) return false;
                                        return true;
                                    }
                                    return true;
                                };
                                ('step 3');
                                if (result.bool) {
                                    game.asyncDraw([player, event.targets]);
                                    if (event.targets.previous == player) {
                                        event.finish();
                                        return;
                                    }
                                } else {
                                    event.targets.chooseToDiscard('he', true);
                                    player.chooseToDiscard('he', true);
                                    event.finish();
                                    return;
                                }
                                ('step 4');
                                event.targets = event.targets.previous;
                                event.goto(2);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xlg_daoyou: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return get.itemtype(event.cards) == 'cards' && get.position(event.cards[0], true) == 'o';
                            },
                            content() {
                                'step 0';
                                player.draw(2, 'visible', 'bottom');
                                player.gain(trigger.cards, 'gain2');
                                //'step 1'
                                //player.chooseBool('将'+get.translation(trigger.cards)+'交给'+get.translation(trigger.source)+'?').set('ai',function(){
                                // var evt=status.event.parent;
                                //return get.attitude(evt.player,evt.target)>0;
                                //});
                                //'step 2'
                                //if(result.bool){
                                //trigger.source.gain(trigger.cards,player,'give');
                                //}
                                ('step 1');
                                player.chooseCard('he', true, '将一张牌交给' + get.translation(trigger.source)).set('ai', function (card) {
                                    return 5 - get.value(card);
                                });
                                ('step 2');
                                if (result.cards?.length) {
                                    trigger.source.gain(result.cards, player, 'give');
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect: {
                                    target(card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        if (get.tag(card, 'damage')) return [1, 0.55];
                                    },
                                },
                            },
                        },
                        xlg_lanzhi: {
                            trigger: {
                                global: 'gainBefore',
                            },
                            filter(event, player) {
                                if (event.parent.parent.name === 'phaseUse') return false;
                                if (player.countCards('h') === 0) return false;
                                if (event.player === player) return false;
                                return event.cards && event.cards.length;
                            },
                            content() {
                                'step 0';
                                _status.event.trigger('useSkill:LeePaiShanZhiPei');
                                _status.event.player = player;
                                ('step 1');
                                var num = player.countCards('h');
                                event.cards = get.cards(num);
                                event.dialog = ['兰芝', 'hidden', event.cards];
                                player.chooseButton(0, event.dialog, true);
                                ('step 2');
                                player.chooseCard([0, num], 'h', '选择替换的手牌').set('ai', function (card) {
                                    var ln = ui.selected.cards.length;
                                    var tCard = event.cards[ln];
                                    return get.value(tCard) - get.value(card);
                                });
                                ('step 3');
                                if (result.cards?.length) {
                                    event.handCards = result.cards;
                                    player.lose(event.handCards, ui.special);
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                event.num = event.handCards.length;
                                event.dialog[0] = '选择获得的' + get.cnNumber(event.num) + '张牌';
                                player.chooseButton(event.num, event.dialog, true).set('ai', function (button) {
                                    return get.value(button.link);
                                });
                                ('step 5');
                                event.gains = result.links;
                                event.cardTop = [];
                                event.cards.forEach(function (card) {
                                    if (event.gains.includes(card)) {
                                        event.cardTop.push(event.handCards.shift());
                                    } else {
                                        event.cardTop.push(card);
                                    }
                                });
                                player.gain(event.gains, 'log');
                                player.$draw(event.gains);
                                'step 6'(event.cardTop || event.cards).forEach(function (card) {
                                    ui.cardPile.appendChild(card);
                                });
                            },
                        },
                        xlg_wushan: {
                            usable: 1,
                            trigger: {
                                player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                                target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                            },
                            filter(event, player) {
                                if (event.preserve) return false;
                                if (player == event.player) {
                                    if (event.num1 > event.num2) {
                                        return !get.owner(event.card2);
                                    } else {
                                        return !get.owner(event.card1);
                                    }
                                } else {
                                    if (event.num1 < event.num2) {
                                        return !get.owner(event.card1);
                                    } else {
                                        return !get.owner(event.card2);
                                    }
                                }
                            },
                            check(event, player) {
                                if (player == event.player) {
                                    if (event.num1 > event.num2) {
                                        return event.card2.name != 'du';
                                    } else {
                                        return event.card1.name != 'du';
                                    }
                                } else {
                                    if (event.num1 < event.num2) {
                                        return event.card1.name != 'du';
                                    } else {
                                        return event.card2.name != 'du';
                                    }
                                }
                            },
                            content() {
                                if (player == trigger.player) {
                                    if (trigger.num1 > trigger.num2) {
                                        player.gain(trigger.card2, 'gain2');
                                    } else {
                                        player.gain(trigger.card1, 'gain2');
                                    }
                                } else {
                                    if (trigger.num1 < trigger.num2) {
                                        player.gain(trigger.card1, 'gain2');
                                    } else {
                                        player.gain(trigger.card2, 'gain2');
                                    }
                                }
                            },
                        },
                        xlg_xiancao: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current != player && current.countCards('h') > 0;
                                });
                            },
                            filterTargetx(player, target) {
                                if (target == player) return false;
                                var num = player.countCards('h');
                                if (player.hasZhuSkill('', player)) {
                                    for (var i of game.players) {
                                        //QQ
                                        if (i == player) continue;
                                        if (player.hasZhuSkill('', i) && player.group == i.group) num--;
                                    }
                                }
                                var cards = player.getCards('h', (card) => card.hasGaintag('xlg_xiancao'));
                                num -= cards.length;
                                if (num < 0) num = 0;
                                return target.countCards('h') > num;
                            },
                            content() {
                                'step 0';
                                event.filterTargetx = function (target) {
                                    if (target == player) return false;
                                    var num = player.countCards('h');
                                    if (player.hasZhuSkill('', player)) {
                                        for (var i of game.players) {
                                            //QQ
                                            if (i == player) continue;
                                            if (player.hasZhuSkill('xlg_xiancao', i) && player.group == i.group) num--;
                                        }
                                    }
                                    if (num < 0) num = 0;
                                    return target.countCards('h') > num;
                                };
                                if (player.countCards('h') == 0) {
                                    event.goto(2);
                                    return;
                                }
                                event.cards = player.getCards('h', (card) => card.hasGaintag('xlg_xiancao'));
                                var targets = game.filterPlayer(function (target) {
                                    return lib.skill.xlg_xiancao.filterTargetx(player, target);
                                });
                                targets.sort(lib.sort.seat);
                                event.targets = targets;
                                var targets2 = game.filterPlayer(event.filterTargetx);
                                targets2.sort(lib.sort.seat);
                                event.targets2 = targets2;
                                var list = ['弃置全部标记手牌', '弃置全部手牌', 'cancel2'];
                                var dialog;
                                if (event.cards.length) {
                                    dialog = ui.create.dialog('弃置全部手牌或全部标记手牌(' + get.translation(event.cards) + ')');
                                    dialog.add('全部标记手牌的目标');
                                    if (targets.length) {
                                        dialog.addSmall(targets, true);
                                    } else {
                                        dialog.add('无');
                                    }
                                    dialog.add('不弃置手牌的目标');
                                    if (targets2.length) {
                                        dialog.addSmall(targets2, true);
                                    } else {
                                        dialog.add('无');
                                    }
                                } else {
                                    list.remove('标记手牌');
                                    dialog = ui.create.dialog('你可以弃置全部手牌');
                                    dialog.add('不弃置手牌的目标');
                                    if (targets2.length) {
                                        dialog.addSmall(targets2, true);
                                    } else {
                                        dialog.add('无');
                                    }
                                }
                                player.chooseControl(dialog, list).set('ai', function (event, player) {
                                    if (event.cards.length && _status.event.controls.includes('弃置全部标记手牌')) return '弃置全部标记手牌';
                                    var enemies = game.countPlayer(function (target) {
                                        return target != player && target.countCards('h') > 0 && get.attitude(target, player) <= 0;
                                    });
                                    var friends = game.countPlayer(function (target) {
                                        return target != player && target.countCards('h') > 0 && get.attitude(target, player) > 0;
                                    });
                                    if (enemies / 2 + friends - event.targets2.length - player.countCards('h') > 1) return '弃置全部手牌';
                                    if (event.targets2.length == 0) return _status.event.controls[_status.event.controls.length - 2];
                                    return 'cancel2';
                                });
                                ('step 1');
                                if (result.control == '弃置全部手牌') {
                                    var hs = player.getCards('h');
                                    player.discard(hs);
                                } else if (result.control == '弃置全部标记手牌') {
                                    player.discard(event.cards);
                                }
                                ('step 2');
                                event.targets = game.filterPlayer(event.filterTargetx);
                                event.targets.sort(lib.sort.seat);
                                if (event.targets.length == 0) event.finish();
                                else game.log('xlg_xiancao', '的目标为', event.targets);
                                ('step 3');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    player.line(target, 'metal');
                                    target.chooseToDiscard('h', '弃置一张手牌或令' + get.translation(player) + '摸两张牌').set('ai', function (card) {
                                        if (get.attitude(target, player) > 0) return 0;
                                        return 6 - get.useful(card);
                                    });
                                } else {
                                    event.goto(6);
                                }
                                ('step 4');
                                if (result.bool) {
                                    delete event.next2;
                                } else {
                                    event.next2 = player.draw(2);
                                }
                                ('step 5');
                                if (event.next2) player.addGaintag(event.next2.result, 'xlg_xiancao');
                                if (event.targets.length) event.goto(3);
                                ('step 6');
                                var bool = true;
                                var num = player.countCards('h');
                                if (player.hasZhuSkill('', player)) {
                                    for (var i of game.players) {
                                        //QQ
                                        if (i == player) continue;
                                        if (player.hasZhuSkill('', i) && player.group == i.group) num--;
                                    }
                                }
                                if (num < 0) num = 0;
                                for (var i of game.players) {
                                    //QQ
                                    if (i.isOut() || i == player) continue;
                                    if (i.countCards('h') >= num) {
                                        bool = false;
                                        break;
                                    }
                                }
                                if (bool) {
                                    var evt = event.getParent('phaseUse', true);
                                    if (evt && evt.player == player && !evt.skipped) evt.skipped = true;
                                }
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('xlg_xiancao')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('xlg_xiancao')) return false;
                                },
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) != 'card') return;
                                    if (player.getUseValue(card) > 1 && card.hasGaintag('xlg_xiancao') && num <= 0) return 1.5;
                                },
                            },
                            ai: {
                                order: 0.5,
                                result: {
                                    player: 1,
                                },
                            },
                            action_tag: {
                                overall: 3.5,
                                in: 1,
                                draw: 2.5,
                                negative: 0.5,
                                maxHand: 1,
                            },
                        },
                        xlg_shengshi: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return target.countCards('h', { suit: 'diamond' }) && target != player;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('h', { suit: 'diamond' });
                                });
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                player.showCards(target.getCards('h'));
                                ('step 1');
                                var cds = target.getCards('h', { suit: 'diamond' });
                                target.discard(cds);
                                player.draw(cds.length);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        return -2;
                                    },
                                },
                                expose: 0.2,
                            },
                        },
                        xlg_niuzhuan: {
                            mode: ['identity'],
                            init(player) {
                                player.storage.xlg_niuzhuan = false;
                            },
                            intro: {
                                content: 'limited',
                            },
                            limited: true,
                            mark: true,
                            marktext2: '✧',
                            marktext: '✧',
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (player.storage.xlg_niuzhuan) return false;
                                return (
                                    game.countPlayer(function (current) {
                                        return current.identity != 'zhu' && current.identity != 'mingzhong';
                                    }) > 1
                                );
                            },
                            selectTarget: 2,
                            complexSelect: true,
                            multitarget: true,
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            filterTarget(card, player, current) {
                                return current.identity != 'zhu' && current.identity != 'mingzhong';
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (ui.selected.targets.length) {
                                            if (ui.selected.targets[0].identity == target.identity) return 0;
                                            if (att < 0 && target.hp > 2 && target.countCards('he') >= 4) return -1;
                                            return 0;
                                        } else {
                                            if (
                                                !game.hasPlayer(function (targetx) {
                                                    var att = get.attitude(player, targetx);
                                                    if (att < 0 && targetx.hp > 2 && targetx.countCards('he') >= 4) {
                                                        return targetx.identity != 'zhu' && targetx.identity != 'mingzhong';
                                                    }
                                                    return false;
                                                })
                                            )
                                                return 0;
                                            if (att > 0 && target.hp == 1) return 1;
                                            return 0;
                                        }
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                            content() {
                                game.broadcastAll(
                                    function (player, target, shown, shown2) {
                                        var identity = player.identity;
                                        player.identity = target.identity;
                                        if (shown || player == game.me) {
                                            player.setIdentity();
                                        }
                                        target.identity = identity;
                                        if (shown2 || target == game.me) {
                                            target.setIdentity();
                                        }
                                    },
                                    targets[0],
                                    targets[1],
                                    targets[1].identityShown,
                                    targets[0].identityShown
                                );
                                player.storage.xlg_niuzhuan = true;
                                player.awakenSkill('xlg_niuzhuan');
                            },
                        },
                        xlg_longxiao: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (player.countCards('h') != target.countCards('h')) return false;
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                //.set('small',true);
                                ('step 1');
                                if (result.bool) {
                                    event.recover = game.filterPlayer(function (current) {
                                        return get.distance(target, current, 'attack') <= 1 && current.isDamaged();
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.recover.length) {
                                    player
                                        .chooseTarget('令攻击范围内的一名角色回复1点体力,摸两张牌?', function (card, player, target) {
                                            return _status.event.list.includes(target);
                                        })
                                        .set('list', event.recover)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.attitude(player, target);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.targets?.length) {
                                    player.line(result.targets[0], 'water');
                                    result.targets[0].recover();
                                    result.targets[0].draw(2);
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var hs = player.getCards('h');
                                        if (hs.length < 3) return 0;
                                        var bool = false;
                                        for (var i = 0; i < hs.length; i++) {
                                            if (hs[i].number >= 9 && get.value(hs[i]) < 7) {
                                                bool = true;
                                                break;
                                            }
                                        }
                                        var recover = game.filterPlayer(function (current) {
                                            return get.attitude(player, current) > 0 && get.distance(target, current, 'attack') <= 1 && current.isDamaged();
                                        });
                                        if (!bool) return 0;
                                        if (recover.length) return -3;
                                        return -0.5;
                                    },
                                },
                                order: 3,
                            },
                        },
                        xlg_liuli: {
                            trigger: {
                                global: 'phaseBegin',
                            },
                            prompt(event, player) {
                                return '弃置' + get.translation(event.player) + '区域内的两张牌？';
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) >= 0) return false;
                                return true;
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('hej') > 0;
                            },
                            content() {
                                'step 0';
                                player.line(trigger.player, 'fire');
                                player.discardPlayerCard(2, true, trigger.player, 'hej');
                                ('step 1');
                                player.addTempSkill('xlg_liuli_judge');
                                player.addTempSkill('xlg_liuli_juedou');
                            },
                            subSkill: {
                                judge: {
                                    popup: false,
                                    forced: true,
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    content() {
                                        player.removeSkill('xlg_liuli_juedou');
                                    },
                                },
                                juedou: {
                                    popup: false,
                                    silent: true,
                                    forced: true,
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        if (event.player != player) return true;
                                        return false;
                                    },
                                    content() {
                                        player.useCard({ name: 'lg_baoyan' }, trigger.player, 'xlg_liuli_juedou');
                                        delete player.storage.xlg_liuli;
                                        delete player.storage.xlg_liuli1;
                                    },
                                    _priority: 1,
                                },
                            },
                            ai: {
                                threaten: 2,
                                expose: 0.2,
                            },
                        },
                        xlg_chiyu: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (i.original == 'h') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'diamond') return 2;
                                    return -2;
                                }).judge2 = (result) => result.bool;
                                ('step 1');
                                if (result.bool) {
                                    player.useSkill('xlg_chiyu2');
                                }
                            },
                            ai: {
                                threaten: 4,
                                order: 15,
                                result: {
                                    player: 1,
                                },
                                effect: {
                                    target(card) {
                                        if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 0.3;
                                    },
                                },
                            },
                        },
                        xlg_chiyu2: {
                            trigger: {
                                player: '',
                            },
                            forced: true,
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.countCards('h');
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_chiyu2'), function (card, player, target) {
                                        return target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var player = get.player();
                                        if (get.attitude(player, target) < 0) return 1;
                                        if (player == target) {
                                            if (
                                                player.countCards('h', function (card) {
                                                    return card.name == 'xlg_shanbi' && player.getUseValue(card) > 0;
                                                })
                                            )
                                                return 0.1;
                                        }
                                        return -1;
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var next = player.discardPlayerCard('h', event.target, true);
                                if (event.target == player)
                                    next.set('ai', function (button) {
                                        var player = get.player();
                                        var card = button.link;
                                        if (card.name == 'lg_shanbi') return player.getUseValue(card);
                                        return 0;
                                    });
                                ('step 3');
                                var card = result.links[0];
                                if (card.name == 'lg_shanbi' && player.hasUseTarget(card)) player.chooseUseTarget(card);
                            },
                        },
                        xlg_silie: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.pl = _status.currentPhase;
                                event.pl.judge(function (card) {
                                    if (card.suit != 'club') return -2;
                                    return 2;
                                });
                                ('step 1');
                                if (result.card.suit != 'club') {
                                    event.pl.loseMaxHp();
                                    event.pl.damage(2);
                                } else {
                                    event.pl.draw(3);
                                }
                            },
                        },
                        xlg_silie2: {
                            trigger: {
                                player: 'dyingAfter',
                            },
                            forced: true,
                            content() {
                                var hp = player.hp;
                                player.init('xlg_jingwei');
                                player.hp = hp;
                                player.update();
                                ui.clear();
                            },
                        },
                        xlg_tianhai: {
                            trigger: {
                                global: 'lg_qiangjiBegin',
                            },
                            mark: true,
                            marktext: '✧',
                            intro: {
                                content: '未觉醒',
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('h', { type: 'basic' }) < player.countCards('h', { type: 'basic' });
                            },
                            forced: true,
                            content() {
                                trigger.player.draw(3);
                                player.loseMaxHp();
                                player.removeSkill('xlg_tianhai');
                                player.addSkill('xlg_jianding');
                            },
                        },
                        xlg_jianding: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard: true,
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        if (get.position(card) == 'e') return -1;
                                        return 5 - get.value(card);
                                    },
                                    ai2(target) {
                                        return -1;
                                    },
                                    prompt: '发动此技能？',
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards;
                                    var target = result.targets[0];
                                    player.showCards(cards);
                                    target.gain(cards, player, 'log');
                                    target.storage.xlg_jianding_debuff = get.type(cards[0]);
                                    target.storage.xlg_jianding_debuff2 = player.previous;
                                    target.addSkill('xlg_jianding_debuff');
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            group: ['xlg_jianding_delete'],
                            subSkill: {
                                debuff: {
                                    mark: true,
                                    marktext: '✦',
                                    mod: {
                                        cardEnabled(card, player, target) {
                                            if (get.type(card) == player.storage.xlg_jianding_debuff) return false;
                                        },
                                        cardUsable(card, player, target) {
                                            if (get.type(card) == player.storage.xlg_jianding_debuff) return false;
                                        },
                                        cardRespondable(card, player, target) {
                                            if (get.type(card) == player.storage.xlg_jianding_debuff) return false;
                                        },
                                        cardSavable(card, player, target) {
                                            if (get.type(card) == player.storage.xlg_jianding_debuff) return false;
                                        },
                                        playerEnabled(card, player, target) {
                                            var info = get.info(card);
                                            if (target != player.previous.storage.xlg_jianding_debuff2 && (!info || !info.singleCard || !ui.selected.targets.length)) return false;
                                        },
                                    },
                                    intro: {
                                        content(type) {
                                            return '你不能使用或打出' + get.translation(type) + '牌';
                                        },
                                    },
                                },
                                delete: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('xlg_jianding_debuff');
                                        });
                                    },
                                    content() {
                                        for (var i of game.players) {
                                            //QQ
                                            if (i.hasSkill('xlg_jianding_debuff')) {
                                                player.line(i);
                                                i.removeSkill('xlg_jianding_debuff');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        xlg_yizhi: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            check(event, player) {
                                var num = event.player.getHistory('sourceDamage').length;
                                if (get.attitude(_status.event.player, event.player) > 0 && num == 0) return true;
                                if (get.attitude(_status.event.player, event.player) <= 0 && num > 0) return true;
                                return false;
                            },
                            content() {
                                var num = trigger.player.getHistory('sourceDamage').length;
                                if (num == 0) {
                                    trigger.player.randomDiscard('h');
                                }
                                if (num == 1) {
                                    player.gainMaxHp();
                                    player.recover();
                                }
                                if (num == 3) {
                                    player.gainMaxHp(3);
                                    player.recover(3);
                                }
                            },
                        },
                        xlg_dihun: {
                            ai: {
                                threaten: 1.2,
                                result: {
                                    target(player, target) {
                                        var bool = get.attitude(player, target) > 0;
                                        var es = target.getCards('e');
                                        var num = 0;
                                        for (var i = 0; i < es.length; i++) {
                                            var temp = 0;
                                            if (target.isDamaged() && get.color(es[i]) == 'red') {
                                                temp = bool ? 10 - target.hp : 0;
                                            } else if (!target.isDamaged() && get.color(es[i]) == 'red') {
                                                temp = bool ? 0 : -0.2;
                                            } else if (get.equipValue(es[i], target) < 0) {
                                                temp = bool ? 1.2 : 1;
                                            } else {
                                                temp = bool ? 0 : -0.5;
                                            }
                                            if (bool) {
                                                if (temp > num) num = temp;
                                            } else if (temp < num) num = temp;
                                        }
                                        return num;
                                    },
                                },
                                order: 10,
                                expose: 0.6,
                            },
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('e') > 0;
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            content() {
                                'step 0';
                                player.choosePlayerCard('抵魂', 'e', target, true, 'visible').set('ai', function (button) {
                                    var player = _status.event.player;
                                    var target = _status.event.target;
                                    var bool = get.attitude(player, target) > 0;
                                    var value = get.equipValue(button.link, target);
                                    if (target.isDamaged() && get.color(button.link) == 'red') {
                                        return bool ? 20 - value : 0;
                                    } else if (get.color(button.link) == 'black') {
                                        return bool ? 15 - value : value;
                                    }
                                    return bool ? -value : value;
                                });
                                ('step 1');
                                if (result.bool) {
                                } else {
                                    event.finish();
                                    return;
                                }
                                ('step 2');
                                if (get.color(result.cards[0]) == 'red') {
                                    target.lose(result.cards, ui.discardPile);
                                    target.$throw(result.cards, 1000);
                                    game.log(target, '将', result.cards, '置入了弃牌堆');
                                    target.recover();
                                } else {
                                    player.gain('visible', result.cards, target, 'give', 'bySelf', 'log');
                                }
                                ('step 3');
                                player.draw();
                                player.draw();
                                player.draw();
                            },
                        },
                        xlg_bibodangyang: {
                            round: 1,
                            trigger: {
                                source: 'damageBegin',
                            },
                            check(event, player) {
                                return event.num <= 0;
                            },
                            filter(event, player) {
                                return event.player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                trigger.cancel();
                                player.chooseCardButton(lib.translate[trigger.player.name] + '的手牌', trigger.player.getCards('h'), 2, true);
                                ('step 1');
                                if (result.bool) trigger.player.discard(result.links[0]);
                            },
                            group: ['xlg_bibodangyang_roundcount'],
                        },
                        xlg_xuhuan: {
                            trigger: {
                                player: 'phaseDrawBegin',
                            },
                            filter(event, player) {
                                return player.maxHp > player.hp;
                            },
                            check(event, player) {
                                var num = player.maxHp - player.hp;
                                return num >= 2 && player.countCards('h') < 10;
                                /*&&player.countCards('h')+num<=player.getHandcardLimit();*/
                            },
                            content() {
                                player.skip('phaseUse');
                                player.draw(player.maxHp - player.hp);
                            },
                        },
                        xlg_minghe: {
                            trigger: {
                                global: ['useCardAfter'],
                            },
                            filter(event, player) {
                                return (
                                    event.card &&
                                    get.type(event.card) == 'equip' &&
                                    get.subtype(event.card) == 'equip1' &&
                                    game.hasPlayer(function (current) {
                                        //return event.player.canUse('lg_jingong',current)&&get.distance(event.player,current,'attack')<=1;
                                        return get.distance(event.player, current, 'attack') <= 1;
                                    })
                                );
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(
                                    get.prompt2('xlg_minghe'),
                                    function (card, player, target) {
                                        return target != trigger.player && target.countCards('h') && get.distance(trigger.player, target, 'attack') <= 1;
                                    },
                                    function (target) {
                                        return -get.attitude(player, target);
                                    }
                                );
                                ('step 1');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    player
                                        .discardPlayerCard(result.targets[0], 'h', get.prompt('xlg_minghe'))
                                        .set('ai', function (button) {
                                            return Math.random();
                                        })
                                        .set('att', get.attitude(player, result.targets[0]) <= 0);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    if (get.type(result.links[0]) == 'equip') {
                                        trigger.player.useCard({ name: 'xlg_jingong' }, event.target, false);
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                order: 5,
                            },
                        },
                        xlg_jianghong: {
                            trigger: {
                                global: 'lg_kuangbaoBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he');
                            },
                            content() {
                                'step 0';
                                player.chooseCard('将一张牌移出游戏？', 'he');
                                ('step 1');
                                if (result.bool) {
                                    player.useSkill('xlg_jianghong2');
                                    player.addMark('xlg_jianghong');
                                    player.lose(result.cards, ui.special, 'toStorage');
                                    player.addTempSkill('xlg_jianghong_buff', { player: 'phaseBegin' });
                                    player.storage.xlg_jianghong_buff = player.storage.xlg_jianghong_buff.concat(result.cards);
                                    player.markSkill('xlg_jianghong_buff');
                                }
                            },
                            intro: {
                                content: '#',
                            },
                            subSkill: {
                                buff: {
                                    init(player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = [];
                                    },
                                    intro: {
                                        content: 'cards',
                                        onunmark(storage, player) {
                                            if (storage && storage.length) {
                                                player.$throw(storage, 1000);
                                                game.cardsDiscard(storage);
                                                game.log(storage, '被置入了弃牌堆');
                                                storage.length = 0;
                                            }
                                        },
                                    },
                                    marktext: '✧',
                                    mod: {
                                        targetEnabled(card, player, target, now) {
                                            if (target != player && target.storage.xlg_jianghong_buff && target.storage.xlg_jianghong_buff.length) {
                                                if (get.type(card) == get.type(target.storage.xlg_jianghong_buff[0])) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        xlg_jianghong2: {
                            trigger: {
                                player: '',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_jianghong2'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = get.player();
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var num = player.seatNum;
                                    result.targets[0].randomDiscard(num, 'hej');
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target) || card.nature == 'fire') return [1, -1.5];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_tunmo: {
                            mod: {
                                selectTarget(card, player, range) {
                                    if (card.name == 'lg_qiangji') range[1] += 1;
                                },
                            },
                        },
                        xlg_yanpo: {
                            subSkill: {
                                end: {
                                    trigger: {
                                        global: ['phaseJieshuBegin', 'dieEnd'],
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    filter(event, player) {
                                        return event.player == player.storage.xlg_yanpo_add;
                                    },
                                    content() {
                                        player.removeSkill('xlg_yanpo_add');
                                        trigger.player.damage(2, 'fire', 'nosource');
                                    },
                                    _priority: 1,
                                },
                                add: {
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    group: 'xlg_yanpo_end',
                                    onremove(player) {
                                        delete player.storage.xlg_yanpo_add;
                                        delete player.storage.xlg_yanpo_type;
                                    },
                                    intro: {
                                        content: '',
                                    },
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (event.player != player.storage.xlg_yanpo_add) return false;
                                        if (get.type(event.card) != player.storage.xlg_yanpo_type) return false;
                                        if (_status.currentPhase != event.player) return false;
                                        var info = get.info(event.card);
                                        if (info.allowMultiple == false) return false;
                                        if (event.targets && !info.multitarget) {
                                            if (event.targets.includes(player)) return false;
                                            if (!lib.filter.targetEnabled2(event.card, event.player, player)) return false;
                                            return _status.event.name == 'phaseUse' || _status.event.getParent('phaseUse').name == 'phaseUse';
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        trigger.player
                                            .chooseBool('令' + get.translation(player) + '成为' + get.translation(trigger.card) + '的目标？')
                                            .set('ai', function () {
                                                var player = _status.event.player;
                                                var targets0 = _status.event.targets0;
                                                if (get.effect(targets0, trigger.card, player, player) > 0) return true;
                                                return false;
                                            })
                                            .set('targets0', player);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.line(player, 'red');
                                            game.log(player, '额外成为了', '#y' + get.translation(trigger.card), '的目标');
                                            trigger.targets.addArray([player]);
                                        } else {
                                            event.finish();
                                        }
                                    },
                                    _priority: 1,
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                if (player.hasSkill('xlg_yanpo_add')) return false;
                                var info = get.info(event.card);
                                if (info.allowMultiple == false) return false;
                                if (event.targets && !info.multitarget) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return lib.filter.targetEnabled2(event.card, player, current) && !event.targets.includes(current);
                                        })
                                    ) {
                                        return _status.event.name == 'phaseUse' || _status.event.getParent('phaseUse').name == 'phaseUse';
                                    }
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_yanpo'), function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (trigger.targets.includes(target)) return false;
                                        return lib.filter.targetEnabled2(trigger.card, player, target);
                                    })
                                    .set('ai', function (target) {
                                        var trigger = _status.event.getTrigger();
                                        var player = _status.event.player;
                                        if (get.attitude(player, target) < 0) return -1;
                                        return get.effect(target, trigger.card, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) game.delayx();
                                    event.targets = result.targets;
                                    var target = result.targets[0];
                                    player.storage.xlg_yanpo_add = event.targets[0];
                                    player.storage.xlg_yanpo_type = get.type(trigger.card);
                                    player.addSkill('xlg_yanpo_add');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    trigger.targets.addArray(event.targets);
                                }
                            },
                        },
                        xlg_yaoling: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player.canCompare(target);
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterCard(card, player) {
                                return !player.countCards('h', function (cardx) {
                                    return cardx.number < card.number;
                                });
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            content() {
                                'step 0';
                                var next = player.chooseToCompare(target);
                                if (!next.fixedResult) next.fixedResult = {};
                                next.fixedResult[player.playerid] = cards[0];
                                ('step 1');
                                var card1 = result.player;
                                var card2 = result.target;
                                if (result.bool) {
                                    target.damage(player);
                                    if (get.position(card1) == 'd') target.gain(card1, 'gain2');
                                    if (get.position(card2) == 'd') target.gain(card2, 'gain2');
                                } else {
                                    player.damage(target);
                                    if (get.position(card1) == 'd') player.gain(card1, 'gain2');
                                    if (get.position(card2) == 'd') player.gain(card2, 'gain2');
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: 0,
                                    player: 0.5,
                                },
                                threaten: 1.1,
                            },
                        },
                        xlg_shunshan: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            filter(event, player) {
                                return !player.isMinHp();
                            },
                            content() {
                                trigger.num++;
                                var card = get.cardPile(function (card) {
                                    if (!get.tag(card, 'damage')) return false;
                                    var type = get.type(card);
                                    return type == 'basic' || type == 'trick';
                                });
                                if (card) player.gain(card, 'gain2');
                            },
                        },
                        xlg_baota: {
                            round: 2,
                            trigger: {
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (player == event.player) return false;
                                if (player.hp < 1) return false;
                                var card = event.card;
                                if (get.type(card) == 'basic' || card.name == 'trick') return true;
                                return false;
                            },
                            prompt(event, player) {
                                return '令【' + get.translation(event.card) + '】无效？';
                            },
                            check(event, player) {
                                if (event.parent.excluded.includes(player)) return false;
                                if (get.effect(player, event.card, event.player, player) >= 0) return false;
                                var card = event.card;
                                var id = player.playerid;
                                var map = event.parent.customArgs;
                                var need = 1;
                                if (get.tag(card, 'respondSha')) {
                                    if (map[id] && typeof map[id].shaReq == 'number') need = map[id].shaReq;
                                    if (
                                        player.countCards('h', {
                                            name: 'sha',
                                        }) < need
                                    ) {
                                        return true;
                                    }
                                } else if (get.tag(card, 'respondShan')) {
                                    if (map[id] && typeof map[id].shanRequired == 'number') need = map[id].shanRequired;
                                    if (
                                        player.countCards('h', {
                                            name: 'shan',
                                        }) < need
                                    ) {
                                        return true;
                                    }
                                } else if (get.tag(card, 'damage') && card.name != 'huogong') {
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                trigger.parent.excluded.add(player);
                                ('step 2');
                                player
                                    .chooseTarget(1, get.prompt2('xlg_baota'), function (card, player, target) {
                                        return target.hp != target.countCards('h');
                                    })
                                    .set('ai', function (target) {
                                        var base = 1;
                                        if (target == player) {
                                            base = target.hp > target.countCards('h') ? 2.1 : 0;
                                        } else if (target.countCards('h') < target.hp) {
                                            base = 2 / target.hp;
                                        } else {
                                            base = -4 / (Math.max(target.hp, 0.5) * target.countCards('h'));
                                        }
                                        var num = target.countCards('h') - target.hp;
                                        return base * get.attitude(player, target);
                                    });
                                ('step 3');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    player.line(target, 'red');
                                    game.log('xlg_baota', player, '令', target, target.countCards('h') < target.hp ? '摸四张牌' : '弃置四张牌');
                                    if (target.countCards('h') < target.hp) {
                                        target.draw(4);
                                        target.changeHujia();
                                    } else {
                                        target.chooseToDiscard(4, 'h', true);
                                        target.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                                    }
                                }
                            },
                            ai: {
                                threaten(viewer, player) {
                                    if (player.countCards('h') < player.hp - 1) return 0.7;
                                },
                            },
                            group: ['xlg_baota_roundcount'],
                        },
                        xlg_tongshuai: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                if (!player.countCards('h')) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.hasSkill('xlg_tongshuai_temp') && current.countCards('h');
                                });
                            },
                            filterTarget(card, player, target) {
                                return player != target && !target.hasSkill('xlg_tongshuai_temp') && target.countCards('h');
                            },
                            content() {
                                'step 0';
                                target.addTempSkill('xlg_tongshuai_temp');
                                target.chooseCard('是否展示两张手牌？若选择是,' + get.translation(player) + '可以交给你一张与这些牌类别均不相同的手牌,令你下次造成的伤害值+1', 'h', 2).ai = function (card) {
                                    if (target.isHealthy()) return -1;
                                    if (get.attitude(player, target) <= 0) return -1;
                                    if (ui.selected.cards.length == 1) {
                                        if (get.type(card) != get.type(ui.selected.cards[0])) return 3 - get.value(card);
                                        return 8 - get.value(card);
                                    } else return 6 - get.value(card);
                                };
                                ('step 1');
                                if (result.cards?.length) {
                                    event.cars = result.cards;
                                    target.showCards('统帅', event.cars);
                                    player
                                        .chooseCardButton('交给' + get.translation(target) + '一张与' + get.translation(event.cars) + '类型均不相同的手牌？', 1, player.getCards('h'))
                                        .set('filterButton', function (button) {
                                            var type = get.type(button.link);
                                            for (var i = 0; i < event.cars.length; i++) {
                                                if (get.type(event.cars[i]) == type) return false;
                                            }
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            if (target.isHealthy()) return -1;
                                            var att = get.attitude(player, target);
                                            if (att > 0) return 6 - get.value(button.link);
                                            return -1;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.links?.length) {
                                    target.gain(result.links, player, 'giveAuto');
                                    target.addTempSkill('xlg_tongshuai2', { player: 'lg_tongshuai2After' });
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (target.isHealthy()) return 0;
                                        if (att <= 0) return 0;
                                        return 3;
                                    },
                                },
                                expose: 0.3,
                            },
                            subSkill: {
                                temp: {
                                    charlotte: true,
                                },
                            },
                        },
                        xlg_tongshuai2: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            mark: true,
                            marktext: '',
                            intro: {
                                content: '你下次造成的伤害值+1.',
                            },
                            forced: true,
                            content() {
                                trigger.num++;
                            },
                        },
                        xlg_shenshe: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'lg_jingong';
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(get.prompt('xlg_shenshe'), 1, 'he', { suit: 'diamond' }).ai = function (card) {
                                    if (get.attitude(player, trigger.player) < 0) return 1;
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) trigger.player.damage();
                            },
                        },
                        xlg_xunji: {
                            trigger: {
                                player: 'loseHpBefore',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xlg_xunji'), 1, function (card, player, target) {
                                    return target.countCards('hej') > 0;
                                }).ai = function (target) {
                                    if (player.countCards('h') > 2) return -get.attitude(player, target);
                                    return;
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    player.gainPlayerCard(result.targets[0], 1, 'hej', true);
                                    trigger.cancel();
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                            },
                        },
                        xlg_xuanxu: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: 1,
                            content() {
                                'step 0';
                                if (!target.countCards('e')) player.getStat().skill.xlg_xuanxu--;
                                player
                                    .chooseCardButton('选择目标', 1, player.getCards('e'), true)
                                    .set('filterButton', function (button) {
                                        return lib.filter.canBeGained(card, target, player);
                                    })
                                    .set('ai', function (button) {
                                        return 20 - get.value(button.link);
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    target.gain(result.links, player, 'giveAuto');
                                    target.equip(result.links[0]);
                                } else event.finish();
                                ('step 2');
                                target.swapHandcards(player);
                            },
                        },
                        xlg_shane: {
                            trigger: {
                                player: ['damageBegin4', 'damageEnd'],
                                source: 'damageBegin1',
                            },
                            forced: true,
                            filter(event, player, name) {
                                if (name == 'damageBegin4') return true;
                                if (name == 'damageEnd') return event.card;
                                if (name == 'damageBegin1') return player.storage.xlg_shane_x && event.card && event.card.name == player.storage.xlg_shane_x;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = player.countCards('e', { suit: 'spade' });
                                if (event.triggername == 'damageBegin1') {
                                    trigger.num += num;
                                    event.finish();
                                }
                                if (event.triggername == 'damageBegin4') {
                                    delete player.storage.xlg_shane_x;
                                    event.finish();
                                }
                                if (event.triggername == 'damageEnd') player.chooseBool(get.prompt2('xlg_shane_x'));
                                ('step 1');
                                player.storage.xlg_shane_x = trigger.card.name;
                            },
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.storage.xlg_shane_x) {
                                        if (card.name == target.storage.xlg_shane_x) return false;
                                    }
                                },
                            },
                        },
                        xlg_yuze: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            filter(event, player) {
                                return event.source && event.source.isIn() && event.source != player && !event.source.hasJudge('lg_jimiezhizhao');
                            },
                            check(event, player) {
                                return get.attitude(player, event.source) <= 0;
                            },
                            logTarget: 'source',
                            content() {
                                var card = game.createCard('lg_jimiezhizhao');
                                trigger.source.addJudge(card);
                                trigger.source.$draw(card);
                                trigger.source.damage();
                            },
                            ai: {
                                maixie_defend: true,
                            },
                        },
                        xlg_jingu: {
                            enable: 'phaseUse',
                            usable: 1,
                            line: 'thunder',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: [1, 5],
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                player.draw(targets.length, 'nodelay');
                                event.targets = targets.slice(0);
                                ('step 1');
                                if (event.targets.length) {
                                    var tar = event.targets.shift();
                                    event.tar = tar;
                                    var info = '请交给' + get.translation(tar) + '一张牌';
                                    player
                                        .chooseCard(
                                            info,
                                            'he',
                                            function (card) {
                                                return true;
                                            },
                                            true
                                        )
                                        .set('ai', function (card) {
                                            var att = get.attitude(player, tar);
                                            var val = get.value(card);
                                            return att > 0 ? val : -val;
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                event.tar.randomGain(player.previous, true);
                                event.tar.gain(result.cards, player, 'giveAuto', 'bySelf');
                                event.goto(1);
                            },
                            group: ['xlg_jingu_nogain'],
                            global: ['xlg_jingu_effect'],
                            subSkill: {
                                effect: {
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (get.itemtype(card) == 'card' && card.hasGaintag('xlg_jingu')) return false;
                                        },
                                    },
                                    _priority: 1,
                                },
                                nogain: {
                                    trigger: {
                                        global: 'gainAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (event.player != player) {
                                            var hs = event.player.getCards('he');
                                            var evt = event.getl(player);
                                            return (
                                                evt &&
                                                evt.cards2 &&
                                                evt.cards2.filter(function (card) {
                                                    return hs.includes(card);
                                                }).length
                                            );
                                        }
                                        return false;
                                    },
                                    content() {
                                        var hs = trigger.player.getCards('he');
                                        var cards = trigger.getl(player).cards2.filter(function (card) {
                                            return hs.includes(card);
                                        });
                                        trigger.player.addGaintag(cards, 'xlg_jingu');
                                    },
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target: 1,
                                },
                            },
                        },
                        xlg_liehun: {
                            trigger: {
                                global: 'loseAfter',
                            },
                            filter(event, player) {
                                var num = 0;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (i.name == 'lg_kuangbao') num++;
                                    }
                                return event.cards && event.cards.length && num > 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = 0;
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].name == 'lg_kuangbao') {
                                        event.count++;
                                    }
                                }
                                ('step 1');
                                event.count--;
                                player
                                    .chooseTarget(get.prompt2('xlg_liehun'), function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target) < 0;
                                    });
                                ('step 2');
                                if (result.targets?.length) {
                                    event.target = result.targets[0];
                                    event.target.judge(function (card) {
                                        if (card.suit == 'heart') return -1;
                                        return 0;
                                    });
                                } else event.finish();
                                ('step 3');
                                if (result.bool == false) {
                                    player.draw();
                                    event.target.damage(2);
                                } else {
                                    var card = game.createCard('lg_jimiezhizhao');
                                    event.target.addJudge(card);
                                    event.target.$draw(card);
                                }
                                if (event.count > 0) event.goto(1);
                            },
                            ai: {
                                useShan: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondShan')) {
                                            var hastarget = game.hasPlayer(function (current) {
                                                return get.attitude(target, current) < 0;
                                            });
                                            if (target.countCards('h', 'shan')) {
                                                return [0, hastarget ? target.countCards('he') / 2 : 0];
                                            }
                                            if (target.countCards('h', 'shan') && target.countCards('h') > 2) {
                                                return [0, hastarget ? target.countCards('h') / 4 : 0];
                                            }
                                            if (target.countCards('h') > 3 || target.countCards('h') >= 2) {
                                                return [0, 0];
                                            }
                                            if (target.countCards('h') == 0) {
                                                return [1.5, 0];
                                            }
                                            if (target.countCards('h') == 1) {
                                                return [1.2, 0];
                                            }
                                            return [1, Math.min(0.5, target.countCards('h') / 4)];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_zhiwu: {
                            ai: {
                                moreDraw: true,
                            },
                            trigger: {
                                player: 'phaseEnd',
                            },
                            filter(event, player) {
                                return player.countUsed() > 0;
                            },
                            content() {
                                player.drawTo(player.countUsed());
                            },
                            init(player) {
                                player.storage.xlg_zhiwu = true;
                            },
                            intro: {
                                content(storage, player) {
                                    if (_status.currentPhase == player) return '当前你使用的牌数为' + player.countUsed() + '';
                                },
                            },
                        },
                        xlg_yisheng: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                var list = player.storage.xlg_yisheng || [];
                                var targets = player.storage.xlg_yisheng2 || [];
                                return game.hasPlayer(function (current) {
                                    var es = current.getCards('e', function (cardx) {
                                        return !list.includes(get.subtype(cardx));
                                    });
                                    for (var i = 0; i < es.length; i++) {
                                        if (
                                            game.hasPlayer(function (current2) {
                                                if (targets.includes(current2)) return false;
                                                return current != current2 && !current2.isMin() && current2.isEmpty(get.subtype(es[i]));
                                            })
                                        ) {
                                            return true;
                                        }
                                    }
                                });
                            },
                            filterTarget(card, player, target) {
                                var list = player.storage.xlg_yisheng || [];
                                if (ui.selected.targets.length) {
                                    var targets = player.storage.xlg_yisheng2 || [];
                                    if (targets.includes(target)) return false;
                                    var from = ui.selected.targets[0];
                                    var es = from.getCards('e', function (cardx) {
                                        return !list.includes(get.subtype(cardx));
                                    });
                                    for (var i = 0; i < es.length; i++) {
                                        if (target.isEmpty(get.subtype(es[i]))) return true;
                                    }
                                    return false;
                                } else {
                                    return (
                                        target.countCards('e', function (cardx) {
                                            return !list.includes(get.subtype(cardx));
                                        }) > 0
                                    );
                                }
                            },
                            targetprompt: ['失去', '获得'],
                            selectTarget: 2,
                            multitarget: true,
                            content() {
                                'step 0';
                                if (!player.storage.xlg_yisheng) player.storage.xlg_yisheng = [];
                                if (!player.storage.xlg_yisheng2) player.storage.xlg_yisheng2 = [];
                                player.storage.xlg_yisheng2.push(targets[1]);
                                player
                                    .choosePlayerCard(
                                        'e',
                                        '将' + get.translation(targets[0]) + '装备区内的一张牌移动至' + get.translation(targets[1]),
                                        true,
                                        function (button) {
                                            var player = _status.event.player;
                                            var targets0 = _status.event.targets0;
                                            var targets1 = _status.event.targets1;
                                            if (get.attitude(player, targets0) < 0 && get.attitude(player, targets1) > 0) {
                                                if (get.subtype(button.link) == 'equip2' && get.effect(targets1, button.link, player, player) > 0) {
                                                    return 15 * get.effect(targets1, button.link, player, player);
                                                }
                                                if (get.value(button.link, targets0) > 0 && get.effect(targets1, button.link, player, player) > 0) {
                                                    return get.value(button.link, targets0) * get.effect(targets1, button.link, player, player);
                                                }
                                                return get.value(button.link, targets0);
                                            } else {
                                                return get.value(button.link, targets0) * (10 - get.value(button.link, targets1));
                                            }
                                        },
                                        targets[0]
                                    )
                                    .set('targets0', targets[0])
                                    .set('targets1', targets[1])
                                    .set('filterButton', function (button) {
                                        return _status.event.targets1.isEmpty(get.subtype(button.link)) && !player.storage.xlg_yisheng.includes(get.subtype(button.link));
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    var link = result.links[0];
                                    player.storage.xlg_yisheng.add(get.subtype(link));
                                    player.addTempSkill('xlg_yisheng_clear', 'phaseUseEnd');
                                    player.storage.xlg_zaijienantao++;
                                    targets[0].$give(link, event.targets[1]);
                                    targets[1].equip(link);
                                }
                                ('step 2');
                                if (targets[1] != player) {
                                    targets[0].addTempSkill('xlg_yisheng3', 'xlg_yishengEnd');
                                    targets[0]
                                        .useCard(
                                            {
                                                name: 'lg_jingong',
                                            },
                                            targets[1],
                                            'noai',
                                            false
                                        )
                                        .set('animate', true);
                                }
                            },
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        delete player.storage.xlg_yisheng2;
                                        delete player.storage.xlg_yisheng;
                                    },
                                },
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        var bool1 = false;
                                        var bool2 = false;
                                        var att = get.attitude(player, target);
                                        var list = player.storage.xlg_yisheng || [];
                                        if (ui.selected.targets.length == 0) {
                                            var es = target.getCards('e', function (cardx) {
                                                return !list.includes(get.subtype(cardx));
                                            });
                                            for (var i = 0; i < es.length; i++) {
                                                if (get.value(es[i], target) < 0) bool1 = true;
                                                if (get.value(es[i], target) > 0) bool2 = true;
                                            }
                                            if (bool1 && att > 0) return 4;
                                            return -4;
                                        } else {
                                            if (target == player) return 4;
                                            return get.damageEffect(target, ui.selected.targets[0], target);
                                        }
                                        return 0;
                                    },
                                },
                            },
                            action_tag: {
                                overall: 4,
                                gain: 1,
                                damage: 1,
                                in: 1,
                            },
                        },
                        xlg_yisheng3: {
                            ai: {
                                unequip: true,
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player.storage.xlg_yisheng3) return true;
                                    if (arg && arg.name == 'lg_jingong') return true;
                                    return false;
                                },
                            },
                            charlotte: true,
                            onremove(player) {
                                if (player.storage.xlg_yisheng3) delete player.storage.xlg_yisheng3;
                            },
                        },
                        xlg_zaijienantao: {
                            init(player) {
                                player.storage.xlg_zaijienantao = 0;
                            },
                        },
                        xlg_zaijienantao2: {
                            trigger: {
                                player: 'dieBegin',
                            },
                            filter(event, player) {
                                return player.storage.xlg_zaijienantao > 0;
                            },
                            forced: true,
                            forceDie: true,
                            content() {
                                trigger.cancel();
                                player.storage.xlg_zaijienantao--;
                                if (_status.currentPhase) _status.currentPhase.disableEquip(['equip1', 'equip2', 'equip3', 'equip4', 'equip5'].randomGet());
                            },
                        },
                        xlg_guci: {
                            filter(event, player) {
                                return player.isPhaseUsing();
                            },
                            usable: 1,
                            trigger: {
                                player: 'useCardEnd',
                            },
                            content() {
                                'step 0';
                                var topcard = ui.cardPile.childNodes[0]; //get.cards(1)[0];
                                player.showCards(topcard);
                                var type1 = get.type(topcard, 'trick');
                                var type2 = get.type(trigger.card, 'trick');
                                if (type1 != type2) event.finish();
                                else {
                                    player.chooseToDiscard('弃置两张手牌?', 2, 'h', false).ai = function (card) {
                                        if (card.name == 'du' && player.hp <= 2) return 0;
                                        return get.value(topcard) - get.value(card);
                                    };
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.draw(2);
                                    player.storage.xlg_guci3++;
                                    player.useSkill('xlg_guci2');
                                }
                            },
                        },
                        xlg_guci2: {
                            trigger: {
                                player: '',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_guci2'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = get.player();
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var num = player.storage.xlg_guci3;
                                    result.targets[0].damage(num);
                                    ('step 2');
                                    player.out(2);
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.tag(card, 'damage')) {
                                            if (player.hasSkillTag('jueqing', false, target) || card.nature == '') return [1, -1.5];
                                        }
                                    },
                                },
                            },
                        },
                        xlg_guiming: {
                            trigger: {
                                player: 'phaseDrawBegin',
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
                                    .chooseTarget(get.prompt2('xlg_guiming'), function (card, player, target) {
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
                                var next = player.chooseCardButton(get.translation(target) + '的手牌<br>获得其中的任意张花色均不相同的牌', [1, Infinity], event.cards, true);
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
                                var num = player.previous.countCards('hej');
                                if (event.cs.length == 4) player.recover(num);
                            },
                        },
                        xlg_guci3: {
                            init(player) {
                                player.storage.xlg_guci3 = 0;
                            },
                        },
                        xlg_zhenjia: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            filter(event, player) {
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (get.type(i) == 'equip') {
                                            return true;
                                        }
                                    }
                                return false;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xlg_zhenjia'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return Math.random();
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    var target = result.targets[0];
                                    for (var i = 0; i < target.skills.length; i++) {
                                        player.addTempSkill(target.skills[i], { player: 'phaseBegin' });
                                    }
                                }
                            },
                        },
                        xlg_xushi: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'lg_duanbingxiangjie' && event.player.hp > player.hp;
                            },
                            content() {
                                trigger.num--;
                            },
                        },
                        xlg_leiyun: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            filter(event, player) {
                                var color = get.color(event.card);
                                if (!color || color == 'none') return false;
                                var bool =
                                    player
                                        .getHistory('useCard', function (evt) {
                                            return get.color(evt.card) == color && get.color(evt.card) != 'none';
                                        })
                                        .concat(
                                            player.getHistory('respond', function (evt) {
                                                return get.color(evt.card) == color && get.color(evt.card) != 'none';
                                            })
                                        ).length == 1;
                                return player.isDamaged() && bool;
                            },
                            content() {
                                player.previous.damage('thunder');
                            },
                        },
                        xlg_leigu: {
                            usable: 1,
                            trigger: {
                                player: 'useCardBegin',
                            },
                            init(player) {
                                player.storage.xlg_leigu = [];
                            },
                            logTarget: 'targets',
                            filter(event, player) {
                                if (event.targets.length != 1 || event.targets.includes(player)) return false;
                                if (!get.color(event.card) || get.color(event.card) != 'red') return false;
                                if (event.card.name != 'lg_jingong' && get.type(event.card) != 'trick') return false;
                                return get.itemtype(event.cards) == 'cards';
                            },
                            check(event, player) {
                                var tar = event.targets[0];
                                var att = get.attitude(player, tar);
                                if (event.cards[0].name == 'lg_jingong') return att < 0;
                                if (!tar.countCards('e') && tar.countCards('j')) return att > 0;
                                if (!tar.countCards('j') && tar.countCards('e')) return att < 0;
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = 0;
                                if (trigger.targets[0].countCards('h')) num++;
                                if (trigger.targets[0].countCards('e')) num++;
                                if (trigger.targets[0].countCards('j')) num++;
                                if (num > 0) {
                                    player
                                        .discardPlayerCard(trigger.targets[0], num, 'hej')
                                        .set('filterButton', function (button) {
                                            for (var i = 0; i < ui.selected.buttons.length; i++) {
                                                if (get.position(button.link) == get.position(ui.selected.buttons[i].link)) return false;
                                            }
                                            return true;
                                        })
                                        .set('ai', function (button) {
                                            var tar = _status.event.getTrigger().targets[0];
                                            var att = get.attitude(player, tar);
                                            if (att > 0) {
                                                if (get.type(button.link) == 'delay' && button.link.name != '') return 10;
                                                return -1;
                                            } else {
                                                if (get.type(button.link) == 'delay' && button.link.name != '') return -1;
                                                return 1 + get.value(button.link);
                                            }
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.storage.xlg_leigu.push(trigger.cards);
                                }
                            },
                            ai: {
                                expose: 0.1,
                            },
                            group: ['xlg_leigu_gain'],
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: ['useCardAfter', 'useCardCancelled'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.storage.xlg_leigu) return false;
                                        return player.storage.xlg_leigu.indexOf(event.cards) >= 0;
                                    },
                                    content() {
                                        'step 0';
                                        var n = player.storage.xlg_leigu.indexOf(trigger.cards);
                                        player.storage.xlg_leigu.splice(n, 1);
                                        trigger.targets[0].gain(trigger.cards, player, 'giveAuto');
                                    },
                                },
                            },
                        },
                        xlg_dianhu: {
                            trigger: {
                                source: 'damageEnd',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'xlg_dianhu') return false;
                                return game.hasPlayer(function (current) {
                                    return current != event.player && current != player && current.hp <= event.player.hp;
                                });
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_dianhu'), function (card, player, target) {
                                        return target != trigger.player && target != player && target.hp <= trigger.player.hp;
                                    })
                                    .set('ai', function (target) {
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].damage(player, 'thunder');
                                }
                            },
                            ai: {
                                threaten: 1.5,
                            },
                        },
                        xlg_xinjing: {
                            trigger: {
                                target: 'lg_duanbingxiangjieBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.chooseCard(get.prompt('xlg_xinjing'), 1, 'h').set('ai', function (card) {
                                    return 1;
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    player.showCards(card);
                                    trigger.player.chooseCard(1, 'h', { color: get.color(card) }).set('ai', function (card) {
                                        if (get.attitude(trigger.player, player) > 0) return -1;
                                        return 1;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.cards?.length) {
                                    var card = result.cards[0];
                                    trigger.player.discard(card);
                                } else {
                                    trigger.player.recover(2);
                                    trigger.cancel();
                                }
                            },
                        },
                        xlg_jiguang: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('xlg_jiguang'), function (card, player, target) {
                                    return player != target;
                                }).ai = function (target) {
                                    return get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.targets?.length) {
                                    player.line(result.targets);
                                    event.target = result.targets[0];
                                    var list = ['回复2点体力', '摸四张牌'];
                                    if (event.target.isTurnedOver()) list.push('翻至正面');
                                    player
                                        .chooseControl(list)
                                        .set('ai', function (event) {
                                            if (event.target.isTurnedOver()) return '翻至正面';
                                            if (event.target.maxHp > event.target.hp) return '回复2点体力';
                                            return '摸四张牌';
                                        })
                                        .set('prompt', '请选择一项');
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control == '回复2点体力') event.target.recover(2);
                                if (result.control == '摸四张牌') event.target.draw(4);
                                if (result.control == '翻至正面') event.target.turnOver();
                            },
                        },
                        xlg_jiushuzhihun: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard: true,
                            position: 'e',
                            check(card) {
                                return 9 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                if (target.hp >= target.maxHp) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'diamond') return 2;
                                    return -2.5;
                                });
                                ('step 1');
                                if (result.card.suit == 'diamond') target.recover(2);
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        if (player.countCards('h', { suit: 'diamond' }) == 0) return;
                                        if (target.hp == 1) return 5;
                                        if (player == target && player.countCards('h') > player.hp) return 5;
                                        return 2;
                                    },
                                },
                            },
                        },
                        xlg_tianting: {
                            trigger: {
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.card && event.card.name == 'lg_duanbingxiangjie' && event.notLink() && event.player.inRangeOf(player) && event.source && event.source.isAlive();
                            },
                            check(event, player) {
                                if (player.hp > 2) return get.attitude(player, event.source) < 0;
                                return 0;
                            },
                            prompt(event, player) {
                                var str = '';
                                str += '回复1点体力,对' + get.translation(event.source) + '造成2点伤害？';
                                return str;
                            },
                            content() {
                                player.recover();
                                player.line(trigger.source);
                                trigger.source.damage(2);
                            },
                        },
                        xlg_xuanxiao: {
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h', { type: 'trick' }) == 0;
                            },
                            content() {
                                'step 0';
                                target.judge(function (card) {
                                    if (target.hp == target.maxHp) {
                                        if (card.suit == 'club') return 1;
                                    }
                                    if (card.suit == 'club') return 2;
                                    return 1;
                                });
                                ('step 1');
                                target.gain(result.card, 'gain2');
                                if (result.suit == 'club') {
                                    target.recover();
                                    player.draw(2);
                                    target.draw(2);
                                }
                            },
                            ai: {
                                order: 6,
                                expose: 0.2,
                                result: {
                                    target(player, target, card) {
                                        if (target.isDamaged()) return 2;
                                        return 1;
                                    },
                                },
                            },
                        },
                        xlg_shenze: {
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            content() {
                                'step 0';
                                player.showHandcards();
                                var suits = [];
                                var hs = player.getCards('h');
                                for (var i = 0; i < hs.length; i++) {
                                    suits.add(hs[i].suit);
                                }
                                event.num = suits.length;
                                ('step 1');
                                var str1 = '摸三张牌';
                                var str2 = '手牌上限+3';
                                player
                                    .chooseControl([str1, str2])
                                    .set('prompt', '请选择一项')
                                    .set('ai', function (event, player) {
                                        if (player.needsToDiscard()) return 1;
                                        return 0;
                                    });
                                ('step 2');
                                if (result.index == 0) {
                                    player.draw(3);
                                } else {
                                    player.addTempSkill('xlg_shenze_maxHand');
                                    player.storage.xlg_shenze_maxHand += 3;
                                }
                                event.num--;
                                if (event.num > 0) event.goto(1);
                            },
                            subSkill: {
                                maxHand: {
                                    charlotte: true,
                                    mod: {
                                        maxHandcardBase(player, num) {
                                            return num + player.storage.xlg_shenze_maxHand;
                                        },
                                    },
                                    init(player, skill) {
                                        if (typeof player.storage.xlg_shenze_maxHand != 'number') player.storage.xlg_shenze_maxHand = 0;
                                    },
                                    onremove(player, skill) {
                                        player.storage.xlg_shenze_maxHand = 0;
                                    },
                                },
                            },
                        },
                        xlg_shengmang: {
                            trigger: {
                                player: ['useCardAfter', 'respondAfter'],
                            },
                            group: 'xlg_shengmang_1',
                            forced: true,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [];
                            },
                            filter(event, player) {
                                return event.cards && event.cards.length && get.position(event.cards[0]) == 'd';
                            }, //QQQ
                            content() {
                                'step 0';
                                player.$draw(trigger.cards);
                                game.cardsGotoSpecial(trigger.cards);
                                player.storage.xlg_shengmang.addArray(trigger.cards);
                                ('step 1');
                                player.markSkill('xlg_shengmang');
                            },
                            intro: {
                                content: 'cards',
                                onunmark(storage, player) {
                                    if (storage && storage.length) {
                                        player.$throw(storage, 1000);
                                        game.cardsDiscard(storage);
                                        game.log(storage, '被置入了弃牌堆');
                                        storage.length = 0;
                                    }
                                },
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.xlg_shengmang && player.storage.xlg_shengmang[0];
                                    },
                                    forced: true,
                                    //当你使用或打出的牌结算后,将这些牌移出游戏;结束阶段开始时,你选择一项:❶弃置这些牌;❷令一名其他角色获得这些牌
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget('令一名其他角色获得' + get.translation(player.storage.xlg_shengmang) + '？', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', (target) => get.attitude(player, target));
                                        ('step 1');
                                        if (result.targets?.length) {
                                            result.targets[0].gain(player.storage.xlg_shengmang, 'gain2');
                                            player.line(result.targets[0], 'green');
                                            game.log(result.targets[0], '获得了' + get.cnNumber(player.storage.xlg_shengmang.length) + '张牌');
                                        } else {
                                            player.$throw(player.storage.xlg_shengmang, 1000);
                                            game.cardsDiscard(player.storage.xlg_shengmang);
                                        }
                                        player.storage.xlg_shengmang = [];
                                        player.unmarkSkill('xlg_shengmang');
                                    },
                                },
                            },
                        },
                        xlg_bilei: {
                            init(player) {
                                player.storage.xlg_bilei = 0;
                            },
                            trigger: {
                                player: ['phaseEnd', 'damageEnd'],
                            },
                            filter(event, player) {
                                if (event.name === 'damage') return _status.currentPhase === player;
                                return true;
                            },
                            content() {
                                if (trigger.name === 'damage') {
                                    player.storage.xlg_bilei += trigger.num;
                                } else {
                                    player.changeHujia(player.storage.xlg_bilei);
                                    player.storage.xlg_bilei = 0;
                                }
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (_status.currentPhase !== target) return [1, 0];
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, 0];
                                        if (get.tag(card, 'damage')) return [1, 0.2];
                                    },
                                },
                            },
                        },
                        xlg_huimie: {
                            trigger: {
                                player: 'loseEnd',
                            },
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (get.color(i) == 'black') {
                                            return true;
                                        }
                                        if (get.color(i) == 'red') {
                                            return true;
                                        }
                                    }
                                return false;
                            },
                            content() {
                                player.draw(2);
                            },
                            ai: {
                                noh: true,
                                loseDraw: true,
                            },
                        },
                        xlg_leishi: {
                            trigger: {
                                source: 'dying',
                            },
                            _priority: 15,
                            forced: true,
                            filter(event, player) {
                                return player.getEnemies().includes(event.player);
                            },
                            content() {
                                'step 0';
                                var card = trigger.player.getCards('h');
                                trigger.player.lose(card, ui.special);
                                trigger.player.damage(2, 'thunder');
                                ('step 1');
                                if (_status.currentPhase == player) {
                                    player.recover(2);
                                    player.draw(2);
                                }
                            },
                            ai: {
                                threaten: 2,
                            },
                            _priority: 1500,
                        },
                        xlg_yuanqi: {
                            trigger: {
                                player: ['phaseDrawBefore'],
                            },
                            filter(event, player) {
                                return player.hasSkill('xlg_yuanqi2');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('xlg_yuanqi'), 1, function (card, player, target) {
                                    return target != player;
                                }).ai = function (target) {
                                    var att = get.attitude(player, target),
                                        hs = Math.max(0, target.countCards('h') - 2);
                                    if (att > 0) return hs;
                                    return 0;
                                };
                                ('step 1');
                                if (result.bool) {
                                    event.num = 0;
                                    event.tar = result.targets[0];
                                } else event.finish();
                                ('step 2');
                                var next = event.tar.chooseToUse();
                                next.set('prompt', '请使用指定的一张牌');
                                next.set('filterCard', function (card) {
                                    if (card.name != 'lg_zhiyu' && card.suit != 'club') return false;
                                    return lib.filter.cardEnabled(card, event.tar, 'forceEnable');
                                });
                                next.set('ai1', function (card) {
                                    if (card.suit == 'club') return 10;
                                    return game.countPlayer(function (current) {
                                        return event.tar.canUse({ name: 'lg_zhiyu' }, current) && get.effect(current, { name: 'lg_zhiyu' }, event.tar, event.tar) > 0;
                                    });
                                });
                                ('step 3');
                                if (result.bool == true) {
                                    event.num++;
                                    event.goto(2);
                                } else {
                                    player.recover(event.num);
                                    event.tar.recover(event.num);
                                    trigger.cancel();
                                }
                            },
                            ai: {
                                expose: 0.4,
                            },
                        },
                        xlg_yuanqi1: {
                            usable: 1,
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('xlg_yuanqi2', { player: 'phaseDrawEnd' });
                            },
                        },
                        xlg_yuanqi2: {},
                        xlg_fangshi: {
                            trigger: {
                                global: 'useCard',
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
                                if (numm <= 0) return true;
                                return false;
                            },
                            filter(event, player) {
                                if (!event.targets || event.targets.length < 2) return false;
                                if (!event.targets.includes(player)) return false;
                                return true;
                            },
                            logTarget: 'targets',
                            forced: true,
                            content() {
                                for (var i = 0; i < trigger.targets.length; i++) {
                                    var juese = trigger.targets[i];
                                    juese.randomDiscard('h');
                                }
                            },
                            _priority: -1000,
                        },
                        xlg_shenlou: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.storage._disableJudge && player.countDisabled() >= 5) return false;
                                return event.source != undefined && event.source != player;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.source);
                                if (event.source.isTurnedOver()) {
                                    if (att > 0 && !player.storage._disableJudge) return true;
                                    if (att > 0 && player.countCards('e') < 2) return true;
                                    return false;
                                } else {
                                    if (att < 0 && !player.storage._disableJudge) return true;
                                    if (att < 0 && player.countCards('e') < 2) return true;
                                    return false;
                                }
                            },
                            logTarget: 'source',
                            content() {
                                'step 0';
                                var list = [];
                                if (!player.storage._disableJudge) list.push('判定区');
                                if (player.countDisabled() < 5) list.push('装备区');
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
                                if (dis == '装备区') {
                                    if (!player.isDisabled(1)) player.disableEquip(1);
                                    if (!player.isDisabled(2)) player.disableEquip(2);
                                    if (!player.isDisabled(3)) player.disableEquip(3);
                                    if (!player.isDisabled(4)) player.disableEquip(4);
                                    if (!player.isDisabled(5)) player.disableEquip(5);
                                } else if (dis == '判定区') {
                                    player.disableJudge();
                                }
                                var num = trigger.source.next.hp;
                                trigger.source.loseHp(num)._triggered = null;
                                player.recover(num)._triggered = null;
                            },
                        },
                        xlg_nianhua: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            line: 'fire',
                            forceDie: true,
                            contentBefore() {
                                'step 0';
                                if (player.hp > 0) {
                                    event.num = player.hp;
                                    player.hp -= event.num;
                                }
                                player.dying();
                                ('step 1');
                                player.hp += event.num;
                                player.update();
                            },
                            content() {
                                'step 0';
                                event.targets = targets.slice(0);
                                ('step 1');
                                event.current = event.targets.shift();
                                ('step 2');
                                var next = event.current.chooseToRespond({ name: 'lg_jingong' });
                                next.set('ai', function (card) {
                                    if (get.damageEffect(event.current, player, event.current) >= 0) return 0;
                                    if (event.current.hasSkillTag('noSha')) {
                                        return -1;
                                    }
                                    return 11 - get.value(card);
                                });
                                next.autochoose = lib.filter.autoRespondShan;
                                ('step 3');
                                if (result.bool == false) {
                                    event.current.damage('nocard');
                                }
                                if (event.targets.length) event.goto(1);
                            },
                            group: ['xlg_nianhua_recover'],
                            subSkill: {
                                recover: {
                                    forced: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    filter(event, player) {
                                        return event.getParent(0).name == 'xlg_nianhua';
                                    },
                                    content() {
                                        player.recover(2);
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target) {
                                        var taos =
                                            player.countCards('h', function (card) {
                                                return get.tag(card, 'save');
                                            }) + player.countMark('');
                                        if (taos == 0) return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7;
                                        return -1.5;
                                    },
                                },
                            },
                        },
                        xlg_nianhua2: {
                            trigger: {
                                player: 'xlg_nianhuaAfter',
                            },
                            forced: true,
                            content() {
                                player.removeSkill('xlg_nianhua');
                            },
                        },
                        xlg_xianrou: {
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            content() {
                                player.addTempSkill('xlg_xianrou_one');
                                player.addTempSkill('xlg_xianrou_two');
                                var list = game.filterPlayer(function (target) {
                                    return true;
                                });
                                var target = list.randomGet();
                                player.useCard({ name: 'lg_baoyan' }, target, false);
                            },
                            subSkill: {
                                one: {
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'lg_baoyan' && _status.currentPhase == player;
                                    },
                                    content() {
                                        player.draw(2);
                                        trigger.player.draw(2);
                                        player.addSkill('xlg_nianhua');
                                    },
                                },
                                two: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.card && event.card.name == 'lg_baoyan' && _status.currentPhase == player;
                                    },
                                    content() {
                                        'step 0';
                                        player.removeSkill('xlg_xianrou_one');
                                        player.removeSkill('xlg_xianrou_two');
                                    },
                                },
                            },
                        },
                        xlg_shixuan: {
                            enable: 'phaseUse',
                            selectCard: [1, Infinity],
                            filterCard(card) {
                                return true;
                            },
                            position: 'he',
                            selectTarget: 1,
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                event.discount = cards.length;
                                var tar = target;
                                target.discardPlayerCard(target, event.discount, 'hej', '弃置区域内的' + get.cnNumber(event.discount) + '张牌？否则你摸' + get.cnNumber(event.discount) + '张牌且翻面').set('ai', function (button) {
                                    var card = button.link;
                                    if (tar.isTurnedOver()) {
                                        return -10;
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.finish();
                                }
                                ('step 2');
                                target.draw(event.discount);
                                ('step 3');
                                target.turnOver();
                            },
                        },
                        xlg_shijie: {
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            group: 'xlg_shijie_two',
                            nobracket: true,
                            filter(event, player) {
                                if (_status.currentPhase == player) return false;
                                return event.card && get.type(event.card, 'trick') == 'trick' && event.player != player && !event.targets.includes(player) && event.targets.length == 1 && !player.hasSkill('xlg_shijie_one');
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.effect(event.targets[0], event.card, event.player, player) <= get.effect(player, event.card, event.player, player);
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', 2, true);
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    trigger.parent.triggeredTargets1.length = 0;
                                    trigger.targets.push(player);
                                }
                            },
                            subSkill: {
                                two: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        return get.type(event.card, 'trick') == 'trick';
                                    },
                                    content() {
                                        var num = player.countCards('h', { suit: 'diamond' }) + trigger.player.countCards('h', { suit: 'diamond' });
                                        player.addTempSkill('xlg_shijie_one');
                                        player.gainPlayerCard(trigger.player, num, 'he', 'visible');
                                    },
                                },
                                one: {
                                    mark: true,
                                    marktext: '视',
                                    intro: {
                                        content: '视界禁止发动',
                                    },
                                    forced: true,
                                },
                            },
                        },
                        xlg_hunpo: {
                            global: 'xlg_hunpo_buff',
                            shaRelated: true,
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                if (event.target.hp < player.hp) return false;
                                if (event.card.name != 'lg_jingong') return false;
                                return true;
                            },
                            check(event, player) {
                                var att = get.attitude(player, event.target);
                                if (event.target == player) {
                                    var cards = player.getCards('h');
                                    var good = 0;
                                    var trick = 0;
                                    for (var i = 0; i < cards.length; i++) {
                                        if (get.type(cards[i]) == 'trick' || get.type(cards[i]) == 'delay') {
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
                                player.line(trigger.target, 'red');
                                trigger.target
                                    .chooseCard('he', 1, '将一张♣️️牌置于牌堆底才能无效' + get.translation(trigger.card))
                                    .set('filterCard', function (card) {
                                        return card.suit == 'club';
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
                                    trigger.parent.directHit.push(trigger.target);
                                    trigger.target.loseHp();
                                    event.finish();
                                }
                                ('step 2');
                                ('step 3');
                                event.card.fix();
                                ui.cardPile.appendChild(event.card);
                                game.log(trigger.target, '将', event.card, '置于牌堆底');
                                trigger.parent.excluded.push(trigger.target);
                                player.draw(2);
                            },
                        },
                        xlg_hunpo_buff: {
                            forced: true,
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.suit != 'club') return;
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hasSkill('xlg_hunpo') && i.hp <= player.hp) return num + 2;
                                    }
                                },
                                aiUseful(player, card, num) {
                                    if (card.suit != 'club') return;
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hasSkill('xlg_hunpo') && i.hp <= player.hp) return num + 4;
                                    }
                                },
                            },
                        },
                        xlg_xinzhi: {
                            trigger: {
                                player: 'recoverBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                var hs = player.getCards('h');
                                if (!hs.length) return false;
                                for (var i of hs) {
                                    if (!lib.filter.cardDiscardable(i, player, 'xlg_xinzhi')) return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                var num = cards.length;
                                var prompt2 = '弃置全部手牌？';
                                player
                                    .chooseTarget(get.prompt('xlg_xinzhi'), prompt2, [1, num], lib.filter.notMe)
                                    .set('ai', (target) => {
                                        if (!_status.event.goon) return 0;
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set(
                                        'goon',
                                        num / 2 <
                                        game.countPlayer((current) => {
                                            return 2 - get.attitude(player, current) > 0;
                                        })
                                    );
                                ('step 1');
                                if (result.targets?.length) {
                                    event.targets = result.targets;
                                    event.targets.sortBySeat();
                                    player.chooseToDiscard(true, 'h', player.countCards('h'));
                                } else event.finish();
                                ('step 2');
                                var target = targets.shift();
                                event.target = target;
                                target
                                    .chooseCard('交给' + get.translation(player) + '一张【闪避】？', (card) => {
                                        return card.name == 'lg_shanbi';
                                    })
                                    .set('ai', (card) => {
                                        if (_status.event.goon) return 0;
                                        return 6 - get.value(card);
                                    })
                                    .set('goon', get.effect(target, { name: 'losehp' }, target, target) >= 0);
                                ('step 3');
                                if (result.bool) target.give(result.cards, player, true);
                                else target.loseHp(2);
                                if (targets.length) event.goto(2);
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        xlg_shihun: {
                            trigger: {
                                player: 'loseHpBegin',
                            },
                            filter(event, player) {
                                if (game.shuffleNumber == 0) return player.isDamaged();
                                return true;
                            },
                            content() {
                                var num = player.countCards('e');
                                player[game.shuffleNumber > 0 ? 'draw' : 'recover'](num);
                            },
                        },
                        xlg_yuwei: {
                            trigger: {
                                player: 'discardPlayerCardBegin',
                            },
                            content() {
                                'step 0';
                                lib.skill.pingjian.initList();
                                ('step 1');
                                event.ch = [];
                                var list = [];
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var ch = _status.characterlist[i];
                                    if (lib.character[ch][3].length) event.ch.addArray(lib.character[ch][3]);
                                }
                                for (var i = 0; i < event.ch.length; i++) {
                                    if (lib.skill[event.ch[i]] && lib.skill[event.ch[i]].forced) list.add(event.ch[i]);
                                }
                                for (var i in player.disabledSkills) {
                                    if (list.includes(i)) list.remove(i);
                                }
                                list.removeArray(player.getSkills());
                                if (list.length) {
                                    var skill = list.randomGet();
                                    player.addSkillLog(skill);
                                }
                            },
                        },
                        xlg_humei: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            logTarget: 'source',
                            filter(event, player) {
                                return event.source != undefined && event.num > 0 && event.source.countCards('h');
                            },
                            content() {
                                'step 0';
                                event.num = Math.min(trigger.num, 9);
                                ('step 1');
                                event.num--;
                                player.viewHandcards(trigger.source);
                                ('step 2');
                                var list = [];
                                var cards = trigger.source.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    list.add(get.type(cards[i]));
                                }
                                if (list.length > 1) {
                                    player.chooseControl(list).set('prompt', '请选择一种类别').ai = function () {
                                        return list.randomGet();
                                    };
                                } else {
                                    event._result = { control: list[0] };
                                }
                                ('step 3');
                                if (result.control) {
                                    var type = result.control;
                                    var cards = trigger.source.getCards('h', { type: type });
                                    player.chat(get.translation(type + 2));
                                    game.log(player, '选择了', '#y' + get.translation(type + 2));
                                    trigger.source.give(cards, player);
                                }
                                ('step 4');
                                if (event.num > 0 && trigger.source.countCards('h')) {
                                    player.chooseBool(get.prompt2('xlg_humei'));
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.goto(1);
                                }
                            },
                        },
                        xlg_huhuo: {
                            trigger: {
                                player: 'die',
                            },
                            forceDie: true,
                            forced: true,
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer(function (current) {
                                    return current != player;
                                });
                                ('step 1');
                                var target = event.targets.shift();
                                target.addSkill('xlg_huhuo_debuff');
                                target.recover();
                                if (event.targets.length) event.redo();
                            },
                            subSkill: {
                                debuff: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    silent: true,
                                    firstDo: true,
                                    filter(event, player) {
                                        return player.isPhaseUsing();
                                    },
                                    content() {
                                        var stat = player.getStat('skill');
                                        if (!stat.xlg_huhuo_debuff) stat.xlg_huhuo_debuff = 0;
                                        stat.xlg_huhuo_debuff++;
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var stat = player.getStat('skill');
                                            if (stat.xlg_huhuo_debuff && stat.xlg_huhuo_debuff >= player.maxHp) return false;
                                        },
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        xlg_shoulie: {
                            trigger: {
                                source: 'damageBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.player.countDisabled() >= 5) return false;
                                return event.player.isIn();
                            },
                            content() {
                                'step 0';
                                var list = [
                                    ['装备', '', 'lg_cannue'],
                                    ['装备', '', 'lg_liewang'],
                                    ['装备', '', 'lg_jingji'],
                                    ['装备', '', 'lg_xingzhilei'],
                                    ['装备', '', 'lg_zhenzu'],
                                ];
                                var disCount = Math.min(trigger.num, 5 - trigger.player.countDisabled());
                                var str = '废除' + get.translation(trigger.player) + disCount + '个装备栏？';
                                player
                                    .chooseButton(disCount, 'hidden', [str, [list, 'vcard'], 'hidden'])
                                    .set('filterButton', function (button) {
                                        var card = { name: button.link[2] };
                                        var subtype = get.subtype(card);
                                        if (trigger.player.isDisabled(subtype)) return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var att = get.attitude(player, trigger.player);
                                        var card = { name: button.link[2] };
                                        var subtype = get.subtype(card);
                                        if (att > 0) {
                                            return -1;
                                        }
                                        if (att <= 0) {
                                            if (trigger.player.getEquip(subtype)) return 1;
                                            return 0.5;
                                        }
                                        return 0.5;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.addSkill('xlg_shoulie1');
                                    trigger.player.markAuto(
                                        'xlg_shoulie1',
                                        (function (links) {
                                            var list = [];
                                            for (var i of links) {
                                                var card = { name: i[2] };
                                                var subtype = get.subtype(card);
                                                list.add(subtype);
                                                if (!trigger.player.storage.xlg_shoulie_source) trigger.player.storage.xlg_shoulie_source = {};
                                                trigger.player.storage.xlg_shoulie_source[subtype] = player;
                                                trigger.player.disableEquip(subtype);
                                            }
                                            return list;
                                        })(result.links)
                                    );
                                }
                            },
                        },
                        xlg_shoulie1: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            forced: true,
                            charlotte: true,
                            popup: false,
                            filter(event, player, name) {
                                var storage = player.getStorage('xlg_shoulie1');
                                if (!storage.length || player.countDisabled() == 0) {
                                    delete player.storage.xlg_shoulie2;
                                    delete player.storage.xlg_shoulie_source;
                                    player.removeSkill('xlg_shoulie1');
                                    return false;
                                }
                                return true;
                            },
                            content() {
                                'step 0';
                                if (!player.storage.xlg_shoulie2) player.storage.xlg_shoulie2 = {};
                                if (!player.storage.xlg_shoulie2[trigger.card.name]) player.storage.xlg_shoulie2[trigger.card.name] = 0;
                                player.storage.xlg_shoulie2[trigger.card.name]++;
                                game.log('暗中狩猎', trigger.card.name, player.storage.xlg_shoulie2[trigger.card.name]);
                                if (player.storage.xlg_shoulie2[trigger.card.name] != 3) {
                                    event.finish();
                                    return;
                                } else {
                                    player.storage.xlg_shoulie2[trigger.card.name] = 0;
                                }
                                var listEquip = ['equip1', 'equip2', 'equip3', 'equip4', 'equip5'];
                                var storage = player.getStorage('xlg_shoulie1');
                                var list2 = listEquip.filter((e) => storage.includes(e) && player.isDisabled(e));
                                if (!list2.length) {
                                    event.finish();
                                    return;
                                }
                                var list = [
                                    ['装备', '', 'lg_cannue'],
                                    ['装备', '', 'lg_liewang'],
                                    ['装备', '', 'lg_jingji'],
                                    ['装备', '', 'lg_xingzhilei'],
                                    ['装备', '', 'lg_zhenzu'],
                                ];
                                var str = '请选择一个装备栏回复';
                                player
                                    .chooseButton(true, 1, 'hidden', [str, [list, 'vcard'], 'hidden'])
                                    .set('filterButton', function (button) {
                                        var card = { name: button.link[2] };
                                        var subtype = get.subtype(card);
                                        if (!player.isDisabled(subtype)) return false;
                                        var storage = player.getStorage('xlg_shoulie1');
                                        if (storage.includes(subtype)) return true;
                                        return false;
                                    })
                                    .set('ai', function (button) {
                                        return 3;
                                    });
                                ('step 1');
                                if (result.links?.length) {
                                    var card = { name: result.links[0][2] };
                                    var subtype = get.subtype(card);
                                    player.enableEquip(subtype);
                                    player.unmarkAuto('xlg_shoulie1', [subtype]);
                                    if (player.storage.xlg_shoulie_source) {
                                        var source = player.storage.xlg_shoulie_source[subtype];
                                        if (source && source.isAlive()) {
                                            delete player.storage.xlg_shoulie_source[subtype];
                                            source.drawTo(9);
                                        }
                                    }
                                }
                            },
                        },
                        xlg_manyan: {
                            intro: {
                                content(num, player) {
                                    var str = '';
                                    if (player == game.me) {
                                        for (var i in num) {
                                            if (str != '') str += '<br>';
                                            str += get.translation(i) + ':' + num[i] + '次';
                                        }
                                    }
                                    return str;
                                },
                            },
                            init(player, skill) {
                                player.storage[skill] = {};
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            filter: (e, p) => p.storage.xlg_manyan[e.card.name] % 2 == 0,
                            group: 'xlg_manyan_a',
                            subSkill: {
                                a: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: 1.618,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var n = trigger.card.name;
                                        if (player.storage.xlg_manyan[n] != undefined) player.storage.xlg_manyan[n]++;
                                        else player.storage.xlg_manyan[n] = 1;
                                        player.markSkill('xlg_manyan');
                                    },
                                    _priority: 161.8,
                                },
                            },
                            content() {
                                player.useSkill('xlg_manyan2');
                            },
                        },
                        xlg_manyan2: {
                            trigger: {
                                player: '',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('xlg_manyan2'), function (card, player, target) {
                                        return target != player;
                                    })
                                    .set('ai', function (target) {
                                        var player = get.player();
                                        return get.damageEffect(target, player, player);
                                    });
                                ('step 1');
                                if (result.targets?.length) {
                                    result.targets[0].loseHp(2);
                                }
                            },
                        },
                        xlg_weiguang: {
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').set('ai', function (event) {
                                    var players = game.filterPlayer();
                                    var danger = 0;
                                    var friend = 0;
                                    for (var i of players) {
                                        if (i == player) continue;
                                        if (get.attitude(player, i) > 0) {
                                            friend += 1;
                                            if (i.hp <= 2) danger += 1;
                                        }
                                        if (get.attitude(player, i) < 0) {
                                            friend -= 1;
                                            if (i.hp <= 2) danger -= 1;
                                        }
                                    }
                                    if (friend >= 1 || danger <= -1) {
                                        if (Math.random() >= 0.3) return 'heart2';
                                        return 'diamond2';
                                    } else if (friend <= -1 || danger >= 1) {
                                        if (Math.random() >= 0.5) return 'spade2';
                                        return 'club2';
                                    }
                                    var rand = Math.ceil(Math.random() * 6);
                                    var suit = 'heart2';
                                    if ([1, 4].includes(rand)) {
                                        suit = 'diamond2';
                                    } else if ([2, 5].includes(rand)) {
                                        suit = 'club2';
                                    } else if (rand == 3) {
                                        suit = 'spade2';
                                    } else {
                                        suit = 'heart2';
                                    }
                                    return suit;
                                });
                                ('step 1');
                                if (result.control) {
                                    game.log(player, '选择了' + get.translation(result.control));
                                    var players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i == player) continue;
                                        i.addSkill('xlg_weiguang_' + result.control);
                                    }
                                }
                            },
                            subSkill: {
                                heart2: {
                                    charlotte: true,
                                    marktext: '',
                                    mark: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'heart') return false;
                                        },
                                        aiValue(player, card) {
                                            if (card.suit == 'heart') return -1;
                                        },
                                        aiUseful(player, card) {
                                            if (card.suit == 'heart') return -1;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出♥️️︎️牌',
                                    },
                                    ai: {
                                        useful: -1,
                                        value: -1,
                                        effect: {
                                            player(card, player, target, current) {
                                                if (card.suit == 'heart') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                                diamond2: {
                                    charlotte: true,
                                    marktext: '',
                                    mark: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'diamond') return false;
                                        },
                                        aiValue(player, card) {
                                            if (card.suit == 'diamond') return -1;
                                        },
                                        aiUseful(player, card) {
                                            if (card.suit == 'diamond') return -1;
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出♦️️︎牌',
                                    },
                                    ai: {
                                        useful: -1,
                                        value: -1,
                                        effect: {
                                            player(card, player, target, current) {
                                                if (card.suit == 'diamond') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                },
                                club2: {
                                    charlotte: true,
                                    marktext: '',
                                    mark: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'club') return false;
                                        },
                                        aiValue(player, card) {
                                            if (card.suit == 'club') return -1;
                                        },
                                        aiUseful(player, card) {
                                            if (card.suit == 'club') return -1;
                                        },
                                    },
                                    ai: {
                                        useful: -1,
                                        value: -1,
                                        effect: {
                                            player(card, player, target, current) {
                                                if (card.suit == 'club') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出♣️️︎️牌',
                                    },
                                },
                                spade2: {
                                    charlotte: true,
                                    marktext: '',
                                    mark: true,
                                    mod: {
                                        cardEnabled(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardUsable(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardRespondable(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        cardSavable(card, player) {
                                            if (card.suit == 'spade') return false;
                                        },
                                        aiValue(player, card) {
                                            if (card.suit == 'spade') return -1;
                                        },
                                        aiUseful(player, card) {
                                            if (card.suit == 'spade') return -1;
                                        },
                                    },
                                    ai: {
                                        useful: -1,
                                        value: -1,
                                        effect: {
                                            player(card, player, target, current) {
                                                if (card.suit == 'spade') return 'zeroplayertarget';
                                            },
                                        },
                                    },
                                    intro: {
                                        content: '不能使用或打出♠️️︎️牌',
                                    },
                                },
                            },
                        },
                        xlg_qiongguang: {
                            trigger: {
                                player: 'respondBegin',
                            },
                            init(player) {
                                player.storage.xlg_qiongguang = 0;
                                player.storage.xlg_qiongguang_cards = [];
                            },
                            content() {
                                'step 0';
                                player.storage.xlg_qiongguang = 0;
                                player.storage.xlg_qiongguang_cards = get.cards(player.hp);
                                player.showCards(player.storage.xlg_qiongguang_cards);
                                ('step 1');
                                var count = 0;
                                for (var i = 0; i < player.storage.xlg_qiongguang_cards.length; i++) {
                                    var card = player.storage.xlg_qiongguang_cards[i];
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return player.canUse(card, current);
                                        }) ||
                                        !lib.filter.cardUsable(card, player) ||
                                        player.getCardUsable(card) == 0
                                    )
                                        count += 1;
                                }
                                if (count == player.storage.xlg_qiongguang_cards.length) {
                                    player.moveCard();
                                    event.goto(5);
                                }
                                ('step 2');
                                player
                                    .chooseCardButton('使用其中的一张牌', false, player.storage.xlg_qiongguang_cards, 1)
                                    .set('ai', function (button) {
                                        var card = button.link;
                                        if (player.storage.xlg_qiongguang_cards.length == 1) return 1;
                                        if (player.canUse(card, player) && get.effect(player, card, player, player) > 0) return player.getUseValue(card) + 100;
                                        var shan = 0;
                                        var sha = 0;
                                        var tao = 0;
                                        for (var i = 0; i < player.storage.xlg_qiongguang_cards.length; i++) {
                                            if (player.storage.xlg_qiongguang_cards[i].name == 'sha') sha += 1;
                                            if (player.storage.xlg_qiongguang_cards[i].name == 'shan') shan += 1;
                                            if (player.storage.xlg_qiongguang_cards[i].name == 'tao' || player.storage.xlg_qiongguang_cards[i].name == 'jiu') tao += 1;
                                        }
                                        if ((tao > 0 || shan > 0) && card.name == 'sha') return (player.getUseValue(card) + 2) * 0.5;
                                        if ((sha > 0 || tao > 0) && card.name == 'juedou') return (player.getUseValue(card) + 2) * 0.5;
                                        if ((sha > 0 || tao > 0) && card.name == 'nanman' && get.attitude(player, player.next) < 0) return (player.getUseValue(card) + 2) * 0.7;
                                        if ((tao > 0 || shan > 0) && card.name == 'wanjian' && get.attitude(player, player.next) < 0) return (player.getUseValue(card) + 2) * 0.7;
                                        return player.getUseValue(card) + 2;
                                    })
                                    .set('filterButton', function (button) {
                                        var card = button.link;
                                        if (
                                            !game.hasPlayer(function (current) {
                                                return player.canUse(card, current);
                                            }) ||
                                            !lib.filter.cardUsable(card, player) ||
                                            player.getCardUsable(card) == 0
                                        )
                                            return false;
                                        return true;
                                    });
                                ('step 3');
                                if (result.links?.length) {
                                    var card = result.links[0];
                                    player.storage.xlg_qiongguang_cards.remove(card);
                                    player.storage.xlg_qiongguang = 0;
                                    player.chooseUseTarget(card, false, true);
                                } else {
                                    if (player.storage.xlg_qiongguang_cards.length) {
                                        player.moveCard();
                                        event.goto(5);
                                    } else event.finish();
                                }
                                ('step 4');
                                if (player.storage.xlg_qiongguang_cards.length == 0) {
                                    event.finish();
                                } else if (player.storage.xlg_qiongguang != 1) {
                                    if (player.storage.xlg_qiongguang_cards.length) {
                                        player.moveCard();
                                        event.goto(5);
                                    } else event.finish();
                                } else event.goto(1);
                                ('step 5');
                                event.cards = player.storage.xlg_qiongguang_cards;
                                player.$throw(event.cards, 1000);
                                game.cardsDiscard(event.cards);
                                game.log(event.cards, '被置入了弃牌堆');
                            },
                            ai: {
                                expose: 0.5,
                                threaten: 1.2,
                            },
                            group: ['xlg_qiongguang_target'],
                            subSkill: {
                                target: {
                                    popup: false,
                                    trigger: {
                                        player: 'useCardBegin',
                                    },
                                    prompt: '令此牌目标各获得其中的一张牌',
                                    filter(event, player) {
                                        var check = event.parent && event.parent.parent && event.parent.parent.name == 'xlg_qiongguang';
                                        if (check == false) return false;
                                        var cards = player.storage.xlg_qiongguang_cards;
                                        if (cards.length) return true;
                                        return false;
                                    },
                                    check(event, player) {
                                        var current = player;
                                        var good = 0;
                                        var bad = 0;
                                        var cards = [...player.storage.xlg_qiongguang_cards];
                                        var cnt = 0;
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (get.attitude(player, event.targets[0]) >= 0) cnt += 1;
                                        }
                                        var cnt1 = 0;
                                        for (var i = 0; i < cards.length; i++) {
                                            var card = cards[i];
                                            if (
                                                !game.hasPlayer(function (current) {
                                                    return player.canUse(card, current);
                                                }) ||
                                                !lib.filter.cardUsable(card, player) ||
                                                player.getCardUsable(card) == 0
                                            )
                                                cnt1 += 1;
                                        }
                                        if (cnt == 0 && cnt1 == cards.length && event.targets.length < cards.length) return false;
                                        while (current.next != player) {
                                            for (var i = 0; i < event.targets.length; i++) {
                                                if (event.targets[i].name == current.name) {
                                                    if (cards.length == 0) continue;
                                                    var card = null;
                                                    var val = -100;
                                                    for (var j = 0; j < cards.length; j++) {
                                                        if (get.value(cards[j]) > val) {
                                                            val = get.value(cards[j]);
                                                            card = cards[j];
                                                        }
                                                    }
                                                    cards.remove(card);
                                                    if (get.attitude(player, current) > 0) good += get.value(card);
                                                    else if (get.attitude(player, current) < 0) bad += get.value(card);
                                                }
                                            }
                                            current = current.next;
                                        }
                                        if (player.hp == 1) return true;
                                        if (player.hp == 2) return bad - good < 18;
                                        return bad - good < 12;
                                    },
                                    content() {
                                        'step 0';
                                        player.storage.xlg_qiongguang = 1;
                                        event.evt = trigger.parent.parent;
                                        event.targets = trigger.targets;
                                        event.index = 0;
                                        ('step 1');
                                        event.current = event.targets[event.index];
                                        if (player.storage.xlg_qiongguang_cards.length == 0) event.finish();
                                        event.current.chooseCardButton('获得其中的一张牌', true, player.storage.xlg_qiongguang_cards, 1).set('ai', function (button) {
                                            if (event.current.hp == 1 && event.current != player) return get.useful(button.link);
                                            if (get.attitude(event.current, player) <= 0) return get.value(button.link);
                                            if (player == event.current) {
                                                var card = button.link;
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        return player.canUse(card, current);
                                                    }) ||
                                                    !lib.filter.cardUsable(card, player) ||
                                                    player.getCardUsable(card) == 0
                                                )
                                                    return get.value(card) + 5;
                                                return get.value(card);
                                            }
                                            if (player != event.current) {
                                                var cur = event.current.next;
                                                var sub_check = false;
                                                while (cur != player) {
                                                    for (var i = 0; i < event.targets.length; i++) {
                                                        if (event.targets[i].name == cur.name && get.attitude(event.current, cur) <= 0) sub_check = true;
                                                    }
                                                    cur = cur.next;
                                                }
                                                if ((sub_check = true)) return get.value(button.link);
                                                var array = [...player.storage.xlg_qiongguang_cards];
                                                var card = button.link;
                                                array.remove(card);
                                                if (
                                                    !game.hasPlayer(function (current) {
                                                        return player.canUse(card, current);
                                                    }) ||
                                                    !lib.filter.cardUsable(card, player) ||
                                                    player.getCardUsable(card) == 0
                                                )
                                                    return get.value(button.link);
                                                var has_good = 0;
                                                for (var i = 0; i < array.length; i++) {
                                                    if (
                                                        !game.hasPlayer(function (current) {
                                                            return player.canUse(array[i], current);
                                                        }) ||
                                                        !lib.filter.cardUsable(array[i], player) ||
                                                        player.getCardUsable(array[i]) == 0
                                                    )
                                                        continue;
                                                    if (player.getUseValue(card) <= 0) continue;
                                                    has_good = 1;
                                                }
                                                if (player.getUseValue(card) > 0 && has_good == 0) return get.value(button.link) / 2.0;
                                                return get.value(button.link);
                                            }
                                            return get.value(button.link);
                                        });
                                        ('step 2');
                                        if (result.links?.length) {
                                            event.current.gain(result.links[0], 'gain2');
                                            player.storage.xlg_qiongguang_cards.remove(result.links[0]);
                                        } else event.finish();
                                        ('step 3');
                                        if (event.index == event.targets.length - 1) event.finish();
                                        else {
                                            event.index += 1;
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                        },
                        xlg_jingjie: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target && target.countCards('h') && !target.hasSkill('xlg_jingjie2');
                            },
                            content() {
                                'step 0';
                                event.num = 0;
                                if (target.countCards('h', { suit: 'spade' })) event.num++;
                                if (target.countCards('h', { suit: 'heart' })) event.num++;
                                if (target.countCards('h', { suit: 'diamond' })) event.num++;
                                if (target.countCards('h', { suit: 'club' })) event.num++;
                                var hs = player.getCards('h');
                                var minval = get.value(hs[0]);
                                for (var i = 1; i < hs.length; i++) {
                                    var val = get.value(hs[i], player, 'raw');
                                    if (val < minval) {
                                        minval = val;
                                    }
                                }
                                player.chooseCardButton('交换一张手牌', target.getCards('h')).ai = function (button) {
                                    return get.value(button.link, player, 'raw') - minval;
                                };
                                ('step 1');
                                if (result.links?.length) {
                                    event.cd = result.links[[0]];
                                    player.chooseCard('h', true, '交换一张手牌以获得' + get.translation(event.cd)).ai = function (card) {
                                        if (event.cd.suit == card.suit) return 4 - get.value(card);
                                        else return 6 - get.value(card);
                                    };
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    target.addTempSkill('xlg_jingjie2');
                                    target.gain(result.cards[0], player, 'giveAuto');
                                    player.gain(event.cd, target, 'giveAuto');
                                } else event.finish();
                                ('step 3');
                                var num1 = 0;
                                if (target.countCards('h', { suit: 'spade' })) num1++;
                                if (target.countCards('h', { suit: 'heart' })) num1++;
                                if (target.countCards('h', { suit: 'diamond' })) num1++;
                                if (target.countCards('h', { suit: 'club' })) num1++;
                                if (num1 == event.num) {
                                    player.chooseDrawRecover(2, 1);
                                } else if (num1 < event.num) {
                                    player.changeHujia();
                                } else {
                                    target.changeHujia();
                                }
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num >= 4) return 0.5;
                                        if (num > 2) return 1;
                                        return 2;
                                    },
                                },
                                expose: 0.3,
                                threaten: 1.2,
                            },
                        },
                        xlg_jingjie2: {},
                        xlg_wuleihong: {
                            trigger: {
                                player: 'dyingBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.countCards('he', { color: 'black' }) > 0;
                            },
                            content() {
                                'step 0';
                                var enemy = game.countPlayer(function (current) {
                                    return current != player && get.damageEffect(current, player, player) > 0;
                                });
                                var next = player.chooseCardTarget({
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    selectCard: [1, player.countCards('he', { color: 'black' })],
                                    selectTarget() {
                                        if (ui.selected.targets.length > ui.selected.cards.length) {
                                            game.uncheck('target');
                                        }
                                        return ui.selected.cards.length;
                                    },
                                    filterCard(card, player) {
                                        return get.color(card) == 'black' && lib.filter.cardDiscardable(card, player);
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length >= enemy) return 0;
                                        return 9 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.damageEffect(target, player, player);
                                    },
                                    prompt: get.prompt('xlg_wuleihong'),
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    player.discard(result.cards);
                                    event.targets = result.targets;
                                    event.targets.sort(lib.sort.seat);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets.length) {
                                    event.targets.shift().damage(2, 'thunder');
                                    event.redo();
                                }
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                                effect(card, player, target) {
                                    if (get.tag(card, 'damage')) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -0.5];
                                        if (!target.hasFriend()) {
                                            if (get.mode() == 'guozhan') {
                                                if (!player.hasFriend()) return;
                                            } else {
                                                return;
                                            }
                                        }
                                        if (target.countCards('h') > 2 || target.countCards('e', { color: 'black' })) {
                                            return [1, 0, 0, -1];
                                        }
                                        return [1, -0.5];
                                    }
                                },
                            },
                        },
                        xlg_jianting: {
                            trigger: {
                                global: 'phaseEnd',
                            },
                            filter(event, player) {
                                return (
                                    event.player != player &&
                                    event.player.getHistory('useCard', function (evt) {
                                        return evt.card.name == 'lg_qiangji' && evt.targets && evt.targets.includes(player);
                                    }).length
                                );
                            },
                            content() {
                                'step 0';
                                event.cards = get.cards(2);
                                event.suit = [];
                                player.showCards(event.cards);
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        event.suit.add(i.suit);
                                        i.fix();
                                        ui.cardPile.insertBefore(i, ui.cardPile.childNodes[0]);
                                    }
                                game.updateRoundNumber();
                                ('step 1');
                                if (event.suit.includes('diamond') && player.isDamaged()) player.recover(2);
                            },
                        },
                        xlg_bianyin: {
                            trigger: {
                                global: 'gainEnd',
                                player: 'loseAfter',
                            },
                            filter(event, player) {
                                if (event.name == 'gain') {
                                    if (event.source == player && event.player != player) {
                                        return event.relatedLose && event.relatedLose.es && event.relatedLose.es.length;
                                    }
                                }
                                if (event.name == 'lose') {
                                    var evt = event.getl(player);
                                    return event.type == 'discard' && evt && evt.player == player && evt.es && evt.es.length;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                event.cards = trigger.name == 'lose' ? trigger.getl(player).es : trigger.relatedLose.es;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        var card = i;
                                        var type = get.subtype(card);
                                        if (player.isEmpty(type)) {
                                            var card2 = get.cardPile(function (card) {
                                                return get.subtype(card) == type && player.canUse(card, player);
                                            });
                                            if (card2) player.chooseUseTarget(card2, true).nopopup = true;
                                        }
                                    }
                            },
                        },
                        xlg_poyun: {
                            usable: 1,
                            trigger: {
                                global: 'discardEnd',
                            },
                            prompt(event, player) {
                                var card = [];
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (i.suit == 'diamond') card.push(i);
                                    }
                                return '获得' + get.translation(card);
                            },
                            filter(event, player) {
                                if (event.player == player) return false;
                                if (Array.isArray(event.cards))
                                    for (var i of event.cards) {
                                        //QQ
                                        if (i.suit == 'diamond' && get.position(i) == 'd') return true;
                                    }
                                return false;
                            },
                            content() {
                                'step 0';
                                if (trigger.delay == false) game.delay();
                                ('step 1');
                                var cards = [];
                                for (var i = 0; i < trigger.cards.length; i++) {
                                    if (trigger.cards[i].suit == 'diamond' && get.position(trigger.cards[i]) == 'd') {
                                        if (game.me != player) {
                                            if (trigger.cards[i].name != 'du') {
                                                cards.push(trigger.cards[i]);
                                            }
                                        } else cards.push(trigger.cards[i]);
                                    }
                                }
                                if (cards.length) {
                                    player.gain(cards, 'log');
                                    player.$gain(cards);
                                    trigger.player.randomDiscard(2, 'e');
                                    if (trigger.player.isEnemiesOf(player)) trigger.player.damage();
                                }
                            },
                        },
                        xlg_nuhou: {
                            init(player) {
                                player.storage.xlg_nuhou = [];
                            },
                            intro: {
                                content(storage) {
                                    if (storage) {
                                        return '本轮使用过:' + get.translation(storage);
                                    }
                                },
                            },
                            filter(event, player) {
                                var lt = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.tag({ name: lib.inpile[i] }, 'damage') && get.type(lib.inpile[i]) == 'trick' && !player.storage.xlg_nuhou.includes(lib.inpile[i])) lt.push(['锦囊', '', lib.inpile[i]]);
                                }
                                return lt.length;
                            },
                            trigger: {
                                player: ['equipAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var lt = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.tag({ name: lib.inpile[i] }, 'damage') && get.type(lib.inpile[i]) == 'trick' && !player.storage.xlg_nuhou.includes(lib.inpile[i])) lt.push(['锦囊', '', lib.inpile[i]]);
                                }
                                lt.remove(player.storage.xlg_nuhou);
                                player.chooseButton(['选择一张伤害类普通锦囊牌', [lt, 'vcard']], false).set('ai', function (button) {
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i of players) {
                                        if (i.hp == 1 && get.damageEffect(i, player, player) > 0 && !i.hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!i.isOut()) {
                                            if (i.hp < i.maxHp) {
                                                if (get.attitude(player, i) > 0) {
                                                    if (i.hp < 2) {
                                                        lose--;
                                                        recover += 0.5;
                                                    }
                                                    lose--;
                                                    recover++;
                                                } else if (get.attitude(player, i) < 0) {
                                                    if (i.hp < 2) {
                                                        lose++;
                                                        recover -= 0.5;
                                                    }
                                                    lose++;
                                                    recover--;
                                                }
                                            } else {
                                                if (get.attitude(player, i) > 0) {
                                                    lose--;
                                                } else if (get.attitude(player, i) < 0) {
                                                    lose++;
                                                }
                                            }
                                        }
                                    }
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' || button.link[2] == 'wanjian' ? 1 : -1;
                                    return button.link[2] == '' ? 1 : -1;
                                });
                                ('step 1');
                                if (result.links?.length) {
                                    var num = player.countCards('j');
                                    player.chooseUseTarget({ name: result.links[0][2] }, false);
                                    player.storage.xlg_nuhou.push(result.links[0][2]);
                                    player.markSkill('xlg_nuhou');
                                    player.changeHujia(num);
                                }
                            },
                            ai: {
                                effect: {
                                    player(card, player) {
                                        if (player.storage.xlg_nuhou.length >= 3) return 0;
                                        if (player.getEquip(get.subtype(card))) return [1, -1];
                                        return 2;
                                    },
                                },
                            },
                            group: ['xlg_nuhou_clear', 'xlg_nuhou_lose'],
                            subSkill: {
                                clear: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    filter(event, player) {
                                        return player.storage.xlg_nuhou.length;
                                    },
                                    _priority: 51,
                                    forced: true,
                                    content() {
                                        player.storage.xlg_nuhou = [];
                                        player.unmarkSkill('xlg_nuhou');
                                    },
                                    _priority: 5100,
                                },
                                lose: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    _priority: -1,
                                    forced: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.player == player && evt.es && evt.es.length;
                                    },
                                    content() {
                                        var num = player.countCards('h', { name: 'lg_cannian' });
                                        player.randomDiscard(1 - num, 'j');
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (card.name == 'guohe' || card.name == 'liuxinghuoyu') return 1.2;
                                            },
                                        },
                                    },
                                    _priority: -100,
                                },
                            },
                        },
                        xlg_manheng: {
                            init(player) {
                                player.storage.xlg_manheng = [];
                            },
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return player != event.player && event.player.hp > player.hp;
                            },
                            content() {
                                'step 0';
                                player.chooseToUse({
                                    filterCard(card, player, target) {
                                        return lib.filter.cardEnabled(card, player, event.parent.parent) && lib.filter.cardUsable(card, player, event.parent.parent);
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.chooseToDiscard(true, 'h');
                                }
                            },
                            group: ['xlg_manheng_push', 'xlg_manheng_remove'],
                            subSkill: {
                                remove: {
                                    trigger: {
                                        global: 'useCard',
                                    },
                                    _priority: 4,
                                    filter(event, player) {
                                        if (event.targets && event.targets.length) {
                                            if (player.storage.xlg_manheng && player.storage.xlg_manheng.length) {
                                                for (var a = 0; a < event.targets.length; a++) {
                                                    if (player.storage.xlg_manheng.includes(event.targets[a])) return true;
                                                }
                                            }
                                        }
                                        return false;
                                    },
                                    content() {
                                        for (var a = 0; a < trigger.targets.length; a++) {
                                            if (player.storage.xlg_manheng.includes(trigger.targets[a])) {
                                                player.line(trigger.targets[a], 'fire');
                                                trigger.targets.remove(trigger.targets[a]);
                                                player.storage.xlg_manheng.remove(trigger.targets[a]);
                                            }
                                        }
                                    },
                                    forced: true,
                                    _priority: 400,
                                },
                                push: {
                                    forced: true,
                                    popup: false,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    _priority: 7,
                                    filter(event, player) {
                                        return event.getParent(2).name == 'xlg_manheng';
                                    },
                                    content() {
                                        for (var a = 0; a < trigger.targets.length; a++) {
                                            player.storage.xlg_manheng.push(trigger.targets[a]);
                                        }
                                        var evt = _status.event.getParent('phase');
                                        if (evt && evt.name == 'phase' && !evt.xlg_manheng) {
                                            evt.xlg_manheng = true;
                                            var next = game.createEvent('xlg_manheng_clear');
                                            _status.event.next.remove(next);
                                            evt.after.push(next);
                                            next.player = player;
                                            next.setContent(function () {
                                                player.storage.xlg_manheng = [];
                                            });
                                        }
                                    },
                                    _priority: 700,
                                },
                            },
                        },
                        xlg_shenghua: {
                            usable: 1,
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var damaged = game.filterPlayer((current) => {
                                    return current.hasAllHistory('sourceDamage', (evt) => evt.player == player);
                                });
                                var undamaged = game.filterPlayer().removeArray(damaged);
                                player.chooseCardTarget({
                                    prompt: get.prompt('xlg_shenghua'),
                                    prompt2: `${undamaged.length ? '对一名其他角色造成2点雷电伤害' : ''}${undamaged.length && damaged.length ? ';<br>或' : ''}${damaged.length ? '令一名其他角色防止伤害' : ''}.`,
                                    damaged: damaged,
                                    aiTarget: (() => {
                                        var info = game
                                            .filterPlayer()
                                            .map((current) => {
                                                var damage = undamaged.includes(current);
                                                var card = { name: damage ? 'damage' : 'wuzhong' };
                                                return [current, get.effect(current, card, player, player) / (damage ? 1.5 : 1)];
                                            })
                                            .sort((a, b) => b[1] - a[1])[0];
                                        if (info[1] > 0) return info[0];
                                        return null;
                                    })(),
                                    filterCard: lib.filter.cardDiscardable,
                                    selectCard() {
                                        if (get.event('damaged').length == 0) return 1;
                                        if (get.event('damaged').length == game.countPlayer()) return 0;
                                        return [0, 1];
                                    },
                                    position: 'he',
                                    filterTarget(card, player, target) {
                                        var damaged = get.event('damaged');
                                        return damaged.includes(target) ^ ui.selected.cards.length;
                                    },
                                    selectTarget: 1,
                                    ai1(card) {
                                        if (get.event('damaged').includes(get.event('aiTarget'))) return 0;
                                        return 6 - get.value(card);
                                    },
                                    ai2(target) {
                                        return target == get.event('aiTarget') ? 10 : 0;
                                    },
                                });
                                ('step 1');
                                if (result.cards?.length) {
                                    var cards = result.cards,
                                        target = result.targets[0];
                                    if (cards?.length) {
                                        player.discard(cards);
                                        game.delayex();
                                        target.damage(2, 'thunder');
                                    } else {
                                        target.addTempSkill('xlg_shenghua2', { player: 'xlg_shenghua2After' });
                                    }
                                }
                            },
                        },
                        xlg_shenghua2: {
                            trigger: {
                                player: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                var num = player.countCards('h', { suit: 'spade' });
                                trigger.num -= num;
                            },
                        },
                        xlg_liuhuo: {
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = ['弃置一名角色区域内的一张牌,对其下家造成1点火焰伤害.', '令一名角色摸一张牌,令其上家摸两张牌.'];
                                    var choiceList = ui.create.dialog('请选择一项', 'forcebutton', 'hidden');
                                    for (var i = 0; i < list.length; i++) {
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        var bool = lib.skill.wasqsgx.chooseButton.filter({ link: i }, player);
                                        if (!bool) str += '<div style="opacity:0.5">';
                                        str += list[i];
                                        if (!bool) str += '</div>';
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        Object.setPrototypeOf(next, lib.element.Button.prototype); //QQQ
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                },
                                filter(button, player) {
                                    return true;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    if (
                                        game.hasPlayer(
                                            [
                                                function (target) {
                                                    return target.countCards('hes') > 0 && get.effect(target, 'xlg_liuhuo', player, player) > 0;
                                                },
                                                function (target) {
                                                    return get.effect(target, 'xlg_liuhuo', player, player) < 0;
                                                },
                                            ][button.link]
                                        )
                                    )
                                        return 1 + button.link;
                                    return 0;
                                },
                                backup(links) {
                                    return {
                                        audio: 'ext:始源之乱/audio:2',
                                        filterTarget: [
                                            function (card, player, target) {
                                                return target.countCards('hes') > 0;
                                            },
                                            function (card, player, target) {
                                                return true;
                                            },
                                        ][links[0]],
                                        index: links[0],
                                        check(card) {
                                            return true;
                                        },
                                        popname: true,
                                        content() {
                                            if (lib.skill[event.name].index == 0) {
                                                player.discardPlayerCard(target, 'hej', true);
                                                var next = target.next;
                                                next.damage('nocard', 'fire');
                                            } else {
                                                target.draw();
                                                var previous = target.previous;
                                                previous.draw(2);
                                            }
                                        },
                                        ai: lib.skill.xlg_liuhuo.ai,
                                        sourceSkill: 'xlg_liuhuo',
                                    };
                                },
                                prompt() {
                                    return '选择目标';
                                },
                            },
                            ai: {
                                order: 7,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        xlg_huanggu: {
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h', { type: 'basic' });
                            },
                            filterCard(card) {
                                return get.type(card) == 'basic';
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            discard: false,
                            delay: false,
                            loseTo: 'cardPile',
                            insert: true,
                            visible: true,
                            position: 'h',
                            content() {
                                'step 0';
                                player.showCards(cards);
                                ('step 1');
                                var name1 = cards[0].name;
                                player.chooseUseTarget({ name: name1 }, true);
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        return 1;
                                    },
                                },
                            },
                        },
                    },
                    character: {
                        xlg_bixiao: ['female', '仙', 6, ['xlg_hualingniao', 'xlg_fusheng'], ['des:碧霄仙子,又称碧霄娘娘,是明代神魔小说<封神演义>中的人物,截教第一代门人之一,师从通天教主,她为人善良,法力高强,与云霄仙子、琼霄仙子一同在三仙岛上修炼生活,三姐妹被世人合称为三霄娘娘.坐骑为花翎鸟,持有两件强大的仙家法宝金蛟剪、混元金斗.']],
                        xlg_longnv: ['female', 'shen', 6, ['xlg_bolan', 'xlg_cangming', 'xlg_niliu'], ['des:龙女是神话传说中龙王的女眷,常为龙王的女儿.龙女这一传说形象,最初来源于佛教.']],
                        xlg_qiongxiao: ['female', '仙', 7, ['xlg_honghuniao', 'xlg_xianle'], ['des:琼霄仙子,又称琼霄娘娘,是明代神魔小说<封神演义>中的人物,身为截教通天教主座下弟子之一,为人善良,法力高强,有姐妹云霄仙子、碧霄仙子.居住在三仙岛上,一心修炼,坐骑为鸿鹄鸟,与其他两位姐妹共同持有两件强大的仙家法宝金蛟剪和混元金斗.']],
                        xlg_yunxiao: ['female', '仙', 6, ['xlg_qingluan', 'xlg_fushenzhou', 'xlg_fulongsuo'], ['des:云霄仙子,又称云霄娘娘,是明代神魔小说<封神演义>中的人物,截教第一代门人之一,师从通天教主,是三霄娘娘里最年长的仙女,为人善良,已斩尽三尸,抛尽六气,法力高强,是阐教截教两派弟子中,道行最深,功力最强的一个,已达到准圣人级别,连阐教一代上仙燃灯道人都不敢欺忤于她.其九曲黄河阵更是威力无比,需道德天尊和元始天尊二圣联手才能破解.过着与世无争的生活,坐骑为神鸟青鸾,持有强大法宝混元金斗、金蛟剪.']],
                        xlg_yanluowang: ['male', 'shen', 6, ['xlg_shengsibu', 'xlg_huangquan', 'xlg_duoming'], ['des:阎罗王,亦称<阎王><阎罗><阎王爷><阎魔王><阎罗大王>,中国古代神话中的十殿阎王之一,为阴曹地府中第五殿的殿主冥王,是中国古代宗教神话信仰中的一尊阴间神祇,正月初八日诞辰,司掌大海之底,东北方沃礁石下的<叫唤大地狱>,另设十六小地狱,传说阎罗天子的前世是包拯.']],
                        xlg_mengpo: ['female', 'shen', 6, ['xlg_wangsheng', 'xlg_wangque'], ['des:孟婆,是古代神话传说中的人物,常驻在奈何桥边.她为所有前往投胎的灵体提供孟婆汤,以消除鬼魂的记忆.']],
                        xlg_jiaonv: ['female', 'shen', 7, ['xlg_qizhu', 'xlg_yibao'], ['des:鲛女,蛟人之女.中国古代神话传说中鱼尾人身的神秘生物.早在干宝的<搜神记>中就有记载.南海之外有鲛人,水居如鱼,不废织绩.其眼泣则能出珠.']],
                        xlg_baize: ['male', 'shen', 7, ['xlg_yaoshen', 'xlg_qigu'], ['des:白泽,中国古代神话中的瑞兽.能言语,通万物之情,知鬼神之事.<王者有德>才出现,能辟除人间一切邪气.']],
                        xlg_goumang: ['male', 'shen', 6, ['xlg_chudhui', 'xlg_fusu'], ['des:句芒,中国古代民间神话中的木神、春神、东方之神.主管树木的发芽生长,忠心耿耿地辅佐伏羲.太阳每天早上从扶桑上升起,神树扶桑归句芒管,太阳升起的那片地方也归句芒管.']],
                        xlg_zhinv: ['female', 'shen', 6, ['xlg_queqiao', 'xlg_qingzhi'], ['des:织女,封号天孙娘娘,别名天女、东桥、天女娘、收阴、支机女等,又与七仙女姊妹合称七星娘娘.<织女>原是神话中的女神,为编织云雾的女神、纺织业者、情侣、妇女、儿童的保护神,后衍化成星宿名,即织女星.她是著名的牛郎织女神话的女主角.与织女相关的传统节日是七夕节.']],
                        xlg_nvwa: ['female', 'shen', 6, ['xlg_lianshi', 'xlg_chuangshi', 'xlg_ningyuan'], ['des:女娲,中国上古神话中的创世女神.又称娲皇、女阴,史记女娲氏,是华夏民族人文先始,是福佑社稷之正神.相传女娲造人,一日中七十化变,以黄泥仿照自己抟土造人,创造人类社会并建立婚姻制度.因世间天塌地陷,于是熔彩石以补苍天,斩鳌足以立四极,留下了女娲补天的神话传说.']],
                        xlg_luwu: ['male', 'shen', 7, ['xlg_weiwu'], ['des:陆吾,即肩吾,是中国古代神话传说中的昆仑山神明.']],
                        xlg_jinwu: ['male', 'shen', 7, ['xlg_fenjin', 'xlg_lieyan'], ['des:金乌,又称三足乌、三足金乌、三趾等,是中国古代神话中的形象.在中国古代神话里,红日中央有一只黑色的三足乌鸦,黑乌鸦蹲居在红日中央周围是金光闪烁的<红光>,故称<金乌>.作为一种中国古代神话传说中的神鸟之一,金乌形象原是二足,西汉后期演变为三足.']],
                        xlg_nvying: ['female', 'shen', 6, ['xlg_lingmou', 'xlg_guanxin', 'xlg_shangqing'], ['des:女英,又称皇英.中国古代神话传说中帝尧的其中一个女儿,姐妹同嫁帝舜为妻.她们有一个共同的亲生儿子商均.舜父顽,母嚚,弟劣,曾多次欲置舜于死地,终因娥皇女英助之而脱险.舜继尧位,娥皇女英之其妃,后舜至南方巡视,死于苍梧.二妃往寻,得知舜帝已死,埋在九嶷山下,抱竹痛哭,泪染青竹,泪尽而死,因称<潇湘竹>或<湘妃竹>.自秦汉时起,湘江之神湘君与湘夫人的爱情神话,被演变成舜与娥皇、女英的传说.后世因附会称二女为<湘夫人>.']],
                        xlg_shengongbao: ['male', 'shen', 7, ['xlg_guhuo', 'xlg_daoyou'], ['des:申公豹是明代神魔小说<封神演义>中的人物,昆仑山玉虚宫元始天尊弟子,其随身佩宝剑,有法宝开天珠,坐骑是白额虎.与姜子牙、南极仙翁为阐教同门,然而,其本人性格狂妄自大、心胸狭窄,自诩有几千年的修行而违背元始天尊师命,逆势而为,选择保成汤、扶纣王,与以姜子牙为代表的扶周灭纣立场相悖. <br/><br/> 作为<封神演义>中的反面人物,以其蛊惑人心、搬弄是非的形象让人熟知.离开昆仑山后,申公豹四处游说三十六路人马与姜子牙为敌,助纣王攻打西岐,最终,申公豹被元始天尊罚去以身体塞了北海眼,封神时,受封为 <东海分水将军>.']],
                        xlg_yaoji: ['female', 'shen', 6, ['xlg_lanzhi', 'xlg_wushan', 'xlg_xiancao'], ['des:中国神话中的巫山神女.天帝之女或谓炎帝之女,名曰瑶姬.未嫁而死,葬于巫山之阳,精魂依草,实为灵芝.唐末被道教吸纳为西王母第二十三女.']],
                        xlg_qinglong: ['male', 'shen', 7, ['xlg_shengshi', 'xlg_longxiao', 'xlg_niuzhuan'], ['des:青龙,又称苍龙、孟章,是中国古代神话传说中的形象,为<天之四灵>之一的东方之神,对应<四象>中的<东方七宿>.其由来与自然天象有关,主要源于上古时代人们对星辰运行的认识以及农耕文化.']],
                        xlg_zhuque: ['female', 'shen', 6, ['xlg_liuli', 'xlg_chiyu'], ['des:朱雀,是中国古代神话中的天之四灵之一,源于远古星宿崇拜,是代表炎帝与南方七宿的南方之神,于八卦为离,于五行主火,象征四象中的老阳,四季中的夏季,同时也是天之南陆.']],
                        xlg_jingwei: ['female', '妖', 7, ['xlg_silie', 'xlg_silie2', 'xlg_tianhai'], ['hiddenSkill', 'des:精卫,中国古代神话中的一种鸟.上古神话传说里,女娃是炎帝最小的女儿,后溺水而亡,化作精卫鸟.另一说,女娃是上古的一个部落,由于气候变暖,海平面上升,女娃部落遭到灭顶之灾,后化作精卫.']],
                        xlg_xingtian: ['male', '妖', 7, ['xlg_yizhi', 'xlg_dihun'], ['des:刑天,本作形夭,又作形天、邢天,是中国古代神话传说中的人物.据<山海经·海外西经>记载,刑天和黄帝争位,被斩去头颅,失了首级后,以自身双乳作眼、肚脐为嘴的形态存活,双手各持一柄利斧和一面盾牌作战.']],
                        xlg_yujiang: ['female', 'shen', 6, ['xlg_bibodangyang', 'xlg_xuhuan', 'xlg_minghe'], ['des:禺强为传说中的海神、风神和瘟神,也作<禺疆>、<禺京>,是黄帝之孙.海神禺强统治北海,身体像鱼,但是有人的手足,乘坐双头龙.风神禺强据说字<玄冥>,是颛顼的大臣,形象为人面鸟身、两耳各悬一条青蛇,脚踏两条青蛇,支配北方.']],
                        xlg_gonggong: ['male', 'shen', 6, ['xlg_jianghong', 'xlg_tunmo'], ['des:共工,又名共工氏、康回、孔壬,中国古代神话中的水神.炎帝后裔,祝融之子.在早期的文献中,共工是尧的臣子,之后演变为古帝王、部落首领,后再转变为神话中怒撞不周山、破坏天体秩序的天神.共工所处的时代,往前可追溯至高辛氏、颛顼、黄帝、炎帝等时期,往后则流传至舜、禹时期.']],
                        xlg_zhurong: ['male', 'shen', 7, ['xlg_yanpo'], ['des:祝融,号赤帝,中国古代神话中的火神、南方神、南岳神、南海神、夏神、灶神,为五行神之一.历史文献中,祝融的相关记载纷繁复杂.在部分文献中,祝融指三皇时期的祝融氏.又有文献记载祝融为炎帝之后,另有文献记载祝融为黄帝之后.而祝融也指火正、夏官的官职名称.']],
                        xlg_cuihu: ['female', '妖', 6, ['xlg_yaoling', 'xlg_shunshan'], ['des:翠狐是妖狐的一种,在中国传统神话传说中能修炼成妖仙,化为人形,与人来往的狐狸.']],
                        xlg_lijing: ['male', 'shen', 6, ['xlg_baota', 'xlg_tongshuai'], ['des:李靖,号托塔天王,中国古代神话传说的军神.分别由佛教中的武财神<财宝天王>与隋唐名将结合演变而成,是佛道儒并尊的国祭神,信仰成唐盛宋.为殷夫人的丈夫,哪吒三兄弟及李贞英的父亲,半截观音的义父,度厄真人与燃灯道人之徒,其文学形象主要散见于明朝小说<封神演义>、<西游记>,在两书中分别以陈塘关总兵和天庭正神的身份出现.']],
                        xlg_houyi: ['male', 'shen', 6, ['xlg_shenshe', 'xlg_xunji'], ['des:后羿,本称羿,是中国古代神话传说中的人物,擅于射箭.曾助尧帝射落九日,只留一日,因此在民间流传有<后羿射日>的典故.其为太阳神帝俊的臣子,嫦娥仙子的丈夫.']],
                        xlg_yuanshitianzun: ['male', 'shen', 6, ['xlg_xuanxu', 'xlg_shane'], ['des:元始天尊,明代神魔小说<封神演义>中的人物,是书中所推崇的正教,即阐教教主.姜子牙的师父,与老子和通天教主同出于鸿钧道人门下,居昆仑山玉虚宫.神通广大,法力无边.']],
                        xlg_longwang: ['male', 'shen', 6, ['xlg_yuze', 'xlg_jingu'], ['des:龙王是古代神话传说中在水里统领水族的王,掌管兴云降雨.传说龙能行云布雨、消灾降福,象征祥瑞,所以以舞龙的方式来祈求平安和丰收就成为全国民间各地的一种习俗.']],
                        xlg_fuxi: ['male', 'shen', 7, ['xlg_liehun'], ['des:伏羲,华夏民族人文先始,三皇之一,即太昊,或称黄熊氏.神话中人类的始祖.相传为风姓,又名宓羲、庖牺、包牺、伏戏,亦称牺皇、皇羲.在<史记>中称伏牺,亦有青帝太昊伏羲一说.']],
                        xlg_zhenwudadi: ['male', 'shen', 6, ['xlg_zhiwu', 'xlg_yisheng', 'xlg_zaijienantao', 'xlg_zaijienantao2'], ['des:真武大帝,又称玄天上帝、佑圣真君、玄武大帝等,亦称荡魔天尊、报恩祖师、披发祖师等,为道教神仙中赫赫有名的尊神,湖北武当山是真武大帝的道场.']],
                        xlg_baigujing: ['female', '妖', 6, ['xlg_guci', 'xlg_guci3', 'xlg_guiming'], ['des:白骨精,是中国古典神话小说<西游记>中的女配角.她本是白虎岭上的一具化为白骨的女尸,偶然采天地之灵气,吸日月之精华,变幻成了人形,习得化尸大法.后来白骨精发现了唐僧,想吃他的肉长生不老.白骨精阴险狡猾,用离间计离间唐僧师徒.在经历多次变化后,最终被孙悟空识破继而将她打死,但孙悟空也因此被唐僧驱逐.']],
                        xlg_liuermihou: ['male', '妖', 6, ['xlg_zhenjia', 'xlg_xushi'], ['des:六耳猕猴,是古典名著<西游记>中的角色,<混世四猴>之一,能力与孙悟空不相上下.六耳猕猴在唐僧第二次赶走孙悟空后出现,他冒充孙悟空,打倒唐僧,抢走包袱,占据了花果山水帘洞,想自己组成取经团队去西天.后与孙悟空相遇争斗,从天上打到地下,各路仙佛都无法分辨真假,最后打到西天如来那里,如来佛祖识破六耳猕猴,用钵盂将其擒住,被孙悟空劈头一棒打死.']],
                        xlg_leigong: ['male', 'shen', 7, ['xlg_leiyun', 'xlg_leigu'], ['des:雷公,传说中的司掌雷鸣之神.属阳,故称公,又称雷师、雷神.法器是雷公凿的锤钻,传说长得鸟脸雷公嘴,背后生有一双翅膀.']],
                        xlg_dianmu: ['female', 'shen', 6, ['xlg_dianhu', 'xlg_xinjing'], ['des:电母,传说的司掌闪电之神,属阴,故称母,又称金光圣母、闪电娘娘;法器是两面闪电神镜,传说中样子比较威严.']],
                        xlg_xiaoming: ['female', 'shen', 6, ['xlg_jiguang', 'xlg_jiushuzhihun'], ['des:宵明,舜的女儿,她的光能照亮方圆百里.']],
                        xlg_yudi: ['male', 'shen', 6, ['xlg_tianting', 'xlg_xuanxiao', 'xlg_shenze'], ['des:玉帝,继昊天上帝后,成为三界至尊.也即是自昊天上帝后,又一位皇天上帝.但却也是末代天帝,上有鸿钧女娲所压,下受命于道门祖师三清尊神.']],
                        xlg_xuanwu: ['female', 'shen', 7, ['xlg_shengmang', 'xlg_bilei'], ['des:玄武,中国古代神话中的天之四灵之一,又名龟蛇,源于远古星宿崇拜,是指二十八宿按东南西北分为四象中的北方玄武七宿.']],
                        xlg_baihu: ['male', 'shen', 7, ['xlg_huimie', 'xlg_leishi'], ['des:白虎,中国古代神话中的天之四灵之一,西方之神,后为道教所信奉,同青龙、朱雀、玄武合称四方四神.']],
                        xlg_baiqiulian: ['female', '妖', 6, ['xlg_yuanqi', 'xlg_yuanqi1', 'xlg_fangshi', 'xlg_shenlou'], ['des:<白秋练>是清代小说家蒲松龄创作的文言短篇小说集<聊斋志异>中的篇目.故事里,白秋练是比较罕见的白鱀豚精,慕蟾宫则是一位少年书生,其父是一商人,雇船往返于燕楚之间.夜里闲得无聊,慕蟾宫就对着月亮吟诗,吟者无心听者有意,船舷外的美人鱼白秋练竟暗恋上慕公子,以致相思成疾.']],
                        xlg_taohuayao: ['female', '妖', 6, ['xlg_xianrou', 'xlg_nianhua', 'xlg_nianhua2'], ['des:桃花妖,据传闻是由桃花化成的妖怪.']],
                        xlg_qianliyan: ['female', '妖', 6, ['xlg_shixuan', 'xlg_shijie'], ['des:千里眼,中国神话及民间宗教信仰中的神仙,常与顺风耳一同出现,结伴而行.']],
                        xlg_heiwuchang: ['male', 'shen', 7, ['xlg_hunpo'], ['des:黑无常,是中华鬼神文化有名的>黑白无常"之一,让人十分敬重的阴神,身着黑衣,手拿勾魂锁链的鬼差,为汉族民间所信奉的阎王属下的勾魂使者,和白无常一起负责索命勾魂,俗称勾魂鬼,属阴,因白无常身着白衣,黑无常身着黑衣,故名如此.']],
                        xlg_baiwuchang: ['male', 'shen', 6, ['xlg_xinzhi', 'xlg_shihun'], ['des:白无常,黑白无常之一的白无常鬼,亦称无常,或黑白鬼.此二鬼通常都结伴而行,同出同进,形影不离,外人见之如同索命阴差黑白无常一般,便因此得名.白无常的特征是一直吐着红色的长舌头,表情苦笑颜开,面带一丝邪魅,有时会露出恐怖的脸目,头戴白帽,身穿白衣.经常与黑无常一起出没,在人间半夜抓捕死者的鬼魂,并带入黄泉路直通阴曹地府.']],
                        xlg_jiuweihu: ['female', '妖', 6, ['xlg_yuwei', 'xlg_humei', 'xlg_huhuo'], ['des:九尾狐,最先出现在原始宗教的图腾信仰中.<山海经>就记有青丘九尾狐.解读这些古老记载,九尾狐其实是位于东方或南方的青丘这个地方原始部族的图腾物.']],
                        xlg_jiutouchong: ['male', '妖', 7, ['xlg_shoulie', 'xlg_manyan'], ['des:九头虫,是古典名著<西游记>中的男配角,他入赘到乱石山碧波潭的万圣龙王家里,因此又称为九头驸马.']],
                        xlg_zhuguang: ['female', 'shen', 6, ['xlg_weiguang', 'xlg_qiongguang'], ['hiddenSkill', 'des:烛光,舜的女儿,她的光能照亮方圆百里.']],
                        xlg_lingbaotianzun: ['male', 'shen', 6, ['xlg_jingjie', 'xlg_wuleihong'], ['des:灵宝天尊,全称<上清灵宝天尊>,是道教<三清>尊神之一,在<三清>之中位尊第二.道教宫观里的三清殿中,灵宝天尊常以手捧如意之像居元始天尊之左侧位.在道教大型斋醮礼仪中也多设有三清神位,以灵宝天尊居元始天尊之左位.灵宝天尊之神诞日为夏至日,约在农历五月中.民间于夏至日之供奉常以灵宝天尊为主神.']],
                        xlg_shunfenger: ['male', 'shen', 6, ['xlg_jianting', 'xlg_bianyin', 'xlg_poyun'], ['des:顺风耳是古代中国神话传说中能听到很远声音的人.表意指<能够听到随风而来之声音的耳朵>,同时是神仙中的顺风耳,千里眼和顺风耳是道教中的两位守护神.地位虽然不高,流传却很广泛.']],
                        xlg_niumowang: ['male', '妖', 7, ['xlg_nuhou', 'xlg_manheng'], ['des:牛魔王,古典小说<西游记>里的男配角.铁扇公主的丈夫,红孩儿的父亲.早年在花果山和孙悟空等七个妖王结拜,自称<平天大圣>,而后在西方娶铁扇公主为妻,又入赘给玉面公主,并在玉面公主的摩云洞久住.唐僧师徒西天取经路过火焰山,因孙悟空在用计借取芭蕉扇的过程中欺负了铁扇公主,惹得牛魔王大怒,与孙悟空大战许久.虽然牛魔王在孙悟空和猪八戒、土地的联手围攻下落败,但孙悟空始终无法降服牛魔王,最终在护法金刚和天将的围攻下屈服,被哪吒牵往西方.']],
                        xlg_chimei: ['male', '妖', 7, ['xlg_shenghua'], ['des:魑魅,中国古代神话传说中的山神,也指山林中害人的鬼怪.']],
                        xlg_longjigongzhu: ['female', '仙', 6, ['xlg_liuhuo', 'xlg_huanggu'], ['des:龙吉公主是明代神魔小说<封神演义>中的人物,原为天仙,乃昊天上帝之女,西王母所生,有思凡之心,曾居于天宫,当年蟠桃会上失了礼数,被贬在凤凰山青鸾斗阙.因截教焰中仙罗宣火焚西岐城,为此下山助武王伐纣,将功补过,并希望有朝一日回复仙籍重回天庭.因符元仙翁称她与截教中的洪锦有姻缘,月下老人下凡牵线,嫁于手下败将洪锦.在攻打万仙阵之时,龙吉公主被金灵圣母用四象塔打落马下,被截教众仙所杀,其丈夫洪锦也被金灵圣母以龙虎如意打杀.后姜子牙归国封神,封龙吉公主为红鸾星.']],
                    },
                    translate: {
                        xlg_bixiao: '碧霄仙子',
                        xlg_longnv: '龙女',
                        xlg_qiongxiao: '琼霄仙子',
                        xlg_yunxiao: '云霄仙子',
                        xlg_yanluowang: '阎罗王',
                        xlg_mengpo: '孟婆',
                        xlg_jiaonv: '蛟女',
                        xlg_baize: '白泽',
                        xlg_goumang: '句芒',
                        xlg_zhinv: '织女',
                        xlg_nvwa: '女娲',
                        xlg_luwu: '陆吾',
                        xlg_jinwu: '金乌',
                        xlg_nvying: '女英',
                        xlg_shengongbao: '申公豹',
                        xlg_yaoji: '瑶姬',
                        xlg_qinglong: '青龙',
                        xlg_zhuque: '朱雀',
                        xlg_jingwei: '精卫',
                        xlg_xingtian: '刑天',
                        xlg_yujiang: '禺疆',
                        xlg_gonggong: '共工',
                        xlg_zhurong: '祝融',
                        xlg_cuihu: '翠狐',
                        xlg_lijing: '李靖',
                        xlg_houyi: '后羿',
                        xlg_yuanshitianzun: '元始天尊',
                        xlg_longwang: '龙王',
                        xlg_fuxi: '伏羲',
                        xlg_zhenwudadi: '真武大帝',
                        xlg_baigujing: '白骨精',
                        xlg_liuermihou: '六耳猕猴',
                        xlg_leigong: '雷公',
                        xlg_dianmu: '电母',
                        xlg_xiaoming: '宵明',
                        xlg_yudi: '玉帝',
                        xlg_xuanwu: '玄武',
                        xlg_baihu: '白虎',
                        xlg_baiqiulian: '白秋练',
                        xlg_taohuayao: '桃花妖',
                        xlg_qianliyan: '千里眼',
                        xlg_heiwuchang: '黑无常',
                        xlg_baiwuchang: '白无常',
                        xlg_jiuweihu: '九尾狐',
                        xlg_jiutouchong: '九头虫',
                        xlg_zhuguang: '烛光',
                        xlg_lingbaotianzun: '灵宝天尊',
                        xlg_shunfenger: '顺风耳',
                        xlg_niumowang: '牛魔王',
                        xlg_chimei: '魑魅',
                        xlg_longjigongzhu: '龙吉公主',
                        xlg_hualingniao: '花翎鸟',
                        xlg_hualingniao_info: '锁定技,你的回合外,其他角色能对你使用的牌数合计至多为X(X为你区域内的♣️️牌数).',
                        xlg_fusheng: '浮生若梦',
                        xlg_fusheng_info: '出牌阶段限一次,你可以选择攻击范围内的两名角色.若如此做,这些角色进行拼点,交换拼点牌.若这些牌的类别均相同,你与这些角色各随机弃置两张手牌,你可以令一名其他角色摸四张牌.',
                        xlg_fusheng2: '浮生若梦',
                        xlg_fusheng2_info: '',
                        xlg_bolan: '波澜不惊',
                        xlg_bolan_info: '一名其他角色造成伤害或失去体力后,若其不因使用牌造成伤害或失去体力,你可以获得一张【闪避】.',
                        xlg_cangming: '沧溟',
                        xlg_cangming_info: '当你受到伤害时,若伤害值不小于X,你可以选择未执行过的一项:❶废除武器栏与防具栏;❷废除饰品栏;❸废除宝物栏与判定区.若如此做,你防止此伤害,回复2点体力(X为你的攻击范围).',
                        xlg_niliu: '逆流',
                        xlg_niliu_info: '当你失去体力后,若你没有护甲,你可以获得X点护甲,摸等量的牌(X为场上体力值大于你的角色数).',
                        xlg_honghuniao: '鸿鹄鸟',
                        xlg_honghuniao_info: '每回合限一次,一名其他角色使用的牌指定你为目标时,若你是此牌的唯一目标,你可以弃置两张手牌,选择一项:❶弃置其的两张手牌;❷对其造成2点伤害.',
                        xlg_xianle: '霓裳仙乐',
                        xlg_xianle_info: '当你受到伤害后,你可以判定一次.若为♣️️,你弃置伤害来源的四张牌.',
                        xlg_qingluan: '青鸾',
                        xlg_qingluan_info: '当你失去装备区内的一张牌后,你可以视为使用一张【进攻】.',
                        xlg_fushenzhou: '缚神咒',
                        xlg_fushenzhou_info: '每回合限一次,一名角色被横置后,你可以令一名角色横置.',
                        xlg_fulongsuo: '缚龙索',
                        xlg_fulongsuo_info: '出牌阶段,你可以选择一名手牌数等于X的其他角色,其弃置任意张牌(至少一张).若如此做,你可以弃置等量的红色手牌,对其视为使用一张【进攻】(X为你的体力值).',
                        xlg_shengsibu: '生死簿',
                        xlg_shengsibu_info: '一名角色的延时锦囊牌判定时,你可以观看牌堆顶的两张牌.获得其中的一张牌,将其余的牌置于牌堆顶;当你成为其他角色使用的普通锦囊牌的目标时,你可以重复此流程.',
                        xlg_huangquan: '黄泉界',
                        xlg_huangquan_info: '锁定技,当你使用伤害类的牌指定目标时,此牌目标有概率直接进入濒死状态(概率取决于你本局游戏造成的伤害值合计).',
                        xlg_duoming: '夺命',
                        xlg_duoming_info: '当你使用【强击】指定目标时,你可以令体力值等于你的其他角色各失去1点体力.',
                        xlg_wangsheng: '轮回往生',
                        xlg_wangsheng_info: '出牌阶段限一次,你可以选择手牌数大于你的一名其他角色,展示其的一张手牌并弃置.若此牌为:♥️️,其回复1点体力;♦️️,其摸三张牌;♠️️,其失去1点体力;♣️️,其弃置三张手牌.',
                        xlg_wangque: '忘却前尘',
                        xlg_wangque_info: '当你受到伤害后,你可以摸一张牌.若如此做,当前回合角色不能使用或打出手牌,直到当前回合结束.',
                        xlg_qizhu: '泣珠',
                        xlg_qizhu_info: '锁定技,出牌阶段,你使用第X张牌造成的伤害值+2(X为你的体力值).',
                        xlg_yibao: '遗海之宝',
                        xlg_yibao_info: '一名其他角色的结束阶段开始时,若当前回合有宝物牌因弃置而置入弃牌堆,你可以摸一张牌,获得其中的一张宝物牌.',
                        xlg_yaoshen: '妖神苏醒',
                        xlg_yaoshen_info: '锁定技,当你使用【强击】或【短兵相接】指定目标时,此牌额外结算一次.',
                        xlg_qigu: '凄骨',
                        xlg_qigu_info: '限定技,出牌阶段,你可以选择一名其他角色.若如此做,每当其使用或打出一张♥️️牌时,你摸三张牌.其的回合结束时,若其当前回合未使用或打出过♥️️牌,你可以弃置其的三张牌.其阵亡后,重置此技能.',
                        xlg_chudhui: '春回万物',
                        xlg_chudhui_info: '一名其他角色阵亡后,你可以选择手牌数为全场最少的一名其他角色.若如此做,展示你的全部手牌,其他角色可以交给你一张牌(不能与你手牌中的花色相同),选择一项:❶摸两张牌;❷回复2点体力.',
                        xlg_fusu: '复苏之光',
                        xlg_fusu_info: '一名其他角色回复体力后,你可以将一张牌当【治愈】使用.',
                        xlg_queqiao: '鹊桥相会',
                        xlg_queqiao_info: '游戏开始时,你选择一名男性角色.每当其使用的牌造成伤害后,其可以令你获得1点护甲,将此牌交给你.每当你使用的牌造成伤害后,你可以令其获得1点护甲,将此牌交给其.',
                        xlg_qingzhi: '情真意挚',
                        xlg_qingzhi_info: '出牌阶段限一次,当你使用的基本牌结算后,你可以将一张与此牌花色相同的手牌当此牌使用.',
                        xlg_lianshi: '炼石补天',
                        xlg_lianshi_info: '当你需要使用或打出一张【进攻】或【闪避】时,你可以将一名角色的最后一张手牌当【进攻】或【闪避】使用或打出.若如此做,其回复2点体力.',
                        xlg_chuangshi: '创世女神',
                        xlg_chuangshi_info: '摸牌阶段外,当你从牌堆摸牌后,你可以展示牌堆顶等量的牌.若如此做,你可以令一名其他角色获得其中与你摸到的花色均相同的牌.',
                        xlg_ningyuan: '凝元',
                        xlg_ningyuan_info: '每回合限一次,一名角色受到伤害时,若其在你的攻击范围,你可以令其摸两张牌.若如此做,你弃置一张牌,伤害来源弃置三张牌.',
                        xlg_weiwu: '唯吾独尊',
                        xlg_weiwu_info: '当你使用装备牌时,你可以展示全部手牌,将其中的【短兵相接】均置入弃牌堆.若如此做,令一名其他角色选择一项:❶弃置X张牌,失去2点体力;❷令你摸X张牌,回复2点体力(X为你以此法失去的牌数).',
                        xlg_fenjin: '焚烧殆尽',
                        xlg_fenjin_info: '锁定技,当你受到火焰伤害后,你回复1点体力,对伤害来源造成X点火焰伤害(X为你与伤害来源的体力值之差).',
                        xlg_lieyan: '烈焰之羽',
                        xlg_lieyan_info: '出牌阶段开始时,你可以判定一次.若为红色,你可以令一名角色随机获得一张♦️️牌.若为黑色,你可以弃置一名其他角色的一张牌.',
                        xlg_lingmou: '灵眸',
                        xlg_lingmou_info: '锁定技,当你受到伤害时,你弃置一张手牌.',
                        xlg_guanxin: '贯心',
                        xlg_guanxin_info: '一名其他角色失去最后一张手牌时,你可以交给其一张牌,回复1点体力.',
                        xlg_shangqing: '伤情败欲',
                        xlg_shangqing_info: '摸牌阶段开始时,若你的场上有牌,你可以额外摸X张牌.若如此做,你将一张牌置于牌堆顶(X为你本局游戏受到伤害的次数).',
                        xlg_guhuo: '无情蛊惑',
                        xlg_guhuo_info: '出牌阶段,你可以弃置两张♦️️牌,摸一张牌.若如此做,令你的上家选择是否与你各摸一张牌.若选择是且其的上家不为你,其的上家重复此流程.若选择否,其与你各弃置一张牌.',
                        xlg_daoyou: '道友请留步',
                        xlg_daoyou_info: '当你受到伤害时,若你的区域内没有牌,你可以展示牌堆底的两张牌且获得之.若如此做,你获得对你造成伤害的牌,选择是否交给伤害来源一张牌.',
                        xlg_lanzhi: '兰芝',
                        xlg_lanzhi_info: '一名其他角色的出牌阶段外,当其从牌堆摸牌时,你可以观看牌堆顶的X张牌.若如此做,你可以将一张手牌替换之(X为你的手牌数).',
                        xlg_wushan: '巫山神女',
                        xlg_wushan_info: '每回合限一次,当你与其他角色进行拼点后,若你赢,你可以获得其的拼点牌.若你没赢,你可以获得你的拼点牌.',
                        xlg_xiancao: '仙草',
                        xlg_xiancao_info: '出牌阶段限一次,你可以选择一项:❶弃置全部标记为<仙草>的手牌;❷弃置全部手牌.若如此做,令手牌数大于你的角色各选择一项:❶弃置一张手牌;❷令你摸两张牌,将这些牌标记为<仙草>.若你的手牌数为全场唯一最多,你结束此阶段且标记为<仙草>的手牌不计入手牌上限.',
                        xlg_shengshi: '盛世川河',
                        xlg_shengshi_info: '出牌阶段,你可以选择一名有♦️️手牌的其他角色,展示其的全部手牌.若如此做,将其的♦️️手牌均置入弃牌堆,你摸等量的牌.',
                        xlg_niuzhuan: '扭转乾坤',
                        xlg_niuzhuan_info: '限定技,出牌阶段,你可以选择两名非主公身份的角色,这些角色的身份牌互换.',
                        xlg_longxiao: '龙啸',
                        xlg_longxiao_info: '出牌阶段,你可以与手牌数等于你的一名其他角色进行拼点.若你赢,你可以令攻击范围内的一名角色回复1点体力,摸两张牌.',
                        xlg_liuli: '琉璃净火',
                        xlg_liuli_info: '一名其他角色的回合开始时,你可以弃置其区域内的两张牌.若如此做,其的回合结束时,若你当前回合未受到伤害,你对其视为使用一张【爆炎】.',
                        xlg_chiyu: '炽羽',
                        xlg_chiyu_info: '当你失去手牌时,你可以判定一次.若为♦️️,你可以弃置一名角色的一张牌.若以此法弃置的牌为【闪避】,你可以使用之.',
                        xlg_chiyu2: '炽羽',
                        xlg_chiyu2_info: '',
                        xlg_silie: '撕裂之风',
                        xlg_silie_info: '潜伏技,锁定技,当你登场后,当前回合角色判定一次.若为♣️️,其摸三张牌.若不为♣️️,其减1点体力上限,你对其造成2点伤害;当你解除濒死状态后,你重新进入<潜伏>状态.',
                        xlg_silie2: '撕裂之风',
                        xlg_silie2_info: '',
                        xlg_tianhai: '填海',
                        xlg_tianhai_info: '觉醒技,一名其他角色使用【强击】指定目标时,若其的基本牌数小于你,其摸三张牌,你减1点体力上限,获得技能<坚定>.',
                        xlg_jianding: '坚定',
                        xlg_jianding_info: '当你受到伤害时,你可以展示一张牌,交给一名其他角色.若如此做,直到你下回合开始.其不能使用或打出与此牌类别相同的牌,其使用的牌必须指定你的上家为目标.',
                        xlg_yizhi: '不屈意志',
                        xlg_yizhi_info: '一名角色的回合结束时,若其当前回合:未造成过伤害,你可以令其随机弃置一张手牌;仅造成一次伤害,你可以加1点体力上限,回复1点体力;仅造成三次伤害,你可以加3点体力上限,回复3点体力.',
                        xlg_dihun: '抵魂',
                        xlg_dihun_info: '出牌阶段限一次,你可以选择一名其他角色装备区内的一张牌,重铸且展示之.若为红色,你依次摸三张牌.若为黑色,你获得之.',
                        xlg_bibodangyang: '碧波荡漾',
                        xlg_bibodangyang_info: '每轮限一次,一名角色受到伤害时,若伤害来源是你,你可以防止此伤害.若如此做,你观看其的全部手牌,弃置其的两张手牌.',
                        xlg_xuhuan: '虚幻海域',
                        xlg_xuhuan_info: '摸牌阶段开始时,你可以额外摸X张牌,跳过本回合的出牌阶段(X为你已损失的体力值).',
                        xlg_minghe: '冥河摆渡',
                        xlg_minghe_info: '一名角色使用武器牌后,你可以选择其攻击范围内的一名角色,弃置其的一张手牌.若以此法弃置装备牌,其对该角色视为使用一张【进攻】.',
                        xlg_jianghong: '降洪',
                        xlg_jianghong_info: '一名角色使用【狂暴】时,你可以将一张牌移出游戏,令一名其他角色随机弃置区域内的X张牌.若如此做,其他角色不能使用与移出游戏的类别相同的牌指定你为目标,直到你下回合开始(X为你的座位数).',
                        xlg_jianghong2: '降洪',
                        xlg_jianghong2_info: '',
                        xlg_tunmo: '吞没',
                        xlg_tunmo_info: '锁定技,你使用【强击】指定的额外目标数+1.',
                        xlg_yanpo: '焰破八荒',
                        xlg_yanpo_info: '出牌阶段限一次,当你使用基本牌或普通锦囊牌指定目标时,你可以令此牌额外指定一个目标.若如此做,此牌的额外目标下回合使用牌时,若类别与你使用的相同且目标不为你,其可以额外指定你为目标.其下回合结束时,受到2点无来源的火焰伤害.',
                        xlg_yaoling: '妖灵漂泊',
                        xlg_yaoling_info: '出牌阶段,选择你点数最小的一张手牌,与一名其他角色进行拼点.若你赢,其获得你的拼点牌,你对其造成1点伤害.若你没赢,你获得你的拼点牌,其对你造成1点伤害.',
                        xlg_shunshan: '瞬闪',
                        xlg_shunshan_info: '当你回复体力时,若你的体力值不为全场最少,你可以额外回复1点体力.若如此做,你随机获得一张伤害类的牌.',
                        xlg_baota: '镇妖宝塔',
                        xlg_baota_info: '每两轮限一次,当你成为其他角色使用的基本牌或普通锦囊牌的目标时,你可以回复1点体力,令此牌对你无效.若如此做,你可以选择一项:❶令一名手牌数小于体力值的角色摸四张牌,获得1点护甲;❷令一名手牌数大于体力值的角色弃置四张牌,随机废除1个装备栏.',
                        xlg_tongshuai: '统帅',
                        xlg_tongshuai_info: '出牌阶段,你可以令一名其他角色选择是否展示两张手牌.若选择是,你可以交给其一张与这些牌类别均不相同的手牌,其下次造成的伤害值+1.若如此做,你不能再对其发动此技能,直到出牌阶段结束.',
                        xlg_tongshuai2: '统帅',
                        xlg_tongshuai2_info: '',
                        xlg_shenshe: '神射',
                        xlg_shenshe_info: '当你使用【进攻】对其他角色造成伤害时,你可以弃置一张♦️️牌,对其造成1点伤害.',
                        xlg_xunji: '迅疾',
                        xlg_xunji_info: '当你失去体力时,你可以获得一名角色区域内的一张牌,防止之.',
                        xlg_xuanxu: '道冲玄虚',
                        xlg_xuanxu_info: '出牌阶段限一次,你可以选择装备区内的一张牌,将此牌移动至一名其他角色的装备区,其与你交换手牌.若其的装备区内没有牌,重置此技能.',
                        xlg_shane: '断善修恶',
                        xlg_shane_info: '当你受到伤害后,你可以记录对你造成伤害的牌名.若如此做,直到你下次受到伤害,你不能成为此牌名的目标,你使用此牌名造成的伤害值+X(X为你装备区内的♠️️牌数).',
                        xlg_yuze: '雨泽',
                        xlg_yuze_info: '当你受到伤害时,你可以将一张【寂灭之兆】置入伤害来源的判定区,对其造成1点伤害.',
                        xlg_jingu: '不休禁锢',
                        xlg_jingu_info: '出牌阶段限一次,你可以选择至多五名其他角色,摸等量的牌.若如此做,你交给这些角色各一张牌.其各随机获得你上家的一张牌,其不能使用或打出你以此法交给其的牌.',
                        xlg_liehun: '猎魂之印',
                        xlg_liehun_info: '一名角色失去一张【狂暴】后,你可以令一名其他角色判定一次.若不为♥️️,将一张【寂灭之兆】置入其的判定区.若为♥️️,你摸一张牌,对其造成2点伤害.',
                        xlg_zhiwu: '至武',
                        xlg_zhiwu_info: '结束阶段开始时,你可以将手牌数补至X(X为你本回合使用的牌数).',
                        xlg_yisheng: '夷升之势',
                        xlg_yisheng_info: '出牌阶段,你可以将一名角色装备区内的一张牌移动至另一名角色.若如此做,你不能以此法移动与此牌类别相同的装备牌,也不能选择以此法装备过牌的角色移动牌,直到此阶段结束.若以此法装备牌的角色不为你,因此失去牌的角色对因此装备牌的角色视为使用一张【进攻】(无视防具).',
                        xlg_yisheng3: '夷升之势',
                        xlg_yisheng3_info: '',
                        xlg_zaijienantao: '在劫难逃',
                        xlg_zaijienantao_info: '',
                        xlg_zaijienantao2: '在劫难逃',
                        xlg_zaijienantao2_info: '每局游戏限X次,锁定技,防止你阵亡,改为当前回合角色随机废除1个装备栏(X为你本局游戏发动过<夷升之势>的次数).',
                        xlg_guci: '苍白骨刺',
                        xlg_guci_info: '出牌阶段限一次,当你使用的牌结算后,你可以展示牌堆顶的一张牌.若与你使用的牌类别相同,你可以弃置两张手牌,摸等量的牌.若如此做,你可以离开游戏两轮,也可以对一名其他角色造成X点伤害(X为你本局游戏发动过此技能的次数).',
                        xlg_guci2: '苍白骨刺',
                        xlg_guci2_info: '',
                        xlg_guiming: '散魄归冥',
                        xlg_guiming_info: '摸牌阶段开始时,你可以放弃摸牌,改为观看一名其他角色的全部手牌,获得其中的任意张花色均不相同的牌.若以此法获得的牌包含四种花色,你回复X点体力(X为你上家区域内的牌数).',
                        xlg_guci3: '苍白骨刺',
                        xlg_guci3_info: '',
                        xlg_zhenjia: '以假乱真',
                        xlg_zhenjia_info: '当你获得装备牌后,你可以选择一名其他角色.若如此做,你获得其的全部技能,直到下回合开始.',
                        xlg_xushi: '虚张声势',
                        xlg_xushi_info: '锁定技,当你使用【短兵相接】对其他角色造成伤害时,若其的体力值大于你,此伤害值-1.',
                        xlg_leiyun: '雷云',
                        xlg_leiyun_info: '锁定技,当你使用或打出一张牌时,若当前回合没有与此牌颜色相同的牌因你使用或打出而进入弃牌堆,则你对上家造成1点雷电伤害.',
                        xlg_leigu: '天鼓雷音',
                        xlg_leigu_info: '每回合限一次,当你使用红色【进攻】或普通锦囊牌指定唯一目标时,你可以弃置其区域内的各一张牌.此牌结算后,其获得因此失去的牌.',
                        xlg_dianhu: '电弧',
                        xlg_dianhu_info: '当你对其他角色造成伤害后,你可以选择体力值不大于其的一名其他角色,对其造成1点雷电伤害.',
                        xlg_xinjing: '心境',
                        xlg_xinjing_info: '一名角色使用【短兵相接】指定你为目标时,你可以展示一张手牌.若如此做,其选择一项:❶弃置一张与此牌颜色相同的手牌;❷回复2点体力,此牌对你无效',
                        xlg_jiguang: '吉光相佑',
                        xlg_jiguang_info: '当你处于濒死状态时,你可以选择一项:❶令一名其他角色回复2点体力;❷令一名其他角色摸四张牌;❸令一名其他角色翻至正面.',
                        xlg_jiushuzhihun: '救赎之魂',
                        xlg_jiushuzhihun_info: '出牌阶段限一次,你可以弃置装备区内的一张牌,令一名角色判定一次.若为♦️️,其回复2点体力.',
                        xlg_tianting: '天庭审判',
                        xlg_tianting_info: '一名角色受到【短兵相接】造成的伤害后,若其在你的攻击范围,你可以回复1点体力,对伤害来源造成2点伤害.',
                        xlg_xuanxiao: '且听喧嚣',
                        xlg_xuanxiao_info: '出牌阶段,你可以令一名没有普通锦囊牌的其他角色判定一次,获得判定牌.若为♣️️,其回复1点体力,你与其各摸两张牌.',
                        xlg_shenze: '神泽',
                        xlg_shenze_info: '弃牌阶段开始时,你可以展示全部手牌,选择一项:❶摸三张牌;❷手牌上限+3,直到当前回合结束.若以此法展示的牌花色数不等于选项次数,你重复此流程.',
                        xlg_shengmang: '圣芒守护',
                        xlg_shengmang_info: '锁定技,当你使用或打出的牌结算后,将这些牌移出游戏;结束阶段开始时,你选择一项:❶弃置这些牌;❷令一名其他角色获得这些牌.',
                        xlg_bilei: '壁垒',
                        xlg_bilei_info: '结束阶段开始时,你可以获得X点护甲(X为你本回合受到的伤害值).',
                        xlg_huimie: '毁灭之痕',
                        xlg_huimie_info: '你的回合外,当你失去牌后,你可以摸两张牌.',
                        xlg_leishi: '雷噬',
                        xlg_leishi_info: '锁定技,一名敌方角色因你处于濒死状态时,其的全部手牌移出游戏,你对其造成2点雷电伤害.若当前回合角色是你,你摸两张牌,回复等量的体力.',
                        xlg_yuanqi: '镜花缘起',
                        xlg_yuanqi_info: '摸牌阶段开始时,若你此阶段开始前回复过体力,你可以令一名其他角色依次使用至少一张♣️️牌或【治愈】.若如此做,你与其各回复X点体力,跳过此阶段(X为其以此法使用的牌数).',
                        xlg_yuanqi1: '镜花缘起',
                        xlg_yuanqi1_info: '',
                        xlg_yuanqi2: '镜花缘起',
                        xlg_yuanqi2_info: '',
                        xlg_fangshi: '幻梦芳逝',
                        xlg_fangshi_info: '锁定技,一名角色使用牌指定你为目标时,若你不是此牌的唯一目标,令此牌的目标各随机弃置一张手牌.',
                        xlg_shenlou: '蜃楼边',
                        xlg_shenlou_info: '当你受到伤害后,你可以选择一项:❶废除你的装备区;❷废除你的判定区.若如此做,你汲取伤害来源的X点体力(X为伤害来源下家的体力值).',
                        xlg_nianhua: '拈花一笑',
                        xlg_nianhua_info: '限定技,出牌阶段,你可以进入濒死状态.若如此做,除你以外的角色各选择一项:❶打出一张【进攻】;❷受到你造成的1点伤害,你回复2点体力.',
                        xlg_nianhua2: '拈花一笑',
                        xlg_nianhua2_info: '',
                        xlg_xianrou: '纤柔灼情',
                        xlg_xianrou_info: '出牌阶段开始时,你可以随机对一名角色视为使用一张【爆炎】.若以此法造成伤害,你与其各摸两张牌,重置技能<拈花一笑>.',
                        xlg_shixuan: '头昏目眩',
                        xlg_shixuan_info: '出牌阶段,你可以弃置任意张牌,令一名其他角色选择一项:❶弃置区域内的X张牌;❷摸X张牌且翻面(X为你以此法弃置的牌数).',
                        xlg_shijie: '视界',
                        xlg_shijie_info: '一名其他角色的回合内,其首次使用普通锦囊牌指定唯一目标时,若此牌目标不为你,你可以弃置两张牌,令此牌的目标改为你.若如此做,此牌结算后,你观看其的全部手牌,获得其的X张牌(X为你与其的♦️️手牌数之和).',
                        xlg_hunpo: '夺魂锁魄',
                        xlg_hunpo_info: '一名角色使用【进攻】指定目标时,若此【进攻】目标的体力值不小于你,你可以令其选择是否将一张♣️️牌置于牌堆底.若其选择是,此【进攻】对其无效,你摸两张牌.若其选择否,此【进攻】继续对其结算,其失去1点体力.',
                        xlg_hunpo_buff: '夺魂锁魄',
                        xlg_hunpo_buff_info: '',
                        xlg_xinzhi: '苦其心志',
                        xlg_xinzhi_info: '当你回复体力时,你可以弃置全部手牌,令至多X名其他角色各选择一项:❶交给你一张【闪避】;❷失去2点体力(X为你以此法弃置的牌数).',
                        xlg_shihun: '蚀魂',
                        xlg_shihun_info: '当你失去体力时,若当前牌堆洗切过,你摸X张牌.若当前牌堆未洗切过,你回复X点体力(X为你装备区内的牌数).',
                        xlg_yuwei: '逝魂余威',
                        xlg_yuwei_info: '当你弃置其他角色的牌时,你可以随机获得一个锁定技.',
                        xlg_humei: '狐媚',
                        xlg_humei_info: '每当你受到1点伤害时,你可以观看伤害来源的全部手牌,选择一种类别且获得其中与此类别均相同的牌.',
                        xlg_huhuo: '狐惑',
                        xlg_huhuo_info: '锁定技,当你阵亡时,除你以外的角色各回复1点体力.这些角色在出牌阶段使用的牌数不能大于X(X为体力上限).',
                        xlg_shoulie: '暗中狩猎',
                        xlg_shoulie_info: '当你造成伤害时,你可以选择其的X个装备栏废除.若如此做,其使用第三张名称均相同的牌结算后,其可以选择一个装备栏回复,令你将手牌数补至九张(X为你造成的伤害值).',
                        xlg_shoulie1: '暗中狩猎',
                        xlg_shoulie1_info: '',
                        xlg_manyan: '烈毒蔓延',
                        xlg_manyan_info: '当你使用的牌结算后,若为偶数次使用名称均相同的牌,你可以令一名其他角色失去2点体力.',
                        xlg_manyan2: '烈毒蔓延',
                        xlg_manyan2_info: '',
                        xlg_weiguang: '微光之引',
                        xlg_weiguang_info: '隐匿技,锁定技,当你登场后,你声明一种花色,场上角色不能使用或打出与声明花色均相同的牌,直到本局游戏结束.',
                        xlg_qiongguang: '穹光',
                        xlg_qiongguang_info: '一名角色打出手牌时,你可以展示牌堆顶的X张牌,选择是否使用其中的一张牌.若选择是,令此牌目标各获得其中的一张牌.此牌结算后,你可以重复此流程.若其中没有能使用的牌,你可以移动场上的一张牌(X为你的体力值).',
                        xlg_jingjie: '惊劫',
                        xlg_jingjie_info: '出牌阶段每名其他角色限一次,你可以观看一名其他角色的全部手牌,与其交换一张手牌.若其的手牌花色数增加,其获得1点护甲.若其的手牌花色数减少,你获得1点护甲.若其的手牌花色数不变,你选择一项:❶摸两张牌;❷回复1点体力.',
                        xlg_jingjie2: '惊劫',
                        xlg_jingjie2_info: '',
                        xlg_wuleihong: '五雷轰',
                        xlg_wuleihong_info: '当你处于濒死状态时,你可以弃置任意张黑色牌,对等量的其他角色各造成2点雷电伤害.',
                        xlg_jianting: '监听',
                        xlg_jianting_info: '一名其他角色的回合结束时,若其当前回合使用过【强击】指定你为目标,你可以展示牌堆顶的两张牌.若其中有♦️️,你回复2点体力.',
                        xlg_bianyin: '辩音',
                        xlg_bianyin_info: '一名其他角色获得或弃置你装备区内的牌后,你可以随机将一张与此牌类别相同的装备牌置入你的装备区.',
                        xlg_poyun: '破云之风',
                        xlg_poyun_info: '每回合限一次,一名其他角色因弃置而失去♦️️牌后,你可以获得之.若如此做,其随机弃置装备区内的两张牌.若其为敌方,你对其造成1点伤害.',
                        xlg_nuhou: '震山怒吼',
                        xlg_nuhou_info: '当你使用装备牌后,你可以选择一张本轮未以此法使用过的伤害类普通锦囊牌,获得X点护甲.若如此做,你视为使用之(X为你判定区内的牌数).',
                        xlg_manheng: '蛮横',
                        xlg_manheng_info: '一名其他角色的出牌阶段开始时,若其的体力值大于你,你可以使用一张牌,令其弃置一张手牌.若如此做,其当前回合首次使用牌指定目标时,若此牌的目标为你以此法使用牌指定的目标,令此牌对其无效.',
                        xlg_shenghua: '灵魂升华',
                        xlg_shenghua_info: '每回合限一次,当你受到伤害后,你可以选择是否弃置一张牌.若选择是,你选择一名没有对你造成过伤害的角色,对其造成2点雷电伤害.若选择否,你选择一名对你造成过伤害的角色,其下次受到的伤害值-X(X为其的♠️️手牌数).',
                        xlg_shenghua2: '灵魂升华',
                        xlg_shenghua2_info: '',
                        xlg_liuhuo: '流火',
                        xlg_liuhuo_info: '出牌阶段限一次,你可以选择一项:❶弃置一名角色区域内的一张牌,对其的下家造成1点火焰伤害;❷令一名角色摸一张牌,其的上家摸两张牌.',
                        xlg_huanggu: '荒古图腾',
                        xlg_huanggu_info: '出牌阶段,你可以将一张基本牌置于牌堆顶,视为使用之.',
                    },
                };
                lib.config.all.characters.add('始源之乱');
                lib.config.characters.add('始源之乱');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:始源之乱/image/${i}.jpg`)
                }
                lib.translate['始源之乱_character_config'] = `始源之乱`;
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
                    name: '始源之乱',
                    connect: true,
                    card: {
                        lg_shanbi: {
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
                                target.addTempSkill('lg_shanbi2', { player: 'lg_shanbi2After' });
                                ('step 1');
                                if (target.countCards('he')) {
                                    target.chooseToDiscard('he', true);
                                    target.draw();
                                    ('step 2');
                                    if (target.hasSkill('lg_shanbi2')) {
                                        target.draw();
                                    }
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
                        lg_jimiezhizhao: {
                            type: 'delay',
                            filterTarget(card, player, target) {
                                return lib.filter.judge(card, player, target) && player != target;
                            },
                            judge(card) {
                                if (card.suit != 'diamond') return -3;
                                return 0;
                            },
                            effect() {
                                if (result.bool == false) {
                                    player.addTempSkill('lg_jimiezhizhao2', { player: 'recoverBegin' });
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
                        lg_baoyan: {
                            type: 'trick',
                            enable: true,
                            filterTarget: true,
                            cardnature: 'fire',
                            content() {
                                'step 0';
                                if (target.countCards('he') < 3) {
                                    event.directfalse = true;
                                } else {
                                    target.chooseToDiscard('he', 3).ai = function (card) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (get.damageEffect(target, player, target, 'fire') >= 0) return 0;
                                        if (player.hasSkillTag('notricksource')) return 0;
                                        if (target.hasSkillTag('notrick')) return 0;
                                        if (card.name == 'tao') return 0;
                                        if (target.hp == 1 && card.name == 'jiu') return 0;
                                        if (target.hp == 1 && get.type(card) != 'basic') {
                                            return 10 - get.value(card);
                                        }
                                        return 8 - get.value(card);
                                    };
                                }
                                ('step 1');
                                if (event.directfalse || !result.bool) {
                                    target.damage('fire');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 4,
                                    value: 7,
                                    useful: 2,
                                },
                                result: {
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (get.damageEffect(target, player, player) < 0 && get.attitude(player, target) > 0) {
                                            return -2;
                                        }
                                        var nh = target.countCards('he');
                                        if (target == player) nh--;
                                        switch (nh) {
                                            case 0:
                                            case 1:
                                                return -2;
                                            case 2:
                                                return -1.5;
                                            case 3:
                                                return -1;
                                            default:
                                                return -0.7;
                                        }
                                    },
                                },
                                tag: {
                                    damage: 1,
                                    fireDamage: 1,
                                    natureDamage: 1,
                                    discard: 1,
                                    loseCard: 1,
                                    position: 'he',
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_zhiyu: {
                            enable: true,
                            filterTarget(card, player, target) {
                                return target.hp < target.maxHp;
                            },
                            type: 'basic',
                            content() {
                                'step 0';
                                target.judge(function (card) {
                                    return get.type(card) == 'trick' ? 1 : 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    target.recover(2);
                                } else {
                                    target.draw();
                                    if (target.countCards('h') == 0) target.recover();
                                }
                            },
                            ai: {
                                order: 5,
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
                                    recover: 2,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_jingong: {
                            type: 'basic',
                            enable: true,
                            cardnature: 'fire',
                            filterTarget(card, player, target) {
                                return target.countCards('h');
                            },
                            content() {
                                'step 0';
                                target.damage();
                                ('step 1');
                                if (target.isIn()) {
                                    target.randomDiscard(1, 'h');
                                }
                            },
                            ai: {
                                basic: {
                                    order: 1.8,
                                    value: [5, 1],
                                    useful: [4, 1],
                                },
                                result: {
                                    target: -1,
                                },
                                tag: {
                                    damage: 1,
                                    thunderDamage: 1,
                                    natureDamage: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                        lg_duanbingxiangjie: {
                            type: 'trick',
                            filterTarget: true,
                            global: 'lg_duanbingxiangjie2',
                            content() {
                                if (target.countCards('h')) {
                                    player.discardPlayerCard('h', target, true);
                                    target.damage();
                                }
                            },
                            ai: {
                                order: 1,
                                useful: 6,
                                value: 6,
                                result: {
                                    target: -1,
                                },
                                tag: {
                                    loseCard: 1,
                                },
                            },
                            selectTarget: 1,
                            fullimage: true,
                        },
                    },
                    translate: {
                        lg_duanbingxiangjie: '短兵相接',
                        lg_duanbingxiangjie_info: '一名其他角色使用【进攻】指定目标时,若你与其的手牌数均为全场最少,你可以对其使用.你弃置其的一张手牌,对其造成1点伤害.',
                        lg_jingong: '进攻',
                        lg_jingong_info: '出牌阶段,对一名有手牌的角色使用.你对其造成1点伤害,其随机弃置一张手牌.',
                        lg_zhiyu: '治愈',
                        lg_zhiyu_info: '出牌阶段,对一名已受伤的角色使用.其判定一次,若为普通锦囊牌,其回复2点体力.若不为普通锦囊牌,其摸一张牌;且若其没有手牌,其回复1点体力.',
                        lg_baoyan: '爆炎',
                        lg_baoyan_info: '出牌阶段,对一名其他角色使用.其选择一项:①弃置三张牌;②令你对其造成1点火焰伤害.',
                        lg_jimiezhizhao: '寂灭之兆',
                        lg_jimiezhizhao_info: '出牌阶段,对一名其他角色使用,将此牌置入其的判定区.此牌对其判定,若不为♦️️,每当其回合开始时,随机跳过一个重要阶段,直到其回复体力为止.',
                        lg_shanbi: '闪避',
                        lg_shanbi_info: '出牌阶段,对你使用.你弃置一张牌,摸一张牌.下次你成为【进攻】的目标时,令此【进攻】对你无效.若此牌未生效且被多次使用,改为摸一张牌.',
                    },
                };
                for (const i in QQQ.card) {
                    const info = QQQ.card[i];
                    if (!info.image) {
                        if (info.fullskin) {
                            info.image = `ext:始源之乱/image/${i}.png`;
                        }
                        else {
                            info.image = `ext:始源之乱/image/${i}.jpg`;
                        }
                    }
                    lib.inpile.add(i);
                    if (info.mode && !info.mode.includes(lib.config.mode)) continue;
                    lib.card.list.push([lib.suits.randomGet(), lib.number.randomGet(), i]);
                }
                lib.config.all.cards.add('始源之乱');
                lib.config.cards.add('始源之乱');
                lib.translate.始源之乱_card_config = '始源之乱';
                return QQQ;
            });
        },
        package: {
            intro: "无奈浸染着混乱的思绪,悔恨跃进了茫然的脑海,麻木剥夺着残破的心灵,绝望在肆虐.<br/><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '尘',
            version: '1.3',
        },
    };
});

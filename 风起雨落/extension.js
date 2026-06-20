import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '风起雨落',
        content(config, pack) {
            lib.rank.rarity.legend.addArray(['majunon', 'wuzhugeon', 'shenzhouyuon', 'yangbiaoon', 'liubeion', 'yuanshaoon', 'mouzhouyuon', 'caocaoon', 'zuxuncaion', 'xushengon', 'shenganningon', 'shenguojiaon', 'shenxunyuon', 'simashion', 'simazhaoon', 'zhaoxiangon', 'guansuoon', 'zhangxuanon', 'xushaoon', 'guozhaoon', 'guanningon', 'lingtongon', 'wangyanon', 'hetaihouon', 'mouhuangzhongon', 'puyuanon', 'liuzanon', 'jiaxuon', 'mouzhangfeion', 'xizhicaion', 'Jiexiaoqiaoon', 'caopion', 'caiwenjion', 'renkai', '神华佗', '神左慈', '神郭嘉', '神荀彧']);
            game.addNature('fqyl_du', '毒', {
                linked: true,
                order: 1000,
            }); //添加杀的属性
            lib.translate.fqyl_du = '毒';
            lib.translate.dusha = '毒杀';
            lib.translate.dusha_info = '出牌阶段,对你攻击范围内一名角色使用.其需使用一张【闪】,否则你对其造成1点<毒>属性伤害.';
            lib.skill._fqyl_liushi = {
                trigger: {
                    player: ['damageBegin', 'recoverEnd', 'dying'],
                },
                intro: {
                    mark(dialog, storage, player) {
                        return '目前有' + get.cnNumber(player.countMark('_fqyl_liushi')) + '枚<毒>';
                    },
                },
                marktext: '毒',
                _priority: 99,
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageBegin') return event.nature == 'fqyl_du';
                    else return event.player.countMark('_fqyl_liushi') > 0;
                },
                content() {
                    'step 0';
                    if (event.triggername == 'damageBegin') {
                        trigger.player.addMark('_fqyl_liushi', trigger.num);
                        trigger.player.markSkill('_fqyl_liushi');
                    } else {
                        if (event.triggername == 'dying') {
                            trigger.player.loseHp(trigger.player.countMark('_fqyl_liushi'));
                        } else {
                            trigger.player.removeMark('_fqyl_liushi', trigger.player.countMark('_fqyl_liushi'));
                            trigger.player.unmarkSkill('_fqyl_liushi');
                        }
                    }
                },
            };
            lib.translate._fqyl_liushi = '毒';
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '风起雨落',
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
                        xinhuashen: {
                            audio: 'ext:神左慈/audio:2',
                            trigger: {
                                global: 'gameDrawBegin',
                                player: ['damageEnd', 'chonghuaEnd'],
                            },
                            forced: true,
                            async content(event, trigger, player) {
                                //QQQ
                                var list = get.gainableSkills();
                                list.remove(player.getSkills());
                                list = list.randomGets(3);
                                const result = await player
                                    .chooseControl(list)
                                    .set(
                                        'choiceList',
                                        list.map(function (i) {
                                            return '<div class="skill">【' + get.translation(lib.translate[i + '_ab'] || get.translation(i).slice(0, 2)) + '】</div><div>' + get.skillInfoTranslation(i, player) + '</div>';
                                        })
                                    )
                                    .set('displayIndex', false)
                                    .set('prompt', '选择你要获得的技能')
                                    .set('ai', () => {
                                        var list = _status.event.controls.slice();
                                        return list.sort((a, b) => {
                                            return get.skillRank(b, 'in') - get.skillRank(a, 'in');
                                        })[0];
                                    });
                                player.addSkill(result.control, true);
                                player.popup(result.control);
                                game.log(player, '获得了技能', '【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (get.type(card, 'trick') == 'trick' && player == target) return [1, 1];
                                    },
                                },
                            },
                        },
                        zhinang1: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                        },
                        shipo: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player != target) {
                                        if (get.type(card, 'trick') == 'trick') return false;
                                    }
                                },
                            },
                        },
                        zhinang: {
                            group: ['zhinang1', 'qicai'],
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            usable: 2,
                            filter(event, player) {
                                return _status.currentPhase == player && get.type(event.card, 'trick') == 'trick';
                            },
                            content() {
                                player.gain(
                                    get.cardPile(function (card) {
                                        return get.type(card, 'trick') == 'trick';
                                    }),
                                    'gain2'
                                );
                            },
                            ai: {
                                threaten: 1.8,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return player.maxHp;
                                },
                            },
                        },
                        qixing7: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'dying',
                            },
                            limited: true,
                            init(player) {
                                player.storage.qx_qixing = false;
                            },
                            filter(event, player) {
                                return player.hp <= 0;
                            },
                            content() {
                                player.storage.qx_qixing = true;
                                player.awakenSkill('qixing7');
                                player.removeSkill('zhinang');
                                player.addSkill('reguanxing');
                                player.addSkill('hujiang');
                                player.addSkill('yeyan');
                                player.addSkill('shipo');
                                var sum = 0;
                                event.cards = get.cards(7);
                                player.showCards(event.cards);
                                for (var i = 0; i < event.cards.length; i++) {
                                    sum += event.cards[i].number;
                                }
                                if (sum > 48) {
                                    player.gainMaxHp();
                                    player.update();
                                    player.hp = player.maxHp;
                                    player.update();
                                } else {
                                    player.die();
                                }
                            },
                            ai: {
                                order: 8,
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                        },
                        hujiang: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            init(player) {
                                player.storage.hujiang = false;
                            },
                            mark: true,
                            content() {
                                player.awakenSkill('hujiang');
                                player.draw(2);
                                player.addTempSkill('longdan', { player: 'phaseAfter' });
                                player.addTempSkill('wusheng', { player: 'phaseAfter' });
                                player.addTempSkill('paoxiao', { player: 'phaseAfter' });
                                player.addTempSkill('xinliegong', { player: 'phaseAfter' });
                                player.addTempSkill('retieji', { player: 'phaseAfter' });
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        chonghua: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.skills.length && target == player;
                            },
                            filter(event, player) {
                                return player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.skills = [];
                                var skills = target.skills.slice(0);
                                for (var i = 0; i < skills.length; i++) {
                                    var info = get.info(skills[i]);
                                    event.skills.push(skills[i]);
                                }
                                ('step 1');
                                if (event.skills.length) {
                                    player
                                        .chooseControl(event.skills)
                                        .set('prompt', '请选择你的要封印的技能')
                                        .set('ai', function () {
                                            return event.skills.randomGet();
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.removeSkill(result.control);
                                target.popup(result.control, 'fire');
                                game.log(target, '失去了技能', '#g【' + get.translation(result.control) + '】');
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        // if(target.countCards('h')<3) return 1;
                                        return -target.countCards('h');
                                    },
                                },
                                order: 8,
                                threaten: 0.5,
                            },
                        },
                        jishion: {
                            audio: 'ext:风起雨落/audio:1',
                            usable: 1,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.num('he', { suit: 'heart' }) > 0;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard(card) {
                                return card.suit == 'heart';
                            },
                            filterTarget(card, player, target) {
                                return target.num('h') > 0;
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                var num = target.num('h');
                                target.discard(target.get('h'));
                                target.draw(num);
                                target.showHandcards();
                                ('step 1');
                                var num = target.num('h', function (card) {
                                    return get.type(card) != 'basic';
                                });
                                if (num == 0) {
                                    event.finish();
                                } else {
                                    var recover = target.maxHp - target.hp;
                                    if (num > 0 && num <= recover) {
                                        target.recover(num);
                                    } else {
                                        if (recover > 0) target.recover(recover);
                                        target.draw(num - recover);
                                    }
                                }
                            },
                            ai: {
                                order: 9,
                                result: {
                                    target(player, target) {
                                        var recover = target.maxHp - target.hp;
                                        var nh = target.num('h');
                                        if (recover >= 2) return nh + recover;
                                        return nh;
                                    },
                                },
                                threaten: 2,
                            },
                        },
                        xuanxinon: {
                            audio: 'ext:风起雨落/audio:1',
                            trigger: {
                                global: 'damageEnd',
                            },
                            check: () => true,
                            content() {
                                'step 0';
                                var cards = [];
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    if (ui.discardPile.childNodes[i].suit == 'heart') {
                                        cards = cards.concat(ui.discardPile.childNodes[i]);
                                    }
                                }
                                if (cards.length) {
                                    var card = cards.randomGet();
                                    player.gain(card, 'gain2');
                                    game.log(player, '从弃牌堆获得了', card);
                                    if (trigger.player && trigger.player != player) {
                                        player.chooseCard('是否交给' + get.translation(trigger.player) + '一张牌？').ai = function (card) {
                                            if (get.attitude(player, trigger.player) > 0) return 6 - get.value(card);
                                            return 0;
                                        };
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.gain(result.cards[0]);
                                    player.$give(1, trigger.player);
                                }
                            },
                        },
                        '悲陈(改)': {
                            group: ['悲陈(改)_1', '悲陈(改)_2', '悲陈(改)_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        player.draw();
                                        trigger.cards.filterInD()[0].storage.beichen = 'beichen';
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.filterInD().length && event.cards.filterInD()[0].storage.beichen && event.targets && event.targets.includes(player); //QQQ
                                    },
                                    content() {
                                        delete trigger.cards.filterInD()[0].storage.beichen;
                                        if (
                                            trigger.player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            player.loseMaxHp();
                                        } else {
                                            if (player.maxHp < 5) {
                                                player.gainMaxHp();
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() { },
                                },
                            },
                        },
                        yinqiangon: {
                            subSkill: {
                                mark: {
                                    mark: true,
                                },
                                er: {
                                    content() {
                                        'step 0';
                                        var targets = [];
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].hasSkill('yinqiangon_mark')) targets.push(game.players[i]);
                                        }
                                        event.targets = targets;
                                        ('step 1');
                                        var controls = [];
                                        if (event.targets[0].hp <= 1) controls.push('其失去一点体力并回复两点体力');
                                        if (event.targets[0].countCards('h', 'shan') > 0) controls.push('你摸一张牌并对其使用一张【杀】');
                                        if (event.targets[0].countCards('ej') > 0) controls.push('你令其用其一张牌当做【杀】对你使用');
                                        event.controls = controls;
                                        var next = player.chooseControl();
                                        next.set('choiceList', controls);
                                        next.set('prompt', '请选择执行其中一个效果.');
                                        next.ai = function () {
                                            return 0;
                                        };
                                        ('step 2');
                                        result.control = event.controls[result.index];
                                        switch (event.controls[result.index]) {
                                            case '其失去一点体力并回复两点体力': {
                                                event.targets[0].loseHp();
                                                event.targets[0].recover(2);
                                                event.targets[0].removeSkill('yinqiangon_mark', false);
                                                event.finish();
                                                break;
                                            }
                                            case '你摸一张牌并对其使用一张【杀】': {
                                                player.draw();
                                                player.useCard({ name: 'sha' }, event.targets[0], false);
                                                event.targets[0].removeSkill('yinqiangon_mark', false);
                                                event.finish();
                                                break;
                                            }
                                            case '你令其用其一张牌当做【杀】对你使用': {
                                                var target = event.targets[0];
                                                player.chooseCardButton('he', event.targets[0].getCards('he'), '银枪:令其使用一张牌当做【杀】对你使用', true);
                                                break;
                                            }
                                            case '死': {
                                                event.targets[0].die();
                                                break;
                                            }
                                            case '生': {
                                                player.addSkill('jianxiong');
                                                event.targets[0].discard(event.targets[0].getCards('hej'));
                                                var err = get.cards(1);
                                                event.targets[0].showCards(card);
                                                event.targets[0].useCard({ name: 'sha' }, player, err);
                                                event.targets[0].removeSkill('yinqiangon_mark', false);
                                                break;
                                            }
                                        }
                                        ('step 3');
                                        var carde = result.links[0];
                                        player.gain(carde).gaintag = ['yinqiangon'];
                                        if (event.targets[0] == player) result.links[0].addGaintag('yinqiangon');
                                        ('step 4');
                                        var dr = player.getCards('h', function (card) {
                                            return card.hasGaintag('yinqiangon');
                                        });
                                        event.targets[0].useCard({ name: 'sha' }, player, dr, false);
                                        event.targets[0].removeSkill('yinqiangon_mark', false);
                                    },
                                    mark: true,
                                },
                            },
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.viewHandcards(target);
                                target.addSkill('yinqiangon_mark', false);
                                ('step 1');
                                player.useSkill('yinqiangon_er', false);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    target(player, target) {
                                        var att = get.attitude(player, target);
                                        if (target.hp == 1) {
                                            if (player.countCards('h', 'tao') && att > 0) return 1;
                                            return 0;
                                        }
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        longqiaoon: {
                            forced: true,
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.chooseBool(get.prompt('longqiaoon'), '你可令伤害来源选择一项:1.受到1点伤害;2.其摸一张牌,你视为对其使用一张【杀】').set('ai', function () {
                                    return -get.attitude(player, trigger.source);
                                });
                                ('step 2');
                                if (result.bool) {
                                    var list = ['其对你造成一点伤害', '你摸一张牌,其对你使用一张【杀】'];
                                    trigger.source
                                        .chooseControl(list)
                                        .set('prompt', get.prompt2('longqiaoon'))
                                        .set('ai', function () {
                                            return [0, 1].randomGet();
                                        });
                                } else {
                                    event.goto(4);
                                }
                                ('step 3');
                                switch (result.control) {
                                    case '其对你造成一点伤害':
                                        trigger.source.damage();
                                        break;
                                    case '你摸一张牌,其对你使用一张【杀】':
                                        trigger.source.draw(1);
                                        player.useCard({ name: 'sha' }, trigger.source, false);
                                        break;
                                }
                                ('step 4');
                                if (event.count >= 1) event.goto(1);
                            },
                            subSkill: {
                                dying: {
                                    trigger: {
                                        player: 'dying',
                                    },
                                    _priority: 10,
                                    forced: true,
                                    content() {
                                        player.draw();
                                    },
                                    _priority: 1000,
                                },
                            },
                        },
                        qinggangon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            zhuanhuanji: true,
                            forced: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player) {
                                    return '你的【杀】无视防具;当你使用【杀】指定目标后,' + (storage ? '弃置其两张牌' : '此【杀】不能被响应');
                                },
                            },
                            logTarget: 'target',
                            content() {
                                if (!player.storage.qinggangon) {
                                    trigger.parent.directHit.push(trigger.target);
                                } else {
                                    player.discardPlayerCard(trigger.target, true, 'he', 2);
                                }
                                trigger.target.addSkill('qinggang2');
                                player.when('useCardAfter').then(() => game.players.forEach((Q) => Q.removeSkill('qinggang2')));
                                player.changeZhuanhuanji('qinggangon');
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player, tag, arg) {
                                    if (arg && arg.name == 'sha') return true;
                                    return false;
                                },
                            },
                        },
                        悲陈: {
                            group: ['悲陈_1', '悲陈_2', '悲陈_3'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player != event.player;
                                    },
                                    content() {
                                        player.draw();
                                        trigger.cards.filterInD()[0].storage.beichen = 'beichen';
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.cards && event.cards.filterInD().length && event.cards.filterInD()[0].storage.beichen; //QQQ
                                    },
                                    content() {
                                        delete trigger.cards.filterInD()[0].storage.beichen;
                                        if (
                                            trigger.player.getHistory('sourceDamage', function (evt) {
                                                return evt.card == trigger.card;
                                            }).length
                                        ) {
                                            player.loseMaxHp();
                                        } else {
                                            if (player.maxHp < 5) {
                                                player.gainMaxHp();
                                            }
                                        }
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    content() {
                                        lib.skill['悲陈_1'].forced = true;
                                    },
                                },
                            },
                        },
                        三哀: {
                            group: ['三哀_1', '三哀_2'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'phaseDrawBegin1',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        trigger.changeToZero();
                                        player.draw(Math.min(player.maxHp, 20));
                                    },
                                },
                                2: {
                                    trigger: {
                                        player: 'dieBegin',
                                    },
                                    content() {
                                        'step 0';
                                        player.chooseTarget(1, lib.filter.notMe);
                                        ('step 1');
                                        if (result.bool) {
                                            player.storage.target = result.targets[0];
                                            player.storage.target.addSkill('悲陈(改)');
                                            player.storage.target.chooseControl(true, [lib.translate['rejianxiong'], lib.translate['fangzhu'], lib.translate['huituo']]);
                                        }
                                        ('step 2');
                                        list = ['rejianxiong', 'fangzhu', 'huituo'];
                                        for (var i = 0; i < list.length; i++) {
                                            if (result.control == lib.translate[list[i]]) {
                                                player.storage.target.addSkill(list[i]);
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        勤恪: {
                            audio: 'qinzheng',
                            group: ['勤恪_1', '勤恪_2'],
                            subSkill: {
                                1: {
                                    audio: 'qinzheng',
                                    forced: true,
                                    trigger: {
                                        player: ['useCard', 'respondCard'],
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                2: {
                                    audio: 'qinzheng',
                                    usable: 1,
                                    trigger: {
                                        source: 'damageEnd',
                                    },
                                    content() {
                                        player.draw(Math.min(player.maxHp, 20));
                                    },
                                },
                            },
                        },
                        dunshion: {
                            audio: 'dunshi',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            usable: 1,
                            init(player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = [['sha', 'shan', 'tao', 'jiu', 'wuxie', 'wuzhong', 'huogong', 'juedou', 'shunshou', 'jiedao'], 0];
                            },
                            hiddenCard(player, name) {
                                if (player.storage.dunshion && player.storage.dunshion[0].includes(name) && !player.getStat('skill').dunshion) return true;
                                return false;
                            },
                            marktext: '席',
                            mark: true,
                            intro: {
                                markcount(storage) {
                                    return storage[1];
                                },
                                content(storage, player) {
                                    if (!storage) return;
                                    var str = '<li>';
                                    if (!storage[0].length) {
                                        str += '已无可用牌';
                                    } else {
                                        str += '剩余可用牌:';
                                        str += get.translation(storage[0]);
                                    }
                                    str += '<br><li><席>标记数量:';
                                    str += storage[1];
                                    return str;
                                },
                            },
                            filter(event, player) {
                                var storage = player.storage.dunshion;
                                if (!storage || !storage[0].length) return false;
                                for (var i of storage[0]) {
                                    var card = { name: i };
                                    if (event.filterCard(card, player, event)) return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    var storage = player.storage.dunshion;
                                    for (var i of storage[0]) list.push(['基本', '', i]);
                                    return ui.create.dialog('遁世', [list, 'vcard'], 'hidden');
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard && evt.filterCard({ name: button.link[2] }, player, evt);
                                },
                                check(button) {
                                    var card = { name: button.link[2] },
                                        player = _status.event.player;
                                    if (_status.event.parent.type != 'phase') return 1;
                                    if (card.name == 'jiu') return 0;
                                    if (card.name == 'sha' && player.hasSkill('jiu')) return 0;
                                    return player.getUseValue(card, null, true);
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'dunshi',
                                        filterCard() {
                                            return false;
                                        },
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        selectCard: -1,
                                        precontent() {
                                            player.addTempSkill('dunshion_damage');
                                            player.storage.dunshion_damage = event.result.card.name;
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    return '选择【' + get.translation(links[0][2]) + '】的目标';
                                },
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag, arg) {
                                    var storage = player.storage.dunshion;
                                    if (!storage || !storage[0].length) return false;
                                    if (player.getStat('skill').dunshion) return false;
                                    switch (tag) {
                                        case 'respondSha':
                                            return (_status.event.type != 'phase' || player == game.me || player.isUnderControl() || player.isOnline()) && storage[0].includes('sha');
                                        case 'respondShan':
                                            return storage[0].includes('shan');
                                        case 'save':
                                            if (arg == player && storage[0].includes('jiu')) return true;
                                            return storage[0].includes('tao');
                                    }
                                },
                                order: 2,
                                result: {
                                    player(player) {
                                        if (_status.event.type == 'dying') {
                                            return get.attitude(player, _status.event.dying);
                                        }
                                        return 1;
                                    },
                                },
                            },
                            initList() {
                                var list,
                                    skills = [];
                                var banned = ['xunyi'];
                                if (get.mode() == 'guozhan') {
                                    list = [];
                                    for (var i in lib.characterPack.mode_guozhan) list.push(i);
                                } else if (_status.connectMode) list = get.charactersOL();
                                else {
                                    list = [];
                                    for (var i in lib.character) {
                                        if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                                        list.push(i);
                                    }
                                }
                                for (var i of list) {
                                    if (i.indexOf('gz_jun') == 0) continue;
                                    for (var j of lib.character[i][3]) {
                                        var skill = lib.skill[j];
                                        if (!skill || skill.zhuSkill || banned.includes(j)) continue;
                                        if (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg)) continue;
                                        var info = get.translation(j);
                                        for (var ix = 0; ix < info.length; ix++) {
                                            if (/仁|义|礼|智|信|忠|勇|静|定|慧/.test(info[ix]) == true) {
                                                skills.add(j);
                                                break;
                                            }
                                        }
                                    }
                                }
                                _status.dunshion_list = skills;
                            },
                            subSkill: {
                                backup: {
                                    audio: 'dunshi',
                                },
                                damage: {
                                    audio: 'dunshi',
                                    trigger: {
                                        global: 'damageBegin2',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.source == _status.currentPhase;
                                    },
                                    logTarget: 'source',
                                    content() {
                                        'step 0';
                                        event.cardname = player.storage.dunshion_damage;
                                        player.removeSkill('dunshion_damage');
                                        event.target = trigger.source;
                                        event.videoId = lib.status.videoId++;
                                        var func = function (card, id, card2, card3) {
                                            var list = ['防止即将对' + card3 + '造成的伤害,并令' + card + '获得一个技能名中包含<仁|义|礼|智|信|忠|勇|静|定|慧>的技能', '获得一枚<席>', '减1点体力上限,摸等同于<席>数的牌'];
                                            var choiceList = ui.create.dialog('遁世:请选择两项');
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
                                            player.send(func, get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        }
                                        event.dialog = func(get.translation(trigger.source), event.videoId, get.translation(event.cardname), get.translation(trigger.player));
                                        if (player != game.me || _status.auto) {
                                            event.dialog.style.display = 'none';
                                        }
                                        var next = player.chooseButton();
                                        next.set('dialog', event.videoId);
                                        next.set('forced', true);
                                        next.set('selectButton', 2);
                                        next.set('ai', function (button) {
                                            var player = _status.event.player;
                                            switch (button.link) {
                                                case 0:
                                                    if (get.attitude(player, _status.currentPhase) > 0) return 3;
                                                    return 0;
                                                case 1:
                                                    return 1;
                                                case 2:
                                                    var num = player.storage.dunshion[1];
                                                    for (var i of ui.selected.buttons) {
                                                        if (i.link == 1) num++;
                                                    }
                                                    if (num > 0 && player.isDamaged()) return 2;
                                                    return 0;
                                            }
                                        });
                                        ('step 1');
                                        if (player.isOnline2()) {
                                            player.send('closeDialog', event.videoId);
                                        }
                                        event.dialog.close();
                                        event.links = result.links.sort();
                                        for (var i of event.links) {
                                            game.log(player, '选择了', '#g【遁世】', '的', '#y选项' + get.cnNumber(i + 1, true));
                                        }
                                        if (event.links.includes(0)) {
                                            trigger.cancel();
                                            if (!_status.dunshion_list) lib.skill.dunshion.initList();
                                            var list = _status.dunshion_list
                                                .filter(function (i) {
                                                    return !target.hasSkill(i, null, null, null, null, null, null, false);
                                                })
                                                .randomGets(7);
                                            if (list.length == 0) event.goto(3);
                                            else {
                                                event.videoId = lib.status.videoId++;
                                                var func = function (skills, id) {
                                                    var dialog = ui.create.dialog('forcebutton');
                                                    dialog.videoId = id;
                                                    dialog.add('令' + get.translation(target) + '获得一个技能');
                                                    for (var i = 0; i < skills.length; i++) {
                                                        dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(skills[i]) + '】</div><div>' + lib.translate[skills[i] + '_info'] + '</div></div>');
                                                    }
                                                    dialog.addText(' <br> ');
                                                };
                                                if (player.isOnline()) player.send(func, list, event.videoId);
                                                else if (player == game.me) func(list, event.videoId);
                                                player.chooseControl(list).set('ai', function () {
                                                    var controls = _status.event.controls;
                                                    if (controls.includes('cslilu')) return 'cslilu';
                                                    return controls[0];
                                                });
                                            }
                                        } else event.goto(3);
                                        ('step 2');
                                        game.broadcastAll('closeDialog', event.videoId);
                                        target.addSkillLog(result.control);
                                        ('step 3');
                                        var storage = player.storage.dunshion;
                                        if (event.links.includes(1)) {
                                            storage[1]++;
                                            player.markSkill('dunshion');
                                        }
                                        if (event.links.includes(2)) {
                                            player.loseMaxHp();
                                            if (storage[1] > 0) player.draw(storage[1]);
                                        }
                                    },
                                },
                            },
                        },
                        fanghunon: {
                            shaRelated: true,
                            audio: 'fanghun',
                            preHidden: true,
                            forced: true,
                            group: 'fanghun_longdan',
                            audioname: ['sp_lvmeng', 're_sunben', 're_sunce'],
                            trigger: {
                                player: 'useCardToPlayered',
                                target: 'useCardToTargeted',
                            },
                            filter(event, player) {
                                if (!(event.card.name == 'juedou' || event.card.name == 'sha')) return false;
                                return player == event.target || event.parent.triggeredTargets3.length == 1;
                            },
                            forced: true,
                            content() {
                                player.draw();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target) {
                                        if (card.name == 'sha') return [1, 0.6];
                                    },
                                    player(card, player, target) {
                                        if (card.name == 'sha') return [1, 1];
                                    },
                                },
                            },
                        },
                        fuhanon: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            audio: 'fuhan',
                            content() {
                                'step 0';
                                event.trigger('fuhanon');
                                player.recover();
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
                                list.remove('zhaoxiang');
                                list.remove('tw_zhaoxiang');
                                list.remove('yunzhaoyun');
                                list.remove('yunjiangwei');
                                list.remove('yunguanyu');
                                var num = Math.min(5, player.hp);
                                list = list.randomGets(8);
                                var skills = [];
                                for (var i of list) {
                                    skills.addArray(
                                        (lib.character[i][3] || []).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.zhuSkill && !info.juexingji && !info.hiddenSkill && !info.charlotte && !info.dutySkill;
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
                                        skills: skills.randomGets(num),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得至多' + num + '个技能', [list, 'character'], 'hidden');
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
                                                if (rSkill.length >= num) return;
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
                                    for (var i of map.skills)
                                        player.addTempSkill(i, {
                                            player: 'fuhanon',
                                        });
                                }
                            },
                        },
                        queshion: {
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            audio: 'ext:风起雨落/audio:2',
                            group: 'queshion1',
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !player.isDisabled(1);
                            },
                            content() {
                                if (!lib.inpile.includes('meiyingqiang')) {
                                    lib.inpile.push('meiyingqiang');
                                    player.equip(game.createCard('meiyingqiang', 'diamond', 12));
                                } else {
                                    var card = get.cardPile(function (card) {
                                        return card.name == 'meiyingqiang' && card != player.getEquip(1);
                                    }, 'field');
                                    if (card) player.equip(card);
                                }
                            },
                        },
                        fanghun_longdan: {
                            mod: {
                                aiValue(player, card, num) {
                                    if (card.name != 'sha' && card.name != 'shan') return;
                                    var geti = function () {
                                        var cards = player.getCards('hs', function (card) {
                                            return card.name == 'sha' || card.name == 'shan';
                                        });
                                        if (cards.includes(card)) {
                                            return cards.indexOf(card);
                                        }
                                        return cards.length;
                                    };
                                    return Math.max(num, [7, 5, 5, 3][Math.min(geti(), 3)]);
                                },
                                aiUseful() {
                                    return lib.skill.ollongdan.mod.aiValue.apply(this, arguments);
                                },
                            },
                            audio: 'fanghun',
                            hiddenCard(player, name) {
                                if (name == 'tao') return player.countCards('hs', 'jiu') > 0;
                                if (name == 'jiu') return player.countCards('hs', 'juedou') > 0;
                                return false;
                            },
                            enable: ['chooseToUse', 'chooseToRespond'],
                            position: 'hs',
                            prompt: '将杀当做闪,或将闪当做杀,或将桃当做酒,或将酒当做决斗使用或打出',
                            viewAs(cards, player) {
                                var name = false;
                                switch (cards[0]?.name) {
                                    case 'sha':
                                        name = 'shan';
                                        break;
                                    case 'shan':
                                        name = 'sha';
                                        break;
                                    case 'tao':
                                        name = 'jiu';
                                        break;
                                    case 'jiu':
                                        name = 'juedou';
                                        break;
                                }
                                if (name) return { name: name };
                                return null;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (_status.event.type == 'phase') {
                                    var max = 0;
                                    var name2;
                                    var list = ['sha', 'tao', 'jiu'];
                                    var map = { sha: 'shan', tao: 'jiu', jiu: 'juedou' };
                                    for (var i = 0; i < list.length; i++) {
                                        var name = list[i];
                                        if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                                if (name == 'jiu' && filter({ name: 'juedou', cards: [card] }, player, event)) return true;
                                return false;
                            },
                            filter(event, player) {
                                var filter = event.filterCard;
                                if (filter({ name: 'sha' }, player, event) && player.countCards('hs', 'shan')) return true;
                                if (filter({ name: 'shan' }, player, event) && player.countCards('hs', 'sha')) return true;
                                if (filter({ name: 'jiu' }, player, event) && player.countCards('hs', 'tao')) return true;
                                if (filter({ name: 'juedou' }, player, event) && player.countCards('hs', 'jiu')) return true;
                                return false;
                            },
                            ai: {
                                respondSha: true,
                                respondShan: true,
                                skillTagFilter(player, tag) {
                                    var name;
                                    switch (tag) {
                                        case 'respondSha':
                                            name = 'shan';
                                            break;
                                        case 'respondShan':
                                            name = 'sha';
                                            break;
                                    }
                                    if (!player.countCards('hs', name)) return false;
                                },
                                order(item, player) {
                                    if (player && _status.event.type == 'phase') {
                                        var max = 0;
                                        var list = ['sha', 'tao', 'jiu'];
                                        var map = { sha: 'shan', tao: 'jiu', jiu: 'juedou' };
                                        for (var i = 0; i < list.length; i++) {
                                            var name = list[i];
                                            if (player.countCards('hs', map[name]) > (name == 'jiu' ? 1 : 0) && player.getUseValue({ name: name }) > 0) {
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
                        queshion1: {
                            audio: 'queshion',
                            enable: 'phaseUse',
                            usable: 1,
                            filterCard(card) {
                                return card.name != 'meiyingqiang' && get.color(card) == 'red';
                            },
                            position: 'he',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            onChooseToUse(event) {
                                if (game.online) return;
                                event.set(
                                    'queshion1',
                                    (function () {
                                        for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                            if (ui.discardPile.childNodes[i].name == 'meiyingqiang') return true;
                                        }
                                        return game.hasPlayer(function (current) {
                                            return current.countCards('ej', 'meiyingqiang');
                                        });
                                    })()
                                );
                            },
                            filter(event, player) {
                                return event.queshion1 == true;
                            },
                            content() {
                                var list = [];
                                for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                    if (ui.discardPile.childNodes[i].name == 'meiyingqiang') {
                                        list.add(ui.discardPile.childNodes[i]);
                                    }
                                }
                                game.countPlayer(function (current) {
                                    var ej = current.getCards('ej', 'meiyingqiang');
                                    if (ej.length) {
                                        list.addArray(ej);
                                    }
                                });
                                if (list.length) {
                                    var card = list.randomGet();
                                    var owner = get.owner(card);
                                    if (owner) {
                                        player.gain(card, owner, 'give');
                                        player.line(owner, 'green');
                                    } else {
                                        player.gain(card, 'log');
                                        player.$draw(card);
                                    }
                                }
                            },
                            ai: {
                                order: 8.5,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        zunweion: {
                            audio: 'zunwei',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    game.countPlayer(function (current) {
                                        return true;
                                    }) > 1
                                );
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he');
                            },
                            multitarget: true,
                            content() {
                                'step 0';
                                event.controls = ['体力', '手牌', '装备区牌'];
                                player
                                    .chooseControl(event.controls)
                                    .set('prompt', '请选择一项,令郭照调整该项至与其相同')
                                    .set('ai', function () {
                                        var att = get.attitude(player, target);
                                        if (att > 0) {
                                            var num1 = (target.countCards('e') - player.countCards('e')) * 1.5;
                                            var num2 = target.countCards('h') - player.countCards('h');
                                            var num3 = (target.hp - player.hp) * 2;
                                            if (Math.max(num1, num2, num3) == num1) return '装备区牌';
                                            if (Math.max(num1, num2, num3) == num2) return '手牌';
                                            if (Math.max(num1, num2, num3) == num3) return '体力';
                                        } else {
                                            var num1 = (target.countCards('e') - player.countCards('e')) * 1.5;
                                            var num2 = target.countCards('h') - player.countCards('h');
                                            var num3 = (target.hp - player.hp) * 2;
                                            if (Math.min(num1, num2, num3) == num1) return '装备区牌';
                                            if (Math.min(num1, num2, num3) == num2) return '手牌';
                                            if (Math.min(num1, num2, num3) == num3) return '体力';
                                        }
                                    });
                                ('step 1');
                                if (result.control == '体力') {
                                    event.controls.remove('体力');
                                    var num1 = player.hp;
                                    var num2 = target.hp;
                                    if (num1 > num2) player.loseHp(num1 - num2);
                                    if (num1 < num2) player.recover(num2 - num1);
                                    event.goto(4);
                                }
                                if (result.control == '手牌') {
                                    event.controls.remove('手牌');
                                    var num1 = player.countCards('h');
                                    var num2 = target.countCards('h');
                                    if (num1 > num2) player.chooseToDiscard('h', num1 - num2, true);
                                    if (num1 < num2) player.draw(num2 - num1);
                                    event.goto(4);
                                }
                                if (result.control == '装备区牌') {
                                    event.controls.remove('装备区牌');
                                    var num1 = player.countCards('e');
                                    var num2 = target.countCards('e');
                                    if (num1 > num2) {
                                        player.chooseToDiscard('e', num1 - num2, true);
                                        event.goto(4);
                                    }
                                    if (num1 < num2) event.goto(2);
                                    if (num1 == num2) event.goto(4);
                                }
                                ('step 2');
                                var type = 'equip' + num;
                                if (!player.isEmpty(type)) return;
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card, false) == type && player.canUse(card, player);
                                });
                                if (card) player.chooseUseTarget(card, true).nopopup = true;
                                ('step 3');
                                game.updateRoundNumber();
                                event.num++;
                                if (event.num <= 5 && target.isAlive() && player.countCards('e') < target.countCards('e')) event.goto(2);
                                ('step 4');
                                event.controls.push('cancel2');
                                player
                                    .chooseControl(event.controls)
                                    .set('prompt', '请选择一项,令其调整该项至与郭照相同')
                                    .set('ai', function () {
                                        var att = get.attitude(player, target);
                                        if (att > 0) {
                                            var num1 = (target.countCards('e') - player.countCards('e')) * 1.5;
                                            var num2 = target.countCards('h') - player.countCards('h');
                                            var num3 = (target.hp - player.hp) * 2;
                                            if (Math.max(num1, num2, num3) == num1 && event.controls.includes('装备区牌')) return '装备区牌';
                                            if (Math.max(num1, num2, num3) == num2 && event.controls.includes('手牌')) return '手牌';
                                            if (Math.max(num1, num2, num3) == num3 && event.controls.includes('体力')) return '体力';
                                        } else {
                                            var num1 = (target.countCards('e') - player.countCards('e')) * 1.5;
                                            var num2 = target.countCards('h') - player.countCards('h');
                                            var num3 = (target.hp - player.hp) * 2;
                                            if (Math.min(num1, num2, num3) == num1 && event.controls.includes('装备区牌')) return '装备区牌';
                                            if (Math.min(num1, num2, num3) == num2 && event.controls.includes('手牌')) return '手牌';
                                            if (Math.min(num1, num2, num3) == num3 && event.controls.includes('体力')) return '体力';
                                            return Math.random();
                                        }
                                    });
                                ('step 5');
                                if (result.control == '体力') {
                                    var num1 = player.hp;
                                    var num2 = target.hp;
                                    if (num1 < num2) target.loseHp(num2 - num1);
                                    if (num1 > num2) target.recover(num1 - num2);
                                    event.finish();
                                }
                                if (result.control == '手牌') {
                                    var num1 = player.countCards('h');
                                    var num2 = target.countCards('h');
                                    if (num1 < num2) target.chooseToDiscard('h', num2 - num1, true);
                                    if (num1 > num2) target.draw(num1 - num2);
                                    event.finish();
                                }
                                if (result.control == '装备区牌') {
                                    var num1 = player.countCards('e');
                                    var num2 = target.countCards('e');
                                    if (num1 < num2) {
                                        target.chooseToDiscard('e', num2 - num1, true);
                                    }
                                    if (num1 > num2) event.goto(6);
                                    if (num1 == num2) event.finish();
                                }
                                ('step 6');
                                var type = 'equip' + num;
                                if (!target.isEmpty(type)) return;
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card, false) == type && target.canUse(card, target);
                                });
                                if (card) target.chooseUseTarget(card, true).nopopup = true;
                                ('step 7');
                                game.updateRoundNumber();
                                event.num++;
                                if (event.num <= 5 && player.isAlive() && target.countCards('e') < player.countCards('e')) event.goto(6);
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player(player, target) {
                                        if (player.isMaxHp() && player.isMaxHandcard() && player.isMaxEquip()) return -1;
                                        else return 1;
                                    },
                                    target(player, target) {
                                        var num = 0;
                                        var bool1 = target.hp > player.hp;
                                        var bool2 = target.countCards('h') > player.countCards('h');
                                        var bool3 = target.countCards('e') > player.countCards('e');
                                        if (bool1) num++;
                                        if (bool2) num++;
                                        if (bool3) num++;
                                        if (num > 1) return -num;
                                        else return num;
                                    },
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        pianchongon: {
                            audio: 'pianchong',
                            group: 'pianchongon2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
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
                                player
                                    .chooseControl('red', 'black')
                                    .set('prompt', '请声明一种颜色')
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
                                player.storage.dshj_pianchong_Buff = result.control;
                                player.addTempSkill('pianchongon1', { player: 'phaseJieshuBegin' });
                                player.popup(result.control, result.control == 'red' ? 'fire' : 'thunder');
                                game.log(player, '声明了', '#y' + get.translation(result.control));
                            },
                            ai: {
                                threaten: 4.8,
                            },
                            subSkill: {
                                Buff: {
                                    audio: 'pianchong',
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                        for (var i of evt.cards2) {
                                            if (get.color(i, player) == player.storage.dshj_pianchong_Buff) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        var num = trigger.getl(player).cards2.filter(function (card) {
                                            return get.color(card, player) == player.storage.dshj_pianchong_Buff;
                                        }).length;
                                        var cards = [];
                                        while (num-- > 0) {
                                            var card = get.cardPile(function (card) {
                                                return !cards.includes(card) && get.color(card, false) != player.storage.dshj_pianchong_Buff;
                                            });
                                            if (card) cards.push(card);
                                            else break;
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    },
                                    mark: true,
                                    intro: {
                                        content: '当你失去一张$牌后,你从牌堆/弃牌堆中获得另一种颜色的1张牌',
                                    },
                                },
                            },
                        },
                        pianchongon1: {
                            audio: 'pianchong',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            charlotte: true,
                            filter(event, player) {
                                var evt = event.getl(player);
                                if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                for (var i of evt.cards2) {
                                    if (get.color(i, player) == player.storage.dshj_pianchong_Buff) return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                var num = trigger.getl(player).cards2.filter(function (card) {
                                    return get.color(card, player) == player.storage.dshj_pianchong_Buff;
                                }).length;
                                var cards = [];
                                while (num-- > 0) {
                                    var card = get.cardPile(function (card) {
                                        return !cards.includes(card) && get.color(card, false) != player.storage.dshj_pianchong_Buff;
                                    });
                                    if (card) cards.push(card);
                                    else break;
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                            mark: true,
                            intro: {
                                content: '当你失去一张$牌后,你从牌堆/弃牌堆中获得另一种颜色的1张牌',
                            },
                        },
                        lijion: {
                            enable: 'phaseUse',
                            audio: 'liji',
                            filter(event, player) {
                                return (player.getStat().skill.yun_jjxgliji || 0) < (event.yun_jjxgliji_num || 0);
                            },
                            check(card) {
                                return 10 - get.value(card);
                            },
                            onChooseToUse(event) {
                                if (game.online) return;
                                var num = 0;
                                var evt2 = event.parent;
                                if (!evt2.yun_jjxgliji_all) evt2.yun_jjxgliji_all = game.players.length > 4 ? 4 : 4;
                                game.getGlobalHistory('cardMove', function (evt) {
                                    if (evt.name == 'cardsDiscard' || (evt.name == 'lose' && evt.position == ui.discardPile)) num += evt.cards.length;
                                });
                                event.set('yun_jjxgliji_num', Math.floor(num / evt2.yun_jjxgliji_all));
                            },
                            filterCard: true,
                            position: 'he',
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
                        fenyinon: {
                            audio: 'refenyin',
                            group: 'fenyinon_clear',
                            mark: true,
                            intro: {
                                content(storage, player) {
                                    var str = '已被记录过的花色:';
                                    for (var i = 0; i < storage.length; i++) {
                                        str += ' ';
                                        str += get.translation(storage[i]);
                                    }
                                    return str;
                                },
                            },
                            init(player) {
                                player.storage.fenyinon = [];
                            },
                            trigger: {
                                global: ['loseAfter', 'cardsDiscardAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'lose' && event.position != ui.discardPile) return false;
                                return true;
                            },
                            content() {
                                // var zhi = 0;
                                // for (var i = 0; i < trigger.cards.length; i++) {
                                //     for (var j = 0; j < player.storage.fenyinon.length; i++)if (trigger.cards[i].suit == player.storage.fenyinon[j].suit) zhi = zhi + 1;
                                // }
                                // if (zhi > 0) {
                                //     var list = [];
                                //     for (var i = 0; i < trigger.cards.length; i++) {
                                //         if (!player.storage.fenyinon.includes(i.suit)) list.push(i.suit);
                                //     }
                                //     player.storage.fenyinon.addArray(list);
                                //     player.draw();
                                //  
                                // }
                                // else {
                                //  
                                // }
                                for (var i of trigger.cards) {
                                    var cr = i.suit;
                                    if (!player.storage.fenyinon.includes(cr)) {
                                        player.draw();
                                        player.storage.fenyinon.push(cr);
                                    }
                                }
                            },
                            subSkill: {
                                clear: {
                                    audio: 'refenyin',
                                    trigger: {
                                        global: 'roundStart',
                                        player: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return player.storage.fenyinon.length;
                                    },
                                    content() {
                                        player.storage.fenyinon = [];
                                        player.update();
                                    },
                                },
                            },
                        },
                        tianzuoon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('qizhengxiangsheng');
                            },
                            content() {
                                game.addGlobalSkill('old_tianzuo_global');
                                for (var i = 2; i < 10; i++) {
                                    var card = game.createCard2('qizhengxiangsheng', i % 2 ? 'club' : 'spade', i);
                                    ui.cardPile.insertBefore(card, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                }
                                game.broadcastAll(function () {
                                    lib.inpile.add('qizhengxiangsheng');
                                });
                                game.updateRoundNumber();
                            },
                            group: ['tianzuoon_rewrite', 'tianzuoon1'],
                            subSkill: {
                                global: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
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
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.card.name == 'qizhengxiangsheng';
                                    },
                                    logTarget: 'target',
                                    prompt2: '观看其手牌并修改<奇正相生>标记',
                                    content() {
                                        'step 0';
                                        var target = trigger.target;
                                        event.target = target;
                                        if (player != target && target.countCards('h')) player.viewHandcards(target);
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
                                            )
                                            .set('ai', () => _status.event.choice);
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
                        lingceon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                global: 'useCard',
                            },
                            forced: true,
                            preHidden: true,
                            filter(event, player) {
                                return get.type(event.card) == 'trick' || get.type(event.card) == 'delay';
                            },
                            content() {
                                player.draw();
                            },
                            ai: {
                                threaten: 1.4,
                                noautowuxie: true,
                            },
                        },
                        pingjianon: {
                            audio: 'pingjian',
                            trigger: {
                                player: ['damageEnd', 'phaseJieshuBegin'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (!player.storage.pingjianon) player.storage.pingjianon = [];
                                player.draw();
                                ('step 1');
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                var list = [];
                                var skills = [];
                                _status.characterlist.randomSort();
                                var name2 = event.triggername;
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.includes('xushao') || name == 'xushaoon') continue;
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (player.hasSkill(skills2[j])) continue;
                                        if (skills.includes(skills2[j])) continue;
                                        var list2 = [skills2[j]];
                                        game.expandSkills(list2);
                                        for (var k = 0; k < list2.length; k++) {
                                            var info = lib.skill[list2[k]];
                                            if (!info || !info.trigger || !info.trigger.player || info.silent || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
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
                                                skills.add(skills2[j]);
                                                break;
                                            }
                                        }
                                        if (skills.includes(skills2[j])) {
                                            break;
                                        }
                                    }
                                    if (skills.length > 2) break;
                                }
                                player
                                    .chooseControl(skills)
                                    .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                    .set('ai', function () {
                                        return 0;
                                    });
                                ('step 2');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                    return;
                                }
                                player.storage.pingjianon.add(result.control);
                                var removeT = 'damageAfter';
                                if (event.triggername == 'phaseJieshuBegin') {
                                    removeT = 'phaseJieshu';
                                }
                                player.addTempSkill(result.control, removeT);
                            },
                            group: 'pingjianon_use',
                            phaseUse_special: ['xinfu_lingren'],
                        },
                        pingjianon_use: {
                            audio: 'pingjian',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                if (!player.storage.pingjianon) player.storage.pingjianon = [];
                                player.draw();
                                ('step 1');
                                var list = [];
                                var skills = [];
                                if (!_status.characterlist) {
                                    lib.skill.pingjian.initList();
                                }
                                _status.characterlist.randomSort();
                                for (var i = 0; i < _status.characterlist.length; i++) {
                                    var name = _status.characterlist[i];
                                    if (name.includes('zuoci') || name.includes('xushao') || name == 'jlsgsoul_sp_xushao') continue;
                                    var skills2 = lib.character[name][3];
                                    for (var j = 0; j < skills2.length; j++) {
                                        if (skills.includes(skills2[j])) continue;
                                        if (player.hasSkill(skills2[j])) continue;
                                        if (lib.skill.pingjianon.phaseUse_special.includes(skills2[j])) {
                                            list.add(name);
                                            skills.add(skills2[j]);
                                            continue;
                                        }
                                        var list2 = [skills2[j]];
                                        game.expandSkills(list2);
                                        for (var k = 0; k < list2.length; k++) {
                                            var info = lib.skill[list2[k]];
                                            if (!info || !info.enable || info.viewAs || info.limited || info.juexingji || info.zhuanhuanji || info.hiddenSkill || info.dutySkill) continue;
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
                                                skills.add(skills2[j]);
                                                break;
                                            }
                                        }
                                        if (skills.includes(skills2[j])) break;
                                    }
                                    if (skills.length > 2) break;
                                }
                                player
                                    .chooseControl(skills)
                                    .set('dialog', ['请选择要发动的技能', [list, 'character']])
                                    .set('ai', function () {
                                        return 0;
                                    });
                                ('step 2');
                                if (result.control == '摸一张牌') {
                                    player.draw();
                                    return;
                                }
                                player.storage.pingjianon.add(result.control);
                                player.addTempSkill(result.control, 'phaseUseEnd');
                                player.addTempSkill('pingjianon_temp', 'phaseUseEnd');
                                player.storage.pingjianon_temp = result.control;
                                //event.getParent(2).goto(0);
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        shirenon: {
                            audio: 'pingjian',
                            forced: true,
                            trigger: {
                                player: 'phaseEnd',
                            },
                            content() {
                                'step 0';
                                player.recover();
                                ('step 1');
                                if (!player.storage.pingjianon || !player.storage.pingjianon.length) {
                                    event.finish();
                                    return;
                                }
                                var characters = [];
                                var leftSkills = player.storage.pingjianon.randomGets(16);
                                var skills = [];
                                for (var c in lib.character) {
                                    var info = lib.character[c];
                                    if (info[3].some((s) => leftSkills.includes(s))) {
                                        characters.push(c);
                                        skills.push(...leftSkills.filter((s) => info[3].includes(s)));
                                        leftSkills.remove(info[3]);
                                        if (!leftSkills.length) break;
                                    }
                                }
                                var list = characters;
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: skills.randomGets(1),
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (list, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog('请选择获得的技能', [list, 'character'], 'hidden');
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
                                ('step 2');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    for (var s of map.skills) {
                                        player.addSkillLog(s);
                                        player.storage.pingjianon.remove(s);
                                    }
                                }
                            },
                            ai: {
                                halfneg: true,
                                combo: 'pingjianon',
                            },
                        },
                        pingjianon_temp: {
                            trigger: {
                                player: ['useSkillBegin', 'useCard1'],
                            },
                            silent: true,
                            firstDo: true,
                            filter(event, player) {
                                var info = lib.skill[event.skill];
                                if (!info) return false;
                                if (event.skill == player.storage.pingjianon_temp) return true;
                                if (info.sourceSkill == player.storage.pingjianon_temp || info.group == player.storage.pingjianon_temp) return true;
                                if (Array.isArray(info.group) && info.group.includes(player.storage.pingjianon_temp)) return true;
                                return false;
                            },
                            content() {
                                player.removeSkill(player.storage.pingjianon_temp);
                                player.removeSkill('pingjianon_temp');
                            },
                            forced: true,
                            popup: false,
                            _priority: 1,
                        },
                        huishion: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.cards = [];
                                event.suits = [];
                                ('step 1');
                                player
                                    .judge(function (result) {
                                        var evt = _status.event.getParent('huishion');
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
                            },
                            group: 'huishion_phase',
                            subSkill: {
                                phase: {
                                    audio: 'huishion',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    content() {
                                        'step 0';
                                        event.cards = [];
                                        event.suits = [];
                                        ('step 1');
                                        player
                                            .judge(function (result) {
                                                var evt = _status.event.getParent('huishion_phase');
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
                                    },
                                    ai: {
                                        order: 1,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                        },
                        sghuishion: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            limited: true,
                            filterTarget: true,
                            content() {
                                'step 0';
                                player.gainMaxHp(2);
                                ('step 1');
                                player.awakenSkill('sghuishion');
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    if (target.awakenedSkills.includes(skill)) return false;
                                    var info = lib.skill[skill];
                                    return info && info.juexingji;
                                });
                                if (list.length && player.maxHp >= game.players.length) {
                                    for (var skill of list) {
                                        var next = game.createEvent('sghuishion_juexing');
                                        next.player = target;
                                        next.setContent(lib.skill[skill].content);
                                    }
                                }
                                if (!list.length && player.maxHp >= 3) target.draw(4);
                            },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (player.maxHp < 5) return 0;
                                        var list = target.getSkills(null, false, false).filter(function (skill) {
                                            var info = lib.skill[skill];
                                            return info && info.juexingji;
                                        });
                                        if (list.length && player.maxHp >= game.players.length) return 10;
                                        if (target.hasJudge('lebu') || target.hasSkillTag('nogain')) return 0;
                                        if (!list.length && player.maxHp >= 3) return 4;
                                        return 0;
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
                        tianyion: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dyingBegin'],
                            },
                            forced: true,
                            juexingji: true,
                            filter(event, player) {
                                return !game.hasPlayer(function (current) {
                                    return current.getAllHistory('damage').length == 0;
                                });
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('tianyion');
                                player.gainMaxHp(2);
                                ('step 1');
                                var num = player.maxHp - player.hp;
                                player.recover(num);
                                ('step 2');
                                player.chooseTarget(true, '令一名角色获得技能【佐幸】').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target, 'green');
                                    target.addSkill('zuoxingon');
                                }
                            },
                        },
                        zuoxingon: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!lib.inpile.includes(name)) return false;
                                var type = get.type2(name);
                                return type == 'basic' || type == 'trick';
                            },
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
                                    var list1 = [],
                                        list1Tag;
                                    var list2 = [],
                                        list2Tag;
                                    for (var i of lib.inpile) {
                                        if (!lib.translate[i + '_info']) continue;
                                        var type = get.type(i);
                                        if (type == 'basic') {
                                            list1.push([type, '', i]);
                                            if (event.filterCard && event.filterCard({ name: i }, player, event)) list1Tag = true;
                                            if (i == 'sha') {
                                                for (var j of lib.inpile_nature) list1.push([type, '', i, j]);
                                            }
                                        }
                                        if (type == 'trick') {
                                            list2.push([type, '', i]);
                                            if (event.filterCard && event.filterCard({ name: i }, player, event)) list2Tag = true;
                                        }
                                    }
                                    var dialog = ui.create.dialog();
                                    if (list1Tag) {
                                        dialog.add('基本牌');
                                        dialog.add([list1, 'vcard']);
                                    }
                                    if (list2Tag) {
                                        dialog.add('锦囊牌');
                                        dialog.add([list2, 'vcard']);
                                    }
                                    return dialog;
                                },
                                filter(button, player) {
                                    var evt = _status.event.parent;
                                    return evt.filterCard && evt.filterCard({ name: button.link[2], nature: button.link[3] }, player, evt);
                                },
                                check(button, player) {
                                    if (_status.event.parent.type != 'phase') return 1;
                                    var player = _status.event.player;
                                    if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) return 0;
                                    return player.getUseValue({
                                        name: button.link[2],
                                        nature: button.link[3],
                                    });
                                },
                                backup(links, player) {
                                    var tianqiOnUse = function (result, player) {
                                        game.log(player, '声明了' + get.translation(links[0][0]) + '牌');
                                        var cards = get.cards();
                                        player.showCards(cards);
                                        result.cards = cards;
                                        if (get.type(cards[0], 'trick') != links[0][0]) {
                                            player.loseMaxHp();
                                        }
                                        delete player.storage.jlsg_tianji_top;
                                    };
                                    return {
                                        filterCard() {
                                            return false;
                                        },
                                        selectCard: -1,
                                        popname: true,
                                        viewAs: {
                                            name: links[0][2],
                                            nature: links[0][3],
                                        },
                                        onuse: tianqiOnUse,
                                        onrespond: tianqiOnUse,
                                    };
                                },
                                prompt(links, player) {
                                    return '亮出牌堆顶的一张牌,并将此牌当' + get.translation(links[0][2]) + '使用或打出.若亮出的牌不为' + get.translation(links[0][0]) + '牌,你减1点体力上限.';
                                },
                            },
                            group: ['zuoxingon_phase'],
                            ai: {
                                order: 10,
                                fireAttack: true,
                                respondShan: true,
                                respondSha: true,
                                threaten: 4,
                            },
                        },
                        zuoxingon_phase: {},
                        tianzuoon1: {
                            audio: 'tianzuoon',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return (
                                    player.countCards('he') > 0 &&
                                    game.hasPlayer(function (current) {
                                        return current.countCards('he') > 0 && player.canCompare(current);
                                    })
                                );
                            },
                            filterTarget(card, target, player) {
                                return player.canCompare(target);
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                var t = target;
                                if (result.bool) t = player;
                                t.chooseUseTarget('qizhengxiangsheng', 'nopopup', true);
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: 1,
                                    target(player, target) {
                                        var num = target.countCards('h');
                                        if (num == 1) return -1;
                                        if (num == 2) return -0.7;
                                        return -0.5;
                                    },
                                },
                            },
                        },
                        xingshangon: {
                            audio: 'rexingshang',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0 && event.player != player;
                            },
                            content() {
                                'step 0';
                                event.togain = trigger.player.getCards('hej');
                                if (event.togain) player.gain(event.togain, trigger.player, 'giveAuto');
                                player.recover();
                            },
                        },
                        fangzhuon: {
                            audio: 'refangzhu',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                player.chooseTarget(get.prompt2('refangzhu'), function (card, player, target) {
                                    return target;
                                }).ai = function (target) {
                                    if (target.hasSkillTag('noturn')) return 0;
                                    var player = _status.event.player;
                                    if (get.attitude(_status.event.player, target) > 0 && target.classList.contains('turnedover')) return 10 * player.getDamagedHp();
                                    if (target.classList.contains('turnedover')) return -1;
                                    if (_status.currentPhase == target) return -get.attitude(_status.event.player, target);
                                    if (_status.currentPhase != target) return 2 * -get.attitude(_status.event.player, target);
                                };
                                ('step 2');
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
                                ('step 3');
                                if (result.bool) {
                                    event.target.loseHp();
                                } else {
                                    if (player.isDamaged()) event.target.draw(player.getDamagedHp());
                                    event.target.turnOver();
                                }
                                ('step 4');
                                if (result.index == 0) {
                                    event.target.draw(event.num);
                                }
                                if (result.index == 1) {
                                    event.target.chooseToDiscard(event.num, 'he', true);
                                }
                                ('step5');
                                if (event.count > 0) event.goto(1);
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
                        songweion: {
                            trigger: {
                                player: ['turnOverBefore', 'phaseDiscardBefore'],
                            },
                            _priority: 20,
                            forced: true,
                            filter(event, player, name) {
                                return name == 'turnOverBefore' ? !player.isTurnedOver() : true;
                            },
                            content() {
                                trigger.cancel();
                                player.draw(1);
                            },
                            _priority: 2000,
                        },
                        tonglion: {
                            audio: 'tongli',
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            usable: 2,
                            filter(event, player) {
                                return (get.type(event.card) == 'trick' || get.type(event.card) == 'basic');
                            },
                            prompt() {
                                var player = _status.event.player,
                                    card = _status.event.getParent('useCard').card || '';
                                var num = player
                                    .getCards('h')
                                    .map((card) => card.suit)
                                    .unique().length;
                                return '是否令' + get.translation(card) + '额外执行' + num + '次:';
                            },
                            content() {
                                var num = player
                                    .getCards('h')
                                    .map((card) => card.suit)
                                    .unique().length; //QQQ
                                trigger.parent.set('tonglionNum', num);
                                if (get.type(trigger.card) != 'equip' && get.type(trigger.card) != 'delay') player.addSkill('tonglion2');
                            },
                            check(event, player) {
                                return event.card.name != 'tiesuo';
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    var list = [],
                                        cards = player.getCards('h', function (cardx) {
                                            return cardx != card;
                                        });
                                    for (var i = 0; i < cards.length; i++) {
                                        if (!list.includes(cards[i].suit)) list.push(cards[i].suit);
                                    }
                                    if (player.getHistory('useCard').length + 1 == list.length) return num + 10;
                                },
                            },
                        },
                        tonglion2: {
                            trigger: {
                                player: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.tonglionNum;
                            },
                            forced: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                event.num = trigger.tonglionNum;
                                event.card = { name: trigger.card.name, nature: get.nature(trigger.card) };
                                for (var i of trigger.targets) {
                                    if (!lib.filter.targetEnabled(event.card, player, i) || !i.isIn()) event.finish();
                                }
                                ('step 1');
                                var next = player.useCard(event.card, trigger.targets, false);
                                next.set('addCount', false);
                                next.set('tonglion2', true);
                                player.actionHistory[player.actionHistory.length - 1].useCard.pop();
                                ('step 2');
                                event.num--;
                                var bool1 = true;
                                for (var i of trigger.targets) {
                                    if (!lib.filter.targetEnabled(event.card, player, i) || !i.isIn()) bool1 = false;
                                }
                                if (event.num > 0 && player.isIn() && bool1) event.goto(1);
                                ('step 3');
                                player.removeSkill('tonglion2');
                            },
                        },
                        shezangon: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'shezang',
                            usable: 1,
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            forced: true,
                            content() {
                                var suits = lib.suit.slice(0);
                                var cards = [];
                                for (var i of suits) {
                                    var card = get.cardPile2(function (card) {
                                        return card.suit == i;
                                    });
                                    if (card) cards.push(card);
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        beigeon: {
                            audio: 'beige',
                            trigger: {
                                global: 'damageEnd',
                            },
                            forced: true,
                            filter: (event, player) => event.source, //QQQ
                            checkx(event, player) {
                                var att1 = get.attitude(player, event.player);
                                var att2 = get.attitude(player, event.source);
                                return att1 > 0 && att2 <= 0;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                if (player.countCards('h') == 0) {
                                    player.draw(2);
                                }
                                var next = player.chooseToDiscard('hes', get.prompt2('beige', trigger.player));
                                var check = lib.skill.beige.checkx(trigger, player);
                                next.set('ai', function (card) {
                                    if (_status.event.goon) return 14 - get.value(card);
                                    return 0;
                                });
                                next.set('goon', check);
                                ('step 2');
                                if (result.bool) {
                                    event.count--;
                                    trigger.player.judge();
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                switch (result.suit) {
                                    case 'heart':
                                    case 'diamond':
                                        player.line(trigger.player);
                                        trigger.player.recover();
                                        trigger.player.draw(2);
                                        break;
                                    case 'club':
                                        player.line(trigger.source);
                                        trigger.source.chooseToDiscard('he', 3, true);
                                        break;
                                    case 'spade':
                                        player.line(trigger.source);
                                        trigger.source.turnOver();
                                        break;
                                }
                                ('step 4');
                                if (event.count > 0) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        chenqingon: {
                            audio: 'chenqing',
                            trigger: {
                                global: 'dying',
                            },
                            filter(event, player) {
                                return event.player.hp <= 0;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt2('chenqing')).set('ai', function (target) {
                                    var player = _status.event.player;
                                    var trigger = _status.event.getTrigger();
                                    if (get.attitude(player, trigger.player) > 0) {
                                        var att1 = get.attitude(target, player);
                                        var att2 = get.attitude(target, trigger.player);
                                        var att3 = get.attitude(player, target);
                                        if (att3 < 0) return 0;
                                        return att1 / 2 + att2 + att3;
                                    } else {
                                        return 0;
                                        // return get.attitude(player,target);
                                    }
                                });
                                ('step 1');
                                if (result.bool) {
                                    event.target = result.targets[0];
                                    event.target.draw(5);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                var target = event.target;
                                var tosave = trigger.player;
                                var att = get.attitude(target, tosave);
                                var hastao = target.countCards('h', 'tao');
                                target
                                    .chooseToDiscard(4, true, 'he')
                                    .set('ai', function (card) {
                                        var hastao = _status.event.hastao;
                                        var att = _status.event.att;
                                        if (card.name == 'tao') return -100;
                                        if (!hastao && att > 0) {
                                            var suit = card.suit;
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) {
                                                    return -4 - get.value(card);
                                                }
                                            }
                                            if (card.name == 'tao' || card.name == 'jlsgqs_mei') return -100;
                                        }
                                        if (att < 0 && ui.selected.cards.length == 3) {
                                            var suit = card.suit;
                                            for (var i = 0; i < ui.selected.cards.length; i++) {
                                                if (ui.selected.cards[i].suit == suit) {
                                                    return -get.value(card);
                                                }
                                            }
                                            return -10 - get.value(card);
                                        }
                                        if (card.name == 'tao' || card.name == 'jlsgqs_mei') return -100;
                                        return -get.value(card);
                                    })
                                    .set('hastao', hastao)
                                    .set('att', att);
                                ('step 3');
                                if (result.cards && result.cards.length == 4) {
                                    var suits = [];
                                    for (var i = 0; i < result.cards.length; i++) {
                                        suits.add(result.cards[i].suit);
                                    }
                                    if (suits.length == 4 && game.checkMod({ name: 'tao' }, player, trigger.player, 'unchanged', 'cardSavable', player)) {
                                        trigger.player.recover(1 - trigger.player.hp);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                                threaten: 1.5,
                            },
                        },
                        lishangon: {
                            audio: 'duanchang',
                            limited: true,
                            mark: true,
                            trigger: {
                                global: 'dyingBefore',
                            },
                            check(event, player) {
                                return get.attitude(player, event[event.name == 'gain' ? 'source' : 'player']) > 0;
                            },
                            logTarget(event) {
                                return event[event.name == 'gain' ? 'source' : 'player'];
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('lishangon');
                                ('step 1');
                                player.draw(3);
                                player.recover();
                                ('step 2');
                                trigger.source.clearSkills();
                            },
                            ai: {
                                maixie_defend: true,
                                threaten: 0.9,
                            },
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        zongluanon: {
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            audio: 'jianshu',
                            usable: 1,
                            filter(event, player) {
                                if (!['trick'].includes(get.type(event.card))) return false;
                                if (get.tag(event.card, 'damage')) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                player.chooseCard('选择需要交给' + get.translation(trigger.player) + '的牌', true, 'he');
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.gain(result.cards, 'gain2');
                                    player.chooseControl().set('choiceList', ['此牌伤害+1且你可增加或减少一个目标', '此牌无效且其视为使用一张[文和乱武]'], true);
                                }
                                ('step 2');
                                if (result.index == 0) {
                                    trigger.parent.baseDamage++;
                                    player.chooseTarget('选择需要(添加或移除)角色(注:选择已有目标则移除,选择未有则增加)<br>当前目标有' + get.translation(trigger.targets) + '');
                                    event.goto(3);
                                }
                                if (result.index == 1) {
                                    trigger.cancel();
                                    trigger.targets.length = 0;
                                    trigger.all_excluded = true;
                                    trigger.player.chooseUseTarget({ name: 'wenheluanwu_card' }, true);
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    if (trigger.targets.includes(result.targets[0])) trigger.targets.remove(result.targets[0]);
                                    else trigger.targets.add(result.targets[0]);
                                }
                            },
                        },
                        dumouon: {
                            audio: 'reluanwu',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            filter(event, player) {
                                return (event.name != 'phase' || game.phaseNumber == 0) && !lib.inpile.includes('wenheluanwu_card');
                            },
                            forced: true,
                            content() {
                                var d4 = game.createCard2('wenheluanwu_card', 'diamond', 3);
                                ui.cardPile.insertBefore(d4, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                var h6 = game.createCard2('wenheluanwu_card', 'spade', 8);
                                ui.cardPile.insertBefore(h6, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                var s7 = game.createCard2('wenheluanwu_card', 'spade', 7);
                                ui.cardPile.insertBefore(s7, ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length)]);
                                game.broadcastAll(function () {
                                    lib.inpile.add('wenheluanwu_card');
                                });
                                game.updateRoundNumber();
                            },
                            group: ['dumouon_remove', 'dumouon1', 'dumouon2'],
                            subSkill: {
                                remove: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'damageEnd'],
                                    },
                                    audio: 'reluanwu',
                                    forced: true,
                                    content() {
                                        for (var current of game.filterPlayer()) {
                                            for (var cards of current.getCards('ej')) {
                                                if (get.type(cards) == 'equip' && !equip) {
                                                    var equip = cards;
                                                }
                                                if (get.type2(cards) == 'trick' && !trick) {
                                                    var trick = cards;
                                                }
                                                if (get.type(cards) == 'basic' && !basic) {
                                                    var basic = cards;
                                                }
                                            }
                                        }
                                        var card1 = get.discardPile(function (card) {
                                            return get.type2(card) == 'trick' && card.name == 'wenheluanwu_card';
                                        });
                                        if (card1 && !trick) {
                                            var trick = card1;
                                        }
                                        var card2 = get.discardPile(function (card) {
                                            return get.type2(card) == 'basic' && card.name == 'jiu';
                                        });
                                        if (card2 && !basic) {
                                            var basic = card2;
                                        }
                                        var card = get.discardPile(function (card) {
                                            return get.type2(card) == 'trick';
                                        });
                                        if (card && !trick) {
                                            var trick = card;
                                        }
                                        var card3 = get.discardPile(function (card) {
                                            return get.type2(card) == 'basic';
                                        });
                                        if (card3 && !basic) {
                                            var basic = card3;
                                        }
                                        var card4 = get.discardPile(function (card) {
                                            return get.type2(card) == 'equip';
                                        });
                                        if (card4 && !equip) {
                                            var equip = card4;
                                        }
                                        if (equip) player.gain(equip, 'gain2', 'log');
                                        if (basic) player.gain(basic, 'gain2', 'log');
                                        if (trick) player.gain(trick, 'gain2', 'log');
                                    },
                                },
                            },
                        },
                        dangxianon: {
                            trigger: {
                                global: ['roundStart'],
                            },
                            filter(event, player) {
                                return event.player.seatNum == 1;
                            },
                            forced: true,
                            audio: 'dangxian',
                            audioname: ['guansuo', 'xin_liaohua', 're_liaohua'],
                            content() {
                                player.phase('nodelay');
                            },
                        },
                        wushengon: {
                            group: ['wushengon1', 'wushengon2'],
                            mod: {
                                targetInRange(card) {
                                    if (card.suit == 'diamond' && card.name == 'sha') return true;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return num + 4;
                                },
                            },
                            audio: 'wusheng',
                            audioname: ['re_guanyu', 'guanzhang', 'jsp_guanyu', 'guansuo'],
                            enable: ['chooseToRespond', 'chooseToUse'],
                            filterCard(card, player) {
                                if (get.zhu(player, 'shouyue')) return true;
                                return get.color(card) == 'red';
                            },
                            position: 'hes',
                            viewAs: {
                                name: 'sha',
                            },
                            viewAsFilter(player) {
                                if (get.zhu(player, 'shouyue')) {
                                    if (!player.countCards('hes')) return false;
                                } else {
                                    if (!player.countCards('hes', { color: 'red' })) return false;
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
                                        if (!player.countCards('hes')) return false;
                                    } else {
                                        if (!player.countCards('hes', { color: 'red' })) return false;
                                    }
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
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
                                    player(player, target, card) {
                                        if (_status.mode == 'normal') {
                                            var numz = game.countPlayer(function (current) {
                                                return current.identity == 'zhong' || current.identity == 'mingzhong';
                                            });
                                            var numf = game.countPlayer(function (current) {
                                                return current.identity == 'fan';
                                            });
                                            if (player.identity == 'nei' && numf > 0 && numz > 0 && (player.hasSkill('shanheyonggu_tz') || player.hasSkill('shanheyonggu_tf'))) {
                                                if (target.identity == 'zhu') {
                                                    return -999;
                                                }
                                            }
                                        }
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
                        wushengon1: {
                            audio: 'wusheng',
                            trigger: {
                                source: 'damageBegin1',
                                player: 'shaAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.card.name == 'sha' && event.card.suit == 'diamond'; //QQQ
                            },
                            content() {
                                trigger.num++;
                            },
                        },
                        wushengon2: {
                            audio: 'wusheng',
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha' && event.card.suit == 'heart';
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
                        },
                        zhengnanon: {
                            audio: 'zhengnan',
                            trigger: {
                                global: 'dying',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.recover();
                                player.draw(3);
                                var list = lib.skill.zhengnanon.derivation.filter(function (i) {
                                    return !player.hasSkill(i);
                                });
                                if (list.length) player.chooseControl(list).set('prompt', '征南:请选择获得一项技能');
                                else event.finish();
                                ('step 1');
                                player.addSkillLog(result.control);
                            },
                            ai: {
                                threaten: 1.3,
                            },
                            derivation: ['wushengon', 'dangxianon', 'zhimanon'],
                        },
                        zhimanon2: {
                            audio: 'zhiman',
                            audioname: ['guansuo', 're_masu'],
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
                            audioname2: {
                                ol_guansuo: 'zhiman_guansuo',
                                SHU_guansuo: 'zhiman_guansuo',
                            },
                        },
                        zhimanon: {
                            audio: 'zhiman',
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target.countCards('hej');
                            },
                            content() {
                                'step 0';
                                player.discardPlayerCard(target, 'hej', forced).set('ai', (button, buttons) => {
                                    var target = _status.event.parent.target;
                                    var val = get.buttonValue(button);
                                    if (get.attitude(_status.event.player, get.owner(button.link)) > 0) val = -val;
                                    if (button.name && get.type(button.link) != 'basic') val += 6;
                                    return val;
                                });
                                ('step 1');
                                if (!result.bool || get.type(result.links[0]) == 'basic') {
                                    event.finish();
                                    return;
                                }
                                target.chooseUseTarget({ name: 'nanman' }, true).set('oncard', (card, player) => {
                                    _status.event.skill = 'jlsg_zhengnan';
                                });
                            },
                            group: 'zhimanon2',
                            ai: {
                                result: {
                                    target(player, target) {
                                        var ratio = target.countCards('hej', (c) => get.type(c) != 'basic') / target.countCards('hej');
                                        if (get.attitude(player, target) < 0) return 1 - ratio;
                                        return ratio;
                                    },
                                    player: 1,
                                },
                                order(item, player) {
                                    return get.order({ name: 'nanman' }, player) + 0.5;
                                },
                                threaten: 0.5,
                            },
                        },
                        xiefangon: {
                            trigger: {
                                global: 'dieAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.isAlive() && event.player.sex == 'female';
                            },
                            content() {
                                'step 0';
                                player.gainMaxHp();
                                player.recover();
                                player.chooseSkill(trigger.player, true, function (info, skill) {
                                    return !player.hasSkill(skill);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var skill = result.skill;
                                    player.addSkill(skill);
                                    player.popup(skill);
                                    game.log(player, '获得技能', '【' + get.translation(skill) + '】');
                                }
                            },
                            getNum() {
                                var num = game.countPlayer(function (current) {
                                    return current.hasSex('female');
                                });
                                return Math.max(num + 2);
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    return num + lib.skill.xiefangon.getNum();
                                },
                                globalFrom(from, to, distance) {
                                    return distance - lib.skill.xiefangon.getNum();
                                },
                            },
                        },
                        dumouon1: {
                            audio: 'reweimu',
                            trigger: {
                                global: 'useCardToPlayered',
                            },
                            filter(event, player) {
                                return event.card.name == 'wenheluanwu_card';
                            },
                            forced: true,
                            content() {
                                player.addTempSkill('diaohulishan');
                            },
                        },
                        dumouon2: {
                            audio: 'reweimu',
                            trigger: {
                                global: 'useCardEnd',
                            },
                            filter(event, player) {
                                return event.card.name == 'wenheluanwu_card';
                            },
                            forced: true,
                            content() {
                                player.removeSkill('diaohulishan');
                            },
                        },
                        xuanfengon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'loseAfter',
                                global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.parent.name == 'useCard' && !event.parent.skill) return false;
                                if (event.name == 'gain' && event.player == player) return false;
                                var evt = event.getl(player);
                                for (var i of evt.cards2) {
                                    if (get.type(i, player) == 'equip') return evt && evt.player == player && evt.es && evt.es.length;
                                }
                                var num = evt.cards2.length;
                                if (event.getg) num = Math.max(num, event.getg(player).length);
                                return num > 1;
                            },
                            content() {
                                'step 0';
                                event.list = [];
                                event.num = 0;
                                event.count = 2;
                                ('step 1');
                                player
                                    .chooseTarget(get.prompt('xuanfengon'), '弃置一名其他角色的至多' + get.cnNumber(event.count) + '张牌', function (card, player, target) {
                                        return target.countDiscardableCards(player, 'he');
                                    })
                                    .set('ai', function (target) {
                                        return -get.attitude(_status.event.player, target);
                                    });
                                ('step 2');
                                if (result.bool) {
                                    player.line(result.targets[0], 'green');
                                    player.discardPlayerCard(result.targets[0], 'he', true, [1, event.count]);
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) {
                                    event.count -= result.cards.length;
                                    for (var i = 0; i < result.cards.length; i++) {
                                        if (!event.list.includes(get.type(result.cards[i], false))) {
                                            event.list.add(get.type(result.cards[i], false));
                                            event.num++;
                                        }
                                    }
                                }
                                if (event.count) event.goto(1);
                                ('step 4');
                                if (event.num > 0) {
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (!game.players[i].storage.xuanfengon_damage) game.players[i].storage.xuanfengon_damage = 0;
                                    }
                                    player.chooseTarget(get.prompt('xuanfengon'), '请选择伤害的分配对象').set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        return att < 0;
                                    });
                                } else event.finish();
                                ('step 5');
                                if (result.bool) {
                                    event.num--;
                                    var target = result.targets[0];
                                    target.storage.xuanfengon_damage++;
                                    var num = target.storage.xuanfengon_damage;
                                    target.popup('' + get.cnNumber(num) + '点');
                                }
                                if (event.num > 0) event.goto(4);
                                else {
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (!game.players[i].storage.xuanfengon_damage) continue;
                                        var num = game.players[i].storage.xuanfengon_damage;
                                        game.players[i].storage.xuanfengon_damage = 0;
                                        game.players[i].damage(num);
                                    }
                                }
                            },
                        },
                        zhurenon: {
                            audio: 'pyzhuren',
                            enable: 'phaseUse',
                            position: 'he',
                            filterCard(card, player) {
                                var num = _status.event.player.getHistory('custom', function (evt) {
                                    return evt.zhurenon == true;
                                }).length;
                                if (num >= 2) return get.type(card) == 'equip';
                                else if (ui.selected.cards.length) {
                                    return get.subtype(card) == get.subtype(ui.selected.cards[0]);
                                } else return true;
                            },
                            selectCard(card, player) {
                                var num = _status.event.player.getHistory('custom', function (evt) {
                                    return evt.zhurenon == true;
                                }).length;
                                if (num >= 2) return [2, 2];
                                if (ui.selected.cards.length) {
                                    if (get.type(ui.selected.cards[0]) != 'equip') return [1, 1];
                                    else return [1, 2];
                                }
                                return [1, 2];
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (cards.length == 1) {
                                    var List = get.typeCard('equip');
                                    var list = [];
                                    for (var i of List) {
                                        if (!lib.inpile.includes(i) && lib.card[i].derivation) list.add(i);
                                    }
                                    player
                                        .chooseButton(
                                            [
                                                '铸刃:请选择要获得的装备',
                                                [
                                                    list.map(function (i) {
                                                        return [get.translation(get.subtype(i, false)), '', i];
                                                    }),
                                                    'vcard',
                                                ],
                                            ],
                                            true
                                        )
                                        .set('ai', function (button) {
                                            return Math.random();
                                        });
                                } else {
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
                                                value: 1,
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
                                        } catch (e) {
                                        }
                                    }
                                    player.gain(game.createCard({ name: name, suit: cards[0].suit, number: cards[0].number }), 'gain2');
                                    event.finish();
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.getHistory('custom').push({ zhurenon: true });
                                    var card = game.createCard(result.links[0][2], cards[0].suit, cards[0].number);
                                    player.gain(card, 'gain2');
                                    card.storage.zhurenon = true;
                                }
                            },
                            group: 'zhurenon_destroy',
                            subSkill: {
                                destroy: {
                                    trigger: {
                                        global: ['loseEnd', 'cardsDiscardEnd'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var cs = event.cards;
                                        for (var i = 0; i < cs.length; i++) {
                                            if (cs[i].storage.zhurenon && get.position(cs[i], true) == 'd') return true;
                                        }
                                        return false;
                                    },
                                    forceDie: true,
                                    content() {
                                        var list = [];
                                        var cs = trigger.cards;
                                        for (var i = 0; i < cs.length; i++) {
                                            if (cs[i].storage.zhurenon && get.position(cs[i], true) == 'd') {
                                                list.push(cs[i]);
                                            }
                                        }
                                        game.log(list, '已被销毁');
                                        game.cardsGotoSpecial(list);
                                    },
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        tianjiangon: {
                            audio: 'pytianjiang',
                            trigger: {
                                global: 'phaseBefore',
                                player: 'enterGame',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.name != 'phase' || game.phaseNumber == 0;
                            },
                            content() {
                                'step 0';
                                event.num = 1;
                                ('step 1');
                                while (!player.isEmpty(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                var cardlist = get.typeCard('equip', function (card) {
                                    if (lib.inpile.includes(card) || !lib.card[card].derivation) return false;
                                    return get.subtype(card) == 'equip' + event.num && player.canUse(card, player);
                                });
                                card = game.createCard(cardlist.randomGet(), ['spade', 'heart', 'diamond', 'club'].randomGet(), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].randomGet());
                                player.chooseUseTarget(card, true, 'nopopup');
                                event.num++;
                                if (event.num <= 5) event.redo();
                            },
                            group: 'tianjiangon_move',
                            subSkill: {
                                move: {
                                    audio: 'tianjiangon',
                                    prompt: '将一张装备牌置入至其他角色的装备区',
                                    enable: 'phaseUse',
                                    position: 'he',
                                    check() {
                                        return 1;
                                    },
                                    filter(event, player) {
                                        return player.countCards('he', { type: 'equip' }) > 0;
                                    },
                                    filterCard(card) {
                                        return get.type(card) == 'equip';
                                    },
                                    filterTarget(event, player, target) {
                                        return target != player && target.canEquip(ui.selected.cards[0], true);
                                    },
                                    prepare: 'give',
                                    discard: false,
                                    lose: false,
                                    content() {
                                        target.equip(cards[0]);
                                        switch (get.subtype(cards[0])) {
                                            case 'equip1':
                                                var card = get.cardPile(function (card) {
                                                    return card.name == 'sha';
                                                });
                                                if (card) target.gain(card, 'gain2');
                                                break;
                                            case 'equip2':
                                                var card = get.cardPile(function (card) {
                                                    return card.name == 'shan';
                                                });
                                                if (card) target.gain(card, 'gain2');
                                                break;
                                            case 'equip5':
                                                var card = get.cardPile(function (card) {
                                                    return card.name == 'jiu';
                                                });
                                                if (card) target.gain(card, 'gain2');
                                                break;
                                            default:
                                                var card = get.cardPile(function (card) {
                                                    return card.name == 'tao';
                                                });
                                                if (card) target.gain(card, 'gain2');
                                                break;
                                        }
                                        player.draw(2);
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
                            },
                        },
                        zuizhanon_buff: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'tishen',
                            filter(event, player) {
                                return event.card.name == 'jiu';
                            },
                            forced: true,
                            content() {
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        zuizhanon: {
                            audio: 'paoxiao',
                            group: 'zuizhanon_buff',
                            enable: ['chooseToUse', 'chooseToRespond'],
                            selectCard: 1,
                            filter(event, player) {
                                return player.maxHp < 6;
                            },
                            filterCard(card) {
                                return get.color(card) == 'red';
                            },
                            viewAs: {
                                name: 'jiu',
                            },
                            prompt: '将一张红色牌当[酒]使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (card.name == 'jiu') return Infinity;
                                },
                                ai: {
                                    threaten: 1.6,
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
                                        save: 1,
                                    },
                                    value: 5,
                                },
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
                                                        target.canUse(card, current, null, true) &&
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
                                    recover: 0.1,
                                },
                            },
                        },
                        xiaoyongon: {
                            trigger: {
                                source: 'damageBegin3',
                            },
                            audio: 'retishen',
                            filter(event, player) {
                                if (!event.card || event.card.name != 'sha') return false;
                                return event.player != player;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) <= 0 && player.maxHp > 1;
                            },
                            content() {
                                'step 0';
                                var card = trigger.card;
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return 2;
                                    if (card.suit == 'spade') return 1;
                                    return -2;
                                });
                                ('step 1');
                                if (result.suit == 'heart') {
                                    trigger.player.loseMaxHp();
                                    player.loseMaxHp();
                                } else if (result.suit == 'spade') {
                                    trigger.num += trigger.num;
                                } else trigger.player.addTempSkill('fengyin');
                            },
                        },
                        paoxiaoon1: {
                            trigger: {
                                player: 'shaBegin',
                            },
                            filter(event, player) {
                                return player.getEquip(1);
                            },
                            forced: true,
                            content() {
                                trigger.directHit = true;
                            },
                            mod: {
                                targetInRange(card, player) {
                                    if (player.getEquip(1) && card.name == 'sha') return true;
                                },
                            },
                        },
                        paoxiaoon_Buff: {
                            enable: ['chooseToUse', 'chooseToRespond'],
                            selectCard: 1,
                            filterCard(card) {
                                return get.color(card) == 'black';
                            },
                            viewAs: {
                                name: 'sha',
                                nature: 'thunder',
                            },
                            prompt: '将一张黑色手牌当作雷杀使用',
                            check(card) {
                                return 6 - get.value(card);
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'respondSha') && current < 0) return 0.6;
                                    },
                                },
                                respondSha: true,
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
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
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
                                    player(player, target, card) {
                                        if (_status.mode == 'normal') {
                                            var numz = game.countPlayer(function (current) {
                                                return current.identity == 'zhong' || current.identity == 'mingzhong';
                                            });
                                            var numf = game.countPlayer(function (current) {
                                                return current.identity == 'fan';
                                            });
                                            if (player.identity == 'nei' && numf > 0 && numz > 0 && (player.hasSkill('shanheyonggu_tz') || player.hasSkill('shanheyonggu_tf'))) {
                                                if (target.identity == 'zhu') {
                                                    return -999;
                                                }
                                            }
                                        }
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
                        paoxiaoon: {
                            group: ['paoxiao', 'paoxiaoon1'],
                            audio: 'olpaoxiao',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            check(event, player, card) {
                                if (player.maxHp < 3) return false;
                                return player.countCards('hs') > 6 && player.countCards('hs', 'sha') > 1 && player.countCards('hs', { type: ['equip', 'trick'] }) > 3;
                            },
                            prompt2: '出牌阶段开始时,你可以减少1点体力上限并摸三张牌,本回合你可以将黑色牌当雷杀使用',
                            content() {
                                player.loseMaxHp();
                                player.draw(3);
                                player.addTempSkill('paoxiaoon_Buff', 'phaseUseAfter');
                            },
                        },
                        pojunon: {
                            shaRelated: true,
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: ['useCardToPlayered'],
                            },
                            forced: true,
                            filter(event, player, name) {
                                return event.card.name == 'sha' && event.target.hp > 0 && event.target.countCards('he') > 0;
                            },
                            init(player) {
                                player.storage.pojunon = [];
                                player.storage.pojunon3 = [];
                                for (var i = 0; i < game.players.length; i++) {
                                    player.storage.pojunon3.push({
                                        player: game.players[i],
                                        cards: [],
                                    });
                                }
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.maxHp, trigger.target.countCards('he'))], get.prompt('pojunon', trigger.target));
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
                                    player.storage.pojunon.add(target);
                                    for (var i = 0; i < player.storage.pojunon3.length; i++) {
                                        info = player.storage.pojunon3[i];
                                        if (info.player == target) {
                                            for (var k = 0; k < result.cards.length; k++) {
                                                info.cards.push(result.cards[k]);
                                            }
                                        }
                                    }
                                    target.lose(result.cards, ui.special);
                                    target.addSkill('pojunon_2');
                                }
                            },
                            group: 'pojunon_3',
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
                            subSkill: {
                                2: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    charlotte: true,
                                    filter(event, player) {
                                        list = game.filterPlayer(function (current) {
                                            return current.hasSkill('pojunon');
                                        });
                                        for (var i = 0; i < list[0].storage.pojunon3.length; i++) {
                                            info = list[0].storage.pojunon3[i];
                                            if (info.player == player && info.cards.length) return true;
                                        }
                                        return false;
                                    },
                                    content() {
                                        'step 0';
                                        list = game.filterPlayer(function (current) {
                                            return current.hasSkill('pojunon');
                                        });
                                        for (var i = 0; i < list[0].storage.pojunon3.length; i++) {
                                            info = list[0].storage.pojunon3[i];
                                            if (info.player == player && info.cards.length) {
                                                cardsx = [];
                                                for (var k = 0; k < info.cards.length; k++) {
                                                    cardsx.push(info.cards[k]);
                                                }
                                                info.cards = [];
                                            }
                                        }
                                        player.gain(cardsx, 'draw');
                                        list[0].storage.pojunon = [];
                                        game.log(player, '获取了' + get.cnNumber(cardsx.length) + '张<破军>牌');
                                        ('step 1');
                                        player.removeSkill('pojunon_2');
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageBegin3',
                                        player: 'phaseEnd',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player, name) {
                                        if (name == 'phaseEnd') {
                                            for (var i = 0; i < player.storage.pojunon3.length; i++) {
                                                var info = player.storage.pojunon3[i]; //QQQ
                                                if (!info.player.isAlive() && info.cards.length) return true;
                                            }
                                            return false;
                                        }
                                        return event.card && event.card.name == 'sha' && player.storage.pojunon.includes(event.player);
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'phaseEnd') {
                                            for (var i = 0; i < player.storage.pojunon3.length; i++) {
                                                info = player.storage.pojunon3[i];
                                                if (!info.player.isAlive() && info.cards.length) {
                                                    cardsx = [];
                                                    for (var k = 0; k < info.cards.length; k++) {
                                                        cardsx.push(info.cards[k]);
                                                    }
                                                    if (cardsx.length) {
                                                        player.gain(cardsx);
                                                        game.log(player, '获得了', info.player, '的<破军>牌');
                                                    }
                                                    player.storage.pojunon3.remove(player.storage.pojunon3[i]);
                                                }
                                            }
                                            event.finish();
                                        }
                                        ('step 1');
                                        trigger.player.turnOver();
                                        player.storage.pojunon.remove(trigger.player);
                                        ('step 2');
                                        if (player.num('h') > trigger.player.num('h')) trigger.num++;
                                        if (player.num('e') > trigger.player.num('e')) trigger.num++;
                                        if (player.num('j') > trigger.player.num('j')) trigger.num++;
                                    },
                                },
                            },
                        },
                        yichengon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                global: 'useCard2',
                                player: 'damageEnd',
                            },
                            filter(event, player, name) {
                                if (name == 'useCard2') {
                                    return event.card.name == 'sha' && (event.player == player || event.targets.includes(player));
                                } else {
                                    return event.source && event.source != player && player.canUse('sha', event.source);
                                }
                            },
                            prompt(event, player, name) {
                                if (_status.event.triggername == 'useCard2') {
                                    return '疑城:摸两张牌,弃置一张牌并选择一项执行？';
                                } else {
                                    return '疑城:视为对' + get.translation(event.source) + '使用一张【杀】?';
                                }
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'damageEnd') {
                                    event.numz = trigger.num;
                                } else {
                                    event.goto(3);
                                }
                                ('step 1');
                                if (trigger.source.isAlive() && event.numz > 0) {
                                    event.numz--;
                                    player.useCard({ name: 'sha' }, trigger.source).animate = false;
                                    event.goto(1);
                                }
                                ('step 2');
                                event.finish();
                                ('step 3');
                                player.draw(2);
                                player.chooseToDiscard(1, 'he', true);
                                event.targetx = [];
                                if (trigger.player == player) event.targetx = trigger.targets;
                                else event.targetx.push(trigger.player);
                                list = [];
                                if (
                                    player.getCards('e', function (card) {
                                        return card.name == 'guding';
                                    }).length < 1
                                ) {
                                    list.push('将【古碇刀】置入装备区');
                                    numx = 1;
                                }
                                if (
                                    game.hasPlayer(function (current) {
                                        return event.targetx.includes(current) && current.num('e') > 0;
                                    })
                                ) {
                                    list.push('将' + get.translation(event.target) + '装备区的一张牌置入你的装备区');
                                    numx = 2;
                                }
                                if (!list.length) event.finish();
                                if (list.length > 1) {
                                    listx = ['选项一', '选项二'];
                                    player
                                        .chooseControl(listx, '取消')
                                        .set('choiceList', list)
                                        .set(
                                            'choice',
                                            (function () {
                                                if (player.hp < 3) return '选项二';
                                                return '选项一';
                                            })()
                                        )
                                        .set('ai', () => _status.event.choice)
                                        .set('prompt', '疑城:选择一项执行？');
                                } else {
                                    if (numx == 1) event.control = '选项一';
                                    else event.control = '选项二';
                                }
                                ('step 4');
                                if (result.control == '选项一' || event.control == '选项一') {
                                    cardx = game.createCard('guding');
                                    if (cardx) player.equip(cardx);
                                    event.finish();
                                }
                                event.numx = 0;
                                ('step 5');
                                if (event.targetx[event.numx].num('e') > 0) {
                                    var next = player.choosePlayerCard(event.targetx[event.numx], 'e', 1, get.prompt('yichengon', event.targetx[event.numx]));
                                    next.set('ai', function (button) {
                                        if (!_status.event.goon) return 0;
                                        var val = get.value(button.link);
                                        if (button.link == _status.event.targetx.getEquip(2)) return 2 * (val + 3);
                                        return val;
                                    }).set('targetx', event.targetx[event.numx]);
                                    next.set('goon', get.attitude(player, event.targetx[event.numx]) <= 0);
                                    next.set('forceAuto', true);
                                }
                                ('step 6');
                                if (result.bool && result.cards) {
                                    player.equip(result.cards[0]);
                                }
                                if (event.numx + 1 < event.targetx.length) {
                                    event.numx++;
                                    event.goto(5);
                                }
                            },
                        },
                        poxion: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            usable: 2,
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('h') > 0;
                                //return target!=player;
                            },
                            content() {
                                'step 0';
                                event.list1 = [];
                                event.list2 = [];
                                if (player.countCards('h') > 0) {
                                    var chooseButton = player.chooseButton([3, Infinity], ['你的手牌', player.getCards('h'), get.translation(target.name) + '的手牌', target.getCards('h')]);
                                } else {
                                    var chooseButton = player.chooseButton([3, Infinity], [get.translation(target.name) + '的手牌', target.getCards('h')]);
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
                                        game.loseAsync({
                                            lose_list: [
                                                [player, event.list1],
                                                [target, event.list2],
                                            ],
                                            discarder: player,
                                        }).setContent('discardMultiple');
                                    } else if (event.list2.length) {
                                        target.discard(event.list2);
                                    } else player.discard(event.list1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.list1.length == 0) {
                                    player.loseMaxHp();
                                    target.loseMaxHp();
                                }
                                if (event.list1.length == 2) {
                                    player.recover();
                                    target.damage();
                                    event.finish();
                                } else {
                                    if (event.list1.length > 2) {
                                        var cards = [];
                                        for (var i of lib.suit) {
                                            var card = get.cardPile2(function (card) {
                                                return card.suit == i;
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    }
                                    if (event.list1.length != 1) event.finish();
                                }
                                ('step 3');
                                var choiceList = ['获得一张指定类型的牌'];
                                if (player.canMoveCard()) choiceList.push('移动场上的一张牌');
                                player
                                    .chooseControl('cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('poxion'))
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        if (player.canMoveCard(true)) return 1;
                                        return 0;
                                    });
                                ('step 4');
                                if (result.control == 'cancel2') event.finish();
                                else {
                                    if (result.index == 0) {
                                        player
                                            .chooseControl('basic', 'trick', 'equip')
                                            .set('prompt', '选择获得一种类型的牌')
                                            .set('ai', function () {
                                                var player = _status.event.player;
                                                if (player.hp <= 3 && !player.countCards('h', { name: ['shan', 'tao'] })) return 'basic';
                                                if (player.countCards('he', { type: 'equip' }) < 2) return 'equip';
                                                return 'trick';
                                            });
                                    } else {
                                        player.moveCard(true);
                                        event.finish();
                                    }
                                }
                                ('step 5');
                                var card = get.cardPile2(function (card) {
                                    return get.type(card, 'trick') == result.control;
                                });
                                if (card) player.gain(card, 'gain2', 'log');
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
                        jieyingon: {
                            trigger: {
                                global: 'phaseJieshuBegin',
                                player: 'damageBegin3',
                            },
                            filter(event, player, name) {
                                if (name == 'damageBegin3') return event.source && event.source.countMark('jieyingon_gain') > 0;
                                return event.player.countMark('jieyingon_gain') > 0 && event.player != player && event.player.num('h') > 0;
                            },
                            forced: true,
                            audio: 'ext:风起雨落/audio:2',
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseJieshuBegin') {
                                    trigger.player.give(trigger.player.getCards('h'), player);
                                    trigger.player.removeMark('jieyingon_gain', 1);
                                } else {
                                    trigger.cancel();
                                    trigger.source.removeMark('jieyingon_gain', 1);
                                }
                            },
                            group: ['jieyingon_gain', 'jieyingon_judge'],
                            subSkill: {
                                judge: {
                                    trigger: {
                                        global: 'phaseJudgeBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('jieyingon_gain') > 0;
                                    },
                                    prompt(event, player, name) {
                                        return '劫营:是否令' + get.translation(event.player) + '进行一次【乐不思蜀】判定？';
                                    },
                                    content() {
                                        'step 0';
                                        player.judge(function (card) {
                                            if (card.suit == 'heart') return 2;
                                            return -2;
                                        });
                                        ('step 1');
                                        if (result.suit != 'heart') {
                                            trigger.player.skip('phaseUse');
                                        }
                                    },
                                },
                                mark: {
                                    mod: {
                                        cardUsable(card, player, num) {
                                            if (card.name == 'sha') return num + player.countMark('jieyingon_gain');
                                        },
                                    },
                                    mark: true,
                                    intro: {
                                        mark(dialog, storage, player) {
                                            return '目前有' + get.cnNumber(player.countMark('jieyingon_gain')) + '枚<营>';
                                        },
                                    },
                                    marktext: '营',
                                    trigger: {
                                        player: ['phaseDrawBegin2', 'phaseDiscardBegin'],
                                    },
                                    filter(event, player, name) {
                                        if (name == 'phaseDiscardBegin') {
                                            return player.countMark('jieyingon_gain') > 0;
                                        } else {
                                            return !event.numFixed && player.countMark('jieyingon_gain') > 0;
                                        }
                                    },
                                    forced: true,
                                    charlotte: true,
                                    silent: true,
                                    content() {
                                        list = game.filterPlayer(function (current) {
                                            return current.hasSkill('jieyingon');
                                        });
                                        if (event.triggername == 'phaseDiscardBegin') {
                                            trigger.cancel();
                                            player.draw(player.maxHp - player.num('h'));
                                        } else {
                                            trigger.num += player.countMark('jieyingon_gain');
                                        }
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                gain: {
                                    trigger: {
                                        global: ['roundStart', 'gameStart'],
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.addMark('jieyingon_gain', 1);
                                        player.addSkill('jieyingon_mark');
                                        ('step 1');
                                        player.chooseTarget(get.prompt('jieyingon'), [1, player.countMark('jieyingon_gain')], '劫营:选择<营>获得的对象', function (card, player, target) {
                                            return target != _status.event.player;
                                        }).ai = function (target) {
                                            if (get.attitude(player, target) > 0) return 0.1;
                                            if (get.attitude(player, target) < 1 && (target.isTurnedOver() || target.countCards('h') < 1)) return 0.2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0 && target.countCards('j', { name: 'lebu' }) > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7 + 2;
                                            if (get.attitude(player, target) < 1 && target.countCards('h') > 0) return target.countCards('h') * 0.8 + target.getHandcardLimit() * 0.7;
                                            return 1;
                                        };
                                        ('step 2');
                                        if (result.bool) {
                                            if (result.targets.length == player.countMark('jieyingon_gain')) {
                                                for (var i = 0; i < result.targets.length; i++) {
                                                    result.targets[i].addMark('jieyingon_gain', 1);
                                                    result.targets[i].addSkill('jieyingon_mark');
                                                    player.removeMark('jieyingon_gain', 1);
                                                }
                                                event.finish();
                                            } else {
                                                event.numx = result.targets.length - 1;
                                                event.targetx = result.targets;
                                            }
                                        }
                                        ('step 3');
                                        var map = {};
                                        var list = [];
                                        num1 = Math.max(1, player.countMark('jieyingon_gain') - event.numx);
                                        for (var i = 1; i <= num1; i++) {
                                            var cn = get.cnNumber(i, true);
                                            map[cn] = i;
                                            list.push(cn);
                                        }
                                        event.map = map;
                                        var num = player.countMark('jieyingon_gain') - event.numx;
                                        player
                                            .chooseControl(list, function () {
                                                return get.cnNumber(1);
                                            })
                                            .set('prompt', '劫营:选择交与' + get.translation(event.targetx[event.targetx.length - 1 - event.numx]) + '<营>的数量')
                                            .set('goon', num);
                                        ('step 4');
                                        var num = event.map[result.control] || 1;
                                        event.targetx[event.targetx.length - 1 - event.numx].addMark('jieyingon_gain', num);
                                        event.targetx[event.targetx.length - 1 - event.numx].addSkill('jieyingon_mark');
                                        player.removeMark('jieyingon_gain', num);
                                        if (event.numx > 0) {
                                            event.numx--;
                                            event.goto(3);
                                        }
                                    },
                                },
                            },
                        },
                        liegongon: {
                            audio: 'sbliegong',
                            mod: {
                                targetInRange(card, player) {
                                    if (card.name == 'sha') return true;
                                },
                            },
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card.name == 'sha';
                            },
                            content() {
                                'step 0';
                                trigger.directHit.addArray(game.players);
                                player.addTempSkill('unequip', { player: 'useCardAfter' });
                                player.chooseControl('确定', '取消').set('prompt', '烈弓:是否对' + get.translation(trigger.targets[0]) + '发动【烈弓】？');
                                ('step 1');
                                if (result.control == '确定') {
                                    cardsx = [];
                                    var evt = trigger.parent;
                                    if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                                    var cards = get.cards(3);
                                    player.showCards(cards.slice(0), get.translation(player) + '对' + get.translation(trigger.targets[0]) + '发动了【烈弓】');
                                    while (cards.length) {
                                        var card = cards.pop();
                                        if (trigger.cards.suit != card.suit) evt.baseDamage++;
                                        else cardsx.push(card);
                                        ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                                    }
                                    game.updateRoundNumber();
                                    if (cardsx.length) player.gain(cardsx, 'gain2');
                                }
                            },
                        },
                        dingjunon: {
                            audio: 'liegong',
                            group: 'dingjunon_use',
                            trigger: {
                                global: ['phaseDrawSkipped', 'phaseDrawCancelled', 'phaseUseSkipped', 'phaseUseCancelled', 'phaseZhunbeiSkipped', 'phaseJieshuSkipped', 'phaseJudgeSkipped', 'phaseZhunbeiCancelled', 'phaseJieshuCancelled', 'phaseJudgeCancelled', 'phaseDiscardCancelled', 'phaseDiscardSkipped'],
                            },
                            filter(event, player) {
                                if (event.player == player)
                                    return game.hasPlayer(function (current) {
                                        return player.canCompare(current);
                                    });
                                else return player.canCompare(event.player);
                            },
                            prompt(event, player) {
                                if (event.player == _status.event.player) return '定军:与一名其他角色进行拼点？';
                                else return '定军:与' + get.translation(event.player) + '拼点？';
                            },
                            content() {
                                'step 0';
                                if (trigger.player == player) {
                                    player
                                        .chooseTarget(1, function (card, player, target) {
                                            player = _status.event.player;
                                            return target != player && player.canCompare(target);
                                        })
                                        .set('ai', function (target) {
                                            var att = get.attitude(_status.event.player, target);
                                            if (att > 0) return att + 1;
                                            if (att == 0) return Math.random();
                                            return att;
                                        }).animate = false;
                                } else {
                                    player.chooseToCompare(trigger.player);
                                    event.targetx = trigger.player;
                                    event.goto(2);
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.chooseToCompare(result.targets[0]);
                                    event.targetx = result.targets[0];
                                }
                                ('step 2');
                                if (result.bool) {
                                    if (player.canUse('sha', event.targetx)) player.useCard({ name: 'sha' }, event.targetx).animate = false;
                                } else {
                                    player.recover();
                                    game.filterPlayer(function (current) {
                                        if (current == _status.currentPhase) current.addTempSkill('dingjunon_false');
                                    });
                                }
                            },
                            subSkill: {
                                use: {
                                    audio: 'liegong',
                                    enable: 'phaseUse',
                                    usable: 1,
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return player.canCompare(current);
                                        });
                                    },
                                    filterTarget(card, player, current) {
                                        return player.canCompare(current);
                                    },
                                    prompt: '定军:选择一名其他角色拼点',
                                    content() {
                                        'step 0';
                                        player.chooseToCompare(target);
                                        ('step 1');
                                        if (result.bool) {
                                            if (player.canUse('sha', target)) player.useCard({ name: 'sha' }, target).animate = false;
                                        } else {
                                            player.recover();
                                            game.filterPlayer(function (current) {
                                                if (current == _status.currentPhase) current.addTempSkill('dingjunon_false');
                                            });
                                        }
                                    },
                                },
                                false: {
                                    mark: true,
                                    intro: {
                                        mark(dialog, storage, player) {
                                            return '本回合无法使用【杀】';
                                        },
                                    },
                                    mod: {
                                        playerEnabled(card, player, target, storage, event) {
                                            if (card.name == 'sha' && _status.currentPhase == player) return false;
                                        },
                                        cardUsable(card, player, target, storage, event) {
                                            if (card.name == 'sha' && _status.currentPhase == player) return false;
                                        },
                                        cardEnabled(card, player, target, storage, event) {
                                            if (card.name == 'sha' && player == _status.currentPhase) return false;
                                        },
                                        cardSavable(card, player, target, storage, event) {
                                            if (card.name == 'sha' && player == _status.currentPhase) return false;
                                        },
                                    },
                                },
                            },
                        },
                        fulion: {
                            audio: 'fuli',
                            limited: true,
                            trigger: {
                                player: 'dying',
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('fulion');
                                player.recover(game.players.length - player.hp);
                                player.draw(game.players.length - player.hp);
                                player.turnOver();
                                cardsx = [];
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    var node = ui.cardPile.childNodes[i];
                                    if (get.subtype(node) == 'equip1' || node.name == 'sha') {
                                        if (node.name == 'sha' && (!cardsx.length || cardsx[0].name != 'sha')) cardsx.push(node);
                                        if (get.subtype(node) == 'equip1' && (!cardsx.length || get.subtype(node) != 'equip1')) cardsx.push(node);
                                    }
                                    if (cardsx.length >= 2) break;
                                }
                                player.gain(cardsx, 'gain2');
                                next = player.phaseUse();
                                event.next.remove(next);
                                trigger.parent.next.push(next);
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        xianfengon: {
                            trigger: {
                                source: 'die',
                                player: 'useCardEnd',
                            },
                            filter(event, player, name) {
                                if (name != 'die')
                                    return (
                                        player.getHistory('useCard', function (evt) {
                                            return evt.card.name == 'sha';
                                        }).length <= 1 && event.card.name == 'sha'
                                    );
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(1);
                                ('step 1');
                                if (result.color == 'red') {
                                    player.recover();
                                    player.changeHujia(1);
                                } else {
                                    player.draw(3);
                                }
                            },
                        },
                        yangkuangon: {
                            audio: 'yangkuang',
                            trigger: {
                                global: 'recoverAfter',
                            },
                            filter(event, player) {
                                return event.player.hp == event.player.maxHp;
                            },
                            content() {
                                if (player.canUse('jiu', player)) player.useCard({ name: 'jiu' }, player, false);
                                player.draw();
                                trigger.player.draw();
                            },
                        },
                        cihuangon: {
                            audio: 'cihuang',
                            trigger: {
                                global: ['eventNeutralized', 'shaMiss'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (!event.targets || event.type != 'card' || !player.countCards('he')) return false;
                                return lib.skill.cihuangon.getList(player, event.player, true);
                            },
                            getList(player, target, bool) {
                                var natures = lib.inpile_nature.slice(0);
                                var tricks = [];
                                for (var name of lib.inpile) {
                                    var info = lib.card[name];
                                    if (!info || (info.type != 'trick' && info.type != 'basic') || info.notarget || info.name == 'sha') continue;
                                    tricks.push(name);
                                }
                                var vcards = [];
                                for (var i of lib.inpile_nature) {
                                    if (
                                        player.canUse(
                                            {
                                                name: 'sha',
                                                nature: i,
                                            },
                                            target
                                        )
                                    ) {
                                        if (bool) return true;
                                        else vcards.push(['基本', '', 'sha', i]);
                                    }
                                }
                                for (var i of tricks) {
                                    if (
                                        player.canUse(
                                            {
                                                name: i,
                                            },
                                            target
                                        )
                                    ) {
                                        if (bool) return true;
                                        else vcards.push(['锦囊', '', i]);
                                    }
                                }
                                if (bool) return false;
                                return vcards;
                            },
                            content() {
                                'step 0';
                                var target = trigger.player;
                                var list = lib.skill.cihuangon.getList(player, target);
                                if (_status.connectMode)
                                    game.broadcastAll(function () {
                                        _status.noclearcountdown = true;
                                    });
                                player.chooseButton([get.prompt('cihuangon', target), '<div class="text center">将一张牌当以下的一张牌对' + get.translation(target) + '使用</div>', [list, 'vcard']]).set('ai', function (button) {
                                    var card = {
                                        name: button.link[2],
                                        nature: button.link[3],
                                        storage: { cihuangon: true },
                                    },
                                        player = _status.event.player,
                                        target = _status.event.getTrigger().player;
                                    return get.effect(target, card, player, player);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var card = {
                                        name: result.links[0][2],
                                        nature: result.links[0][3],
                                        storage: { cihuangon: true },
                                    };
                                    event.card = card;
                                    player
                                        .chooseCard('he', '雌黄:将一张牌当' + get.translation(card) + '对' + get.translation(trigger.player) + '使用', function (card, player) {
                                            return player.canUse(_status.event.parent.card, _status.event.target, false);
                                        })
                                        .set('target', trigger.player)
                                        .set('ai', function (card) {
                                            if (get.effect(_status.event.target, _status.event.parent.card, player) <= 0) return false;
                                            return 6 - get.value(card);
                                        });
                                } else event._result = { bool: false };
                                ('step 2');
                                if (_status.connectMode) {
                                    game.broadcastAll(function () {
                                        delete _status.noclearcountdown;
                                        game.stopCountChoose();
                                    });
                                }
                                if (result.bool) {
                                    player.useCard(event.card, result.cards, false, trigger.player, 'cihuangon').set('oncard', function () {
                                        player.storage.cihuangon_damage = result.cards[0];
                                        player.addTempSkill('cihuangon_damage');
                                    });
                                }
                            },
                            ai: {
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    return arg && arg.card && arg.card.storage && arg.card.storage.cihuangon;
                                },
                            },
                            subSkill: {
                                damage: {
                                    trigger: {
                                        source: 'damageEnd',
                                        player: 'useCardEnd',
                                    },
                                    filter(event, player) {
                                        return event.card && event.cards[0] == player.storage.cihuangon_damage;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        if (event.triggername == 'damageEnd') {
                                            player.removeSkill('cihuangon_damage');
                                        } else {
                                            cardsx = [];
                                            for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                                var current = ui.discardPile.childNodes[i];
                                                if (get.type(current) == get.type(trigger.card)) {
                                                    cardsx.push(current);
                                                    break;
                                                }
                                            }
                                            if (cardsx.length) player.gain(cardsx, 'gain2');
                                            player.removeSkill('cihuangon_damage');
                                        }
                                    },
                                },
                            },
                        },
                        sankuon: {
                            forced: true,
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'dying'],
                            },
                            audio: 'sanku',
                            initList(player) {
                                var skills = [];
                                for (var i in lib.character) {
                                    var name = i;
                                    if (i == 'sankuon') continue;
                                    var character = lib.character[i];
                                    if (character && character[3]) {
                                        for (var j of character[3]) {
                                            var info = get.info(j);
                                            if (info && info.juexingji) {
                                                skills.add(j);
                                                continue;
                                            }
                                        }
                                    }
                                }
                                if (skills.length) player.storage.sankuon = skills;
                            },
                            init(player) {
                                player.storage.sankuon_add = 0;
                            },
                            group: 'sankuon_add',
                            content() {
                                'step 0';
                                player.judge(1);
                                ('step 1');
                                if (result.number <= 10) {
                                    if (!player.storage.sankuon) lib.skill.sankuon.initList(player);
                                    var listx = player.storage.sankuon.randomGet(1);
                                    player.storage.sankuon.remove(listx);
                                    player.addSkillLog(listx);
                                    var next = game.createEvent('sankuon_juexing');
                                    next.player = player;
                                    next.setContent(lib.skill[listx].content);
                                } else {
                                    player.markSkill('sankuon_add');
                                    player.gainMaxHp();
                                    player.storage.sankuon_add++;
                                }
                                ('step 2');
                                player.hp = player.maxHp;
                            },
                            subSkill: {
                                add: {
                                    intro: {
                                        mark(dialog, content, player) {
                                            return '你的摸牌数,【杀】的伤害值+' + player.storage.sankuon_add;
                                        },
                                    },
                                    trigger: {
                                        player: ['phaseDrawBegin2', 'useCard2'],
                                    },
                                    filter(event, player, name) {
                                        if (player.storage.sankuon_add < 1) return false;
                                        if (name == 'useCard2') return event.card.name == 'sha';
                                        else return !event.numFixed;
                                    },
                                    forced: true,
                                    content() {
                                        if (event.triggername == 'useCard2') trigger.baseDamage += player.storage.sankuon_add;
                                        else trigger.num += player.storage.sankuon_add;
                                    },
                                },
                            },
                        },
                        cizhenon: {
                            audio: 'zhendu',
                            trigger: {
                                global: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.getCards('he').length;
                            },
                            content() {
                                'step 0';
                                player.chooseToDiscard(1, 'he').set('prompt', '赐鸩:弃置一张红色牌令' + get.translation(trigger.player) + '使用一张【桃】或弃置一张黑色牌令' + get.translation(trigger.player) + '使用一张【酒】');
                                ('step 1');
                                if (result.bool) {
                                    if (get.color(result.cards[0]) == 'red') if (trigger.player.canUse('tao', trigger.player)) trigger.player.useCard({ name: 'tao' }, trigger.player, false);
                                    if (get.color(result.cards[0]) == 'black') if (trigger.player.canUse('jiu', trigger.player)) trigger.player.useCard({ name: 'jiu' }, trigger.player, false);
                                    if (result.cards[0].suit == 'heart') player.recover();
                                    if (result.cards[0].suit == 'diamond') {
                                        player.draw();
                                        trigger.player.draw();
                                    }
                                    if (result.cards[0].suit == 'spade') trigger.player.loseHp();
                                    if (result.cards[0].suit == 'club') trigger.player.skip('phaseDiscard');
                                }
                            },
                        },
                        dufeion: {
                            audio: 'qiluan2',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                player.turnOver();
                                player.draw(3);
                                player.addTempSkill('dufeion_use');
                            },
                            group: 'dufeion_begin',
                            subSkill: {
                                use: {
                                    mod: {
                                        cardname(card, player, name) {
                                            if (card.name == 'sha') return 'sha';
                                        },
                                        cardnature(card, player) {
                                            if (card.name == 'sha') return 'fqyl_du';
                                        },
                                        selectTarget(card, player, range) {
                                            if (Array.isArray(range) && range[1] == -1) return;
                                            if (card.name == 'sha' || card.nature == 'fqyl_du') range[1] += 2;
                                        },
                                    },
                                },
                                begin: {
                                    trigger: {
                                        global: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        return event.player.countMark('_fqyl_liushi') > 0;
                                    },
                                    prompt: '毒妃:令其立即触发<毒>？',
                                    content() {
                                        trigger.player.loseHp(trigger.player.countMark('_fqyl_liushi'));
                                    },
                                },
                            },
                        },
                        qiluanon: {
                            usable: 1,
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'qiluan2',
                            content() {
                                if (trigger.player == player) {
                                    player.draw();
                                    player.recover();
                                } else {
                                    player.draw(3);
                                }
                            },
                        },
                        guyaoon2: {
                            audio: 'ext:风起雨落/audio:1',
                            trigger: {
                                player: 'loseHpEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【蛊药】？', function (card, target, player) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].recover(trigger.num);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        guyaoon: {
                            audio: 'ext:风起雨落/audio:1',
                            trigger: {
                                player: 'recoverEnd',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【蛊药】？', function (card, target, player) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var i = 0; i < result.targets.length; i++) {
                                        result.targets[i].loseHp(trigger.num);
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                            group: 'guyaoon2',
                        },
                        duyion: {
                            audio: 'ext:风起雨落/audio:1',
                            enable: 'phaseUse',
                            usable: 1,
                            init(player) {
                                player.storage.duyion = [];
                            },
                            content() {
                                'step 0';
                                event.card = get.cards()[0];
                                game.cardsGotoOrdering(event.card);
                                player.showCards(event.card);
                                ('step 1');
                                player
                                    .chooseTarget('令一名角色获得' + get.translation(card), true)
                                    .set('ai', function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        if (_status.event.du) {
                                            if (target.hasSkillTag('nodu')) return 0;
                                            return -att;
                                        }
                                        if (att > 0) {
                                            if (target == player) att *= 0.6;
                                            return att + Math.sqrt(Math.max(0, 5 - target.countCards('h')));
                                        }
                                        return att;
                                    })
                                    .set('du', card.name == 'du');
                                ('step 2');
                                if (result && result.bool) {
                                    var target = result.targets[0];
                                    player.storage.duyion.push(result.targets[0]);
                                    target.gain(card, 'gain2');
                                    if (get.color(card, false) == 'black') target.addTempSkill('spduyi2');
                                    if (get.color(card, false) == 'red') target.loseHp();
                                }
                            },
                            ai: {
                                order: 0.1,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'duyion_recover',
                            subSkill: {
                                recover: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.duyion && player.storage.duyion.length;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        if (player.storage.duyion[0].isAlive()) {
                                            player
                                                .chooseControl('是', '否')
                                                .set('prompt', '毒医:是否令' + get.translation(player.storage.duyion[0]) + '回复两点体力?')
                                                .set('ai', function (event, player, list) {
                                                    player = _status.event.player;
                                                    if (get.attitude(_status.event.target1, player) > 0) return '是';
                                                    return '否';
                                                })
                                                .set('target1', player.storage.duyion[0]);
                                        } else {
                                            event.goto(2);
                                        }
                                        ('step 1');
                                        if (result.control == '是') {
                                            player.storage.duyion[0].recover(2);
                                        }
                                        ('step 2');
                                        player.storage.duyion = [];
                                    },
                                },
                            },
                        },
                        tianduon: {
                            audio: 'tiandu',
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                player: 'judgeEnd',
                            },
                            preHidden: true,
                            frequent(event) {
                                if (event.result.card.name == 'du') return false;
                                //if(get.mode()=='guozhan') return false;
                                return true;
                            },
                            check(event) {
                                if (event.result.card.name == 'du') return false;
                                return true;
                            },
                            filter(event, player) {
                                return get.position(event.result.card, true) == 'o';
                            },
                            content() {
                                'step 0';
                                player.gain(trigger.result.card, 'gain2');
                                ('step 1');
                                if (lib.filter.cardEnabled(trigger.result.card)) {
                                    var next = player.chooseToUse();
                                    next.filterCard = function (card) {
                                        return card == trigger.result.card;
                                    };
                                    next.prompt = '是否使用' + get.translation(trigger.result.card) + '？';
                                    next.set('addCount', false);
                                }
                            },
                            group: 'tianduon2',
                        },
                        tianduon2: {
                            audio: 'tiandu',
                            audioname: ['re_guojia', 'xizhicai', 'gz_nagisa'],
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.player.isAlive();
                            },
                            content() {
                                'step 0';
                                event.judgestr = '闪电';
                                trigger.player.judge(function (card) {
                                    if (card.suit == 'spade' && card.number > 1 && card.number < 10) return -6;
                                    return 0;
                                }, event.judgestr).judge2 = (result) => result.bool === false;
                                ('step 1');
                                if (result.bool === false) {
                                    trigger.player.damage(3, 'thunder', 'nosource');
                                } else {
                                    event.finish();
                                }
                            },
                            ai: {
                                noJudgeTrigger: true,
                            },
                        },
                        tianxiangon: {
                            audio: 'tianxiang',
                            enable: 'phaseUse',
                            filterTarget(card, player, target) {
                                if (ui.selected.cards.length && get.color(ui.selected.cards[0]) == 'red' && target.hasSkill('tianxiangon_true')) return false;
                                if (ui.selected.cards.length && get.color(ui.selected.cards[0]) == 'black' && target.hasSkill('tianxiangon_false')) return false;
                                return target.isAlive();
                            },
                            selectTarget(card, player, target) {
                                return 1;
                            },
                            filterCard(card, player, target) {
                                return card.suit == 'heart' || card.suit == 'spade';
                            },
                            selectCard(card, player, target) {
                                return 1;
                            },
                            filter(event, player) {
                                return player.getCards('he', function (card) {
                                    return card.suit == 'heart' || card.suit == 'spade';
                                }).length;
                            },
                            position: 'he',
                            content() {
                                'step 0';
                                target.storage.tianxiangon_buff = [];
                                ('step 1');
                                if (cards[0].suit == 'heart') {
                                    target.addSkill('tianxiangon_true');
                                    target.storage.tianxiangon_buff.push({
                                        player: 1,
                                        source: player,
                                    });
                                } else {
                                    target.addSkill('tianxiangon_false');
                                    target.storage.tianxiangon_buff.push({
                                        player: 2,
                                        source: player,
                                    });
                                }
                            },
                            group: 'tianxiangon_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: ['phaseBegin', 'dieEnd'],
                                    },
                                    charlotte: true,
                                    silent: true,
                                    forced: true,
                                    forceDie: true,
                                    firstDo: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current.storage.tianxiangon_buff) {
                                                info = current.storage.tianxiangon_buff[0];
                                                if (info.source && info.source == player) {
                                                    current.removeSkill('tianxiangon_true');
                                                    current.removeSkill('tianxiangon_false');
                                                }
                                            }
                                        });
                                    },
                                    forced: true,
                                    popup: false,
                                },
                                true: {
                                    trigger: {
                                        player: ['loseMaxHpBegin', 'damageBegin', 'loseHpBegin'],
                                    },
                                    filter(event, player, name) {
                                        return true;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        info = player.storage.tianxiangon_buff[0];
                                        playerx = info.source;
                                        trigger.cancel();
                                    },
                                    marktext: '知己',
                                    mark: true,
                                    intro: {
                                        mark(dialog, content, player) {
                                            info = player.storage.tianxiangon_buff[0];
                                            return '直到' + get.translation(info.source) + '的回合开始,你无法减少体力和体力上限';
                                        },
                                    },
                                },
                                false: {
                                    trigger: {
                                        player: ['gainMaxHpBegin', 'recoverBegin'],
                                    },
                                    filter(event, player, name) {
                                        return true;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        info = player.storage.tianxiangon_buff[0];
                                        playerx = info.source;
                                        trigger.cancel();
                                    },
                                    marktext: '祸水',
                                    mark: true,
                                    intro: {
                                        mark(dialog, content, player) {
                                            info = player.storage.tianxiangon_buff[0];
                                            return '直到' + get.translation(info.source) + '的回合开始,你无法增加体力和体力上限';
                                        },
                                    },
                                },
                                buff: {
                                    onremove(player, skill) {
                                        player.removeSkill('tianxiangon_true');
                                        player.removeSkill('tianxiangon_false');
                                    },
                                    trigger: {
                                        player: ['gainMaxHpBegin', 'loseMaxHpBegin', 'recoverBegin', 'damageBegin', 'loseHpBegin'],
                                    },
                                    filter(event, player, name) {
                                        info = player.storage.tianxiangon_buff[0];
                                        if (!info.player) return false;
                                        playerx = info.source;
                                        if (!playerx.hasSkill('tianxiangon')) return false;
                                        if (name == 'recoverBegin' || name == 'damageBegin' || name == 'loseHpBegin') {
                                            if (info.player == 1 && (name == 'damageBegin' || name == 'loseHpBegin')) return true;
                                            if (info.player == 2 && name == 'recoverBegin') return true;
                                        } else {
                                            if (info.player == 1 && name == 'loseMaxHpBegin') return true;
                                            if (info.player == 2 && name == 'gainMaxHpBegin') return true;
                                        }
                                        return false;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        info = player.storage.tianxiangon_buff[0];
                                        playerx = info.source;
                                        trigger.cancel();
                                    },
                                },
                            },
                        },
                        piaolingon: {
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                                global: 'loseAfter',
                            },
                            audio: 'piaoling',
                            filter(event, player) {
                                if (event.name == 'lose') {
                                    if (Array.isArray(event.cards))
                                        for (var i of event.cards) {
                                            if (get.type(i) == 'equip') return true;
                                        }
                                } else {
                                    return player.canMoveCard();
                                }
                            },
                            forced: true,
                            content() {
                                if (trigger.name == 'lose') {
                                    suitx = ['heart', 'diamond', 'spade', 'club'];
                                    if (player.getCards('h').length) {
                                        for (var i = 0; i < player.getCards('h').length; i++) {
                                            if (suitx.includes(get.suit(player.getCards('h')[i]))) suitx.remove(get.suit(player.getCards('h')[i]));
                                        }
                                    }
                                    if (!suitx.length) event.finish();
                                    cardsx = [];
                                    for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                        var current = ui.cardPile.childNodes[i];
                                        if (suitx.includes(current.suit)) {
                                            cardsx.push(current);
                                            suitx.remove(current.suit);
                                        }
                                        if (!suitx.length) break;
                                    }
                                    if (cardsx.length) {
                                        player.gain(cardsx, 'gain2');
                                    }
                                } else {
                                    player.moveCard();
                                }
                            },
                        },
                        xianshion: {
                            audio: 'xianfu',
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    if (player.storage.xianshion.length) return '当' + get.translation(player.storage.xianshion[0]) + '回复体力时,你回复等量体力,当你受到伤害后,其受到等量伤害';
                                    return '当前无【先识】对象';
                                },
                            },
                            trigger: {
                                player: 'enterGame',
                                global: ['gameStart', 'die'],
                            },
                            init(player) {
                                player.storage.xianshion = [];
                            },
                            filter(event, player) {
                                if (event.name == 'die' && player.storage.xianshion && player.storage.xianshion.length) {
                                    return event.player == player.storage.xianshion[0];
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('先识:选择一名其他角色？', 1, true, function (card, target, player) {
                                    return player != target;
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    player.storage.xianshion = [];
                                    player.storage.xianshion.push(result.targets[0]);
                                }
                            },
                            group: 'xianshion_recover',
                            subSkill: {
                                recover: {
                                    trigger: {
                                        player: 'damageEnd',
                                        global: 'recoverEnd',
                                    },
                                    audio: 'xianfu',
                                    filter(event, player) {
                                        if (!player.storage.xianshion.length) return false;
                                        if (event.name == 'damage' && player.storage.xianshion[0].isAlive()) return true;
                                        if (event.name == 'recover') return event.player == player.storage.xianshion[0] && player.isDamaged();
                                    },
                                    charlotte: true,
                                    forced: true,
                                    logTarget(event, player) {
                                        if (player.storage.xianshion.length) return player.storage.xianshion[0];
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'recoverEnd') {
                                            player.recover(trigger.num);
                                        } else {
                                            player.storage.xianshion[0].damage(trigger.num, 'nosource');
                                        }
                                    },
                                },
                            },
                        },
                        chouceon: {
                            audio: 'chouce',
                            trigger: {
                                player: ['damageAfter', 'recoverAfter'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'recoverAfter') {
                                    player.draw(2);
                                    event.finish();
                                }
                                ('step 1');
                                var list = [];
                                for (var i of lib.inpile) {
                                    var type = get.type(i);
                                    if (type == 'trick') list.push([type, '', i]);
                                }
                                player
                                    .chooseButton(['筹策:是否视为使用一张普通锦囊牌？', [list, 'vcard']])
                                    .set('filterButton', function (button) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player != current && player.canUse({ name: button.link[2], nature: button.link[3] }, current);
                                            })
                                        )
                                            return true;
                                    })
                                    .set('ai', function (button) {
                                        return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                    });
                                ('step 2');
                                if (result.bool) {
                                    event.cardx = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseTarget('筹策:选择' + get.translation(result.links[0][2]) + '的目标', 1, true, function (card, target, player) {
                                        return player.canUse({ name: result.links[0][2], nature: result.links[0][3] }, target) && target != player;
                                    }).ai = function (target) {
                                        return -get.attitude(player, target);
                                    };
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.useCard(event.cardx, result.targets[0], true, true);
                                }
                            },
                        },
                        pianchongon2: {
                            audio: 'pianchong',
                            trigger: {
                                player: ['damageBefore', 'discardBefore'],
                            },
                            filter(event, player) {
                                return player.hasSkill('pianchongon') && !player.hasSkill('pianchongon1');
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        mowangon: {
                            audio: 'sbdujiang',
                            group: 'mowangon1',
                            trigger: {
                                player: ['damageBefore', 'loseBefore'],
                            },
                            filter(event, player) {
                                return game.roundNumber < 11;
                            },
                            forced: true,
                            content() {
                                trigger.cancel();
                            },
                        },
                        mowangon1: {
                            audio: 'sbduojing',
                            trigger: {
                                player: 'gainBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.getParent('phaseDraw').player != player && player.countCards('he') > 0 && game.roundNumber < 11;
                            },
                            content() {
                                trigger.cancel();
                            },
                        },
                        kongjuon: {
                            audio: 'sbkeji',
                            trigger: {
                                player: 'phaseDiscardBefore',
                            },
                            forced: true,
                            filter(event, player) {
                                if (player.getHistory('skipped').includes('phaseUse')) return true;
                                var history = player.getHistory('useCard').concat(player.getHistory('respond'));
                                for (var i = 0; i < history.length; i++) {
                                    if (history[i].card.name == 'sha' && history[i].isPhaseUsing()) return false;
                                }
                                return true;
                            },
                            content() {
                                trigger.cancel();
                                player.gainMaxHp();
                                player.recover();
                            },
                        },
                        qinxueon: {
                            audio: 'qinxue',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.phaseNumber < 999;
                            },
                            check(event, player) {
                                return player.phaseNumber < 999;
                            },
                            content() {
                                if (player.phaseNumber < 11) {
                                    player.addTempSkill('jinnangon_Buff', 'phaseEnd');
                                } else
                                    for (var i of lib.skill.qinxueon.derivation) {
                                        if (!player.hasSkill(i, null, null, false)) {
                                            player.addSkillLog(i);
                                            break;
                                        }
                                    }
                            },
                            derivation: ['rebotu', 'fanjian', 'qianxun', 'dimeng'],
                        },
                        jinnangon_Buff: {
                            mod: {
                                cardEnabled(card, player) {
                                    if (get.type(card, 'trick') == 'trick') return false;
                                },
                                cardRespondable(card, player) {
                                    if (get.type(card, 'trick') == 'trick') return false;
                                },
                                cardSavable(card, player) {
                                    if (get.type(card, 'trick') == 'trick') return false;
                                },
                            },
                        },
                        jianxiongon: {
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            init(player) {
                                player.storage.jianxiongon = false;
                            },
                            intro: {
                                content(storage, player, skill) {
                                    var str = player.storage.jianxiongon ? '当其他角色使用伤害牌指定目标后,你可以令其交给你一张同类牌,否则此牌失效' : '出牌阶段/当你受到伤害后,你可以随机获一张伤害牌并摸一张牌';
                                    return str;
                                },
                            },
                            trigger: {
                                global: 'useCard2',
                                player: 'damageEnd',
                            },
                            filter(event, player) {
                                if (player.storage.jianxiongon != true) return event.name != 'useCard';
                                return event.name == 'useCard' && get.tag(event.card, 'damage') && event.targets && event.targets.length && event.player != player;
                            },
                            silent: true,
                            audio: 'ext:风起雨落/audio:2',
                            content() {
                                'step 0';
                                if (player.storage.jianxiongon != true) str = '阳';
                                else str = '阴';
                                player.chooseControl('是', '否').set('prompt', '奸雄:是否发动【奸雄】' + str + '效果？');
                                ('step 1');
                                if (result.control == '否') event.finish();
                                ('step 2');
                                if (player.storage.jianxiongon != true) {
                                    game.playAudio('../extension/风起雨落/audio/jianxiongon1.mp3');
                                    player.changeZhuanhuanji('jianxiongon');
                                    list = [];
                                    cards = [];
                                    var card = get.cardPile(function (card) {
                                        return get.tag(card, 'damage') && !cards.includes(card);
                                    });
                                    if (card) {
                                        cards.add(card);
                                        list.add(card);
                                    }
                                    player.gain(list, 'draw');
                                    player.draw();
                                    event.finish();
                                }
                                ('step 3');
                                player.changeZhuanhuanji('jianxiongon');
                                game.playAudio('../extension/风起雨落/audio/jianxiongon2.mp3');
                                trigger.player
                                    .chooseCard(1, 'he', function (card, player) {
                                        cardx = _status.event.cardx;
                                        return get.type2(card) == get.type2(cardx);
                                    })
                                    .set('cardx', trigger.card)
                                    .set('playerx', trigger.player)
                                    .set('prompt', '奸雄:交与' + get.translation(player) + '一张' + get.translation(get.type2(trigger.card)) + '牌,否则此牌(' + get.translation(trigger.card) + ')无效')
                                    .set('ai', function (card) {
                                        playerx = _status.event.playerx;
                                        player = _status.event.player;
                                        if (get.attitude(playerx, player) <= 0) return 7 - get.value(card);
                                        return -get.value(card);
                                    });
                                ('step 4');
                                if (result.bool) {
                                    trigger.player.give(result.cards[0], player);
                                } else {
                                    trigger.cancel();
                                }
                            },
                            group: 'jianxiongon_use',
                            subSkill: {
                                use: {
                                    enable: 'phaseUse',
                                    filter(event, player) {
                                        return player.storage.jianxiongon != true;
                                    },
                                    content() {
                                        game.playAudio('../extension/风起雨落/audio/jianxiongon1.mp3');
                                        player.changeZhuanhuanji('jianxiongon');
                                        list = [];
                                        cards = [];
                                        var card = get.cardPile(function (card) {
                                            return get.tag(card, 'damage') && !cards.includes(card);
                                        });
                                        if (card) {
                                            cards.add(card);
                                            list.add(card);
                                        }
                                        player.gain(list, 'draw');
                                        player.draw();
                                    },
                                },
                            },
                            forced: true,
                            popup: false,
                        },
                        bayeon: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            init(player) {
                                player.storage.bayeon = [];
                                player.storage.bayeon_use = 0;
                            },
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    return '你已发动过' + get.translation(player.storage.bayeon_use) + '次【霸业】';
                                },
                            },
                            filterTarget(card, player, target) {
                                return target.isAlive() && !player.storage.bayeon.includes(target);
                            },
                            selectTarget(card, player, target) {
                                return 1;
                            },
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return !player.storage.bayeon.includes(current);
                                });
                            },
                            prompt: '霸业:选择一名本阶段未选择的角色执行技能',
                            content() {
                                'step 0';
                                player.storage.bayeon_use++;
                                player.storage.bayeon.push(target);
                                ('step 1');
                                list = ['额外回合'];
                                if (target.getCards('he').length >= player.storage.bayeon_use) list.push('弃置牌');
                                if (list.length > 1)
                                    target
                                        .chooseControl('额外回合', '弃置牌')
                                        .set('prompt', '霸业:开始一个额外回合或者弃置' + get.translation(player.storage.bayeon_use) + '张牌')
                                        .set('ai', function (event, player, list) {
                                            if (player.storage.bayeon_use < target.hp - 1) return '额外回合';
                                            return '弃置牌';
                                        });
                                ('step 2');
                                if (result.control == '额外回合' || !result.control) {
                                    player.storage.bayeon_begin.push(target);
                                    if (!target.storage.bayeon_damage) target.storage.bayeon_damage = [];
                                    target.storage.bayeon_damage.push({
                                        player: player,
                                        damage: player.storage.bayeon_use,
                                    });
                                } else {
                                    target.chooseToDiscard('he', player.storage.bayeon_use, true);
                                    if (target == player) player.storage.bayeon_use = 0;
                                }
                            },
                            group: ['bayeon_use', 'bayeon_damage', 'bayeon_begin'],
                            subSkill: {
                                begin: {
                                    init(player) {
                                        player.storage.bayeon_begin = [];
                                    },
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    filter(event, player) {
                                        return player.storage.bayeon_begin.length;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (player.storage.bayeon_begin.includes(game.players[i])) {
                                                game.players[i].phase('nodelay');
                                            }
                                        }
                                        player.storage.bayeon_begin = [];
                                    },
                                },
                                use: {
                                    trigger: {
                                        player: ['phaseUseBegin', 'phaseUseEnd'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        player.storage.bayeon = [];
                                    },
                                },
                                target: {},
                                damage: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (!event.player.storage.bayeon_damage || !event.player.storage.bayeon_damage.length) return false;
                                        return (
                                            game.hasPlayer(function (current) {
                                                info = event.player.storage.bayeon_damage[0];
                                                return current == info.player;
                                            }) && event.skill == 'bayeon_begin'
                                        );
                                    },
                                    content() {
                                        info = trigger.player.storage.bayeon_damage[0];
                                        trigger.player.damage(info.player.storage.bayeon_use, info.player);
                                        trigger.player.storage.bayeon_damage.remove(trigger.player.storage.bayeon_damage[0]);
                                    },
                                },
                            },
                        },
                        hujiaon: {
                            audio: 'sbhujia',
                            trigger: {
                                player: 'damageBegin4',
                            },
                            filter(event, player) {
                                return !player.hasSkill('hujiaon_remove');
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseCardTarget({
                                    filterCard(card, player, target) {
                                        return true;
                                    },
                                    selectCard: 1,
                                    filterTarget(card, player, target) {
                                        return target.isAlive() && target != _status.event.player;
                                    },
                                    selectTarget(card, player, target) {
                                        return 1;
                                    },
                                    prompt: '护驾:弃置一张牌将此伤害转移给一名其他角色？',
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.attitude(player, target) <= 0;
                                    },
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.discard(result.cards[0]);
                                    player.addTempSkill('hujiaon_remove', 'roundStart');
                                    trigger.player = result.targets[0];
                                    list = [];
                                    if (trigger.cards && trigger.cards.length) list.push('获得此伤害牌');
                                    if (
                                        !player.getCards('hes', function (card) {
                                            return card.name == 'jueying';
                                        }).length
                                    )
                                        list.push('获得绝影');
                                    if (list.length) {
                                        if (list.length == 1) {
                                            event.controlx = list[0];
                                            event.goto(2);
                                        } else {
                                            player.chooseControl(list);
                                        }
                                    } else {
                                        event.finish();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.control || event.controlx) {
                                    if (result.control == '获得此伤害牌' || event.controlx == '获得此伤害牌') {
                                        cardsx = [];
                                        for (var i = 0; i < trigger.cards.length; i++) {
                                            cardsx.push(trigger.cards[i]);
                                        }
                                        player.gain(cardsx, 'gain');
                                        name = trigger.card.name;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(name, current);
                                            })
                                        ) {
                                            if (trigger.cards.length > 1) {
                                                name = trigger.card.name;
                                                nature = trigger.card.nature;
                                                player.chooseUseTarget({ name: name, nature: nature }, trigger.cards, true, false).viewAs = true;
                                            } else {
                                                player.chooseUseTarget(trigger.cards, true, false);
                                            }
                                        }
                                    } else {
                                        cardsx = [];
                                        var players = game.filterPlayer();
                                        for (var i = 0; i < players.length; i++) {
                                            if (players[i] != player) {
                                                var e = players[i].getCards('hes');
                                                if (e.length) {
                                                    player.line(players[i], 'green');
                                                    cardx = players[i].getCards('hes', function (card) {
                                                        return card.name == 'jueying';
                                                    });
                                                    if (cardx.length) {
                                                        players[i].give(cardx[0], player);
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                        for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                            var current = ui.discardPile.childNodes[i];
                                            if (current.name == 'jueying') cardsx.push(current);
                                        }
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            var current = ui.cardPile.childNodes[i];
                                            if (current.name == 'jueying') cardsx.push(current);
                                        }
                                        if (cardsx.length) player.gain(cardsx[0], 'gain');
                                        player.useCard(cardsx[0], player, true, true);
                                    }
                                }
                            },
                            subSkill: {
                                remove: {},
                            },
                        },
                        lieshion: {
                            audio: 'clanlieshi',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return !player.storage._disableJudge || player.countCards('h') > 0;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var dialog = ui.create.dialog('烈誓:选择一项', 'hidden');
                                    dialog.add([lib.skill.lieshion.choices.slice(), 'textbutton']);
                                    return dialog;
                                },
                                filter(button, player) {
                                    var link = button.link;
                                    if (link == 'damage') return !player.storage._disableJudge;
                                    if (!player.getCards('h').length) return false;
                                    if (link == 'suit') {
                                        cardsx = [];
                                        var cards = player.getCards('h'),
                                            map = {},
                                            max = -Infinity;
                                        for (var card of cards) {
                                            var suit = card.suit;
                                            if (!map[suit]) map[suit] = 0;
                                            map[suit]++;
                                            if (map[suit] > max) max = map[suit];
                                        }
                                        for (var i in map) {
                                            if (map[i] == max) {
                                                for (var k = 0; k < player.getCards('h').length; k++) {
                                                    if (get.suit(player.getCards('h')[k]) == i) cardsx.push(player.getCards('h')[k]);
                                                }
                                            }
                                        }
                                        return (
                                            cardsx.length ==
                                            player.getDiscardableCards(player, 'h').filter(function (card) {
                                                return cardsx.includes(card);
                                            }).length
                                        );
                                    }
                                    if (link == 'type') {
                                        cardsx = [];
                                        var cards = player.getCards('h'),
                                            map = {},
                                            max = -Infinity;
                                        for (var card of cards) {
                                            var type = get.type2(card, player);
                                            if (!map[type]) map[type] = 0;
                                            map[type]++;
                                            if (map[type] > max) max = map[type];
                                        }
                                        for (var i in map) {
                                            if (map[i] == max) {
                                                for (var k = 0; k < player.getCards('h').length; k++) {
                                                    if (get.type2(player.getCards('h')[k]) == i) cardsx.push(player.getCards('h')[k]);
                                                }
                                            }
                                        }
                                        return (
                                            cardsx.length ==
                                            player.getDiscardableCards(player, 'h').filter(function (card) {
                                                return cardsx.includes(card);
                                            }).length
                                        );
                                    }
                                    return player.getCards('h').length;
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    switch (button.link) {
                                        case 'damage':
                                            if (get.damageEffect(player, player, player, 'fire') >= 0) return 10;
                                            if (player.hp >= Math.max(2, 3 - player.getFriends().length) && game.countPlayer((current) => get.attitude(player, current) < 0 && current.countCards('h', (card) => ['sha', 'shan'].includes(card.name)))) return 0.8 + Math.random();
                                            return 0;
                                        case 'suit':
                                            if (
                                                player.getCards('h', function (card) {
                                                    return card.suit == 'heart' || card.suit == 'diamond' || card.suit == 'spade' || card.suit == 'club';
                                                }).length == 1
                                            )
                                                return 8 + Math.random();
                                            return 1 + Math.random();
                                        case 'type':
                                            if (
                                                player.getCards('h', function (card) {
                                                    return get.type2(card) == 'basic' || get.type2(card) == 'trick' || get.type2(card) == 'equip';
                                                }).length == 1
                                            )
                                                return 8 + Math.random();
                                            return 0.9 + Math.random();
                                    }
                                },
                                backup(links) {
                                    var next = get.copy(lib.skill['lieshion_backupx']);
                                    next.choice = links[0];
                                    return next;
                                },
                                prompt(links) {
                                    if (links[0] == 'damage') return '废除判定区并受到1点火焰伤害';
                                    return '弃置' + get.translation(links[0]) + '最多的手牌';
                                },
                            },
                            choices: [
                                ['damage', '废除判定区并受到1点火焰伤害'],
                                ['suit', '弃置花色最多的手牌'],
                                ['type', '弃置类型最多的手牌'],
                            ],
                            ai: {
                                order(item, player) {
                                    if (!player) return;
                                    var eff = get.damageEffect(player, player, player, 'fire'),
                                        disabled = !player.storage._disableJudge;
                                    if ((player.countCards('h', 'sha') == 1 || player.countCards('h', 'shan') == 1) && eff < 0 && !disabled) return 8;
                                    else if (eff >= 0 && !disabled) return 5.8;
                                    if (!disabled && !player.countCards('h', (card) => ['sha', 'shan'].includes(card.name))) {
                                        if ((!player.hasSkill('clanhuanyin') || !player.canSave(player)) && player.hp <= 1) return 0;
                                        if (player.canSave(player) && player.hp == 1 && player.countCards('h') <= 1) return 2.6;
                                        if (player.hp < Math.max(2, 3 - player.getFriends().length) || !game.countPlayer((current) => get.attitude(player, current) < 0 && current.countCards('h', (card) => ['sha', 'shan'].includes(card.name)))) return 0;
                                    }
                                    return 2.5;
                                },
                                expose: 0.2,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                backup: {},
                                backupx: {
                                    audio: 'clanlieshi',
                                    selectCard: -1,
                                    selectTarget: -1,
                                    filterCard: () => false,
                                    filterTarget: () => false,
                                    multitarget: true,
                                    content() {
                                        'step 0';
                                        var choice = lib.skill.lieshion_backup.choice;
                                        event.choice = choice;
                                        if (choice == 'damage') {
                                            player.damage('fire');
                                            if (!player.storage._disableJudge) player.disableJudge();
                                        } else {
                                            if (choice == 'suit') {
                                                cardsx = [];
                                                var cards = player.getCards('h'),
                                                    map = {},
                                                    max = -Infinity;
                                                for (var card of cards) {
                                                    var suit = card.suit;
                                                    if (!map[suit]) map[suit] = 0;
                                                    map[suit]++;
                                                    if (map[suit] > max) max = map[suit];
                                                }
                                                for (var i in map) {
                                                    if (map[i] == max) {
                                                        for (var k = 0; k < player.getCards('h').length; k++) {
                                                            if (get.suit(player.getCards('h')[k]) == i) cardsx.push(player.getCards('h')[k]);
                                                        }
                                                    }
                                                }
                                            }
                                            if (choice == 'type') {
                                                cardsx = [];
                                                var cards = player.getCards('h'),
                                                    map = {},
                                                    max = -Infinity;
                                                for (var card of cards) {
                                                    var type = get.type2(card, player);
                                                    if (!map[type]) map[type] = 0;
                                                    map[type]++;
                                                    if (map[type] > max) max = map[type];
                                                }
                                                for (var i in map) {
                                                    if (map[i] == max) {
                                                        for (var k = 0; k < player.getCards('h').length; k++) {
                                                            if (get.type2(player.getCards('h')[k]) == i) cardsx.push(player.getCards('h')[k]);
                                                        }
                                                    }
                                                }
                                            }
                                            if (cardsx.length) player.discard(cardsx);
                                        }
                                        ('step 1');
                                        if (!player.isIn() || !game.hasPlayer((current) => current != player)) event.finish();
                                        else
                                            player.chooseTarget('烈誓:令一名其他角色选择另一项', lib.filter.notMe, true).set('ai', (target) => {
                                                var player = _status.event.player,
                                                    chosen = _status.event.parent.choice,
                                                    att = get.attitude(player, target);
                                                if (chosen == 'damage') {
                                                    if (att > 0) return 0;
                                                    return -att / 2 + target.countCards('h', (card) => ['sha', 'shan'].includes(card.name));
                                                }
                                                return get.damageEffect(target, player, player, 'fire');
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            event.target = target;
                                            player.line(target, 'fire');
                                            var list = [],
                                                choice = event.choice;
                                            var choiceList = lib.skill.lieshion.choices.slice();
                                            choiceList = choiceList.map((link, ind, arr) => {
                                                link = link[1];
                                                var ok = true;
                                                if (arr[ind][0] == choice) {
                                                    link += '(' + get.translation(player) + '已选)';
                                                    ok = false;
                                                }
                                                if (ind == 0) {
                                                    if (target.storage._disableJudge) ok = false;
                                                } else if (ind > 0) {
                                                    if (!target.countCards('h')) ok = false;
                                                }
                                                if (!ok) link = '<span style="opacity:0.5">' + link + '</span>';
                                                else list.push('选项' + get.cnNumber(ind + 1, true));
                                                return link;
                                            });
                                            if (!list.length) {
                                                event.finish();
                                                return;
                                            }
                                            target
                                                .chooseControl(list)
                                                .set('choiceList', choiceList)
                                                .set('ai', () => {
                                                    var controls = _status.event.controls.slice(),
                                                        player = _status.event.player,
                                                        user = _status.event.parent.player;
                                                    if (controls.length == 1) return controls[0];
                                                    if (controls.includes('选项一') && get.damageEffect(player, user, player, 'fire') >= 0) return '选项一';
                                                    if (controls.includes('选项一') && player.hp <= 2 && player.countCards('h', (card) => ['sha', 'shan'].includes(card.name)) <= 3) controls.remove('选项一');
                                                    if (controls.length == 1) return controls[0];
                                                    if (player.getCards('h', 'sha').reduce((p, c) => p + get.value(c, player), 0) > player.getCards('h', 'sha').reduce((p, c) => p + get.value(c, player), 0)) {
                                                        if (controls.includes('选项三')) return '选项三';
                                                    } else if (controls.includes('选项二')) return '选项二';
                                                    return controls.randomGet();
                                                });
                                        } else event.finish();
                                        ('step 3');
                                        if (result.control == '选项一') {
                                            if (!target.storage._disableJudge) target.disableJudge();
                                            target.damage('fire');
                                        } else {
                                            if (result.control == '选项二') {
                                                cardsx = [];
                                                var cards = target.getCards('h'),
                                                    map = {},
                                                    max = -Infinity;
                                                for (var card of cards) {
                                                    var suit = card.suit;
                                                    if (!map[suit]) map[suit] = 0;
                                                    map[suit]++;
                                                    if (map[suit] > max) max = map[suit];
                                                }
                                                for (var i in map) {
                                                    if (map[i] == max) {
                                                        for (var k = 0; k < target.getCards('h').length; k++) {
                                                            if (get.suit(target.getCards('h')[k]) == i) cardsx.push(target.getCards('h')[k]);
                                                        }
                                                    }
                                                }
                                            } else {
                                                cardsx = [];
                                                var cards = target.getCards('h'),
                                                    map = {},
                                                    max = -Infinity;
                                                for (var card of cards) {
                                                    var type = get.type2(card, target);
                                                    if (!map[type]) map[type] = 0;
                                                    map[type]++;
                                                    if (map[type] > max) max = map[type];
                                                }
                                                for (var i in map) {
                                                    if (map[i] == max) {
                                                        for (var k = 0; k < target.getCards('h').length; k++) {
                                                            if (get.type2(target.getCards('h')[k]) == i) cardsx.push(target.getCards('h')[k]);
                                                        }
                                                    }
                                                }
                                            }
                                            if (cardsx.length) target.discard(cardsx);
                                        }
                                    },
                                },
                            },
                        },
                        dianzhanon: {
                            audio: 'clandianzhan',
                            trigger: {
                                player: ['useCardAfter', 'damageBefore'],
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.name == 'damage') return event.nature;
                                if (!lib.suit.includes(event.card.suit)) return false;
                                var card = event.card,
                                    suit = card.suit;
                                for (var i = player.actionHistory.length - 1; i >= 0; i--) {
                                    var history = player.actionHistory[i].useCard;
                                    for (var evt of history) {
                                        if (evt == event) continue;
                                        if (evt.card.suit == suit) return false;
                                    }
                                    if (player.actionHistory[i].isRound) break;
                                }
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.chooseTarget('点盏:选择至多两名角色令其横置或重置？', [1, 2], function (card, target, player) {
                                    return target.isAlive();
                                }).ai = function (target) {
                                    return -get.attitude(player, target);
                                };
                                ('step 1');
                                if (result.bool) {
                                    for (var k = 0; k < result.targets.length; k++) {
                                        result.targets[k].link();
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                numx = game.filterPlayer(function (current) {
                                    return current.isLinked();
                                }).length;
                                if (numx > 0) {
                                    player.chooseCard('he', [1, numx], '点盏:是否重铸至多' + get.cnNumber(numx) + '张牌？').set('ai', function (card) {
                                        val = get.value(card);
                                        return 7 - val;
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.lose(result.cards, ui.discardPile);
                                    player.$throw(result.cards, 1000);
                                    game.log(player, '重铸了', result.cards);
                                    player.draw(result.cards.length).log = false;
                                }
                            },
                        },
                        huanyinon: {
                            audio: 'clanhuanyin',
                            trigger: {
                                player: ['damageAfter', 'linkAfter', 'linkBegin', 'dying', 'dyingAfter'],
                            },
                            filter(event, player, name) {
                                if (name == 'linkBegin') return !player.isLinked();
                                if (name == 'linkAfter') return !player.isLinked();
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (event.triggername == 'linkBegin' || event.triggername == 'dying') if (player.num('h') < 4) player.draw(4 - player.num('h'));
                                if (event.triggername == 'damageAfter') player.link();
                                if (event.triggername == 'linkAfter' || event.triggername == 'dyingAfter') player.recover();
                            },
                        },
                        yimieon: {
                            audio: 'yimie',
                            trigger: {
                                source: 'damageBegin',
                            },
                            content() {
                                trigger.num = trigger.player.maxHp;
                                player.loseHp();
                            },
                        },
                        tairanon: {
                            audio: 'tairan',
                            trigger: {
                                global: 'roundStart',
                                player: 'phaseAfter',
                            },
                            filter(event, player) {
                                return player.hasSkill('tairanon');
                            },
                            check(event, player) {
                                var cards = [],
                                    names = [];
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var card = ui.discardPile.childNodes[i];
                                    if (get.type(card, false) == 'basic' && !names.includes(card.name)) {
                                        cards.push(card);
                                        names.push(card.name);
                                    }
                                }
                                if (!names.includes('shan') || !names.includes('tao')) return false;
                                if (player.countCards('h', 'shan') < 2 && player.countCards('h', 'tao') < 1) return true;
                                return false;
                            },
                            content() {
                                'step 0';
                                if (player.maxHp < 10) player.gainMaxHp();
                                ('step 1');
                                player.hp = player.maxHp;
                                ('step 2');
                                var cards = [],
                                    names = [];
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var card = ui.discardPile.childNodes[i];
                                    if (get.type(card, false) == 'basic' && !names.includes(card.name)) {
                                        cards.push(card);
                                        names.push(card.name);
                                    }
                                }
                                if (cards.length) player.gain(cards, 'gain2');
                            },
                        },
                        suzhion: {
                            audio: 'ext:风起雨落/audio:4',
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            check: () => true,
                            prompt2: '你可以获得以下效果直到本回合结束',
                            content() {
                                player.addTempSkill('suzhion_Buff1', 'phaseEnd');
                                player.addTempSkill('suzhion_Buff2', 'phaseEnd');
                                player.addTempSkill('suzhion_Buff3', 'phaseEnd');
                            },
                            derivation: 'refankui',
                            group: 'suzhion_Deputy',
                            subSkill: {
                                Deputy: {
                                    audio: 'suzhion',
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var num = 3;
                                        if (
                                            game.hasPlayer(function (current) {
                                                return current.name1 == 'simashion' || current.name2 == 'simashion';
                                            })
                                        ) {
                                            game.log(player, '得到了', '【☆司马师】', '的肯定!');
                                            var num = 5;
                                            var n = [1, 2].randomGet();
                                            if (n == 1) game.playAudio('../extension/第叁幻界/audio/RoleSkills/Authentic/dshj_JBsimazhao1.mp3');
                                            if (n == 2) game.playAudio('../extension/第叁幻界/audio/RoleSkills/Authentic/dshj_JBsimazhao2.mp3');
                                        }
                                        player.draw(num);
                                        player.chooseToDiscard(1, 'he', true);
                                        ('step 1');
                                        player.addTempSkill('refankui', { player: 'phaseZhunbeiBegin' });
                                    },
                                },
                                Buff1: {
                                    audio: 'suzhion',
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    usable: 3,
                                    charlotte: true,
                                    mark: true,
                                    marktext: '昭',
                                    intro: {
                                        name2: '昭',
                                        content: '行昭然于世,慑众贼以威!',
                                    },
                                    filter(event, player) {
                                        return get.type(event.card) != 'basic';
                                    },
                                    content() {
                                        'step 0';
                                        if (get.type(trigger.card, 'trick') == 'trick') {
                                            player.draw();
                                            event.finish();
                                        } else {
                                            player
                                                .chooseTarget('你可以弃置其他角色区域内1张牌', function (card, player, target) {
                                                    return target.countDiscardableCards(player, 'hej');
                                                })
                                                .set('ai', function (target) {
                                                    return -get.attitude(_status.event.player, target);
                                                });
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.discardPlayerCard(result.targets[0], 'hej', true);
                                        }
                                    },
                                    ai: {
                                        expose: 0.2,
                                    },
                                },
                                Buff2: {
                                    audio: 'suzhion',
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    usable: 3,
                                    charlotte: true,
                                    logTarget: 'player',
                                    prompt2: '当你使用【杀】/【决斗】/【火攻】造成伤害时,你可以令此伤害+1',
                                    filter(event, player) {
                                        return event.card && (event.card.name == 'sha' || event.card.name == 'juedou' || event.card.name == 'huogong');
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        damageBonus: true,
                                    },
                                },
                                Buff3: {
                                    audio: 'suzhion',
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    usable: 3,
                                    charlotte: true,
                                    prompt2: '当有其他角色于你的回合内弃置牌后,你可以获得其中一张',
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        if (event.type != 'discard') return false;
                                        if (event.player == player) return false;
                                        return event.cards2 && event.cards2.filterInD('d').length;
                                    },
                                    content() {
                                        'step 0';
                                        var cards = trigger.cards2.filterInD('d');
                                        if (cards.length == 1) {
                                            event._result = {
                                                bool: true,
                                                links: cards,
                                            };
                                        } else player.chooseButton(['请选择获得其中一张牌', cards], true);
                                        ('step 1');
                                        if (result.bool) player.gain(result.links[0], 'gain2');
                                    },
                                },
                            },
                        },
                        suzhion_Deputy: {
                            audio: 'suzhion',
                            trigger: {
                                player: 'phaseJieshuBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var num = 3;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.name1 == 'simashion' || current.name2 == 'simashion';
                                    })
                                ) {
                                    game.log(player, '得到了', '【☆司马师】', '的肯定!');
                                    var num = 5;
                                    var n = [1, 2].randomGet();
                                    if (n == 1) game.playAudio('../extension/第叁幻界/audio/RoleSkills/Authentic/dshj_JBsimazhao1.mp3');
                                    if (n == 2) game.playAudio('../extension/第叁幻界/audio/RoleSkills/Authentic/dshj_JBsimazhao2.mp3');
                                }
                                player.draw(num);
                                player.chooseToDiscard(1, 'he', true);
                                ('step 1');
                                player.addTempSkill('refankui', { player: 'phaseZhunbeiBegin' });
                            },
                        },
                        zhaoxinon: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: ['phaseZhunbeiBegin', 'damageEnd'],
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.showHandcards();
                                player.chooseTarget(get.prompt2('zhaoxinon'));
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    event.index = 0;
                                    var list = ['令' + get.translation(target) + '摸两张牌'];
                                    if (target.countCards('he')) {
                                        list.add('令' + get.translation(target) + '弃两张牌');
                                    } else event.index++;
                                    if (target != player) list.add('与' + get.translation(target) + '交换手牌');
                                    player
                                        .chooseControl(function () {
                                            return 0;
                                        })
                                        .set('choiceList', list)
                                        .set('target', target);
                                } else event.finish();
                                ('step 2');
                                if (result.index == 0) event.target.draw(2);
                                if (result.index + event.index == 1) event.target.chooseToDiscard('he', 2, true);
                                if (result.index + event.index == 2) event.player.swapHandcards(target);
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        yingzion: {
                            audio: 'sbyingzi',
                            trigger: {
                                player: 'drawBegin',
                            },
                            forced: true,
                            filter(event, player) {
                                return !event.numFixed;
                            },
                            content() {
                                trigger.num += player.hp;
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            mod: {
                                maxHandcardBase(player, num) {
                                    return num + player.hp;
                                },
                            },
                        },
                        fanjianon: {
                            audio: 'sbfanjian',
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                return player.countCards('h');
                            },
                            filterCard: true,
                            selectCard: [1, Infinity],
                            position: 'h',
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            content() {
                                'step 0';
                                player.$give(cards, target);
                                target.gain(cards, player);
                                ('step 1');
                                target
                                    .chooseControl()
                                    .set('choiceList', ['受到等量的伤害', '将武将牌翻面', '交给你所有手牌'])
                                    .set('ai', function () {
                                        if (target.countCards('h') < 4) return 2;
                                        if (target.isTurnedOver()) return 1;
                                        if (cards.length < 2) return 0;
                                        return 1;
                                    });
                                ('step 2');
                                if (result.index == 0) {
                                    target.damage(cards.length);
                                    event.finish();
                                }
                                if (result.index == 1) {
                                    target.turnOver();
                                    event.finish();
                                }
                                if (result.index == 2) {
                                    target.$give(target.getCards('h'), player);
                                    player.gain(target.getCards('h'), target);
                                    event.finish();
                                }
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        if (target.hp > 3) return -1;
                                        return -target.countCards('h') - 2;
                                    },
                                },
                                order: 8,
                                threaten: 0.5,
                            },
                        },
                        liaohuoon: {
                            audio: 'yeyan',
                            trigger: {
                                global: 'gainAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                return _status.currentPhase == player && player != event.player && player.countCards('he', { color: 'red' }) > 0;
                            },
                            check(card) {
                                return 8 - get.value(card);
                            },
                            line: 'fire',
                            content() {
                                'step 0';
                                var next = player.chooseToDiscard('是否对' + get.translation(trigger.player) + '发动【燎火】？', 'he', { color: 'red' });
                                ('step 1');
                                if (result.bool) {
                                    trigger.player.damage('fire', player);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        yongjinon: {
                            trigger: {
                                global: 'useCard',
                            },
                            audio: 'ext:风起雨落/audio:2',
                            filter(event, player) {
                                return event.card.name == 'sha' && (event.targets[0] == player || event.player == player) && event.targets.length == 1;
                            },
                            logTarget(event, player) {
                                var listx = []; //QQQ
                                listx.push(event.player);
                                listx.push(event.targets[0]);
                                return listx;
                            },
                            prompt(event, player) {
                                return '勇进:是否令' + get.translation(event.card) + '无法响应？';
                            },
                            content() {
                                'step 0';
                                trigger.directHit.addArray(game.players);
                                player.judge(function (card) {
                                    if (trigger.player == player) {
                                        if (card.suit == 'spade') return -6;
                                    } else {
                                        if (card.suit != 'spade') return -6;
                                    }
                                    return 0;
                                }, event.judgestr).judge2 = (result) => result.bool === false;
                                ('step 1');
                                if (result.suit == 'spade') {
                                    targetx = trigger.targets[0];
                                    playerx = trigger.player;
                                    trigger.player = targetx;
                                    trigger.targets[0] = playerx;
                                }
                            },
                            group: 'yongjinon_use',
                            subSkill: {
                                use: {
                                    mod: {
                                        targetInRange(card) {
                                            if (_status.event.skill == 'yongjinon_use') return true;
                                        },
                                    },
                                    enable: 'chooseToUse',
                                    filter(event, player) {
                                        var card = { name: 'sha', nature: 'stab' };
                                        if (event.filterCard(card, player, event))
                                            return (
                                                player.getCards('hes', function (card) {
                                                    return card.name == 'shan';
                                                }).length > 1 ||
                                                player.getCards('hes', function (card) {
                                                    return get.type(card) == 'equip';
                                                }).length
                                            );
                                        return false;
                                    },
                                    filterCard(card) {
                                        if (!ui.selected.cards.length) return card.name == 'shan' || get.type(card) == 'equip';
                                        return card.name == 'shan';
                                    },
                                    selectCard(card, player) {
                                        if (!ui.selected.cards.length) return 1;
                                        if (ui.selected.cards[0].name == 'shan') return 2;
                                        return 1;
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'stab',
                                    },
                                    viewAsFilter(player) {
                                        return (
                                            player.getCards('hes', function (card) {
                                                return card.name == 'shan';
                                            }).length > 1 ||
                                            player.getCards('hes', function (card) {
                                                return get.type(card) == 'equip';
                                            }).length
                                        );
                                    },
                                    position: 'hes',
                                    popname: true,
                                    ignoreMod: true,
                                    prompt: '勇进:是否弃置两张【闪】或一张装备牌视为使用一张无距离限制的刺【杀】？',
                                    precontent() {
                                        'step 0';
                                        var card = event.result.cards;
                                        event.card = card;
                                        player.discard(card);
                                        event.result.card = {
                                            name: event.result.card.name,
                                            nature: 'stab',
                                        };
                                        event.result.cards = [];
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (get.zhu(player, 'shouyue')) {
                                                if (!player.countCards('hes')) return false;
                                            } else {
                                                if (!player.countCards('hes', { color: 'red' })) return false;
                                            }
                                        },
                                        respondSha: true,
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order(item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (game.hasNature(item, 'linked')) {
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
                                                if (game.hasNature(card, 'poison')) return;
                                                return 1;
                                            },
                                            natureDamage(card) {
                                                if (game.hasNature(card)) return 1;
                                            },
                                            fireDamage(card, nature) {
                                                if (game.hasNature(card, 'fire')) return 1;
                                            },
                                            thunderDamage(card, nature) {
                                                if (game.hasNature(card, 'thunder')) return 1;
                                            },
                                            poisonDamage(card, nature) {
                                                if (game.hasNature(card, 'poison')) return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        yongjinX: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: ['phaseBegin', 'damageEnd'],
                            },
                            filter(event, player) {
                                var card = get.discardPile(function (card) {
                                    return get.type(card, false) == 'equip';
                                });
                                return (
                                    card ||
                                    game.hasPlayer(function (current) {
                                        return current.countCards('e');
                                    })
                                );
                            },
                            content() {
                                'step 0';
                                player.chooseTarget(get.prompt('yongjinon'), '令一名角色从场上或弃牌堆随机获得一件装备牌并使用之').set('ai', function (target) {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    list = [];
                                    var card = get.discardPile(function (card) {
                                        return get.type(card, false) == 'equip' && target.canUse(card, target);
                                    });
                                    if (card) list.add(card);
                                    for (var i = 0; i < game.players.length; i++) {
                                        if (game.players[i].countCards('e')) {
                                            var hs = game.players[i].getCards('e');
                                            for (var j = 0; j < hs.length; j++) {
                                                if (target.canUse(hs[j], target)) list.add(hs[j]);
                                            }
                                        }
                                    }
                                    var equip = list.randomGet();
                                    target.gain(equip, 'gain2');
                                    target.chooseUseTarget(equip, true, 'nopopup');
                                }
                            },
                            group: 'yongjinon_stab',
                            subSkill: {
                                stab: {
                                    audio: 'yongjinon',
                                    enable: 'chooseToUse',
                                    mod: {
                                        targetInRange(card) {
                                            if (_status.event.skill == 'yongjinon_stab') return true;
                                        },
                                    },
                                    viewAsFilter(player) {
                                        return player.hasCard(function (card) {
                                            return get.type(card) == 'equip';
                                        }, 'hes');
                                    },
                                    position: 'hes',
                                    selectCard: 1,
                                    prompt: '将一张装备牌当作刺【杀】使用',
                                    filterCard: {
                                        type: 'equip',
                                    },
                                    viewAs: {
                                        name: 'sha',
                                        nature: 'stab',
                                        storage: {
                                            yongjinon: true,
                                        },
                                    },
                                    check(card) {
                                        return 6 - get.value(card);
                                    },
                                    ai: {
                                        respondSha: true,
                                        skillTagFilter(player) {
                                            return player.hasCard(function (card) {
                                                return get.type(card) == 'equip';
                                            }, 'hes');
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
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
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
                                            player(player, target, card) {
                                                if (_status.mode == 'normal') {
                                                    var numz = game.countPlayer(function (current) {
                                                        return current.identity == 'zhong' || current.identity == 'mingzhong';
                                                    });
                                                    var numf = game.countPlayer(function (current) {
                                                        return current.identity == 'fan';
                                                    });
                                                    if (player.identity == 'nei' && numf > 0 && numz > 0 && (player.hasSkill('shanheyonggu_tz') || player.hasSkill('shanheyonggu_tf'))) {
                                                        if (target.identity == 'zhu') {
                                                            return -999;
                                                        }
                                                    }
                                                }
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
                            },
                        },
                        tuishion: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'showCharacterAfter',
                            },
                            hiddenSkill: true,
                            forced: true,
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt('tuishion'), '令一名角色失去1点体力', function (card, player, target) {
                                        return player != target;
                                    })
                                    .set('autodelay', true).ai = function (target) {
                                        return num;
                                    };
                                ('step 1');
                                if (result.bool) {
                                    result.targets[0].loseHp();
                                }
                            },
                        },
                        luanjion: {
                            audio: 'reluanji',
                            enable: 'phaseUse',
                            position: 'hs',
                            viewAs(cards, player) {
                                var name = false;
                                switch (cards[0]?.suit) {
                                    case 'heart':
                                        name = 'wuzhong';
                                        break;
                                    case 'club':
                                        name = 'guohe';
                                        break;
                                    case 'diamond':
                                        name = 'taoyuan';
                                        break;
                                    case 'spade':
                                        name = 'shunshou';
                                        break;
                                }
                                if (name) return { name: name };
                                return null;
                            },
                            filterCard(card, player) {
                                if (player.storage.yaozztaiping && player.storage.yaozztaiping.includes(card.suit)) return false;
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
                            check(card) {
                                var cardname;
                                switch (card.suit) {
                                    case 'heart':
                                        cardname = 'wuzhong';
                                        break;
                                    case 'club':
                                        cardname = 'guohe';
                                        break;
                                    case 'diamond':
                                        cardname = 'taoyuan';
                                        break;
                                    case 'spade':
                                        cardname = 'shunshou';
                                        break;
                                }
                                var player = _status.event.player;
                                var targets = game.filterPlayer(function (current) {
                                    return player.canUse(cardname, current);
                                });
                                var num = 0;
                                for (var i = 0; i < targets.length; i++) {
                                    var eff = get.sgn(get.effect(targets[i], { name: cardname }, player, player));
                                    if (targets[i].hp == 1) {
                                        eff *= 1.5;
                                    }
                                    num += eff;
                                }
                                if (!player.needsToDiscard(-1)) {
                                    if (targets.length >= 7) {
                                        if (num < 2) return 0;
                                    } else if (targets.length >= 5) {
                                        if (num < 1.5) return 0;
                                    }
                                }
                                return 6 - get.value(card);
                            },
                            ai: {
                                basic: {
                                    order: 8.5,
                                },
                            },
                            group: ['luanji'],
                        },
                        mingmenon: {
                            audio: 'olxueyi',
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.mingmenon != true) return '回合开始时,你回复1点体力,视为拥有[图射]直至你下回合开始.';
                                    return '回合开始时,你受到1点火焰伤害,视为拥有[英姿]直到你下回合开始';
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('mingmenon');
                                if (player.storage.mingmenon != true) {
                                    player.damage('fire');
                                    player.addTempSkill('yingzion', { player: 'phaseBegin' });
                                } else {
                                    player.recover();
                                    player.addTempSkill('xinfu_tushe', { player: 'phaseBegin' });
                                }
                            },
                        },
                        xueyion: {
                            audio: 'olluanji',
                            forced: true,
                            firstDo: true,
                            trigger: {
                                player: 'useCard2',
                            },
                            forced: true,
                            filter(event, player) {
                                var type = get.type(event.card);
                                return type == 'trick';
                            },
                            content() {
                                'step 0';
                                var goon = false;
                                var num = Math.min(game.countPlayer((current) => current.group == 'qun'));
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
                                    player
                                        .chooseTarget([1, num], '为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(num) + '个目标', function (card, player, target) {
                                            var trigger = _status.event;
                                            if (trigger.targets.includes(target)) return false;
                                            return lib.filter.targetEnabled2(trigger.card, _status.event.player, target);
                                        })
                                        .set('ai', function (target) {
                                            var trigger = _status.event.getTrigger();
                                            var player = _status.event.player;
                                            if (trigger.card.name == 'juedou') return false;
                                            return get.effect(target, trigger.card, player, player);
                                        })
                                        .set('card', trigger.card)
                                        .set('targets', trigger.targets);
                                } else {
                                    if (!info.multitarget && trigger.targets && trigger.targets.length > 1) {
                                        event.goto(3);
                                    }
                                }
                                ('step 1');
                                if (result.bool) {
                                    if (!event.isMine()) event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (event.targets) {
                                    trigger.targets.addArray(event.targets);
                                }
                                event.finish();
                                ('step 3');
                                var num = Math.min(game.countPlayer((current) => current.group == 'qun'));
                                player
                                    .chooseTarget([1, num], '为' + get.translation(trigger.card) + '减少至多' + get.cnNumber(num) + '个目标', function (card, player, target) {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        var trigger = _status.event.getTrigger();
                                        if (trigger.card.name == 'wugu' || trigger.card.name == 'taoyuan') {
                                            return get.attitude(player, target) < 0;
                                        }
                                        if (get.tag(trigger.card, 'damage')) {
                                            return get.attitude(player, target) > 0;
                                        } else {
                                            return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                                        }
                                    })
                                    .set('targets', trigger.targets);
                                ('step 4');
                                if (result.bool) {
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
                            },
                            ai: {
                                effect: {
                                    player(card, player, target) {
                                        if (get.itemtype(target) == 'player') {
                                            if (card.name == 'nanman' || card.name == 'wanjian' || card.name == 'wugu') {
                                                return [1, 1];
                                            }
                                            var ssdy = game.countPlayer(function (current) {
                                                return current.getDamagedHp() && get.attitude(current, player) > 0;
                                            });
                                            if (ssdy > 0) {
                                                if (card.name == 'taoyuan') {
                                                    return [1, 1];
                                                }
                                            }
                                        }
                                    },
                                },
                            },
                            mod: {
                                maxHandcard(player, num) {
                                    if (player.hasSkill('xueyion')) {
                                        return num + 2 * game.countPlayer((current) => current.group == 'qun');
                                    }
                                },
                            },
                        },
                        dinghanX: {
                            audio: 'dinghanon',
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            forced: true,
                            filter(event, player) {
                                return get.type2(event.card) == 'trick' && !player.getStorage('dinghanon').includes(event.card.name);
                            },
                            content() {
                                player.markAuto('dinghanon', [trigger.card.name]);
                                game.log(player, '向定汉记录中添加了', '#y' + get.translation(trigger.card.name));
                                trigger.targets.remove(player);
                                trigger.parent.triggeredTargets2.remove(player);
                                trigger.untrigger();
                            },
                            intro: {
                                content: '已记录牌名:$',
                            },
                            group: ['dinghanon_add', 'dinghanon_count'],
                            subSkill: {
                                add: {
                                    enable: 'chooseToUse',
                                    audio: 'ext:浪琴天阙/audio:2',
                                    filter(event, player) {
                                        if (player.getStat('skill').dinghanon_add_backup > 0 || !player.countCards('hes') || _status.currentPhase != player) return false;
                                        for (var i of lib.inpile) {
                                            if (get.type2(i) == 'trick' && event.filterCard({ name: i }, player, event)) return true;
                                        }
                                        return false;
                                    },
                                    hiddenCard(player, name) {
                                        if (player.getStat('skill').dinghanon_add_backup > 0) return false;
                                        return _status.currentPhase == player && get.type(name) == 'trick' && player.countCards('hes');
                                    },
                                    chooseButton: {
                                        dialog(event, player) {
                                            var list = [],
                                                list1 = [];
                                            for (var i = 0; i < lib.inpile.length; i++) {
                                                var name = lib.inpile[i];
                                                if (get.type2(name) == 'trick' && event.filterCard({ name: name }, player, event)) {
                                                    if (player.getStorage('dinghanon').includes(name)) list.push(['锦囊', '', name]);
                                                    else list1.push(['锦囊', '', name]);
                                                }
                                            }
                                            var dialog = ui.create.dialog('<font size=6>选择一张牌使用', '<font size=3>', 'hidden');
                                            if (list.length) {
                                                dialog.add('已记录的牌');
                                                dialog.add([list, 'vcard']);
                                            }
                                            if (list1.length) {
                                                dialog.add('未记录的牌');
                                                dialog.add([list1, 'vcard']);
                                            }
                                            return dialog;
                                        },
                                        filter(button, player) {
                                            return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                        },
                                        check(button) {
                                            if (_status.event.parent.type != 'phase') return 1;
                                            var player = _status.event.player;
                                            if (!player.getStorage('dinghanon').includes(button.link[2])) return 1;
                                            return player.getUseValue({
                                                name: button.link[2],
                                                nature: button.link[3],
                                            });
                                        },
                                        backup(links, player) {
                                            return {
                                                filterCard: true,
                                                popname: true,
                                                selectCard: 1,
                                                check(card) {
                                                    return 7 - get.value(card);
                                                },
                                                position: 'hes',
                                                viewAs: { name: links[0][2], nature: links[0][3] },
                                                onuse(result, player) {
                                                    if (player.getStorage('dinghanon').includes(result.card.name)) {
                                                        player.unmarkAuto('dinghanon', [result.card.name]);
                                                        game.log(player, '从定汉记录中移除了', '#y' + get.translation(result.card.name));
                                                    } else player.storage.dinghanon2 = result.card;
                                                },
                                            };
                                        },
                                        prompt(links, player) {
                                            return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                                        },
                                    },
                                    ai: {
                                        skillTagFilter(player) {
                                            if (!player.countCards('hes') || player.getStat('skill').dinghanon_backup > 0) return false;
                                            return true;
                                        },
                                        order: 1,
                                        result: {
                                            player(player) {
                                                return 1;
                                            },
                                        },
                                    },
                                },
                                count: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 200,
                                    filter(event, player) {
                                        return player.storage.dinghanon2 == event.card;
                                    },
                                    content() {
                                        player.markAuto('dinghanon', [trigger.card.name]);
                                        game.log(player, '向定汉记录中添加了', '#y' + get.translation(trigger.card.name));
                                        delete player.storage.dinghanon2;
                                    },
                                    _priority: 20000,
                                },
                            },
                        },
                        dinghanon: {
                            group: ['dinghanon1', 'dinghanon2'],
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'chooseToUse',
                            usable: 1,
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
                                    return ui.create.dialog('定汉', [list, 'vcard']);
                                },
                                check(button) {
                                    return _status.event.player.getUseValue({ name: button.link[2] });
                                },
                                backup(links, player) {
                                    return {
                                        audio: 'dinghan',
                                        viewAs: {
                                            name: links[0][2],
                                        },
                                        filterCard: () => false,
                                        selectCard: -1,
                                        popname: true,
                                    };
                                },
                                prompt(links, player) {
                                    return '请选择' + get.translation(links[0][2]) + '的目标';
                                },
                            },
                            ai: {
                                order: 1,
                                result: {
                                    player: 1,
                                },
                            },
                        },
                        dinghanon1: {
                            audio: 'dinghanon',
                            trigger: {
                                target: 'useCardToBefore',
                            },
                            forced: true,
                            check(event, player) {
                                return get.effect(event.target, event.card, event.player, player) < 0;
                            },
                            filter(event, player) {
                                return get.type(event.card, 'trick') == 'trick' && event.player != player;
                            },
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.type(card, 'trick') == 'trick' && get.distance(player, target) > 1) return 'zeroplayertarget';
                                    },
                                },
                            },
                        },
                        dinghanon2: {
                            audio: 'dinghanon',
                            trigger: {
                                target: 'useCardToTargeted',
                                player: 'addJudgeBefore',
                            },
                            forced: true,
                            _priority: 535,
                            filter(event, player) {
                                return get.type(event.card) == 'delay' && event.player != player;
                            },
                            content() {
                                if (trigger.name == 'addJudge') {
                                    trigger.cancel();
                                    var owner = get.owner(trigger.card);
                                    if (owner && owner.getCards('hej').includes(trigger.card)) owner.lose(trigger.card, ui.discardPile);
                                    else game.cardsDiscard(trigger.card);
                                    game.log(trigger.card, '进入了弃牌堆');
                                } else trigger.parent.excluded.add(player);
                            },
                        },
                        renhuaion: {
                            audio: 'rerende',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            zhuanhuanji: true,
                            mark: true,
                            marktext: '☯',
                            init(player) {
                                player.storage.renhuaion = false;
                            },
                            intro: {
                                mark(dialog, content, player) {
                                    if (player.storage.renhuaion != false) return '准备阶段,你可视为使用一张【五谷丰登】';
                                    else return '准备阶段,你可视为使用一张【桃园结义】';
                                },
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.storage.renhuaion != false) str = '【五谷丰登】且其获得牌时,你摸等量牌';
                                else str = '【桃园结义】且分别获得『武圣』和『咆哮』';
                                player
                                    .chooseTarget(
                                        [1, 2],
                                        function (card, player, target) {
                                            return target.isAlive() && target != _status.event.player;
                                        },
                                        '仁怀:是否选择至多两名其他角色,视为对你与其视为使用一张' + str + '？'
                                    )
                                    .set('ai', function (target) {
                                        if (_status.event.player.storage.renhuaion != false) namex = 'wugu';
                                        else namex = 'taoyuan';
                                        return get.attitude(_status.event.player, target) > 0 && _status.event.player.canUse(namex, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    listx = [player];
                                    for (var i = 0; i < result.targets.length; i++) {
                                        listx.push(result.targets[i]);
                                        if (player.storage.renhuaion != false) result.targets[i].addSkill('renhuaion_gain');
                                        else if (i < 1) {
                                            if (!result.targets[i].hasSkill('wushengon')) result.targets[i].addSkillLog('renhuaion_wusheng');
                                        } else {
                                            if (!result.targets[i].hasSkill('paoxiaoon')) result.targets[i].addSkillLog('renhuaion_paoxiao');
                                        }
                                    }
                                    if (player.storage.renhuaion != false) namex = 'wugu';
                                    else namex = 'taoyuan';
                                    player.useCard({ name: namex }, listx, false);
                                    player.changeZhuanhuanji('renhuaion');
                                } else {
                                    if (player.storage.renhuaion != false) namex = 'wugu';
                                    else namex = 'taoyuan';
                                    player.useCard({ name: namex }, player, false);
                                    player.changeZhuanhuanji('renhuaion');
                                }
                            },
                            group: 'renhuaion_clear',
                            subSkill: {
                                clear: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        for (var i = 0; i < game.players.length; i++) {
                                            game.players[i].removeSkill('renhuaion_wusheng');
                                            game.players[i].removeSkill('renhuaion_paoxiao');
                                            game.players[i].removeSkill('renhuaion_gain');
                                        }
                                    },
                                    popup: false,
                                },
                                gain: {
                                    trigger: {
                                        player: 'gainEnd',
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    content() {
                                        list = game.filterPlayer(function (current) {
                                            return current.hasSkill('renhuaion');
                                        });
                                        list[0].draw(trigger.cards.length);
                                    },
                                    popup: false,
                                },
                            },
                        },
                        renhuaion_wusheng: {
                            group: ['wushengon', 'wushengon1', 'wushengon2'],
                        },
                        renhuaion_paoxiao: {
                            group: ['paoxiao', 'paoxiaoon', 'paoxiaoon1'],
                        },
                        juyion: {
                            audio: 'nzry_jieying',
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (
                                    game.hasPlayer(function (current) {
                                        return current.hasSkill('juyion_mark');
                                    })
                                ) {
                                    player.loseHp(
                                        game.filterPlayer(function (current) {
                                            return current.hasSkill('juyion_mark');
                                        }).length
                                    );
                                    game.countPlayer(function (current) {
                                        current.removeSkill('juyion_mark');
                                    });
                                }
                                ('step 1');
                                player.addSkill('juyion_mark');
                            },
                            group: ['juyion_direct', 'juyion_cancel'],
                            subSkill: {
                                mark: {
                                    mark: true,
                                    marktext: '义',
                                    intro: {
                                        content: '你拥有<义>',
                                    },
                                },
                                direct: {
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    silent: true,
                                    forced: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player.hasSkill('juyion_mark');
                                    },
                                    content() {
                                        trigger.cancel();
                                    },
                                    popup: false,
                                },
                                cancel: {
                                    trigger: {
                                        global: 'damageBegin4',
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0;
                                    },
                                    filter(event, player) {
                                        return !event.player.hasSkill('juyion_mark');
                                    },
                                    prompt(event, player) {
                                        return '聚义:是否防止此次伤害并令其获得<义>？(对象:' + get.translation(event.player) + ',伤害值:' + get.cnNumber(event.num) + ')';
                                    },
                                    content() {
                                        trigger.cancel();
                                        trigger.player.addSkill('juyion_mark');
                                    },
                                },
                            },
                        },
                        zhengfaon: {
                            audio: 'nzry_longnu',
                            trigger: {
                                player: 'dieBefore',
                            },
                            limited: true,
                            forced: true,
                            forceDie: true,
                            firstDo: true,
                            content() {
                                'step 0';
                                player.awakenSkill('zhengfaon');
                                trigger.cancel();
                                ('step 1');
                                if (player.num('h') <= 4) player.draw(4 - player.num('h'));
                                else player.chooseToDiscard('h', true, player.num('h') - 4);
                                player.maxHp = 4;
                                player.hp = 4;
                                player.awakenSkill('renhuaion');
                                player.addSkillLog('chouxion');
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        chouxion: {
                            audio: 'nzry_longnu',
                            usable: 1,
                            srlose: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return player.countCards('h') > 0;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                return 6 - get.value(card);
                            },
                            filterCard: true,
                            content() {
                                'step 0';
                                event.cards1 = get.cards(3);
                                player.showCards(event.cards1);
                                event.types = [];
                                for (var c of event.cards1) {
                                    event.types.add(get.type(c, 'trick'));
                                }
                                event.types.sort();
                                var prompt = '弃置一张与展示牌类别均不同的牌,让' + get.translation(player) + '获得' + get.translation(event.cards1) + ',或受到来自' + get.translation(player) + '的2点伤害并获得其中一种类别的牌.';
                                event.dialog = ui.create.dialog(prompt, 'hidden');
                                event.dialog.classList.add('noselect');
                                event.dialog.add(event.cards1);
                                player.line(target);
                                var cardDiff = 0; // value from card ownership
                                for (var type of event.types) {
                                    var newCardDiff = event.cards1.filter((c) => get.type(c) == type).reduce((a, b) => a - get.value(b, player) * Math.sign(get.attitude(target, player)) + get.value(b, target), 0);
                                    if (newCardDiff > cardDiff) {
                                        cardDiff = newCardDiff;
                                    }
                                }
                                target
                                    .chooseToDiscard(dialog, function (card) {
                                        let event = _status.event.parent;
                                        return !event.types.includes(get.type(card, 'trick'));
                                    })
                                    .set('ai', function (card) {
                                        if (card.name == 'tao') return -1;
                                        return _status.event.diff - get.value(card);
                                    })
                                    .set('diff', 2.5 * get.damageEffect(target, player) - cardDiff);
                                ('step 1');
                                if (result.bool) {
                                    player.gain(event.cards1, 'gain2');
                                    event.finish();
                                } else {
                                    target.damage(2);
                                }
                                ('step 2');
                                if (!target.isAlive()) {
                                    event.finish();
                                    return;
                                }
                                if (event.types.length == 1) {
                                    return;
                                }
                                let values = {};
                                for (var c of event.cards1) {
                                    var type = get.type2(c);
                                    values[type] = values[type] || 0;
                                    values[type] += get.value(c, player) + (get.attitude(player, target) < -1 ? get.value(c, target) : 0);
                                }
                                if (values) {
                                    event.choice = Object.keys(values)[0];
                                    for (var type in values) {
                                        if (values[type] > values[event.choice]) {
                                            event.choice = type;
                                        }
                                    }
                                }
                                var dialog = ui.create.dialog('仇袭:选择一种类型的卡牌卡牌获得之', event.cards1);
                                target.chooseControl(event.types, dialog, function (event, player) {
                                    return event.choice;
                                });
                                ('step 3');
                                var cards = [[], []];
                                if (event.types.length == 1) {
                                    event.type = event.types[0];
                                } else {
                                    event.type = result.control;
                                }
                                target.popup(event.type);
                                for (var card of event.cards1) {
                                    if (get.type(card, 'trick') == event.type) {
                                        cards[0].push(card);
                                    } else {
                                        cards[1].push(card);
                                    }
                                }
                                target.gain(cards[0], 'gain2');
                                player.gain(cards[1], 'gain2');
                            },
                            ai: {
                                order: 4,
                                result: {
                                    player: 0.5,
                                    target: -1,
                                },
                            },
                        },
                        zhaohanon: {
                            audio: 'zhaohan',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                if (player.hp + player.hujia <= 7) {
                                    player.gainMaxHp();
                                    player.recover();
                                    event.finish();
                                } else {
                                    player.loseMaxHp();
                                    player.changeHujia(1);
                                    player
                                        .chooseTarget(get.prompt('zhaohanon'), '视为对已受伤的一名其他角色使用一张【杀】？', (card, player, target) => {
                                            return player.canUse('sha', target, false) && target.hp < target.maxHp;
                                        })
                                        .set('ai', (target) => {
                                            return get.effect(target, { name: 'sha' }, _status.event.player);
                                        });
                                }
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.useCard({ name: 'sha' }, target, false);
                                }
                            },
                        },
                        rangjieon: {
                            trigger: {
                                player: 'damageEnd',
                            },
                            audio: 'rangjie',
                            content() {
                                'step 0';
                                player.draw();
                                var list = ['获得牌堆中至多两张牌名不同的牌', '移动一名角色区域中的任意张牌', '移动一名角色的一个技能'];
                                next = player.chooseButton([
                                    '让节:请选择需要执行的选项',
                                    [
                                        list.map((item, i) => {
                                            return [i, item];
                                        }),
                                        'textbutton',
                                    ],
                                ]);
                                next.set('forced', true);
                                next.set('selectButton', 1);
                                next.set('filterButton', function (button) {
                                    player = _status.event.player;
                                    if (button.link == 0) {
                                        return ui.cardPile.childElementCount > 0;
                                    }
                                    if (button.link == 1) {
                                        return player.canMoveCard();
                                    }
                                    return true;
                                });
                                next.set('ai', function (button) {
                                    var player = _status.event.player;
                                    listx = _status.event.listx;
                                    if (listx.includes(button.link)) return 2;
                                }).set('listx', list);
                                ('step 1');
                                if (result.links.includes(2)) {
                                    player
                                        .chooseTarget(get.prompt('rangjieon'), '选择一位移动技能的角色？', (card, player, target) => {
                                            var list = target.getSkills(true, false).filter(function (skill) {
                                                var info = lib.skill[skill];
                                                return info && !player.awakenedSkills.includes(skill) && !info.charlotte && lib.translate[skill + '_info'];
                                            });//QQQ
                                            return list.length;
                                        })
                                        .set('ai', (target) => {
                                            return get.effect(target, { name: 'sha' }, _status.event.player);
                                        });
                                    event.goto(7);
                                }
                                if (result.links.includes(0)) {
                                    var source = ui.cardPile.childNodes;
                                    var namex = [];
                                    var list = [];
                                    for (var i = 0; i < source.length; i++) {
                                        if (!namex.includes(source[i].name)) {
                                            namex.push(source[i].name);
                                            list.push(source[i]);
                                        }
                                    }
                                    player.chooseButton(['让节:选择至多两张牌名不同的牌获得之？', list], [1, 2]).set('filterButton', function (button) {
                                        if (!ui.selected.buttons.length) return true;
                                        return ui.selected.buttons[0].link.name != button.link[2];
                                    }).ai = get.buttonValue;
                                    event.goto(6);
                                }
                                if (result.links.includes(1)) {
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
                                                if (target.canEquip(es[i], _status.event.canReplace)) return true;
                                            }
                                            return false;
                                        } else {
                                            var range = 'ej';
                                            if (_status.event.nojudge) range = 'e';
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
                                                                return current != target && get.attitude(player, current) < 0 && current.canEquip(card, _status.event.canReplace) && get.effect(target, card, player, player) < 0;
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
                                                                if (get.value(es[i], target) > 0 && current.canEquip(es[i], _status.event.canReplace) && get.effect(current, es[i], player, player) > (_status.event.canReplace ? get.effect(target, es[i], player, player) : 0)) return true;
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
                                            if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], ui.selected.targets[0])) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.canEquip(es[i], _status.event.canReplace)) {
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
                                    next.set('targetprompt', _status.event.targetprompt || ['被移走', '移动目标']);
                                    next.set('prompt', event.prompt || '选择移动与置入的目标角色');
                                    next.set('filter', event.filter);
                                    next.set('sourceTargets', event.sourceTargets || game.filterPlayer());
                                    next.set('aimTargets', event.aimTargets || game.filterPlayer());
                                    next.set('canReplace', event.canReplace);
                                    next.set('custom', get.copy(event.custom));
                                    if (event.prompt2) next.set('prompt2', event.prompt2);
                                    if (event.forced) next.set('forced', true);
                                }
                                ('step 2');
                                event.result = result;
                                if (result.bool) {
                                    player.line2(result.targets, 'green');
                                    event.targets = result.targets;
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                ('step 4');
                                if (targets.length == 2) {
                                    player
                                        .choosePlayerCard(
                                            'ej',
                                            [1, Infinity],
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
                                        .set('nojudge', event.nojudge || false)
                                        .set('targets0', targets[0])
                                        .set('targets1', targets[1])
                                        .set('filterButton', function (button) {
                                            var targets1 = _status.event.targets1;
                                            if (get.position(button.link) == 'j') {
                                                if (_status.event.nojudge) return false;
                                                return targets1.canAddJudge(button.link);
                                            } else {
                                                return targets1.canEquip(button.link, _status.event.canReplace);
                                            }
                                        })
                                        .set('filter', event.filter)
                                        .set('canReplace', event.canReplace)
                                        .set('custom', get.copy(event.custom))
                                        .set('prompt', '选择移动的牌');
                                } else {
                                    event.finish();
                                }
                                ('step 5');
                                if (result.bool && result.links.length) {
                                    for (var i = 0; i < result.links.length; i++) {
                                        var link = result.links[i];
                                        if (get.position(link) == 'e') {
                                            event.targets[1].equip(link);
                                        } else if (link.viewAs) {
                                            event.targets[1].addJudge({ name: link.viewAs }, [link]);
                                        } else {
                                            event.targets[1].addJudge(link);
                                        }
                                        event.targets[0].$give(link, event.targets[1], false);
                                        event.result.card = link;
                                        event.result.position = get.position(link);
                                    }
                                    game.log(event.targets[0], '的', result.links, '被移动给了', event.targets[1]);
                                }
                                event.finish();
                                ('step 6');
                                if (result.links) player.gain(result.links, 'gain2');
                                event.finish();
                                ('step 7');
                                if (result.targets) {
                                    event.targetx = result.targets[0];
                                    var list = result.targets[0].getSkills(true, false).filter(function (skill) {
                                        var info = lib.skill[skill];
                                        infox = lib.translate[skill + '_info'];
                                        return info && !player.awakenedSkills.includes(skill) && !info.charlotte && infox.length;
                                    });
                                    if (list.length) player.chooseControl(list).set('prompt', '让节:选择' + get.translation(result.targets[0]) + '的一个技能移动');
                                } else {
                                    event.finish();
                                }
                                ('step 8');
                                if (result.control) {
                                    event.skillx = result.control;
                                    player
                                        .chooseTarget(get.prompt('rangjieon'), '选择获得『' + get.translation(result.control) + '』的角色', (card, player, target) => {
                                            return target.isAlive();
                                        })
                                        .set('ai', (target) => {
                                            return -get.effect(target, { name: 'sha' }, _status.event.player);
                                        });
                                } else {
                                    event.finish();
                                }
                                ('step 9');
                                if (result.targets) {
                                    event.targetx.removeSkill(event.skillx);
                                    result.targets[0].addSkillLog(event.skillx);
                                    game.log(player, '将', event.targetx, '的『', event.skillx, '』移动给', result.targets[0]);
                                } else {
                                    event.finish();
                                }
                            },
                        },
                        yizhengon: {
                            audio: 'yizheng',
                            enable: 'phaseUse',
                            filter(event, player) {
                                return game.hasPlayer(function (current) {
                                    return player.canCompare(current) && !current.hasSkill('yizhengon_clear');
                                });
                            },
                            filterTarget(card, player, current) {
                                return player.canCompare(current) && !current.hasSkill('yizhengon_clear');
                            },
                            content() {
                                'step 0';
                                player.chooseToCompare(target);
                                ('step 1');
                                if (result.bool) {
                                    target.skip('phaseDraw');
                                    target.addTempSkill('yizhengon_clear', { player: 'phaseDrawSkipped' });
                                    event.finish();
                                } else {
                                    var list = ['受到伤害', '失去上限'];
                                    if (player.num('he') > 1) list.push('交与牌');
                                    player.chooseControl(list).set('prompt', '义争:选择失去一点体力上限或受到一点伤害' + (player.num('he') > 1 ? '或交与一名其他角色两张牌' : ''));
                                }
                                ('step 2');
                                if (result.control == '失去上限') player.loseMaxHp();
                                if (result.control == '受到伤害') player.damage();
                                if (result.control == '交与牌') {
                                    player.chooseCardTarget({
                                        filterCard(card, player, target) {
                                            return true;
                                        },
                                        selectCard: 2,
                                        filterTarget(card, player, target) {
                                            return target.isAlive() && target != _status.event.player;
                                        },
                                        selectTarget(card, player, target) {
                                            return 1;
                                        },
                                        forced: true,
                                        prompt: '义争:选择两张牌交与一名其他角色',
                                        ai1(card) {
                                            return 7 - get.value(card);
                                        },
                                        ai2(target) {
                                            return get.attitude(player, target) > 0;
                                        },
                                    });
                                }
                                ('step 3');
                                if (result.targets) {
                                    player.give(result.cards, result.targets[0]);
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
                            subSkill: {
                                clear: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: '跳过下一个摸牌阶段',
                                    },
                                },
                            },
                        },
                        qiaosion: {
                            audio: 'xinfu_qiaosi',
                            enable: 'phaseUse',
                            usable: 1,
                            content() {
                                'step 0';
                                if (ui.backgroundMusic) ui.backgroundMusic.pause();
                                event.audio = game.playAudio('../extension/风起雨落/audio/灵魂汁子浇给.mp3');
                                event.videoId = lib.status.videoId++;
                                if (player.isUnderControl()) {
                                    game.swapPlayerAuto(player);
                                }
                                var switchToAuto = function () {
                                    game.pause();
                                    game.countChoose();
                                    setTimeout(function () {
                                        _status.imchoosing = false;
                                        event._result = {
                                            bool: true,
                                            links: ['qiaosi_c1', 'qiaosi_c6'].concat(['qiaosi_c2', 'qiaosi_c3', 'qiaosi_c4', 'qiaosi_c5'].randomGets(1)),
                                        };
                                        if (event.dialog) event.dialog.close();
                                        if (event.controls) {
                                            for (var i of event.controls) i.close();
                                        }
                                        game.resume();
                                    }, 5000);
                                };
                                var createDialog = function (player, id) {
                                    if (player == game.me) return;
                                    var str = get.translation(player) + '正在表演...<br>';
                                    for (var i = 1; i < 7; i++) {
                                        str += get.translation('qiaosi_c' + i);
                                        if (i % 3 != 0) str += '　　';
                                        if (i == 3) str += '<br>';
                                    }
                                    ui.create.dialog(str, 'forcebutton').videoId = id;
                                };
                                var chooseButton = function (player) {
                                    var event = _status.event;
                                    player = player || event.player;
                                    event.status = {
                                        qiaosi_c1: 0,
                                        qiaosi_c2: 0,
                                        qiaosi_c3: 0,
                                        qiaosi_c4: 0,
                                        qiaosi_c5: 0,
                                        qiaosi_c6: 0,
                                    };
                                    event.map = {
                                        qiaosi_c1: [40, 60],
                                        qiaosi_c2: [80, 120],
                                        qiaosi_c3: [90, 110],
                                        qiaosi_c4: [90, 110],
                                        qiaosi_c5: [80, 120],
                                        qiaosi_c6: [40, 60],
                                    };
                                    event.finishedx = [];
                                    event.str = '请开始你的表演<br><img src="image/card/qiaosi_card1.png" width="60" height="60">qiaosi_c1% <img src="image/card/qiaosi_card2.png" width="60" height="60">qiaosi_c2% <img src="image/card/qiaosi_card3.png" width="60" height="60">qiaosi_c3%<br><img src="image/card/qiaosi_card4.png" width="60" height="60">qiaosi_c4%<img src="image/card/qiaosi_card5.png" width="60" height="60">qiaosi_c5% <img src="image/card/qiaosi_card6.png" width="60" height="60">qiaosi_c6%';
                                    event.dialog = ui.create.dialog(event.str, 'forcebutton', 'hidden');
                                    event.dialog.addText('<li>点击下方的按钮,可以增加按钮对应的角色的「表演完成度」.对于不同的角色,点击时增加的完成度不同,最终获得的牌也不同.一次表演最多只能完成3名角色的进度.', false);
                                    event.dialog.open();
                                    for (var i in event.status) {
                                        event.dialog.content.childNodes[0].innerHTML = event.dialog.content.childNodes[0].innerHTML.replace(i, event.status[i]);
                                    }
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('pointerdiv');
                                    }
                                    event.switchToAuto = function () {
                                        event._result = {
                                            bool: true,
                                            links: event.finishedx.slice(0),
                                        };
                                        event.dialog.close();
                                        for (var i of event.controls) i.close();
                                        game.resume();
                                        _status.imchoosing = false;
                                    };
                                    event.controls = [];
                                    for (var i = 1; i <= 6; i++)
                                        event.controls.push(
                                            ui.create.control('qiaosi_c' + i, function (link) {
                                                var event = _status.event;
                                                if (event.finishedx.includes(link)) return;
                                                event.status[link] += get.rand.apply(get, event.map[link]);
                                                if (event.status[link] >= 100) {
                                                    event.status[link] = 100;
                                                    var str = event.str.slice(0);
                                                    for (var i in event.status) {
                                                        str = str.replace(i, event.status[i]);
                                                    }
                                                    event.dialog.content.childNodes[0].innerHTML = str;
                                                    event.finishedx.push(link);
                                                    if (event.finishedx.length >= 3) {
                                                        event._result = {
                                                            bool: true,
                                                            links: event.finishedx.slice(0),
                                                        };
                                                        event.dialog.close();
                                                        for (var i of event.controls) i.close();
                                                        game.resume();
                                                        _status.imchoosing = false;
                                                    }
                                                } else {
                                                    var str = event.str.slice(0);
                                                    for (var i in event.status) {
                                                        str = str.replace(i, event.status[i]);
                                                    }
                                                    event.dialog.content.childNodes[0].innerHTML = str;
                                                }
                                            })
                                        );
                                    for (var i = 0; i < event.dialog.buttons.length; i++) {
                                        event.dialog.buttons[i].classList.add('selectable');
                                    }
                                    game.pause();
                                    game.countChoose();
                                };
                                //event.switchToAuto=switchToAuto;
                                game.broadcastAll(createDialog, player, event.videoId);
                                if (event.isMine()) {
                                    chooseButton();
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.player);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 1');
                                game.broadcastAll('closeDialog', event.videoId);
                                var cardsx = [];
                                var numx = player.maxHp - player.hp + 2;
                                for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                    var cardx = ui.cardPile.childNodes[i];
                                    if (
                                        cardsx.length &&
                                        cardsx.filter(function (card) {
                                            return get.type2(cardx) == get.type2(card);
                                        }).length < numx
                                    )
                                        cardsx.push(cardx);
                                    else if (!cardsx.length) cardsx.push(cardx);
                                }
                                if (cardsx.length) player.gain(cardsx, 'gain2');
                                ('step 2');
                                player
                                    .chooseTarget(
                                        1,
                                        function (card, player, target) {
                                            return target.isAlive() && target != _status.event.player && !target.isUnseen(2);
                                        },
                                        '巧思:是否令一名角色将武将牌替换为【沉默的羔羊】？'
                                    )
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target) < 0;
                                    });
                                ('step 3');
                                if (result.bool && result.targets) {
                                    var list = ['chenmodegaoyangon'];
                                    if (lib.character['chenmodegaoyangon']) list.add('chenmodegaoyangon');
                                    event.target = result.targets[0];
                                    if (list.length == 1) {
                                        event.target.init(event.target.name, list[0]);
                                        game.log(event.target, '将', list, '作为了副将');
                                        event.goto(5);
                                    } else
                                        event.target
                                            .chooseButton(true)
                                            .set('ai', function (button) {
                                                return get.rank(button.link, true) - lib.character[button.link][2];
                                            })
                                            .set('createDialog', ['选择一张<沉默的羔羊>作为副将', [list, 'character']]);
                                } else {
                                    event.goto(5);
                                }
                                ('step 4');
                                if (result.bool) {
                                    event.target.init(event.target.name, result.links[0]);
                                    game.log(event.target, '将', result.links, '作为了副将');
                                }
                                ('step 5');
                                player.chooseCardTarget({
                                    filterCard(card, player, target) {
                                        return true;
                                    },
                                    selectCard(card, player, target) {
                                        return Math.min(_status.event.player.num('he'), 5);
                                    },
                                    filterTarget(card, player, target) {
                                        return target.isAlive() && target != _status.event.player;
                                    },
                                    selectTarget(card, player, target) {
                                        return [0, 1];
                                    },
                                    forced: true,
                                    position: 'he',
                                    prompt: '巧思:选择五张牌,选择一名其他角色交与之或不选择弃置之',
                                    ai1(card) {
                                        return 7 - get.value(card);
                                    },
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target) > 0;
                                    },
                                });
                                ('step 6');
                                event.audio.remove();
                                ui.backgroundMusic.play();
                                if (result.targets && result.targets.length) {
                                    player.give(result.cards, result.targets[0]);
                                    result.targets[0].addTempSkill('lhzzon', { global: 'roundStart' });
                                    event.finish();
                                } else {
                                    player.discard(result.cards);
                                    var list = [];
                                    for (var i of lib.inpile) {
                                        var type = get.type(i);
                                        if (type == 'trick') list.push([type, '', i]);
                                    }
                                    player
                                        .chooseButton(['巧思:是否视为使用一张普通锦囊牌？', [list, 'vcard']])
                                        .set('filterButton', function (button) {
                                            if (
                                                game.hasPlayer(function (current) {
                                                    return player.canUse({ name: button.link[2], nature: button.link[3] }, current);
                                                })
                                            )
                                                return true;
                                        })
                                        .set('ai', function (button) {
                                            return player.getUseValue({ name: button.link[2], nature: button.link[3] });
                                        });
                                }
                                ('step 7');
                                if (result.bool) {
                                    event.cardx = { name: result.links[0][2], nature: result.links[0][3] };
                                    player.chooseUseTarget(event.cardx, true);
                                } else {
                                    event.finish();
                                }
                                ('step 8');
                                if (result.bool) {
                                    player.useCard(event.cardx, result.targets[0], true, true);
                                }
                            },
                        },
                        lhzzon: {
                            mark: true,
                            intro: {
                                content: '锁定技,当你受到或造成伤害后,回复或失去体力后,你摸一张牌',
                            },
                            forced: true,
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd', 'recoverEnd'],
                                source: 'damageAfter',
                            },
                            content() {
                                player.draw();
                            },
                        },
                        yangtouon: {
                            trigger: {
                                player: 'gainEnd',
                            },
                            forced: true,
                            derivation: ['xswuyan', 'shibei'],
                            group: ['xswuyan', 'shibei'],
                            content() {
                                player.damage();
                            },
                        },
                        qingshion: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'useCard',
                            },
                            filter(event, player) {
                                if (player.hasSkill('qingshion_blocker')) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var choices = [];
                                var choiceList = ['令' + get.translation(trigger.card) + '对其中一个目标角色造成的伤害+1', '令任意名其他角色各摸一张牌', '摸三张牌,〖情势〗于本回合失效'];
                                if (trigger.targets && trigger.targets.length) choices.push('选项一');
                                else choiceList[0] = '<span style="opacity:0.5">' + choiceList[0] + '(无目标角色)</span>';
                                if (game.countPlayer((i) => i != player)) choices.push('选项二');
                                else choiceList[1] = '<span style="opacity:0.5">' + choiceList[1] + '</span>';
                                if (player.hp > 0) choices.push('选项三');
                                else choiceList[2] = '<span style="opacity:0.5">' + choiceList[1] + '(体力值为0)</span>';
                                player
                                    .chooseControl(choices, 'cancel2')
                                    .set('choiceList', choiceList)
                                    .set('prompt', get.prompt('qingshion'))
                                    .set('ai', () => {
                                        return _status.event.choice;
                                    })
                                    .set(
                                        'choice',
                                        (() => {
                                            var choicesx = choices.slice();
                                            var cards = player.getCards('hs');
                                            var bool1 =
                                                get.tag(trigger.card, 'damage') &&
                                                choicesx.includes('选项一') &&
                                                trigger.targets.some((current) => {
                                                    return get.attitude(player, current) < 0;
                                                }),
                                                bool2 = choicesx.includes('选项二');
                                            if (bool2)
                                                bool2 = game.countPlayer(function (current) {
                                                    return player != current && get.attitude(player, current) > 0;
                                                });
                                            else bool2 = 0;
                                            if (bool1 || bool2) {
                                                for (var i = 0; i < cards.length; i++) {
                                                    var name = cards[i].name;
                                                    if (player.getStorage('qingshion_clear').includes(name)) continue;
                                                    for (var j = i + 1; j < cards.length; j++) {
                                                        if (name === cards[j].name && get.position(cards[i]) + get.position(cards[j]) !== 'ss' && player.hasValueTarget(cards[i])) {
                                                            choicesx.remove('选项三');
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                            if (bool2 > 2) return '选项二';
                                            if (choicesx.includes('选项三')) return '选项三';
                                            if (bool2 === 2) return '选项二';
                                            if (bool1) return '选项一';
                                            if (bool2) return '选项二';
                                            return 'cancel2';
                                        })()
                                    );
                                ('step 1');
                                if (result.control != 'cancel2') {
                                    game.log(player, '选择了', '#y' + result.control);
                                    var index = ['选项一', '选项二', '选项三'].indexOf(result.control) + 1;
                                    player.addTempSkill('qingshion_clear');
                                    player.markAuto('qingshion_clear', [trigger.card.name]);
                                    var next = game.createEvent('qingshion_after');
                                    next.player = player;
                                    next.card = trigger.card;
                                    next.setContent(lib.skill.qingshion['content' + index]);
                                }
                            },
                            content1() {
                                'step 0';
                                player
                                    .chooseTarget('令' + get.translation(card) + '对其中一个目标造成的伤害+1', true, (card, player, target) => {
                                        return _status.event.targets.includes(target);
                                    })
                                    .set('ai', (target) => {
                                        return 2 - get.attitude(_status.event.player, target);
                                    })
                                    .set('targets', event.parent.getTrigger().targets);
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.addTempSkill('qingshion_ex');
                                    if (!player.storage.qingshion_ex) player.storage.qingshion_ex = [];
                                    player.storage.qingshion_ex.push([target, card]);
                                }
                            },
                            content2() {
                                'step 0';
                                player.chooseTarget('令任意名其他角色各摸一张牌', [1, Infinity], true, lib.filter.notMe).set('ai', (target) => {
                                    return get.attitude(_status.event.player, target);
                                });
                                ('step 1');
                                if (result.bool) {
                                    var targets = result.targets;
                                    targets.sortBySeat();
                                    player.line(targets);
                                    game.asyncDraw(targets);
                                    game.delayex();
                                }
                            },
                            content3() {
                                'step 0';
                                player.draw(3);
                                player.addTempSkill('qingshion_blocker');
                            },
                            subSkill: {
                                ex: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    filter(event, player) {
                                        return (
                                            player.storage.qingshion_ex &&
                                            player.storage.qingshion_ex.some((info) => {
                                                return info[0] == event.player && info[1] == event.card;
                                            })
                                        );
                                    },
                                    forced: true,
                                    charlotte: true,
                                    popup: false,
                                    content() {
                                        trigger.num++;
                                        for (var i = 0; i < player.storage.qingshion_ex.length; i++) {
                                            if (player.storage.qingshion_ex[i][1] == trigger.card) player.storage.qingshion_ex.splice(i--, 1);
                                        }
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                },
                                blocker: {
                                    charlotte: true,
                                },
                            },
                            ai: {
                                threaten: 6,
                            },
                        },
                        zhizheon: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            filterCard: true,
                            position: 'h',
                            discard: false,
                            lose: false,
                            delay: false,
                            usable: 1,
                            selectCard(card, player, target) {
                                if (_status.event.player.num('h') < 6) return -1;
                                return [1, 5];
                            },
                            check(card) {
                                if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
                                return get.value(card) - 7.5;
                            },
                            filter(event, player) {
                                return (
                                    player.getCards('h', function (card) {
                                        return card.hasGaintag('zhizheon');
                                    }).length < 1
                                );
                            },
                            content() {
                                'step 0';
                                var cardsx = [];
                                for (var i = 0; i < cards.length; i++) {
                                    var cardx = game.createCard2(cards[i].name, cards[i].suit, cards[i].number, cards[i].nature);
                                    cardsx.push(cardx);
                                }
                                player.gain(cardsx).gaintag.add('zhizheon');
                                player.addSkill('zhizheon_effect');
                                for (var i = 0; i < game.players.length; i++) {
                                    game.players[i].addTempSkill('zhizheon_clear');
                                }
                            },
                            ai: {
                                order: 15,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                effect: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('zhizheon')) return num + 0.16;
                                        },
                                        aiValue(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('zhizheon')) return 2 * num;
                                        },
                                        aiUseful(player, card, num) {
                                            if (num > 0 && !player._zhizheon_mod && get.itemtype(card) === 'card' && card.hasGaintag('zhizheon')) {
                                                if (player.canIgnoreHandcard(card)) return Infinity;
                                                player._zhizheon_mod = true;
                                                if (
                                                    player.hp < 3 &&
                                                    player.needsToDiscard(0, (i, player) => {
                                                        return !player.canIgnoreHandcard(i) && get.useful(i) > 6;
                                                    })
                                                )
                                                    return num * 1.5;
                                                return num * 10;
                                            }
                                        },
                                    },
                                    trigger: {
                                        player: ['useCardAfter'],
                                    },
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('zhizheon')) {
                                                    if (
                                                        event.cards.some((card) => {
                                                            return get.position(card, true) == 'o' && card.cardid == i;
                                                        })
                                                    )
                                                        return true;
                                                }
                                            }
                                            return false;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        var cards = [];
                                        player.getHistory('lose', function (evt) {
                                            if (evt.parent != trigger) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('zhizheon')) {
                                                    var cardsx = trigger.cards.filter((card) => {
                                                        return get.position(card, true) == 'o' && card.cardid == i;
                                                    });
                                                    if (cardsx.length) cards.addArray(cardsx);
                                                }
                                            }
                                        });
                                        if (cards.length) {
                                            player.chooseTarget('智哲:选择一名角色获得' + get.translation(cards)).set('ai', (target) => {
                                                return get.attitude(_status.event.player, target);
                                            });
                                            event.cardsx = cards;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.targets) result.targets[0].gain(event.cardsx, 'gain2').gaintag.addArray(['zhizheon', 'zhizheon_clear']);
                                    },
                                },
                                clear: {
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('zhizheon_clear');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('zhizheon_clear')) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('zhizheon_clear')) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('zhizheon_clear')) return false;
                                            }
                                        },
                                    },
                                },
                            },
                        },
                        jincuion: {
                            audio: 'ext:风起雨落/audio:2',
                            trigger: {
                                player: 'phaseBefore',
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            forced: true,
                            group: 'jincuion_advent',
                            init(player) {
                                player.storage.jincuion = 7;
                            },
                            content() {
                                'step 0';
                                if (event.triggername != 'phaseBegin') {
                                    player.drawTo(7);
                                    if (player.hp < 7) player.recover(7 - player.hp);
                                    if (player.num('h') < 7) player.draw(7 - player.num('h'));
                                    player.storage.jincuion = 7;
                                    event.finish();
                                }
                                if (player.storage.jincuion < 1) event.finish();
                                ('step 1');
                                var num = player.storage.jincuion;
                                var cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                var next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '尽瘁:点击将牌移动到牌堆顶或牌堆底');
                                next.processAI = function (list) {
                                    var cards = list[0][1],
                                        player = _status.event.player;
                                    const target = trigger.player;
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
                                    return [top, bottom];
                                };
                                ('step 2');
                                var top = result.moved[0];
                                var bottom = result.moved[1];
                                top.reverse();
                                for (var i = 0; i < top.length; i++) {
                                    ui.cardPile.insertBefore(top[i], ui.cardPile.firstChild);
                                }
                                for (var i = 0; i < bottom.length; i++) {
                                    ui.cardPile.appendChild(bottom[i]);
                                }
                                if (event.triggername == 'phaseZhunbeiBegin' && top.length == 0) {
                                    player.addTempSkill('reguanxing_on');
                                }
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                player.storage.jincuion--;
                                game.updateRoundNumber();
                            },
                            ai: {
                                guanxing: true,
                                effect: {
                                    target(card, player, target) {
                                        if (!get.tag(card, 'damage')) return;
                                        var num = 0,
                                            bool = false;
                                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                                            var card = ui.cardPile.childNodes[i];
                                            if (card.number == 7) {
                                                num++;
                                                if (num >= target.hp) {
                                                    bool = true;
                                                    break;
                                                }
                                            }
                                        }
                                        if (bool) return 0.2;
                                    },
                                },
                                threaten: 0.6,
                            },
                            subSkill: {
                                advent: {
                                    audio: 'dcjincui',
                                    trigger: {
                                        global: ['phaseBefore', 'phaseZhunbeiBegin'],
                                        player: 'enterGame',
                                    },
                                    forced: true,
                                    filter(event, player, name) {
                                        if (event.name != 'phaseZhunbeiBegin') {
                                            return (event.name != 'phase' || game.phaseNumber == 0) && player.countCards('h') < 7;
                                        } else {
                                            return event.player != player;
                                        }
                                    },
                                    content() {
                                        player.drawTo(7);
                                    },
                                },
                            },
                        },
                        jingxieon: {
                            audio: 'xinfu_jingxie1',
                            group: ['xinfu_jingxie1', 'jingxieon1', 'jingxieon2'],
                            enable: ['chooseToUse', 'chooseToRespond'],
                            hiddenCard(player, name) {
                                if (!['sha', 'shan', 'tao', 'jiu', 'wuxie'].includes(name)) return false;
                                return player.countCards('hes') > 0;
                            },
                            filter(event, player) {
                                if ((event.filterCard && event.filterCard({ name: 'sha' }, player, event)) || event.filterCard({ name: 'shan' }, player, event) || event.filterCard({ name: 'jiu' }, player, event) || event.filterCard({ name: 'tao' }, player, event) || event.filterCard({ name: 'wuxie' }, player, event)) {
                                    return player.countCards('hes') > 0;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                                        list.push(['基本', '', 'sha']);
                                        for (var j of lib.inpile_nature) list.push(['基本', '', 'sha', j]);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'shan' }, player, event)) {
                                        list.push(['基本', '', 'shan']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'tao' }, player, event)) {
                                        list.push(['基本', '', 'tao']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event)) {
                                        list.push(['基本', '', 'jiu']);
                                    }
                                    if (event.filterCard && event.filterCard({ name: 'wuxie' }, player, event)) {
                                        list.push(['锦囊', '', 'wuxie']);
                                    }
                                    return ui.create.dialog('精械', [list, 'vcard'], 'hidden');
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
                                                if (player.storage.jingxieon && player.countCards('hs') > 2) return 3;
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
                                        filterCard(card, player, target) {
                                            if (!player.storage.jingxieon) return get.type(card) == 'equip';
                                            return true;
                                        },
                                        complexCard: true,
                                        selectCard: 1,
                                        check(card, player, target) {
                                            if (!ui.selected.cards.length && get.type(card) == 'equip') return 4;
                                            else return 6 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2], nature: links[0][3] },
                                        position: 'hes',
                                        popname: true,
                                        precontent() {
                                            player.addMark('jingxieon_use', 1, false);
                                            player.draw();
                                        },
                                    };
                                },
                                prompt(links, player) {
                                    var str = player.storage.longdan5646 ? '一张牌' : '一张装备牌';
                                    return '将' + str + '当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
                                },
                            },
                            ai: {
                                order() {
                                    var player = _status.event.player;
                                    var event = _status.event;
                                    if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.storage.jingxieon && player.countCards('hs') > 0) {
                                        return 3.3;
                                    }
                                    return 3.1;
                                },
                                skillTagFilter(player, tag, arg) {
                                    if (tag == 'fireAttack') return true;
                                    if (
                                        !player.storage.jingxieon &&
                                        !player.hasCard(function (card) {
                                            return get.type(card) == 'basic';
                                        }, 'hs')
                                    )
                                        return false;
                                    return player.countCards('hes') > 0;
                                },
                                result: {
                                    player: 1,
                                },
                                respondSha: true,
                                respondShan: true,
                                fireAttack: true,
                            },
                        },
                        jingxieon1: {
                            trigger: {
                                player: 'dying',
                            },
                            audio: 'xinfu_jingxie1',
                            check(event, player) {
                                if (player.countCards('e') > 2 && player.countCards('h', 'tao') > 0) return 0;
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return player.countCards('e') > 0;
                            },
                            content() {
                                var num = player.countCards('e');
                                player.discard(player.getCards('e'));
                                player.draw(num);
                                player.recover(num);
                            },
                        },
                        jingxieon2: {
                            trigger: {
                                global: 'phaseBegin',
                                player: 'jingxieon1After',
                            },
                            forced: true,
                            audio: 'xinfu_jingxie1',
                            content() {
                                'step 0';
                                event.num = 0;
                                event.toequip = [];
                                ('step 1');
                                while (!player.isEmpty(event.num)) {
                                    event.num++;
                                    if (event.num > 5) {
                                        event.finish();
                                        return;
                                    }
                                }
                                var card = get.cardPile2(function (card) {
                                    return get.subtype(card) == 'equip' + event.num && player.canUse(card, player);
                                });
                                if (card) {
                                    player.chooseUseTarget(card, true, 'nopopup');
                                }
                                event.num++;
                                if (event.num <= 5) event.redo();
                            },
                        },
                        qinyinon: {
                            audio: 'ext:风起雨落/audio:4',
                            forced: true,
                            trigger: {
                                player: ['damageEnd', 'phaseJudgeEnd', 'phaseDrawEnd', 'phaseUseEnd', 'phaseDiscardEnd'],
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var list = ['摸两张牌,令所有角色各失去1点体力.'];
                                if (player.countCards('he') >= 2) {
                                    list.push('弃两张牌,令所有角色各回复1点体力.');
                                }
                                event.list = list;
                                player.chooseControlList(event.list).set('ai', function (event, player) {
                                    var recover = 0,
                                        lose = 0,
                                        players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (players[i].hp < players[i].maxHp) {
                                            if (get.attitude(player, players[i]) > 0) {
                                                if (players[i].hp < 2) {
                                                    lose--;
                                                    recover += 0.5;
                                                }
                                                lose--;
                                                recover++;
                                            } else if (get.attitude(player, players[i]) < 0) {
                                                if (players[i].hp < 2) {
                                                    lose++;
                                                    recover -= 0.5;
                                                }
                                                lose++;
                                                recover--;
                                            }
                                        } else {
                                            if (get.attitude(player, players[i]) > 0) {
                                                lose--;
                                            } else if (get.attitude(player, players[i]) < 0) {
                                                lose++;
                                            }
                                        }
                                    }
                                    if (lose == 0 && recover == 0) return event.list.indexOf('cancel2');
                                    if (player.countCards('h') < player.hp - 1) {
                                        lose++;
                                    }
                                    if (player.needsToDiscard()) {
                                        recover++;
                                    }
                                    if (lose > recover && lose > 0) return event.list.indexOf('摸两张牌,令所有角色各失去1点体力.');
                                    if (lose < recover && recover > 0 && event.list.includes('弃两张牌,令所有角色各回复1点体力.')) return event.list.indexOf('弃两张牌,令所有角色各回复1点体力.');
                                    return event.list.indexOf('cancel2');
                                });
                                ('step 1');
                                if (event.list[result.index] == '摸两张牌,令所有角色各失去1点体力.') {
                                    player.draw(2);
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        players[i].loseHp();
                                    }
                                }
                                if (event.list[result.index] == '弃两张牌,令所有角色各回复1点体力.') {
                                    player.chooseToDiscard(2, 'he', true);
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        players[i].recover();
                                    }
                                }
                            },
                            group: ['qinyinon1', 'qinyinon2'],
                            audioname2: {
                                JX_shen_caocao: 'DIY_guixin',
                            },
                        },
                        yeyanon: {
                            audio: 'ext:风起雨落/audio:2',
                            enable: 'phaseUse',
                            usable: 1,
                            forced: true,
                            selectTarget() {
                                var player = _status.event.player;
                                return [0, num];
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                ('step 1');
                                player
                                    .chooseToDiscard('hes', [0, 5], function (card, player) {
                                        if (!ui.selected.cards.length) return true;
                                        var suit = card.suit;
                                        for (var i of ui.selected.cards) {
                                            if (i.suit == suit) return false;
                                        }
                                        return true;
                                    })
                                    .set('complexCard', true)
                                    .set('ai', function (card) {
                                        if (!player.hasValueTarget(card)) return 5;
                                        return 6 - get.value(card);
                                    })
                                    .set('prompt', '弃置任意张不同花色的牌');
                                ('step 2');
                                if (result.bool) {
                                    event.num = result.cards.length;
                                    var num = event.num;
                                    player
                                        .chooseTarget(true, '横置等量名角色', [0, num], function (card, player, target) {
                                            return true;
                                        })
                                        .set('ai', function (target) {
                                            if (target.isLinked()) return -1;
                                            return -get.attitude(_status.event.player, target);
                                        });
                                }
                                ('step 3');
                                if (result.bool) {
                                    player.line(result.targets);
                                    event.targets_link = result.targets;
                                    event.num2 = 0;
                                } else event.goto(5);
                                ('step 4');
                                if (event.num2 < event.targets_link.length) {
                                    event.targets_link[event.num2].link(true);
                                    event.num2++;
                                    event.redo();
                                }
                                ('step 5');
                                var str = '对一名其他角色造成随机1~3点火焰伤害';
                                player.chooseTarget(get.prompt('yeyanon'), str, lib.filter.notMe).set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player, 'fire');
                                });
                                ('step 6');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    target.damage('fire', [1, 2, 2, 3, 3].randomGet());
                                }
                            },
                        },
                        qinyinon1: {
                            audio: 'qinyinon',
                        },
                        qinyinon2: {
                            audio: 'qinyinon',
                        },
                        zhenhunon: {
                            audio: 'qinyin',
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return get.color(card) == 'red' ? 2 : 1;
                                });
                                ('step 1');
                                player.gain(result.card, 'draw2');
                                if (result.color == 'red') {
                                    player.draw(2);
                                    player.addTempSkill('zhenhunon_1', { player: 'phaseZhunbeiBegin' });
                                    event.finish();
                                } else
                                    player.chooseTarget('镇魂:对一名角色造成1~3点火焰伤害.', lib.filter.notMe).ai = function (target) {
                                        return get.damageEffect(target, player, player, 'fire');
                                    };
                                ('step 2');
                                if (result.bool) result.targets[0].damage('fire', [1, 2, 2, 3, 3].randomGet());
                            },
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: ['loseMaxHpBegin', 'damageBegin', 'loseHpBegin'],
                                    },
                                    filter(event, player, name) {
                                        return true;
                                    },
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    marktext: '知己',
                                    mark: true,
                                    intro: {
                                        mark(dialog, content, player) {
                                            info = player.storage.zhenhunon_1;
                                            return '直到下回合开始,你无法减少体力和体力上限';
                                        },
                                    },
                                },
                            },
                        },
                    },
                    character: {
                        caoxin: ['female', 'wei', 3, ['悲陈', '三哀'], []],
                        renkai: ['male', 'jin', 4, ['勤恪'], []],
                        zhaoyunon: ['male', 'shu', 4, ['yinqiangon', 'longqiaoon', 'qinggangon'], []],
                        guanningon: ['male', 'qun', '3/7', ['dunshion'], []],
                        zhaoxiangon: ['female', 'shu', 4, ['fanghunon', 'fuhanon', 'queshion'], []],
                        guozhaoon: ['female', 'wei', '3/3', ['pianchongon', 'zunweion'], []],
                        liuzanon: ['male', 'wu', 4, ['fenyinon', 'lijion'], []],
                        xushaoon: ['male', 'qun', 4, ['pingjianon', 'shirenon'], []],
                        caopion: ['male', 'wei', 3, ['xingshangon', 'fangzhuon', 'songweion'], ['zhu']],
                        zhangxuanon: ['female', 'wu', 4, ['tonglion', 'shezangon'], []],
                        caiwenjion: ['female', 'wei', 3, ['beigeon', 'chenqingon', 'lishangon'], []],
                        jiaxuon: ['male', 'qun', 3, ['dumouon', 'zongluanon', 'nsyice'], []],
                        guansuoon: ['male', 'shu', 4, ['xiefangon', 'zhengnanon'], []],
                        lingtongon: ['male', 'wu', 4, ['xuanfengon', 'yongjinon'], []],
                        puyuanon: ['male', 'shu', 4, ['zhurenon', 'tianjiangon'], []],
                        xushengon: ['female', 'wu', 4, ['pojunon', 'yichengon'], []],
                        shenganningon: ['female', 'shen', '4/6', ['poxion', 'jieyingon'], []],
                        shenguojiaon: ['female', 'shen', 3, ['huishion', 'tianyion', 'sghuishion', 'zuoxingon'], ['des:配音:苍语榣']],
                        shenxunyuon: ['female', 'shen', 3, ['tianzuoon', 'lingceon', 'dinghanon'], []],
                        mouhuangzhongon: ['male', 'shu', '3/4/2', ['liegongon', 'dingjunon', 'fulion'], []],
                        wangyanon: ['male', 'jin', 3, ['yangkuangon', 'cihuangon', 'sankuon'], []],
                        hetaihouon: ['female', 'qun', 3, ['cizhenon', 'dufeion', 'qiluanon'], []],
                        liaohuaon: ['male', 'shu', 4, ['dangxianon', 'fulion', 'xianfengon'], []],
                        jipingon: ['male', 'qun', 3, ['spduanzhi', 'duyion', 'guyaoon'], []],
                        xizhicaion: ['male', 'wei', 3, ['tianduon', 'xianshion', 'chouceon'], []],
                        Jiexiaoqiaoon: ['female', 'wu', 3, ['tianxiangon', 'piaolingon'], []],
                        mouzhangfeion: ['male', 'shu', '3/4/2', ['paoxiaoon', 'xiaoyongon', 'zuizhanon'], []],
                        lvmengon: ['male', 'wu', 4, ['kongjuon', 'mowangon', 'qinxueon'], []],
                        caocaoon: ['male', 'wei', 4, ['jianxiongon', 'bayeon', 'hujiaon'], ['zhu']],
                        zuxuncaion: ['female', 'qun', 3, ['lieshion', 'dianzhanon', 'huanyinon'], []],
                        simazhaoon: ['male', 'jin', 3, ['tuishion', 'zhaoxinon', 'suzhion', 'chengwu'], ['zhu']],
                        simashion: ['male', 'jin', '3/4', ['taoyin', 'yimieon', 'tairanon', 'ruilve'], ['zhu']],
                        mouzhouyuon: ['male', 'wu', 3, ['yingzion', 'fanjianon', 'liaohuoon'], []],
                        yuanshaoon: ['male', 'qun', 4, ['luanjion', 'mingmenon', 'xueyion'], ['zhu']],
                        liubeion: ['male', 'shu', 4, ['renhuaion', 'juyion', 'zhengfaon'], ['zhu']],
                        yangbiaoon: ['male', 'qun', 3, ['zhaohanon', 'rangjieon', 'yizhengon'], []],
                        chenmodegaoyangon: ['male', 'qun', 4, ['yangtouon'], []],
                        majunon: ['male', 'wei', 3, ['qiaosion', 'jingxieon'], []],
                        wuzhugeon: ['male', 'shu', '4/7', ['jincuion', 'qingshion', 'zhizheon'], []],
                        shenzhouyuon: ['male', 'shen', 4, ['qinyinon', 'yeyanon', 'zhenhunon'], ['wu']],
                        shenzuocion: ['male', 'shen', 4, ['xinhuashen', 'chonghua'], []],
                        shenzhugeon: ['male', 'shen', 3, ['zhinang', 'qixing7'], []],
                        shenhuatuoon: ['male', 'shen', 3, ['jishion', 'xuanxinon'], []],
                    },
                    translate: {
                        caoxin: '曹馨',
                        renkai: '任恺',
                        zhaoyunon: '☆赵云',
                        guanningon: '☆管宁',
                        zhaoxiangon: '☆赵襄',
                        guozhaoon: '☆郭照',
                        liuzanon: '☆留赞',
                        xushaoon: '☆许劭',
                        caopion: '༓曹丕',
                        zhangxuanon: '☆张嫙',
                        caiwenjion: '༓蔡文姬',
                        jiaxuon: '☆贾诩',
                        guansuoon: '☆关索',
                        lingtongon: '☆凌统',
                        puyuanon: '☆蒲元',
                        xushengon: '界徐盛',
                        shenganningon: '神甘宁',
                        shenguojiaon: '神郭嘉',
                        shenxunyuon: '神荀彧',
                        mouhuangzhongon: '☆谋黄忠',
                        wangyanon: '༓王衍',
                        hetaihouon: '༓何太后',
                        liaohuaon: '༓廖化',
                        jipingon: '༓吉平',
                        xizhicaion: '༓戏志才',
                        Jiexiaoqiaoon: '༓小乔',
                        mouzhangfeion: '☆谋张飞',
                        lvmengon: '༓吕蒙',
                        caocaoon: '༓谋曹操',
                        zuxuncaion: '☆族荀采',
                        simazhaoon: '☆司马昭',
                        simashion: '☆司马师',
                        mouzhouyuon: '༓谋周瑜',
                        yuanshaoon: '༓谋袁绍',
                        liubeion: '༓谋刘备',
                        yangbiaoon: '☆杨彪',
                        majunon: '☆马钧',
                        chenmodegaoyangon: '沉默的羔羊',
                        wuzhugeon: '☆武诸葛亮',
                        shenzhouyuon: '☆神周瑜',
                        shenzuocion: '神左慈',
                        shenzhugeon: '神诸葛亮',
                        shenhuatuoon: '神华佗',
                        xinhuashen: '化身',
                        xinhuashen_info: '锁定技,游戏开始时或每当你受到伤害后,你随机发现3个技能(你不能发现限定技和主公技)并选择获得其中一个',
                        zhinang1: '智囊',
                        zhinang1_info: '回合开始时,你随机获得牌堆中的一张锦囊牌.',
                        shipo: '识破',
                        shipo_info: '锁定技,你不能成为其他角色的锦囊牌的目标',
                        zhinang: '智囊',
                        zhinang_info: '锁定技,回合开始时,你随机获得牌堆中的一张锦囊牌,每当你于回合内使用一张锦囊牌,你随机获得牌堆一张锦囊牌;你最多通过次技能获得2张锦囊牌,你使用锦囊牌没有距离限制,你的手牌上限始终等于你的体力上限.',
                        qixing7: '天灯',
                        qixing7_info: '限定技,当你进入频死阶段时,你可以亮出牌堆顶7张牌,若7张牌点数和不小于49则你增加一点体力上限并将体力回复至体力上限失去技能[智囊]获得技能[观星],[虎将],[业炎]和[识破],若小于49则你死亡',
                        hujiang: '虎将',
                        hujiang_info: '限定技,出牌阶段,你可摸两张牌并获得技能[龙胆],[武圣],[咆哮],[烈弓],[铁骑]直到回合结束.',
                        chonghua: '新生',
                        chonghua_info: '出牌阶段限一次,你可以选择自己的一个技能,失去此技能并重新发现3个技能获得其中一个.',
                        jishion: '济世',
                        jishion_info: '出牌阶段限一次,你可以弃置一张♥️️牌,令一名角色先弃置所有手牌再摸等量的牌并展示,其中每有一张非基本牌,你令其回复1点体力,以此法回复的过量体力效果改为令其摸等量的牌.',
                        xuanxinon: '悬心',
                        xuanxinon_info: '一名角色受到伤害后,你可以从弃牌堆获得一张♥️️牌,可以交给其一张牌.',
                        '悲陈(改)': '悲陈(改)',
                        '悲陈(改)_info': '当你成为其他角色使用牌的目标时,你可以摸一张牌,若你因此受到了伤害,你失去一点体力上限否则你增加一点体力上限(你的体力上限至多为5).',
                        yinqiangon: '银枪',
                        yinqiangon_info: '出牌阶段限一次,你可观看一名角色的手牌并执行一项: 1.若其体力值不大于1,其失去1点体力,回复2点体力; 2.若其手牌中有[闪],你摸一张牌并视为对其使用一张[杀] ;3.若其场上有牌,你令其将你指定的一张牌当[杀]对你使用.',
                        longqiaoon: '龙峭',
                        longqiaoon_info: '当你受到1点伤害后,你可令伤害来源选择一项:1.受到1点伤害;2.其摸一张牌,你视为对其使用一张[杀].',
                        qinggangon: '青鋼',
                        qinggangon_info: '锁定技,转换技,你的[杀]无视防具,当你使用[杀]指定目标后,阴:此[杀]不可被响应;阳:你弃置其两张牌.',
                        悲陈: '悲陈',
                        悲陈_info: '锁定技,当你成为其他角色使用牌的目标时,你摸一张牌,若你因此受到了伤害,你失去一点体力上限否则你增加一点体力上限(你的体力上限至多为5).',
                        三哀: '三哀',
                        三哀_info: '锁定技,摸牌阶段,你改为摸等同于你体力上限的牌数;你死亡后,你令一名角色获得<悲陈>并改为非锁定技其从<界奸雄>,<放逐>,<恢拓>中选择获得一个.',
                        勤恪: '勤恪',
                        勤恪_info: '出牌阶段,当你使用或打出手牌后,你可以摸一张牌;出牌阶段限一次,当你造成伤害后,你可以摸等同于你体力值的牌弃置一张牌.',
                        dunshion: '遁世',
                        dunshion_info: '每回合限一次.你可以视为使用或打出一张【杀】/【闪】/【桃】/【酒】/【无懈可击】/【无中生有】/【火攻】/【决斗】/【顺手牵羊】/【借刀杀人】,当前回合角色于本回合内下一次造成伤害时,你选择两项:⒈防止此伤害.系统从技能名中包含<仁|义|礼|智|信|忠|勇|静|定|慧>任意一个字的技能中随机选择七个其未拥有的技能,你令当前回合角色获得其中一个技能.⒉获得一个<席>.⒊减1点体力上限并摸X张牌(X为你的<席>数).',
                        fanghunon: '芳魂',
                        fanghunon_info: '锁定技,你视为拥有【龙胆】.当你使用(指定目标)或被使用(成为目标)一张[杀]或[决斗]时,你摸一张牌.<br/> <br/> <b>龙胆</b> 你可以将[杀]当[闪],[闪]当[杀],[桃]当[酒],[酒]当[决斗]使用或打出.',
                        fuhanon: '扶汉',
                        fuhanon_info: '准备阶段,你可以回复1点体力,从随机8名蜀势力角色中选择获得至多X个没有特殊标签的技能直到你再次因[扶汉]获得技能(X为你的当前体力值且至多为5).',
                        queshion: '鹊拾',
                        queshion_info: '锁定技,游戏开始时,你将[梅影枪]置入你的装备区.出牌阶段限一次,你可以弃置一张不为[梅影枪]的红色牌,获得场上或者弃牌堆里的[梅影枪].',
                        fanghun_longdan: '龙胆',
                        fanghun_longdan_info: '你可以将[杀]当[闪],[闪]当[杀],[桃]当[酒],[酒]当[决斗]使用或打出.',
                        queshion1: '鹊拾1',
                        queshion1_info: '',
                        zunweion: '尊位',
                        zunweion_info: '出牌阶段限一次,你可以选择一名其他角色并执行一项,你可令其执行另一项:①回复或失去体力至与对方相同;②将手牌摸或弃至与对方相同;③随机使用或弃置装备牌至与对方相同.',
                        pianchongon: '偏宠',
                        pianchongon_info: '锁定技,当你未发动[偏宠]时,你无法受到伤害或弃置牌; 准备阶段/结束阶段,你获得一张红色牌与一张黑色牌并声明一种颜色,直到你下次使用此技能前,当你失去一张声明颜色的牌后,你从牌堆或弃牌堆中获得其他颜色的一张牌.',
                        pianchongon1: '偏宠1',
                        pianchongon1_info: '',
                        lijion: '力激',
                        lijion_info: '出牌阶段限X次,你可以弃置一张牌并对一名其他角色造成1点伤害.(X为本回合内进入过弃牌堆的卡牌数除以4,向下取整)',
                        fenyinon: '奋音',
                        fenyinon_info: '锁定技,当一张牌进入弃牌堆后,若你没有记录此牌的花色,你记录之并摸一张牌.每轮开始时,或你的准备和结束阶段,你清除所有记录.',
                        tianzuoon: '天佐',
                        tianzuoon_info: '①游戏开始时,你将8张[奇正相生]加入牌堆.②当一名角色成为[奇正相生]的目标后,你可以观看其手牌,你可以更改其的选择.③出牌阶段限一次,你可以与一名其他角色拼点,赢的角色视为使用一张[奇正相生].',
                        lingceon: '灵策',
                        lingceon_info: '锁定技,当一名角色使用锦囊牌时,你可以摸一张牌.',
                        pingjianon: '评荐',
                        pingjianon_info: '你可以于以下时机发动<评荐>:出牌阶段限一次;结束阶段;当你受到伤害后.若如此做,你摸一张牌并从随机三个此时机可发动的技能中选择一个发动.',
                        pingjianon_use: '评荐1',
                        pingjianon_use_info: '',
                        shirenon: '识人',
                        shirenon_info: '锁定技,回合结束后,你回复1点体力,你获得一个<评荐>过的技能.',
                        pingjianon_temp: '评荐2',
                        pingjianon_temp_info: '',
                        huishion: '慧识',
                        huishion_info: '出牌阶段限一次或当你受到伤害后,你可进行一次判定,若判定结果与此次进行判定的花色均不相同,你重复此步骤并增加1点体力上限.你可以将所有生效的判定牌交给任意一名角色.',
                        sghuishion: '辉逝',
                        sghuishion_info: '限定技,出牌阶段,你可增加两点体力上限并选择一名角色.若其有未发动的觉醒技且你的体力上限不小于存活人数,则你令其发动这些觉醒技;若其没有未发动的觉醒技,其摸四张牌.',
                        tianyion: '天翊',
                        tianyion_info: '觉醒技,准备阶段或当你进入濒死状态时,若所有角色均已受过伤害,你增加两点体力上限并回复全部体力,令一名角色获得技能[佐幸].',
                        zuoxingon: '佐幸',
                        zuoxingon_info: '你可以将牌堆顶牌当一张基本牌或普通锦囊牌使用或打出,若这两张牌类别不同,你减1点体力上限.',
                        zuoxingon_phase: '佐兴',
                        zuoxingon_phase_info: '',
                        tianzuoon1: '天佐1',
                        tianzuoon1_info: '',
                        xingshangon: '行殇',
                        xingshangon_info: '当一名其他角色进入濒死状态时,你可以获得其所有牌并回复1点体力.',
                        fangzhuon: '放逐',
                        fangzhuon_info: '当一名角色受到1点伤害后,你可令一名角色选择一项: 1.摸X张牌并翻面; 2.弃X张牌并失去1点体力(X为你已损失的体力值,若你未受伤则改为翻面)',
                        songweion: '颂威',
                        songweion_info: '当你执行弃牌阶段或翻面时,你跳过结算并摸一张牌.',
                        tonglion: '同礼',
                        tonglion_info: '出牌阶段限两次,当你使用基本牌或普通锦囊牌指定目标后,你可令此牌额外结算X次(X为你手牌中的花色数).',
                        tonglion2: 'tonglion2',
                        tonglion2_info: '',
                        shezangon: '奢葬',
                        shezangon_info: '每回合限一次,一名角色进入濒死状态时,你获得每种花色各一张牌.',
                        beigeon: '悲歌',
                        beigeon_info: '一名角色受到1点伤害后,若你没有手牌,你先摸两张牌,你可以弃置一张牌令其进行判定,若结果为:红色,其回复1点体力并摸两张牌;♣️️,伤害来源弃置三张牌;♠️️,伤害来源翻面.',
                        chenqingon: '陈情',
                        chenqingon_info: '一名角色进入濒死状态时,你可以令一名角色摸五张牌弃四张牌,若其弃置的牌花色均不同,濒死角色将体力回复至一点.',
                        lishangon: '离殇',
                        lishangon_info: '限定技,一名角色进入濒死状态时,你可回复1点体力并摸三张牌,令伤害来源失去所有技能.',
                        zongluanon: '纵乱',
                        zongluanon_info: '每回合限一次,一名角色使用伤害类锦囊指定目标后,你可以交给其一张牌并选择一项:1.此牌伤害+1且你可增加或减少一个目标; 2.此牌无效且其视为使用一张[文和乱武]',
                        dumouon: '毒谋',
                        dumouon_info: '锁定技,①游戏开始时,你将三张[文和乱武]加入牌堆;②[文和乱武]结算期间你视为移出游戏; ③准备阶段/当你受到伤害后,你从场上或弃牌堆获得每种类型各一张牌.',
                        dangxianon: '当先',
                        dangxianon_info: '锁定技,每轮开始时,你获得一个额外的回合.',
                        wushengon: '武圣',
                        wushengon_info: '你的红色牌可当[杀]使用或打出;出牌阶段你可使用五张[杀];你的♥️️[杀]无次数限制且不可被响应,♦️️[杀]无距离限制且伤害+1',
                        wushengon1: '武圣1',
                        wushengon1_info: '',
                        wushengon2: '武圣2',
                        wushengon2_info: '',
                        zhengnanon: '征南',
                        zhengnanon_info: '当一名角色进入濒死状态时,你回复一点体力并摸三张牌,从[武圣],[当先],[制蛮]中选择一个获得.',
                        zhimanon2: '制蛮',
                        zhimanon2_info: '',
                        zhimanon: '制蛮',
                        zhimanon_info: '①当你对其他角色造成伤害时,你可以防止此伤害,获得其区域内一张牌.②出牌阶段限一次,你可以弃置一名角色区域内的一张牌,若为非基本牌,其视为使用一张[南蛮入侵].',
                        xiefangon: '撷芳',
                        xiefangon_info: '锁定技,你与其他角色计算距离-X,你的手牌上限+X;一名女性角色死亡后,你增加1点体力上限回复1点体力,获得其一项技能(X为全场女性角色数+2).',
                        dumouon1: 'dumouon1',
                        dumouon1_info: '',
                        dumouon2: 'dumouon2',
                        dumouon2_info: '',
                        xuanfengon: '旋风',
                        xuanfengon_info: '当你一次性失去至少一张装备牌或两张手牌后,你可以弃置任意角色区域内共两张牌,你每以此法弃置一种类别的牌,你便可以造成1点伤害.',
                        zhurenon: '铸刃',
                        zhurenon_info: '①出牌阶段限两次,你可以弃一张牌从场外选择一张装备牌获得之.②出牌阶段你可以将两张同类别装备合成一张装备牌.③你通过铸刃锻造的装备牌进入弃牌堆时销毁之.',
                        tianjiangon: '天匠',
                        tianjiangon_info: '游戏开始时,你随机使用场外的装备牌补满装备栏.出牌阶段,你可以将一张装备牌置于一名其他角色的装备区内并摸两张牌,其获得一张对应的基本牌.',
                        zuizhanon_buff: 'zuizhanon_buff',
                        zuizhanon_buff_info: '',
                        zuizhanon: '醉战',
                        zuizhanon_info: '锁定技,你使用[酒]后增加1点体力上限并回复1点体力.当你体力上限不大于6时,你可以将一张红色牌当[酒]使用且无次数限制.',
                        xiaoyongon: '骁勇',
                        xiaoyongon_info: '当你使用[杀]造成伤害时, 你可以进行一次判定: ♥️️,你与其各减1点体力上限;♠️️,此[杀]伤害翻倍;否则,其本回合非锁定技失效.',
                        paoxiaoon1: '咆哮',
                        paoxiaoon1_info: '',
                        paoxiaoon_Buff: '咆哮',
                        paoxiaoon_Buff_info: '',
                        paoxiaoon: '咆哮',
                        paoxiaoon_info: '锁定技,你使用[杀]无次数限制;若你装备了武器,你的[杀]无距离限制且不可闪避.出牌阶段开始时,你可以减1点体力上限并摸三张牌,本回合你可将黑色手牌当雷[杀]使用或打出.',
                        pojunon: '破军',
                        pojunon_info: '当你使用[杀]指定目标后,你可以将其至多X张牌移出游戏(X为其体力上限);当前回合结束后,若该角色存活则其获得这些牌,否则你获得这些牌.当你使用[杀]造成伤害时,该角色翻面且你每有一个区 域内的牌数大于其则伤害+1.',
                        yichengon: '疑城',
                        yichengon_info: '当你使用或被使用一张[杀]时,你可摸两张牌弃一张牌,将[古锭刀]或其装备区内的一张牌置入你的装备区:当你受到1点伤害后,你可视为对伤害来源使用一张［杀］.',
                        poxion: '魄袭',
                        poxion_info: '出牌阶段限两次,你可观看一名其他角色的手牌,你可弃置你与其共计至少三张不同花色的手牌,根据弃置你的牌数量执行以下效果:零张,你与其各减1点体力上限:一张,你获得一张你指定类型的牌或移动场上的一张牌:两张,你回复1点体力并对其造成1点伤害:三张及以上,你从牌堆中获得不同花色的牌各一张',
                        jieyingon: '劫营',
                        jieyingon_info: '游戏开始时,或每轮开始时,你获得一枚<营>标记,你可将<营>任意分配给其他角色.有<营>的角色判定阶段开始时,你可令其额外进行一次[乐不思蜀]判定,其摸牌阶段摸牌数与[杀]的次数上限+X(X为<营> 的数量),弃牌阶段改为将手牌摸至体力上限.当其对你造成伤害时,移去一枚<营>并防止此伤害.其的结束阶段,若其没有[劫营],则移去一枚<营>其将所有手牌交给你.',
                        liegongon: '烈弓',
                        liegongon_info: '当你使用[杀]指定目标后,你可以亮出牌堆顶三张牌,每 有一张牌与此[杀]花色不同,此[杀]伤害+1,你获得其中花色相同的牌.你的[杀]无视距离与防具且无法被响应.',
                        dingjunon: '定军',
                        dingjunon_info: '一名角色跳过阶段后或你的出牌阶段限一次,你可与其拼点(若为你则选择一名角色):若你赢,你视为对其使用一张[杀];否则你回复1点体力且当前回合角色本回合无法使用[杀].',
                        fulion: '伏枥',
                        fulion_info: '限定技,当你进入濒死状态时,你可以回复至X点体力并摸X张牌,你翻面且你获得一张武器牌与一张[杀]并立即进行一个额外的出牌阶段(X为场上存活的角色数).',
                        xianfengon: '先锋',
                        xianfengon_info: '当你击杀一名角色后或每回合首次使用[杀]后,你进行判定:红色,回复1点体力并获得1点护甲;黑色,摸三张牌.',
                        yangkuangon: '阳狂',
                        yangkuangon_info: '一名角色回复体力后,若其体力值等于上限,你可视为使用一张[酒],与其各摸一张牌.',
                        cihuangon: '雌黄',
                        cihuangon_info: '当一张牌效果被抵消后,你可将一张牌当基本牌或普通锦囊牌对使用者使用,若以此法使用的牌未造成伤害,你从弃牌堆获得一张同类牌.',
                        sankuon: '三窟',
                        sankuon_info: '锁定技,准备阶段或当你濒死时,你进行判定: 若不大于10,你获得并发动一个觉醒技;否则你的体力上限,摸牌阶段摸牌数,[杀]的伤害基数+1.回复体力至上限',
                        cizhenon: '赐鸩',
                        cizhenon_info: '一名角色的出牌阶段开始时,你可弃一张红色牌/黑色牌,你令该角色视为使用一张[桃]/[酒],并执行以下效果:♥️️️:你可回复1点体力;♦️️️:你可与其各摸一张牌;♣️️️:其跳过本回合弃牌阶段;♠️️️: 其失去1点体力.',
                        dufeion: '毒妃',
                        dufeion_info: '出牌阶段限一次,你可翻面并摸三张牌,若如此做,本回合你的[杀]均视为[毒杀]且可额外指定两个目标;一名角色的准备阶段,若其拥有<毒>标记, 你可令之立即生效',
                        qiluanon: '戚乱',
                        qiluanon_info: '每回合限一次,一名角色进入濒死状态时,若该角色为你,你回复1点体力并摸一张牌,否则你摸三张牌.',
                        guyaoon2: 'guyaoon2',
                        guyaoon2_info: '',
                        guyaoon: '蛊药',
                        guyaoon_info: '当你失去体力后,你可令一名其他角色回复等量体力;当你回复体力后,你可令一名其他角色失去等量体力.',
                        duyion: '毒医',
                        duyion_info: '出牌阶段限一次,你可以展示牌堆顶的一张牌并交给一名角色,若此牌为: 红色,其失去1点体力;黑色,其本回合不能使用或打出手牌.本回合结束阶段,你可令其回复2点体力.',
                        tianduon: '天妒',
                        tianduon_info: '锁定技,准备阶段,你额外进行一次[闪电]判定.你的判定牌生效后,你获得并可使用之.',
                        tianduon2: '天妒',
                        tianduon2_info: '',
                        tianxiangon: '天香',
                        tianxiangon_info: '出牌阶段,你可以选择一项: 1.弃置一张♥️️️牌,令一名角色无法减少体力和体力上限直到下回合开始;2.弃置一张♠️️️牌,令一名角色无法增加体力和体力上限直到下回合开始.',
                        piaolingon: '飘零',
                        piaolingon_info: '准备阶段,你可移动场上一张牌;一名角色失去装备牌后,你获得手牌缺少的花色各一张.',
                        xianshion: '先识',
                        xianshion_info: '锁定技,游戏开始时/当该角色死亡时,你选择一名其他角色.当你受到伤害后,其受到等量伤害;当其回复体力后,你回复等量体力.',
                        chouceon: '筹策',
                        chouceon_info: '当你受到伤害后,你视为对一名其他角色使用一张锦囊牌;当你回复体力后,你摸两张牌.',
                        pianchongon2: '偏宠2',
                        pianchongon2_info: '',
                        mowangon: '魔王',
                        mowangon_info: '锁定技,游戏的前十轮,你只能通过摸牌阶段获得牌,你无法受到伤害或失去牌.',
                        mowangon1: 'mowangon1',
                        mowangon1_info: '',
                        kongjuon: '恐惧',
                        kongjuon_info: '锁定技,弃牌阶段开始时,若你本回合出牌阶段没有使用或打出过[杀],你跳过此阶段,增加1点体力上限并回复1点体力.',
                        qinxueon: '勤学',
                        qinxueon_info: '锁定技,游戏前十轮,你于出牌阶段无法使用锦囊牌;从游戏的第十一轮开始,你每个出牌阶段开始时依次获得[博图],[反间],[谦逊],[缔盟].',
                        jinnangon_Buff: 'jinnangon_Buff',
                        jinnangon_Buff_info: '',
                        jianxiongon: '奸雄',
                        jianxiongon_info: '转换技,阳: 出牌阶段/当你受到伤害后 ,你可以随机获得一张伤害牌并摸一张牌;阴: 当其他角色使用伤害牌指定目标后,你可以令其交给你一张同类牌,否则此牌失效',
                        bayeon: '霸业',
                        bayeon_info: '出牌阶段对每名角色限一次,你可令一名角色选择一项: 1.获得一个额外回合 ,该回合结束后你对其造成X点伤害;2.弃X张牌,若为你则清空[霸业]次数(X为[霸业]发动次数)',
                        hujiaon: '护驾',
                        hujiaon_info: '每轮限一次,当你受到伤害时,你可弃一张牌将此伤害转移给其他角色,你获得伤害牌或[绝影]并使用之',
                        lieshion: '烈誓',
                        lieshion_info: '出牌阶段,你可选择一项,令一名其他角色选择另一项:1弃置花色最多的手牌:2弃置类别最多的手牌:3.废除判定区并受到1点火焰伤害',
                        dianzhanon: '点盏',
                        dianzhanon_info: '当你每轮首次使用一种花色的牌后或即将受到属性伤害时,你可以横置或重置至多两名角色,重铸至多X张牌(X为场上横置的角色数)',
                        huanyinon: '还阴',
                        huanyinon_info: '锁定技,当你受到伤害后,你须横置或重置.当你进入横置/濒死状态时,将手牌补至四张:当你脱离横置/濒死状态时,你回复1点体力.',
                        yimieon: '夷灭',
                        yimieon_info: '当你造成伤害时,你可以失去1点体力,将伤害值改为目标体力上限.',
                        tairanon: '泰然',
                        tairanon_info: '锁定技 ,你的结束阶段,或每轮开始时,若你的体力上限小于10,你增加1点体力上限,你回复全部体力,并从弃牌堆获得每种基本牌各一张.',
                        suzhion: '夙智',
                        suzhion_info: '锁定技,出牌阶段各限三次: ①当你使用非基本牌时,若为锦囊牌,你可摸一张牌,否则你可弃置一名角色区域内一张牌; ②当你使用【杀】/【决斗】/【火攻】造成伤害时,你可令此伤害+1; ③其他角色弃置牌后,你可获得其中一张牌. 结束阶段,你摸三张牌,弃一张牌获得[反馈]直到下回合开始.',
                        suzhion_Deputy: 'suzhion_Deputy',
                        suzhion_Deputy_info: '',
                        zhaoxinon: '昭心',
                        zhaoxinon_info: '准备阶段或当你受到伤害后,你展示手牌并可选择一项: 1.令一名角色摸或弃两张牌;2.与一名其他角色交换手牌.',
                        yingzion: '英姿',
                        yingzion_info: '锁定技,你的摸牌数与手牌上限+X(X为你的当前体力值)',
                        fanjianon: '反间',
                        fanjianon_info: '出牌阶段限一次,你可以将任意数量的手牌交给一名其他角色,其选择一项:1,受到等量的伤害;2,将武将牌翻面;3,交给你所有手牌',
                        liaohuoon: '燎火',
                        liaohuoon_info: '一名其他角色于你的回合内获得牌时,你可以弃置一张红色牌,对其造成1点火焰伤害.',
                        yongjinon: '勇进',
                        yongjinon_info: '①当你使用或被使用[杀]时,若此[杀]目标唯一,你可以令此[杀]不可被响应并进行判定: 若为♠️️,对调使用者与目标;②你可以弃置两张[闪]或一张装备牌视为使用一张无视距离的[刺杀].',
                        yongjinX: '回击',
                        yongjinX_info: '①准备阶段或当你受到伤害后,你可以令一名角色从场上或弃牌堆随机获得一件装备牌并使用之.②你可以将装备牌当做无距离限制的刺[杀]使用.',
                        tuishion: '推弑',
                        tuishion_info: '隐匿技,你登场后,你可令一名角色失去1点体力.',
                        luanjion: '乱击',
                        luanjion_info: '出牌阶段,你可以将任意两张相同花色的手牌当做[万箭齐发]使用,或将之按照以下规则使用: ♥️️,[无中生有];♦️️,[桃园结义];♠️️,[顺手牵羊];♣️️,[过河拆桥].',
                        mingmenon: '名门',
                        mingmenon_info: '转换技,准备阶段, 阳: 你回复1点体力, 视为拥有[图射];阴: 你受到1点火焰伤害, 视为拥有[英姿].',
                        xueyion: '血裔',
                        xueyion_info: '锁定技,你使用锦囊牌可增加或减少至多X个目标, 你手牌上限+2X(X为场上的群雄角色数)',
                        dinghanX: '定策',
                        dinghanX_info: '锁定技,①当你成为未记录过的锦囊牌的目标时,你记录此牌名并取消之.②你的回合内限一次,你可以将一张牌当做任意一张锦囊牌使用,若你已记录那张牌的牌名,则你需先移去该牌名,否则,此牌结算后,你记录此牌的牌名.',
                        dinghanon: '定汉',
                        dinghanon_info: '锁定技,①其他角色使用的锦囊牌对你无效;②每回合限一次,你可视为使用一张锦囊牌.',
                        dinghanon1: '定汉1',
                        dinghanon1_info: '',
                        dinghanon2: '定汉2',
                        dinghanon2_info: '',
                        renhuaion: '仁怀',
                        renhuaion_info: '转换技,准备阶段,你选择至多两名角色,直到你下回合开始,阳: 这些角色分别获得[武圣]与[咆哮],视为对你与这些角色使用一张[桃园结义];阴: 这些角色获得牌后你摸等量的牌,视为对你与这些角色使用一张[五谷丰登].',
                        renhuaion_wusheng: '武圣',
                        renhuaion_wusheng_info: '你的红色牌可当[杀]使用或打出;出牌阶段你可使用五张[杀];你的♥️️[杀]无次数限制且不可被响应,♦️️[杀]无距离限制且伤害+1',
                        renhuaion_paoxiao: '咆哮',
                        renhuaion_paoxiao_info: '锁定技,你使用[杀]无次数限制;若你装备了武器,你的[杀]无距离限制且不可闪避.出牌阶段开始时,你可以减1点体力上限并摸三张牌,本回合你可将黑色手牌当雷[杀]使用或打出.',
                        juyion: '聚义',
                        juyion_info: '锁定技,每轮开始时,你移除场上所有<义>并失去等量体力,获得<义>;一名角色受到伤害前,你可令其获得<义>;拥有<义>的角色无法受到伤害',
                        zhengfaon: '征伐',
                        zhengfaon_info: '限定技,当你即将死亡时, 你可以防止之,将手牌数、体力上限与体力值调整为4,失去[仁怀]并获得[仇袭]',
                        chouxion: '仇袭',
                        chouxion_info: '出牌阶段限一次,你可以弃置一张手牌并展示牌堆顶的三张牌,令一名其他角色选择一项:1.弃置一张与展示牌类别均不同的牌,令你获得展示的牌;2.受到你造成的2点伤害并获得其中一种类别的牌,你获得其余的牌. ',
                        zhaohanon: '昭汉',
                        zhaohanon_info: '锁定技,准备阶段, 若你的体力值与护甲值之和不大于7,你增加1点体力上限并回复1点体力;否则你减1点体力上限并获得1点护甲,视为对一名已受伤角色使用一张[杀]',
                        rangjieon: '让节',
                        rangjieon_info: '当你受到1点伤害后, 你可以摸一张牌并选择一项: 1.选择至多两张不同牌名的牌获得之;2.将一名角色场上的任意张牌移动到另一名角色区域内;3.移动一名角色的一项技能',
                        yizhengon: '义争',
                        yizhengon_info: '出牌阶段,你可与一名角色拼点: 若你赢, 其跳过下个摸牌阶段且在此之前不可对其发动[义争];否则你选择一项: 1.减1点体力上限;2.受到1点伤害;3.交给其他角色两张牌',
                        qiaosion: '巧思',
                        qiaosion_info: '出牌阶段限一次,你可以调配一杯「老马百味汁」并根据表演结果获得相应的牌.你可以令场上的一名角色将[沉默的羔羊]作为副将并选择一项:1.弃置五张牌,视为使用一张普通锦囊牌,且此牌对指定的首目标额外生效一次;2. 浇给~名其他角色五张牌, 令其获得[灵魂之子]',
                        yangtouon: '羊头',
                        yangtouon_info: '锁定技,当你获得牌后,你受到1点伤害;你视为拥有技能[无言]与[矢北].',
                        lhzzon: '灵魂之子',
                        lhzzon_info: '锁定技,当你受到或造成伤害后,或者回复或失去体力后,你摸一张牌.',
                        zhizheon: '智哲',
                        zhizheon_info: '出牌阶段限一次,若你手牌中没有复制牌,你可复制所有手牌(至多五张).当你使用复制牌后, 你可以交给一名角色,这张牌本回合无法使用.',
                        qingshion: '情势',
                        qingshion_info: '当你使用牌时,你可以选择一项: 1.令此牌对其中一个目标伤害+1;2.令任意名其他角色各摸一张牌;3.摸三张牌,[情势]于本回合无效.',
                        jincuion: '尽瘁',
                        jincuion_info: '①游戏开始时/每个准备阶段,你将手牌摸至七张;②每回合开始时,你可以观看牌堆顶X张牌并任意顺序置于牌堆顶或牌堆底(X初始为7,每次发动后X-1);③你的回合开始前,你将体力值与X的值回复至7',
                        jingxieon: '精械',
                        jingxieon_info: ' 每个回合开始时,你补满装备栏;出牌阶段,你可强化装备牌;你可将装备牌当基本牌或[无懈可击]使用并摸一张牌;当你进入濒死状态时,你可以重铸装备区内所有牌并补满装备栏,回复等量体力',
                        jingxieon1: '精械',
                        jingxieon1_info: '',
                        jingxieon2: '精械',
                        jingxieon2_info: '',
                        qinyinon: '琴音',
                        qinyinon_info: '当你受到伤害后或主要阶段结束时,你可以选择一项:⒈摸两张牌,令所有角色各失去1点体力;2.弃两张牌,令所有角色各回复1点体力.',
                        yeyanon: '业炎',
                        yeyanon_info: '出牌阶段限一次,你可以摸两张牌并弃置任意张不同花色的牌,横置等量名角色,你对一名其他角色造成随机1~3点火焰伤害',
                        qinyinon1: 'qinyinon1',
                        qinyinon1_info: '',
                        qinyinon2: 'qinyinon2',
                        qinyinon2_info: '',
                        zhenhunon: '镇魂',
                        zhenhunon_info: '准备阶段,你进行判定并获得判定牌: 若为红色,你摸两张牌并获得[知己]至下回合开始;否则你对一名角色造成随机1~3点火焰伤害',
                    },
                };
                lib.config.all.characters.add('风起雨落');
                lib.config.characters.add('风起雨落');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:风起雨落/image/${i}.jpg`)
                }
                lib.translate['风起雨落_character_config'] = `风起雨落`;
                return QQQ;
            });
        },
        package: {
            card: {
                closeable: true,
                card: {
                    dusha: {
                        image: `ext:风起雨落/image/dusha.jpg`,
                        fullskin: true,
                    },
                    wenheluanwu_card: {
                        image: 'ext:风起雨落/wenheluanwu_card.png',
                        audio: true,
                        type: 'trick',
                        enable: true,
                        selectTarget: -1,
                        toself: true,
                        filterTarget(card, player, target) {
                            return target == player;
                        },
                        modTarget: true,
                        content() {
                            'step 0';
                            event.current = player.next;
                            ('step 1');
                            event.current.chooseToUse('乱武:使用一张杀或流失一点体力', { name: 'sha' }, function (card, player, target) {
                                if (player == target) return false;
                                if (!player.canUse('sha', target)) return false;
                                if (get.distance(player, target) <= 1) return true;
                                if (
                                    game.hasPlayer(function (current) {
                                        return current != player && get.distance(player, current) < get.distance(player, target);
                                    })
                                ) {
                                    return false;
                                }
                                return true;
                            });
                            ('step 2');
                            if (result.bool == false) event.current.loseHp();
                            if (event.current.next != player) {
                                event.current = event.current.next;
                                event.goto(1);
                            }
                        },
                        ai: {
                            basic: {
                                order: 1,
                                useful: 4.5,
                                value: 9.2,
                            },
                            result: {
                                player(player) {
                                    if (lib.config.mode == 'identity' && game.zhu.isZhu && player.identity == 'fan') {
                                        if (game.zhu.hp == 1 && game.zhu.countCards('h') <= 2) return 1;
                                    }
                                    var num = 0;
                                    var players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        var att = get.attitude(player, players[i]);
                                        if (att > 0) att = 1;
                                        if (att < 0) att = -1;
                                        if (players[i] != player && players[i].hp <= 3) {
                                            if (players[i].countCards('h') == 0) num += att / players[i].hp;
                                            else if (players[i].countCards('h') == 1) num += att / 2 / players[i].hp;
                                            else if (players[i].countCards('h') == 2) num += att / 4 / players[i].hp;
                                        }
                                        if (players[i].hp == 1) num += att * 1.5;
                                    }
                                    if (player.hp == 1) {
                                        return -num;
                                    }
                                    if (player.hp == 2) {
                                        return -game.players.length / 4 - num;
                                    }
                                    return -game.players.length / 3 - num;
                                },
                            },
                        },
                        fullskin: true,
                    },
                },
                translate: {
                    wenheluanwu_card: '文和乱武',
                    wenheluanwu_card_info: '出牌阶段,对你使用.除你以外的所有其他角色必须对与他距离最近的一名角色使用一张[杀],否则失去1点体力.',
                    dusha: '毒杀',
                    dusha_info: '出牌阶段,对你攻击范围内一名角色使用.其需使用一张【闪】,否则你对其造成1点<毒>属性伤害.',
                },
                list: [
                    //牌堆
                    ['club', '7', 'sha', 'fqyl_du'],
                    ['club', '5', 'sha', 'fqyl_du'],
                    ['club', '6', 'sha', 'fqyl_du'],
                    ['spade', '2', 'sha', 'fqyl_du'],
                    ['spade', '9', 'sha', 'fqyl_du'],
                    ['club', '12', 'sha', 'fqyl_du'],
                    ['spade', '4', 'sha', 'fqyl_du'],
                    ['spade', '7', 'sha', 'fqyl_du'],
                    ['heart', '13', 'sha', 'fqyl_du'],
                    ['diamond', '13', 'sha', 'fqyl_du'],
                    ['spade', '1', 'wenheluanwu_card'],
                    ['club', '1', 'wenheluanwu_card'],
                    ['diamond', '1', 'wenheluanwu_card'],
                    ['heart', '1', 'wenheluanwu_card'],
                ],
            },
            intro: "十分阴间的新人扩展,感谢玄冥麟影,铝宝,樱河,夜凌,萌新,Angel,lonely patients等各位大佬对本扩展的帮助与支持.<br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '時雨',
            version: '4.5',
        },
    };
});

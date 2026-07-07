import { lib, game, ui, get, ai, _status } from '../../noname.js'
game.import('extension', function (lib, game, ui, get, ai, _status) {
    return {
        name: '圣歼之战',
        content(config, pack) {
            //检测版本
            if (lib.version.indexOf('β') >= 0) {
                alert('当前拓展圣歼之战不适配β版无名杀以及清瑶/清梨版启动器,为了您的正常游玩和生命安全,已为您删除本拓展,想体验游玩的欢迎下载并支持正版无名杀,很抱歉为您带来了不好的体验!');
                game.removeExtension('圣歼之战');
                throw new Error();
            }
        },
        precontent() {
            game.import('character', function (lib, game, ui, get, ai, _status) {
                const QQQ = {
                    name: '圣歼之战',
                    connect: true,
                    characterSort: {
                    },
                    dynamicTranslate: {
                    },
                    skill: {
                        tgtt_srgtslykabalazhili: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgtsly:2',
                            trigger: {
                                player: ['loseMaxHpBegin'],
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            forced: true,
                            _priority: 998,
                            content() {
                                var num = trigger.num;
                                player.gainMaxHp(num);
                                player.recover(num);
                                trigger.cancel();
                                player.addTempSkill('tgtt_srtsqianxing', { player: 'phaseEnd' });
                                player.addTempSkill('tgtt_srtsmianyi', { player: 'phaseEnd' });
                            },
                            group: ['tgtt_srgtslykabalazhili_cancel', 'tgtt_srgtslykabalazhili_wei', 'tgtt_srgtslykabalazhili_zhi', 'tgtt_srgtslykabalazhili_fang'],
                            subSkill: {
                                cancel: {
                                    trigger: {
                                        player: 'linkBegin',
                                    },
                                    audio: 'tgtt_srgtslykabalazhili',
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !player.isLinked();
                                    },
                                    content() {
                                        trigger.untrigger();
                                        trigger.finish();
                                    },
                                },
                                wei: {
                                    trigger: {
                                        player: 'turnOverBefore',
                                    },
                                    audio: 'tgtt_srgtslykabalazhili',
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        trigger.cancel();
                                    },
                                    ai: {
                                        noturnOver: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.tag(card, 'turnOver')) return [0, 0];
                                            },
                                        },
                                    },
                                },
                                zhi: {
                                    trigger: {
                                        player: 'phaseBefore',
                                        global: 'gameStart',
                                    },
                                    nopop: true,
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    audio: 'tgtt_srgtslykabalazhili',
                                    content() {
                                        player.lockOut = true;
                                    },
                                    _priority: -1,
                                },
                                fang: {
                                    trigger: {
                                        player: ['damageBefore', 'loseHpBefore'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    audio: 'tgtt_srgtslykabalazhili',
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return Math.random() < 0.5;
                                    },
                                    content() {
                                        player.addTempSkill('tgtt_srtsqianxing', { player: 'phaseEnd' });
                                        player.addTempSkill('tgtt_srtsmianyi', { player: 'phaseEnd' });
                                    },
                                },
                            },
                            _priority: 99800,
                        },
                        tgtt_srgtslytongxing: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgtsly:2',
                            TaiguSkill: true,
                            charlotte: true,
                            fixed: true,
                            trigger: {
                                global: 'roundStart',
                            },
                            filter(event, player) {
                                if (event.player.name2 == 'tgtt_srgod' || event.player.name2 == 'tgtt_tsliuying') return false;
                                if (
                                    game.hasPlayer(function (current) {
                                        return (current != player && current.name1 == 'tgtt_srgod') || (current != player && current.name1 == 'tgtt_tsliuying') || (current != player && current.name2 == 'tgtt_srgod') || (current != player && current.name2 == 'tgtt_tsliuying');
                                    })
                                )
                                    return false;
                                return Math.ceil(game.players.length) > 2;
                            },
                            mode: ['identity'],
                            content() {
                                'step 0';
                                player.awakenSkill('tgtt_srgtslytongxing');
                                player
                                    .chooseTarget('请选择【同行】目标', function (card, player, target) {
                                        return target != player && target.identity != 'zhu';
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(_status.event.player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.line(target, 'green');
                                    if (player.identity == 'nei') {
                                        if (target.identity == 'zhong') {
                                            player.identity = 'zhong';
                                            game.zhong = player;
                                            player.showIdentity();
                                            player.update();
                                        }
                                        if (target.identity == 'fan') {
                                            player.identity = 'fan';
                                            game.fan = player;
                                            player.showIdentity();
                                            player.update();
                                        }
                                    } else {
                                        event.goto(2);
                                    }
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (player.name == 'tgtt_srgod' || player.name1 == 'tgtt_srgod') {
                                    event.goto(3);
                                } else if (player.name == 'tgtt_tsliuying' || player.name1 == 'tgtt_tsliuying') {
                                    event.goto(4);
                                } else {
                                    event.finish();
                                }
                                ('step 3');
                                target.disableSkill('tgtt_srgtslytongxing', lib.character[target.name][3]);
                                target.revive();
                                target.disableSkill('tgtt_srgtslytongxing', lib.character[target.name][3]);
                                var name = target.name;
                                _status.characterlist.add(name);
                                _status.characterlist.remove('tgtt_tsliuying');
                                target.reinit(name, 'tgtt_tsliuying');
                                target.maxHp = 4;
                                target.hp = 4;
                                target.hujia = 4;
                                target.changeGroup('taigu');
                                if (player.identity == 'zhu' || player.identity == 'zhong') {
                                    target.identity = 'zhong';
                                    game.zhong = target;
                                    target.showIdentity();
                                    target.update();
                                }
                                if (player.identity == 'fan') {
                                    target.identity = 'fan';
                                    game.fan = target;
                                    target.showIdentity();
                                    target.update();
                                }
                                target.addSkill('tgtt_srgtslytongxing_fu');
                                target.addSkill('tgtt_srgtslytongxing_mian');
                                target.addSkill('tgtt_srgtslytongxing_zhui');
                                player.addSkill('tgtt_srgtslytongxing_fu');
                                player.addSkill('tgtt_srgtslytongxing_mian');
                                player.addSkill('tgtt_srgtslytongxing_zhui');
                                event.finish();
                                ('step 4');
                                target.disableSkill('tgtt_srgtslytongxing', lib.character[target.name][3]);
                                target.revive();
                                target.disableSkill('tgtt_srgtslytongxing', lib.character[target.name][3]);
                                var name = target.name;
                                _status.characterlist.add(name);
                                _status.characterlist.remove('tgtt_srgod');
                                target.reinit(name, 'tgtt_srgod');
                                target.maxHp = 4;
                                target.hp = 4;
                                target.hujia = 4;
                                target.changeGroup('taigu');
                                if (player.identity == 'zhu' || player.identity == 'zhong') {
                                    target.identity = 'zhong';
                                    game.zhong = target;
                                    target.showIdentity();
                                    target.update();
                                }
                                if (player.identity == 'fan') {
                                    target.identity = 'fan';
                                    game.fan = target;
                                    target.showIdentity();
                                    target.update();
                                }
                                target.addSkill('tgtt_srgtslytongxing_fu');
                                target.addSkill('tgtt_srgtslytongxing_mian');
                                target.addSkill('tgtt_srgtslytongxing_zhui');
                                player.addSkill('tgtt_srgtslytongxing_fu');
                                player.addSkill('tgtt_srgtslytongxing_mian');
                                player.addSkill('tgtt_srgtslytongxing_zhui');
                                event.finish();
                            },
                            subSkill: {
                                fu: {
                                    audio: 'tgtt_srgtslytongxing',
                                    forced: true,
                                    popup: false,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    fixed: true,
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    content() {
                                        var num = trigger.num;
                                        if (trigger.player != player && trigger.player.hasSkill('tgtt_srgtslytongxing_fu') && (trigger.player.name == 'tgtt_tsliuying' || trigger.player.name == 'tgtt_srgod')) {
                                            trigger.cancel();
                                            trigger.player.recover(num);
                                        } else {
                                            game.countPlayer(function (current) {
                                                if (current != player && current.hasSkill('tgtt_srgtslytongxing_fu') && (current.name == 'tgtt_tsliuying' || current.name == 'tgtt_srgod')) {
                                                    current.chooseDrawRecover(num, num, true, '摸' + num + '张牌或回复' + num + '点体力');
                                                }
                                            });
                                        }
                                    },
                                },
                                mian: {
                                    trigger: {
                                        global: 'damageBegin1',
                                    },
                                    audio: 'tgtt_srgtslytongxing',
                                    TaiguSkill: true,
                                    charlotte: true,
                                    fixed: true,
                                    filter(event, player) {
                                        return event.player != player && (event.player.name == 'tgtt_tsliuying' || event.player.name == 'tgtt_srgod');
                                    },
                                    prompt(event, player) {
                                        var str = '';
                                        str += '是否对' + get.translation(event.player) + '发动【同行】免疫此伤害？';
                                        return str;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) > 0 && event.player.hp <= 2 && (player.hp > event.num || player.countCards('he') >= event.num);
                                    },
                                    content() {
                                        'step 0';
                                        event.nums = trigger.num;
                                        ('step 1');
                                        player.chooseToDiscard(trigger.num, '弃置' + event.nums + '张牌,或失去' + event.nums + '点体力免疫此伤害').set('ai', function (card) {
                                            var trigger = _status.event.getTrigger();
                                            if ((player.countCards('he', 'shan') == 1 || player.countCards('he', 'tao') == 1 || player.countCards('he', 'jiu') == 1) && player.countCards('he') == 1) {
                                                return false;
                                            }
                                        });
                                        ('step 2');
                                        if (result.bool == false) {
                                            player.loseHp(trigger.num);
                                        }
                                        trigger.num = 0;
                                    },
                                },
                                zhui: {
                                    trigger: {
                                        global: 'die',
                                    },
                                    audio: 'tgtt_srgtslytongxing',
                                    filter(event, player) {
                                        return (
                                            event.player != player &&
                                            (event.player.name == 'tgtt_tsliuying' || event.player.name == 'tgtt_srgod') &&
                                            event.player.getStockSkills(true, true).filter(function (skill) {
                                                var info = get.info(skill);
                                                return info && !info.charlotte;
                                            }).length
                                        );
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    fixed: true,
                                    forced: true,
                                    content() {
                                        var skills = trigger.player.getStockSkills(true, true).filter(function (skill) {
                                            var info = get.info(skill);
                                            return info && !info.charlotte;
                                        });
                                        if (skills.length) {
                                            for (var i of skills) player.addSkillLog(i);
                                        }
                                    },
                                },
                            },
                        },
                        tgtt_srgtslyhuhuan: {
                            enable: 'phaseUse',
                            TaiguSkill: true,
                            charlotte: true,
                            _priority: null,
                            filter(event, player) {
                                if (
                                    game.hasPlayer(function (current) {
                                        return (current != player && current.name1 == 'tgtt_srgod') || (current != player && current.name1 == 'tgtt_tsliuying') || (current != player && current.name2 == 'tgtt_srgod') || (current != player && current.name2 == 'tgtt_tsliuying');
                                    })
                                )
                                    return false;
                                return (event.player.name1 != 'tgtt_srgod' && event.player.name2 == 'tgtt_tsliuying') || (event.player.name1 != 'tgtt_tsliuying' && event.player.name2 == 'tgtt_srgod') || (event.player.name1 == 'tgtt_srgod' && event.player.name2 != 'tgtt_tsliuying') || (event.player.name1 == 'tgtt_tsliuying' && event.player.name2 != 'tgtt_srgod');
                            },
                            check(event, player) {
                                if (player.additionalSkills.yirong == undefined) return true;
                                return [true, false, false].randomGet();
                            },
                            content() {
                                'step 0';
                                if (player.name1 == 'tgtt_srgod' || player.name2 == 'tgtt_tsliuying') {
                                    event.goto(1);
                                } else if (player.name1 == 'tgtt_tsliuying' || player.name2 == 'tgtt_srgod') {
                                    event.goto(2);
                                }
                                ('step 1');
                                player.changeCharacter(['tgtt_srgod', 'tgtt_tsliuying']);
                                event.goto(3);
                                ('step 2');
                                player.changeCharacter(['tgtt_tsliuying', 'tgtt_srgod']);
                                event.goto(3);
                                ('step 3');
                                game.triggerEnter(player);
                            },
                            ai: {
                                threaten: 6,
                            },
                        },
                        tgtt_srgodheianshoulie: {
                            trigger: {
                                player: 'phaseHuntBegin',
                                global: 'roundStart',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                            forced: true,
                            _priority: 9,
                            content() {
                                'step 0';
                                if (lib.config.extension_太古天庭_extTgtt_Cunzaili) {
                                    game.countPlayer(function (current) {
                                        if (current != player && current.name != 'tgtt_tsliuying') {
                                            var num = Math.ceil(current.tgtt_ep / 10);
                                            player.line(current);
                                            player.tgtt_changeEp(Math.ceil(player.tgtt_ep / 10));
                                            current.tgtt_changeEp(-num);
                                        }
                                    });
                                }
                                ('step 1');
                                game.hasPlayer(function (current) {
                                    if (current.maxHp > player.maxHp) {
                                        player.gainMaxHp();
                                    }
                                });
                                ('step 2');
                                if (player.hp < player.maxHp) player.recover();
                                ('step 3');
                                if (player.hujia < player.maxHp) player.changeHujia();
                                ('step 4');
                                if (!player.isMaxHandcard(true)) player.draw(2);
                                ('step 5');
                                if (!player.isMaxEquip()) {
                                    var equip = get.cardPile(function (card) {
                                        return get.type(card) == 'equip' && player.hasUseTarget(card);
                                    });
                                    if (equip) player.chooseUseTarget(equip, 'nothrow', 'nopopup', true);
                                }
                            },
                            group: 'tgtt_srgodheianshoulie_po',
                            subSkill: {
                                po: {
                                    trigger: {
                                        player: 'tgtt_changeEpBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    popup: false,
                                    forced: true,
                                    filter(event, player) {
                                        if (event.num > 0 && player.tgtt_ep == player.tgtt_maxEp && event.player == player) return true;
                                        return false;
                                    },
                                    content() {
                                        player.tgtt_changeMaxEp(trigger.num);
                                        trigger.cancel();
                                    },
                                },
                            },
                            _priority: 900,
                        },
                        tgtt_srgodtianzao: {
                            mahouSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return !player.hasSkill('tgtt_srgodtianzao_mahou');
                            },
                            content() {
                                'step 0';
                                player.loseHp();
                                player
                                    .chooseControl('1回合', '2回合', '3回合')
                                    .set('prompt', '请选择施法时长')
                                    .set('ai', function () {
                                        return 2;
                                    });
                                ('step 1');
                                player.storage.tgtt_srgodtianzao_mahou = [result.index + 1, result.index + 1];
                                player.addTempSkill('tgtt_srgodtianzao_mahou', { player: 'die' });
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player(player, target) {
                                        if (player.hp > 1) return 1;
                                        return 0;
                                    },
                                },
                            },
                            subSkill: {
                                mahou: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                                    forced: true,
                                    popup: false,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        var list = player.storage.tgtt_srgodtianzao_mahou;
                                        list[1]--;
                                        if (list[1] == 0) {
                                            game.log(player, '的', '#g天造', '魔法生效');
                                            var num = list[0];
                                            event.num = num;
                                            var cards = get.cards(num * 3);
                                            event.cards = cards;
                                            player.showCards(cards, get.translation(player) + '发动了【天造】');
                                            player.removeSkill('tgtt_srgodtianzao_mahou');
                                        } else {
                                            game.log(player, '的', '#g天造', '魔法剩余', '#g' + list[1] + '回合');
                                            player.markSkill('tgtt_srgodtianzao_mahou');
                                            event.finish();
                                            return;
                                        }
                                        ('step 1');
                                        var cards2 = [];
                                        for (var card of event.cards) {
                                            cards2.push(card);
                                        }
                                        if (!cards2.length) event.finish();
                                        else {
                                            event.cards2 = cards2;
                                            var str = '你获得所有牌';
                                            if (cards2.length >= event.num) str += ',对一名其他角色造成' + get.cnNumber(event.num) + '点伤害';
                                            player.chooseTarget('请选择【天造】的目标', str, lib.filter.notMe).set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (cards2.length >= event.num) return get.damageEffect(target, player, player);
                                                return get.attitude(player, target);
                                            });
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            var tgtt = num;
                                            player.gain(event.cards2, 'gain2');
                                            var target = result.targets[0];
                                            game.log(player, '选择了', target);
                                            player.line(target);
                                            target.damage(tgtt);
                                        }
                                    },
                                    mark: true,
                                    marktext: '造',
                                    intro: {
                                        name: '施法:天造',
                                        markcount(storage) {
                                            if (storage) return storage[1];
                                            return 0;
                                        },
                                        content(storage) {
                                            if (storage) return '经过' + storage[1] + '个<回合结束时>后,亮出牌堆顶的' + storage[0] * 3 + '张牌并执行后续效果';
                                            return '未指定施法效果';
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_srgodqinlv: {
                            init(player) {
                                if (!player.tgtt_srgodqinlv) player.tgtt_srgodqinlv = '平';
                            },
                            mark: true,
                            marktext: '🎶',
                            intro: {
                                content(storage, player) {
                                    var str;
                                    switch (player.tgtt_srgodqinlv) {
                                        case '平':
                                            str = '出牌阶段限一次,你可以回复1点体力并摸一张牌.';
                                            break;
                                        case '仄':
                                            str = '出牌阶段限一次,你可以增加1点体力上限并获得1点护甲.';
                                            break;
                                    }
                                    return '<li>当前韵律:' + (player.tgtt_srgodqinlv || '平') + '<br><li>' + str;
                                },
                            },
                            group: 'tgtt_srgodqinlv_zhuanyun',
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                            yunlvSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            TaiguSkill: true,
                            content() {
                                'step 0';
                                switch (player.tgtt_srgodqinlv || '平') {
                                    case '平':
                                        player.recover();
                                        player.draw();
                                        break;
                                    case '仄':
                                        player.gainMaxHp();
                                        player.changeHujia();
                                        break;
                                }
                                ('step 1');
                                if (player.storage.tgtt_srgodtianzao_targets && player.storage.tgtt_srgodtianzao_targets.length) {
                                    for (var target of player.storage.tgtt_srgodtianzao_targets.sortBySeat()) {
                                        player.line(target);
                                        switch (player.tgtt_srgodqinlv || '平') {
                                            case '平':
                                                target.recover();
                                                target.draw();
                                                break;
                                            case '仄':
                                                target.gainMaxHp();
                                                target.changeHujia();
                                                break;
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player(player, target) {
                                        if (player.tgtt_srgodqinlv == '仄' && player.isHealthy()) return 0;
                                        return 1;
                                    },
                                },
                            },
                            subSkill: {
                                zhuanyun: {
                                    audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                                    trigger: {
                                        player: 'tgtt_srgodtianzaoAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    content() {
                                        player.tgttZhuanYun('tgtt_srgodqinlv');
                                    },
                                },
                            },
                        },
                        tgtt_srgodtianen: {
                            trigger: {
                                global: 'dying',
                            },
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                            filter(event, player) {
                                return event.player.hp < 1;
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            limited: true,
                            logTarget: 'player',
                            check(event, player) {
                                if (get.attitude(player, event.player) < 4) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('tgtt_srgodtianen');
                                trigger.player.gainMaxHp(3);
                                ('step 1');
                                //var num=Math.min(5,trigger.player.maxHp);
                                trigger.player.hp = trigger.player.maxHp;
                                //if(trigger.player.countCards("h")<=num) trigger.player.draw(num-trigger.player.countCards("h"));
                                //else trigger.player.chooseToDiscard("h",true,trigger.player.countCards("h")-num);
                                ('step 2');
                                trigger.player.link(false);
                                trigger.player.turnOver(false);
                                ('step 3');
                                trigger.player.disableJudge();
                                ('step 4');
                                var num = trigger.player.countDisabled();
                                if (num > 0) {
                                    for (var i = 1; i < 6; i++) {
                                        if (trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
                                    }
                                }
                                ('step 5');
                                var num = trigger.player.maxHp - trigger.player.countCards('h');
                                if (num > 0) trigger.player.draw(num);
                                ('step 6');
                                trigger.player.changeHujia(9);
                                ('step 7');
                                player.gainMaxHp();
                                player.recover(); //QQQ
                                player.draw(2);
                                player.changeHujia(18);
                            },
                            mark: true,
                            marktext: '恩',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        tgtt_srgodtianzhou: {
                            trigger: {
                                player: 'useCard',
                            },
                            audio: 'ext:太古天庭/audio/skill/tgtt_srgod:2',
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            zhuanhuanji: true,
                            filter(event, player) {
                                return !player.hasSkill('tgtt_srgodtianzhou_blocker', null, null, false);
                            },
                            content() {
                                player.changeZhuanhuanji('tgtt_srgodtianzhou');
                                var num = Math.min(
                                    player.hp,
                                    player.getHistory('useSkill', function (evt) {
                                        return evt.skill == 'tgtt_srgodtianzhou';
                                    }).length
                                );
                                if (num <= 0) return;
                                if (player.storage.tgtt_srgodtianzhou == true) {
                                    player.draw(num + 1);
                                    player.changeHujia();
                                } else if (
                                    player.hasCard(function (card) {
                                        return lib.filter.cardDiscardable(card, player, 'tgtt_srgodtianzhou');
                                    }, 'he')
                                ) {
                                    trigger.player.discard(trigger.player.getCards('h').randomGets([num - 1].randomGet()));
                                    player.recover();
                                }
                            },
                            mark: true,
                            marktext: '☯',
                            intro: {
                                content(storage) {
                                    if (storage) return '<font color=orange>转换技,锁定技,</font><br>当你使用一张牌时,你随机弃X-1张手牌并获得1点护甲.(X为你本阶段内发动过【天咒】的次数且至多等于你的体力上限)';
                                    return '<font color=orange>转换技,锁定技,</font><br>当你使用一张牌时,你摸X+1+张牌并回复1点体力.(X为你本阶段内发动过【天咒】的次数且至多等于你的体力上限)';
                                },
                            },
                            subSkill: {
                                blocker: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                },
                            },
                        },
                        tgtt_srtsfengyin: {
                            init(player, skill) {
                                player.addSkillBlocker(skill);
                            },
                            onremove(player, skill) {
                                player.removeSkillBlocker(skill);
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            skillBlocker(skill, player) {
                                return !lib.skill[skill].TaiguSkill && skill != 'qinggang2' && skill != 'qinggang_skill';
                            },
                            mark: true,
                            intro: {
                                content(storage, player, skill) {
                                    var list = player.getSkills(null, false, false).filter(function (i) {
                                        return lib.skill.tgtt_srtsfengyin.skillBlocker(i, player);
                                    });
                                    if (list.length) return '失效技能:' + get.translation(list);
                                    return '无失效技能';
                                },
                            },
                        },
                        tgtt_srqyyzzwangguan: {
                            mod: {
                                selectTarget(card, player, range) {
                                    var info = get.info(card);
                                    if ((info.type == 'basic' || info.type == 'trick') && info.selectTarget != undefined && !info.multitarget) {
                                        range[0] = 1;
                                        range[1] = Infinity;
                                    }
                                },
                                playerEnabled(card, player, target) {
                                    return true;
                                },
                                cardUsable(card, player, num) {
                                    if (player.hp > 2) return Infinity;
                                },
                                targetInRange(card, player) {
                                    return true;
                                },
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            init(player) {
                                player.storage.tgtt_srqyyzzwangguan = 0;
                                setInterval(
                                    function (player) {
                                        if (game._started && player.isAlive()) {
                                            player.storage.tgtt_srqyyzzwangguan++;
                                            player.markSkill('tgtt_srqyyzzwangguan');
                                            var num = player.storage.tgtt_srqyyzzwangguan;
                                            if (num % 10 == 0) player.recover();
                                            if (num % 20 == 0) player.draw();
                                            if (num % 30 == 0) player.changeHujia();
                                            if (num % 40 == 0) {
                                                player.gain(
                                                    get.cardPile(function (card) {
                                                        return get.type(card, 'basic') == 'basic';
                                                    }),
                                                    'gain2'
                                                );
                                            }
                                            if (num % 50 == 0) {
                                                player.gain(
                                                    get.cardPile(function (card) {
                                                        return get.type(card, 'trick') == 'trick';
                                                    }),
                                                    'gain2'
                                                );
                                            }
                                            if (num % 60 == 0) {
                                                player.gain(
                                                    get.cardPile(function (card) {
                                                        return get.type(card, 'equip') == 'equip';
                                                    }),
                                                    'gain2'
                                                );
                                            }
                                        }
                                    },
                                    1000,
                                    player
                                );
                            },
                            intro: {
                                content(num) {
                                    var str = '<li>总时长:';
                                    str += num + 's';
                                    str += '<br><li>回复1点体力:';
                                    str += (num % 10) + '/10';
                                    str += '<br><li>摸一张牌:';
                                    str += (num % 20) + '/20';
                                    str += '<br><li>获得1点护甲:';
                                    str += (num % 30) + '/30';
                                    str += '<br><li>获得一张基本牌:';
                                    str += (num % 40) + '/40';
                                    str += '<br><li>获得一张锦囊牌:';
                                    str += (num % 50) + '/50';
                                    str += '<br><li>获得一张装备牌:';
                                    str += (num % 60) + '/60';
                                    return str;
                                },
                            },
                            group: ['tgtt_srqyyzzwangguan_wuxiao', 'tgtt_srqyyzzwangguan_dui'],
                            subSkill: {
                                wuxiao: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (player.hp > 2) return false;
                                        if (event.nature) return true;
                                        return get.type(event.card, 'basic') != 'basic';
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.recover();
                                        player.changeHujia();
                                    },
                                    ai: {
                                        notrick: true,
                                        nofire: true,
                                        nothunder: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (target.hp <= 2) return;
                                                if (get.tag(card, 'natureDamage')) return 'zerotarget';
                                                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                                dui: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var info = get.info(event.card);
                                        if (info.multitarget) return false;
                                        if (info.type != 'basic' && info.type != 'trick') return false;
                                        if (!event.targets || event.targets.includes(player)) return false;
                                        return player.canUse(event.card, player, true, true);
                                    },
                                    content() {
                                        trigger.targets.add(player);
                                        player.draw(2);
                                    },
                                },
                            },
                        },
                        tgtt_srqbteyzhihui: {
                            marktext: '智',
                            intro: {
                                name: '智慧',
                                content: '你现有#枚标记',
                            },
                            trigger: {
                                player: ['drawAfter', 'discard', 'changeHp', 'loseMaxHpEnd', 'gainMaxHpEnd'],
                            },
                            derivation: 'tgtt_srqbteylixing',
                            _priority: 1,
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                var num1 = trigger.num;
                                if (num1 < 0) {
                                    var num2 = -num1;
                                } else {
                                    var num2 = num1;
                                }
                                player.addMark('tgtt_srqbteyzhihui', num2);
                            },
                            group: ['tgtt_srqbteyzhihui_rebound', 'tgtt_srqbteylixing', 'tgtt_srqbteylixing_doubleUse', 'tgtt_srqbteylixing_mian', 'tgtt_srqbteylixing_jia'],
                            subSkill: {
                                rebound: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player, trigger) {
                                        if (get.info(event.card).multitarget == true) return false;
                                        if (!event.player || event.player == player) return false;
                                        return player.hasMark('tgtt_srqbteyzhihui');
                                    },
                                    content() {
                                        player.removeMark('tgtt_srqbteyzhihui', 1);
                                        var reCard = game.createCard(trigger.card.name);
                                        player.useCard(reCard, trigger.player, 'noai', false);
                                    },
                                },
                            },
                            _priority: 100,
                        },
                        tgtt_srqbteylixing: {
                            trigger: {
                                global: 'useCard',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            _priority: -1,
                            filter(event, player) {
                                if (event.tgtt_srqbteylixing && event.tgtt_srqbteylixing.includes(player)) return false;
                                if (!event.targets.length) return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                return player.hasMark('tgtt_srqbteyzhihui');
                            },
                            check(event, player) {
                                if (event.card.name == 'tiesuo') return false;
                                var targets = event.targets;
                                var num = 0;
                                for (var i = 0; i < targets.length; i++) {
                                    num += get.effect(targets[i], event.card, event.player, player);
                                }
                                return num > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqbteyzhihui', 1);
                                if (!trigger.tgtt_srqbteylixing) trigger.tgtt_srqbteylixing = [];
                                trigger.tgtt_srqbteylixing.add(player);
                            },
                            group: ['tgtt_srqbteylixing_doubleUse', 'tgtt_srqbteylixing_mian', 'tgtt_srqbteylixing_jia'],
                            subSkill: {
                                doubleUse: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'useCardToTargeted',
                                    },
                                    lastDo: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        var evt = event.parent;
                                        if (evt.triggeredTargets4.length > 1) return false;
                                        return evt.tgtt_srqbteylixing && evt.tgtt_srqbteylixing.includes(player);
                                    },
                                    content() {
                                        'step 0';
                                        trigger.parent.targets = trigger.parent.targets.concat(trigger.targets);
                                        trigger.parent.triggeredTargets4 = trigger.parent.triggeredTargets4.concat(trigger.targets);
                                    },
                                },
                                mian: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    check(event, player) {
                                        if (player == event.player) return true;
                                        return false;
                                    },
                                    filter(event, player) {
                                        return get.type(event.card, 'trick') == 'trick';
                                    },
                                    content() {
                                        var num = trigger.num;
                                        player.draw(num);
                                        player.recover(num);
                                        trigger.cancel();
                                    },
                                    ai: {
                                        notrick: true,
                                        notricksource: true,
                                        effect: {
                                            target(card, player, target, current) {
                                                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                            player(card, player, target, current) {
                                                if (get.type(card) == 'trick' && get.tag(card, 'damage')) {
                                                    return 'zeroplayertarget';
                                                }
                                            },
                                        },
                                    },
                                },
                                jia: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return get.type(event.card, 'trick') == 'trick';
                                    },
                                    content() {
                                        player.changeHujia();
                                    },
                                },
                            },
                            _priority: -100,
                        },
                        tgtt_srqsqkslijie: {
                            init(player) {
                                player.storage.tgtt_srqsqkslijie_waken = [13];
                            },
                            trigger: {
                                player: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                event.card1 = get.cards(12);
                                game.cardsGotoOrdering(event.card1);
                                var next = player.chooseCardButton(event.card1, [1, 12], '理解-裁决之枪:选择置入弃牌堆的牌');
                                next.set('ai', function (button) {
                                    var count = _status.event.count;
                                    var number = button.link.number;
                                    if (!player.additionalSkills.tgtt_srqsqkslijie_IX) {
                                        if (number == 9) return 1;
                                    }
                                    if (count <= ui.selected.buttons.length || 0) return 0;
                                    if (number == 11 || number == 12) return 0;
                                    if ([3, 4, 8].includes(number)) return 1;
                                    return get.value(button.link) < 4 ? 1 : 0;
                                });
                                next.set('filterButton', function (button) {
                                    if (button.link.number == 13) return false;
                                    for (var i = 0; i < ui.selected.buttons.length; i++) {
                                        if (ui.selected.buttons[i].link.number == button.link.number) return false;
                                    }
                                    return true;
                                });
                                ('step 1');
                                if (result.bool && result.links) {
                                    var card2 = result.links;
                                    var list = lib.skill.tgtt_srqsqkslijie.group;
                                    for (var i = 0; i < card2.length; i++) {
                                        event.card1.remove(card2[i]);
                                        var number = card2[i].number;
                                        player.addMark(list[number - 1], 1);
                                    }
                                    game.cardsDiscard(card2);
                                }
                                ('step 2');
                                event.trigger('tgtt_srqsqkslijieTrigger');
                                player.gain(event.card1, 'draw');
                            },
                            ai: {
                                threaten: 1.2,
                            },
                            group: ['tgtt_srqsqkslijie_I', 'tgtt_srqsqkslijie_II', 'tgtt_srqsqkslijie_III', 'tgtt_srqsqkslijie_IV', 'tgtt_srqsqkslijie_V', 'tgtt_srqsqkslijie_VI', 'tgtt_srqsqkslijie_VII', 'tgtt_srqsqkslijie_VIII', 'tgtt_srqsqkslijie_IX', 'tgtt_srqsqkslijie_X', 'tgtt_srqsqkslijie_XI', 'tgtt_srqsqkslijie_XII'],
                            derivation: ['tgtt_srqsqkslijie_I', 'tgtt_srqsqkslijie_II', 'tgtt_srqsqkslijie_III', 'tgtt_srqsqkslijie_IV', 'tgtt_srqsqkslijie_V', 'tgtt_srqsqkslijie_VI', 'tgtt_srqsqkslijie_VII', 'tgtt_srqsqkslijie_VIII', 'tgtt_srqsqkslijie_IX', 'tgtt_srqsqkslijie_X', 'tgtt_srqsqkslijie_XI', 'tgtt_srqsqkslijie_XII'],
                        },
                        tgtt_srqsqkslijie_XII: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅻ',
                            intro: {
                                name: '裁决之枪XII',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                if (game.dead.length <= 0) return false;
                                return player.hasMark('tgtt_srqsqkslijie_XII');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseButton(ui.create.dialog('腊枪:令一名角色复活', game.dead.slice(0)), function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return _status.event.player.attitudeTo(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.links[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_XII');
                                    target.gainMaxHp(2);
                                    target.revive(target.maxHp);
                                    target.changeHujia(4);
                                    target.draw(4);
                                    target.addTempSkill('tgtt_srtsqianxing', { player: 'phaseAfter' });
                                    target.addTempSkill('tgtt_srtsmianyi', { player: 'phaseAfter' });
                                }
                            },
                        },
                        tgtt_srqsqkslijie_XI: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅺ',
                            intro: {
                                name: '裁决之枪XI',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_XI');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('tgtt_srqsqkslijie_XI'), function (player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (target.isTurnedOver()) return get.attitude(player, target);
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_XI', 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.turnOver();
                                target.addTempSkill('tgtt_srqsqkslijie_XI_unlegal', 'phaseBefore');
                            },
                            subSkill: {
                                unlegal: {
                                    mark: true,
                                    marktext: 'Ⅺ',
                                    intro: {
                                        name: '封',
                                        content: '你不能成为牌的合法目标直到你下回合开始',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    mod: {
                                        targetEnabled() {
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_srqsqkslijie_X: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅹ',
                            intro: {
                                name: '裁决之枪X',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_X');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('tgtt_srqsqkslijie_X'), true, function (player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_X', 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                player.chooseControl('ok').set('dialog', ['是' + get.translation(target.identity), [[target.name], 'character']]);
                                player.draw();
                                player.recover();
                            },
                        },
                        tgtt_srqsqkslijie_IX: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅸ',
                            intro: {
                                name: '裁决之枪IX',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_IX');
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_IX', 1);
                                player.removeAdditionalSkill('tgtt_srqsqkslijie_IX');
                                ('step 1');
                                var list = [];
                                if (_status.characterlist) {
                                    list = _status.characterlist.slice();
                                } else if (_status.connectMode) {
                                    list = get.charactersOL();
                                } else {
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                }
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    list.remove(player.name);
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                }
                                event.list1 = list.randomGets(9);
                                ('step 2');
                                var skills = [],
                                    aiChoice = [];
                                for (var i = 0; i < event.list1.length; i++) {
                                    if (lib.character[event.list1[i]][3].length == 2 && !!aiChoice.length) {
                                        aiChoice = lib.character[event.list1[i]][3];
                                    }
                                    skills.addArray(lib.character[event.list1[i]][3]);
                                }
                                if (!aiChoice) aiChoice = skills;
                                event.list2AI = aiChoice
                                    .sort(function (a, b) {
                                        return get.skillRank(b) - get.skillRank(a);
                                    })
                                    .slice(0, 2);
                                event.list2 = skills;
                                ('step 3');
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: event.list2AI,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (characters, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多九项技能`, [characters, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (const skill of skills) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skill;
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skill) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 9) return;
                                                this.classList.add('bluebg');
                                                rSkill.add(this.link);
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(this.link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    /*
                                    event.switchToAuto=function(){
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing=false;
                                    };
                                    */
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
                                    chooseButton(event.list1, event.list2);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.list1, event.list2);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 4');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    player.addAdditionalSkill('tgtt_srqsqkslijie_IX', map.skills);
                                    for (var i = 0; i < map.skills.length; i++) {
                                        game.log(player, '获得技能', '【' + get.translation(map.skills[i]) + '】');
                                    }
                                }
                            },
                        },
                        tgtt_srqsqkslijie_VIII: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅷ',
                            intro: {
                                name: '裁决之枪VIII',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_VIII');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('tgtt_srqsqkslijie_VIII'), true, function (player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target) / (target.hp + target.hujia);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_VIII', 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.changeHujia(target.hp);
                                target.draw(target.hp);
                            },
                        },
                        tgtt_srqsqkslijie_VII: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅶ',
                            intro: {
                                name: '裁决之枪VII',
                                content: '这个时候了还有闲心看这些？',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_VII');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('tgtt_srqsqkslijie_VII'), true, function (player, target) {
                                        return player != target;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        return -get.attitude(player, target) * target.countCards('h') + 1;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_VII', 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.addTempSkill('tgtt_srtsjingu');
                                target.addTempSkill('tgtt_srtsfengyin');
                            },
                        },
                        tgtt_srqsqkslijie_VI: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅵ',
                            intro: {
                                name: '裁决之枪VI',
                                content: '已填充#次',
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_VI');
                            },
                            check(event, player) {
                                var target = event.player;
                                var hs = target.countCards('he');
                                var hp = target.hp;
                                if (get.attitude(player, target) < 0) {
                                    return hs < hp;
                                } else if (get.attitude(player, target) > 0) {
                                    return hs > 5;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_VI', 1);
                                ('step 1');
                                trigger.player.addTempSkill('tgtt_srqsqkslijie_VI_repeat', 'phaseAfter');
                            },
                            subSkill: {
                                repeat: {
                                    init(player) {
                                        player.storage.tgtt_srqsqkslijie_VI_repeat = player.countCards('he');
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    onremove(player) {
                                        var num = player.storage.tgtt_srqsqkslijie_VI_repeat || 0;
                                        var hs = player.countCards('he');
                                        if (num < hs) {
                                            player.chooseToDiscard(hs - num, true, 'he');
                                        } else if (num > hs) {
                                            player.drawTo(num);
                                        }
                                        delete player.storage.tgtt_srqsqkslijie_VI_repeat;
                                    },
                                },
                            },
                        },
                        tgtt_srqsqkslijie_V: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅴ',
                            intro: {
                                name: '裁决之枪V',
                                content: '已填充#次',
                            },
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_V');
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) <= 0) {
                                    var hs = player.getCards('h');
                                    var num = 0;
                                    for (var i = 0; i < hs.length; i++) {
                                        if (get.value(hs[i]) <= 2) num++;
                                    }
                                    return num >= 3;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_V', 1);
                                ('step 1');
                                player.draw(5);
                                ('step 2');
                                var next = player.chooseCardButton(player.getCards('h'), 3, '五枪:请选择置于牌堆顶的牌(先选择的在上)', true);
                                next.set('ai', function (button) {
                                    return -get.value(button.link);
                                });
                                ('step 3');
                                if (result && result.bool && result.links && result.links.length) {
                                    var cards = result.links.slice(0);
                                    event.cards = cards;
                                    player.lose(cards, ui.special);
                                    var cardx = ui.create.card();
                                    cardx.classList.add('infohidden');
                                    cardx.classList.add('infoflip');
                                    player.$throw([cardx, cardx, cardx], 1000, 'nobroadcast');
                                }
                                ('step 4');
                                if (cards) {
                                    while (cards.length) {
                                        var onCard = cards.pop();
                                        onCard.fix();
                                        ui.cardPile.insertBefore(onCard, ui.cardPile.firstChild);
                                    }
                                }
                            },
                        },
                        tgtt_srqsqkslijie_IV: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅳ',
                            intro: {
                                name: '裁决之枪IV',
                                content: '已填充#次',
                            },
                            trigger: {
                                global: ['damageBefore', 'recoverBefore', 'loseHpBefore', 'loseMaxHpBefore', 'gainMaxHpBefore'],
                            },
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_IV');
                            },
                            check(event, player, onrewrite) {
                                if (get.attitude(player, event.player) < 0 && onrewrite == 'recoverBefore') {
                                    return event.player.hp <= 2;
                                } else if (get.attitude(player, event.player) > 0 && onrewrite != 'recoverBefore') {
                                    return event.player.hp <= 1;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_IV', 1);
                                ('step 1');
                                trigger.cancel();
                                player.draw();
                            },
                        },
                        tgtt_srqsqkslijie_III: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅲ',
                            intro: {
                                name: '裁决之枪III',
                                content: '已填充#次',
                            },
                            trigger: {
                                player: 'tgtt_srqsqkslijieTrigger',
                            },
                            forced: true,
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_III');
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseTarget(get.prompt2('tgtt_srqsqkslijie_III'), true, function (player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        var player = _status.event.player;
                                        if (player.countCards('h') > 5) return get.attitude(player, target);
                                        return target == player ? 1 : 0;
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    event.target = target;
                                    player.removeMark('tgtt_srqsqkslijie_III', 1);
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                target.draw(3);
                                target.chooseToUse('【三枪】是否使用一张牌？').set('addCount', false);
                                player.recover();
                            },
                        },
                        tgtt_srqsqkslijie_II: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅱ',
                            intro: {
                                name: '裁决之枪II',
                                content: '已填充#次',
                            },
                            trigger: {
                                global: ['phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore'],
                            },
                            filter(event, player) {
                                return player.hasMark('tgtt_srqsqkslijie_II');
                            },
                            check(event, player, onrewrite) {
                                if (get.attitude(player, event.player) > 0 && onrewrite == 'phaseDiscardBefore') {
                                    return event.player.getHandcardLimit() + 3 < event.player.countCards('h');
                                } else if (get.attitude(player, event.player) < 0) {
                                    return event.player.countCards('h') > 3;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_II', 1);
                                ('step 1');
                                trigger.cancel();
                                player.changeHujia();
                            },
                        },
                        tgtt_srqsqkslijie_I: {
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: 'Ⅰ',
                            intro: {
                                name: '裁决之枪I',
                                content: '已填充#次',
                            },
                            trigger: {
                                global: 'useCard',
                            },
                            filter(event, player) {
                                if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
                                return player.hasMark('tgtt_srqsqkslijie_I');
                            },
                            check(event, player) {
                                if (get.attitude(player, event.player) > 0) {
                                    for (var i = 0; i < event.targets.length; i++) {
                                        if (get.attitude(player, event.targets[i]) > 0) return false;
                                    }
                                    return true;
                                }
                                return false;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_srqsqkslijie_I', 1);
                                ('step 1');
                                trigger.directHit.addArray(game.filterPlayer());
                                player.draw();
                            },
                        },
                        tgtt_srqbycssncibei: {
                            TaiguSkill: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            mark: true,
                            init(player) {
                                player.storage.tgtt_srqbycssncibei = false;
                            },
                            filter(event, player) {
                                if (game.dead.length <= 0 || player.storage.tgtt_srqbycssncibei == true) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseButton(ui.create.dialog('慈悲:令一名角色复活', game.dead.slice(0)), function (button) {
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        return _status.event.player.attitudeTo(button.link);
                                    });
                                ('step 1');
                                if (result.bool) {
                                    var target = result.links[0];
                                    event.target = target;
                                    target.gainMaxHp(4);
                                    target.revive(target.maxHp);
                                    target.changeHujia(4);
                                    target.draw(4);
                                    target.addTempSkill('tgtt_srtsqianxing', { player: 'phaseAfter' });
                                    target.addTempSkill('tgtt_srtsmianyi', { player: 'phaseAfter' });
                                    player.storage.tgtt_srqbycssncibei = true;
                                }
                            },
                            group: ['tgtt_srqbycssncibei_mian', 'tgtt_srqbycssncibei_sheng', 'tgtt_srqbycssncibei_fu', 'tgtt_srqbycssncibei_huo'],
                            subSkill: {
                                mian: {
                                    trigger: {
                                        global: ['damageBefore', 'loseHpBefore', 'loseMaxHpBefore'],
                                    },
                                    usable: 1,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    content() {
                                        var num = Math.min(4, trigger.num);
                                        player.recover(num);
                                        trigger.player.recover(num);
                                        player.draw(num);
                                        trigger.player.draw(num);
                                        player.changeHujia(num);
                                        trigger.player.changeHujia(num);
                                        trigger.cancel();
                                    },
                                },
                                sheng: {
                                    trigger: {
                                        global: 'dying',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    _priority: 6,
                                    filter(event, player) {
                                        return event.player.hp <= 0 && (player.hujia >= 1 || player.hp > 1);
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) >= 3 && !event.player.hasSkillTag('nosave');
                                    },
                                    logTarget: 'player',
                                    content() {
                                        'step 0';
                                        if (trigger.player.hp < 1) {
                                            var num = Math.min(4, 1 - trigger.player.hp);
                                            trigger.player.draw(num);
                                            trigger.player.changeHujia(num);
                                            player.draw(num);
                                            trigger.player.recover(1 - trigger.player.hp);
                                        }
                                        ('step 1');
                                        if (player.hp > 1) {
                                            player.loseHp();
                                        } else if (player.hujia >= 1) {
                                            player.changeHujia(-1);
                                        }
                                    },
                                    ai: {
                                        threaten: 1.2,
                                        expose: 0.2,
                                    },
                                    _priority: 600,
                                },
                                fu: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        global: 'dieBefore',
                                    },
                                    filter(event, player) {
                                        if (event.player.storage.tgtt_srqbycssncibei_fu == true) return false;
                                        return true;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) >= 0;
                                    },
                                    prompt(event, player) {
                                        var num = event.player.storage.xyhp;
                                        return '【慈悲】:是否令' + get.translation(event.player) + '的生命回到游戏开始时的状态并将其移出游戏4个回合？';
                                    },
                                    content() {
                                        'stop 0';
                                        trigger.cancel();
                                        var cards = trigger.player.getCards('j');
                                        if (cards.length) {
                                            trigger.player.lose(cards)._triggered = null;
                                        }
                                        ('stop 1');
                                        trigger.player.storage.tgtt_srqbycssncibei_fu = true;
                                        trigger.player.maxHp = trigger.player.storage.xymaxHp;
                                        trigger.player.hp = trigger.player.storage.xyhp;
                                        player.update();
                                        ('stop 2');
                                        player.draw(4);
                                        player.changeHujia(4);
                                        trigger.player.out(4);
                                    },
                                },
                                huo: {
                                    trigger: {
                                        global: 'gameDrawAfter',
                                        player: 'enterGame',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    popup: false,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.current = player;
                                        ('step 1');
                                        event.current.storage.xyhp = event.current.hp;
                                        event.current.storage.xymaxHp = event.current.maxHp;
                                        ('step 2');
                                        event.current = event.current.next;
                                        if (event.current != player) event.goto(1);
                                    },
                                    ai: {
                                        threaten: 5,
                                    },
                                },
                            },
                            intro: {
                                content: 'limited',
                            },
                        },
                        tgtt_srqwhqlyanli: {
                            skillTrigger(triggerName, player, skill) {
                                var next = game.createEvent(triggerName, false);
                                next.player = player;
                                next.skill = skill;
                                next.setContent(() => {
                                    event.trigger(event.name);
                                });
                            },
                            init(player, skill) {
                                lib.skill[skill].skillTrigger('srgod_init', player, skill);
                            },
                            onremove(player, skill) {
                                lib.skill[skill].skillTrigger('srgod_removeSkill', player, skill);
                            },
                            trigger: {
                                global: 'roundStart',
                                player: ['damageBegin', 'phaseBegin', 'phaseEnd', 'loseHpEnd', 'recoverEnd', 'loseMaxHpBefore', 'gainMaxHpBefore'],
                                source: 'damageSource',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player, name) {
                                if (
                                    game
                                        .filterPlayer()
                                        .map((p) => p.skills.filter((s) => /^tgtt_srgod_createSkill_[0-9]+$/.test(s)).length)
                                        .flat(1)
                                        .reduce((p, n) => p + n, 0) >= Infinity
                                ) {
                                    return false;
                                }
                                return [player.name, player.name1, player.name2].includes('tgtt_srgod') || (game.tgtt_srgod && game.tgtt_srgod.players.includes(player));
                            },
                            content() {
                                lib.skill[event.name].skillTrigger('srgod_addSkill', player, event.name);
                                var chat = ['获得技能是随机生成的,请仔细看看', '是欧皇技能还是非酋技能呢？', '听说<在线更新>这个扩展相当不错', '诗笺小姐姐人美心善', '本技能代码来自阳光包诗笺的翩舞,感谢诗笺与阳光微凉两位大佬的许可与授权'].randomGet();
                                player.chat(chat);
                            },
                            ai: {
                                maixie: true,
                                maixie_hp: true,
                            },
                            group: ['tgtt_srqwhqlyanli_yan'],
                            subSkill: {
                                yan: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        var list0 = [1, 2, 3, 4, 5].randomGet();
                                        event.num = list0;
                                        ('step 1');
                                        player
                                            .chooseTarget(get.prompt2('tgtt_srqwhqlyanli_yan'), function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return -get.attitude(_status.event.player, target);
                                            });
                                        ('step 2');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var list = [1, 2, 3, 4, 5];
                                            var list2 = list.randomGets(event.num);
                                            game.log(get.translation(target) + '执行了【严厉】中的' + get.cnNumber(event.num) + '项');
                                            if (list2.includes(1)) {
                                                target.chooseToDiscard('he', 2, true);
                                                target.loseHp();
                                            }
                                            if (list2.includes(2)) {
                                                target.loseMaxHp();
                                                target.damage('kami', 1);
                                            }
                                            if (list2.includes(3)) {
                                                ('step 0');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'lebu';
                                                });
                                                if (card && !target.hasJudge('lebu')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 1');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'bingliang';
                                                });
                                                if (card && !target.hasJudge('bingliang')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 2');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'shandian';
                                                });
                                                if (card && !target.hasJudge('shandian')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 3');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'caomu';
                                                });
                                                if (card && !target.hasJudge('caomu')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 4');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'hongshui';
                                                });
                                                if (card && !target.hasJudge('hongshui')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 5');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'huoshan';
                                                });
                                                if (card && !target.hasJudge('huoshan')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                                ('step 6');
                                                var card = get.cardPile2(function (card) {
                                                    return card.name == 'fulei';
                                                });
                                                if (card && !target.hasJudge('fulei')) {
                                                    target.$gain2(card);
                                                    target.addJudge(card);
                                                }
                                            }
                                            if (list2.includes(4)) {
                                                target.turnOver(true);
                                                target.link(true);
                                            }
                                            if (list2.includes(5)) {
                                                target.addTempSkill('tgtt_srtsfengyin', { player: 'phaseBegin' });
                                                game.log(get.translation(target) + '的非太古技失效直至其回合开始');
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        tgtt_srqxglcmeili: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (target.hasSkill('tgtt_srqxglcmeili_jilu') && target.storage.tgtt_srqxglcmeili_jilu && target.storage.tgtt_srqxglcmeili_jilu.length) {
                                        if (target.storage.tgtt_srqxglcmeili_jilu.includes(card.name)) return false;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    if (get.zhinangs().includes(card.name) || player.getStorage('tgtt_srqxglcmeili')) return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (get.zhinangs().includes(card.name) || player.getStorage('tgtt_srqxglcmeili')) return true;
                                },
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                var max = player.getDamagedHp() + 1,
                                    stat = player.countMark('tgtt_srqxglcmeili_xian');
                                if (player.getStat('damage') > 0) max += player.getStat().damage;
                                if (stat >= max) return false;
                                return true;
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var dialog = [get.prompt('tgtt_srqxglcmeili')],
                                    list1 = get.zhinangs(),
                                    list2 = player.getStorage('tgtt_srqxglcmeili'),
                                    list3 = lib.inpile.filter(function (i) {
                                        return !list1.includes(i) && !list2.includes(i);
                                    });
                                if (list1.length) {
                                    dialog.push('<div class="text center">智囊</div>');
                                    dialog.push([list1, 'vcard']);
                                    dialog.push([list2, 'vcard']);
                                }
                                if (list3.length) {
                                    dialog.push('<div class="text center">非智囊</div>');
                                    dialog.push([list3, 'vcard']);
                                }
                                player
                                    .chooseButton(dialog)
                                    .set('filterButton', function (button) {
                                        if (button.link[2] == 'wuxie') return false;
                                        if (button.link[2] == 'wuzhong') return false;
                                        if (button.link[2] == 'guohe') return false;
                                        return true;
                                    })
                                    .set('ai', function (button) {
                                        var player = _status.event.player,
                                            name = button.link[2];
                                        if (get.zhinangs().includes(name)) {
                                            return -get.effect(player, { name: name }, player, player);
                                        } else {
                                            return get.effect(player, { name: name }, player, player) * (1 + player.countCards('hs', name));
                                        }
                                    });
                                ('step 1');
                                if (result.bool) {
                                    player.addMark('tgtt_srqxglcmeili_xian');
                                    var name = result.links[0][2];
                                    if (player.getStorage('tgtt_srqxglcmeili').includes(name)) {
                                        player.unmarkAuto('tgtt_srqxglcmeili', [name]);
                                        game.log(player, '从智囊中移除了', '#y' + get.translation(name));
                                    } else {
                                        player.markAuto('tgtt_srqxglcmeili', [name]);
                                        game.log(player, '向智囊中添加了', '#y' + get.translation(name));
                                    }
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['tgtt_srqxglcmeili_zhu', 'tgtt_srqxglcmeili_bei', 'tgtt_srqxglcmeili_ling', 'tgtt_srqxglcmeili_yi', 'tgtt_srqxglcmeili_mark', 'tgtt_srqxglcmeili_remove'],
                            subSkill: {
                                zhu: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        if (!event.card) return false;
                                        return !player.storage.tgtt_srqxglcmeili_jilu || !player.storage.tgtt_srqxglcmeili_jilu.includes(event.card.name);
                                    },
                                    content() {
                                        player.draw();
                                        if (!player.hasSkill('tgtt_srqxglcmeili_jilu')) player.addTempSkill('tgtt_srqxglcmeili_jilu', { player: 'phaseBegin' });
                                        if (!player.storage.tgtt_srqxglcmeili_jilu) player.storage.tgtt_srqxglcmeili_jilu = [];
                                        player.storage.tgtt_srqxglcmeili_jilu.add(trigger.card.name);
                                    },
                                },
                                jilu: {
                                    mark: true,
                                    marktext: '美',
                                    intro: {
                                        name: '美丽',
                                        content(storage, player, skill) {
                                            return '<center>已记录:</center><br><center>' + get.translation(player.storage.tgtt_srqxglcmeili_jilu) + '</center>';
                                        },
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    onremove(player) {
                                        delete player.storage.tgtt_srqxglcmeili_jilu;
                                    },
                                    _priority: 1,
                                },
                                xian: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    mark: true,
                                    marktext: '☯',
                                    intro: {
                                        name: '入库',
                                        content: '当前已发动:#',
                                    },
                                },
                                yi: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        player: ['phaseBegin', 'phaseEnd'],
                                    },
                                    filter(event, player) {
                                        return player.countMark('tgtt_srqxglcmeili_xian') >= 1;
                                    },
                                    silent: true,
                                    forced: true,
                                    popup: false,
                                    content() {
                                        player.removeMark('tgtt_srqxglcmeili_xian', player.countMark('tgtt_srqxglcmeili_xian'));
                                    },
                                },
                                bei: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        target: 'useCardToBefore',
                                        global: 'useCard',
                                    },
                                    filter(event, player) {
                                        if (!get.zhinangs().includes(event.card.name) && !player.getStorage('tgtt_srqxglcmeili').includes(event.card.name)) return false;
                                        return event.name == 'useCard' || event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.name == 'useCard') player.draw();
                                        else {
                                            trigger.cancel();
                                            player.changeHujia();
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (card && (get.zhinangs().includes(card.name) || player.getStorage('tgtt_srqxglcmeili')) && target != player) return 'zerotarget';
                                            },
                                        },
                                    },
                                },
                                ling: {
                                    trigger: {
                                        player: ['phaseDiscardSkipped', 'phaseJudgeSkipped', 'phaseDrawSkipped', 'phaseUseSkipped', 'phaseZhunbeiSkipped', 'phaseJieshuSkipped', 'phaseSkipped'],
                                    },
                                    init(player) {
                                        var b = window.setInterval(function () {
                                            if (player.hasSkill('tgtt_srqxglcmeili_ling')) {
                                                player.storage.tgtt_srqxglcmeili_ling = true;
                                            } else {
                                                game.addGlobalSkill('tgtt_srqxglcmeili_ling');
                                                game.addGlobalSkill('tgtt_srqxglcmeili_mark');
                                                game.addGlobalSkill('tgtt_srqxglcmeili__remove');
                                                window.clearInterval(b);
                                            }
                                        }, 1000);
                                    },
                                    filter(event, player) {
                                        if (!player.storage.tgtt_srqxglcmeili_ling) return false;
                                        return true;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    _priority: null,
                                    content() {
                                        trigger.cancel();
                                    },
                                },
                                mark: {
                                    trigger: {
                                        player: ['damageBegin4', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    _priority: null,
                                    lastDo: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    marktext: '丽',
                                    intro: {
                                        name: '美丽',
                                        content: '本回合已受到/失去#点伤害/体力',
                                    },
                                    filter(event, player) {
                                        return event.num > 0;
                                    },
                                    content() {
                                        'step 0';
                                        var num = Math.min(trigger.num, game.roundNumber - player.countMark('tgtt_srqxglcmeili_mark'));
                                        if (num <= 0) {
                                            trigger.cancel();
                                            event.finish();
                                        } else {
                                            player.addMark('tgtt_srqxglcmeili_mark', num);
                                            trigger.num = num;
                                        }
                                    },
                                    _priority: null,
                                },
                                remove: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    popup: false,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    content() {
                                        player.removeMark('tgtt_srqxglcmeili_mark', player.countMark('tgtt_srqxglcmeili_mark'));
                                        player.unmarkSkill('tgtt_srqxglcmeili_ling');
                                    },
                                },
                            },
                        },
                        tgtt_srqjyqzshengli: {
                            mark: true,
                            marktext: '胜',
                            intro: {
                                content: '倒计时开始,你即将胜利:#',
                            },
                            init(player) {
                                player.storage.tgtt_srqjyqzshengli = 365;
                            },
                            trigger: {
                                global: ['recoverEnd', 'loseHpEnd', 'loseMaxHpEnd', 'gainMaxHpEnd', 'damageEnd', 'gainEnd', 'loseEnd', 'damageSource'],
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            _priority: 99,
                            filter(event, player) {
                                var x = Math.floor(Math.random() * 70) + 7;
                                var y = Math.floor(Math.random() * 100);
                                return y <= x;
                            },
                            content() {
                                'step 0';
                                event.count = Math.min(trigger.num, 9);
                                ('step 1');
                                event.count--;
                                var num = [1, 2, 3, 4, 5, 6, 7].randomGet();
                                game.log(player, '失去了' + num + '枚<胜利>标记');
                                player.storage.tgtt_srqjyqzshengli -= num;
                                player.markSkill('tgtt_srqjyqzshengli');
                                ('step 2');
                                if (event.count > 0) event.goto(1);
                            },
                            group: ['tgtt_srqjyqzshengli_zheng', 'tgtt_srqjyqzshengli_dao', 'tgtt_srqjyqzshengli_win', 'tgtt_srqjyqzshengli_po', 'tgtt_srqjyqzshengli_jie'],
                            subSkill: {
                                zheng: {
                                    trigger: {
                                        player: ['damageEnd', 'loseHpAfter', 'loseMaxHpAfter'],
                                        global: 'roundStart',
                                    },
                                    charlotte: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    content() {
                                        'step 0';
                                        player.judge();
                                        ('step 1');
                                        switch (result.card.suit) {
                                            case 'heart':
                                                player.addSkill('tgtt_srqjyqzshenglishui');
                                                break;
                                            case 'diamond':
                                                player.addSkill('tgtt_srqjyqzshenglihuo');
                                                break;
                                            case 'club':
                                                player.addSkill('tgtt_srqjyqzshenglitu');
                                                break;
                                            case 'spade':
                                                player.addSkill('tgtt_srqjyqzshenglifeng');
                                                break;
                                        }
                                    },
                                },
                                dao: {
                                    trigger: {
                                        player: 'phaseBefore',
                                        global: 'roundStart',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return player.storage.tgtt_srqjyqzshenglishui >= 0 && player.storage.tgtt_srqjyqzshenglihuo >= 0 && player.storage.tgtt_srqjyqzshenglitu >= 0 && player.storage.tgtt_srqjyqzshenglifeng >= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.say(['胜利之光!', '请再帮我一次吧!'].randomGet());
                                        game.log(player, '所在阵营获得游戏胜利');
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        ('step 1');
                                        var winners = player.getFriends();
                                        game.over(player == game.me || winners.includes(game.me));
                                    },
                                },
                                win: {
                                    trigger: {
                                        player: 'dieBefore',
                                    },
                                    forced: true,
                                    forceDie: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (player.isMaxEquip() && player.isMaxHandcard() && player.maxHp > 7 && player.hujia <= 0 && player.countCards('h') > 0 && player.countCards('e') > 0 && player.hp > 0) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.say(['胜利之光!', '请再帮我一次吧!'].randomGet());
                                        game.log(player, '所在阵营获得游戏胜利');
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        ('step 1');
                                        var winners = player.getFriends();
                                        game.over(player == game.me || winners.includes(game.me));
                                    },
                                },
                                po: {
                                    trigger: {
                                        player: 'die',
                                    },
                                    forceDie: true,
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return !event.source || event.source == undefined;
                                    },
                                    content() {
                                        'step 0';
                                        player.say(['胜利之光!', '请再帮我一次吧!'].randomGet());
                                        game.log(player, '所在阵营获得游戏胜利');
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        ('step 1');
                                        var winners = player.getFriends();
                                        game.over(player == game.me || winners.includes(game.me));
                                    },
                                    ai: {
                                        maihp(player) {
                                            if (player.hp < 2) return true;
                                            else return false;
                                        },
                                        effect(card, player, target) {
                                            if (target.hp < 2) {
                                                if (get.tag(card, 'damage')) {
                                                    if (player.hasSkillTag('jueqing', false, target)) {
                                                        if (get.attitude(player, target) < 0) return 0;
                                                        else return 3;
                                                    }
                                                }
                                                if (get.tag(card, 'loseHp')) {
                                                    if (get.attitude(player, target) < 0) return 0;
                                                    else return 3;
                                                }
                                            }
                                        },
                                    },
                                },
                                jie: {
                                    trigger: {
                                        player: ['tgtt_srqjyqzshengliAfter'],
                                    },
                                    forceDie: true,
                                    charlotte: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return player.storage.tgtt_srqjyqzshengli <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.say(['胜利之光!', '请再帮我一次吧!'].randomGet());
                                        game.log(player, '所在阵营获得游戏胜利');
                                        if (game.showIdentity) {
                                            game.showIdentity();
                                        }
                                        ('step 1');
                                        var winners = player.getFriends();
                                        game.over(player == game.me || winners.includes(game.me));
                                    },
                                },
                            },
                            _priority: 9900,
                        },
                        tgtt_srqjyqzshenglishui: {
                            mark: true,
                            marktext: '水',
                            charlotte: true,
                            TaiguSkill: true,
                            init(player) {
                                player.storage.tgtt_srqjyqzshenglishui = 0;
                                player.markSkill('tgtt_srqjyqzshenglishui');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.tgtt_srqjyqzshenglishui += 0;
                                player.markSkill('tgtt_srqjyqzshenglishui');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        tgtt_srqjyqzshenglihuo: {
                            mark: true,
                            marktext: '火',
                            charlotte: true,
                            TaiguSkill: true,
                            init(player) {
                                player.storage.tgtt_srqjyqzshenglihuo = 0;
                                player.markSkill('tgtt_srqjyqzshenglihuo');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.tgtt_srqjyqzshenglihuo += 0;
                                player.markSkill('tgtt_srqjyqzshenglihuo');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        tgtt_srqjyqzshenglitu: {
                            mark: true,
                            marktext: '土',
                            charlotte: true,
                            TaiguSkill: true,
                            init(player) {
                                player.storage.tgtt_srqjyqzshenglitu = 0;
                                player.markSkill('tgtt_srqjyqzshenglitu');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.tgtt_srqjyqzshenglitu += 0;
                                player.markSkill('tgtt_srqjyqzshenglitu');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        tgtt_srqjyqzshenglifeng: {
                            mark: true,
                            marktext: '风',
                            charlotte: true,
                            TaiguSkill: true,
                            init(player) {
                                player.storage.tgtt_srqjyqzshenglifeng = 0;
                                player.markSkill('tgtt_srqjyqzshenglifeng');
                            },
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            content() {
                                player.storage.tgtt_srqjyqzshenglifeng += 0;
                                player.markSkill('tgtt_srqjyqzshenglifeng');
                            },
                            intro: {
                                content: 'mark',
                            },
                        },
                        tgtt_srqfsbwrongyao: {
                            trigger: {
                                global: 'useCardAfter',
                            },
                            audio: 'dcjincui',
                            filter(event, player, card) {
                                if (event.card.name == 'shan' || event.card.name == 'wuxie') return false;
                                return (
                                    get.type(event.card) != 'delay' &&
                                    get.type(event.card) != 'equip' &&
                                    event.player.getHistory('useCard', function (evt) {
                                        return (
                                            ['basic', 'trick'].includes(get.type(evt.card)) &&
                                            player.hasUseTarget({
                                                name: evt.card.name,
                                                nature: evt.card.nature,
                                            })
                                        );
                                    }).length &&
                                    player.countCards('he') > 0 &&
                                    event.cards.length
                                );
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                player.chooseToDiscard('he', get.prompt('tgtt_srqfsbwrongyao'), '是否也使用一张【' + get.translation(trigger.card) + '】.', lib.filter.cardDiscardable).set('ai', function (card) {
                                    if (trigger.card.name != 'shan' && get.value(trigger.card) >= 10) return 10 - get.value(card);
                                    if (trigger.card.name != 'shan' && get.value(trigger.card) >= 8 && get.value(trigger.card) < 10) return 8 - get.value(card);
                                    if (trigger.card.name != 'shan' && ((get.value(trigger.card) >= 6.5 && get.value(trigger.card) < 8) || (trigger.card.name == 'sha' && player.countCards('he') > 3))) return 6.5 - get.value(card);
                                    if (trigger.card.name == 'shan') return 0;
                                    return 0;
                                });
                                ('step 1');
                                if (result.bool) {
                                    player.addSkill('tgtt_srqfsbwrongyao_max');
                                    player.chooseUseTarget({ name: trigger.card.name, nature: trigger.card.nature }, false, 'nodistance');
                                } else event.finish();
                                ('step 2');
                                player.removeSkill('tgtt_srqfsbwrongyao_max');
                            },
                            group: ['tgtt_srqfsbwrongyao_mo', 'tgtt_srqfsbwrongyao_xian'],
                            subSkill: {
                                mo: {
                                    audio: 'dczhangcai',
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (num > 0 && get.tag(card, 'draw') && ui.cardPile.childNodes.length + ui.discardPile.childNodes.length < 20) return 0;
                                        },
                                        aiValue(player, card, num) {
                                            if (num > 0 && card.name === 'zhuge') return 20;
                                        },
                                        aiUseful(player, card, num) {
                                            if (num > 0 && card.name === 'zhuge') return 10;
                                        },
                                    },
                                    trigger: {
                                        player: ['useCard', 'respond'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return true;
                                    },
                                    prompt2(event, player) {
                                        const num = event.card.number;
                                        let count = 1;
                                        if (typeof num == 'number')
                                            count = Math.max(
                                                1,
                                                player.countCards('he', (card) => card.number == num)
                                            );
                                        return '你可以摸' + get.cnNumber(count) + '张牌.';
                                    },
                                    check(event, player) {
                                        const num = event.card.number;
                                        let count = 1;
                                        if (typeof num == 'number')
                                            count = Math.max(
                                                1,
                                                player.countCards('he', (card) => card.number == num)
                                            );
                                        return ui.cardPile.childNodes.length + ui.discardPile.childNodes.length >= count;
                                    },
                                    forced: true,
                                    content() {
                                        var num = trigger.card.number;
                                        var count = 1;
                                        if (typeof num == 'number')
                                            count = Math.max(
                                                1,
                                                player.countCards('he', (card) => card.number == num)
                                            );
                                        player.draw(count);
                                    },
                                    ai: {
                                        threaten: 4,
                                    },
                                    _priority: 99,
                                },
                                effect: {
                                    mod: {
                                        aiOrder(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('tgtt_srqfsbwrongyao')) return num + 0.16;
                                        },
                                        aiValue(player, card, num) {
                                            if (num > 0 && get.itemtype(card) === 'card' && card.hasGaintag('tgtt_srqfsbwrongyao')) return 2 * num;
                                        },
                                        aiUseful(player, card, num) {
                                            if (num > 0 && !player._tgtt_srqfsbwrongyao_mod && get.itemtype(card) === 'card' && card.hasGaintag('tgtt_srqfsbwrongyao')) {
                                                if (player.canIgnoreHandcard(card)) return Infinity;
                                                player._tgtt_srqfsbwrongyao_mod = true;
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
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.hasHistory('lose', function (evt) {
                                            if (evt.parent != event) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('tgtt_srqfsbwrongyao')) {
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
                                                if (evt.gaintag_map[i].includes('tgtt_srqfsbwrongyao')) {
                                                    var cardsx = trigger.cards.filter((card) => {
                                                        return get.position(card, true) == 'o' && card.cardid == i;
                                                    });
                                                    if (cardsx.length) cards.addArray(cardsx);
                                                }
                                            }
                                        });
                                        if (cards.length) {
                                            player.gain(cards, 'gain2').gaintag.addArray(['tgtt_srqfsbwrongyao', 'tgtt_srqfsbwrongyao_clear']);
                                            player.addTempSkill('tgtt_srqfsbwrongyao_clear');
                                        }
                                    },
                                    _priority: 88,
                                },
                                clear: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    onremove(player) {
                                        player.removeGaintag('tgtt_srqfsbwrongyao_clear');
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('tgtt_srqfsbwrongyao_clear')) return false;
                                            }
                                        },
                                        cardRespondable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('tgtt_srqfsbwrongyao_clear')) return false;
                                            }
                                        },
                                        cardSavable(card, player) {
                                            var cards = [];
                                            if (card.cards) cards.addArray(cards);
                                            if (get.itemtype(card) == 'card') cards.push(card);
                                            for (var cardx of cards) {
                                                if (cardx.hasGaintag('tgtt_srqfsbwrongyao_clear')) return false;
                                            }
                                        },
                                    },
                                    _priority: 77,
                                },
                                xian: {
                                    audio: 'dczhizhe',
                                    enable: 'phaseUse',
                                    usable: 2,
                                    filterCard: true,
                                    position: 'h',
                                    discard: false,
                                    lose: false,
                                    delay: false,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    check(card) {
                                        if (get.type(card) != 'basic' && get.type(card) != 'trick') return 0;
                                        return get.value(card) - 7.5;
                                    },
                                    content() {
                                        'step 0';
                                        var card = cards[0];
                                        var cardx = game.createCard2(card.name, card.suit, card.number, card.nature);
                                        player.gain(cardx).gaintag.add('tgtt_srqfsbwrongyao');
                                        player.addSkill('tgtt_srqfsbwrongyao_effect');
                                    },
                                    ai: {
                                        order: 15,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                    init: (player, skill) => (player.storage[skill] = false),
                                },
                                max: {
                                    audio: 'dcjincui',
                                    mod: {
                                        TaiguSkill: true,
                                        charlotte: true,
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        aiOrder(player, card, num) {
                                            var name = card.name;
                                            if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                            if (name == 'sha') return num + 6;
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_srqyxmjjichu: {
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.tgtt_srqyxmjjichu != true) return '<font color=orange>锁定技,</font><br>回合开始时,你的红色牌不计入手牌上限,没有距离次数限制直到下回合开始前且当你失去红色牌时,你可以令一名角色回复1点体力,若其未受伤,增加1点体力上限并获得1点护甲.';
                                    return '<font color=orange>锁定技,</font><br>回合开始时,你的黑色牌不计入手牌上限,没有距离次数限制直到下回合开始前且当你失去黑色牌时,你可以对一名角色造成1点神性伤害,若其已受伤,减少1点体力上限并失去1点护甲.';
                                },
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('tgtt_srqyxmjjichu');
                                ('step 1');
                                if (player.storage.tgtt_srqyxmjjichu != true) {
                                    player.addTempSkill('tgtt_srqyxmjjichu_2', { player: 'phaseBefore' });
                                    player.addTempSkill('tgtt_srqyxmjjichu_yang', { player: 'phaseBefore' });
                                } else {
                                    player.addTempSkill('tgtt_srqyxmjjichu_1', { player: 'phaseBefore' });
                                    player.addTempSkill('tgtt_srqyxmjjichu_yin', { player: 'phaseBefore' });
                                }
                            },
                            group: ['tgtt_srqyxmjjichu_pai', 'tgtt_srqyxmjjichu_count', 'tgtt_srqyxmjjichu_jiou'],
                            subSkill: {
                                1: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            if (get.color(card) == 'black') return true;
                                        },
                                        cardUsable(card) {
                                            if (get.color(card) == 'black') return Infinity;
                                        },
                                        ignoredHandcard(card, player) {
                                            if (get.color(card, player) == 'black') return true;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.color(card, player) == 'black') return false;
                                        },
                                    },
                                },
                                2: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    mod: {
                                        targetInRange(card) {
                                            if (get.color(card) == 'red') return true;
                                        },
                                        cardUsable(card) {
                                            if (get.color(card) == 'red') return Infinity;
                                        },
                                        ignoredHandcard(card, player) {
                                            if (get.color(card, player) == 'red') return true;
                                        },
                                        cardDiscardable(card, player, name) {
                                            if (name == 'phaseDiscard' && get.color(card, player) == 'red') return false;
                                        },
                                    },
                                },
                                yin: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                        for (var i of evt.cards2) {
                                            if (get.color(i, player) == 'black') return true;
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt(event.name))
                                            .set('prompt2', '对一名角色造成1点神性伤害,若其已受伤则减1点体力上限并失去1点护甲.')
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var eff = get.attitude(player, target);
                                                eff = -2 * Math.atan(eff);
                                                if (target.isHealthy()) {
                                                    eff = get.damageEffect(target, player, player, 'kami');
                                                }
                                                return eff - 0.5 + Math.random();
                                            });
                                        ('step 1');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        player.removeMark(event.name);
                                        var target = result.targets[0];
                                        if (player.ai.shown < target.ai.shown) {
                                            player.addExpose(0.2);
                                        }
                                        if (target.isHealthy()) {
                                            target.damage('kami');
                                        } else {
                                            target.damage('kami');
                                            target.loseMaxHp();
                                            target.changeHujia(-1);
                                        }
                                    },
                                },
                                yang: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.cards2 || !evt.cards2.length) return false;
                                        for (var i of evt.cards2) {
                                            if (get.color(i, player) == 'red') return true;
                                        }
                                        return false;
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt(event.name))
                                            .set('prompt2', '令一名角色回复1点当前体力,若其未受伤则增加1点体力上限并获得1点护甲.')
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                var eff = get.attitude(player, target);
                                                eff = 2 * Math.atan(eff);
                                                if (!target.isHealthy()) {
                                                    eff = get.recoverEffect(target, player, player);
                                                }
                                                return eff - 0.5 + Math.random();
                                            });
                                        ('step 1');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        player.removeMark(event.name);
                                        var target = result.targets[0];
                                        if (player.ai.shown < target.ai.shown) {
                                            player.addExpose(0.2);
                                        }
                                        if (target.isHealthy()) {
                                            target.recover(player);
                                            target.gainMaxHp();
                                            target.changeHujia();
                                        } else {
                                            target.recover(player);
                                        }
                                    },
                                },
                                pai: {
                                    trigger: {
                                        global: ['useCard', 'respond'],
                                    },
                                    intro: {
                                        content(num) {
                                            var str = '<li>总次数:';
                                            str += num;
                                            str += '/<br><li>摸牌:';
                                            str += num % 2;
                                            str += '/2<br><li>杀/闪:';
                                            str += num % 3;
                                            str += '/3<br><li>基本牌:';
                                            str += num % 4;
                                            str += '/4<br><li>桃/酒:';
                                            str += num % 5;
                                            str += '/5<br><li>锦囊牌:';
                                            str += num % 6;
                                            str += '/6<br><li>非基本牌:';
                                            str += num % 7;
                                            str += '/7<br><li>决斗/无中生有:';
                                            str += num % 8;
                                            str += '/8<br><li>装备牌:';
                                            str += num % 9;
                                            str += '/9<br><li>回复1点体力';
                                            str += num % 10;
                                            str += '/10<br><li>获得1点护甲';
                                            str += num % 11;
                                            str += '/11';
                                            return str;
                                        },
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                        return num % 2 == 0 || num % 3 == 0 || num % 4 == 0 || num % 5 == 0 || num % 6 == 0 || num % 7 == 0 || num % 8 == 0 || num % 9 == 0;
                                    },
                                    content() {
                                        var num = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                        var cards = [];
                                        if (num % 2 == 0) {
                                            player.draw();
                                        }
                                        if (num % 3 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return card.name == 'sha' || card.name == 'shan';
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 4 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return get.type(card) == 'basic';
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 5 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return ['tao', 'jiu', 'zong', 'xionghuangjiu'].includes(card.name);
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 6 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return get.type(card, 'trick') == 'trick';
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 7 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return get.type(card) != 'basic';
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 8 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return ['juedou', 'wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 9 == 0) {
                                            var card = get.cardPile2(function (card) {
                                                return get.type(card) == 'equip';
                                            });
                                            if (card) cards.push(card);
                                        }
                                        if (num % 10 == 0) {
                                            player.recover();
                                        }
                                        if (num % 11 == 0) {
                                            player.changeHujia();
                                        }
                                        if (cards.length) player.gain(cards, 'gain2');
                                    },
                                    _priority: 98,
                                },
                                count: {
                                    trigger: {
                                        player: ['useCard1', 'respond'],
                                    },
                                    silent: true,
                                    firstDo: true,
                                    noHidden: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        player.storage.tgtt_srqyxmjjichu_pai = player.getAllHistory('useCard').length + player.getAllHistory('respond').length;
                                        player.markSkill('tgtt_srqyxmjjichu_pai');
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 99,
                                },
                                jiou: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        'step 0';
                                        if (player.phaseNumber % 2 == 1) {
                                            player.addTempSkill('tgtt_srtsqianxing', { player: 'phaseBefore' });
                                        } else {
                                            player.addTempSkill('tgtt_srtsmianyi', { player: 'phaseBefore' });
                                        }
                                    },
                                    _priority: 97,
                                },
                            },
                        },
                        tgtt_tsliuyingshijunzuoyou: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.name1 == 'tgtt_srgod' || current.name2 == 'tgtt_srgod';
                                        })
                                    )
                                        return true;
                                },
                                cardUsable(card, player, num) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current.name1 == 'tgtt_srgod' || current.name2 == 'tgtt_srgod';
                                        })
                                    )
                                        return Infinity;
                                },
                                selectTarget(card, player, range) {
                                    if (range[0] != 1 || range[1] != 1) return;
                                    var range2 = get.select(get.info(card).selectTarget);
                                    if (range2[0] != 1 && range2[1] != 1) return;
                                    if (card.name == 'sha' || get.type(card) == 'trick') range[1] = 1 + player.maxHp;
                                },
                            },
                            trigger: {
                                player: 'loseAfter',
                            },
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            charlotte: true,
                            TaiguSkill: true,
                            forced: true,
                            filter(event, player) {
                                if (player.isLinked()) return true;
                                return game.hasPlayer(function (current) {
                                    return current != player && !current.isLinked();
                                });
                            },
                            content() {
                                'step 0';
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sort(lib.sort.seat);
                                if (player.isLinked()) player.link();
                                player.changeHujia();
                                ('step 1');
                                if (event.targets.length) {
                                    var target = event.targets.shift();
                                    if (!target.isLinked()) {
                                        target.link();
                                        player.line(target, 'green');
                                    }
                                    event.redo();
                                }
                            },
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/GOD与流萤.png');
                                lib.config.image_background = 'GOD与流萤';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/skill/tgtt_tsliuying/使一颗心免于哀伤.mp3';
                                game.playBackgroundMusic();
                            },
                            group: ['tgtt_tsliuyingshijunzuoyou_feichu', 'tgtt_tsliuyingshijunzuoyou_zhanji', 'tgtt_tsliuyingshijunzuoyou_baofa', 'tgtt_tsliuyingshijunzuoyou_fangzhi', 'tgtt_tsliuyingshijunzuoyou_shizheng', 'tgtt_tsliuyingshijunzuoyou_mingfa'],
                            subSkill: {
                                feichu: {
                                    trigger: {
                                        global: 'loseAfter',
                                    },
                                    audio: 'tgtt_tsliuyingshijunzuoyou',
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (player != _status.currentPhase) return false;
                                        if (event.player == player) return false;
                                        if (event.player.name1 == 'tgtt_srgod' || event.player.name2 == 'tgtt_srgod') return false;
                                        if (event.cards && event.cards.length) {
                                            //QQQ
                                            for (var i = 0; i < event.cards.length; i++) {
                                                if (event.cards[i].position != 'd') return true;
                                            }
                                        }
                                        return event.player.countDisabled() < 5;
                                    },
                                    content() {
                                        trigger.player.chooseToDisable();
                                        player.changeHujia();
                                    },
                                },
                                zhanji: {
                                    trigger: {
                                        source: 'damageBegin4',
                                    },
                                    audio: 'tgtt_tsliuyingshijunzuoyou',
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    check(event, player) {
                                        return (
                                            player.hujia > 0 &&
                                            event.player.hujia > event.num &&
                                            !event.player.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: event.card,
                                            }) &&
                                            get.attitude(player, event.player) < 0
                                        );
                                    },
                                    filter(event, player) {
                                        if (player.hujia < 1) return false;
                                        return (
                                            event.player != player &&
                                            game.hasPlayer(function (current) {
                                                return current.name1 == 'tgtt_srgod' || current.name2 == 'tgtt_srgod';
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        trigger.num = trigger.num * 2;
                                    },
                                },
                                baofa: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    silent: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.name1 == 'tgtt_srgod' || current.name2 == 'tgtt_srgod';
                                        });
                                    },
                                    content() {
                                        var num = player.getDamagedHp();
                                        trigger.num += num;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                fangzhi: {
                                    trigger: {
                                        player: 'damageBegin4',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (event.num <= player.maxHp) return false;
                                        return game.hasPlayer(function (current) {
                                            return current.name1 == 'tgtt_srgod' || current.name2 == 'tgtt_srgod';
                                        });
                                    },
                                    content() {
                                        var num = trigger.num;
                                        player.gainMaxHp(num);
                                        player.recover(num);
                                        player.changeHujia(num);
                                        trigger.cancel();
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                shizheng: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    silent: true,
                                    filter(event, player) {
                                        if (player.hujia > 1) return true;
                                    },
                                    content() {
                                        var num = player.maxHp - player.hujia;
                                        var abc = Math.abs(num) + 1;
                                        player.maxHp = abc;
                                        player.recover(abc);
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 9,
                                },
                                mingfa: {
                                    trigger: {
                                        player: 'phaseUseBegin',
                                    },
                                    audio: 'tgtt_tsliuyingshijunzuoyou',
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        if (player.hujia > 1) return true;
                                    },
                                    content() {
                                        var num = player.hujia;
                                        player.recover(num);
                                        var abc = player.hujia - 1;
                                        player.changeHujia(-abc);
                                    },
                                },
                            },
                        },
                        tgtt_tsliuyingdishe: {
                            mahouSkill: true,
                            enable: 'phaseUse',
                            usable: 1,
                            charlotte: true,
                            TaiguSkill: true,
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            filter(event, player) {
                                return !player.hasSkill('tgtt_tsliuyingdishe_mahou') && player.countCards('he') > 0;
                            },
                            filterCard: true,
                            position: 'he',
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseControl('1回合', '2回合', '3回合')
                                    .set('prompt', '请选择施法时长')
                                    .set('ai', function () {
                                        var player = _status.event.player;
                                        var safe = Math.min(player.getHandcardLimit(), player.countCards('h', 'shan'));
                                        if (safe < Math.min(3, game.countPlayer())) {
                                            var next = player.next;
                                            while (next != player && get.attitude(next, player) > 0) {
                                                safe++;
                                                next = next.next;
                                            }
                                        }
                                        return Math.max(2, Math.min(safe, 3, game.countPlayer())) - 1;
                                    });
                                ('step 1');
                                player.storage.tgtt_tsliuyingdishe_mahou = [result.index + 1, result.index + 1];
                                player.addTempSkill('tgtt_tsliuyingdishe_mahou', { player: 'die' });
                                player.addTempSkill('tgtt_tsliuyingdishe_mark', { player: 'die' });
                                player.storage.tgtt_tsliuyingdishe_mark = [];
                                player.markSkill('tgtt_tsliuyingdishe_mark', '', '地设' + player.storage.tgtt_tsliuyingdishe_mahou[0] + ' - ' + player.storage.tgtt_tsliuyingdishe_mahou[1]);
                            },
                            ai: {
                                order: 2,
                                result: {
                                    player: 1,
                                },
                            },
                            subSkill: {
                                mark: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    intro: {
                                        name: '施法:地设',
                                        content(s, p) {
                                            var str = '施法:地设-剩余回合:';
                                            str += p.storage.tgtt_tsliuyingdishe_mahou[1];
                                            str += '<br>施法:地设-可抵消次数:';
                                            str += p.storage.tgtt_tsliuyingdishe_mahou[0];
                                            return str;
                                        },
                                    },
                                },
                                mahou: {
                                    trigger: {
                                        global: 'phaseEnd',
                                    },
                                    forced: true,
                                    popup: false,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                                    content() {
                                        var list = player.storage.tgtt_tsliuyingdishe_mahou;
                                        list[1]--;
                                        if (list[1] == 0) {
                                            game.log(player, '的<地设>魔法生效');
                                            var num = list[0];
                                            player.addSkill('tgtt_tsliuyingdishe_effect');
                                            player.addMark('tgtt_tsliuyingdishe_effect', num, false);
                                            player.draw(3 * num);
                                            player.removeSkill('tgtt_tsliuyingdishe_mahou');
                                            player.removeSkill('tgtt_tsliuyingdishe_mark');
                                        } else {
                                            game.log(player, '的<地设>魔法剩余', '#g' + list[1] + '回合');
                                            player.markSkill('tgtt_tsliuyingdishe_mahou');
                                            player.unmarkSkill('tgtt_tsliuyingdishe_mark');
                                            player.storage.tgtt_tsliuyingdishe_mark = [];
                                            player.markSkill('tgtt_tsliuyingdishe_mark', '', '地设' + player.storage.tgtt_tsliuyingdishe_mahou[0] + ' - ' + player.storage.tgtt_tsliuyingdishe_mahou[1]);
                                        }
                                    },
                                },
                                effect: {
                                    trigger: {
                                        player: ['damageBegin2', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                                    filter(event, player) {
                                        return player.hasMark('tgtt_tsliuyingdishe_effect');
                                    },
                                    content() {
                                        trigger.cancel();
                                        player.removeMark('tgtt_tsliuyingdishe_effect', 1, false);
                                        if (!player.countMark('tgtt_tsliuyingdishe_effect')) player.removeSkill('tgtt_tsliuyingdishe_effect');
                                    },
                                    marktext: '设',
                                    intro: {
                                        content: '防止接下来的#次伤害/体力流失/体力上限减少',
                                    },
                                },
                            },
                        },
                        tgtt_tsliuyingseyun: {
                            init(player) {
                                if (!player.tgtt_tsliuyingseyun) player.tgtt_tsliuyingseyun = '平';
                            },
                            mark: true,
                            marktext: '🎶',
                            intro: {
                                content(storage, player) {
                                    var str;
                                    switch (player.tgtt_tsliuyingseyun) {
                                        case '平':
                                            str = '出牌阶段限一次,你可以令一名其他角色交给你一张牌,若其牌数不小于你,你增加1点体力上限并回复1点体力.';
                                            break;
                                        case '仄':
                                            str = '出牌阶段限一次,你可以交给一名其他角色一张牌,若其牌数不大于你,其减少1点体力上限并失去1点体力.';
                                            break;
                                    }
                                    return '<li>当前韵律:' + (player.tgtt_tsliuyingseyun || '平') + '<br><li>' + str;
                                },
                            },
                            group: 'tgtt_tsliuyingseyun_zhuanyun',
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            yunlvSkill: true,
                            enable: 'phaseUse',
                            charlotte: true,
                            TaiguSkill: true,
                            filter(event, player) {
                                var yunlv = player.tgtt_tsliuyingseyun || '平';
                                if (
                                    yunlv == '平' &&
                                    !game.hasPlayer(function (current) {
                                        if (current == player) return false;
                                        return current.countCards('he');
                                    })
                                )
                                    return false;
                                if (yunlv == '仄' && !player.countCards('he')) return false;
                                return true;
                            },
                            filterTarget(card, player, target) {
                                var yunlv = player.tgtt_tsliuyingseyun || '平';
                                if (target == player) return false;
                                return yunlv != '平' || target.countCards('he');
                            },
                            filterCard(card, player) {
                                var yunlv = player.tgtt_tsliuyingseyun || '平';
                                return yunlv == '仄';
                            },
                            selectCard() {
                                var player = _status.event.player;
                                var yunlv = player.tgtt_tsliuyingseyun || '平';
                                return yunlv == '仄' ? 1 : -1;
                            },
                            check(card) {
                                return 7 - get.value(card);
                            },
                            discard: false,
                            lose: false,
                            delay: false,
                            usable: 1,
                            content() {
                                'step 0';
                                if (cards.length) {
                                    target.gain(cards, player, 'giveAuto');
                                    event.goto(3);
                                }
                                ('step 1');
                                target.chooseCard('he', '瑟韵:将一张牌交给' + get.translation(player), true);
                                ('step 2');
                                if (result.bool) player.gain(result.cards, target, 'giveAuto');
                                ('step 3');
                                switch (player.tgtt_tsliuyingseyun || '平') {
                                    case '平':
                                        if (target.countCards('he') >= player.countCards('he')) {
                                            player.gainMaxHp();
                                            player.recover();
                                        }
                                        break;
                                    case '仄':
                                        if (target.countCards('he') <= player.countCards('he')) {
                                            player.line(target);
                                            target.loseMaxHp();
                                            target.loseHp();
                                        }
                                        break;
                                }
                                ('step 4');
                                if (player.storage.tgtt_tsliuyingdishe_targets && player.storage.tgtt_tsliuyingdishe_targets.length) {
                                    for (var target of player.storage.tgtt_tsliuyingdishe_targets.sortBySeat()) {
                                        player.line(target);
                                        switch (player.tgtt_tsliuyingseyun || '平') {
                                            case '平':
                                                if (target.countCards('he') >= player.countCards('he')) {
                                                    player.gainMaxHp();
                                                    player.recover();
                                                }
                                                break;
                                            case '仄':
                                                if (target.countCards('he') <= player.countCards('he')) {
                                                    player.line(target);
                                                    target.loseMaxHp();
                                                    target.loseHp();
                                                }
                                                break;
                                        }
                                    }
                                }
                            },
                            ai: {
                                order: 7,
                                result: {
                                    target(player, target) {
                                        var yunlv = player.tgtt_tsliuyingseyun || '平';
                                        switch (yunlv) {
                                            case '平':
                                                if (target.countCards('he') - player.countCards('he') > 2) return -3;
                                                return get.sgn(get.attitude(player, target)) * (get.attitude(player, target) > 0 ? 2 : 1);
                                                break;
                                            case '仄':
                                                if (player.countCards('he') - target.countCards('he') <= 2) return -1;
                                                return 0;
                                                break;
                                        }
                                    },
                                },
                            },
                            subSkill: {
                                zhuanyun: {
                                    audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                                    trigger: {
                                        player: 'tgtt_tsliuyingdisheAfter',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    content() {
                                        player.tgttZhuanYun('tgtt_tsliuyingseyun');
                                    },
                                },
                            },
                        },
                        tgtt_tsliuyingtianci: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            trigger: {
                                player: 'phaseBegin',
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            limited: true,
                            content() {
                                'step 0';
                                player.chooseControl('heart2', 'diamond2', 'club2', 'spade2').ai = function (event) {
                                    switch (Math.floor(Math.random() * 5)) {
                                        case 0:
                                            return 'heart2';
                                        case 1:
                                        case 4:
                                            return 'diamond2';
                                        case 2:
                                            return 'club2';
                                        case 3:
                                            return 'spade2';
                                    }
                                };
                                ('step 1');
                                game.log(player, '选择了' + get.translation(result.control));
                                event.choice = result.control.slice(0, result.control.length - 1);
                                ('step 2');
                                player.addSkill('tgtt_tsliuyingtiancia');
                                var suit = event.choice;
                                player.storage.tgtt_tsliuyingtiancia = [];
                                player.storage.tgtt_tsliuyingtiancia.add(suit);
                                player.markSkill('tgtt_tsliuyingtiancia');
                                player.awakenSkill('tgtt_tsliuyingtianci');
                                ('step 3');
                                player.gainMaxHp(3);
                                ('step 4');
                                player.recover(3);
                                ('step 5');
                                player.draw(3);
                                player.changeHujia(18);
                            },
                            mark: true,
                            marktext: '赐',
                            intro: {
                                content: 'limited',
                            },
                            init(player, skill) {
                                player.storage[skill] = false;
                            },
                            subSkill: {
                                shang: {
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                                    silent: true,
                                    firstDo: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (event.card.suit != player.storage.tgtt_tsliuyingtiancia) return false;
                                        return event.addCount !== false;
                                    },
                                    content() {
                                        trigger.addCount = false;
                                        var stat = player.getStat();
                                        if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_tsliuyingtiancia: {
                            group: 'tgtt_tsliuyingtianci_shang',
                            marktext: '天赐',
                            mark: true,
                            intro: {
                                content: '<font color=orange>锁定技,</font><br><li>①你的$花色的牌不计入摸牌;<br><li>②你的$花色的牌不计入手牌上限;<br><li>③回合内使用$花色的牌无次数限制',
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.suit == player.storage.tgtt_tsliuyingtiancia) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.suit == player.storage.tgtt_tsliuyingtiancia) return false;
                                },
                                cardUsable(card, player, num) {
                                    if (card.suit == player.storage.tgtt_tsliuyingtiancia) return Infinity;
                                },
                            },
                            trigger: {
                                player: 'drawEnd',
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            filter(event, player) {
                                if (!event.result || !event.result.length) return false;
                                for (var i = 0; i < event.result.length; i++) {
                                    if (event.result[i].suit == player.storage.tgtt_tsliuyingtiancia) return true;
                                }
                                return false;
                            },
                            content() {
                                var draw = 0;
                                for (var i = 0; i < trigger.result.length; i++) {
                                    if (trigger.result[i].suit == player.storage.tgtt_tsliuyingtiancia) draw++;
                                }
                                player.draw(draw);
                            },
                        },
                        tgtt_tsliuyinghuixiang: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            mark: true,
                            zhuanhuanji: true,
                            marktext: '☯',
                            _priority: 9,
                            intro: {
                                content(storage, player, skill) {
                                    if (player.storage.tgtt_tsliuyinghuixiang != true) return '<font color=orange>锁定技,</font><br>出牌阶段开始时,你从【兵临城下】、【趁火打劫】、【刮骨疗毒】、【推心置腹】、【草船借箭】、【弃甲曳兵】、【声东击西】、【增兵减灶】、【草木皆兵】、【浮雷】、【解甲归田】、【树上开花】、【逐鹿天下】、【出其不意】、【洞烛先机】、【随机应变】、【逐近弃远】中随机获得三张,你回复1点体力,获得1点护甲并获得技能【决胜】直到下个回合开始';
                                    return '<font color=orange>锁定技,</font><br>出牌阶段开始时, 你从【金蝉脱壳】、【增兵减灶】、【随机应变】、【火烧连营】、【水淹七军】、【草船借箭】、【趁火打劫】、【调兵遣将】、【釜底抽薪】、【隔岸观火】、【舌战群儒】、【水攻】、【偷梁换柱】、【望梅止渴】、【诱敌深入】、【洪水】、【火山】中随机获得三张,你增加1点体力上限,摸两张牌并获得技能【运筹】直到你下个回合开始';
                                },
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            content() {
                                'step 0';
                                player.changeZhuanhuanji('tgtt_tsliuyinghuixiang');
                                if (player.storage.tgtt_tsliuyinghuixiang != true) {
                                    var list = ['binglinchengxiax', 'chenghuodajie', 'guaguliaodu', 'tuixinzhifu', 'caochuan', 'qijia', 'shengdong', 'zengbin', 'caomu', 'fulei', 'jiejia', 'kaihua', 'zhulu_card', 'chuqibuyi', 'dongzhuxianji', 'suijiyingbian', 'zhujinqiyuan'];
                                    player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                    player.recover();
                                    player.changeHujia();
                                } else {
                                    var list = ['jinchan', 'zengbin', 'suijiyingbian', 'huoshaolianying', 'shuiyanqijunx', 'caochuanjiejian', 'chenhuodajie', 'diaobingqianjiang', 'fudichouxin', 'geanguanhuo', 'shezhanqunru', 'shuiyanqijun', 'toulianghuanzhu', 'wangmeizhike', 'youdishenru', 'hongshui', 'huoshan'];
                                    player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                    player.gainMaxHp();
                                    player.draw(2);
                                }
                                ('step 1');
                                if (player.storage.tgtt_tsliuyinghuixiang != true) {
                                    player.addTempSkills('tgtt_tsliuyingjuesheng', { player: 'phaseUseBefore' });
                                } else {
                                    player.addTempSkills('tgtt_tsliuyingyunchou', { player: 'phaseUseBefore' });
                                }
                            },
                            derivation: ['tgtt_tsliuyingjuesheng', 'tgtt_tsliuyingyunchou'],
                            _priority: 900,
                        },
                        tgtt_tsliuyingjuesheng: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            trigger: {
                                global: 'damageEnd',
                            },
                            logTarget: 'player',
                            charlotte: true,
                            TaiguSkill: true,
                            filter: (event, player) => event.player.isAlive(),
                            content() {
                                'step 0';
                                var list = ['wuxie', 'jinchan', 'chenghuodajie', 'guaguliaodu'];
                                trigger.player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                ('step 1');
                                var list = ['tuixinzhifu', 'caochuan', 'qijia', 'shengdong', 'zengbin', 'caomu', 'fulei', 'jiejia', 'kaihua', 'zhulu_card', 'chuqibuyi', 'dongzhuxianji', 'suijiyingbian', 'zhujinqiyuan'];
                                player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                            },
                            mark: true,
                            intro: {
                                content: '当有角色受到伤害后,你可以令其从【无懈可击】、【金蝉脱壳】、【趁火打劫】、【刮骨疗毒】中随机获得两张,你从【推心置腹】、【草船借箭】、【弃甲曳兵】、【声东击西】、【增兵减灶】、【草木皆兵】、【浮雷】、【解甲归田】、【树上开花】、【逐鹿天下】、【出其不意】、【洞烛先机】、【随机应变】、【逐近弃远】中随机获得三张',
                            },
                        },
                        tgtt_tsliuyingyunchou: {
                            audio: 'ext:太古天庭/audio/skill/tgtt_tsliuying:2',
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            forced: true,
                            preHidden: true,
                            logTarget: 'player',
                            charlotte: true,
                            TaiguSkill: true,
                            filter(event, player) {
                                return event.player.isAlive() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards('h') > 0));
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToUse(
                                        function (card, player, event) {
                                            if (card.name != 'sha') return false;
                                            return lib.filter.filterCard.apply(this, arguments);
                                        },
                                        '运筹策帷幄之中:是否对' + get.translation(trigger.player) + '使用一张杀？'
                                    )
                                    .set('complexSelect', true)
                                    .set('filterTarget', function (card, player, target) {
                                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                        return lib.filter.targetEnabled.apply(this, arguments);
                                    })
                                    .set('sourcex', trigger.player);
                                ('step 1');
                                if (result.bool) {
                                    var list = ['huoshaolianying', 'shuiyanqijunx', 'caochuanjiejian', 'chenhuodajie', 'diaobingqianjiang', 'fudichouxin', 'geanguanhuo', 'shezhanqunru', 'shuiyanqijun', 'toulianghuanzhu', 'wangmeizhike', 'youdishenru', 'hongshui', 'huoshan'];
                                    player.gain([game.createCard(list.randomGet()), game.createCard(list.randomGet()), game.createCard(list.randomGet())], 'gain2');
                                }
                            },
                            mark: true,
                            intro: {
                                content: '当其他角色准备阶段开始时,你可以对其使用一张【杀】,你从【火烧连营】、【水淹七军】、【草船借箭】、【趁火打劫】、【调兵遣将】、【釜底抽薪】、【隔岸观火】、【舌战群儒】、【水攻】、【偷梁换柱】、【望梅止渴】、【诱敌深入】、【洪水】、【火山】中随机获得三张',
                            },
                        },
                        tgtt_yyzzrilun: {
                            TaiguSkill: true,
                            charlotte: true,
                            ai: {
                                threaten: 1.8,
                            },
                            group: ['tgtt_yyzzrilun_kai', 'tgtt_yyzzrilun_jie'],
                            subSkill: {
                                kai: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        var list = game.filterPlayer(function (current) {
                                            return player.canUse('nanman', current) && current.isEnemiesOf(player);
                                        });
                                        list.sort(lib.sort.seat);
                                        player.useCard({ name: 'nanman' }, list);
                                    },
                                },
                                jie: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        var list = game.filterPlayer(function (current) {
                                            return player.canUse('wanjian', current) && current.isEnemiesOf(player);
                                        });
                                        list.sort(lib.sort.seat);
                                        player.useCard({ name: 'wanjian' }, list);
                                    },
                                },
                            },
                        },
                        tgtt_yyzzguangjian: {
                            TaiguSkill: true,
                            charlotte: true,
                            group: ['tgtt_yyzzguangjian_diamond', 'tgtt_yyzzguangjian_spade', 'tgtt_yyzzguangjian_heart', 'tgtt_yyzzguangjian_club'],
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha') return 'kami';
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                            subSkill: {
                                diamond: {
                                    trigger: {
                                        player: 'shaBegin',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'diamond';
                                    },
                                    forced: true,
                                    silent: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        trigger.directHit = true;
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                spade: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        if (event.parent.name == 'tgtt_yyzzguangjian_spade') return false;
                                        if (!event.targets || !event.card) return false;
                                        for (var i = 0; i < event.targets.length; i++) {
                                            if (!event.targets[i].isAlive()) return false;
                                            if (!player.canUse({ name: event.card.name }, event.targets[i], false, false)) {
                                                return false;
                                            }
                                        }
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'spade';
                                    },
                                    silent: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        player.useCard({ name: trigger.card.name, suit: trigger.card.suit, number: trigger.card.number, nature: trigger.card.nature }, trigger.targets);
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                heart: {
                                    trigger: {
                                        player: 'useCardToTargeted',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'heart';
                                    },
                                    silent: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        var id = trigger.target.playerid;
                                        var map = trigger.parent.customArgs;
                                        if (!map[id]) map[id] = {};
                                        if (typeof map[id].extraDamage != 'number') {
                                            map[id].extraDamage = 0;
                                        }
                                        map[id].extraDamage++;
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                                club: {
                                    trigger: {
                                        player: 'useCardToPlayered',
                                    },
                                    filter(event, player) {
                                        return event.card && event.card.name == 'sha' && event.card.suit == 'club';
                                    },
                                    silent: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        trigger.target.addTempSkill('tgtt_srtspofang');
                                        trigger.target.storage.tgtt_srtspofang.add(trigger.card);
                                        trigger.target.markSkill('tgtt_srtspofang');
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_yyzztianyi: {
                            mod: {
                                globalFrom(from, to) {
                                    return -Infinity;
                                },
                                globalTo(from, to, distance) {
                                    return distance + Infinity;
                                },
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            group: ['tgtt_yyzztianyi_mine', 'tgtt_yyzztianyi_others'],
                            subSkill: {
                                mine: {
                                    trigger: {
                                        player: 'useCardToPlayer',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (_status.currentPhase != player) return false;
                                        if (event.targets.length <= 1 && !event.target.isDamaged()) return false;
                                        return event.target.countCards('he') > 0;
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.draw();
                                        var next = player.discardPlayerCard(trigger.target, 'he');
                                        next.set('ai', function (button) {
                                            if (_status.event.att > 0) return 0;
                                            return get.value(button.link);
                                        });
                                        next.set('att', get.attitude(player, trigger.target));
                                    },
                                },
                                others: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    forced: true,
                                    _priority: 5,
                                    filter(event, player) {
                                        if (_status.currentPhase == player) return false;
                                        if (event.targets.length <= 1 && !player.isDamaged()) return false;
                                        return player.countCards('he') > 0;
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        var eff = get.effect(player, trigger.card, trigger.player, player);
                                        var next = player.chooseToDiscard('he');
                                        next.set('ai', function (card) {
                                            if (_status.event.eff >= 0) return 0;
                                            return 8 - get.value(card);
                                        });
                                        next.set('prompt', '天翼:是否弃置一张牌令' + get.translation(trigger.card) + '对你无效并获得1点护甲？');
                                        next.set('eff', get.effect(player, trigger.card, trigger.player, player));
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.targets.remove(player);
                                            player.changeHujia();
                                        }
                                    },
                                    _priority: 500,
                                },
                            },
                        },
                        tgtt_yyzzpaoguan: {
                            enable: 'phaseUse',
                            usable: 1,
                            TaiguSkill: true,
                            charlotte: true,
                            chooseButton: {
                                dialog(event, player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.type(lib.inpile[i], 'trick') == 'trick') {
                                            var info = get.info({ name: lib.inpile[i] });
                                            if (!info) continue;
                                            if (get.select(info.selectTarget)[0] == -1 && !info.toself) {
                                                list.push(['锦囊', '', lib.inpile[i]]);
                                            }
                                        }
                                    }
                                    return ui.create.dialog('炮冠', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card, player) {
                                            if (ui.selected.cards.length) {
                                                return card.suit == ui.selected.cards[0].suit;
                                            }
                                            var cards = player.getCards('hes');
                                            for (var i = 0; i < cards.length; i++) {
                                                if (card != cards[i]) {
                                                    if (card.suit == cards[i].suit) return true;
                                                }
                                            }
                                            return false;
                                        },
                                        selectCard: 2,
                                        complexCard: true,
                                        position: 'hes',
                                        popname: true,
                                        viewAs: { name: links[0][2] },
                                        check(card) {
                                            return 10 - get.value(card);
                                        },
                                    };
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var players = game.filterPlayer();
                                    var damage = 0,
                                        recover = 0,
                                        Bvalue = 0.5;
                                    for (var i = 0; i < players.length; i++) {
                                        var att = player.attitudeTo(players[i]);
                                        if (att > 0) Bvalue++;
                                        else Bvalue--;
                                        if (players[i].isDamaged()) {
                                            if (att > 0) recover++;
                                            else recover--;
                                        }
                                        if (get.damageEffect(players[i], player, player) > 0) {
                                            damage += 1;
                                            if (att < 0 && players[i].hp == 1) damage += 0.5;
                                        } else {
                                            damage -= 0.9;
                                        }
                                    }
                                    if (damage > recover) {
                                        if (damage > 0 || Bvalue < 0) {
                                            return get.tag({ name: button.link[2] }, 'damage') ? 2 : -1;
                                        }
                                    } else {
                                        if (recover > 0 || Bvalue < 0) {
                                            return get.tag({ name: button.link[2] }, 'recover') ? 2 : -1;
                                        }
                                    }
                                    return Math.random();
                                },
                                prompt(links, player) {
                                    return '将两张同花色牌当作【' + get.translation(links[0][2]) + '】使用';
                                },
                            },
                            ai: {
                                order: 8,
                                result: {
                                    player: 1,
                                },
                            },
                            group: 'tgtt_yyzzpaoguana',
                        },
                        tgtt_yyzzpaoguana: {
                            enable: 'phaseUse',
                            usable: 1,
                            filter(event, player) {
                                if (player.countCards('he') <= 0) return false;
                                return player.getHistory('sourceDamage').length;
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            filterCard: true,
                            position: 'he',
                            selectCard: 1,
                            filterTarget: true,
                            check(card) {
                                return 9 - get.value(card);
                            },
                            line: 'kami',
                            content() {
                                target.damage(get.rand(2, 4), 'kami');
                            },
                            ai: {
                                expose: 0.15,
                                order: 4,
                                result: {
                                    target(player, target) {
                                        if (get.damageEffect(target, player, player, 'kami') >= 0) return -1;
                                        return 0;
                                    },
                                    player: 1,
                                },
                            },
                        },
                        tgtt_yyzzyifan: {
                            group: ['tgtt_yyzzyifan_juemie', 'tgtt_yyzzyifan_jiushi'],
                            TaiguSkill: true,
                            charlotte: true,
                            mod: {
                                maxHandcard(player, num) {
                                    return num + player.getDamagedHp() + 1;
                                },
                            },
                            subSkill: {
                                juemie: {
                                    trigger: {
                                        player: ['damageBegin', 'loseHpBegin', 'loseMaxHpBegin'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return Math.random() <= 0.5;
                                    },
                                    content() {
                                        player.recover();
                                        player.draw();
                                        trigger.cancel();
                                    },
                                },
                                jiushi: {
                                    trigger: {
                                        player: 'phaseDrawBegin2',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.numFixed;
                                    },
                                    content() {
                                        var num1 = player.getDamagedHp() + 2;
                                        trigger.num += num1;
                                    },
                                    ai: {
                                        threaten: 1,
                                    },
                                },
                            },
                        },
                        tgtt_bteypianzhi: {
                            group: ['tgtt_bteypianzhi_pian', 'tgtt_bteypianzhi_zhi', 'tgtt_bteypianzhi_gai'],
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            marktext: '帙',
                            intro: {
                                name: '牌堆中剩下的牌',
                                content(storage, player) { },
                                mark(dialog, storage, player) {
                                    if (player.isUnderControl(true) && ui.cardPile.childNodes.length) {
                                        var list = [];
                                        var num = ui.cardPile.childElementCount;
                                        for (var i = 0; i < num; i++) {
                                            list.push(ui.cardPile.childNodes[i]);
                                        }
                                        return get.translation(list);
                                    } else {
                                        return '';
                                    }
                                },
                            },
                            trigger: {
                                global: 'phaseBegin',
                            },
                            filter(event, player) {
                                return player.storage.tgtt_bteypianzhifd != true;
                            },
                            forced: true,
                            content() {
                                player.storage.tgtt_bteypianzhifd = true;
                                player.gainMaxHp();
                                player.draw(2);
                                var func = function () {
                                    game.countPlayer(function (current) {
                                        current.setIdentity();
                                    });
                                };
                                if (player == game.me) func();
                                else if (player.isOnline()) player.send(func);
                                if (!player.storage.zhibi) player.storage.zhibi = [];
                                player.storage.zhibi.addArray(game.players);
                            },
                            ai: {
                                viewHandcard: true,
                                skillTagFilter(player, tag, arg) {
                                    if (player == arg) return false;
                                },
                            },
                            subSkill: {
                                pian: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('tgtt_bteypianzhi'), '随机将一张【乐不思蜀】,【兵粮寸断】,【闪电】,【洪水】,【火山】,【浮雷】或【草木皆兵】置入一名判定区内没有牌的角色的判定区内', function (card, player, target) {
                                                return target != player;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target) < 0;
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var n = [1, 7].randomGet();
                                            if (n == 1) {
                                                var card = game.createCard('lebu');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 2) {
                                                var card = game.createCard('bingliang');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 3) {
                                                var card = game.createCard('shandian');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 4) {
                                                var card = game.createCard('hongshui');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 5) {
                                                var card = game.createCard('huoshan');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 6) {
                                                var card = game.createCard('fulei');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                            if (n == 7) {
                                                var card = game.createCard('caomu');
                                                result.targets[0].addJudge(card);
                                                result.targets[0].$draw(card);
                                            }
                                        }
                                    },
                                    ai: {
                                        threaten(player, target) {
                                            return 1.6;
                                        },
                                    },
                                },
                                zhi: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        game.countPlayer(function (current) {
                                            if (current != player) current.addSkill('tgtt_bteypianzhia');
                                        });
                                        game.log(player, '令除其以外的所有其他角色手牌均可见');
                                    },
                                },
                                gai: {
                                    trigger: {
                                        player: ['chooseToRespondBegin', 'chooseToUseBegin'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    lastDo: true,
                                    mark: true,
                                    hiddenCard(player, name) {
                                        var cardPile = Array.from(ui.cardPile.childNodes);
                                        if (!cardPile.length) return false;
                                        var num = Math.min(14, player.getDamagedHp() + 3);
                                        cardPile = cardPile.slice(0, Math.min(num, cardPile.length));
                                        return cardPile.some((i) => i.name == name);
                                    },
                                    filter(event, player) {
                                        if (event.responded || event.skill) return false;
                                        var cardPile = Array.from(ui.cardPile.childNodes);
                                        if (!cardPile.length) return false;
                                        var num = Math.min(14, player.getDamagedHp() + 3);
                                        cardPile = cardPile.slice(0, Math.min(num, cardPile.length));
                                        return cardPile.some((i) => event.filterCard && event.filterCard(i, player, event));
                                    },
                                    mod: {
                                        cardEnabled2(card, player) {
                                            if (_status.event.skill && get.itemtype(card) == 'card' && card.hasGaintag('tgtt_bteypianzhi_gai')) return false;
                                        },
                                    },
                                    intro: {
                                        mark(dialog, storage, player) {
                                            var cardPile = Array.from(ui.cardPile.childNodes);
                                            if (!cardPile.length) return '';
                                            var num = Math.min(14, player.getDamagedHp() + 3);
                                            cardPile = cardPile.slice(0, Math.min(num, cardPile.length));
                                            if (player.isUnderControl(true)) {
                                                dialog.addAuto(cardPile);
                                            } else {
                                                return '';
                                            }
                                        },
                                    },
                                    copy(cards) {
                                        var result = [];
                                        for (var i of cards) {
                                            var card = ui.create.card(ui.special);
                                            card.init([i.suit, i.number, i.name, i.nature]);
                                            (card.cardid = i.cardid), (card.wunature = i.wunature), (card.storage = i.storage), (card.relatedCard = i);
                                            result.push(card);
                                        }
                                        return result;
                                    },
                                    contentx() {
                                        'step 0';
                                        if (trigger.result.bool) {
                                            if (trigger.onresult) {
                                                trigger.onresult(trigger.result);
                                                delete trigger.onresult;
                                            }
                                        }
                                        ('step 1');
                                        player.lose(event.cards, ui.special)._triggered = null;
                                        ('step 2');
                                        for (var i of event.cards) {
                                            i.fix();
                                            i.remove();
                                            i.destroyed = true;
                                        }
                                    },
                                    content() {
                                        'step 0';
                                        var cardPile = Array.from(ui.cardPile.childNodes);
                                        var num = Math.min(14, player.getDamagedHp() + 3);
                                        cardPile = cardPile.slice(0, Math.min(num, cardPile.length));
                                        event.cards = lib.skill.tgtt_bteypianzhi_gai.copy(cardPile);
                                        player.directgains(event.cards, null, 'tgtt_bteypianzhi_gai');
                                        ('step 1');
                                        var evt = trigger;
                                        var onresult = false;
                                        if (evt.onresult) {
                                            onresult = evt.onresult;
                                        }
                                        var next2 = game.createEvent('tgtt_shenshipianzhi_clear', false);
                                        next2.cards = event.cards;
                                        next2.player = player;
                                        next2._trigger = evt;
                                        next2.setContent(lib.skill.tgtt_bteypianzhi_gai.contentx);
                                        event.next.remove(next2);
                                        evt.after.push(next2);
                                        evt.onresult = function (result) {
                                            if (evt.after.includes(next2)) {
                                                evt.after.remove(next2);
                                                evt.next.push(next2);
                                            }
                                            if (result.cards && result.cards.length && (result.cards[0].hasGaintag('tgtt_bteypianzhi_gai') || event.cards.includes(result.cards[0]))) {
                                                var card2 = result.cards[0];
                                                result.cards[0] = result.cards[0].relatedCard;
                                                var cardx = result.cards[0];
                                                result.card = {
                                                    name: card2.name,
                                                    suit: card2.suit,
                                                    number: card2.number,
                                                    nature: get.nature(card2),
                                                    cardid: cardx.cardid,
                                                    wunature: cardx.wunature,
                                                    storage: cardx.storage,
                                                    cards: [cardx],
                                                };
                                            }
                                            if (onresult) onresult.apply(evt, arguments);
                                            delete evt.onresult;
                                        };
                                        var cards = player.getCards('hs');
                                        var sort2 = function (b, a) {
                                            if (a.name != b.name) return lib.sort.card(a.name, b.name);
                                            else if (a.suit != b.suit) return lib.suit.indexOf(a) - lib.suit.indexOf(b);
                                            else return a.number - b.number;
                                        };
                                        if (cards.length > 1) {
                                            cards.sort(sort2);
                                            cards.forEach(function (i, j) {
                                                player.node.handcards1.insertBefore(cards[j], player.node.handcards1.firstChild);
                                            });
                                        }
                                    },
                                    ai: {
                                        respondShan: true,
                                        respondSha: true,
                                        save: true,
                                        skillTagFilter(player, tag, arg) {
                                            var event = _status.event;
                                            var cardPile = Array.from(ui.cardPile.childNodes);
                                            if (!cardPile.length) return false;
                                            var num = Math.min(14, player.getDamagedHp() + 3);
                                            cardPile = cardPile.slice(0, Math.min(num, cardPile.length));
                                            for (var i = 0; i < cardPile.length; i++) {
                                                if (tag == 'respondSha') {
                                                    if (cardPile[i].name == 'sha') return true;
                                                } else if (tag == 'respondShan') {
                                                    if (cardPile[i].name == 'shan') return true;
                                                } else if (tag == 'save') {
                                                    if (cardPile[i].name == 'jiu' || cardPile[i].name == 'tao') return true;
                                                }
                                            }
                                            return false;
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_bteypianzhia: {
                            mark: true,
                            intro: {
                                mark(dialog, content, player) {
                                    var cards = player.getCards('h');
                                    if (cards && cards.length) {
                                        dialog.addAuto(cards);
                                    }
                                },
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            content(content, player) {
                                var cards = player.getCards('h');
                                if (cards && cards.length) {
                                    return get.translation(cards);
                                }
                            },
                        },
                        tgtt_bteyniegao: {
                            enable: 'phaseUse',
                            usable: 5,
                            TaiguSkill: true,
                            charlotte: true,
                            ai: {
                                order: 20,
                                expose: 1,
                                result: {
                                    player(player, target) {
                                        var atti = get.attitude(player, target);
                                        if (atti > 0) {
                                            return 7;
                                        } else {
                                            return 1;
                                        }
                                    },
                                    target: 2,
                                },
                            },
                            filterTarget(card, player, target) {
                                return target.hasSkill('tgtt_bteyniegao');
                            },
                            filterCard() {
                                return false;
                            },
                            selectCard: -1,
                            content() {
                                'step 0';
                                var list = [],
                                    num = 0;
                                for (var i in lib.card) {
                                    if (lib.card[i].type == 'trick') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'delay') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'basic') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'spell') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'equip') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'food') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'hsshenqi') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'land') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'jiguan') {
                                        list.add(i);
                                        num++;
                                    }
                                    if (lib.card[i].type == 'hslingjian') {
                                        list.add(i);
                                        num++;
                                    }
                                }
                                player.chooseButton(['请选择一张要获得的牌', [list, 'vcard']], true).set('ai', function (button) {
                                    return Math.random();
                                });
                                ('step 1');
                                if (result.bool) {
                                    var name = result.links[0][2];
                                    event.cardname = name;
                                    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                    player.chooseControl(list).set('ai', function () {
                                        return list.randomGet();
                                    });
                                } else {
                                    event.finish();
                                }
                                ('step 2');
                                if (result.bool == true || result.control) {
                                    event.number = result.control;
                                    var list = ['diamond', 'spade', 'heart', 'club', 'none'];
                                    player.chooseControl(list).set('ai', function () {
                                        return list.randomGet();
                                    });
                                }
                                ('step 3');
                                if (result.bool == true || result.control) {
                                    event.suit = result.control;
                                    var list = lib.linked.slice(0);
                                    player.chooseControl(list).set('prompt', true, get.prompt('tgtt_bteyniegao')).set('请选择生成卡牌的属性');
                                }
                                ('step 4');
                                if (result.bool == true || result.control) {
                                    event.nature = result.control;
                                    var fakecard = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                    var fakecard1 = game.createCard(event.cardname, event.suit, event.number, event.nature);
                                    player.gain(fakecard, 'gain1', 'log');
                                    target.gain(fakecard1, 'gain1', 'log');
                                } else event.finish();
                                ('step 5');
                                game.countPlayer(function (current) {
                                    if (current == player || current.isFriendsOf(player)) {
                                        current.getBuff();
                                    }
                                    if (current != player && current.isEnemiesOf(player)) {
                                        current.getDebuff();
                                    }
                                });
                                ('step 6');
                                if (result.bool) {
                                    target.recast(result.cards);
                                }
                            },
                        },
                        tgtt_bteybianxie: {
                            trigger: {
                                player: 'useCardAfter',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            usable: 5,
                            frequent(event, player) {
                                return !player.isPhaseUsing();
                            },
                            filter(event, player) {
                                if (get.itemtype(event.cards) != 'cards') return false;
                                if (!event.cards || event.cards.length > 1) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (get.color(card) != get.color(trigger.card)) {
                                        if (
                                            game.hasPlayer(function (current) {
                                                return player.canUse(card, current, true, true);
                                            })
                                        )
                                            return player.getUseValue(card);
                                        return -0.5;
                                    }
                                    if (card.suit == trigger.card.suit) return get.value(trigger.card) / 3;
                                    return -1;
                                });
                                ('step 1');
                                if (result.suit == trigger.card.suit) {
                                    player.gain(trigger.cards, 'gain2').log = false;
                                    game.log(player, '收回了', trigger.card);
                                }
                                if (result.color != get.color(trigger.card)) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            return player.canUse(result.card, current, true, true);
                                        })
                                    )
                                        player.chooseUseTarget(result.card).set('addCount', false);
                                }
                            },
                            group: 'tgtt_bteybianxie_gai',
                            subSkill: {
                                gai: {
                                    trigger: {
                                        global: 'judgeBefore',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        event.cards = get.cards(14);
                                        player.chooseCardButton(true, event.cards, '编写:选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').ai = function (button) {
                                            if (get.attitude(player, trigger.player) > 0) {
                                                return 1 + trigger.judge(button.link);
                                            }
                                            if (get.attitude(player, trigger.player) < 0) {
                                                return 1 - trigger.judge(button.link);
                                            }
                                            return 0;
                                        };
                                        ('step 1');
                                        if (!result.bool) {
                                            event.finish();
                                            return;
                                        }
                                        var card = result.links[0];
                                        event.cards.remove(card);
                                        var judgestr = get.translation(trigger.player) + '的' + trigger.judgestr + '判定';
                                        event.videoId = lib.status.videoId++;
                                        event.dialog = ui.create.dialog(judgestr);
                                        event.dialog.classList.add('center');
                                        event.dialog.videoId = event.videoId;
                                        game.addVideo('judge1', player, [get.cardInfo(card), judgestr, event.videoId]);
                                        if (event.cards && event.cards.length) {
                                            for (var i = 0; i < event.cards.length; i++) event.cards[i].discard();
                                        }
                                        // var node=card.copy('thrown','center',ui.arena).addTempClass('start');
                                        var node;
                                        if (game.chess) {
                                            node = card.copy('thrown', 'center', ui.arena).addTempClass('start');
                                        } else {
                                            node = player.$throwordered(card.copy(), true);
                                        }
                                        node.classList.add('thrownhighlight');
                                        ui.arena.classList.add('thrownhighlight');
                                        if (card) {
                                            trigger.cancel();
                                            trigger.result = {
                                                card: card,
                                                judge: trigger.judge(card),
                                                node: node,
                                                number: card.number,
                                                suit: card.suit,
                                                color: get.color(card),
                                            };
                                            if (trigger.result.judge > 0) {
                                                trigger.result.bool = true;
                                                trigger.player.popup('洗具');
                                            }
                                            if (trigger.result.judge < 0) {
                                                trigger.result.bool = false;
                                                trigger.player.popup('杯具');
                                            }
                                            game.log(trigger.player, '的判定结果为', card);
                                            trigger.direct = true;
                                            trigger.position.appendChild(card);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        ui.arena.classList.remove('thrownhighlight');
                                        event.dialog.close();
                                        game.addVideo('judge2', null, event.videoId);
                                        ui.clear();
                                        var card = trigger.result.card;
                                        trigger.position.appendChild(card);
                                        trigger.result.node.delete();
                                        player.recover();
                                    },
                                    ai: {
                                        tag: {
                                            rejudge: 1,
                                        },
                                    },
                                    _priority: -25,
                                },
                            },
                        },
                        tgtt_bteyshenshi: {
                            init(player) {
                                player.storage.tgtt_bteyshenshi = 0;
                            },
                            trigger: {
                                player: 'gainAfter',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter: (event) => event.cards, //QQQ
                            content() {
                                'step 0';
                                var num = player.storage.tgtt_bteyshenshi;
                                player.storage.tgtt_bteyshenshi = trigger.cards.length;
                                if (trigger.cards.length > num) {
                                    player.chooseToUse('神蚀:使用一张牌并回复1点体力或弃置一张牌并失去1点体力').set('addCount', false);
                                    player.recover();
                                } else event.finish();
                                ('step 1');
                                if (result.bool == false) {
                                    player.chooseToDiscard('he', 1, true);
                                    player.loseHp();
                                }
                            },
                            mod: {
                                targetInRange(card, player, target, now) {
                                    if (_status.currentPhase != player) return true;
                                },
                                selectTarget(card, player, range) {
                                    if (_status.currentPhase != player && range[1] && range[1] && range[1] != -1) range[1] = Infinity; //QQQ
                                },
                            },
                        },
                        tgtt_bteyerfan: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return !player.storage.tgtt_bteyerfan;
                            },
                            content() {
                                (player.storage.tgtt_bteyerfan = true), player.disableJudge();
                            },
                            group: ['tgtt_bteyerfan_fei', 'tgtt_bteyerfan_fan'],
                            subSkill: {
                                fei: {
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    forced: true,
                                    content() {
                                        if (trigger.player.countDisabled() < 5) {
                                            trigger.player.chooseToDisable();
                                        } else {
                                            trigger.player.loseMaxHp();
                                        }
                                    },
                                },
                                fan: {
                                    trigger: {
                                        player: 'damageEnd',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.source && event.source.countGainableCards(player, 'he') && event.num > 0 && event.source != player;
                                    },
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        trigger.player.changeHujia();
                                        trigger.source.damage(1, 'kami');
                                        trigger.source.chooseToDiscard('he', 3, true);
                                        ('step 2');
                                        if (result.bool && event.count > 0 && trigger.source.countGainableCards(player, 'he') > 0) event.goto(1);
                                    },
                                },
                            },
                        },
                        tgtt_sqksshishilingyu: {
                            mod: {
                                globalFrom(from, to, distance) {
                                    return distance - from.countMark('tgtt_sqksshishilingyu');
                                },
                                globalTo(from, to, distance) {
                                    return distance + to.countMark('tgtt_sqksshishilingyu');
                                },
                            },
                            marktext: '时',
                            intro: {
                                content: ' 当前拥有的时间值:#',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            group: ['tgtt_sqksshishilingyu_1', 'tgtt_sqksshishilingyu_2', 'tgtt_sqksshishilingyu_3', 'tgtt_sqksshishilingyu_4', 'tgtt_sqksshishilingyu_5'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: 'roundStart',
                                    },
                                    filter(event, player) {
                                        event.targets = game.filterPlayer(function (current) {
                                            return current !== player;
                                        });
                                        return !player.storage.tgtt_sqksshishilingyua;
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    logTarget: 'targets',
                                    forced: true,
                                    content() {
                                        'step 0';
                                        event.targets = game.filterPlayer(function (current) {
                                            return current !== player;
                                        });
                                        player.awakenSkill('tgtt_sqksshishilingyu_1');
                                        player.storage.tgtt_sqksshishilingyua = true;
                                        ('step 1');
                                        event.now = event.targets.shift();
                                        if (event.now) {
                                            var card = event.now.getCards('h').randomGet();
                                            if (card) event.now.discard(card);
                                            event.redo();
                                        }
                                        ('step 2');
                                        var num = game.players.length - 1;
                                        player.addMark('tgtt_sqksshishilingyu', num);
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: 'dieAfter',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        if (trigger.source == player) {
                                            var num = trigger.player.maxHp;
                                            player.addMark('tgtt_sqksshishilingyu', num);
                                            game.log(player, '获得了' + num + '点时间值');
                                        } else {
                                            player.storage.tgtt_sqksshishilingyu += 3;
                                            game.log(player, '获得了3点时间值');
                                        }
                                    },
                                },
                                3: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        source: 'damageSource',
                                    },
                                    content() {
                                        var num = trigger.player.hp;
                                        if (num < 0) {
                                            var num1 = -num;
                                        } else {
                                            var num1 = num;
                                        }
                                        player.addMark('tgtt_sqksshishilingyu', num1);
                                        game.log(player, '获得了' + num1 + '点时间值');
                                    },
                                },
                                4: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    content() {
                                        player.addMark('tgtt_sqksshishilingyu', 12);
                                        game.log(player, '获得了12点时间值');
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: 'phaseAfter',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_sqksshishilingyu') < 1;
                                    },
                                    content() {
                                        player.chooseToDiscard(1, 'he', true);
                                        player.loseHp();
                                    },
                                },
                            },
                        },
                        tgtt_sqkskekedi: {
                            TaiguSkill: true,
                            charlotte: true,
                            forced: true,
                            derivation: ['tgtt_sqksyizhidan', 'tgtt_sqkserzhidan', 'tgtt_sqkssanzhidan', 'tgtt_sqkssizhidan', 'tgtt_sqkswuzhidan', 'tgtt_sqksliuzhidan', 'tgtt_sqksliuzhidan2', 'tgtt_sqksqizhidan', 'tgtt_sqksbazhidan', 'tgtt_sqksjiuzhidan', 'tgtt_sqksshizhidan', 'tgtt_sqksshiyizhidan', 'tgtt_sqksshierzhidan'],
                            group: ['tgtt_sqksyizhidan', 'tgtt_sqkserzhidan', 'tgtt_sqkssanzhidan', 'tgtt_sqkssizhidan', 'tgtt_sqkswuzhidan', 'tgtt_sqksliuzhidan', 'tgtt_sqksliuzhidan2', 'tgtt_sqksqizhidan', 'tgtt_sqksbazhidan', 'tgtt_sqksjiuzhidan', 'tgtt_sqksshizhidan', 'tgtt_sqksshiyizhidan', 'tgtt_sqksshierzhidan'],
                        },
                        tgtt_sqkserzhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                global: ['phaseBegin', 'phaseEnd'],
                            },
                            filter(event, player) {
                                return event.player != player && player.hasMark('tgtt_sqksshishilingyu') && event.player.countCards('he', (card) => lib.filter.cardDiscardable(card, player));
                            },
                            logTarget: 'player',
                            check(event, player) {
                                var storage = event.player.storage.tgtt_sqksjiuzhidan_control;
                                if (get.attitude(player, event.player) > 2 || (storage && storage == player)) return false;
                                if (event.player.needsToDiscard()) {
                                    return 2 + event.player.needsToDiscard() - player.countMark('tgtt_sqksshishilingyu') * 1.5;
                                }
                                return event.player.countCards('he') - 1 < player.countMark('tgtt_sqksshishilingyu');
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_sqksshishilingyu', 1);
                                var bool = trigger.player.needsToDiscard();
                                var option = ['选项一'];
                                if (bool) option.push('选项二');
                                var choiceList = ['令' + get.translation(trigger.player) + '弃置两张牌', (bool ? '<span>' : '<span style="opacity:0.5; ">') + '令' + get.translation(trigger.player) + '执行一个额外弃牌阶段</span>'];
                                player
                                    .chooseControl(option)
                                    .set('choiceList', choiceList)
                                    .set('ai', function () {
                                        if (trigger.player.needsToDiscard() > 2) return '选项二';
                                        return '选项一';
                                    });
                                ('step 1');
                                if (result.control) {
                                    switch (result.control) {
                                        case '选项一': {
                                            trigger.player.chooseToDiscard('he', 2, true);
                                            break;
                                        }
                                        case '选项二': {
                                            trigger.player.phaseDiscard();
                                            break;
                                        }
                                    }
                                }
                            },
                        },
                        tgtt_sqkssanzhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            usable: 3,
                            filter(event, player) {
                                return player.hasMark('tgtt_sqksshishilingyu');
                            },
                            filterTarget: true,
                            prompt2() {
                                return '失去3点时间值并选择一名角色,若其拥有未发动过的觉醒技,则你解除其中一个觉醒技的发动限制;否则其增加1点体力上限,回复1点体力并获得1点护甲';
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_sqksshishilingyu', 1);
                                player.addTempSkill('tgtt_sqkssanzhidan_count', 'roundStart');
                                player.storage.tgtt_sqkssanzhidan_count++;
                                var list = target.getSkills(null, false, false).filter(function (skill) {
                                    var info = lib.skill[skill];
                                    return info && info.juexingji && !info.filter.toString().includes('tgtt_sqkssanzhidan_mark') && !target.awakenedSkills.includes(skill);
                                });
                                if (list.length) {
                                    if (list.length == 1) event._result = { control: list[0] };
                                    else player.chooseControl(list).set('prompt', '选择一个觉醒技,令' + get.translation(target) + '可无视条件发动该技能');
                                } else {
                                    target.gainMaxHp();
                                    target.recover();
                                    target.changeHujia();
                                    event.goto(2);
                                }
                                ('step 1');
                                target.storage.tgtt_sqkssanzhidan_mark = result.control;
                                target.markSkill('tgtt_sqkssanzhidan_mark');
                                var info = lib.skill[result.control];
                                if (info.filter && !info.charlotte && !info.tgtt_sqkssanzhidan_filter) {
                                    info.tgtt_sqkssanzhidan_filter = info.filter;
                                    info.filter = function (event, player) {
                                        if (player.storage.tgtt_sqkssanzhidan_mark) return true;
                                        return this.tgtt_sqkssanzhidan_filter.apply(this, arguments);
                                    };
                                }
                            },
                            ai: {
                                order: 0.1,
                                expose: 0.2,
                                result: {
                                    target(player, target) {
                                        if (target != player && player.hasUnknown()) return 0;
                                        if (
                                            target == player &&
                                            player.hasSkill('resghuishi') &&
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
                            subSkill: {
                                count: {
                                    init: (player, skill) => (player.storage[skill] = 0),
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                                mark: {
                                    marktext: '三',
                                    TaiguSkill: true,
                                    charlotte: true,
                                    intro: {
                                        content: '发动【$】时无视条件',
                                    },
                                },
                            },
                        },
                        tgtt_sqkssizhidan2: {
                            TaiguSkill: true,
                            charlotte: true,
                            intro: {
                                content: '本轮已发动过#次',
                            },
                        },
                        tgtt_sqksqizhidan2: {
                            mark: true,
                            mod: {
                                cardEnabled2(card) {
                                    if (get.position(card) == 'h') return false;
                                },
                            },
                            intro: {
                                name: 'tgtt_sqksqizhidan',
                                content: '不能使用或打出手牌且无法造成或受到伤害或者失去体力',
                            },
                            trigger: {
                                player: ['damageBefore', 'loseHpBefore'],
                                source: 'damageBegin2',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                trigger.cancel();
                            },
                            ai: {
                                threaten: -999,
                            },
                        },
                        tgtt_sqkssizhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                global: ['recoverBegin', 'damageBegin', 'loseHpBegin', 'loseMaxHpBegin', 'gainMaxHpBegin'],
                            },
                            filter(event, player) {
                                return player.countMark('tgtt_sqksshishilingyu') >= player.countMark('tgtt_sqkssizhidan2') + 1;
                            },
                            prompt(event, player) {
                                var num = player.countMark('tgtt_sqkssizhidan2') + 1;
                                return '【四之弹】:是否消耗' + num + '点时间值并防止' + get.translation(event.player) + '的体力值或体力上限发生变动？';
                            },
                            check(event, player) {
                                return ((event.num >= 2 && get.attitude(player, event.player) > 0) || event.num >= event.player.hp) && get.attitude(player, event.player) > 0 && player.countMark('tgtt_sqkssizhidan2') < 3;
                            },
                            content() {
                                'stop 0';
                                player.addTempSkill('tgtt_sqkssizhidan2', 'roundStart');
                                player.addMark('tgtt_sqkssizhidan2', 1, false);
                                ('stop 1');
                                var num = player.countMark('tgtt_sqkssizhidan2') + 1;
                                player.removeMark('tgtt_sqksshishilingyu', num);
                                trigger.cancel();
                            },
                        },
                        tgtt_sqkswuzhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                global: 'phaseZhunbeiBegin',
                            },
                            filter(event, player) {
                                return player.countMark('tgtt_sqksshishilingyu') > 5;
                            },
                            async content(event, trigger, player) {
                                player.removeMark('tgtt_sqksshishilingyu', 5);
                                const num = Math.max(game.countPlayer() + player.getDamagedHp(), 5);
                                const cards = get.cards(num);
                                game.cardsGotoOrdering(cards);
                                const next = player.chooseToMove();
                                next.set('list', [['牌堆顶', cards], ['牌堆底']]);
                                next.set('prompt', '观星:点击将牌移动到牌堆顶或牌堆底');
                                next.processAI = (list) => {
                                    const cards = list[0][1],
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
                                const { moved } = await next.forResult();
                                const top = moved[0];
                                const bottom = moved[1];
                                top.reverse();
                                game.cardsGotoPile(top.concat(bottom), ['top_cards', top], (event, card) => {
                                    if (event.top_cards.includes(card)) return ui.cardPile.firstChild;
                                    return null;
                                });
                                player.popup(get.cnNumber(top.length) + '上' + get.cnNumber(bottom.length) + '下');
                                game.log(player, '将' + get.cnNumber(top.length) + '张牌置于牌堆顶');
                                player.draw('bottom', 2);
                                player.changeHujia();
                                player.recover();
                            },
                            ai: {
                                threaten: 1.2,
                            },
                        },
                        tgtt_sqksqizhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                source: 'damageSource',
                            },
                            check(event, player) {
                                if (player.countMark('tgtt_sqksshishilingyu') < 7) return false;
                                if (event.player.isTurnedOver()) return get.attitude(player, event.player) > 0;
                                if (event.player.hp >= 2) {
                                    return get.attitude(player, event.player) < 0;
                                }
                                return get.attitude(player, event.player) > 0;
                            },
                            filter(event, player) {
                                return event.player.isAlive() && player.countMark('tgtt_sqksshishilingyu') > 7;
                            },
                            content() {
                                player.removeMark('tgtt_sqksshishilingyu', 7);
                                trigger.player.out(1);
                                player.draw(2);
                                player.changeHujia();
                            },
                        },
                        tgtt_sqksyizhidan: {
                            enable: 'phaseUse',
                            usable: 1,
                            TaiguSkill: true,
                            charlotte: true,
                            prompt: '失去1点时间值并摸两张牌',
                            filter(event, player) {
                                return player.countMark('tgtt_sqksshishilingyu') > 0;
                            },
                            content() {
                                'step 0';
                                player.removeMark('tgtt_sqksshishilingyu', 1);
                                ('step 1');
                                player.phaseDraw();
                            },
                            ai: {
                                basic: {
                                    order: 1,
                                },
                                result: {
                                    player(player) {
                                        if (player.countCards('h') >= player.hp) return -1;
                                        if (player.countMark('tgtt_sqksshishilingyu') < 3) return -1;
                                        return 1;
                                    },
                                },
                            },
                        },
                        tgtt_sqksliuzhidan: {
                            limited: true,
                            init(player) {
                                player.storage.tgtt_sqksliuzhidan = false;
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'dying',
                            },
                            filter(event, player) {
                                if (player.storage.tgtt_sqksliuzhidan == true) return false;
                                return true;
                            },
                            content() {
                                'step 0';
                                player.awakenSkill('tgtt_sqksliuzhidan');
                                var cards = player.getCards('hej');
                                if (cards.length) {
                                    player.lose(cards)._triggered = null;
                                }
                                ('step 1');
                                var num = trigger.player.countDisabled();
                                if (num > 0) {
                                    for (var i = 1; i < 6; i++) {
                                        if (trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
                                    }
                                }
                                player.maxHp = player.storage.yuemaxHp;
                                player.hp = player.storage.yuehp;
                                player.directgain(player.storage.yueh);
                                for (var i = 0; i < player.storage.yuee.length; i++) {
                                    player.equip(game.createCard(player.storage.yuee[i]));
                                }
                                for (var i = 0; i < player.storage.yuej.length; i++) {
                                    player.useCard(game.createCard(player.storage.yuej[i]), player);
                                }
                                player.update();
                                player.link(false);
                                player.turnOver(false);
                                ('step 2');
                                var num = game.players.length - 1;
                                player.addMark('tgtt_sqksshishilingyu', num);
                                player.storage.tgtt_sqksliuzhidan = true;
                            },
                            mark: true,
                            intro: {
                                content: 'limited',
                            },
                            markimage: 'extension/OLUI/image/player/marks/xiandingji.png',
                        },
                        tgtt_sqksliuzhidan2: {
                            trigger: {
                                global: 'gameDrawAfter',
                                player: 'enterGame',
                            },
                            popup: false,
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                player.storage.yuehp = player.hp;
                                player.storage.yuemaxHp = player.maxHp;
                                player.storage.yueh = player.getCards('h');
                                player.storage.yuee = player.getCards('e');
                                player.storage.yuej = player.getCards('j');
                            },
                        },
                        tgtt_sqksbazhidan: {
                            trigger: {
                                player: 'useCardToPlayer',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            forced: true,
                            filter(event, player) {
                                if (event.targets.length != 1 || event.player == event.target) return false;
                                var type = get.type(event.card);
                                if (type == 'equip' || type == 'delay') return false;
                                if (player.countMark('tgtt_sqksshishilingyu') < 8) return false;
                                return event.card && event.card.name != 'shan' && event.card.name != 'jiu' && event.card.name != 'wuxie';
                            },
                            content() {
                                'step 0';
                                player.chooseTarget('是否发动【八之弹】,令至多八名其他角色也成为此牌的目标？', [1, 8], function (card, player, target) {
                                    return target != player && !trigger.targets.includes(target) && player.inRange(target) && player.storage.tgtt_sqksshishilingyu > 0;
                                }).ai = function (target) {
                                    return get.effect(target, { name: 'guohe' } || { name: 'zhujin' }, _status.event.player) - 0.5 || (get.effect(target, _status.event.player) - 0.5 && get.tag(trigger.card, 'damage'));
                                };
                                ('step 1');
                                if (result.bool && result.targets && result.targets.length) {
                                    player.removeMark('tgtt_sqksshishilingyu', 8);
                                    var targets = result.targets;
                                    player.line(targets, trigger.card.nature);
                                    trigger.targets.addArray(targets);
                                }
                            },
                        },
                        tgtt_sqksjiuzhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            enable: 'phaseUse',
                            filter(event, player) {
                                return (
                                    player.countMark('tgtt_sqksshishilingyu') >= 9 &&
                                    game.hasPlayer(function (current) {
                                        if (current == player) return false;
                                        var storage = current.storage.tgtt_sqksjiuzhidan_control;
                                        return !storage || storage != player;
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                var storage = target.storage.tgtt_sqksjiuzhidan_control;
                                return !storage || storage != player;
                            },
                            check() {
                                return !game.hasPlayer((current) => current.storage.tgtt_sqksjiuzhidan_control && current.storage.tgtt_sqksjiuzhidan_control == player);
                            },
                            content() {
                                player.removeMark('tgtt_sqksshishilingyu', 9);
                                target.storage.tgtt_sqksjiuzhidan_control = player;
                                target.markSkill('tgtt_sqksjiuzhidan_control');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        if (target.storage.tgtt_sqksjiuzhidan_control && target.storage.tgtt_sqksjiuzhidan_control == player) return -2;
                                        return -1;
                                    },
                                },
                            },
                        },
                        tgtt_sqksshizhidan: {
                            TaiguSkill: true,
                            charlotte: true,
                            lastDo: true,
                            trigger: {
                                global: 'useCard2',
                            },
                            filter(event, player) {
                                if (!player.hasMark('tgtt_sqksshishilingyu')) return false;
                                if (event.parent.name == 'tgtt_sqksshizhidan_effect') return false;
                                var info = get.info(event.card);
                                if (info.notarget && info.notarget == true) return false;
                                var type = get.type(event.card);
                                return ['basic', 'trick'].includes(type) && (player.storage.tgtt_sqksshizhidan_count || 0) < 10;
                            },
                            logTarget: 'player',
                            check(event, player) {
                                if (event.card.name == 'tiesuo') return false;
                                return player.countMark('tgtt_sqksshishilingyu') - get.value(event.card) && get.attitude(player, event.player) > 0;
                            },
                            prompt2(event, player) {
                                var storage = player.storage.tgtt_sqksshizhidan_count || 0;
                                return '消耗1点时间值并令' + get.translation(event.card) + '额外结算一次(本轮剩余:' + (10 - storage) + ' 次)';
                            },
                            content() {
                                player.removeMark('tgtt_sqksshishilingyu', 1);
                                player.addTempSkill('tgtt_sqksshizhidan_count', 'roundStart');
                                player.storage.tgtt_sqksshizhidan_count++;
                                trigger.player.addTempSkill('tgtt_sqksshizhidan_effect');
                                trigger.tgtt_sqksshizhidan_effect = {
                                    name: trigger.card.name,
                                    nature: trigger.card.nature,
                                    suit: trigger.card.suit,
                                    number: trigger.card.number,
                                };
                            },
                            subSkill: {
                                count: {
                                    init: (player, skill) => (player.storage[skill] = 0),
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                                effect: {
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    filter(event, player) {
                                        return event.tgtt_sqksshizhidan_effect != undefined;
                                    },
                                    content() {
                                        player.removeSkill(event.name);
                                        var card = game.createCard(trigger[event.name]);
                                        var targets = trigger._targets || trigger.targets;
                                        for (var target of targets) {
                                            if (!target.isIn() || !player.canUse(card, target, false, false)) targets.remove(target);
                                        }
                                        if (trigger.addedTarget && !trigger.addedTarget.isIn()) return;
                                        var addedTargets = trigger.addedTargets;
                                        if (addedTargets && addedTargets.length) {
                                            for (var addedTarget of addedTargets) {
                                                if (!addedTarget.isIn()) addedTargets.remove(addedTarget);
                                            }
                                        }
                                        if (targets.length) {
                                            var next = (player.useCard(trigger[event.name], targets).addCount = false);
                                            if (trigger.addedTarget) next.addedTarget = trigger.addedTarget;
                                            if (addedTargets && addedTargets.length) next.addedTargets = addedTargets;
                                            player.$throw(card, 1000);
                                        }
                                        game.cardsGotoSpecial(card);
                                    },
                                },
                            },
                        },
                        tgtt_sqksshiyizhidan: {
                            init: (player, skill) => player.addSkill('tgtt_sqksshiyizhidan_mark'),
                            enable: 'phaseUse',
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return (
                                    player.countMark('tgtt_sqksshishilingyu') >= 11 &&
                                    game.hasPlayer(function (current) {
                                        if (current == player) return false;
                                        var storage = current.storage.tgtt_sqksshiyizhidan_mark;
                                        return !storage || storage != player;
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                var storage = target.storage.tgtt_sqksshiyizhidan_mark;
                                return !storage || storage != player;
                            },
                            check() {
                                return 1 + player.countMark('tgtt_sqksshishilingyu') * Math.random();
                            },
                            content() {
                                player.removeMark('tgtt_sqksshishilingyu', 11);
                                target.storage.tgtt_sqksshiyizhidan_mark = player;
                                target.markSkill('tgtt_sqksshiyizhidan_mark');
                                target.phase('nodelay');
                            },
                            ai: {
                                order: 3,
                                result: {
                                    target: 1,
                                },
                            },
                            subSkill: {
                                mark: {
                                    silent: true,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'phaseBeginStart',
                                    },
                                    filter(event, player) {
                                        var storage = event.player.storage.tgtt_sqksshiyizhidan_mark;
                                        return storage && storage == player;
                                    },
                                    content() {
                                        trigger.player.unmarkSkill(event.name);
                                    },
                                    marktext: '十一',
                                    intro: {
                                        content: '你于$回合结束后执行一个额外回合',
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_sqksshierzhidan: {
                            enable: 'phaseUse',
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return (
                                    player.countMark('tgtt_sqksshishilingyu') >= 12 &&
                                    game.hasPlayer(function (current) {
                                        if (current == player) return false;
                                        var storage = current.storage.tgtt_sqksshierzhidan_skip;
                                        return !storage;
                                    })
                                );
                            },
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                var storage = target.storage.tgtt_sqksshierzhidan_skip;
                                return !storage;
                            },
                            content() {
                                player.removeMark('tgtt_sqksshishilingyu', 12);
                                target.storage.tgtt_sqksshierzhidan_skip = true;
                                target.addSkill('tgtt_sqksshierzhidan_skip');
                            },
                            ai: {
                                order: 2,
                                expose: 0.3,
                                threaten: 1.8,
                                result: {
                                    target(player, target) {
                                        return -1 / (target.countCards('h') + 1);
                                    },
                                },
                            },
                            subSkill: {
                                skip: {
                                    fixed: true,
                                    silent: true,
                                    forced: true,
                                    firstDo: true,
                                    charlotte: true,
                                    _priority: null,
                                    TaiguSkill: true,
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    content() {
                                        'step 0';
                                        trigger.cancel();
                                        player.phaseSkipped = true;
                                        if ((player == _status.roundStart || _status.roundSkipped) && !trigger.skill) {
                                            delete _status.roundSkipped;
                                            game.roundNumber++;
                                            game.updateRoundNumber();
                                            for (var i = 0; i < game.players.length; i++) {
                                                if (game.players[i].isOut() && game.players[i].outCount > 0) {
                                                    game.players[i].outCount--;
                                                    if (game.players[i].outCount == 0 && !game.players[i].outSkills) {
                                                        game.players[i].in();
                                                    }
                                                }
                                            }
                                            event.trigger('roundStart');
                                        }
                                        ('step 1');
                                        player.removeSkill(event.name, true);
                                    },
                                    mark: true,
                                    marktext: '十二',
                                    intro: {
                                        content: '跳过下个回合',
                                    },
                                    popup: false,
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_sqkssanfan: {
                            forced: true,
                            trigger: {
                                player: 'removeMarkAfter',
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.markname == 'tgtt_sqksshishilingyu' && event.num > 0 && player.hasSkill('tgtt_sqksshishilingyu');
                            },
                            content() {
                                'step 0';
                                var list0 = [1, 2, 0].randomGet();
                                event.num = list0;
                                ('step 1');
                                if (event.num < 1) {
                                    player.popup('洗具', 'wood', false);
                                    player.addMark(trigger.markname, trigger.num, false);
                                    game.log(player, '回复了本次消耗的时间值');
                                    event.finish();
                                } else {
                                    player.draw();
                                    player.popup('杯具', 'fire', false);
                                    game.log(player, '回复时间值失败,获得了补偿');
                                    event.finish();
                                }
                            },
                            group: 'tgtt_sqkssanfan_buchong',
                            subSkill: {
                                buchong: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return _status.currentPhase != player && event.cards?.length;
                                    },
                                    content() {
                                        player.addMark('tgtt_sqksshishilingyu', trigger.cards.length);
                                    },//QQQ
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (get.tag(card, 'loseCard')) {
                                                    return [0.5, 1];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_bycssnbingjie: {
                            trigger: {
                                player: 'damageBefore',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.nature == 'ice' || !event.nature;
                            },
                            content() {
                                var num = trigger.num;
                                player.draw(num);
                                player.changeHujia(num);
                                trigger.cancel();
                            },
                            group: ['tgtt_bycssnbingjie_1', 'tgtt_bycssnbingjie_2', 'tgtt_bycssnbingjie_3', 'tgtt_bycssnbingjie_4'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        player: 'useCard2',
                                    },
                                    _priority: 9,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        if (trigger.card && get.tag(trigger.card, 'damage')) {
                                            player.storage.tgtt_bycssnbingjie = true;
                                            player.recover();
                                        } else {
                                            player.storage.tgtt_bycssnbingjie = false;
                                        }
                                    },
                                    _priority: 900,
                                },
                                2: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.card;
                                    },
                                    content() {
                                        player.storage.tgtt_bycssnbingjie = false;
                                    },
                                },
                                3: {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.card && get.type(event.card) == 'trick' && event.parent.name != '_lianhuan' && event.parent.name != '_lianhuan2';
                                    },
                                    content() {
                                        trigger.nature = 'ice';
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.nature == 'ice';
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        event.count = Math.min(trigger.num, 9);
                                        ('step 1');
                                        event.count--;
                                        player.draw();
                                        if (player.hp < player.maxHp) {
                                            player.recover();
                                        } else {
                                            player.changeHujia();
                                        }
                                        ('step 2');
                                        if (event.count > 0 && player.hasSkill('tgtt_bycssnbingjie_4')) {
                                            event.goto(1);
                                        }
                                    },
                                },
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player) {
                                    if (player.storage.tgtt_bycssnbingjie != true) return false;
                                    return true;
                                },
                            },
                        },
                        tgtt_bycssnbingkui: {
                            marktext: '冻',
                            intro: {
                                content(storage) {
                                    return '当前拥有的冰冻值:' + storage + '';
                                },
                            },
                            trigger: {
                                global: ['loseAfter'],
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                if (event.player == player) return false;
                                return player == _status.currentPhase && event.player.isAlive();
                            },
                            content() {
                                player.addMark('tgtt_bycssnbingkui');
                                game.log(player, '获得了1点冰冻值');
                            },
                            group: ['tgtt_bycssnbingkui_damage', 'tgtt_bycssnbingkui_lose'],
                            subSkill: {
                                damage: {
                                    enable: 'phaseUse',
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.hasMark('tgtt_bycssnbingkui');
                                    },
                                    content() {
                                        'step 0';
                                        player
                                            .chooseTarget(get.prompt('tgtt_bycssnbingkui_damage'), '消耗与一名其他角色当前体力值相当的冰冻值并对其造成1点寒冰伤害该角色武将牌翻面,非太古技失效且不能使用或打出手牌,直到其下回合开始', function (card, player, target) {
                                                var num = Math.min(4, target.hp);
                                                return target != player && player.storage.tgtt_bycssnbingkui >= num;
                                            })
                                            .set('ai', function (target) {
                                                return get.attitude(player, target) < 0 && (player.storage.tgtt_bycssnbingkui > target.hp + 2 || target.hp <= 2);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var num1 = Math.min(4, target.hp);
                                            player.removeMark('tgtt_bycssnbingkui', num1);
                                            result.targets[0].damage('nocard', 'ice', 1);
                                            target.turnOver(true);
                                            target.addTempSkill('tgtt_srtsjingu', { player: 'phaseBegin' });
                                            target.addTempSkill('tgtt_srtsfengyin', { player: 'phaseBegin' });
                                        }
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase != player;
                                    },
                                    content() {
                                        player.addMark('tgtt_bycssnbingkui');
                                        game.log(player, '获得了1点冰冻值');
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (get.tag(card, 'loseCard')) {
                                                    return [0.5, 1];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_bycssndongkai: {
                            mod: {
                                cardnature(card, player) {
                                    if (card.name == 'sha' && !card.nature) return 'ice';
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' && card.nature == 'ice') return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (card.name == 'sha' && card.nature == 'ice') return true;
                                },
                            },
                            init(player, skill) {
                                lib.skill.icesha_skill.frequent = function (event, player) {
                                    if (event.source && event.source.hasSkill('tgtt_bycssndongkai')) return true;
                                    return false;
                                };
                                lib.skill.icesha_skill.check = function (event, player) {
                                    if (event.source && event.source.hasSkill('tgtt_bycssndongkai')) return true;
                                    var target = event.player;
                                    if (event.getParent(2).jiu == true) return false;
                                    var eff = get.damageEffect(target, player, player, event.nature);
                                    if (get.attitude(player, target) > 0) {
                                        if (eff >= 0) return false;
                                        return true;
                                    }
                                    if (eff <= 0) return true;
                                    if (target.hp == 1) return false;
                                    if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
                                    if (target.countCards('he') < 2) return false;
                                    var num = 0;
                                    var cards = target.getCards('he');
                                    for (var i = 0; i < cards.length; i++) {
                                        if (get.value(cards[i]) >= 6) num++;
                                    }
                                    if (num >= 3 && event.getParent(2).jiu != true) return true;
                                    if (num >= 2 && target.hasSkillTag('maixie') && event.getParent(2).jiu != true) return true;
                                    return false;
                                };
                            },
                            trigger: {
                                player: ['icesha_skillBefore'],
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var list = [];
                                list.push('选项一');
                                list.push('选项二');
                                if (player.hujia > 0 || player.hasMark('tgtt_bycssnbingkui')) list.push('背水!');
                                player
                                    .chooseControl(list)
                                    .set('choiceList', ['弃牌(防止伤害)', '造成伤害', '背水!弃牌并造成伤害'])
                                    .set('ai', function () {
                                        var eff = get.damageEffect(trigger.getParent(3).player, player, player, 'ice');
                                        if (get.attitude(player, trigger.getParent(3).player) > 0) {
                                            if (eff >= 0) return '选项二';
                                            return '选项一';
                                        }
                                        if (eff <= 0) return '选项一';
                                        if (player.hujia > 2) return '背水!';
                                        return '选项二';
                                    });
                                ('step 1');
                                if (result.control == '选项一') {
                                    event.finish();
                                } else if (result.control == '选项二') {
                                    trigger.cancel();
                                    event.finish();
                                } else {
                                    if (trigger.getParent(3).player) {
                                        if (player.hujia >= 1) {
                                            player.changeHujia(-1);
                                        } else if (player.hasMark('tgtt_bycssnbingkui')) {
                                            player.removeMark('tgtt_bycssnbingkui', 1);
                                        }
                                        trigger.cancel();
                                        event.goto(2);
                                    } else event.finish();
                                }
                                ('step 2');
                                if (trigger.getParent(3).player.countDiscardableCards(player, 'he')) {
                                    player.line(trigger.getParent(3).player);
                                    player.discardPlayerCard('he', trigger.getParent(3).player, true);
                                }
                                ('step 3');
                                if (trigger.getParent(3).player.countDiscardableCards(player, 'he')) {
                                    player.line(trigger.getParent(3).player);
                                    player.discardPlayerCard('he', trigger.getParent(3).player, true);
                                }
                            },
                            prompt2(event, player) {
                                var str = '为寒冰伤害增加背水选项';
                                return str;
                            },
                            group: 'tgtt_bycssndongkai_sha',
                            subSkill: {
                                sha: {
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    preHidden: true,
                                    _priority: -1,
                                    filter(event, player) {
                                        return (
                                            event.num > 0 &&
                                            !event.numFixed &&
                                            !player.hasSkill('tgtt_bycssndongkai_xian') &&
                                            game.hasPlayer((current) => {
                                                return lib.filter.filterTarget({ name: 'sha', nature: 'ice' }, player, current, false);
                                            })
                                        );
                                    },
                                    content() {
                                        'step 0';
                                        var num = get.copy(trigger.num);
                                        var n = 0;
                                        for (var i of game.players) {
                                            if (lib.filter.filterTarget({ name: 'sha', nature: 'ice' }, player, i, false)) n++;
                                        }
                                        var nn = 1;
                                        if (player.hujia > 2) nn += 1;
                                        if (player.hujia > 4) nn += 1;
                                        if (nn > n) nn = n;
                                        num = nn;
                                        player
                                            .chooseTarget(
                                                [1, nn],
                                                function (card, player, target) {
                                                    return target != player && lib.filter.filterTarget({ name: 'sha', nature: 'ice' }, player, target, false);
                                                },
                                                get.prompt('tgtt_bycssndongkai_sha'),
                                                '选择至多' + get.cnNumber(num) + '名其他角色.视为对这些角色使用一张【冰杀】'
                                            )
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                return get.effect(target, { name: 'sha', nature: 'ice' }, player, player);
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            event.targets = targets;
                                            event.num = 0;
                                            trigger.num -= result.targets.length;
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        var targetsx = targets.filter(function (target) {
                                            return player.canUse('sha', target, false);
                                        });
                                        if (targetsx.length) {
                                            player.addTempSkill('tgtt_bycssndongkai_xian', ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
                                            player.useCard(
                                                {
                                                    name: 'sha',
                                                    nature: 'ice',
                                                },
                                                targetsx,
                                                false
                                            );
                                        }
                                        ('step 3');
                                        if (trigger.num <= 0) game.delay();
                                    },
                                    _priority: -100,
                                },
                                xian: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                },
                            },
                        },
                        tgtt_bycssnsifan: {
                            mod: {
                                cardname(card, player) {
                                    if (card.name == 'sha' && player.hujia > player.hp) return 'sha';
                                },
                                cardnature(card, player) {
                                    if (card.name == 'sha' && player.hujia > player.hp) return 'ice';
                                },
                                cardUsable(card, player, num) {
                                    if (player.hujia > player.hp) return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.hujia > player.hp) return true;
                                },
                            },
                            trigger: {
                                player: 'phaseUseBefore',
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                var card = get.cardPile(function (card) {
                                    return card.name == 'wanjian';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 1');
                                var card = get.cardPile(function (card) {
                                    return card.name == 'nanman';
                                });
                                if (card) player.gain(card, 'gain2');
                                ('step 2');
                                if (player.hasSkill('tgtt_bycssnbingkui')) {
                                    var num = game.countGroup();
                                    player.addMark('tgtt_bycssnbingkui', num);
                                }
                            },
                            group: ['tgtt_bycssnsifan_draw'],
                            subSkill: {
                                draw: {
                                    trigger: {
                                        player: ['drawBegin'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player, name) {
                                        return event.num > 0 && player.countCards('h') <= 4 * player.maxHp;
                                    },
                                    content() {
                                        trigger.num += 1;
                                        if (player.hujia > 2) trigger.num += 1;
                                        if (player.hujia > 4) trigger.num += 1;
                                    },
                                },
                            },
                        },
                        tgtt_whqlzaisheng: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: ['damageBegin', 'loseHpBegin'],
                            },
                            forced: true,
                            content() {
                                trigger.num -= 1;
                                player.draw();
                            },
                            group: ['tgtt_whqlzaisheng_hui', 'tgtt_whqlzaisheng_yu'],
                            subSkill: {
                                hui: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: ['damageEnd', 'loseHpEnd'],
                                    },
                                    forced: true,
                                    content() {
                                        player.recover();
                                        player.draw(2);
                                    },
                                },
                                yu: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'phaseEnd',
                                        global: 'roundStart',
                                    },
                                    forced: true,
                                    content() {
                                        var num = Math.max(1, Math.ceil(player.getDamagedHp() / 2)),
                                            abc = num - player.getDamagedHp();
                                        if (abc > 0) {
                                            player.recover(player.getDamagedHp());
                                            player.changeHujia(num);
                                        } else {
                                            player.recover(num);
                                        }
                                    },
                                },
                            },
                        },
                        tgtt_whqlzhuolan: {
                            forceDie: true,
                            enable: 'phaseUse',
                            usable: 1,
                            TaiguSkill: true,
                            charlotte: true,
                            filterCard(card) {
                                return true;
                            },
                            position: 'he',
                            selectCard: [0, Infinity],
                            line: 'fire',
                            check(card) {
                                let result;
                                let red = ui.selected.cards.filter((c) => get.color(c) == 'red').length;
                                let black = ui.selected.cards.filter((c) => get.color(c) == 'black').length;
                                if (get.color(card) == 'red') {
                                    result =
                                        game
                                            .filterPlayer()
                                            .map((p) => get.damageEffect(p, _status.event.player, _status.event.player, 'fire'))
                                            .sort((a, b) => b - a)
                                            .slice(0, black)
                                            .reduce((a, b) => a + Math.max(b, 0), 0) - get.value(card);
                                } else if (get.color(card) == 'black') {
                                    result = game
                                        .filterPlayer()
                                        .map((p) => get.damageEffect(p, _status.event.player, _status.event.player, 'fire') * (red + 1))
                                        .sort((a, b) => b - a)[black];
                                    result = result || 0;
                                    result = Math.max(result, 0);
                                    result -= get.value(card);
                                } else {
                                    result = -get.value(card) / 3;
                                }
                                return result;
                            },
                            filterTarget: true,
                            selectTarget() {
                                return [1, 1 + ui.selected.cards.filter((c) => get.color(c) == 'black').length];
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                targets.sortBySeat();
                                let cnt = cards.filter((c) => get.color(c, player) == 'red').length + 1;
                                if (cnt * targets.length >= 5) {
                                    player.hp = 1;
                                }
                                for (let p of targets) {
                                    p.damage('fire', cnt);
                                }
                            },
                            ai: {
                                order: 6,
                                fireattack: true,
                                result: {
                                    player(player, target) {
                                        return game.filterPlayer((p) => get.attitude(player, p) < 0).length > 1 ? 5 : -5;
                                    },
                                    target(player, target) {
                                        if (target.hasSkillTag('nofire')) return 0;
                                        if (lib.config.mode == 'versus') return -1;
                                        if (player.hasUnknown()) return 0;
                                        return get.damageEffect(target, player, player) / get.attitude(player, target);
                                    },
                                },
                            },
                            group: ['tgtt_whqlzhuolan_zeng', 'tgtt_whqlzhuolan_yan', 'tgtt_whqlzhuolan_shao'],
                            subSkill: {
                                zeng: {
                                    trigger: {
                                        source: 'damageBegin2',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.nature == 'fire';
                                    },
                                    content() {
                                        trigger.num += 1;
                                    },
                                },
                                yan: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !event.nature;
                                    },
                                    content() {
                                        trigger.nature = 'fire';
                                    },
                                },
                                shao: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        'step 0';
                                        player.chooseTarget(get.prompt2('tgtt_whqlzhuolan_shao'), lib.filter.notMe).set('ai', (target) => {
                                            var player = _status.event.player;
                                            return get.damageEffect(target, player, player);
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            result.targets[0].damage('fire');
                                            player.draw(2);
                                        }
                                    },
                                },
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        tgtt_whqljiangui: {
                            marktext: '歼',
                            intro: {
                                name: '歼鬼',
                                content: '当前有#个<歼鬼>标记',
                            },
                            trigger: {
                                player: ['damageEnd', 'loseHpEnd'],
                            },
                            forced: true,
                            TaiguSkill: true,
                            charlotte: true,
                            filter(event, player) {
                                return event.num > 0;
                            },
                            content() {
                                player.addMark('tgtt_whqljiangui', trigger.num);
                            },
                            ai: {
                                maixie: true,
                            },
                            group: ['tgtt_whqljiangui_start', 'tgtt_whqljiangui_ran'],
                            subSkill: {
                                start: {
                                    trigger: {
                                        global: 'gameStart',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !player.storage.tgtt_whqljiangui_start;
                                    },
                                    content() {
                                        (player.storage.tgtt_whqljiangui_start = true), player.addMark('tgtt_whqljiangui', 5);
                                        player.draw(5);
                                    },
                                },
                                ran: {
                                    trigger: {
                                        global: 'damageBegin2',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        if (!event.source) return false;
                                        if (player != event.source && event.nature != 'fire') return false;
                                        if (!player.hasMark('tgtt_whqljiangui')) return false;
                                        return player.hp > 0 || player != event.source;
                                    },
                                    prompt(event, player) {
                                        var dnum = get.cnNumber(event.num) + '点',
                                            nature = event.nature ? get.translation(event.nature) + '属性' : '';
                                        return get.translation(event.source) + '将对' + get.translation(event.player) + '造成' + dnum + nature + '伤害,' + get.prompt('tgtt_whqljiangui_ran');
                                    },
                                    content() {
                                        'step 0';
                                        if (trigger.source == player) {
                                            event.goto(2);
                                        } else {
                                            var next = player.chooseBool();
                                            next.ai = function () {
                                                if (_status.event.isEnemy && _status.event.isCanqu) return true;
                                                return false;
                                            };
                                            next.set('prompt', lib.skill.tgtt_whqljiangui_ran.prompt(trigger, player));
                                            next.set('prompt2', '移去一枚<歼鬼>标记,令伤害值+1');
                                            next.set('isEnemy', get.attitude(player, trigger.player) < 0);
                                            next.set('isCanqu', trigger.num + 1 >= trigger.player.hp);
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.removeMark('tgtt_whqljiangui', 1);
                                            trigger.num++;
                                        }
                                        event.finish();
                                        ('step 2');
                                        var list = [];
                                        var i = 0,
                                            countMark = player.countMark('tgtt_whqljiangui') - 1;
                                        if (trigger.nature == 'fire') {
                                            i++;
                                            countMark++;
                                        }
                                        for (var i = 0; i <= player.hp; i++) {
                                            if (i > countMark) break;
                                            list.push(i);
                                        }
                                        if (player.isUnderControl()) {
                                            game.swapPlayerAuto(player);
                                        }
                                        var switchToAuto = function () {
                                            _status.imchoosing = false;
                                            event._result = {
                                                bool: false,
                                            };
                                            var damage1 = get.damageEffect(trigger.player, player, player, 'fire');
                                            var damage2 = get.damageEffect(trigger.player, player, player, trigger.nature);
                                            if (damage1 >= Math.max(0, damage2)) {
                                                event._result.bool = true;
                                                if ((damage1 > damage2 && list.length > 1) || trigger.nature == 'fire') {
                                                    event._result.number = list[list.length - 1];
                                                } else {
                                                    event._result.number = list[0];
                                                }
                                            }
                                            if (event.dialog) event.dialog.close();
                                            if (event.control) event.control.close();
                                        };
                                        var chooseButton = function (player, numbers, trigger) {
                                            var event = _status.event;
                                            player = player || event.player;
                                            if (!event._result) event._result = {};
                                            var dialog = ui.create.dialog(lib.skill.tgtt_whqljiangui_ran.prompt(trigger, player), 'forcebutton', 'hidden');
                                            event.dialog = dialog;
                                            dialog.addText('请选择要增加的伤害点数');
                                            var table = document.createElement('div');
                                            table.classList.add('add-setting');
                                            table.style.margin = '0';
                                            table.style.width = '100%';
                                            table.style.position = 'relative';
                                            for (var i = 0; i < numbers.length; i++) {
                                                var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                                td.link = numbers[i];
                                                table.appendChild(td);
                                                td.innerHTML = '<span>' + get.cnNumber(numbers[i], true) + '</span>';
                                                td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                                    if (_status.dragged) return;
                                                    if (_status.justdragged) return;
                                                    _status.tempNoButton = true;
                                                    setTimeout(function () {
                                                        _status.tempNoButton = false;
                                                    }, 500);
                                                    var link = this.link;
                                                    var current = this.parentNode.querySelector('.bluebg');
                                                    if (current) {
                                                        current.classList.remove('bluebg');
                                                    }
                                                    this.classList.add('bluebg');
                                                    event._result.number = link;
                                                });
                                            }
                                            dialog.content.appendChild(table);
                                            dialog.add('　　');
                                            event.dialog.open();
                                            event.switchToAuto = function () {
                                                event._result = {
                                                    bool: true,
                                                    number: list[list.length - 1],
                                                };
                                                event.dialog.close();
                                                event.control.close();
                                                game.resume();
                                                _status.imchoosing = false;
                                            };
                                            event.control = ui.create.control('ok', 'cancel2', function (link) {
                                                var result = event._result;
                                                if (link == 'cancel2') result.bool = false;
                                                else {
                                                    if (typeof result.number != 'number') return;
                                                    result.bool = true;
                                                }
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
                                            chooseButton(player, list, trigger);
                                        } else if (event.isOnline()) {
                                            event.player.send(chooseButton, event.player, list, trigger);
                                            event.player.wait();
                                            game.pause();
                                        } else {
                                            switchToAuto();
                                        }
                                        ('step 3');
                                        var result = event.result || result;
                                        if (result.bool) {
                                            var num = result.number || 0;
                                            trigger.num += num;
                                            if (trigger.nature != 'fire') {
                                                trigger.nature = 'fire';
                                                num++;
                                            }
                                            player.removeMark('tgtt_whqljiangui', num);
                                        }
                                    },
                                },
                            },
                        },
                        tgtt_whqlwufan: {
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'damageBegin4',
                                global: 'damageEnd',
                            },
                            filter(event, player) {
                                return event.nature == 'fire';
                            },
                            forced: true,
                            content() {
                                if (event.triggername == 'damageBegin4') {
                                    if (player.getDamagedHp()) {
                                        player.recover(trigger.num);
                                    } else {
                                        player.draw(2);
                                    }
                                    trigger.cancel();
                                } else {
                                    player.addMark('tgtt_whqljiangui', trigger.num);
                                    player.recover();
                                    player.changeHujia();
                                }
                            },
                            ai: {
                                nofire: true,
                                effect: {
                                    target(card, player, target, current) {
                                        if (get.tag(card, 'fireDamage')) return 'zerotarget';
                                    },
                                },
                            },
                            group: 'tgtt_whqlwufan_huo',
                            subSkill: {
                                huo: {
                                    trigger: {
                                        player: 'loseEnd',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return _status.currentPhase != player;
                                    },
                                    content() {
                                        'step 0';
                                        player.judge(function (card) {
                                            return get.color(card) == 'red' ? 1 : 0;
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.chooseTarget(true, '选择一个目标对其造成1点火焰伤害', function (card, player, target) {
                                                return true;
                                            }).ai = function (target) {
                                                return get.damageEffect(target, player, player, 'fire');
                                            };
                                        } else {
                                            player.draw();
                                            player.addMark('tgtt_whqljiangui', 1);
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.targets.length) {
                                            player.line(result.targets, 'fire');
                                            result.targets[0].damage(1, 'fire');
                                        }
                                    },
                                    ai: {
                                        effect: {
                                            target(card) {
                                                if (get.tag(card, 'loseCard')) {
                                                    return [0.5, 1];
                                                }
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_xglczhangkong: {
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) == 'card' && card.hasGaintag('tgtt_xglczhangkong')) return num + 0.5;
                                },
                                globalFrom(from, to, distance) {
                                    if (_status.currentPhase == from) {
                                        return distance - Infinity;
                                    }
                                },
                            },
                            forced: true,
                            marktext: '掌',
                            intro: {
                                mark(dialog, storage, player) {
                                    dialog.addAuto(
                                        player.getCards('s', function (card) {
                                            return card.hasGaintag('tgtt_xglczhangkong');
                                        })
                                    );
                                },
                                markcount(storage, player) {
                                    return player.getCards('s', function (card) {
                                        return card.hasGaintag('tgtt_xglczhangkong');
                                    }).length;
                                },
                                onunmark(storage, player) {
                                    var cards = player.getCards('s', function (card) {
                                        return card.hasGaintag('tgtt_xglczhangkong');
                                    });
                                    if (cards.length) {
                                        player.lose(cards, ui.discardPile);
                                        player.$throw(cards, 1000);
                                        game.log(cards, '进入了弃牌堆');
                                    }
                                },
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            filter(event, player) {
                                var list = [];
                                player.getCards('s', function (card) {
                                    if (card.hasGaintag('tgtt_xglczhangkong')) list.add(card.name);
                                });
                                if (!event.targets || !event.targets.includes(player)) return false;
                                if (!player.countCards('he')) return false;
                                return event.player != player && event.card && event.card.name != 'tao';
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
                                    return true;
                                } else if (event.card.name == 'shunshou' || (event.card.name == 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) {
                                    return true;
                                }
                                return false;
                            },
                            trigger: {
                                target: 'useCardToTarget',
                            },
                            content() {
                                'step 0';
                                player
                                    .chooseToDiscard(get.prompt('tgtt_xglczhangkong', trigger.player), '弃置一张牌,取消' + get.translation(trigger.card) + '的所有目标', 'he')
                                    .set('ai', function (card) {
                                        return _status.event.goon / 1.4 - get.value(card);
                                    })
                                    .set(
                                        'goon',
                                        (function () {
                                            if (!trigger.targets.length) return -get.attitude(player, trigger.player);
                                            var num = 0;
                                            for (var i of trigger.targets) {
                                                num -= get.effect(i, trigger.card, trigger.player, player);
                                            }
                                            return num;
                                        })()
                                    );
                                ('step 1');
                                if (result.bool) {
                                    trigger.targets.length = 0;
                                    game.log(player, '将', trigger.cards, '封印了');
                                    player.loseToSpecial(trigger.cards, 'tgtt_xglczhangkong');
                                    player.changeHujia();
                                }
                            },
                            ai: {
                                unequip: true,
                                skillTagFilter(player) {
                                    if (player != _status.currentPhase) return false;
                                },
                                expose: 0.3,
                            },
                            group: ['tgtt_xglczhangkong_ze', 'tgtt_xglczhangkong_mo'],
                            subSkill: {
                                ze: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        player.chooseControl('摸牌阶段', '出牌阶段', 'cancel2').set('prompt', '掌控:是否执行一个额外的阶段？');
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            var next = player[result.index ? 'phaseUse' : 'phaseDraw']();
                                            event.next.remove(next);
                                            trigger.next.push(next);
                                        }
                                    },
                                },
                                mo: {
                                    trigger: {
                                        player: 'loseAfter',
                                    },
                                    filter(event, player) {
                                        return player.countCards('he') <= 6;
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    content() {
                                        player.recover();
                                        player.draw();
                                    },
                                },
                            },
                        },
                        tgtt_xglcliufan: {
                            charlotte: true,
                            TaiguSkill: true,
                            trigger: {
                                global: ['phaseUseBegin', 'phaseEnd'],
                            },
                            filter(event, player) {
                                return event.player != player && event.player.countCards('he') > event.player.hp;
                            },
                            check(event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            logTarget(event) {
                                return event.player;
                            },
                            content() {
                                var abc = trigger.player.countCards('he') - trigger.player.hp;
                                var num = Math.max(1, abc);
                                trigger.player.chooseToDiscard('【六番】:弃置' + get.cnNumber(num) + '张牌', num, 'he', true);
                            },
                            ai: {
                                threaten: 1.5,
                            },
                            group: ['tgtt_xglcliufan_huo', 'tgtt_xglcliufan_qi', 'tgtt_xglcliufan_zhui', 'tgtt_xglcliufan_feng'],
                            subSkill: {
                                huo: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        player: 'phaseDrawBegin',
                                    },
                                    filter(event, player) {
                                        return event.player == player;
                                    },
                                    content() {
                                        trigger.changeToZero();
                                        var num = (player.getDamagedHp() + 1) * 6;
                                        var list = [];
                                        var typelist = [];
                                        typelist.push('equip');
                                        var getType = function (card) {
                                            var sub = get.subtype(card);
                                            if (sub) return sub;
                                            return card.name;
                                        };
                                        for (var i = 0; i < ui.cardPile.childElementCount; i++) {
                                            var node = ui.cardPile.childNodes[i];
                                            var typex = getType(node);
                                            if (!typelist.includes(typex)) {
                                                list.push(node);
                                                typelist.push(typex);
                                                if (list.length >= num) break;
                                            }
                                        }
                                        if (list.length < num) {
                                            for (var i = 0; i < ui.discardPile.childElementCount; i++) {
                                                var node = ui.discardPile.childNodes[i];
                                                var typex = getType(node);
                                                if (!typelist.includes(typex)) {
                                                    list.push(node);
                                                    typelist.push(typex);
                                                    if (list.length >= num) break;
                                                }
                                            }
                                        }
                                        player.gain(list, 'gain2');
                                    },
                                },
                                qi: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        if (event.player == player) return false;
                                        return _status.currentPhase == event.player && event.player.countCards('he') > 0;
                                    },
                                    check(event, player) {
                                        return get.attitude(player, event.player) < 1;
                                    },
                                    logTarget: 'player',
                                    content() {
                                        event.cards = trigger.player.getCards('he').randomGets(1);
                                        if (event.cards.length) trigger.player.discard(event.cards);
                                    },
                                },
                                zhui: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.isAlive() && event.player != player;
                                    },
                                    content() {
                                        player.draw();
                                        player.chooseToUse(
                                            function (card) {
                                                return !get.info(card).multitarget && card.name != 'shan' && card.name != 'wuxie';
                                            },
                                            get.prompt('tgtt_xglcliufan_zhui', trigger.player),
                                            trigger.player,
                                            -1
                                        );
                                    },
                                },
                                feng: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    _priority: 1,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player) {
                                                current.addTempSkill('tgtt_srtspofang');
                                                current.storage.tgtt_srtspofang.add(trigger.card);
                                                current.markSkill('tgtt_srtspofang');
                                            }
                                        });
                                    },
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_jyqzyanzaomonv: {
                            enable: 'phaseUse',
                            usable: 1,
                            position: 'he',
                            charlotte: true,
                            TaiguSkill: true,
                            derivation: ['tgtt_yyzzguangjian', 'tgtt_yyzzpaoguan', 'tgtt_bteyniegao', 'tgtt_bteypianzhi', 'tgtt_sqksshishilingyu', 'tgtt_sqkskekedi', 'tgtt_sqksyizhidan', 'tgtt_sqkserzhidan', 'tgtt_sqkssizhidan', 'tgtt_sqkswuzhidan', 'tgtt_sqksbazhidan', 'tgtt_sqksshizhidan', 'tgtt_bycssnbingjie', 'tgtt_bycssnbingkui', 'tgtt_whqlzhuolan', 'tgtt_whqljiangui', 'tgtt_xglcfjzbi', 'tgtt_xglcfjzkai', 'tgtt_fsbwxxshufuzhe', 'tgtt_fsptlianhuan', 'tgtt_fsbwyjsguanchuanzhe', 'tgtt_fssmyyimie', 'tgtt_fsyidaozhan'],
                            filter: (event, player) => player.countCards('he'),
                            filterTarget(card, player, target) {
                                if (target == player) return false;
                                var pss = player.getSkills();
                                var skills = target.getSkills(true, false);
                                var list = [];
                                for (var j = 0; j < skills.length; j++) {
                                    if (lib.translate[skills[j] + '_info'] && !pss.includes(skills[j])) return true;
                                }
                                return false;
                            },
                            filterCard: true,
                            discard: false,
                            lose: false,
                            check(card) {
                                return 7 - get.value(card);
                            },
                            content() {
                                'step 0';
                                target.gain(cards[0], player, 'give');
                                player.draw(2);
                                player.changeHujia();
                                if (player.storage.tgtt_jyqzyanzaomonv) {
                                    player.removeAdditionalSkill('tgtt_jyqzyanzaomonv');
                                    if (
                                        !game.hasPlayer(function (current) {
                                            return player != current && current.hasSkill(player.storage.tgtt_jyqzyanzaomonv);
                                        })
                                    ) {
                                        player.addSkill(player.storage.tgtt_jyqzyanzaomonv);
                                    }
                                }
                                ('step 1');
                                event.list = target.getSkills(true, false);
                                var list = event.list;
                                var dialog = ui.create.dialog('hidden', 'forcebutton');
                                dialog.addText('选择获得一个技能');
                                for (var i = 0; i < list.length; i++) {
                                    dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【' + get.translation(list[i]) + '】</div><div>' + lib.translate[list[i] + '_info'] + '</div></div>');
                                }
                                dialog.addText(' <br> ');
                                player.chooseControl(event.list).set('ai', function () {
                                    return list[0];
                                    /*return event.skillai=function(list){
                                        return get.max(list,get.skillRank,'item');
                                    };*/
                                }).dialog = dialog;
                                ('step 2');
                                player.addAdditionalSkill('tgtt_jyqzyanzaomonv', result.control);
                                player.popup(result.control);
                                game.log(player, '获得了', '【' + get.translation(result.control) + '】');
                                player.storage.tgtt_jyqzyanzaomonv = result.control;
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target(player, target, skill) {
                                        var skills = target.getSkills(true, false),
                                            num = 0;
                                        for (var i = 0; i < skills.length; i++) {
                                            num += (get.skillRank(skills[i], 'in') + get.skillRank(skills[i], 'out')) / 2;
                                        }
                                        return num;
                                    },
                                    player(player, target) {
                                        if (
                                            !player.storage.tgtt_jyqzyanzaomonv ||
                                            !game.hasPlayer(function (current) {
                                                return player != current && current.hasSkill(player.storage.tgtt_jyqzyanzaomonv);
                                            })
                                        )
                                            return 0;
                                        return -1;
                                    },
                                },
                                threaten: 1.3,
                            },
                            group: ['tgtt_jyqzyanzaomonv_bian', 'tgtt_jyqzyanzaomonv_huan', 'tgtt_jyqzyanzaomonv_fu'],
                            subSkill: {
                                bian: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    init(player) {
                                        player.storagetgtt_jyqzyanzaomonva = player.sex;
                                    },
                                    trigger: {
                                        player: 'phaseJieshuEnd',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        if (!player.countCards('he')) return false;
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.recover();
                                        player.changeHujia();
                                        if (player.countCards('he')) {
                                            player.chooseCardTarget({
                                                prompt: get.prompt('tgtt_jyqzyanzaomonv_bian'),
                                                filterCard: lib.filter.cardDiscardable,
                                                position: 'he',
                                                filterTarget(card, player, target) {
                                                    if (target == player) return false;
                                                    var name = target.name.indexOf('unknown') == 0 ? target.name2 : target.name;
                                                    if (name == player.storage.tgtt_jyqzyanzaomonv_bian) return false;
                                                    var info = lib.character[name];
                                                    if (info) {
                                                        var skills = info[3];
                                                        for (var j = 0; j < skills.length; j++) {
                                                            if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !player.hasSkill(skills[j])) {
                                                                return true;
                                                            }
                                                        }
                                                    }
                                                    return false;
                                                },
                                                ai1(card) {
                                                    if (player.additionalSkills.tgtt_jyqzyanzaomonv_bian && player.additionalSkills.tgtt_jyqzyanzaomonv_bian.length) return 0;
                                                    return 7 - get.value(card);
                                                },
                                                ai2(target) {
                                                    if (target.isMin()) return 0;
                                                    return 6 - target.maxHp;
                                                },
                                            });
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        if (result.bool) {
                                            player.unmark(player.storage.tgtt_jyqzyanzaomonv_bian + '_charactermark');
                                            player.discard(result.cards);
                                            var name = result.targets[0].name;
                                            if (name.indexOf('unknown') == 0) {
                                                name = result.targets[0].name2;
                                            }
                                            var list = [];
                                            var skills = lib.character[name][3];
                                            for (var j = 0; j < skills.length; j++) {
                                                if (lib.translate[skills[j] + '_info'] && lib.skill[skills[j]] && !player.hasSkill(skills[j])) {
                                                    list.push(skills[j]);
                                                }
                                            }
                                            player.addAdditionalSkills('tgtt_jyqzyanzaomonv_bian', list);
                                            player.markCharacter(name, null, true, true);
                                            game.addVideo('markCharacter', player, {
                                                name: '赝造',
                                                content: '',
                                                id: 'tgtt_jyqzyanzaomonv_bian',
                                                target: name,
                                            });
                                            player.storage.tgtt_jyqzyanzaomonv_bian = name;
                                            player.sex = result.targets[0].sex;
                                        }
                                    },
                                },
                                huan: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    _priority: -15,
                                    forced: true,
                                    filter(event, player) {
                                        return player.additionalSkills.tgtt_jyqzyanzaomonv_bian && player.additionalSkills.tgtt_jyqzyanzaomonv_bian.length;
                                    },
                                    content() {
                                        player.unmark(player.storage.tgtt_jyqzyanzaomonv_bian + '_charactermark');
                                        player.removeAdditionalSkills('tgtt_jyqzyanzaomonv_bian');
                                        delete player.storage.tgtt_jyqzyanzaomonv_bian;
                                        player.checkMarks();
                                        player.sex = player.storage.tgtt_jyqzyanzaomonva;
                                    },
                                    _priority: -1500,
                                },
                                fu: {
                                    trigger: {
                                        player: 'phaseBegin',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    content() {
                                        'step 0';
                                        var op = ['tgtt_jyqzyyzz', 'tgtt_jyqzbtey', 'tgtt_jyqzsqks', 'tgtt_jyqzbycssn', 'tgtt_jyqzwhql', 'tgtt_jyqzfsbw'].randomGet();
                                        player.addTempSkills(op, { player: 'phaseBefore' });
                                        player.say(['赝造魔女!', '请大家借给我力量吧!'].randomGet());
                                    },
                                    _priority: -1500,
                                },
                            },
                        },
                        tgtt_jyqzqianbianwanhuajing: {
                            charlotte: true,
                            TaiguSkill: true,
                            trigger: {
                                player: ['phaseBegin', 'phaseEnd', 'gainMaxHpBegin', 'loseMaxHpBegin', 'recoverBegin', 'loseHpBegin', 'damageEnd'],
                                global: 'roundStart',
                                source: 'damageBegin',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                var list;
                                var grouplist;
                                if (_status.characterlist) {
                                    list = [];
                                    grouplist = [];
                                    for (var i = 0; i < _status.characterlist.length; i++) {
                                        var name = _status.characterlist[i];
                                        list.push(name);
                                    }
                                } else if (_status.connectMode) {
                                    list = get.charactersOL(function (i) {
                                        return true;
                                    });
                                } else {
                                    list = get.gainableCharacters(function (info) {
                                        return true;
                                    });
                                }
                                var players = game.players.concat(game.dead);
                                for (var i = 0; i < players.length; i++) {
                                    list.remove(players[i].name);
                                    list.remove(players[i].name1);
                                    list.remove(players[i].name2);
                                }
                                list.remove(name);
                                player
                                    .chooseButton(true)
                                    .set('ai', function (button) {
                                        return Math.random();
                                    })
                                    .set('createDialog', ['请选择一张武将牌', [list.randomGets(7), 'character']]);
                                ('step 1');
                                var list = [];
                                var listm = [];
                                listm = lib.character[result.links[0]][3];
                                var func = function (skill) {
                                    var info = get.info(skill);
                                    return true;
                                };
                                for (var i = 0; i < listm.length; i++) {
                                    if (func(listm[i])) list.add(listm[i]);
                                }
                                event.skills = list;
                                player.chooseControl(list).set('prompt', '请选择一个技能');
                                ('step 2');
                                var skill = result.control;
                                event.skill = skill;
                                player
                                    .chooseTarget('请选择要获得技能的角色', function (card, player, target) {
                                        return true;
                                    })
                                    .set('ai', function (target) {
                                        return get.attitude(player, target);
                                    });
                                ('step 3');
                                if (result.bool) {
                                    var target = result.targets[0];
                                    player.line(target);
                                    target.storage.tgtt_jyqzqianbianwanhuajing = skill;
                                    target.addSkillLog(skill);
                                } else event.finish();
                            },
                            group: ['tgtt_jyqzqianbianwanhuajing_jing'],
                            subSkill: {
                                jing: {
                                    trigger: {
                                        global: 'useCardAfter',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        var type = get.type(event.card, 'trick');
                                        return event.player != player && (type == 'basic' || type == 'trick' || type == 'spell' || type == 'hsshenqi' || type == 'land' || type == 'equip' || type == 'jiguan' || type == 'food' || type == 'delay');
                                    },
                                    content() {
                                        'step 0';
                                        player.gain(game.createCard(trigger.card), 'gain2');
                                        ('step 1');
                                        if (player.countCards('he') <= 7) {
                                            player.draw();
                                            player.changeHujia();
                                        }
                                    },
                                },
                            },
                        },
                        tgtt_jyqzyyzz: {
                            group: ['tgtt_yyzzguangjian', 'tgtt_yyzzguangjian_diamond', 'tgtt_yyzzguangjian_spade', 'tgtt_yyzzguangjian_heart', 'tgtt_yyzzguangjian_club', 'tgtt_yyzzpaoguan', 'tgtt_yyzzpaoguana'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Methratton',
                            intro: {
                                name: '绝灭天使',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>鸢一折纸</font>的力量,拥有技能【光剑】和【炮冠】',
                            },
                        },
                        tgtt_jyqzbtey: {
                            group: ['tgtt_bteyniegao', 'tgtt_bteypianzhi', 'tgtt_bteypianzhi_pian', 'tgtt_bteypianzhi_zhi', 'tgtt_bteypianzhi_gai'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Ratziel',
                            intro: {
                                name: '嗫告篇帙',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>本条二亚</font>的力量,拥有技能【嗫告】和【篇帙】',
                            },
                        },
                        tgtt_jyqzsqks: {
                            group: ['tgtt_sqksshishilingyu', 'tgtt_sqksshishilingyu_1', 'tgtt_sqksshishilingyu_2', 'tgtt_sqksshishilingyu_3', 'tgtt_sqksshishilingyu_4', 'tgtt_sqksshishilingyu_5', 'tgtt_sqksyizhidan', 'tgtt_sqkserzhidan', 'tgtt_sqkssizhidan', 'tgtt_sqkswuzhidan', 'tgtt_sqksbazhidan', 'tgtt_sqksshizhidan'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Zafkiel',
                            intro: {
                                name: '刻刻帝',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>时崎狂三</font>的力量,拥有技能【食时领域】和【刻刻帝】',
                            },
                        },
                        tgtt_jyqzbycssn: {
                            group: ['tgtt_bycssnbingjie', 'tgtt_bycssnbingjie_1', 'tgtt_bycssnbingjie_2', 'tgtt_bycssnbingjie_3', 'tgtt_bycssnbingjie_4', 'tgtt_bycssnbingkui', 'tgtt_bycssnbingkui_damage', 'tgtt_bycssnbingkui_lose'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Zadkiel',
                            intro: {
                                name: '冰结傀儡',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>冰芽川四糸乃</font>的力量,拥有技能【冰结】和【冰傀】',
                            },
                        },
                        tgtt_jyqzwhql: {
                            group: ['tgtt_whqlzhuolan', 'tgtt_whqlzhuolan_zeng', 'tgtt_whqlzhuolan_yan', 'tgtt_whqlzhuolan_shao', 'tgtt_whqljiangui', 'tgtt_whqljiangui_start', 'tgtt_whqljiangui_ran'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Camael',
                            intro: {
                                name: '灼烂歼鬼',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>五河琴里</font>的力量,拥有技能【灼烂】和【歼鬼】',
                            },
                        },
                        tgtt_xglcfjzbi: {
                            charlotte: true,
                            TaiguSkill: true,
                        },
                        tgtt_xglcfjzkai: {
                            charlotte: true,
                            TaiguSkill: true,
                        },
                        tgtt_jyqzfsbw: {
                            group: ['tgtt_fsbwxxshufuzhe', 'tgtt_fsptlianhuan', 'tgtt_fsptlianhuan_use', 'tgtt_fsptlianhuan_add', 'tgtt_fsptlianhuan_discard2', 'tgtt_fsbwyjsguanchuanzhe', 'tgtt_fsbwyjsguanchuanzhe_gai', 'tgtt_fssmyyimie'],
                            mark: true,
                            charlotte: true,
                            TaiguSkill: true,
                            marktext: 'Raphael',
                            intro: {
                                name: '飓风骑士',
                                content: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>风侍八舞</font>的力量,拥有技能【束缚者】和【贯穿者】',
                            },
                        },
                        tgtt_jyqzqifan: {
                            mod: {
                                targetEnabled(card, player, target, now) {
                                    if (player != target && !target.inRange(player) && card.name != 'tao') return false;
                                },
                                maxHandcard(player, num) {
                                    return num + player.hp;
                                },
                                attackRange(player, num) {
                                    return num + player.hp;
                                },
                                cardUsable(card, player, num) {
                                    if (card.name == 'sha' || card.name == 'jiu') return num + player.hp;
                                },
                            },
                            trigger: {
                                player: ['changeHp', 'gainMaxHpEnd', 'loseMaxHpEnd'],
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            content() {
                                'step 0';
                                event.count = 1;
                                ('step 1');
                                event.num = 7;
                                event.cards = get.cards(event.num);
                                player.say(['让他们知道我们的厉害,赝造魔女!', '这就是胜利之光!'].randomGet());
                                game.log(player, '观看了', '#y牌堆顶的' + get.cnNumber(event.num) + '张牌');
                                ('step 2');
                                if (player.countCards('he')) var list = ['用牌与其中任意张牌组成等差数列', '<div class="text center">牌堆顶的' + get.cnNumber(event.num) + '张牌</div>', event.cards, '<div class="text center">你的牌</div>', player.getCards('he')];
                                else var list = ['用牌与其中任意张牌组成等差数列', '<div class="text center">牌堆顶的' + get.cnNumber(event.num) + '张牌</div>', event.cards];
                                var next = player.chooseButton();
                                next.set('createDialog', list);
                                next.set('selectButton', function () {
                                    //QQQ
                                    return [3, Infinity];
                                });
                                next.set('filterButton', function (button) {
                                    var player = _status.event.player,
                                        cards = event.cards,
                                        list = [];
                                    if (ui.selected.buttons.length) {
                                        for (var i = 0; i < ui.selected.buttons.length; i++) {
                                            list.add(ui.selected.buttons[i].link.number);
                                        }
                                        list.sort(function (a, b) {
                                            return a - b;
                                        });
                                        if (list.includes(button.link.number)) return false;
                                        if (ui.selected.buttons.length > 1) {
                                            var num = list[1] - list[0];
                                            return button.link.number == list[0] - num || button.link.number == list[ui.selected.buttons.length - 1] + num || button.link.number - list[0] == num / 2;
                                        } else {
                                            return !list.includes(button.link.number);
                                        }
                                    }
                                    return cards.includes(button.link);
                                });
                                ('step 3');
                                if (result.bool) {
                                    event.cards = result.links;
                                    player.showCards(result.links, '七番');
                                    player.gain(result.links);
                                } else {
                                    event.finish();
                                }
                                ('step 4');
                                player.chooseCardTarget({
                                    filterCard(card) {
                                        return _status.event.parent.cards.includes(card);
                                    },
                                    selectCard: [1, event.cards.length],
                                    filterTarget(card, player, target) {
                                        return player != target;
                                    },
                                    ai1(card) {
                                        if (ui.selected.cards.length) return -1;
                                        return _status.event.player.countCards('h') - _status.event.player.hp;
                                    },
                                    ai2(target) {
                                        return get.attitude(_status.event.player, target) - 4;
                                    },
                                    prompt: '请选择要送人的卡牌,或点<取消>全留给自己',
                                });
                                ('step 5');
                                if (result.bool) {
                                    result.targets[0].gain(result.cards, player);
                                    player.$give(result.cards.length, result.targets[0]);
                                    for (var i = 0; i < result.cards.length; i++) {
                                        event.cards.remove(result.cards[i]);
                                    }
                                    if (event.cards.length) event.goto(4);
                                }
                            },
                            group: ['tgtt_jyqzqifan_yan'],
                            subSkill: {
                                yan: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return event.player.countCards('he') && ui.cardPile.childElementCount > 7;
                                    },
                                    content() {
                                        'step 0';
                                        event.forceDie = true;
                                        var ask = trigger.player.chooseCard('he');
                                        if (player == trigger.player) {
                                            ask.set('prompt', '是否弃置一张牌以发动【七番】？');
                                        } else ask.set('prompt', '是否将一张牌展示并交给' + get.translation(player) + '以发动【七番】？');
                                        ask.set('ai', function (card) {
                                            if (get.attitude(trigger.player, player) < 0 || get.value(card) >= 7) return 0;
                                            return player == trigger.player ? 7 - get.value(card) : 1 - Math.random();
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            delete result.bool;
                                            event.card = result.cards[0];
                                            event.num = event.card.number;
                                            if (player == trigger.player) player.discard(event.card);
                                            else trigger.player.give(event.card, player, 'gain2');
                                        } else event.finish();
                                        ('step 2');
                                        var list = ['窥视天机'];
                                        var name = get.translation(event.card.name);
                                        var choice = '归还';
                                        if (name.length < 2) choice += '此' + name;
                                        else choice += name.slice(0, 2);
                                        list.push(choice);
                                        player
                                            .chooseControl(list)
                                            .set('prompt', '七番:选择执行以下一项')
                                            .set('choiceList', ['窥视天机,以点数「' + get.translation(event.num) + '」进行一次演算,并将演算成功的所有牌交给' + get.translation(trigger.player) + (player == trigger.player ? '(你)' : ''), '拒绝算命,将' + (get.position(event.card) == 'd' ? '弃牌堆中的' : '你手中的') + get.translation(event.card) + '退还给' + get.translation(trigger.player) + (player == trigger.player ? '(你)' : '')])
                                            .set('choice', get.attitude(player, trigger.player) > 0 ? 0 : 1)
                                            .set('ai', () => _status.event.choice);
                                        ('step 3');
                                        if (result.control == '窥视天机') {
                                            if (player != trigger.player) game.delay();
                                        } else {
                                            if (player == trigger.player) player.gain(event.card, 'gain2');
                                            else player.give(event.card, trigger.player, 'gain2');
                                            event.finish();
                                        }
                                        ('step 4');
                                        event.cards = get.cards(7);
                                        player.showCards(event.cards, get.translation(player) + '发动了【七番】,目标点数:「' + get.translation(event.num) + '」');
                                        event.cards.reverse();
                                        ('step 5');
                                        var cards = event.cards;
                                        var show = [];
                                        var num = cards[0].number + cards[1].number + cards[2].number + cards[3].number + cards[4].number + cards[5].number + cards[6].number;
                                        if (num == event.num && !show.length) {
                                            var ss = cards;
                                            for (s = 0; s < ss.length; s++) {
                                                if (show.length) show.unshift('+');
                                                show.unshift(ss[s]);
                                            }
                                        }
                                        for (var i = 0; i < cards.length; i++) {
                                            var num1 = num - cards[i].number * 2;
                                            if (num1 == event.num && !show.length) {
                                                var ss = cards;
                                                for (s = 0; s < ss.length; s++) {
                                                    var minus = [cards[i]];
                                                    if (minus.includes(ss[s])) {
                                                        if (show.length) show.push('-');
                                                        else if (!neg) var neg = 1;
                                                        show.push(ss[s]);
                                                    } else {
                                                        if (show.length && !neg) show.unshift('+');
                                                        if (neg) {
                                                            show.unshift('-');
                                                            neg--;
                                                        }
                                                        show.unshift(ss[s]);
                                                    }
                                                }
                                            }
                                            var carda = cards.filter((item) => item != cards[i]);
                                            for (j = 0; j < carda.length; j++) {
                                                var num2 = num1 - carda[j].number * 2;
                                                if (num2 == event.num && !show.length) {
                                                    var ss = cards;
                                                    for (s = 0; s < ss.length; s++) {
                                                        var minus = [cards[i], carda[j]];
                                                        if (minus.includes(ss[s])) {
                                                            if (show.length) show.push('-');
                                                            else if (!neg) var neg = 1;
                                                            show.push(ss[s]);
                                                        } else {
                                                            if (show.length && !neg) show.unshift('+');
                                                            if (neg) {
                                                                show.unshift('-');
                                                                neg--;
                                                            }
                                                            show.unshift(ss[s]);
                                                        }
                                                    }
                                                }
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                for (k = 0; k < cardb.length; k++) {
                                                    var num3 = num2 - cardb[k].number * 2;
                                                    if (num3 == event.num && !show.length) {
                                                        var ss = cards;
                                                        for (s = 0; s < ss.length; s++) {
                                                            var minus = [cards[i], carda[j], cardb[k]];
                                                            if (minus.includes(ss[s])) {
                                                                if (show.length) show.push('-');
                                                                else if (!neg) var neg = 1;
                                                                show.push(ss[s]);
                                                            } else {
                                                                if (show.length && !neg) show.unshift('+');
                                                                if (neg) {
                                                                    show.unshift('-');
                                                                    neg--;
                                                                }
                                                                show.unshift(ss[s]);
                                                            }
                                                        }
                                                    }
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var num4 = num3 - cardc[l].number * 2;
                                                        if (num4 == event.num && !show.length) {
                                                            var ss = cards;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [cards[i], carda[j], cardb[k], cardc[l]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                        var cardd = cardc.filter((item) => item != cardc[l]);
                                                        for (m = 0; m < cardd.length; m++) {
                                                            var num5 = num4 - cardd[m].number * 2;
                                                            if (num5 == event.num && !show.length) {
                                                                var ss = cards;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m]];
                                                                    if (minus.includes(ss[s])) {
                                                                        if (show.length) show.push('-');
                                                                        else if (!neg) var neg = 1;
                                                                        show.push(ss[s]);
                                                                    } else {
                                                                        if (show.length && !neg) show.unshift('+');
                                                                        if (neg) {
                                                                            show.unshift('-');
                                                                            neg--;
                                                                        }
                                                                        show.unshift(ss[s]);
                                                                    }
                                                                }
                                                            }
                                                            var carde = cardd.filter((item) => item != cardd[m]);
                                                            for (n = 0; n < carde.length; n++) {
                                                                var num6 = num5 - carde[n].number * 2;
                                                                if (num6 == event.num && !show.length) {
                                                                    var ss = cards;
                                                                    for (s = 0; s < ss.length; s++) {
                                                                        var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                        if (minus.includes(ss[s])) {
                                                                            if (show.length) show.push('-');
                                                                            else if (!neg) var neg = 1;
                                                                            show.push(ss[s]);
                                                                        } else {
                                                                            if (show.length && !neg) show.unshift('+');
                                                                            if (neg) {
                                                                                show.unshift('-');
                                                                                neg--;
                                                                            }
                                                                            show.unshift(ss[s]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 6');
                                        var cards = event.cards;
                                        var show = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            var carda = cards.filter((item) => item != cards[i]);
                                            var num = carda[0].number + carda[1].number + carda[2].number + carda[3].number + carda[4].number + carda[5].number;
                                            if (num == event.num && !show.length) {
                                                var ss = carda;
                                                for (s = 0; s < ss.length; s++) {
                                                    if (show.length) show.unshift('+');
                                                    show.unshift(ss[s]);
                                                }
                                            }
                                            for (j = 0; j < carda.length; j++) {
                                                var num1 = num - carda[j].number * 2;
                                                if (num1 == event.num && !show.length) {
                                                    var ss = carda;
                                                    for (s = 0; s < ss.length; s++) {
                                                        var minus = [carda[j]];
                                                        if (minus.includes(ss[s])) {
                                                            if (show.length) show.push('-');
                                                            else if (!neg) var neg = 1;
                                                            show.push(ss[s]);
                                                        } else {
                                                            if (show.length && !neg) show.unshift('+');
                                                            if (neg) {
                                                                show.unshift('-');
                                                                neg--;
                                                            }
                                                            show.unshift(ss[s]);
                                                        }
                                                    }
                                                }
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                for (k = 0; k < cardb.length; k++) {
                                                    var num2 = num1 - cardb[k].number * 2;
                                                    if (num2 == event.num && !show.length) {
                                                        var ss = carda;
                                                        for (s = 0; s < ss.length; s++) {
                                                            var minus = [carda[j], cardb[k]];
                                                            if (minus.includes(ss[s])) {
                                                                if (show.length) show.push('-');
                                                                else if (!neg) var neg = 1;
                                                                show.push(ss[s]);
                                                            } else {
                                                                if (show.length && !neg) show.unshift('+');
                                                                if (neg) {
                                                                    show.unshift('-');
                                                                    neg--;
                                                                }
                                                                show.unshift(ss[s]);
                                                            }
                                                        }
                                                    }
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var num3 = num2 - cardc[l].number * 2;
                                                        if (num3 == event.num && !show.length) {
                                                            var ss = carda;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [carda[j], cardb[k], cardc[l]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    var cardd = cardc.filter((item) => item != cardc[l]);
                                                    for (m = 0; m < cardd.length; m++) {
                                                        var num4 = num3 - cardd[m].number * 2;
                                                        if (num4 == event.num && !show.length) {
                                                            var ss = carda;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                        var carde = cardd.filter((item) => item != cardd[m]);
                                                        for (n = 0; n < carde.length; n++) {
                                                            var num5 = num4 - carde[n].number * 2;
                                                            if (num5 == event.num && !show.length) {
                                                                var ss = carda;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                    if (minus.includes(ss[s])) {
                                                                        if (show.length) show.push('-');
                                                                        else if (!neg) var neg = 1;
                                                                        show.push(ss[s]);
                                                                    } else {
                                                                        if (show.length && !neg) show.unshift('+');
                                                                        if (neg) {
                                                                            show.unshift('-');
                                                                            neg--;
                                                                        }
                                                                        show.unshift(ss[s]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 7');
                                        var cards = event.cards;
                                        var show = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            var carda = cards.filter((item) => item != cards[i]);
                                            for (j = 0; j < carda.length; j++) {
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                var num = cardb[0].number + cardb[1].number + cardb[2].number + cardb[3].number + cardb[4].number;
                                                if (num == event.num && !show.length) {
                                                    var ss = cardb;
                                                    for (s = 0; s < ss.length; s++) {
                                                        if (show.length) show.unshift('+');
                                                        show.unshift(ss[s]);
                                                    }
                                                }
                                                for (k = 0; k < cardb.length; k++) {
                                                    var num1 = num - cardb[k].number * 2;
                                                    if (num1 == event.num && !show.length) {
                                                        var ss = cardb;
                                                        for (s = 0; s < ss.length; s++) {
                                                            var minus = [cardb[k]];
                                                            if (minus.includes(ss[s])) {
                                                                if (show.length) show.push('-');
                                                                else if (!neg) var neg = 1;
                                                                show.push(ss[s]);
                                                            } else {
                                                                if (show.length && !neg) show.unshift('+');
                                                                if (neg) {
                                                                    show.unshift('-');
                                                                    neg--;
                                                                }
                                                                show.unshift(ss[s]);
                                                            }
                                                        }
                                                    }
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var num2 = num1 - cardc[l].number * 2;
                                                        if (num2 == event.num && !show.length) {
                                                            var ss = cardb;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [cardb[k], cardc[l]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                        var cardd = cardc.filter((item) => item != cardc[l]);
                                                        for (m = 0; m < cardd.length; m++) {
                                                            var num3 = num2 - cardd[m].number * 2;
                                                            if (num3 == event.num && !show.length) {
                                                                var ss = cardb;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m]];
                                                                    if (minus.includes(ss[s])) {
                                                                        if (show.length) show.push('-');
                                                                        else if (!neg) var neg = 1;
                                                                        show.push(ss[s]);
                                                                    } else {
                                                                        if (show.length && !neg) show.unshift('+');
                                                                        if (neg) {
                                                                            show.unshift('-');
                                                                            neg--;
                                                                        }
                                                                        show.unshift(ss[s]);
                                                                    }
                                                                }
                                                            }
                                                            var carde = cardd.filter((item) => item != cardd[m]);
                                                            for (n = 0; n < carde.length; n++) {
                                                                var num4 = num3 - carde[n].number * 2;
                                                                if (num4 == event.num && !show.length) {
                                                                    var ss = cardb;
                                                                    for (s = 0; s < ss.length; s++) {
                                                                        var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                        if (minus.includes(ss[s])) {
                                                                            if (show.length) show.push('-');
                                                                            else if (!neg) var neg = 1;
                                                                            show.push(ss[s]);
                                                                        } else {
                                                                            if (show.length && !neg) show.unshift('+');
                                                                            if (neg) {
                                                                                show.unshift('-');
                                                                                neg--;
                                                                            }
                                                                            show.unshift(ss[s]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 8');
                                        var cards = event.cards;
                                        var show = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            var carda = cards.filter((item) => item != cards[i]);
                                            for (j = 0; j < carda.length; j++) {
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                for (k = 0; k < cardb.length; k++) {
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    var num = cardc[0].number + cardc[1].number + cardc[2].number + cardc[3].number;
                                                    if (num == event.num && !show.length) {
                                                        var ss = cardc;
                                                        for (s = 0; s < ss.length; s++) {
                                                            if (show.length) show.unshift('+');
                                                            show.unshift(ss[s]);
                                                        }
                                                    }
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var num1 = num - cardc[l].number * 2;
                                                        if (num1 == event.num && !show.length) {
                                                            var ss = cardc;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [cardc[l]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                    }
                                                    var cardd = cardc.filter((item) => item != cardc[l]);
                                                    for (m = 0; m < cardd.length; m++) {
                                                        var num2 = num1 - cardd[m].number * 2;
                                                        if (num2 == event.num && !show.length) {
                                                            var ss = cardc;
                                                            for (s = 0; s < ss.length; s++) {
                                                                var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m]];
                                                                if (minus.includes(ss[s])) {
                                                                    if (show.length) show.push('-');
                                                                    else if (!neg) var neg = 1;
                                                                    show.push(ss[s]);
                                                                } else {
                                                                    if (show.length && !neg) show.unshift('+');
                                                                    if (neg) {
                                                                        show.unshift('-');
                                                                        neg--;
                                                                    }
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                        }
                                                        var carde = cardd.filter((item) => item != cardd[m]);
                                                        for (n = 0; n < carde.length; n++) {
                                                            var num3 = num2 - carde[n].number * 2;
                                                            if (num3 == event.num && !show.length) {
                                                                var ss = cardc;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                    if (minus.includes(ss[s])) {
                                                                        if (show.length) show.push('-');
                                                                        else if (!neg) var neg = 1;
                                                                        show.push(ss[s]);
                                                                    } else {
                                                                        if (show.length && !neg) show.unshift('+');
                                                                        if (neg) {
                                                                            show.unshift('-');
                                                                            neg--;
                                                                        }
                                                                        show.unshift(ss[s]);
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 9');
                                        var cards = event.cards;
                                        var show = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            var carda = cards.filter((item) => item != cards[i]);
                                            for (j = 0; j < carda.length; j++) {
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                for (k = 0; k < cardb.length; k++) {
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var cardd = cardc.filter((item) => item != cardc[l]);
                                                        var num = cardd[0].number + cardd[1].number + cardd[2].number;
                                                        if (num == event.num && !show.length) {
                                                            var ss = cardd;
                                                            for (s = 0; s < ss.length; s++) {
                                                                if (show.length) show.unshift('+');
                                                                show.unshift(ss[s]);
                                                            }
                                                        }
                                                        for (m = 0; m < cardd.length; m++) {
                                                            var num1 = num - cardd[m].number * 2;
                                                            if (num1 == event.num && !show.length) {
                                                                var ss = cardd;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m]];
                                                                    if (minus.includes(ss[s])) {
                                                                        if (show.length) show.push('-');
                                                                        else if (!neg) var neg = 1;
                                                                        show.push(ss[s]);
                                                                    } else {
                                                                        if (show.length && !neg) show.unshift('+');
                                                                        if (neg) {
                                                                            show.unshift('-');
                                                                            neg--;
                                                                        }
                                                                        show.unshift(ss[s]);
                                                                    }
                                                                }
                                                            }
                                                            var carde = cardd.filter((item) => item != cardd[m]);
                                                            for (n = 0; n < carde.length; n++) {
                                                                var num2 = num1 - carde[n].number * 2;
                                                                if (num2 == event.num && !show.length) {
                                                                    var ss = cardd;
                                                                    for (s = 0; s < ss.length; s++) {
                                                                        var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                        if (minus.includes(ss[s])) {
                                                                            if (show.length) show.push('-');
                                                                            else if (!neg) var neg = 1;
                                                                            show.push(ss[s]);
                                                                        } else {
                                                                            if (show.length && !neg) show.unshift('+');
                                                                            if (neg) {
                                                                                show.unshift('-');
                                                                                neg--;
                                                                            }
                                                                            show.unshift(ss[s]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 10');
                                        var cards = event.cards;
                                        var show = [];
                                        for (var i = 0; i < cards.length; i++) {
                                            var carda = cards.filter((item) => item != cards[i]);
                                            for (j = 0; j < carda.length; j++) {
                                                var cardb = carda.filter((item) => item != carda[j]);
                                                for (k = 0; k < cardb.length; k++) {
                                                    var cardc = cardb.filter((item) => item != cardb[k]);
                                                    for (l = 0; l < cardc.length; l++) {
                                                        var cardd = cardc.filter((item) => item != cardc[l]);
                                                        for (m = 0; m < cardd.length; m++) {
                                                            var carde = cardd.filter((item) => item != cardd[m]);
                                                            var num = carde[0].number + carde[1].number;
                                                            if (num == event.num && !show.length) {
                                                                var ss = carde;
                                                                for (s = 0; s < ss.length; s++) {
                                                                    if (show.length) show.unshift('+');
                                                                    show.unshift(ss[s]);
                                                                }
                                                            }
                                                            for (n = 0; n < carde.length; n++) {
                                                                var num1 = num - carde[n].number * 2;
                                                                if (num1 == event.num && !show.length) {
                                                                    var ss = carde;
                                                                    for (s = 0; s < ss.length; s++) {
                                                                        var minus = [cards[i], carda[j], cardb[k], cardc[l], cardd[m], carde[n]];
                                                                        if (minus.includes(ss[s])) {
                                                                            if (show.length) show.push('-');
                                                                            else if (!neg) var neg = 1;
                                                                            show.push(ss[s]);
                                                                        } else {
                                                                            if (show.length && !neg) show.unshift('+');
                                                                            if (neg) {
                                                                                show.unshift('-');
                                                                                neg--;
                                                                            }
                                                                            show.unshift(ss[s]);
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        if (show.length) {
                                            event.show = show;
                                            event.goto(12);
                                        }
                                        ('step 11');
                                        player.popup('天机不可泄露');
                                        game.log(player, '天机不可泄露(', event.card, ')');
                                        if (trigger.player.hasSkill('tgtt_jyqzqifan_yan') && ui.cardPile.childElementCount > 7) event.goto(4);
                                        else event.finish();
                                        ('step 12');
                                        var show = event.show;
                                        var cards = [];
                                        var test = '';
                                        for (var i = 0; i < show.length; i++) {
                                            if (show[i] != '-' && show[i] != '+') {
                                                cards.push(show[i]);
                                                test += show[i].number;
                                            } else test += show[i];
                                        }
                                        test += '=' + event.num;
                                        player.popup('成功窥视天机');
                                        game.log(player, '以', get.cnNumber(cards.length), '张牌成功窥视天机:', test, '(', event.card, ')');
                                        player.showCards(cards, get.translation(player) + '成功窥视天机:' + test);
                                        trigger.player.gain(cards, 'gain2');
                                    },
                                },
                            },
                        },
                        tgtt_fsbwtongtian: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            _priority: 90,
                            derivation: ['tgtt_fsbwtongtianzhiri', 'tgtt_fsbwtongtiankuangfeng', 'tgtt_fsbwtongtianminglei', 'tgtt_fsbwtongtianbaoyu', 'tgtt_fsbwtongtiantianwu', 'tgtt_fszgldawu'],
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    return 0.1;
                                });
                                ('step 1');
                                var suit = result.suit;
                                var xxx = 'tgtt_fsbwtongtian';
                                var skills = ['minglei', 'zhiri', 'baoyu', 'kuangfeng', 'tianwu'];
                                var genggai = 'tianwu';
                                if (suit == 'spade' && !_status[xxx + 'minglei']) genggai = 'minglei';
                                if (suit == 'heart' && !_status[xxx + 'zhiri']) genggai = 'zhiri';
                                if (suit == 'club' && !_status[xxx + 'baoyu']) genggai = 'baoyu';
                                if (suit == 'diamond' && !_status[xxx + 'kuangfeng']) genggai = 'kuangfeng';
                                if (suit == 'none') genggai = 'tianwu';
                                for (var i of skills) if (_status[xxx + i]) _status[xxx + i] = false;
                                player.popup(get.translation(xxx + genggai));
                                player.addTempSkill(xxx + genggai, { global: 'roundStart' });
                                if (!_status[xxx + genggai]) _status[xxx + genggai] = true;
                                player.gain(result.card, 'log', 'gain2');
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/' + xxx + genggai + '_bg.gif');
                                game.log(player, '将环境更改为', "#y<span style='text-decoration: underline'>" + get.translation(xxx + genggai) + '</span>');
                                game.log(player, '获得了技能【', xxx + genggai, '】');
                            },
                            group: ['tgtt_fsbwtongtian_gai'],
                            subSkill: {
                                gai: {
                                    usable: 1,
                                    trigger: {
                                        global: 'judgeBefore',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    check(event, player) {
                                        return true;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(4);
                                        player.recover();
                                        player.changeHujia();
                                        ('step 1');
                                        if (player.countCards('he') > 0)
                                            player.chooseCard(true, 1, 'he', '【通天】:将一张牌置于牌堆顶').set('ai', function (card) {
                                                var player = _status.event.player;
                                                var trigger = _status.event.parent._trigger;
                                                var attitude = get.attitude(player, trigger.player);
                                                var result = trigger.judge(card);
                                                if (attitude > 0) return result - get.value(card) / 2;
                                                else return -result - get.value(card) / 2;
                                            });
                                        ('step 2');
                                        if (result.bool && result.cards.length) {
                                            var card1 = result.cards[0];
                                            player.lose(card1, ui.cardPile);
                                            player.update();
                                            player.$throw(1, 1000);
                                            card1.fix();
                                            ui.cardPile.insertBefore(card1, ui.cardPile.firstChild);
                                            game.updateRoundNumber();
                                            game.log(player, '将一张牌置于牌堆顶');
                                        }
                                        event._result = { bool: false };
                                        ('step 3');
                                        if (player.countCards('he') > 0)
                                            player.chooseCard(true, 1, 'he', '【通天】:将一张牌置于牌堆底').set('ai', function (card) {
                                                return _status.event.player.getUseValue(card);
                                            });
                                        ('step 4');
                                        if (result.bool && result.cards.length) {
                                            var card2 = result.cards[0];
                                            player.lose(card2, ui.cardPile);
                                            player.update();
                                            player.$throw(1, 1000);
                                            card2.fix();
                                            ui.cardPile.appendChild(card2);
                                            game.updateRoundNumber();
                                            game.log(player, '将一张牌置于牌堆底');
                                        }
                                        ('step 5');
                                    },
                                    ai: {
                                        threaten: 1,
                                        rejudge: true,
                                        tag: {
                                            rejudge: 1,
                                        },
                                    },
                                },
                            },
                            _priority: 9000,
                        },
                        tgtt_fsbwtongtiankuangfeng: {
                            firstDo: true,
                            forced: true,
                            _priority: 100,
                            forceDie: true,
                            charlotte: true,
                            TaiguSkill: true,
                            trigger: {
                                global: ['damageBegin3', 'phaseDiscardBegin'],
                            },
                            filter(event, player, name) {
                                if (!_status.tgtt_fsbwtongtiankuangfeng) return false;
                                if (event.player == player) return false;
                                if (name == 'phaseDiscardBegin') return player.needsToDiscard();
                                else return event.nature && event.nature == 'fire';
                            },
                            content() {
                                'step 0';
                                if (event.triggername == 'phaseDiscardBegin') {
                                    var shoupai = player.getCards('h');
                                    player.discard(shoupai.randomGets(player.countCards('h') - player.getHandcardLimit()));
                                    event.finish();
                                } else {
                                    player.judge(function (card) {
                                        if (card.suit == 'diamond') return -2;
                                        return 0;
                                    }).judge2 = function (result) {
                                        return result.suit == 'diamond' ? true : false;
                                    };
                                }
                                ('step 1');
                                var suit = result.suit;
                                if (suit == 'diamond') {
                                    trigger.num++;
                                } else {
                                    player.draw();
                                    player.changeHujia();
                                }
                            },
                            group: 'tgtt_fsbwtongtiankuangfeng_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    _priority: 100,
                                    forceDie: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (event.nature == 'fire' && event.player != player) return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'fireDamage')) return 2;
                                            },
                                        },
                                    },
                                },
                            },
                            _priority: 1,
                        },
                        tgtt_fsbwtongtianbaoyu: {
                            firstDo: true,
                            forced: true,
                            _priority: 100,
                            forceDie: true,
                            trigger: {
                                global: 'damageBegin3',
                            },
                            filter(event, player) {
                                if (!_status.tgtt_fsbwtongtianbaoyu) return false;
                                if (event.player == player) return false;
                                return event.nature && event.nature == 'thunder';
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'club') return -2;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.suit == 'club' ? true : false;
                                };
                                ('step 1');
                                var suit = result.suit;
                                if (suit == 'club') {
                                    trigger.num++;
                                } else {
                                    player.draw();
                                    player.recover();
                                }
                            },
                            global: 'tgtt_fsbwtongtianbaoyu_jian',
                            group: 'tgtt_fsbwtongtianbaoyu_damage',
                            subSkill: {
                                damage: {
                                    trigger: {
                                        global: 'damageBegin3',
                                    },
                                    firstDo: true,
                                    forced: true,
                                    _priority: 100,
                                    forceDie: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (event.nature == 'thunder' && event.player != player) return true;
                                        return false;
                                    },
                                    content() {
                                        trigger.num++;
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target) {
                                                if (get.tag(card, 'thunderDamage')) return 2;
                                            },
                                        },
                                    },
                                },
                                jian: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    mod: {
                                        maxHandcard(player, num) {
                                            if (
                                                game.countPlayer(function (current) {
                                                    return _status.tgtt_fsbwtongtianbaoyu && !player.hasSkill('tgtt_fsbwtongtian');
                                                }) > 0
                                            )
                                                return num - (player.countCards('e') + 1) * 2;
                                        },
                                    },
                                },
                            },
                            _priority: 1,
                        },
                        tgtt_fsbwtongtianzhiri: {
                            firstDo: true,
                            forced: true,
                            _priority: 100,
                            forceDie: true,
                            charlotte: true,
                            TaiguSkill: true,
                            trigger: {
                                global: ['phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                            },
                            filter(event, player) {
                                return _status.tgtt_fsbwtongtianzhiri && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'heart') return -2;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.suit == 'heart' ? true : false;
                                };
                                ('step 1');
                                var suit = result.suit;
                                if (suit == 'heart') {
                                    trigger.player.damage(3, 'fire', 'nocard', 'nosource');
                                } else {
                                    player.draw();
                                    player.recover();
                                }
                            },
                            _priority: 1,
                        },
                        tgtt_fsbwtongtianminglei: {
                            firstDo: true,
                            forced: true,
                            _priority: 100,
                            forceDie: true,
                            charlotte: true,
                            TaiguSkill: true,
                            trigger: {
                                global: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin'],
                            },
                            filter(event, player) {
                                return _status.tgtt_fsbwtongtianminglei && event.player != player;
                            },
                            content() {
                                'step 0';
                                player.judge(function (card) {
                                    if (card.suit == 'spade') return -4;
                                    return 0;
                                }).judge2 = function (result) {
                                    return result.suit == 'spade' ? true : false;
                                };
                                ('step 1');
                                var suit = result.suit;
                                if (suit == 'spade') {
                                    trigger.player.damage(3, 'thunder', 'nocard', 'nosource');
                                } else {
                                    player.draw();
                                    player.changeHujia();
                                }
                            },
                            _priority: 1,
                        },
                        tgtt_fsbwtongtiantianwu: {
                            forced: true,
                            forceDie: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            charlotte: true,
                            TaiguSkill: true,
                            _priority: 9980,
                            filter(event, player) {
                                return _status.tgtt_fsbwtongtiantianwu;
                            },
                            content() {
                                player.addTempSkill('tgtt_fszgldawu', { player: 'phaseBegin' });
                                game.log(player, '获得了<大雾>效果');
                            },
                            global: 'tgtt_fsbwtongtiantianwu_xian',
                            subSkill: {
                                xian: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                    mod: {
                                        playerEnabled(card, player, target) {
                                            if (
                                                game.countPlayer(function (current) {
                                                    return _status.tgtt_fsbwtongtiantianwu && get.distance(player, target) > 1 && !player.hasSkill('tgtt_fsbwtongtian');
                                                }) > 0
                                            )
                                                return false;
                                        },
                                    },
                                },
                            },
                            _priority: 998000,
                        },
                        tgtt_fsbwtianjijichizhe: {
                            mod: {
                                targetInRange(card, player, target) {
                                    if (card.name == 'sha' && typeof card.number == 'number') {
                                        if (get.distance(player, target) <= card.number) return true;
                                    }
                                },
                                globalFrom(from, to, distance) {
                                    return distance - (from.maxHp + 1);
                                },
                                globalTo(from, to, distance) {
                                    return distance + (to.maxHp + 1);
                                },
                            },
                            TaiguSkill: true,
                            charlotte: true,
                            shaRelated: true,
                            trigger: {
                                player: 'useCardToTargeted',
                            },
                            logTarget: 'target',
                            check(event, player) {
                                return get.attitude(player, event.target) <= 0;
                            },
                            filter(event, player) {
                                if (!player.storage.tgtt_fsbwtianjijichizhe) player.storage.tgtt_fsbwtianjijichizhe = [];
                                if (player.storage.tgtt_fsbwtianjijichizhe.length <= 0) return false;
                                if (event.getParent(2).name != 'tgtt_fsbwcangqiongtunshi_ji') return false;
                                return get.tag(event.card, 'damage');
                            },
                            content() {
                                'step 0';
                                player.addTempSkill('tgtt_fsbwtianjijichizhe_yi');
                                trigger.parent.directHit.add(trigger.target);
                                ('step 1');
                                var cards = get.cards(Math.max(player.storage.tgtt_fsbwtianjijichizhe.length + 1, 0));
                                for (var i = cards.length - 1; i--; i >= 0) {
                                    ui.cardPile.insertBefore(cards[i], ui.cardPile.firstChild);
                                }
                                event.cards = cards;
                                player.showCards(cards, get.translation(player) + '对' + get.translation(trigger.target) + '发动了【天际疾驰者】');
                                ('step 2');
                                var id = trigger.target.playerid;
                                var map = trigger.parent.customArgs;
                                if (!map[id]) map[id] = {};
                                if (typeof map[id].extraDamage != 'number') {
                                    map[id].extraDamage = 0;
                                }
                                for (var i of cards) {
                                    if (player.storage.tgtt_fsbwtianjijichizhe.includes(i.suit)) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.tgtt_fsbwtianjijichizhe.includes(get.type(i, 'trick'))) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.tgtt_fsbwtianjijichizhe.includes(get.color(i))) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.tgtt_fsbwtianjijichizhe.includes(i.number)) {
                                        map[id].extraDamage++;
                                    }
                                    if (player.storage.tgtt_fsbwtianjijichizhe.includes(i.name)) {
                                        map[id].extraDamage++;
                                    }
                                }
                            },
                            marktext: '天际',
                            intro: {
                                content: '已记录: $',
                            },
                            ai: {
                                directHit_ai: true,
                            },
                            group: ['tgtt_fsbwtianjijichizhe_yong', 'tgtt_fsbwtianjijichizhe_zhi'],
                            subSkill: {
                                yong: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    audio: 'tgtt_fsbwtianjijichizhe',
                                    filter(event, player) {
                                        if (!player.storage.tgtt_fsbwtianjijichizhe) player.storage.tgtt_fsbwtianjijichizhe = [];
                                        if (!get.tag(event.card, 'damage')) return false;
                                        return (event.card.suit != undefined && event.card.suit != 'none') || (get.color(event.card) != undefined && get.color(event.card) != 'none') || (get.type(event.card, 'trick') != undefined && get.type(event.card, 'trick') != 'none');
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        if (!player.storage.tgtt_fsbwtianjijichizhe) player.storage.tgtt_fsbwtianjijichizhe = [];
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.suit)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.suit);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(get.color(trigger.card))) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(get.color(trigger.card));
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(get.type(trigger.card, 'trick'))) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(get.type(trigger.card, 'trick'));
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.number)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.number);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.name)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.name);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                    },
                                },
                                zhi: {
                                    trigger: {
                                        target: 'useCardToTarget',
                                    },
                                    audio: 'tgtt_fsbwtianjijichizhe',
                                    logTarget: 'player',
                                    filter(event, player) {
                                        if (!player.storage.tgtt_fsbwtianjijichizhe) player.storage.tgtt_fsbwtianjijichizhe = [];
                                        if (!get.tag(event.card, 'damage')) return false;
                                        return (event.card.suit != undefined && event.card.suit != 'none') || (get.color(event.card) != undefined && get.color(event.card) != 'none') || (get.type(event.card, 'trick') != undefined && get.type(event.card, 'trick') != 'none');
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        if (!player.storage.tgtt_fsbwtianjijichizhe) player.storage.tgtt_fsbwtianjijichizhe = [];
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.suit)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.suit);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(get.color(trigger.card))) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(get.color(trigger.card));
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(get.type(trigger.card, 'trick'))) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(get.type(trigger.card, 'trick'));
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.number)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.number);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                        if (!player.storage.tgtt_fsbwtianjijichizhe.includes(trigger.card.name)) {
                                            player.storage.tgtt_fsbwtianjijichizhe.push(trigger.card.name);
                                            player.storage.tgtt_fsbwtianjijichizhe.sort();
                                            player.markSkill('tgtt_fsbwtianjijichizhe');
                                        }
                                    },
                                },
                                yi: {
                                    trigger: {
                                        player: 'useCardAfter',
                                    },
                                    audio: 'tgtt_fsbwtianjijichizhe',
                                    filter(event, player) {
                                        return get.tag(event.card, 'damage');
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        delete player.storage.tgtt_fsbwtianjijichizhe;
                                        player.unmarkSkill('tgtt_fsbwtianjijichizhe');
                                        player.removeSkill('tgtt_fsbwtianjijichizhe_yi');
                                    },
                                },
                            },
                        },
                        tgtt_fsbwcangqiongtunshi: {
                            enable: 'phaseUse',
                            usable: 1,
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            selectTarget: -1,
                            multitarget: true,
                            multiline: true,
                            TaiguSkill: true,
                            charlotte: true,
                            content() {
                                'step 0';
                                event.current = player.next;
                                event.currented = [];
                                ('step 1');
                                event.currented.push(event.current);
                                event.current.addTempClass('target');
                                event.current.addTempSkill('tgtt_srtschuanjia');
                                ('step 2');
                                event.current.damage();
                                ('step 3');
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.includes(event.current)) {
                                    event.goto(1);
                                }
                            },
                            ai: {
                                order: 1,
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
                            group: ['tgtt_fsbwcangqiongtunshi_shou', 'tgtt_fsbwcangqiongtunshi_ji', 'tgtt_fsbwcangqiongtunshi_xiao'],
                            subSkill: {
                                shou: {
                                    trigger: {
                                        player: ['phaseZhunbeiBegin', 'phaseJudgeBegin', 'phaseDrawBegin', 'phaseUseBegin', 'phaseDiscardBegin', 'phaseJieshuBegin'],
                                    },
                                    _priority: 9,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        if (Math.random() <= 0.8) player.changeHujia();
                                        if (player.hp < player.maxHp) player.recover();
                                        if (player.countCards('h') <= 8) player.draw();
                                    },
                                    _priority: 90,
                                },
                                ji: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCardToTarget',
                                    },
                                    filter(event, player) {
                                        return !event.card.tgtt_fsbwcangqiongtunshi_ji && event.targets.length == 1;
                                    },
                                    forced: true,
                                    content() {
                                        'step 0';
                                        str = '视为对' + get.translation(trigger.targets[0]) + '使用另一种牌名的即时牌,';
                                        if (['basic', 'trick'].includes(get.type(trigger.card))) str += '或视为对一名其他角色使用一张' + get.translation(trigger.card.name) + ',';
                                        str += '从' + get.translation(trigger.card) + '的目标中移去' + get.translation(trigger.targets[0]);
                                        player
                                            .chooseTarget(get.prompt('tgtt_fsbwcangqiongtunshi_ji'), str, function (card, player, target) {
                                                if (['basic', 'trick'].includes(get.type(trigger.card))) return true;
                                                return trigger.targets.includes(target);
                                            })
                                            .set('ai', function (target) {
                                                var player = _status.event.player;
                                                if (trigger.card.name == 'tao' || trigger.card.name == 'wuzhong') return false;
                                                if (trigger.target != target) return target != player;
                                                return Math.random();
                                            });
                                        ('step 1');
                                        if (result.bool) {
                                            if (!trigger.targets.includes(result.targets[0])) {
                                                player.useCard(result.targets[0], { name: trigger.card.name }).card.tgtt_fsbwcangqiongtunshi_ji = true;
                                                event.goto(3);
                                            } else {
                                                var list = [];
                                                var List1 = get.typeCard('basic');
                                                var List2 = get.typeCard('trick');
                                                for (var i = 0; i < List1.length; i++) {
                                                    var name = List1[i];
                                                    if (name == trigger.card.name) continue;
                                                    if (!lib.filter.targetEnabled({ name: name }, player, trigger.targets[0])) continue;
                                                    if (name == 'sha') {
                                                        list.push(['基本', '', 'sha']);
                                                        for (var j of Array.from(lib.nature.keys())) {
                                                            //QQQ
                                                            list.push(['基本', '', 'sha', j]);
                                                        }
                                                    } else list.push(['基本', '', name]);
                                                }
                                                for (var i = 0; i < List2.length; i++) {
                                                    var name = List2[i];
                                                    if (name == trigger.card.name) continue;
                                                    if (!lib.filter.targetEnabled({ name: name }, player, trigger.targets[0])) continue;
                                                    list.push(['锦囊', '', name]);
                                                }
                                                player.chooseButton([get.prompt('tgtt_fsbwcangqiongtunshi_ji'), '请选择对' + get.translation(trigger.targets[0]) + '使用的即时牌', [list, 'vcard']], true).set('ai', function (button) {
                                                    var att = get.attitude(player, trigger.targets[0]);
                                                    return get.effect(trigger.targets[0], { name: button.link[2] }, player, player);
                                                });
                                            }
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        if (result.bool) {
                                            player.useCard(trigger.targets[0], { name: result.links[0][2], nature: result.links[0][3] }).card.tgtt_fsbwcangqiongtunshi_ji = true;
                                        }
                                        ('step 3');
                                        trigger.parent.excluded.add(trigger.targets[0]);
                                        player.draw();
                                        player.recover();
                                    },
                                },
                                xiao: {
                                    trigger: {
                                        player: ['phaseBegin'],
                                    },
                                    _priority: 9,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current != player) {
                                                current.addTempSkill('tgtt_srtspofang');
                                                current.storage.tgtt_srtspofang.add(trigger.card);
                                                current.markSkill('tgtt_srtspofang');
                                            }
                                        });
                                    },
                                },
                            },
                            init: (player, skill) => (player.storage[skill] = false),
                        },
                        tgtt_fsbwjufengshuangzi: {
                            trigger: {
                                global: 'gameStart',
                            },
                            forced: true,
                            nosub: true,
                            TaiguSkill: true,
                            charlotte: true,
                            derivation: ['tgtt_fsbwxxshufuzhe', 'tgtt_fsptlianhuan', 'tgtt_fsbwyjsguanchuanzhe', 'tgtt_fssmyyimie', 'tgtt_fsyidaozhan'],
                            filter(event, player) {
                                return !player.storage.tgtt_fsbwjufengshuangzi_start;
                            },
                            group: ['tgtt_fsbwjufengshuangzi_xixian', 'tgtt_fsbwjufengshuangzi_yejushi', 'tgtt_fsbwjufengshuangzi_swap', 'tgtt_fsbwjufengshuangzi_damage', 'tgtt_fsbwjufengshuangzi_gain'],
                            content() {
                                player.storage.tgtt_fsbwjufengshuangzi_start = true;
                                player.storage.tgtt_fsbwjufengshuangzi_yejushi = player.addSubPlayer({
                                    name: 'tgtt_bawuyejushi',
                                    skills: ['tgtt_fsbwjufengshuangzi_xixian', 'tgtt_fsbwjufengshuangzi_swap', 'tgtt_srgtslykabalazhili', 'tgtt_fsbwtongtian', 'tgtt_fsbwyjsguanchuanzhe', 'tgtt_fsbwbafan'],
                                    hp: 4,
                                    maxHp: 4,
                                    sex: 'female',
                                    group: 'taigu',
                                    image: 'ext:圣歼之战/image/tgtt_bawuyejushi.jpg',
                                    title: '<span class=yellowtext>狂战士</span>',
                                    hs: get.cards(4),
                                    skill: 'tgtt_fsbwjufengshuangzi',
                                    intro: '你的本体回合结束后,切换至此随从并进行一个额外的回合;若你的上家与下家不同,在你的下家的准备阶段,切换至此随从',
                                    intro2: '当前回合结束后切换回本体',
                                    onremove(player) {
                                        delete player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                    },
                                });
                            },
                            subSkill: {
                                chosen: {},
                                xixiandist: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    mod: {
                                        globalFrom(from, to, distance) { },
                                        globalTo(from, to, distance) { },
                                    },
                                },
                                yejushidist: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    mod: {
                                        globalFrom(from, to, distance) { },
                                        globalTo(from, to, distance) { },
                                    },
                                },
                                swap: {
                                    trigger: {
                                        global: 'phaseBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    _priority: 20,
                                    content() {
                                        var next = player.next;
                                        var prev = player.previous;
                                        var xixian = player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                        var yejushi = player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                        if (prev == next || (trigger.player != next && trigger.player != prev)) {
                                            if (player.hasSkill('subplayer')) {
                                                player.exitSubPlayer();
                                            }
                                        } else if (prev == trigger.player && player.name != xixian && xixian) {
                                            if (!player.hasSkill('subplayer')) {
                                                player.callSubPlayer(xixian);
                                            } else {
                                                player.toggleSubPlayer(xixian);
                                            }
                                        } else if (next == trigger.player && player.name != yejushi && yejushi) {
                                            if (!player.hasSkill('subplayer')) {
                                                player.callSubPlayer(yejushi);
                                            } else {
                                                player.toggleSubPlayer(yejushi);
                                            }
                                        }
                                    },
                                    _priority: 2,
                                },
                                damage: {
                                    trigger: {
                                        player: 'damageEnd',
                                        source: 'damageSource',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return !player.storage.tgtt_fsbwjufengshuangzi_damage;
                                    },
                                    content() {
                                        player.storage.tgtt_fsbwjufengshuangzi_damage = true;
                                        player.storage.tgtt_fsbwjufengshuangzi_xixian = player.addSubPlayer({
                                            name: 'tgtt_bawuxixian',
                                            skills: ['tgtt_fsbwjufengshuangzi_middle', 'tgtt_fsbwjufengshuangzi_swap', 'tgtt_srgtslykabalazhili', 'tgtt_fsbwtongtian', 'tgtt_fsbwxxshufuzhe', 'tgtt_fsbwbafan'],
                                            hp: 4,
                                            maxHp: 4,
                                            sex: 'female',
                                            group: 'taigu',
                                            image: 'ext:圣歼之战/image/tgtt_bawuxixian.jpg',
                                            title: '<span class=yellowtext>狂战士</span>',
                                            hs: get.cards(4),
                                            skill: 'tgtt_fsbwjufengshuangzi',
                                            intro: '你的本体回合开始前,切换至此随从并进行一个额外的回合;若你的上家与下家不同,在你的上家的准备阶段,切换至此随从',
                                            intro2: '当前回合结束后切换回本体',
                                            onremove(player) {
                                                delete player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                            },
                                        });
                                        trigger.tgtt_fsbwjufengshuangzi = true;
                                    },
                                },
                                xixian: {
                                    trigger: {
                                        player: 'phaseBefore',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    _priority: 40,
                                    filter(event, player) {
                                        if (event.skill == 'tgtt_fsbwjufengshuangzi_middle') return false;
                                        if (event.skill == 'tgtt_fsbwjufengshuangzi_yejushi') return false;
                                        var xixian = player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                        if (player.hasSkill('subplayer')) {
                                            if (!xixian) return player.name == player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                            return player.storage.subplayer.skills.includes(xixian);
                                        } else {
                                            if (!xixian) return false;
                                            return player.hasSkill(xixian);
                                        }
                                    },
                                    content() {
                                        if (player.hasSkill('subplayer')) {
                                            var xixian = player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                            if (xixian && player.storage.subplayer.skills.includes(xixian)) {
                                                player.toggleSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_xixian);
                                            } else {
                                                player.exitSubPlayer();
                                            }
                                        } else {
                                            player.callSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_xixian);
                                        }
                                    },
                                    _priority: 4000,
                                },
                                middle: {
                                    trigger: {
                                        player: ['phaseAfter', 'phaseCancelled'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    _priority: -40,
                                    filter(event, player) {
                                        if (player.hasSkill('tgtt_fsbwjufengshuangzi_chosen')) return false;
                                        return true;
                                    },
                                    content() {
                                        player.exitSubPlayer();
                                        player.phase('nodelay');
                                        player.addTempSkill('tgtt_fsbwjufengshuangzi_chosen', 'phaseBegin');
                                    },
                                    _priority: -4000,
                                },
                                yejushi: {
                                    trigger: {
                                        player: ['phaseAfter', 'phaseCancelled'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    _priority: -40,
                                    filter(event, player) {
                                        if (player.hasSkill('tgtt_fsbwjufengshuangzi_chosen')) return false;
                                        if (player.hasSkill('subplayer')) return false;
                                        var yejushi = player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                        if (!yejushi) return false;
                                        return player.hasSkill(yejushi);
                                    },
                                    content() {
                                        player.callSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_yejushi);
                                        player.phase('nodelay');
                                        player.addTempSkill('tgtt_fsbwjufengshuangzi_chosen', ['phaseBegin', 'phaseCancelled']);
                                    },
                                    _priority: -4000,
                                },
                                end: {
                                    trigger: {
                                        player: ['phaseAfter', 'phaseCancelled'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    popup: false,
                                    _priority: -40,
                                    filter(event, player) {
                                        if (player.hasSkill('tgtt_fsbwjufengshuangzi_chosen')) return false;
                                        return true;
                                    },
                                    content() {
                                        if (player.hasSkill('subplayer')) {
                                            player.exitSubPlayer();
                                        }
                                    },
                                    content_old() {
                                        'step 0';
                                        var controls = ['本体'];
                                        var xixian = player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                        var yejushi = player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                        if (player.hasSkill('subplayer')) {
                                            if (player.storage.subplayer.skills.includes(xixian)) {
                                                controls.unshift('八舞夕弦');
                                            }
                                            if (player.storage.subplayer.skills.includes(yejushi)) {
                                                controls.push('八舞耶俱矢');
                                            }
                                        } else {
                                            if (player.hasSkill(xixian)) {
                                                controls.unshift('八舞夕弦');
                                            }
                                            if (player.hasSkill(yejushi)) {
                                                controls.push('八舞耶俱矢');
                                            }
                                        }
                                        if (controls.length > 1) {
                                            player
                                                .chooseControl(controls, function (event, player) {
                                                    return Math.floor(Math.random() * _status.event.num);
                                                })
                                                .set('prompt', '选择一个形态直到下一回合开始')
                                                .set('num', controls.length);
                                        } else {
                                            event.finish();
                                        }
                                        ('step 1');
                                        switch (result.control) {
                                            case '八舞夕弦': {
                                                if (!player.hasSkill('subplayer')) {
                                                    player.callSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_xixian);
                                                } else {
                                                    player.toggleSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_xixian);
                                                }
                                                break;
                                            }
                                            case '八舞耶俱矢': {
                                                if (!player.hasSkill('subplayer')) {
                                                    player.callSubPlayer(player.storage.tgtt_fsbwjufengshuangzi_yejushi);
                                                }
                                                break;
                                            }
                                            default: {
                                                if (player.hasSkill('subplayer')) {
                                                    player.exitSubPlayer();
                                                }
                                                break;
                                            }
                                        }
                                        player.addTempSkill('tgtt_fsbwjufengshuangzi_chosen', 'phaseBegin');
                                    },
                                    _priority: -4000,
                                },
                                gain: {
                                    trigger: {
                                        player: 'subPlayerDie',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        var xixian = player.storage.tgtt_fsbwjufengshuangzi_xixian;
                                        if (xixian && player.hasSkill(xixian)) return false;
                                        var yejushi = player.storage.tgtt_fsbwjufengshuangzi_yejushi;
                                        if (yejushi && player.hasSkill(yejushi)) return false;
                                        if (!player.storage.tgtt_fsbwjufengshuangzi_damage) return false;
                                        return true;
                                    },
                                    content() {
                                        player.addSkills('tgtt_fsbwxxshufuzhe');
                                        player.addSkills('tgtt_fsbwyjsguanchuanzhe');
                                    },
                                },
                            },
                        },
                        tgtt_fsbwxxshufuzhe: {
                            trigger: {
                                player: 'phaseBegin',
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            forced: true,
                            derivation: ['tgtt_fsptlianhuan'],
                            content() {
                                'step 0';
                                if (!player.storage.tgtt_fsptlianhuan) (player.storage.tgtt_fsptlianhuan = true), 'step 1';
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.addTempSkill('tgtt_srtsjingu');
                                        current.addTempSkill('tgtt_srtsfengyin');
                                    }
                                });
                            },
                            group: ['tgtt_fsptlianhuan', 'tgtt_fsptlianhuan_use', 'tgtt_fsptlianhuan_add', 'tgtt_fsptlianhuan_discard2'],
                        },
                        tgtt_fsbwyjsguanchuanzhe: {
                            TaiguSkill: true,
                            charlotte: true,
                            derivation: ['tgtt_fssmyyimie', 'tgtt_fsyidaozhan'],
                            trigger: {
                                source: 'damageBegin2',
                            },
                            forced: true,
                            logTarget: 'player',
                            content() {
                                var num = player.getDamagedHp() + 1;
                                trigger.num += num;
                            },
                            group: ['tgtt_fsbwyjsguanchuanzhe_gai', 'tgtt_fssmyyimie'],
                            subSkill: {
                                gai: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter: (event) => !event.nature,
                                    content() {
                                        trigger.nature = 'kami';
                                    },
                                },
                            },
                        },
                        tgtt_fsbwbafan: {
                            enable: 'phaseUse',
                            usable: 1,
                            TaiguSkill: true,
                            charlotte: true,
                            position: 'he',
                            complexCard: true,
                            filter(event, player) {
                                return player.countCards('he') >= 3;
                            },
                            filterCard(card, player, target) {
                                var num = card.number;
                                var ta = ui.selected.cards;
                                if (ta.length) {
                                    for (var i = 0; i < ta.length; i++) {
                                        if (num == ta[i].number) {
                                            return false;
                                        }
                                    }
                                }
                                if (ta.length == 2) {
                                    return ta[0].number + ta[1].number == 2 * num || ta[0].number + num == 2 * ta[1].number || num + ta[1].number == 2 * ta[0].number;
                                }
                                return true;
                            },
                            selectCard: 3,
                            check(card) {
                                return 20 - get.value(card);
                            },
                            filterTarget(card, player, target) {
                                var car = ui.selected.cards;
                                var ji = false;
                                var ou = false;
                                for (var i = 0; i < car.length; i++) {
                                    var numm = car[i].number;
                                    if (numm % 2 == 1 && ji == false) {
                                        ji = true;
                                    }
                                    if (numm % 2 == 0 && ou == false) {
                                        ou = true;
                                    }
                                }
                                if (ji == true && ou == true) {
                                    return true;
                                } else if (ji == true && ou == false) {
                                    return true;
                                } else if (ji == false && ou == true) {
                                    if (target.hp >= target.maxHp) return false;
                                    return true;
                                }
                            },
                            selectTarget(target, card, player) {
                                var car = ui.selected.cards;
                                var ji = false;
                                var ou = false;
                                for (var i = 0; i < car.length; i++) {
                                    var numm = car[i].number;
                                    if (numm % 2 == 1 && ji == false) {
                                        ji = true;
                                    }
                                    if (numm % 2 == 0 && ou == false) {
                                        ou = true;
                                    }
                                }
                                if (ji == true && ou == true) {
                                    return -1;
                                } else if (ji == true && ou == false) {
                                    return [1, 8];
                                } else if (ji == false && ou == true) {
                                    return [1, 8];
                                }
                            },
                            multitarget: true,
                            multiline: true,
                            content() {
                                'step 0';
                                var car = cards;
                                var ji = false;
                                var ou = false;
                                for (var i = 0; i < car.length; i++) {
                                    var numm = car[i].number;
                                    if (numm % 2 == 1 && ji == false) {
                                        ji = true;
                                    }
                                    if (numm % 2 == 0 && ou == false) {
                                        ou = true;
                                    }
                                }
                                event.ji = ji;
                                event.ou = ou;
                                if (ji == true && ou == true) {
                                    for (var i of targets) {
                                        i.discard(i.getCards('he'));
                                        i.loseHp();
                                    }
                                } else if (ji == true && ou == false) {
                                    for (var i of targets) {
                                        i.damage(1, player);
                                    }
                                } else if (ji == false && ou == true) {
                                    for (var i of targets) {
                                        i.changeHujia();
                                        i.recover();
                                    }
                                }
                                ('step 1');
                                var count = 0;
                                var ji = event.ji;
                                var ou = event.ou;
                                if (ji == true && ou == true) {
                                    for (var i of targets) {
                                        count = 8;
                                    }
                                } else if (ji == true && ou == false) {
                                    for (var i of targets) {
                                        if (i.hp == 1) count++;
                                    }
                                } else if (ji == false && ou == true) {
                                    for (var i of targets) {
                                        if (!i.isDamaged()) count++;
                                    }
                                }
                                if (count) {
                                    if (ji == true && ou == true) {
                                        player.draw(count);
                                    } else if (ji == true && ou == false) {
                                        player.draw(count + 1);
                                        player.changeHujia(count + 1);
                                    } else if (ji == false && ou == true) {
                                        player.draw(count + 1);
                                        player.recover(count + 1);
                                    }
                                }
                            },
                            ai: {
                                order: 11,
                                result: {
                                    target(player, target) {
                                        var car = ui.selected.cards;
                                        var ji = false;
                                        var ou = false;
                                        for (var i = 0; i < car.length; i++) {
                                            var numm = car[i].number;
                                            if (numm % 2 == 1 && ji == false) {
                                                ji = true;
                                            }
                                            if (numm % 2 == 0 && ou == false) {
                                                ou = true;
                                            }
                                        }
                                        if (ji == true && ou == true) {
                                            return -get.recoverEffect(target, player, player);
                                        } else if (ji == true && ou == false) {
                                            return get.damageEffect(target, player);
                                        } else if (ji == false && ou == true) {
                                            return get.recoverEffect(target, player, player);
                                        }
                                    },
                                },
                                threaten: 1,
                            },
                            group: ['tgtt_fsbwbafan_da'],
                            subSkill: {
                                da: {
                                    enable: 'phaseUse',
                                    usable: 1,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filterTarget(card, player, target) {
                                        return true;
                                    },
                                    filter(event, player) {
                                        return player.getHistory('custom', function (evt) {
                                            return evt.tgtt_fsbwbafan_da == true;
                                        });
                                    },
                                    content() {
                                        'step 0';
                                        player.getHistory('custom').push({ tgtt_fsbwbafan_da: true });
                                        player.storage.tgtt_fsbwbafan_da_a = 0;
                                        player.storage.tgtt_fsbwbafan_da_b = 0;
                                        player.storage.tgtt_fsbwbafan_da_c = 0;
                                        var num1 = Math.floor(Math.random() * (9 - 1 + 1)) + 9;
                                        var num2 = Math.floor(Math.random() * (9 - 1 + 1)) + 9;
                                        var num3 = Math.floor(Math.random() * (9 - 1 + 1)) + 9;
                                        var num4 = get.cnNumber(num1);
                                        var num5 = get.cnNumber(num2);
                                        var num6 = get.cnNumber(num3);
                                        if (num1 <= num2 && num1 <= num3) {
                                            player.storage.tgtt_fsbwbafan_da_a = num1;
                                            if (num2 <= num3) {
                                                player.storage.tgtt_fsbwbafan_da_b = num2;
                                                player.storage.tgtt_fsbwbafan_da_c = num3;
                                            } else {
                                                player.storage.tgtt_fsbwbafan_da_b = num3;
                                                player.storage.tgtt_fsbwbafan_da_c = num2;
                                            }
                                        } else {
                                            if (num2 <= num3) {
                                                player.storage.tgtt_fsbwbafan_da_a = num2;
                                                if (num1 <= num3) {
                                                    player.storage.tgtt_fsbwbafan_da_b = num1;
                                                    player.storage.tgtt_fsbwbafan_da_c = num3;
                                                } else {
                                                    player.storage.tgtt_fsbwbafan_da_b = num3;
                                                    player.storage.tgtt_fsbwbafan_da_c = num1;
                                                }
                                            } else {
                                                player.storage.tgtt_fsbwbafan_da_a = num3;
                                                if (num1 <= num2) {
                                                    player.storage.tgtt_fsbwbafan_da_b = num1;
                                                    player.storage.tgtt_fsbwbafan_da_c = num2;
                                                } else {
                                                    player.storage.tgtt_fsbwbafan_da_b = num2;
                                                    player.storage.tgtt_fsbwbafan_da_c = num1;
                                                }
                                            }
                                        }
                                        target
                                            .chooseControl('A', 'B', 'C', 'D')
                                            .set('prompt', '【八番】<br>' + get.translation(player) + ':今有长非一梃三端,其长分为' + get.tgttCnCapNumber(num4) + '寸、' + get.tgttCnCapNumber(num5) + '寸、' + get.tgttCnCapNumber(num6) + '寸,善子,此木以为何三角？')
                                            .set('displayIndex', false)
                                            .set('choiceList', ['A.锐角三角形', 'B.直角三角形', 'C.钝角三角形', 'D.不成三角形'])
                                            .set('ai', function () {
                                                var a = player.storage.tgtt_fsbwbafan_da_a;
                                                var b = player.storage.tgtt_fsbwbafan_da_b;
                                                var c = player.storage.tgtt_fsbwbafan_da_c;
                                                if (a + b <= c) return 'D';
                                                if (a * a + b * b > c * c) return 'A';
                                                if (a * a + b * b == c * c) return 'B';
                                                if (a * a + b * b < c * c) return 'C';
                                                return 'D';
                                            });
                                        ('step 1');
                                        if (result.control != 'cancel2') {
                                            game.log(target, '选择了', '#y' + result.control);
                                            var a = player.storage.tgtt_fsbwbafan_da_a;
                                            var b = player.storage.tgtt_fsbwbafan_da_b;
                                            var c = player.storage.tgtt_fsbwbafan_da_c;
                                            if (a + b <= c && result.control == 'D') event.goto(3);
                                            if (a + b > c && a * a + b * b > c * c && result.control == 'A') event.goto(3);
                                            if (a + b > c && a * a + b * b == c * c && result.control == 'B') event.goto(3);
                                            if (a + b > c && a * a + b * b < c * c && result.control == 'C') event.goto(3);
                                        }
                                        ('step 2');
                                        game.log(target, '回答错误❌');
                                        target.popup('回答错误');
                                        player.recover();
                                        target.damage('nocard');
                                        target.loseHp();
                                        target.discard(2);
                                        event.goto(6);
                                        ('step 3');
                                        game.log(target, '回答正确✅');
                                        target.popup('回答正确');
                                        target.recover();
                                        player.changeHujia();
                                        player.draw(4);
                                        ('step 4');
                                        player.chooseCard('he', true, 1, '选择交给' + get.translation(target) + '的一张牌');
                                        ('step 5');
                                        if (result.bool && result.cards && result.cards.length) target.gain(result.cards, player, 'giveAuto');
                                        ('step 6');
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            player: 1,
                                            target: 1.1,
                                        },
                                    },
                                },
                            },
                        },
                        tgtt_yxmjpojungeji: {
                            trigger: {
                                global: 'roundStart',
                            },
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            derivation: ['tgtt_yxmjyxjxq', 'tgtt_yxmjygzmq', 'tgtt_yxmjsdahq', 'tgtt_yxmjhhxzq', 'tgtt_yxmjmyjxq', 'tgtt_yxmjddzmq', 'tgtt_yxmjxdhxq', 'tgtt_yxmjkldykxq', 'tgtt_yxmjkldykxq_faq', 'tgtt_yxmjldsjjxq', 'tgtt_yxmjxiezouqu', 'tgtt_yxmjxingjinqu', 'tgtt_yxmjlunwuqu', 'tgtt_yxmjzhenhunqu'],
                            content() {
                                'step 0';
                                var op = ['tgtt_yxmjyxjxq', 'tgtt_yxmjygzmq', 'tgtt_yxmjsdahq', 'tgtt_yxmjhhxzq', 'tgtt_yxmjmyjxq', 'tgtt_yxmjddzmq', 'tgtt_yxmjxdhxq', 'tgtt_yxmjkldykxq', 'tgtt_yxmjldsjjxq'].randomGet();
                                player.addTempSkills(op, { player: 'tgtt_yxmjpojungejiBefore' });
                                player.say(['破军歌姬,启动!', '聆听吧,这优美的乐声!'].randomGet());
                                game.log(player, '演奏了【', op, '】');
                            },
                            global: 'tgtt_yxmjpojungeji_give',
                            subSkill: {
                                give: {
                                    enable: 'phaseUse',
                                    usable: 4,
                                    filter(event, player) {
                                        return (
                                            player.countCards('he') &&
                                            game.hasPlayer(function (current) {
                                                return current.hasSkill('tgtt_yxmjpojungeji');
                                            })
                                        );
                                    },
                                    filterTarget(card, player, target) {
                                        return target.hasSkill('tgtt_yxmjpojungeji');
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filterCard: true,
                                    discard: false,
                                    lose: false,
                                    check(card) {
                                        var player = _status.event.player;
                                        var suit = card.suit;
                                        var checkValue = {
                                            heart: -1,
                                            diamond: 0,
                                            spade: 0,
                                            club: 0,
                                        };
                                        var hs = player.countCards('he');
                                        for (var i = 0; i < hs.length; i++) {
                                            if (get.select(get.info(hs[i]).selectTarget) === 1) {
                                                var friends = player.getFriends(function (current) {
                                                    return current.countCards('he') > 1;
                                                });
                                                if (friends.length) checkValue.heart += 5;
                                            }
                                            if (get.tag(hs[i], 'damage')) {
                                                checkValue.diamond += hs[i].name == 'sha' ? 3 : 5;
                                            }
                                            if (get.color(hs[i]) == 'black') {
                                                if (get.type2(hs[i]) == 'trick') {
                                                    checkValue.spade += checkValue.spade ? 4.5 : 6;
                                                }
                                                if (player.hasUseTarget(hs[i], true, true)) {
                                                    checkValue.club += player.canUse(hs[i], player, true, true) ? 3 : 6;
                                                }
                                            }
                                        }
                                        return checkValue[suit] + 3 - 2 / Math.max(get.value(card), 1);
                                    },
                                    content() {
                                        'step 0';
                                        if (player == target) {
                                            player.showCards('破军歌姬', cards);
                                            event.goto(3);
                                        }
                                        ('step 1');
                                        target.gain(cards, player, 'giveAuto');
                                        var next = target.chooseCard('he');
                                        next.filterCard = function (cardx) {
                                            return cardx.suit == cards[0].suit;
                                        };
                                        next.ai = function (cardx) {
                                            var player1 = _status.event.player1;
                                            var player2 = _status.event.player2;
                                            if (get.attitude(player1, player2) <= 0) return 0;
                                            return 8 - get.value(cardx);
                                        };
                                        next.set('player1', target);
                                        next.set('player2', player);
                                        var tip1 = '还给' + get.translation(player) + '一张',
                                            tip2 = '';
                                        switch (cards[0]?.suit) {
                                            case 'heart': {
                                                tip1 += '<font color=red>♥️️</font>️牌令获得技能【协奏曲】';
                                                tip2 = '协奏曲:' + lib.translate.tgtt_yxmjxiezouqu_info;
                                                break;
                                            }
                                            case 'diamond': {
                                                tip1 += '<font color=red>♦️️</font>️牌令获得技能【行进曲】';
                                                tip2 = '行进曲:' + lib.translate.tgtt_yxmjxingjinqu_info;
                                                break;
                                            }
                                            case 'spade': {
                                                tip1 += '<font color=black>♠️️</font>️牌令获得技能【轮舞曲】';
                                                tip2 += '轮舞曲:' + lib.translate.tgtt_yxmjlunwuqu_info;
                                                break;
                                            }
                                            case 'club': {
                                                tip1 += '<font color=black>♣️️</font>️牌令获得技能【镇魂曲】';
                                                tip2 += '镇魂曲:' + lib.translate.tgtt_yxmjzhenhunqu_info;
                                                break;
                                            }
                                        }
                                        tip1 += ',或取消并令其摸一张牌,你摸一张牌,回复1点体力并获得1点护甲';
                                        next.prompt = tip1;
                                        next.prompt2 = tip2;
                                        ('step 2');
                                        if (!result.bool) {
                                            target.discard(cards);
                                            player.draw();
                                            target.draw();
                                            target.recover();
                                            target.changeHujia();
                                            event.finish();
                                        } else {
                                            player.gain(result.cards, target, 'giveAuto');
                                        }
                                        ('step 3');
                                        switch (cards[0]?.suit) {
                                            case 'heart': {
                                                player.addTempSkills('tgtt_yxmjxiezouqu');
                                                break;
                                            }
                                            case 'diamond': {
                                                player.addTempSkills('tgtt_yxmjxingjinqu');
                                                break;
                                            }
                                            case 'spade': {
                                                player.addTempSkills('tgtt_yxmjlunwuqu');
                                                break;
                                            }
                                            case 'club': {
                                                player.addTempSkills('tgtt_yxmjzhenhunqu');
                                                break;
                                            }
                                            default:
                                                game.log('什么鬼？');
                                        }
                                    },
                                    ai: {
                                        order: 10,
                                        result: {
                                            target(player, target) {
                                                if (player.attitudeTo(target) < 0) {
                                                    if (player.needsToDiscard()) return -1.5;
                                                }
                                                return 2;
                                            },
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjyxjxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/英雄交响曲.jpg');
                                lib.config.image_background = '英雄交响曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/英雄交响曲.mp3';
                                game.playBackgroundMusic();
                            },
                            marktext: '英',
                            intro: {
                                name: '英雄交响曲',
                                content: '致敬每一个英雄!',
                            },
                            enable: 'phaseUse',
                            usable: 3,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.recover();
                                ('step 1');
                                var list = [];
                                if (_status.characterlist) {
                                    list = _status.characterlist.slice();
                                } else if (_status.connectMode) {
                                    list = get.charactersOL();
                                } else {
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                }
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    list.remove(player.name);
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                }
                                event.list1 = list.randomGets(9);
                                ('step 2');
                                var skills = [],
                                    aiChoice = [];
                                for (var i = 0; i < event.list1.length; i++) {
                                    if (lib.character[event.list1[i]][3].length == 2 && !!aiChoice.length) {
                                        aiChoice = lib.character[event.list1[i]][3];
                                    }
                                    skills.addArray(lib.character[event.list1[i]][3]);
                                }
                                if (!aiChoice) aiChoice = skills;
                                event.list2AI = aiChoice
                                    .sort(function (a, b) {
                                        return get.skillRank(b) - get.skillRank(a);
                                    })
                                    .slice(0, 2);
                                event.list2 = skills;
                                ('step 3');
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: event.list2AI,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (characters, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多九项技能`, [characters, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (const skill of skills) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skill;
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skill) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 9) return;
                                                this.classList.add('bluebg');
                                                rSkill.add(this.link);
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(this.link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    /*
                                    event.switchToAuto=function(){
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing=false;
                                    };
                                    */
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
                                    chooseButton(event.list1, event.list2);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.list1, event.list2);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 4');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    player.addAdditionalSkill('tgtt_yxmjyxjxq', map.skills);
                                    for (var i = 0; i < map.skills.length; i++) {
                                        game.log(player, '获得技能', '【' + get.translation(map.skills[i]) + '】');
                                    }
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjygzmq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/月光奏鸣曲.jpg');
                                lib.config.image_background = '月光奏鸣曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/月光奏鸣曲.mp3';
                                game.playBackgroundMusic();
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                player.addGaintag(cards, 'tgtt_yxmjygzmq_tag');
                                player.markAuto('tgtt_yxmjygzmq', cards);
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('tgtt_yxmjygzmq_tag')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('tgtt_yxmjygzmq_tag')) {
                                        return false;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjygzmq_tag'));
                                    if (cnt > 0) return Infinity;
                                },
                                targetInRange(card, player, num) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjygzmq_tag'));
                                    if (cnt > 0) return true;
                                },
                                wuxieRespondable(card, player, target) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjygzmq_tag'));
                                    if (cnt > 0 && player != target) return false;
                                },
                            },
                            group: ['tgtt_yxmjygzmq_yong', 'tgtt_yxmjygzmq_lose', 'tgtt_yxmjygzmq_de'],
                            subSkill: {
                                tag: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                                yong: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasCard((card) => card.hasGaintag('tgtt_yxmjygzmq_tag'), 'h');
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                        trigger.directHit.remove(player);
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: ['loseAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || !evt.hs.length) return false;
                                        if (event.name == 'lose') {
                                            for (var i in event.gaintag_map) {
                                                if (event.gaintag_map[i].includes('tgtt_yxmjygzmq_tag')) return true;
                                            }
                                            return false;
                                        }
                                        return player.hasHistory('lose', function (evt) {
                                            if (event != evt.parent) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('tgtt_yxmjygzmq_tag')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.changeHujia();
                                    },
                                },
                                de: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        const targets = game.players.slice().concat(game.dead);
                                        return targets.some((target) => target.getStorage('tgtt_yxmjygzmq').filterInD('d').length);
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        const targets = game.players.slice().concat(game.dead);
                                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage('tgtt_yxmjygzmq').filterInD('d')), []);
                                        player.gain(cards, 'gain2').gaintag.add('tgtt_yxmjygzmq_tag');
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjsdahq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/圣导安魂曲.jpg');
                                lib.config.image_background = '圣导安魂曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/圣导安魂曲.mp3';
                                game.playBackgroundMusic();
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, Math.ceil(player.getDamagedHp() / 2));
                                player.draw(2);
                                player.recover(num);
                                player.addTempSkill('tgtt_srtsqianxing', { player: 'tgtt_yxmjpojungejiBefore' });
                                player.addTempSkill('tgtt_srtsmianyi', { player: 'tgtt_yxmjpojungejiBefore' });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.addTempSkill('tgtt_srtsjingu', { player: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtsfengyin', { player: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtschuanjia', { player: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtspofang', { player: 'tgtt_yxmjpojungejiBefore' });
                                        current.storage.tgtt_srtspofang.add(trigger.card);
                                        current.markSkill('tgtt_srtspofang');
                                        current.turnOver(true);
                                        if (!current.isLinked()) current.link();
                                    }
                                });
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjhhxzq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/黄河协奏曲.jpg');
                                lib.config.image_background = '黄河协奏曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/黄河协奏曲.mp3';
                                game.playBackgroundMusic();
                            },
                            mod: {
                                cardUsable(card, player) {
                                    return Infinity;
                                },
                                targetInRange(card, player) {
                                    return true;
                                },
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && !get.tag(card, 'norepeat')) {
                                        var history = player.getAllHistory('useCard');
                                        if (history.length) {
                                            var cardx = history[history.length - 1].card;
                                            if (get.is.yayun(get.translation(cardx.name), get.translation(card.name))) return num + 20;
                                        }
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            usable: 2,
                            selectCard() {
                                var player = _status.event.player;
                                return [Math.max(1, ui.selected.targets.length), Math.min(Infinity, game.players.length - 1)];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (target) {
                                        return target != player && get.effect(target, 'tgtt_yxmjhhxzq', player, player) > 0;
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 7 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            content() {
                                target.damage('nocard')._triggered = null;
                                player.recover();
                                player.changeHujia();
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var disbool = false;
                                        if (player.hasSkill('tgtt_yxmjpojungeji')) {
                                            if (target.countCards('j') && get.attitude(player, target) > 0) {
                                                return 1;
                                            }
                                            if (
                                                target.countCards('he', function (card) {
                                                    return card.name == 'tengjia' || get.value(card) > 0;
                                                })
                                            ) {
                                                disbool = true;
                                            }
                                        }
                                        var damage = get.damageEffect(target, player);
                                        if (disbool && get.attitude(player, target) < 0) return Math.min(-1, damage);
                                        return damage;
                                    },
                                },
                                order: 7,
                            },
                            group: ['tgtt_yxmjhhxzq_xie', 'tgtt_yxmjhhxzq_zou', 'tgtt_yxmjhhxzq_mo'],
                            subSkill: {
                                xie: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player && event.player.classList.contains('dead') == false && player.countCards('he');
                                    },
                                    forced: true,
                                    checkx(event, player) {
                                        var att1 = get.attitude(player, event.player);
                                        var att2 = get.attitude(player, event.source);
                                        return att1 > 0 && att2 <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(trigger.num + 1);
                                        var next = player.chooseToDiscard('he', get.prompt2('tgtt_yxmjhhxzq_xie', trigger.player));
                                        var check = lib.skill.tgtt_yxmjhhxzq_xie.checkx(trigger, player);
                                        next.set('ai', function (card) {
                                            if (_status.event.goon) return 8 - get.value(card);
                                            return 0;
                                        });
                                        next.set('goon', check);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.judge();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        switch (result.suit) {
                                            case 'heart':
                                                {
                                                    trigger.player.recover(trigger.num + 1);
                                                    trigger.player.turnOver(false);
                                                }
                                                break;
                                            case 'diamond':
                                                {
                                                    trigger.player.draw(trigger.num + 1);
                                                    trigger.player.changeHujia(trigger.num + 1);
                                                }
                                                break;
                                            case 'club':
                                                {
                                                    trigger.source.chooseToDiscard('he', trigger.num + 1, true);
                                                    trigger.source.changeHujia(-(trigger.num + 1));
                                                }
                                                break;
                                            case 'spade':
                                                {
                                                    trigger.source.loseHp(trigger.num + 1);
                                                    trigger.source.turnOver(true);
                                                }
                                                break;
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                    },
                                },
                                mo: {
                                    trigger: {
                                        player: ['respondEnd'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.card;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                zou: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var history = player.getAllHistory('useCard'),
                                            index = history.indexOf(event);
                                        if (index < 1) return false;
                                        var evt = history[index - 1];
                                        return get.is.yayun(get.translation(event.card.name), get.translation(evt.card.name));
                                    },
                                    filterx(event) {
                                        if (event.targets.length == 0) return false;
                                        var type = get.type(event.card);
                                        if (type != 'basic' && type != 'trick') return false;
                                        return true;
                                    },
                                    prompt2(event, player) {
                                        if (lib.skill.tgtt_yxmjhhxzq_zou.filterx(event)) return '摸一张牌,回复1点体力并获得1点护甲且令' + get.translation(event.card) + '额外结算一次？';
                                        return '摸一张牌,回复1点体力并获得1点护甲.';
                                    },
                                    check(event, player) {
                                        if (lib.skill.tgtt_yxmjhhxzq_zou.filterx(event)) return !get.tag(event.card, 'norepeat');
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                        if (lib.skill.tgtt_yxmjhhxzq_zou.filterx(trigger)) {
                                            trigger.effectCount++;
                                            game.log(trigger.card, '额外结算一次');
                                        }
                                    },
                                    init(player) {
                                        player.addSkill('tgtt_yxmjhhxzq_yayun');
                                        var history = player.getAllHistory('useCard');
                                        if (history.length) {
                                            player.addGaintag(
                                                player.getCards('h', (card) => {
                                                    return get.is.yayun(get.translation(card.name), get.translation(history[history.length - 1].card.name));
                                                }),
                                                'tgtt_yxmjhhxzq_yayun'
                                            );
                                        }
                                    },
                                    onremove(player) {
                                        player.removeSkill('tgtt_yxmjhhxzq_yayun');
                                        player.removeGaintag('tgtt_yxmjhhxzq_yayun');
                                    },
                                    _priority: 918,
                                },
                                yayun: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h') > 0;
                                    },
                                    forced: true,
                                    _priority: 918,
                                    content() {
                                        'step 0';
                                        player.removeGaintag('tgtt_yxmjhhxzq_yayun');
                                        ('step 1');
                                        player.addGaintag(
                                            player.getCards('h', (card) => {
                                                return get.is.yayun(get.translation(card.name), get.translation(trigger.card.name));
                                            }),
                                            'tgtt_yxmjhhxzq_yayun'
                                        );
                                    },
                                    _priority: 91800,
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjmyjxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/命运交响曲.jpg');
                                lib.config.image_background = '命运交响曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/命运交响曲.mp3';
                                game.playBackgroundMusic();
                            },
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.changeHujia();
                                player.addTempSkill('tgtt_fslbrenhe', { player: 'tgtt_yxmjpojungejiBefore' });
                                ('step 1');
                                var list = ['tgtt_fslbliuhan_chengzhi', 'tgtt_fslbliuhan_beifa', 'tgtt_fslbliuhan_fuming', 'tgtt_fslbliuhan_fulong', 'tgtt_fslbliuhan_yizhong', 'tgtt_fslbliuhan_xinghan'];
                                var list2 = list.randomRemove(2);
                                if (list2.includes('tgtt_fslbliuhan_fulong') && list2.includes('tgtt_fslbliuhan_yizhong')) {
                                    list2.randomRemove(1);
                                    list2.push(list.randomGet());
                                }
                                for (var skill of list2) {
                                    player.addSkills(skill);
                                    game.log(player, '解锁了<span style="font-family: yuanli">刘汉命运线</span>:', '#g【' + get.translation(skill) + '】');
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjddzmq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/大调奏鸣曲.jpg');
                                lib.config.image_background = '大调奏鸣曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/大调奏鸣曲.mp3';
                                game.playBackgroundMusic();
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player == _status.currentPhase) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && get.color(evt.card) != 'none' && get.color(card) != 'none' && get.color(evt.card) != get.color(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var color1 = get.color(evt.card);
                                var color2 = get.color(event.card);
                                return color1 && color2 && color1 != 'none' && color2 != 'none';
                            },
                            content() {
                                if (get.color(player.getLastUsed(1).card) != get.color(trigger.card)) {
                                    player.draw();
                                    player.changeHujia;
                                } else {
                                    player.recover();
                                    player.changeHujia();
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            group: ['tgtt_yxmjddzmq_chang', 'tgtt_yxmjddzmq_liji', 'tgtt_yxmjddzmq_1', 'tgtt_yxmjddzmq_2', 'tgtt_yxmjddzmq_3', 'tgtt_yxmjddzmq_4', 'tgtt_yxmjddzmq_5', 'tgtt_yxmjddzmq_6', 'tgtt_yxmjddzmq_7', 'tgtt_yxmjddzmq_8'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 0;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['送给你小心心 送你花一朵'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 1;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['你在我生命中 太多的感动'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shan', 'tao', 'zong', 'xionghuangjiu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 2;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['你是我的天使 一路指引我'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'trick' && !get.tag(card, 'damage') > 0;
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 3;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['无论岁月变幻 爱你唱成歌'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shunshou', 'guohe'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 4;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['听我说谢谢你<br>因为有你 温暖了四季'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                6: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 5;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['谢谢你 感谢有你<br>世界更美丽'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['sha', 'jiu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                7: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 6;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['我要谢谢你 因为有你<br>爱常在心底'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shandian', 'lebu', 'bingliang', 'fulei', 'caomu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                8: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjddzmq_chang') == 7;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjddzmq_hight: true });
                                        player.say(['谢谢你 感谢有你<br>把幸福传递'].randomGet());
                                        player.addMark('tgtt_yxmjddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'trick' && get.tag(card, 'damage') > 0;
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        lib.skill.tgtt_yxmjddzmq_chang.init(player);
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjddzmq_hight');
                                    },
                                },
                                chang: {
                                    mark: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    marktext: '大调',
                                    intro: {
                                        name2: '大调',
                                        markcount(storage, player) {
                                            var num = player.getHistory('custom', function (evt) {
                                                return evt.tgtt_yxmjddzmq_hight == true;
                                            }).length;
                                            return num;
                                        },
                                        content(storage, player) {
                                            var num = player.countMark('tgtt_yxmjddzmq_chang');
                                            var str = '<li>送给你小心心 送你花一朵';
                                            if (num == 1) {
                                                str = '<li>你在我生命中 太多的感动';
                                            }
                                            if (num == 2) {
                                                str = '<li>你是我的天使 一路指引我';
                                            }
                                            if (num == 3) {
                                                str = '<li>无论岁月变幻 爱你唱成歌';
                                            }
                                            if (num == 4) {
                                                str = '<li>听我说谢谢你<br>因为有你 温暖了四季';
                                            }
                                            if (num == 5) {
                                                str = '<li>谢谢你 感谢有你<br>世界更美丽';
                                            }
                                            if (num == 6) {
                                                str = '<li>我要谢谢你 因为有你<br>爱常在心底';
                                            }
                                            if (num == 7) {
                                                str = '<li>谢谢你 感谢有你<br>把幸福传递';
                                            }
                                            return str;
                                        },
                                    },
                                    init(player) {
                                        player.storage.tgtt_yxmjddzmq_chang = [];
                                    },
                                },
                                liji: {
                                    trigger: {
                                        player: 'tgtt_yxmjddzmq_hight',
                                    },
                                    filter(event, player) {
                                        var num = game.players.length > 4 ? 9 : 4;
                                        return (
                                            player.getHistory('custom', function (evt) {
                                                return evt.tgtt_yxmjddzmq_hight == true;
                                            }).length %
                                            num ==
                                            0
                                        );
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var next = player.chooseCardTarget({
                                            position: 'he',
                                            filterCard: lib.filter.cardDiscardable,
                                            filterTarget(card, player, target) {
                                                return player != target;
                                            },
                                            ai1(card) {
                                                return 8 - get.value(card);
                                            },
                                            ai2(target) {
                                                return -get.attitude(_status.event.player, target);
                                            },
                                            prompt: get.prompt('tgtt_yxmjddzmq_liji'),
                                            prompt2: '弃置一张牌,对一名其他角色造成一点伤害并令你回复1点体力且获得1点护甲',
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.cards);
                                            player.recover();
                                            player.changeHujia();
                                            result.targets[0].damage('nocard');
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target: -1.5,
                                        },
                                        tag: {
                                            damage: 1,
                                        },
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjxdhxq: {
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/小调幻想曲.jpg');
                                lib.config.image_background = '小调幻想曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/小调幻想曲.mp3';
                                game.playBackgroundMusic();
                            },
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 99 };
                                }, player);
                                player.addSkill('tgtt_yxmjxdhxq_use');
                                player.addSkill('tgtt_yxmjxdhxq_cancel');
                                player.storage.tgtt_yxmjxdhxq_shixiao = true;
                                //ui.auto.hide();
                            },
                            group: ['tgtt_yxmjxdhxq_jie', 'tgtt_yxmjxdhxq_chong'],
                            subSkill: {
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        aiOrder(player, card, num) {
                                            var name = card.name;
                                            if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                            if (name == 'sha') return num + 6;
                                            if (get.subtype(card) == 'equip2') return num + get.value(card) / 3;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                        if (player.forceCountChoose.phaseUse == 1) {
                                            var evt = event.getParent('phaseUse');
                                            if (evt && evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                            }
                                        } else
                                            game.broadcastAll(function (player) {
                                                player.forceCountChoose.phaseUse--;
                                            }, player);
                                    },
                                    _priority: 1,
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    firstDo: true,
                                    silent: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            delete player.forceCountChoose;
                                        }, player);
                                        //ui.auto.show();
                                        player.removeSkill('tgtt_yxmjxdhxq_use');
                                        player.removeSkill('tgtt_yxmjxdhxq_cancel');
                                        if (player.storage.tgtt_yxmjxdhxq_shixiao) player.storage.tgtt_yxmjxdhxq_shixiao = false;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                jie: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        player.draw(Math.min(9, player.getStat('damage')));
                                        player.recover(Math.min(9, player.getStat('damage')));
                                        player.changeHujia(Math.min(9, player.getStat('damage')));
                                    },
                                },
                                chong: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    usable: 9,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.countCards('h') && !player.storage.tgtt_yxmjxdhxq_shixiao;
                                    },
                                    content() {
                                        'step 0';
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            player.discard(hs);
                                        }
                                        ('step 1');
                                        var suits = [];
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (suits.length >= 4) return;
                                            if (evt.name == 'lose') {
                                                if (evt.position == ui.discardPile) {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') suits.add(i.suit);
                                                    }
                                                }
                                            } else {
                                                if (evt.name == 'cardsDiscard') {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') suits.add(i.suit);
                                                    }
                                                }
                                            }
                                        });
                                        if (suits.length) player.draw(suits.length * 2 + 1);
                                    },
                                },
                            },
                            ai: {
                                threaten: 4.5,
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjkldykxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/克罗地亚狂想曲.jpg');
                                lib.config.image_background = '克罗地亚狂想曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/克罗地亚狂想曲.mp3';
                                game.playBackgroundMusic();
                            },
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.countCards('h', (card) => card.tgtt_yxmjkldykxq)) return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.countCards('h', (card) => card.tgtt_yxmjkldykxq)) return true;
                                },
                                ignoredHandcard(card, player) {
                                    if (card.tgtt_yxmjkldykxq) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.tgtt_yxmjkldykxq) return false;
                                },
                            },
                            trigger: {
                                global: ['loseAfter'],
                                player: ['phaseBegin', 'damageEnd', 'phaseUseBegin'],
                            },
                            filter(event, player) {
                                if (event.name == 'lose') return event.KuangXiangDestroy;
                                return event.name != 'phaseUse' || player.countCards('h', (card) => card.tgtt_yxmjkldykxq && !card.tgtt_yxmjkldykxq_bian);
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'lose') {
                                    await player.draw(trigger.cards.length);
                                    await player.recover(trigger.cards.length);
                                    await player.changeHujia(trigger.cards.length);
                                } else if (trigger.name == 'phase') {
                                    await lib.skill.tgtt_yxmjkldykxq.GainContent(9, 1, player);
                                } else if (trigger.name == 'phaseUse') {
                                    const cards = player.getCards('h', (card) => card.tgtt_yxmjkldykxq && !card.tgtt_yxmjkldykxq_bian);
                                    for (const card of cards) {
                                        const card2 = lib.card.list
                                            .filter((cardx) => {
                                                if (card.suit == cardx[0] && card.number == cardx[1] && card.name == cardx[2] && card.nature == cardx[3]) return false;
                                                return card.suit == cardx[0];
                                            })
                                            .randomGet();
                                        if (!card2) continue;
                                        game.addVideo('skill', player, ['tgtt_yxmjkldykxq', [false, get.cardInfo(card)]]);
                                        game.broadcastAll(
                                            (card, card2) => {
                                                card.init([card2[0], card2[1], card2[2], card2[3]]);
                                            },
                                            card,
                                            card2
                                        );
                                    }
                                } else await lib.skill.tgtt_yxmjkldykxq.GainContent(3, trigger.num || 1, player);
                            },
                            async GainContent(length, num, player) {
                                if (!_status.tgtt_youxiaomeijiu_card_css) {
                                    _status.tgtt_youxiaomeijiu_card_css = true;
                                    game.broadcastAll(() => {
                                        /*诱宵美九狂想卡牌颜色感谢活动武将提供的代码--来自欢杀神左慈*/
                                        lib.init.sheet(['.card.tgtt_yxmjkldykxq-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color: #0000FF;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
                                        /*诱宵美九狂想卡牌颜色*/
                                        lib.init.sheet(['.card.tgtt_yxmjkldykxq_bian-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color:yellow;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
                                    });
                                }
                                game.addGlobalSkill('tgtt_yxmjkldykxq_gain');
                                while (num > 0 && player.hasSkill('tgtt_yxmjkldykxq')) {
                                    num--;
                                    let gains = [],
                                        count = 0;
                                    const sum = Math.min(length, 18 - player.countCards('h', (card) => card.tgtt_yxmjkldykxq));
                                    if (sum > 0) {
                                        while (sum - count > 0) {
                                            count++;
                                            const cardy = lib.card.list.randomGet();
                                            if (cardy) gains.push(game.createCard2(cardy[2], cardy[0], cardy[1], cardy[3]));
                                            else break;
                                        }
                                        if (gains.length) {
                                            game.broadcastAll((cards) => {
                                                for (const card of cards) {
                                                    card.tgtt_yxmjkldykxq = true;
                                                    card.classList.add('tgtt_yxmjkldykxq-glow');
                                                }
                                            }, gains);
                                            await player.gain(gains, 'draw');
                                            game.log(player, '获得了', '#y' + get.cnNumber(gains.length) + '张', '#g<狂想>牌');
                                        }
                                    }
                                    if (length - gains.length) {
                                        await player.draw(length - gains.length);
                                        await player.recover(length - gains.length);
                                        await player.changeHujia(length - gains.length);
                                    }
                                }
                            },
                            derivation: 'tgtt_yxmjkldykxq_faq',
                            group: ['tgtt_yxmjkldykxq_bian'],
                            subSkill: {
                                gain: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'gainAfter',
                                        global: 'loseAsyncAfter',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('tgtt_yxmjkldykxq', null, false, false)) return false;
                                        return event.getg(player).some((card) => card.tgtt_yxmjkldykxq);
                                    },
                                    forced: true,
                                    popup: false,
                                    firstDo: true,
                                    forceDie: true,
                                    content() {
                                        const cards = trigger.getg(player).filter((card) => card.tgtt_yxmjkldykxq);
                                        game.log(cards, '被销毁了');
                                        player.lose(cards, ui.special).set('KuangXiangDestroy', true);
                                    },
                                },
                                bian: {
                                    enable: 'phaseUse',
                                    TaiguSkill: true,
                                    charlotte: true,
                                    onChooseToUse(event) {
                                        if (!game.online && event.type == 'phase' && !event.tgtt_yxmjkldykxq_bian_count) {
                                            const player = event.player;
                                            event.set('tgtt_yxmjkldykxq_bian_count', [player.getHistory('useSkill', (evt) => evt.skill == 'tgtt_yxmjkldykxq_bian').length, player.getCards('h', (card) => card.tgtt_yxmjkldykxq && !card.tgtt_yxmjkldykxq_bian), player.getCards('h', (card) => !card.tgtt_yxmjkldykxq && !card.hasGaintag('tgtt_yxmjkldykxq_biao'))]);
                                        }
                                    },
                                    filter(event, player) {
                                        const count = event.tgtt_yxmjkldykxq_bian_count;
                                        return count[0] <= 2 + 7 && count[1].length && count[2].length;
                                    },
                                    filterCard(card, player) {
                                        return (get.event('tgtt_yxmjkldykxq_bian_count')[1 + ui.selected.cards.length] || []).includes(card);
                                    },
                                    selectCard: 2,
                                    check(card) {
                                        if (ui.selected.cards.length && ui.selected.cards[0].suit == card.suit) return 5 + get.useful(card) * get.value(card);
                                        return get.useful(card) * get.value(card);
                                    },
                                    complexCard: true,
                                    position: 'h',
                                    lose: false,
                                    discard: false,
                                    delay: false,
                                    async content(event, trigger, player) {
                                        const cards = event.cards,
                                            suit = cards[0].suit;
                                        player.addGaintag([cards[1]], 'tgtt_yxmjkldykxq_biao');
                                        game.addVideo('skill', player, ['tgtt_yxmjkldykxq_bian', [false, get.cardInfo(cards[0])]]);
                                        game.broadcastAll((cards) => {
                                            cards[0].tgtt_yxmjkldykxq_bian = true;
                                            cards[0].init([cards[1].suit, cards[1].number, cards[1].name, cards[1].nature]);
                                            cards[0].classList.remove('tgtt_yxmjkldykxq-glow');
                                            cards[0].classList.add('tgtt_yxmjkldykxq_bian-glow');
                                        }, cards);
                                        if (suit == cards[1].suit) await lib.skill.tgtt_yxmjkldykxq.GainContent(1, 1, player);
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                biao: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjkldykxq_faq: {
                            TaiguSkill: true,
                            charlotte: true,
                        },
                        tgtt_yxmjldsjjxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            init() {
                                ui.background.setBackgroundImage('extension/太古天庭/image/background/拉德斯基进行曲.jpg');
                                lib.config.image_background = '拉德斯基进行曲';
                                lib.config.background_music = 'music_custom';
                                lib.config.background_music_src = 'extension/太古天庭/audio/诱宵美九曲库/拉德斯基进行曲.mp3';
                                game.playBackgroundMusic();
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && event.target.hp > 0 && event.target.countCards('he') > 0 && player != event.target;
                            },
                            content() {
                                'step 0';
                                var next = player.choosePlayerCard(trigger.target, 'he', [1, Math.min(trigger.target.maxHp, trigger.target.countCards('he'))], get.prompt('tgtt_yxmjldsjjxq', trigger.target));
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
                                    event.cards = result.cards;
                                    var target = trigger.target;
                                    target.addSkill('tgtt_yxmjldsjjxq_po');
                                    target.markAuto('tgtt_yxmjldsjjxq_po', result.cards);
                                    target.lose(result.cards, ui.special, 'toStorage');
                                    target.markSkill('tgtt_yxmjldsjjxq_po');
                                    game.log(target, '失去了' + get.cnNumber(result.cards.length) + '张牌');
                                    player.draw(Math.floor(result.cards.length));
                                } else event.finish();
                                ('step 2');
                                var discard = false,
                                    draw = false,
                                    basic = false;
                                for (var i of cards) {
                                    var type = get.type2(i);
                                    if (type == 'equip') discard = true;
                                    if (type == 'trick') draw = true;
                                    if (type == 'basic') basic = true;
                                }
                                if (discard) {
                                    event.equip = true;
                                    player
                                        .chooseButton(
                                            [
                                                '【拉德斯基进行曲】:选择一张牌置入弃牌堆并回复1点体力',
                                                cards.filter(function (card) {
                                                    return get.type(card) == 'equip';
                                                }),
                                            ],
                                            true
                                        )
                                        .set('ai', function (button) {
                                            return get.value(button.link, _status.event.getTrigger().target);
                                        });
                                }
                                if (draw) event.draw = true;
                                if (basic) event.basic = true;
                                ('step 3');
                                if (event.equip && result.links && result.links.length) {
                                    trigger.target.unmarkAuto('tgtt_yxmjldsjjxq_po', result.links);
                                    trigger.target.$throw(result.links, 1000);
                                    player.recover();
                                    game.log(player, '将', result.links, '置入了弃牌堆');
                                    game.cardsDiscard(result.links);
                                    if (!event.draw) game.delayx();
                                }
                                if (event.draw) {
                                    player.draw();
                                    player.changeHujia();
                                }
                                if (event.basic) {
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'trick') == 'trick';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'basic') == 'basic';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'equip') == 'equip';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'delay') == 'delay';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'spell') == 'spell';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'hsshenqi') == 'hsshenqi';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'land') == 'land';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'jiguan') == 'jiguan';
                                        }),
                                        'gain2'
                                    );
                                    player.gain(
                                        get.cardPile(function (card) {
                                            return get.type(card, 'food') == 'food';
                                        }),
                                        'gain2'
                                    );
                                }
                            },
                            ai: {
                                unequip: true,
                                directHit_ai: true,
                                skillTagFilter(player, tag, arg) {
                                    if (get.attitude(player, arg.target) > 0) return false;
                                    if (tag == 'directHit_ai') return arg.target.maxHp >= Math.max(1, arg.target.countCards('h') - 1);
                                    if (arg && arg.target.getEquip(2)) return true;
                                    return false;
                                },
                            },
                            group: ['tgtt_yxmjldsjjxqyxjxq', 'tgtt_yxmjldsjjxqygzmq', 'tgtt_yxmjldsjjxqygzmq_yong', 'tgtt_yxmjldsjjxqygzmq_lose', 'tgtt_yxmjldsjjxqygzmq_de', 'tgtt_yxmjldsjjxqsdahq', 'tgtt_yxmjldsjjxqhhxzq', 'tgtt_yxmjldsjjxqhhxzq_xie', 'tgtt_yxmjldsjjxqhhxzq_zou', 'tgtt_yxmjldsjjxqhhxzq_mo', 'tgtt_yxmjldsjjxqmyjxq', 'tgtt_yxmjldsjjxqddzmq', 'tgtt_yxmjldsjjxqddzmq_chang', 'tgtt_yxmjldsjjxqddzmq_liji', 'tgtt_yxmjldsjjxqddzmq_1', 'tgtt_yxmjldsjjxqddzmq_2', 'tgtt_yxmjldsjjxqddzmq_3', 'tgtt_yxmjldsjjxqddzmq_4', 'tgtt_yxmjldsjjxqddzmq_5', 'tgtt_yxmjldsjjxqddzmq_6', 'tgtt_yxmjldsjjxqddzmq_7', 'tgtt_yxmjldsjjxqddzmq_8', 'tgtt_yxmjldsjjxqxdhxq', 'tgtt_yxmjldsjjxqxdhxq_jie', 'tgtt_yxmjldsjjxqxdhxq_chong', 'tgtt_yxmjldsjjxqkldykxq', 'tgtt_yxmjldsjjxqkldykxq_bian', 'tgtt_yxmjldsjjxq_po', 'tgtt_yxmjldsjjxq_ji'],
                            subSkill: {
                                po: {
                                    init(player) {
                                        if (!player.storage.tgtt_yxmjldsjjxq_po) player.storage.tgtt_yxmjldsjjxq_po = [];
                                    },
                                    trigger: {
                                        global: 'phaseEnd',
                                        player: 'dieBegin',
                                    },
                                    forced: true,
                                    popup: false,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player, name) {
                                        if (name == 'phaseEnd') return player.storage.tgtt_yxmjldsjjxq_po && player.storage.tgtt_yxmjldsjjxq_po.length;
                                        else return true;
                                    },
                                    content() {
                                        'step 0';
                                        if (event.triggername == 'phaseEnd') {
                                            game.log(player, '收回了' + get.cnNumber(player.gain(player.storage.tgtt_yxmjldsjjxq_po, 'draw', 'fromStorage').cards.length) + '张【拉德斯基进行曲】牌');
                                        } else {
                                            var qipaile = player.storage.tgtt_yxmjldsjjxq_po;
                                            player.$throw(qipaile, 1000);
                                            game.cardsDiscard(qipaile);
                                            game.log(qipaile, '被置入了弃牌堆');
                                        }
                                        ('step 1');
                                        player.storage.tgtt_yxmjldsjjxq_po.length = 0;
                                        player.removeSkill('tgtt_yxmjldsjjxq_po');
                                    },
                                    marktext: '拉德斯基进行曲',
                                    intro: {
                                        name: '拉德斯基进行曲',
                                        onunmark(storage, player) {
                                            if (storage && storage.length) {
                                                player.$throw(storage, 1000);
                                                game.cardsDiscard(storage);
                                                game.log(storage, '被置入了弃牌堆');
                                                storage.length = 0;
                                            }
                                        },
                                        content: 'cardCount',
                                    },
                                },
                                ji: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    logTarget: 'player',
                                    filter(event, player) {
                                        var target = event.player;
                                        return player.countCards('h') >= target.countCards('h') && player.countCards('e') >= target.countCards('e');
                                    },
                                    content() {
                                        trigger.num += 2;
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqyxjxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            marktext: '英',
                            intro: {
                                name: '英雄交响曲',
                                content: '致敬每一个英雄!',
                            },
                            enable: 'phaseUse',
                            usable: 3,
                            forced: true,
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                player.draw();
                                player.recover();
                                ('step 1');
                                var list = [];
                                if (_status.characterlist) {
                                    list = _status.characterlist.slice();
                                } else if (_status.connectMode) {
                                    list = get.charactersOL();
                                } else {
                                    for (var i in lib.character) {
                                        list.push(i);
                                    }
                                }
                                var stagePlayers = game.players.concat(game.dead);
                                for (const player of stagePlayers) {
                                    list.remove(player.name);
                                    list.remove(player.name1);
                                    list.remove(player.name2);
                                }
                                event.list1 = list.randomGets(9);
                                ('step 2');
                                var skills = [],
                                    aiChoice = [];
                                for (var i = 0; i < event.list1.length; i++) {
                                    if (lib.character[event.list1[i]][3].length == 2 && !!aiChoice.length) {
                                        aiChoice = lib.character[event.list1[i]][3];
                                    }
                                    skills.addArray(lib.character[event.list1[i]][3]);
                                }
                                if (!aiChoice) aiChoice = skills;
                                event.list2AI = aiChoice
                                    .sort(function (a, b) {
                                        return get.skillRank(b) - get.skillRank(a);
                                    })
                                    .slice(0, 2);
                                event.list2 = skills;
                                ('step 3');
                                var switchToAuto = function () {
                                    _status.imchoosing = false;
                                    event._result = {
                                        bool: true,
                                        skills: event.list2AI,
                                    };
                                    if (event.dialog) event.dialog.close();
                                    if (event.control) event.control.close();
                                };
                                var chooseButton = function (characters, skills) {
                                    var event = _status.event;
                                    if (!event._result) event._result = {};
                                    event._result.skills = [];
                                    var rSkill = event._result.skills;
                                    var dialog = ui.create.dialog(`请选择获得至多九项技能`, [characters, 'character'], 'hidden');
                                    event.dialog = dialog;
                                    var table = document.createElement('div');
                                    table.classList.add('add-setting');
                                    table.style.margin = '0';
                                    table.style.width = '100%';
                                    table.style.position = 'relative';
                                    for (const skill of skills) {
                                        var td = ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                                        td.link = skill;
                                        table.appendChild(td);
                                        td.innerHTML = '<span>' + get.translation(skill) + '</span>';
                                        td.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', function () {
                                            if (_status.dragged) return;
                                            if (_status.justdragged) return;
                                            _status.tempNoButton = true;
                                            setTimeout(function () {
                                                _status.tempNoButton = false;
                                            }, 500);
                                            if (!this.classList.contains('bluebg')) {
                                                if (rSkill.length >= 9) return;
                                                this.classList.add('bluebg');
                                                rSkill.add(this.link);
                                            } else {
                                                this.classList.remove('bluebg');
                                                rSkill.remove(this.link);
                                            }
                                        });
                                    }
                                    dialog.content.appendChild(table);
                                    dialog.add('　　');
                                    dialog.open();
                                    /*
                                    event.switchToAuto=function(){
                                        event.dialog.close();
                                        event.control.close();
                                        game.resume();
                                        _status.imchoosing=false;
                                    };
                                    */
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
                                    chooseButton(event.list1, event.list2);
                                } else if (event.isOnline()) {
                                    event.player.send(chooseButton, event.list1, event.list2);
                                    event.player.wait();
                                    game.pause();
                                } else {
                                    switchToAuto();
                                }
                                ('step 4');
                                var map = event.result || result;
                                if (map && map.skills && map.skills.length) {
                                    player.addAdditionalSkill('tgtt_yxmjldsjjxqyxjxq', map.skills);
                                    for (var i = 0; i < map.skills.length; i++) {
                                        game.log(player, '获得技能', '【' + get.translation(map.skills[i]) + '】');
                                    }
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqygzmq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return true;
                            },
                            content() {
                                'step 0';
                                var cards = player.getCards('h');
                                player.addGaintag(cards, 'tgtt_yxmjldsjjxqygzmq_tag');
                                player.markAuto('tgtt_yxmjldsjjxqygzmq', cards);
                            },
                            mod: {
                                ignoredHandcard(card, player) {
                                    if (card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag')) {
                                        return true;
                                    }
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag')) {
                                        return false;
                                    }
                                },
                                cardUsable(card, player, num) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag'));
                                    if (cnt > 0) return Infinity;
                                },
                                targetInRange(card, player, num) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag'));
                                    if (cnt > 0) return true;
                                },
                                wuxieRespondable(card, player, target) {
                                    var cnt = player.countCards('h', (card) => card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag'));
                                    if (cnt > 0 && player != target) return false;
                                },
                            },
                            group: ['tgtt_yxmjldsjjxqygzmq_yong', 'tgtt_yxmjldsjjxqygzmq_lose', 'tgtt_yxmjldsjjxqygzmq_de'],
                            subSkill: {
                                tag: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                                yong: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    filter(event, player) {
                                        return event.player.hasCard((card) => card.hasGaintag('tgtt_yxmjldsjjxqygzmq_tag'), 'h');
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.players);
                                        trigger.directHit.remove(player);
                                    },
                                },
                                lose: {
                                    trigger: {
                                        player: ['loseAfter'],
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        if (!evt || !evt.hs || !evt.hs.length) return false;
                                        if (event.name == 'lose') {
                                            for (var i in event.gaintag_map) {
                                                if (event.gaintag_map[i].includes('tgtt_yxmjldsjjxqygzmq_tag')) return true;
                                            }
                                            return false;
                                        }
                                        return player.hasHistory('lose', function (evt) {
                                            if (event != evt.parent) return false;
                                            for (var i in evt.gaintag_map) {
                                                if (evt.gaintag_map[i].includes('tgtt_yxmjldsjjxqygzmq_tag')) return true;
                                            }
                                            return false;
                                        });
                                    },
                                    forced: true,
                                    content() {
                                        player.draw();
                                        player.changeHujia();
                                    },
                                },
                                de: {
                                    trigger: {
                                        player: 'phaseZhunbeiBegin',
                                    },
                                    filter(event, player) {
                                        const targets = game.players.slice().concat(game.dead);
                                        return targets.some((target) => target.getStorage('tgtt_yxmjldsjjxqygzmq').filterInD('d').length);
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        const targets = game.players.slice().concat(game.dead);
                                        const cards = targets.reduce((list, target) => list.addArray(target.getStorage('tgtt_yxmjldsjjxqygzmq').filterInD('d')), []);
                                        player.gain(cards, 'gain2').gaintag.add('tgtt_yxmjldsjjxqygzmq_tag');
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqsdahq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                var num = Math.max(1, Math.ceil(player.getDamagedHp() / 2));
                                player.draw(2);
                                player.recover(num);
                                player.addTempSkill('tgtt_srtsqianxing', { player: 'tgtt_yxmjpojungejiBefore' });
                                player.addTempSkill('tgtt_srtsmianyi', { player: 'tgtt_yxmjpojungejiBefore' });
                                ('step 1');
                                game.countPlayer(function (current) {
                                    if (current != player) {
                                        current.addTempSkill('tgtt_srtsjingu', { global: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtsfengyin', { global: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtschuanjia', { global: 'tgtt_yxmjpojungejiBefore' });
                                        current.addTempSkill('tgtt_srtspofang', { global: 'tgtt_yxmjpojungejiBefore' });
                                        current.storage.tgtt_srtspofang.add(trigger.card);
                                        current.markSkill('tgtt_srtspofang');
                                        current.turnOver(true);
                                        if (!current.isLinked()) current.link();
                                    }
                                });
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqhhxzq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card, player) {
                                    return Infinity;
                                },
                                targetInRange(card, player) {
                                    return true;
                                },
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && !get.tag(card, 'norepeat')) {
                                        var history = player.getAllHistory('useCard');
                                        if (history.length) {
                                            var cardx = history[history.length - 1].card;
                                            if (get.is.yayun(get.translation(cardx.name), get.translation(card.name))) return num + 20;
                                        }
                                    }
                                },
                            },
                            enable: 'phaseUse',
                            usable: 2,
                            selectCard() {
                                var player = _status.event.player;
                                return [Math.max(1, ui.selected.targets.length), Math.min(Infinity, game.players.length - 1)];
                            },
                            selectTarget() {
                                return ui.selected.cards.length;
                            },
                            filterTarget(card, player, target) {
                                return player != target;
                            },
                            check(card) {
                                var player = _status.event.player;
                                if (
                                    game.countPlayer(function (target) {
                                        return target != player && get.effect(target, 'tgtt_yxmjldsjjxqhhxzq', player, player) > 0;
                                    }) <= ui.selected.cards.length
                                )
                                    return 0;
                                return 7 - get.value(card);
                            },
                            position: 'he',
                            filterCard: true,
                            content() {
                                target.damage('nocard')._triggered = null;
                                player.recover();
                                player.changeHujia();
                            },
                            ai: {
                                result: {
                                    target(player, target) {
                                        var disbool = false;
                                        if (player.hasSkill('tgtt_yxmjpojungeji')) {
                                            if (target.countCards('j') && get.attitude(player, target) > 0) {
                                                return 1;
                                            }
                                            if (
                                                target.countCards('he', function (card) {
                                                    return card.name == 'tengjia' || get.value(card) > 0;
                                                })
                                            ) {
                                                disbool = true;
                                            }
                                        }
                                        var damage = get.damageEffect(target, player);
                                        if (disbool && get.attitude(player, target) < 0) return Math.min(-1, damage);
                                        return damage;
                                    },
                                },
                                order: 7,
                            },
                            group: ['tgtt_yxmjldsjjxqhhxzq_xie', 'tgtt_yxmjldsjjxqhhxzq_zou', 'tgtt_yxmjldsjjxqhhxzq_mo'],
                            subSkill: {
                                xie: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        global: 'damageEnd',
                                    },
                                    filter(event, player) {
                                        return event.source && event.source != player && event.player.classList.contains('dead') == false && player.countCards('he');
                                    },
                                    forced: true,
                                    checkx(event, player) {
                                        var att1 = get.attitude(player, event.player);
                                        var att2 = get.attitude(player, event.source);
                                        return att1 > 0 && att2 <= 0;
                                    },
                                    content() {
                                        'step 0';
                                        player.draw(trigger.num + 1);
                                        var next = player.chooseToDiscard('he', get.prompt2('tgtt_yxmjldsjjxqhhxzq_xie', trigger.player));
                                        var check = lib.skill.tgtt_yxmjldsjjxqhhxzq_xie.checkx(trigger, player);
                                        next.set('ai', function (card) {
                                            if (_status.event.goon) return 8 - get.value(card);
                                            return 0;
                                        });
                                        next.set('goon', check);
                                        ('step 1');
                                        if (result.bool) {
                                            trigger.player.judge();
                                        } else {
                                            event.finish();
                                        }
                                        ('step 2');
                                        switch (result.suit) {
                                            case 'heart':
                                                {
                                                    trigger.player.recover(trigger.num + 1);
                                                    trigger.player.turnOver(false);
                                                }
                                                break;
                                            case 'diamond':
                                                {
                                                    trigger.player.draw(trigger.num + 1);
                                                    trigger.player.changeHujia(trigger.num + 1);
                                                }
                                                break;
                                            case 'club':
                                                {
                                                    trigger.source.chooseToDiscard('he', trigger.num + 1, true);
                                                    trigger.source.changeHujia(-(trigger.num + 1));
                                                }
                                                break;
                                            case 'spade':
                                                {
                                                    trigger.source.loseHp(trigger.num + 1);
                                                    trigger.source.turnOver(true);
                                                }
                                                break;
                                        }
                                    },
                                    ai: {
                                        expose: 0.3,
                                    },
                                },
                                mo: {
                                    trigger: {
                                        player: ['respondEnd'],
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.card;
                                    },
                                    content() {
                                        player.draw();
                                    },
                                },
                                zou: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        var history = player.getAllHistory('useCard'),
                                            index = history.indexOf(event);
                                        if (index < 1) return false;
                                        var evt = history[index - 1];
                                        return get.is.yayun(get.translation(event.card.name), get.translation(evt.card.name));
                                    },
                                    filterx(event) {
                                        if (event.targets.length == 0) return false;
                                        var type = get.type(event.card);
                                        if (type != 'basic' && type != 'trick') return false;
                                        return true;
                                    },
                                    prompt2(event, player) {
                                        if (lib.skill.tgtt_yxmjldsjjxqhhxzq_zou.filterx(event)) return '摸一张牌,回复1点体力并获得1点护甲且令' + get.translation(event.card) + '额外结算一次？';
                                        return '摸一张牌,回复1点体力并获得1点护甲.';
                                    },
                                    check(event, player) {
                                        if (lib.skill.tgtt_yxmjldsjjxqhhxzq_zou.filterx(event)) return !get.tag(event.card, 'norepeat');
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                        if (lib.skill.tgtt_yxmjldsjjxqhhxzq_zou.filterx(trigger)) {
                                            trigger.effectCount++;
                                            game.log(trigger.card, '额外结算一次');
                                        }
                                    },
                                    init(player) {
                                        player.addSkill('tgtt_yxmjldsjjxqhhxzq_yayun');
                                        var history = player.getAllHistory('useCard');
                                        if (history.length) {
                                            player.addGaintag(
                                                player.getCards('h', (card) => {
                                                    return get.is.yayun(get.translation(card.name), get.translation(history[history.length - 1].card.name));
                                                }),
                                                'tgtt_yxmjldsjjxqhhxzq_yayun'
                                            );
                                        }
                                    },
                                    onremove(player) {
                                        player.removeSkill('tgtt_yxmjldsjjxqhhxzq_yayun');
                                        player.removeGaintag('tgtt_yxmjldsjjxqhhxzq_yayun');
                                    },
                                    _priority: 918,
                                },
                                yayun: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'useCard1',
                                    },
                                    filter(event, player) {
                                        return player.countCards('h') > 0;
                                    },
                                    forced: true,
                                    _priority: 918,
                                    content() {
                                        'step 0';
                                        player.removeGaintag('tgtt_yxmjldsjjxqhhxzq_yayun');
                                        ('step 1');
                                        player.addGaintag(
                                            player.getCards('h', (card) => {
                                                return get.is.yayun(get.translation(card.name), get.translation(trigger.card.name));
                                            }),
                                            'tgtt_yxmjldsjjxqhhxzq_yayun'
                                        );
                                    },
                                    _priority: 91800,
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqmyjxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'phaseBegin',
                            },
                            content() {
                                'step 0';
                                player.draw(2);
                                player.changeHujia();
                                player.addTempSkill('tgtt_fslbrenhe', { player: 'tgtt_yxmjpojungejiBefore' });
                                ('step 1');
                                var list = ['tgtt_fslbliuhan_chengzhi', 'tgtt_fslbliuhan_beifa', 'tgtt_fslbliuhan_fuming', 'tgtt_fslbliuhan_fulong', 'tgtt_fslbliuhan_yizhong', 'tgtt_fslbliuhan_xinghan'];
                                var list2 = list.randomRemove(2);
                                if (list2.includes('tgtt_fslbliuhan_fulong') && list2.includes('tgtt_fslbliuhan_yizhong')) {
                                    list2.randomRemove(1);
                                    list2.push(list.randomGet());
                                }
                                for (var skill of list2) {
                                    player.addSkills(skill);
                                    game.log(player, '解锁了<span style="font-family: yuanli">刘汉命运线</span>:', '#g【' + get.translation(skill) + '】');
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqddzmq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mod: {
                                aiOrder(player, card, num) {
                                    if (typeof card == 'object' && player == _status.currentPhase) {
                                        var evt = player.getLastUsed();
                                        if (evt && evt.card && get.color(evt.card) != 'none' && get.color(card) != 'none' && get.color(evt.card) != get.color(card)) {
                                            return num + 10;
                                        }
                                    }
                                },
                            },
                            trigger: {
                                player: 'useCard',
                            },
                            forced: true,
                            filter(event, player) {
                                if (_status.currentPhase != player) return false;
                                var evt = player.getLastUsed(1);
                                if (!evt) return false;
                                var color1 = get.color(evt.card);
                                var color2 = get.color(event.card);
                                return color1 && color2 && color1 != 'none' && color2 != 'none';
                            },
                            content() {
                                if (get.color(player.getLastUsed(1).card) != get.color(trigger.card)) {
                                    player.draw();
                                    player.changeHujia;
                                } else {
                                    player.recover();
                                    player.changeHujia();
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            group: ['tgtt_yxmjldsjjxqddzmq_chang', 'tgtt_yxmjldsjjxqddzmq_liji', 'tgtt_yxmjldsjjxqddzmq_1', 'tgtt_yxmjldsjjxqddzmq_2', 'tgtt_yxmjldsjjxqddzmq_3', 'tgtt_yxmjldsjjxqddzmq_4', 'tgtt_yxmjldsjjxqddzmq_5', 'tgtt_yxmjldsjjxqddzmq_6', 'tgtt_yxmjldsjjxqddzmq_7', 'tgtt_yxmjldsjjxqddzmq_8'],
                            subSkill: {
                                1: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 0;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['送给你小心心 送你花一朵'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['wuzhong', 'zengbin', 'sadouchengbing', 'dongzhuxianji', 'tongzhougongji'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                2: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 1;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['你在我生命中 太多的感动'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shan', 'tao', 'zong', 'xionghuangjiu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                3: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 2;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['你是我的天使 一路指引我'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'trick' && !get.tag(card, 'damage') > 0;
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                4: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 3;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['无论岁月变幻 爱你唱成歌'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shunshou', 'guohe'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                5: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 4;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['听我说谢谢你<br>因为有你 温暖了四季'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'equip';
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                6: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 5;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['谢谢你 感谢有你<br>世界更美丽'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['sha', 'jiu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                7: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 6;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['我要谢谢你 因为有你<br>爱常在心底'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return ['shandian', 'lebu', 'bingliang', 'fulei', 'caomu'].includes(card.name);
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                8: {
                                    trigger: {
                                        global: ['useCardAfter', 'respondAfter'],
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    audio: 'ext:太古天庭/audio/诱宵美九曲库:1',
                                    forced: true,
                                    filter(event, player) {
                                        return player.countMark('tgtt_yxmjldsjjxqddzmq_chang') == 7;
                                    },
                                    content() {
                                        player.getHistory('custom').push({ tgtt_yxmjldsjjxqddzmq_hight: true });
                                        player.say(['谢谢你 感谢有你<br>把幸福传递'].randomGet());
                                        player.addMark('tgtt_yxmjldsjjxqddzmq_chang', 1, false);
                                        var card = get.cardPile2(function (card) {
                                            return get.type(card) == 'trick' && get.tag(card, 'damage') > 0;
                                        });
                                        if (card) player.gain(card, 'gain2', false);
                                        else player.draw();
                                        lib.skill.tgtt_yxmjldsjjxqddzmq_chang.init(player);
                                        trigger.cancel();
                                        event.trigger('tgtt_yxmjldsjjxqddzmq_hight');
                                    },
                                },
                                chang: {
                                    mark: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    marktext: '大调',
                                    intro: {
                                        name2: '大调',
                                        markcount(storage, player) {
                                            var num = player.getHistory('custom', function (evt) {
                                                return evt.tgtt_yxmjldsjjxqddzmq_hight == true;
                                            }).length;
                                            return num;
                                        },
                                        content(storage, player) {
                                            var num = player.countMark('tgtt_yxmjldsjjxqddzmq_chang');
                                            var str = '<li>送给你小心心 送你花一朵';
                                            if (num == 1) {
                                                str = '<li>你在我生命中 太多的感动';
                                            }
                                            if (num == 2) {
                                                str = '<li>你是我的天使 一路指引我';
                                            }
                                            if (num == 3) {
                                                str = '<li>无论岁月变幻 爱你唱成歌';
                                            }
                                            if (num == 4) {
                                                str = '<li>听我说谢谢你<br>因为有你 温暖了四季';
                                            }
                                            if (num == 5) {
                                                str = '<li>谢谢你 感谢有你<br>世界更美丽';
                                            }
                                            if (num == 6) {
                                                str = '<li>我要谢谢你 因为有你<br>爱常在心底';
                                            }
                                            if (num == 7) {
                                                str = '<li>谢谢你 感谢有你<br>把幸福传递';
                                            }
                                            return str;
                                        },
                                    },
                                    init(player) {
                                        player.storage.tgtt_yxmjldsjjxqddzmq_chang = [];
                                    },
                                },
                                liji: {
                                    trigger: {
                                        player: 'tgtt_yxmjldsjjxqddzmq_hight',
                                    },
                                    filter(event, player) {
                                        var num = game.players.length > 4 ? 9 : 4;
                                        return (
                                            player.getHistory('custom', function (evt) {
                                                return evt.tgtt_yxmjldsjjxqddzmq_hight == true;
                                            }).length %
                                            num ==
                                            0
                                        );
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        'step 0';
                                        var next = player.chooseCardTarget({
                                            position: 'he',
                                            filterCard: lib.filter.cardDiscardable,
                                            filterTarget(card, player, target) {
                                                return player != target;
                                            },
                                            ai1(card) {
                                                return 8 - get.value(card);
                                            },
                                            ai2(target) {
                                                return -get.attitude(_status.event.player, target);
                                            },
                                            prompt: get.prompt('tgtt_yxmjldsjjxqddzmq_liji'),
                                            prompt2: '弃置一张牌,对一名其他角色造成一点伤害并令你回复1点体力且获得1点护甲',
                                        });
                                        ('step 1');
                                        if (result.bool) {
                                            player.discard(result.cards);
                                            player.recover();
                                            player.changeHujia();
                                            result.targets[0].damage('nocard');
                                        }
                                    },
                                    ai: {
                                        result: {
                                            target: -1.5,
                                        },
                                        tag: {
                                            damage: 1,
                                        },
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqxdhxq: {
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            trigger: {
                                player: 'phaseUseBegin',
                            },
                            filter(event, player) {
                                return !event.player.isMad();
                            },
                            content() {
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 99 };
                                }, player);
                                player.addSkill('tgtt_yxmjldsjjxqxdhxq_use');
                                player.addSkill('tgtt_yxmjldsjjxqxdhxq_cancel');
                                player.storage.tgtt_yxmjldsjjxqxdhxq_shixiao = true;
                                //ui.auto.hide();
                            },
                            group: ['tgtt_yxmjldsjjxqxdhxq_jie', 'tgtt_yxmjldsjjxqxdhxq_chong'],
                            subSkill: {
                                use: {
                                    mod: {
                                        cardUsable(card) {
                                            if (get.info(card) && get.info(card).forceUsable) return;
                                            return Infinity;
                                        },
                                        targetInRange() {
                                            return true;
                                        },
                                        aiOrder(player, card, num) {
                                            var name = card.name;
                                            if (name == 'tao') return num + 7 + Math.pow(player.getDamagedHp(), 2);
                                            if (name == 'sha') return num + 6;
                                            if (get.subtype(card) == 'equip2') return num + get.value(card) / 3;
                                        },
                                    },
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    silent: true,
                                    popup: false,
                                    filter(event, player) {
                                        if (!player.forceCountChoose || !player.forceCountChoose.phaseUse) {
                                            return false;
                                        }
                                        return true;
                                    },
                                    content() {
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                        if (player.forceCountChoose.phaseUse == 1) {
                                            var evt = event.getParent('phaseUse');
                                            if (evt && evt.name == 'phaseUse') {
                                                evt.skipped = true;
                                            }
                                        } else
                                            game.broadcastAll(function (player) {
                                                player.forceCountChoose.phaseUse--;
                                            }, player);
                                    },
                                    _priority: 1,
                                },
                                cancel: {
                                    trigger: {
                                        player: 'phaseUseEnd',
                                    },
                                    firstDo: true,
                                    silent: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    content() {
                                        game.broadcastAll(function (player) {
                                            delete player.forceCountChoose;
                                        }, player);
                                        //ui.auto.show();
                                        player.removeSkill('tgtt_yxmjldsjjxqxdhxq_use');
                                        player.removeSkill('tgtt_yxmjldsjjxqxdhxq_cancel');
                                        if (player.storage.tgtt_yxmjldsjjxqxdhxq_shixiao) player.storage.tgtt_yxmjldsjjxqxdhxq_shixiao = false;
                                    },
                                    forced: true,
                                    popup: false,
                                    _priority: 1,
                                },
                                jie: {
                                    trigger: {
                                        player: 'phaseJieshuBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    filter(event, player) {
                                        return player.getHistory('sourceDamage').length;
                                    },
                                    content() {
                                        player.draw(Math.min(9, player.getStat('damage')));
                                        player.recover(Math.min(9, player.getStat('damage')));
                                        player.changeHujia(Math.min(9, player.getStat('damage')));
                                    },
                                },
                                chong: {
                                    trigger: {
                                        player: ['useCardAfter', 'respondAfter'],
                                    },
                                    usable: 9,
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return player.countCards('h') && !player.storage.tgtt_yxmjldsjjxqxdhxq_shixiao;
                                    },
                                    content() {
                                        'step 0';
                                        var hs = player.getCards('h');
                                        if (hs.length) {
                                            player.discard(hs);
                                        }
                                        ('step 1');
                                        var suits = [];
                                        game.getGlobalHistory('cardMove', function (evt) {
                                            if (suits.length >= 4) return;
                                            if (evt.name == 'lose') {
                                                if (evt.position == ui.discardPile) {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') suits.add(i.suit);
                                                    }
                                                }
                                            } else {
                                                if (evt.name == 'cardsDiscard') {
                                                    for (var i of evt.cards) {
                                                        if (get.position(i, true) == 'd') suits.add(i.suit);
                                                    }
                                                }
                                            }
                                        });
                                        if (suits.length) player.draw(suits.length * 2 + 1);
                                    },
                                },
                            },
                            ai: {
                                threaten: 4.5,
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjldsjjxqkldykxq: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mod: {
                                cardUsable(card, player, num) {
                                    if (player.countCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq)) return Infinity;
                                },
                                targetInRange(card, player) {
                                    if (player.countCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq)) return true;
                                },
                                ignoredHandcard(card, player) {
                                    if (card.tgtt_yxmjldsjjxqkldykxq) return true;
                                },
                                cardDiscardable(card, player, name) {
                                    if (name == 'phaseDiscard' && card.tgtt_yxmjldsjjxqkldykxq) return false;
                                },
                            },
                            trigger: {
                                global: ['loseAfter'],
                                player: ['phaseBegin', 'damageEnd', 'phaseUseBegin'],
                            },
                            filter(event, player) {
                                if (event.name == 'lose') return event.KuangXiangDestroy;
                                return event.name != 'phaseUse' || player.countCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq && !card.tgtt_yxmjldsjjxqkldykxq_bian);
                            },
                            async content(event, trigger, player) {
                                if (trigger.name == 'lose') {
                                    await player.draw(trigger.cards.length);
                                    await player.recover(trigger.cards.length);
                                    await player.changeHujia(trigger.cards.length);
                                } else if (trigger.name == 'phase') {
                                    await lib.skill.tgtt_yxmjldsjjxqkldykxq.GainContent(9, 1, player);
                                } else if (trigger.name == 'phaseUse') {
                                    const cards = player.getCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq && !card.tgtt_yxmjldsjjxqkldykxq_bian);
                                    for (const card of cards) {
                                        const card2 = lib.card.list
                                            .filter((cardx) => {
                                                if (card.suit == cardx[0] && card.number == cardx[1] && card.name == cardx[2] && card.nature == cardx[3]) return false;
                                                return card.suit == cardx[0];
                                            })
                                            .randomGet();
                                        if (!card2) continue;
                                        game.addVideo('skill', player, ['tgtt_yxmjldsjjxqkldykxq', [false, get.cardInfo(card)]]);
                                        game.broadcastAll(
                                            (card, card2) => {
                                                card.init([card2[0], card2[1], card2[2], card2[3]]);
                                            },
                                            card,
                                            card2
                                        );
                                    }
                                } else await lib.skill.tgtt_yxmjldsjjxqkldykxq.GainContent(3, trigger.num || 1, player);
                            },
                            async GainContent(length, num, player) {
                                if (!_status.tgtt_youxiaomeijiu_card_css) {
                                    _status.tgtt_youxiaomeijiu_card_css = true;
                                    game.broadcastAll(() => {
                                        /*诱宵美九狂想卡牌颜色感谢活动武将提供的代码--来自欢杀神左慈*/
                                        lib.init.sheet(['.card.tgtt_yxmjldsjjxqkldykxq-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color: #0000FF;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
                                        /*诱宵美九狂想卡牌颜色*/
                                        lib.init.sheet(['.card.tgtt_yxmjldsjjxqkldykxq_bian-glow:before{', 'opacity:0.2;', 'box-shadow:rgba(0,0,0,0.2) 0 0 0 1px,rgb(255,109,12) 0 0 5px,rgb(255,0,0) 0 0 10px;', 'background-color:yellow;', '-webkit-filter:blur(5px);', 'filter:blur(5px);', '}'].join(''));
                                    });
                                }
                                game.addGlobalSkill('tgtt_yxmjldsjjxqkldykxq_gain');
                                while (num > 0 && player.hasSkill('tgtt_yxmjldsjjxqkldykxq')) {
                                    num--;
                                    let gains = [],
                                        count = 0;
                                    const sum = Math.min(length, 18 - player.countCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq));
                                    if (sum > 0) {
                                        while (sum - count > 0) {
                                            count++;
                                            const cardy = lib.card.list.randomGet();
                                            if (cardy) gains.push(game.createCard2(cardy[2], cardy[0], cardy[1], cardy[3]));
                                            else break;
                                        }
                                        if (gains.length) {
                                            game.broadcastAll((cards) => {
                                                for (const card of cards) {
                                                    card.tgtt_yxmjldsjjxqkldykxq = true;
                                                    card.classList.add('tgtt_yxmjldsjjxqkldykxq-glow');
                                                }
                                            }, gains);
                                            await player.gain(gains, 'draw');
                                            game.log(player, '获得了', '#y' + get.cnNumber(gains.length) + '张', '#g<狂想>牌');
                                        }
                                    }
                                    if (length - gains.length) {
                                        await player.draw(length - gains.length);
                                        await player.recover(length - gains.length);
                                        await player.changeHujia(length - gains.length);
                                    }
                                }
                            },
                            derivation: 'tgtt_yxmjkldykxq_faq',
                            group: ['tgtt_yxmjldsjjxqkldykxq_bian'],
                            subSkill: {
                                gain: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                    trigger: {
                                        player: 'gainAfter',
                                        global: 'loseAsyncAfter',
                                    },
                                    filter(event, player) {
                                        if (player.hasSkill('tgtt_yxmjldsjjxqkldykxq', null, false, false)) return false;
                                        return event.getg(player).some((card) => card.tgtt_yxmjldsjjxqkldykxq);
                                    },
                                    forced: true,
                                    popup: false,
                                    firstDo: true,
                                    forceDie: true,
                                    content() {
                                        const cards = trigger.getg(player).filter((card) => card.tgtt_yxmjldsjjxqkldykxq);
                                        game.log(cards, '被销毁了');
                                        player.lose(cards, ui.special).set('KuangXiangDestroy', true);
                                    },
                                },
                                bian: {
                                    enable: 'phaseUse',
                                    TaiguSkill: true,
                                    charlotte: true,
                                    onChooseToUse(event) {
                                        if (!game.online && event.type == 'phase' && !event.tgtt_yxmjldsjjxqkldykxq_bian_count) {
                                            const player = event.player;
                                            event.set('tgtt_yxmjldsjjxqkldykxq_bian_count', [player.getHistory('useSkill', (evt) => evt.skill == 'tgtt_yxmjldsjjxqkldykxq_bian').length, player.getCards('h', (card) => card.tgtt_yxmjldsjjxqkldykxq && !card.tgtt_yxmjldsjjxqkldykxq_bian), player.getCards('h', (card) => !card.tgtt_yxmjldsjjxqkldykxq && !card.hasGaintag('tgtt_yxmjldsjjxqkldykxq_biao'))]);
                                        }
                                    },
                                    filter(event, player) {
                                        const count = event.tgtt_yxmjldsjjxqkldykxq_bian_count;
                                        return count[0] <= 2 + 7 && count[1].length && count[2].length;
                                    },
                                    filterCard(card, player) {
                                        return (get.event('tgtt_yxmjldsjjxqkldykxq_bian_count')[1 + ui.selected.cards.length] || []).includes(card);
                                    },
                                    selectCard: 2,
                                    check(card) {
                                        if (ui.selected.cards.length && ui.selected.cards[0].suit == card.suit) return 5 + get.useful(card) * get.value(card);
                                        return get.useful(card) * get.value(card);
                                    },
                                    complexCard: true,
                                    position: 'h',
                                    lose: false,
                                    discard: false,
                                    delay: false,
                                    async content(event, trigger, player) {
                                        const cards = event.cards,
                                            suit = cards[0].suit;
                                        player.addGaintag([cards[1]], 'tgtt_yxmjldsjjxqkldykxq_biao');
                                        game.addVideo('skill', player, ['tgtt_yxmjldsjjxqkldykxq_bian', [false, get.cardInfo(cards[0])]]);
                                        game.broadcastAll((cards) => {
                                            cards[0].tgtt_yxmjldsjjxqkldykxq_bian = true;
                                            cards[0].init([cards[1].suit, cards[1].number, cards[1].name, cards[1].nature]);
                                            cards[0].classList.remove('tgtt_yxmjldsjjxqkldykxq-glow');
                                            cards[0].classList.add('tgtt_yxmjldsjjxqkldykxq_bian-glow');
                                        }, cards);
                                        if (suit == cards[1].suit) await lib.skill.tgtt_yxmjldsjjxqkldykxq.GainContent(1, 1, player);
                                    },
                                    ai: {
                                        order: 9,
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                                biao: {
                                    TaiguSkill: true,
                                    charlotte: true,
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjxiezouqu: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            marktext: '协',
                            intro: {
                                name: '协奏曲',
                                content() {
                                    return lib.translate.tgtt_yxmjxiezouqu_info;
                                },
                            },
                            onremove(player) {
                                player.unmarkSkill('tgtt_yxmjxiezouqu');
                            },
                            trigger: {
                                player: 'useCardAfter',
                            },
                            forced: true,
                            filter(event, player) {
                                if (event.getParent(2).skill == 'tgtt_yxmjxiezouqu') return false;
                                if (!['basic', 'trick'].includes(get.type(event.card))) return false;
                                if (
                                    !game.hasPlayer(function (current) {
                                        return lib.filter.targetEnabled2(event.card, event.player, current);
                                    })
                                )
                                    return false;
                                return event.targets;
                            },
                            content() {
                                'step 0';
                                event.players = game.filterPlayer(function (current) {
                                    return current != player;
                                });
                                event.first = false;
                                ('step 1');
                                event.current = event.players.shift();
                                var next = event.current.chooseToDiscard('he');
                                next.filterCard = function (card) {
                                    return get.color(card) == 'red' || get.type2(card) == get.type(_status.event.getTrigger().card);
                                };
                                next.ai = function (card) {
                                    if (_status.event.att <= 0) return 0;
                                    return 7 - get.value(card);
                                };
                                next.set('prompt', '是否响应' + get.translation(player) + '的【协奏曲】？');
                                next.set('prompt2', '弃置一张' + get.translation(get.type2(trigger.card)) + '或红色牌令' + get.translation(trigger.card) + '额外结算一次');
                                next.set('att', get.attitude(event.current, player));
                                ('step 2');
                                if (result.bool) {
                                    if (event.first == false) {
                                        event.first = true;
                                    }
                                    var next = player.chooseTarget(true);
                                    next.filterTarget = function (card, player, target) {
                                        var trigger = _status.event.getTrigger();
                                        return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                                    };
                                    next.ai = function (target) {
                                        var trigger = _status.event.getTrigger();
                                        return get.effect(target, trigger.card, trigger.player, _status.event.player);
                                    };
                                    next.set('prompt', '请为' + get.translation(trigger.card) + '选择额外结算的目标');
                                } else event.goto(4);
                                ('step 3');
                                if (result.bool) {
                                    player.useCard(trigger.card, trigger.cards, result.targets, true);
                                }
                                ('step 4');
                                if (event.players.length) {
                                    event.goto(1);
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjxingjinqu: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            marktext: '行',
                            intro: {
                                name: '行进曲',
                                content() {
                                    return lib.translate.tgtt_yxmjxingjinqu_info;
                                },
                            },
                            onremove(player) {
                                player.unmarkSkill('tgtt_yxmjxingjinqu');
                            },
                            trigger: {
                                source: 'damageSource',
                            },
                            forced: true,
                            content() {
                                'step 0';
                                player.draw(3);
                                player.changeHujia();
                                ('step 1');
                                player
                                    .chooseToDiscard('he', true)
                                    .set('ai', function (card) {
                                        if (get.color(card) == 'red') return 10 - get.value(card);
                                        return 7 - get.value(card);
                                    })
                                    .set('prompt2', '若你弃置的是红色牌,你下次摸牌时多摸一张牌并回复1点体力');
                                ('step 2');
                                if (result.bool && get.color(result.cards[0]) == 'red') {
                                    player.addAdditionalSkill('tgtt_yxmjxingjinqu', 'tgtt_yxmjxingjinqu_add');
                                }
                            },
                            subSkill: {
                                add: {
                                    mark: true,
                                    marktext: '进',
                                    intro: {
                                        name: '行进曲',
                                        content: '你下次摸牌时将额外摸一张牌并回复1点体力',
                                    },
                                    trigger: {
                                        player: 'drawBegin',
                                    },
                                    TaiguSkill: true,
                                    charlotte: true,
                                    forced: true,
                                    content() {
                                        trigger.num++;
                                        player.recover();
                                        player.removeAdditionalSkill('tgtt_yxmjxingjinqu');
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjlunwuqu: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            marktext: '轮',
                            intro: {
                                name: '轮舞曲',
                                content() {
                                    return lib.translate.tgtt_yxmjlunwuqu_info;
                                },
                            },
                            onremove(player) {
                                player.unmarkSkill('tgtt_yxmjlunwuqu');
                            },
                            enable: 'phaseUse',
                            usable: 9,
                            filter(event, player) {
                                var hs = player.getCards('hes');
                                if (!hs.length) return false;
                                for (var i = 0; i < hs.length; i++) {
                                    //if(game.checkMod(hs[i],player,'unchanged','cardEnabled2',player)===false) continue;
                                    if (get.color(hs[i]) == 'black') return true;
                                }
                                return false;
                            },
                            chooseButton: {
                                dialog(player) {
                                    var list = [];
                                    for (var i = 0; i < lib.inpile.length; i++) {
                                        if (get.type2(lib.inpile[i]) == 'trick') list.push(['锦囊', '', lib.inpile[i]]);
                                    }
                                    return ui.create.dialog('轮舞曲', [list, 'vcard']);
                                },
                                filter(button, player) {
                                    return lib.filter.filterCard({ name: button.link[2] }, player, _status.event.parent);
                                },
                                check(button) {
                                    var player = _status.event.player;
                                    var recover = 0,
                                        lose = 1,
                                        players = game.filterPlayer();
                                    for (var i = 0; i < players.length; i++) {
                                        if (get.damageEffect(players[i], player, player) > 0 && !players[i].hasSha()) {
                                            return button.link[2] == 'juedou' ? 2 : -1;
                                        }
                                        if (!players[i].isOut()) {
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
                                    }
                                    if (lose > recover && lose > 0) return button.link[2] == 'nanman' ? 1 : -1;
                                    if (lose < recover && recover > 0) return button.link[2] == 'taoyuan' ? 1 : -1;
                                    return button.link[2] == 'wuzhong' ? 1 : -1;
                                },
                                backup(links, player) {
                                    return {
                                        filterCard(card) {
                                            return get.color(card) == 'black';
                                        },
                                        position: 'hs',
                                        popname: true,
                                        check(card) {
                                            return 10 - get.value(card);
                                        },
                                        viewAs: { name: links[0][2] },
                                    };
                                },
                                prompt(links, player) {
                                    return '将一张黑色牌当' + get.translation(links[0][2]) + '使用';
                                },
                            },
                            ai: {
                                order: 10,
                                result: {
                                    player: 1,
                                },
                            },
                            group: ['tgtt_yxmjlunwuqu_jiaozi'],
                            subSkill: {
                                jiaozi: {
                                    trigger: {
                                        player: 'useCard',
                                    },
                                    forced: true,
                                    TaiguSkill: true,
                                    charlotte: true,
                                    filter(event, player) {
                                        return event.skill == 'tgtt_yxmjlunwuqu_backup';
                                    },
                                    content() {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                },
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjzhenhunqu: {
                            forced: true,
                            _priority: 91,
                            TaiguSkill: true,
                            charlotte: true,
                            mark: true,
                            marktext: '镇',
                            intro: {
                                name: '镇魂曲',
                                content() {
                                    return lib.translate.tgtt_yxmjzhenhunqu_info;
                                },
                            },
                            onremove(player) {
                                player.unmarkSkill('tgtt_yxmjzhenhunqu');
                            },
                            trigger: {
                                player: 'useCard',
                                target: 'useCardToPlayer',
                            },
                            forced: true,
                            filter(event, player) {
                                return event.card && get.color(event.card) == 'black';
                            },
                            content() {
                                'step 0';
                                var next = player.chooseTarget();
                                next.ai = function (target) {
                                    if (_status.event.player.attitudeTo(target) <= 0) return 0;
                                    return 5 / Math.max(target.hp + target.hujia, 1);
                                };
                                next.set('prompt', get.prompt2('tgtt_yxmjzhenhunqu'));
                                ('step 1');
                                if (result.bool) {
                                    player.line(result.targets, 'green');
                                    event.target = result.targets[0];
                                    if (player.isAlive()) {
                                        player.chooseBool('令' + get.translation(event.target) + '摸一张牌并回复一点体力,或取消且令其摸一张牌并获得一点护甲').ai = function () {
                                            return true;
                                        };
                                    } else event._result.bool = false;
                                } else event.finish();
                                ('step 2');
                                if (result.bool) {
                                    target.draw();
                                    target.recover();
                                } else {
                                    target.draw();
                                    target.changeHujia();
                                }
                            },
                            _priority: 9100,
                        },
                        tgtt_yxmjduzou: {
                            group: ['tgtt_yxmjduzou_luan'],
                            audio: 'ext',
                            enable: 'phaseUse',
                            charlotte: true,
                            TaiguSkill: true,
                            usable: 1,
                            filter(event, player) {
                                return true;
                            },
                            filterTarget(card, player, target) {
                                return target != player;
                            },
                            content() {
                                player.storage.tgtt_yxmjduzoua++;
                                player.draw();
                                player.recover();
                                player.changeHujia();
                                player.skip('phaseDiscard');
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target(player, target) {
                                        return -1;
                                    },
                                },
                            },
                            subSkill: {
                                luan: {
                                    trigger: {
                                        player: 'phaseEnd',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        var x = Math.floor(Math.random() * 90) + 9;
                                        var y = Math.floor(Math.random() * 100);
                                        return y <= x;
                                    },
                                    content() {
                                        game.countPlayer(function (current) {
                                            if (current == player || current.isFriendsOf(player)) {
                                                current.getBuff();
                                            }
                                            if (current != player && current.isEnemiesOf(player)) {
                                                current.getDebuff();
                                                current.goMad({ player: 'phaseEnd' });
                                            }
                                        });
                                    },
                                    _priority: 1,
                                },
                            },
                        },
                        tgtt_yxmjjiufan: {
                            trigger: {
                                player: ['useCard', 'respond'],
                            },
                            forced: true,
                            charlotte: true,
                            TaiguSkill: true,
                            filter(event, player) {
                                return ui.discardPile.childNodes.length;
                            },
                            mark: true,
                            marktext: '九',
                            intro: {
                                name2: '九',
                                mark(dialog, storage, player) {
                                    dialog.addText('注:图标的颜色代表弃牌堆中较多的颜色');
                                },
                            },
                            global: 'tgtt_yxmjjiufan_hint',
                            group: ['tgtt_yxmjjiufan_po', 'tgtt_yxmjjiufan_jue', 'tgtt_yxmjjiufan_lian'],
                            content() {
                                'step 0';
                                var mark = false;
                                var red = 0,
                                    black = 0;
                                for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                    var color = get.color(ui.discardPile.childNodes[i]);
                                    if (color == 'red') red++;
                                    if (color == 'black') black++;
                                }
                                if (red < black) {
                                    player.changeHujia();
                                    event.finish();
                                    if (get.color(trigger.card) == 'red') mark = true;
                                } else if (red > black) {
                                    player.recover();
                                    event.finish();
                                    if (get.color(trigger.card) == 'black') mark = true;
                                    event.logged = true;
                                } else {
                                    if (!event.isMine() && !event.isOnline()) game.delayx();
                                    player
                                        .chooseTarget(get.prompt('tgtt_yxmjjiufan'), '弃置一名角色的一张牌', (card, player, target) => {
                                            return target.countDiscardableCards(player, 'he') > 0;
                                        })
                                        .set('ai', (target) => {
                                            return get.effect(target, { name: 'guohe_copy2' }, _status.event.player);
                                        });
                                }
                                if (mark) {
                                    player.draw(2);
                                    event.logged = true;
                                }
                                ('step 1');
                                if (result.bool) {
                                    player.recover();
                                    player.changeHujia();
                                    var target = result.targets[0];
                                    player.line(target);
                                    player.discardPlayerCard(target, 'he', true);
                                }
                            },
                            mod: {
                                aiOrder(player, card, num) {
                                    if (get.itemtype(card) != 'card') return;
                                    var len = ui.discardPile.childNodes.length;
                                    if (!len) {
                                        var type = get.type(card);
                                        if (type == 'basic' || type == 'trick') {
                                            if (player.getDamagedHp() > 0) {
                                                return num + (get.color(card) == 'red' ? 15 : 10);
                                            }
                                            return num + 10;
                                        }
                                        return;
                                    }
                                    if (len > 40) return;
                                    var red = 0,
                                        black = 0;
                                    for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                        var color = get.color(ui.discardPile.childNodes[i]);
                                        if (color == 'red') red++;
                                        if (color == 'black') black++;
                                    }
                                    if (red == black) {
                                        var type = get.type(card);
                                        if (type == 'basic' || type == 'trick') {
                                            if (player.getDamagedHp() > 0) {
                                                return num + (get.color(card) == 'red' ? 15 : 10);
                                            }
                                            return num + 10;
                                        }
                                        return;
                                    } else {
                                        var color = get.color(card);
                                        if ((color == 'red' && red < black) || (color == 'black' && red > black)) return num + 10;
                                    }
                                },
                            },
                            subSkill: {
                                jue: {
                                    trigger: {
                                        player: 'loseAfter',
                                        global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        var evt = event.getl(player);
                                        return evt && evt.hs && evt.hs.length;
                                    },
                                    content() {
                                        'step 0';
                                        var evt = trigger.parent;
                                        var effects = [
                                            [
                                                'useCard',
                                                function () {
                                                    'step 0';
                                                    var targets = game.filterPlayer((current) => {
                                                        return current.countDiscardableCards(player, 'he') && current != player;
                                                    });
                                                    if (!targets.length) event.finish();
                                                    else
                                                        player
                                                            .chooseTarget('九番:弃置其他角色一张牌', false, (card, player, target) => {
                                                                return _status.event.targets.includes(target);
                                                            })
                                                            .set('targets', targets)
                                                            .set('ai', (target) => {
                                                                return get.effect(target, { name: 'guohe_copy2' }, _status.event.player);
                                                            });
                                                    ('step 1');
                                                    if (result.bool) {
                                                        var target = result.targets[0];
                                                        player.line(target);
                                                        player.discardPlayerCard(target, 'he', true);
                                                    }
                                                },
                                            ],
                                            [
                                                'respond',
                                                function () {
                                                    player.changeHujia();
                                                },
                                            ],
                                            [
                                                'discard',
                                                function () {
                                                    player.recover();
                                                },
                                            ],
                                            [
                                                'other',
                                                function () {
                                                    player.addSkill('tgtt_yxmjjiufan_damage');
                                                    player.addMark('tgtt_yxmjjiufan_damage', 1, false);
                                                    game.log(player, '下一次对其他角色造成的伤害', '#g+1');
                                                },
                                            ],
                                        ];
                                        var name = evt.name;
                                        if (trigger.name == 'loseAsync') name = evt.type;
                                        var list = ['useCard', 'respond', 'discard', 'other'];
                                        if (!list.includes(name)) name = 'other';
                                        for (var i = 0; i < 1 + player.countMark('tgtt_yxmjjiufan_add'); i++) {
                                            if (!list.length) break;
                                            if (!list.includes(name)) name = list.randomRemove(1)[0];
                                            if (name == 'useCard') list.remove('useCard');
                                            for (var effect of effects) {
                                                if (effect[0] == name) {
                                                    list.remove(name);
                                                    var next = game.createEvent('tgtt_yxmjjiufan_' + name);
                                                    next.player = player;
                                                    next.setContent(effect[1]);
                                                    break;
                                                }
                                            }
                                        }
                                    },
                                },
                                damage: {
                                    trigger: {
                                        source: 'damageBegin1',
                                    },
                                    forced: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        return event.player != player;
                                    },
                                    content() {
                                        trigger.num += player.countMark('tgtt_yxmjjiufan_damage');
                                        player.removeSkill('tgtt_yxmjjiufan_damage');
                                    },
                                    intro: {
                                        content: '下次对其他角色造成伤害时,该伤害+#',
                                    },
                                },
                                po: {
                                    trigger: {
                                        global: 'phaseUseBegin',
                                    },
                                    filter(event, player) {
                                        return player.hp > 1;
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    check(event, player) {
                                        var num1 = player.countCards('h');
                                        var num2 = player.countCards('h', (card) => player.hasValueTarget(card));
                                        var num3 = player.getHandcardLimit();
                                        if (player.isDamaged()) {
                                            return num2 > 1 || num1 - num2 - num3 > 0;
                                        } else {
                                            return num2 > 2 + Math.max(0, 3 - player.hp) || (player.hp > 2 && num1 - num2 - num3 > 2);
                                        }
                                    },
                                    content() {
                                        player.loseHp();
                                        player.draw(2);
                                        player.addTempSkill('tgtt_yxmjjiufan_add');
                                        player.addMark('tgtt_yxmjjiufan_add', 1, false);
                                    },
                                },
                                add: {
                                    charlotte: true,
                                    TaiguSkill: true,
                                },
                                lian: {
                                    trigger: {
                                        target: 'useCardToTargeted',
                                    },
                                    charlotte: true,
                                    TaiguSkill: true,
                                    forced: true,
                                    filter(event, player) {
                                        var type = get.type(event.card);
                                        return type == 'basic' || type == 'trick';
                                    },
                                    content() {
                                        'step 0';
                                        player.draw();
                                        player.recover();
                                        player.changeHujia();
                                        ('step 1');
                                        player.discardPlayerCard('hej', trigger.player, false);
                                    },
                                    ai: {
                                        effect: {
                                            target(card, player, target, current) {
                                                if (card.name == 'sha' && current < 0) return 0.7;
                                            },
                                        },
                                    },
                                },
                                hint: {
                                    trigger: {
                                        global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
                                    },
                                    forced: true,
                                    popup: false,
                                    lastDo: true,
                                    forceDie: true,
                                    forceOut: true,
                                    charlotte: true,
                                    TaiguSkill: true,
                                    filter(event, player) {
                                        if (event._tgtt_yxmjjiufan_checked) return false;
                                        event._tgtt_yxmjjiufan_checked = true;
                                        var cards = event.getd();
                                        if (!cards.filterInD('d').length) return false;
                                        return true;
                                    },
                                    markColor: [
                                        ['rgba(18, 4, 4, 0.75)', 'red'],
                                        ['rgba(18, 4, 4, 0.75)', 'rgb(200, 200, 200)'],
                                        ['rgba(241, 42, 42, 0.75)', 'black'],
                                    ],
                                    content() {
                                        'step 0';
                                        var red = 0,
                                            black = 0;
                                        for (var i = 0; i < ui.discardPile.childNodes.length; i++) {
                                            var color = get.color(ui.discardPile.childNodes[i]);
                                            if (color == 'red') red++;
                                            if (color == 'black') black++;
                                        }
                                        if (trigger.name.indexOf('lose') == 0) {
                                            var cards = trigger.getd().filterInD('d');
                                            for (var i = 0; i < cards.length; i++) {
                                                var color = get.color(cards[i]);
                                                if (color == 'red') red++;
                                                if (color == 'black') black++;
                                            }
                                        }
                                        game.broadcastAll(
                                            function (ind) {
                                                var bgColor = lib.skill.tgtt_yxmjjiufan_hint.markColor[ind][0],
                                                    text = '<span style="color: ' + lib.skill.tgtt_yxmjjiufan_hint.markColor[ind][1] + '">九</span>';
                                                for (var player of game.players) {
                                                    if (player.marks.tgtt_yxmjjiufan) {
                                                        player.marks.tgtt_yxmjjiufan.firstChild.style.backgroundColor = bgColor;
                                                        player.marks.tgtt_yxmjjiufan.firstChild.innerHTML = text;
                                                    }
                                                }
                                            },
                                            Math.sign(black - red) + 1
                                        );
                                    },
                                },
                            },
                        },
                    },
                    character: {
                        tgtt_srgod: ['male', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_srgodheianshoulie', 'tgtt_srgtslytongxing', 'tgtt_srgodtianzao', 'tgtt_srgodqinlv', 'tgtt_srgodtianen', 'tgtt_srgodtianzhou', 'tgtt_srgtslyhuhuan', 'tgtt_srqyxmjjichu'], ['zhu']],
                        tgtt_tsliuying: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_tsliuyingshijunzuoyou', 'tgtt_srgtslytongxing', 'tgtt_tsliuyingdishe', 'tgtt_tsliuyingseyun', 'tgtt_tsliuyingtianci', 'tgtt_tsliuyinghuixiang', 'tgtt_srgtslyhuhuan'], []],
                        tgtt_yuanyizhezhi: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_yyzzrilun', 'tgtt_yyzzguangjian', 'tgtt_yyzztianyi', 'tgtt_yyzzyifan', 'tgtt_yyzzpaoguan'], []],
                        tgtt_bentiaoerya: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_bteypianzhi', 'tgtt_bteybianxie', 'tgtt_bteyshenshi', 'tgtt_bteyerfan', 'tgtt_bteyniegao'], []],
                        tgtt_shiqikuangsan: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_sqksshishilingyu', 'tgtt_sqkskekedi', 'tgtt_sqkssanfan'], []],
                        tgtt_bingyachuansisinai: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_bycssnbingjie', 'tgtt_bycssnbingkui', 'tgtt_bycssndongkai', 'tgtt_bycssnsifan'], []],
                        tgtt_wuheqinli: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_whqlzaisheng', 'tgtt_whqlzhuolan', 'tgtt_whqljiangui', 'tgtt_whqlwufan'], []],
                        tgtt_xinggongliucan: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_xglczhangkong', 'tgtt_xglcliufan'], []],
                        tgtt_jingyeqizui: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_jyqzyanzaomonv', 'tgtt_jyqzqianbianwanhuajing', 'tgtt_jyqzqifan'], []],
                        tgtt_fengshibawu: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_fsbwtongtian', 'tgtt_fsbwtianjijichizhe', 'tgtt_fsbwcangqiongtunshi', 'tgtt_fsbwjufengshuangzi', 'tgtt_fsbwbafan'], []],
                        tgtt_bawuyejushi: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_fsbwtongtian', 'tgtt_fsbwyjsguanchuanzhe', 'tgtt_fsbwbafan'], []],
                        tgtt_bawuxixian: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_fsbwtongtian', 'tgtt_fsbwxxshufuzhe', 'tgtt_fsbwbafan'], []],
                        tgtt_youxiaomeijiu: ['female', 'taigu', '4/4/4', ['tgtt_srgtslykabalazhili', 'tgtt_yxmjpojungeji', 'tgtt_yxmjduzou', 'tgtt_yxmjjiufan'], []],
                    },
                    characterIntro: {
                        tgtt_srgod: 'GOD,一个曾在绝望中挣扎的人,有着一段不为人知的过去,在被来自异时空的少女拯救后,与之同行,两人一起冒险,探索世界,闯出了不小的名气,潜被人们称之为【无冕之王】.此后,来自未来的潜或者说是GOD,未来的无冕之王,也是裁决之神,为了拯救被深渊毁灭的未来世界,通过开启真理之门,解放卡巴拉生命之树的力量,回到现在,以自身全部存在力于现世布局,对抗【深渊的使者】,逆转被毁灭的未来,告知现在的潜未来会发生的一切,同时提醒潜若不做出选择便会失去自己的珍宝,潜望向身边有着可爱笑容的少女,似乎明白了GOD的意思,接受了来自未来的力量',
                        tgtt_tsliuying: '流萤,来自异时空的神秘少女,患有名为<失熵症>的古怪病症,这种病症会让人各种意义上的慢慢消失,如同存在力被吞噬一般,待人十分温柔,曾经拯救了绝望中的潜并与之同行,两人一起冒险,探索世界,闯出了不小的名气,流萤被人们称之为【真理之后】,此后,在未来的GOD来临时,潜藏在流萤体内的神秘力量也在逐渐苏醒,她与他的相遇,一切都是那么的熟悉,就仿佛过去发生过,未来亦会发生一样,谁也不知道,接下来两人之间又会发生什么',
                        tgtt_yuanyizhezhi: '鸢一折纸,一头白发,是像人偶一样的无性格少女.身份是陆上自卫队的对精灵部队AST的队员,阶级是上士.幼时绝望之际被潜所救,对他产生依赖感,并且抱有好感,有关他的情报从身高、体重等详细的健康状态均确实掌握着,识别名为【天使】,后通过卡巴拉生命之树与潜签订契约,成为【王冠】的掌管者',
                        tgtt_bentiaoerya: '本条二亚,世界上第二个被确认的精灵,知晓初始精灵的存在,识别名为【修女】.拥有一头灰色短发,蓝绿色眼睛,常佩戴一副红色眼镜,自称<只爱二次元>.约28年前成为精灵,年龄约45岁,因为成为精灵肉体停止增长而保留了17岁的外貌.生活自理能力极差,是个酒鬼.魔王<神蚀篇帙>被维斯考特夺走,因体内有残余灵结晶加上潜及时补充灵力,得以保命,苏醒后,告知众人所有精灵其实是人类变的,后通过卡巴拉生命之树与潜签订契约,成为【智慧】的掌管者',
                        tgtt_shiqikuangsan: '时崎狂三,是潜所遭遇的唯一没有在初次就封印灵力的<最恶的精灵>,识别名为【梦魇】,在偶然现身于人间的众多精灵当中,是能够从邻界以自己的意志现身的特异存在,甚至会有意地去杀人.为了有足够的灵力能让<刻刻帝>的<十二之弹>发动,回到三十年前始源精灵的出现并亲自解决她,而不停地杀人和吸收别人的时间,后通过卡巴拉生命之树与潜签订契约,成为【理解】的掌管者',
                        tgtt_bingyachuansisinai: '冰芽川四糸乃,长相宛若法国娃娃般美丽的蓝发少女,有着梦幻般的外貌和娇小的身材,外表年纪与五河琴里相近.第二位登场的精灵,识别名为【隐居者】.生性温驯而胆小怕生,几乎不敢与人直接对话.左手拿着的兔子型的手偶四糸奈是独立的人格,也是她最好的朋友.喜欢和潜在一起,后通过卡巴拉生命之树与潜签订契约,成为【慈悲】的掌管者',
                        tgtt_wuheqinli: '五河琴里,既是潜的义妹,也是精灵组织<Ratatoskr>的司令官,同时还是拥有精灵之力的人类,识别代号【炎魔】.能够通过变换黑白两色的发带来改变性格,白色发带为粘人爱哭的<妹妹模式>;黑色发带为抖S、毒舌的<司令官模式>.从小与哥哥潜还有姐姐五河士织一同长大,因此彼此之间培养了良好的感情,在潜眼中是一个粘人的妹妹.喜欢潜,对潜的好感值一直都处于最高状态,后通过卡巴拉生命之树与潜签订契约,成为【严厉】的掌管者',
                        tgtt_xinggongliucan: '星宫六喰,拥有着金黄色长卷发及琥珀般的眼睛,身材娇小但胸部丰满.灵装是一件粉紫色旗袍,语气古风,识别名为【星宫】.是宇宙中的精灵,因为封闭了自己的心灵而无法理解寂寞的心情,对在地球生活毫无兴趣.十分重视她的金色长发,后通过卡巴拉生命之树与潜签订契约,成为【美丽】的掌管者',
                        tgtt_jingyeqizui: '镜野七罪,潜遇见的第七只精灵,识别名为【女巫】,有着像在绿色的长发下嵌着翠玉石般瞳孔的20多岁左右的如同人造品般的女性外表,但这是靠灵力变身后的样子,其本体则是一个和四糸乃一样娇小的萝莉体型,有着一头未经梳理而显得蓬松散乱绿发的纤细少女,有着过分自卑的心理,对任何事情(事物)都抱有消极的态度(四糸乃与潜除外),有着十分严重的被害妄想症,心里承受能力极差,个性孤僻,后通过卡巴拉生命之树与潜签订契约,成为【美丽】的掌管者',
                        tgtt_fengshibawu: '风侍八舞,初始的<飓风之子>,是由八舞耶俱矢和八舞夕弦融合而成的集合体,准确来说是从两人变回一人,识别名为【狂战士】,后通过卡巴拉生命之树与潜签订契约,成为【荣耀】的掌管者',
                        tgtt_bawuyejushi: '八舞耶俱矢,第五位登场的精灵,是被称为<狂战士>的风之精灵中的一个,识别名为【狂战士】.有着橙色的头发和水银色的瞳孔,头发在脑后盘起,体态较为纤细,个性活泼,总是一种女王般高高在上高傲强势的态度,还会用一种像戏剧般的措辞说话,不过这只是为了让自己有作为精灵的威严而故意为之.在情绪激动时会变回普通的说话方式,兴奋时有<～da shi>作为语尾的口癖,后通过卡巴拉生命之树与潜签订契约,成为【荣耀】的掌管者',
                        tgtt_bawuxixian: '八舞夕弦,第五位登场的精灵,是被称为<狂战士>的风之精灵中的一个,识别名为【狂战士】.金橙色的长发绑成三股长辫的少女,体态较为丰满,有着和八舞耶俱矢比起来更好的身材,但常常无精打采似的眯起眼睛,与耶倶矢个性相反般的冷静温驯.灵装的枷锁位置和耶俱矢的相反,绑在左手腕和左脚腕.谈吐的方式很文静并有自己的方式,在说话的开头会以两个字来表示主旨,以这样奇特的方式说话,后通过卡巴拉生命之树与潜签订契约,成为【荣耀】的掌管者',
                        tgtt_youxiaomeijiu: '诱宵美九,出现在潜面前的第六个精灵,识别名为【歌姬】.平时生活中是一名学生,有着紫银的头发和浅紫色的瞳,以及说话不紧不慢的特点.真实身份是和五河琴里一样被赋予精灵之力的人类.有着只是去搭话好感度就会降到蟑螂之下的极度厌恶男性的性格,非常喜欢女性,即百合的精灵,后通过卡巴拉生命之树与潜签订契约,成为【基础】的掌管者',
                    },
                    translate: {
                        tgtt_srgod: '梦GOD',
                        tgtt_srgod_prefix: '梦',
                        tgtt_tsliuying: '梦流萤',
                        tgtt_tsliuying_prefix: '梦',
                        tgtt_yuanyizhezhi: '起鸢一折纸',
                        tgtt_yuanyizhezhi_prefix: '起',
                        tgtt_bentiaoerya: '起本条二亚',
                        tgtt_bentiaoerya_prefix: '起',
                        tgtt_shiqikuangsan: '起时崎狂三',
                        tgtt_shiqikuangsan_prefix: '起',
                        tgtt_bingyachuansisinai: '起冰芽川四糸乃',
                        tgtt_bingyachuansisinai_prefix: '起',
                        tgtt_wuheqinli: '承五河琴里',
                        tgtt_wuheqinli_prefix: '承',
                        tgtt_xinggongliucan: '承星宫六喰',
                        tgtt_xinggongliucan_prefix: '承',
                        tgtt_jingyeqizui: '承镜野七罪',
                        tgtt_jingyeqizui_prefix: '承',
                        tgtt_fengshibawu: '承风侍八舞',
                        tgtt_fengshibawu_prefix: '承',
                        tgtt_bawuyejushi: '承八舞耶俱矢',
                        tgtt_bawuyejushi_prefix: '承',
                        tgtt_bawuxixian: '承八舞夕弦',
                        tgtt_bawuxixian_prefix: '承',
                        tgtt_youxiaomeijiu: '转诱宵美九',
                        tgtt_youxiaomeijiu_prefix: '转',
                        tgtt_srgtslykabalazhili: '卡巴拉之力',
                        tgtt_srgtslykabalazhili_info: '<font color=orange>锁定技,</font><br><li>①你的武将牌不能被翻面,横置或替换;<br><li>②当你减少体力上限时,改为增加等量体力上限并回复等量体力,体力值与体力上限不能发生负向变动且不能成为其他角色使用牌的目标直到你的下回合结束;<br><li>③当你受到伤害或失去体力前,有50%的概率体力值与体力上限不能发生负向变动且不能成为其他角色使用牌的目标直到你的下回合结束',
                        tgtt_srgtslytongxing: '同行',
                        tgtt_srgtslytongxing_info: '<font color=orange>锁定技,</font><font color=#f00>此技能不会失效,你的主将为【GOD】/【流萤】,副将不为【流萤】/【GOD】且场上没有【流萤】/【GOD】时生效.</font><br>1.游戏开始时,若存活人数大于2,你选择一名身份不为主公的其他角色:<br><li>①若你的身份为内奸,则将你的阵营改为与其相同;<br><li>②若你的身份不为内奸,则将其的阵营改为与你相同;<br><li>③若该角色不为【GOD】/【流萤】,则你将其替换为【GOD】/【流萤】(你的武将牌为【GOD】时,目标为【流萤】,你的武将牌为【流萤】时,目标为【GOD】),若此时是你的回合则立刻开始【GOD】/【流萤】的回合<br><font color=#f00>(你的武将牌为【GOD】时,目标为【流萤】,你的武将牌为【流萤】时,目标为【GOD】,此后描述均使用【GOD】/【流萤】代替你)</font>;<br>2.【GOD】/【流萤】对【流萤】/【GOD】造成的伤害无效并改为回复等量体力;<br>3.每当【GOD】/【流萤】造成伤害时,可以令【流萤】/【GOD】摸等量的牌或回复等量体力;<br>4.每当【GOD】/【流萤】受到伤害时,【流萤】/【GOD】可以弃置等量的牌或失去等量的体力令【GOD】/【流萤】免受此伤害;<br>5.【GOD】/【流萤】死亡时,可以令【流萤】/【GOD】获得【GOD】/【流萤】的所有技能',
                        tgtt_srgtslyhuhuan: '呼唤',
                        tgtt_srgtslyhuhuan_info: '<font color=orange>锁定技,</font><br>出牌阶段,若场上没有【流萤】/【GOD】,此时你的主将为【GOD】/【流萤】且你的副将不为【流萤】/【GOD】或你的副将为【GOD】/【流萤】且你的主将不为【流萤】/【GOD】,你可以召唤【流萤】/【GOD】作为你的副/主将',
                        tgtt_srgodheianshoulie: '黑暗狩猎',
                        tgtt_srgodheianshoulie_info: '<font color=orange>锁定技,</font><font color=#f00>此技能负面效果对【流萤】无效.</font><br>1.每轮游戏或你的狩猎阶段开始时,你令所有其他角色失去1/10存在力(向上取整),你回复1/10存在力(向上取整),此时,若你:<br><li>①体力上限不是全场最高,增加1点体力上限;<br><li>②体力值未满,回复1点体力;<br><li>③护甲值小于体力上限,获得1点护甲;<br><li>④手牌数不是全场最多,摸两张牌;<br><li>⑤装备区内装备数不为全场最多,从牌堆中随机使用一张装备牌;<br>2.每当你回复存在力时,若你的存在力到达上限,则改为增加等量存在力上限',
                        tgtt_srgodtianzao: '天造',
                        tgtt_srgodtianzao_info: '<font color=orange>施法技,</font><br>出牌阶段限一次,你可以失去1点体力,选择施法时长,倒计时结束后你亮出牌堆顶上3X张牌并获得之,对一名其他角色造成X点伤害(X为你选择施法的时长)',
                        tgtt_srgodqinlv: '琴律',
                        tgtt_srgodqinlv_info: '<font color=orange>韵律技,</font><br>出牌阶段限一次:<br><li>平:你回复1点体力并摸一张牌;<br><li>仄:你增加1点体力上限并获得1点护甲;<br><li>转韵:你发动【天造】结算后',
                        tgtt_srgodtianen: '天恩',
                        tgtt_srgodtianen_info: '<font color=orange>限定技,</font><br>当一名角色进入濒死状态时,你可令其依次执行以下所有项:<br><li>①增加3点体力上限;<br><li>②回复所有体力;<br><li>③复原武将牌;<br><li> ④废除判定区;<br><li>⑤复原装备区;<br><li>⑥手牌数补至体力上限;<br><li>⑦获得9点护甲;<br><li>⑧该角色获得技能【天恩】(若该角色是【天恩】的拥有者则失效);<br><li>⑨你增加1点体力上限,回复1点体力并摸两张牌,获得18点护甲',
                        tgtt_srgodtianzhou: '天咒',
                        tgtt_srgodtianzhou_info: '<font color=orange>转换技,锁定技,</font><br>当你使用一张牌时,<br><li>阴:你随机弃置X-1张手牌并获得1点护甲;<br><li>阳:你摸X+1张牌并回复1点体力(X为你本阶段内发动过【天咒】的次数且至多等于你的体力值)',
                        tgtt_srtsfengyin: '封印',
                        tgtt_srtsfengyin_info: '',
                        tgtt_srqyyzzwangguan: '王冠',
                        tgtt_srqyyzzwangguan_info: '<font color=orange>锁定技,</font><br>1.你使用基本牌或非指向性非延时性锦囊牌可以指定任意数量的目标,若你不是此牌目标但可以成为此牌目标,则你成为此牌额外目标并摸两张牌;<br>2.你使用牌无距离限制且当你的体力值大于2时,使用牌无次数限制,否则令你受到的属性伤害和非基本牌伤害无效且结算后你回复1点体力并获得1点护甲;<br>3.进入游戏时,开始记录时间并根据时间条件发动对应效果且一名角色行动后生效:<br><li>①每过去10秒,你回复1点体力;<br><li>②每过去20秒,你摸一张牌;<br><li>③每过去30秒,你获得1点护甲;<br><li>④每过去40秒,你获得一张基本牌;<br><li>⑤每过去50秒,你获得一张锦囊牌;<br><li>⑥每过去60秒,你获得一张装备牌',
                        tgtt_srqbteyzhihui: '智慧',
                        tgtt_srqbteyzhihui_info: '<font color=orange>锁定技,</font><br><li>①每当你摸牌/弃牌/体力值或体力上限发生变动后,你获得等量<智慧>标记且你拥有技能【理性】;<br><li>②其他角色使用牌指定你为目标时,你可以移除1枚<智慧>标记并令你先对其使用一张随机同名牌',
                        tgtt_srqbteylixing: '理性',
                        tgtt_srqbteylixing_info: '<font color=orange>锁定技,</font><br><li>①每当一名角色使用指定角色为目标的基本牌或普通锦囊牌后,你可以移去1枚<智慧>标记令此牌额外结算一次;<br><li>②锦囊牌对你造成的伤害无效且改为摸等量的牌并回复等量体力;<br><li>③每当你使用锦囊牌时,获得1点护甲',
                        tgtt_srqsqkslijie: '理解',
                        tgtt_srqsqkslijie_info: '<font color=orange>锁定技,</font><br>准备阶段开始时,你可以观看牌堆顶的十二张牌,选择其中任意张点数不同的牌置入弃牌堆并为与这些牌的点数相同的【裁决之枪】进行一次填充,你获得其余的牌(不能选择与【裁决之枪】点数不同的牌且每个【裁决之枪】发动时消耗一次填充)',
                        tgtt_srqsqkslijie_XII: '腊枪',
                        tgtt_srqsqkslijie_XII_info: '<font color=orange>锁定技,</font><br>立即发动,可以复活一名角色,该角色增加2点体力上限,回满体力,获得4点护甲并摸4张牌,不能成为其他角色使用牌的目标且体力值与体力上限不能发生负向变动直到其下回合结束',
                        tgtt_srqsqkslijie_XI: '冬枪',
                        tgtt_srqsqkslijie_XI_info: '<font color=orange>锁定技,</font><br>立即发动,可以令一名角色翻面且其不能成为牌的合法目标,直到其下个回合开始时',
                        tgtt_srqsqkslijie_X: '十枪',
                        tgtt_srqsqkslijie_X_info: '<font color=orange>锁定技,</font><br>立即发动,观看一名其他角色的身份牌,你摸一张牌并回复1点体力,直到你下次发动该【裁决之枪】',
                        tgtt_srqsqkslijie_IX: '九枪',
                        tgtt_srqsqkslijie_IX_info: '<font color=orange>锁定技,</font><br>立即发动,抽取九张随机武将牌并获得其中至多九项技能,直到你下次发动该【裁决之枪】',
                        tgtt_srqsqkslijie_VIII: '八枪',
                        tgtt_srqsqkslijie_VIII_info: '<font color=orange>锁定技,</font><br>立即发动,令一名角色获得体力值数的护甲并摸等量的牌',
                        tgtt_srqsqkslijie_VII: '七枪',
                        tgtt_srqsqkslijie_VII_info: '<font color=orange>锁定技,</font><br>立即发动,令一名其他角色于本回合内非太古技失效且不能使用或打出手牌',
                        tgtt_srqsqkslijie_VI: '六枪',
                        tgtt_srqsqkslijie_VI_info: '<font color=orange>锁定技,</font><br>一名角色回合开始时,你可以记录其此时的牌数,本回合结束时,其将牌数调整至记录值张数',
                        tgtt_srqsqkslijie_V: '五枪',
                        tgtt_srqsqkslijie_V_info: '<font color=orange>锁定技,</font><br>一名角色准备阶段开始时,你可以摸五张牌,将三张手牌置于牌堆顶',
                        tgtt_srqsqkslijie_IV: '四枪',
                        tgtt_srqsqkslijie_IV_info: '<font color=orange>锁定技,</font><br>当一名角色体力值或体力上限发生变动时,你可以防止之并摸一张牌',
                        tgtt_srqsqkslijie_III: '三枪',
                        tgtt_srqsqkslijie_III_info: '<font color=orange>锁定技,</font><br>立即发动,令一名角色摸三张牌并可以使用一张牌,你回复1点体力',
                        tgtt_srqsqkslijie_II: '二枪',
                        tgtt_srqsqkslijie_II_info: '<font color=orange>锁定技,</font><br>一名角色的判定/摸牌/出牌/弃牌阶段开始前,你可以令其跳过此阶段,你获得1点护甲',
                        tgtt_srqsqkslijie_I: '一枪',
                        tgtt_srqsqkslijie_I_info: '<font color=orange>锁定技,</font><br>当一名角色使用一张【杀】或普通锦囊牌时,你可以令此牌不能被响应且你摸一张牌',
                        tgtt_srqbycssncibei: '慈悲',
                        tgtt_srqbycssncibei_info: '<font color=orange>锁定技,</font><br><li>①每当一名角色进入濒死状态,若你的体力值大于1或有护甲值,则你可以失去1点体力(体力值不大于1且有护甲时,改为失去1点护甲),令该角色将体力值回复至1点,获得等量护甲且你与其各摸等量的牌(至多为4);<br><li>②每名角色每回合限一次,当一名角色失去体力,受到伤害或减少体力上限时,你可以取消之并改为你与其各回复等量体力,获得等量护甲并摸等量的牌(至多为4);<br><li>③当一名角色即将死亡时,若其未成为过此效果的目标,你可以防止其死亡,将其体力上限和体力值复原至游戏开始时的状态,你获得4点护甲,摸四张牌并将其移出游戏4个回合;<br><li>④限定技,出牌阶段,你可以复活一名角色,该角色增加4点体力上限,回满体力,获得4点护甲并摸4张牌,不能成为其他角色使用牌的目标且体力值与体力上限不能发生负向变动直到其下回合结束',
                        tgtt_srqwhqlyanli: '严厉',
                        tgtt_srqwhqlyanli_info: '<font color=orange>锁定技,</font><br>1.你于以下时机创建一个随机的触发技能:<br><li>①每轮游戏开始时;<br><li>②当你增加/减少体力上限前;<br><li>③当你造成/受到伤害时;<br><li>④当你回复/失去体力后;<br><li>⑤你的回合开始/结束时;<br>你选择一项:<br><li>①将此技能赠予一名其他角色;<br><li>②获得此技能(以此法创建的技能每回合限发动五次);<br>2.每名角色回合结束时,你可令一名其他角色随机执行以下一到五项:<br><li>①失去1点体力并弃置两张牌;<br><li>②减少1点体力上限并受到1点神性伤害;<br><li>③将【乐不思蜀】,【兵粮寸断】,【闪电】,【草木皆兵】,【洪水】,【火山】和【浮雷】各一张贴入判定区;<br><li>④武将牌翻面并横置;<br><li>⑤非太古技失效直到下回合开始',
                        tgtt_srqxglcmeili: '美丽',
                        tgtt_srqxglcmeili_info: '<font color=orange>锁定技,</font><br><li>①每当其他角色对你使用牌时,你可以摸一张牌并记录此牌名直到你的回合开始,你不能成为记录牌的目标;<br><li>②出牌阶段限X次,你可以增加或移除一种智囊牌且你使用智囊牌无次数距离限制(X为你已损失的体力值+你本回合造成的伤害+1,你不能移除基础智囊牌);<br><li>③每当一名角色使用智囊牌时,你摸一张牌并回复1点体力且其他角色对你使用的智囊牌无效并令你获得1点护甲;<br><li>④你的阶段不能被跳过且你每回合受到的伤害,失去的体力,减少的体力上限总和至多为游戏轮数',
                        tgtt_srqjyqzshengli: '胜利',
                        tgtt_srqjyqzshengli_info: '<font color=orange>锁定技,</font><br>1.若你不因被任意角色击杀而死亡,则你所在阵营获得游戏胜利;<br>2.每轮游戏开始/你减少体力上限/失去体力/受到伤害后,进行一次判定,结果为:<br><li>①<font color=red>♥️️</font>️,获得【水】标记;<br><li>②<font color=red>♦️️</font>️,获得【火】标记;<br><li>③<font color=black>♣️️</font>️,获得【土】标记;<br><li>④<font color=black>♠️️</font>️,获得【风】标记;<br><li>⑤每轮游戏开始或你的回合开始前,若你已集齐4个标记,则你所在阵营获得游戏胜利;<br>3.你死亡前,根据以下条件,满足一种则你所在阵营获得游戏胜利: <br><li>①你的手牌数不为全场最多;<br><li>②你的装备数不为全场最多;<br><li>③你的体力上限不大于7;<br><li>④你的体力值不小于0;<br><li>⑤你有护甲值;<br><li>⑥你装备区内没有装备牌;<br><li>⑦你没有手牌;<br>4.游戏开始时,你获得365枚<胜利>标记,每当满足以下一种条件时,你有7%~77%的概率失去1~7枚<胜利>标记,当你的胜利标记小于等于0时,你所在阵营获得游戏胜利:<br><li>①每当一名角色造成/受到伤害后;<br><li>②每当一名角色体力上限及体力值发生变动后;<br><li>③每当一名角色区域内牌数发生变动后',
                        tgtt_srqjyqzshenglishui: '水',
                        tgtt_srqjyqzshenglishui_info: '<font color=orange>锁定技,</font><br>胜利之光,已获得【水】!',
                        tgtt_srqjyqzshenglihuo: '火',
                        tgtt_srqjyqzshenglihuo_info: '<font color=orange>锁定技,</font><br>胜利之光,已获得【火】!',
                        tgtt_srqjyqzshenglitu: '土',
                        tgtt_srqjyqzshenglitu_info: '<font color=orange>锁定技,</font><br>胜利之光,已获得【土】!',
                        tgtt_srqjyqzshenglifeng: '风',
                        tgtt_srqjyqzshenglifeng_info: '<font color=orange>锁定技,</font><br>胜利之光,已获得【风】!',
                        tgtt_srqfsbwrongyao: '荣耀',
                        tgtt_srqfsbwrongyao_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段限两次,你可以选择一张手牌并复制之,当你使用或打出此复制牌结算结束后,你获得之,你本回合不能再使用或打出此牌;<br><li>②每当你使用或打出一张牌时,你摸Y张牌(Y为你除判定区外的区域内与此牌点数相同的牌的数量且至少为1);<br><li>③当一张非虚拟的基本牌或普通锦囊牌结算完成后,你可以弃置一张牌,视为使用一张虚拟的、无距离和次数限制的同名牌(此牌有属性,🃏和点数且一张锦囊牌的效果结算完成前,不能发动【荣耀③】,所以【荣耀③】不能无懈【无懈可击】也不能用【闪】)',
                        tgtt_srqyxmjjichu: '基础',
                        tgtt_srqyxmjjichu_info: '<font color=orange>锁定技,</font><br>1.每当一名角色使用或打出牌时,若你本局游戏内使用或打出过的牌数和:<br><li>①为2的倍数,你摸一张牌;<br><li>②为3的倍数,你从牌堆中获得一张【杀】或【闪】;<br><li>③为4的倍数,你从牌堆中获得一张基本牌;<br><li>④为5的倍数,你从牌堆中获得一张【桃】或【酒】;<br><li>⑤为6的倍数,你获得一张锦囊牌;<br><li>⑥为7的倍数,你从牌堆中获得一张非基本牌;<br><li>⑦为8的倍数,你从牌堆中获得一张【决斗】或【无中生有】;<br><li>⑧为9的倍数,你从牌堆中获得一张装备牌;<br><li>⑨为10的倍数,你回复1点体力;<br><li>⑩为11的倍数时,你获得1点护甲(可获得对应的衍生替换牌若牌堆中已无符合的牌则不获得);<br>2.回合开始时,你获得如下效果直到下个回合开始前:<br><li>阴:你的黑色牌不计入手牌上限,无次数距离限制且当你失去黑色牌时,你可以对一名角色造成1点神性伤害,若其已受伤,减少1点体力上限并失去1点护甲;<br><li>阳:你的红色牌不计入手牌上限,无次数距离限制且当你失去红色牌时,你可以令一名角色回复1点体力,若其未受伤,增加1点体力上限并获得1点护甲;<br>3.你的:<br><li>①奇数回合开始时,你不能成为其他角色使用牌的目标;<br><li>②偶数回合开始时,你的体力值及体力上限不能发生负向变动;<br>直到下回合开始前',
                        tgtt_tsliuyingshijunzuoyou: '侍君左右',
                        tgtt_tsliuyingshijunzuoyou_info: '<font color=orange>锁定技,</font><font color=#f00>此技能负面效果对【GOD】无效且当【GOD】在场时,你激活③④⑤⑥效果(③效果激活的是使用牌无次数及距离限制).</font><br><li>①当你失去牌时,你解除横置状态,若有其他角色未横置则将其横置且你获得1点护甲;<br><li>②每当一名其他角色于你的回合内失去牌时,你废除其一个装备栏且你获得1点护甲;<br><li>③你使用牌无次数和距离限制且你的【杀】和单体锦囊牌可以额外指定X名目标(X为你的体力上限);<br><li>④当你造成伤害时,若你有护甲,你令伤害翻2倍;<br><li>⑤你造成的伤害不低于你已损失的体力值;<br><li>⑥防止你受到大于当前体力上限的伤害且改为增加等量体力上限,回复等量体力并获得等量护甲;<br><li>⑦回合开始时,若你的护甲值大于1,你将体力上限改为Y并回复Y点体力(Y为你的体力上限与你的护甲值之差的绝对值+1);<br><li>⑧出牌阶段开始时,若你的护甲值大于1,你回复等于护甲值的体力,将护甲值扣减至1',
                        tgtt_tsliuyingdishe: '地设',
                        tgtt_tsliuyingdishe_info: '<font color=orange>施法技,</font><br>出牌阶段限一次,你可以弃置一张牌,选择施法时长,倒计时结束后你摸X张牌并可以免疫X次受到的伤害/流失体力/失去体力上限(X为你选择施法的时长)',
                        tgtt_tsliuyingseyun: '瑟韵',
                        tgtt_tsliuyingseyun_info: '<font color=orange>韵律技,</font><br>出牌阶段限一次:<br><li>平:你可以令一名其他角色交给你一张牌,若其牌数不小于你,你增加1点体力上限并回复1点体力;<br><li>仄:你可以交给一名其他角色一张牌,若其牌数不大于你,其减少1点体力上限并失去1点体力 ;<br><li>转韵:你发动【地设】结算后',
                        tgtt_tsliuyingtianci: '天赐',
                        tgtt_tsliuyingtianci_info: '<font color=orange>限定技,</font><br>回合开始时,你可以声明一种花色,在本局游戏中,此花色的牌:<br><li>①不占用你的摸牌数;<br><li>②不占用你的手牌上限;<br><li>③不占用你回合内使用的次数;<br><li>④你增加3点体力上限,回复3点体力,摸三张牌并获得18点护甲',
                        tgtt_tsliuyingtiancia: '天赐',
                        tgtt_tsliuyingtiancia_info: '',
                        tgtt_tsliuyinghuixiang: '回响',
                        tgtt_tsliuyinghuixiang_info: '<font color=orange>转换技,锁定技,</font><br>出牌阶段开始时, <br><li>阴:你从【金蝉脱壳】、【增兵减灶】、【随机应变】、【火烧连营】、【水淹七军】、【草船借箭】、【趁火打劫】、【调兵遣将】、【釜底抽薪】、【隔岸观火】、【舌战群儒】、【水攻】、【偷梁换柱】、【望梅止渴】、【诱敌深入】、【洪水】、【火山】中随机获得三张,你增加1点体力上限,摸两张牌并获得技能【运筹】直到你下个回合开始;<br><li>阳:你从【兵临城下】、【趁火打劫】、【刮骨疗毒】、【推心置腹】、【草船借箭】、【弃甲曳兵】、【声东击西】、【增兵减灶】、【草木皆兵】、【浮雷】、【解甲归田】、【树上开花】、【逐鹿天下】、【出其不意】、【洞烛先机】、【随机应变】、【逐近弃远】中随机获得三张,你回复1点体力,获得1点护甲并获得技能【决胜】直到你的下个出牌阶段开始',
                        tgtt_tsliuyingjuesheng: '决胜',
                        tgtt_tsliuyingjuesheng_info: '<font color=orange>锁定技,</font><br>当有角色受到伤害后,你可以令其从【无懈可击】、【金蝉脱壳】、【趁火打劫】、【刮骨疗毒】中随机获得两张,你从【推心置腹】、【草船借箭】、【弃甲曳兵】、【声东击西】、【增兵减灶】、【草木皆兵】、【浮雷】、【解甲归田】、【树上开花】、【逐鹿天下】、【出其不意】、【洞烛先机】、【随机应变】、【逐近弃远】中随机获得三张',
                        tgtt_tsliuyingyunchou: '运筹',
                        tgtt_tsliuyingyunchou_info: '<font color=orange>锁定技,</font><br>其他角色准备阶段开始时,你可以对其使用一张【杀】,你从【火烧连营】,【水淹七军】、【草船借箭】、【趁火打劫】、【调兵遣将】、【釜底抽薪】、【隔岸观火】、【舌战群儒】、【水攻】、【偷梁换柱】、【望梅止渴】、【诱敌深入】、【洪水】、【火山】中随机获得三张',
                        tgtt_yyzzrilun: '日轮',
                        tgtt_yyzzrilun_info: '<font color=orange>锁定技,</font><br><li>①回合开始时,你可以视为对所有敌方角色使用一张【南蛮入侵】;<br><li>②回合结束时,你可以视为对所有敌方角色使用一张【万箭齐发】',
                        tgtt_yyzzguangjian: '光剑',
                        tgtt_yyzzguangjian_info: '<font color=orange>锁定技,</font><br>你使用【杀】无次数限制且你的【杀】均视为【神杀】:<br><li>①你使用的<font color=black>♠️️</font>️【杀】额外结算一次;<br><li>②你使用的<font color=red>♥️️</font>【杀】伤害+1;<br><li>③你使用的<font color=black>♣️️</font>️【杀】无视防具;<br><li>④你使用的<font color=red>♦️️</font>【杀】不可以被响应',
                        tgtt_yyzztianyi: '天翼',
                        tgtt_yyzztianyi_info: '<font color=orange>锁定技,</font><br><li>①其他角色计算与你的距离时始终为∞;<br><li>②你计算与其他角色的距离时始终为1;<br><li>③当你于回合内使用牌指定角色为目标时,若目标数大于1或目标角色已受伤,每有一名目标角色可以被弃置牌,你摸一张牌并可以弃置该角色一张牌;<br><li>④当你于回合外成为其他角色使用牌的目标时,若目标数大于1或你已受伤,你可以弃置一张牌令其对你无效并获得1点护甲',
                        tgtt_yyzzpaoguan: '炮冠',
                        tgtt_yyzzpaoguan_info: '<br><li>①出牌阶段限一次,你可以将两张同花色牌当做任意全体锦囊牌使用;<br><li>②出牌阶段限一次,若你本回合内造成过伤害,则你可以弃置一张牌,对一名角色造成2~4点神性伤害',
                        tgtt_yyzzpaoguana: '炮冠',
                        tgtt_yyzzpaoguana_info: '',
                        tgtt_yyzzyifan: '一番',
                        tgtt_yyzzyifan_info: '<font color=orange>锁定技,</font><br><li>①当你受到伤害,失去体力或减少体力上限时,有50%的概率改为回复1点体力并摸一张牌;<br><li>②摸牌阶段,你额外摸X+1张牌且你的手牌上限+X(X为你已损失的体力值+1)',
                        tgtt_bteypianzhi: '篇帙',
                        tgtt_bteypianzhi_info: '<font color=orange>锁定技,</font><br><li>①牌堆中剩下的牌和其他角色的手牌始终对你可见且你可以将牌堆顶上的X张牌如手牌般使用或打出(X为你已损失的体力值+3且至多为14);<br><li>②当一名角色的回合开始时,若你未发动过此技能,你增加1点体力上限,摸两张牌并观看其他角色的身份;<br><li>③你的准备/判定/弃牌/结束阶段开始时,你可以选择一名其他角色,随机将一张【乐不思蜀】,【兵粮寸断】,【闪电】,【洪水】,【火山】,【浮雷】或【草木皆兵】置入该角色的判定区内',
                        tgtt_bteypianzhia: '篇',
                        tgtt_bteypianzhia_info: '',
                        tgtt_bteyniegao: '嗫告',
                        tgtt_bteyniegao_info: '出牌阶段限五次,你可以创造一张基本/锦囊/装备/地图/法术/机关/食物/神器牌,获得一张同名牌并令我方全体随机获得一个正面效果且令敌方全体随机获得一个负面效果',
                        tgtt_bteybianxie: '编写',
                        tgtt_bteybianxie_info: '<font color=orange>锁定技,</font><br>1.每回合限五次,当你使用一张非转化且有对应实体的牌结算完后,你可以进行判定,若结果与你使用的牌:<br><li>①花色相同,你收回你使用的牌;<br><li>②颜色不同,你可以使用判定牌;<br>2.每当一名角色的判定牌生效前,你可以亮出牌堆顶上的十四张牌并选择一张作为判定牌且你回复1点体力,此判定不可被更改',
                        tgtt_bteyshenshi: '神蚀',
                        tgtt_bteyshenshi_info: '<font color=orange>锁定技,</font><br><li>①你于回合外使用牌无距离限制且可额外选择任意目标;<br><li>②当你获得牌后,若此次获得张数大于上一次,你须使用一张牌并回复1点体力或弃置一张牌并失去1点体力',
                        tgtt_bteyerfan: '二番',
                        tgtt_bteyerfan_info: '<font color=orange>锁定技,</font><br><li>①游戏开始时,你废除你的判定区;<br><li>②每当你对其他角色造成伤害后,其选择废除一个装备栏,若其装备栏均已废除,则改为减少1点体力上限;<br><li>③每当你受到1点来源不为你且有伤害来源的伤害后,你获得1点护甲,伤害来源受到1点来自你的神性伤害并弃置两张牌',
                        tgtt_sqksshishilingyu: '食时领域',
                        tgtt_sqksshishilingyu_info: '<font color=orange>锁定技,</font><br><li>①游戏开始时,你令所有其他角色各弃置一张手牌,你获得等量的时间值;<br><li>②你的回合开始时,你获得12点时间值;<br><li>③每当一名角色死亡时,若击杀者为你,你获得等于该角色体力上限的时间值,否则你获得3点时间值;<br><li>④每当你对一名角色造成伤害时,你获得与该角色体力值的绝对值相等的时间值;<br><li>⑤你每拥有1点时间值,你计算与其他角色的距离时便-1,其他角色计算与你的距离时便+1;<br><li>⑥每名角色回合结束时,若你的时间值为0,你须弃置一张牌并失去1点体力',
                        tgtt_sqkskekedi: '刻刻帝',
                        tgtt_sqkskekedi_info: '<font color=orange>锁定技,</font><br>你可以失去技能所需点数的时间值,并在合适的时机使用不同的能力',
                        tgtt_sqksyizhidan: '一之弹',
                        tgtt_sqksyizhidan_info: '出牌阶段限一次,你可以失去1点时间值并执行一个额外的摸牌阶段',
                        tgtt_sqkserzhidan: '二之弹',
                        tgtt_sqkserzhidan_info: '<font color=orange>锁定技,</font><br>其他角色的回合开始或回合结束时,你可以失去1点时间值并选择一项:<br><li>①令该角色弃置两张牌;<br><li>②令该角色执行一个额外的弃牌阶段',
                        tgtt_sqkssanzhidan: '三之弾',
                        tgtt_sqkssanzhidan_info: '出牌阶段限三次,你可以失去1点时间值并选择一名角色,若该角色有未发动的觉醒技则你令其中一个觉醒技无视条件发动,否则该角色增加1点体力上限,回复1点体力并获得1点护甲',
                        tgtt_sqkssizhidan2: '四之弹',
                        tgtt_sqkssizhidan2_info: '',
                        tgtt_sqkssizhidan: '四之弹',
                        tgtt_sqkssizhidan_info: '<font color=orange>锁定技,</font><br>当一名角色体力值或体力上限发生变动时,你可以失去X点时间值防止此次变动(X为本轮发动此技能的次数且至少为1)',
                        tgtt_sqkswuzhidan: '五之弹',
                        tgtt_sqkswuzhidan_info: '<font color=orange>锁定技,</font><br>每名角色的准备阶段开始时,你可以失去5点时间值,进行一次观星X(X为存活角色数+你已损失的体力值且至少为5)并从牌堆底部摸两张牌,你获得1点护甲并回复1点体力',
                        tgtt_sqksliuzhidan: '六之弹',
                        tgtt_sqksliuzhidan_info: '<font color=orange>限定技,</font><br>当你进入濒死时,你可以弃置自身区域内的所有牌,重置你的武将牌并回复你所有的装备栏,将你的体力上限和体力值回复至游戏开始时并获得起始手牌和装备,你获得相当于场上其他存活角色数量的时间值',
                        tgtt_sqksliuzhidan2: '六之弹',
                        tgtt_sqksliuzhidan2_info: '',
                        tgtt_sqksqizhidan: '七之弹',
                        tgtt_sqksqizhidan_info: '<font color=orange>锁定技,</font><br>每当你造成伤害后,你可以失去7点时间值并将受到伤害的角色移出游戏一回合,你摸两张牌并获得1点护甲',
                        tgtt_sqksqizhidan2: '七之弹',
                        tgtt_sqksqizhidan2_info: '',
                        tgtt_sqksbazhidan: '八之弹',
                        tgtt_sqksbazhidan_info: '<font color=orange>锁定技,</font><br>当你使用牌指定一名其他角色为唯一目标时,若此牌为基本牌或非延时类锦囊牌,你可以消耗8点时间值为此牌额外指定至多八名在你攻击范围内的角色为目标',
                        tgtt_sqksjiuzhidan: '九之弹',
                        tgtt_sqksjiuzhidan_info: '出牌阶段,你可以消耗9点时间值并选择一名其他角色,该角色的下回合由你控制',
                        tgtt_sqksshizhidan: '十之弹',
                        tgtt_sqksshizhidan_info: '每轮限十次,当一名角色使用牌时,若此牌不为装备或延时类锦囊,且此牌不为【闪】或【无懈可击】,你可以消耗1点时间值令此牌额外结算一次',
                        tgtt_sqksshiyizhidan: '十一之弹',
                        tgtt_sqksshiyizhidan_info: '出牌阶段,你可以消耗11点时间值并选择一名角色,你的回合结束后该角色进行一个额外的回合',
                        tgtt_sqksshierzhidan: '十二之弹',
                        tgtt_sqksshierzhidan_info: '出牌阶段,你可以消耗12点时间值并选择一名角色,该角色跳过其下个回合',
                        tgtt_sqkssanfan: '三番',
                        tgtt_sqkssanfan_info: '<font color=orange>锁定技,</font><br><li>①每当你失去时间值时,有33%的概率不失去,否则你摸一张牌;<br><li>②每当你于回合外失去牌时,你获得等量时间值',
                        tgtt_bycssnbingjie: '冰结',
                        tgtt_bycssnbingjie_info: '<font color=orange>锁定技,</font><br><li>①你使用带<伤害>标签的牌无视防具并回复1点体力;<br><li>②你的锦囊牌造成的伤害视为寒冰伤害;<br><li>③防止你受到的非属性伤害和寒冰伤害并改为摸等量的牌并获得等量护甲;<br><li>④当有角色受到1点寒冰伤害后,你摸一张牌,若你体力值未满,则你回复1点体力,否则获得1点护甲',
                        tgtt_bycssnbingkui: '冰傀',
                        tgtt_bycssnbingkui_info: '<font color=orange>锁定技,</font><br><li>①每当有其他角色于你的回合内内失去了牌,你获得1点冰冻值;<br><li>②每当你于回合外失去牌后,获得1点冰冻值;<br><li>③出牌阶段,你可以选择一名角色,消耗等于该角色体力值(至多为四)的冰冻值并对其造成1点寒冰伤害,该角色武将牌翻至背面,非太古技失效且不能使用或打出手牌,直到其下回合开始',
                        tgtt_bycssndongkai: '冻铠',
                        tgtt_bycssndongkai_info: '<font color=orange>锁定技,</font><br>1.你的普通【杀】均视为为【冰杀】,你使用【冰杀】无次数和距离限制;<br>2.每当你造成寒冰伤害时(若目标没有牌则直接执行选项二),修改原效果为:<br><li>①选项一,弃置目标两张牌并防止此伤害;<br><li>②选项二,造成伤害;<br><li>③背水!消耗1点冰冻值(没有则失去1点护甲,若均没有则执行选项二),令目标受到伤害并弃置其两张牌;<br>3.每阶段一次,当你额外摸牌时,你可以减少任意张额外摸牌数,视为对等量其他角色使用了一张【冰杀】',
                        tgtt_bycssnsifan: '四番',
                        tgtt_bycssnsifan_info: '<font color=orange>锁定技,</font><br><li>①回合开始时,你从牌堆中获得一张【南蛮入侵】和【万箭齐发】,获得等于场上势力数的冰冻值;<br><li>②你的护甲值大于体力值时,你的【杀】均视为【冰杀】且你使用牌无距离和次数限制;<br><li>③你摸牌时,若你的手牌数不大于你的体力上限的4倍,则令数值+1,此时若你的护甲值达到3/5,改为令此数值+2/3',
                        tgtt_whqlzaisheng: '再生',
                        tgtt_whqlzaisheng_info: '<font color=orange>锁定技,</font><br><li>①你受到伤害或失去体力时,该数值-1且你摸一张牌;<br><li>②你受到伤害或失去体力后,你回复1点体力并摸两张牌;<br><li>③每轮游戏开始或你的回合结束时,你回复X点体力,溢出值改为获得等量护甲(X为你已损失的体力值/2,向上取整且至少为1)',
                        tgtt_whqlzhuolan: '灼烂',
                        tgtt_whqlzhuolan_info: '<font color=orange>锁定技,</font><br><li>①你造成的非属性伤害视为火焰伤害且你造成火焰伤害时,该数值+1;<br><li>②出牌阶段限一次,你可以弃置任意张牌,对至多X名角色各造成Y点火焰伤害(X为弃置的黑色牌数+1,Y为弃置的红色牌数+1),若你以此法即将造成的伤害大于等于5点,你将体力值调整至1点;<br><li>③回合开始时,你可以对一名其他角色造成1点火焰伤害并摸两张牌',
                        tgtt_whqljiangui: '歼鬼',
                        tgtt_whqljiangui_info: '<font color=orange>锁定技,</font><br><li>①游戏开始时,你获得5枚<歼鬼>标记并摸5张牌;<br><li>②当你受到伤害,失去体力后,你获得等量<歼鬼>标记;<br><li>③当你造成伤害时,你可以移去X枚<歼鬼>标记,令伤害数值+X(X至多为你的体力值),若该伤害不为火焰伤害,你额外移去1枚<歼鬼>标记,将伤害改为火焰伤害;<br><li>④其他角色造成火焰伤害时,你可以移去1枚<歼鬼>标记并令该伤害+1',
                        tgtt_whqlwufan: '五番',
                        tgtt_whqlwufan_info: '<font color=orange>锁定技,</font><br><li>①你受到的火焰伤害无效,若你已受伤,则改为回复等量体力,否则你摸两张牌;<br><li>②每当一名角色受到火焰伤害后,你获得等量<歼鬼>标记,回复1点体力并获得1点护甲;<br><li>③每当你于回合外失去牌时,你进行一次判定,若为红色,你选择对一名角色造成1点火焰伤害,否则,你摸一张牌并获得1枚<歼鬼>标记',
                        tgtt_xglcfengjiezhu: '封解主',
                        tgtt_xglcfengjiezhu_info: '<font color=orange>锁定技,</font><br>1.闭:出牌阶段限一次,你可以对攻击范围内或有<开>标记的一名角色的一个时机上锁,若放弃上锁,则可进行一次摸牌阶段;<br><font color=orange>(时机包括:<br><li>①始:回合;<br><li>②准:准备阶段;<br><li>③判:判定阶段;<br><li>④摸:摸牌阶段;<br><li>⑤出:出牌阶段;<br><li>⑥弃:弃牌阶段;<br><li>⑦结:结束阶段;<br><li>⑧增:增加体力上限;<br><li>⑨回:回复体力;<br><li>⑩造:造成伤害;<br><li>⑪减:减少体力上限;<br><li>⑫失:失去体力;<br><li>⑬受:受到伤害;<br><li>⑭濒:濒死;<br><li>⑮死:死亡;<br><li>⑯获:获得牌;<br><li>⑰置:弃置牌;<br><li>⑱翻:翻面;<br><li>⑲横:横置)</font> <br>2.开:出牌阶段限一次,你可以令一名角色获得1枚<开>(至多1枚),可选择是否将其一个被上锁的时机解锁或是令自己执行一个摸牌阶段;<br>3.放:出牌阶段限六次,你可以令一名角色获得一枚<放>标记(拥有<放>标记的角色摸牌数量翻倍,使用牌无次数距离限制);<br>4.解:出牌阶段限一次,你可以指定一名其他角色,选择其一个技能令该技能在本局游戏无效化;<br>5.你对拥有<开>的角色使用牌无距离限制',
                        tgtt_xglczhangkong: '掌控',
                        tgtt_xglczhangkong_info: '<font color=orange>锁定技,</font><br>1.当你成为一名其他角色使用桃以外的牌的目标时,你可以弃置一张牌,若如此做你取消此牌的所有目标并将之封印,获得1点护甲;<br>2.被你封印的牌具有如下效果:<br><li>①你可以将之如手牌般使用或打出;<br><li>②不计入手牌上限与计数(特殊限定除外)且只对自己可见;<br><li>③无法被其他角色选中;<br>3.每当你失去牌后,若你的牌数量不大于6,则你回复1点体力并摸一张牌且回合内你计算与其他角色的距离始终为1;<br>4.回合结束时,你可以执行一个额外的摸牌或出牌阶段且你的回合内,其他角色的防具失效',
                        tgtt_xglcliufan: '六番',
                        tgtt_xglcliufan_info: '<font color=orange>锁定技,</font><br><li>①其他角色出牌阶段开始或回合结束时,若其牌数大于体力值,你可以令其将牌弃置至与体力值相等且至少弃置一张;<br><li>②摸牌阶段,你可以放弃摸牌,改为随机获得牌堆中牌各不相同且副类别不相同的X张牌(X为你已损失的体力值与1之和的6倍);<br><li>③当一名其他角色于回合内使用牌指定你为目标时,你可以令其随机弃置一张牌;<br><li>④其他角色回合开始时,你摸一张牌并可以对其使用一张牌',
                        tgtt_jyqzyanzaomonv: '赝造魔女',
                        tgtt_jyqzyanzaomonv_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段限一次,你可以交给其他角色一张牌,你摸两张牌,获得1点护甲并选择获得其一项你没有的技能,直到你下次发动【赝造魔女①】时,若此时场上没有其他角色拥有该技能,你永久获得该技能;<br><li>②你的回合结束时,你回复1点体力,获得1点护甲并可以弃置一张牌,选择一名角色获得其所有技能并变更性别与其相同直到你的下回合结束阶段开始;<br><li>③你的回合开始时,你可以随机获得一个其他天使的部分能力直到你的下回合开始',
                        tgtt_jyqzqianbianwanhuajing: '千变万化镜',
                        tgtt_jyqzqianbianwanhuajing_info: '<font color=orange>锁定技,</font><br>1.你于以下时机从七张未登场的武将牌中选择一个技能,可以令一名角色获得此技能:<br><li>①每轮游戏开始时;<br><li>②你的回合开始/结束时;<br><li>③你增加/减少体力上限时;<br><li>④你回复/失去体力时;<br><li>⑤你造成受到/伤害时;<br>2.每当一名其他角色使用一张牌时,你获得一张同名牌,此时若你的牌数不大于7,则你摸一张牌并获得1点护甲',
                        tgtt_jyqzyyzz: 'Methratton',
                        tgtt_jyqzyyzz_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>鸢一折纸</font>的力量,拥有技能【光剑】和【炮冠】',
                        tgtt_jyqzbtey: 'Ratziel',
                        tgtt_jyqzbtey_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>本条二亚</font>的力量,拥有技能【嗫告】和【篇帙】',
                        tgtt_jyqzsqks: 'Zafkiel',
                        tgtt_jyqzsqks_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>时崎狂三</font>的力量,拥有技能【食时领域】和【刻刻帝】',
                        tgtt_jyqzbycssn: 'Zadkiel',
                        tgtt_jyqzbycssn_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>冰芽川四糸乃</font>的力量,拥有技能【冰结】和【冰傀】',
                        tgtt_jyqzwhql: 'Camael',
                        tgtt_jyqzwhql_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>五河琴里</font>的力量,拥有技能【灼烂】和【歼鬼】',
                        tgtt_jyqzxglc: 'Michael',
                        tgtt_jyqzxglc_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>星宫六喰</font>的力量,拥有技能【封解主·闭】和【封解主·开】',
                        tgtt_jyqzfsbw: 'Raphael',
                        tgtt_jyqzfsbw_info: '<font color=orange>锁定技,</font><br>你获得了<font color=orange>风侍八舞</font>的力量,拥有技能【束缚者】和【贯穿者】',
                        tgtt_jyqzqifan: '七番',
                        tgtt_jyqzqifan_info: '<font color=orange>锁定技,</font><br>1.若你不在一名角色的攻击范围内,则你不能成为其使用除【桃】外的牌的目标且你的手牌上限,攻击范围,使用【杀】和【酒】的限制次数均+X(X为你的体力值);<br>2.每当你的体力值与体力上限发生1点变化后,你可以观看牌堆顶的7+Y张牌,你可以用牌与其中任意张组成等差数列(若超过三张,可以不按照等差数列规则选择符合就近原则的一张牌,若如此做,剩下的牌无法选择),并展示分配(Y为你已损失的体力值);<br>3.一名角色的出牌阶段开始时,该角色可以展示并交给你一张牌(若该角色为你,则改为弃置一张牌),你选择一项:<br><li>①将获得/弃置的牌交还给该角色;<br><li>②亮出牌堆顶的七张牌,若这些牌中有不少于两张牌满足:其点数通过和差运算可以得到你获得/弃置的牌中的点数,你展示此计算过程并将参与计算的所有牌交给该角色(若有多种满足条件的计算方式,取其中参与计算的牌数最多的随机一种作为计算过程),否则若该角色为技能【七番】的持有者,你须重复执行选项②的操作直到满足条件为止',
                        tgtt_xglcfjzbi: '封解主·闭',
                        tgtt_xglcfjzbi_info: '出牌阶段限一次,你可以对攻击范围内或有<开>标记的一名角色的一个时机上锁,若放弃上锁,则可进行一次摸牌阶段;<br><font color=orange>(时机包括:<br><li>①始:回合;<br><li>②准:准备阶段;<br><li>③判:判定阶段;<br><li>④摸:摸牌阶段;<br><li>⑤出:出牌阶段;<br><li>⑥弃:弃牌阶段;<br><li>⑦结:结束阶段;<br><li>⑧增:增加体力上限;<br><li>⑨回:回复体力;<br><li>⑩造:造成伤害;<br><li>⑪减:减少体力上限;<br><li>⑫失:失去体力;<br><li>⑬受:受到伤害;<br><li>⑭濒:濒死;<br><li>⑮死:死亡;<br><li>⑯获:获得牌;<br><li>⑰置:弃置牌;<br><li>⑱翻:翻面;<br><li>⑲横:横置)</font> ',
                        tgtt_xglcfjzkai: '封解主·开',
                        tgtt_xglcfjzkai_info: '出牌阶段限一次,你可以令一名角色获得1枚<开>(至多1枚),可选择是否将其一个被上锁的时机解锁或是令自己执行一个摸牌阶段',
                        tgtt_fsbwtongtian: '通天',
                        tgtt_fsbwtongtian_info: '<font color=orange>锁定技,</font><br>1.每轮游戏开始时,你进行一次判定并获得判定牌,根据判定结果修改环境:<br><li>①<font color=red>♥️️</font>️炙日:其他角色的出牌/弃牌/结束阶段开始时,进行一次判定,若为<font color=red>♥️️</font>️则受到3点火焰伤害,否则你摸一张牌并回复1点体力;<br><li>②<font color=red>♦️️</font>️狂风:其他角色的弃牌阶段改为随机弃牌且受到的火焰伤害+1,当一名其他角色受到火焰伤害时,进行一次判定,若为<font color=red>♦️️</font>️则该伤害+1,否则你摸一张牌并获得1点护甲;<br><li>③<font color=black>♠️️</font>️鸣雷:其他角色的准备/判定/摸牌阶段开始时,进行一次判定,若为<font color=black>♠️️</font>️则受到3点雷电伤害,否则你摸一张牌并获得1点护甲;<br><li>④<font color=black>♣️️</font>️暴雨:其他角色的手牌上限-X(X为其装备区内牌的数量与1之和的两倍)且受到的雷电伤害+1,当一名其他角色受到雷电伤害时,进行一次判定,若为<font color=black>♣️️</font>️则该伤害+1,否则你摸一张牌并回复1点体力;<br><li>⑤<font color=orange>🃏/判定结果及改变场景与上次相同</font>天雾:其他角色使用牌只能指定距离1以内的角色为目标且你的回合开始时,获得【大雾】效果直到你的下回合开始;<br>2.每回合限一次,当一名角色判定时,你可以摸四张牌,回复1点体力并获得1点护甲,将两张牌分别放置于牌堆两端',
                        tgtt_fsbwtongtiankuangfeng: '狂风',
                        tgtt_fsbwtongtiankuangfeng_info: '<font color=orange>锁定技,</font><br>其他角色的弃牌阶段改为随机弃牌且受到的火焰伤害+1,当一名其他角色受到火焰伤害时,进行一次判定,若为<font color=red>♦️️</font>️则该伤害+1,否则你摸一张牌并获得1点护甲',
                        tgtt_fsbwtongtianbaoyu: '暴雨',
                        tgtt_fsbwtongtianbaoyu_info: '<font color=orange>锁定技,</font><br>其他角色的手牌上限-X(X为其装备区内牌的数量与1之和的两倍)且受到的雷电伤害+1,当一名其他角色受到雷电伤害时,进行一次判定,若为<font color=black>♣️️</font>️则该伤害+1,否则你摸一张牌并回复1点体力',
                        tgtt_fsbwtongtianzhiri: '炙日',
                        tgtt_fsbwtongtianzhiri_info: '<font color=orange>锁定技,</font><br>其他角色的出牌/弃牌/结束阶段开始时,进行一次判定,若为<font color=red>♥️️</font>️则受到3点火焰伤害,否则你摸一张牌并回复1点体力',
                        tgtt_fsbwtongtianminglei: '鸣雷',
                        tgtt_fsbwtongtianminglei_info: '<font color=orange>锁定技,</font><br>其他角色的准备/判定/摸牌阶段开始时,进行一次判定,若为<font color=black>♠️️</font>️则受到3点雷电伤害,否则你摸一张牌并获得1点护甲',
                        tgtt_fsbwtongtiantianwu: '天雾',
                        tgtt_fsbwtongtiantianwu_info: '<font color=orange>锁定技,</font><br>其他角色使用牌只能指定距离1以内的角色为目标且你的回合开始时,获得【大雾】效果直到你的下回合开始',
                        tgtt_fsbwtianjijichizhe: '天际疾驰者',
                        tgtt_fsbwtianjijichizhe_info: '<font color=orange>锁定技,</font><br><li>①其他角色计算与你的距离时始终+X且你计算与其他角色的距离时始终-X(X为你的体力上限+1);<br><li>②你使用【杀】可选择在此【杀】点数距离内的角色为目标;<br><li>③你使用带<伤害>标签的牌时或成为其他角色使用带<伤害>标签的牌的目标后,若此牌的颜色/花色/类型/牌名/点数有一项未被【天际】记录,则记录此项;<br><li>④当你因【苍穹吞噬】使用带<伤害>标签的牌指定目标后,你可以展示牌推顶的X张牌(X为你的【天际】记录数+1且至少为0),每有一张牌的颜色/类型/花色/牌名/点数与【天际】记录的颜色/类型/花色/牌名/点数相同,你令此牌伤害+1,且令其不能响应此牌.若如此做,此牌结算结束后,清除【天际】的记录',
                        tgtt_fsbwcangqiongtunshi: '苍穹吞噬',
                        tgtt_fsbwcangqiongtunshi_info: '<font color=orange>锁定技,</font><br><li>①当你不以此法使用一张牌指定唯一目标时,你可以对其视为使用另一种牌名的即时牌或对一名其他角色使用一张同名即时牌,取消此牌目标,摸一张牌并回复1点体力;<br><li>②你的回合内其他角色防具失效且你的每个基础阶段开始时,你有80%的概率获得1点护甲,若此时你体力值未满,则回复1点体力且若你的手牌数不大于8,你摸一张牌;<br><li>③出牌阶段限一次,你可以选择所有其他角色,令他们的护甲失效直到本回合结束,依次对他们造成1点伤害',
                        tgtt_fsbwjufengshuangzi: '飓风双子',
                        tgtt_fsbwjufengshuangzi_info: '<font color=orange>锁定技,</font><br><li>①游戏开始时,你获得随从<八舞耶俱矢>(体力上限4,初始手牌4,护甲等同本体);<br><li>②当你首次造成/受到伤害时,你获得随从<八舞夕弦>(体力上限4,初始手牌4,护甲等同本体);<br><li>③在你的回合中(如果有对应随从),你以【八舞夕弦-本体-八舞耶俱矢】的顺序进行3个连续回合;<br><li>②当随从全部死亡时,你获得技能【束缚者】和【贯穿者】',
                        tgtt_fsbwxxshufuzhe: '束缚者',
                        tgtt_fsbwxxshufuzhe_info: '<font color=orange>锁定技,</font><br><li>①你的回合开始时,其他所有角色非太古技无效且不能使用或打出手牌直到回合结束;<br><li>②你视为拥有技能【连环】',
                        tgtt_fsbwyjsguanchuanzhe: '贯穿者',
                        tgtt_fsbwyjsguanchuanzhe_info: '<font color=orange>锁定技,</font><br><li>①你造成的伤害+X(X为你已损失的体力值+1)且你造成非属性伤害视为神性伤害;<br><li>②你视为拥有技能【夷灭】',
                        tgtt_fsbwbafan: '八番',
                        tgtt_fsbwbafan_info: '<font color=orange>锁定技,</font><br>1.出牌阶段限一次,你可以令一名角色回答一道有关勾股定理的题目:<br><li>①若答对,该角色回复1点体力,你获得1点护甲并摸四张牌,将一张牌交给该角色;<br><li>②若答错,你回复1点体力并对该角色造成1点伤害,其失去1点体力并弃置两张牌;<br>2.出牌阶段限一次,你可以弃置三张点数呈等差数列的牌,执行以下效果:<br><li>①点数同为奇数,你对至多八名角色各造成1点伤害,你摸X张牌并获得等量护甲(X为以此法受到伤害后,体力值为1的角色数+1);<br><li>②点数同为偶数,你令至多八名已受伤的角色回复1点体力并获得1点护甲,你摸Y张牌并回复等量体力(Y为以此法回复体力后未受伤的角色数+1);<br><li>③点数有奇有偶,你令所有角色失去1点体力并弃置所有牌,你摸八张牌',
                        tgtt_yxmjpojungeji: '破军歌姬',
                        tgtt_yxmjpojungeji_info: '<font color=orange>锁定技,</font><br>1.每轮游戏开始时,你随机演奏一首乐曲并获得对应效果直到下轮游戏开始;<br>2.每名角色出牌阶段限四次,该角色可交给你一张<font color=red>♥️️</font>️/<font color=red>♦️️</font>️/<font color=black>♠️️</font>️/<font color=black>♣️️</font>️牌,你选择一项(若该角色为你则改为你展示此牌且视为你选择【破军歌姬①】):<br><li>①还给该角色一张同花色的牌并令其获得【协奏曲/行进曲/轮舞曲/镇魂曲】直到回合结束;<br><li>②弃置该角色交给你的牌并令其摸一张牌,你摸一张牌,回复1点体力并获得1点护甲',
                        tgtt_yxmjyxjxq: '英雄交响曲',
                        tgtt_yxmjyxjxq_info: '<font color=orange>锁定技,</font><br>出牌阶段限三次,你摸一张牌,回复1点体力并抽取九张随机武将牌,获得其中至多九项技能,直到你下次演奏【英雄交响曲】/发动【破军歌姬】',
                        tgtt_yxmjygzmq: '月光奏鸣曲',
                        tgtt_yxmjygzmq_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段开始时,你将你的手牌标记为<月光奏鸣曲>且你每失去一张<月光奏鸣曲>牌,摸一张牌并获得1点护甲;<br><li>②你的<月光奏鸣曲>牌不计入手牌上限且当你有<月光奏鸣曲>牌时,你使用牌无次数与距离限制并不能被【闪】或【无懈可击】响应;<br><li>③准备阶段,你获得位于弃牌堆的所有<月光奏鸣曲>牌',
                        tgtt_yxmjsdahq: '圣导安魂曲',
                        tgtt_yxmjsdahq_info: '<font color=orange>锁定技,</font><br>回合开始时,你摸两张牌,回复一半已损失的体力值(向上取整),不能成为其他角色使用牌的目标且体力上限及体力值不能发生负向变动并令其他角色武将牌翻至背面且横置,所有非太古技/护甲/防具失效且不能使用或打出手牌直到你下一次发动【破军歌姬】',
                        tgtt_yxmjhhxzq: '黄河协奏曲',
                        tgtt_yxmjhhxzq_info: '<font color=orange>锁定技,</font><br>1.你使用牌时无次数距离限制且每当你使用一张牌时,若此牌的牌名与你本局游戏使用的上一张牌的牌名押韵(标记为<黄河协奏曲>牌),则你摸一张牌,回复1点体力并获得1点护甲,令此牌额外结算一次;<br>2.出牌阶段限两次,你可以弃置任意张牌对等量名其他角色各造成1点神圣伤害,每选择一名其他角色,你回复1点体力并获得1点护甲;<br>3.每当一名角色受到伤害来源不为你的伤害后,你摸X张牌并可以弃置一张牌令其进行一次判定,若判定结果为:<br><li>①<font color=red>♥️️</font>️️,受伤角色武将牌翻回正面并回复X点体力;<br><li>②<font color=red>♥️️</font>️️,受伤角色摸X张牌并获得等量护甲;<br><li>③<font color=black>♠️️</font>️️️,伤害来源武将牌翻至背面并失去X点体力;<br><li>④<font color=black>♣️️</font>️️,伤害来源弃X张牌并失去等量护甲(X为伤害值+1);<br>4.每当你打出一张牌后,你摸一张牌',
                        tgtt_yxmjmyjxq: '命运交响曲',
                        tgtt_yxmjmyjxq_info: '<font color=orange>锁定技,</font><br>回合开始时,你摸两张牌,获得1点护甲并随机解锁魏吴蜀群四个势力各两条命运线,获得技能【天时】,【地利】,【人和】和【逐鹿】直到你发动【破军歌姬】',
                        tgtt_yxmjddzmq: '大调奏鸣曲',
                        tgtt_yxmjddzmq_info: '<font color=orange>锁定技,</font><br><li>①当一名角色使用或打出牌后,你唱一句歌词,如果你使用或打出牌比较快的话,可以唱一首歌;<br><li>②每当你发动【大调奏鸣曲①】的次数达到X的倍数时,你可以Hightはもうだめだ!!!!!(X为9,若场上人数小于5则改为4);<br><li>③你的回合内,当你使用牌时,若此牌与你于此回合内使用的上一张牌的颜色不同,你摸一张牌并获得1点护甲,否则你回复1点体力并获得1点护甲',
                        tgtt_yxmjxdhxq: '小调幻想曲',
                        tgtt_yxmjxdhxq_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段开始时,你可以令你此阶段内的主动出牌时间变为99秒,若如此做,你于此阶段内使用牌无距离和次数限制且【小调幻想曲④】失效;<br><li>②你发动【小调幻想曲①】后的出牌阶段内,每当你于阶段内使用牌时,你摸一张牌,回复1点体力并获得1点护甲且主动出牌时间-1秒,若主动出牌时间减至0,则你结束出牌阶段;<br><li>③结束阶段开始时,你摸X张牌,回复等量体力并获得等量护甲(X为你本回合内造成过的伤害且至多为9);<br><li>④每回合限九次,当你使用或打出的一张牌结算后,你立刻弃置所有手牌,摸Y张牌(Y为中央区内的花色数*2+1)',
                        tgtt_yxmjkldykxq: '克罗地亚狂想曲',
                        tgtt_yxmjkldykxq_info: '<font color=orange>锁定技,</font><br><li>①回合开始时,你获得九张<狂想>牌且每当你受到1点伤害后,你获得三张<狂想>牌;<br><li>②每当一张<狂想>牌销毁后,你摸一张牌,回复1点体力并获得1点护甲;<br><li>③出牌阶段开始时,你令所有未被【克罗地亚狂想曲④】定向转化过的<狂想>牌随机变成本局游戏存在的另一张牌的镜像;<br><li>④出牌阶段限九次,你可以选择一张未被以此法定向转化过的<狂想>牌和一张未被以此法选择过的非<狂想>牌,你将前者的牌名,属性,花色和点数转化为和后者一致,若这两张牌的花色相同,你获得一张<狂想>牌',
                        tgtt_yxmjkldykxq_faq: '关于<狂想>牌',
                        tgtt_yxmjkldykxq_faq_info: '<font color=orange>锁定技,</font><br><li>①<狂想>牌来自欢杀神左慈的<幻术>牌,感谢活动武将提供的代码支持;<br><li>②<狂想>牌为本局游戏牌组中随机一张牌的镜像,此牌可进行常规牌可进行的任何一般操作;<br><li>③<狂想>牌不计入手牌上限且拥有时使用牌无距离与次数限制,一名角色最多持有十八张<狂想>牌,超出的部分改为摸等量的牌,回复等量体力并获得等量护甲;<br><li>④已/未被【克罗地亚狂想曲④】定向转化过的<狂想>牌呈现金/深蓝色与常规牌进行区分;<br><li>⑤无【克罗地亚狂想曲】技能的角色获得<狂想>牌后,<狂想>牌会被销毁',
                        tgtt_yxmjldsjjxq: '拉德斯基进行曲',
                        tgtt_yxmjldsjjxq_info: '<font color=orange>锁定技,</font><br>1.你获得所有乐曲的效果;<br>2.当你使用牌指定其他角色为目标后,你可以将其的至多X张牌置于其武将牌上并摸X张牌(X为其体力上限),若这些牌中:<br><li>①有装备牌,你将这些装备牌中的一张置于弃牌堆;<br><li>②有锦囊牌,你摸一张牌并获得1点护甲;<br><li>③有基本牌,你从牌堆中获得除阵法牌外每种类型的牌各一张;<br>其于回合结束时,获得其武将牌上的这些牌;<br>3.当你造成伤害时,若目标手牌数和装备区内的牌数均小于等于你,则此伤害+2且你摸一张牌,回复1点体力并获得1点护甲',
                        tgtt_yxmjldsjjxqyxjxq: '英雄交响曲',
                        tgtt_yxmjldsjjxqyxjxq_info: '<font color=orange>锁定技,</font><br>出牌阶段限三次,你摸一张牌,回复1点体力并抽取九张随机武将牌,获得其中至多九项技能,直到你下次演奏【英雄交响曲】/发动【破军歌姬】',
                        tgtt_yxmjldsjjxqygzmq: '月光奏鸣曲',
                        tgtt_yxmjldsjjxqygzmq_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段开始时,你将你的手牌标记为<月光奏鸣曲>且你每失去一张<月光奏鸣曲>牌,摸一张牌并获得1点护甲;<br><li>②你的<月光奏鸣曲>牌不计入手牌上限且当你有<月光奏鸣曲>牌时,你使用牌无次数与距离限制并不能被【闪】或【无懈可击】响应;<br><li>③准备阶段,你获得位于弃牌堆的所有<月光奏鸣曲>牌',
                        tgtt_yxmjldsjjxqsdahq: '圣导安魂曲',
                        tgtt_yxmjldsjjxqsdahq_info: '<font color=orange>锁定技,</font><br>回合开始时,你摸两张牌,回复一半已损失的体力值(向上取整),不能成为其他角色使用牌的目标且体力上限及体力值不能发生负向变动并令其他角色武将牌翻至背面且横置,所有非太古技/护甲/防具失效且不能使用或打出手牌直到你下一次发动【破军歌姬】',
                        tgtt_yxmjldsjjxqhhxzq: '黄河协奏曲',
                        tgtt_yxmjldsjjxqhhxzq_info: '<font color=orange>锁定技,</font><br>1.你使用牌时无次数距离限制且每当你使用一张牌时,若此牌的牌名与你本局游戏使用的上一张牌的牌名押韵(标记为<黄河协奏曲>牌),则你摸一张牌,回复1点体力并获得1点护甲,令此牌额外结算一次;<br>2.出牌阶段限两次,你可以弃置任意张牌对等量名其他角色各造成1点神圣伤害,每选择一名其他角色,你回复1点体力并获得1点护甲;<br>3.每当一名角色受到伤害来源不为你的伤害后,你摸X张牌并可以弃置一张牌令其进行一次判定,若判定结果为:<br><li>①<font color=red>♥️️</font>️️,受伤角色武将牌翻回正面并回复X点体力;<br><li>②<font color=red>♥️️</font>️️,受伤角色摸X张牌并获得等量护甲;<br><li>③<font color=black>♠️️</font>️️️,伤害来源武将牌翻至背面并失去X点体力;<br><li>④<font color=black>♣️️</font>️️,伤害来源弃X张牌并失去等量护甲(X为伤害值+1);<br>4.每当你打出一张牌后,你摸一张牌',
                        tgtt_yxmjldsjjxqmyjxq: '命运交响曲',
                        tgtt_yxmjldsjjxqmyjxq_info: '<font color=orange>锁定技,</font><br>回合开始时,你摸两张牌,获得1点护甲并随机解锁魏吴蜀群四个势力各两条命运线,获得技能【天时】,【地利】,【人和】和【逐鹿】直到你发动【破军歌姬】',
                        tgtt_yxmjldsjjxqddzmq: '大调奏鸣曲',
                        tgtt_yxmjldsjjxqddzmq_info: '<font color=orange>锁定技,</font><br><li>①当一名角色使用或打出牌后,你唱一句歌词,如果你使用或打出牌比较快的话,可以唱一首歌;<br><li>②每当你发动【大调奏鸣曲①】的次数达到X的倍数时,你可以Hightはもうだめだ!!!!!(X为9,若场上人数小于5则改为4);<br><li>③你的回合内,当你使用牌时,若此牌与你于此回合内使用的上一张牌的颜色不同,你摸一张牌并获得1点护甲,否则你回复1点体力并获得1点护甲',
                        tgtt_yxmjldsjjxqxdhxq: '小调幻想曲',
                        tgtt_yxmjldsjjxqxdhxq_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段开始时,你可以令你此阶段内的主动出牌时间变为99秒,若如此做,你于此阶段内使用牌无距离和次数限制且【小调幻想曲④】失效;<br><li>②你发动【小调幻想曲①】后的出牌阶段内,每当你于阶段内使用牌时,你摸一张牌,回复1点体力并获得1点护甲且主动出牌时间-1秒,若主动出牌时间减至0,则你结束出牌阶段;<br><li>③结束阶段开始时,你摸X张牌,回复等量体力并获得等量护甲(X为你本回合内造成过的伤害且至多为9);<br><li>④每回合限九次,当你使用或打出的一张牌结算后,你立刻弃置所有手牌,摸Y张牌(Y为中央区内的花色数*2+1)',
                        tgtt_yxmjldsjjxqkldykxq: '克罗地亚狂想曲',
                        tgtt_yxmjldsjjxqkldykxq_info: '<font color=orange>锁定技,</font><br><li>①回合开始时,你获得九张<狂想>牌且每当你受到1点伤害后,你获得三张<狂想>牌;<br><li>②每当一张<狂想>牌销毁后,你摸一张牌,回复1点体力并获得1点护甲;<br><li>③出牌阶段开始时,你令所有未被【克罗地亚狂想曲④】定向转化过的<狂想>牌随机变成本局游戏存在的另一张牌的镜像;<br><li>④出牌阶段限九次,你可以选择一张未被以此法定向转化过的<狂想>牌和一张未被以此法选择过的非<狂想>牌,你将前者的牌名,属性,花色和点数转化为和后者一致,若这两张牌的花色相同,你获得一张<狂想>牌',
                        tgtt_yxmjxiezouqu: '协奏曲',
                        tgtt_yxmjxiezouqu_info: '<font color=orange>锁定技,</font><br>当你使用基本牌或普通锦囊牌结算完后,其他角色依次可以选择弃置一张红色牌或同类别牌使你令此牌对一名角色额外结算一次',
                        tgtt_yxmjxingjinqu: '行进曲',
                        tgtt_yxmjxingjinqu_info: '<font color=orange>锁定技,</font><br>每当你造成伤害后,你摸三张牌,可以弃置一张牌,若以此法弃置了红色牌,你下次摸牌时多摸一张牌并回复1点体力',
                        tgtt_yxmjlunwuqu: '轮舞曲',
                        tgtt_yxmjlunwuqu_info: '<font color=orange>锁定技,</font><br>出牌阶段限九次,你可以将一张黑色牌当任意锦囊牌使用且以此法使用的普通锦囊牌不能被其他角色响应',
                        tgtt_yxmjzhenhunqu: '镇魂曲',
                        tgtt_yxmjzhenhunqu_info: '<font color=orange>锁定技,</font><br>当你使用黑色牌或成为一张黑色牌的目标时,你可以令一名角色摸一张牌并回复1点体力,或令一名角色摸一张牌并获得1点护甲',
                        tgtt_yxmjduzou: '独奏',
                        tgtt_yxmjduzou_info: '<font color=orange>锁定技,</font><br><li>①出牌阶段限一次,你可以摸一张牌,回复1点体力并获得1点护甲,你跳过本回合的弃牌阶段并选择一名其他角色,该角色下回合改为由你操纵;<br><li>②回合结束时,你有9%~99%的概率令我方全体随机获得一个正面效果并令敌方全体进入混乱状态直到其回合结束且随机获得一个负面效果',
                        tgtt_yxmjjiufan: '九番',
                        tgtt_yxmjjiufan_info: '<font color=orange>锁定技,</font><br>1.当你成为基本牌或锦囊牌的目标时,你摸一张牌,回复1点体力并获得1点护甲,可以弃置使用者区域内的一张牌;<br>2.每当你使用牌时 ,若此牌颜色为弃牌堆中数量较少的颜色(对比红黑色),你摸两张牌,此时弃牌堆中:<br><li>①红色牌数大于黑色牌数,你回复1点体力;<br><li>②黑色牌数大于红色牌数,你获得1点护甲;<br><li>③否则,你回复1点体力并获得1点护甲,可以弃置一名其他角色区域内的一张牌;<br>3.每名角色出牌阶段开始时,你可以失去1点体力,摸两张牌且本回合内发动【九番4】时额外随机执行一个效果;<br>4.当你失去牌后,根据你失去牌的原因执行以下效果:<br><li>①使用:可以弃置其他角色一张牌;<br><li>②打出:获得1点护甲;<br><li>③弃置:回复1点体力;<br><li>④其他:下一次对其他角色造成伤害时,该伤害+1',
                    },
                    characterTitle: {
                        tgtt_srgod: '<font color=yellow>无冕之王</font>',
                        tgtt_tsliuying: '<font color=red>真理之后</font>',
                        tgtt_yuanyizhezhi: '<font color=white>天使</font>',
                        tgtt_bentiaoerya: '<font color=grey>修女</font>',
                        tgtt_shiqikuangsan: '<font color=black>梦魇</font>',
                        tgtt_bingyachuansisinai: '<font color=blue>隐居者</font>',
                        tgtt_wuheqinli: '<font color=red>炎魔</font>',
                        tgtt_xinggongliucan: '<font color=yellow>星宫</font>',
                        tgtt_jingyeqizui: '<font color=green>女巫</font>',
                        tgtt_fengshibawu: '<font color=orange>狂战士</font>',
                        tgtt_bawuyejushi: '<font color=orange>狂战士</font>',
                        tgtt_bawuxixian: '<font color=orange>狂战士</font>',
                        tgtt_youxiaomeijiu: '<font color=purple>歌姬</font>',
                    },
                };
                lib.config.all.characters.add('圣歼之战');
                lib.config.characters.add('圣歼之战');
                for (var i in QQQ.character) {
                    QQQ.character[i][4].add(`ext:圣歼之战/image/${i}.jpg`)
                }
                lib.translate['圣歼之战_character_config'] = `圣歼之战`;
                return QQQ;
            });
        },
        package: {
            intro: "<br><li><font color=red>本拓展适配无名杀本体1.10.8版本及以上,旧版本暂不支持且需要配合拓展【太古天庭】使用方能正常游玩.</font><br><span style='color: gold'>潜水的火修复版<br>『无名杀扩展大全群』:771901025<br></span>",
            author: '沐如风晨',
            version: '2.1.7',
        },
    };
});

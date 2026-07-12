game.import('card', function (lib, game, ui, get, ai, _status) {
    var taiguCard = {
        name: 'taiguCard', //卡包命名
        connect: true, //卡包是否可以联机
        skill: {
            //天帝天后
            //紫薇帝御
            //食物
            tgtt_dyltyluyugeng: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                forced: true,
                popup: false,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '出牌阶段限一次,你可以弃置一张非装备牌并发现' + Math.min(9, player.maxHp) + '张牌,随机附加' + Math.min(9, player.maxHp) + '层<font color=yellow>' + get.tgttIntroduce('PsBuff') + '</font>,持续两回合(剩余' + player.storage.tgtt_dyltyluyugeng_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltyluyugeng_markcount--;
                    if (player.storage.tgtt_dyltyluyugeng_markcount == 0) {
                        delete player.storage.tgtt_dyltyluyugeng;
                        delete player.storage.tgtt_dyltyluyugeng_markcount;
                        player.removeSkill('tgtt_dyltyluyugeng');
                        player.removeSkill('tgtt_dyltyluyugeng_use');
                    } else {
                    }
                },
                group: 'tgtt_dyltyluyugeng_count',
                subSkill: {
                    use: {
                        enable: 'phaseUse',
                        usable: 1,
                        charlotte: true,
                        TaiguSkill: true,
                        filterCard(card, player, event) {
                            return get.type(card) != 'equip';
                        },
                        filter(event, player) {
                            return player.countCards('h');
                        },
                        content() {
                            'step 0';
                            event.count = Math.min(9, player.maxHp);
                            ('step 1');
                            event.count--;
                            player.discoverCard();
                            player.addTgttBuff(game.findTgttBuff('type', 'buff').randomGet());
                            ('step 2');
                            if (event.count > 0 && player.hasSkill('tgtt_dyltyluyugeng_use')) event.goto(1);
                        },
                    },
                },
            },
            tgtt_dyltyxiajiao: {
                mark: 'card',
                trigger: { player: ['phaseUseBefore', 'phaseEnd'] },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                filter(event, player) {
                    return !player.hasSkill('tgtt_dyltyxiajiaoa');
                },
                intro: {
                    content(storage, player) {
                        return '你在摸牌阶段额外摸' + Math.min(9, player.maxHp) + '张牌,弃置一张牌(剩余' + player.storage.tgtt_dyltyxiajiao_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltyxiajiao_markcount--;
                    if (player.storage.tgtt_dyltyxiajiao_markcount == 0) {
                        delete player.storage.tgtt_dyltyxiajiao;
                        delete player.storage.tgtt_dyltyxiajiao_markcount;
                        player.removeSkill('tgtt_dyltyxiajiao');
                    } else {
                    }
                    player.addTempSkill('tgtt_dyltyxiajiaoa');
                },
                group: 'tgtt_dyltyxiajiao_draw',
                subSkill: {
                    draw: {
                        trigger: { player: 'phaseDrawBegin' },
                        forced: true,
                        charlotte: true,
                        TaiguSkill: true,
                        silent: true,
                        content() {
                            var num = Math.min(9, player.maxHp);
                            trigger.num += num;
                            player.addTempSkill('tgtt_dyltyxiajiaob');
                        },
                    },
                },
            },
            tgtt_dyltyxiajiaoa: {
                charlotte: true,
                TaiguSkill: true,
            },
            tgtt_dyltyxiajiaob: {
                trigger: { player: 'phaseDrawAfter' },
                silent: true,
                charlotte: true,
                TaiguSkill: true,
                silent: true,
                content() {
                    player.chooseToDiscard('he', true);
                },
            },
            tgtt_dyltymizhilianou: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '你可以将一张非<font color=black>♠️️</font>牌当作【桃】使用(剩余' + player.storage.tgtt_dyltymizhilianou_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltymizhilianou_markcount--;
                    if (player.storage.tgtt_dyltymizhilianou_markcount == 0) {
                        delete player.storage.tgtt_dyltymizhilianou;
                        delete player.storage.tgtt_dyltymizhilianou_markcount;
                        player.removeSkill('tgtt_dyltymizhilianou');
                        player.removeSkill('tgtt_dyltymizhilianou_use');
                    } else {
                    }
                },
                subSkill: {
                    use: {
                        enable: 'chooseToUse',
                        filterCard(card, player, event) {
                            return card.suit != 'spade';
                        },
                        position: 'he',
                        charlotte: true,
                        TaiguSkill: true,
                        viewAs: { name: 'tao' },
                        viewAsFilter(player) {
                            return player.countCards('he') > 0;
                        },
                        prompt: '将一张非<font color=black>♠️️</font>牌当【桃】使用',
                        check(card) {
                            return 10 - get.value(card);
                        },
                        ai: {
                            skillTagFilter(player) {
                                return player.countCards('he') > 0;
                            },
                            save: true,
                        },
                    },
                },
            },
            tgtt_dyltychunbing: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '你的手牌上限+' + Math.min(9, player.maxHp) + '(剩余' + player.storage.tgtt_dyltychunbing_markcount + '回合)';
                    },
                },
                mod: {
                    maxHandcard(player, num) {
                        return num + Math.min(9, player.maxHp);
                    },
                },
                content() {
                    player.storage.tgtt_dyltychunbing_markcount--;
                    if (player.storage.tgtt_dyltychunbing_markcount == 0) {
                        delete player.storage.tgtt_dyltychunbing;
                        delete player.storage.tgtt_dyltychunbing_markcount;
                        player.removeSkill('tgtt_dyltychunbing');
                    } else {
                    }
                },
            },
            tgtt_dyltygudonggeng: {
                mark: 'card',
                trigger: { player: 'phaseBegin' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '当你下一次受到伤害时,令伤害-' + Math.min(9, player.maxHp) + '(剩余' + player.storage.tgtt_dyltygudonggeng_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltygudonggeng_markcount--;
                    if (player.storage.tgtt_dyltygudonggeng_markcount == 0) {
                        delete player.storage.tgtt_dyltygudonggeng;
                        delete player.storage.tgtt_dyltygudonggeng_markcount;
                        player.removeSkill('tgtt_dyltygudonggeng');
                    } else {
                    }
                },
                group: 'tgtt_dyltygudonggeng_damage',
                subSkill: {
                    damage: {
                        trigger: { player: 'damageBegin4' },
                        filter(event, player) {
                            return event.num > 0;
                        },
                        forced: true,
                        charlotte: true,
                        TaiguSkill: true,
                        silent: true,
                        content() {
                            var num = Math.min(9, player.maxHp);
                            trigger.num -= num;
                            delete player.storage.tgtt_dyltygudonggeng;
                            delete player.storage.tgtt_dyltygudonggeng_markcount;
                            player.removeSkill('tgtt_dyltygudonggeng');
                        },
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.name == 'sha' && get.attitude(player, target) < 0) return 0.5;
                        },
                    },
                },
            },
            tgtt_dyltyqingtuan: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '你在回合内使用首张杀时摸一张牌,回复' + Math.min(9, player.maxHp) + '点体力并获得' + Math.min(9, player.maxHp) + '点护甲(剩余' + player.storage.tgtt_dyltyqingtuan_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltyqingtuan_markcount--;
                    if (player.storage.tgtt_dyltyqingtuan_markcount == 0) {
                        delete player.storage.tgtt_dyltyqingtuan;
                        delete player.storage.tgtt_dyltyqingtuan_markcount;
                        player.removeSkill('tgtt_dyltyqingtuan');
                    } else {
                    }
                },
                group: 'tgtt_dyltyqingtuan_draw',
                subSkill: {
                    draw: {
                        trigger: { player: 'useCard' },
                        filter(event, player) {
                            return event.card.name == 'sha' && _status.currentPhase == player;
                        },
                        usable: 1,
                        forced: true,
                        charlotte: true,
                        TaiguSkill: true,
                        silent: true,
                        content() {
                            var num = Math.min(9, player.maxHp);
                            player.draw();
                            player.recover(num);
                            player.changeHujia(num);
                        },
                    },
                },
            },
            tgtt_dyltyliyutang: {
                mark: 'card',
                trigger: { player: 'phaseEnd' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '结束阶段,你获得' + Math.min(9, player.maxHp) + '点护甲(剩余' + player.storage.tgtt_dyltyliyutang_markcount + '回合)';
                    },
                },
                content() {
                    var num = Math.min(9, player.maxHp);
                    player.changeHujia(num);
                    player.storage.tgtt_dyltyliyutang_markcount--;
                    if (player.storage.tgtt_dyltyliyutang_markcount == 0) {
                        delete player.storage.tgtt_dyltyliyutang;
                        delete player.storage.tgtt_dyltyliyutang_markcount;
                        player.removeSkill('tgtt_dyltyliyutang');
                    } else {
                    }
                },
            },
            tgtt_dyltyyougeng: {
                mark: 'card',
                trigger: { player: 'phaseBegin' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '准备阶段,你回复' + Math.min(9, player.maxHp) + '点体力(剩余' + player.storage.tgtt_dyltyyougeng_markcount + '回合)';
                    },
                },
                content() {
                    if (player.isDamaged()) {
                        var num = Math.min(9, player.maxHp);
                        player.recover(num);
                    }
                    player.storage.tgtt_dyltyyougeng_markcount--;
                    if (player.storage.tgtt_dyltyyougeng_markcount == 0) {
                        delete player.storage.tgtt_dyltyyougeng;
                        delete player.storage.tgtt_dyltyyougeng_markcount;
                        player.removeSkill('tgtt_dyltyyougeng');
                    } else {
                    }
                },
            },
            tgtt_dyltymolicha: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '你不能成为其他角色牌的目标且你的进攻距离/防御距离均+' + Math.min(9, player.maxHp) + '(剩余' + player.storage.tgtt_dyltymolicha_markcount + '回合)';
                    },
                },
                mod: {
                    targetEnabled(card, player, target) {
                        if (player != target) {
                            return false;
                        }
                    },
                    globalFrom(from, to, dis) {
                        return dis - Math.min(9, from.maxHp);
                    },
                    globalTo(from, to, dis) {
                        return dis + Math.min(9, to.maxHp);
                    },
                },
                content() {
                    player.storage.tgtt_dyltymolicha_markcount--;
                    if (player.storage.tgtt_dyltymolicha_markcount == 0) {
                        delete player.storage.tgtt_dyltymolicha;
                        delete player.storage.tgtt_dyltymolicha_markcount;
                        player.removeSkill('tgtt_dyltymolicha');
                    } else {
                    }
                },
            },
            tgtt_dyltyyuanbaorou: {
                mark: 'card',
                trigger: { player: 'phaseAfter' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '你在出牌阶段可以额外使用一张杀(剩余' + player.storage.tgtt_dyltyyuanbaorou_markcount + '回合)';
                    },
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha' || card.name == 'jiu') return num + Math.min(9, player.maxHp);
                    },
                },
                content() {
                    player.storage.tgtt_dyltyyuanbaorou_markcount--;
                    if (player.storage.tgtt_dyltyyuanbaorou_markcount == 0) {
                        delete player.storage.tgtt_dyltyyuanbaorou;
                        delete player.storage.tgtt_dyltyyuanbaorou_markcount;
                        player.removeSkill('tgtt_dyltyyuanbaorou');
                    } else {
                    }
                },
            },
            tgtt_dyltytanhuadong: {
                mark: 'card',
                trigger: { player: 'phaseEnd' },
                forced: true,
                popup: false,
                nopop: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '出牌阶段结束时,你摸' + Math.min(9, player.maxHp) + '张牌,回复1点体力并获得1点护甲(剩余' + player.storage.tgtt_dyltytanhuadong_markcount + '回合)';
                    },
                },
                content() {
                    player.storage.tgtt_dyltytanhuadong_markcount--;
                    if (player.storage.tgtt_dyltytanhuadong_markcount == 0) {
                        delete player.storage.tgtt_dyltytanhuadong;
                        delete player.storage.tgtt_dyltytanhuadong_markcount;
                        player.removeSkill('tgtt_dyltytanhuadong');
                    } else {
                    }
                },
                group: 'tgtt_dyltytanhuadong_draw',
                subSkill: {
                    draw: {
                        trigger: { player: 'phaseUseEnd' },
                        forced: true,
                        charlotte: true,
                        TaiguSkill: true,
                        silent: true,
                        content() {
                            var num = Math.min(9, player.maxHp);
                            player.draw(num);
                            player.recover();
                            player.changeHujia();
                        },
                    },
                },
            },
            tgtt_dyltymapodoufu: {
                mark: 'card',
                trigger: { player: 'phaseJieshuBegin' },
                forced: true,
                popup: false,
                nopop: true,
                forceLoad: true,
                charlotte: true,
                TaiguSkill: true,
                TaiguFoodSkill: true,
                silent: true,
                intro: {
                    content(storage, player) {
                        return '结束阶段,你随机弃置一名随机敌人的一张随机牌,令其失去1点体力并随机附加一层<font color=red>' + get.tgttIntroduce('NgBuff') + '</font>(剩余' + player.storage.tgtt_dyltymapodoufu_markcount + '回合)';
                    },
                },
                content() {
                    var list = player.getEnemies();
                    for (var i = 0; i < list.length; i++) {
                        if (!list[i].countCards('he')) {
                            list.splice(i--, 1);
                        }
                    }
                    var target = list.randomGet();
                    if (target) {
                        target.discard(target.getCards('he').randomGet());
                        target.loseHp();
                        target.addTgttBuff(game.findTgttBuff('type', 'debuff').randomGet());
                        target.addExpose(0.2);
                    }
                    player.storage.tgtt_dyltymapodoufu_markcount--;
                    if (player.storage.tgtt_dyltymapodoufu_markcount == 0) {
                        delete player.storage.tgtt_dyltymapodoufu;
                        delete player.storage.tgtt_dyltymapodoufu_markcount;
                        player.removeSkill('tgtt_dyltymapodoufu');
                    } else {
                    }
                },
            },
            //武器
            //开天斧
            tgtt_dykaitianfu1: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    source: 'damage',
                },
                forced: true,
                charlotte: true,
                _priority: 55,
                filter(event, player) {
                    return event.player.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    trigger.player.chooseToDiscard(true, 'he');
                    ('step 2');
                    if (event.count > 0) event.goto(1);
                },
            },
            tgtt_dykaitianfu2: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    source: 'damageBegin2',
                },
                forced: true,
                charlotte: true,
                logTarget: 'player',
                content() {
                    var num = player.getDamagedHp();
                    var num1 = num;
                    trigger.num += num1;
                },
            },
            //轩辕剑
            tgtt_dyxuanyuanjian1: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.notLink();
                },
                content() {
                    trigger.num++;
                    if (!trigger.nature) trigger.nature = 'kami';
                },
            },
            tgtt_dyxuanyuanjian2: {
                equipSkill: true,
                charlotte: true,
                forced: true,
                trigger: {
                    source: 'damageSource',
                },
                charlotte: true,
                forced: true,
                content() {
                    'step 0';
                    event.count = Math.min(trigger.num, 9);
                    ('step 1');
                    event.count--;
                    player.recover();
                    player.changeHujia();
                    ('step 2');
                    if (event.count > 0) event.goto(1);
                },
            },
            //防具
            //神农鼎
            tgtt_dyshennongding1: {
                equipSkill: true,
                charlotte: true,
                enable: 'chooseToUse',
                charlotte: true,
                viewAs: {
                    name: 'tao',
                },
                viewAsFilter(player) {
                    return player != _status.currentPhase && player.countCards('hes') > 1;
                },
                selectCard: 2,
                filterCard: true,
                position: 'hes',
                ai: {
                    basic: {
                        order(card, player) {
                            if (player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful: [6.5, 4, 3, 2],
                        value: [6.5, 4, 3, 2],
                    },
                    result: {
                        target: 2,
                        target_use(player, target) {
                            // if(player==target&&player.hp<=0) return 2;
                            if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                            var nd = player.needsToDiscard();
                            var keep = false;
                            if (nd <= 0) {
                                keep = true;
                            } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                keep = true;
                            }
                            var mode = get.mode();
                            if (target.hp >= 2 && keep && target.hasFriend()) {
                                if (target.hp > 2 || nd == 0) return 0;
                                if (target.hp == 2) {
                                    if (
                                        game.hasPlayer(function (current) {
                                            if (target != current && get.attitude(target, current) >= 3) {
                                                if (current.hp <= 1) return true;
                                                if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                            }
                                        })
                                    ) {
                                        return 0;
                                    }
                                }
                            }
                            if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                            var att = get.attitude(player, target);
                            if (att < 3 && att >= 0 && player != target) return 0;
                            var tri = _status.event.getTrigger();
                            if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                    var num = game.countPlayer(function (current) {
                                        if (current.identity == 'fan') {
                                            return current.countCards('h', 'tao');
                                        }
                                    });
                                    if (num > 1 && player == target) return 2;
                                    return 0;
                                }
                            }
                            if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                    return 0;
                                }
                            }
                            if (mode == 'stone' && target.isMin() && player != target && tri && tri.name == 'dying' && player.side == target.side && tri.source != target.getEnemy()) {
                                return 0;
                            }
                            return 2;
                        },
                    },
                    tag: {
                        recover: 1,
                        save: 1,
                    },
                },
            },
            tgtt_dyshennongding2: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 1,
                charlotte: true,
                filterCard: true,
                selectCard: 2,
                check(card) {
                    if (get.tag(card, 'recover') >= 1) return 0;
                    return 7 - get.value(card);
                },
                filter(event, player) {
                    return player.countCards('h') >= 2;
                },
                content() {
                    player.gainMaxHp();
                    player.recover();
                    player.changeHujia();
                },
                ai: {
                    result: {
                        player(player) {
                            return get.recoverEffect(player);
                        },
                    },
                    order: 2.5,
                },
            },
            //防御坐骑
            //昊天塔
            tgtt_dyhaotianta1: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    global: 'judgeBefore',
                },
                forced: true,
                charlotte: true,
                content() {
                    'step 0';
                    event.cards = get.cards(10);
                    player.chooseCardButton(true, event.cards, '昊天塔:选择一张牌作为' + get.translation(trigger.player) + '的' + trigger.judgestr + '判定结果').ai = function (button) {
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
                        //QQQ
                        for (var i = 0; i < event.cards.length; i++) {
                            event.cards[i].discard();
                        }
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
                    player.gainMaxHp();
                },
                ai: {
                    tag: {
                        rejudge: 1,
                    },
                },
            },
            tgtt_dyhaotianta2: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    cardnature(card, player) {
                        if (player.hasEmptySlot(1) && card.name == 'sha') return false;
                    },
                },
                trigger: {
                    player: 'useCardToPlayered',
                },
                charlotte: true,
                filter(event, player) {
                    return !event.parent._tgtt_dyhaotianta2_player && event.targets.length == 1 && event.card.name == 'sha' && player.getStorage('tgtt_dyhaotianta2').length;
                },
                prompt2(event, player) {
                    var str = '',
                        storage = player.getStorage('tgtt_dyhaotianta2');
                    if (storage.length > 1) {
                        str += '展示牌堆顶的' + get.cnNumber(storage.length - 1) + '张牌并增加伤害;且';
                    }
                    str += '令' + get.translation(event.target) + '不能使用花色为';
                    for (var i = 0; i < storage.length; i++) {
                        str += get.translation(storage[i]);
                    }
                    str += '的牌响应' + get.translation(event.card);
                    return str;
                },
                logTarget: 'target',
                check(event, player) {
                    var target = event.target;
                    if (get.attitude(player, target) > 0) return false;
                    if (
                        target.hasSkillTag('filterDamage', null, {
                            player: player,
                            card: event.card,
                        })
                    )
                        return false;
                    var storage = player.getStorage('tgtt_dyhaotianta2');
                    if (storage.length >= 4) return true;
                    if (storage.length < 3) return false;
                    if (target.hasShan()) return storage.includes('heart') && storage.includes('diamond');
                    return true;
                },
                content() {
                    var storage = player.getStorage('tgtt_dyhaotianta2').slice(0);
                    var num = storage.length - 1;
                    var evt = trigger.parent;
                    if (num > 0) {
                        if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
                        var cards = get.cards(num);
                        player.showCards(cards.slice(0), get.translation(player) + '发动了【昊天塔】');
                        while (cards.length) {
                            var card = cards.pop();
                            if (storage.includes(card.suit)) evt.baseDamage++;
                            ui.cardPile.insertBefore(card, ui.cardPile.firstChild);
                        }
                        game.updateRoundNumber();
                    }
                    evt._tgtt_dyhaotianta2_player = player;
                    player.addTempSkill('tgtt_dyhaotianta2_clear');
                    var target = trigger.target;
                    target.addTempSkill('tgtt_dyhaotianta2_block');
                    if (!target.storage.tgtt_dyhaotianta2_block) target.storage.tgtt_dyhaotianta2_block = [];
                    target.storage.tgtt_dyhaotianta2_block.push([evt.card, storage]);
                    lib.skill.tgtt_dyhaotianta2.updateBlocker(target);
                },
                updateBlocker(player) {
                    var list = [],
                        storage = player.storage.tgtt_dyhaotianta2_block;
                    if (storage && storage.length) {
                        for (var i of storage) list.addArray(i[1]);
                    }
                    player.storage.tgtt_dyhaotianta2_blocker = list;
                },
                ai: {
                    threaten: 3.5,
                    directHit_ai: true,
                    halfneg: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.card && arg.card.name == 'sha') {
                            var storage = player.getStorage('tgtt_dyhaotianta2');
                            if (storage.length < 3 || !storage.includes('heart') || !storage.includes('diamond')) return false;
                            var target = arg.target;
                            if (target.hasSkill('bagua_skill') || target.hasSkill('bazhen') || target.hasSkill('rw_bagua_skill')) return false;
                            return true;
                        }
                        return false;
                    },
                },
                intro: {
                    content: '已记录花色:$',
                },
                group: 'tgtt_dyhaotianta2_count',
                subSkill: {
                    clear: {
                        trigger: {
                            player: 'useCardAfter',
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        filter(event, player) {
                            return event._tgtt_dyhaotianta2_player == player;
                        },
                        content() {
                            player.unmarkSkill('tgtt_dyhaotianta2');
                        },
                    },
                    block: {
                        mod: {
                            cardEnabled(card, player) {
                                if (!player.storage.tgtt_dyhaotianta2_blocker) return;
                                var suit = card.suit;
                                if (suit == 'none') return;
                                var evt = _status.event;
                                if (evt.name != 'chooseToUse') evt = evt.getParent('chooseToUse');
                                if (!evt || !evt.respondTo || evt.respondTo[1].name != 'sha') return;
                                if (player.storage.tgtt_dyhaotianta2_blocker.includes(suit)) return false;
                            },
                        },
                        trigger: {
                            player: ['damageBefore', 'damageCancelled', 'damageZero'],
                            target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd'],
                            global: ['useCardEnd'],
                        },
                        forced: true,
                        firstDo: true,
                        charlotte: true,
                        onremove(player) {
                            delete player.storage.tgtt_dyhaotianta2_block;
                            delete player.storage.tgtt_dyhaotianta2_blocker;
                        },
                        filter(event, player) {
                            if (!event.card || !player.storage.tgtt_dyhaotianta2_block) return false;
                            for (var i of player.storage.tgtt_dyhaotianta2_block) {
                                if (i[0] == event.card) return true;
                            }
                            return false;
                        },
                        content() {
                            var storage = player.storage.tgtt_dyhaotianta2_block;
                            for (var i = 0; i < storage.length; i++) {
                                if (storage[i][0] == trigger.card) {
                                    storage.splice(i--, 1);
                                }
                            }
                            if (!storage.length) player.removeSkill('tgtt_dyhaotianta2_block');
                            else lib.skill.tgtt_dyhaotianta2.updateBlocker(target);
                        },
                        forced: true,
                    },
                    count: {
                        trigger: {
                            player: 'useCard',
                            target: 'useCardToTargeted',
                        },
                        forced: true,
                        charlotte: true,
                        filter(event, player, name) {
                            if (name != 'useCard' && player == event.player) return false;
                            var suit = event.card.suit;
                            if (!lib.suit.includes(suit)) return false;
                            if (player.storage.tgtt_dyhaotianta2 && player.storage.tgtt_dyhaotianta2.includes(suit)) return false;
                            return true;
                        },
                        content() {
                            player.markAuto('tgtt_dyhaotianta2', [trigger.card.suit]);
                        },
                        forced: true,
                    },
                },
            },
            //昆仑镜
            tgtt_dykunlunjing1: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                charlotte: true,
                delay: false,
                content() {
                    'step 0';
                    var cards = get.cards(10);
                    event.cards = cards;
                    player.chooseCardButton('选择一张牌', cards, true);
                    ('step 1');
                    event.card = result.links[0];
                    player.chooseCard('he', true, '用一张牌替换' + get.translation(event.card));
                    ('step 2');
                    if (result.bool) {
                        event.cards[event.cards.indexOf(event.card)] = result.cards[0];
                        player.lose(result.cards, ui.special);
                        var cardx = ui.create.card();
                        cardx.classList.add('infohidden');
                        cardx.classList.add('infoflip');
                        player.$throw(cardx, 1000, 'nobroadcast');
                    } else {
                        event.finish();
                    }
                    ('step 3');
                    player.gain(event.card);
                    player.$draw();
                    for (var i = event.cards.length - 1; i >= 0; i--) {
                        event.cards[i].fix();
                        ui.cardPile.insertBefore(event.cards[i], ui.cardPile.firstChild);
                    }
                    player.gainMaxHp();
                    player.recover();
                    player.changeHujia();
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            tgtt_dykunlunjing2: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    var list = player.storage.tgtt_dykunlunjing2_mark || [];
                    return (
                        player.isPhaseUsing() &&
                        event.targets &&
                        event.targets.length &&
                        game.hasPlayer(function (current) {
                            return event.targets.includes(current) && !list.includes(current);
                        })
                    );
                },
                charlotte: true,
                forced: true,
                logTarget(event, player) {
                    var list = player.storage.tgtt_dykunlunjing2_mark || [];
                    return game
                        .filterPlayer(function (current) {
                            return event.targets.includes(current) && !list.includes(current);
                        })
                        .sortBySeat();
                },
                content() {
                    'step 0';
                    player.addTempSkill('tgtt_dykunlunjing2_mark');
                    var list = player.storage.tgtt_dykunlunjing2_mark,
                        targets = game
                            .filterPlayer(function (current) {
                                return trigger.targets.includes(current) && !list.includes(current);
                            })
                            .sortBySeat();
                    list.addArray(targets);
                    player.markSkill('tgtt_dykunlunjing2_mark');
                    ('step 1');
                    var list = player.storage.tgtt_dykunlunjing2_mark;
                    switch (list.length) {
                        case 1:
                            player
                                .chooseControl('basic', 'trick', 'equip', 'cancel2')
                                .set('prompt', '昆仑镜:是否选择获得一种类型的牌？')
                                .set('ai', function () {
                                    var player = _status.event.player;
                                    if (player.hp <= 3 && !player.countCards('h', { name: ['shan', 'tao'] })) return 'basic';
                                    if (player.countCards('he', { type: 'equip' }) < 2) return 'equip';
                                    return 'trick';
                                });
                            break;
                        case 2:
                            player
                                .chooseTarget('昆仑镜:是否视为对一名角色使用一张普通锦囊牌？', function (card, player, target) {
                                    for (var name of lib.inpile) {
                                        var info = lib.card[name];
                                        if (!info || info.type != 'trick') continue;
                                        if (!player.canUse(name, target)) continue;
                                        return true;
                                    }
                                    return false;
                                })
                                .set('ai', function (target) {
                                    var player = _status.event.player,
                                        list = [];
                                    for (var name of lib.inpile) {
                                        var info = lib.card[name];
                                        if (!info || info.type != 'trick') continue;
                                        if (!player.canUse(name, target)) continue;
                                        var eff = get.effect(target, { name: name }, player, player);
                                        if (eff > 0) list.push(eff);
                                    }
                                    list.sort().reverse();
                                    if (!list.length) return 0;
                                    return list[0];
                                });
                            event.goto(3);
                            break;
                        case 3:
                            var num = 0;
                            for (var target of list) num += get.damageEffect(target, player, player);
                            player.chooseBool('昆仑镜:是否对' + get.translation(list.sortBySeat()) + '各造成1点伤害？').set('choice', num > 0);
                            event.goto(5);
                            break;
                        default:
                            event.finish();
                            break;
                    }
                    ('step 2');
                    if (result.control != 'cancel2') {
                        player.popup(result.control);
                        game.log(player, '声明了', '#y' + get.translation(result.control) + '牌');
                        var card = get.cardPile(function (card) {
                            return get.type2(card) == result.control;
                        });
                        if (card) player.gain(card, 'gain2');
                    }
                    event.finish();
                    ('step 3');
                    if (result.bool) {
                        var target = result.targets[0];
                        event.target = target;
                        player.line(target);
                        var list = [];
                        for (var name of lib.inpile) {
                            var info = lib.card[name];
                            if (!info || info.type != 'trick') continue;
                            list.push(name);
                        }
                        if (!list.length) event.finish();
                        else {
                            list = list.filter(function (name) {
                                return player.canUse(name, target);
                            });
                            if (list.length)
                                player.chooseButton(['视为对' + get.translation(target) + '使用一张普通锦囊牌', [list, 'vcard']], true).set('ai', function (button) {
                                    var evt = _status.event.parent;
                                    return get.effect(evt.target, { name: button.link[2] }, evt.player, evt.player);
                                });
                            else event.finish();
                        }
                    } else event.finish();
                    ('step 4');
                    if (result.bool) {
                        var name = result.links[0][2];
                        player.useCard({ name: name }, target, false);
                    }
                    event.finish();
                    ('step 5');
                    if (result.bool) {
                        player.line(player.storage.tgtt_dykunlunjing2_mark.sortBySeat());
                        for (var target of player.storage.tgtt_dykunlunjing2_mark.sortBySeat()) target.damage();
                    }
                },
                subSkill: {
                    mark: {
                        init(player) {
                            player.storage.tgtt_dykunlunjing2_mark = [];
                        },
                        charlotte: true,
                        intro: {
                            content: '已记录$',
                        },
                    },
                },
            },
            //进攻坐骑
            //女娲石
            tgtt_dynvwashi1: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    global: 'dying',
                },
                charlotte: true,
                _priority: 6,
                filter(event, player) {
                    return event.player.hp <= 0 && player.hp > 1;
                },
                check(event, player) {
                    return get.attitude(player, event.player) >= 3 && !event.player.hasSkillTag('nosave');
                },
                logTarget: 'player',
                content() {
                    'step 0';
                    trigger.player.gainMaxHp();
                    trigger.player.recover();
                    trigger.player.draw();
                    ('step 1');
                    player.loseHp();
                    player.loseMaxHp();
                    player.changeHujia();
                },
                ai: {
                    threaten: 1.2,
                    expose: 0.2,
                },
            },
            tgtt_dynvwashi2: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: ['damageEnd', 'loseHpEnd', 'loseMaxHpEnd'],
                },
                charlotte: true,
                zhuanhuanji: true,
                mark: true,
                marktext: '☯',
                content() {
                    if (player.storage.tgtt_dynvwashi2 == true) {
                        player.draw(2);
                        player.gainMaxHp();
                    } else {
                        player.recover();
                        player.changeHujia();
                    }
                    player.changeZhuanhuanji('tgtt_dynvwashi2');
                },
                ai: {
                    maixie: true,
                    effect: {
                        player: 2,
                    },
                },
                intro: {
                    content(storage, player, skill) {
                        if (player.storage.tgtt_dynvwashi2 == true) return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你减少体力上限/失去体力/受到伤害后,你摸两张牌并增加1点体力上限.';
                        return '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你减少体力上限/失去体力/受到伤害后,你回复1点体力并获得1点护甲.';
                    },
                },
            },
            //伏羲琴
            tgtt_dyfuxiqin1: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 3,
                charlotte: true,
                filterTarget(card, player, target) {
                    return player.canCompare(target);
                },
                filter(event, player) {
                    return (
                        player.countCards('h') &&
                        game.hasPlayer(function (current) {
                            return player.canCompare(current);
                        })
                    );
                },
                content() {
                    'step 0';
                    player.chooseToCompare(target);
                    ('step 1');
                    if (result.bool) {
                        event.bool = true;
                        player.chooseTarget('选择一个目标视为' + get.translation(target) + '对其使用一张杀', function (card, player, target2) {
                            return player != target2 && target.canUse('sha', target2);
                        }).ai = function (target2) {
                            return get.effect(target2, { name: 'sha' }, target, player);
                        };
                    } else {
                        target.discardPlayerCard(player);
                        player.gainMaxHp();
                        player.recover();
                    }
                    ('step 2');
                    if (event.bool && result.bool) {
                        target.useCard({ name: 'sha' }, result.targets);
                    }
                },
                ai: {
                    order: 7,
                    result: {
                        target(player, target) {
                            if (player.countCards('h') <= 1) return 0;
                            if (get.attitude(player, target) >= 0) return 0;
                            if (
                                game.hasPlayer(function (current) {
                                    return player != current && target.canUse('sha', current) && get.effect(current, { name: 'sha' }, target, player) > 0;
                                })
                            ) {
                                return -1;
                            }
                            return 0;
                        },
                    },
                },
            },
            tgtt_dyfuxiqin2: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: ['useCardAfter', 'respondAfter'],
                },
                forced: true,
                charlotte: true,
                forced: true,
                filter(event, player) {
                    return event.tgtt_dyfuxiqin2_counted && player.getStorage('tgtt_dyfuxiqin2').length >= 9;
                },
                content() {
                    'step 0';
                    player.unmarkSkill('tgtt_dyfuxiqin2');
                    event.cards = get.cards(9);
                    event.cards.sort(function (a, b) {
                        return b.number - a.number;
                    });
                    game.cardsGotoOrdering(event.cards);
                    event.videoId = lib.status.videoId++;
                    game.broadcastAll(
                        function (player, id, cards) {
                            var str;
                            if (player == game.me && !_status.auto) {
                                str = '伏羲琴:选择任意张点数满足条件的牌';
                            } else {
                                str = '伏羲琴';
                            }
                            var dialog = ui.create.dialog(str, cards);
                            dialog.videoId = id;
                        },
                        player,
                        event.videoId,
                        event.cards
                    );
                    event.time = get.utc();
                    game.addVideo('showCards', player, ['涉猎', get.cardsInfo(event.cards)]);
                    game.addVideo('delay', null, 2);
                    ('step 1');
                    var next = player.chooseButton([0, 9], true);
                    next.set('dialog', event.videoId);
                    next.set('filterButton', function (button) {
                        var num = button.link.number,
                            cards = _status.event.parent.cards;
                        for (var i of ui.selected.buttons) {
                            if (i.link.number == num) return false;
                        }
                        for (var i of cards) {
                            if (i != button.link && i.number == num) return true;
                        }
                        return false;
                    });
                    next.set('ai', function (button) {
                        return get.value(button.link, _status.event.player);
                    });
                    ('step 2');
                    if (result.bool && result.links && result.links.length) {
                        event.cards2 = result.links;
                    }
                    var time = 1000 - (get.utc() - event.time);
                    if (time > 0) {
                    }
                    ('step 3');
                    game.broadcastAll('closeDialog', event.videoId);
                    var cards2 = event.cards2;
                    if (cards2 && cards2.length) player.gain(cards2, 'log', 'gain2');
                    player.draw(3);
                    player.changeHujia(3);
                },
                marktext: '⑨',
                intro: {
                    content: '已记录牌名:$',
                },
                group: 'tgtt_dyfuxiqin2_count',
                subSkill: {
                    count: {
                        trigger: {
                            player: ['useCard1', 'respond'],
                        },
                        forced: true,
                        charlotte: true,
                        popup: false,
                        firstDo: true,
                        filter(event, player) {
                            return !player.getStorage('tgtt_dyfuxiqin2').includes(event.card.name);
                        },
                        content() {
                            trigger.tgtt_dyfuxiqin2_counted = true;
                            player.markAuto('tgtt_dyfuxiqin2', [trigger.card.name]);
                            player.changeHujia();
                        },
                    },
                },
            },
            //宝物
            //炼妖壶
            tgtt_dylianyaohu1: {
                equipSkill: true,
                charlotte: true,
                mark: true,
                charlotte: true,
                intro: {
                    content(storage, player) {
                        var card = player.getEquip('tgtt_dylianyaohu');
                        if (card && card.storage.tgtt_dyshouna && card.storage.tgtt_dyshouna.length) {
                            return '共有' + get.cnNumber(card.storage.tgtt_dyshouna.length) + '张牌';
                        }
                        return '共有〇张牌';
                    },
                    mark(dialog, storage, player) {
                        var card = player.getEquip('tgtt_dylianyaohu');
                        if (card && card.storage.tgtt_dyshouna && card.storage.tgtt_dyshouna.length) {
                            dialog.addAuto(card.storage.tgtt_dyshouna);
                        } else {
                            return '共有〇张牌';
                        }
                    },
                    markcount(storage, player) {
                        var card = player.getEquip('tgtt_dylianyaohu');
                        if (card && card.storage.tgtt_dyshouna) return card.storage.tgtt_dyshouna.length;
                        return 0;
                    },
                },
            },
            tgtt_dylianyaohu2: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                charlotte: true,
                content() {
                    'step 0';
                    game.countPlayer(function (current) {
                        if (current != player) {
                            player.line(current);
                            current.loseHp();
                            current.loseMaxHp();
                        }
                    });
                    ('step 1');
                    player.chooseControl('摸牌', '回复体力');
                    ('step 2');
                    if (result.control == '摸牌') {
                        player.draw(2 * player.getStat().damage);
                    } else {
                        player.recover(player.getStat().damage);
                    }
                    ('step 3');
                    player.gainMaxHp();
                    player.changeHujia();
                },
                ai: {
                    threaten: 2,
                },
            },
            tgtt_dylianhua: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                filter(event, player) {
                    var hu = player.getEquip('tgtt_dylianyaohu');
                    if (hu && hu.storage.tgtt_dyshouna && hu.storage.tgtt_dyshouna.length > 1) {
                        return true;
                    }
                    return false;
                },
                delay: false,
                charlotte: true,
                content() {
                    'step 0';
                    event.hu = player.getEquip('tgtt_dylianyaohu');
                    player.chooseCardButton('弃置两张壶中的牌,从牌堆中获得一张类别不同的牌', 2, event.hu.storage.tgtt_dyshouna).ai = function () {
                        return 1;
                    };
                    ('step 1');
                    if (result.bool) {
                        var type = [];
                        player.$throw(result.links);
                        game.log(player, '弃置了', result.links);
                        for (var i = 0; i < result.links.length; i++) {
                            event.hu.storage.tgtt_dyshouna.remove(result.links[i]);
                            result.links[i].discard();
                            type.add(get.type(result.links[i], 'trick'));
                        }
                        for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                            if (!type.includes(get.type(ui.cardPile.childNodes[i], 'trick'))) {
                                player.gain(ui.cardPile.childNodes[i], 'gain');
                                break;
                            }
                        }
                        player.recover();
                        player.draw();
                    } else {
                        player.getStat('skill').tgtt_dylianhua--;
                    }
                },
                ai: {
                    order: 11,
                    result: {
                        player: 1,
                    },
                },
            },
            tgtt_dyshouna: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 3,
                charlotte: true,
                filter(event, player) {
                    return player.countCards('he') > 0;
                },
                filterCard: true,
                check(card) {
                    return 6 - get.value(card);
                },
                filterTarget(card, player, target) {
                    return target != player && target.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    var card = target.getCards('he').randomGet();
                    var hu = player.getEquip('tgtt_dylianyaohu');
                    if (card && hu) {
                        if (!hu.storage.tgtt_dyshouna) {
                            hu.storage.tgtt_dyshouna = [];
                        }
                        target.$give(card, player);
                        target.lose(card, ui.special);
                        event.card = card;
                        event.hu = hu;
                    }
                    ('step 1');
                    if (!event.card.destroyed) {
                        event.hu.storage.tgtt_dyshouna.push(event.card);
                    }
                    ('step 2');
                    player.gainMaxHp();
                    player.changeHujia();
                },
                ai: {
                    order: 5,
                    result: {
                        target(player, target) {
                            return -1 / Math.sqrt(1 + target.countCards('he'));
                        },
                    },
                },
            },
            //太古四圣
            //三清六御
            //五方老君
            //金母木公
            //三象天尊
            //三官大帝
            //十方天尊
            //四大天师
            //南斗六星
            //北斗七星
            //五炁真君
            //元帅真君
            //九曜星宫
            //四灵守护
            //二十八宿
            //五大天王
            //四大元帅
            //雷公电母
            //全海龙王
            //五岳大帝
            //五大龙神
            //五大水神
            //十殿阎罗
            //四值功曹
            //三十六将
            //六十甲子
            //蒲元
            //特殊装备
            //雷影驹
            tgtt_fspyleiyingju_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    globalFrom(from, to) {
                        return -Infinity;
                    },
                },
            },
            //武器
            //赤血青锋
            tgtt_fspychixueqingfeng_skill: {
                audio: 'qinggang_skill',
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                logTarget: 'target',
                forced: true,
                content() {
                    trigger.target.addTempSkill('tgtt_fspychixueqingfeng_skill_xiaoguo', 'shaAfter');
                },
                ai: {
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
                subSkill: {
                    xiaoguo: {
                        silent: true,
                        forced: true,
                        popup: false,
                        charlotte: true,
                        mark: true,
                        marktext: '锋',
                        intro: {
                            content: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>当前防具技能已失效<br><li>不能使用或打出手牌',
                        },
                        mod: {
                            cardEnabled() {
                                return false;
                            },
                            cardUsable() {
                                return false;
                            },
                            cardRespondable() {
                                return false;
                            },
                            cardSavable() {
                                return false;
                            },
                        },
                        ai: {
                            unequip2: true,
                        },
                    },
                },
            },
            //鸾凤和鸣剑
            tgtt_fspyluanfenghemingjian_skill: {
                audio: 'cixiong_skill',
                equipSkill: true,
                charlotte: true,
                filter(event, player) {
                    return event.card.name == 'sha';
                },
                trigger: {
                    player: 'useCardToPlayered',
                },
                logTarget: 'target',
                check(event, player) {
                    if (get.attitude(player, event.target) > 0) return true;
                    var target = event.target;
                    return target.countCards('h') == 0 || !target.hasSkillTag('noh');
                },
                content() {
                    'step 0';
                    if (!trigger.card.nature) {
                        event.shuxing = 0;
                        trigger.target.chooseToDiscard('弃置一张手牌,或令' + get.translation(player) + '摸一张牌').set('ai', function (card) {
                            var trigger = _status.event.getTrigger();
                            return -get.attitude(trigger.target, trigger.player) - get.value(card);
                        });
                    } else {
                        event.shuxing = 1;
                        trigger.target.chooseToDiscard('弃置一张手牌', true);
                    }
                    ('step 1');
                    if (event.shuxing == 0) {
                        if (result.bool == false) player.draw();
                    } else player.draw();
                },
            },
            //鬼龙斩月刀
            tgtt_fspyguilongzhanyuedao_skill: {
                audio: 'qinglong_skill',
                equipSkill: true,
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (get.color(card) == 'red' && card.name == 'sha') return Infinity;
                    },
                },
                trigger: {
                    player: ['useCard', 'shaMiss'],
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'useCard') return event.card && event.card.name == 'sha' && get.color(event.card) == 'red';
                    else return true;
                },
                content() {
                    if (event.triggername == 'useCard') trigger.directHit.addArray(game.players);
                    else {
                        if (!player.hasSkill('tgtt_fspyguilongzhanyuedao_skill_xiaoguo')) player.addTempSkill('tgtt_fspyguilongzhanyuedao_skill_xiaoguo');
                        if (!player.storage.tgtt_fspyguilongzhanyuedao_skill) player.storage.tgtt_fspyguilongzhanyuedao_skill = 0;
                        player.storage.tgtt_fspyguilongzhanyuedao_skill++;
                        player.draw();
                    }
                },
                subSkill: {
                    xiaoguo: {
                        equipSkill: true,
                        charlotte: true,
                        init(player) {
                            if (!player.storage.tgtt_fspyguilongzhanyuedao_skill) player.storage.tgtt_fspyguilongzhanyuedao_skill = 0;
                        },
                        onremove(player) {
                            player.storage.tgtt_fspyguilongzhanyuedao_skill = 0;
                        },
                        mod: {
                            cardUsable(card, player, num) {
                                if (card.name == 'sha') return num + player.storage.tgtt_fspyguilongzhanyuedao_skill;
                            },
                        },
                        popup: false,
                    },
                },
            },
            //刑天破军斧
            tgtt_fspyxingtianpojunfu_skill: {
                audio: 'guanshi_skill',
                equipSkill: true,
                charlotte: true,
                group: 'tgtt_fspyxingtianpojunfu_skill_sha',
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    return player != event.target && player.countCards('he') > 2;
                },
                content() {
                    'step 0';
                    player
                        .chooseToDiscard('he', get.prompt('刑天破军斧', trigger.target), 2, '弃置两张牌,令' + get.translation(trigger.target) + '本回合内不能使用或打出牌且防具失效', function (card, player) {
                            return card != player.getEquip(1);
                        })
                        .set(
                            'goon',
                            (function (event, player) {
                                if (player.hasSkill('tgtt_fspyxingtianpojunfu_skill_xiaoguo')) return false;
                                if (event.parent.excluded.includes(player)) return false;
                                if (get.attitude(event.player, player) > 0) {
                                    return false;
                                }
                                if (get.type(event.card) == 'trick' && event.player.hasWuxie()) return true;
                                if (get.tag(event.card, 'respondSha')) {
                                    if (!player.hasSha()) return false;
                                    return true;
                                } else if (get.tag(event.card, 'respondShan')) {
                                    if (!player.hasShan()) return false;
                                    return true;
                                }
                                return false;
                            })(trigger, trigger.target)
                        )
                        .set('ai', function (card) {
                            if (_status.event.goon) return 7.5 - get.value(card);
                            return 0;
                        });
                    ('step 1');
                    if (result.bool) trigger.target.addTempSkill('tgtt_fspyxingtianpojunfu_skill_xiaoguo');
                },
                subSkill: {
                    sha: {
                        equipSkill: true,
                        charlotte: true,
                        trigger: {
                            player: 'useCard1',
                        },
                        filter(event, player) {
                            if (event.card.name == 'sha') return true;
                        },
                        audio: 'guanshi_skill',
                        check(event, player) {
                            var eff = 0;
                            for (var i = 0; i < event.targets.length; i++) {
                                var target = event.targets[i];
                                var eff1 = get.damageEffect(target, player, player);
                                var eff2 = get.damageEffect(target, player, player, 'thunder');
                                eff += eff2;
                                eff -= eff1;
                            }
                            return eff >= 0;
                        },
                        prompt: '是否发动【刑天破军斧】？',
                        prompt2(event, player) {
                            return '将' + get.translation(event.card) + '改为雷属性';
                        },
                        content() {
                            trigger.card.nature = 'thunder';
                        },
                    },
                    xiaoguo: {
                        equipSkill: true,
                        charlotte: true,
                        mod: {
                            cardEnabled() {
                                return false;
                            },
                            cardSavable() {
                                return false;
                            },
                            cardRespondable() {
                                return false;
                            },
                        },
                        mark: true,
                        intro: {
                            content: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>不能使用或打出牌且防具技能无效直到回合结束',
                        },
                        ai: {
                            unequip2: true,
                        },
                    },
                },
            },
            //修罗炼狱戟
            tgtt_fspyxiuluolianyuji_skill: {
                audio: 'fangtian_skill',
                equipSkill: true,
                charlotte: true,
                mod: {
                    selectTarget(card, player, range) {
                        if (card.name != 'sha') return;
                        if (range[1] == -1) return;
                        range[1] = Infinity;
                    },
                },
                trigger: {
                    source: 'damageBegin1',
                    player: 'useCard',
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'damageBegin1') return event.card && event.card.name == 'sha';
                    else return event.card.name == 'sha' && event.targets.length > player.countCards('h');
                },
                content() {
                    if (event.triggername == 'damageBegin1') {
                        trigger.num++;
                        trigger.tgtt_fspyxiuluolianyuji_skill = true;
                        trigger.player.addSkill('tgtt_fspyxiuluolianyuji_skill_xiaoguo');
                    } else player.turnOver();
                },
                subSkill: {
                    xiaoguo: {
                        equipSkill: true,
                        charlotte: true,
                        trigger: {
                            player: 'damageEnd',
                        },
                        forced: true,
                        popup: false,
                        content() {
                            if (trigger.tgtt_fspyxiuluolianyuji_skill) player.recover();
                            player.removeSkill('tgtt_fspyxiuluolianyuji_skill_xiaoguo');
                        },
                    },
                },
            },
            //赤炎镇魂琴
            tgtt_fspychiyanzhenhunqin_skill: {
                audio: 'zhuque_skill',
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'useCard1',
                    source: ['damageBegin1', 'damageSource'],
                },
                forced: true,
                filter(event, player, name) {
                    if (name == 'useCard1') return event.card.name == 'sha';
                    if (name == 'damageBegin1') return event.nature != 'fire';
                    if (name == 'damageSource') return event.nature == 'fire';
                },
                content() {
                    if (event.triggername != 'damageSource') trigger.nature = 'fire';
                    else player.draw(trigger.num);
                },
                ai: {
                    fireAttack: true,
                },
            },
            //金乌落日弓
            tgtt_fspyjinwuluorigong_skill: {
                audio: 'qilin_skill',
                group: 'tgtt_fspyjinwuluorigong_skill_sha',
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'loseAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.hs && event.hs.length > 1 && player.isPhaseUsing();
                },
                content() {
                    'step 0';
                    event.num = trigger.hs.length;
                    player
                        .chooseTarget(get.prompt('金乌落日弓'), '弃置一名其他角色的' + get.cnNumber(event.num) + '张牌', function (card, player, target) {
                            return player != target && target.countDiscardableCards(player, 'he') > 0;
                        })
                        .set('ai', function (target) {
                            var att = get.attitude(_status.event.player, target);
                            if (target.countDiscardableCards(_status.event.player, 'he') >= _status.event.parent.num) att = att * 2;
                            return -att;
                        });
                    ('step 1');
                    if (result.bool) {
                        var target = result.targets[0];
                        player.discardPlayerCard(target, 'he', true, num);
                    }
                },
                subSkill: {
                    sha: {
                        equipSkill: true,
                        charlotte: true,
                        trigger: {
                            source: 'damageBegin2',
                        },
                        filter(event, player) {
                            return event.card && event.card.name == 'sha' && event.notLink() && event.player.getCards('e').length;
                        },
                        forced: true,
                        audio: 'qilin_skill',
                        content() {
                            'step 0';
                            var att = get.attitude(player, trigger.player) <= 0;
                            var next = player.chooseButton();
                            next.set('att', att);
                            next.set('createDialog', ['是否发动【金乌落日弓】,弃置' + get.translation(trigger.player) + '的一张装备牌？', trigger.player.getCards('e')]);
                            next.set('ai', function (button) {
                                if (_status.event.att) return get.buttonValue(button);
                                return 0;
                            });
                            ('step 1');
                            if (result.bool) {
                                trigger.player.discard(result.links[0]);
                            }
                        },
                    },
                },
            },
            //防具
            //修罗面具
            tgtt_fspyxiuluomianju_skill: {
                audio: 'baiyin_skill',
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: ['turnOverBefore', 'damageBegin4'],
                },
                forced: true,
                filter(event, player, name) {
                    if (player.hasSkillTag('unequip2')) return false;
                    if (name != 'turnOverBefore') {
                        if (event.num <= 1) return false;
                        if (
                            event.source &&
                            event.source.hasSkillTag('unequip', false, {
                                name: event.card ? event.card.name : null,
                                target: player,
                                card: event.card,
                            })
                        )
                            return false;
                        return true;
                    } else return !player.isTurnedOver();
                },
                content() {
                    if (event.triggername != 'turnOverBefore') trigger.num = 1;
                    else trigger.cancel();
                },
                ai: {
                    noturn(player) {
                        return !player.isTurnedOver();
                    },
                    filterDamage: true,
                    skillTagFilter(player, tag, arg) {
                        if (player.hasSkillTag('unequip2')) return false;
                        if (arg && arg.player) {
                            if (
                                arg &&
                                arg.player.hasSkillTag('unequip', false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: player,
                                    card: arg.card,
                                })
                            )
                                return false;
                            if (
                                arg &&
                                arg.player.hasSkillTag('unequip', false, {
                                    name: arg.card ? arg.card.name : null,
                                    target: player,
                                    card: arg.card,
                                })
                            )
                                return false;
                            if (arg && arg.player.hasSkillTag('jueqing', false, player)) return false;
                        }
                    },
                },
            },
            //玄武镇军盾
            tgtt_fspyxuanwuzhenjundun_skill: {
                audio: 'renwang_skill',
                equipSkill: true,
                charlotte: true,
                trigger: {
                    target: 'shaBegin',
                    player: 'damageEnd',
                },
                filter(event, player, name) {
                    if (player.hasSkillTag('unequip2')) return false;
                    if (
                        event.player.hasSkillTag('unequip', false, {
                            name: event.card ? event.card.name : null,
                            target: player,
                            card: event.card,
                        })
                    )
                        return false;
                    if (name == 'shaBegin') return event.card.name == 'sha' && (event.cards.filterInD().length <= 0);
                    if (name == 'damageEnd') return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                    return false;
                },
                forced: true,
                _priority: 6,
                content() {
                    if (event.triggername == 'shaBegin') {
                        if (trigger.cards.filterInD().length <= 0 || !trigger.card.isCard) trigger.cancel();
                    } else player.draw(2);
                },
                ai: {
                    effect: {
                        target(card, player, target, effect) {
                            if (target.hasSkillTag('unequip2')) return;
                            if (
                                player.hasSkillTag('unequip', false, {
                                    name: card ? card.name : null,
                                    target: player,
                                    card: card,
                                }) ||
                                player.hasSkillTag('unequip', false, {
                                    name: card ? card.name : null,
                                    target: player,
                                    card: card,
                                })
                            )
                                return;
                            if (card.name == 'sha' && get.color(card) == 'black') return [1, 0.6];
                            if (card.name == 'sha' && (!['red', 'black'].includes(get.color(card)))) return 'zerotarget';
                        },
                    },
                },
            },
            //奇门八卦阵
            tgtt_fspyqimenbaguazhen_skill: {
                audio: 'bagua_skill',
                equipSkill: true,
                charlotte: true,
                noHidden: true,
                trigger: {
                    player: ['damageBegin4', 'chooseToRespondBegin', 'chooseToUseBegin'],
                },
                filter(event, player, name) {
                    if (player.hasSkillTag('unequip2')) return false;
                    if (name == 'chooseToRespondBegin' || name == 'chooseToUseBegin') {
                        if (event.responded) return false;
                        if (event.bagua_skill) return false;
                        if (!event.filterCard || !event.filterCard({ name: 'shan' }, player, event)) return false;
                        if (event.name == 'chooseToRespond' && !lib.filter.cardRespondable({ name: 'shan' }, player, event)) return false;
                        var evt = event.parent;
                        if (
                            evt.player &&
                            evt.player.hasSkillTag('unequip', false, {
                                name: evt.card ? evt.card.name : null,
                                target: player,
                                card: evt.card,
                            })
                        )
                            return false;
                        return true;
                    } else return event.nature;
                },
                check(event, player, name) {
                    if (name == 'chooseToRespondBegin' || name == 'chooseToUseBegin') {
                        if (event && (event.ai || event.ai1)) {
                            var ai = event.ai || event.ai1;
                            var tmp = _status.event;
                            _status.event = event;
                            var result = ai({ name: 'shan' }, _status.event.player, event);
                            _status.event = tmp;
                            return result > 0;
                        }
                        return true;
                    } else return true;
                },
                content() {
                    'step 0';
                    if (event.triggername != 'chooseToRespondBegin' && event.triggername != 'chooseToUseBegin') {
                        trigger.cancel();
                        event.finish();
                    } else {
                        player.judge('tgtt_fspyqimenbaguazhen_skill', function (card) {
                            return get.color(card) == 'red' ? 1.5 : -0.5;
                        }).judge2 = function (result) {
                            return result.bool;
                        };
                    }
                    ('step 1');
                    if (result.judge > 0) {
                        trigger.untrigger();
                        trigger.set('responded', true);
                        trigger.result = { bool: true, card: { name: 'shan' } };
                    }
                },
                ai: {
                    respondShan: true,
                    nofire: true,
                    nothunder: true,
                    effect: {
                        target(card, player, target, effect) {
                            if (target.hasSkillTag('unequip2')) return;
                            if (
                                player.hasSkillTag('unequip', false, {
                                    name: card ? card.name : null,
                                    target: target,
                                    card: card,
                                }) ||
                                player.hasSkillTag('unequip', false, {
                                    name: card ? card.name : null,
                                    target: target,
                                    card: card,
                                })
                            )
                                return;
                            if (get.tag(card, 'natureDamage')) return 'zerotarget';
                            if (get.tag(card, 'respondShan')) return 0.5;
                        },
                    },
                },
            },
            //国风玉袍
            tgtt_fspyguofengyupao_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (!target.hasSkillTag('unequip2')) {
                            if (player != target) {
                                if (
                                    player.hasSkillTag('unequip', false, {
                                        name: card ? card.name : null,
                                        target: player,
                                        card: card,
                                    })
                                ) {
                                } else if (get.type(card) == 'trick') return false;
                            }
                        }
                    },
                    maxHandcard(player, num) {
                        return 2 + num;
                    },
                },
            },
            //防御坐骑
            //绝尘金戈
            tgtt_fspyjuechenjinge_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.suit == 'heart') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.suit == 'heart') return false;
                    },
                },
            },
            //金鳞
            tgtt_fspyjinlin_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.suit == 'diamond') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.suit == 'diamond') return false;
                    },
                },
            },
            //铁蹄烈奔
            tgtt_fspytietilieben_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return lib.linked.includes(event.nature);
                },
                content() {
                    trigger.num--;
                },
            },
            //玉兰白龙驹
            tgtt_fspyyulanbailongju_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    globalTo(from, to, distance) {
                        return distance + game.countGroup();
                    },
                },
            },
            //奔雷袭电
            tgtt_fspybenleixidian_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    globalTo(from, to, distance) {
                        return distance + to.getDamagedHp();
                    },
                },
            },
            //碧水金睛兽
            tgtt_fspybishuijinjingshou_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                mod: {
                    maxHandcard(player, num) {
                        return 1 + num;
                    },
                },
            },
            //进攻坐骑
            //见血方还
            tgtt_fspyjianxiefanghuan_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.suit == 'spade') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.suit == 'spade') return false;
                    },
                },
            },
            //冷血追命
            tgtt_fspylengxuezhuiming_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.suit == 'club') return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.suit == 'club') return false;
                    },
                },
            },
            //七彩神鹿
            tgtt_fspyqicaishenlu_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return lib.linked.includes(event.nature);
                },
                content() {
                    trigger.num++;
                },
            },
            //撷芳
            tgtt_fspyxiefang_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - game.countGroup();
                    },
                },
            },
            //狂飙
            tgtt_fspykuangbiao_skill: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - to.hp;
                    },
                },
            },
            //骁锐虎豹
            tgtt_fspyxiaoruihubao_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num++;
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + 1;
                    },
                },
            },
            //宝物
            //虚妄之冕
            tgtt_fspyxuwangzhimian_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num += 3;
                },
                mod: {
                    maxHandcard(player, num) {
                        return num - 1;
                    },
                },
            },
            //禅让诏书
            tgtt_fspyshanrangzhaoshu_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    global: 'gainEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.player == _status.currentPhase && event.player.getHistory('gain')[0] == event && player.countCards('he') + event.player.countCards('he') > 0;
                },
                content() {
                    'step 0';
                    event.target = trigger.player;
                    var list = [];
                    if (player.countCards('he') > 1) list.push('交给其一张牌');
                    if (trigger.player.countCards('he') > 0) list.push('令其交给你一张牌');
                    event.list = list;
                    player
                        .chooseControl('cancel2')
                        .set('choiceList', list)
                        .set('prompt', get.prompt('禅让诏书', trigger.player))
                        .set('ai', function () {
                            if (get.attitude(_status.event.player, _status.event.getTrigger().player) < 0) return _status.event.parent.list.length - 1;
                            return 'cancel2';
                        });
                    ('step 1');
                    if (result.control == 'cancel2') {
                        event.finish();
                        return;
                    }
                    if (event.list[result.index][0] == '令') {
                        event.player = target;
                        event.target = player;
                    }
                    ('step 2');
                    player.chooseCard('he', true).set('filterCard', function (card, player) {
                        if (player != _status.event.getTrigger().player) return card != player.getEquip(5);
                        return true;
                    });
                    ('step 3');
                    if (result.cards && result.cards.length) target.gain(result.cards, player, 'giveAuto');
                },
            },
            //益契城防图
            tgtt_fspyyiqichengfangtu_skill: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return target.countCards('h');
                },
                filter(event, player) {
                    return (
                        game.hasPlayer(function (current) {
                            return current != player && current.countCards('h') > 0;
                        }) && player.countCards('h') > 0
                    );
                },
                content() {
                    'step 0';
                    event.mubiao = target;
                    event.num = Math.min(player.countCards('h') * 2, event.mubiao.countCards('h') * 2);
                    event.list1 = [];
                    event.list2 = [];
                    var chooseButton = player.chooseButton([2, event.num], ['你的手牌', player.getCards('h'), get.translation(event.mubiao.name) + '的手牌', event.mubiao.getCards('h')]);
                    chooseButton.set('target', target);
                    chooseButton.set('ai', function (button) {
                        var player = _status.event.player;
                        var target = _status.event.target;
                        var att = get.attitude(player, target);
                        var card = button.link;
                        var owner = get.owner(card);
                        var val = get.value(card) || 1;
                        if (owner == target) {
                            if (att > 0) return 9 - val;
                            else return 2 * val;
                        }
                        return 7 - val;
                    });
                    chooseButton.set('filterButton', function (button) {
                        if (ui.selected.buttons.length % 2 == 0) return event.mubiao.getCards('h').includes(button.link);
                        return !event.mubiao.getCards('h').includes(button.link);
                    });
                    ('step 1');
                    if (result.bool) {
                        event.cards1 = [];
                        event.cards2 = [];
                        for (var i = 0; i < result.links.length; i++) {
                            if (event.mubiao.getCards('h').includes(result.links[i])) {
                                event.cards1.push(result.links[i]);
                            } else {
                                event.cards2.push(result.links[i]);
                            }
                        }
                        player.gain(event.cards1, event.mubiao, 'giveAuto');
                        event.mubiao.gain(event.cards2, player, 'giveAuto');
                    }
                },
                ai: {
                    order: 13,
                    result: {
                        target(player, target, card) {
                            if (
                                game.hasPlayer(function (current) {
                                    return get.attitude(current, player) > 0 && current != player;
                                })
                            )
                                return 1;
                            return -1;
                        },
                    },
                },
            },
            //天机瑶琴
            tgtt_fspytianjiyaoqin_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    global: 'phaseUseBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.player.countCards('he') > 0 && player.countCards('he') > 1;
                },
                content() {
                    'step 0';
                    event.num = Math.min(trigger.player.countCards('he'), 2);
                    event.str = event.num > 1 ? '至多' : '';
                    player
                        .chooseToDiscard(get.prompt('天机瑶琴'), '<center>弃置' + event.str + get.cnNumber(event.num) + '张牌并弃置' + get.translation(trigger.player) + '等量的牌</center>', [1, event.num], 'he', function (card, player) {
                            return card != player.getEquip(5);
                        })
                        .set('ai', function (card) {
                            if (get.attitude(trigger.player, player) > 0) return -10;
                            else return 10 - get.value(card);
                        });
                    ('step 1');
                    if (result.bool == true) {
                        var shuliang = result.cards.length;
                        player.discardPlayerCard(trigger.player, shuliang, 'he', true);
                    }
                },
            },
            //武烈通天纶
            tgtt_fspywulietongtianguan_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player) {
                    return player.getHistory('useCard').length + player.getHistory('respond').length == player.countCards('e');
                },
                check(event, player) {
                    return true;
                },
                content() {
                    player.draw(player.getHistory('useCard').length + player.getHistory('respond').length);
                },
            },
            //绒械命倚车
            tgtt_fspyrongxiemingyiche_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseEnd',
                },
                filter(event, player) {
                    return player.getEquip(5);
                },
                check(event, player) {
                    return true;
                },
                content() {
                    'step 0';
                    player.draw(2, 'bottom');
                    ('step 1');
                    if (player.countCards('he') > 1 && player.getEquip(5))
                        player
                            .chooseCard(true, 1, 'he', '将一张牌置于牌堆顶', function (card, player) {
                                return card != player.getEquip(5);
                            })
                            .set('ai', function (card) {
                                return 10 - get.value(card);
                            });
                    ('step 2');
                    if (result.bool && result.cards.length) player.lose(result.cards[0], ui.special);
                    ('step 3');
                    result.cards[0].fix();
                    ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
                    player.update();
                    game.updateRoundNumber();
                    game.log(player, '将' + get.cnNumber(result.cards.length) + '张牌置入了牌堆底顶');
                    ('step 4');
                    if (player.countCards('he') > 1 && player.getEquip(5))
                        player
                            .chooseCard(true, 1, 'he', '将一张牌置于牌堆顶', function (card, player) {
                                return card != player.getEquip(5);
                            })
                            .set('ai', function (card) {
                                return 10 - get.value(card);
                            });
                    ('step 5');
                    if (result.bool && result.cards.length) player.lose(result.cards[0], ui.special);
                    ('step 6');
                    result.cards[0].fix();
                    ui.cardPile.insertBefore(result.cards[0], ui.cardPile.firstChild);
                    player.update();
                    game.updateRoundNumber();
                    game.log(player, '将' + get.cnNumber(result.cards.length) + '张牌置入了牌堆顶');
                },
            },
            //七星袍
            tgtt_fspyqixingpao_skill: {
                equipSkill: true,
                charlotte: true,
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return (
                        game.hasPlayer(function (current) {
                            return current.isDamaged();
                        }) &&
                        player.countCards('he') > 1 &&
                        player.getEquip(5)
                    );
                },
                filterCard(card, player) {
                    var num = 0;
                    for (var i = 0; i < ui.selected.cards.length; i++) {
                        num += ui.selected.cards[i].number;
                    }
                    return card.number + num <= 7 && card != player.getEquip(5);
                },
                position: 'he',
                filterTarget(card, player, target) {
                    return target.isDamaged();
                },
                selectCard() {
                    var num = 0;
                    for (var i = 0; i < ui.selected.cards.length; i++) {
                        num += ui.selected.cards[i].number;
                    }
                    if (num == 7) return ui.selected.cards.length;
                    return ui.selected.cards.length + 2;
                },
                selectTarget() {
                    return [1, ui.selected.cards.length];
                },
                check(card) {
                    var num = 0;
                    for (var i = 0; i < ui.selected.cards.length; i++) {
                        num += ui.selected.cards[i].number;
                    }
                    if (num + card.number == 7) return 9 - get.value(card);
                    if (ui.selected.cards.length == 0) {
                        var cards = _status.event.player.getCards('he');
                        for (var i = 0; i < cards.length; i++) {
                            for (var j = i + 1; j < cards.length; j++) {
                                if (cards[i].number + cards[j].number == 7) {
                                    if (cards[i] == card || cards[j] == card) return 8.5 - get.value(card);
                                }
                            }
                        }
                    }
                    return 0;
                },
                content() {
                    for (var i = 0; i < targets.length; i++) {
                        targets[i].recover();
                    }
                },
                ai: {
                    order(skill, player) {
                        if (
                            game.hasPlayer(function (current) {
                                return current.hp < current.maxHp && current != player && get.recoverEffect(current, player, player) > 0;
                            })
                        ) {
                            return 10;
                        }
                        return 1;
                    },
                    result: {
                        player(player, target) {
                            if (get.attitude(player, target) < 0) return -1;
                            var eff = get.recoverEffect(target, player, player);
                            if (eff < 0) return 0;
                            if (eff > 0) {
                                if (target.hp == 1) return 3;
                                return 2;
                            }
                            if (player.needsToDiscard()) return 1;
                            return 0;
                        },
                    },
                },
            },
            //灵蛇髻
            tgtt_fspylingsheji_skill: {
                equipSkill: true,
                charlotte: true,
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() {
                    'step 0';
                    var list = ['摸一张牌'];
                    if (player.countCards('he') > 1) list.push('弃置一张牌,并获得一名其他角色一张牌');
                    player
                        .chooseControl('cancel2')
                        .set('prompt', get.prompt('灵蛇髻'))
                        .set('choiceList', list)
                        .set('ai', function () {
                            var player = _status.event.player;
                            if (!player.needsToDiscard()) return 0;
                            return 1;
                        });
                    ('step 1');
                    if (result.control == 'cancel2') {
                        event.finish();
                        return;
                    }
                    if (result.index == 0) {
                        player.draw();
                        event.finish();
                    } else {
                        var next = player.chooseCardTarget({
                            position: 'he',
                            filterCard(card, player) {
                                return lib.filter.cardDiscardable && card != player.getEquip(5);
                            },
                            filterTarget(card, player, target) {
                                return target != player && target.countCards('he') > 0;
                            },
                            ai1(card, player) {
                                return 6 - get.value(card);
                            },
                            ai2(player, target) {
                                return -get.attitude(player, target);
                            },
                            prompt: get.prompt('灵蛇髻'),
                            prompt2: '弃置一张牌并获得一名其他角色一张牌',
                        });
                    }
                    ('step 2');
                    if (result.targets?.length) {
                        player.line(result.targets[0]);
                        player.discard(result.cards);
                        player.gainPlayerCard('he', result.targets[0], true);
                    }
                },
            },
            //三六天罡
            //七二地煞
            //九江水帝
            //五湖大神
            //哼哈三将
        }, //技能
        card: {
            //天帝天后
            //紫薇帝御
            //食物
            //鲈鱼羹
            tgtt_dyltyluyugeng: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyluyugeng.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyluyugeng = card;
                    target.storage.tgtt_dyltyluyugeng_markcount = 3;
                    target.addSkill('tgtt_dyltyluyugeng');
                    target.addSkill('tgtt_dyltyluyugeng_use');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target: 1,
                    },
                },
            },
            //春饼
            tgtt_dyltychunbing: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltychunbing.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltychunbing = card;
                    target.storage.tgtt_dyltychunbing_markcount = 5;
                    target.addSkill('tgtt_dyltychunbing');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            var num = target.needsToDiscard();
                            if (num > 0) {
                                if (target == player && num > 1) {
                                    return num;
                                }
                                return Math.sqrt(num);
                            }
                            return 0;
                        },
                    },
                },
            },
            //骨董羹
            tgtt_dyltygudonggeng: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltygudonggeng.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltygudonggeng = card;
                    target.storage.tgtt_dyltygudonggeng_markcount = 3;
                    target.addSkill('tgtt_dyltygudonggeng');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (player == target && !player.hasShan()) return 2;
                            return 1 / Math.max(1, target.hp);
                        },
                    },
                },
            },
            //鲤鱼汤
            tgtt_dyltyliyutang: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyliyutang.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyliyutang = card;
                    target.storage.tgtt_dyltyliyutang_markcount = 2;
                    target.addSkill('tgtt_dyltyliyutang');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (player == target && target.isMinHp()) return 2;
                            if (target.isMinHp()) return 1.5;
                            return 1 / Math.max(1, target.hp);
                        },
                    },
                },
            },
            //蜜汁莲藕
            tgtt_dyltymizhilianou: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltymizhilianou.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltymizhilianou = card;
                    target.storage.tgtt_dyltymizhilianou_markcount = 4;
                    target.addSkill('tgtt_dyltymizhilianou');
                    target.addSkill('tgtt_dyltymizhilianou_use');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (target == player) {
                                if (target.countCards('he', { suit: 'heart' })) {
                                    if (target.isDamaged()) return 1.5;
                                } else {
                                    return 0.2;
                                }
                            } else if (target.isDamaged()) {
                                return 1;
                            }
                            return 0.5;
                        },
                    },
                },
            },
            //虾饺
            tgtt_dyltyxiajiao: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyxiajiao.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyxiajiao = card;
                    target.storage.tgtt_dyltyxiajiaoo_markcount = 3;
                    target.addSkill('tgtt_dyltyxiajiao');
                    target.addTempSkill('tgtt_dyltyxiajiao');
                },
                ai: {
                    order: 2,
                    value: 5,
                    result: {
                        target: 1,
                    },
                },
            },
            //昙花冻
            tgtt_dyltytanhuadong: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltytanhuadong.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltytanhuadong = card;
                    target.storage.tgtt_dyltytanhuadong_markcount = 3;
                    target.addSkill('tgtt_dyltytanhuadong');
                },
                ai: {
                    order: 2,
                    value: 5,
                    result: {
                        target: 1,
                    },
                },
            },
            //麻婆豆腐
            tgtt_dyltymapodoufu: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltymapodoufu.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    if (target == targets[0] && cards.length) target.$gain2(cards);
                    target.storage.tgtt_dyltymapodoufu = card;
                    target.storage.tgtt_dyltymapodoufu_markcount = 2;
                    target.addSkill('tgtt_dyltymapodoufu');
                },
                ai: {
                    order: 1,
                    value: 5,
                    result: {
                        target(player, target) {
                            return player == target ? 2 : 1;
                        },
                    },
                },
            },
            //青团
            tgtt_dyltyqingtuan: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyqingtuan.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyqingtuan = card;
                    target.storage.tgtt_dyltyqingtuan_markcount = 2;
                    target.addSkill('tgtt_dyltyqingtuan');
                },
                ai: {
                    order: 4,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (target == player) {
                                if (target.hasSha()) return 2;
                            } else {
                                var nh = target.countCards('h');
                                if (nh >= 3) return 1;
                                if (target.hasSha()) return 1;
                                if (nh && Math.random() < 0.5) return 1;
                            }
                            return player.needsToDiscard() ? 0.2 : 0;
                        },
                    },
                },
            },
            //酉羹
            tgtt_dyltyyougeng: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyyougeng.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyyougeng = card;
                    target.storage.tgtt_dyltyyougeng_markcount = 2;
                    target.addSkill('tgtt_dyltyyougeng');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (target.isHealthy()) return player.needsToDiscard() ? 0.1 : 0;
                            if (target.isMinHp()) return 1.5;
                            return 1 / Math.max(1, target.hp);
                        },
                    },
                },
            },
            //茉莉茶
            tgtt_dyltymolicha: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltymolicha.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltymolicha = card;
                    target.storage.tgtt_dyltymolicha_markcount = 4;
                    target.addSkill('tgtt_dyltymolicha');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target: 1,
                    },
                },
            },
            //元宝肉
            tgtt_dyltyyuanbaorou: {
                fullskin: true,
                type: 'food',
                enable: true,
                image: 'ext:太古天庭/image/card/tgtt_dyltyyuanbaorou.png',
                filterTarget(card, player, target) {
                    return true;
                },
                //range:{global:1},
                content() {
                    target.$gain2(cards);
                    target.storage.tgtt_dyltyyuanbaorou = card;
                    target.storage.tgtt_dyltyyuanbaorou_markcount = 4;
                    target.addSkill('tgtt_dyltyyuanbaorou');
                },
                ai: {
                    order: 2,
                    value: 4,
                    result: {
                        target(player, target) {
                            if (target == player) {
                                if (target.hasSha()) return 2;
                            } else {
                                var nh = target.countCards('h');
                                if (nh >= 3) return 1;
                                if (target.hasSha()) return 1;
                                if (nh && Math.random() < 0.5) return 1;
                            }
                            return player.needsToDiscard() ? 0.2 : 0;
                        },
                    },
                },
            },
            //特殊装备
            //武器
            //开天斧
            tgtt_dykaitianfu: {
                image: 'ext:太古天庭/image/card/tgtt_dykaitianfu.png',
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -Infinity,
                },
                skills: ['tgtt_dykaitianfu1', 'tgtt_dykaitianfu2'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //轩辕剑
            tgtt_dyxuanyuanjian: {
                image: 'ext:太古天庭/image/card/tgtt_dyxuanyuanjian.png',
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -9,
                },
                skills: ['tgtt_dyxuanyuanjian1', 'tgtt_dyxuanyuanjian2'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //防具
            //神农鼎
            tgtt_dyshennongding: {
                image: 'ext:太古天庭//image/card/tgtt_dyshennongding.png',
                type: 'equip',
                subtype: 'equip2',
                skills: ['tgtt_dyshennongding1', 'tgtt_dyshennongding2'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //防御坐骑
            //昊天塔
            tgtt_dyhaotianta: {
                image: 'ext:太古天庭/image/card/tgtt_dyhaotianta.png',
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_dyhaotianta1', 'tgtt_dyhaotianta2', 'tgtt_dyhaotianta2_count'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //昆仑镜
            tgtt_dykunlunjing: {
                image: 'ext:太古天庭/image/card/tgtt_dykunlunjing.png',
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_dykunlunjing1', 'tgtt_dykunlunjing2', 'tgtt_dykunlunjing2_mark'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //进攻坐骑
            //女娲石
            tgtt_dynvwashi: {
                image: 'ext:太古天庭/image/card/tgtt_dynvwashi.png',
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_dynvwashi1', 'tgtt_dynvwashi2'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //伏羲琴
            tgtt_dyfuxiqin: {
                image: 'ext:太古天庭/image/card/tgtt_dyfuxiqin.png',
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_dyfuxiqin1', 'tgtt_dyfuxiqin2', 'tgtt_dyfuxiqin2_count'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //宝物
            //炼妖壶
            tgtt_dylianyaohu: {
                image: 'ext:太古天庭/image/card/tgtt_dylianyaohu.png',
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_dylianyaohu1', 'tgtt_dylianyaohu2', 'tgtt_dyshouna', 'tgtt_dylianhua'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
                fullskin: true,
            },
            //太古四圣
            //圣歼之战
            //命途星神
            //三清六御
            //五方老君
            //金母木公
            //三象天尊
            //三官大帝
            //十方天尊
            //四大天师
            //南斗六星
            //北斗七星
            //五炁真君
            //元帅真君
            //九曜星宫
            //四灵守护
            //二十八宿
            //五大天王
            //四大元帅
            //雷公电母
            //全海龙王
            //五岳大帝
            //五大龙神
            //五大水神
            //十殿阎罗
            //四值功曹
            //三十六将
            //六十甲子
            //蒲元
            //特殊装备
            //雷影驹
            tgtt_fspyleiyingju: {
                image: 'ext:太古天庭/image/card/tgtt_fspyleiyingju.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip6',
                subtypes: ['equip3', 'equip4'],
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspyleiyingju_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //梦魇赤兔
            tgtt_fspymengyanchitu: {
                image: 'ext:太古天庭/image/card/tgtt_fspymengyanchitu.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip6',
                subtypes: ['equip3', 'equip4'],
                distance: {
                    globalFrom: -2,
                    globalTo: 1,
                },
                ai: {
                    basic: {
                        equipValue: 7.2,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //玄血龙魂
            tgtt_fspyxuanxuelonghun: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxuanxuelonghun.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip6',
                subtypes: ['equip3', 'equip4'],
                distance: {
                    globalFrom: -1,
                    globalTo: 2,
                },
                ai: {
                    equipValue: 8,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //逐日
            tgtt_fspyzhuri: {
                image: 'ext:太古天庭/image/card/tgtt_fspyzhuri.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip6',
                subtypes: ['equip3', 'equip4'],
                distance: {
                    globalFrom: -1,
                    globalTo: 3,
                },
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //武器
            //赤血青锋
            tgtt_fspychixueqingfeng: {
                image: 'ext:太古天庭/image/card/tgtt_fspychixueqingfeng.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -1,
                },
                skills: ['tgtt_fspychixueqingfeng_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //鸾凤和鸣剑
            tgtt_fspyluanfenghemingjian: {
                image: 'ext:太古天庭/image/card/tgtt_fspyluanfenghemingjian.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -2,
                },
                skills: ['tgtt_fspyluanfenghemingjian_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //鬼龙斩月刀
            tgtt_fspyguilongzhanyuedao: {
                image: 'ext:太古天庭/image/card/tgtt_fspyguilongzhanyuedao.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -2,
                },
                skills: ['tgtt_fspyguilongzhanyuedao_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //刑天破军斧
            tgtt_fspyxingtianpojunfu: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxingtianpojunfu.png',
                type: 'equip',
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                skills: ['tgtt_fspyxingtianpojunfu_skill'],
                ai: {
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                fullskin: true,
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //修罗炼狱戟
            tgtt_fspyxiuluolianyuji: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxiuluolianyuji.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                skills: ['tgtt_fspyxiuluolianyuji_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //赤炎镇魂琴
            tgtt_fspychiyanzhenhunqin: {
                image: 'ext:太古天庭/image/card/tgtt_fspychiyanzhenhunqin.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -3,
                },
                skills: ['tgtt_fspychiyanzhenhunqin_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //金乌落日弓
            tgtt_fspyjinwuluorigong: {
                image: 'ext:太古天庭/image/card/tgtt_fspyjinwuluorigong.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip1',
                distance: {
                    attackFrom: -8,
                },
                skills: ['tgtt_fspyjinwuluorigong_skill'],
                ai: {
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //防具
            //修罗面具
            tgtt_fspyxiuluomianju: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxiuluomianju.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                filterLose(card, player) {
                    if (player.hasSkillTag('unequip2')) return false;
                    return true;
                },
                skills: ['tgtt_fspyxiuluomianju_skill'],
                tag: {
                    recover: 1,
                },
                ai: {
                    order: 9.5,
                    equipValue(card, player) {
                        if (player.hp == player.maxHp) return 5;
                        if (player.countCards('h', 'tgtt_fspyxiuluomianju_skill')) return 6;
                        return 0;
                    },
                    basic: {
                        equipValue: 5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //玄武镇军盾
            tgtt_fspyxuanwuzhenjundun: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxuanwuzhenjundun.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['tgtt_fspyxuanwuzhenjundun_skill'],
                ai: {
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //奇门八卦阵
            tgtt_fspyqimenbaguazhen: {
                image: 'ext:太古天庭/image/card/tgtt_fspyqimenbaguazhen.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                ai: {
                    basic: {
                        equipValue: 7.5,
                        order: 1,
                        useful: 2,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                skills: ['tgtt_fspyqimenbaguazhen_skill'],
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //国风玉袍
            tgtt_fspyguofengyupao: {
                image: 'ext:太古天庭/image/card/tgtt_fspyguofengyupao.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip2',
                skills: ['tgtt_fspyguofengyupao_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //防御坐骑
            //绝尘金戈
            tgtt_fspyjuechenjinge: {
                image: 'ext:太古天庭/image/card/tgtt_fspyjuechenjinge.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspyjuechenjinge_skill'],
                ai: {
                    equipValue: 8,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 7,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //金鳞
            tgtt_fspyjinlin: {
                image: 'ext:太古天庭/image/card/tgtt_fspyjinlin.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspyjinlin_skill'],
                ai: {
                    equipValue: 8,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 7,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //铁蹄烈奔
            tgtt_fspytietilieben: {
                image: 'ext:太古天庭/image/card/tgtt_fspytietilieben.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspytietilieben_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //玉兰白龙驹
            tgtt_fspyyulanbailongju: {
                image: 'ext:太古天庭/image/card/tgtt_fspyyulanbailongju.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspyyulanbailongju_skill'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //奔雷袭电
            tgtt_fspybenleixidian: {
                image: 'ext:太古天庭/image/card/tgtt_fspybenleixidian.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspybenleixidian_skill'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //避水金睛兽
            tgtt_fspybishuijinjingshou: {
                image: 'ext:太古天庭/image/card/tgtt_fspybishuijinjingshou.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip3',
                distance: {
                    globalTo: 1,
                },
                skills: ['tgtt_fspybishuijinjingshou_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //进攻坐骑
            //见血方还
            tgtt_fspyjianxiefanghuan: {
                image: 'ext:太古天庭/image/card/tgtt_fspyjianxiefanghuan.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspyjianxiefanghuan_skill'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 7,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //冷血追命
            tgtt_fspylengxuezhuiming: {
                image: 'ext:太古天庭/image/card/tgtt_fspylengxuezhuiming.png',
                type: 'equip',
                fullskin: true,
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspylengxuezhuiming_skill'],
                ai: {
                    equipValue: 7,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 7,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //七彩神鹿
            tgtt_fspyqicaishenlu: {
                image: 'ext:太古天庭/image/card/tgtt_fspyqicaishenlu.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspyqicaishenlu_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //撷芳
            tgtt_fspyxiefang: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxiefang.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspyxiefang_skill'],
                ai: {
                    equipValue: 6,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //狂飙
            tgtt_fspykuangbiao: {
                image: 'ext:太古天庭/image/card/tgtt_fspykuangbiao.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspykuangbiao_skill'],
                ai: {
                    equipValue: 6,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //骁锐虎豹
            tgtt_fspyxiaoruihubao: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxiaoruihubao.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip4',
                distance: {
                    globalFrom: -1,
                },
                skills: ['tgtt_fspyxiaoruihubao_skill'],
                ai: {
                    equipValue: 8,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 4,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //宝物
            //虚妄之冕
            tgtt_fspyxuwangzhimian: {
                image: 'ext:太古天庭/image/card/tgtt_fspyxuwangzhimian.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspyxuwangzhimian_skill'],
                ai: {
                    equipValue: 9,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //禅让诏书
            tgtt_fspyshanrangzhaoshu: {
                image: 'ext:太古天庭/image/card/tgtt_fspyshanrangzhaoshu.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspyshanrangzhaoshu_skill'],
                ai: {
                    equipValue: 7.5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //益契城防图
            tgtt_fspyyiqichengfangtu: {
                image: 'ext:太古天庭/image/card/tgtt_fspyyiqichengfangtu.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspyyiqichengfangtu_skill'],
                ai: {
                    equipValue: 6,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //天机瑶琴
            tgtt_fspytianjiyaoqin: {
                image: 'ext:太古天庭/image/card/tgtt_fspytianjiyaoqin.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspytianjiyaoqin_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //七星袍
            tgtt_fspyqixingpao: {
                image: 'ext:太古天庭/image/card/tgtt_fspyqixingpao.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspyqixingpao_skill'],
                ai: {
                    equipValue: 6,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //绒械命倚车
            tgtt_fspyrongxiemingyiche: {
                image: 'ext:太古天庭/image/card/tgtt_fspyrongxiemingyiche.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspyrongxiemingyiche_skill'],
                ai: {
                    equipValue: 5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //武烈通天纶
            tgtt_fspywulietongtianguan: {
                image: 'ext:太古天庭/image/card/tgtt_fspywulietongtianguan.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspywulietongtianguan_skill'],
                ai: {
                    equipValue: 6,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //灵蛇髻
            tgtt_fspylingsheji: {
                image: 'ext:太古天庭/image/card/tgtt_fspylingsheji.png',
                audio: true,
                fullskin: true,
                type: 'equip',
                subtype: 'equip5',
                skills: ['tgtt_fspylingsheji_skill'],
                ai: {
                    equipValue: 7.5,
                    basic: {
                        order: 1,
                        useful: 2,
                        equipValue: 1,
                        value: 1,
                    },
                    result: {
                        target(player, target, card) {
                            return get.equipResult(player, target, card.name);
                        },
                    },
                },
                enable: true,
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return target == player;
                },
                modTarget: true,
                allowMultiple: false,
                content() {
                    if (cards.length && get.position(cards[0], true) == 'o') target.equip(cards[0]);
                },
                toself: true,
            },
            //三六天罡
            //七二地煞
            //一刀斩
            tgtt_fsyidaozhan: {
                image: 'ext:太古天庭/image/card/tgtt_fsyidaozhan.jpg',
                enable: true,
                type: 'trick',
                fullskin: true,
                filterTarget(card, player, target) {
                    return target != player;
                },
                yingbian_prompt: '当你使用此牌选择目标后,你可为此牌增加一个目标',
                yingbian_tags: ['add'],
                content() {
                    target.damage(get.nature(event.card), target.maxHp);
                },
                ai: {
                    basic: {
                        order: 5,
                        useful: 2,
                        value: 6,
                    },
                    yingbian(card, player, targets, viewer) {
                        if (get.attitude(viewer, player) <= 0) return 0;
                        if (
                            game.hasPlayer(function (current) {
                                return !targets.includes(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                            })
                        )
                            return 6;
                        return 0;
                    },
                    result: {
                        target(player, target) {
                            return -target.hp;
                        },
                    },
                    tag: {
                        damage: 1,
                    },
                },
                selectTarget: 1,
            },
            //九江水帝
            //五湖大神
            //哼哈三将
        },
        translate: {
            //机制卡牌
            tgtt_windsha: '<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风</span>杀',
            tgtt_windsha_info: '一名角色受到<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风</span>伤害时,弃置至少一张牌;每额外弃置一张牌,此伤害减少1点.',
            _tgtt_windsha: '<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风</span>杀',
            _tgtt_windsha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #0aba0a,0 0 8px #018801;color: white">风</span>伤害.',
            tgtt_quantumsha: '<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">☯虚数</span>杀',
            tgtt_quantumsha_info: '一名角色使用<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">☯虚数</span>【杀】指定目标后,可以重铸一张牌,目标角色随机重铸一张同类型的牌.',
            _tgtt_quantumsha: '<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">☯虚数</span>杀',
            _tgtt_quantumsha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #07a6f0,0 0 8px #0a1bb9;color: white">☯虚数</span>伤害.',
            tgtt_imaginarysha: '<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">☯虚数</span>杀',
            tgtt_imaginarysha_info: '一名角色受到<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">☯虚数</span>伤害时,本回合护甲和防具失效.',
            _tgtt_imaginarysha: '<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">☯虚数</span>杀',
            _tgtt_imaginarysha_info: '出牌阶段,对你攻击范围内的一名角色使用.其须使用一张【闪】,否则你对其造成1点<span style="text-shadow: 1px 1px 2px #ffee00,0 0 8px #ccaa11;color: white">☯虚数</span>伤害.',
            //天帝天后
            //紫薇帝御
            //食物
            tgtt_dyltychunbing: '春饼',
            tgtt_dyltychunbing_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你的手牌上限+X(X为你的体力上限且至多为9),持续五回合',
            tgtt_dyltygudonggeng: '骨董羹',
            tgtt_dyltygudonggeng_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>当你下一次受到伤害时,令伤害-X(X为你的体力上限且至多为9),持续三回合',
            tgtt_dyltyyougeng: '酉羹',
            tgtt_dyltyyougeng_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>准备阶段,你回复X点体力(X为你的体力上限且至多为9),持续两回合',
            tgtt_dyltyliyutang: '鲤鱼汤',
            tgtt_dyltyliyutang_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>结束阶段,你获得X点护甲(X为你的体力上限且至多为9),持续两回合',
            tgtt_dyltymizhilianou: '蜜汁莲藕',
            tgtt_dyltymizhilianou_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你可以将一张非<font color=black>♠️️</font>牌当作桃使用,持续四回合',
            tgtt_dyltyxiajiao: '虾饺',
            tgtt_dyltyxiajiao_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你在摸牌阶段额外摸X张牌(X为你的体力上限且至多为9),弃置一张牌,持续三回合',
            tgtt_dyltytanhuadong: '昙花冻',
            tgtt_dyltytanhuadong_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>出牌阶段结束时,你摸X张牌(X为你的体力上限且至多为9),回复1点体力并获得1点护甲,持续三回合',
            tgtt_dyltyqingtuan: '青团',
            tgtt_dyltyqingtuan_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你在回合内使用首张【杀】时,摸一张牌,回复X点体力并获得X点护甲(X为你的体力上限且至多为9),持续两回合',
            tgtt_dyltyluyugeng: '鲈鱼羹',
            tgtt_dyltyluyugeng_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>出牌阶段限一次,你可以弃置一张非装备牌并' + get.tgttIntroduce('Faxian') + 'X张牌,随机附加X层<font color=yellow>' + get.tgttIntroduce('PsBuff') + '</font>(X为你的体力上限且至多为9),持续三回合',
            tgtt_dyltyyuanbaorou: '元宝肉',
            tgtt_dyltyyuanbaorou_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你在出牌阶段可以额外使用X张【杀】/【酒】(X为你的体力上限且至多为9),持续四回合',
            tgtt_dyltymolicha: '茉莉茶',
            tgtt_dyltymolicha_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>你不能成为其他角色牌的目标且你的进攻距离/防御距离均+X(X为你的体力上限且至多为9),持续四回合',
            tgtt_dyltymapodoufu: '麻婆豆腐',
            tgtt_dyltymapodoufu_info: '<font color=orange>' + get.tgttIntroduce('Shiwuji') + ',</font></br>结束阶段,你弃置一名随机敌人的一张随机牌,令其失去1点体力并随机附加一层<font color=red>' + get.tgttIntroduce('NgBuff') + '</font>,持续两回合',
            //武器
            tgtt_dyxuanyuanjian: '轩辕剑',
            tgtt_dyxuanyuanjian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.你造成的伤害+1且你造成的无属性伤害视为神属性伤害;</br>2.每当你造成1点伤害后,你回复1点体力并获得1点护甲',
            tgtt_dykaitianfu: '开天斧',
            tgtt_dykaitianfu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.每当你造成1点伤害,受伤角色须弃置一张牌;</br>2.你造成的伤害+X(X为你已损失的体力值)',
            //防具
            tgtt_dyshennongding: '神农鼎',
            tgtt_dyshennongding_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.你可以将两张牌当做【桃】使用;</br>2.出牌阶段限一次,你可以弃置两张牌,增加1点体力上限,回复1点体力并获得1点护甲',
            //防御坐骑
            tgtt_dyhaotianta: '昊天塔',
            tgtt_dyhaotianta_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.当一名角色判定牌生效前,你可以亮出牌堆顶上的十张牌,选择一张作为判定牌,你增加1点体力上限,此判定不可被更改;</br>2.<li>①若你的装备区内没有武器牌,则你手牌区内所有【杀】的属性视为无属性;<br><li>②当你使用牌时,或成为其他角色使用牌的目标后,你记录此牌的花色;<br><li>③当你使用【杀】指定唯一目标后,若你【昊天塔②】的记录不为空,则你可亮出牌堆顶的X张牌(X为你【昊天塔②】记录过的花色数-1),令此【杀】的伤害值基数+Y(Y为亮出牌中被【昊天塔②】记录过花色的牌的数量),且目标角色不能使用【昊天塔②】记录过花色的牌响应此【杀】.此【杀】使用结算结束后,你清除【昊天塔②】的记录;</br>3.其他角色计算与你的距离+1',
            tgtt_dykunlunjing: '昆仑镜',
            tgtt_dykunlunjing_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.出牌阶段限一次,你可以展示牌堆顶上的十张牌,选择用一张牌替换一张展示的牌,你增加1点体力上限,回复1点体力并获得1点护甲;</br>2.当你于出牌阶段使用牌结算结束后,若此牌的目标角色中存在本阶段你未记录的角色,则你记录这些角色,根据记录的角色数,你可以执行对应的效果:<br><li>①记录1名,从牌堆或弃牌堆中获得一张指定类型的牌;<br><li>②记录2名,视为对一名角色使用一张普通锦囊牌;<br><li>③记录3名,对所有记录的角色造成1点伤害;</br>3.其他角色计算与你的距离+1',
            //进攻坐骑
            tgtt_dynvwashi: '女娲石',
            tgtt_dynvwashi_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.当一名角色濒死时,若你的体力值大于1,你可以失去1点体力,减少1点体力上限并获得1点护甲,令该角色增加1点体力上限,回复1点体力并摸1张牌;</br><font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font></br>2.当你减少体力上限/失去体力/受到伤害后,</br><li>阴:你摸两张牌并增加1点体力上限;</br><li>阳:回复1点体力并获得1点护甲;</br>3.你计算与其他角色的距离-1',
            tgtt_dyfuxiqin: '伏羲琴',
            tgtt_dyfuxiqin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.出牌阶段限三次,你可以与一名其他角色进行拼点,若你赢,你可以指定另一名角色视为对方对该角色使用一张【杀】, 否则对方可弃置你一张牌,你增加1点体力上限并回复1点体力;</br>2.<li>①当你声明使用或打出牌时,你记录此牌的牌名并获得1点护甲;<br><li>②当你使用或打出的牌结算结束后,若你的【伏羲琴】记录中包含至少九种不同的牌名,则你可以展示牌堆顶的九张牌,选择并获得其中任意张点数各不相同且这九张牌中存在未被选择且和已选择的牌点数相同的牌,清除所有的记录,将其余牌置入弃牌堆,你摸三张牌并获得3点护甲;</br>3.你计算与其他角色的距离-1',
            //宝物
            tgtt_dylianyaohu: '炼妖壶',
            tgtt_dylianyaohu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>1.出牌阶段限三次,你可以弃置一张牌并将一名其他角色的一张牌置入【炼妖壶】,你增加1点体力上限并获得1点护甲且出牌阶段,你可以弃置两张【炼妖壶】中的牌,从牌堆中获得一张与弃置的牌类别均不相同的牌,你回复1点体力并摸一张牌;</br>2.回合结束时,你可以令所有其他角色失去1点体力并减少1点体力上限,你可以摸2X张牌或回复X点体力(X为你本回合造成的伤害)且你增加一点体力上限并获得1点护甲',
            //太古四圣
            //圣歼之战
            //命途星神
            //三清六御
            //五方老君
            //金母木公
            //三象天尊
            //三官大帝
            //十方天尊
            //四大天师
            //南斗六星
            //北斗七星
            //五炁真君
            //元帅真君
            //九曜星宫
            //四灵守护
            //二十八宿
            //五大天王
            //四大元帅
            //雷公电母
            //全海龙王
            //五岳大帝
            //五大龙神
            //五大水神
            //十殿阎罗
            //四值功曹
            //三十六将
            //六十甲子
            //特殊装备
            tgtt_fspyleiyingju: '雷影驹',
            tgtt_fspyleiyingju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离时始终为1;</br><li>②其他角色计算与你的距离+1',
            tgtt_fspymengyanchitu: '梦魇赤兔',
            tgtt_fspymengyanchitu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-2;</br><li>②其他角色计算与你的距离+1',
            tgtt_fspyxuanxuelonghun: '玄血龙魂',
            tgtt_fspyxuanxuelonghun_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-1;</br><li>②其他角色计算与你的距离+2',
            tgtt_fspyzhuri: '逐日',
            tgtt_fspyzhuri_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-1;</br><li>②其他角色计算与你的距离+3',
            //武器
            tgtt_fspychixueqingfeng: '赤血青锋',
            tgtt_fspychixueqingfeng_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>当你使用【杀】指定目标后,于此【杀】结算前其防具失效且不能使用或打出手牌',
            tgtt_fspyluanfenghemingjian: '鸾凤和鸣剑',
            tgtt_fspyluanfenghemingjian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>你使用【杀】指定目标后,你可以令其选择一项:</br><li>①令你摸一张牌;</br><li>②弃置一张手牌,若为属性【杀】,则直接执行上述两项',
            tgtt_fspyguilongzhanyuedao: '鬼龙斩月刀',
            tgtt_fspyguilongzhanyuedao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①当你使用的【杀】被目标使用的【闪】抵消后,你摸一张牌且本回合使用【杀】的次数+1;</br><li>②你使用红色【杀】无次数限制且不能被目标的【闪】响应',
            tgtt_fspyxingtianpojunfu: '刑天破军斧',
            tgtt_fspyxingtianpojunfu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①当你使用牌指定目标后,你可以弃置两张牌,令其本回合其不能使用或打出手牌并使其防具失效;</br><li>②你使用【杀】时,可以将此【杀】改为雷【杀】',
            tgtt_fspyxiuluolianyuji: '修罗炼狱戟',
            tgtt_fspyxiuluolianyuji_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你使用【杀】可以指定任意名角色为目标,若指定的目标数大于你的手牌数,你翻面;</br><li>②当你使用【杀】对目标角色造成伤害时,此伤害＋1,伤害结算后其回复1点体力',
            tgtt_fspychiyanzhenhunqin: '赤焰镇魂琴',
            tgtt_fspychiyanzhenhunqin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你使用的【杀】视为火【杀】;</br><li>②你造成的伤害均视为火焰伤害;</br><li>③造成1点火焰伤害后,摸一张牌',
            tgtt_fspyjinwuluorigong: '金乌落日弓',
            tgtt_fspyjinwuluorigong_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①出牌阶段内一次失去至少两张手牌后,你可以弃置一名其他角色等量张牌;</br><li>②当你使用【杀】对一名其他角色造成伤害时,可以弃置其一张装备牌',
            //防具
            tgtt_fspyxiuluomianju: '修罗面具',
            tgtt_fspyxiuluomianju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你受到的伤害至多为1;</br><li>②当你失去装备区的【邪神面具】时,你回复1点体力;</br><li>③你的武将牌不能从正面翻至背面',
            tgtt_fspyxuanwuzhenjundun: '玄武镇军盾',
            tgtt_fspyxuanwuzhenjundun_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①虚拟【杀】与转化【杀】对你无效;</br><li>②受到黑色【杀】造成的伤害后,摸两张牌',
            tgtt_fspyqimenbaguazhen: '奇门八卦阵',
            tgtt_fspyqimenbaguazhen_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①当你需要使用或打出一张【闪】时,你可以进行判定,若判定结果为红色,视为你使用或打出了一张【闪】;</br><li>②你可以防止自身受到的属性伤害',
            tgtt_fspyguofengyupao: '国风玉袍',
            tgtt_fspyguofengyupao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你不能成为其他角色使用普通锦囊牌的目标;</br><li>②你的手牌上限＋2',
            //防御坐骑
            tgtt_fspyjuechenjinge: '绝尘金戈',
            tgtt_fspyjuechenjinge_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①其他角色计算与你的距离+1;</br><li>②你的<font color=red>♥️️</font>牌不计入手牌上限',
            tgtt_fspytietilieben: '铁蹄烈奔',
            tgtt_fspytietilieben_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①其他角色计算与你的距离时+1;</br><li>②当你受到属性伤害时,你令此伤害-1',
            tgtt_fspyjinlin: '金鳞',
            tgtt_fspyjinlin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①其他角色计算与你的距离+1;</br><li>②你的<font color=red>♦️️</font>牌不计入手牌上限',
            tgtt_fspybishuijinjingshou: '碧水金睛兽',
            tgtt_fspybishuijinjingshou_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①其他角色计算与你的距离+1;</br><li>②摸牌阶段多摸一张牌;</br><li>③你的手牌上限+1',
            tgtt_fspybenleixidian: '奔雷袭电',
            tgtt_fspybenleixidian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>其他角色计算与你的距离时+X(X为你已损失的体力值+1)',
            tgtt_fspyyulanbailongju: '玉兰白龙驹',
            tgtt_fspyyulanbailongju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>其他角色计算与你的距离时+X(X为存活的势力数+1)',
            //进攻坐骑
            tgtt_fspyqicaishenlu: '七彩神鹿',
            tgtt_fspyqicaishenlu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离时-1;</br><li>②当你造成属性伤害时,你令此伤害+1',
            tgtt_fspyqicaishenlu_skill: '七彩神鹿',
            tgtt_fspyxiefang: '撷芳',
            tgtt_fspyxiefang_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>你计算与其他角色的距离时-X(X为存活的势力数+1)',
            tgtt_fspykuangbiao: '狂飙',
            tgtt_fspykuangbiao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>你计算与其他角色的距离时-X(X为计算对象的体力值+1)',
            tgtt_fspyjianxiefanghuan: '见血方还',
            tgtt_fspyjianxiefanghuan_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-1;</br><li>②你的<font color=black>♠️️</font>牌不计入手牌上限',
            tgtt_fspylengxuezhuiming: '冷血追命',
            tgtt_fspylengxuezhuiming_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-1;</br><li>②你的<font color=black>♣️️</font>牌不计入手牌上限',
            tgtt_fspyxiaoruihubao: '骁锐虎豹',
            tgtt_fspyxiaoruihubao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①你计算与其他角色的距离-1;</br><li>②摸牌阶段多摸一张牌;</br><li>③你的使用【杀】的次数+1',
            //宝物
            tgtt_fspyxuwangzhimian: '虚妄之冕',
            tgtt_fspyxuwangzhimian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br><li>①摸牌阶段,你多摸三张牌;</br><li>②你的手牌上限-1',
            tgtt_fspylingsheji: '灵蛇髻',
            tgtt_fspylingsheji_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>结束阶段,你可以选择一项:</br><li>①摸一张牌;</br><li>②弃置一张牌并获得一名其他角色的一张牌',
            tgtt_fspyshanrangzhaoshu: '禅让诏书',
            tgtt_fspyshanrangzhaoshu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>当一名角色于其回合内第一次获得牌后,你可以选择一项:</br><li>①交给其一张牌;</br><li>②令其交给你一张牌',
            tgtt_fspyyiqichengfangtu: '益契城防图',
            tgtt_fspyyiqichengfangtu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>出牌阶段限一次,你可以观看一名其他角色的手牌并与其交换任意张手牌',
            tgtt_fspytianjiyaoqin: '天机瑶琴',
            tgtt_fspytianjiyaoqin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>其他角色的出牌阶段开始时,你可以弃置至多两张牌并弃置该角色等量的牌',
            tgtt_fspyqixingpao: '七星袍',
            tgtt_fspyqixingpao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>出牌阶段限一次,你可以弃置任意张点数之和为7的牌并令至多等量的角色回复1点体力',
            tgtt_fspywulietongtianguan: '武烈通天纶',
            tgtt_fspywulietongtianguan_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>当你于一回合内使用或打出第X张牌时,你可以摸X张牌(X为你装备区中的装备数量)',
            tgtt_fspyrongxiemingyiche: '绒械命倚车',
            tgtt_fspyrongxiemingyiche_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font></br>回合结束时,你可以从牌堆底摸两张牌,将两张牌置于牌堆顶',
            //三六天罡
            //七二地煞
            tgtt_fsyidaozhan: '一刀斩',
            tgtt_fsyidaozhan_info: '出牌阶段,对一名其他角色使用,对其造成等同于其体力上限的伤害(若为转化牌,则此牌伤害属性受原牌影响)',
            //九江水帝
            //五湖大神
            //哼哈三将
            //卡牌技能
            //天帝天后
            //紫薇帝御
            //武器
            //开天斧
            tgtt_dykaitianfu1: '开天斧',
            tgtt_dykaitianfu1_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>每当你造成1点伤害,受伤角色须弃置一张牌',
            tgtt_dykaitianfu2: '开天斧',
            tgtt_dykaitianfu2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你造成的伤害+X(X为你已损失的体力值)',
            //轩辕剑
            tgtt_dyxuanyuanjian1: '轩辕剑',
            tgtt_dyxuanyuanjian1_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你造成的伤害+1且你造成的无属性伤害视为神属性伤害',
            tgtt_dyxuanyuanjian2: '轩辕剑',
            tgtt_dyxuanyuanjian2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>每当你造成1点伤害后,你回复1点体力并获得1点护甲',
            //防具
            //神农鼎
            tgtt_dyshennongding1: '神农鼎',
            tgtt_dyshennongding1_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你可以将两张牌当做【桃】使用',
            tgtt_dyshennongding2: '神农鼎',
            tgtt_dyshennongding2_info: '出牌阶段限一次,你可以弃置两张牌,增加1点体力上限,回复1点体力并获得1点护甲',
            //防御坐骑
            //昆仑镜
            tgtt_dykunlunjing1: '昆仑镜',
            tgtt_dykunlunjing1_info: '出牌阶段限一次,你可以展示牌堆顶上的十张牌,选择用一张牌替换一张展示的牌,你增加1点体力上限,回复1点体力并获得1点护甲',
            tgtt_dykunlunjing2: '昆仑镜',
            tgtt_dykunlunjing2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你于出牌阶段使用牌结算结束后,若此牌的目标角色中存在本阶段你未记录的角色,则你记录这些角色,根据记录的角色数,你可以执行对应的效果:<br><li>①记录1名,从牌堆或弃牌堆中获得一张指定类型的牌;<br><li>②记录2名,视为对一名角色使用一张普通锦囊牌;<br><li>③记录3名,对所有记录的角色造成1点伤害',
            //昊天塔
            tgtt_dyhaotianta1: '昊天塔',
            tgtt_dyhaotianta1_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当一名角色判定牌生效前,你可以亮出牌堆顶上的十张牌,选择一张作为判定牌,你增加1点体力上限,此判定不可被更改',
            tgtt_dyhaotianta2: '昊天塔',
            tgtt_dyhaotianta2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①若你的装备区内没有武器牌,则你手牌区内所有【杀】的属性视为无属性;<br><li>②当你使用牌时,或成为其他角色使用牌的目标后,你记录此牌的花色;<br><li>③当你使用【杀】指定唯一目标后,若你〖烈弓②〗的记录不为空,则你可亮出牌堆顶的X张牌(X为你【昊天塔②】记录过的花色数-1),令此【杀】的伤害值基数+Y(Y为亮出牌中被【昊天塔②】记录过花色的牌的数量),且目标角色不能使用【昊天塔②】记录过花色的牌响应此【杀】.此【杀】使用结算结束后,你清除【昊天塔②】的记录',
            //进攻坐骑
            //女娲石
            tgtt_dynvwashi1: '女娲石',
            tgtt_dynvwashi1_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当一名角色濒死时,若你的体力值大于1,你可以失去1点体力,减少1点体力上限并获得1点护甲,令该角色增加1点体力上限,回复1点体力并摸1张牌',
            tgtt_dynvwashi2: '女娲石',
            tgtt_dynvwashi2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',' + get.tgttIntroduce('Zhuanhuanji') + ',</font><br>当你减少体力上限/失去体力/受到伤害后,<br><li>阴:你摸两张牌并增加1点体力上限;<br><li>阳:回复1点体力并获得1点护甲',
            //伏羲琴
            tgtt_dyfuxiqin1: '伏羲琴',
            tgtt_dyfuxiqin1_info: '出牌阶段限三次,你可以与一名其他角色进行拼点,若你赢,你可以指定另一名角色视为对方对该角色使用一张【杀】, 否则对方可弃置你一张牌,你增加1点体力上限并回复1点体力',
            tgtt_dyfuxiqin2: '伏羲琴',
            tgtt_dyfuxiqin2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①当你声明使用或打出牌时,你记录此牌的牌名并获得1点护甲;<br><li>②当你使用或打出的牌结算结束后,若你的【九伐】记录中包含至少九种不同的牌名,则你可以展示牌堆顶的九张牌,选择并获得其中任意张点数各不相同且这九张牌中存在未被选择且和已选择的牌点数相同的牌,清除所有的记录,将其余牌置入弃牌堆,你摸三张牌并获得3点护甲',
            //宝物
            //炼妖壶
            tgtt_dylianyaohu1: '炼妖壶',
            tgtt_dylianyaohu1_info: '出牌阶段,你可以选择一项:<br><li>①弃置一张牌并将一名其他角色的一张牌置入【炼妖壶】,你增加1点体力上限并获得1点护甲;<br><li>②弃置两张【炼妖壶】中的牌,从牌堆中获得一张与弃置的牌类别均不相同的牌,你回复1点体力并获得1点护甲',
            tgtt_dylianyaohu2: '炼妖壶',
            tgtt_dylianyaohu2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>回合结束时,你可以令所有其他角色失去1点体力并减少1点体力上限,你可以摸2X张牌或回复X点体力(X为你本回合造成的伤害)且你增加一点体力上限并获得1点护甲',
            tgtt_dylianhua: '炼化',
            tgtt_dylianhua_info: '出牌阶段,你可以弃置两张【炼妖壶】中的牌,从牌堆中获得一张与弃置的牌类别均不相同的牌,你回复1点体力并摸一张牌',
            tgtt_dyshouna: '收纳',
            tgtt_dyshouna_info: '出牌阶段限三次,你可以弃置一张牌并将一名其他角色的一张牌置入【炼妖壶】,你增加1点体力上限并获得1点护甲',
            //太古四圣
            //圣歼之战
            //命途星神
            //三清六御
            //五方老君
            //金母木公
            //三象天尊
            //三官大帝
            //十方天尊
            //四大天师
            //南斗六星
            //北斗七星
            //五炁真君
            //元帅真君
            //九曜星宫
            //四灵守护
            //二十八宿
            //五大天王
            //四大元帅
            //雷公电母
            //全海龙王
            //五岳大帝
            //五大龙神
            //五大水神
            //十殿阎罗
            //四值功曹
            //三十六将
            //六十甲子
            //蒲元
            //特殊装备
            tgtt_fspymengyanchitu_skill: '梦魇赤兔',
            tgtt_fspyshenzhu_mark_mengyanchitu: '梦魇赤兔',
            tgtt_fspyshenzhu_mark_mengyanchitu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离-2,其他角色计算与你的距离+1',
            tgtt_fspyleiyingju_skill: '雷影驹',
            tgtt_fspyshenzhu_mark_leiyingju: '雷影驹',
            tgtt_fspyshenzhu_mark_leiyingju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离时始终为1,其他角色计算与你的距离+1',
            tgtt_fspyxuanxuelonghun_skill: '玄血龙魂',
            tgtt_fspyshenzhu_mark_xuanxuelonghun: '玄血龙魂',
            tgtt_fspyshenzhu_mark_xuanxuelonghun_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离-1,其他角色计算与你的距离+2',
            tgtt_fspyzhuri_skill: '逐日',
            tgtt_fspyshenzhu_mark_zhuri: '逐日',
            tgtt_fspyshenzhu_mark_zhuri_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离-1,其他角色计算与你的距离+3',
            //武器
            tgtt_fspychixueqingfeng_skill: '赤血青锋',
            tgtt_fspychixueqingfeng_skill_xiaoguo: '赤血青锋',
            tgtt_fspyshenzhu_mark_chixueqingfeng: '赤血青锋',
            tgtt_fspychixueqingfeng_skill_xiaoguo_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你使用【杀】指定目标后,于此【杀】结算前其防具失效且不能使用或打出手牌',
            tgtt_fspyshenzhu_mark_chixueqingfeng_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你使用【杀】指定目标后,于此【杀】结算前其防具失效且不能使用或打出手牌',
            tgtt_fspyluanfenghemingjian_skill: '鸾凤和鸣剑',
            tgtt_fspyshenzhu_mark_luanfenghemingjian: '鸾凤和鸣剑',
            tgtt_fspyshenzhu_mark_luanfenghemingjian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你使用【杀】指定目标后,你可以令其选择一项:<br><li>①令你摸一张牌;<br><li>②弃置一张手牌,若为属性【杀】,则直接执行上述两项',
            tgtt_fspyguilongzhanyuedao_skill: '鬼龙斩月刀',
            tgtt_fspyguilongzhanyuedao_skill_xiaoguo: '鬼龙斩月刀',
            tgtt_fspyshenzhu_mark_guilongzhanyuedao: '鬼龙斩月刀',
            tgtt_fspyguilongzhanyuedao_skill_xiaoguo_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①当你使用的【杀】被目标使用的【闪】抵消后,你摸一张牌且本回合使用【杀】的次数+1;<br><li>②你使用红色【杀】无次数限制且不能被目标的【闪】响应',
            tgtt_fspyshenzhu_mark_guilongzhanyuedao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①当你使用的【杀】被目标使用的【闪】抵消后,你摸一张牌且本回合使用【杀】的次数+1;<br><li>②你使用红色【杀】无次数限制且不能被目标的【闪】响应',
            tgtt_fspyxingtianpojunfu_skill: '刑天破军斧',
            tgtt_fspyxingtianpojunfu_skill_xiaoguo: '刑天破军斧',
            tgtt_fspyxingtianpojunfu_skill_sha: '刑天破军斧',
            tgtt_fspyshenzhu_mark_xingtianpojunfu: '刑天破军斧',
            tgtt_fspyshenzhu_mark_xingtianpojunfu2: '刑天破军斧',
            tgtt_fspyxingtianpojunfu_skill_xiaoguo_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>当你使用牌指定目标后,你可以弃置两张牌,令其本回合其不能使用或打出手牌并使其防具失效',
            tgtt_fspyxingtianpojunfu_skill_sha_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>你使用【杀】时,可以将此【杀】改为雷【杀】',
            tgtt_fspyshenzhu_mark_xingtianpojunfu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>当你使用牌指定目标后,你可以弃置两张牌,令其本回合其不能使用或打出手牌并使其防具失效',
            tgtt_fspyshenzhu_mark_xingtianpojunfu2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>你使用【杀】时,可以将此【杀】改为雷【杀】',
            tgtt_fspyxiuluolianyuji_skill: '修罗炼狱戟',
            tgtt_fspyxiuluolianyuji_skill_xiaoguo: '修罗炼狱戟',
            tgtt_fspyshenzhu_mark_xiuluolianyuji: '修罗炼狱戟',
            tgtt_fspyxiuluolianyuji_skill_xiaoguo_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①你使用【杀】可以指定任意名角色为目标,若指定的目标数大于你的手牌数,你翻面;<br><li>②当你使用【杀】对目标角色造成伤害时,此伤害＋1,伤害结算后其回复1点体力',
            tgtt_fspyshenzhu_mark_xiuluolianyuji_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①你使用【杀】可以指定任意名角色为目标,若指定的目标数大于你的手牌数,你翻面;<br><li>②当你使用【杀】对目标角色造成伤害时,此伤害＋1,伤害结算后其回复1点体力',
            tgtt_fspychiyanzhenhunqin_skill: '赤焰镇魂琴',
            tgtt_fspyshenzhu_mark_chiyanzhenhunqin: '赤焰镇魂琴',
            tgtt_fspyshenzhu_mark_chiyanzhenhunqin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①你使用的【杀】视为火【杀】;<br><li>②你造成的伤害均视为火焰伤害;<br><li>③造成1点火焰伤害后,摸一张牌',
            tgtt_fspyjinwuluorigong_skill: '金乌落日弓',
            tgtt_fspyjinwuluorigong_skill_sha: '金乌落日弓',
            tgtt_fspyshenzhu_mark_jinwuluorigong: '金乌落日弓',
            tgtt_fspyjinwuluorigong_skill_sha_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>当你使用【杀】对一名其他角色造成伤害时,可以弃置其一张装备牌',
            tgtt_fspyshenzhu_mark_jinwuluorigong_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>出牌阶段内一次失去至少两张手牌后,你可以弃置一名其他角色等量张牌',
            tgtt_fspyshenzhu_mark_jinwuluorigong2: '金乌落日弓',
            tgtt_fspyshenzhu_mark_jinwuluorigong2_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>当你使用【杀】对一名其他角色造成伤害时,可以弃置其一张装备牌',
            //防具
            tgtt_fspyxiuluomianju_skill: '修罗面具',
            tgtt_fspyshenzhu_mark_xiuluomianju: '修罗面具',
            tgtt_fspyshenzhu_mark_xiuluomianju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①你受到的伤害至多为1;<br><li>②当你失去装备区的【邪神面具】时,你回复1点体力;<br><li>③你的武将牌不能从正面翻至背面',
            tgtt_fspyxuanwuzhenjundun_skill: '玄武镇军盾',
            tgtt_fspyshenzhu_mark_xuanwuzhenjundun: '玄武镇军盾',
            tgtt_fspyshenzhu_mark_xuanwuzhenjundun_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①虚拟【杀】与转化【杀】对你无效;<br><li>②受到黑色【杀】造成的伤害后,摸两张牌',
            tgtt_fspyqimenbaguazhen_skill: '奇门八卦阵',
            tgtt_fspyshenzhu_mark_qimenbaguazhen: '奇门八卦阵',
            tgtt_fspyshenzhu_mark_qimenbaguazhen_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①当你需要使用或打出一张【闪】时,你可以进行判定,若判定结果为红色,视为你使用或打出了一张【闪】;<br><li>②你可以防止自身受到的属性伤害',
            tgtt_fspyguofengyupao_skill: '国风玉袍',
            tgtt_fspyshenzhu_mark_guofengyupao: '国风玉袍',
            tgtt_fspyshenzhu_mark_guofengyupao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>①你不能成为其他角色使用普通锦囊牌的目标;<br><li>②你的手牌上限＋2',
            //防御坐骑
            tgtt_fspybishuijinjingshou_skill: '碧水金睛兽',
            tgtt_fspyshenzhu_mark_bishuijinjingshou: '碧水金睛兽',
            tgtt_fspyshenzhu_mark_bishuijinjingshou_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①摸牌阶段多摸一张牌;<br><li>②你的手牌上限+1',
            tgtt_fspytietilieben_skill: '铁蹄烈奔',
            tgtt_fspyshenzhu_mark_tietilieben: '铁蹄烈奔',
            tgtt_fspyshenzhu_mark_tietilieben_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色计算与你的距离时+1,当你受到属性伤害时,你令此伤害-1',
            tgtt_fspyjuechenjinge_skill: '绝尘金戈',
            tgtt_fspyshenzhu_mark_juechenjinge: '绝尘金戈',
            tgtt_fspyshenzhu_mark_juechenjinge_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色计算与你的距离+1,且你的<font color=red>♥️️</font>牌不计入手牌上限',
            tgtt_fspyjinlin_skill: '金鳞',
            tgtt_fspyshenzhu_mark_jinlin: '金鳞',
            tgtt_fspyshenzhu_mark_jinlin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色计算与你的距离+1,且你的<font color=red>♦️️</font>牌不计入手牌上限',
            tgtt_fspybenleixidian_skill: '奔雷袭电',
            tgtt_fspyshenzhu_mark_benleixidian: '奔雷袭电',
            tgtt_fspyshenzhu_mark_benleixidian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色计算与你的距离时+X(X为你已损失的体力值+1)',
            tgtt_fspyyulanbailongju_skill: '玉兰白龙驹',
            tgtt_fspyshenzhu_mark_yulanbailongju: '玉兰白龙驹',
            tgtt_fspyshenzhu_mark_yulanbailongju_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色计算与你的距离时+X(X为存活的势力数)',
            //进攻坐骑
            tgtt_fspyqicaishenlu_skill: '七彩神鹿',
            tgtt_fspyshenzhu_mark_qicaishenlu: '七彩神鹿',
            tgtt_fspyshenzhu_mark_qicaishenlu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离时-1,当你造成属性伤害时,你令此伤害+1',
            tgtt_fspyxiaoruihubao_skill: '骁锐虎豹',
            tgtt_fspyshenzhu_mark_xiaoruihubao: '骁锐虎豹',
            tgtt_fspyshenzhu_mark_xiaoruihubao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①摸牌阶段多摸一张牌;<br><li>②你的使用【杀】的次数+1',
            tgtt_fspyxiefang_skill: '撷芳',
            tgtt_fspyshenzhu_mark_xiefang: '撷芳',
            tgtt_fspyshenzhu_mark_xiefang_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离时-X(X为存活的势力数)',
            tgtt_fspyjianxiefanghuan_skill: '见血方还',
            tgtt_fspyshenzhu_mark_jianxiefanghuan: '见血方还',
            tgtt_fspyshenzhu_mark_jianxiefanghuan_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离-1,且你的<font color=black>♠️️</font>牌不计入手牌上限',
            tgtt_fspylengxuezhuiming_skill: '冷血追命',
            tgtt_fspyshenzhu_mark_lengxuezhuiming: '冷血追命',
            tgtt_fspyshenzhu_mark_lengxuezhuiming_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离-1,且你的<font color=black>♣️️</font>牌不计入手牌上限',
            tgtt_fspykuangbiao_skill: '狂飙',
            tgtt_fspyshenzhu_mark_kuangbiao: '狂飙',
            tgtt_fspyshenzhu_mark_kuangbiao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>你计算与其他角色的距离时-X(X为计算对象的体力值)',
            //宝物
            tgtt_fspyxuwangzhimian_skill: '虚妄之冕',
            tgtt_fspyshenzhu_mark_xuwangzhimian: '虚妄之冕',
            tgtt_fspyshenzhu_mark_xuwangzhimian_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br><li>①摸牌阶段,你多摸三张牌;<br><li>②你的手牌上限-1',
            tgtt_fspylingsheji_skill: '灵蛇髻',
            tgtt_fspyshenzhu_mark_lingsheji: '灵蛇髻',
            tgtt_fspyshenzhu_mark_lingsheji_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>结束阶段,你可以选择一项:<br><li>①摸一张牌;<br><li>②弃置一张牌并获得一名其他角色的一张牌',
            tgtt_fspyshanrangzhaoshu_skill: '禅让诏书',
            tgtt_fspyshenzhu_mark_shanrangzhaoshu: '禅让诏书',
            tgtt_fspyshenzhu_mark_shanrangzhaoshu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当一名角色于其回合内第一次获得牌后,你可以选择一项:①交给其一张牌;②令其交给你一张牌',
            tgtt_fspyyiqichengfangtu_skill: '益契城防图',
            tgtt_fspyshenzhu_mark_yiqichengfangtu: '益契城防图',
            tgtt_fspyshenzhu_mark_yiqichengfangtu_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>出牌阶段限一次,你可以观看一名其他角色的手牌并与其交换任意张手牌',
            tgtt_fspytianjiyaoqin_skill: '天机瑶琴',
            tgtt_fspyshenzhu_mark_tianjiyaoqin: '天机瑶琴',
            tgtt_fspyshenzhu_mark_tianjiyaoqin_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>其他角色的出牌阶段开始时,你可以弃置至多两张牌并弃置该角色等量的牌',
            tgtt_fspyqixingpao_skill: '七星袍',
            tgtt_fspyshenzhu_mark_qixingpao: '七星袍',
            tgtt_fspyshenzhu_mark_qixingpao_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>出牌阶段限一次,你可以弃置任意张点数之和为7的牌并令至多等量的角色回复1点体力',
            tgtt_fspywulietongtianguan_skill: '武烈通天纶',
            tgtt_fspyshenzhu_mark_wulietongtianguan: '武烈通天纶',
            tgtt_fspyshenzhu_mark_wulietongtianguan_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>当你于一回合内使用或打出第X张牌时,你可以摸X张牌(X为你装备区中的装备数量)',
            tgtt_fspyrongxiemingyiche_skill: '绒械命倚车',
            tgtt_fspyshenzhu_mark_rongxiemingyiche: '绒械命倚车',
            tgtt_fspyshenzhu_mark_rongxiemingyiche_info: '<font color=orange>' + get.tgttIntroduce('Suodingji') + ',</font><br>回合结束时,你可以从牌堆底摸两张牌,将两张牌置于牌堆顶',
            //三六天罡
            //七二地煞
            //九江水帝
            //五湖大神
            //哼哈三将
        },
        list: [
            //牌堆
            ['spade', 5, 'sha', 'tgtt_imaginary'], //☯虚数杀*5
            ['spade', 7, 'sha', 'tgtt_quantum'], //☯量子杀*5
            ['spade', 8, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 9, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 10, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 11, 'sha', 'tgtt_quantum'], //☯量子杀
            ['club', 3, 'sha', 'tgtt_wind'], //风杀*5
            ['club', 5, 'sha', 'tgtt_wind'], //风杀
            ['club', 6, 'sha', 'tgtt_wind'], //风杀
            ['club', 9, 'sha', 'tgtt_wind'], //风杀
            ['club', 10, 'sha', 'tgtt_wind'], //风杀
            ['heart', 9, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['heart', 10, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['heart', 11, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['diamond', 10, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['spade', 5, 'sha', 'tgtt_imaginary'], //☯虚数杀*5
            ['spade', 7, 'sha', 'tgtt_quantum'], //☯量子杀*5
            ['spade', 8, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 9, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 10, 'sha', 'tgtt_quantum'], //☯量子杀
            ['spade', 11, 'sha', 'tgtt_quantum'], //☯量子杀
            ['club', 3, 'sha', 'tgtt_wind'], //风杀*5
            ['club', 5, 'sha', 'tgtt_wind'], //风杀
            ['club', 6, 'sha', 'tgtt_wind'], //风杀
            ['club', 9, 'sha', 'tgtt_wind'], //风杀
            ['club', 10, 'sha', 'tgtt_wind'], //风杀
            ['heart', 9, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['heart', 10, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['heart', 11, 'sha', 'tgtt_imaginary'], //☯虚数杀
            ['diamond', 10, 'sha', 'tgtt_imaginary'], //☯虚数杀
        ],
    };
    if (lib.config.achiReward && lib.config.achiReward.card.length != 0) {
        for (var i = 0; i < lib.config.achiReward.card.length; i++) {
            var card = lib.config.achiReward.card[i];
            taiguCard.list.push(card);
        }
    }
    lib.config.all.cards.add('taiguCard');
    lib.translate['taiguCard_card_config'] = '太古卡牌'; // 包名翻译
    lib.config.cards.add('taiguCard'); //包名翻译
    return taiguCard;
});

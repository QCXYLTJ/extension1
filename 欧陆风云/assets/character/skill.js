import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig.skill } */
const skills = {
    Europa_The_king_of_animals: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        popup: false,
        charlotte: true,
        filter(event, player) {
            if (_status.Europa_animalsKing) return false;
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            if (game.online || lib.config.extension_欧陆风云_Europa_The_king_of_animals == '随机') {
                _status.Europa_animalsKing = game.filterPlayer().randomGet();
            } else if (lib.config.extension_欧陆风云_Europa_The_king_of_animals == '随机自己') {
                _status.Europa_animalsKing = game.me;
            } else {
                _status.Europa_animalsKing = game.filterPlayer((i) => i != player).randomGet();
            }
            game.log(_status.Europa_animalsKing, '选择了职业', '#g【动物之王】');
            game.log(_status.Europa_animalsKing, '加冕', '#g【动物之王】');
            _status.Europa_animalsKing.addSkill('Europa_animalsKing');
            _status.Europa_animalsKing.addTip('Europa_animalsKing', '动物之王');
            _status.Europa_animalsKing.say("I'm the king of animals");
            game.addGlobalSkill('Europa_animals_nowuxie');
        },
    },
    Europa_animalsKing: {
        trigger: {
            global: 'useCardAfter',
        },
        forced: true,
        charlotte: true,
        filter(event, player) {
            if (event.player == player) return false;
            return get.Europa_animals().includes(event.card.name);
        },
        async content(event, trigger, player) {
            if (!_status.Europa_animalsEnemy) _status.Europa_animalsEnemy = [];
            _status.Europa_animalsEnemy.add(trigger.player);
            game.log(trigger.player, '成为', '#g动物之王', '的死敌');
            const cards = trigger.cards.filterInD();
            if (cards.length) {
                await game.cardsGotoSpecial(cards);
                game.log(cards, '被', '#动物之王', '移出游戏');
            }
            if (!player.storage.Europa_animalsKing) {
                player.addSkill('Europa_animalsKing_task');
                game.log('死敌已出现,请', '#g动物之王', '尽快完成杀敌任务');
            }
        },
        charlotte: true,
        mark: true,
        intro: {
            name: '动物之王',
            markcount() {
                return _status.Europa_animalsEnemy?.length || 0;
            },
            content(storage, player) {
                if (_status.Europa_animalsEnemy?.length) {
                    return '死敌' + get.translation(_status.Europa_animalsEnemy);
                }
                return '动物之王加冕';
            },
        },
        mod: {
            cardEnabled(card, player) {
                if (player.hasSkillTag('Europa_animalsEnables')) return;
                if (get.Europa_animals().includes(card.name)) return false;
            },
            playerEnabled(card, player, target) {
                if (!get.tag(card, 'damage') || player.storage.Europa_animalsKing) return;
                if (!_status.Europa_animalsEnemy?.length) return;
                if (!_status.Europa_animalsEnemy?.includes(target)) return;
            },
        },
        group: ['Europa_animalsKing_init', 'Europa_animalsKing_lose', 'Europa_animalsKing_kill', 'Europa_animalsKing_cancel', 'Europa_animalsKing_expansion'],
        subSkill: {
            init: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                _priority: 23.1234,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const cards = [];
                    for (var i = 0; i < 12; i++) {
                        const animals = ['Europa_piglet', 'Europa_calf', 'Europa_lamb'];
                        cards.push(game.createCard2(animals[i % 3], lib.suit.randomGet(), i));
                    }
                    game.cardsGotoPile(cards, () => {
                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                    });
                    game.log('#g动物之王', `随机往牌库中加入${cards.length}张动物牌`);
                },
            },
            lose: {
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter'],
                },
                forced: true,
                charlotte: true,
                _priority: 11.98,
                filter(event, player) {
                    if (event.name.indexOf('lose') == 0) {
                        if (event.getlx === false || event.position != ui.discardPile) return false;
                    } else {
                        var evt = event.parent;
                        if (evt.relatedEvent && evt.relatedEvent.name == 'useCard') return false;
                    }
                    for (var i of event.cards) {
                        if (get.position(i) == 'd' && get.Europa_animals().includes(i.name)) return true;
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    const cards = trigger.cards.filter((card) => get.Europa_animals().includes(card.name) && get.position(card) == 'd');
                    game.log(cards);
                    if (cards.length) {
                        game.log(player, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
                        player.loseToDiscardpile(cards, ui.cardPile, 'blank').set('log', false).insert_index = function () {
                            return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                        };
                    }
                },
            },
            kill: {
                trigger: {
                    source: 'die',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return _status.Europa_animalsEnemy?.includes(event.player);
                },
                async content(event, trigger, player) {
                    const cards = trigger.player.getCards('hej', (card) => {
                        if (get.Europa_animals().includes(card.name)) return true;
                        return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                    });
                    if (cards.length) await player.gain(cards, trigger.player, 'giveAuto', 'bySelf');
                    await player.draw(3);
                },
            },
            cancel: {
                trigger: {
                    player: ['drawBefore', 'discardBefore'],
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    if (!_status.Europa_animalsEnemy?.includes(event.player)) return false;
                    var evt = event.parent;
                    return evt && evt.name == 'die' && evt.source == player;
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
            },
            task: {
                trigger: {
                    source: 'damageSource',
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return !player.storage.Europa_animalsKing;
                },
                async content(event, trigger, player) {
                    if (
                        player
                            .getAllHistory('sourceDamage', (evt) => {
                                return _status.Europa_animalsEnemy?.includes(evt.player);
                            })
                            .reduce((p, c) => p + c.num, 0) >= 2
                    ) {
                        game.log('动物之王', '任务已完成');
                        player.setStorage('Europa_animalsKing', true);
                        player.removeSkill('Europa_animalsKing_task');
                    } else if (trigger.name == 'phaseJieshu') {
                        player.setStorage('Europa_animalsKing', true);
                        game.log('动物之王', '任务未完成');
                        await player.loseHp();
                        player.removeSkill('Europa_animalsKing_task');
                    }
                },
            },
            expansion: {
                trigger: {
                    global: ['gainAfter', 'loseAfter', 'loseAsyncAfter'],
                },
                charlotte: true,
                _priority: 11.99,
                filter(event, player, triggername, target) {
                    var source = player;
                    if (event.name == 'lose') {
                        if (event.type != 'discard' || event.player == source) return false;
                        if (event.discarder != player || event.getParent(2).player == event.player) return false;
                        return event.getl(event.player)?.cards2.some((card) => get.Europa_animals().includes(card.name));
                    } else if (event.name == 'gain') {
                        if (event.giver || event.parent.name == 'gift') return false;
                        var cards = event.getg(player).filter((card) => get.Europa_animals().includes(card.name));
                        if (!cards.length) return false;
                        return game.hasPlayer(function (current) {
                            if (current == player) return false;
                            var cards2 = event.getl(current).cards2;
                            for (var i of cards2) {
                                if (cards.includes(i)) return true;
                            }
                            return false;
                        });
                    } else if (event.type == 'gain') {
                        if (event.giver || !event.player || event.player == source || event.player.isDead()) return false;
                        var hs = event.getl(event.player);
                        return game.hasPlayer(function (current) {
                            if (current == event.player) return false;
                            var cards = event.getg(current).filter((card) => get.Europa_animals().includes(card.name));
                            for (var i of cards) {
                                if (hs.cards2.includes(i)) return true;
                            }
                        });
                    } else if (event.type == 'discard') {
                        if (!event.discarder) return false;
                        return game.hasPlayer(function (current) {
                            return current != player && player == event.discarder && event.getl(current).cards2.some((card) => get.Europa_animals().includes(card.name));
                        });
                    }
                    return false;
                },
                prompt2: '当你获得或弃置其他角色的动物牌时,你可以将该动物牌放置于你的武将牌上.',
                async content(event, trigger, player) {
                    const cards = game
                        .filterPlayer((target) => {
                            return trigger.getl(target).cards2.filter((card) => get.Europa_animals().includes(card.name));
                        })
                        .map((target) => {
                            return trigger.getl(target).cards2.filter((card) => get.Europa_animals().includes(card.name));
                        })
                        .flat();
                    if (cards.length) {
                        player.addToExpansion(cards, player, 'giveAuto').gaintag.add('Europa_animalsKing_expansion');
                    }
                },
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    var cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            effect: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return !event.numFixed && player.getExpansions('Europa_animalsKing_expansion').length;
                },
                async content(event, trigger, player) {
                    trigger.num += player.getExpansions('Europa_animalsKing_expansion').length;
                    if (player.getExpansions('Europa_animalsKing_expansion').length >= 5) {
                        await player.gainMaxHp();
                        await player.recover();
                    }
                },
            },
        },
    },
    Europa_animals_nowuxie: {
        trigger: {
            player: 'useCard',
        },
        forced: true,
        popup: false,
        _priority: 16.75,
        charlotte: true,
        filter(event) {
            return get.Europa_animals().includes(event.card.name);
        },
        async content(event, trigger, player) {
            trigger.nowuxie = true;
        },
    },
    Europa_King_Mukla_skill: {
        nobracket: true,
        derivation: ['Europa_zhaijiao', 'Europa_zajiao', 'Europa_xiangjiaomanshou', 'Europa_biaoge', 'Europa_xingqun', 'Europa_houpi', 'Europa_manwo', 'Europa_baonu', 'Europa_kuangza', 'Europa_jingangzhili'],
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        charlotte: true,
        filter(event, player) {
            if (!get.nameList(player).includes('Europa_King_Mukla')) return false;
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async cost(event, trigger, player) {
            const skills = get.info('Europa_King_Mukla_skill').derivation.map((skill) => [skill, `【${get.translation(skill)}】(<span class="yellowtext">${get.info(skill).getInfo}</span>,${get.info(skill).getLimit}个技能槽).` + get.skillInfoTranslation(skill)]);
            const { bool, links } = await player
                .chooseButton([`${get.translation(player)}当前拥有4个技能槽,请选择你的技能组并锁定`, [skills, 'textbutton']], true)
                .set('selectButton', [1, 4])
                .set('filterButton', (button) => {
                    const sum = ui.selected.buttons.reduce((p, c) => p + get.info(c.link).getLimit, 0);
                    if (sum + get.info(button.link).getLimit > 4) return false;
                    return true;
                })
                .set('ai', (button) => {
                    switch (button.link) {
                        case 'Europa_zhaijiao':
                            return 2.5;
                        default:
                            return 1 + Math.random();
                    }
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            const skills = event.cost_data.links,
                num1 = skills.filter((skill) => get.info(skill).getInfo == '香蕉流派').length,
                num2 = skills.length - num1;
            if (num1 > num2) player.changeSkin({ characterName: 'Europa_King_Mukla' }, 'Europa_King_Mukla_Banana');
            else if (num1 < num2) player.changeSkin({ characterName: 'Europa_King_Mukla' }, 'Europa_King_Mukla_KingKong');
            await player.changeSkills(skills, ['Europa_King_Mukla_skill']);
        },
    },
    Europa_zhaijiao: {
        trigger: {
            player: 'drawAfter',
        },
        forced: true,
        _priority: 5,
        getLimit: 1,
        getInfo: '香蕉流派',
        async content(event, trigger, player) {
            const card = game.createCard(
                get.Europa_bananas('ordinary').randomGet(),
                lib.suit.randomGet(),
                Array.from({ length: 13 })
                    .map((info) => info + 1)
                    .randomGet()
            );
            if (card) await player.gain(card, 'gain2');
        },
        mod: {
            ignoredHandcard(card, player) {
                if (get.Europa_bananas().includes(card.name)) return true;
            },
            cardDiscardable(card, player, name) {
                if (name == 'phaseDiscard' && get.Europa_bananas().includes(card.name)) return false;
            },
        },
    },
    Europa_zajiao: {
        trigger: {
            global: 'damageEnd',
        },
        getLimit: 1,
        getInfo: '香蕉流派',
        filter(event, player) {
            if (!player.countCards('hs', (card) => get.Europa_bananas().includes(card.name))) return false;
            return event.player.isIn() && event.parent.name != 'Europa_zajiao';
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt2(event.name.slice(0, -5), trigger.player), (card) => {
                    return get.Europa_bananas().includes(card.name);
                })
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.attitude(trigger.player, player, player) < 0) return 0;
                    return 5 - get.value(card);
                })
                .forResult();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await player.give(event.cards, trigger.player);
            await trigger.player.damage();
        },
    },
    Europa_xiangjiaomanshou: {
        nobracket: true,
        enable: 'phaseUse',
        getLimit: 2,
        getInfo: '香蕉流派',
        limited: true,
        filter(event, player) {
            return player.countCards('h', (card) => get.Europa_bananas().includes(card.name));
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const cards = [],
                hs = player.countCards('h', (card) => {
                    return get.Europa_bananas().includes(card.name);
                });
            let num = hs - player.getHp() * 2;
            while (num > 0) {
                num--;
                const card = game.createCard(
                    get.Europa_bananas('ordinary').randomGet(),
                    lib.suit.randomGet(),
                    Array.from({ length: 13 })
                        .map((info) => info + 1)
                        .randomGet()
                );
                if (card) cards.push(card);
            }
            if (cards.length) await player.gain(cards, 'gain2');
            const bananas = player.getCards('h', (card) => get.Europa_bananas().includes(card.name));
            for (const banana of bananas) {
                game.broadcastAll(function (card) {
                    card.init([card.suit, card.number, 'Europa_bigBanana']);
                }, banana);
            }
            game.log(player, '手牌中的', '#y香蕉牌', '全部转化为', '#r【大香蕉】');
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
    },
    Europa_biaoge: {
        nobracket: true,
        enable: 'phaseUse',
        getLimit: 1,
        getInfo: '香蕉流派',
        limited: true,
        filter(event, player) {
            return game.hasPlayer((target) => {
                return lib.skill.Europa_biaoge.filterTarget(null, player, target);
            });
        },
        filterTarget(card, player, target) {
            return target.countCards('h', (card) => get.Europa_bananas().includes(card.name));
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            const cards = target.getCards('h', (card) => get.Europa_bananas().includes(card.name));
            if (cards.length) {
                var card = cards.randomGet();
                game.broadcastAll(function (card) {
                    card.init([card.suit, card.number, 'Europa_mukeladedabiaoge']);
                    card.storage._Europa_biaoge = player;
                }, card);
                game.log(target, '将一张香蕉牌牌转化为', { name: 'Europa_mukeladedabiaoge' });
            }
        },
        ai: {
            order: 1,
            result: {
                target: -1,
            },
        },
    },
    Europa_xingqun: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        getLimit: 1,
        getInfo: '香蕉流派',
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const card = get.cardPile('Europa_fengkuanghouzi', 'field') || game.createCard('Europa_fengkuanghouzi', 'diamond', 4);
            await target.gain(card);
            await target.equip(card);
        },
    },
    Europa_houpi: {
        getLimit: 1,
        getInfo: '金刚流派',
        init(player) {
            const next = game.createEvent('Europa_houpi');
            next.player = player;
            next.setContent(async (event, trigger, player) => {
                await player.gainMaxHp(2);
                await player.recover(2);
            });
        },
    },
    Europa_manwo: {
        getLimit: 1,
        getInfo: '金刚流派',
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    prompt: get.prompt2(event.name.slice(0, -5)),
                    filterCard: lib.filter.cardDiscardable,
                    filterTarget(card, player, target) {
                        return target.countCards('he');
                    },
                    ai1(card) {
                        return 6 - get.value(card);
                    },
                    ai2(target) {
                        return -target.countCards('he');
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.discard(event.cards);
            trigger.cancel();
            const cards = target.getCards('he'),
                animals = cards.filter((card) => {
                    if (get.Europa_animals().includes(card.name)) return true;
                    return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
                });
            if (cards.length) {
                target.addSkill('Europa_manwo_expansion');
                await target.addToExpansion('giveAuto', cards, target).set('gaintag', ['Europa_manwo_expansion']);
            }
            if (animals.length) {
                await player.gain(animals, target, 'giveAuto', 'bySelf');
            }
        },
        subSkill: {
            expansion: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.getExpansions('Europa_manwo_expansion').length;
                },
                async content(event, trigger, player) {
                    var cards = player.getExpansions('Europa_manwo_expansion');
                    await player.gain(cards, 'draw');
                    game.log(player, '收回了' + get.cnNumber(cards.length) + '张<蛮握>牌');
                    player.removeSkill('Europa_manwo_expansion');
                },
                intro: {
                    markcount: 'expansion',
                    mark(dialog, storage, player) {
                        var cards = player.getExpansions('Europa_manwo_expansion');
                        if (player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有' + get.cnNumber(cards.length) + '张牌';
                    },
                },
            },
        },
    },
    Europa_baonu: {
        getLimit: 1,
        getInfo: '金刚流派',
        trigger: {
            player: 'damageEnd',
        },
        forced: true,
        async content(event, trigger, player) {
            const card = game.createCard(
                get.Europa_bananas('ordinary').randomGet(),
                lib.suit.randomGet(),
                Array.from({ length: 13 })
                    .map((info) => info + 1)
                    .randomGet()
            );
            if (card) await player.gain(card, 'gain2');
            if (!trigger.source?.isIn()) return;
            if (
                game.getGlobalHistory(
                    'everything',
                    (evt) => {
                        return evt.name == 'damage' && evt.player == player;
                    },
                    event
                ).length > 1
            ) {
                const sha = new lib.element.VCard({ name: 'sha' });
                if (player.canUse(sha, trigger.source, false, false)) await player.useCard(sha, trigger.source, false, 'noai');
            }
        },
    },
    Europa_kuangza: {
        getLimit: 1,
        getInfo: '金刚流派',
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            return event.card?.name == 'sha';
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await trigger.player.damage();
            if (Math.random() > 0.25) return;
            const card = game.createCard(
                get.Europa_bananas('ordinary').randomGet(),
                lib.suit.randomGet(),
                Array.from({ length: 13 })
                    .map((info) => info + 1)
                    .randomGet()
            );
            if (card) await trigger.player.gain(card, 'gain2');
        },
    },
    Europa_jingangzhili: {
        nobracket: true,
        getLimit: 3,
        getInfo: '金刚流派',
        enable: 'phaseUse',
        limited: true,
        filter(event, player) {
            return player.countCards('h', (card) => get.Europa_bananas().includes(card.name));
        },
        filterCard(card) {
            return get.Europa_bananas().includes(card.name);
        },
        selectCard: -1,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            let cards = [],
                num = event.cards.length;
            while (num > 0) {
                num--;
                const card = get.cardPile(function (cardx) {
                    return get.tag(cardx, 'damage') && !cards.includes(cardx);
                });
                if (card) cards.push(card);
            }
            if (cards.length) await player.gain(cards, 'gain2');
            player.addTempSkill('Europa_jingangzhili_effect', 'roundStart');
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: ['damageBegin4', 'useCardToPlayered'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (event.name == 'damage') return true;
                    return (
                        get.tag(event.card, 'damage') &&
                        game.hasPlayer((target) => {
                            return !event.targets.includes(target) && player.canUse(event.card, target, false);
                        }) &&
                        event.isFirstTarget
                    );
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'damage') {
                        trigger.cancel();
                        return;
                    }
                    const targets = game.filterPlayer((target) => {
                        return !trigger.targets.includes(target) && player.canUse(trigger.card, target, false);
                    });
                    player.line(targets);
                    trigger.parent.targets.addArray(targets);
                },
                mark: true,
                intro: {
                    content: '你本轮内不会受到任何伤害,且你的伤害类牌指定所有其他角色为目标',
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
            },
        },
    },
    Europa_xingwang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        filter(event, player) {
            if (_status.Europa_animalsKing != player) return false;
            return player.countCards('h', (card) => get.Europa_bananas().includes(card.name));
        },
        filterCard(card) {
            return get.Europa_bananas().includes(card.name);
        },
        selectCard: -1,
        filterTarget(card, player, target) {
            return _status.Europa_animalsEnemy?.includes(target);
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await target.damage(event.cards.length);
            if (
                game.getGlobalHistory('everything', (evt) => {
                    if (evt.name != 'die' || evt?.source != player) return false;
                    return evt.reason?.getParent(event.name) == event;
                }).length
            ) {
                const cards = get.discarded().filter((card) => get.Europa_bananas().includes(card.name));
                if (cards.length > 1) {
                    const { bool, links } = await player
                        .chooseButton(2, ['你可以获得两张香蕉牌', cards])
                        .set('ai', (button) => {
                            return get.useful(button.link);
                        })
                        .forResult();
                    if (bool) {
                        await player.gain(links, 'gain2');
                    }
                }
            }
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    return get.damageEffect(target, player, target);
                },
            },
        },
    },
    _Europa_muklaChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_muklaChooseAudio) return false;
            const list = ['Europa_King_Mukla'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_muklaChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/荆棘谷.mp3`;
        },
    },
    Europa_qianshu: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('h');
        },
        filterCard: true,
        selectCard: -1,
        async content(event, trigger, player) {
            await player.draw(event.cards.length);
            const cards = game
                .filterPlayer((i) => i != player)
                .map((i) => i.getCards('hej'))
                .flat()
                .randomGets(event.cards.length);
            if (cards.length) {
                player.markAuto('Europa_qianshu', cards);
            }
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return player.countCards('e');
                },
            },
        },
        intro: {
            mark(dialog, content, player) {
                dialog.addAuto(content);
            },
        },
        group: 'Europa_qianshu_reback',
        subSkill: {
            reback: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        return target != player && target.getCards('hej').some((card) => player.getStorage('Europa_qianshu').includes(card));
                    });
                },
                async content(event, trigger, player) {
                    const cards = [],
                        lose_list = [],
                        targets = game.filterPlayer((target) => {
                            return target != player && target.getCards('hej').some((card) => player.getStorage('Europa_qianshu').includes(card));
                        });
                    for (const target of targets) {
                        const shushi = target.getCards('hej', (card) => player.getStorage('Europa_qianshu').includes(card));
                        if (shushi.length) {
                            lose_list.push([target, shushi]);
                            cards.addArray(shushi);
                            target.$give(shushi, player, true, true);
                        }
                    }
                    if (lose_list.length) {
                        await game
                            .loseAsync({
                                player: player,
                                lose_list: lose_list,
                            })
                            .setContent('chooseToCompareLose');
                    }
                    if (cards.length) {
                        player.unmarkAuto('Europa_qianshu', cards);
                        await player.gain(cards, 'gain2', 'log');
                    }
                },
            },
        },
    },
    Europa_jizhen: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            const list = get.inpileVCardList((info) => {
                if (info[2] == 'sha' && info[3]) return false;
                return info[0] != 'equip';
            });
            const { bool, links } = await player
                .chooseButton(['请你挑选五种牌名,当相同牌名的牌进入弃牌堆时,你失去1点体力并获得之', [list, 'vcard']], 5, true)
                .set('ai', function (button) {
                    switch (button.link[2]) {
                        case 'wuxie':
                            return 1.2 + Math.random();
                        case 'sha':
                            return 2 + Math.random();
                        case 'tao':
                        case 'tao':
                            return 5 + Math.random();
                        case 'jiu':
                            return 3 + Math.random();
                        case 'lebu':
                            return 3 + Math.random();
                        case 'shan':
                            return 2.2 + Math.random();
                        case 'wuzhong':
                            return 4 + Math.random();
                        case 'shunshou':
                            return 2.7 + Math.random();
                        case 'nanman':
                            return 3.8 + Math.random();
                        case 'wanjian':
                            return 1.6 + Math.random();
                        default:
                            return 1.5 + Math.random();
                    }
                })
                .forResult();
            if (bool) {
                player.markAuto(
                    event.name,
                    links.map((info) => info[2])
                );
            }
        },
        intro: {
            mark(dialog, content, player) {
                const storage = player.getStorage('Europa_jizhen');
                if (player.isUnderControl(true) && content.length) {
                    dialog.addText('当前记录牌名:');
                    dialog.addSmall([content, 'vcard']);
                }
            },
        },
        group: 'Europa_jizhen_regain',
        subSkill: {
            regain: {
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
                },
                forced: true,
                filter(event, player) {
                    return event.getd().some((card) => {
                        if (player.getStorage('Europa_jizhen_used').includes(card.name)) return false;
                        return player.getStorage('Europa_jizhen').includes(card.name);
                    });
                },
                async content(event, trigger, player) {
                    const cards = [];
                    for (const card of trigger.getd()) {
                        if (cards.some((info) => info.name == card.name) || !player.getStorage('Europa_jizhen').includes(card.name)) continue;
                        if (player.getStorage('Europa_jizhen_used').includes(card.name)) continue;
                        cards.push(card);
                    }
                    if (cards.length) {
                        player.addTempSkill('Europa_jizhen_used');
                        player.markAuto(
                            'Europa_jizhen_used',
                            cards.map((card) => card.name)
                        );
                        await player.loseHp(cards.length);
                        await player.gain(cards, 'gain2');
                    }
                },
            },
            used: {
                charlotte: true,
            },
        },
    },
    Europa_shuwang: {
        trigger: {
            player: 'Europa_animalsKing_initBegin',
        },
        forced: true,
        EuropaNPC: true,
        filter(event, player) {
            return _status.Europa_animalsKing == player;
        },
        async content(event, trigger, player) {
            trigger.setContent(async (event, trigger, player) => {
                const cards = [];
                for (var i = 0; i < 12; i++) {
                    cards.push(game.createCard2('Europa_rat', lib.suit.randomGet(), i));
                }
                game.cardsGotoPile(cards, () => {
                    return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                });
                game.log('#g动物之王', `随机往牌库中加入${cards.length}张`, '#g【巨鼠】');
                if (player.hasSkill('Europa_qianshu')) player.markAuto('Europa_qianshu', cards);
            });
        },
        ai: {
            combo: 'Europa_The_king_of_animals',
        },
        subSkill: {
            rechange: {
                trigger: {
                    global: 'useCardAfter',
                },
                forced: true,
                EuropaNPC: true,
                filter(event, player) {
                    if (_status.Europa_animalsKing != player) return false;
                    return event.card && event.card.name == 'Europa_rat' && trigger.player != player && trigger.player.countCards('h');
                },
                async content(event, trigger, player) {
                    if (player.hasSkill('Europa_qianshu')) {
                        player.markAuto('Europa_qianshu', trigger.player.getCards('h'));
                        trigger.player.addGaintag(trigger.player.countCards('h'), 'Europa_qianshu_tag');
                    }
                },
            },
        },
    },
    Europa_jushou: {
        trigger: {
            player: 'enableEquipBefire',
        },
        forced: true,
        async content(event, trigger, player) {
            trigger.cancel();
        },
        mod: {
            cardname(card) {
                if (get.type(card, null, false) == 'equip') return 'sha';
            },
            attackRange: () => 3,
        },
        init(player) {
            var list = [];
            for (var i = 1; i < 6; i++) {
                for (var j = 0; j < player.countEnabledSlot(i); j++) {
                    list.push(i);
                }
            }
            player.disableEquip(list);
        },
    },
    Europa_siyao: {
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            if (!event.player.countDiscardableCards(player, 'he')) return false;
            return event.card?.name == 'sha' && event.player.hasHistory('useCard', (evt) => evt.card.name == 'shan');
        },
        logTarget: 'player',
        check(event, player) {
            return get.attitude(player, event.player) <= 0;
        },
        async content(event, trigger, player) {
            const num = trigger.player.getHistory('useCard', (evt) => evt.card.name == 'shan').length,
                goon = num >= trigger.player.countCards('he');
            await player.discardPlayerCard(trigger.player, 'he', true, num);
            if (goon) {
                const list = [];
                list.push('选项一');
                list.push('选项二');
                const { index } = await player
                    .chooseControl(list, 'cancel2')
                    .set('choiceList', [`将手牌摸至体力上限`, `对${get.translation(trigger.player)}造成1点伤害`])
                    .set('prompt', get.prompt(event.name))
                    .set('ai', () => {
                        const player = get.player(),
                            trigger = get.event().getTrigger();
                        if (player.maxHp - player.countCards('h') > 3) return 0;
                        if (get.damageEffect(trigger.player, player, player) > 0) return 1;
                        return 0;
                    })
                    .forResult();
                if (index == 2) return;
                else if (index == 0) await player.drawTo(player.maxHp);
                else await trigger.player.damage();
            }
        },
    },
    Europa_zhuilie: {
        trigger: {
            player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player) {
            if (event.target.isHealthy()) return false; //QQQ
            if (player.getHistory('useCard', (evt) => evt.card.name == 'sha' && evt.targets?.includes(event.target)).length < 2) return false;
            return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
        },
        logTarget: 'target',
        async content(event, trigger, player) {
            const id = trigger.target.playerid;
            const map = trigger.parent.customArgs;
            const num =
                player.getHistory('useCard', (evt) => {
                    return evt.card.name == 'sha' && evt.targets?.includes(trigger.target);
                }).length - 1;
            if (!map[id]) map[id] = {};
            if (typeof map[id].shanRequired == 'number') {
                map[id].shanRequired += num;
            } else {
                map[id].shanRequired = num + 1;
            }
        },
        ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
                if (arg && arg.target.isHealthy()) return false;
                if ((arg && arg.card.name != 'sha') || arg.target.countCards('h', 'shan') > 1) return false;
            },
        },
        mod: {
            cardUsableTarget(card, player, target) {
                if (target.isDamaged() && card.name == 'sha') return true;
            },
        },
    },
    Europa_baolong: {
        trigger: {
            source: 'damageBegin1',
        },
        forced: true,
        EuropaNPC: true,
        filter(event, player) {
            if (!_status.Europa_animalsEnemy?.includes(event.player)) return false;
            return _status.Europa_animalsKing == player;
        },
        async content(event, trigger, player) {
            trigger.num++;
        },
        ai: {
            Europa_animalsEnables: true,
            skillTagFilter(player) {
                if (_status.Europa_animalsKing != player) return false;
            },
        },
    },
    Europa_liesha: {
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            return event.card?.name == 'sha' && event.player != player;
        },
        async content(event, trigger, player) {
            event.cards = trigger.player.getCards('hej', (card) => {
                if (!lib.filter.canBeDiscarded(card, player, trigger.player)) return false;
                if (get.Europa_animals().includes(card.name)) return true;
                return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
            });
            if (event.cards.length) await trigger.player.discard(event.cards, 'notBySelf').set('discarder', player);
        },
        group: 'Europa_liesha_suifaqiang',
        subSkill: {
            suifaqiang: {
                equipSkill: true,
                trigger: {
                    player: ['useCard', 'useCardAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (!player.hasEmptySlot(1) || !lib.card.Europa_suifaqiang || player.hasSkillTag('unequip_equip1')) return false;
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'useCard') trigger.directHit.addArray(game.filterPlayer());
                    else player.addTempSkill('Europa_suifaqiang_skill_ban1');
                },
                mod: {
                    attackRange(player, num) {
                        if (lib.card.Europa_suifaqiang && player.hasEmptySlot(1)) return num - lib.card.Europa_suifaqiang.distance.attackFrom;
                    },
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.card && arg.card.name == 'sha' && player.hasEmptySlot(1) && lib.card.Europa_suifaqiang && !player.hasSkillTag('unequip_equip1')) return true;
                        return false;
                    },
                },
            },
        },
    },
    Europa_zedan: {
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        async cost(event, trigger, player) {
            const { index } = await player
                .chooseControl('cancel2')
                .set('prompt', get.prompt(event.name.slice(0, -5)))
                .set('choiceList', [`1.本回合你至多使用一张伤害类牌,你本回合的下一张伤害牌改为造成目标当前体力值一半(至少为2)的伤害.`, `2.摸两张牌,本回合当你造成伤害时,改为弃置目标等同于伤害点数的牌.`])
                .set('ai', () => {
                    const player = get.player();
                    if (player.countCards('h', (card) => get.tag(card, 'damage')) == 1) return 0;
                    if (player.hasSkillTag('jueqing') || game.hasPlayer((target) => target.countDiscardableCards(player, 'he'))) return 1;
                    return 2;
                })
                .forResult();
            if (index != 2) event.result = { bool: true, cost_data: { index } };
        },
        async content(event, trigger, player) {
            player.addTempSkill(`Europa_zedan_effect${event.cost_data.index + 1}`);
            if (event.cost_data.index == 0) player.addMark('Europa_zedan_debuff', 1, false);
            if (event.cost_data.index == 1) await player.draw(2);
        },
        subSkill: {
            effect1: {
                charlotte: true,
                group: ['Europa_zedan_buff', 'Europa_zedan_debuff'],
                mark: true,
                intro: {
                    content: '本回合你至多使用一张伤害类牌,你本回合的下一张伤害牌改为造成目标当前体力值一半(至少为2)的伤害.',
                },
            },
            buff: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    trigger.num = Math.max(2, Math.floor(trigger.player.getHp() / 2));
                },
            },
            debuff: {
                trigger: {
                    player: 'useCard0',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    return player.hasMark('Europa_zedan_debuff');
                },
                async content(event, trigger, player) {
                    player.removeMark('Europa_zedan_debuff', 1, false);
                },
                mod: {
                    cardEnabled(card, player) {
                        if (!get.tag(card, 'damage')) return;
                        if (player.hasMark('Europa_zedan_debuff')) return;
                        return false;
                    },
                    cardSavable(card, player) {
                        if (!get.tag(card, 'damage')) return;
                        if (player.hasMark('Europa_zedan_debuff')) return;
                        return false;
                    },
                },
            },
            effect2: {
                trigger: {
                    source: 'damageBegin2',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.cancel();
                    if (trigger.player.countDiscardableCards(player, 'he') && trigger.num > 0) {
                        await player.discardPlayerCard(trigger.player, 'he', true, trigger.num);
                    }
                },
                ai: {
                    effect: {
                        player_use(card, player, target, current) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            if (!target.countDiscardableCards(player, 'he')) return;
                            if (get.tag(card, 'damage')) return 'zeroplayer';
                        },
                    },
                },
                mark: true,
                intro: {
                    content: '本回合当你造成伤害时,改为弃置目标等同于伤害点数的牌.',
                },
            },
        },
    },
    Europa_yonglie: {
        trigger: {
            player: 'Europa_lieshaAfter',
        },
        forced: true,
        EuropaNPC: true,
        filter(event, player) {
            if (_status.Europa_animalsKing != player) return false;
            return event.cards?.length;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_yonglie_effect');
            player.addMark('Europa_yonglie_effect', trigger.cards.length, false);
        },
        mark: true,
        intro: {
            markcount(storage, player) {
                return player.countMark('Europa_yonglie_effect');
            },
            content(storage, player) {
                return `你拯救了${player.countMark('Europa_yonglie_effect')}只动物`;
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.countMark('Europa_yonglie_effect') >= 3;
                },
                async content(event, trigger, player) {
                    trigger.num += Math.floor(player.countMark(event.name));
                },
            },
        },
    },
    Europa_qianni: {
        derivation: 'Europa_baoqi',
        trigger: {
            global: 'phaseBegin',
        },
        dutySkill: true,
        filter(event, player) {
            return event.player != player;
        },
        async cost(event, trigger, player) {
            event.result = await trigger.player
                .chooseBool(`你可以令${get.translation(player)}回复1点体力并摸一张牌,其交给你两张牌,若如此做,你本局内与其计算距离时-1`)
                .set('sourcex', player)
                .set('ai', () => {
                    const player = get.player(),
                        source = get.event('sourcex');
                    if (get.attitude(player, source) > 0) return true;
                    return source.isHealthy();
                })
                .forResult();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await player.recover();
            await player.draw();
            if (player.countCards('he') && trigger.player != player) {
                await player.chooseToGive(trigger.player, 'he', 2, true);
            }
            if (!trigger.player.storage.Europa_qianni_dis) trigger.player.storage.Europa_qianni_dis = [];
            trigger.player.storage.Europa_qianni_dis.push(player);
        },
        group: ['Europa_qianni_achieve', 'Europa_qianni_fail'],
        subSkill: {
            achieve: {
                trigger: {
                    player: ['recoverEnd', 'Europa_qianniAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (event.name == 'recover') return player.isHealthy();
                    return !game.hasPlayer((target) => get.distance(target, player) > 1);
                },
                async content(event, trigger, player) {
                    player.awakenSkill('Europa_qianni');
                    game.log(player, '成功完成使命');
                    player.changeSkin({ characterName: 'Europa_Kindly_Grandmother' }, 'Europa_Big_Bad_Wolf');
                    await player.drawTo(player.maxHp);
                    await player.changeSkills(['Europa_baoqi'], ['Europa_cixiang']);
                },
            },
            fail: {
                trigger: {
                    player: 'dying',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.awakenSkill('Europa_qianni');
                    game.log(player, '使命失败');
                    player.changeSkin({ characterName: 'Europa_Kindly_Grandmother' }, 'Europa_Big_Bad_Wolf');
                    if (player.maxHp > 3) await player.loseMaxHp(player.maxHp - 3);
                    else if (player.maxHp < 3) await player.gainMaxHp(3 - player.maxHp);
                    await player.changeHp(3 - player.getHp(true));
                    await player.changeSkills(['Europa_baoqi'], ['Europa_cixiang']);
                },
            },
            dis: {
                charlotte: true,
                mod: {
                    globalFrom(player, target, dist) {
                        if (player.getStorage('Europa_qianni_dis').includes(target)) {
                            return dist - player.getStorage('Europa_qianni_dis').filter((info) => info == target).length;
                        }
                    },
                },
            },
        },
    },
    Europa_cixiang: {
        mod: {
            targetEnabled(card, player, target, now) {
                if (target.getHp() >= 3 || !get.tag(card, 'damage')) return;
                return false;
            },
            cardEnabled(card, player) {
                if (player.getHp() >= 3 || !get.tag(card, 'damage')) return;
                return false;
            },
            cardSavable(card, player) {
                if (player.getHp() >= 3 || !get.tag(card, 'damage')) return;
                return false;
            },
        },
    },
    Europa_tanshi: {
        trigger: {
            source: 'dieAfter',
        },
        forced: true,
        EuropaNPC: true,
        filter(event, player) {
            if (event.player == player) return false;
            return _status.Europa_animalsKing == player;
        },
        async content(event, trigger, player) {
            await player.recover();
            await player.gainMaxHp();
            if (_status.Europa_animalsEnemy?.includes(trigger.player)) {
                player.restoreSkill('Europa_baoqi');
            }
        },
    },
    Europa_baoqi: {
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            if (player.maxHp < 5) player.turnOver();
            const goon = player.maxHp >= 7 ? true : false;
            const targets = game.filterPlayer((target) => {
                return target != player && get.distance(target, player) <= 1;
            });
            for (const target of targets) {
                await target.damage();
                if (goon) {
                    if (target.countDiscardableCards(player, 'he')) {
                        await player.discardPlayerCard(target, 'he', true);
                    }
                    const cards = target.getCards('he', (card) => get.Europa_animals().includes(card.name));
                    if (cards.length) await player.gain(cards, target, 'giveAuto', 'bySelf');
                }
            }
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
    },
    _Europa_zhen_gskill: {
        trigger: {
            source: 'damageBegin3',
        },
        ruleSkill: true,
        filter(event, player) {
            return event.hasNature('Europazhen');
        },
        check(event, player) {
            var target = event.player;
            var eff = get.damageEffect(target, player, player, event.nature);
            if (get.attitude(player, target) > 0) {
                if (eff >= 0) return false;
                return true;
            }
            if (!lib.inpile.includes('du')) return false;
            if (eff <= 0) return true;
            if (target.hp == 1) return false;
            if (event.num > 1 || player.hasSkill('tianxianjiu') || player.hasSkill('luoyi2') || player.hasSkill('reluoyi2')) return false;
            if (target.countCards('he') < 2) return false;
            var num = 0;
            var cards = target.getCards('he');
            if (Array.isArray(cards))
                for (var i of cards) {
                    if (get.value(i) > 6) num++;
                }
            if (num >= 2) return true;
            return false;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const target = trigger.player;
            trigger.cancel();
            let num = trigger.num;
            const cards = [];
            for (var i = 0; i < trigger.num; i++) {
                var card = get.cardPile(function (cardx) {
                    return cardx.name == 'du' && !cards.includes(cardx);
                });
                if (card) cards.push(card);
            }
            if (cards.length) target.gain(cards, 'gain2');
        },
    },
    Europa_shenluodiguo: {
        nobracket: true,
        trigger: { player: 'phaseBegin' },
        filter(event, player, name, source) {
            if (!player.countCards('h')) return false;
            const kindomMap = lib.skill.Europa_shenluodiguo.kindomMap;
            return Object.keys(kindomMap).some((opposite) => {
                return kindomMap[opposite].filter(event, { player: player, source: source, targets: source.getStorage('Europa_shenluodiguo_king') }, opposite);
            });
        },
        getIndex(event, player, triggername) {
            return game
                .filterPlayer((target) => {
                    const storage = target.getStorage('Europa_shenluodiguo_king');
                    return (target === player && storage.length) || storage.includes(player);
                })
                .sortBySeat();
        },
        line: false,
        forced: true,
        logTarget: (event, player, name, source) => source,
        async content(event, trigger, player) {
            const source = event.targets[0],
                targets = [source].concat(source.getStorage('Europa_shenluodiguo_king').slice().sortBySeat()).unique();
            const kindomMap = lib.skill.Europa_shenluodiguo.kindomMap;
            const opposites = Object.keys(kindomMap).filter((opposite) => {
                return kindomMap[opposite].filter(trigger, { player: player, source: source, targets: targets }, opposite);
            });
            player.line(targets);
            const resultx =
                opposites.length > 1
                    ? await player
                        .chooseButton(
                            [
                                '请选择一项议题与' + get.translation(targets.filter((i) => i !== player)) + '议事',
                                [
                                    opposites.map((skill) => {
                                        return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation(skill) + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                    }),
                                    'textbutton',
                                ],
                            ],

                            true
                        )
                        .set('ai', (button) => {
                            const player = get.player(),
                                [source, targets] = [get.event().targets[0], get.event().targets];
                            const kindomMap = lib.skill.Europa_shenluodiguo.kindomMap;
                            return kindomMap[button.link].effect(player, source, targets);
                        })
                        .set('targets', targets)
                        .forResult()
                    : { bool: true, links: opposites };
            if (!resultx?.bool || !resultx.links?.length) return;
            const opposite = resultx.links[0];
            player.popup(opposite);
            game.log(player, '选择了', '#g' + get.translation(opposite));
            const result = await player
                .chooseToDebate(targets)
                .set('callback', async (event) => {
                    const opinion = event.debateResult.opinion,
                        source = get.event().getParent(2).targets[0];
                    if (['red', 'black'].includes(opinion)) {
                        if (opinion === 'red') {
                            source.popup('洗具', 'wood');
                            await source.draw();
                        }
                        if (opinion === 'black') {
                            source.popup('杯具', 'wood');
                            await source.chooseToDiscard('he', 2, true);
                        }
                    }
                })
                .forResult();
            if (['red', 'black'].includes(result.opinion)) {
                const goon = result.opinion === 'red';
                if (result.opinion === 'red') {
                    player.popup('洗具', 'wood');
                    game.log(player, '的提议', '#g' + get.translation(opposite), '被成功执行');
                } else {
                    player.popup('杯具', 'wood');
                    game.log(player, '的提议', '#g' + get.translation(opposite), '无法执行');
                }
                await kindomMap[opposite].content(player, source, targets, goon, opposite, result.red);
            } else {
                player.chat('...');
                game.log(player, '的提议并未得出结果');
            }
        },
        kindomMap: {
            Europa_chongxinxuanju: {
                filter(trigger, event) {
                    const [player, source] = [event.player, event.source];
                    if (source.getStorage('Europa_shenluodiguo_block').includes(name)) return false;
                    if (!source.getStorage('Europa_shenluodiguo_WatingForKing').includes(player)) return false;
                    let num = 0;
                    for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                        if (
                            _status.globalHistory[i].everything.some((evt) => {
                                return (evt.name === 'Europa_setShenLuoKindom' || evt.name === 'Europa_changeShenLuoKindom') && evt.player === source;
                            })
                        )
                            break;
                        if (_status.globalHistory[i].isRound) num++;
                    }
                    return num >= 2;
                },
                async content(player, source, targets, goon) {
                    if (goon) {
                        source.popup('洗具', 'wood');
                        game.log(source, '连任');
                        source.addSkill('Europa_shenluodiguo_block');
                        source.markAuto('Europa_shenluodiguo_block', [name]);
                    } else {
                        source.popup('杯具', 'wood');
                        player.popup('洗具', 'wood');
                        await player.Europa_changeShenLuoKindom(source);
                    }
                },
                effect(player, source, targets) {
                    if (get.attitude(player, source) > 0) return 0;
                    return targets.reduce((sum, i) => sum + get.sgn(get.attitude(player, i)), 0);
                },
            },
            Europa_jinzhigongfa: {
                filter(trigger, event, name) {
                    return !event.source.getStorage('Europa_shenluodiguo_used').includes(name);
                },
                async content(player, source, targets, goon, name) {
                    source.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
                    source.markAuto('Europa_shenluodiguo_used', [name]);
                    if (goon) {
                        player.addTempSkill('Europa_shenluodiguo_eff1', { player: 'phaseBegin' });
                        player.markAuto('Europa_shenluodiguo_eff1', targets);
                    }
                },
                effect(player, source, targets) {
                    if (get.attitude(player, source) > 0) return 0;
                    return targets.reduce((sum, i) => sum + get.sgn(get.attitude(player, i)), 0);
                },
            },
            Europa_zhongshinonggeng: {
                filter(trigger, event, name) {
                    const [player, source, targets] = [event.player, event.source, event.targets];
                    if (source.getStorage('Europa_shenluodiguo_used').includes(name)) return false;
                    const card = new lib.element.VCard({ name: 'wugu' });
                    return targets.some((i) => player.canUse(card, i, false));
                },
                async content(player, source, targets, goon, name) {
                    source.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
                    source.markAuto('Europa_shenluodiguo_used', [name]);
                    if (goon) {
                        const card = new lib.element.VCard({ name: 'wugu' });
                        await player.useCard(
                            card,
                            targets.filter((i) => player.canUse(card, i, false)),
                            false,
                            'noai'
                        );
                    }
                },
                effect(player, source, targets) {
                    const card = new lib.element.VCard({ name: 'wugu' });
                    return targets.reduce((sum, target) => {
                        if (player.canUse(card, target, false)) {
                            sum += get.effect(target, card, player, player);
                        }
                        return sum;
                    }, 0);
                },
            },
            Europa_qiangpoyuanzhu: {
                filter(trigger, event, name) {
                    return event.player.countCards('he');
                },
                async content(player, source, targets, goon) {
                    if (goon) await player.gainPlayerCard(source, 'he', true);
                },
                effect(player, source, targets) {
                    const card = new lib.element.VCard({ name: 'wugu' });
                    return targets.reduce((sum, target) => {
                        if (player.canUse(card, target, false)) {
                            sum += get.effect(target, card, player, player);
                        }
                        return sum;
                    }, 0);
                },
            },
            Europa_diaopeijunxie: {
                filter(trigger, event, name) {
                    const [player, targets] = [event.player, event.targets];
                    return player.canMoveCard(null, true, targets);
                },
                async content(player, source, targets, goon) {
                    if (goon) {
                        let num = 2;
                        while (num > 0) {
                            num--;
                            const result = await player.moveCard(targets).set('nojudge', true).forResult();
                            if (!result?.bool) break;
                        }
                    }
                },
                effect(player, source, targets) {
                    return (player.canMoveCard(true, true, targets) ? 5 : -2) * targets.reduce((sum, i) => sum + get.sgn(get.attitude(player, i)), 0);
                },
            },
            Europa_xiushanjijian: {
                filter: () => true,
                async content(player, source, targets, goon) {
                    if (goon) {
                        for (var i of targets) {
                            await i.link(false);
                            await i.turnOver(false);
                        }
                        await source.draw();
                    }
                },
                effect(player, source, targets) {
                    return (
                        get.effect(source, { name: 'draw' }, player, player) +
                        targets.reduce((sum, target) => {
                            const att = get.sgn(get.attitude(player, target));
                            if (target.isLinked()) sum += att;
                            if (target.isTurnedOver()) sum += 3 * att;
                            return sum;
                        }, 0)
                    );
                },
            },
            Europa_gongyuwaihui: {
                filter(trigger, event, name) {
                    return !event.source.getStorage('Europa_shenluodiguo_used').includes(name);
                },
                async content(player, source, targets, goon, name) {
                    source.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
                    source.markAuto('Europa_shenluodiguo_used', [name]);
                    if (goon) {
                        for (const target of targets) {
                            const result = await target
                                .chooseToUse(function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                }, '使用一张【杀】,或弃置一张牌')
                                .set('targetRequired', true)
                                .set('complexSelect', true)
                                .set('filterTarget', lib.filter.filterTarget)
                                .forResult();
                            if (!result?.bool) await target.chooseToDiscard('he', true);
                        }
                    }
                },
                effect(player, source, targets) {
                    return targets.reduce((sum, target) => {
                        let cards = target.getCards((card) => card.name === 'sha' && player.hasValueTarget(card));
                        if (cards.length) {
                            cards.sort((a, b) => target.getUseValue(b) - target.getUseValue(a));
                            return sum + target.getUseValue(cards[0]);
                        }
                        return sum + get.effect(target, { name: 'guohe_copy2' }, target, player);
                    }, 0);
                },
            },
            Europa_xiushanbaolei: {
                filter(trigger, event, name) {
                    return !event.source.getStorage('Europa_shenluodiguo_used').includes(name);
                },
                async content(player, source, targets, goon, name) {
                    source.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
                    source.markAuto('Europa_shenluodiguo_used', [name]);
                    if (goon) {
                        for (var i of targets) await i.changeHujia(1);
                    }
                },
                effect(player, source, targets) {
                    return targets.reduce((sum, target) => {
                        return sum + 2.5 * get.sgn(get.attitude(player, target));
                    }, 0);
                },
            },
            Europa_zongjiaozhanzheng: {
                filter(trigger, event, name) {
                    const [source, targets] = [event.source, event.targets];
                    if (source.getStorage('Europa_shenluodiguo_block').includes(name)) return false;
                    return targets.some((target) => {
                        if (target.hasClan('天主教')) return false;
                        const card = new lib.element.VCard({ name: 'juedou' });
                        return targets.some((current) => {
                            if (!current.hasClan('天主教')) return false;
                            return target.canUse(card, current, false);
                        });
                    });
                },
                async content(player, source, targets, goon, name) {
                    source.addSkill('Europa_shenluodiguo_block');
                    source.markAuto('Europa_shenluodiguo_block', [name]);
                    if (goon) {
                        for (const target of targets) {
                            if (!target.hasClan('天主教')) continue;
                            const card = new lib.element.VCard({ name: 'juedou' });
                            const aims = targets.filter((current) => {
                                if (!current.hasClan('天主教')) return false;
                                return target.canUse(card, current, false);
                            });
                            if (aims.length) {
                                const result = await target
                                    .chooseTarget(
                                        '选择一名天主教神罗成员,视为对其使用【决斗】',
                                        (c, p, t) => {
                                            return get.event().targets.includes(t);
                                        },
                                        true
                                    )
                                    .set('targets', aims)
                                    .set('ai', (target) => {
                                        const player = get.player(),
                                            card = new lib.element.VCard({ name: 'juedou' });
                                        return get.effect(target, card, player, player);
                                    })
                                    .forResult();
                                if (result?.bool && result.targets?.length) {
                                    const aim = result.targets[0];
                                    await player.useCard(card, aim, false, 'noai');
                                }
                            }
                        }
                    }
                },
                effect(player, source, targets) {
                    const card = new lib.element.VCard({ name: 'juedou' });
                    return targets.reduce((sum, target) => {
                        if (!target.hasClan('天主教')) return sum;
                        let aims = targets.filter((current) => {
                            if (!current.hasClan('天主教')) return false;
                            return target.canUse(card, current, false);
                        });
                        if (!aims.length) return sum;
                        aims.sort((a, b) => get.effect(b, card, target, target) - get.effect(a, card, target, target));
                        return sum + get.effect(aims[0], card, target, player);
                    }, 0);
                },
            },
            Europa_huyugaige: {
                filter(trigger, event, name) {
                    return !event.source.getStorage('Europa_shenluodiguo_used').includes(name);
                },
                async content(player, source, targets, goon, name) {
                    source.addTempSkill('Europa_shenluodiguo_used', 'roundStart');
                    source.markAuto('Europa_shenluodiguo_used', [name]);
                    if (goon) {
                        await source.draw(3);
                        source.addTempSkill('Europa_shenluodiguo_eff2');
                        source.addMark('Europa_shenluodiguo_eff2', 3, false);
                    }
                },
                effect(player, source, targets) {
                    return get.effect(source, { name: 'draw' }, player, player) * 3;
                },
            },
            Europa_dihuihuangdi: {
                filter(trigger, event, name) {
                    return !event.source.countCards('he');
                },
                async content(player, source, targets, goon, name, targetx) {
                    if (goon) {
                        for (const target of targetx.slice().sortBySeat()) {
                            target.line(source);
                            await target.discardPlayerCard(source, 'he', true);
                        }
                    }
                },
                effect(player, source, targets) {
                    return (
                        get.effect(source, { name: 'guohe_copy2' }, player, player) *
                        Math.min(
                            targets.filter((i) => {
                                return get.effect(source, { name: 'guohe_copy2' }, i, i) > 0;
                            }).length,
                            source.countCards('he')
                        )
                    );
                },
            },
            Europa_jinxizhaoshu: {
                filter(trigger, event, name) {
                    const [player, source, targets] = [event.player, event.source, event.targets];
                    if (player !== source || source.getStorage('Europa_shenluodiguo_block').includes(name)) return false;
                    return (
                        targets.some((i) => {
                            return i !== player && !player.getStorage('Europa_shenluodiguo_WatingForKing').includes(i);
                        }) &&
                        game.hasPlayer((target) => {
                            return target !== player && !player.getStorage('Europa_shenluodiguo_king').includes(target);
                        })
                    );
                },
                async content(player, source, targets, goon, name) {
                    source.addSkill('Europa_shenluodiguo_block');
                    source.markAuto('Europa_shenluodiguo_block', [name]);
                    if (goon) {
                        const result = await player
                            .chooseTarget(
                                '令一名普通神罗成员移出<神圣罗马帝国>并令一名<神圣罗马帝国>成员加入<神圣罗马帝国>',
                                (c, player, target) => {
                                    if (!ui.selected.targets.length) {
                                        return player.getStorage('Europa_shenluodiguo_king').includes(target) && !player.getStorage('Europa_shenluodiguo_WatingForKing').includes(target);
                                    }
                                    return target !== player && !player.getStorage('Europa_shenluodiguo_king').includes(target);
                                },
                                2,
                                true
                            )
                            .set('targetprompt', ['移出帝国', '加入帝国'])
                            .set('complexTarget', true)
                            .set('ai', (target) => {
                                return get.attitude(get.player(), target) * get.sgn(ui.selected.targets.length - 0.5);
                            })
                            .forResult();
                        if (result?.bool && result.targets?.length === 2) {
                            player.line2(result.targets);
                            const [from, to] = result.targets;
                            player.unmarkAuto('Europa_shenluodiguo_king', [from]);
                            game.log(from, '被移出了', player, '的', '#y神圣罗马帝国');
                            player.markAuto('Europa_shenluodiguo_king', [to]);
                            game.log(to, '加入了', player, '的', '#y神圣罗马帝国');
                        }
                    }
                },
                effect(player, source, targets) {
                    return (
                        Math.max(
                            ...player
                                .getStorage('Europa_shenluodiguo_king')
                                .filter((target) => {
                                    return !player.getStorage('Europa_shenluodiguo_WatingForKing').includes(target);
                                })
                                .map((target) => -get.attitude(player, target))
                        ) +
                        Math.max(
                            ...game
                                .filterPlayer((target) => {
                                    return target !== player && !player.getStorage('Europa_shenluodiguo_king').includes(target);
                                })
                                .map((target) => get.attitude(player, target))
                        )
                    );
                },
            },
        },
        subSkill: {
            used: {
                charlotte: true,
            },
            block: {
                charlotte: true,
            },
            eff1: {
                charlotte: true,
                marktext: '<span style="text-decoration: line-through;">伐</span>',
                intro: { content: '$每回合使用的第一张【杀】和普通锦囊牌对其他神罗角色无效' },
                trigger: { global: 'useCardToPlayered' },
                filter(event, player) {
                    if (event.player === event.target || _status.currentPhase !== event.player) return false;
                    if (event.player.getHistory('useCard', (evt) => evt.card.name === 'sha' || get.type(evt.card) === 'trick').indexOf(event.parent) !== 0) return false;
                    return player.getStorage('Europa_shenluodiguo_eff1').includes(event.player) && player.getStorage('Europa_shenluodiguo_eff1').includes(event.target);
                },
                line: false,
                forced: true,
                logTarget(event, player) {
                    return [event.player, event.target];
                },
                async content(event, trigger, player) {
                    player.line2([trigger.player, trigger.target]);
                    game.log(trigger.card, '对', trigger.target, '无效');
                    trigger.parent.excluded.add(trigger.target);
                },
                global: 'Europa_shenluodiguo_eff1_ai',
            },
            eff1_ai: {
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (_status.currentPhase !== player || player === target || !(card.name === 'sha' || get.type(card) === 'trick')) return;
                            if (player.hasHistory('useCard', (evt) => evt.card.name === 'sha' || get.type(evt.card) === 'trick')) return;
                            if (
                                game.hasPlayer((source) => {
                                    return source.getStorage('Europa_shenluodiguo_eff1').includes(player) && source.getStorage('Europa_shenluodiguo_eff1').includes(target);
                                })
                            )
                                return 'zeroplayertarget';
                        },
                    },
                },
            },
            eff2: {
                charlotte: true,
                intro: { content: '手牌上限+#' },
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('Europa_shenluodiguo_eff2');
                    },
                },
            },
            king: {
                mark: true,
                marktext: '王',
                charlotte: true,
                intro: {
                    content(storage = [], player) {
                        return (
                            '<li>摸牌阶段额外摸两张牌,手牌上限+1,体力上限+1<br><li>' +
                            ((storage, player) => {
                                if (storage.length) {
                                    let targets = storage.filter((i) => i.isIn());
                                    if (targets.length) {
                                        let str = '<li>神罗成员:' + get.translation(targets);
                                        let kings = targets.filter((i) => player.getStorage('Europa_shenluodiguo_WatingForKing').includes(i));
                                        if (kings.length) str += '<br><li>选帝侯:' + get.translation(kings);
                                        return str;
                                    }
                                }
                                return '但这是一个孤立的王...';
                            })(storage, player)
                        );
                    },
                },
                init(player) {
                    player.gainMaxHp();
                },
                onremove(player, skill) {
                    game.log(player, '失去了', '#g凯撒', '的权力');
                    delete player.storage[skill];
                    ['WatingForKing', 'used', 'block'].forEach((item) => {
                        player.removeSkill('Europa_shenluodiguo_' + item);
                    });
                    player.loseMaxHp();
                },
                nobracket: true,
                trigger: { player: 'phaseDrawBegin2' },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num += 2;
                },
                group: 'Europa_shenluodiguo_give',
                mod: { maxHandcard: (player, num) => num + 1 },
            },
            WatingForKing: {
                charlotte: true,
            },
            give: {
                nobracket: true,
                trigger: { global: 'die' },
                filter(event, player) {
                    if (event.player === player) return false;
                    return player.getStorage('Europa_shenluodiguo_WatingForKing').filter((i) => i.isIn()).length <= 1;
                },
                forced: true,
                forceDie: true,
                async content(event, trigger, player) {
                    event.targets = player.getStorage('Europa_shenluodiguo_king');
                    const targets = player
                        .getStorage('Europa_shenluodiguo_WatingForKing')
                        .filter((i) => i.isIn())
                        .sortBySeat(player);
                    if (targets.length > 1) {
                        const source = targets[0];
                        player.line(source);
                        await source.Europa_changeShenLuoKindom(player);
                    } else {
                        game.log(player, '的', '#y神圣罗马帝国', '解散');
                        player.removeSkill('Europa_shenluodiguo_king');
                    }
                },
            },
        },
    },
    _Europa_zhugongPlace: {
        get places() {
            return [
                ['kesitandingniyejiaowai', 'luodedaohaitan', 'beiergelaidefangxian', 'aerbeisishan', 'yinjiayulin'],
                ['yinqingbudingdehaimian', 'qishijuedouchang', 'leikeyaweikedebingtianxuedi', 'bulaoquan', 'huangjincheng', 'xiyangqidasai'],
            ].flat();
        },
        trigger: { global: 'phaseBefore', player: 'enterGame' },
        filter(event, player) {
            if (!lib.config.extension_欧陆风云_Europa_zhugongPlace) return false;
            return (event.name !== 'phase' || game.phaseNumber === 0) && get.zhu(player) === player;
        },
        forced: true,
        popup: false,
        forceLoad: true,
        async content(event, trigger, player) {
            game.log(player, '触发了', '#y场景机制');
            const places = lib.skill[event.name].places.randomGets(3);
            if (!places.length) return event.finish();
            const result = await player
                .chooseButton([
                    '是否为本局游戏选择一个场景？',
                    [
                        places.map((skill) => {
                            skill = 'Europa_' + skill;
                            return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation(skill) + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                        }),
                        'textbutton',
                    ],
                ])
                .set(
                    'ai',
                    (button) =>
                        (
                            lib.skill[button.link].getEffect ||
                            function () {
                                return 0.1;
                            }
                        )(get.player()) *
                        (0.5 + Math.random())
                )
                .forResult();
            if (result?.bool && result.links?.length) {
                const [place] = result.links;
                player.popup(place);
                game.log(player, '选择了', '#g' + get.translation(place));
                game.addGlobalSkill(place);
                if (lib.skill[place].extraPlace?.length) {
                    lib.skill[place].extraPlace.forEach((item) => game.addGlobalSkill(place + '_' + item));
                }
                game.broadcastAll((place) => {
                    ui.background.setBackgroundImage('extension/欧陆风云/image/background/' + place + '.jpg');
                    ui.background.setBackgroundImage(ui.background.style.backgroundImage);
                    if (ui['EuropaEvent_' + place]) return;
                    if (!ui.EuropaInfo) ui.EuropaInfo = get.is.phoneLayout() ? ui.create.div('.touchinfo.left', ui.window) : ui.create.div(ui.gameinfo);
                    ui.EuropaInfo.innerHTML = (ui.EuropaInfo.innerHTML ? '/' : '') + get.translation(place);
                    ui['EuropaEvent_' + place] = ui.create.system(get.translation(place), null, true);
                    lib.setPopped(
                        ui['EuropaEvent_' + place],
                        function () {
                            const uiintro = ui.create.dialog('hidden');
                            uiintro.add(get.translation(place));
                            uiintro.add('<div class="text center">' + get.translation(place + '_info') + '</div>');
                            const ul = uiintro.querySelector('ul');
                            if (ul) ul.style.width = '180px';
                            uiintro.add(ui.create.div('.placeholder'));
                            return uiintro;
                        },
                        250
                    );
                }, place);
                event[event.name] = place;
            } else {
                player.chat('拒绝');
                game.log('但', player, '拒绝选择场景!');
            }
        },
    },
    Europa_kesitandingniyejiaowai: {
        trigger: {
            player: 'useCard',
            global: '_Europa_zhugongPlaceAfter',
        },
        filter(event, player) {
            if (event.name === '_Europa_zhugongPlace') {
                return event[event.name] === 'Europa_kesitandingniyejiaowai' && player.hasEuropaReligion('基督教');
            }
            if (
                !player.hasCard((card) => {
                    if (get.position(card) === 'h' && _status.connectMode) return true;
                    return lib.filter.cardDiscardable(card, player);
                }, 'he')
            )
                return false;
            return event.card && event.card.name === 'sha' && player.hasEuropaReligion('穆斯林');
        },
        forced: true,
        async content(event, trigger, player) {
            if (trigger.name === '_Europa_zhugongPlace') {
                await player.draw();
            } else {
                const result = await player
                    .chooseToDiscard(get.prompt(event.name), 'he')
                    .set('ai', (card) => {
                        const player = get.player(),
                            trigger = get.event().getTrigger();
                        return trigger.targets?.reduce(
                            (sum, target) =>
                                sum +
                                (() => {
                                    let eff = get.damageEffect(target, player, player);
                                    if (target.hasSkillTag('filterDamage', null, { player, card: trigger.card })) eff = Math.min(0, eff);
                                    return eff;
                                })(),
                            0
                        )
                            ? 7 - get.value(card)
                            : 0;
                    })
                    .set('prompt', '弃置一张牌,令' + get.translation(trigger.card) + '的伤害基数+1')
                    .forResult();
                if (result.bool) {
                    trigger.baseDamage++;
                    game.log(trigger.card, '造成的伤害+1');
                }
            }
        },
        getEffect(player) {
            return (
                game
                    .filterPlayer((target) => {
                        return target.hasEuropaReligion('基督教');
                    })
                    .reduce((sum, target) => {
                        return sum + get.effect(target, { name: 'draw' }, player, player);
                    }, 0) +
                game
                    .filterPlayer((target) => {
                        return target.hasEuropaReligion('穆斯林');
                    })
                    .reduce((sum, target) => {
                        return sum + get.attitude(player, target);
                    }, 0)
            );
        },
    },
    Europa_luodedaohaitan: {
        trigger: { player: 'equipEnd' },
        filter(event, player) {
            return get.type2(event.card) === 'equip2' && !player.hasEuropaReligion('穆斯林');
        },
        forced: true,
        content() {
            player.changeHujia(1);
        },
        ai: {
            unequip: true,
            unequip: true,
            skillTagFilter(player, tag, arg) {
                if (!(arg?.card?.name === 'sha') || (!player.getVEquip('Europa_kelakefanchuan') && !player.getVEquip('Europa_wudijiandui'))) return false;
            },
        },
        getEffect(player) {
            return game
                .filterPlayer((target) => {
                    return !target.hasEuropaReligion('穆斯林');
                })
                .reduce((sum, target) => {
                    return sum + get.attitude(player, target);
                }, 0);
        },
    },
    Europa_beiergelaidefangxian: {
        trigger: {
            player: 'changeHujiaEnd',
            global: '_Europa_zhugongPlaceAfter',
        },
        filter(event, player) {
            if (!player.hasEuropaReligion('天主教')) return false;
            if (event.name === '_Europa_zhugongPlace') {
                return event[event.name] === 'Europa_beiergelaidefangxian';
            }
            if (player.hujia || event.num >= 0) return false;
            event._Europa_beiergelaidefangxian = true;
            return (
                game
                    .getAllGlobalHistory('everything', (evt) => {
                        return evt.name === 'changeHujia' && evt.player === player && evt._Europa_beiergelaidefangxian;
                    })
                    .indexOf(event) === 0
            );
        },
        forced: true,
        async content(event, trigger, player) {
            if (trigger.name === '_Europa_zhugongPlace') {
                await player.changeHujia(3);
            } else {
                const cards = player.getDiscardableCards(player, 'h');
                if (cards.length) await player.discard(cards);
                if (player.countCards('h')) await player.chooseToDiscard('h', Math.ceil(player.countCards('h') / 2), true);
            }
        },
        getEffect(player) {
            return game
                .filterPlayer((target) => {
                    return target.hasClan('天主教');
                })
                .reduce((sum, target) => {
                    return sum + get.attitude(player, target) * 3;
                }, 0);
        },
    },
    Europa_aerbeisishan: {
        trigger: { global: '_Europa_zhugongPlaceAfter' },
        filter(event, player) {
            if (['up', 'down'].every((eff) => player.hasSkill('Europa_aerbeisishan_' + eff))) return false;
            return event[event.name] === 'Europa_aerbeisishan';
        },
        forced: true,
        async content(event, trigger, player) {
            const places = ['up', 'down'].filter((eff) => !player.hasSkill('Europa_aerbeisishan_' + eff));
            const result =
                places.length > 1
                    ? await player
                        .chooseButton(
                            [
                                '请选择在<阿尔卑斯山>的作战策略',
                                [
                                    places.map((skill) => {
                                        skill = 'Europa_aerbeisishan_' + skill;
                                        return [skill, '<div class="popup text" style="width:calc(100% - 10px);display:inline-block"><div class="skill">' + get.translation(skill) + '</div><div>' + lib.translate[skill + '_info'] + '</div></div>'];
                                    }),
                                    'textbutton',
                                ],
                            ],

                            true
                        )
                        .set('ai', () => 1 + Math.random())
                        .forResult()
                    : { bool: true, links: places };
            if (result?.bool && result.links?.length) {
                const [place] = result.links;
                player.popup(place);
                game.log(player, '选择的策略为', '#y' + get.translation(place));
                player.addSkill(place);
            }
        },
        subSkill: {
            up: {
                mark: true,
                nopop: true,
                charlotte: true,
                marktext: '守',
                intro: { content: () => lib.translate.Europa_aerbeisishan_up_info },
                trigger: { player: 'phaseDrawBegin1' },
                filter(event, player) {
                    return !event.numFixed;
                },
                forced: true,
                content() {
                    trigger.num--;
                },
            },
            down: {
                mark: true,
                nopop: true,
                charlotte: true,
                marktext: '攻',
                intro: { content: () => lib.translate.Europa_aerbeisishan_down_info },
                trigger: { player: 'useCardToPlayered' },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && event.target.hasSkill('Europa_aerbeisishan_up');
                },
                forced: true,
                logTarget: 'target',
                async content(event, trigger, player) {
                    const target = trigger.target,
                        eff = get.effect(target, trigger.card, player, player);
                    const result = await player
                        .chooseToDiscard('山下进攻:弃置一张【杀】,或令' + get.translation(trigger.card) + '对' + get.translation(target) + '无效', { name: 'sha' })
                        .set('ai', (card) => {
                            return get.event().effect > 0 ? 7 - get.value(card) : 0;
                        })
                        .set('effect', eff)
                        .forResult();
                    if (!result.bool) {
                        trigger.parent.excluded.add(target);
                        game.log(trigger.card, '对', target, '无效');
                    }
                },
                ai: {
                    effect: {
                        player_use(card, player, target, current) {
                            if (card.name == 'sha' && get.attitude(player, target) < 0) {
                                if (_status.event.name == 'Europa_aerbeisishan_down') return;
                                if (!target.hasSkill('Europa_aerbeisishan_down')) return;
                                if (get.attitude(player, target) > 0 && current < 0) return 'zerotarget';
                                let bs = player.getCards('h', { name: 'sha' });
                                bs.remove(card);
                                if (card.cards) bs.removeArray(card.cards);
                                else bs.removeArray(ui.selected.cards);
                                if (!bs.length) return 'zerotarget';
                                if (player.hasSkill('jiu') || player.hasSkill('tianxianjiu')) return;
                                if (bs.length <= 2) {
                                    for (var i = 0; i < bs.length; i++) {
                                        if (get.value(bs[i]) < 7) {
                                            return [1, 0, 1, -0.5];
                                        }
                                    }
                                    return [1, 0, 0.3, 0];
                                }
                                return [1, 0, 1, -0.5];
                            }
                        },
                    },
                },
            },
        },
        getEffect(player) {
            return game
                .filterPlayer((target) => {
                    return target.hasClan('天主教');
                })
                .reduce((sum, target) => {
                    return sum + get.attitude(player, target) * 3;
                }, 0);
        },
    },
    Europa_yinjiayulin: {
        extraPlace: ['dabaoyu'],
        mod: {
            globalFrom(player, target, dist) {
                if (player.hasClan('原住民') && !target.hasClan('原住民')) return dist - 1;
            },
            cardnature(card) {
                if (_status._Europa_yinjiayulin) return;
                _status._Europa_yinjiayulin = true;
                const bool = game.hasNature(card, 'ice');
                delete _status._Europa_yinjiayulin;
                if (bool) return false;
            },
        },
        trigger: { source: 'damageBegin1' },
        filter(event, player) {
            return ['fire', 'thunder', 'ice'].some((nat) => event.hasNature(nat));
        },
        forced: true,
        logTarget: 'player',
        content() {
            if (trigger.hasNature('fire')) {
                if (_status._Europa_yinjiayulin_dabaoyu) trigger.cancel();
                else trigger.num++;
            }
            if (trigger.hasNature('thunder')) {
                trigger.num += 1 + (_status._Europa_yinjiayulin_dabaoyu || 0);
            }
            if (trigger.hasNature('ice')) {
                trigger.num--;
            }
        },
        ai: {
            effect: {
                target(card) {
                    const tag = get.tag(card, 'damage');
                    if (tag > 0.5 && ['fire', 'thunder', 'ice'].some((nat) => get.tag(card, nat + 'Damage'))) {
                        if (get.tag(card, 'fireDamage')) {
                            return _status._Europa_yinjiayulin_dabaoyu ? 'zeroplayertarget' : 2;
                        }
                        if (get.tag(card, 'thunderDamage')) {
                            return _status._Europa_yinjiayulin_dabaoyu + 2;
                        }
                        if (get.tag(card, 'iceDamage')) {
                            return tag > 1 ? 0.5 : 'zeroplayertarget';
                        }
                    }
                },
            },
        },
        subSkill: {
            dabaoyu: {
                trigger: { player: 'roundStart' },
                forced: true,
                content() {
                    if (_status._Europa_yinjiayulin_dabaoyu) {
                        game.broadcastAll(() => {
                            delete _status._Europa_yinjiayulin_dabaoyu;
                            ui.EuropaInfo.innerHTML = ui.EuropaInfo.innerHTML.replaceAll('雨林(大暴雨)', '印加雨林');
                        });
                    }
                    if (Math.random() <= 0.3) {
                        player.$fullscreenpop('大暴雨', 'thunder');
                        game.log('本轮触发了', '#g大暴雨', '机制');
                        game.broadcastAll(() => {
                            _status._Europa_yinjiayulin_dabaoyu = true;
                            ui.EuropaInfo.innerHTML = ui.EuropaInfo.innerHTML.replaceAll('印加雨林', '雨林(大暴雨)');
                        });
                    }
                },
            },
        },
    },
    Europa_yinqingbudingdehaimian: {
        mod: {
            maxHandcardBase(player, num) {
                const round = game.roundNumber;
                if (typeof round === 'number' && round % 2 === 0) return 1;
            },
        },
        trigger: { player: 'phaseDiscardBefore' },
        filter(event, player) {
            const round = game.roundNumber;
            return typeof round === 'number' && round % 2 === 1;
        },
        forced: true,
        content() {
            trigger.cancel();
            game.log(player, '跳过了', '#y弃牌阶段');
        },
    },
    Europa_qishijuedouchang: {
        trigger: { player: 'phaseUseBegin' },
        filter(event, player) {
            return player.hasUseTarget({ name: 'juedou' }, false);
        },
        forced: true,
        async content(event, trigger, player) {
            const card = new lib.element.VCard({ name: 'juedou' });
            const next = player.chooseUseTarget(card, true, false);
            await next;
            const targets = game
                .getGlobalHistory('everything', (evt) => {
                    return evt.name === 'juedou' && evt.getParent(2) === next;
                })
                .map((evt) => [evt.player, evt.target].filter((i) => evt.turn !== i))
                .flat(2)
                .sortBySeat();
            if (targets.length) {
                if (targets.length === 1) await targets[0].draw();
                else {
                    await game.asyncDraw(targets);
                }
            }
        },
    },
    Europa_leikeyaweikedebingtianxuedi: {
        trigger: { player: 'phaseJieshuBegin' },
        filter(event, player) {
            return !player.getVEquips(2).length;
        },
        forced: true,
        async content(event, trigger, player) {
            const result = await player
                .chooseToDiscard(2, 'he')
                .set('ai', (card) => {
                    const player = get.player(),
                        num = player.getHp();
                    if (get.damageEffect(player, player, player, 'ice') > 0) return 0;
                    if (card.name == 'tao') return -10;
                    if (card.name == 'jiu' && num <= 1) return -10;
                    return get.unuseful(card) + 2.5 * (5 - num);
                })
                .set('prompt', '###' + get.translation(event.name) + '###弃置两张牌或受到1点冰属性伤害')
                .forResult();
            if (!result.bool) await player.damage(1, 'ice');
        },
    },
    Europa_bulaoquan: {
        trigger: { global: 'roundStart' },
        filter(event, player) {
            return player.isDamaged();
        },
        forced: true,
        content() {
            player.recover();
        },
    },
    Europa_huangjincheng: {
        trigger: { player: 'phaseBegin' },
        prompt2(event, player) {
            const num = player.countMark('Europa_huangjincheng') + 1;
            return '跳过出牌阶段并获得1枚<探寻>标记' + (num >= 3 ? ',失去所有<探寻>标记并摸七张牌(不计入手牌上限)' : '');
        },
        check(event, player) {
            return lib.skill.zishou.check(event, player);
        },
        async content(event, trigger, player) {
            player.skip('phaseUse');
            game.log(player, '跳过了', '#y出牌阶段');
            player.addMark(event.name, 1);
            if (player.countMark(event.name) >= 3) {
                player.clearMark(event.name);
                player.addSkill(event.name + '_effect');
                const next = player.draw(7);
                next.gaintag = [event.name + '_effect'];
                await next;
            }
        },
        intro: {
            name: '探寻',
            content: 'mark',
        },
        subSkill: {
            effect: {
                mod: {
                    ignoredHandcard(card) {
                        if (card.hasGaintag('Europa_huangjincheng_effect')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('Europa_huangjincheng_effect')) return false;
                    },
                },
            },
        },
    },
    Europa_xiyangqidasai: {
        trigger: { player: ['shaBegin', 'useCard'] },
        filter(event, player) {
            return event.name === 'sha' || (get.tag(event.card, 'damage') && get.type(event.card) === 'trick');
        },
        forced: true,
        content() {
            if (!game._Europa_xiyangqidasai) {
                game._Europa_xiyangqidasai = lib.element.player.damage;
                lib.element.player.damage = function () {
                    const next = game._Europa_xiyangqidasai.apply(this, arguments),
                        event = _status.event;
                    if (!Array.from(arguments).some((argument) => typeof argument === 'number')) {
                        next.num = (typeof event.baseDamage === 'number' ? event.baseDamage : 1) + (typeof event.extraDamage === 'number' ? event.extraDamage : 0);
                        next.original_num = next.num;
                    }
                    return next;
                };
            }
            if (typeof trigger.baseDamage != 'number') trigger.baseDamage = 1;
            trigger.baseDamage += trigger.name === 'sha' ? -1 : 1;
            game.log(trigger.card, '的伤害', trigger.name === 'sha' ? '#g-1' : '#y+1');
        },
        ai: {
            effect: {
                player(card, player, target) {
                    if (card.name == 'sha') return 'zeroplayertarget';
                },
            },
        },
    },
    Europa_xiaoju: {
        mod: {
            cardname(card, player) {
                if (_status.currentPhase === player) return;
                if (get.type2(card, false) === 'basic') return 'shan';
                if (get.type2(card, false) === 'trick') return 'wuxie';
            },
        },
        trigger: { player: 'useCard' },
        filter(event, player) {
            if (_status.currentPhase === player || player.isHealthy()) return false;
            return (event.card && event.card.name === 'shan') || event.card.name === 'wuxie';
        },
        forced: true,
        content() {
            player.recover();
        },
    },
    Europa_shousheng: {
        trigger: { global: 'phaseUseBegin' },
        filter(event, player) {
            return event.player !== player;
        },
        check(event, player) {
            if (get.attitude(player, event.player) >= 0) return false;
            return (
                event.player
                    .getCards('h', (card) => {
                        return get.tag(card, 'damage') > 0.5 && event.player.canUse(card, player, false);
                    })
                    .reduce((sum, card) => sum + get.tag(card, 'damage'), 0) < player.getHp()
            );
        },
        round: 1,
        logTarget: 'player',
        async content(event, trigger, player) {
            const target = trigger.player;
            while (
                target.hasCard((card) => {
                    return get.tag(card, 'damage') > 0.5 && target.canUse(card, player, false);
                }, 'h')
            ) {
                const result = await target
                    .chooseToUse(
                        function (card, player, event) {
                            if (get.tag(card, 'damage') <= 0.5) return false;
                            return lib.filter.filterCard.apply(this, arguments);
                        },
                        '对' + get.translation(player) + '使用手牌中所有的伤害牌'
                    )
                    .set('filterTarget', function (card, player, target) {
                        if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                        return lib.filter.targetEnabled.apply(this, arguments);
                    })
                    .set('sourcex', player)
                    .set('targetRequired', true)
                    .set('complexSelect', true)
                    .forResult();
                if (!result?.bool) break;
            }
            if (!player.hasHistory('damage', (evt) => evt.getParent(event.name, true) === event)) {
                player.popup('洗具', 'wood');
                await player.draw(2);
            } else {
                player.popup('杯具', 'fire');
                await player.loseMaxHp();
            }
        },
    },
    Europa_luquan: {
        zhuSkill: true,
        trigger: { global: 'chooseToDebateBegin' },
        filter(event, player) {
            if (!event.list.includes(player) || event.fixedResult?.some((key) => key[0] == player)) return false;
            return player.countCards('he');
        },
        async cost(event, trigger, player) {
            event.result = await player.chooseCard(get.prompt('Europa_luquan'), 'he', [1, 2], '展示至多两张牌').forResult();
        },
        async content(event, trigger, player) {
            if (!trigger.fixedResult) trigger.fixedResult = [];
            event.cards.forEach((card) => trigger.fixedResult.push([player, card]));
        },
        group: 'Europa_luquan_open',
        subSkill: {
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.Europa_setShenLuoKindom();
                },
            },
        },
    },
    Europa_tongjiao: {
        trigger: { source: 'damageSource' },
        filter(event, player) {
            if (player.hasSkill('Europa_tongjiao_used') || !event.player.isIn()) return false;
            return player.isPhaseUsing() && event.card?.name === 'sha' && event.cards?.someInD();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.addTempSkill('Europa_tongjiao_used', 'phaseUseAfter');
            await player.draw();
            const target = trigger.player;
            target.addSkill('Europa_tongjiao_judge');
            const next = target.addToExpansion(trigger.cards.filterInD(), 'gain2');
            next.gaintag.add('Europa_tongjiao_judge');
            await next;
        },
        subSkill: {
            used: { charlotte: true },
            judge: {
                charlotte: true,
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
                trigger: { player: 'judgeBefore' },
                filter(event, player) {
                    return !event.directresult && player.getExpansions('Europa_tongjiao_judge').length;
                },
                async cost(event, trigger, player) {
                    const cards = player.getExpansions('Europa_tongjiao_judge');
                    event.result =
                        cards.length > 1
                            ? await player
                                .chooseButton(['统教:选择其中一张作为判定牌', cards], true)
                                .set('ai', (button) => {
                                    return get.event().getTrigger().judge(button.link);
                                })
                                .forResult()
                            : { bool: true, links: cards };
                    if (event.result?.bool && event.result.links?.length) {
                        event.result.cards = event.result.links;
                    }
                },
                async content(event, trigger, player) {
                    trigger.directresult = event.cards[0];
                },
            },
        },
    },
    Europa_shengzhan: {
        trigger: { global: 'roundStart' },
        filter(event, player) {
            return game.hasPlayer((target) => target !== player && !target.hasSkill('Europa_shengzhan_yiduan'));
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2('Europa_shengzhan'), (card, player, target) => {
                    return target !== player && !target.hasSkill('Europa_shengzhan_yiduan');
                })
                .set('ai', (target) => {
                    return -get.attitude(get.player(), target) + 9991919810;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.addSkill('Europa_shengzhan_yiduan');
        },
        group: 'Europa_shengzhan_give',
        subSkill: {
            yiduan: {
                mark: true,
                intro: {
                    name: '异端',
                    content: '你已成为恐怖分子!',
                },
                charlotte: true,
            },
            give: {
                trigger: { global: ['die', 'damageSource'] },
                filter(event, player) {
                    if (!event.player.hasSkill('Europa_shengzhan_yiduan')) return false;
                    if (event.name === 'die') return event.player.countCards('he');
                    return event.source?.isIn() && event.source !== player && event.card?.name === 'sha' && player.countCards('he');
                },
                async cost(event, trigger, player) {
                    const list = ['Europa_shengzhan', trigger.source];
                    event.result =
                        trigger.name === 'damage'
                            ? await player
                                .chooseToGive(trigger.source, 'he')
                                .set('ai', (card) => {
                                    const player = get.player(),
                                        source = get.event().getTrigger().source;
                                    return get.attitude(player, source) > 0 ? 7 - get.value(card) + (card.name === 'sha' ? 5 : 0) : 0;
                                })
                                .set('prompt', get.prompt(...list))
                                .set('prompt2', '交给其一张牌,令此【杀】不计入次数')
                                .forResult()
                            : { bool: true };
                },
                popup: false,
                async content(event, trigger, player) {
                    if (trigger.name === 'die') {
                        await player.gain(trigger.player.getCards('he'), trigger.player, 'give', 'bySelf');
                    } else {
                        const evt = trigger.getParent('useCard');
                        if (evt?.addCount !== false) {
                            evt.addCount = false;
                            evt.player.getStat('card')[evt.card.name]--;
                            game.log(evt.card, '不计入次数');
                        }
                    }
                },
            },
        },
    },
    Europa_jiaoling: {
        zhuSkill: true,
        global: 'Europa_jiaoling_recast',
        subSkill: {
            recast: {
                mod: {
                    cardEnabled(card, player) {
                        if (!game.hasPlayer((source) => source.hasZhuSkill('Europa_jiaoling', player))) return;
                        if (card.name === 'jiu' && player.isPhaseUsing() && player.hasEuropaReligion('基督教')) return false;
                    },
                    cardSavable(card, player) {
                        if (!game.hasPlayer((source) => source.hasZhuSkill('Europa_jiaoling', player))) return;
                        if (card.name === 'jiu' && player.isPhaseUsing() && player.hasEuropaReligion('基督教')) return false;
                    },
                },
                enable: 'phaseUse',
                filter(event, player) {
                    if (!game.hasPlayer((source) => source.hasZhuSkill('Europa_jiaoling', player))) return false;
                    if (!(player.isPhaseUsing() && player.hasEuropaReligion('基督教'))) return false;
                    return player.hasCard((card) => card.name === 'jiu' && player.canRecast(card), 'h');
                },
                position: 'h',
                filterCard(card, player) {
                    return card.name === 'jiu' && player.canRecast(card);
                },
                check: () => 1,
                selectCard: [1, Infinity],
                discard: false,
                lose: false,
                delay: false,
                prompt: '请选择需要重铸的【酒】',
                content() {
                    player.recast(cards);
                },
            },
        },
    },
    //出牌阶段开始时，你可以令你本回合使用的下一张【杀】：①额外指定X个目标；②伤害基数+X；③造成伤害后摸X张牌（X为你的攻击范围且至多为5）
    Europa_xiongtu: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: { player: 'phaseUseBegin' },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseControl('多指', '增伤', '摸牌', 'cancel2')
                .set(
                    'choiceList',
                    ['可以额外指定至多X个目标', '的基础伤害加X', '造成伤害后摸X张牌'].map((str) => '令本回合使用的下一张【杀】' + str)
                )
                .set('ai', () => {
                    const player = get.player(),
                        card = new lib.element.VCard({ name: 'sha' });
                    let targets = game.filterPlayer((target) => player.canUse(card, target, true, true) && get.effect(target, card, player, player) > 0);
                    if (!targets.length) return 'cancel2';
                    targets.sort((a, b) => get.effect(b, card, player, player) - get.effect(a, card, player, player));
                    let controls = get.event().controls.slice();
                    let range = [1, 1];
                    game.checkMod(card, player, range, 'selectTarget', player);
                    range = range[1]; //QQQ
                    const ATrange = Math.min(5, Math.max(0, player.getAttackRange()));
                    const map = {
                        多指: (() => {
                            if (range === -1) return 0;
                            return targets.slice(0, ATrange + range).reduce((sum, target) => sum + get.effect(target, card, player, player), 0);
                        })(),
                        增伤: (() => {
                            return targets.slice(0, range).reduce((sum, target) => sum + get.effect(target, card, player, player) * (1 + ATrange), 0);
                        })(),
                        摸牌: (() => {
                            return targets.slice(0, range).length * get.effect(player, { name: 'draw' }, player, player) * ATrange;
                        })(),
                        cancel2: 0,
                    };
                    return controls.sort((a, b) => map[b] - map[a])[0];
                })
                .set('prompt', get.prompt('Europa_xiongtu') + '(X为你的攻击范围且至多为5)')
                .forResult();
            event.result.bool = event.result.control !== 'cancel2';
            event.result.cost_data = event.result.control;
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_xiongtu_effect');
            player.markAuto('Europa_xiongtu_effect', [event.cost_data]);
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: { player: 'useCard' },
                filter(event, player) {
                    return event.card && event.card.name === 'sha';
                },
                forced: true,
                async content(event, trigger, player) {
                    const storage = player.getStorage(event.name),
                        range = Math.min(5, Math.max(0, player.getAttackRange()));
                    player.removeSkill(event.name);
                    if (range === 0) return event.finish();
                    for (var item of storage) {
                        switch (item) {
                            case '多指':
                                if (
                                    game.hasPlayer((target) => {
                                        return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                                    })
                                ) {
                                    const result = await player
                                        .chooseTarget(
                                            '是否为' + get.translation(trigger.card) + '额外指定至多' + range + '个目标？',
                                            (card, player, target) => {
                                                const evt = get.event().getTrigger();
                                                return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target) && lib.filter.targetInRange(evt.card, player, target);
                                            },
                                            [1, range]
                                        )
                                        .set('ai', (target) => {
                                            const player = get.player(),
                                                evt = get.event().getTrigger();
                                            return get.effect(target, evt.card, player, player);
                                        })
                                        .forResult();
                                    if (result?.bool && result.targets?.length) {
                                        const targets = result.targets.sortBySeat();
                                        player.line(targets);
                                        trigger.targets.addArray(targets);
                                        game.log(trigger.card, '增加了目标', targets);
                                    }
                                }
                                break;
                            case '增伤':
                                game.log(trigger.card, '造成的伤害', '#y+' + range);
                                trigger.baseDamage += range;
                                break;
                            case '摸牌':
                                game.log(trigger.card, '造成伤害时', player, '#y摸' + range + '张牌');
                                player
                                    .when({ source: 'damageSource' })
                                    .filter((evt) => evt.card === trigger.card)
                                    .then(() => player.draw(range))
                                    .vars({ range: range });
                                break;
                        }
                    }
                },
                intro: {
                    markcount: () => 0,
                    content(storage = []) {
                        return (
                            '本阶段使用的下一张【杀】:<br>' +
                            [
                                ['多指', '可以额外指定至多X个目标'],
                                ['增伤', '的基础伤害加X'],
                                ['摸牌', '造成伤害后摸X张牌'],
                            ]
                                .filter((str) => storage.includes(str[0]))
                                .map((str) => '<li>' + str[1])
                                .join('<br>') +
                            '<br>(X为你的攻击范围且至多为5)'
                        );
                    },
                },
            },
        },
    },
    Europa_lifa: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: { global: 'roundStart' },
        forced: true,
        async content(event, trigger, player) {
            if (player.getStorage('Europa_lifa_effect').length) {
                const storage = player.getStorage('Europa_lifa_effect');
                player.removeSkill('Europa_lifa_effect');
                if (
                    storage.some((eff) => {
                        return lib.skill.Europa_lifa.getList.find((list) => list[0] === eff)[2](player);
                    })
                ) {
                    player.popup('洗具', 'wood');
                    game.log(player, '#g完成了', '立法内容');
                    await player.draw(2);
                    await player.gainMaxHp();
                } else {
                    player.popup('杯具', 'fire');
                    game.log(player, '#y未完成', '立法内容');
                    await player.loseHp();
                }
            }
            const result = await player
                .chooseButton(['###' + get.prompt(event.name) + '###<div class="text center">选择一个目标,完的成有奖励,完不成有惩罚</div>', [lib.skill.Europa_lifa.getList.map((list) => list.slice(0, 2)), 'textbutton']])
                .set('ai', () => 1 + Math.random())
                .forResult();
            if (result?.bool && result.links?.length) {
                const choices = result.links;
                game.log(player, '选择了', '#y' + choices.slice().join('、'));
                player.addSkill('Europa_lifa_effect');
                player.markAuto('Europa_lifa_effect', choices);
            }
        },
        getList: [
            [
                '得牌',
                '本轮至少得到5张牌',
                (player, num = 1) => {
                    return player.getRoundHistory('gain', () => true, num).reduce((sum, evt) => sum + evt.cards.length, 0) >= 5;
                },
            ],

            [
                '伤害',
                '本轮至少造成3点伤害',
                (player, num = 1) => {
                    return player.getRoundHistory('sourceDamage', () => true, num).reduce((sum, evt) => sum + evt.num, 0) >= 3;
                },
            ],

            [
                '用牌',
                '本轮至少使用6张牌',
                (player, num = 1) => {
                    return player.getRoundHistory('useCard', () => true, num).length >= 5;
                },
            ],
        ],

        subSkill: {
            effect: {
                charlotte: true,
                intro: {
                    markcount: () => 0,
                    content(storage = [], player) {
                        return (
                            '立法条件:' +
                            lib.skill.Europa_lifa.getList
                                .filter((str) => storage.includes(str[0]))
                                .map((str) => {
                                    return '<li>' + str[1] + '(' + (str[2](player, 0) ? '已' : '未') + '完成)';
                                })
                                .join('<br>')
                        );
                    },
                },
            },
        },
    },
    Europa_dusheng: {
        audio: 'ext:欧陆风云/audio/skill:2',
        zhuSkill: true,
        enable: 'phaseUse',
        filter(event, player) {
            if (!player.hasCard((card) => lib.filter.cardDiscardable(card, player))) return false;
            return game.hasPlayer((target) => {
                return (
                    target.hasEuropaReligion('基督教') &&
                    target.countCards('h') &&
                    game.hasPlayer((current) => {
                        if (!player.inRange(current)) return false;
                        const card = new lib.element.VCard({ name: 'guohe' });
                        return player.canUse(card, current, false) && target.canUse(card, current, false);
                    })
                );
            });
        },
        filterTarget(cardx, player, target) {
            const card = new lib.element.VCard({ name: 'guohe' });
            if (!ui.selected.targets.length) {
                return (
                    target.hasEuropaReligion('基督教') &&
                    target.countCards('h') &&
                    game.hasPlayer((current) => {
                        if (!player.inRange(current)) return false;
                        return player.canUse(card, current, false) && target.canUse(card, current, false);
                    })
                );
            }
            if (!player.inRange(target)) return false;
            return player.canUse(card, target, false) && ui.selected.targets[0].canUse(card, target, false);
        },
        complexTarget: true,
        targetprompt: ['帮凶', '受害者'],
        selectTarget: 2,
        multitarget: true,
        filterCard: lib.filter.cardDiscardable,
        check(card) {
            return 7 - get.value(card);
        },
        usable: 1,
        async content(event, trigger, player) {
            const [source, target] = event.targets;
            await source.chooseToDiscard(true);
            const card = new lib.element.VCard({ name: 'guohe' });
            for (const current of [player, source]) {
                if (current.canUse(card, target, false)) {
                    await current.useCard(card, target, false).set('noai', current !== player);
                }
            }
        },
        ai: {
            order: 7,
            result: {
                player(player, target) {
                    const card = new lib.element.VCard({ name: 'guohe' });
                    if (!ui.selected.targets.length) {
                        const eff = get.effect(target, { name: 'guohe_copy2' }, target, player);
                        const targets = game
                            .filterPlayer((current) => {
                                if (!player.inRange(current)) return false;
                                return player.canUse(card, current, false) && target.canUse(card, current, false);
                            })
                            .sort((a, b) => {
                                return get.effect(b, card, player, player) + (b.countCards('hej') > 1 ? get.effect(b, card, target, player) : 0) - get.effect(a, card, player, player) - (a.countCards('hej') > 1 ? get.effect(a, card, target, player) : 0);
                            });
                        return eff + get.effect(targets[0], card, player, player) + (targets[0].countCards('hej') > 1 ? get.effect(targets[0], card, target, player) : 0);
                    }
                    return get.effect(target, card, player, player) + (target.countCards('hej') > 1 ? get.effect(target, card, ui.selected.targets[0], player) : 0);
                },
            },
        },
    },
    _Europa_sulaimanChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_sulaimanChooseAudio) return false;
            const list = ['Europa_sulaimanyishi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_sulaimanChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/苏莱曼bgm.mp3`;
        },
    },
    Europa_qiaoyan: {
        trigger: { global: 'phaseBegin' },
        filter(event, player) {
            return player.countCards('he') > 1 && event.player !== player;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt2('Europa_qiaoyan'), 'he', 2)
                .set('ai', (card) => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    return get.recoverEffect(player, player, player) + get.effect(target, { name: 'shunshou' }, player, player) > 0 ? 7 - get.value(card) : 0;
                })
                .forResult();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const target = trigger.player;
            const cards = event.cards,
                videoId = lib.status.videoId++;
            game.broadcastAll(
                (player, id, cards) => {
                    const str = player == game.me && !_status.auto ? '巧言:获得其中一张牌' : '巧言';
                    const dialog = ui.create.dialog(str, cards);
                    dialog.videoId = id;
                },
                target,
                videoId,
                cards
            );
            let time = get.utc(),
                gain = [];
            game.addVideo('showCards', player, ['巧言', get.cardsInfo(cards)]);
            time = 1000 - (get.utc() - time);
            if (cards.some((card) => lib.filter.canBeGained(card, target, player))) {
                const resultx = await target
                    .chooseButton(true)
                    .set('dialog', videoId)
                    .set('filterButton', (button) => {
                        const player = get.player(),
                            source = get.event().parent.player;
                        return lib.filter.canBeGained(button.link, player, source);
                    })
                    .set('ai', (button) => {
                        return get.value(button.link);
                    })
                    .forResult();
                if (resultx?.bool && resultx.links?.length) {
                    gain.addArray(resultx.links);
                }
            }
            game.broadcastAll('closeDialog', videoId);
            if (gain.length) await target.gain(gain, player, 'give');
            const result = await target
                .chooseControl()
                .set('choiceList', ['令' + get.translation(player) + '回复1点体力并摸' + get.cnNumber(1 + player.isHealthy()) + '张牌', '令' + get.translation(player) + '获得你区域里至多两张牌'])
                .set('ai', () => {
                    const player = get.player(),
                        source = get.event().parent.player;
                    const eff1 = get.recoverEffect(source, source, player) + get.effect(source, { name: 'draw' }, source, player) * (1 + source.isHealthy());
                    const eff2 = get.effect(player, { name: 'shunshou' }, source, player) * Math.min(player.countGainableCards(source, 'hej'), 2);
                    return eff1 > eff2 ? 0 : 1;
                })
                .forResult();
            if (result.index === 0) {
                const num = 1 + player.isHealthy();
                await player.recover();
                await player.draw(num);
            } else {
                await player.gainPlayerCard(target, 'hej', [1, 2], true);
            }
        },
    },
    Europa_shoupan: {
        getCards() {
            return game
                .getGlobalHistory('everything', (evt) => {
                    return (evt.name === 'lose' && evt.position == ui.discardPile) || evt.name == 'cardsDiscard';
                })
                .reduce((list, evt) => list.addArray(evt.cards), [])
                .filterInD('d');
        },
        trigger: { global: 'phaseEnd' },
        filter(event, player) {
            return lib.skill.Europa_shoupan.getCards().length;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt('Europa_shoupan'), '令一名角色获得' + get.translation(lib.skill.Europa_shoupan.getCards()) + '中的一张')
                .set('ai', (target) => {
                    const player = get.player();
                    return get.effect(target, { name: 'draw' }, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const [target] = event.targets,
                cards = lib.skill.Europa_shoupan.getCards();
            const result = await player
                .chooseButton(['令' + get.translation(target) + '获得其中一张牌', cards], true)
                .set('ai', (button) => {
                    const player = get.player(),
                        [target] = get.event().parent.targets;
                    return get.sgn(get.sgn(get.attitude(player, target)) - 0.5) * get.value(button.link, target);
                })
                .forResult();
            if (result?.bool && result.links?.length) await target.gain(result.links, 'gain2');
        },
        group: 'Europa_shoupan_guohe',
        subSkill: {
            guohe: {
                trigger: { global: 'phaseDiscardBegin' },
                filter(event, player) {
                    const source = event.player;
                    if (source === player || !source.countCards('he')) return false;
                    return source.getHp() < player.getHp() || source.countCards('h') < player.countCards('h');
                },
                forced: true,
                content() {
                    const source = trigger.player,
                        list = ['Europa_shoupan', source];
                    player.discardPlayerCard(get.prompt(...list), source, 'he');
                },
            },
        },
    },
    Europa_junji: {
        trigger: {
            player: 'gainAfter',
            global: 'loseAsyncAfter',
        },
        filter(event, player) {
            if (!event.getg?.(player).length) return false;
            const history = game
                .getGlobalHistory(
                    'everything',
                    (evt) => {
                        return evt !== event && ((evt.name === 'gain' && evt.player === player) || evt.name === 'loseAsync') && evt.getg?.(player)?.length;
                    },
                    event
                )
                .reduce((sum, evt) => {
                    return sum + evt.getg(player).length;
                }, 0);
            return history <= 13 && history + event.getg(player).length > 13;
        },
        forced: true,
        async content(event, trigger, player) {
            await player.loseHp();
            if (!trigger._Europa_junji) trigger._Europa_junji = {};
            trigger._Europa_junji[player.playerid] = true;
            player.addTempSkill('Europa_junji_effect', 'roundStart');
        },
        subSkill: {
            effect: {
                charlotte: true,
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                skillBlocker(skill, player) {
                    if (skill === 'Europa_junji') return false;
                    const info = get.info(skill);
                    return !info?.charlotte && !info?.persevereSkill;
                },
                mark: true,
                intro: {
                    content(storage, player) {
                        return [
                            '当你获得牌后,弃置之',
                            (() => {
                                const list = player.getSkills(null, false, false).filter((i) => lib.skill.Europa_junji_effect.skillBlocker(i, player));
                                if (list.length) return '失效技能:' + get.translation(list);
                                return '暂无失效技能';
                            })(),
                        ]
                            .map((str) => '<li>' + str)
                            .join('<br>');
                    },
                },
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                filter(event, player) {
                    if (event._Europa_junji?.[player.playerid]) return false;
                    return event.getg?.(player).some((card) => get.owner(card) === player && get.position(card) === 'h' && lib.filter.cardDiscardable(card, player));
                },
                forced: true,
                content() {
                    player.discard(trigger.getg(player).filter((card) => get.owner(card) === player && get.position(card) === 'h' && lib.filter.cardDiscardable(card, player)));
                },
            },
        },
    },
    Europa_zhengyin: {
        enable: 'phaseUse',
        filterCard: true,
        viewAs: { name: 'Europa_wangshilianyin' },
        position: 'hs',
        check: (card) => 7 - get.value(card),
        precontent() {
            player.addTempSkill('Europa_zhengyin_used', 'phaseUseAfter');
        },
        prompt: '将一张手牌当作【王室联姻】使用',
        trigger: { global: 'die' },
        filter(event, player) {
            if (event.name == 'chooseToUse') return player.countCards('he') && !player.hasSkill('Europa_zhengyin_used');
            const target = event.player;
            if (!(target.maxHp > 0 || target.countCards('he'))) return false;
            return player.getAllHistory('useCard', (evt) => evt.card.name === 'Europa_wangshilianyin' && evt.targets?.includes(target)).length;
        },
        forced: true,
        logTarget: 'player',
        content() {
            const target = trigger.player;
            if (target.maxHp > 0) player.gainMaxHp(target.maxHp);
            if (target.countCards('he')) player.gain(target.getCards('he'), target, 'giveAuto');
        },
        subSkill: {
            used: { charlotte: true },
        },
    },
    Europa_qiangqi: {
        trigger: { player: 'useCardToPlayered' },
        filter(event, player) {
            if (!player.getVEquips(1).length) return false;
            return player.isPhaseUsing() && event.card.name === 'sha';
        },
        logTarget: 'target',
        prompt2: (event) => '对' + get.translation(event.target) + '造成1点伤害',
        check(event, player) {
            return get.damageEffect(event.target, player, player) > 0;
        },
        content() {
            trigger.target.damage();
        },
        group: 'Europa_qiangqi_defend',
        subSkill: {
            defend: {
                trigger: { player: 'damageBegin4' },
                filter(event, player) {
                    return player.getVEquips(2).length && player.hasCard((card) => _status.connectMode || lib.filter.cardDiscardable(card, player), 'he');
                },
                usable: 1,
                popup: false,
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(get.prompt('Europa_qiangqi'), '弃置一张手牌,令此伤害-1')
                        .set('ai', (card) => {
                            return get.damageEffect(player, get.event().getTrigger().source, player) > 0 ? 0 : 7 - get.value(card);
                        })
                        .forResult();
                },
                content() {
                    trigger.num--;
                },
            },
        },
    },
    Europa_jiaodou: {
        limited: true,
        enable: 'phaseUse',
        filter(event, player) {
            return player.maxHp >= 6;
        },
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.target;
            player.awakenSkill(event.name);
            while (
                !game.getGlobalHistory('everything', (evt) => {
                    return evt.name === 'dying' && evt.getParent(event.name) === event;
                }).length
            ) {
                player.line(target);
                await player.loseMaxHp();
                await target.damage();
            }
        },
        ai: {
            order: 1,
            result: {
                player(player, target) {
                    if (player.hasUnknown() || get.attitude(player, target) >= 0) return 0;
                    return get.damageEffect(target, player, player) * (player.maxHp - target.getHp());
                },
            },
        },
    },
    Europa_tongguo: {
        zhuSkill: true,
        trigger: { player: 'useCard' },
        filter(event, player) {
            if (!player.isPhaseUsing()) return false;
            return (
                player
                    .getHistory('useCard', (evt) => {
                        return evt.getParent('phaseUse') === event.getParent('phaseUse');
                    })
                    .indexOf(event) === 0 && player.getStorage('Europa_shenluodiguo_king').some((i) => i.isIn())
            );
        },
        forced: true,
        logTarget(event, player) {
            return player
                .getStorage('Europa_shenluodiguo_king')
                .filter((i) => i.isIn())
                .sortBySeat();
        },
        content() {
            trigger.directHit.addArray(event.targets);
            game.log(event.targets, '不可响应', trigger.card);
        },
        ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
                if (!arg || !arg.card || !arg.target) return false;
                if (!player.isPhaseUsing()) return false;
                const event = _status.event.getParent('phaseUse');
                if (player.hasHistory('useCard', (evt) => evt.getParent('phaseUse') === event)) return false;
                return player.getStorage('Europa_shenluodiguo_king').includes(arg.target);
            },
        },
        group: 'Europa_tongguo_open',
        subSkill: {
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.Europa_setShenLuoKindom();
                },
            },
        },
    },
    colonialExploration: {
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        charlotte: true,
        filter(event, player) {
            if (player.hasSkillTag('nocolonialExploration')) return false;
            if (!player.hasSkillTag('colonialExploration')) return false;
            if (player.hasSkill('colonialExploration_sailing')) return false;
            return player.countCards('h');
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard('h', get.prompt('colonialExploration'), `你可以将任意张手牌置于武将牌上启动探险,称为<财>`)
                .set('ai', (card) => {
                    return 5 - get.value(card);
                })
                .set('selectCard', () => {
                    const player = get.player(),
                        min = player.hasSkillTag('nocolonialExplorationCost') ? 0 : 1,
                        max = player.hasSkill('Europa_xiayang') ? 5 : 3;
                    return [min, max];
                })
                .forResult();
        },
        async content(event, trigger, player) {
            if (event.cards?.length) await player.addToExpansion(event.cards, player, 'giveAuto').set('gaintag', ['colonialExploration']);
            player.markSkill('colonialExploration');
            const { exploration, num } = await player.chooseColonialExploration().forResult();
            player.setStorage('colonialExploration_sailing', {
                name: exploration,
                num: num,
                history: [],
            });
            player.addSkill('colonialExploration_sailing');
            player.addTip('colonialExploration_sailing', `航行${get.translation(player.storage.colonialExploration_sailing.name)}` + player.storage.colonialExploration_sailing.num);
        },
        marktext: '财',
        intro: {
            content: 'expansion',
            markcount: 'expansion',
        },
        onremove(player, skill) {
            const cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
        },
        init() {
            const list = lib.Europa_ColonialExplorationList.slice(0);
            game.broadcastAll(function (list) {
                for (const name of list) {
                    const namex = name;
                    if (!lib.card[namex]) {
                        lib.card[namex] = {
                            noEffect: true,
                        };
                    }
                }
            }, list);
        },
        subSkill: {
            sailing: {
                trigger: {
                    global: 'phaseBegin',
                },
                forced: true,
                charlotte: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete player.storage[skill];
                },
                async content(event, trigger, player) {
                    player.explorationContingency();
                    player.addTip('colonialExploration_sailing', `航行${get.translation(player.storage.colonialExploration_sailing.name)}` + player.storage.colonialExploration_sailing.num);
                },
                mark: true,
                marktext: '航行',
                intro: {
                    markcount(storage, player) {
                        return get.translation(storage?.name);
                    },
                    content(storage, player) {
                        var str = `剩余回合数:${storage?.num}<br>`;
                        if (storage.history.length) {
                            str += `本次远航行程:${storage.history.length}<br>`;
                            for (var i of storage.history) {
                                str += `·${lib.Europa_ExplorationEvent[i - 2]}<br>`;
                            }
                        }
                        return str;
                    },
                },
            },
        },
    },
    Europa_mongolInvasion: {
        filterx(event, player) {
            return get.mode() == 'identity';
        },
        charlotte: true,
        subSkill: {
            init: {
                trigger: {
                    player: ['phaseZhunbeiBefore', 'phaseJudgeBefore', 'phaseDrawBefore', 'phaseUseBefore', 'phaseDiscardBefore', 'phaseJieshuBefore'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return game.roundNumber <= 3;
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                mod: {
                    targetEnabled(card, player, target, now) {
                        if (get.tag(card, 'damage')) return false;
                    },
                },
            },
            change: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (game.zhu == player || player.identity == 'zhu') return false;
                    return game.roundNumber >= 3;
                },
                async content(event, trigger, player) {
                    player.recoverTo(player.maxHp);
                    if (get.mode() == 'identity') {
                        player.identity = 'Europamongol';
                        player.setIdentity('Europamongol');
                        player.identityShown = true;
                        player.node.identity.innerText = '汗';
                        game.Europamongol_zhu = player;
                        const rawAtt = get.rawAttitude;
                        get.rawAttitude = function (from, to) {
                            if (!from || !to) return 0;
                            if (from.identity == 'Europamongol') {
                                if (to.identity == 'Europamongol') return 10;
                                return -8;
                            }
                            if (to.identity == 'Europamongol') {
                                switch (from.identity) {
                                    case 'zhu':
                                    case 'hong':
                                        return -6;
                                    case 'fan':
                                        return -6;
                                    case 'nei':
                                        return -6;
                                    default:
                                        return -10;
                                }
                            }
                            return rawAtt(from, to);
                        }; //QQQ
                    }
                    player.removeSkill('Europa_mongolInvasion_init');
                    player.removeSkill('Europa_mongolInvasion_change');
                    player.addSkill('Europa_mongolInvasion_invasion');
                    game.addGlobalSkill('Europa_mongolInvasion_global');
                },
            },
            global: {
                trigger: {
                    global: 'dieAfter',
                },
                forced: true,
                charlotte: true,
                forceDie: true,
                popup: false,
                filter(event, player) {
                    return get.info('Europa_mongolInvasion').filterx(event, player);
                },
                async content(event, trigger, player) {
                    switch (trigger.player.identity) {
                        case 'zhu': {
                            game.showIdentity();
                            if (
                                !game.hasPlayer(function (target) {
                                    return trigger.player != target && target.identity != 'Europamongol';
                                })
                            ) {
                                game.over(game.me.identity == 'Europamongol');
                                game.log('游戏结束,', '#蒙古汗国', '阵营胜利');
                            } else {
                                var fan = game.filterPlayer((i) => i.identity == 'fan');
                                game.over(game.me.identity == 'fan');
                                game.log('游戏结束,反贼', fan, '获胜.');
                            }
                        }
                        case 'Europamongol': {
                            if (game.countPlayer() > 1) return;
                            if (
                                !game.hasPlayer(function (target) {
                                    return trigger.player != target && target.identity == 'Europamongol';
                                })
                            ) {
                                game.over(game.filterPlayer()[0].getFriends().includes(game.me));
                            }
                        }
                        default:
                            {
                                if (game.zhu && game.zhu.isAlive()) {
                                    if (
                                        !game.hasPlayer(function (target) {
                                            return ['fan', 'nei', 'Europamongol'].includes(target.identity);
                                        })
                                    ) {
                                        game.over(game.filterPlayer()[0].getFriends().includes(game.me));
                                    }
                                }
                            }
                            break;
                    }
                },
            },
            invasion: {
                trigger: {
                    player: ['phaseBegin', 'phaseEnd'],
                },
                popup: false,
                filter(event, player) {
                    return get.info('Europa_mongolInvasion').filterx(event, player);
                },
                async cost(event, trigger, player) {
                    const choiceList = [`怯薛横扫:你对所有其他角色各造成1点伤害`, `无休止掠夺:你获得所有其他角色的各一张牌`, `建立汗国:你于本回合内获得以下效果:当一名角色进入濒死状态时,你可以令其失去所有技能,复原武将牌,将体力上限和体力值变为3,将手牌弃至或摸至三张并将身份变更为<蒙古汗国>(与万汗之汗同一阵营)`, `呼麦高歌:你与所有<蒙古汗国>角色各摸一张牌,你本回合使用【杀】没有次数限制`, `焚城屠杀:你弃置两张牌,对一名其他角色造成3点伤害并弃置其区域内所有牌`, `游牧后勤:你摸${8 - game.countPlayer()}张牌(X为8-全场存活角色数)`].map((info, item) => [item + 1, info]);
                    const { bool, links } = await player
                        .chooseButton(['蒙古入侵', [choiceList, 'textbutton']])
                        .set('filterButton', (button) => {
                            if (player.hasSkillTag(`Europa_mongolInvasion_no${button.link}`)) return false;
                            switch (button.link) {
                                case 2:
                                    {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.countGainableCards(player, 'he');
                                        });
                                    }
                                    break;
                                case 5:
                                    {
                                        return (
                                            game.countPlayer() > 1 &&
                                            player.countCards('h', function (card) {
                                                return lib.filter.cardDiscardable(card, player, 'Europa_mongolInvasion');
                                            }) > 1
                                        );
                                    }
                                    break;
                                default:
                                    return true;
                            }
                        })
                        .set('ai', (button) => {
                            switch (button.link) {
                                case 1:
                                    {
                                        return game
                                            .filterPlayer((target) => {
                                                return target != player;
                                            })
                                            .reduce((p, c) => p + get.damageEffect(c, player, player), 0);
                                    }
                                    break;
                                case 2:
                                    {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.countGainableCards(player, 'he');
                                        });
                                    }
                                    break;
                                case 3: {
                                    if (event.triggername == 'phaseEnd') return 0;
                                    if (
                                        game.hasPlayer(function (current) {
                                            return current != player && current.getHp() <= 1;
                                        })
                                    )
                                        return 1 + Math.random();
                                }
                                case 4:
                                    {
                                        if (event.triggername == 'phaseEnd') return 0;
                                    }
                                    break;
                                case 5: {
                                    return (
                                        game.countPlayer() > 1 &&
                                        player.countCards('h', function (card) {
                                            return lib.filter.cardDiscardable(card, player, 'Europa_mongolInvasion');
                                        }) > 1
                                    );
                                }
                                case 8:
                                    {
                                        return (8 - game.countPlayer()) / 2;
                                    }
                                    break;
                            }
                            return 1 + Math.random();
                        })
                        .forResult();
                    if (bool) event.result = { bool, cost_data: { links } };
                },
                async content(event, trigger, player) {
                    event.invasionChoice = event.cost_data.links[0];
                    switch (event.cost_data.links[0]) {
                        case 1:
                            {
                                const targets = game.filterPlayer((target) => {
                                    return target != player;
                                });
                                while (targets.length) {
                                    const target = targets.shift();
                                    if (target && target.isIn()) await target.damage();
                                }
                            }
                            break;
                        case 2:
                            {
                                const targets = game.filterPlayer((target) => {
                                    return target != player;
                                });
                                while (targets.length) {
                                    const target = targets.shift();
                                    if (target.countDiscardableCards(player, 'he')) await player.gainPlayerCard(target, 'he', true);
                                }
                            }
                            break;
                        case 3:
                            {
                                player.addTempSkill('Europa_mongolInvasion_no3');
                            }
                            break;
                        case 4:
                            {
                                const targets = game.filterPlayer((target) => {
                                    return target.identity == 'Europamongol';
                                });
                                await game.asyncDraw(targets);
                                player.addTempSkill('Europa_mongolInvasion_no4');
                            }
                            break;
                        case 5:
                            {
                                const { bool, cards, targets } = await player
                                    .chooseCardTarget({
                                        prompt: '弃置两张牌,对一名其他角色造成三点伤害并弃置其区域内所有牌',
                                        filterCard: true,
                                        forced: true,
                                        position: 'he',
                                        selectCard: 2,
                                        filterTarget: true,
                                        ai1(card) {
                                            if (ui.selected.cards.length) return 0 - get.value(card);
                                            return 1 / Math.max(1, get.value(card));
                                        },
                                        ai2(target) {
                                            return get.damageEffect(target, player, player) * target.countCards('he');
                                        },
                                    })
                                    .forResult();
                                if (bool) {
                                    player.line(targets);
                                    await player.discard(cards);
                                    await targets[0].damage(3);
                                    await targets[0].discard(targets[0].getCards('hej'));
                                }
                            }
                            break;
                        case 6:
                            {
                                player.draw(8 - game.countPlayer());
                            }
                            break;
                    }
                },
            },
            no1: { charlotte: true },
            no2: { charlotte: true },
            no3: {
                trigger: {
                    global: 'dying',
                },
                charlotte: true,
                filter(event, player) {
                    if (game.zhu == event.player || event.player.identity == 'zhu') return false;
                    return get.info('Europa_mongolInvasion').filterx(event, player);
                },
                check(event, player) {
                    return event.player != player && game.zhu != event.player;
                },
                prompt2(event, player) {
                    return `你可以令${get.translation(event.player)}失去所有技能,复原武将牌,将体力上限和体力值变为3,将手牌弃至或摸至三张并将身份变更为<蒙古汗国>(与万汗之汗同一阵营).`;
                },
                async content(event, trigger, player) {
                    trigger.player.clearSkills(true);
                    trigger.player.turnOver(false);
                    trigger.player.link(false);
                    if (get.mode() == 'identity') {
                        game.broadcastAll(function (player) {
                            player.identity = 'Europamongol';
                            player.setIdentity('Europamongol');
                            player.identityShown = true;
                            player.node.identity.innerText = '古';
                        }, trigger.player);
                    }
                    if (trigger.player.maxHp > 3) await trigger.player.loseMaxHp(trigger.player.maxHp - 3);
                    else trigger.player.gainMaxHp(3 - trigger.player.maxHp);
                    await trigger.player.changeHp(3 - trigger.player.getHp(true));
                    var num = trigger.player.countCards('h') - 3;
                    if (num > 0) await trigger.player.chooseToDiscard('h', num, true);
                    else if (num < 0) await trigger.player.draw(Math.abs(num));
                },
            },
            no4: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return Infinity;
                    },
                },
            },
        },
    },
    Europa_viceroy: {
        charlotte: true,
        Europa_Mark(player, num, type, mark) {
            var next = game.createEvent('Europa_changeViceroy');
            next.player = player;
            next.num = num || 1;
            next.type = type || 'add';
            next.markname = mark;
            next.setContent(async (event, trigger, player) => {
                player[`${event.type}Mark`](event.markname, event.num);
                if (event.markname == 'Europa_viceroy_slave') {
                    var next = game.createEvent('addEuropaViceroyMark');
                    next.player = player;
                    next.type = `Europa_viceroy_prison`;
                    next.num = event.num;
                    next.setContent(function () {
                        player.addMark(event.type, event.num, false);
                        player.storage.Europa_viceroy[0] += event.num;
                    });
                }
            });
        },
        init(player, skill) {
            game.broadcastAll(function () {
                if (!lib.card.Europa_viceroy_slave) {
                    lib.card.Europa_viceroy_slave = {
                        fullskin: true,
                    };
                }
            });
            get.info('Europa_viceroy').Europa_Mark(player, 5, 'add', 'Europa_viceroy_slave');
            get.info('Europa_viceroy').Europa_Mark(player, 5, 'add', 'Europa_viceroy_militia');
            player.setStorage(skill, [player.countMark('Europa_viceroy_slave'), 0, 0, 0]);
        },
        mark: true,
        intro: {
            markcount(storage, player) {
                return `${player.countMark('Europa_viceroy_slave')}/${player.countMark('Europa_viceroy_militia')}`;
            },
            content(storage, player) {
                var str = `当前<奴隶>数:${player.countMark('Europa_viceroy_slave')}<br>当前<民兵>数:${player.countMark('Europa_viceroy_militia')}<br>`,
                    des = ['监狱', '种植园', '武备库', '工场'];
                for (var i = 0; i < 4; i++) {
                    str += `${des[i] + storage[i]}<br>`;
                }
                return str;
            },
        },
        group: ['Europa_viceroy_zhunbei', 'Europa_viceroy_draw', 'Europa_viceroy_die', 'Europa_viceroy_zhimindijingji', 'Europa_viceroy_tongzhicelue', 'Europa_viceroy_plantation', 'Europa_viceroy_arsenal', 'Europa_viceroy_workplace', 'Europa_viceroy_prison'],
        subSkill: {
            zhunbei: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.hasSkill('Europa_viceroy');
                },
                async content(event, trigger, player) {
                    get.info('Europa_viceroy').Europa_Mark(player, 2, 'add', 'Europa_viceroy_slave');
                    get.info('Europa_viceroy').Europa_Mark(player, 1, 'add', 'Europa_viceroy_militia');
                },
            },
            draw: {
                trigger: {
                    player: 'phaseDrawBeginEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.countMark('Europa_viceroy_slave') > player.countMark('Europa_viceroy_militia');
                },
                async content(event, trigger, player) {
                    player.gain(game.createCard('Europa_qiyi'), 'gain2');
                },
            },
            die: {
                trigger: {
                    player: 'Europa_changeViceroyAfter',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    if (player.hasSkillTag('keepEuropaSlave')) return false;
                    if (!player.countMark('Europa_viceroy_militia')) return false;
                    return player.countMark('Europa_viceroy_slave') >= player.countMark('Europa_viceroy_militia') * 2;
                },
                async content(event, trigger, player) {
                    player.die();
                },
            },
            slave: {},
            militia: {},
            zhimindijingji: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.hasSkill('Europa_viceroy');
                },
                async content(event, trigger, player) {
                    var storage = player.storage.Europa_viceroy,
                        list1 = [new Array(storage[0]).fill(0).map((info) => ['', '', 'Europa_viceroy_slave']), 'vcard'],
                        list2 = [new Array(storage[1]).fill(0).map((info) => ['', '', 'Europa_viceroy_slave']), 'vcard'],
                        list3 = [new Array(storage[2]).fill(0).map((info) => ['', '', 'Europa_viceroy_slave']), 'vcard'],
                        list4 = [new Array(storage[3]).fill(0).map((info) => ['', '', 'Europa_viceroy_slave']), 'vcard'];
                    var list = [
                        ['监狱(未被分配的奴隶自动放置,每放置8个,你获得一张【起义】)', list1],
                        ['种植园(每放置5个,你的摸牌阶段额外摸一张牌)', list2],
                        ['武备库(每放置5个,你的出牌阶段使用【杀】的次数限制+1且攻击范围+1)', list3],
                        ['工场(每放置5个,你的手牌上限+1)', list4],
                    ];

                    var next = player.chooseToMove('殖民地经济:请分配你的<奴隶>', true);
                    next.set('list', list);
                    next.set('processAI', function (list) {
                        let cards = list[0][1][0].slice(0),
                            player = get.player();
                        let plantation = [],
                            arsenal = [],
                            workplace = [],
                            prison = [];
                        let plantation_num = Math.floor(Math.random() * cards.length),
                            arsenal_num = Math.floor(Math.random() * (cards.length - plantation_num)),
                            workplace_num = cards.length - plantation_num - arsenal_num;
                        if (player.hasSha()) {
                            const plantation_ = cards.randomGets(plantation_num);
                            cards.removeArray(plantation_);
                            plantation.addArray(plantation_);
                        }
                        if (player.needsToDiscard()) {
                            const arsenal_ = cards.randomGets(arsenal_num);
                            cards.removeArray(arsenal_);
                            plantation.addArray(arsenal_);
                        }
                        workplace.addArray(cards);
                        cards = [];
                        return [cards, plantation, arsenal, workplace];
                    });
                    const result = await next.forResult();
                    if (result.bool) {
                        var moved = result.moved,
                            list = ['prison', 'plantation', 'arsenal', 'workplace'];
                        for (var i = 0; i < 4; i++) {
                            player.storage.Europa_viceroy[i] = moved[i].length;
                            var next = game.createEvent('addEuropaViceroyMark');
                            next.player = player;
                            next.type = `Europa_viceroy_${list[i]}`;
                            next.num = moved[i].length;
                            next.setContent(function () {
                                player.addMark(event.type, event.num, false);
                            });
                            await next;
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
            tongzhicelue: {
                trigger: {
                    player: 'phaseUseEnd',
                },
                popup: false,
                charlotte: true,
                async cost(event, trigger, player) {
                    const choiceList = [`向本土求援:弃置三张手牌,获得5个<民兵>.`, `抓更多奴隶:摸一张牌,获得5个<奴隶>.`, `更多妥协:弃两张牌,下个回合不会获得【起义】.`, `大屠杀:你弃置3个<民兵>,弃置<监狱>中所有的<奴隶>标记,若如此做,此后你每次获得【起义】时额外获得一张.`, `承诺和平:失去2点体力,弃置手中所有【起义】且你不会因此失去体力.`, `整合:(当你的民兵数量为奴隶的两倍时可选),本局游戏内,你不会因为奴隶过多而死亡.`, `焚烧树林:(印度支那殖民地可选)弃置一张火【杀】或【火攻】,获得2个<民兵>.`, `贿赂王公:(印度殖民地可选)弃置一张宝物牌,获得2个<民兵>和1个<奴隶>.`, `黑奴贸易:(非洲殖民地可选)从监狱中弃置3个<奴隶>,令一名其他角色交给你一张手牌.`, `抹除文化:(美洲殖民地可选)弃置所有奴隶,你增加1点体力上限,回复1点体力.`, `垄断商业:(特许公司可选)将一张牌当做【商业贸易】使用,若如此做,你获得1个<民兵>.`].map((info, item) => [item, info]);
                    const { bool, links } = await player
                        .chooseButton(['总督', [choiceList, 'textbutton']], true)
                        .set('filterButton', (button) => {
                            const player = get.player();
                            switch (button.link) {
                                case 0:
                                    return player.countCards('h') >= 3;
                                case 1:
                                case 4:
                                    return true;
                                case 2:
                                    return player.countCards('he') >= 2;
                                case 3:
                                    return player.countMark('Europa_viceroy_militia') >= 3;
                                case 5:
                                    return player.countMark('Europa_viceroy_militia') >= player.countMark('Europa_viceroy_slave') * 2;
                                case 6:
                                    return player.getEuropaViceroy().includes('印度支那殖民地');
                                case 7:
                                    return player.getEuropaViceroy().includes('印度殖民地');
                                case 8:
                                    return player.getEuropaViceroy().includes('非洲殖民地');
                                case 9:
                                    return player.getEuropaViceroy().includes('美洲殖民地');
                                case 10:
                                    return player.getEuropaViceroy().includes('特许公司');
                                default:
                                    return false;
                            }
                        })
                        .set('ai', (button) => {
                            const player = get.player();
                            let slave = player.countMark('Europa_viceroy_slave'),
                                militia = player.countMark('Europa_viceroy_militia');
                            switch (button.link) {
                                case 0:
                                    return 1.5 + Math.random();
                                case 1: {
                                    if (player.hasSkillTag('noqiyi')) return 5 + Math.random();
                                    return slave + 6 < militia * 2;
                                }
                                default:
                                    return 1.25 + Math.random();
                            }
                        })
                        .forResult();
                    if (bool) event.result = { bool, cost_data: { links } };
                },
                async content(event, trigger, player) {
                    event.tongzhicelue = event.cost_data.links[0];
                    switch (event.cost_data.links[0]) {
                        case 0:
                            {
                                const { bool } = await player.chooseToDiscard('h', 3, true).forResult();
                                if (bool) {
                                    get.info('Europa_viceroy').Europa_Mark(player, 5, 'add', 'Europa_viceroy_militia');
                                }
                            }
                            break;
                        case 1:
                            {
                                await player.draw();
                                get.info('Europa_viceroy').Europa_Mark(player, 5, 'add', 'Europa_viceroy_slave');
                            }
                            break;
                        case 2:
                            {
                                const { bool } = await player.chooseToDiscard('he', 2, true).forResult();
                                if (bool) {
                                    player.addSkill('Europa_viceroy_noqiyi');
                                }
                            }
                            break;
                        case 3:
                            {
                                get.info('Europa_viceroy').Europa_Mark(player, 3, 'remove', 'Europa_viceroy_militia');
                                let num = player.storage.Europa_viceroy[0];
                                if (num > 0) {
                                    get.info('Europa_viceroy').Europa_Mark(trigger.player, num, 'remove', 'Europa_viceroy_slave');
                                    player.storage.Europa_viceroy[0] = 0;
                                }
                            }
                            break;
                        case 4:
                            {
                                await player.loseHp(2);
                                const cards = player.getCards('h', function (card) {
                                    return card.name == 'Europa_qiyi';
                                });
                                await player.discard(cards).set('noqiyi', true);
                            }
                            break;
                        case 5:
                            {
                                player.addSkill('Europa_viceroy_nodie');
                            }
                            break;
                        case 6:
                            {
                                const { bool } = await player
                                    .chooseToDiscard('hes', `弃置一张火【杀】或者【火攻】`, function (card) {
                                        return (card.name == 'sha' && game.hasNature(card, 'fire')) || card.name == 'huogong';
                                    })
                                    .forResult();
                                if (bool) {
                                    get.info('Europa_viceroy').Europa_Mark(player, 2, 'add', 'Europa_viceroy_militia');
                                    get.info('Europa_viceroy').Europa_Mark(player, 1, 'add', 'Europa_viceroy_slave');
                                }
                            }
                            break;
                        case 7:
                            {
                                const { bool } = await player
                                    .chooseToDiscard('hes', `弃置一张宝物牌`, function (card) {
                                        return get.subtype(card) == 'equip5';
                                    })
                                    .forResult();
                                if (bool) {
                                    get.info('Europa_viceroy').Europa_Mark(player, 2, 'add', 'Europa_viceroy_militia');
                                    get.info('Europa_viceroy').Europa_Mark(player, 1, 'add', 'Europa_viceroy_slave');
                                }
                            }
                            break;
                        case 8:
                            {
                                let num = Math.min(3, player.storage.Europa_viceroy[0]);
                                get.info('Europa_viceroy').Europa_Mark(player, num, 'remove', 'Europa_viceroy_slave');
                                if (game.countPlayer() > 1) {
                                    const { bool, targets } = await player
                                        .chooseTarget(`令一名其他角色交给你一张手牌`, true)
                                        .set('filterTarget', (card, player, target) => {
                                            return target != player && target.countCards('h');
                                        })
                                        .set('ai', (target) => {
                                            const player = get.player();
                                            return -get.attitude(player, target);
                                        })
                                        .forResult();
                                    if (bool) {
                                        player.line(targets);
                                        targets[0].chooseToGive(player, 'h', true);
                                    }
                                }
                            }
                            break;
                        case 9:
                            {
                                get.info('Europa_viceroy').Europa_Mark(player, player.countMark('Europa_viceroy_militia'), 'remove', 'Europa_viceroy_militia');
                                player.setStorage('Europa_viceroy', [0, 0, 0, 0]);
                                await player.gainMaxHp();
                                await player.recover();
                            }
                            break;
                        case 10:
                            {
                                var next = player.chooseToUse();
                                next.set('openskilldialog', '将一张手牌当【商业贸易】使用');
                                next.set('norestore', true);
                                next.set('_backupevent', 'Europa_viceroy_use');
                                next.set('custom', {
                                    add: {},
                                    replace: { window() { } },
                                });
                                next.backup('Europa_viceroy_use');
                            }
                            break;
                    }
                },
            },
            use: {
                charlotte: true,
                viewAs: {
                    name: 'Europa_shangyemaoyi',
                },
                filterCard(card) {
                    return get.itemtype(card) == 'card';
                },
                position: 'hes',
                popname: true,
                log: false,
                async precontent(event, trigger, player) {
                    get.info('Europa_viceroy').Europa_Mark(player, 1, 'add', 'Europa_viceroy_militia');
                },
            },
            use_backup: {
                charlotte: true,
            },
            plantation: {
                trigger: {
                    player: 'phaseDrawBegin2',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return !event.numFixed && player.countMark('Europa_viceroy_plantation') >= 5;
                },
                async content(event, trigger, player) {
                    trigger.num += Math.floor(player.countMark(event.name) / 5);
                },
            },
            arsenal: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += Math.floor(player.countMark('Europa_viceroy_arsenal') / 5));
                    },
                    attackRange(player, num) {
                        return (num += Math.floor(player.countMark('Europa_viceroy_arsenal') / 5));
                    },
                },
            },
            workplace: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += Math.floor(player.countMark('Europa_viceroy_workplace') / 5));
                    },
                },
            },
            prison: {
                trigger: {
                    player: 'addEuropaViceroyMarkAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.countMark('Europa_viceroy_prison') >= 8;
                },
                async content(event, trigger, player) {
                    do {
                        player.removeMark('Europa_viceroy_prison', 8, false);
                        player.gain(game.createCard('Europa_qiyi'), 'gain2');
                    } while (player.countMark('Europa_viceroy_prison') >= 8);
                },
            },
            noqiyi: {
                trigger: {
                    global: 'loseBegin',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.cards?.some(function (card) {
                        return card.name == 'Europa_qiyi';
                    });
                },
                async content(event, trigger, player) {
                    trigger.cards = trigger.cards.filter((q) => q.name != 'Europa_qiyi'); //QQQ
                },
            },
            nodie: {
                charlotte: true,
                ai: {
                    keepEuropaSlave: true,
                },
            },
        },
    },
    g_Europa_gem: {
        trigger: {
            player: 'phaseBegin',
        },
        popup: false,
        filter(event, player) {
            return player.getExpansions('Europa_gem').length;
        },
        async cost(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton(['你可以弃置任意张【宝石】并回复等量体力', player.getExpansions('Europa_gem')])
                .set('ai', (button) => {
                    if (player.isHealthy()) return -1;
                    if (ui.selected.buttons.length >= player.getDamagedHp()) return -1;
                    return 1;
                })
                .set('selectButton', [1, Infinity])
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            await player.loseToDiscardpile(event.cost_data.links);
            player.recover(event.cost_data.links.length);
            if (!player.getExpansions('Europa_gem').length) player.removeSkill(event.name);
        },
    },
    g_Europa_gold: {
        trigger: {
            player: 'explorationContingencyFinally3',
        },
        forced: true,
        filter(event, player) {
            return player.getExpansions('Europa_gold').length;
        },
        async content(event, trigger, player) {
            const cards = player.getExpansions('Europa_gold');
            event.cards = cards;
            await player.loseToDiscardpile(cards);
            if (!player.getExpansions('Europa_gold').length) player.removeSkill(event.name);
            game.log(player, '弃置了所有的黄金');
            player.draw(cards.length);
        },
    },
    g_Europa_silk: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.getExpansions('Europa_silk').length > 1;
        },
        prompt: '出牌阶段限一次,你可以弃置两张丝绸,随机获得并使用一张装备牌.',
        chooseButton: {
            dialog(event, player) {
                return ui.create.dialog('丝绸', player.getExpansions('Europa_silk'), 'hidden');
            },
            select: 2,
            backup(links, player) {
                return {
                    filterCard(card) {
                        return links.includes(card);
                    },
                    selectCard: -1,
                    position: 'x',
                    async content(event, trigger, player) {
                        var card = get.cardPile(function (card) {
                            return get.subtype(card) == 'equip2';
                        });
                        if (!player.getExpansions('Europa_silk').length) player.removeSkill('g_Europa_silk');
                        if (card) player.chooseUseTarget(card, true);
                    },
                    ai: {
                        result: {
                            player(player) {
                                if (player.getEquips(2).length) return 0.8;
                                return 1;
                            },
                        },
                    },
                };
            },
            prompt() {
                return '弃置两张【丝绸】获得一张防具牌并使用之';
            },
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    if (player.getEquips(2).length) return 0.8;
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
        },
    },
    Europa_gem: {
        intro: {
            markcount: 'expansion',
            content: 'expansion',
        },
    },
    Europa_gold: {
        intro: {
            markcount: 'expansion',
            content: 'expansion',
        },
    },
    Europa_silk: {
        intro: {
            markcount: 'expansion',
            content: 'expansion',
        },
    },
    Europa_tianchaojizhi: {
        global: ['Europa_tianchaojizhi_addTributary', 'Europa_tianchaojizhi_removeTributaryByOtherSelf'],
        mod: {
            playerEnabled(card, player, target) {
                if (!get.tag(card, 'damage')) return;
                if (player.getStorage('Europa_tianchaojizhi_Tributary').includes(target)) return false;
            },
        },
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        charlotte: true,
        lastDo: true,
        getLimit: 100,
        filter(event, player) {
            if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
            return (event.name != 'phase' || game.phaseNumber == 0) && !player.getEquips('Europa_beijing').length;
        },
        filterx(event, player) {
            return game.zhu == player;
        },
        async content(event, trigger, player) {
            if (!lib.inpile.includes('Europa_beijing')) {
                lib.inpile.push('Europa_beijing');
                const card = game.createCard('Europa_beijing', 'heart', 9);
                await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
            } else {
                var card = get.cardPile(function (card) {
                    return card.name == 'Europa_beijing' && !player.getEquips('Europa_beijing').length;
                }, 'field');
                if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
            }
        },
        getLowerLimit(player) {
            const list = [],
                skills = player.getSkills();
            game.expandSkills(skills);
            for (const skill of skills) {
                const info = get.info(skill);
                if (!info || !info.Europa_tianchaojizhi_lower) continue;
                list.add(info.Europa_tianchaojizhi_lower(player));
            }
            return list.length ? Math.max(...list) : 0;
        },
        Europa_Mark(player, num, type) {
            var next = game.createEvent('Europa_tianchaojizhi_Europa_Mark');
            next.player = player;
            next.num = num || 1;
            next.type = type || 'add';
            next.markname = 'Europa_tianchaojizhi';
            if (next.type == 'add') {
                next.num = Math.min(next.num, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
            } else {
                const limit = get.info('Europa_tianchaojizhi').getLowerLimit(player);
                if (player.countMark('Europa_tianchaojizhi') - next.num < limit) {
                    next.num = Math.abs(player.countMark('Europa_tianchaojizhi') - limit);
                }
            }
            next.setContent(async (event, trigger, player) => {
                if (event.num <= 0) return;
                player[`${event.type}Mark`](event.markname, event.num);
            });
        },
        mark: true,
        marktext: '天命',
        init(player, skill) {
            if (!player.storage[skill] || typeof player.storage[skill] != 'number') {
                player.storage[skill] = 0;
            }
            if (player.storage[skill] < get.info('Europa_tianchaojizhi').getLowerLimit(player)) {
                const num = get.info('Europa_tianchaojizhi').getLowerLimit(player) - player.countMark('Europa_tianchaojizhi');
                if (num > 0) {
                    player.storage[skill] = num;
                }
            }
        },
        intro: {
            name: '天命',
            content: '#',
        },
        backups: [
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.markAuto('Europa_tianchaojizhi_record', [0]);
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, 20, 'remove');
                    player.addTempSkill('Europa_tianchaojizhi_edict0');
                    const targets_Tributary = game.filterPlayer(function (current) {
                        return player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                    if (targets_Tributary.length) {
                        await game.asyncDraw(targets_Tributary);
                    }
                },
            },
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.markAuto('Europa_tianchaojizhi_record', [1]);
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, 20, 'remove');
                    const targets_Confucianism = game.filterPlayer(function (current) {
                        return current.hasEuropaReligion('儒教');
                    });
                    const targets_noConfucianism = game.filterPlayer(function (current) {
                        return !current.hasEuropaReligion('儒教');
                    });
                    if (targets_Confucianism.length) {
                        for (const target of targets_Confucianism) {
                            game.broadcastAll(function (target) {
                                if (target.name1) {
                                    lib.character[target.name1].clans.addArray(lib.EuropaReligion);
                                    lib.characterTitle[target.name1] = lib.character[target.name1].clans.join(',');
                                }
                                if (target.name2) {
                                    lib.character[target.name2].clans.addArray(lib.EuropaReligion);
                                    lib.characterTitle[target.name2] = lib.character[target.name2].clans.join(',');
                                }
                            }, target);
                            game.log(target, '融合了所有宗教');
                        }
                    }
                    if (targets_noConfucianism.length) {
                        for (const target of targets_noConfucianism) {
                            game.broadcastAll(function (target) {
                                if (target.name1) {
                                    lib.character[target.name1].clans.add('儒教');
                                    lib.characterTitle[target.name1] = lib.character[target.name1].clans.join(',');
                                }
                                if (target.name2) {
                                    lib.character[target.name2].clans.add('儒教');
                                    lib.characterTitle[target.name2] = lib.character[target.name2].clans.join(',');
                                }
                            }, target);
                            game.log(target, '融合了儒教');
                        }
                    }
                },
            },
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.markAuto('Europa_tianchaojizhi_record', [2]);
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, 20, 'remove');
                    await player.addSkills('jizhi');
                    const targets_Tributary = game.filterPlayer(function (current) {
                        return player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                    for (const target of targets_Tributary) {
                        const trick = get.cardPile(function (card) {
                            return get.type2(card, false) == 'trick';
                        });
                        if (trick) await target.gain(trick, 'gain2');
                    }
                },
            },
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.markAuto('Europa_tianchaojizhi_record', [3]);
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, 20, 'remove');
                    var card = get.cardPile(function (card) {
                        return get.type(card) == 'equip' && player.canUse(card, player);
                    });
                    if (card) {
                        await player.chooseUseTarget(card, true, 'nothrow', 'nopopup', true);
                    }
                    player.addSkill('Europa_tianchaojizhi_edict3');
                    const targets_Tributary = game.filterPlayer(function (current) {
                        return player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                    for (const target of targets_Tributary) {
                        const sha = get.cardPile2(function (card) {
                            return card.name == 'sha';
                        });
                        if (sha) await target.gain(sha, 'gain2');
                    }
                },
            },
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.markAuto('Europa_tianchaojizhi_record', [4]);
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, 20, 'remove');
                    player.addSkill('Europa_tianchaojizhi_edict4');
                    const targets_Tributary = game.filterPlayer(function (current) {
                        return player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                    for (const target of targets_Tributary) {
                        target.addSkill('Europa_tianchaojizhi_edict4_1');
                        target.addMark('Europa_tianchaojizhi_edict4_1', 1, false);
                    }
                },
            },
        ],

        group: ['Europa_tianchaojizhi_use', 'Europa_tianchaojizhi_init', 'Europa_tianchaojizhi_round', 'Europa_tianchaojizhi_damage', 'Europa_tianchaojizhi_die', 'Europa_tianchaojizhi_Tributary', 'Europa_tianchaojizhi_phaseBeginTributary', 'Europa_tianchaojizhi_damageTributary', 'Europa_tianchaojizhi_removeTributaryByMySelf', 'Europa_tianchaojizhi_buff_0_29', 'Europa_tianchaojizhi_buff_30_49', 'Europa_tianchaojizhi_buff_50_79', 'Europa_tianchaojizhi_buff_80_100'],
        subSkill: {
            use: {
                enable: 'phaseUse',
                usable: 1,
                charlotte: true,
                filter(event, player) {
                    if (player.getStorage('Europa_tianchaojizhi_record').length >= 5) return false;
                    return player.countMark('Europa_tianchaojizhi') >= 50;
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = ['编户齐民:本局剩下时间内,你的摸牌阶段额外摸一张牌.所有朝贡者摸一张牌.', '推行汉化:令场上所有儒教势力角色融合全部宗教,所有非儒教势力朝贡者融合儒教.', '科举改制:你获得技能〖集智】,所有朝贡者随机从牌堆中获得一张锦囊牌.', '推广旗军:从牌堆或弃牌堆中随机使用一张装备牌,在本局剩余时间内,你的【杀】无视防具,所有朝贡者从牌堆中获得一张【杀】.', '整顿吏治:本局剩余时间内,你于一轮开始时+2天命,所有朝贡者手牌上限+1.'];
                        const choiceList = ui.create.dialog('圣旨:你可以减少20点天命,颁布一道圣旨,每道圣旨每局限一次.', 'forcebutton', 'hidden');
                        choiceList.add([
                            list.map((item, i) => {
                                if (player.getStorage('Europa_tianchaojizhi_record').includes(i)) item = `<span style="text-decoration: line-through;">${item}</span>`;
                                return [i, item];
                            }),
                            'textbutton',
                        ]);
                        return choiceList;
                    },
                    filter(button) {
                        const player = get.player();
                        return !player.getStorage('Europa_tianchaojizhi_record').includes(button.link);
                    },
                    backup(links) {
                        const next = get.copy(lib.skill.Europa_tianchaojizhi.backups[links[0]]);
                        next.filterCard = function () {
                            return false;
                        };
                        next.selectCard = -1;
                        return next;
                    },
                    check(button) {
                        const player = get.player();
                        switch (button.link) {
                            case 2: {
                                const target = game.findPlayer(function (current) {
                                    return current.isMaxHp();
                                });
                                return (Math.min(target.hp, player.maxHp) - player.hp) * 2;
                            }
                            case 0: {
                                const target = game.findPlayer(function (current) {
                                    return current.isMaxHandcard();
                                });
                                return Math.min(5, target.countCards('h') - player.countCards('h')) * 0.8;
                            }
                            case 1: {
                                const target = game.findPlayer(function (current) {
                                    return current.isMaxEquip();
                                });
                                return (target.countCards('e') - player.countCards('e')) * 1.4;
                            }
                        }
                    },
                    prompt(links) {
                        return ['编户齐民:本局剩下时间内,你的摸牌阶段额外摸一张牌.所有朝贡者摸一张牌.', '推行汉化:令场上所有儒教势力角色融合全部宗教,所有非儒教势力朝贡者融合儒教.', '科举改制:你获得技能<集智>,所有朝贡者随机从牌堆中获得一张锦囊牌.', '推广旗军:从牌堆或弃牌堆中随机使用一张装备牌,在本局剩余时间内,你的【杀】无视防具,所有朝贡者从牌堆中获得一张【杀】.', '整顿吏治:本局剩余时间内,你于一轮开始时+2天命,所有朝贡者手牌上限+1.'][links[0]];
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            use_backup: {},
            record: {},
            edict0: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += 1);
                    },
                },
            },
            edict3: {
                ai: {
                    unequip: true,
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.card || arg.card.name != 'sha') return false;
                    },
                },
            },
            edict4: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
                    return true;
                },
                async content(event, trigger, player) {
                    const num = Math.min(4, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                    if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
                },
            },
            edict4_1: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.countMark('Europa_tianchaojizhi_edict4_1'));
                    },
                },
            },
            init: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const num = Math.min(80, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                    if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
                },
            },
            round: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
                    return game.hasPlayer(function (current) {
                        return current.identity == 'zhong' || current.identity == 'mingzhong' || current.group == 'Europa_Tengri' || player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                },
                async content(event, trigger, player) {
                    const targets_Zhong = game.filterPlayer(function (current) {
                        return current.identity == 'zhong' || current.identity == 'mingzhong';
                    }),
                        targets_Fan = game.filterPlayer(function (current) {
                            return current.identity == 'fan';
                        }),
                        targets_Tengri = game.filterPlayer(function (current) {
                            return current.group == 'Europa_Tengri';
                        }),
                        targets_Tributary = game.filterPlayer(function (current) {
                            return player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                        });
                    if (targets_Zhong.length) {
                        const num = Math.min(targets_Zhong.length * 4, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                        if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
                    }
                    if (targets_Fan.length) {
                        get.info('Europa_tianchaojizhi').Europa_Mark(player, 3 * targets_Fan.length, 'remove');
                    }
                    if (targets_Tengri.length) {
                        get.info('Europa_tianchaojizhi').Europa_Mark(player, 5, 'remove');
                    }
                    if (targets_Tributary.length) {
                        const num = Math.min(targets_Tributary, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                        if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
                    }
                },
            },
            damage: {
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
                    return true;
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'damageSource') {
                        const num = Math.min(5, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                        if (num > 0) player.addMark('Europa_tianchaojizhi', num);
                    } else {
                        get.info('Europa_tianchaojizhi').Europa_Mark(player, 3, 'remove');
                    }
                },
            },
            die: {
                trigger: {
                    global: 'dieAfter',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!get.info('Europa_tianchaojizhi').filterx(event, player)) return false;
                    return ['zhong', 'mingzhong', 'fan'].includes(event.player.identity);
                },
                async content(event, trigger, player) {
                    if (trigger.player.identity == 'fan') {
                        const num = Math.min(10, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
                        if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
                    } else {
                        get.info('Europa_tianchaojizhi').Europa_Mark(player, 15, 'remove');
                    }
                },
            },
            Tributary: {
                marktext: '朝贡',
                intro: {
                    name: '朝贡',
                    content: `你的朝贡者:$`,
                },
            },
            phaseBeginTributary: {
                trigger: {
                    global: 'phaseBegin',
                },
                popup: false,
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!event.player.countCards('he')) return false;
                    return player.getStorage('Europa_tianchaojizhi_Tributary').includes(event.player);
                },
                async content(event, trigger, player) {
                    if (trigger.player.countCards('he')) {
                        await trigger.player.chooseToGive(player, true, 'he');
                    }
                },
            },
            damageTributary: {
                trigger: {
                    global: 'damageSource',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (
                        event.player != player &&
                        !game.hasPlayer(function (current) {
                            return current != event.source && current.getStorage('Europa_tianchaojizhi_Tributary').includes(event.player);
                        })
                    )
                        return false;
                    return event.source && event.source.isIn() && player.getStorage('Europa_tianchaojizhi_Tributary').includes(event.source);
                },
                prompt2(event, player) {
                    return `你可以视为对${get.translation(event.source)}使用一张【杀】`;
                },
                async content(event, trigger, player) {
                    const sha = new lib.element.VCard({ name: 'sha' });
                    await player.chooseUseTarget(sha, trigger.source, 'nodistance');
                },
            },
            addTributary: {
                enable: 'phaseUse',
                filter(event, player) {
                    if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'Europa_tianchaojizhi_addTributary')) return false;
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('Europa_tianchaojizhi') && current != player && !current.getStorage('Europa_tianchaojizhi_Tributary').includes(player);
                    });
                },
                filterTarget(card, player, target) {
                    return target.hasSkill('Europa_tianchaojizhi') && target != player && !target.getStorage('Europa_tianchaojizhi_Tributary').includes(player);
                },
                prompt: '出牌阶段,你可以成为一名其他角色的朝贡者(每局游戏限一次).',
                async content(event, trigger, player) {
                    event.targets[0].markAuto('Europa_tianchaojizhi_Tributary', [player]);
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return 2;
                        },
                    },
                },
            },
            removeTributaryByMySelf: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current != player && player.getStorage('Europa_tianchaojizhi_Tributary').includes(current);
                    });
                },
                filterTarget(card, player, target) {
                    return target != player && player.getStorage('Europa_tianchaojizhi_Tributary').includes(target);
                },
                prompt: '出牌阶段限一次,你可以取消一名其他角色的朝贡身份',
                async content(event, trigger, player) {
                    player.unmarkAuto('Europa_tianchaojizhi_Tributary', event.targets);
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return 1;
                        },
                    },
                },
            },
            removeTributaryByOtherSelf: {
                trigger: {
                    player: 'phaseBegin',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current.getStorage('Europa_tianchaojizhi_Tributary').includes(player);
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(`你可以取消朝贡者的身份`)
                        .set('filterTarget', (card, player, target) => {
                            return target.getStorage('Europa_tianchaojizhi_Tributary').includes(player);
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target) <= 0;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target.unmarkAuto('Europa_tianchaojizhi_Tributary', [player]);
                },
            },
            buff_0_29: {
                trigger: {
                    player: ['phaseDrawBegin2', 'phaseUseBegin'],
                    target: 'useCardToTargeted',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.countMark('Europa_tianchaojizhi') > 29) return false;
                    switch (name) {
                        case 'phaseDrawBegin2':
                            return !event.numFixed;
                        case 'phaseUseBegin':
                            return player.countCards('he', function (card) {
                                lib.filter.cardDiscardable(card, player, 'Europa_tianchaojizhi');
                            });
                        case 'useCardToTargeted':
                            return !event.player.hasEuropaReligion('儒教') && event.card.name == 'sha';
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    switch (event.triggername) {
                        case 'phaseDrawBegin2':
                            {
                                trigger.num--;
                            }
                            break;
                        case 'phaseUseBegin':
                            {
                                if (
                                    player.countCards('he', function (card) {
                                        lib.filter.cardDiscardable(card, player, 'Europa_tianchaojizhi');
                                    })
                                ) {
                                    player.chooseToDiscard('he', true);
                                }
                            }
                            break;
                        case 'useCardToTargeted': {
                            const id = player.playerid;
                            const map = trigger.parent.customArgs;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].extraDamage != 'number') {
                                map[id].extraDamage = 0;
                            }
                            map[id].extraDamage++;
                        }
                    }
                },
                mod: {
                    maxHandcard(player, num) {
                        if (player.countMark('Europa_tianchaojizhi') > 29) return;
                        return (num -= 2);
                    },
                },
            },
            buff_30_49: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.countMark('Europa_tianchaojizhi') > 49 || player.countMark('Europa_tianchaojizhi') < 30) return false;
                    return !event.player.hasEuropaReligion('儒教') && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const id = player.playerid;
                    const map = trigger.parent.customArgs;
                    if (!map[id]) map[id] = {};
                    if (typeof map[id].extraDamage != 'number') {
                        map[id].extraDamage = 0;
                    }
                    map[id].extraDamage++;
                },
                mod: {
                    maxHandcard(player, num) {
                        if (player.countMark('Europa_tianchaojizhi') > 49 || player.countMark('Europa_tianchaojizhi') < 30) return;
                        return (num -= 1);
                    },
                },
            },
            buff_50_79: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (player.countMark('Europa_tianchaojizhi') > 79 || player.countMark('Europa_tianchaojizhi') < 50) return;
                        if (!player.isPhaseUsing()) return;
                        if (card.name == 'sha') return num + 1;
                    },
                    maxHandcard(player, num) {
                        if (player.countMark('Europa_tianchaojizhi') > 79 || player.countMark('Europa_tianchaojizhi') < 50) return;
                        return (num += 1);
                    },
                },
            },
            buff_80_100: {
                trigger: {
                    player: ['phaseDrawBegin2', 'useCard'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.countMark('Europa_tianchaojizhi') < 80) return false;
                    switch (name) {
                        case 'phaseDrawBegin2':
                            return !event.numFixed;
                        case 'useCard':
                            return event.card && event.card.name == 'sha';
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    switch (event.triggername) {
                        case 'phaseDrawBegin2':
                            {
                                trigger.num++;
                            }
                            break;
                        case 'useCard':
                            {
                                trigger.directHit.addArray(game.filterPlayer());
                            }
                            break;
                    }
                },
                mod: {
                    cardUsable(card, player, num) {
                        if (player.countMark('Europa_tianchaojizhi') < 80) return;
                        if (!player.isPhaseUsing()) return;
                        if (card.name == 'sha') return num + 1;
                    },
                    maxHandcard(player, num) {
                        if (player.countMark('Europa_tianchaojizhi') < 80) return;
                        return (num += 2);
                    },
                },
            },
        },
    },
    _Europa_landmark_gskill: {
        subSkill: {
            diaoduoxichengqiang: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                _priority: 11.11,
                filter(event, player) {
                    if (player.getEquips('Europa_diaoduoxichengqiang').length) return false;
                    if (!get.nameList(player).includes('Europa_junshitandingshiyishi')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_diaoduoxichengqiang', 'spade', 1);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            junshitandingbao: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                _priority: 11.12,
                filter(event, player) {
                    if (player.getEquips('Europa_junshitandingbao').length) return false;
                    if (!get.nameList(player).includes('Europa_junshitandingshiyishi')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_junshitandingbao', 'spade', 13);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            tenuoqiditelan: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_tenuoqiditelan').length) return false;
                    if (!get.nameList(player).includes('Europa_mengtezuma')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_tenuoqiditelan', 'diamond', 12);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            lisiben: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_lisiben').length) return false;
                    if (!get.nameList(player).includes('Europa_tangafangsuo')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_lisiben', 'spade', 5);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            fandigang: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_fandigang').length) return false;
                    if (!get.nameList(player).includes('Europa_liaoshishi')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_fandigang', 'heart', 13);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            yabaketu: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_yanbaketu').length) return false;
                    if (!get.nameList(player).includes('Europa_manshamusa')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_yanbaketu', 'club', 10);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            kailuo: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_kailuo').length) return false;
                    if (!get.nameList(player).includes('Europa_tumanbeiyi')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_kailuo', 'diamond', 13);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
            wanyuanshen: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getEquips('Europa_wanyuanshendian').length) return false;
                    if (!get.nameList(player).includes('Europa_zhousi')) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const card = game.createCard('Europa_wanyuanshendian', 'spade', 13);
                    if (card) await player.chooseUseTarget(card, player, 'nothrow', 'nopopup', true);
                },
            },
        },
    },
    Europa_jupao: {
        enable: 'phaseUse',
        filterCard: true,
        selectCard: 2,
        position: 'hes',
        check(card) {
            return 6 - get.value(card);
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_jupao_effect');
            player.addMark('Europa_jupao_effect', 2, false);
        },
        ai: {
            order() {
                return get.order({ name: 'sha' }) + 0.5;
            },
            result: {
                player(player) {
                    return player.hasUseTarget({ name: 'sha' });
                },
            },
        },
        group: 'Europa_jupao_fire',
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    game.setNature(trigger.card, 'fire');
                    trigger.baseDamage += player.countMark(event.name);
                    player.removeSkill(event.name);
                },
                mark: true,
                intro: {
                    content: `你使用的下一张【杀】伤害基础值+#`,
                },
            },
            fire: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                filter(event, player) {
                    return event.hasNature('fire') && event.player.hujia;
                },
                async content(event, trigger, player) {
                    trigger.num *= 2;
                },
            },
        },
    },
    Europa_chongjiao: {
        trigger: {
            player: 'phaseDrawBegin2',
        },
        forced: true,
        filter(event, player) {
            return !event.numFixed && player.countMark('Europa_chongjiao');
        },
        async content(event, trigger, player) {
            trigger.num *= 2;
        },
        marktext: '吉',
        intro: {
            name: '吉哈德',
            content: 'mark',
        },
        group: ['Europa_chongjiao_add', 'Europa_chongjiao_remove'],
        subSkill: {
            add: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('Europa_chongjiao') < 4;
                },
                async content(event, trigger, player) {
                    let num = player.countMark('Europa_chongjiao') + trigger.num > 4 ? 4 - player.countMark('Europa_chongjiao') : trigger.num;
                    player.addMark('Europa_chongjiao', num);
                },
            },
            remove: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return player.countMark('Europa_chongjiao');
                },
                async content(event, trigger, player) {
                    player.removeMark('Europa_chongjiao', trigger.num);
                },
            },
        },
    },
    Europa_zhengfu: {
        zhuSkill: true,
        getPure(player) {
            return (
                ['name', 'name1', 'name2'].some((info) => {
                    return player[info] && player[info] == 'Europa_junshitandingshiyishi';
                }) && player.getEquips('Europa_diaoduoxichengqiang').length
            );
        },
        mod: {
            cardUsableTarget(card, player, target) {
                if (!player.hasZhuSkill('Europa_zhengfu')) return false;
                if (get.distance(player, target, 'pure') <= 1 || get.info('Europa_zhengfu').getPure(target)) return true;
            },
            targetInRange(card, player, target) {
                if (!player.hasZhuSkill('Europa_zhengfu')) return false;
                if (get.distance(player, target, 'pure') <= 1 || get.info('Europa_zhengfu').getPure(target)) return true;
            },
        },
    },
    Europa_heijun: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            var card = get.cardPile(function (card) {
                return card.name == 'sha' && card.nature == 'thunder';
            });
            if (card) player.gain(card, 'gain2');
        },
        group: ['Europa_heijun_effect', 'Europa_heijun_negative'],
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && get.color(event.card) == 'black';
                },
                async content(event, trigger, player) {
                    trigger.baseDamage++;
                },
                ai: {
                    unequip: true,
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha' && arg.card && get.color(arg.card) == 'black') return true;
                        return false;
                    },
                },
            },
            negative: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    if (
                        player.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, player, 'Europa_zhengfu');
                        }, 'h')
                    ) {
                        player.chooseToDiscard('h', true);
                    } else {
                        player.loseHp();
                    }
                },
            },
        },
    },
    Europa_zongbing: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            if (
                player
                    .getHistory('gain', (evt) => {
                        return evt.getParent(2).name == 'Europa_zongbing';
                    })
                    .reduce((p, c) => p + c.cards.length, 0) >= 3
            )
                return false;
            return event.card && event.card.name == 'sha';
        },
        async content(event, trigger, player) {
            let length = player
                .getHistory('gain', (evt) => {
                    return evt.getParent(2).name == 'Europa_zongbing';
                })
                .reduce((p, c) => p + c.cards.length, 0);
            let num = trigger.num;
            if (length + trigger.num > 3) num -= length;
            if (num > 0) player.draw(num);
            if (!trigger.player.hasEuropaReligion('基督教')) {
                if (trigger.getParent('useCard').addCount !== false) {
                    trigger.getParent('useCard').addCount = false;
                    player.getStat().card.sha--;
                }
            }
        },
    },
    Europa_jucheng: {
        global: 'Europa_jucheng_global',
        enable: 'chooseToUse',
        viewAs: {
            name: 'sha',
        },
        viewAsFilter(player) {
            if (!player.countCards('hs', { name: ['shan', 'tao'] })) return false;
            if (player.getEquips('Europa_diaoduoxichengqiang').length) return false;
        },
        filterCard(card, player) {
            return ['shan', 'tao'].includes(card.name);
        },
        group: ['Europa_jucheng_remove'],
        subSkill: {
            remove: {
                trigger: {
                    player: 'changeHujiaAfter',
                },
                forced: true,
                filter(event, player) {
                    if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'Europa_jucheng_remove')) return false;
                    return !player.hujia;
                },
                async content(event, trigger, player) {
                    const cards = player.getEquips('Europa_diaoduoxichengqiang');
                    if (cards.length) player.discard(cards);
                },
            },
            global: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return current != player && current.hasSkill('Europa_jucheng') && player.canCompare(current);
                    });
                },
                filterTarget(card, player, target) {
                    return target.hasSkill('Europa_jucheng');
                },
                prompt() {
                    const player = _status.event.player;
                    const list = game.filterPlayer(function (target) {
                        return target != player && target.hasZhuSkill('Europa_jucheng') && player.canCompare(target);
                    });
                    let str = '和' + get.translation(list);
                    if (list.length > 1) str += '中的一人';
                    str += '进行拼点.若你赢,其移除1点护甲.';
                    return str;
                },
                log: false,
                prepare(cards, player, targets) { },
                async content(event, trigger, player) {
                    const target = event.target;
                    game.trySkillAudio('Europa_jucheng', target);
                    const { bool } = await player
                        .chooseToCompare(target, function (card) {
                            if (card.name == 'du') return 20;
                            const player = get.owner(card);
                            const target = _status.event.parent.target;
                            if (player != target && get.attitude(player, target) > 0) {
                                return -card.number;
                            }
                            return card.number;
                        })
                        .set('preserve', 'lose')
                        .forResult();
                    if (bool) {
                        target.changeHujia(-1);
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            if (player.countCards('h', 'du') && get.attitude(player, target) < 0) return -1;
                            if (player.countCards('h') <= player.hp) return 0;
                            let maxnum = 0;
                            const cards2 = target.getCards('h');
                            for (var i = 0; i < cards2.length; i++) {
                                if (cards2[i].number > maxnum) {
                                    maxnum = cards2[i].number;
                                }
                            }
                            if (maxnum > 10) maxnum = 10;
                            if (maxnum < 5 && cards2.length > 1) maxnum = 5;
                            const cards = player.getCards('h');
                            if (Array.isArray(cards))
                                for (var i of cards) {
                                    if (i.number < maxnum) return 1;
                                }
                            return 0;
                        },
                    },
                },
            },
        },
    },
    Europa_zifeng: {
        zhuSkill: true,
        group: ['Europa_zifeng_add', 'Europa_zifeng_win'],
        subSkill: {
            add: {
                trigger: {
                    player: 'compare',
                    target: 'compare',
                },
                forced: true,
                filter(event, player) {
                    if (!player.hasZhuSkill('Europa_zifeng')) return false;
                    return (player == event.player ? event.num1 : event.num2) <= 5;
                },
                async content(event, trigger, player) {
                    if (player == trigger.target || !trigger.iwhile) {
                        trigger[player == trigger.player ? 'num1' : 'num2'] += 3;
                        game.log(player, '的拼点牌点数+3');
                    }
                },
            },
            win: {
                trigger: {
                    player: ['chooseToCompareAfter', 'compareMultipleAfter'],
                    target: ['chooseToCompareAfter', 'compareMultipleAfter'],
                },
                filter(event, player) {
                    if (!player.hasZhuSkill('Europa_zifeng')) return false;
                    if (event.preserve) return false;
                    if (player == event.player) {
                        return event.num1 > event.num2;
                    } else {
                        return event.num1 < event.num2;
                    }
                },
                prompt: '你可以摸一张牌',
                async content(event, trigger, player) {
                    player.draw();
                },
            },
        },
    },
    _Europa_bztChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_bztChooseAudio) return false;
            const list = ['Europa_junshitandingshiyishi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_bztChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/闪电般归来.mp3`;
        },
    },
    Europa_junshi: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            if (target == player) return false;
            if (ui.selected.targets.length) {
                return target.getHp() != ui.selected.targets[0].getHp();
            }
            return true;
        },
        selectTarget: 2,
        complexTarget: true,
        multitarget: true,
        async content(event, trigger, player) {
            const targets = event.targets.sort((a, b) => a.getHp() - b.getHp());
            await targets[0].recover();
            await targets[0].draw();
            await targets[1].loseHp();
            await targets[1].chooseToDiscard('he', true);
            if (targets[0].countCards('h') == targets[1].countCards('h') || targets[0].getHp() == targets[1].getHp()) {
                await player.draw();
            }
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    const minHp = game.filterPlayer((i) => {
                        if (i == player) return false;
                        return i.getHp() < target.getHp();
                    });
                    const maxHp = game.filterPlayer((i) => {
                        if (i == player) return false;
                        return i.getHp() > target.getHp();
                    });
                    if (ui.selected.targets.length) {
                        if (target.getHp() > ui.selected.targets[0].getHp()) return -2;
                        return get.recoverEffect(target, player, player) + get.effect(target, { name: 'draw' }, target, player);
                    }
                    if (maxHp.length) return get.recoverEffect(target, player, player) + get.effect(target, { name: 'draw' }, target, player);
                    if (minHp.length) return -1;
                    return 0;
                },
            },
        },
    },
    Europa_longduan: {
        global: 'Europa_longduan_global',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            const list = lib.inpile
                .filter((info) => {
                    return get.type(info) == 'equip' && get.subtype(info); //QQQ
                })
                .map((info) => {
                    if ([3, 4, 6].includes(parseInt(get.subtype(info).slice('equip'.length)))) return 'equip3_4';
                    return get.subtype(info);
                })
                .toUniqued(),
                cards = [];
            const { control } = await player
                .chooseControl(list)
                .set('ai', () => {
                    return ['equip1', 'equip2'].randomGet();
                })
                .forResult();
            for (var i = 0; i < ui.cardPile.childNodes.length; i++) {
                var card = ui.cardPile.childNodes[i];
                if (!get.subtype(card)) continue;
                if (control == 'equip3_4') {
                    if ([3, 4, 6].includes(parseInt(get.subtype(card).slice('equip'.length)))) cards.push(card);
                } else {
                    if (get.subtype(card) == control) cards.push(card);
                }
            }
            if (cards.length) {
                player.addToExpansion(cards, 'gain2').gaintag.add(event.name);
            }
        },
        mark: true,
        intro: {
            content: 'expansion',
            markcount: 'expansion',
        },
        subSkill: {
            global: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    if (!player.countCards('h')) return false;
                    var targets = game.filterPlayer(function (current) {
                        return current.hasSkill('Europa_longduan');
                    });
                    if (!targets.length) return false;
                    return true;
                },
                selectCard: 2,
                filterCard: true,
                filterTarget(card, player, target) {
                    return target.hasSkill('Europa_longduan') && target.getExpansions('Europa_longduan').length;
                },
                selectTarget() {
                    var targets = game.filterPlayer(function (current) {
                        return current.hasSkill('Europa_longduan');
                    });
                    return targets.length > 1 ? [1, 1] : [-1, -1];
                },
                complexSelect: true,
                prompt() {
                    var player = _status.event.player;
                    var targets = game.filterPlayer(function (current) {
                        return current.hasSkill('Europa_longduan') && current.getExpansions('Europa_longduan').length;
                    });
                    return '将两张牌交给' + get.translation(targets) + (targets.length > 1 ? '中的一人' : '');
                },
                position: 'h',
                discard: false,
                lose: false,
                delay: false,
                check(card) {
                    var player = _status.event.player;
                    if (
                        game.hasPlayer(function (current) {
                            return lib.skill.Europa_longduan_global.filterTarget(null, player, current) && get.attitude(player, current) > 0;
                        })
                    ) {
                        return 5 - get.value(card);
                    }
                    return -get.value(card);
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    game.trySkillAudio('Europa_longduan', target);
                    await player.give(event.cards, target);
                    const { bool, links } = await player
                        .chooseButton(['选择获得一张牌', target.getExpansions('Europa_longduan')], true)
                        .set('ai', (button) => {
                            return get.value(button.link);
                        })
                        .forResult();
                    if (bool) {
                        player.equip(links[0]);
                    }
                },
                ai: {
                    order: 2,
                    result: {
                        target: 1,
                    },
                },
            },
        },
    },
    Europa_huanbao: {
        trigger: {
            player: 'gainAfter',
            global: 'loseAsyncAfter',
        },
        forced: true,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_huanbao')) return false;
            var cards = event.getg(player);
            if (!cards.length) return false;
            return game.hasPlayer((current) => {
                if (current == player) return false;
                return event.getl(current).cards2.length;
            });
        },
        async content(event, trigger, player) {
            var targets = game
                .filterPlayer((current) => {
                    if (current == player) return false;
                    return trigger.getl(current).cards2.length;
                })
                .sortBySeat(player);
            while (targets.length) {
                const target = targets.shift();
                const { bool } = await player
                    .chooseBool(`你可以令${get.translation(target)}摸一张牌`)
                    .set('ai', () => {
                        return get.attitude(player, target) > 0;
                    })
                    .forResult();
                if (bool) {
                    await target.draw();
                }
            }
        },
    },
    Europa_tanxian: {
        trigger: {
            player: 'phaseJieshuBegin',
            global: 'phaseZhunbeiBegin',
        },
        forced: true,
        filter(event, player) {
            if (event.name == 'phaseZhunbei') return event.player != player && player.isTurnedOver();
            return !player.isTurnedOver();
        },
        prompt2(event, player) {
            if (event.name == 'phaseJieshu') return `你可以将武将牌翻至背面`;
            return `你可以进行一次判定`;
        },
        getNum(player) {
            return player
                .getRoundHistory('gain', function (evt) {
                    return evt.parent.name == 'draw' && evt.getParent(2).name == 'Europa_tanxian';
                })
                .reduce((p, c) => p + c.cards.length, 0);
        },
        async content(event, trigger, player) {
            if (trigger.name == 'phaseJieshu') {
                player.turnOver();
                return;
            }
            const result = await player
                .judge(function (card) {
                    if (get.color(card) == 'red') return 2;
                    return -2;
                })
                .set('judge2', (result) => result.bool)
                .forResult();
            switch (result.suit) {
                case 'heart':
                    await player.draw(2);
                    break;
                case 'diamond':
                    await player.recover();
                    await player.draw();
                    break;
                case 'club':
                    if (
                        player.countCards('he', function (card) {
                            return lib.filter.cardDiscardable(card, player, 'Europa_tanxian');
                        })
                    )
                        await player.chooseToDiscard('he', true);
                    break;
                case 'spade':
                    await player.damage('nosource');
                    if (
                        player.countCards('he', function (card) {
                            return lib.filter.cardDiscardable(card, player, 'Europa_tanxian');
                        })
                    )
                        await player.chooseToDiscard('he', true);
                    break;
            }
        },
    },
    Europa_haishao: {
        mark: true,
        intro: {
            markcount(storage, player) {
                return get.info('Europa_tanxian').getNum(player);
            },
            content(storage, player) {
                return `其他角色计算与你的距离时+${get.info('Europa_tanxian').getNum(player)}`;
            },
        },
        mod: {
            globalTo(from, to, distance) {
                if (to.isTurnedOver()) return distance + get.info('Europa_tanxian').getNum(to);
            },
        },
    },
    Europa_futu: {
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            if (!player.isPhaseUsing() || player.isHealthy()) return false;
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
        async content(event, trigger, player) {
            player.recover(trigger.num);
            player.draw(trigger.num);
        },
    },
    Europa_zongcai: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return target != player;
        },
        filter(event, player) {
            return game.hasPlayer((target) => lib.skill.Europa_zongcai.filterTarget(null, player, target));
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const list = [];
            if (target.isDamaged()) list.push('选项一');
            if (target.countCards('he')) list.push('选项二');
            if (list.length) {
                const { control } = await player
                    .chooseControl(list)
                    .set('choiceList', [`令${get.translation(target)}回复1点体力`, `令${get.translation(target)}弃置一张牌`])
                    .set('prompt', '宗裁')
                    .set('ai', () => {
                        return '选项二';
                    })
                    .forResult();
                if (control == '选项一') {
                    await target.recover();
                } else {
                    if (target.countCards('he')) await target.chooseToDiscard('he', true);
                }
            }
            if (
                game.hasPlayer(function (current) {
                    return current != player;
                })
            ) {
                const { bool, targets } = await player
                    .chooseTarget(true, `对一名其他角色造成1点伤害`, function (card, player, target) {
                        return target != player;
                    })
                    .set('ai', (target) => {
                        return get.damageEffect(target, player, player);
                    })
                    .forResult();
                if (bool) {
                    player.line(targets[0]);
                    targets[0].damage();
                }
            }
        },
        ai: {
            order: 1,
            result: {
                target: -1,
            },
        },
    },
    Europa_zihang: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        zhuSkill: true,
        filter(event, player) {
            return player.hasZhuSkill('Europa_zihang');
        },
        async cost(event, trigger, player) {
            const { bool, targets } = await player
                .chooseTarget(`令一名其他基督教角色获得殖民探险机制`, function (card, player, target) {
                    if (target == player) return false;
                    return ['基督教', '天主教', '新教', '东正教'].some((info) => target.hasClan(info));
                })
                .set('ai', (target) => {
                    return get.attitude(player, target);
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { targets } };
        },
        async content(event, trigger, player) {
            const target = event.cost_data.targets[0];
            target.addSkill('Europa_zihang_exploration');
            player.addSkill('Europa_zihang_mark');
            player.markAuto('Europa_zihang_mark', [target]);
        },
        subSkill: {
            mark: {
                trigger: {
                    global: 'g_Europa_goldAfetr',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('Europa_zihang_mark').includes(trigger.player);
                },
                async content(event, trigger, player) {
                    player.unmarkAuto('Europa_zihang_mark', [trigger.player]);
                    const { bool, links } = await player.chooseButton(['你可以获得任意张牌', trigger.cards]).set('selectButton', [1, Infinity]).forResult();
                    if (bool) {
                        player.gain(links, 'gain2');
                    }
                },
            },
            exploration: {
                trigger: {
                    player: 'explorationContingencyFinallyEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                },
                ai: {
                    colonialExploration: true,
                },
            },
        },
    },
    _Europa_yishabeilaChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_sulaimanChooseAudio) return false;
            const list = ['Europa_yishabeilayishi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_sulaimanChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/西班牙bgm.mp3`;
        },
    },
    Europa_lueyang: {
        enable: 'chooseToUse',
        viewAs: {
            name: 'chuqibuyi',
        },
        filterCard: true,
        selectCard: 2,
        async precontent(event, trigger, player) {
            player
                .when('useCardAfter')
                .filter((event, player) => {
                    return event.skill == 'Europa_lueyang';
                })
                .then(() => {
                    if (!player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) return;
                    player.addTempSkill('Europa_lueyang_distance');
                    player.addMark('Europa_lueyang_distance', 1, false);
                    const targets = game.filterPlayer(function (current) {
                        return player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card && evt.player == current);
                    });
                    if (!targets.length) {
                        event.finish();
                        return;
                    }
                    player
                        .chooseTarget(`你可以获得一名角色的一张牌`, function (card, player, target) {
                            return get.event('targetxs').includes(target) && target.countGainableCards(player, 'he');
                        })
                        .set('targetxs', targets)
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target) <= 0;
                        });
                })
                .then(() => {
                    if (result.bool) {
                        player.line(result.targets);
                        player.gainPlayerCard(result.targets[0], 'he', true);
                    }
                });
        },
        subSkill: {
            distance: {
                mark: true,
                charlotte: true,
                intro: {
                    content: '你计算于其他角色距离时-#',
                },
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - from.countMark('Europa_lueyang_distance');
                    },
                },
            },
        },
    },
    Europa_jiezhen: {
        trigger: {
            global: 'showCardsEnd',
        },
        filter(event, player) {
            return get.itemtype(event.cards) == 'cards' && event.cards.some((card) => ['tao', 'jiu'].includes(card.name));
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton(['获得一张牌', trigger.cards], true)
                .set('ai', function (button) {
                    return get.value(button.link, _status.event.player);
                })
                .forResult();
            if (bool) {
                await player.gain(links, trigger.player, 'give');
                if (
                    player.countCards('h', function (card) {
                        return links.includes(card);
                    })
                ) {
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            prompt: `将此牌交给一名角色,托不为你,你摸一张牌`,
                            filterCard(card) {
                                return links.includes(card);
                            },
                            forced: true,
                            complexSelect: true,
                            ai1(card) {
                                if (ui.selected.cards.length && card.name != 'du') return 0;
                                if (card.name == 'du') return 999;
                                return 5 - get.value(card);
                            },
                            ai2(target) {
                                if (!ui.selected.cards.length) return 0;
                                const player = get.event('player'),
                                    att = get.attitude(player, target);
                                if (ui.selected.cards[0].name == 'du') {
                                    if (!target.hasSkillTag('nodu')) return -att;
                                    return -0.00001 * att;
                                }
                                return att;
                            },
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets);
                        await player.give(cards, targets[0]);
                        if (targets[0] != player) player.draw();
                    }
                }
            }
        },
    },
    Europa_yuanhang: {
        trigger: {
            player: 'chooseColonialExplorationEnd',
        },
        forced: true,
        filter(event, player) {
            return event.result.exploration == 'Europa_America';
        },
        async content(event, trigger, player) {
            player.addSkill('g_Europa_gold');
            player.addToExpansion(get.cards(), player, 'giveAuto').gaintag.add('Europa_gold');
        },
        ai: {
            colonialExploration: true,
            Europa_America: 2,
        },
        init: (player) => player.addSkill('colonialExploration'),
    },
    Europa_zhitu: {
        group: ['Europa_zhitu_exploration', 'Europa_zhitu_draw'],
        subSkill: {
            exploration: {
                inherit: 'Europa_haitu_skill_exploration',
                filter(event, player) {
                    if (!player.hasEmptySlot(5)) return false;
                    return lib.skill.Europa_haitu_skill_exploration.filter(event, player);
                },
            },
            draw: {
                inherit: 'Europa_haitu_skill_draw',
                filter(event, player) {
                    if (!player.hasEmptySlot(5)) return false;
                    return lib.skill.Europa_haitu_skill_draw.filter(event, player);
                },
            },
        },
    },
    Europa_miehuan: {
        trigger: {
            player: 'explorationContingencyBegin',
        },
        forced: true,
        filter(event, player) {
            return (
                event.num == 2 &&
                player.countCards('he', function (card) {
                    return get.subtype(card) == 'equip1';
                })
            );
        },
        async content(event, trigger, player) {
            const result = await player
                .chooseToDiscard('he', function (card) {
                    return get.subtype(card) == 'equip1';
                })
                .set('ai', function (card) {
                    return 7 - get.value(card);
                })
                .forResult();
            if (result.bool) {
                player.addSkill('g_Europa_gold');
                player.addToExpansion(get.cards(), player, 'giveAuto').gaintag.add('Europa_gold');
                trigger.goto(0);
            }
        },
    },
    Europa_xiayang: {
        trigger: {
            player: ['chooseColonialExplorationBegin1', 'explorationContingency_12Begin'],
        },
        forced: true,
        getLimit: 5,
        filter(event, player, name) {
            if (name == 'chooseColonialExplorationBegin1') return event.exploration == 'Europa_Asia';
            return true;
        },
        async content(event, trigger, player) {
            if (event.triggername == 'chooseColonialExplorationBegin1') trigger.num = 3;
            else trigger.draw += 2;
        },
        ai: {
            colonialExploration: true,
            Europa_Asia: 3,
        },
    },
    Europa_yangen: {
        trigger: {
            global: 'phaseUseBegin',
        },
        forced: true,
        filter(event, player) {
            if (event.player == player) return false;
            return player.getExpansions('colonialExploration').length >= 3;
        },
        async content(event, trigger, player) {
            const { bool, links } = await player.chooseButton([`交给${get.translation(trigger.player)}一张<财>`, player.getExpansions('colonialExploration')]).forResult();
            if (bool) {
                await player.give(links, trigger.player);
                if (trigger.player.countGainableCards(player, 'hej')) {
                    const result = await player.gainPlayerCard(trigger.player, 'hej', true).forResult();
                    if (get.type(result.links[0]) == 'equip') {
                        player.chooseUseTarget(result.links[0]);
                    }
                }
            }
        },
    },
    Europa_tianwei: {
        enable: 'phaseUse',
        mark: true,
        limited: true,
        selectTarget: -1,
        filterTarget(card, player, target) {
            return target != player && target.countCards('h');
        },
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const targets = event.targets;
            while (targets.length) {
                const target = targets.shift();
                const { bool, cards } = await target
                    .chooseCard('h', true)
                    .set('ai', function (card) {
                        return 7 - get.value(card);
                    })
                    .forResult();
                if (bool) {
                    await player.addToExpansion(cards, target, 'giveAuto', 'log').gaintag.add('colonialExploration');
                }
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    return -1;
                },
            },
        },
    },
    Europa_huoji: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return game.hasPlayer(function (current) {
                return (
                    player.countCards('hes', function (card) {
                        return lib.skill.Europa_huoji.filterCard(card);
                    }) && lib.skill.Europa_huoji.filterTarget(null, player, current)
                );
            });
        },
        filterCard(card) {
            return get.subtype(card) == 'equip1';
        },
        viewAs: {
            name: 'sha',
            nature: 'stab',
            storage: {
                Europa_huoji: true,
            },
        },
        filterTarget(card, player, target) {
            return target.getHp() == 1;
        },
        async precontent(event, trigger, player) {
            player
                .when({ source: 'damageSource' })
                .filter((event, player) => {
                    return event.card && event.card.storage && event.card.storage.Europa_huoji;
                })
                .then(() => {
                    trigger.player.die().set('source', player).set('reason', {
                        source: player,
                    });
                    player.drawTo(player.maxHp);
                    player.recoverTo(player.maxHp);
                    player.addTempSkill('Europa_huoji_effect');
                });
        },
        ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
                if (arg && arg.name == 'sha' && arg.card && arg.card.storage && arg.card.storage.Europa_huoji) return true;
                return false;
            },
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    cardUsable(card, player) {
                        if (card.name == 'sha') return Infinity;
                    },
                    targetInRange(card, player, target) {
                        if (card.name == 'sha') return true;
                    },
                },
            },
        },
    },
    Europa_shenyou: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            return (event.card && event.card.name == 'sha') || (get.tag(event.card, 'damage') && get.type(event.card) == 'trick');
        },
        getNum(player) {
            let num = 1;
            const history = game.getAllGlobalHistory();
            for (var i = history.length - 1; i >= 0; i--) {
                const evt = history[i].everything;
                for (let j = evt.length - 1; j >= 0; j--) {
                    if (evt[j].name == 'die' && evt[j].source && evt[j].source == player) num++;
                }
            }
            return num;
        },
        async content(event, trigger, player) {
            trigger.baseDamage += get.info(event.name).getNum(player);
        },
        mark: true,
        intro: {
            content(storage, player) {
                return `你使用【杀【和伤害锦囊牌的基础伤害+${get.info('Europa_shenyou').getNum(player)}`;
            },
        },
        group: 'Europa_shenyou_dying',
        subSkill: {
            dying: {
                trigger: {
                    global: 'dying',
                },
                forced: true,
                filter(event, player) {
                    let evt = event.parent;
                    if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'Europa_shenyou_dying' && evt.targets.includes(event.player))) return false;
                    return evt.name == 'damage' && evt.source && evt.source == player;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.player.recoverTo(1);
                },
            },
        },
    },
    Europa_rongguan: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'dieBegin',
        },
        forced: true,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_rongguan')) return false;
            if (_status.currentPhase && _status.currentPhase != player) return false;
            return event.source && event.source.hasClan('原住民');
        },
        logTarget: 'source',
        async content(event, trigger, player) {
            trigger.source = player;
        },
    },
    Europa_hemeng: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return target.countCards('h');
        },
        selectTarget: [1, 2],
        complexTarget: true,
        multitarget: true,
        async content(event, trigger, player) {
            const targets = event.targets;
            while (targets.length) {
                const target = targets.shift();
                if (target.countCards('h')) {
                    const { bool, cards } = await target.chooseCard('h', true, `将一张手牌交给${get.translation(player)}`).forResult();
                    if (bool) {
                        await target.give(cards, player);
                        target.addTempSkill('Europa_hemeng_effect');
                        if (target.hasClan('原住民')) target.setStorage('Europa_hemeng_effect', true);
                    }
                }
            }
        },
        ai: {
            order: 1,
            result: {
                target: -1,
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                _priority: 15,
                filter(event, player) {
                    return !player.storage.Europa_hemeng_effect ? event.card : get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    trigger.parent.targets.remove(player);
                },
                mark: true,
                intro: {
                    content(storage, player) {
                        return `当你称为${player.storage.Europa_hemeng_effect ? '伤害' : '卡牌'}的目标后,取消之`;
                    },
                },
                ai: {
                    effect: {
                        target_use(card, player, target, current) {
                            if (target.storage.Europa_hemeng_effect ? get.tag(card, 'damage') : card) {
                                return 'zeroplayertarget';
                            }
                        },
                    },
                },
            },
        },
    },
    Europa_shouneng: {
        trigger: {
            player: 'useCardAfter',
        },
        forced: true,
        filter(event, player) {
            if (get.type(event.card) != 'trick') return false;
            if (
                player.getAllHistory('custom', function (evt) {
                    return evt.Europa_shouneng_name == event.card.name;
                }).length
            )
                return false;
            return event.cards && event.cards.filterInD().length;
        },
        async content(event, trigger, player) {
            const result = await player
                .chooseTarget(get.prompt('Europa_shouneng'), '将' + get.translation(trigger.cards) + '交给一名其他角色', function (card, player, target) {
                    return target != player;
                })
                .set('ai', function (target) {
                    if (target.hasJudge('lebu')) return 0;
                    let att = get.attitude(_status.event.player, target),
                        name = trigger.cards[0].name;
                    if (att < 3) return 0;
                    if (target.hasSkillTag('nogain')) att /= 10;
                    if (name === 'sha' && target.hasSha()) att /= 5;
                    if (name === 'wuxie' && target.needsToDiscard(trigger.cards)) att /= 5;
                    return att / (1 + get.distance(player, target, 'absolute'));
                })
                .forResult();
            if (result.bool) {
                result.targets[0].gain(trigger.cards.filterInD(), 'gain2');
                player.getHistory('custom').push({ Europa_shouneng_name: trigger.card.name });
            }
        },
    },
    Europa_minsheng: {
        trigger: {
            player: 'useCard',
        },
        filter(event, player) {
            let card = event.card;
            return get.subtype(card) == 'equip3' || get.subtype(card) == 'equip4' || get.subtype(card) == 'equip6';
        },
        async content(event, trigger, player) {
            player.chooseDrawRecover(1, 1, true);
        },
    },
    Europa_xunan: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'explorationContingencyAccomplishBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            const list = lib.tradeGoodsCardList.slice(0);
            while (list.length) {
                let info = list.shift();
                if (player.getExpansions(info).length) {
                    player.addToExpansion(get.cards(), player, 'giveAuto').gaintag.add(info);
                }
            }
        },
        ai: {
            colonialExploration: true,
        },
        subSkill: {
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.getAllHistory('useSkill', (evt) => evt.skill == 'Europa_xunan').length);
                    },
                },
            },
        },
    },
    Europa_libao: {
        audio: 'ext:欧陆风云/audio/skill:2',
        derivation: 'Europa_weimin',
        trigger: {
            player: 'explorationContingencyBegin',
        },
        forced: true,
        limited: true,
        filter(event, player) {
            return event.num == 3 || event.num == 6;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            trigger.directContingency = true;
            player.changeHujia(2, null, true);
            player.changeSkills(['Europa_weimin'], ['Europa_xunan']);
        },
    },
    Europa_yuyong: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'changeHujiaEnd',
        },
        popup: false,
        zhuSkill: true,
        filter(event, player) {
            return event.num > 0 && player.hasZhuSkill('Europa_yuyong');
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), lib.filter.notMe)
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.changeHujia(trigger.num, null, true);
        },
    },
    Europa_weimin: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('h', { subtype: 'equip2' });
        },
        filterCard(card) {
            return get.subtype(card) == 'equip2';
        },
        check(card) {
            return 7 - get.value(card);
        },
        position: 'hes',
        async content(event, trigger, player) {
            await player.changeHujia(2, null, true);
            await player.draw(2);
            if (event.cards[0].name == 'Europa_pabao') {
                const { bool } = await player.chooseBool(`你可以收回${get.translation(event.cards[0])}`).forResult();
                if (bool) player.gain(event.cards[0]);
            }
        },
        ai: {
            order: 1,
            result: {
                player: 1,
            },
        },
    },
    Europa_tiaoting: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        dutySkill: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            if (
                game.hasPlayer(function (target) {
                    return target != player && target.hp <= player.hp;
                })
            ) {
                const { bool, targets } = await player
                    .chooseTarget(true, get.prompt2(event.name), function (card, player, target) {
                        return target != player && target.hp <= player.hp;
                    })
                    .set('ai', (target) => {
                        const player = get.player();
                        let att = get.attitude(player, target);
                        if (att == 0) att = Math.random();
                        if (target.hasSkillTag('maixie')) att /= 2;
                        if (target.hasHistory('damage')) return 0;
                        return att;
                    })
                    .forResult();
                if (bool) {
                    targets[0].addAdditionalSkill(`Europa_tiaoting_${player.playerid}`, 'Europa_tiaoting_mark');
                }
            }
        },
        onremove(player, skill) {
            const targets = game.filterPlayer();
            for (const target of targets) {
                target.removeAdditionalSkill(`Europa_tiaoting_${player.playerid}`);
            }
        },
        group: ['Europa_tiaoting_use', 'Europa_tiaoting_achieve', 'Europa_tiaoting_fail'],
        subSkill: {
            use: {
                enable: 'phaseUse',
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length) {
                        return target != player && target.hp <= player.hp;
                    }
                    return target.additionalSkills && target.additionalSkills['Europa_tiaoting_' + player.playerid];
                },
                async content(event, trigger, player) {
                    const targets = event.targets;
                    targets[0].removeAdditionalSkill('Europa_tiaoting_' + player.playerid);
                    targets[1].addAdditionalSkill('Europa_tiaoting_' + player.playerid, 'Europa_tiaoting_mark');
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return get.sgnAttitude(player, target) * Math.random();
                        },
                    },
                },
            },
            mark: {
                mark: true,
                marktext: '守护',
                intro: {
                    content: '已获得<守护>标记',
                },
            },
            achieve: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        if (target.hasHistory('damage')) return false;
                        return target.additionalSkills && target.additionalSkills[`Europa_tiaoting_${player.playerid}`];
                    });
                },
                async content(event, trigger, player) {
                    player.awakenSkill('Europa_tiaoting');
                    get.info('Europa_tiaoting').onremove(player, 'Europa_tiaoting');
                    game.log(player, '成功完成使命');
                    game.log(player, '修改了技能', '#g【舍生】');
                },
            },
            fail: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                filter(event, player) {
                    return event.player.additionalSkills && event.player.additionalSkills[`Europa_tiaoting_${player.playerid}`] && event.player.getHistory('damage').reduce((p, c) => p + c.num, 0) > 2;
                },
                async content(event, trigger, player) {
                    player.awakenSkill('Europa_tiaoting');
                    game.log(player, '使命失败');
                    get.info('Europa_tiaoting').onremove(player, 'Europa_tiaoting');
                    await player.draw(Math.min(player.maxHp, 20));
                    player.turnOver();
                },
            },
        },
    },
    Europa_shesheng: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'damageBegin',
        },
        filter(event, player) {
            if (event.player == player) return false;
            if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'Europa_tiaoting_achieve')) return true;
            return !player.getStorage('Europa_shesheng_used').includes(event.player);
        },
        logTarget: 'player',
        async cost(event, trigger, player) {
            const target = trigger.player;
            const list = [
                ['下个摸牌阶段多模一张牌', `令${get.translation(trigger.source) || '伤害来源'}弃置一张牌`].map((item, i) => {
                    return [i, item]; //QQQ
                }),
                'textbutton',
            ];

            const { bool, links } = await player
                .chooseButton([`舍生:请选择至多${get.cnNumber(target.hasClan('原住民') ? 2 : 1)}项`, list])
                .set('filterButton', (button) => {
                    const player = get.player();
                    return !player.getStorage('Europa_shesheng_used').includes(button.link);
                })
                .set('selectButton', () => {
                    const target = get.event().getTrigger().player;
                    return [1, target.hasClan('原住民') ? 2 : 1];
                })
                .set('ai', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.damageEffect(trigger.player, trigger.source, player) > 0 || (get.attitude(player, trigger.player) > 0 && get.damageEffect(trigger.player, trigger.source, trigger.player) > 0)) return 0;
                    if (get.attitude(player, event.player) <= 0) return 0;
                    if (player.hp + player.hujia - trigger.num <= 0) return 0;
                    if (button.link == 1 && (!trigger.source || get.attitude(player, trigger.source) > 0 || trigger.source.countCards('he'))) return 0;
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_shesheng_used');
            player.markAuto('Europa_shesheng_used', trigger.player);
            trigger.player = player;
            game.log('受伤角色改为', player);
            if (event.cost_data.links.includes(0)) {
                player
                    .when('phaseDrawBegin2')
                    .filter((event) => !event.numFixed)
                    .then(() => {
                        trigger.num++;
                    });
            }
            if (event.cost_data.links.includes(1)) {
                if (trigger.source?.countCards('he')) {
                    await trigger.source.chooseToDiscard('he', true);
                }
            }
        },
        subSkill: {
            used: {
                charlotte: true,
            },
        },
    },
    Europa_luwang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    let att = get.attitude(player, target);
                    if (get.distance(player, target) == 2) att += 5;
                    return -att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_luwang_att');
            player.markAuto('Europa_luwang_att', event.targets);
        },
        group: 'Europa_luwang_damage',
        subSkill: {
            damage: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw();
                    player.addTempSkill('Europa_luwang_def', { player: 'phaseJieshuBegin' });
                    player.addMark('Europa_luwang_def', 1, false);
                    player.addTip('Europa_luwang_def', get.translation('Europa_luwang') + player.countMark('Europa_luwang'));
                },
            },
            att: {
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        if (from.getStorage('Europa_luwang_att').includes(to)) return distance - 1;
                    },
                },
            },
            def: {
                charlotte: true,
                mod: {
                    globalTo(from, to, distance) {
                        return distance + to.countMark('Europa_luwang_def');
                    },
                },
                mark: true,
                intro: {
                    content: '其他角色计算与你的距离时+#',
                },
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete player.storage[skill];
                },
            },
        },
    },
    Europa_baiyang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 3,
        filterCard(card) {
            return get.color(card) == 'red';
        },
        async content(event, trigger, player) {
            const result = await player.judge().forResult();
            if (result.color == 'red') {
                player.draw(2);
            } else if (result.color == 'black') {
                const { bool, targets } = await player
                    .chooseTarget(`弃置一名角色的一张牌`, function (card, player, target) {
                        return get.distance(player, target) <= 1 && target.countCards('he');
                    })
                    .forResult();
                if (bool) {
                    player.line(targets);
                    player.discardPlayerCard(targets[0], 'he', true);
                } else {
                    if (player.countCards('he')) {
                        player.chooseToDiscard('he', true);
                    }
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
    Europa_riyou: {
        audio: 'ext:欧陆风云/audio/skill:2',
        global: 'Europa_riyou_global',
        zhuSkill: true,
        subSkill: {
            global: {
                enable: 'phaseUse',
                discard: false,
                lose: false,
                delay: false,
                line: true,
                prepare(cards, player, targets) { },
                prompt() {
                    var player = _status.event.player;
                    var list = game.filterPlayer(function (target) {
                        return target != player && target.hasZhuSkill('Europa_riyou', player);
                    });
                    var str = '将一张红色牌交给' + get.translation(list);
                    if (list.length > 1) str += '中的一人';
                    return str;
                },
                filter(event, player) {
                    if (!player.hasClan('原住民')) return false;
                    if (
                        !game.hasPlayer(function (target) {
                            return target != player && target.hasZhuSkill('Europa_riyou', player) && !target.hasSkill('Europa_riyou_used');
                        })
                    )
                        return false;
                    return player.hasCard(function (card) {
                        return lib.skill.Europa_riyou_global.filterCard(card, player);
                    }, 'h');
                },
                filterCard(card) {
                    return get.color(card) == 'red';
                },
                log: false,
                visible: true,
                filterTarget(card, player, target) {
                    return target != player && target.hasZhuSkill('Europa_riyou', player) && !target.hasSkill('Europa_riyou_used');
                },
                content() {
                    player.give(cards, target);
                    target.addTempSkill('Europa_riyou_used', 'phaseUseEnd');
                },
                ai: {
                    expose: 0.3,
                    order: 10,
                    result: {
                        target: 5,
                    },
                },
            },
            used: {
                charlotte: true,
            },
        },
    },
    _Europa_yinjiaChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_sulaimanChooseAudio) return false;
            const list = ['Europa_pachakuteke'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_sulaimanChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/印加bgm.mp3`;
        },
    },
    Europa_lihang: {
        enable: 'phaseUse',
        usable: 2,
        filterCard: true,
        check(card) {
            return 7 - get.value(card);
        },
        filterTarget(card, player, target) {
            return !target.hasSkillTag('colonialExploration');
        },
        async content(event, trigger, player) {
            event.targets[0].addSkill('Europa_lihang_exploration');
        },
        ai: {
            order: 1,
            result: {
                target: 2,
            },
        },
        group: 'Europa_lihang_colonial',
        subSkill: {
            colonial: {
                trigger: {
                    global: 'explorationContingencyExchangeEnd',
                },
                filter(event, player) {
                    return event.exchangeTradeGoods.length >= 2;
                },
                prompt2: '你可以摸两张牌',
                async content(event, trigger, player) {
                    player.draw(2);
                },
            },
            exploration: {
                trigger: {
                    player: 'explorationContingencyFinallyEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                },
                ai: {
                    colonialExploration: true,
                },
            },
        },
    },
    Europa_dingyang: {
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            if (!player.getEquips('Europa_kelakefanchuan').length && player.hasEmptySlot(1)) {
                var card = get.cardPile(function (card) {
                    return card.name == 'Europa_kelakefanchuan' && !player.getEquips(1).includes(card);
                });
                if (card) {
                    await player.gain(card);
                    player.equip(card);
                }
            } else if (player.getEquips('Europa_kelakefanchuan').length) {
                var card = get.cardPile(function (card) {
                    return card.name == 'sha' && card.nature == 'fire';
                });
                if (card) {
                    player.gain(card, 'gain2').gaintag.add('Europa_dingyang');
                    player.addSkill('Europa_dingyang_effect');
                }
            }
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.hasHistory('lose', function (evt) {
                        if (evt.parent != event) return false;
                        return Object.values(evt.gaintag_map).flat().includes('Europa_dingyang');
                    });
                },
                async content(event, trigger, player) {
                    trigger.card._Europa_dingyang = true;
                },
                ai: {
                    unequip: true,
                    unequip: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.name == 'sha' && arg.card && arg.card._Europa_dingyang) return true;
                        return false;
                    },
                },
            },
        },
    },
    Europa_yuanshe: {
        mod: {
            cardUsable(card, player, num) {
                if (
                    card.name == 'sha' &&
                    game
                        .filterPlayer((target) => {
                            return target != player;
                        })
                        .every((target) => player.inRange(target))
                )
                    return num + 1;
            },
        },
    },
    Europa_buluo: {
        zhuSkill: true,
        limited: true,
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer(function (current) {
                return lib.skill.Europa_buluo.filterTarget(null, player, current);
            });
        },
        filterTarget(card, player, target) {
            return target.hasSkillTag('colonialExploration') && target.hasSkill('colonialExploration_sailing');
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            const list = lib.tradeGoodsCardList.slice(0);
            while (list.length) {
                let info = list.shift();
                target.addToExpansion(get.cards(4), target, 'giveAuto').gaintag.add(info);
            }
        },
        ai: {
            order: 1,
            result: {
                target: 4,
            },
        },
    },
    Europa_jihang: {
        group: ['Europa_jihang_begin', 'Europa_jihang_end'],
        subSkill: {
            begin: {
                trigger: {
                    player: 'chooseColonialExplorationBegin2',
                },
                forced: true,
                filter(event, player) {
                    return true;
                },
                async content(event, trigger, player) {
                    trigger.num -= 1;
                },
            },
            end: {
                trigger: {
                    player: 'explorationContingencyAccomplishBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.addToExpansion(get.cards(2), player, 'giveAuto').gaintag.add('Europa_gold');
                },
            },
        },
        ai: {
            colonialExploration: true,
        },
    },
    Europa_huanyou: {
        trigger: {
            player: 'explorationContingencyAccomplishEnd',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            return (
                player
                    .getAllHistory('custom', (evt) => evt.Europa_exploration)
                    .map((evt) => evt.Europa_exploration)
                    .toUniqued().length == 3
            );
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const list = lib.tradeGoodsCardList.slice(0);
            while (list.length) {
                let info = list.shift();
                if (player.getExpansions(info).length) {
                    player.addToExpansion(get.cards(player.getExpansions(info).length), player, 'giveAuto').gaintag.add(info);
                }
            }
            player.gainMaxHp(2);
            player.addSkills('Europa_wangzhu');
        },
    },
    Europa_wangzhu: {
        trigger: {
            player: 'explorationContingencyBegin',
        },
        filter(event, player) {
            return event.num == 2 || event.num == 4;
        },
        async content(event, trigger, player) {
            trigger.skipContingency = true;
        },
    },
    Europa_zhangchao: {
        trigger: {
            global: 'phaseBegin',
        },
        filter(event, player) {
            if (event.player == player) return false;
            return !player.isTempBanned('Europa_zhangchao');
        },
        check(event, player) {
            return get.attitude(player, event.player) < 0; //QQQ
        },
        async content(event, trigger, player) {
            player.tempBanSkill('Europa_zhangchao', 'roundStart', false);
            trigger.player.skip('phaseUse');
            trigger.player.skip('phaseDiscard');
            const list = ['摸一张牌', `令${get.translation(player)}失去2点体力`];
            const { control } = await trigger.player
                .chooseControl(list)
                .set('ai', () => {
                    return list.randomGet();
                })
                .forResult();
            if (control == '摸一张牌') {
                trigger.player.draw();
            } else {
                player.loseHp(2);
            }
        },
    },
    Europa_qingquan: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return target.countGainableCards(player, 'he');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, cards } = await player.gainPlayerCard(target, 'he', [1, 3], true).forResult();
            if (bool) {
                player.addTempSkill('Europa_qingquan_effect');
                player.markAuto('Europa_qingquan_effect', [target]);
                player
                    .when('phaseUseAfter')
                    .then(() => {
                        if (player.hasHistory('sourceDamage')) return;
                        const giveCards = player.getCards('he', function (card) {
                            return cards.includes(card);
                        });
                        if (target && target.isIn() && giveCards.length) {
                            player.give(giveCards, target);
                        }
                    })
                    .vars({ target: target, cards: cards });
            }
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    playerEnabled(card, player, target) {
                        if (player.getStorage('Europa_qingquan_effect').includes(target)) return false;
                    },
                },
            },
        },
    },
    Europa_yanzheng: {
        trigger: {
            global: 'dying',
        },
        check(event, player) {
            if (get.attitude(player, event.player) < 4) return false;
            if (player.countCards('hs', (card) => player.canSaveCard(card, event.player)) >= 1 - event.player.hp) return false;
            if (event.player == player || event.player == get.zhu(player)) return true;
            return player.maxHp > 2;
        },
        async content(event, trigger, player) {
            await player.loseMaxHp();
            trigger.player.recoverTo(1);
        },
    },
    Europa_zongjiu: {
        mod: {
            cardname(card, player) {
                if (card.name == 'sha') return 'jiu';
            },
            cardUsable(card, player) {
                if (card.name == 'jiu') return Infinity;
            },
        },
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            var next = player.chooseToUse();
            next.set('openskilldialog', `${get.prompt('Europa_zongjiu')}将一张【酒】当【乐不思蜀】对自己使用=`);
            next.set('norestore', true);
            next.set('_backupevent', 'Europa_zongjiu_backup');
            next.set('addCount', false);
            next.set('custom', {
                add: {},
                replace: { window() { } },
            });
            next.backup('Europa_zongjiu_backup');
        },
        subSkill: {
            backup: {
                viewAs: {
                    name: 'lebu',
                },
                position: 'hes',
                filterCard(card, player, event) {
                    return card.name == 'jiu' && player.canAddJudge({ name: 'lebu', cards: [card] });
                },
                selectTarget: -1,
                filterTarget(card, player, target) {
                    return player == target;
                },
            },
        },
    },
    Europa_lanzui: {
        trigger: {
            player: 'useCard',
        },
        filter(event, player) {
            return event.card && event.card.name == 'jiu';
        },
        async content(event, trigger, player) {
            player.recover();
            player.addTempSkill('Europa_lanzui_effect');
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    playerEnabled(card, player, target) {
                        if (player != target) return false;
                    },
                },
            },
        },
    },
    Europa_yiquan: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        filter(event, player) {
            return player.getHistory('skipped').includes('phaseUse') || player.getHistory('useCard', (evt) => evt.card.name == 'jiu').length >= 3;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            await player.drawTo(player.maxHp);
            const { bool, cards, targets } = await player
                .chooseCardTarget({
                    prompt: '你可以将任意张牌交给一名其他角色',
                    filterCard: true,
                    position: 'he',
                    selectCard() {
                        return [0, Infinity];
                    },
                    filterTarget(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    ai1(card) {
                        if (!_status.event.nogive || ui.selected.cards.length) return 0 - get.value(card);
                        return 1 / Math.max(1, get.value(card));
                    },
                    ai2(target) {
                        return (get.attitude(player, target) - 0.1) * (ui.selected.cards.length ? 1 : -1);
                    },
                    nogive: !game.hasPlayer(function (current) {
                        return current != player && get.attitude(player, current) <= 0 && current.countCards('h') > 0;
                    }),
                })
                .forResult();
            if (bool) {
                player.line(targets);
                player.give(cards, targets[0]);
            }
        },
    },
    Europa_xiangzuo: {
        trigger: {
            global: 'phaseBegin',
        },
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_xiangzuo')) return false;
            return event.player != player && (event.player.hasClan('土耳其') || event.player.group == 'Europa_Türkiye');
        },
        check(event, player) {
            return player.maxHp > 2 && get.attitude(player, target) > 4;
        },
        async content(event, trigger, player) {
            await player.loseMaxHp();
            trigger.player.draw(3);
            trigger.player.addTempSkill('Europa_xiangzuo_effect');
            trigger.player.addMark('Europa_xiangzuo_effect', 1, false);
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += player.countMark('Europa_xiangzuo_effect'));
                    },
                },
            },
        },
    },
    Europa_diewang: {
        global: 'Europa_diewang_global',
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        async content(event, trigger, player) {
            const targets = game.filterPlayer(function (target) {
                return target.countCards('h');
            });
            targets.forEach((target) => {
                target._Europa_diewang = target.getCards('h').randomGets(1);
            });
        },
        mark: true,
        intro: {
            mark(dialog, storage, player) {
                const targets = game.filterPlayer(function (target) {
                    return target != player && target.countCards('h');
                });
                targets.forEach((target) => {
                    dialog.add('<div class="text center">' + get.translation(target) + '的手牌区</div>');
                    if (!target._Europa_diewang) {
                        target._Europa_diewang = target.getCards('h').randomGets(1);
                    }
                    dialog.add(target._Europa_diewang);
                });
            },
        },
        subSkill: {
            global: {
                trigger: {
                    player: ['loseAfter'],
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                _priority: 114,
                filter(event, player) {
                    var evt = event.getl(player);
                    if (!evt || !evt.hs || !evt.hs.length) return false;
                    if (!player.countCards('h')) return false;
                    if (!player._Europa_diewang) player._Europa_diewang = player.getCards('h').randomGets(1);
                    return evt.hs.includes(player._Europa_diewang[0]);
                },
                async content(event, trigger, player) {
                    player._Europa_diewang = player.getCards('h').randomGets(1);
                },
            },
        },
    },
    Europa_zhenxing: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            const { control } = await player
                .chooseControl(lib.suit)
                .set('prompt', '请选择一个花色')
                .set('ai', () => {
                    return lib.suit.randomGet();
                })
                .forResult();
            const { bool, links } = await player
                .chooseButton([[lib.inpile.map((info) => ['', '', info]), 'vcard']])
                .set('ai', (button) => {
                    switch (button.link[2]) {
                        case 'wuxie':
                            return 5 + Math.random();
                        case 'sha':
                            return 5 + Math.random();
                        case 'tao':
                            return 4 + Math.random();
                        case 'jiu':
                            return 3 + Math.random();
                        case 'lebu':
                            return 3 + Math.random();
                        case 'shan':
                            return 4.5 + Math.random();
                        case 'wuzhong':
                            return 4 + Math.random();
                        case 'shunshou':
                            return 2.7 + Math.random();
                        case 'nanman':
                            return 2 + Math.random();
                        case 'wanjian':
                            return 1.6 + Math.random();
                        default:
                            return 1.5 + Math.random();
                    }
                })
                .forResult();
            if (bool) {
                const { bool, targets } = await player
                    .chooseTarget(get.prompt2(event.name), function (card, player, target) {
                        return target != player;
                    })
                    .set('ai', (target) => {
                        const player = get.player();
                        let att = get.attitude(player, target);
                        if (att > 0) att /= 5;
                        if (att == 0) att = Math.random();
                        return -att;
                    })
                    .set('animate', false)
                    .forResult();
                if (bool) {
                    player.addSkill('Europa_zhenxing_cisha');
                    if (!player.storage.Europa_zhenxing_cisha) player.storage.Europa_zhenxing_cisha = [];
                    player.storage.Europa_zhenxing_cisha.push([control, links[0][2], targets[0]]);
                }
            }
        },
        ai: {
            order: 10,
            result: {
                player: 1,
            },
        },
        subSkill: {
            cisha: {
                trigger: {
                    global: ['useCard', 'respond', 'phaseEnd'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (event.triggername == 'phaseEnd') {
                        return (
                            player.storage.Europa_zhenxing_cisha &&
                            player.storage.Europa_zhenxing_cisha.some((info) => {
                                return info[2] == event.player;
                            })
                        );
                    }
                    if (!event.card) return false;
                    return (
                        player.storage.Europa_zhenxing_cisha &&
                        player.storage.Europa_zhenxing_cisha.some((info) => {
                            return info[2] == event.player && event.card && info[1] == event.card.name && event.card.suit == info[0];
                        })
                    );
                },
                async content(event, trigger, player) {
                    if (event.triggername == 'phaseEnd') {
                        for (var i = 0; i < player.storage.Europa_zhenxing_cisha.length; i++) {
                            if (player.storage.Europa_zhenxing_cisha[i][2] == trigger.player) player.storage.Europa_zhenxing_cisha.splice(i--, 1);
                        }
                        if (!player.getStorage('Europa_zhenxing_cisha').length) player.removeSkill(event.name);
                    } else {
                        player.chooseUseTarget({ name: 'sha', nature: 'stab' }, trigger.player);
                    }
                },
            },
        },
    },
    Europa_shengyan: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'phaseBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            const result = await player.chooseButton(['盛宴', [['taoyuan', 'wugu'], 'vcard'], '你可以将一张手牌当做弃置一张牌使用']).forResult();
            if (result.bool) {
                game.broadcastAll(function (name) {
                    lib.skill.Europa_shengyan_backup.viewAs = {
                        name: name,
                        storage: { Europa_shengyan: true },
                    };
                    lib.skill.Europa_shengyan_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                }, result.links[0][2]);
                var next = player.chooseToUse();
                next.set('openskilldialog', `${get.prompt2('Europa_shengyan')}`);
                next.set('norestore', true);
                next.set('_backupevent', 'Europa_shengyan_backup');
                next.set('addCount', false);
                next.set('custom', {
                    add: {},
                    replace: { window() { } },
                });
                next.backup('Europa_shengyan_backup');
            }
        },
        subSkill: {
            backup: {
                filterCard(card, player, event) {
                    return get.itemtype(card) == 'card';
                },
                async precontent(event, trigger, player) {
                    player
                        .when('useCardAfter')
                        .filter((event, player) => {
                            return event.card && event.card.storage && event.card.storage.Europa_shengyan;
                        })
                        .then(() => {
                            var next = game.createEvent(event.name + '_view');
                            next.player = player;
                            next._trigger = trigger;
                            next.setContent(async (event, trigger, player) => {
                                const targets = game
                                    .filterPlayer(function (target) {
                                        if (target == player) return false;
                                        return target.countCards('h') && trigger.targets.includes(target);
                                    })
                                    .sortBySeat(player);
                                do {
                                    const target = targets.shift();
                                    if (!target.countCards('h')) continue;
                                    const { bool, cards } = await player.choosePlayerCard(target, 'h', true).forResult();
                                    if (bool) {
                                        await player.chooseControl('ok').set('dialog', [get.translation(target) + '的一张手牌', cards]);
                                    }
                                } while (targets.length);
                            });
                        });
                },
            },
        },
    },
    Europa_wangdong: {
        trigger: {
            player: ['chooseColonialExplorationBegin1', 'explorationContingencyAccomplishBegin'],
        },
        forced: true,
        getLimit: 4,
        filter(event, player, name) {
            if (name == 'chooseColonialExplorationBegin1') return event.exploration == 'Europa_Asia';
            return player.getExpansions('colonialExploration').length >= 2;
        },
        async content(event, trigger, player) {
            const length = player.getAllHistory('custom', (evt) => evt.explorationContingencyFinallyEnd).length;
            const num = Math.min(get.info(event.name).getLimit, length);
            if (event.triggername == 'chooseColonialExplorationBegin1') {
                trigger.num -= num;
            } else {
                player.addToExpansion(get.cards(2), player, 'giveAuto').gaintag.add('Europa_gold');
            }
        },
        ai: {
            colonialExploration: true,
            Europa_Asia: 1,
        },
    },
    Europa_haowang: {
        trigger: {
            global: 'phaseEnd',
        },
        async cost(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton([
                    `${get.prompt2(event.name.slice(0, -5))}`,
                    [
                        [
                            [2, '　　　好战部落　　　'],
                            [3, '　　　水果岛　　　'],
                            [4, '　　　海盗来袭　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [5, '　　　雷暴巨浪　　　'],
                            [6, '　　　到达印度　　　'],
                            [7, '　　　哨站　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [8, '　　　船翻了　　　'],
                            [9, '　　　瘟疫　　　'],
                            [10, '　　　巨型海怪　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [11, '　　　补给点　　　'],
                            [12, '　　　友好部落　　　'],
                        ],

                        'tdnodes',
                    ],
                ])
                .set('ai', (button) => {
                    switch (button.link) {
                        case 3:
                        case 6:
                        case 7:
                        case 11:
                        case 12:
                            return 1 + Math.random();
                        default:
                            return 0;
                    }
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links: links } };
        },
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, 'roundStart', false);
            player.addSkill('Europa_haowang_fix');
            player.setStorage('Europa_haowang_fix', event.cost_data.links[0]);
        },
        subSkill: {
            fix: {
                trigger: {
                    player: 'explorationContingencyBegin',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num = player.storage[event.name];
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_zhengshang: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return player.canCompare(target);
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const result = await player.chooseToCompare(target).forResult();
            if (!result.tie) {
                var winner = result.bool ? player : target;
                var loser = result.bool ? target : player;
                if (loser.countGainableCards(winner, 'he')) {
                    await winner.gainPlayerCard(loser, 'he', true);
                }
                let cards = loser.getExpansions('colonialExploration');
                lib.tradeGoodsCardList.forEach((list) => {
                    cards.addArray(loser.getExpansions(list));
                });
                if (winner == player && cards.length) {
                    const { bool, links } = await player.chooseButton([cards]).forResult();
                    if (bool) {
                        player.gain(links, 'gain2');
                    }
                }
            }
        },
        ai: {
            order: 10,
            result: {
                target: -1,
            },
        },
    },
    Europa_juxue: {
        trigger: {
            player: ['useCardAfter', 'respondAfter'],
        },
        filter(event, player) {
            return get.is.ordinaryCard(event.card);
        },
        check(event, player) {
            return !['equip', 'delay'].includes(get.type(event.card));
        },
        async content(event, trigger, player) {
            var cards = trigger.cards.filterInD();
            if (cards.length) player.addToExpansion(cards, 'giveAuto').gaintag.add('Europa_juxue');
        },
        intro: {
            content: 'expansion',
            markcount: 'expansion',
        },
        group: 'Europa_juxue_remove',
        subSkill: {
            remove: {
                trigger: {
                    global: ['useCard', 'respond'],
                },
                popup: false,
                filter(event, player) {
                    return player
                        .getExpansions('Europa_juxue')
                        .map((info) => info.name)
                        .includes(event.card.name);
                },
                async cost(event, trigger, player) {
                    const { bool, links } = await player
                        .chooseButton([`你可以弃置之,并令${get.translation(trigger.player)}摸一张牌`, player.getExpansions('Europa_juxue')])
                        .set('filterButton', (button) => {
                            let trigger = get.event().getTrigger();
                            return button.link.name == trigger.card.name;
                        })
                        .set('ai', (button) => {
                            return get.attitude(get.player(), get.event().getTrigger().player) > 0;
                        })
                        .forResult();
                    if (bool) event.result = { bool, cost_data: { links } };
                },
                async content(event, trigger, player) {
                    player.loseToDiscardpile(event.cost_data.links);
                    trigger.player.draw();
                },
            },
        },
    },
    Europa_shizhi: {
        trigger: {
            global: 'useCardAfter',
        },
        filter(event, player) {
            if (event.player == player) return false;
            return (
                event.player.getHistory('useCard', (evt) => {
                    return evt.isPhaseUsing() && evt.card.name == event.card.name;
                }).length >= 3 && get.discarded().length
            );
        },
        check(event, player) {
            return get.attitude(player, event.player) < 0;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            const { bool, links } = await player
                .chooseButton(['选择一张获得之', get.discarded()], true)
                .set('ai', function (button) {
                    return get.value(button.link);
                })
                .forResult();
            if (bool) {
                player.gain(links, 'gain2');
                trigger.player.addTempSkill('Europa_shizhi_ban');
            }
        },
        subSkill: {
            ban: {
                charlotte: true,
                mark: true,
                marktext: '禁',
                intro: {
                    markcount: () => 0,
                    content(storage) {
                        return '不能使用牌';
                    },
                },
                mod: {
                    cardEnabled: () => false,
                    cardSavable: () => false,
                },
            },
        },
    },
    Europa_jibian: {
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        zhuSkill: true,
        limited: true,
        filter(event, player) {
            return player.countCards('h') && player.hasZhuSkill('Europa_jibian');
        },
        async cost(event, trigger, player) {
            const { bool, cards } = await player
                .chooseToDiscard('h', get.prompt2('Europa_jibian'))
                .set('filterCard', (card) => {
                    if (ui.selected.cards.length) return get.type2(card) == get.type2(ui.selected.cards[0]);
                    return true;
                })
                .set('selectCard', [1, Infinity])
                .set('complexCard', true)
                .set('ai', (card) => {
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
            if (bool) event.result = { bool, cost_data: { cards } };
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.discard(event.cost_data.cards);
            let num = event.cost_data.cards.length;
            let cards = [];
            while (num > 0) {
                num--;
                cards.push(game.createCard('suijiyingbian'));
            }
            if (cards.length) player.gain(cards, 'gain2');
            player.addTempSkill('Europa_jibian_yingbian');
            player.markAuto('Europa_jibian_yingbian', cards);
        },
        subSkill: {
            yingbian: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    const cards = player.getStorage(event.name);
                    await game.cardsGotoSpecial(cards);
                    player.removeSkill(event.name);
                    game.log(cards, '被销毁了');
                    player.directgain(player.getCards('h'), false);
                },
            },
        },
    },
    Europa_lizhan: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'explorationContingencyAccomplishBegin',
        },
        markList() {
            return lib.Europa_ColonialExplorationList.map((info) => `Europa_lizhan_${info}`);
        },
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await trigger.player.draw(2);
            if (!player.countMark(`Europa_lizhan_${trigger.exploration}`)) {
                player.addMark(`Europa_lizhan_${trigger.exploration}`);
            }
        },
        group: 'Europa_lizhan_move',
        subSkill: {
            move: {
                trigger: {
                    player: 'phaseBegin',
                },
                popup: false,
                filter(event, player) {
                    return get
                        .info('Europa_lizhan')
                        .markList()
                        .some((mark) => player.countMark(mark));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt('Europa_lizhan'), '你可以移动一枚<商站>标记', function (card, player, target) {
                            return (
                                target != player &&
                                get
                                    .info('Europa_lizhan')
                                    .markList()
                                    .some((mark) => !target.countMark(mark))
                            );
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            let att = get.attitude(player, target);
                            if (!target.countMark('Europa_lizhan_Europa_Africa')) att += 2;
                            return att;
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const list = get
                        .info('Europa_lizhan')
                        .markList()
                        .filter((mark) => player.countMark(mark));
                    const stations = ['美洲商站', '非洲商站', '亚洲商站'];
                    const controls = stations.filter((info) => {
                        const mark = list[stations.indexOf(info)];
                        return player.countMark(mark) && !target.hasMark(mark);
                    });
                    if (!controls.length) return;
                    const { control } = await player
                        .chooseControl(controls)
                        .set('ai', () => {
                            const player = get.player();
                            let controls = get.event('controls').slice();
                            return controls[controls.length - 1];
                        })
                        .forResult();
                    const stationMark = list[stations.indexOf(control)];
                    player.removeMark(stationMark);
                    player.unmarkSkill(stationMark);
                    if (!target.hasMark(stationMark)) target.addMark(stationMark);
                },
            },
            Europa_America: {
                mark: true,
                marktext: '美洲商站',
                intro: {
                    markcount: () => 0,
                    content: '已获得<美洲商站>标记',
                },
            },
            Europa_Africa: {
                mark: true,
                marktext: '非洲商站',
                intro: {
                    markcount: () => 0,
                    content: '已获得<非洲商站>标记',
                },
            },
            Europa_Asia: {
                mark: true,
                marktext: '亚洲商站',
                intro: {
                    markcount: () => 0,
                    content: '已获得<亚洲商站>标记',
                },
            },
        },
    },
    Europa_jingmao: {
        trigger: {
            global: 'phaseUseBegin',
        },
        forced: true,
        filter(event, player) {
            return get
                .info('Europa_lizhan')
                .markList()
                .some((mark) => event.player.countMark(mark));
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const list = get.info('Europa_jingmao').getList(player),
                markList = get.info('Europa_lizhan').markList();
            if (trigger.player.countMark(markList[0])) {
                let num = list[0];
                if (
                    markList.every((mark) => {
                        return trigger.player.countMark(mark);
                    })
                )
                    num *= 2;
                await trigger.player.addToExpansion(get.cards(num), 'giveAuto').set('gaintag', ['Europa_gem']);
                game.log(trigger.player, '获得了', num, '张<宝石>');
            }
            if (trigger.player.countMark(markList[1])) {
                let num = list[1];
                if (
                    markList.every((mark) => {
                        return trigger.player.countMark(mark);
                    })
                )
                    num *= 2;
                await trigger.player.draw(num);
            }
            if (trigger.player.countMark(markList[2])) {
                let num = list[2];
                if (
                    markList.every((mark) => {
                        return trigger.player.countMark(mark);
                    })
                )
                    num *= 2;
                await trigger.player.addToExpansion(get.cards(num), 'giveAuto').set('gaintag', ['Europa_silk']);
                game.log(trigger.player, '获得了', num, '张<丝绸>');
            }
        },
        init(player, skill) {
            const list = lib.skill.Europa_jingmao.getList(player);
            player.addTip(skill, get.translation(skill) + ' ' + list.slice().join(' '));
        },
        getList(player) {
            if (!player.storage.Europa_jingmao) player.storage.Europa_jingmao = [1, 1, 1];
            return player.storage.Europa_jingmao.slice(0);
        },
        onremove: (player, skill) => player.removeTip(skill),
        mark: true,
        intro: {
            markcount: () => 0,
            content(storage, player) {
                return storage;
            },
        },
    },
    Europa_pihang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        popup: false,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    let att = get.attitude(player, target);
                    if (target.hasSkillTag('colonialExploration')) att -= 2.4;
                    return att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.addSkill('Europa_pihang_exploration');
        },
        subSkill: {
            exploration: {
                charlotte: true,
                ai: {
                    colonialExploration: true,
                },
            },
        },
    },
    Europa_kaifa: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_kaifa')) return false;
            return player.countCards('hes');
        },
        filterCard(card) {
            if (ui.selected.cards.length) {
                if (get.type(ui.selected.cards[0]) != 'equip') return get.position(card) == 'h';
            }
            return true;
        },
        selectCard() {
            if (ui.selected.cards.length) {
                if (get.type(ui.selected.cards[0]) == 'equip') return 1;
            }
            return 2;
        },
        complexCard: true,
        check(card) {
            if (_status.event.player.needsToDiscard()) {
                return 6.5 - get.value(card);
            } //QQQ
            return 5 - get.value(card);
        },
        position: 'hes',
        async content(event, trigger, player) {
            const { index } = await player
                .chooseControl('美洲商站', '非洲商站', '亚洲商站')
                .set('ai', () => {
                    if (
                        game.hasPlayer((target) => {
                            return target.countMark('Europa_lizhan_Europa_Africa');
                        })
                    )
                        return 1;
                    return Math.random();
                })
                .forResult();
            get.info('Europa_jingmao').getList(player);
            player.storage.Europa_jingmao[index]++;
            const list = get.info('Europa_jingmao').getList(player);
            player.addTip('Europa_jingmao', get.translation('Europa_jingmao') + ' ' + list.slice().join(' '));
        },
        ai: {
            combo: 'Europa_jingmao',
            order: 1,
            result: {
                player(player) {
                    return player.hasSkill('Europa_jingmao');
                },
            },
        },
    },
    _Europa_ruoangsanshiChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_ruoangsanshiChooseAudio) return false;
            const list = ['Europa_ruoangsanshi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_ruoangsanshiChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/若昂三世bgm.mp3`;
        },
    },
    Europa_yinxin: {
        ai: {
            noChangeEuropaReligion: true,
        },
        subSkill: {
            global: {
                enable: 'phaseUse',
                filterCard(card) {
                    return card.name == 'Europa_shuzuiquan' && player.canRecast(card, player);
                },
                filter(event, player) {
                    if (
                        !player.hasEuropaReligion('新教') ||
                        !player.countCards('hs', function (card) {
                            return get.info('Europa_yinxin_global').filterCard(card);
                        })
                    )
                        return false;
                    return game.hasPlayer(function (current) {
                        return current.hasSkill('Europa_yinxin');
                    });
                },
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    await player.recast(event.cards);
                    const { bool } = await player.chooseBool(`你可以摸一张牌`).forResult();
                    if (bool) {
                        player.draw();
                    }
                },
                ai: {
                    order: 2,
                    result: {
                        player: 1,
                    },
                },
            },
        },
    },
    Europa_fuyin: {
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'Europa_xinzhongkangyi',
        },
        filterCard: true,
        group: 'Europa_fuyin_effect',
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                filter(event, player) {
                    return (
                        event.skill == 'Europa_fuyin' &&
                        player.hasHistory('useCard', (evt) => {
                            return evt.card == event.card && evt.ChangeEuropaReligion;
                        })
                    );
                },
                async content(event, trigger, player) {
                    let targets = player
                        .getHistory('useCard', (evt) => {
                            return evt.card == trigger.card && evt.ChangeEuropaReligion;
                        })
                        .map((evt) => evt.targets)
                        .flat();
                    while (targets.length) {
                        const target = targets.shift();
                        if (target == player) continue;
                        player.line(target);
                        await game.asyncDraw([player, target], 3);
                        await player.recast();
                        await target.recover();
                    }
                },
            },
        },
    },
    Europa_chengyi: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        async content(event, trigger, player) {
            const list = [];
            if (
                game.hasPlayer(function (current) {
                    return current.hasEuropaReligion('新教');
                })
            )
                list.push('选项一');
            if (
                game.hasPlayer(function (current) {
                    return !current.hasEuropaReligion('新教') && current.countDiscardableCards(player, 'he');
                })
            )
                list.push('选项二');
            if (
                game.hasPlayer(function (current) {
                    return current != player && current.hasEuropaReligion('新教');
                }) &&
                game.filterPlayer(function (current) {
                    return current.hasEuropaReligion('新教');
                }).length < 3
            )
                list.push('选项三');
            if (!list.length) return;
            const { control } = await player
                .chooseControl(list)
                .set('choiceList', [`令一名新教势力角色摸一张牌`, `弃置一名非新教势力角色摸一张牌`, `令一名其他新教势力角色获得【称义】`])
                .set('ai', () => {
                    const player = get.player();
                    return '选项一';
                })
                .forResult();
            switch (control) {
                case '选项一':
                    {
                        const { bool, targets } = await player
                            .chooseTarget(`令一名新教势力角色摸一张牌`)
                            .set('filterTarget', (card, player, target) => {
                                return target.hasEuropaReligion('新教');
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                return get.attitude(player, target);
                            })
                            .forResult();
                        if (bool) {
                            player.line(targets);
                            targets[0].draw();
                        }
                    }
                    break;
                case '选项二':
                    {
                        const { bool, targets } = await player
                            .chooseTarget(`弃置一名非新教势力角色的一张牌`)
                            .set('filterTarget', (card, player, target) => {
                                return !target.hasEuropaReligion('新教') && target.countDiscardableCards(player, 'he');
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                return get.effect(target, { name: 'guohe_copy2' }, player, player);
                            })
                            .forResult();
                        if (bool) {
                            player.line(targets);
                            player.discardPlayerCard(targets[0], 'he', true);
                        }
                    }
                    break;
                case '选项三': {
                    const { bool, targets } = await player
                        .chooseTarget(`令一名其他新教势力角色获得【称义】`)
                        .set('filterTarget', (card, player, target) => {
                            return target.hasEuropaReligion('新教') && target != player;
                        })
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.attitude(player, target);
                        })
                        .forResult();
                    if (bool) {
                        player.line(targets);
                        targets[0].addSkills('Europa_chengyi');
                    }
                }
            }
        },
    },
    Europa_guizheng: {
        enable: ['chooseToUse', 'chooseToRespond'],
        filter(event, player) {
            if (
                !player.hasCard(function (card) {
                    return card.name == 'Europa_shuzuiquan';
                }, 'hs')
            )
                return false;
            for (var name of lib.inpile) {
                if (get.type(name) != 'basic') continue;
                if (event.filterCard && event.filterCard({ name }, player, event)) return true;
                if (name == 'sha') {
                    for (var nature of lib.inpile_nature) {
                        if (event.filterCard && event.filterCard({ name, nature }, player, event)) return true;
                    }
                }
            }
            return false;
        },
        chooseButton: {
            dialog(event, player) {
                var list = [];
                for (var name of lib.inpile) {
                    if (get.type(name) != 'basic') continue;
                    if (event.filterCard && event.filterCard({ name }, player, event)) {
                        list.push(['基本', '', name]);
                    }
                    if (name == 'sha') {
                        for (var nature of lib.inpile_nature) {
                            if (event.filterCard && event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                        }
                    }
                }
                return ui.create.dialog('扫正', [list, 'vcard'], 'hidden');
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
                            return 0;
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
                        return card.name == 'Europa_shuzuiquan';
                    },
                    check(card) {
                        return 1;
                    },
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    position: 'hs',
                    async precontent(event, trigger, player) {
                        player.draw();
                        if (event.result.card.name != 'sha') return;
                        player.addTempSkill('Europa_guizheng_effect');
                    },
                };
            },
            prompt(links, player) {
                return '将一张【赎罪券】当做' + get.translation(links[0][3] || '') + get.translation(links[0][2]) + '使用或打出';
            },
        },
        ai: {
            order() {
                var player = get.player();
                var event = get.event();
                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('hs', { name: 'Europa_shuzuiquan' })) {
                    return 3.3;
                }
                return 3.1;
            },
            skillTagFilter(player, tag, arg) {
                if (tag == 'fireAttack') return true;
                if (!player.countCards('hs', { name: 'Europa_shuzuiquan' })) return false;
            },
            result: {
                player: 1,
            },
            respondSha: true,
            respondShan: true,
            fireAttack: true,
        },
        hiddenCard(player, name) {
            if (get.type(name) != 'basic') return false;
            return player.hasCard(function (card) {
                return card.name == 'Europa_shuzuiquan';
            }, 'hs');
        },
        subSkill: {
            backup: {},
            effect: {
                trigger: {
                    player: 'useCardToTargeted',
                },
                forced: true,
                charlotte: true,
                popup: false,
                filter(event, player) {
                    if (event.card.name != 'sha') return false;
                    if (!event.skill || event.skill != 'Europa_guizheng_backup') return false;
                    return !event.target.hasClan('新教');
                },
                async content(event, trigger, player) {
                    player.line(trigger.target);
                    const id = trigger.target.playerid;
                    const map = trigger.parent.customArgs;
                    if (!map[id]) map[id] = {};
                    if (typeof map[id].extraDamage != 'number') {
                        map[id].extraDamage = 0;
                    }
                    map[id].extraDamage++;
                },
            },
        },
    },
    Europa_xianding: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addMark('Europa_xianding_mark', 3);
            let num = Math.min(
                3,
                game.countPlayer((target) => target != player)
            );
            const { bool, targets } = await player
                .chooseTarget(true, function (card, player, target) {
                    return target != player;
                })
                .set('prompt', '请将<罪>标记分配给其他角色')
                .set('selectTarget', num)
                .set('ai', (target) => {
                    let att = get.attitude(player, target);
                    if (att > 0) att /= 2;
                    if (att == 0) return -Math.random();
                    return -att;
                })
                .forResult();
            if (bool) {
                player.line(targets);
                while (targets.length) {
                    let target = targets.shift();
                    player.removeMark('Europa_xianding_mark');
                    target.addMark('Europa_xianding_mark');
                }
            }
        },
        ai: {
            noChangeEuropaReligion: true,
        },
        group: ['Europa_xianding_recover', 'Europa_xianding_die'],
        subSkill: {
            mark: {
                mark: true,
                marktext: '罪',
                intro: {
                    name: '罪',
                    name2: '罪',
                    content: 'mark',
                },
            },
            recover: {
                trigger: {
                    global: 'recoverBegin',
                },
                forced: true,
                filter(event, player) {
                    if (!event.player.countMark('Europa_xianding_mark')) return false;
                    const history = game.getAllGlobalHistory();
                    for (var i = history.length - 1; i >= 0; i--) {
                        const evt = history[i].everything;
                        for (let j = evt.length - 1; j >= 0; j--) {
                            if (evt[j].name == 'changeHp' && evt[j].parent.name == 'recover') return false;
                        }
                        if (history[i].isRound) break;
                    }
                    return true;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.player.damage();
                },
            },
            die: {
                trigger: {
                    global: 'dieBegin',
                },
                forced: true,
                filter(event, player) {
                    return event.player.countMark('Europa_xianding_mark');
                },
                async content(event, trigger, player) {
                    await player.drawTo(player.maxHp);
                    let card = game.createCard('Europa_shuzuiquan');
                    player.gain(card, 'gain2');
                    player.addSkill('Europa_xianding_clear');
                    player.markAuto('Europa_xianding_clear', [card]);
                },
            },
            clear: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const cards = player.getStorage(event.name);
                    await game.cardsGotoSpecial(cards);
                    player.removeSkill(event.name);
                    game.log(cards, '被销毁了');
                    player.directgain(player.getCards('h'), false);
                },
            },
        },
    },
    Europa_zhigao: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            const otherJidujiaotu = game
                .filterPlayer(function (target) {
                    if (!target.canChangeEuropaReligion()) return false;
                    return target.hasEuropaReligion('基督教') && !target.hasClan('天主教');
                })
                .sortBySeat(player);
            while (otherJidujiaotu.length) {
                const target = otherJidujiaotu.shift();
                if (target.isUnseen(0)) continue;
                const { bool } = await target
                    .chooseBool(`你可以成为天主教势力`)
                    .set('targetx', player)
                    .set('ai', () => {
                        if (get.attitude(get.player(), get.event('targetx')) < 0) return Math.random() > 0.5;
                        return true;
                    })
                    .forResult();
                if (bool) {
                    await target.changeEuropaReligion('天主教');
                }
            }
        },
        group: 'Europa_zhigao_damage',
        subSkill: {
            damage: {
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    return event.player.hasClan('天主教') && event.player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    trigger.player.damage();
                },
            },
        },
    },
    Europa_shenci: {
        global: ['Europa_shenci_global1', 'Europa_shenci_global2'],
        ai: {
            noChangeEuropaReligion: true,
        },
        subSkill: {
            global1: {
                trigger: {
                    player: ['useCardAfter', 'recoverEnd'],
                },
                filter(event, player) {
                    if (
                        !game.hasPlayer(function (current) {
                            return current.hasSkill('Europa_shenci');
                        })
                    )
                        return false;
                    if (!player.hasClan('天主教')) return false;
                    if (event.name == 'recover') return true;
                    return get.type(event.card) == 'equip';
                },
                prompt: '你可以摸一张牌',
                async content(event, trigger, player) {
                    player.draw();
                },
            },
            global2: {
                trigger: {
                    player: ['useCardToPlayered'],
                },
                forced: true,
                filter(event, player) {
                    if (
                        !game.hasPlayer(function (current) {
                            return current.hasSkill('Europa_shenci');
                        })
                    )
                        return false;
                    if (!player.hasClan('天主教')) return false;
                    return event.card && event.card.name == 'sha' && !event.target.hasClan('天主教');
                },
                async content(event, trigger, player) {
                    trigger.parent.baseDamage++;
                },
            },
        },
    },
    Europa_fanquan: {
        subSkill: {
            global: {
                enable: 'phaseUse',
                discard: false,
                lose: false,
                delay: false,
                line: true,
                prepare(cards, player, targets) { },
                prompt() {
                    const player = get.player();
                    const list = game.filterPlayer(function (target) {
                        return target != player && target.hasSkill('Europa_fanquan', player);
                    });
                    let str = '将一张牌交给' + get.translation(list);
                    if (list.length > 1) str += '中的一人';
                    return str;
                },
                filter(event, player) {
                    if (player.hasClan('天主教')) return false;
                    if (!player.countCards('h')) return 0;
                    return game.hasPlayer(function (target) {
                        return target != player && target.hasSkill('Europa_fanquan', player) && !target.hasSkill('Europa_fanquan_used');
                    });
                },
                filterCard: true,
                log: false,
                visible: true,
                filterTarget(card, player, target) {
                    return target != player && target.hasSkill('Europa_fanquan', player) && !target.hasSkill('Europa_fanquan_used');
                },
                async content(event, trigger, player) {
                    await player.give(event.cards, event.target);
                    event.target.addTempSkill('Europa_fanquan_used', 'phaseUseEnd');
                    if (
                        event.target.getHistory('useSkill', (evt) => {
                            return evt.skill == 'Europa_fanquan' && evt.targets.includes(player);
                        }).length %
                        5 ==
                        0
                    ) {
                        const { bool } = await event.target
                            .chooseBool(`你可以令${get.translation(player)}随机使用一张武器牌并回复1点体力`)
                            .set('ai', () => {
                                const player = get.player(),
                                    target = get.event('targetx');
                                return get.attitude(player, target) > 0;
                            })
                            .set('targetx', player)
                            .forResult();
                        if (bool) {
                            var card = get.cardPile(function (card) {
                                return get.subtype(card) == 'equip1' && target.canUse(card, player);
                            });
                            if (card) {
                                await player.chooseUseTarget(card, true, 'nothrow', 'nopopup', true);
                            }
                            player.recover();
                        }
                    }
                },
                ai: {
                    expose: 0.3,
                    order: 10,
                    result: {
                        target: 5,
                    },
                },
            },
            used: {
                charlotte: true,
            },
        },
    },
    Europa_shenbi: {
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        forced: true,
        filter(event, player) {
            const cards = event.getg(player);
            if (!cards.length) return false;
            if (!player.hasZhuSkill('Europa_shenbi')) return false;
            return cards.some((card) => {
                return card.name == 'Europa_shuzuiquan';
            });
        },
        async content(event, trigger, player) {
            let shuzuiCards = trigger.getg(player).filter((card) => {
                return player.getCards('h').includes(card) && card.name == 'Europa_shuzuiquan';
            });
            if (!shuzuiCards.length) return;
            if (
                !game.hasPlayer(function (current) {
                    return current.hasClan('天主教') && current.countGainableCards(player, 'j');
                })
            )
                return false;
            const { bool, cards, targets } = await player
                .chooseCardTarget({
                    prompt: get.prompt2('Europa_shenbi'),
                    filterTarget(card, player, target) {
                        if (!target.hasClan('天主教')) return false;
                        return target != player && target.countGainableCards(player, 'j');
                    },
                    shuzuiCards: shuzuiCards,
                    filterCard(card) {
                        return get.effect('shuzuiCards').includes(card);
                    },
                    selectCard: [1, Infinity],
                    complexCard: true,
                    complexSelect: true,
                    ai1(card) {
                        if (ui.selected.cards.length && card.name != 'du') return 0;
                        if (card.name == 'du') return 999;
                        return 6 - get.value(card);
                    },
                    ai2(target) {
                        if (!ui.selected.cards.length) return 0;
                        const player = get.event('player'),
                            att = get.attitude(player, target);
                        if (ui.selected.cards[0].name == 'du') {
                            if (!target.hasSkillTag('nodu')) return -att;
                            return -0.00001 * att;
                        }
                        return att;
                    },
                })
                .forResult();
            if (bool) {
                await player.give(cards, targets[0]);
                if (targets.countGainableCards(player, 'j')) {
                    player.gainPlayerCard(targets[0], 'j', true);
                }
            }
        },
    },
    Europa_zhengyan: {
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        async content(event, trigger, player) {
            const targets = game.filterPlayer((target) => {
                return target.hasClan('天主教');
            });
            while (targets.length) {
                const target = targets.shift();
                let card = game.createCard('Europa_shuzuiquan');
                target.gain(card, 'gain2');
                target.addSkill('Europa_zhengyan_clear');
                target.markAuto('Europa_zhengyan_clear', [card]);
            }
        },
        ai: {
            noChangeEuropaReligion: true,
        },
        group: 'Europa_zhengyan_use',
        subSkill: {
            clear: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                popup: false,
                async content(event, trigger, player) {
                    const cards = player.getStorage(event.name);
                    await game.cardsGotoSpecial(cards);
                    player.removeSkill(event.name);
                    game.log(cards, '被销毁了');
                    player.directgain(player.getCards('h'), false);
                },
            },
            use: {
                trigger: {
                    global: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'Europa_shuzuiquan' && player.hasClan('天主教');
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.player.draw();
                },
            },
        },
    },
    Europa_huoxing: {
        enable: 'phaseUse',
        viewAs: {
            name: 'Europa_fenyinafan',
        },
        filterCard(card) {
            return get.type2(card) == 'trick';
        },
        async precontent(event, trigger, player) {
            player.addTempSkill('Europa_huoxing_effect');
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'Europa_fenyinafan';
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer((target) => {
                        return !target.hasClan('天主教');
                    });
                    while (targets.length) {
                        const target = targets.shift();
                        const { bool } = await target
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '对' + get.translation(player) + '使用一张杀,或摸一张牌'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', player)
                            .forResult();
                        if (!bool) {
                            target.draw();
                        }
                    }
                },
            },
        },
    },
    Europa_songjiao: {
        trigger: {
            global: 'damageBegin1',
        },
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_songjiao')) return false;
            if (event.player.hasClan('天主教') || !event.player.countGainableCards(player, 'he')) return false;
            return event.source && event.source != player && event.source.hasClan('天主教');
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            if (trigger.player.countGainableCards(player, 'he')) {
                player.gainPlayerCard(trigger.player, 'he', true);
            }
        },
    },
    Europa_lanqing: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addMark('Europa_lanqing_mark', 6);
        },
        group: 'Europa_lanqing_remove',
        subSkill: {
            mark: {
                mark: true,
                marktext: '妻',
                intro: {
                    name: '妻',
                    name2: '妻',
                    content: 'mark',
                },
            },
            remove: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.removeMark('Europa_lanqing_mark');
                    await player.draw(2);
                    const next = player.judge(function (card) {
                        if (card.suit == 'heart') return -4;
                        return -2;
                    });
                    next.judge2 = function (result) {
                        return result.bool == false ? true : false;
                    };
                    const { bool } = await next.forResult();
                    if (bool == false) {
                        await player.loseMaxHp();
                        player.loseHp();
                    }
                },
            },
        },
    },
    Europa_shenggong: {
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            player.addTempSkill('Europa_shenggong_effect');
        },
        ai: {
            order: 10,
            result: {
                player: 1,
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCard2',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    var card = event.card,
                        info = get.info(card);
                    if (info.allowMultiple == false) return false;
                    if (!['basic', 'trick'].includes(get.type2(event.card))) return false;
                    if (event.targets && !info.multitarget) {
                        return (
                            event.targets &&
                            game.hasPlayer(function (target) {
                                return !event.targets.includes(target) && lib.filter.targetEnabled2(card, player, target);
                            })
                        );
                    }
                    return false;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget('为' + get.translation(trigger.card) + '额外指定目标', function (card, player, target) {
                            var evt = _status.event.getTrigger();
                            if (player.getEuropaReligion().some((religion) => target.hasEuropaReligion(religion))) return false;
                            return !evt.targets.includes(target) && lib.filter.targetEnabled2(evt.card, player, target);
                        })
                        .set('selectTarget', () => {
                            const player = get.player();
                            if (player.hasClan('新教')) return [1, 2];
                            return [1, 1];
                        })
                        .set('ai', (target) => {
                            return get.effect(target, _status.event.getTrigger().card, _status.event.player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets;
                    player.line(targets, trigger.card.nature);
                    trigger.targets.addArray(targets);
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_qiuzi: {
        enable: 'phaseUse',
        limited: true,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_qiuzi')) return false;
            if (!game.hasPlayer((target) => target.group == 'Europa_Britain')) return false;
            return !player.countMark('Europa_lanqing_mark') || player.getHp() < 3;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            let num = game.filterPlayer((target) => target.group == 'Europa_Britain').length;
            player.addMark('Europa_lanqing_mark', num);
            await player.gainMaxHp(num);
            player.recover(num);
        },
        ai: {
            order: 1,
            result: {
                player: 1,
            },
        },
    },
    Europa_fujun: {
        trigger: {
            global: 'damageSource',
        },
        popup: false,
        filter(event, player) {
            return event.source != player && event.card && event.card.name == 'sha';
        },
        async cost(event, trigger, player) {
            const { bool, cards } = await player
                .chooseCard('h', 2, get.prompt2('Europa_fujun', trigger.source))
                .set('ai', function (card) {
                    const player = get.player(),
                        target = get.event().getTrigger().source;
                    if (get.attitude(player, target) <= 0) {
                        if (card.name == 'du') return 20;
                        return 4.5 - get.value(card);
                    }
                    return 6.5 - get.value(card);
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { cards } };
        },
        async content(event, trigger, player) {
            const cards = event.cost_data.cards;
            player.give(cards, trigger.source, 'giveAuto');
            trigger.source.addTempSkill('Europa_fujun_effect');
            trigger.source.markAuto('Europa_fujun_effect', [player]);
            trigger.getParent('useCard')._Europa_fujun = true;
            if (trigger.getParent('useCard').addCount !== false) {
                trigger.getParent('useCard').addCount = false;
                trigger.player.getStat().card.sha--;
            }
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                charlotte: true,
                popup: false,
                mark: true,
                intro: {
                    content: '本回合使用下一张【杀】造成伤害后$摸等于伤害值数的牌',
                },
                filter(event, player) {
                    let evt = event.getParent('useCard', true);
                    if (evt && evt._Europa_fujun) return false;
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    await game.asyncDraw(player.getStorage(event.name), trigger.num);
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_gouxian: {
        trigger: {
            global: 'gainAfter',
        },
        usable: 1,
        popup: false,
        filter(event, player) {
            if (player == event.player || game.countPlayer() < 3) return false;
            var evt = event.getl(player);
            return evt && evt.cards2 && evt.cards2.length > 1;
        },
        async cost(event, trigger, player) {
            const { bool, targets } = await player
                .chooseTarget(get.prompt2('Europa_gouxian', trigger.source), function (card, player, target) {
                    const trigger = get.event().getTrigger();
                    return target != player && target != trigger.player;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    const trigger = get.event().getTrigger();
                    return get.damageEffect(trigger.player, target, player);
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { targets } };
        },
        async content(event, trigger, player) {
            const target = event.cost_data.targets[0];
            target.line(trigger.player);
            trigger.player.damage(target);
        },
    },
    Europa_yongbing: {
        trigger: {
            global: 'phaseBegin',
        },
        forced: true,
        filter(event, player) {
            return !player.getEquips(2).length;
        },
        async content(event, trigger, player) {
            const yongbing = get.cardPile('Europa_renayayongbing');
            if (yongbing) {
                //QQQ
                await player.equip(yongbing);
                var card = get.cardPile2(function (card) {
                    return card.name == 'sha';
                });
                if (card) player.gain(card, 'gain2');
            }
        },
    },
    Europa_juewang: {
        trigger: {
            global: 'phaseBegin',
        },
        filter(event, player) {
            if (player.isTempBanned('Europa_juewang')) return false;
            return event.player != player && event.player.countCards('h') >= player.countCards('h');
        },
        check(event, player) {
            return get.attitude(player, event.player) < 0;
        },
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, 'roundStart', false);
            trigger.player.addTempSkill('Europa_juewang_effect');
            trigger.player.markAuto('Europa_juewang_effect', [player]);
            player
                .when({ global: 'phaseEnd' })
                .filter((event, player) => event.player == trigger.player)
                .then(() => {
                    if (!player.hasHistory('damage') || player.hasHistory('sourceDamage', (evt) => evt.player == target)) {
                        if (player.storage[`temp_ban_Europa_juewang`]) delete player.storage[`temp_ban_Europa_juewang`];
                    }
                })
                .vars({ target: trigger.player });
        },
        subSkill: {
            effect: {
                charlotte: true,
                mark: true,
                intro: {
                    content: '使用【杀】只能指定$为目标',
                },
                mod: {
                    playerEnabled(card, player, target) {
                        if (card.name != 'sha') return;
                        if (!player.getStorage('Europa_juewang_effect').includes(target)) return false;
                    },
                },
            },
        },
    },
    Europa_qiexue: {
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            return (
                event.card.name == 'sha' &&
                player.getHistory('useCard', (evt) => {
                    return evt.card.name == 'sha';
                })
            );
        },
        async content(event, trigger, player) {
            trigger.directHit.addArray(game.filterPlayer());
        },
        mod: {
            globalFrom(from, to) {
                if (from.hp > to.hp) return -Infinity;
            },
        },
    },
    Europa_menghan: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_mongolInvasion_init');
            player.addSkill('Europa_mongolInvasion_change');
        },
        ai: {
            threaten: 4.5,
            Europa_mongolInvasion: true,
        },
    },
    Europa_fenlue: {
        trigger: {
            player: 'Europa_mongolInvasion_invasionAfter',
        },
        filter(event, player) {
            return event.invasionChoice == 2;
        },
        async content(event, trigger, player) {
            const targets = game.filterPlayer(function (target) {
                return target != player;
            });
            while (targets.length) {
                const target = targets.shift();
                const { bool } = await target
                    .chooseToGive('he', player)
                    .set('prompt', '是否交给' + get.translation(player) + '一张牌,否则受到其的1点伤害')
                    .set('ai', (card) => {
                        const att = get.attitude(target, player);
                        return 6.5 - get.value(card);
                    })
                    .forResult();
                if (!bool) {
                    await target.damage();
                }
            }
        },
    },
    Europa_hanting: {
        enable: 'phaseUse',
        limited: true,
        filter(event, player) {
            return game.hasPlayer(function (target) {
                return target.identity == 'Europamongol';
            });
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const targets = game.filterPlayer(function (target) {
                return target.identity == 'Europamongol';
            });
            await player.draw(targets.length);
            while (targets.length) {
                const target = targets.shift();
                target.addSkills('Europa_qiexue');
            }
        },
        ai: {
            order: 10,
            result: {
                player: 1,
            },
        },
    },
    Europa_kuangre: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            source: 'dieAfter',
        },
        forced: true,
        filter(event, player) {
            return !event.player.hasClan('天主教');
        },
        async content(event, trigger, player) {
            player.drawTo(player.maxHp);
        },
        ai: {
            noChangeEuropaReligion: true,
        },
        group: 'Europa_kuangre_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'Europa_fenyinafanBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.setContent(async (event, trigger, player) => {
                        const target = event.target;
                        await target.damage('fire');
                    });
                },
            },
        },
    },
    Europa_qiongbing: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        filter(event, player) {
            if (player.hasSkill('Europa_qiongbing_used')) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    if (type != 'basic' && type != 'trick') return false;
                    return get.tag({ name: name }, 'damage');
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3], storage: { Europa_qiongbing: true } }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        if (type != 'basic' && type != 'trick') return false;
                        return get.tag({ name: name }, 'damage');
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3], storage: { Europa_qiongbing: true } }, player, event));
                let dialog = ui.create.dialog('窮兵', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                var evt = _status.event.parent;
                return evt.filterCard(
                    {
                        name: button.link[2],
                        storage: { Europa_qiongbing: true },
                    },
                    player,
                    evt
                );
            },
            check(button) {
                if (_status.event.parent.type != 'phase') return 1;
                return get.event('player').getUseValue({ name: button.link[2], nature: button.link[3] });
            },
            backup(links) {
                let next = {
                    ignoreMod: true,
                    filterCard: true,
                    selectCard: 2,
                    selectTarget: 1,
                    popname: true,
                    check(card) {
                        return 1 / (get.value(card) || 0.5);
                    },
                    async precontent(event, trigger, player) {
                        player.addTempSkill('Europa_qiongbing_used', ['phaseUseEnd', 'phaseUseAfter']);
                        player
                            .when('useCardAfter')
                            .filter((event, player) => event.card.storage && event.card.storage.Europa_qiongbing)
                            .then(() => {
                                if (player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) {
                                    player.removeSkill('Europa_qiongbing_used');
                                }
                            });
                    },
                };
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
                    storage: { Europa_qiongbing: true },
                };
                next.viewAs = viewAs;
                if (get.info('xunshi').isXunshi(viewAs)) {
                    next.filterTarget = function (card, player, target) {
                        const info = get.info(card);
                        if (info.changeTarget) {
                            let targets = [target];
                            info.changeTarget(player, targets);
                            if (targets.length > 1) return false;
                        }
                        return lib.filter.filterTarget(card, player, target);
                    };
                    next.selectTarget = 1;
                }
                return next;
            },
            prompt(links) {
                return '你可以视为使用一张' + get.translation(links[0][2]);
            },
        },
        ai: {
            order(item, player) {
                if (player && get.event().type == 'phase') {
                    let list = get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (type != 'basic' && type != 'trick') return false;
                            return get.tag({ name: name }, 'damage') || get.tag({ name: name }, 'recover');
                        })
                        .map((card) => {
                            return { name: card[2], nature: card[3] };
                        })
                        .filter((card) => player.getUseValue(card, true, true) > 0);
                    if (!list.length) return 0;
                    list.sort((a, b) => {
                        const getNum = function (card) {
                            return player.getUseValue(card, true, true);
                        };
                        return (getNum(b) || 0) - (getNum(a) || 0);
                    });
                    return get.order(list[0], player) * 0.99;
                }
                return 0.001;
            },
            result: {
                player(player) {
                    if (_status.event.dying) return 2 * get.sgnAttitude(player, _status.event.dying);
                    if (player.isPhaseUsing()) {
                        if (
                            player.countCards('h', function (card) {
                                return get.tag(card, 'damage') && player.hasUseTarget(card) && player.hasValueTarget(card);
                            })
                        )
                            return 0;
                    }
                    return 1;
                },
            },
        },
        mod: {
            targetEnabled(card, player, target) {
                if (player == target && card.storage && card.storage.Europa_qiongbing) return false;
            },
        },
        subSkill: {
            backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    Europa_jianheng: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        filterCard: true,
        zhuSkill: true,
        filter(event, player) {
            return player.hasZhuSkill('Europa_jianheng');
        },
        async content(event, trigger, player) {
            let jiandui = get.cardPile2(function (card) {
                return card.name == 'Europa_wudijiandui';
            });
            if (jiandui) {
                await player.gain(jiandui, 'gain2');
                if (player.getCards('h').includes(jiandui) && jiandui.name == 'Europa_wudijiandui') player.chooseUseTarget(jiandui, 'nopopup', true);
            } else {
                const targets = game.filterPlayer(function (target) {
                    return target != player && target.getEquips('Europa_wudijiandui').length;
                });
                for (const target of targets) {
                    player.line(target, 'green');
                    const cards = target.getEquips('Europa_wudijiandui');
                    if (cards.length) {
                        await player.gain(cards, target, 'give', 'bySelf');
                        for (const card of cards) {
                            if (player.getCards('h').includes(jiandui) && jiandui.name == 'Europa_wudijiandui') {
                                await player.chooseUseTarget(jiandui, 'nopopup', true);
                            }
                        }
                    }
                }
            }
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    if (player.getEquips('Europa_wudijiandui').length) return 0;
                    return (
                        get.cardPile2(function (card) {
                            return card.name == 'Europa_wudijiandui';
                        }) ||
                        game.hasPlayer(function (target) {
                            return target != player && target.getEquips('Europa_wudijiandui').length;
                        })
                    );
                },
            },
        },
        mod: {
            canBeDiscarded(card, source, player) {
                if (!player.hasZhuSkill('Europa_jianheng')) return false;
                if (player.getEquips('Europa_wudijiandui').includes(card)) return false;
            },
            cardDiscardable(card, player) {
                if (!player.hasZhuSkill('Europa_jianheng')) return false;
                if (player.getEquips('Europa_wudijiandui').includes(card)) return false;
            },
        },
    },
    Europa_kuotu: {
        trigger: {
            player: 'Europa_changeViceroyBegin',
        },
        forced: true,
        filter(event, player) {
            return event.type == 'add' && event.markname == 'Europa_viceroy_slave';
        },
        async content(event, trigger, player) {
            trigger.num++;
        },
        init: (player) => player.addSkill('Europa_viceroy'),
    },
    Europa_yimin: {
        enable: 'phaseUse',
        limited: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            let num = player.countMark('Europa_viceroy_slave') - (player.storage.Europa_viceroy[1] || 0);
            player.setStorage('Europa_viceroy', [0, player.countMark('Europa_viceroy_slave'), 0, 0]);
            do {
                num -= 5;
                await player.gainMaxHp();
                await player.recover();
            } while (num > 5);
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    return player.countMark('Europa_viceroy_slave') > 9;
                },
            },
        },
    },
    Europa_wuzhen: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        filter(event, player) {
            return player.countCards('h', { name: 'Europa_qiyi' });
        },
        async content(event, trigger, player) {
            const cards = player.getCards('h', function (card) {
                return card.name == 'Europa_qiyi';
            });
            let num = cards.length;
            await player.discard(cards);
            await player.draw(num);
            if (
                game.hasPlayer(function (target) {
                    return target != player;
                })
            ) {
                const { bool, targets } = await player
                    .chooseTarget(`你可以对一名其他角色造成${num}点伤害`, true)
                    .set('ai', (target) => {
                        const player = get.player();
                        return get.damageEffect(target, player, player);
                    })
                    .forResult();
                if (bool) {
                    player.line(targets);
                    await targets[0].damage(num);
                    if (targets[0].hasClan('原住民') && targets[0].isIn() && targets[0].countDiscardableCards(player, 'he')) {
                        await player.discardPlayerCard(targets[0], 'he');
                    }
                }
            }
        },
    },
    Europa_xunying: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        filter(event, player) {
            return player.countCards('h', (card) => {
                if (_status.connectMode) return true;
                return true;
            });
        },
        async cost(event, trigger, player) {
            const { bool, cards } = await player
                .chooseCard(get.prompt2('Europa_xunying'), [1, Infinity], (card, player) => {
                    return true;
                })
                .set('ai', (card) => {
                    const player = get.event('player');
                    if (player.hasSkill('Europa_xunying')) return 7 - get.value(card);
                    return 4.5 - get.value(card);
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { cards } };
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_xunying_ban');
            player.addSkill('Europa_xunying_buff');
            player.addGaintag(event.cost_data.cards, 'Europa_xunying_buff');
        },
        group: 'Europa_xunying_use',
        subSkill: {
            ban: {
                trigger: {
                    player: 'phaseEnd',
                },
                forced: true,
                popup: false,
                _priority: 192,
                charlotte: true,
                async content(event, trigger, player) {
                    if (!player.storage[event.name]) player.storage[event.name] = true;
                    else player.removeSkill('Europa_xunying_buff');
                },
                mod: {
                    cardEnabled2(card) {
                        if (card.name == 'sha') return false;
                    },
                },
            },
            buff: {
                charlotte: true,
                onremove(player, skill) {
                    player.removeGaintag(skill);
                },
                mod: {
                    cardname(card) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('Europa_xunying_buff')) return 'sha';
                    },
                    cardnature(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('Europa_xunying_buff')) return 'stab';
                    },
                },
            },
            use: {
                trigger: {
                    global: ['phaseZhunbeiBegin', 'phaseJieshuBegin'],
                },
                forced: true,
                filter(event, player) {
                    return event.player.isIn() && lib.filter.targetEnabled({ name: 'sha' }, player, event.player) && (player.hasSha() || (_status.connectMode && player.countCards('h') > 0));
                },
                async content(event, trigger, player) {
                    player
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            '是否对' + get.translation(trigger.player) + '使用一张杀？'
                        )
                        .set('complexSelect', true)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        })
                        .set('sourcex', trigger.player);
                },
            },
        },
    },
    Europa_zhengshi: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            return _status.currentPhase != player && !player.hasHistory('useSkill', (evt) => evt.skill == 'Europa_zhengshi' && evt.targets.includes(event.player));
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await player.draw();
            if (trigger.player.hasSkill('Europa_viceroy')) {
                const { index } = await player
                    .chooseControl('cancel2')
                    .set('choiceList', ['弃置监狱区内的所有奴隶', `令其获得一张【起义】`])
                    .set('ai', () => {
                        const player = get.player(),
                            trigger = get.event().getTrigger();
                        if (get.attitude(player, trigger.player) > 0) return 2;
                        return 1;
                    })
                    .forResult();
                if (index == 0) {
                    let num = trigger.player.storage.Europa_viceroy[0];
                    if (num > 0) {
                        get.info('Europa_viceroy').Europa_Mark(trigger.player, num, 'remove', 'Europa_viceroy_slave');
                        trigger.player.storage.Europa_viceroy[0] = 0;
                    }
                } else if (index == 1) {
                    trigger.player.gain(game.createCard('Europa_qiyi'), 'gain2');
                }
            }
        },
    },
    Europa_tanzha: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('h');
        },
        filterCard: true,
        selectCard: [1, Infinity],
        filterTarget: true,
        lose: false,
        direct: false,
        delay: false,
        async content(event, trigger, player) {
            await player.showCards(event.cards);
            const cards = event.cards.sort((a, b) => {
                return a.number - b.number;
            }),
                target = event.targets[0],
                num = Math.min(cards.length, 5);
            if (!target.canCompare(player)) return;
            const { bool } = await target
                .chooseBool(`你可以与${get.translation(player)}拼点,若你拒绝,你受到其造成的1点伤害`)
                .set('numx', cards[0].number)
                .set('ai', () => {
                    const player = get.player();
                    return Math.random() > 0.5;
                })
                .forResult();
            if (bool) {
                const result = await target.chooseToCompare(player).forResult();
                if (result.tie) return;
                var winner = result.bool ? target : player;
                winner.draw(num);
            } else {
                target.damage();
            }
        },
        ai: {
            order: 3,
            result: {
                target(player, target) {
                    var sort = function (a, b) {
                        return b.number - a.number;
                    };
                    var ps = player.getCards('h').sort(sort);
                    var ts = target.getCards('h').sort(sort);
                    if (!ts.length || player.hasSkillTag('noCompareTarget')) return 0;
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
    Europa_nuyuan: {
        derivation: 'Europa_fukui',
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        filter(event, player) {
            return player.getAllHistory('gain', (evt) => evt.getParent(2).name == 'Europa_tanzha').reduce((p, c) => p + c.cards.length, 0) >= 9 || player.getAllHistory('sourceDamage', (evt) => evt.parent.name == 'Europa_tanzha').reduce((p, c) => p + c.num, 0) >= 3;
        },
        async content(event, trigger, player) {
            await player.gainMaxHp();
            await player.recover();
            player.addSkill('Europa_viceroy');
            player.addSkills('Europa_fukui');
        },
        ai: {
            combo: 'Europa_tanzha',
        },
    },
    Europa_fukui: {
        trigger: {
            player: 'Europa_changeViceroyBegin',
        },
        forced: true,
        filter(event, player) {
            return event.type == 'add' && event.markname == 'Europa_viceroy_militia';
        },
        async content(event, trigger, player) {
            trigger.cancel();
        },
        ai: {
            keepEuropaSlave: true,
        },
    },
    Europa_fangzhen: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            if (event.name == 'phase' && game.phaseNumber != 0) return false;
            return player.hasEnabledSlot();
        },
        async content(event, trigger, player) {
            var list = [];
            for (var i = 1; i < 6; i++) {
                for (var j = 0; j < player.countEnabledSlot(i); j++) {
                    list.push(i);
                }
            }
            player.disableEquip(list);
        },
        ai: {
            halfneg: true,
        },
        mod: {
            cardname(card, player) {
                if (card.name == 'Europa_gudian') return;
                if (get.type(card, null, false) == 'trick') return 'Europa_gudian';
                if (card.name == 'sha') return 'Europa_sheji';
                else if (card.name == 'shan') return 'Europa_maoyu';
                else if (['tao', 'jiu'].includes(card.name)) return 'Europa_tiandan';
            },
            maxHandcardFinal: () => 5,
        },
    },
    Europa_chongzheng: {
        trigger: {
            global: 'phaseEnd',
        },
        getLimit: 5,
        filter(event, player) {
            return player.countCards('h') < 3;
        },
        check(event, player) {
            return player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) > 1;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            player.drawTo(Math.min(player.maxHp, 5));
        },
    },
    Europa_lihui: {
        global: 'Europa_lihui_global',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return (event.name != 'phase' || game.phaseNumber == 0) && !player.getExpansions('Europa_lihui').length;
        },
        async content(event, trigger, player) {
            await player.draw();
            if (!player.countCards('h')) return;
            const result = await player
                .chooseCard('h', '将一张手牌置于武将牌上,称为<会>', true)
                .set('ai', function (card) {
                    return 6 - get.value(card);
                })
                .forResult();
            if (result.bool) {
                const next = player.addToExpansion(result.cards[0], player, 'give', 'log');
                next.gaintag.add('Europa_lihui_hui');
                await next;
            }
        },
        ai: {
            noChangeEuropaReligion: true,
        },
        subSkill: {
            hui: {
                mark: true,
                marktext: '会',
                intro: {
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            global: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    if (player.getExpansions('Europa_lihui_hui').length) return 0;
                    return game.filterPlayer(function (current) {
                        return current != player && current.hasSkill('Europa_lihui');
                    });
                },
                filterCard: true,
                visible: true,
                discard: false,
                lose: false,
                delay: false,
                prompt() {
                    return `你可以受到1点无来源伤害,变更宗教.`;
                },
                async content(event, trigger, player) {
                    await player.damage('nosource');
                    if (!player.hasClan('天主教')) {
                        await player.changeEuropaReligion('天主教');
                    }
                    player.addToExpansion(event.cards).gaintag.add('Europa_lihui_hui');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return get.damageEffect(player, player) >= -6 || player.hp > 3;
                        },
                    },
                },
            },
        },
    },
    Europa_zhuzhu: {
        trigger: {
            global: 'judge',
        },
        forced: true,
        filter(event, player) {
            return event.player.hasClan('天主教') && event.player.getExpansions('Europa_lihui_hui').length;
        },
        async content(event, trigger, player) {
            var list = trigger.player.getExpansions('Europa_lihui_hui');
            if (!list.length) return;
            let judgingCard = trigger.player.judging[0];
            const result = await player
                .chooseButton([get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' + get.translation(trigger.player.judging[0]) + ',' + get.prompt('Europa_zhuzhu'), list, 'hidden'], function (button) {
                    var card = button.link;
                    var trigger = _status.event.getTrigger();
                    var player = _status.event.player;
                    var judging = _status.event.judging;
                    var result = trigger.judge(card) - trigger.judge(judging);
                    var attitude = get.attitude(player, trigger.player);
                    return result * attitude;
                })
                .set('judging', trigger.player.judging[0])
                .set('filterButton', function (button) {
                    var player = _status.event.player;
                    var card = button.link;
                    var mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                    if (mod2 != 'unchanged') return mod2;
                    var mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                    if (mod != 'unchanged') return mod;
                    return true;
                })
                .forResult();
            if (result.bool) {
                event.forceDie = true;
                await player.respond(result.links, 'Europa_zhuzhu', 'highlight', 'noOrdering');
                result.cards = result.links;
                var card = result.cards[0];
                event.card = card;
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
                game.log(trigger.player, '的判定牌改为', card);
                await game.asyncDelay(2);
                trigger.player.addToExpansion(judgingCard).gaintag.add('Europa_lihui_hui');
            }
        },
    },
    Europa_boxue: {
        trigger: {
            global: 'phaseZhunbeiBegin',
        },
        filter(event, player) {
            return event.player.hasClan('天主教') && event.player.getExpansions('Europa_lihui_hui').length;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const { bool } = await player
                .judge(function (card) {
                    return get.color(card, false) == 'red' ? 2 : -2;
                })
                .set('judge2', (result) => result.bool)
                .forResult();
            if (bool) {
                const targets = game.filterPlayer((target) => {
                    return target.hasClan('天主教') && target.getExpansions('Europa_lihui_hui').length;
                });
                await game.asyncDraw(targets);
                if (targets.reduce((p, c) => p + c.getExpansions('Europa_lihui_hui').length, 0) >= 3) {
                    await player.draw();
                }
            }
        },
    },
    Europa_shouhe: {
        getLimit: 7,
        mark: true,
        marktext: '首',
        intro: {
            name: '首',
            name2: '首',
            content: 'mark',
        },
        group: ['Europa_shouhe_add', 'Europa_shouhe_remove'],
        subSkill: {
            add: {
                trigger: {
                    global: 'damageEnd',
                },
                filter(event, player) {
                    if (player.countMark('Europa_shouhe') >= get.info('Europa_shouhe').getLimit) return false;
                    return !player.hasHistory('useSkill', (evt) => evt.skill == 'Europa_shouhe_add' && evt.targets.includes(event.player));
                },
                logTarget: 'player',
                prompt2: '你可以获得一个<首>',
                async content(event, trigger, player) {
                    player.addMark('Europa_shouhe');
                },
            },
            remove: {
                trigger: {
                    global: 'useCard',
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.countMark('Europa_shouhe');
                },
                check(event, player) {
                    return get.attitude(player, event.player) < 0;
                },
                logTarget: 'player',
                prompt2(event, player) {
                    return `你可以令${get.translation(event.player)}使用的${get.translation(event.card)}无效`;
                },
                async content(event, trigger, player) {
                    player.removeMark('Europa_shouhe');
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                    const cards = trigger.cards.filterInD();
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
        },
    },
    Europa_fushang: {
        enable: 'phaseUse',
        filterCard(card) {
            return card.name == 'sha';
        },
        selectCard: 2,
        complexCard: true,
        filterTarget(card, player, target) {
            return target.isDamaged();
        },
        async content(event, trigger, player) {
            event.target.recover();
        },
        ai: {
            order() {
                return get.order({ name: 'sha' }) - 0.1;
            },
            result: {
                target(player, target) {
                    return 2;
                },
            },
        },
    },
    Europa_huisan: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            const card = get.cardPile('Europa_hunyuanzhenzhusan', 'field') || game.createCard2('Europa_hunyuanzhenzhusan', 'diamond', 6);
            return (event.name != 'phase' || game.phaseNumber == 0) && player.canEquip(card, true);
        },
        async content(event, trigger, player) {
            const card = get.cardPile('Europa_hunyuanzhenzhusan', 'field') || game.createCard2('Europa_hunyuanzhenzhusan', 'diamond', 6);
            if (get.owner(card)) get.owner(card).$give(card, player, false);
            else {
                player.$gain2(card, false);
            }
            player.equip(card);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!player.getEquips(5).length || player.hasEmptySlot(5)) return;
                    if (player == target && get.subtype(card) == 'equip5') {
                        if (get.equipValue(card) <= get.equipValue({ name: 'Europa_hunyuanzhenzhusan' })) return 0;
                    }
                },
            },
        },
        group: ['Europa_huisan_change', 'Europa_huisan_reback'],
        subSkill: {
            change: {
                trigger: {
                    player: ['Europa_hunyuanzhenzhusan_skill_kaiAfter', 'Europa_hunyuanzhenzhusan_skill_heAfter'],
                },
                forced: true,
                async content(event, trigger, player) {
                    player.draw(2);
                },
            },
            reback: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    return evt && evt.es && evt.es.length && evt.es.some((card) => card.name == 'Europa_hunyuanzhenzhusan');
                },
                async content(event, trigger, player) {
                    const cards = trigger.getl(player).es.filter((card) => card.name == 'Europa_hunyuanzhenzhusan');
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
        },
    },
    Europa_sancai: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            if (!player.getEquips('Europa_hunyuanzhenzhusan').length) return false;
            return player.storage.Europa_hunyuanzhenzhusan_skill;
        },
        filterTarget: true,
        selectTarget: [1, Infinity],
        multitarget: true,
        complexTarget: true,
        async content(event, trigger, player) {
            await game.asyncDraw(event.targets);
            player.changeZhuanhuanji('Europa_hunyuanzhenzhusan_skill');
        },
        ai: {
            order: 10,
            result: {
                target: 1,
            },
        },
    },
    Europa_zhenwu: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        filter(event, player) {
            if (!player.getEquips('Europa_hunyuanzhenzhusan').length) return false;
            return !player.storage.Europa_hunyuanzhenzhusan_skill;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.when('phaseBegin').then(() => {
                player.addTempSkill('Europa_zhenwu_effect');
                player.addMark('Europa_zhenwu_effect', false);
            });
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num += player.countMark(event.name);
                },
                mark: true,
                intro: {
                    content: '下个回合造成的伤害+#',
                },
            },
        },
    },
    Europa_yupi: {
        derivation: 'Europa_miaoyin',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            const card = get.cardPile('Europa_yupipa', 'field') || game.createCard2('Europa_yupipa', 'club', 6);
            return (event.name != 'phase' || game.phaseNumber == 0) && player.canEquip(card, true);
        },
        async content(event, trigger, player) {
            const card = get.cardPile('Europa_yupipa', 'field') || game.createCard2('Europa_yupipa', 'club', 6);
            if (get.owner(card)) get.owner(card).$give(card, player, false);
            else {
                player.$gain2(card, false);
            }
            player.equip(card);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!player.getEquips(1).length || player.hasEmptySlot(1)) return;
                    if (player == target && get.subtype(card) == 'equip1') {
                        if (get.equipValue(card) <= get.equipValue({ name: 'Europa_yupipa' })) return 0; //QQQ
                    }
                },
            },
        },
        group: 'Europa_yupi_miaoyin',
        subSkill: {
            miaoyin: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    const evt = event.getl(player);
                    if (event.name == 'equip' && event.player == player) return true;
                    return evt && evt.es.length && evt.es.includes('Europa_yupipa');
                },
                async content(event, trigger, player) {
                    if (player.getEquips('Europa_yupipa').length) player.addAdditionalSkills('Europa_yupi', 'Europa_miaoyin');
                    else player.removeAdditionalSkills('Europa_yupi');
                },
            },
        },
    },
    Europa_huchi: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        filterCard: true,
        check(card) {
            return 6 - get.value(card);
        },
        position() {
            const player = get.player();
            if (player.getEquips('Europa_yupipa'.length)) return 'h';
            return 'hes';
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            if (player.getEquips('Europa_yupipa').length) {
                target.addTempSkill('Europa_huchi_effect');
            } else {
                let card = get.cardPile('Europa_yupipa', 'field');
                if (!card) {
                    card = game.createCard('Europa_yupipa'); //QQQ
                }
                if (card) await player.gain(card, 'gain2');
                await target.damage();
            }
        },
        ai: {
            order: 1,
            result: {
                target: -1,
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return !event.hasNature();
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                mark: true,
                intro: {
                    content: '免疫非属性伤害',
                },
            },
        },
    },
    Europa_yushun: {
        global: 'Europa_yushun_global',
        trigger: {
            global: 'useCard',
        },
        popup: false,
        filter(event, player) {
            return event.player != player && event.card.name == 'wugu';
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt(event.name.slice(0, -5)), `令${get.translation(trigger.card)}对任意名目标无效`, [1, trigger.targets.length], function (card, player, target) {
                    return _status.event.targets.includes(target);
                })
                .set('ai', function (target) {
                    var trigger = _status.event.getTrigger();
                    return -get.effect(target, trigger.card, trigger.player, _status.event.player);
                })
                .set('targets', trigger.targets)
                .forResult();
        },
        async content(event, trigger, player) {
            trigger.excluded.addArray(event.targets);
            game.log(trigger.card, '对', event.targets, '无效');
        },
        ai: {
            expose: 0.2,
        },
        group: 'Europa_yushun_use',
        subSkill: {
            global: {
                ai: {
                    effect: {
                        player_use(card, player) {
                            if (typeof card != 'object' || card.name != 'wugu') return;
                            const targets = game.filterPlayer((target) => {
                                return target.hasSkill('Europa_yushun') && target != player;
                            });
                            if (!targets.length) return;
                            if (targets.some((target) => get.attitude(player, target) < 0 || get.attitude(target, player) < 0)) return 'zeroplayertarget';
                            game.log('122');
                            return [1, 1];
                        },
                    },
                },
            },
            use: {
                trigger: {
                    global: 'phaseUseBegin',
                },
                popup: false,
                filter(event, player) {
                    return event.player != player;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseToDiscard(get.prompt(event.name.slice(0, -5)), `你可以弃置一张牌,令${get.translation(trigger.player)}获得一张于回合结束时移出游戏的【五谷丰登】.`)
                        .set('ai', (card) => {
                            const player = get.player();
                            const trigger = get.event().getTrigger();
                            if (get.attitude(player, trigger.player) <= 0) return false;
                            return 6 - get.value(card);
                        })
                        .set('chooseonly', true)
                        .forResult();
                },
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    await player.discard(event.cards);
                    const wugu = game.createCard('wugu', 'heart', 8);
                    await trigger.player.gain(wugu, 'gain2');
                    trigger.player.addSkill('Europa_yushun_remove');
                    trigger.player.markAuto('Europa_yushun_remove', [wugu]);
                },
            },
            remove: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    const cards = player.getStorage(event.name);
                    if (cards.length) {
                        await game.cardsGotoSpecial(cards);
                        game.log(cards, '被销毁了');
                        player.directgain(player.getCards('h'), false);
                    }
                },
            },
        },
    },
    Europa_miaoyin: {
        trigger: {
            source: 'damageSource',
        },
        popup: false,
        filter(event, player) {
            if (event.player == player) return false;
            return event.hasNature();
        },
        async cost(event, trigger, player) {
            const { index } = await player
                .chooseControl('失去技能', '摸两张牌')
                .set('prompt', get.prompt(event.name.slice(0, -5), trigger.player))
                .set('ai', () => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.attitude(player, trigger.player) > 0) return 1;
                    return 0;
                })
                .forResult();
            if (index != 2) event.result = { bool: true, cost_data: { index } };
        },
        async content(event, trigger, player) {
            if (event.cost_data.index == 0) trigger.player.addTempSkill('fengyin');
            else trigger.player.draw(2);
        },
    },
    Europa_chitun: {
        enable: 'phaseUse',
        usable: 1,
        filterCard(card) {
            return card.name == 'Europa_chilong';
        },
        position: 'e',
        check(card) {
            return 1;
        },
        filterTarget(card, player, target) {
            return target != player && target.canEquip(ui.selected.cards[0], true);
        },
        filter(event, player) {
            return player.getEquips('Europa_chilong').length;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await target.equip(event.cards[0]);
            target.turnOver();
            player.addSkill('Europa_chitun_effect');
            player.markAuto('Europa_chitun_effect', [target]);
        },
        ai: {
            order(item, player) {
                return 1;
            },
            expose: 0.2,
            result: {
                target(player, target) {
                    return -1;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'damageEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('Europa_chitun_effect').includes(event.player);
                },
                async content(event, trigger, player) {
                    const cards = trigger.player.getEquips('Europa_chilong').filter((card) => lib.filter.canBeGained(card, trigger.player, player));
                    if (cards.length) player.gain(cards, trigger.player, 'give');
                    trigger.player.turnOver(false);
                    player.unmarkAuto(event.name, trigger.player);
                    if (!player.getStorage(event.name).length) player.removeSkill(event.name);
                },
                mark: true,
                intro: {
                    content: '$受到伤害后,你获得其装备区内的【螭龍】,其将武将牌翻至正面',
                },
            },
        },
    },
    Europa_fuloong: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            const card = get.cardPile('Europa_chilong', 'field') || game.createCard2('Europa_chilong', 'heart', 6);
            return (event.name != 'phase' || game.phaseNumber == 0) && player.canEquip(card, true);
        },
        async content(event, trigger, player) {
            const card = get.cardPile('Europa_chilong', 'field') || game.createCard2('Europa_chilong', 'heart', 6);
            if (get.owner(card)) get.owner(card).$give(card, player, false);
            else {
                player.$gain2(card, false);
            }
            player.equip(card);
            player.expandEquip(1);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!player.getEquips(1).length || player.hasEmptySlot(1)) return;
                    if (player == target && get.subtype(card) == 'equip1') {
                        if (get.equipValue(card) <= get.equipValue({ name: 'Europa_chilong' })) return 0;
                    }
                },
            },
        },
        group: 'Europa_fuloong_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return !player.getEquips('Europa_chilong').length;
                },
                async content(event, trigger, player) {
                    let card = get.cardPile('Europa_qingyunjian', 'field');
                    if (!card) {
                        card = game.createCard('Europa_qingyunjian'); //QQQ
                    }
                    if (get.owner(card)) get.owner(card).$give(card, player, false);
                    else player.$gain2(card, false);
                    await player.equip(card);
                },
            },
        },
    },
    Europa_fengdiao: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('selectTarget', [1, 2])
                .set('ai', (target) => {
                    return 1 + Math.random();
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const { index } = await player
                .chooseControl('+1', '-1')
                .set('prompt', `令${get.translation(event.targets)}受到的火焰伤害`)
                .set('targetxs', event.targets)
                .set('ai', () => {
                    const player = get.player();
                    const targets = get.event('targetxs');
                    if (get.attitude(player, targets[0]) > 0) return 1; //QQQ
                    return 0;
                })
                .forResult();
            player.addTempSkill(`Europa_fengdiao_${index == 0 ? 'add' : 'sub'}`, { player: 'phaseBegin' });
            player.markAuto(`Europa_fengdiao_${index == 0 ? 'add' : 'sub'}`, event.targets);
        },
        subSkill: {
            add: {
                trigger: {
                    global: 'damageBegin3',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!event.hasNature('fire')) return false;
                    return player.getStorage('Europa_fengdiao_add').includes(event.player);
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                mark: true,
                intro: {
                    content: '$受到的火焰伤害+1',
                },
            },
            sub: {
                trigger: {
                    global: 'damageBegin3',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!event.hasNature('fire')) return false;
                    return player.getStorage('Europa_fengdiao_sub').includes(event.player);
                },
                async content(event, trigger, player) {
                    trigger.num--;
                },
                mark: true,
                intro: {
                    content: '$受到的火焰伤害-1',
                },
            },
        },
    },
    Europa_jianqu: {
        enable: 'phaseUse',
        usable: 1,
        filterCard(card) {
            return card.name == 'Europa_qingyunjian';
        },
        position: 'e',
        check(card) {
            return 1;
        },
        filterTarget(card, player, target) {
            return target != player && target.canEquip(ui.selected.cards[0], true);
        },
        filter(event, player) {
            return player.getEquips('Europa_qingyunjian').length;
        },
        async content(event, trigger, player) {
            await event.targets[0].equip(event.cards[0]);
        },
        ai: {
            order(item, player) {
                return 1;
            },
            expose: 0.2,
            result: {
                target(player, target) {
                    return -1;
                },
            },
        },
    },
    Europa_jianlai: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            const card = get.cardPile('Europa_qingyunjian', 'field') || game.createCard2('Europa_qingyunjian', 'spade', 6);
            return (event.name != 'phase' || game.phaseNumber == 0) && player.canEquip(card, true);
        },
        async content(event, trigger, player) {
            const card = get.cardPile('Europa_qingyunjian', 'field') || game.createCard2('Europa_qingyunjian', 'spade', 6);
            if (get.owner(card)) get.owner(card).$give(card, player, false);
            else {
                player.$gain2(card, false);
            }
            player.equip(card);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!player.getEquips(1).length || player.hasEmptySlot(1)) return;
                    if (player == target && get.subtype(card) == 'equip1') {
                        if (get.equipValue(card) <= get.equipValue({ name: 'Europa_qingyunjian' })) return 0;
                    }
                },
            },
        },
        group: ['Europa_jianlai_begin', 'Europa_jianlai_use'],
        subSkill: {
            begin: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    return !player.getEquips('Europa_qingyunjian').length;
                },
                //锁定技，游戏开始时或回合开始时，你将【青云剑】置入你的装备区；当你成为伤害牌的目标时，若你没有【青云剑】，你将【青云剑】置入装备区，令此牌对你无效
                async content(event, trigger, player) {
                    let card = get.cardPile('Europa_qingyunjian', 'field');
                    if (!card) {
                        card = game.createCard('Europa_qingyunjian'); //QQQ
                    }
                    await player.equip(card);
                },
            },
            use: {
                trigger: {
                    target: 'useCardToTarget',
                },
                forced: true,
                filter(event, player) {
                    if (!get.tag(event.card, 'damage')) return false;
                    return !player.getEquips('Europa_qingyunjian').length;
                },
                async content(event, trigger, player) {
                    let card = get.cardPile('Europa_qingyunjian', 'field');
                    if (!card) {
                        card = game.createCard('Europa_qingyunjian'); //QQQ
                    }
                    if (get.owner(card)) get.owner(card).$give(card, player, false);
                    else player.$gain2(card, false);
                    await player.equip(card);
                    trigger.parent.excluded.push(player);
                    game.log(trigger.card, '对', player, '无效');
                },
            },
        },
    },
    Europa_zenghui: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return target.countCards('e');
                })
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            let num = 2,
                cards = [];
            while (num > 0) {
                num--;
                var card = get.cardPile(function (card) {
                    return get.type2(card, false) == 'trick' && !cards.includes(card);
                });
                if (card) cards.add(card);
            }
            if (cards.length) target.gain(cards, 'gain2');
        },
    },
    Europa_duanfan: {
        trigger: {
            source: 'damageBegin2',
        },
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            trigger.cancel();
            await trigger.player.recover();
            trigger.player.draw();
        },
    },
    Europa_buhui: {
        trigger: {
            source: 'damageSource',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), lib.filter.notMe)
                .set('selectTarget', [1, 3])
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const targets = event.targets;
            if (targets.length == 1) {
                const { index } = await player
                    .chooseControl('摸一张牌', '回复1点体力并摸一张牌')
                    .set('prompt', `选择令${get.translation(targets[0])}执行一项`)
                    .set('ai', () => 1)
                    .forResult();
                if (index == 0) targets[0].draw();
                else {
                    targets[0].recover();
                    targets[0].draw();
                }
            } else {
                await game.asyncDraw(targets);
            }
        },
    },
    Europa_yongjing: {
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton([
                    get.prompt(event.name.slice(0, -5)),
                    [
                        [
                            [1, `不能使用基本牌`],
                            [2, `不能使用锦囊牌`],
                            [3, `有标签的技能失效`],
                        ],

                        'textbutton',
                    ],
                ])
                .set('selectButton', [1, 2])
                .set('ai', function (button) {
                    const player = get.player();
                    switch (button.link) {
                        case 1:
                            return 0.5 + Math.random();
                        case 2:
                            return 0.4 + Math.random();
                        case 3:
                            return 1 + Math.random();
                    }
                    return 1;
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            const links = event.cost_data.links;
            for (const link of links) {
                player.addTempSkill(`${event.name}_ban${link}`, { player: 'phaseEnd' });
            }
            if (
                !game.hasPlayer(function (target) {
                    return target != player;
                })
            )
                return;
            const { bool, targets } = await player
                .chooseTarget(`令一名其他角色获得相同的效果`, lib.filter.notMe, true)
                .set('ai', (target) => {
                    return -get.attitude(player, target);
                })
                .forResult();
            if (bool) {
                player.line(targets);
                for (const link of links) {
                    targets[0].addTempSkill(`${event.name}_ban${link}`, { player: 'phaseEnd' });
                }
            }
        },
        subSkill: {
            ban1: {
                charlotte: true,
                mod: {
                    cardEnabled(card, player) {
                        if (get.type(card) == 'basic') return false;
                    },
                    cardSavable(card, player) {
                        if (get.type(card) == 'basic') return false;
                    },
                },
            },
            ban2: {
                mod: {
                    cardEnabled(card, player) {
                        if (get.type2(card) == 'trick') return false;
                    },
                    cardSavable(card, player) {
                        if (get.type2(card) == 'trick') return false;
                    },
                },
            },
            ban3: {
                charlotte: true,
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                skillBlocker(skill, player) {
                    var list = get.skillCategoriesOf(skill, player);
                    return !lib.skill[skill].charlotte && list.length;
                },
                mark: true,
                intro: {
                    content(storage, player, skill) {
                        let str = '失效技能:';
                        const list = player.getSkills(null, false, false).filter(function (skillx) {
                            return lib.skill.Europa_yongjing_ban3.skillBlocker(skillx, player);
                        });
                        if (list.length) str += get.translation(list);
                        return str;
                    },
                },
            },
        },
    },
    Europa_fanzhu: {
        enable: 'phaseUse',
        limited: true,
        filterTarget: true,
        selectTarget: [1, 4],
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const targets = event.targets,
                targets2 = targets.slice(0);
            for (const target of targets) {
                target.addSkill('Europa_fanzhu_ban');
            }
            switch (targets.length) {
                case 1:
                    {
                        targets[0].addMark('Europa_fanzhu_ban', 4);
                        if (targets[0].countMark('Europa_fanzhu_ban') >= 4) {
                            targets[0].addSkill('Europa_fanzhu_fengyin');
                        }
                    }
                    break;
                case 2:
                    {
                        let num = 2;
                        while (num > 0) {
                            num--;
                            const result = await player
                                .chooseTarget(`请分配<梵柱>给一名角色`, true)
                                .set('ai', (target) => {
                                    return 1 + Math.random();
                                })
                                .forResult();
                            if (result.bool) targets2.push(result.targets[0]);
                        }
                        for (const target of targets) {
                            target.addMark('Europa_fanzhu_ban', targets2.filter((targetx) => targetx == target).length);
                            if (target.countMark('Europa_fanzhu_ban') >= 4) {
                                target.addSkill('Europa_fanzhu_fengyin');
                            }
                        }
                    }
                    break;
                case 3:
                    {
                        const result = await player
                            .chooseTarget(`请选择获得2个<梵柱>的角色`, true)
                            .set('ai', (target) => {
                                return 1 + Math.random();
                            })
                            .forResult();
                        if (result.bool) {
                            for (const target of targets) {
                                target.addMark('Europa_fanzhu_ban', target == result.targets[0] ? 2 : 1);
                                if (target.countMark('Europa_fanzhu_ban') >= 4) {
                                    target.addSkill('Europa_fanzhu_fengyin');
                                }
                            }
                        }
                    }
                    break;
                case 4:
                    {
                        for (const target of targets) {
                            target.addMark('Europa_fanzhu_ban', 4);
                            if (target.countMark('Europa_fanzhu_ban') >= 4) {
                                target.addSkill('Europa_fanzhu_fengyin');
                            }
                        }
                    }
                    break;
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    return -1;
                },
            },
        },
        subSkill: {
            ban: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        if (player.countMark('Europa_fanzhu_ban')) return num - 1;
                    },
                    globalTo(from, to, distance) {
                        return distance - to.countMark('Europa_fanzhu_ban');
                    },
                },
                mark: true,
                intro: {
                    content: 'mark',
                },
            },
            fengyin: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.countMark('Europa_fanzhu_ban') >= 4;
                },
                async content(event, trigger, player) {
                    player.removeMark('Europa_fanzhu_ban', player.countMark('Europa_fanzhu_ban'));
                    player.unmarkSkill('Europa_fanzhu_ban');
                    player.damage('fire', 'nosource');
                    player.removeSkill(event.name);
                },
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                skillBlocker(skill, player) {
                    return !lib.skill[skill].charlotte;
                },
                mod: {
                    cardEnabled(card, player) {
                        if (player.countMark('Europa_fanzhu_ban') <= 4) return;
                        if (card.cards) {
                            const hs = player.getCards('h');
                            if (card.cards.some((card) => hs.includes(card))) return false;
                        }
                    },
                    cardSavable(card, player) {
                        if (player.countMark('Europa_fanzhu_ban') <= 4) return;
                        if (card.cards) {
                            const hs = player.getCards('h');
                            if (card.cards.some((card) => hs.includes(card))) return false;
                        }
                    },
                },
                mark: true,
                intro: {
                    content: '你不能使用手牌且你的所有技能失效',
                },
            },
        },
    },
    Europa_tukui: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.targets[0];
            const targets_inRange = game.filterPlayer((targetx) => player.inRange(targetx));
            do {
                player.addTempSkill('Europa_tukui_dis');
                player.addMark('Europa_tukui_dis', 1, false);
                player.addTempSkill('Europa_tukui_sha');
                player.addMark('Europa_tukui_sha', 1, false);
                const targets_inRangex = game.filterPlayer((target) => player.inRange(target)).filter((target) => !targets_inRange.includes(target));
                if (targets_inRangex.length) {
                    for (const targetx of targets_inRangex) {
                        await targetx
                            .chooseToUse(
                                function (card, player, event) {
                                    if (card.name != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments);
                                },
                                '是否对' + get.translation(player) + '使用一张杀？'
                            )
                            .set('targetRequired', true)
                            .set('complexSelect', true)
                            .set('filterTarget', function (card, player, target) {
                                if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                                return lib.filter.filterTarget.apply(this, arguments);
                            })
                            .set('sourcex', player);
                    }
                }
            } while (get.distance(player, target) != 1);
        },
        ai: {
            order() {
                return get.order({ name: 'sha' }) + 1;
            },
            result: {
                target(player, target) {
                    return get.distance(player, target) * get.sgnAttitude(player, target);
                },
            },
        },
        subSkill: {
            dis: {
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return distance - from.countMark('Europa_tukui_dis');
                    },
                },
                mark: true,
                intro: {
                    content: '#',
                },
            },
            sha: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    trigger.directHit.addArray(game.filterPlayer());
                    trigger.baseDamage += player.countMark(event.name);
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_zhusai: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('h');
        },
        filterCard: true,
        selectCard() {
            return [1, game.countPlayer()];
        },
        filterTarget: true,
        complexCard: true,
        complexSelect: true,
        multitarget: true,
        selectTarget() {
            return ui.selected.cards.length;
        },
        check(card) {
            return 6 - get.value(card);
        },
        async content(event, trigger, player) {
            for (const target of event.targets) {
                await target.changeHujia(1, null, true);
            }
        },
        ai: {
            order: 1,
            result: {
                target: 1,
            },
        },
    },
    Europa_pinglei: {
        trigger: {
            global: 'useCardToTarget',
        },
        forced: true,
        filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (!event.target.hujia) return false;
            if (!event.targets || !event.targets.length || event.targets.length != 1) return false;
            return game.hasPlayer(function (current) {
                return current != event.target && current.hujia;
            });
        },
        logTarget: 'target',
        async content(event, trigger, player) {
            const target = trigger.target,
                targets = [],
                targetxs = game
                    .filterPlayer(function (current) {
                        return current != target && current.hujia;
                    })
                    .sortBySeat(_status.currentPhase);
            for (const targetx of targetxs) {
                const { bool, cards } = await targetx
                    .chooseCard('he', '你可以交给' + get.translation(target) + '一张牌')
                    .set('target', target)
                    .set('ai', function (card) {
                        const player = get.player();
                        const target = get.event('target');
                        if (get.attitude(player, target) <= 0) return 0;
                        if (get.position(card) == 'e') return -1;
                        if (trigger.card.name == 'sha' && card.name == 'shan') return 1;
                        if (get.type(card) == 'equip') return 0.5;
                        return 5 - get.value(card);
                    })
                    .forResult();
                if (bool) {
                    await player.give(cards, target, 'give');
                    targets.add(targetx);
                }
            }
            if (targets.length) {
                target
                    .when({ global: 'useCardAfter' })
                    .filter((event) => event.card == trigger.card)
                    .then(() => {
                        if (player.hasHistory('damage', (evt) => evt.card == trigger.card)) return;
                        game.asyncDraw(targets);
                    })
                    .vars({ targets: targets });
            }
        },
    },
    Europa_shinue: {
        trigger: {
            source: 'damageBegin1',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5), trigger.player), 'h')
                .set('ai', (card) => {
                    const player = get.player,
                        trigger = get.event().getTrigger();
                    if (get.attitude(player, trigger.player) > 0) return 0;
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            const next = game.createEvent('addEuropa_shinue_mark');
            next.player = trigger.player;
            next.num = 2;
            next.setContent(() => {
                player.addMark('Europa_shinue_mark', num);
            });
        },
        group: 'Europa_shinue_add',
        subSkill: {
            mark: {
                mark: true,
                marktext: '流血',
                intro: {
                    name: '流血',
                    content: 'mark',
                },
            },
            add: {
                trigger: {
                    global: 'addEuropa_shinue_markAfter',
                },
                forced: true,
                getIndex(event, player, triggername) {
                    return Math.min(event.num, 9) || 1;
                },
                async content(event, trigger, player) {
                    trigger.player.damage('nosource', 'unreal');
                },
            },
        },
    },
    Europa_canli: {
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer((current) => lib.skill.Europa_canli.filterTarget(null, player, current));
        },
        filterTarget(card, player, target) {
            return target.countMark('Europa_shinue_mark') > 3;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.removeMark('Europa_shinue_mark', 4);
            await target.damage();
            await player.recover();
            if (target.countGainableCards(player, 'h')) player.gainPlayerCard(target, 'h', true);
        },
        ai: {
            order: 10,
            result: {
                target: -1,
            },
        },
    },
    Europa_yuxue: {
        trigger: {
            player: 'Europa_canliAfter',
        },
        forced: true,
        filter(event, player) {
            return player.getAllHistory('useSkill', (evt) => evt.skill == 'Europa_canli').length % 3 == 0;
        },
        async content(event, trigger, player) {
            await player.gainMaxHp();
            var cardx = get.cardPile(function (card) {
                return get.tag(card, 'damage') && get.type2(card) == 'trick';
            });
            if (cardx) player.gain(cardx, 'gain2');
        },
    },
    Europa_rongjiao: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        zhuanhuanji: true,
        prompt() {
            const player = get.player();
            const storage = player.storage.Europa_rongjiao;
            return ['出牌阶段限一次,阴:你可以将你的宗教转变为新教.', '出牌阶段限一次,阳:你可以将你的宗教转变为天主教.'][storage ? 0 : 1];
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.changeZhuanhuanji(event.name);
            const storage = player.storage[event.name];
            if (storage) {
                if (!player.hasClan('新教')) {
                    await player.changeEuropaReligion('新教');
                }
                const num = game.filterPlayer((i) => i.hasEuropaReligion('新教')).length;
                const { bool, targets } = await player
                    .chooseTarget(`令一名角色摸${get.cnNumber(num)}张牌`, true, (card, player, target) => {
                        return target.hasEuropaReligion('新教');
                    })
                    .set('ai', (target) => {
                        const player = get.player();
                        return get.attitude(player, target);
                    })
                    .forResult();
                if (bool) {
                    await targets[0].draw(num);
                    const cards = [];
                    for (var i = 0; i < 2; i++) {
                        cards.push(game.createCard('Europa_shuzuiquan'));
                    }
                    if (cards.length) player.gain(cards, 'gain2');
                    player.addSkill('Europa_rongjiao_yin');
                    player.addGaintag(cards, 'Europa_rongjiao_yin');
                }
            } else {
                if (!player.hasClan('天主教')) {
                    await player.changeEuropaReligion('天主教');
                }
                player.addTempSkill('Europa_rongjiao_yang');
            }
        },
        ai: {
            order: 3,
            result: {
                player: 1,
            },
        },
        mark: true,
        marktext: '☯',
        intro: {
            content(storage, player, skill) {
                return !storage ? '阴:你可以将你的宗教转变为新教.' : '阳:你可以将你的宗教转变为天主教.';
            },
        },
        subSkill: {
            yin: {
                charlotte: true,
                mod: {
                    cardDiscardable(card, player, name) {
                        if (card.hasGaintag('Europa_rongjiao_yin')) return false;
                    },
                    canBeDiscarded(card) {
                        if (card.hasGaintag('Europa_rongjiao_yin')) return false;
                    },
                },
            },
            yang: {
                enable: 'chooseToUse',
                filter(event, player) {
                    if (player.countCards('h', { name: 'Europa_shuzuiquan' }) < 2) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            return type == 'trick';
                        })
                        .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                return type == 'trick';
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        const dialog = ui.create.dialog('容教', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
                    },
                    check(button) {
                        const player = _status.event.player;
                        const card = { name: button.link[2] };
                        let value = player.getUseValue(card);
                        return value;
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard(card) {
                                const player = get.player();
                                return card.name == 'Europa_shuzuiquan';
                            },
                            selectCard: 2,
                            complexCard: true,
                            check(card) {
                                return 1;
                            },
                            async precontent(event, trigger, player) {
                                player
                                    .when('useCardAfter')
                                    .filter((event) => event.skill == 'Europa_rongjiao_yang_backup')
                                    .then(() => {
                                        if (player.hasHistory('damageSource', (evt) => evt.card == trigger.card)) {
                                            event.finish();
                                            return;
                                        }
                                        player
                                            .chooseTarget(`令一名天主教角色回复1点体力`, true, (card, player, target) => {
                                                return target.hasEuropaReligion('天主教');
                                            })
                                            .set('ai', (target) => {
                                                const player = get.player();
                                                return get.recoverEffect(target, player, player);
                                            });
                                    })
                                    .then(() => {
                                        if (result.bool) {
                                            player.line(result.targets);
                                            result.targets[0].recover();
                                        }
                                    });
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将两张【赎罪券】当做' + get.translation(links[0][2]) + '】使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    return get.type(name) == 'trick' && player.countCards('h', { name: 'Europa_shuzuiquan' }) > 1;
                },
                ai: {
                    order() {
                        return 1;
                    },
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            yang_backup: {},
        },
    },
    Europa_chidao: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async cost(event, trigger, player) {
            const result = await player
                .chooseTarget('请选择获得<皇家海盗>标记的角色', lib.translate.Europa_chidao_info, true, function (card, player, target) {
                    return target != player;
                })
                .set('ai', function (target) {
                    let att = get.attitude(_status.event.player, target);
                    if (att > 0) return att + 1;
                    if (att == 0) return Math.random();
                    return att;
                })
                .forResult();
            event.result = {
                bool: true,
                cost_data: result.targets[0],
            };
        },
        hasMark(mark, player, target) {
            if (!target) return player.getStorage('Europa_chidao_' + mark).length;
            return target.getStorage('Europa_chidao_' + mark).includes(player);
        },
        addMark(mark, player, target) {
            mark = 'Europa_chidao_' + mark;
            target.addAdditionalSkill(`${mark}_${player.playerid}`, mark);
            target.markAuto(mark, [player]);
            game.log(player, '令', target, '获得了', `#g<皇家海盗>`, '标记');
        },
        removeMark(mark, player, target, log) {
            if (lib.skill.Europa_chidao.hasMark(mark, player, target, log)) {
                mark = 'Europa_chidao_' + mark;
                target.removeAdditionalSkill(`${mark}_${player.playerid}`);
                target.unmarkAuto(mark, [player]);
                if (log) game.log(target, '移去了', player, '给予的', `#g<皇家海盗>`, '标记');
                else game.log(player, '移去了', target, '的', `#g<皇家海盗>`, '标记');
            }
        },
        async content(event, trigger, player) {
            let target = event.cost_data;
            player.line(target);
            lib.skill[event.name].addMark('mark', player, target);
        },
        group: 'Europa_chidao_use',
        subSkill: {
            mark: {
                mark: true,
                marktext: '盗',
                intro: {
                    name: '皇家海盗',
                    markcount: () => 0,
                    content: '皇家海盗',
                },
            },
            use: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length) {
                        return target != ui.selected.targets[0];
                    }
                    const skill = lib.skill.Europa_chidao;
                    return skill.hasMark('mark', player, target) || skill.hasMark('mark', player, target);
                },
                selectTarget: 2,
                complexSelect: true,
                complexTarget: true,
                multitarget: true,
                prompt: '出牌阶段限一次,你可以令拥有<皇家海盗>标记的角色选择是否对一名你选择的角色造成1点伤害并获得其一张手牌,若其拒绝,你须对其造成1点伤害并将标记交给一名除你以外的其他角色.',
                async content(event, trigger, player) {
                    const skill = lib.skill.Europa_chidao;
                    const target1 = event.targets[0],
                        target2 = event.targets[1];
                    const { bool } = await target1
                        .chooseBool(`你可以对${get.translation(target2)}造成1点伤害并获得其的一张手牌`)
                        .set('targetx', target2)
                        .set('ai', () => {
                            const player = get.player(),
                                target = get.event('targetx');
                            return get.damageEffect(target, player, player) >= 0 || target.countGainableCards(player, 'h');
                        })
                        .forResult();
                    if (bool) {
                        await target2.damage(target1);
                        if (target2.countGainableCards(target1, 'h')) target1.gainPlayerCard(target2, 'h', true);
                    } else {
                        await target2.damage(player);
                        if (game.countPlayer() > 2) {
                            const { bool, targets } = await player
                                .chooseTarget('请选择获得<皇家海盗>标记的角色', lib.translate.Europa_chidao_info, true, function (card, player, target) {
                                    return target != player && target != target1;
                                })
                                .set('ai', function (target) {
                                    let att = get.attitude(_status.event.player, target);
                                    if (att > 0) return att + 1;
                                    if (att == 0) return Math.random();
                                    return att;
                                })
                                .forResult();
                            if (bool) {
                                const target3 = targets[0];
                                player.line(target3);
                                skill.removeMark('mark', player, target1);
                                skill.addMark('mark', player, target3);
                            }
                        }
                    }
                },
            },
        },
    },
    Europa_jiansi: {
        audio: 'ext:欧陆风云/audio/skill:2',
        zhuSkill: true,
        limited: true,
        enable: 'phaseUse',
        filterTarget: lib.filter.notMe,
        filter(event, player) {
            return player.hasZhuSkill('Europa_jiansi');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.awakenSkill(event.name);
            target.addSkill('Europa_viceroy');
            player.addSkill('Europa_jiansi_effect');
            player.markAuto('Europa_jiansi_effect', [target]);
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    if (target.hasSkill('Europa_viceroy')) return 0.9;
                    return 1;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'phaseDrawEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('Europa_jiansi_effect').includes(event.player);
                },
                async content(event, trigger, player) {
                    get.info('Europa_viceroy').Europa_Mark(trigger.player, 1, 'add', 'Europa_viceroy_militia');
                    if (trigger.player.countCards('he')) {
                        trigger.player.chooseToGive(player, 'he', true);
                    }
                },
                mark: true,
                intro: {
                    content: '$摸牌阶段结束后获得一个<民兵>,并须交给你一张牌',
                },
            },
        },
    },
    _Europa_yilishabaiyishiChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_yilishabaiyishiChooseAudio) return false;
            const list = ['Europa_yilishabaiyishi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_yilishabaiyishiChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/斯卡布罗集市.mp3`;
        },
    },
    Europa_silue: {
        enable: 'chooseToUse',
        viewAs: {
            name: 'chenghuodajie',
        },
        filter(event, player) {
            return player.countCards('hes', { suit: 'spade' });
        },
        filterCard(card) {
            return card.suit == 'spade';
        },
        check(card) {
            return 6.5 - get.value(card);
        },
        complexCard: true,
        position: 'hes',
        group: 'Europa_silue_damage',
        subSkill: {
            damage: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'chenghuodajie';
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    if (trigger.player.countGainableCards(player, 'e')) {
                        await player.gainPlayerCard(trigger.player, 'e');
                    }
                    if (trigger.player.hasSkillTag('colonialExploration')) {
                        trigger.player.addSkill('Europa_silue_fix');
                    }
                },
            },
            fix: {
                trigger: {
                    player: 'explorationContingencyBegin',
                },
                forced: true,
                charlotte: true,
                popup: false,
                async content(event, trigger, player) {
                    trigger.num = 4;
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_dengchuan: {
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            return get.distance(event.player, player) > 1;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.addTempSkill('Europa_dengchuan_effect');
            player.markAuto('Europa_dengchuan_effect', [trigger.player]);
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    trigger.directHit.addArray(game.filterPlayer((i) => player.getStorage(event.name).includes(i)));
                },
                mod: {
                    globalFrom(from, to, distance) {
                        if (to.getStorage('Europa_dengchuan_effect').includes(from)) return -Infinity;
                    },
                },
            },
        },
    },
    Europa_rugu: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        hasMark(mark, player, target) {
            if (!target) return player.getStorage('Europa_rugu_' + mark).length;
            return target.getStorage('Europa_rugu_' + mark).includes(player);
        },
        addMark(mark, player, target) {
            mark = 'Europa_rugu_' + mark;
            target.addAdditionalSkill(`${mark}_${player.playerid}`, mark);
            target.markAuto(mark, [player]);
            game.log(player, '令', target, '获得了', `#g<股东>`, '标记');
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_viceroy');
            const targets = game.filterPlayer(/*target => target != player*/);
            for (const target of targets) {
                const { bool } = await target.chooseToGive(player, 'h').forResult();
                if (bool) {
                    lib.skill[event.name].addMark('mark', player, target);
                    await player.gainMaxHp(2);
                    await player.recover(2);
                    get.info('Europa_viceroy').Europa_Mark(player, 1, 'add', 'Europa_viceroy_militia');
                }
            }
        },
        subSkill: {
            mark: {
                mark: true,
                marktext: '股东',
                intro: {
                    markcount: () => 0,
                    name: '股东',
                    content: '股东',
                },
            },
        },
    },
    Europa_fuchou: {
        trigger: {
            player: 'phaseBegin',
        },
        forced: true,
        filter(event, player) {
            return game.hasPlayer(function (target) {
                return lib.skill.Europa_rugu.hasMark('mark', player, target);
            });
        },
        logTarget(event, player) {
            return game.filterPlayer(function (target) {
                return lib.skill.Europa_rugu.hasMark('mark', player, target);
            });
        },
        async content(event, trigger, player) {
            const targets = event.targets;
            for (const target of targets) {
                const choiceList = [`1.回合结束前,选择一名其他角色,你对其造成伤害`, `2.回合结束前使用至少三张牌`, `3.本回合出牌阶段结束时,你的手牌中没有【起义】`].map((info, item) => [item + 1, info]);
                const { bool, links } = await target
                    .chooseButton(['付酬', [choiceList, 'textbutton']])
                    .set('ai', (button) => {
                        return 1 + Math.random();
                    })
                    .forResult();
                if (bool) {
                    player.addTempSkill('Europa_fuchou_goal');
                    player.addTempSkill('Europa_fuchou_goal' + links[0]);
                    player.markAuto('Europa_fuchou_goal' + links[0], [target]);
                    target.addTempSkill('Europa_fuchou_record');
                    target.setStorage('Europa_fuchou_record', [links[0], null]);
                    if (links[0] == 1) {
                        const result = await target
                            .chooseTarget(true, `请选择${get.translation(player)}要造成伤害的角色`)
                            .set('filterTarget', (card, player, target) => {
                                return target != player;
                            })
                            .set('sourcex', player)
                            .set('ai', (target) => {
                                const source = get.event('sourcex');
                                return get.damageEffect(target, source, source);
                            })
                            .forResult();
                        if (result.bool) {
                            target.setStorage('Europa_fuchou_record', [links[0], result.targets[0]]);
                        }
                    }
                }
            }
        },
        subSkill: {
            goal: {
                trigger: {
                    player: ['phaseUseAfter', 'phaseAfter'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (event.name == 'phaseUse') return player.hasHistory('useSkill');
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'phaseUse') {
                        const targets = game.filterPlayer((i) => player.getStorage('Europa_fuchou_goal3').includes(i)).sortBySeat();
                        if (!targets.length) return;
                        for (const target of targets) {
                            const result = await target
                                .chooseBool(`你可以令${get.translation(player)}减少1点体力上限`)
                                .set('sourcex', player)
                                .set('ai', () => {
                                    const player = get.player(),
                                        source = get.event('sourcex');
                                    return get.attitude(player, sourcex) < 0;
                                })
                                .forResult();
                            if (bool) await player.loseMaxHp();
                        }
                    } else {
                        const targets = game
                            .filterPlayer((i) => {
                                return player.getStorage('Europa_fuchou_goal1').includes(i) || player.getStorage('Europa_fuchou_goal2').includes(i);
                            })
                            .sortBySeat();
                        if (!targets.length) return;
                        for (const target of targets) {
                            const result = await target
                                .chooseBool(`你可以令${get.translation(player)}减少1点体力上限`)
                                .set('sourcex', player)
                                .set('ai', () => {
                                    const player = get.player(),
                                        source = get.event('sourcex');
                                    return get.attitude(player, sourcex) < 0;
                                })
                                .forResult();
                            if (bool) await player.loseMaxHp();
                        }
                    }
                },
            },
            record: {
                charlotte: true,
                mark: true,
                intro: {
                    content(storage, player, skill) {
                        return `选项:${storage[0]}<br>目标:${get.translation(storage[1]) || '无'}`;
                    },
                },
            },
            goal1: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return game.hasPlayer(function (current) {
                        return player.getStorage('Europa_fuchou_goal1').includes(current) && current.getStorage('Europa_fuchou_record').includes(event.player);
                    });
                },
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer((target) => {
                            return player.getStorage(event.name).includes(target);
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        await player.draw(3);
                        player.line(target);
                        if (player.countCards('he') && target.isIn()) {
                            await player.chooseToGive(target, 'he', 2, true);
                        }
                        player.unmarkAuto(event.name, [target]);
                    }
                },
            },
            goal2: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.getHistory('useCard').length == 3;
                },
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer((target) => {
                            return player.getStorage(event.name).includes(target);
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        await player.draw(3);
                        player.line(target);
                        if (player.countCards('he') && target.isIn()) {
                            await player.chooseToGive(target, 'he', 2, true);
                        }
                        player.unmarkAuto(event.name, [target]);
                    }
                },
            },
            goal3: {
                trigger: {
                    player: 'phaseUseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return !player.countCards('h', { name: 'Europa_qiyi' });
                },
                async content(event, trigger, player) {
                    const targets = game
                        .filterPlayer((target) => {
                            return player.getStorage(event.name).includes(target);
                        })
                        .sortBySeat();
                    for (const target of targets) {
                        await player.draw(3);
                        player.line(target);
                        if (player.countCards('he') && target.isIn()) {
                            await player.chooseToGive(target, 'he', 2, true);
                        }
                        player.unmarkAuto(event.name, [target]);
                    }
                },
            },
        },
    },
    Europa_guhang: {
        trigger: {
            global: 'chooseColonialExplorationBegin1',
        },
        filter(event, player) {
            return event.player != player;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            if (trigger.player.countGainableCards(player, 'he')) await player.gainPlayerCard(trigger.player, 'he', true);
            const { bool, links } = await player
                .chooseButton(true, [
                    `${get.prompt2(event.name)}`,
                    [
                        [
                            [2, '　　　好战部落　　　'],
                            [3, '　　　水果岛　　　'],
                            [4, '　　　海盗来袭　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [5, '　　　雷暴巨浪　　　'],
                            [6, '　　　到达印度　　　'],
                            [7, '　　　哨站　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [8, '　　　船翻了　　　'],
                            [9, '　　　瘟疫　　　'],
                            [10, '　　　巨型海怪　　　'],
                        ],

                        'tdnodes',
                    ],

                    [
                        [
                            [11, '　　　补给点　　　'],
                            [12, '　　　友好部落　　　'],
                        ],

                        'tdnodes',
                    ],
                ])
                .set('ai', (button) => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    switch (button.link) {
                        case 3:
                        case 6:
                        case 7:
                        case 11:
                        case 12:
                            return get.attitude(player, target) > 0 ? 1 + Math.random() : 0;
                        default:
                            return get.attitude(player, target) > 0 ? 0 : 1 + Math.random();
                    }
                })
                .forResult();
            trigger.player.addSkill('Europa_guhang_fix');
            trigger.player.setStorage('Europa_guhang_fix', links[0]);
        },
        subSkill: {
            fix: {
                trigger: {
                    player: 'explorationContingencyBegin',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num = player.storage[event.name];
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_fuguo: {
        trigger: {
            global: 'phaseDrawEnd',
        },
        popup: false,
        filter(event, player) {
            return event.player != player;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5)), 'he')
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.attitude(player, trigger.player) > 0) return 0;
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            trigger.player.addTempSkill('Europa_fuguo_max');
            trigger.player.addMark('Europa_fuguo_max', 2, false);
            player.addTempSkill('Europa_fuguo_effect');
            player.markAuto('Europa_fuguo_effect', [trigger.player]);
        },
        subSkill: {
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.countMark('Europa_fuguo_max'));
                    },
                },
            },
            effect: {
                charlotte: true,
                popup: false,
                trigger: {
                    global: 'phaseJieshuBegin',
                },
                check(event, player) {
                    if (event.player == player) return get.attitude(player, event.source) > -5;
                    return get.attitude(player, event.player) > -5;
                },
                filter(event, player) {
                    return event.player.countCards('h') < event.player.getHandcardLimit();
                },
                prompt2(event, player) {
                    return `你可以摸两张牌并交给${get.translation(event.player)}一张牌`;
                },
                async content(event, trigger, player) {
                    await player.draw(2);
                    var cards = player.getCards('he');
                    if (cards.length && trigger.player.isIn()) {
                        player.chooseToGive('he', '交给' + get.translation(trigger.player) + '一张牌', true, trigger.player);
                    }
                },
            },
        },
    },
    Europa_bianshi: {
        trigger: {
            player: 'phaseUseBegin',
        },
        filter(event, player) {
            return player.countCards('h');
        },
        check(event, player) {
            const cards = player.getCards('h');
            return cards.every((card) => get.tag(card, 'damage')) || cards.every((card) => !get.tag(card, 'damage'));
        },
        async content(event, trigger, player) {
            const cards = player.getCards('h');
            await player.showHandcards();
            if (cards.every((card) => get.tag(card, 'damage'))) {
                player.addTempSkill('Europa_bianshi_hasdamage', { player: ['phaseUseEnd', 'phaseUseSkipped'] });
            } else if (cards.every((card) => !get.tag(card, 'damage'))) {
                player.addTempSkill('Europa_bianshi_nodamage', { player: ['phaseUseEnd', 'phaseUseSkipped'] });
            }
        },
        subSkill: {
            hasdamage: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    const cards = get.cardPile(function (card) {
                        return !get.tag(card, 'damage');
                    });
                    if (cards) player.gain(cards, 'gain2');
                },
                mark: true,
                intro: {
                    markcount: () => '伤害',
                    content: '出牌阶段你每使用张伤害类牌,你从牌库中随机获得一张非伤害类牌',
                },
            },
            nodamage: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return !get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    const cards = get.cardPile2(function (card) {
                        return get.tag(card, 'damage');
                    });
                    if (cards) player.gain(cards, 'gain2');
                },
                mark: true,
                intro: {
                    markcount: () => '非伤害',
                    content: '出牌阶段你每使用非伤害类牌,你从牌库中随机获得一张伤害类牌',
                },
            },
        },
    },
    Europa_paozhen: {
        audio: 'ext:欧陆风云/audio/skill:2',
        mark: true,
        marktext: '炮弹',
        intro: {
            name: '炮弹',
            content: '当前有#枚炮弹',
        },
        init(player) {
            player.storage.Europa_paozhen = 5;
        },
        trigger: {
            player: 'useCardToPlayered',
        },
        forced: true,
        logTarget: 'target',
        filter(event, player) {
            if (event.parent.triggeredTargets3.length > 1) return false;
            return event.card && event.card.name == 'sha' && player.countMark('Europa_paozhen') > 0;
        },
        multitarget: true,
        content() {
            'step 0';
            var num1 = Math.min(player.countMark('Europa_paozhen'), 5);
            var list = [];
            var map = {};
            for (var i = 1; i <= num1; i++) {
                cn = get.cnNumber(i, true);
                list.push(cn);
                map[cn] = i;
            }
            list.push('cancel2');
            event.map = map;
            player
                .chooseControl(list, function () {
                    return get.cnNumber(_status.event.goon, true);
                })
                .set('prompt', '炮弹装膛,请选择轰击的炮弹数')
                .set('goon', num1);
            ('step 1');
            if (result.control != 'cancel2') {
                game.setNature(trigger.parent.card, 'fire');
                event.num = event.map[result.control];
                player.removeMark('Europa_paozhen', event.num);
            } else {
                event.finish();
            }
            ('step 2');
            if (event.num == 5) {
                trigger.directHit.addArray(
                    game.filterPlayer(function (current) {
                        return current != player;
                    })
                );
            } else player.addTempSkill('Europa_paozhen_wushuang');
            if (event.num > 3) {
                player.storage.Europa_paozhen_discard = 1;
                player.storage.Europa_paozhen_targets = [];
                player.storage.Europa_paozhen_num = 1;
            }
            player.chooseTarget([1, Math.min(3, event.num)], '为' + get.translation(trigger.card) + '增加至多' + get.cnNumber(Math.min(3, event.num)) + '个目标目标', function (card, player, target) {
                var trigger = _status.event.getTrigger();
                return !trigger.targets.includes(target) && lib.filter.targetEnabled2(trigger.card, player, target);
            });
            ('step 3');
            if (result.bool) {
                for (var i = 0; i < result.targets.length; i++) {
                    trigger.parent.targets.push(result.targets[i]);
                }
                player.storage.Europa_paozhen_num = trigger.parent.targets.length;
            }
            ('step 4');
            if (event.num == 1) {
                game.playAudio('../extension/欧陆风云/audio/skill/Europa_paozhen_yinxiao1');
            }
            if (event.num == 2) {
                game.playAudio('../extension/欧陆风云/audio/skill/Europa_paozhen_yinxiao2');
            }
            if (event.num == 3) {
                game.playAudio('../extension/欧陆风云/audio/skill/Europa_paozhen_yinxiao3');
            }
            if (event.num == 4) {
                game.playAudio('../extension/欧陆风云/audio/skill/Europa_paozhen_yinxiao4');
            }
            if (event.num == 5) {
                game.playAudio('../extension/欧陆风云/audio/skill/Europa_paozhen_yinxiao5');
            }
        },
        group: ['Europa_paozhen_discard'],
        subSkill: {
            discard: {
                trigger: {
                    source: 'damageEnd',
                    player: 'shaAfter',
                },
                forced: true,
                shaRelated: true,
                pop: false,
                filter(event, player, name) {
                    if (name == 'damageEnd')
                        return player.storage.Europa_paozhen_discard == 1 && event.card?.name == 'sha'; //QQQ
                    else return player.storage.Europa_paozhen_discard == 1 && player.storage.Europa_paozhen_targets.length;
                },
                _priority: 1,
                logTarget: 'target',
                content() {
                    'step 0';
                    if (event.triggername == 'damageEnd') {
                        player.storage.Europa_paozhen_targets.push(trigger.player);
                    } else {
                        player.storage.Europa_paozhen_num--;
                        if (player.storage.Europa_paozhen_num == 0) {
                            for (var i of player.storage.Europa_paozhen_targets) {
                                i.randomDiscard('he', 2);
                                player.storage.Europa_paozhen_discard = 0;
                            }
                        }
                    }
                },
            },
            wushuang: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && !event.parent.directHit.includes(event.target);
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
        },
    },
    Europa_kaixuan: {
        trigger: {
            global: 'phaseEnd',
            player: 'phaseBegin',
        },
        forced: true,
        shaRelated: true,
        filter(event, player, name) {
            if (name == 'phaseEnd') {
                var num = 0;
                player.getHistory('sourceDamage', function (evt) {
                    num += evt.num;
                });
                return num > 0;
            } else return player.countMark('Europa_paozhen') < 10;
        },
        _priority: 1,
        content() {
            if (event.triggername == 'phaseEnd') {
                var num = 0;
                player.getHistory('sourceDamage', function (evt) {
                    num += evt.num;
                });
                if (player.countMark('Europa_paozhen') < 10) {
                    player.addMark('Europa_paozhen', Math.min(10 - player.countMark('paodan'), Math.min(num, 3)));
                }
                player.draw('Europa_paozhen', Math.min(10 - player.countMark('paodan'), Math.min(num, 3)));
            }
        },
    },
    Europa_xili: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        filter(event, player) {
            return !player.storage.Europa_xili && player.countMark('Europa_paozhen') == 10;
        },
        limited: true,
        mark: true,
        line: 'fire',
        content() {
            'step 0';
            player.removeMark('Europa_paozhen', 10);
            event.target = game.filterPlayer(function (current) {
                return current != player;
            });
            event.num = 3;
            ('step 1');
            event.num--;
            game.playmusic('Europa_xili_yinxiao');
            player.useCard({ name: 'sha', nature: 'fire', isCrad: false }, event.target, true);
            if (event.num !== 0) {
                event.goto(1);
            } else event.finish();
        },
        init(player) {
            player.storage.Europa_xili = false;
        },
        intro: {
            content: 'limited',
        },
    },
    Europa_sanyi: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            player.loseHp();
        },
        group: 'Europa_sanyi_damage',
        subSkill: {
            damage: {
                trigger: {
                    source: 'damageSource',
                },
                filter(event, player) {
                    return !event.player.hasSkill('Europa_sanyi');
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.player.addSkills('Europa_sanyi');
                    trigger.player.addSkill('Europa_sanyi_remove');
                },
            },
            remove: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return ['jiu', 'tao'].includes(event.card.name);
                },
                async content(event, trigger, player) {
                    trigger.player.removeSkills('Europa_sanyi');
                    trigger.player.removeSkill('Europa_sanyi_remove');
                },
            },
        },
    },
    Europa_ejun: {
        group: ['Europa_ejun_damage', 'Europa_ejun_gain'],
        subSkill: {
            damage: {
                trigger: {
                    source: 'damageSource',
                },
                filter(event, player) {
                    if (_status.currentPhase != player) return false;
                    if (event.parent.name == 'Europa_ejun_gain') return false;
                    if (player.getStorage('Europa_ejun_used').includes(event.player)) return false;
                    return event.player != player;
                },
                check(event, player) {
                    return get.damageEffect(event.player, player, player) > 0;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    player.addTempSkill('Europa_ejun_used');
                    player.markAuto('Europa_ejun_used', [trigger.player]);
                    await player.gainPlayerCard(trigger.player, 'he', true);
                    player.tempBanSkill('Europa_sanyi', false);
                },
            },
            gain: {
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                forced: true,
                getIndex(event, player, triggername) {
                    if (!event.getg?.(player)?.length) return false;
                    const cards = event.getg(player);
                    return game
                        .filterPlayer((current) => {
                            if (current === player || player.getStorage('Europa_ejun_used').includes(current)) return false;
                            return event?.getl?.(current)?.cards2?.some((card) => cards.includes(card));
                        })
                        .sortBySeat(player);
                },
                filter(event, player, name, target) {
                    if (event.getParent(2).name == 'Europa_ejun_damage') return false;
                    return target?.isIn();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('Europa_ejun_used');
                    player.markAuto('Europa_ejun_used', [target]);
                    await target.damage();
                    player.tempBanSkill('Europa_sanyi', false);
                },
            },
            used: {
                charlotte: true,
                intro: {
                    content: '本回合已对$使用过<恶军>',
                },
            },
        },
    },
    Europa_jieze: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_viceroy');
        },
        group: 'Europa_jieze_viceroy',
        subSkill: {
            viceroy: {
                trigger: {
                    player: 'Europa_viceroy_tongzhicelueAfter',
                },
                filter(event, player) {
                    return [3, 9].includes(event.tongzhicelue);
                },
                prompt2: '你可以摸两张牌',
                async content(event, trigger, player) {
                    player.draw(2);
                },
            },
        },
    },
    Europa_jiehang: {
        trigger: {
            player: ['useCard', 'respond'],
        },
        popup: false,
        filter(event, player) {
            return Array.isArray(event.respondTo) && event.respondTo[0] != player;
        },
        logTarget: (event) => event.respondTo[0],
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5), trigger.respondTo[0]), 'hes')
                .set('ai', (card) => {
                    const player = player,
                        trigger = get.event().getTrigger(),
                        target = trigger.respondTo[0];
                    if (get.damageEffect(target, player, player) <= 0) return 0;
                    return 6.5 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.discard(event.cards);
            target.damage();
        },
    },
    Europa_jiewei: {
        trigger: {
            global: 'useCardToTarget',
        },
        filter(event, player) {
            return event.card && event.card.name == 'sha' && event.target != player && event.target.hp == event.getParent('useCard').baseDamage;
        },
        logTarget: 'target',
        check(trigger, player) {
            if (get.attitude(player, trigger.target) <= 0) return false;
            if (player.countCards('h', 'shan') || player.getEquip(2) || trigger.target.hp == 1 || player.hp > trigger.target.hp + 1) {
                if (!trigger.target.countCards('h', 'shan')) {
                    return true;
                }
            }
            return false;
        },
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, 'roundStart', false);
            trigger.parent.targets.remove(trigger.target);
            trigger.parent.triggeredTargets2.remove(trigger.target);
            trigger.parent.targets.push(player);
            trigger.untrigger();
            trigger.player.line(player);
            const evt = trigger.getParent('useCard');
            if (typeof evt.baseDamage != 'number') evt.baseDamage = 1;
            player
                .when({ global: 'useCardAfter' })
                .filter((event) => event.card == trigger.card)
                .then(() => {
                    if (player.hasHistory('damage', (evt) => evt.card == trigger.card)) {
                        player.draw(num);
                    } else {
                        delete player.storage[`temp_ban_Europa_jiewei`];
                        game.log(player, '重置了', '#g', get.translation('Europa_jiewei'));
                    }
                })
                .vars({ num: evt.baseDamage });
        },
    },
    Europa_hanshan: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return (
                target != player &&
                target.hasCard(function (card) {
                    return lib.filter.cardDiscardable(card, target, 'Europa_hanshan');
                })
            );
        },
        selectTarget: -1,
        multitarget: true,
        async content(event, trigger, player) {
            await player.loseMaxHp();
            const num = player.getAllHistory('useSkill', (evt) => evt.skill == event.name).length;
            for (const target of event.targets) {
                if (
                    target.hasCard(function (card) {
                        return lib.filter.cardDiscardable(card, target, 'Europa_hanshan');
                    })
                )
                    await target.chooseToDiscard('h', num, true);
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    const num = player.getAllHistory('useSkill', (evt) => evt.skill == 'Europa_hanshan').length + 1;
                    return -num;
                },
            },
        },
    },
    Europa_yanqu: {
        group: ['Europa_yanqu_add', 'Europa_yanqu_mid', 'Europa_yanqu_sub'],
        subSkill: {
            add: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                filter(event, player) {
                    return event.hasNature('ice');
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
            },
            mid: {
                trigger: {
                    player: 'loseHpBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.loseMaxHp();
                },
            },
            sub: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                filter(event, player) {
                    return !event.hasNature('ice');
                },
                async content(event, trigger, player) {
                    trigger.num--;
                },
            },
        },
    },
    Europa_luoshi: {
        trigger: {
            player: 'loseMaxHpBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return target != player;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    return get.damageEffect(target, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            event.targets[0].damage();
        },
    },
    Europa_qinzheng: {
        trigger: {
            global: 'phaseUseBegin',
        },
        popup: false,
        filter(event, player) {
            return event.player != player && player.countCards('hes') && player.canUse({ name: 'sha' }, event.player);
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard('hes', get.prompt2(event.name.slice(0, -5)))
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.effect(trigger.player, { name: 'sha' }, player, player) <= 0) return 0;
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            const target = trigger.player;
            await player.discard(event.cards);
            const sha = new lib.element.VCard({ name: 'sha' });
            if (player.canUse(sha, trigger.player)) {
                await player.useCard(sha, trigger.player);
            }
            if (!player.hasHistory('sourceDamage', (evt) => evt.getParent(4).name == event.name)) {
                const juedou = new lib.element.VCard({ name: 'juedou' });
                if (trigger.player.canUse(juedou, player)) {
                    trigger.player.useCard(juedou, player);
                }
            }
        },
    },
    Europa_zhengfu_zhuqizhen: {
        derivation: ['Europa_qinzheng', 'Europa_nanxia'],
        trigger: {
            player: 'dying',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            if (_status.currentPhase == player) return false;
            return event.parent?.name == 'damage' && event.parent.source && event.parent.source != player;
        },
        logTarget(event, player) {
            return event.parent.source;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.awakenSkill(event.name);
            get.info('Europa_tianchaojizhi').Europa_Mark(player, 50, 'remove');
            await player.removeSkills('Europa_qinzheng');
            await player.recoverTo(player.maxHp);
            await target.addSkills('Europa_nanxia');
        },
    },
    Europa_nanxia: {
        trigger: {
            global: 'phaseBegin',
        },
        logTarget: 'player',
        filter(event, player) {
            return event.player != player;
        },
        async content(event, trigger, player) {
            player.addMark('Europa_nanxia', 1, false);
            const { bool, cards } = await trigger.player
                .chooseToGive(player, 'he')
                .set('sourcex', player)
                .set('ai', (card) => {
                    const player = get.player(),
                        source = get.event('sourcex'),
                        Zhuqizhen = source.storage.Europa_nanxia;
                    if (player == Zhuqizhen) return 6 - get.value(card);
                    return -unuseful(card);
                })
                .forResult();
            if (!bool) {
                const targets = game.filterPlayer((target) => {
                    return get.nameList(target).includes('Europa_zhuqizhen');
                });
                for (const target of targets) {
                    await target.loseHp();
                }
            }
            if (player.countMark('Europa_nanxia') >= 3) {
                player.removeSkills('Europa_nanxia');
            }
        },
        group: 'Europa_nanxia_remove',
        subSkill: {
            remove: {
                trigger: {
                    global: 'loseHpEnd',
                },
                forced: true,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return get.nameList(event.player).includes('Europa_zhuqizhen');
                },
                async content(event, trigger, player) {
                    trigger.player.addMark('Europa_nanxia_remove', 1, false);
                    if (trigger.player.countMark('Europa_nanxia_remove') < 3) return;
                    await player.removeSkills('Europa_nanxia');
                    const targets = game.filterPlayer((target) => {
                        return get.nameList(target).includes('Europa_zhuqizhen');
                    });
                    for (const target of targets) {
                        await target.addSkills('Europa_jiye');
                    }
                },
            },
        },
    },
    Europa_jiye: {
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            get.info('Europa_tianchaojizhi').Europa_Mark(player, 5);
            const { cards: cards1 } = await player.draw(3).forResult();
            await player.showCards(cards1);
            if (!game.hasPlayer((current) => current.hasSkill('Europa_qiulong'))) {
                const cards = cards1.filter((res) => get.type2(res, false) == 'trick').length;
                if (!cards.length) return;
                var enemy = game.countPlayer(function (current) {
                    return current != player && get.damageEffect(current, player, player) > 0;
                });
                const result = await player
                    .chooseCardTarget({
                        filterTarget: true,
                        selectCard: [1, cards.length],
                        cardxs: cards,
                        selectTarget() {
                            if (ui.selected.targets.length > ui.selected.cards.length) {
                                game.uncheck('target');
                            }
                            return ui.selected.cards.length;
                        },
                        filterCard(card, player) {
                            return get.event('cardxs').includes(card) && lib.filter.cardDiscardable(card, player);
                        },
                        ai1(card) {
                            if (ui.selected.cards.length >= enemy) return 0;
                            return 9 - get.value(card);
                        },
                        ai2(target) {
                            const player = get.player();
                            return get.damageEffect(target, player, player);
                        },
                        prompt: `你可以弃置其中任意张锦囊牌并对等量名角色造成1点伤害`,
                    })
                    .forResult();
                if (result.bool) {
                    await player.discard(result.cards);
                    for (const target of result.targets) {
                        await target.damage();
                    }
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
    Europa_yingzong: {
        trigger: {
            global: 'die',
        },
        zhuSkill: true,
        Europa_tianchaojizhi_lower(player) {
            return player.hasZhuSkill('Europa_yingzong') ? 31 : 0;
        },
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_yingzong')) return false;
            return event.player.countCards('he') && event.player.group == player.group;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const cards = trigger.player.getCards('he');
            await game.cardsGotoOrdering(cards);
            if (Array.isArray(cards))
                for (var i of cards) {
                    ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                }
        },
        init(player) {
            if (!player.hasZhuSkill('Europa_yingzong')) return;
            player.addSkill('Europa_tianchaojizhi');
        },
    },
    _Europa_zhuqizhenChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_sulaimanChooseAudio) return false;
            const list = ['Europa_zhuqizhen'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_sulaimanChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/牡丹亭.mp3`;
        },
    },
    Europa_suishen: {
        derivation: 'Europa_shushou',
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        getIndex(event, player, triggername) {
            var evt = event.getParent('phaseDraw');
            if (event.name !== 'loseAsyncAfter') return [event.player];
            return game
                .filterPlayer(function (target) {
                    if (target.hasSkill('Europa_shushou')) return false;
                    if (evt && evt.player == target) return false;
                    return event.getg(target).length && target.countCards('h', (card) => event.getg(target).includes(card));
                })
                .sortBySeat();
        },
        filter(event, player) {
            var evt = event.getParent('phaseDraw');
            return game.hasPlayer((target) => {
                if (target.hasSkill('Europa_shushou')) return false;
                if (evt && evt.player == target) return false;
                return event.getg(target).length && target.countCards('h', (card) => event.getg(target).includes(card));
            });
        },
        logTarget(event, player, name, target) {
            return target;
        },
        check(event, player, name, target) {
            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
            return get.attitude(player, target) < 0;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.loseHp();
            const cards = target.getCards('h', (card) => trigger.getg(target).includes(card));
            if (cards.length) await target.discard(cards);
            target.addTempSkills('Europa_shushou', { player: 'phaseEnd' });
        },
        ai: {
            expose: 0.4,
            threaten: 2.2,
        },
    },
    Europa_hengjing: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        async content(event, trigger, player) {
            const target = event.targets[0],
                cards = [];
            const targets = game.filterPlayer((current) => {
                return current.inRange(target) && current.countDiscardableCards(player, 'he');
            });
            player.line(targets);
            for (const targetx of targets) {
                if (targetx.countDiscardableCards(player, 'he')) {
                    const { bool, links } = await player.discardPlayerCard(targetx, 'he', true).forResult();
                    if (bool) cards.addArray(links);
                }
            }
            while (cards.length) {
                //QQQ
                const { bool, links } = await player
                    .chooseButton([`你可以使用其中的任意张牌`, cards])
                    .set('filterButton', (button) => {
                        const player = get.player();
                        return player.hasUseTarget(button.link, false, false);
                    })
                    .set('ai', (button) => {
                        const player = get.player();
                        return player.getUseValue(button.link);
                    })
                    .forResult();
                if (bool) {
                    cards.removeArray(links);
                    await player.chooseUseTarget(links[0]);
                }
                if (!bool) break;
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    return game.filterPlayer((current) => {
                        return current.inRange(target);
                    }).length;
                },
            },
        },
    },
    Europa_shushou: {
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        forced: true,
        filter(event, player) {
            const cards = event.getg(player);
            return cards.length && player.countCards('h', (card) => cards.includes(card));
        },
        async content(event, trigger, player) {
            const cards = trigger.getg(player).filter((card) => player.getCards('h').includes(card));
            if (cards.length) {
                player.discard(cards);
                player.addMark(event.name, cards.length, false);
                if (player.countMark(event.name) >= 3) {
                    await player.loseHp();
                    player.removeSkills(event.name);
                }
            }
        },
        ai: {
            neg: true,
        },
    },
    Europa_canyuan: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_mongolInvasion_init');
            player.addSkill('Europa_mongolInvasion_change');
        },
        ai: {
            threaten: 4.5,
            Europa_mongolInvasion: true,
            Europa_mongolInvasion_no3: true,
            Europa_mongolInvasion_no5: true,
        },
    },
    Europa_fulong: {
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            return event.player == game.zhu && event.player.getHp() <= 2;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const cards = trigger.player.getEquips('Europa_chuanguoyuxi');
            if (cards.length) {
                await player.gain(cards[0], 'gain2');
                if (player.getCards('h').includes(cards[0]) && card.name == 'Europa_chuanguoyuxi') {
                    player.chooseUseTarget(cards[0], 'nopopup', true);
                }
            }
        },
    },
    Europa_fuluan: {
        trigger: {
            player: 'Europa_fuluan_loseHp',
        },
        forced: true,
        async content(event, trigger, player) {
            player.loseHp();
        },
        init(player, skill) {
            player.addSkill('Europa_fuluan_record');
        },
        ai: {
            neg: true,
        },
        subSkill: {
            record: {
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                forced: true,
                charlotte: true,
                silent: true,
                firstDo: true,
                filter(event, player) {
                    return event.type == 'discard' && event.getl(player).cards2.length;
                },
                async content(event, trigger, player) {
                    player.addMark('Europa_fuluan_record', trigger.getl(player).cards2.length, false);
                    while (player.countMark('Europa_fuluan_record') >= 2) {
                        player.removeMark('Europa_fuluan_record', 2, false);
                        const next = game.createEvent('Europa_fuluan_loseHp');
                        next.player = player;
                        next.setContent('emptyEvent');
                    }
                },
            },
        },
    },
    Europa_kouliao: {
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        filter(event, player) {
            return game.roundNumber == 3;
        },
        async content(event, trigger, player) {
            await player.draw(3);
            player.recoverTo(player.maxHp);
        },
    },
    Europa_yanwen: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (!player.countCards('hes')) return false;
            for (var i of lib.inpile) {
                var type = get.type(i);
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
                        if (event.filterCard && event.filterCard({ name }, player, event)) list.push(['基本', '', 'sha']);
                        for (var nature of lib.inpile_nature) {
                            if (event.filterCard && event.filterCard({ name, nature }, player, event)) list.push(['基本', '', 'sha', nature]);
                        }
                    } else if (get.type(name) == 'trick' && event.filterCard({ name }, player, event)) list.push(['锦囊', '', name]);
                    else if (get.type(name) == 'basic' && event.filterCard({ name }, player, event)) list.push(['基本', '', name]);
                }
                return ui.create.dialog(get.translation('Europa_yanwen'), [list, 'vcard']);
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
                        return get.type2(card) == get.type2(get.card());
                    },
                    popname: true,
                    check(card) {
                        return 8 - get.value(card);
                    },
                    position: 'hes',
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('Europa_yanwen', false, false);
                    },
                };
            },
            prompt(links, player) {
                return '将一张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            var type = get.type(name);
            return (type == 'basic' || type == 'trick') && player.countCards('hes', { type: ['basic', 'trick'] });
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
    Europa_xunjie: {
        audio: 'ext:欧陆风云/audio/skill:2',
        global: 'Europa_xunjie_global',
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        popup: false,
        filter(event, player) {
            if (!event.getg || !event.getg(player)?.length) return false;
            return player.countCards('hes') >= event.getg(player).length;
        },
        async cost(event, trigger, player) {
            const cards = trigger.getg(player);
            event.result = await player
                .chooseCard(get.prompt2(event.name.slice(0, -5)))
                .set('selectCard', cards.length)
                .set('ai', (card) => {
                    const player = get.player();
                    if (player.getExpansions('Europa_xunjie').length + ui.selected.cards.length > 6) return 0;
                    return 5 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.addToExpansion(event.cards, player, 'give').gaintag.add('Europa_xunjie');
        },
        intro: {
            content: 'expansion',
            markcount: 'expansion',
        },
        group: 'Europa_xunjie_draw',
        subSkill: {
            draw: {
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = Math.min(player.maxHp, Math.max(2, player.getExpansions('Europa_xunjie').length));
                    await player.draw(num);
                    trigger.changeToZero();
                },
            },
            global: {
                trigger: {
                    player: 'phaseBegin',
                },
                popup: false,
                filter(event, player) {
                    return game.hasPlayer((target) => {
                        return target != player && target.hasSkill('Europa_xunjie');
                    });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCardTarget({
                            prompt: '你可以将一张牌置于一名角色的武将牌上,称为<训>',
                            filterCard: true,
                            position: 'hes',
                            filterTarget(card, player, target) {
                                return target != player && target.hasSkill('Europa_xunjie');
                            },
                            ai1(card) {
                                return 5 - get.value(card);
                            },
                            ai2(target) {
                                const player = get.player();
                                return get.attitude(player, target) > 0;
                            },
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    target.addToExpansion(event.cards, player, 'give').gaintag.add('Europa_xunjie');
                },
            },
        },
    },
    Europa_lichu: {
        audio: 'ext:欧陆风云/audio/skill:2',
        derivation: 'Europa_renxian',
        trigger: {
            player: 'phaseBegin',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            return player.getExpansions('Europa_xunjie').length > 1;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.gainMaxHp();
            await player.changeSkills(['Europa_renxian'], ['Europa_yanwen']);
        },
    },
    Europa_renxian: {
        trigger: {
            global: 'phaseBegin',
        },
        popup: false,
        filter(event, player) {
            return event.player != player && player.getExpansions('Europa_xunjie').length > 1;
        },
        async cost(event, trigger, player) {
            const cards = player.getExpansions('Europa_xunjie');
            const { bool, links } = await player
                .chooseButton([get.prompt2(event.name.slice(0, -5), trigger.player), cards])
                .set('selectButton', 2)
                .set('ai', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.attitude(player, trigger.player) < 0) return 0;
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, 'roundStart', false);
            await player.loseToDiscardpile(event.cost_data.links);
            trigger.phaseList.splice(trigger.num, 0, 'phaseUse|Europa_renxian');
        },
    },
    Europa_gezhu: {
        trigger: {
            target: 'useCardToTargeted',
        },
        popup: false,
        filter(event, player) {
            if (event.getParent(2).name == 'Europa_gezhu') return false;
            return (
                _status.currentPhase &&
                _status.currentPhase != player &&
                player.countCards('hes', function (card) {
                    return lib.filter.cardDiscardable(card, player, 'Europa_gezhu');
                })
            );

            //QQQ
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard('hes', get.prompt2(event.name.slice(0, -5)))
                .set('ai', (card) => {
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            const sha = new lib.element.VCard({ name: 'sha' });
            if (_status.currentPhase.canUse(sha, player)) {
                player.addTempSkill('Europa_gezhu_effect');
                await _status.currentPhase.useCard(sha, player);
            }
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'dying',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    const evt = event.getParent(4);
                    return evt && evt.name == 'Europa_gezhu';
                },
                async content(event, trigger, player) {
                    await player.recoverTo(1);
                    const diaohulishan = new lib.element.VCard({ name: 'diaohulishan' });
                    player.useCard(diaohulishan, player);
                },
            },
        },
    },
    Europa_wudao: {
        derivation: ['Europa_boluan', 'Europa_xinxue'],
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            return game.getAllGlobalHistory('everything', (evt) => {
                return evt.name == 'dying' && evt.player == player;
            }).length;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.changeSkills(['Europa_boluan', 'Europa_xinxue'], ['Europa_gezhu']);
        },
    },
    Europa_boluan: {
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            return event.card && event.card.name == 'sha';
        },
        logTarget(event, player) {
            return game.filterPlayer((current) => player.inRange(current));
        },
        async content(event, trigger, player) {
            const unrespondedTargets = [];
            const respondedTargets = [];
            let nonnonTargetResponded = false;
            const targets = game.filterPlayer().sortBySeat();
            const prompt = `###是否打出【闪】响应${get.translation(player)}？###${get.translation(player)}使用了一张不公开目标的${get.translation(trigger.card)}.若你选择响应且你不是此牌的隐藏目标,则你弃一张牌;若你选择不响应且你是此牌的隐藏目标,则此牌的伤害+1.`;
            for (let target of targets) {
                if (target.isIn() && player.inRange(target)) {
                    const { bool } = await target
                        .chooseToRespond(prompt, (card, player) => {
                            return card.name == 'shan';
                        })
                        .set('ai', (card) => {
                            const player = get.player(),
                                event = get.event();
                            const source = event.parent.player;
                            if (get.attitude(player, source) > 0) {
                                return -1;
                            } else {
                                if (
                                    player.hp > 1 ||
                                    !player.hasCard((i) => {
                                        if (i == card || (card.cards && card.cards.includes(i))) return false;
                                        let name = i.name;
                                        return name == 'shan' || name == 'tao' || name == 'jiu';
                                    }, 'hs')
                                )
                                    return 0;
                            }
                            return event.getRand('dcsbpingliao') > 1 / Math.max(1, player.hp) ? 0 : get.order(card);
                        })
                        .set('respondedTargets', respondedTargets)
                        .forResult();
                    if (bool) {
                        respondedTargets.push(target);
                        if (!trigger.targets.includes(target)) nonnonTargetResponded = true;
                    } else if (trigger.targets.includes(target)) unrespondedTargets.push(target);
                }
            }
            for (const current of respondedTargets) {
                if (
                    current.countCards('he', function (card) {
                        return lib.filter.cardDiscardable(card, current, 'Europa_boluan');
                    })
                ) {
                    await current.chooseToDiscard('he', true);
                }
            }
            trigger.baseDamage += unrespondedTargets.length;
        },
        ai: {
            ignoreLogAI: true,
            skillTagFilter(player, tag, args) {
                if (args) {
                    return args.card && args.card.name == 'sha';
                }
            },
        },
        group: 'Europa_boluan_hide',
        subSkill: {
            hide: {
                trigger: {
                    player: 'useCard0',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    trigger.hideTargets = true;
                    game.log(player, '隐藏了', trigger.card, '的目标');
                },
            },
        },
    },
    Europa_xinxue: {
        enable: ['chooseToUse', 'chooseToRespond'],
        zhuanhuanji: true,
        marktext: '☯',
        zhuanhuanLimit: 3,
        mark: true,
        intro: {
            markcount(storage, player) {
                const original_list = ['天', '地', '人'];
                return original_list[player.storage.Europa_xinxue[0] - 1];
            },
            content(storage, player) {
                var str = '你可以将一张牌当做';
                switch (storage[0]) {
                    case 1:
                        str += '智囊牌';
                        break;
                    case 2:
                        str += '【桃】';
                        break;
                    case 3:
                        str += '【闪】';
                        break;
                }
                str += '使用或打出';
                const original_list = ['天', '地', '人'];
                const change_list = player.storage.Europa_xinxue.slice(1).map((i) => original_list[i - 1]);
                return (str += '<br>当前顺序:' + change_list.join('、'));
            },
        },
        init(player, skill) {
            if (!Array.isArray(player.storage[skill])) {
                player.storage[skill] = [1, 1, 2, 3];
            }
        },
        filter(event, player) {
            if (!player.countCards('hes')) return false;
            const list = [get.zhinangs(), ['tao'], ['shan']];
            for (var i of lib.inpile) {
                if (list[player.storage.Europa_xinxue[0] - 1].includes(i) && event.filterCard({ name: i }, player, event)) return true;
            }
            return false;
        },
        chooseButton: {
            dialog(event, player) {
                const list = [get.zhinangs(), ['tao'], ['shan']][player.storage.Europa_xinxue[0] - 1];
                const dialog = ui.create.dialog(get.translation('Europa_xinxue'), [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
            },
            check(button) {
                if (_status.event.parent.type != 'phase') return 1;
                var player = _status.event.player;
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
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    log: false,
                    async precontent(event, trigger, player) {
                        player.$changeZhuanhuanji('Europa_xinxue');
                        let zhuanhuaList = [[], get.zhinangs(), ['tao'], ['shan']],
                            original_list = ['天', '地', '人'],
                            change_index = player.storage.Europa_xinxue[0] + 1,
                            change_list = player.storage.Europa_xinxue.slice(1).map((i) => original_list[i - 1]);
                        if (change_index > 3) change_index = 1;
                        if (zhuanhuaList[change_index].includes(event.result.cards[0].name)) {
                            const { bool, moved } = await player
                                .chooseToMove(`调整天地人的顺序`)
                                .set('list', [
                                    [
                                        '',
                                        [
                                            change_list,
                                            (item, type, position, noclick, node) => {
                                                node = ui.create.buttonPresets.vcard(item, type, position, noclick);
                                                node._customintro = [(node) => `${node.link[2]}`, ``];
                                                return node;
                                            },
                                        ],
                                    ],
                                ])
                                .set('processAI', () => {
                                    return [['天', '地', '人'].randomSort().map((i) => ['', '', i])];
                                })
                                .forResult();
                            if (!moved[0].length) return;
                            var sorted = moved[0].map((i) => original_list.indexOf(i[2]) + 1);
                            for (var i = 1; i < 4; i++) {
                                player.storage.Europa_xinxue[i] = sorted[i - 1];
                            }
                        }
                        const index = player.getAllHistory('useSkill', (evt) => evt.skill == 'Europa_xinxue').length % 3;
                        player.storage.Europa_xinxue[0] = player.storage.Europa_xinxue[index + 1];
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
            return type == 'basic' || type == 'trick';
        },
        ai: {
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
    Europa_huanzheng: {
        group: ['Europa_huanzheng_zhunbei', 'Europa_huanzheng_jieshu'],
        subSkill: {
            zhunbei: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                logTarget(event, player) {
                    return game.filterPlayer((current) => {
                        return current.hasCard(function (card) {
                            return current.canRecast(card);
                        });
                    });
                },
                async content(event, trigger, player) {
                    for (const target of event.targets) {
                        if (
                            target.hasCard(function (card) {
                                return target.canRecast(card);
                            }, 'he')
                        ) {
                            const { bool, cards } = await target.chooseCard('he', true, '请重铸一张牌', lib.filter.cardRecastable).forResult();
                            if (bool) {
                                await target.recast(cards);
                                player.markAuto('Europa_huanzheng_jieshu', cards);
                            }
                        }
                    }
                },
            },
            jieshu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                filter(event, player) {
                    return !player.hasAllHistory('useSkill', (evt) => evt.skill == 'Europa_huanzheng_jieshu');
                },
                async content(event, trigger, player) {
                    const cards = player.getStorage(event.name);
                    if (cards.length) player.gain(cards, 'gain2');
                },
            },
        },
    },
    Europa_shiting: {
        enable: 'phaseUse',
        filter(event, player) {
            if (player.getStat().skill.Europa_shiting >= player.hp) return false;
            return game.hasPlayer((target) => lib.skill.Europa_shiting.filterTarget(null, player, target));
        },
        filterTarget(card, player, target) {
            return target != player && target.countCards('h');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            if (target.countCards('h')) {
                const { bool, cards } = await target
                    .chooseCard(true, [1, Infinity])
                    .set('prompt', `你须展示至少一张手牌,${get.translation(player)}可以用点数之和大于你选择牌交换你展示的牌`)
                    .set('ai', (card) => {
                        return card.number > 7;
                    })
                    .forResult();
                if (bool) {
                    await target.showCards(cards);
                    const num = cards.reduce((p, c) => p + c.number, 0);
                    if (player.countCards('hes')) {
                        const result = await player
                            .chooseCard([1, Infinity])
                            .set('prompt', `你可以用任意张点数之和大于${num}的牌交换${get.translation(cards)}`)
                            .set('numx', num)
                            .set('ai', (card) => {
                                return card.number - get.value(card);
                            })
                            .set('filterOk', () => {
                                return ui.selected.cards.reduce((p, c) => p + c.number, 0) > get.event('numx');
                            })
                            .forResult();
                        if (result.bool) {
                            player.swapHandcards(target, result.cards, cards);
                        }
                    }
                }
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
    },
    Europa_chengzhu: {
        enable: 'phaseUse',
        limit: true,
        filterTarget(card, player, target) {
            return target.countCards('h') > player.countCards('h');
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            event.targets[0].damage(event.targets[0].countCards('h'), 'unreal');
        },
        ai: {
            result: {
                target(player, target) {
                    var att = get.attitude(player, target);
                    if (target.hasSkillTag('maixie')) att += 5;
                    return att;
                },
            },
        },
    },
    Europa_huashou: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        zhuSkill: true,
        forced: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_huashou')) return false;
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            player.addSkill('Europa_tianchaojizhi');
        },
        group: 'Europa_huashou_use',
        subSkill: {
            use: {
                //出牌阶段限一次，你可以消耗10点天命值，选择场上一个势力，随机从欧陆风云系列非明势力武将中获得等同于该势力人数的技能直到你的下个回合开始
                enable: 'phaseUse',
                filter(event, player) {
                    if (!player.hasZhuSkill('Europa_huashou')) return false;
                    return player.countMark('Europa_tianchaojizhi') >= 10;
                },
                chooseButton: {
                    dialog() {
                        return ui.create.dialog('###化寿###' + get.translation('Europa_huashou_info'));
                    },
                    chooseControl(event, player) {
                        var list = [];
                        game.countPlayer(function (current) {
                            if (current.group && current.group != 'unknown') list.add(current.group);
                        });
                        list.sort(function (a, b) {
                            return lib.group.indexOf(a) - lib.group.indexOf(b);
                        });
                        list.push('cancel2');
                        return list;
                    },
                    check(event, player) {
                        var list = [];
                        game.countPlayer(function (current) {
                            if (current.group && current.group != 'unknown') list.add(current.group);
                        });
                        list.sort(function (a, b) {
                            return lib.group.indexOf(a) - lib.group.indexOf(b);
                        });
                        return list.randomGet();
                    },
                    backup(result, player) {
                        return {
                            filterCard: () => false,
                            selectCard: -1,
                            group: result.control,
                            async content(event, trigger, player) {
                                const group = get.info('Europa_huashou_use_backup').group;
                                player.tempBanSkill('Europa_huashou_use', ['phaseUseSkipped', 'phaseUseAfter'], false);
                                get.info('Europa_tianchaojizhi').Europa_Mark(player, 10, 'remove');
                                game.log(player, '选择了', '#y' + get.translation(group + 2));
                                const num = game.countPlayer((target) => {
                                    return target.group == group;
                                });
                                if (num > 0) {
                                    const characters = Object.keys(lib.characterPack.EuropaUniversalis).filter((character) => lib.character[character].group != 'Europa_Ming');
                                    if (characters.length) {
                                        const skills = characters
                                            .map((character) => lib.character[character].skills)
                                            .flat()
                                            .randomGets(num);
                                        if (skills.length) {
                                            player.addTempSkills(skills, { player: 'phaseBegin' });
                                        }
                                    }
                                }
                            },
                            ai: {
                                result: {
                                    player: 1,
                                },
                            },
                        };
                    },
                    prompt() {
                        return get.translation('Europa_huashou_info');
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player: 1,
                    },
                },
            },
            use_backup: {},
        },
    },
    Europa_yandun: {
        trigger: { player: 'phaseJieshuBegin' },
        forced: true,
        async content(event, trigger, player) {
            await player.changeHujia(3);
        },
        group: ['Europa_yandun_damage', 'Europa_yandun_change'],
        subSkill: {
            damage: {
                trigger: { player: 'phaseBegin' },
                filter(event, player) {
                    return player.hujia >= 1;
                },
                async cost(event, trigger, player) {
                    const result = await player
                        .chooseTarget(get.prompt('Europa_yandun'), '对一名角色造成' + get.cnNumber(player.hujia) + '点伤害')
                        .set('ai', function (target) {
                            if (get.player().hujia == 1) return get.damageEffect(target, get.player(), get.player());
                            return -get.attitude(get.player(), target) * Math.max(0.1, get.damageEffect(target, get.player(), get.player()));
                        })
                        .forResult();
                    event.result = result;
                },
                async content(event, trigger, player) {
                    await event.targets[0].damage(player.hujia);
                },
            },
            change: {
                trigger: { player: 'changeHujiaEnd' },
                filter(event, player) {
                    return player.countCards('h') && event.num < 0 && !player.hujia;
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.chooseToDiscard('h', true, 2);
                },
            },
        },
    },
    Europa_dizhen: {
        enable: 'phaseUse',
        filter(event, player) {
            return player.hujia >= 1;
        },
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.changeHujia(-1);
            await target.damage();
            let Adjacent = [];
            Adjacent.add(target.next);
            Adjacent.add(target.previous);
            Adjacent.sortBySeat();
            if (Adjacent.length) {
                await game.asyncDelay(1);
                for (let targetx of Adjacent) {
                    if (targetx.isIn()) {
                        player.line(targetx);
                        await targetx.damage();
                        await game.asyncDelay(1);
                    }
                }
            }
            if (player.hasHistory('damage', (evt) => evt.parent == event)) await player.draw();
        },
        ai: {
            order: 1,
            result: {
                player(player, target) {
                    return get.damageEffect(target, player, player);
                },
            },
        },
    },
    Europa_honglei: {
        enable: 'phaseUse',
        filterCard: lib.filter.cardDiscardable,
        position: 'he',
        usable: 1,
        filterTarget: lib.filter.notMe,
        selectTarget: [0, 3],
        multitarget: true,
        multiline: true,
        filterOk: () => ui.selected.cards.length && ui.selected.targets.length !== 2,
        async content(event, trigger, player) {
            if (event.targets.length) {
                const targets = event.targets.sortBySeat();
                if (targets.length === 3) {
                    for (var i of targets) await i.damage(1, 'thunder');
                } else {
                    const result = await player
                        .chooseControl('1点', '2点')
                        .set('prompt', '请选择' + get.translation(targets[0]) + '受到的雷属性伤害值')
                        .set('ai', () => 1)
                        .forResult();
                    await targets[0].damage(parseInt(result.control.slice(0, 1)), 'thunder');
                }
            } else {
                await player.loseHp();
                const result = await player
                    .judge((card) => {
                        if (card.suit == 'spade') {
                            const num = card.number;
                            if (num >= 2 && num <= 9) return 4;
                        }
                        return -4;
                    })
                    .forResult();
                if (result.bool) {
                    for (const lp of [
                        [1, 2],
                        [3, 1],
                    ]) {
                        const result = await player
                            .chooseTarget('是否对' + (lp[0] > 1 ? '至多' : '') + get.cnNumber(lp[0]) + '名其他角色' + (lp[0] > 1 ? '各' : '') + '造成' + lp[1] + '点雷属性伤害？', [1, lp[0]], lib.filter.notMe)
                            .set('ai', (target) => {
                                const player = get.player();
                                return get.damageEffect(target, player, player, 'thunder');
                            })
                            .forResult();
                        if (result.bool) {
                            const targets = result.targets.sortBySeat();
                            player.line(targets);
                            for (var i of targets) await i.damage(lp[1], 'thunder');
                        }
                    }
                }
            }
        },
        ai: {
            order: 10,
            result: { player: (player, target) => get.damageEffect(target, player, player) },
        },
    },
    Europa_minggu: {
        limited: true,
        enable: 'phaseUse',
        filter(event, player) {
            const suits = player
                .getCards('h')
                .map((i) => i.suit)
                .unique();
            return suits.some((i) => player.getCards('h', { suit: i }).every((card) => lib.filter.cardDiscardable(card, player)));
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            let used = false;
            const suitList = { heart: '回复1点体力', diamond: '摸两张牌', spade: '弃置其一张牌', club: '重置【轰雷】' };
            while (lib.skill[event.name].filter(null, player)) {
                if (used) {
                    const choice = await player
                        .chooseBool('是否继续执行【鸣鼓】流程')
                        .set(
                            'choice',
                            game.hasPlayer((target) => get.damageEffect(target, player, player, 'thunder') > 0)
                        )
                        .forResult();
                    if (!choice.bool) break;
                }
                await player.showHandcards(get.translation(player) + '发动了【' + get.translation(event.name) + '】');
                let suits = player
                    .getCards('h')
                    .map((i) => i.suit)
                    .unique()
                    .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                suits = suits.filter((i) => player.getCards('h', { suit: i }).every((card) => lib.filter.cardDiscardable(card, player)));
                const result = await player
                    .chooseControl(suits)
                    .set('ai', () => {
                        const player = get.player();
                        let map = {
                            heart: get.recoverEffect(player, player, player),
                            diamond: get.effect(player, { name: 'draw' }, player, player) * 2,
                            spade: (() => {
                                const target = game
                                    .filterPlayer((t) => t !== player)
                                    .sort((a, b) => {
                                        return get.damageEffect(b, player, player) - get.damageEffect(a, player, player);
                                    })[0];
                                return get.effect(target, { name: 'guohe_copy2' }, player, player);
                            })(),
                            club: 0,
                        },
                            controls = get.event().controls.slice();
                        return controls.sort((a, b) => (map[b] || 0) - (map[a] || 0))[0];
                    })
                    .set('prompt', '选择弃置一种花色的所有牌,对一名其他角色造成1点雷属性伤害并…')
                    .set(
                        'prompt2',
                        (() => {
                            return '<span class="text center">' + [[get.translation(lib.suit[3]) + ':' + suitList[lib.suit[3]], get.translation(lib.suit[2]) + ':' + suitList[lib.suit[2]]].join(';'), [get.translation(lib.suit[1]) + ':' + suitList[lib.suit[1]], get.translation(lib.suit[0]) + ':' + suitList[lib.suit[0]]].join(';')].join(';<br>') + '.</span>';
                        })()
                    )
                    .forResult();
                const suit = result.control,
                    cards = player.getCards('h', { suit: suit });
                await player.discard(cards);
                if (game.hasPlayer((t) => t !== player)) {
                    const resultx = await player
                        .chooseTarget('对一名其他角色造成1点雷属性伤害并' + (lib.suit.includes(suit) ? suitList[suit] : ''), lib.filter.notMe, true)
                        .set('ai', (target) => {
                            const player = get.player(),
                                suit = get.event().suit;
                            return get.damageEffect(target, player, player, 'thunder') + (suit === 'spade' ? get.effect(target, { name: 'guohe_copy2' }, player, player) : 0);
                        })
                        .set('suit', suit)
                        .forResult();
                    if (resultx.bool) {
                        const target = resultx.targets[0];
                        player.line(target);
                        await target.damage(1, 'thunder');
                        if (lib.suit.includes(suit)) {
                            switch (suit) {
                                case 'heart':
                                    await player.recover();
                                    break;
                                case 'diamond':
                                    await player.draw(2);
                                    break;
                                case 'spade':
                                    await player.discardPlayerCard(target, 'he', true);
                                    break;
                                case 'club':
                                    delete player.getStat('skill').Europa__honglei;
                                    game.log(player, '重置了技能', '#g【' + get.translation('Europa__honglei') + '】');
                                    break;
                            }
                        }
                    }
                }
                if (cards.length < 2) break;
                else used = true;
            }
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    let suits = player
                        .getCards('h')
                        .map((i) => i.suit)
                        .unique()
                        .sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    suits = suits.filter((i) => player.getCards('h', { suit: i }).every((card) => lib.filter.cardDiscardable(card, player)));
                    return game.hasPlayer((target) => get.damageEffect(target, player, player, 'thunder') > 0 && suits.length >= target.getHp());
                },
            },
        },
    },
    Europa_liefeng: {
        enable: 'phaseUse',
        filterTarget: true,
        filterCard: lib.filter.cardDiscardable,
        position: 'he',
        usable: 1,
        async content(event, trigger, player) {
            const target = event.target;
            await target.damage();
            if (target.countMark('Europa_liefeng_effect') < 3) {
                target.addSkill('Europa_liefeng_effect');
                target.addMark('Europa_liefeng_effect', 1, false);
            }
        },
        ai: {
            order: 7,
            result: {
                player(player, target) {
                    return get.damageEffect(target, player, player);
                },
            },
        },
        subSkill: {
            effect: {
                charlotte: true,
                intro: { content: '受到的火属性伤害+#' },
                trigger: { player: 'damageBegin2' },
                filter(event, player) {
                    return event.hasNature('fire');
                },
                forced: true,
                content() {
                    trigger.num += player.countMark('Europa_liefeng_effect');
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha') {
                                if (game.hasNature(card, 'fire') || player.hasSkill('zhuque_skill')) return 2;
                            }
                            if (get.tag(card, 'fireDamage') && current < 0) return 2;
                        },
                    },
                },
            },
        },
    },
    Europa_baoyu: {
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer((target) => lib.skill.Europa_baoyu.filterTarget(null, player, target));
        },
        filterTarget(card, player, target) {
            return target.isDamaged();
        },
        usable: 1,
        async content(event, trigger, player) {
            const target = event.target;
            await player.recover();
            await target.recover();
            if (target.countMark('Europa_baoyu_effect') < 3) {
                target.addSkill('Europa_baoyu_effect');
                target.addMark('Europa_baoyu_effect', 1, false);
            }
        },
        ai: {
            order: 7,
            result: {
                player(player, target) {
                    return get.recoverEffect(target, player, player) + (player.getDamagedHp() > 1 ? get.recoverEffect(player, player, player) : 0);
                },
            },
        },
        subSkill: {
            effect: {
                charlotte: true,
                intro: { content: '受到的火/雷属性伤害-/+#' },
                trigger: { player: 'damageBegin2' },
                filter(event, player) {
                    return event.hasNature('fire') ^ event.hasNature('thunder');
                },
                forced: true,
                content() {
                    trigger.num += player.countMark('Europa_baoyu_effect') * (trigger.hasNature('fire') ? -1 : 1);
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (card.name == 'sha' && game.hasNature(card, 'fire') ^ game.hasNature(card, 'thunder')) {
                                if (game.hasNature(card, 'fire') || player.hasSkill('zhuque_skill')) return 2;
                                return 'zeroplayertarget';
                            }
                            if (!(get.tag(card, 'fireDamage') ^ get.tag(card, 'thunderDamage'))) return;
                            if (current < 0) return get.tag(card, 'fireDamage') ? 2 : 'zeroplayertarget';
                        },
                    },
                },
            },
        },
    },
    Europa_leibao: {
        trigger: { player: 'phaseEnd' },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt('Europa_leibao'), '令一名角色进行判定,若结果为♠️️2-9,则其受到1点雷属性伤害')
                .set('ai', (target) => {
                    const player = get.player();
                    return get.damageEffect(target, player, player, 'thunder');
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const result = await target
                .judge((card) => {
                    if (card.suit == 'spade') {
                        const num = card.number;
                        if (num >= 2 && num <= 9) return -4;
                    }
                    return 0;
                })
                .set('judge2', (result) => {
                    return result.bool === false ? true : false;
                })
                .forResult();
            if (result.bool === false) await target.damage('thunder');
        },
        global: 'Europa_leibao_ai',
        group: 'Europa_leibao_effect',
        subSkill: {
            effect: {
                trigger: { global: ['loseAfter', 'loseAsyncAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'addToExpansionAfter'] },
                getIndex(event, player, triggername) {
                    return game
                        .filterPlayer((target) => {
                            const evt = event.getl(target);
                            return evt?.js?.some((card) => evt.vcard_map.get(card).name === 'shandian');
                        })
                        .sortBySeat();
                },
                filter(event, player, name, target) {
                    return target?.isIn() && ['Europa_liefeng_effect', 'Europa_baoyu_effect'].every((mark) => target.hasMark(mark));
                },
                forced: true,
                logTarget: (event, player, name, target) => target,
                content() {
                    const evt = trigger.getl(event.targets[0]);
                    event.targets[0].damage(
                        evt.js.reduce((list, card) => {
                            const cardx = evt.vcard_map.get(card);
                            if (cardx.name === 'shandian') list.add(cardx);
                            return list;
                        }, []).length * 3,
                        'thunder'
                    );
                },
            },
            ai: {
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (!game.hasPlayer((t) => t.hasSkill('Europa_leibao', null, null, false))) return;
                            if (card?.name === 'shandian' && player === target)
                                return [
                                    1,
                                    2 *
                                    get.sgn(
                                        (() => {
                                            return (
                                                game
                                                    .filterPlayer((t) => {
                                                        return ['Europa_liefeng_effect', 'Europa_baoyu_effect'].every((mark) => t.hasMark(mark));
                                                    })
                                                    .reduce((sum, t) => sum + get.sgn(get.attitude(player, t)), 0) + 0.5
                                            );
                                        })()
                                    ),
                                ];
                        },
                    },
                },
            },
        },
    },
    Europa_mengpu: {
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer((target) => lib.skill.Europa_mengpu.filterTarget(null, player, target));
        },
        filterTarget(card, player, target) {
            return target !== player && target.getHp() <= 2;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const resultx = await target.chooseToDiscard({ name: 'shan' }, '弃置一张【闪】,或令' + get.translation(player) + '调整至你的上家或下家').forResult();
            if (!resultx.bool && game.countPlayer() > 2) {
                let result;
                if (target.previous === player) result = { index: 1 };
                else if (target.next === player) result = { index: 0 };
                else
                    result = await player
                        .chooseControl('上家', '下家')
                        .set('prompt', '调整至' + get.translation(target) + '的上家或下家')
                        .set('ai', () => 0)
                        .forResult();
                game.broadcastAll(
                    (player, target, index) => {
                        let source = index === 0 ? target : target.next;
                        game.swapSeat(player, source, false, true);
                    },
                    player,
                    target,
                    result.index
                );
                game.log(player, '移动至', target, '的', '#g' + (result.index === 0 ? '上家' : '下家'));
            }
        },
    },
    Europa_lielu: {
        trigger: { player: 'useCardToPlayer' },
        filter(event, player) {
            const target = event.target;
            return event.card && event.card.name === 'sha' && target !== player && target.getHp() <= 2;
        },
        check(event, player) {
            return get.attitude(player, event.target) < 0;
        },
        logTarget: 'target',
        async content(event, trigger, player) {
            let result,
                target = trigger.target;
            if (trigger.parent.directHit.includes(target)) result = { index: 0 };
            else
                result = await target
                    .chooseControl()
                    .set('choiceList', ['令' + get.translation(trigger.card) + '造成的伤害+1', '不可响应' + get.translation(trigger.card)])
                    .set('ai', () => (get.player().hasShan() ? 0 : 1))
                    .forResult();
            if (result.index === 0) {
                if (!trigger.parent.baseDamage) trigger.parent.baseDamage = 1;
                trigger.parent.baseDamage++;
                game.log(trigger.card, '造成的伤害+1');
            } else {
                trigger.parent.directHit.add(target);
                game.log(target, '不可响应', trigger.card);
            }
        },
    },
    Europa_yuanxiao: {
        limited: true,
        enable: 'phaseUse',
        filter(event, player) {
            return game.countPlayer() >= 2;
        },
        filterTarget(card, player, target) {
            return ui.selected.targets.length || target !== player;
        },
        targetprompt: ['借刀', '杀人'],
        selectTarget: 2,
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const [from, to] = event.targets;
            const result = await from
                .chooseToUse(
                    function (card, player, event) {
                        if (card.name != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    },
                    '对' + get.translation(to) + '使用一张【杀】,或弃置两张牌'
                )
                .set('filterTarget', function (card, player, target) {
                    if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                    return lib.filter.filterTarget.apply(this, arguments);
                })
                .set('sourcex', to)
                .set('targetRequired', true)
                .set('complexSelect', true)
                .set('addCount', false)
                .forResult();
            if (result.bool) {
                if (
                    game.getGlobalHistory('everything', (evt) => {
                        return evt.name === 'dying' && evt.player === to && evt.getParent(event.name) === event;
                    }).length
                )
                    player.restoreSkill(event.name);
            } else await from.chooseToDiscard('he', 2, true);
        },
        ai: {
            order: 10,
            result: {
                player(player, target) {
                    if (!ui.selected.targets.length) {
                        const effect = get.effect(target, { name: 'guohe_copy2' }, target, player) * Math.min(2, target.countDiscardableCards(target, 'he'));
                        return game
                            .filterPlayer((current) => current !== target)
                            .reduce((sum, current) => {
                                let eff = [effect];
                                eff.addArray(
                                    target
                                        .getCards('hs', (card) => {
                                            return card.name === 'sha' && target.canUse(card, current, true) && get.effect(current, card, target, target) > 0;
                                        })
                                        .map((card) => get.effect(current, card, target, target))
                                );
                                if (sum > Math.max.apply(Math, eff)) sum = Math.max.apply(Math, eff);
                                return sum;
                            }, 0);
                    }
                    const source = ui.selected.targets[0];
                    const effect = get.effect(source, { name: 'guohe_copy2' }, source, player) * Math.min(2, source.countDiscardableCards(source, 'he'));
                    let eff = [effect];
                    eff.addArray(
                        source
                            .getCards('hs', (card) => {
                                return card.name === 'sha' && source.canUse(card, target, true) && get.effect(target, card, source, source) > 0;
                            })
                            .map((card) => get.effect(target, card, source, source))
                    );
                    return Math.max.apply(Math, eff);
                },
            },
        },
    },
    Europa_haqian: {
        trigger: { player: lib.phaseName.map((i) => i + 'Before').concat(['phaseUseSkipped', 'phaseUseCancelled']) },
        forced: true,
        async content(event, trigger, player) {
            if (event.triggername.endsWith('Before')) {
                game.log(player, '跳过了', '#g' + get.translation(trigger.name));
                trigger.cancel();
            } else {
                await player.draw(2);
                if (game.hasPlayer((target) => target.countCards('he'))) {
                    const result = await player
                        .chooseTarget(
                            '哈欠:令至多两名角色各弃置一张牌',
                            (card, player, target) => {
                                return target.countCards('he');
                            },
                            true,
                            [1, 2]
                        )
                        .set('ai', (target) => {
                            const player = get.player();
                            return get.effect(target, { name: 'guohe_copy2' }, player, player);
                        })
                        .forResult();
                    if (result.bool) {
                        const targets = result.targets.sortBySeat();
                        player.line(targets);
                        for (var i of targets) await i.chooseToDiscard('he', true);
                    }
                }
            }
        },
    },
    Europa_mihu: {
        trigger: { player: 'damageEnd' },
        filter(event, player) {
            return !player.isTempBanned('Europa_haqian');
        },
        forced: true,
        async content(event, trigger, player) {
            player.tempBanSkill('Europa_haqian', { player: 'phaseEnd' });
            const source = trigger.source;
            if (source?.isIn()) {
                const card = new lib.element.VCard({ name: 'sha' });
                if (player.canUse(card, source, false)) {
                    await player.useCard(card, source, false);
                }
            }
        },
    },
    Europa_kuangnu: {
        trigger: { source: 'damageBegin1' },
        filter(event, player) {
            if (event.player === player || player.countMark('Europa_kuangnu_used') >= player.getHp()) return false;
            return !player.hasSkill('Europa_haqian', null, null, false) || player.isTempBanned('Europa_haqian');
        },
        logTarget: 'player',
        check(event, player) {
            return get.attitude(player, event.player) < 0 && get.damageEffect(event.player, player, player) > 0;
        },
        async content(event, trigger, player) {
            if (!player.storage.Europa_kuangnu_used) {
                player.when({ global: 'roundStart' }).then(() => delete player.storage.Europa_kuangnu_used);
            }
            player.addMark('Europa_kuangnu_used', 1, false);
            trigger.num++;
            await trigger.player.turnOver();
        },
    },
    Europa_zhupao: {
        trigger: { global: 'phaseUseBegin' },
        filter(event, player) {
            return !event.player.getVEquips(1).length;
        },
        logTarget: 'player',
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        async content(event, trigger, player) {
            const target = trigger.player;
            let list = [get.translation(event.name) + '是否使用其中一张武器牌？', '<div class="text center">若使用' + get.translation('Europa_wuerbanjupao') + ',则你使用的下一张【杀】的基础伤害+1</div>'],
                filter = (card) => get.type(card) === 'equip' && get.subtype(card) === 'equip1';
            let pile = Array.from(ui.cardPile.childNodes).filter(filter);
            if (pile.length) {
                list.push('<div class="text center">牌堆</div>');
                list.push(pile);
            }
            let disPile = Array.from(ui.discardPile.childNodes).filter(filter);
            if (disPile.length) {
                list.push('<div class="text center">弃牌堆</div>');
                list.push(disPile);
            }
            const result = await target
                .chooseButton(list)
                .set('filterButton', (button) => {
                    const player = get.player();
                    return player.canEquip(button.link);
                })
                .set('ai', (button) => {
                    const player = get.player();
                    return player.getUseValue(button.link) * (button.link.name === 'Europa_wuerbanjupao' ? 3 : 1);
                })
                .forResult();
            if (result.bool) {
                const card = result.links[0];
                await target.chooseUseTarget(card, true, false);
                if (card.name === 'Europa_wuerbandapao') {
                    target.addSkill('Europa_zhupao_effect');
                    target.addMark('Europa_zhupao_effect', 1, false);
                }
            } else {
                target.chat('拒绝');
                game.log(target, '拒绝使用武器');
            }
        },
        subSkill: {
            effect: {
                charlotte: true,
                intro: { content: '下一张【杀】的基础伤害+#' },
                trigger: { player: 'useCard1' },
                filter(event, player) {
                    return event.card && event.card.name === 'sha';
                },
                forced: true,
                popup: false,
                content() {
                    trigger.baseDamage += player.countMark(event.name);
                    player.removeSkill(event.name);
                },
            },
        },
    },
    Europa_zudan: {
        trigger: { global: 'equipEnd' },
        filter(event, player) {
            return event.player !== player && get.type(event.card) === 'equip' && get.subtype(event.card) === 'equip1' && player.hasCard((card) => card.name === 'sha' || _status.connectMode, 'h');
        },
        popup: false,
        async cost(event, trigger, player) {
            const target = trigger.player;
            event.result = await player
                .chooseToGive(target, 'h', { name: 'sha' }, get.prompt2('Europa_zudan'))
                .set('ai', (card) => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    return get.attitude(player, target) > 0 ? 7 - get.value(card) : 0;
                })
                .forResult();
        },
        content() {
            player.draw();
        },
    },
    Europa_yaoban: {
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            const goon = _status.Europa_lieridangkong?.some((i) => (game.roundNumber - i) % 2 === 0);
            player.addMark(event.name, 1 + goon);
            await player.changeHujia(1 + goon);
            if (player.countMark(event.name) >= 4 && game.hasPlayer((t) => t !== player)) {
                player.removeMark(event.name, 4);
                const result = await player
                    .chooseTarget('对一名其他角色造成1点火属性伤害,且其下个出牌阶段不能使用手牌', lib.filter.notMe, true)
                    .set('ai', (target) => {
                        const player = get.player();
                        if (get.attitude(player, target) > 0) return 0;
                        return (Math.max(get.damageEffect(target, player, player, 'fire'), 0) + 1) * (target.countCards('h') + 1);
                    })
                    .forResult();
                if (result.bool) {
                    const target = result.targets[0];
                    await target.damage(1, 'fire');
                    target.addTempSkill('Europa_yaoban_ban', { player: 'phaseUseAfter' });
                }
            }
        },
        ai: {
            order: 10,
            result: { player: 1 },
        },
        intro: {
            name: '日光',
            content: 'mark',
        },
        subSkill: {
            ban: {
                mod: {
                    cardEnabled(card, player) {
                        if (!player.isPhaseUsing()) return;
                        let hs = player.getCards('h'),
                            cards = [card];
                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                        if (hs.some((c) => cards.includes(c))) return false;
                    },
                    cardSavable(card, player) {
                        if (!player.isPhaseUsing()) return;
                        let hs = player.getCards('h'),
                            cards = [card];
                        if (Array.isArray(card.cards)) cards.addArray(card.cards);
                        if (hs.some((c) => cards.includes(c))) return false;
                    }, //QQQ
                },
                mark: true,
                charlotte: true,
                intro: { content: (_, player) => (player.isPhaseUsing() ? '' : '下个出牌阶段') + '不能使用手牌' },
            },
        },
    },
    Europa_lieyang: {
        limited: true,
        enable: 'phaseUse',
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.draw(2);
            _status.Europa_lieridangkong = [game.roundNumber].concat(_status.Europa_lieridangkong || []).unique();
            game.addGlobalSkill('Europa_lieyang_effect');
            player.$fullscreenpop('烈日当空', 'fire');
            game.broadcastAll(() => {
                if (!ui._lieridangkong_info) {
                    if (get.is.phoneLayout()) ui._lieridangkong_info = ui.create.div('.touchinfo.left', ui.window);
                    else ui._lieridangkong_info = ui.create.div(ui.gameinfo);
                }
                ui._lieridangkong_info.innerHTML = '烈日当空';
            });
            player.addSkill('Europa_lieyang_fire');
        },
        ai: {
            order: 11,
            result: { player: 1 },
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: { global: 'roundStart' },
                filter(event, player) {
                    return !event._lieridangkong;
                },
                forced: true,
                popup: false,
                firstDo: true,
                content() {
                    const goon = _status.Europa_lieridangkong?.some((i) => (game.roundNumber - i) % 2 === 0);
                    if (goon) player.$fullscreenpop('烈日当空', 'fire');
                    game.broadcastAll((goon) => {
                        if (!ui._lieridangkong_info) {
                            if (get.is.phoneLayout()) ui._lieridangkong_info = ui.create.div('.touchinfo.left', ui.window);
                            else ui._lieridangkong_info = ui.create.div(ui.gameinfo);
                        }
                        ui._lieridangkong_info.innerHTML = '烈日当空' + (goon ? '' : '(失效中)');
                    }, goon);
                },
            },
            fire: {
                mark: true,
                charlotte: true,
                intro: { content: '烈日当空状态时造成的火属性伤害+1' },
                trigger: { source: 'damageBegin1' },
                filter(event, player) {
                    if (!event.hasNature('fire')) return false;
                    return _status.Europa_lieridangkong?.some((i) => (game.roundNumber - i) % 2 === 0);
                },
                forced: true,
                logTarget: 'player',
                content() {
                    trigger.num++;
                },
            },
        },
    },
    Europa_chongzhu: {
        trigger: { player: 'phaseJieshuBegin' },
        filter(event, player) {
            return player.hasCard((card) => lib.filter.cardDiscardable(card, player) || _status.connectMode, 'h');
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    prompt: get.prompt2('Europa_chongzhu'),
                    filterCard: lib.filter.cardDiscardable,
                    filterTarget: true,
                    ai1(card) {
                        return 7 - get.value(card);
                    },
                    ai2(target) {
                        const player = get.player();
                        if (
                            target.maxHp < 2 ||
                            (() => {
                                for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                                    if (
                                        _status.globalHistory[i].everything.some((evt) => {
                                            return evt.name === 'dying' && evt.player === target;
                                        })
                                    )
                                        return true;
                                    if (_status.globalHistory[i].isRound) break;
                                }
                                return false;
                            })()
                        )
                            return 0;
                        const current = (() => {
                            if (_status.isRoundFilter) {
                                return game.findPlayer((target) => _status.isRoundFilter(null, target));
                            }
                            return game.findPlayer((target) => target === _status.roundStart);
                        })();
                        if (current) {
                            if (
                                game
                                    .filterPlayer((target) => {
                                        return get.distance(player, target, 'absolute') <= get.distance(player, current, 'absolute');
                                    })
                                    .every((target) => get.attitude(player, target) > 0)
                            )
                                return 0;
                        }
                        return get.recoverEffect(target, player, player);
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            const target = event.targets[0];
            target.addTempSkill('Europa_chongzhu_effect', 'roundStart');
        },
        subSkill: {
            effect: {
                mark: true,
                charlotte: true,
                intro: { content: '本轮首次进入濒死状态时,将体力值回复至体力上限的一半(向下取整)' },
                trigger: { player: 'dying' },
                filter(event, player) {
                    if (player.maxHp < 2 || Math.floor(player.maxHp / 2) <= player.hp) return false;
                    for (var i = _status.globalHistory.length - 1; i >= 0; i--) {
                        if (
                            _status.globalHistory[i].everything.some((evt) => {
                                return evt.name === 'dying' && evt.player === player && evt !== event;
                            })
                        )
                            return false;
                        if (_status.globalHistory[i].isRound) break;
                    }
                    return true;
                },
                forced: true,
                content() {
                    player.recover(Math.floor(player.maxHp / 2) - player.hp);
                },
            },
        },
    },
    Europa_juedi: {
        enable: 'phaseUse',
        filter(event, player) {
            return player.countCards('h') && game.hasPlayer((target) => target !== player);
        },
        usable: 1,
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.target,
                str = get.translation(player);
            const result = await target
                .gainPlayerCard(player, 'h', true)
                .set('prompt', '是否获得' + str + '其中一张牌？')
                .set(
                    'prompt2',
                    (() => {
                        return '<div class="text left">' + ['若是,你减1点体力上限并将体力回复至上限,' + str + '增加1点体力上限并回复1点体力', '若否:你本回合非锁定技失效,且不能使用【闪】和【无懈可击】'].map((str) => '<li>' + str).join('<br>') + '</div>';
                    })()
                )
                .set('ai', (button) => {
                    const player = get.player(),
                        source = get.event().parent,
                        card = button.link;
                    if (player.getDamagedHp() > 2 || get.attitude(source, player) > 0) return 7 - get.value(card);
                    return player.maxHp > 2 && Math.random() > 0.75 ? 7 - get.value(card) : 0;
                })
                .forResult();
            if (result.bool) {
                await target.loseMaxHp();
                await target.recover(target.maxHp - target.hp);
                await player.gainMaxHp();
                await player.recover();
            } else {
                target.addTempSkill('fengyin');
                target.addTempSkill('Europa_juedi_ban');
            }
        },
        ai: {
            order: 7,
            result: {
                player(player, target) {
                    if (target.getDamagedHp() > 2 && target.maxHp > 2) return get.recoverEffect(target, player, player) * (target.getDamagedHp(true) - 1);
                    return (-get.attitude(player, target) * target.countCards('h')) / 10;
                },
            },
        },
        subSkill: {
            ban: {
                mod: {
                    cardEnabled(card, player) {
                        if (card.name === 'shan' || card.name === 'wuxie') return false;
                    },
                    cardSavable(card, player) {
                        if (card.name === 'shan' || card.name === 'wuxie') return false;
                    },
                },
                mark: true,
                charlotte: true,
                intro: { content: '不能使用【闪】和【无懈可击】' },
            },
        },
    },
    Europa_shengshi: {
        trigger: { source: 'damageBegin1' },
        filter(event, player) {
            return player.hasCard((card) => lib.filter.cardDiscardable(card, player) || _status.connectMode, 'he');
        },
        popup: false,
        async cost(event, trigger, player) {
            const list = ['Europa_shengshi', trigger.player];
            event.result = await player
                .chooseToDiscard(get.prompt2(...list), 'he')
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    const val = 7 - get.value(card) + (card.name === 'Europa_shuzuiquan' ? 5 : 0);
                    return get.attitude(player, trigger.player) < 0 && get.damageEffect(trigger.player, player, player) > 0 ? val : 0;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            trigger.num++;
            if (event.cards[0]?.name === 'Europa_shuzuiquan') {
                //QQQ
                player
                    .when({ source: 'damageSource' })
                    .filter((evt) => evt === trigger)
                    .then(() => {
                        player.recover();
                        player.drawTo(player.maxHp);
                    });
            }
        },
    },
    Europa_shewang: {
        trigger: { player: 'phaseAfter' },
        filter(event, player) {
            return player.getHistory('sourceDamage').reduce((sum, evt) => sum + evt.num, 0) >= 3;
        },
        forced: true,
        content() {
            player.phase('nodelay');
        },
    },
    Europa_dianjian: {
        trigger: { source: 'damageSource' },
        filter(event, player) {
            return event.player.isIn() && event.card && event.card.name === 'sha' && game.hasNature(event.card, 'thunder');
        },
        forced: true,
        logTarget: 'player',
        content() {
            trigger.player.addMark(event.name, 1);
        },
        mod: {
            targetInRange(card) {
                if (card.name == 'sha' && game.hasNature(card, 'thunder')) return true;
            },
        },
        intro: {
            name: '电能',
            content: 'mark',
        },
    },
    Europa_liandian: {
        trigger: { source: 'damageSource' },
        filter(event, player) {
            return event.hasNature('thunder') && game.hasPlayer((target) => target !== player && target !== event.player && target.hasMark('Europa_dianjian'));
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(
                    get.prompt2('Europa_liandian'),
                    (card, player, target) => {
                        const event = get.event().getTrigger();
                        return target !== player && target !== event.player && target.hasMark('Europa_dianjian');
                    },
                    [1, 3]
                )
                .set('ai', (target) => {
                    const player = get.player();
                    return get.damageEffect(target, player, player, 'thunder') * target.countMark('Europa_dianjian');
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const targets = event.targets.sortBySeat();
            for (const target of targets) {
                const num = target.countMark('Europa_dianjian');
                target.clearMark('Europa_dianjian');
                await target.damage(num, 'thunder');
            }
        },
    },
    Europa_yingneng: {
        trigger: { player: 'phaseEnd' },
        filter(event, player) {
            return (
                player
                    .getHistory('sourceDamage', (evt) => {
                        return evt.hasNature('thunder') && evt.getParent('phaseUse', true);
                    })
                    .reduce((sum, evt) => sum + evt.num, 0) >= 5
            );
        },
        forced: true,
        async content(event, trigger, player) {
            await player.draw(3);
            const targets = game.filterPlayer((t) => t !== player);
            if (targets.length) {
                const result = await player
                    .chooseBool('是否对所有其他角色各造成1点雷属性伤害？')
                    .set(
                        'choice',
                        (() => {
                            return targets.reduce((sum, target) => sum + get.damageEffect(target, player, player, 'thunder'), 0) > 0;
                        })()
                    )
                    .forResult();
                if (result.bool) {
                    player.line(targets);
                    for (var i of targets) await i.damage(1, 'thunder');
                }
            }
        },
    },
    Europa_cunxu: {
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        filter(event, player) {
            return event.name !== 'phase' || game.phaseNumber === 0;
        },
        forced: true,
        async content(event, trigger, player) {
            await player.draw(5);
            const cards = player.getCards('he');
            if (cards.length) {
                const result =
                    cards.length > 5
                        ? await player
                            .chooseCard('存储:将五张牌置于武将牌上', 'he', true, 5)
                            .set('ai', (card) => {
                                return -get.value(card);
                            })
                            .forResult()
                        : { bool: true, cards: cards };
                if (result.bool) {
                    const next = player.addToExpansion(result.cards, player, 'give');
                    next.gaintag.add(event.name);
                    await next;
                }
            }
        },
        marktext: '储',
        intro: {
            name: '资金池',
            content: 'expansion',
            markcount: 'expansion',
        },
        onremove(player, skill) {
            const cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
        },
        global: 'Europa_cunxu_give',
        subSkill: {
            give: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h') && game.hasPlayer((t) => t.hasSkill('Europa_cunxu'));
                },
                filterTarget(card, player, target) {
                    return target.hasSkill('Europa_cunxu');
                },
                filterCard: true,
                selectCard: [1, 2],
                position: 'h',
                lose: false,
                discard: false,
                delay: false,
                usable: 1,
                prompt: '将至多两张手牌置入一名拥有【存储】的角色的<资金池>中,每为其置入两张,结束阶段可获得其<资金池>中的一张牌',
                async content(event, trigger, player) {
                    const source = event.target;
                    const next = source.addToExpansion(event.cards, player, 'give');
                    next.gaintag.add('Europa_cunxu');
                    await next;
                    const skill = 'Europa_cunxu_effect',
                        mark = skill + source.playerid;
                    player.addSkill(skill);
                    player.addMark(mark, event.cards.length, false);
                    game.log(player, '目前在', source, '处持有', '#y' + Math.floor(player.countMark(mark) / 2), '存款');
                },
                ai: {
                    order: 7,
                    result: { player: 1 },
                },
            },
            effect: {
                mark: true,
                marktext: '存款',
                charlotte: true,
                intro: {
                    content(storage, player) {
                        const skill = 'Europa_cunxu_effect';
                        const marks = Object.keys(player.storage).filter((i) => typeof i === 'string' && i.startsWith(skill) && game.hasPlayer((j) => j.playerid === i.slice(skill.length)));
                        if (!marks.length) return '暂未持有任何角色的存款';
                        return marks
                            .map((mark) => {
                                return '<li>已在' + get.translation(game.findPlayer((j) => j.playerid === mark.slice(skill.length))) + '持有' + Math.floor(player.countMark(mark) / 2) + '存款';
                            })
                            .join('<br>');
                    },
                },
                trigger: { player: 'phaseEnd' },
                getIndex(event, player, triggername) {
                    return game.filterPlayer((i) => player.countMark('Europa_cunxu_effect' + i.playerid) > 1).sortBySeat();
                },
                filter(event, player, name, target) {
                    return target?.getExpansions('Europa_cunxu').length;
                },
                forced: true,
                logTarget: (event, player, name, target) => target,
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        limit = Math.floor(player.countMark('Europa_cunxu_effect' + target.playerid) / 2); //QQQ
                    const result = await player
                        .chooseButton(['存储:作为' + get.translation(target) + '的股东,你可以获得其资金池至多' + get.cnNumber(limit) + '张牌', '<div class="text center">若因此令' + get.translation(target) + '的资金池为空,则其失去1点体力</div>', target.getExpansions('Europa_cunxu')], [1, limit])
                        .set('ai', (button) => {
                            const player = get.player(),
                                target = get.event().parent.targets[0];
                            if (get.effect(target, { name: 'losehp' }, player, player) < 0 && ui.selected.buttons.length >= target.getExpansions('Europa_cunxu').length) return 0;
                            return get.value(button.link);
                        })
                        .forResult();
                    if (result.bool) {
                        await player.gain(result.links, target, 'give');
                        if (!target.getExpansions('Europa_cunxu').length) {
                            await target.loseHp();
                        }
                    }
                },
            },
        },
    },
    Europa_jiedai: {
        trigger: { global: 'phaseBegin' },
        filter(event, player) {
            return event.player !== player && player.getExpansions('Europa_cunxu').length;
        },
        logTarget: 'player',
        async cost(event, trigger, player) {
            const target = trigger.player,
                forced = player.getStorage('Europa_xisui_effect').includes(target);
            event.result = await target
                .chooseButton(['借贷:' + (forced ? '' : '是否') + '获取' + get.translation(player) + '资金池中至多四张牌' + (forced ? '' : '？'), '<div class="text center">借' + get.translation(player) + '的贷将于本回合弃牌阶段开始时归还</div>', player.getExpansions('Europa_cunxu')], [1, 4], forced)
                .set('ai', (button) => get.value(button.link))
                .forResult();
            if (event.result.links?.length) event.result.cards = event.result.links;
        },
        async content(event, trigger, player) {
            const target = trigger.player,
                forced = player.getStorage('Europa_xisui_effect').includes(target);
            game.log(target, forced ? '#y<借走>' : '#y借走', '了', player, '#g资金池', '的', event.cards);
            await target.gain(event.cards, player, 'give');
            if (!trigger._Europa_jiedai) trigger._Europa_jiedai = {};
            if (!trigger._Europa_jiedai[player.playerid]) trigger._Europa_jiedai[player.playerid] = [0, player];
            trigger._Europa_jiedai[player.playerid][0] += event.cards.length;
            target.addTempSkill('Europa_jiedai_effect');
        },
        subSkill: {
            effect: {
                mark: true,
                marktext: '债',
                charlotte: true,
                intro: {
                    content(storage, player) {
                        let map = get.event().getParent('phase', true);
                        if (!map) return '暂未获取贷款信息';
                        map = map._Europa_jiedai;
                        if (!Object.keys(map).length) return '暂未向某人借贷';
                        return Object.keys(map)
                            .map((id) => {
                                return '<li>已在' + get.translation(map[id][1]) + '借贷' + get.cnNumber(map[id][0]) + '张牌';
                            })
                            .join('<br>');
                    },
                },
                trigger: { player: 'phaseDiscardBegin' },
                getIndex(event, player, triggername) {
                    return game.filterPlayer((i) => event.parent._Europa_jiedai?.[i.playerid]).sortBySeat();
                },
                forced: true,
                logTarget: (event, player, name, target) => target,
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        limit = trigger.parent._Europa_jiedai[target.playerid][0];
                    const cards = player.getCards('h');
                    if (cards.length) await target.gain(cards, player, 'giveAuto');
                    if (target.countCards('he')) {
                        const result = await target
                            .chooseCard('是否将任意张牌置入资金池？', 'he', [1, Infinity])
                            .set('ai', (card) => {
                                return 7.5 - get.value(card);
                            })
                            .forResult();
                        if (result.bool) {
                            const next = target.addToExpansion(result.cards, target, 'give');
                            next.gaintag.add('Europa_cunxu');
                            await next;
                        }
                    }
                    if (cards.length < limit) {
                        target.line(player);
                        target.chat('还不起钱？!');
                        await player.damage(1, target);
                    }
                },
            },
        },
    },
    Europa_xisui: {
        limited: true,
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer((t) => lib.skill.Europa_xisui.filterTarget(null, player, t));
        },
        filterTarget(card, player, target) {
            return target !== player && target.getHp() <= 2;
        },
        selectTarget: [-1, -2],
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addSkill(event.name + '_effect');
            player.markAuto(event.name + '_effect', [event.target]);
        },
        ai: {
            order: 10,
            result: {
                player(player, target, card) {
                    if (player.hasUnknown()) return 0; //QQQ
                    return (
                        game
                            .filterPlayer((t) => {
                                return lib.skill.Europa_xisui.filterTarget(null, player, t);
                            })
                            .reduce((sum, t) => sum - get.sgn(get.attitude(player, t)), 0) + 0.5
                    );
                },
            },
        },
        subSkill: {
            effect: {
                mark: true,
                marktext: '借',
                intro: { content: '$必须使用你对其发动发动的【借贷】' },
            },
        },
    },
    Europa_shenbing: {
        trigger: {
            player: 'phaseZhunbeiBegin',
            source: 'damageSource',
        },
        filter(event, player) {
            if (event.name == 'damage') return player.getHistory('sourceDamage').indexOf(event) == 0;
            return true;
        },
        getList: ['Europa_shenhuofeiya', 'Europa_qijiaqiang', 'Europa_qijiadao', 'Europa_tengpai', 'Europa_changpai'],
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5)))
                .set('chooseonly', true)
                .set('ai', (card) => {
                    return 6 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            const list = get.info('Europa_shenbing').getList;
            const { bool, links } = await player
                .chooseButton(true, [`###${get.translation(event.name)}###获得并使用以下一张装备牌`, [list, 'vcard']])
                .set('ai', (button) => {
                    const player = get.player(),
                        card = { name: button.link[2] },
                        subtype = get.subtype(card);
                    let val = get.value(card);
                    if (player.getEquips(subtype).length) val /= 2;
                    return val;
                })
                .forResult();
            if (bool) {
                const card = get.cardPile(links[0][2], 'field') || game.createCard2(links[0][2]);
                await player.gain(card, 'gain2');
                await player.equip(card);
            }
        },
    },
    Europa_shuwu: {
        derivation: 'Europa_pinghuan',
        trigger: {
            player: 'equipAfter',
        },
        forced: true,
        juexingji: true,
        filter(event, player) {
            return [1, 2, 5].every((subtype) => player.getEquips(subtype).length);
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.drawTo(player.getHandcardLimit());
            player.addSkills('Europa_pinghuan');
        },
    },
    Europa_pinghuan: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'trick' && get.cardNameLength(name) % 2 == 0;
                })
                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return type == 'trick' && get.cardNameLength(name) % 2 == 0;
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog(get.translation('Europa_pinghuan'), [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                return _status.event.parent.filterCard({ name: button.link[2] }, player, _status.event.parent);
            },
            check(button) {
                const player = _status.event.player;
                const card = { name: button.link[2] };
                let value = player.getUseValue(card);
                return value;
            },
            backup(links, player) {
                let next = {
                    filterCard: true,
                    complexCard: true,
                    check(card) {
                        return 1 / (get.value(card) || 0.5);
                    },
                };
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
                };
                next.viewAs = viewAs;
                get.event().viewAs = viewAs;
                next.selectCard = () => {
                    return get.cardNameLength(get.event('viewAs')).length;
                };
                return next;
            },
            prompt(links, player) {
                return `弃置${get.cardNameLength({ name: links[0][2] }) / 2}张手牌,视为使用一张【` + get.translation(links[0][2]) + '】';
            },
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
        },
    },
    Europa_zhukuang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'roundStart',
        },
        filter(event, player) {
            if (!player.countCards('h')) return false;
            return player.getExpansions('Europa_zhukuang').length < 8;
        },
        async cost(event, trigger, player) {
            const num = Math.min(2, 8 - player.getExpansions('Europa_zhukuang').length);
            event.result = await player
                .chooseCard(get.prompt2(event.name.slice(0, -5)))
                .set('selectCard', [1, num])
                .set('ai', (card) => {
                    return 6 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.addToExpansion(event.cards, 'giveAuto').gaintag.add('Europa_zhukuang');
        },
        marktext: '矿',
        intro: {
            name: '矿',
            content: 'expansion',
            markcount: 'expansion',
        },
        onremove(player, skill) {
            const cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
        },
        group: 'Europa_zhukuang_draw',
        subSkill: {
            draw: {
                trigger: {
                    player: 'phaseDrawBegin1',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.changeToZero();
                    const num = player.getExpansions('Europa_zhukuang').length;
                    if (num > 0) player.draw(num);
                },
            },
        },
    },
    Europa_jufu: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        forced: true,
        filter(event, player) {
            return event.getg(player)?.length && player.countCards('h') > 10;
        },
        async content(event, trigger, player) {
            const num = player.countCards('h') - 10;
            const { bool, cards } = await player.chooseToDiscard(true, num).forResult();
            if (bool && cards.length >= 3) {
                await player.gainMaxHp();
                await player.recover();
            }
        },
        mod: {
            maxHandcardFinal: () => 10,
        },
    },
    Europa_shijin: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return target.countGainableCards(player, 'hej');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            if (target.countGainableCards(player, 'hej')) await player.gainPlayerCard(target, 'hej', true);
            const cards = player.getExpansions('Europa_zhukuang');
            if (cards.length) {
                const { bool, links } = await player
                    .chooseButton(true, [`交给${get.translation(target)}一张<矿>`, cards])
                    .set('ai', (button) => {
                        if (get.attitude(player, target) > 0) return get.useful(card, target);
                        return get.unuseful(button.link);
                    })
                    .forResult(); //QQQ
                if (bool) await target.gain(links, 'give', player, 'bySelf');
            }
        },
        ai: {
            order: 10,
            result: {
                player(player, target) {
                    if (!player.getExpansions('Europa_zhukuang').length) return 2;
                    return 1;
                },
                target(player, target) {
                    return get.effect(target, { name: 'shunshou' }, player, target) / 5;
                },
            },
        },
    },
    Europa_chaosheng: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'loseAfter',
        },
        zhuSkill: true,
        filter(event, player) {
            if (player.hasZhuSkill('Europa_chaosheng')) return false;
            return (
                event.type == 'discard' &&
                event.getParent(3).name == 'Europa_jufu' &&
                game.hasPlayer((target) => {
                    return target != player && target.hasClan('穆斯林');
                })
            );
        },
        async content(event, trigger, player) {
            const cards = trigger.getl(player).cards2,
                musilin = game.filterPlayer((target) => target.hasClan('穆斯林'));
            if (_status.connectMode)
                game.broadcastAll(function () {
                    _status.noclearcountdown = true;
                });
            event.given_map = {};
            if (!cards.length) return;
            do {
                const { bool, links } = await player
                    .chooseCardButton('朝圣:请选择要分配的牌', cards)
                    .set('ai', () => {
                        if (ui.selected.buttons.length == 0) return 1;
                        return 0;
                    })
                    .forResult();
                if (!bool) {
                    break;
                    return;
                }
                cards.removeArray(links);
                event.togive = links.slice(0);
                const { targets } = await player
                    .chooseTarget('选择一名角色获得' + get.translation(links), true)
                    .set('map', event.given_map)
                    .set('filterTarget', (card, player, target) => {
                        if (target.hasClan('穆斯林')) return false;
                        return target != player && !Object.hasOwn(get.event('map'), target.playerid);
                    })
                    .set('ai', (target) => {
                        const att = get.attitude(_status.event.player, target);
                        if (_status.event.enemy) {
                            return -att;
                        } else if (att > 0) {
                            return att / (1 + target.countCards('h'));
                        } else {
                            return att / 100;
                        }
                    })
                    .set('enemy', get.value(event.togive[0], player, 'raw') < 0)
                    .forResult();
                if (targets.length) {
                    const id = targets[0].playerid,
                        map = event.given_map;
                    if (!map[id]) map[id] = [];
                    map[id].addArray(event.togive);
                }
                if (musilin.every((target) => Object.hasOwn(event.given_map, target.playerid))) break;
            } while (cards.length);
            if (_status.connectMode) {
                game.broadcastAll(function () {
                    delete _status.noclearcountdown;
                    game.stopCountChoose();
                });
            }
            const list = [];
            for (var i in event.given_map) {
                const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                player.line(source, 'green');
                if (player !== source && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.2);
                list.push([source, event.given_map[i]]);
            }
            await game
                .loseAsync({
                    gain_list: list,
                    giver: player,
                    animate: 'gain2',
                })
                .setContent('gaincardMultiple');
        },
    },
    Europa_junzhen: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        async cost(event, trigger, player) {
            const { index } = await player
                .chooseControl('cancel2')
                .set('choiceList', [`普通【杀】对你无效`, `对你相邻角色使用【杀】时,你令此【杀】不可被响应`])
                .set('prompt', get.translation(event.name.slice(0, -5)))
                .set('ai', () => {
                    return get.rand(0, 1);
                })
                .forResult();
            if (index != 2) event.result = { bool: true, cost_data: { index } };
        },
        async content(event, trigger, player) {
            const index = event.cost_data.index + 1;
            event._Europa_junzhen = index;
            player.addTempSkill(`Europa_junzhen_choice${index}`, { player: 'phaseBegin' });
            player.addTip('Europa_junzhen_choice${index}', `军阵${index}`);
            game.log(player, '选择了', '#g军阵' + index);
        },
        subSkill: {
            choice1: {
                charlotte: true,
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && !game.hasNature(event.card);
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (card.name == 'sha' && !game.hasNature(card)) return 'zeroplayertarget';
                        },
                    },
                },
                mark: true,
                intro: {
                    content: '普通【杀】对你无效',
                },
            },
            choice2: {
                charlotte: true,
                trigger: {
                    player: 'useCardToPlayer',
                },
                forced: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                },
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && get.distance(player, event.target, 'pure') <= 1;
                },
                async content(event, trigger, player) {
                    trigger.directHit.addArray(trigger.target);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg && arg.card.name != 'sha') return false;
                        return get.distance(player, arg.target, 'pure') <= 1;
                    },
                },
                mark: true,
                intro: {
                    content: '对你相邻角色使用【杀】时,你令此【杀】不可被响应',
                },
            },
        },
    },
    Europa_bantu: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('hes', { subtype: 'equip1' });
        },
        filterCard(card) {
            return get.subtype(card) == 'equip1';
        },
        position: 'hes',
        check(card) {
            return 7 - get.value(card);
        },
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.targets[0];
            await target.damage();
            if (
                game.getGlobalHistory('everything', (evt) => {
                    if (evt.name != 'die' || evt.player != target) return false;
                    return evt.reason?.getParent(event.name) == event;
                }).length
            ) {
                if (player.getStat('skill').Europa_bantu) delete player.getStat('skill').Europa_bantu;
                await player.gain(event.cards, 'gain2');
            }
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    return get.damageEffect(target, player);
                },
            },
        },
    },
    Europa_jijiao: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        popup: false,
        filter(event, player) {
            return game.hasPlayer((current) => current != player) && (event.name !== 'phase' || game.phaseNumber === 0);
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), function (card, player, target) {
                    return target != player;
                })
                .set('ai', function (target) {
                    let att = get.attitude(_status.event.player, target);
                    if (att > 0) return att + 1;
                    if (att == 0) return Math.random();
                    return att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.addSkills('Europa_junzhen');
            player.addSkill('Europa_jijiao_junzhen');
            player.markAuto('Europa_jijiao_junzhen', event.targets);
        },
        subSkill: {
            junzhen: {
                trigger: {
                    global: 'Europa_junzhenAfter',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('Europa_jijiao_junzhen').includes(event.player);
                },
                async content(event, trigger, player) {
                    const index = trigger._Europa_junzhen;
                    if (trigger.player.hasSkill(`Europa_junzhen_choice${index}`)) {
                        trigger.player.addSkill(`Europa_jijiao_choice${index}`);
                    } else {
                        trigger.player.removeSkill(`Europa_jijiao_choice1`);
                        trigger.player.removeSkill(`Europa_jijiao_choice2`);
                    }
                },
            },
            choice1: {
                charlotte: true,
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'trick' && get.tag(event.card, 'damage');
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                mod: {
                    cardEnabled(card, player, name) {
                        if (card.name == 'sha') return false;
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.type(card) == 'trick' && get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
                mark: true,
                intro: {
                    content: '伤害类锦囊牌对你无效,但你无法使用【杀】',
                },
            },
            choice2: {
                charlotte: true,
                trigger: {
                    player: 'useCardToPlayer',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && get.distance(player, event.target, 'pure') <= 1;
                },
                async content(event, trigger, player) {
                    const id = trigger.target.playerid;
                    const map = trigger.parent.customArgs;
                    if (!map[id]) map[id] = {};
                    if (typeof map[id].extraDamage != 'number') {
                        map[id].extraDamage = 0;
                    }
                    map[id].extraDamage++;
                },
                mark: true,
                intro: {
                    content: '对相邻角色使用【杀】时,此【杀】伤害+1',
                },
            },
        },
    },
    Europa_baotong: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_baotong')) return false;
            return game.hasPlayer((target) => get.info('Europa_baotong').filterTarget(null, player, target));
        },
        filterCard: true,
        check(card) {
            return 6 - get.value(card);
        },
        filterTarget(card, player, target) {
            return target.hasClan('原住民') && target != player && target.getEquips(1).length;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const cards = target.getEquips(1).filter((card) => {
                return lib.filter.canBeGained(card, player, target);
            });
            await target.damage();
            if (cards.length) {
                player.gain(cards, target, 'give', 'bySelf');
            }
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    return get.damageEffect(target, player);
                },
            },
        },
    },
    Europa_fusha: {
        trigger: {
            target: 'useCardToTarget',
        },
        filter(event, player) {
            return (
                (event.card.name == 'sha' &&
                    !game.hasPlayer2((target) => {
                        return target.getHistory('useCard', (evt) => evt.card.name == 'sha' && evt.targets?.includes(player)).length > 1;
                    })) ||
                (get.type(event.card) == 'trick' &&
                    get.tag(event.card, 'damage') &&
                    event.targets?.length == 1 &&
                    !game.hasPlayer2((target) => {
                        return target.getHistory('useCard', (evt) => get.type(evt.card) == 'trick' && get.tag(evt.card, 'damage') && evt.targets?.length == 1 && evt.targets?.includes(player)).length > 1;
                    }))
            );
        },
        async content(event, trigger, player) {
            const result = await player
                .judge((card) => {
                    if (get.color(card) == 'black') return 2;
                    return 0;
                })
                .set('judge2', (result) => {
                    return result.bool;
                })
                .forResult();
            if (result.bool) {
                trigger.parent.excluded.push(player);
                trigger.parent._Europa_yanggong = true;
                game.log(trigger.card, '对', player, '无效');
            }
        },
    },
    Europa_yanggong: {
        trigger: {
            player: 'useCardToPlayer',
        },
        filter(event, player) {
            return ['sha', 'juedou'].includes(event.card.name);
        },
        check(event, player) {
            return event.targets.some((target) => get.attitude(player, target) > 0);
        },
        async content(event, trigger, player) {
            trigger.parent.excluded.addArray(trigger.targets);
            trigger.parent._Europa_yanggong = true;
            game.log(trigger.card, '被', player, '无效了');
        },
        group: 'Europa_yanggong_neutralized',
        subSkill: {
            neutralized: {
                trigger: {
                    global: ['shaMiss', 'useCardToExcluded', 'eventNeutralized', 'shaCancelled'],
                },
                popup: false,
                filter(event, player) {
                    return event.card && event.cards?.length && event.parent._Europa_yanggong;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt('Europa_yanggong'), `你可以将${get.translation(trigger.cards)}交给一名其他角色`, lib.filter.notMe)
                        .set('ai', (target) => {
                            return get.attitude(get.player(), target);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        cards = trigger.cards.filterInD();
                    if (cards.length) await target.gain(cards, 'gain2').set('giver', player);
                    await player.draw();
                },
            },
        },
    },
    Europa_shoutu: {
        trigger: {
            player: 'damageEnd',
        },
        filter(event, player) {
            return event.source && player.canCompare(event.source);
        },
        logTarget: 'source',
        check(event, player) {
            return get.attitude(player, event.source) < 0;
        },
        async content(event, trigger, player) {
            const result = await player.chooseToCompare(trigger.source).forResult();
            if (result.tie) return;
            if (result.bool) {
                await trigger.source.damage(trigger.num);
            } else {
                const { bool, cards } = await player
                    .chooseToDiscard('h', `你可以弃置一张手牌,获得对方此次拼点的牌`)
                    .set('ai', (card) => {
                        return 6 - get.value(card);
                    })
                    .forResult();
                if (bool) {
                    if (result.target && get.position(result.target) == 'd') {
                        await player.gain(result.target, 'gain2', 'log');
                    }
                }
            }
        },
        group: 'Europa_shoutu_compare',
        subSkill: {
            compare: {
                trigger: {
                    player: 'compare',
                    target: 'compare',
                },
                filter(event, player) {
                    if (event.parent.name != 'Europa_shoutu') return false;
                    if (!event[player == event.player ? 'target' : 'player'].hasClan('天主教')) return false;
                    return (player == event.player ? event.num1 : event.num2) <= 12;
                },
                prompt2: '若与你拼点的角色为天主教势力,你可以使拼点牌的点数+2.',
                async content(event, trigger, player) {
                    if (player == trigger.target || !trigger.iwhile) {
                        trigger[player == trigger.player ? 'num1' : 'num2'] += 2;
                        game.log(player, '的拼点牌点数+2');
                    }
                },
            },
        },
    },
    Europa_kaihuang: {
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'Europa_kanmufalin',
        },
        filterCard: true,
        check(card) {
            return 6 - get.value(card);
        },
        group: 'Europa_kaihuang_phase',
        subSkill: {
            phase: {
                trigger: {
                    global: 'phaseEnd',
                },
                filter(event, player) {
                    return player.hasHistory('gain', (evt) => evt.cards.length >= 5);
                },
                prompt2: '每名角色回合结束时,若你于本回合中一次获取过至少五张牌,则你可以额外执行一个出牌阶段.',
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    player.phase('nodelay');
                },
            },
        },
    },
    Europa_banzan: {
        trigger: {
            player: 'phaseUseEnd',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    prompt: get.prompt2(event.name.slice(0, -5)),
                    filterCard: lib.filter.cardDiscardable,
                    position: 'hes',
                    filterTarget(card, player, target) {
                        return target.hasClan('原住民');
                    },
                    selectTarget: [1, Infinity],
                    ai1(card) {
                        const player = get.player();
                        if (player.needsToDiscard()) return 10 - get.value(card);
                        return 6 - get.value(card);
                    },
                    ai2(target) {
                        return get.attitude(get.player(), target);
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            for (const target of event.targets) {
                target.addSkill('Europa_banzan_max');
                target.addMark('Europa_banzan_max', 1, false);
            }
        },
        subSkill: {
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return num + player.countMark('Europa_banzan_max');
                    },
                },
            },
        },
    },
    Europa_gaijiao: {
        derivation: ['Europa_zunxi', 'Europa_baojiu'],
        trigger: {
            player: 'phaseBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            const list = get.info(event.name).derivation.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
            const { bool, links } = await player
                .chooseButton([`###${get.translation(event, name)}###`, [list, 'textbutton']], true)
                .set('ai', function (button) {
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) {
                player.addTempSkills(links[0], { player: 'phaseBegin' });
            }
        },
    },
    Europa_zunxi: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return game.hasPlayer((target) => {
                return target.hasClan('原住民');
            });
        },
        filterTarget(card, player, target) {
            return target.hasClan('原住民');
        },
        selectTarget: -1,
        multitarget: true,
        multiline: false,
        async content(event, trigger, player) {
            for (const target of event.targets) {
                await target.damage();
            }
            const num = player.getHistory('sourceDamage', (evt) => evt.parent == event).reduce((p, c) => p + c.num, 0);
            if (num > 0) {
                const { bool, targets } = await player
                    .chooseTarget(`你可以令非原住民角色交给你牌`)
                    .set('filterTarget', (card, player, target) => {
                        return target != player && !target.hasClan('原住民');
                    })
                    .set('selectTarget', [1, num])
                    .set('ai', (target) => {
                        return get.attitude(get.player(), target) <= 0;
                    })
                    .forResult();
                if (bool) {
                    const toGive = [];
                    for (const target of targets) {
                        if (!target.countCards('he')) continue;
                        const { bool, cards } = await target.chooseToGive(player, 'he', true).forResult();
                        if (bool) {
                            toGive.addArray(cards);
                        }
                    }
                    if (toGive.some((card) => get.type(card) == 'equip')) {
                        await player.recover();
                    }
                }
            }
        },
        ai: {
            order: 1,
            result: {
                player: 1,
            },
        },
    },
    Europa_baojiu: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            await player.recover();
            await player.draw(2);
        },
        group: 'Europa_baojiu_discard',
        subSkill: {
            discard: {
                trigger: {
                    player: 'gainAfter',
                },
                forced: true,
                filter(event, player) {
                    if (event.getParent(2).name == 'Europa_baojiu') return false;
                    return event.parent.name !== 'draw' || event.getParent('phaseDraw').player !== player;
                },
                async content(event, trigger, player) {
                    const cards = trigger.getg(player);
                    await player.discard(cards);
                },
            },
        },
    },
    Europa_jiaogu: {
        trigger: {
            player: 'gainAfter',
            target: 'useCardToTargeted',
            global: 'loseAsyncAfter',
        },
        getIndex(event, player, triggername) {
            return game
                .filterPlayer((target) => {
                    if (target === player) return false;
                    if (triggername !== 'useCardToTargeted') {
                        return event.getg?.(player)?.some((card) => event.getl?.(target)?.cards2?.includes(card));
                    }
                    return target === event.player && ['tao', 'taoyuan'].includes(event.card.name);
                })
                .sortBySeat();
        },
        forced: true,
        filter: (event, player, name, target) => target?.isIn(),
        logTarget: (event, player, name, target) => target,
        content() {
            event.targets[0].damage();
            player.draw();
        },
    },
    Europa_zisui: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return game.hasPlayer((target) => lib.skill.Europa_zisui.filterTarget(null, player, target));
        },
        filterTarget(card, player, target) {
            if (target === player) return false;
            return target.countCards('he');
        },
        async content(event, trigger, player) {
            const { target } = event,
                str = [get.translation(player), get.translation(event.name)];
            const result = await player.gainPlayerCard(target, 'he', true).forResult();
            if (result?.bool && result.cards?.length) {
                const [card] = result.cards;
                await player.showCards([card], str[0] + '【' + str[1] + '】获得');
                if (get.type(card) === 'basic') {
                    const sha = new lib.element.VCard({ name: 'sha', nature: 'Europazhen' });
                    if (target.canUse(sha, player, false)) await target.useCard(sha, player, false);
                } else {
                    const names = ['juedou', 'huogong'].filter((name) => target.canUse(new lib.element.VCard({ name }, player, false)));
                    if (names.length) {
                        const resultx =
                            names.length > 1
                                ? await target
                                    .chooseButton([str[1] + ':请选择其中一张牌对' + str[0] + '使用', [[names, 'vcard']]], true)
                                    .set('ai', (button) => {
                                        const player = get.player(),
                                            source = get.event().parent.player;
                                        return get.effect(source, { name: button.link[2] }, player, player);
                                    })
                                    .forResult()
                                : { bool: true, links: [['萌新转型中', '随性似风', names[0]]] };
                        if (resultx?.bool && resultx.links?.length) {
                            const sha = new lib.element.VCard({ name: resultx.links[0][2] });
                            if (target.canUse(sha, player, false)) await target.useCard(sha, player, false);
                        }
                    }
                }
            }
        },
        ai: {
            order: (item, player) => get.order({ name: 'shunshou_copy2' }, player),
            result: {
                player(player, target) {
                    return (
                        get.effect(target, { name: 'shunshou_copy2' }, player, player) +
                        [{ name: 'sha', nature: 'Europazhen' }, { name: 'juedou' }, { name: 'huogong' }].reduce((sum, card) => {
                            return sum + get.effect(player, card, target, player);
                        }, 0) /
                        3
                    );
                },
            },
        },
    },
    Europa_nongquan: {
        zhuSkill: true,
        trigger: { source: 'damageSource' },
        filter(event, player) {
            if (player.isHealthy() || event.player === player) return false;
            return player.hasSkill('Europa_shenluodiguo_king') && player.getStorage('Europa_shenluodiguo_king').includes(event.player);
        },
        forced: true,
        content() {
            player.recover();
        },
        group: 'Europa_nongquan_open',
        subSkill: {
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.Europa_setShenLuoKindom();
                },
            },
        },
    },
    Europa_zhabing: {
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'sha',
            storage: { Europa_zhabing: true },
        },
        filterCard: () => false,
        selectCard: -1,
        log: false,
        precontent() {
            player.loseHp();
            event.parent.addCount = false;
            player.addTempSkill('Europa_zhabing_effect');
        },
        ai: {
            order(item, player) {
                if (player.getHp() < 2 && get.effect(player, { name: 'losehp' }, player, player) <= 0) return 0;
                return get.order({ name: 'sha' }, player);
            },
        },
        mod: {
            targetInRange(card) {
                if (card?.stroage?.Europa_zhabing) return true;
            },
            cardUsable(card) {
                if (card?.stroage?.Europa_zhabing) return Infinity;
            },
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: { player: 'useCardAfter' },
                filter(event, player) {
                    return event.skill === 'Europa_zhabing';
                },
                forced: true,
                popup: false,
                content() {
                    if (player.hasHistory('sourceDamage', (evt) => evt.card === trigger.card)) {
                        player.draw();
                    } else player.chooseToDiscard('h', true);
                },
            },
        },
    },
    Europa_tumeng: {
        trigger: { player: 'phaseJieshuBegin' },
        filter(event, player) {
            return game.hasPlayer((target) => target !== player) && player.countCards('h');
        },
        check(event, player) {
            return game.hasPlayer((target) => target !== player && get.attitude(player, target) > 0);
        },
        async content(event, trigger, player) {
            let given_map = {};
            while (player.hasCard((card) => !card.hasGaintag('olsujian_given'), 'h')) {
                const {
                    bool,
                    cards,
                    targets: [target],
                } = await player
                    .chooseCardTarget({
                        prompt: '将所有手牌分配给其他角色',
                        animate: false,
                        filterCard(card, player) {
                            return !card.hasGaintag('olsujian_given');
                        },
                        forced: true,
                        selectCard: [1, Infinity],
                        position: 'h',
                        filterTarget: lib.filter.notMe,
                        ai1(card) {
                            if (ui.selected.cards.length) return 0;
                            const player = get.player();
                            return Math.max(
                                ...game
                                    .filterPlayer((target) => target !== player)
                                    .map((target) => {
                                        return (Math.max(0, target.getUseValue(card)) + get.value(card, target)) * Math.sign(get.attitude(player, target));
                                    })
                            );
                        },
                        ai2(target) {
                            const player = get.player(),
                                card = ui.selected.cards[0];
                            return (Math.max(0, target.getUseValue(card)) + get.value(card, target)) * Math.sign(get.attitude(player, target));
                        },
                    })
                    .forResult();
                if (bool) {
                    if (!given_map[target.playerid]) given_map[target.playerid] = [target];
                    given_map[target.playerid].addArray(cards);
                    player.addGaintag(cards, 'olsujian_given');
                } else break;
            }
            given_map = Object.keys(given_map).map((id) => {
                const list = given_map[id];
                return [list[0], [...list.slice(1)]];
            });
            const targets = given_map.map((list) => list[0]).sortBySeat(),
                cards = given_map.map((list) => list[1]);
            await game
                .loseAsync({
                    gain_list: given_map,
                    player: player,
                    cards: cards,
                    giver: player,
                    animate: 'giveAuto',
                })
                .setContent('gaincardMultiple');
            for (const target of targets) {
                await target.chooseToUse(function (card) {
                    const event = get.event();
                    return lib.filter.cardEnabled(card, event.player, event);
                }, '是否使用一张牌？');
            }
        },
    },
    Europa_fenbeng: {
        juexingji: true,
        trigger: { player: 'phaseZhunbeiBegin' },
        filter(event, player) {
            return player.getHp() <= 3;
        },
        forced: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const skills = player.getSkills(null, false, false).filter((skill) => {
                if (skill === 'Europa_yaozu') return false;
                return get.info(skill) && !get.info(skill).charlotte;
            });
            if (skills.length) await player.removeSkills(skills);
            if (player.maxHp !== 5) await player[player.maxHp > 5 ? 'loseMaxHp' : 'gainMaxHp'](Math.abs(player.maxHp - 5));
            await player.recoverTo(5);
            await player.drawTo(5);
        },
    },
    Europa_yaozu: {
        zhuSkill: true,
        derivation: 'jushou',
        trigger: {
            player: ['enterGame', 'changeSkillsAfter'],
            global: ['phaseBefore', 'Europa_shenluodiguo_giveAfter'],
        },
        filter(event, player) {
            if (event.name === 'Europa_shenluodiguo_give') {
                if (!event.targets.includes(player) && player !== event.player) return false;
                return !game.getGlobalHistory('everything', (evt) => evt.name === 'Europa_changeShenLuoKindom' && evt.parent === event).length;
            }
            const skills = player.getSkills(null, false, false).filter((skill) => get.info(skill) && !get.info(skill).charlotte);
            return skills.length === 1 && skills[0] === 'Europa_yaozu';
        },
        forced: true,
        content() {
            player.addSkills('jushou');
        },
        group: 'Europa_yaozu_open',
        subSkill: {
            open: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                filter(event, player) {
                    return event.name !== 'phase' || game.phaseNumber === 0;
                },
                forced: true,
                content() {
                    player.Europa_setShenLuoKindom();
                },
            },
        },
    },
    Europa_mingwu: {
        audio: 'ext:欧陆风云/audio/skill:2',
        global: 'Europa_mingwu_global',
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        filter(event, player) {
            return (
                !game.hasPlayer((target) => {
                    return target.getExpansions('Europa_mingwu_global').length;
                }) || player.hasSkill('Europa_mingwu_move')
            );
        },
        filterCard() {
            if (
                game.hasPlayer((target) => {
                    return target.getExpansions('Europa_mingwu_global').length;
                })
            )
                return false;
            return true;
        },
        selectCard() {
            if (
                game.hasPlayer((target) => {
                    return target.getExpansions('Europa_mingwu_global').length;
                })
            )
                return -1;
            return [1, Infinity];
        },
        position: 'hes',
        check(card) {
            return 5 - get.value(card);
        },
        lose: false,
        discard: false,
        delay: false,
        prompt: '出牌阶段限一次,若场上没有<明军>,你可以将至少一张牌当做<明军>并指定一个目标,你将这些牌置于你的武将牌旁并并摸等量的牌,否则你可以重新选择角色.',
        async content(event, trigger, player) {
            if (
                game.hasPlayer((target) => {
                    return target.getExpansions('Europa_mingwu_global').length;
                })
            ) {
                _status.Europa_mingwu_player = player;
                _status.Europa_mingwu_target = event.targets[0];
            } else {
                await player.addToExpansion(event.cards, player, 'giveAuto').gaintag.add('Europa_mingwu_global');
                await player.draw(event.cards.length);
                _status.Europa_mingwu_player = player;
                _status.Europa_mingwu_target = event.targets[0];
                _status.Europa_mingwu_current = player;
            }
            player.addSkill('Europa_mingwu_move');
            player.addTip('Europa_mingwu_move', get.translation('Europa_mingwu_move') + get.translation(_status.Europa_mingwu_target));
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    if (
                        game.hasPlayer((target) => {
                            return target.getExpansions('Europa_mingwu_global').length;
                        })
                    )
                        return 0;
                    return -2;
                },
            },
        },
        subSkill: {
            global: {
                marktext: '明军',
                intro: {
                    name: '明军',
                    content: 'expansion',
                    markcount: 'expansion',
                },
                onremove(player, skill) {
                    const cards = player.getExpansions(skill);
                    if (cards.length) player.loseToDiscardpile(cards);
                },
            },
            move: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete _status.Europa_mingwu_player;
                    delete _status.Europa_mingwu_target;
                    delete _status.Europa_mingwu_current;
                },
                async content(event, trigger, player) {
                    const target = _status.Europa_mingwu_target;
                    const current = _status.Europa_mingwu_current;
                    const getPrevious = [],
                        getNext = [];
                    let source = current;
                    for (var i = 0; i < game.filterPlayer().length; i++) {
                        source = source.previous;
                        getPrevious.add(source);
                        if (source == target) break;
                    }
                    source = current;
                    for (var i = 0; i < game.filterPlayer().length; i++) {
                        source = source.next;
                        getNext.add(source);
                        if (source == target) break;
                    }
                    const choice = getPrevious.length <= getNext.length ? 'getPrevious' : 'getNext';
                    const cards = current.getExpansions('Europa_mingwu_global');
                    await current[choice]().addToExpansion(cards, current, 'giveAuto').set('gaintag', ['Europa_mingwu_global']);
                    _status.Europa_mingwu_current = current[choice]();
                    const next = game.createEvent(current[choice]() == target ? 'Europa_mingwu_moveToAchieve' : 'Europa_mingwu_moveToFail');
                    next.player = current[choice]();
                    next.setContent('emptyEvent');
                    await next;
                },
                group: ['Europa_mingwu_achieve', 'Europa_mingwu_fail'],
                mark: true,
                intro: {
                    content() {
                        return get.translation(_status.Europa_mingwu_target);
                    },
                },
            },
            fail: {
                trigger: {
                    global: 'Europa_mingwu_moveToFail',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const target = trigger.player;
                    const cards = target.getExpansions('Europa_mingwu_global');
                    if (!target.countCards('he')) {
                        event.result = { bool: false };
                    } else {
                        event.result = await target
                            .chooseCard('he', [1, Infinity])
                            .set('prompt', '你可以将任意张牌置入<明军>,摸等量的牌并回复1点体力,或者移去数量为2的非0正整数倍张<明军>,其每以此法移去两张<明军>便失去1点体力.')
                            .set('ai', (card) => {
                                return 5 - get.value(card);
                            })
                            .forResult();
                    }
                    if (event.result.bool) {
                        await target.addToExpansion(event.result.cards, target, 'giveAuto').gaintag.add('Europa_mingwu_global');
                        await target.draw(event.result.cards.length);
                        await target.recover();
                    } else if (cards.length) {
                        //QQQ
                        const { bool, links } = await target
                            .chooseButton(true, [`移去数量为2的非0正整数倍张<明军>,每以此法移去两张<明军>便失去1点体力`, cards])
                            .set('selectButton', [2, cards.length])
                            .set('filterOk', () => {
                                return ui.selected.buttons.length % 2 == 0;
                            })
                            .set('ai', (button) => {
                                if (ui.selected.buttons.length > 1) return 0;
                                return 1 + Math.random();
                            })
                            .forResult();
                        if (bool) {
                            await target.loseToDiscardpile(links);
                            await target.loseHp(links.length / 2);
                        }
                        if (!target.getExpansions('Europa_mingwu_global').length) {
                            player.removeSkill('Europa_mingwu_move');
                        }
                    }
                },
            },
            achieve: {
                trigger: {
                    global: 'Europa_mingwu_moveToAchieve',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const target = _status.Europa_mingwu_target;
                    if (!target || !target.isIn() || target.getExpansions('Europa_mingwu_global').length < 2) {
                        target.loseToDiscardpile(target.getExpansions('Europa_mingwu_global'));
                        player.removeSkill('Europa_mingwu_move');
                        return;
                    }
                    while (target.getExpansions('Europa_mingwu_global').length) {
                        if (target.getExpansions('Europa_mingwu_global').length < 2) break;
                        game.broadcastAll((event) => {
                            event.description = `你可以移去以下数量的<明军>并执行对应效果(可重复选择):<br>
                                1.移去三张<明军>,对其造成1点伤害(若其没有牌改为移去两张);<br>
                                2.移去两张<明军>,弃置其一张牌.<br>
                                3.移去五张<明军>,获得其一张牌,并+5天命.`;
                        }, event);
                        const { bool, links } = await player
                            .chooseButton([event.description, target.getExpansions('Europa_mingwu_global')])
                            .set('selectButton', [1, 5])
                            .set('targetx', target)
                            .set('filterOk', () => {
                                const target = get.event('targetx');
                                if (!target.countCards('he')) return [2, 5].includes(ui.selected.buttons.length);
                                return [2, 3, 5].includes(ui.selected.buttons.length);
                            })
                            .set('ai', (button) => {
                                const player = get.player(),
                                    target = get.event('targetx');
                                if (get.damageEffect(target, player, player) > 0) {
                                    if (ui.selected.buttons.length >= (target.countCards('he') ? 3 : 2)) return 0;
                                    return 2;
                                }
                                return 1;
                            })
                            .forResult();
                        if (bool) {
                            await target.loseToDiscardpile(links);
                            if (links.length == 3) {
                                await target.damage();
                            } else if (links.length == 2) {
                                if (!target.countCards('he')) await target.damage();
                                else if (target.countDiscardableCards(player, 'he')) {
                                    await player.discardPlayerCard(target, 'he', true);
                                }
                            } else {
                                if (target.countGainableCards(player, 'he')) {
                                    await player.gainPlayerCard(target, 'he', true);
                                }
                                if (player.hasSkill('Europa_tianchaojizhi') && game.zhu == player) {
                                    await get.info('Europa_tianchaojizhi').Europa_Mark(player, 5);
                                }
                            }
                        } else break;
                    }
                    if (target.getExpansions('Europa_mingwu_global').length) {
                        await target.loseToDiscardpile(target.getExpansions('Europa_mingwu_global'));
                    }
                    player.removeSkill('Europa_mingwu_move');
                },
            },
        },
    },
    Europa_chaoshang: {
        audio: 'ext:欧陆风云/audio/skill:2',
        global: 'Europa_chaoshang_global',
        trigger: {
            global: 'useCard',
        },
        forced: true,
        filter(event, player) {
            return event.cards?.some((card) => {
                return event.player.getStorage('Europa_chaoshang_global').includes(card);
            });
        },
        async content(event, trigger, player) {
            const cards = trigger.cards.filter((card) => {
                return trigger.player.getStorage('Europa_chaoshang_global').includes(card);
            });
            if (cards.length) trigger.player.unmarkAuto('Europa_chaoshang_global', cards);
            await player.draw();
        },
        subSkill: {
            global: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    if (!game.hasPlayer((i) => i.hasSkill('Europa_chaoshang') && i != player)) return false;
                    return player.getExpansions('Europa_mingwu_global').length;
                },
                filterCard: true,
                position: 'hes',
                lose: false,
                discard: false,
                delay: false,
                prompt: '你可以将一张牌置入<明军>并从牌堆中获得两张相同类别的牌.',
                async content(event, trigger, player) {
                    const type = get.type2(event.cards[0]);
                    await player.addToExpansion(event.cards, player, 'giveAuto').gaintag.add('Europa_mingwu_global');
                    const cards = [];
                    for (var i = 0; i < 2; i++) {
                        var card = get.cardPile(function (cardx) {
                            return get.type2(cardx) == type && !cards.includes(cardx);
                        });
                        if (card) cards.push(card);
                    }
                    if (cards.length) {
                        await player.gain(cards, 'gain2');
                        player.markAuto('Europa_chaoshang_global', cards);
                        player.addGaintag(cards, 'Europa_chaoshang_global');
                    }
                },
                ai: {
                    order: 1,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
        },
    },
    Europa_zhengguo: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            source: 'dieAfter',
        },
        zhuSkill: true,
        forced: true,
        Europa_tianchaojizhi_lower(player) {
            if (!player.hasZhuSkill('Europa_mingwu')) return 0;
            return player.getAllHistory('useSkill', (evt) => evt.skill == 'Europa_zhengguo').length * 10;
        },
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_zhengguo')) return false;
            return event.getParent(3)?.name == 'Europa_mingwu_achieve';
        },
        async content(event, trigger, player) {
            const num = Math.min(10, get.info('Europa_tianchaojizhi').getLimit - player.countMark('Europa_tianchaojizhi'));
            if (num > 0) get.info('Europa_tianchaojizhi').Europa_Mark(player, num);
        },
        init(player) {
            if (!player.hasZhuSkill('Europa_zhengguo')) return;
            player.addSkill('Europa_tianchaojizhi');
        },
        group: 'Europa_zhengguo_tianming',
        subSkill: {
            tianming: {
                trigger: {
                    player: 'phaseBegin',
                },
                forced: true,
                filter(event, player) {
                    if (player.phaseNumber > 1) return false;
                    if (!player.hasZhuSkill('Europa_zhengguo')) return false;
                    return player.countMark('Europa_tianchaojizhi') != 40;
                },
                async content(event, trigger, player) {
                    const num = player.countMark('Europa_tianchaojizhi') - 40;
                    get.info('Europa_tianchaojizhi').Europa_Mark(player, Math.abs(num), num < 0 ? 'add' : 'remove');
                },
            },
        },
    },
    _Europa_zhudiChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_zhudiChooseAudio) return false;
            const list = ['Europa_zhudi'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_zhudiChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/朱棣bgm.mp3`;
        },
    },
    Europa_chizheng: {
        enable: 'phaseUse',
        filter(event, player) {
            if (player.getStat('skill').Europa_chizheng && !player.hasSkill('Europa_chizheng_up')) return false;
            return !game.hasPlayer((t) => !t.countCards('h'));
        },
        usable: 2,
        async content(event, trigger, player) {
            const targets = game.filterPlayer();
            player.line(targets);
            const result = await player
                .chooseToDebate(targets)
                .set('callback', async (event, _, player) => {
                    const result = event.debateResult,
                        opinion = result.opinions.find((i) => result[i].flat().includes(player));
                    const [from, to] = [
                        result[opinion].map((list) => list[0]),
                        result.opinions
                            .filter((i) => i !== opinion)
                            .map((i) => result[i].map((list) => list[0]))
                            .flat(),
                    ];

                    if (from.length) {
                        player.line(from, 'wood');
                        await game.asyncDraw(from);
                    }
                    if (to.length) {
                        player.line(to, 'fire');
                        player.addTempSkill('Europa_chizheng_effect');
                        player.markAuto('Europa_chizheng_effect', to);
                    }
                })
                .forResult();
            if (
                targets
                    .filter((i) => i !== player)
                    .map((t) => {
                        return result.opinions.find((i) => result[i].flat().includes(t));
                    })
                    .unique().length === 1
            ) {
                await player.draw(targets.length);
                player.addTempSkill('Europa_chizheng_up', 'phaseUseAfter');
            }
        },
        ai: {
            order: 10,
            result: { player: 1 },
        },
        subSkill: {
            up: { charlotte: true },
            effect: {
                charlotte: true,
                intro: { content: '$不能响应你使用的牌' },
                trigger: { player: 'useCard' },
                forced: true,
                content() {
                    const targets = player.getStorage(event.name);
                    player.line(targets);
                    trigger.directHit.addArray(targets);
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        return player.getStorage('Europa_chizheng_effect').includes(arg?.target);
                    },
                },
            },
        },
    },
    Europa_chuqi: {
        trigger: { global: 'chooseToDebateBegin' },
        filter(event, player) {
            const { list: targets } = event;
            return targets.includes(player) && targets.some((i) => i !== player && !event.fixedResult?.some((key) => key[0] === i));
        },
        async cost(event, trigger, player) {
            let { list: targets } = trigger;
            targets = targets.filter((i) => i !== player && !trigger.fixedResult?.some((key) => key[0] === i)).sortBySeat();
            const result = (event.result = await player
                .chooseControl('red', 'black', 'cancel2')
                .set('ai', () => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    let { list: targets } = trigger;
                    targets = targets.filter((i) => i !== player && !event.fixedResult?.some((key) => key[0] === i));
                    if (targets.reduce((i, t) => i - Math.sign(get.attitude(player, t)), 0) < 0) return 'cancel2';
                    return get
                        .event()
                        .controls.filter((i) => i !== 'cancel2')
                        .randomGet();
                })
                .set('prompt', get.prompt2('Europa_chuqi', targets))
                .forResult());
            event.result.bool = result.control !== 'cancel2';
            event.result.targets = targets;
            event.result.cost_data = result.control;
        },
        async content(event, trigger, player) {
            if (!trigger.fixedResult) trigger.fixedResult = [];
            const { cost_data: color, targets } = event,
                str = get.translation(color);
            player.chat(str);
            game.log(player, '声明了' + str);
            for (const target of targets) {
                const result = await target
                    .chooseCard({ color }, '展示一张' + str + '手牌作为议事结果;或失去1点体力且本回合非锁定技失效,且本次议事结束后视为对' + get.translation(player) + '使用一张无距离限制的【杀】')
                    .set('ai', (card) => {
                        const player = get.player(),
                            source = get.event().parent.player;
                        return -get.effect(player, { name: 'losehp' }, player, player) >
                            (() => {
                                let eff = 0,
                                    card = new lib.element.VCard({ name: 'sha' });
                                if (player.canUse(card, source, false)) eff += get.effect(source, card, player, player);
                                return eff;
                            })()
                            ? 1 + Math.random()
                            : 0;
                    })
                    .forResult();
                if (result.bool) {
                    await target.showCards(result.cards, get.translation(target) + '展示');
                    trigger.fixedResult.push([target, result.cards[0]]);
                } else {
                    target.chat('但是我拒绝!');
                    await target.loseHp();
                    target.addTempSkill('fengyin');
                    target
                        .when({ global: 'chooseToDebateAfter' })
                        .filter((evt) => evt === trigger)
                        .then(() => {
                            const card = new lib.element.VCard({ name: 'sha' });
                            if (player.canUse(card, source, false)) player.useCard(card, source, false);
                        })
                        .vars({ source: player });
                }
            }
        },
    },
    Europa_jijue: {
        zhuSkill: true,
        trigger: { global: ['gainAfter', 'lsoeAsyncAfter'] },
        getIndex(event, player, triggername) {
            return game
                .filterPlayer((target) => {
                    if (!event.getg || target === player || target.group !== 'Europa_Roman') return false;
                    return event.getg(target).length === 1 && ['h', 'e'].includes(get.position(event.getg(target)[0])) && get.owner(event.getg(target)[0]) === target;
                })
                .sortBySeat();
        },
        filter: (event, player, name, target) => target?.isIn(),
        logTarget: (event, player, name, target) => target,
        prompt2(event, player, name, target) {
            const str = get.translation(target);
            return '令' + str + '展示其获得的牌并将此牌交给你,进行后续选择';
        },
        check(event, player, name, target) {
            const [card] = event.getg(target);
            return get.attitude(player, target) * get.value(card, player) < 0;
        },
        usable: 1,
        async content(event, trigger, player) {
            const [target] = event.targets,
                cards = trigger.getg(target);
            const str = get.translation(target);
            await target.showCards(cards, str + '获得的牌');
            await target.give(cards, player);
            const result = await player
                .chooseToGive(target, 'he', '交给' + str + '一张牌作为其下次的议事意见牌;或令' + str + '跳过下个摸牌阶段,其视为对你使用一张无距离限制的【杀】')
                .set('ai', (card) => {
                    const player = get.player(),
                        [target] = get.event().parent;
                    return get.effect(target, { name: 'bingliang' }, player, player) >
                        (() => {
                            let eff = 0,
                                card = new lib.element.VCard({ name: 'sha' });
                            if (target.canUse(card, player, false)) eff += get.effect(player, card, target, player);
                            return -eff;
                        })()
                        ? 0
                        : 1 + Math.random();
                })
                .forResult();
            if (result.bool) {
                target.addGaintag(result.cards, 'Europa_jijue');
                target
                    .when({ global: 'chooseToDebateBefore' })
                    .filter((evt) => {
                        const { list: targets } = evt;
                        return targets.includes(target) && !evt.fixedResult?.some((key) => key[0] === target);
                    })
                    .then(() => {
                        const cards = player.getCards('h', (card) => card.hasGaintag('Europa_jijue'));
                        if (cards.length) {
                            if (!trigger.fixedResult) trigger.fixedResult = [];
                            for (const card of cards) trigger.fixedResult.push([player, card]);
                        }
                    });
            } else {
                target.skip('phaseDraw');
                const card = new lib.element.VCard({ name: 'sha' });
                if (target.canUse(card, player, false)) await target.useCard(card, player, false);
            }
        },
    },
    _Europa_kaisaChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_sulaimanChooseAudio) return false;
            const list = ['Europa_kaisa'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_sulaimanChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/罗马bgm.mp3`;
        },
    },
    Europa_beimou: {
        trigger: {
            player: 'showCardsAfter',
            global: 'chooseToDebateEnd',
        },
        filter(event, player) {
            if (!player.getExpansions('Europa_beimou').length) return false;
            if (event.name === 'chooseToDebate') {
                return event.opinions?.filter((list) => list[0] === player).flat().length === 1;
            }
            return event.cards && event.cards.length === 1;
        },
        prompt2(event, player) {
            const [from] = player.getExpansions('Europa_beimou');
            const [to] = event.name === 'chooseToDebate' ? event.opinions.filter((list) => list[0] === player).flat() : event.cards;
            return '展示' + get.translation(from) + '并将之置入弃牌堆,' + (get.color(from) !== get.color(to) ? '蓄谋所有手牌' : '从牌堆中获得一张【杀】');
        },
        async content(event, trigger, player) {
            const [from] = player.getExpansions('Europa_beimou');
            const [to] = trigger.name === 'chooseToDebate' ? trigger.opinions.filter((list) => list[0] === player).flat() : trigger.cards;
            await player.showCards([from], get.translation(player) + '扣置的<谋>');
            await player.loseToDiscardpile([from]);
            if (get.color(from) !== get.color(to)) {
                while (player.hasCard((card) => player.canAddJudge({ name: 'xumou_jsrg' }, [card]), 'h')) {
                    const card = player.getCards('h', (card) => player.canAddJudge({ name: 'xumou_jsrg' }, [card]))[0];
                    if (card) {
                        await player.addJudge({ name: 'xumou_jsrg' }, [card]);
                    } //QQQ
                }
            } else {
                const sha = get.cardPile2('sha');
                if (sha) await player.gain(sha, 'gain2');
            }
        },
        intro: {
            markcount: 'expansion',
            mark(dialog, storage, player) {
                const cards = player.getExpansions('Europa_beimou');
                if (player.isUnderControl(true)) dialog.addAuto(cards);
                else return '共有' + get.cnNumber(cards.length) + '张牌';
            },
        },
        marktext: '谋',
        onremove(player, skill) {
            const cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
        },
        group: 'Europa_beimou_put',
        subSkill: {
            put: {
                enable: 'phaseUse',
                filter(event, player) {
                    return player.countCards('h');
                },
                usable: 1,
                prompt() {
                    const player = get.player(),
                        cards = player.getExpansions('Europa_beimou');
                    return '将一张手牌扣置于武将牌上' + (cards.length ? ',获得' + get.translation(cards) : '');
                },
                filterCard: true,
                position: 'h',
                lose: false,
                discard: false,
                check: (card) => 7 - get.value(card),
                async content(event, trigger, player) {
                    const cards = player.getExpansions('Europa_beimou');
                    await (() => {
                        const next = player.addToExpansion(event.cards, player, 'giveAuto');
                        next.gaintag.add('Europa_beimou');
                        return next;
                    })();
                    if (cards.length) await player.gain(cards, player, 'giveAuto');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            const cards = player.getExpansions('Europa_beimou');
                            if (!cards.length) return 1;
                            return get.value(cards[0]) - Math.min(...player.getCards('h').map((card) => get.value(card)));
                        },
                    },
                },
            },
        },
    },
    Europa_panci: {
        trigger: { player: 'useCardToPlayer' },
        filter(event, player) {
            if (event.card.name !== 'sha') return false;
            return (
                !event.target.countCards('he') ||
                player.hasCard((card) => {
                    if (get.position(card) === 'h' && _status.connectMode) return true;
                    return lib.filter.cardDiscardable(card, player);
                }, 'he')
            );
        },
        async cost(event, trigger, player) {
            const { target } = trigger,
                list = ['Europa_panci', target];
            if (target.countCards('he')) {
                event.result = await player
                    .chooseToDiscard(get.prompt(...list), '弃置任意张牌,弃置其等量的牌', [1, Infinity], 'he')
                    .set('ai', (card) => {
                        const { max, goon } = get.event();
                        if (ui.selected.cards.length >= max) return 0;
                        return goon ? 4.5 - get.value(card) : 0;
                    })
                    .set('max', target.countDiscardableCards(player, 'he'))
                    .set('goon', get.attitude(player, target) < 0)
                    .forResult();
                event.result.skill_popup = true;
            } else {
                event.result = await player
                    .chooseBool(get.prompt(...list), '令' + get.translation(trigger.card) + '的伤害+1')
                    .set(
                        'choice',
                        (() => {
                            return trigger.targets.reduce((sum, target) => sum + get.effect(target, trigger.card, player, player), 0) > 0;
                        })()
                    )
                    .forResult();
            }
        },
        logTarget: 'target',
        async content(event, trigger, player) {
            const { target } = trigger;
            if (event.cards?.length) {
                if (target.countDiscardableCards(player, 'he')) player.discardPlayerCard(event.cards.length, target, 'he', true);
            } else {
                trigger.parent.baseDamage++;
                game.log(trigger.card, '的伤害', '#y+1');
            }
        },
    },
    Europa_fenwan: {
        enable: 'phaseUse',
        filter(event, player) {
            return player.countCards('hs', { name: 'sha' });
        },
        filterCard(card) {
            return card.name == 'sha';
        },
        selectTarget: 2,
        complexTarget: true,
        filterTarget(card, player, target) {
            if (ui.selected.targets.length == 0) {
                return game.hasPlayer((targetx) => {
                    return target.canUse({ name: 'sha' }, targetx, false, false);
                });
            } else {
                return ui.selected.targets[0].canUse({ name: 'sha' }, target);
            }
        },
        multitarget: true,
        multiline: false,
        async content(event, trigger, player) {
            const useCardEvent = event.targets[0].useCard({ name: 'sha' }, event.targets[1], 'noai');
            useCardEvent.animate = false;
            await useCardEvent;
            if (event.targets[0].hasHistory('sourceDamage', (evt) => evt.getParent(event.name) == event)) {
                const { bool } = await player
                    .chooseBool(`你可以对${get.translation(event.targets[0])}造成1点伤害`)
                    .set('ai', () => {
                        const player = get.player(),
                            targets = get.event().parent.targets;
                        return get.damageEffect(targets[0], player, player) > 0;
                    })
                    .forResult();
                if (bool) await event.targets[0].damage();
            }
        },
        ai: {
            order: 1.5,
            expose: 0.2,
            result: {
                target(player, target) {
                    if (ui.selected.targets.length) {
                        var from = ui.selected.targets[0];
                        return get.effect(target, { name: 'sha' }, from, target);
                    }
                    var effs = [0, 0];
                    game.countPlayer(function (current) {
                        if (current != target && target.canUse('sha', current)) {
                            var eff = get.effect(current, { name: 'sha' }, target, target);
                            if (eff > effs[0]) effs[0] = eff;
                            if (eff < effs[1]) effs[1] = eff;
                        }
                    });
                    return effs[get.attitude(player, target) > 0 ? 0 : 1];
                },
            },
        },
    },
    Europa_zhineng: {
        trigger: {
            global: 'useCard',
        },
        usable: 1,
        filter(event, player) {
            return get.zhinangs().includes(event.card.name);
        },
        check(event, player) {
            return get.attitude(player, event.player) > 0;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            trigger.directHit.addArray(game.filterPlayer());
            game.log(trigger.card, '不可被响应');
        },
    },
    Europa_jijiang: {
        trigger: {
            global: ['gainMaxHpEnd', 'loseMaxHpEnd'],
        },
        forced: true,
        filter(event, player) {
            return event.player != player;
        },
        async content(event, trigger, player) {
            player[trigger.name == 'gainMaxHp' ? 'draw' : 'recover']();
        },
    },
    Europa_xuzhi: {
        trigger: {
            global: 'useCard',
        },
        usable: 1,
        logTarget: 'player',
        filter(event, player) {
            return event.player != player && get.distance(player, event.player) <= 1 && (event.card.name == 'sha' || get.zhinangs().includes(event.card.name));
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5)), 'he')
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (trigger.player == player) return 0;
                    return 6 - get.value(card);
                })
                .set('chooseonly', true)
                .forResult();
        },
        async content(event, trigger, player) {
            await player.discard(event.cards);
            trigger.player = player;
            game.log(player, '成为', trigger.card, '的使用者');
        },
    },
    Europa_natu: {
        group: ['Europa_natu_damage', 'Europa_natu_recover'],
        subSkill: {
            damage: {
                trigger: {
                    source: 'damageBegin1',
                },
                getLimit: 7,
                logTarget: 'player',
                prompt2: '每轮限一次,当你对目标角色造成的伤害时,你可以失去X点体力,并改为减少目标角色1点体力上限,你增加X点体力上限(X为你本次造成伤害的点数).',
                check(event, player) {
                    if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= event.num) return false; //QQQ
                    return get.attitude(player, event.player) <= 0;
                },
                async content(event, trigger, player) {
                    player.tempBanSkill('Europa_natu_damage', 'roundStart', false);
                    await player.loseHp(trigger.num);
                    trigger.cancel();
                    await trigger.player.loseMaxHp();
                    let num = trigger.num,
                        limit = get.info('Europa_natu_damage').getLimit;
                    if (player.countMark('Europa_natu_damage') < limit) {
                        //QQQ
                        if (num + player.countMark('Europa_natu_damage') >= limit) num = limit - trigger.num;
                        await player.gainMaxHp(num);
                        player.addMark('Europa_natu_damage', num);
                    }
                },
            },
            recover: {
                trigger: {
                    player: 'recoverEnd',
                },
                filter(event, player) {
                    return player.isHealthy();
                },
                prompt2: '当你回复体力后,若此时你的体力值与体力上限相等,你摸等同于你体力上限张牌.',
                async content(event, trigger, player) {
                    player.draw(Math.min(player.maxHp, 20));
                },
            },
        },
    },
    Europa_qiandao: {
        enable: 'phaseUse',
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_qiandao')) return false;
            return game.hasPlayer((target) => target != player && target.group == 'Europa_Indonesia');
        },
        filterTarget(card, player, target) {
            return target != player && target.group == 'Europa_Indonesia';
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.loseMaxHp();
            await target.recover();
            await target.draw();
        },
        ai: {
            order: 3,
            result: {
                target(player, target) {
                    if (player.maxHp < 2) return 0;
                    return 1;
                },
            },
        },
    },
    Europa_shouluan: {
        trigger: {
            global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
        },
        filter(event, player, name) {
            if (event.player == player) return false;
            if (event.name.indexOf('lose') == 0) {
                if (event.getlx === false || event.position != ui.discardPile) return false;
            } else {
                var evt = event.parent;
                if (evt.relatedEvent && evt.relatedEvent.name == 'useCard' && evt.relatedEvent.player == player) return false;
            }
            return event.getd().some((card) => ['equip1', 'equip2'].includes(get.subtype(card)));
        },
        async content(event, trigger, player) {
            const cards = trigger.getd().filter((card) => ['equip1', 'equip2'].includes(get.subtype(card)));
            if (cards.length) player.addToExpansion(cards, 'gain2').gaintag.add('Europa_shouluan');
        },
        intro: {
            content: 'expansion',
            markcount: 'expansion',
        },
        onremove(player, skill) {
            var cards = player.getExpansions(skill);
            if (cards.length) player.loseToDiscardpile(cards);
        },
        group: 'Europa_shouluan_use',
        subSkill: {
            use: {
                enable: 'phaseUse',
                filter(event, player, name) {
                    if (!player.getExpansions('Europa_shouluan').length || player.getStorage('djcleihu_used').length > 1) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                nature = info[3],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (nature) return false;
                            if (name != 'sha' && !get.zhinangs().includes(name)) return false;
                            return !player.getStorage('Europa_shouluan_used').includes(type);
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3], storage: { Europa_shouluan: true } }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    nature = info[3],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                if (nature) return false;
                                if (name != 'sha' && !get.zhinangs().includes(name)) return false;
                                return !player.getStorage('Europa_shouluan_used').includes(type);
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3], storage: { Europa_shouluan: true } }, player, event));
                        return ui.create.dialog(get.translation('Europa_shouluan'), '选择你要使用的牌', [list, 'vcard']);
                    },
                    check(button) {
                        return get.player().getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                            storage: {
                                Europa_shouluan: true,
                            },
                        });
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                                storage: {
                                    Europa_shouluan: true,
                                },
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            ai1(card) {
                                return 6 - get.value(card);
                            },
                            async precontent(event, trigger, player) {
                                var result,
                                    cards = player.getExpansions('Europa_shouluan');
                                if (cards.length == 1) result = { bool: true, links: cards };
                                else
                                    result = await player
                                        .chooseButton(true, [get.translation('Europa_shouluan'), cards])
                                        .set('ai', (button) => {
                                            return 1 + Math.random();
                                        })
                                        .forResult();
                                if (result.bool) {
                                    event.result.cards = result.links;
                                    player.addTempSkill('Europa_shouluan_used', 'phaseUseAfter');
                                    player.markAuto('Europa_shouluan_used', [get.type(event.result.card)]);
                                }
                            },
                        };
                    },
                    prompt(links, player) {
                        return '将一张<平>当' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】对距离1以内的等量名角色使用';
                    },
                },
                mod: {
                    targetInRange(card, player, target) {
                        if (card.storage?.Europa_shouluan) return Infinity;
                    },
                    cardUsable(card, player, num) {
                        if (card.storage?.Europa_shouluan) return Infinity;
                    },
                },
                ai: {
                    order() {
                        const player = get.player();
                        return 1;
                    },
                    result: {
                        player: 1,
                    },
                },
            },
            use_backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    Europa_yanjiu: {
        trigger: {
            player: 'phaseJieshuBegin',
        },
        popup: false,
        filter(event, player) {
            return player.getExpansions('Europa_shouluan').length;
        }, //QQQ
        async cost(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton([get.prompt2(event.name.slice(0, -5)), player.getExpansions('Europa_shouluan')])
                .set('filterButton', (button) => {
                    return game.hasPlayer((target) => target.canEquip(button.link));
                })
                .set('ai', (button) => {
                    const player = get.player();
                    if (player.countCards('he', { subtype: get.subtype(button.link) }) > 1) {
                        return 11 - get.equipValue(button.link);
                    }
                    return 10 - get.value(button.link);
                })
                .forResult();
            if (bool) {
                const cards = links;
                const result = await player
                    .chooseTarget(`你可以将一张<平>置入一名角色的装备区,令其回复一点体力.`)
                    .set('card', cards[0])
                    .set('filterTarget', (card, player, target) => {
                        const cardx = get.event('card');
                        return target.canEquip(cardx);
                    })
                    .set('ai', (target) => {
                        const player = get.player(),
                            card = get.event('card');
                        if (get.attitude(player, target) <= 0) return 0;
                        return get.effect(target, card, target, target);
                    })
                    .forResult();
                const targets = result.targets;
                if (result.bool) event.result = { bool: result.bool, targets, cards };
            }
        },
        async content(event, trigger, player) {
            player.$give(event.cards, event.targets[0], false);
            await event.targets[0].equip(event.cards[0]);
            await event.targets[0].recover();
        },
        ai: {
            combo: 'Europa_shouluan',
        },
    },
    Europa_sijiao: {
        trigger: {
            player: 'useCardToPlayered',
        },
        filter(event, player) {
            if (event.card.name != 'sha') return false;
            return player.getHistory('useCard', (evt) => evt.card.name == 'sha').indexOf(event.parent) != 0;
        },
        logTarget: 'target',
        check(event, player) {
            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= event.num) return false; //QQQ
            return get.attitude(player, event.target) <= 0;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            trigger.parent.baseDamage++;
            trigger.parent._Europa_sijiao = true;
            trigger.parent.directHit.addArray(game.filterPlayer());
            player.addTempSkill('Europa_sijiao_effect');
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'dying',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.getParent('useCard')._Europa_sijiao;
                },
                async content(event, trigger, player) {
                    const skills = player.getSkills(null, false, false).filter(function (i) {
                        var info = get.info(i);
                        return info && !info.charlotte && lib.translate[i + '_info'];
                    });
                    if (skills.length) {
                        await player.removeSkills(skills);
                        player
                            .when('phaseEnd')
                            .then(() => {
                                player.addSkills(skills);
                            })
                            .vars({ skills: skills });
                    }
                    await player.draw(2);
                },
            },
        },
    },
    Europa_zhengguan: {
        trigger: {
            player: 'useCardToPlayered',
        },
        usable: 1,
        popup: false,
        filter(event, player) {
            return player.isPhaseUsing() && event.targets?.length == 1;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    var distance = get.distance(player, target);
                    if (!player.canCompare(target)) return false;
                    if (player.seatNum == 1) {
                        return !game.hasPlayer((current) => current != target && get.distance(player, current) > distance);
                    }
                    return target.seatNum == 1;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    if (player.hasSkill('Europa_zhengguan_effect')) return 0;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool } = await player.chooseToCompare(target).forResult();
            if (bool) player.addTempSkill('Europa_zhengguan_effect');
            else {
                await player.loseHp();
                var evt = _status.event.getParent('phaseUse');
                if (evt && evt.name == 'phaseUse') {
                    evt.skipped = true;
                }
            }
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    cardUsable: () => Infinity,
                    targetInRange: () => true,
                },
            },
        },
    },
    Europa_yongren: {
        trigger: {
            global: 'compare',
        },
        usable: 1,
        filter(event, player) {
            return player.countCards('he');
        },
        logTarget: 'player',
        async cost(event, trigger, player) {
            const result = await player
                .chooseToDiscard(get.prompt2(event.name.slice(0, -5)), 'he')
                .set('ai', (card) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (get.attitude(player, trigger.player) <= 0) return 0;
                    return 6 - get.value(card) + card.number * 0.2;
                })
                .set('chooseonly', true)
                .forResult();
            if (!result.bool) return;
            const num = result.cards[0].number;
            const dialog = [get.prompt(event.name.slice(0, -5)), `<div class="text center">令一张拼点牌的点数+${num}</div>`];
            const lose_list = trigger.lose_list.slice().sort((a, b) => lib.sort.seat(a[0], b[0]));
            dialog.push(
                `<div class="text center">${lose_list
                    .map((list) => {
                        return get.translation(list[0]);
                    })
                    .join('　 / 　')}</div>`
            );
            const cards = lose_list.map((list) => list[1]).flat();
            dialog.push(cards);
            const { bool, links } = await player.chooseButton(dialog).forResult();
            if (bool) event.result = { bool, cost_data: { cards, links, lose_list, num } };
        },
        async content(event, trigger, player) {
            const cards = event.cost_data.cards,
                links = event.cost_data.links,
                num = event.cost_data.num,
                lose_list = event.cost_data.lose_list;
            await player.discard(event.cards);
            let [fn, card] = ['addNumber', links[0]];
            const selectedPlayer = lose_list.find((item) => {
                if (Array.isArray(item[1])) return item[1].includes(card);
                return item[1] == card;
            })[0];
            selectedPlayer.addTempSkill('Europa_yongren_change');
            if (!selectedPlayer.storage.Europa_yongren_change) selectedPlayer.storage.Europa_yongren_change = [];
            selectedPlayer.storage.Europa_yongren_change.push([fn, num, card]);
            player
                .when({ global: 'chooseToCompareAfter' })
                .filter((evt) => evt === trigger)
                .vars({
                    target: selectedPlayer,
                })
                .then(() => {
                    const num1 = trigger.result.num1,
                        num2 = trigger.result.num2;
                    if ((num1 > num2 && target == trigger.player) || (num1 < num2 && target == trigger.target)) {
                        player.draw(2);
                        const next = game.createEvent('Europa_yongren_zhongliu');
                        next.player = target;
                        next.setContent(lib.skill.clanzhongliu.content);
                    } else {
                        player.loseHp();
                        player.addTempSkill('Europa_yongren_effect');
                    }
                });
        },
        subSkill: {
            effect: {
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                charlotte: true,
                _priority: 15,
                filter(event, player) {
                    return event.player != player;
                },
                async content(event, trigger, player) {
                    trigger.parent.directHit.add(player);
                },
            },
            change: {
                trigger: {
                    global: 'compare',
                },
                charlotte: true,
                forced: true,
                silent: true,
                filter(event, player) {
                    const storage = player.getStorage('Europa_yongren_change');
                    if (!storage.length) return false;
                    if ((player !== event.player || event.iwhile) && player !== event.target) return false;
                    return event.lose_list.some((list) => {
                        const cards = Array.isArray(list[1]) ? list[1] : [list[1]];
                        return list[0] === player && storage.some((s) => cards.includes(s[2]));
                    });
                },
                async content(event, trigger, player) {
                    const [fn, num] = player.getStorage('Europa_yongren_change').find((s) => {
                        return trigger.lose_list.some((list) => {
                            const cards = Array.isArray(list[1]) ? list[1] : [list[1]];
                            return list[0] === player && cards.includes(s[2]);
                        });
                    });
                    const numId = player === trigger.player ? 'num1' : 'num2';
                    trigger[fn](numId, num);
                    if (trigger[numId] > 13) trigger[numId] = 13;
                    else if (trigger[numId] < 1) trigger[numId] = 1;
                    game.log(player, '的拼点牌点数', fn === 'addNumber' ? '+' : '-', num);
                },
            },
        },
    },
    Europa_tongju: {
        trigger: {
            target: 'useCardToPlayer',
        },
        usable: 1,
        popup: false,
        filter(event, player) {
            return event.player != player;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    prompt: get.prompt2(event.name.slice(0, -5)),
                    selectCard: [1, Infinity],
                    filterCard: true,
                    filterTarget: lib.filter.notMe,
                    selectTarget() {
                        return ui.selected.cards.length;
                    },
                    filterOk() {
                        return ui.selected.cards.length == ui.selected.targets.length;
                    },
                    position: 'h',
                    ai1(card) {
                        if (card.name == 'du') return 10;
                        else if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') return 0;
                        var player = _status.event.player;
                        if (
                            ui.selected.cards.length > 4 ||
                            !game.hasPlayer(function (current) {
                                return get.attitude(player, current) > 0 && !current.hasSkillTag('nogain');
                            })
                        )
                            return 0;
                        return 1 / Math.max(0.1, get.value(card));
                    },
                    ai2(target) {
                        var player = _status.event.player,
                            att = get.attitude(player, target);
                        if (ui.selected.cards[0].name == 'du') return -att;
                        if (target.hasSkillTag('nogain')) att /= 6;
                        return att;
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            var list = [];
            for (var i = 0; i < event.targets.length; i++) {
                var target = event.targets[i];
                var card = i;
                list.push([target, card]);
                player.line(target);
            }
            await game
                .loseAsync({
                    gain_list: list,
                    player: player,
                    cards: event.cards,
                    giver: player,
                    animate: 'giveAuto',
                })
                .setContent('gaincardMultiple');
            for (const target of event.targets) {
                target
                    .when({ global: 'useCardAfter' })
                    .filter((event) => event.card == trigger.card)
                    .then(() => {
                        const next = game.createEvent('Europa_tongju_effect');
                        next.player = player;
                        next.target = target;
                        next.source = source;
                        next.setContent(async (event, trigger, player) => {
                            const useCardEvent = player.useCard({ name: 'sha' }, target, 'noai');
                            useCardEvent.animate = false;
                            await useCardEvent;
                            if (!player.hasHistory('sourceDamage', (evt) => evt.getParent(event.name) == event)) {
                                await source.loseHp();
                            }
                        });
                    })
                    .vars({ source: player, target: trigger.player });
            }
        },
    },
    Europa_weihe: {
        trigger: {
            player: 'useCardToPlayer',
        },
        forced: true,
        filter(event, player) {
            return event.isFirstTarget && player.countCards('h') > player.getHandcardLimit() && event.targets.some((target) => target != player);
        },
        async content(event, trigger, player) {
            const cards = trigger.cards.filterInD();
            if (cards.length) await trigger.targets[0].gain(cards, 'gain2');
            const targets = trigger.targets.filter((target) => target != player);
            trigger.targets.removeArray(targets);
            trigger.parent.triggeredTargets1.removeArray(targets);
        },
        ai: {
            threaten: 0.8,
            neg: true,
            effect: {
                player(card, player, target) {
                    if ((!card.isCard || !card.cards) && get.itemtype(card) != 'card') return;
                    let cs = 0;
                    if (
                        target &&
                        player != target &&
                        player.countCards('h', (i) => {
                            if (card === i || (card.cards && card.cards.includes(i))) {
                                cs++;
                                return false;
                            }
                            return true;
                        }) > player.getHandcardLimit()
                    ) {
                        return [0, 0, 0, 1];
                    }
                },
            },
        },
    },
    Europa_zhenyao: {
        trigger: {
            global: 'roundStart',
        },
        popup: false,
        async cost(event, trigger, player) {
            const name = event.name.slice(0, -5);
            event.result = await player
                .chooseTarget(get.translation(name), get.skillInfoTranslation(name))
                .set('ai', (target) => {
                    const player = get.player();
                    return -get.attitude(player, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, links } = await player
                .chooseButton(true, [
                    `###镇妖###选择令${get.translation(target)}获得一个效果`,
                    [
                        [
                            ['effect1', '其从牌堆中获得牌时,你令摸牌数-1'],
                            ['effect2', '其于出牌阶段使用【杀】的次数-1且其于出牌阶段至多使用一张【杀】'],
                            ['effect3', '其手牌上限始终为1且其每回合只能使用或打出共计三张牌'],
                        ],

                        'textbutton',
                    ],
                ])
                .set('ai', (button) => {
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) {
                target.addTempSkill(`Europa_zhenyao_${links[0]}`, 'roundStart'); //QQQ
            }
        },
        subSkill: {
            effect1: {
                charlotte: true,
                trigger: {
                    player: 'drawBegin',
                },
                forced: true,
                popup: false,
                firstDo: true,
                async content(event, trigger, player) {
                    trigger.num--;
                },
                mark: true,
                intro: {
                    content: '你从牌堆中获得牌时,摸牌数-1',
                },
            },
            effect2: {
                charlotte: true,
                mod: {
                    cardUsable(card, player, num) {
                        if (!player.isPhaseUsing()) return;
                        if (card.name == 'sha') return num - 1;
                    },
                    cardEnabled(card, player) {
                        if (!player.isPhaseUsing()) return;
                        if (card.name == 'sha' && player.countUsed('sha')) return false;
                    },
                },
                mark: true,
                intro: {
                    content: '你于出牌阶段使用【杀】的次数-1且出牌阶段至多使用一张【杀】',
                },
            },
            effect3: {
                charlotte: true,
                trigger: {
                    player: ['useCard1', 'respond'],
                },
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    return player.countMark('Europa_zhenyao_effect3') < 3;
                },
                async content(event, trigger, player) {
                    player.addMark('Europa_zhenyao_effect3', 1, false);
                    player
                        .when({ global: 'phaseBeginStart' })
                        .then(() => {
                            player.removeMark('Europa_zhenyao_effect', player.countMark('Europa_zhenyao_effect'), false);
                        })
                        .finish();
                },
                mod: {
                    maxHandcardFinal: () => 1,
                    cardEnabled2(card, player) {
                        if (player.countMark('Europa_zhenyao_effect3') >= 3) return false;
                    },
                },
                mark: true,
                intro: {
                    content: '你的手牌上限始终为1且每回合只能使用或打出共计三张牌',
                },
            },
        },
    },
    Europa_tazhen: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        async content(event, trigger, player) {
            const targets = [].concat(player).addArray(event.targets);
            for (const target of targets) {
                const skills = target.getSkills(null, false, false).filter(function (i) {
                    var info = get.info(i);
                    return info && !info.charlotte && lib.translate[i + '_info'];
                });
                if (skills.length) {
                    const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                    const { bool, links } = await target
                        .chooseButton([`###塔镇###选择移去一个技能直到${get.translation(player)}下个回合开始或${get.translation(event.targets[0])}死亡`, [list, 'textbutton']], true)
                        .set('ai', (button) => {
                            const player = get.player();
                            return 1 + Math.random();
                        })
                        .forResult();
                    if (bool) {
                        await target.removeSkills(links);
                        target.markAuto('Europa_tazhen_clear', links);
                        if (target == player) {
                            player
                                .when('phaseBegin')
                                .then(() => {
                                    player.removeSkill('Europa_tazhen_clear');
                                    target.removeSkill('Europa_tazhen_clear');
                                })
                                .vars({ target: event.targets[0] })
                                .finish();
                        } else {
                            target
                                .when('dieBegin')
                                .assign({
                                    forceDie: true,
                                })
                                .then(() => {
                                    player.removeSkill('Europa_tazhen_clear');
                                    target.removeSkill('Europa_tazhen_clear');
                                })
                                .vars({ target: player })
                                .finish();
                        }
                    }
                }
            }
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    if (target == player) return 0;
                    return -1;
                },
            },
        },
        subSkill: {
            clear: {
                charlotte: true,
                onremove(player, skill) {
                    const skills = player.getStorage(skill);
                    player.addSkills(skills);
                    delete player.storage[skill];
                },
            },
        },
    },
    Europa_xingdao: {
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        popup: false,
        getIndex(event, player, triggername) {
            if (event.getParent(2).name == 'Europa_xingdao') return false;
            if (event.parent.name !== 'draw' || !player.hasSkill('colonialExploration_sailing')) return [];
            var evt = event.getParent('phaseDraw');
            return game
                .filterPlayer(function (target) {
                    if (target == player) return false;
                    if (evt && evt.player == target) return false;
                    return event.getg(target).length && target.countGainableCards(player, 'h');
                })
                .sortBySeat();
        },
        logTarget(event, player, name, target) {
            return target;
        },
        check(event, player, name, target) {
            return get.attitude(player, target) <= 0;
        },
        prompt2: '当其他角色不因摸牌阶段摸牌,且你处于探险状态时,你可以获得其一张牌并将一张手牌置干你的武将牌上称为<财>,若你以此法获得的牌不是装备,其摸一张牌.',
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, links } = await player.gainPlayerCard(target, 'h', true).forResult();
            if (bool) {
                await player.addToExpansion(links, target, 'giveAuto').set('gaintag', ['colonialExploration']);
                if (get.type(links[0]) != 'equip') await target.draw();
            }
        },
        ai: {
            nocolonialExplorationCost: true,
        },
        group: 'Europa_xingdao_init',
        subSkill: {
            init: {
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(Event, trigger, player) {
                    player.addSkill('Europa_xingdao_exploration');
                    game.log(player, '启用', '#g殖民探险', '机制');
                },
            },
            exploration: {
                charlotte: true,
                ai: {
                    colonialExploration: true,
                },
            },
        },
    },
    Europa_zeishou: {
        trigger: {
            player: 'explorationContingencyBegin',
        },
        filter(event, player) {
            return event.num == 4;
        },
        async cost(event, trigger, player) {
            const { bool, links } = await player
                .chooseButton(2, [
                    get.prompt2(event.name.slice(0, -5), trigger.player),
                    [
                        [
                            ['draw', '摸两张牌'],
                            ['recover', '回复1点体力'],
                            ['damage', '对其造成1点伤害'],
                        ],

                        'textbutton',
                    ],
                ])
                .set('ai', (button) => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    switch (button.link) {
                        case 'draw':
                            return get.effect(player, { name: 'draw' }, player);
                        case 'recover':
                            return get.recoverEffect(player, player, player);
                        case 'damage':
                            return get.damageEffect(target, player, player);
                    }
                    return 1;
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            trigger.skipContingency = true;
            const effect = event.cost_data.links;
            if (effect.includes('draw')) await player.draw(2);
            if (effect.includes('recover')) await player.recover();
            if (effect.includes('damage')) await trigger.player.damage();
        },
    },
    Europa_qiangfan: {
        trigger: {
            global: 'phaseUseBegin',
        },
        limited: true,
        filter(event, player) {
            return event.player != player && player.getExpansions('colonialExploration').length >= 3;
        },
        logTarget: 'player',
        check(event, player) {
            if (player.getExpansions('colonialExploration').length < event.player.countGainableCards(player, 'he')) return get.attitude(player, event.player) <= 0;
            return get.attitude(player, event.player) > 0 && player.getExpansions('colonialExploration').length > event.player.countGainableCards(player, 'he') + 2; //QQQ
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.gainPlayerCard(trigger.player, trigger.player.countCards('he'), true);
            await trigger.player.gain(player.getExpansions('colonialExploration'));
            player.removeSkill('colonialExploration_sailing');
            game.log(player, '结束此次航行');
        },
    },
    Europa_qishe: {
        trigger: {
            target: 'useCardToTargeted',
        },
        forced: true,
        popup: false,
        filter(event, player) {
            return event.player != player && player.getEquips(1).length;
        },
        async content(event, trigger, player) {
            const result = await player
                .chooseToUse(
                    function (card, player, event) {
                        if (card.name != 'sha') return false;
                        return lib.filter.filterCard.apply(this, arguments);
                    },
                    '对' + get.translation(trigger.player) + '使用一张杀,若此【杀】造成伤害,此牌对你无效.'
                )
                .set('targetRequired', true)
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                    if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                    return lib.filter.filterTarget.apply(this, arguments);
                })
                .set('sourcex', trigger.player)
                .forResult();
            if (!result.bool) return;
            if (player.hasHistory('sourceDamage', (evt) => evt.getParent(event.name) == event)) {
                trigger.parent.excluded.push(player);
                game.log(trigger.card, '对', player, '无效');
            }
        },
    },
    Europa_qinwang: {
        trigger: {
            global: 'useCardToPlayer',
        },
        filter(event, player) {
            if (event.card.name != 'sha' && get.type(event.card) != 'trick') return false;
            return event.player != player && !event.targets.includes(player);
        },
        check(event, player) {
            return get.effect(player, event.card, event.player, player) >= 0;
        },
        async content(event, trigger, player) {
            game.log(player, '成为了', trigger.card, '的额外目标');
            trigger.parent.targets.push(player);
            player.addTempSkill('Europa_qinwang_check');
            player.markAuto('Europa_qinwang_check', [[trigger.card, false]]);
        },
        subSkill: {
            check: {
                trigger: {
                    global: ['shaDamage', 'useCardToEnd', 'useCardAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player, name) {
                    const storage = player.getStorage('Europa_qinwang_check');
                    if (storage.every((list) => list[0] != event.card)) return false;
                    if (name == 'useCardAfter') return true;
                    if (event.type != 'card' || !event.target || !event.target.isIn() || event.target != player) return false;
                    if (event.player == player) return false;
                    if (name == 'shaDamage') return true;
                    return event.card && event.card.name != 'sha' && !event.parent._neutralized;
                },
                async content(event, trigger, player) {
                    if (event.triggername != 'useCardAfter') {
                        player.storage.Europa_qinwang_check = player.storage.Europa_qinwang_check.map((info) => (info[0] == trigger.card ? [info[0], true] : info));
                    } else {
                        const list = player.getStorage('Europa_qinwang_check').find((list) => list[0] == trigger.card);
                        if (list[1] === true) {
                            await player.draw();
                        } else {
                            await player.recover();
                        }
                        player.unmarkAuto(event.name, list);
                    }
                },
            },
        },
    },
    Europa_haojun: {
        trigger: {
            global: 'phaseJieshuBegin',
        },
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_haojun')) return false;
            return game.hasPlayer((target) => {
                return target != player && ['Europa_Scotland', 'Europa_Britain'].includes(target.group);
            });
        },
        async content(event, trigger, player) {
            var card = get.discardPile((cardx) => {
                return cardx.name == 'sha';
            });
            if (card) await player.gain(card, 'gain2');
        },
    },
    Europa_quanjiao: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('hs', { name: 'Europa_shuzuiquan' });
        },
        chooseButton: {
            dialog(event, player) {
                const deslist = ['视为对一名其他非新教角色使用一张【信众抗议】', '令一名新教角色摸两张牌'];
                const dialog = ui.create.dialog('###劝教###你可以弃置一张【赎罪券】,选择一项');
                dialog.add([
                    deslist.map((item, i) => {
                        return [i, item];
                    }),
                    'textbutton',
                ]);
                dialog.direct = true;
                return dialog;
            },
            filter(button) {
                const player = get.player();
                switch (button.link) {
                    case 0:
                        return game.hasPlayer((target) => {
                            if (target == player || target.hasEuropaReligion('新教')) return false;
                            return player.canUse({ name: 'Europa_xinzhongkangyi' }, target);
                        });
                    case 1:
                        return game.hasPlayer((target) => target.hasEuropaReligion('新教'));
                }
            },
            backup(links) {
                const next = get.copy(lib.skill.Europa_quanjiao.backups[links[0]]);
                ((next.filterCard = (card) => card.name == 'Europa_shuzuiquan'), (next.selectCard = 1));
                next.position = 'hs';
                return next;
            },
            check(button) {
                const player = get.player();
                switch (button.link) {
                    case 0:
                        {
                            return 1.2 + Math.random();
                        }
                        break;
                    case 1:
                        {
                            return 1.1 + Math.random();
                        }
                        break;
                }
                return 1;
            },
            prompt(links) {
                return ['视为对一名其他非新教角色使用一张【信众抗议】', '令一名新教角色摸两张牌'][links[0]];
            },
        },
        backups: [
            {
                viewAs: {
                    name: 'Europa_xinzhongkangyi',
                },
                filterTarget(card, player, target) {
                    if (target == player || target.hasClan('新教')) return false;
                    return lib.filter.filterTarget(get.card(), player, target);
                },
                ai: {
                    wuxie(target, card, player, viewer, status) {
                        return 0;
                    },
                    basic: {
                        order: 7.2,
                        useful: 3.5,
                        value: 3.2,
                    },
                    result: {
                        target(player, target) {
                            if (!target.canChangeEuropaReligion()) return get.damageEffect(target, player, target);
                            return 2;
                        },
                    },
                    tag: {
                        damage: 1,
                        draw: 2,
                    },
                },
            },
            {
                filterTarget(card, player, target) {
                    return target.hasEuropaReligion('新教');
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await target.draw(2);
                },
                ai: {
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
        group: 'Europa_quanjiao_change',
        subSkill: {
            change: {
                trigger: {
                    global: 'changeEuropaReligionAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.player != player && event.religion == '新教';
                },
                async content(event, trigger, player) {
                    let card = get.cardPile(function (cardx) {
                        return cardx.name == 'Europa_shuzuiquan';
                    });
                    if (card) {
                        await player.gain(card, 'gain2');
                        player.markAuto([card], 'Europa_quanjiao_change');
                    }
                },
                mod: {
                    ignoredHandcard(card, player) {
                        if (card.hasGaintag('Europa_quanjiao_change')) return true;
                    },
                    cardDiscardable(card, player, name) {
                        if (name == 'phaseDiscard' && card.hasGaintag('Europa_quanjiao_change')) return false;
                    },
                },
            },
        },
    },
    Europa_kangbao: {
        trigger: {
            player: 'damageEnd',
        },
        forced: true,
        async content(event, trigger, player) {
            await player.draw();
            if (!trigger.source?.isIn()) return;
            if (!trigger.source.hasEuropaReligion('新教')) trigger.player.addSkill('Europa_kangbao_effect');
            const result = await player
                .chooseButton(true, ['抗暴', [['juedou', 'Europa_xinzhongkangyi'], 'vcard'], `选择视为对${get.translation(trigger.source)}使用一张牌`])
                .set('filterButton', (button) => {
                    return player.canUse({ name: button.link[2] }, trigger.source);
                })
                .set('ai', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    return get.effect(trigger.source, { name: button.link[2] }, player, player);
                })
                .forResult();
            if (result.links?.length) {
                //QQQ
                game.broadcastAll(function (name) {
                    lib.skill.Europa_kangbao_backup.viewAs = {
                        name: name,
                    };
                    lib.skill.Europa_kangbao_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                }, result.links[0][2]);
                var next = player.chooseToUse();
                next.set('forced', true);
                next.set('norestore', true);
                next.set('_backupevent', 'Europa_kangbao_backup');
                next.set('addCount', false);
                next.set('custom', {
                    add: {},
                    replace: { window() { } },
                });
                next.set('target', trigger.source);
                next.backup('Europa_kangbao_backup');
            }
        },
        ai: {
            noChangeEuropaReligion: true,
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: {
                    player: 'Europa_xinzhongkangyiBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    trigger.setContent(async (event, trigger, player) => {
                        const target = event.target;
                        const num = Math.min(2, target.countCards('h'));
                        await target.damage(num, 'nosource');
                    });
                },
            },
            backup: {
                forced: true,
                filterCard: () => false,
                selectCard: -1,
                filterTarget(card, player, target) {
                    return target == get.event('target');
                },
            },
        },
    },
    Europa_seyou: {
        audio: 'ext:欧陆风云/audio/skill:2',
        trigger: {
            global: 'phaseUseBegin',
        },
        filter(event, player) {
            if (!event.player.hasSex('male')) return false;
            return player.canCompare(event.player);
        },
        check(event, player) {
            if (get.attitude(player, event.player) < -2) {
                var cards = player.getCards('h');
                if (cards.length > player.hp) return true;
                if (Array.isArray(cards))
                    for (var i of cards) {
                        var useful = get.useful(i);
                        if (useful < 5) return true;
                        if (i.number > 7 && useful < 7) return true;
                    }
            }
            return false;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, 'roundStart', false);
            const result = await player.chooseToCompare(trigger.player).forResult();
            if (result.bool) {
                player.addTempSkill('Europa_seyou_effect');
                player.markAuto('Europa_seyou_effect', [trigger.player]);
                if (
                    !game.hasPlayer((target) => {
                        return trigger.player.canUse('sha', target, false, false);
                    })
                )
                    return;
                const { bool, targets } = await player
                    .chooseTarget(`选择${get.translation(trigger.player)}使用【杀】的目标`, true, function (card, player, target) {
                        return _status.event.target.canUse('sha', target, false, false);
                    })
                    .set('ai', function (target) {
                        return get.effect(target, { name: 'sha' }, _status.event.target, _status.event.player);
                    })
                    .set('target', trigger.player)
                    .forResult();
                if (bool) {
                    const target = targets[0];
                    player.line(target);
                    const { bool } = await trigger.player
                        .chooseToUse(
                            function (card, player, event) {
                                if (card.name != 'sha') return false;
                                return lib.filter.filterCard.apply(this, arguments);
                            },
                            '是否对' + get.translation(target) + '使用一张【杀】？'
                        )
                        .set('targetRequired', true)
                        .set('complexSelect', true)
                        .set('addCount', false)
                        .set('filterTarget', function (card, player, target) {
                            if (target != _status.event.sourcex && !ui.selected.targets.includes(_status.event.sourcex)) return false;
                            return lib.filter.targetEnabled.apply(this, arguments);
                        })
                        .set('sourcex', target)
                        .forResult();
                    if (!bool) {
                        trigger.player.addTempSkill('Europa_seyou_max');
                        trigger.player.addMark('Europa_seyou_max', 1, false);
                    }
                }
            } else if (result.player && get.position(result.player) == 'd') {
                await trigger.player.gain(result.player, 'gain2', 'log');
            }
        },
        subSkill: {
            effect: {
                charlotte: true,
                trigger: {
                    target: 'useCardToBefore',
                },
                forced: true,
                filter(event, player) {
                    if (!player.getStorage('Europa_seyou_effect').includes(event.player)) return false;
                    return (event.card && event.card.name == 'sha') || get.type(event.card) == 'trick';
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!target.getStorage('Europa_seyou_effect').includes(player)) return;
                            if (card.name == 'sha' || get.type(event.card) == 'trick') return 'zeroplayertarget';
                        },
                    },
                },
                mark: true,
                intro: {
                    content: '$使用的【杀】和普通锦囊牌对你无效',
                },
            },
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return num - player.countMark('Europa_seyou_max');
                    },
                },
            },
        },
    },
    Europa_sheshi: {
        audio: 'ext:欧陆风云/audio/skill:2',
        enable: 'phaseUse',
        usable: 1,
        async content(event, trigger, player) {
            await player.loseHp();
            const num = player.getDamagedHp() + 2;
            const { control } = await player
                .chooseControl(lib.suit)
                .set('prompt', `选择一个花色,你亮出牌堆顶的${num}张牌,随后你获得与指定花色不同花色的所有牌.`)
                .set('ai', function () {
                    const player = get.player();
                    const controls = get.event('controls');
                    return controls[get.rand(0, controls.length - 1)];
                })
                .forResult();
            let cards = get.cards(num);
            await game.cardsGotoOrdering(cards);
            await player.showCards(cards);
            cards = cards.filter((i) => i.suit != control); //QQQ
            if (cards.length) await player.gain(cards, 'gain2');
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return 0;
                    return 1;
                },
            },
        },
    },
    _Europa_yanhouChooseAudio: {
        ruleSkill: true,
        trigger: { global: ['chooseCharacterAfter', 'showCharacterAfter'] },
        filter(event, player) {
            if (_status._Europa_yanhouChooseAudio) return false;
            const list = ['Europa_keliaopeitela'];
            return game.hasPlayer((target) => ['name', 'name2'].some((name) => list.includes(target[name])));
        },
        forced: true,
        popup: false,
        firstDo: true,
        content() {
            _status._Europa_yanhouChooseAudio = true;
            lib.config.background_music = 'music_custom';
            lib.config.background_music_src = ui.backgroundMusic.src = `extension/欧陆风云/audio/effect/埃及bgm.mp3`;
        },
    },
    Europa_jiaomeng: {
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return !game.hasPlayer((target) => {
                return target.additionalSkills[`Europa_jiaomeng_${player.playerid}`]?.length;
            });
        },
        selectTarget: 2,
        filterTarget(card, player, target) {
            return !target.hasEuropaReligion('新教');
        },
        complexTarget: true,
        multitarget: true,
        async content(event, trigger, player) {
            player.addSkill('Europa_jiaomeng_clear');
            for (const target of event.targets) {
                target.markAuto('Europa_jiaomeng_meng', event.targets.slice().remove(target));
                target.addAdditionalSkill(`Europa_jiaomeng_${player.playerid}`, 'Europa_jiaomeng_meng');
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    return 1;
                },
            },
        },
        group: ['Europa_jiaomeng_damage'],
        subSkill: {
            damage: {
                trigger: {
                    global: 'damageBegin2',
                },
                forced: true,
                filter(event, player) {
                    return event.source?.additionalSkills[`Europa_jiaomeng_${player.playerid}`] && event.player != event.source && event.player.additionalSkills[`Europa_jiaomeng_${player.playerid}`];
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
            },
            clear: {
                trigger: {
                    player: 'die',
                },
                charlotte: true,
                forced: true,
                popup: false,
                forceDie: true,
                async content(event, trigger, player) {
                    game.countPlayer((current) => {
                        var skills = current.additionalSkills[`Europa_jiaomeng_${player.playerid}`];
                        if (skills && skills.length) {
                            current.removeAdditionalSkill(`Europa_jiaomeng_${player.playerid}`);
                            for (var i of skills) {
                                current.removeSkill(i);
                            }
                        }
                    });
                },
            },
            meng: {
                charlotte: true,
                mark: true,
                intro: {
                    content: '已获得<盟>标记',
                },
                trigger: {
                    global: ['Europa_jiaomengAfter', 'gainAfter', 'loseAsyncAfter'],
                },
                forced: true,
                firstDo: true,
                silent: true,
                filter(event, player, name) {
                    if (name == 'Europa_jiaomengAfter') return event.targets.includes(player);
                    return event.getg && event.getg(event.player) && event.getg(event.player).length && player.getStorage('Europa_jiaomeng_meng').includes(event.player);
                },
                content() {
                    const targets = game.filterPlayer((target) => {
                        return target != player && player.getStorage('Europa_jiaomeng_meng').includes(target);
                    });
                    var cards = targets
                        .map((i) => i.getCards('h'))
                        .flat()
                        .filter((card) => {
                            return !player
                                .getCards('s', (cardx) => {
                                    return cardx.hasGaintag('Europa_jiaomeng');
                                })
                                .map((i) => i._cardid)
                                .includes(card.cardid);
                        });
                    var cardsx = cards.map((card) => {
                        var cardx = ui.create.card();
                        cardx.init(get.cardInfo(card));
                        cardx._cardid = card.cardid;
                        return cardx;
                    });
                    player.directgains(cardsx, null, 'Europa_jiaomeng');
                    player.addSkill('Europa_jiaomeng_in');
                },
            },
            in: {
                trigger: {
                    global: ['loseAfter', 'loseAsyncAfter', 'cardsDiscardAfter', 'equipAfter'],
                },
                forced: true,
                silent: true,
                filter(event, player) {
                    var idList = player.getCards('s', (card) => card.hasGaintag('Europa_jiaomeng')).map((i) => i._cardid);
                    return (
                        event.getl &&
                        event.getl(event.player) &&
                        event.getl(event.player).cards2.some((card) => {
                            return idList.includes(card.cardid);
                        })
                    );
                },
                onremove(player) {
                    var cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('Europa_jiaomeng');
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
                group: ['Europa_jiaomeng_use', 'Europa_jiaomeng_lose'],
                content() {
                    var cards2;
                    var idList = trigger.getl(player).cards2.map((i) => i.cardid);
                    cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('Europa_jiaomeng') && idList.includes(card._cardid);
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
                    var cards = player.getCards('s', (card) => card.hasGaintag('Europa_jiaomeng') && card._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return cards.includes(card);
                        })
                    );
                },
                content() {
                    var idList = player.getCards('s', (card) => card.hasGaintag('Europa_jiaomeng')).map((i) => i._cardid);
                    var cards = game
                        .filterPlayer((target) => {
                            return target != player && target.getCards('h').length;
                        })
                        .map((i) => i.getCards('h'))
                        .flat()
                        .filter((card) => idList.includes(card.cardid));
                    var cards2 = [];
                    for (var card of trigger.cards) {
                        var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                        if (cardx) cards2.push(cardx);
                    }
                    for (const card of cards2) {
                        var owner = get.owner(card);
                        if (owner) owner.$throw(card);
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
                    global: ['gainAfter', 'equipAfter', 'addJudgeAfter', 'loseAsyncAfter', 'addToExpansionAfter', 'loseAfter', 'hideShownCardsAfter'],
                },
                charlotte: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    var idList = player.getCards('s', (card) => card.hasGaintag('Europa_jiaomeng')).map((i) => i._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return idList.includes(card.cardid);
                        })
                    );
                },
                content() {
                    var cards2;
                    var idList = game
                        .filterPlayer((target) => {
                            return target != player && target.getCards('h').length;
                        })
                        .map((i) => i.getCards('h'))
                        .flat()
                        .map((i) => i.cardid);
                    cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('Europa_jiaomeng') && !idList.includes(card._cardid);
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
            },
        },
    },
    Europa_shishan: {
        trigger: {
            global: 'damageSource',
        },
        filter(event, player) {
            if (!event.source?.hasSkill('Europa_jiaomeng_meng')) return false;
            return !event.player.hasEuropaReligion('新教') && event.num > 1;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await trigger.player.recover();
            if (!trigger.source.hasClan('天主教')) {
                await trigger.source.changeEuropaReligion('天主教');
            }
        },
        ai: {
            noChangeEuropaReligion: true,
        },
    },
    Europa_aning: {
        trigger: {
            target: 'useCardToTarget',
        },
        filter(event, player) {
            const hasTag = get.tag(event.card, 'damage');
            return !player.getStorage('Europa_aning_used').includes(hasTag);
        },
        prompt2(event, player) {
            const hasTag = get.tag(event.card, 'damage');
            return hasTag ? '当你成为牌的目标时,你可以从牌库中获得一张【杀】或【闪】.' : '当你成为牌的目标时,你可以摸一张牌.';
        },
        async content(event, trigger, player) {
            const hasTag = get.tag(trigger.card, 'damage');
            player.addTempSkill('Europa_aning_used');
            player.markAuto('Europa_aning_used', [hasTag]);
            if (hasTag) {
                const card = get.cardPile2(function (cardx) {
                    return ['sha', 'shan'].includes(cardx.name);
                });
                if (card) await player.gain(card, 'gain2');
            } else {
                await player.draw();
            }
        },
        subSkill: {
            used: {
                charlotte: true,
            },
        },
    },
    Europa_qingsuan: {
        trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        popup: false,
        zhuSkill: true,
        filter(event, player) {
            if (!player.hasZhuSkill('Europa_qingsuan')) return false; //QQQ
            var num = 0;
            if (event.getl && event.getl(player)) num = event.getl(player).hs?.length;
            if (event.getg) num = Math.max(num, event.getg(player).length);
            return num > 0 && player.getHistory('gain').length + player.getHistory('lose', (evt) => evt.getl(player)?.hs?.length).length == 2;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    return get.damageEffect(target, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await event.targets[0].damage();
        },
    },
    Europa_yaowang: {
        trigger: {
            player: 'enterGame',
            global: 'phaseBefore',
        },
        forced: true,
        filter(event, player) {
            if (!player.hasEnabledSlot()) return false;
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            var list = [];
            for (var i = 1; i < 5; i++) {
                for (var j = 0; j < player.countEnabledSlot(i); j++) {
                    list.push(i);
                }
            }
            if (list.length) {
                await player.disableEquip(list);
                await player.expandEquip(Array(list.length).fill(5));
            }
        },
        mod: {
            attackRange(from, distance) {
                return distance + from.getEquips(5).length;
            },
        },
    },
    Europa_zhangquan: {
        trigger: {
            source: 'damageEnd',
        },
        filter(event, player) {
            return event.player != player;
        },
        async cost(event, trigger, player) {
            const { control } = await player
                .chooseControl('cancel2')
                .set('choiceList', [`获得${get.translation(trigger.player)}装备栏中的宝物牌并摸一张牌.`, `重铸你除宝物以外的装备牌,从牌堆中随机获取一张宝物牌.`])
                .set('prompt', get.prompt2(event.name.slice(0, -5)))
                .forResult();
            if (control != 'cancel2') event.result = { bool: true, cost_data: { control } };
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const control = event.cost_data.control;
            if (control == '选项一') {
                const cards = trigger.player.getGainableCards(player, 'e', (card) => get.subtype(card) == 'equip5');
                if (cards.length) await player.gain(cards, trigger.player, 'giveAuto', 'bySelf');
                await player.gainPlayerCard(trigger.player, 'e', (card) => get.subtype(card) == 'equip5');
                await player.draw();
            } else {
                const cards = player.getCards('e', (card) => {
                    return get.subtype(card) != 'equip5' && player.canRecast(card);
                });
                if (cards.length) await player.recast(cards);
                const card = get.cardPile2((cardx) => {
                    return get.subtype(cardx) == 'equip5';
                });
                if (card) await player.gain2(card);
            }
        },
    },
    Europa_zancai: {
        global: 'Europa_zancai_global',
        zhuSkill: true,
        subSkill: {
            global: {
                enable: 'phaseUse',
                usable: 1,
                prepare(cards, player, targets) { },
                filter(event, player) {
                    if (player.group != 'Europa_France') return false;
                    return game.hasPlayer((target) => {
                        return target != player && target.hasZhuSkill('Europa_zancai');
                    });
                },
                filterCard: true,
                selectCard() {
                    if (ui.selected.cards.length && get.subtype(ui.selected.cards[0]) == 'equip5') return 1;
                    return 2;
                },
                position: 'hes',
                filterTarget(card, player, target) {
                    if (ui.selected.targets.length) return true;
                    return target != player && target.hasZhuSkill('Europa_zancai', player);
                },
                selectTarget: 2,
                prompt() {
                    const player = get.player();
                    const list = game.filterPlayer(function (target) {
                        return target != player && target.hasZhuSkill('Europa_zancai');
                    });
                    let str = '将两张牌或一张宝物牌交给' + get.translation(list);
                    if (list.length > 1) str += '中的一人';
                    return str;
                },
                multitarget: true,
                discard: false,
                lose: false,
                delay: false,
                line: true,
                log: false,
                visible: true,
                async content(event, trigger, player) {
                    await player.give(event.cards, event.targets[0]);
                    await event.targets[1].damage(event.targets[0]);
                },
                ai: {
                    expose: 0.3,
                    order: 10,
                    result: {
                        target(player, target) {
                            if (ui.selected.targets.length) return get.damageEffect(target, player, target);
                            return 5;
                        },
                    },
                },
            },
        },
    },
    Europa_fahu: {
        trigger: {
            global: 'damageBegin4',
        },
        filter(event, player) {
            if (!player.inRange(event.player)) return false;
            return event.player != player && event.source;
        },
        logTarget: 'player',
        check(event, player) {
            const target = event.player;
            if (get.attitude(player, target) <= 0) return false;
            if (player.hasSkill('Europa_jinshen_effect')) return true;
            if (player.countCards('hs', (card) => player.canSaveCard(card, target)) >= 1 + trigger.num - target.hp) return false;
            return true;
        },
        async content(event, trigger, player) {
            const { bool } = await player
                .chooseToDiscard('hes', trigger.num, `你可以弃置${trigger.num}张牌,或取消受到1点无来源伤害,防止${get.translation(trigger.player)}受到的伤害`)
                .set('ai', (card) => {
                    const player = get.player();
                    if (player.hasSkill('Europa_jinshen_effect')) return 0;
                    if (get.damageEffect(player, player, player) >= 0) return 0;
                    return 6 - get.value(card);
                })
                .forResult();
            if (!bool) await player.damage('nosource');
            trigger.cancel();
        },
    },
    Europa_jinshen: {
        trigger: {
            player: 'Europa_fahuAfter',
        },
        forced: true,
        async content(event, trigger, player) {
            player.addTempSkill('Europa_jinshen_effect');
            trigger.targets[0].addTempSkill('Europa_jinshen_effect');
        },
        group: 'Europa_jinshen_neutralize',
        subSkill: {
            neutralize: {
                trigger: {
                    target: 'shaMiss',
                    global: 'eventNeutralized',
                },
                forced: true,
                filter(event, player, name) {
                    if (event.type != 'card') return false;
                    if (!get.tag(event.card, 'damage')) return false;
                    if (event.target == player) return false;
                    return name == 'shaMiss' || event._neutralize_event.player == player;
                },
                async content(event, trigger, player) {
                    player.addTempSkill('Europa_jinshen_effect');
                    if (trigger.target) trigger.target.addTempSkill('Europa_jinshen_effect');
                },
            },
            effect: {
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                mark: true,
                intro: {
                    content: '防止你本回合受到的伤害.',
                },
                ai: {
                    maixie: true,
                    maixie_hp: true,
                    nofire: true,
                    nothunder: true,
                    nodamage: true,
                    effect: {
                        target(card, player, target, current) {
                            if (get.tag(card, 'damage')) return 'zeroplayertarget';
                        },
                    },
                },
            },
        },
    },
    Europa_tianfu: {
        enable: 'phaseUse',
        viewAs: {
            name: 'sha',
            nature: 'kami',
            storage: {
                Europa_tianfu: true,
            },
        },
        viewAsFilter(player) {
            if (!player.countCards('hes', { type: 'equip' })) return false;
        },
        filterCard(card) {
            return get.type(card) == 'equip';
        },
        async precontent(event, trigger, player) {
            player.addTempSkill('Europa_tianfu_kami');
        },
        position: 'hes',
        ai: {
            unequip: true,
            skillTagFilter(player, tag, arg) {
                if (arg && arg.name == 'sha' && arg.card && arg.card.storage && arg.card.storage.Europa_tianfu) return true;
                return false;
            },
        },
        subSkill: {
            kami: {
                trigger: {
                    player: '_kamishaBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.setContent(async (event, trigger, player) => {
                        trigger.player.loseMaxHp(trigger.num).source = player;
                    });
                },
            },
        },
    },
    Europa_pingshan: {
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        filter(event, player) {
            return !game.hasPlayer((target) => {
                return target != player && get.distance(target, player) <= 1;
            });
        },
        logTarget(event, player) {
            return game.filterPlayer((target) => {
                return target != player && get.distance(target, player) > 1;
            });
        },
        async content(event, trigger, player) {
            for (const target of event.targets) {
                const binglin = new lib.element.VCard({ name: 'binglinchengxiax' });
                if (player.canUse(binglin, target)) await player.useCard(binglin, target);
            }
        },
    },
    Europa_cuojun: {
        trigger: {
            player: 'loseAfter',
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        forced: true,
        filter(event, player) {
            if (player.countCards('e')) return false;
            const evt = event.getl(player);
            return evt && evt.player == player && evt.es && evt.es.length;
        },
        async content(event, trigger, player) {
            await player.loseMaxHp();
        },
        ai: {
            threaten: 0.8,
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'loseCard') && target.countCards('e') === 1) return [1, -2];
                },
            },
        },
    },
    Europa_tongbing: {
        trigger: {
            player: 'useCard',
        },
        filter(event, player) {
            return get.subtype(event.card) == 'equip1';
        },
        async content(event, trigger, player) {
            player.addTempSkill('Europa_tongbing_equip');
            player.markAuto('Europa_tongbing_equip', [trigger.card]);
            const num = player.getStorage('Europa_tongbing_equip').length;
            await player.draw(num);
            const cards = player.getStorage('Europa_tongbing_equip');
            if (cards.length) {
                const skills = cards.reduce((list, card) => {
                    if (player.getEquips(card).length) return false;
                    if (get.info(card) && get.info(card).skills) list.addArray(get.info(card).skills);
                    return list;
                }, []);
                if (skills.length) player.addAdditionalSkill('Europa_tongbing', skills);
                else player.removeAdditionalSkill('Europa_tongbing');
            }
        },
        group: 'Europa_tongbing_effect',
        subSkill: {
            effect: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                _priority: 7,
                filter(event, player, name) {
                    if (name == 'equipAfter') return event.player == player;
                    const evt = event.getl(player);
                    return evt && evt.player === player && evt.es?.length;
                },
                async content(event, trigger, player) {
                    const cards = player.getStorage('Europa_tongbing_equip');
                    if (cards.length) {
                        const skills = cards.reduce((list, card) => {
                            if (player.getEquips(card).length) return false;
                            if (get.info(card) && get.info(card).skills) list.addArray(get.info(card).skills);
                            return list;
                        }, []);
                        if (skills.length) player.addAdditionalSkill('Europa_tongbing', skills);
                        else player.removeAdditionalSkill('Europa_tongbing');
                    }
                },
            },
            equip: {
                charlotte: true,
                mark: true,
                intro: {
                    content: 'cards',
                },
            },
        },
    },
    Europa_zhangxie: {
        enable: 'phaseUse',
        viewAs: {
            name: 'sha',
        },
        filterCard: () => false,
        selectCard: -1,
        viewAsFilter(player) {
            if (!player.getStorage('Europa_tongbing_equip').length) return false;
        },
        filterTarget(card, player, target) {
            return target != player && player.inRange(target) && player.canUse('sha', target, false);
        },
        async precontent(event, trigger, player) {
            const list = player.getStorage('Europa_tongbing_equip');
            if (list.length == 1) event.result = { bool: true, links: list };
            else {
                const { bool, links } = await player
                    .chooseButton(true, ['移出一个记录的牌名', [list, 'vcard']])
                    .set('ai', () => {
                        return 1 + Math.random();
                    })
                    .forResult();
                event.result = { bool, links: links };
            }
            if (event.result.bool) {
                player.unmarkAuto('Europa_tongbing_equip', event.result.links);
                player
                    .when('useCard')
                    .filter((event) => event.skill == 'Europa_zhangxie')
                    .then(() => {
                        const cards = Array.from(ui.discardPile.childNodes)
                            .flat()
                            .filter((i) => i.name == card.name);
                        if (cards.length) {
                            game.log(player, `将${get.cnNumber(cards.length)}张牌置入了牌堆`);
                            game.cardsGotoPile(cards, () => {
                                return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                            });
                        }
                    })
                    .vars({ card: event.result.links[0] });
            }
        },
        ai: {
            combo: 'Europa_zhangxie',
        },
    },
    Europa_huotu: {
        trigger: {
            global: ['turnOverEnd', 'linkEnd', 'showCharacterEnd', 'hideCharacterEnd', 'removeCharacterEnd'],
        },
        filter(event, player) {
            return event.player == player;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget([1, Infinity], get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return player.canUse('wugu', target);
                })
                .set('ai', (target) => {
                    const player = get.player();
                    return get.effect(target, { name: 'wugu' }, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const wugu = new lib.element.VCard({ name: 'wugu' });
            await player.useCard(wugu, event.targets, false);
            if (event.targets.length > 2) {
                for (const target of event.targets.slice().remove(player)) {
                    await target.recover();
                }
            }
        },
    },
    Europa_suodi: {
        trigger: {
            player: 'damageEnd',
        },
        yinni(player) {
            player.storage.rawHp = player.hp;
            player.storage.rawMaxHp = player.maxHp;
            if (player.skills.length) {
                if (!player.hiddenSkills) {
                    player.hiddenSkills = [];
                }
                for (const i of player.skills.slice()) {
                    player.removeSkill(i);
                    player.hiddenSkills.add(i);
                }
            }
            player.classList.add('unseen');
            player.name = 'unknown';
            player.sex = 'male';
            player.storage.nohp = true;
            player.node.hp.hide();
            player.addSkill('g_hidden_ai');
            player.hp = 1;
            player.maxHp = 1;
            player.update();
        },
        async content(event, trigger, player) {
            lib.skill.Europa_suodi.yinni(player);
        },
    },
    Europa_jumu: {
        trigger: {
            player: 'phaseBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(true, get.prompt2(event.name.slice(0, -5)), lib.filter.notMe)
                .set('ai', (target) => {
                    const player = get.player();
                    let eff = get.attitude(player, target);
                    if (!player.getStorage('Europa_jumu').includes(target)) eff -= 5;
                    return eff;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.markAuto('Europa_jumu', event.targets);
            const cards = event.targets[0].getCards('h');
            if (!cards.length) return;
            const { bool, targets } = await player
                .chooseTarget([1, Infinity], `你可以把${get.translation(event.targets[0])}当前手牌展示给任意名其他角色`)
                .set('ai', (target) => {
                    return get.attitude(get.player(), target);
                })
                .forResult();
            if (bool) {
                for (const target of targets) {
                    await target.chooseControl('ok').set('dialog', [get.translation(event.targets[0]) + '的手牌', cards]);
                }
            }
        },
        ai: {
            viewHandcard: true,
            skillTagFilter(player, arg, target) {
                return target != player && !_status.auto && player.getStorage('Europa_jumu').includes(target);
            },
        },
        mark: true,
        intro: {
            mark(dialog, content, player) {
                if (player.isUnderControl(true)) {
                    var list = [];
                    var num = Math.min(2, ui.cardPile.childElementCount);
                    for (var i = 0; i < num; i++) {
                        list.push(ui.cardPile.childNodes[i]);
                    }
                    dialog.addSmall(list);
                }
            },
        },
    },
    Europa_wenfeng: {
        trigger: {
            global: 'phaseUseBegin',
        },
        filter(event, player) {
            return event.player != player;
        },
        async cost(event, trigger, player) {
            const list = ['basic', 'trick', 'equip', '无', 'cancel2'];
            const { control } = await player
                .chooseControl(list, function () {
                    let controls = get.event('controls').slice();
                    return controls[get.rand(0, controls.length - 1)];
                })
                .set('prompt', get.prompt2(event.name.slice(0, -5)))
                .forResult();
            if (control != 'cancel2') event.result = { bool: true, cost_data: { control } };
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const control = event.cost_data.control;
            player.addSkill('Europa_wenfeng_effect');
            player.setStorage('Europa_wenfeng_effect', control);
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'useCard',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const storage = player.storage[event.name];
                    player.removeSkill(event.name);
                    if ((storage == '无' && !get.type(trigger.card)) || storage == get.type2(trigger.card)) {
                        const { index } = await player
                            .chooseControl('摸一张牌并视为使用', '取消此牌的所有目标', 'cancel2')
                            .set('prompt', `你发动了${get.translation('Europa_wenfeng')}猜测正确,你可以选择魔偶一张牌并视为使用一种${get.translation(trigger.card)}或者取消此牌的所有目标`)
                            .set('ai', () => {
                                const player = get.player(),
                                    target = get.event().getTrigger().player;
                                if (get.attitude(player, target) > 0) return 0;
                                return get.rand(0, 1);
                            })
                            .forResult();
                        if (index == 2) return;
                        else if (index == 0) {
                            await player.draw();
                            if (!['basic', 'trick'].includes(get.type(trigger.card))) return;
                            const vcard = new lib.element.VCard({ name: trigger.card.name });
                            if (player.hasUseTarget(vcard)) await player.chooseUseTarget(vcard, true);
                        } else {
                            trigger.targets.length = 0;
                            trigger.all_excluded = true;
                            game.log(player, '取消了', trigger.card, '的所有目标');
                        }
                    }
                },
            },
        },
    },
    Europa_xunshan: {
        enable: 'phaseUse',
        filter(event, player) {
            if (player.getStorage('Europa_xunshan_used').length > 2) return false;
            return game.hasPlayer((target) => {
                return lib.skill.Europa_xunshan.filterTarget(null, player, target);
            });
        },
        filterTarget(card, player, target) {
            const targets = player.getStorage('Europa_xunshan_used').map((info) => info[0]);
            if (targets.includes(target)) return false;
            return target != player;
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addTempSkill('Europa_xunshan_used', 'phaseUseAfter');
            const list = ['basic', 'trick', 'equip'].removeArray(player.getStorage('Europa_xunshan_used').map((info) => info[1]));
            if (!list.length) return;
            const { control } = await player
                .chooseControl(list, function () {
                    let controls = get.event('controls');
                    return controls[get.rand(0, controls.length - 1)];
                })
                .set('prompt', `声明一种本回合未声明的类型,并令${get.translation(target)}对你使用其手牌中所有该类型的牌`)
                .forResult();
            if (!player.storage.Europa_xunshan_used) player.storage.Europa_xunshan_used = [];
            player.storage.Europa_xunshan_used.push([target, control]);
            const cards = target.getCards('h', (card) => get.type(card) == control),
                cantUse = [];
            for (const card of cards) {
                if (target.canUse(card, player, false, false)) await target.useCard(card, player);
                else cantUse.add(card);
            }
            if (cantUse.length) await target.showCards(cantUse);
            if (!cards.length) {
                const sha = new lib.element.VCard({ name: 'sha' });
                if (player.canUse(sha, target, false, false)) await player.useCard(sha, target);
            }
        },
        subSkill: {
            used: {
                charlotte: true,
            },
        },
    },
    Europa_shaqiao: {
        trigger: {
            target: 'useCardToTarget',
        },
        filter(event, player) {
            if (event.player == player || !['sha', 'juedou'].includes(event.card.name)) return false;
            return get.distance(event.player, player) <= 1;
        },
        logTarget: 'player',
        check(event, player) {
            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
            return get.damageEffect(event.player, player, player) > 0;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            await event.targets[0].damage();
            trigger.parent.excluded.add(player);
            game.log(trigger.card, '对', player, '无效');
        },
    },
    Europa_xiangpu: {
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            if (get.distance(target, player) > 1) return false;
            return target != player && target.canUse('juedou', player);
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await target.useCard({ name: 'juedou' }, player, 'noai');
            if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                if (target.countDiscardableCards(player, 'he')) {
                    await player.discardPlayerCard(target, 'he');
                }
                if (player.hasSkill('Europa_xuanwo_effect')) return;
                if (player.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event && evt.player == target)) {
                    if (player.getStat('skill').Europa_xiangpu) delete player.getStat('skill').Europa_xiangpu;
                }
            }
        },
        ai: {
            order: 2,
            result: {
                player(player, target) {
                    return get.effect(player, { name: 'juedou' }, target, player);
                },
            },
        },
    },
    Europa_xuanwo: {
        enable: 'phaseUse',
        limited: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addTempSkill('Europa_xuanwo_effect');
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    globalFrom(from, to) {
                        if (to != from) return -Infinity;
                    },
                },
            },
        },
    },
};
export default skills;

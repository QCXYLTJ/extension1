import { lib, game, ui, get, ai, _status } from '../../../../noname.js';
/** @type { importCharacterConfig.skill } */
const skills = {
    hokbaoliechongzhuang: {
        derivation: 'xinzhanyi',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageBefore',
            source: 'damageBefore',
        },
        forced: true,
        filter(event, player) {
            return !player.hasSkill('hokbaoliechongzhuang_zhanyi');
        },
        async content(event, trigger, player) {
            trigger._hokbaoliechongzhuang_source = trigger.source;
            trigger._hokbaoliechongzhuang_player = trigger.player;
            player.addTempSkill('hokbaoliechongzhuang_zhanyi', ['phaseZhunbeiAfter', 'phaseJudgeAfter', 'phaseDrawAfter', 'phaseUseAfter', 'phaseDiscardAfter', 'phaseJieshuAfter']);
        },
        subSkill: {
            zhanyi: {
                trigger: {
                    global: ['damageAfter', 'damageCancelled', 'damageZero'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player, name) {
                    return event._hokbaoliechongzhuang_source == player || event._hokbaoliechongzhuang_player == player;
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    const { result } = await player
                        .chooseToDiscard(get.prompt2('xinzhanyi'), 'he')
                        .set('chooseonly', true)
                        .set('ai', (card) => {
                            const player = get.player();
                            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return 0;
                            if (!player.isPhaseUsing() && !player.countCards('h', { type: 'trick' })) return 0;
                            return lib.skill.xinzhanyi.check(card);
                        });
                    if (result.bool) {
                        result.skill = 'xinzhanyi';
                        await player.useResult(result, event);
                    }
                },
                mark: true,
                marktext: '战意',
                intro: {
                    name: '战意',
                    markcount: () => 0,
                    content: `你不能被横置或翻面,且不能被获得或弃置手牌`,
                },
                group: 'hokbaoliechongzhuang_effect',
            },
            effect: {
                charlotte: true,
                mod: {
                    canBeGained(card, source, player) {
                        if (source == player) return;
                        if (get.position(card) == 'h') return false;
                    },
                    canBeDiscarded(card, player, target) {
                        if (player == target) return;
                        if (get.position(card) == 'h') return false;
                    },
                },
                trigger: {
                    player: ['linkBegin', 'turnOverBegin'],
                },
                popup: false,
                forced: true,
                filter(event, player) {
                    return !player[name == 'linkBegin' ? 'isLinked' : 'isTurnedOver']();
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                },
                ai: {
                    noLink: true,
                    noturnOver: true,
                    effect: {
                        target(card) {
                            if (card.name == 'tiesuo') return 'zeroplayertarget';
                        },
                    },
                },
            },
        },
    },
    hokzhiyuweixiao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['logSkill', 'useSkillAfter'],
        },
        forced: true,
        filter(event, player) {
            if (event.type != 'player') return false;
            var skill = get.sourceSkillFor(event);
            if (!skill || get.is.locked(skill)) return false;
            var info = get.info(skill);
            return !info.charlotte && !player.hasSkill('hokzhiyuweixiao_use');
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokzhiyuweixiao_use');
        },
        subSkill: {
            use: {
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event.getg && event.getg(player)?.length;
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    player.addTempSkill('hokzhiyuweixiao_effect');
                    const cards = trigger.getg(player);
                    player.addGaintag(cards, 'hokzhiyuweixiao_effect');
                },
                mark: true,
                intro: {
                    content: '你本回合使用下一次获得的牌按反方向额外结算一次',
                },
            },
            effect: {
                audio: 'hokzhiyuweixiao',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.hasHistory('lose', function (evt) {
                        return evt.parent == event && Object.values(evt.gaintag_map).some((value) => value.includes('hokzhiyuweixiao_effect'));
                    });
                },
                filterx(event) {
                    if (event.targets.length == 0) return false;
                    var type = get.type(event.card);
                    if (type != 'basic' && type != 'trick') return false;
                    return true;
                },
                async content(event, trigger, player) {
                    if (get.info(event.name).filterx(trigger)) {
                        game.log(trigger.card, '额外结算一次');
                        const targets = trigger.targets.slice().reverse();
                        player
                            .when('useCardAfter')
                            .filter((event) => event == trigger)
                            .step(async (event, trigger, player) => {
                                const next = game.createEvent(event.name + '_useCard');
                                Object.assign(next, {
                                    player: player,
                                    targets: targets,
                                    card: trigger.card,
                                    cards: trigger.cards,
                                    skill: trigger.skill,
                                    forceDie: trigger.forceDie,
                                    customArgs: trigger.customArgs,
                                    baseDamage: trigger.baseDamage,
                                    addCount: false,
                                    animate: false,
                                    popup: false,
                                });
                                next.setContent('useCard');
                                await next;
                            });
                    }
                },
                onremove(player, skill) {
                    player.removeGaintag(skill);
                },
            },
        },
    },
    hoktianmilianfeng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            const list = get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'delay';
                })
                .filter((card) => !player.hasJudge(card[2]));
            return list.length && game.hasPlayer((current) => lib.skill.hoktianmilianfeng.filterTarget(null, player, current));
        },
        filterTarget(card, player, target) {
            return target.countCards('h');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, cards } = await player
                .choosePlayerCard(target, 'h', true, function (button) {
                    return true;
                })
                .set('ai', (button) => {
                    const player = get.player(),
                        target = _status.event.parent.target;
                    if (get.attitude(player, target) <= 0) return get.buttonValue(button);
                    return -get.buttonValue(button);
                })
                .forResult();
            if (bool) {
                const list = get.inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'delay';
                });
                if (list.length) {
                    const { bool, links } = await player
                        .chooseButton(true, ['甜蜜恋风', [list, 'vcard']], '将一张延时锦囊牌置于你的判定区')
                        .set('filterButton', (button) => {
                            return player.canAddJudge({ name: button.link[2] });
                        })
                        .set('ai', function (button) {
                            const player = get.player();
                            return get.effect(player, { name: button.link[2] }, player, player);
                        })
                        .forResult();
                    if (bool) {
                        target.$throw(cards);
                        await game.asyncDelay();
                        player.addJudge({ name: links[0][2] }, cards);
                    }
                }
            }
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    let hs = player.countCards('h', function (card) {
                        return player.hasUseTarget(card) && player.getUseValue(card) > 5;
                    });
                    let unvalue = player.countCards('h', function (card) {
                        return get.value(card, player) < 6.5;
                    });
                    let list = get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            return type == 'delay';
                        })
                        .filter((card) => !player.hasJudge(card[2]));
                    if (list.length == 1) {
                        if (target != player) return -100 / (target.countCards('h') + 1);
                    }
                    if (player.hasSkill('hokzhiyuweixiao')) {
                        if (target == player && hs && unvalue && !player.hasSkill('hoktianmilianfeng_effect')) return 1.2;
                    }
                    return -1;
                },
            },
        },
        subSkill: {
            judge: {
                audio: 'hokzhiyuweixiao',
                trigger: {
                    player: 'phaseJudgeBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('j');
                },
                check(event, player) {
                    if (player.getHistory('skipped').length) return false;
                    return game.hasPlayer(function (current) {
                        return get.attitude(player, current) < 0 && current.hp == 1 && get.damageEffect(current, player, player) > 0;
                    });
                },
                prompt: '你可以发动治愈微笑,获得判定区所有牌,跳过判定阶段',
                async content(event, trigger, player) {
                    const cards = player.getCards('j');
                    if (cards.length) player.gain(cards);
                    trigger.cancel();
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (get.type(card, 'delay') && player.canUse(card, player) && player.canAddJudge(card)) return 12;
                    },
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.type(card) == 'delay') return [0, 0, 0, 0.1];
                        },
                    },
                },
            },
            draw: {
                audio: 'hokzhiyuweixiao',
                trigger: {
                    player: 'phaseDrawBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                check(event, player) {
                    return false;
                },
                prompt: '你可以发动治愈微笑,获得手牌区所有牌,跳过摸牌阶段',
                async content(event, trigger, player) {
                    const cards = player.getCards('h');
                    if (cards.length) player.gain(cards);
                    trigger.cancel();
                },
            },
            discard: {
                audio: 'hokzhiyuweixiao',
                trigger: {
                    player: 'phaseDiscardBefore',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('e');
                },
                check(event, player) {
                    if (player.needsToDiscard()) return true;
                    if (player.getHp() <= 2 && player.getEquips(2).length) return false;
                },
                prompt: '你可以发动治愈微笑,获得装备区所有牌,跳过判定阶段',
                async content(event, trigger, player) {
                    const cards = player.getCards('e');
                    if (cards.length) player.gain(cards);
                    trigger.cancel();
                },
            },
        },
    },
    hokxinghualiaoluan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
            player: 'damageEnd',
        },
        popup: false,
        xushiSkill: true,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt2(event.skill), trigger.num)
                .set('filterCard', (card) => {
                    return get.player().canRecast(card);
                })
                .set('complexCard', true)
                .set('ai', (card) => {
                    const player = get.player();
                    if (
                        !player.countCards('h', (card) => {
                            return get.tag(card, 'damage') > 0.5 && player.hasValueTarget(card);
                        })
                    )
                        return 0;
                    return 7 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            let targets = [];
            await player.recast(event.cards);
            while (player.countCards('h')) {
                const result = await player
                    .chooseToUse()
                    .set('filterCard', function (card) {
                        if (get.position(card) != 'h' || !get.tag(card, 'damage')) return false;
                        return lib.filter.cardEnabled.apply(this, arguments);
                    })
                    .set('filterTarget', function (card, player, target) {
                        if (get.event('sourcex').includes(target)) return false;
                        return lib.filter.filterTarget.apply(this, arguments);
                    })
                    .set('targetRequired', true)
                    .set('complexSelect', true)
                    .set('sourcex', targets)
                    .set('prompt', get.prompt(event.name))
                    .set('prompt2', '你可以使用一张伤害牌,你可以重铸任意张手牌并重复此流程')
                    .set('addCount', false)
                    .forResult();
                if (result.bool) {
                    targets = result.targets;
                    const result2 = await player
                        .chooseCard(trigger.num)
                        .set('prompt', '你可以重铸任意张手牌,你可以使用一张伤害手牌并重复此流程')
                        .set('ai', (card) => {
                            const player = get.player();
                            return 7 - get.value(card);
                        })
                        .forResult();
                    if (result2.bool) {
                        await player.recast(result2.cards);
                    } else break;
                } else break;
            }
        },
    },
    hoktianxiangzhilong: {
        derivation: 'mjdingyi',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'changeHp',
        },
        forced: true,
        firstDo: true,
        getList: ['qianlong', 'beilong', 'feilong', 'kanglong'],
        async content(event, trigger, player) {
            get.info(event.name).init(player, event.name);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'recover') && _status.event.type == 'phase' && !player.needsToDiscard() && player.getDamagedHp() < 3 && player.hujia > 4) {
                        return 0.2;
                    }
                },
            },
        },
        init(player, skill) {
            const skills = get.info('hoktianxiangzhilong').getList.map((info) => `${skill}_${info}`);
            if (player.isHealthy()) {
                player.removeAdditionalSkill(skills);
                player.unmarkSkill(skill);
            } else {
                player.addAdditionalSkill(skill, skills.slice(0, player.getDamagedHp()));
                player.markSkill(skill);
            }
        },
        mark: true,
        marktext: '定仪',
        intro: {
            name: '定仪',
            markcount: (storage, player) => player.getDamagedHp(),
            content(content, player) {
                const deslist = ['潜龙勿用:摸牌阶段的额定摸牌数+1<br>', '贝龙在田:手牌上限+2<br>', '飞龙在天:攻击范围+1<br>', '亢龙有悔:脱离濒死状态后回复1点体力'];
                return deslist.slice(0, player.getDamagedHp()).join('');
            },
        },
        group: ['hoktianxiangzhilong_recover', 'hoktianxiangzhilong_changehp'],
        subSkill: {
            qianlong: {
                title: '摸牌阶段的额定摸牌数+1',
                charlotte: true,
                trigger: {
                    player: 'phaseDrawBegin',
                },
                forced: true,
                filter(event, player) {
                    return !event.numFixed;
                },
                async content(event, trigger, player) {
                    trigger.num += 1;
                },
            },
            beilong: {
                title: '手牌上限+2',
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return num + 2;
                    },
                },
            },
            feilong: {
                title: '攻击范围+1',
                charlotte: true,
                mod: {
                    attackRange(player, num) {
                        return num + 1;
                    },
                },
            },
            kanglong: {
                title: '脱离濒死状态后回复1点体力',
                charlotte: true,
                trigger: {
                    player: 'dyingAfter',
                },
                forced: true,
                filter(event, player) {
                    return player.isDamaged();
                },
                async content(event, trigger, player) {
                    player.recover();
                },
            },
            recover: {
                audio: 'hoktianxiangzhilong',
                trigger: {
                    player: 'recoverBegin',
                },
                forced: true,
                firstDo: true,
                filter(event, player) {
                    return player.getHp(true) >= 1;
                },
                async content(event, trigger, player) {
                    trigger.cancel(null, null, 'notrigger');
                    player.changeHujia(trigger.num, null, true);
                },
            },
            changehp: {
                audio: 'hoktianxiangzhilong',
                trigger: {
                    player: 'changeHpAfter',
                },
                forced: true,
                firstDo: true,
                filter(event, player) {
                    return player.getHp(true) < 1 && player.hujia;
                },
                async content(event, trigger, player) {
                    const num = player.hujia;
                    if (num > 0) {
                        await player.changeHujia(-num);
                        player.changeHp(num);
                    }
                },
            },
        },
    },
    hokjingleizhilong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: ['chooseToUse', 'chooseToRespond'],
        sunbenSkill: true,
        filter(event, player, name) {
            if (player.hasSkill('hokjingleizhilong_sunben') || !player.countCards('h', { type: 'basic' })) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2];
                    return get.type(name) == 'basic';
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2];
                        return get.type(name) == 'basic';
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('惊雷之龙', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                if (_status.event.parent.type != 'phase') return 1;
                const player = get.player();
                return player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard(card) {
                        return get.type(card) == 'basic';
                    },
                    ai1(card) {
                        return 7 - get.value(card);
                    },
                    async precontent(event, trigger, player) {
                        player.addSkill('hokjingleizhilong_sunben');
                    },
                };
            },
            prompt(links, player) {
                return '将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用或打出';
            },
        },
        hiddenCard(player, name) {
            if (get.type(name) != 'basic' || player.countCards('h', { type: 'basic' })) return false;
            return lib.inpile.includes(name);
        },
        ai: {
            respondSha: true,
            respondShan: true,
            order(item, player) {
                if (player && get.event().type == 'phase') {
                    let list = get
                        .inpileVCardList((info) => {
                            const name = info[2];
                            if (get.type(name) != 'basic') return false;
                            return !get.info('hokhaofawushang_use').getUsed(player).includes(name);
                        }) //QQQ
                        .map((card) => {
                            return { name: card[2], nature: card[3] };
                        })
                        .filter((card) => player.getUseValue(card, true, true) > 0);
                    if (!list.length) return 0;
                    list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
                    return get.order(list[0], player) * 0.99;
                }
                return 0.001;
            },
            result: {
                player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
        subSkill: {
            sunben: {
                trigger: {
                    player: 'changeHpAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                },
            },
            backup: {},
        },
    },
    hokpoyunzhilong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useCard', 'respond'],
        },
        forced: true,
        filter(event, player) {
            if (!['sha', 'shan'].includes(event.card.name)) return false;
            const target = get.info('hokpoyunzhilong').logTarget(event, player);
            return target && target.isIn();
        },
        logTarget(event, player) {
            if (event.name == 'respond') return event.source;
            if (event.card.name == 'sha') return event.targets[0];
            return event.respondTo[0];
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            target.addTempSkill('hokpoyunzhilong_thunder');
        },
        ai: {
            useSha: true,
            useShan: true,
            effect: {
                target(card, player, target, current) {
                    if (get.attitude(target, player) > 0) return;
                    if (get.tag(card, 'respondSha')) {
                        if (target.hasSha()) {
                            return 0.8;
                        }
                    }
                    if (get.tag(card, 'respondShan')) {
                        if (target.hasShan()) {
                            return 0.8;
                        }
                    }
                },
            },
        },
        subSkill: {
            thunder: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num++;
                    game.setNature(trigger, 'thunder');
                    game.log(player, '触发了’,#g感电效果,受到的伤害+1');
                    player.removeSkill(event.name);
                },
                mark: true,
                marktext: '⚡',
                intro: {
                    content: '受到的伤害+1且改为雷属性',
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!get.tag(card, 'damage')) return;
                            if (target.hasSkillTag('nodamage') || target.hasSkillTag('nothunder')) return 'zeroplayertarget';
                            if (
                                target.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: new lib.element.VCard(
                                        {
                                            name: card.name,
                                            nature: 'thunder',
                                        },
                                        [card]
                                    ),
                                })
                            )
                                return;
                            return 2;
                        },
                    },
                },
            },
        },
    },
    hokjianaifeigong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        derivation: 'hokhepingmanbu',
        trigger: {
            player: ['logSkill', 'useSkillAfter'],
        },
        forced: true,
        filter(event, player) {
            if (event.type != 'player') return false;
            var skill = get.sourceSkillFor(event);
            if (get.is.locked(skill)) return false;
            var info = get.info(skill);
            return !info.charlotte;
        },
        async content(event, trigger, player) {
            await player.gainHujiaCards();
            player
                .when({ global: 'phaseEnd' })
                .step(async (event, trigger, player) => {
                    const cards = player.getHujiaCards();
                    if (cards.length) await player.discard(cards);
                })
                .finish();
        },
        init: (player, skill) => player.addSkill(`${skill}_counter`),
        onremove: (player, skill) => player.removeSkill(`${skill}_counter`),
        intro: {
            markcount(storage, player) {
                return player.countMark('hokjianaifeigong_counter');
            },
            content(storage, player) {
                return `已使用过${get.cnNumber(player.countMark('hokjianaifeigong_counter'))}张牌`;
            },
        },
        group: 'hokjianaifeigong_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                filter(event, player) {
                    return event._hokjianaifeigong_use;
                },
                async content(event, trigger, player) {
                    const skill = 'hokhepingmanbu';
                    const next = player
                        .chooseToUse()
                        .set('skill', skill)
                        .set('openskilldialog', `###${get.translation(skill)}###${get.skillInfoTranslation(skill)}`)
                        .set('norestore', true)
                        .set('_backupevent', skill)
                        .set('custom', {
                            add: {},
                            replace: { window() { } },
                        })
                        .backup(skill);
                },
            },
            counter: {
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                charlotte: true,
                popup: false,
                firstDo: true,
                async content(event, trigger, player) {
                    if (!player.countMark('hokjianaifeigong_counter')) {
                        const num = game.getAllGlobalHistory('everything', (evt) => {
                            return evt.player === player && ['useCard'].includes(evt.name) && evt !== trigger;
                        }).length;
                        if (num > 0) player.addMark('hokjianaifeigong_counter', num, false);
                    }
                    player.addMark('hokjianaifeigong_counter', 1, false);
                    if (player.countMark('hokjianaifeigong_counter') % 4 === 0) trigger._hokjianaifeigong_use = true;
                    player.markSkill('hokjianaifeigong');
                },
            },
        },
    },
    hokhepingmanbu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        usable: 1,
        viewAs: {
            name: 'yiyi',
        },
        filterCard: () => false,
        selectCard: -1,
        prompt: '你可以视为使用一张【以逸待劳】(以此法弃置相同类型牌的目标角色受到你造成的1点伤害)',
        async precontent(event, trigger, player) {
            player.addTempSkill('hokhepingmanbu_effect');
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'discardAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const evt = event.getParent(2);
                    if (evt.name != 'yiyi' || !evt.parent?.skill?.startsWith('hokhepingmanbu')) return false;
                    return event.cards && event.cards.map((card) => get.type2(card)).toUniqued().length == 1;
                },
                async content(event, trigger, player) {
                    await trigger.player.damage();
                },
            },
        },
    },
    hokmoshouchenggui: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return game.hasPlayer((current) => lib.skill.hokmoshouchenggui.filterTarget(null, player, current));
        },
        xushiSkill: true,
        filterTarget(card, player, target) {
            return target.hasHistory('lose', function (evt) {
                return evt.type == 'discard';
            });
        },
        selectTarget: -1,
        multiline: true,
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            for (const target of event.targets) {
                target.turnOver(true);
                target.addSkill('hokmoshouchenggui_effect');
            }
        },
        ai: {
            order: 3,
            result: {
                target(player, target) {
                    return target.hasSkillTag('noturnOver') ? 0 : -1;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'damageEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.turnOver();
                    player.removeSkill(event.name);
                },
            },
        },
    },
    hoklinghunchongji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkill', 'logSkillBegin', 'useCard', 'respond'],
        },
        popup: false,
        forced: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || get.is.locked(skill)) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            return lib.skill.hoklinghunchongji.logTarget(event, player)?.length;
        },
        logTarget(event, player) {
            return event.targets;
        },
        async content(event, trigger, player) {
            for (const target of event.targets) {
                const cards = target
                    .getCards('h', (card) => {
                        return card.suit != 'heart';
                    })
                    .randomGets(1);
                if (cards.length) {
                    target.addTempSkill('hoklinghunchongji_shixin', 'roundStart');
                    target.addGaintag(cards, 'hoklinghunchongji_shixin');
                    game.log(target, '的一张手牌', '视为', '#r♥️️');
                }
            }
            player.addTempSkill('hoklinghunchongji_effect', 'roundStart');
            player.markAuto('hoklinghunchongji_effect', event.targets);
        },
        subSkill: {
            shixin: {
                charlotte: true,
                onremove(player, skill) {
                    player.removeGaintag(skill);
                },
                mod: {
                    suit(card, suit) {
                        if (card.hasGaintag('hoklinghunchongji_shixin')) return 'heart';
                    },
                },
            },
            effect: {
                trigger: {
                    global: 'damageBegin3',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (get.itemtype(event.cards) != 'cards' || !player.getStorage('hoklinghunchongji_effect').includes(event.player)) return false;
                    return event.player.countCards('h', { suit: 'heart' });
                },
                async content(event, trigger, player) {
                    trigger.num += trigger.player.countCards('h', { suit: 'heart' });
                },
            },
        },
    },
    hokouxiangmeili: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        popup: false,
        filter(event, player) {
            return game.hasPlayer((current) => {
                return current.countGainableCards(player, 'h') || player.countGainableCards(current, 'h');
            });
        },
        async cost(event, trigger, player) {
            let index_ai, targets_ai, bool_ai;
            let choices = [`获得其他角色手牌`, `交给其他角色手牌`, 'cancel2'];
            if (player.countCards('h') == 1) index_ai = 0;
            else if (
                !player.hasCard(function (card) {
                    return player.hasUseTarget(card);
                }, 'h')
            )
                index_ai = 0;
            else if (!game.hasPlayer((current) => current.countGainableCards(player, 'h'))) {
                if (player.countCards('h') <= 2 && player.getHp() < 2) index_ai = 2;
            } else index_ai = 1;
            switch (index_ai) {
                case 0:
                    {
                        const targets = game.filterPlayer((target) => {
                            if (target == player) return false;
                            return target.countGainableCards(player, 'h') && get.attitude(player, target) <= 0;
                        });
                        bool_ai = true;
                        if (!targets.length) {
                            bool_ai = false;
                            return;
                        }
                        let aiIndex = Array(targets.length).fill(1);
                        targets.forEach((target, item) => {
                            if (target.countCards('h') > 2) return;
                            aiIndex[item] += Math.random();
                            aiIndex[item] += get.damageEffect(target, player, player);
                        });
                        targets_ai = [targets[aiIndex.indexOf(Math.max.apply(null, aiIndex))]];
                    }
                    break;
                case 1:
                    {
                        const targets = game.filterPlayer((target) => {
                            if (target == player) return false;
                            return player.countGainableCards(target, 'h');
                        });
                        bool_ai = true;
                        if (!targets.length) {
                            bool_ai = false;
                            return;
                        }
                        let aiIndex = Array(targets.length).fill(1);
                        targets.forEach((target, item) => {
                            if (get.attitude(player, target) > 4) aiIndex[item] += 1;
                            if (player.countCards('h') > 2) return;
                            aiIndex[item] += Math.random();
                            aiIndex[item] += get.damageEffect(target, player, player);
                        });
                        targets_ai = [targets[aiIndex.indexOf(Math.max.apply(null, aiIndex))]];
                    }
                    break;
                default: {
                    targets_ai = [];
                    bool_ai = false;
                }
            }
            let aiRefix = {
                bool: bool_ai,
                targets: targets_ai,
                control: choices[index_ai],
                index: index_ai,
            };
            const { bool, targets, index } = await player
                .chooseTargetControl({
                    filterTarget(targets, target) {
                        const player = get.player();
                        if (target == player) return false;
                        if (player.countCards('h') < 2) return target.countGainableCards(player, 'h');
                        return true;
                    },
                    choices: choices,
                    aiRefix: aiRefix,
                    prompt: get.prompt2(event.name.slice(0, -5)),
                    control(targets) {
                        const choices = get.event('choices');
                        if (targets.length) {
                            const list = [],
                                target = targets[0];
                            list.push(`获得${get.translation(target)}手牌`);
                            list.push(`交给${get.translation(target)}手牌`);
                            list.push('cancel2');
                            return list;
                        }
                        return choices;
                    },
                    filter(control, target) {
                        const player = get.player();
                        if (!target.countGainableCards(player, 'h')) return control.index != 0;
                        if (player.countCards('h') < 2) return control.index != 1;
                        return true;
                    },
                    processAI() {
                        return get.event('aiRefix');
                    },
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { index, targets } };
        },
        async content(event, trigger, player) {
            const index = event.cost_data.index,
                targets = event.cost_data.targets;
            if (index == 0) {
                await player.gainPlayerCard(targets[0], 'h', 2, true);
            } else {
                await player.chooseToGive(targets[0], 'h', 2, true);
            }
            const source = index == 0 ? targets[0] : player;
            const target = index == 0 ? player : targets[0];
            const cards = target.getCards('h');
            if (!cards.length) return;
            const { bool, links } = await source
                .chooseButton([`偶像魅力:你可以使用${get.translation(target)}的一张手牌`, cards])
                .set('filterButton', (button) => {
                    const player = get.player();
                    var card = button.link;
                    var cardx = {
                        name: get.name(card, get.owner(card)),
                        nature: get.nature(card, get.owner(card)),
                        cards: [card],
                    };
                    return player.hasUseTarget(cardx, null, false);
                })
                .set('ai', (button) => {
                    const player = get.player();
                    return player.getUseValue(button.link);
                })
                .forResult();
            if (bool) {
                const card = links[0];
                const cardx = {
                    name: get.name(card, get.owner(card)),
                    suit: get.suit(card, get.owner(card)),
                    number: get.number(card, get.owner(card)),
                    nature: get.nature(card, get.owner(card)),
                    cards: [card],
                };
                const next = source.chooseUseTarget(card, false).set('oncard', (card) => {
                    const owner = _status.event.parent.owner;
                    if (owner) owner.$throw(card.cards);
                });
                if (card.name === cardx.name && get.is.sameNature(card, cardx, true)) next.viewAs = false;
            }
        },
    },
    hoknvwangchongbai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return player.countCards('h') && game.countPlayer() > 1;
        },
        xushiSkill: true,
        filterCard: true,
        selectCard() {
            return [1, game.players.length - 1];
        },
        check(card) {
            return 6 - get.value(card);
        },
        lose: false,
        discard: false,
        delay: false,
        async content(event, trigger, player) {
            const num = event.cards.length;
            for (const npc of game.players.randomGets(num)) {
                await npc.gain(event.cards.shift());
            }
            const { result } = await player.draw(num);
            for (const card of result.slice().randomSort()) {
                if (player.hasUseTarget(card)) {
                    await player.chooseUseTarget(card, true, false);
                }
            }
        }, //QQQ
        ai: {
            order: 0.1,
            result: {
                player(player) {
                    if (
                        !game.hasPlayer(function (target) {
                            return player.canUse({ name: 'sha' }, target, false) && get.effect(target, { name: 'sha' }, player, player) > 0;
                        })
                    )
                        return 0;
                    return 1;
                },
            },
        },
    },
    hokwangzheshenpan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted',
        },
        popup: false,
        filter(event, player, name) {
            let info = get.info(event.card);
            if (info.type != 'trick' || info.multitarget || !event.targets?.length) return false;
            if (name == 'useCardToTargeted' && !event.targets.includes(player)) return false;
            return game.hasPlayer((target) => {
                return !event.targets.includes(target) && lib.filter.targetEnabled2(event.card, event.player, target);
            });
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    const event = get.event(),
                        trigger = get.event().getTrigger();
                    if (get.event().name == 'chooseTarget') {
                        for (let i of game.filterPlayer()) {
                            if (trigger.targets.includes(i)) {
                                let node,
                                    str = '';
                                if (i.node.prompt) {
                                    node = i.node.prompt;
                                    node.innerHTML = '';
                                    node.className = 'damage normal-font damageadded';
                                } else {
                                    node = ui.create.div('.damage.normal-font', i);
                                    i.node.prompt = node;
                                    ui.refresh(node);
                                    node.classList.add('damageadded');
                                }
                                str += '已被选择';
                                let choosen = ui.create.div('.sgs-prompt', node);
                                choosen.classList.add('jinghongdiao');
                                choosen.style.left = 60 + '%';
                                choosen.innerHTML = str;
                            }
                        }
                    }
                    if (ui.selected.targets.length) {
                        if (target.group != ui.selected.targets[0].group) return false;
                        if (trigger.targets.includes(ui.selected.targets[0]) && !trigger.targets.includes(target)) return false;
                        if (!trigger.targets.includes(ui.selected.targets[0]) && trigger.targets.includes(target)) return false;
                    }
                    if (trigger.targets.includes(target)) return true;
                    return lib.filter.targetEnabled2(trigger.card, trigger.player, target) && lib.filter.targetInRange(trigger.card, trigger.player, target);
                })
                .set('complexTarget', true)
                .set('selectTarget', [1, Infinity])
                .set('ai', (target) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    return get.effect(target, trigger.card, player, player) * (trigger.targets.includes(target) ? -1 : 1);
                })
                .set('targets', trigger.targets)
                .set('card', trigger.card)
                .set('custom', {
                    add: {},
                    replace: {
                        window() {
                            game.check();
                        },
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            if (!event.isMine() && !event.isOnline()) await game.asyncDelay();
            player.tempBanSkill(event.name, 'roundStart', false);
            if (trigger.targets.includes(event.targets[0])) {
                trigger.targets.removeArray(event.targets);
                game.log(event.targets, '被', player, '移除了目标');
            } else {
                trigger.targets.addArray(event.targets);
                game.log(event.targets, '成为了', trigger.card, '的目标');
            }
        },
        ai: {
            expose: 0.2,
        },
    },
    hokwangzhechengjie: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokwangzheshouyu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageEnd',
        },
        popup: false,
        filter(event, player) {
            return event.source != player && event.source?.isIn();
        },
        getSkills(player) {
            return player.getCards('e').reduce((list, card) => {
                const info = get.info(card);
                if (info && info.skills) return list.addArray(info.skills);
                return list;
            }, []);
        },
        logTarget: 'source',
        check(event, player) {
            return get.attitude(player, event.source) <= 0;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt2(event.skill, trigger.source))
                .set('ai', (card) => {
                    const player = get.player();
                    const target = get.event().getTrigger().source;
                    if (get.attitude(player, target) > 0) return 0;
                    return 8 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.changeHujiaCards(event.cards);
            if (trigger.source?.isIn()) {
                trigger.source.addTempSkill('hokwangzheshouyu_blocker');
                game.log(trigger.source, '的装备牌于本回合失效');
            }
        },
        group: 'hokwangzheshouyu_use',
        subSkill: {
            use: {
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.countCards('h');
                },
                filterCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                lose: false,
                discard: false,
                delay: false,
                prompt: '出牌阶段限一次,你可以将一张手牌当做护甲牌',
                async content(event, trigger, player) {
                    await player.changeHujiaCards(event.cards);
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            if (player.getHujiaCards().length) return 0;
                            return 1;
                        },
                    },
                },
            },
            blocker: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                firstDo: true,
                filter(event, player) {
                    if (event.name == 'equip' && event.player == player && get.subtype(event.card) == 'equip1') return true;
                    const evt = event.getl(player);
                    return evt && evt.player == player && evt.es && evt.es.some((card) => get.subtype(card) == 'equip1');
                },
                async content(event, trigger, player) {
                    player.enableSkill('hokwangzheshouyu_blocker');
                    player.disableSkill('hokwangzheshouyu_blocker', get.info('hokwangzheshouyu').getSkills(player));
                },
                init(player, skill) {
                    player.disableSkill(skill, get.info('hokwangzheshouyu').getSkills(player));
                    player.addTip(skill, get.translation(skill) + ' 装备失效');
                },
                onremove(player, skill) {
                    player.enableSkill(skill);
                    player.removeTip(skill);
                },
                mod: {
                    attackRange(player, num) {
                        return num + 1 - player.getEquipRange();
                    },
                    globalFrom(from, to, distance) {
                        let num = 0;
                        for (let i of from.getVCards('e')) {
                            const info = get.info(i).distance;
                            if (!info) continue;
                            if (info.globalFrom) num += info.globalFrom;
                        }
                        return distance - num;
                    },
                    globalTo(from, to, distance) {
                        let num = 0;
                        for (let i of to.getVCards('e')) {
                            const info = get.info(i).distance;
                            if (!info) continue;
                            if (info.globalTo) num += info.globalTo;
                            if (info.attackTo) num += info.attackTo;
                        }
                        return distance - num;
                    },
                },
                mark: true,
                marktext: '※',
                intro: {
                    content: '装备牌失效',
                },
                ai: {
                    unequip_equip1: true,
                },
            },
        },
    },
    hokhuolibengfa: {
        derivation: 'hokfanguntuxi',
        audio: 'ext:王者荣耀/audio:2',
        nobracket: true,
        trigger: {
            player: 'equipAfter',
        },
        popup: false,
        filter(event, player) {
            return event.cards?.length;
        },
        async cost(event, trigger, player) {
            const result = await player
                .chooseToUse()
                .set('openskilldialog', `###${get.prompt(event.name.slice(0, -5))}###视为使用一张不计入次数限制的【杀】,结算后你弃置${get.translation(trigger.cards)}`)
                .set('norestore', true)
                .set('_backupevent', 'hokhuolibengfa_backup')
                .set('custom', {
                    add: {},
                    replace: { window() { } },
                })
                .backup('hokhuolibengfa_backup')
                .set('nouse', true)
                .forResult();
            event.result = { bool: result.bool, cost_data: { result } };
        },
        async content(event, trigger, player) {
            const {
                cost_data: { result },
            } = event;
            event.set('addCount', false);
            player
                .when('useCardAfter')
                .filter((event) => event.skill == 'hokhuolibengfa_backup')
                .then(() => {
                    if (player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) return;
                    if (player.getStat('skill').hokfanguntuxi) delete player.getStat('skill').hokfanguntuxi;
                });
            await player.useResult(result, event);
            await player.discard(trigger.cards);
        },
        mod: {
            cardUsable(card, player, num) {
                if (get.event().skill == 'hokhuolibengfa_backup') return Infinity;
            },
        },
        ai: {
            reverseEquip: true,
            combo: 'hokfanguntuxi',
        },
        subSkill: {
            backup: {
                viewAs: {
                    name: 'sha',
                },
                filterCard: () => false,
                selectCard: -1,
                ai1: () => 1,
            },
        },
    },
    hokfanguntuxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            if (!player.countCards('h')) return false;
            for (let i = 0; i <= 5; i++) {
                if (player.hasEmptySlot(i)) return true;
            }
            return false;
        },
        chooseButton: {
            dialog(event, player) {
                return ui.create.dialog('###翻滚突袭###你可将一张手牌置于你的空置装备栏');
            },
            chooseControl(event, player) {
                const choices = [];
                for (let i = 0; i <= 5; i++) {
                    if (player.hasEmptySlot(i)) choices.push(`equip${i}`);
                }
                choices.push('cancel2');
                return choices;
            },
            check(event, player) {
                for (let i = 5; i > 0; i--) {
                    if (player.hasEmptySlot(i)) return `equip${i}`;
                }
                return 'cancel2';
            },
            backup(result, player) {
                return {
                    slot: result.control,
                    filterCard: true,
                    ai1(card) {
                        return get.value(card);
                    },
                    discard: false,
                    lose: false,
                    delay: false,
                    prepare: 'throw',
                    async content(event, trigger, player) {
                        const card = event.cards[0];
                        card.subtypes = [lib.skill.hokfanguntuxi_backup.slot];
                        player.addSkill('hokfanguntuxi_use');
                        player.markAuto('hokfanguntuxi_use', event.cards);
                        await player.equip(card);
                    },
                    ai: {
                        result: {
                            player: 1,
                        },
                    },
                };
            },
            prompt(result, player) {
                return `选择一张手牌置入${get.translation(result.control)}栏,此牌离开你的装备区时你可以使用之`;
            },
        },
        ai: {
            order: 10,
            result: {
                player: 1,
            },
        },
        subSkill: {
            backup: {},
            use: {
                audio: 'hokfanguntuxi',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const evt = event.getl(player);
                    return evt && evt.player === player && evt.es?.some((card) => player.getStorage('hokfanguntuxi_use').includes(card));
                },
                async content(event, trigger, player) {
                    const cards = trigger.getl(player).es.filter((card) => player.getStorage(event.name).includes(card));
                    for (const card of cards) {
                        player.unmarkAuto(event.name, [card]);
                        await player.chooseUseTarget(card);
                    }
                },
            },
        },
    },
    hokhuoliyazhi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseEnd',
        },
        forced: true,
        popup: false,
        filter(event, player) {
            return player.hasHistory('sourceDamage') && player.hasUseTarget({ name: 'sha', nature: 'fire' });
        },
        async content(event, trigger, player) {
            const sha = new lib.element.VCard({ name: 'sha', nature: 'fire' });
            const result = await player.chooseUseTarget(sha).set('prompt', get.prompt2(event.name));
        },
    },
    hokkongzhongzhiyuan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCardEnd',
        },
        usable: 1,
        filter(event, player) {
            return get.tag(event.card, 'damage') && player.countCards('hes', { color: get.color(event.card) });
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt2(event.name.slice(0, -5)), 'hes', function (card, player) {
                    if (!player.canRecast(card)) return false;
                    return get.color(card) == get.color(trigger.card);
                })
                .set('ai', function (card) {
                    const player = get.player();
                    if (card.suit == trigger.card.suit) {
                        return _status.currentPhase == player ? -player.getUseValue(card) : player.hasUseTarget(card);
                    }
                    return 6 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.recast(event.cards);
            if (event.cards[0].suit == trigger.card.suit) {
                await player.chooseUseTarget(event.cards[0]);
            }
        },
        ai: {
            threaten: 2.5,
        },
    },
    hokziranyizhi: {
        derivation: 'dcwumei',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['turnOverEnd', 'linkEnd', 'damageEnd'],
            global: 'roundStart',
        },
        forced: true,
        filter(event, player, name) {
            switch (name) {
                case 'turnOverEnd':
                    return !player.isTurnedOver() && event.getParent('phase')?.skill;
                    break;
                case 'linkEnd':
                    return !player.isLinked() && event.getParent('phase')?.skill;
                    break;
                case 'damageEnd':
                    return event.getParent('phase')?.skill;
                    break;
                default:
                    return true;
                    break;
            }
        },
        async content(event, trigger, player) {
            switch (event.triggername) {
                case 'roundStart':
                    {
                        player.turnOver(false);
                        player.link(false);
                        const next = player.phase('nodelay');
                        player.addSkill('dcwumei_wake');
                        player.storage.dcwumei_wake[2].add(next);
                    }
                    break;
                default: {
                    await player.drawTo(3);
                    const { bool, cards, targets } = await player
                        .chooseCardTarget({
                            prompt: get.prompt2('hokziranyizhi'),
                            filterTarget: lib.filter.notMe,
                            filterCard: true,
                            selectCard: [1, Infinity],
                            complexCard: true,
                            complexTarget: true,
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
                        player.line(targets[0]);
                        await player.give(cards, targets[0]);
                    }
                }
            }
        },
        ai: {
            threaten: 1.8,
            noturnOver: true,
            noLink: true,
            effect: {
                target(card, player, target, current) {
                    if (get.tag(card, 'turnOver')) return 'zerotarget';
                    if (['tiesuo', 'lulitongxin'].includes(card.name)) {
                        return 'zerotarget';
                    }
                },
            },
        },
    },
    hoktianrenheyi: {
        derivation: 'dcmengjie',
        global: 'hoktianrenheyi_global',
        audio: 'ext:王者荣耀/audio:2',
        nobracket: true,
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((info) => info[1]);
            return backups.some((backup) =>
                game.hasPlayer(function (target) {
                    return backup.filterTarget(null, player, target);
                })
            );
        },
        chooseButton: {
            dialog(event, player) {
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('noupdate');
                dialog.style.height = 300 + 'px';
                const backups = Array.from(lib.skill.hoktianrenheyi.backups);
                const deslist = backups.map((backup) => `${backup[1].description}`);
                for (let i = 0; i < deslist.length; i++) {
                    const area = ui.create.div('.sgs-yijinarea_long', dialog);
                    area.style.top = (i > 3 ? 60 : i > 1 ? 30 : 0) + '%';
                    area.style.left = (i > 3 ? 35 : 22 + (i % 2) * 30.8) + '%';
                    area.link = i;
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    const des = ui.create.div('.yijin-skillTips', area);
                    des.innerHTML = deslist[i];
                    des.style.fontSize = '22px';
                    if (deslist[i].length > 20) des.style.textAlign = 'left';
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>天人合一</span>,令一名角色执行一项";
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = '天人合一';
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                return dialog;
            },
            filter(button) {
                const player = get.player();
                const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((backup) => backup[1]);
                return game.hasPlayer(function (current) {
                    return backups[button.link].filterTarget(null, player, current);
                });
            },
            check(button) {
                const player = get.player();
                const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((backup) => backup[1]);
                const targets = game.filterPlayer(function (target) {
                    return backups[button.link].filterTarget(null, player, target);
                });
                switch (button.link) {
                    case 0: {
                        if (
                            targets.some(
                                (target) =>
                                    get.attitude(player, target) > 0 &&
                                    game.hasPlayer((current) => {
                                        return get.damageEffect(current, target, target) > 0;
                                    })
                            )
                        )
                            return 1.5;
                    }
                    case 1: {
                        if (
                            targets.some(
                                (target) =>
                                    get.attitude(player, target) > 0 &&
                                    game.hasPlayer((current) => {
                                        if (get.attitude(player, current) <= 0) return false;
                                        if (get.attitude(target, current) <= 0) return false;
                                        return current.isDamaged() && get.recoverEffect(current, target, target) > 0;
                                    })
                            )
                        )
                            return 1.2;
                    }
                    case 2: {
                        if (targets.some((target) => get.attitude(player, target) > 0)) return 1.5;
                    }
                    case 3: {
                        if (
                            targets.some(
                                (target) =>
                                    get.attitude(player, target) > 0 &&
                                    game.hasPlayer((current) => {
                                        return current.countDiscardableCards(current, 'hej');
                                    })
                            )
                        )
                            return 1.1;
                    }
                    case 4: {
                        if (game.countPlayer() == 2 && targets.length == 1 && targets[0] != player) return 3; //QQQ
                        if (
                            targets.some(
                                (target) =>
                                    get.attitude(player, target) > 0 &&
                                    game.hasPlayer((current) => {
                                        if (get.attitude(player, current) <= 0) return false;
                                        if (get.attitude(target, current) <= 0) return false;
                                        return current.countCards('h') < 5;
                                    })
                            )
                        )
                            return 1.8;
                    }
                }
                return 1;
            },
            backup(links) {
                const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((fly) => fly[1]);
                const next = get.copy(backups[links[0]]);
                next.audio = 'hoktianrenheyi';
                next.filterCard = function () {
                    return false;
                };
                next.selectCard = -1;
                return next;
            },
            prompt(links) {
                return ['选择一名本轮造成过伤害的角色,其对一名其他角色造成1点伤害', '选择一名本轮回复过体力的角色,或于得到牌后手牌数大于体力值的角色,其令一名角色回复1点体力', '选择一名本轮于摸牌阶段外摸牌过的角色,其摸两张牌', '选择一名本轮弃置或获得过其他角色牌的角色,其弃置一名角色区域内至多两张牌', '选择一名本轮交给过其他角色牌的角色,其令一名其他角色将手牌补至体力上限(至多摸五张)'][links[0]];
            },
        },
        backups: new Map([
            [
                'wuyong',
                {
                    skill: 'dctongguan_wuyong',
                    dream: '造成伤害',
                    description: '对一名其他角色造成1点伤害',
                    filterTarget(card, player, target) {
                        var stat = player.getStat('skill').hoktianrenheyi_targets;
                        if (stat && stat.includes(target)) return false;
                        const history = target.getAllHistory();
                        for (let i = history.length - 1; i >= 0; i--) {
                            for (const evt of history[i].sourceDamage) {
                                if (evt) return true;
                            }
                            if (history[i].isRound) break;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        var stat = player.getStat('skill');
                        if (!stat.hoktianrenheyi_targets) stat.hoktianrenheyi_targets = [];
                        stat.hoktianrenheyi_targets.push(target);
                        if (game.hasPlayer((current) => current != target)) {
                            const { bool, targets } = await target
                                .chooseTarget('梦解:对一名其他角色造成1点伤害', true, lib.filter.notMe)
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.damageEffect(target, player, player);
                                })
                                .forResult();
                            if (bool) {
                                target.line(targets[0]);
                                targets[0].damage(target);
                            }
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
                },
            ],

            [
                'gangying',
                {
                    skill: 'dctongguan_gangying',
                    dream: '回复体力,或于得到牌后手牌数大于体力值',
                    description: '令一名角色回复1点体力',
                    filterTarget(card, player, target) {
                        var stat = player.getStat('skill').hoktianrenheyi_targets;
                        if (stat && stat.includes(target)) return false;
                        const history = game.getAllGlobalHistory();
                        for (let i = history.length - 1; i >= 0; i--) {
                            for (const evt of history[i].changeHp) {
                                if (evt.player == target && evt.parent.name == 'recover') return true;
                            }
                            if (history[i].isRound) break;
                        }
                        const record = target.getAllHistory();
                        for (let i = record.length - 1; i >= 0; i--) {
                            for (const evtx of record[i].gain) {
                                if (evtx._dctongguan_gangying == true) return true;
                            }
                            if (record[i].isRound) break;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        var stat = player.getStat('skill');
                        if (!stat.hoktianrenheyi_targets) stat.hoktianrenheyi_targets = [];
                        stat.hoktianrenheyi_targets.push(target);
                        if (game.hasPlayer((current) => target != current && current.isDamaged())) {
                            const { bool, targets } = await target
                                .chooseTarget('梦解:令一名角色回复1点体力', function (card, player, target) {
                                    return target.isDamaged();
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.recoverEffect(target, player, player);
                                })
                                .forResult();
                            if (bool) {
                                target.line(targets[0]);
                                targets[0].recover(target);
                            }
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target(player, target) {
                                return get.recoverEffect(target, player, player);
                            },
                        },
                    },
                },
            ],

            [
                'duomou',
                {
                    skill: 'dctongguan_duomou',
                    dream: '于摸牌阶段外摸牌',
                    description: '摸两张牌',
                    filterTarget(card, player, target) {
                        var stat = player.getStat('skill').hoktianrenheyi_targets;
                        if (stat && stat.includes(target)) return false;
                        const history = target.getAllHistory();
                        for (let i = history.length - 1; i >= 0; i--) {
                            for (const evt of history[i].gain) {
                                if (evt.parent.name == 'draw' && evt.getParent('phaseDraw').name != 'phaseDraw') return true;
                            }
                            if (history[i].isRound) break;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        var stat = player.getStat('skill');
                        if (!stat.hoktianrenheyi_targets) stat.hoktianrenheyi_targets = [];
                        stat.hoktianrenheyi_targets.push(target);
                        target.draw(2);
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
            ],

            [
                'guojue',
                {
                    skill: 'dctongguan_guojue',
                    dream: '弃置或获得其他角色牌',
                    description: '弃置一名角色区域内至多两张牌',
                    filterTarget(card, player, target) {
                        var stat = player.getStat('skill').hoktianrenheyi_targets;
                        if (stat && stat.includes(target)) return false;
                        if (!target.countDiscardableCards(player, 'he')) return false;
                        var guojue = false;
                        game.countPlayer2((current) => {
                            if (current == target) return false;
                            if (!guojue && lib.skill.hoktianrenheyi.backups.get('guojue').filterx(current, target)) guojue = true;
                        });
                        return guojue;
                    },
                    filterx(current, target) {
                        const history = current.getAllHistory();
                        for (let i = history.length - 1; i >= 0; i--) {
                            for (const evt of history[i].lose) {
                                if (evt.type == 'discard') {
                                    if ((evt.discarder || evt.getParent(2).player) != target) continue;
                                    if (!evt.getl(current).cards2.length) continue;
                                    return true;
                                } else if (evt.type == 'gain') {
                                    var evtx = evt.parent;
                                    if (evtx.giver || evtx.parent.name == 'gift') continue;
                                    var cards = evtx.getg(target);
                                    if (!cards.length) continue;
                                    var cards2 = evtx.getl(current).cards2;
                                    for (var card of cards2) {
                                        if (cards.includes(card)) return true;
                                    }
                                }
                            }
                            if (history[i].isRound) break;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        var stat = player.getStat('skill');
                        if (!stat.hoktianrenheyi_targets) stat.hoktianrenheyi_targets = [];
                        stat.hoktianrenheyi_targets.push(target);
                        if (game.hasPlayer((current) => current.countDiscardableCards(target, 'hej'))) {
                            const { bool, targets } = await target
                                .chooseTarget('梦解:弃置一名角色区域内至多两张牌', true, (card, player, target) => {
                                    return target.countDiscardableCards(player, 'hej');
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.effect(target, { name: 'guohe' }, player, player);
                                })
                                .forResult();
                            if (bool) {
                                target.line(targets[0]);
                                target.discardPlayerCard(targets[0], true, 'hej', [1, 2]);
                            }
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
                },
            ],

            [
                'renzhi',
                {
                    skill: 'dctongguan_renzhi',
                    dream: '交给其他角色牌',
                    description: '令一名其他角色将手牌补至体力上限(至多摸五张)',
                    filterTarget(card, player, target) {
                        var stat = player.getStat('skill').hoktianrenheyi_targets;
                        if (stat && stat.includes(target)) return false;
                        var renzhi = false;
                        game.countPlayer2((current) => {
                            if (current == target) return false;
                            if (!renzhi && lib.skill.hoktianrenheyi.backups.get('renzhi').filterx(current, target)) renzhi = true;
                        });
                        return renzhi;
                    },
                    filterx(current, target) {
                        const history = current.getAllHistory();
                        for (let i = history.length - 1; i >= 0; i--) {
                            for (const evt of history[i].gain) {
                                if (evt.giver != target || evt.parent.name == 'gift') continue;
                                if (evt.cards.length) return true;
                            }
                            if (history[i].isRound) break;
                        }
                        return false;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        var stat = player.getStat('skill');
                        if (!stat.hoktianrenheyi_targets) stat.hoktianrenheyi_targets = [];
                        stat.hoktianrenheyi_targets.push(target);
                        if (!game.hasPlayer((current) => current != target)) {
                            const { bool, targets } = await target
                                .chooseTarget('梦解:令一名其他角色将手牌补至上限', true, (card, player, target) => {
                                    return target != player;
                                })
                                .set('ai', (target) => {
                                    var att = get.attitude(_status.event.player, target);
                                    if (target.hasSkillTag('nogain')) att /= 6;
                                    if (att > 2) {
                                        return Math.min(5, target.maxHp) - target.countCards('h');
                                    }
                                    return att / 3;
                                })
                                .forResult();
                            if (bool) {
                                target.line(targets[0]);
                                var num = Math.min(5, targets[0].maxHp - targets[0].countCards('h'));
                                targets[0].draw(num);
                            }
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
                },
            ],
        ]),
        ai: {
            threaten: 3,
            expose: 0.5,
            order: 3,
            result: {
                player: 1,
            },
        },
        subSkill: {
            backup: {},
            global: {
                trigger: {
                    player: 'gainEnd',
                },
                charlotte: true,
                forced: true,
                popup: false,
                lastDo: true,
                filter(event, player, name) {
                    return name == 'gainEnd' ? player.countCards('h') > player.getHp() : true;
                },
                async content(event, trigger, player) {
                    trigger._dctongguan_gangying = true;
                },
            },
            changehs: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    let evt = event.getl(player);
                    if (player.countCards('h') != ui.cardPile.childElementCount % 10) return false;
                    if (!evt || !evt.hs || !evt.hs.length) return false;
                    return true;
                },
                async content(event, trigger, player) {
                    if (trigger.delay == false) await game.asyncDelay();
                    const { bool, links } = await player
                        .chooseButton()
                        .set('closeDialog', get.info('hoktianrenheyi').chooseButton.dialog(event, player))
                        .set('filterButton', (button) => get.info('hoktianrenheyi').chooseButton.filter(button))
                        .set('ai', (button) => get.info('hoktianrenheyi').chooseButton.check(button))
                        .forResult();
                    if (bool) {
                        const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((backup) => backup[1]);
                        const description = (links) => get.info('hoktianrenheyi').chooseButton.prompt(links);
                        game.broadcastAll(
                            (backups, links) => {
                                lib.skill.hoktianrenheyi_backup = get.copy(backups[links[0]]);
                                lib.skill.hoktianrenheyi_backup.sourceSkill = 'hoktianrenheyi';
                            },
                            backups,
                            links
                        );
                        player
                            .chooseToUse()
                            .set('forced', true)
                            .set('links', links)
                            .set('description', description(links))
                            .set('audio', 'hoktianrenheyi')
                            .set('filterCard', () => false)
                            .set('selectCard', -1)
                            .set('openskilldialog', `${description(links)}`)
                            .set('norestore', true)
                            .set('_backupevent', 'hoktianrenheyi_backup')
                            .set('custom', {
                                add: {},
                                replace: { window() { } },
                            })
                            .backup('hoktianrenheyi_backup');
                    }
                },
            },
            changehp: {
                trigger: {
                    player: 'changeHpAfter',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.getHp() == ui.cardPile.childElementCount % 10;
                },
                async content(event, trigger, player) {
                    const { bool, links } = await player
                        .chooseButton()
                        .set('closeDialog', get.info('hoktianrenheyi').chooseButton.dialog(event, player))
                        .set('filterButton', (button) => get.info('hoktianrenheyi').chooseButton.filter(button))
                        .set('ai', (button) => get.info('hoktianrenheyi').chooseButton.check(button))
                        .forResult();
                    if (bool) {
                        const backups = Array.from(lib.skill.hoktianrenheyi.backups).map((backup) => backup[1]);
                        const description = (links) => get.info('hoktianrenheyi').chooseButton.prompt(links);
                        game.broadcastAll(
                            (backups, links) => {
                                lib.skill.hoktianrenheyi_backup = get.copy(backups[links[0]]);
                                lib.skill.hoktianrenheyi_backup.sourceSkill = 'hoktianrenheyi';
                            },
                            backups,
                            links
                        );
                        player
                            .chooseToUse()
                            .set('forced', true)
                            .set('links', links)
                            .set('description', description(links))
                            .set('audio', 'hoktianrenheyi')
                            .set('filterCard', () => false)
                            .set('selectCard', -1)
                            .set('openskilldialog', `${description(links)}`)
                            .set('norestore', true)
                            .set('_backupevent', 'hoktianrenheyi_backup')
                            .set('custom', {
                                add: {},
                                replace: { window() { } },
                            })
                            .backup('hoktianrenheyi_backup');
                    }
                },
            },
        },
    },
    hokcilipingzhang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['phaseBefore', 'pileWashed'],
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            if (event.name == 'pileWashed') return true;
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            game.addGlobalSkill('hokcilipingzhang_global');
            const pileCards = Array.from(ui.cardPile.childNodes),
                targets = game.filterPlayer(),
                num = Math.floor(pileCards.length / targets.length);
            for (const target of targets) {
                const cards = pileCards.randomGets(num);
                pileCards.removeArray(cards);
                target.setStorage('hokcilipingzhang_global', cards);
                target.markSkill('hokcilipingzhang_global');
            }
            if (pileCards.length) player.markAuto('hokcilipingzhang_global', pileCards);
        },
        ai: {
            threaten: 4,
        },
        init: () => game.addGlobalSkill('hokcilipingzhang_remove'),
        onremove(player) {
            if (
                !game.hasPlayer((i) => {
                    return i.hasSkill('hokcilipingzhang');
                }, true)
            )
                game.removeGlobalSkill('hokcilipingzhang_global');
        },
        subSkill: {
            remove: {
                trigger: {
                    player: 'dieAfter',
                },
                silent: true,
                forceDie: true,
                filter(event, player) {
                    return !game.hasPlayer((i) => i.hasSkill('hokcilipingzhang'), true);
                },
                async content(event, trigger, player) {
                    game.removeGlobalSkill('hokcilipingzhang_global');
                    game.removeGlobalSkill('hokcilipingzhang_remove');
                },
            },
            global: {
                trigger: {
                    player: 'drawBegin',
                },
                forced: true,
                popup: false,
                lastDo: true,
                charlotte: true,
                async content(event, trigger, player) {
                    const pileCards = Array.from(ui.cardPile.childNodes).filter((card) => player.getStorage('hokcilipingzhang_global').includes(card));
                    let cards = pileCards.slice(0, Math.min(trigger.num, pileCards.length));
                    if (!cards.length) {
                        trigger.cancel();
                        game.log('你交互的牌堆已耗尽,不能再摸牌直至牌堆重新洗牌');
                        return;
                    }
                    if (trigger.bottom) {
                        cards = pileCards.slice(-Math.min(trigger.num, pileCards.length));
                        player.unmarkAuto('hokcilipingzhang_global', cards);
                        if (Array.isArray(cards))
                            for (const i of cards) {
                                ui.cardPile.insertBefore(i, ui.cardPile.firstChild);
                            }
                    } else {
                        player.unmarkAuto('hokcilipingzhang_global', cards);
                        if (Array.isArray(cards))
                            for (const i of cards) {
                                ui.cardPile.appendChild(i);
                            }
                    }
                },
                mark: true,
                intro: {
                    content: '游戏开始时或牌堆洗牌后,所有角色随机平均分配牌堆牌的交互',
                },
            },
        },
    },
    hokjiguanmozhua: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            if (!event.player.getStorage('hokcilipingzhang_global').length) return false;
            return event.player.isIn() && event.player != player;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const target = trigger.player,
                pileCards = Array.from(ui.cardPile.childNodes).filter((card) => target.getStorage('hokcilipingzhang_global').includes(card)),
                cards = pileCards.randomGets(1);
            if (cards.length) {
                target.unmarkAuto('hokcilipingzhang_global', cards);
                player.markAuto('hokcilipingzhang_global', cards);
            }
            await player.chooseDrawRecover(true);
        },
        init() {
            game.addGlobalSkill('hokjiguanmozhua_global', null, null, false);
        },
        onremove(player) {
            if (
                !game.hasPlayer((i) => {
                    return i.hasSkill('hokjiguanmozhua');
                }, true)
            )
                game.removeGlobalSkill('hokjiguanmozhua_global');
        },
        ai: {
            combo: 'hokcilipingzhang',
        },
        subSkill: {
            global: {
                trigger: {
                    player: 'dieAfter',
                },
                silent: true,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return !game.hasPlayer((i) => i.hasSkill('hokjiguanmozhua', null, null, false), true);
                },
                async content(event, trigger, player) {
                    game.removeGlobalSkill('hokjiguanmozhua_global');
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if ((get.tag(card, 'gain') || 0) < 2 && (get.tag(card, 'draw') || 0) < 2) return;
                            let evt = _status.event.getParent('phaseDraw'),
                                dis = game.countPlayer((i) => {
                                    return target !== i && i.hasSkill('hokjiguanmozhua');
                                });
                            if (!dis || (evt && evt.player === target)) return;
                            return [1, -dis];
                        },
                    },
                },
            },
        },
    },
    hokmoyinguaner: {
        derivation: 'kuangcai',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        zhuanhuanji: true,
        zhuanhuanLimit: 3,
        filter(event, player) {
            return get.tag(event.card, 'damage');
        },
        getInfo: new Map([
            ['aige', '哀歌:你使用的伤害牌造成伤害后摸三张牌'],
            ['kuangge', '狂歌:你使用的伤害牌额外目标上限+2'],
            ['lige', '离歌:你使用伤害牌回复1点体力'],
        ]),
        async content(event, trigger, player) {
            const music = player.storage[event.name];
            switch (music[0]) {
                case 'aige':
                    player
                        .when('useCardAfter')
                        .filter((event, player) => event.card == trigger.card)
                        .then(() => {
                            if (!player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) return;
                            player.draw(3);
                        });
                    break;
                case 'kuangge':
                    player
                        .when('useCardToPlayer')
                        .filter((event, player) => event.card == trigger.card)
                        .then(() => {
                            if (!trigger.targets || trigger.targets.length != 1) return;
                            trigger.effectCount += 1;
                        });
                    break;
                case 'lige':
                    await player.recover();
                    break;
            }
            const moyin = music.shift();
            music.add(moyin);
            game.broadcastAll(function (player) {
                const text = lib.skill[event.name].getInfo.get(music[0]).slice(0, 2);
                if (player.marks[event.name]) {
                    player.marks[event.name].firstChild.innerHTML = text;
                }
            }, player);
            const history = player.getAllHistory('useSkill', (evt) => evt.skill == event.name);
            if (history.length % 3 == 0) {
                await player.draw(2);
                player.removeSkills(event.name);
                const skillName = '【' + get.translation(event.name) + '】';
                game.log(player, '失去了技能', '#g' + skillName);
                player.addTempSkill(event.name + '_restore', 'roundStart');
                player.markAuto(event.name + '_restore', [event.name]);
                player
                    .when({ global: 'phaseEnd' })
                    .then(() => {
                        player
                            .when('phaseUseBegin')
                            .filter((event, player) => !event.player.isMad())
                            .then(() => {
                                game.trySkillAudio('kuangcai', player);
                                game.broadcastAll(function (player) {
                                    player.forceCountChoose = { phaseUse: 3 };
                                }, player);
                                player.addSkill('kuangcai_use');
                                player.addSkill('kuangcai_cancel');
                            });
                        trigger.phaseList.splice(trigger.num, 0, 'phaseUse|hokmoyinguaner');
                    })
                    .translation('魔音贯耳');
            }
        },
        mark: true,
        marktext: '哀歌',
        intro: {
            name: '魔音',
            markcount: () => 0,
            content(storage, player, skill) {
                return lib.skill.hokmoyinguaner.getInfo.get(storage[0]);
            },
        },
        init: (player, skill) => (player.storage[skill] = ['aige', 'kuangge', 'lige']),
        subSkill: {
            restore: {
                charlotte: true,
                onremove(player, skill) {
                    player.addSkills(player.storage[skill]);
                    if (player.storage[skill]) delete player.storage[skill];
                },
            },
        },
    },
    hoksiwen: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'showCharacterAfter',
        },
        hiddenSkill: true,
        filter(event, player) {
            return event.toShow?.some((i) => get.character(i).skills?.includes('hoksiwen'));
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return target != player;
                })
                .set('ai', (target) => {
                    var player = _status.event.player;
                    var current = _status.currentPhase.next;
                    var max = 20,
                        att = 0;
                    while (max > 0) {
                        max--;
                        if (current == target) return att;
                        att -= get.attitude(player, current);
                        current = current.next;
                    }
                    return att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            game.broadcastAll(
                function (target1, target2) {
                    game.swapSeat(target1, target2, null, true);
                },
                player,
                target
            );
        },
        group: 'hoksiwen_previous',
        subSkill: {
            previous: {
                audio: 'hoksiwen',
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                logTarget: 'player',
                filter(event, player) {
                    if (get.itemtype(event.cards) != 'cards') return false;
                    return event.player == player.previous && event.card?.name == 'sha';
                },
                async content(event, trigger, player) {
                    trigger.num++;
                    game.log('#g背刺', ':', player, '对', trigger.player, '造成的伤害+1');
                },
            },
        },
    },
    hokshunhua: {
        audio: 'ext:王者荣耀/audio:2',
        audioname: ['hokake', 'hokhaiyue'],
        enable: 'phaseUse',
        usable: 1,
        filterCard: true,
        position: 'hes',
        filter(event, player) {
            return player.countCards('h', function (card) {
                return lib.filter.cardDiscardable(card, player, 'hokshunhua');
            });
        },
        check(card) {
            let player = get.player();
            let val = 5;
            if (player.needsToDiscard()) val += 1.5;
            if (
                player.countCards('h', function (cardx) {
                    return card.name == cardx.name;
                }) > 1
            )
                val += 1;
            return val - get.value(card);
        },
        async content(event, trigger, player) {
            const card = get.cardPile(
                function (cardx) {
                    return get.tag(cardx, 'damage');
                },
                null,
                'random'
            );
            if (card) {
                const next = player.gain(card, 'gain2');
                next.gaintag.add(event.name);
                await next;
            }
        },
        mod: {
            aiValue(player, card, num) {
                if (card.hasGaintag('hokshunhua')) num += 0.5;
            },
            aiUseful(player, card, num) {
                return lib.skill.hokshunhua.mod.aiValue.apply(this, arguments);
            },
        },
        ai: {
            order(item, player) {
                return get.order({ name: 'sha' }) + 0.1;
            },
            effect: {
                player(card, player, target) {
                    if (card.cards && card.hasGaintag) {
                        if (!card.hasGaintag('hokshunhua')) return;
                        let targets = [],
                            eff = get.damageEffect(target, player, player);
                        evt = _status.event.getParent('useCard');
                        targets.addArray(ui.selected.targets);
                        if (evt && evt.card == card) targets.addArray(evt.targets);
                        if (targets.length) {
                            if (!targets.includes(target)) return [1, 0, 1, -eff];
                            return;
                        }
                    }
                }, //QQQ
            },
            result: {
                player(player) {
                    if (player.hasUseTarget({ name: 'sha' })) return 1.5;
                    return 1;
                },
            },
        },
        group: 'hokshunhua_beici',
        subSkill: {
            beici: {
                audio: 'hokshunhua',
                trigger: {
                    player: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player) {
                    return (
                        player.hasHistory('lose', function (evt) {
                            return evt.parent == event.parent && Object.values(evt.gaintag_map).some((value) => value.includes('hokshunhua'));
                        }) && event.parent.triggeredTargets3.length == event.targets.length
                    );
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    const cards = trigger.cards.filterInD();
                    if (cards.length) await trigger.target.gain(cards, 'gain2');
                    trigger.target.damage();
                },
            },
        },
    },
    hokhuanwu: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'dieAfter',
        },
        forced: true,
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
            var next = game.createEvent(event.name + '_clanzhongliu');
            next.player = player;
            next.setContent(lib.skill.clanzhongliu.content);
            player.when({ global: 'phaseEnd' }).then(() => {
                get.info('hokhuanwu').yinni(player);
            });
        },
    },
    hokshizhilianjin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        filter(event, player) {
            return event.player.countCards('e', (card) => !get.is.igniteCard(card));
        },
        async cost(event, trigger, player) {
            event.result = await player
                .choosePlayerCard(trigger.player, get.prompt2(event.name.slice(0, -5), trigger.player))
                .set('filterButton', (button) => {
                    return true;
                })
                .forResult();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await trigger.player.igniteCards(event.cards);
            if (player.hujia != 1) {
                const num = player.hujia - 1;
                await player.changeHujia();
                await player.draw(Math.abs(num));
            }
        },
    },
    hokkuangbiaotujin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return [0, 1].some((info) => !player.getStorage('hokkuangbiaotujin_used').includes(info));
        },
        chooseButton: {
            dialog(event, player) {
                const deslist = ['将一张装备牌置于一名其他角色的装备区并摧毁', '摧毁你装备区内的一张装备牌以视为使用土【杀】'];
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('noupdate');
                dialog.style.height = 120 + 'px';
                for (let i = 0; i < 2; i++) {
                    const area = ui.create.div('.sgs-yijinarea_long', dialog);
                    area.style.left = 22 + (i % 2) * 30.8 + '%';
                    area.link = i;
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    const des = ui.create.div('.yijin-skillTips', area);
                    des.innerHTML = deslist[i];
                    des.style.fontSize = '25px';
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>狂飙突进</span>,执行一项";
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = '狂飙突进';
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                dialog.direct = true;
                return dialog;
            },
            filter(button) {
                const player = get.player();
                return !player.getStorage('hokkuangbiaotujin_used').includes(button.link);
            },
            backup(links) {
                const next = get.copy(get.info('hokkuangbiaotujin').backups[links[0]]);
                next.audio = 'hokkuangbiaotujin';
                return next;
            },
            check(button) {
                const player = get.player();
                switch (button.link) {
                    case 0: {
                        return 1;
                        var discard = Math.max.apply(
                            Math,
                            game
                                .filterPlayer((current) => {
                                    return current != player;
                                })
                                .map((current) => {
                                    return get.effect(current, { name: 'draw' }, player, player);
                                })
                        );
                        return discard;
                    }
                    case 1:
                        {
                            return 1.1;
                            var draw = Math.max.apply(
                                Math,
                                game
                                    .filterPlayer((current) => {
                                        return current != player;
                                    })
                                    .map((current) => {
                                        return get.effect(current, { name: 'discard' }, player, player);
                                    })
                            );
                            return draw;
                        }
                        return 0;
                }
            },
            prompt(links) {
                return ['将一张装备牌置于一名其他角色的装备区并摧毁', '摧毁你装备区内的一张装备牌以视为使用土【杀】'][links[0]];
            },
        },
        backups: [
            {
                filterTarget(card, player, target) {
                    return target != player && target.canEquip(card);
                },
                position: 'he',
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                check(card) {
                    return 6.5 - get.value(card);
                },
                discard: false,
                lose: false,
                prepare(cards, player, targets) {
                    player.$give(cards, targets[0], false);
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('hokkuangbiaotujin_used', 'phaseUseAfter');
                    player.markAuto('hokkuangbiaotujin_used', [0]);
                    await target.equip(event.cards[0]);
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            const card = ui.selected.cards[0];
                            if (card) return get.effect(target, card, target, target);
                            return 0;
                        },
                    },
                },
            },
            {
                viewAs: {
                    name: 'sha',
                    nature: 'dust',
                },
                position: 'e',
                filterCard(card) {
                    return get.type(card) == 'equip';
                },
                check(card) {
                    return 6.5 - get.value(card);
                },
                async precontent(event, trigger, player) {
                    player.addTempSkill('hokkuangbiaotujin_used', 'phaseUseAfter');
                    player.markAuto('hokkuangbiaotujin_used', [1]);
                },
            },
        ],

        ai: {
            order: 10,
            threaten: 2.8,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    hokzhenshedaji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        viewAs: {
            name: 'nanman',
        },
        viewAsFilter(player) {
            if (
                !game.hasPlayer((target) => {
                    return target.countCards('e') && player.canUse({ name: 'nanman' }, target);
                })
            )
                return false;
        },
        filterCard: () => false,
        selectCard: -1,
        filterTarget(card, player, target) {
            return target.countCards('e') && player.canUse({ name: 'nanman' }, target);
        },
        selectTarget: -1,
        async precontent(event, trigger, player) {
            player.awakenSkill('hokzhenshedaji');
        },
    },
    hokshizhibodong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseUseBegin',
        },
        mahouSkill: true,
        filter(event, player) {
            if (player.isTempBanned('hokshizhibodong')) return false;
            return !player.hasSkill('hokshizhibodong_mahou');
        },
        async content(event, trigger, player) {
            await player.loseHp();
            for (let target of game.filterPlayer()) {
                const history1 = target.getAllHistory('damage');
                const history2 = target.getAllHistory('lose');
                if (history1.length) history1[history1.length - 1].hokshizhibodong = true;
                if (history2.length) history2[history2.length - 1].hokshizhibodong = true;
            }
            const { result } = await player
                .chooseControl('1回合', '2回合', '3回合')
                .set('prompt', '请选择施法时长')
                .set('ai', function () {
                    const player = get.player();
                    let safe = 1;
                    if (safe < Math.min(3, game.countPlayer())) {
                        var next = player.next;
                        while (next != player && get.attitude(next, player) > 0) {
                            safe++;
                            next = next.next;
                        }
                    }
                    return Math.max(2, Math.min(safe, 3, game.countPlayer())) - 1;
                });
            player.storage.hokshizhibodong_mahou = [result.index + 1, result.index + 1];
            player.tempBanSkill('hokshizhibodong', 'roundStart', false);
            player.addTempSkill('hokshizhibodong_mahou', { player: 'die' });
        },
        check(event, player) {
            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
            return get.attitude(player, event.player) < 0;
        },
        getNum(player, effect) {
            let num = 0;
            const history = player.getAllHistory(effect);
            if (history.length) {
                for (let i = history.length - 1; i >= 0; i--) {
                    let evt = history[i];
                    if (effect == 'lose' && evt.parent.name == 'useCard') continue;
                    if (evt.hokshizhibodong) break;
                    num += evt.num;
                }
            }
            return num;
        },
        subSkill: {
            mahou: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    let list = player.storage.hokshizhibodong_mahou;
                    list[1]--;
                    if (list[1] == 0) {
                        game.log(player, '的<波动>魔法生效');
                        for (let target of game.players) {
                            let num1 = lib.skill.hokshizhibodong.getNum(target, 'damage');
                            let num2 = lib.skill.hokshizhibodong.getNum(target, 'lose');
                            if (num1 > 0) target.recover(Math.min(list[0], num1));
                            if (num2 > 0) target.draw(Math.min(list[0], num2));
                            player.removeSkill(event.name);
                        }
                    } else {
                        game.log(player, '的<波动>魔法剩余', '#g' + list[1] + '回合');
                        player.markSkill(event.name);
                    }
                },
                mark: true,
                marktext: '♗',
                intro: {
                    name: '施法:波动',
                    markcount(storage) {
                        if (storage) return storage[1];
                        return 0;
                    },
                    content(storage) {
                        if (storage) {
                            return '经过' + storage[1] + '个<回合结束时>后,你令施法期间所有受到过伤害和失去过手牌的角色回复α点体力且摸β张牌(α,β为期间受到伤害数,失去手牌数与X的最小值)';
                        }
                        return '未指定施法效果';
                    },
                },
            },
        },
    },
    hokedeyiliao: {
        nobracket: true,
        global: 'hokedeyiliao_global',
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['loseHpBegin', 'recoverBegin'],
        },
        filter(event, player) {
            if (event.name == 'recover') return event.parent.name == 'tao' || event.type == 'tao';
            return event.type == 'du';
        },
        check(event, player) {
            if (event.name == 'recover') return get.recoverEffect(player, player, player) <= 0;
            if (get.effect(player, { name: 'losehp' }, player, player) * event.num > get.effect(player, { name: 'draw' }, player, player) * event.num * 2) return false;
            return event.name == 'loseHp';
        },
        prompt2(event, player) {
            return `当你${event.name == 'loseHp' ? '因【毒】失去体力' : '【桃】回复体力'}时,你可以改为摸两倍数量的牌.`;
        },
        async content(event, trigger, player) {
            trigger.cancel();
            await player.draw(trigger.num * 2);
        },
        ai: {
            threaten: 1.2,
            nodu: true,
            usedu: true,
        },
        group: 'hokedeyiliao_init',
        subSkill: {
            init: {
                audio: 'hokedeyiliao',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const cards = [],
                        num = Array.from(ui.cardPile.childNodes)
                            .flat()
                            .filter((card) => card.name == 'tao').length;
                    for (let i = 0; i < num; i++) {
                        cards.push(game.createCard2('du', i % 2 ? 'club' : 'spade', i));
                    }
                    game.broadcastAll(() => lib.inpile.add('du'));
                    game.cardsGotoPile(cards, () => {
                        return ui.cardPile.childNodes[get.rand(0, ui.cardPile.childNodes.length - 1)];
                    });
                },
            },
            global: {
                trigger: {
                    player: 'recoverBegin',
                },
                _priority: 44.44,
                forced: true,
                popup: false,
                filter(event, player) {
                    return event.parent.name == 'tao';
                },
                async content(event, trigger, player) {
                    trigger.type = 'tao';
                },
            },
        },
    },
    hokshanezhenduan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        zhuanhuanji: true,
        filterTarget: true,
        prompt() {
            const player = get.player();
            const storage = player.storage.hokshanezhenduan;
            return ['出牌阶段限一次,你可以令一名角色加1点体力上限直到其的下个回合开始并触发【桃】', '出牌阶段限一次,你可以令一名角色减1点体力上限直到其的下个回合开始并触发【毒】'][storage ? 0 : 1];
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const storage = player.storage[event.name];
            if (storage) {
                await target.gainMaxHp();
                await target.recover().set('type', 'tao');
            } else {
                await target.loseMaxHp();
                await target.loseHp().set('type', 'du');
            }
            player.changeZhuanhuanji(event.name);
            target.addTempSkill(event.name + (storage ? '_shan' : '_e'), { player: 'phaseBefore' });
            target.addMark(event.name + (storage ? '_shan' : '_e'), 1, false);
        },
        ai: {
            order: 3,
            result: {
                target(player, target) {
                    if (!player.storage.hokshanezhenduan) return -2;
                    return 1;
                },
            },
        },
        mark: true,
        marktext: '☯',
        intro: {
            content(storage, player, skill) {
                return storage ? '恶:你可以令一名角色加1点体力上限直到其的下个回合开始并触发【桃】' : '善:你可以令一名角色减1点体力上限直到其的下个回合开始并触发【毒】';
            },
        },
        subSkill: {
            shan: {
                forceDie: true,
                charlotte: true,
                mark: true,
                marktext: '善',
                intro: {
                    content: '回合开始前减少#点体力上限',
                },
                onremove(player, skill) {
                    player.loseMaxHp(player.storage[skill]);
                    delete player.storage[skill];
                },
            },
            e: {
                forceDie: true,
                charlotte: true,
                mark: true,
                marktext: '恶',
                intro: {
                    content: '回合开始前增加#点体力上限',
                },
                onremove(player, skill) {
                    player.gainMaxHp(player.storage[skill]);
                    delete player.storage[skill];
                },
            },
        },
    },
    hokshengmingzhuzai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        xushiSkill: true,
        filter(event, player) {
            return game.hasPlayer((target) => {
                return ['recover', 'loseHp'].some((info) => get.info('hokshengmingzhuzai').getNum(target, info));
            });
        },
        getNum(player, effect) {
            let recover = 0,
                loseHp = 0;
            const history = game.getAllGlobalHistory();
            for (let i = history.length - 2; i >= 0; i--) {
                const evt = history[i].changeHp;
                for (let j = evt.length - 1; j >= 0; j--) {
                    if (evt[j].player != player) continue;
                    if (evt[j].parent.name == 'recover') {
                        if (evt[j].getParent(2).name == 'tao' || (evt[j].parent.type && evt[j].parent.type == 'tao')) recover += evt[j].num;
                    }
                    if (evt[j].parent.name == 'loseHp') {
                        if (evt[j].parent.type && evt[j].parent.type == 'du') loseHp += Math.abs(evt[j].num);
                    }
                }
                if (history[i].isRound) break;
            }
            return effect == 'recover' ? recover : loseHp;
        },
        async cost(event, trigger, player) {
            const targets = game.filterPlayer((target) => {
                return ['recover', 'loseHp'].some((info) => get.info('hokshengmingzhuzai').getNum(target, info));
            });
            for (const target of targets) {
                const num1 = get.info('hokshengmingzhuzai').getNum(target, 'recover'),
                    num2 = get.info('hokshengmingzhuzai').getNum(target, 'loseHp');
                var node,
                    str = '';
                if (lib.config.show_tip) {
                    target.addTip('hokshengmingzhuzai', '回复' + num1 + '/失去' + num2);
                    continue;
                }
                if (target.node.prompt) {
                    node = target.node.prompt;
                    node.innerHTML = '';
                    node.className = 'damage normal-font damageadded';
                } else {
                    node = ui.create.div('.damage.normal-font', target);
                    target.node.prompt = node;
                    ui.refresh(node);
                    node.classList.add('damageadded');
                }
                str += '+' + num1;
                str += '/-' + num2;
                target.node.prompt.innerHTML = str;
            }
            event.result = await player
                .chooseBool(get.prompt2(event.name.slice(0, -5), targets))
                .set('targets', targets)
                .set('ai', () => {
                    const player = get.player(),
                        targets = get.event('targets');
                    let recover = 0,
                        lose = 0;
                    for (const target of targets) {
                        if (get.attitude(player, target) > 0) {
                            recover += get.info('hokshengmingzhuzai').getNum(target, 'recover');
                            lose -= get.info('hokshengmingzhuzai').getNum(target, 'loseHp');
                        } else {
                            recover -= get.info('hokshengmingzhuzai').getNum(target, 'recover');
                            lose += get.info('hokshengmingzhuzai').getNum(target, 'loseHp');
                        }
                    }
                    return recover >= 0 && lose > 0;
                })
                .forResult();
            for (const target of targets) {
                target.removeTip('hokshengmingzhuzai');
            }
        },
        logTarget(event, player) {
            return game.filterPlayer((target) => {
                return ['recover', 'loseHp'].some((info) => get.info('hokshengmingzhuzai').getNum(target, info));
            });
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            for (const target of event.targets) {
                const num1 = get.info(event.name).getNum(target, 'recover'),
                    num2 = get.info(event.name).getNum(target, 'loseHp');
                if (target.isIn()) await target.loseHp(num2);
                await target.recover(num1);
            }
        },
    },
    hokfanjizhilian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            return event.card?.name == 'sha' || event.card?.name == 'juedou';
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokfanjizhilian_effect');
            player.addMark('hokfanjizhilian_effect', 1, false);
        },
        subSkill: {
            effect: {
                trigger: {
                    player: ['drawBegin', 'recoverBegin'],
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num += player.countMark(event.name);
                    player.removeSkill(event.name);
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            let num = player.countMark('hokfanjizhilian_effect');
                            if (get.tag(card, 'draw') || get.tag(card, 'recover')) {
                                return [1, num];
                            }
                        },
                    },
                },
            },
        },
    },
    hokxuezhihuixiang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageEnd',
        },
        popup: false,
        filter(event, player) {
            return event.card?.name == 'sha' || event.card?.name == 'juedou';
        },
        async cost(event, trigger, player) {
            let resultx,
                list = ['sha', 'juedou'].filter((i) => !player.getStorage('hokxuezhihuixiang_used').includes(i));
            if (list.length == 1) resultx = { bool: true, links: list.map((i) => ['', '', i]) };
            else
                resultx = await player
                    .chooseButton(['###血之回响###当你受到伤害后,你可以将一张非基本牌当【杀】/【决斗】使用,你摸一张牌/回复1点体力', [list, 'vcard']])
                    .set('ai', (button) => {
                        return get.player().getUseValue({ name: button.link[2] });
                    })
                    .forResult();
            if (resultx.bool) {
                game.broadcastAll(function (links) {
                    Object.assign(lib.skill.hokxuezhihuixiang_use_backup, get.copy(get.info('hokxuezhihuixiang_use').chooseButton.backup(links)));
                }, resultx.links);
                const result = await player
                    .chooseToUse()
                    .set('openskilldialog', `###${get.prompt(event.name.slice(0, -5))}###你可将一张非基本牌当做【${get.translation(resultx.links[0][2])}】使用`)
                    .set('norestore', true)
                    .set('_backupevent', 'hokxuezhihuixiang_use_backup')
                    .set('custom', {
                        add: {},
                        replace: { window() { } },
                    })
                    .backup('hokxuezhihuixiang_use_backup')
                    .set('nouse', true)
                    .forResult();
                event.result = { bool: result.bool, cost_data: { result } };
            }
        },
        async content(event, trigger, player) {
            const {
                cost_data: { result },
            } = event;
            event.set('onresult', (result) => {
                player.addTempSkill('hokxuezhihuixiang_used');
                player.markAuto('hokxuezhihuixiang_used', [result.card.name]);
                player
                    .when('useCard')
                    .filter((event) => event.skill == 'hokxuezhihuixiang_use_backup')
                    .then(() => {
                        player[name == 'sha' ? 'draw' : 'recover']();
                    })
                    .vars({ name: result.card.name });
            });
            await player.useResult(result, event);
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (typeof card !== 'object' || !get.tag(card, 'damage')) return;
                    if (player.hasSkillTag('jueqing', false, target)) return;
                    if (!['sha', 'juedou'].includes(card.name)) return;
                    return [1, 0.6];
                },
            },
        },
        group: 'hokxuezhihuixiang_use',
        subSkill: {
            use: {
                enable: 'chooseToUse',
                filter(event, player) {
                    if (!player.countCards('hes', (card) => get.type(card) != 'basic')) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                nature = info[3];
                            if (nature || !['sha', 'juedou'].includes(name)) return false;
                            return !player.getStorage('hokxuezhihuixiang_used').includes(name);
                        })
                        .some((card) => event.filterCard({ name: card[2] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = ['sha', 'juedou'].filter((i) => !player.getStorage('hokxuezhihuixiang_used').includes(i));
                        const dialog = ui.create.dialog('血之回响', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        var evt = _status.event.parent;
                        return evt.filterCard(
                            {
                                name: button.link[2],
                            },
                            player,
                            evt
                        );
                    },
                    check(button) {
                        const player = get.player();
                        switch (button.link) {
                            case 'sha':
                                return player.getUseValue({ name: 'sha' }) + get.effect(player, { name: 'draw' }, player);
                                break;
                            case 'juedou':
                                return player.getUseValue({ name: 'sha' }) + get.recoverEffect(player, player, player);
                                break;
                        }
                    },
                    backup(links) {
                        return {
                            viewAs: {
                                name: links[0][2],
                            },
                            position: 'hes',
                            filterCard(card) {
                                return get.type(card) != 'basic';
                            },
                            check(card) {
                                const player = get.player();
                                return 8 - get.value(card);
                            },
                            async precontent(event, trigger, player) {
                                player.addTempSkill('hokxuezhihuixiang_used');
                                player.markAuto('hokxuezhihuixiang_used', [event.result.card.name]);
                                player
                                    .when('useCard')
                                    .filter((event) => event.skill == 'hokxuezhihuixiang_use_backup')
                                    .then(() => {
                                        player[name == 'sha' ? 'draw' : 'recover']();
                                    })
                                    .vars({ name: event.result.card.name });
                            },
                        };
                    },
                    prompt(links) {
                        return '你可以将一张非基本牌当做' + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!player.countCards('h', (card) => get.type(card) != 'basic')) return false;
                    if (player.getStorage('hokxuezhihuixiang_used').includes(name)) return false;
                    return ['sha', 'juedou'].includes(name);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (!player.countCards('h', (card) => get.type(card) != 'basic')) return false;
                        if (player.getStorage('hokxuezhihuixiang_used').includes('sha')) return false;
                        if (arg != 'use') return false;
                    },
                    order(item, player) {
                        return Math.max(...[get.order({ name: 'sha' }), get.order({ name: 'juedou' })]) - 0.2;
                    },
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    hokaomanchaofeng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseUseBegin',
        },
        xushiSkill: true,
        filter(event, player) {
            return event.player != player && event.player.canUse({ name: 'sha' }, player, false, false);
        },
        check(event, player) {
            return get.effect(player, { name: 'sha' }, event.player, player);
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            const sha = new lib.element.VCard({ name: 'sha' });
            if (target.canUse(sha, player, false, false)) await target.useCard(sha, player);
            target.addTempSkill('hokaomanchaofeng_effect', 'phaseUseAfter');
            target.markAuto('hokaomanchaofeng_effect', [player]);
        },
        ai: {
            expose: 0.2,
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    playerEnabled(card, player, target) {
                        if (!player.getStorage('hokaomanchaofeng_effect').includes(target)) return false;
                    },
                },
            },
        },
    },
    hokyongshengzhixue: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player, name) {
            if (player.getStorage('hokyongshengzhixue').length > 2) return false;
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = event.sourceSkill || event.skill;
            if (!skill) return false;
            let info = get.info(skill);
            while (true) {
                if (!info || info.charlotte || info.equipSkill || info.sealSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
            }
            return player.getOriginalSkills().includes(skill);
        },
        content() { },
    },
    hokhuanyipucong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        content() { },
    },
    hokanyingzhiyue: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        filter(event, player) {
            if (event.type == 'dying') {
                if (player != event.dying) return false;
                return true;
            }
            return false;
        },
        async content(event, trigger, player) {
            player.link(false);
            player.turnOver(false);
            await player.recover();
        },
        ai: {
            order: 1,
            save: true,
            skillTagFilter(player, arg, target) {
                if (player != target) return false;
                return true;
            },
            result: {
                player: 1,
            },
        },
    },
    hoktaotiexuetong: {
        derivation: 'wushuang',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        mod: {
            canBeGained(card, source, player) {
                if (player.getEquips('fangtian').includes(card)) return false;
            },
            canBeDiscarded(card, source, player) {
                if (player.getEquips('fangtian').includes(card)) return false;
            },
            canBeReplaced(card, player) {
                if (player.getVEquips('fangtian').includes(card)) return false;
            },
            cardDiscardable(card, player) {
                if (player.getEquips('fangtian').includes(card)) return false;
            },
            cardEnabled2(card, player) {
                if (player.getEquips('fangtian').includes(card)) return false;
            },
        },
        trigger: {
            player: 'useCardEnd',
        },
        forced: true,
        filter(event, player) {
            return event.skill == 'hokfangtianhuazhan_backup';
        },
        addEnchant(cards, player, skills) {
            if (!Array.isArray(cards)) cards = [cards];
            if (!Array.isArray(skills)) skills = [skills];
            if (Array.isArray(cards))
                for (const i of cards) {
                    const card = i;
                    let info = get.info(card),
                        enchant_filter;
                    const bool = get.position(card) == 'e';
                    if (bool) player.removeEquipTrigger(card);
                    if (!info.skills) info.skills = [];
                    if (Array.isArray(info.skills)) info.skills = [].concat(info.skills);
                    if (!card.storage) card.storage = {};
                    while (skills.length) {
                        let skill = skills.shift();
                        game.log(player, '为', card, '附魔了技能', `#g【${get.translation(skill)}】`);
                        info.skills.add(skill);
                        skill = game.expandSkills([skill]);
                        for (let j of skill) {
                            let infoSkill = get.info(j);
                            infoSkill.enchantSkill = j;
                            card.storage[j] = true;
                            game.broadcast(
                                function (card, storage) {
                                    card.storage = storage;
                                },
                                card,
                                card.storage
                            );
                            if (!infoSkill || (!infoSkill.enable && !infoSkill.trigger && !infoSkill.content)) continue;
                            if (infoSkill && infoSkill.filter && !infoSkill.enchant_filter) {
                                infoSkill.enchant_filter = infoSkill.filter;
                                infoSkill.filter = function (event, player, name) {
                                    let getSkills = player.getSkills(true, false);
                                    getSkills = game.expandSkills(getSkills);
                                    const enchantSkill = this.enchantSkill;
                                    if (!getSkills.includes(enchantSkill)) {
                                        if (!lib.skill.hoktaotiexuetong.hasEnchant(player, enchantSkill)) return false;
                                    }
                                    return this.enchant_filter.apply(this, arguments);
                                };
                            } else if (infoSkill && !infoSkill.filter) {
                                infoSkill.filter = function (event, player, name) {
                                    let getSkills = player.getSkills(true, false);
                                    getSkills = game.expandSkills(getSkills);
                                    const enchantSkill = this.enchantSkill;
                                    if (!getSkills.includes(enchantSkill)) {
                                        if (!lib.skill.hoktaotiexuetong.hasEnchant(player, enchantSkill)) return false;
                                    }
                                    return true;
                                };
                            }
                        }
                        info.cardPrompt = function (card) {
                            let prompt = lib.translate[card.name + '_info'];
                            if (!card.storage) return prompt;
                            let append = '';
                            for (let j in card.storage) {
                                if (!lib.translate[j]) continue;
                                if (!lib.translate[j + '_info']) continue;
                                if (card.storage[j] == true) {
                                    append += `<br><font color=#e4c289>${get.translation(j)}:${get.skillInfoTranslation(j)}<font>`;
                                }
                            }
                            prompt += append;
                            return prompt;
                        };
                    }
                    if (bool) {
                        const infox = get.info(card);
                        if (infox.skills) {
                            for (let k = 0; k < infox.skills.length; k++) {
                                player.addSkillTrigger(infox.skills[k]);
                            }
                        }
                    }
                }
        },
        removeEnchant(cards, player, skills) {
            if (!Array.isArray(cards)) cards = [cards];
            if (!Array.isArray(skills)) skills = [skills];
            if (Array.isArray(cards))
                for (const i of cards) {
                    const card = i;
                    let info = get.info(card),
                        enchant_filter;
                    if (!info.skills) info.skills = [];
                    if (!card.storage) card.storage = {};
                    while (skills.length) {
                        let skill = skills.shift();
                        game.log(player, '的', card, '失去附魔技能', `#g【${get.translation(skill)}】`);
                        skill = game.expandSkills([skill]);
                        for (let j of skill) {
                            card.storage[j] = false;
                            game.broadcast(
                                function (card, storage) {
                                    card.storage = storage;
                                },
                                card,
                                card.storage
                            );
                        }
                    }
                }
        },
        getEnchant(player, skill) {
            return player.getCards('e', function (card) {
                return;
            });
        },
        hasEnchant(player, skill) {
            return player.getCards('e').filter(function (card) {
                return card.storage && card.storage[skill] == true;
            }).length;
        },
        async content(event, trigger, player) {
            const cards = player.getEquips(1),
                bool = game.hasGlobalHistory('everything', (evt) => {
                    if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                        return evt.parent == trigger;
                    }
                });
            get.info(event.name)[bool ? 'removeEnchant' : 'addEnchant'](cards, player, 'wushuang');
            player[bool ? 'loseHp' : 'draw'](bool ? 1 : 3);
        },
        init(player, skill) {
            const fangtian = game.createCard('fangtian', 'diamond', 12);
            player.markAuto(skill, [fangtian]);
            player.equip(fangtian);
        },
        onremove(player, skill) {
            const cards = player.getStorage(skill);
            if (cards.length) game.cardsGotoSpecial(cards);
        },
        ai: {
            combo: 'hokfangtianhuazhan',
        },
        group: 'hoktaotiexuetong_fix',
        subSkill: {
            init: {
                audio: 'hoktaotiexuetong',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player, name) {
                    if (!player.hasEnabledSlot(1) || player.getEquips('fangtian').length) return false;
                    return player.hasEquipableSlot(1) && (event.name != 'phase' || game.phaseNumber == 0);
                },
                async content(event, trigger, player) {
                    const fangtian = game.createCard('fangtian', 'diamond', 12);
                    await game.asyncDelay();
                    if (!player.getEquips('fangtian').length) await player.equip(fangtian);
                },
            },
            fix: {
                trigger: {
                    player: ['loseBefore', 'disableEquipBefore'],
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    if (event.name == 'disableEquip') return event.slots.includes('equip1');
                    const cards = player.getEquips('fangtian');
                    return event.cards && event.cards.some((card) => cards.includes(card));
                },
                async content(event, trigger, player) {
                    if (trigger.name == 'lose') {
                        trigger.cards.removeArray(player.getEquips('fangtian'));
                    } else {
                        while (trigger.slots.includes('equip1')) {
                            trigger.slots.remove('equip1');
                        }
                    }
                },
            },
        },
    },
    hokfangtianhuazhan: {
        derivation: 'wushuang',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (player.isTempBanned('hokfangtianhuazhan_backup')) return false;
            const hs = player.getCards('h');
            if (!hs.length) return false;
            for (let card of hs) {
                const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                if (mod2 === false) return false;
            }
            return get
                .inpileVCardList((info) => {
                    const name = info[2];
                    return ['sha', 'juedou'].includes(name);
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const dialog = ui.create.dialog('方天画斩', [['sha', 'juedou'], 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                var evt = _status.event.parent;
                return evt.filterCard(
                    {
                        name: button.link[2],
                    },
                    player,
                    evt
                );
            },
            check(button) {
                return _status.event.player.getUseValue({
                    name: button.link[2],
                });
            },
            backup(links) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard: true,
                    selectCard: -1,
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('hokfangtianhuazhan_backup', false, false);
                    },
                };
            },
            prompt(links) {
                return '你可以将所有手牌当做' + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (player.isTempBanned('hokfangtianhuazhan_backup') || !player.countCards('h')) return false;
            return ['sha', 'juedou'].includes(name);
        },
        ai: {
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (player.isTempBanned('hokfangtianhuazhan_backup')) return false;
                if (arg != 'use') return false;
            },
            order(item, player) {
                return Math.max(...[get.order({ name: 'sha' }), get.order({ name: 'juedou' })]) - 0.2;
            },
            result: {
                player(player) {
                    let val = 0,
                        max = 0,
                        hs = player.getCards('h');
                    for (let i of hs) {
                        val += get.value(i, player);
                        if (get.type(i, player) == 'trick') max += 5;
                    }
                    if (player.hasSkill('hoktaotiexuetong')) max += 7;
                    return val <= max ? 1 : 0;
                },
            },
        },
        group: 'hokfangtianhuazhan_fix',
        subSkill: {
            backup: {},
            fix: {
                audio: 'hokfangtianhuazhan',
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                filter(event, player) {
                    if (!event.card || get.is.virtualCard(event.card)) return false;
                    return player.hasSkill('wushuang');
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                    trigger.player.loseHp(trigger.num);
                },
                ai: {
                    jueqing: true,
                },
            },
        },
    },
    hokliuhuozhishi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 2,
        viewAs: {
            name: 'huogong',
        },
        filterCard(card, player) {
            if (card.hasGaintag('igniteCards')) return false;
            return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
        },
        selectCard: [1, 4],
        complexCard: true,
        check(card) {
            if (ui.selected.cards.length) return 7.5 - get.value(card);
            return 6 - get.value(card);
        },
        lose: false,
        discard: false,
        delay: false,
        async precontent(event, trigger, player) {
            await player.igniteCards(event.result.cards);
        },
    },
    hokfenghuochibi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageEnd',
            source: 'damageSource',
        },
        popup: false,
        filter(event, player) {
            return event.hasNature('fire');
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(`你可以点燃一名角色的手牌,令所有有<火区>牌的角色各回复或失去1点体力,最后令这些角色获得<火区>牌.`, function (card, player, target) {
                    return (
                        [trigger.source, trigger.player].includes(target) &&
                        target.countCards('h', function (card) {
                            return !card.hasGaintag('igniteCards');
                        })
                    );
                })
                .set('ai', (target) => {
                    return true;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, links } = await player
                .choosePlayerCard(target, true, 'h', (button) => {
                    return !button.link.hasGaintag('igniteCards');
                })
                .set('ai', (button) => {
                    return player.getUseValue(button.link);
                })
                .forResult();
            await target.igniteCards(links, player);
        },
    },
    hokhaoqizhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        filter(event, player) {
            return player.isMaxHp() || player.isMinHp();
        },
        async content(event, trigger, player) {
            const effect = player.isMaxHp(true) ? 'loseHp' : 'recover';
            player.addTempSkill('hokhaoqizhan_effect', 'roundStart');
            player.setStorage('hokhaoqizhan_effect', effect);
            player.addTip('hokhaoqizhan_effect', get.translation('hokhaoqizhan_effect') + (effect == 'loseHp' ? '造成伤害' : '受到伤害'), false, { fontSize: '14px' });
            await player[effect]();
        },
        subSkill: {
            effect: {
                audio: 'hokhaoqizhan',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                charlotte: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                    delete player.storage[skill];
                },
                filter(event, player, name) {
                    if (!event.source || !event.source.isIn()) return false;
                    const effect = player.storage.hokhaoqizhan_effect;
                    if (!effect || effect != (name == 'damageSource' ? 'loseHp' : 'recover')) return false;
                    return player.getHistory(name == 'damageSource' ? 'sourceDamage' : 'damage').indexOf(event) == 0;
                },
                logTarget: 'source',
                async content(event, trigger, player) {
                    await trigger.source[event.triggername == 'damageSource' ? 'recover' : 'loseHp']();
                },
                mark: true,
                intro: {
                    markcount(storage, player) {
                        return storage == 'loseHp' ? '造成伤害' : '受到伤害';
                    },
                    content(storage, player) {
                        return storage == 'loseHp' ? `每回合首次造成伤害后,伤害来源回复1点体力` : `每回合首次受到伤害后,伤害来源失去1点体力`;
                    },
                },
            },
        },
    },
    hoklongjuanshan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'changeHpEnd',
        },
        popup: false,
        filter(event, player) {
            if (
                game.hasPlayer(function (current) {
                    return current.getHp(true) < 1;
                })
            )
                return false;
            return player.isMaxHp() || player.isMinHp();
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2('hoklongjuanshan'), function (card, player, target) {
                    for (let i of game.filterPlayer((p) => p != player)) {
                        let node,
                            str = '';
                        if (i.node.prompt) {
                            node = i.node.prompt;
                            node.innerHTML = '';
                            node.className = 'damage normal-font damageadded';
                        } else {
                            node = ui.create.div('.damage.normal-font', i);
                            i.node.prompt = node;
                            ui.refresh(node);
                            node.classList.add('damageadded');
                        }
                        if (i.isMaxHandcard()) str += '失去体力';
                        else if (i.isMinHandcard()) str += '回复体力';
                        const choosen = ui.create.div('.sgs-prompt', node);
                        choosen.classList.add('jinghongdiao');
                        choosen.style.left = 60 + '%';
                        choosen.innerHTML = str;
                    }
                    return target != player;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    if (target.isMaxHandcard()) {
                        return get.effect(target, { name: 'losehp' }, target, target);
                    } else if (target.isMinHandcard()) {
                        return get.recoverEffect(target, player, player);
                    }
                    return 0;
                })
                .set('custom', {
                    add: {},
                    replace: {
                        window() {
                            game.check();
                        },
                    },
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            if (target.isMaxHandcard() || target.isMinHandcard()) await target[target.isMaxHandcard() ? 'loseHp' : 'recover']();
        },
    },
    hokningleichengbing: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || get.is.locked(skill)) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            if (_status.dying.length || !event.targets?.length) return false;
            return lib.skill.hokningleichengbing.logTarget(event, player)?.length;
        },
        logTarget(event, player) {
            return event.targets.filter(
                (target) =>
                    player.getAllHistory('useSkill', (evt) => {
                        let skill = get.sourceSkillFor(evt);
                        if (!skill || get.is.locked(skill)) return false;
                        let info = get.info(skill);
                        if (info.charlotte || info.equipSkill) return false;
                        return evt.targets && evt.targets.includes(target);
                    }).length %
                    3 ==
                    0
            );
        },
        async content(event, trigger, player) {
            for (const target of event.targets) {
                await target.damage('ice');
            }
        },
    },
    hoktanxishuiliu: {
        derivation: 'shenfu',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        forced: true,
        lastDo: true,
        getIndex(event, player, triggername) {
            return game
                .filterPlayer((target) => {
                    if (_status.currentPhase == target || target == player) return false;
                    if (target.countCards('h') != player.countCards('h')) return false;
                    let num = event.getl(target).hs.length;
                    if (event.getg) num = Math.max(num, event.getg(target).length);
                    return num;
                })
                .sortBySeat();
        },
        filter(event, player, name, target) {
            if (_status.currentPhase == target || target == player) return false;
            return target && target.countCards('h') == player.countCards('h');
        },
        logTarget(event, player, name, target) {
            return target;
        },
        async content(event, trigger, player) {
            event.targets[0].link();
        },
        group: 'hoktanxishuiliu_shenfu',
        subSkill: {
            shenfu: {
                audio: 'hoktanxishuiliu',
                enable: 'phaseUse',
                usable: 1,
                prompt() {
                    return `出牌阶段限一次,你可以发动<${get.skillTipsInfo(get.translation('shenfu'), get.plainText(get.translation('shenfu_info')))}>.`;
                },
                async content(event, trigger, player) {
                    player.useSkill('shenfu');
                },
                ai: {
                    order: 3,
                    result: {
                        player(player) {
                            if (player.countCards('h') % 2 == 1) {
                                return game.hasPlayer(function (target) {
                                    return get.damageEffect(target, player, player, 'ice') > 0;
                                });
                            }
                            return 1;
                        },
                    },
                },
            },
        },
    },
    hokluoshenjianglin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageEnd',
        },
        popup: false,
        filter(event, player) {
            return event.num > 0;
        },
        getIndex(event, player, triggername) {
            return Math.min(event.num, 9) || 1;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    let eff = target.countCards('h') - player.countCards('h');
                    if (player.hasSkill('hokningleichengbing')) {
                        const history = player.getAllHistory('useSkill', (evt) => {
                            let skill = get.sourceSkillFor(evt);
                            if (!skill || get.is.locked(skill)) return false;
                            let info = get.info(skill);
                            if (info.charlotte || info.equipSkill) return false;
                            return evt.targets && evt.targets.includes(target);
                        }); //QQQ
                        if (history.length % 3 == 2) return get.damageEffect(target, player, target, 'ice');
                    }
                    return get.sgnAttitude(player, target) * eff;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            let num = target.countCards('h') - player.countCards('h');
            if (num <= 0) {
                await target.drawTo(player.countCards('h'));
            } else if (target.countCards('h')) {
                await target.chooseToDiscard(num, true, 'h');
            }
        },
        ai: {
            maixie: true,
            maixie_hp: true,
            effect: {
                target(card, player, target) {
                    if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                    if (get.tag(card, 'damage')) return [1, 0.4];
                },
            },
        },
    },
    hokzonghengtianxia: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill'],
        },
        forced: true,
        chargeSkill: 5,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill || info.chargeSkill) return false;
            return player.countCharge(true);
        },
        async content(event, trigger, player) {
            player.addCharge();
        },
        group: ['hokzonghengtianxia_init', 'hokzonghengtianxia_charge'],
        subSkill: {
            init: {
                audio: 'hokzonghengtianxia',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    if (!player.countCharge(true)) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    player.addCharge(2);
                },
            },
            charge: {
                audio: 'hokzonghengtianxia',
                trigger: {
                    player: 'useCard',
                },
                filter(event, player) {
                    return player.countCharge();
                },
                prompt2(event, player) {
                    return `你可以消耗1点蓄力值并令${get.translation(event.card)}不计入次数限制,若造成伤害,你回复1点体力.`;
                },
                check(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    player.removeCharge();
                    if (trigger.addCount !== false) {
                        trigger.addCount = false;
                        player.getStat('card')[trigger.card.name]--;
                    }
                    player
                        .when('useCardAfter')
                        .filter((event) => event.card == trigger.card)
                        .then(() => {
                            if (!player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) return;
                            player.recover();
                        });
                },
            },
        },
    },
    hokyuxuexiaoxiong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
            player: 'damageEnd',
        },
        xushiSkill: true,
        filter(event, player) {
            if (get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o') return false;
            return (
                event.cards &&
                event.cards.some(
                    (card) =>
                        !player.hasHistory('gain', (evt) => {
                            return evt.parent.name == 'hokyuxuexiaoxiong' && evt.cards.includes(card);
                        })
                )
            );
        },
        logTarget: 'player',
        check(event, player) {
            if (event.player == player) return true;
            if (event.cards.length == 1 && event.cards.name == 'du') return false;
            return get.value(event.cards) - 8 > 0;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addTempSkill('hokyuxuexiaoxiong_effect');
            const cards = trigger.cards,
                cards2 = player
                    .getHistory('gain', function (evt) {
                        return evt.parent.name == event.name && evt.cards?.length;
                    })
                    .map((evt) => evt.cards)
                    .flat();
            if (cards2.length) cards.removeArray(cards2);
            if (cards.length) await player.gain(cards, 'gain2', 'giveAuto');
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
        subSkill: {
            effect: {
                audio: 'hokyuxuexiaoxiong',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                filter(event, player) {
                    if (get.itemtype(event.cards) != 'cards' || get.position(event.cards[0], true) != 'o') return false;
                    return (
                        event.cards &&
                        event.cards.some(
                            (card) =>
                                !player.hasHistory('gain', (evt) => {
                                    return evt.parent.name?.startsWith('hokyuxuexiaoxiong') && evt.cards.includes(card);
                                })
                        )
                    );
                },
                logTarget: 'player',
                check(event, player) {
                    if (event.player == player) return true;
                    if (event.cards.length == 1 && event.cards.name == 'du') return false;
                    return get.value(event.cards) - 8 > 0;
                },
                prompt2(event, player) {
                    return '当你造成或受到伤害后,你可以获得造成伤害的牌(不能为本回合以此法获得过的牌)';
                },
                async content(event, trigger, player) {
                    const cards = trigger.cards,
                        cards2 = player
                            .getHistory('gain', function (evt) {
                                return evt.parent.name?.startsWith('hokyuxuexiaoxiong') && evt.cards?.length;
                            })
                            .map((evt) => evt.cards)
                            .flat();
                    if (cards2.length) cards.removeArray(cards2);
                    if (cards.length) await player.gain(cards, 'gain2', 'giveAuto');
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
                mark: true,
                intro: {
                    content: '当你造成或受到伤害后,你可以获得造成伤害的牌(不能为本回合以此法获得过的牌)',
                },
            },
        },
    },
    hokjinu: {
        audio: 'ext:王者荣耀/audio:2',
        getSkills(player) {
            const skills = player.getSkills(null, false, false).filter((skill) => {
                const info = get.info(skill);
                const translation = get.skillInfoTranslation(skill, player);
                if (!translation) return false;
                var match = get.plainText(translation).match(/<?出牌阶段限一次/g);
                if (!match || match.every((value) => value != '出牌阶段限一次')) return false;
                return info && lib.translate[skill + '_info'];
            });
            game.expandSkills(skills);
            return skills.filter((skill) => !lib.skill[skill].trigger);
        }, //不要触发技
        trigger: {
            global: ['shaMiss', 'eventNeutralized'],
        },
        forced: true,
        filter(event, player) {
            if (event.type != 'card') return false;
            var responder;
            if (event.name == 'sha') {
                if (!event.responded?.card?.storage?.hokjinu) return false;
                responder = event.target;
            } else {
                if (!event._neutralize_event?.card?.storage?.hokjinu) return false;
                responder = event._neutralize_event.player;
            }
            return player == responder;
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokjinu_effect');
            player.addMark('hokjinu_effect', 1, false);
        },
        group: 'hokjinu_use',
        subSkill: {
            use: {
                enable: ['chooseToUse', 'chooseToRespond'],
                filter(event, player) {
                    if (
                        event.parent.name == 'phaseUse' ||
                        !get
                            .info('hokjinu')
                            .getSkills(player)
                            .filter(
                                (skill) =>
                                    !player.getRoundHistory('useSkill', (evt) => {
                                        return get.sourceSkillFor(evt) == skill;
                                    }).length
                            ).length
                    )
                        return false;
                    if (event.responded || event.hokjinu_use || !event.respondTo) return false;
                    if (Array.isArray(event.respondTo) && event.respondTo[0] == player) return false;
                    return event.respondTo || event.name == 'chooseToRespond';
                },
                chooseButton: {
                    dialog(event, player) {
                        const description = event.parent.name == '_wuxie' ? `视为响应【${get.translation(event.getParent(4).name)}】` : `视为响应【${get.translation(event.parent.name)}】`;
                        const skills = get.info('hokjinu').getSkills(player);
                        const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                        const mbdialog = new ui.create.mobileDialog(event, 'hokjinu');
                        mbdialog.dialog.classList.add('skill-tdnodes');
                        mbdialog.dialog.add([list, 'tdnodes']);
                        mbdialog.addSkills(skills);
                        mbdialog.addTip("你可发动<span style='color: #a4dfd5'>激怒</span>,发动一个技能" + description);
                        return event.dialog;
                    },
                    filter(button) {
                        const player = get.player();
                        return !player.getRoundHistory('useSkill', (evt) => {
                            return get.sourceSkillFor(evt) == button.link;
                        }).length;
                    },
                    check(button) {
                        const player = get.player(),
                            evt = get.event();
                        if (evt.respondTo) {
                            if (get.effect(player, evt.respondTo[1], evt.respondTo[0], player) > 0) return 0;
                            if (evt.respondTo[1].name == 'sha') {
                                if (player.countCards('hs', 'shan')) return 0;
                                if (player.countCards('hs', 'hufu')) return 0;
                                if (
                                    player.hasSkillTag(
                                        'respondShan',
                                        true,
                                        player.getSkills().filter((i) => i != 'hokjinu'),
                                        true
                                    )
                                )
                                    return 0;
                            }
                        } else if (evt.name == '_wuxie') {
                            if (get.effect(player, { name: evt.getParent(3).name }, evt.getParent(3).player, player) > 0) return 0;
                            if (player.countCards('hs', 'wuxie')) return false;
                            var skills = player
                                .getSkills('invisible')
                                .concat(lib.skill.global)
                                .filter((i) => i != 'hokjinu');
                            game.expandSkills(skills);
                            for (let i = 0; i < skills.length; i++) {
                                var ifo = get.info(skills[i]);
                                if (ifo.viewAs && typeof ifo.viewAs != 'function' && ifo.viewAs.name == 'wuxie') {
                                    if (!ifo.viewAsFilter || ifo.viewAsFilter(player)) {
                                        return false;
                                    }
                                } else if (ifo.hiddenWuxie && info) {
                                    if (typeof ifo.hiddenWuxie == 'function' && ifo.hiddenWuxie(player, info)) {
                                        return false;
                                    }
                                } else {
                                    var hiddenCard = ifo.hiddenCard;
                                    if (typeof hiddenCard == 'function' && hiddenCard(player, 'wuxie')) {
                                        return false;
                                    }
                                }
                            }
                        }
                        return 1 + Math.random();
                    },
                    backup(links, player) {
                        return {
                            skills: links,
                            filterCard: () => false,
                            selectCard: -1,
                            async content(event, trigger, player) {
                                const skill = get.info('hokjinu_use_backup').skills[0];
                                player.markAuto('hokjinu_used', [skill]);
                                const next = player
                                    .chooseToUse()
                                    .set('skill', skill)
                                    .set('openskilldialog', get.skillInfoTranslation(skill))
                                    .set('norestore', true)
                                    .set('_backupevent', skill)
                                    .set('custom', {
                                        add: {},
                                        replace: { window() { } },
                                    })
                                    .backup(skill);
                                const { bool } = await next.forResult();
                                if (!bool) {
                                    event.parent.cancel();
                                    event.parent.goto(0);
                                    event.getParent(2).goto(0);
                                    return;
                                }
                                const evt = event.getParent(2);
                                let respond;
                                if (evt.name == '_wuxie') {
                                    const wuxie = new lib.element.VCard({ name: 'wuxie', storage: { hokjinu_use: true } });
                                    respond = wuxie;
                                } else {
                                    for (let name of lib.inpile) {
                                        if (evt.filterCard && evt.filterCard({ name: name }, player, evt)) {
                                            const vcard = new lib.element.VCard({ name: name, storage: { hokjinu_use: true } });
                                            respond = vcard;
                                            break;
                                        }
                                    }
                                }
                                if (respond) {
                                    if (evt.name == 'chooseToUse') {
                                        game.broadcastAll(function (result) {
                                            lib.skill.hokjinu_use_backup.viewAs = result;
                                        }, respond);
                                        evt.set('_backuevt', 'hokjinu_use_backup');
                                        evt.backup('hokjinu_use_backup');
                                        evt.set('openskilldialog', '选择' + get.translation(respond) + '的目标');
                                        evt.set('norestore', true);
                                        evt.set('custom', {
                                            add: {},
                                            replace: { window() { } },
                                        });
                                    } else {
                                        const key = evt.name == '_wuxie' ? 'wuxieresult2' : 'result';
                                        delete evt[key].skill;
                                        delete evt[key].used;
                                        evt[key].card = respond;
                                        evt[key].cards = [];
                                        if (evt[key].target) evt[key].target = null;
                                        if (evt[key].targets) evt[key].targets = [];
                                        await game.asyncDelay();
                                        evt.redo();
                                        return;
                                    }
                                    evt.goto(0);
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
                        };
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    if (
                        !get
                            .info('hokjinu')
                            .getSkills(player)
                            .filter((skill) => !player.getStorage('hokjinu_used').includes(skill)).length
                    )
                        return false;
                    return ['basic', 'trick'].includes(get.type(name));
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    order: 8,
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
            effect: {
                charlotte: true,
                mod: {
                    attackRange(from, distance) {
                        return distance + from.countMark('hokjinu_effect');
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return (num += player.countMark('hokjinu_effect'));
                    },
                },
            },
        },
    },
    hokhongyan: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'sha',
        },
        filterCard: true,
        check(card) {
            return 7 - get.value(card);
        },
        viewAsFilter(player) {
            const event = get.event();
            if (!player.hasCard((card) => event.filterCard({ name: 'sha', cards: [card] }, player, event), 'h')) return false;
        },
    },
    hokshixue: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'sha',
        },
        filterCard: () => false,
        selectCard: -1,
        async precontent(event, trigger, player) {
            player
                .when('useCardAfter')
                .filter((event) => event.skill == 'hokshixue')
                .then(() => {
                    player.addTempSkill('hokshixue_effect');
                    player.markAuto('hokshixue_effect', trigger.targets);
                });
        },
        subSkill: {
            effect: {
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('hokshixue_effect').includes(event.player);
                },
                async content(event, trigger, player) {
                    await trigger.player.loseHp();
                },
            },
        },
    },
    hokertianyiliu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        derivation: 'xinshensu',
        trigger: {
            player: ['logSkill', 'useSkillAfter'],
        },
        forced: true,
        filter(event, player) {
            if (event.type != 'player') return false;
            var skill = get.sourceSkillFor(event);
            if (get.is.locked(skill)) return false;
            var info = get.info(skill);
            return !info.charlotte;
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokertianyiliu_use');
        },
        init: (player, skill) => player.addAdditionalSkill(skill, 'xinshensu'),
        onremove: (player, skill) => player.removeAdditionalSkill(skill, 'xinshensu'),
        group: ['hokertianyiliu_minglei', 'hokertianyiliu_shayi'],
        subSkill: {
            minglei: {
                audio: 'hokertianyiliu',
                trigger: {
                    target: 'useCardToTargeted',
                },
                forced: true,
                filter(event, player, name) {
                    return event.targets?.length && event.targets.includes(player);
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    let targets = trigger.parent.targets.slice();
                    targets.remove(player);
                    trigger.parent.targets = [player].concat(targets);
                    trigger.parent.triggeredTargets4 = [player].concat(targets);
                }, //QQQ
            },
            shayi: {
                audio: 'hokertianyiliu',
                trigger: {
                    target: ['useCardToAfter', 'useCardToExcluded'],
                },
                forced: true,
                filter(event, player) {
                    const respondEvts = [];
                    if (!event.parent.targets?.length || !event.parent.targets.includes(player)) return false;
                    respondEvts.addArray(player.getHistory('useCard')).addArray(player.getHistory('respond'));
                    return respondEvts.some((evt) => evt.respondTo && evt.respondTo[1] == event.card);
                },
                async content(event, trigger, player) {
                    const evt = trigger.parent;
                    if (evt.targets.length) evt.excluded.addArray(evt.targets);
                },
            },
            use: {
                audio: 'hokertianyiliu',
                enable: ['chooseToUse', 'chooseToRespond'],
                viewAs: {
                    name: 'sha',
                },
                prompt: '你可以将一张手牌当做【杀】使用或者打出',
                viewAsFilter(player) {
                    if (!player.countCards('h')) return false;
                },
                filterCard: true,
                check(card) {
                    return 7 - get.value(card);
                },
                mod: {
                    cardEnabled2(card, player, result) {
                        const evt = get.event();
                        const judge = evt.skill !== 'hokertianyiliu_use';
                        if (get.itemtype(card) === 'vcard' && Array.isArray(card.cards)) {
                            if (judge) {
                                return false;
                            }
                        }
                        if (judge) {
                            return false;
                        }
                    },
                },
            },
        },
    },
    hokyijueshengsi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        viewAs: {
            name: 'juedou',
            storage: {
                nowuxie: true,
            },
        },
        filterCard: () => false,
        selectCard: -1,
        async precontent(event, trigger, player) {
            const targets = event.result.targets;
            player.awakenSkill('hokyijueshengsi');
            for (const target of targets) {
                target.addTempSkill('hokyijueshengsi_effect');
            }
            player.addTempSkill('hokyijueshengsi_clear');
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'recoverBegin',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return !player.storage.hokyijueshengsi_effect;
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                    game.log(player, '的体力回复效果延迟至', '#g【一决生死】', '后生效');
                    player.setStorage(event.name, trigger);
                },
                onremove(player, skill) {
                    var event = player.storage[skill];
                    if (event) {
                        var next = game.createEvent('recover');
                        next.player = player;
                        next.source = event.source || 'nosource';
                        next.card = event.card;
                        next.cards = event.cards;
                        next.skill = event.skill;
                        next.num = event.num;
                        next.filterStop = function () {
                            if (this.num <= 0 || this.player.isHealthy()) {
                                delete this.filterStop;
                                this.finish();
                                this._triggered = null;
                                return true;
                            }
                        };
                        next.setContent('recover');
                    }
                    delete player.storage[skill];
                },
            },
            clear: {
                trigger: {
                    global: 'useCardAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                forceDie: true,
                forceOut: true,
                filter(event, player) {
                    return event.card && event.card.name == 'juedou' && event.skill == 'hokyijueshengsi';
                },
                async content(event, trigger, player) {
                    game.countPlayer((current) => {
                        current.removeSkill('hokyijueshengsi_effect');
                    }, true);
                },
            },
        },
    },
    hokshenlaizhibi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            if (!lib.suit.includes(event.card.suit)) return false;
            return !game.hasPlayer2(function (target) {
                return (
                    target.getHistory('useCard', (evt) => {
                        return evt.card.suit == event.card.suit;
                    }).length > 1
                );
            });
        },
        jiuContent(target) {
            game.addVideo('jiuNode', target, true);
            if (!target.storage.jiu) target.storage.jiu = 0;
            target.storage.jiu++;
            game.broadcastAll(function (target) {
                target.addSkill('jiu');
                if (!target.node.jiu && lib.config.jiu_effect) {
                    target.node.jiu = ui.create.div('.playerjiu', target.node.avatar);
                    target.node.jiu2 = ui.create.div('.playerjiu', target.node.avatar2);
                }
            }, target);
        },
        getNum() {
            return (
                (lib.suit.length || 4) -
                game
                    .getGlobalHistory('useCard', (evt) => evt.card.suit != 'none')
                    .map((evt) => evt.card.suit)
                    .flat()
                    .toUniqued().length
            );
        },
        async content(event, trigger, player) {
            await player.draw(get.info(event.name).getNum());
        },
        init: () => game.addGlobalSkill('hokshenlaizhibi_ai'),
        onremove: (player, skill) => player.removeTip(skill),
        mod: {
            aiOrder(player, card, num) {
                const suits = lib.suit.filter((suit) => {
                    return !game.hasPlayer2(function (target) {
                        return target.getHistory('useCard', (evt) => evt.card.suit == suit).length;
                    });
                });
                if (suits.length) return;
                if (get.itemtype(card) != 'card') return;
                if (suits.includes(card.suit)) return num + 10;
            },
        },
        intro: {
            content: '已记录花色:$',
        },
        group: 'hokshenlaizhibi_count',
        subSkill: {
            ai: {
                trigger: {
                    player: 'dieAfter',
                },
                silent: true,
                forceDie: true,
                filter(event, player) {
                    return !game.hasPlayer((i) => i.hasSkill('hokshenlaizhibi'), true);
                },
                async content(event, trigger, player) {
                    game.removeGlobalSkill('hokshenlaizhibi_ai');
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            let suits = lib.suit.filter((suit) => {
                                return !game.hasPlayer2(function (current) {
                                    return current.getHistory('useCard', (evt) => evt.card.suit == suit).length;
                                });
                            });
                            if (typeof card != 'object' || !suits.length) return;
                            let targets = game.filterPlayer(function (current) {
                                return current.hasSkill('hokshenlaizhibi');
                            });
                            if (targets.every((current) => get.attitude(player, current) <= 0)) {
                                if (suits.includes(card.suit)) return [1, 0.1];
                            } else {
                                if (!suits.includes(card.suit)) return [1, 0.1];
                            }
                        },
                        target(card, player, target, current) {
                            if (typeof card !== 'object') return;
                            if (!target.hasSkill('hokshenlaizhibi')) return;
                            if (card.name == 'sha' && get.color(card) == 'red' && current < 0) return 1.01;
                        },
                    },
                },
            },
            count: {
                trigger: {
                    player: 'useCardToAfter',
                    target: 'useCardToAfter',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    var suit = event.card.suit;
                    if (!lib.suit.includes(suit)) return false;
                    return !player.getStorage('hokshenlaizhibi').includes(suit);
                },
                async content(event, trigger, player) {
                    player.markAuto('hokshenlaizhibi', [trigger.card.suit]);
                    player.storage.hokshenlaizhibi.sort((a, b) => lib.suit.indexOf(b) - lib.suit.indexOf(a));
                    player.addTip('hokshenlaizhibi', get.translation('hokshenlaizhibi') + player.getStorage('hokshenlaizhibi').reduce((str, suit) => str + get.translation(suit), ''), false, { fontSize: '13px' });
                    if (player.getStorage('hokshenlaizhibi').length < 4) return;
                    delete player.storage.hokshenlaizhibi;
                    player.removeTip('hokshenlaizhibi');
                    if (!player.hasSkill('jiu')) get.info('hokshenlaizhibi').jiuContent(player);
                    player.addSkill('hokshenlaizhibi_effect');
                },
            },
            effect: {
                trigger: {
                    player: 'useCardAfter',
                },
                _priority: 2,
                firstDo: true,
                charlotte: true,
                forced: true,
                popup: false,
                filter(event, player) {
                    if (player.hasSkillTag('jiuSustain', null, event.name)) return false;
                    if (event.name == 'useCard') return event.card && event.card.name == 'sha';
                    return true;
                },
                async content(event, trigger, player) {
                    game.broadcastAll(function (player) {
                        player.removeSkill('jiu');
                        player.removeSkill('hokshenlaizhibi_effect');
                    }, player);
                    game.addVideo('jiuNode', player, false);
                },
                ai: {
                    jiuSustain: true,
                    skillTagFilter(player, tag, name) {
                        if (name != 'phase') return false;
                    },
                },
            },
        },
    },
    hokqinglianjiange: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        viewAs: {
            name: 'sha',
        },
        viewAsFilter(player) {
            if (!player.hasSkill('jiu')) return false;
        },
        filterCard(card, player) {
            return !ui.selected.cards.some((cardx) => cardx.suit == card.suit);
        },
        selectCard: [1, 4],
        check(card) {
            return 6.5 - get.value(card);
        },
        complexCard: true,
        position: 'hes',
        selectTarget() {
            return ui.selected.cards.length;
        },
        async precontent(event, trigger, player) {
            player.addSkill('hokqinglianjiange_effect');
            player
                .when('useCard')
                .filter((event) => event.skill == 'hokqinglianjiange')
                .then(() => {
                    trigger.effectCount += num;
                })
                .vars({ num: event.result.cards.length });
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'damageBegin3',
                },
                forced: true,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.parent?.skill == 'hokqinglianjiange';
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    trigger.num -= trigger.player.getHistory('damage', (evt) => evt.card == trigger.card).length;
                },
            },
        },
    },
    hokliansuofanying: {
        audio: 'ext:王者荣耀/audio:2',
        nobracket: true,
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            return !player.hasHistory('gain', function (evt) {
                if (evt.parent.name != 'hokliansuofanying') return false;
                return evt.cards.map((card) => get.type(card)).includes(get.type2(event.card));
            });
        },
        async content(event, trigger, player) {
            const cards = get.cardPile(function (card) {
                return get.type2(card) == get.type2(trigger.card);
            });
            if (cards) player.gain(cards, 'gain2', 'log');
        },
    },
    hokmanyouzhiqiang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        trigger: {
            player: 'useCardAfter',
        },
        forced: true,
        filterxCard(card) {
            var info = get.info(card);
            if (!info || (info.type != 'trick' && info.type != 'delay')) return false;
            if (info.notarget) return false;
            if (info.selectTarget != undefined) {
                if (Array.isArray(info.selectTarget)) {
                    if (info.selectTarget[0] < 0) return !info.toself;
                    return info.selectTarget[0] != 1 || info.selectTarget[1] != 1;
                } else {
                    if (info.selectTarget < 0) return !info.toself;
                    return info.selectTarget != 1;
                }
            }
            return false;
        },
        filter(event, player) {
            if (event.name == 'chooseToUse') {
                if (!player.countCards('he', (card) => lib.skill.hokmanyouzhiqiang.filterxCard(card)) || event.type == 'wuxie') return false;
                return get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        if (type != 'basic' && type != 'trick') return false;
                        if (type == 'trick' && (!infox || !infox.filterTarget)) return false;
                        return (type != 'basic') == (player.storage.olxuanzhu || false);
                    })
                    .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
            }
            if (!event.targets || !event.targets.length) return false;
            const history = player.getHistory('useCard');
            const index = history.indexOf(event) - 1;
            if (index < 0) return false;
            const evt = history[index];
            if (!evt || !evt.targets || !evt.targets.length) return false;
            for (let i = 0; i < event.targets.length; i++) {
                if (evt.targets.includes(event.targets[i])) return true;
            }
            return false;
        },
        async content(event, trigger, player) {
            const targets = game.filterPlayer((target) => {
                return player.getLastUsed(1).targets.includes(target) && trigger.targets.includes(target);
            });
            for (const target of targets) {
                target.addTempSkill('hokmanyouzhiqiang_blocker');
            }
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        if (type != 'basic' && type != 'trick') return false;
                        if (type == 'trick' && (!infox || !infox.filterTarget)) return false;
                        return true;
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                return ui.create.dialog('漫游之枪', [list, 'vcard']);
            },
            check(button) {
                if (_status.event.parent.type != 'phase') return 1;
                return get.event('player').getUseValue({ name: button.link[2], nature: button.link[3] });
            },
            backup(links, player) {
                let next = {
                    audio: 'hokmanyouzhiqiang',
                    filterCard(card) {
                        return lib.skill.hokmanyouzhiqiang.filterxCard(card);
                    },
                    popname: true,
                    check(card) {
                        return 1 / (get.value(card) || 0.5);
                    },
                    position: 'he',
                    ignoreMod: true,
                    async precontent(event, trigger, player) { },
                };
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
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
            prompt(links, player) {
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
                };
                const str = '将一张额定目标数大于1的牌当' + (get.translation(links[0][3]) || '') + '【' + get.translation(links[0][2]) + '】';
                return str + (get.info('xunshi').isXunshi(viewAs) ? '(仅能指定一个目标)' : '');
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name) || !player.countCards('he', (card) => lib.skill.hokmanyouzhiqiang.filterxCard(card))) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    if (type != 'basic' && type != 'trick') return false;
                    if (type == 'trick' && (!infox || !infox.filterTarget)) return false;
                    return true;
                })
                .map((card) => card[2])
                .includes(name);
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
                            if (type == 'trick' && (!infox || !infox.filterTarget)) return false;
                            return true;
                        })
                        .map((card) => {
                            return { name: card[2], nature: card[3] };
                        })
                        .filter((card) => player.getUseValue(card, true, true) > 0);
                    if (!list.length) return 0;
                    list.sort((a, b) => {
                        const getNum = function (card) {
                            if (get.info('xunshi').isXunshi(card))
                                return get.effect(
                                    game
                                        .filterPlayer((target) => {
                                            return player.canUse(card, target, true, true);
                                        })
                                        .sort((a, b) => get.effect(b, card, player, player) - get.effect(a, card, player, player))[0],
                                    card,
                                    player,
                                    player
                                );
                            return player.getUseValue(card, true, true);
                        };
                        return (getNum(b) || 0) - (getNum(a) || 0);
                    });
                    return get.order(list[0], player) * 0.99;
                }
                return 0.001;
            },
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag, arg) {
                if (arg == 'respond') return false;
                const name = tag == 'respondSha' ? 'sha' : 'shan';
                return get.info('olxuanzhu').hiddenCard(player, name);
            },
            result: {
                player: 1,
            },
        },
        mod: {
            aiOrder(player, card, num) {
                if (typeof card == 'object' && player == _status.currentPhase) {
                    const evt = player.getLastUsed();
                    if (evt && evt.card && get.is.jishi(evt.card)) {
                        const info = lib.card[card.name];
                        if (info.selectTarget != undefined) {
                            if (info.selectTarget[0] < 0 && !info.toself) return num + 10;
                        }
                        if (get.type(card) == 'equip') return num - 5;
                    }
                }
            },
        },
        subSkill: {
            backup: {},
            blocker: {
                mark: true,
                marktext: '※',
                intro: {
                    name: '防御破坏',
                    content: `防具失效`,
                },
                ai: {
                    unequip2: true,
                },
            },
        },
    },
    hokxunjie: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['shaMiss', 'useCardToExcluded', 'eventNeutralized', 'shaCancelled', 'damageCancelled', 'damageZero', 'damageAfter'],
        },
        forced: true,
        filter(event, player, name) {
            if (!get.info('hokxunjie').filterx(event, player)) return false;
            if (name.startsWith('damage')) {
                if (name == 'damageCancelled') return true;
                return event.change_history.some((i) => i < 0);
            }
            return event.card;
        },
        filterx(event, player) {
            return player.countCards('he', function (card) {
                return player.canRecast(card);
            });
        },
        async content(event, trigger, player) {
            if (!player.hasCard((card) => player.canRecast(card), 'h')) return;
            const { bool, cards } = await player
                .chooseCard('hes', true)
                .set('filterCard', (card) => {
                    const player = get.player();
                    return player.canRecast(card);
                })
                .set('prompt', `###你发动了${get.translation(event.name)}###选择重铸一张牌`)
                .set('ai', (card) => {
                    const player = get.player();
                    return 6 - get.value(card);
                })
                .forResult();
            if (bool) {
                await player.recast(cards);
                player.markSkill(event.name);
                const history = player.getAllHistory('useSkill', (evt) => evt.skill == event.name);
                player.addTip(event.name, get.translation(event.name) + ' ' + history.length);
                if (history.length % 3 == 0) {
                    const sha = new lib.element.VCard({ name: 'sha', nature: Math.random() <= 0.5 ? 'ice' : 'fire' });
                    if (player.hasUseTarget(sha)) await player.chooseUseTarget(sha, true);
                }
            }
        },
        mod: {
            aiValue(player, card, num) {
                if (['hanbing', 'baiyin'].includes(card.name)) return (num += 1.5);
            },
        },
        onremove(player, skill) {
            player.removeTip(skill);
        },
        intro: {
            markcount(storage, player) {
                const history = player.getAllHistory('useSkill', (evt) => evt.skill == 'hokxunjie');
                return `${history.length}`;
            },
            content(storage, player, skill) {
                const history = player.getAllHistory('useSkill', (evt) => evt.skill == skill);
                return `<迅捷>重铸牌的次数:${history.length}`;
            },
        },
    },
    hoktaotuo: {
        audio: 'ext:王者荣耀/audio:2',
        init: (player, skill) => player.initShunfaji(skill),
        forced: true,
        popup: false,
        clickable(player) {
            if (get.info('hoktaotuo').clickableFilter(player)) {
                get.info('hoktaotuo').clickableContent(player, 'hoktaotuo');
            }
        },
        clickableFilter(player) {
            if (player.hasSkill('hoktaotuo_used')) return false;
            return !player.storage.hoktaotuo;
        },
        clickableFilterTime: 1200,
        clickableContent(player, skill) {
            player.addTempSkill('hoktaotuo_begin');
            player.setStorage('hoktaotuo', true);
            setTimeout(function () {
                player.addTempSkill('hoktaotuo_used', 'roundStart');
            }, get.info('hoktaotuo').clickableFilterTime);
        },
        content() { },
        group: 'hoktaotuo_autoai',
        subSkill: {
            used: {
                charlotte: true,
            },
            begin: {
                trigger: {
                    player: 'damageBegin4',
                    target: 'useCardToTargeted',
                },
                forced: true,
                popup: false,
                _priority: 999,
                charlotte: true,
                filter(event, player) {
                    if (player.hasSkill('hoktaotuo_used')) return false;
                    return player.storage.hoktaotuo;
                },
                async content(event, trigger, player) {
                    player.addTempSkill('hoktaotuo_used', 'roundStart');
                    switch (trigger.name) {
                        case 'damage':
                            {
                                try {
                                    trigger.cancel();
                                    game.log(player, '防止此次伤害');
                                } catch (e) {
                                    console.log('瞬发技【逃脱>使用失效');
                                }
                            }
                            break;
                        default:
                            {
                                try {
                                    trigger.parent.excluded.add(player);
                                    game.log(trigger.card, '对', player, '无效');
                                } catch (e) {
                                    console.log('瞬发技【逃脱>使用失效');
                                }
                            }
                            break;
                    }
                    delete player.storage.hoktaotuo;
                },
            },
            autoai: {
                trigger: {
                    player: 'damageBegin4',
                    target: 'useCardToTargeted',
                },
                popup: false,
                filter(event, player) {
                    return (_status.auto || !player.isUnderControl(true)) && !player.hasSkill('hoktaotuo_used');
                },
                check(event, player) {
                    if (event.name == 'damage') {
                        return get.damageEffect(player, event.source, player, event.nature) <= 0;
                    }
                    if (event.parent.excluded.includes(player)) return false;
                    if (get.attitude(player, event.player) > 0) return false;
                    let evt = event.parent,
                        effect = get.effect(player, event.card, event.player, player),
                        directHit = (evt.nowuxie && get.type(event.card, 'trick') === 'trick') || (evt.directHit && evt.directHit.includes(player)) || (evt.customArgs && evt.customArgs.default && evt.customArgs.default.directHit2);
                    if (get.tag(event.card, 'respondSha')) {
                        if (directHit || player.countCards('h', { name: 'sha' }) === 0) return effect <= 0;
                    } else if (get.tag(event.card, 'respondShan')) {
                        if (directHit || player.countCards('h', { name: 'shan' }) === 0) return effect <= 0;
                    } else if (get.tag(event.card, 'damage')) {
                        if (event.card.name === 'huogong') return event.player.countCards('h') > 4 - player.hp - player.hujia;
                        if (event.card.name === 'shuiyanqijunx') return player.countCards('e') === 0;
                        return true;
                    } else if (player.hp > 2) {
                        if (event.card.name === 'shunshou' || (event.card.name === 'zhujinqiyuan' && (event.card.yingbian || get.distance(event.player, player) < 0))) return effect <= 0;
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    player.addTempSkill('hoktaotuo_used', 'roundStart');
                    switch (trigger.name) {
                        case 'damage':
                            {
                                try {
                                    trigger.cancel();
                                    game.log(player, '防止此次伤害');
                                } catch (e) {
                                    console.log('瞬发技【逃脱>使用失效');
                                }
                            }
                            break;
                        default:
                            {
                                try {
                                    trigger.parent.excluded.add(player);
                                    game.log(trigger.card, '对', player, '无效');
                                } catch (e) {
                                    console.log('瞬发技【逃脱>使用失效');
                                }
                            }
                            break;
                    }
                    delete player.storage.hoktaotuo;
                },
            },
        },
    },
    hokzhenyan: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.idlist = Object.keys(lib.skill.hokzhenyan.subSkill);
            event.imglist = [13400, 13410, 13420, 13430];
            event.heroid = 134;
            event.titlelist = event.idlist.map((info) => get.info(`hokzhenyan_${info}`).marktext);
            event.deslist = ['第1、2张牌数值+1', '修改第3、4张牌', '获得第1、3张实体牌', '视为使用第2、4张牌'];
            game.broadcastAll(
                function (event, skill) {
                    const mbdialog = new ui.create.mobileDialog(event, skill);
                    mbdialog.area();
                    mbdialog.addTip(`你可发动<span style='color: #a4dfd5'>真言</span>,选择至多两项增益`);
                },
                event,
                event.name.slice(0, -5)
            );
            const { bool, links } = await player
                .chooseButton(event.dialog)
                .set('selectButton', [1, 2])
                .set('ai', function (button) {
                    const player = get.player();
                    const zhenyan = lib.skill.hokzhenyan.subSkill;
                    return zhenyan[button.link].ai2(player);
                })
                .set('closeDialog', true)
                .set('complexSelect', true)
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            const links = event.cost_data.links;
            for (let i of links) player.addTempSkill('hokzhenyan_' + i, { player: 'phaseUseEnd' });
        },
        subSkill: {
            xinjing: {
                audio: 'hokzhenyan',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    const evt = event.getParent('phaseUse');
                    if (!evt || evt.player != player) return false;
                    const index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    return index == 0 || index == 1;
                },
                async content(event, trigger, player) {
                    trigger.baseDamage++;
                },
                ai2(player) {
                    var num = player.countCards('hs', (card) => player.hasUseTarget(card) && player.getUseValue(card) > 0);
                    return game.hasPlayer(function (target) {
                        return player.hasCard(function (card) {
                            return player.canUse(card, target, false) && player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                        }, 'hs'); //QQQ
                    }) > 0
                        ? 2
                        : 0.7;
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                            if (history.length < 4 && !get.is.jishi(card)) return num - 15;
                            if (history.length == 0 || history.length == 1) {
                                if (history.length == 0 && get.is.jishi(card)) return (num += 4);
                                if (history.length == 1 && get.tag(card, 'damage')) return (num += 12);
                                if (history.length == 1 && get.tag(card, 'recover') && player.getDamagedHp() > 1) return (num += 7.6);
                                if (get.type(card) == 'equip') return num - 10;
                            }
                        }
                    },
                },
                charlotte: true,
                mark: true,
                marktext: '心经',
                intro: {
                    name: '心经',
                    markcount: () => '①②',
                    content: '使用第一、第二张牌时,此牌的伤害值或回复值+1',
                },
            },
            wuxiang: {
                audio: 'hokzhenyan',
                trigger: {
                    player: 'useCard',
                },
                charlotte: true,
                filter(event, player) {
                    const evt = event.getParent('phaseUse');
                    if (!evt || evt.player != player) return false;
                    const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                    const index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    if (index != 2 && index != 3) return false;
                    const card = index == 2 ? history[0].card : history[1].card;
                    return event.targets.some((target) => player.canUse(card.name, target, false));
                },
                prompt2(event, player) {
                    const evt = event.getParent('phaseUse');
                    const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                    const index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    const card = index == 2 ? history[0].card : history[1].card;
                    const targets = event.targets.filter((target) => player.canUse(card, target));
                    return '将' + get.translation(event.card) + '改为对' + get.translation(targets) + '使用' + get.translation(card);
                },
                check(event, player) {
                    const evt = event.getParent('phaseUse');
                    const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                    const index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    const card = index == 2 ? history[0].card : history[1].card;
                    const effect1 = event.targets.forEach((target) => get.effect(target, card, player, player));
                    const effect2 = event.targets.forEach((target) => get.effect(target, card, player, player));
                    return effect2 > effect1;
                },
                async content(event, trigger, player) {
                    const evt = trigger.getParent('phaseUse');
                    const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                    const index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(trigger);
                    const card = index == 2 ? history[0].card : history[1].card;
                    const targets = event.targets.filter((target) => player.canUse(card, target));
                    trigger.card = card;
                    trigger.targets = targets;
                },
                ai2(player) {
                    return player.countCards('hs', (card) => player.hasUseTarget(card) && player.getUseValue(card) > 0) > 3 ? 1.6 : 0.5;
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            var history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                            if (history.length < 4 && !get.is.jishi(card)) return num - 15;
                            if (history.length == 2 || history.length == 3) {
                                if (get.type(card) == 'equip' || card.name == 'jiedao') return num - 10;
                            }
                        }
                    },
                },
                charlotte: true,
                mark: true,
                marktext: '无相',
                intro: {
                    name: '无相',
                    markcount: () => '③④',
                    content: '使用第三、第四张牌时,可以改为第一、第二张牌',
                },
            },
            mingwang: {
                audio: 'hokzhenyan',
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    var evt = event.getParent('phaseUse');
                    if (!evt || evt.player != player) return false;
                    var index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    return index == 0 || index == 2;
                },
                async content(event, trigger, player) {
                    const cards = trigger.cards.filterInD();
                    if (cards.length) player.gain(cards, 'gain2');
                },
                ai2(player) {
                    return player.countCards('hs', (card) => player.hasUseTarget(card) && player.getUseValue(card) > 0) > 2 ? 2 : 0.5;
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                            if (history.length < 4 && !get.is.jishi(card)) return num - 15;
                            if (history.length == 0 || history.length == 2) {
                                const info = lib.card[card.name];
                                if (info.selectTarget != undefined) {
                                    if (info.selectTarget[0] < 0 && !info.toself) return num + 8;
                                }
                                if (get.type(card) == 'equip') return num - 5;
                            }
                        }
                    },
                },
                charlotte: true,
                mark: true,
                marktext: '明王',
                intro: {
                    name: '明王',
                    markcount: () => '①③',
                    content: '使用第一、第三张牌后,你获得对应的所有实体牌',
                },
            },
            pudu: {
                audio: 'hokzhenyan',
                trigger: {
                    player: 'useCardAfter',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    var evt = event.getParent('phaseUse');
                    if (!evt || evt.player != player) return false;
                    var index = player
                        .getHistory('useCard', function (evtx) {
                            return evtx.getParent('phaseUse') == evt;
                        })
                        .indexOf(event);
                    return (index == 1 || index == 3) && [player.next, player.previous].some((targetx) => lib.filter.targetEnabled2(event.card, player, targetx));
                },
                async cost(event, trigger, player) {
                    const card = {
                        name: trigger.card.name,
                        nature: trigger.card.nature,
                    };
                    const getTargets = game.filterPlayer((target) => {
                        return get.distance(player, target, 'pure') == 1 && lib.filter.targetEnabled2(card, player, target);
                    });
                    if (!getTargets.length) return;
                    const { bool, targets } = await player
                        .chooseTarget()
                        .set('cardx', card)
                        .set('getTargets', getTargets)
                        .set('filterTarget', function (cardx, player, target) {
                            return get.event('getTargets').includes(target);
                        })
                        .set('prompt', `普渡:你可以视为对上家或下家使用${get.translation(card)}`)
                        .set('ai', function (target) {
                            const player = get.player(),
                                card = get.event('cardx');
                            return get.effect(target, card, player, player);
                        })
                        .forResult();
                    if (bool) event.result = { bool, cost_data: { card, targets } };
                },
                async content(event, trigger, player) {
                    const card = event.cost_data.card,
                        target = event.cost_data.targets[0];
                    player.useCard(card, target, false, 'hokzhenyan_pudu');
                },
                ai2(player) {
                    if (game.countPlayer() < 3) return 0;
                    return player.countCards('hs', (card) => player.hasUseTarget(card) && player.getUseValue(card) > 0) > 1 ? 1.2 : 0.3;
                },
                mod: {
                    aiOrder(player, card, num) {
                        if (typeof card == 'object' && player == _status.currentPhase) {
                            const history = player.getHistory('useCard', (evt) => evt.isPhaseUsing());
                            if (history.length < 4 && !get.is.jishi(card)) return num - 15;
                            if (history.length == 1 || history.length == 3) {
                                const info = lib.card[card.name];
                                if (info.selectTarget != undefined) {
                                    if (info.selectTarget[0] < 0 && !info.toself) return num + 8;
                                }
                                if (get.type(card) == 'equip') return num - 5;
                            }
                        }
                    },
                },
                charlotte: true,
                mark: true,
                marktext: '普渡',
                intro: {
                    name: '普渡',
                    markcount: () => '②④',
                    content: '使用第二、第四张牌后,可以再视为对上下家使用',
                },
            },
        },
    },
    hokxianzhenzhizhi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'changeHp',
        },
        forced: true,
        xushiSkill: true,
        filter(event, player) {
            return event.num < 0 && player.getHp() == 1;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            var next = game.createEvent('hokxianzhenzhizhi');
            next.player = player;
            next.setContent(get.info('hokxianzhenzhizhi').contentx);
        },
        async contentx(event, trigger, player) {
            const list = get.info('hokxianzhenzhizhi').getList(player);
            const index = event._hokxianzhenzhizhi_backupx;
            const backups = list.map((info) => get.info('hokxianzhenzhizhi').backups.get(info));
            const deslist = backups.map((info) => info.description(event, player));
            game.broadcastAll(
                function (event, list, deslist) {
                    const dialog = ui.create.dialog();
                    dialog.id = 'mobiledialog';
                    dialog.classList.add('noupdate');
                    dialog.style.height = 200 + 'px';
                    for (let i = 0; i < 4; i++) {
                        const area = ui.create.div('.sgs-xingshangarea', dialog);
                        area.style.left = 22 + (i % 2) * 30.8 + '%';
                        area.style.top = (i > 1 ? 46 : 3) + '%';
                        area.link = list[i];
                        dialog.buttons.add(area);
                        area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                        const des = ui.create.div('.xingshang-skillTips', area);
                        des.innerHTML = deslist[i];
                        des.style.fontSize = '25px';
                    }
                    const tishi = ui.create.div('.skillTishi', dialog);
                    tishi.innerHTML = `你发动了<span style='color: #a4dfd5'>${get.translation(event.name)}</span>,选择一项执行 `;
                    const skillTitle = ui.create.div('.game_skill_title', dialog);
                    skillTitle.classList.add('ssTitle');
                    skillTitle.innerHTML = get.translation(event.name);
                    const arrow = new Image();
                    arrow.classList.add('game_skill_arrow');
                    arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                    skillTitle.appendChild(arrow);
                    event.dialog = dialog;
                },
                event,
                list,
                deslist
            );
            const { bool, links } = await player
                .chooseButton(event.dialog, true)
                .set('index', index)
                .set('filterButton', (button) => {
                    const player = get.player(),
                        list = get.info('hokxianzhenzhizhi').getList(player),
                        linkIndex = list.indexOf(button.link),
                        index = get.event('index');
                    if (!index) return true;
                    switch (index - 1) {
                        case 0:
                            return linkIndex == 1;
                        case 1:
                            return [0, 2].includes(linkIndex);
                        case 2:
                            return [1, 3].includes(linkIndex);
                        case 3:
                            return linkIndex == 2;
                    }
                })
                .set('ai', (button) => {
                    const player = get.player(),
                        info = get.info('hokxianzhenzhizhi').getList(player);
                    switch (button.link) {
                        case 'recover': {
                            return get.recoverEffect(player, player, player) * (info.indexOf(button.link) + 1);
                        }
                        case 'damage': {
                            const list = game
                                .filterPlayer()
                                .map((current) => {
                                    const _hp = current.hp,
                                        _maxhp = current.maxHp;
                                    current.hp = 100;
                                    current.maxHp = 100;
                                    const att = -get.sgnAttitude(player, current);
                                    let val = get.damageEffect(current, player, current) * att;
                                    current.getSkills(null, false, false).forEach((skill) => {
                                        const info = get.info(skill);
                                        if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? 'max' : 'min'](val > 0 ? 0.1 : -0.1, val + 2 * att);
                                    });
                                    const eff = 100 / val + 15;
                                    current.hp = _hp;
                                    current.maxHp = _maxhp;
                                    return [current, eff];
                                })
                                .sort((a, b) => b[1] - a[1])[0];
                            return list[0][1];
                        }
                        case 'draw': {
                            return get.effect(player, { name: 'draw' }, player, player) * (info.indexOf(button.link) + 1);
                        }
                        case 'enableEquip': {
                            return player.countDisabled() * (info.indexOf(button.link) + 1);
                        }
                    }
                })
                .set('closeDialog', true)
                .forResult();
            if (bool) {
                const linkIndex = list.indexOf(links[0]);
                game.broadcastAll(
                    (backups, links, index) => {
                        lib.skill[`hokxianzhenzhizhi_${links[0]}`] = get.copy(backups[index]);
                        lib.skill[`hokxianzhenzhizhi_${links[0]}`].sourceSkill = 'hokxianzhenzhizhi';
                    },
                    backups,
                    links,
                    linkIndex
                );
                const next = player.chooseToUse();
                next.set('forced', true);
                next.set('openskilldialog', `${deslist[linkIndex]}`);
                next.set('norestore', true);
                next.set('_backupevent', `hokxianzhenzhizhi_${links[0]}`);
                next.set('custom', {
                    add: {},
                    replace: { window() { } },
                });
                next.backup(`hokxianzhenzhizhi_${links[0]}`);
                await next;
                if (index) {
                    const tempIndex = player.storage.hokxianzhenzhizhi[index - 1];
                    player.storage.hokxianzhenzhizhi[index - 1] = player.storage.hokxianzhenzhizhi[linkIndex];
                    player.storage.hokxianzhenzhizhi[linkIndex] = tempIndex;
                }
            }
        },
        backups: new Map([
            [
                'recover',
                {
                    filter(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('recover') + 1;
                        return player.getHp() >= info;
                    },
                    description(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('recover') + 1;
                        return `${!event._reverse ? '回复' : '失去'}${info}点体力`;
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    async content(event, trigger, player) {
                        const num = player.storage.hokxianzhenzhizhi.indexOf('recover') + 1;
                        if (event.name != 'hokpofuchenzhou_backup') {
                            await player.recover(num);
                        } else {
                            if (event.name == 'hokxianzhenzhizhi_backupx') return;
                            await player.loseHp(num);
                            var next = game.createEvent('hokxianzhenzhizhi_backupx');
                            next.player = player;
                            next._hokxianzhenzhizhi_backupx = num;
                            next.setContent(get.info('hokxianzhenzhizhi').contentx);
                        }
                    },
                },
            ],

            [
                'damage',
                {
                    filter(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('damage') + 1;
                        return true;
                    },
                    description(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('damage') + 1;
                        return `${!event._reverse ? '分配' : '受到'}${info}点伤害`;
                    },
                    filterTarget(card, player, target) {
                        if (get.event('_reverse')) return target == player;
                        return true;
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    async content(event, trigger, player) {
                        const num = player.storage.hokxianzhenzhizhi.indexOf('damage') + 1;
                        await event.targets[0].damage(num);
                        if (event.name == 'hokxianzhenzhizhi_backupx') return;
                        if (event.targets[0] == player) {
                            var next = game.createEvent('hokxianzhenzhizhi_backupx');
                            next.player = player;
                            next._hokxianzhenzhizhi_backupx = num;
                            next.setContent(get.info('hokxianzhenzhizhi').contentx);
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target(player, target) {
                                if (get.event('_reverse')) return 1;
                                return get.damageEffect(target, player, target);
                            },
                        },
                    },
                },
            ],

            [
                'draw',
                {
                    filter(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('draw') + 1;
                        return player.countCards('he') >= info;
                    },
                    description(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('draw') + 1;
                        return `${!event._reverse ? '摸' : '弃'}${info}张牌`;
                    },
                    filterCard(card) {
                        if (get.event()._reverse) return true;
                        return false;
                    },
                    selectCard() {
                        const player = get.player();
                        if (get.event()._reverse) return player.storage.hokxianzhenzhizhi.indexOf('draw') + 1;
                        return -1;
                    },
                    async content(event, trigger, player) {
                        const num = player.storage.hokxianzhenzhizhi.indexOf('draw') + 1;
                        if (event.name != 'hokpofuchenzhou_backup') {
                            await player.draw(num);
                        } else {
                            if (event.name == 'hokxianzhenzhizhi_backupx') return;
                            var next = game.createEvent('hokxianzhenzhizhi_backupx');
                            next.player = player;
                            next._hokxianzhenzhizhi_backupx = num;
                            next.setContent(get.info('hokxianzhenzhizhi').contentx);
                        }
                    },
                },
            ],

            [
                'enableEquip',
                {
                    filter(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('enableEquip') + 1;
                        return player.countEnabledSlot() >= info;
                    },
                    description(event, player) {
                        const info = player.storage.hokxianzhenzhizhi.indexOf('enableEquip') + 1;
                        return `${!event._reverse ? '回复' : '废除'}${info}个装备栏`;
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    async content(event, trigger, player) {
                        const num = player.storage.hokxianzhenzhizhi.indexOf('enableEquip') + 1;
                        if (event.name != 'hokpofuchenzhou_backup') {
                            let equips = [];
                            for (let i = 1; i < 6; i++) {
                                if (player.hasEnabledSlot(i)) continue;
                                for (let j = 1; j <= player.countDisabledSlot(i); j++) {
                                    equips.push([i, get.translation('equip' + i)]);
                                }
                            }
                            if (!equips.length) return;
                            if (num >= equips.length) event.result = { bool: true, links: equips };
                            else {
                                const skills = ['武器区', '防具区', '坐骑区', '宝物区'],
                                    slots = [1, 2, [3, 4], 5];
                                game.broadcastAll(
                                    function (player, event, skills) {
                                        const dialog = ui.create.dialog();
                                        dialog.id = 'mobiledialog';
                                        dialog.classList.add('noupdate');
                                        dialog.style.height = 200 + 'px';
                                        if (!event.isMine()) {
                                            dialog.style.display = 'none';
                                        }
                                        for (let i = 0; i < 4; i++) {
                                            const area = ui.create.div('.sgs-drlt_duorui_area', dialog);
                                            area.style.left = 10 + i * 20 + '%';
                                            const skillName = ui.create.div('.skillName', area);
                                            skillName.link = slots[i];
                                            const skillitem = ui.create.div('.skillitem', skillName);
                                            skillitem.innerHTML = skills[i];
                                            dialog.buttons.add(skillName);
                                            skillName.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        }
                                        const tishi = ui.create.div('.skillTishi', dialog);
                                        tishi.innerHTML = `你发动了<span style='color: #a4dfd5'>破釜沉舟</span>,选择回复${num}个装备栏`;
                                        tishi.style.top = '45%';
                                        const skillTitle = ui.create.div('.game_skill_title', dialog);
                                        skillTitle.innerHTML = '破釜沉舟';
                                        skillTitle.classList.add('ssTitle');
                                        const arrow = new Image();
                                        arrow.classList.add('game_skill_arrow');
                                        arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                                        skillTitle.appendChild(arrow);
                                        event.dialog = dialog;
                                    },
                                    player,
                                    event,
                                    skills
                                );
                                const { bool, links } = await player
                                    .chooseButton(event.dialog, true)
                                    .set('filterButton', (button) => {
                                        const player = get.player();
                                        return player.hasDisabledSlot(Array.isArray(button.link) ? 'horse' : button.link);
                                    })
                                    .set('closeDialog', true)
                                    .set('numx', [num, equips.length])
                                    .set('selectButton', () => {
                                        return Math.min(...get.event('numx'));
                                    })
                                    .set('ai', (button) => {
                                        const player = get.event().player;
                                        return 1;
                                    })
                                    .forResult();
                                event.result = { bool: bool, links: links };
                            }
                            const bool = event.result.bool,
                                links = event.result.links;
                            if (bool) {
                                await player.enableEquip(links.flat());
                            }
                        } else {
                            if (event.name == 'hokxianzhenzhizhi_backupx') return;
                            let equips = [];
                            for (let i = 1; i < 6; i++) {
                                for (let j = 1; j <= player.countEnabledSlot(i); j++) {
                                    equips.add([i, get.translation('equip' + i)]);
                                }
                            }
                            if (!equips.length) return;
                            if (num >= equips.length) event.result = { bool: true, links: equips };
                            else {
                                const skills = ['武器区', '防具区', '坐骑区', '宝物区'],
                                    slots = [1, 2, [3, 4], 5];
                                game.broadcastAll(
                                    function (player, event, skills) {
                                        const dialog = ui.create.dialog();
                                        dialog.id = 'mobiledialog';
                                        dialog.classList.add('noupdate');
                                        dialog.style.height = 220 + 'px';
                                        if (!event.isMine()) {
                                            dialog.style.display = 'none';
                                        }
                                        for (let i = 0; i < 4; i++) {
                                            const area = ui.create.div('.sgs-drlt_duorui_area', dialog);
                                            area.style.left = 10 + i * 20 + '%';
                                            const skillName = ui.create.div('.skillName', area);
                                            skillName.link = slots[i];
                                            const skillitem = ui.create.div('.skillitem', skillName);
                                            skillitem.innerHTML = skills[i];
                                            dialog.buttons.add(skillName);
                                            skillName.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        }
                                        const tishi = ui.create.div('.skillTishi', dialog);
                                        tishi.innerHTML = `你发动了<span style='color: #a4dfd5'>破釜沉舟</span>,选择废除${num}个装备栏`;
                                        tishi.style.top = '45%';
                                        const skillTitle = ui.create.div('.game_skill_title', dialog);
                                        skillTitle.innerHTML = '破釜沉舟';
                                        skillTitle.classList.add('ssTitle');
                                        const arrow = new Image();
                                        arrow.classList.add('game_skill_arrow');
                                        arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                                        skillTitle.appendChild(arrow);
                                        event.dialog = dialog;
                                    },
                                    player,
                                    event,
                                    skills
                                );
                                const { bool, links } = await player
                                    .chooseButton(event.dialog, true)
                                    .set('filterButton', (button) => {
                                        const player = get.player();
                                        return player.hasEnabledSlot(Array.isArray(button.link) ? 'horse' : button.link);
                                    })
                                    .set('closeDialog', true)
                                    .set('numx', [num, equips.length])
                                    .set('selectButton', (button) => {
                                        return Math.min(...get.event('numx'));
                                    })
                                    .set('ai', (button) => {
                                        const player = get.player();
                                        return 1 + Math.random();
                                    })
                                    .forResult();
                                event.result = { bool: bool, links: links };
                            }
                            const bool = event.result.bool,
                                links = event.result.links;
                            if (bool) {
                                await player.disableEquip(links.flat());
                                var next = game.createEvent('hokxianzhenzhizhi_backupx');
                                next.player = player;
                                next._hokxianzhenzhizhi_backupx = num;
                                next.setContent(get.info('hokxianzhenzhizhi').contentx);
                            }
                        }
                    },
                },
            ],
        ]),
        getList(player) {
            if (!player.storage.hokxianzhenzhizhi) return ['recover', 'damage', 'draw', 'enableEquip'];
            return player.storage.hokxianzhenzhizhi.slice(0);
        },
        init(player, skill) {
            player.storage[skill] = get.info(skill).getList(player);
        },
        subSkill: {
            backup: {},
            backupx: {},
        },
    },
    hokpofuchenzhou: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        chooseButton: {
            dialog(event, player) {
                event._reverse = true;
                const list = get.info('hokxianzhenzhizhi').getList(player);
                const descriptions = list.map((info) => get.info('hokxianzhenzhizhi').backups.get(info));
                const deslist = descriptions.map((info) => `${info.description(event, player)}`);
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('noupdate');
                dialog.style.height = 200 + 'px';
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = get.translation('hokpofuchenzhou');
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                for (let i = 0; i < 4; i++) {
                    const area = ui.create.div('.sgs-xingshangarea', dialog);
                    area.style.left = 22 + (i % 2) * 30.8 + '%';
                    area.style.top = (i > 1 ? 46 : 3) + '%';
                    area.link = list[i];
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    const des = ui.create.div('.xingshang-skillTips', area);
                    des.innerHTML = deslist[i];
                    des.style.fontSize = '22px';
                    const markcount = ui.create.div('.xingshang-markcount', area);
                    markcount.innerHTML = i + 1;
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = `你可发动<span style='color: #a4dfd5'>${get.translation('hokpofuchenzhou')}</span>,执行一项,反向执行邻项,最后交换这两项`;
                return dialog;
            },
            filter(button, player) {
                return get.info('hokxianzhenzhizhi').backups.get(button.link).filter(event, player);
            },
            check(button) {
                const player = get.player(),
                    list = get.info('hokxianzhenzhizhi').getList(player),
                    index = list.indexOf(button.link) + 1;
                switch (button.link) {
                    case 'recover': {
                        game.log(get.effect(player, { name: 'losehp' }, player, player) * index);
                        return get.effect(player, { name: 'losehp' }, player, player) * index;
                    }
                    case 'damage': {
                        return get.damageEffect(player, player, player) * index;
                    }
                    case 'draw': {
                        return (
                            player.countCards('he', function (card) {
                                return get.value(card) < 6;
                            }) - index
                        );
                    }
                    case 'enableEquip': {
                        return index;
                    }
                }
            },
            backup(links) {
                const backups = get.info('hokxianzhenzhizhi').backups;
                const next = get.copy(backups.get(links[0]));
                next.audio = 'hokpofuchenzhou';
                return next;
            },
            prompt(links) {
                let event = get.event(),
                    player = get.player();
                event._reverse = true;
                return get.info('hokxianzhenzhizhi').backups.get(links[0]).description(event, player);
            },
        },
        ai: {
            combo: 'hokxianzhenzhizhi',
            order: 10,
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
    hoktianmingzhinv: {
        derivation: 'tianming',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseUseEnd',
        },
        forced: true,
        filter(event, player) {
            return !game.hasPlayer2((current) => {
                return (
                    current != player &&
                    current.hasHistory('useCard', function (evt) {
                        return evt.getParent('phaseUse') == event && evt.targets && evt.targets.includes(player);
                    })
                );
            });
        },
        async content(event, trigger, player) {
            player.useSkill('tianming');
        },
        ai: {
            threaten(player, target) {
                if (
                    !game.hasPlayer2((current) => {
                        return (
                            current != target &&
                            current.hasHistory('useCard', function (evt) {
                                return evt.targets && evt.targets.includes(target);
                            })
                        );
                    })
                )
                    return 3.5;
                return 2;
            },
        },
    },
    hoknvdiweiyan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCard',
        },
        popup: false,
        filter(event, player) {
            if (!get.is.jishi(event.card) || event.player == player) return false;
            return player.countCards('h', function (card) {
                return lib.filter.cardDiscardable(card, player, 'hoknvdiweiyan');
            });
        },
        async cost(event, trigger, player) {
            var effect = 0,
                prompt = `###${get.prompt(event.name.slice(0, -5), trigger.player)}###你可以弃置全部的手牌并令${get.translation(trigger.player)}`;
            if (trigger.card.name == 'wuxie' || trigger.card.name == 'shan') {
                if (get.attitude(player, trigger.player) < -1) {
                    effect = -1;
                }
            } else if (trigger.targets && trigger.targets.length) {
                for (let i = 0; i < trigger.targets.length; i++) {
                    effect += get.effect(trigger.targets[i], trigger.card, trigger.player, player);
                }
            }
            if (trigger.targets && trigger.targets.length) prompt += '对' + get.translation(trigger.targets);
            prompt += '使用的' + get.translation(trigger.card) + '失效？';
            event.result = await player
                .chooseBool(prompt)
                .set('ai', function () {
                    const player = get.player(),
                        trigger = _status.event.getTrigger();
                    if (
                        player.countCards('h', function (card) {
                            return get.value(card) > 8.5;
                        }) > 2
                    )
                        return false;
                    if (get.event('effect') < 0) {
                        if (trigger.card.name == 'sha') {
                            var target = trigger.targets[0];
                            if (target == player) {
                                return !player.countCards('h', 'shan') || player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1;
                            } else {
                                return target.getHp() == 1 || (target.countCards('h') <= 2 && target.getHp() <= 2);
                            }
                        } else {
                            return true;
                        }
                    }
                    return false;
                })
                .set('effect', effect)
                .forResult();
        },
        async content(event, trigger, player) {
            player.tempBanSkill('hoknvdiweiyan', 'roundStart', false);
            const cards = player.getCards('h', function (card) {
                return lib.filter.cardDiscardable(card, player, 'hoknvdiweiyan');
            });
            if (cards.length) {
                await player.discard(cards);
            }
            trigger.targets.length = 0;
            trigger.all_excluded = true;
            game.log(player, '取消了', trigger.card, '的所有目标');
        },
        ai: {
            threaten: 1.5,
            expose: 0.3,
            effect: {
                target(card, player, target, current) {
                    if (target.isTempBanned('hoknvdiweiyan')) return;
                    if (
                        !target.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, target, 'hoknvdiweiyan');
                        }, 'h')
                    )
                        return;
                    if (current < 0) return 0.7;
                },
            },
        },
    },
    hokshengshayuduo: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        xushiSkill: true,
        filterTarget: true,
        selectTarget: -1,
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.chooseToDebate(event.targets).set('callback', lib.skill.hokshengshayuduo.callback);
        },
        async callback(event, trigger, player) {
            var result = event.debateResult;
            if (result.bool && result.opinion) {
                if (result.red.map((i) => i[0]).includes(player)) {
                    const cards = result.red.map((i) => i[1]),
                        targets = result.black.map((i) => i[0]);
                    for (const target of targets) await target.damage();
                } else if (result.black.map((i) => i[0]).includes(player)) {
                    const cards = result.black.map((i) => i[1]),
                        targets = result.red.map((i) => i[0]);
                    for (const target of targets) await target.damage();
                }
            }
        },
        ai: {
            order: 8,
            result: {
                target(player, target) {
                    if (
                        !game.hasPlayer((target) => {
                            return get.attitude(player, target) < 0;
                        })
                    )
                        return 0;
                    return 0.5 - Math.random();
                },
            },
        },
    },
    hokshidaozunyan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['useCard', 'respond'],
        },
        forced: true,
        filter(event, player) {
            if (!Array.isArray(event.respondTo) || event.respondTo[0] == event.player || ![event.respondTo[0], event.player].includes(player)) return false;
            return event.card && event.respondTo[1];
        },
        async content(event, trigger, player) {
            var skills = player.getSkills(true, true).filter(function (skill) {
                var info = get.info(skill);
                if (!info || info.charlotte || info.xushiSkill) return false;
                var list = get.skillCategoriesOf(skill, player);
                return list.length == 0;
            }); //QQQ
            if (!skills.length) return;
            game.expandSkills(skills);
            var resetSkills = [];
            var suffixs = ['used', 'round', 'block', 'blocker'];
            for (var skill of skills) {
                var info = get.info(skill);
                if (info.usable !== undefined) {
                    if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                        delete player.getStat('triggerSkill')[skill];
                        resetSkills.add(skill);
                    }
                    if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                        delete player.getStat('skill')[skill];
                        resetSkills.add(skill);
                    }
                }
                if (info.round && player.storage[skill + '_roundcount']) {
                    delete player.storage[skill + '_roundcount'];
                    resetSkills.add(skill);
                }
                if (player.storage[`temp_ban_${skill}`]) {
                    delete player.storage[`temp_ban_${skill}`];
                }
                if (player.awakenedSkills.includes(skill)) {
                    player.restoreSkill(skill);
                    resetSkills.add(skill);
                }
                for (var suffix of suffixs) {
                    if (player.hasSkill(skill + '_' + suffix)) {
                        player.removeSkill(skill + '_' + suffix);
                        resetSkills.add(skill);
                    }
                }
            }
            if (resetSkills.length) {
                var str = '';
                for (const i of resetSkills) {
                    str += '【' + get.translation(i) + '】、';
                }
                game.log(player, '重置了技能', '#g' + str.slice(0, -1));
            }
        },
    },
    hokshengrenxunjie: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return game.hasPlayer(function (current) {
                return player.canCompare(current);
            });
        },
        filterTarget(card, player, target) {
            return player.canCompare(target);
        },
        async content(event, trigger, player) {
            player.chooseToCompare(event.targets).set('callback', lib.skill.hokshengrenxunjie.callback);
        },
        callback() {
            (event.num1 <= event.num2 ? player : target).addSkill('hokshengrenxunjie_effect', 'roundStart');
        },
        ai: {
            order: 7,
            result: {
                target(player, target) {
                    var num = ui.selected.targets.length + 1;
                    if (num > 3) num = 3;
                    var hs = player.getCards('h');
                    var ts = target.getCards('h');
                    if (ts.length < 2) return -2;
                    for (let i = 0; i < hs.length; i++) {
                        if (get.value(hs[i]) <= 6) {
                            switch (hs[i].number) {
                                case 13:
                                    return -1;
                                    break;
                                case 12:
                                    return -0.8;
                                    break;
                                case 11:
                                    return -0.7;
                                    break;
                                default:
                                    return -0.4;
                                    break;
                            }
                        }
                    }
                    return 0;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: ['chooseToUseBefore', 'chooseToRespondBefore'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (event.responded || !event.filterCard) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            return ['basic', 'trick'].includes(type) && player.countCards('h', { name: name });
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                async content(event, trigger, player) {
                    if (
                        get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                return ['basic', 'trick'].includes(type) && player.countCards('h', { name: name });
                            })
                            .some((card) => trigger.filterCard({ name: card[2], nature: card[3] }, player, trigger))
                    )
                        trigger.forced = true;
                },
                mark: true,
                marktext: '训诫',
                intro: {
                    name: '圣人训诫',
                    markcount: () => '没赢',
                    content: '当你需要响应牌时,若你有能响应的手牌,你须响应之',
                },
                init: (player, skill) => player.addTip(skill, '训诫 没赢'),
                onremove: (player, skill) => player.removeTip(skill),
                ai: {
                    neg: true,
                    threaten: 2.2,
                },
            },
        },
    },
    hokjuyifansan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCardEnd',
        },
        popup: false,
        filter(event, player) {
            if (!player.countCards('hes')) return false;
            if (get.is.convertedCard(event.card) || !get.is.jishi(event.card)) return false;
            return event.targets?.includes(player);
        },
        async cost(event, trigger, player) {
            game.broadcastAll(function (card) {
                lib.skill.hokjuyifansan_backup.viewAs = {
                    name: card.name,
                    nature: card.nature,
                    suit: card.suit,
                    number: card.number,
                };
            }, trigger.card);
            const result = await player
                .chooseToUse()
                .set('openskilldialog', `###${get.prompt(event.name.slice(0, -5))}###你可以将一张牌当做${get.translation(trigger.card)}对${get.translation(trigger.player)}使用`)
                .set('norestore', true)
                .set('_backupevent', 'hokjuyifansan_backup')
                .set('custom', {
                    add: {},
                    replace: { window() { } },
                })
                .backup('hokjuyifansan_backup')
                .set('target', trigger.player)
                .set('nouse', true)
                .forResult();
            event.result = { bool: result.bool, cost_data: { result } };
        },
        async content(event, trigger, player) {
            const {
                cost_data: { result },
            } = event;
            event.set('onresult', (result) => {
                player.tempBanSkill('hokjuyifansan', 'roundStart', false);
                player.addTempSkill('hokjuyifansan_effect');
                player.addMark('hokjuyifansan_effect', 1, false);
            });
            await player.useResult(result, event);
        },
        subSkill: {
            backup: {
                filterTarget(card, player, target) {
                    return target == get.event('target');
                },
                filterCard(card) {
                    return get.itemtype(card) == 'card';
                },
                position: 'hes',
                ai1(card) {
                    return 7 - get.value(card);
                },
            },
            effect: {
                audio: 'hokjuyifansan',
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num -= player.countMark(event.name);
                    player.removeSkill(event.name);
                },
            },
        },
    },
    hokyiqidangqian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: ['chooseToUse', 'chooseToRespond'],
        forced: true,
        filter(event, player, name) {
            if (player.isTempBanned('hokdandaofuhui')) return false;
            if (!player.countCards('hes')) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'basic';
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
                        return type == 'basic';
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('一骑当千', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                return _status.event.parent.filterCard({ name: button.link[2], nature: button.link[3] }, player, _status.event.parent);
            },
            check(button) {
                if (_status.event.parent.type != 'phase') return 1;
                const player = get.player();
                return player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard: true,
                    selectCard: [1, Infinity],
                    complexCard: true,
                    ai1(card) {
                        if (ui.selected.cards.length) return 0;
                        if (!ui.selected.cards.length) return 6 - get.value(card);
                        return 8 - get.value(card);
                    },
                    async precontent(event, trigger, player) {
                        if (event.result.card.name == 'sha' && event.result.cards.length > 1) return;
                        player.tempBanSkill('hokdandaofuhui', false, false);
                    },
                };
            },
            prompt(links, player) {
                return '将至少一张手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            const type = get.type(name);
            return type == 'basic' && player.countCards('hes') > 0 && !player.isTempBanned('hokdandaofuhui');
        },
        ai: {
            fireAttack: true,
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag) {
                if (!player.countCards('hes') || player.isTempBanned('hokdandaofuhui')) return false;
            },
            order() {
                const player = get.player();
                const event = _status.event;
                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0) {
                    return 3.3;
                }
                return 3.1;
            },
            result: {
                player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
    },
    hokdandaofuhui: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        content() { },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    if (get.attitude(player, target) <= 0) {
                        var hs = player.getCards('h').sort((a, b) => b.number - a.number);
                        var ts = target.getCards('h').sort((a, b) => b.number - a.number);
                        if (!hs.length || !ts.length) return 0;
                        if (hs[0].number > ts[0].number && !get.tag(hs[0], 'damage') && player.hasValueTarget(hs[0])) return 1;
                        return Math.random() - 0.4;
                    }
                    return 0;
                },
            },
        },
    },
    hokdaofengtieqi: {
        derivation: 'new_yijue',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        forced: true,
        filter(event, player) {
            if (player.isTempBanned('hokdaofengtieqi')) return false;
            if (event.type != 'dying') return false;
            return event.dying && lib.skill.hokdaofengtieqi.filterTarget(null, player, event.dying);
        },
        filterTarget(card, player, target) {
            if (target != _status.event.dying) return false;
            if (!target.countCards('h')) return false;
            return (
                player.hasAllHistory('sourceDamage', (evt) => evt.player == _status.event.dying) ||
                player.hasAllHistory('gain', (evt) => {
                    if (evt.giver != _status.event.dying || evt.parent.name == 'gift') return false;
                    return evt.cards.length;
                })
            );
        },
        selectTarget: -1,
        async content(event, trigger, player) {
            player.tempBanSkill('hokdaofengtieqi', 'roundStart', false);
            player.useSkill('new_yijue', event.targets);
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
    },
    hokhuayin: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        trigger: {
            global: ['recoverEnd', 'loseHpEnd', 'loseAfter', 'recastAfter'],
        },
        popup: false,
        filter(event, player, name) {
            if (event.name == 'chooseToUse') return player.countCards('h');
            if (!player.countCards('h')) return false;
            if (event.name == 'lose') {
                if (event.getParent(3).name.startsWith('hokhuayin')) return false;
                return event.type == 'discard';
            }
            return !event.parent.name.startsWith('hokhuayin');
        },
        async cost(event, trigger, player) {
            const suits = ['spade', 'club', 'heart', 'diamond'];
            const deslist = ['没有♠️️牌', '没有♣️️牌', '没有♥️️牌', '没有♦️️牌'];
            game.broadcastAll(
                function (player, event, suits, deslist) {
                    const dialog = ui.create.dialog();
                    dialog.id = 'mobiledialog';
                    dialog.classList.add('noupdate');
                    dialog.style.height = 400 + 'px';
                    if (!event.isMine()) {
                        dialog.style.display = 'none';
                    }
                    for (let i = 0; i < 4; i++) {
                        const cardx = player.getCards('h', { suit: suits[i] });
                        const area = ui.create.div('.sgs-spyanjiaoarea' + (cardx.length ? 1 : 3), dialog);
                        area.style.left = 28 + (i % 2) * (HOK.getIsPhone() ? 24 : 22) + '%';
                        area.style.top = -3 + (i > 1 ? 42 : 3) + '%';
                        area.link = suits[i];
                        dialog.buttons.add(area);
                        area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                        var cardbg = ui.create.div('.sgs-spyanjiaocardbg', area);
                        for (var j = 0; j < cardx.length; j++) {
                            var smCard = ui.create.card(cardbg, 'noclick', true).init(cardx[j]);
                            smCard.classList.add('hokzjcard');
                            smCard.style.left = -2 + (j * 25) / (cardx.length > 3 ? Math.sqrt((cardx.length / 3) * Math.ceil(cardx.length / 3)) : 0.8) + '%';
                            smCard.style.top = -8 + '%';
                            smCard.style.zoom = '0.88';
                        }
                        if (cardx.length) {
                            var yanjiaotips = ui.create.div('.sgs-spyanjiao-bot', area);
                            var suitx = ui.create.div('.sgs-spyanjiaosuit', area);
                            suitx.style.backgroundImage = `url(${`extension/王者荣耀/image/skill/spyanjiao/${suits[i]}.png`})`;
                            var tips = ui.create.div('.sgs-spyanjiaotip', area);
                            tips.innerHTML = `牌${cardx.length}张`;
                        } else {
                            var suitx = ui.create.div('.sgs-spyanjiaosuit', area);
                            suitx.style.top = '30%';
                            suitx.style.backgroundImage = `url(${`extension/王者荣耀/image/skill/spyanjiao/${suits[i]}.png`})`;
                            var tips = ui.create.div('.sgs-spyanjiaotip', area);
                            tips.innerHTML = deslist[i];
                            tips.style.top = '40%';
                            tips.style.left = '35%';
                        }
                    }
                    const tishi = ui.create.div('.skillTishi', dialog);
                    tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>花印</span>,弃置一种花色的所有牌,根据花色指定对应效果";
                    const skillTitle = ui.create.div('.game_skill_title', dialog);
                    skillTitle.classList.add('ssTitle');
                    skillTitle.innerHTML = '花印';
                    const arrow = new Image();
                    arrow.classList.add('game_skill_arrow');
                    arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                    skillTitle.appendChild(arrow);
                    event.dialog = dialog;
                },
                player,
                event,
                suits,
                deslist
            );
            const { bool, links } = await player
                .chooseButton(event.dialog)
                .set('filterButton', (button) => {
                    const player = get.player();
                    return player.countCards('h', { suit: button.link });
                })
                .set('ai', (button) => {
                    return Math.random();
                })
                .set('closeDialog', true)
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async content(event, trigger, player) {
            const links = event.cost_data.links,
                description = get.info('hokhuayin').chooseButton.prompt(links);
            game.broadcastAll((links) => {
                lib.skill[`hokhuayin_backup`] = get.copy(get.info('hokhuayin').chooseButton.backup(links));
            }, links);
            const next = player.chooseToUse();
            next.set('openskilldialog', description);
            next.set('norestore', true);
            next.set('_backupevent', `hokhuayin_backup`);
            next.backup(`hokhuayin_backup`);
        },
        chooseButton: {
            dialog(event, player) {
                const suits = ['spade', 'club', 'heart', 'diamond'];
                const deslist = ['没有♠️️牌', '没有♣️️牌', '没有♥️️牌', '没有♦️️牌'];
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('noupdate');
                dialog.style.height = 400 + 'px';
                for (let i = 0; i < 4; i++) {
                    const cardx = player.getCards('h', { suit: suits[i] });
                    const area = ui.create.div('.sgs-spyanjiaoarea' + (cardx.length ? 1 : 3), dialog);
                    area.style.left = 28 + (i % 2) * (HOK.getIsPhone() ? 24 : 22) + '%';
                    area.style.top = -3 + (i > 1 ? 42 : 3) + '%';
                    area.link = suits[i];
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    var cardbg = ui.create.div('.sgs-spyanjiaocardbg', area);
                    for (var j = 0; j < cardx.length; j++) {
                        var smCard = ui.create.card(cardbg, 'noclick', true).init(cardx[j]);
                        smCard.classList.add('hokzjcard');
                        smCard.style.left = -2 + (j * 25) / (cardx.length > 3 ? Math.sqrt((cardx.length / 3) * Math.ceil(cardx.length / 3)) : 0.8) + '%';
                        smCard.style.top = -8 + '%';
                        smCard.style.zoom = '0.88';
                    }
                    if (cardx.length) {
                        var yanjiaotips = ui.create.div('.sgs-spyanjiao-bot', area);
                        var suitx = ui.create.div('.sgs-spyanjiaosuit', area);
                        suitx.style.backgroundImage = `url(${`extension/王者荣耀/image/skill/spyanjiao/${suits[i]}.png`})`;
                        var tips = ui.create.div('.sgs-spyanjiaotip', area);
                        tips.innerHTML = `牌${cardx.length}张`;
                    } else {
                        var suitx = ui.create.div('.sgs-spyanjiaosuit', area);
                        suitx.style.top = '30%';
                        suitx.style.backgroundImage = `url(${`extension/王者荣耀/image/skill/spyanjiao/${suits[i]}.png`})`;
                        var tips = ui.create.div('.sgs-spyanjiaotip', area);
                        tips.innerHTML = deslist[i];
                        tips.style.top = '40%';
                        tips.style.left = '35%';
                    }
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>花印</span>,弃置一种花色的所有牌,根据花色指定对应效果";
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = '花印';
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                return dialog;
            },
            filter(button) {
                const player = get.player();
                return player.countCards('h', { suit: button.link });
            },
            check(button) {
                return Math.random();
            },
            backup(links, player) {
                return {
                    audio: 'hokhuayin',
                    filterCard(card, player) {
                        return card.suit == links[0];
                    },
                    selectCard: -1,
                    filterTarget(card, player, target) {
                        switch (links[0]) {
                            case 'spade':
                                return true;
                            case 'heart':
                                return target.isDamaged();
                            case 'club':
                                return target.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, target, 'hokhuayin');
                                });
                            case 'diamond':
                                return target.countCards('he', function (card) {
                                    return target.canRecast(card);
                                });
                        }
                        return false;
                    },
                    selectTarget() {
                        return [1, ui.selected.cards.length];
                    },
                    complexTarget: true,
                    complexSelect: true,
                    multitarget: true,
                    lose: false,
                    discard: false,
                    delay: false,
                    async content(event, trigger, player) {
                        const targets = event.targets;
                        const suit = event.cards[0].suit;
                        await player.loseToDiscardpile(event.cards);
                        switch (suit) {
                            case 'spade':
                                {
                                    for (const target of targets) {
                                        if (target.isIn()) {
                                            target.loseHp();
                                        }
                                    }
                                }
                                break;
                            case 'heart':
                                {
                                    for (const target of targets) {
                                        if (target.isDamaged()) {
                                            target.recover();
                                        }
                                    }
                                }
                                break;
                            case 'club':
                                {
                                    for (const target of targets) {
                                        if (
                                            target.hasCard(function (card) {
                                                return lib.filter.cardDiscardable(card, target, 'hokhuayin');
                                            }, 'he')
                                        ) {
                                            target.chooseToDiscard('he', true, '花印:请弃置一张牌', lib.filter.cardDiscardable);
                                        }
                                    }
                                }
                                break;
                            case 'diamond': {
                                for (const target of targets) {
                                    if (
                                        target.hasCard(function (card) {
                                            return target.canRecast(card);
                                        }, 'he')
                                    ) {
                                        const { bool, cards } = await target.chooseCard('he', true, '花印:请重铸一张牌', lib.filter.cardRecastable).forResult();
                                        if (bool) target.recast(cards);
                                    }
                                }
                            }
                        }
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                if (!ui.selected.cards.length) return 0;
                                let val = get.value(ui.selected.cards, player);
                                if (val > 7.5) return 0;
                                switch (ui.selected.cards[0].suit) {
                                    case 'spade':
                                        return get.effect(target, { name: 'losehp', player, player });
                                        break;
                                    case 'heart':
                                        return get.recoverEffect(target, player, player);
                                        break;
                                    case 'club':
                                        return -1;
                                        break;
                                    case 'diamond':
                                        return 1;
                                        break;
                                }
                                return 0;
                            },
                        },
                    },
                };
            },
            prompt(links) {
                const player = get.player(),
                    suitCount = player.countCards('h', { suit: links[0] });
                const suits = ['spade', 'heart', 'club', 'diamond'];
                return [`语·花印:令至多${suitCount}名角色失去1点体力`, `落·红雨:令至多${suitCount}名角色回复1点体力`, `缘·心结:令至多${suitCount}名角色弃置一张牌`, `绽·风华:令至多${suitCount}名角色重铸一张牌`][suits.indexOf(links[0])];
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
    hokzhoushuhuoyan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'gainEnd',
        },
        filter(event, player) {
            if (!player.isPhaseUsing()) return false;
            return event.cards && event.cards.length;
        },
        async content(event, trigger, player) {
            player.igniteCards(trigger.cards);
        },
        check(event, player) {
            if (event.cards.some((card) => player.getUseValue(card) > 8)) return false;
            return player.hasUseTarget({ name: 'sha', nature: 'fire' });
        },
        mod: {
            cardname(card, player) {
                if (card.hasGaintag('igniteCards')) return 'sha';
            },
            cardnature(card, player) {
                if (card.hasGaintag('igniteCards')) return 'fire';
            },
        },
    },
    hokhundunhuozhong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'chenghuodajie',
        },
        filterCard: true,
        selectCard: [1, 4],
        check(card) {
            return 6.5 - get.value(card);
        },
        complexCard: true,
        position: 'hes',
        async precontent(event, trigger, player) {
            player
                .when('useCard')
                .filter((event) => event.skill == 'hokhundunhuozhong')
                .then(() => {
                    const suit = player.getCards('h').map((card) => card.suit);
                    const suits = suit.reduce((p, n) => {
                        p[n] = p[n] + 1 || 1;
                        return p;
                    }, {});
                    const suitCount = Object.keys(suits).filter((key) => suits[key] == 1).length;
                    if (suitCount > 0) player.draw(suitCount);
                });
        },
    },
    hoksheshenwangsi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte) return false;
            return !player.getOriginalSkills().includes(skill);
        },
        initList(player) {
            var list,
                skills = [];
            if (get.mode() == 'guozhan') {
                list = [];
                for (var i in lib.characterPack.mode_guozhan) {
                    if (lib.character[i]) list.push(i);
                }
            } else if (_status.connectMode) list = get.charactersOL();
            else {
                list = [];
                for (var i in lib.character) {
                    if (lib.filter.characterDisabled2(i) || lib.filter.characterDisabled(i)) continue;
                    list.push(i);
                }
            }
            for (const i of list) {
                if (i.indexOf('gz_jun') == 0) continue;
                for (var j of lib.character[i][3]) {
                    if (j == 'hoksheshenwangsi') continue;
                    var skill = lib.skill[j];
                    if (!skill || skill.juexingji || skill.hiddenSkill || skill.zhuSkill) continue;
                    if (skill.xushiSkill) continue;
                    if (skill.dutySkill || skill.chargeSkill || lib.skill.hoksheshenwangsi.banned.includes(j)) continue;
                    if (skill.init || (skill.ai && (skill.ai.combo || skill.ai.notemp || skill.ai.neg))) continue;
                    var info = lib.translate[j + '_info'];
                    if (info && get.plainText(info).includes('【杀】')) skills.add(j);
                }
            }
            player.setStorage('hoksheshenwangsi', skills);
        },
        banned: [],
        async content(event, trigger, player) {
            await player.loseHp();
            await player.drawTo(player.getDamagedHp());
        },
        ai: {
            halfneg: true,
            effect: {
                player(card, player, target) {
                    if (card.name != 'sha' || player.hasSkill('hokzhengyiqianneng')) return;
                    if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) > 1) return;
                    return [1, -0.5];
                },
            },
        },
        group: 'hoksheshenwangsi_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    await game.asyncDelay();
                    if (!player.storage.hoksheshenwangsi) get.info('hoksheshenwangsi').initList(player);
                    let skills = player.storage.hoksheshenwangsi.randomGets(3);
                    if (!skills.length) return;
                    let list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                    const mbdialog = new ui.create.mobileDialog(event, 'hoksheshenwangsi');
                    mbdialog.dialog.classList.add('skill-tdnodes');
                    mbdialog.dialog.add([list, 'tdnodes']);
                    mbdialog.addSkills(skills);
                    mbdialog.addTip("你发动了<span style='color: #a4dfd5'>舍身忘死</span>,请选择获得一个技能");
                    const { bool, links } = await player
                        .chooseButton(event.dialog, true)
                        .set('closeDialog', true)
                        .set('ai', (button) => {
                            const player = get.player();
                            return 1 + Math.random();
                        })
                        .forResult();
                    if (bool) {
                        await player.addSkills(links);
                    }
                },
            },
        },
    },
    hokzhengyiqianneng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'changeHp',
        },
        xushiSkill: true,
        filter(event, player) {
            return player.isMinHp();
        },
        check(event, player) {
            if (player.countCards('hs', (card) => player.canSaveCard(card, player)) >= 1 - player.hp) return false;
            return player.hp <= 1;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.recover();
            const skills = player.getSkills(null, false, false).filter((skill) => {
                var info = get.info(skill);
                return info && !info.charlotte && lib.translate[skill + '_info'] && !player.getOriginalSkills().includes(skill);
            });
            if (skills.length) {
                await player.removeSkills(skills);
                await player.recover(skills.length);
            }
        },
    },
    hokyueguangzhiwu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player, name) {
            return (event.card && event.card.name == 'sha') || get.type2(event.card) == 'trick';
        },
        async content(event, trigger, player) {
            if (
                (trigger.card.name == 'sha' || get.type2(trigger.card) == 'trick') &&
                player
                    .getHistory('useCard', function (evt) {
                        return get.type2(evt.card) == 'trick' || evt.card.name == 'sha';
                    })
                    .indexOf(trigger) == 0
            ) {
                trigger.directHit.addArray(game.players);
                game.log(trigger.card, '不可被响应');
                player.addTempSkill('hokyueguangzhiwu_ban');
            }
            if (
                (trigger.card.name == 'sha' || get.type2(trigger.card) == 'trick') &&
                player.getAllHistory('useCard', (evt) => {
                    return evt.card.name == 'sha' || get.type2(evt.card) == 'trick';
                }).length %
                3 ==
                0
            ) {
                await player.chooseToGuanxing(2);
                await player.draw();
            }
        },
        init(player) {
            if (
                player.hasHistory('useCard', (evt) => {
                    return get.type2(evt.card, false) == 'trick' || evt.card.name == 'sha';
                })
            )
                player.addTempSkill('hokyueguangzhiwu_ban');
        },
        mod: {
            targetInRange(card, player, target) {
                if (player.hasSkill('hokyueguangzhiwu_ban')) return;
                if (card.name == 'sha' || get.type2(card) == 'trick') return true;
            },
        },
        ai: {
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
                if (player.hasHistory('useCard', (evt) => get.type2(evt.card, false) == 'trick' || evt.card.name == 'sha')) return false;
                if (arg && arg.card && (arg.card.name == 'sha' || get.type2(arg.card) == 'trick')) return true;
                return false;
            },
        },
        subSkill: {
            ban: {
                charlotte: true,
            },
        },
    },
    hokxinyuetuji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        filter(event, player) {
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'trick';
                })
                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
        },
        getResuilt(card, player, event) {
            let target = get.cardNameLength(card),
                result = [],
                map = {};
            const list = player
                .getCards('hes', function (card) {
                    const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                    return mod2 !== false;
                })
                .map((card) => get.cardNameLength(card));
            list.map((res) => {
                let complement = target - res;
                if (complement in map) result.push(complement, res);
                map[res] = 1;
            });
            return result.length;
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
                const dialog = ui.create.dialog('新月突击', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                if (get.event().parent.type != 'phase') return 1;
                return get.player().getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard: true,
                    filterOk() {
                        return (
                            (ui.selected.cards || []).reduce((sum, card) => {
                                return sum + get.cardNameLength(card);
                            }, 0) >= get.cardNameLength(get.card().name)
                        );
                    },
                    selectCard: 2,
                    complexCard: true,
                    position: 'hes',
                    ai1(card) {
                        const player = get.player();
                        const name = get.card().name;
                        if (ui.selected.cards.length > 1 || card.name == name) return 0;
                        if (ui.selected.cards.length) {
                            if (get.cardNameLength(name) <= get.cardNameLength(card) + get.cardNameLength(ui.selected.cards[0])) {
                                return 10 / (get.value(card) || 0.5);
                            }
                        }
                        return 1 / (get.value(card) || 0.5);
                    },
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('hokxinyuetuji', 'roundStart', false);
                        if (
                            get.cardNameLength(event.result.card) !=
                            (event.result.cards || []).reduce((sum, card) => {
                                return sum + get.cardNameLength(card);
                            }, 0)
                        )
                            return;
                        if (player.storage[`temp_ban_${'hokxinyuetuji'}`]) delete player.storage[`temp_ban_${'hokxinyuetuji'}`];
                        game.log(player, '重置了技能', `#g【${get.translation('hokxinyuetuji')}】`);
                        const num = player.getHistory('useSkill', (evt) => evt.skill == 'hokxinyuetuji').length;
                        if (num > 2) {
                            game.broadcastAll(function (num) {
                                game.popupMessageTips(`月下无限连X${num}`);
                            }, num);
                            game.log('#g月下无限连', 'X', num);
                        }
                    },
                };
            },
            prompt(links, player) {
                return '将两张牌名字数之和不小于' + get.cardNameLength({ name: links[0][2] }) + '的牌当做【' + get.translation(links[0][2]) + '】使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            return get.type(name) == 'trick';
        },
        ai: {
            order(item, player) {
                if (player && get.event().type == 'phase') {
                    let list = get
                        .inpileVCardList((info) => {
                            const name = info[2];
                            return get.type(name) == 'trick';
                        })
                        .map((card) => {
                            return { name: card[2], nature: card[3] };
                        })
                        .filter((card) => player.getUseValue(card, true, true) > 0);
                    if (!list.length) return 0;
                    list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
                    return get.order(list[0], player) * 0.99;
                }
                return 1;
            },
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
    hokfengshen: {
        derivation: ['huandao', 'zuoxing'],
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['roundStart', 'dieBegin'],
        },
        forced: true,
        dutySkill: true,
        async content(event, trigger, player) {
            player.gainMaxHp();
        },
        group: ['hokfengshen_achieve', 'hokfengshen_fail'],
        subSkill: {
            achieve: {
                audio: 'hokfengshen',
                trigger: {
                    player: 'hokfengshenAfter',
                },
                forced: true,
                filter(event, player) {
                    return player.maxHp > game.countPlayer();
                },
                async content(event, trigger, player) {
                    player.awakenSkill('hokfengshen');
                    game.log(player, '成功完成使命');
                    await player.addSkills('huandao');
                    const targets = await player
                        .chooseTarget(true, `你发动了<span class="yellowtext">${get.translation(event.name)}</span>,请选择令一名角色获得${get.skillTipsInfo(get.translation('zuoxing'), get.skillInfoTranslation('zuoxing'))}.`)
                        .set('ai', function (target) {
                            const player = get.player();
                            return get.attitude(player, target);
                        })
                        .forResultTargets();
                    const target = targets[0];
                    player.line(target);
                    target.setStorage('zuoxing', player);
                    await target.addSkills('zuoxing');
                },
            },
            fail: {
                audio: 'hokfengshen',
                trigger: {
                    player: 'dying',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.awakenSkill('hokfengshen');
                    game.log(player, '使命失败');
                    if (player.maxHp > 1) await player.loseMaxHp(player.maxHp - 1);
                    player.changeHp(1 - player.getHp(true));
                },
            },
        },
    },
    hokdashenzhifa: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filterTarget: true,
        prompt: `出牌阶段限一次,你可以对一名角色造成1点伤害,若其为神势力角色,你增加1点体力上限,否则反之.`,
        async content(event, trigger, player) {
            const target = event.targets[0];
            const bool = get.nameList(target).some((name) => lib.character[name]?.group == 'shen');
            await target.damage();
            await player[bool ? 'gainMaxHp' : 'loseMaxHp']();
        },
        ai: {
            order: 1,
            damage: true,
            result: {
                target(player, target) {
                    const bool = get.nameList(target).some((name) => lib.character[name]?.group == 'shen');
                    if (!bool && player.maxHp < 2 && target != player) return 0;
                    return get.damageEffect(target, player, target) * (bool ? 1.5 : 1);
                },
            },
        },
        group: 'hokdashenzhifa_change',
        subSkill: {
            change: {
                audio: 'hokdashenzhifa',
                trigger: {
                    player: ['gainMaxHpEnd', 'loseMaxHpEnd'],
                },
                forced: true,
                async content(event, trigger, player) {
                    await player.draw(trigger.num);
                },
            },
        },
    },
    hokjunzhuyewang: {
        global: 'hokjunzhuyewang_global',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageBegin1',
            player: 'damageBegin3',
        },
        forced: true,
        filter(event, player, name) {
            if (name == 'damageBegin1') return !player.getRoundHistory('sourceDamage').length;
            let num = 0;
            const history = game.getAllGlobalHistory();
            for (let i = history.length - 1; i >= 0; i--) {
                const evt = history[i].everything;
                for (let j = evt.length - 1; j >= 0; j--) {
                    if (evt[j].name == 'damage' && evt[j].player == player) num++;
                }
                if (history[i].isRound) break;
            }
            return num == 1;
        },
        async content(event, trigger, player) {
            trigger.num += event.triggername == 'damageBegin1' ? 1 : -1;
        },
    },
    hoktongyuzhanchang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageBegin4',
        },
        popup: false,
        xushiSkill: true,
        filter(event, player) {
            if (event.player == player) return false;
            return event.num >= event.player.getHp() && player.countCards('hej');
        }, //QQQ
        async cost(event, trigger, player) {
            const cards = player.getCards('hej').slice(0);
            cards.forEach((card) => card.gaintag.add(get.position(card) + '_position'));
            const result = await player
                .chooseButton([get.prompt2(event.name.slice(0, -5)), cards])
                .set('filterButton', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger(),
                        target = trigger.player;
                    switch (get.position(button.link)) {
                        case 'e':
                            return target.canAddJudge(button.link);
                        case 'j':
                            return target.canEquip(button.link);
                        default:
                            return true;
                    }
                })
                .set('ai', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger(),
                        target = trigger.player,
                        pos = get.position(button.link);
                    if (!trigger.source && player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= trigger.num) return 0;
                    if (get.attitude(player, target) < 0) {
                        if (pos == 'j') return 12;
                        if (get.value(button.link, player) < 0 && get.effect(target, button.link, player, target) > 0) return 10;
                        return 0;
                    }
                    switch (pos) {
                        case 'e':
                            return 10;
                        case 'j':
                            return -10;
                        default:
                            return get.value(button.link) * get.effect(target, button.link, player, target);
                    }
                })
                .forResult();
            event.result = { bool: result.bool, cost_data: { cards: result.links } };
        },
        async content(event, trigger, player) {
            const target = trigger.player,
                link = event.cost_data.cards[0];
            player.awakenSkill(event.name);
            if (get.position(link) == 'h') {
                await target.gain(event.cost_data.cards, player, 'giveAuto');
            } else {
                player.$give(event.cost_data.cards, target, false);
                if (get.position(link) == 'e') {
                    await target.equip(link);
                } else if (link.viewAs) {
                    await target.addJudge({ name: link.viewAs }, event.cost_data.cards);
                } else {
                    await target.addJudge(link);
                }
            }
            game.log(player, '的', get.position(link) == 'h' ? '一张手牌' : event.cost_data.cards, '被移动给了', target);
            await game.asyncDelay();
            const { index } = await player
                .chooseControl('伤害来源', '受伤角色')
                .set('prompt', `你发动了${get.translation(event.name)},请选择成为此次伤害的伤害来源,或受伤角色.`)
                .set('ai', () => {
                    const player = get.player(),
                        target = get.event().getTrigger().player;
                    if (get.attitude(player, target) > 0) return 1;
                    return 0;
                })
                .forResult();
            trigger[index == 0 ? 'source' : 'player'] = player;
            trigger._hoktongyuzhanchang = true;
            game.log(player, '成为了', index == 0 ? '伤害来源' : '受伤角色');
            player.addTempSkill('hoktongyuzhanchang_effect');
        },
        subSkill: {
            effect: {
                audio: 'hoktongyuzhanchang',
                trigger: {
                    source: 'damageSource',
                    player: 'damageEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event._hoktongyuzhanchang;
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    await player.draw(3);
                },
            },
        },
    },
    hokbeishuiyizhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokbeishuiyizhan_use', 'hokbeishuiyizhan_beishui'],
        subSkill: {
            use: {
                audio: 'hokbeishuiyizhan',
                enable: 'chooseToUse',
                viewAs: {
                    name: 'juedou',
                },
                filter(event, player) {
                    return player.countCards('h');
                },
                filterCard: true,
                prompt: '每轮限一次,你可以将一张手牌当【决斗】使用并选择:1.此牌伤害+1;2.此牌结算两次;背水:减1点体力和上限',
                async precontent(event, trigger, player) {
                    player.tempBanSkill('hokbeishuiyizhan_use', 'roundStart', false);
                    player
                        .when('useCard')
                        .filter((event) => event.skill == 'hokbeishuiyizhan_use')
                        .then(() => {
                            const next = game.createEvent('hokbeishuiyizhan_choose');
                            next.player = player;
                            next._trigger = trigger;
                            next.setContent(async (event, trigger, player) => {
                                const list = [];
                                list.push('伤害+1');
                                list.push('结算两次');
                                list.push('背水!');
                                const { index } = await player
                                    .chooseControl(list)
                                    .set('prompt', `你发动了<span style="color: #9FDCD1">${get.translation('hokbeishuiyizhan')}</span>,选择一项,或减1点体力和上限选择两项`)
                                    .set('cardx', trigger.card)
                                    .set('targets', trigger.targets)
                                    .set('ai', () => {
                                        const player = get.player(),
                                            card = get.event('cardx'),
                                            targets = get.event('targets');
                                        const bool1 = targets.every(
                                            (target) =>
                                                !target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                })
                                        ),
                                            bool2 = targets.every((target) => {
                                                return !target.hasSha() && get.effect(target, { name: 'juedou' }, player, player) > 0;
                                            }),
                                            bool3 = player.countCards('h') < 2 && player.getHp() < 2;
                                        if (bool1 && bool2 && bool3) return 2;
                                        if (bool1) return 0;
                                        if (bool2) return 1;
                                        return 0;
                                    })
                                    .forResult();
                                if (index == 2) {
                                    await player.loseHp();
                                    await player.loseMaxHp();
                                }
                                if (index == 0 || index == 2) {
                                    trigger.baseDamage += 1;
                                }
                                if (index == 1 || index == 2) {
                                    trigger.effectCount += 1;
                                }
                            });
                        });
                },
            },
            beishui: {
                audio: 'hokbeishuiyizhan',
                trigger: {
                    global: 'chooseControlEnd',
                },
                forced: true,
                filter(event, player) {
                    if (player.hasSkill('hokbeishuiyizhan_effect')) return false;
                    return event.result && event.result.control && ['背水', '背水!', '背水!'].includes(event.result.control);
                },
                async content(event, trigger, player) {
                    game.log(trigger.player, '执行了技能的', '#g背水', '选项');
                    player.addTempSkill('hokbeishuiyizhan_effect');
                    player.addTip('hokbeishuiyizhan_effect', '背水一战', true);
                },
            },
            effect: {
                charlotte: true,
                onremove(player, skill) {
                    player.removeTip(skill);
                },
                group: ['hokbeishuiyizhan_hp', 'hokbeishuiyizhan_hs'],
                mark: true,
                intro: {
                    content: '有角色执行背水选项的回合内,你的手牌数和体力值不能小于1',
                },
                ai: {
                    effect: {
                        player(card, player, target) {
                            if (player.countCards('h') === 1) return [1, 0.8];
                        },
                        target(card, player, target) {
                            if ((get.tag(card, 'damage') || get.tag(card, 'loseHp')) && target.getHp() == 1) return 0.5;
                            if (get.tag(card, 'loseCard') && target.countCards('h') === 1) return 0.5;
                        },
                    },
                    noh: true,
                    skillTagFilter(player, tag) {
                        if (tag == 'noh') {
                            if (player.countCards('h') != 1) return false;
                        }
                    },
                },
            },
            hp: {
                trigger: {
                    player: 'changeHp',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return player.getHp() < 1;
                },
                async content(event, trigger, player) {
                    player.changeHp(1 - player.getHp(true));
                    game.log(player, '触发', '#g背水一战', '直到回合结束前至少保留1点体力');
                },
            },
            hs: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    var evt = event.getl(player);
                    if (!evt || !evt.hs || evt.hs.length == 0 || player.countCards('h') >= 1) return false;
                    var evt = event;
                    for (let i = 0; i < 4; i++) {
                        evt = evt.getParent('hokbeishuiyizhan_hs');
                        if (evt.name != 'hokbeishuiyizhan_hs') return true;
                    }
                    return false;
                },
                async content(event, trigger, player) {
                    const num = 1 - player.countCards('h');
                    if (num > 0) player.draw(num);
                    game.log(player, '触发', '#g背水一战', '直到回合结束前至少保留1张手牌');
                },
            },
        },
    },
    hokguoshiwushuang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
        },
        filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (
                player.getRoundHistory('useSkill', (evt) => {
                    return evt.skill == 'hokguoshiwushuang' && evt.targets.includes(event.target);
                }).length
            )
                return false;
            return event.targets?.length == 1;
        },
        logTarget: 'target',
        check(event, player) {
            const target = event.target;
            if (!target.countCards('h')) {
                return get.damageEffect(target, player, player) + get.effect(player, { name: 'draw' }, player, player) * 2 - (target == player ? 0 : 1) < 0;
            }
            return get.attitude(player, target) <= 0;
        },
        async content(event, trigger, player) {
            const target = trigger.target,
                list = [];
            list.push('受到1点伤害');
            if (target.countCards('h') && target != player) list.push(`交给${get.translation(player)}1张手牌`);
            list.push('背水!');
            const { control } = await target
                .chooseControl(list)
                .set('prompt', `<span style="color: #B4E893">${get.translation(player)}</span>发动了<span style="color: #9FDCD1">${get.translation('hokguoshiwushuang')}</span>,选择执行一项`)
                .set('ai', () => {
                    const player = get.player();
                    let controls = get.event('controls').slice();
                    const bool1 = player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) > 1;
                    const bool2 = (!player.countCards('h') && !player.hasSkillTag('noh')) || player.hasCard((card) => get.value(card) < 6);
                    if (get.damageEffect(player, event.getTrigger().player, player) <= 0) return '背水!';
                    if (bool1 && bool2) return '背水!';
                    if (bool2 && controls.length == 3) return controls[1];
                    return controls[controls.length - 1];
                })
                .forResult();
            if (control == '背水!') {
                await target.draw(2);
            }
            if (control == '受到1点伤害' || control == '背水!') {
                await target.damage();
            }
            if (control == `交给${get.translation(player)}1张手牌` || control == '背水!') {
                if (!target.countCards('he') || target == player) return;
                target.chooseToGive(player, 'he', true, `选择交给${get.translation(player)}一张手牌`);
            }
        },
        ai: {
            effect: {
                player(card, player, target) {
                    if (!get.tag(card, 'damage')) return;
                    if (get.info('xunshi').isXunshi(card)) return;
                    if (
                        target &&
                        !player.getRoundHistory('useSkill', function (evt) {
                            return evt.skill == 'hokguoshiwushuang' && evt.targets.includes(target);
                        })
                    ) {
                        return [1, 1, 0, -0.5];
                    }
                },
            },
        },
    },
    hokbingfengzhixin: {
        derivation: 'bingxin',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        init: (player, skill) => player.addAdditionalSkill(skill, 'bingxin'),
        onremove: (player, skill) => player.removeAdditionalSkill(skill, 'bingxin'),
        group: ['hokbingfengzhixin_bingxin', 'hokbingfengzhixin_bingleng'],
        subSkill: {
            bingxin: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                filter(event, player) {
                    return event.targets?.length && event.skill?.startsWith('bingxin');
                },
                logTarget(event, player) {
                    return event.targets;
                },
                async content(event, trigger, player) {
                    for (const target of event.targets) {
                        if (target.isIn()) await target.damage('ice', 'unreal');
                    }
                },
            },
            bingleng: {
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha' && player.getAllHistory('useCard', (evt) => evt.card.name == 'sha').length % 3 == 0;
                },
                async content(event, trigger, player) {
                    game.setNature(trigger.card, 'ice');
                    var next = game.createEvent('hokbingfengzhixin_clear');
                    next.player = player;
                    next.card = trigger.card;
                    event.next.remove(next);
                    next.forceDie = true;
                    trigger.after.push(next);
                    next.setContent(function () {
                        game.setNature(card, [], true);
                    });
                },
            },
        },
    },
    hoklindongyizhi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['damageEnd', 'loseAfter', 'loseAsyncAfter'],
        },
        getIndex(event, player, triggername) {
            if (event.name === 'damage') return [event.player];
            return game
                .filterPlayer(function (target) {
                    if (target == player) return false;
                    if (
                        target.getHistory('lose', (evt) => {
                            if (evt.type != 'discard') return false;
                            return evt.cards2?.length;
                        }).length != 2
                    )
                        return false;
                    return event.type == 'discard' && event.getl(target)?.cards2?.length;
                })
                .sortBySeat(player);
        },
        filter(event, player, name, target) {
            if (name == 'damageEnd') {
                return (
                    event.hasNature('ice') &&
                    event.player != player &&
                    event.player
                        .getHistory('damage', (evt) => {
                            return evt.hasNature('ice');
                        })
                        .indexOf(event) == 0
                );
            }
            return game.hasPlayer(function (target) {
                if (target == player) return false;
                if (
                    target.getHistory('lose', (evt) => {
                        if (evt.type != 'discard') return false;
                        return evt.cards2 && evt.cards2.length;
                    }).length != 2
                )
                    return false;
                return event.type == 'discard' && event.getl(target)?.cards2?.length;
            });
        },
        logTarget(event, player, name, target) {
            return target;
        },
        async cost(event, trigger, player) {
            const target = event.indexedData;
            event.result = await player
                .chooseCard([1, Infinity], get.prompt2(event.skill, target))
                .set('targetx', target)
                .set('ai', (card) => {
                    const player = get.player();
                    const target = get.event('targetx');
                    if (get.effect(target, card, player, player) <= 0) return 0; //QQQ
                    let eff = 6,
                        cards = player.getCards('h');
                    if (card.name == 'sha') eff += 2;
                    if (ui.selected.cards.length) {
                        if (card.name != 'sha') return 0;
                    }
                    return 6 - get.value(card);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            await player.lose(event.cards, ui.cardPile, 'insert');
            const binglin = new lib.element.VCard({ name: 'binglinchengxiax' });
            player.addTempSkill('hoklindongyizhi_effect');
            for (const card of event.cards) {
                if (player.hasUseTarget(binglin)) {
                    await player.chooseUseTarget(binglin, true);
                }
            }
            player.removeSkill('hoklindongyizhi_effect');
        },
        subSkill: {
            effect: {
                audio: 'hoklindongyizhi',
                trigger: {
                    global: ['damageEnd', 'loseAfter', 'loseAsyncAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                getIndex(event, player, triggername) {
                    if (event.name === 'damage') return [event.player];
                    return game
                        .filterPlayer(function (target) {
                            if (
                                target.getRoundHistory('lose', (evt) => {
                                    if (evt.type != 'discard') return false;
                                    return evt.cards2?.length;
                                }).length != 2
                            )
                                return false;
                            return event.type == 'discard' && event.getl(target)?.cards2?.length;
                        })
                        .sortBySeat(player);
                },
                filter(event, player, name, target) {
                    if (name == 'damageEnd') {
                        return (
                            event.hasNature('ice') &&
                            event.player
                                .getRoundHistory('damage', (evt) => {
                                    return evt.hasNature('ice');
                                })
                                .indexOf(event) == 0
                        );
                    }
                    return game.hasPlayer(function (target) {
                        if (
                            target.getRoundHistory('lose', (evt) => {
                                if (evt.type != 'discard') return false;
                                return evt.cards2 && evt.cards2.length;
                            }).length != 2
                        )
                            return false;
                        return event.type == 'discard' && event.getl(target)?.cards2?.length;
                    });
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    const binglin = new lib.element.VCard({ name: 'binglinchengxiax' });
                    if (player.canUse(binglin, target)) await player.useCard(binglin, target);
                },
            },
        },
    },
    hokmijijiyi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        derivation: ['hokmijijiyi', 'hokmijifenshen', 'hokmijiyingshi', 'hokmijianxi', 'hokmijiyinni'],
        trigger: {
            player: 'showCharacterAfter',
        },
        forced: true,
        hiddenSkill: true,
        filter(event, player) {
            return event.toShow?.some((i) => get.character(i).skills?.includes('hokmijijiyi'));
        },
        getClosest(player, target) {
            const targets = game.filterPlayer();
            targets.remove(player);
            targets.sort(function (a, b) {
                return Math.max(1, get.distance(player, a)) - Math.max(1, get.distance(player, b));
            });
            const distance = Math.max(1, get.distance(player, targets[0]));
            for (let i = 1; i < targets.length; i++) {
                if (Math.max(1, get.distance(player, targets[i])) > distance) {
                    targets.splice(i);
                    break;
                }
            }
            return targets.includes(target);
        },
        async changeSkill(event, trigger, player) {
            const skill = event.skill;
            const skills = lib.skill.hokmijijiyi.derivation.slice(0).remove(skill);
            game.broadcastAll(
                function (player, event, skills, skill) {
                    const dialog = ui.create.dialog();
                    dialog.id = 'mobiledialog';
                    dialog.classList.add('noupdate');
                    dialog.style.height = 220 + 'px';
                    if (!event.isMine()) {
                        dialog.style.display = 'none';
                    }
                    for (let i = 0; i < skills.length; i++) {
                        const area = ui.create.div('.chooseSkillarea', dialog);
                        area.style.left = 10 + i * 20 + '%';
                        const skillName = ui.create.div('.skillName', area);
                        skillName.link = skills[i];
                        let skillitem = ui.create.div('.skillitem', skillName);
                        let skillitemChild = ui.create.div('.skillitem-child', skillName);
                        skillitem.innerHTML = get.translation(skills[i]);
                        skillitemChild.innerHTML = get.translation(skills[i]);
                        let skillinfo = ui.create.div('.skillinfo', area);
                        skillinfo.innerHTML = get.skillInfoTranslation(skills[i], player);
                        dialog.buttons.add(skillName);
                        skillName.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    }
                    const tishi = ui.create.div('.skillTishi', dialog);
                    tishi.innerHTML = "你发动了<span style='color: #a4dfd5'>秘技</span>,选择一个秘技技能替换之";
                    tishi.style.top = '45%';
                    const skillTitle = ui.create.div('.game_skill_title', dialog);
                    skillTitle.innerHTML = '<img src=extension/王者荣耀/image/game_skill_title/brawl_changeSpell.png>';
                    const arrow = new Image();
                    arrow.classList.add('game_skill_arrow');
                    arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                    skillTitle.appendChild(arrow);
                    event.dialog = dialog;
                },
                player,
                event,
                skills,
                skill
            );
            const { result } = await player
                .chooseButton(event.dialog, true)
                .set('filterButton', (button) => {
                    const skill = get.event('skill');
                    return button.link != skill;
                })
                .set('skill', skill)
                .set('skills', skills)
                .set('ai', (button) => {
                    let player = get.player(),
                        skill = get.event('skill'),
                        skills = get.event('skills'),
                        aiIndex = Array(5).fill(0.6),
                        num = player.countCards('hs', function (card) {
                            return player.hasUseTarget(card) && player.getUseValue(card) > 0;
                        }),
                        targets = player.getHistory('sourceDamage').map((evt) => evt.player);
                    switch (skill) {
                        case 'hokmijijiyi':
                            if (player != _status.currentPhase) aiIndex[3] += 0.5;
                            if (num > 0) aiIndex[1] += num;
                            else if (targets.some((i) => get.damageEffect(i, player, player) > 0)) aiIndex[2] += 1;
                            break;
                        case 'hokmijifenshen':
                            if (player != _status.currentPhase) aiIndex[3] += 0.3;
                            if (num > 0) aiIndex[1] += num;
                            else if (targets.some((i) => get.damageEffect(i, player, player) > 0)) aiIndex[2] += 1;
                            break;
                        case 'hokmijiyingshi':
                            if (player.isUnseen()) aiIndex[0] += 0.5;
                            if (num > 0) aiIndex[1] += num;
                            else if (targets.some((i) => get.damageEffect(i, player, player) > 0)) aiIndex[2] += 1;
                            if (player != _status.currentPhase) aiIndex[3] += 0.3;
                            aiIndex[3] += 0.5;
                            break;
                        case 'hokmijianxi':
                            if (num > 0) aiIndex[1] += num;
                            else if (targets.some((i) => get.damageEffect(i, player, player) > 0)) aiIndex[2] += 1;
                            if (player != _status.currentPhase) aiIndex[3] += 0.3;
                            aiIndex[1] += 0.5;
                            break;
                        case 'hokmijiyinni':
                            aiIndex[0] += 0.5;
                            if (num > 0) aiIndex[1] += num;
                            else if (targets.some((i) => get.damageEffect(i, player, player) > 0)) aiIndex[2] += 1;
                            break;
                    }
                    let index = aiIndex.indexOf(Math.max.apply(null, aiIndex));
                    return skills[index];
                })
                .set('closeDialog', true);
            if (result.bool) {
                player.changeSkills(result.links, [skill]);
            }
        },
        async content(event, trigger, player) {
            const { result } = await player
                .chooseTarget(get.prompt2('hokmijijiyi'), function (card, player, target) {
                    return get.info('hokmijijiyi').getClosest(player, target) && target.countGainableCards(player, 'h');
                })
                .set('ai', function (target) {
                    const player = get.player();
                    let att = get.attitude(player, target);
                    if (att < 0) {
                        att = -Math.sqrt(-att);
                    } else {
                        att = Math.sqrt(att);
                    }
                    return att * lib.card.shunshou.ai.result.target(player, target);
                });
            if (result.bool) {
                const target = result.targets[0];
                player.line(target);
                if (target.countGainableCards(player, 'h')) await player.gainPlayerCard('h', target, true);
            }
            const next = game.createEvent(event.name + '_miji');
            next.player = player;
            next.skill = event.name;
            next.setContent(lib.skill.hokmijijiyi.changeSkill);
        },
    },
    hokmijifenshen: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardEnd',
        },
        forced: true,
        filter(event, player) {
            if (!event.targets || event.targets.length == 0) return false;
            return get.tag(event.card, 'damage');
        },
        async content(event, trigger, player) {
            const { bool, targets } = await player
                .chooseTarget(get.prompt2('hokmijifenshen'), function (card, player, target) {
                    let trigger = _status.event.getTrigger();
                    return trigger.targets.includes(target) && player.canUse(_status.event.card, target, false);
                })
                .set('ai', function (target) {
                    return get.effect(target, _status.event.card, _status.event.player, _status.event.player);
                })
                .set('card', { name: trigger.card.name, suit: trigger.card.suit, number: trigger.card.number, nature: trigger.card.nature })
                .forResult();
            if (bool) {
                player.line(targets);
                const result = game.createEvent(event.name + '_useCard');
                Object.assign(result, {
                    player: player,
                    targets: targets,
                    card: trigger.card,
                    cards: trigger.cards,
                    skill: trigger.skill,
                    forceDie: trigger.forceDie,
                    customArgs: trigger.customArgs,
                    baseDamage: trigger.baseDamage,
                    addCount: false,
                    animate: false,
                    popup: false,
                });
                result.setContent('useCard');
                await result;
            }
            const next = game.createEvent(event.name + '_miji');
            next.player = player;
            next.skill = event.name;
            next.setContent(lib.skill.hokmijijiyi.changeSkill);
        },
    },
    hokmijiyingshi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseJieshuBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            const { bool, targets } = await player
                .chooseTarget(get.prompt2('hokmijiyingshi'), function (card, player, target) {
                    return get.event('targetx').includes(target);
                })
                .set('ai', function (target) {
                    const player = get.player();
                    return get.damageEffect(target, player, player);
                })
                .set(
                    'targetx',
                    player.getHistory('sourceDamage').map((evt) => evt.player)
                )
                .forResult();
            if (bool) {
                const target = targets[0];
                player.line(target);
                target.damage();
            }
            const next = game.createEvent(event.name + '_miji');
            next.player = player;
            next.skill = event.name;
            next.setContent(lib.skill.hokmijijiyi.changeSkill);
        },
    },
    hokmijianxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'sha',
            nature: 'stab',
        },
        filterCard: (card) => get.type(card) == 'basic',
        viewAsFilter(player) {
            if (!player.countCards('h', { type: 'basic' })) return false;
        },
        check(card) {
            return 6 - get.value(card);
        },
        async precontent(event, trigger, player) {
            const next = game.createEvent(event.result.skill + '_miji');
            next.player = player;
            next.skill = event.result.skill;
            next.setContent(lib.skill.hokmijijiyi.changeSkill);
        },
    },
    hokmijiyinni: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filterCard(card) {
            return get.type(card) != 'basic';
        },
        check(card) {
            return 6 - get.value(card);
        },
        selectCard: [1, 2],
        filter(event, player) {
            return player.countCards('h', (card) => get.type(card) != 'basic');
        },
        async content(event, trigger, player) {
            lib.skill.hokhuanwu.yinni(player);
            await player.gain(lib.card.ying.getYing(event.cards.length), 'gain2');
            const next = game.createEvent(event.name + '_miji');
            next.player = player;
            next.skill = event.name;
            next.setContent(lib.skill.hokmijijiyi.changeSkill);
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return player.getSkills(null, false, false).filter(function (skill) {
                        var info = lib.skill[skill];
                        return info && info.hiddenSkill;
                    }).length
                        ? 2
                        : 1;
                },
            },
        },
    },
    hokzhanfangdaofeng: {
        derivation: ['hokkongliezhan', 'hokxuanwuzhihua', 'hokcangpozhan', 'hokxunliezhihua'],
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            const nature = player.storage.hokzhanfangdaofeng ? 'thunder' : 'fire';
            return event.filterCard({ name: 'sha', nature: nature }, player, event);
        },
        filterCard(card, player) {
            return get.color(card, player) == (!player.storage.hokzhanfangdaofeng ? 'red' : 'black');
        },
        viewAs(cards, player) {
            var name = 'sha',
                nature = null;
            switch (get.color(cards[0], player)) {
                case 'red':
                    nature = 'fire';
                    break;
                case 'black':
                    nature = 'thunder';
                    break;
            }
            return { name: name, nature: nature };
        },
        viewAsFilter(player) {
            if (!player.countCards('h', (card) => lib.skill.hokzhanfangdaofeng.filterCard(card, player))) return false;
        },
        prompt() {
            const player = get.player();
            return !player.storage.hokzhanfangdaofeng ? '将一张红色手牌当火【杀】使用' : '将一张黑色手牌当蕾【杀】使用';
        },
        check(card) {
            return 6 - get.value(card);
        },
        async precontent(event, trigger, player) {
            const skill = 'hokzhanfangdaofeng';
            await player.changeZhuanhuanji(skill);
            player.tempBanSkill(skill, false, false);
            const storage = player.storage[skill];
            player.addAdditionalSkills(skill, lib.skill[skill].derivation.slice(0).splice(storage ? -2 : 0, 2));
        },
        hiddenCard(player, name) {
            if (name != 'sha') return;
            return player.countCards('h', (card) => lib.skill.hokzhanfangdaofeng.filterCard(card, player)) > 0;
        },
        ai: {
            order(item, player) {
                if (player && _status.event.type == 'phase') {
                    var max = 0;
                    var list = ['thunder', 'fire'];
                    var map = { thunder: 'blank', fire: 'red' };
                    for (let i = 0; i < list.length; i++) {
                        var nature = list[i];
                        if (nature == (player.storage.hokzhanfangdaofeng ? 'thunder' : 'fire')) continue;
                        if (
                            player.countCards('h', function (card) {
                                return (name != 'sha' || get.value(card) < 5) && get.color(card, player) == map[nature];
                            }) > 0 &&
                            player.getUseValue({ name: 'sha', nature: nature }) > 0
                        ) {
                            var temp = get.order({ name: 'sha', nature: nature });
                            if (temp > max) max = temp;
                        }
                    }
                    max /= 1.1;
                    return max;
                }
                return 2;
            },
            result: {
                player(player) {
                    const nature = player.storage.hokzhanfangdaofeng ? 'thunder' : 'fire';
                    return player.getUseValue({ name: 'sha', nature: nature });
                },
            },
        },
        mark: true,
        marktext: '☯',
        zhuanhuanji: true,
        init(player, skill) {
            player.addAdditionalSkills(skill, lib.skill[skill].derivation.slice(0).splice(player.storage[skill] ? -2 : 0, 2));
        },
        intro: {
            content(storage, player, skill) {
                if (!storage) return '你可以将一张红色牌当火【杀】使用,切换至重剑状态';
                return '你可以将一张黑色牌当雷【杀】使用,切换至轻剑状态';
            },
        },
    },
    hokkongliezhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable(skill, player) {
            return 1 + (player.hasSkill(skill + '_rewrite', null, null, false) ? 1 : 0);
        },
        filter(event, player) {
            return game.hasPlayer((current) => lib.skill.hokkongliezhan.filterTarget(null, player, current));
        },
        filterTarget(card, player, target) {
            return player.countDiscardableCards(target, 'h');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, cards } = await target
                .discardPlayerCard(player, 'h', true)
                .set('prompt', get.translation(event.name))
                .set('prompt2', `弃置${get.translation(player)}的一张手牌,若此牌的点数大于5,其对造成1点雷电伤害,否则其摸一张牌.`)
                .forResult();
            if (bool) {
                if (cards.reduce((p, c) => (p += c.number), 0) > 5) {
                    await target.damage('thunder');
                } else {
                    await player.draw();
                    player.addTempSkill(event.name + '_rewrite', 'phaseUseEnd');
                }
            }
        },
        ai: {
            order() {
                const player = get.player();
                return get.order('hokzhanfangdaofeng') + 0.1;
            },
            result: {
                target(player, target) {
                    if (!player.countCards('h', (card) => card.number > 5)) return 0.5;
                    return get.damageEffect(target, player, target, 'thunder');
                },
            },
        },
        subSkill: {
            rewrite: {
                charlotte: true,
            },
        },
    },
    hokxuanwuzhihua: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            if (!event.hasNature('thunder')) return false;
            return event.player.countCards('h') > player.countCards('h');
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const num = trigger.player.countCards('h') - player.countCards('h');
            if (num > 0) trigger.player.chooseToDiscard('h', num, true);
        },
    },
    hokcangpozhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable(skill, player) {
            return 1 + (player.hasSkill(skill + '_rewrite', null, null, false) ? 1 : 0);
        },
        filter(event, player) {
            return game.hasPlayer((current) => lib.skill.hokcangpozhan.filterTarget(null, player, current));
        },
        filterTarget(card, player, target) {
            return target != player && target.countDiscardableCards(player, 'h');
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            const { bool, cards } = await player
                .discardPlayerCard(target, 'h', true)
                .set('prompt', get.translation(event.name))
                .set('prompt2', `弃置${get.translation(target)}的一张手牌,若此牌的字数小于2,你对其造成1点火焰伤害,否则你弃一张牌.`)
                .forResult();
            if (bool) {
                if (cards.reduce((p, c) => (p += get.cardNameLength(c)), 0) < 4) {
                    await target.damage('fire');
                } else if (
                    player.hasCard(function (card) {
                        return lib.filter.cardDiscardable(card, player, event.name);
                    }, 'he')
                ) {
                    await player.chooseToDiscard('he', true, `你触发${get.translation(event.name)}的效果,请弃置一张牌`);
                    player.addTempSkill(event.name + '_rewrite', 'phaseUseEnd');
                }
            }
        },
        ai: {
            order() {
                const player = get.player();
                return get.order('hokzhanfangdaofeng') + 0.1;
            },
            result: {
                target(player, target) {
                    return get.damageEffect(target, player, target, 'fire');
                },
            },
        },
        subSkill: {
            rewrite: {
                charlotte: true,
            },
        },
    },
    hokxunliezhihua: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        forced: true,
        filter(event, player) {
            if (!event.hasNature('fire')) return false;
            return event.player.getHp() > player.getHp();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const num = player.getHp() - trigger.player.getHp();
            await trigger.player.changeHp(num);
        },
    },
    hokyanling: {
        derivation: ['dcdyqingshi', 'dcqiangzhi', 'tiansuan', 'dcjiezhen'],
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        forced: true,
        filter(event, player) {
            if (player.isTempBanned('hokyanling')) return false;
            if (!player.countCards('hs', (card) => !get.event('hokyanling').includes(card.name))) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return get.zhinangs().includes(name);
                })
                .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
        },
        onChooseToUse(event) {
            if (game.online || get.event('hokyanling')) return;
            const player = get.player(),
                list = [];
            for (const i of lib.inpile) {
                if (event.filterCard && event.filterCard({ name: i }, player, event)) list.add(i);
            }
            event.set('hokyanling', list);
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return get.zhinangs().includes(name);
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('言灵', [list, 'vcard'], 'hidden');
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                const player = _status.event.player,
                    card = { name: button.link[2] };
                return player.getUseValue(card);
            },
            backup(links, player) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard(card, player) {
                        return !get.event('hokyanling').includes(card.name);
                    },
                    selectCard: -1,
                    check(card) {
                        if (ui.selected.cards.length > 1) return 0;
                        return 6.5 - get.value(card);
                    },
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('hokyanling', false, false);
                    },
                };
            },
            prompt(links, player) {
                return '选择' + get.translation(links[0][3] || '') + '【' + get.translation(links[0][2]) + '】的目标';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            if (!get.zhinangs().includes(name)) return false;
            return !player.isTempBanned('hokyanling');
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        yanling: new Map([
            [
                'zhoushu',
                {
                    skill: 'dcdyqingshi',
                    filter(event, evt) {
                        if (!event.targets || !event.targets.length) return false;
                        if (!evt.targets || !evt.targets.length) return false;
                        return event.targets.slice().removeArray(evt.targets).length == 0 && evt.targets.slice().removeArray(event.targets).length == 0;
                    },
                    async content(event, trigger, player) {
                        const evt = lib.skill.dcjianying.getLastUsed(player, trigger);
                        const targets = trigger.targets.filter((target) => {
                            return target != player && evt.targets.includes(target) && target.isIn();
                        });
                        if (targets.length) {
                            const { result } = await player
                                .chooseTarget(true, '对一名不为你的目标角色造成1点伤害', (card, player, target) => {
                                    return _status.event.targets.includes(target);
                                })
                                .set('ai', (target) => {
                                    const player = get.player();
                                    return get.damageEffect(target, player, player);
                                })
                                .set('targets', targets);
                            if (result.bool) {
                                const target = result.targets[0];
                                target.damage();
                            }
                        }
                    },
                },
            ],

            [
                'bilei',
                {
                    skill: 'dcqiangzhi',
                    filter(event, evt) {
                        if (event.player.hasHistory('useSkill', (evt) => evt.skill == 'dcqiangzhi')) return false;
                        if (!game.hasPlayer((current) => lib.skill.dcqiangzhi.filterTarget(null, event.player, current))) return false;
                        return get.color(event.card) == get.color(evt.card);
                    },
                    async content(event, trigger, player) {
                        const { result } = await player
                            .chooseTarget(true, get.prompt2('dcqiangzhi'), (card, player, target) => {
                                if (target == player) return false;
                                return target.countDiscardableCards(player, 'he') + player.countDiscardableCards(player, 'he') >= 3;
                            })
                            .set('ai', (target) => {
                                const player = get.player();
                                return (get.effect(target, { name: 'guohe_copy2' }, player, target) / 2) * (target.countDiscardableCards(player, 'he') >= 2 ? 1.25 : 1) + get.damageEffect(target, player, target) / 3;
                            });
                        if (result.bool) {
                            result.skill = 'dcqiangzhi';
                            player.useResult(result, event);
                        }
                    },
                },
            ],

            [
                'mingshu',
                {
                    skill: 'tiansuan',
                    filter(event, evt) {
                        if (event.player.hasHistory('useSkill', (evt) => evt.skill == 'tiansuan')) return false;
                        if (event.player.storage.tiansuan2) return false;
                        return get.cardNameLength(event.card) == get.cardNameLength(evt.card);
                    },
                    async content(event, trigger, player) {
                        player.useSkill('tiansuan');
                    },
                },
            ],

            [
                'caozong',
                {
                    skill: 'dcjiezhen',
                    filter(event, evt) {
                        if (event.player.hasHistory('useSkill', (evt) => evt.skill == 'dcjiezhen')) return false;
                        return event.card.name == evt.card.name;
                    },
                    async content(event, trigger, player) {
                        const { result } = await player
                            .chooseTarget(get.prompt2('dcjiezhen'), function (card, player, target) {
                                return target != player;
                            })
                            .set('ai', (target) => {
                                var skills = target.getSkills(null, false, false).filter(function (i) {
                                    if (i == 'bazhen') return;
                                    var info = get.info(i);
                                    return info && !get.is.locked(i) && !info.limited && !info.juexingji && !info.zhuSkill && !info.charlotte;
                                });
                                if (!skills.length && target.hasEmptySlot(2)) return 1;
                                return -0.5 * skills.length;
                            });
                        if (result.bool) {
                            result.skill = 'dcjiezhen';
                            player.useResult(result, event);
                        }
                    },
                },
            ],
        ]),
        init(player) {
            var history = player.getAllHistory('useCard');
            if (history.length) {
                var trigger = history[history.length - 1];
                if (trigger.card.suit == 'none' || typeof trigger.card.number != 'number') return;
                player.storage.hokyanling_mark = trigger.card;
                player.markSkill('hokyanling_mark');
                game.broadcastAll(
                    function (player, suit) {
                        if (player.marks.hokyanling_mark) player.marks.hokyanling_mark.firstChild.innerHTML = get.translation(trigger.card.name);
                    },
                    player,
                    trigger.card.suit
                );
            }
        },
        onremove(player) {
            player.unmarkSkill('hokyanling_mark');
            delete player.storage.hokyanling_mark;
        },
        group: ['hokyanling_zhinang', 'hokyanling_mark'],
        subSkill: {
            zhinang: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    var evt = lib.skill.dcjianying.getLastUsed(player, event);
                    if (!evt || !evt.card) return false;
                    return get.zhinangs().includes(event.card.name);
                },
                async content(event, trigger, player) {
                    var evt = lib.skill.dcjianying.getLastUsed(player, trigger);
                    var yanling = lib.skill.hokyanling.yanling;
                    var list = ['zhoushu', 'bilei', 'mingshu', 'caozong'];
                    while (list.length) {
                        var info = list.shift();
                        if (yanling.get(info).filter(trigger, evt)) {
                            var next = game.createEvent(info, false);
                            next.player = player;
                            next._trigger = trigger;
                            next.setContent(yanling.get(info).content);
                        }
                    }
                },
            },
            mark: {
                charlotte: true,
                trigger: {
                    player: 'useCard1',
                },
                forced: true,
                popup: false,
                firstDo: true,
                async content(event, trigger, player) {
                    if (trigger.card.suit == 'none' || typeof trigger.card.number != 'number') player.unmarkSkill('hokyanling_mark');
                    else {
                        player.storage.hokyanling_mark = trigger.card;
                        player.markSkill('hokyanling_mark');
                        game.broadcastAll(
                            function (player, suit) {
                                if (player.marks.hokyanling_mark) player.marks.hokyanling_mark.firstChild.innerHTML = get.translation(trigger.card.name);
                            },
                            player,
                            trigger.card.suit
                        );
                    }
                },
                intro: {
                    markcount: () => 0,
                    content(card, player) {
                        const history = player.getAllHistory('useCard'),
                            last = history[history.length - 1];
                        let des = '<li>上张牌目标:' + get.translation(last.targets) || '无';
                        des += '<br><li>上张牌颜色:' + get.translation(get.color(card, player));
                        des += '<br><li>上张牌字数:' + get.cardNameLength(card);
                        des += '<br><li>上张牌牌名:' + get.translation(card.name);
                        return des;
                    },
                },
            },
        },
    },
    hokrenfeng: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardEnd',
        },
        forced: true,
        async content(event, trigger, player) {
            if (player.countCards('h') != player.getHandcardLimit()) return;
            if (player.getStat('skill').hokhuadieshan) delete player.getStat('skill').hokhuadieshan;
        },
        mod: {
            globalFrom(from, to, distance) {
                if (_status.currentPhase && _status.currentPhase != from) return;
                return distance - from.getHistory('useSkill', (evt) => evt.skill == 'hokrenfeng').length;
            },
            globalTo(from, to, distance) {
                if (_status.currentPhase && _status.currentPhase == to) return;
                return distance + to.getHistory('useSkill', (evt) => evt.skill == 'hokrenfeng').length;
            },
        },
        ai: {
            combo: 'hokhuadieshan',
        },
    },
    hokhuadieshan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        usable: 1,
        forced: true,
        viewAs: {
            name: 'huogong',
        },
        filter(event, player) {
            return player.countCards('hes');
        },
        viewAsFilter(player) {
            return player.countCards('hes');
        },
        filterCard: true,
        position: 'hes',
        check(card) {
            var player = _status.event.player,
                suits = lib.suit.slice(0);
            if (
                player.countCards('h') > 4 &&
                player.hasCard(function (card) {
                    suits.remove(card.suit);
                    return suits.length == 0;
                }, 'h')
            ) {
                return 7.5 - get.value(card);
            }
            return 6 - get.value(card);
        },
        async precontent(event, trigger, player) {
            player
                .when('useCardAfter')
                .filter((event, player) => {
                    return event.skill == 'hokhuadieshan';
                })
                .then(() => {
                    if (
                        player.hasHistory('sourceDamage', (evt) => {
                            return evt.card == trigger.card;
                        })
                    ) {
                        player.addSkill('hokhuadieshan_add');
                        player.addMark('hokhuadieshan_add', 1, false);
                        const cards = player
                            .getHistory('lose', function (evt) {
                                return evt.type == 'discard' && evt.getParent(3).card == trigger.card;
                            })
                            .map((evt) => evt.cards2)
                            .flat();
                        if (cards.length) player.gain(cards, 'gain2');
                    } else {
                        player.addSkill('hokhuadieshan_sub');
                        player.addMark('hokhuadieshan_sub', 1, false);
                        const cards = [];
                        game.getGlobalHistory('everything', function (evt) {
                            if (evt.name != 'showCards') return;
                            if (evt.parent.name != 'huogong') return;
                            if (evt.parent.skill != 'hokhuadieshan') return;
                            if (evt.parent.card != trigger.card) return;
                            if (!trigger.targets.includes(evt.player)) return;
                            cards.addArray(evt.cards);
                        });
                        if (cards.length) player.gain(cards, 'giveAuto');
                    }
                });
        },
        subSkill: {
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        const all = player.getAllHistory('useCard', (evt) => evt.skill == 'hokhuadieshan').length,
                            add = player.getAllHistory('sourceDamage', (evt) => {
                                return evt.card && evt.card.name == 'huogong' && evt.parent.skill == 'hokhuadieshan';
                            }).length,
                            sub = all - add;
                        return (num += add - sub);
                    },
                },
            },
            add: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num += player.getStorage('hokhuadieshan_add'));
                    },
                },
            },
            sub: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num -= player.getStorage('hokhuadieshan_sub'));
                    },
                },
            },
        },
    },
    hokliudaowushu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return !player.isTempBanned('hokliudaowushu');
        },
        chooseButton: {
            dialog(event, player) {
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('changeSkill');
                dialog.classList.add('noupdate');
                dialog.style.height = 300 + 'px';
                const deslist = ['弃置1张牌,若弃置伤害牌,你分配1点伤害', '重铸2张牌,若重铸同色牌,你回复1点体力', '摸3张牌,若为不同类型牌,你失去1张体力'];
                for (let i = 0; i < 3; i++) {
                    const area = ui.create.div('.sgs-yijinarea_long', dialog);
                    area.style.top = (i > 1 ? 60 : i > 0 ? 30 : 0) + '%';
                    area.link = i;
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    const des = ui.create.div('.yijin-skillTips', area);
                    des.innerHTML = deslist[i];
                    des.style.fontSize = '25px';
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>流刀舞术</span>,执行一项";
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = '流刀舞术';
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                return dialog;
            },
            filter(button, player) {
                switch (button.link) {
                    case 0:
                        return player.hasCard((card) => lib.filter.cardDiscardable(card, player, 'hokliudaowushu'), 'he');
                    case 1:
                        return player.countCards('he', (card) => player.canRecast(card)) > 1;
                    default:
                        return true;
                }
            },
            check(button) {
                const player = get.player();
                switch (button.link) {
                    case 0: {
                        if (
                            game.hasPlayer((target) => {
                                return get.damageEffect(target, player, player) > 0;
                            })
                        )
                            return 1.2;
                        return 0;
                    }
                    case 1: {
                        const recast_num = player.countCards('he', (card) => player.canRecast(card) && get.value(card) < 6.5);
                        if (recast_num > 1 && player.isDamaged()) return 1.5;
                        return 1.1;
                    }
                    case 2: {
                        if (player.needsToDiscard()) return 0.5;
                        return 1.4;
                    }
                }
                return 1;
            },
            backup(links) {
                const next = get.copy(lib.skill.hokliudaowushu.backups[links[0]]);
                next.audio = 'hokliudaowushu';
                return next;
            },
            prompt(links) {
                return ['弃置1张牌,若弃置伤害牌,你分配1点伤害', '重铸2张牌,若重铸同色牌,你回复1点体力', '摸3张牌,若为不同类型牌,你失去1点体力'][links[0]];
            },
        },
        backups: [
            {
                filterCard: true,
                position: 'hes',
                check(card) {
                    if (get.tag(card, 'damage')) return 7 - get.value(card);
                    return 6 - get.value(card);
                },
                async content(event, trigger, player) {
                    player.tempBanSkill('hokliudaowushu', 'phaseUseAfter', false);
                    const card = event.cards[0];
                    if (!get.tag(card, 'damage')) return;
                    const { targets } = await player
                        .chooseTarget(true, `你对一名角色造成1点伤害`)
                        .set('ai', (target) => {
                            return get.damageEffect(target, player, player);
                        })
                        .forResult();
                    const target = targets[0];
                    player.line(target);
                    target.damage(1, player, 'nocard');
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return player.countCards('h', function (card) {
                                return get.tag(card, 'damage');
                            });
                        },
                    },
                },
            },
            {
                filterCard(card, player) {
                    return player.canRecast(card);
                },
                check(card) {
                    const player = get.player();
                    let val = 6;
                    if (get.recoverEffect(player, player, player) > 0) {
                        if (
                            player.countCards('hes', function (card) {
                                return get.color(card);
                            }) > 1
                        )
                            val += 1.2;
                        if (ui.selected.cards.length) {
                            if (get.color(card) == get.color(ui.selected.cards[0])) val += 1.5;
                        }
                    }
                    return val - get.value(card);
                },
                selectCard: 2,
                complexCard: true,
                position: 'hes',
                lose: false,
                discard: false,
                delay: false,
                async content(event, trigger, player) {
                    player.tempBanSkill('hokliudaowushu', 'phaseUseAfter', false);
                    const cards = event.cards;
                    const colors = cards.map((card) => get.color(card)).toUniqued().length;
                    await player.recast(cards);
                    if (colors.length < 2) return;
                    player.recover();
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                    },
                },
            },
            {
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    player.tempBanSkill('hokliudaowushu', 'phaseUseAfter', false);
                    const { result } = await player.draw(3);
                    const types = result.map((card) => get.type(card)).toUniqued();
                    if (types.length <= 1) return;
                    if (
                        player.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, player, 'hokliudaowushu');
                        }, 'h')
                    )
                        player.loseHp();
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
        ],

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
    hokyanfan: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['shaMiss', 'eventNeutralized'],
        },
        filter(event, player) {
            if (event.type != 'card' && event.name != '_wuxie') return false;
            var history = game.getGlobalHistory('everything');
            for (var evt of history) {
                if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                    var evtx = evt.parent;
                    return evtx.name == 'useCard' && evtx.player == player && evt == event;
                }
            }
            return false;
        },
        async content(event, trigger, player) {
            await player.draw();
            const cards = trigger.cards.filterInD();
            if (cards.length) await player.gain(cards, 'gain2');
        },
    },
    hokjuhe: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        viewAs: {
            name: 'sha',
        },
        filter(event, player) {
            return player.countCards('h') > 1;
        },
        filterTarget(card, player, target) {
            return get.distance(target, player) <= 2 && player.canUse({ name: 'sha' }, target);
        },
        selectTarget: [1, Infinity],
        check(card) {
            return 6 - get.value(card);
        },
        filterCard: true,
        selectCard: 2,
        complexTarget: true,
        multitarget: true,
        ai: {
            order(item, player) {
                return get.order({ name: 'sha' }, player);
            },
            result: {
                target(player, target) {
                    if (ui.selected.targets.length < 2) {
                        return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player);
                    } else {
                        if (!player.hasSkill('hokyanfan')) return;
                        return get.effect(target, { name: 'sha', nature: 'thunder' }, player, player) * 2;
                    }
                },
            },
        },
    },
    hokxixue: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardEnd',
        },
        filter(event, player) {
            var num = 0;
            player.getHistory('sourceDamage', function (evt) {
                if (evt.card == event.card) num += evt.num;
            });
            return num > 1 && player.getHp() != player.countCards('h');
        },
        check(event, player) {
            var num = player.countCards('h') - player.getHp();
            if (num > 0) {
                if (player.isHealthy()) return false;
                var cards = player.getCards('h'),
                    val = 0;
                if (num.length > 3) return false;
                for (const i of cards) {
                    if (get.tag(i, 'recover') > 0) return false;
                    if (get.value(i) < 7) val++;
                } //QQQ
                return val >= num;
            }
            return true;
        },
        prompt2(event, player) {
            var num = player.countCards('h') - player.getHp();
            return num > 0 ? '你可以弃置' + get.cnNumber(Math.abs(num)) + '张牌并回复1点体力' : '你可以摸' + get.cnNumber(Math.abs(num)) + '张牌';
        },
        async content(event, trigger, player) {
            var num = player.countCards('h') - player.getHp();
            if (num > 0) await player.chooseToDiscard('h', num, true);
            else if (num < 0) await player.draw(Math.abs(num));
            if (player.hasHistory('lose', (evt) => evt.getParent('hokxixue', true) == _status.event)) player.recover();
        },
        ai: {
            threaten: 1.5,
        },
    },
    hokshengjiancaijue: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayer',
        },
        forced: true,
        filter(event, player) {
            return event.card && event.card.name == 'sha';
        },
        logTarget: 'target',
        countSkill(player) {
            return player.getSkills(null, false, false).filter(function (skill) {
                var info = get.info(skill);
                if (!info || info.charlotte) return false;
                if (info.zhuSkill) return player.hasZhuSkill(skill);
                return true;
            }).length;
        },
        async content(event, trigger, player) {
            const target = trigger.target;
            target.addSkill('hokshengjiancaijue_blocker');
            target.markAuto('hokshengjiancaijue_blocker', [trigger.card]);
            if (get.info(event.name).countSkill(target) > get.info(event.name).countSkill(player)) {
                var id = target.playerid;
                var map = trigger.parent.customArgs;
                if (!map[id]) map[id] = {};
                if (typeof map[id].extraDamage != 'number') {
                    map[id].extraDamage = 0;
                }
                map[id].extraDamage++;
            }
        },
        mod: {
            aiOrder(player, card, num) {
                if (typeof card == 'object' && !get.tag(card, 'recover')) {
                    if (
                        game.hasPlayer((current) => {
                            return current.hasSkill('hokshengjiancaijue_blocker') && get.attitude(player, current) <= 0;
                        })
                    )
                        return num - 10;
                }
            },
        },
        ai: {
            ignoreSkill: true,
            directHit_ai: true,
            skillTagFilter(player, tag, arg) {
                if (!arg || arg.isLink || !arg.card || arg.card.name != 'sha') return false;
                if (!arg.target || get.attitude(player, arg.target) >= 0) return false;
                if (tag == 'directHit_ai') return get.attitude(player, arg.target) <= 0;
                if (!arg.skill || !lib.skill[arg.skill] || lib.skill[arg.skill].charlotte || get.is.locked(arg.skill) || !arg.target.getSkills(true, false).includes(arg.skill) || get.info('hokshengjiancaijue').countSkill(arg.target) <= get.info('hokshengjiancaijue').countSkill(player)) return false;
            },
        },
        subSkill: {
            blocker: {
                trigger: {
                    player: ['damage', 'damageCancelled', 'damageZero'],
                    source: ['damage', 'damageCancelled', 'damageZero'],
                    target: ['shaMiss', 'useCardToExcluded', 'useCardToEnd', 'eventNeutralized'],
                    global: ['useCardEnd'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                forceDie: true,
                firstDo: true,
                filter(event, player) {
                    return event.card && player.getStorage('hokshengjiancaijue_blocker').includes(event.card) && (event.name != 'damage' || event.notLink());
                },
                async content(event, trigger, player) {
                    player.getStorage(event.name).remove(trigger.card);
                    if (!player.getStorage(event.name).length) player.removeSkill(event.name);
                },
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                skillBlocker(skill, player) {
                    return !lib.skill[skill].charlotte && !get.is.locked(skill, player);
                },
                mark: true,
                marktext: '禁',
                intro: {
                    markcount: () => 0,
                    content(storage, player, skill) {
                        const list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.hokshengjiancaijue_blocker.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
            },
        },
    },
    hokruyijingu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player, name) {
            if (player.hasSkill('hokruyijingu_effect')) return false;
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = event.sourceSkill || event.skill;
            if (!skill) return false;
            let info = get.info(skill);
            while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
            }
            return player.getOriginalSkills().includes(skill);
        },
        async content(event, trigger, player) {
            player.addSkill('hokruyijingu_effect');
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'yingbian',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'sha';
                },
                async content(event, trigger, player) {
                    const targets = trigger.targets;
                    player.removeSkill('hokruyijingu_effect');
                    const { bool } = await player
                        .chooseBool(`你可以通过助战触发【如意金箍棒】的所有效果`)
                        .set('ai', () => {
                            return true;
                        })
                        .forResult();
                    if (bool && lib.yingbian.condition.complex.has('zhuzhan')) {
                        trigger.yingbianZhuzhanAI = (player, card, source, targets) => (cardx) => {
                            if (get.attitude(player, source) <= 0) return 0;
                            var info = get.info(card),
                                num = 0;
                            if (info && info.ai && info.ai.yingbian) {
                                var ai = info.ai.yingbian(card, source, targets, player);
                                if (ai) num = ai;
                            }
                            return Math.max(num, 6) - get.value(cardx);
                        };
                        const result = await lib.yingbian.condition.complex.get('zhuzhan')(trigger);
                        if (result.zhuzhanresult) {
                            trigger.card.yingbian = true;
                            trigger._hokruyijingu = true;
                            trigger.addCount = false;
                            if (player.stat[player.stat.length - 1].card.sha > 0) {
                                player.stat[player.stat.length - 1].card.sha--;
                            }
                            game.log(player, '使用的', trigger.card, '不计入次数限制');
                            trigger.baseDamage++;
                            game.log(trigger.card, '的伤害+1');
                            trigger.directHit.addArray(game.filterPlayer());
                            game.log(trigger.card, '不可被响应');
                            const { result } = await player
                                .chooseTarget(get.prompt('ruyijingubang_effect'), '为' + get.translation(trigger.card) + '额外指定一个目标', function (card, player, target) {
                                    return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target, false);
                                })
                                .set('sourcex', trigger.targets)
                                .set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.effect(target, _status.event.card, player, player);
                                })
                                .set('card', trigger.card);
                            if (result.bool) {
                                player.line(result.targets);
                                trigger.targets.addArray(result.targets);
                            }
                            return;
                        }
                    }
                    const dialog = ui.create.dialog();
                    dialog.id = 'mobiledialog';
                    dialog.add([
                        [
                            [1, '　　　⒈【杀】无次数限制　　　'],
                            [2, '　　　⒉【杀】的伤害值+1　　　'],
                        ],

                        'tdnodes',
                    ]);
                    dialog.add([
                        [
                            [3, '　　　⒊【杀】不可被响应　　　'],
                            [4, '　　　⒋【杀】的目标数+1　　　'],
                        ],

                        'tdnodes',
                    ]);
                    const tishi = ui.create.div('.skillTishi', dialog);
                    tishi.innerHTML = "你发动了<span style='color: #a4dfd5'>如意金箍棒</span>,可以选择一项增益效果";
                    const skillTitle = ui.create.div('.game_skill_title', dialog);
                    skillTitle.classList.add('ssTitle');
                    skillTitle.innerHTML = '如意金箍';
                    const arrow = new Image();
                    arrow.classList.add('game_skill_arrow');
                    arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                    skillTitle.appendChild(arrow);
                    if (!trigger._hokruyijingu) {
                        trigger._hokruyijingu = true;
                        const { bool, links } = await player
                            .chooseButton(dialog, true)
                            .set('filterButton', function (button) {
                                if (button.link == 4)
                                    return game.hasPlayer(function (current) {
                                        return !trigger.targets.includes(current) && lib.filter.targetEnabled2(trigger.card, player, current) && lib.filter.targetInRange(trigger.card, player, current);
                                    });
                                return true;
                            })
                            .set('ai', function (button) {
                                const player = get.player();
                                const event = _status.event.getTrigger();
                                var num = player.countCards('hs', function (card) {
                                    return card.name == 'sha' && player.hasValueTarget(card, false);
                                });
                                switch (button.link) {
                                    case 1:
                                        if (num > 1) return num - 1;
                                        break;
                                    case 2:
                                        var num = 1.3;
                                        if (
                                            targets.filter(function (current) {
                                                if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
                                                    if (current.hasSkillTag('useShan')) num = 1.9;
                                                    return true;
                                                }
                                                return false;
                                            }).length
                                        )
                                            return num + Math.random();
                                        return 0.5 + Math.random();
                                        break;
                                    case 3:
                                        var num = 1.3;
                                        if (
                                            targets.filter(function (current) {
                                                if (current.mayHaveShan() && get.attitude(player, current) <= 0) {
                                                    if (current.hasSkillTag('useShan')) num = 1.9;
                                                    return true;
                                                }
                                                return false;
                                            }).length
                                        )
                                            return num + Math.random();
                                        return 1.5 + Math.random();
                                        break;
                                    case 4:
                                        if (
                                            game.hasPlayer(function (current) {
                                                return lib.filter.targetEnabled2(event.card, player, current) && !targets.includes(current) && get.effect(current, event.card, player, player) > 0;
                                            })
                                        )
                                            return 1 + Math.random();
                                        break;
                                }
                            })
                            .forResult();
                        if (bool) {
                            switch (links[0]) {
                                case 1:
                                    trigger.addCount = false;
                                    if (player.stat[player.stat.length - 1].card.sha > 0) {
                                        player.stat[player.stat.length - 1].card.sha--;
                                    }
                                    game.log(player, '使用的', trigger.card, '不计入次数限制');
                                    break;
                                case 2:
                                    trigger.baseDamage++;
                                    game.log(trigger.card, '的伤害+1');
                                    break;
                                case 3:
                                    trigger.directHit.addArray(game.filterPlayer());
                                    game.log(trigger.card, '不可被响应');
                                    break;
                                case 4:
                                    const { result } = await player
                                        .chooseTarget(get.prompt('ruyijingubang_effect'), '为' + get.translation(trigger.card) + '额外指定一个目标', function (card, player, target) {
                                            return !_status.event.sourcex.includes(target) && player.canUse(_status.event.card, target, false);
                                        })
                                        .set('sourcex', trigger.targets)
                                        .set('ai', function (target) {
                                            var player = _status.event.player;
                                            return get.effect(target, _status.event.card, player, player);
                                        })
                                        .set('card', trigger.card);
                                    if (result.bool) {
                                        player.line(result.targets);
                                        trigger.targets.addArray(result.targets);
                                    }
                                    break;
                            }
                        }
                    }
                },
                mark: true,
                marktext: '金箍',
                intro: {
                    name: '如意金箍',
                    content: `你使用的下张【杀】获得【如意金箍棒】的一个效果`,
                },
            },
        },
    },
    hokhushenzhoufa: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            target: 'useCardToTargeted',
        },
        usable: 1,
        logTarget: 'player',
        filter(event, player) {
            if (event.player == player) return false;
            return player.countCards('h', (card) => player.canRecast(card));
        },
        filterx(player) {
            const cards = player.getCards('h');
            return cards.map((card) => get.color(card, player)).toUniqued().length == 1;
        },
        check(event, player) {
            let hs = player.getCards('h');
            let val = hs.map((card) => get.value(card));
            if (val.every((v) => v > 7)) return true;
            if (hs.length > 3) return false;
            return get.effect(player, event.card, event.player, player) <= 0;
        },
        async content(event, trigger, player) {
            const cards = player.getCards('h', lib.filter.cardRecastable);
            await player.recast(cards);
            if (lib.skill.hokhushenzhoufa.filterx(player)) {
                trigger.excluded.push(player);
                game.log('#g【护身咒法】:', trigger.card, '对', player, '无效');
            }
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (target.getStat('triggerSkill').hokhushenzhoufa) return;
                    if (!target.countCards('h')) return;
                    if (player._hokhushenzhoufa_tmp) return;
                    if (_status.event.getParent('useCard', true) || _status.event.getParent('_wuxie', true)) return;
                    if (target.countCards('h') < 4) {
                        if (target.countCards('h') > 1) {
                            return [1, 1 / target.countCards('h')];
                        } else {
                            if (get.attitude(player, target) < 0) {
                                if (card.name == 'sha') return;
                                var sha = false;
                                player._hokhushenzhoufa_tmp = true;
                                var num = player.countCards('h', function (card) {
                                    if (card.name == 'sha') {
                                        if (sha) {
                                            return false;
                                        } else {
                                            sha = true;
                                        }
                                    }
                                    return player.canUse(card, target) && get.effect(target, card, player, player) > 0;
                                });
                                delete player._hokhushenzhoufa_tmp;
                                if (num < 2) {
                                    var enemies = player.getEnemies();
                                    if (enemies.length == 1 && enemies[0] == target && player.needsToDiscard()) {
                                        return;
                                    }
                                    return 0;
                                }
                            }
                        }
                    }
                    return [1, 0.5];
                },
            },
        },
    },
    hokdouzhanchongfeng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        forced: true,
        filter(event, player) {
            if (player.countCards('he') < 2 || player.isTempBanned('hokdouzhanchongfeng_backup')) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return ['basic', 'trick'].includes(type) && player.hasAllHistory('useCard', (evt) => evt.card.name == name);
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
                        return ['basic', 'trick'].includes(type) && player.hasAllHistory('useCard', (evt) => evt.card.name == name);
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('斗战冲锋', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                const player = get.player();
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
                            if (player.countCards('hs', { type: 'basic' }) > 2) return 3;
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
                    audio: 'hokdouzhanchongfeng',
                    filterCard(card, player) {
                        if (ui.selected.cards.length) return get.color(card) == get.color(ui.selected.cards[0]);
                        return true;
                    },
                    selectCard: [2, Infinity],
                    popname: true,
                    complexCard: true,
                    position: 'hes',
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    check(card) {
                        if (ui.selected.cards.length) {
                            if (get.color(card) == get.color(ui.selected.cards[0])) return 7 - get.value(card);
                            if (ui.selected.cards.length > 2) return 0;
                        }
                        return 7 - _status.event.player.getUseValue(card, null, true);
                    },
                    async precontent(event, trigger, player) {
                        player.tempBanSkill(event.result.skill, false, false);
                    },
                };
            },
            prompt(links) {
                return '将一种颜色的至少两张牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (get.type(name) != 'basic') return false;
            if (player.countCards('hes') < 2 || !player.hasAllHistory('useCard', (evt) => evt.card.name == name)) return false;
            return Object.keys(lib.color).some((color) => player.countCards('hes', { color: color })) > 1;
        },
        ai: {
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag, arg) {
                if (player.isTempBanned('hokdouzhanchongfeng_backup')) return false;
                if (player.countCards('hes') < 2) return false;
                return true;
            },
            order() {
                const player = _status.event.player;
                const event = _status.event;
                if (event.filterCard && event.filterCard({ name: 'jiu' }, player, event) && get.effect(player, { name: 'jiu' }) > 0 && player.countCards('hs', { type: 'basic' }) > 2) {
                    return 3.3;
                }
                return 3.1;
            },
            result: {
                player(player) {
                    return 1;
                },
            },
        },
    },
    hokqiangliyuanhu: {
        derivation: 'yuanhu',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        global: ['hokqiangliyuanhu_tengjia1', 'hokqiangliyuanhu_tengjia2', 'hokqiangliyuanhu_tengjia3', 'hokqiangliyuanhu_yuanhu'],
        marktext: '援',
        mark: true,
        intro: {
            markcount(storage, player) {
                return get.info('hokqiangliyuanhu').filterx(player) ? '生效' : '失效';
            },
            mark(dialog, content, player) {
                const targets = game.filterPlayer((target) => {
                    return target != player && get.info('hokqiangliyuanhu').filterx(target);
                });
                if (targets?.length) dialog.addSmall(targets);
            },
        },
        filterx(player) {
            if (!player.isEmpty(2)) return false;
            if (player.hasSkill('hokqiangliyuanhu')) return true;
            const targets = game.filterPlayer((target) => target.hasSkill('hokqiangliyuanhu'));
            if (!player.isMinHp()) return false;
            return targets.some((target) => get.distance(player, target) <= 1);
        },
        subSkill: {
            tengjia1: {
                inherit: 'tengjia1',
                filter(event, player) {
                    if (!lib.skill.hokqiangliyuanhu.filterx(player)) return false;
                    return lib.skill.tengjia1.filter(event, player);
                },
            },
            tengjia2: {
                inherit: 'tengjia2',
                filter(event, player) {
                    if (!lib.skill.hokqiangliyuanhu.filterx(player)) return false;
                    return lib.skill.tengjia2.filter(event, player);
                },
            },
            tengjia3: {
                inherit: 'tengjia3',
                filter(event, player) {
                    if (!lib.skill.hokqiangliyuanhu.filterx(player)) return false;
                    return lib.skill.tengjia3.filter(event, player);
                },
            },
            yuanhu: {
                audio: 'hokqiangliyuanhu',
                inherit: 'yuanhu',
                filter(event, player) {
                    if (!lib.skill.hokqiangliyuanhu.filterx(player)) return false;
                    return lib.skill.yuanhu.filter(event, player);
                },
            },
        },
    },
    hokchengjiesheji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            if (get.info('hokchengjiesheji').getNum(player) >= 3) return false;
            return (
                get.is.ordinaryCard(event.card) &&
                !player.hasHistory('lose', function (evt) {
                    return evt.parent == event && Object.values(evt.gaintag_map).some((value) => value.includes('igniteCards'));
                })
            );
        },
        getNum(player) {
            return game.getGlobalHistory('everything', (evt) => {
                return evt.name == 'igniteCards' && evt.player == player;
            }).length;
        },
        async content(event, trigger, player) {
            const result = await player.draw().forResult();
            await player.igniteCards(result);
        },
        group: 'hokchengjiesheji_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                forced: true,
                _priority: -1,
                filter(event, player) {
                    if (event.targets?.length != 1 || event.card.name == 'sha') return false;
                    return get.tag(event.card, 'damage') > 0.5 && get.info('hokchengjiesheji').getNum(player) >= 3;
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    trigger.parent.effectCount = 2;
                    player.addTempSkill('hokchengjiesheji_effect');
                    player.markAuto('hokchengjiesheji_effect', [[trigger.card, trigger.target]]);
                },
            },
            effect: {
                charlotte: true,
                trigger: {
                    player: 'useCardToBegin',
                },
                filter(event, player) {
                    const storage = player.getStorage('hokchengjiesheji_effect');
                    return storage.some((list) => list[0] == event.card && list[1] == event.target);
                },
                forced: true,
                popup: false,
                firstDo: true,
                async content(event, trigger, player) {
                    const list = player.getStorage('hokchengjiesheji_effect').find((list) => list[0] == trigger.card && list[1] == trigger.target);
                    game.setNature(trigger.card, 'fire');
                    trigger.setContent(lib.card.sha.content);
                },
            },
        },
    },
    hokzhuorizhishi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        viewAs: {
            name: 'wanjian',
        },
        xushiSkill: true,
        viewAsFilter(player) {
            const cards = player.getCards('h').addArray(get.info('hokzhuorizhishi').getCards());
            const suits = cards.reduce((list, card) => list.add(get.suit(card, get.position(card) == 'h' ? player : false)), []);
            if (suits.length < 4) return false;
        },
        getCards() {
            const cards = [];
            game.countPlayer2((target) => {
                target.getHistory('lose', function (evt) {
                    if (evt.position == ui.discardPile) {
                        cards.addArray(evt.cards.filter((card) => get.position(card, true) == 'd'));
                    }
                });
            });
            game.getGlobalHistory('cardMove', function (evt) {
                if (evt.name == 'cardsDiscard') {
                    cards.addArray(evt.cards.filter((card) => get.position(card, true) == 'd'));
                }
            });
            return cards;
        },
        filterCard: () => false,
        selectCard: -1,
        selectTarget: 1,
        async precontent(event, trigger, player) {
            const cards = player.getCards('h').addArray(get.info('hokzhuorizhishi').getCards());
            if (!cards.length) event.result2 = { bool: false };
            else
                event.result2 = await player
                    .chooseButton(4, ['###灼日之矢###你可以将手牌区和中央区中的共计四张不同花色的牌当做仅指定唯一目标的【万箭齐发】使用', cards])
                    .set('filterButton', (button) => {
                        const player = get.player(),
                            event = get.event().parent;
                        if (ui.selected.buttons.some((buttonx) => get.suit(buttonx.link, get.owner(buttonx.link) == player ? player : false) == get.suit(button.link, get.owner(button.link) == player ? player : false))) return false;
                        return event.parent.filterCard(
                            get.autoViewAs(
                                { name: 'wanjian' },
                                ui.selected.buttons.map((button) => button.link)
                            ),
                            player,
                            event
                        );
                    })
                    .set('ai', (button) => {
                        if (get.position(button.link) != 'h') return 10;
                        return 6 - get.value(button.link);
                    })
                    .forResult();
            if (event.result2.bool) {
                event.result.cards.addArray(event.result2.links);
                player.awakenSkill('hokzhuorizhishi');
            } else {
                event.parent.cancel();
                event.parent.goto(0);
                event.getParent(2).goto(0);
            }
        },
        ai: {
            order: 1,
        },
    },
    hokshenxianshizu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        popup: false,
        getNum(player) {
            let num = 0;
            const history = game.getAllGlobalHistory();
            for (let i = history.length - 2; i >= 0; i--) {
                const evt = history[i].everything;
                for (let j = evt.length - 1; j >= 0; j--) {
                    if (evt[j].name == 'gain' && evt[j].player != player && evt[j].source == player) num += evt[j].cards.length;
                }
                if (history[i].isRound) break;
            }
            return num;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    filterCard: true,
                    filterTarget(card, player, target) {
                        return player != target;
                    },
                    ai1(card) {
                        if (card.name == 'du') return 20;
                        return 6 - get.value(card);
                    }, //QQQ
                    ai2(target) {
                        var att = get.attitude(player, target);
                        if (ui.selected.cards.length && ui.selected.cards[0].name == 'du') {
                            return 1 - att;
                        }
                        return att - 4;
                    },
                    prompt: get.prompt2(event.name.slice(0, -5)).replace('你的阶段', get.translation(trigger.name)),
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            await player.give(event.cards, target);
            const num = Math.min(3, get.info('hokshenxianshizu').getNum(player)) + 1;
            await player.draw(num);
        },
    },
    hokyidefuren: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageBegin3',
        },
        popup: false,
        usable: 1,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCardTarget({
                    filterCard: true,
                    filterTarget(card, player, target) {
                        const trigger = get.event().getTrigger();
                        if (player == target) return false;
                        for (let i of game.filterPlayer((p) => p != player)) {
                            let node,
                                str = '';
                            if (i.node.prompt) {
                                node = i.node.prompt;
                                node.innerHTML = '';
                                node.className = 'damage normal-font damageadded';
                            } else {
                                node = ui.create.div('.damage.normal-font', i);
                                i.node.prompt = node;
                                ui.refresh(node);
                                node.classList.add('damageadded');
                            }
                            if (i == trigger.source) str += '伤害来源';
                            else if (i == trigger.player) str += '受伤角色';
                            const description = ui.create.div('.sgs-prompt', node);
                            description.classList.add('jinghongdiao');
                            description.style.left = 60 + '%';
                            description.innerHTML = str;
                        }
                        return target == trigger.source || target == trigger.player;
                    },
                    ai1(card) {
                        if (card.name != 'du' && get.attitude(_status.event.player, _status.currentPhase) < 0 && _status.currentPhase.needsToDiscard()) return -1;
                        if (Array.isArray(ui.selected.cards))
                            for (const i of ui.selected.cards) {
                                if (get.type(i) == get.type(card) || (i.name == 'du' && card.name != 'du')) return -1;
                            }
                        if (card.name == 'du') return 20;
                        return _status.event.player.countCards('h') - _status.event.player.hp;
                    },
                    ai2(target) {
                        const player = get.player(),
                            trigger = get.event().getTrigger();
                        if (target == trigger.player) {
                            if (
                                !trigger.player.hasSkillTag('filterDamage', null, {
                                    player: trigger.source,
                                    card: trigger.card,
                                })
                            )
                                return get.damageEffect(trigger.player, trigger.source || player, player);
                        }
                        return get.damageEffect(trigger.player, trigger.source, player);
                    },
                    prompt: get.prompt2(event.name.slice(0, -5)),
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0],
                cards = event.cards;
            await player.give(cards, target);
            trigger.num += target == trigger.player ? 1 : -1;
        },
        ai: {
            threaten: 0.8,
            effect: {
                target(card, player, target) {
                    if (player.hasSkillTag('jueqing', false, target)) return;
                    if (get.tag(card, 'damage')) return 0.8;
                },
            },
        },
        subSkill: {
            rende: {
                audio: 'hokyidefuren',
                trigger: {
                    source: 'gainEnd',
                },
                forced: true,
                filter(event, player) {
                    if (player == event.player) return false;
                    const evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                logTarget: 'player',
                async content(event, trigger, player) {
                    if (_status.currentPhase == trigger.player) {
                        trigger.player.addTempSkill('hokyidefuren_rende1', 'roundStart');
                        const cards = trigger.getl(player).cards2;
                        trigger.player.addGaintag(cards, 'hokyidefuren_rende1');
                    } else {
                        trigger.player.addTempSkill('hokyidefuren_rende2', 'roundStart');
                        trigger.player.markAuto('hokyidefuren_rende2', [player]);
                    }
                },
            },
            rende1: {
                charlotte: true,
                mark: true,
                marktext: '仁',
                intro: {
                    markcount: () => '使用',
                    content: '不能使用或打出',
                },
                onremove(player, skill) {
                    player.removeGaintag(skill);
                },
                mod: {
                    cardEnabled2(card) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('hokyidefuren_rende1')) {
                            return false;
                        }
                    },
                },
            },
            rende2: {
                trigger: {
                    global: 'useCard',
                },
                charlotte: true,
                forced: true,
                popup: false,
                filter(event, player) {
                    return player.getStorage('hokyidefuren_rende2').includes(event.player);
                },
                async content(event, trigger, player) {
                    trigger.directHit.add(player);
                    game.log(player, '不能响应', trigger.player, '使用的牌');
                },
                mark: true,
                marktext: '仁',
                intro: {
                    markcount: () => '响应',
                    content: '不能响应',
                },
            },
        },
    },
    hokheianqianneng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.canMoveCard();
        },
        async content(event, trigger, player) {
            const { targets, position } = await player.moveCard(true).forResult();
            const list = [];
            if (player.group != 'shu') list.push('shu2');
            if (player.group != 'qun') list.push('qun2');
            if (list.length == 1) event.result = { control: list[0] };
            else
                event.result = await player
                    .chooseControl(list)
                    .set('ai', () => {
                        const player = get.player();
                        let controls = get.event('controls');
                        if (controls.includes('qun2') && player.countCards('h', { name: 'sha' }) > 1 && player.hasUseTarget({ name: 'sha' })) return 'qun2';
                        return controls[controls.length - 1];
                    })
                    .set('prompt', `你发动了${get.translation(event.name)},选择将势力变更为蜀或群`)
                    .forResult();
            const group = event.result.control.slice(0, 3);
            await player.changeGroup(group);
        },
        ai: {
            order: 5,
            result: {
                player(player) {
                    return player.canMoveCard(true);
                },
            },
        },
    },
    hokhuadiweilao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['shaMiss', 'useCardToExcluded', 'eventNeutralized', 'shaCancelled'],
        },
        groupSkill: 'shu',
        filter(event, player) {
            if (player.group != 'shu') return false;
            return event.card && event.card.name == 'sha';
        },
        check(event, player) {
            if (event.getParent.addCount === false) return false;
            if (_status.currentPhase == event.player && player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
            return get.attitude(player, event.player) > 0 && event.player.hasUseTarget({ name: 'sha' }) && event.player.hasSha();
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            await trigger.player.draw();
            await player.damage('nosource');
            if (trigger.player == _status.currentPhase) {
                if (trigger.parent.addCount !== false) {
                    trigger.parent.addCount = false;
                    trigger.player.getStat().card.sha--;
                }
            }
        },
        ai: {
            expose: 0.3,
        },
    },
    hokkuangshouxuexing: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCard',
            player: 'useCardAfter',
        },
        forced: true,
        popup: false,
        groupSkill: 'qun',
        filter(event, player, name) {
            if (player.group != 'qun') return false;
            if (name == 'useCardAfter') {
                if (event.card.name != 'sha' || event.addCount === false) return false;
                return game.hasPlayer((target) => target.getHistory('useCard', (evt) => evt.respondTo && evt.respondTo[1] == event.card));
            }
            const evt = event.getParent(3),
                respondTo = event.respondTo;
            if (evt.name != 'useCard' || !Array.isArray(respondTo) || respondTo[0] != player || respondTo[1].name != 'sha') return false;
            return evt.targets.length > evt.num + 1;
        },
        async content(event, trigger, player) {
            switch (event.triggername) {
                case 'useCard':
                    {
                        var evt = trigger.getParent(3);
                        var targets = evt.targets.slice(evt.num + 1);
                        var map = evt.customArgs;
                        for (var target of targets) {
                            var id = target.playerid;
                            if (!map[id]) map[id] = {};
                            if (typeof map[id].extraDamage != 'number') {
                                map[id].extraDamage = 0;
                            }
                            map[id].extraDamage++;
                        }
                    }
                    break;
                default: {
                    if (trigger.addCount !== false) {
                        trigger.addCount = false;
                        player.getStat().card.sha--;
                    }
                }
            }
        },
    },
    hokmitanditing: {
        derivation: ['dcmiyun', 'twtanfeng', 'dcditing', 'xinqieting'],
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['logSkill', 'useSkillAfter'],
        },
        zhuanhuanji: true,
        zhuanhuanLimit: 4,
        forced: true,
        mark: true,
        marktext: '☯',
        intro: {
            markcount(storage, player) {
                const list = lib.skill.hokmitanditing.getList(player);
                const description = get.info('hokmitanditing').derivation[list[0] - 1];
                return get.translation(description);
            },
            content(storage, player, skill) {
                const list = lib.skill[skill].getList(player);
                const description = get.info('hokmitanditing').derivation;
                return `你可以发动${get.translation(description[list[0] - 1])}`;
            },
        },
        filter(event, player, name) {
            return get.info('hokmitanditing').derivation.some((skill) => {
                return [event.sourceSkill || event.skill, name].includes(skill);
            });
        },
        getCards(player) {
            const cards = [];
            const history = player.actionHistory;
            const derivation = get.info('hokmitanditing').derivation;
            const list = derivation.map((des) => `hokmitanditing_${des}`).concat(derivation);
            for (let i = history.length - 1; i >= 0; i--) {
                for (let evt of history[i].gain) {
                    if (list.includes(evt.parent.name) || list.includes(evt.getParent(2).name)) {
                        cards.addArray(evt.cards);
                    }
                }
            }
            return player.getCards('he', (card) => cards.includes(card));
        },
        async content(event, trigger, player) {
            game.broadcastAll(function (player) {
                player.$changeZhuanhuanji('hokmitanditing');
            }, player);
            const list = get.info('hokmitanditing').getList(player),
                index = player.getAllHistory('useSkill', (evt) => evt.skill == 'hokmitanditing').length % 5,
                cards = get
                    .info('hokmitanditing')
                    .getCards(player)
                    .filter((card) => player.getCards('h').includes(card));
            player.storage.hokmitanditing[0] = list[Math.min(4, index + 1)];
            player.addGaintag(cards, 'hokmitanditing_tag');
            if (index == 0) {
                if (cards.length) player.recast(cards);
            }
        },
        init(player, skill) {
            player.storage[skill] = get.info(skill).getList(player);
        },
        getList(player) {
            if (!player.storage.hokmitanditing) return [1, 1, 2, 3, 4];
            return player.storage.hokmitanditing;
        },
        group: ['hokmitanditing_dcmiyun', 'hokmitanditing_twtanfeng', 'hokmitanditing_dcditing', 'hokmitanditing_xinqieting'],
        subSkill: {
            dcmiyun: {
                inherit: 'dcmiyun',
                filter(event, player) {
                    if (player.storage.hokmitanditing[0] != 1) return false;
                    return true;
                },
            },
            twtanfeng: {
                inherit: 'twtanfeng',
                filter(event, player) {
                    if (player.storage.hokmitanditing[0] != 2) return false;
                    return lib.skill.twtanfeng.filter(event, player);
                },
            },
            dcditing: {
                sourceSkill: 'dcditing',
                inherit: 'dcditing',
                filter(event, player) {
                    if (player.storage.hokmitanditing[0] != 3) return false;
                    return lib.skill.dcditing.filter(event, player);
                },
            },
            xinqieting: {
                inherit: 'xinqieting',
                filter(event, player) {
                    if (player.storage.hokmitanditing[0] != 4) return false;
                    return lib.skill.xinqieting.filter(event, player);
                },
            },
        },
    },
    hokchugeqi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        usable: 1,
        viewAs: {
            name: 'kaihua',
        },
        viewAsFilter(player) {
            if (!player.countCards('h')) return false;
        },
        filterCard: true,
        check(card) {
            let player = get.player();
            let val = 5.5;
            if (get.tag(card, 'norepeat') || !['basic', 'trick'].includes(get.type(card)) || ['shan', 'jiedao', 'tiesuo'].includes(card.name)) val -= 10;
            if (player.getStorage('hokchugeqi_effect').includes(card.name)) val -= 5;
            if (player.countCards('h', { name: card.name }) > 1) val += 2.5;
            if (card.name == 'sha') val++;
            return val - get.value(card);
        },
        async precontent(event, trigger, player) {
            player.addSkill('hokchugeqi_effect');
            const list = event.result.cards.reduce((list, card) => list.add(card.name), []);
            player.markAuto('hokchugeqi_effect', list);
        },
        subSkill: {
            effect: {
                audio: 'hokchugeqi',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (!get.is.jishi(event.card)) return false;
                    return player.hasStorage('hokchugeqi_effect', event.card.name);
                },
                async content(event, trigger, player) {
                    trigger.effectCount++;
                    player.unmarkAuto(event.name, [trigger.card.name]);
                    if (!player.getStorage(event.name).length) player.removeSkill(event.name);
                },
                ai: {
                    effect: {
                        player_use(card, player, target) {
                            if (get.tag(card, 'norepeat')) return;
                            if (player.getStorage('hokchugeqi_effect').includes(card.name)) return [1, 1.2];
                        },
                    },
                },
                mark: true,
                intro: {
                    markcount: () => 0,
                    content: 'cards',
                },
            },
        },
    },
    hokdafenglai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            target: 'useCardToTarget',
        },
        forced: true,
        filter(event, player) {
            return event.card && event.card.name == 'sha';
        },
        check(event, player) {
            return get.effect(player, event.card, event.player, player) <= 0;
        },
        async content(event, trigger, player) {
            player.tempBanSkill(
                event.name,
                lib.phaseName.map((name) => `${name}After`),
                false
            );
            const judgeEvent = player.judge((card) => {
                if (get.color(card) == 'red') return 2;
                return -1;
            });
            judgeEvent.judge2 = (result) => result.bool;
            const { bool } = await judgeEvent.forResult();
            if (bool) {
                player.addTempSkill('hokdafenglai_effect');
                player.markAuto('hokdafenglai_effect', [trigger.card]);
            }
        },
        ai: {
            effect: {
                target(card, player, target, current) {
                    if (target.isTempBanned('hokdafenglai')) return;
                    if (card && card.name == 'sha' && current < 0) return 0.85;
                },
            },
        },
        subSkill: {
            effect: {
                audio: 'hokdafenglai',
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return player.getStorage('hokdafenglai_effect').includes(event.card);
                },
                async content(event, trigger, player) {
                    trigger.cancel();
                    game.log(player, '防止', trigger.card, '造成的伤害');
                },
                ai: {
                    effect: {
                        player_use(card, player, target) {
                            if (card.name != 'shan') return;
                            const event = get.event(),
                                evt = event.getParent(2);
                            if (evt.name == 'useCard' && player.getStorage('hokdafenglai_effect').includes(evt.card)) return -1;
                        },
                    },
                },
            },
        },
    },
    hokzhenqianwu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
        },
        popup: false,
        xushiSkill: true,
        filter(event, player, name) {
            return event.getd().some((card) => {
                if (!get.tag(card, 'damage')) return false;
                if (name == 'cardsDiscardAfter') {
                    var evt = event.parent;
                    if (evt.name != 'orderingDiscard') return false;
                    var evtx = evt.relatedEvent || evt.parent;
                    if (evtx.name == 'useCard')
                        return !game.hasPlayer2((target) =>
                            target.hasHistory('sourceDamage', (evtxx) => {
                                return evtxx.card == evtx.card;
                            })
                        );
                    return;
                }
                return true;
            });
        },
        async cost(event, trigger, player) {
            const cards = trigger.getd().filter((card) => {
                if (!get.tag(card, 'damage')) return false;
                if (name == 'cardsDiscardAfter') {
                    var evt = trigger.parent;
                    if (evt.name != 'orderingDiscard') return false;
                    var evtx = evt.relatedEvent || evt.parent;
                    return (
                        evtx.name == 'useCard' &&
                        !game.hasPlayer2((target) =>
                            target.hasHistory('sourceDamage', (evtxx) => {
                                return evtxx.card == evtx.card;
                            })
                        )
                    );
                }
                return true;
            });
            const { bool, targets } = await player
                .chooseTarget()
                .set('cards', cards)
                .set('ai', (target) => {
                    const player = get.player();
                    const cards = get.event('cards');
                    if (target.hasSkillTag('nogain')) return 0;
                    let eff = 1;
                    if (target == _status.currentPhase) eff += 1.5;
                    eff += cards.reduce((p, c) => p + target.getUseValue(c), 0);
                    return get.sgnAttitude(player, target) * eff;
                })
                .set('createDialog', [get.prompt2(event.name.slice(0, -5)), cards])
                .forResult();
            if (bool) event.result = { bool, cost_data: { targets, cards } };
        },
        async content(event, trigger, player) {
            const target = event.cost_data.targets[0],
                cards = event.cost_data.cards;
            player.awakenSkill(event.name);
            if (cards.length == 1) {
                await target.gain(cards, 'gain2');
                event.card = cards[0];
            } else {
                const { bool, links } = await player
                    .chooseButton(true, [`${get.translation(event.name)}:选择令${get.translation(target)}获得其中的一张牌并使用此牌,若造成伤害,你获得此牌.`, cards])
                    .set('ai', (button) => {
                        const target = get.event('targetx');
                        return target.getUseValue(button.link);
                    })
                    .forResult();
                if (bool) {
                    await target.gain(links, 'gain2');
                    event.card = links[0];
                }
            }
            if (
                cards.some((card) => {
                    return target.getCards('h').includes(card) && target.hasUseTarget(card);
                })
            ) {
                await target.chooseUseTarget(event.card, true);
                if (target.hasHistory('sourceDamage', (evt) => evt.getParent(4) == event)) {
                    const cards = target
                        .getHistory('sourceDamage', (evt) => {
                            return evt.getParent(4) == event && evt.card;
                        })
                        .map((evt) => evt.card.cards.filterInD('od'))
                        .flat();
                    if (cards.length) await player.gain(cards, 'gain2');
                }
            }
        },
    },
    hokzhicaiyishi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        mod: {
            globalTo(from, to, distance) {
                return distance - (game.dead.length + 1);
            },
        },
        group: ['hokzhicaiyishi_damage', 'hokzhicaiyishi_die'],
        subSkill: {
            damage: {
                audio: 'hokzhicaiyishi',
                trigger: {
                    player: ['damageEnd', 'dieAfter'],
                },
                forced: true,
                filter(event, player) {
                    if (event.num < 2) return false;
                    return game.hasPlayer(function (target) {
                        if (target == player) return false;
                        return get.distance(target, player) <= 1;
                    });
                },
                async content(event, trigger, player) {
                    const target = game
                        .filterPlayer((target) => {
                            if (target == player) return false;
                            return get.distance(target, player) <= 1;
                        })
                        .randomGet();
                    if (target) await target.damage();
                },
                ai: {
                    maixie_defend: true,
                },
            },
            die: {
                audio: 'hokzhicaiyishi',
                trigger: {
                    player: 'dieAfter',
                },
                forced: true,
                forceDie: true,
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        if (target == player) return false;
                        return get.distance(target, player) <= 2;
                    });
                },
                async content(event, trigger, player) {
                    const target = game
                        .filterPlayer((target) => {
                            if (target == player) return false;
                            return get.distance(target, player) <= 2;
                        })
                        .randomGet();
                    if (target) await target.damage(2);
                },
            },
        },
    },
    hoklunhuitunshi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player, name) {
            if (get.type2(event.card) != 'trick') return false;
            if (!event.targets?.length || !event.isFirstTarget) return false;
            return event.targets?.some((target) => target != player);
        },
        async content(event, trigger, player) {
            const target = trigger.targets.randomGet();
            player.line(target);
            const num = get.rand(0, 2);
            if (num > 0) await target.damage(num);
        },
        ai: {
            effect: {
                player_use(card, player, target) {
                    if (get.type2(card) === 'trick') {
                        let tars = [target];
                        if (ui.selected.targets.length) tars.addArray(ui.selected.targets.filter((i) => i !== target));
                        if (tars.length < 2) return [1, 0, 1, -2];
                        return [1, 0, 1, -2 / tars.length];
                    }
                },
            },
        },
    },
    hokkehankuanglie: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        chargeSkill: 5,
        filter(event, player) {
            if (!player.countCharge()) return false;
            if (!Array.from(ui.discardPile.childNodes).length) return false;
            const dis = ui.discardPile.childNodes;
            const card = dis[dis.length - 1];
            if (!get.is.jishi(card)) return false;
            const vcard = get.autoViewAs(card, 'unsure');
            return event.filterCard(vcard, player, event);
        },
        filterCard: () => false,
        selectCard: -1,
        viewAs(cards, player) {
            const dis = ui.discardPile.childNodes;
            const card = dis[dis.length - 1];
            const name = card.name,
                nature = card.nature;
            return { name: name, nature: nature };
        },
        viewAsFilter(player) {
            if (!player.countCharge()) return false;
            if (!Array.from(ui.discardPile.childNodes).length) return false;
        },
        prompt() {
            return `你可以消耗1点蓄力值并将牌堆顶的一张牌当【${get.translation(get.info('hokkehankuanglie').viewAs())}】使用.`;
        },
        async precontent(event, trigger, player) {
            player.removeCharge();
            const cards = game.cardsGotoOrdering(get.cards()).cards;
            event.result.cards = cards;
        },
        hiddenCard(player, name) {
            if (!player.countCharge()) return false;
            if (!Array.from(ui.discardPile.childNodes).length) return false;
            const vcard = get.info('hokkehankuanglie').viewAs(null, player);
            if (vcard.name == name) return true;
        },
        ai: {
            effect: {
                target(card, player, target, effect) {
                    if (get.tag(card, 'respondShan')) return 0.9;
                    if (get.tag(card, 'respondSha')) return 0.9;
                },
            },
            order: 12,
            respondShan: true,
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (arg == 'respond') return false;
                if (!player.countMark('charge')) return false;
                if (!Array.from(ui.discardPile.childNodes).length) return false;
                const name = tag == 'respondSha' ? 'sha' : 'shan';
                return get.info('hokkehankuanglie').viewAs(null, player).name == name;
            },
            result: {
                player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
        group: ['hokkehankuanglie_init', 'hokkehankuanglie_charge'],
        subSkill: {
            init: {
                audio: 'hokkehankuanglie',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    if (!player.countCharge(true)) return false;
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    player.addCharge();
                },
            },
            charge: {
                audio: 'hokkehankuanglie',
                trigger: {
                    player: 'drawBegin',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.bottom = true;
                    if (player.countCharge(true)) player.addCharge(trigger.num);
                    const cards = get.cards(trigger.num);
                    await game.cardsGotoOrdering(cards);
                },
            },
        },
    },
    hokxiangyueweihao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayer',
            target: 'useCardToTarget',
        },
        filter(event, player, name) {
            if (event[name == 'useCardToPlayer' ? 'target' : 'player'] == player) return false;
            return !player.countCards('h', (card) => card.hasGaintag('hokxiangyueweihao_tag'));
        },
        async content(event, trigger, player) {
            await player.draw(2).set('gaintag', ['hokxiangyueweihao_tag']);
            trigger.parent.directHit.addArray(game.filterPlayer());
            game.log(trigger.card, '不可被响应');
        },
        subSkill: {
            tag: {},
        },
    },
    hoklingxiuzitai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        onChooseToUse(event) {
            if (!game.online && !event.hoklingxiuzitai) {
                const player = event.player;
                const cardPile = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
                const cards = get
                    .info('hoklingxiuzitai')
                    .getCards(player)
                    .filter((card) => {
                        if (cardPile.includes(card)) return true;
                        return game.hasPlayer((target) => {
                            if (target == player) return false;
                            return target.getCards('hej').includes(card);
                        });
                    });
                event.set('hoklingxiuzitai', cards);
            }
        },
        hiddenCard(player, name) {
            if (
                get
                    .info('hoklingxiuzitai')
                    .getCards(player)
                    .some((card) => card.name == name)
            )
                return false;
            return lib.inpile.includes(name);
        },
        getCards(player) {
            return player.getAllHistory('gain', (evt) => evt.parent.name == 'draw').reduce((list, evt) => list.addArray(evt.cards), []);
        },
        filter(event, player) {
            if (!Array.isArray(event.hoklingxiuzitai) || !event.hoklingxiuzitai.length || event.responded) return false;
            return lib.inpile.some((i) => event.filterCard({ name: i }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                return ui.create.dialog('领袖姿态', event.hoklingxiuzitai, 'hidden');
            },
            filter(button, player) {
                const evt = _status.event.parent;
                return evt.filterCard(button.link, player, evt);
            },
            check(button) {
                const card = button.link,
                    player = get.player();
                if (get.type(card) == 'equip') return 0;
                return player.getUseValue(card);
            },
            backup(links, player) {
                const list = get.event('hoklingxiuzitai');
                const next = {
                    filterCard: () => false,
                    selectCard: -1,
                    viewAs: links[0],
                    card: links[0],
                };
                next.list = list;
                next.precontent = async (event, trigger, player) => {
                    player.awakenSkill('hoklingxiuzitai');
                    const card = lib.skill.hoklingxiuzitai_backup.card;
                    const cards = lib.skill.hoklingxiuzitai_backup.list;
                    event.result.cards = [card];
                    event.result.card = get.autoViewAs(card, [card]);
                    event.result.card.hoklingxiuzitai = true;
                    var owner = get.owner(card);
                    if (owner != player && get.position(card) == 'h') {
                        owner.$throw(card);
                    }
                    player
                        .when('useCardAfter')
                        .filter((event) => event.skill == 'hoklingxiuzitai_backup')
                        .then(() => {
                            player.addTempSkill('hoklingxiuzitai_effect');
                            player.markAuto('hoklingxiuzitai_effect', cards);
                            var cardPile = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
                            var cards = player.getStorage('hoklingxiuzitai_effect').filter((card) => {
                                if (cardPile.includes(card)) return true;
                                return game.hasPlayer((target) => {
                                    if (target == player) return false;
                                    return target.getCards('hej').includes(card);
                                });
                            });
                            var cards2 = cards.map((card) => {
                                var cardx = ui.create.card();
                                cardx.init(get.cardInfo(card));
                                cardx._cardid = card.cardid;
                                return cardx;
                            });
                            player.directgains(cards2, null, 'hoklingxiuzitai');
                        })
                        .vars({ cards: cards });
                };
                return next;
            },
            prompt(links, player) {
                return '领袖姿态:是否使用' + get.translation(links[0]) + '？';
            },
        },
        ai: {
            effect: {
                target(card, player, target, effect) {
                    if (get.tag(card, 'respondShan')) return 0.7;
                    if (get.tag(card, 'respondSha')) return 0.7;
                },
            },
            order: 1,
            respondShan: true,
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (arg != 'use') return false;
                const name = tag == 'respondSha' ? 'sha' : 'shan';
                return get.info('hoklingxiuzitai').hiddenCard(player, name);
            },
            result: {
                player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            effect: {
                charlotte: true,
                onremove(player) {
                    var cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('hoklingxiuzitai');
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
                    delete player.storage.hoklingxiuzitai_effect;
                },
                mod: {
                    cardEnabled2(card, player) {
                        if (get.itemtype(card) == 'card' && card.hasGaintag('hoklingxiuzitai') && player.getStorage('hoklingxiuzitai_used').includes(card.name)) return false;
                    },
                },
                group: ['hoklingxiuzitai_use', 'hoklingxiuzitai_lose'],
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
                    var cards = player.getCards('s', (card) => card.hasGaintag('hoklingxiuzitai') && card._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return cards.includes(card);
                        })
                    );
                },
                async content(event, trigger, player) {
                    var idList = player.getCards('s', (card) => card.hasGaintag('hoklingxiuzitai')).map((i) => i._cardid);
                    var cardPile = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
                    var cards = player
                        .getStorage('hoklingxiuzitai_effect')
                        .filter((card) => {
                            if (cardPile.includes(card)) return true;
                            return game.hasPlayer((target) => {
                                if (target == player) return false;
                                return target.getCards('hej').includes(card);
                            });
                        })
                        .filter((i) => idList.includes(i.cardid));
                    var cards2 = [];
                    for (var card of trigger.cards) {
                        var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                        if (cardx) cards2.push(cardx);
                        else cards2.push(card);
                    }
                    var cards3 = trigger.cards.slice().filter((card) => card.hasGaintag('hoklingxiuzitai'));
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
                    player.addTempSkill('hoklingxiuzitai_used');
                    player.markAuto(
                        'hoklingxiuzitai_used',
                        cards3.map((card) => card.name)
                    );
                },
            },
            lose: {
                trigger: {
                    global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'cardsGotoOrderingBegin', 'phaseAfter'],
                },
                charlotte: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    if (event.name == 'phase') return true;
                    var idList = player.getCards('s', (card) => card.hasGaintag('hoklingxiuzitai')).map((i) => i._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return idList.includes(card.cardid);
                        })
                    );
                },
                async content(event, trigger, player) {
                    var cards2;
                    if (trigger.name == 'phase') {
                        cards2 = player.getCards('s', (card) => {
                            return card.hasGaintag('hoklingxiuzitai');
                        });
                    } else {
                        var idList = [];
                        var cardPile = ['cardPile', 'discardPile'].map((pos) => Array.from(ui[pos].childNodes)).flat();
                        var cards = player.getStorage('hoklingxiuzitai_effect').filter((card) => {
                            if (cardPile.includes(card)) return true;
                            return game.hasPlayer((target) => {
                                if (target == player) return false;
                                return target.getCards('hej').includes(card);
                            });
                        });
                        idList.addArray(cards.map((i) => i.cardid));
                        cards2 = player.getCards('s', (card) => {
                            return card.hasGaintag('hoklingxiuzitai') && !idList.includes(card._cardid);
                        });
                    }
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
            used: {
                charlotte: true,
            },
        },
    },
    hoknizhuanqiankun: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted',
        },
        filter(event, player) {
            return get.info('hoknizhuanqiankun').getName(player) == event.card.name;
        },
        init(player, skill) {
            get.info(skill).getName(player);
        },
        getName(player) {
            if (!player.storage.hoknizhuanqiankun) player.storage.hoknizhuanqiankun = 'sha';
            return player.storage.hoknizhuanqiankun;
        },
        async cost(event, trigger, player) {
            const list = get.inpileVCardList((info) => {
                const name = info[2],
                    type = get.type(name),
                    infox = get.info({ name: name });
                return ['basic', 'trick'].includes(type) && get.tag({ name: name }, 'damage');
            });
            const { bool, links } = await player
                .chooseButton(['逆转乾坤', [list, 'vcard'], `你可以将${get.translation(trigger.card)}的效果效果`])
                .set('ai', (button) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    if (trigger.player == player) return -10;
                    if (get.effect(player, trigger.card, trigger.player, player) > 0) return 0;
                    if (trigger.card.name == button.link[2]) return false;
                    return get.effect(player, { name: button.link[2] }, player, player) - get.effect(player, { name: trigger.card.name, nature: trigger.card.nature }, player, player);
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { name: links[0][2] } };
        },
        async content(event, trigger, player) {
            await player.draw(2);
            player.addTempSkill('hoknizhuanqiankun_effect');
            player.markAuto('hoknizhuanqiankun_effect', [[trigger.card, { name: event.cost_data.name }, trigger.player]]);
            player
                .when({ global: 'useCardAfter' })
                .filter((event) => event.card == trigger.card)
                .then(() => {
                    player.setStorage('hoknizhuanqiankun', trigger.card.name);
                });
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'useCardToBegin',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    const storage = player.getStorage('hoknizhuanqiankun_effect');
                    return storage.some((list) => list[0] == event.card);
                },
                async content(event, trigger, player) {
                    const list = player.getStorage('hoknizhuanqiankun_effect').find((list) => list[0] == trigger.card);
                    trigger.setContent(lib.card[list[1].name].content);
                },
            },
        },
    },
    hokxuwangpomie: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {},
        content() { },
        group: 'hokxuwangpomie_use',
        subSkill: {
            use: {
                enable: 'chooseToUse',
                viewAs: {
                    name: 'sha',
                },
                popname: true,
                filter(event, player) {
                    return true;
                },
                viewAsFilter(player) {
                    if (!player.countCards('hs', { name: 'sha' })) return false;
                },
                filterCard(card) {
                    return card.name == 'sha';
                },
                ignoreMod: true,
                prompt: '你可以对自己使用无次数限制的【杀】,结算后你回复1点体力并将<逆转乾坤>中的牌名改为【杀】',
                filterTarget(card, player, target) {
                    if (target != player) return false;
                    return lib.filter.cardEnabled({ name: 'sha' }, target, target);
                },
                async precontent(event, trigger, player) {
                    event.result.card = event.result.cards[0];
                    player
                        .when('useCardAfter')
                        .filter((event) => event.skill == 'hokxuwangpomie_use')
                        .then(() => {
                            player.recover();
                            player.setStorage('hoknizhuanqiankun', trigger.card.name);
                        });
                },
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (player != target) return;
                        if (get.event().skill == 'hokxuwangpomie_use') return true;
                    },
                },
            },
            use_backup: {},
        },
    },
    hokzhenshenjuexing: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'dieBefore',
        },
        forced: true,
        popup: false,
        _priority: 15,
        getNum(player) {
            return game.getAllGlobalHistory('everything', (evt) => {
                return evt.name == 'die' && evt.reserveOut && evt.player == player;
            }).length;
        },
        filter(event, player) {
            if (get.info('hokzhenshenjuexing').getNum(player) >= game.countPlayer()) return false;
            return event.parent.name != 'giveup' && player.maxHp > 0;
        },
        async content(event, trigger, player) {
            trigger._roundNum = game.roundNumber;
            if (_status.mbmowang_return && _status.mbmowang_return[player.playerid]) {
                trigger.cancel();
            } else {
                game.broadcastAll(function () {
                    if (lib.config.background_speak) game.playAudio('die', 'shichangshiRest');
                });
                trigger.setContent(lib.skill.mbmowang.dieContent);
                trigger.includeOut = true;
            }
        },
        ai: {
            nosave: true,
            skillTagFilter(player, tag, arg) {
                return get.info('hokzhenshenjuexing').getNum(player) < game.countPlayer();
            },
        },
        group: ['hokzhenshenjuexing_return', 'hokzhenshenjuexing_reback'],
        subSkill: {
            return: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                charlotte: true,
                silent: true,
                forceDie: true,
                forceOut: true,
                filter(event, player) {
                    const history = game.getAllGlobalHistory('everything', (evt) => {
                        return evt.name == 'die' && evt.reserveOut && evt.player == player;
                    });
                    if (!history.length || !history[history.length - 1]._roundNum) return false;
                    return !event._mbmowang_return && player.isOut() && _status.mbmowang_return[player.playerid] && game.roundNumber >= history[history.length - 1]._roundNum * 2;
                },
                async content(event, trigger, player) {
                    trigger._mbmowang_return = true;
                    game.broadcastAll(function (player) {
                        player.classList.remove('out');
                    }, player);
                    game.log(player, '移回了游戏');
                    delete _status.mbmowang_return[player.playerid];
                    await player.recoverTo(player.maxHp);
                    game.broadcastAll(function (player) {
                        if (player.name1 == 'shichangshi') {
                            player.smoothAvatar(false);
                            player.node.avatar.setBackground(player.name1, 'character');
                        }
                        if (player.name2 == 'shichangshi') {
                            player.smoothAvatar(true);
                            player.node.avatar2.setBackground(player.name2, 'character');
                        }
                    }, player);
                    await game.asyncDelay();
                    event.trigger('restEnd');
                    if (!event.restTargets) event.restTargets = [];
                    event.restTargets.add(player);
                },
            },
            reback: {
                audio: 'hokzhenshenjuexing',
                trigger: {
                    global: 'restEnd',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.getTrigger().player == player || (event.restTargets && event.restTargets.includes(player));
                },
                async content(event, trigger, player) {
                    let skills = get.gainableSkills().filter((skill) => {
                        var info = get.info(skill);
                        if (!info || info.charlotte || player.getSkills().includes(skill)) return false;
                        return info.juexingji;
                    });
                    if (!skills.length) return;
                    let list = skills.randomGets(3);
                    list = list.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                    const mbdialog = new ui.create.mobileDialog(event, 'hokzhenshenjuexing');
                    mbdialog.dialog.classList.add('skill-tdnodes');
                    mbdialog.dialog.add([list, 'tdnodes']);
                    mbdialog.addSkills(skills);
                    mbdialog.addTip(`你发动了<span style='color: #a4dfd5'>${get.translation(event.name)}</span>,请选择获得一个觉醒技`);
                    const { bool, links } = await player
                        .chooseButton(event.dialog, true)
                        .set('closeDialog', true)
                        .set('ai', (button) => {
                            const skill = button.link;
                            if (get.info(skill).ai?.combo) return 0;
                            if (get.info(skill).derivation) return get.info(skill).derivation.length;
                            return 1 + Math.random();
                        })
                        .forResult();
                    if (bool) {
                        await player.addSkills(links);
                        player.addSkill('hokzhenshenjuexing_remove');
                        player.markAuto('hokzhenshenjuexing_remove', links);
                        for (let skill of links) {
                            var info = lib.skill[skill];
                            var filter = info.filter;
                            if (info.filter && !info.charlotte && !info.hokzhenshenjuexing_filter) {
                                info.hokzhenshenjuexing_filter = info.filter;
                                info.filter = function (event, player) {
                                    if (player.getStorage('hokzhenshenjuexing_remove').includes(skill)) return true;
                                    return this.hokzhenshenjuexing_filter.apply(this, arguments);
                                };
                            }
                            if (!info.hokzhenshenjuexing_filter) info.hokzhenshenjuexing_filter = true;
                        }
                    }
                },
            },
            remove: {
                trigger: {
                    player: ['logSkill', 'useSkillAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (event.type != 'player') return false;
                    let skill = get.sourceSkillFor(event);
                    if (!skill || skill.startsWith('hokzhenshenjuexing')) return false;
                    let info = get.info(skill);
                    if (info.charlotte || info.equipSkill) return false;
                    return info.hokzhenshenjuexing_filter;
                },
                async content(event, trigger, player) {
                    const skill = get.sourceSkillFor(trigger);
                    await player.removeSkills(skill);
                },
            },
        },
    },
    hokxianyin: {
        derivation: ['juexiang_ji', 'juexiang_lie', 'juexiang_rou', 'juexiang_he'],
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
            player: ['damageEnd', 'recoverEnd', 'loseHpEnd'],
        },
        filter(event, player, name) {
            if (_status.dying.length) return false;
            return get.info('hokxianyin').getEffect.get(name).filter(event, player);
        },
        async cost(event, trigger, player) {
            if (!lib.skill[`hokxianyin_${event.triggername}`]) {
                game.broadcastAll(
                    (event, name, effect) => {
                        lib.skill[`hokxianyin_${effect}`] = get.copy(get.info(name).getEffect.get(effect));
                        lib.skill[`hokxianyin_${effect}`].sourceSkill = name;
                        lib.skill[`hokxianyin_${effect}`].filterCard = () => false;
                        lib.skill[`hokxianyin_${effect}`].selectCard = -1;
                    },
                    event,
                    event.name.slice(0, -5),
                    event.triggername
                );
            }
            const skill = get.info(event.name.slice(0, -5)).getEffect.get(event.triggername).derivation;
            const result = await player
                .chooseToUse()
                .set('openskilldialog', `${get.skillInfoTranslation(skill)}`)
                .set('norestore', true)
                .set('nouse', true)
                .set('_backupevent', `hokxianyin_${event.triggername}`)
                .set('custom', {
                    add: {},
                    replace: { window() { } },
                })
                .set('source', trigger.source)
                .backup(`hokxianyin_${event.triggername}`)
                .forResult();
            event.result = { bool: result.bool, cost_data: { result } };
        },
        async content(event, trigger, player) {
            const {
                cost_data: { result },
            } = event;
            await player.useResult(result, event);
        },
        getEffect: new Map([
            [
                'damageEnd',
                {
                    derivation: 'juexiang_ji',
                    description: '视为受到1点伤害',
                    filter(event, player) {
                        return (
                            event.source?.isIn() &&
                            game
                                .getGlobalHistory(
                                    'everything',
                                    (evt) => {
                                        return evt.name == 'damage' && evt.player == player;
                                    },
                                    event
                                )
                                .indexOf(event) == 0
                        );
                    },
                    filterTarget(card, player, target) {
                        return target == get.event('source');
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        await target.loseHp();
                        var card = get.cardPile(function (card) {
                            return get.type(card) == 'equip' && target.canUse(card, target);
                        });
                        if (card) await target.chooseUseTarget(card, 'nothrow', 'nopopup', true);
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return get.effect(target, { name: 'losehp' }, target, target) / target.getHp();
                            },
                        },
                    },
                },
            ],

            [
                'loseHpEnd',
                {
                    derivation: 'juexiang_lie',
                    description: '视为失去1点体力',
                    filter(event, player) {
                        return (
                            game.getGlobalHistory('changeHp', function (evt) {
                                return evt.parent.name == 'loseHp' && evt.player == event.player;
                            }).length == 1
                        );
                    },
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        await target.loseHp();
                        const card = get.cardPile(function (card) {
                            return get.type(card) == 'equip' && target.canUse(card, target);
                        });
                        if (card) await target.chooseUseTarget(card, true, 'nothrow', 'nopopup', true);
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                return get.effect(target, { name: 'losehp' }, target, target) / target.getHp();
                            },
                        },
                    },
                },
            ],

            [
                'damageSource',
                {
                    derivation: 'juexiang_rou',
                    description: '视为造成1点伤害',
                    filter(event, player) {
                        return player.getHistory('sourceDamage').indexOf(event) == 0;
                    },
                    filterTarget(card, player, target) {
                        return target == get.event('source');
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        await target.recover();
                        if (target.countCards('he', { type: 'equip' })) {
                            target.chooseToDiscard('he', true, '弃置一张装备牌', function (card) {
                                return get.type(card) == 'equip';
                            });
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                var att = get.attitude(player, target);
                                if (player.isHealthy()) {
                                    return att < 0;
                                } else {
                                    return att > 0;
                                }
                            },
                        },
                    },
                },
            ],

            [
                'recoverEnd',
                {
                    derivation: 'juexiang_he',
                    description: '视为回复1点体力',
                    filter(event, player) {
                        return (
                            game.getGlobalHistory('changeHp', function (evt) {
                                return evt.parent.name == 'recover' && evt.player == event.player;
                            }).length == 1
                        );
                    },
                    filterTarget(card, player, target) {
                        return target != player;
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        await target.recover();
                        if (target.countCards('he', { type: 'equip' })) {
                            await target.chooseToDiscard('he', true, '弃置一张装备牌', function (card) {
                                return get.type(card) == 'equip';
                            });
                        }
                    },
                    ai: {
                        order: 1,
                        result: {
                            target(player, target) {
                                var att = get.attitude(player, target);
                                if (target.isHealthy() && target.countCards('he')) {
                                    return -att;
                                } else {
                                    return (10 * att) / (1 + target.getHp());
                                }
                            },
                        },
                    },
                },
            ],
        ]),
        backups: [
            {
                filterTarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    player.damage(targets[0], 'unreal');
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            const _hp = target.getHp(),
                                _maxhp = target.maxHp;
                            target.hp = 100;
                            target.maxHp = 100;
                            const att = -get.sgnAttitude(player, target);
                            const eff = get.damageEffect(target, player, player) * att;
                            target.hp = _hp;
                            target.maxHp = _maxhp;
                            return eff;
                        },
                    },
                },
            },
            {
                async content(event, trigger, player) {
                    player.loseHp().setContent(() => {
                        'step 0';
                        if (event.num <= 0) {
                            event.finish();
                            event._triggered = null;
                            return;
                        }
                        if (lib.config.background_audio) {
                            game.playAudio('effect', 'loseHp');
                        }
                        game.broadcast(function () {
                            if (lib.config.background_audio) {
                                game.playAudio('effect', 'loseHp');
                            }
                        });
                        game.log(player, '视为失去了' + get.cnNumber(num) + '点体力');
                        player.changeHp(0, false);
                        ('step 1');
                        if (player.getHp() <= 0 && !event.nodying) {
                            event._dyinged = true;
                            player.dying(event);
                        }
                    });
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                    },
                },
            },
            {
                filterTarget: true,
                async content(event, trigger, player) {
                    const targets = event.targets;
                    targets[0].damage(player, 'unreal');
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            const _hp = target.getHp(),
                                _maxhp = target.maxHp;
                            target.hp = 100;
                            target.maxHp = 100;
                            const att = -get.sgnAttitude(player, target);
                            let val = get.damageEffect(target, player, target) * att;
                            target.getSkills(null, false, false).forEach((skill) => {
                                const info = get.info(skill);
                                if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? 'max' : 'min'](val > 0 ? 0.1 : -0.1, val + 2 * att);
                            });
                            const eff = 100 / val + 15;
                            target.hp = _hp;
                            target.maxHp = _maxhp;
                            return eff;
                        },
                    },
                },
            },
            {
                async content(event, trigger, player) {
                    player.recover().setContent(() => {
                        if (num > player.maxHp - player.getHp(true)) {
                            num = player.maxHp - player.getHp(true);
                            event.num = num;
                        }
                        if (num > 0) {
                            delete event.filterStop;
                            if (lib.config.background_audio) {
                                game.playAudio('effect', 'recover');
                            }
                            game.broadcast(function () {
                                if (lib.config.background_audio) {
                                    game.playAudio('effect', 'recover');
                                }
                            });
                            game.broadcastAll(function (player) {
                                if (lib.config.animation && !lib.config.low_performance) {
                                    player.$recover();
                                }
                            }, player);
                            player.$damagepop(num, 'wood');
                            game.log(player, '视为回复了' + get.cnNumber(num) + '点体力');
                            player.changeHp(0, false);
                        } else event._triggered = null;
                    });
                },
                ai: {
                    order: 10,
                    result: {
                        player(player, target) {
                            return 1;
                        },
                    },
                },
            },
        ],

        ai: {
            order: 1,
            effect: {
                target(card, player, target) {
                    if (get.tag(card, 'damage')) {
                        if (
                            player.hasSkillTag('jueqing', false, target) &&
                            !game.getGlobalHistory('changeHp', function (evt) {
                                return evt.parent.name == 'loseHp' && evt.player == target;
                            }).length
                        )
                            return [1, 1];
                        return 1.2;
                    }
                    if (get.tag(card, 'recover')) {
                        if (
                            game.getGlobalHistory('changeHp', function (evt) {
                                return evt.parent.name == 'recover' && evt.player == target;
                            }).length
                        )
                            return;
                        return [1, 1];
                    }
                    if (get.tag(card, 'loseHp')) {
                        if (
                            target.getHp() <= 1 ||
                            game.getGlobalHistory('changeHp', function (evt) {
                                return evt.parent.name == 'loseHp' && evt.player == target;
                            }).length
                        )
                            return;
                        return [1, 1];
                    }
                },
            },
        },
        group: ['hokxianyin_use'],
        subSkill: {
            use: {
                enable: 'phaseUse',
                usable: 1,
                chooseButton: {
                    dialog(event, player) {
                        const description = Array.from(lib.skill.hokxianyin.getEffect);
                        event.imglist = [18400, 18410, 18420, 18430];
                        event.titlelist = ['长歌行', '思无邪', '胡笳乐', '忘忧曲'];
                        event.deslist = description.map((order) => `${order[1].description.slice(2)}`);
                        event.desStyle = { fontSize: '25px' };
                        event.imgStyle = { left: '14%' };
                        event.nameStyle = { width: '80px' };
                        const mbdialog = new ui.create.mobileDialog(event, 'hokxianyin');
                        mbdialog.area();
                        mbdialog.addTip(`你可发动<span style='color: #a4dfd5'>弦音</span>,视为执行一项`);
                        return event.dialog;
                    },
                    filter(button) {
                        const player = get.player();
                        switch (button.link) {
                            case 3:
                                return player.isDamaged();
                            default:
                                return true;
                        }
                    },
                    check(button) {
                        const player = get.player();
                        switch (button.link) {
                            case 0: {
                                if (game.countPlayer((i) => i != player) < 1) return 0;
                                return 1.4 + Math.random();
                            }
                            case 1: {
                                if (
                                    game.getGlobalHistory('changeHp', function (evt) {
                                        return evt.parent.name == 'loseHp' && evt.player == player;
                                    }).length
                                )
                                    return 0;
                                if (get.effect(player, { name: 'losehp' }, player, player) > 0) return get.effect(player, { name: 'losehp' }, player, player);
                                return 1.4 + Math.random();
                            }
                            case 2: {
                                if (game.countPlayer((i) => i != player) < 1) return 0;
                                const limit = 25 - 7.5;
                                if (
                                    game.hasPlayer((target) => {
                                        var _hp = target.getHp(),
                                            _maxhp = target.maxHp;
                                        target.hp = 100;
                                        target.maxHp = 100;
                                        var att = -get.sgnAttitude(player, target);
                                        var val = get.damageEffect(target, player, target) * att;
                                        target.getSkills(null, false, false).forEach((skill) => {
                                            var info = get.info(skill);
                                            if (info && info.ai && (info.ai.maixie || info.ai.maixie_hp || info.ai.maixie_defend)) val = Math[val > 0 ? 'max' : 'min'](val > 0 ? 0.1 : -0.1, val + 2 * att);
                                        });
                                        var eff = 100 / val;
                                        target.hp = _hp;
                                        target.maxHp = _maxhp;
                                        if (eff < limit) return false;
                                        return true;
                                    })
                                )
                                    return 1.3 + Math.random();
                                return 1.1 + Math.random();
                            }
                            case 3: {
                                if (
                                    game.getGlobalHistory('changeHp', function (evt) {
                                        return evt.parent.name == 'recover' && evt.player == player;
                                    }).length
                                )
                                    return 0;
                                if (get.recoverEffect(player, player, player) <= 0) return 0;
                                return 1.25;
                            }
                        }
                    },
                    backup(links, player) {
                        const next = get.copy(lib.skill.hokxianyin.backups[links]);
                        next.audio = 'hokxianyin';
                        next.filterCard = () => false;
                        next.selectCard = -1;
                        next.precontent = async function (event, trigger, player) {
                            const stat = player.stat;
                            const statskill = stat[stat.length - 1].skill;
                            statskill.hokxianyin_use = statskill.hokxianyin_use + 1 || 1;
                        };
                        return next;
                    },
                    prompt(links) {
                        return ['长歌行:你可以视为受到过1点伤害(选择一名角色,令其视为对你造成过1点伤害)', '思无邪:你可以视为失去过1点体力', '胡笳乐:你可以视为造成过1点伤害(选择一名角色,令你视为对其造成过1点伤害)', '忘忧曲:你可以视为回复过1点体力'][links];
                    },
                },
                ai: {
                    order: 10,
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
        },
    },
    hokhuangjinshanshan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'dieAfter',
        },
        check(event, player) {
            if (event.source) return get.attitude(player, event.source) >= 0;
            return true;
        },
        async content(event, trigger, player) {
            const skillCount = player.getRoundHistory('useSkill', (evt) => evt.skill == event.name).length;
            if (trigger.source?.isIn()) await game.asyncDraw([player, trigger.source], skillCount);
            else await player.draw(skillCount);
        },
        ai: {
            threaten: 3.33,
        },
    },
    hokdabianhuoren: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageBegin4',
        },
        xushiSkill: true,
        logTarget: 'player',
        filter(event, player) {
            return event.player.hp <= event.num;
        },
        check(event, player) {
            if (get.attitude(player, event.player) <= 0) return false;
            if (event.player == player) {
                if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) < event.num) return true;
            }
            return event.num >= event.player.getHp() + event.player.hujia;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            trigger._hokdabianhuoren = true;
            const target = trigger.player;
            target.link();
            player.addTempSkill('hokdabianhuoren_effect');
            player.markAuto('hokdabianhuoren_effect', [target]);
            player.addTempSkill('hokdabianhuoren_restore');
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'dieAfter',
                },
                forced: true,
                forceDie: true,
                charlotte: true,
                _priority: 15,
                filter(event, player) {
                    if (!player.getStorage('hokdabianhuoren_effect').includes(event.player)) return false;
                    return event.getParent(2)?._hokdabianhuoren;
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    await trigger.player.revive(trigger.player.maxHp);
                    await trigger.player.draw(4);
                },
            },
            restore: {
                trigger: {
                    global: ['damageCancelled', 'damageZero', 'damageAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return event._hokdabianhuoren;
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    player
                        .when({ global: 'phaseEnd' })
                        .then(() => {
                            player.restoreSkill('hokdabianhuoren');
                            game.log(player, '重置了', '#y蓄势技', `#g【${get.translation('hokdabianhuoren')}】`);
                        })
                        .finish();
                },
            },
        },
    },
    hokjieao: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        mod: {
            cardname(card) {
                if (get.type(card, null, false) == 'equip') return 'sha';
            },
            cardnature(card) {
                if (get.type(card, null, false) == 'equip') return 'fire';
            },
        },
        filter(event, player) {
            const cardList = ['sha', 'shan', 'tao', 'jiu'],
                equipSlot = ['equip1', 'equip2', 'horse', 'equip5'];
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return cardList.includes(name) && !info[3] && player.hasEnabledSlot(equipSlot[cardList.indexOf(name)]);
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const cardList = ['sha', 'shan', 'tao', 'jiu'],
                    equipSlot = ['equip1', 'equip2', 'horse', 'equip5'];
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return cardList.includes(name) && !info[3] && player.hasEnabledSlot(equipSlot[cardList.indexOf(name)]);
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('桀骜', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                const player = get.player();
                if (_status.event.parent.type != 'phase') return 1;
                return player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    async precontent(event, trigger, player) {
                        const name = event.result.card.name,
                            cardName = ['sha', 'shan', 'tao', 'jiu'],
                            equipSlot = ['equip1', 'equip2', ['equip3', 'equip4'], 'equip5'],
                            index = cardName.indexOf(name),
                            skills = ['huojian', 'huntian', 'fenghuo', 'qiankun'];
                        await player.disableEquip(equipSlot[index]);
                        player.addSkill(`hokjieao_${skills[index]}`);
                    },
                };
            },
            prompt(links, player) {
                return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            const cardName = ['sha', 'shan', 'tao', 'jiu'],
                equipSlot = ['equip1', 'equip2', 'horse', 'equip5'];
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return cardName.includes(name) && !info[3] && player.hasEnabledSlot(equipSlot[cardName.indexOf(name)]);
                })
                .map((card) => card[2])
                .includes(name);
        },
        ai: {
            order: 10,
            fireAttack: true,
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag, arg) {
                if (arg != 'use') return false;
                if (tag == 'respondSha') return player.hasEnabledSlot(1);
                if (tag == 'respondShan') return player.hasEnabledSlot('horse');
            },
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            huojian: {
                equipSkill: true,
                trigger: {
                    source: 'damageSource',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card?.name == 'sha';
                },
                async content(event, trigger, player) {
                    trigger.player.addTempSkill('hokjieao_diable');
                    trigger.player.addMark('hokjieao_diable', 1, false);
                },
            },
            huntian: {
                equipSkill: true,
                trigger: {
                    global: ['linkEnd', 'damageEnd'],
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (event.player == player) return false;
                    switch (event.name) {
                        case 'link':
                            return event.player.isLinked();
                        case 'damage':
                            return event.hasNature('fire');
                    }
                    return false;
                },
                content() { },
                init() {
                    game.broadcastAll(() => {
                        game.addGlobalSkill('hokjieao_global');
                    });
                },
                mark: true,
                marktext: '混天绫',
                intro: {
                    name: '混天绫',
                    content: `横置或受到过火焰伤害的其他角色本回合不能使用【闪】`,
                },
            },
            fenghuo: {
                equipSkill: true,
                charlotte: true,
                mod: {
                    targetEnabled(card, player, target) {
                        if (get.itemtype(card) != 'card' || card.name != 'tao') return;
                        if (get.type(card) == 'basic' && get.color(card) == 'red') return false;
                    },
                },
            },
            qiankun: {
                equipSkill: true,
                trigger: {
                    global: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    return event.card && event.card.name == 'jiu';
                },
                async content(event, trigger, player) {
                    trigger.player.addTempSkill('hokjieao_temp');
                    trigger.player.markAuto('hokjieao_temp', [player]);
                },
                mod: {
                    cardUsableTarget(card, player, target) {
                        if (target.hasHistory('useCard', (evt) => evt.card.name == 'jiu')) return true;
                    },
                    targetInRange(card, player, target) {
                        if (target.hasHistory('useCard', (evt) => evt.card.name == 'jiu')) return true;
                    },
                },
            },
            diable: {
                trigger: {
                    player: 'recoverBegin',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num -= player.countMark('hokjieao_diable');
                    player.removeSkill('hokjieao_diable');
                },
                mark: true,
                marktext: '火尖枪',
                intro: {
                    name: '火尖枪',
                    content: `本回合你下一次回复的体力-#`,
                },
            },
            global: {
                trigger: {
                    player: 'dieAfter',
                },
                silent: true,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return !game.hasPlayer((i) => i.hasSkill('hokjieao_huntian'), true);
                },
                async content(event, trigger, player) {
                    game.removeGlobalSkill('hokjieao_global');
                },
                mod: {
                    cardEnabled(card, player) {
                        if (get.itemtype(card) != 'card' || card.name != 'shan') return;
                        if (player.isLinked() || player.hasHistory('damage', (evt) => evt.hasNature('fire'))) return false;
                    },
                },
            },
            temp: {
                charlotte: true,
                mark: true,
                marktext: '乾坤圈',
                intro: {
                    name: '乾坤圈',
                    content: `$对你使用牌无距离和次数限制`,
                },
            },
        },
    },
    hokcemouzhike: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill'],
        },
        persevereSkill: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || skill == 'hokcemouzhike') return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill || info.persevereSkill) return false;
            return player.countCards('h');
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseCard(get.prompt(event.name.slice(0, -5)), '你可以蓄谋一次')
                .set('ai', (card) => {
                    const player = get.player();
                    if (player.hasValueTarget(card)) return player.getUseValue(card);
                    return 0;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const cards = event.cards;
            await player.addJudge({ name: 'xumou_jsrg' }, cards);
        },
        group: 'hokcemouzhike_blocker',
        subSkill: {
            blocker: {
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                persevereSkill: true,
                filter(event, player) {
                    if (name == 'addJudgeAfter') return event.player == player;
                    var evt = event.getl(player);
                    return evt && evt.js && evt.js.length;
                },
                async content(event, trigger, player) {
                    const cards = player.getCards('j', (card) => {
                        return (card.viewAs || card.name) == 'xumou_jsrg';
                    });
                    if (cards.length >= 5) {
                        player.addSkill('hokcemouzhike_fengyin');
                        var cardsx = cards.map((card) => {
                            var cardx = ui.create.card();
                            cardx.init(get.cardInfo(card));
                            cardx._cardid = card.cardid;
                            return cardx;
                        });
                        player.directgains(cardsx, null, 'hokcemouzhike');
                        player.addSkill('hokcemouzhike_in');
                    } else {
                        player.removeSkill(['hokcemouzhike_fengyin', 'hokcemouzhike_in']);
                    }
                },
            },
            fengyin: {
                init(player, skill) {
                    player.addSkillBlocker(skill);
                },
                onremove(player, skill) {
                    player.removeSkillBlocker(skill);
                },
                skillBlocker(skill, player) {
                    return !lib.skill[skill].charlotte && !lib.skill[skill].persevereSkill;
                },
            },
            in: {
                persevereSkill: true,
                onremove(player) {
                    var cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('hokcemouzhike');
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
                group: ['hokcemouzhike_use', 'hokcemouzhike_lose'],
            },
            use: {
                trigger: {
                    player: ['useCardBefore', 'respondBefore'],
                },
                persevereSkill: true,
                charlotte: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    var cards = player.getCards('s', (card) => card.hasGaintag('hokcemouzhike') && card._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return cards.includes(card);
                        })
                    );
                },
                content() {
                    var idList = player.getCards('s', (card) => card.hasGaintag('hokcemouzhike')).map((i) => i._cardid);
                    var cards = player
                        .getCards('j', (card) => {
                            return (card.viewAs || card.name) == 'xumou_jsrg';
                        })
                        .filter((i) => idList.includes(i.cardid));
                    var cards2 = [];
                    for (var card of trigger.cards) {
                        var cardx = cards.find((cardx) => cardx.cardid == card._cardid);
                        if (cardx) cards2.push(cardx);
                        else cards2.push(card);
                    }
                    var cards3 = trigger.cards.slice().filter((card) => card.hasGaintag('hokcemouzhike'));
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
                    global: ['loseEnd', 'equipEnd', 'addJudgeEnd', 'gainEnd', 'loseAsyncEnd', 'addToExpansionEnd', 'cardsGotoOrderingBegin'],
                },
                persevereSkill: true,
                charlotte: true,
                forced: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    var idList = player.getCards('s', (card) => card.hasGaintag('hokcemouzhike')).map((i) => i._cardid);
                    return (
                        event.cards &&
                        event.cards.some((card) => {
                            return idList.includes(card.cardid);
                        })
                    );
                },
                content() {
                    var idList = player
                        .getCards('j', (card) => {
                            return (card.viewAs || card.name) == 'xumou_jsrg';
                        })
                        .map((i) => i.cardid);
                    cards2 = player.getCards('s', (card) => {
                        return card.hasGaintag('hokcemouzhike') && !idList.includes(card._cardid);
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
    hokdongfengpoxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        async content(event, trigger, player) {
            const { cards } = await game.cardsGotoOrdering(get.cards(3));
            if (_status.connectMode)
                game.broadcastAll(function () {
                    _status.noclearcountdown = true;
                });
            const map = {}; //QQQ
            if (!cards.length) return;
            do {
                const {
                    result: { bool, links },
                } =
                    cards.length == 1
                        ? { result: { links: cards.slice(0), bool: true } }
                        : await player.chooseButton(['东风破袭:请选择要分配的牌', true, cards], [1, cards.length]).set('ai', () => {
                            if (ui.selected.buttons.length == 0) return 1;
                            return 0;
                        });
                if (!bool) return;
                cards.removeArray(links);
                event.togive = links.slice(0);
                const { targets } = await player
                    .chooseTarget('选择一名角色获得' + get.translation(links), true)
                    .set('ai', (target) => {
                        const player = get.player();
                        const att = get.attitude(player, target);
                        if (get.event('enemy')) {
                            if (map[target.playerid] && map[target.playerid].length && get.damageEffect(target, player, player) > 0) return -att * 2;
                            return -att;
                        } else if (att > 0) {
                            return att / (1 + target.countCards('h'));
                        } else {
                            return att / 100;
                        }
                    })
                    .set('enemy', () => {
                        const player = get.player();
                        return get.value(event.togive[0], player, 'raw') < 0;
                    })
                    .forResult();
                if (targets.length) {
                    const id = targets[0].playerid;
                    if (!map[id]) map[id] = [];
                    map[id].addArray(event.togive);
                }
            } while (cards.length);
            if (_status.connectMode) {
                game.broadcastAll(function () {
                    delete _status.noclearcountdown;
                    game.stopCountChoose();
                });
            }
            const list = [];
            for (const i in map) {
                const source = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                player.line(source, 'green');
                if (player !== source && (get.mode() !== 'identity' || player.identity !== 'nei')) player.addExpose(0.2);
                list.push([source, map[i]]);
            }
            await game
                .loseAsync({
                    gain_list: list,
                    giver: player,
                    animate: 'draw',
                })
                .setContent('gaincardMultiple');
            for (const i in map) {
                const target = (_status.connectMode ? lib.playerOL : game.playerMap)[i];
                if (map[i].length >= 2) {
                    await target.damage();
                }
            }
        },
    },
    hokshikongchuansuo: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayer',
            target: 'useCardToTarget',
        },
        popup: false,
        usable: 2,
        filter(event, player) {
            return get.type(event.card) == 'trick';
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    const trigger = get.event().getTrigger();
                    return target == trigger.player || target == trigger.target;
                })
                .set('ai', (target) => {
                    return get.effect(target, { name: 'draw' }, target);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0],
                target2 = trigger[trigger.player == target ? 'target' : 'player'];
            await target.draw();
            if (
                target == target2 ||
                !player.canMoveCard(
                    null,
                    null,
                    game.filterPlayer((i) => i == target),
                    target2
                )
            )
                return;
            await player.moveCard(
                true,
                game.filterPlayer((i) => i == target),
                target2
            );
        },
        ai: {
            effect: {
                target_use(card, player, target) {
                    if (target.countSkill('hokshikongchuansuo') > 1) return;
                    if (get.type(card) == 'trick') return [1, 0.4];
                },
                player_use(card, player, target) {
                    if (player.countSkill('hokshikongchuansuo') > 1) return;
                    if (get.type(card) == 'trick') return [1, 0.4];
                },
            },
        },
    },
    hokpaoshouranhun: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        content() { },
        mod: {
            aiOrder(player, card, num) {
                if (card.name == 'sha' && typeof card.number == 'number') return num + card.number * 0.1;
            },
            cardnumber(card, player, num) {
                if (num > 12) return;
                const history = player.getHistory('useSkill', (evt) => evt.skill == 'hokpaoshouranhun');
                if (num + history.length > 12) return 13;
                return (num += history.length);
            },
        },
        group: 'hokpaoshouranhun_effect',
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCardToPlayered',
                },
                filter(event, player) {
                    if (!event.targets || !event.targets.length) return false;
                    return event.card && event.card.name == 'sha' && typeof event.card.number == 'number';
                },
                logTarget: 'target',
                prompt2(event, player) {
                    return `你可以令${get.translation(event.target)}不能使用点数不大于${event.card.number}的牌直至此牌结算后`;
                },
                check(event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                async content(event, trigger, player) {
                    trigger.target.markAuto('hokpaoshouranhun_block', [trigger.card]);
                    trigger.target.addTempSkill('hokpaoshouranhun_block');
                },
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (get.attitude(player, arg.target) > 0 || arg.card.name != 'sha') return false;
                    },
                },
            },
            block: {
                trigger: {
                    global: 'useCardEnd',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    if (!event.card || !player.storage.hokpaoshouranhun_block) return false;
                    return player.getStorage('hokpaoshouranhun_block').includes(event.card);
                },
                async content(event, trigger, player) {
                    player.unmarkAuto('hokpaoshouranhun_block', [trigger.card]);
                    if (!player.getStorage('hokpaoshouranhun_block').length) player.removeSkill('hokpaoshouranhun_block');
                },
                mod: {
                    cardEnabled(card, player) {
                        if (typeof card.number != 'number') return;
                        if (!player.storage.hokpaoshouranhun_block) return;
                        const storage = player.getStorage('hokpaoshouranhun_block');
                        const nums = storage.map((cardx) => cardx.number);
                        return card.number > Math.max(...nums);
                    },
                    cardSavable(card, player) {
                        if (typeof card.number != 'number') return;
                        if (!player.storage.hokpaoshouranhun_block) return;
                        const storage = player.getStorage('hokpaoshouranhun_block');
                        const nums = storage.map((cardx) => cardx.number);
                        return card.number > Math.max(...nums);
                    },
                },
            },
        },
    },
    hokzhongzhuangpaotai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        xushiSkill: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            if (player.countCards('h')) await player.draw(player.countCards('h'));
            player.addTempSkill('hokzhongzhuangpaotai_effect');
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    if (!player.countCards('h')) return 0;
                    return Number(player.hasSha());
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    if (
                        player.hasCard((card) => {
                            return lib.filter.cardDiscardable(card, player, 'hokzhongzhuangpaotai_effect');
                        }, 'h')
                    ) {
                        await player.chooseToDiscard('h', true);
                    }
                    player.addTempSkill('hokzhongzhuangpaotai_max');
                    player.addMark('hokzhongzhuangpaotai_max', 1, false);
                    player.update();
                    if (player.getHandcardLimit() == 0) {
                        var evt = trigger.getParent('phaseUse');
                        if (evt && evt.name == 'phaseUse') {
                            evt.skipped = true;
                        }
                        var evt = trigger.getParent('phase');
                        if (evt && evt.name == 'phase') {
                            evt.finish();
                        }
                        game.log(player, '结束了当前回合');
                    }
                },
                mod: {
                    cardUsable(card, player, num) {
                        return (num *= 2);
                    },
                },
            },
            max: {
                charlotte: true,
                mod: {
                    maxHandcard(player, num) {
                        return (num -= player.countMark('hokzhongzhuangpaotai_max'));
                    },
                },
            },
        },
    },
    hokchuanliubuxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        global: ['hokchuanliubuxi_use', 'hokchuanliubuxi_respond'],
        trigger: {
            player: ['useSkillAfter', 'logSkill'],
        },
        popup: false,
        forced: true,
        filter(event, player) {
            return event.skill?.startsWith('hokchuanliubuxi_');
        },
        async content(event, trigger, player) {
            player.storage.hokchuanliubuxi.pop();
            game.log(player, '删除了', '#g【川流不息】', '的最后一项描述');
            if (player.storage.hokchuanliubuxi.length) return;
            delete player.storage.hokchuanliubuxi;
            player.storage.hokchuanliubuxi = lib.skill.hokchuanliubuxi.getList(player);
            game.log(player, '重置了技能', '#g【川流不息】');
        },
        init(player, skill) {
            const list = get.info(skill).getList(player);
            player.storage[skill] = list;
        },
        getList(player) {
            if (!player.storage.hokchuanliubuxi) return [1, 2, 3, 4];
            return player.storage.hokchuanliubuxi;
        },
        group: ['hokchuanliubuxi_gain', 'hokchuanliubuxi_lose'],
        subSkill: {
            gain: {
                audio: 'hokchuanliubuxi',
                trigger: {
                    global: ['equipAfter', 'addJudgeAfter', 'loseAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                popup: false,
                getIndex(event, player, triggername) {
                    if (!player.getStorage('hokchuanliubuxi').includes(1)) return [];
                    return game
                        .filterPlayer((target) => {
                            if (target == player) return false;
                            const evt = event.getl(target);
                            return evt && evt.cards2 && evt.cards2.length > 1;
                        })
                        .sortBySeat();
                },
                filter(event, player) {
                    if (!player.getStorage('hokchuanliubuxi').includes(1)) return false;
                    return game.hasPlayer((target) => {
                        if (target == player) return false;
                        const evt = event.getl(target);
                        return evt && evt.cards2 && evt.cards2.length > 1;
                    });
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                prompt2(event, player, name, target) {
                    return `你可以与${get.translation(target)}各摸一张牌`;
                },
                check(event, player, name, target) {
                    return get.attitude(player, target) > 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    await game.asyncDraw([player, target]);
                },
            },
            lose: {
                audio: 'hokchuanliubuxi',
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                getIndex(event, player, triggername) {
                    if (!player.getStorage('hokchuanliubuxi').includes(3)) return [];
                    return game
                        .filterPlayer((target) => {
                            if (target == player) return false;
                            if (!target.countDiscardableCards(player, 'he')) return false;
                            return target != player && event.getg(target)?.length > 1;
                        })
                        .sortBySeat();
                },
                filter(event, player) {
                    if (!player.getStorage('hokchuanliubuxi').includes(3)) return false;
                    return game.hasPlayer((target) => {
                        if (target == player) return false;
                        if (!target.countDiscardableCards(player, 'he')) return false;
                        return target != player && event.getg(target)?.length > 1;
                    });
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                check(event, player, name, target) {
                    return get.effect(target, { name: 'guohe_copy2' }, player, player) >= 0;
                },
                async cost(event, trigger, player) {
                    const target = event.indexedData;
                    event.result = await player
                        .discardPlayerCard('he', target, get.prompt2(event.name.slice(0, -5), target))
                        .set('prompt2', `你可以弃置${get.translation(target)}的一张牌`)
                        .set('chooseonly', true)
                        .forResult();
                    event.result.targets = [target];
                },
                async content(event, trigger, player) {
                    await event.targets[0].discard(event.cards);
                },
            },
            use: {
                enable: 'chooseToUse',
                filter(event, player) {
                    if (player.isTempBanned('hokchuanliubuxi_use') || event.hokchuanliubuxi) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (!['basic', 'trick'].includes(type)) return false;
                            if (type == 'basic') {
                                return game.hasPlayer((target) => {
                                    if (target == player || !target.countCards('h')) return false;
                                    return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                                });
                            }
                            if (!player.hasSkill('hokchuanliubuxi') || !player.getStorage('hokchuanliubuxi').includes(4)) return false;
                            return game.hasPlayer((target) => {
                                return target != player && target.countCards('h');
                            });
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                if (!['basic', 'trick'].includes(type)) return false;
                                if (type == 'basic') {
                                    return game.hasPlayer(function (target) {
                                        if (target == player || !target.countCards('h')) return false;
                                        return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                                    });
                                }
                                if (!player.hasSkill('hokchuanliubuxi') || !player.getStorage('hokchuanliubuxi').includes(4)) return false;
                                return game.hasPlayer(function (target) {
                                    return target != player && target.countCards('h');
                                });
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        const dialog = ui.create.dialog('川流不息', [list, 'vcard'], 'hidden');
                        dialog.direct = true;
                        return dialog;
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        return get.player().getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            ai1(card) {
                                return 1;
                            },
                            async precontent(event, trigger, player) {
                                player.tempBanSkill('hokchuanliubuxi_use', { player: ['useCard1', 'useSkillBegin', 'phaseUseEnd'] }, false);
                            }, //QQQ
                        };
                    },
                    prompt(links, player) {
                        return '将一名角色的所有手牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name) || player.isTempBanned('hokchuanliubuxi_use')) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (!['basic', 'trick'].includes(type)) return false;
                            if (type == 'basic') {
                                return game.hasPlayer(function (target) {
                                    if (target == player || !target.countCards('h')) return false;
                                    return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                                });
                            }
                            if (!player.hasSkill('hokchuanliubuxi') || !player.getStorage('hokchuanliubuxi').includes(4)) return false;
                            return game.hasPlayer(function (target) {
                                return target != player && target.countCards('h');
                            });
                        })
                        .some((card) => card[2] == name);
                },
                ai: {
                    order(item, player) {
                        if (player && get.event().type == 'phase') {
                            let list = get
                                .inpileVCardList((info) => {
                                    const name = info[2],
                                        type = get.type(name),
                                        infox = get.info({ name: name });
                                    if (!['basic', 'trick'].includes(type)) return false;
                                    if (type == 'basic') {
                                        return game.hasPlayer(function (target) {
                                            if (target == player || !target.countCards('h')) return false;
                                            return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                                        });
                                    }
                                    if (!player.hasSkill('hokchuanliubuxi') || !player.getStorage('hokchuanliubuxi').includes(4)) return false;
                                    return game.hasPlayer(function (target) {
                                        return target != player && target.countCards('h');
                                    });
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
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg == 'respond') return false;
                        const name = tag == 'respondSha' ? 'sha' : 'shan';
                        return get.info('hokchuanliubuxi_use').hiddenCard(player, name);
                    },
                    result: {
                        player(player) {
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            if (!player.hasSkill('hokchuanliubuxi')) {
                                const targets = game.filterPlayer(function (target) {
                                    if (target == player || !target.countCards('h')) return false;
                                    return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                                });
                                for (const target of targets) {
                                    let att = get.attitude(target, player),
                                        effect = 0;
                                    let hs = target.getCards('h'),
                                        num = hs.length;
                                    if (num == 1) effect = 2;
                                    if (target.hasSkillTag('noh')) effect += 1;
                                    if (att > 0) return effect - num;
                                }
                                return Math.floor(Math.random() * 1.2) + 0.2;
                            }
                            if (
                                game.hasPlayer(function (target) {
                                    return get.attitude(target, player) >= 0 && target.countCards('h');
                                })
                            )
                                return 2;
                            return Math.floor(Math.random() * 1.2) + 0.5;
                        },
                    },
                },
            },
            respond: {
                trigger: {
                    player: 'useCardBegin',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return event.skill && event.skill.startsWith('hokchuanliubuxi_use');
                },
                async content(event, trigger, player) {
                    delete trigger.skill;
                    trigger.parent.set('hokchuanliubuxi', true);
                    const type = get.type(trigger.card),
                        targets = game.filterPlayer((target) => {
                            if (target == player) return false;
                            if (type == 'basic') {
                                return target.hasSkill('hokchuanliubuxi') && target.getStorage('hokchuanliubuxi').includes(2);
                            }
                            return true;
                        });
                    if (!targets.length) {
                        trigger.cancel();
                        trigger.parent.goto(0);
                        return;
                    }
                    for (const target of targets) {
                        let hs = target.getCards('h');
                        if (!hs.length) continue;
                        if (
                            hs.some((card) => {
                                const mod2 = game.checkMod(card, target, 'unchanged', 'cardEnabled2', target);
                                return mod2 === false;
                            })
                        )
                            continue;
                        const bool = await target
                            .chooseBool()
                            .set('prompt', `###${get.prompt('hokchuanliubuxi', trigger.player)}###你可以令${get.translation(trigger.player)}将你的所有手牌当做${get.translation(trigger.card)}使用`)
                            .set('ai', function () {
                                const player = get.player(),
                                    trigger = get.event().getTrigger();
                                if (player.countCards('h') > 2) return 0;
                                return get.attitude(player, trigger.player) > 0;
                            })
                            .forResultBool();
                        if (bool) {
                            let skill_owner = type == 'basic' ? target : player,
                                skill_loger = type == 'basic' ? player : target;
                            let card = { name: trigger.card.name },
                                owner = get.owner(hs[0]);
                            trigger.card = card;
                            trigger.cards = hs;
                            trigger.card.cards = trigger.cards;
                            owner.$give(hs, trigger.player, false);
                            await game.asyncDelay();
                            return;
                            break;
                        }
                    }
                    trigger.cancel();
                    trigger.parent.goto(0);
                },
            },
            use_backup: {},
        },
    },
    hokyaolongzhuzhao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'damageEnd',
            source: 'damageEnd',
        },
        forced: true,
        filter(event, player) {
            return event.card && get.tag(event.card, 'damage') && player.getStorage('hokyaolongzhuzhao').length < 3;
        },
        async content(event, trigger, player) {
            if (!player.storage[event.name]) player.storage[event.name] = [];
            player.storage[event.name].push(trigger.card);
            player.markSkill(event.name);
        },
        intro: {
            content: 'cards',
        },
        group: 'hokyaolongzhuzhao_use',
        subSkill: {
            use: {
                audio: 'hokyaolongzhuzhao',
                enable: 'phaseUse',
                usable: 1,
                filter(event, player) {
                    return player.getStorage('hokyaolongzhuzhao').length;
                },
                filterTarget: true,
                complexTarget: true,
                multitarget: true,
                selectTarget() {
                    const player = get.player();
                    return [1, player.getStorage('hokyaolongzhuzhao').length];
                },
                targetprompt() {
                    const player = get.player();
                    return player.getStorage('hokyaolongzhuzhao').map((info) => get.translation(info));
                },
                async content(event, trigger, player) {
                    const targets = event.targets;
                    const namelist = player
                        .getStorage('hokyaolongzhuzhao')
                        .slice(0)
                        .map((info) => info.name);
                    for (const target of targets) {
                        const name = namelist.shift();
                        if (player.canUse({ name: name }, target, false)) {
                            await player.useCard({ name: name }, target);
                        }
                    }
                    delete player.storage.hokyaolongzhuzhao;
                },
                ai: {
                    order: 1.2,
                    result: {
                        target(player, target) {
                            const namelist = player
                                .getStorage('hokyaolongzhuzhao')
                                .slice(0)
                                .map((info) => info.name);
                            if (ui.selected.targets.length) {
                                return get.effect(target, { name: namelist[ui.selected.targets] }, player, player);
                            }
                            return get.effect(target, { name: namelist[0] }, player, player);
                        },
                    },
                },
            },
        },
    },
    hokduoshenqiyue: {
        derivation: 'dccansi',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        xushiSkill: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            var next = game.createEvent('dccansi');
            next.player = player;
            next.setContent(async (event, trigger, player) => {
                await player.recover();
                if (game.hasPlayer((current) => current != player)) {
                    const { bool, targets } = await player
                        .chooseTarget('残肆:选择一名其他角色', true, lib.filter.notMe)
                        .set('ai', (target) => {
                            const player = get.player();
                            let list = ['recover', 'sha', 'juedou', 'huogong'];
                            return list.reduce((p, c) => {
                                return p + get.effect(target, { name: c }, player, player);
                            }, 0);
                        })
                        .forResult();
                    if (bool) {
                        const target = targets[0],
                            list = ['sha', 'juedou', 'huogong'];
                        player.line(target, 'fire');
                        await target.recover();
                        player.addTempSkill('dccansi_draw');
                        player.setStorage('dccansi_draw', target);
                        player.addTempSkill('hokduoshenqiyue_effect');
                        player.setStorage('hokduoshenqiyue_effect', target);
                        target.addTempSkill('hokduoshenqiyue_effect');
                        target.setStorage('hokduoshenqiyue_effect', player);
                        while (list.length) {
                            const card = { name: list.shift() };
                            if (target.isIn() && player.canUse(card, target, false)) await player.useCard(card, target, false);
                        }
                        player.removeSkill('hokduoshenqiyue_effect');
                        target.removeSkill('hokduoshenqiyue_effect');
                        player.removeSkill('dccansi_draw');
                    }
                }
            });
        },
        ai: {
            order: 1,
            result: {
                player(player) {
                    return get.recoverEffect(player, player, player);
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
                _priority: Infinity,
                filter(event, player) {
                    if (event.player.isDead()) return false;
                    if (event.num <= 0) return false;
                    if (player.storage.hokduoshenqiyue_effect != event.player) return false;
                    return event.parent.name != 'hokduoshenqiyue_effect';
                },
                async content(event, trigger, player) {
                    player.damage(trigger.num, 'nosource');
                },
                mark: true,
                marktext: '契',
                intro: {
                    name: '堕神契约',
                    markcount(storage) {
                        return get.translation(storage);
                    },
                    content: '当你受到伤害后,$受到等量无来源的伤害',
                },
            },
        },
    },
    hokbiyitongxin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:8',
        trigger: {
            player: 'useCardAfter',
        },
        filter(event, player) {
            if (!get.is.jishi(event.card) || event.targets?.length != 1) return false;
            const vcard = new lib.element.VCard({ name: event.card.name, nature: event.card.nature });
            return game.hasPlayer((target) => {
                return lib.filter.targetEnabled2(vcard, player, target);
            });
        },
        check(event, player) {
            const vcard = new lib.element.VCard({ name: event.card.name, nature: event.card.nature });
            return player.hasValueTarget(vcard);
        },
        prompt2(event, player) {
            const vcard = new lib.element.VCard({ name: event.card.name, nature: event.card.nature });
            return `每轮限一次,当你使用仅指定唯一目标的即时牌结算后,你可以视为使用${get.translation(vcard)}并额外指定一名目标.`;
        },
        async content(event, trigger, player) {
            player.tempBanSkill(event.name, false, false);
            const vcard = new lib.element.VCard({ name: trigger.card.name, nature: trigger.card.nature });
            const targets = game.filterPlayer((target) => {
                return lib.filter.targetEnabled2(vcard, player, target);
            });
            if (!targets.length) return;
            if (targets.length <= 2) {
                await player.useCard(vcard, targets, false);
            } else {
                await player
                    .chooseUseTarget(vcard, false, true)
                    .set('prompt', `###你发动了${get.translation(event.name)}###视为再使用一张【${get.translation(vcard)}】并额外指定一名目标`)
                    .set('targets', targets)
                    .set('selectTarget', () => {
                        return get.event('targets').length > 1 ? 2 : 1;
                    });
            }
        },
        ai: {
            threaten: 1.3,
        },
    },
    hokcixiongshuangjian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
        },
        popup: false,
        filter(event, player) {
            return event.isFirstTarget && event.targets?.length >= 2;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget()
                .set('prompt', get.prompt(event.name.slice(0, -5)))
                .set('prompt2', `令${get.translation(trigger.card)}对任意名目标角色无效并对其他目标角色结算两次`)
                .set('filterTarget', (card, player, target) => {
                    const trigger = _status.event.getTrigger();
                    return trigger.targets.includes(target);
                })
                .set('selectTarget', [1, trigger.targets.length])
                .set('ai', function (target) {
                    const player = get.player(),
                        trigger = _status.event.getTrigger();
                    if (trigger.targets.length >= game.countPlayer() - 1 && !trigger.excluded.includes(target)) {
                        return -get.effect(target, trigger.card, trigger.player, get.player());
                    }
                    return -1;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const targets = event.targets;
            player.tempBanSkill(event.name, false, false);
            game.log(trigger.card, '对', targets, '无效');
            trigger.parent.excluded.addArray(targets);
            trigger.parent.effectCount++;
        },
        ai: {
            threaten: 1.4,
        },
    },
    hokjianlai: {
        derivation: ['hokbiyitongxin', 'hokcixiongshuangjian'],
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        limited: true,
        async content(event, trigger, player) {
            player.awakenSkill('hokjianlai');
            let skills = get.info(event.name).derivation.slice(0);
            do {
                let skill = skills.shift();
                if (player.isTempBanned(skill)) {
                    delete player.storage[`temp_ban_${skill}`];
                    game.log(player, '重置了技能', `#g【${get.translation(skill)}】`);
                }
            } while (skills.length);
            player.addTempSkill('hokjianlai_effect');
        },
        ai: {
            order: 9,
            combo: ['hokbiyitongxin', 'hokcixiongshuangjian'],
            result: {
                player(player) {
                    let eff = 0,
                        skills = get.info('hokjianlai').derivation;
                    if (
                        skills.every(function (skill) {
                            return !player.hasSkill(skill) || !player.isTempBanned(skill);
                        })
                    ) {
                        return 0;
                    }
                    eff +=
                        0.5 *
                        player.countCards('hs', function (card) {
                            return player.hasUseTarget(card) && player.hasValueTarget(card);
                        });
                    return eff;
                },
            },
        },
        subSkill: {
            effect: {
                trigger: {
                    player: ['hokbiyitongxinAfter', 'hokcixiongshuangjianAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    const skill = trigger.name == 'hokbiyitongxin' ? 'hokcixiongshuangjian' : 'hokbiyitongxin';
                    if (player.isTempBanned(skill)) {
                        delete player.storage[`temp_ban_${skill}`];
                        game.log(player, '重置了技能', `#g【${get.translation(skill)}】`);
                    }
                },
                ai: {
                    combo: ['hokbiyitongxin', 'hokcixiongshuangjian'],
                },
            },
        },
    },
    hokshenyin: {
        audio: 'ext:王者荣耀/audio:3',
        trigger: {
            player: 'showCharacterAfter',
        },
        popup: false,
        hiddenSkill: true,
        filter(event, player) {
            return event.toShow?.some((i) => get.character(i).skills?.includes('hokshenyin'));
        },
        async cost(event, trigger, player) {
            if (_status.connectMode)
                game.broadcastAll(function () {
                    _status.noclearcountdown = true;
                });
            const lose_list = [];
            let num = game.countPlayer();
            while (num > 0) {
                const { bool, targets } = await player
                    .chooseTarget(`你可发动${get.translation('hokshenyin')},将任意名角色区域内的累计至多${num}张牌置于牌堆底`, (card, player, target) => {
                        return target.hasCard((card) => {
                            const discarded = _status.event.lose_list.find((item) => item[0] == target);
                            if (discarded && discarded[1].includes(card)) return false;
                            return true;
                        }, 'hej');
                    })
                    .set('ai', (target) => {
                        const player = _status.event.player,
                            discarded = _status.event.lose_list.find((item) => item[0] == target);
                        if (discarded) {
                            if (target == player) return 0;
                        }
                        if (target == player) {
                            if (player.hasCard((card) => get.value(card) < 6.5)) return 10;
                            return 0;
                        }
                        return get.effect(target, { name: 'guohe_copy2' }, player, player);
                    })
                    .set('lose_list', lose_list)
                    .forResult();
                if (bool) {
                    const target = targets[0];
                    const { links } = await player
                        .choosePlayerCard(target, true, 'hej', [1, num], `选择将${get.translation(target)}区域内的牌置于牌堆底`)
                        .set('filterButton', (button) => {
                            const card = button.link,
                                target = _status.event.target,
                                player = get.player();
                            const discarded = _status.event.lose_list.find((item) => item[0] == target);
                            if (discarded && discarded[1].includes(card)) return false;
                            return true;
                        })
                        .set('lose_list', lose_list)
                        .set('ai', (button) => {
                            if (ui.selected.buttons.length) return false;
                            var val = get.buttonValue(button);
                            if (get.attitude(_status.event.player, _status.event.target) > 0) return -val;
                            return val;
                        })
                        .forResult();
                    num -= links.length;
                    const index = lose_list.find((item) => item[0] == target);
                    if (!index) {
                        lose_list.push([target, links]);
                    } else {
                        index[1].addArray(links);
                    }
                } else {
                    break;
                }
            }
            if (_status.connectMode) {
                game.broadcastAll(function () {
                    delete _status.noclearcountdown;
                    game.stopCountChoose();
                });
            }
            if (lose_list.length) event.result = { bool: true, cost_data: { lose_list } };
        },
        async content(event, trigger, player) {
            let lose_list = event.cost_data.lose_list;
            if (lose_list.length == 1) {
                lose_list[0][0].loseToDiscardpile(lose_list[0][1], ui.cardPile, false, 'blank').set('log', false);
                lose_list[0][0].$throw(lose_list[0][1].length, null);
                game.log(player, '将', lose_list[0][0], '的', get.cnNumber(lose_list[0][1].length), '张牌置于牌堆底');
                game.updateRoundNumber();
            } else {
                game.loseAsync({
                    player: player,
                    lose_list: lose_list,
                }).setContent(function () {
                    let lose_list = event.lose_list;
                    for (let i = 0; i < lose_list.length; i++) {
                        lose_list[i][0].loseToDiscardpile(lose_list[i][1], ui.cardPile, false, 'blank').set('log', false);
                        lose_list[i][0].$throw(lose_list[i][1].length, null);
                        game.log(player, '将', lose_list[i][0], '的', get.cnNumber(lose_list[i][1].length), '张牌置于牌堆底');
                    }
                });
                game.updateRoundNumber();
            }
            await game.asyncDelay();
            const targets = lose_list
                .map((i) => i[0])
                .filter((j) => player.canUse({ name: 'wugu' }, j, false))
                .sortBySeat(player);
            if (targets.length) player.chooseUseTarget({ name: 'wugu' }, targets, true);
        },
    },
    hokwuyin: {
        audio: 'ext:王者荣耀/audio:3',
        enable: 'phaseUse',
        limited: true,
        filterTarget(card, player, target) {
            return get.distance(player, target) <= 1;
        },
        selectTarget: [1, Infinity],
        multitarget: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const targets = event.targets;
            for (const target of targets) {
                get.info('hokhuanwu').yinni(target);
            }
            let list = get.gainableSkills().filter((skill) => {
                if (player.getSkills().includes(skill)) return false;
                var info = get.info(skill);
                return info && info.hiddenSkill;
            });
            if (!list.length) return;
            list = list.randomGets(3);
            list = list.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
            const mbdialog = new ui.create.mobileDialog(event, 'hokwuyin');
            mbdialog.dialog.classList.add('changeSkill');
            mbdialog.dialog.add([list, 'textbutton']);
            mbdialog.addTip("你发动了<span style='color: #a4dfd5'>雾隐</span>,请选择获得一个隐匿技");
            const { result } = await player
                .chooseButton(event.dialog, true)
                .set('ai', function (button) {
                    const skill = button.link;
                    switch (skill) {
                        case 'hokmijijiyi':
                            return 20;
                        default:
                            return get.skillRank(skill, 'out');
                    }
                })
                .set('closeDialog', true);
            if (result.bool) {
                let skill = result.links[0];
                player.addSkills(skill);
                let info = lib.skill[skill];
                let filter = info.filter;
                if (info && filter) {
                    game.broadcastAll(
                        function (player, info, filter) {
                            info.guiguzi_filter = info.filter;
                            if (!info.guiguzi_playerid) info.guiguzi_playerid = [];
                            info.guiguzi_playerid.add(player.playerid);
                            var skills = filter.toString();
                            const single_newRegexp = /toShow.includes\((?:"|")(.+?)(?:"|")\)/g;
                            const double_newRegexp = /toShow.includes\((?:"|")(.+?)(?:"|")\)/g;
                            const single_oldRegexp = /toShow.includes\((?:"|")(.+?)(?:"|")\)/g;
                            const double_oldRegexp = /toShow.includes\((?:"|")(.+?)(?:"|")\)/g;
                            var oldregexp = /toShow.includes\((?:"|")(.+?)(?:"|")\)/g;
                            let match = [...skills.matchAll(single_newRegexp)];
                            if (!match || !match.length) match = [...skills.matchAll(double_newRegexp)];
                            if (!match || !match.length) match = [...skills.matchAll(single_oldRegexp)];
                            if (!match || !match.length) match = [...skills.matchAll(double_oldRegexp)];
                            if (!match || !match.length) return;
                            skills = skills.replace(new RegExp(match[0][1], 'g'), player.name1);
                            if (skills.indexOf('function') == -1) skills = 'function' + skills.slice(6);
                            skills = eval('(false||' + skills + ')');
                            info['filter_' + player.playerid] = skills;
                            info.filter = function (event, player) {
                                if (this.guiguzi_playerid.includes(player.playerid)) {
                                    return this['filter_' + player.playerid].apply(this, arguments);
                                }
                                return this.guiguzi_filter.apply(this, arguments);
                            };
                        },
                        player,
                        info,
                        filter
                    );
                }
            }
        },
        ai: {
            order: 0.1,
            result: {
                target(player, target) {
                    if (
                        target.getSkills(null, false, false).filter(function (skill) {
                            var info = lib.skill[skill];
                            return info && info.hiddenSkill;
                        }).length
                    )
                        return 1.5;
                    return 1;
                },
            },
        },
    },
    hokjirenfengbao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayer',
        },
        forced: true,
        logTarget: 'target',
        filter(event, player) {
            if (!['sha', 'juedou'].includes(event.card.name)) return false;
            if (!event.isFirstTarget) return false;
            return event.targets && event.targets.length == 1;
        },
        async content(event, trigger, player) {
            trigger.parent.baseDamage++;
        },
        mod: {
            selectTarget(card, player, range) {
                if (!['sha', 'juedou'].includes(card.name)) return;
                if (Array.isArray(range) && range[1] != -1) range[1]++;
            },
        },
    },
    hokbumiemoqu: {
        derivation: 'rongbei',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        xushiSkill: true,
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.drawTo(player.maxHp);
            player.addTempSkill('hokbumiemoqu_effect');
            player.addMark('hokbumiemoqu_effect', 1, false);
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            effect: {
                charlotte: true,
                mod: {
                    attackRange(from, distance) {
                        return distance + from.countMark('hokbumiemoqu_effect');
                    },
                    cardUsable(card, player, num) {
                        if (card.name == 'sha') return num + player.countMark('hokbumiemoqu_effect') * 2;
                    },
                    maxHandcard(player, num) {
                        return num + player.countMark('hokbumiemoqu_effect') * 3;
                    },
                },
                mark: true,
                intro: {
                    markcount: () => 0,
                    content: (storage) => `你的攻击范围+${storage},使用【杀】的次数上限+${storage * 2},手牌上限+${storage * 3}.`,
                },
            },
        },
    },
    hokjingmizhiyan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseEnd',
        },
        forced: true,
        popup: false,
        filter(event, player) {
            return !player.hasHistory('sourceDamage') || !player.hasHistory('damage');
        },
        async content(event, trigger, player) {
            await player
                .chooseToUse(function (card) {
                    if (card.name != 'sha') return false;
                    return lib.filter.cardEnabled.apply(this, arguments);
                })
                .set('prompt', get.prompt(event.name))
                .set('prompt2', `每个你未造成或未受到伤害的回合结束时,你可以使用一张【杀】(若两项军满足,此牌伤害基数+1)`)
                .set('addCount', false)
                .set('oncard', () => {
                    const player = get.player();
                    if (!player.hasHistory('sourceDamage') && !player.hasHistory('damage')) _status.event.baseDamage += 1;
                });
        },
    },
    hokkuangfengzhixi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        mod: {
            attackRange: (player, num) => num + 1,
        },
        filter(event, player) {
            var respondEvts = [];
            respondEvts.addArray(player.getHistory('useCard')).addArray(player.getHistory('respond'));
            respondEvts = respondEvts.filter((i) => i.respondTo).map((evt) => evt.respondTo);
            if (respondEvts.length || !player.countCards('h')) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return ['sha', 'shan'].includes(name);
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                var vcards = [];
                for (var name of ['sha', 'shan']) {
                    var card = { name: name };
                    if (event.filterCard && event.filterCard(card, player, event)) vcards.push(['', '', name]);
                }
                const dialog = ui.create.dialog('狂风之息', [vcards, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            check(button) {
                return get.player().getUseValue({
                    name: button.link[2],
                });
            },
            backup(links) {
                return {
                    viewAs: {
                        name: links[0][2],
                        storage: {
                            hokkuangfengzhixi: true,
                        },
                    },
                    filterCard: true,
                    ai1(card) {
                        return 7 - get.value(card);
                    },
                    async precontent(event, trigger, player) { },
                };
            },
            prompt(links) {
                return '将一张手牌当做' + get.translation(links[0][2]) + '使用';
            },
        },
        ai: {
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag, arg) {
                if (arg != 'use') return false;
                var respondEvts = [];
                respondEvts.addArray(player.getHistory('useCard')).addArray(player.getHistory('respond'));
                respondEvts = respondEvts.filter((i) => i.respondTo).map((evt) => evt.respondTo);
                if (respondEvts.length || !player.countCards('h')) return false;
            },
            order(item, player) {
                var player = _status.event.player;
                var event = _status.event;
                if (event.filterCard && event.filterCard({ name: 'sha' }, player, event)) {
                    if (
                        !player.hasShan() &&
                        !game.hasPlayer(function (current) {
                            return player.canUse('sha', current) && current.hp == 1 && get.effect(current, { name: 'sha' }, player, player) > 0;
                        })
                    ) {
                        return 0;
                    }
                    return 2.95;
                } else {
                    var player = _status.event.player;
                    return 3.15;
                }
            },
            result: {
                player: 1,
            },
        },
        subSkill: {
            backup: {},
            effect: {
                trigger: {
                    player: 'useCardAfter',
                    global: ['shaMiss', 'eventNeutralized'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player, name) {
                    switch (name) {
                        case 'useCardAfter': {
                            return event.card && event.card.storage && event.card.storage.hokkuangfengzhixi && player.hasHistory('sourceDamage', (evt) => evt.card == event.card);
                        }
                        default: {
                            if (event.type != 'card') return false;
                            var responder;
                            if (event.name == 'sha') {
                                if (!event.responded || !event.responded.card || !event.responded.card.storage || !event.responded.card.storage.hokkuangfengzhixi) return false;
                                responder = event.target;
                            } else {
                                if (!event._neutralize_event || !event._neutralize_event.card) return false;
                                if (!event._neutralize_event.card.storage || !event._neutralize_event.card.storage.hokkuangfengzhixi) return false;
                                responder = event._neutralize_event.player;
                            }
                            return player == responder;
                        }
                    }
                },
                async content(event, trigger, player) {
                    player.addTempSkill('qianxing');
                },
            },
        },
    },
    hokshenhugoulian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        global: 'hokshenhugoulian_ai',
        trigger: {
            global: 'useCardBegin',
        },
        forced: true,
        filter(event, player) {
            if (event.player == player || !event.player.isLinked()) return false;
            if (get.type(event.card) == 'basic') return false;
            return _status.currentPhase == player;
        },
        async jiuContent(event, trigger, player) {
            for (const target of event.targets) target.chooseUseTarget({ name: 'jiu' }, event.cards, true, false);
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokshenhugoulian_effect');
            player.markAuto('hokshenhugoulian_effect', [[trigger.card, { name: 'jiu' }, trigger.player]]);
        },
        ai: {
            threaten: 2.5,
        },
        group: 'hokshenhugoulian_restore',
        subSkill: {
            ai: {
                trigger: {
                    player: 'dieAfter',
                },
                silent: true,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return !game.hasPlayer((i) => i.hasSkill('hokshenhugoulian'), true);
                },
                async content(event, trigger, player) {
                    game.removeGlobalSkill('hokshenhugoulian_ai');
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!player.isLinked()) return;
                            if (_status.currentPhase && !_status.currentPhase.hasSkill('hokshenhugoulian')) return;
                            if (get.type(card) != 'basic') return [0.5, 0.6];
                        },
                        player(card, player, target) {
                            if (!player.isLinked()) return;
                            if (_status.currentPhase && !_status.currentPhase.hasSkill('hokshenhugoulian')) return;
                            if (card.name == 'wuxie') return [0, -1];
                            if (get.type(card) != 'basic') return [1, 0, 0.5, 0.5];
                        },
                    },
                },
            },
            effect: {
                trigger: {
                    global: 'useCardToBegin',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    const storage = player.getStorage('hokshenhugoulian_effect');
                    return storage.some((list) => list[0] == event.card);
                },
                async content(event, trigger, player) {
                    const list = player.getStorage('hokshenhugoulian_effect').find((list) => list[0] == trigger.card);
                    trigger.setContent(lib.card[list[1].name].content);
                },
            },
            restore: {
                audio: 'hokshenhugoulian',
                trigger: {
                    source: 'dieAfter',
                },
                forced: true,
                async content(event, trigger, player) {
                    const num = player.getHistory('sourceDamage').reduce((p, c) => p + c.num, 0);
                    if (player.storage.hokmengyangousuo_used) delete player.storage.hokmengyangousuo_used;
                    if (num > 0) await player.draw(num);
                },
            },
        },
    },
    hokmengyangousuo: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return player.countCards('hes', (card) => lib.filter.cardDiscardable(card, player, 'hokmengyangousuo')) && game.hasPlayer((target) => get.info('hokmengyangousuo').filterTarget(null, player, target));
        },
        filterTarget(card, player, target) {
            return !player.getStorage('hokmengyangousuo_used').includes(target);
        },
        filterCard: true,
        position: 'hes',
        check(card) {
            let val = 6;
            let player = get.player();
            if (player.needsToDiscard()) val += 2;
            return val - get.value(card);
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addTempSkill('hokmengyangousuo_used', 'phaseUseAfter');
            player.markAuto('hokmengyangousuo_used', event.targets);
            target.link(true);
            const { bool } = await target
                .chooseToUse(function (card, player, event) {
                    return lib.filter.filterCard.apply(this, arguments);
                })
                .set('sourcex', player)
                .set('prompt', `${get.translation(player)}发动了<${get.translation(event.name)}>,对其使用一张牌,或受到其对你造成的1点雷电伤害`)
                .set('targetRequired', true)
                .set('complexSelect', true)
                .set('filterTarget', function (card, player, target) {
                    if (target != get.event('sourcex') && !ui.selected.targets.includes(get.event('sourcex'))) return false;
                    return lib.filter.filterTarget.apply(this, arguments);
                })
                .forResult();
            if (!bool) {
                await target.damage('thunder');
            }
        },
        ai: {
            order(item, player) {
                if (player.needsToDiscard()) return 10;
                return get.order({ name: 'sha' }) + 1;
            },
            result: {
                target(player, target) {
                    if (player.hasSkill('hokshenhugoulian') && !target.hasSha()) {
                        return get.damageEffect(target, player, target, 'thunder');
                    }
                    if (
                        target.countCards('h', function (card) {
                            return get.type(card) == 'basic' && target.canUse(card, player, false);
                        })
                    ) {
                        if (!player.hasShan()) return -0.5;
                    }
                    return -1;
                },
            },
        },
        subSkill: {
            used: {
                charlotte: true,
            },
        },
    },
    hokbuqutiebi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        filter(event, player) {
            if (event.type == 'dying') {
                if (player != event.dying) return false;
                return true;
            }
            return false;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            game.asyncDelay();
            ui.clear();
            var cards = get.cards(3);
            var dialog = ui.create.dialog('不屈铁壁', cards, true);
            _status.dieClose.push(dialog);
            dialog.videoId = lib.status.videoId++;
            game.addVideo('cardDialog', null, ['不屈铁壁', get.cardsInfo(cards), dialog.videoId]);
            var preResult = dialog.videoId;
            game.broadcast(
                function (cards, id) {
                    var dialog = ui.create.dialog('不屈铁壁', cards, true);
                    _status.dieClose.push(dialog);
                    dialog.videoId = id;
                },
                cards,
                dialog.videoId
            );
            const targets = game.filterPlayer((target) => target != player).sortBySeat(player);
            for (const target of targets) {
                player.line(target);
                for (let i = 0; i < ui.dialogs.length; i++) {
                    if (ui.dialogs[i].videoId == preResult) {
                        dialog = ui.dialogs[i];
                        break;
                    }
                }
                event.dialog = dialog;
                if (!dialog || !target.countCards('h')) continue;
                var minValue = 20;
                var hs = target.getCards('h');
                for (let i = 0; i < hs.length; i++) {
                    minValue = Math.min(minValue, get.value(hs[i], target));
                }
                const { bool } = await target
                    .chooseToDiscard('h')
                    .set('ai', function (card) {
                        const att = get.attitude(target, player);
                        let save = false;
                        if (cards.some((card) => get.tag(card, 'save'))) save = true;
                        if (att <= 0) {
                            if (save) return 6 - get.value(card);
                            return 0;
                        } else if (save && get.recoverEffect(target, target, target)) return (target.isDamaged() ? 8 : 6) - get.value(card);
                        return 5 - get.value(card);
                    })
                    .set('prompt', `${get.translation(player)}发动了不屈铁壁,你可以弃置一张牌并获得一张展示牌,若如此做,你与对方回复1点体力`)
                    .forResult();
                if (bool) {
                    const { result } = await target
                        .chooseButton(true)
                        .set('ai', function (button) {
                            return get.value(button.link, _status.event.player);
                        })
                        .set('dialog', preResult)
                        .set('closeDialog', false)
                        .set('dialogdisplay', true);
                    dialog.setCaption('不屈铁壁');
                    if (result.bool) {
                        var card;
                        if (event.directButton) {
                            card = event.directButton.link;
                        } else {
                            for (const i of dialog.buttons) {
                                if (i.link == result.links[0]) {
                                    card = i.link;
                                    break;
                                }
                            }
                            if (!card) card = event.dialog.buttons[0].link;
                        }
                        var button;
                        for (let i = 0; i < dialog.buttons.length; i++) {
                            if (dialog.buttons[i].link == card) {
                                button = dialog.buttons[i];
                                button.querySelector('.info').innerHTML = (function (target) {
                                    if (target._tempTranslate) return target._tempTranslate;
                                    var name = target.name;
                                    if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                                    return get.translation(name);
                                })(target);
                                dialog.buttons.remove(button);
                                break;
                            }
                        }
                        var capt = get.translation(target) + '选择了' + get.translation(button.link);
                        if (card) {
                            target.gain(card, 'visible');
                            target.$gain2(card);
                            target.recover();
                            player.recover();
                            game.broadcast(
                                function (card, id, name, capt) {
                                    var dialog = get.idDialog(id);
                                    if (dialog) {
                                        dialog.content.firstChild.innerHTML = capt;
                                        for (let i = 0; i < dialog.buttons.length; i++) {
                                            if (dialog.buttons[i].link == card) {
                                                dialog.buttons[i].querySelector('.info').innerHTML = name;
                                                dialog.buttons.splice(i--, 1);
                                                break;
                                            }
                                        }
                                    }
                                },
                                card,
                                dialog.videoId,
                                (function (target) {
                                    if (target._tempTranslate) return target._tempTranslate;
                                    var name = target.name;
                                    if (lib.translate[name + '_ab']) return lib.translate[name + '_ab'];
                                    return get.translation(name);
                                })(target),
                                capt
                            );
                        }
                        dialog.content.firstChild.innerHTML = capt;
                        game.addVideo('dialogCapt', null, [dialog.videoId, dialog.content.firstChild.innerHTML]);
                        game.log(target, '选择了', button.link);
                    }
                }
                game.asyncDelay();
            }
            var dialog = get.idDialog(preResult);
            if (!dialog) {
                event.finish();
                return;
            }
            var cards = [];
            for (let i = 0; i < dialog.buttons.length; i++) {
                cards.add(dialog.buttons[i].link);
            }
            dialog.close();
            _status.dieClose.remove(dialog);
            game.addVideo('cardDialog', null, preResult);
            if (cards.length) player.gain(cards, 'gain2');
        },
        ai: {
            order: 1,
            save: true,
            skillTagFilter(player, arg, target) {
                if (player != target) return false;
                return true;
            },
            result: {
                player: 1,
            },
        },
    },
    hokmengjingyingrao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['shaMiss', 'eventNeutralized'],
        },
        usable: 1,
        filter(event, player) {
            return event.type == 'card' && get.tag(event.card, 'damage');
        },
        check(event, player) {
            if (get.tag(event.card, 'norepeat')) return false;
            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
            return event.targets.reduce((p, c) => p + get.effect(c, event.card, player, player), 0) > 0;
        },
        async content(event, trigger, player) {
            await player.loseHp();
            trigger.getParent('useCard').effectCount++;
            trigger.getParent('useCard')._hokmengjingyingrao = true;
            player
                .when('useCardAfter')
                .filter((event) => {
                    return event.card == trigger.card;
                })
                .then(() => {
                    if (
                        game.hasGlobalHistory('everything', (evt) => {
                            if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                                if (evt.parent == trigger) return true;
                            }
                            return false;
                        })
                    ) {
                        player.addTempSkill('hokmengjingyingrao_use');
                        player.markAuto('hokmengjingyingrao_use', [trigger.card.name]);
                    }
                });
        },
        subSkill: {
            use: {
                enable: 'chooseToUse',
                filter(event, player) {
                    if (player.isTempBanned('hokmengjingyingrao_use')) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (!['basic', 'trick'].includes(type)) return false;
                            return (event.hokmengjingyingrao || []).includes(name);
                        })
                        .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
                },
                onChooseToUse(event) {
                    if (!game.online && !event.hokmengjingyingrao) {
                        const player = event.player;
                        const list = [];
                        game.hasGlobalHistory('everything', (evt) => {
                            if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                                if (evt.parent._hokmengjingyingrao) list.add(evt.parent.card.name);
                            }
                        });
                        event.set('hokmengjingyingrao', list);
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = (event.hokmengjingyingrao || []).filter((name) => event.filterCard({ name: name }, player, event));
                        const dialog = ui.create.dialog(get.translation('hokmengjingyingrao'), [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    check(button) {
                        const player = get.player();
                        return evt.filterCard(
                            {
                                name: button.link[2],
                            },
                            player,
                            evt
                        );
                    },
                    backup(links, player) {
                        return {
                            audio: 'hokmengjingyingrao',
                            viewAs: {
                                name: links[0][2],
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            ai1: (card) => 1,
                            async precontent(event, trigger, player) { },
                        };
                    },
                    prompt(links) {
                        return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                hiddenCard(player, name) {
                    if (!lib.inpile.includes(name)) return false;
                    const list = [];
                    game.hasGlobalHistory('everything', (evt) => {
                        if (evt._neutralized || (evt.responded && (!evt.result || !evt.result.bool))) {
                            if (evt.parent._hokmengjingyingrao) list.add(evt.parent.card.name);
                        }
                    });
                    return list.includes(name);
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'use') return false;
                        const name = tag == 'respondSha' ? 'sha' : 'shan';
                        return get.info('hokmengjingyingrao_use').hiddenCard(player, name);
                    },
                    order() {
                        return 3.1;
                    },
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
        },
    },
    hokmengjinghuanyou: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseEnd',
        },
        xushiSkill: true,
        filter(event, player) {
            return game.getGlobalHistory('changeHp', (evt) => {
                return evt.player == player && evt.parent.name == 'loseHp';
            }).length;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.phase('nodelay');
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (
                        game.getGlobalHistory('changeHp', (evt) => {
                            return evt.player == target && evt.parent.name == 'loseHp';
                        }).length
                    )
                        return;
                    if (get.tag(card, 'damage')) {
                        if (player.hasSkillTag('jueqing', false, target)) return [1, 1];
                        return 1.2;
                    }
                    if (get.tag(card, 'loseHp')) {
                        if (target.hp <= 1) return;
                        return [1, 1];
                    }
                },
            },
        },
    },
    hokhuihuangzhiyin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageSource',
        },
        forced: true,
        popup: false,
        filter(event, player, name) {
            if (!event.source?.isIn()) return false;
            if (
                !player.getRoundHistory('useSkill', (evt) => {
                    let skill = get.sourceSkillFor(evt);
                    if (!skill || get.is.locked(skill)) return false;
                    let info = get.info(skill);
                    if (info.charlotte || info.equipSkill) return false;
                    return evt.targets?.length && evt.targets.includes(event.player);
                }).length
            )
                return false;
            return !player.getRoundHistory('useSkill', (evt) => {
                return evt.skill == 'hokhuihuangzhiyin' && evt.targets.includes(event.source);
            }).length;
        },
        async content(event, trigger, player) {
            switch (event.triggername) {
                case 'damageSource':
                    {
                        await trigger.source.recover();
                        await player.draw();
                    }
                    break;
                default: {
                    const targets = trigger.targets
                        .filter((target) => {
                            return !target.hasSkill('hokhuihuangzhiyin_mark');
                        })
                        .sortBySeat(_status.currentPhase || player);
                    for (const target of targets) {
                        target.addTempSkill('hokhuihuangzhiyin_mark', 'roundStart');
                    }
                }
            }
        },
        mod: {
            attackRange: (player, num) => num + game.roundNumber,
            maxHandcard: (player, num) => num + game.roundNumber,
        },
        ai: {
            threaten: 2.6,
        },
        group: 'hokhuihuangzhiyin_effect',
        subSkill: {
            effect: {
                trigger: {
                    player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
                },
                forced: true,
                popup: false,
                filter(event, player, name) {
                    if (['global', 'equip'].includes(event.type)) return false;
                    let skill = get.sourceSkillFor(event);
                    if (!skill || get.is.locked(skill)) return false;
                    let info = get.info(skill);
                    if (info.charlotte || info.equipSkill) return false;
                    if (!event.targets?.length) return false;
                    return event.targets.some((target) => !target.hasSkill('hokhuihuangzhiyin_mark'));
                },
                logTarget(event, player) {
                    return event.targets.filter((target) => !target.hasSkill('hokhuihuangzhiyin_mark'));
                },
                async content(event, trigger, player) {
                    for (const target of event.targets) {
                        target.addTempSkill('hokhuihuangzhiyin_mark', 'roundStart');
                    }
                },
            },
            mark: {
                charlotte: true,
                mark: true,
                intro: {
                    name: '辉煌',
                    name2: '辉煌',
                    markcount: () => 0,
                    content: '已获得<辉煌>标记',
                },
                ai: {
                    effect: {
                        target(card, player, target, current) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            if (!get.tag(card, 'damage') || player.isHealthy()) return;
                            if (
                                !game.hasPlayer((source) => {
                                    return (
                                        source.hasSkill('hokhuihuangzhiyin') &&
                                        !source.getRoundHistory('useSkill', (evt) => {
                                            return evt.skill == 'hokhuihuangzhiyin' && evt.targets.includes(player);
                                        }).length
                                    );
                                })
                            )
                                return;
                            if (player.hasSkill('hokhuihuangzhiyin')) {
                                const num = player.isDamaged() ? 1.6 : 0.7;
                                return [1, 0, 1, num];
                            }
                            return [1, 0, 1, 0.6];
                        },
                    },
                },
            },
        },
    },
    hokzhiling: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        trigger: {
            global: 'roundStart',
        },
        popup: false,
        forced: true,
        zhuanhuanji: true,
        zhuanhuanLimit: 4,
        mark: true,
        marktext: '☯',
        intro: {
            markcount(storage, player) {
                const list = lib.skill.hokzhiling.getList(player);
                const backups = Array.from(lib.skill.hokzhiling.backups).map((order) => `${order[1].description}`);
                return backups[list[0]].slice(0, 2);
            },
            content(storage, player, skill) {
                const list = lib.skill[skill].getList(player);
                const description = ['重铸', '复制', '移动', '销毁'];
                return `轮次开始,你${description[list[0]]}一名角色区域内的一张牌`;
            },
        },
        filter(event, player) {
            if (event.name == 'chooseToUse' && player.isTempBanned('hokzhiling_backup')) return false;
            return Array.from(get.info('hokzhiling').backups)
                .map((info) => info[1])
                .some((backup) =>
                    game.hasPlayer((target) => {
                        return backup.filterTarget(null, player, target);
                    })
                );
        },
        async content(event, trigger, player) {
            const list = get.info('hokzhiling').getList(player);
            if (!player.storage.hokzhiling) player.storage.hokzhiling = list;
            const backups = Array.from(get.info('hokzhiling').backups).map((info) => info[1]);
            const description = backups[list[0]].description;
            game.broadcastAll(
                (backups, list) => {
                    lib.skill.hokzhiling_backup = get.copy(backups[list[0]]);
                    lib.skill.hokzhiling_backup.sourceSkill = 'hokzhiling';
                },
                backups,
                list
            );
            var next = player
                .chooseToUse()
                .set('forced', true)
                .set('audio', 'hokzhiling')
                .set('filterCard', () => false)
                .set('selectCard', -1)
                .set('openskilldialog', `${description}`)
                .set('norestore', true)
                .set('_backupevent', 'hokzhiling_backup')
                .set('custom', {
                    add: {},
                    replace: { window() { } },
                })
                .set('list', list)
                .backup('hokzhiling_backup')
                .set('onresult', (result) => {
                    game.broadcastAll(function (player) {
                        player.$changeZhuanhuanji('hokzhiling');
                    }, player);
                    const list = get.event('list'),
                        index =
                            (player.getAllHistory('useSkill', (evt) => {
                                return evt.skill == 'hokzhiling_backup' && evt.event && evt.event.getParent(2).name == 'hokzhiling';
                            }).length +
                                1) %
                            4;
                    game.broadcastAll(
                        function (player, list, index) {
                            const info = get.info('hokzhiling').getList(player);
                            if (!player.storage.hokzhiling) player.storage.hokzhiling = info;
                            player.storage.hokzhiling[0] = list[index + 1];
                        },
                        player,
                        list,
                        index
                    );
                });
        },
        chooseButton: {
            dialog(event, player) {
                const descriptions = Array.from(lib.skill.hokzhiling.backups);
                event.imglist = [17910, 17920, 17930, 17940];
                event.deslist = descriptions.map((info) => `${info[1].description.slice(3, 5) + `一名角色的牌`}`);
                event.titlelist = descriptions.map((info) => `${info[1].description.slice(0, 2)}`);
                event.desStyle = { fontSize: '22px' };
                const mbdialog = new ui.create.mobileDialog(event, 'hokzhiling');
                mbdialog.area();
                mbdialog.addTip(`你可发动<span style='color: #a4dfd5'>指令</span>,失去1点体力执行一项`);
                return event.dialog;
            },
            filter(button, player) {
                const backups = Array.from(lib.skill.hokzhiling.backups).map((info) => info[1]);
                return game.hasPlayer(function (target) {
                    return backups[button.link].filterTarget(null, player, target);
                });
            },
            check(button) {
                const player = get.player();
                const backups = Array.from(lib.skill.hokzhiling.backups).map((info) => info[1]);
                const targets = game.filterPlayer(function (target) {
                    return backups[button.link].filterTarget(null, player, target);
                });
                switch (button.link) {
                    case 0: {
                        return 1.17 + Math.random();
                    }
                    case 1: {
                        return 1.35 + Math.random();
                    }
                    case 2: {
                        return 1.21 + Math.random();
                    }
                    case 3: {
                        return 1.1 + Math.random();
                    }
                }
                return 1;
            },
            backup(links) {
                const backups = Array.from(lib.skill.hokzhiling.backups).map((info) => info[1]);
                const next = get.copy(backups[links[0]]);
                next.audio = 'hokzhiling';
                next.filterCard = function () {
                    return false;
                };
                next.selectCard = -1;
                return next;
            },
            prompt(links) {
                const descriptions = Array.from(lib.skill.hokzhiling.backups).map((info) => info[1].description);
                return descriptions[links];
            },
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
        backups: new Map([
            [
                'fangshe',
                {
                    forceDie: true,
                    description: '放射:重铸角色区域内的一张牌',
                    filterTarget(card, player, target) {
                        return target.hasCard(function (card) {
                            return target.canRecast(card, player);
                        }, 'hej');
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        if (target.countCards('he') == 1) event.result = { bool: true, cards: target.getCards('hej') };
                        else
                            event.result = await player
                                .choosePlayerCard(target, 'hej', true)
                                .set('prompt', '放射')
                                .set('prompt2', `重铸${get.translation(get.translation(target))}区域内的一张牌`)
                                .set('filterButton', (button) => {
                                    const owner = get.owner(button.link);
                                    return !owner || owner.canRecast(button.link, get.player());
                                })
                                .set('ai', (button) => {
                                    const player = get.player();
                                    const target = get.event().parent.target;
                                    if (get.attitude(player, target) >= 0) return -get.value(button.link);
                                    return get.value(button.link);
                                })
                                .forResult();
                        if (event.result.bool) {
                            const cards = event.result.cards;
                            if (event.getParent(3).name == 'phaseUse') {
                                player.tempBanSkill('hokzhiling_backup', 'phaseUseAfter', false);
                                await player.loseHp();
                            }
                            await target.recast(cards);
                        }
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                let eff = 1.75;
                                if (player.hasSkill('hokhuihuangzhiyin')) {
                                    if (get.attitude(player, target) > 0) eff /= 2;
                                }
                                if (
                                    target.hasCard(function (card) {
                                        return target.getUseValue(card) >= 7.5;
                                    }, 'hej')
                                )
                                    eff += 0.8;
                                if (target.hasSkill('hokhuihuangzhiyin_mark')) eff -= 0.3;
                                return eff * get.sgnAttitude(player, target);
                            },
                        },
                    },
                },
            ],

            [
                'chuangzao',
                {
                    forceDie: true,
                    description: '创造:复制角色区域内的一张牌',
                    filterTarget(card, player, target) {
                        return target.countCards('hej');
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        if (target.countCards('he') == 1) event.result = { bool: true, cards: target.getCards('hej') };
                        else
                            event.result = await player
                                .choosePlayerCard('hej', target, true)
                                .set('prompt', '创造')
                                .set('prompt2', `复制${get.translation(get.translation(target))}区域内的一张牌`)
                                .set('filterButton', (button) => {
                                    return true;
                                })
                                .set('ai', (button) => {
                                    const player = get.player();
                                    const target = get.event().parent.target;
                                    return (get.value(button.link) * player.getUseValue(button.link)) / 2.5;
                                })
                                .forResult();
                        if (event.result.bool) {
                            const cards = event.result.cards;
                            if (event.getParent(3).name == 'phaseUse') {
                                player.tempBanSkill('hokzhiling_backup', 'phaseUseAfter', false);
                                await player.loseHp();
                            }
                            await player.gain(game.createCard2(cards[0]), 'gain2');
                        }
                    },
                    ai: {
                        order: 10,
                        result: {
                            target(player, target) {
                                let eff = 1.75;
                                if (player.hasSkill('hokhuihuangzhiyin')) {
                                    if (get.attitude(player, target) > 0) eff /= 2;
                                }
                                if (
                                    target.hasCard(function (card) {
                                        return target.getUseValue(card) >= 7.5;
                                    }, 'hej')
                                )
                                    eff += 0.8;
                                if (target.hasSkill('hokhuihuangzhiyin_mark')) eff -= 0.3;
                                return eff * get.sgnAttitude(player, target);
                            },
                        },
                    },
                },
            ],

            [
                'qianyue',
                {
                    forceDie: true,
                    description: '迁跃:移动角色区域内的一张牌',
                    filterTarget(card, player, target) {
                        function qianyue(target) {
                            return game.filterPlayer((current) => {
                                if (current == target) return false;
                                var hs = target.getCards('h');
                                if (hs.length) return true;
                                var js = target.getCards('j');
                                for (let i = 0; i < js.length; i++) {
                                    if (current.canAddJudge(js[i])) return true;
                                }
                                if (current.isMin()) return false;
                                var es = target.getCards('e');
                                for (let i = 0; i < es.length; i++) {
                                    if (current.canEquip(es[i])) return true;
                                }
                                return false;
                            });
                        }
                        if (ui.selected.targets.length) {
                            return qianyue(ui.selected.targets[0]).includes(target);
                        }
                        if (!qianyue(target).length) return false;
                        return target.countCards('hej');
                    },
                    selectTarget: 2,
                    complexTarget: true,
                    multitarget: true,
                    targetprompt: ['迁跃起点', '迁跃终点'],
                    async content(event, trigger, player) {
                        const targets = event.targets;
                        if (targets[0].countCards('he') == 1) event.result = { bool: true, cards: targets[0].getCards('hej') };
                        else
                            event.result = await player
                                .choosePlayerCard('hej', targets[0], true)
                                .set('prompt', '迁跃')
                                .set('prompt2', `移动${get.translation(get.translation(targets[0]))}区域内的一张牌`)
                                .set('filterButton', (button) => {
                                    const player = get.player();
                                    const targets = get.event().parent.targets;
                                    switch (get.position(button.link)) {
                                        case 'e':
                                            return targets[1].canEquip(button.link);
                                        case 'j':
                                            return targets[1].canAddJudge(button.link);
                                        default:
                                            return true;
                                    }
                                })
                                .set('ai', (button) => {
                                    const player = get.player();
                                    const targets = get.event().parent.targets;
                                    if (get.attitude(player, targets[0]) > 0 && get.attitude(player, targets[1]) < 0) {
                                        if (get.position(button.link) == 'j') return 12;
                                        if (get.value(button.link, targets[0]) < 0 && get.effect(targets[1], button.link, player, targets[1]) > 0) return 10;
                                        return 0;
                                    } else {
                                        if (get.position(button.link) == 'j') return -10;
                                        if (get.position(button.link) == 'h') return 10;
                                        return get.value(button.link) * get.effect(targets[1], button.link, player, targets[1]);
                                    }
                                })
                                .forResult();
                        if (event.result.bool) {
                            const cards = event.result.cards;
                            if (event.getParent(3).name == 'phaseUse') {
                                player.tempBanSkill('hokzhiling_backup', 'phaseUseAfter', false);
                                await player.loseHp();
                            }
                            switch (get.position(cards[0])) {
                                case 'h':
                                    targets[0].give(cards[0], targets[1]);
                                    break;
                                case 'e':
                                    targets[1].equip(cards[0]);
                                    break;
                                case 'j':
                                    targets[1].addJudge(cards[0]);
                                    break;
                            }
                        }
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                if (ui.selected.targets.length) {
                                    let att = get.attitude(player, target);
                                    let sgnatt = get.sgn(att);
                                    let from = ui.selected.targets[0];
                                    let es = from.getCards('e');
                                    let i;
                                    let att2 = get.sgn(get.attitude(player, from));
                                    for (let i = 0; i < es.length; i++) {
                                        if (sgnatt != 0 && att2 != 0 && sgnatt != att2 && get.sgn(get.value(es[i], from)) == -att2 && get.sgn(get.effect(target, es[i], player, target)) == sgnatt && target.canEquip(es[i])) {
                                            return Math.abs(att);
                                        }
                                    }
                                    if (
                                        i == es.length &&
                                        (!from.countCards('j', function (card) {
                                            return target.canAddJudge(card);
                                        }) ||
                                            att2 <= 0)
                                    ) {
                                        if (from.countCards('h') > 0) return att;
                                        return 0;
                                    }
                                    return att * att2;
                                }
                                if (player.countCards('j')) return player == target ? 6.5 : 0.1;
                                return -1.2 + Math.random();
                            },
                        },
                    },
                },
            ],

            [
                'huimie',
                {
                    forceDie: true,
                    description: '毁灭:销毁角色区域内的一张牌',
                    filterTarget(card, player, target) {
                        return target.countCards('hej');
                    },
                    async content(event, trigger, player) {
                        const target = event.targets[0];
                        if (target.countCards('he') == 1) event.result = { bool: true, cards: target.getCards('hej') };
                        else
                            event.result = await player
                                .choosePlayerCard('hej', target, true)
                                .set('prompt', '毁灭')
                                .set('prompt2', `销毁${get.translation(get.translation(target))}区域内的一张牌`)
                                .set('ai', (button) => {
                                    const player = get.player();
                                    const target = get.event().parent.target;
                                    if (get.attitude(player, target) >= 0) return -get.value(button.link);
                                    return get.value(button.link);
                                })
                                .forResult();
                        if (event.result.bool) {
                            const cards = event.result.cards;
                            if (event.getParent(3).name == 'phaseUse') {
                                player.tempBanSkill('hokzhiling_backup', 'phaseUseAfter', false);
                                await player.loseHp();
                            }
                            await target.lose(cards, ui.special);
                            for (const card of cards) {
                                card.fix();
                                card.remove();
                                card.destroyed = true;
                            }
                            game.log(cards, '被', player, '销毁了');
                        }
                    },
                    ai: {
                        result: {
                            target(player, target) {
                                let eff = 1.75;
                                if (player.hasSkill('hokhuihuangzhiyin')) {
                                    if (get.attitude(player, target) > 0) eff /= 2;
                                }
                                if (
                                    target.hasCard(function (card) {
                                        return target.getUseValue(card) >= 7.5;
                                    }, 'hej')
                                )
                                    eff += 0.8;
                                if (target.hasSkill('hokhuihuangzhiyin_mark')) eff -= 0.3;
                                return eff * get.sgnAttitude(player, target);
                            },
                        },
                    },
                },
            ],
        ]),
        getList(player) {
            if (!player.storage.hokzhiling) return [0, 0, 1, 2, 3];
            return player.storage.hokzhiling;
        },
        init(player, skill) {
            const list = get.info(skill).getList(player);
            player.storage[skill] = list;
        },
        subSkill: {
            backup: {},
        },
    },
    hoklinguawuyou: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageEnd',
        },
        popup: false,
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), function (card, player, target) {
                    return true;
                })
                .set('ai', (target) => {
                    const player = get.player();
                    let att = get.attitude(player, target);
                    if (att > 0) att += 1;
                    if (att == 0) att = Math.random();
                    if (target.hasSkillTag('damage')) att += 2;
                    return att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addSkill('hoklinguawuyou_clear');
            const covenanter = player.storage.hoklinguawuyou;
            const skill = `hoklinguawuyou_${player.playerid}`;
            if (covenanter?.isIn()) covenanter.removeAdditionalSkill(skill);
            player.setStorage('hoklinguawuyou', target);
            target.addAdditionalSkill(skill, 'hoklinguawuyou_effect');
        },
        subSkill: {
            clear: {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const covenanter = player.storage.hoklinguawuyou;
                    return covenanter && covenanter.isIn();
                },
                async content(event, trigger, player) {
                    const covenanter = player.storage.hoklinguawuyou;
                    if (covenanter && covenanter.isIn()) {
                        covenanter.removeAdditionalSkill(`hoklinguawuyou_${player.playerid}`);
                    }
                },
            },
            effect: {
                charlotte: true,
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return !player.hasHistory('sourceDamage');
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                ai: {
                    damageBonus: true,
                    skillTagFilter(player, tag, target) {
                        if (player.hasHistory('sourceDamage')) return false;
                    },
                    effect: {
                        player(card, player, target) {
                            if (player.hasHistory('sourceDamage')) return;
                            if (
                                get.tag(card, 'damage') &&
                                lib.skill.hoklinguawuyou_effect.ai.skillTagFilter(player, 'damageBonus', {
                                    card: card,
                                    target: target,
                                }) &&
                                !target.hasSkillTag('filterDamage', null, {
                                    player: player,
                                    card: card,
                                })
                            )
                                return [1, 0, 2, 0];
                        },
                    },
                },
                mark: true,
                marktext: '临',
                intro: {
                    name: '临卦·无忧',
                    content: '每回合首次造成的伤害+1',
                },
            },
        },
    },
    hokshiguafeiyi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageSource',
        },
        popup: false,
        filter(event, player) {
            return event.source;
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), function (card, player, target) {
                    return true;
                })
                .set('ai', function (target) {
                    const player = get.player();
                    let att = get.attitude(player, target);
                    if (att < 0) att -= 1;
                    if (att == 0) att = Math.random();
                    return -att;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addSkill('hokshiguafeiyi_clear');
            const covenanter = player.storage.hokshiguafeiyi;
            const skill = `hoklinguawuyou_${player.playerid}`;
            if (covenanter?.isIn()) covenanter.removeAdditionalSkill(skill);
            player.setStorage('hokshiguafeiyi', target);
            target.addAdditionalSkill(skill, 'hokshiguafeiyi_effect');
        },
        subSkill: {
            clear: {
                trigger: {
                    player: 'dieBegin',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const covenanter = player.storage.hokshiguafeiyi;
                    return covenanter && covenanter.isIn();
                },
                async content(event, trigger, player) {
                    const covenanter = player.storage.hokshiguafeiyi;
                    if (covenanter?.isIn()) covenanter.removeAdditionalSkill(`hokshiguafeiyi_${player.playerid}`);
                },
            },
            effect: {
                charlotte: true,
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                popup: false,
                filter(event, player) {
                    return (
                        game
                            .getGlobalHistory(
                                'everything',
                                (evt) => {
                                    return evt.name == 'damage' && evt.player == player;
                                },
                                event
                            )
                            .indexOf(event) == 0
                    );
                },
                async content(event, trigger, player) {
                    trigger.num++;
                },
                ai: {
                    neg: true,
                    maixie_attack: true,
                    effect: {
                        target(card, player, target, current) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            if (
                                game.getGlobalHistory('everything', (evt) => {
                                    return evt.name == 'damage' && evt.player == target;
                                }).length
                            )
                                return;
                            if (get.tag(card, 'damage') && current < 0) return 2;
                        },
                    },
                },
                mark: true,
                marktext: '师',
                intro: {
                    name: '师卦·飞翼',
                    content: '每回合首次受到的伤害+1',
                },
            },
        },
    },
    hoktaiguachangsheng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        popup: false,
        xushiSkill: true,
        filter(event, player, name) {
            const covenanters = [player.storage.hoklinguawuyou, player.storage.hokshiguafeiyi];
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            return game.hasPlayer((target) => covenanters.includes(target));
        },
        async cost(event, trigger, player) {
            const { bool, targets } = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    const covenanters = [player.storage.hoklinguawuyou, player.storage.hokshiguafeiyi];
                    return covenanters.includes(target);
                })
                .set('ai', (target) => {
                    const player = get.player();
                    if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
                    if (get.attitude(player, target) > 0) return get.recoverEffect(target, player, player);
                    if (get.attitude(player, target) < 0) return get.effect(target, { name: 'losehp' }, target, target);
                    return 0;
                })
                .forResult();
            if (bool) {
                const target = targets[0];
                const list = ['回复体力', '失去体力'];
                const { bool, num, control } = await player
                    .chooseToQimou([1, player.getHp()])
                    .set('controls', list)
                    .set('targetx', target)
                    .set('prompt', `你可以发动${get.translation(event.name.slice(0, -5))},令${get.translation(target)}回复体力或者失去体力`)
                    .set('processAI', function () {
                        const player = get.player();
                        const target = get.event('targetx');
                        let eff = 'cancel2';
                        let att = get.attitude(player, target);
                        if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) eff = 'cancel2';
                        if (att > 0 && target.isDamaged() && get.recoverEffect(target, player, player) > 0) eff = '回复体力';
                        if (att < 0 && get.effect(target, { name: 'losehp' }, player, player) > 0) eff = '失去体力';
                        let num = player.getHp();
                        if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 2) {
                            return {
                                bool: false,
                                num: 1,
                                control: eff,
                            };
                        }
                        return {
                            bool: true,
                            num: Math.max(1, player.getHp() - 2),
                            control: eff,
                        };
                    })
                    .forResult();
                if (control != 'cancel2') event.result = { bool, cost_data: { target, num, control } };
            }
        },
        async content(event, trigger, player) {
            const target = event.cost_data.target,
                index = event.cost_data.control,
                num = event.cost_data.num;
            player.awakenSkill(event.name);
            await player.loseHp(num);
            await target[index == '回复体力' ? 'recover' : 'loseHp'](num);
            player
                .when({ global: 'damageBegin' })
                .filter((event, player, name) => {
                    return event.source == target || event.player == target;
                })
                .then(() => {
                    player.recover(num);
                })
                .vars({ num: num });
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                popup: false,
                charlotte: true,
                async content(event, trigger, player) {
                    player.recover();
                    player.removeMark(event.name, 1, false);
                    if (!player.countMark(event.name)) player.removeSkill(event.name);
                },
                mark: true,
                marktext: '泰',
                intro: {
                    name: '泰卦·长生',
                    content: `回合结束时,你回复1点体力`,
                },
            },
        },
    },
    hokwanyunluo: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        forced: true,
        filter(event, player, name) {
            const card = get.cardPile('hokzhisan', 'field') || game.createCard2('hokzhisan', 'heart', 6);
            return !player.getEquips('hokzhisan').length && player.canEquip(card, true);
        },
        async content(event, trigger, player) {
            game.broadcastAll(() => lib.inpile.add('hokzhisan'));
            const card = get.cardPile('hokzhisan', 'field') || game.createCard2('hokzhisan', 'heart', 6);
            if (get.owner(card)) get.owner(card).$give(card, player, false);
            else player.$gain2(card, false);
            await game.asyncDelay();
            await player.equip(card);
        },
        group: 'hokwanyunluo_use',
        subSkill: {
            use: {
                enable: 'chooseToUse',
                getList: ['shengdong', 'wuxie', 'zhujinqiyuan'],
                filter(event, player) {
                    if (!player.countCards('hes', { name: 'hokzhisan' })) return false;
                    return get.info('hokwanyunluo_use').getList.some((name) => {
                        return event.filterCard(
                            {
                                name: name,
                            },
                            player,
                            event
                        );
                    });
                },
                chooseButton: {
                    dialog(event, player) {
                        const dialog = ui.create.dialog('晚云落', [get.info('hokwanyunluo_use').getList, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    filter(button, player) {
                        var evt = _status.event.parent;
                        return evt.filterCard(
                            {
                                name: button.link[2],
                            },
                            player,
                            evt
                        );
                    },
                    check(button) {
                        return get.player().getUseValue({
                            name: button.link[2],
                        });
                    },
                    backup(links) {
                        return {
                            viewAs: {
                                name: links[0][2],
                            },
                            filterCard(card) {
                                const player = get.player();
                                return card.name == 'hokzhisan';
                            },
                            check(card) {
                                return 1;
                            },
                            position: 'hes',
                            async precontent(event, trigger, player) {
                                const cards = event.result.cards.slice(0);
                                switch (event.result.card.name) {
                                    case 'shengdong':
                                        await player.lose(cards, ui.cardPile, 'insert');
                                        break;
                                    case 'wuxie':
                                        await player.lose(cards, ui.cardPile).set('insert_index', function (event, card) {
                                            var num = Math.floor(ui.cardPile.childNodes.length / 2);
                                            return ui.cardPile.childNodes[num];
                                        });
                                        game.updateRoundNumber();
                                        break;
                                    case 'zhujinqiyuan':
                                        await player.lose(cards, ui.cardPile, false, 'blank').set('log', false);
                                        break;
                                }
                            },
                        };
                    },
                    prompt(links) {
                        const position = links[0][2] == 'shengdong' ? '顶' : 'wuxie' ? '中' : '底';
                        return `你可以将【纸伞】置于牌堆${position}以视为使用一张` + get.translation(links[0][2]);
                    },
                },
                hiddenCard(player, name) {
                    if (!player.countCards('hes', { name: 'hokzhisan' })) return false;
                    return get.info('hokwanyunluo_use').getList.includes(name);
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (!target.getEquips(1).length || target.hasEmptySlot(1)) return;
                            if (player == target && get.subtype(card) == 'equip1') {
                                if (get.equipValue(card) <= get.equipValue({ name: 'hokzhisan' })) return 0;
                            }
                        },
                    },
                    order(item, player) {
                        const list = get.info('hokwanyunluo_use').getList.map((name) => get.order({ name: name }));
                        return Math.max(...list) + 0.2;
                    },
                    result: {
                        player(player) {
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
        },
    },
    hokshuangyewu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCardToPlayered',
        },
        xushiSkill: true,
        filter(event, player) {
            if (get.type(event.card) != 'trick') return false;
            return event.isFirstTarget && lib.filter.targetEnabled2(event.card, event.player, player);
        },
        check(event, player) {
            if (event.targets?.includes(player)) return false;
            return get.effect(player, event.card, event.player, player) > 0;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = trigger.player;
            const history_hs = game.getGlobalHistory('cardMove', (evt) => evt.player == player && evt.hs?.length);
            const history_hp = game.getGlobalHistory('changeHp', (evt) => evt.player == player);
            if (history_hs.length) history_hs[history_hs.length - 1]._hokshuangyewu = true;
            if (history_hp.length) history_hp[history_hp.length - 1]._hokshuangyewu = true;
            trigger.parent.targets.add(player);
            game.log(player, '成为了', trigger.card, '的额外目标');
            let targets = trigger.targets.slice();
            targets.sortBySeat(_status.currentPhase || target);
            targets.remove(player);
            player
                .when({ global: 'useCardToTargeted' })
                .filter((evt) => targets.length && evt.parent == trigger && evt.targets.length == evt.parent.triggeredTargets4.length)
                .then(() => {
                    trigger.parent.targets = [player].concat(targets);
                    trigger.parent.triggeredTargets4 = [player].concat(targets);
                })
                .vars({ targets: targets });
            player
                .when({ target: ['useCardToAfter', 'useCardToExcluded'] })
                .filter((evt) => evt.parent == trigger.parent)
                .then(() => {
                    const history_hs = game.getGlobalHistory('cardMove', (evt) => evt.player == player && evt.hs?.length);
                    const history_hp = game.getGlobalHistory('changeHp', (evt) => evt.player == player);
                    if (!history_hs.length || !history_hs[history_hs.length - 1]._hokshuangyewu) {
                        const evt = trigger.parent;
                        if (evt.targets.length) evt.excluded.addArray(evt.targets);
                    }
                    if (!history_hp.length || !history_hp[history_hp.length - 1]._hokshuangyewu) {
                        const cards = trigger.cards.filterInD();
                        if (cards.length) player.gain(cards, 'gain2');
                    }
                });
        },
    },
    hokzhisan_skill: {
        equipSkill: true,
        mod: {
            canBeReplaced(card, player) {
                if (player.getVEquips('hokzhisan').includes(card)) return false;
            },
        },
        subSkill: {
            lose: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (get.info('xunshi').isXunshi(event.card)) return false;
                    return (event.card && event.card.name == 'sha') || (get.tag(event.card, 'damage') && get.type(event.card) == 'trick');
                },
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    trigger.effectCount++;
                },
            },
        },
    },
    hokjinghongdiao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkill', 'logSkillBegin', 'useCard', 'respond'],
        },
        usable: 1,
        popup: false,
        rhythmSkill: true,
        $rhythmSkill(skill, player) {
            game.broadcastAll(
                (player, skill) => {
                    const rhythm = player.storage[skill];
                    if (player.marks[skill]) {
                        player.marks[skill].firstChild.innerHTML = rhythm ? '清平' : '破阵';
                    }
                },
                player,
                skill
            );
        },
        filter(event, player, name) {
            if (_status.dying.length) return false;
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || skill == 'hokjinghongdiao') return false;
            let info = get.info(skill);
            if (!info || info.charlotte || info.equipSkill || info.rhythmSkill) return false;
            return event.targets?.length;
        },
        logTarget(event, player) {
            return event.targets;
        },
        prompt2(event, player) {
            return ['当你发动非韵律技时,若无濒死角色,你可以对目标角色造成1点伤害', '当你发动非韵律技时,若无濒死角色,你可以令目标角色回复1点体力'][!player.storage.hokjinghongdiao ? 0 : 1];
        },
        async cost(event, trigger, player) {
            const description = get.info('hokjinghongdiao').prompt2(trigger, player);
            event.result = await player
                .chooseTarget()
                .set('prompt', get.prompt(event.name.slice(0, -5), trigger.targets))
                .set('prompt2', description)
                .set('selectTarget', [1, trigger.targets.length])
                .set('filterTarget', (card, player, target) => {
                    return event.getTrigger().targets.includes(target);
                })
                .set('ai', (target) => {
                    const player = get.player();
                    if (player.storage.hokjinghongdiao) {
                        return get.recoverEffect(target, player, player);
                    }
                    return get.damageEffect(target, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const effect = player.storage[event.name];
            for (const target of event.targets) {
                if (_status.dying.length) break;
                await target[!effect ? 'damage' : 'recover']();
            }
        },
        mark: true,
        marktext: '破阵',
        intro: {
            content(storage, player, skill) {
                return ['当你发动非韵律技时,若无濒死角色,你可以对目标角色造成1点伤害', '当你发动非韵律技时,若无濒死角色,你可以令目标角色回复1点体力'][!storage ? 0 : 1];
            },
        },
        init(player, skill) {
            player.addSkill(`${skill}_zhuanyun`);
            player.addTip(skill, get.translation(skill) + (player.storage[skill] ? '清平' : '破阵'));
        },
        onremove(player, skill) {
            player.removeSkill(`${skill}_zhuanyun`);
            player.removeTip(skill);
        },
        subSkill: {
            zhuanyun: {
                audio: 'hokjinghongdiao',
                trigger: {
                    player: 'useCardAfter',
                },
                firstDo: true,
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (
                        player
                            .getHistory('useCard', (evt) => {
                                return get.tag(evt.card, 'damage') || get.tag(evt.card, 'recover');
                            })
                            .indexOf(event) != 0
                    )
                        return false;
                    return get.tag(event.card, 'damage') || get.tag(event.card, 'recover');
                },
                async content(event, trigger, player) {
                    const skill = 'hokjinghongdiao';
                    player.changeRhythmSkill(skill);
                    player.addTip(skill, get.translation(skill) + (player.storage[skill] ? '清平' : '破阵'));
                },
            },
        },
    },
    hoknichangqu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseZhunbeiBegin',
        },
        popup: false,
        filter(event, player) {
            return game.hasPlayer(function (target) {
                return target.hasCard(function (card) {
                    return lib.filter.cardRecastable(card, target, 'hoknichangqu');
                }, 'h');
            });
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget()
                .set('prompt', get.prompt2(event.name.slice(0, -5)))
                .set('selectTarget', [1, 2])
                .set('filterTarget', (card, player, target) => {
                    return target.hasCard(function (card) {
                        return lib.filter.cardRecastable(card, target, 'hoknichangqu');
                    }, 'h');
                })
                .set('ai', (target) => {
                    const player = get.player(),
                        hasYunLv = player.hasSkill('hokjinghongdiao');
                    let val = get.attitude(player, target) * Math.sqrt(Math.min(3, target.countCards('h', lib.filter.cardRecastable) / 2));
                    if (hasYunLv) {
                        const storage = player.storage.hokjinghongdiao;
                        if (!storage) val += get.damageEffect(target, player, player);
                        else val += get.recoverEffect(target, player, player);
                    }
                    if (
                        target == player &&
                        player.hasCard(function (card) {
                            return lib.filter.cardRecastable(card, target, 'hoknichangqu') && get.value(card) < 7;
                        }, 'h')
                    )
                        val += 3;
                    if (target.countCards('h') == 1 && target.hasCard((card) => get.value(card) >= 6, 'h') && get.attitude(player, target) < 0) val -= 3;
                    return val;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const targets = event.targets;
            let cards = [];
            for (const target of targets) {
                if (
                    !target.hasCard(function (card) {
                        return lib.filter.cardRecastable(card, target, 'hoknichangqu');
                    }, 'h')
                )
                    continue;
                const { bool, links } = await player
                    .choosePlayerCard(target, 'h', true)
                    .set('filterButton', function (button) {
                        let card = button.link,
                            owner = get.owner(card);
                        return !owner || owner.canRecast(card, get.player());
                    })
                    .set('targetx', target)
                    .set('ai', (button) => {
                        const player = get.player(),
                            target = get.event('targetx');
                        let val = get.value(button.link);
                        if (player == target && get.type(button.link) == 'basic') val += 1;
                        if (get.attitude(player, target) >= 0) return -val;
                        return val;
                    })
                    .forResult();
                if (bool) {
                    cards.addArray(links);
                    await target.recast(links);
                }
            }
            if (cards.some((i) => get.type(i) == 'basic')) {
                player.addTempSkill('hoknichangqu_effect');
                player.addMark('hoknichangqu_effect', 1, false);
            }
        },
        subSkill: {
            effect: {
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return get.type(event.card) == 'basic';
                },
                async content(event, trigger, player) {
                    trigger.baseDamage += player.countMark(event.name);
                    player.removeSkill(event.name);
                },
                mark: true,
                intro: {
                    content: '本回合你使用的下一张基本牌的数值+1',
                },
            },
        },
    },
    hokchanghenge: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        filter(event, player) {
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    if (type != 'basic' && type != 'trick') return false;
                    return get.tag({ name: name }, 'damage') || get.tag({ name: name }, 'recover');
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokchanghenge: true } }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        if (type != 'basic' && type != 'trick') return false;
                        return get.tag({ name: name }, 'damage') || get.tag({ name: name }, 'recover');
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokchanghenge: true } }, player, event));
                let dialog = ui.create.dialog('长恨歌', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                var evt = _status.event.parent;
                return evt.filterCard(
                    {
                        name: button.link[2],
                        storage: { hokchanghenge: true },
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
                return {
                    viewAs: {
                        name: links[0][2],
                        storage: { hokchanghenge: true },
                    },
                    filterCard: () => false,
                    selectCard: -1,
                    async precontent(event, trigger, player) {
                        player.awakenSkill('hokchanghenge');
                        const effect = get.tag(event.result.card, 'damage') ? 'damage' : 'recover';
                        for (const target of game.filterPlayer()) {
                            target.addTempSkill(`hokchanghenge_${effect}`);
                        }
                    },
                };
            },
            prompt(links) {
                return '你可以视为使用一张' + get.translation(links[0][2]);
            },
        },
        hiddenCard(player, name) {
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    if (type != 'basic' && type != 'trick') return false;
                    return get.tag({ name: name }, 'damage') || get.tag({ name: name }, 'recover');
                })
                .map((card) => card[2])
                .includes(name);
        },
        mod: {
            targetEnabled(card, player, target) {
                if (player == target && card.storage && card.storage.hokchanghenge) return false;
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
                                return get.tag(card, 'damage') && player.hasValueTarget(card);
                            })
                        )
                            return 0;
                    }
                    return 1;
                },
            },
        },
        subSkill: {
            damage: {
                charlotte: true,
                mod: {
                    cardEnabled(card, player, target) {
                        if (get.itemtype(card) == 'card' && get.tag(card, 'damage')) return false;
                    },
                    cardSavable(card, player, target) {
                        if (get.itemtype(card) == 'card' && get.tag(card, 'damage')) return false;
                    },
                },
            },
            recover: {
                charlotte: true,
                mod: {
                    cardEnabled(card, player, target) {
                        if (get.itemtype(card) == 'card' && get.tag(card, 'damage')) return false;
                    },
                    cardSavable(card, player, target) {
                        if (get.itemtype(card) == 'card' && get.tag(card, 'damage')) return false;
                    },
                },
            },
        },
    },
    hokxingyiliuhe: {
        derivation: ['hokchongquanshi', 'hokqishoushi', 'hokhuxiaoshi', 'hokhuyueshi'],
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardAfter',
        },
        filter(event, player) {
            if (player.hasHistory('sourceDamage', (evt) => evt.card == event.card)) return false;
            return get.type(event.card) == (player.storage.hokxingyiliuhe ? 'basic' : 'trick');
        },
        async content(event, trigger, player) {
            player.changeZhuanhuanji(event.name);
            const card = get.cardPile(function (card) {
                return get.type(card) == get.type(trigger.card);
            });
            if (card) player.gain(card, 'gain2', 'log');
            player.addAdditionalSkills(event.name, lib.skill[event.name].derivation.slice(0).splice(player.storage[event.name] ? -2 : 0, 2));
        },
        init(player, skill) {
            if (!player.storage[skill]) player.storage[skill] = false;
            player.addAdditionalSkills(skill, lib.skill[skill].derivation.slice(0).splice(player.storage[skill] ? -2 : 0, 2));
        },
        onremove(player, skill) {
            player.removeAdditionalSkills(skill);
        },
        mark: true,
        marktext: '☯',
        zhuanhuanji: true,
        intro: {
            content(storage, player, skill) {
                if (!storage) return '人:当你使用基本牌结算后,若此牌未造成伤害,你可以获得一张相同类型的牌.;你视为拥有<冲拳式>和<气守式>';
                return '虎:当你使用锦囊牌结算后,若此牌未造成伤害,你可以获得一张相同类型的牌.;你视为拥有<虎啸式>和<虎跃式>';
            },
        },
    },
    hokchongquanshi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (!player.countCards('h', { type: 'trick' })) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'basic' && get.tag({ name: name }, 'damage');
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokchongquanshi: true } }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return type == 'basic' && get.tag({ name: name }, 'damage');
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokchongquanshi: true } }, player, event));
                return ui.create.dialog('冲拳式', [list, 'vcard']);
            },
            check(button) {
                if (button.link[2] == 'jiu') return 0;
                return _status.event.player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                let next = {
                    filterCard(card, player) {
                        return get.type(card) == 'trick';
                    },
                    check(card) {
                        return 1 / (get.value(card) || 0.5);
                    },
                    ignoreMod: true,
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('hokqishoushi', false, false);
                    },
                };
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
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
                return '将一张锦囊牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            const type = get.type(name);
            return type == 'basic' && player.countCards('h', { type: 'trick' }) > 0;
        },
        mod: {
            targetEnabled(card, player, target) {
                if (player == target && card.storage && card.storage.hokchongquanshi) return false;
            },
        },
        ai: {
            fireAttack: true,
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (arg == 'respond') return false;
                if (!player.countCards('h', { type: 'trick' })) return false;
            },
            order: 3,
            result: {
                player(player) {
                    if (_status.event.dying) return get.attitude(player, _status.event.dying);
                    return 1;
                },
            },
        },
    },
    hokqishoushi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            if (!event.targets || !event.targets.length) return false;
            return get.type(event.card) == 'basic';
        },
        async content(event, trigger, player) {
            const cards = [];
            const { result } = await player
                .chooseTarget(get.prompt2(event.name), [1, 2], function (card, player, target) {
                    return target.countDiscardableCards(player, 'h');
                })
                .set('ai', function (target) {
                    const player = get.player();
                    if (!ui.selected.targets.length) return 1;
                    return -get.attitude(player, target);
                });
            if (result.bool) {
                const targets = result.targets.sortBySeat(player);
                player.tempBanSkill(event.name, false, false);
                for (const target of targets) {
                    const { result } = await player.discardPlayerCard(target, 'h', true);
                    if (result) cards.addArray(result.cards);
                }
                if (cards.some((card) => get.type2(card) == 'trick')) trigger.excluded.addArray(trigger.targets);
            }
        },
    },
    hokhuxiaoshi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (!player.countCards('h', { type: 'basic' })) return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return type == 'trick' && get.tag({ name: name }, 'damage');
                })
                .some((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokhuxiaoshi: true } }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return type == 'trick' && get.tag({ name: name }, 'damage');
                    })
                    .filter((card) => event.filterCard({ name: card[2], nature: card[3], storage: { hokhuxiaoshi: true } }, player, event));
                return ui.create.dialog('虎啸式', [list, 'vcard']);
            },
            check(button) {
                if (button.link[2] == 'jiu') return 0;
                return _status.event.player.getUseValue({
                    name: button.link[2],
                    nature: button.link[3],
                });
            },
            backup(links, player) {
                let next = {
                    filterCard(card, player) {
                        return get.type(card) == 'basic';
                    },
                    check(card) {
                        return 1 / (get.value(card) || 0.5);
                    },
                    ignoreMod: true,
                    async precontent(event, trigger, player) {
                        player.tempBanSkill('hokhuxiaoshi', false, false);
                    },
                };
                const viewAs = {
                    name: links[0][2],
                    nature: links[0][3],
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
                return '将一张基本牌当做' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]) + '使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            const type = get.type(name);
            return type == 'trick' && player.countCards('h', { type: 'basic' }) > 0;
        },
        mod: {
            targetEnabled(card, player, target) {
                if (player == target && card.storage && card.storage.hokhuxiaoshi) return false;
            },
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
    },
    hokhuyueshi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            if (!event.targets || !event.targets.length) return false;
            return get.type(event.card) == 'trick';
        },
        async content(event, trigger, player) {
            const cards = [];
            const { result } = await player
                .chooseTarget(get.prompt2(event.name), [1, 2], function (card, player, target) {
                    return target.countDiscardableCards(player, 'h');
                })
                .set('ai', function (target) {
                    const player = get.player();
                    if (!ui.selected.targets.length) return 1;
                    return -get.attitude(player, target);
                });
            if (result.bool) {
                const targets = result.targets.sortBySeat(player);
                player.tempBanSkill(event.name, false, false);
                for (const target of targets) {
                    const { result } = await player.discardPlayerCard(target, true);
                    if (result) cards.addArray(result.cards);
                }
                if (cards.some((card) => get.type2(card) == 'trick')) trigger.excluded.addArray(trigger.targets);
            }
        },
    },
    hokqihe: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['damageBegin4', 'loseHpBegin'],
        },
        forced: true,
        xushiSkill: true,
        filter(event, player) {
            return event.num >= player.getHp();
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.draw(trigger.num);
            trigger.cancel();
        },
        mark: true,
        intro: {
            content: '入神·脱先',
        },
    },
    hokfeigong: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        initSkill(player) {
            let skillName;
            do {
                skillName = 'hokfeigong_' + Math.random().toString(36).slice(-8);
            } while (lib.skill[skillName] != null);
            game.broadcastAll(function (skillName) {
                if (!lib.skill[skillName]) {
                    lib.skill[skillName] = {
                        charlotte: true,
                        enable: 'phaseUse',
                        usable: 1,
                        filter(event, player) {
                            return player.countCards('he', (card) => get.info('hokfeigong').filterCard(card, player)) > 1;
                        },
                        filterCard: (card, player = get.owner(card), source, strict) => {
                            if (!player) {
                                if (player === null) console.trace(`cardRecastable的player参数不应传入null,可以用void 0或undefined占位`);
                                player = get.owner(card);
                            }
                            const mod = game.checkMod(card, player, source, 'unchanged', 'cardRecastable', player);
                            if (!mod) return false;
                            if (strict && mod == 'unchanged') {
                                if (get.position(card) != 'h') return false;
                                const info = get.info(card),
                                    recastable = info.recastable || info.chongzhu;
                                return Boolean(typeof recastable == 'function' ? recastable(_status.event, player) : recastable);
                            }
                            return true;
                        },
                        check(card) {
                            let num = 6.5;
                            if (ui.selected.cards.length) {
                                const cardx = ui.selected.cards[0];
                                num = cardx.number;
                            }
                            const del = Math.abs(card.number - num);
                            return 5 + del / 5 - get.value(card);
                        },
                        selectCard: 2,
                        position: 'he',
                        complexCard: true,
                        discard: false,
                        lose: false,
                        delay: false,
                        async content(event, trigger, player) {
                            player.recast(event.cards);
                            player.removeSkill(event.name);
                        },
                        ai: {
                            order: 1,
                            result: {
                                player: 1,
                            },
                        },
                    };
                    lib.translate[skillName] = '飞攻';
                    lib.translate[skillName + '_info'] = '出牌阶段限一次,你可以重铸两张牌';
                }
            }, skillName);
            player.getHistory('custom').push({ hokfeigong: true });
            player.addSkill(skillName);
        },
        init(player, skill) {
            game.broadcastAll(
                function (skillName, player) {
                    lib.translate[skillName] = `飞攻${player.getAllHistory('custom', (evt) => evt.hokfeigong).length + 1}级`;
                },
                skill,
                player
            );
        },
        mark: true,
        intro: {
            markcount(storage, player) {
                return `${player.getAllHistory('custom', (evt) => evt.hokfeigong).length + 1}级`;
            },
            content(storage, player, skill) {
                return `飞攻${player.getAllHistory('custom', (evt) => evt.hokfeigong).length + 1}级`;
            },
        },
        filter(event, player) {
            return player.countCards('he', (card) => get.info('hokfeigong').filterCard(card, player)) > 1;
        },
        filterCard: (card, player = get.owner(card), source, strict) => {
            if (!player) {
                if (player === null) console.trace(`cardRecastable的player参数不应传入null,可以用void 0或undefined占位`);
                player = get.owner(card);
            }
            const mod = game.checkMod(card, player, source, 'unchanged', 'cardRecastable', player);
            if (!mod) return false;
            if (strict && mod == 'unchanged') {
                if (get.position(card) != 'h') return false;
                const info = get.info(card),
                    recastable = info.recastable || info.chongzhu;
                return Boolean(typeof recastable == 'function' ? recastable(_status.event, player) : recastable);
            }
            return true;
        },
        check(card) {
            let num = 6.5;
            if (ui.selected.cards.length) {
                const cardx = ui.selected.cards[0];
                num = cardx.number;
            }
            const del = Math.abs(card.number - num);
            return 5 + del / 5 - get.value(card);
        },
        selectCard: 2,
        position: 'he',
        complexCard: true,
        discard: false,
        lose: false,
        delay: false,
        async content(event, trigger, player) {
            const cards = event.cards;
            player.recast(cards);
            if (!player.hasAllHistory('custom', (evt) => evt.hokfeigong)) return;
            const numbers = cards.map((c) => c.number).sort((a, b) => a - b);
            player.storage.hokfeigong_effect = numbers;
            player.addTempSkill('hokfeigong_effect');
        },
        ai: {
            order: 1,
            result: {
                player: 1,
            },
        },
        subSkill: {
            effect: {
                audio: 'hokfeigong',
                trigger: {
                    player: 'useCard',
                },
                forced: true,
                charlotte: true,
                filter(event, player) {
                    if (player.getAllHistory('custom', (evt) => evt.hokfeigong).length < 3) return false;
                    if (typeof event.card.number != 'number') return false;
                    return player.getStorage('hokfeigong_effect').some((eff) => event.card.number == eff);
                },
                async content(event, trigger, player) {
                    player.draw();
                },
                mod: {
                    cardUsable(card, player) {
                        if (player.getAllHistory('custom', (evt) => evt.hokfeigong).length < 1) return;
                        var num = card.number,
                            nums = player.storage.hokfeigong_effect;
                        if (typeof num == 'number' && (nums[0] > num || num > nums[1])) return Infinity;
                    },
                    targetInRange(card, player) {
                        if (player.getAllHistory('custom', (evt) => evt.hokfeigong).length < 2) return;
                        var num = card.number,
                            nums = player.storage.hokfeigong_effect;
                        if (typeof num == 'number' && nums[0] <= num <= nums[1]) return true;
                    },
                    aiOrder(player, card, num) {
                        if (player.getAllHistory('custom', (evt) => evt.hokfeigong).length < 3) return;
                        var num = card.number,
                            nums = player.storage.hokfeigong_effect;
                        if (typeof num == 'number' && (nums[0] > num || num > nums[1])) return num + 5;
                    },
                },
                mark: true,
                intro: {
                    markcount(storage, player) {
                        return storage[0] + '/' + storage[1];
                    },
                },
            },
        },
    },
    hokzhenshen: {
        derivation: 'clanmingjie',
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filterTarget(card, player, target) {
            return !target.hasSkill('clanmingjie_' + player.playerid);
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.addSkill('clanmingjie_effect');
            const skill = 'clanmingjie_' + player.playerid;
            game.broadcastAll(lib.skill.clanmingjie.initSkill, skill);
            target.addTempSkill(skill, { player: 'phaseAfter' });
            target.setStorage(skill, player);
        },
        init(player) {
            player.addSkill('clanmingjie_record');
        },
        onremove(player) {
            player.removeSkill('clanmingjie_record');
        }, //QQQ
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    if (
                        !player.hasCard((card) => {
                            var info = get.info(card);
                            if (info.allowMultiple == false) return false;
                            if (!lib.filter.targetEnabled2(card, player, target)) return false;
                            return game.hasPlayer((current) => {
                                return player.canUse(card, current) && get.effect(current, card, player, player) > 0 && current != target && get.effect(target, card, player, player) > 0;
                            });
                        }, 'hs')
                    )
                        return 0;
                    return get.sgnAttitude(player, target);
                },
            },
        },
        group: ['hokzhenshen_feigong'],
        subSkill: {
            feigong: {
                trigger: {
                    player: ['useCard', 'respond'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return typeof event.card.number == 'number';
                },
                async content(event, trigger, player) {
                    player.markSkill('hokzhenshen_feigong');
                    const usecard_num = player
                        .getAllHistory('useCard', (evt) => typeof evt.card.number == 'number')
                        .map((evt) => evt.card.number)
                        .reduce((p, c) => p + c, 0);
                    const respond_num = player
                        .getAllHistory('respond', (evt) => typeof evt.card.number == 'number')
                        .map((evt) => evt.card.number)
                        .reduce((p, c) => p + c, 0);
                    const all_num = usecard_num + respond_num;
                    const leval_num = player.getAllHistory('custom', (evt) => evt.hokfeigong).length;
                    if ((leval_num == 0 && all_num >= 50) || (leval_num == 1 && all_num >= 100) || (leval_num == 2 && all_num >= 181)) {
                        game.trySkillAudio('hokfeigong', player);
                        lib.skill.hokfeigong.initSkill(player);
                        if (player == game.me) lib.skill.hokfeigong.init(player, 'hokfeigong');
                        game.log(player, '升级了', '#g【飞攻】');
                    }
                },
                mark: true,
                intro: {
                    markcount(storage, player) {
                        const usecard_num = player
                            .getAllHistory('useCard', (evt) => typeof evt.card.number == 'number')
                            .map((evt) => evt.card.number)
                            .reduce((p, c) => p + c, 0);
                        const respond_num = player
                            .getAllHistory('respond', (evt) => typeof evt.card.number == 'number')
                            .map((evt) => evt.card.number)
                            .reduce((p, c) => p + c, 0);
                        const all_num = usecard_num + respond_num;
                        return all_num > 181 ? 181 : all_num;
                    },
                    content(storage, player, skill) {
                        return `飞攻${player.getAllHistory('custom', (evt) => evt.hokfeigong).length + 1}级`;
                    },
                },
            },
        },
    },
    hokwuweizhanche: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageEnd',
        },
        popup: false,
        filter(event, player) {
            return event.source?.isIn() && player.canUse({ name: 'juedou' }, event.source);
        },
        async cost(event, trigger, player) {
            const result = await player
                .chooseToUse()
                .set('openskilldialog', `${get.prompt('hokwuweizhanche')}失去1点体力视为对${get.translation(trigger.source)}使用【决斗】`)
                .set('norestore', true)
                .set('_backupevent', 'hokwuweizhanche_backup')
                .set('custom', {
                    add: {},
                    replace: { window() { } },
                })
                .backup('hokwuweizhanche_backup')
                .set('target', trigger.source)
                .set('ai2', (target) => {
                    const player = get.player();
                    if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return 0;
                    return get.effect(target, { name: 'juedou' }, player, player);
                })
                .set('nouse', true)
                .forResult();
            event.result = { bool: result.bool, cost_data: { result } };
        },
        async content(event, trigger, player) {
            const {
                cost_data: { result },
            } = event;
            await player.useResult(result, event);
        },
        subSkill: {
            backup: {
                viewAs: {
                    name: 'juedou',
                },
                filterCard: () => false,
                selectCard: -1,
                filterTarget(card, player, target) {
                    return target == get.event('target');
                },
                async precontent(event, trigger, player) {
                    const target = event.result.targets[0];
                    player.tempBanSkill('hokwuweizhanche', 'roundStart', false);
                    player.loseHp();
                    player
                        .when('useCardAfter')
                        .filter((event, player) => event.skill == 'hokwuweizhanche_backup')
                        .then(() => {
                            if (player.hasHistory('sourceDamage', (evt) => evt.card == trigger.card)) player.recover();
                            else player.drawTo(target.countCards('h'));
                        })
                        .vars({ target: target });
                },
            },
        },
    },
    hoklichangyazhi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            target: 'useCardToTargeted',
        },
        xushiSkill: true,
        filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            return event.player != player && player.canCompare(event.player);
        },
        check(event, player) {
            if (get.attitude(player, event.player) >= 0) return false;
            var hs = player.getCards('h');
            if (hs.length < event.player.countCards('h')) return false;
            for (let i = 0; i < hs.length; i++) {
                var val = get.value(hs[0]);
                if (hs[i].number >= 10 && val <= 6) return true;
                if (hs[i].number >= 8 && val <= 3) return true;
            }
            return false;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const { bool } = await player
                .chooseToCompare(trigger.player)
                .set('small', () => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    return player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) > 1 && get.effect(player, trigger.card, trigger.player, player) <= 0;
                })
                .forResult();
            if (bool) {
                await player.draw();
                trigger.parent.excluded.push(player);
            } else {
                await player.loseHp();
                if (trigger.cards.filterInD().length) player.gain(trigger.cards.filterInD(), 'gain2');
            }
        },
        ai: {
            effect: {
                target(card, player, target) {
                    if (!get.tag(card, 'damage')) return;
                    if (target.isTempBanned('hoklichangyazhi')) return;
                    if (!target.canCompare(player)) return;
                    return 0.85;
                },
            },
        },
    },
    hokjixiepucong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'dieAfter',
        },
        forced: true,
        filter(event, player) {
            if (get.nameList(event.player).some((name) => name.startsWith('shibing'))) return false;
            return event.player != player;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            game.broadcastAll(
                (trigger, player) => {
                    if (!lib.character['shibing1']) {
                        lib.character['shibing1'] = ['male', 'qun', 3, [], []];
                        lib.translate['shibing1'] = '士兵';
                    }
                    if (!lib.character['shibing2']) {
                        lib.character['shibing2'] = ['female', 'qun', 3, [], []];
                        lib.translate['shibing2'] = '士兵';
                    }
                },
                trigger,
                player
            );
            await trigger.player.init(trigger.player.hasSex('male') ? 'shibing1' : 'shibing2');
            await trigger.player.revive(trigger.player.maxHp);
        },
        group: 'hokjixiepucong_use',
        subSkill: {
            use: {
                audio: 'hokjixiepucong',
                enable: 'phaseUse',
                filter(event, player) {
                    return game.hasPlayer((i) => get.nameList(i).some((name) => ['shibing1', 'shibing2'].includes(name)));
                },
                filterTarget(card, player, target) {
                    if (!ui.selected.targets.length) {
                        return get.nameList(target).some((name) => ['shibing1', 'shibing2'].includes(name));
                    }
                    return true;
                },
                selectTarget: 2,
                complexTarget: true,
                multitarget: true,
                prompt: '出牌阶段,你可以令一名士兵死亡并对另一名角色造成1点伤害',
                async content(event, trigger, player) {
                    await event.targets[0].die();
                    await event.targets[1].damage();
                },
                ai: {
                    order: 1,
                    damage: true,
                    result: {
                        target(player, target) {
                            if (!ui.selected.targets.length) return -2;
                            return get.damageEffect(target, player, target);
                        },
                    },
                },
            },
        },
    },
    hokqiangzhiruqin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
        },
        popup: false,
        filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            if (!event.targets || event.targets.length != 1) return false;
            return game.hasPlayer(function (current) {
                return !event.targets.includes(current) && current != event.target && lib.filter.targetEnabled2(event.card, player, current) && lib.filter.targetInRange(event.card, player, current);
            });
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget()
                .set('prompt', get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', function (card, player, target) {
                    const trigger = _status.event.getTrigger();
                    if (get.distance(player, target, 'pure') > 1) return false;
                    return !trigger.targets.includes(target) && target != trigger.target && lib.filter.targetEnabled2(trigger.card, player, target) && lib.filter.targetInRange(trigger.card, player, target);
                })
                .set('selectTarget', [1, 2])
                .set('ai', (target) => {
                    const player = get.player(),
                        trigger = get.event().getTrigger();
                    return get.effect(target, trigger.card, player, player) + 0.01;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const targets = event.targets;
            player.tempBanSkill(event.name, false, false);
            if (!event.isMine() && !event.isOnline()) await game.asyncDelay();
            game.log(targets, '成为了', trigger.card, '的额外目标');
            trigger.parent.targets.addArray(targets);
        },
    },
    hokhaojiecichang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        xushiSkill: true,
        filterTarget(card, player, target) {
            return target != player;
        },
        getTargets(player) {
            return game.filterPlayer(function (target) {
                if (target == player) return false;
                return player.getAllHistory('useSkill', (evt) => {
                    let skill = evt.skill;
                    let info = get.info(skill);
                    while (true) {
                        if (!info || info.charlotte || info.equipSkill) return false;
                        if (info && !info.sourceSkill) break;
                        skill = info.sourceSkill;
                        info = get.info(skill);
                    }
                    return skill && evt.targets && evt.targets.includes(target);
                }).length;
            });
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addTempSkill('hokhaojiecichang_effect');
            player.markAuto('hokhaojiecichang_effect', [event.target]);
        },
        init(player) {
            player.addSkill('hokhaojiecichang_mark');
        },
        onremove(player, skill) {
            player.removeSkill('hokhaojiecichang_mark');
        },
        ai: {
            order: 12,
            result: {
                target(player, target) {
                    const targetxs = get.info('hokhaojiecichang').getTargets(player);
                    if (!targetxs.length) return 0;
                    let eff = player
                        .getCards('hs', function (card) {
                            if (!player.hasValueTarget(card)) return false;
                            return (
                                player.canUse(card, target) &&
                                targetxs.some((targetx) => {
                                    return targetx.canUse(card, target);
                                })
                            );
                        })
                        .reduce((p, c) => p + get.effect(target, c, player, player), 0);
                    return -eff * 0.1;
                },
            },
        },
        subSkill: {
            mark: {
                trigger: {
                    player: ['useSkill', 'logSkillBegin', 'useCard', 'respond'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player, name) {
                    if (['global', 'equip'].includes(event.type)) return false;
                    let skill = event.sourceSkill || event.skill;
                    if (!skill) return false;
                    if (!event.targets || !event.targets.length) return false;
                    if (event.targets.every((target) => player.getStorage('hokhaojiecichang_mark').includes(target))) return false;
                    let info = get.info(skill);
                    while (true) {
                        if (!info || info.charlotte || info.equipSkill) return false;
                        if (info && !info.sourceSkill) break;
                        skill = info.sourceSkill;
                        info = get.info(skill);
                    }
                    return player.getStockSkills(true, true).includes(skill);
                },
                async content(event, trigger, player) {
                    player.markAuto(event.name, trigger.targets);
                },
                marktext: '傀',
                intro: {
                    name: '傀',
                    markcount: () => 0,
                    mark(dialog, storage, player) {
                        return dialog.addAuto(storage);
                    },
                },
            },
            effect: {
                audio: 'hokhaojiecichang',
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const targets = player.getStorage('hokhaojiecichang_effect');
                    const players = get.info('hokhaojiecichang').getTargets(player);
                    if (!players.length || !get.is.jishi(event.card)) return false;
                    return (
                        event.targets.length &&
                        event.targets.some((target) => {
                            return targets.includes(target);
                        })
                    );
                },
                async content(event, trigger, player) {
                    const puppets = get.info('hokhaojiecichang').getTargets(player).sortBySeat(player);
                    const targets = game.filterPlayer((target) => {
                        if (!trigger.targets.includes(target)) return false;
                        return player.getStorage('hokhaojiecichang_effect').includes(target);
                    });
                    const card = {
                        name: trigger.card.name,
                        nature: trigger.card.nature,
                    };
                    for (const target of targets) {
                        for (const puppet of puppets) {
                            if (puppet.canUse(card, target, false, false)) await puppet.useCard(card, target, false);
                            await game.asyncDelay();
                        }
                    }
                },
            },
        },
    },
    hokmishucaokong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'roundStart',
        },
        popup: false,
        filterx(event, player, target) {
            if (
                !game.hasPlayer((i) => {
                    return i != player && !player.getStorage('hokmishucaokong').includes(i);
                })
            )
                return target != player;
            return target != player && !player.getStorage('hokmishucaokong').includes(target);
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('filterTarget', (card, player, target) => {
                    return get.info('hokmishucaokong').filterx(event, player, target);
                })
                .set('ai', (target) => {
                    return 1 + Math.random();
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await Promise.all(event.next);
            const next = game.createEvent('hokmishucaokong_puppet');
            next.player = player;
            next.targets = event.targets;
            next.setContent(get.info('hokmishucaokong_use').content);
        },
        group: 'hokmishucaokong_use',
        subSkill: {
            use: {
                enable: 'phaseUse',
                usable: 1,
                filterTarget(card, player, target) {
                    return get.info('hokmishucaokong').filterx(null, player, target);
                },
                prompt: `出牌阶段限一次,你可以指定一名其他角色,本轮你:1.视为拥有其武将牌上的技能,且性别和势力视为与其相同;2.视为拥有其装备区内的装备牌技能和效果.你不能再以此法指定其为目标直至你指定所有其他角色后.`,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.markAuto('hokmishucaokong', event.targets);
                    if (
                        !game.hasPlayer((i) => {
                            return i != player && !player.getStorage('hokmishucaokong').includes(i);
                        })
                    ) {
                        delete player.storage.hokmishucaokong;
                    }
                    game.broadcastAll(
                        (player, target) => {
                            player.smoothAvatar(false);
                            player.node.avatar.setBackground(target.name1, 'character');
                            if (player == game.me && ui.fakeme) {
                                ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                            }
                        },
                        player,
                        target
                    );
                    const skills = target.getSkills(null, false, false).filter(function (skill) {
                        let info = get.info(skill);
                        return info && !info.charlotte && lib.translate[skill + '_info'];
                    });
                    if (skills.length) await player.addAdditionalSkills('hokmishucaokong', skills);
                    game.broadcastAll(
                        function (player, target) {
                            player.tempname.add(target.name1);
                            player.sex = target.sex;
                        },
                        player,
                        target
                    );
                    game.log(player, '将性别变为了', '#y' + get.translation(target.sex) + '性');
                    await player.changeGroup(target.group);
                    const cards = target.getVCards('e');
                    if (cards.length) {
                        player.setStorage('hokmishucaokong_puppet', cards);
                        const skills = cards
                            .filter((card) => {
                                if (get.type(card) != 'equip') return false;
                                return get.info(card) && get.info(card).skills;
                            })
                            .map((card) => get.info(card).skills)
                            .flat();
                        if (skills.length) {
                            player.addAdditionalSkill('hokmishucaokong_puppet', skills);
                        }
                    }
                    player.addTempSkill('hokmishucaokong_restore', 'roundStart');
                    player
                        .when('dieBegin')
                        .then(() => {
                            get.info('hokmishucaokong_restore').onremove(player);
                        })
                        .finish();
                },
                ai: {
                    order: 1,
                    result: {
                        target(player, target) {
                            return -get.sgnAttitude(player, target);
                        },
                    },
                },
            },
            effect: {
                charlotte: true,
                mod: {
                    attackFrom(from, to, distance) {
                        let cards = from.getStorage('hokmishucaokong_effect');
                        if (!cards.length) return;
                        const num = cards
                            .filter((card) => {
                                return get.info(card) && get.info(card).distance && get.info(card).distance.attackFrom;
                            })
                            .reduce((p, c) => p + get.info(c).distance.attackFrom, 0);
                        return distance + num;
                    },
                    globalTo(from, to, distance) {
                        const cards = to.getStorage('hokmishucaokong_effect');
                        if (!cards.length) return;
                        const num = cards
                            .filter((card) => {
                                return get.info(card) && get.info(card).distance && get.info(card).distance.globalTo;
                            })
                            .reduce((p, c) => p + get.info(c).distance.globalTo, 0);
                        return distance + num;
                    },
                    globalFrom(from, to, distance) {
                        const cards = from.getStorage('hokmishucaokong_effect');
                        if (!cards.length) return;
                        const num = cards
                            .filter((card) => {
                                return get.info(card) && get.info(card).distance && get.info(card).distance.globalFrom;
                            })
                            .reduce((p, c) => p + get.info(c).distance.globalFrom, 0);
                        return distance + num;
                    },
                },
            },
            restore: {
                charlotte: true,
                onremove(player) {
                    const next = game.createEvent('hokmishucaokong_onremove');
                    next.player = player;
                    next.setContent(async (event, trigger, player) => {
                        const name = player.name1;
                        if (name) {
                            const sex = get.character(name, 0);
                            const group = get.character(name, 1);
                            game.broadcastAll(
                                (player, sex) => {
                                    player.smoothAvatar(false);
                                    player.node.avatar.setBackground(player.name1, 'character');
                                    if (player == game.me && ui.fakeme) {
                                        ui.fakeme.style.backgroundImage = player.node.avatar.style.backgroundImage;
                                    }
                                    if (player.sex != sex) {
                                        player.sex = sex;
                                        game.log(player, '将性别变为了', '#y' + get.translation(sex) + '性');
                                    }
                                },
                                player,
                                sex
                            );
                            if (player.group != group) player.changeGroup(group);
                        }
                        player.removeAdditionalSkills('hokmishucaokong');
                        player.removeAdditionalSkill('hokmishucaokong_effect');
                    });
                },
            },
        },
    },
    hokpifengzhanlang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokjingtaohailang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokchangfanpolang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hoksishenjianglin: {
        derivation: 'rewansha',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        trigger: {
            global: ['useSkillAfter', 'logSkill'],
        },
        forced: true,
        filter(event, player) {
            switch (event.name) {
                case 'chooseToUse': {
                    if (!player.countCards('h')) return false;
                    if (!player.hasSkill('hoksishenjianglin_effect')) return false;
                    if (!event.hoksishenjianglin || !event.hoksishenjianglin.length) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            if (!get.is.jishi({ name: name })) return false;
                            return event.hoksishenjianglin.includes(name);
                        })
                        .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
                }
                default: {
                    if (
                        !event.player.hasCard(function (card) {
                            return !get.is.shownCard(card);
                        }, 'h')
                    )
                        return false;
                    if (['global', 'equip'].includes(event.type)) return false;
                    let skill = event.sourceSkill || event.skill;
                    if (!skill || skill === 'hoksishenjianglin') return false;
                    let info = get.info(skill);
                    while (true) {
                        if (!info || info.charlotte) return false;
                        if (info && !info.sourceSkill) break;
                        skill = info.sourceSkill;
                        info = get.info(skill);
                    }
                    return true;
                }
            }
        },
        async content(event, trigger, player) {
            const { bool, cards } = await player
                .choosePlayerCard(trigger.player, [1, 2], 'h')
                .set('filterButton', (button) => {
                    return !get.is.shownCard(button.link);
                })
                .set('ai', (button) => {
                    const player = get.player();
                    return player.getUseValue(button.link);
                })
                .forResult();
            if (bool) {
                trigger.player.addShownCards(cards, 'visible_Explicit');
                player.addTempSkills('rewansha');
                player.addTempSkill('hoksishenjianglin_effect');
            }
        },
        onChooseToUse(event) {
            if (game.online || event.hoksishenjianglin) return;
            const cards = [];
            game.countPlayer(function (current) {
                cards.addArray(current.getCards('h', (card) => get.is.shownCard(card)));
            });
            event.set(
                'hoksishenjianglin',
                cards.map((card) => card.name)
            );
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        if (!get.is.jishi({ name: name })) return false;
                        return event.hoksishenjianglin.includes(name);
                    })
                    .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('死神降临', [event.hoksishenjianglin, 'vcard'], 'hidden');
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
                if (_status.currentPhase == player) {
                    const info = get.info(card);
                    if (info.toself || info.notarget) value -= 5;
                }
                return value;
            },
            backup(links, player) {
                return {
                    audio: 'hoksishenjianglin',
                    viewAs: {
                        name: links[0][2],
                    },
                    filterCard: true,
                    check: (card) => 7 - get.value(card),
                    async precontent(event, trigger, player) {
                        player.removeSkill('hoksishenjianglin_effect');
                        player
                            .when('useCardAfter')
                            .filter((event, player) => event.skill == 'hoksishenjianglin_backup')
                            .then(() => {
                                if (trigger.cards && trigger.cards.length == 1 && player.hasUseTarget(get.copy(trigger.cards[0]))) {
                                    player.chooseUseTarget(trigger.cards[0], trigger.targets);
                                }
                            });
                    },
                };
            },
            prompt(links, player) {
                return '将一张手牌当做【' + get.translation(links[0][2]) + '】使用';
            },
        },
        hiddenCard(player, name) {
            if (!lib.inpile.includes(name)) return false;
            if (!player.hasSkill('hoksishenjianglin_effect')) return false;
            const cards = [];
            game.countPlayer(function (current) {
                cards.addArray(current.getCards('h', (card) => get.is.shownCard(card)));
            });
            return cards.map((card) => card.name).includes(name) && player.countCards('h');
        },
        ai: {
            order: 10,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            effect: {
                charlotte: true,
            },
        },
    },
    hokhuangwuzhiyu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokhuangwuzhiyu_begin', 'hokhuangwuzhiyu_end'],
        subSkill: {
            begin: {
                audio: 'hokhuangwuzhiyu',
                trigger: {
                    global: 'damageSource',
                },
                filter(event, player) {
                    if (player.isTempBanned('hokhuangwuzhiyu_begin')) return false;
                    return event.card && event.source && event.source.isIn();
                },
                check(event, player) {
                    return get.attitude(player, event.source) <= 0;
                },
                prompt2(event, player) {
                    return `你摸一张牌并令${get.translation(event.source)}于此出牌阶段内不能使用明置牌`;
                },
                logTarget: 'source',
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    player.draw();
                    trigger.source.addTempSkill('hokhuangwuzhiyu_banvisible', 'phaseUseAfter');
                },
            },
            end: {
                audio: 'hokhuangwuzhiyu',
                trigger: {
                    player: 'damageEnd',
                },
                popup: false,
                filter(event, player) {
                    if (player.isTempBanned('hokhuangwuzhiyu_end')) return false;
                    return event.card;
                },
                async cost(event, trigger, player) {
                    const { bool } = await player
                        .chooseToDiscard('he', `你可以发动荒芜之域,弃置一张牌,回合结束后你回复1点体力`)
                        .set('ai', (card) => {
                            return 6 - get.value(card);
                        })
                        .forResult();
                    if (bool) event.result = { bool };
                },
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    const next = game.createEvent(event.name + '_phaseEnd');
                    next.player = player;
                    event.next.remove(next);
                    _status.event.getParent('phase').after.push(next);
                    next.setContent(function () {
                        player.recover();
                    });
                },
            },
            banvisible: {
                charlotte: true,
                mod: {
                    cardEnabled(card) {
                        if (get.is.shownCard(card)) return false;
                    },
                    cardSavable(card, player) {
                        if (get.is.shownCard(card)) return false;
                    },
                },
            },
        },
    },
    hokyifudangguan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio/logAudio:2',
        trigger: {
            target: 'useCardToTarget',
        },
        usable: 1,
        filter(event, player) {
            if (event.player == player) return false;
            return !get.is.virtualCard(event.card) && player.countDisabled() < 5; //QQQ
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            const { control } = await player
                .chooseToDisable()
                .set('ai', function (event, player, list) {
                    var getVal = function (num) {
                        var card = player.getEquip(num);
                        if (card) {
                            var val = get.value(card);
                            if (val > 0) return 0;
                            return 5 - val;
                        }
                        switch (num) {
                            case 'equip3':
                                return 4.5;
                            case 'equip4':
                                return 4.4;
                            case 'equip5':
                                return 4.3;
                            case 'equip2':
                                return (3 - player.hp) * 1.5;
                            case 'equip1': {
                                if (
                                    game.hasPlayer(function (current) {
                                        return (get.realAttitude || get.attitude)(player, current) < 0 && get.distance(player, current) > 1;
                                    })
                                )
                                    return 0;
                                return 3.2;
                            }
                        }
                    };
                    list.sort(function (a, b) {
                        return getVal(b) - getVal(a);
                    });
                    return list[0];
                })
                .forResult();
            trigger.targets.length = 0;
            trigger.all_excluded = true;
            game.log(player, '取消了', trigger.card, '的所有目标');
        },
    },
    hokwanfumokai: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio/logAudio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (!player.countDisabled()) return false;
            return event.type == 'phase' || (event.type == 'dying' && player == event.dying);
        },
        filterTarget(card, player, target) {
            if (target == player) return true;
            return target.hasDisabledSlot() || target.isDamaged() || target.countCards('h') > 0;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            const num = Math.min(3, player.countDisabled());
            const result = await target
                .chooseButton(
                    [
                        '慰勉:请选择' + get.cnNumber(num) + '项执行',
                        [
                            [
                                ['equip', '回复一个装备栏'],
                                ['recover', '回复1点体力'],
                                ['discard', '弃置所有手牌,摸四张牌'],
                            ],

                            'textbutton',
                        ],
                    ],

                    num
                )
                .set('filterButton', (button) => {
                    const player = get.event().player;
                    switch (button.link) {
                        case 'equip':
                            return player.hasDisabledSlot();
                        case 'recover':
                            return player.isDamaged();
                        case 'discard':
                            return player.countCards('h');
                    }
                })
                .set('ai', (button) => {
                    const player = get.event().player;
                    switch (button.link) {
                        case 'equip':
                            return 1;
                        case 'recover':
                            return get.recoverEffect(player, player, player);
                        case 'discard':
                            return (
                                get.effect(player, { name: 'draw' }, player, player) * 4 -
                                player
                                    .getCards('h', (card) => {
                                        return lib.filter.cardDiscardable(card, player);
                                    })
                                    .reduce((sum, card) => {
                                        return sum + get.value(card, player);
                                    }, 0)
                            );
                    }
                })
                .forResult();
            if (result.bool) {
                if (result.links.includes('equip')) {
                    await target.chooseToEnable();
                }
                if (result.links.includes('recover')) {
                    await target.recover();
                }
                if (result.links.includes('discard')) {
                    const cards = target.getDiscardableCards(target, 'h');
                    if (cards.length) await target.discard(cards);
                    await target.draw(4);
                }
            }
        },
        ai: {
            result: {
                target(player, target) {
                    let max = 0;
                    if (get.attitude(player, target) > 0 && (target == player || target.hasDisabledSlot())) max++;
                    if (get.recoverEffect(target, player, player) > 0) max++;
                    if (
                        target.countCards('h') > 0 &&
                        target
                            .getCards('h', (card) => {
                                return lib.filter.cardDiscardable(card, target);
                            })
                            .reduce((sum, card) => {
                                return sum + get.value(card, target);
                            }, 0) <=
                        get.effect(target, { name: 'draw' }, player, player) * 4
                    )
                        max++;
                    return max;
                },
            },
        },
    },
    hokchunjingzhiyu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokmaomizhadan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseBefore',
            player: 'enterGame',
        },
        forced: true,
        filter(event, player) {
            return event.name != 'phase' || game.phaseNumber == 0;
        },
        async content(event, trigger, player) {
            const cards = player.getCards('h');
            if (cards.length) {
                player.addGaintag(cards, 'hokmaomizhadan_tag');
                player.markAuto('hokmaomizhadan', cards);
            }
        },
        group: ['hokmaomizhadan_reback', 'hokmaomizhadan_regain'],
        subSkill: {
            regain: {
                audio: 'hokmaomizhadan',
                trigger: {
                    global: 'gainAfter',
                    player: 'loseAsyncAfter',
                },
                forced: true,
                getIndex(event, player, triggername) {
                    if (event.name == 'loseAsync' && event.type != 'gain') return [];
                    if (!event.getl || !event.getg || !event.getl(player)) return [];
                    let cards2 = event.getl(player).cards2;
                    return game
                        .filterPlayer((target) => {
                            if (target == player || !event.getg(target)) return false;
                            if (cards2.length) {
                                let cards = event.getg(target);
                                if (cards?.length && cards.some((card) => cards2.includes(card) && player.getStorage('hokmaomizhadan').includes(card))) return true;
                            }
                            return false;
                        })
                        .sortBySeat();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0],
                        getgnum = trigger.getg(target).filter(function (card) {
                            return target.getCards('h').includes(card) && player.getStorage('hokmaomizhadan').includes(card);
                        }),
                        cards = target.getCards('h', function (card) {
                            return !card.hasGaintag('igniteCards');
                        });
                    const ignitenum = Math.min(getgnum, cards);
                    if (cards.length) {
                        const { bool, cards } = await target
                            .chooseCard('h', ignitenum, true)
                            .set('prompt', `${get.translation(player)}的${get.skillTipsInfo(get.translation('hokmaomizhadan'), get.skillTranslation('hokmaomizhadan', player))}效果被触发,请你点燃${get.cnNumber(ignitenum)}张手牌`)
                            .set('filterCard', function (card) {
                                return !card.hasGaintag('igniteCards');
                            })
                            .set('ai', function (card) {
                                const player = get.player();
                                let use = player.getUseValue(card);
                                if (player.isPhaseUsing()) {
                                    if (
                                        (() => {
                                            if (!player.hasUseTarget(card, false, false)) return false;
                                            if (['sha', 'jiu'].includes(card.name)) return true;
                                            return false;
                                        })()
                                    ) {
                                        use += 1.4;
                                    }
                                    return use;
                                }
                                return -get.useful(card);
                            })
                            .forResult();
                        if (bool) await target.igniteCards(cards);
                    }
                },
            },
            reback: {
                audio: 'hokmaomizhadan',
                trigger: {
                    global: ['loseAfter', 'cardsDiscardAfter', 'loseAsyncAfter', 'equipAfter'],
                },
                forced: true,
                filter(event, player) {
                    return event.getd().some((card) => {
                        return get.position(card) == 'd' && player.getStorage('hokmaomizhadan').includes(card);
                    });
                },
                async content(event, trigger, player) {
                    const cards = trigger.getd().filter(function (card) {
                        return get.position(card) == 'd' && player.getStorage('hokmaomizhadan').includes(card);
                    });
                    player.unmarkAuto('hokmaomizhadan', cards);
                    await player.draw();
                    const huogong = new lib.element.VCard({ name: 'huogong' });
                    if (player.hasUseTarget(huogong)) await player.chooseUseTarget(huogong);
                },
            },
            tag: {},
        },
    },
    hokzonghebaokuan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        filterCard: true,
        check(card) {
            let player = get.player(),
                val = 6.5;
            if (player.getStorage('hokmaomizhadan').includes(card)) val -= 0.5;
            if (player.needsToDiscard()) val += 1.5;
            return val - get.value(card);
        },
        lose: false,
        discard: false,
        delay: false,
        getShowCards() {
            const cards = [];
            game.getGlobalHistory('everything', function (evt) {
                if (evt.name != 'showCards') return;
                cards.addArray(evt.cards);
            });
            return cards;
        },
        async content(event, trigger, player) {
            player.markAuto('hokmaomizhadan', event.cards);
            await player.give(event.cards, event.target);
            event.target.addGaintag(event.cards, 'hokmaomizhadan_tag');
            event.target.damage('fire');
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    return get.damageEffect(target, player, target, 'fire');
                },
            },
        },
        subSkill: {
            damage: {
                audio: 'hokzonghebaokuan',
                trigger: {
                    source: 'damageSource',
                },
                popup: false,
                filter(event, player) {
                    if (
                        !player.countCards('h') ||
                        !get
                            .info('hokzonghebaokuan')
                            .getShowCards()
                            .filter(function (card) {
                                return game.hasPlayer((current) => current != player && current.getCards('h').includes(card));
                            }).length
                    )
                        return false;
                    return event.hasNature('fire');
                },
                async cost(event, trigger, player) {
                    const cards = get
                        .info('hokzonghebaokuan')
                        .getShowCards()
                        .filter(function (card) {
                            return game.hasPlayer((current) => current != player && current.getCards('h').includes(card));
                        }),
                        hs = player.getCards('h');
                    const next = player.chooseToMove('综合爆款');
                    next.set('list', [
                        ['展示牌', cards, 'hokmaomizhadan_tag'],
                        ['手牌', player.getCards('h')],
                    ]);
                    next.set('filterMove', function (from, to, moved) {
                        return typeof to != 'number';
                    });
                    next.set('processAI', function (list) {
                        let all = list[0][1].concat(list[1][1]),
                            cards = all.slice(0);
                        let num = _status.event.num;
                        cards.sort(function (a, b) {
                            return get.value(b) - get.value(a);
                        });
                        return [cards.slice(num), cards.slice(0, num)];
                    });
                    next.set('num', hs.length);
                    const { result } = await next;
                    const hand_cards = result.moved[0].removeArray(cards);
                    const show_cards = result.moved[1].removeArray(hs);
                    if (hand_cards.length || show_cards.length) {
                        event.result = { bool: true, cost_data: { cards, hs, result, hand_cards, show_cards } };
                    }
                },
                async content(event, trigger, player) {
                    const result = event.cost_data.result,
                        cards = event.cost_data.cards,
                        hs = event.cost_data.hs;
                    const hand_cards = event.cost_data.hand_cards,
                        show_cards = event.cost_data.show_cards;
                    const lose_list = [];
                    const gain_list = [];
                    event.forceDie = true;
                    if (show_cards.map((card) => get.owner(card)).toUniqued().length == 1) {
                        const target = get.owner(show_cards[0]);
                        await player.swapHandcards(target, hand_cards, show_cards);
                    } else {
                        show_cards.forEach((card) => {
                            const target = get.owner(card);
                            const index = lose_list.find((item) => item[0] == target);
                            if (!index) {
                                lose_list.push([target, [card]]);
                            } else {
                                index[1].addArray([card]);
                            }
                        });
                        gain_list.push([player, show_cards]);
                        hand_cards.forEach((key, value) => {
                            const target = get.owner(show_cards[value]);
                            const index = gain_list.find((item) => item[0] == target);
                            if (!index) {
                                gain_list.push([target, [key]]);
                            } else {
                                index[1].addArray([key]);
                            }
                        });
                        const targets = gain_list.map((list) => list[0]).filter((target) => target != player);
                        lose_list
                            .map((list) => list[0])
                            .forEach((list) => {
                                list.$giveAuto(gain_list.find((item) => item[0] == list)[1], list == player ? list : player, false);
                            });
                        game.loseAsync({
                            lose_list: lose_list,
                        }).setContent('chooseToCompareLose');
                        game.loseAsync({
                            gain_list: gain_list,
                            animate: 'giveAuto',
                        }).setContent('gaincardMultiple');
                        game.log(player, '从', targets, '获得了', gain_list.find((item) => item[0] == player)[1]);
                        targets.forEach((list) => game.log(list, '从', player, '获得了', gain_list.find((item) => item[0] == list)[1]));
                    }
                },
            },
        },
    },
    hokliliangjuexing: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokbizhen: {
        audio: 'ext:王者荣耀/audio:2',
    },
    hokguiyue: {
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokguiyue_upperlimit', 'hokguiyue_lowerlimit'],
        subSkill: {
            upperlimit: {
                audio: 'hokguiyue',
                trigger: {
                    player: 'changeHpAfter',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    return player.hp == player.maxHp;
                },
                async content(event, trigger, player) {
                    await player.gainMaxHp();
                    if (
                        player.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, player, 'hokguiyue_upperlimit');
                        })
                    ) {
                        player.chooseToDiscard('h', `你发动了${get.translation(event.name)},请弃置一张手牌`, true);
                    }
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'recover') && player.getDamagedHp() == 1) {
                                return [1, 0.1];
                            }
                        },
                    },
                },
            },
            lowerlimit: {
                audio: 'hokguiyue',
                trigger: {
                    player: 'changeHpAfter',
                },
                usable: 1,
                forced: true,
                filter(event, player) {
                    return player.hp <= 0;
                },
                async content(event, trigger, player) {
                    await player.loseMaxHp();
                    player.draw();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (get.tag(card, 'recover') && player.getHp(true) < 1) {
                                return [1, 1];
                            }
                        },
                    },
                },
            },
        },
    },
    hokbenyue: {
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokbenyue_gain', 'hokbenyue_discard', 'hokbenyue_recover', 'hokbenyue_loseHp'],
        subSkill: {
            gain: {
                audio: 'hokbenyue',
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                popup: false,
                filter(event, player) {
                    const cards = event.getg(player);
                    if (!cards.length) return false;
                    if (event.getParent(2).name == 'hokbenyue_discard') return false;
                    return player.getCards('he').some((card) => cards.includes(card));
                },
                async cost(event, trigger, player) {
                    if (trigger.delay == false) await game.asyncDelay();
                    const cards = trigger.getg(player);
                    if (!player.countCards('h')) return;
                    event.result = await player
                        .chooseToDiscard(function (card) {
                            return get.event('cardxs').includes(card);
                        })
                        .set('ai', (card) => {
                            const player = get.player();
                            if (get.recoverEffect(player, player, player) <= 0) return 0;
                            return -get.value(card);
                        })
                        .set('prompt', get.prompt('hokbenyue'))
                        .set('prompt2', `你可以弃置其中的一张并回复1点体力`)
                        .set('cardxs', cards)
                        .set('chooseonly', true)
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.discard(event.cards);
                    player.recover();
                },
            },
            discard: {
                audio: 'hokbenyue',
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                popup: false,
                filter(event, player) {
                    if (event.type != 'discard') return false;
                    if (event.getParent(2).name == 'hokbenyue_gain') return false;
                    var evt = event.getl(player);
                    return evt && evt.cards2 && evt.cards2.length;
                },
                async cost(event, trigger, player) {
                    const cards = trigger.getl(player).cards2;
                    if (cards.length) {
                        const { bool, links } = await player
                            .chooseButton([`${get.prompt('hokbenyue')},获得其中的一张牌并失去1点体力`, cards])
                            .set('filterButton', (button) => {
                                return get.itemtype(button.link) == 'card';
                            })
                            .set('ai', (button) => {
                                const player = get.player();
                                if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return false;
                                let val = 8,
                                    lose = get.effect(player, { name: 'losehp' }, player, player);
                                return val + lose - get.value(button.link);
                            })
                            .forResult();
                        event.result = { bool, cost_data: { links } };
                    }
                },
                async content(event, trigger, player) {
                    if (trigger.delay == false) await game.asyncDelay();
                    await player.gain(event.cost_data.links, 'gain2');
                    player.loseHp();
                },
            },
            recover: {
                audio: 'hokbenyue',
                trigger: {
                    player: 'recoverEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.addTempSkill('hokbenyue_add');
                },
            },
            loseHp: {
                audio: 'hokbenyue',
                trigger: {
                    player: 'loseHpEnd',
                },
                forced: true,
                async content(event, trigger, player) {
                    player.addTempSkill('hokbenyue_sub');
                },
            },
            add: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num++;
                    player.removeSkill(event.name);
                },
                mark: true,
                intro: {
                    markcount: () => '+1',
                    content: '本回合你下一次造成的伤害+1',
                },
            },
            sub: {
                trigger: {
                    player: 'damageBegin3',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    trigger.num--;
                    player.removeSkill(event.name);
                },
                mark: true,
                intro: {
                    markcount: () => '-1',
                    content: '本回合你下一次受到的伤害-1',
                },
            },
        },
    },
    hokhaofawushang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseEnd',
        },
        filter(event, player) {
            if (!game.getGlobalHistory('changeHp', (evt) => evt.player == player && evt.num < 0).length) return false;
            if (player.getHistory('sourceDamage').reduce((p, c) => p + c.num, 0) >= player.getHp()) return true;
            return player.getHistory('damage').reduce((p, c) => p + c.num, 0) >= player.getHp();
        },
        prompt2: `你可以减1点体力上限并将体力回复至上限`,
        check(event, player) {
            if (player.maxHp < 2) return false;
            return player.getDamagedHp() > 1;
        },
        async content(event, trigger, player) {
            await player.loseMaxHp();
            await player.recoverTo(player.maxHp);
        },
        group: 'hokhaofawushang_use',
        subSkill: {
            use: {
                enable: 'chooseToUse',
                filter(event, player, name) {
                    if (player.getHp() < 1) return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2];
                            if (get.type(name) != 'basic') return false;
                            return !(event.hokhaofawushang || []).includes(name);
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                onChooseToUse(event) {
                    if (!game.online && !event.hokhaofawushang) {
                        const player = event.player;
                        event.set('hokhaofawushang', get.info('hokhaofawushang_use').getUsed(player));
                    }
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2];
                                if (get.type(name) != 'basic') return false;
                                return !(event.hokhaofawushang || []).includes(name);
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        const dialog = ui.create.dialog('毫发无伤', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    check(button) {
                        if (_status.event.parent.type != 'phase') return 1;
                        const player = get.player();
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            ai1(card) {
                                return 1;
                            },
                            async precontent(event, trigger, player) {
                                player.loseHp();
                            },
                        };
                    },
                    prompt(links, player) {
                        return '失去1点体力以视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                getUsed: (player) =>
                    player
                        .getHistory('useCard', (evt) => ['basic'].includes(get.type(evt.card, null, false)))
                        .map((evt) => evt.card.name)
                        .toUniqued(),
                hiddenCard(player, name) {
                    if (get.type(name) != 'basic') return false;
                    if (get.info('hokhaofawushang_use').getUsed(player).includes(name)) return false;
                    return lib.inpile.includes(name);
                },
                ai: {
                    respondSha: true,
                    respondShan: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'use') return false;
                        const name = tag == 'respondSha' ? 'sha' : 'shan';
                        return get.info('hokhaofawushang_use').hiddenCard(player, name);
                    },
                    order(item, player) {
                        if (player && get.event().type == 'phase') {
                            let list = get
                                .inpileVCardList((info) => {
                                    const name = info[2];
                                    if (get.type(name) != 'basic') return false;
                                    return !get.info('hokhaofawushang_use').getUsed(player).includes(name);
                                })
                                .map((card) => {
                                    return { name: card[2], nature: card[3] };
                                })
                                .filter((card) => player.getUseValue(card, true, true) > 0);
                            if (!list.length) return 0;
                            list.sort((a, b) => (player.getUseValue(b, true, true) || 0) - (player.getUseValue(a, true, true) || 0));
                            return get.order(list[0], player) * 0.99;
                        }
                        return 0.001;
                    },
                    result: {
                        player(player) {
                            if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return 0;
                            if (_status.event.dying) return get.attitude(player, _status.event.dying);
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
        },
    },
    hokkaitianpidi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokruoyourenxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokfengsamuxiao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokdulixishanzhishang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokliaoaoyouxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'chooseToCompareBegin',
        },
        filter(event, player) {
            const cards = Array.from(ui.ordering.childNodes).flat();
            if (!cards.length) return false;
            if (player == event.player) return true;
            if (event.targets) return event.targets.includes(player);
            return player == event.target;
        },
        async cost(event, trigger, player) {
            const cards = Array.from(ui.ordering.childNodes).flat();
            if (!cards.length) return;
            const { bool, links } = await player
                .chooseButton([get.prompt2(event.name.slice(0, -5)), cards])
                .set('ai', (button) => {
                    const player = get.player();
                    return button.link.number >= 12;
                })
                .forResult();
            if (bool) event.result = { bool: true, cost_data: { links } };
        },
        async content(event, trigger, player) {
            if (!trigger.fixedResult) trigger.fixedResult = {};
            trigger.fixedResult[player.playerid] = event.cost_data.links[0];
        },
    },
    hoksafengfeiyu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokbiaoyuanxiyunzhong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted',
        },
        filter(event, player, name) {
            const target = get.info('hokbiaoyuanxiyunzhong').logTarget(event, player);
            if (event.player == event.target) return false;
            return player.canCompare(target);
        },
        filterx(event, player, name, target) {
            if (name == 'useCardToPlayered') {
                if (!target.countCards('h')) return false;
                if (player.hasSkillTag('noCompareSource') || target.hasSkillTag('noCompareTarget')) return false;
            } else {
                if (!player.countCards('h')) return false;
                if (target.hasSkillTag('noCompareSource') || player.hasSkillTag('noCompareTarget')) return false;
            }
            return true;
        },
        logTarget(event, player) {
            return event[event.player == player ? 'target' : 'player'];
        },
        check(event, player) {
            let target = event.player;
            if (event.player == player) {
                target = event.target;
            } //QQQ
            return get.attitude(player, target) < 0;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const target = event.targets[0];
            const { bool } = await player.chooseToCompare(target).forResult();
            if (bool) {
                const cards = target.getCards('h');
                if (!cards.length) return;
                const next = target.addToExpansion(cards, 'giveAuto', target);
                next.gaintag.add('hokbiaoyuanxiyunzhong');
                await next;
                target
                    .when({
                        global: ['phaseBefore', 'phaseAfter'],
                    })
                    .then(() => {
                        const cards = player.getExpansions('hokbiaoyuanxiyunzhong');
                        if (cards.length) {
                            player.gain(cards, 'draw');
                            game.log(player, '收回了' + get.cnNumber(cards.length) + '张<云中>牌');
                        }
                    });
            } else {
                trigger.parent.targets.length = 0;
                trigger.parent.all_excluded = true;
                game.log(player, '取消了', trigger.card, '的所有目标');
            }
        },
    },
    hokxingchenzhici: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill'],
        },
        forced: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || get.is.locked(skill)) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            return (
                player.getAllHistory('useSkill', (evt) => {
                    let skill = get.sourceSkillFor(event);
                    if (!skill || get.is.locked(skill)) return false;
                    let info = get.info(skill);
                    if (info.charlotte || info.equipSkill) return false;
                    return skill;
                }).length %
                3 ==
                0
            );
        },
        restore(target) {
            const removeSkills = target.getSkills(null, false, false).filter((i) => {
                const info = get.info(i);
                return !info || !info.charlotte;
            });
            if (removeSkills.length) target.removeSkill(removeSkills);
            const gainSkills = target.getStockSkills(true, true).filter((i) => {
                const info = get.info(i);
                if (info && info.zhuSkill && !player.isZhu2()) return false;
                return !info || !info.charlotte;
            });
            if (gainSkills.length) {
                Object.keys(target.storage)
                    .filter((i) => gainSkills.some((skill) => i.startsWith(skill)))
                    .forEach((storage) => delete target.storage[storage]);
                target.addSkill(gainSkills);
                const suffixs = ['used', 'round', 'block', 'blocker'];
                for (const skill of gainSkills) {
                    const info = get.info(skill);
                    if (typeof info.usable == 'number') {
                        if (target.getStat('triggerSkill')[skill] && target.getStat('triggerSkill')[skill] >= 1) {
                            delete target.getStat('triggerSkill')[skill];
                        }
                        if (typeof get.skillCount(skill) == 'number' && get.skillCount(skill) >= 1) {
                            delete target.getStat('skill')[skill];
                        }
                    }
                    if (info.round && target.storage[skill + '_roundcount']) {
                        delete target.storage[skill + '_roundcount'];
                    }
                    if (target.storage[`temp_ban_${skill}`]) {
                        delete target.storage[`temp_ban_${skill}`];
                    }
                    if (target.awakenedSkills.includes(skill)) {
                        target.restoreSkill(skill);
                    }
                    for (const suffix of suffixs) {
                        if (target.hasSkill(skill + '_' + suffix)) {
                            target.removeSkill(skill + '_' + suffix);
                        }
                    }
                }
            }
        },
        async content(event, trigger, player) {
            get.info(event.name).restore(player);
            player.addSkill(`hokxingchenzhici_effect`);
        },
        ai: {
            combo: ['hokzhuxing', 'hokguichen'],
        },
        group: 'hokxingchenzhici_xingxue',
        subSkill: {
            xingxue: {
                audio: 'hokxingchenzhici',
                trigger: {
                    player: 'damageBegin4',
                },
                forced: true,
                firstDo: true,
                filter(event, player) {
                    return (
                        game
                            .getGlobalHistory(
                                'everything',
                                (evt) => {
                                    return evt.name == 'damage' && evt.player == player;
                                },
                                event
                            )
                            .indexOf(event) == 0
                    );
                },
                async content(event, trigger, player) {
                    trigger.cancel(true, player, 'notrigger');
                    player.addTempSkill('hokxingchenzhici_xingshi');
                    player.setStorage('hokxingchenzhici_xingshi', trigger);
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (player.hasSkillTag('jueqing', false, target)) return;
                            if (
                                game.getGlobalHistory('everything', (evt) => {
                                    return evt.name == 'damage' && evt.player == target;
                                }).length
                            )
                                return;
                            return 0.99;
                        },
                    },
                },
            },
            xingshi: {
                audio: 'hokxingchenzhici',
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                async content(event, trigger, player) {
                    var evt = player.storage[event.name];
                    if (!evt) return;
                    var next = game.createEvent('damage');
                    next.player = player;
                    next.source = evt.source || 'nosource';
                    next.card = evt.card;
                    next.cards = evt.cards;
                    next.skill = evt.skill;
                    next.num = evt.num;
                    next.nature = evt.nature;
                    next.original_num = evt.original_num;
                    next.change_history = [];
                    next.hasNature = function (nature) {
                        if (!nature) return Boolean(evt.nature && evt.nature.length);
                        let natures = get.natureList(nature),
                            naturesx = get.natureList(evt.nature);
                        if (nature == 'linked') return naturesx.some((n) => lib.linked.includes(n));
                        return get.is.sameNature(natures, naturesx);
                    };
                    if (next.hasNature('poison')) delete next._triggered;
                    else if (next.unreal) next._triggered = 2;
                    next.setContent('damage');
                    next.filterStop = function () {
                        if (evt.source && evt.source.isDead()) delete evt.source;
                        var num = evt.original_num;
                        for (const i of evt.change_history) num += i;
                        if (num != evt.num) evt.change_history.push(evt.num - num);
                        if (evt.num <= 0) {
                            delete evt.filterStop;
                            evt.trigger('damageZero');
                            evt.finish();
                            return true;
                        }
                    };
                    next.setContent('damage');
                },
            },
            effect: {
                charlotte: true,
                mark: true,
                init(player, skill) {
                    player.addTip(skill, get.translation(skill));
                },
                onremove(player, skill) {
                    player.removeTip(skill);
                },
                intro: {
                    content: '你下次发动<逐星>或<归尘>时无视划线',
                },
            },
        },
    },
    hokzhuxing: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardAfter',
        },
        usable: 1,
        filter(event, player) {
            return player.hasHistory('lose', function (evt) {
                return evt && evt.hs && evt.hs.length && evt.parent == event;
            });
        },
        check(event, player) {
            const cards = Array.from(ui.cardPile.childNodes).flat().slice(0, 3);
            if (player.hasSkill('hokxingchenzhici_effect')) {
                cards.addArray(Array.from(ui.cardPile.childNodes).flat().slice(-3));
            }
            return cards.some((card) => {
                if (get.type(card, false) != get.type2(event.card)) return false;
                return player.hasUseTarget(card);
            });
        },
        async content(event, trigger, player) {
            const star = player.hasSkill('hokxingchenzhici_effect');
            const cards = [],
                topCards = get.cards(3);
            player.removeSkill('hokxingchenzhici_effect');
            cards.addArray(topCards.slice(0));
            while (topCards.length) {
                ui.cardPile.insertBefore(topCards.pop().fix(), ui.cardPile.firstChild);
            }
            game.updateRoundNumber();
            if (star) {
                let bottomCards = get.bottomCards(3);
                cards.addArray(bottomCards.slice(0));
                while (bottomCards.length) {
                    ui.cardPile.appendChild(bottomCards.pop().fix());
                }
                game.updateRoundNumber();
            }
            const { bool, links } = await player
                .chooseButton([`逐星:你可以使用其中一张${get.translation(get.type2(trigger.card))}牌`, cards])
                .set('filterButton', (button) => {
                    var player = _status.event.player;
                    var card = button.link;
                    var cardx = {
                        name: get.name(card, get.owner(card)),
                        nature: get.nature(card, get.owner(card)),
                        cards: [card],
                    };
                    if (get.type(card) != get.type(get.event().getTrigger().card)) return false;
                    return player.hasUseTarget(cardx, null, false);
                })
                .set('ai', (button) => {
                    var card = button.link;
                    var fix = 1;
                    return fix * _status.event.player.getUseValue(card);
                })
                .forResult();
            if (bool) {
                var card = links[0];
                cards.remove(card);
                var cardx = {
                    name: get.name(card, get.owner(card)),
                    nature: get.nature(card, get.owner(card)),
                    cards: [card],
                };
                var next = player.chooseUseTarget(cardx, [card], true, false).set('oncard', (card) => {
                    var owner = _status.event.parent.owner;
                    if (owner) owner.$throw(card.cards);
                });
                if (card.name === cardx.name && get.is.sameNature(card, cardx, true)) next.viewAs = false;
                var owner = get.owner(card);
                if (owner != player && get.position(card) == 'h') {
                    next.throw = false;
                    next.set('owner', owner);
                }
            }
        },
    },
    hokguichen: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
            target: 'useCardToTargeted',
        },
        popup: false,
        xushiSkill: true,
        filter(event, player, name) {
            const lastUsed = [];
            if (player.isTempBanned('hokguichen_use')) return false;
            if (!get.is.jishi(event.card)) return false;
            for (let i = 1; i <= 2; i++) {
                const history = get.info('hokguichen').getLastUsed(i);
                if (history) lastUsed.push(history.card);
            }
            if (!lastUsed.length) return false;
            if (name == 'useCardToPlayered') {
                return player.hasSkill('hokxingchenzhici_effect') && event.parent.triggeredTargets3.length == 1;
            }
            return player == event.target && event.parent.triggeredTargets3.length == 1;
        },
        getLastUsed(index) {
            const history = game.getAllGlobalHistory('useCard', (evt) => get.is.jishi(evt.card));
            if (!history.length) return false;
            let item = history.length - 1;
            if (item < index) return false;
            return history[item - index];
        },
        async cost(event, trigger, player) {
            const list = [];
            for (let i = 1; i <= 2; i++) {
                const history = get.info('hokguichen').getLastUsed(i);
                if (history) list.push(['', '', history.card.name, history.card.nature, i]);
            }
            if (list.length > 1 && player.hasSkill('hokxingchenzhici_effect')) {
                const { bool, links } = await player
                    .chooseButton([`###归尘###你可以将${get.translation(trigger.card)}的效果改为以下一张牌的效果`, [list, 'vcard']])
                    .set('list', list)
                    .set('filterButton', (button) => {
                        const player = get.player(),
                            trigger = get.event().getTrigger();
                        if (trigger.player == player) {
                            return player.hasUseTarget({ name: button.link[2] });
                        }
                        return true;
                    })
                    .set('ai', (button) => {
                        const player = get.player(),
                            trigger = get.event().getTrigger(),
                            list = get.event('list');
                        if (trigger.player == player) return -10;
                        if (get.effect(player, trigger.card, trigger.player, player) > 0) return 0;
                        if (trigger.card.name == button.link[2]) return false;
                        return get.effect(player, { name: list[0][2] }, player, player) - get.effect(player, { name: trigger.card.name, nature: trigger.card.nature }, player, player);
                    })
                    .forResult();
                if (bool) event.result = { bool, cost_data: { name: links[0][2] } };
            } else {
                const { bool } = await player
                    .chooseBool()
                    .set('list', list)
                    .set('prompt', `###${get.prompt('hokguichen')}###你可以将${get.translation(trigger.card)}的效果改为【${get.translation(list[0][2])}】的效果`)
                    .set('ai', () => {
                        const player = get.player(),
                            trigger = get.event().getTrigger(),
                            list = get.event('list');
                        if (trigger.targets.includes(player)) {
                            if (get.effect(player, trigger.card, trigger.player, player) > 0) return false;
                            if (trigger.card.name == list[0][2]) return false;
                            return get.effect(player, { name: trigger.card.name, nature: trigger.card.nature }, player, player) < get.effect(player, { name: list[0][2] }, player, player);
                        }
                        return false;
                    })
                    .forResult();
                if (bool) event.result = { bool, cost_data: { name: list[0][2] } };
            }
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.removeSkill('hokxingchenzhici_effect');
            player.tempBanSkill(event.name, 'roundStart', false);
            game.log(player, '将', trigger.card, '改为了', get.translation(event.cost_data.name));
            player.addTempSkill('hokguichen_effect');
            player.markAuto('hokguichen_effect', [[trigger.card, { name: event.cost_data.name }, trigger.player]]);
        },
        subSkill: {
            effect: {
                trigger: {
                    global: 'useCardToBegin',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                filter(event, player) {
                    const storage = player.getStorage('hokguichen_effect');
                    return storage.some((list) => list[0] == event.card);
                },
                async content(event, trigger, player) {
                    const list = player.getStorage('hokguichen_effect').find((list) => list[0] == trigger.card);
                    trigger.setContent(lib.card[list[1].name].content);
                },
            },
        },
    },
    hokmoyingtuxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        derivation: 'hokwanrenguiqiao',
        trigger: {
            player: ['logSkill', 'useSkillAfter'],
        },
        forced: true,
        filter(event, player) {
            if (event.type != 'player') return false;
            var skill = get.sourceSkillFor(event);
            if (get.is.locked(skill)) return false;
            var info = get.info(skill);
            return !info.charlotte;
        },
        async content(event, trigger, player) {
            player.addTempSkill('hokmoyingtuxi_effect');
            player.addMark('hokmoyingtuxi_effect', 1, false);
        },
        ai: {
            combo: 'hokwanrenguiqiao',
        },
        group: 'hokmoyingtuxi_use',
        subSkill: {
            use: {
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                filter(event, player) {
                    return get.type(event.card) == 'equip';
                },
                async content(event, trigger, player) {
                    await player.draw();
                    player.restoreSkill('hokwanrenguiqiao');
                },
            },
            effect: {
                charlotte: true,
                mod: {
                    globalFrom(from, to, distance) {
                        return (distance -= from.countMark('hokmoyingtuxi_effect'));
                    },
                },
            },
        },
    },
    hokriluoguqiang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filter(event, player) {
            return player.countCards('hes', { type: 'equip' }) > 0;
        },
        filterCard(card) {
            return get.type(card) == 'equip';
        },
        position: 'hes',
        check(card) {
            const player = get.player();
            if (player.countCards('he', { subtype: get.subtype(card) }) > 1) {
                return 11 - get.equipValue(card);
            }
            return 6 - get.value(card);
        },
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            let target = event.targets[0];
            while (true) {
                if (target.canEquip(event.cards[0])) {
                    await target.equip(event.cards[0]);
                    break;
                } else {
                    await target.damage();
                    target = target.next;
                }
            }
        },
        discard: false,
        lose: false,
        prepare(cards, player, targets) {
            player.$give(cards, targets[0], false);
        },
        ai: {
            order: 1,
            result: {
                target(player, target) {
                    const card = ui.selected.cards[0];
                    if (card) {
                        if (!target.canEquip(card)) return get.damageEffect(target, player, player);
                        return get.effect(target, card, target, target);
                    }
                    return -1;
                },
            },
        },
    },
    hokwanrenguiqiao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        xushiSkill: true,
        hiddenCard(player, name) {
            if (player != _status.currentPhase && name == 'chuqibuyi') return true;
        },
        filter(event, player) {
            if (event.responded || event.hokwanrenguiqiao || event.type == 'wuxie') return false;
            return (
                game.hasPlayer(function (current) {
                    return current != player && current.getCards('e').length;
                }) &&
                event.filterCard(
                    get.autoViewAs(
                        {
                            name: 'chuqibuyi',
                            storage: { hokwanrenguiqiao: true },
                        },
                        'unsure'
                    ),
                    player,
                    event
                )
            );
        },
        delay: false,
        filterTarget(card, player, target) {
            var event = _status.event,
                evt = event;
            if (event._backup) evt = event._backup;
            var distance = get.distance(player, target);
            if (game.hasPlayer((current) => current != player && current.countCards('e') && get.distance(player, current) < distance)) return false;
            var equips = target.getCards('e');
            return equips.some((card) => {
                var sha = get.autoViewAs(
                    {
                        name: 'chuqibuyi',
                        storage: { hokwanrenguiqiao: true },
                    },
                    [card]
                );
                if (evt.filterCard && evt.filterCard(sha, player, event)) {
                    if (!evt.filterTarget) return true;
                    return game.hasPlayer(function (current) {
                        return evt.filterTarget(sha, player, current);
                    });
                }
            });
        },
        prompt: '将与你距离最近的一名其他角色装备区内的一张牌当做【出其不意】使用',
        async content(event, trigger, player) {
            player.awakenSkill('hokwanrenguiqiao');
            var evt = event.getParent(2);
            const target = event.targets[0];
            evt.set('hokwanrenguiqiao', true);
            var list = [];
            var equip4 = target.getCards('e');
            var backupx = _status.event;
            _status.event = evt;
            try {
                if (
                    equip4.length &&
                    equip4.some((card) => {
                        var sha = get.autoViewAs(
                            {
                                name: 'chuqibuyi',
                                storage: { hokwanrenguiqiao: true },
                            },
                            [card]
                        );
                        if (
                            evt.filterCard(sha, player, evt) &&
                            (!evt.filterTarget ||
                                game.hasPlayer(function (current) {
                                    return evt.filterTarget(sha, player, current);
                                }))
                        )
                            return true;
                        return false;
                    })
                ) {
                    list.push('chuqibuyi');
                }
            } catch (e) {
                game.print(e);
            }
            _status.event = backupx;
            if (list.length == 1) {
                event.cardName = list[0];
                var cards = equip4;
                if (cards.length == 1)
                    event.result = {
                        bool: true,
                        links: [cards[0]],
                    };
                else
                    event.result = await player
                        .choosePlayerCard(true, target, 'e')
                        .set('filterButton', function (button) {
                            return _status.event.cards.includes(button.link);
                        })
                        .set('cards', cards)
                        .forResult();
            }
            var evt = event.getParent(2);
            const result = event.result;
            if (result.bool && result.links && result.links.length) {
                var name = event.cardName || 'chuqibuyi';
                game.broadcastAll(
                    function (result, name) {
                        lib.skill.hokwanrenguiqiao_backup.viewAs = {
                            name: name,
                            cards: [result],
                            storage: { hokwanrenguiqiao: true },
                        };
                        lib.skill.hokwanrenguiqiao_backup.prompt = '选择' + get.translation(name) + '(' + get.translation(result) + ')的目标';
                    },
                    result.links[0],
                    name
                );
                evt.set('_backupevent', 'hokwanrenguiqiao_backup');
                evt.backup('hokwanrenguiqiao_backup');
                evt.set('openskilldialog', '选择' + get.translation(name) + '(' + get.translation(result.links[0]) + ')的目标');
                evt.set('norestore', true);
                evt.set('custom', {
                    add: {},
                    replace: { window() { } },
                });
            }
            evt.goto(0);
        },
        ai: {
            order() {
                return get.order({ name: 'chuqibuyi' });
            },
            result: {
                player(player, target) {
                    var att = Math.max(8, get.attitude(player, target));
                    if (_status.event.type != 'phase') return 9 - att;
                    if (!player.hasValueTarget({ name: 'chuqibuyi' })) return 0;
                    return 9 - att;
                },
            },
        },
        subSkill: {
            backup: {
                async precontent(event, trigger, player) {
                    var cards = event.result.card.cards;
                    event.result.cards = cards;
                    var owner = get.owner(cards[0]);
                    event.target = owner;
                    owner.$give(cards[0], player, false);
                },
                filterCard: () => false,
                prompt: '请选择【出其不意】的目标',
                selectCard: -1,
            },
        },
    },
    hokshafuzhiyin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'phaseBegin',
        },
        filter(event, player) {
            return event.player != player;
        },
        check(event, player) {
            if (get.attitude(player, event.player) < -2) {
                const cards = player.getCards('h');
                if (Array.isArray(cards))
                    for (const i of cards) {
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
            await player.draw();
            if (!player.canCompare(trigger.player)) return;
            const { bool } = await player.chooseToCompare(trigger.player).forResult();
            if (bool) player.addTempSkill('hokshafuzhiyin_effect');
        },
        ai: {
            expose: 0.5,
            threaten: 2.1,
        },
        subSkill: {
            effect: {
                audio: 'hokshafuzhiyin',
                trigger: {
                    global: 'useCardBegin',
                },
                popup: false,
                charlotte: true,
                filter(event, player) {
                    if (event.player != _status.currentPhase) return false;
                    return (
                        player.getHistory('useSkill', (evt) => {
                            return evt.skill == 'hokshafuzhiyin_effect';
                        }).length < (player.hasSkill('hokshafuzhiyin_rewrite') ? 2 : 1)
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(function (card, player, target) {
                            const trigger = get.event().getTrigger();
                            return lib.filter.targetEnabled2(trigger.card, trigger.player, target);
                        })
                        .set('prompt', get.prompt('hokhuanshazhiling'))
                        .set('prompt2', `你可以为${get.translation(trigger.card)}重新指定目标`)
                        .set('selectTarget', trigger.targets.length ? [1, trigger.targets.length] : 1)
                        .set('ai', (target) => {
                            const player = get.player(),
                                trigger = get.event().getTrigger();
                            if (get.type(trigger.card) == 'equip') return 0;
                            return get.effect(target, trigger.card, trigger.player, player);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const targets = event.targets;
                    player.line(event.targets);
                    trigger.targets = targets;
                    game.log(player, '为', trigger.card, '重新指定了目标');
                },
            },
            rewrite: {
                charlotte: true,
            },
        },
    },
    hokhuanshazhiling: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'useCardToPlayered',
        },
        forced: true,
        filter(event, player) {
            return !player.getStorage('hokhuanshazhiling_used').includes(event.target);
        },
        logTarget: 'target',
        async content(event, trigger, player) {
            player.addTempSkill('hokhuanshazhiling_used', 'roundStart');
            player.markAuto('hokhuanshazhiling_used', [trigger.target]);
            player.addTempSkill('hokhuanshazhiling_effect');
            player.markAuto('hokhuanshazhiling_effect', [[trigger.card, trigger.target]]);
        },
        mod: {
            cardUsableTarget(card, player, target) {
                if (!player.getStorage('hokhuanshazhiling_used').includes(target)) return true;
            },
            targetInRange(card, player, target) {
                if (!player.getStorage('hokhuanshazhiling_used').includes(target)) return true;
            },
        },
        subSkill: {
            used: {
                charlotte: true,
            },
            effect: {
                trigger: {
                    source: 'damageBegin1',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    const storage = player.getStorage('hokhuanshazhiling_effect');
                    return storage.some((list) => list[0] == event.card && list[1] == event.player);
                },
                async content(event, trigger, player) {
                    const list = player.getStorage('hokhuanshazhiling_effect').find((list) => list[0] == trigger.card && list[1] == trigger.player);
                    player.unmarkAuto('hokhuanshazhiling_effect', list);
                    player.line(trigger.player);
                    game.log(player, '使用的', trigger.card, '对', trigger.player, '造成的伤害+1');
                    trigger.num++;
                },
            },
        },
    },
    hokxinwupangwu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill'],
        },
        xushiSkill: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill || skill == 'hokxinwupangwu') return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            return skill;
        },
        check(event, player) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            switch (skill) {
                case 'hokshafuzhiyin': {
                    if (!player.hasSkill('hokshafuzhiyin_effect')) return false;
                }
                case 'hokhuanshazhiling': {
                    if (
                        game.hasPlayer((target) => {
                            if (player.getStorage('hokhuanshazhiling_used').includes(target)) return false;
                            return player.hasCard(function (card) {
                                return player.canUse(card, target);
                            });
                        })
                    )
                        return false;
                }
                default: {
                    if (_status.currentPhase != player && player.isTempBanned('hokshafuzhiyin')) return false;
                }
            }
            return get.info('hokxinwupangwu').ai.combo.some((i) => player.hasSkill(i));
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            if (player.storage.hokhuanshazhiling_used) delete player.storage.hokhuanshazhiling_used;
            game.log(player, '重置了', `#g【${get.translation('hokhuanshazhiling')}】`);
            game.log(player, '修改了', `#g【${get.translation('hokshafuzhiyin')}】`);
            player.addTempSkill('hokshafuzhiyin_rewrite', 'roundStart');
        },
        ai: {
            combo: ['hokshafuzhiyin', 'hokhuanshazhiling'],
        },
    },
    hokjixiakeji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokjixiakeji_zhunbei', 'hokjixiakeji_jieshu'],
        subSkill: {
            zhunbei: {
                trigger: {
                    player: 'phaseZhunbeiBegin',
                },
                forced: true,
                content() { },
            },
            jieshu: {
                trigger: {
                    player: 'phaseJieshuBegin',
                },
                forced: true,
                content() { },
            },
        },
    },
    hokzhushouyuanchi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokqianglishouna: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokchirehuntian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (
                !player.countCards('h') ||
                player.countCards('h', function (card) {
                    return !card.hasGaintag('igniteCards');
                })
            )
                return false;
            return get
                .inpileVCardList((info) => {
                    const name = info[2],
                        type = get.type(name),
                        infox = get.info({ name: name });
                    return ['basic', 'trick'].includes(type) && get.tag({ name: name }, 'damage');
                })
                .filter((card) => !player.hasHistory('useCard', (evt) => evt.card.name == card[2]) && event.filterCard({ name: card[2], nature: card[3] }, player, event)).length;
        },
        chooseButton: {
            dialog(event, player) {
                const list = get
                    .inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return ['basic', 'trick'].includes(type) && get.tag({ name: name }, 'damage');
                    })
                    .filter((card) => !player.hasHistory('useCard', (evt) => evt.card.name == card[2]) && event.filterCard({ name: card[2], nature: card[3] }, player, event));
                const dialog = ui.create.dialog('炽热浑天', [list, 'vcard']);
                dialog.direct = true;
                return dialog;
            },
            filter(button, player) {
                var evt = _status.event.parent;
                return evt.filterCard(
                    {
                        name: button.link[2],
                    },
                    player,
                    evt
                );
            },
            check(button) {
                return _status.event.player.getUseValue({
                    name: button.link[2],
                });
            },
            backup(links) {
                return {
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    filterCard(card) {
                        return card.hasGaintag('igniteCards');
                    },
                    selectCard: -1,
                    lose: false,
                    discard: false,
                    delay: false,
                    async precontent(event, trigger, player) {
                        await player.recast(event.result.cards);
                    },
                };
            },
            prompt(links) {
                return '你可以重铸所有被点燃的手牌以视为使用' + get.translation(links[0][2]) + get.translation(links[0][3]);
            },
        },
        hiddenCard(player, name) {
            if (player.getHistory('useCard', (evt) => evt.card.name == name).length) return false;
            return player.getCards('h').every((card) => card.hasGaintag('igniteCards'));
        },
        mod: {
            aiOrder(player, card, num) {
                if (get.itemtype(card) == 'card' && card.hasGaintag('igniteCards')) return num - 2;
            },
        },
        ai: {
            respondSha: true,
            skillTagFilter(player, tag, arg) {
                if (tag == 'respondSha' && arg != 'use') return false;
                return get.info('hokchirehuntian').hiddenCard(player, 'sha');
            },
            order: 1,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        group: 'hokchirehuntian_ignite',
        subSkill: {
            backup: {},
            ignite: {
                trigger: {
                    player: 'useCardAfter',
                },
                filter(event, player) {
                    if (
                        !player.countCards('h') ||
                        !player.countCards('h', function (card) {
                            return !card.hasGaintag('igniteCards');
                        })
                    )
                        return false;
                    return get.tag(event.card, 'damage') && !game.hasPlayer2((target) => target.hasHistory('damage', (evt) => evt.card == event.card));
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard('h', function (card) {
                            return !card.hasGaintag('igniteCards');
                        })
                        .set('selectCard', [1, player.getHp()])
                        .set('prompt', `###${get.prompt(event.name.slice(0, -5))}###你可以点燃至多${get.cnNumber(player.getHp())}张手牌`)
                        .set('ai', (card) => {
                            const player = get.player();
                            if (_status.currentPhase && _status.currentPhase != player) return 0;
                            if (get.type(card) == 'equip' && player.canEquip(card)) return 0;
                            return player.getUseValue(card);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    await player.igniteCards(event.cards);
                },
            },
        },
    },
    hokfeidanyuanxi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'damageEnd',
        },
        xushiSkill: true,
        filter(event, player) {
            const cards = get.info('hokfeidanyuanxi').getCards(),
                targets = game.filterPlayer((target) => target.hasHistory('damage'));
            return cards.some(function (card) {
                return targets.some((target) => player.canUse(card, target, true, true));
            });
        },
        getCards() {
            const cards = [];
            game.checkGlobalHistory('cardMove', (evt) => {
                if (evt.name != 'cardsDiscard' && (evt.name != 'lose' || evt.position != ui.discardPile)) return;
                cards.addArray(evt.cards.filter((card) => get.position(card, true) == 'd'));
            });
            return cards;
        },
        check(event, player) {
            const cards = get.info('hokfeidanyuanxi').getCards(),
                targets = game.filterPlayer((target) => target.hasHistory('damage'));
            if (!targets.length) return false;
            return (
                cards.filter(function (card) {
                    return targets.some((target) => player.canUse(card, target, true, true));
                }).length >= 2
            );
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            const centralCards = get.info(event.name).getCards();
            do {
                const targets = game.filterPlayer((target) => target.hasHistory('damage'));
                if (!targets.length) break;
                const cards = centralCards.filter(function (card) {
                    return targets.some((target) => player.canUse(card, target, true, true));
                });
                if (!cards.length) break;
                const { bool, links } = await player
                    .chooseButton([`###${get.translation(event.name)}###你可以使用中央区的任意张牌(仅能指定本回合受到过伤害的角色)`, cards])
                    .set('ai', (button) => {
                        const player = get.player();
                        return player.getUseValue(button.link, null, true); //QQQ
                    })
                    .forResult();
                if (bool) {
                    centralCards.removeArray(links);
                    const result = await player.chooseUseTarget(links[0], targets).forResult();
                    if (!result.bool) break;
                } else break;
            } while (centralCards.length);
        },
    },
    hokzhujing: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        forced: true,
        popup: false,
        sealSkill: true,
        filter(event, player, name) {
            if (['global', 'equip'].includes(event.type)) return false;
            let skill = get.sourceSkillFor(event);
            if (!skill) return false;
            let info = get.info(skill);
            if (info.charlotte || info.equipSkill) return false;
            return (
                info.xushiSkill &&
                !game.hasPlayer(function (target) {
                    return target != player && target.hasSkill(skill);
                })
            );
        },
        getXushi(player) {
            return player.getSkills(null, false, false).filter(function (skill) {
                var info = get.info(skill);
                return info && !info.charlotte && info.xushiSkill;
            });
        },
        async content(event, trigger, player) {
            let skill = trigger.sourceSkill || trigger.skill,
                info = get.info(skill);
            while (true) {
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
            }
            get.info('hoktianlai').restoreSkill(event, trigger, player);
            if (game.countPlayer() < 2) return;
            const { bool, targets } = await player
                .chooseTarget(true)
                .set('skillName', skill)
                .set('prompt', `令一名其他角色获得<${get.skillTipsInfo(get.translation(skill), get.plainText(get.skillInfoTranslation(skill)))}>`)
                .set('filterTarget', (card, player, target) => {
                    return target != player && !target.hasSkill(get.event('skillName'));
                })
                .set('ai', (target) => {
                    const player = get.player();
                    return get.attitude(player, target);
                })
                .forResult();
            if (bool) {
                const target = targets[0];
                player.line(target);
                target.addSkills(skill);
            }
        },
        group: 'hokzhujing_use',
        subSkill: {
            use: {
                audio: 'hokzhujing',
                enable: 'chooseToUse',
                filter(event, player) {
                    if (
                        !game.hasPlayer((target) => {
                            return get
                                .info('hokzhujing')
                                .getXushi(target)
                                .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                        })
                    )
                        return false;
                    return get
                        .inpileVCardList((info) => {
                            const name = info[2],
                                type = get.type(name),
                                infox = get.info({ name: name });
                            return name == 'sha' || (type == 'trick' && !get.tag({ name: name }, 'damage'));
                        })
                        .some((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                },
                chooseButton: {
                    dialog(event, player) {
                        const list = get
                            .inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                return name == 'sha' || (type == 'trick' && !get.tag({ name: name }, 'damage'));
                            })
                            .filter((card) => event.filterCard({ name: card[2], nature: card[3] }, player, event));
                        const dialog = ui.create.dialog('铸镜', [list, 'vcard']);
                        dialog.direct = true;
                        return dialog;
                    },
                    check(button) {
                        const player = get.player();
                        return player.getUseValue({
                            name: button.link[2],
                            nature: button.link[3],
                        });
                    },
                    backup(links, player) {
                        return {
                            viewAs: {
                                name: links[0][2],
                                nature: links[0][3],
                            },
                            filterCard: () => false,
                            selectCard: -1,
                            async precontent(event, trigger, player) {
                                if (
                                    !game.hasPlayer((target) => {
                                        return get
                                            .info('hokzhujing')
                                            .getXushi(target)
                                            .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                                    })
                                ) {
                                    event.parent.cancel();
                                    event.parent.goto(0);
                                    event.getParent(2).goto(0);
                                    return;
                                }
                                const { bool, targets } = await player
                                    .chooseTarget(true)
                                    .set('prompt', `令一名角色失去一个你拥有的蓄势技以视为使用一张【${get.translation(event.result.card)}】`)
                                    .set('filterTarget', (card, player, target) => {
                                        return get
                                            .info('hokzhujing')
                                            .getXushi(target)
                                            .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                                    })
                                    .set('ai', (target) => {
                                        const player = get.player();
                                        let att = Math.max(8, get.attitude(player, target));
                                        return 9 - att;
                                    })
                                    .forResult();
                                if (bool) {
                                    const target = targets[0];
                                    const skills = get
                                        .info('hokzhujing')
                                        .getXushi(target)
                                        .filter((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                                    if (!skills.length) return;
                                    if (skills.length == 1) {
                                        await target.removeSkills(skills);
                                    } else {
                                        const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                                        const mbdialog = new ui.create.mobileDialog(event, 'hokzhujing');
                                        mbdialog.dialog.classList.add('changeSkill');
                                        mbdialog.dialog.add([list, 'textbutton']);
                                        mbdialog.addTip(`你发动了<span style='color: #a4dfd5'>铸镜</span>,令${get.translation(target)}失去一个蓄势技`);
                                        const { result } = await player
                                            .chooseButton(event.dialog, true)
                                            .set('closeDialog', true)
                                            .set('ai', function (button) {
                                                const player = get.player();
                                                const skill = button.link;
                                                switch (skill) {
                                                    case 'hokkaifeng':
                                                        return 1.2;
                                                    case 'hokliekong':
                                                        return 1.25;
                                                    default:
                                                        return 1 + Math.random();
                                                }
                                            });
                                        if (result.bool) {
                                            await target.removeSkills(result.links);
                                        }
                                    }
                                } else {
                                    event.parent.cancel();
                                    event.parent.goto(0);
                                    event.getParent(2).goto(0);
                                }
                            },
                        };
                    },
                    prompt(links) {
                        return '你可以令一名角色失去一个你拥有的蓄势技以视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
                    },
                },
                hiddenCard(player, name) {
                    if (
                        !game.hasPlayer((target) => {
                            return get
                                .info('hokzhujing')
                                .getXushi(target)
                                .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                        })
                    )
                        return false;
                    const list = get.inpileVCardList((info) => {
                        const name = info[2],
                            type = get.type(name),
                            infox = get.info({ name: name });
                        return name == 'sha' || (type == 'trick' && !get.tag({ name: name }, 'damage'));
                    });
                    return list && list.map((info) => info[2]).includes(name);
                },
                ai: {
                    respondSha: true,
                    skillTagFilter(player, tag, arg) {
                        if (arg != 'use') return false;
                        if (
                            !game.hasPlayer((target) => {
                                return get
                                    .info('hokzhujing')
                                    .getXushi(target)
                                    .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                            })
                        )
                            return false;
                    },
                    order() {
                        const player = get.player(),
                            event = get.event(),
                            list = get.inpileVCardList((info) => {
                                const name = info[2],
                                    type = get.type(name),
                                    infox = get.info({ name: name });
                                return name == 'sha' || (type == 'trick' && !get.tag({ name: name }, 'damage'));
                            });
                        return Math.max(...list.map((info) => get.order({ name: info[2] }))) - 1.2;
                    },
                    result: {
                        player(player) {
                            const hasMirror = game.hasPlayer((target) => {
                                if (target == player) return false;
                                return get
                                    .info('hokzhujing')
                                    .getXushi(target)
                                    .some((skill) => get.info('hokzhujing').getXushi(player).includes(skill));
                            });
                            if (hasMirror) return 2.2;
                            if (
                                player.isPhaseUsing() &&
                                player.hasCard(function (card) {
                                    return player.hasUseTarget(card);
                                })
                            )
                                return 0;
                            return 1;
                        },
                    },
                },
            },
            use_backup: {},
        },
    },
    hokkaifeng: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['shaMiss', 'eventNeutralized'],
        },
        popup: false,
        xushiSkill: true,
        filter(event, player) {
            return event.type == 'card';
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)))
                .set('ai', (target) => {
                    const player = get.player();
                    if (
                        player.hasSkill('hokzhujing') &&
                        game.hasPlayer((targetx) => {
                            return targetx != player && targetx.hasSkill('hokliekong');
                        })
                    )
                        return 0;
                    return get.damageEffect(target, player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.awakenSkill(event.name);
            await target.damage();
        },
    },
    hokliekong: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
        },
        xushiSkill: true,
        filter(event, player) {
            return event.card && get.tag(event.card, 'damage');
        },
        check(event, player) {
            if (
                player.hasSkill('hokzhujing') &&
                game.hasPlayer((target) => {
                    return target != player && target.hasSkill('hokliekong');
                })
            )
                return false;
            return true;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            await player.chooseDrawRecover(true);
        },
    },
    hokxuanyongzongjiang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokshanlinqiyuan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (!event.hokshanlinqiyuan) return false;
            return event.hokshanlinqiyuan.some((info) =>
                event.filterCard(
                    {
                        name: info[2],
                        nature: info[3],
                    },
                    player,
                    event
                )
            );
        },
        onChooseToUse(event) {
            if (!event.hokshanlinqiyuan && !game.online) {
                var str = '';
                const player = event.player;
                const list = player
                    .getCards('h', (card) => {
                        return get.type(card) == 'special_character';
                    })
                    .map((card) => card.name.slice(17))
                    .map((name) => {
                        return lib.character[name][3];
                    })
                    .flat()
                    .forEach((skill) => {
                        var info = get.info(skill);
                        if (!info || info.charlotte) return;
                        var translation = get.skillInfoTranslation(skill, player);
                        str += translation;
                    });
                event.set('hokshanlinqiyuan', lib.skill.hokshanlinqiyuan.getInclusion(str, null, event.player));
            }
        },
        getInclusion(str, checkCard, player) {
            let list = [];
            const names = Object.keys(lib.card);
            for (const name of names) {
                let type = get.type(name);
                if (!['basic', 'trick'].includes(type)) continue;
                const reg = `【${get.translation(name)}】`;
                if (name == 'sha') {
                    if (str.includes(reg)) {
                        if (checkCard && checkCard.name == name) return true;
                        list.push([type, '', name]);
                    }
                    for (let nature of lib.inpile_nature) {
                        const reg1 = `【${get.translation(nature) + get.translation(name)}】`,
                            reg2 = `${get.translation(nature)}【${get.translation(name)}】`;
                        if (str.includes(reg1) || str.includes(reg2)) {
                            if (checkCard && checkCard.name == name && checkCard.nature == nature) return true;
                            list.push([type, '', name, nature]);
                        }
                    }
                } else {
                    if (!str.includes(reg)) continue;
                    if (checkCard && checkCard.name == name) return true;
                    list.push([type, '', name]);
                }
            }
            if (checkCard) return false;
            return list;
        },
        chooseButton: {
            dialog(event, player) {
                var list = event.hokshanlinqiyuan.filter((info) => {
                    return event.filterCard(
                        {
                            name: info[2],
                            nature: info[3],
                        },
                        player,
                        event
                    );
                });
                return ui.create.dialog('针锋', [list, 'vcard']);
            },
            filter(button, player) {
                return _status.event.parent.filterCard(
                    {
                        name: button.link[2],
                        nature: button.link[3],
                    },
                    player,
                    _status.event.parent
                );
            },
            check(button) {
                var player = _status.event.player;
                var card = {
                    name: button.link[2],
                    nature: button.link[3],
                    storage: { hokshanlinqiyuan: true },
                };
                var eff = player.getUseValue(card);
                if (['wugu', 'zhulu_card', 'yiyi', 'lulitongxin', 'lianjunshengyan', 'diaohulishan'].includes(button.link[2])) eff /= 5;
                var info = get.info(card);
                if (info.toself) {
                    var str = player
                        .getSkills(null, false, false)
                        .map((skill) => {
                            var info = get.info(skill);
                            if (!info || info.charlotte) return;
                            return get.skillInfoTranslation(skill, player);
                        })
                        .join('\n');
                    if (lib.skill.hokshanlinqiyuan.getInclusion(str, card)) eff += get.damageEffect(player, player, player);
                }
                return eff;
            },
            backup(links, player) {
                return {
                    filterCard: () => false,
                    selectCard: -1,
                    popname: true,
                    viewAs: {
                        name: links[0][2],
                        nature: links[0][3],
                    },
                    async precontent(event, trigger, player) { },
                };
            },
            prompt(links, player) {
                return '视为使用一张' + (get.translation(links[0][3]) || '') + get.translation(links[0][2]);
            },
        },
        $createButton(item, type, position, noclick, node) {
            node = ui.create.buttonPresets.character(item, 'character', position, noclick);
            const info = lib.character[item];
            const skills = info[3].filter(function (skill) {
                var info = get.plainText(get.skillInfoTranslation(skill));
                var list = get.skillCategoriesOf(skill);
                list.remove('锁定技');
                return list.length == 0;
            });
            if (skills.length) {
                const skillstr = skills.map((i) => `[${get.translation(i)}]`).join('<br>');
                const skillnode = ui.create.caption(`<div class="text" data-nature=${get.groupnature(info[1], 'raw')}m style="font-family: ${lib.config.name_font || 'xinwei'},xinwei">${skillstr}</div>`, node);
                skillnode.style.left = '2px';
                skillnode.style.bottom = '2px';
            }
            node._customintro = function (uiintro, evt) {
                const character = node.link,
                    characterInfo = get.character(node.link);
                let capt = get.translation(character);
                uiintro.add(capt);
                if (lib.characterTitle[node.link]) {
                    uiintro.addText(get.colorspan(lib.characterTitle[node.link]));
                }
                for (let i = 0; i < skills.length; i++) {
                    if (lib.translate[skills[i] + '_info']) {
                        let translation = lib.translate[skills[i] + '_ab'] || get.translation(skills[i]).slice(0, 2);
                        if (lib.skill[skills[i]] && lib.skill[skills[i]].nobracket) {
                            uiintro.add("<div><div class='skill'>" + get.translation(skills[i]) + '</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                        } else {
                            uiintro.add("<div><div class='skill'>【" + translation + '】</div><div>' + get.skillInfoTranslation(skills[i]) + '</div></div>');
                        }
                        if (lib.translate[skills[i] + '_append']) {
                            uiintro._place_text = uiintro.add("<div class='text'>" + lib.translate[skills[i] + '_append'] + '</div>');
                        }
                    }
                }
            };
            return node;
        },
        video(player, info) {
            for (var name of info[0]) {
                lib.skill.hokshanlinqiyuan.createCard(name);
            }
        },
        createCard(name) {
            if (!_status.postReconnect.hokshanlinqiyuan)
                _status.postReconnect.hokshanlinqiyuan = [
                    function (list) {
                        for (var name of list) lib.skill.hokshanlinqiyuan.createCard(name);
                    },
                    [],
                ];

            _status.postReconnect.hokshanlinqiyuan[1].add(name);
            if (!lib.card['hokshanlinqiyuan_' + name]) {
                if (lib.translate[name + '_ab']) lib.translate['hokshanlinqiyuan_' + name] = lib.translate[name + '_ab'];
                else lib.translate['hokshanlinqiyuan_' + name] = lib.translate[name];
                var info = lib.character[name];
                var card = {
                    fullimage: true,
                    image: 'character:' + name,
                    type: 'special_character',
                    enable: true,
                    selectTarget: -1,
                    filterCard(card, player, target) {
                        if (player != target) return false;
                        return target.canEquip(card, true);
                    },
                    modTarget: true,
                    allowMultiple: false,
                    content() { },
                    ai: {},
                    skills: [],
                };
                var skills = info[3].filter(function (skill) {
                    var info = get.skillInfoTranslation(skill);
                    var list = get.skillCategoriesOf(skill);
                    list.remove('锁定技');
                    return list.length == 0;
                });
                var str = '锁定技';
                if (skills.length) {
                    card.skills.addArray(skills);
                    str += '你视为拥有技能';
                    for (var skill of skills) {
                        str += '〖' + get.translation(skill) + '〗';
                        str += '、';
                    }
                    str = str.slice(0, str.length - 1);
                    str += ';';
                }
                str += '此牌离开你的区域后,改为放生';
                lib.translate['hokshanlinqiyuan_' + name + '_info'] = str;
                var append = '';
                if (skills.length) {
                    for (var skill of skills) {
                        if (lib.skill[skill].nobracket) {
                            append += "<div class='skill'>" + get.translation(skill) + "</div><div><span style='font-family: yuanli'>" + get.skillInfoTranslation(skill) + '</span></div><br><br>';
                        } else {
                            var translation = lib.translate[skill + '_ab'] || get.translation(skill).slice(0, 2);
                            append += "<div class='skill'>【" + translation + "】</div><div><span style='font-family: yuanli'>" + get.skillInfoTranslation(skill) + '</span></div><br><br>';
                        }
                    }
                    str = str.slice(0, str.length - 8);
                }
                lib.translate['hokshanlinqiyuan_' + name + '_append'] = append;
                lib.card['hokshanlinqiyuan_' + name] = card;
            }
        },
        characters: [
            ['guanyu', 'zhangfei', 'zhaoyun', 'machao', 're_huangzhong', 'zhangliao', 'yuejin', 'yujin', 'zhanghe', 're_xuhuang', 'zhouyu', 'luxun', 're_lusu', 'lvmeng'],
            ['re_guanyu', 're_zhangfei', 're_zhaoyun', 're_machao', 'ol_huangzhong', 're_zhangliao', 'yuejin', 're_yujin', 're_zhanghe', 'ol_xuhuang', 're_zhouyu', 're_luxun', 'ol_lusu', 're_lvmeng'],
            ['sb_guanyu', 'sb_zhangfei', 'sb_zhaoyun', 'sb_machao', 'sb_huangzhong', 'sp_zhangliao', 'yuejin', 'sb_yujin', 'sb_zhanghe', 'sb_xuhuang', 'sb_zhouyu', 'wu_luxun', 'dc_sb_lusu', 'sb_lvmeng'],
            ['shen_guanyu', 'shen_zhangfei', 'shen_zhaoyun', 'shen_machao', 'shen_huangzhong', 'shen_zhangliao', 'yuejin', 'sb_yujin', 'sb_zhanghe', 'sb_xuhuang', 'shen_zhouyu', 'shen_luxun', 'shen_lusu', 'shen_lvmeng'],
        ],

        init(player, skill) {
            if (!player.storage[skill]) player.setStorage(skill, get.info(skill).characters[0]);
            game.addGlobalSkill('hokshanlinqiyuan_destroy');
        },
        mod: {
            ignoredHandcard(card, player) {
                if (get.type(card) == 'special_character') return true;
            },
            cardDiscardable(card, player, name) {
                if (name == 'phaseDiscard' && get.type(card) == 'special_character') return false;
            },
        },
        group: ['hokshanlinqiyuan_init', 'hokshanlinqiyuan_skills', 'hokshanlinqiyuan_fix'],
        subSkill: {
            init: {
                audio: 'hokshanlinqiyuan',
                trigger: {
                    global: 'gameDrawAfter',
                },
                forced: true,
                filter(event, player) {
                    return player.countCards('h');
                },
                async content(event, trigger, player) {
                    const hs = player.getCards('h', (card) => {
                        return get.type(card) != 'special_character';
                    });
                    for (let i = 0; i < hs.length; i++) {
                        hs[i].discard(false);
                    }
                    const list = player
                        .getStorage('hokshanlinqiyuan')
                        .filter((character) => {
                            return lib.character.hasOwnProperty(character);
                        })
                        .randomGets(hs.length);
                    game.broadcastAll(
                        function (player, list) {
                            player.tempname.addArray(list);
                            for (const name of list) lib.skill.hokshanlinqiyuan.createCard(name);
                        },
                        player,
                        list
                    );
                    const cards = list.map(function (name) {
                        return game.createCard('hokshanlinqiyuan_' + name, null, get.infoMaxHp(lib.character[name][2]));
                    });
                    player.directgain(cards);
                    player._start_cards = cards;
                },
            },
            skills: {
                audio: 'hokshanlinqiyuan',
                trigger: {
                    player: 'loseAfter',
                    global: ['equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                silent: true,
                charlotte: true,
                firstDo: true,
                filter(event, player) {
                    return event.getl(player)?.hs.some((card) => get.type(card) == 'special_character');
                },
                async content(event, trigger, player) {
                    player.removeAdditionalSkill('hokshanlinqiyuan');
                    const cards = player.getCards('h', { type: 'special_character' }),
                        skills = [];
                    for (const card of cards) {
                        if (get.info(card).skills) skills.addArray(get.info(card).skills);
                    }
                    if (skills.length) player.addAdditionalSkill('hokshanlinqiyuan', skills);
                },
            },
            destroy: {
                trigger: {
                    player: 'loseBegin',
                },
                forced: true,
                popup: false,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return event.cards && event.cards.some((card) => card.name.indexOf('hokshanlinqiyuan_') == 0);
                },
                async content(event, trigger, player) {
                    for (var card of trigger.cards) {
                        if (card.name.indexOf('hokshanlinqiyuan_') == 0) {
                            card._destroy = true;
                            game.log(card, '被放回武将牌堆');
                            var name = card.name.slice(17);
                            player.getHistory('custom').push({ hokshanlinqiyuan: name });
                            const list = (player.getStorage('hokshanlinqiyuan').index = list.indexOf(name)),
                                index2 = Math.min(3, player.getAllHistory('custom', (evt) => evt.hokshanlinqiyuan == name).length),
                                namex = get.info('hokshanlinqiyuan').characters[index2][index];
                            if (namex) {
                                player.storage.hokshanlinqiyuan[index] = namex;
                            }
                            if (player.tempname && player.tempname.includes(name)) {
                                game.broadcastAll(
                                    (player, name) => {
                                        player.tempname.remove(name);
                                    },
                                    player,
                                    name
                                );
                            }
                            if (lib.character[name]) _status.characterlist.add(name);
                        }
                    }
                },
            },
            fix: {
                trigger: {
                    player: ['drawBegin', 'gainBegin'],
                },
                forced: true,
                lastDo: true,
                charlotte: true,
                filter(event, player) {
                    if (event.name == 'draw') return true;
                    return event.parent.name != 'hokshanlinqiyuan_fix';
                },
                async content(event, trigger, player) {
                    trigger.cancel(null, null, 'notrigger');
                    if (trigger.name == 'draw') {
                        var list = player
                            .getStorage('hokshanlinqiyuan')
                            .filter((character) => {
                                if (!lib.character.hasOwnProperty(character)) return false;
                                return !player.countCards('h', function (card) {
                                    return get.type(card) == 'special_character' && card.name.includes(character);
                                });
                            })
                            .randomGets(trigger.num);
                        game.broadcastAll(
                            function (player, list) {
                                player.tempname.addArray(list);
                                for (var name of list) lib.skill.hokshanlinqiyuan.createCard(name);
                            },
                            player,
                            list
                        );
                        var cards = list.map(function (name) {
                            var card = game.createCard('hokshanlinqiyuan_' + name, null, get.infoMaxHp(lib.character[name][2]));
                            return card;
                        });
                        player.gain(cards);
                    } else {
                        game.broadcastAll(function () {
                            if (trigger.cards && trigger.cards.length) {
                                game.cardsGotoOrdering(trigger.cards);
                                ui.updatehl();
                            }
                        });
                        var list = player
                            .getStorage('hokshanlinqiyuan')
                            .filter((character) => {
                                if (!lib.character.hasOwnProperty(character)) return false;
                                return !player.countCards('h', function (card) {
                                    return get.type(card) == 'special_character' && card.name.includes(character);
                                });
                            })
                            .randomGets(trigger.cards.length);
                        game.broadcastAll(
                            function (player, list) {
                                player.tempname.addArray(list);
                                for (var name of list) lib.skill.hokshanlinqiyuan.createCard(name);
                            },
                            player,
                            list
                        );
                        var cards = list.map(function (name) {
                            var card = game.createCard('hokshanlinqiyuan_' + name, null, get.infoMaxHp(lib.character[name][2]));
                            return card;
                        });
                        player.gain(cards);
                    }
                },
            },
        },
    },
    hokshanlinqiyuan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: '_recastingBegin',
        },
        forced: true,
        firstDo: true,
        async content(event, trigger, player) {
            trigger.setContent(async (event, trigger, player) => {
                await player.loseToDiscardpile(event.cards);
                await player.draw(2);
            });
        },
        mod: {
            cardRecastable(card, player) {
                return true;
            },
        },
        init(player, skill) {
            if (_status._recasting_prompt) return;
            _status._recasting_prompt = lib.skill._recasting.prompt;
            lib.skill._recasting.prompt = () => {
                const player = get.player();
                if (player.hasSkill('hokshanlinqiyuan')) return '将要重铸的牌置入弃牌堆并摸两张牌';
                return '将要重铸的牌置入弃牌堆并摸一张牌';
            };
        },
    },
    hokqianjinpenquan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokpokongguangjian: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokshoulie: {
        derivation: 'qianxing',
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['gainAfter', 'loseAsyncAfter'],
        },
        forced: true,
        filter(event, player) {
            const cards = event.getg(player);
            if (!cards?.length) return false;
            return game.hasPlayer((target) => {
                if (target == player) return false;
                const evt = event.getl(target);
                if (evt && evt.cards2 && evt.cards2.length) return true;
                return false;
            });
        },
        async content(event, trigger, player) {
            const cards = trigger.getg(player);
            player.addGaintag(cards, 'hokshoulie_tag');
        },
        mod: {
            inRange(from, to) {
                if (to.isDamaged()) return true;
            },
        },
        group: 'hokshoulie_use',
        subSkill: {
            use: {
                enable: 'chooseToUse',
                viewAs: {
                    name: 'sha',
                    nature: 'stab',
                },
                viewAsFilter(player) {
                    if (
                        !player.countCards('h', (card) => {
                            return card.hasGaintag('hokshoulie_tag');
                        })
                    )
                        return false;
                },
                filterCard(card) {
                    return card.hasGaintag('hokshoulie_tag');
                },
                check(card) {
                    return 7 - get.value(card);
                },
            },
        },
    },
    hokpolang: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseUseBegin',
        },
        forced: true,
        async content(event, trigger, player) {
            const targets = game.filterPlayer((i) => player.inRange(i)).sortBySeat(player);
            for (const target of targets) {
                await target.loseHp();
            }
            const targets2 = game
                .getGlobalHistory('changeHp', function (evt) {
                    return evt.parent.name == 'loseHp' && evt.getParent(2).name == event.name;
                })
                .map((evt) => evt.player);
            targets2.sortBySeat(player);
            for (const target of targets2) {
                if (!target.countCards('he')) continue;
                const { bool } = await target
                    .chooseToGive('he', player)
                    .set('prompt', '是否交给' + get.translation(player) + '一张牌' + (target.isDamaged() ? '并回复1点体力' : '') + '？')
                    .set('sourcex', player)
                    .set('ai', (card) => {
                        const player = get.event('player'),
                            source = get.event('sourcex');
                        const att = get.attitude(player, source);
                        if (get.recoverEffect(player, player, player) <= 0) {
                            if (att <= 0) return -get.value(card);
                            return 0;
                        }
                        return 7 - get.value(card);
                    })
                    .forResult();
                if (bool) await target.recover();
            }
        },
    },
    hokchujue: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['shaMiss', 'eventNeutralized'],
        },
        popup: false,
        filter(event, player) {
            if (event.type != 'card' || !event.target.isIn()) return false;
            return player.countCards('he') > 2;
        },
        async cost(event, trigger, player) {
            const target = trigger.target;
            event.result = await player
                .chooseCard('he', 2, get.prompt2(event.name.slice(0, -5), target), (card) => {
                    const player = get.player();
                    const trigger = get.event().getTrigger();
                    if (get.type(card) == get.type(trigger.card)) return false;
                    return player.canRecast(card);
                })
                .set('complexCard', true)
                .set('ai', (card) => {
                    const player = get.player();
                    const trigger = get.event().getTrigger();
                    const target = trigger.target;
                    if (get.attitude(player, target) < 0) {
                        if (player.needsToDiscard()) return 15 - get.value(card);
                        if (get.tag(trigger.card, 'damage')) {
                            const damage_num = trigger.baseDamage + trigger.extraDamage;
                            if (damage_num >= Math.min(2, trigger.target.getHp())) return 8 - get.value(card);
                        }
                        return 5 - get.value(card);
                    }
                    return -1;
                })
                .forResult();
        },
        async content(event, trigger, player) {
            await player.recast(event.cards);
            if (event.triggername == 'shaMiss') {
                trigger.untrigger();
                trigger.trigger('shaHit');
                trigger._result.bool = false;
                trigger._result.result = null;
            } else {
                trigger.unneutralize();
            }
        },
    },
    hokleitingwanjun: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokjinglingwubu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['useCardAfter', 'respondAfter'],
        },
        forced: true,
        filter(event, player) {
            return event._hokjinglingwubu;
        },
        async content(event, trigger, player) {
            const ordinaryCard = trigger.cards;
            if (!ordinaryCard.length) return;
            if (trigger.name == 'respond') {
                if (player.hasUseTarget(ordinaryCard[0])) {
                    player.chooseUseTarget(ordinaryCard[0], true);
                }
            } else {
                await player.respond(ordinaryCard);
            }
            await player.draw();
        },
        intro: {
            markcount(storage, player) {
                return `${player.countMark('hokjinglingwubu_use') % 3}/${player.countMark('hokjinglingwubu_respond') % 3}`;
            },
            content(storage, player) {
                return `${player.countMark('hokjinglingwubu_use') % 3}/${player.countMark('hokjinglingwubu_respond') % 3}`;
            },
        },
        group: ['hokjinglingwubu_use', 'hokjinglingwubu_respond'],
        subSkill: {
            use: {
                audio: 'hokjinglingwubu',
                trigger: {
                    player: 'useCardAfter',
                },
                forced: true,
                charlotte: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    return event.cards && event.cards.length;
                },
                async content(event, trigger, player) {
                    player.addMark('hokjinglingwubu_use', 1, false);
                    player.markSkill('hokjinglingwubu');
                    player.addTip('hokjinglingwubu', `使用${player.countMark('hokjinglingwubu_use') % 3}/打出${player.countMark('hokjinglingwubu_respond') % 3}`);
                    if (player.countMark('hokjinglingwubu_use') % 3 === 0) trigger._hokjinglingwubu = true;
                },
            },
            respond: {
                audio: 'hokjinglingwubu',
                trigger: {
                    player: 'respondAfter',
                },
                forced: true,
                charlotte: true,
                popup: false,
                firstDo: true,
                filter(event, player) {
                    return event.cards && event.cards.length;
                },
                async content(event, trigger, player) {
                    player.addMark('hokjinglingwubu_respond', 1, false);
                    player.markSkill('hokjinglingwubu');
                    player.addTip('hokjinglingwubu', `使用${player.countMark('hokjinglingwubu_use') % 3}/打出${player.countMark('hokjinglingwubu_respond') % 3}`);
                    if (player.countMark('hokjinglingwubu_respond') % 3 === 0) trigger._hokjinglingwubu = true;
                },
            },
        },
    },
    hokyueguizhiwu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokyueguizhiwu_use', 'hokyueguizhiwu_judge'],
        subSkill: {
            use: {
                audio: 'hokyueguizhiwu',
                trigger: {
                    global: 'useCard',
                },
                popup: false,
                filter(event, player) {
                    return player.countCards('h', { type: get.type2(event.card) });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard('h', (card) => {
                            const player = get.player();
                            const trigger = _status.event.getTrigger();
                            if (get.type2(card) != get.type2(trigger.card)) return false;
                            const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            const player = get.player(),
                                trigger = _status.event.getTrigger();
                            if (get.attitude(player, trigger.player) >= 0) return 0;
                            return -trigger.player.getUseValue(card);
                        })
                        .set('prompt', `###${get.prompt(event.name.slice(0, -5), trigger.player)}###${get.translation(trigger.player)}的使用的${get.translation(trigger.card)}即将${'对' + get.translation(trigger.targets) || ''}生效,你可以打出一张手牌替换之`)
                        .forResult();
                },
                async content(event, trigger, player) {
                    const chooseCardResultCards = event.cards;
                    const next = player.respond(chooseCardResultCards, 'hokyueguizhiwu');
                    if (trigger.cards.filterInD().length) game.cardsDiscard(trigger.cards.filterInD());
                    trigger.card = chooseCardResultCards[0];
                    trigger.cards = [];
                    trigger.cards = chooseCardResultCards;
                    game.log(trigger.player, '的使用牌改为', chooseCardResultCards[0]);
                },
            },
            judge: {
                audio: 'hokyueguizhiwu',
                trigger: {
                    player: 'judge',
                },
                popup: false,
                filter(event, player) {
                    return player.countCards('h', { type: get.type2(event.card) });
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseCard('h', (card) => {
                            const player = get.player();
                            const trigger = _status.event.getTrigger();
                            if (get.type2(card) != get.type2(trigger.card)) return false;
                            const mod2 = game.checkMod(card, player, 'unchanged', 'cardEnabled2', player);
                            if (mod2 != 'unchanged') return mod2;
                            const mod = game.checkMod(card, player, 'unchanged', 'cardRespondable', player);
                            if (mod != 'unchanged') return mod;
                            return true;
                        })
                        .set('ai', function (card) {
                            const player = get.player();
                            const trigger = _status.event.getTrigger();
                            const judging = get.event('judging');
                            const result = trigger.judge(card) - trigger.judge(judging);
                            const attitude = get.attitude(player, trigger.player);
                            if (attitude == 0 || result == 0) return 0;
                            if (attitude > 0) {
                                return result - get.value(card) / 2;
                            } else {
                                return -result - get.value(card) / 2;
                            }
                        })
                        .set('prompt', `###${get.prompt(event.name.slice(0, -5), trigger.player)}###${get.translation(trigger.player)}的${trigger.judgestr || ''}判定为${get.translation(trigger.player.judging[0])},你可以打出一张手牌替换之`)
                        .set('judging', trigger.player.judging[0])
                        .forResult();
                },
                async content(event, trigger, player) {
                    const chooseCardResultCards = event.cost_data.cards;
                    player.respond(chooseCardResultCards, 'hokyueguizhiwu', 'highlight', 'noOrdering');
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
                    trigger.player.judging[0] = chooseCardResultCards[0];
                    trigger.orderingCards.addArray(chooseCardResultCards);
                    game.log(trigger.player, '的判定牌改为', chooseCardResultCards[0]);
                    game.asyncDelay(2);
                },
            },
        },
    },
    hokqiangyi: {
        audio: 'ext:王者荣耀/audio:2',
    },
    hoklunhuizhiyin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        getList: ['hokjinlanbaoyi', 'hokjinguzhizhou', 'hokjiuhuanzhizhang'],
        enable: 'phaseUse',
        filter(event, player) {
            return player.countCards('hes', (card) => get.info('hoklunhuizhiyin').filterCard(card));
        },
        filterCard(card) {
            return get.info('hoklunhuizhiyin').getList.includes(card.name);
        },
        check(card) {
            return 6 - get.value(card);
        },
        position: 'hes',
        filterTarget(card, player, target) {
            return player != target;
        },
        lose: false,
        discard: false,
        delay: false,
        prompt: '出牌阶段,你可以将一张【锦襕宝衣】、【紧箍之咒】或【九环之杖】赠予一名其他角色',
        async content(event, trigger, player) {
            await player.gift(event.cards, event.targets[0]);
        },
        ai: {
            order: 4,
            result: {
                player(player, target) {
                    const giftEffects = ui.selected.cards.map((value) => player.getGiftEffect(value, target));
                    const baseEffect = Math.min(3, giftEffects.reduce((previousValue, currentValue) => previousValue + currentValue, 0) / giftEffects.length);
                    const choices = ['damage', 'draw', 'discard', 'use'];
                    choices.removeArray(player.getStorage('minagi_peiquan_yukito'));
                    if (choices.length <= 0) return baseEffect;
                    return (
                        baseEffect +
                        Math.max(
                            ...choices.map((choice) => {
                                switch (choice) {
                                    case 'damage':
                                        return get.damageEffect(target, player, player);
                                    case 'draw':
                                        return 2 * get.effect(player, { name: 'draw' }, player, player);
                                    case 'discard':
                                        return get.effect(target, { name: 'guohe_copy2' }, player, player) * Math.min(1.6, target.countCards('he'));
                                    case 'use':
                                        return _status.event.getRand('minagi_peiquan') * 4;
                                }
                            })
                        )
                    );
                },
            },
        },
        group: ['hoklunhuizhiyin_init', 'hoklunhuizhiyin_damage'],
        subSkill: {
            init: {
                audio: 'hoklunhuizhiyin',
                trigger: {
                    global: 'phaseBefore',
                    player: 'enterGame',
                },
                forced: true,
                filter(event, player) {
                    return event.name != 'phase' || game.phaseNumber == 0;
                },
                async content(event, trigger, player) {
                    const cards = [],
                        suits = ['heart', 'spade', 'club'],
                        list = get.info('hoklunhuizhiyin').getList;
                    for (let i = 0; i < list.length; i++) {
                        const card = game.createCard2(list[i], suits[i], (i + 1) * 3);
                        if (card) cards.add(card);
                    }
                    if (cards.length) await player.gain(cards, 'gain2');
                },
            },
            damage: {
                audio: 'hoklunhuizhiyin',
                trigger: {
                    source: 'damageBefore',
                },
                forced: true,
                async content(event, trigger, player) {
                    trigger.source = null;
                    game.log(player, '造成的伤害视为无来源');
                },
            },
        },
    },
    hokjinlanbaoyi_skill: {
        equipSkill: true,
        trigger: {
            player: 'damageBegin3',
        },
        forced: true,
        filter(event, player) {
            if (player.hasSkillTag('unequip2')) return false;
            if (
                event.source &&
                event.source.hasSkillTag('unequip', false, {
                    name: event.card ? event.card.name : null,
                    target: player,
                    card: event.card,
                })
            )
                return false;
            return event.hasNature() || !event.source;
        },
        async content(event, trigger, player) {
            trigger.num--;
        },
    },
    hokjinguzhizhou_skill: {
        global: 'hokjinguzhizhou_skill_ai',
        equipSkill: true,
        trigger: {
            global: 'useCard',
        },
        forced: true,
        async content(event, trigger, player) {
            const id = player.playerid;
            const map = trigger.customArgs;
            if (!map[id]) map[id] = {};
            map[id].directHit2 = true;
        },
        mod: {
            wuxieJudgeEnabled: () => false,
            wuxieEnabled: () => false,
            cardRecastable: () => false,
            attackRange: () => 1,
            maxHandcardFinal: () => 1,
        },
        subSkill: {
            ai: {
                ai: {
                    directHit_ai: true,
                    skillTagFilter(player, tag, arg) {
                        if (!arg || !arg.target || !arg.target.hasSkill('hokjinguzhizhou_skill')) return false;
                    },
                },
            },
        },
    },
    hokjiuhuanzhizhang_skill: {
        equipSkill: true,
        trigger: {
            player: 'useCard',
        },
        forced: true,
        filter(event, player) {
            if (!get.tag(event.card, 'damage')) return false;
            return !player.hasAllHistory('sourceDamage', (evt) => evt.card && evt.card.name == event.card.name);
        }, //QQQ
        async content(event, trigger, player) {
            trigger.baseDamage++;
        },
    },
    hokzhuyufenghui: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'changeHpAfter',
        },
        filter(event, player) {
            if (!event.player.countGainableCards(player, 'h')) return false;
            return event.player.getHp() == 1;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.addTempSkill('hokzhuyufenghui_used', 'roundStart');
            player.markAuto('hokzhuyufenghui_used', [trigger.player]);
            player.addTempSkill('hokzhuyufenghui_lose');
            if (trigger.player.countGainableCards(player, 'h')) player.gainPlayerCard(trigger.player, 'h', true);
        },
        subSkill: {
            used: {
                charlotte: true,
            },
            lose: {
                trigger: {
                    global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    return game.hasPlayer(function (target) {
                        if (!event.getParent('hokzhuyufenghui', true)) return false;
                        let evt = event.getl(target);
                        return evt && evt.hs && evt.hs.length && !target.countCards('h');
                    });
                },
                async content(event, trigger, player) {
                    game.trySkillAudio('hokzhuyufenghui', player);
                    player.draw(2);
                    player.restoreSkill('hokzhuyufenghui');
                    player.removeSkill(event.name);
                },
            },
        },
    },
    hoktayufeiyan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['loseAfter', 'equipAfter', 'addJudgeAfter', 'gainAfter', 'loseAsyncAfter', 'addToExpansionAfter'],
        },
        getIndex(event, player, triggername) {
            return game
                .filterPlayer((target) => {
                    if (target.getHp(true) < 1 || player.getStorage('hoktayufeiyan_used').includes(target)) return false;
                    let evt = event.getl(target);
                    if (evt && evt.hs && evt.hs.length && target.countCards('h') == 1) return true;
                    if (event.getg && event.getg(target) && event.getg(target).length && target.countCards('h') == 1) return true;
                    return false;
                })
                .sortBySeat();
        },
        filter(event, player, name, target) {
            return target && target.countCards('h') == 1;
        },
        logTarget(event, player, name, target) {
            return target;
        },
        check(event, player, name, target) {
            return get.damageEffect(target, player, player) > 0;
        },
        async content(event, trigger, player) {
            player.addTempSkill('hoktayufeiyan_used');
            player.markAuto('hoktayufeiyan_used', event.targets);
            player.addTempSkill('hoktayufeiyan_dying');
            event.targets[0].damage();
        },
        subSkill: {
            used: {
                charlotte: true,
            },
            dying: {
                trigger: {
                    global: 'dying',
                },
                forced: true,
                popup: false,
                charlotte: true,
                filter(event, player) {
                    let evt = event.getParent(2);
                    return evt && evt.name == 'hoktayufeiyan';
                },
                async content(event, trigger, player) {
                    game.trySkillAudio('hoktayufeiyan', player);
                    player.recover();
                    player.restoreSkill('hoktayufeiyan');
                    player.removeSkill(event.name);
                },
            },
        },
    },
    hokyinghuobihu: {
        global: 'hokyinghuobihu_global',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokyinghuobihu_draw', 'hokyinghuobihu_discard'],
        subSkill: {
            draw: {
                audio: 'hokyinghuobihu',
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                popup: false,
                getIndex(event, player, triggername) {
                    return game
                        .filterPlayer((target) => {
                            if (target == player) return false;
                            if (target.isHealthy()) return false;
                            if (event.parent.name != 'draw' || !event.getg || !event.getg(target)?.length) return false;
                            return (
                                target
                                    .getHistory('gain', (evt) => {
                                        return evt.parent.name == 'draw';
                                    })
                                    .reduce((p, c) => p + c.cards.length, 0) >= 3
                            );
                        })
                        .sortBySeat();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                prompt2(event, player, name, target) {
                    return `你可以令${get.translation(target)}回复1点体力.`;
                },
                check(event, player, name, target) {
                    if (get.attitude(player, target) <= 0) return false;
                    return get.recoverEffect(target, player, player) / 2 + get.attitude(player, target);
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.tempBanSkill(event.name, false, false);
                    await target.recover();
                },
            },
            discard: {
                audio: 'hokyinghuobihu',
                trigger: {
                    global: ['loseAfter', 'loseAsyncAfter'],
                },
                popup: false,
                getIndex(event, player, triggername) {
                    return game
                        .filterPlayer((target) => {
                            if (event.type != 'discard' || target == player || !event.getl || !event.getl(target) || !event.getl(target).cards2.length) return false;
                            return (
                                target
                                    .getHistory('lose', (evt) => {
                                        if (evt.type != 'discard') return false;
                                        return evt.cards2?.length;
                                    })
                                    .reduce((p, c) => p + c.cards2.length, 0) >= 3
                            );
                        })
                        .sortBySeat();
                },
                logTarget(event, player, name, target) {
                    return target;
                },
                prompt2(event, player, name, target) {
                    return `你可以对${get.translation(target)}造成1点伤害.`;
                },
                check(event, player, name, target) {
                    return get.damageEffect(target, player, player) > 0;
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.tempBanSkill(event.name, false, false);
                    await target.damage();
                },
            },
            global: {
                description: '每局游戏限一次,当你每回合因摸牌累计获得至少三张牌后,若与你距离为1的阵亡角色为桑启且其对你发动过<乘风启程>的回复体力效果,你回复1点体力',
                audio: 'hokyinghuobihu',
                trigger: {
                    player: 'gainAfter',
                    global: 'loseAsyncAfter',
                },
                forced: true,
                forceDie: true,
                filter(event, player) {
                    if (event.parent.name != 'draw' || !event.getg || !event.getg(player) || !event.getg(player)?.length) return false;
                    if (player.hasAllHistory('useSkill', (evt) => evt.skill == 'hokyinghuobihu_global')) return false;
                    if (
                        !game.hasPlayer(function (target) {
                            if (get.distance(player, target) > 1 || target.isAlive()) return false;
                            if (
                                !target.hasAllHistory('useSkill', (evt) => {
                                    return evt.skill == 'hokchengfengqicheng_draw' && evt.targets.includes(player);
                                })
                            )
                                return false;
                            return get.nameList(target).some((name) => ['hoksangqi'].includes(name));
                        })
                    )
                        return false;
                    return (
                        player
                            .getHistory('gain', (evt) => {
                                return evt.parent.name == 'draw';
                            })
                            .reduce((p, c) => p + c.cards.length, 0) >= 3
                    );
                },
                async content(event, trigger, player) {
                    game.popupMessageTips('☆萤火之旅');
                    game.log('☆', '#g萤火之旅');
                    await player.recover();
                },
            },
        },
    },
    hokchengfengqicheng: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokchengfengqicheng_draw', 'hokchengfengqicheng_discard'],
        subSkill: {
            draw: {
                audio: 'hokchengfengqicheng',
                trigger: {
                    player: 'gainAfter',
                },
                popup: false,
                filter(event, player) {
                    if (player.countMark('hokchengfengqicheng_used') >= 3) return false;
                    if (event.parent.name != 'draw') return false;
                    return event.getParent(2).name != 'hokchengfengqicheng_draw' && event.getParent('phaseDraw').player != player;
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt(event.name.slice(0, -5)), `你可以令一名角色摸一张牌`, function (card, player, target) {
                            return target != player;
                        })
                        .set('ai', function (target) {
                            const player = get.player();
                            return get.attitude(player, target) * Math.sqrt(Math.max(1, 4 - target.countCards('h')));
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('hokchengfengqicheng_used', 'roundStart');
                    player.addMark('hokchengfengqicheng_used', 1, false);
                    await target.draw();
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (
                                get.tag(card, 'draw') &&
                                game.hasPlayer(function (current) {
                                    return get.attitude(target, current) > 0;
                                })
                            ) {
                                return [1, 1.2];
                            }
                        },
                    },
                },
            },
            discard: {
                audio: 'hokchengfengqicheng',
                trigger: {
                    player: 'loseAfter',
                    global: 'loseAsyncAfter',
                },
                popup: false,
                filter(event, player) {
                    if (player.countMark('hokchengfengqicheng_used') >= 3) return false;
                    if (event.type != 'discard' || !event.getl || !event.getl(player) || !event.getl(player).cards2?.length) return false;
                    if (event.getParent(3).name == 'phaseDiscard' || event.getParent(3).name == 'hokchengfengqicheng_discard') return false;
                    return (
                        event.getParent('phaseDiscard').player != player &&
                        game.hasPlayer(function (current) {
                            return current.countCards('he', (card) => lib.filter.cardDiscardable(card, current, 'hokchengfengqicheng_discard'));
                        })
                    );
                },
                async cost(event, trigger, player) {
                    event.result = await player
                        .chooseTarget(get.prompt(event.name.slice(0, -5)), `你可以令一名角色弃一张牌`, function (card, player, target) {
                            return (
                                target != player &&
                                target.countCards('he', function (card) {
                                    return lib.filter.cardDiscardable(card, target, 'hokchengfengqicheng');
                                })
                            );
                        })
                        .set('ai', function (target) {
                            const player = get.player();
                            return -get.attitude(player, target);
                        })
                        .forResult();
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('hokchengfengqicheng_used', 'roundStart');
                    player.addMark('hokchengfengqicheng_used', 1, false);
                    if (
                        target.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, target, 'hokchengfengqicheng');
                        }, 'he')
                    )
                        await target.chooseToDiscard('he', true);
                },
                ai: {
                    effect: {
                        target(card, player, target) {
                            if (
                                get.tag(card, 'discard') &&
                                game.hasPlayer(function (current) {
                                    return get.attitude(target, current) <= 0 && current.countDiscardableCards(target, 'he');
                                })
                            ) {
                                return [1, 1.2];
                            }
                        },
                    },
                },
            },
            used: {
                charlotte: true,
            },
        },
    },
    hokyinghuoweiguang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        filter(event, player) {
            return [0, 1].some((info) => !player.getStorage('hokyinghuoweiguang_used').includes(info));
        },
        chooseButton: {
            dialog(event, player) {
                const deslist = ['弃牌并令其他角色摸牌', '摸牌并令其他角色弃牌'];
                const dialog = ui.create.dialog();
                dialog.id = 'mobiledialog';
                dialog.classList.add('noupdate');
                dialog.style.height = 120 + 'px';
                for (let i = 0; i < 2; i++) {
                    const area = ui.create.div('.sgs-yijinarea_long', dialog);
                    area.style.left = 22 + (i % 2) * 30.8 + '%';
                    area.link = i;
                    dialog.buttons.add(area);
                    area.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                    const des = ui.create.div('.yijin-skillTips', area);
                    des.innerHTML = deslist[i];
                    des.style.fontSize = '25px';
                }
                const tishi = ui.create.div('.skillTishi', dialog);
                tishi.innerHTML = "你可发动<span style='color: #a4dfd5'>萤火微光</span>,执行一项";
                const skillTitle = ui.create.div('.game_skill_title', dialog);
                skillTitle.classList.add('ssTitle');
                skillTitle.innerHTML = '萤火微光';
                const arrow = new Image();
                arrow.classList.add('game_skill_arrow');
                arrow.src = `extension/王者荣耀/image/dialog/arrow.png`;
                skillTitle.appendChild(arrow);
                dialog.direct = true;
                return dialog;
            },
            filter(button) {
                const player = get.player();
                if (
                    button.link == 0 &&
                    !player.hasCard(function (card) {
                        return lib.filter.cardDiscardable(card, player, 'hokyinghuoweiguang');
                    }, 'hes')
                )
                    return false;
                return !player.getStorage('hokyinghuoweiguang_used').includes(button.link);
            },
            backup(links) {
                const next = get.copy(get.info('hokyinghuoweiguang').backups[links[0]]);
                next.audio = 'hokyinghuoweiguang';
                return next;
            },
            check(button) {
                const player = get.player();
                switch (button.link) {
                    case 0: {
                        return 1;
                        var discard = Math.max.apply(
                            Math,
                            game
                                .filterPlayer((current) => {
                                    return current != player;
                                })
                                .map((current) => {
                                    return get.effect(current, { name: 'draw' }, player, player);
                                })
                        );
                        return discard;
                    }
                    case 1:
                        {
                            return 1.1;
                            var draw = Math.max.apply(
                                Math,
                                game
                                    .filterPlayer((current) => {
                                        return current != player;
                                    })
                                    .map((current) => {
                                        return get.effect(current, { name: 'discard' }, player, player);
                                    })
                            );
                            return draw;
                        }
                        return 0;
                }
            },
            prompt(links) {
                return ['弃一张牌并令一名其他角色摸一张牌', '摸一张牌并令一名其他角色弃一张牌'][links[0]];
            },
        },
        backups: [
            {
                filterTarget(card, player, target) {
                    return target != player;
                },
                position: 'hes',
                filterCard: true,
                check(card) {
                    return 6.5 - get.value(card);
                },
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('hokyinghuoweiguang_used', 'phaseUseAfter');
                    player.markAuto('hokyinghuoweiguang_used', [0]);
                    await target.draw();
                    if (
                        target.hasCard(function (card) {
                            return lib.filter.cardDiscardable(card, target, 'hokyinghuoweiguang');
                        })
                    ) {
                        const { bool } = await target
                            .chooseToDiscard('hes')
                            .set('prompt', `你可以弃置一张牌并令${get.translation(player)}摸一张牌`)
                            .set('ai', function (card) {
                                const player = get.player(),
                                    target = _status.event.parent.player;
                                if (get.attitude(player, target) <= 0) return 0;
                                return 5 - get.value(card);
                            })
                            .forResult();
                        if (bool) {
                            await player.draw();
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return get.effect(target, { name: 'draw' }, player, player);
                        },
                    },
                },
            },
            {
                filterTarget(card, player, target) {
                    return (
                        target != player &&
                        target.countCards('h', function (card) {
                            return lib.filter.cardDiscardable(card, target, 'hokyinghuoweiguang');
                        }) //QQQ
                    );
                },
                filterCard: () => false,
                selectCard: -1,
                async content(event, trigger, player) {
                    const target = event.targets[0];
                    player.addTempSkill('hokyinghuoweiguang_used', 'phaseUseAfter');
                    player.markAuto('hokyinghuoweiguang_used', [1]);
                    await player.draw();
                    if (
                        target.countCards('he', function (card) {
                            return lib.filter.cardDiscardable(card, target, 'hokyinghuoweiguang');
                        })
                    ) {
                        await target.chooseToDiscard('hes', true);
                    }
                    const { bool } = await target
                        .chooseBool()
                        .set('prompt', `###${get.prompt('hokyinghuoweiguang', player)}###你可以摸一张牌并弃置${get.translation(player)}的一张牌`)
                        .set('ai', () => {
                            const player = get.player(),
                                target = _status.event.parent.player;
                            return get.attitude(player, target) <= 0;
                        })
                        .forResult();
                    if (bool) {
                        await target.draw();
                        if (
                            player.hasCard(function (card) {
                                return lib.filter.cardDiscardable(card, player, 'hokyinghuoweiguang');
                            }, 'he')
                        ) {
                            await player.chooseToDiscard('hes', true);
                        }
                    }
                },
                ai: {
                    order: 10,
                    result: {
                        target(player, target) {
                            return get.effect(target, { name: 'discard' }, target, target);
                        },
                    },
                },
            },
        ],

        ai: {
            order: 10,
            threaten: 2.8,
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    hoknizhuansheji: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['discardBegin', 'drawBegin'],
        },
        filter(event, player) {
            if (player.getStorage('hoknizhuansheji_used').includes(event.name)) return false;
            if (event.name == 'discard') return event.player == player;
            return event.player != player && player.countDiscardableCards(event.player, 'h');
        },
        check(event, player) {
            if (event.name == 'discard') return event.cards && event.cards.length > 1;
            return get.attitude(player, event.player) <= 0;
        },
        prompt2(event, player) {
            if (event.name == 'discard') return `将你的弃置${get.cnNumber(event.cards.length)}张牌改为所有其他角色各摸一张牌`;
            return `将${get.translation(event.player)}的摸${get.cnNumber(event.num)}张牌改为其弃置你的一张手牌`;
        },
        logTarget: 'player',
        async content(event, trigger, player) {
            player.addTempSkill('hoknizhuansheji_used', 'roundStart');
            player.markAuto('hoknizhuansheji_used', [trigger.name]);
            trigger.cancel();
            if (trigger.name == 'discard') {
                const targets = game.filterPlayer((target) => target != player);
                if (targets.length) await game.asyncDraw(targets);
            } else if (player.countDiscardableCards(trigger.player, 'h')) {
                await trigger.player.discardPlayerCard(player, 'h', true);
            }
        },
        subSkill: {
            used: {
                charlotte: true,
            },
        },
    },
    hokheishabaodan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'useCardAfter',
        },
        xushiSkill: true,
        filter(event, player) {
            return get.info('hokheishabaodan').logTarget(event, player).length;
        },
        logTarget(event, player) {
            return game
                .filterPlayer((target) => {
                    let history = game.getGlobalHistory('everything');
                    for (let i = history.length - 1; i >= 0; i--) {
                        const evt = history[i];
                        if (evt == event) break;
                        if (evt.getg && evt.getg(target).length) return true;
                    }
                    return false;
                })
                .sortBySeat(player);
        },
        check(event, player) {
            var effect = 0;
            const targets = get.info('hokheishabaodan').logTarget(event, player);
            for (const target of targets) {
                let history = game.getGlobalHistory('everything'),
                    cards = [];
                for (let i = history.length - 1; i >= 0; i--) {
                    const evt = history[i];
                    if (evt == event) break;
                    if (evt.getg && evt.getg(target).length) cards.addArray(evt.getg(target));
                }
                if (get.attitude(player, target) < 0) effect += cards.length;
                else if (get.attitude(player, target) > 4) {
                    if (target.countCards('h') >= cards.length * 2) effect -= cards.length / 2;
                    effect -= cards.length;
                }
            }
            return effect > 1;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            var lose_list = [];
            for (const target of event.targets) {
                let history = game.getGlobalHistory('everything'),
                    cards = [];
                for (let i = history.length - 1; i >= 0; i--) {
                    const evt = history[i];
                    if (evt == trigger) break;
                    if (evt.getg && evt.getg(target).length) cards.addArray(evt.getg(target));
                }
                lose_list.push([target, cards]);
            }
            await game
                .loseAsync({
                    lose_list: lose_list,
                    discarder: player,
                })
                .setContent('discardMultiple');
        },
    },
    hokbieyue: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'chooseToUse',
        filter(event, player) {
            if (event.type == 'wuxie' || player.countCards('h') == 1) return false;
            if (player.countMark('hokbieyue_used') >= 3) return false;
            return ['sha', 'shan'].some((name) => event.filterCard({ name: name }, player, event));
        },
        chooseButton: {
            dialog(event, player) {
                const list = [];
                for (let name of ['sha', 'shan']) {
                    const card = { name: name };
                    if (event.filterCard && event.filterCard(card, player, event)) list.push(['基本', '', name]);
                }
                const dialog = ui.create.dialog('别月', [list, 'vcard'], 'hidden');
                dialog.direct = true;
                return dialog;
            },
            backup(links, player) {
                let next = {
                    viewAs: {
                        name: links[0][2],
                    },
                };
                let num = 1 - player.countCards('h');
                if (num >= 0) {
                    next.filterCard = () => false;
                    next.selectCard = -1;
                    next.precontent = lib.skill.hokbieyue.backups.get('draw').content;
                } else {
                    next.selectCard = -num;
                    next.ignoreMod = true;
                    next.filterCard = lib.filter.cardDiscardable;
                    next.check = (card) => {
                        return 5 - get.value(card);
                    };
                    next.precontent = lib.skill.hokbieyue.backups.get('discard').content;
                }
                return next;
            },
            prompt(links, player) {
                let num = 1 - player.countCards('h');
                return (num >= 0 ? '摸' : '弃') + get.cnNumber(Math.abs(num)) + '张牌并视为使用' + get.translation(links[0][2]);
            },
        },
        async contentx(event, trigger, player) {
            const history = player.getHistory('useCard', (evt) => {
                return evt.skill == 'hokbieyue_backup';
            });
            if (history.length > 1) {
                const evt = history[history.length - 2];
                if (evt.card.name == 'sha') {
                    const card = get.cardPile((cardx) => get.tag(cardx, 'damage'));
                    if (card) await player.gain(card, 'gain2');
                } else {
                    await player.gainHujiaCards();
                }
            }
        },
        backups: new Map([
            [
                'draw',
                {
                    async content(event, trigger, player) {
                        player.addTempSkill('hokbieyue_used', 'roundStart');
                        player.addMark('hokbieyue_used', 1, false);
                        await player.drawTo(1);
                        player
                            .when('useCardAfter')
                            .filter((event) => event.skill == 'hokbieyue_backup')
                            .then(() => {
                                const next = game.createEvent('hokbieyue_shunhua');
                                next.player = player;
                                next.setContent(lib.skill.hokbieyue.contentx);
                            });
                    },
                    ai: {
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
            ],

            [
                'discard',
                {
                    async content(event, trigger, player) {
                        player.addTempSkill('hokbieyue_used', 'roundStart');
                        player.addMark('hokbieyue_used', 1, false);
                        player
                            .when('useCardAfter')
                            .filter((event) => event.skill == 'hokbieyue_backup')
                            .then(() => {
                                const next = game.createEvent('hokbieyue_liuguang');
                                next.player = player;
                                next.setContent(lib.skill.hokbieyue.contentx);
                            });
                    },
                    ai: {
                        result: {
                            player(player) {
                                return 1;
                            },
                        },
                    },
                },
            ],
        ]),
        ai: {
            pretao: true,
            respondSha: true,
            respondShan: true,
            skillTagFilter(player, tag, arg) {
                if (arg != 'use') return false;
                if (player.countMark('hokbieyue_used') >= 3) return false;
            },
            order(item, player) {
                if (player.countCards('h') < 2) return get.order({ name: 'sha' }, player) + 0.2;
                return 1;
            },
            result: {
                player(player) {
                    return 1;
                },
            },
        },
        subSkill: {
            backup: {},
            used: {
                charlotte: true,
            },
        },
    },
    hokhuanhaiyingyue: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        xushiSkill: true,
        filter(event, player) {
            return !player.hasSkill('hokhuanhaiyingyue_effect');
        },
        filterTarget(card, player, target) {
            return player != target;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            game.addGlobalSkill('hokhuanhaiyingyue_global');
            player.addSkill('hokhuanhaiyingyue_effect');
            const target = event.targets[0],
                targets = game.filterPlayer((i) => i != player && i != target);
            for (const target of targets) {
                target.out('hokhuanhaiyingyue');
                target.classList.add('hokhuanhaiyingyue');
            }
            game.broadcastAll(() => {
                const index = get.rand(1, 5);
                ui.backgroundMusic.pause();
                ui.backgroundMusic.src = 'extension/王者荣耀/audio/bgm/海月 主题音乐<幻海映月>.mp3';
                ui.background.setBackgroundImage(`extension/王者荣耀/image/character/hokhaiyue/${index}.jpg`);
                ui.backgroundMusic.loop = true;
            });
        },
        ai: {
            order: 10,
            result: {
                target(player, target) {
                    if (target.getHp() == 1 && player.getHp() >= 3) return -1;
                    if (target.getHp() < player.getHp() && target.countCards('h') <= player.countCards('h')) return -1;
                    return 0;
                },
            },
        },
        subSkill: {
            global: {
                trigger: {
                    global: 'dieAfter',
                },
                forced: true,
                silent: true,
                firstDo: true,
                forceDie: true,
                charlotte: true,
                filter(event, player) {
                    return game.hasPlayer2((target) => target.classList.contains('hokhuanhaiyingyue'), true);
                },
                async content(event, trigger, player) {
                    const targets = game.filterPlayer2((i) => i.classList.contains('hokhuanhaiyingyue'), [], true);
                    game.countPlayer((target) => target.removeSkill('hokhuanhaiyingyue_effect'));
                    for (const target of targets) {
                        target.in('hokhuanhaiyingyue');
                        target.classList.remove('hokhuanhaiyingyue');
                    }
                    game.removeGlobalSkill('hokhuanhaiyingyue_global');
                    game.broadcastAll(() => {
                        ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                    });
                },
            },
            effect: {
                trigger: {
                    global: 'roundStart',
                },
                forced: true,
                silent: true,
                firstDo: true,
                forceDie: true,
                charlotte: true,
                async content(event, trigger, player) {
                    if (!player.storage[event.name]) player.storage[event.name] = true;
                    else {
                        player.removeSkill(event.name);
                        const targets = game.filterPlayer2((i) => i.classList.contains('hokhuanhaiyingyue'), [], true);
                        for (const target of targets) {
                            target.in('hokhuanhaiyingyue');
                            target.classList.remove('hokhuanhaiyingyue');
                        }
                        game.removeGlobalSkill('hokhuanhaiyingyue_global');
                        game.broadcastAll(() => {
                            ui.background.setBackgroundImage(`image/background/${lib.config.image_background}.jpg`);
                        });
                    }
                },
            },
        },
    },
    hokqisuixindong: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokqisuixindong_player', 'hokqisuixindong_target'],
        subSkill: {
            player: {
                audio: 'hokqisuixindong',
                trigger: {
                    player: 'useCardToAfter',
                },
                filter(event, player) {
                    if (!get.is.jishi(event.card) || event.target == player) return false;
                    return event.targets?.length && event.targets.length == 1;
                },
                prompt2(event, player) {
                    let description = `你可以摸一张牌,令${get.translation(event.target)}视为对你使用一张${get.translation(event.card)}`;
                    if (
                        player.hasHistory('useSkill', (evt) => {
                            return evt.skill == 'hokqisuixindong_target' && evt.targets?.includes(event.target);
                        })
                    )
                        description += `,最后你与其各回复1点体力`;
                    return description + `.`;
                },
                check(event, player) {
                    let card = {
                        name: event.card.name,
                        nature: event.card.nature,
                    },
                        target = event.target,
                        history = player.hasHistory('useSkill', (evt) => {
                            return evt.skill == 'hokqisuixindong_target' && evt.targets.includes(target);
                        }),
                        eff = get.effect(player, { name: 'draw' }, player, event.target) + get.effect(player, card, event.target, player);
                    if (history) eff += get.recoverEffect(player, player, player) + get.recoverEffect(target, player, player);
                    return eff > 2;
                },
                logTarget: 'target',
                async content(event, trigger, player) {
                    const target = trigger.target,
                        card = {
                            name: trigger.card.name,
                            nature: trigger.card.nature,
                        },
                        history = player.hasHistory('useSkill', (evt) => {
                            return evt.skill == 'hokqisuixindong_target' && evt.targets.includes(target);
                        });
                    player.tempBanSkill(event.name, false, false);
                    await player.draw();
                    if (target.canUse(card, player, false)) {
                        await target.useCard(card, player, false);
                    }
                    if (history) {
                        game.log('掌劲与拳劲触发:', player, '和', target, '各回复1点体力');
                        await player.recover();
                        await target.recover();
                    }
                },
            },
            target: {
                audio: 'hokqisuixindong',
                trigger: {
                    target: 'useCardToAfter',
                },
                popup: false,
                filter(event, player) {
                    if (event.player == player) return false;
                    if (
                        !get.is.jishi(event.card) ||
                        !player.countCards('hes', function (card) {
                            return lib.filter.cardDiscardable(card, player, 'hokqisuixindong');
                        })
                    )
                        return false;
                    return event.targets?.length && event.targets.length == 1;
                },
                async cost(event, trigger, player) {
                    let target = trigger.player,
                        card = {
                            name: trigger.card.name,
                            nature: trigger.card.nature,
                        },
                        history = player.hasHistory('useSkill', (evt) => {
                            return evt.skill == 'hokqisuixindong_player' && evt.targets.includes(target);
                        }),
                        description = `###${get.prompt(event.name.slice(0, -5), target)}###你可以弃置一张牌,令你视为对${get.translation(target)}使用一张${get.translation(trigger.card)}`;
                    if (history) description += `,最后你与其各失去1点体力`;
                    description += `.`;
                    const { bool, cards } = await player
                        .chooseToDiscard('hes')
                        .set('ai', function (card) {
                            if (!history && get.effect(target, card, player, player) <= 0) return 0;
                            if (history) {
                                if (get.effect(target, { name: 'losehp' }, player, player) >= 0) return 0;
                                if (player.getHp() + player.countCards('hs', (card) => player.canSaveCard(card, player)) <= 1) return 0;
                            }
                            return 6.5 - get.value(card);
                        })
                        .set('chooseonly', true)
                        .set('prompt', description)
                        .forResult();
                    if (bool) event.result = { bool, cost_data: { cards } };
                },
                async content(event, trigger, player) {
                    const target = trigger.player,
                        card = {
                            name: trigger.card.name,
                            nature: trigger.card.nature,
                        },
                        history = player.hasHistory('useSkill', (evt) => {
                            return evt.skill == 'hokqisuixindong_player' && evt.targets.includes(target);
                        });
                    player.tempBanSkill(event.name, false, false);
                    await player.discard(event.cost_data.cards);
                    if (player.canUse(card, target, false)) await player.useCard(card, target, false);
                    if (history) {
                        game.log('肘劲与靠劲触发:', player, '和', target, '各失去1点体力');
                        await player.loseHp();
                        await target.loseHp();
                    }
                },
            },
        },
    },
    hokyinyangnizhuan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        group: ['hokyinyangnizhuan_recover', 'hokyinyangnizhuan_damage'],
        subSkill: {
            recover: {
                audio: 'hokyinyangnizhuan',
                trigger: {
                    global: 'recoverBegin',
                },
                check(event, player) {
                    if (player.maxHp <= 2 + event.num || (player.maxHp < 6 && player.isHealthy())) return false;
                    if (get.attitude(player, event.player) >= 0) return false;
                    return get.recoverEffect(event.player, event.player, event.player) > 0;
                },
                logTarget: 'player',
                prompt2(event, player) {
                    return `你可以减${event.num}点体力上限并防止${get.translation(event.player)}此次回复的体力,你本轮下次失去体力时-${event.num}`;
                },
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    await player.loseMaxHp(trigger.num);
                    trigger.cancel();
                    player.addTempSkill('hokyinyangnizhuan_effect', 'roundStart');
                    player.addMark('hokyinyangnizhuan_loseHp', trigger.num, false);
                },
                ai: {
                    expose: 0.2,
                },
            },
            damage: {
                audio: 'hokyinyangnizhuan',
                trigger: {
                    global: 'damageBegin4',
                },
                check(event, player) {
                    if (player.maxHp <= 2 + event.num || (player.maxHp < 6 && player.isHealthy())) return false;
                    if (get.attitude(player, event.player) <= 0) return false;
                    return get.damageEffect(event.player, event.source, player, event.nature) * event.num < 0;
                },
                logTarget: 'player',
                prompt2(event, player) {
                    return `你可以减${event.num}点体力上限并防止${get.translation(event.player)}此次受到的伤害,你本轮下次造成伤害时+${event.num}`;
                },
                async content(event, trigger, player) {
                    player.tempBanSkill(event.name, 'roundStart', false);
                    await player.loseMaxHp(trigger.num);
                    trigger.cancel();
                    player.addTempSkill('hokyinyangnizhuan_effect', 'roundStart');
                    player.addMark('hokyinyangnizhuan_damage', trigger.num, false);
                },
                ai: {
                    expose: 0.2,
                },
            },
            effect: {
                trigger: {
                    player: 'loseHpBegin',
                    source: 'damageBegin1',
                },
                forced: true,
                charlotte: true,
                onremove(player, skill) {
                    delete player.storage.hokyinyangnizhuan_loseHp;
                    delete player.storage.hokyinyangnizhuan_damage;
                },
                filter(event, player) {
                    return player.countMark(`hokyinyangnizhuan_${event.name}`);
                },
                async content(event, trigger, player) {
                    trigger.num += player.countMark(`hokyinyangnizhuan_${trigger.name}`);
                    player.removeMark(`hokyinyangnizhuan_${trigger.name}`, player.countMark(`hokyinyangnizhuan_${trigger.name}`), false);
                },
            },
        },
    },
    hokxiandingbanqianghuadan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: 'chooseToUseBegin',
        },
        forced: true,
        filter(event, player) {
            const evt = event.getParent(2);
            return evt.card && evt.card.name == 'sha' && evt.player == player;
        },
        async content(event, trigger, player) {
            const targets = game
                .filterPlayer((i) => {
                    return !trigger.getParent(2).targets.includes(i);
                })
                .sortBySeat();
            if (targets.length) {
                for (const target of targets) {
                    if (!target.isIn()) continue;
                    const next = target.chooseToUse('限定版强化弹:是否替' + get.translation(trigger.player) + '使用一张【闪】？', { name: 'shan' });
                    next.set('ai', () => {
                        const event = _status.event;
                        return get.attitude(event.player, event.source) - 2;
                    });
                    next.set('skillwarn', '替' + get.translation(player) + '打出一张闪');
                    next.autochoose = lib.filter.autoRespondShan;
                    next.set('source', player);
                    const result = await next.forResult();
                    if (result.bool) {
                        trigger.result = { bool: true, card: { name: 'shan', cards: result.cards.slice() }, cards: result.cards.slice() };
                        trigger.responded = true;
                        trigger.animate = false;
                        break;
                    }
                }
            }
        },
        mod: {
            selectTarget(card, player, range) {
                if (card.name == 'sha') {
                    range[0] = -1;
                    range[1] = -1;
                }
            },
        },
    },
    hokchuanqiyingxiongdengchang: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'shan',
        },
        filterCard(card) {
            return !get.is.shownCard(card);
        },
        viewAsFilter(player) {
            if (!player.countCards('hs', (card) => !get.is.shownCard(card))) return false;
        },
        position: 'hs',
        prompt: '你可以明置一张手牌以视为使用或打出【闪】',
        check(card) {
            return 1;
        },
        lose: false,
        discard: false,
        delay: false,
        async precontent(event, trigger, player) {
            await player.addShownCards(event.result.cards, 'visible_Explicit');
        },
        mod: {
            cardname(card, player) {
                if (get.is.shownCard(card)) return 'sha';
            },
        },
    },
    hokriluohaiyanhuaxiu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: 'phaseDiscardBegin',
        },
        popup: false,
        xushiSkill: true,
        filter(event, player) {
            return player.countCards('h', { name: 'sha' });
        },
        async cost(event, trigger, player) {
            event.result = await player
                .chooseTarget(get.prompt2(event.name.slice(0, -5)), lib.filter.notMe)
                .set('ai', (target) => {
                    var player = get.player(),
                        cards = player.getCards('h', { name: 'sha' });
                    if (
                        get.attitude(player, target) >= 0 ||
                        !player.canUse(cards[0], target, false) ||
                        (target.mayHaveShan(
                            player,
                            'use',
                            target.getCards('h', (i) => {
                                return i.hasGaintag('sha_notshan');
                            })
                        ) &&
                            !player.hasSkillTag(
                                'directHit_ai',
                                true,
                                {
                                    target: target,
                                    card: cards[0],
                                },
                                true
                            ))
                    )
                        return 0;
                    return get.effect(target, cards[0], player, player);
                })
                .forResult();
        },
        async content(event, trigger, player) {
            const target = event.targets[0];
            player.awakenSkill(event.name);
            trigger.cancel();
            const cards = player.getCards('h', { name: 'sha' }).randomSort();
            for (const card of cards) {
                if (
                    player.getCards('h').includes(card) &&
                    card.name == 'sha' &&
                    player.canUse(
                        {
                            name: 'sha',
                            nature: get.nature(card, player),
                            cards: [card],
                        },
                        target,
                        false
                    )
                )
                    await player.useCard(target, false, card);
            }
        },
    },
    hoksuibianyishi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hoksuibianershi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokliuxingzhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokzhuyueshan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokluorizhan: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokhuange: {
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        rhythmSkill: true,
        filterTarget: lib.filter.notMe,
        prompt() {
            const player = get.player();
            return ['出牌阶段限一次,你可以指定一名其他角色,你与其下次不因此法摸牌后,可以令另一方摸等量的牌', '出牌阶段限一次,你可以指定一名其他角色,你与其下次不因此法回复体力后,可以令另一方回复等量的体力'][!player.storage.hokhuange ? 0 : 1];
        },
        async content(event, trigger, player) {
            const targets = event.targets.slice(0).concat(player),
                yunlv = player.storage[event.name],
                huange_trigger = yunlv ? { player: 'recoverEnd' } : { player: 'drawEnd' };
            for (const target of targets) {
                target
                    .when(huange_trigger)
                    .filter((event) => !event._hokhuange)
                    .then(() => {
                        trigger._hokhuange = true;
                        if (!source || !source.isIn()) return;
                        const description = trigger.name == 'recover' ? `欢歌:你可以令${get.translation(source)}回复${trigger.num}点体力` : `欢歌:你可以令${get.translation(source)}摸${get.cnNumber(trigger.num)}张牌`;
                        (async (event, trigger, player) => {
                            const { bool } = await player
                                .chooseBool(description)
                                .set('ai', () => {
                                    const player = get.player(),
                                        trigger = get.event().getTrigger();
                                    if (trigger.name == 'recover') return get.recoverEffect(source, player, player) * trigger.num > 0;
                                    return get.sgnAttitude(player, source) * get.effect(source, { name: 'draw' }, source, player) * trigger.num > 0;
                                })
                                .forResult();
                            if (bool) {
                                var next = game.createEvent('emptyEvent');
                                next.setContent('emptyEvent');
                                await next;
                                player.line(source);
                                source[trigger.name == 'recover' ? 'recover' : 'draw'](trigger.num)._hokhuange = true;
                            }
                        })(event, trigger, player);
                    })
                    .vars({ source: target == player ? event.target : player })
                    .translation('欢歌');
            }
        },
        ai: {
            combo: 'hokzhulang',
            order: 13,
            result: {
                target(player, target) {
                    if (get.attitude(player, target) <= 0) return 0;
                    return player.hasHistory('useSkill', (evt) => {
                        return evt.skill == 'hokhuange' && evt.targets.includes(target);
                    })
                        ? 1
                        : 1.5;
                },
            },
        },
        mark: true,
        marktext: '🎶',
        intro: {
            markcount(storage) {
                return storage ? '仄' : '平';
            },
            content(storage, player, skill) {
                return ['平:出牌阶段限一次,你可以指定一名其他角色,你与其下次不因此法获得牌后,可以令另一方摸等量的牌', '仄:出牌阶段限一次,你可以指定一名其他角色,你与其下次不因此法回复体力后,可以令另一方回复等量的体力'][storage == false ? 0 : 1];
            },
        },
        init(player, skill) {
            player.addSkill(`${skill}_zhuanyun`);
        },
        onremove(player, skill) {
            player.removeSkill(`${skill}_zhuanyun`);
        },
        subSkill: {
            zhuanyun: {
                audio: 'hokhuange',
                trigger: {
                    player: 'hokzhulangAfter',
                },
                forced: true,
                firstDo: true,
                charlotte: true,
                async content(event, trigger, player) {
                    player.changeRhythmSkill('hokhuange');
                },
            },
        },
    },
    hokzhulang: {
        global: 'hokzhulang_global',
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['recoverEnd', 'gainAsyncAfter'],
        },
        usable: 1,
        logTarget: 'player',
        filter(event, player, name) {
            return event.player != player && event.source && event.source == player;
        },
        filterx(event, player, name) {
            if (name == 'recoverEnd') return event.player != player && event.source && event.source == player;
            const evt = event.getParent(2);
            if (name == 'gainAfter') {
                if (evt.name == 'phaseDraw' && evt.player != player) return false;
                if (evt.name == 'useCard' && evt.player != player) return false;
                if (evt.name == 'recast' && evt.player != player) return false;
                if (evt.parent.name == 'useCard' && evt.player != player) return false;
                if (evt.skill && evt.player != player) return false;
                if (evt.parent.name == 'trigger' && evt.player != player) return false;
                if (evt.parent.name == 'useSkill' && evt.player != player) return false;
                if (evt.after == 'logSkill' && evt.player != player) return false;
                if (event.parent.source && event.parent.source != player) return false;
                if (event.parent.name != 'draw' && event.parent.player != player) return false;
            }
            return event.player != player;
        },
        async content(event, trigger, player) {
            trigger.player.recover();
            trigger.player.draw();
        },
        subSkill: {
            global: {
                trigger: {
                    global: ['gainAfter', 'loseAsyncAfter'],
                },
                forced: true,
                charlotte: true,
                silent: true,
                filter(event, player) {
                    const cards = event.getg(player);
                    if (!cards.length) return false;
                    if (
                        game.hasPlayer((current) => {
                            if (current == player) return false;
                            const evt = event.getl(current);
                            if (!evt || !evt.cards || !evt.cards.length) return false;
                            return evt.cards.some((card) => cards.includes(card));
                        })
                    )
                        return true;
                    return ['useCard', 'useSkill', 'trigger'].some((info) => event.getParent(info, true));
                },
                async content(event, trigger, player) {
                    const cards = trigger.getg(player);
                    const targets = game.filterPlayer((current) => {
                        if (current == player) return false;
                        const evt = trigger.getl(current);
                        if (!evt || !evt.cards || !evt.cards.length) return false;
                        return evt.cards.some((card) => cards.includes(card));
                    });
                    if (!targets.length) {
                        let evt, target;
                        const mayTriggerUse = ['useCard', 'useSkill', 'trigger'];
                        for (const info of mayTriggerUse) {
                            if (trigger.parent.name == 'draw' && trigger.parent.source) {
                                target = trigger.parent.source;
                                break;
                            }
                            evt = trigger.getParent(info, true);
                            if (evt) target = evt.player;
                            if (
                                (() => {
                                    if (trigger.parent.name != 'draw') return false;
                                    const evtx = trigger.getParent(2).name;
                                    if (!lib.skill[evtx] && !lib.card[evtx]) return true; //QQQ
                                    return false;
                                })()
                            )
                                continue;
                            if (target) break;
                        }
                        if (!target || target == player) return;
                        var next = game.createEvent('gainAsyncAfter', false);
                        next.player = player;
                        next.source = target;
                        next.setContent('emptyEvent');
                        return;
                    }
                    for (const target of targets) {
                        var next = game.createEvent('gainAsyncAfter', false);
                        next.player = player;
                        next.source = target;
                        next.setContent('emptyEvent');
                        await next;
                    }
                },
            },
        },
    },
    hoktianlai: {
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            global: ['useSkillAfter', 'logSkill', 'useCardAfter', 'respondAfter'],
        },
        lastDo: true,
        sunbenSkill: true,
        filter(event, player) {
            if (player.hasSkill('hoktianlai_sunben')) return false;
            let info = get.info(event.skill);
            if (!info || !lib.translate[event.skill] || !lib.translate[event.skill + '_info']) return false;
            return lib.skill.hoktianlai.filterx(event, event.player);
        },
        filterx(event, player) {
            var skill = event.skill,
                info = get.info(skill),
                resetSkills = [];
            var suffixs = ['used', 'round', 'block', 'blocker'];
            if (typeof info.usable == 'number') {
                if (player.getStat('triggerSkill')[skill] && player.getStat('triggerSkill')[skill] >= 1) {
                    resetSkills.add(skill);
                } else if (typeof get.skillCount(skill, event.player) == 'number' && get.skillCount(skill, event.player) >= 1) {
                    resetSkills.add(skill);
                }
            } else if (info.round && player.storage[skill + '_roundcount']) {
                resetSkills.add(skill);
            } else if (player.storage[`temp_ban_${skill}`]) {
                resetSkills.add(skill);
            } else if (player.awakenedSkills.includes(skill)) {
                resetSkills.add(skill);
            }
            for (var suffix of suffixs) {
                if (player.hasSkill(skill + '_' + suffix)) {
                    resetSkills.add(skill);
                }
            }
            return resetSkills.length;
        },
        prompt2(event, player) {
            return `令${get.translation(event.player)}重置【${get.skillTipsInfo(get.translation(event.skill), get.plainText(get.translation(event.skill + '_info')))}】`;
        },
        check(event, player) {
            const info = get.info(event.skill);
            if (get.attitude(player, event.player) < 6) return false;
            if (info.forceDie || !event.player.isIn()) return false;
            if (info.juexingji || info.dutySkill || info.hiddenSkill || info.clanSkill) return false;
            if (lib.skill.hoktianlai.perfectSkill.includes(event.skill)) return true;
            if (lib.skill.hoktianlai.fengyinSkill.includes(event.skill)) return false;
            if (lib.skill.hoktianlai.zhongliuSkill.some((skill) => event.player.hasSkill(skill))) return false;
            if (info == 'hokmingyundongcha') {
                if (event.player.hasSkill('hokmingyunhuisu') && !event.player.awakenedSkills.includes('hokmingyunhuisu')) return false;
            }
            if (info.trigger) {
                if (
                    Object.values(info.trigger).some((el) => {
                        if (Array.isArray(el)) return el.some((e) => ['enterGame', 'gameStart'].includes(e) || e.includes('phase'));
                        return ['enterGame', 'gameStart'].includes(el) || el.includes('phase');
                    })
                )
                    return false;
            }
            if (info.enable) {
                if (info.viewAs && typeof info.viewAs == 'function') return false;
                else if (info.viewAs && info.viewAs.name) {
                    if (!info.usable || !info.filter) return false;
                    return event.player.hasUseTarget({ name: name }, true, true);
                }
            }
            return true;
        },
        restoreSkill(event, trigger, player) {
            var skill = trigger.skill || trigger.sourceSkill,
                info = get.info(skill),
                resetSkills = [];
            var suffixs = ['used', 'round', 'block', 'blocker', 'sunben'];
            if (info.usable && typeof info.usable == 'number') {
                if (trigger.trigger.player.getStat('triggerSkill')[skill] && trigger.player.getStat('triggerSkill')[skill] >= 1) {
                    delete trigger.player.getStat('triggerSkill')[skill];
                    resetSkills.add(skill);
                } else if (typeof get.skillCount(skill, trigger.player) == 'number' && get.skillCount(skill, trigger.player) >= 1) {
                    delete trigger.player.getStat('skill')[skill];
                    resetSkills.add(skill);
                }
            } else if (info.round && trigger.player.storage[skill + '_roundcount']) {
                delete trigger.player.storage[skill + '_roundcount'];
                resetSkills.add(skill);
            } else if (trigger.player.storage[`temp_ban_${skill}`]) {
                delete trigger.player.storage[`temp_ban_${skill}`];
            } else if (trigger.player.awakenedSkills.includes(skill)) {
                trigger.player.restoreSkill(skill);
                resetSkills.add(skill);
            } else {
                for (var suffix of suffixs) {
                    if (trigger.player.hasSkill(skill + '_' + suffix)) {
                        player.removeSkill(skill + '_' + suffix);
                        resetSkills.add(skill);
                    }
                }
            }
            if (resetSkills.length) {
                var str = '';
                for (const i of resetSkills) {
                    str += '【' + get.translation(i) + '】、';
                }
                game.log(trigger.player, '重置了技能', '#g' + str.slice(0, -1));
            }
        },
        perfectSkill: ['qiaosi', 'dcfencheng', 'xinfencheng', 'hokmingyunhuisu'],
        fengyinSkill: ['hokkehankuanglie'],
        zhongliuSkill: ['clanzhongliu', 'hokhuanwu'],
        async content(event, trigger, player) {
            player.addSkill('hoktianlai_sunben');
            get.info('hoktianlai').restoreSkill(event, trigger, player);
            const history = trigger.player.getHistory('useSkill', (evt) => evt.skill == trigger.skill);
            if (history.length) history[history.length - 1]._wztianlai = true;
        },
        ai: {
            expose: 0.2,
            threaten: 2.5,
        },
        subSkill: {
            sunben: {
                charlotte: true,
                enable: 'phaseUse',
                filter(event, player) {
                    const skills = player.getSkills(null, false, false).filter((skill) => {
                        if (skill == 'hoktianlai') return false;
                        var info = get.info(skill);
                        return info && !info.charlotte && lib.translate[skill + '_info'];
                    });
                    return skills.length;
                },
                chooseButton: {
                    dialog(event, player) {
                        const skills = player.getSkills(null, false, false).filter((skill) => {
                            if (skill == 'hoktianlai') return false;
                            var info = get.info(skill);
                            return info && !info.charlotte && lib.translate[skill + '_info'];
                        });
                        const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
                        const mbdialog = new ui.create.mobileDialog(event, 'hoktianlai');
                        mbdialog.dialog.classList.add('changeSkill');
                        mbdialog.dialog.add([list, 'textbutton']);
                        mbdialog.addTip("你可发动<span style='color: #a4dfd5'>天籁</span>,选择失去一个技能重置<span style='color: #a4dfd5'>天籁</span>");
                        return event.dialog;
                    },
                    check(button) {
                        const player = get.player();
                        switch (button.link) {
                            case 'hokhuange':
                                return 0.8;
                                break;
                            case 'hokzhulang':
                                return 0.9;
                                break;
                            default:
                                return 1;
                                break;
                        }
                    },
                    backup(links, player) {
                        return {
                            skills: links,
                            filterCard: () => false,
                            selectCard: -1,
                            async content(event, trigger, player) {
                                player.removeSkills(get.info('hoktianlai_sunben_backup').skills.slice(0));
                                player.removeSkill('hoktianlai_sunben');
                                game.log(player, '回复了技能', '#g【天籁】');
                            },
                        };
                    },
                    prompt() {
                        return '你可以于出牌阶段失去一个技能并重置<天籁>';
                    },
                },
                ai: {
                    order: 1,
                    result: {
                        player(player, skill) {
                            if (!player.hasFriend()) return 0;
                            return player.getStockSkills(false, true).length;
                        },
                    },
                },
                mark: true,
                marktext: '天籁',
                intro: {
                    markcount: () => '失效',
                    content: '你可以于出牌阶段失去一个技能并重置<天籁>',
                },
            },
            sunben_backup: {},
        },
    },
    hokmingyundongcha: {
        global: 'hokzhulang_global',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            source: 'damageSource',
            player: ['damageEnd', 'recoverEnd'],
            global: ['gainAsyncAfter'],
        },
        zhuanhuanji: true,
        popup: false,
        filter(event, player, name) {
            const infoSkill = player.storage.hokmingyundongcha;
            if (name == 'recoverEnd') return infoSkill && event.source && event.source != player && event.source.isIn();
            if (name == 'damageSource') return infoSkill && event.player && event.player != player && event.source.isIn();
            if (infoSkill) return false;
            if (name == 'damageEnd') return event.source && event.source != player && event.source.isIn();
            return event.player == player && event.source && event.source != player && event.source.isIn();
        },
        filterx(event, player, name) {
            const infoSkill = player.storage.hokmingyundongcha;
            if (name == 'recoverEnd') return event.source && event.source != player && infoSkill;
            if (name == 'damageSource') return event.player && event.player != player && infoSkill;
            if (infoSkill) return false;
            if (name == 'damageEnd') return event.source && event.source != player;
            const evt = event.getParent(2);
            if (name == 'gainAfter') {
                if (evt.name == 'phaseDraw' && evt.player == player) return false;
                if (evt.name == 'useCard' && evt.player == player) return false;
                if (evt.name == 'recast' && evt.player == player) return false;
                if (evt.parent.name == 'useCard' && evt.player == player) return false;
                if (evt.skill && evt.player == player) return false;
                if (evt.parent.name == 'trigger' && evt.player == player) return false;
                if (evt.after == 'logSkill' && evt.player == player) return false;
                if (event.parent.source && event.parent.source == player) return false;
                if (event.parent.name != 'draw' && event.parent.player == player) return false;
            }
            return true;
        },
        async cost(event, trigger, player) {
            const list = [],
                storage = player.storage[event.name.slice(0, -5)];
            const target = trigger[event.triggername == 'damageSource' ? 'player' : 'source'];
            let description;
            if (!storage) {
                if (target.isDamaged()) list.add('回复体力');
                list.add(`造成伤害`);
                description = `${get.prompt(event.name.slice(0, -5), target)},令${get.translation(target)}回复1点体力或者对其造成1点伤害`;
            } else {
                list.addArray(['摸牌', `受到伤害`]);
                description = `${get.prompt(event.name.slice(0, -5), target)},令${get.translation(target)}摸一张牌或者受到其对你造成的1点伤害`;
            }
            const { control } = await player
                .chooseControl(list, 'cancel2')
                .set('prompt', description)
                .set('targetx', target)
                .set('ai', () => {
                    const player = get.player(),
                        target = get.event('targetx');
                    let controls = get.event('controls').slice();
                    if (!player.storage.hokmingyundongcha) {
                        let eff1 = get.recoverEffect(target, player, player),
                            eff2 = get.damageEffect(target, player, player);
                        if (controls.includes('回复体力') && eff1 > eff2 && get.attitude(player, target) > 0) return '回复体力';
                        if (eff2 > 0) return '造成伤害';
                    } else {
                        let eff1 = get.effect(target, { name: 'draw' }, target, target),
                            eff2 = get.damageEffect(player, target, target);
                        if (eff1 > eff2 && get.attitude(player, target) > 0) return '摸牌';
                        if (eff2 >= 0) return '受到伤害';
                    }
                    return controls[controls.length - 1];
                })
                .forResult();
            if (control != 'cancel2') event.result = { bool: true, cost_data: { control } };
        },
        async content(event, trigger, player) {
            const target = trigger[event.triggername == 'damageSource' ? 'player' : 'source'];
            switch (event.cost_data.control) {
                case '回复体力':
                    await target.recover().set('source', player);
                    break;
                case '造成伤害':
                    await target.damage(player);
                    break;
                case '摸牌':
                    await target.draw().set('source', player);
                    break;
                case '受到伤害':
                    await player.damage(target);
                    break;
            }
            player.changeZhuanhuanji(event.name);
        },
        mark: true,
        marktext: '☯',
        intro: {
            content(storage, player) {
                if (!storage) return `追芒:其他角色令你获得牌或你受到其造成的伤害后,你可以令其回复1点体力或你对其造成1点伤害`;
                return `旋击:其他角色令你回复体力或你对其造成伤害后,你可以令其摸一张牌或其对你造成1点伤害`;
            },
        },
    },
    hokmingyunxingyou: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        enable: 'phaseUse',
        usable: 1,
        filterTarget: lib.filter.notMe,
        async content(event, trigger, player) {
            const target = event.target,
                list = [];
            if (player.isDamaged()) list.push('回复体力');
            list.push('摸两张牌');
            const { control } = await target
                .chooseControl(list)
                .set('prompt', `令${get.translation(player)}回复1点体力或摸两张牌,你执行另一项`)
                .set('ai', () => {
                    const player = get.player(),
                        target = get.event().parent.target;
                    let controls = get.event('controls').slice();
                    let att = get.attitude(player, target);
                    let eff1 = get.recoverEffect(target, player, player);
                    if (att > 0) {
                        if (target.isDamaged() && eff1 > 0 && target.storage.hokmingyundongcha) return '回复体力';
                        else if (controls.includes('摸两张牌')) return '摸两张牌';
                    } else {
                        if (controls.includes('回复体力') && get.recoverEffect(player, player, player)) return '摸两张牌';
                    }
                    return controls[controls.length - 1];
                })
                .forResult();
            await player[control == '回复体力' ? 'recover' : 'draw'](control == '回复体力' ? 1 : 2).set('source', target);
            target[control == '回复体力' ? 'draw' : 'recover'](control == '回复体力' ? 2 : 1).set('source', player);
        },
        ai: {
            order: 6,
            result: {
                target(player, target) {
                    if (get.attitude(player, target) <= 0) return 0.5;
                    return 2;
                },
            },
        },
    },
    hokmingyunhuisu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        init: (player, skill) => player.addSkill('hokmingyunhuisu_record'),
        trigger: {
            global: 'phaseUseBegin',
        },
        xushiSkill: true,
        filter(event, player) {
            if (typeof player.storage.hokmingyunhuisu_record !== 'object') return false;
            return Object.keys(player.storage.hokmingyunhuisu_record).length;
        },
        getState(player) {
            const state = {
                hp: player.hp,
                maxHp: player.maxHp,
                nickname: player.nickname,
                skill: player.skills.slice(0),
                sex: player.sex,
                group: player.group,
                name: player.name,
                name1: player.name1,
                name2: player.name2,
                handcards: player.getCards('hs'),
                gaintag: [],
                equips: player.getCards('e'),
                judges: player.getCards('j'),
                specials: player.getCards('s'),
                expansions: player.getCards('x'),
                expansion_gaintag: [],
                disableJudge: player.isDisabledJudge(),
                disabledSlots: player.disabledSlots,
                expandedSlots: player.expandedSlots,
                views: [],
                position: parseInt(player.dataset.position),
                hujia: player.hujia,
                side: player.side,
                identityShown: player.identityShown,
                identityNode: [player.node.identity.innerHTML, player.node.identity.dataset.color],
                identity: player.identity,
                dead: player.isDead(),
                linked: player.isLinked(),
                turnedover: player.isTurnedOver(),
                out: player.isOut(),
                phaseNumber: player.phaseNumber,
                unseen: player.isUnseen(0),
                unseen2: player.isUnseen(1),
                seatNum: player.seatNum,
                _storage: [],
            };
            for (let i = 0; i < state.judges.length; i++) {
                state.views[i] = state.judges[i].viewAs;
            }
            for (let i = 0; i < state.handcards.length; i++) {
                state.gaintag[i] = state.handcards[i].gaintag;
            }
            for (let i = 0; i < state.expansions.length; i++) {
                state.expansion_gaintag[i] = state.expansions[i].gaintag;
            }
            return state;
        },
        backtrack(player, info) {
            player.node.handcards1.innerHTML = '';
            player.node.handcards2.innerHTML = '';
            player.node.equips.innerHTML = '';
            player.node.judges.innerHTML = '';
            if (player.node.expansions) player.node.expansions.innerHTML = '';
            player.directgain(info.handcards);
            info.equips.forEach((item) => {
                lib.element.player.equip.call(player, item)._triggered = null;
            });
            info.judges.forEach((item) => {
                if (item.viewAs != item.name && item.viewAs) {
                    lib.element.player.addJudge.call(player, { name: item.viewAs }, item)._triggered = null;
                } else {
                    lib.element.player.addJudge.call(player, item, [item])._triggered = null;
                }
            });
            if (info.expansions.length) {
                var expansion_gaintag = [];
                player.$addToExpansion(info.expansions);
                for (let i = 0; i < info.expansions.length; i++) {
                    info.expansions[i].addGaintag(info.expansion_gaintag[i]);
                    expansion_gaintag.addArray(info.expansion_gaintag[i]);
                }
                for (const i of expansion_gaintag) player.markSkill[i];
            }
            for (let i = 0; i < player.getCards('hs').length; i++) {
                player.getCards('hs')[i].addGaintag(info.gaintag[i]);
            }
            for (let i = 0; i < player.getCards('s').length; i++) {
                player.getCards('s')[i].classList.add('glows');
            }
            for (let i = 0; i < player.getCards('j').length; i++) {
                player.getCards('j')[i].viewAs = info.viewAs[i];
            }
        },
        async recall(event, trigger, player) {
            const record = event.record;
            player.classList[record.linked ? 'add' : 'remove']('linked');
            player.classList[record.turnedover ? 'add' : 'remove']('turnedover');
            player.classList[record.unseen ? 'add' : 'remove']();
            player.classList[record.unseen2 ? 'add' : 'remove']('unseen2');
            player.disabledSlots = record.disabledSlots;
            player.expandedSlots = record.expandedSlots;
            player.changeGroup(record.group, false, 'nobroadcast');
            player.identity = record.identity;
            player.identityShown = record.identityShown;
            player.hp = record.hp;
            player.maxHp = record.maxHp;
            player.hujia = record.hujia;
            player.sex = record.sex;
            player.side = record.side;
            player.phaseNumber = record.phaseNumber;
            player.seatNum = record.seatNum;
            player.storage._disableJudge = record.disableJudge;
            player.disabledSlots = record.disabledSlots;
            player.dataset.position = record.position;
            player.node.identity.innerHTML = record.identityNode[0];
            player.node.identity.dataset.color = record.identityNode[1];
            if (record.disableJudge) player.$disableJudge();
            player.$syncDisable();
            lib.skill.hokmingyunhuisu.backtrack(player, record);
            player.update();
            game.arrangePlayers();
            delete player.storage.hokmingyunhuisu_record;
            const history = player.getHistory('useSkill', (evt) => evt.skill == 'hokmingyunhuisu' && evt._wztianlai);
            if (history.length) {
                player
                    .when('phaseUseBegin')
                    .filter((event, player) => event._hokmingyunhuisu)
                    .then(() => {
                        for (const target of game.filterPlayer((i) => i != player)) {
                            target.addTempSkill('hokmingyunhuisu_fengyin');
                        }
                    });
            }
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addTempSkill('hokmingyunhuisu_backtrack');
        },
        ai: {
            combo: 'hokmingyundongcha',
            threaten: 2,
        },
        subSkill: {
            backtrack: {
                trigger: {
                    global: 'phaseEnd',
                },
                forced: true,
                charlotte: true,
                firstDo: true,
                async content(event, trigger, player) {
                    player.removeSkill(event.name);
                    var next = game.createEvent(`hokmingyunhuisu_backtracking`);
                    next.player = player;
                    next.record = player.storage.hokmingyunhuisu_record;
                    next.setContent(lib.skill.hokmingyunhuisu.recall);
                    var next = player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
            },
            record: {
                init: (player, skill) => (player.storage[skill] = {}),
                trigger: {
                    player: 'hokmingyundongchaAfter',
                },
                forced: true,
                popup: false,
                firstDo: true,
                charlotte: true,
                async content(event, trigger, player) {
                    player.storage[event.name] = get.info('hokmingyunhuisu').getState(player);
                },
            },
            fengyin: {
                description: '当你执行<命运回溯>的额外出牌阶段时,若有角色本回合对你发动<天籁>重置过<命运回溯>,此阶段所有其他角色的技能失效且不能使用或打出牌',
                init: (player, skill) => player.addSkillBlocker(skill),
                onremove: (player, skill) => player.removeSkillBlocker(skill),
                skillBlocker(skill, player) {
                    return !lib.skill[skill].charlotte;
                },
                charlotte: true,
                mark: true,
                marktext: '交响',
                intro: {
                    name: '命运交响',
                    content(storage, player, skill) {
                        var list = player.getSkills(null, false, false).filter(function (i) {
                            return lib.skill.hokmingyunhuisu_fengyin.skillBlocker(i, player);
                        });
                        if (list.length) return '失效技能:' + get.translation(list);
                        return '无失效技能';
                    },
                },
                mod: {
                    cardEnabled2: () => false,
                },
            },
        },
    },
    hokyinjiecangxing: {
        derivation: ['xinlonghun', 'hoklonghun_fire', 'hoklonghun_rain', 'hoklonghun_wind', 'hoklonghun_snow'],
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            player: ['phaseBegin', 'phaseEnd'],
        },
        filter(event, player) {
            return get
                .info('hokyinjiecangxing')
                .getSkills(player, true)
                .some((skill) => !player.getSkills(null, false, false).includes(skill));
        },
        async cost(event, trigger, player) {
            const skills = get.info('hokyinjiecangxing').getSkills(player, true);
            const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
            const mbdialog = new ui.create.mobileDialog(event, event.skill);
            mbdialog.dialog.classList.add('changeSkill');
            mbdialog.dialog.add([list, 'textbutton']);
            mbdialog.addTip(`你发动了<span style='color: #a4dfd5'>隐介藏形</span>,你可以选择获得一个龙魂技`);
            const { bool, links } = await player
                .chooseButton(event.dialog)
                .set('closeDialog', true)
                .set('filterButton', (button) => {
                    const player = get.player();
                    return !player.getSkills(null, false, false).includes(button.link);
                })
                .set('ai', (button) => {
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        async cost(event, trigger, player) {
            const skills = get.info('hokyinjiecangxing').getSkills(player, true);
            const list = skills.map((skill) => [skill, '【' + get.translation(skill) + '】:' + lib.translate[skill + '_info']]);
            const mbdialog = new ui.create.mobileDialog(event, event.skill);
            mbdialog.dialog.classList.add('skill-tdnodes');
            mbdialog.dialog.add([list, 'tdnodes']);
            mbdialog.addTip(`你可发动<span style='color: #a4dfd5'>隐介藏形</span>,选择获得一个龙魂技`);
            mbdialog.addSkills(skills);
            const { bool, links } = await player
                .chooseButton(event.dialog)
                .set('closeDialog', true)
                .set('filterButton', (button) => {
                    const player = get.player();
                    return !player.getSkills(null, false, false).includes(button.link);
                })
                .set('ai', (button) => {
                    return 1 + Math.random();
                })
                .forResult();
            if (bool) event.result = { bool, cost_data: { links } };
        },
        getSkills(player, bool, special) {
            const skills = ['hoklonghun_fire', 'hoklonghun_rain', 'hoklonghun_wind'];
            if (special) skills.add('hoklonghun_snow');
            if (bool) return skills;
            return player.getSkills(null, false, false).filter((skill) => get.info('hokyinjiecangxing').derivation.includes(skill));
        },
        async content(event, trigger, player) {
            player.addSkills(event.cost_data.links);
            player.markSkill(event.name);
        },
        marktext: '龙魂',
        intro: {
            markcount(storage, player) {
                return get.info('hokyinjiecangxing').getSkills(player, true, true).length;
            },
        },
        group: 'hokyinjiecangxing_use',
        subSkill: {
            use: {
                trigger: {
                    player: ['useCard', 'respond'],
                },
                filter(event, player, name) {
                    if (['global', 'equip'].includes(event.type)) return false;
                    let skill = get.sourceSkillFor(event);
                    if (!skill || get.is.locked(skill)) return false;
                    return event.skill.includes('longhun');
                },
                prompt2(event, player) {
                    const skills = get.info('hokyinjiecangxing').getSkills(player);
                    return `当你发动<龙魂>时,你可以失去之并将手牌摸至${get.cnNumber(skills.length - 1)}数.`;
                },
                check(event, player) {
                    const skills = get.info('hokyinjiecangxing').getSkills(player);
                    return player.countCards('h') < skills.length - 1;
                },
                async content(event, trigger, player) {
                    const skill = get.sourceSkillFor(trigger);
                    await player.removeSkills(skill);
                    const skills = get.info('hokyinjiecangxing').getSkills(player);
                    if (skills.length) await player.drawTo(skills.length);
                    else player.unmarkSkill('hokyinjiecangxing');
                },
            },
        },
    },
    hokqionghuxuanjian: {
        derivation: 'xinlonghun',
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
        trigger: {
            target: 'useCardToTarget',
            global: ['logSkillBegin', 'useSkill', 'useCard', 'respond'],
        },
        popup: false,
        xushiSkill: true,
        filter(event, player, name) {
            if (event.player == player) return false;
            if (name == 'useCardToTarget') return true;
            if (['global', 'equip'].includes(event.type)) return false;
            if (!event.targets || !event.targets.length) return false;
            let skill = event.sourceSkill || event.skill;
            if (!skill || skill === 'hokqionghuxuanjian') return false;
            let info = get.info(skill);
            while (true) {
                if (!info || info.charlotte || info.equipSkill) return false;
                if (info && !info.sourceSkill) break;
                skill = info.sourceSkill;
                info = get.info(skill);
            }
            return event.targets?.includes(player);
        },
        check(event, player, name) {
            if (_status.currentPhase == player) return false;
            if (name == 'useCardToTarget') {
                if (event.player == player) return false;
                return event.parent.excluded.includes(player) || get.effect(player, event.card, event.player, player) <= 0;
            }
            if (['logSkillBegin', 'useSkill', 'useCard', 'respond'].includes(name)) {
                return get.attitude(player, event.player) < 0;
            }
            return false;
        },
        async content(event, trigger, player) {
            player.awakenSkill(event.name);
            player.addTempSkills('hoklonghun_snow', 'roundStart');
            player.addTempSkill('diaohulishan');
        },
        ai: {
            threaten: 2.024,
        },
    },
    hoklonghun_fire: {
        nobracket: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'sha',
            nature: 'fire',
        },
        viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'diamond' })) return false;
        },
        filterCard(card) {
            return card.suit == 'diamond';
        },
        check(card) {
            return 7 - get.value(card);
        },
    },
    hoklonghun_rain: {
        nobracket: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'tao',
        },
        viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'heart' })) return false;
        },
        filterCard(card) {
            return card.suit == 'heart';
        },
        check(card) {
            return 7 - get.value(card);
        },
    },
    hoklonghun_wind: {
        nobracket: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'shan',
        },
        viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'club' })) return false;
        },
        filterCard(card) {
            return card.suit == 'club';
        },
        check(card) {
            return 7 - get.value(card);
        },
    },
    hoklonghun_snow: {
        nobracket: true,
        enable: ['chooseToUse', 'chooseToRespond'],
        viewAs: {
            name: 'wuxie',
        },
        viewAsFilter(player) {
            if (!player.countCards('hes', { suit: 'spade' })) return false;
        },
        filterCard(card) {
            return card.suit == 'spade';
        },
        check(card) {
            return 7 - get.value(card);
        },
    },
    hokwangshengtu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokjiwuqi: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokhunguiwangyou: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokwanwuweiliu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokliangtongxin: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokyuanbieli: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokyinyuanjihui: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hoklingyufengbao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokzuihoudekuangwu: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
    hokdaoyiyoudao: {
        nobracket: true,
        audio: 'ext:王者荣耀/audio:2',
    },
};
export default skills;
